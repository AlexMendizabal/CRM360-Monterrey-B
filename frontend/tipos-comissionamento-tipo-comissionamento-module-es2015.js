(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tipos-comissionamento-tipo-comissionamento-module"],{

/***/ "+ARP":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/tipos-comissionamento/tipo-comissionamento-routing.module.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ComercialCadastrosTipoComissionamentoModuleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCadastrosTipoComissionamentoModuleRoutingModule", function() { return ComercialCadastrosTipoComissionamentoModuleRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/guards/form-deactivate.guard */ "iMgG");
/* harmony import */ var _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./formulario/formulario-resolver.guard */ "7BBq");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lista/lista.component */ "ovr/");
/* harmony import */ var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./formulario/formulario.component */ "Pzkn");



// Guards


// Components


const routes = [
    { path: 'lista', component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_5__["ComercialCadastrosTipoComissionamentoListaComponent"] },
    {
        path: 'novo',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__["ComercialCadastrosTipoComissionamentoFormularioComponent"],
        resolve: {
            detalhes: _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_4__["ComercialCadastrosTipoComissionamentoFormularioResolverGuard"]
        },
        canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]]
    },
    {
        path: 'editar/:id',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__["ComercialCadastrosTipoComissionamentoFormularioComponent"],
        resolve: {
            detalhes: _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_4__["ComercialCadastrosTipoComissionamentoFormularioResolverGuard"]
        },
        canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]]
    },
    {
        path: '',
        redirectTo: 'lista',
        pathMatch: 'full'
    }
];
let ComercialCadastrosTipoComissionamentoModuleRoutingModule = class ComercialCadastrosTipoComissionamentoModuleRoutingModule {
};
ComercialCadastrosTipoComissionamentoModuleRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ComercialCadastrosTipoComissionamentoModuleRoutingModule);



/***/ }),

/***/ "7BBq":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/tipos-comissionamento/formulario/formulario-resolver.guard.ts ***!
  \***********************************************************************************************************/
/*! exports provided: ComercialCadastrosTipoComissionamentoFormularioResolverGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCadastrosTipoComissionamentoFormularioResolverGuard", function() { return ComercialCadastrosTipoComissionamentoFormularioResolverGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _tipo_comissionamento_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tipo-comissionamento.service */ "v9B3");



// Services

let ComercialCadastrosTipoComissionamentoFormularioResolverGuard = class ComercialCadastrosTipoComissionamentoFormularioResolverGuard {
    constructor(tipoComissionamentoService) {
        this.tipoComissionamentoService = tipoComissionamentoService;
    }
    resolve(route) {
        if (route.params && route.params.id) {
            return this.tipoComissionamentoService.getDetalhes(route.params.id);
        }
        // É implementado o método "of" para manter a tipagem de retorno com Observable.
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
            success: true,
            data: [{
                    codTipoComissionamento: null,
                    dsTipoComissionamento: null,
                    qtdeRegistros: null,
                    codSituacao: null,
                    codLinha: null,
                    nomeLinha: null,
                    codClasse: null,
                    nomeClasse: null,
                    percentual: []
                }]
        });
    }
};
ComercialCadastrosTipoComissionamentoFormularioResolverGuard.ctorParameters = () => [
    { type: _tipo_comissionamento_service__WEBPACK_IMPORTED_MODULE_3__["ComercialCadastrosTipoComissionamentoService"] }
];
ComercialCadastrosTipoComissionamentoFormularioResolverGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_tipo_comissionamento_service__WEBPACK_IMPORTED_MODULE_3__["ComercialCadastrosTipoComissionamentoService"]])
], ComercialCadastrosTipoComissionamentoFormularioResolverGuard);



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

/***/ "IUlZ":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/tipos-comissionamento/formulario/formulario.component.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NhZGFzdHJvcy90aXBvcy1jb21pc3Npb25hbWVudG8vZm9ybXVsYXJpby9mb3JtdWxhcmlvLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "Pzkn":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/tipos-comissionamento/formulario/formulario.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: ComercialCadastrosTipoComissionamentoFormularioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCadastrosTipoComissionamentoFormularioComponent", function() { return ComercialCadastrosTipoComissionamentoFormularioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./formulario.component.html */ "hYBt");
/* harmony import */ var _formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formulario.component.scss */ "IUlZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../../shared/modules/confirm-modal/confirm-modal.service */ "FOez");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");
/* harmony import */ var _tipo_comissionamento_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../tipo-comissionamento.service */ "v9B3");









// Services




