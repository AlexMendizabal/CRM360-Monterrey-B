(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nfe-sem-pedido-pai-nfe-sem-pedido-pai-module"],{

/***/ "3UEY":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/monitores/nfe-sem-pedido-pai/nfe-sem-pedido-pai.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: AbastecimentoMonitoresNfeSemPedidoPaiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbastecimentoMonitoresNfeSemPedidoPaiComponent", function() { return AbastecimentoMonitoresNfeSemPedidoPaiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_nfe_sem_pedido_pai_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./nfe-sem-pedido-pai.component.html */ "vAIp");
/* harmony import */ var _nfe_sem_pedido_pai_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nfe-sem-pedido-pai.component.scss */ "TZiM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/chronos */ "xj/R");
/* harmony import */ var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/locale */ "0b5p");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/modules/xlsx/xlsx.service */ "eOmW");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");
/* harmony import */ var _nfe_sem_pedido_pai_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./nfe-sem-pedido-pai.service */ "D8GC");










Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_8__["defineLocale"])('pt-br', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_9__["ptBrLocale"]);




//Converte rota em base64



let AbastecimentoMonitoresNfeSemPedidoPaiComponent = class AbastecimentoMonitoresNfeSemPedidoPaiComponent {
    constructor(formBuilder, pnotify, activatedRoute, localeService, router, titleService, routerService, dateService, atividadesService, service, xlsxService) {
        this.formBuilder = formBuilder;
        this.pnotify = pnotify;
        this.activatedRoute = activatedRoute;
        this.localeService = localeService;
        this.router = router;
        this.titleService = titleService;
        this.routerService = routerService;
        this.dateService = dateService;
        this.atividadesService = atividadesService;
        this.service = service;
        this.xlsxService = xlsxService;
        this.loaderFullScreen = true;
        this.loaderNavbar = false;
        this.loading = false;
        this.showAdvancedFilter = true;
        this.compararData = false;
        this.carregouNf = false;
        this.onEmpy = false;
        this.onPaginacao = false;
        this.data = new Date();
        this.linhas = [];
        this.classes = [];
        this.materiais = [];
        this.nfRelatorio = [];
        this.tempNfRelatorio = [];
        this.nfRelatorioExcel = [];
        /* Paginação */
        this.itemsPerPage = 15;
        this.totalItems = 15;
        this.currentPage = 1;
        this.begin = 0;
        this.end = 15;
        /* Paginação */
        /* Ordenação */
        this.reverse = false;
        this.key = 'PEDIDO';
        /* Ordenação */
        this.placeholderClasses = 'Selecione uma classe';
        this.placeholderMateriais = 'Selecione um material';
        this.numerico = {
            align: "left",
            allowNegative: false,
            decimal: "",
            precision: 0,
            prefix: "",
            suffix: "",
            thousands: ""
        };
        this.localeService.use('pt-br');
        this.bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' }, { adaptivePosition: true }, { showWeekNumbers: false });
        this.form = this.formBuilder.group({
            dataInicial: [this.dateService.getFirstDayMonth(), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            dataFinal: [this.data, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            pedido: [null],
            notaFiscal: [null],
            linhas: [null],
            classes: [null],
            materiais: [null],
            usuario: [null],
            time: [new Date().getTime()]
        });
    }
    ngOnInit() {
        setTimeout(() => {
            this.loaderFullScreen = false;
        }, 1000);
        this.titleService.setTitle('Nfe sem pedido pai');
        this.registrarAcesso();
        this.onBreadCumbTree();
        this.onActivatedRoute();
        this.getLinhas();
        this.form.get('classes').disable();
        this.form.get('materiais').disable();
    }
    onActivatedRoute() {
        this.$subscription = this.activatedRoute.queryParams.subscribe(queryParams => {
            if (Object.keys(queryParams).length > 0) {
                let _response = this.routerService.getBase64UrlParams(queryParams);
                this.form.patchValue(_response);
                this.getNfeSemPedidoPai(this.getParams());
            }
        });
        this.$subscription.unsubscribe();
    }
    registrarAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
    }
    onBreadCumbTree() {
        this.activatedRoute.params.subscribe((params) => {
            this.breadCrumbTree = [
                {
                    descricao: 'Home',
                    routerLink: '/abastecimento/home'
                },
                {
                    descricao: 'Monitores',
                    routerLink: `/abastecimento/monitores/${params['idSubModulo']}`
                },
                {
                    descricao: 'Nfe sem Pedido Pai'
                }
            ];
        });
    }
    onFilter() {
        this.form.get('time').setValue(new Date().getTime());
        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams(this.getParams())
        });
        this.getNfeSemPedidoPai(this.getParams());
    }
    /* define os paramentos para busca */
    geetParams(params) {
        let dataInicial = params['dataInicial'];
        let dataFinal = params['dataFinal'];
        this.form.patchValue({
            dataInicial: dataInicial,
            dataFinal: dataFinal
        });
        if (dataInicial instanceof Date) {
            dataInicial = this.dateService.convertToUrlDate(dataInicial);
        }
        if (dataFinal instanceof Date) {
            dataFinal = this.dateService.convertToUrlDate(dataFinal);
        }
        return {
            dataInicial: dataInicial,
            dataFinal: dataFinal
        };
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
    getNfeSemPedidoPai(params) {
        this.loaderNavbar = true;
        this.carregouNf = false;
        this.nfRelatorio = [];
        this.tempNfRelatorio = [];
        this.nfRelatorio = [];
        this.service
            .getNfeSemPedidoPai(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
            this.loaderNavbar = false;
        }))
            .subscribe(res => {
            if (res.status === 200) {
                this.carregouNf = true;
                this.onEmpy = false;
                this.nfRelatorio = res['body']['data'];
                this.nfRelatorioExcel = this.nfRelatorio;
                this.tempNfRelatorio = [...this.nfRelatorio];
                if (this.nfRelatorio.length > 15) {
                    this.onPaginacao = true;
                }
            }
            else if (res.status === 204) {
                this.carregouNf = false;
                this.onEmpy = true;
                this.pnotify.notice('Não há item a serem exibidos');
            }
        }, error => {
            this.pnotify.error(error['error']);
        });
    }
    exportarExcel() {
        /* Remove a coluna NF_EMISSAO_CLARION da lista */
        this.nfRelatorioExcel.forEach(element => delete element['NF_EMISSAO_CLARION']);
        /* Chama o serviço para exportar dados em documento excel */
        this.xlsxService.exportFile(this.nfRelatorioExcel, 'relatório');
    }
    /* Filtro por nome de usuário */
    search(form) {
        const val = form.value.usuario.toLowerCase();
        if (!val) {
            this.nfRelatorio = this.tempNfRelatorio;
        }
        const temp = this.tempNfRelatorio.filter(row => {
            return Object.keys(row).some(property => {
                return row[property] === null
                    ? null
                    : row[property]
                        .toString()
                        .toLowerCase()
                        .indexOf(val) !== -1;
            });
        });
        this.nfRelatorio = temp;
    }
    onAdvancedFilter() {
        this.showAdvancedFilter = !this.showAdvancedFilter;
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
    /* Paginação */
    onPageChanged(event) {
        this.begin = (event.page - 1) * event.itemsPerPage;
        this.end = event.page * event.itemsPerPage;
    }
    /* Paginação */
    /* Ordenação */
    sort(key) {
        this.key = key;
        this.reverse = !this.reverse;
    }
    /* Ordenação */
    comparaData() {
        let stra = this.form.get('dataInicial').value;
        let strb = this.form.get('dataFinal').value;
        let dataInicial = {};
        let dataFinal = {};
        if (stra instanceof Date) {
            dataInicial = stra;
        }
        else if (stra !== null) {
            dataInicial = new Date(stra.split('-').reverse().join('-'));
        }
        if (strb instanceof Date) {
            dataFinal = strb;
        }
        else if (strb !== null) {
            dataFinal = new Date(strb.split('-').reverse().join('-'));
            ;
        }
        if (!dataFinal) {
            return false;
        }
        else if (dataInicial > dataFinal) {
            this.compararData = true;
            return this.compararData;
        }
    }
    getLinhas() {
        this.service.getLinhas().subscribe((response) => {
            if (Object.keys(response.body['result']).length > 0) {
                this.linhas = response.body['result'];
            }
        });
    }
    getClasses() {
        this.placeholderClasses = 'Carregando...';
        this.loaderNavbar = true;
        let id_linha = [];
        if (this.form.get('linhas').status === 'VALID') {
            id_linha['ID_LINH'] = (this.form.get('linhas').value);
            this.service
                .getClasses(id_linha)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
                this.loaderNavbar = false;
                this.placeholderClasses = 'Selecione uma classe';
            }))
                .subscribe((response) => {
                if (Object.keys(response.body['result']).length > 0) {
                    this.classes = response.body['result'];
                }
                this.loaderNavbar = false;
            });
        }
    }
    getMateriais() {
        let params = {};
        this.placeholderMateriais = 'Carregando...';
        this.materiais = [];
        this.loaderNavbar = true;
        if (this.form.get('classes').value) {
            params['ID_CLAS'] = (this.form.get('classes').value);
            params['IN_STAT'] = 1;
        }
        this.service
            .getMateriais(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
            this.loaderNavbar = false;
            this.placeholderMateriais = 'Selecione um material';
        }))
            .subscribe((response) => {
            console.log(response);
            if (Object.keys(response.body['result']).length > 0) {
                this.materiais = response.body['result'];
            }
        });
    }
    validaCampo() {
        if (this.form.value['linhas'] != null)
            this.form.get('classes').enable();
        else {
            this.form.get('classes').disable();
            this.form.get('materiais').disable();
        }
        if (this.form.value['classes'] != null)
            this.form.get('materiais').enable();
        else {
            this.form.get('materiais').disable();
        }
    }
};
AbastecimentoMonitoresNfeSemPedidoPaiComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsLocaleService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_15__["TitleService"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_14__["RouterService"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_10__["DateService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_12__["AtividadesService"] },
    { type: _nfe_sem_pedido_pai_service__WEBPACK_IMPORTED_MODULE_16__["AbastecimentoNfeSemPedidoPaiService"] },
    { type: src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_13__["XlsxService"] }
];
AbastecimentoMonitoresNfeSemPedidoPaiComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'nfe-sem-pedido-pai',
        template: _raw_loader_nfe_sem_pedido_pai_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_nfe_sem_pedido_pai_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsLocaleService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_15__["TitleService"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_14__["RouterService"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_10__["DateService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_12__["AtividadesService"],
        _nfe_sem_pedido_pai_service__WEBPACK_IMPORTED_MODULE_16__["AbastecimentoNfeSemPedidoPaiService"],
        src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_13__["XlsxService"]])
], AbastecimentoMonitoresNfeSemPedidoPaiComponent);



/***/ }),

