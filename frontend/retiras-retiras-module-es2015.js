(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["retiras-retiras-module"],{

/***/ "0yQ1":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/logistica/entrega/retiras/cadastro/cadastro.component.ts ***!
  \**********************************************************************************/
/*! exports provided: LogisticaEntregaRetirasCadastroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaEntregaRetirasCadastroComponent", function() { return LogisticaEntregaRetirasCadastroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cadastro.component.html */ "KGU2");
/* harmony import */ var _cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cadastro.component.scss */ "C+Rl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var _services_retiras_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/retiras.service */ "WL+P");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _cadastros_motoristas_services_motorista_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../cadastros/motoristas/services/motorista.service */ "z/iS");
/* harmony import */ var src_app_shared_services_requests_estados_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/services/requests/estados.service */ "H0sO");
/* harmony import */ var _cadastros_veiculos_services_veiculo_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../cadastros/veiculos/services/veiculo.service */ "3ocw");
/* harmony import */ var ng_brazil__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-brazil */ "hTrW");
/* harmony import */ var src_app_modules_admin_atividades_services_atividades_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/modules/admin/atividades/services/atividades.service */ "UNg1");



//angular



//rxjs

//ngx

// services








//masks


let LogisticaEntregaRetirasCadastroComponent = class LogisticaEntregaRetirasCadastroComponent {
    constructor(service, formBuilder, localeService, routerService, atividadesService, atividaesAdminService, activatedRoute, dateService, route, pnotify, motoristasService, veiculosService, estadosService, modalService) {
        this.service = service;
        this.formBuilder = formBuilder;
        this.localeService = localeService;
        this.routerService = routerService;
        this.atividadesService = atividadesService;
        this.atividaesAdminService = atividaesAdminService;
        this.activatedRoute = activatedRoute;
        this.dateService = dateService;
        this.route = route;
        this.pnotify = pnotify;
        this.motoristasService = motoristasService;
        this.veiculosService = veiculosService;
        this.estadosService = estadosService;
        this.modalService = modalService;
        this.appTitle = 'Cadastro';
        this.MASKS = ng_brazil__WEBPACK_IMPORTED_MODULE_16__["MASKS"];
        this.loading = true;
        this.loadingNavBar = false;
        this.loadingSalvarRomaneio = false;
        this.breadCrumbTree = [
            {
                descricao: 'Logística',
            },
            {
                descricao: 'GESTIÓN DE ENTREGAS',
                routerLink: '../../',
            },
            {
                descricao: 'Retiras',
                routerLink: '../',
            },
            {
                descricao: this.appTitle,
            },
        ];
        this.filiais = [];
        /* Pagination */
        this.itemsPerPage = 100;
        this.currentPage = 1;
        this.totalItems = 0;
        this.begin = 0;
        this.end = this.itemsPerPage;
        /* Pagination */
        this.pedidos = new Array();
        this.pedidosSelecionados = new Array();
        this.pedidosSelecionadosLoading = false;
        this.materiais = new Array();
        this.materiaisLoading = false;
        this.motoristas = new Array();
        this.loadingMotoristas = true;
        this.veiculos = new Array();
        this.loadingVeiculos = true;
        this.tableConfig = {
            subtitleBorder: true
        };
        this.formTransporte = this.formBuilder.group({
            ID_LOGI_MOTO: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            ID_LOGI_VEIC: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            ID_LOGI_ROMA: [null],
            CD_FILI: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
        });
        this.form = this.formBuilder.group({
            DT_INIC: [new Date()],
            DT_FINA: [new Date()],
            CD_FILI: [null],
            CD_CLIE: [null],
            CD_PEDI: [null],
            DS_ESTA: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(2)],
            CD_CEP: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(9)],
            DS_CIDA: [null],
            NM_CLIE: [null],
            NOTA_FISC: [null],
            TIME: [new Date().getTime()],
        });
        this.localeService.use('pt-br');
        this.bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' }, { adaptivePosition: true }, { showWeekNumbers: false });
    }
    ngOnInit() {
        this.atividadesService.registrarAcesso().subscribe();
        this.getRoutesRegister();
        this.onActivatedRoute();
        this.getMotoristas({ IN_PAGI: '0', IN_STAT: '1' });
        this.getVeiculos({ IN_PAGI: '0', IN_STAT: '1' });
        this.getEstados();
        this.getFiliais();
    }
    ngOnDestroy() {
        this.$activatedRouteSubscription.unsubscribe();
    }
    onActivatedRoute() {
        this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe((response) => {
            const _response = this.routerService.getBase64UrlParams(response);
            if (!_response) {
                return;
            }
            if (_response.hasOwnProperty('ID_LOGI_ROMA')) {
                this.loading = false;
                this.getRomaneio({ ID_LOGI_ROMA: _response['ID_LOGI_ROMA'] });
                this.getPedidosRomaneio({ ID_LOGI_ROMA: _response['ID_LOGI_ROMA'], IN_STAT: 1 });
                return;
            }
            this.form.patchValue(_response);
            this.getPedidos(this.getParams());
        });
    }
    getFiliais() {
        this.service
            .getFiliais()
            .subscribe(response => {
            this.filiais = response;
        });
    }
    getPedidos(params) {
        this.pedidos = [];
        if (!this.loading)
            this.loadingNavBar = true;
        this.service
            .getPedidos(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
            this.loading = false;
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.pedidos = response.body['data'];
                this.totalItems = response.body['total'];
                this.begin = 0;
                this.end = this.itemsPerPage;
            }
            else if (response.status === 204) {
            }
            else {
                this.pnotify.error();
            }
        }, (error) => {
            var _a;
            const message = (_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.message;
            message ? this.pnotify.error(message) : this.pnotify.error();
        });
    }
    getPedidosRomaneio(params) {
        this.pedidosSelecionados = [];
        this.pedidosSelecionadosLoading = true;
        this.service
            .getPedidos(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
            this.pedidosSelecionadosLoading = false;
        }))
            .subscribe((response) => {
            if (response.status !== 200) {
                return;
            }
            this.pedidosSelecionados = response.body['data'];
        }, (error) => {
            var _a;
            const message = (_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.message;
            message ? this.pnotify.error(message) : this.pnotify.error();
        });
    }
    getRomaneio(params) {
        this.service
            .getRomaneios(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
        }))
            .subscribe((response) => {
            if (response.status !== 200) {
                this.pnotify.error('Falha ao carregar o romaneio.');
                return;
            }
            const romaneio = response.body['data'][0];
            this.formTransporte.patchValue(romaneio);
        }, (error) => {
            var _a;
            const message = (_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.message;
            message ? this.pnotify.error(message) : this.pnotify.error();
        });
    }
    postRomaneio() {
        this.loadingSalvarRomaneio = true;
        const romaneio = this.formTransporte.value;
        this.service
            .postRomaneio(romaneio)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
        }))
            .subscribe((response) => {
            if (response.status !== 200 || !response.body['data']) {
                this.pnotify.error('Falha ao salvar o romaneio.');
                return;
            }
            this.formTransporte.get('ID_LOGI_ROMA').setValue(response.body['data']);
            this.postPedidos();
        }, (error) => {
            this.pnotify.error(error.error['message']);
        });
    }
    postPedidos() {
        const params = { 'ID_LOGI_ROMA': this.formTransporte.get('ID_LOGI_ROMA').value, 'PEDI': this.pedidosSelecionados };
        this.service
            .postPedidos(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
            this.loadingSalvarRomaneio = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.pedidosSelecionados = [];
                this.formTransporte.reset();
                this.route.navigate([]);
                this.pnotify.success();
            }
            else {
                this.pnotify.error();
            }
        }, (error) => {
            var _a;
            const message = (_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.message;
            message ? this.pnotify.error(message) : this.pnotify.error();
        });
    }
    getParams(params) {
        let _params = {};
        let _obj = params !== null && params !== void 0 ? params : this.form.value;
        for (let prop in _obj) {
            if (_obj[prop]) {
                if (_obj[prop] instanceof Date)
                    _params[prop] = this.dateService
                        .convertToBrazilianDate(_obj[prop])
                        .substring(0, 10);
                else
                    _params[prop] = _obj[prop];
            }
        }
        return _params;
    }
    onSearch() {
        this.form.get('TIME').setValue(new Date().getTime());
        this.route.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams(this.getParams()),
        });
    }
    onReset() {
        this.form.reset();
        this.form.updateValueAndValidity();
        this.pedidos = [];
        this.route.navigate([]);
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
    // Validação de formulário
    /* Paginação */
    onPageChanged(event) {
        /* this.form.get('PAGINA').setValue(event.page);
        this.onSearch(); */
        this.begin = (event.page - 1) * event.itemsPerPage;
        this.end = event.page * event.itemsPerPage;
    }
    /* Paginação */
    getMotoristas(params) {
        this.loadingMotoristas = true;
        this.motoristasService
            .getMotoristas(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
            this.loadingMotoristas = false;
        }))
            .subscribe((response) => {
            if (response.status !== 200) {
                this.pnotify.notice("Nenhum motorista localizado");
                return;
            }
            this.motoristas = response.body['data'];
        }, (error) => {
            this.pnotify.error('Erro ao carregar motoristas.');
        });
    }
    getVeiculos(params) {
        this.loadingVeiculos = true;
        this.veiculosService
            .getVeiculos(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
            this.loadingVeiculos = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.veiculos = response.body['data'];
            }
        }, (error) => {
            this.pnotify.error('Erro ao carregar motoristas');
        });
    }
    getEstados() {
        this.estados = this.estadosService.getEstados();
    }
    openModal(template) {
        this.modalRef = this.modalService.show(template, {
            animated: false,
            class: 'modal-xl',
        });
    }
    getMateriais(pedido) {
        this.materiaisLoading = true;
        this.service
            .getMateriais(pedido)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
            this.materiaisLoading = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.materiais = response.body['data'];
            }
            else {
                this.pnotify.error('Falha ao carregar materiais');
                this.materiais = [];
            }
        }, (error) => {
            this.pnotify.error('Falha ao carregar materiais');
            this.materiais = [];
        });
    }
    openDetails(pedido, template) {
        /* this.setPedido(pedido); */
        this.getMateriais(pedido);
        this.openModal(template);
    }
    getRoutesRegister() {
        this.atividaesAdminService
            .getAtividades({
            'rota': '/logistica/cadastros/@id'
        })
            .subscribe(response => {
            this.routeTrucker = `/logistica/cadastros/${response.body['atividades'][0]['idSubmodulo']}/motoristas/novo`;
            this.routeTruck = `/logistica/cadastros/${response.body['atividades'][0]['idSubmodulo']}/veiculos/novo`;
        });
    }
    setItensPerPage(itemsPerPage) {
        this.itemsPerPage = itemsPerPage;
        this.end = itemsPerPage;
        return this.itemsPerPage;
    }
    onAdd(pedido) {
        this.pedidosSelecionados = this.pedidosSelecionados
            .filter(el => !(((el === null || el === void 0 ? void 0 : el.CD_FILI) === (pedido === null || pedido === void 0 ? void 0 : pedido.CD_FILI)) &&
            ((el === null || el === void 0 ? void 0 : el.CD_PEDI) === (pedido === null || pedido === void 0 ? void 0 : pedido.CD_PEDI))));
        this.pedidosSelecionados = [...this.pedidosSelecionados, pedido];
        this.pedidos = this.pedidos
            .filter(el => !(((el === null || el === void 0 ? void 0 : el.CD_FILI) === (pedido === null || pedido === void 0 ? void 0 : pedido.CD_FILI)) &&
            ((el === null || el === void 0 ? void 0 : el.CD_PEDI) === (pedido === null || pedido === void 0 ? void 0 : pedido.CD_PEDI))));
    }
    onRemove(pedido) {
        this.pedidosSelecionados = this.pedidosSelecionados
            .filter(el => !(((el === null || el === void 0 ? void 0 : el.CD_FILI) === (pedido === null || pedido === void 0 ? void 0 : pedido.CD_FILI)) &&
            ((el === null || el === void 0 ? void 0 : el.CD_PEDI) === (pedido === null || pedido === void 0 ? void 0 : pedido.CD_PEDI))));
        this.pedidos = this.pedidos
            .filter(el => !(((el === null || el === void 0 ? void 0 : el.CD_FILI) === (pedido === null || pedido === void 0 ? void 0 : pedido.CD_FILI)) &&
            ((el === null || el === void 0 ? void 0 : el.CD_PEDI) === (pedido === null || pedido === void 0 ? void 0 : pedido.CD_PEDI))));
        this.pedidos = [...this.pedidos, pedido];
    }
    isValidForm(form) {
        return form.valid;
    }
};
LogisticaEntregaRetirasCadastroComponent.ctorParameters = () => [
    { type: _services_retiras_service__WEBPACK_IMPORTED_MODULE_8__["LogisticaEntregaRetirasService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["BsLocaleService"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"] },
    { type: src_app_modules_admin_atividades_services_atividades_service__WEBPACK_IMPORTED_MODULE_17__["AdminAtividadesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_11__["DateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__["PNotifyService"] },
    { type: _cadastros_motoristas_services_motorista_service__WEBPACK_IMPORTED_MODULE_13__["LogisticaMotoristaService"] },
    { type: _cadastros_veiculos_services_veiculo_service__WEBPACK_IMPORTED_MODULE_15__["LogisticaVeiculoService"] },
    { type: src_app_shared_services_requests_estados_service__WEBPACK_IMPORTED_MODULE_14__["EstadosService"] },
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["BsModalService"] }
];
LogisticaEntregaRetirasCadastroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'logistica-entrega-retiras-cadastro',
        template: _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_retiras_service__WEBPACK_IMPORTED_MODULE_8__["LogisticaEntregaRetirasService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["BsLocaleService"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"],
        src_app_modules_admin_atividades_services_atividades_service__WEBPACK_IMPORTED_MODULE_17__["AdminAtividadesService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_11__["DateService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__["PNotifyService"],
        _cadastros_motoristas_services_motorista_service__WEBPACK_IMPORTED_MODULE_13__["LogisticaMotoristaService"],
        _cadastros_veiculos_services_veiculo_service__WEBPACK_IMPORTED_MODULE_15__["LogisticaVeiculoService"],
        src_app_shared_services_requests_estados_service__WEBPACK_IMPORTED_MODULE_14__["EstadosService"],
        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["BsModalService"]])
], LogisticaEntregaRetirasCadastroComponent);



