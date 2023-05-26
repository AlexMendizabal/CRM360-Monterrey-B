(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auditoria-auditoria-module"],{

/***/ "4xRd":
/*!******************************************************************!*\
  !*** ./src/app/modules/comercial/services/vendedores.service.ts ***!
  \******************************************************************/
/*! exports provided: ComercialVendedoresService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialVendedoresService", function() { return ComercialVendedoresService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let ComercialVendedoresService = class ComercialVendedoresService {
    constructor(http) {
        this.http = http;
        this.API = `https://crm360.monterrey.com.bo/api/comercial/vendedor`;
    }
    getDetalhesCadastro() {
        return this.http
            .get(`${this.API}/detalhes-cadastro`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getVendedores() {
        return this.http.get(`${this.API}/lista`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getCarteiraClientes(params) {
        return this.http
            .get(`${this.API}/carteira-clientes`, {
            params: params
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getValidaClienteCarteira(codCliente) {
        return this.http
            .get(`${this.API}/valida-cliente-carteira/${codCliente}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getVinculoOperadores() {
        return this.http
            .get(`${this.API}/vinculo-operadores`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
};
ComercialVendedoresService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ComercialVendedoresService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ComercialVendedoresService);



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

/***/ "HRsq":
/*!********************************************************************!*\
  !*** ./src/app/modules/comercial/auditoria/auditoria.component.ts ***!
  \********************************************************************/
/*! exports provided: ComercialAuditoriaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialAuditoriaComponent", function() { return ComercialAuditoriaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_auditoria_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./auditoria.component.html */ "a+Am");
/* harmony import */ var _auditoria_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auditoria.component.scss */ "wXig");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");
/* harmony import */ var _admin_atividades_services_atividades_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../admin/atividades/services/atividades.service */ "UNg1");





// Services




let ComercialAuditoriaComponent = class ComercialAuditoriaComponent {
    constructor(activatedRoute, router, atividadesService, _atividadesService, pnotifyService, titleService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.atividadesService = atividadesService;
        this._atividadesService = _atividadesService;
        this.pnotifyService = pnotifyService;
        this.titleService = titleService;
        this.loaderFullScreen = true;
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: '/comercial/home'
            },
            {
                descricao: 'Auditorias'
            }
        ];
        this.atividades = [];
        this.pnotifyService.getPNotify();
    }
    ngOnInit() {
        this.titleService.setTitle('Auditorias');
        this.activatedRoute.params.subscribe((params) => {
            this.registrarAcesso();
            this.getAtividadesInternas(params['idSubModulo']);
        });
    }
    registrarAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
    }
    getAtividadesInternas(idSubModulo) {
        var _a, _b;
        let matricula = (_b = (_a = (JSON.parse(localStorage.getItem('currentUser')))) === null || _a === void 0 ? void 0 : _a.info) === null || _b === void 0 ? void 0 : _b.matricula;
        let params = {
            submoduloId: idSubModulo,
            matricula: matricula,
            exibeSidebar: 0
        };
        this._atividadesService
            .getAtividades(params)
            .subscribe(response => {
            if (response.status !== 200) {
                this.handleAtividadesInternasError();
                return;
            }
            this.atividades = response.body["data"];
            this.loaderFullScreen = false;
        }, (error) => {
            this.handleAtividadesInternasError();
        });
    }
    // getAtividadesInternas(idSubModulo: number) {
    //   this.atividadesService.getAtividadesInternas(idSubModulo).subscribe({
    //     next: (response: any) => {
    //       if (response['responseCode'] === 200) {
    //         this.atividades = response['result'];
    //         this.loaderFullScreen = false;
    //       } else {
    //         this.handleAtividadesInternasError();
    //       }
    //     },
    //     error: (error: any) => {
    //       this.handleAtividadesInternasError();
    //     }
    //   });
    // }
    handleAtividadesInternasError() {
        this.pnotifyService.error();
        this.router.navigate(['/comercial/home']);
    }
};
ComercialAuditoriaComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__["AtividadesService"] },
    { type: _admin_atividades_services_atividades_service__WEBPACK_IMPORTED_MODULE_8__["AdminAtividadesService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_7__["TitleService"] }
];
ComercialAuditoriaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'auditoria',
        template: _raw_loader_auditoria_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_auditoria_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__["AtividadesService"],
        _admin_atividades_services_atividades_service__WEBPACK_IMPORTED_MODULE_8__["AdminAtividadesService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_7__["TitleService"]])
], ComercialAuditoriaComponent);



/***/ }),

/***/ "LPlD":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/comercial/auditoria/enderecos-entrega/enderecos-entrega.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ComercialAuditoriaEnderecosEntregaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialAuditoriaEnderecosEntregaComponent", function() { return ComercialAuditoriaEnderecosEntregaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_enderecos_entrega_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./enderecos-entrega.component.html */ "fLyx");
/* harmony import */ var _enderecos_entrega_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enderecos-entrega.component.scss */ "f5EC");
/* harmony import */ var _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../shared/modules/confirm-modal/confirm-modal.service */ "FOez");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/chronos */ "xj/R");
/* harmony import */ var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/locale */ "0b5p");
/* harmony import */ var _auditoria_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../auditoria.service */ "qC4I");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");
/* harmony import */ var _services_vendedores_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../services/vendedores.service */ "4xRd");













Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_11__["defineLocale"])('pt-br', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_12__["ptBrLocale"]);
// Services