/***/ "D8GC":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/monitores/nfe-sem-pedido-pai/nfe-sem-pedido-pai.service.ts ***!
  \**************************************************************************************************/
/*! exports provided: AbastecimentoNfeSemPedidoPaiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbastecimentoNfeSemPedidoPaiService", function() { return AbastecimentoNfeSemPedidoPaiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment.prod */ "cxbk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let AbastecimentoNfeSemPedidoPaiService = class AbastecimentoNfeSemPedidoPaiService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.BASE_URL = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].API;
    }
    getNfeSemPedidoPai(params) {
        return this.httpClient.get(`${this.BASE_URL}/abastecimento/nfe-sem-pedido-pai`, {
            params,
            observe: "response"
        });
    }
    getLinhas() {
        return this.httpClient.get(`${this.BASE_URL}/common/v2/linhas`, {
            observe: 'response'
        });
    }
    getClasses(params) {
        return this.httpClient.get(`${this.BASE_URL}/common/v2/classes`, {
            params,
            observe: 'response'
        });
    }
    getMateriais(params = {}) {
        return this.httpClient.get(`${this.BASE_URL}/common/v2/materiais`, {
            params,
            observe: 'response'
        });
    }
};
AbastecimentoNfeSemPedidoPaiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
AbastecimentoNfeSemPedidoPaiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], AbastecimentoNfeSemPedidoPaiService);



