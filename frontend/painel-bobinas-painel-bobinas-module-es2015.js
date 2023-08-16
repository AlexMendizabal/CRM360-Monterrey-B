(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["painel-bobinas-painel-bobinas-module"],{

/***/ "1xxA":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/comercial/ciclo-vendas/painel-bobinas/formulario/formulario.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: ComercialCicloVendasPainelBobinasFormularioModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCicloVendasPainelBobinasFormularioModule", function() { return ComercialCicloVendasPainelBobinasFormularioModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/popover */ "KOzp");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "FE24");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "Osdn");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "978R");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "2ZVE");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-currency-mask */ "D5nU");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular2-text-mask */ "UVXo");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var ng_brazil__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-brazil */ "hTrW");
/* harmony import */ var angular2_counto__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular2-counto */ "RNH4");
/* harmony import */ var angular2_counto__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(angular2_counto__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var _templates_templates_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../templates/templates.module */ "9lCC");
/* harmony import */ var _formulario_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./formulario.component */ "33s7");
/* harmony import */ var _modal_contato_contato_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./modal/contato/contato.component */ "mUvc");
/* harmony import */ var _modal_endereco_endereco_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./modal/endereco/endereco.component */ "BHdd");
/* harmony import */ var _modal_contato_contato_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./modal/contato/contato.service */ "IjbV");
/* harmony import */ var _modal_endereco_endereco_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./modal/endereco/endereco.service */ "xjFr");





// ngx-bootstrap







// ng-select

// ng2-currency-mask

// ng-brazil


// angular2-counto

// Modules



//components



//services


let ComercialCicloVendasPainelBobinasFormularioModule = class ComercialCicloVendasPainelBobinasFormularioModule {
};
ComercialCicloVendasPainelBobinasFormularioModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _formulario_component__WEBPACK_IMPORTED_MODULE_20__["ComercialPainelBobinasFormularioComponent"],
            _modal_contato_contato_component__WEBPACK_IMPORTED_MODULE_21__["ComercialCicloVendasPainelBobinasFormularioModalDetalhesContatoComponent"],
            _modal_endereco_endereco_component__WEBPACK_IMPORTED_MODULE_22__["ComercialCicloVendasPainelBobinasFormularioModalDetalhesEnderecoComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_5__["PopoverModule"].forRoot(),
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__["BsDropdownModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["ModalModule"].forRoot(),
            ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_8__["CarouselModule"].forRoot(),
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_9__["TooltipModule"].forRoot(),
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_10__["TabsModule"].forRoot(),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__["BsDatepickerModule"].forRoot(),
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["NgSelectModule"],
            ng2_currency_mask__WEBPACK_IMPORTED_MODULE_13__["CurrencyMaskModule"],
            angular2_text_mask__WEBPACK_IMPORTED_MODULE_14__["TextMaskModule"],
            ng_brazil__WEBPACK_IMPORTED_MODULE_15__["NgBrazil"],
            angular2_counto__WEBPACK_IMPORTED_MODULE_16__["CountoModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_17__["SharedModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_18__["TemplatesModule"],
            _templates_templates_module__WEBPACK_IMPORTED_MODULE_19__["ComercialTemplatesModule"],
        ],
        exports: [
            _modal_contato_contato_component__WEBPACK_IMPORTED_MODULE_21__["ComercialCicloVendasPainelBobinasFormularioModalDetalhesContatoComponent"],
            _modal_endereco_endereco_component__WEBPACK_IMPORTED_MODULE_22__["ComercialCicloVendasPainelBobinasFormularioModalDetalhesEnderecoComponent"],
        ],
        entryComponents: [
            _modal_contato_contato_component__WEBPACK_IMPORTED_MODULE_21__["ComercialCicloVendasPainelBobinasFormularioModalDetalhesContatoComponent"],
            _modal_endereco_endereco_component__WEBPACK_IMPORTED_MODULE_22__["ComercialCicloVendasPainelBobinasFormularioModalDetalhesEnderecoComponent"],
        ],
        providers: [
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["BsModalRef"],
            _modal_contato_contato_service__WEBPACK_IMPORTED_MODULE_23__["ComercialCicloVendasPainelBobinasFormularioModalDetalhesContatoService"],
            _modal_endereco_endereco_service__WEBPACK_IMPORTED_MODULE_24__["ComercialCicloVendasPainelBobinasFormularioModalDetalhesEnderecoService"],
        ],
    })
], ComercialCicloVendasPainelBobinasFormularioModule);



/***/ }),

/***/ "33s7":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/comercial/ciclo-vendas/painel-bobinas/formulario/formulario.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: ComercialPainelBobinasFormularioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialPainelBobinasFormularioComponent", function() { return ComercialPainelBobinasFormularioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./formulario.component.html */ "E+hd");
/* harmony import */ var _formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formulario.component.scss */ "vTQT");
/* harmony import */ var _cadastros_transportadoras_transportadoras_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../cadastros/transportadoras/transportadoras.service */ "n0wP");
/* harmony import */ var _cotacoes_formulario_formulario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../cotacoes/formulario/formulario.service */ "/Zk1");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modules/comercial/services/clientes.service */ "8ouN");
/* harmony import */ var ng_brazil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-brazil */ "hTrW");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _painel_bobinas_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../painel-bobinas.service */ "LF45");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _modal_contato_contato_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./modal/contato/contato.service */ "IjbV");
/* harmony import */ var _modal_endereco_endereco_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./modal/endereco/endereco.service */ "xjFr");
/* harmony import */ var _cadastros_formas_pagamento_formas_pagamento_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../cadastros/formas-pagamento/formas-pagamento.service */ "tVei");
/* harmony import */ var src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/shared/services/core/auth.service */ "yxCR");

















//interfaces


//servicos