let ComercialCadastrosTipoComissionamentoFormularioComponent = class ComercialCadastrosTipoComissionamentoFormularioComponent {
    constructor(activatedRoute, router, location, formBuilder, tipoComissionamentoService, pnotifyService, atividadesService, titleService, confirmModalService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.location = location;
        this.formBuilder = formBuilder;
        this.tipoComissionamentoService = tipoComissionamentoService;
        this.pnotifyService = pnotifyService;
        this.atividadesService = atividadesService;
        this.titleService = titleService;
        this.confirmModalService = confirmModalService;
        this.loaderFullScreen = true;
        this.breadCrumbTree = [];
        this.dadosPercentual = [];
        this.show = false;
        this.formChanged = false;
        this.formPercentualIndex = null;
        this.dadosPerc = false;
        this.linhasMaterial = [];
        this.classesMaterial = [];
        // filteredClasses: Array<any> = [];
        this.filteredClasses = {};
        this.firstAccess = false;
        this.codLinha = 0;
        this.tableConfigPercentual = {
            fixedHeader: false,
            bodyHeight: 230,
            hover: false,
        };
        this.pnotifyService.getPNotify();
    }
    ngOnInit() {
        this.getFilterValues();
        this.registrarAcesso();
        this.setBreadCrumb();
        this.setFormBuilder();
        // this.getFormFields();
    }
    registrarAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
    }
    setBreadCrumb() {
        this.activatedRoute.params.subscribe((params) => {
            if (params.id) {
                this.appTitle = 'Editar Tipo de comissionamento';
            }
            else {
                this.appTitle = 'Novo Tipo de comissionamento';
            }
            this.titleService.setTitle(this.appTitle);
            this.breadCrumbTree = [
                {
                    descricao: 'Home',
                    routerLink: '/comercial/home'
                },
                {
                    descricao: 'Cadastros',
                    routerLink: `/comercial/cadastros/${params.idSubModulo}`
                },
                {
                    descricao: 'Lista',
                    routerLink: `/comercial/cadastros/${params.idSubModulo}/tipos-comissionamento/lista`
                },
                {
                    descricao: this.appTitle
                }
            ];
        });
    }
    setFormBuilder() {
        if (this.activatedRoute.snapshot.data.detalhes.success === true) {
            const detalhes = this.activatedRoute.snapshot.data.detalhes.data;
            if (detalhes[0].codSituacao != null) {
                this.situacao = detalhes[0].codSituacao.toString();
            }
            this.form = this.formBuilder.group({
                codTipoComissionamento: [detalhes[0].codTipoComissionamento],
                dsTipoComissionamento: [detalhes[0].dsTipoComissionamento, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
                codSituacao: [this.situacao ? detalhes[0].codSituacao : 1, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
                linhas: this.formBuilder.array([]),
            });
            this.onAddLinha(null, detalhes);
        }
        else {
            this.pnotifyService.error();
            this.location.back();
        }
    }
    get linhas() {
        return this.form.get('linhas');
    }
    onAddLinha(index, data) {
        let indexLinhas = 1;
        if (data) {
            indexLinhas = data.length;
        }
        ;
        for (let i = 0; i < indexLinhas; i++) {
            this.linhas.push(this.formBuilder.group({
                codLinha: [data ? data[i].codLinha : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
                codClasse: [data ? data[i].codClasse : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
                classes: [[]],
                percentual: this.formBuilder.array([]),
            }));
            if (data) {
                for (let indice = 0; indice < data[i].percentual.length; indice++) {
                    this.onAddPercentual(index, data[i].percentual[indice], i);
                }
            }
        }
    }
    onAssociarPercentual(data) {
        const percentualAdd = data.percentual;
        this.percentualAssociado(percentualAdd);
    }
    percentualAssociado(data) {
        this.onAddPercentual(null, data);
    }
    getPercentual(index) {
        return this.linhas.at(index).get("percentual");
    }
    onAddPercentual(index, data, indexLinhas) {
        let indexData = 0;
        !data ? indexData = index : indexData = indexLinhas;
        this.getPercentual(indexData).push(this.formBuilder.group({
            codFaixa: data ? data.codFaixa : null,
            percDescontoDe: [data ? data.percDescontoDe : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
            percDescontoAte: [data ? data.percDescontoAte : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
            percPago: [data ? data.percPago : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
        }));
    }
    onDeleteValor(index, item, indexPercentual, action) {
        this.loaderNavbar = true;
        let dados = [];
        let valida = [];
        if (action == 'one') {
            dados.push(item);
            valida.push(item);
        }
        else {
            dados = item;
            valida = item;
        }
        console.log();
        console.log(dados);
        this.confirmDelete().subscribe((response) => {
            if (response) {
                if (dados[0].codFaixa != null) {
                    this.tipoComissionamentoService
                        .deleteFaixa(dados)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(() => {
                        this.loaderNavbar = false;
                    }))
                        .subscribe({
                        next: (response) => {
                            if (response.success) {
                                // this.form.get('linhas')['controls'][index].get('percentual').clear();
                                // this.form.get('linhas')['controls'][index].splice(0, 1);
                                // this.form.get('linhas')['controls'].splice(index, 1);
                                if (action == 'all') {
                                    this.form.get('linhas')['controls'][index].get('percentual').clear();
                                    this.form.get('linhas')['controls'].splice(index, 1);
                                }
                                else {
                                    this.form.get('linhas')['controls'][index].get('percentual')['controls'].splice(indexPercentual, 1);
                                }
                                if (this.form.get('linhas')['controls'].length < 1) {
                                    this.onAddLinha(index);
                                }
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
                    // this.form.get('linhas')['controls'][index].get('percentual').clear();
                    // this.form.get('linhas')['controls'].splice(index, 1);
                    if (action == 'all') {
                        this.form.get('linhas')['controls'][index].get('percentual').clear();
                        this.form.get('linhas')['controls'].splice(index, 1);
                    }
                    else {
                        this.form.get('linhas')['controls'][index].get('percentual')['controls'].splice(indexPercentual, 1);
                    }
                }
                this.loaderNavbar = false;
            }
        });
    }
    confirmDelete() {
        return this.confirmModalService.showConfirm('delete', 'Confirmar exclusão', 'Deseja realmente prosseguir com a exclusão do registro?', 'Cancelar', 'Confirmar');
    }
    setFormMateriais() {
        this.formMateriais = this.formBuilder.group({
            codLinha: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
            codClasse: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
            codMaterial: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
            checked: [false]
        });
    }
    getFilterValues() {
        this.tipoComissionamentoService
            .getFilterValues()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(() => {
            this.loaderFullScreen = false;
        }))
            .subscribe((response) => {
            if (response[0].success === true) {
                this.linhasMaterial = response[0].data;
            }
            else {
                this.pnotifyService.error();
                this.location.back();
            }
            if (response[1].success === true) {
                this.classesMaterial = response[1].data;
                const linhas = this.form.controls['linhas'].value;
                linhas.forEach((linha, index) => {
                    this.onChangeLinha(linha.codLinha, index);
                });
                // this.onChangeLinha();
            }
            else {
                this.pnotifyService.error();
                this.location.back();
            }
        });
    }
    onChangeLinha(codLinha, index) {
        const classes = this.classesMaterial.filter(classe => {
            return classe.idLinha == codLinha;
        });
        this.filteredClasses[index] = classes;
        this.filteredClasses[index].unshift({
            idClasse: 0,
            nomeClasse: 'TODOS',
        });
    }
    onSubmit() {
        if (this.form.pristine) {
            this.location.back();
        }
        else {
            if (this.form.valid) {
                this.loaderNavbar = true;
                this.submittingForm = true;
                this.tipoComissionamentoService
                    .save(this.form.value)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(() => {
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
                                        relativeTo: this.activatedRoute
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
    onMoreNestedFieldError(formGroup, index, formArray, indexNested, field) {
        if (this.onMoreNestedFieldInvalid(formGroup, index, formArray, indexNested, field)) {
            return 'is-invalid';
        }
        return '';
    }
    onMoreNestedFieldInvalid(formGroup, index, formArray, indexNested, field) {
        let linhaNestedForm = this.form.controls[formGroup];
        let percentualNestedForm = linhaNestedForm.controls[index].controls[formArray];
        field = percentualNestedForm.controls[indexNested].get(field);
        return field.status == 'INVALID' && field.touched;
    }
    onMoreNestedFieldRequired(formGroup, index, formArray, indexNested, field) {
        let required = false;
        let formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]();
        let linhaNestedForm = this.form.controls[formGroup];
        let percentualNestedForm = linhaNestedForm.controls[index].controls[formArray];
        if (percentualNestedForm.controls[indexNested].get(field).validator) {
            let validationResult = percentualNestedForm.controls[indexNested]
                .get(field)
                .validator(formControl);
            required =
                validationResult !== null && validationResult.required === true;
        }
        if (required) {
            return 'is-required';
        }
    }
    onNestedFieldError(formGroup, index, field) {
        if (this.onNestedFieldInvalid(formGroup, index, field)) {
            return 'is-invalid';
        }
        return '';
    }
    onNestedFieldInvalid(formGroup, index, field) {
        let nestedForm = this.form.controls[formGroup];
        field = nestedForm.controls[index].get(field);
        return field.status == 'INVALID' && field.touched;
    }
    onNestedFieldRequired(formGroup, index, field) {
        let required = false;
        let formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]();
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
};
ComercialCadastrosTipoComissionamentoFormularioComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
    { type: _tipo_comissionamento_service__WEBPACK_IMPORTED_MODULE_12__["ComercialCadastrosTipoComissionamentoService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"] },
    { type: _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_5__["ConfirmModalService"] }
];
ComercialCadastrosTipoComissionamentoFormularioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-cadastros-tipo-comissionamento-formulario',
        template: _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
        _tipo_comissionamento_service__WEBPACK_IMPORTED_MODULE_12__["ComercialCadastrosTipoComissionamentoService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"],
        _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_5__["ConfirmModalService"]])
], ComercialCadastrosTipoComissionamentoFormularioComponent);



/***/ }),

/***/ "Rolq":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/cadastros/tipos-comissionamento/lista/lista.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\n<app-header appTitle=\"Tipo de Comissionamento\">\n  <button\n    type=\"button\"\n    [routerLink]=\"['../novo']\">\n    Adicionar\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"onFilter()\">\n    Filtrar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\n    <div class=\"row\" #scrollToFilter>\n    <div class=\"col\">\n      <advanced-filter>\n        <form [formGroup]=\"form\" autocomplete=\"off\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-lg-7\">\n              <label for=\"dsTiposComissionamento\">Tipo de Comissionamento</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"dsTiposComissionamento\">\n            </div>\n            <div class=\"form-group col-lg-3\">\n              <label for=\"codSituacao\">Situação</label>\n              <select\n                class=\"form-control custom-select\"\n                id=\"codSituacao\"\n                formControlName=\"codSituacao\">\n                <option value=\"\">Todos</option>\n                <option value=\"1\">Ativos</option>\n                <option value=\"0\">Inativos</option>\n              </select>\n            </div>\n            <div class=\"form-group col-lg-2\">\n              <label for=\"registros\">Registros</label>\n              <select\n                class=\"form-control\"\n                id=\"registros\"\n                formControlName=\"registros\">\n                <option>25</option>\n                <option>50</option>\n                <option>100</option>\n                <option>200</option>\n                <option>300</option>\n              </select>\n            </div>\n          </div>\n        </form>\n      </advanced-filter>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <subtitles\n        [data]=\"subtitles\"\n        [show]=\"dadosPagination.length > 0 && !dadosEmpty\">\n      </subtitles>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div [ngClass]=\"{'col': !showDetailPanel, 'col-8 pr-0': showDetailPanel}\">\n      <custom-table [config]=\"tableConfig\" *ngIf=\"dadosPagination.length > 0 && !dadosEmpty\">\n        <ng-template #thead let-thead>\n          <tr>\n            <th scope=\"col\">Descrição</th>\n            <th scope=\"col\" [hidden]=\"showDetailPanel\"></th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr *ngFor=\"let tipoComissionamento of dadosPagination; let i = index\"\n          [class.table-active]=\"tipoComissionamento.codTipoComissionamento == codigo\">\n            <td\n              class=\"hover\"\n              [ngClass]=\"classStatusBorder(tipoComissionamento)\"\n              (click)=\"onDetails(tipoComissionamento)\">\n              {{ tipoComissionamento.dsTipoComissionamento }}\n            </td>\n            <td class=\"text-right\" [hidden]=\"showDetailPanel\">\n              <!-- <span *ngIf=\"tipoComissionamento.codSituacao == 1\" class=\"mr-3\" tooltip=\"Inativar\" placement=\"left\" container=\"body\">\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onInactivate(i, tipoComissionamento)\">\n                  <i class=\"fas fa-toggle-on\"></i>\n                </button>\n              </span>\n              <span *ngIf=\"tipoComissionamento.codSituacao == 2\" class=\"mr-3\" tooltip=\"Ativar\" placement=\"left\" container=\"body\">\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onActivate(i, tipoComissionamento)\">\n                  <i class=\"fas fa-toggle-off\"></i>\n                </button>\n              </span> -->\n              <span class=\"mr-3\" tooltip=\"Editar\" placement=\"left\" container=\"body\">\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onEdit(tipoComissionamento)\">\n                  <i class=\"fas fa-edit\"></i>\n                </button>\n              </span>\n            </td>\n          </tr>\n        </ng-template>\n      </custom-table>\n      <empty-result\n        message=\"Nenhuma informação encontrada\"\n        class=\"my-3\"\n        *ngIf=\"dadosEmpty && dadosPagination.length < 1\">\n      </empty-result>\n      <div class=\"d-flex justify-content-center mt-3\" *ngIf=\"totalItems > itemsPerPage && dadosLoaded\">\n        <pagination\n          [maxSize]=\"maxSize\"\n          [(totalItems)]=\"totalItems\"\n          (pageChanged)=\"onPageChanged($event)\"\n          [(itemsPerPage)]=\"itemsPerPage\"\n          [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPage\"\n          previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\"\n          lastText=\"&raquo;\">\n        </pagination>\n      </div>\n    </div>\n    <div class=\"col-4 mb-2\" [hidden]=\"!showDetailPanel\" >\n      <detail-panel panelTitle=\"Faixa de valores\" #scrollToFilter>\n        <div class=\"mtc-title\"*ngIf=\"faixaPerc.length > 0\">{{ faixaPerc[0].dsTipoComissionamento }}</div>\n        <div class=\"col-12 mb-4\" *ngFor=\"let dados of faixaPerc\">\n          <custom-table *ngIf=\"faixaPerc.length > 0\">\n            <ng-template #thead let-thead  >\n              <tr>\n                <th scope=\"col\" class=\"border text-center\" style=\"width: 50%\">Linha</th>\n                <th scope=\"col\" class=\"border text-center\" style=\"width: 50%\">Classe</th>\n              </tr>\n            </ng-template>\n            <ng-template #tbody let-tbody>\n              <tr>\n                <td class=\"text-center\">{{ dados.nomeLinha }}</td>\n                <td class=\"text-center\" *ngIf=\"dados.codClasse === 0\" >TODOS</td>\n                <td class=\"text-center\" *ngIf=\"dados.codClasse != 0\">{{ dados.nomeClasse }}</td>\n              </tr>\n            </ng-template>\n          </custom-table>\n\n        <custom-table *ngIf=\"faixaPerc.length > 0\" [config]=\"tableConfigDetail\">\n          <ng-template #thead let-thead  >\n            <tr>\n              <th scope=\"col\" class=\"border text-center\" style=\"width: 55%\">Percentual de desconto da tabela de vendas de materiais (%) </th>\n              <th scope=\"col\" class=\"border text-center\" style=\"width: 45%\">Percentual a ser pago de comissão sobre o título (%) </th>\n            </tr>\n          </ng-template>\n          <ng-template #tbody let-tbody>\n            <tr *ngFor=\"let item of dados.percentual\">\n              <td class=\"text-center\">{{ item.percDescontoDe }} a {{ item.percDescontoAte }} %</td>\n              <td class=\"text-center\">{{ item.percPago }} %</td>\n            </tr>\n          </ng-template>\n        </custom-table>\n      </div>\n      </detail-panel>\n    </div>\n  </div>\n</app-body>\n\n");

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

/***/ "cyqI":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/tipos-comissionamento/tipo-comissionamento.module.ts ***!
  \**************************************************************************************************/
/*! exports provided: ComercialCadastrosTipoComissionamentoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCadastrosTipoComissionamentoModule", function() { return ComercialCadastrosTipoComissionamentoModule; });
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
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-currency-mask */ "D5nU");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _tipo_comissionamento_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tipo-comissionamento-routing.module */ "+ARP");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./lista/lista.component */ "ovr/");
/* harmony import */ var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./formulario/formulario.component */ "Pzkn");