/***/ }),

/***/ "FSzN":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/monitores/nfe-sem-pedido-pai/nfe-sem-pedido-pai.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: AbastecimentoMonitoresNfeSemPedidoPaiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbastecimentoMonitoresNfeSemPedidoPaiModule", function() { return AbastecimentoMonitoresNfeSemPedidoPaiModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/not-found/not-found.module */ "sCnT");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-order-pipe */ "fnxe");
/* harmony import */ var _nfe_sem_pedido_pai_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nfe-sem-pedido-pai-routing.module */ "Ryl0");
/* harmony import */ var _nfe_sem_pedido_pai_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./nfe-sem-pedido-pai.component */ "3UEY");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng2-currency-mask */ "D5nU");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_12__);













let AbastecimentoMonitoresNfeSemPedidoPaiModule = class AbastecimentoMonitoresNfeSemPedidoPaiModule {
};
AbastecimentoMonitoresNfeSemPedidoPaiModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _nfe_sem_pedido_pai_component__WEBPACK_IMPORTED_MODULE_11__["AbastecimentoMonitoresNfeSemPedidoPaiComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _nfe_sem_pedido_pai_routing_module__WEBPACK_IMPORTED_MODULE_10__["AbastecimentoMonitoresNfeSemPedidoPaiRoutingModule"],
            src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_4__["NotFoundModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["ModalModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["PaginationModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["TabsModule"].forRoot(),
            ngx_order_pipe__WEBPACK_IMPORTED_MODULE_9__["OrderModule"],
            ng2_currency_mask__WEBPACK_IMPORTED_MODULE_12__["CurrencyMaskModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_5__["TemplatesModule"]
        ],
        providers: [{ provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"], useValue: 'pt-PT' }],
    })
], AbastecimentoMonitoresNfeSemPedidoPaiModule);



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

/***/ "Ryl0":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/monitores/nfe-sem-pedido-pai/nfe-sem-pedido-pai-routing.module.ts ***!
  \*********************************************************************************************************/
/*! exports provided: AbastecimentoMonitoresNfeSemPedidoPaiRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbastecimentoMonitoresNfeSemPedidoPaiRoutingModule", function() { return AbastecimentoMonitoresNfeSemPedidoPaiRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _nfe_sem_pedido_pai_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nfe-sem-pedido-pai.component */ "3UEY");