let ComercialPainelBobinasFormularioComponent = class ComercialPainelBobinasFormularioComponent {
    constructor(formBuilder, authService, pnotify, transportadoraService, activatedRoute, router, routerService, cotacoesFormularioService, titleService, location, atividadesService, modalService, painelBobinasService, clientesService, contatoDetalhesService, enderecoDetalhesService, formasPagamentoService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.pnotify = pnotify;
        this.transportadoraService = transportadoraService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.routerService = routerService;
        this.cotacoesFormularioService = cotacoesFormularioService;
        this.titleService = titleService;
        this.location = location;
        this.atividadesService = atividadesService;
        this.modalService = modalService;
        this.painelBobinasService = painelBobinasService;
        this.clientesService = clientesService;
        this.contatoDetalhesService = contatoDetalhesService;
        this.enderecoDetalhesService = enderecoDetalhesService;
        this.formasPagamentoService = formasPagamentoService;
        this.MASKS = ng_brazil__WEBPACK_IMPORTED_MODULE_7__["MASKS"];
        this.user = this.authService.getCurrentUser();
        this.loading = false;
        this.loadingNavBar = false;
        this.breadCrumbTree = [];
        this.materiaisSelecionados = [];
        this.clientes = [];
        this.contatos = [];
        this.transportadoras = [];
        this.locaisEntrega = [];
        /* Pagination */
        this.itemsPerPage = 10;
        this.totalItems = 10;
        this.currentPage = 1;
        this.begin = 0;
        this.end = 10;
        /* Pagination */
        this.formasPagamento = [];
        this.tableConfig = {
            subtitleBorder: true,
        };
    }
    ngOnInit() {
        this.registrarAcesso();
        this.getLocalStorage();
        this.setBreadCrumb();
        this.setFormBuilder();
        this.onActivatedRoute();
        this.getFormasPagamento();
        this.getTransportadoras();
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
                routerLink: '/comercial/home',
            },
            {
                descricao: 'Ciclo de Vendas',
                routerLink: `/comercial/ciclo-vendas/${id}`,
            },
            {
                descricao: 'Painel de Bobinas',
                routerLink: `/comercial/ciclo-vendas/${id}/painel-bobinas`,
            },
            {
                descricao: this.appTitle,
            },
        ];
    }
    //Consumir informações que estão na rota para editar
    ngOnDestroy() {
        this.$activatedRouteSubscription.unsubscribe();
        this.unsetLoaderEvents();
    }
    unsetLoaderEvents() {
        if (this.loaderDetalhesContatoSubscription) {
            this.loaderDetalhesContatoSubscription.unsubscribe();
        }
        if (this.loaderDetalhesEnderecoSubscription) {
            this.loaderDetalhesEnderecoSubscription.unsubscribe();
        }
    }
    onActivatedRoute() {
        this.$activatedRouteSubscription =
            this.activatedRoute.queryParams.subscribe((response) => {
                this.tipoForm = this.routerService.getBase64UrlParams(response);
                this.form.get(['codContato']).disable();
                this.form.get(['codEndereco']).disable();
            });
    }
    getLocalStorage() {
        try {
            const materiais = localStorage.getItem('comercialPainelBobinasMateriais');
            this.materiaisSelecionados = JSON.parse(atob(materiais));
        }
        catch (error) {
            this.materiaisSelecionados = [];
            localStorage.removeItem('comercialPainelBobinasMateriais');
            this.pnotify.error('Materiais não encontrados!');
            this.location.back();
        }
    }
    //formulario
    setFormBuilder() {
        this.form = this.formBuilder.group({
            nomeCliente: [{ value: null, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__["Validators"].required]],
            codTransportadora: [
                { value: 1525, disabled: false },
                [_angular_forms__WEBPACK_IMPORTED_MODULE_16__["Validators"].required],
            ],
            nfMae: [{ value: null, disabled: false }, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__["Validators"].required]],
            codFormaPagamento: [
                { value: null, disabled: false },
                [_angular_forms__WEBPACK_IMPORTED_MODULE_16__["Validators"].required],
            ],
            valorMaterial: [{ value: null, disabled: false }, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__["Validators"].required]],
            aliquotaIcms: [{ value: null, disabled: false }, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__["Validators"].required]],
            codCliente: [{ value: null, disabled: false }],
            codContato: [{ value: null, disabled: false }],
            codEndereco: [{ value: null, disabled: false }],
        });
        this.formClientes = this.formBuilder.group({
            buscarPor: ['1'],
            pesquisa: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["Validators"].required],
            pagina: [1],
            situacao: ['Ativo'],
            registros: [this.itemsPerPage],
        });
    }
    getFormasPagamento() {
        this.loadingFormasPagamento = true;
        this.formasPagamentoService
            .getListaFormasPagamento({ tipoConsulta: 2 })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(() => {
            this.loadingFormasPagamento = false;
        }))
            .subscribe((response) => {
            if (response.success === true) {
                this.formasPagamento = response.data;
            }
            else {
                this.pnotify.notice('Nenhum registro encontrado!');
            }
            (error) => {
                this.pnotify.error();
            };
        });
    }
    getClientes() {
        this.loadingClientes = true;
        this.noClientes = this.clientes.length === 0 ? true : false;
        this.clientesService
            .getClientes(this.formClientes.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(() => {
            this.loadingClientes = false;
        }))
            .subscribe({
            next: (response) => {
                if (response.responseCode === 200) {
                    this.clientes = response['result']['analitico'];
                    this.totalItems = this.clientes[0]['total'];
                    this.noClientes = false;
                }
                else {
                    this.pnotify.notice('Nenhum registro encontrado!');
                    this.clientes = [];
                    this.noClientes = true;
                }
            },
            error: (error) => {
                this.pnotify.error();
                this.clientes = [];
            }
        });
    }
    openModal(template) {
        this.noClientes = true;
        this.modalRef = this.modalService.show(template, {
            animated: false,
            class: 'modal-xl',
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
        let formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormControl"]();
        if (this.form.controls[field].validator) {
            let validationResult = this.form.controls[field].validator(formControl);
            required =
                validationResult !== null && validationResult.required === true;
        }
        if (required) {
            return 'is-required';
        }
    }
    onPageChanged(event) {
        this.formClientes.get('pagina').setValue(event.page);
        this.getClientes();
    }
    postPainelBobinas() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = true;
            let request = [];
            const materiais = this.materiaisSelecionados;
            if (!materiais) {
                return;
            }
            const promise = () => {
                materiais.forEach((material) => {
                    const forms = this.form.value;
                    const params = material;
                    request.push(this.painelBobinasService.postPainelBobinas(this.setParams(forms, params)));
                });
            };
            yield Promise.resolve(promise());
            Object(rxjs__WEBPACK_IMPORTED_MODULE_17__["forkJoin"])([request])
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(() => {
                this.loading = false;
            }))
                .subscribe({
                next: (responses) => {
                    responses.forEach((response) => {
                        if (response.success === true) {
                            this.pnotify.success();
                            this.router.navigate(['/comercial/ciclo-vendas/${id}/painel-bobinas'], {
                                relativeTo: this.activatedRoute,
                            });
                        }
                        else {
                            this.pnotify.error();
                        }
                    });
                },
                error: (error) => {
                    try {
                        this.pnotify.error(error.error.message);
                    }
                    catch (error) {
                        this.pnotify.error();
                    }
                }
            });
        });
    }
    setParams(forms, params) {
        let _params = {};
        _params.empresa = params.codEmpresa;
        _params.seqLote = params.sequenciaLote;
        _params.matricula = this.user.info.matricula;
        _params.idVendedor = this.user.info.idVendedor;
        _params.codCliente = forms.codCliente;
        _params.codEndereco = forms.codEndereco;
        _params.aliquotaIcms = forms.aliquotaIcms;
        _params.valorUnitario = forms.valorMaterial;
        return _params;
    }
    setCliente(cliente) {
        this.getClientes();
        this.form.get('nomeCliente').setValue(cliente.razaoSocial);
        this.form.get('codCliente').setValue(cliente.codCliente);
        if (this.form.get('codCliente')) {
            this.getContatos(cliente);
            this.getLocaisEntrega(cliente);
        }
    }
    getContatos(cliente) {
        this.loadingContato = true;
        this.clientesService
            .getContatos(cliente.codCliente)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(() => {
            this.loadingContato = false;
        }))
            .subscribe((response) => {
            if (response.success === true) {
                this.form.get(['codContato']).enable();
                const _contatos = response.data;
                let contatos = [];
                for (let i = 0; i < _contatos.length; i++) {
                    if (_contatos[i].nomeCompleto &&
                        _contatos[i].nomeCompleto != null &&
                        _contatos[i].nomeCompleto != '' &&
                        _contatos[i].nomeCompleto.length > 1)
                        contatos.push({
                            codContato: _contatos[i].idSeqTid,
                            nomeContato: _contatos[i].nomeCompleto,
                        });
                }
                this.contatos = contatos;
            }
        });
    }
    getLocaisEntrega(cliente) {
        this.locaisEntrega = [];
        this.locaisEntregaLoader = true;
        this.cotacoesFormularioService
            .getLocaisEntrega(cliente.codCliente)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(() => {
            this.locaisEntregaLoader = false;
            this.form.controls.codEndereco.enable();
        }))
            .subscribe((response) => {
            if (response.success === true) {
                this.form.get(['codEndereco']).enable();
                const _enderecos = response.data.enderecos;
                const _enderecosAguardando = response.data.enderecosAguardando || [];
                let enderecos = [], enderecosAguardando = [];
                for (let i = 0; i < _enderecos.length; i++) {
                    enderecos.push({
                        codEndereco: _enderecos[i].id,
                        descricao: this.formatLocalEntrega(_enderecos[i]),
                        tipo: 'Aprovados',
                    });
                }
                for (let i = 0; i < _enderecosAguardando.length; i++) {
                    enderecosAguardando.push({
                        codEndereco: _enderecosAguardando[i].id,
                        descricao: this.formatLocalEntrega(_enderecosAguardando[i]),
                        tipo: 'Aguardando aprovação',
                    });
                }
                this.locaisEntrega = [...enderecos, ...enderecosAguardando];
            }
        });
    }
    formatLocalEntrega(localEntrega) {
        return `${localEntrega.endereco} - ${localEntrega.bairro}, ${localEntrega.cidade} - ${localEntrega.uf} - ${localEntrega.cep}`;
    }
    getTransportadoras(params) {
        const _params = params !== null && params !== void 0 ? params : {};
        this.loadingTransportadora = true;
        this.transportadoraService
            .getListaTransportadoras(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(() => {
            this.loadingTransportadora = false;
        }))
            .subscribe({
            next: (response) => {
                if (response.hasOwnProperty('success') && response.success === true) {
                    this.transportadoras = response['data'];
                }
                else {
                    this.pnotify.error();
                }
            },
            error: (error) => {
                if (error.error.hasOwnProperty('mensagem')) {
                    this.pnotify.error(error.error.mensagem);
                }
                else {
                    this.pnotify.error();
                }
            }
        });
    }
    setLoaderEvents() {
        this.loaderDetalhesContatoSubscription =
            this.contatoDetalhesService.loaderNavbar.subscribe((response) => {
                this.loadingNavBar = response;
            });
        this.loaderDetalhesEnderecoSubscription =
            this.enderecoDetalhesService.loaderNavbar.subscribe((response) => {
                this.loadingNavBar = response;
            });
    }
    onDetalhesContato() {
        if (this.form.value.codContato != null) {
            this.contatoDetalhesService.showModal(this.form.value.codCliente, this.form.value.codContato);
        }
    }
    onDetalhesLocalEntrega() {
        if (this.form.value.codEndereco != null) {
            this.enderecoDetalhesService.showModal(this.form.value.codCliente, this.form.value.codEndereco);
        }
    }
};
ComercialPainelBobinasFormularioComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormBuilder"] },
    { type: src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_22__["AuthService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_13__["PNotifyService"] },
    { type: _cadastros_transportadoras_transportadoras_service__WEBPACK_IMPORTED_MODULE_3__["ComercialCadastrosTransportadoraService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_8__["RouterService"] },
    { type: _cotacoes_formulario_formulario_service__WEBPACK_IMPORTED_MODULE_4__["ComercialCicloVendasCotacoesFormularioService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_9__["TitleService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_18__["Location"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"] },
    { type: _painel_bobinas_service__WEBPACK_IMPORTED_MODULE_12__["ComercialPainelBobinasService"] },
    { type: src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_6__["ComercialClientesService"] },
    { type: _modal_contato_contato_service__WEBPACK_IMPORTED_MODULE_19__["ComercialCicloVendasPainelBobinasFormularioModalDetalhesContatoService"] },
    { type: _modal_endereco_endereco_service__WEBPACK_IMPORTED_MODULE_20__["ComercialCicloVendasPainelBobinasFormularioModalDetalhesEnderecoService"] },
    { type: _cadastros_formas_pagamento_formas_pagamento_service__WEBPACK_IMPORTED_MODULE_21__["ComercialCadastrosFormasPagamentoService"] }
];
ComercialPainelBobinasFormularioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_15__["Component"])({
        selector: 'comercial-ciclo-vendas-painel-bobinas-formulario',
        template: _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormBuilder"],
        src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_22__["AuthService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_13__["PNotifyService"],
        _cadastros_transportadoras_transportadoras_service__WEBPACK_IMPORTED_MODULE_3__["ComercialCadastrosTransportadoraService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_14__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_8__["RouterService"],
        _cotacoes_formulario_formulario_service__WEBPACK_IMPORTED_MODULE_4__["ComercialCicloVendasCotacoesFormularioService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_9__["TitleService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_18__["Location"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"],
        ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"],
        _painel_bobinas_service__WEBPACK_IMPORTED_MODULE_12__["ComercialPainelBobinasService"],
        src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_6__["ComercialClientesService"],
        _modal_contato_contato_service__WEBPACK_IMPORTED_MODULE_19__["ComercialCicloVendasPainelBobinasFormularioModalDetalhesContatoService"],
        _modal_endereco_endereco_service__WEBPACK_IMPORTED_MODULE_20__["ComercialCicloVendasPainelBobinasFormularioModalDetalhesEnderecoService"],
        _cadastros_formas_pagamento_formas_pagamento_service__WEBPACK_IMPORTED_MODULE_21__["ComercialCadastrosFormasPagamentoService"]])
], ComercialPainelBobinasFormularioComponent);



/***/ }),

/***/ "7vwB":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/comercial/ciclo-vendas/painel-bobinas/lista/lista.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NpY2xvLXZlbmRhcy9wYWluZWwtYm9iaW5hcy9saXN0YS9saXN0YS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "AUdR":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/comercial/ciclo-vendas/painel-bobinas/lista/lista.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ComercialPainelBobinasListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialPainelBobinasListaComponent", function() { return ComercialPainelBobinasListaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lista.component.html */ "RUEd");
/* harmony import */ var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lista.component.scss */ "7vwB");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/modules/confirm-modal/confirm-modal.service */ "FOez");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _painel_bobinas_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../painel-bobinas.service */ "LF45");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");
/* harmony import */ var _cotacoes_formulario_formulario_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../cotacoes/formulario/formulario.service */ "/Zk1");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");





//angular



//servicos





// rxjs


let ComercialPainelBobinasListaComponent = class ComercialPainelBobinasListaComponent {
    /* Pagination */
    constructor(route, pnotify, activatedRoute, painelBobinasService, formBuilder, modalService, titleService, confirmModalService, routerService, dateService, formularioService) {
        this.route = route;
        this.pnotify = pnotify;
        this.activatedRoute = activatedRoute;
        this.painelBobinasService = painelBobinasService;
        this.formBuilder = formBuilder;
        this.modalService = modalService;
        this.titleService = titleService;
        this.confirmModalService = confirmModalService;
        this.routerService = routerService;
        this.dateService = dateService;
        this.formularioService = formularioService;
        this.noResult = false;
        this.loading = false; //Loading FullPage
        this.loadingNavBar = false; //Loading do NAVBAR
        this.materiais = [];
        this.empresas = [];
        this.materiaisSelecionados = [];
        this.qtMateriais = 0;
        this.cardCounterConfig = {
            showDecimals: false,
            format: 'number',
        };
        // Tipos de Situação dos Materials (Ativo/Inativo)
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
        // CUSTOM TABLE
        this.tableConfig = {
            subtitleBorder: true,
        };
        /* Pagination */
        this.itemsPerPage = 100;
        this.currentPage = 1;
    }
    ngOnInit() {
        localStorage.removeItem('comercialPainelBobinasMateriais');
        this.getEmpresas();
        this.buildForm();
        this.setBreadCrumb();
        this.titleService.setTitle('Painel de Bobinas');
        this.onActivatedRoute();
    }
    ngOnDestroy() {
        this.$activatedRouteSubscription.unsubscribe();
    }
    getLocalStorage() {
        try {
            const materiais = localStorage.getItem('comercialPainelBobinasMateriais');
            this.materiaisSelecionados = JSON.parse(atob(materiais));
        }
        catch (error) {
            this.materiaisSelecionados = [];
            localStorage.removeItem('comercialPainelBobinasMateriais');
        }
    }
    onActivatedRoute() {
        this.$activatedRouteSubscription =
            this.activatedRoute.queryParams.subscribe((response) => {
                const _response = this.routerService.getBase64UrlParams(response);
                this.form.patchValue(_response);
            });
    }
    setPageRegistros(itemsPerPage) {
        this.itemsPerPage = itemsPerPage;
        this.onFilter();
    }
    buildForm() {
        this.form = this.formBuilder.group({
            lote: [null],
            empresa: [18, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
            pagina: [1],
            registros: [this.itemsPerPage],
            categoriaProduto: [1],
            TIME: [new Date().getTime()],
        });
    }
    setBreadCrumb() {
        const id = this.activatedRoute.snapshot.params.idSubModulo;
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: `/comercial/home`,
            },
            {
                descricao: 'Ciclo de Vendas',
                routerLink: `/comercial/ciclo-vendas/${id}`,
            },
            {
                descricao: 'Painel de Bobinas',
            },
        ];
    }
    onFilter(params) {
        localStorage.removeItem('comercialPainelBobinasMateriais');
        this.form.get('TIME').setValue(new Date().getTime());
        this.route.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams(this.getParams()),
        });
        this.getListaBobinas(this.getParams());
        this.getLocalStorage();
    }
    checkMaterial(material) {
        material.checked = material.checked == 0 ? 1 : 0;
        const materiais = this.materiais.filter((material) => material['checked'] == 1);
        this.materiaisSelecionados = materiais;
        localStorage.removeItem('comercialPainelBobinasMateriais');
        localStorage.setItem('comercialPainelBobinasMateriais', btoa(JSON.stringify(this.materiaisSelecionados)));
    }
    getTotalMateriais() {
        return this.materiaisSelecionados.length;
    }
    removeMaterial(material) {
        this.materiaisSelecionados = this.materiaisSelecionados.filter((value) => value.sequenciaLote != material.sequenciaLote);
        this.materiais.map((value) => {
            if (value.sequenciaLote == material.sequenciaLote) {
                material.checked = 0;
            }
            this.materiaisSelecionados = this.materiaisSelecionados.filter((value) => value.checked == 1);
            localStorage.removeItem('comercialPainelBobinasMateriais');
            localStorage.setItem('comercialPainelBobinasMateriais', btoa(JSON.stringify(this.materiaisSelecionados)));
        });
        if (this.materiaisSelecionados.length == 0) {
            localStorage.removeItem('comercialPainelBobinasMateriais');
        }
    }
    openModal(template) {
        this.materiaisSelecionados;
        this.modalRef = this.modalService.show(template, {
            animated: false,
            class: 'modal-xl',
            backdrop: 'static',
        });
    }
    hideModal() {
        this.modalRef.hide();
    }
    getListaBobinas(params) {
        this.loading = true;
        this.painelBobinasService
            .getListaBobinas(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(() => {
            this.loading = false;
        }))
            .subscribe({
            next: (response) => {
                if (response.success === true) {
                    const codMaterial = this.materiaisSelecionados.map((material) => material.ID);
                    this.materiais = response.data.map(function (el) {
                        var o = Object.assign({}, el);
                        o.checked = codMaterial.includes(o.ID) ? 1 : 0;
                        return o;
                    });
                    this.materiais = this.materiais.filter((value) => value.situacao == 'Disponível');
                    this.totalItems = this.materiais.length;
                    this.noResult = false;
                }
                if (this.materiais.length == 0) {
                    this.pnotify.notice('Nenhum registro encontrado!');
                    this.materiais = [];
                    this.noResult = true;
                }
            },
            error: (error) => {
                this.pnotify.error();
            }
        });
    }
    getEmpresas() {
        this.loading = true;
        this.formularioService
            .loadDependencies()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(() => {
            this.loading = false;
        }))
            .subscribe((response) => {
            this.empresas = response[1].result || [];
        });
    }
    openRegister() {
        this.hideModal();
        this.route.navigate(['../novo'], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams(this.form.get('categoriaProduto').value.toString()),
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
    onPageChanged(event) {
        this.form.get('PAGI').setValue(event.page);
        this.onFilter();
    }
};
ComercialPainelBobinasListaComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _painel_bobinas_service__WEBPACK_IMPORTED_MODULE_9__["ComercialPainelBobinasService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"] },
    { type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_4__["ConfirmModalService"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_14__["DateService"] },
    { type: _cotacoes_formulario_formulario_service__WEBPACK_IMPORTED_MODULE_12__["ComercialCicloVendasCotacoesFormularioService"] }
];
ComercialPainelBobinasListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'comercial-ciclo-vendas-painel-bobinas-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
        _painel_bobinas_service__WEBPACK_IMPORTED_MODULE_9__["ComercialPainelBobinasService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
        ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"],
        src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_4__["ConfirmModalService"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_14__["DateService"],
        _cotacoes_formulario_formulario_service__WEBPACK_IMPORTED_MODULE_12__["ComercialCicloVendasCotacoesFormularioService"]])
], ComercialPainelBobinasListaComponent);