// ngx-bootstrap


// ng-select

// ng-brazil


// ng2-currency-mask

// PNotify

// Modules



// Components


let ComercialCadastrosTipoComissionamentoModule = class ComercialCadastrosTipoComissionamentoModule {
};
ComercialCadastrosTipoComissionamentoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _lista_lista_component__WEBPACK_IMPORTED_MODULE_14__["ComercialCadastrosTipoComissionamentoListaComponent"],
            _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_15__["ComercialCadastrosTipoComissionamentoFormularioComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"].forRoot(),
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(),
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"],
            angular2_text_mask__WEBPACK_IMPORTED_MODULE_7__["TextMaskModule"],
            ng2_currency_mask__WEBPACK_IMPORTED_MODULE_9__["CurrencyMaskModule"],
            ng_brazil__WEBPACK_IMPORTED_MODULE_8__["NgBrazil"],
            _tipo_comissionamento_routing_module__WEBPACK_IMPORTED_MODULE_11__["ComercialCadastrosTipoComissionamentoModuleRoutingModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_13__["TemplatesModule"]
        ],
        providers: [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"]]
    })
], ComercialCadastrosTipoComissionamentoModule);



/***/ }),

/***/ "hYBt":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/cadastros/tipos-comissionamento/formulario/formulario.component.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\n<app-header [appTitle]=\"appTitle\">\n  <button\n    type=\"button\"\n    (click)=\"onCancel()\"\n    [disabled]=\"submittingForm\">\n    Cancelar\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"onSubmit()\"\n    [disabled]=\"!form.valid || submittingForm \">\n    Salvar\n  </button>\n  <!-- || submittingForm -->\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\n<form [formGroup]=\"form\">\n  <div class=\"col-12 mt-3\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-lg-6\">\n\n          <div class=\"form-row\">\n            <div class=\"form-group col-9\">\n              <label for=\"dsTipoComissionamento\">Tipo de Recebimento</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"dsTipoComissionamento\"\n                formControlName=\"dsTipoComissionamento\"\n\n                (input)=\"onInput()\"\n                autocomplete=\"new-password\"\n                [ngClass]=\"onFieldError('dsTipoComissionamento') + ' ' + onFieldRequired(form.controls.dsTipoComissionamento)\">\n              <invalid-form-control [show]=\"onFieldInvalid('dsTipoComissionamento')\" message=\"Tipo de recebimento é obrigatório.\"></invalid-form-control>\n            </div>\n\n            <div class=\"form-group col-lg-3\">\n              <label for=\"codSituacao\">Situação</label>\n              <select\n                class=\"form-control custom-select\"\n                id=\"codSituacao\"\n                formControlName=\"codSituacao\"\n                [ngClass]=\"onFieldError('codSituacao') + ' ' + onFieldRequired(form.controls.codSituacao)\">\n                <option value=\"0\">Inativo</option>\n                <option value=\"1\">Ativo</option>\n              </select>\n              <invalid-form-control [show]=\"onFieldInvalid('codSituacao')\" message=\"Qtde. parcelas é obrigatório.\"></invalid-form-control>\n            </div>\n          </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-12 mt-3\" formArrayName=\"linhas\">\n\n    <div class=\"col-12\" *ngFor=\"let item of linhas.controls; let i = index\" [formGroupName]=\"i\">\n    <div class=\"form-row justify-content-center\" >\n        <div class=\"col-lg-6 border mb-3\" >\n          <!-- <hr> -->\n          <div class=\"form-row\">\n            <div class=\"form-group col-lg-5\" >\n              <label for=\"codLinha\">Linha</label>\n              <ng-select\n                [searchable]=\"true\"\n                [clearable]=\"false\"\n                [items]=\"linhasMaterial\"\n                formControlName=\"codLinha\"\n                [virtualScroll]=\"true\"\n                labelForId=\"codLinha\"\n                bindLabel=\"descricao\"\n                bindValue=\"id\"\n                (change)=\"onChangeLinha($event.id, i)\"\n                [ngClass]=\"onNestedFieldError('linhas', i, 'codLinha') + ' ' + onNestedFieldRequired('linhas', i, 'codLinha')\">\n            </ng-select>\n\n            </div>\n            <div class=\"form-group col-lg-5\">\n              <label for=\"codSituacao\">Classe</label>\n              <ng-select\n                [searchable]=\"true\"\n                [clearable]=\"false\"\n                [items]=\"filteredClasses[i]\"\n                formControlName=\"codClasse\"\n                [virtualScroll]=\"true\"\n                labelForId=\"codClasse\"\n                bindLabel=\"nomeClasse\"\n                bindValue=\"idClasse\"\n                [ngClass]=\"onNestedFieldError('linhas', i, 'codClasse') + ' ' + onNestedFieldRequired('linhas', i, 'codClasse')\">\n            </ng-select>\n\n            </div>\n            <div class=\"form-group col-lg-1\"></div>\n            <div class=\"form-group col-lg-1 pt-3\">\n              <btn-icon\n                  icon=\"fas fa-plus-square\"\n                  class=\"justify-content-center pt-2\"\n                  size=\"medium\"\n                  color=\"primary\"\n                  tooltip=\"Novo Percentual\"\n                  (click)=\"onAddPercentual(i)\">\n              </btn-icon>\n              <!-- onDeleteValor(i, item.value, 'change'); -->\n            </div>\n          </div>\n\n          <div class=\"form-row mb-2\" *ngIf=\"getPercentual(i).controls.length > 0\">\n            <div class=\"col-lg-12 mb-2\">\n            <custom-table [config]=\"tableConfigPercentual\" formArrayName=\"percentual\">\n              <ng-template #thead let-thead>\n                <tr>\n                  <th scope=\"col\" class=\"border text-center\" style=\"width: 55%\">Percentual de desconto da tabela de vendas de materiais (%) </th>\n                  <th scope=\"col\" class=\"border text-center\" style=\"width: 45%\">Percentual a ser pago de comissão sobre o título (%) </th>\n                </tr>\n              </ng-template>\n              <ng-template #tbody let-tbody >\n                <tr  *ngFor=\"let percentual of getPercentual(i).controls; let j = index\"  class=\"colorBody\" [formGroupName]=\"j\">\n\n                  <td class=\"border\">\n                    <div class=\"form-row\">\n\n                      <div class=\"col-5\">\n                          <input\n                            style=\"text-align: center;\"\n                            class=\"form-control\"\n                            id=\"percDescontoDe\"\n                            type=\"text\"\n                            formControlName=\"percDescontoDe\"\n                            (input)=\"onInput()\"\n                            currencyMask [options]=\"{ align: 'center', prefix: '', thousands: '.', decimal: ',', precision: 2, suffix: '%' }\"\n                            [ngClass]=\"onMoreNestedFieldError('linhas', i, 'percentual', j, 'percDescontoDe') + ' '\n                            + onMoreNestedFieldRequired('linhas', i, 'percentual', j, 'percDescontoDe')\">\n\n\n                      </div>\n                      <div class=\"col-2\"> a </div>\n                      <div class=\"col-5\">\n                          <input\n                            style=\"text-align: center;\"\n                            class=\"form-control\"\n                            id=\"percDescontoAte\"\n                            type=\"text\"\n                            formControlName=\"percDescontoAte\"\n                            (input)=\"onInput()\"\n                            currencyMask [options]=\"{ align: 'center', prefix: '', thousands: '.', decimal: ',', precision: 2, suffix: '%' }\"\n                            [ngClass]=\"onMoreNestedFieldError('linhas', i, 'percentual', j, 'percDescontoAte') + ' '\n                            + onMoreNestedFieldRequired('linhas', i, 'percentual', j, 'percDescontoAte')\">\n                      </div>\n                      </div>\n                  </td>\n\n                  <td class=\"border\">\n                    <div class=\"form-row\">\n                      <div class=\"col-2\"></div>\n                      <div class=\"col-8\">\n                        <input\n                          style=\"text-align: center;\"\n                          class=\"form-control\"\n                          id=\"percPago\"\n                          type=\"text\"\n                          formControlName=\"percPago\"\n                          (input)=\"onInput()\"\n                          currencyMask [options]=\"{ align: 'center', prefix: '', thousands: '.', decimal: ',', precision: 2, suffix: '%' }\"\n                          [ngClass]=\"onMoreNestedFieldError('linhas', i, 'percentual', j, 'percPago') + ' '\n                            + onMoreNestedFieldRequired('linhas', i, 'percentual', j, 'percPago')\">\n                      </div>\n                      <div class=\"col-2\">\n                        <div class=\"form-row justify-content-end\">\n                          <div class=\"col-lg-12 mb-2\">\n                            <button type=\"button\" class=\"btn-icon-sm float-right\" (click)=\"onDeleteValor(i, item.value.percentual[j], j, 'one')\" tooltip=\"Limpar Registro\" >\n                              <i class=\"fas fa-trash\"></i>\n                            </button>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </td>\n\n                </tr>\n              </ng-template>\n            </custom-table>\n          </div>\n          </div>\n          <div class=\"form-row justify-content-end\" *ngIf=\"getPercentual(i).controls.length > 0\">\n            <div class=\"col-lg-12 mb-2\">\n              <btn-icon\n                  icon=\"fas fa-trash\"\n                  class=\"float-right\"\n                  size=\"medium\"\n                  color=\"danger\"\n                  tooltip=\"Limpar Tudo\"\n                  (click)=\"onDeleteValor(i, item.value.percentual, j, 'all')\">\n              </btn-icon>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-6 mx-auto\" *ngIf=\"getPercentual(i).controls.length > 0\">\n      <div class=\"form-row\" >\n        <div class=\"col-lg-12 mb-3 justify-content-center\">\n          <btn-icon\n            icon=\"fas fa-plus\"\n            size=\"small\"\n            class=\"float-right\"\n            tooltip=\"Nova faixa de valores\"\n            (click)=\"onAddLinha(i)\">\n          </btn-icon>\n        </div>\n      </div>\n    </div>\n    </div>\n  </div>\n  </form>\n</app-body>\n\n\n");

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