const routes = [
    {
        path: '',
        component: _nfe_sem_pedido_pai_component__WEBPACK_IMPORTED_MODULE_3__["AbastecimentoMonitoresNfeSemPedidoPaiComponent"]
    }
];
let AbastecimentoMonitoresNfeSemPedidoPaiRoutingModule = class AbastecimentoMonitoresNfeSemPedidoPaiRoutingModule {
};
AbastecimentoMonitoresNfeSemPedidoPaiRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AbastecimentoMonitoresNfeSemPedidoPaiRoutingModule);



/***/ }),

/***/ "TZiM":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/monitores/nfe-sem-pedido-pai/nfe-sem-pedido-pai.component.scss ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hYmFzdGVjaW1lbnRvL21vbml0b3Jlcy9uZmUtc2VtLXBlZGlkby1wYWkvbmZlLXNlbS1wZWRpZG8tcGFpLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVJLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWJhc3RlY2ltZW50by9tb25pdG9yZXMvbmZlLXNlbS1wZWRpZG8tcGFpL25mZS1zZW0tcGVkaWRvLXBhaS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiwgXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24geyBcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgbWFyZ2luOiAwOyBcbn0iXX0= */");

/***/ }),

/***/ "cxbk":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: true,
    API: '/api',
    URL_MTCORP: 'https://crm360.monterrey.com.bo'
};


/***/ }),