/***/ }),

/***/ "3ocw":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/logistica/cadastros/veiculos/services/veiculo.service.ts ***!
  \**********************************************************************************/
/*! exports provided: LogisticaVeiculoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaVeiculoService", function() { return LogisticaVeiculoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");



let LogisticaVeiculoService = class LogisticaVeiculoService {
    constructor(http) {
        this.http = http;
        this.API = `https://crm360.monterrey.com.bo/api`;
    }
    getVeiculos(params) {
        return this.http.get(`${this.API}/logistica/veiculos`, {
            params: params,
            observe: 'response',
        });
    }
    postVeiculo(params) {
        return this.http.post(`${this.API}/logistica/veiculo`, params, {
            observe: 'response',
        });
    }
};
LogisticaVeiculoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LogisticaVeiculoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], LogisticaVeiculoService);



/***/ }),

/***/ "BEC7":
/*!****************************************************************************!*\
  !*** ./src/app/modules/logistica/entrega/retiras/lista/lista.component.ts ***!
  \****************************************************************************/
/*! exports provided: LogisticaEntregaRetirasListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaEntregaRetirasListaComponent", function() { return LogisticaEntregaRetirasListaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lista.component.html */ "f3SA");
/* harmony import */ var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lista.component.scss */ "Lnhk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var _services_retiras_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/retiras.service */ "WL+P");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _cadastros_veiculos_services_veiculo_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../cadastros/veiculos/services/veiculo.service */ "3ocw");
/* harmony import */ var _cadastros_motoristas_services_motorista_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../cadastros/motoristas/services/motorista.service */ "z/iS");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ng_brazil__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-brazil */ "hTrW");
/* harmony import */ var src_app_shared_services_core_xlsx_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/services/core/xlsx.service */ "8WR6");



//angular



//ngx

//services








//masks