/***/ }),

/***/ "BHdd":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/ciclo-vendas/painel-bobinas/formulario/modal/endereco/endereco.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: ComercialCicloVendasPainelBobinasFormularioModalDetalhesEnderecoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCicloVendasPainelBobinasFormularioModalDetalhesEnderecoComponent", function() { return ComercialCicloVendasPainelBobinasFormularioModalDetalhesEnderecoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_endereco_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./endereco.component.html */ "TfFQ");
/* harmony import */ var _endereco_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./endereco.component.scss */ "jgra");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");




// ngx-bootstrap

//service

let ComercialCicloVendasPainelBobinasFormularioModalDetalhesEnderecoComponent = class ComercialCicloVendasPainelBobinasFormularioModalDetalhesEnderecoComponent {
    constructor(bsModalRef, dateService) {
        this.bsModalRef = bsModalRef;
        this.dateService = dateService;
    }
    ngOnInit() { }
    convertMysqlTime(time) {
        return this.dateService.convertMysqlTime(time);
    }
    onClose() {
        this.bsModalRef.hide();
    }
};
ComercialCicloVendasPainelBobinasFormularioModalDetalhesEnderecoComponent.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_5__["DateService"] }
];
ComercialCicloVendasPainelBobinasFormularioModalDetalhesEnderecoComponent.propDecorators = {
    endereco: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['endereco',] }]
};
ComercialCicloVendasPainelBobinasFormularioModalDetalhesEnderecoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-ciclo-vendas-cotacoes-formulario-modal-detalhes-endereco',
        template: _raw_loader_endereco_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_endereco_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_5__["DateService"]])
], ComercialCicloVendasPainelBobinasFormularioModalDetalhesEnderecoComponent);



/***/ }),