let ComercialAuditoriaEnderecosEntregaComponent = class ComercialAuditoriaEnderecosEntregaComponent {
    constructor(localeService, activatedRoute, router, location, formBuilder, pnotifyService, auditoriaService, atividadesService, titleService, modalService, dateService, vendedoresService, confirmModalService) {
        this.localeService = localeService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.location = location;
        this.formBuilder = formBuilder;
        this.pnotifyService = pnotifyService;
        this.auditoriaService = auditoriaService;
        this.atividadesService = atividadesService;
        this.titleService = titleService;
        this.modalService = modalService;
        this.dateService = dateService;
        this.vendedoresService = vendedoresService;
        this.confirmModalService = confirmModalService;
        this.loaderNavbar = false;
        this.loaderFullScreen = false;
        this.breadCrumbTree = [];
        this.subtitles = [
            {
                id: 1,
                text: 'Aprovado',
                color: 'green',
            },
            {
                id: 2,
                text: 'Reprovado',
                color: 'red',
            },
            {
                id: 3,
                text: 'Aguardando Aprovação',
                color: 'blue',
            },
        ];
        this.tableConfig = {
            subtitleBorder: true,
        };
        this.tableConfigAnexos = {
            fixedHeader: false,
            bodyHeight: 230,
            hover: false,
        };
        this.showDetailPanel = false;
        this.orderBy = 'id';
        this.orderType = 'ASC';
        this.enderecos = [];
        this.maxSize = 10;
        this.itemsPerPage = 300;
        this.currentPage = 1;
        this.totalItems = 0;
        this.dados = [];
        this.dadosPagination = [];
        this.dadosLoaded = false;
        this.dadosEmpty = false;
        this.vendedores = [];
        this.empresas = [];
        this.situacoes = [
            {
                id: 0,
                situacao: 'EXIBIR TODOS',
            },
            {
                id: 1,
                situacao: 'APROVADOS',
            },
            {
                id: 4,
                situacao: 'REPROVADOS',
            },
            {
                id: 3,
                situacao: 'AGUARDANDO APROVAÇÃO',
            },
        ];
        this.situacoesFiltered = this.situacoes;
        this.situacaoLoaded = false;
        this.excecoes = [];
        this.validaExcecao = false;
        this.anexos = [];
        this.anexosMarketing = [];
        this.showAnexos = false;
        this.showAnexosAprovacao = false;
        this.showAnexosMarketing = false;
        this.formData = [];
        this.clienteTerceiro = [];
        this.localeService.use('pt-br');
        this.bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' }, { adaptivePosition: true }, { showWeekNumbers: false });
        this.pnotifyService.getPNotify();
    }
    ngOnInit() {
        this.registrarAcesso();
        this.getFiltros();
        this.setBreadCrumb();
        this.setFormFilter();
        this.titleService.setTitle('Endereço de Entrega');
        this.setEnderecoSelecionado();
        this.setFormLatLong();
        this.setFormExcessao();
        this.getExcecao();
    }
    registrarAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
    }
    getFiltros() {
        this.vendedoresService
            .getVendedores()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(() => {
            this.loaderFullScreen = false;
        }))
            .subscribe({
            next: (response) => {
                if (response.responseCode === 200) {
                    this.vendedores = response.result;
                    this.vendedores.unshift({
                        id: 0,
                        nome: 'EXIBIR TODOS',
                    });
                }
            },
            error: (error) => {
                this.pnotifyService.error();
                this.location.back();
            }
        });
    }
    setBreadCrumb() {
        this.activatedRoute.params.subscribe((params) => {
            this.breadCrumbTree = [
                {
                    descricao: 'Home',
                    routerLink: '/comercial/home',
                },
                {
                    descricao: 'Auditoria',
                    routerLink: `/comercial/auditoria/${params['idSubModulo']}`,
                },
                {
                    descricao: 'Endereços de Entregas',
                },
            ];
        });
    }
    getExcecao() {
        this.auditoriaService
            .getExcecao()
            .subscribe({
            next: (response) => {
                if (response.success === true) {
                    this.excecoes = response.data;
                    // this.excecoes.unshift({
                    //   id: 0,
                    //   excecao: 'SELECIONE UMA EXCEÇÃO...',
                    // });
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
    setFormFilter() {
        const formValue = this.checkRouterParams();
        this.form = this.formBuilder.group({
            tipoData: [formValue.tipoData, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
            dataInicial: [formValue.dataInicial, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
            dataFinal: [formValue.dataFinal, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
            idCliente: [formValue.idCliente],
            dsCliente: [formValue.dsCliente],
            vendedor: [formValue.vendedor],
            situacao: [formValue.situacao],
            registros: [formValue.registros],
        });
    }
    setFormLatLong() {
        this.formLatLong = this.formBuilder.group({
            latitude: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            longitude: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
        });
    }
    checkRouterParams() {
        let formValue = {
            tipoData: 1,
            dataInicial: this.dateService.getFirstDayMonth(),
            dataFinal: this.dateService.getLastDayMonth(),
            idCliente: null,
            dsCliente: null,
            vendedor: 0,
            situacao: 3,
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
                            if (formKey === 'dataInicial' || formKey === 'dataFinal') {
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
    checkOrder() {
        if (this.form.value.orderBy !== this.orderBy) {
            this.orderBy = this.form.value.orderBy;
        }
        if (this.form.value.orderType !== this.orderType) {
            this.orderType = this.form.value.orderType;
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
        if (this.form.controls[field].validator) {
            let validationResult = this.form.controls[field].validator(formControl);
            required =
                validationResult !== null && validationResult.required === true;
        }
        if (required) {
            return 'is-required';
        }
    }
    onFieldErrorLatLong(field) {
        if (this.onFieldInvalidLatLong(field)) {
            return 'is-invalid';
        }
        return '';
    }
    onFieldInvalidLatLong(field) {
        field = this.formLatLong.get(field);
        if (field.errors != null) {
            if (field.errors.hasOwnProperty('required') && field.touched) {
                return 'required';
            }
        }
        return '';
    }
    onFieldRequiredLatLong(field) {
        let required = false;
        let formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]();
        if (this.formLatLong.controls[field].validator) {
            let validationResult = this.formLatLong.controls[field].validator(formControl);
            required =
                validationResult !== null && validationResult.required === true;
        }
        if (required) {
            return 'is-required';
        }
    }
    checkValidatorsData() {
        let validation = true;
        let dataInicial = this.form.value.dataInicial;
        let dataFinal = this.form.value.dataFinal;
        if (dataInicial > dataFinal) {
            validation = false;
        }
        return validation;
    }
    onFilter() {
        let confirm = false;
        if (!this.checkValidatorsData()) {
            this.pnotifyService.notice('Data Inicial não pode ser maior que Data Final');
        }
        else {
            confirm = true;
        }
        if (this.form.valid && confirm == true) {
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
        if (this.form.value.tipoData) {
            params.tipoData = this.form.value.tipoData;
        }
        if (this.form.value.dataInicial) {
            params.dataInicial = this.dateService.convertToUrlDate(new Date(this.form.value.dataInicial));
        }
        if (this.form.value.dataFinal) {
            params.dataFinal = this.dateService.convertToUrlDate(new Date(this.form.value.dataFinal));
        }
        if (this.form.value.idCliente) {
            params.idCliente = this.form.value.idCliente;
        }
        if (this.form.value.dsCliente) {
            params.dsCliente = this.form.value.dsCliente;
        }
        if (this.form.value.situacao) {
            params.situacao = this.form.value.situacao;
        }
        if (this.form.value.vendedor) {
            params.vendedor = parseInt(this.form.value.vendedor);
        }
        if (this.form.value.registros) {
            params.registros = this.form.value.registros;
        }
        params.orderBy = this.orderBy;
        params.orderType = this.orderType;
        return params;
    }
    onCheckExcecao() {
        this.validaExcecao = !this.validaExcecao;
    }
    search(params) {
        this.loaderNavbar = true;
        this.dados = [];
        this.dadosPagination = [];
        this.dadosLoaded = false;
        this.dadosEmpty = false;
        this.auditoriaService
            .getListaEnderecosEntrega(params)
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
    classStatusBorder(enderecoEntrega) {
        let borderClass;
        if (enderecoEntrega.situacao === 1) {
            borderClass = 'border-success';
        }
        else if (enderecoEntrega.situacao === 4) {
            borderClass = 'border-danger';
        }
        else if (enderecoEntrega.situacao === 3) {
            borderClass = 'border-primary';
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
    setEnderecoSelecionado() {
        this.enderecoSelecionado = {
            idCliente: -1,
            codEndereco: null,
            razaoSocial: null,
            codSituacao: null,
            situacao: null,
            codUsuario: null,
            nomeUsuario: null,
            dataCadastro: null,
        };
    }
    onDetails(detalhes, enderecoEntrega) {
        this.loaderNavbar = true;
        this.setEnderecoSelecionado();
        this.enderecoSelecionado = enderecoEntrega;
        this.anexos = [];
        this.anexosMarketing = [];
        this.auditoriaService.getCliente(this.enderecoSelecionado.COD_CLIE_TERC)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(() => {
            this.loaderFullScreen = false;
        }))
            .subscribe({
            next: (response) => {
                this.clienteTerceiro[0] = response;
            }
        });
        this.auditoriaService
            .getAnexosAprovacao(this.enderecoSelecionado.codEndereco)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(() => {
            this.loaderNavbar = false;
            this.showAnexosMarketing = true;
        }))
            .subscribe({
            next: (response) => {
                if (response.hasOwnProperty('success') && response.success === true) {
                    this.anexosMarketing = response.data;
                }
            },
            error: (error) => { }
        });
        this.auditoriaService
            .getAnexos(this.enderecoSelecionado.codEndereco)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(() => {
            if (this.enderecoSelecionado.idCliente > 0) {
                this.getUltimaCompra(this.enderecoSelecionado.idCliente, detalhes);
                /* this.loaderNavbar = false; */
            }
            else {
                this.pnotifyService.error('Erro ao abrir Endereço');
                this.loaderNavbar = false;
            }
            /* this.loaderNavbar = false; */
        }))
            .subscribe({
            next: (response) => {
                if (response.hasOwnProperty('success') && response.success === true) {
                    this.anexos = response.data;
                    this.showAnexos = true;
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
    getUltimaCompra(codCliente, detalhes) {
        this.auditoriaService
            .getUltimaCompra(codCliente)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(() => {
            this.loaderNavbar = false;
            this.openModal(detalhes);
        }))
            .subscribe({
            next: (response) => {
                if (response.hasOwnProperty('success') && response.success === true) {
                    this.enderecoSelecionado.ultimaCompra =
                        response.data[0].ULTIMA_COMPRA;
                    this.enderecoSelecionado.ultimaCompraGrupo =
                        response.data[0].ultimaCompraGrupo;
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
    convertMysqlTime(time) {
        return this.dateService.convertMysqlTime(time);
    }
    openModal(detalhes) {
        this.detalhesModalRef = this.modalService.show(detalhes, Object.assign({
            ignoreBackdropClick: true,
        }, { class: 'modal-xl' }));
    }
    onModalClose(modal) {
        if (modal == 'detalhes') {
            this.detalhesModalRef.hide();
        }
        else if (modal == 'confirm') {
            this.submitModalRef.hide();
        }
        this.formExcecao.value.excecao = null;
        this.validaExcecao = false;
    }
    /* onReject(confirm: TemplateRef<any>) {
      this.msgReject = '';
      this.submitModalRef = this.modalService.show(
        confirm,
        Object.assign(
          {
            ignoreBackdropClick: true,
          },
          { class: 'modal-lg' }
        )
      );
    } */
    onAction(confirm, acao) {
        this.msgModal = '';
        this.setFormExcessao();
        this.form.value.anexosAprovacao = [];
        this.acao = acao;
        if ((this.formLatLong.value.latitude != '' && this.formLatLong.value.longitude != '') ||
            (this.enderecoSelecionado.latitude != null && this.enderecoSelecionado.longitude != null)) {
            this.submitModalRef = this.modalService.show(confirm, Object.assign({
                ignoreBackdropClick: true,
            }, { class: 'modal-lg' }));
        }
        else {
            this.pnotifyService.notice("Verifique os campos de latitude e longitude.");
        }
    }
    setFormExcessao() {
        this.formExcecao = this.formBuilder.group({
            excecao: null,
            anexosAprovacao: this.formBuilder.array([]),
        });
    }
    onSubmitModal() {
        if (this.validaExcecao &&
            (this.formExcecao.value.excecao == 0 || this.formExcecao.value.excecao == null)) {
            this.pnotifyService.notice("Selecione uma exceção.");
            return;
        }
        if (this.msgModal != '' || this.acao == 'Aprovação') {
            let params = {
                idEndereco: this.enderecoSelecionado['id'],
                idCliente: this.enderecoSelecionado['idCliente'],
                cliente: this.enderecoSelecionado['nome'],
                emailVendedor: this.enderecoSelecionado['emailVendedor'],
                excecao: this.validaExcecao
                    ? this.formExcecao.value.excecao
                    : this.formExcecao.value.excecao = 0,
                justificativa: this.msgModal,
                anexos: this.formExcecao.value.anexosAprovacao,
                latitude: this.enderecoSelecionado.latitude != null
                    ? this.enderecoSelecionado.latitude
                    : this.formLatLong.value.latitude,
                longitude: this.enderecoSelecionado.longitude != null
                    ? this.enderecoSelecionado.longitude
                    : this.formLatLong.value.longitude,
                situacao: this.acao == 'Aprovação' ? 1 : 4,
            };
            this.onPostAnexosAprovacao(params.idEndereco);
            this.onModalClose('confirm');
            this.onModalClose('detalhes');
            this.aprovaReprovaEndereco(params);
        }
    }
    /* onAccept() {
      let paramsAccept = {
        idEndereco: this.enderecoSelecionado['id'],
        idCliente: this.enderecoSelecionado['idCliente'],
        cliente: this.enderecoSelecionado['nome'],
        emailVendedor: this.enderecoSelecionado['emailVendedor'],
        justificativa: '',
        situacao: 1,
      };
  
      this.onModalClose('detalhes');
      this.aprovaReprovaEndereco(paramsAccept);
    } */
    /* onSubmitReject() {
      if (this.msgReject != '') {
        let paramsReject = {
          idEndereco: this.enderecoSelecionado['id'],
          idCliente: this.enderecoSelecionado['idCliente'],
          cliente: this.enderecoSelecionado['nome'],
          emailVendedor: this.enderecoSelecionado['emailVendedor'],
          justificativa: this.msgReject,
          situacao: 4,
        };
  
        this.onModalClose('confirm');
        this.onModalClose('detalhes');
        this.aprovaReprovaEndereco(paramsReject);
      }
    } */
    aprovaReprovaEndereco(params) {
        this.loaderFullScreen = true;
        this.auditoriaService
            .aprovaReprovaEndereco(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(() => {
            this.loaderFullScreen = false;
            this.setRouterParams(this.verificaParams());
        }))
            .subscribe({
            next: (response) => {
                if (response.hasOwnProperty('success') && response.success === true) {
                    this.pnotifyService.success();
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
    enviarEndereco(endereco) {
        let link = `https://www.google.com.br/maps/place/${endereco.endereco}-${endereco.bairro},${endereco.cidade}-${endereco.uf}`;
        const linkCorreto = link.replace(/ /g, '+');
        return linkCorreto;
    }
    getAnexosAprovacao(codEndereco) {
        this.loaderNavbar = true;
        this.showAnexosAprovacao = false;
        this.anexosMarketing = [];
        this.auditoriaService
            .getAnexosAprovacao(codEndereco)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(() => {
            this.loaderNavbar = false;
            this.showAnexosAprovacao = true;
        }))
            .subscribe({
            next: (response) => {
                if (response.hasOwnProperty('success') && response.success === true) {
                    this.setAnexosAprovacao(response.data);
                    this.anexosMarketing = response.data;
                    this.showAnexosAprovacao = true;
                }
            },
            error: (error) => {
            }
        });
    }
    setAnexosAprovacao(anexos) {
        if (anexos.length > 0) {
            for (let i = 0; i < anexos.length; i++) {
                this.onAddAnexosAprovacao(anexos[i], true);
            }
        }
    }
    get anexosAprovacao() {
        return this.formExcecao.get('anexosAprovacao');
    }
    onAddAnexosAprovacao(anexo, manipulateForm) {
        if (this.checkAnexoExists(anexo) === false) {
            this.anexosAprovacao.push(this.formBuilder.group({
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
    appendFileAprovacao(files) {
        if (files.length === 0)
            return;
        const fd = new FormData();
        fd.append('file', files[0]);
        this.formData.push(fd);
        this.anexosAprovacao.push(this.formBuilder.group({
            nomeAnexo: [files[0]['name']],
        }));
        if (this.showAnexos === false) {
            this.showAnexos = true;
        }
    }
    onPostAnexosAprovacao(codEndereco) {
        if (this.formData.length === 0) {
            /* this.pnotifyService.notice('Erro'); */
            return;
        }
        /* const id = this.form.value.codMaterial; */
        this.formData.forEach((element, index) => {
            this.auditoriaService
                .postAnexosAprovacao(element, codEndereco)
                .subscribe();
        });
    }
    onDeleteAnexoAprovacao(codAnexo, index) {
        console.log(index);
        this.confirmDelete().subscribe((r) => {
            if (codAnexo) {
                console.log("codAnexo");
                this.loaderNavbar = true;
                this.auditoriaService
                    .deleteAnexoAprovacao(codAnexo)
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
                console.log("i");
                r ? this.deleteDocumento(index) : null;
                this.formData.splice(index, 1);
            }
        });
    }
    deleteDocumento(index) {
        this.anexosAprovacao.removeAt(index);
        this.form.markAsTouched();
        this.form.markAsDirty();
    }
    confirmDelete() {
        return this.confirmModalService.showConfirm('delete', 'Confirmar exclusão', 'Deseja realmente prosseguir com a exclusão do registro?', 'Cancelar', 'Confirmar');
    }
};
ComercialAuditoriaEnderecosEntregaComponent.ctorParameters = () => [
    { type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__["BsLocaleService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_14__["PNotifyService"] },
    { type: _auditoria_service__WEBPACK_IMPORTED_MODULE_13__["ComercialAuditoriaService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_15__["AtividadesService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_16__["TitleService"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["BsModalService"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_17__["DateService"] },
    { type: _services_vendedores_service__WEBPACK_IMPORTED_MODULE_18__["ComercialVendedoresService"] },
    { type: _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_3__["ConfirmModalService"] }
];
ComercialAuditoriaEnderecosEntregaComponent.propDecorators = {
    scrollToFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['scrollToFilter', {},] }]
};
ComercialAuditoriaEnderecosEntregaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'enderecos-entrega',
        template: _raw_loader_enderecos_entrega_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_enderecos_entrega_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__["BsLocaleService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_14__["PNotifyService"],
        _auditoria_service__WEBPACK_IMPORTED_MODULE_13__["ComercialAuditoriaService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_15__["AtividadesService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_16__["TitleService"],
        ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["BsModalService"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_17__["DateService"],
        _services_vendedores_service__WEBPACK_IMPORTED_MODULE_18__["ComercialVendedoresService"],
        _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_3__["ConfirmModalService"]])
], ComercialAuditoriaEnderecosEntregaComponent);



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

/***/ "VEQJ":
/*!*************************************************************************!*\
  !*** ./src/app/modules/comercial/auditoria/auditoria-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: ComercialAuditoriaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialAuditoriaRoutingModule", function() { return ComercialAuditoriaRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _auditoria_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auditoria.component */ "HRsq");
/* harmony import */ var _enderecos_entrega_enderecos_entrega_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./enderecos-entrega/enderecos-entrega.component */ "LPlD");



// Components


const routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _auditoria_component__WEBPACK_IMPORTED_MODULE_3__["ComercialAuditoriaComponent"]
            },
            {
                path: 'endereco-entrega',
                children: [
                    {
                        path: '',
                        component: _enderecos_entrega_enderecos_entrega_component__WEBPACK_IMPORTED_MODULE_4__["ComercialAuditoriaEnderecosEntregaComponent"]
                    }
                ]
            }
        ]
    }
];
let ComercialAuditoriaRoutingModule = class ComercialAuditoriaRoutingModule {
};
ComercialAuditoriaRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ComercialAuditoriaRoutingModule);



/***/ }),

/***/ "a+Am":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/auditoria/auditoria.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\n<app-header appTitle=\"Auditorias\"></app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\n  <h5 class=\"pt-2 mb-4 text-center\">Selecione uma Auditoria</h5>\n  <div class=\"row justify-content-center\">\n    <div class=\"col-lg-10\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-md-3\" *ngFor=\"let atividade of atividades\">\n          <card-button\n            [icon]=\"atividade.iconeAtividade\"\n            [text]=\"atividade.nomeAtividade\"\n            [routerLink]=\"[atividade.rotaAtividade]\">\n          </card-button>\n        </div>\n      </div>\n    </div>\n  </div>\n</app-body>\n");

/***/ }),

/***/ "f5EC":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/comercial/auditoria/enderecos-entrega/enderecos-entrega.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2F1ZGl0b3JpYS9lbmRlcmVjb3MtZW50cmVnYS9lbmRlcmVjb3MtZW50cmVnYS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "fLyx":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/auditoria/enderecos-entrega/enderecos-entrega.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\n<app-header appTitle=\"Auditoria de Endereços\">\n  <button\n    type=\"button\"\n    (click)=\"onFilter()\">\n    Filtrar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\n  <div class=\"row\" #scrollToFilter>\n    <div class=\"col\">\n      <advanced-filter #scrollToFilter>\n        <form [formGroup]=\"form\" autocomplete=\"off\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-lg-3\">\n              <label for=\"tipoData\">Buscar por</label>\n              <select\n                class=\"form-control\"\n                id=\"tipoData\"\n                formControlName=\"tipoData\"\n                [ngClass]=\"onFieldError('tipoData') + ' ' + onFieldRequired('tipoData')\">\n                <option value=\"1\">Data de alteração</option>\n                <option value=\"2\">Data de aprovação/reprovação</option>\n                <invalid-form-control [show]=\"onFieldInvalid('tipoData') == 'required'\" message=\"'Buscar por' é obrigatório.\"></invalid-form-control>\n              </select>\n            </div>\n            <div class=\"form-group col-lg-2\">\n              <label for=\"dataInicial\">Data inicial</label>\n              <input\n                class=\"form-control\"\n                id=\"dataInicial\"\n                type=\"text\"\n                bsDatepicker\n                [bsConfig]=\"bsConfig\"\n                formControlName=\"dataInicial\"\n                [ngClass]=\"onFieldError('dataInicial') + ' ' + onFieldRequired('dataInicial')\">\n                <invalid-form-control [show]=\"onFieldInvalid('dataInicial') == 'required'\" message=\"Data Inicial é obrigatório.\"></invalid-form-control>\n            </div>\n            <div class=\"form-group col-lg-2\">\n              <label for=\"dataFinal\">Data final</label>\n              <input\n                class=\"form-control\"\n                id=\"dataFinal\"\n                type=\"text\"\n                bsDatepicker\n                [bsConfig]=\"bsConfig\"\n                formControlName=\"dataFinal\"\n                [ngClass]=\"onFieldError('dataFinal') + ' ' + onFieldRequired('dataFinal')\">\n                <invalid-form-control [show]=\"onFieldInvalid('dataFinal') == 'required'\" message=\"Data Final é obrigatório.\"></invalid-form-control>\n            </div>\n            <div class=\"form-group col-lg-2\">\n              <label for=\"idCliente\">Cód. Cliente</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"idCliente\"\n                formControlName=\"idCliente\">\n            </div>\n            <div class=\"form-group col-lg-3\">\n              <label for=\"dsCliente\">Razão Social</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"dsCliente\"\n                formControlName=\"dsCliente\">\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-lg-3 mb-2 mb-md-0\">\n              <label for=\"situacoes\">Situação</label>\n              <ng-select\n                [searchable]=\"true\"\n                [clearable]=\"false\"\n                [items]=\"situacoesFiltered\"\n                formControlName=\"situacao\"\n                [virtualScroll]=\"true\"\n                [loading]=\"situacaoLoaded\"\n                labelForId=\"situacoes\"\n                bindLabel=\"situacao\"\n                bindValue=\"id\">\n              </ng-select>\n            </div>\n            <div class=\"form-group col-lg-3 mb-2 mb-md-0\">\n              <label for=\"vendedores\">Vendedor</label>\n              <ng-select\n                [searchable]=\"true\"\n                [clearable]=\"false\"\n                [items]=\"vendedores\"\n                formControlName=\"vendedor\"\n                [virtualScroll]=\"true\"\n                labelForId=\"vendedores\"\n                bindLabel=\"nome\"\n                bindValue=\"id\">\n              </ng-select>\n            </div>\n            <div class=\"form-group col-lg-1 mb-2 mb-md-0\">\n              <label for=\"registros\">Registros</label>\n              <select\n                class=\"form-control\"\n                id=\"registros\"\n                formControlName=\"registros\">\n                <option>25</option>\n                <option>50</option>\n                <option>100</option>\n                <option>200</option>\n                <option>300</option>\n              </select>\n            </div>\n          </div>\n        </form>\n      </advanced-filter>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <subtitles\n        [data]=\"subtitles\"\n        [show]=\"dadosPagination.length > 0 && !dadosEmpty\">\n      </subtitles>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <custom-table [config]=\"tableConfig\" *ngIf=\"dadosPagination.length > 0 && !dadosEmpty\">\n        <ng-template #thead let-thead>\n          <tr>\n            <th scope=\"col-1\">Dt. Atualização</th>\n            <th scope=\"col-4\">(Cod. Cliente) Razão Social</th>\n            <th scope=\"col-2\">Vendedor</th>\n            <th scope=\"col-2\">Usuário Cadastro</th>\n            <th scope=\"col-1\">Dt. Aprovação/Reprovação</th>\n            <th scope=\"col-2\">Quem Aprovou</th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr *ngFor=\"let enderecoEntrega of dadosPagination; let i = index\" [class.table-active]=\"enderecoEntrega.id == enderecoSelecionado.id\">\n            <td\n              class=\"hover\"\n              [ngClass]=\"classStatusBorder(enderecoEntrega)\"\n              (click)=\"onDetails(detalhes, enderecoEntrega)\">\n              {{ enderecoEntrega.dataAtualizacao | date: 'dd/MM/yyyy - hh:mm' }}\n            </td>\n            <td\n              class=\"hover\"\n              (click)=\"onDetails(detalhes, enderecoEntrega)\">\n              ({{enderecoEntrega.idCliente}}) {{ enderecoEntrega.nome | uppercase }}\n            </td>\n            <td\n              class=\"hover\"\n              (click)=\"onDetails(detalhes, enderecoEntrega)\">\n              {{ enderecoEntrega.vendedor | uppercase }}\n            </td>\n            <td\n              class=\"hover\"\n              (click)=\"onDetails(detalhes, enderecoEntrega)\">\n              {{ enderecoEntrega.usuarioCadastro | uppercase }}\n            </td>\n            <td\n              class=\"hover\"\n              (click)=\"onDetails(detalhes, enderecoEntrega)\">\n              {{ enderecoEntrega.dataAprovacaoReprovacao | date: 'dd/MM/yyyy - hh:mm' }}\n            </td>\n            <td\n              class=\"hover\"\n              (click)=\"onDetails(detalhes, enderecoEntrega)\">\n              {{ enderecoEntrega.usuarioAprovacaoReprovacao | uppercase }}\n            </td>\n          </tr>\n        </ng-template>\n      </custom-table>\n      <empty-result\n        message=\"Nenhuma informação encontrada\"\n        class=\"my-3\"\n        *ngIf=\"dadosEmpty\">\n      </empty-result>\n      <div class=\"d-flex justify-content-center mt-3\" *ngIf=\"totalItems > itemsPerPage && dadosLoaded\">\n        <pagination\n          [maxSize]=\"maxSize\"\n          [(totalItems)]=\"totalItems\"\n          (pageChanged)=\"onPageChanged($event)\"\n          [(itemsPerPage)]=\"itemsPerPage\"\n          [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPage\"\n          previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\"\n          lastText=\"&raquo;\">\n        </pagination>\n      </div>\n    </div>\n  </div>\n</app-body>\n<ng-template #detalhes>\n  <div class=\"modal-header\">\n    <h4 id=\"dialog-sizes-name1\" class=\"modal-title pull-left\">\n      {{ enderecoSelecionado.nome }} / {{ enderecoSelecionado.vendedor }}\n    </h4>\n    <button type=\"button\" class=\"close pull-right\" (click)=\"onModalClose('detalhes')\" aria-label=\"Close\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"container-xl\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-6\">\n              <label>Ult. Compra</label>\n              <div *ngIf=\"enderecoSelecionado.ultimaCompra == null\">NÃO INFORMADO</div>\n              <div *ngIf=\"enderecoSelecionado.ultimaCompra != null\">{{ enderecoSelecionado.ultimaCompra }}</div>\n            </div>\n            <div class=\"form-group col-md-4\">\n              <label>Ult. Compra Grupo</label>\n              <div *ngIf=\"enderecoSelecionado.ultimaCompraGrupo == null\">NÃO INFORMADO</div>\n              <div *ngIf=\"enderecoSelecionado.ultimaCompraGrupo != null\">{{ enderecoSelecionado.ultimaCompraGrupo }}</div>\n            </div>\n            <div class=\"form-group col-md-2 align-items-center\">\n              <a\n                [routerLink]=\"['/comercial/clientes/detalhes', enderecoSelecionado.idCliente]\"\n                target=\"_blank\"\n                class=\"btn btn-primary\"\n                tooltip=\"Visualizar cadastro do cliente\">\n                Visualizar Cad. Completo\n              </a>\n            </div>\n          </div>\n          <div class=\"form-row\" *ngIf=\"enderecoSelecionado.COD_CLIE_TERC\">\n            <div class=\"col\"><hr></div>\n          </div>\n          <div class=\"mtc-title\" *ngIf=\"enderecoSelecionado.COD_CLIE_TERC\">Cliente Terceiro da Entrega</div>\n          <div class=\"form-row\" *ngIf=\"enderecoSelecionado.COD_CLIE_TERC\">\n            <div class=\"form-group col-md-6\">\n              <label>Codigo</label>\n              <div>{{ enderecoSelecionado.COD_CLIE_TERC }}</div>\n            </div>\n            <div class=\"form-group col-md-6\">\n              <label>CPF ou CNPJ</label>\n              <div *ngIf=\"clienteTerceiro[0].result.cpf != 0\">{{ clienteTerceiro[0].result.cpf }}</div>\n              <div *ngIf=\"clienteTerceiro[0].result.cnpj != 0\">{{ clienteTerceiro[0].result.cnpj }}</div>\n            </div>\n            <div class=\"form-group col-md-6\">\n              <label>Nome ou Razão Social</label>\n              <div>{{ clienteTerceiro[0].result.razaoSocial }}</div>\n            </div>\n            <div class=\"form-group col-md-6\">\n              <label>Tipo do Endereço de Entrega</label>\n              <div>{{ enderecoSelecionado.TP_ACAO }}</div>\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"col\"><hr></div>\n          </div>\n          <div class=\"mtc-title\" >Endereço de Entrega</div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-6\">\n              <label>CEP</label>\n              <div *ngIf=\"enderecoSelecionado.cep == null\">NÃO INFORMADO</div>\n              <div *ngIf=\"enderecoSelecionado.cep != null\">{{ enderecoSelecionado.cep | cep }}</div>\n            </div>\n            <div class=\"form-group col-md-6\">\n              <label>Endereço</label>\n              <div *ngIf=\"enderecoSelecionado.endereco == null\">NÃO INFORMADO</div>\n              <div *ngIf=\"enderecoSelecionado.endereco != null\">{{ enderecoSelecionado.endereco }}\n              <a *ngIf=\"enderecoSelecionado.endereco != null\" class=\"btn-icon-sm ml-2\"\n                [href]=\"enviarEndereco(enderecoSelecionado)\"\n                target=\"_blank\">\n                <ng-template #tooltipAutoScrollTemplate>\n                  <p class=\"text-nowrap mb-0\">Visualizar no</p>\n                  <p class=\"text-nowrap mb-0\">Google Maps</p>\n                </ng-template>\n                <i class=\"fas fa-map-marker-alt\" [tooltip]=\"tooltipAutoScrollTemplate\"></i></a>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-6\">\n              <label>Complemento</label>\n              <div *ngIf=\"enderecoSelecionado.complemento == null\">NÃO INFORMADO</div>\n              <div *ngIf=\"enderecoSelecionado.complemento != null\">{{ enderecoSelecionado.complemento }}</div>\n            </div>\n            <div class=\"form-group col-md-6\">\n              <label>Referência</label>\n              <div *ngIf=\"enderecoSelecionado.referencia == null\">NÃO INFORMADO</div>\n              <div *ngIf=\"enderecoSelecionado.referencia != null\">{{ enderecoSelecionado.referencia }}</div>\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-6\">\n              <label>Bairro</label>\n              <div *ngIf=\"enderecoSelecionado.bairro == null\">NÃO INFORMADO</div>\n              <div *ngIf=\"enderecoSelecionado.bairro != null\">{{ enderecoSelecionado.bairro }}</div>\n            </div>\n            <div class=\"form-group col-md-6 mb-0\">\n              <label>Cidade</label>\n              <div *ngIf=\"enderecoSelecionado.cidade == null\">NÃO INFORMADO</div>\n              <div *ngIf=\"enderecoSelecionado.cidade != null\">\n                {{ enderecoSelecionado.cidade }}<span *ngIf=\"enderecoSelecionado.uf != null\"> / {{ enderecoSelecionado.uf }}</span>\n              </div>\n            </div>\n          </div>\n\n          <form [formGroup]=\"formLatLong\" autocomplete=\"off\">\n            <div class=\"form-row\">\n\n              <div class=\"form-group col-md-6 mb-0\">\n                <label>Latitude</label>\n                <div *ngIf=\"enderecoSelecionado.latitude == null\">\n                  <input\n                      class=\"form-control col-6\"\n                      id=\"latitude\"\n                      type=\"text\"\n                      formControlName=\"latitude\"\n                      [ngClass]=\"onFieldErrorLatLong('latitude') + ' ' + onFieldRequiredLatLong('latitude')\"\n                      >\n\n                      <invalid-form-control [show]=\"onFieldInvalidLatLong('latitude')\" message=\"Latitude é obrigatório.\"></invalid-form-control>\n                </div>\n                <div *ngIf=\"enderecoSelecionado.latitude != null\">{{ enderecoSelecionado.latitude }}</div>\n              </div>\n\n              <div class=\"form-group col-md-6\">\n                <label>Longitude</label>\n                <div *ngIf=\"enderecoSelecionado.longitude == null\">\n                  <input\n                      class=\"form-control col-6\"\n                      id=\"longitude\"\n                      type=\"text\"\n                      formControlName=\"longitude\"\n                      [ngClass]=\"onFieldErrorLatLong('longitude') + ' ' + onFieldRequiredLatLong('longitude')\"\n                      >\n                      <invalid-form-control [show]=\"onFieldInvalidLatLong('longitude')\" message=\"Longitude é obrigatório.\"></invalid-form-control>\n                </div>\n                <div *ngIf=\"enderecoSelecionado.longitude != null\">{{ enderecoSelecionado.longitude }}</div>\n              </div>\n            </div>\n        </form>\n\n          <div class=\"form-row\">\n            <div class=\"col\"><hr></div>\n          </div>\n          <div class=\"mtc-title\">Dados de entrega</div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-6\">\n              <label>Título do local de entrega</label>\n              <div *ngIf=\"enderecoSelecionado.titulo == null\">NÃO INFORMADO</div>\n              <div *ngIf=\"enderecoSelecionado.titulo != null\">{{ enderecoSelecionado.titulo }}</div>\n            </div>\n            <div class=\"form-group col-md-6\">\n              <label>Região de entrega</label>\n              <div *ngIf=\"enderecoSelecionado.descRegiaoEntrega == null\">NÃO INFORMADO</div>\n              <div *ngIf=\"enderecoSelecionado.descRegiaoEntrega != null\">{{ enderecoSelecionado.descRegiaoEntrega }}</div>\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col\">\n              <label>Dias para realizar entregas</label>\n              <div class=\"form-row\">\n                <div class=\"form-group col d-flex w-100 mb-1\">\n                  <div class=\"d-flex mr-1\">\n                    <div class=\"mr-1\">\n                      <i class=\"fas fa-times-circle text-danger\" *ngIf=\"enderecoSelecionado.diasEntrega.segunda.checked == 0\"></i>\n                      <i class=\"fas fa-check-circle text-success\" *ngIf=\"enderecoSelecionado.diasEntrega.segunda.checked == 1\"></i>\n                    </div>\n                    <span>Segunda-feira:</span>\n                  </div>\n                  <div *ngIf=\"enderecoSelecionado.diasEntrega.segunda.checked == 1\">\n                    <div *ngIf=\"enderecoSelecionado.diasEntrega.segunda.minimo !== null && enderecoSelecionado.diasEntrega.segunda.maximo !== null\">\n                      das {{ convertMysqlTime(enderecoSelecionado.diasEntrega.segunda.minimo) }} às {{ convertMysqlTime(enderecoSelecionado.diasEntrega.segunda.maximo) }}\n                    </div>\n                    <div *ngIf=\"enderecoSelecionado.diasEntrega.segunda.minimo == null || enderecoSelecionado.diasEntrega.segunda.maximo == null\">\n                      horário não informado\n                    </div>\n                  </div>\n                  <strong *ngIf=\"enderecoSelecionado.diasEntrega.segunda.checked == 0\">\n                    não aceita entregas\n                  </strong>\n                </div>\n              </div>\n              <div class=\"form-row\">\n                <div class=\"form-group col d-flex w-100 mb-1\">\n                  <div class=\"d-flex mr-1\">\n                    <div class=\"mr-1\">\n                      <i class=\"fas fa-times-circle text-danger\" *ngIf=\"enderecoSelecionado.diasEntrega.terca.checked == 0\"></i>\n                      <i class=\"fas fa-check-circle text-success\" *ngIf=\"enderecoSelecionado.diasEntrega.terca.checked == 1\"></i>\n                    </div>\n                    <span>Terça-feira:</span>\n                  </div>\n                  <div *ngIf=\"enderecoSelecionado.diasEntrega.terca.checked == 1\">\n                    <div *ngIf=\"enderecoSelecionado.diasEntrega.terca.minimo !== null && enderecoSelecionado.diasEntrega.terca.maximo !== null\">\n                      das {{ convertMysqlTime(enderecoSelecionado.diasEntrega.terca.minimo) }} às {{ convertMysqlTime(enderecoSelecionado.diasEntrega.terca.maximo) }}\n                    </div>\n                    <div *ngIf=\"enderecoSelecionado.diasEntrega.terca.minimo == null || enderecoSelecionado.diasEntrega.terca.maximo == null\">\n                      horário não informado\n                    </div>\n                  </div>\n                  <strong *ngIf=\"enderecoSelecionado.diasEntrega.terca.checked == 0\">\n                    não aceita entregas\n                  </strong>\n                </div>\n              </div>\n              <div class=\"form-row\">\n                <div class=\"form-group col d-flex w-100 mb-1\">\n                  <div class=\"d-flex mr-1\">\n                    <div class=\"mr-1\">\n                      <i class=\"fas fa-times-circle text-danger\" *ngIf=\"enderecoSelecionado.diasEntrega.quarta.checked == 0\"></i>\n                      <i class=\"fas fa-check-circle text-success\" *ngIf=\"enderecoSelecionado.diasEntrega.quarta.checked == 1\"></i>\n                    </div>\n                    <span>Quarta-feira:</span>\n                  </div>\n                  <div *ngIf=\"enderecoSelecionado.diasEntrega.quarta.checked == 1\">\n                    <div *ngIf=\"enderecoSelecionado.diasEntrega.quarta.minimo !== null && enderecoSelecionado.diasEntrega.quarta.maximo !== null\">\n                      das {{ convertMysqlTime(enderecoSelecionado.diasEntrega.quarta.minimo) }} às {{ convertMysqlTime(enderecoSelecionado.diasEntrega.quarta.maximo) }}\n                    </div>\n                    <div *ngIf=\"enderecoSelecionado.diasEntrega.quarta.minimo == null || enderecoSelecionado.diasEntrega.quarta.maximo == null\">\n                      horário não informado\n                    </div>\n                  </div>\n                  <strong *ngIf=\"enderecoSelecionado.diasEntrega.quarta.checked == 0\">\n                    não aceita entregas\n                  </strong>\n                </div>\n              </div>\n              <div class=\"form-row\">\n                <div class=\"form-group col d-flex w-100 mb-1\">\n                  <div class=\"d-flex mr-1\">\n                    <div class=\"mr-1\">\n                      <i class=\"fas fa-times-circle text-danger\" *ngIf=\"enderecoSelecionado.diasEntrega.quinta.checked == 0\"></i>\n                      <i class=\"fas fa-check-circle text-success\" *ngIf=\"enderecoSelecionado.diasEntrega.quinta.checked == 1\"></i>\n                    </div>\n                    <span>Quinta-feira:</span>\n                  </div>\n                  <div *ngIf=\"enderecoSelecionado.diasEntrega.quinta.checked == 1\">\n                    <div *ngIf=\"enderecoSelecionado.diasEntrega.quinta.minimo !== null && enderecoSelecionado.diasEntrega.quinta.maximo !== null\">\n                      das {{ convertMysqlTime(enderecoSelecionado.diasEntrega.quinta.minimo) }} às {{ convertMysqlTime(enderecoSelecionado.diasEntrega.quinta.maximo) }}\n                    </div>\n                    <div *ngIf=\"enderecoSelecionado.diasEntrega.quinta.minimo == null || enderecoSelecionado.diasEntrega.quinta.maximo == null\">\n                      horário não informado\n                    </div>\n                  </div>\n                  <strong *ngIf=\"enderecoSelecionado.diasEntrega.quinta.checked == 0\">\n                    não aceita entregas\n                  </strong>\n                </div>\n              </div>\n              <div class=\"form-row\">\n                <div class=\"form-group col d-flex w-100 mb-1\">\n                  <div class=\"d-flex mr-1\">\n                    <div class=\"mr-1\">\n                      <i class=\"fas fa-times-circle text-danger\" *ngIf=\"enderecoSelecionado.diasEntrega.sexta.checked == 0\"></i>\n                      <i class=\"fas fa-check-circle text-success\" *ngIf=\"enderecoSelecionado.diasEntrega.sexta.checked == 1\"></i>\n                    </div>\n                    <span>Sexta-feira:</span>\n                  </div>\n                  <div *ngIf=\"enderecoSelecionado.diasEntrega.sexta.checked == 1\">\n                    <div *ngIf=\"enderecoSelecionado.diasEntrega.sexta.minimo !== null && enderecoSelecionado.diasEntrega.sexta.maximo !== null\">\n                      das {{ convertMysqlTime(enderecoSelecionado.diasEntrega.sexta.minimo) }} às {{ convertMysqlTime(enderecoSelecionado.diasEntrega.sexta.maximo) }}\n                    </div>\n                    <div *ngIf=\"enderecoSelecionado.diasEntrega.sexta.minimo == null || enderecoSelecionado.diasEntrega.sexta.maximo == null\">\n                      horário não informado\n                    </div>\n                  </div>\n                  <strong *ngIf=\"enderecoSelecionado.diasEntrega.sexta.checked == 0\">\n                    não aceita entregas\n                  </strong>\n                </div>\n              </div>\n              <div class=\"form-row\">\n                <div class=\"form-group col d-flex w-100 mb-1\">\n                  <div class=\"d-flex mr-1\">\n                    <div class=\"mr-1\">\n                      <i class=\"fas fa-times-circle text-danger\" *ngIf=\"enderecoSelecionado.diasEntrega.sabado.checked == 0\"></i>\n                      <i class=\"fas fa-check-circle text-success\" *ngIf=\"enderecoSelecionado.diasEntrega.sabado.checked == 1\"></i>\n                    </div>\n                    <span>Sábado:</span>\n                  </div>\n                  <div *ngIf=\"enderecoSelecionado.diasEntrega.sabado.checked == 1\">\n                    <div *ngIf=\"enderecoSelecionado.diasEntrega.sabado.minimo !== null && enderecoSelecionado.diasEntrega.sabado.maximo !== null\">\n                      das {{ convertMysqlTime(enderecoSelecionado.diasEntrega.sabado.minimo) }} às {{ convertMysqlTime(enderecoSelecionado.diasEntrega.sabado.maximo) }}\n                    </div>\n                    <div *ngIf=\"enderecoSelecionado.diasEntrega.sabado.minimo == null || enderecoSelecionado.diasEntrega.sabado.maximo == null\">\n                      horário não informado\n                    </div>\n                  </div>\n                  <strong *ngIf=\"enderecoSelecionado.diasEntrega.sabado.checked == 0\">\n                    não aceita entregas\n                  </strong>\n                </div>\n              </div>\n              <div class=\"form-row\">\n                <div class=\"form-group col d-flex w-100 mb-1\">\n                  <div class=\"d-flex mr-1\">\n                    <div class=\"mr-1\">\n                      <i class=\"fas fa-times-circle text-danger\" *ngIf=\"enderecoSelecionado.diasEntrega.domingo.checked == 0\"></i>\n                      <i class=\"fas fa-check-circle text-success\" *ngIf=\"enderecoSelecionado.diasEntrega.domingo.checked == 1\"></i>\n                    </div>\n                    <span>Domingo:</span>\n                  </div>\n                  <div *ngIf=\"enderecoSelecionado.diasEntrega.domingo.checked == 1\">\n                    <div *ngIf=\"enderecoSelecionado.diasEntrega.domingo.minimo !== null && enderecoSelecionado.diasEntrega.domingo.maximo !== null\">\n                      das {{ convertMysqlTime(enderecoSelecionado.diasEntrega.domingo.minimo) }} às {{ convertMysqlTime(enderecoSelecionado.diasEntrega.domingo.maximo) }}\n                    </div>\n                    <div *ngIf=\"enderecoSelecionado.diasEntrega.domingo.minimo == null || enderecoSelecionado.diasEntrega.domingo.maximo == null\">\n                      horário não informado\n                    </div>\n                  </div>\n                  <strong *ngIf=\"enderecoSelecionado.diasEntrega.domingo.checked == 0\">\n                    não aceita entregas\n                  </strong>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-6\">\n              <label>Tipo de material</label>\n              <div *ngIf=\"enderecoSelecionado.dsTipoMaterial == null\">NÃO INFORMADO</div>\n              <div *ngIf=\"enderecoSelecionado.dsTipoMaterial != null\">{{ enderecoSelecionado.dsTipoMaterial | uppercase }}</div>\n            </div>\n            <div class=\"form-group col-md-6\">\n              <label>Tipo de descarga</label>\n              <div *ngIf=\"enderecoSelecionado.dsTipoDescarga == null\">NÃO INFORMADO</div>\n              <div *ngIf=\"enderecoSelecionado.dsTipoDescarga != null\">{{ enderecoSelecionado.dsTipoDescarga | uppercase }}</div>\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-6\">\n              <label>Modo de descarga</label>\n              <div *ngIf=\"enderecoSelecionado.dsModoDescarga == null\">NÃO INFORMADO</div>\n              <div *ngIf=\"enderecoSelecionado.dsModoDescarga != null\">{{ enderecoSelecionado.dsModoDescarga | uppercase }}</div>\n            </div>\n            <div class=\"form-group col-md-6\">\n              <label>Tipos de veículo</label>\n              <div *ngIf=\"enderecoSelecionado.tiposVeiculosDesc == null\">NÃO INFORMADO</div>\n              <div *ngIf=\"enderecoSelecionado.tiposVeiculosDesc != null\">{{ enderecoSelecionado.tiposVeiculosDesc | uppercase }}</div>\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-6 mb-0\">\n              <label>Dados especiais</label>\n              <div *ngIf=\"enderecoSelecionado.dadosEspeciaisDesc == null\">NÃO INFORMADO</div>\n              <div *ngIf=\"enderecoSelecionado.dadosEspeciaisDesc != null\">{{ enderecoSelecionado.dadosEspeciaisDesc | uppercase }}</div>\n            </div>\n            <div class=\"form-group col-md-6 mb-0\">\n              <label>Observação</label>\n              <div *ngIf=\"enderecoSelecionado.observacaoLib == null || enderecoSelecionado.observacaoLib == '' \">NÃO INFORMADO</div>\n              <div *ngIf=\"enderecoSelecionado.observacaoLib != null\">{{ enderecoSelecionado.observacaoLib | uppercase }}</div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col\">\n              <hr>\n            </div>\n          </div>\n\n          <div class=\"form-row\" *ngIf=\"(showAnexos && anexos.length > 0 || showAnexosMarketing && anexosMarketing.length > 0)\">\n\n            <div class=\"col-12\">\n              <div class=\"row\">\n                <div class=\"col-6\">\n                  <div class=\"row\">\n                    <div class=\"mtc-title mb-0\">Anexos do Vendedor</div>\n                  </div>\n                  <div class=\"row\">\n                    <custom-table [config]=\"tableConfigAnexos\" *ngIf=\"showAnexos && anexos.length > 0\">\n                      <ng-template #tbody let-tbody>\n                        <tr *ngFor=\"let anexo of anexos\">\n                          <td style=\"width: 95%\">\n                            {{ anexo.codAnexo }} - {{ anexo.nomeAnexo | uppercase }}\n                          </td>\n                          <td class=\"text-center\" style=\"width: 5%\">\n                            <a\n                              [href]=\"anexo.linkAnexo\"\n                              *ngIf=\"anexo.linkAnexo != null\"\n                              target=\"_blank\"\n                              class=\"btn-icon-sm mx-2 text-black\"\n                              tooltip=\"visualizar\">\n                              <i class=\"far fa-eye\"></i>\n                            </a>\n                          </td>\n                        </tr>\n                      </ng-template>\n                    </custom-table>\n                    <message\n                    icon=\"fas fa-exchange-alt\"\n                    text=\"Nenhum documento encontrado\"\n                    *ngIf=\"showAnexos && anexos.length === 0\">\n                  </message>\n                </div>\n              </div>\n              <div class=\"col-6\">\n                <div class=\"row\">\n                  <div class=\"mtc-title mb-0\">Anexos do Marketing</div>\n                </div>\n                <div class=\"row\">\n                  <custom-table [config]=\"tableConfigAnexos\" *ngIf=\"showAnexosMarketing && anexosMarketing.length > 0\">\n                    <ng-template #tbody let-tbody>\n                      <tr *ngFor=\"let anexo of anexosMarketing\">\n                        <td style=\"width: 95%\">\n                          {{ anexo.codAnexo }} - {{ anexo.nomeAnexo | uppercase }}\n                        </td>\n                        <td class=\"text-center\" style=\"width: 5%\">\n                          <a\n                            [href]=\"anexo.linkAnexo\"\n                            *ngIf=\"anexo.linkAnexo != null\"\n                            target=\"_blank\"\n                            class=\"btn-icon-sm mx-2 text-black\"\n                            tooltip=\"visualizar\">\n                            <i class=\"far fa-eye\"></i>\n                          </a>\n                        </td>\n                      </tr>\n                    </ng-template>\n                  </custom-table>\n                  <message\n                    icon=\"fas fa-exchange-alt\"\n                    text=\"Nenhum documento encontrado\"\n                    *ngIf=\"showAnexosMarketing && anexosMarketing.length === 0\">\n                  </message>\n                </div>\n              </div>\n            </div>\n\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"modal-footer\" *ngIf=\"enderecoSelecionado.situacao === 3\">\n          <button class=\"btn btn-primary\"(click)=\"onAction(confirm, 'Aprovação')\">Aprovar</button>\n          <button class=\"btn btn-danger\" (click)=\"onAction(confirm, 'Reprovação')\">Reprovar</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-template>\n<ng-template #confirm>\n  <div class=\"modal-header\">\n\n    <h4 id=\"dialog-sizes-name1\" class=\"modal-title\">\n      Justificativa de {{ acao }}\n    </h4>\n    <button type=\"button\" class=\"close pull-right\" (click)=\"onModalClose('confirm')\" aria-label=\"Close\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n\n  <div class=\"modal-container\">\n\n    <form [formGroup]=\"formExcecao\" autocomplete=\"off\">\n    <div class=\"col-lg-12 mt-2\" formArrayName=\"anexosAprovacao\">\n      <div class=\"row\">\n        <div class=\"col-lg-12 d-flex align-items-start\">\n          <div class=\"mtc-title mb-0\">Anexos</div>\n        </div>\n        <div class=\"col\">\n          <label\n            for=\"novoAnexo\"\n            class=\"d-flex justify-content-start align-items-center\"\n            style=\"cursor: pointer\"\n            [hidden]=\"visualizar\"\n          >\n            <p class=\"btn btn-sm btn-outline-primary m-0\">\n              <i class=\"fas fa-plus\"></i>\n              <span>Anexo</span>\n            </p>\n          </label>\n          <input\n            id=\"novoAnexo\"\n            type=\"file\"\n            (change)=\"appendFileAprovacao($event.target.files)\"\n            class=\"d-none\"\n          />\n        </div>\n      </div>\n      <div class=\"row\" *ngIf=\"formExcecao.value.anexosAprovacao.length > 0\">\n        <div class=\"col\">\n          <custom-table [config]=\"tableConfigAnexos\">\n            <ng-template #tbody let-tbody>\n              <tr\n                *ngFor=\"let anexo of anexosAprovacao.controls; let i = index\"\n                [formGroupName]=\"i\"\n              >\n                <td style=\"width: 90%\">\n                  {{ formExcecao.value.anexosAprovacao[i].codAnexo }} -\n                  {{ formExcecao.value.anexosAprovacao[i].nomeAnexo | uppercase }}\n                </td>\n                <td class=\"text-center\" style=\"width: 5%\">\n                  <a\n                    (click)=\"navegarAnexo(anexo)\"\n                    *ngIf=\"formExcecao.value.anexosAprovacao[i].codAnexo != null\"\n                    target=\"_blank\"\n                    class=\"btn-icon-sm mx-2 text-black\"\n                    tooltip=\"visualizar\"\n                  >\n                    <i class=\"far fa-eye\"></i>\n                  </a>\n                </td>\n                <td class=\"text-center\" style=\"width: 5%\">\n                  <btn-icon\n                    icon=\"fas fa-trash\"\n                    size=\"small\"\n                    tooltip=\"Excluir\"\n                    (click)=\"\n                      onDeleteAnexoAprovacao(formExcecao.value.anexosAprovacao[i].codAnexo, i)\n                    \"\n                    [hidden]=\"visualizar\"\n                  >\n                  </btn-icon>\n                </td>\n              </tr>\n            </ng-template>\n          </custom-table>\n        </div>\n      </div>\n      </div>\n    </form>\n  </div>\n\n  <div class=\"modal-container ml-3 mt-3 modal-title\" *ngIf=\"acao === 'Aprovação'\">\n\n    <btn-icon\n        [icon]=\"validaExcecao ? 'fas fa-check-square' : 'far fa-square'\"\n        size=\"small\"\n        (click)=\"onCheckExcecao()\">\n    </btn-icon>\n\n      <label class=\"ml-1\" for=\"situacoes\" style=\"font-weight: bold; font-size: 0.7rem;\">ADICIONAR EXCEÇÃO</label>\n  </div>\n\n  <div class=\"modal-container\" *ngIf=\"acao === 'Aprovação'\">\n    <form [formGroup]=\"formExcecao\" autocomplete=\"off\">\n      <div class=\"col-lg-12 mb-2 mb-md-0\"\n      *ngIf=\"validaExcecao\">\n        <ng-select\n          placeholder=\"SELECIONE...\"\n          [searchable]=\"false\"\n          [clearable]=\"false\"\n          [items]=\"excecoes\"\n          [virtualScroll]=\"false\"\n          bindLabel=\"excecao\"\n          bindValue=\"id\"\n          formControlName=\"excecao\">\n        </ng-select>\n      </div>\n    </form>\n  </div>\n\n  <div class=\"modal-body\">\n    <label class=\"ml-1\" for=\"motivo\" style=\"font-weight: bold; font-size: 0.7rem;\">MOTIVO</label>\n    <textarea class=\"form-control\" [(ngModel)]=\"msgModal\"></textarea>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"modal-footer\">\n          <button class=\"btn btn-primary\" (click)=\"onSubmitModal()\">Confirmar</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-template>\n\n");

/***/ }),

/***/ "nQFm":
/*!*****************************************************************!*\
  !*** ./src/app/modules/comercial/auditoria/auditoria.module.ts ***!
  \*****************************************************************/
/*! exports provided: ComercialAuditoriaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialAuditoriaModule", function() { return ComercialAuditoriaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "6No5");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "978R");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "2ZVE");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular2-text-mask */ "UVXo");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var ng_brazil__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-brazil */ "hTrW");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-currency-mask */ "D5nU");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _auditoria_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auditoria-routing.module */ "VEQJ");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var _auditoria_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./auditoria.component */ "HRsq");
/* harmony import */ var _enderecos_entrega_enderecos_entrega_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./enderecos-entrega/enderecos-entrega.component */ "LPlD");




// ngx-bootstrap




// ng-select

// ng-brazil



// PNotify

// Modules





let ComercialAuditoriaModule = class ComercialAuditoriaModule {
};
ComercialAuditoriaModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _auditoria_component__WEBPACK_IMPORTED_MODULE_16__["ComercialAuditoriaComponent"],
            _enderecos_entrega_enderecos_entrega_component__WEBPACK_IMPORTED_MODULE_17__["ComercialAuditoriaEnderecosEntregaComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"].forRoot(),
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(),
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__["TabsModule"].forRoot(),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsDatepickerModule"].forRoot(),
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"],
            angular2_text_mask__WEBPACK_IMPORTED_MODULE_9__["TextMaskModule"],
            ng_brazil__WEBPACK_IMPORTED_MODULE_10__["NgBrazil"],
            _auditoria_routing_module__WEBPACK_IMPORTED_MODULE_13__["ComercialAuditoriaRoutingModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_15__["TemplatesModule"],
            ng2_currency_mask__WEBPACK_IMPORTED_MODULE_11__["CurrencyMaskModule"],
        ],
        providers: [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__["PNotifyService"]],
    })
], ComercialAuditoriaModule);



/***/ }),

/***/ "qC4I":
/*!******************************************************************!*\
  !*** ./src/app/modules/comercial/auditoria/auditoria.service.ts ***!
  \******************************************************************/
/*! exports provided: ComercialAuditoriaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialAuditoriaService", function() { return ComercialAuditoriaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let ComercialAuditoriaService = class ComercialAuditoriaService {
    constructor(http) {
        this.http = http;
        this.API = `https://crm360.monterrey.com.bo/api/comercial/auditoria/enderecos-entrega`;
    }
    getListaEnderecosEntrega(params) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http
            .get(`${this.API}/lista`, { params: httpParams })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    aprovaReprovaEndereco(record) {
        return this.http
            .put(`${this.API}/aprova-reprova-endereco`, record)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getAnexos(codEndereco) {
        return this.http.get(`${this.API}/anexos/${codEndereco}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getUltimaCompra(codCliente) {
        return this.http
            .get(`${this.API}/ultima-compra/${codCliente}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getExcecao() {
        return this.http.get(`${this.API}/excecoes`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getAnexosAprovacao(codEndereco) {
        return this.http
            .get(`${this.API}/anexo/documentos/${codEndereco}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    postAnexosAprovacao(params, codEndereco) {
        return this.http.post(`${this.API}/anexo/documentos/salvar?codEndereco=${codEndereco}`, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    deleteAnexoAprovacao(codAnexo) {
        let params = {
            codAnexo: codAnexo,
        };
        return this.http
            .put(`${this.API}/anexo/documentos/excluir`, params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getCliente(codCliente) {
        return this.http.get(`https://crm360.monterrey.com.bo/api/comercial/clientes/detalhes/${codCliente}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
};
ComercialAuditoriaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ComercialAuditoriaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ComercialAuditoriaService);



/***/ }),

/***/ "wXig":
/*!**********************************************************************!*\
  !*** ./src/app/modules/comercial/auditoria/auditoria.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2F1ZGl0b3JpYS9hdWRpdG9yaWEuY29tcG9uZW50LnNjc3MifQ== */");

/***/ })

}]);
//# sourceMappingURL=auditoria-auditoria-module-es2015.js.map