let LogisticaEntregaRetirasListaComponent = class LogisticaEntregaRetirasListaComponent {
    /* Pagination */
    constructor(service, formBuilder, localeService, routerService, dateService, atividadesService, activatedRoute, route, pnotify, motoristasService, veiculosService, modalService, xlsxService) {
        this.service = service;
        this.formBuilder = formBuilder;
        this.localeService = localeService;
        this.routerService = routerService;
        this.dateService = dateService;
        this.atividadesService = atividadesService;
        this.activatedRoute = activatedRoute;
        this.route = route;
        this.pnotify = pnotify;
        this.motoristasService = motoristasService;
        this.veiculosService = veiculosService;
        this.modalService = modalService;
        this.xlsxService = xlsxService;
        this.appTitle = 'Retiras';
        this.MASKS = ng_brazil__WEBPACK_IMPORTED_MODULE_15__["MASKS"];
        this.loading = true;
        this.loadingNavBar = false;
        this.romaneios = new Array();
        this.pedidos = new Array();
        this.pedidosLoading = false;
        this.filiais = [];
        this.loadingMotoristas = true;
        this.loadingVeiculos = true;
        this.tableConfig = {
            subtitleBorder: true
        };
        /* Pagination */
        this.itemsPerPage = 100;
        this.currentPage = 1;
        this.totalItems = 0;
        this.begin = 0;
        this.end = this.itemsPerPage;
        this.localeService.use('pt-br');
        this.bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' }, { adaptivePosition: true }, { showWeekNumbers: false });
        this.form = formBuilder.group({
            DT_INIC: [new Date()],
            DT_FINA: [new Date()],
            CD_FILI: [null],
            IN_STAT: ["T"],
            ID_LOGI_ROMA: [null],
            ID_LOGI_MOTO: [null],
            ID_LOGI_VEIC: [null],
            CD_PEDI: [null],
            TIME: [new Date().getTime()],
        });
    }
    ngOnInit() {
        this.atividadesService.registrarAcesso().subscribe();
        this.onActivatedRoute();
        this.setBreadCrumb();
        this.getMotoristas({ 'IN_PAGI': '0' });
        this.getVeiculos({ 'IN_PAGI': '0' });
        this.getFiliais();
    }
    onActivatedRoute() {
        this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe((response) => {
            let _response = this.routerService.getBase64UrlParams(response);
            this.form.patchValue(_response);
            this.getRomaneios(this.getParams());
        });
    }
    ngOnDestroy() {
        this.$activatedRouteSubscription.unsubscribe();
    }
    getFiliais() {
        this.service
            .getFiliais()
            .subscribe(response => {
            this.filiais = response;
            console.log(this.filiais);
        });
    }
    setBreadCrumb() {
        var _a;
        const submoduloId = (_a = this.activatedRoute.snapshot.params) === null || _a === void 0 ? void 0 : _a.idSubModulo;
        this.breadCrumbTree = [
            {
                descricao: 'Logistica'
            },
            {
                descricao: 'GESTIÓN DE ENTREGAS',
                routerLink: `/logistica/entrega/${submoduloId}`
            },
            {
                descricao: 'Retiras'
            }
        ];
    }
    getRomaneios(params) {
        if (!this.loading)
            this.loadingNavBar = true;
        this.service
            .getRomaneios(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(() => {
            this.loading = false;
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.romaneios = response.body['data'];
                this.totalItems = response.body['total'];
                this.begin = 0;
                this.end = this.itemsPerPage;
            }
            else if (response.status === 204) {
                this.pnotify.notice('Não houve resultados para sua consulta');
                this.romaneios = [];
            }
            else {
                this.pnotify.error();
                this.romaneios = [];
            }
        }, (error) => {
            this.pnotify.error();
            this.romaneios = [];
        });
    }
    getPedidos(romaneio) {
        if (romaneio["pedidos"]) {
            this.pedidos = romaneio["pedidos"];
            return;
        }
        this.pedidosLoading = true;
        this.service
            .getPedidos(romaneio)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(() => {
            this.pedidosLoading = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.pedidos = response.body['data'];
                romaneio["pedidos"] = this.pedidos;
            }
            else if (response.status === 204) {
                this.pnotify.notice('Nenhum pedido disponível');
                this.pedidos = [];
            }
            else {
                this.pnotify.error('Falha ao carregar pedidos');
                this.pedidos = [];
            }
        }, (error) => {
            this.pnotify.error('Falha ao carregar pedidos');
            this.pedidos = [];
        });
    }
    getRelatorio(params) {
        this.loadingNavBar = true;
        this.service
            .getRelatorio(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(() => {
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.xlsxService.export({ "data": response.body['data'] });
            }
            else if (response.status === 204) {
                this.pnotify.notice('Nenhuma informação localizada.');
            }
            else {
                this.pnotify.error('Falha ao carregar dados do relatório.');
            }
        }, (error) => {
            this.pnotify.error('Falha ao carregar dados do relatório.');
        });
    }
    onExport() {
        this.getRelatorio(this.getParams());
    }
    getParams() {
        let _params = {};
        let _obj = this.form.value;
        for (let prop in _obj) {
            if (_obj[prop]) {
                if (_obj[prop] instanceof Date)
                    _params[prop] = this.dateService
                        .convertToBrazilianDate(_obj[prop])
                        .substring(0, 10);
                else
                    _params[prop] = _obj[prop];
            }
        }
        return _params;
    }
    onFilter() {
        this.form.get('TIME').setValue(new Date().getTime());
        this.route.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams(this.getParams()),
        });
    }
    openRegister(params) {
        this.route.navigate([`../cadastro`], {
            relativeTo: this.activatedRoute,
            queryParams: { q: btoa(JSON.stringify({ ID_LOGI_ROMA: params === null || params === void 0 ? void 0 : params.ID_LOGI_ROMA })) },
        });
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
        let formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        if (this.form.controls[field].validator) {
            let validationResult = this.form.controls[field].validator(formControl);
            required =
                validationResult !== null && validationResult.required === true;
        }
        if (required) {
            return 'is-required';
        }
    }
    // Validação de formulário
    onReset() {
        this.form.reset();
        this.form.get("DT_INIC").setValue(new Date());
        this.form.get("DT_FINA").setValue(new Date());
        this.route.navigate([]);
    }
    getMotoristas(params) {
        this.motoristasService
            .getMotoristas(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(() => {
            this.loadingMotoristas = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.motoristas = response.body['data'];
            }
        }, (error) => {
            this.pnotify.error('Erro ao carregar motoristas');
        });
    }
    getVeiculos(params) {
        this.veiculosService
            .getVeiculos(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(() => {
            this.loadingVeiculos = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.veiculos = response.body['data'];
            }
        }, (error) => {
            this.pnotify.error('Erro ao carregar veículos');
        });
    }
    onCancel(romaneio) {
        this.loadingNavBar = true;
        let _romaneio = JSON.parse(JSON.stringify(romaneio));
        _romaneio.IN_STAT = _romaneio.IN_STAT == '0' ? '1' : '0';
        this.service
            .postRomaneio(_romaneio)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(() => {
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.pnotify.success();
                romaneio.IN_STAT = _romaneio.IN_STAT;
                romaneio.DS_OBSE = undefined;
            }
            else {
                this.pnotify.error();
            }
        }, (error) => {
            try {
                this.pnotify.error(error.error.message);
            }
            catch (error) {
                this.pnotify.error();
            }
        });
    }
    openModal(template) {
        this.modalRef = this.modalService.show(template, {
            animated: false,
            ignoreBackdropClick: false
        });
    }
    showModalReasonCancellation(romaneio, template) {
        this.romaneio = romaneio;
        romaneio.IN_STAT == '1' ? this.openModal(template) : this.onCancel(romaneio);
    }
    setRomaneio(romaneio) {
        this.romaneio = romaneio;
    }
    openDetails(romaneio) {
        this.setRomaneio(romaneio);
        this.getPedidos(romaneio);
        /* this.openModal(template); */
    }
    setItensPerPage(itemsPerPage) {
        this.itemsPerPage = itemsPerPage;
        this.end = itemsPerPage;
        return this.itemsPerPage;
    }
    /* Paginação */
    onPageChanged(event) {
        /* this.form.get('PAGINA').setValue(event.page);
        this.onSearch(); */
        this.begin = (event.page - 1) * event.itemsPerPage;
        this.end = event.page * event.itemsPerPage;
    }
    /* Paginação */
    setTipoEmpresa(empresa) {
        /* this.form.get('CD_EMPR').setValue(empresa['empresa']); */
        this.form.get('TP_EMPR').setValue(empresa['tipoEmpresa']);
        this.onFilter();
    }
};
LogisticaEntregaRetirasListaComponent.ctorParameters = () => [
    { type: _services_retiras_service__WEBPACK_IMPORTED_MODULE_7__["LogisticaEntregaRetirasService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsLocaleService"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_8__["RouterService"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_9__["DateService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"] },
    { type: _cadastros_motoristas_services_motorista_service__WEBPACK_IMPORTED_MODULE_13__["LogisticaMotoristaService"] },
    { type: _cadastros_veiculos_services_veiculo_service__WEBPACK_IMPORTED_MODULE_12__["LogisticaVeiculoService"] },
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsModalService"] },
    { type: src_app_shared_services_core_xlsx_service__WEBPACK_IMPORTED_MODULE_16__["XlsxService"] }
];
LogisticaEntregaRetirasListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_retiras_service__WEBPACK_IMPORTED_MODULE_7__["LogisticaEntregaRetirasService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsLocaleService"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_8__["RouterService"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_9__["DateService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"],
        _cadastros_motoristas_services_motorista_service__WEBPACK_IMPORTED_MODULE_13__["LogisticaMotoristaService"],
        _cadastros_veiculos_services_veiculo_service__WEBPACK_IMPORTED_MODULE_12__["LogisticaVeiculoService"],
        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsModalService"],
        src_app_shared_services_core_xlsx_service__WEBPACK_IMPORTED_MODULE_16__["XlsxService"]])
], LogisticaEntregaRetirasListaComponent);