/***/ "E+hd":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/ciclo-vendas/painel-bobinas/formulario/formulario.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\r\n<app-header appTitle=\"Cadastro de Materiais\">\r\n  <button\r\n    [disabled]=\"form.valid === false || form.value.codCliente == null\"\r\n    (click)=\"postPainelBobinas()\"\r\n    >\r\n    Salvar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <div >\r\n    <blockquote class=\"blockquote mx-4 text-center\" >\r\n      <p class=\"text-primary mb-0\" [hidden] =\"tipoForm != 1\">BOBINA</p>\r\n      <p class=\"text-primary mb-0\" [hidden] =\"tipoForm != 2\">CORTE ESPECIAL</p>\r\n      <p class=\"text-primary mb-0\" [hidden] =\"tipoForm != 3\">REBAIXAMENTO</p>\r\n    </blockquote>\r\n  </div>\r\n  <form [formGroup]=\"form\" autocomplete=\"off\" [hidden] = \"loading\">\r\n    <fieldset  class=\"col-12\">\r\n      <fieldset class=\"border rounded shadow-sm col-12\">\r\n        <legend>Materiais</legend>\r\n        <custom-table  [config]=\"tableConfig\" class=\"text-center\">\r\n          <ng-template #thead let-thead>\r\n            <tr>\r\n              <th>Lote</th>\r\n              <th>Material</th>\r\n              <th>Empresa</th>\r\n              <th>Data de Entrada do Lote</th>\r\n            </tr>\r\n          </ng-template>\r\n          <ng-template #tbody let-tbody>\r\n            <tr *ngFor=\"let material of materiaisSelecionados\">\r\n              <td [ngClass]=\"material.situacao == 'Disponível' ? 'border-success' : 'border-danger'\">{{ material.descLote | uppercase }}</td>\r\n              <td>{{ material.codMaterial }} - {{ material.nomeMaterial | uppercase }}</td>\r\n              <td>{{ material.nomeEmpresa | uppercase }}</td>\r\n              <td>{{ material.dataEntradaLote | date:'dd/MM/yyyy HH:mm' }}</td>\r\n            </tr>\r\n          </ng-template>\r\n        </custom-table><br>\r\n      </fieldset>\r\n      <br>\r\n      <br>\r\n      <fieldset class=\"border rounded shadow-sm col-12\">\r\n        <legend>Dados do Cliente</legend>\r\n        <div class=\"form-row justify-content-center\">\r\n          <div class=\"form-group col-md-5 pl-0\">\r\n            <div class=\"mb-0 d-flex justify-content-between w-100\" style=\"height: 22px\">\r\n              <label class=\"my-auto\" for=\"nomeCliente\">Cliente</label>\r\n              <div class=\"my-auto text-uppercase\" style=\"font-size: 10px\" >\r\n                <a\r\n                  class=\"text-primary\"\r\n                  href=\"javascript:void(0)\"\r\n                  (click)=\"openModal(selecionarCliente)\">\r\n                  <strong>Selecionar</strong>\r\n                </a>\r\n              </div>\r\n            </div>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"nomeCliente\"\r\n              formControlName=\"nomeCliente\"\r\n              placeholder=\"SELECIONE\"\r\n              [ngClass]=\"onFieldError('nomeCliente') + ' ' + onFieldRequired('nomeCliente')\"\r\n            />\r\n            <invalid-form-control [show]=\"onFieldInvalid('nomeCliente')\" message=\"Cliente é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n          <div class=\"form-group col-lg-2 pl-0 \">\r\n            <div class=\"mb-0 d-flex justify-content-between w-100\" style=\"height: 22px\">\r\n              <label class=\"my-auto\" for=\"codContato\">Contato responsável</label>\r\n              <div class=\"my-auto text-uppercase\" style=\"font-size: 11px\" *ngIf=\"form.value.codCliente != null\">\r\n                <a\r\n                  class=\"text-secondary\"\r\n                  href=\"javascript:void(0)\"\r\n\r\n                  (click)=\"onDetalhesContato()\">\r\n                  <strong>Detalhes</strong>\r\n                </a>\r\n              </div>\r\n            </div>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"false\"\r\n              [items]=\"contatos\"\r\n              formControlName=\"codContato\"\r\n              [virtualScroll]=\"true\"\r\n              bindLabel=\"nomeContato\"\r\n              bindValue=\"codContato\"\r\n              [loading]=\"loadingContato\"\r\n              loadingText=\"Carregando...\"\r\n              >\r\n            </ng-select>\r\n          </div>\r\n          <div class=\"form-group col-lg-5 pl-0 \">\r\n            <div class=\"mb-0 d-flex justify-content-between w-100\" style=\"height: 22px\">\r\n              <label class=\"my-auto\" for=\"codEndereco\">Local de entrega</label>\r\n              <div class=\"my-auto text-uppercase\" style=\"font-size: 11px\" *ngIf=\"form.value.codCliente != null\">\r\n                <a\r\n                  class=\"text-secondary\"\r\n                  href=\"javascript:void(0)\"\r\n                  (click)=\"onDetalhesLocalEntrega()\">\r\n                  <strong>Detalhes</strong>\r\n                </a>\r\n              </div>\r\n            </div>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"false\"\r\n              [items]=\"locaisEntrega\"\r\n              formControlName=\"codEndereco\"\r\n              [virtualScroll]=\"true\"\r\n              bindLabel=\"descricao\"\r\n              bindValue=\"codEndereco\"\r\n              [loading]=\"locaisEntregaLoader\"\r\n              loadingText=\"Carregando...\"\r\n              groupBy=\"tipo\"\r\n            >\r\n            </ng-select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row justify-content-center\">\r\n          <div class=\"form-group col-lg-5 pl-0 \">\r\n            <label for=\"codTransportadora\">Transportadora</label>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"false\"\r\n              [items]=\"transportadoras\"\r\n              formControlName=\"codTransportadora\"\r\n              [virtualScroll]=\"true\"\r\n              [loading]=\"loadingTransportadora\"\r\n              bindLabel=\"nomeTransportadora\"\r\n              bindValue=\"codTransportadoraTid\"\r\n              [ngClass]=\"onFieldError('codTransportadora') + ' ' + onFieldRequired('codTransportadora')\">\r\n            </ng-select>\r\n            <invalid-form-control [show]=\"onFieldInvalid('codTransportadora')\" message=\"Transportadora é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n          <!-- <div class=\"form-group col-md-5 pl-0\">\r\n            <div class=\"mb-0 d-flex justify-content-between w-100\" style=\"height: 22px\">\r\n              <label class=\"my-auto\" for=\"NM_TRAS\">Trasportadora</label>\r\n              <div class=\"my-auto text-uppercase\" style=\"font-size: 10px\" >\r\n                <a\r\n                  class=\"text-primary\"\r\n                  href=\"javascript:void(0)\"\r\n                  (click)=\"openModal(selecionarNotaFiscal)\">\r\n                  <strong>Selecionar</strong>\r\n                </a>\r\n              </div>\r\n            </div>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"NM_TRAS\"\r\n              formControlName=\"NM_TRAS\"\r\n              placeholder=\"Digite...\"\r\n              [ngClass]=\"onFieldError('NM_TRAS') + ' ' + onFieldRequired('NM_TRAS')\"\r\n            />\r\n            <invalid-form-control [show]=\"onFieldInvalid('NM_TRAS')\" message=\"Trasportadora é obrigatório.\"></invalid-form-control>\r\n          </div> -->\r\n          <div class=\"form-group col-md-2 pl-0\">\r\n            <label for=\"nfMae\">Nota Fiscal Mãe</label>\r\n            <select\r\n            class=\"form-control custom-select\"\r\n            id=\"nfMae\"\r\n            formControlName=\"nfMae\"\r\n            [ngClass]=\"onFieldError('nfMae') + ' ' + onFieldRequired('nfMae')\"\r\n          >\r\n            <option value ='1' >Sim</option>\r\n            <option value ='0'>Não</option>\r\n          </select>\r\n          <invalid-form-control [show]=\"onFieldInvalid('nfMae')\" message=\"Nota fiscal mãe é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n          <div class=\"form-group col-md-2 pl-0\">\r\n            <label for=\"formasPagamento\">Forma de Pagamento</label>\r\n            <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"false\"\r\n            [items]=\"formasPagamento\"\r\n            [loading]=\"loadingFormasPagamento\"\r\n            formControlName=\"codFormaPagamento\"\r\n            [virtualScroll]=\"true\"\r\n            bindLabel=\"descricao\"\r\n            bindValue=\"codFormaPagamento\"\r\n            [ngClass]=\"onFieldError('codFormaPagamento') + ' ' + onFieldRequired('codFormaPagamento')\">\r\n          </ng-select>\r\n          <invalid-form-control [show]=\"onFieldInvalid('codFormaPagamento')\" message=\"Forma de pagamento é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n          <div class=\"form-group col-md-1 pl-0\">\r\n            <label for=\"aliquotaIcms\">Aliquota ICMS</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"aliquotaIcms\"\r\n              formControlName=\"aliquotaIcms\"\r\n              currencyMask [options]=\"{ align: 'left', suffix: ' %' , thousands: '.', decimal: ',', precision: 2, prefix: '' }\"\r\n              [ngClass]=\"onFieldError('aliquotaIcms') + ' ' + onFieldRequired('aliquotaIcms')\"\r\n            >\r\n          <invalid-form-control [show]=\"onFieldInvalid('valorMaterial')\" message=\"Aliquota é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n          <div class=\"form-group col-md-2 pl-0\">\r\n            <label for=\"valorMaterial\">Preço do Material</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"valorMaterial\"\r\n              formControlName=\"valorMaterial\"\r\n              currencyMask [options]=\"{ align: 'left', prefix: 'R$ ' , thousands: '.', decimal: ',' }\"\r\n              [ngClass]=\"onFieldError('valorMaterial') + ' ' + onFieldRequired('valorMaterial')\"\r\n            >\r\n          <invalid-form-control [show]=\"onFieldInvalid('valorMaterial')\" message=\"Preço é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n      </fieldset>\r\n    </fieldset>\r\n  </form>\r\n  <ng-template #selecionarCliente>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title pull-left\">Busqueda de Clientes</h4>\r\n      <div class=\"d-flex justify-content-center align-items-center\">\r\n        <div class=\"spinner-border text-primary mr-2\" role=\"status\" *ngIf=\"loadingClientes\">\r\n          <span class=\"sr-only\">Loading...</span>\r\n        </div>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModal()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <advanced-filter>\r\n        <form [formGroup]=\"formClientes\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-3\">\r\n              <label for=\"situacao\">Situação</label>\r\n              <select\r\n                class=\"form-control custom-select\"\r\n                formControlName=\"situacao\"\r\n              >\r\n                <option value=\"Ativo\">Ativo</option>\r\n                <option value=\"Inativo\">Inativo</option>\r\n                <option value=\"Potenci\">Potencial</option>\r\n                <option value=\"Arquivo\">Arquivado</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"form-group col-4\">\r\n              <label for=\"cdItem\">BUSCAR POR</label>\r\n              <select\r\n                class=\"form-control custom-select\"\r\n                formControlName=\"buscarPor\"\r\n              >\r\n                <option value=\"1\">CÓDIGO, NOME FANTASIA OU RAZON SOCIAL</option>\r\n                <option value=\"2\" selected>CNPJ</option>\r\n              </select>\r\n            </div>\r\n\r\n            <div class=\"form-group col-5\">\r\n              <label>TERMO DE PESQUISA</label>\r\n              <div class=\"input-group\">\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  formControlName=\"pesquisa\"\r\n                  >\r\n                  <div class=\"input-group-append\">\r\n                    <span\r\n                      [tooltip]=\"formClientes.valid == false ? 'Digite um termo de pesquisa':''\"\r\n                      container=\"body\"\r\n                      placement =\"left\"\r\n                    >\r\n                      <button\r\n                      style=\"height: 25px;\"\r\n                        [disabled]=\"formClientes.valid == false\"\r\n                        class=\"input-group-text hover\"\r\n                        (click)=\"getClientes()\"\r\n                        >\r\n                        <i class=\"fas fa-search\"></i>\r\n                      </button>\r\n                    </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </advanced-filter>\r\n      <custom-table *ngIf=\"!noClientes\" class=\"text-center\">\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n            <th>Cód. Cliente</th>\r\n            <th>Razão Social</th>\r\n            <th>CNPJ</th>\r\n            <th>TIPO</th>\r\n            <th></th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let cliente of clientes\">\r\n            <td>{{ cliente.codCliente }}</td>\r\n            <td>{{ cliente.razaoSocial }}</td>\r\n            <td *ngIf=\"!cliente.cnpj\">NÃO INFORMADO</td>\r\n            <td *ngIf=\"cliente.cnpj\">{{ cliente.cnpj }}</td>\r\n            <td *ngIf=\"cliente.tipo == 'J' \">JURÍDICA</td>\r\n            <td *ngIf=\"cliente.tipo == 'F' \">FISÍCA</td>\r\n            <td>\r\n              <button\r\n                class=\"btn-icon-sm\"\r\n                tooltip=\"Salvar Informações\"\r\n                container=\"body\"\r\n                (click)=\"setCliente(cliente);modalRef.hide()\"\r\n              >\r\n                <i class=\"far fa-save\"></i>\r\n              </button>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n\r\n    </div>\r\n  </ng-template>\r\n</app-body>\r\n");

