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
        this.API = `http://23.254.204.187/api/comercial/vendedor`;
        this.API_CADASTROS = `http://23.254.204.187/api/comercial/cadastros`;
    }
    getDetalhesCadastro() {
        return this.http
            .get(`${this.API}/detalhes-cadastro`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getVendedores() {
        return this.http.get(`${this.API}/lista`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getVendedoresSucursal(id) {
        return this.http
            .get(`${this.API}/sucursal-vendedor/${id}`);
    }
    getGestiones() {
        return this.http.get(`${this.API_CADASTROS}/titulos-agenda/lista?codSituacao=1`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getCarteiraClientes(params) {
        return this.http
            .get(`${this.API}/carteira-clientes`, {
            params: params
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getCarteiraClientesCotizacion(params) {
        return this.http
            .get(`${this.API}/carteira-clientes-cotizacion`, {
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
    getDetalleVendedor(params) {
        return this.http
            .get(`${this.API}/detalles_vendedor`, {
            params: params
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getRubros() {
        return this.http
            .get(`${this.API}/rubros`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getVendedorSucursal(id_vendedor) {
        return this.http
            .get(`${this.API}/datosvendedor/${id_vendedor}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getSucursalVendedor(id_sucursal) {
        return this.http
            .get(`${this.API_CADASTROS}/datossucursal/${id_sucursal}`)
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
            'Marzo',
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
    // Función para obtener la fecha de inicio de la semana actual (lunes)
    getStartOfWeek() {
        const currentDate = new Date();
        const startOfWeek = new Date(currentDate);
        startOfWeek.setDate(currentDate.getDate() - currentDate.getDay() + (currentDate.getDay() === 0 ? -6 : 1));
        startOfWeek.setHours(0, 0, 0, 0);
        return startOfWeek;
    }
    // Función para obtener la fecha de fin de la semana actual (domingo)
    getEndOfWeek() {
        const currentDate = new Date();
        const endOfWeek = new Date(currentDate);
        endOfWeek.setDate(currentDate.getDate() - currentDate.getDay() + 7);
        endOfWeek.setHours(23, 59, 59, 999);
        return endOfWeek;
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
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<app-header appTitle=\"Auditorias\"></app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\r\n  <h5 class=\"pt-2 mb-4 text-center\">Selecione uma Auditoria</h5>\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-lg-10\">\r\n      <div class=\"row justify-content-center\">\r\n        <div class=\"col-md-3\" *ngFor=\"let atividade of atividades\">\r\n          <card-button\r\n            [icon]=\"atividade.iconeAtividade\"\r\n            [text]=\"atividade.nomeAtividade\"\r\n            [routerLink]=\"[atividade.rotaAtividade]\">\r\n          </card-button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</app-body>\r\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<app-header appTitle=\"Auditoria de Endereços\">\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onFilter()\">\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\r\n  <div class=\"row\" #scrollToFilter>\r\n    <div class=\"col\">\r\n      <advanced-filter #scrollToFilter>\r\n        <form [formGroup]=\"form\" autocomplete=\"off\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-3\">\r\n              <label for=\"tipoData\">Buscar por</label>\r\n              <select\r\n                class=\"form-control\"\r\n                id=\"tipoData\"\r\n                formControlName=\"tipoData\"\r\n                [ngClass]=\"onFieldError('tipoData') + ' ' + onFieldRequired('tipoData')\">\r\n                <option value=\"1\">Data de alteração</option>\r\n                <option value=\"2\">Data de aprovação/reprovação</option>\r\n                <invalid-form-control [show]=\"onFieldInvalid('tipoData') == 'required'\" message=\"'Buscar por' é obrigatório.\"></invalid-form-control>\r\n              </select>\r\n            </div>\r\n            <div class=\"form-group col-lg-2\">\r\n              <label for=\"dataInicial\">Data inicial</label>\r\n              <input\r\n                class=\"form-control\"\r\n                id=\"dataInicial\"\r\n                type=\"text\"\r\n                bsDatepicker\r\n                [bsConfig]=\"bsConfig\"\r\n                formControlName=\"dataInicial\"\r\n                [ngClass]=\"onFieldError('dataInicial') + ' ' + onFieldRequired('dataInicial')\">\r\n                <invalid-form-control [show]=\"onFieldInvalid('dataInicial') == 'required'\" message=\"Data Inicial é obrigatório.\"></invalid-form-control>\r\n            </div>\r\n            <div class=\"form-group col-lg-2\">\r\n              <label for=\"dataFinal\">Data final</label>\r\n              <input\r\n                class=\"form-control\"\r\n                id=\"dataFinal\"\r\n                type=\"text\"\r\n                bsDatepicker\r\n                [bsConfig]=\"bsConfig\"\r\n                formControlName=\"dataFinal\"\r\n                [ngClass]=\"onFieldError('dataFinal') + ' ' + onFieldRequired('dataFinal')\">\r\n                <invalid-form-control [show]=\"onFieldInvalid('dataFinal') == 'required'\" message=\"Data Final é obrigatório.\"></invalid-form-control>\r\n            </div>\r\n            <div class=\"form-group col-lg-2\">\r\n              <label for=\"idCliente\">Cód. Cliente</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"idCliente\"\r\n                formControlName=\"idCliente\">\r\n            </div>\r\n            <div class=\"form-group col-lg-3\">\r\n              <label for=\"dsCliente\">Razão Social</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"dsCliente\"\r\n                formControlName=\"dsCliente\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-3 mb-2 mb-md-0\">\r\n              <label for=\"situacoes\">Situação</label>\r\n              <ng-select\r\n                [searchable]=\"true\"\r\n                [clearable]=\"false\"\r\n                [items]=\"situacoesFiltered\"\r\n                formControlName=\"situacao\"\r\n                [virtualScroll]=\"true\"\r\n                [loading]=\"situacaoLoaded\"\r\n                labelForId=\"situacoes\"\r\n                bindLabel=\"situacao\"\r\n                bindValue=\"id\">\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"form-group col-lg-3 mb-2 mb-md-0\">\r\n              <label for=\"vendedores\">Vendedor</label>\r\n              <ng-select\r\n                [searchable]=\"true\"\r\n                [clearable]=\"false\"\r\n                [items]=\"vendedores\"\r\n                formControlName=\"vendedor\"\r\n                [virtualScroll]=\"true\"\r\n                labelForId=\"vendedores\"\r\n                bindLabel=\"nome\"\r\n                bindValue=\"id\">\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"form-group col-lg-1 mb-2 mb-md-0\">\r\n              <label for=\"registros\">Registros</label>\r\n              <select\r\n                class=\"form-control\"\r\n                id=\"registros\"\r\n                formControlName=\"registros\">\r\n                <option>25</option>\r\n                <option>50</option>\r\n                <option>100</option>\r\n                <option>200</option>\r\n                <option>300</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </advanced-filter>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <subtitles\r\n        [data]=\"subtitles\"\r\n        [show]=\"dadosPagination.length > 0 && !dadosEmpty\">\r\n      </subtitles>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <custom-table [config]=\"tableConfig\" *ngIf=\"dadosPagination.length > 0 && !dadosEmpty\">\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n            <th scope=\"col-1\">Dt. Atualização</th>\r\n            <th scope=\"col-4\">(Cod. Cliente) Razão Social</th>\r\n            <th scope=\"col-2\">Vendedor</th>\r\n            <th scope=\"col-2\">Usuário Cadastro</th>\r\n            <th scope=\"col-1\">Dt. Aprovação/Reprovação</th>\r\n            <th scope=\"col-2\">Quem Aprovou</th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let enderecoEntrega of dadosPagination; let i = index\" [class.table-active]=\"enderecoEntrega.id == enderecoSelecionado.id\">\r\n            <td\r\n              class=\"hover\"\r\n              [ngClass]=\"classStatusBorder(enderecoEntrega)\"\r\n              (click)=\"onDetails(detalhes, enderecoEntrega)\">\r\n              {{ enderecoEntrega.dataAtualizacao | date: 'dd/MM/yyyy - hh:mm' }}\r\n            </td>\r\n            <td\r\n              class=\"hover\"\r\n              (click)=\"onDetails(detalhes, enderecoEntrega)\">\r\n              ({{enderecoEntrega.idCliente}}) {{ enderecoEntrega.nome | uppercase }}\r\n            </td>\r\n            <td\r\n              class=\"hover\"\r\n              (click)=\"onDetails(detalhes, enderecoEntrega)\">\r\n              {{ enderecoEntrega.vendedor | uppercase }}\r\n            </td>\r\n            <td\r\n              class=\"hover\"\r\n              (click)=\"onDetails(detalhes, enderecoEntrega)\">\r\n              {{ enderecoEntrega.usuarioCadastro | uppercase }}\r\n            </td>\r\n            <td\r\n              class=\"hover\"\r\n              (click)=\"onDetails(detalhes, enderecoEntrega)\">\r\n              {{ enderecoEntrega.dataAprovacaoReprovacao | date: 'dd/MM/yyyy - hh:mm' }}\r\n            </td>\r\n            <td\r\n              class=\"hover\"\r\n              (click)=\"onDetails(detalhes, enderecoEntrega)\">\r\n              {{ enderecoEntrega.usuarioAprovacaoReprovacao | uppercase }}\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n      <empty-result\r\n        message=\"Nenhuma informação encontrada\"\r\n        class=\"my-3\"\r\n        *ngIf=\"dadosEmpty\">\r\n      </empty-result>\r\n      <div class=\"d-flex justify-content-center mt-3\" *ngIf=\"totalItems > itemsPerPage && dadosLoaded\">\r\n        <pagination\r\n          [maxSize]=\"maxSize\"\r\n          [(totalItems)]=\"totalItems\"\r\n          (pageChanged)=\"onPageChanged($event)\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPage\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\">\r\n        </pagination>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</app-body>\r\n<ng-template #detalhes>\r\n  <div class=\"modal-header\">\r\n    <h4 id=\"dialog-sizes-name1\" class=\"modal-title pull-left\">\r\n      {{ enderecoSelecionado.nome }} / {{ enderecoSelecionado.vendedor }}\r\n    </h4>\r\n    <button type=\"button\" class=\"close pull-right\" (click)=\"onModalClose('detalhes')\" aria-label=\"Close\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <div class=\"container-xl\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-6\">\r\n              <label>Ult. Compra</label>\r\n              <div *ngIf=\"enderecoSelecionado.ultimaCompra == null\">NÃO INFORMADO</div>\r\n              <div *ngIf=\"enderecoSelecionado.ultimaCompra != null\">{{ enderecoSelecionado.ultimaCompra }}</div>\r\n            </div>\r\n            <div class=\"form-group col-md-4\">\r\n              <label>Ult. Compra Grupo</label>\r\n              <div *ngIf=\"enderecoSelecionado.ultimaCompraGrupo == null\">NÃO INFORMADO</div>\r\n              <div *ngIf=\"enderecoSelecionado.ultimaCompraGrupo != null\">{{ enderecoSelecionado.ultimaCompraGrupo }}</div>\r\n            </div>\r\n            <div class=\"form-group col-md-2 align-items-center\">\r\n              <a\r\n                [routerLink]=\"['/comercial/clientes/detalhes', enderecoSelecionado.idCliente]\"\r\n                target=\"_blank\"\r\n                class=\"btn btn-primary\"\r\n                tooltip=\"Visualizar cadastro do cliente\">\r\n                Visualizar Cad. Completo\r\n              </a>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\" *ngIf=\"enderecoSelecionado.COD_CLIE_TERC\">\r\n            <div class=\"col\"><hr></div>\r\n          </div>\r\n          <div class=\"mtc-title\" *ngIf=\"enderecoSelecionado.COD_CLIE_TERC\">Cliente Terceiro da Entrega</div>\r\n          <div class=\"form-row\" *ngIf=\"enderecoSelecionado.COD_CLIE_TERC\">\r\n            <div class=\"form-group col-md-6\">\r\n              <label>Codigo</label>\r\n              <div>{{ enderecoSelecionado.COD_CLIE_TERC }}</div>\r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n              <label>CPF ou CNPJ</label>\r\n              <div *ngIf=\"clienteTerceiro[0].result.cpf != 0\">{{ clienteTerceiro[0].result.cpf }}</div>\r\n              <div *ngIf=\"clienteTerceiro[0].result.cnpj != 0\">{{ clienteTerceiro[0].result.cnpj }}</div>\r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n              <label>Nome ou Razão Social</label>\r\n              <div>{{ clienteTerceiro[0].result.razaoSocial }}</div>\r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n              <label>Tipo do Endereço de Entrega</label>\r\n              <div>{{ enderecoSelecionado.TP_ACAO }}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"col\"><hr></div>\r\n          </div>\r\n          <div class=\"mtc-title\" >Endereço de Entrega</div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-6\">\r\n              <label>CEP</label>\r\n              <div *ngIf=\"enderecoSelecionado.cep == null\">NÃO INFORMADO</div>\r\n              <div *ngIf=\"enderecoSelecionado.cep != null\">{{ enderecoSelecionado.cep | cep }}</div>\r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n              <label>Endereço</label>\r\n              <div *ngIf=\"enderecoSelecionado.endereco == null\">NÃO INFORMADO</div>\r\n              <div *ngIf=\"enderecoSelecionado.endereco != null\">{{ enderecoSelecionado.endereco }}\r\n              <a *ngIf=\"enderecoSelecionado.endereco != null\" class=\"btn-icon-sm ml-2\"\r\n                [href]=\"enviarEndereco(enderecoSelecionado)\"\r\n                target=\"_blank\">\r\n                <ng-template #tooltipAutoScrollTemplate>\r\n                  <p class=\"text-nowrap mb-0\">Visualizar no</p>\r\n                  <p class=\"text-nowrap mb-0\">Google Maps</p>\r\n                </ng-template>\r\n                <i class=\"fas fa-map-marker-alt\" [tooltip]=\"tooltipAutoScrollTemplate\"></i></a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-6\">\r\n              <label>Complemento</label>\r\n              <div *ngIf=\"enderecoSelecionado.complemento == null\">NÃO INFORMADO</div>\r\n              <div *ngIf=\"enderecoSelecionado.complemento != null\">{{ enderecoSelecionado.complemento }}</div>\r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n              <label>Referência</label>\r\n              <div *ngIf=\"enderecoSelecionado.referencia == null\">NÃO INFORMADO</div>\r\n              <div *ngIf=\"enderecoSelecionado.referencia != null\">{{ enderecoSelecionado.referencia }}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-6\">\r\n              <label>Bairro</label>\r\n              <div *ngIf=\"enderecoSelecionado.bairro == null\">NÃO INFORMADO</div>\r\n              <div *ngIf=\"enderecoSelecionado.bairro != null\">{{ enderecoSelecionado.bairro }}</div>\r\n            </div>\r\n            <div class=\"form-group col-md-6 mb-0\">\r\n              <label>Cidade</label>\r\n              <div *ngIf=\"enderecoSelecionado.cidade == null\">NÃO INFORMADO</div>\r\n              <div *ngIf=\"enderecoSelecionado.cidade != null\">\r\n                {{ enderecoSelecionado.cidade }}<span *ngIf=\"enderecoSelecionado.uf != null\"> / {{ enderecoSelecionado.uf }}</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <form [formGroup]=\"formLatLong\" autocomplete=\"off\">\r\n            <div class=\"form-row\">\r\n\r\n              <div class=\"form-group col-md-6 mb-0\">\r\n                <label>Latitude</label>\r\n                <div *ngIf=\"enderecoSelecionado.latitude == null\">\r\n                  <input\r\n                      class=\"form-control col-6\"\r\n                      id=\"latitude\"\r\n                      type=\"text\"\r\n                      formControlName=\"latitude\"\r\n                      [ngClass]=\"onFieldErrorLatLong('latitude') + ' ' + onFieldRequiredLatLong('latitude')\"\r\n                      >\r\n\r\n                      <invalid-form-control [show]=\"onFieldInvalidLatLong('latitude')\" message=\"Latitude é obrigatório.\"></invalid-form-control>\r\n                </div>\r\n                <div *ngIf=\"enderecoSelecionado.latitude != null\">{{ enderecoSelecionado.latitude }}</div>\r\n              </div>\r\n\r\n              <div class=\"form-group col-md-6\">\r\n                <label>Longitude</label>\r\n                <div *ngIf=\"enderecoSelecionado.longitude == null\">\r\n                  <input\r\n                      class=\"form-control col-6\"\r\n                      id=\"longitude\"\r\n                      type=\"text\"\r\n                      formControlName=\"longitude\"\r\n                      [ngClass]=\"onFieldErrorLatLong('longitude') + ' ' + onFieldRequiredLatLong('longitude')\"\r\n                      >\r\n                      <invalid-form-control [show]=\"onFieldInvalidLatLong('longitude')\" message=\"Longitude é obrigatório.\"></invalid-form-control>\r\n                </div>\r\n                <div *ngIf=\"enderecoSelecionado.longitude != null\">{{ enderecoSelecionado.longitude }}</div>\r\n              </div>\r\n            </div>\r\n        </form>\r\n\r\n          <div class=\"form-row\">\r\n            <div class=\"col\"><hr></div>\r\n          </div>\r\n          <div class=\"mtc-title\">Dados de entrega</div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-6\">\r\n              <label>Título do local de entrega</label>\r\n              <div *ngIf=\"enderecoSelecionado.titulo == null\">NÃO INFORMADO</div>\r\n              <div *ngIf=\"enderecoSelecionado.titulo != null\">{{ enderecoSelecionado.titulo }}</div>\r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n              <label>Região de entrega</label>\r\n              <div *ngIf=\"enderecoSelecionado.descRegiaoEntrega == null\">NÃO INFORMADO</div>\r\n              <div *ngIf=\"enderecoSelecionado.descRegiaoEntrega != null\">{{ enderecoSelecionado.descRegiaoEntrega }}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col\">\r\n              <label>Dias para realizar entregas</label>\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col d-flex w-100 mb-1\">\r\n                  <div class=\"d-flex mr-1\">\r\n                    <div class=\"mr-1\">\r\n                      <i class=\"fas fa-times-circle text-danger\" *ngIf=\"enderecoSelecionado.diasEntrega.segunda.checked == 0\"></i>\r\n                      <i class=\"fas fa-check-circle text-success\" *ngIf=\"enderecoSelecionado.diasEntrega.segunda.checked == 1\"></i>\r\n                    </div>\r\n                    <span>Segunda-feira:</span>\r\n                  </div>\r\n                  <div *ngIf=\"enderecoSelecionado.diasEntrega.segunda.checked == 1\">\r\n                    <div *ngIf=\"enderecoSelecionado.diasEntrega.segunda.minimo !== null && enderecoSelecionado.diasEntrega.segunda.maximo !== null\">\r\n                      das {{ convertMysqlTime(enderecoSelecionado.diasEntrega.segunda.minimo) }} às {{ convertMysqlTime(enderecoSelecionado.diasEntrega.segunda.maximo) }}\r\n                    </div>\r\n                    <div *ngIf=\"enderecoSelecionado.diasEntrega.segunda.minimo == null || enderecoSelecionado.diasEntrega.segunda.maximo == null\">\r\n                      horário não informado\r\n                    </div>\r\n                  </div>\r\n                  <strong *ngIf=\"enderecoSelecionado.diasEntrega.segunda.checked == 0\">\r\n                    não aceita entregas\r\n                  </strong>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col d-flex w-100 mb-1\">\r\n                  <div class=\"d-flex mr-1\">\r\n                    <div class=\"mr-1\">\r\n                      <i class=\"fas fa-times-circle text-danger\" *ngIf=\"enderecoSelecionado.diasEntrega.terca.checked == 0\"></i>\r\n                      <i class=\"fas fa-check-circle text-success\" *ngIf=\"enderecoSelecionado.diasEntrega.terca.checked == 1\"></i>\r\n                    </div>\r\n                    <span>Terça-feira:</span>\r\n                  </div>\r\n                  <div *ngIf=\"enderecoSelecionado.diasEntrega.terca.checked == 1\">\r\n                    <div *ngIf=\"enderecoSelecionado.diasEntrega.terca.minimo !== null && enderecoSelecionado.diasEntrega.terca.maximo !== null\">\r\n                      das {{ convertMysqlTime(enderecoSelecionado.diasEntrega.terca.minimo) }} às {{ convertMysqlTime(enderecoSelecionado.diasEntrega.terca.maximo) }}\r\n                    </div>\r\n                    <div *ngIf=\"enderecoSelecionado.diasEntrega.terca.minimo == null || enderecoSelecionado.diasEntrega.terca.maximo == null\">\r\n                      horário não informado\r\n                    </div>\r\n                  </div>\r\n                  <strong *ngIf=\"enderecoSelecionado.diasEntrega.terca.checked == 0\">\r\n                    não aceita entregas\r\n                  </strong>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col d-flex w-100 mb-1\">\r\n                  <div class=\"d-flex mr-1\">\r\n                    <div class=\"mr-1\">\r\n                      <i class=\"fas fa-times-circle text-danger\" *ngIf=\"enderecoSelecionado.diasEntrega.quarta.checked == 0\"></i>\r\n                      <i class=\"fas fa-check-circle text-success\" *ngIf=\"enderecoSelecionado.diasEntrega.quarta.checked == 1\"></i>\r\n                    </div>\r\n                    <span>Quarta-feira:</span>\r\n                  </div>\r\n                  <div *ngIf=\"enderecoSelecionado.diasEntrega.quarta.checked == 1\">\r\n                    <div *ngIf=\"enderecoSelecionado.diasEntrega.quarta.minimo !== null && enderecoSelecionado.diasEntrega.quarta.maximo !== null\">\r\n                      das {{ convertMysqlTime(enderecoSelecionado.diasEntrega.quarta.minimo) }} às {{ convertMysqlTime(enderecoSelecionado.diasEntrega.quarta.maximo) }}\r\n                    </div>\r\n                    <div *ngIf=\"enderecoSelecionado.diasEntrega.quarta.minimo == null || enderecoSelecionado.diasEntrega.quarta.maximo == null\">\r\n                      horário não informado\r\n                    </div>\r\n                  </div>\r\n                  <strong *ngIf=\"enderecoSelecionado.diasEntrega.quarta.checked == 0\">\r\n                    não aceita entregas\r\n                  </strong>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col d-flex w-100 mb-1\">\r\n                  <div class=\"d-flex mr-1\">\r\n                    <div class=\"mr-1\">\r\n                      <i class=\"fas fa-times-circle text-danger\" *ngIf=\"enderecoSelecionado.diasEntrega.quinta.checked == 0\"></i>\r\n                      <i class=\"fas fa-check-circle text-success\" *ngIf=\"enderecoSelecionado.diasEntrega.quinta.checked == 1\"></i>\r\n                    </div>\r\n                    <span>Quinta-feira:</span>\r\n                  </div>\r\n                  <div *ngIf=\"enderecoSelecionado.diasEntrega.quinta.checked == 1\">\r\n                    <div *ngIf=\"enderecoSelecionado.diasEntrega.quinta.minimo !== null && enderecoSelecionado.diasEntrega.quinta.maximo !== null\">\r\n                      das {{ convertMysqlTime(enderecoSelecionado.diasEntrega.quinta.minimo) }} às {{ convertMysqlTime(enderecoSelecionado.diasEntrega.quinta.maximo) }}\r\n                    </div>\r\n                    <div *ngIf=\"enderecoSelecionado.diasEntrega.quinta.minimo == null || enderecoSelecionado.diasEntrega.quinta.maximo == null\">\r\n                      horário não informado\r\n                    </div>\r\n                  </div>\r\n                  <strong *ngIf=\"enderecoSelecionado.diasEntrega.quinta.checked == 0\">\r\n                    não aceita entregas\r\n                  </strong>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col d-flex w-100 mb-1\">\r\n                  <div class=\"d-flex mr-1\">\r\n                    <div class=\"mr-1\">\r\n                      <i class=\"fas fa-times-circle text-danger\" *ngIf=\"enderecoSelecionado.diasEntrega.sexta.checked == 0\"></i>\r\n                      <i class=\"fas fa-check-circle text-success\" *ngIf=\"enderecoSelecionado.diasEntrega.sexta.checked == 1\"></i>\r\n                    </div>\r\n                    <span>Sexta-feira:</span>\r\n                  </div>\r\n                  <div *ngIf=\"enderecoSelecionado.diasEntrega.sexta.checked == 1\">\r\n                    <div *ngIf=\"enderecoSelecionado.diasEntrega.sexta.minimo !== null && enderecoSelecionado.diasEntrega.sexta.maximo !== null\">\r\n                      das {{ convertMysqlTime(enderecoSelecionado.diasEntrega.sexta.minimo) }} às {{ convertMysqlTime(enderecoSelecionado.diasEntrega.sexta.maximo) }}\r\n                    </div>\r\n                    <div *ngIf=\"enderecoSelecionado.diasEntrega.sexta.minimo == null || enderecoSelecionado.diasEntrega.sexta.maximo == null\">\r\n                      horário não informado\r\n                    </div>\r\n                  </div>\r\n                  <strong *ngIf=\"enderecoSelecionado.diasEntrega.sexta.checked == 0\">\r\n                    não aceita entregas\r\n                  </strong>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col d-flex w-100 mb-1\">\r\n                  <div class=\"d-flex mr-1\">\r\n                    <div class=\"mr-1\">\r\n                      <i class=\"fas fa-times-circle text-danger\" *ngIf=\"enderecoSelecionado.diasEntrega.sabado.checked == 0\"></i>\r\n                      <i class=\"fas fa-check-circle text-success\" *ngIf=\"enderecoSelecionado.diasEntrega.sabado.checked == 1\"></i>\r\n                    </div>\r\n                    <span>Sábado:</span>\r\n                  </div>\r\n                  <div *ngIf=\"enderecoSelecionado.diasEntrega.sabado.checked == 1\">\r\n                    <div *ngIf=\"enderecoSelecionado.diasEntrega.sabado.minimo !== null && enderecoSelecionado.diasEntrega.sabado.maximo !== null\">\r\n                      das {{ convertMysqlTime(enderecoSelecionado.diasEntrega.sabado.minimo) }} às {{ convertMysqlTime(enderecoSelecionado.diasEntrega.sabado.maximo) }}\r\n                    </div>\r\n                    <div *ngIf=\"enderecoSelecionado.diasEntrega.sabado.minimo == null || enderecoSelecionado.diasEntrega.sabado.maximo == null\">\r\n                      horário não informado\r\n                    </div>\r\n                  </div>\r\n                  <strong *ngIf=\"enderecoSelecionado.diasEntrega.sabado.checked == 0\">\r\n                    não aceita entregas\r\n                  </strong>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col d-flex w-100 mb-1\">\r\n                  <div class=\"d-flex mr-1\">\r\n                    <div class=\"mr-1\">\r\n                      <i class=\"fas fa-times-circle text-danger\" *ngIf=\"enderecoSelecionado.diasEntrega.domingo.checked == 0\"></i>\r\n                      <i class=\"fas fa-check-circle text-success\" *ngIf=\"enderecoSelecionado.diasEntrega.domingo.checked == 1\"></i>\r\n                    </div>\r\n                    <span>Domingo:</span>\r\n                  </div>\r\n                  <div *ngIf=\"enderecoSelecionado.diasEntrega.domingo.checked == 1\">\r\n                    <div *ngIf=\"enderecoSelecionado.diasEntrega.domingo.minimo !== null && enderecoSelecionado.diasEntrega.domingo.maximo !== null\">\r\n                      das {{ convertMysqlTime(enderecoSelecionado.diasEntrega.domingo.minimo) }} às {{ convertMysqlTime(enderecoSelecionado.diasEntrega.domingo.maximo) }}\r\n                    </div>\r\n                    <div *ngIf=\"enderecoSelecionado.diasEntrega.domingo.minimo == null || enderecoSelecionado.diasEntrega.domingo.maximo == null\">\r\n                      horário não informado\r\n                    </div>\r\n                  </div>\r\n                  <strong *ngIf=\"enderecoSelecionado.diasEntrega.domingo.checked == 0\">\r\n                    não aceita entregas\r\n                  </strong>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-6\">\r\n              <label>Tipo de material</label>\r\n              <div *ngIf=\"enderecoSelecionado.dsTipoMaterial == null\">NÃO INFORMADO</div>\r\n              <div *ngIf=\"enderecoSelecionado.dsTipoMaterial != null\">{{ enderecoSelecionado.dsTipoMaterial | uppercase }}</div>\r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n              <label>Tipo de descarga</label>\r\n              <div *ngIf=\"enderecoSelecionado.dsTipoDescarga == null\">NÃO INFORMADO</div>\r\n              <div *ngIf=\"enderecoSelecionado.dsTipoDescarga != null\">{{ enderecoSelecionado.dsTipoDescarga | uppercase }}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-6\">\r\n              <label>Modo de descarga</label>\r\n              <div *ngIf=\"enderecoSelecionado.dsModoDescarga == null\">NÃO INFORMADO</div>\r\n              <div *ngIf=\"enderecoSelecionado.dsModoDescarga != null\">{{ enderecoSelecionado.dsModoDescarga | uppercase }}</div>\r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n              <label>Tipos de veículo</label>\r\n              <div *ngIf=\"enderecoSelecionado.tiposVeiculosDesc == null\">NÃO INFORMADO</div>\r\n              <div *ngIf=\"enderecoSelecionado.tiposVeiculosDesc != null\">{{ enderecoSelecionado.tiposVeiculosDesc | uppercase }}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-6 mb-0\">\r\n              <label>Dados especiais</label>\r\n              <div *ngIf=\"enderecoSelecionado.dadosEspeciaisDesc == null\">NÃO INFORMADO</div>\r\n              <div *ngIf=\"enderecoSelecionado.dadosEspeciaisDesc != null\">{{ enderecoSelecionado.dadosEspeciaisDesc | uppercase }}</div>\r\n            </div>\r\n            <div class=\"form-group col-md-6 mb-0\">\r\n              <label>Observação</label>\r\n              <div *ngIf=\"enderecoSelecionado.observacaoLib == null || enderecoSelecionado.observacaoLib == '' \">NÃO INFORMADO</div>\r\n              <div *ngIf=\"enderecoSelecionado.observacaoLib != null\">{{ enderecoSelecionado.observacaoLib | uppercase }}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              <hr>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-row\" *ngIf=\"(showAnexos && anexos.length > 0 || showAnexosMarketing && anexosMarketing.length > 0)\">\r\n\r\n            <div class=\"col-12\">\r\n              <div class=\"row\">\r\n                <div class=\"col-6\">\r\n                  <div class=\"row\">\r\n                    <div class=\"mtc-title mb-0\">Anexos do Vendedor</div>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <custom-table [config]=\"tableConfigAnexos\" *ngIf=\"showAnexos && anexos.length > 0\">\r\n                      <ng-template #tbody let-tbody>\r\n                        <tr *ngFor=\"let anexo of anexos\">\r\n                          <td style=\"width: 95%\">\r\n                            {{ anexo.codAnexo }} - {{ anexo.nomeAnexo | uppercase }}\r\n                          </td>\r\n                          <td class=\"text-center\" style=\"width: 5%\">\r\n                            <a\r\n                              [href]=\"anexo.linkAnexo\"\r\n                              *ngIf=\"anexo.linkAnexo != null\"\r\n                              target=\"_blank\"\r\n                              class=\"btn-icon-sm mx-2 text-black\"\r\n                              tooltip=\"visualizar\">\r\n                              <i class=\"far fa-eye\"></i>\r\n                            </a>\r\n                          </td>\r\n                        </tr>\r\n                      </ng-template>\r\n                    </custom-table>\r\n                    <message\r\n                    icon=\"fas fa-exchange-alt\"\r\n                    text=\"Nenhum documento encontrado\"\r\n                    *ngIf=\"showAnexos && anexos.length === 0\">\r\n                  </message>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-6\">\r\n                <div class=\"row\">\r\n                  <div class=\"mtc-title mb-0\">Anexos do Marketing</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <custom-table [config]=\"tableConfigAnexos\" *ngIf=\"showAnexosMarketing && anexosMarketing.length > 0\">\r\n                    <ng-template #tbody let-tbody>\r\n                      <tr *ngFor=\"let anexo of anexosMarketing\">\r\n                        <td style=\"width: 95%\">\r\n                          {{ anexo.codAnexo }} - {{ anexo.nomeAnexo | uppercase }}\r\n                        </td>\r\n                        <td class=\"text-center\" style=\"width: 5%\">\r\n                          <a\r\n                            [href]=\"anexo.linkAnexo\"\r\n                            *ngIf=\"anexo.linkAnexo != null\"\r\n                            target=\"_blank\"\r\n                            class=\"btn-icon-sm mx-2 text-black\"\r\n                            tooltip=\"visualizar\">\r\n                            <i class=\"far fa-eye\"></i>\r\n                          </a>\r\n                        </td>\r\n                      </tr>\r\n                    </ng-template>\r\n                  </custom-table>\r\n                  <message\r\n                    icon=\"fas fa-exchange-alt\"\r\n                    text=\"Nenhum documento encontrado\"\r\n                    *ngIf=\"showAnexosMarketing && anexosMarketing.length === 0\">\r\n                  </message>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"modal-footer\" *ngIf=\"enderecoSelecionado.situacao === 3\">\r\n          <button class=\"btn btn-primary\"(click)=\"onAction(confirm, 'Aprovação')\">Aprovar</button>\r\n          <button class=\"btn btn-danger\" (click)=\"onAction(confirm, 'Reprovação')\">Reprovar</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n<ng-template #confirm>\r\n  <div class=\"modal-header\">\r\n\r\n    <h4 id=\"dialog-sizes-name1\" class=\"modal-title\">\r\n      Justificativa de {{ acao }}\r\n    </h4>\r\n    <button type=\"button\" class=\"close pull-right\" (click)=\"onModalClose('confirm')\" aria-label=\"Close\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n\r\n  <div class=\"modal-container\">\r\n\r\n    <form [formGroup]=\"formExcecao\" autocomplete=\"off\">\r\n    <div class=\"col-lg-12 mt-2\" formArrayName=\"anexosAprovacao\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-12 d-flex align-items-start\">\r\n          <div class=\"mtc-title mb-0\">Anexos</div>\r\n        </div>\r\n        <div class=\"col\">\r\n          <label\r\n            for=\"novoAnexo\"\r\n            class=\"d-flex justify-content-start align-items-center\"\r\n            style=\"cursor: pointer\"\r\n            [hidden]=\"visualizar\"\r\n          >\r\n            <p class=\"btn btn-sm btn-outline-primary m-0\">\r\n              <i class=\"fas fa-plus\"></i>\r\n              <span>Anexo</span>\r\n            </p>\r\n          </label>\r\n          <input\r\n            id=\"novoAnexo\"\r\n            type=\"file\"\r\n            (change)=\"appendFileAprovacao($event.target.files)\"\r\n            class=\"d-none\"\r\n          />\r\n        </div>\r\n      </div>\r\n      <div class=\"row\" *ngIf=\"formExcecao.value.anexosAprovacao.length > 0\">\r\n        <div class=\"col\">\r\n          <custom-table [config]=\"tableConfigAnexos\">\r\n            <ng-template #tbody let-tbody>\r\n              <tr\r\n                *ngFor=\"let anexo of anexosAprovacao.controls; let i = index\"\r\n                [formGroupName]=\"i\"\r\n              >\r\n                <td style=\"width: 90%\">\r\n                  {{ formExcecao.value.anexosAprovacao[i].codAnexo }} -\r\n                  {{ formExcecao.value.anexosAprovacao[i].nomeAnexo | uppercase }}\r\n                </td>\r\n                <td class=\"text-center\" style=\"width: 5%\">\r\n                  <a\r\n                    (click)=\"navegarAnexo(anexo)\"\r\n                    *ngIf=\"formExcecao.value.anexosAprovacao[i].codAnexo != null\"\r\n                    target=\"_blank\"\r\n                    class=\"btn-icon-sm mx-2 text-black\"\r\n                    tooltip=\"visualizar\"\r\n                  >\r\n                    <i class=\"far fa-eye\"></i>\r\n                  </a>\r\n                </td>\r\n                <td class=\"text-center\" style=\"width: 5%\">\r\n                  <btn-icon\r\n                    icon=\"fas fa-trash\"\r\n                    size=\"small\"\r\n                    tooltip=\"Excluir\"\r\n                    (click)=\"\r\n                      onDeleteAnexoAprovacao(formExcecao.value.anexosAprovacao[i].codAnexo, i)\r\n                    \"\r\n                    [hidden]=\"visualizar\"\r\n                  >\r\n                  </btn-icon>\r\n                </td>\r\n              </tr>\r\n            </ng-template>\r\n          </custom-table>\r\n        </div>\r\n      </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n\r\n  <div class=\"modal-container ml-3 mt-3 modal-title\" *ngIf=\"acao === 'Aprovação'\">\r\n\r\n    <btn-icon\r\n        [icon]=\"validaExcecao ? 'fas fa-check-square' : 'far fa-square'\"\r\n        size=\"small\"\r\n        (click)=\"onCheckExcecao()\">\r\n    </btn-icon>\r\n\r\n      <label class=\"ml-1\" for=\"situacoes\" style=\"font-weight: bold; font-size: 0.7rem;\">ADICIONAR EXCEÇÃO</label>\r\n  </div>\r\n\r\n  <div class=\"modal-container\" *ngIf=\"acao === 'Aprovação'\">\r\n    <form [formGroup]=\"formExcecao\" autocomplete=\"off\">\r\n      <div class=\"col-lg-12 mb-2 mb-md-0\"\r\n      *ngIf=\"validaExcecao\">\r\n        <ng-select\r\n          placeholder=\"SELECIONE...\"\r\n          [searchable]=\"false\"\r\n          [clearable]=\"false\"\r\n          [items]=\"excecoes\"\r\n          [virtualScroll]=\"false\"\r\n          bindLabel=\"excecao\"\r\n          bindValue=\"id\"\r\n          formControlName=\"excecao\">\r\n        </ng-select>\r\n      </div>\r\n    </form>\r\n  </div>\r\n\r\n  <div class=\"modal-body\">\r\n    <label class=\"ml-1\" for=\"motivo\" style=\"font-weight: bold; font-size: 0.7rem;\">MOTIVO</label>\r\n    <textarea class=\"form-control\" [(ngModel)]=\"msgModal\"></textarea>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"modal-footer\">\r\n          <button class=\"btn btn-primary\" (click)=\"onSubmitModal()\">Confirmar</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n");

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
        this.API = `http://23.254.204.187/api/comercial/auditoria/enderecos-entrega`;
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
        return this.http.get(`http://23.254.204.187/api/comercial/clientes/detalhes/${codCliente}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
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