/***/ }),

/***/ "C+Rl":
/*!************************************************************************************!*\
  !*** ./src/app/modules/logistica/entrega/retiras/cadastro/cadastro.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".green {\n  color: green;\n}\n\n.cursor-pointer {\n  cursor: pointer;\n}\n\n.cursor-grab {\n  cursor: -webkit-grab !important;\n  cursor: grab !important;\n}\n\n.input-sequence {\n  font-size: 1.25rem;\n  width: 4ch;\n  border: none;\n  padding: 0.1em;\n  border-bottom: 1px solid transparent;\n  background-color: transparent;\n}\n\n.input-sequence:focus {\n  outline: none;\n  border-bottom: 1px solid lightgrey;\n}\n\n/* a{\n  text-decoration: none;\n  color: #000000;\n} */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvZW50cmVnYS9yZXRpcmFzL2NhZGFzdHJvL2NhZGFzdHJvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsK0JBQUE7RUFBQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxvQ0FBQTtFQUNBLDZCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esa0NBQUE7QUFDRjs7QUFFQTs7O0dBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2xvZ2lzdGljYS9lbnRyZWdhL3JldGlyYXMvY2FkYXN0cm8vY2FkYXN0cm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JlZW57XHJcbiAgY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG4uY3Vyc29yLXBvaW50ZXJ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY3Vyc29yLWdyYWJ7XHJcbiAgY3Vyc29yOiBncmFiICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pbnB1dC1zZXF1ZW5jZXtcclxuICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgd2lkdGg6IDRjaDsgXHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmc6IDAuMWVtO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmlucHV0LXNlcXVlbmNlOmZvY3Vze1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcclxufVxyXG5cclxuLyogYXtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbn0gKi8iXX0= */");

/***/ }),