/***/ }),

/***/ "H4G4":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/ciclo-vendas/painel-bobinas/formulario/modal/contato/contato.component.scss ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NpY2xvLXZlbmRhcy9wYWluZWwtYm9iaW5hcy9mb3JtdWxhcmlvL21vZGFsL2NvbnRhdG8vY29udGF0by5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "IjbV":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/comercial/ciclo-vendas/painel-bobinas/formulario/modal/contato/contato.service.ts ***!
  \***********************************************************************************************************/
/*! exports provided: ComercialCicloVendasPainelBobinasFormularioModalDetalhesContatoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCicloVendasPainelBobinasFormularioModalDetalhesContatoService", function() { return ComercialCicloVendasPainelBobinasFormularioModalDetalhesContatoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _contato_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contato.component */ "mUvc");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modules/comercial/services/clientes.service */ "8ouN");



// ngx-bootstrap

// Components

// Services


let ComercialCicloVendasPainelBobinasFormularioModalDetalhesContatoService = class ComercialCicloVendasPainelBobinasFormularioModalDetalhesContatoService {
    constructor(modalService, pnotifyService, clientesService) {
        this.modalService = modalService;
        this.pnotifyService = pnotifyService;
        this.clientesService = clientesService;
        this.loaderNavbar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.pnotifyService.getPNotify();
    }
    showModal(codCliente, codContato) {
        this.loaderNavbar.emit(true);
        this.clientesService
            .getContato(codCliente, codContato)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => {
            this.loaderNavbar.emit(false);
        }))
            .subscribe({
            next: (response) => {
                if (response.success === true) {
                    const modalConfig = {
                        animated: false,
                    };
                    const initialState = {
                        contato: response.data,
                    };
                    this.modalService.show(_contato_component__WEBPACK_IMPORTED_MODULE_4__["ComercialCicloVendasPainelBobinasFormularioModalDetalhesContatoComponent"], Object.assign({}, modalConfig, {
                        initialState,
                    }));
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
};
ComercialCicloVendasPainelBobinasFormularioModalDetalhesContatoService.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"] },
    { type: src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_6__["ComercialClientesService"] }
];
ComercialCicloVendasPainelBobinasFormularioModalDetalhesContatoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"],
        src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_6__["ComercialClientesService"]])
], ComercialCicloVendasPainelBobinasFormularioModalDetalhesContatoService);



/***/ }),

/***/ "LF45":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/comercial/ciclo-vendas/painel-bobinas/painel-bobinas.service.ts ***!
  \*****************************************************************************************/
/*! exports provided: ComercialPainelBobinasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialPainelBobinasService", function() { return ComercialPainelBobinasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");

//angular



let ComercialPainelBobinasService = class ComercialPainelBobinasService {
    constructor(http) {
        this.http = http;
        this.API = `http://23.254.204.187/api/comercial/ciclo-vendas/painel-bobinas`;
    }
    getListaBobinas(params) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http
            .get(`${this.API}/lista`, { params: httpParams })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    postPainelBobinas(material) {
        return this.http.post(`${this.API}/salvar`, material).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
};
ComercialPainelBobinasService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ComercialPainelBobinasService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ComercialPainelBobinasService);



/***/ }),

/***/ "RUEd":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/ciclo-vendas/painel-bobinas/lista/lista.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-navbar *ngIf=\"loadingNavBar\"></loader-spinner-navbar>\r\n<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n<app-header appTitle=\"Painel de Bobinas\">\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"openModal(FormProposta)\"\r\n    [disabled]=\"getTotalMateriais() == 0\">\r\n    Avançar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onFilter()\"\r\n    [disabled]=\"!form.controls.empresa.valid\">\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loading\">\r\n  <div class=\"row\" #scrollToFilter>\r\n    <div class=\"col\">\r\n      <advanced-filter>\r\n        <form [formGroup]=\"form\" autocomplete=\"off\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-2 pl-0\">\r\n              <label for=\"lote\">Lote</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"lote\"\r\n                formControlName=\"lote\"\r\n                placeholder=\"Digite...\"\r\n                (keydown.enter)=\"onFilter()\">\r\n            </div>\r\n            <!-- <div class=\"form-group col-lg-2 pl-0\">\r\n              <label for=\"empresa\">Empresa</label>\r\n                <ng-select\r\n                  [searchable]=\"true\"\r\n                  [clearable]=\"false\"\r\n                  [items]=\"empresas\"\r\n                  formControlName=\"empresa\"\r\n                  [virtualScroll]=\"true\"\r\n                  placeholder=\"Selecione...\"\r\n                  labelForId=\"empresa\"\r\n                  bindLabel=\"nomeEmpresa\"\r\n                  bindValue=\"idEmpresa\"\r\n                  [ngClass]=\"onFieldError('empresa') + ' ' + onFieldRequired(form.controls.empresa)\">\r\n                </ng-select>\r\n                <invalid-form-control [show]=\"onFieldInvalid('empresa')\" message=\"Empresa é obrigatório\"></invalid-form-control>\r\n            </div> -->\r\n            <div class=\"form-group col-lg-1 pl-0\">\r\n              <label>Registros</label>\r\n              <select \r\n                class=\"form-control custom-select\"\r\n                formControlName=\"registros\"\r\n                (change)=\"setPageRegistros($event.target.value)\"  \r\n              >\r\n                <option value=\"10\">10</option>\r\n                <option value=\"25\">25</option>\r\n                <option value=\"50\">50</option>\r\n                <option value=\"100\">100</option>\r\n                <option value=\"250\">250</option>\r\n                <option value=\"500\">500</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </advanced-filter>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"totalItems > 0 && !noResult\">\r\n    <div class=\"row justify-content-between\">\r\n      <div class=\"col-lg-9\"></div>\r\n      <div class=\"col-lg-3\">\r\n        <card-counter\r\n          icon=\"fas fa-tasks\"\r\n          color=\"bg-blue\"\r\n          (click)=\"openModal(FormMateriaisSelecionados)\"\r\n          [counter]=\"getTotalMateriais()\"\r\n          duration=\"0.1\"\r\n          text=\"Total de materiais selecionados\"\r\n          [config]=\"cardCounterConfig\">\r\n        </card-counter>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <subtitles\r\n          [data]=\"subtitles\"\r\n        >\r\n        </subtitles>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-12 p-0\">\r\n      <div class=\"w-100\">\r\n        <custom-table  [config]=\"tableConfig\" class=\"text-center\">\r\n          <ng-template #thead let-thead>\r\n            <tr>\r\n              <th style=\"width:40px\"></th>\r\n              <th>Lote</th>\r\n              <th>Material</th>\r\n              <th>Empresa</th>\r\n              <th>Data de Entrada do Lote</th>\r\n              <!-- <th style=\"width:80px\"></th> -->\r\n            </tr>\r\n          </ng-template>\r\n          <ng-template #tbody let-tbody>\r\n            <tr *ngFor=\"let material of materiais; let i = index\">\r\n              <td class=\"text-center\" style=\"width: 5%\" [ngClass]=\"material.situacao == 'Disponível' ? 'border-success' : 'border-danger'\">\r\n                <div class=\"form-check\">\r\n                  <input class=\"form-check-input position-static\" \r\n                  type=\"checkbox\" \r\n                  id=\"blankCheckbox\" \r\n                  [checked]=\"material?.checked === 1\"\r\n                  (click)=\"checkMaterial(material)\"\r\n                  value=\"option1\" \r\n                  aria-label=\"checkbox\">\r\n                </div>\r\n              </td>\r\n              <td>{{ material.descLote | uppercase }}</td>\r\n              <td>{{ material.codMaterial }} - {{ material.nomeMaterial | uppercase }}</td>\r\n              <td>{{ material.nomeEmpresa | uppercase }}</td>\r\n              <td>{{ material.dataEntradaLote | date:'dd/MM/yyyy HH:mm' }}</td>\r\n              <!-- <td class=\"align-middle\" style=\"width:40px\">\r\n                <span class=\"mr-3\" tooltip=\"Detalhes do Material\" placement=\"left\" container=\"body\">\r\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"openModal(detalhesMaterial)\">\r\n                    <i class=\"fas fa-search\"></i>\r\n                  </button>\r\n                </span>\r\n              </td> -->\r\n            </tr>\r\n          </ng-template>\r\n        </custom-table><br>\r\n      </div>\r\n      <div>\r\n        Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\r\n        <pagination\r\n          [maxSize]=\"10\"\r\n          [totalItems]=\"totalItems\"\r\n          (pageChanged)=\"onPageChanged($event)\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPage\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\">\r\n        </pagination>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"noResult\"  class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 80%\">\r\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n  </div>\r\n  <ng-template #FormMateriaisSelecionados>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title pull-left\">Materiais Selecionados</h4>\r\n      <div class=\"d-flex justify-content-center align-items-center\">\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModal()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal-body\" *ngIf=\"getTotalMateriais() != 0\">\r\n      <custom-table  [config]=\"tableConfig\" class=\"text-center\">\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n            <th>Lote</th>\r\n            <th>Material</th>\r\n            <th>Empresa</th>\r\n            <th style=\"width:40px\"></th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let material of materiaisSelecionados\">\r\n            <td [ngClass]=\"material.situacao == 'Disponível' ? 'border-success' : 'border-danger'\">{{ material.descLote | uppercase }}</td>\r\n            <td>{{ material.codMaterial }} - {{ material.nomeMaterial | uppercase }}</td>\r\n            <td>{{ material.nomeEmpresa | uppercase }}</td>\r\n            <td>\r\n              <span class=\"mr-3\" tooltip=\"Delete\" placement=\"left\" container=\"body\">\r\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"removeMaterial(material)\">\r\n                  <i class=\"fas fa-trash-alt\"></i>\r\n                </button>\r\n              </span>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table><br>\r\n    </div>\r\n    <div [hidden]=\"getTotalMateriais()\" class=\"text-center d-flex justify-content-center align-items-center p-4\" style=\"height: 80%\">\r\n      <empty-result message=\"Nenhum material selecionado!\"></empty-result>\r\n    </div>\r\n  </ng-template>\r\n  <ng-template #FormProposta>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title pull-left\">Selecione a Categoria</h4>\r\n      <div class=\"d-flex justify-content-center align-items-center\">\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModal()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <div class=\"modal-body\" *ngIf=\"getTotalMateriais() != 0\">\r\n        <a><strong>Materiais Selecionados</strong></a>\r\n        <custom-table  [config]=\"tableConfig\" class=\"text-center\">\r\n          <ng-template #thead let-thead>\r\n            <tr>\r\n              <th>Lote</th>\r\n              <th>Material</th>\r\n              <th>Empresa</th>\r\n              <th style=\"width:40px\"></th>\r\n            </tr>\r\n          </ng-template>\r\n          <ng-template #tbody let-tbody>\r\n            <tr *ngFor=\"let material of materiaisSelecionados\">\r\n              <td [ngClass]=\"material.situacao == 'Disponível' ? 'border-success' : 'border-danger'\">{{ material.descLote | uppercase }}</td>\r\n              <td>{{ material.codMaterial }} - {{ material.nomeMaterial | uppercase }}</td>\r\n              <td>{{ material.nomeEmpresa | uppercase }}</td>\r\n              <td>\r\n                <span class=\"mr-3\" tooltip=\"Delete\" placement=\"left\" container=\"body\">\r\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"removeMaterial(material)\">\r\n                    <i class=\"fas fa-trash-alt\"></i>\r\n                  </button>\r\n                </span>\r\n              </td>\r\n            </tr>\r\n          </ng-template>\r\n        </custom-table><br>\r\n        <form [formGroup]=\"form\" autocomplete=\"off\" [hidden] = \"loading\">\r\n          <div class=\"form-row justify-content-center\">\r\n            <div class=\"form-group col\">\r\n              <label for=\"categoriaProduto\" >Categoria</label>\r\n              <select\r\n                class=\"form-control custom-select\"\r\n                id=\"categoriaProduto\"\r\n                placeholder=\"Selecione...\"\r\n                formControlName=\"categoriaProduto\"\r\n                [ngClass]=\"onFieldError('categoriaProduto') + ' ' + onFieldRequired('form.controls.categoriaProduto')\">\r\n                <option value=\"1\">Bobina</option>\r\n                <option value=\"2\">Corte especial</option>\r\n                <option value=\"3\">Rebaixamento</option>\r\n              </select>\r\n              <invalid-form-control [show]=\"onFieldInvalid('categoriaProduto')\" message=\"Categoria é obrigatório.\"></invalid-form-control>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div  class=\"form-row justify-content-center text-center\">\r\n        <button \r\n          type=\"button\" \r\n          class=\"btn btn-default btn-lg m-2\"\r\n          (click)=\"openRegister()\"\r\n          [disabled]=\"form.valid === false || loadingNavBar === true\"\r\n        >\r\n          <span aria-hidden=\"true\">\r\n           <i class=\" text-primary fas fa-arrow-right\"></i>\r\n          </span>Avançar\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n\r\n</app-body>");

