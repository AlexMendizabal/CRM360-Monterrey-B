(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["representantes-representantes-module"],{

/***/ "1rTk":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/representantes/formulario/formulario.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ComercialCadastrosRepresentantesFormularioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCadastrosRepresentantesFormularioComponent", function() { return ComercialCadastrosRepresentantesFormularioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./formulario.component.html */ "VDWA");
/* harmony import */ var _formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formulario.component.scss */ "NwWL");
/* harmony import */ var _comissoes_representantes_gestao_comissionamentos_gestao_comissionamentos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../comissoes/representantes/gestao-comissionamentos/gestao-comissionamentos.service */ "dRIe");
/* harmony import */ var _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../../shared/modules/confirm-modal/confirm-modal.service */ "FOez");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var js_brasil__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! js-brasil */ "zFJr");
/* harmony import */ var js_brasil__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(js_brasil__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../../../../shared/services/core/date.service */ "Rk3r");
/* harmony import */ var _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../../../../shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _gestao_associacoes_coordenadores_escritorios_coordenadores_escritorios_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../../../gestao/associacoes/coordenadores-escritorios/coordenadores-escritorios.service */ "fMkk");
/* harmony import */ var _representantes_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../representantes.service */ "T6IP");
/* harmony import */ var _equipe_venda_equipe_venda_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./../../equipe-venda/equipe-venda.service */ "44Bq");
/* harmony import */ var _comercial_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./../../../comercial.service */ "VgqD");
/* harmony import */ var src_app_shared_services_requests_estados_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/services/requests/estados.service */ "H0sO");
/* harmony import */ var src_app_shared_services_ws_cep_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/services/ws/cep.service */ "7aZN");
/* harmony import */ var _tipos_comissionamento_tipo_comissionamento_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./../../tipos-comissionamento/tipo-comissionamento.service */ "v9B3");
/* harmony import */ var _clientes_cadastro_enderecos_formulario_formulario_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./../../../clientes/cadastro/enderecos/formulario/formulario.service */ "4Jok");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-bootstrap/chronos */ "xj/R");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-bootstrap/locale */ "0b5p");











// Interfaces
// Services