/***/ "KGU2":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/entrega/retiras/cadastro/cadastro.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen [hidden]=\"!loading\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\r\n<app-header [appTitle]=\"appTitle\">\r\n  <button\r\n    (click)=\"onReset()\"\r\n    >\r\n    Limpiar\r\n  </button>\r\n  <button \r\n  [disabled]=\"form.status == 'INVALID'\"\r\n  (click)=\"onSearch()\">\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <advanced-filter>\r\n    <form autocomplete=\"off\" [formGroup]=\"form\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col\">\r\n          <label for=\"dtInicial\">Inicio</label>\r\n          <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\">\r\n                <i class=\"far fa-calendar-alt\"></i>\r\n              </span>\r\n            </div>\r\n            <input\r\n            class=\"form-control\"\r\n            id=\"dtInicial\"\r\n            type=\"text\"\r\n            bsDatepicker\r\n            [bsConfig]=\"bsConfig\"\r\n            placeholder=\"Escribelo...\"\r\n            formControlName=\"DT_INIC\"\r\n          />\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group col\">\r\n          <label for=\"dtFinal\">Final</label>\r\n          <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\">\r\n                <i class=\"far fa-calendar-alt\"></i>\r\n              </span>\r\n            </div>\r\n            <input\r\n            class=\"form-control\"\r\n            id=\"dtFinal\"\r\n            type=\"text\"\r\n            bsDatepicker\r\n            [bsConfig]=\"bsConfig\"\r\n            placeholder=\"Escribelo...\"\r\n            formControlName=\"DT_FINA\"\r\n          />\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group col\">\r\n          <label for=\"filial\">Filial</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"false\"\r\n            [items]=\"filiais\"\r\n            [virtualScroll]=\"true\"\r\n            bindLabel=\"NM_FILI\"\r\n            bindValue=\"CD_FILI\"\r\n            formControlName=\"CD_FILI\"\r\n            placeholder=\"SELECCIONE...\"\r\n            >\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col\">\r\n          <label for=\"pedido\">Pedido</label>\r\n          <input\r\n            class=\"form-control\"\r\n            id=\"pedido\"\r\n            type=\"text\"\r\n            placeholder=\"Escribelo...\"\r\n            formControlName=\"CD_PEDI\"\r\n            (keyup.enter)=\"onSearch()\"\r\n          />\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col\">\r\n          <label for=\"notaFiscal\">Nota Fiscal</label>\r\n          <input\r\n            class=\"form-control\"\r\n            id=\"notaFiscal\"\r\n            type=\"text\"\r\n            placeholder=\"Escribelo...\"\r\n            formControlName=\"NOTA_FISC\"\r\n            (keyup.enter)=\"onSearch()\"\r\n          />\r\n        </div>\r\n        <div class=\"form-group col\">\r\n          <label for=\"uf\">UF</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"true\"\r\n            [items]=\"estados\"\r\n            [virtualScroll]=\"true\"\r\n            labelForId=\"uf\"\r\n            bindLabel=\"sigla\"\r\n            bindValue=\"sigla\"\r\n            id=\"sigla\"\r\n            formControlName=\"DS_ESTA\"\r\n            placeholder=\"SELECCIONE...\"\r\n            (keyup.enter)=\"onSearch()\"\r\n            >\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col\">\r\n          <label for=\"cep\">CEP</label>\r\n          <input\r\n            class=\"form-control\"\r\n            id=\"cep\"\r\n            type=\"text\"\r\n            placeholder=\"Escribelo...\"\r\n            formControlName=\"CD_CEP\"\r\n            (keyup.enter)=\"onSearch()\"\r\n            max=\"9\"\r\n          />\r\n        </div>\r\n        <div class=\"form-group col\">\r\n          <label for=\"cidade\">Cidade</label>\r\n          <input\r\n            class=\"form-control\"\r\n            id=\"cidade\"\r\n            type=\"text\"\r\n            placeholder=\"Escribelo...\"\r\n            formControlName=\"DS_CIDA\"\r\n            (keyup.enter)=\"onSearch()\"\r\n          />\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"cdCliente\">Cód. cliente</label>\r\n          <input\r\n            class=\"form-control\"\r\n            id=\"cdCliente\"\r\n            type=\"text\"\r\n            placeholder=\"Escribelo...\"\r\n            formControlName=\"CD_CLIE\"\r\n            (keyup.enter)=\"onSearch()\"\r\n          />\r\n        </div>\r\n        <div class=\"form-group col-6\">\r\n          <label for=\"nomeCliente\">Nome Cliente</label>\r\n          <input\r\n            class=\"form-control\"\r\n            id=\"nomeCliente\"\r\n            type=\"text\"\r\n            placeholder=\"Escribelo...\"\r\n            formControlName=\"NM_CLIE\"\r\n            (keyup.enter)=\"onSearch()\"\r\n          />\r\n        </div>\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"registros\">Registros</label>\r\n          <select\r\n            name=\"registros\"\r\n            id=\"registros\"\r\n            class=\"form-control\"\r\n            (change)=\"setItensPerPage($event.target.value)\"\r\n          >\r\n            <option value=\"10\">10</option>\r\n            <option value=\"25\">25</option>\r\n            <option value=\"50\">50</option>\r\n            <option value=\"100\" selected>100</option>\r\n            <option value=\"250\">250</option>\r\n            <option value=\"500\">500</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </advanced-filter>\r\n  <div class=\"d-flex\">\r\n    <div class=\"col-7 pl-0\" *ngIf=\"pedidos.length !== 0\">\r\n      <custom-table>\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n            <!-- <th scope=\"col\" style=\"width: 70px;\"></th> -->\r\n            <th scope=\"col\" class=\"text-center\">Pedido</th>\r\n            <th scope=\"col\" class=\"text-center\">Cliente</th>\r\n            <th scope=\"col\"></th>\r\n            <th scope=\"col\"></th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let item of pedidos | slice : begin : end; let index = index\">\r\n            <td class=\"text-center\">\r\n              <span>{{ item.CD_PEDI }}</span>\r\n              <span *ngIf=\"item?.CD_PEDI_ORIG\"> / OV:&nbsp;{{ item.CD_PEDI_ORIG }}</span></td>\r\n            <td class=\"text-center\">{{ item.NM_CLIE | uppercase}}</td>\r\n            <td>\r\n              <button\r\n                type=\"button\"\r\n                class=\"btn-icon-sm\"\r\n                tooltip=\"Detalhes\"\r\n                container=\"body\"\r\n                (click)=\"openDetails(item, pedidoDetalhes)\"\r\n                >\r\n                <i class=\"fas fa-search\"></i>\r\n              </button>\r\n            </td>\r\n            <td>\r\n              <button\r\n                type=\"button\"\r\n                class=\"btn-icon-sm\"\r\n                tooltip=\"Adicionar\"\r\n                container=\"body\"\r\n                (click)=\"onAdd(item)\"\r\n                >\r\n                <i class=\"fas fa-long-arrow-alt-right\"></i>\r\n              </button>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n      <div>\r\n        Mostrando {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\r\n        <pagination\r\n          [maxSize]=\"10\"\r\n          [totalItems]=\"totalItems\"\r\n          (pageChanged)=\"onPageChanged($event)\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPage\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\">\r\n        </pagination>\r\n      </div>\r\n    </div>\r\n    <div class=\"w-100 d-flex align-items-center justify-content-center\" *ngIf=\"pedidos.length === 0\">\r\n      <empty-result message=\"Nenhum pedido disponível\"></empty-result>\r\n    </div>\r\n    <div class=\"col-5 pr-0 border-left\" >\r\n      <div>\r\n        <div class=\"d-flex justify-content-between pt-1\">\r\n          <h6>{{ formTransporte.get('ID_LOGI_ROMA').value }}</h6>\r\n          <div class=\"d-flex\">\r\n            <button\r\n              class=\"btn\"\r\n              [ngClass]=\"isValidForm(formTransporte) ? 'btn-outline-success' : 'btn-outline-danger'\"\r\n              [disabled]=\"!isValidForm(formTransporte)\"\r\n              (click)=\"postRomaneio()\"\r\n            >\r\n              <span *ngIf=\"loadingSalvarRomaneio\" class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\r\n              <span *ngIf=\"!loadingSalvarRomaneio\">Salvar</span>\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <form autocomplete=\"off\" class=\"mt-2\" [formGroup]=\"formTransporte\">\r\n            <div class=\"form-group\">\r\n              <label for=\"filial\">Filial</label>\r\n              <ng-select\r\n                [searchable]=\"true\"\r\n                [clearable]=\"false\"\r\n                [items]=\"filiais\"\r\n                [virtualScroll]=\"true\"\r\n                dropdownPosition=\"bottom\"\r\n                bindLabel=\"NM_FILI\"\r\n                bindValue=\"CD_FILI\"\r\n                formControlName=\"CD_FILI\"\r\n                placeholder=\"SELECCIONE...\"\r\n                [ngClass]=\"'is-required'\" \r\n                >\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <div class=\"d-flex justify-content-between align-items-end w-100\">\r\n                <label for=\"motorista\">Motorista</label>\r\n                <button\r\n                  class=\"btn border-0\"\r\n                  [disabled]=\"!routeTrucker\">\r\n                <a [routerLink]=\"[routeTrucker]\" target=\"_blank\">\r\n                  Novo motorista\r\n                </a>\r\n                </button>\r\n              </div>\r\n              <div class=\"d-flex\">\r\n                <ng-select\r\n                  [searchable]=\"true\"\r\n                  [items]=\"motoristas\"\r\n                  [virtualScroll]=\"true\"\r\n                  [loading]=\"loadingMotoristas\"\r\n                  class=\"col px-0 is-required\"\r\n                  dropdownPosition=\"bottom\"\r\n                  labelForId=\"motorista\"\r\n                  bindLabel=\"NM_MOTO\"\r\n                  bindValue=\"ID_LOGI_MOTO\"\r\n                  id=\"motorista\"\r\n                  formControlName=\"ID_LOGI_MOTO\"\r\n                  placeholder=\"SELECCIONE...\"\r\n                  >\r\n                  <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\">\r\n                    {{item.CPF | cpf }} - {{item.NM_MOTO}}\r\n                  </ng-template>\r\n                </ng-select>\r\n                <button\r\n                  class=\"btn-icon-sm mx-3 my-auto\"\r\n                  tooltip=\"Atualizar\"\r\n                  conatiner=\"body\"\r\n                  (click)=\"getMotoristas({ IN_PAGI: '0', IN_STAT: '1' })\"\r\n                >\r\n                  <i class=\"fas fa-sync\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <div class=\"d-flex justify-content-between align-items-end\">\r\n                <label for=\"veiculo\">Veículo</label>\r\n                <button\r\n                  class=\"btn border-0\"\r\n                  [disabled]=\"!routeTruck\"\r\n                >\r\n                <a [routerLink]=\"[routeTruck]\" target=\"_blank\">\r\n                  Novo veículo\r\n                </a>\r\n                </button>\r\n              </div>\r\n              <div class=\"d-flex\">\r\n                <ng-select\r\n                  [searchable]=\"true\"\r\n                  [items]=\"veiculos\"\r\n                  [virtualScroll]=\"true\"\r\n                  [loading]=\"loadingVeiculos\"\r\n                  class=\"col px-0 is-required\"\r\n                  dropdownPosition=\"bottom\"\r\n                  labelForId=\"veiculo\"\r\n                  bindLabel=\"PLAC\"\r\n                  bindValue=\"ID_LOGI_VEIC\"\r\n                  id=\"veiculo\"\r\n                  formControlName=\"ID_LOGI_VEIC\"\r\n                  placeholder=\"SELECCIONE...\"\r\n                  >\r\n                  <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\">\r\n                    {{item.PLAC}}\r\n                  </ng-template>\r\n                </ng-select>\r\n                <button\r\n                  class=\"btn-icon-sm mx-3 my-auto\"\r\n                  tooltip=\"Atualizar\"\r\n                  conatiner=\"body\"\r\n                  (click)=\"getVeiculos({ IN_PAGI: '0', IN_STAT: '1' })\"\r\n                >\r\n                  <i class=\"fas fa-sync\"></i>\r\n                </button>\r\n              </div>\r\n            <!-- </div> -->\r\n          </div>\r\n        </form>\r\n        <hr>\r\n        <!-- <small>PEDIDOS</small> -->\r\n        <div class=\"spinner-border text-primary d-block\" role=\"status\" *ngIf=\"pedidosSelecionadosLoading && pedidosSelecionados.length === 0\">\r\n          <span class=\"sr-only\">Loading...</span>\r\n        </div>\r\n        <div><!-- pedidosSelecionadosLoading &&   [hidden]=\"pedidosSelecionados.length == 0\"-->\r\n          <ng-template #itemTemplate let-item=\"item\" let-index=\"index\">\r\n            <div class=\"shadow-sm border rounded p-2 d-flex\">\r\n              <div class=\"d-flex align-items-center text-muted mr-2 flex-column\">\r\n                <label style=\"font-size: 0.9em;\">Sequência</label>\r\n                <strong>\r\n                  <input\r\n                    type=\"number\"\r\n                    [ngModel]=\"item.value.NR_SQNC\"\r\n                    (ngModelChange)=\" item.value.NR_SQNC = $event\"\r\n                    class=\"input-sequence\"\r\n                    min=\"1\"\r\n                    >\r\n                </strong>\r\n              </div>\r\n              <div class=\"col p-0 pl-1\">\r\n                <div class=\"mb-1\">\r\n                  <span class=\"d-block text-uppercase\">{{ item.value.NM_CLIE }}</span>\r\n                  <small class=\"d-block text-uppercase\">\r\n                    <span *ngIf=\"item.value.DS_LOCA_ENTR\">{{ item.value.DS_LOCA_ENTR }}</span> \r\n                    <span *ngIf=\"item.value.DS_BAIR\">,&nbsp;{{ item.value.DS_BAIR }}</span>\r\n                    <span *ngIf=\"item.value.DS_CIDA\">,&nbsp;{{ item.value.DS_CIDA }}</span>\r\n                    <span *ngIf=\"item.value.DS_ESTA\">- {{ item.value.DS_ESTA }}</span>\r\n                  </small>\r\n                </div>\r\n                <div class=\"d-flex\">\r\n                  <div class=\"form-group mb-0\">\r\n                    <label>Pedido: &nbsp;</label>\r\n                    <span>{{ item.value.CD_PEDI}}</span>\r\n                  </div>\r\n                  &nbsp;|&nbsp;\r\n                  <div class=\"form-group mb-0\">\r\n                    <label>Peso: &nbsp;</label>\r\n                    <span>{{ item.value.TT_PESO | number: '1.3-3' }}</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"d-flex align-items-center\">\r\n                <button class=\"btn-icon-sm text-danger\" tooltip=\"Remover\" (click)=\"onRemove(item.value)\">\r\n                  <i class=\"far fa-trash-alt\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </ng-template>\r\n          <bs-sortable\r\n            [(ngModel)]=\"pedidosSelecionados\"\r\n            [itemTemplate]=\"itemTemplate\"\r\n            itemClass=\"sortable-item mb-2\"\r\n            itemActiveClass=\"sortable-item-active\"\r\n            wrapperClass=\"sortable-wrapper\"\r\n            placeholderClass=\"placeholderStyle\"\r\n          ></bs-sortable>\r\n        </div>\r\n        <empty-result *ngIf=\"pedidosSelecionadosLoading === false && pedidosSelecionados.length === 0\" message=\"Nenhum pedido importado\"></empty-result>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ng-template #pedidoDetalhes>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title pull-left\">({{ pedido.CD_CLIE }}) &nbsp; {{ pedido.NM_CLIE }}</h4>\r\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <h5 class=\"text-muted\" style=\"font-size: 0.75rem;\">NOTA FISCAL</h5>\r\n      <table>\r\n        <tbody>\r\n          <tr>\r\n            <th>Número:</th>\r\n            <td>&nbsp; {{ pedido.NR_NOTA_FISC }}</td>\r\n          </tr>\r\n          <tr>\r\n            <th>Emissão</th>\r\n            <td>&nbsp; {{ pedido.DT_EMIS_NOTA_FISC | date : 'dd/MM/yyyy HH:mm:ss'}}</td>\r\n          </tr>\r\n          <tr>\r\n            <th>Chave de acesso:</th>\r\n            <td>&nbsp; {{ pedido.CD_CHAV_ACES }}</td>\r\n          </tr>\r\n          <tr>\r\n            <th>Pedido:</th>\r\n            <td>&nbsp; {{ pedido.CD_PEDI }}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      <hr>\r\n      <h5 class=\"text-muted\" style=\"font-size: 0.75rem;\">LOCAL DE ENTREGA</h5>\r\n      <table>\r\n        <tbody>\r\n          <tr>\r\n            <th>Cidade:</th>\r\n            <td>&nbsp; {{ pedido.DS_CIDA }} - {{ pedido.DS_ESTA }}</td>\r\n          </tr>\r\n          <tr>\r\n            <th>Bairro:</th>\r\n            <td>&nbsp; {{ pedido.DS_BAIR }}</td>\r\n          </tr>\r\n          <tr>\r\n            <th>Endereço:</th>\r\n            <td>&nbsp; {{ pedido.DS_LOCA_ENTR }}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      <hr>\r\n      <h5 class=\"text-muted\" style=\"font-size: 0.75rem;\">MATERIAIS</h5>\r\n      <custom-table *ngIf=\"materiais.length !== 0 && materiaisLoading == false\">\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n            <th scope=\"col\" class=\"text-center\">Código</th>\r\n            <th scope=\"col\" class=\"text-center\">Material</th>\r\n            <th scope=\"col\" class=\"text-center\">Quantidade</th>\r\n            <th scope=\"col\" class=\"text-center\">Valor</th>\r\n            <th scope=\"col\" class=\"text-center\">Observação</th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let material of materiais\">\r\n            <td class=\"text-center\">{{ material.CD_MATE }}</td>\r\n            <td class=\"text-center\">{{ material.DS_MATE }}</td>\r\n            <td class=\"text-center\">{{ material.QT_PESO | number: '1.3-3' }}</td>\r\n            <td class=\"text-center\">{{ material.VL_ITEM | currency : 'BRL' : 'symbol' : '1.2-2'}}</td>\r\n            <td class=\"text-center\">{{ material.DS_OBSE }}</td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n      <div class=\"spinner-border text-primary\" role=\"status\" *ngIf=\"materiaisLoading\">\r\n        <span class=\"sr-only\">Loading...</span>\r\n      </div>\r\n      <empty-result class=\"d-flex align-items-center justify-content-center\" *ngIf=\"materiais.length === 0 && materiaisLoading == false\" message=\"Nenhum material disponível\"></empty-result>\r\n    </div>\r\n  </ng-template>\r\n</app-body>\r\n");