/***/ "vAIp":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/abastecimento/monitores/nfe-sem-pedido-pai/nfe-sem-pedido-pai.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\n<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<app-header appTitle=\"Nfe sem Pedido Pai\">\n  <button \n    (click)=\"exportarExcel()\"\n    [disabled]=\"!carregouNf\"\n    >\n    Exportar\n  </button>\n  <button \n    (click)=\"onFilter()\"\n    [disabled] = \"form.status == 'INVALID' || comparaData()\"\n    >\n    Filtrar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\n  <advanced-filter>\n    <form id=\"form-abastecimento-nfe-sem-pedido-pai\" [formGroup]=\"form\" autocomplete=\"off\">\n      <div class=\"form-row\">\n        <div class=\"form-group col-md-2\">\n          <label for=\"dataInicial\">Data Inicial</label>\n          <input\n            class=\"form-control\"\n            id=\"dataInicial\"\n            type=\"text\"\n            bsDatepicker\n            [bsConfig]=\"bsConfig\"\n            formControlName=\"dataInicial\"\n            [ngClass]=\"onFieldError('dataInicial') + ' ' + onFieldRequired('dataInicial')\"\n          >\n          <invalid-form-control\n            [show]=\"onFieldInvalid('dataInicial')\"\n            message=\"Data inicial é obrigatório.\">\n          </invalid-form-control>\n        </div>\n        <div class=\"form-group col-md-2\">\n          <label for=\"dataFinal\">Data Final</label>\n          <input\n            class=\"form-control\"\n            id=\"dataFinal\"\n            type=\"text\"\n            bsDatepicker\n            [bsConfig]=\"bsConfig\"\n            formControlName=\"dataFinal\"\n            [ngClass]=\"onFieldError('dataFinal') + ' ' + onFieldRequired('dataInicial')\"\n          >\n          <invalid-form-control\n            [show]=\"onFieldInvalid('dataFinal')\"\n            message=\"Data final é obrigatório.\">\n          </invalid-form-control>\n          <invalid-form-control\n            [show]=\"comparaData()\"\n            message=\"Data final deve ser maior que data inicial\">\n          </invalid-form-control>\n        </div>\n        <div class=\"form-group col-md-2\">\n          <label for=\"numeroPedido\"> Número do pedido </label>\n          <input\n            id=\"numeroPedido\"\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"DIGITE...\"\n            formControlName=\"pedido\"\n            currencyMask [options]=\"numerico\"\n            (keyup.enter)=\"onFilter()\">\n        </div>\n        <div class=\"form-group col-md-2\">\n          <label for=\"numeroNota\"> Número de nota fiscal </label>\n          <input\n            id=\"numeroNota\"\n            type=\"number\"\n            class=\"form-control\"\n            placeholder=\"DIGITE...\"\n            formControlName=\"notaFiscal\"\n            currencyMask [options]=\"numerico\"\n            (keyup.enter)=\"onFilter()\">\n        </div>\n        <div class=\"form-group col-md-4\">\n          <label for=\"usuario\">Usuario</label>\n          <input\n            class=\"form-control\"\n            id=\"usuario\"\n            type=\"text\"\n            formControlName=\"usuario\"\n            placeholder=\"Digite o nome do usuário...\"\n            (keyup.enter)=\"onFilter()\"\n          >\n        </div>\n        <div class=\"form-group col-md-3\">\n          <label for=\"linha\">Linha</label>\n            <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"true\"\n              [items]=\"linhas\"\n              [virtualScroll]=\"true\"\n              [hideSelected]=\"true\"\n              [closeOnSelect]=\"true\"\n              placeholder=\"Selecione linha\"\n              bindLabel=\"NM_LINH\"\n              bindValue=\"ID\"\n              placeholder=\"Selecione...\"\n              formControlName=\"linhas\"\n              (change) = \"getClasses(); validaCampo()\"\n              [ngClass]=\"onFieldError('linhas') + ' ' + onFieldRequired('linhas')\"\n            >\n            </ng-select>\n            <invalid-form-control\n              [show]=\"onFieldInvalid('linhas')\"\n              message=\"Linha é obrigatório.\">\n            </invalid-form-control>\n          </div>\n        <div class=\"form-group col-md-3\">\n          <label for=\"classe\">Classe</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"true\"\n            [items]=\"classes\"\n            [virtualScroll]=\"true\"\n            [hideSelected]=\"true\"\n            [closeOnSelect]=\"true\"\n            labelForId=\"classe\"\n            bindLabel=\"NM_CLAS\"\n            bindValue=\"ID\"\n            placeholder=\"Selecione classe\"\n            formControlName=\"classes\"\n            (change) = \"getMateriais(); validaCampo()\"\n            [ngClass]=\"onFieldError('classes') + ' ' + onFieldRequired('classes')\"\n          >\n          </ng-select>\n          <invalid-form-control\n            [show]=\"onFieldInvalid('classes')\"\n            message=\"Classes é obrigatório.\">\n          </invalid-form-control>\n        </div>\n        <div class=\"form-group col-md-6\">\n          <label for=\"material\">Material</label>\n            <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"true\"\n              [items]=\"materiais\"\n              [virtualScroll]=\"true\"\n              [hideSelected]=\"true\"\n              [closeOnSelect]=\"true\"\n              labelForId=\"material\"\n              bindLabel=\"NM_MATE\"\n              bindValue=\"ID\"\n              placeholder=\"Selecione material\"\n              formControlName=\"materiais\"\n              [ngClass]=\"onFieldError('materiais') + ' ' + onFieldRequired('materiais')\"\n            >\n            </ng-select>\n            <invalid-form-control\n              [show]=\"onFieldInvalid('materiais')\"\n              message=\"Materiais é obrigatório.\">\n            </invalid-form-control>\n        </div>\n      </div>\n    </form>\n  </advanced-filter>\n  <div class=\"mt-3\" *ngIf=\"carregouNf && !loading\">\n    <div class=\"table-responsive\">\n      <custom-table>\n        <ng-template #thead let-thead>\n          <tr>\n            <th class=\"text-center hover\" (click)=\"sort('PEDIDO')\">Pedido \n              <span *ngIf=\"key =='PEDIDO'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\n              <span *ngIf=\"key !='PEDIDO'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th class=\"text-center text-nowrap hover\" (click)=\"sort('NOTA_FISCAL')\">Nota Fiscal\n                <span *ngIf=\"key =='NOTA_FISCAL'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\n                <span *ngIf=\"key !='NOTA_FISCAL'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th class=\"text-center hover\" (click)=\"sort('NF_EMISSAO_CLARION')\">Emissão\n                <span *ngIf=\"key =='NF_EMISSAO_CLARION'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\n                <span *ngIf=\"key !='NF_EMISSAO_CLARION'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th class=\"text-center hover\" (click)=\"sort('USUARIO')\">Usuário\n                <span *ngIf=\"key =='USUARIO'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\n                <span *ngIf=\"key !='USUARIO'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th class=\"text-center text-nowrap hover\" (click)=\"sort('NF_ITEM')\">Item\n              <span *ngIf=\"key =='NF_ITEM'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\n              <span *ngIf=\"key !='NF_ITEM'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th class=\"text-center text-nowrap hover\" (click)=\"sort('MATERIAL_LINHA')\">Linha\n                <span *ngIf=\"key =='MATERIAL_LINHA'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\n                <span *ngIf=\"key !='MATERIAL_LINHA'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th class=\"text-center hover\" (click)=\"sort('MATERIAL_CLASSE')\">Classe\n                <span *ngIf=\"key =='MATERIAL_CLASSE'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\n                <span *ngIf=\"key !='MATERIAL_CLASSE'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th class=\"text-center text-nowrap hover\" (click)=\"sort('MATERIAL_ID')\">Código\n                <span *ngIf=\"key =='MATERIAL_ID'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\n                <span *ngIf=\"key !='MATERIAL_ID'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th class=\"text-center hover\" (click)=\"sort('MATERIAL_DESCRICAO')\">Descrição\n                <span *ngIf=\"key =='MATERIAL_DESCRICAO'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\n                <span *ngIf=\"key !='MATERIAL_DESCRICAO'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th class=\"text-center text-nowrap hover\" (click)=\"sort('MATERIAL_VOLUME')\">Volume\n                <span *ngIf=\"key =='MATERIAL_VOLUME'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\n                <span *ngIf=\"key !='MATERIAL_VOLUME'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th class=\"text-center hover\" (click)=\"sort('MATERIAL_VOLUME')\">Justificativa\n                <span *ngIf=\"key =='MATERIAL_VOLUME'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\n                <span *ngIf=\"key !='MATERIAL_VOLUME'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr *ngFor = \"let item of nfRelatorio | orderBy: key : reverse | slice: begin : end\">\n            <td class=\"text-center\">{{item.PEDIDO | number: '0.0-0'}}</td>\n            <td class=\"text-center\">{{item.NOTA_FISCAL | number: '0.0-0'}}</td>\n            <td class=\"text-center\">{{item.NF_EMISSAO}}</td>\n            <td class=\"text-center text-nowrap\">{{item.USUARIO}}</td>\n            <td class=\"text-center\">{{item.NF_ITEM | number: '0.0-0'}}</td>\n            <td class=\"text-center\">{{item.MATERIAL_LINHA}}</td>\n            <td class=\"text-center text-nowrap\">{{item.MATERIAL_CLASSE}}</td>\n            <td class=\"text-center\">{{item.MATERIAL_ID | number: '0.0-0'}}</td>\n            <td class=\"text-center text-nowrap\">{{item.MATERIAL_DESCRICAO}}</td>\n            <td class=\"text-right\">{{item.MATERIAL_VOLUME | number: '0.3-3'}}</td>\n            <td class=\"text-center text-nowrap\">{{ item.JUSTIFICATIVA }}</td>\n          </tr>\n\n        </ng-template>\n      </custom-table>\n    </div>\n    <div class=\"mt-2\" *ngIf=\"onPaginacao && !loading\">\n      Exibindo {{ begin + 1 }} a {{ end }} de {{ nfRelatorio?.length }}\n      <div class=\"d-flex\">\n        <pagination\n          [maxSize]=\"10\"\n          [totalItems]=\"nfRelatorio?.length\"\n          (pageChanged)=\"onPageChanged($event)\"\n          [(itemsPerPage)]=\"itemsPerPage\"\n          [boundaryLinks]=\"true\"\n          previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\"\n          lastText=\"&raquo;\">\n        </pagination>\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"onEmpy && !loading\"class=\"text-center d-flex justify-content-center align-items-center p-5\" style=\"height: 80%\">\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n  </div>\n</app-body>\n\n");

/***/ })

}]);
//# sourceMappingURL=nfe-sem-pedido-pai-nfe-sem-pedido-pai-module-es2015.js.map