/***/ }),

/***/ "TfFQ":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/ciclo-vendas/painel-bobinas/formulario/modal/endereco/endereco.component.html ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-content\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"mtc-title mb-0 my-auto\">DETALHES DO LOCAL DE ENTREGA</h4>\r\n    <button type=\"button\" class=\"close\" (click)=\"onClose()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div class=\"row\" *ngIf=\"endereco\">\r\n      <div class=\"col\">\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label>CEP</label>\r\n            <div *ngIf=\"endereco.cep == null\">NÃO INFORMADO</div>\r\n            <div *ngIf=\"endereco.cep != null\">{{ endereco.cep | cep }}</div>\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label>Endereço</label>\r\n            <div *ngIf=\"endereco.endereco == null\">NÃO INFORMADO</div>\r\n            <div *ngIf=\"endereco.endereco != null\">{{ endereco.endereco }}</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label>Complemento</label>\r\n            <div *ngIf=\"endereco.complemento == null\">NÃO INFORMADO</div>\r\n            <div *ngIf=\"endereco.complemento != null\">{{ endereco.complemento }}</div>\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label>Referência</label>\r\n            <div *ngIf=\"endereco.referencia == null\">NÃO INFORMADO</div>\r\n            <div *ngIf=\"endereco.referencia != null\">{{ endereco.referencia }}</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label>Bairro</label>\r\n            <div *ngIf=\"endereco.bairro == null\">NÃO INFORMADO</div>\r\n            <div *ngIf=\"endereco.bairro != null\">{{ endereco.bairro }}</div>\r\n          </div>\r\n          <div class=\"form-group col-md-6 mb-0\">\r\n            <label>Cidade</label>\r\n            <div *ngIf=\"endereco.cidade == null\">NÃO INFORMADO</div>\r\n            <div *ngIf=\"endereco.cidade != null\">\r\n              {{ endereco.cidade }}<span *ngIf=\"endereco.uf != null\"> / {{ endereco.uf }}</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-6 mb-0\" *ngIf=\"endereco.principal == 1\">\r\n            <label>Região de atuação comercial</label>\r\n            <div *ngIf=\"endereco.descAtuacaoComercial == null\">NÃO INFORMADO</div>\r\n            <div *ngIf=\"endereco.descAtuacaoComercial != null\">{{ endereco.descAtuacaoComercial }}</div>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"endereco.entrega == 1\">\r\n          <div class=\"form-row\">\r\n            <div class=\"col\"><hr></div>\r\n          </div>\r\n          <div class=\"mtc-title\">Dados de entrega</div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-6\">\r\n              <label>Título do local de entrega</label>\r\n              <div *ngIf=\"endereco.titulo == null\">NÃO INFORMADO</div>\r\n              <div *ngIf=\"endereco.titulo != null\">{{ endereco.titulo }}</div>\r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n              <label>Região de entrega</label>\r\n              <div *ngIf=\"endereco.descRegiaoEntrega == null\">NÃO INFORMADO</div>\r\n              <div *ngIf=\"endereco.descRegiaoEntrega != null\">{{ endereco.descRegiaoEntrega }}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col\">\r\n              <label>Dias para realizar entregas</label>\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col d-flex w-100 mb-1\">\r\n                  <div class=\"d-flex mr-1\">\r\n                    <div class=\"mr-1\">\r\n                      <i class=\"fas fa-times-circle text-danger\" *ngIf=\"endereco.diasEntrega.segunda.checked == 0\"></i>\r\n                      <i class=\"fas fa-check-circle text-success\" *ngIf=\"endereco.diasEntrega.segunda.checked == 1\"></i>\r\n                    </div>\r\n                    <span>Segunda-feira:</span>\r\n                  </div>\r\n                  <div *ngIf=\"endereco.diasEntrega.segunda.checked == 1\">\r\n                    <div *ngIf=\"endereco.diasEntrega.segunda.minimo !== null && endereco.diasEntrega.segunda.maximo !== null\">\r\n                      das {{ convertMysqlTime(endereco.diasEntrega.segunda.minimo) }} às {{ convertMysqlTime(endereco.diasEntrega.segunda.maximo) }}\r\n                    </div>\r\n                    <div *ngIf=\"endereco.diasEntrega.segunda.minimo == null || endereco.diasEntrega.segunda.maximo == null\">\r\n                      horário não informado\r\n                    </div>\r\n                  </div>\r\n                  <strong *ngIf=\"endereco.diasEntrega.segunda.checked == 0\">\r\n                    não aceita entregas\r\n                  </strong>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col d-flex w-100 mb-1\">\r\n                  <div class=\"d-flex mr-1\">\r\n                    <div class=\"mr-1\">\r\n                      <i class=\"fas fa-times-circle text-danger\" *ngIf=\"endereco.diasEntrega.terca.checked == 0\"></i>\r\n                      <i class=\"fas fa-check-circle text-success\" *ngIf=\"endereco.diasEntrega.terca.checked == 1\"></i>\r\n                    </div>\r\n                    <span>Terça-feira:</span>\r\n                  </div>\r\n                  <div *ngIf=\"endereco.diasEntrega.terca.checked == 1\">\r\n                    <div *ngIf=\"endereco.diasEntrega.terca.minimo !== null && endereco.diasEntrega.terca.maximo !== null\">\r\n                      das {{ convertMysqlTime(endereco.diasEntrega.terca.minimo) }} às {{ convertMysqlTime(endereco.diasEntrega.terca.maximo) }}\r\n                    </div>\r\n                    <div *ngIf=\"endereco.diasEntrega.terca.minimo == null || endereco.diasEntrega.terca.maximo == null\">\r\n                      horário não informado\r\n                    </div>\r\n                  </div>\r\n                  <strong *ngIf=\"endereco.diasEntrega.terca.checked == 0\">\r\n                    não aceita entregas\r\n                  </strong>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col d-flex w-100 mb-1\">\r\n                  <div class=\"d-flex mr-1\">\r\n                    <div class=\"mr-1\">\r\n                      <i class=\"fas fa-times-circle text-danger\" *ngIf=\"endereco.diasEntrega.quarta.checked == 0\"></i>\r\n                      <i class=\"fas fa-check-circle text-success\" *ngIf=\"endereco.diasEntrega.quarta.checked == 1\"></i>\r\n                    </div>\r\n                    <span>Quarta-feira:</span>\r\n                  </div>\r\n                  <div *ngIf=\"endereco.diasEntrega.quarta.checked == 1\">\r\n                    <div *ngIf=\"endereco.diasEntrega.quarta.minimo !== null && endereco.diasEntrega.quarta.maximo !== null\">\r\n                      das {{ convertMysqlTime(endereco.diasEntrega.quarta.minimo) }} às {{ convertMysqlTime(endereco.diasEntrega.quarta.maximo) }}\r\n                    </div>\r\n                    <div *ngIf=\"endereco.diasEntrega.quarta.minimo == null || endereco.diasEntrega.quarta.maximo == null\">\r\n                      horário não informado\r\n                    </div>\r\n                  </div>\r\n                  <strong *ngIf=\"endereco.diasEntrega.quarta.checked == 0\">\r\n                    não aceita entregas\r\n                  </strong>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col d-flex w-100 mb-1\">\r\n                  <div class=\"d-flex mr-1\">\r\n                    <div class=\"mr-1\">\r\n                      <i class=\"fas fa-times-circle text-danger\" *ngIf=\"endereco.diasEntrega.quinta.checked == 0\"></i>\r\n                      <i class=\"fas fa-check-circle text-success\" *ngIf=\"endereco.diasEntrega.quinta.checked == 1\"></i>\r\n                    </div>\r\n                    <span>Quinta-feira:</span>\r\n                  </div>\r\n                  <div *ngIf=\"endereco.diasEntrega.quinta.checked == 1\">\r\n                    <div *ngIf=\"endereco.diasEntrega.quinta.minimo !== null && endereco.diasEntrega.quinta.maximo !== null\">\r\n                      das {{ convertMysqlTime(endereco.diasEntrega.quinta.minimo) }} às {{ convertMysqlTime(endereco.diasEntrega.quinta.maximo) }}\r\n                    </div>\r\n                    <div *ngIf=\"endereco.diasEntrega.quinta.minimo == null || endereco.diasEntrega.quinta.maximo == null\">\r\n                      horário não informado\r\n                    </div>\r\n                  </div>\r\n                  <strong *ngIf=\"endereco.diasEntrega.quinta.checked == 0\">\r\n                    não aceita entregas\r\n                  </strong>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col d-flex w-100 mb-1\">\r\n                  <div class=\"d-flex mr-1\">\r\n                    <div class=\"mr-1\">\r\n                      <i class=\"fas fa-times-circle text-danger\" *ngIf=\"endereco.diasEntrega.sexta.checked == 0\"></i>\r\n                      <i class=\"fas fa-check-circle text-success\" *ngIf=\"endereco.diasEntrega.sexta.checked == 1\"></i>\r\n                    </div>\r\n                    <span>Sexta-feira:</span>\r\n                  </div>\r\n                  <div *ngIf=\"endereco.diasEntrega.sexta.checked == 1\">\r\n                    <div *ngIf=\"endereco.diasEntrega.sexta.minimo !== null && endereco.diasEntrega.sexta.maximo !== null\">\r\n                      das {{ convertMysqlTime(endereco.diasEntrega.sexta.minimo) }} às {{ convertMysqlTime(endereco.diasEntrega.sexta.maximo) }}\r\n                    </div>\r\n                    <div *ngIf=\"endereco.diasEntrega.sexta.minimo == null || endereco.diasEntrega.sexta.maximo == null\">\r\n                      horário não informado\r\n                    </div>\r\n                  </div>\r\n                  <strong *ngIf=\"endereco.diasEntrega.sexta.checked == 0\">\r\n                    não aceita entregas\r\n                  </strong>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col d-flex w-100 mb-1\">\r\n                  <div class=\"d-flex mr-1\">\r\n                    <div class=\"mr-1\">\r\n                      <i class=\"fas fa-times-circle text-danger\" *ngIf=\"endereco.diasEntrega.sabado.checked == 0\"></i>\r\n                      <i class=\"fas fa-check-circle text-success\" *ngIf=\"endereco.diasEntrega.sabado.checked == 1\"></i>\r\n                    </div>\r\n                    <span>Sábado:</span>\r\n                  </div>\r\n                  <div *ngIf=\"endereco.diasEntrega.sabado.checked == 1\">\r\n                    <div *ngIf=\"endereco.diasEntrega.sabado.minimo !== null && endereco.diasEntrega.sabado.maximo !== null\">\r\n                      das {{ convertMysqlTime(endereco.diasEntrega.sabado.minimo) }} às {{ convertMysqlTime(endereco.diasEntrega.sabado.maximo) }}\r\n                    </div>\r\n                    <div *ngIf=\"endereco.diasEntrega.sabado.minimo == null || endereco.diasEntrega.sabado.maximo == null\">\r\n                      horário não informado\r\n                    </div>\r\n                  </div>\r\n                  <strong *ngIf=\"endereco.diasEntrega.sabado.checked == 0\">\r\n                    não aceita entregas\r\n                  </strong>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col d-flex w-100 mb-1\">\r\n                  <div class=\"d-flex mr-1\">\r\n                    <div class=\"mr-1\">\r\n                      <i class=\"fas fa-times-circle text-danger\" *ngIf=\"endereco.diasEntrega.domingo.checked == 0\"></i>\r\n                      <i class=\"fas fa-check-circle text-success\" *ngIf=\"endereco.diasEntrega.domingo.checked == 1\"></i>\r\n                    </div>\r\n                    <span>Domingo:</span>\r\n                  </div>\r\n                  <div *ngIf=\"endereco.diasEntrega.domingo.checked == 1\">\r\n                    <div *ngIf=\"endereco.diasEntrega.domingo.minimo !== null && endereco.diasEntrega.domingo.maximo !== null\">\r\n                      das {{ convertMysqlTime(endereco.diasEntrega.domingo.minimo) }} às {{ convertMysqlTime(endereco.diasEntrega.domingo.maximo) }}\r\n                    </div>\r\n                    <div *ngIf=\"endereco.diasEntrega.domingo.minimo == null || endereco.diasEntrega.domingo.maximo == null\">\r\n                      horário não informado\r\n                    </div>\r\n                  </div>\r\n                  <strong *ngIf=\"endereco.diasEntrega.domingo.checked == 0\">\r\n                    não aceita entregas\r\n                  </strong>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-6\">\r\n              <label>Tipo de material</label>\r\n              <div *ngIf=\"endereco.dsTipoMaterial == null\">NÃO INFORMADO</div>\r\n              <div *ngIf=\"endereco.dsTipoMaterial != null\">{{ endereco.dsTipoMaterial | uppercase }}</div>\r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n              <label>Tipo de descarga</label>\r\n              <div *ngIf=\"endereco.dsTipoDescarga == null\">NÃO INFORMADO</div>\r\n              <div *ngIf=\"endereco.dsTipoDescarga != null\">{{ endereco.dsTipoDescarga | uppercase }}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-6\">\r\n              <label>Modo de descarga</label>\r\n              <div *ngIf=\"endereco.dsModoDescarga == null\">NÃO INFORMADO</div>\r\n              <div *ngIf=\"endereco.dsModoDescarga != null\">{{ endereco.dsModoDescarga | uppercase }}</div>\r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n              <label>Tipos de veículo</label>\r\n              <div *ngIf=\"endereco.tiposVeiculosDesc == null\">NÃO INFORMADO</div>\r\n              <div *ngIf=\"endereco.tiposVeiculosDesc != null\">{{ endereco.tiposVeiculosDesc | uppercase }}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-6 mb-0\">\r\n              <label>Dados especiais</label>\r\n              <div *ngIf=\"endereco.dadosEspeciaisDesc == null\">NÃO INFORMADO</div>\r\n              <div *ngIf=\"endereco.dadosEspeciaisDesc != null\">{{ endereco.dadosEspeciaisDesc | uppercase }}</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

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
        this.API = `http://23.254.204.187/api/comercial`;
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
    getAlmacen(params) {
        return this.http
            .get(`${this.API}/almacen`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getLinhasId(id) {
        return this.http.get(`${this.API}/linhas/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getSublineasId(id) {
        return this.http.get(`${this.API}/sublineas/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    sincronizarMateriales() {
        return this.http.get(`${this.API}/sincronizar`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getMateriales(params) {
        return this.http
            .get(`${this.API}/materiales`, {
            params: params,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getMaterialesOferta(params) {
        return this.http
            .get(`${this.API}/materiales_lista_precio`, {
            params: params,
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
    getPresentacionMaterial() {
        return this.http
            .get(`${this.API}/presentacion_materiales`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getCliente(codCliente) {
        return this.http.get(`${this.API}/clientes/detalhes/${codCliente}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getListarPrecios() {
        return this.http.get(`${this.API}/vendedor/lista_precio`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getTodosVendedores() {
        return this.http.get(`${this.API}/vendedor/allvendedor`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getCentrosLogisticos() {
        return this.http.get(`${this.API}/almacen/centros_logisticos`);
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

/***/ "WZzV":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/ciclo-vendas/painel-bobinas/formulario/modal/contato/contato.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-content\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"mtc-title mb-0 my-auto\">DETALHES DO CONTATO</h4>\r\n    <button type=\"button\" class=\"close\" (click)=\"onClose()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div class=\"row\" *ngIf=\"contato\">\r\n      <div class=\"col\">\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label>Nome completo</label>\r\n            <div *ngIf=\"contato.nomeCompleto == null\">NÃO INFORMADO</div>\r\n            <div *ngIf=\"contato.nomeCompleto != null\">{{ contato.nomeCompleto }}</div>\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label>Sexo</label>\r\n            <div *ngIf=\"contato.descGenero == null\">NÃO INFORMADO</div>\r\n            <div *ngIf=\"contato.descGenero != null\">{{ contato.descGenero }}</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-6 mb-0\">\r\n            <label>Função</label>\r\n            <div *ngIf=\"contato.descFuncao == null\">NÃO INFORMADO</div>\r\n            <div *ngIf=\"contato.descFuncao != null\">{{ contato.descFuncao }}</div>\r\n          </div>\r\n          <div class=\"form-group col-md-6 mb-0\">\r\n            <label>Setor</label>\r\n            <div *ngIf=\"contato.descSetor == null\">NÃO INFORMADO</div>\r\n            <div *ngIf=\"contato.descSetor != null\">{{ contato.descSetor }}</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"col\"><hr></div>\r\n        </div>\r\n        <div class=\"mtc-title\">Meios de contato</div>\r\n        <div class=\"form-row\" *ngIf=\"contato.contatos != null\">\r\n          <div class=\"form-group col-md-6\" *ngFor=\"let item of contato.contatos\">\r\n            <label>{{ item.tipo }}</label>\r\n            <div *ngIf=\"(item.tipo == 'Telefone') || (item.tipo == 'Celular')\">\r\n              <div *ngIf=\"item.contato == null\">NÃO INFORMADO</div>\r\n              <div *ngIf=\"item.contato != null\">{{ item.contato | telefone }}</div>\r\n            </div>\r\n            <div *ngIf=\"(item.tipo == 'Email NFe') || (item.tipo == 'E-mail NFe') || (item.tipo == 'E-Mail') || (item.tipo == 'Email') || (item.tipo == 'MalaDireta')\">\r\n              <div *ngIf=\"item.contato == null\">NÃO INFORMADO</div>\r\n              <div *ngIf=\"item.contato != null\">\r\n                <a [href]=\"'mailto:' + item.contato\">{{ item.contato | lowercase }}</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <message\r\n          icon=\"fas fa-box-open\"\r\n          text=\"Nenhuma informação encontrada\"\r\n          class=\"py-4\"\r\n          *ngIf=\"contato.contatos == null\">\r\n        </message>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "bpyJ":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/comercial/ciclo-vendas/painel-bobinas/painel-bobinas-routing.module.ts ***!
  \************************************************************************************************/
/*! exports provided: ComercialPainelBobinasModuleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialPainelBobinasModuleRoutingModule", function() { return ComercialPainelBobinasModuleRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lista/lista.component */ "AUdR");
/* harmony import */ var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./formulario/formulario.component */ "33s7");
/* harmony import */ var _formulario_formulario_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./formulario/formulario.module */ "1xxA");



// Components


//modules

const routes = [
    { path: 'lista', component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_3__["ComercialPainelBobinasListaComponent"] },
    {
        path: 'novo',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_4__["ComercialPainelBobinasFormularioComponent"],
    },
    {
        path: '',
        redirectTo: 'lista',
        pathMatch: 'full',
    },
];
let ComercialPainelBobinasModuleRoutingModule = class ComercialPainelBobinasModuleRoutingModule {
};
ComercialPainelBobinasModuleRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _formulario_formulario_module__WEBPACK_IMPORTED_MODULE_5__["ComercialCicloVendasPainelBobinasFormularioModule"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ComercialPainelBobinasModuleRoutingModule);



/***/ }),

/***/ "jgra":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/ciclo-vendas/painel-bobinas/formulario/modal/endereco/endereco.component.scss ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NpY2xvLXZlbmRhcy9wYWluZWwtYm9iaW5hcy9mb3JtdWxhcmlvL21vZGFsL2VuZGVyZWNvL2VuZGVyZWNvLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "mCEe":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/comercial/ciclo-vendas/painel-bobinas/painel-bobinas.module.ts ***!
  \****************************************************************************************/
/*! exports provided: ComercialPainelBobinasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialPainelBobinasModule", function() { return ComercialPainelBobinasModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-currency-mask */ "D5nU");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_1__);
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
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/chronos */ "xj/R");
/* harmony import */ var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/locale */ "0b5p");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "6No5");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "978R");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! angular2-text-mask */ "UVXo");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var ng_brazil__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-brazil */ "hTrW");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var _formulario_formulario_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./formulario/formulario.module */ "1xxA");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./lista/lista.component */ "AUdR");
/* harmony import */ var _painel_bobinas_routing_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./painel-bobinas-routing.module */ "bpyJ");
















Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_12___default.a);
Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_14__["defineLocale"])('pt-br', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_15__["ptBrLocale"]);
// ngx-bootstrap


// ng-select

// ng-brazil


// Modules



// Components


let ComercialPainelBobinasModule = class ComercialPainelBobinasModule {
};
ComercialPainelBobinasModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"])({
        declarations: [_lista_lista_component__WEBPACK_IMPORTED_MODULE_24__["ComercialPainelBobinasListaComponent"]],
        imports: [
            _painel_bobinas_routing_module__WEBPACK_IMPORTED_MODULE_25__["ComercialPainelBobinasModuleRoutingModule"],
            _formulario_formulario_module__WEBPACK_IMPORTED_MODULE_23__["ComercialCicloVendasPainelBobinasFormularioModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_18__["NgSelectModule"],
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_16__["PaginationModule"].forRoot(),
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_17__["TooltipModule"].forRoot(),
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__["TabsModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["ModalModule"].forRoot(),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__["BsDatepickerModule"].forRoot(),
            src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"],
            src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_4__["NotFoundModule"],
            src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_3__["ModuleWrapperModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_21__["SharedModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_22__["TemplatesModule"],
            ng_brazil__WEBPACK_IMPORTED_MODULE_20__["NgBrazil"],
            angular2_text_mask__WEBPACK_IMPORTED_MODULE_19__["TextMaskModule"],
            ng2_currency_mask__WEBPACK_IMPORTED_MODULE_1__["CurrencyMaskModule"],
        ],
        providers: [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_2__["PNotifyService"], { provide: _angular_core__WEBPACK_IMPORTED_MODULE_9__["LOCALE_ID"], useValue: 'pt-br' }],
    })
], ComercialPainelBobinasModule);



/***/ }),

/***/ "mUvc":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/ciclo-vendas/painel-bobinas/formulario/modal/contato/contato.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: ComercialCicloVendasPainelBobinasFormularioModalDetalhesContatoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCicloVendasPainelBobinasFormularioModalDetalhesContatoComponent", function() { return ComercialCicloVendasPainelBobinasFormularioModalDetalhesContatoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_contato_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./contato.component.html */ "WZzV");
/* harmony import */ var _contato_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contato.component.scss */ "H4G4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");




// ngx-bootstrap

let ComercialCicloVendasPainelBobinasFormularioModalDetalhesContatoComponent = class ComercialCicloVendasPainelBobinasFormularioModalDetalhesContatoComponent {
    constructor(bsModalRef) {
        this.bsModalRef = bsModalRef;
    }
    ngOnInit() { }
    onClose() {
        this.bsModalRef.hide();
    }
};
ComercialCicloVendasPainelBobinasFormularioModalDetalhesContatoComponent.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"] }
];
ComercialCicloVendasPainelBobinasFormularioModalDetalhesContatoComponent.propDecorators = {
    contato: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['contato',] }]
};
ComercialCicloVendasPainelBobinasFormularioModalDetalhesContatoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-ciclo-vendas-cotacoes-formulario-modal-detalhes-contato',
        template: _raw_loader_contato_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_contato_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"]])
], ComercialCicloVendasPainelBobinasFormularioModalDetalhesContatoComponent);



/***/ }),

/***/ "vTQT":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/comercial/ciclo-vendas/painel-bobinas/formulario/formulario.component.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button[disabled] {\n  cursor: no-drop;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21lcmNpYWwvY2ljbG8tdmVuZGFzL3BhaW5lbC1ib2JpbmFzL2Zvcm11bGFyaW8vZm9ybXVsYXJpby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NpY2xvLXZlbmRhcy9wYWluZWwtYm9iaW5hcy9mb3JtdWxhcmlvL2Zvcm11bGFyaW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b25bZGlzYWJsZWRde1xyXG4gIGN1cnNvcjogbm8tZHJvcDtcclxufSJdfQ== */");

/***/ }),

/***/ "xjFr":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/ciclo-vendas/painel-bobinas/formulario/modal/endereco/endereco.service.ts ***!
  \*************************************************************************************************************/
/*! exports provided: ComercialCicloVendasPainelBobinasFormularioModalDetalhesEnderecoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCicloVendasPainelBobinasFormularioModalDetalhesEnderecoService", function() { return ComercialCicloVendasPainelBobinasFormularioModalDetalhesEnderecoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _endereco_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./endereco.component */ "BHdd");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modules/comercial/services/clientes.service */ "8ouN");



// ngx-bootstrap

// Components

// Services


let ComercialCicloVendasPainelBobinasFormularioModalDetalhesEnderecoService = class ComercialCicloVendasPainelBobinasFormularioModalDetalhesEnderecoService {
    constructor(modalService, pnotifyService, clienteService) {
        this.modalService = modalService;
        this.pnotifyService = pnotifyService;
        this.clienteService = clienteService;
        this.loaderNavbar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.pnotifyService.getPNotify();
    }
    showModal(codCliente, codEndereco) {
        this.loaderNavbar.emit(true);
        this.clienteService
            .getEndereco(codCliente, codEndereco, 1)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => {
            this.loaderNavbar.emit(false);
        }))
            .subscribe({
            next: (response) => {
                if (response.responseCode === 200) {
                    const modalConfig = {
                        animated: false,
                        class: 'modal-lg',
                    };
                    const initialState = {
                        endereco: response.result,
                    };
                    this.modalService.show(_endereco_component__WEBPACK_IMPORTED_MODULE_4__["ComercialCicloVendasPainelBobinasFormularioModalDetalhesEnderecoComponent"], Object.assign({}, modalConfig, {
                        initialState,
                    }));
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
};
ComercialCicloVendasPainelBobinasFormularioModalDetalhesEnderecoService.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"] },
    { type: src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_6__["ComercialClientesService"] }
];
ComercialCicloVendasPainelBobinasFormularioModalDetalhesEnderecoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"],
        src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_6__["ComercialClientesService"]])
], ComercialCicloVendasPainelBobinasFormularioModalDetalhesEnderecoService);



/***/ })

}]);
//# sourceMappingURL=painel-bobinas-painel-bobinas-module-es2015.js.map