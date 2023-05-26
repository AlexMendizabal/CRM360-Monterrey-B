(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabela-precos-tabela-precos-module"],{

/***/ "102a":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/gestao/tabela-precos/modais/clone/clone.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n  <h4>Dados da tabela</h4>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"onClose()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <message\n    *ngIf=\"loading\"\n    icon=\"fas fa-cog fa-spin\"\n    text=\"Carregando dados da tabela...\"\n  >\n  </message>\n  <div *ngIf=\"!loading\">\n    <form [formGroup]=\"form\">\n      <div class=\"form-row\">\n        <div class=\"form-group col-lg-12\">\n          <label for=\"nomePreco\">Descrição da Tabela</label>\n          <input\n            class=\"form-control\"\n            id=\"nomePreco\"\n            type=\"text\"\n            formControlName=\"nomePreco\"\n            [ngClass]=\"onFieldError('nomePreco') + ' ' + onFieldRequired('nomePreco')\">\n          <invalid-form-control [show]=\"onFieldInvalid('nomePreco')\" message=\"Descrição é obrigatório.\"></invalid-form-control>\n        </div>\n      </div>\n\n      <div class=\"form-row\">\n        <div class=\"form-group col-lg-6\">\n          <label for=\"dataInicialVigencia\">Data Inicio Vigência</label>\n          <input\n            class=\"form-control\"\n            id=\"dataInicialVigencia\"\n            type=\"text\"\n            formControlName=\"dataInicialVigencia\"\n            bsDatepicker\n            [ngClass]=\"onFieldError('dataInicialVigencia') + ' ' + onFieldRequired('dataInicialVigencia')\">\n        </div>\n        <div class=\"form-group col-lg-6\">\n          <label for=\"dataFinalVigencia\">Data Fim Vigência</label>\n          <input\n          class=\"form-control\"\n          id=\"dataFinalVigencia\"\n          type=\"text\"\n          formControlName=\"dataFinalVigencia\"\n          bsDatepicker\n          [ngClass]=\"onFieldError('dataFinalVigencia') + ' ' + onFieldRequired('dataFinalVigencia')\">\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"form-group col-6\">\n          <label for=\"percentualAcrescimo\">Percentual Acréscimo</label>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"0,00%\"\n            currencyMask\n            [options]=\"{ align: 'left', thousands: '.', decimal: ',', prefix: '', suffix: '%' }\"\n            formControlName=\"percentualAcrescimo\"\n            (ngModelChange)=\"onDesativarDesconto()\"\n          >\n        </div>\n        <div class=\"form-group col-6\">\n          <label for=\"percentualDesconto\">Percentual Desconto</label>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"0,00%\"\n            currencyMask\n            [options]=\"{ align: 'left', thousands: '.', decimal: ',', prefix: '', suffix: '%' }\"\n            formControlName=\"percentualDesconto\"\n            (ngModelChange)=\"onDesativarAcrescimo()\"\n          >\n        </div>\n      </div>\n    </form>\n    <div class=\"d-flex justify-content-between align-items-center\">\n      <div>\n        <message\n          *ngIf=\"saving\"\n          icon=\"fas fa-cog fa-spin\"\n          text=\"Criando a tabela de preço...\"\n        >\n        </message>\n      </div>\n    <button \n    class=\"btn btn-outline-dark\" \n    (click)=\"saveTabelaPrecos(getParams())\"\n    >Cadastrar\n    </button>\n\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "1QAd":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/comercial/gestao/tabela-precos/formulario/formulario.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ComercialGestaoTabelaPrecosFormularioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialGestaoTabelaPrecosFormularioComponent", function() { return ComercialGestaoTabelaPrecosFormularioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./formulario.component.html */ "qcX5");
/* harmony import */ var _formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formulario.component.scss */ "ly1K");
/* harmony import */ var _tabela_precos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../tabela-precos.service */ "aAiI");
/* harmony import */ var _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../../shared/modules/confirm-modal/confirm-modal.service */ "FOez");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_shared_services_requests_estados_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/requests/estados.service */ "H0sO");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var ng_brazil__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-brazil */ "hTrW");
/* harmony import */ var _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../../../../shared/services/core/date.service */ "Rk3r");
/* harmony import */ var _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../../../../../shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/chronos */ "xj/R");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-bootstrap/locale */ "0b5p");











// ng-brazil

// Services