// ngx-bootstrap




Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_22__["defineLocale"])('pt-br', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_24__["ptBrLocale"]);
let ComercialCadastrosRepresentantesFormularioComponent = class ComercialCadastrosRepresentantesFormularioComponent {
    constructor(formBuilder, activatedRoute, dateService, localeService, bsModalService, pnotifyService, confirmModalService, location, representantesService, router, gestaoAssociacoesService, modalService, comercialService, cadastroEquipeVenda, estadosService, cepService, formService, tipoComissionamentoService, gestaoComissionamentosService) {
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.dateService = dateService;
        this.localeService = localeService;
        this.bsModalService = bsModalService;
        this.pnotifyService = pnotifyService;
        this.confirmModalService = confirmModalService;
        this.location = location;
        this.representantesService = representantesService;
        this.router = router;
        this.gestaoAssociacoesService = gestaoAssociacoesService;
        this.modalService = modalService;
        this.comercialService = comercialService;
        this.cadastroEquipeVenda = cadastroEquipeVenda;
        this.estadosService = estadosService;
        this.cepService = cepService;
        this.formService = formService;
        this.tipoComissionamentoService = tipoComissionamentoService;
        this.gestaoComissionamentosService = gestaoComissionamentosService;
        this.MASKS = js_brasil__WEBPACK_IMPORTED_MODULE_10__["utilsBr"].MASKS;
        this.loaderFullScreen = true;
        this.modalValues = [];
        this.loadingModal = false;
        this.breadCrumbTree = [];
        this.formChanged = false;
        this.submittingForm = false;
        this.dados = [];
        this.escritorio = [];
        this.equipes = [];
        this.bancos = [];
        this.tipoVendedor = [];
        this.urlAnexo = [];
        this.dadosLoaded = false;
        this.dadosEmpty = false;
        this.estados = [];
        this.enderecosOp = [];
        this.enderecosLoading = false;
        this.enderecoLoaded = false;
        this.cidadeRetorno = '';
        this.estadoRetorno = '';
        this.maxLengthRules = {};
        this.maxLengthMessages = {};
        this.toggle = false;
        this.searching = false;
        this.firstSearch = false;
        this.showGrupos = true;
        this.linhas = [];
        this.classes = [];
        this.tableConfigAssocGrupos = {
            fixedHeader: false,
            bodyHeight: 230,
            hover: false,
        };
        this.tableConfigPrecos = {
            fixedHeader: false,
            bodyHeight: 230,
            hover: false,
        };
        this.tableConfigAnexos = {
            fixedHeader: false,
            bodyHeight: 230,
            hover: false,
        };
        this.showAnexos = false;
        this.formData = [];
        this.maxSize = 10;
        this.itemsPerPage = 300;
        this.currentPage = 1;
        this.totalItems = 0;
        this.situacao = [
            {
                id: 0,
                descricao: 'INATIVO',
            },
            {
                id: 1,
                descricao: 'ATIVO',
            }
        ];
        this.tipoComissao = [];
        this.tipoComissaoModal = [];
        this.localeService.use('pt-br');
        this.pnotifyService.getPNotify();
    }
    ngOnInit() {
        this.setFormFilter();
        this.setBreadCrumb();
        this.getEscritorio();
        this.getEquipesVenda();
        this.getTipoComissao();
        this.getBancos();
        this.getTipoVendedor();
    }
    setBreadCrumb() {
        this.activatedRoute.params.subscribe((params) => {
            if (params.id) {
                this.appTitle = 'Editar Representante';
                this.action = 'update';
            }
            else {
                this.appTitle = 'Novo Representante';
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
                    descricao: 'Representantes',
                    routerLink: `/comercial/cadastros/${params.idSubModulo}/representantes/lista`,
                },
                {
                    descricao: this.appTitle,
                },
            ];
        });
    }
    // Formulário Preenchido para edição ou novo formulário
    setFormFilter() {
        this.estados = this.estadosService.getEstados();
        const resolver = this.activatedRoute.snapshot.data.detalhes;
        if (resolver.success === true) {
            const detalhes = resolver.data[0];
            this.form = this.formBuilder.group({
                codRepresentante: [detalhes.codRepresentante],
                codSituacao: [detalhes.codSituacao ? detalhes.codSituacao : 1, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
                tipoPagamentoComissao: [detalhes.tipoPagamentoComissao, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
                emiteNotaFiscal: [detalhes.emiteNotaFiscal == 0 ? detalhes.emiteNotaFiscal : 1, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
                recebeEmailInativacaoCliente: [detalhes.recebeEmailInativacaoCliente ? detalhes.recebeEmailInativacaoCliente : 1, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
                codEquipe: [detalhes.codEquipe, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
                codEscritorio: [detalhes.codEscritorio, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
                nrMatricula: [detalhes.nrMatricula, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
                nome: [detalhes.nome, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
                razaoSocial: [detalhes.razaoSocial, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
                cep: [{ value: detalhes.cep, disabled: '' }, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
                endereco: [detalhes.endereco, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
                // nrEndereco: [detalhes.nrEndereco],
                nomeBairro: [detalhes.nomeBairro, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
                // complemento: [detalhes.complemento],
                nomeCidade: [detalhes.nomeCidade, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
                uf: [detalhes.uf],
                cpf: [detalhes.cpf, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
                rg: [detalhes.rg],
                email: [detalhes.email],
                telefone: [detalhes.telefone],
                celular: [detalhes.celular],
                dataInicialContrato: detalhes.dataInicialContrato != null
                    ? [this.dateService.convertStringToDate(detalhes.dataInicialContrato, 'usa'), [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]]
                    : this.dateService.getToday(),
                dataFinalContrato: detalhes.dataFinalContrato != null
                    ? [this.dateService.convertStringToDate(detalhes.dataFinalContrato, 'usa')] : this.dateService.getToday(),
                // dataFinalContrato: detalhes ? this.dateService.getToday() :
                // [this.dateService.convertStringToDate(detalhes.dataFinalContrato, 'usa')],
                // dataRenovacaoContrato: detalhes ? this.dateService.getToday() :
                // [this.dateService.convertStringToDate(detalhes.dataRenovacaoContrato, 'usa')],
                nomeFantasiaRepresentacao: [detalhes.nomeFantasiaRepresentacao],
                razaoSocialRepresentacao: [detalhes.razaoSocialRepresentacao],
                cnpjEmpresaRepresentacao: [detalhes.cnpjEmpresaRepresentacao],
                ieEmpresaRepresentacao: [detalhes.ieEmpresaRepresentacao],
                imEmpresaRepresentacao: [detalhes.imEmpresaRepresentacao],
                nomeTitularConta: [detalhes.nomeTitularConta],
                tipoConta: [detalhes.tipoConta],
                nomeBanco: [detalhes.nomeBanco],
                agencia: [detalhes.agencia],
                contaCorrente: [detalhes.contaCorrente],
                anexos: this.formBuilder.array([]),
            });
            this.setCheckValues(detalhes);
            if (detalhes.codRepresentante != null) {
                this.getAnexos(detalhes.codRepresentante);
            }
        }
        else {
            this.pnotifyService.error();
            this.location.back();
        }
    }
    onCancel() {
        this.location.back();
    }
    closeModal(modalRef) {
        this.modalRef.hide();
        this.getTipoComissao();
    }
    //Ação de Edição ou novo Formulário
    onSubmit() {
        if (this.action === 'update' && this.form.pristine) {
            this.onPostAnexos(this.form.value.codRepresentante);
            this.location.back();
        }
        else {
            if (this.checkFormValidation() && this.form.valid) {
                this.loaderNavbar = true;
                this.submittingForm = true;
                this.representantesService
                    .save(this.form.getRawValue(), this.action)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(() => {
                    this.loaderNavbar = false;
                    this.submittingForm = false;
                }))
                    .subscribe({
                    next: (response) => {
                        if (response.hasOwnProperty('success') &&
                            response.success === true) {
                            this.form.reset();
                            this.formChanged = false;
                            this.pnotifyService.success();
                            this.onPostAnexos(response.data[0].codRepresentante);
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
                this.pnotifyService.notice('Selecione um material.');
            }
        }
    }
    checkFormValidation() {
        let isValid = true;
        if (this.form.getRawValue().id === null) {
            isValid = false;
        }
        return isValid;
    }
    onInput() {
        this.formChanged = true;
    }
    onInputCep(detalhes) {
        if (this.form.get('cep').status == 'VALID') {
            this.consultaCEP(detalhes, this.form.value.cep);
        }
    }
    consultaCEP(detalhes, cep) {
        if (this.enderecosLoading == false) {
            this.cidadeRetorno = '';
            this.estadoRetorno = '';
            this.cepService
                .getData(cep)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(() => {
                this.enderecosLoading = false;
                this.loaderFullScreen = false;
            }))
                .subscribe((response) => {
                this.enderecosLoading = true;
                if (response.hasOwnProperty('mensagem') &&
                    response.hasOwnProperty('success') &&
                    response.success === true) {
                    if (response.data.length > 1) {
                        this.formEnderecos = this.formBuilder.group({
                            enderecosRetorno: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
                        });
                        this.enderecosOp = response.data;
                        if ((this.enderecosLoading = true)) {
                            this.openModal(detalhes);
                        }
                    }
                    else {
                        this.enderecoLoaded = true;
                        this.setFormValues(response.data);
                        this.cidadeRetorno = response.data.localidade;
                        this.estadoRetorno = response.data.uf;
                    }
                }
                else if (response.hasOwnProperty('mensagem') &&
                    response.hasOwnProperty('success') &&
                    response.success === false) {
                    this.pnotifyService.notice(response.mensagem);
                }
                else {
                    this.pnotifyService.error();
                }
            });
        }
    }
    onInputCidade() {
        if (this.form.get('cidade').status == 'VALID') {
            let cidade = {
                cidade: this.form.get('nomeCidade').value,
            };
            this.formService.getIbgeCidades(cidade).subscribe((response) => {
                if (response.responseCode === 200) {
                }
                else {
                    this.pnotifyService.notice('Região de entrega não localizado, favor entrar em contato com o suporte');
                }
            });
        }
    }
    setFormValues(enderecoSelecionado) {
        if (this.enderecoLoaded === true) {
            this.form.controls.endereco.enable();
            this.form.controls.nomeBairro.enable();
            this.form.controls.nomeCidade.enable();
            this.form.controls.uf.enable();
            this.form.controls.endereco.setValue(enderecoSelecionado.logradouro);
            this.form.controls.nomeBairro.setValue(enderecoSelecionado.bairro);
            this.form.controls.nomeCidade.setValue(enderecoSelecionado.localidade);
            this.form.controls.uf.setValue(enderecoSelecionado.uf);
            if (enderecoSelecionado.logradouro != '') {
                this.form.controls.endereco.disable();
            }
            if (enderecoSelecionado.bairro != '') {
                this.form.controls.nomeBairro.disable();
            }
            if (enderecoSelecionado.localidade != '') {
                this.form.controls.nomeCidade.disable();
            }
            if (enderecoSelecionado.uf != '') {
                this.form.controls.uf.disable();
            }
        }
    }
    setCheckValues(data) {
        this.form.controls.endereco.enable();
        this.form.controls.nomeBairro.enable();
        this.form.controls.nomeCidade.enable();
        this.form.controls.uf.enable();
        if (data.endereco != '') {
            this.form.controls.endereco.disable();
        }
        if (data.nomeBairro != '') {
            this.form.controls.nomeBairro.disable();
        }
        if (data.nomeCidade != '') {
            this.form.controls.nomeCidade.disable();
        }
        if (data.uf != '') {
            this.form.controls.uf.disable();
        }
    }
    // Consulta tipo de comissionamento
    getTipoComissao() {
        this.representantesService
            .getTipoComissionamento()
            .subscribe({
            next: (response) => {
                if (response) {
                    this.tipoComissao = response.data;
                }
                else {
                    this.pnotifyService.error();
                    this.location.back();
                }
            },
            error: (error) => {
                this.pnotifyService.error();
                this.location.back();
            }
        });
    }
    getTipoComissaoModal() {
        this.loaderFullScreen = true;
        this.tipoComissaoModal = [];
        const codTipoComissionamento = this.form.value.tipoPagamentoComissao;
        console.log(codTipoComissionamento);
        this.tipoComissionamentoService
            .getDetailTipoComissionamento(codTipoComissionamento)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(() => {
            this.loaderFullScreen = false;
        }))
            .subscribe((response) => {
            if (response.success === true) {
                this.tipoComissaoModal = response.data;
            }
            (error) => {
                if (error.error.hasOwnProperty('mensagem')) {
                    this.pnotifyService.error(error.error.mensagem);
                }
                else {
                    this.pnotifyService.error();
                }
            };
        });
    }
    getBancos() {
        this.representantesService
            .getBancos()
            .subscribe({
            next: (response) => {
                if (response) {
                    this.bancos = response.data;
                }
                else {
                    this.pnotifyService.error();
                    this.location.back();
                }
            },
            error: (error) => {
                this.pnotifyService.error();
                this.location.back();
            }
        });
    }
    getTipoVendedor() {
        this.representantesService
            .getTipoVendedor()
            .subscribe({
            next: (response) => {
                if (response) {
                    this.tipoVendedor = response.data;
                }
                else {
                    this.pnotifyService.error();
                    this.location.back();
                }
            },
            error: (error) => {
                this.pnotifyService.error();
                this.location.back();
            }
        });
    }
    getEquipesVenda() {
        this.cadastroEquipeVenda
            .getListaEquipesVenda()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(() => {
            this.loaderNavbar = false;
            this.showAnexos = true;
            this.loaderFullScreen = false;
        }))
            .subscribe({
            next: (response) => {
                if (response.success === true) {
                    this.equipes = response.data;
                }
                else {
                    this.pnotifyService.error('Cadastre uma Equipe de Vendas');
                    this.location.back();
                }
            },
            error: (error) => {
                this.pnotifyService.error();
                this.location.back();
            }
        });
    }
    getEscritorio() {
        this.gestaoComissionamentosService
            .getEscritorios()
            .subscribe({
            next: (response) => {
                if (response.success === true) {
                    this.escritorio = response.data;
                }
                else {
                    this.pnotifyService.error();
                    this.location.back();
                }
            },
            error: (error) => {
                this.pnotifyService.error();
                this.location.back();
            }
        });
    }
    // CheckBox
    onChecked() {
        this.formModelo.get('de').disable();
        this.formModelo.get('ate').disable();
    }
    // modal
    openModal(tiposComissao) {
        this.modalRef = this.bsModalService.show(tiposComissao);
        this.getTipoComissaoModal();
    }
    // Tratamento de erros
    onFieldError(field) {
        if (this.onFieldInvalid(field)) {
            return 'is-invalid';
        }
        return '';
    }
    onFieldInvalid(field) {
        field = this.form.get(field);
        if (field.errors != null) {
            if (field.errors.hasOwnProperty('required') && field.touched) {
                return 'required';
            }
        }
        return '';
    }
    onFieldRequired(field) {
        let required = false;
        let formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]();
        // && this.assocMateriais.controls['controls'][field].validator
        if (this.form.controls[field].validator) {
            let validationResult = this.form.controls[field].validator(formControl);
            required =
                validationResult !== null && validationResult.required === true;
        }
        if (required) {
            return 'is-required';
        }
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
    geetParams(params) {
        let dataInicial = params['dataInicialVigencia'];
        let dataFinal = params['dataFimVigencia'];
        this.form.patchValue({
            dataInicialVigencia: dataInicial,
            dataFimVigencia: dataFinal
        });
        if (dataInicial instanceof Date) {
            dataInicial = this.dateService.convertToUrlDate(dataInicial);
        }
        if (dataFinal instanceof Date) {
            dataFinal = this.dateService.convertToUrlDate(dataFinal);
        }
        return {
            dataInicial: { dataInicial },
            dataFinal: { dataFinal }
        };
    }
    navegarAnexo(anexo) {
        this.router
            .navigate([], {
            relativeTo: this.activatedRoute,
        })
            .then((result) => {
            window.open(`${anexo.value.urlAnexo}`, '_blank');
        });
    }
    getAnexos(codRepresentante) {
        this.loaderNavbar = true;
        this.showAnexos = false;
        this.representantesService
            .getAnexos(codRepresentante)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(() => {
            this.loaderNavbar = false;
            this.showAnexos = true;
        }))
            .subscribe({
            next: (response) => {
                if (response.hasOwnProperty('success') && response.success === true) {
                    this.setAnexos(response.data);
                    this.urlAnexo = response.data;
                }
            },
            error: (error) => {
                // if (error['error'].hasOwnProperty('mensagem')) {
                //   this.pnotifyService.error(error.error.mensagem);
                // } else {
                //   this.pnotifyService.error();
                // }
            }
        });
    }
    setAnexos(anexos) {
        if (anexos.length > 0) {
            for (let i = 0; i < anexos.length; i++) {
                this.onAddAnexos(anexos[i], true);
            }
        }
    }
    get anexos() {
        return this.form.get('anexos');
    }
    onAddAnexos(anexo, manipulateForm) {
        if (this.checkAnexoExists(anexo) === false) {
            this.anexos.push(this.formBuilder.group({
                codAnexo: [anexo.codAnexo],
                nomeAnexo: [anexo.nomeAnexo],
                linkAnexo: [anexo.linkAnexo],
                urlAnexo: [anexo.urlAnexo],
            }));
            if (manipulateForm) {
                this.form.markAsTouched();
                this.form.markAsDirty();
            }
        }
    }
    checkAnexoExists(anexo) {
        return this.form.value.anexos.some((el) => {
            return el.codAnexo === anexo.codAnexo || el.nomeAnexo == anexo.nomeAnexo;
        });
    }
    appendFile(files) {
        if (files.length === 0)
            return;
        const fd = new FormData();
        fd.append('file', files[0]);
        this.formData.push(fd);
        this.anexos.push(this.formBuilder.group({
            nomeAnexo: [files[0]['name']],
        }));
        if (this.showAnexos === false) {
            this.showAnexos = true;
        }
    }
    onPostAnexos(codRepresentante) {
        if (this.formData.length === 0) {
            /* this.pnotifyService.notice('Erro'); */
            return;
        }
        /* const id = this.form.value.codMaterial; */
        this.formData.forEach((element, index) => {
            this.representantesService
                .postAnexos(element, codRepresentante)
                .subscribe();
        });
    }
    onDeleteAnexo(codAnexo, index) {
        this.confirmDelete().subscribe((r) => {
            if (codAnexo) {
                this.loaderNavbar = true;
                this.representantesService
                    .deleteAnexo(codAnexo)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(() => {
                    this.loaderNavbar = false;
                }))
                    .subscribe({
                    next: (response) => {
                        if (response.hasOwnProperty('success') &&
                            response.success === true) {
                            r ? this.deleteDocumento(index) : null;
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
            else {
                r ? this.deleteDocumento(index) : null;
                this.formData.splice(index, 1);
            }
        });
    }
    deleteDocumento(index) {
        this.anexos.removeAt(index);
        this.form.markAsTouched();
        this.form.markAsDirty();
    }
    confirmDelete() {
        return this.confirmModalService.showConfirm('delete', 'Confirmar exclusão', 'Deseja realmente prosseguir com a exclusão do registro?', 'Cancelar', 'Confirmar');
    }
};
ComercialCadastrosRepresentantesFormularioComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_11__["DateService"] },
    { type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_21__["BsLocaleService"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_23__["BsModalService"] },
    { type: _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__["PNotifyService"] },
    { type: _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_4__["ConfirmModalService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"] },
    { type: _representantes_service__WEBPACK_IMPORTED_MODULE_14__["ComercialCadastrosRepresentantesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _gestao_associacoes_coordenadores_escritorios_coordenadores_escritorios_service__WEBPACK_IMPORTED_MODULE_13__["ComercialGestaoAssociacoesCoordenadoresEscritoriosService"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_23__["BsModalService"] },
    { type: _comercial_service__WEBPACK_IMPORTED_MODULE_16__["ComercialService"] },
    { type: _equipe_venda_equipe_venda_service__WEBPACK_IMPORTED_MODULE_15__["ComercialCadastrosEquipeVendaService"] },
    { type: src_app_shared_services_requests_estados_service__WEBPACK_IMPORTED_MODULE_17__["EstadosService"] },
    { type: src_app_shared_services_ws_cep_service__WEBPACK_IMPORTED_MODULE_18__["CepService"] },
    { type: _clientes_cadastro_enderecos_formulario_formulario_service__WEBPACK_IMPORTED_MODULE_20__["ComercialClientesCadastroEnderecosFormularioService"] },
    { type: _tipos_comissionamento_tipo_comissionamento_service__WEBPACK_IMPORTED_MODULE_19__["ComercialCadastrosTipoComissionamentoService"] },
    { type: _comissoes_representantes_gestao_comissionamentos_gestao_comissionamentos_service__WEBPACK_IMPORTED_MODULE_3__["ComercialComissoesGestaoComissionamentosService"] }
];
ComercialCadastrosRepresentantesFormularioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'comercial-gestao-representantes-formulario',
        template: _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
        _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_11__["DateService"],
        ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_21__["BsLocaleService"],
        ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_23__["BsModalService"],
        _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__["PNotifyService"],
        _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_4__["ConfirmModalService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"],
        _representantes_service__WEBPACK_IMPORTED_MODULE_14__["ComercialCadastrosRepresentantesService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _gestao_associacoes_coordenadores_escritorios_coordenadores_escritorios_service__WEBPACK_IMPORTED_MODULE_13__["ComercialGestaoAssociacoesCoordenadoresEscritoriosService"],
        ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_23__["BsModalService"],
        _comercial_service__WEBPACK_IMPORTED_MODULE_16__["ComercialService"],
        _equipe_venda_equipe_venda_service__WEBPACK_IMPORTED_MODULE_15__["ComercialCadastrosEquipeVendaService"],
        src_app_shared_services_requests_estados_service__WEBPACK_IMPORTED_MODULE_17__["EstadosService"],
        src_app_shared_services_ws_cep_service__WEBPACK_IMPORTED_MODULE_18__["CepService"],
        _clientes_cadastro_enderecos_formulario_formulario_service__WEBPACK_IMPORTED_MODULE_20__["ComercialClientesCadastroEnderecosFormularioService"],
        _tipos_comissionamento_tipo_comissionamento_service__WEBPACK_IMPORTED_MODULE_19__["ComercialCadastrosTipoComissionamentoService"],
        _comissoes_representantes_gestao_comissionamentos_gestao_comissionamentos_service__WEBPACK_IMPORTED_MODULE_3__["ComercialComissoesGestaoComissionamentosService"]])
], ComercialCadastrosRepresentantesFormularioComponent);



/***/ }),

/***/ "8ouN":
/*!****************************************************************!*\
  !*** ./src/app/modules/comercial/services/clientes.service.ts ***!
  \****************************************************************/
/*! exports provided: ComercialClientesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialClientesService", function() { return ComercialClientesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let ComercialClientesService = class ComercialClientesService {
    constructor(http) {
        this.http = http;
        this.API = `https://crm360.monterrey.com.bo/api/comercial/clientes`;
    }
    getStatus() {
        return this.http.get(`${this.API}/pesquisa/status`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getClientes(params) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http
            .get(`${this.API}/pesquisa/lista`, { params: httpParams })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getClientesGrupoEconomico(codCliente) {
        return this.http
            .get(`${this.API}/pesquisa/grupo-economico/${codCliente}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getPermissaoAcesso(id) {
        return this.http
            .get(`${this.API}/permissao-acesso/${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getDetalhes(codCliente) {
        return this.http
            .get(`${this.API}/pesquisa/detalhes/${codCliente}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getContatosResumido(codCliente) {
        return this.http
            .get(`${this.API}/pesquisa/contatos/${codCliente}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getExisteCpfCnpj(documento, getDadosCliente) {
        return this.http
            .get(`${this.API}/verificar-cpf-cnpj/${documento}?getDadosCliente=${getDadosCliente === true ? 1 : 0}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    postCliente(data) {
        return this.http
            .post(`${this.API}/pre-cadastro`, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getPropostaAnaliseCredito(codCliente) {
        return this.http
            .get(`${this.API}/proposta-analise-credito/${codCliente}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getDadosFaturamento(codCliente) {
        return this.http
            .get(`${this.API}/cadastro/carregar/dados-faturamento/${codCliente}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    updateDadosFaturamento(data) {
        return this.http
            .put(`${this.API}/cadastro/salvar/dados-faturamento`, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    deleteAtividadeSecundaria(codCliente, id) {
        return this.http
            .delete(`${this.API}/cadastro/excluir/atividade-secundaria/${codCliente}/${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getEnderecos(codCliente, params) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http
            .get(`${this.API}/cadastro/carregar/enderecos/${codCliente}`, {
            params: httpParams,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getEndereco(codCliente, idEndereco, idSituacao) {
        return this.http
            .get(`${this.API}/cadastro/carregar/endereco/${codCliente}/${idEndereco}/${idSituacao}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    updateEndereco(data) {
        return this.http
            .put(`${this.API}/cadastro/salvar/endereco`, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    deleteEndereco(codCliente, id) {
        return this.http
            .delete(`${this.API}/cadastro/excluir/endereco/${codCliente}/${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getContatos(codCliente) {
        return this.http
            .get(`${this.API}/cadastro/carregar/contatos/${codCliente}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getContato(codCliente, idContato) {
        return this.http
            .get(`${this.API}/cadastro/carregar/contato/${codCliente}/${idContato}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    updateContato(data) {
        return this.http
            .put(`${this.API}/cadastro/salvar/contato`, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    deleteContato(codCliente, id, idSeqTid) {
        return this.http
            .delete(`${this.API}/cadastro/excluir/contato/${codCliente}/${id}/${idSeqTid}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    deleteMeioContato(codCliente, id, idSeqTid) {
        return this.http
            .delete(`${this.API}/cadastro/excluir/meio-contato/${codCliente}/${id}/${idSeqTid}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    deleteFilho(idFilho) {
        return this.http
            .delete(`${this.API}/cadastro/excluir/filho/${idFilho}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getDadosRelacionamento(codCliente) {
        return this.http
            .get(`${this.API}/cadastro/carregar/dados-relacionamento/${codCliente}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    updateDadosRelacionamento(data) {
        return this.http
            .put(`${this.API}/cadastro/salvar/dados-relacionamento`, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getPotencialCompra(codCliente) {
        return this.http
            .get(`${this.API}/cadastro/carregar/potencial-compra/${codCliente}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    updatePotencialCompra(data) {
        return this.http
            .put(`${this.API}/cadastro/salvar/potencial-compra`, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getAnexos(codCliente) {
        return this.http
            .get(`${this.API}/cadastro/carregar/anexos/${codCliente}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)
        // , retry(2)
        );
    }
    uploadAnexo(data) {
        return this.http
            .post(`${this.API}/cadastro/upload/anexo`, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)
        // , retry(2)
        );
    }
    deleteAnexo(idAnexo) {
        return this.http
            .delete(`${this.API}/cadastro/excluir/anexo/${idAnexo}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getFilial(codCliente) {
        return this.http
            .get(`${this.API}/cadastro/carregar/filial/${codCliente}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getTravas(codCliente) {
        return this.http
            .get(`${this.API}/cadastro/carregar/travas/${codCliente}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getInformacoesFinanceiras(codCliente) {
        return this.http
            .get(`${this.API}/cadastro/carregar/informacoes-financeiras/${codCliente}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getInformacoesComerciais(codCliente) {
        return this.http
            .get(`${this.API}/cadastro/carregar/informacoes-comerciais/${codCliente}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getListaEmails(codCliente) {
        return this.http
            .get(`${this.API}/emails/lista/${codCliente}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
};
ComercialClientesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ComercialClientesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ComercialClientesService);



/***/ }),

/***/ "9lVW":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/representantes/representantes.module.ts ***!
  \*************************************************************************************/
/*! exports provided: ComercialCadastrosRepresentantesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCadastrosRepresentantesModule", function() { return ComercialCadastrosRepresentantesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _templates_templates_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../templates/templates.module */ "9lCC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "6No5");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "978R");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-currency-mask */ "D5nU");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular2-text-mask */ "UVXo");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var ng_brazil__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-brazil */ "hTrW");
/* harmony import */ var _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../../../shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../../../../shared/templates/templates.module */ "QdM9");
/* harmony import */ var _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../../../../shared/modules/shared.module */ "UKGz");
/* harmony import */ var _cadastros_materiais_templates_templates_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./../../cadastros/materiais/templates/templates.module */ "11Wi");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _representantes_routing_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./representantes-routing.module */ "Fbtk");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./lista/lista.component */ "giuP");
/* harmony import */ var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./formulario/formulario.component */ "1rTk");
/* harmony import */ var _representantes_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./representantes.service */ "T6IP");





// ngx-bootstrap



// ng-select

// ng2-currency-mask

// ng-brazil


// PNotify

// Modules





// Components


// Services

let ComercialCadastrosRepresentantesModule = class ComercialCadastrosRepresentantesModule {
};
ComercialCadastrosRepresentantesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _lista_lista_component__WEBPACK_IMPORTED_MODULE_18__["ComercialCadastrosRepresentantesListaComponent"],
            _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_19__["ComercialCadastrosRepresentantesFormularioComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"].forRoot(),
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"],
            ng2_currency_mask__WEBPACK_IMPORTED_MODULE_9__["CurrencyMaskModule"],
            _representantes_routing_module__WEBPACK_IMPORTED_MODULE_17__["ComercialCadastrosRepresentantesRoutingModule"],
            _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"],
            _shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_13__["TemplatesModule"],
            _templates_templates_module__WEBPACK_IMPORTED_MODULE_1__["ComercialTemplatesModule"],
            _cadastros_materiais_templates_templates_module__WEBPACK_IMPORTED_MODULE_15__["ComercialCadastrosMateriaisTemplatesModule"],
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_16__["ModalModule"].forRoot(),
            angular2_text_mask__WEBPACK_IMPORTED_MODULE_10__["TextMaskModule"],
            ng_brazil__WEBPACK_IMPORTED_MODULE_11__["NgBrazil"],
        ],
        providers: [_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__["PNotifyService"], _representantes_service__WEBPACK_IMPORTED_MODULE_20__["ComercialCadastrosRepresentantesService"]],
    })
], ComercialCadastrosRepresentantesModule);