/***/ }),

/***/ "Lnhk":
/*!******************************************************************************!*\
  !*** ./src/app/modules/logistica/entrega/retiras/lista/lista.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2VudHJlZ2EvcmV0aXJhcy9saXN0YS9saXN0YS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "WL+P":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/logistica/entrega/retiras/services/retiras.service.ts ***!
  \*******************************************************************************/
/*! exports provided: LogisticaEntregaRetirasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaEntregaRetirasService", function() { return LogisticaEntregaRetirasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");

// angular


// services


let LogisticaEntregaRetirasService = class LogisticaEntregaRetirasService {
    constructor(http) {
        this.http = http;
        this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API;
    }
    getPedidos(params) {
        return this.http.get(`${this.API}/logistica/entrega/formacao-carga/pedidos`, {
            params: params,
            observe: "response"
        });
    }
    getMateriais(params) {
        return this.http.get(`${this.API}/logistica/entrega/formacao-carga/pedido/${params.CD_PEDI}/materiais`, {
            params: params,
            observe: "response"
        });
    }
    getRomaneios(params) {
        return this.http.get(`${this.API}/logistica/entrega/formacao-carga/romaneios`, {
            params: params,
            observe: "response"
        });
    }
    postRomaneio(params) {
        return this.http.post(`${this.API}/logistica/entrega/formacao-carga/romaneio`, params, { observe: "response" });
    }
    postPedidos(params) {
        return this.http.post(`${this.API}/logistica/entrega/formacao-carga/romaneio/pedidos`, params, { observe: "response" });
    }
    getRelatorio(params) {
        return this.http.get(`${this.API}/logistica/entrega/formacao-carga/pedidos/relatorio`, {
            params: params,
            observe: "response"
        });
    }
    getFiliais() {
        const filiais = [
            {
                "CD_FILI": "18",
                "NM_FILI": "Distribuição Tiete",
            },
            {
                "CD_FILI": "79",
                "NM_FILI": "Distribuição Taipas",
            },
            {
                "CD_FILI": "6",
                "NM_FILI": "Distribuição Osasco",
            },
            {
                "CD_FILI": "77",
                "NM_FILI": "Distribuição Camanducaia",
            },
            {
                "CD_FILI": "41",
                "NM_FILI": "Distribuição Valença",
            },
            {
                "CD_FILI": "19",
                "NM_FILI": "Distribuição Volta Redonda",
            },
            {
                "CD_FILI": "3",
                "NM_FILI": "C&D Rio das Pedras",
            },
            {
                "CD_FILI": "46",
                "NM_FILI": "C&D Cajamar",
            },
            {
                "CD_FILI": "72",
                "NM_FILI": "C&D Praia Grande",
            },
            {
                "CD_FILI": "9661",
                "NM_FILI": "DBA Aço Especial",
            },
            {
                "CD_FILI": "9645",
                "NM_FILI": "DBA Piracicaba",
            },
            {
                "CD_FILI": "9636",
                "NM_FILI": "DBA Praia Grande",
            },
            {
                "CD_FILI": "9639",
                "NM_FILI": "DBA Jacarei",
            },
        ];
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(filiais);
    }
};
LogisticaEntregaRetirasService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LogisticaEntregaRetirasService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], LogisticaEntregaRetirasService);



/***/ }),