// ngx-bootstrap




Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_15__["defineLocale"])('pt-br', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_17__["ptBrLocale"]);
let ComercialGestaoTabelaPrecosFormularioComponent = class ComercialGestaoTabelaPrecosFormularioComponent {
    constructor(formBuilder, activatedRoute, dateService, localeService, bsModalService, pnotifyService, confirmModalService, estadosService, location, tabelaPrecosService, router) {
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.dateService = dateService;
        this.localeService = localeService;
        this.bsModalService = bsModalService;
        this.pnotifyService = pnotifyService;
        this.confirmModalService = confirmModalService;
        this.estadosService = estadosService;
        this.location = location;
        this.tabelaPrecosService = tabelaPrecosService;
        this.router = router;
        this.MASKS = ng_brazil__WEBPACK_IMPORTED_MODULE_11__["MASKS"];
        this.loaderFullScreen = true;
        this.modalValues = [];
        this.breadCrumbTree = [];
        this.formChanged = false;
        this.submittingForm = false;
        this.submitAssocGrupo = false;
        this.submittingFormPrecos = false;
        this.formPrecosIndex = null;
        this.dados = [];
        this.precosEstado = [];
        this.assocPrecos = [];
        this.unidades = [];
        this.editMode = false;
        this.dadosLoaded = false;
        this.dadosEmpty = false;
        this.toggleAll = false;
        this.searching = false;
        this.firstSearch = false;
        this.showGrupos = true;
        this.showMaterial = false;
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
        this.maxSize = 10;
        this.itemsPerPage = 300;
        this.currentPage = 1;
        this.totalItems = 0;
        this.localeService.use('pt-br');
        this.bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' }, { adaptivePosition: true }, { showWeekNumbers: false });
        this.pnotifyService.getPNotify();
    }
    ngOnInit() {
        this.setFormBuilder();
        this.setFormFilter();
        this.setFormPrecos();
        this.setBreadCrumb();
        this.getUnidades();
        this.estados = this.estadosService.getEstados();
    }
    // customSearchFn(term: string, item: any) {
    //   term = term.toUpperCase();
    //   item.nomeMaterial = item.nomeMaterial.toUpperCase();
    //   if(item.nomeMaterial.startsWith(term)) {
    //     return item.nomeMaterial.indexOf(term) > -1;
    //   }
    // }
    changeFn(val) {
        this.materiaisAssoc.forEach(element => {
            if (element['codMaterial'] == val) {
                this.showMaterial = true;
                this.materiaisAssoc2 = [element];
            }
        });
    }
    enableEdition(i, item) {
        this.editMode = true;
        this.enableEditIndex = i;
        this.valorMaterialAlterado = item.valorMaterial;
    }
    setBreadCrumb() {
        this.activatedRoute.params.subscribe((params) => {
            if (params.id) {
                this.appTitle = 'Editar tabela de preços';
                this.action = 'update';
                this.submittingForm = true;
                this.submitAssocGrupo = true;
            }
            else {
                this.appTitle = 'Nova tabela de preços';
                this.action = 'create';
            }
            this.breadCrumbTree = [
                {
                    descricao: 'Home',
                    routerLink: '/comercial/home',
                },
                {
                    descricao: 'Gestão',
                    routerLink: `/comercial/gestao/${params.idSubModulo}`,
                },
                {
                    descricao: 'Tabela de Preços',
                    routerLink: `/comercial/gestao/${params.idSubModulo}/tabela-precos/lista`,
                },
                {
                    descricao: this.appTitle,
                },
            ];
        });
    }
    // Formulário Preenchido para edição ou novo formulário
    setFormBuilder() {
        const resolver = this.activatedRoute.snapshot.data.detalhes;
        if (resolver) {
            const detalhes = resolver.data;
            this.form = this.formBuilder.group({
                codPreco: [detalhes.codPreco],
                nomePreco: [detalhes.nomePreco, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
                /* codSituacao: [detalhes.codSituacao], */
                dataInicialVigencia: detalhes.dataInicialVigencia
                    ? [
                        this.dateService.convertStringToDate(detalhes.dataInicialVigencia, 'usa'),
                        [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
                    ]
                    : [this.dateService.getToday(), [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
                dataFinalVigencia: detalhes.dataFinalVigencia
                    ? [
                        this.dateService.convertStringToDate(detalhes.dataFinalVigencia, 'usa'),
                    ]
                    : '',
                faixaDescontoComercial: detalhes.faixaDescontoComercial
                    ? [detalhes.faixaDescontoComercial]
                    : 0,
                faixaDescontoGerencial: detalhes.faixaDescontoGerencial
                    ? [detalhes.faixaDescontoGerencial]
                    : 0,
                assocGrupos: this.formBuilder.array([]),
            });
            this.loaderFullScreen = false;
            this.setGrupos(detalhes.assocGrupos);
        }
        else {
            this.pnotifyService.error();
            this.location.back();
            this.loaderFullScreen = false;
            this.form.get('dataInicialVigencia').setValue(null);
            this.form.get('dataFinalVigencia').setValue(null);
        }
    }
    setFormFilter() {
        this.formFilter = this.formBuilder.group({
            grupo: '',
            situacao: '',
        });
    }
    setFormPrecos() {
        this.formPrecos = this.formBuilder.group({
            codAssociacao: [null],
            codEmpresa: [null],
            nomeEmpresa: [null],
            ufDestino: [null],
            valorMaterial: [null],
            percentual: [null]
        });
    }
    onSubmitPrecos() {
        this.tabelaPrecosService
            .savePreco(this.formPrecos.getRawValue())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(() => {
            this.loaderNavbar = false;
            this.submittingForm = false;
        }))
            .subscribe((response) => {
            if (response.hasOwnProperty('success') && response.success === true) {
                this.formPrecos.reset();
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
        });
    }
    onCancel() {
        this.location.back();
    }
    onInput() {
        this.formChanged = true;
    }
    // Ação de Edição ou novo Formulário
    onSubmit() {
        // if (this.action === 'update' && this.form.pristine) {
        //   this.location.back();
        // } else {
        if (this.checkFormValidation() && this.form.valid) {
            if (this.form.value.assocGrupos.length > 0) {
                this.loaderNavbar = true;
                this.submittingForm = true;
                this.tabelaPrecosService
                    .saveTabelaPrecos(this.form.value, this.action)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(() => {
                    this.loaderNavbar = false;
                    this.submittingForm = false;
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
        // }
    }
    checkFormValidation() {
        let isValid = true;
        if (this.form.getRawValue().id === null) {
            isValid = false;
        }
        return isValid;
    }
    openModalPercent(template, index, item) {
        this.codGrupo = item.value.codGrupo;
        this.grupoNome = item.value.nomeGrupo;
        this.searchValoresGrupo(index);
        this.modalRef = this.bsModalService.show(template, index);
    }
    openModalMateriais(template, i, item) {
        this.showMaterial = false;
        this.loaderNavbar = true;
        const params = {
            codGrupo: item.value.codGrupo,
        };
        this.tabelaPrecosService
            .getDetailPanel(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(() => {
            this.loaderNavbar = false;
        }))
            .subscribe({
            next: (response) => {
                if (response.hasOwnProperty('success') && response.success === true) {
                    this.materiaisAssoc = response.data;
                    this.modalRef = this.bsModalService.show(template, item);
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
    openModal(template, index, item) {
        this.submittingFormPrecos = false;
        this.formPrecosIndex = null;
        this.codPreco = null;
        this.codGrupo = null;
        this.grupoNome = null;
        this.codPreco = this.form.value.codPreco;
        this.codGrupo = item.value.codGrupo;
        this.grupoNome = item.value.nomeGrupo;
        this.searchValoresGrupo(index);
        this.modalRef = this.bsModalService.show(template, index);
    }
    onUpdatePercentagem(percent) {
        percent = percent.split('%');
        this.confirmAdd().subscribe((response) => {
            if (response == true) {
                this.precosEstado.forEach(element => {
                    element.valorMaterial = element.valorMaterial + element.valorMaterial * (parseFloat(percent[0]) / 100);
                });
            }
        });
    }
    onUpdateValor(item, index, valorMaterialAlterado) {
        item.valorMaterial = valorMaterialAlterado;
        let j;
        let i;
        for (i = 0; i < this.form.value.assocGrupos.length; i++) {
            j = 0;
            this.form.value.assocGrupos[i].precos.forEach(element => {
                if (item.codAssociacao == element.codAssociacao) {
                    this.form.value.assocGrupos[i].precos[j].valorMaterial = item.valorMaterial;
                }
                j++;
            });
        }
    }
    searchValoresGrupo(index) {
        const valores = this.form.value.assocGrupos[index].precos;
        this.formPrecosIndex = index;
        this.precosEstado = [];
        if (valores.length > 0) {
            valores.forEach((element) => {
                this.onAddPreco(element, false, 'application');
            });
        }
    }
    // Ações do Grupo de Materiais (ESQUERDA TELA)
    setGrupos(grupos) {
        if (grupos.length > 0) {
            for (let i = 0; i < grupos.length; i++) {
                this.onAddGrupo(grupos[i], false, 'application');
            }
        }
    }
    get assocGrupos() {
        return this.form.get('assocGrupos');
    }
    /**
     * @source = 'application' || 'user'
     */
    onAddGrupo(grupo, manipulateForm, source) {
        if (this.checkGrupoExists(grupo) === false) {
            this.assocGrupos.push(this.formBuilder.group({
                codGrupo: [grupo.codGrupo],
                nomeGrupo: [grupo.nomeGrupo],
                precos: grupo.precos && grupo.precos.length > 0
                    ? [grupo.precos]
                    : this.formBuilder.array([]),
                source: [source],
            }));
            if (this.form.value.assocGrupos.length > 9) {
                ('');
                if (this.tableConfigAssocGrupos.fixedHeader === false) {
                    this.showGrupos = false;
                    this.tableConfigAssocGrupos.fixedHeader = true;
                    setTimeout(() => {
                        this.showGrupos = true;
                    }, 1);
                }
            }
            if (manipulateForm) {
                this.form.markAsTouched();
                this.form.markAsDirty();
            }
        }
    }
    checkGrupoExists(grupo) {
        return this.form.value.assocGrupos.some((el) => {
            return el.codGrupo === grupo.codGrupo;
        });
    }
    /**
     * @source = 'application' || 'user'
     */
    onAddPreco(preco, manipulateForm, source) {
        if (preco) {
            if (this.checkPrecosExists(preco) === false) {
                this.precosEstado.push(preco);
                if (source === 'onAssociarPrecos') {
                    let grupos = this.form.controls.assocGrupos.value;
                    grupos = grupos.map((item) => {
                        if (item.codGrupo == this.codGrupo) {
                            let precosAux = item.precos.map(precoAux => {
                                return {
                                    codAssociacao: precoAux.codAssociacao,
                                    codEmpresa: precoAux.codEmpresa,
                                    nomeEmpresa: precoAux.nomeEmpresa,
                                    percentual: precoAux.percentual,
                                    ufDestino: precoAux.ufDestino,
                                    valorMaterial: precoAux.valorMaterial,
                                };
                            });
                            precosAux.push(preco);
                            item.precos = precosAux;
                        }
                        return item;
                    });
                }
                this.formPrecos.reset();
            }
            /* if (this.checkValorExists(preco) === false) {
              this.form.value.assocGrupos[this.formPrecosIndex].precos.push(preco);
            } */
        }
        if (manipulateForm) {
            this.form.markAsTouched();
            this.form.markAsDirty();
        }
    }
    onSaveValores() {
        this.editMode = false;
        if (this.precosEstado.length > 0) {
            this.submittingFormPrecos = true;
            this.precosEstado.forEach((element) => {
                if (this.checkValorExists(element) == false) {
                    this.form.value.assocGrupos[this.formPrecosIndex].precos.push(element);
                }
            });
            this.precosEstado = [];
        }
        this.modalRef.hide();
    }
    checkValorExists(obj) {
        return this.form.value.assocGrupos[this.formPrecosIndex].precos.some((el) => {
            return (el.codEmpresa === obj.codEmpresa && el.ufDestino === obj.ufDestino);
        });
    }
    onDeleteValor(item, index) {
        item.codPreco = this.codPreco;
        item.codGrupo = this.codGrupo;
        this.loaderNavbar = true;
        this.confirmDelete().subscribe((response) => {
            if (response) {
                if (item.codAssociacao != null || item.codAssociacao != undefined) {
                    this.tabelaPrecosService
                        .deleteAssociacaoPreco(item)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(() => {
                        this.loaderNavbar = false;
                    }))
                        .subscribe({
                        next: (response) => {
                            if (response.success) {
                                if (this.checkPrecosExists(item) == true) {
                                    let indexPrecos = this.form.value.assocGrupos[this.formPrecosIndex].precos.indexOf(item);
                                    this.form.value.assocGrupos[this.formPrecosIndex].precos.splice(indexPrecos, 1);
                                }
                                this.precosEstado.splice(index, 1);
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
                }
                else {
                    if (this.checkPrecosExists(item) == true) {
                        let indexPrecos = this.form.value.assocGrupos[this.formPrecosIndex].precos.indexOf(item);
                        this.form.value.assocGrupos[this.formPrecosIndex].precos.splice(indexPrecos, 1);
                    }
                    this.precosEstado.splice(index, 1);
                    this.loaderNavbar = false;
                }
            }
            this.loaderNavbar = false;
        });
    }
    checkPrecosExists(preco) {
        let valorFound = this.precosEstado.filter((xx) => xx.codEmpresa == preco.codEmpresa && xx.ufDestino == preco.ufDestino);
        if (valorFound.length > 0)
            return true;
        else
            return false;
    }
    onAssociarPrecos() {
        const precos = this.formPrecos.getRawValue();
        precos.nomeEmpresa = this.searchEmpresa(precos.codEmpresa);
        this.precoAssociado(precos);
        this.submitAssocGrupo = true;
    }
    searchEmpresa(codEmpresa) {
        let empresaFound = this.unidades.filter((xx) => xx.idEmpresa == codEmpresa);
        return empresaFound[0]['nomeEmpresa'];
    }
    precoAssociado(preco) {
        this.onAddPreco(preco, true, 'onAssociarPrecos');
    }
    onLimparGrupoPrincipal() {
        this.limparGrupoPrincipal = true;
        this.onInput();
        this.form.controls.codDescricao.setValue(null);
        this.form.controls.codSituacao.setValue(null);
        this.form.controls.dtInicioVigencia.setValue(null);
        this.form.controls.dtFimVigencia.setValue(null);
        setTimeout(() => {
            this.limparGrupoPrincipal = false;
        }, 100);
    }
    onDeleteGrupo(index, item) {
        let codGrupo = item.value.codGrupo;
        let nomeGrupo = item.value.nomeGrupo;
        this.confirmDeleteGrupo(codGrupo, nomeGrupo).subscribe((response) => response ? this.deleteGrupo(index, codGrupo) : null);
        // }
    }
    closeModal(modalRef) {
        if (this.submittingFormPrecos === false && this.precosEstado.length > 0) {
            this.confirmCancel().subscribe((response) => response ? this.onCancelFormValores(modalRef) : null);
        }
        else {
            this.modalRef.hide();
        }
    }
    closeModalUpdate(modalRef) {
        this.modalRef.hide();
    }
    onCancelFormValores(modalRef) {
        this.precosEstado = [];
        this.modalRef.hide();
    }
    confirmAdd() {
        this.editMode = false;
        return this.confirmModalService.showConfirm('cancelar', 'Confirmar', 'Ao confirmar, você estará alterando os valores, deseja mesmo continuar?', 'Cancelar', 'Confirmar');
    }
    confirmCancel() {
        this.editMode = false;
        return this.confirmModalService.showConfirm('cancelar', 'Confirmar Cancelamento', 'As informações que não foram salvas serão perdidas, deseja continuar ?', 'Cancelar', 'Confirmar');
    }
    confirmDelete() {
        return this.confirmModalService.showConfirm('delete', 'Confirmar exclusão', 'Deseja realmente prosseguir com a exclusão do registro?', 'Cancelar', 'Confirmar');
    }
    confirmDeleteGrupo(codGrupo, nomeGrupo) {
        return this.confirmModalService.showConfirm('delete', 'Confirmar exclusão', 'Deseja realmente prosseguir com a exclusão do grupo ' + codGrupo + ' - ' + nomeGrupo + ' ?', 'Cancelar', 'Confirmar');
    }
    deleteGrupo(index, codGrupo) {
        if (this.form.value.assocGrupos[index].source === 'user') {
            this.assocGrupos.removeAt(index);
        }
        else if (this.form.value.assocGrupos[index].source === 'application') {
            this.loaderNavbar = true;
            this.activatedRoute.params.subscribe((params) => {
                this.tabelaPrecosService
                    .deleteAssociacaoGrupo(this.form.value.codPreco, codGrupo)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(() => {
                    this.loaderNavbar = false;
                }))
                    .subscribe({
                    next: (response) => {
                        if (response.success) {
                            this.assocGrupos.removeAt(index);
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
    grupoAssociado(material) {
        this.onAddGrupo(material, true, 'user');
    }
    onAssociarGrupos() {
        this.toggleAll = false;
        for (let index = 0; index < this.dados.length; index++) {
            if (this.dados[index].checked === 1) {
                const grupo = {
                    codGrupo: this.dados[index].codGrupo,
                    nomeGrupo: this.dados[index].nomeGrupo,
                };
                this.grupoAssociado(grupo);
                this.dados[index].checked = 0;
                this.submittingForm = true;
            }
        }
    }
    onFilter() {
        this.dados = [];
        this.dadosLoaded = false;
        this.dadosEmpty = false;
        this.searching = true;
        if (this.formFilter.valid) {
            this.search(this.formFilter.getRawValue());
        }
    }
    search(params) {
        this.loaderNavbar = true;
        this.dados = [];
        this.dadosLoaded = false;
        this.dadosEmpty = false;
        this.tabelaPrecosService
            .getGrupos(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(() => {
            this.loaderNavbar = false;
            this.dadosLoaded = true;
        }))
            .subscribe({
            next: (response) => {
                if (response.success === true) {
                    this.dados = response.data;
                    this.totalItems = this.dados[0]['total'];
                    this.searching = false;
                }
                else if (response.success === false) {
                    this.dadosEmpty = true;
                    this.dadosLoaded = true;
                    this.searching = false;
                    this.firstSearch = true;
                }
                else {
                    this.pnotifyService.error();
                    this.dadosEmpty = true;
                    this.firstSearch = false;
                }
            },
            error: (error) => {
                this.dadosEmpty = false;
                this.searching = false;
                if (error.error.hasOwnProperty('mensagem')) {
                    this.pnotifyService.error(error.error.mensagem);
                }
                else {
                    this.pnotifyService.error();
                }
            }
        });
    }
    onToggleAll() {
        this.toggleAll = !this.toggleAll;
        for (let index = 0; index < this.dados.length; index++) {
            this.dados[index].checked = this.toggleAll === true ? 1 : 0;
        }
    }
    onCheckGrupo(index, grupo) {
        this.dados[index].checked = grupo.checked === 1 ? 0 : 1;
    }
    getUnidades() {
        this.tabelaPrecosService.getEmpresas().subscribe({
            next: (response) => {
                if (response.responseCode === 200) {
                    this.unidades = response.result;
                    // this.setFormBuilder();
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
    geetParams(params) {
        let dataInicial = params['dataInicialVigencia'];
        let dataFinal = params['dataFimVigencia'];
        this.form.patchValue({
            dataInicialVigencia: dataInicial,
            dataFimVigencia: dataFinal,
        });
        if (dataInicial instanceof Date) {
            dataInicial = this.dateService.convertToUrlDate(dataInicial);
        }
        if (dataFinal instanceof Date) {
            dataFinal = this.dateService.convertToUrlDate(dataFinal);
        }
        return {
            dataInicial: dataInicial,
            dataFinal: dataFinal,
        };
    }
};
ComercialGestaoTabelaPrecosFormularioComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__["DateService"] },
    { type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__["BsLocaleService"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_16__["BsModalService"] },
    { type: _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_13__["PNotifyService"] },
    { type: _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_4__["ConfirmModalService"] },
    { type: src_app_shared_services_requests_estados_service__WEBPACK_IMPORTED_MODULE_7__["EstadosService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"] },
    { type: _tabela_precos_service__WEBPACK_IMPORTED_MODULE_3__["ComercialGestaoTabelaPrecosService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
ComercialGestaoTabelaPrecosFormularioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'comercial-gestao-tabela-precos-formulario',
        template: _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
        _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__["DateService"],
        ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__["BsLocaleService"],
        ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_16__["BsModalService"],
        _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_13__["PNotifyService"],
        _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_4__["ConfirmModalService"],
        src_app_shared_services_requests_estados_service__WEBPACK_IMPORTED_MODULE_7__["EstadosService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"],
        _tabela_precos_service__WEBPACK_IMPORTED_MODULE_3__["ComercialGestaoTabelaPrecosService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
], ComercialGestaoTabelaPrecosFormularioComponent);



/***/ }),

/***/ "4KUV":
/*!********************************************************************************!*\
  !*** ./src/app/modules/comercial/gestao/tabela-precos/tabela-precos.module.ts ***!
  \********************************************************************************/
/*! exports provided: ComercialGestaoTabelaPrecosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialGestaoTabelaPrecosModule", function() { return ComercialGestaoTabelaPrecosModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _templates_templates_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../templates/templates.module */ "9lCC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "6No5");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "978R");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular2-text-mask */ "UVXo");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-currency-mask */ "D5nU");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _tabela_precos_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tabela-precos-routing.module */ "lKda");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var _cadastros_materiais_templates_templates_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./../../cadastros/materiais/templates/templates.module */ "11Wi");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./lista/lista.component */ "NzU4");
/* harmony import */ var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./formulario/formulario.component */ "1QAd");
/* harmony import */ var _tabela_precos_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./tabela-precos.service */ "aAiI");
/* harmony import */ var _modais_clone_clone_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./modais/clone/clone.component */ "f/+E");
/* harmony import */ var _visao_comercial_visao_comercial_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./visao-comercial/visao-comercial.component */ "B7b/");
/* harmony import */ var _importar_csv_importar_csv_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./importar-csv/importar-csv.component */ "bAYR");





// ngx-bootstrap



// ng-select


// ng2-currency-mask

// PNotify

// Modules





// Components


// Services




let ComercialGestaoTabelaPrecosModule = class ComercialGestaoTabelaPrecosModule {
};
ComercialGestaoTabelaPrecosModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _lista_lista_component__WEBPACK_IMPORTED_MODULE_17__["ComercialGestaoTabelaPrecosListaComponent"],
            _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_18__["ComercialGestaoTabelaPrecosFormularioComponent"],
            _modais_clone_clone_component__WEBPACK_IMPORTED_MODULE_20__["ComercialTabelaPrecoCloneComponent"],
            _visao_comercial_visao_comercial_component__WEBPACK_IMPORTED_MODULE_21__["ComercialGestaoTabelaPrecoVisaoComercialComponent"],
            _importar_csv_importar_csv_component__WEBPACK_IMPORTED_MODULE_22__["ComercialGestaoTabelaPrecosImportarCsvComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"].forRoot(),
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"],
            ng2_currency_mask__WEBPACK_IMPORTED_MODULE_10__["CurrencyMaskModule"],
            angular2_text_mask__WEBPACK_IMPORTED_MODULE_9__["TextMaskModule"],
            _tabela_precos_routing_module__WEBPACK_IMPORTED_MODULE_12__["ComercialGestaoTabelaPrecosRoutingModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_14__["TemplatesModule"],
            _templates_templates_module__WEBPACK_IMPORTED_MODULE_1__["ComercialTemplatesModule"],
            _cadastros_materiais_templates_templates_module__WEBPACK_IMPORTED_MODULE_15__["ComercialCadastrosMateriaisTemplatesModule"],
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_16__["ModalModule"].forRoot(),
        ],
        providers: [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"], _tabela_precos_service__WEBPACK_IMPORTED_MODULE_19__["ComercialGestaoTabelaPrecosService"]],
    })
], ComercialGestaoTabelaPrecosModule);



/***/ }),

/***/ "B7b/":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/comercial/gestao/tabela-precos/visao-comercial/visao-comercial.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ComercialGestaoTabelaPrecoVisaoComercialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialGestaoTabelaPrecoVisaoComercialComponent", function() { return ComercialGestaoTabelaPrecoVisaoComercialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_visao_comercial_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./visao-comercial.component.html */ "g+Ru");
/* harmony import */ var _visao_comercial_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visao-comercial.component.scss */ "jCCp");
/* harmony import */ var _cadastros_materiais_grupos_grupos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../cadastros/materiais/grupos/grupos.service */ "4YhS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/chronos */ "xj/R");
/* harmony import */ var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/locale */ "0b5p");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _tabela_precos_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../tabela-precos.service */ "aAiI");
/* harmony import */ var _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../../../../../shared/services/core/date.service */ "Rk3r");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/templates/detail-panel/detal-panel.service */ "gIxL");









// ngx-bootstrap



Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_10__["defineLocale"])('pt-br', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_11__["ptBrLocale"]);
// Services





let ComercialGestaoTabelaPrecoVisaoComercialComponent = class ComercialGestaoTabelaPrecoVisaoComercialComponent {
    constructor(service, activatedRoute, formBuilder, localeService, dateService, router, routerService, materiaisGrupoService, pnotifyService, location, detailPanelService) {
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.localeService = localeService;
        this.dateService = dateService;
        this.router = router;
        this.routerService = routerService;
        this.materiaisGrupoService = materiaisGrupoService;
        this.pnotifyService = pnotifyService;
        this.location = location;
        this.detailPanelService = detailPanelService;
        this.dadosEmpty = true;
        this.boolimpar = false;
        this.dadosLoaded = false;
        this.loading = true;
        this.loadingNavBar = false;
        this.showDetailPanel = false;
        this.materiais = [];
        this.dados = [];
        this.dadosDetalhes = [];
        this.codigoSelecionado = 0;
        this.materialSelecionado = '';
        this.breadCrumbTree = [];
        this.orderBy = 'nomeMaterial';
        this.orderType = 'ASC';
        this.tableConfig = {
            subtitleBorder: true,
        };
        this.linhas = [];
        this.tabelas = [];
        this.maxSize = 10;
        this.itemsPerPage = 300;
        this.currentPage = 1;
        this.totalItems = 0;
        this.begin = 0;
        this.end = 10;
        this.appTitle = 'Tabela de Preços - Visão Comercial';
        this.localeService.use('pt-br');
        this.bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' }, { adaptivePosition: true }, { showWeekNumbers: false });
    }
    ngOnInit() {
        this.onBuildForm();
        this.onActiveRoute();
        this.onDetailPanelEmitter();
        this.setBreadCrumb();
        this.getTabelas();
        this.getLinhas();
        setTimeout(() => {
            this.loading = false;
        }, 1500);
    }
    ngOnDestroy() {
        this.$showDetailPanelSubscription.unsubscribe();
        this.$activatedRouteSubscription.unsubscribe();
    }
    onBuildForm() {
        this.form = this.formBuilder.group({
            tabela: [0],
            codMaterial: [null],
            nomeMaterial: [null],
            codLinha: [0],
            orderBy: [null],
            orderType: [null],
            pagina: [null],
            registros: [25, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            timestamp: [new Date().getTime()],
        });
    }
    setBreadCrumb() {
        this.activatedRoute.params.subscribe((params) => {
            this.breadCrumbTree = [
                {
                    descricao: 'Home',
                    routerLink: '/comercial/',
                },
                {
                    descricao: 'Gestão',
                    routerLink: `/comercial/gestao/${params.idSubModulo}`,
                },
                {
                    descricao: this.appTitle,
                },
            ];
        });
    }
    onDetailPanelEmitter() {
        this.$showDetailPanelSubscription =
            this.detailPanelService.config.subscribe((event) => {
                this.showDetailPanel = event.showing;
                if (!this.showDetailPanel) {
                    this.codigoSelecionado = 0;
                    this.materialSelecionado = '';
                }
            });
    }
    onActiveRoute() {
        this.$activatedRouteSubscription =
            this.activatedRoute.queryParams.subscribe((queryParams) => {
                if (Object.keys(queryParams).length > 0) {
                    let _response = this.routerService.getBase64UrlParams(queryParams);
                    console.log(_response);
                    this.getMateriais(_response);
                    this.form.patchValue(_response);
                }
            });
    }
    getTabelas() {
        this.service
            .getTabelas()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => { }))
            .subscribe((response) => {
            if (response.hasOwnProperty('success') && response.success === true) {
                this.tabelas = response.data;
                this.tabelas.unshift({
                    codPreco: 0,
                    nomePreco: 'EXIBIR TODOS',
                });
            }
            else {
                this.pnotifyService.error();
                this.location.back();
            }
        });
    }
    getLinhas() {
        this.materiaisGrupoService
            .getFilterValues()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => { }))
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
        });
    }
    getMateriais(codMaterial) {
        this.detailPanelService.hide();
        if (!this.loading)
            this.loadingNavBar = true;
        this.dadosLoaded = false;
        this.service
            .getMateriais(codMaterial)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.boolimpar = false;
            this.loading = false;
            this.loadingNavBar = false;
            this.dadosLoaded = true;
        }))
            .subscribe({
            next: (response) => {
                if (response.hasOwnProperty('success') && response.success === true) {
                    this.dados = response.data;
                    this.dadosEmpty = false;
                }
                else if (response.hasOwnProperty('success') &&
                    response.success === false &&
                    response.hasOwnProperty('mensagem') &&
                    response.mensagem !== null) {
                    this.dados = [];
                    this.dadosEmpty = true;
                    this.pnotifyService.error(response.mensagem);
                }
                else {
                    this.dados = [];
                    this.dadosEmpty = true;
                    this.pnotifyService.notice('Nenhuma informação encontrada');
                }
            },
            error: (error) => {
                this.dados = [];
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
    getMateriaisDetalhes(item) {
        this.detailPanelService.show();
        this.loadingNavBar = true;
        this.codigoSelecionado = 0;
        this.codigoSelecionado = item.codMaterial;
        this.materialSelecionado = '';
        this.materialSelecionado = item.nomeMaterial;
        let params = {};
        params.codMaterial = this.codigoSelecionado;
        params.codTabela = this.form.value.tabela;
        if (!this.loading)
            this.loadingNavBar = true;
        this.service
            .getMateriaisDetalhes(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.loading = false;
            this.loadingNavBar = false;
        }))
            .subscribe({
            next: (response) => {
                if (response.hasOwnProperty('success') && response.success === true) {
                    this.dadosDetalhes = response.data;
                    this.detailPanelService.loadedFinished(false);
                }
                else if (response.hasOwnProperty('success') &&
                    response.success === false &&
                    response.hasOwnProperty('mensagem') &&
                    response.mensagem !== null) {
                    this.dadosDetalhes = [];
                    this.detailPanelService.loadedFinished(true);
                    this.pnotifyService.error(response.mensagem);
                }
                else {
                    this.dadosDetalhes = [];
                    this.detailPanelService.loadedFinished(true);
                    this.pnotifyService.notice('Nenhuma informação encontrada');
                }
            },
            error: (error) => {
                this.dadosDetalhes = [];
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
        // if (_obj?.material) {
        //   (Number.isNaN(parseInt(_obj?.material))) ?
        //     _params['nomeMaterial'] = _obj.material :
        //     _params['codMaterial'] = _obj.material
        // }
        // if (_obj?.grupo) {
        //   (Number.isNaN(parseInt(_obj?.grupo))) ?
        //     _params['nomeGrupo'] = _obj.grupo :
        //     _params['codGrupo'] = _obj.grupo;
        // }
        if (_obj === null || _obj === void 0 ? void 0 : _obj.tabela) {
            Number.isNaN(parseInt(_obj === null || _obj === void 0 ? void 0 : _obj.tabela))
                ? (_params['nomePreco'] = _obj.tabela)
                : (_params['codPreco'] = _obj.tabela);
        }
        _params['orderBy'] = this.orderBy;
        _params['orderType'] = this.orderType;
        return _params;
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
        this.itemsPerPage = this.form.value.registros;
        this.currentPage = 1;
        this.form.get('timestamp').setValue(new Date().getTime());
        this.router.navigate([], {
            queryParams: this.routerService.setBase64UrlParams(this.getParams()),
            relativeTo: this.activatedRoute,
        });
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
    classStatusBorder(item) {
        let borderClass;
        if (item.codSituacao === 2) {
            borderClass = 'border-danger';
        }
        else if (item.codSituacao === 1) {
            borderClass = 'border-success';
        }
        return borderClass;
    }
    onLimpar() {
        this.onBuildForm();
        this.boolimpar = true;
        this.dados = [];
    }
    onPageChanged(event) {
        this.begin = (event.page - 1) * event.itemsPerPage;
        this.end = event.page * event.itemsPerPage;
    }
};
ComercialGestaoTabelaPrecoVisaoComercialComponent.ctorParameters = () => [
    { type: _tabela_precos_service__WEBPACK_IMPORTED_MODULE_13__["ComercialGestaoTabelaPrecosService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__["BsLocaleService"] },
    { type: _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_14__["DateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_15__["RouterService"] },
    { type: _cadastros_materiais_grupos_grupos_service__WEBPACK_IMPORTED_MODULE_3__["ComercialCadastrosMateriaisGrupoService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__["PNotifyService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"] },
    { type: src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_16__["DetailPanelService"] }
];
ComercialGestaoTabelaPrecoVisaoComercialComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'comercial-gestao-tabela-preco-visao-comercial',
        template: _raw_loader_visao_comercial_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_visao_comercial_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_tabela_precos_service__WEBPACK_IMPORTED_MODULE_13__["ComercialGestaoTabelaPrecosService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
        ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__["BsLocaleService"],
        _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_14__["DateService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_15__["RouterService"],
        _cadastros_materiais_grupos_grupos_service__WEBPACK_IMPORTED_MODULE_3__["ComercialCadastrosMateriaisGrupoService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__["PNotifyService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"],
        src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_16__["DetailPanelService"]])
], ComercialGestaoTabelaPrecoVisaoComercialComponent);



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

/***/ "NzU4":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/comercial/gestao/tabela-precos/lista/lista.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ComercialGestaoTabelaPrecosListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialGestaoTabelaPrecosListaComponent", function() { return ComercialGestaoTabelaPrecosListaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lista.component.html */ "v65K");
/* harmony import */ var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lista.component.scss */ "v/ct");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/chronos */ "xj/R");
/* harmony import */ var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/locale */ "0b5p");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/templates/detail-panel/detal-panel.service */ "gIxL");
/* harmony import */ var _tabela_precos_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../tabela-precos.service */ "aAiI");
/* harmony import */ var _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./../../../../../shared/services/core/date.service */ "Rk3r");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./../../../../../shared/modules/confirm-modal/confirm-modal.service */ "FOez");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");








// ngx-bootstrap




Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_10__["defineLocale"])('pt-br', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_11__["ptBrLocale"]);
// Services







let ComercialGestaoTabelaPrecosListaComponent = class ComercialGestaoTabelaPrecosListaComponent {
    constructor(activatedRoute, formBuilder, activateRoute, localeService, dateService, router, detailPanelService, pnotifyService, tabelaPrecosService, confirmModalService, atividadesService, modalService, routerService) {
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.activateRoute = activateRoute;
        this.localeService = localeService;
        this.dateService = dateService;
        this.router = router;
        this.detailPanelService = detailPanelService;
        this.pnotifyService = pnotifyService;
        this.tabelaPrecosService = tabelaPrecosService;
        this.confirmModalService = confirmModalService;
        this.atividadesService = atividadesService;
        this.modalService = modalService;
        this.routerService = routerService;
        this.loaderNavbar = false;
        this.loaderFullScreen = true;
        this.breadCrumbTree = [];
        this.showDetailPanel = false;
        this.dados = [];
        this.otherDados = [];
        this.otherDados2 = [];
        this.dadosPagination = [];
        this.dadosLoaded = false;
        this.dadosEmpty = false;
        this.tabelaPreco = {};
        this.tableConfig = {
            subtitleBorder: true,
        };
        this.tableConfigMateriais = {
            hover: false,
        };
        this.orderBy = 'codPreco';
        this.orderType = 'ASC';
        this.maxSize = 10;
        this.itemsPerPage = 300;
        this.currentPage = 1;
        this.totalItems = 0;
        this.localeService.use('pt-br');
    }
    ngOnInit() {
        this.setFormFilter();
        this.setBreadCrumb();
        this.registrarAcesso();
        this.onDetailPanelEmitter();
        this.setGrupoSelecionado();
        this.onActiveRoute();
    }
    ngOnDestroy() {
        this.activatedRouteSubscription.unsubscribe();
    }
    setBreadCrumb() {
        this.activatedRoute.params.subscribe((params) => {
            this.breadCrumbTree = [
                {
                    descricao: 'Home',
                    routerLink: '/comercial/',
                },
                {
                    descricao: 'Gestão',
                    routerLink: `/comercial/gestao/${params['idSubModulo']}`,
                },
                {
                    descricao: 'Tabela de Preços',
                },
            ];
        });
    }
    onActiveRoute() {
        this.activatedRouteSubscription = this.activatedRoute.queryParams.subscribe((response) => {
            let _response = this.routerService.getBase64UrlParams(response);
            if (Object.keys(_response).length > 0)
                this.form.patchValue(_response);
            this.search(this.getParams());
        });
    }
    // Formulário
    setFormFilter() {
        this.form = this.formBuilder.group({
            codMaterial: null,
            descTabela: [null],
            dataInicialVigencia: '',
            dataFinalVigencia: '',
            codSituacao: [1],
            orderBy: [null],
            orderType: [null],
            pagina: [null],
            registros: [this.itemsPerPage],
            timestamp: [new Date().getTime()],
        });
    }
    registrarAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
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
        this.form.get('timestamp').setValue(new Date().getTime());
        this.router.navigate([], {
            queryParams: this.routerService.setBase64UrlParams(this.getParams()),
            relativeTo: this.activatedRoute,
        });
        this.itemsPerPage = this.form.value.registros;
        this.currentPage = 1;
    }
    // setRouterParams(params: any): void {
    //   this.router.navigate([], {
    //     relativeTo: this.activatedRoute,
    //     queryParams: { q: btoa(JSON.stringify(params)) },
    //   });
    //   this.search(params);
    // }
    // verificaParams(): Object {
    //   let params: any = {};
    //   if (this.form.value.descTabela) {
    //     params.descTabela = this.form.value.descTabela;
    //   }
    //   if (this.form.value.dataInicialVigencia) {
    //     params.dataInicialVigencia = this.form.value.dataInicialVigencia;
    //   }
    //   if (this.form.value.dataFinalVigencia) {
    //     params.dataFinalVigencia = this.form.value.dataFinalVigencia;
    //   }
    //   if (this.form.value.codSituacao) {
    //     params.codSituacao = this.form.value.codSituacao;
    //   }
    //   params.pagina = this.form.value.pagina;
    //   params.registros = this.form.value.registros;
    //   params.orderBy = this.form.value.orderBy;
    //   params.orderType = this.form.value.orderType;
    //   return params;
    // }
    search(params) {
        if (!this.loaderFullScreen)
            this.loaderNavbar = true;
        this.detailPanelService.hide();
        this.dados = [];
        this.dadosLoaded = false;
        this.dadosEmpty = false;
        this.tabelaPrecosService
            .getListaPrecos(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.loaderNavbar = false;
            this.loaderFullScreen = false;
            this.dadosLoaded = true;
        }))
            .subscribe({
            next: (response) => {
                if (response.hasOwnProperty('success') && response.success === true) {
                    this.dados = response.data;
                    this.dadosPagination = this.dados.slice(0, this.itemsPerPage);
                    this.totalItems = this.dados.length;
                    this.dadosLoaded = true;
                    // if(this.form.value.codMaterial){
                    //   let hasData = this.dados.find((cod) => {
                    //      return cod.codPreco == this.form.value.codMaterial;
                    //   })
                    //   if(!hasData){
                    //     this.dadosEmpty = true;
                    //   }
                    // }
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
    onCheckPreco() {
        let dados = {
            info: null,
            precos: null
        };
        let precos;
        this.dados.forEach(element => {
            this.tabelaPrecosService.getDetalhes(element.codPreco)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
                this.loaderNavbar = false;
                this.detailPanelService.loadedFinished(false);
            }))
                .subscribe({
                next: (response) => {
                    response.data.assocGrupos.forEach(element2 => {
                        this.otherDados.forEach(element3 => {
                            if (element2.codGrupo == element3.codGrupo) {
                                precos = element2.precos;
                                dados.info = element3;
                                dados.precos = precos;
                                this.otherDados2.push({
                                    'info': dados.info,
                                    'precos': dados.precos
                                });
                            }
                        });
                    });
                }
            });
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
        _params['orderBy'] = this.orderBy;
        _params['orderType'] = this.orderType;
        _params['dataFinalVigencia'] = '';
        return _params;
    }
    // Detail Panel
    onDetails(item) {
        this.detalhes = item;
        this.detailPanelService.show();
        this.detailPanelTitle = `Materiais associados `;
        this.setGrupoSelecionado();
        // this.grupoSelecionado = grupo;
        this.loaderNavbar = true;
        this.otherDados = [];
        const params = {
            codGrupo: item.codGrupo,
        };
        this.tabelaPrecosService
            .getDetailPanel(params)
            .subscribe({
            next: (response) => {
                if (response.hasOwnProperty('success') && response.success === true) {
                    this.otherDados = response.data;
                    this.otherDados2 = [];
                    this.onCheckPreco();
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
        this.loaderNavbar = true;
        this.detailPanelService.loadedFinished(false);
    }
    setGrupoSelecionado() {
        this.grupoSelecionado = {
            codGrupo: null,
            nomeGrupo: null,
            precos: [],
        };
    }
    onDetailPanelEmitter() {
        this.showDetailPanelSubscription = this.detailPanelService.config.subscribe((event) => {
            this.showDetailPanel = event.showing;
        });
    }
    // Activate e Inactivate e borda Situação
    onActivate(index, grupo) {
        this.confirmActivate()
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])((result) => result ? this.activateGrupo(index, grupo) : rxjs__WEBPACK_IMPORTED_MODULE_6__["EMPTY"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.loaderNavbar = false;
        }))
            .subscribe((success) => {
            this.pnotifyService.success();
            this.refreshMainData(grupo);
        }, (error) => {
            this.pnotifyService.error();
            this.dados[index].codSituacao = 1;
        });
    }
    confirmActivate() {
        return this.confirmModalService.showConfirm(null, null, 'Deseja realmente prosseguir com a ativação do registro?', 'Cancelar', 'Confirmar');
    }
    activateGrupo(index, grupo) {
        this.loaderNavbar = true;
        this.dados[index].codSituacao = 1;
        return this.tabelaPrecosService.activateGrupo(grupo.codPreco);
    }
    inactivateGrupo(index, grupo) {
        this.loaderNavbar = true;
        this.dados[index].codSituacao = 2;
        return this.tabelaPrecosService.inactivateGrupo(grupo.codPreco);
    }
    onInactivate(index, grupo) {
        this.confirmInactive()
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])((result) => result ? this.inactivateGrupo(index, grupo) : rxjs__WEBPACK_IMPORTED_MODULE_6__["EMPTY"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.loaderNavbar = false;
        }))
            .subscribe((success) => {
            this.pnotifyService.success();
            this.refreshMainData(grupo);
        }, (error) => {
            this.pnotifyService.error();
            this.dados[index].codSituacao = 1;
        });
    }
    confirmInactive() {
        return this.confirmModalService.showConfirm('inactivate', 'Confirmar inativação', 'Deseja realmente prosseguir com a inativação do registro?', 'Cancelar', 'Confirmar');
    }
    classStatusBorder(grupo) {
        let borderClass;
        if (grupo.codSituacao === 2) {
            borderClass = 'border-danger';
        }
        else if (grupo.codSituacao === 1) {
            borderClass = 'border-success';
        }
        return borderClass;
    }
    onEdit(item) {
        this.router.navigate(['../editar', item.codPreco], {
            relativeTo: this.activateRoute,
        });
    }
    onCsv(item) {
        this.router.navigate(['../importar-csv', item.codPreco], {
            relativeTo: this.activateRoute,
        });
    }
    onClone(item, template) {
        this.tabelaPreco = item;
        item.clone = true;
        this.openModal(template);
    }
    // Outros
    // onPageChanged(event: PageChangedEvent) {
    //   if (this.form.value.pagina != event.page) {
    //     this.detailPanelService.hide();
    //     this.setGrupoSelecionado();
    //     this.form.value.pagina = event.page;
    //     this.onFilter();
    //     this.scrollToFilter.nativeElement.scrollIntoView({
    //       behavior: 'instant',
    //     });
    //   }
    // }
    onPageChanged(event) {
        const startItem = (event.page - 1) * event.itemsPerPage;
        const endItem = event.page * event.itemsPerPage;
        this.dadosPagination = this.dados.slice(startItem, endItem);
        // this.scrollToFilter.nativeElement.scrollIntoView({
        //   behavior: 'instant',
        // });
    }
    refreshMainData(grupo) {
        for (let i = 0; i < this.dados.length; i++) {
            if (grupo.codPreco === this.dados[i].codPreco) {
                this.dados[i].codSituacao = grupo.codSituacao;
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
    openModal(template) {
        this.modalRef = this.modalService.show(template, {
            animated: false,
            ignoreBackdropClick: true,
        });
    }
};
ComercialGestaoTabelaPrecosListaComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsLocaleService"] },
    { type: _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_15__["DateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_13__["DetailPanelService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__["PNotifyService"] },
    { type: _tabela_precos_service__WEBPACK_IMPORTED_MODULE_14__["ComercialGestaoTabelaPrecosService"] },
    { type: _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_17__["ConfirmModalService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_16__["AtividadesService"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["BsModalService"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_18__["RouterService"] }
];
ComercialGestaoTabelaPrecosListaComponent.propDecorators = {
    scrollToFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['scrollToFilter', {},] }]
};
ComercialGestaoTabelaPrecosListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-tabela-precos-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsLocaleService"],
        _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_15__["DateService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_13__["DetailPanelService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__["PNotifyService"],
        _tabela_precos_service__WEBPACK_IMPORTED_MODULE_14__["ComercialGestaoTabelaPrecosService"],
        _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_17__["ConfirmModalService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_16__["AtividadesService"],
        ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["BsModalService"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_18__["RouterService"]])
], ComercialGestaoTabelaPrecosListaComponent);



/***/ }),

/***/ "QF9G":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/comercial/gestao/tabela-precos/modais/clone/clone.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep message {\n  padding: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21lcmNpYWwvZ2VzdGFvL3RhYmVsYS1wcmVjb3MvbW9kYWlzL2Nsb25lL2Nsb25lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UscUJBQUE7QUFBSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2dlc3Rhby90YWJlbGEtcHJlY29zL21vZGFpcy9jbG9uZS9jbG9uZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcHtcbiAgbWVzc2FnZXtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "RzZb":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/comercial/gestao/tabela-precos/formulario/formulario-resolver.guard.ts ***!
  \************************************************************************************************/
/*! exports provided: ComercialGestaoTabelaPrecosFormularioResolverGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialGestaoTabelaPrecosFormularioResolverGuard", function() { return ComercialGestaoTabelaPrecosFormularioResolverGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _tabela_precos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../tabela-precos.service */ "aAiI");



// Services

let ComercialGestaoTabelaPrecosFormularioResolverGuard = class ComercialGestaoTabelaPrecosFormularioResolverGuard {
    constructor(tabelaPrecosService) {
        this.tabelaPrecosService = tabelaPrecosService;
    }
    resolve(route) {
        if (route.params && route.params.id) {
            return this.tabelaPrecosService.getDetalhes(route.params.id);
        }
        // É implementado o método "of" para manter a tipagem de retorno com Observable.
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
            success: true,
            mensagem: null,
            data: {
                codPreco: null,
                nomePreco: null,
                codSituacao: null,
                dataInicialVigencia: null,
                dataFinalVigencia: null,
                nomeUsuario: null,
                dataCadastro: null,
                assocGrupos: [],
            },
        });
    }
};
ComercialGestaoTabelaPrecosFormularioResolverGuard.ctorParameters = () => [
    { type: _tabela_precos_service__WEBPACK_IMPORTED_MODULE_3__["ComercialGestaoTabelaPrecosService"] }
];
ComercialGestaoTabelaPrecosFormularioResolverGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_tabela_precos_service__WEBPACK_IMPORTED_MODULE_3__["ComercialGestaoTabelaPrecosService"]])
], ComercialGestaoTabelaPrecosFormularioResolverGuard);