/***/ }),

/***/ "AJGJ":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/comercial/comissoes/representantes/representantes.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NvbWlzc29lcy9yZXByZXNlbnRhbnRlcy9yZXByZXNlbnRhbnRlcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "DI74":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/comissoes/representantes/programacao-pagamentos/lista/lista.component.scss ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NvbWlzc29lcy9yZXByZXNlbnRhbnRlcy9wcm9ncmFtYWNhby1wYWdhbWVudG9zL2xpc3RhL2xpc3RhLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "FD2y":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/cadastros/representantes/lista/lista.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<!-- <loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen> -->\r\n<app-header appTitle=\"Representantes\">\r\n  <button\r\n    type=\"button\"\r\n    [routerLink]=\"['../novo']\">\r\n    Adicionar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onFilter()\">\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" >\r\n  <div class=\"row\" >\r\n    <div class=\"col\">\r\n      <advanced-filter>\r\n        <form [formGroup]=\"form\" autocomplete=\"off\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-6\">\r\n              <label for=\"nome\">Representante</label>\r\n              <input\r\n            class=\"form-control\"\r\n            id=\"nome\"\r\n            type=\"text\"\r\n            formControlName=\"nome\"\r\n            >\r\n            </div>\r\n            <div class=\"form-group col-lg-2\">\r\n              <label for=\"codSituacao\">Situação</label>\r\n              <select\r\n                class=\"form-control custom-select\"\r\n                id=\"codSituacao\"\r\n                formControlName=\"codSituacao\">\r\n                <option value=\"\">Todos</option>\r\n                <option value=\"0\">Inativos</option>\r\n                <option value=\"1\">Ativos</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"form-group col-lg-2\">\r\n              <label for=\"emiteNota\">Emite Nota</label>\r\n              <select\r\n                class=\"form-control custom-select\"\r\n                id=\"emiteNota\"\r\n                formControlName=\"emiteNota\">\r\n                <option value=\"\">Todos</option>\r\n                <option value=\"0\">Não</option>\r\n                <option value=\"1\">Sim</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"form-group col-lg-2\">\r\n              <label for=\"registros\">Registros</label>\r\n              <select\r\n                class=\"form-control\"\r\n                id=\"registros\"\r\n                formControlName=\"registros\">\r\n                <option>25</option>\r\n                <option>50</option>\r\n                <option>100</option>\r\n                <option>200</option>\r\n                <option>300</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </advanced-filter>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" >\r\n    <div [ngClass]=\"{'col': !showDetailPanel, 'col-5 pr-0': showDetailPanel}\">\r\n      <custom-table [config]=\"tableConfig\" *ngIf=\"dados.length > 0 && !dadosEmpty\">\r\n        <ng-template #thead let-thead>\r\n          <tr >\r\n            <th scope=\"col\" class=\"text-center hover\" >\r\n              <thead-sorter\r\n                value=\"Código\"\r\n                [active]=\"orderBy == 'NM_VEND'\"\r\n                [sort]=\"orderType\"\r\n                (click)=\"setOrderBy('NM_VEND')\">\r\n              </thead-sorter>\r\n            </th>\r\n            <th scope=\"col\">Nome</th>\r\n\r\n            <th scope=\"col\">Dt Vigência</th>\r\n\r\n            <th scope=\"col\">CNPJ</th>\r\n\r\n            <th scope=\"col\"\r\n            [hidden]=\"showDetailPanel\">\r\n            Usuário\r\n          </th>\r\n\r\n            <th scope=\"col\" [hidden]=\"showDetailPanel\"></th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let item of dadosPagination; let i = index;\"\r\n          [class.table-active]=\"item.codRepresentante && showDetailPanel\"\r\n          >\r\n            <td\r\n              class=\"text-center hover\"\r\n              [ngClass]=\"classStatusBorder(item)\"\r\n              >\r\n              {{ item.codRepresentante }}\r\n            </td>\r\n            <!-- (click)=\"onDetails(item)\" -->\r\n            <td\r\n              class=\"hover\"\r\n              >\r\n              {{ item.nome | uppercase }}\r\n            </td>\r\n            <!-- (click)=\"onDetails(item)\" -->\r\n            <td\r\n              class=\"hover\"\r\n\r\n              >\r\n              {{ item.dataFinalContrato | date: 'dd/MM/yyyy'}}\r\n            </td>\r\n            <!-- (click)=\"onDetails(item)\" -->\r\n            <td\r\n              class=\"hover\"\r\n\r\n              >\r\n              {{ item.cnpjEmpresaRepresentacao }}\r\n            </td>\r\n            <!-- (click)=\"onDetails(item)\" -->\r\n              <td\r\n              class=\"hover\"\r\n\r\n              [hidden]=\"showDetailPanel\"\r\n              >\r\n              <span >{{ item.nomeUsuarioCadastro | uppercase }}</span>\r\n\r\n            </td>\r\n            <!-- (click)=\"onDetails(item)\" -->\r\n            <td class=\"text-right\" [hidden]=\"showDetailPanel\">\r\n              <span *ngIf=\"item.codSituacao == 0\" class=\"mr-3\" tooltip=\"Ativar\" placement=\"left\" container=\"body\">\r\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onActivate(i, item)\">\r\n                  <i class=\"fas fa-toggle-off\"></i>\r\n                </button>\r\n              </span>\r\n              <span *ngIf=\"item.codSituacao == 1\" class=\"mr-3\" tooltip=\"Inativar\" placement=\"left\" container=\"body\">\r\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onInactivate(i, item)\">\r\n                  <i class=\"fas fa-toggle-on\"></i>\r\n                </button>\r\n              </span>\r\n              <span class=\"mr-3\" tooltip=\"Editar\" placement=\"left\" container=\"body\">\r\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onEdit(item)\">\r\n                  <i class=\"fas fa-edit\"></i>\r\n                </button>\r\n              </span>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n      <empty-result message=\"Nenhuma informação encontrada\" *ngIf=\"dadosEmpty && dadosLoaded\"></empty-result>\r\n      <div class=\"d-flex justify-content-center mt-3\" *ngIf=\"totalItems > itemsPerPage && dadosLoaded\">\r\n        <pagination\r\n          [maxSize]=\"maxSize\"\r\n          [(totalItems)]=\"totalItems\"\r\n          (pageChanged)=\"onPageChanged($event)\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPage\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\">\r\n        </pagination>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-7\" [hidden]=\"!showDetailPanel\">\r\n      <detail-panel [panelTitle]=\"detailPanelTitle\">\r\n        <custom-table [config]=\"tableConfigMateriais\" *ngIf=\"modeloComissao.length > 0\">\r\n          <ng-template #thead let-thead>\r\n            <tr>\r\n              <th scope=\"col\" class=\"text-center\">De</th>\r\n              <th scope=\"col\" class=\"text-center\">Até</th>\r\n              <th scope=\"col\" class=\"text-center\">Valor Comissão</th>\r\n              <th scope=\"col\" class=\"text-center\">Valor Fixo</th>\r\n            </tr>\r\n          </ng-template>\r\n          <ng-template #tbody let-tbody>\r\n            <tr *ngFor='let item of modeloComissao'>\r\n              <td class=\"text-center\">{{ item.grupos.de }}</td>\r\n              <td class=\"text-center\">{{ item.grupos.ate }}</td>\r\n              <td class=\"text-center\">{{ item.grupos.valorComissao }}</td>\r\n              <td class=\"text-center\">{{ item.grupos.valorFixo }}</td>\r\n            </tr>\r\n          </ng-template>\r\n        </custom-table>\r\n      </detail-panel>\r\n    </div>\r\n  </div>\r\n</app-body>\r\n");

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

/***/ "Fbtk":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/representantes/representantes-routing.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: ComercialCadastrosRepresentantesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCadastrosRepresentantesRoutingModule", function() { return ComercialCadastrosRepresentantesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formulario/formulario-resolver.guard */ "QjSQ");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lista/lista.component */ "giuP");
/* harmony import */ var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./formulario/formulario.component */ "1rTk");



// Guards
// import { FormDeactivateGuard } from 'src/app/guards/form-deactivate.guard';

// Components


const routes = [
    {
        path: '',
        children: [
            { path: 'lista', component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_4__["ComercialCadastrosRepresentantesListaComponent"] },
            {
                path: '',
                redirectTo: 'lista',
                pathMatch: 'full',
            },
            {
                path: 'novo',
                component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_5__["ComercialCadastrosRepresentantesFormularioComponent"],
                resolve: {
                    detalhes: _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_3__["ComercialCadastrosRepresentantesFormularioResolverGuard"],
                },
            },
            {
                path: 'editar/:id',
                component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_5__["ComercialCadastrosRepresentantesFormularioComponent"],
                resolve: {
                    detalhes: _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_3__["ComercialCadastrosRepresentantesFormularioResolverGuard"],
                },
            },
        ]
    },
];
let ComercialCadastrosRepresentantesRoutingModule = class ComercialCadastrosRepresentantesRoutingModule {
};
ComercialCadastrosRepresentantesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ComercialCadastrosRepresentantesRoutingModule);



/***/ }),

/***/ "Fw+h":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/comissoes/representantes/representantes.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<app-header appTitle=\"Representantes\"></app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <h5 class=\"pt-2 mb-4 text-center\">Selecione uma atividade</h5>\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-lg-9\">\r\n      <div class=\"row justify-content-center\">\r\n        <div class=\"col-md-3\">\r\n          <card-button\r\n            icon=\"fas fa-chart-pie\"\r\n            text=\"Programação de Pagamentos\"\r\n            [routerLink]=\"['../../programacao-pagamentos']\">\r\n          </card-button>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <card-button\r\n            icon=\"fas fa-chart-pie\"\r\n            text=\"Gestão de Comissionamentos\"\r\n            [routerLink]=\"['../../gestao-comissionamentos']\">\r\n          </card-button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</app-body>\r\n");

/***/ }),