/***/ "ovr/":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/tipos-comissionamento/lista/lista.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ComercialCadastrosTipoComissionamentoListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCadastrosTipoComissionamentoListaComponent", function() { return ComercialCadastrosTipoComissionamentoListaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lista.component.html */ "Rolq");
/* harmony import */ var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lista.component.scss */ "uQi+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");
/* harmony import */ var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/modules/confirm-modal/confirm-modal.service */ "FOez");
/* harmony import */ var src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/templates/detail-panel/detal-panel.service */ "gIxL");
/* harmony import */ var _comercial_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../comercial.service */ "VgqD");
/* harmony import */ var _tipo_comissionamento_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../tipo-comissionamento.service */ "v9B3");









// Services







let ComercialCadastrosTipoComissionamentoListaComponent = class ComercialCadastrosTipoComissionamentoListaComponent {
    constructor(activatedRoute, router, location, formBuilder, tipoComissionamentoService, pnotifyService, atividadesService, titleService, confirmModalService, detailPanelService, comercialService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.location = location;
        this.formBuilder = formBuilder;
        this.tipoComissionamentoService = tipoComissionamentoService;
        this.pnotifyService = pnotifyService;
        this.atividadesService = atividadesService;
        this.titleService = titleService;
        this.confirmModalService = confirmModalService;
        this.detailPanelService = detailPanelService;
        this.comercialService = comercialService;
        this.loaderNavbar = false;
        this.loaderFullScreen = true;
        this.breadCrumbTree = [];
        this.subtitles = [
            {
                id: 1,
                text: 'Ativo',
                color: 'green'
            },
            {
                id: 2,
                text: 'Inativo',
                color: 'red'
            }
        ];
        this.tableConfig = {
            subtitleBorder: true
        };
        this.showDetailPanel = false;
        this.orderType = 'ASC';
        this.maxSize = 10;
        this.itemsPerPage = 300;
        this.currentPage = 1;
        this.totalItems = 0;
        this.dados = [];
        this.dadosPagination = [];
        this.dadosLoaded = false;
        this.dadosEmpty = false;
        this.codigo = 0;
        this.faixaPerc = [];
        this.tableConfigDetail = {
            fixedHeader: false,
            bodyHeight: 243,
        };
        this.pnotifyService.getPNotify();
    }
    ngOnInit() {
        this.registrarAcesso();
        this.setBreadCrumb();
        this.setFormFilter();
        this.titleService.setTitle('Tipo de Comissionamento');
        this.onDetailPanelEmitter();
        this.setTipoComissionamentoSelecionado();
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
                    routerLink: '/comercial/home'
                },
                {
                    descricao: 'Cadastros',
                    routerLink: `/comercial/cadastros/${params['idSubModulo']}`
                },
                {
                    descricao: 'Lista'
                }
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
            dsTiposComissionamento: [formValue.dsTiposComissionamento],
            codTiposComissionamento: [formValue.codTiposComissionamento],
            codSituacao: [formValue.codSituacao],
            orderBy: [formValue.orderBy],
            orderType: [formValue.orderType],
            pagina: [formValue.pagina],
            registros: [formValue.registros, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
        });
        this.checkOrder();
        this.loaderFullScreen = false;
    }
    checkRouterParams() {
        let formValue = {
            dsTiposComissionamento: null,
            codSituacao: 1,
            orderBy: this.orderBy,
            orderType: this.orderType,
            pagina: 1,
            registros: this.itemsPerPage
        };
        this.activatedRouteSubscription = this.activatedRoute.queryParams.subscribe((queryParams) => {
            if (Object.keys(queryParams).length > 0) {
                let params = atob(queryParams['q']);
                params = JSON.parse(params);
                this.search(params);
                Object.keys(formValue).forEach(formKey => {
                    Object.keys(params).forEach(paramKey => {
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
    setTipoComissionamentoSelecionado() {
        this.tipoComissionamentoSelecionado = {
            codTipoComissionamento: null,
            dsTiposComissionamento: null,
            codSituacao: null,
            qtdeRegistros: null,
            situacao: null,
            codUsuario: null,
            nomeUsuario: null,
            dataCadastro: null,
            linhas: []
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
            queryParams: { q: btoa(JSON.stringify(params)) }
        });
        this.search(params);
    }
    verificaParams() {
        let params = {};
        if (this.form.value.dsTiposComissionamento) {
            params.dsTiposComissionamento = this.form.value.dsTiposComissionamento;
        }
        if (this.form.value.codSituacao) {
            params.codSituacao = this.form.value.codSituacao;
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
        this.tipoComissionamentoService
            .getTipoComissionamento(params)
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
    classStatusBorder(equipeVenda) {
        let borderClass;
        if (equipeVenda.codSituacao === 1) {
            borderClass = 'border-success';
        }
        else if (equipeVenda.codSituacao === 0) {
            borderClass = 'border-danger';
        }
        return borderClass;
    }
    onPageChanged(event) {
        const startItem = (event.page - 1) * event.itemsPerPage;
        const endItem = event.page * event.itemsPerPage;
        this.dadosPagination = this.dados.slice(startItem, endItem);
        this.scrollToFilter.nativeElement.scrollIntoView({
            behavior: 'instant'
        });
    }
    onDetails(tipoComissionamento) {
        this.loaderNavbar = true;
        this.detailPanelService.show();
        this.faixaPerc = [];
        this.tipoComissionamentoService
            .getDetailTipoComissionamento(tipoComissionamento.codTipoComissionamento)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(() => {
            setTimeout(() => {
                this.loaderNavbar = false;
            }, 500);
        }))
            .subscribe({
            next: (response) => {
                if (response.hasOwnProperty('success') && response.success === true) {
                    this.detailPanelService.loadedFinished(false);
                    this.faixaPerc = response.data;
                    this.codigo = this.faixaPerc[0].codTipoComissionamento;
                }
                else {
                    this.detailPanelService.loadedFinished(true);
                    this.pnotifyService.error();
                }
            },
            error: (error) => {
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
    onEdit(tipoComissionamento) {
        this.router.navigate(['../editar', tipoComissionamento.codTipoComissionamento], {
            relativeTo: this.activatedRoute
        });
    }
    onActivate(index, tipoComissionamento) {
        this.confirmActivate()
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(result => result ? this.activateTipoComissionamento(index, tipoComissionamento) : rxjs__WEBPACK_IMPORTED_MODULE_7__["EMPTY"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(() => {
            this.loaderNavbar = false;
        }))
            .subscribe((success) => {
            this.pnotifyService.success();
            this.refreshMainData(tipoComissionamento);
        }, (error) => {
            this.pnotifyService.error();
            this.dadosPagination[index].codSituacao = 2;
        });
    }
    confirmActivate() {
        return this.confirmModalService.showConfirm(null, null, 'Deseja realmente prosseguir com a ativação do registro?', 'Cancelar', 'Confirmar');
    }
    activateTipoComissionamento(index, tipoComissionamento) {
        this.loaderNavbar = true;
        this.dadosPagination[index].codSituacao = 1;
        return this.tipoComissionamentoService.activateTipoComissionamento(tipoComissionamento.codTipoComissionamento);
    }
    onInactivate(index, tipoComissionamento) {
        this.confirmInactive()
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(result => result ? this.inactivateTipoComissionamento(index, tipoComissionamento) : rxjs__WEBPACK_IMPORTED_MODULE_7__["EMPTY"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(() => {
            this.loaderNavbar = false;
        }))
            .subscribe((success) => {
            this.pnotifyService.success();
            this.refreshMainData(tipoComissionamento);
        }, (error) => {
            this.pnotifyService.error();
            this.dadosPagination[index].codSituacao = 1;
        });
    }
    confirmInactive() {
        return this.confirmModalService.showConfirm('inactivate', 'Confirmar inativação', 'Deseja realmente prosseguir com a inativação do registro?', 'Cancelar', 'Confirmar');
    }
    inactivateTipoComissionamento(index, tipoComissionamento) {
        this.loaderNavbar = true;
        this.dadosPagination[index].codSituacao = 2;
        return this.tipoComissionamentoService.inactivateTipoComissionamento(tipoComissionamento.codTipoComissionamento);
    }
    refreshMainData(tipoComissionamento) {
        for (let i = 0; i < this.dados.length; i++) {
            if (tipoComissionamento.codTipoComissionamento === this.dados[i].codTipoComissionamento) {
                this.dados[i].codSituacao = tipoComissionamento.codSituacao;
                return;
            }
        }
    }
};
ComercialCadastrosTipoComissionamentoListaComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _tipo_comissionamento_service__WEBPACK_IMPORTED_MODULE_15__["ComercialCadastrosTipoComissionamentoService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"] },
    { type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_12__["ConfirmModalService"] },
    { type: src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_13__["DetailPanelService"] },
    { type: _comercial_service__WEBPACK_IMPORTED_MODULE_14__["ComercialService"] }
];
ComercialCadastrosTipoComissionamentoListaComponent.propDecorators = {
    scrollToFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['scrollToFilter', {},] }]
};
ComercialCadastrosTipoComissionamentoListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-cadastros-tipos-comissionamento-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
        _tipo_comissionamento_service__WEBPACK_IMPORTED_MODULE_15__["ComercialCadastrosTipoComissionamentoService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"],
        src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_12__["ConfirmModalService"],
        src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_13__["DetailPanelService"],
        _comercial_service__WEBPACK_IMPORTED_MODULE_14__["ComercialService"]])
], ComercialCadastrosTipoComissionamentoListaComponent);



/***/ }),

/***/ "uQi+":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/tipos-comissionamento/lista/lista.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NhZGFzdHJvcy90aXBvcy1jb21pc3Npb25hbWVudG8vbGlzdGEvbGlzdGEuY29tcG9uZW50LnNjc3MifQ== */");

/***/ })

}]);
//# sourceMappingURL=tipos-comissionamento-tipo-comissionamento-module-es2015.js.map