/***/ }),

/***/ "aAiI":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/comercial/gestao/tabela-precos/tabela-precos.service.ts ***!
  \*********************************************************************************/
/*! exports provided: ComercialGestaoTabelaPrecosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialGestaoTabelaPrecosService", function() { return ComercialGestaoTabelaPrecosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _comercial_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../comercial.service */ "VgqD");




/* Services */

let ComercialGestaoTabelaPrecosService = class ComercialGestaoTabelaPrecosService {
    constructor(http, comercialService) {
        this.http = http;
        this.comercialService = comercialService;
        this.API = `https://crm360.monterrey.com.bo/api/comercial/gestao/tabela-precos`;
    }
    getListaPrecos(params = []) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http
            .get(`${this.API}/lista`, { params: httpParams })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getEmpresas() {
        return this.comercialService.getEmpresas({ idEmpresa: [4, 6, 18, 55, 77, 79, 83], tipo: 'search' });
    }
    getTabelas() {
        return this.http
            .get(`${this.API}/tabelas`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getDetalhes(codPreco) {
        return this.http
            .get(`${this.API}/detalhes/${codPreco}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    // getDetailPanel(codGrupo: number): Observable<Object | JsonResponse> {
    //   return this.http
    //     .get(`${this.API}/detail-panel/${codGrupo}`)
    //     .pipe(take(1), retry(2));
    // }
    getDetailPanel(params = []) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http
            .get(`${this.API}/detail-panel`, { params: httpParams })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getGrupos(params = []) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http
            .get(`${this.API}/lista/grupos`, { params: httpParams })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getAssociacoesGrupos(codGrupo, params) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http
            .get(`${this.API}/lista/grupos/${codGrupo}`, { params: httpParams })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getAssociados() {
        return this.http.get(`${this.API}/associados`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    deleteAssociacaoPreco(item) {
        return this.http
            .delete(`${this.API}/associacao-precos/remover/${item.codAssociacao}/${item.codPreco}/${item.codGrupo}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    deleteAssociacaoGrupo(codPreco, codGrupo) {
        return this.http
            .delete(`${this.API}/grupo/remover/${codGrupo}/${codPreco}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    saveTabelaPrecos(record, action) {
        if (action === 'update') {
            return this.updateGrupo(record);
        }
        return this.saveGrupo(record);
    }
    saveGrupo(record) {
        return this.http.post(`${this.API}/salvar`, record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    updateGrupo(record) {
        return this.http
            .put(`${this.API}/atualizar`, record)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    // savePrecos(record: any, action: string): Observable<Object | JsonResponse> {
    //   if (action === 'update') {
    //     return this.updatePreco(record);
    //   }
    //   return this.savePreco(record);
    // }
    savePreco(record) {
        return this.http
            .post(`${this.API}/precos/salvar`, record)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    updatePreco(record) {
        return this.http
            .put(`${this.API}/precos/atualizar`, record)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getPreco(params = []) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http
            .get(`${this.API}/precos/lista`, { params: httpParams })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    activateGrupo(codGrupo) {
        return this.http
            .post(`${this.API}/ativar`, codGrupo)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    inactivateGrupo(codGrupo) {
        return this.http.post(`${this.API}/inativar`, codGrupo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getMateriais(params) {
        return this.http.get(`${this.API}/materiais`, { params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getMateriaisDetalhes(params) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http.get(`${this.API}/materiais/detalhes`, { params: httpParams })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
};
ComercialGestaoTabelaPrecosService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _comercial_service__WEBPACK_IMPORTED_MODULE_4__["ComercialService"] }
];
ComercialGestaoTabelaPrecosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _comercial_service__WEBPACK_IMPORTED_MODULE_4__["ComercialService"]])
], ComercialGestaoTabelaPrecosService);



/***/ }),

/***/ "bAYR":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/comercial/gestao/tabela-precos/importar-csv/importar-csv.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ComercialGestaoTabelaPrecosImportarCsvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialGestaoTabelaPrecosImportarCsvComponent", function() { return ComercialGestaoTabelaPrecosImportarCsvComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_importar_csv_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./importar-csv.component.html */ "y1mp");
/* harmony import */ var _importar_csv_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./importar-csv.component.scss */ "i6rB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _comercial_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../comercial.service */ "VgqD");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _tabela_precos_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../tabela-precos.service */ "aAiI");









let ComercialGestaoTabelaPrecosImportarCsvComponent = class ComercialGestaoTabelaPrecosImportarCsvComponent {
    constructor(activatedRoute, comercialService, tabelaPrecosService, pnotifyService, bsModalService) {
        this.activatedRoute = activatedRoute;
        this.comercialService = comercialService;
        this.tabelaPrecosService = tabelaPrecosService;
        this.pnotifyService = pnotifyService;
        this.bsModalService = bsModalService;
        this.appTitle = 'Importar CSV';
        this.breadCrumbTree = [];
        this.loaderFullScreen = true;
        this.nomePreco = '';
        this.rows = [];
        this.empresas = [];
        this.elementsAdded = [];
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
    }
    ngOnInit() {
        this.setBreadCrumb();
        this.getTotalItems();
        this.getEmpresas();
        this.loaderFullScreen = false;
    }
    // pega os valores dos depositos
    getEmpresas() {
        this.comercialService.getDepositos(null)
            .subscribe({
            next: (response) => {
                response.result.forEach(element => {
                    if (element.idDeposito == 1 ||
                        element.idDeposito == 2 ||
                        element.idDeposito == 18 ||
                        element.idDeposito == 79 ||
                        element.idDeposito == 77 ||
                        element.idDeposito == 55) {
                        this.empresas.push({ codDeposito: element.idDeposito, nomeDeposito: element.nomeDeposito });
                    }
                });
            }
        });
    }
    // limpa os
    clearValues() {
        this.content = null;
        this.headers = null;
        this.row = null;
        this.rows = null;
    }
    // popula o CSV de modelo com todos os dados referente ao codigo do preco
    populateModel() {
        var arr = [];
        arr.push(new Array('ID GRUPO', 'ID DEPOSITO', 'UF DESTINO', 'VALOR'));
        this.dados.assocGrupos.forEach(element => {
            let codGrupo = element.codGrupo;
            element.precos.forEach(element2 => {
                arr.push(new Array(codGrupo, element2.codEmpresa, element2.ufDestino.toUpperCase(), element2.valorMaterial));
            });
        });
        this.rows = arr;
    }
    // pega todos os itens referente ao codigo de preco
    getTotalItems() {
        this.tabelaPrecosService
            .getDetalhes(this.codPreco)
            .subscribe({
            next: (response) => {
                if (response.hasOwnProperty('success') && response.success === true) {
                    this.dados = response.data;
                    this.nomePreco = this.dados.nomePreco;
                    this.populateModel();
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
    setBreadCrumb() {
        this.activatedRoute.params.subscribe((params) => {
            this.codPreco = params.id;
            this.breadCrumbTree = [
                {
                    descricao: 'Home',
                    routerLink: '/comercial/home',
                },
                {
                    descricao: 'Gestão',
                    routerLink: `/comercial/gestao/${params.idSubModulo}`,
                },
                {
                    descricao: 'Tabela de Preços',
                    routerLink: `/comercial/gestao/${params.idSubModulo}/tabela-precos/lista`,
                },
                {
                    descricao: this.appTitle,
                },
            ];
        });
    }
    //cria arquivo de dowload separado por ponto e virgulas
    downloadModel() {
        let csvContent = "data:text/csv;charset=utf-8," + this.rows.map(e => e.join(";")).join("\n");
        var encodedUri = encodeURI(csvContent);
        var link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "modelo-tabela-preco.csv");
        document.body.appendChild(link);
        link.click();
    }
    changeListener(fileInput) {
        //le arquivo csv
        this.fileReaded = fileInput.target.files[0];
        let filename = fileInput.target.files[0].name;
        let fileExtension = filename.substring(filename.lastIndexOf('.') + 1, filename.length) || filename;
        if (fileExtension == 'csv') {
            let reader = new FileReader();
            reader.readAsText(this.fileReaded);
            reader.onload = (e) => {
                let csvuploaded = reader.result.toString();
                let allTextLines = csvuploaded.split(/\r|\n|\r/);
                // headers = linhas de titulos
                this.headers = allTextLines[0].split(';');
                this.content = [];
                for (let i = 1; i < allTextLines.length; i++) {
                    // divide por ponto e virgula
                    let data = allTextLines[i].split(';');
                    if (data.length === this.headers.length) {
                        let tarr = [];
                        for (let j = 0; j < this.headers.length; j++) {
                            tarr.push(data[j]);
                        }
                        // log em cada row para ver output
                        // console.log(tarr);
                        this.content.push(tarr);
                        this.checkLines();
                    }
                }
            };
        }
        else {
            this.pnotifyService.error('É necessário subir um arquivo do tipo CSV!');
        }
        //reseta o input caso o usuario queira subir o mesmo arquivo
        fileInput.target.value = null;
    }
    // checa em todas as linhas se o item ja está cadastrado ou não
    checkLines() {
        if (this.content.length > 0) {
            for (let i = 0; i < this.content.length; i++) {
                if (this.content[i] != undefined && this.content[i][2].length == 2) {
                    this.content[i][4] = 'SEM CADASTRO';
                    this.dados.assocGrupos.forEach(element => {
                        if (element.codGrupo == this.content[i][0]) {
                            element.precos.forEach(element2 => {
                                if (element2.codEmpresa == this.content[i][1]
                                    && element2.ufDestino.toUpperCase() == this.content[i][2]) {
                                    this.content[i][4] = 'OK';
                                }
                            });
                        }
                    });
                }
                else {
                    this.loaderNavbar = false;
                    this.pnotifyService.error('Não foi encontrado nenhum item no arquivo CSV para exportação ou o modelo está incorreto.');
                    this.content = [];
                    break;
                }
            }
        }
        else {
            this.loaderNavbar = false;
            this.pnotifyService.error('Não foi encontrado nenhum item no arquivo CSV para exportação ou o modelo está incorreto.');
        }
    }
    //mostra os itens que foram atualizados e os novos itens cadastrados
    loadModal(template) {
        this.bsModalService.show(template);
    }
    closeModal() {
        this.bsModalService.hide(0);
    }
    // atualiza os dados já existentes e carrega os novos dados no objeto
    updateValues(template) {
        this.elementsAdded = [];
        this.loaderNavbar = true;
        if (this.content) {
            for (let i = 0; i <= this.content.length; i++) {
                if (this.content[i] != undefined) {
                    this.dados.assocGrupos.forEach(element => {
                        if (element.codGrupo == this.content[i][0]) {
                            element.precos.forEach(element2 => {
                                var last = element.precos.at(-1);
                                if (element2.ufDestino.toUpperCase() == this.content[i][2]
                                    && element2.codEmpresa == this.content[i][1]
                                    && this.content[i][4] == 'OK') {
                                    element2.valorMaterial = parseFloat(this.content[i][3]);
                                    this.elementsAdded.push({
                                        codGrupo: element.codGrupo,
                                        codEmpresa: element2.codEmpresa,
                                        ufDestino: element2.ufDestino.toUpperCase(),
                                        valorMaterial: parseFloat(element2.valorMaterial)
                                    });
                                }
                                else if (element.codGrupo == this.content[i][0]
                                    && this.content[i][4] == 'SEM CADASTRO'
                                    && element2 == last) {
                                    let nomeEmpresa;
                                    this.empresas.forEach(element => {
                                        if (this.content[i][1] == element.codEmpresa) {
                                            nomeEmpresa = element.nomeDeposito;
                                        }
                                    });
                                    element.precos.push({
                                        codAssociacao: null,
                                        codEmpresa: parseInt(this.content[i][1]),
                                        nomeEmpresa: nomeEmpresa,
                                        ufDestino: this.content[i][2],
                                        valorMaterial: parseFloat(this.content[i][3])
                                    });
                                    this.elementsAdded.push({
                                        codGrupo: element.codGrupo,
                                        codEmpresa: parseInt(this.content[i][1]),
                                        ufDestino: this.content[i][2].toUpperCase(),
                                        valorMaterial: parseFloat(this.content[i][3])
                                    });
                                }
                            });
                        }
                    });
                }
            }
            //salva os dados
            this.saveDados(template);
        }
        else {
            this.loaderNavbar = false;
            this.pnotifyService.error('Não foi encontrado nenhum arquivo CSV para exportação.');
        }
    }
    saveDados(template) {
        if (this.elementsAdded.length > 0) {
            this.dados.dataInicialVigencia = new Date();
            this.tabelaPrecosService.saveTabelaPrecos(this.dados, 'update')
                .subscribe({
                next: (response) => {
                    if (response.hasOwnProperty('success') && response.success === true) {
                        this.loaderNavbar = false;
                        this.loadModal(template);
                        this.pnotifyService.success(response.mensagem);
                        this.headers = null;
                        this.content = null;
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
                    this.pnotifyService.error(error.message);
                    this.loaderNavbar = false;
                }
            });
        }
        else {
            this.clearValues();
            this.loaderNavbar = false;
            this.pnotifyService.error('Nenhum item foi adicionado, cheque se os dados estão corretos e se a tabela está de acordo com a tabela de modelo.');
        }
    }
};
ComercialGestaoTabelaPrecosImportarCsvComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _comercial_service__WEBPACK_IMPORTED_MODULE_5__["ComercialService"] },
    { type: _tabela_precos_service__WEBPACK_IMPORTED_MODULE_8__["ComercialGestaoTabelaPrecosService"] },
    { type: _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalService"] }
];
ComercialGestaoTabelaPrecosImportarCsvComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-gestao-tabela-precos-importar-csv',
        template: _raw_loader_importar_csv_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_importar_csv_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _comercial_service__WEBPACK_IMPORTED_MODULE_5__["ComercialService"],
        _tabela_precos_service__WEBPACK_IMPORTED_MODULE_8__["ComercialGestaoTabelaPrecosService"],
        _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"],
        ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalService"]])
], ComercialGestaoTabelaPrecosImportarCsvComponent);



/***/ }),

/***/ "f/+E":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/comercial/gestao/tabela-precos/modais/clone/clone.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ComercialTabelaPrecoCloneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialTabelaPrecoCloneComponent", function() { return ComercialTabelaPrecoCloneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_clone_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./clone.component.html */ "102a");
/* harmony import */ var _clone_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clone.component.scss */ "QF9G");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ng_brazil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-brazil */ "hTrW");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var _tabela_precos_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../tabela-precos.service */ "aAiI");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");






// ng-brazil





let ComercialTabelaPrecoCloneComponent = class ComercialTabelaPrecoCloneComponent {
    constructor(formBuilder, localeService, service, dateService, pnotify) {
        this.formBuilder = formBuilder;
        this.localeService = localeService;
        this.service = service;
        this.dateService = dateService;
        this.pnotify = pnotify;
        this.MASKS = ng_brazil__WEBPACK_IMPORTED_MODULE_6__["MASKS"];
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.formValue = {};
        this.loading = true;
        this.saving = false;
        this.localeService.use('pt-br');
        this.bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' }, { adaptivePosition: true }, { showWeekNumbers: false });
    }
    ngOnInit() {
        /* this.setForm(); */
    }
    ngOnChanges(changes) {
        if (!(changes === null || changes === void 0 ? void 0 : changes.formValue)) {
            return;
        }
        let currentValue = changes === null || changes === void 0 ? void 0 : changes.formValue.currentValue;
        if (!this.form) {
            this.setForm();
        }
        this.getDetalhes(currentValue === null || currentValue === void 0 ? void 0 : currentValue.codPreco);
    }
    setForm() {
        this.form = this.formBuilder.group({
            codPreco: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            nomePreco: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            codTabelaClonada: [null],
            dataInicialVigencia: [this.dateService.getToday(), [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            dataFinalVigencia: [null],
            faixaDescontoComercial: [null],
            faixaDescontoGerencial: [null],
            percentualAcrescimo: [null],
            percentualDesconto: [null],
            assocGrupos: [null],
        });
    }
    onClose() {
        this.close.emit(true);
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
    saveTabelaPrecos(params) {
        var _a, _b, _c, _d;
        if (params.dataFinalVigencia == '' ||
            params.dataFinalVigencia == null ||
            params.dataFinalVigencia == undefined) {
            params['dataFinalVigencia'] = '';
        }
        if (params.percentualAcrescimo == 0) {
            params.percentualAcrescimo = null;
        }
        if (params.percentualDesconto == 0) {
            params.percentualDesconto = null;
        }
        params['codTabelaClonada'] = (_b = (_a = params === null || params === void 0 ? void 0 : params.codPreco) === null || _a === void 0 ? void 0 : _a.toString()) === null || _b === void 0 ? void 0 : _b.slice();
        delete params['codPreco'];
        const acrescimo = params === null || params === void 0 ? void 0 : params.percentualAcrescimo;
        const desconto = params === null || params === void 0 ? void 0 : params.percentualDesconto;
        if (acrescimo > 0) {
            (_c = params === null || params === void 0 ? void 0 : params.assocGrupos) === null || _c === void 0 ? void 0 : _c.forEach((element) => {
                element.precos.forEach((preco) => {
                    preco.valorMaterial *= 1 + acrescimo / 100;
                });
            });
        }
        if (desconto > 0) {
            (_d = params === null || params === void 0 ? void 0 : params.assocGrupos) === null || _d === void 0 ? void 0 : _d.forEach((element) => {
                element.precos.forEach((preco) => {
                    preco.valorMaterial *= 1 - desconto / 100;
                });
            });
        }
        this.saving = true;
        this.service
            .saveTabelaPrecos(params, 'insert')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => {
            this.saving = false;
        }))
            .subscribe({
            next: (response) => {
                if (response['success'] == true) {
                    this.pnotify.success('Tabela criada com sucesso!');
                    this.onClose();
                }
                else {
                    this.pnotify.error('Falha ao criar a tabela');
                }
            },
            error: (error) => {
                this.pnotify.error('Ocorreu um erro ao processar a solicitação.');
            }
        });
    }
    onDesativarAcrescimo() {
        if (this.form.value.percentualDesconto > 0) {
            this.form.controls.percentualAcrescimo.disable();
        }
        else if (this.form.value.percentualDesconto == 0 ||
            this.form.value.percentualDesconto == null) {
            this.form.controls.percentualAcrescimo.enable();
        }
    }
    onDesativarDesconto() {
        if (this.form.value.percentualAcrescimo > 0) {
            this.form.controls.percentualDesconto.disable();
        }
        else if (this.form.value.percentualAcrescimo == 0 ||
            this.form.value.percentualAcrescimo == null) {
            this.form.controls.percentualDesconto.enable();
        }
    }
    getDetalhes(codTabela) {
        this.loading = true;
        this.service
            .getDetalhes(codTabela)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => {
            this.loading = false;
        }))
            .subscribe({
            next: (response) => {
                var _a, _b, _c;
                if (response['success']) {
                    let data = response['data'];
                    data.dataInicialVigencia = this.dateService.getToday();
                    data.dataFinalVigencia = (data === null || data === void 0 ? void 0 : data.dataFinalVigencia) ? new Date(data.dataFinalVigencia)
                        : '';
                    data.codTabelaClonada = (_b = (_a = data.codPreco) === null || _a === void 0 ? void 0 : _a.toString()) === null || _b === void 0 ? void 0 : _b.slice();
                    (_c = data === null || data === void 0 ? void 0 : data.assocGrupos) === null || _c === void 0 ? void 0 : _c.map((grupo) => {
                        var _a;
                        (_a = grupo === null || grupo === void 0 ? void 0 : grupo.precos) === null || _a === void 0 ? void 0 : _a.map((preco) => {
                            preco.codAssociacao = '';
                        });
                    });
                    // delete data.codPreco;
                    delete data.nomeUsuario;
                    this.form.patchValue(data);
                }
                else {
                    this.pnotify.error('Falha ao consultar os dados da tabela.');
                }
            },
            error: (error) => {
                this.pnotify.error('Ocorreu um erro ao processar a solicitação.');
            }
        });
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
        let formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
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
ComercialTabelaPrecoCloneComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsLocaleService"] },
    { type: _tabela_precos_service__WEBPACK_IMPORTED_MODULE_8__["ComercialGestaoTabelaPrecosService"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_9__["DateService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"] }
];
ComercialTabelaPrecoCloneComponent.propDecorators = {
    close: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    formValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
};
ComercialTabelaPrecoCloneComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'comercial-tabela-preco-clone',
        template: _raw_loader_clone_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_clone_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsLocaleService"],
        _tabela_precos_service__WEBPACK_IMPORTED_MODULE_8__["ComercialGestaoTabelaPrecosService"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_9__["DateService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"]])
], ComercialTabelaPrecoCloneComponent);



/***/ }),

/***/ "g+Ru":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/gestao/tabela-precos/visao-comercial/visao-comercial.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-navbar *ngIf=\"loadingNavBar\"></loader-spinner-navbar>\n<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\n<app-header [appTitle]=\"appTitle\">\n  <button\n    type=\"button\"\n    [routerLink]=\"\"\n    (click)=\"onLimpar()\">\n    Limpar\n  </button>\n  <button type=\"button\" (click)=\"onFilter()\">\n    Filtrar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <advanced-filter>\n        <form [formGroup]=\"form\" autocomplete=\"off\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-lg-3\">\n              <label for=\"tabela\">Tabela</label>\n              <ng-select\n                [searchable]=\"true\"\n                [clearable]=\"false\"\n                [closeOnSelect]=\"true\"\n                [items]=\"tabelas\"\n                formControlName=\"tabela\"\n                [virtualScroll]=\"true\"\n                labelForId=\"tabela\"\n                bindValue=\"codPreco\"\n                bindLabel=\"nomePreco\"\n                >\n              </ng-select>\n            </div>\n            <div class=\"form-group col-lg-2\">\n              <label for=\"codMaterial\">cód. material</label>\n              <input class=\"form-control\" id=\"codMaterial\" type=\"text\" formControlName=\"codMaterial\"\n                placeholder=\"Código material...\"\n                (keydown.enter)=\"onFilter()\">\n            </div>\n            <div class=\"form-group col-lg-4\">\n              <label for=\"nomeMaterial\">nome material</label>\n              <input class=\"form-control\" id=\"nomeMaterial\" type=\"text\" formControlName=\"nomeMaterial\"\n                placeholder=\"nome material...\"\n                (keydown.enter)=\"onFilter()\">\n            </div>\n            <div class=\"form-group col-lg-2\">\n              <label for=\"codLinha\">Linha</label>\n              <ng-select\n                [searchable]=\"true\"\n                [clearable]=\"false\"\n                [closeOnSelect]=\"true\"\n                [items]=\"linhas\"\n                formControlName=\"codLinha\"\n                [virtualScroll]=\"true\"\n                labelForId=\"codLinha\"\n                bindLabel=\"descricao\"\n                bindValue=\"id\"\n                >\n                <!-- (change)=\"onChangeLinha($event.id)\" -->\n              </ng-select>\n            </div>\n            <div class=\"form-group col-lg-1\">\n              <label for=\"registros\">Registros</label>\n              <select class=\"form-control\" id=\"registros\" formControlName=\"registros\">\n                <option>25</option>\n                <option>50</option>\n                <option>100</option>\n                <option>200</option>\n                <option>300</option>\n              </select>\n            </div>\n          </div>\n        </form>\n      </advanced-filter>\n    </div>\n  </div>\n  <div class=\"row\" *ngIf=\"!dadosEmpty && !boolimpar\">\n    <div [ngClass]=\"{'col': !showDetailPanel, 'col-6 pr-0': showDetailPanel}\">\n      <custom-table [config]=\"tableConfig\">\n        <ng-template #thead let-thead>\n          <tr>\n            <th nowrap scope=\"col\" class=\"hover\">\n              <thead-sorter value=\"Código\" [active]=\"orderBy == 'codMaterial'\" [sort]=\"orderType\"\n                (click)=\"setOrderBy('codMaterial')\">\n              </thead-sorter>\n            </th>\n            <th nowrap scope=\"col\" class=\"hover\">\n              <thead-sorter value=\"Material\" [active]=\"orderBy == 'nomeMaterial'\" [sort]=\"orderType\"\n                (click)=\"setOrderBy('nomeMaterial')\">\n              </thead-sorter>\n            </th>\n            <th></th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr *ngFor=\"let item of dados\" [class.table-active]=\"item.codMaterial == codigoSelecionado\">\n            <td nowrap class=\"hover text-left\" [ngClass]=\"classStatusBorder(item)\" (click)=\"getMateriaisDetalhes(item)\">{{ item.codMaterial }}</td>\n            <td nowrap class=\"hover text-left\" (click)=\"getMateriaisDetalhes(item)\">{{ item.nomeMaterial }}</td>\n            <td></td>\n          </tr>\n        </ng-template>\n      </custom-table>\n      <div class=\"d-flex justify-content-center mt-3\" *ngIf=\"dados.length > maxSize\">\n        <pagination [maxSize]=\"maxSize\" [(totalItems)]=\"totalItems\" (pageChanged)=\"onPageChanged($event)\"\n          [(itemsPerPage)]=\"itemsPerPage\" [boundaryLinks]=\"true\" [(ngModel)]=\"currentPage\" previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\">\n        </pagination>\n      </div>\n    </div>\n    <div class=\"col-6\" [hidden]=\"!showDetailPanel\">\n      <detail-panel panelTitle=\"{{materialSelecionado}}\">\n        <custom-table *ngIf=\"dadosDetalhes.length > 0\">\n          <ng-template #thead let-thead>\n            <tr>\n              <th scope=\"col\">Empresa</th>\n              <th scope=\"col\" class=\"text-center\">UF</th>\n              <th scope=\"col\">Valor</th>\n            </tr>\n          </ng-template>\n          <ng-template #tbody let-tbody>\n            <tr *ngFor=\"let item of dadosDetalhes\">\n              <td>{{ item.nomeEmpresa | uppercase }}</td>\n              <td class=\"text-center\">{{ item.ufDestino | uppercase }}</td>\n              <td>{{ item.valorMaterial | currency:'BRL' }}</td>\n            </tr>\n          </ng-template>\n        </custom-table>\n      </detail-panel>\n    </div>\n  </div>\n  <empty-result message=\"Nenhuma informação encontrada\" *ngIf=\"dadosEmpty && dadosLoaded && !boolimpar\"></empty-result>\n</app-body>\n");

/***/ }),

/***/ "i6rB":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/comercial/gestao/tabela-precos/importar-csv/importar-csv.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2dlc3Rhby90YWJlbGEtcHJlY29zL2ltcG9ydGFyLWNzdi9pbXBvcnRhci1jc3YuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "jCCp":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/comercial/gestao/tabela-precos/visao-comercial/visao-comercial.component.scss ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2dlc3Rhby90YWJlbGEtcHJlY29zL3Zpc2FvLWNvbWVyY2lhbC92aXNhby1jb21lcmNpYWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "lKda":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/comercial/gestao/tabela-precos/tabela-precos-routing.module.ts ***!
  \****************************************************************************************/
/*! exports provided: ComercialGestaoTabelaPrecosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialGestaoTabelaPrecosRoutingModule", function() { return ComercialGestaoTabelaPrecosRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formulario/formulario-resolver.guard */ "RzZb");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lista/lista.component */ "NzU4");
/* harmony import */ var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./formulario/formulario.component */ "1QAd");
/* harmony import */ var _visao_comercial_visao_comercial_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./visao-comercial/visao-comercial.component */ "B7b/");
/* harmony import */ var _importar_csv_importar_csv_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./importar-csv/importar-csv.component */ "bAYR");



// Guards
// import { FormDeactivateGuard } from 'src/app/guards/form-deactivate.guard';

// Components




const routes = [
    {
        path: 'lista', component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_4__["ComercialGestaoTabelaPrecosListaComponent"]
    },
    {
        path: 'novo',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_5__["ComercialGestaoTabelaPrecosFormularioComponent"],
        resolve: {
            detalhes: _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_3__["ComercialGestaoTabelaPrecosFormularioResolverGuard"],
        },
    },
    {
        path: 'editar/:id',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_5__["ComercialGestaoTabelaPrecosFormularioComponent"],
        resolve: {
            detalhes: _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_3__["ComercialGestaoTabelaPrecosFormularioResolverGuard"],
        },
    },
    {
        path: 'visao-comercial', component: _visao_comercial_visao_comercial_component__WEBPACK_IMPORTED_MODULE_6__["ComercialGestaoTabelaPrecoVisaoComercialComponent"]
    },
    {
        path: 'importar-csv/:id',
        component: _importar_csv_importar_csv_component__WEBPACK_IMPORTED_MODULE_7__["ComercialGestaoTabelaPrecosImportarCsvComponent"],
    },
    {
        path: '',
        redirectTo: 'lista',
        pathMatch: 'full',
    },
];
let ComercialGestaoTabelaPrecosRoutingModule = class ComercialGestaoTabelaPrecosRoutingModule {
};
ComercialGestaoTabelaPrecosRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ComercialGestaoTabelaPrecosRoutingModule);



/***/ }),

/***/ "ly1K":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/comercial/gestao/tabela-precos/formulario/formulario.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2dlc3Rhby90YWJlbGEtcHJlY29zL2Zvcm11bGFyaW8vZm9ybXVsYXJpby5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "qcX5":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/gestao/tabela-precos/formulario/formulario.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\n<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<app-header [appTitle]=\"appTitle\">\n  <button\n    type=\"button\"\n    (click)=\"onCancel()\"\n    [disabled]=\"submittingForm\">\n    Cancelar\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"onSubmit()\"\n    [disabled]=\"!form.valid || !submittingForm || !submitAssocGrupo\" >\n    Salvar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\n  <div class=\"row\">\n    <div class=\"col-lg-6\">\n      <form [formGroup]=\"form\" autocomplete=\"off\">\n        <div class=\"mtc-title mb-2\">Dados da tabela</div>\n        <hr>\n        <div class=\"form-row\">\n          <div class=\"form-group col-lg-12\">\n            <label for=\"nomePreco\">Descrição da Tabela</label>\n            <input\n              class=\"form-control\"\n              id=\"email\"\n              type=\"text\"\n              formControlName=\"nomePreco\"\n              [ngClass]=\"onFieldError('nomePreco') + ' ' + onFieldRequired('nomePreco')\">\n            <invalid-form-control [show]=\"onFieldInvalid('nomePreco')\" message=\"Descrição é obrigatório.\"></invalid-form-control>\n          </div>\n        </div>\n\n        <div class=\"form-row\">\n          <div class=\"form-group col-lg-6\">\n            <label for=\"dataInicialVigencia\">Dt Inicio Vigência</label>\n            <input\n              class=\"form-control\"\n              id=\"dataInicialVigencia\"\n              type=\"text\"\n              formControlName=\"dataInicialVigencia\"\n              bsDatepicker\n              [ngClass]=\"onFieldError('dataInicialVigencia') + ' ' + onFieldRequired('dataInicialVigencia')\">\n          </div>\n          <div class=\"form-group col-lg-6\">\n            <label for=\"dataFinalVigencia\">Dt Fim Vigência</label>\n            <input\n            class=\"form-control\"\n            id=\"dataFinalVigencia\"\n            type=\"text\"\n            formControlName=\"dataFinalVigencia\"\n            bsDatepicker\n            [ngClass]=\"onFieldError('dataFinalVigencia') + ' ' + onFieldRequired('dataFinalVigencia')\">\n          </div>\n        </div>\n\n        <div class=\"form-row\">\n          <div class=\"form-group col-lg-6\">\n            <label for=\"faixaDescontoComercial\">Faixa de Desconto Comercial</label>\n            <input\n            class=\"form-control\"\n            id=\"faixaDescontoComercial\"\n            type=\"text\"\n            formControlName=\"faixaDescontoComercial\"\n            currencyMask\n            [options]=\"{ align: 'left', thousands: '.', decimal: ',', prefix: '', suffix: '%' }\"\n            >\n          </div>\n          <div class=\"form-group col-lg-6\">\n            <label for=\"faixaDescontoGerencial\">Faixa de Desconto Gerencial</label>\n            <input\n            class=\"form-control\"\n            id=\"faixaDescontoGerencial\"\n            type=\"text\"\n            formControlName=\"faixaDescontoGerencial\"\n            currencyMask\n            [options]=\"{ align: 'left', thousands: '.', decimal: ',', prefix: '', suffix: '%' }\"\n            >\n          </div>\n        </div>\n\n        <hr>\n        <div class='mt-3' *ngIf=\"showGrupos && form.value.assocGrupos.length > 0\" formArrayName=\"assocGrupos\">\n          <div class=\"row\">\n            <div class=\"col\">\n              <div class=\"mtc-title\">Grupos associados</div>\n              <custom-table [config]=\"tableConfigAssocGrupos\">\n                <ng-template #thead let-thead>\n                  <tr>\n                    <th scope=\"col\" style=\"width: 90%\"></th>\n                    <th scope=\"col\" style=\"width: 5%\"></th>\n                    <th scope=\"col\" style=\"width: 5%\"></th>\n                  </tr>\n                </ng-template>\n                <ng-template #tbody let-tbody>\n                  <tr *ngFor=\"let item of assocGrupos.controls; let i = index\" [formGroupName]=\"i\" \n                  onclick=\"var s = this.parentNode.querySelector('tr.table-active'); s && s.classList.remove('table-active'); this.classList.add('table-active');\">\n                    <td style=\"width: 80%\">\n                      {{ form.value.assocGrupos[i].codGrupo }} - {{ form.value.assocGrupos[i].nomeGrupo | uppercase }}\n                    </td>\n                    <td class=\"text-center\" style=\"width: 5%\" placement=\"left\" tooltip=\"Alterar valores do grupo\">\n                      <button type=\"button\" class=\"btn-icon-sm\" (click)=\"openModalPercent(percentmateriais, i, item)\">\n                        <i class=\"fas fa-percent\"></i>\n                      </button>\n                    </td>\n                    <td class=\"text-center\" style=\"width: 5%\" placement=\"left\" tooltip=\"Materiais associados\">\n                      <button type=\"button\" class=\"btn-icon-sm\" (click)=\"openModalMateriais(templatemateriais, i, item)\">\n                        <i class=\"fas fa-question\"></i>\n                      </button>\n                    </td>\n                    <td class=\"text-center\" style=\"width: 5%\" placement=\"left\" tooltip=\"Editar\">\n                      <button type=\"button\" class=\"btn-icon-sm\" (click)=\"openModal(template, i, item)\">\n                        <i class=\"fas fa-edit\"></i>\n                      </button>\n                    </td>\n                    <td style=\"width: 5%\">\n                      <button type=\"button\" class=\"btn-icon-sm\"  placement=\"left\" (click)=\"onDeleteGrupo(i, item)\" tooltip=\"Excluir\">\n                        <i class=\"fas fa-trash\"></i>\n                      </button>\n                    </td>\n                  </tr>\n                </ng-template>\n              </custom-table>\n            </div>\n          </div>\n          <div class=\"row\" *ngIf=\"showGrupos && form.value.assocGrupos.length === 0\">\n            <div class=\"col\">\n              <message\n                icon=\"fas fa-exchange-alt\"\n                text=\"Nenhuma associação encontrada\">\n              </message>\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n    <div class=\"col-lg-6 border-left\">\n      <div class=\"row mb-2\">\n        <div class=\"col-lg-9\">\n          <div class=\"mtc-title\">Pesquisa grupos para associação</div>\n        </div>\n        <div class=\"col\">\n          <div class=\"d-flex justify-content-end\">\n            <button\n              type=\"button\"\n              class=\"btn btn-sm btn-outline-secondary\"\n              (click)=\"onFilter()\"\n              [disabled]=\"searching === true\">\n              <i class=\"fas fa-search\"></i>\n              <span>Pesquisar</span>\n            </button>\n          </div>\n          <!-- <button type=\"button\" class=\"btn btn-light\" (click)='onFilter()'>Pesquisar</button> -->\n        </div>\n      </div>\n      <advanced-filter>\n        <form [formGroup]=\"formFilter\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-lg-9\">\n              <label for=\"grupo\">Descrição do grupo</label>\n              <input\n                class=\"form-control\"\n                id=\"idnomePreco\"\n                type=\"text\"\n                formControlName=\"grupo\">\n            </div>\n            <div class=\"form-group col-lg-3\">\n              <label for=\"situacao\">Situação</label>\n              <select\n                class=\"form-control custom-select\"\n                id=\"codSituacao\"\n                formControlName=\"situacao\">\n                <option value=\"\">Todos</option>\n                <option value=\"0\">Inativo</option>\n                <option value=\"1\">Ativo</option>\n              </select>\n            </div>\n          </div>\n        </form>\n      </advanced-filter>\n\n      <div>\n        <div>\n          <div *ngIf=\"dados.length > 0\">\n            <div class=\"row mb-2\" >\n              <div class=\"col mt-auto\">\n                <div class=\"mtc-title mb-0\">Seleção de grupos</div>\n              </div>\n              <div class=\"col\">\n                <div class=\"d-flex justify-content-end\">\n                  <button\n                    type=\"button\"\n                    class=\"btn btn-sm btn-outline-primary\"\n                    (click)=\"onAssociarGrupos()\"\n                    [disabled]=\"searching === true\">\n                    <i class=\"fas fa-exchange-alt\"></i>\n                    <span>Associar</span>\n                  </button>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col\">\n                <custom-table [config]=\"tableConfigMateriais\">\n                  <ng-template #thead let-thead>\n                    <tr>\n                      <th\n                        scope=\"col\"\n                        class=\"text-center\"\n                        style=\"width: 5%\">\n                        <btn-icon\n                          [icon]=\"toggleAll ? 'fas fa-check-square' : 'far fa-square'\"\n                          size=\"small\"\n                          (click)=\"onToggleAll()\">\n                        </btn-icon>\n                      </th>\n                      <th scope=\"col\" style=\"width: 95%\">Grupo</th>\n                    </tr>\n                  </ng-template>\n                  <ng-template #tbody let-tbody>\n                    <tr *ngFor=\"let item of dados; let i = index;\">\n                      <td class=\"text-center\" style=\"width: 5%\">\n                        <btn-icon\n                          [icon]=\"item.checked == 1 ? 'fas fa-check-square' : 'far fa-square'\"\n                          size=\"small\"\n                          (click)=\"onCheckGrupo(i, item)\">\n                        </btn-icon>\n                      </td>\n                      <td\n                        class=\"hover\"\n                        style=\"width: 95%\"\n                        (click)=\"onCheckGrupo(i, item)\">\n                        {{ item.nomeGrupo | uppercase }}\n                      </td>\n                    </tr>\n                  </ng-template>\n                </custom-table>\n              </div>\n            </div>\n          </div>\n            <div class=\"row\" *ngIf=\"searching === true\">\n              <div class=\"col\">\n                <message\n                  icon=\"fas fa-cog fa-spin\"\n                  text=\"Estamos pesquisando os materiais para você...\">\n                </message>\n              </div>\n            </div>\n            <div *ngIf=\"searching === false\">\n              <div class=\"row\" *ngIf=\"dadosEmpty && dadosLoaded\">\n                <div class=\"col\">\n                  <message\n                    icon=\"fas fa-box-open\"\n                    text=\"Nenhuma informação encontrada\">\n                  </message>\n                </div>\n              </div>\n              <div class=\"row\" *ngIf=\"dados.length === 0 && !firstSearch\">\n                <div class=\"col\">\n                  <message\n                    icon=\"fas fa-search\"\n                    text=\"Preecha os campos acima para pesquisar materiais\">\n                  </message>\n                </div>\n              </div>\n            </div>\n          </div>\n      </div>\n\n    </div>\n  </div>\n</app-body>\n\n<ng-template #template>\n  <div class=\"modal-header\">\n    <h4 id=\"dialog-sizes-name1\" class=\"modal-title pull-left\">\n    {{ this.codGrupo }} - {{ this.grupoNome }}\n    </h4>\n    <button type=\"button\" class=\"close pull-right\" (click)=\"closeModalUpdate(template)\" aria-label=\"Close\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <form class=\"form-row mb-2\" [formGroup]=\"formPrecos\" autocomplete=\"off\">\n      <div class=\"form-group col-lg-6\">\n        <label for=\"codEmpresa\">Empresa</label>\n        <ng-select\n          type='text'\n          [searchable]=\"true\"\n          [clearable]=\"false\"\n          [items]=\"unidades\"\n          [virtualScroll]=\"true\"\n          [hideSelected]=\"true\"\n          [closeOnSelect]=\"true\"\n          placeholder=\"Selecione...\"\n          bindLabel=\"nomeEmpresa\"\n          bindValue=\"idEmpresa\"\n          formControlName=\"codEmpresa\"\n          >\n        </ng-select>\n      </div>\n      <div class=\"form-group col-lg-2\">\n        <label for=\"ufDestino\">UF Destino</label>\n        <ng-select\n        type=\"text\"\n        [searchable]=\"true\"\n        [clearable]=\"false\"\n        [items]=\"estados\"\n        [virtualScroll]=\"true\"\n        [hideSelected]=\"true\"\n        [closeOnSelect]=\"true\"\n        placeholder=\"Selecione...\"\n        bindLabel=\"sigla\"\n        bindValue=\"sigla\"\n        formControlName=\"ufDestino\"\n        >\n        </ng-select>\n      </div>\n      <div class=\"form-group col-lg-3\">\n        <label for=\"valorMaterial\">Valor</label>\n        <input\n          style=\"text-align: center;\"\n          class=\"form-control\"\n          type=\"text\"\n          formControlName=\"valorMaterial\"\n          currencyMask [options]=\"{ align: 'left', prefix: '', thousands: '.', decimal: ',', precision: 2 }\"\n          >\n      </div>\n      <div class=\"form-group col-lg-1 d-flex justify-content-center align-self-center mt-3\">\n        <button type=\"button\" class=\"btn-icon-sm d-flex justify-content-center align-middle\" (click)=\"onAssociarPrecos()\" tooltip=\"Adicionar Valor\">\n        <i class=\"fas fa-plus\"></i>\n        </button>\n      </div>\n    </form>\n    <custom-table [config]=\"tableConfigPrecos\">\n      <ng-template #thead let-thead>\n        <tr>\n          <th scope=\"col\" style=\"width: 40%\">Empresa</th>\n          <th scope=\"col\" style=\"width: 20%\">UF Destino</th>\n          <th scope=\"col\" style=\"width: 25%\">Valor</th>\n          <th scope=\"col\" style=\"width: 5%\"></th>\n        </tr>\n      </ng-template>\n      <ng-template #tbody let-tbody>\n        <tr *ngFor=\"let item of precosEstado; let i = index\">\n          <td style=\"width: 30%\" >\n            {{ item.nomeEmpresa | uppercase }}\n          </td>\n          <td style=\"width: 20%\">\n            {{ item.ufDestino | uppercase }}\n          </td>\n          <td style=\"width: 20%\">\n            <span *ngIf=\"enableEditIndex != i || editMode == false\">{{ item.valorMaterial | number:'1.2-2' }}</span>\n            <input *ngIf=\"editMode && enableEditIndex == i\" [(ngModel)]=\"valorMaterialAlterado\"\n            currencyMask [options]=\"{ align: 'left', prefix: '', thousands: '.', decimal: ',', precision: 2 }\" \n            type=\"text\" \n            class=\"form-control\" \n            style=\"width: 100%\">\n          </td>\n          <td>\n            <button *ngIf=\"enableEditIndex != i || editMode == false\" type=\"button\" class=\"btn-icon-sm\" (click)=\"editMode = true;\" (click)=\"enableEdition(i, item)\" tooltip=\"Editar\">\n              <i class=\"fas fa-edit\"></i>\n            </button>\n          </td>\n          <td>\n            <button *ngIf=\"editMode && enableEditIndex == i\" type=\"button\" class=\"btn-icon-sm\" (click)=\"onUpdateValor(item, i, valorMaterialAlterado); editMode = false\" tooltip=\"Adicionar\">\n              <i class=\"fas fa-check\"></i>\n            </button>\n          </td>\n          <td>\n            <button *ngIf=\"editMode && enableEditIndex == i\" type=\"button\" class=\"btn-icon-sm\" (click)=\"editMode = false\" tooltip=\"Cancelar\">\n              <i class=\"fas fa-times\"></i>\n            </button>\n          </td>\n          <td>\n            <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onDeleteValor(item, i)\" tooltip=\"Excluir\">\n              <i class=\"fas fa-trash\"></i>\n            </button>\n          </td>\n        </tr>\n      </ng-template>\n    </custom-table>\n  </div>\n</ng-template>\n\n<ng-template #templatemateriais>\n  <div class=\"modal-header\">\n    <h4 id=\"dialog-sizes-name1\" class=\"modal-title pull-left\">\n    Materiais associados\n    </h4>\n    <button type=\"button\" class=\"close pull-right\" (click)=\"closeModal(templatemateriais)\" aria-label=\"Close\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\" style=\"height:350px; overflow-x: hidden; overflow-y: scroll;\" (onClose)=\"select.handleClearClick()\">\n    <label for=\"assocGrupos\">Pesquisa:</label>\n    <ng-select\n        type=\"text\"\n        [searchable]=\"true\"\n        [clearable]=\"true\"\n        [items]=\"materiaisAssoc\"\n        [virtualScroll]=\"true\"\n        [hideSelected]=\"false\"\n        [closeOnSelect]=\"true\"\n        (change)=\"changeFn(selection)\" \n        [(ngModel)]=\"selection\"\n        placeholder=\"Selecione...\"\n        bindLabel=\"nomeMaterial\"\n        bindValue=\"codMaterial\"\n        >\n        </ng-select>\n    <custom-table [config]=\"tableConfigPrecos\" class=\"m-3\">\n      <ng-template #thead let-thead>\n        <tr>\n          <th scope=\"col\" style=\"width: 5%\">Código</th>\n          <th scope=\"col\" style=\"width: 50%\">Material</th>\n          <th scope=\"col\" style=\"width: 10%\">Linha</th>\n          <th scope=\"col\" style=\"width: 20%\">Classe</th>\n        </tr>\n      </ng-template>\n      <ng-template #tbody let-tbody *ngIf=\"!showMaterial\">\n        <tr *ngFor=\"let item of materiaisAssoc; let i = index\">\n          <td>\n            {{ item.codMaterial }}\n          </td>\n          <td style=\"width: 50%\">\n            {{ item.nomeMaterial | uppercase }}\n          </td>\n          <td>\n            {{ item.nomeLinha | uppercase}}\n          </td>\n          <td style=\"width: 20%\">\n            {{ item.nomeClasse | uppercase }}\n          </td>\n        </tr>\n      </ng-template>\n      <ng-template #tbody let-tbody *ngIf=\"showMaterial\">\n        <tr *ngFor=\"let item of materiaisAssoc2; let i = index\">\n          <td>\n            {{ item.codMaterial }}\n          </td>\n          <td>\n            {{ item.nomeMaterial | uppercase }}\n          </td>\n          <td>\n            {{ item.nomeLinha | uppercase }}\n          </td>\n          <td>\n            {{ item.nomeClasse | uppercase }}\n          </td>\n        </tr>       \n      </ng-template>\n    </custom-table>    \n  </div>\n</ng-template>\n\n<ng-template #percentmateriais>\n  <div class=\"modal-header\">\n    <h4 id=\"dialog-sizes-name1\" class=\"modal-title pull-left\">\n    {{ this.codGrupo }} - {{ this.grupoNome }}\n    </h4>\n    <button type=\"button\" class=\"close pull-right\" (click)=\"closeModalUpdate(percentmateriais)\" aria-label=\"Close\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <form class=\"form-row mb-2\" [formGroup]=\"formPrecos\" autocomplete=\"off\"> \n      <div class=\"col-lg-3\">\n      </div>      \n      <div class=\"form-group col-lg-6\">\n        <label for=\"percent\">Digite a porcentagem:</label>        \n        <input\n          #percent\n          formControlName=\"percentual\"\n          style=\"text-align: center;\"\n          class=\"form-control\"\n          type=\"text\"\n          placeholder=\"0.0%\"\n          currencyMask [options]=\"{ align: 'center', prefix: '', suffix:'%', precision: 1, allowNegative: false }\"\n          >\n      </div>\n      <div class=\"form-group col-lg-3 justify-content-center align-self-center mt-3\">\n        <button type=\"button\" class=\"btn-icon d-flex justify-content-center align-middle ml-1\" (click)=\"onUpdatePercentagem(percent.value)\" tooltip=\"Aumentar porcentagem de valor dos itens\">\n        <i class=\"fas fa-redo\"></i>\n        </button>\n      </div>      \n      <div class=\"col-lg-3\"></div>\n    </form>   \n    <custom-table [config]=\"tableConfigPrecos\">\n      <ng-template #thead let-thead>\n        <tr>\n          <th scope=\"col\" style=\"width: 40%\">Empresa</th>\n          <th scope=\"col\" style=\"width: 20%\">UF Destino</th>\n          <th scope=\"col\" style=\"width: 25%\">Valor</th>\n          <th scope=\"col\" style=\"width: 5%\"></th>\n        </tr>\n      </ng-template>\n      <ng-template #tbody let-tbody>\n        <tr *ngFor=\"let item of precosEstado; let i = index\">\n          <td style=\"width: 30%\" >\n            {{ item.nomeEmpresa | uppercase }}\n          </td>\n          <td style=\"width: 20%\">\n            {{ item.ufDestino | uppercase }}\n          </td>\n          <td style=\"width: 20%\">\n            <span>{{ item.valorMaterial | number:'1.2-2' }}</span>           \n          </td>          \n          <td></td>\n        </tr>\n      </ng-template>\n    </custom-table>        \n  </div>\n   \n</ng-template>");

/***/ }),

/***/ "v/ct":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/comercial/gestao/tabela-precos/lista/lista.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .tooltip-inner {\n  max-width: 700px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21lcmNpYWwvZ2VzdGFvL3RhYmVsYS1wcmVjb3MvbGlzdGEvbGlzdGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9jb21lcmNpYWwvZ2VzdGFvL3RhYmVsYS1wcmVjb3MvbGlzdGEvbGlzdGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLnRvb2x0aXAtaW5uZXJ7XG4gICAgbWF4LXdpZHRoOiA3MDBweCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "v65K":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/gestao/tabela-precos/lista/lista.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\n<app-header appTitle=\"Tabela de Preços\">\n  <!-- <button type=\"button\" [routerLink]=\"['../exportar-csv']\" style=\"color: #090;\">\n    Exportar CSV\n  </button> -->\n  <button type=\"button\" [routerLink]=\"['../novo']\">\n    Adicionar\n  </button>\n  <button type=\"button\" (click)=\"onFilter()\">\n    Filtrar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <advanced-filter>\n        <form [formGroup]=\"form\" autocomplete=\"off\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-lg-2\">\n              <label for=\"descTabela\">Descrição da Tabela</label>\n              <input class=\"form-control\" id=\"descTabela\" type=\"text\" formControlName=\"descTabela\">\n              <invalid-form-control [show]=\"onFieldInvalid('descTabela')\" message=\"Descrição é obrigatório.\">\n              </invalid-form-control>\n            </div>\n            <div class=\"form-group col-lg-3\">\n              <label for=\"dataInicialVigencia\">Dt Inicio Vigência</label>\n              <input class=\"form-control\" id=\"dataInicialVigencia\" type=\"text\" formControlName=\"dataInicialVigencia\"\n                bsDatepicker\n                [ngClass]=\"onFieldError('dataInicialVigencia') + ' ' + onFieldRequired('dataInicialVigencia')\">\n\n            </div>\n            <div class=\"form-group col-lg-3\">\n              <label for=\"dataFinalVigencia\">Dt Fim Vigência</label>\n              <input class=\"form-control\" id=\"dataFinalVigencia\" type=\"text\" formControlName=\"dataFinalVigencia\"\n                bsDatepicker [ngClass]=\"onFieldError('dataFinalVigencia') + ' ' + onFieldRequired('dataFinalVigencia')\">\n\n            </div>\n            <div class=\"form-group col-lg-2\">\n              <label for=\"codMaterial\">Filtro de material</label>\n              <input class=\"form-control\"type=\"text\" id=\"codMaterial\" formControlName=\"codMaterial\">\n            </div>\n            <div class=\"form-group col-lg-1\">\n              <label for=\"codSituacao\">Situação</label>\n              <select class=\"form-control custom-select\" id=\"codSituacao\" formControlName=\"codSituacao\">\n                <option value=\"0\">Todos</option>\n                <option value=\"2\">Inativos</option>\n                <option value=\"1\">Ativos</option>\n              </select>\n            </div>\n            <div class=\"form-group col-lg-1\">\n              <label for=\"registros\">Registros</label>\n              <select class=\"form-control\" id=\"registros\" formControlName=\"registros\">\n                <option>25</option>\n                <option>50</option>\n                <option>100</option>\n                <option>200</option>\n                <option>300</option>\n              </select>\n            </div>\n          </div>\n        </form>\n      </advanced-filter>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\" [ngClass]=\"{'col': !showDetailPanel, 'col-5 pr-0': showDetailPanel}\">\n      <custom-table [config]=\"tableConfig\" *ngIf=\"dadosPagination.length > 0 && !dadosEmpty\">\n        <ng-template #thead let-thead>\n          <tr>\n            <th scope=\"col\" class=\"text-center hover\">\n              <thead-sorter value=\"Código\" [active]=\"orderBy == 'codPreco'\" [sort]=\"orderType\"\n                (click)=\"setOrderBy('codPreco')\">\n              </thead-sorter>\n            </th>\n            <th scope=\"col\">Descrição</th>\n\n            <th scope=\"col\">Dt Inicial</th>\n\n            <th scope=\"col\">Dt Final</th>\n\n            <th scope=\"col\" [hidden]=\"showDetailPanel\">\n              Usuário\n            </th>\n\n            <th scope=\"col\" [hidden]=\"showDetailPanel\"></th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr *ngFor=\"let item of dadosPagination; let i = index;\"\n          onclick=\"var s = this.parentNode.querySelector('tr.table-active'); s && s.classList.remove('table-active'); this.classList.add('table-active');\">\n            <td class=\"text-center hover\" [ngClass]=\"classStatusBorder(item)\">\n              {{ item.codPreco }}\n            </td>\n            <td class=\"hover\" (click)=\"onDetails(item)\">\n              {{ item.nomePreco | uppercase }}\n            </td>\n            <td class=\"hover\" (click)=\"onDetails(item)\">\n              {{ item.dataInicialVigencia | date: 'dd/MM/yyyy' }}\n            </td>\n            <td class=\"hover\" (click)=\"onDetails(item)\">\n              {{ item.dataFinalVigencia | date: 'dd/MM/yyyy' }}\n            </td>\n            <td class=\"hover\" [hidden]=\"showDetailPanel\" (click)=\"onDetails(item)\">\n              {{ item.nomeUsuario | uppercase }}\n\n            </td>\n            <td class=\"text-right\" [hidden]=\"showDetailPanel\">\n              <!-- <span  class=\"mr-3\" tooltip=\"Tabela Clonada, exibir detalhes.\" placement=\"left\" container=\"body\">\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onActivate(i, item)\">\n                  <i class=\"far fa-clone\"></i>\n                </button>\n              </span> -->\n              <span *ngIf=\"item.codSituacao == 1\" class=\"mr-3\" tooltip=\"Importar CSV\" placement=\"left\" container=\"body\">\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onCsv(item)\">\n                  <i class=\"fas fa-table\"></i>\n                </button>\n              </span>\n              <span *ngIf=\"item.codSituacao == 2\" class=\"mr-3\" tooltip=\"Ativar\" placement=\"left\" container=\"body\">\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onActivate(i, item)\">\n                  <i class=\"fas fa-toggle-off\"></i>\n                </button>\n              </span>\n              <span *ngIf=\"item.codSituacao == 1\" class=\"mr-3\" tooltip=\"Inativar\" placement=\"left\" container=\"body\">\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onInactivate(i, item)\">\n                  <i class=\"fas fa-toggle-on\"></i>\n                </button>\n              </span>\n              <span class=\"mr-3\" tooltip=\"Editar\" placement=\"left\" container=\"body\">\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onEdit(item)\">\n                  <i class=\"fas fa-edit\"></i>\n                </button>\n              </span>\n              <span class=\"mr-3\" [tooltip]=\"tolTemplate\" placement=\"left\" container=\"body\">\n                <ng-template #tolTemplate>\n                  <span *ngIf=\"!item.codTabelaClonada\">\n                    <strong>Tabela não clonada</strong>\n                  </span>\n                  <span *ngIf=\"item.codTabelaClonada\">\n                    <table>\n                      <thead>\n                        <tr>\n                          <td colspan=\"2\">Tabela Clonada</td>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr>\n                          <th class=\"text-left\">Percentual de Acréscimo:&nbsp;</th>\n                          <td> {{ item.percentualAcrescimo / 100 | percent : '0.2-2' }}</td>\n                        </tr>\n                        <tr>\n                          <th class=\"text-left\">Percentual de Desconto:&nbsp;</th>\n                          <td> {{ item.percentualDesconto / 100 | percent : '0.2-2' }}</td>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </span>\n                </ng-template>\n                <button type=\"button\" class=\"btn-icon-sm\">\n                  <i class=\"far fa-clone\" [ngClass]=\"{'text-warning': item.codTabelaClonada}\"></i>\n                </button>\n              </span>\n              <span class=\"mr-3\" tooltip=\"Clonar\" placement=\"left\" container=\"body\">\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onClone(item, modalClone)\">\n                  <i class=\"fas fa-clone\"></i>\n                </button>\n              </span>\n            </td>\n          </tr>\n        </ng-template>        \n      </custom-table>\n      <empty-result message=\"Nenhuma informação encontrada\" *ngIf=\"dadosEmpty && dadosLoaded\"></empty-result>\n      <div class=\"d-flex justify-content-center mt-3\" *ngIf=\"totalItems > itemsPerPage && dadosLoaded\">\n        <pagination\n          [maxSize]=\"maxSize\"\n          [(totalItems)]=\"totalItems\"\n          (pageChanged)=\"onPageChanged($event)\"\n          [(itemsPerPage)]=\"itemsPerPage\"\n          [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPage\"\n          previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\"\n          lastText=\"&raquo;\">\n        </pagination>\n      </div>\n    </div>\n    <div class=\"col-7\" [hidden]=\"!showDetailPanel\">\n      \n      <detail-panel [panelTitle]=\"detailPanelTitle\">\n        <div class=\"d-flex w-100\" *ngIf=\"otherDados2.length == 0\">\n          <div class=\"spinner-border spinner-border-sm text-dark my-auto mr-2\"></div>\n          <strong>Carregando itens...</strong>\n        </div>\n        <custom-table [config]=\"tableConfigMateriais\" *ngIf=\"otherDados2.length > 0\">\n          <ng-template #thead let-thead>\n            <tr>\n              <th scope=\"col\" class=\"text-center\">Cód Grupo</th>\n              <th scope=\"col\">Grupo</th>\n              <th scope=\"col\" class=\"text-center\">Cód Material</th>\n              <th scope=\"col\">Material</th>\n            </tr>\n          </ng-template>\n          <ng-template #tbody let-tbody>\n            <tr *ngFor='let item of otherDados2'>\n              <td class=\"text-center\">{{ item.info.codGrupo }}</td>\n              <td>{{ item.info.nomeGrupo }}</td>\n              <td class=\"text-center\">{{ item.info.codMaterial }}</td>\n              <td>{{ item.info.nomeMaterial }}</td>\n              <td>\n                <button type=\"button\" class=\"btn-icon-sm\">\n                  <i class=\"fas fa-money-bill-wave\" placement=\"left\" id=\"tooltip-preco\"        \n                  [tooltip]=\"tooltip\">\n                  <ng-template #tooltip>\n                  <div style=\"width: 100px;\">\n                    <span *ngFor=\"let item2 of item.precos; let i = index;\">\n                      {{ item2.ufDestino + ': R$ '}} {{  item2.valorMaterial | number:'1.2-2'  }}<br>\n                    </span>\n                  </div>\n                  </ng-template>\n                  </i>\n                </button>              \n              </td>\n            </tr>\n          </ng-template>\n        </custom-table>\n      </detail-panel>\n    </div>\n  </div>\n</app-body>\n\n<ng-template #modalClone>\n  <comercial-tabela-preco-clone (close)=\"modalRef.hide()\" [formValue]=\"tabelaPreco\"></comercial-tabela-preco-clone>\n</ng-template>\n");

/***/ }),

/***/ "y1mp":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/gestao/tabela-precos/importar-csv/importar-csv.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\n<app-header [appTitle]=\"appTitle\"> \n<button type=\"button\">\n    <i class=\"fas fa-building\" placement=\"bottom\"   \n    [tooltip]=\"tooltip\">\n    <ng-template #tooltip>\n    <div style=\"width: 190px !important; font-size:0.60rem; text-align: center;\">\n      <span *ngFor=\"let empresa of empresas; let i = index;\">\n        {{ 'ID '+ empresa.codDeposito }} {{ ' - ' + empresa.nomeDeposito }}<br>\n      </span>\n    </div>\n    <div class=\"d-flex w-100\" *ngIf=\"!empresas > 0\">\n      <div class=\"spinner-border spinner-border-sm text-dark my-auto mr-2\"></div>\n      <strong>Carregando itens...</strong>\n    </div>\n    </ng-template>\n    </i>\n  </button>             \n<button type=\"button\" (click)=\"downloadModel()\">\n    Baixar arquivo de modelo\n</button>\n\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">   \n  <div class=\"row\">    \n    <div class=\"col-12 text-center\">\n      <div class=\"text-center\" *ngIf=\"!nomePreco\">\n        <div class=\"spinner-border spinner-border-sm text-dark my-auto mr-2 text-center\"></div>\n      </div>\n      <h3 *ngIf=\"nomePreco\">{{ codPreco }} - {{ nomePreco | uppercase}}</h3>\n    </div>\n  </div>\n  <div class=\"row\">\n      <div class=\"col-1\">\n        <label\n          for=\"novoCsv\"\n          class=\"d-flex justify-content-start align-items-center\"\n          style=\"cursor: pointer\">\n          <p class=\"btn btn-sm btn-outline-primary m-0\">\n            <i class=\"fas fa-plus\"></i>\n            <span>Enviar</span>\n          </p>\n        </label>\n        <input            \n            id=\"novoCsv\"\n            type=\"file\" \n            class=\"d-none\" \n            accept=\".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel\"\n            (change)=\"changeListener($event)\"/>       \n      </div>\n      <div class=\"col-1\">\n        <button type=\"button\" class=\"btn-icon-sm\">\n        <i class=\"fas fa-question-circle\" placement=\"top\" [tooltip]=\"tooltip\">\n          <ng-template #tooltip>\n            <div style=\"width: 190px !important; font-size:0.63rem; text-align: center;\">\n              <span *ngFor=\"let empresa of empresas; let i = index;\">\n                {{ 'ID '+ empresa.codDeposito }} {{ ' - ' + empresa.nomeDeposito }}<br>\n              </span>\n            </div>\n            <div class=\"d-flex w-100\" *ngIf=\"!empresas > 0\">\n              <div class=\"spinner-border spinner-border-sm text-dark my-auto mr-2\"></div>\n              <strong>Carregando itens...</strong>\n            </div>\n          </ng-template>\n        </i>\n        </button>\n      </div>\n      <div class=\"col-8\">\n      </div>      \n      <div class=\"col-2\">\n        <div class=\"d-flex justify-content-around\">         \n          <button type=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"clearValues()\" [disabled]=\"!content\">\n            Limpar\n            </button>\n            <button type=\"button\" class=\"btn btn-sm btn-primary\" [disabled]=\"!content\" (click)=\"updateValues(template)\">\n            Importar\n            </button>                \n        </div>         \n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-6\">\n        <div>\n          <div class=\"row\">\n            <div class=\"col\">              \n              <custom-table [config]=\"tableConfigAssocGrupos\">\n                <ng-template #thead let-thead>\n                  <tr>\n                    <th scope=\"col\">Grupos associados</th>    \n                    <th class=\"text-center\">Informações</th>       \n                  </tr>                        \n                </ng-template>                \n                <ng-template #tbody let-tbody *ngIf=\"dados\">\n                  <tr *ngFor=\"let item of dados.assocGrupos; let i = index\"\n                  onclick=\"var s = this.parentNode.querySelector('tr.table-active'); s && s.classList.remove('table-active'); this.classList.add('table-active');\">\n                    <td>\n                      {{ item.codGrupo }} - {{ item.nomeGrupo | uppercase }}\n                    </td>    \n                    <td class=\"text-center\">\n                      <button type=\"button\" class=\"btn-icon-sm\">\n                        <i class=\"fas fa-money-bill-wave\" placement=\"left\" id=\"tooltip-preco\"        \n                        [tooltip]=\"tooltip\">\n                        <ng-template #tooltip>\n                        <div style=\"width: 190px; font-size: 0.57rem\">\n                          <span *ngFor=\"let item2 of item.precos; let i = index;\">\n                            {{ item2.nomeEmpresa | uppercase  }} - {{ item2.ufDestino + ': R$ '}} {{  item2.valorMaterial | number:'1.2-2'  }}<br>\n                          </span>\n                        </div>\n                        </ng-template>\n                        </i>\n                      </button>              \n                    </td>                                                \n                  </tr>\n                </ng-template>\n              </custom-table>\n            </div>\n          </div>          \n        </div>\n      </div>\n      <div class=\"col-6\">\n      <custom-table *ngIf=\"headers\">\n        <ng-template #thead let-thead>\n          <tr>            \n            <th scope=\"col\">Código</th>\n            <th scope=\"col\">Depósito</th>\n            <th scope=\"col\">UF</th> \n            <th scope=\"col\">Valor</th>\n            <th scope=\"col\">Situação \n              <button type=\"button\" class=\"btn-icon-sm\"> \n              <i class=\"fas fa-exclamation-circle\" placement=\"left\" [tooltip]=\"tooltip2\">\n              <ng-template #tooltip2>\n                <div>\n                  <span>\n                    Mostrará se o código do grupo já está cadastrado (OK) ou não (SEM CADASTRO)\n                  </span>\n                </div>           \n              </ng-template>\n              </i>\n            </button>\n            </th>                    \n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody *ngIf=\"content\">\n            <tr *ngFor=\"let row of content\">\n                <td *ngFor=\"let col of row\">\n                  {{ col }}\n                </td>              \n              </tr>\n        </ng-template>\n      </custom-table>\n    </div>\n  </div>\n</app-body>\n\n<ng-template #template>\n  <div class=\"modal-header\">\n    <h4 id=\"dialog-sizes-name1\" class=\"modal-title pull-left\">\n    Registros atualizados do item {{ codPreco }} - {{ nomePreco }} \n    </h4>\n    <button type=\"button\" class=\"close pull-right\" (click)=\"closeModal()\" aria-label=\"Close\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\" style=\"height:350px; overflow-x: hidden; overflow-y: scroll;\" (onClose)=\"select.handleClearClick()\">  \n    <div *ngIf=\"elementsAdded.length == 0\">\n      <p>Nenhum item foi atualizado.</p>\n    </div>  \n      <custom-table [config]=\"tableConfigPrecos\" class=\"m-3\" *ngIf=\"elementsAdded.length > 0\">    \n        <ng-template #thead let-thead>\n          <tr>\n            <th scope=\"col\">Código</th>\n            <th scope=\"col\">Depósito</th>\n            <th scope=\"col\">UF</th>\n            <th scope=\"col\">Valor</th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody *ngIf=\"elementsAdded.length > 0\">\n          <tr  *ngFor=\"let a of elementsAdded;\">\n            <td> \n             {{ a.codGrupo }}\n            </td>  \n            <td> \n              {{ a.codEmpresa }}\n             </td> \n             <td> \n              {{ a.ufDestino }}\n             </td> \n             <td> \n              {{ a.valorMaterial | number:'1.2-2'}}\n             </td>       \n          </tr>\n        </ng-template>\n      </custom-table>    \n    </div>\n</ng-template>");

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
//# sourceMappingURL=tabela-precos-tabela-precos-module-es2015.js.map