/***/ "HE1/":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/comissoes/representantes/programacao-pagamentos/lista/lista.component.html ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<app-header appTitle=\"Programação de Pagamentos\">\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onFilter()\">\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" >\r\n  <div class=\"row\" >\r\n    <div class=\"col\">\r\n      <advanced-filter>\r\n        <form [formGroup]=\"form\" autocomplete=\"off\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-5\">\r\n              <label for=\"codRepresentante\">Representante</label>\r\n              <ng-select\r\n                  type='text'\r\n                  [items]=\"representantes\"\r\n                  [searchable]=\"true\"\r\n                  [clearable]=\"false\"\r\n                  placeholder=\"Selecione...\"\r\n                  bindLabel=\"nomeRepresentante\"\r\n                  bindValue=\"codRepresentante\"\r\n                  formControlName=\"codRepresentante\">\r\n                </ng-select>\r\n            </div>\r\n\r\n            <div class=\"form-group col-lg-5\">\r\n              <label for=\"codStatus\">Status</label>\r\n              <ng-select\r\n                    type='text'\r\n                    [items]=\"situacao\"\r\n                    [searchable]=\"true\"\r\n                    [clearable]=\"false\"\r\n                    [virtualScroll]=\"true\"\r\n                    [hideSelected]=\"true\"\r\n                    placeholder=\"Selecione...\"\r\n                    bindLabel=\"nomeSituacao\"\r\n                    bindValue=\"codSituacao\"\r\n                    formControlName=\"codStatus\"\r\n                  >\r\n                </ng-select>\r\n            </div>\r\n            <div class=\"form-group col-lg-2\">\r\n              <label for=\"registros\">Registros</label>\r\n              <select\r\n                class=\"form-control\"\r\n                id=\"registros\"\r\n                formControlName=\"registros\">\r\n                <option>25</option>\r\n                <option>50</option>\r\n                <option>100</option>\r\n                <option>200</option>\r\n                <option>300</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </advanced-filter>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\"  *ngIf=\"dados.length > 0 && !dadosEmpty\">\r\n    <div class=\"col\">\r\n      <subtitles\r\n        [data]=\"subtitles\"\r\n        [show]=\"!showDetailPanel \">\r\n      </subtitles>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" >\r\n    <div [ngClass]=\"{'col': !showDetailPanel, 'col-4 pr-0': showDetailPanel}\">\r\n      <custom-table [config]=\"tableConfig\" *ngIf=\"dados.length > 0 && !dadosEmpty\">\r\n        <ng-template #thead let-thead>\r\n          <tr >\r\n            <th scope=\"col\" class=\"text-center hover\" *ngIf=\"!showDetailPanel\">\r\n              <thead-sorter\r\n                value=\"Código\"\r\n                [active]=\"orderBy == 'codPreco'\"\r\n                [sort]=\"orderType\"\r\n                (click)=\"setOrderBy('codPreco')\"\r\n                [hidden]=\"showDetailPanel\">\r\n              </thead-sorter>\r\n            </th>\r\n\r\n            <th scope=\"col\">Razão Social</th>\r\n\r\n            <th scope=\"col\">Cpf</th>\r\n\r\n            <th scope=\"col\"\r\n            [hidden]=\"showDetailPanel\">Valor NF</th>\r\n\r\n            <th scope=\"col\"\r\n            [hidden]=\"showDetailPanel\">Retenções</th>\r\n\r\n            <th scope=\"col\"\r\n            [hidden]=\"showDetailPanel\">Valor Comissão</th>\r\n\r\n          <th scope=\"col\"\r\n          [hidden]=\"showDetailPanel\">\r\n          Data Previsão\r\n          </th>\r\n\r\n          <th scope=\"col\"\r\n          [hidden]=\"showDetailPanel\">\r\n          Data Pagamento\r\n          </th>\r\n\r\n          <th scope=\"col\"\r\n          [hidden]=\"showDetailPanel\">\r\n        </th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let item of dados; let i = index;\"\r\n          [class.table-active]=\"item.codRepresentante == codigo\"\r\n          >\r\n            <td\r\n              class=\"text-center hover\"\r\n              (click)=\"onDetails(item)\"\r\n              [hidden]=\"showDetailPanel\"\r\n              [ngClass]=\"classStatusBorder(item)\">\r\n              {{ item.codRepresentanteTid }}\r\n            </td>\r\n            <td\r\n              class=\"hover\"\r\n              (click)=\"onDetails(item)\"\r\n              >\r\n              {{ item.nomeRepresentante }}\r\n            </td>\r\n            <td\r\n              *ngIf=\"item.cpfCnpj !== ''\"\r\n              class=\"hover\"\r\n              (click)=\"onDetails(item)\">\r\n              {{ item.cpfCnpj | cpf }}\r\n            </td>\r\n            <td\r\n              *ngIf=\"item.cpfCnpj === '' || item.cpfCnpj === null\"\r\n              class=\"hover\"\r\n              (click)=\"onDetails(item)\">\r\n              NÃO INFORMADO\r\n            </td>\r\n            <td\r\n              class=\"hover\"\r\n              (click)=\"onDetails(item)\"\r\n              [hidden]=\"showDetailPanel\">\r\n              {{ item.valorNotaFiscal | currency:'BRL':'symbol':'1.2-2' }}\r\n            </td>\r\n\r\n            <td\r\n              class=\"hover\"\r\n              (click)=\"onDetails(item)\"\r\n              [hidden]=\"showDetailPanel\">\r\n              {{ item.valorImpostos | currency:'BRL':'symbol':'1.2-2' }}\r\n            </td>\r\n\r\n            <td\r\n            class=\"hover\"\r\n            (click)=\"onDetails(item)\"\r\n            [hidden]=\"showDetailPanel\">\r\n            {{ item.valorComissao | currency:'BRL':'symbol':'1.2-2' }}\r\n          </td>\r\n\r\n            <td [hidden]=\"showDetailPanel\">\r\n              {{ item.dataProgramacaoPagamento | date: 'dd/MM/yyyy' }}\r\n            </td>\r\n\r\n            <td [hidden]=\"showDetailPanel\">\r\n              {{ item.dataPagamento | date: 'dd/MM/yyyy' }}\r\n            </td>\r\n\r\n            <td [hidden]=\"showDetailPanel\">\r\n              <span class=\"mr-3\"  placement=\"right\" container=\"body\">\r\n                <btn-icon\r\n                  *ngIf=\"item.codSituacao === 7\"\r\n                  icon=\"fas fa-edit\"\r\n                  size=\"medium\"\r\n                  color=\"primary\"\r\n                  tooltip=\"Inserir Data\"\r\n                  (click)=\"openModal(template, i); setFormDate(item)\">\r\n                </btn-icon>\r\n\r\n                <btn-icon\r\n                  *ngIf=\"item.dataProgramacaoPagamento != '' && item.codSituacao === 8\"\r\n                  icon=\"fab fa-product-hunt\"\r\n                  size=\"medium\"\r\n                  color=\"success\"\r\n                  tooltip=\"Dar baixa\"\r\n                  (click)=\"onSubmitPagamento(item); setFormDate(item)\">\r\n                </btn-icon>\r\n              </span>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n      <empty-result message=\"Nenhuma informação encontrada\" *ngIf=\"dadosEmpty && dadosLoaded\"></empty-result>\r\n      <div class=\"d-flex justify-content-center mt-3\" *ngIf=\"totalItems > itemsPerPage && !loaderNavbar\">\r\n        <pagination\r\n          [maxSize]=\"maxSize\"\r\n          [(totalItems)]=\"totalItems\"\r\n          (pageChanged)=\"onPageChanged($event)\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPage\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\">\r\n        </pagination>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-8\" [hidden]=\"!showDetailPanel\">\r\n\r\n      <detail-panel [panelTitle]=\"detailPanelTitle\">\r\n        <custom-table [config]=\"tableConfigMateriais\"\r\n        *ngIf=\"representantesDetail.length > 0\"\r\n        >\r\n          <ng-template #thead let-thead >\r\n            <tr>\r\n              <th scope=\"col\" class=\"text-center\">Representante</th>\r\n              <th scope=\"col\" class=\"text-center\">Banco</th>\r\n              <th scope=\"col\">Tipo de Conta</th>\r\n              <th scope=\"col\" class=\"text-center\">Titular</th>\r\n              <th scope=\"col\" class=\"text-center\">Agência</th>\r\n              <th scope=\"col\" class=\"text-center\">C/C</th>\r\n            </tr>\r\n          </ng-template>\r\n          <ng-template #tbody let-tbody>\r\n            <tr *ngFor='let item of representantesDetail'>\r\n              <td class=\"text-center\">{{ item.nomeRepresentante }}</td>\r\n              <td class=\"text-center\">{{ item.nomeBanco }}</td>\r\n              <td class=\"text-center\">{{ item.tipoConta }}</td>\r\n              <td class=\"text-center\">{{ item.nrAgencia }}</td>\r\n              <td class=\"text-center\">{{ item.nrContaCorrente }}</td>\r\n              <td class=\"text-center\">{{ item.nomeTitularConta }}</td>\r\n            </tr>\r\n          </ng-template>\r\n        </custom-table>\r\n      </detail-panel>\r\n    </div>\r\n  </div>\r\n\r\n  <ng-template #template>\r\n\r\n    <div class=\"modal-body\">\r\n      <button type=\"button\" class=\"close pull-right\" (click)=\"closeModal(expedicao)\" aria-label=\"Close\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n      <div class=\"mtc-title text-center\">Edição e baixa de pagamento</div>\r\n      <div class=\"mtc-title text-center\" style=\"font-size: 0.7rem;\">REPRESENTANTE: {{ nomeRepresentante | uppercase }}</div>\r\n      <form [formGroup]=\"formDate\" autocomplete=\"off\">\r\n        <div class=\"row mt-2\">\r\n          <div class=\"form-group col-lg-3\"></div>\r\n          <div class=\"form-group col-lg-6\">\r\n            <div class=\"mtc-title text-center\" style=\"font-size: 0.7rem;\">Data de Programação</div>\r\n            <input\r\n              style=\"text-align: center;\"\r\n              class=\"form-control\"\r\n              id=\"dtProgramacao\"\r\n              type=\"text\"\r\n              bsDatepicker\r\n              [daysDisabled]=\"[6,0]\"\r\n              [minDate]=\"minDate\"\r\n              formControlName=\"dataProgramacao\"\r\n              >\r\n            </div>\r\n              <div class=\"form-group col-lg-3\"></div>\r\n          </div>\r\n        </form>\r\n        <div class=\"row mt-2\">\r\n          <div class=\"col\" style=\"text-align: center;\">\r\n\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-primary btn-sm \"\r\n            (click)=\"modalRef.hide(); onSubmitProgramacao();\"\r\n            >\r\n            Salvar\r\n          </button>\r\n\r\n        </div>\r\n      </div>\r\n          <div class=\"form-group col-lg-2\"></div>\r\n\r\n\r\n    </div>\r\n  </ng-template>\r\n</app-body>\r\n");

/***/ }),

/***/ "IsD0":
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/comissoes/representantes/programacao-pagamentos/programacao-pagamentos.module.ts ***!
  \********************************************************************************************************************/
/*! exports provided: ComercialComissoesRepresentantesProgramacaoPagamentosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialComissoesRepresentantesProgramacaoPagamentosModule", function() { return ComercialComissoesRepresentantesProgramacaoPagamentosModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "6No5");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "978R");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-currency-mask */ "D5nU");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../../../../shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _cadastros_materiais_templates_templates_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../../cadastros/materiais/templates/templates.module */ "11Wi");
/* harmony import */ var _templates_templates_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../../templates/templates.module */ "9lCC");
/* harmony import */ var _shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../../../../shared/templates/templates.module */ "QdM9");
/* harmony import */ var _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../../../../../shared/modules/shared.module */ "UKGz");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _programacao_pagamentos_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./programacao-pagamentos-routing.module */ "wXu9");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./lista/lista.component */ "XFRH");
/* harmony import */ var _programacao_pagamentos_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./programacao-pagamentos.service */ "jYq1");
/* harmony import */ var _shared_pipes_cpf_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./../../../../../shared/pipes/cpf.pipe */ "mgvm");




// ngx-bootstrap



// ng-select

// ng2-currency-mask

// PNotify

// Modules






// Components

// Services

// Pipe

let ComercialComissoesRepresentantesProgramacaoPagamentosModule = class ComercialComissoesRepresentantesProgramacaoPagamentosModule {
};
ComercialComissoesRepresentantesProgramacaoPagamentosModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _lista_lista_component__WEBPACK_IMPORTED_MODULE_16__["ComercialComissoesRepresentantesProgramacaoPagamentosListaComponent"],
            _shared_pipes_cpf_pipe__WEBPACK_IMPORTED_MODULE_18__["CPFPipe"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"].forRoot(),
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
            ng2_currency_mask__WEBPACK_IMPORTED_MODULE_8__["CurrencyMaskModule"],
            _programacao_pagamentos_routing_module__WEBPACK_IMPORTED_MODULE_15__["ComercialComissoesRepresentantesProgramacaoPagamentosRoutingModule"],
            _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"],
            _shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_12__["TemplatesModule"],
            _templates_templates_module__WEBPACK_IMPORTED_MODULE_11__["ComercialTemplatesModule"],
            _cadastros_materiais_templates_templates_module__WEBPACK_IMPORTED_MODULE_10__["ComercialCadastrosMateriaisTemplatesModule"],
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_14__["ModalModule"].forRoot(),
        ],
        providers: [
            _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"],
            _programacao_pagamentos_service__WEBPACK_IMPORTED_MODULE_17__["ComercialComissoesRepresentantesProgramacaoPagamentosService"],
        ],
    })
], ComercialComissoesRepresentantesProgramacaoPagamentosModule);



/***/ }),

/***/ "NwWL":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/representantes/formulario/formulario.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NhZGFzdHJvcy9yZXByZXNlbnRhbnRlcy9mb3JtdWxhcmlvL2Zvcm11bGFyaW8uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "P9JU":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/comercial/comissoes/representantes/representantes.module.ts ***!
  \*************************************************************************************/
/*! exports provided: ComercialComissoesRepresentantesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialComissoesRepresentantesModule", function() { return ComercialComissoesRepresentantesModule; });
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
/* harmony import */ var _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../../../shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../../../shared/templates/templates.module */ "QdM9");
/* harmony import */ var _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../../../shared/modules/shared.module */ "UKGz");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _representantes_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./representantes-routing.module */ "gZaf");
/* harmony import */ var _programacao_pagamentos_programacao_pagamentos_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./programacao-pagamentos/programacao-pagamentos.module */ "IsD0");
/* harmony import */ var _representantes_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./representantes.component */ "i16Q");




// ngx-bootstrap


// ng-select

// ng-brazil


// PNotify

// Modules






// Components

let ComercialComissoesRepresentantesModule = class ComercialComissoesRepresentantesModule {
};
ComercialComissoesRepresentantesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_representantes_component__WEBPACK_IMPORTED_MODULE_16__["ComercialComissoesRepresentantesComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"].forRoot(),
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__["ModalModule"].forRoot(),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__["BsDatepickerModule"].forRoot(),
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"],
            angular2_text_mask__WEBPACK_IMPORTED_MODULE_7__["TextMaskModule"],
            ng_brazil__WEBPACK_IMPORTED_MODULE_8__["NgBrazil"],
            _representantes_routing_module__WEBPACK_IMPORTED_MODULE_14__["ComercialComissoesRepresentantesRoutingModule"],
            _programacao_pagamentos_programacao_pagamentos_module__WEBPACK_IMPORTED_MODULE_15__["ComercialComissoesRepresentantesProgramacaoPagamentosModule"],
            _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
            _shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_10__["TemplatesModule"],
        ],
        providers: [_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"]],
    })
], ComercialComissoesRepresentantesModule);



/***/ }),

/***/ "QjSQ":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/representantes/formulario/formulario-resolver.guard.ts ***!
  \****************************************************************************************************/
/*! exports provided: ComercialCadastrosRepresentantesFormularioResolverGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCadastrosRepresentantesFormularioResolverGuard", function() { return ComercialCadastrosRepresentantesFormularioResolverGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _representantes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../representantes.service */ "T6IP");



// Services

let ComercialCadastrosRepresentantesFormularioResolverGuard = class ComercialCadastrosRepresentantesFormularioResolverGuard {
    constructor(representantesService) {
        this.representantesService = representantesService;
    }
    resolve(route) {
        if (route.params && route.params.id) {
            return this.representantesService.getDetalhes(route.params.id);
        }
        // É implementado o método "of" para manter a tipagem de retorno com Observable.
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
            success: true,
            mensagem: null,
            data: [
                {
                    codSituacao: '',
                    tipoPagamentoComissao: null,
                    emiteNotaFiscal: null,
                    recebeEmailInativacaoCliente: null,
                    codEquipe: null,
                    codEmpresa: null,
                    nrMatricula: null,
                    nome: null,
                    razaoSocial: null,
                    endereco: null,
                    // nrEndereco: null,
                    // complemento: null,
                    nomeBairro: null,
                    cep: null,
                    nomeCidade: null,
                    uf: null,
                    cnpj: null,
                    ie: null,
                    im: null,
                    telefone: null,
                    celular: null,
                    email: null,
                    dataInicialContrato: null,
                    dataFinalContrato: null,
                    // dataRenovacaoContrato: null,
                    nomeFantasiaRepresentacao: null,
                    razaoSocialRepresentacao: null,
                    cnpjEmpresaRepresentacao: null,
                    ieEmpresaRepresentacao: null,
                    imEmpresaRepresentacao: null,
                    nomeTitularConta: null,
                    tipoConta: null,
                    nomeBanco: null,
                    agencia: null,
                    contaCorrente: null,
                }
            ],
        });
    }
};
ComercialCadastrosRepresentantesFormularioResolverGuard.ctorParameters = () => [
    { type: _representantes_service__WEBPACK_IMPORTED_MODULE_3__["ComercialCadastrosRepresentantesService"] }
];
ComercialCadastrosRepresentantesFormularioResolverGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_representantes_service__WEBPACK_IMPORTED_MODULE_3__["ComercialCadastrosRepresentantesService"]])
], ComercialCadastrosRepresentantesFormularioResolverGuard);



/***/ }),