/***/ "f3SA":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/entrega/retiras/lista/lista.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen [hidden]=\"!loading\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\r\n<app-header [appTitle]=\"appTitle\">\r\n  <button\r\n    [disabled]=\"form.status == 'INVALID'\"\r\n    (click)=\"onExport()\"  \r\n  >\r\n    Gerar Relatório\r\n  </button>\r\n  <button (click)=\"onReset()\">\r\n    Limpiar\r\n  </button>\r\n  <button \r\n  [disabled]=\"form.status == 'INVALID'\"\r\n  (click)=\"onFilter()\">\r\n    Filtrar\r\n  </button>\r\n  <button \r\n  [routerLink]=\"['../novo']\" \r\n  >\r\n    Adicionar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <advanced-filter>\r\n    <form autocomplete=\"off\" [formGroup]=\"form\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"dtInicial\">Inicio</label>\r\n          <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\">\r\n                <i class=\"far fa-calendar-alt\"></i>\r\n              </span>\r\n            </div>\r\n            <input\r\n            class=\"form-control\"\r\n            id=\"dtInicial\"\r\n            type=\"text\"\r\n            bsDatepicker\r\n            [bsConfig]=\"bsConfig\"\r\n            placeholder=\"Escribelo...\"\r\n            formControlName=\"DT_INIC\"\r\n          />\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"dtFinal\">Final</label>\r\n          <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\">\r\n                <i class=\"far fa-calendar-alt\"></i>\r\n              </span>\r\n            </div>\r\n            <input\r\n            class=\"form-control\"\r\n            id=\"dtFinal\"\r\n            type=\"text\"\r\n            bsDatepicker\r\n            [bsConfig]=\"bsConfig\"\r\n            placeholder=\"Escribelo...\"\r\n            formControlName=\"DT_FINA\"\r\n          />\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"filiais\">Filial</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"false\"\r\n            [items]=\"filiais\"\r\n            [virtualScroll]=\"true\"\r\n            bindLabel=\"NM_FILI\"\r\n            bindValue=\"CD_FILI\"\r\n            formControlName=\"CD_FILI\"\r\n            placeholder=\"SELECCIONE...\"\r\n            >\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"romaneio\">Romaneio</label>\r\n          <input \r\n            class=\"form-control\"\r\n            id=\"romaneio\"\r\n            type=\"text\"\r\n            (keyup.enter)=\"onFilter()\"\r\n            placeholder=\"Escribelo...\"\r\n            formControlName=\"ID_LOGI_ROMA\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"pedido\">Pedido</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"pedido\"\r\n            (keyup.enter)=\"onFilter()\"\r\n            placeholder=\"Escribelo...\"\r\n            formControlName=\"CD_PEDI\"\r\n          >\r\n        </div>\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"motorista\">Motorista</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [items]=\"motoristas\"\r\n            [virtualScroll]=\"true\"\r\n            [loading]=\"loadingMotoristas\"\r\n            labelForId=\"motorista\"\r\n            editableSearchTerm=\"true\"\r\n            bindLabel=\"NM_MOTO\"\r\n            bindValue=\"ID_LOGI_MOTO\"\r\n            id=\"motorista\"\r\n            formControlName=\"ID_LOGI_MOTO\"\r\n            placeholder=\"SELECCIONE...\"\r\n            (change)=\"onFilter()\"\r\n          >\r\n          <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\">\r\n            {{item.CPF | cpf }} - {{item.NM_MOTO}}\r\n          </ng-template>\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-2\">\r\n          <label for=\"veiculo\">Placa</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [items]=\"veiculos\"\r\n            [virtualScroll]=\"true\"\r\n            [loading]=\"loadingVeiculos\"\r\n            labelForId=\"veiculo\"\r\n            editableSearchTerm=\"true\"\r\n            bindLabel=\"PLAC\"\r\n            bindValue=\"ID_LOGI_VEIC\"\r\n            id=\"veiculo\"\r\n            formControlName=\"ID_LOGI_VEIC\"\r\n            placeholder=\"SELECCIONE...\"\r\n            (change)=\"onFilter()\"\r\n            >\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-2\">\r\n          <label for=\"status\">Status</label>\r\n          <select\r\n            name=\"status\"\r\n            id=\"status\"\r\n            class=\"form-control\"\r\n            formControlName=\"IN_STAT\"\r\n            (change)=\"onFilter()\"\r\n          >\r\n            <option value=\"T\" selected>TODOS</option>\r\n            <option value=\"1\">Ativo</option>\r\n            <option value=\"0\">Inativo</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group col-2\">\r\n          <label for=\"registros\">Registros</label>\r\n          <select\r\n            name=\"registros\"\r\n            id=\"registros\"\r\n            class=\"form-control\"\r\n            (change)=\"setItensPerPage($event.target.value)\"\r\n          >\r\n            <option value=\"10\">10</option>\r\n            <option value=\"25\">25</option>\r\n            <option value=\"50\">50</option>\r\n            <option value=\"100\" selected>100</option>\r\n            <option value=\"250\">250</option>\r\n            <option value=\"500\">500</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </advanced-filter>\r\n  <div class=\"d-flex w-100\">\r\n    <div class=\"w-100\" *ngIf=\"romaneios.length !== 0\">\r\n      <custom-table class=\"w-100\" [config]=\"tableConfig\">\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n            <th scope=\"col\" class=\"text-center\">Filial</th>\r\n            <th scope=\"col\" class=\"text-center\">Romaneio</th>\r\n            <th scope=\"col\" class=\"text-center\">Veículo</th>\r\n            <th scope=\"col\" class=\"text-center\">Motorista</th>\r\n            <th scope=\"col\" class=\"text-center\">Data de criação</th>\r\n            <th></th>\r\n            <th></th>\r\n            <th></th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let item of romaneios | slice : begin : end\">\r\n            <td class=\"text-center text-truncate\" [ngClass]=\"item.IN_STAT == 1 ? 'border-success' : 'border-danger'\">({{ item.CD_FILI }})&nbsp;{{ item.NM_FILI }}</td>\r\n            <td class=\"text-center\" >{{ item.ID_LOGI_ROMA | number : '6.0-0'}}</td>\r\n            <td class=\"text-center\" >{{ item.PLAC}}</td>\r\n            <td class=\"text-center\" >{{ item.NM_MOTO}}</td>\r\n            <td class=\"text-center\" >{{ item.DT_INCL | date : 'dd/MM/yyyy HH:mm:ss'}}</td>\r\n            <td class=\"align-middle\">\r\n              <button\r\n                class=\"btn-icon-sm\"\r\n                tooltip=\"Editar\"\r\n                placement=\"left\"\r\n                (click)=\"openRegister(item)\"\r\n              >\r\n                <i class=\"fas fa-edit\"></i>\r\n              </button>\r\n            </td>\r\n            <td class=\"align-middle\">\r\n              <button\r\n                class=\"btn-icon-sm\"\r\n                [tooltip]=\"item.IN_STAT == 1 ? 'Cancelar' : 'Ativar'\"\r\n                placement=\"left\"\r\n                (click)=\"showModalReasonCancellation(item, motivoCancelamento)\"\r\n                >\r\n                <i *ngIf=\"item.IN_STAT == 0\" class=\"fas fa-ban text-danger\"></i>\r\n                <i *ngIf=\"item.IN_STAT == 1\" class=\"fas fa-check text-success\"></i>\r\n              </button>\r\n            </td>\r\n            <td class=\"align-middle\">\r\n              <button\r\n                class=\"btn-icon-sm\"\r\n                tooltip=\"Detalhes\"\r\n                placement=\"left\"\r\n                (click)=\"romaneioDetalhes.show(); openDetails(item)\"\r\n              >\r\n                <i class=\"fas fa-search\"></i>\r\n              </button>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n      <div>\r\n        Mostrando {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\r\n        <pagination\r\n          [maxSize]=\"10\"\r\n          [totalItems]=\"totalItems\"\r\n          (pageChanged)=\"onPageChanged($event)\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPage\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\">\r\n        </pagination>\r\n      </div>\r\n    </div>\r\n    <empty-result class=\"d-flex align-items-center justify-content-center w-100\" *ngIf=\"romaneios.length === 0\" message=\"Nenhum romaneio disponível\" style=\"height: 50vh;\"></empty-result>\r\n  </div>\r\n  <div class=\"modal\" bsModal #romaneioDetalhes=\"bs-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialog-static-name\">\r\n    <div class=\"modal-dialog modal-xxl\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title pull-left\">{{ romaneio?.ID_LOGI_ROMA | number: '6.0-0' }}</h4>\r\n          <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"romaneioDetalhes.hide()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <table>\r\n            <tbody>\r\n              <tr>\r\n                <th>Número:</th>\r\n                <td>&nbsp; {{ romaneio?.ID_LOGI_ROMA | number:'6.0-0' }}</td>\r\n              </tr>\r\n              <tr>\r\n                <th>Emissão</th>\r\n                <td>&nbsp; {{ romaneio?.DT_INCL | date : 'dd/MM/yyyy HH:mm:ss'}}</td>\r\n              </tr>\r\n              <tr>\r\n                <th>Placa do Veículo:</th>\r\n                <td>&nbsp; {{ romaneio?.PLAC }}</td>\r\n              </tr>\r\n              <tr>\r\n                <th>Nome do Motorista:</th>\r\n                <td>&nbsp; {{ romaneio?.NM_MOTO }}</td>\r\n              </tr>\r\n              <tr>\r\n                <th>CPF do Motorista:</th>\r\n                <td>&nbsp; {{ romaneio?.CPF | cpf}}</td>\r\n              </tr>\r\n              <tr>\r\n                <th>Status do Romaneio:</th>\r\n                <td>&nbsp; \r\n                  <span *ngIf=\"romaneio?.IN_STAT == 1\">ATIVO</span>\r\n                  <span *ngIf=\"romaneio?.IN_STAT == 0\">INATIVO</span>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <hr>\r\n          <h5 class=\"text-muted\" style=\"font-size: 0.75rem;\">PEDIDOS</h5>\r\n          <custom-table *ngIf=\"pedidos.length !== 0 && pedidosLoading == false\">\r\n            <ng-template #thead let-thead>\r\n              <tr>\r\n                <th scope=\"col\" class=\"text-center\">Pedido</th>\r\n                <th scope=\"col\" class=\"text-center\">Nota Fiscal</th>\r\n                <th scope=\"col\" class=\"text-left\">Cliente</th>\r\n                <th scope=\"col\">Cidade</th>\r\n                <th scope=\"col\">Bairro</th>\r\n                <th scope=\"col\">Local de Entrega</th>\r\n                <th scope=\"col\" class=\"text-center\">Quantidade</th>\r\n              </tr>\r\n            </ng-template>\r\n            <ng-template #tbody let-tbody>\r\n              <tr *ngFor=\"let pedido of pedidos\">\r\n                <td class=\"text-center\">{{ pedido?.CD_PEDI }}</td>\r\n                <td class=\"text-center\">{{ pedido?.NOTA_FISC }}</td>\r\n                <td>({{ pedido?.CD_CLIE }}) {{ pedido?.NM_CLIE }}</td>\r\n                <td>{{ pedido?.DS_CIDA }}-{{ pedido?.DS_ESTA }}</td>\r\n                <td>{{ pedido?.DS_BAIR }}</td>\r\n                <td>{{ pedido?.DS_LOCA_ENTR }}</td>\r\n                <td class=\"text-center\">{{ pedido?.TT_PESO | number: '1.3-3'}}</td>\r\n              </tr>\r\n            </ng-template>\r\n          </custom-table>\r\n          <div class=\"spinner-border text-primary\" role=\"status\" *ngIf=\"pedidosLoading\">\r\n            <span class=\"sr-only\">Loading...</span>\r\n          </div>\r\n          <empty-result class=\"d-flex align-items-center justify-content-center\" *ngIf=\"pedidos.length === 0 && pedidosLoading == false\" message=\"Nenhum pedido disponível\"></empty-result>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ng-template #motivoCancelamento>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title pull-left\">Escribelo o motivo para o cancelamento do romaneio {{ romaneio?.ID_LOGI_ROMA | number: '6.0-0' }}</h4>\r\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <textarea\r\n        name=\"motivoCancelamento\"\r\n        id=\"motivoCancelamento\"\r\n        cols=\"30\"\r\n        rows=\"10\"\r\n        class=\"form-control\"\r\n        [(ngModel)]=\"romaneio.DS_OBSE\"\r\n      >\r\n      </textarea>\r\n      <div\r\n        class=\"d-flex justify-content-end mt-3\"\r\n      >\r\n        <button\r\n          type=\"button\"\r\n          class=\"btn btn-danger mr-2\"\r\n          (click)=\"modalRef.hide()\"  \r\n        >Cancelar</button>\r\n        <button\r\n          type=\"button\"\r\n          class=\"btn btn-outline-success\"\r\n          [disabled]=\"!romaneio?.DS_OBSE\"\r\n          (click)=\"modalRef.hide(); onCancel(romaneio)\"\r\n        >Confirmar</button>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n</app-body>");