/***/ "VDWA":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/cadastros/representantes/formulario/formulario.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<app-header [appTitle]=\"appTitle\">\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onCancel()\"\r\n    [disabled]=\"submittingForm\">\r\n    Cancelar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onSubmit()\"\r\n    [disabled]=\"!form.valid || submittingForm\">\r\n    Salvar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\r\n  <div  class=\"ml-5 mr-5\">\r\n  <div class=\"row ml-5 mr-5\">\r\n  <div class=\"row ml-5 mr-5\">\r\n  <div class=\"row ml-5 mr-5\">\r\n\r\n  <form [formGroup]=\"form\" autocomplete=\"off\" >\r\n    <div class=\"mtc-title mb-2\">Formulário cadastro de representante</div>\r\n    <hr>\r\n  <div class=\"row ml-5 mr-5\">\r\n    <div class=\"mtc-title mb-3 mt-2 ml-3 col-lg-12\">Dados do Representante</div>\r\n          <div class=\"form-group col-lg-2\">\r\n              <label>Situação</label>\r\n              <ng-select\r\n              type='text'\r\n              [searchable]=\"true\"\r\n              [clearable]=\"false\"\r\n              [items]=\"situacao\"\r\n              [virtualScroll]=\"true\"\r\n              [hideSelected]=\"true\"\r\n              [closeOnSelect]=\"true\"\r\n              placeholder=\"Selecione...\"\r\n              bindLabel=\"descricao\"\r\n              bindValue=\"id\"\r\n              formControlName=\"codSituacao\"\r\n              [ngClass]=\"onFieldError('codSituacao') + ' ' + onFieldRequired('codSituacao')\"\r\n            >\r\n            </ng-select>\r\n            </div>\r\n\r\n\r\n\r\n            <div class=\"form-group col-lg-6\">\r\n              <label for=\"tipoPagamentoComissao\">Tipos Comissão</label>\r\n                    <ng-select\r\n                      type='text'\r\n                      [searchable]=\"true\"\r\n                      [clearable]=\"false\"\r\n                      [items]=\"tipoComissao\"\r\n                      [virtualScroll]=\"true\"\r\n                      [hideSelected]=\"true\"\r\n                      [closeOnSelect]=\"true\"\r\n                      placeholder=\"Selecione...\"\r\n                      bindLabel=\"dsTipoComissao\"\r\n                      bindValue=\"idTipoComissao\"\r\n                      formControlName=\"tipoPagamentoComissao\"\r\n                      (change)=\"openModal(tiposComissao);\"\r\n                      [ngClass]=\"onFieldError('tipoPagamentoComissao') + ' ' + onFieldRequired('tipoPagamentoComissao')\"\r\n                    >\r\n\r\n\r\n                    <invalid-form-control [show]=\"onFieldInvalid('tipoPagamentoComissao')\" message=\"Equipe é obrigatório.\"></invalid-form-control>\r\n                    </ng-select>\r\n                </div>\r\n\r\n            <div class=\"form-group col-lg-2\">\r\n              <label for=\"emiteNotaFiscal\">Emite Nota</label>\r\n              <select\r\n                class=\"form-control custom-select\"\r\n                id=\"emiteNotaFiscal\"\r\n                formControlName=\"emiteNotaFiscal\">\r\n                <option value=\"0\">Não</option>\r\n                <option value=\"1\">Sim</option>\r\n              </select>\r\n            </div>\r\n\r\n            <div class=\"form-group col-lg-2\">\r\n              <label for=\"recebeEmailInativacaoCliente\">Recebe Email</label>\r\n              <select\r\n                  class=\"form-control custom-select\"\r\n                  id=\"recebeEmailInativacaoCliente\"\r\n                  formControlName=\"recebeEmailInativacaoCliente\">\r\n                  <option value=\"0\">Não</option>\r\n                  <option value=\"1\">Sim</option>\r\n              </select>\r\n            </div>\r\n\r\n            <div class=\"form-group col-lg-5\">\r\n              <label for=\"codEquipe\">Equipe</label>\r\n                <ng-select\r\n                  type='text'\r\n                  [searchable]=\"true\"\r\n                  [clearable]=\"false\"\r\n                  [items]=\"equipes\"\r\n                  [virtualScroll]=\"true\"\r\n                  [hideSelected]=\"true\"\r\n                  [closeOnSelect]=\"true\"\r\n                  placeholder=\"Selecione...\"\r\n                  bindLabel=\"dsEquipeVenda\"\r\n                  bindValue=\"codEquipeVenda\"\r\n                  formControlName=\"codEquipe\"\r\n                  [ngClass]=\"onFieldError('codEquipe') + ' ' + onFieldRequired('codEquipe')\"\r\n                >\r\n                <invalid-form-control\r\n                [show]=\"onFieldInvalid('codEquipe')\"\r\n                message=\"Equipe é obrigatório.\">\r\n                </invalid-form-control>\r\n                  </ng-select>\r\n              </div>\r\n\r\n              <div class=\"form-group col-lg-5\">\r\n                <label for=\"codEscritorio\">Escritório</label>\r\n                <ng-select\r\n                  type='text'\r\n                  [searchable]=\"true\"\r\n                  [clearable]=\"false\"\r\n                  [items]=\"escritorio\"\r\n                  [virtualScroll]=\"true\"\r\n                  [hideSelected]=\"true\"\r\n                  [closeOnSelect]=\"true\"\r\n                  placeholder=\"Selecione...\"\r\n                  bindLabel=\"nomeEscritorio\"\r\n                  bindValue=\"codEscritorio\"\r\n                  formControlName=\"codEscritorio\"\r\n                  [ngClass]=\"onFieldError('codEscritorio') + ' ' + onFieldRequired('codEscritorio')\"\r\n                >\r\n                <!-- (change)=\"openModal(template)\" -->\r\n                <invalid-form-control\r\n                [show]=\"onFieldInvalid('codEscritorio')\"\r\n                message=\"Escritorio é obrigatório.\">\r\n                </invalid-form-control>\r\n                </ng-select>\r\n            </div>\r\n\r\n            <div class=\"form-group col-lg-2\">\r\n              <label for=\"nrMatricula\">Matrícula</label>\r\n              <input\r\n            class=\"form-control\"\r\n            id=\"nrMatricula\"\r\n            type=\"text\"\r\n            formControlName=\"nrMatricula\"\r\n            [ngClass]=\"onFieldError('nrMatricula') + ' ' + onFieldRequired('nrMatricula')\"\r\n            >\r\n            <invalid-form-control [show]=\"onFieldInvalid('nrMatricula')\" message=\"Número da Matrícula é obrigatório.\"></invalid-form-control>\r\n            </div>\r\n\r\n\r\n            <div class=\"form-group col-lg-12\">\r\n              <label for=\"nome\">Nome</label>\r\n              <input\r\n                class=\"form-control\"\r\n                id=\"nome\"\r\n                type=\"text\"\r\n                formControlName=\"nome\"\r\n                [ngClass]=\"onFieldError('nome') + ' ' + onFieldRequired('nome')\"\r\n                >\r\n            <invalid-form-control [show]=\"onFieldInvalid('nome')\" message=\"Nome é obrigatório.\"></invalid-form-control>\r\n            </div>\r\n\r\n            <div class=\"form-group col-lg-12\">\r\n              <label for=\"razaoSocial\">Razão Social</label>\r\n              <input\r\n                class=\"form-control\"\r\n                id=\"razaoSocial\"\r\n                type=\"text\"\r\n                formControlName=\"razaoSocial\"\r\n                [ngClass]=\"onFieldError('razaoSocial') + ' ' + onFieldRequired('razaoSocial')\"\r\n                >\r\n            <invalid-form-control [show]=\"onFieldInvalid('razaoSocial')\" message=\"Razão Social é obrigatório.\"></invalid-form-control>\r\n            </div>\r\n\r\n            <div class=\"form-group col-lg-2\">\r\n              <label for=\"cep\">Cep</label>\r\n              <input\r\n                class=\"form-control\"\r\n                id=\"cep\"\r\n                type=\"text\"\r\n                formControlName=\"cep\"\r\n                (input)=\"onInput(); onInputCep(detalhes);\"\r\n                [ngClass]=\"onFieldError('cep') + ' ' + onFieldRequired('cep')\"\r\n                cep [textMask]=\"{ mask: MASKS.cep.textMask }\">\r\n            <invalid-form-control [show]=\"onFieldInvalid('cep')\" message=\"Cep é obrigatório.\"></invalid-form-control>\r\n            </div>\r\n\r\n            <div class=\"form-group col-lg-10\">\r\n              <label for=\"endereco\">Endereço</label>\r\n              <input\r\n                class=\"form-control\"\r\n                id=\"endereco\"\r\n                type=\"text\"\r\n                formControlName=\"endereco\"\r\n                (input)=\"onInput()\"\r\n                [ngClass]=\"onFieldError('endereco') + ' ' + onFieldRequired('endereco')\"\r\n            >\r\n            <invalid-form-control [show]=\"onFieldInvalid('endereco')\" message=\"Endereço é obrigatório.\"></invalid-form-control>\r\n            </div>\r\n\r\n            <!-- <div class=\"form-group col-lg-2\">\r\n              <label for=\"nrEndereco\">Número</label>\r\n              <input\r\n                  class=\"form-control\"\r\n                  id=\"nrEndereco\"\r\n                  type=\"text\"\r\n                  formControlName=\"nrEndereco\"\r\n              >\r\n\r\n            </div> -->\r\n\r\n\r\n            <div class=\"form-group col-lg-5\">\r\n              <label for=\"nomeBairro\">Bairro</label>\r\n              <input\r\n                class=\"form-control\"\r\n                id=\"nomeBairro\"\r\n                type=\"text\"\r\n                formControlName=\"nomeBairro\"\r\n                (input)=\"onInput()\"\r\n                [ngClass]=\"onFieldError('nomeBairro') + ' ' + onFieldRequired('nomeBairro')\"\r\n            >\r\n            <invalid-form-control [show]=\"onFieldInvalid('nomeBairro')\" message=\"Bairro é obrigatório.\"></invalid-form-control>\r\n            </div>\r\n\r\n            <!-- <div class=\"form-group col-lg-4\">\r\n              <label for=\"complemento\">Complemento</label>\r\n              <input\r\n                class=\"form-control\"\r\n                id=\"complemento\"\r\n                type=\"text\"\r\n                formControlName=\"complemento\"\r\n            >\r\n            </div> -->\r\n\r\n            <div class=\"form-group col-lg-5\">\r\n              <label for=\"nomeCidade\">Cidade</label>\r\n              <input\r\n                class=\"form-control\"\r\n                id=\"nomeCidade\"\r\n                type=\"text\"\r\n                formControlName=\"nomeCidade\"\r\n                (input)=\"onInput()\"\r\n                [ngClass]=\"onFieldError('nomeCidade') + ' ' + onFieldRequired('nomeCidade')\"\r\n            >\r\n            <invalid-form-control [show]=\"onFieldInvalid('nomeCidade')\" message=\"Cidade é obrigatório.\"></invalid-form-control>\r\n            </div>\r\n\r\n            <div class=\"form-group col-lg-2\">\r\n              <label for=\"uf\">UF</label>\r\n              <select\r\n                class=\"form-control\"\r\n                id=\"uf\"\r\n                formControlName=\"uf\"\r\n                (change)=\"onInput()\"\r\n                [ngClass]=\"onFieldError('uf') + ' ' + onFieldRequired('uf')\">\r\n                <option value=\"\">SELECIONE UMA OPÇÃO</option>\r\n                <option *ngFor=\"let item of estados\" [value]=\"item.sigla\">{{ item.sigla }}</option>\r\n              </select>\r\n            <invalid-form-control [show]=\"onFieldInvalid('uf')\" message=\"Uf é obrigatório.\"></invalid-form-control>\r\n            </div>\r\n\r\n\r\n            <div class=\"form-group col-lg-6\">\r\n              <label for=\"cpf\">cpf</label>\r\n              <input\r\n                class=\"form-control\"\r\n                id=\"cpf\"\r\n                type=\"text\"\r\n                formControlName=\"cpf\"\r\n                [ngClass]=\"onFieldError('cpf') + ' ' + onFieldRequired('cpf')\"\r\n                cpf [textMask]=\"{ mask: MASKS.cpf.textMask }\">\r\n            <invalid-form-control [show]=\"onFieldInvalid('cpf')\" message=\"CPF é obrigatório.\"></invalid-form-control>\r\n            </div>\r\n\r\n            <div class=\"form-group col-lg-6\">\r\n              <label for=\"rg\">Rg</label>\r\n              <input\r\n                  class=\"form-control\"\r\n                  id=\"rg\"\r\n                  type=\"text\"\r\n                  formControlName=\"rg\"\r\n            >\r\n            <invalid-form-control [show]=\"onFieldInvalid('rg')\" message=\"RG é obrigatório.\"></invalid-form-control>\r\n            </div>\r\n\r\n            <div class=\"form-group col-lg-12\">\r\n              <label for=\"email\">E-mail</label>\r\n              <input\r\n                  class=\"form-control\"\r\n                  id=\"email\"\r\n                  type=\"text\"\r\n                  formControlName=\"email\"\r\n            >\r\n            <invalid-form-control [show]=\"onFieldInvalid('email')\" message=\"E-mail é obrigatório.\"></invalid-form-control>\r\n            </div>\r\n\r\n\r\n          <div class=\"form-group col-lg-3\">\r\n            <label for=\"telefone\">Telefone</label>\r\n            <input\r\n                class=\"form-control\"\r\n                id=\"telefone\"\r\n                type=\"text\"\r\n                formControlName=\"telefone\"\r\n                telefone [textMask]=\"{ mask: MASKS.telefone.textMaskFunction }\">\r\n          <invalid-form-control [show]=\"onFieldInvalid('telefone')\" message=\"Telefone é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n\r\n          <div class=\"form-group col-lg-3\">\r\n            <label for=\"celular\">Celular</label>\r\n            <input\r\n                class=\"form-control\"\r\n                id=\"celular\"\r\n                type=\"text\"\r\n                formControlName=\"celular\"\r\n                telefone [textMask]=\"{ mask: MASKS.telefone.textMaskFunction }\">\r\n          <invalid-form-control [show]=\"onFieldInvalid('celular')\" message=\"Celular é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n\r\n\r\n\r\n          <div class=\"form-group col-lg-3\">\r\n          <label for=\"dataInicialContrato\">Data Início</label>\r\n          <input\r\n                class=\"form-control\"\r\n                id=\"dataInicialContrato\"\r\n                type=\"text\"\r\n                bsDatepicker\r\n                formControlName=\"dataInicialContrato\"\r\n                [ngClass]=\"onFieldError('dataInicialContrato') + ' ' + onFieldRequired('dataInicialContrato')\"\r\n          >\r\n          <invalid-form-control [show]=\"onFieldInvalid('dataInicialContrato')\" message=\"Data Inicial é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n\r\n          <div class=\"form-group col-lg-3\">\r\n          <label for=\"dataFinalContrato\">Data Final</label>\r\n          <input\r\n                class=\"form-control\"\r\n                id=\"dataFinalContrato\"\r\n                type=\"text\"\r\n                bsDatepicker\r\n                formControlName=\"dataFinalContrato\"\r\n                [ngClass]=\"onFieldError('dataFinalContrato') + ' ' + onFieldRequired('dataFinalContrato')\"\r\n          >\r\n          <invalid-form-control [show]=\"onFieldInvalid('dataFinalContrato')\" message=\"Data Vigência é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n\r\n          <!-- <div class=\"form-group col-lg-4\">\r\n          <label for=\"dataRenovacaoContrato\">Data Renovação</label>\r\n          <input\r\n                class=\"form-control\"\r\n                id=\"dataRenovacaoContrato\"\r\n                type=\"text\"\r\n                bsDatepicker\r\n                formControlName=\"dataRenovacaoContrato\"\r\n          >\r\n          <invalid-form-control [show]=\"onFieldInvalid('dataRenovacaoContrato')\" message=\"Data Renovação é obrigatório.\"></invalid-form-control>\r\n          </div> -->\r\n\r\n          <!-- ####################################################################################### -->\r\n          <div class=\"col-lg-12\" formArrayName=\"anexos\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-12 d-flex align-items-start\">\r\n                <div class=\"mtc-title mb-0\">Anexos</div>\r\n              </div>\r\n              <!-- Se não puder permitir mais de um anexo, adicione [hidden]=\"form.value.anexos.length > 0\"  -->\r\n              <div class=\"col\">\r\n                <label\r\n                  for=\"novoAnexo\"\r\n                  class=\"d-flex justify-content-start align-items-center\"\r\n                  style=\"cursor: pointer\">\r\n                  <p class=\"btn btn-sm btn-outline-primary m-0\">\r\n                    <i class=\"fas fa-plus\"></i>\r\n                    <span>Anexo</span>\r\n                  </p>\r\n                </label>\r\n                <input\r\n                  id=\"novoAnexo\"\r\n                  type=\"file\"\r\n                  (change)=\"appendFile($event.target.files)\"\r\n                  class=\"d-none\"\r\n                />\r\n              </div>\r\n            </div>\r\n            <div class=\"row\" *ngIf=\"showAnexos && form.value.anexos.length > 0\">\r\n              <div class=\"col\">\r\n                <custom-table [config]=\"tableConfigAnexos\">\r\n                  <ng-template #tbody let-tbody>\r\n                    <tr\r\n                      *ngFor=\"let anexo of anexos.controls; let i = index\"\r\n                      [formGroupName]=\"i\"\r\n                    >\r\n                      <td style=\"width: 90%\">\r\n                        {{ form.value.anexos[i].codAnexo }} -\r\n                        {{ form.value.anexos[i].nomeAnexo | uppercase }}\r\n                      </td>\r\n                      <td class=\"text-center\" style=\"width: 5%\">\r\n                        <a\r\n                          (click)=\"navegarAnexo(anexo)\"\r\n                          *ngIf=\"form.value.anexos[i].codAnexo != null\"\r\n                          target=\"_blank\"\r\n                          class=\"btn-icon-sm mx-2 text-black\"\r\n                          tooltip=\"visualizar\"\r\n                        >\r\n                          <i class=\"far fa-eye\"></i>\r\n                        </a>\r\n                      </td>\r\n                      <td class=\"text-center\" style=\"width: 5%\">\r\n                        <btn-icon\r\n                          icon=\"fas fa-trash\"\r\n                          size=\"small\"\r\n                          tooltip=\"Excluir\"\r\n                          (click)=\"\r\n                            onDeleteAnexo(form.value.anexos[i].codAnexo, i)\r\n                          \"\r\n\r\n                        >\r\n                        <!-- [hidden]=\"visualizar\" -->\r\n                        </btn-icon>\r\n                      </td>\r\n                    </tr>\r\n                  </ng-template>\r\n                </custom-table>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\" *ngIf=\"showAnexos && form.value.anexos.length === 0\">\r\n              <div class=\"col\">\r\n                <message\r\n                  icon=\"fas fa-exchange-alt\"\r\n                  text=\"Nenhum documento encontrado\"\r\n                >\r\n                </message>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n    <!-- ####################################################################################### -->\r\n\r\n\r\n      </div>\r\n\r\n          <hr>\r\n          <div class=\"row ml-5 mr-5\">\r\n          <div class=\"mtc-title mb-3 mt-2 ml-3 col-lg-12\">Dados da Empresa de Representação</div>\r\n\r\n          <div class=\"form-group col-lg-12\">\r\n            <label for=\"nomeFantasiaRepresentacao\">Nome Fantasia</label>\r\n            <input\r\n                class=\"form-control\"\r\n                id=\"nomeFantasiaRepresentacao\"\r\n                type=\"text\"\r\n                formControlName=\"nomeFantasiaRepresentacao\"\r\n\r\n          >\r\n          <!-- [ngClass]=\"onFieldError('nomeFantasiaRepresentacao') + ' ' + onFieldRequired('nomeFantasiaRepresentacao')\"\r\n          <invalid-form-control [show]=\"onFieldInvalid('nomeFantasiaRepresentacao')\" message=\"Nome Fantasia é obrigatório.\"></invalid-form-control> -->\r\n          </div>\r\n\r\n          <div class=\"form-group col-lg-12\">\r\n            <label for=\"razaoSocialRepresentacao\">Razão Social</label>\r\n            <input\r\n                class=\"form-control\"\r\n                id=\"razaoSocialRepresentacao\"\r\n                type=\"text\"\r\n                formControlName=\"razaoSocialRepresentacao\"\r\n\r\n          >\r\n          <!-- [ngClass]=\"onFieldError('razaoSocialRepresentacao') + ' ' + onFieldRequired('razaoSocialRepresentacao')\"\r\n          <invalid-form-control [show]=\"onFieldInvalid('razaoSocialRepresentacao')\" message=\"Razão Social é obrigatório.\"></invalid-form-control> -->\r\n          </div>\r\n\r\n          <div class=\"form-group col-lg-6\">\r\n            <label for=\"cnpjEmpresaRepresentacao\">CNPJ</label>\r\n            <input\r\n                class=\"form-control\"\r\n                id=\"cnpjEmpresaRepresentacao\"\r\n                type=\"text\"\r\n                formControlName=\"cnpjEmpresaRepresentacao\"\r\n                cnpj [textMask]=\"{ mask: MASKS.cnpj.textMask }\">\r\n                <!-- [ngClass]=\"onFieldError('cnpjEmpresaRepresentacao') + ' ' + onFieldRequired('cnpjEmpresaRepresentacao')\"\r\n          <invalid-form-control [show]=\"onFieldInvalid('cnpjEmpresaRepresentacao')\" message=\"CNPJ é obrigatório.\"></invalid-form-control> -->\r\n          </div>\r\n\r\n          <div class=\"form-group col-lg-3\">\r\n            <label for=\"ieEmpresaRepresentacao\">Inscrição Estadual</label>\r\n            <input\r\n                class=\"form-control\"\r\n                id=\"ieEmpresaRepresentacao\"\r\n                type=\"text\"\r\n                formControlName=\"ieEmpresaRepresentacao\"\r\n          >\r\n          <invalid-form-control [show]=\"onFieldInvalid('ieEmpresaRepresentacao')\" message=\"Inscrição Estadual é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n\r\n          <div class=\"form-group col-lg-3\">\r\n            <label for=\"imEmpresaRepresentacao\">Inscrição Municipal</label>\r\n            <input\r\n                class=\"form-control\"\r\n                id=\"imEmpresaRepresentacao\"\r\n                type=\"text\"\r\n                formControlName=\"imEmpresaRepresentacao\"\r\n          >\r\n          <invalid-form-control [show]=\"onFieldInvalid('imEmpresaRepresentacao')\" message=\"Inscrição Municipal é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n\r\n        <div class=\"form-group col-lg-6\"></div>\r\n        </div>\r\n\r\n        <hr>\r\n        <div class=\"row ml-5 mr-5\">\r\n        <div class=\"mtc-title mb-3 mt-2 ml-3 col-lg-12\">Dados Bancários</div><br>\r\n\r\n\r\n        <div class=\"form-group col-lg-9\">\r\n        <label for=\"nomeTitularConta\">Titular</label>\r\n        <input\r\n                class=\"form-control\"\r\n                id=\"nomeTitularConta\"\r\n                type=\"text\"\r\n                formControlName=\"nomeTitularConta\"\r\n          >\r\n        <invalid-form-control [show]=\"onFieldInvalid('nomeTitularConta')\" message=\"Titular é obrigatório.\"></invalid-form-control>\r\n        </div>\r\n\r\n        <div class=\"form-group col-lg-3\">\r\n        <label for=\"tipoConta\">Tipo</label>\r\n        <select\r\n          class=\"form-control custom-select\"\r\n          id=\"tipoConta\"\r\n          placeholder=\"Selecione...\"\r\n          formControlName=\"tipoConta\">\r\n          <option value=\"F\">Física</option>\r\n          <option value=\"J\">Jurídica</option>\r\n        </select>\r\n        </div>\r\n\r\n        <div class=\"form-group col-lg-6\">\r\n          <label for=\"nomeBanco\">Banco</label>\r\n\r\n          <ng-select\r\n            type='text'\r\n            [searchable]=\"true\"\r\n            [clearable]=\"false\"\r\n            [items]=\"bancos\"\r\n            [virtualScroll]=\"true\"\r\n            [hideSelected]=\"true\"\r\n            [closeOnSelect]=\"true\"\r\n            placeholder=\"Selecione...\"\r\n            bindLabel=\"nomeBanco\"\r\n            bindValue=\"idBanco\"\r\n            formControlName=\"nomeBanco\"\r\n            [ngClass]=\"onFieldError('nomeBanco') + ' ' + onFieldRequired('nomeBanco')\">\r\n        <invalid-form-control [show]=\"onFieldInvalid('nomeBanco')\" message=\"Banco é obrigatório.\"></invalid-form-control>\r\n        </ng-select>\r\n        </div>\r\n\r\n        <div class=\"form-group col-lg-3\">\r\n          <label for=\"agencia\">Agência</label>\r\n          <input\r\n              class=\"form-control\"\r\n              id=\"agencia\"\r\n              type=\"text\"\r\n              formControlName=\"agencia\"\r\n        >\r\n        <invalid-form-control [show]=\"onFieldInvalid('agencia')\" message=\"Agência é obrigatório.\"></invalid-form-control>\r\n        </div>\r\n\r\n        <div class=\"form-group col-lg-3\">\r\n          <label for=\"contaCorrente\">Conta Corrente</label>\r\n          <input\r\n              class=\"form-control\"\r\n              id=\"contaCorrente\"\r\n              type=\"text\"\r\n              formControlName=\"contaCorrente\"\r\n        >\r\n        <invalid-form-control [show]=\"onFieldInvalid('contaCorrente')\" message=\"Conta Corrente é obrigatório.\"></invalid-form-control>\r\n        </div>\r\n    </div>\r\n      <hr>\r\n\r\n\r\n\r\n\r\n  </form>\r\n\r\n  <ng-template #tiposComissao>\r\n\r\n    <div class=\"modal-header\">\r\n      <div class=\"mtc-title\">Faixa de percentual</div>\r\n      <button type=\"button\" class=\"close pull-right\" (click)=\"closeModal(tiposComissao);\" aria-label=\"Close\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n\r\n    <div class=\"modal-body\">\r\n\r\n      <div class=\"row mb-3\">\r\n        <div class=\"col-1\"></div>\r\n\r\n        <div class=\"mtc-title\"*ngIf=\"tipoComissaoModal.length > 0\">{{ tipoComissaoModal[0].dsTipoComissionamento }}</div>\r\n        <div class=\"col-12 mb-4\" *ngFor=\"let dados of tipoComissaoModal\">\r\n          <custom-table *ngIf=\"tipoComissaoModal.length > 0\">\r\n            <ng-template #thead let-thead  >\r\n              <tr>\r\n                <th scope=\"col\" class=\"border text-center\" style=\"width: 50%\">Linha</th>\r\n                <th scope=\"col\" class=\"border text-center\" style=\"width: 50%\">Classe</th>\r\n              </tr>\r\n            </ng-template>\r\n            <ng-template #tbody let-tbody>\r\n              <tr>\r\n                <td class=\"text-center\">{{ dados.nomeLinha }}</td>\r\n                <td class=\"text-center\" *ngIf=\"dados.codClasse === 0\" >TODOS</td>\r\n                <td class=\"text-center\" *ngIf=\"dados.codClasse != 0\">{{ dados.nomeClasse }}</td>\r\n              </tr>\r\n            </ng-template>\r\n          </custom-table>\r\n\r\n        <custom-table *ngIf=\"tipoComissaoModal.length > 0\" [config]=\"tableConfigDetail\">\r\n          <!-- *ngIf=\"dados.length > 0\" -->\r\n          <ng-template #thead let-thead  >\r\n            <tr>\r\n              <th scope=\"col\" class=\"border text-center\" style=\"width: 55%\">Percentual de desconto da tabela de vendas de materiais (%) </th>\r\n              <th scope=\"col\" class=\"border text-center\" style=\"width: 45%\">Percentual a ser pago de comissão sobre o título (%) </th>\r\n            </tr>\r\n          </ng-template>\r\n          <ng-template #tbody let-tbody>\r\n            <tr *ngFor=\"let item of dados.percentual\">\r\n              <td class=\"text-center\">{{ item.percDescontoDe }} a {{ item.percDescontoAte }} %</td>\r\n              <td class=\"text-center\">{{ item.percPago }} %</td>\r\n            </tr>\r\n          </ng-template>\r\n        </custom-table>\r\n      </div>\r\n\r\n        <div class=\"col-1\"></div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n  </ng-template>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n<ng-template #detalhes>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">Escolha o endereço a ser utilizado</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"onModalClose()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <form [formGroup]=\"formEnderecos\" (ngSubmit)=\"setValueEndereco()\" autocomplete=\"off\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-12\" *ngFor=\"let endereco of enderecosOp; let i = index\">\r\n          <div class=\"custom-control custom-radio\">\r\n            <input [id]=\"i\" class=\"custom-control-input\" formControlName=\"enderecosRetorno\" type=\"radio\" [value]=\"endereco\"/>\r\n            <label class=\"custom-control-label\" [for]=\"i\">{{endereco.logradouro}}, {{endereco.unidade}} - {{endereco.bairro}}, {{endereco.localidade}} - {{endereco.uf}}, {{endereco.cep}}</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-12 d-flex justify-content-center\">\r\n          <button class=\"btn btn-primary\">Selecionar</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</ng-template>\r\n</app-body>\r\n");

/***/ }),

/***/ "XFRH":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/comissoes/representantes/programacao-pagamentos/lista/lista.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: ComercialComissoesRepresentantesProgramacaoPagamentosListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialComissoesRepresentantesProgramacaoPagamentosListaComponent", function() { return ComercialComissoesRepresentantesProgramacaoPagamentosListaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lista.component.html */ "HE1/");
/* harmony import */ var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lista.component.scss */ "DI74");
/* harmony import */ var _gestao_comissionamentos_gestao_comissionamentos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../gestao-comissionamentos/gestao-comissionamentos.service */ "dRIe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/chronos */ "xj/R");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/locale */ "0b5p");
/* harmony import */ var _shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../../../../../shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../../../../../../shared/modules/confirm-modal/confirm-modal.service */ "FOez");
/* harmony import */ var _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../../../../../../shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _programacao_pagamentos_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./../programacao-pagamentos.service */ "jYq1");
/* harmony import */ var _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./../../../../../../shared/templates/detail-panel/detal-panel.service */ "gIxL");
/* harmony import */ var _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./../../../../../../shared/services/core/date.service */ "Rk3r");
/* harmony import */ var _cadastros_escritorios_escritorios_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./../../../../cadastros/escritorios/escritorios.service */ "CU0E");
/* harmony import */ var _comercial_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./../../../../comercial.service */ "VgqD");








// ngx-bootstrap




Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_8__["defineLocale"])('pt-br', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_11__["ptBrLocale"]);
// Services