/***/ }),

/***/ "pFht":
/*!*********************************************************************!*\
  !*** ./src/app/modules/logistica/entrega/retiras/retiras.module.ts ***!
  \*********************************************************************/
/*! exports provided: LogisticaEntregaRetirasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaEntregaRetirasModule", function() { return LogisticaEntregaRetirasModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/locales/pt */ "vT00");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "6No5");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "978R");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "2ZVE");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/timepicker */ "M3cK");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/pipes/pipes.module */ "9Xeq");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/core/module-wrapper/module-wrapper.module */ "RoXV");
/* harmony import */ var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/core/not-found/not-found.module */ "sCnT");
/* harmony import */ var ng_brazil__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-brazil */ "hTrW");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! angular2-text-mask */ "UVXo");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng2-currency-mask */ "D5nU");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _retiras_routing_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./retiras-routing.module */ "qSTB");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./lista/lista.component */ "BEC7");
/* harmony import */ var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./cadastro/cadastro.component */ "0yQ1");







Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_5___default.a);
Object(ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["defineLocale"])('pt-br', ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ptBrLocale"]);
// ngx-bootstrap






// ng-select






//masks






let LogisticaEntregaRetirasModule = class LogisticaEntregaRetirasModule {
};
LogisticaEntregaRetirasModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _lista_lista_component__WEBPACK_IMPORTED_MODULE_23__["LogisticaEntregaRetirasListaComponent"],
            _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_24__["LogisticaEntregaRetirasCadastroComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _retiras_routing_module__WEBPACK_IMPORTED_MODULE_22__["LogisticaEntregaRetirasRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__["NgSelectModule"],
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginationModule"].forRoot(),
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"].forRoot(),
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_9__["TabsModule"].forRoot(),
            ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_11__["TimepickerModule"].forRoot(),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__["ModalModule"].forRoot(),
            src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_15__["PipesModule"],
            src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_18__["NotFoundModule"],
            src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_17__["ModuleWrapperModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_16__["TemplatesModule"],
            ng_brazil__WEBPACK_IMPORTED_MODULE_19__["NgBrazil"],
            angular2_text_mask__WEBPACK_IMPORTED_MODULE_20__["TextMaskModule"],
            ng2_currency_mask__WEBPACK_IMPORTED_MODULE_21__["CurrencyMaskModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["AccordionModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ProgressbarModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["SortableModule"].forRoot(),
        ]
    })
], LogisticaEntregaRetirasModule);



/***/ }),

/***/ "qSTB":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/logistica/entrega/retiras/retiras-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: LogisticaEntregaRetirasRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaEntregaRetirasRoutingModule", function() { return LogisticaEntregaRetirasRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cadastro/cadastro.component */ "0yQ1");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lista/lista.component */ "BEC7");





const routes = [
    {
        path: '',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_4__["LogisticaEntregaRetirasListaComponent"]
    },
    {
        path: 'novo',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_3__["LogisticaEntregaRetirasCadastroComponent"]
    },
    {
        path: ':id',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_3__["LogisticaEntregaRetirasCadastroComponent"]
    }
];
let LogisticaEntregaRetirasRoutingModule = class LogisticaEntregaRetirasRoutingModule {
};
LogisticaEntregaRetirasRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], LogisticaEntregaRetirasRoutingModule);



/***/ }),

/***/ "z/iS":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/logistica/cadastros/motoristas/services/motorista.service.ts ***!
  \**************************************************************************************/
/*! exports provided: LogisticaMotoristaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaMotoristaService", function() { return LogisticaMotoristaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");



let LogisticaMotoristaService = class LogisticaMotoristaService {
    constructor(http) {
        this.http = http;
        this.API = `https://crm360.monterrey.com.bo/api`;
    }
    getMotoristas(params) {
        return this.http.get(`${this.API}/logistica/motoristas`, {
            params: params,
            observe: 'response',
        });
    }
    postMotorista(params) {
        return this.http.post(`${this.API}/logistica/motorista`, params, {
            observe: 'response',
        });
    }
};
LogisticaMotoristaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LogisticaMotoristaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], LogisticaMotoristaService);



/***/ })

}]);
//# sourceMappingURL=retiras-retiras-module-es2015.js.map