let ComercialComissoesRepresentantesProgramacaoPagamentosListaComponent = class ComercialComissoesRepresentantesProgramacaoPagamentosListaComponent {
    constructor(formBuilder, activateRoute, localeService, dateService, router, detailPanelService, pnotifyService, programacaoPagamentosService, atividadesService, bsModalService, confirmModalService, modalService, comercialService, escritoriosService, gestaoComissionamentosService) {
        this.formBuilder = formBuilder;
        this.activateRoute = activateRoute;
        this.localeService = localeService;
        this.dateService = dateService;
        this.router = router;
        this.detailPanelService = detailPanelService;
        this.pnotifyService = pnotifyService;
        this.programacaoPagamentosService = programacaoPagamentosService;
        this.atividadesService = atividadesService;
        this.bsModalService = bsModalService;
        this.confirmModalService = confirmModalService;
        this.modalService = modalService;
        this.comercialService = comercialService;
        this.escritoriosService = escritoriosService;
        this.gestaoComissionamentosService = gestaoComissionamentosService;
        this.loaderNavbar = false;
        this.loaderFullScreen = true;
        this.subtitles = [
            {
                id: 1,
                text: 'Aguardando Programação de Pagamento',
                color: 'gray',
            },
            {
                id: 0,
                text: 'Aguardando Pagamento',
                color: 'blue',
            },
            {
                id: 2,
                text: 'Pagamento Realizado',
                color: 'green',
            },
        ];
        this.showDetailPanel = false;
        this.dados = [];
        this.representantes = [];
        this.representantesDetail = [];
        this.representanteSelecionado = [];
        this.escritorios = [];
        this.situacao = [];
        this.dadosLoaded = false;
        this.dadosEmpty = false;
        this.programado = false;
        this.bsValue = new Date();
        this.maxDate = new Date();
        this.minDate = new Date();
        this.tableConfig = {
            subtitleBorder: true,
        };
        this.tableConfigMateriais = {
            hover: false,
        };
        this.maxSize = 10;
        this.itemsPerPage = 300;
        this.currentPage = 1;
        this.totalItems = 0;
        this.localeService.use('pt-br');
    }
    ngOnInit() {
        this.setFormFilter();
        // this.getRegistros();
        this.setBreadCrumb();
        this.registrarAcesso();
        this.onDetailPanelEmitter();
        this.getEscritorios();
        this.getSituacao();
        this.getRepresentantes();
    }
    setBreadCrumb() {
        this.activateRoute.params.subscribe((params) => {
            this.breadCrumbTree = [
                {
                    descricao: 'Home',
                    routerLink: '/comercial/',
                },
                {
                    descricao: 'Comissões',
                    routerLink: `/comercial/comissoes/${params['idSubModulo']}`,
                },
                {
                    descricao: 'Representantes',
                    routerLink: `/comercial/comissoes/${params['idSubModulo']}/representantes`,
                },
            ];
        });
    }
    // form
    setFormFilter() {
        const formValue = this.checkRouterParams();
        this.form = this.formBuilder.group({
            // dtInicioVigencia: [this.dateService.getFirstDayMonth()],
            // dtFimVigencia: [this.dateService.getLastDayMonth()],
            // codEscritorio: [formValue.codEscritorio],
            codRepresentante: [formValue.codRepresentante],
            codStatus: [formValue.codStatus],
            registros: [formValue.registros],
        });
        // this.checkOrder();
    }
    // formDate
    setFormDate(item) {
        this.nomeRepresentante = item.nomeRepresentante;
        this.codigo = item.codRepresentante;
        this.formDate = this.formBuilder.group({
            codComissaoRepresentante: [item.codComissaoRepresentante],
            dataProgramacao: '',
            dataPagamento: new Date(),
        });
    }
    onSubmitProgramacao() {
        if (this.formDate.valid) {
            // validação salvar
        }
        this.programacaoPagamentosService
            .postProgramacaoPagamento(this.formDate.getRawValue())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.loaderNavbar = false;
            this.nomeRepresentante = '';
        }))
            .subscribe((response) => {
            if (response.hasOwnProperty('success') && response.success === true) {
                this.onFilter();
                this.pnotifyService.success();
            }
        });
    }
    onSubmitPagamento(item) {
        this.confirmModalService
            .showConfirm(null, 'Baixa de Pagamento', `Você está prestes a dar baixa no pagamento do representante ${item.nomeRepresentante}. Deseja continuar mesmo assim?`, 'Cancelar', 'Confirmar')
            .subscribe((response) => response ? this.onPostPagamento() : null);
    }
    onPostPagamento() {
        this.programacaoPagamentosService
            .postPagamento(this.formDate.getRawValue())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.loaderNavbar = false;
        }))
            .subscribe((response) => {
            if (response.success === true) {
                this.pnotifyService.success('Baixa efetuada com sucesso');
                this.onFilter();
            }
            else {
                this.pnotifyService.error(response.mensagem);
            }
        });
    }
    registrarAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
    }
    navigateCadastroRepresentantes(item) {
        // ${item.codRepresentante}
        this.router.navigate([`/comercial/cadastros/99/representantes/editar/839`], {
            relativeTo: this.activateRoute
        });
    }
    classStatusBorder(item) {
        let borderClass;
        if (item.codSituacao === 7) {
            borderClass = 'border-secondary';
        }
        else if (item.codSituacao === 8) {
            borderClass = 'border-primary';
        }
        else if (item.codSituacao === 9) {
            borderClass = 'border-success';
        }
        return borderClass;
    }
    checkRouterParams() {
        let formValue = {
            codRepresentante: 0,
            // dtInicioVigencia: [this.dateService.getFirstDayMonth()],
            // dtFimVigencia: [this.dateService.getLastDayMonth()],
            // codEscritorio: 0,
            codStatus: 0,
            registros: this.itemsPerPage,
        };
        this.activatedRouteSubscription = this.activateRoute.queryParams.subscribe((queryParams) => {
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
    getEscritorios() {
        this.escritoriosService
            .getListaEscritorios({ tipo: 'faturamento' })
            .subscribe({
            next: (response) => {
                if (response.success === true) {
                    this.escritorios = response.data;
                    this.escritorios.unshift({
                        codEscritorio: 0,
                        nomeEscritorio: 'EXIBIR TODOS',
                    });
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
    getRepresentantes() {
        this.gestaoComissionamentosService
            .getRepresentantes(0)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.loaderFullScreen = false;
        }))
            .subscribe({
            next: (response) => {
                if (response.success === true) {
                    this.representantes = response.data;
                    this.representantes.unshift({
                        codRepresentante: 0,
                        nomeRepresentante: 'EXIBIR TODOS',
                    });
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
    getSituacao() {
        this.programacaoPagamentosService.getSituacao().subscribe((response) => {
            if (response.success === true) {
                this.situacao = response.data;
                this.situacao.unshift({
                    codSituacao: 0,
                    nomeSituacao: 'EXIBIR TODOS',
                });
            }
            else {
                this.pnotifyService.error();
            }
        }, (error) => {
            this.pnotifyService.error();
        });
    }
    closeModal(modalRef) {
        this.modalRef.hide();
    }
    // Pesquisa
    onFilter() {
        if (this.form.valid) {
            this.itemsPerPage = this.form.value.registros;
            this.currentPage = 1;
            this.setRouterParams(this.getParams());
        }
    }
    search(params) {
        this.loaderNavbar = true;
        this.detailPanelService.hide();
        this.dados = [];
        this.dadosLoaded = false;
        this.dadosEmpty = false;
        this.programacaoPagamentosService
            .getListaProgramacao(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.loaderNavbar = false;
            this.dadosLoaded = true;
        }))
            .subscribe({
            next: (response) => {
                if (response.hasOwnProperty('success') && response.success === true) {
                    this.dados = response.data;
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
    // Verifica Parâmetros
    setRouterParams(params) {
        this.router.navigate([], {
            relativeTo: this.activateRoute,
            queryParams: { q: btoa(JSON.stringify(params)) },
        });
        this.search(params);
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
    verificaParams() {
        let params = {};
        if (this.form.value.codRepresentante) {
            params.codRepresentante = this.form.value.codRepresentante;
        }
        if (this.form.value.dtInicioVigencia) {
            params.dtInicioVigencia = this.form.value.dtInicioVigencia;
        }
        if (this.form.value.dtFimVigencia) {
            params.dtFimVigencia = this.form.value.dtFimVigencia;
        }
        if (this.form.value.codStatus) {
            params.codStatus = this.form.value.codStatus;
        }
        params.pagina = this.form.value.pagina;
        params.registros = this.form.value.registros;
        params.orderBy = this.form.value.orderBy;
        params.orderType = this.form.value.orderType;
        return params;
    }
    //Detail Panel
    onDetails(item) {
        this.detailPanelService.show();
        this.detailPanelTitle = `Dados Bancários`;
        this.setDadosBancarios();
        this.grupoSelecionado = item;
        this.representantesDetail = [];
        this.loaderNavbar = true;
        this.codigo = item.codRepresentante;
        this.programacaoPagamentosService
            .getAssociacoesDetails(item.codRepresentanteTid)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            setTimeout(() => {
                this.loaderNavbar = false;
                this.detailPanelService.loadedFinished(false);
            }, 500);
        }))
            .subscribe({
            next: (response) => {
                if (response.hasOwnProperty('success') && response.success === true) {
                    this.representantesDetail = response.data;
                    // this.totalItems = this.dados[0]['total'];
                }
                else {
                    this.pnotifyService.error();
                }
            },
            error: (error) => {
                if (error.error.hasOwnProperty('mensagem')) {
                    this.pnotifyService.error(error.error.mensagem);
                }
                else {
                    this.pnotifyService.error();
                }
            }
        });
    }
    setDadosBancarios() {
        this.grupoSelecionado = {
            codProgramacao: null,
            bancoRepresentante: null,
            tipoConta: null,
            agencia: null,
            titular: null,
            contaCorrente: null,
        };
    }
    onDetailPanelEmitter() {
        this.showDetailPanelSubscription = this.detailPanelService.config.subscribe((event) => {
            this.showDetailPanel = event.showing;
        });
    }
    // Get e EditarLista
    getRegistros() {
        this.loaderNavbar = true;
        this.detailPanelService.hide();
        this.dadosLoaded = false;
        this.dadosEmpty = false;
        this.programacaoPagamentosService
            .getListaProgramacao()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
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
    onEdit(item) {
        this.router.navigate(['../editar', item.codPreco], {
            relativeTo: this.activateRoute,
        });
    }
    // Outros
    onPageChanged(event) {
        if (this.form.value.pagina != event.page) {
            this.detailPanelService.hide();
            // this.setGrupoSelecionado();
            this.form.value.pagina = event.page;
            this.onFilter();
            this.scrollToFilter.nativeElement.scrollIntoView({
                behavior: 'instant',
            });
        }
    }
    refreshMainData(grupo) {
        for (let i = 0; i < this.dados.length; i++) {
            if (grupo.codRepresentantes === this.dados[i].codRepresentantes) {
                this.dados[i].codSituacao = grupo.codSituacao;
                return;
            }
        }
    }
    //modal
    openModal(template, index) {
        this.modalRef = this.bsModalService.show(template, index);
    }
    // Tratamento de erros
    onFieldError(field) {
        if (this.onFieldInvalid(field)) {
            return 'is-invalid';
        }
        return '';
    }
    onFieldInvalid(field) {
        field = this.form.get(field);
        if (field.errors != null) {
            if (field.errors.hasOwnProperty('required') && field.touched) {
                return 'required';
            }
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
};
ComercialComissoesRepresentantesProgramacaoPagamentosListaComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__["BsLocaleService"] },
    { type: _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_17__["DateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_16__["DetailPanelService"] },
    { type: _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_14__["PNotifyService"] },
    { type: _programacao_pagamentos_service__WEBPACK_IMPORTED_MODULE_15__["ComercialComissoesRepresentantesProgramacaoPagamentosService"] },
    { type: _shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_12__["AtividadesService"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__["BsModalService"] },
    { type: _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_13__["ConfirmModalService"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__["BsModalService"] },
    { type: _comercial_service__WEBPACK_IMPORTED_MODULE_19__["ComercialService"] },
    { type: _cadastros_escritorios_escritorios_service__WEBPACK_IMPORTED_MODULE_18__["ComercialCadastrosEscritorioService"] },
    { type: _gestao_comissionamentos_gestao_comissionamentos_service__WEBPACK_IMPORTED_MODULE_3__["ComercialComissoesGestaoComissionamentosService"] }
];
ComercialComissoesRepresentantesProgramacaoPagamentosListaComponent.propDecorators = {
    scrollToFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['scrollToFilter', {},] }]
};
ComercialComissoesRepresentantesProgramacaoPagamentosListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'comercial-representantes-programacao-pagamentos-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__["BsLocaleService"],
        _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_17__["DateService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_16__["DetailPanelService"],
        _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_14__["PNotifyService"],
        _programacao_pagamentos_service__WEBPACK_IMPORTED_MODULE_15__["ComercialComissoesRepresentantesProgramacaoPagamentosService"],
        _shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_12__["AtividadesService"],
        ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__["BsModalService"],
        _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_13__["ConfirmModalService"],
        ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__["BsModalService"],
        _comercial_service__WEBPACK_IMPORTED_MODULE_19__["ComercialService"],
        _cadastros_escritorios_escritorios_service__WEBPACK_IMPORTED_MODULE_18__["ComercialCadastrosEscritorioService"],
        _gestao_comissionamentos_gestao_comissionamentos_service__WEBPACK_IMPORTED_MODULE_3__["ComercialComissoesGestaoComissionamentosService"]])
], ComercialComissoesRepresentantesProgramacaoPagamentosListaComponent);



/***/ }),

/***/ "gZaf":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/comercial/comissoes/representantes/representantes-routing.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: ComercialComissoesRepresentantesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialComissoesRepresentantesRoutingModule", function() { return ComercialComissoesRepresentantesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _representantes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./representantes.component */ "i16Q");



// Guards
// import { FormDeactivateGuard } from 'src/app/guards/form-deactivate.guard';
// Components

const routes = [
    {
        path: '',
        component: _representantes_component__WEBPACK_IMPORTED_MODULE_3__["ComercialComissoesRepresentantesComponent"],
    },
    {
        path: '',
        children: [
            {
                path: 'programacao-pagamentos',
                loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./programacao-pagamentos/programacao-pagamentos.module */ "IsD0")).then((m) => m.ComercialComissoesRepresentantesProgramacaoPagamentosModule),
            },
        ],
    },
    {
        path: '',
        children: [
            {
                path: 'gestao-comissionamentos',
                loadChildren: () => Promise.all(/*! import() | gestao-comissionamentos-gestao-comissionamentos-module */[__webpack_require__.e("default~gestao-comissionamentos-gestao-comissionamentos-module~vendedores-internos-vendedores-internos-module"), __webpack_require__.e("common"), __webpack_require__.e("gestao-comissionamentos-gestao-comissionamentos-module")]).then(__webpack_require__.bind(null, /*! ./gestao-comissionamentos/gestao-comissionamentos.module */ "GR5m")).then((m) => m.ComercialComissoesRepresentantesGestaoComissionamentosModule),
            },
        ],
    },
];
let ComercialComissoesRepresentantesRoutingModule = class ComercialComissoesRepresentantesRoutingModule {
};
ComercialComissoesRepresentantesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ComercialComissoesRepresentantesRoutingModule);



/***/ }),

/***/ "giuP":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/representantes/lista/lista.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ComercialCadastrosRepresentantesListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCadastrosRepresentantesListaComponent", function() { return ComercialCadastrosRepresentantesListaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lista.component.html */ "FD2y");
/* harmony import */ var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lista.component.scss */ "oaY5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/chronos */ "xj/R");
/* harmony import */ var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/locale */ "0b5p");
/* harmony import */ var _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../../../../shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../../../../shared/modules/confirm-modal/confirm-modal.service */ "FOez");
/* harmony import */ var _shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../../../../../shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../../../../../shared/templates/detail-panel/detal-panel.service */ "gIxL");
/* harmony import */ var _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./../../../../../shared/services/core/date.service */ "Rk3r");
/* harmony import */ var _representantes_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./../representantes.service */ "T6IP");








// ngx-bootstrap



Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_9__["defineLocale"])('pt-br', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_10__["ptBrLocale"]);
// Services






let ComercialCadastrosRepresentantesListaComponent = class ComercialCadastrosRepresentantesListaComponent {
    constructor(formBuilder, activateRoute, localeService, dateService, router, detailPanelService, pnotifyService, cadastroRepresentantesService, confirmModalService, atividadesService) {
        this.formBuilder = formBuilder;
        this.activateRoute = activateRoute;
        this.localeService = localeService;
        this.dateService = dateService;
        this.router = router;
        this.detailPanelService = detailPanelService;
        this.pnotifyService = pnotifyService;
        this.cadastroRepresentantesService = cadastroRepresentantesService;
        this.confirmModalService = confirmModalService;
        this.atividadesService = atividadesService;
        this.loaderNavbar = false;
        this.loaderFullScreen = true;
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: '/comercial/',
            },
            {
                descricao: 'Cadastros',
                routerLink: `/comercial/cadastros/99`,
            },
            {
                descricao: 'Representantes',
                routerLink: '/comercial/cadastros/99/representantes/lista',
            },
        ];
        this.showDetailPanel = false;
        this.dados = [];
        this.dadosPagination = [];
        this.modeloComissao = [];
        this.dadosLoaded = false;
        this.dadosEmpty = false;
        this.tableConfig = {
            subtitleBorder: true,
        };
        this.tableConfigMateriais = {
            hover: false,
        };
        this.orderBy = 'NM_VEND';
        this.orderType = 'ASC';
        this.maxSize = 10;
        this.itemsPerPage = 300;
        this.currentPage = 1;
        this.totalItems = 0;
        this.localeService.use('pt-br');
    }
    ngOnInit() {
        this.setFormFilter();
        // this.getRegistros();
        this.registrarAcesso();
        this.onDetailPanelEmitter();
    }
    // Formulário
    setFormFilter() {
        const formValue = this.checkRouterParams();
        this.form = this.formBuilder.group({
            codRepresentante: [formValue.codRepresentante],
            nome: [formValue.nome],
            codSituacao: [formValue.codSituacao],
            emiteNota: [formValue.emiteNota],
            pagina: [formValue.pagina],
            registros: [formValue.registros, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
        });
        // this.checkOrder();
    }
    registrarAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
    }
    checkRouterParams() {
        let formValue = {
            codRepresentante: null,
            nome: null,
            codSituacao: '',
            emiteNota: '',
            pagina: 1,
            registros: this.itemsPerPage,
        };
        this.activatedRouteSubscription = this.activateRoute.queryParams.subscribe((queryParams) => {
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
    // Ordem lista
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
    // Pesquisa
    onFilter() {
        if (this.form.valid) {
            this.itemsPerPage = this.form.value.registros;
            this.currentPage = 1;
            this.setRouterParams(this.getParams());
        }
    }
    search(params) {
        this.loaderNavbar = true;
        this.detailPanelService.hide();
        this.dados = [];
        this.dadosPagination = [];
        this.dadosLoaded = false;
        this.dadosEmpty = false;
        this.totalItems = 0;
        this.cadastroRepresentantesService
            .getListaRepresentantes(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.loaderNavbar = false;
            this.dadosLoaded = true;
        }))
            .subscribe({
            next: (response) => {
                if (response.hasOwnProperty('success') && response.success === true) {
                    this.dados = response.data;
                    this.dadosPagination = this.dados.slice(0, this.itemsPerPage);
                    this.totalItems = this.dados.length;
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
    // Verifica Parâmetros
    setRouterParams(params) {
        this.router.navigate([], {
            relativeTo: this.activateRoute,
            queryParams: { q: btoa(JSON.stringify(params)) },
        });
        this.search(params);
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
        _params['orderBy'] = this.orderBy;
        _params['orderType'] = this.orderType;
        return _params;
    }
    verificaParams() {
        let params = {};
        if (this.form.value.codRepresentante) {
            params.codRepresentante = this.form.value.codERP;
        }
        if (this.form.value.nome) {
            params.nome = this.form.value.nome;
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
    // Detail Panel
    onDetails(item) {
        this.detailPanelService.show();
        this.detailPanelTitle = `${item.tipoComissao}`;
        this.setDetalhesRepresentante();
        this.grupoSelecionado = item;
        this.modeloComissao = [];
        this.loaderNavbar = true;
        this.cadastroRepresentantesService
            .getTipoComissionamento()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            setTimeout(() => {
                this.loaderNavbar = false;
                this.detailPanelService.loadedFinished(false);
            }, 500);
        }))
            .subscribe({
            next: (response) => {
                if (response.hasOwnProperty('success') && response.success === true) {
                    this.modeloComissao = response.data;
                    this.totalItems = this.dados[0]['total'];
                }
                else {
                    this.pnotifyService.error();
                }
            },
            error: (error) => {
                if (error.error.hasOwnProperty('mensagem')) {
                    this.pnotifyService.error(error.error.mensagem);
                }
                else {
                    this.pnotifyService.error();
                }
            }
        });
    }
    setDetalhesRepresentante() {
        this.grupoSelecionado = {
            codVendedor: null,
            de: null,
            ate: null,
            valorComissao: null,
            valorFixo: null
        };
    }
    onDetailPanelEmitter() {
        this.showDetailPanelSubscription = this.detailPanelService.config.subscribe((event) => {
            this.showDetailPanel = event.showing;
        });
    }
    // Activate e Inactivate e borda Situação
    onActivate(index, data) {
        this.confirmActivate()
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])((result) => result ? this.activateERP(index, data) : rxjs__WEBPACK_IMPORTED_MODULE_6__["EMPTY"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.loaderNavbar = false;
        }))
            .subscribe((success) => {
            this.pnotifyService.success();
            this.refreshMainData(data);
        }, (error) => {
            this.pnotifyService.error();
            this.dadosPagination[index].codSituacao = 0;
        });
    }
    confirmActivate() {
        return this.confirmModalService.showConfirm(null, null, 'Deseja realmente prosseguir com a ativação do registro?', 'Cancelar', 'Confirmar');
    }
    activateERP(index, data) {
        this.loaderNavbar = true;
        this.dados[index].codSituacao = 1;
        return this.cadastroRepresentantesService.activateERP(data.codRepresentante);
    }
    onInactivate(index, data) {
        this.confirmInactive()
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])((result) => result ? this.inactivateERP(index, data) : rxjs__WEBPACK_IMPORTED_MODULE_6__["EMPTY"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.loaderNavbar = false;
        }))
            .subscribe((success) => {
            this.pnotifyService.success();
            this.refreshMainData(data);
        }, (error) => {
            this.pnotifyService.error();
            this.dadosPagination[index].codSituacao = 1;
        });
    }
    confirmInactive() {
        return this.confirmModalService.showConfirm('inactivate', 'Confirmar inativação', 'Deseja realmente prosseguir com a inativação do registro?', 'Cancelar', 'Confirmar');
    }
    inactivateERP(index, data) {
        this.loaderNavbar = true;
        this.dadosPagination[index].codSituacao = 0;
        return this.cadastroRepresentantesService.inactivateERP(data.codRepresentante);
    }
    classStatusBorder(data) {
        let borderClass;
        if (data.codSituacao === 2) {
            borderClass = 'border-danger';
        }
        else if (data.codSituacao === 1) {
            borderClass = 'border-success';
        }
        return borderClass;
    }
    // Get e EditarLista
    getRegistros() {
        this.loaderNavbar = true;
        this.detailPanelService.hide();
        this.dadosLoaded = false;
        this.dadosEmpty = false;
        this.cadastroRepresentantesService
            .getListaRepresentantes()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
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
    onEdit(item) {
        this.router.navigate(['../editar', item.codRepresentante], {
            relativeTo: this.activateRoute,
        });
    }
    // Outros
    onPageChanged(event) {
        const startItem = (event.page - 1) * event.itemsPerPage;
        const endItem = event.page * event.itemsPerPage;
        this.dadosPagination = this.dados.slice(startItem, endItem);
        this.scrollToFilter.nativeElement.scrollIntoView({
            behavior: 'instant'
        });
    }
    refreshMainData(data) {
        for (let i = 0; i < this.dados.length; i++) {
            if (data.codTabela === this.dados[i].codTabela) {
                this.dados[i].codSituacao = data.codSituacao;
                return;
            }
        }
    }
    // Tratamento de erros
    onFieldError(field) {
        if (this.onFieldInvalid(field)) {
            return 'is-invalid';
        }
        return '';
    }
    onFieldInvalid(field) {
        field = this.form.get(field);
        if (field.errors != null) {
            if (field.errors.hasOwnProperty('required') && field.touched) {
                return 'required';
            }
        }
        return '';
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
};
ComercialCadastrosRepresentantesListaComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsLocaleService"] },
    { type: _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_15__["DateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_14__["DetailPanelService"] },
    { type: _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"] },
    { type: _representantes_service__WEBPACK_IMPORTED_MODULE_16__["ComercialCadastrosRepresentantesService"] },
    { type: _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_12__["ConfirmModalService"] },
    { type: _shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_13__["AtividadesService"] }
];
ComercialCadastrosRepresentantesListaComponent.propDecorators = {
    scrollToFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['scrollToFilter', {},] }]
};
ComercialCadastrosRepresentantesListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-representantes-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsLocaleService"],
        _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_15__["DateService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_14__["DetailPanelService"],
        _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"],
        _representantes_service__WEBPACK_IMPORTED_MODULE_16__["ComercialCadastrosRepresentantesService"],
        _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_12__["ConfirmModalService"],
        _shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_13__["AtividadesService"]])
], ComercialCadastrosRepresentantesListaComponent);



/***/ }),

/***/ "i16Q":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/comercial/comissoes/representantes/representantes.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ComercialComissoesRepresentantesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialComissoesRepresentantesComponent", function() { return ComercialComissoesRepresentantesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_representantes_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./representantes.component.html */ "Fw+h");
/* harmony import */ var _representantes_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./representantes.component.scss */ "AJGJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");






// Services



let ComercialComissoesRepresentantesComponent = class ComercialComissoesRepresentantesComponent {
    constructor(activatedRoute, router, pnotifyService, location, atividadesService, titleService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.pnotifyService = pnotifyService;
        this.location = location;
        this.atividadesService = atividadesService;
        this.titleService = titleService;
        this.loaderNavbar = false;
        this.breadCrumbTree = [];
        this.pnotifyService.getPNotify();
    }
    ngOnInit() {
        this.registrarAcesso();
        this.setBreadCrumb();
    }
    registrarAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
    }
    setBreadCrumb() {
        this.activatedRoute.params.subscribe((params) => {
            this.appTitle = 'Representantes';
            this.titleService.setTitle(this.appTitle);
            this.breadCrumbTree = [
                {
                    descricao: 'Home',
                    routerLink: '/comercial/home',
                },
                {
                    descricao: 'Comissões',
                    routerLink: `/comercial/comissoes/${params['idSubModulo']}`,
                },
                {
                    descricao: this.appTitle,
                },
            ];
        });
    }
};
ComercialComissoesRepresentantesComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__["AtividadesService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_8__["TitleService"] }
];
ComercialComissoesRepresentantesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-comissoes-representantes',
        template: _raw_loader_representantes_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_representantes_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__["AtividadesService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_8__["TitleService"]])
], ComercialComissoesRepresentantesComponent);



/***/ }),

/***/ "jYq1":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/comissoes/representantes/programacao-pagamentos/programacao-pagamentos.service.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: ComercialComissoesRepresentantesProgramacaoPagamentosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialComissoesRepresentantesProgramacaoPagamentosService", function() { return ComercialComissoesRepresentantesProgramacaoPagamentosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let ComercialComissoesRepresentantesProgramacaoPagamentosService = class ComercialComissoesRepresentantesProgramacaoPagamentosService {
    constructor(http) {
        this.http = http;
        this.API = `https://crm360.monterrey.com.bo/api/comercial/comissoes/representantes/programacao-pagamentos`;
    }
    getListaProgramacao(params = []) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http.get(`${this.API}/lista`, { params: httpParams })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getSituacao() {
        return this.http.get(`${this.API}/situacao`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getAssociacoesDetails(codRepresentante, params) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http
            .get(`${this.API}/conta/${codRepresentante}`, { params: httpParams })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    postProgramacaoPagamento(params) {
        return this.http
            .post(`${this.API}/programacao-datas/salvar`, params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    postPagamento(params) {
        return this.http
            .post(`${this.API}/pagamento/salvar`, params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
};
ComercialComissoesRepresentantesProgramacaoPagamentosService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ComercialComissoesRepresentantesProgramacaoPagamentosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ComercialComissoesRepresentantesProgramacaoPagamentosService);



/***/ }),

/***/ "mgvm":
/*!******************************************!*\
  !*** ./src/app/shared/pipes/cpf.pipe.ts ***!
  \******************************************/
/*! exports provided: CPFPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CPFPipe", function() { return CPFPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


let CPFPipe = class CPFPipe {
    transform(value) {
        let valorFormatado = value + '';
        valorFormatado = valorFormatado
            .padStart(11, '0') // item 1
            .substr(0, 11) // item 2
            .replace(/[^0-9]/, '') // item 3
            .replace(// item 4
        /(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
        return valorFormatado;
    }
};
CPFPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'cpf' })
], CPFPipe);



/***/ }),

/***/ "oaY5":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/representantes/lista/lista.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NhZGFzdHJvcy9yZXByZXNlbnRhbnRlcy9saXN0YS9saXN0YS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "wXu9":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/comissoes/representantes/programacao-pagamentos/programacao-pagamentos-routing.module.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: ComercialComissoesRepresentantesProgramacaoPagamentosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialComissoesRepresentantesProgramacaoPagamentosRoutingModule", function() { return ComercialComissoesRepresentantesProgramacaoPagamentosRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lista/lista.component */ "XFRH");



// Guards
// Components

const routes = [
    {
        path: '',
        children: [
            { path: 'lista', component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_3__["ComercialComissoesRepresentantesProgramacaoPagamentosListaComponent"] },
            {
                path: '',
                redirectTo: 'lista',
                pathMatch: 'full',
            },
        ]
    },
];
let ComercialComissoesRepresentantesProgramacaoPagamentosRoutingModule = class ComercialComissoesRepresentantesProgramacaoPagamentosRoutingModule {
};
ComercialComissoesRepresentantesProgramacaoPagamentosRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ComercialComissoesRepresentantesProgramacaoPagamentosRoutingModule);



/***/ })

}]);
//# sourceMappingURL=representantes-representantes-module-es2015.js.map