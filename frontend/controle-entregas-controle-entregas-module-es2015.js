(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["controle-entregas-controle-entregas-module"],{

/***/ "02/m":
/*!************************************************************!*\
  !*** ./src/app/shared/directives/is-ellipsed.directive.ts ***!
  \************************************************************/
/*! exports provided: IsEllipsedDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsEllipsedDirective", function() { return IsEllipsedDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


let IsEllipsedDirective = class IsEllipsedDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    ngAfterViewInit() {
        setTimeout(() => {
            const element = this.elementRef.nativeElement;
            if (element.offsetWidth < element.scrollWidth) {
                element.title = element.innerHTML;
            }
        }, 500);
    }
};
IsEllipsedDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
IsEllipsedDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[isEllipsed]'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], IsEllipsedDirective);



/***/ }),

/***/ "38lD":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/comercial/controle-entregas/controle-entregas.module.ts ***!
  \*********************************************************************************/
/*! exports provided: ComercialControleEntregasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialControleEntregasModule", function() { return ComercialControleEntregasModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "978R");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "6No5");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "2ZVE");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-currency-mask */ "D5nU");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _controle_entregas_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./controle-entregas-routing.module */ "t7QM");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var src_app_shared_directives_directives_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/directives/directives.module */ "yGOH");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./lista/lista.component */ "IVSg");




// ngx-bootstrap





// ng-select

// ng2-currency-mask

// PNotify

// Modules




// Components

let ComercialControleEntregasModule = class ComercialControleEntregasModule {
};
ComercialControleEntregasModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_lista_lista_component__WEBPACK_IMPORTED_MODULE_16__["ComercialControleEntregasListaComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_6__["PaginationModule"].forRoot(),
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__["TabsModule"].forRoot(),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsDatepickerModule"].forRoot(),
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["NgSelectModule"],
            ng2_currency_mask__WEBPACK_IMPORTED_MODULE_10__["CurrencyMaskModule"],
            _controle_entregas_routing_module__WEBPACK_IMPORTED_MODULE_12__["ComercialControleEntregasRoutingModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_14__["TemplatesModule"],
            src_app_shared_directives_directives_module__WEBPACK_IMPORTED_MODULE_15__["DirectivesModule"]
        ],
        providers: [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"]]
    })
], ComercialControleEntregasModule);



/***/ }),

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

/***/ "GJY2":
/*!********************************************************************************!*\
  !*** ./src/app/modules/comercial/controle-entregas/lista/lista.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep comercial-controle-entregas #scrollDetalhes {\n  height: 340px;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21lcmNpYWwvY29udHJvbGUtZW50cmVnYXMvbGlzdGEvbGlzdGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDRSxhQUFBO0VBQ0EsY0FBQTtBQUROIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9jb21lcmNpYWwvY29udHJvbGUtZW50cmVnYXMvbGlzdGEvbGlzdGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAge1xuICBjb21lcmNpYWwtY29udHJvbGUtZW50cmVnYXMge1xuICAgICNzY3JvbGxEZXRhbGhlcyB7XG4gICAgICBoZWlnaHQ6IDM0MHB4O1xuICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "IVSg":
/*!******************************************************************************!*\
  !*** ./src/app/modules/comercial/controle-entregas/lista/lista.component.ts ***!
  \******************************************************************************/
/*! exports provided: ComercialControleEntregasListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialControleEntregasListaComponent", function() { return ComercialControleEntregasListaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lista.component.html */ "oDRf");
/* harmony import */ var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lista.component.scss */ "GJY2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/chronos */ "xj/R");
/* harmony import */ var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/locale */ "0b5p");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _controle_entregas_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../controle-entregas.service */ "S5sn");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var src_app_modules_admin_perfis_services_perfis_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/modules/admin/perfis/services/perfis.service */ "6bs2");












Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_10__["defineLocale"])('pt-br', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_11__["ptBrLocale"]);
// Services







let ComercialControleEntregasListaComponent = class ComercialControleEntregasListaComponent {
    constructor(localeService, router, location, activatedRoute, pnotifyService, formBuilder, atividadesService, controleEntregasService, dateService, titleService, modalService, routerService, perfilService) {
        this.localeService = localeService;
        this.router = router;
        this.location = location;
        this.activatedRoute = activatedRoute;
        this.pnotifyService = pnotifyService;
        this.formBuilder = formBuilder;
        this.atividadesService = atividadesService;
        this.controleEntregasService = controleEntregasService;
        this.dateService = dateService;
        this.titleService = titleService;
        this.modalService = modalService;
        this.routerService = routerService;
        this.perfilService = perfilService;
        this.loaderNavbar = false;
        this.loaderFullScreen = false;
        this.loaderImage = true;
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: '/comercial/home',
            },
            {
                descricao: 'Controle de entregas',
            },
        ];
        this.tableConfig = {
            isResponsive: true,
            subtitleBorder: true,
            isFixed: true,
        };
        this.imageLoading = false;
        this.showAdvancedFilter = true;
        this.vendedores = [];
        this.pedidos = [];
        this.pedidosLoaded = false;
        this.pedidosEmpty = true;
        this.pedido = {};
        this.entrega = [];
        this.detalhes = [];
        this.detalhesRomaneio = [];
        this.detalhesRomaneioEmpty = false;
        this.detalhesRomaneioLoading = false;
        this.currentPage = 1;
        this.maxSize = 10;
        this.itemsPerPage = 300;
        this.pedidosPagination = [];
        this.orderBy = 'dataPrev';
        this.orderType = 'DESC';
        // Subtitles (Ativo/Inativo)
        this.subtitles = [
            {
                id: 1,
                text: 'Entregue',
                color: 'green',
            },
            {
                id: 2,
                text: 'Não entregue',
                color: 'red',
            },
        ];
        this.situacoes = [];
        this.filiais = [];
        this.columns = {
            nomeEmpresa: {
                name: 'Empresa',
                active: true,
            },
            romaneio: {
                name: 'Romaneio',
                active: true,
            },
            dataPrev: {
                name: 'Data Prevista de Entrega',
                active: true,
            },
            dataEntrega: {
                name: 'Data de Entrega',
                active: false,
            },
            nomeCliente: {
                name: 'Cliente',
                active: true,
            },
            sequencia: {
                name: 'Sequência',
                active: false,
            },
            pedido: {
                name: 'Pedido',
                active: true,
            },
            notaFiscal: {
                name: 'Nota Fiscal',
                active: true,
            },
            dataEmissao: {
                name: 'Data de emissão',
                active: false,
            },
            nomeSituacao: {
                name: 'Situação',
                active: true,
            },
        };
        this.keepOriginalOrder = (a, b) => a.key;
        this.localeService.use('pt-br');
        this.bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' }, { adaptivePosition: true }, { showWeekNumbers: false });
        this.pnotifyService.getPNotify();
    }
    ngOnInit() {
        this.setFormFilter();
        this.registrarAcesso();
        this.getFiliais();
        this.getFiltros();
        this.getSituacoes();
        this.titleService.setTitle('Controle de entregas');
    }
    registrarAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
    }
    getFiltros() {
        this.controleEntregasService
            .getFiltros()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.loaderFullScreen = false;
        }))
            .subscribe((response) => {
            if (response[0].responseCode === 200) {
                this.vendedores = response[0].result;
                this.vendedores.unshift({
                    id: 0,
                    nome: 'EXIBIR TODOS',
                });
            }
            this.onActivatedRoute();
        }, (error) => {
            this.pnotifyService.error();
            this.location.back();
        });
    }
    getFiliais() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.filiais = [
                {
                    CD_FILI: 46,
                    NM_FILI: 'Corte & Dobra - Cajamar',
                },
                {
                    CD_FILI: 72,
                    NM_FILI: 'Corte & Dobra - Praia Grande',
                },
                {
                    CD_FILI: 3,
                    NM_FILI: 'Corte & Dobra - Rio das Pedras',
                },
                {
                    CD_FILI: 41,
                    NM_FILI: 'Distribuição Duque de Caxias',
                },
                {
                    CD_FILI: 6,
                    NM_FILI: 'Distribuição Osasco',
                },
                {
                    CD_FILI: 18,
                    NM_FILI: 'Distribuição Tietê',
                },
                {
                    CD_FILI: 79,
                    NM_FILI: 'Distribuição Taipas',
                },
                {
                    CD_FILI: 77,
                    NM_FILI: 'Distribuição Camanducaia',
                },
                {
                    CD_FILI: 83,
                    NM_FILI: 'Distribuição Guarulhos',
                },
                {
                    CD_FILI: 9661,
                    NM_FILI: 'Dba Aços Especiais',
                },
                {
                    CD_FILI: 9639,
                    NM_FILI: 'Dba Jacareí',
                },
                {
                    CD_FILI: 9636,
                    NM_FILI: 'Dba Praia Grande',
                },
                {
                    CD_FILI: 9645,
                    NM_FILI: 'Dba Piracicaba',
                },
            ];
        });
    }
    onActivatedRoute() {
        this.activatedRoute.queryParams.subscribe((response) => {
            let _response = this.routerService.getBase64UrlParams(response);
            if (Object.keys(_response).length > 0) {
                this.form.patchValue(_response);
                this.getPedidos(this.getParams());
            }
            else {
                this.loaderNavbar = false;
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
        const vendedorSelecionado = this.vendedores.filter((vendedor) => (vendedor === null || vendedor === void 0 ? void 0 : vendedor.id) == _params['CD_VEND']);
        _params['NM_VEND'] = '';
        if (vendedorSelecionado.length == 1) {
            _params['NM_VEND'] = vendedorSelecionado[0]['nome'];
        }
        return _params;
    }
    setFormFilter() {
        this.form = this.formBuilder.group({
            DT_INIC: [this.dateService.getFirstDayMonth(), [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            DT_FINA: [this.dateService.getLastDayMonth(), [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            NM_CLIE: [null],
            NOTA_FISC: [null],
            CD_PEDI: [null],
            SG_PEDI: [null],
            CD_ROMA: [null],
            CD_VEND: [null],
            NM_VEND: [null],
            DS_CLIE: [null],
            CD_FILI: [null],
            ENTR_SG_STAT: [null],
            TT_REGI_PAGI: [300],
            ORDE_BY: ['dataPrev'],
            ORDE_TYPE: ['DESC'],
            PAGI: [1],
            TIME: new Date().getDate(),
        });
        this.getMatriculaVendedorLogado();
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
        this.form.get('ORDE_BY').setValue(this.orderBy);
        this.form.get('ORDE_TYPE').setValue(this.orderType);
        this.onFilter();
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
    getPedidos(params) {
        var _a;
        (_a = this.$serviceSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        this.loaderNavbar = true;
        this.pedidosLoaded = false;
        this.controleEntregasService
            .getLista(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.loaderNavbar = false;
            this.pedidosLoaded = true;
        }))
            .subscribe({
            next: (response) => {
                if (response.status !== 200) {
                    this.pedidos = [];
                    this.pedidosEmpty = true;
                    return;
                }
                this.pedidos = response.body['data'];
                this.totalItems = response.body['total'];
                this.pedidosEmpty = false;
            },
            error: (error) => {
                var _a;
                this.pedidos = [];
                this.pedidosEmpty = true;
                const message = (_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.message;
                message
                    ? this.pnotifyService.error(message)
                    : this.pnotifyService.error();
            }
        });
    }
    getDetalhesEntrega(params, template) {
        this.loaderNavbar = true;
        this.imageLoading = true;
        this.controleEntregasService
            .getDetalhesPedido(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.loaderNavbar = false;
        }))
            .subscribe((response) => {
            if (response.status !== 200) {
                return;
            }
            this.entrega = response.body['data'];
            if (!this.entrega['ENTR_COMP_FOTO']) {
                setTimeout(() => {
                    this.imageLoading = false;
                }, 200);
            }
            this.modalRef = this.modalService.show(template, {
                animated: false,
                ignoreBackdropClick: true,
                class: 'modal-xxl',
            });
        }, (error) => {
            var _a;
            const message = (_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.message;
            message
                ? this.pnotifyService.error(message)
                : this.pnotifyService.error();
        });
    }
    getDetalhesRomaneio(params) {
        this.detalhesRomaneioLoading = true;
        this.controleEntregasService
            .getDetalhesRomaneio(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.detalhesRomaneioLoading = false;
        }))
            .subscribe((response) => {
            if (response.status !== 200) {
                this.detalhesRomaneioEmpty = true;
                return;
            }
            this.detalhesRomaneioEmpty = false;
            this.detalhesRomaneio = response.body['data'];
        }, (error) => {
            var _a;
            this.detalhesRomaneioEmpty = false;
            const message = (_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.message;
            message
                ? this.pnotifyService.error(message)
                : this.pnotifyService.error();
        });
    }
    onFilter() {
        this.form.get('TIME').setValue(new Date().getTime());
        this.form.get('PAGI').setValue(1);
        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams(this.getParams()),
        });
    }
    viewDetails(item, template) {
        this.pedido = item;
        const params = {
            CD_ROMA: item === null || item === void 0 ? void 0 : item.CD_ROMA,
            CD_PEDI: item === null || item === void 0 ? void 0 : item.CD_PEDI,
            CD_FILI: item === null || item === void 0 ? void 0 : item.CD_FILI,
            ID_LOGI_FUSI_PEDI: item === null || item === void 0 ? void 0 : item.ID,
        };
        this.getDetalhesEntrega(params, template);
        this.getDetalhesRomaneio(params);
    }
    classStatusBorder(item) {
        if ((item === null || item === void 0 ? void 0 : item.ENTR_SG_STAT) == 'ENTREGA_REALIZADA') {
            return 'border-success';
        }
        return 'border-danger';
    }
    getSelectedStyle(item) {
        var _a;
        if (((_a = this.pedido) === null || _a === void 0 ? void 0 : _a.CD_PEDI) == (item === null || item === void 0 ? void 0 : item.CD_PEDI)) {
            return { 'font-weight': 600, color: 'blue' };
        }
        return {};
    }
    onResetForm() {
        this.form.reset();
    }
    /* Paginação */
    onPageChanged(event) {
        this.form.get('TIME').setValue(new Date().getTime());
        this.form.get('PAGI').setValue(event.page);
        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams(this.getParams()),
        });
    }
    /* Paginação */
    getSituacoes() {
        this.controleEntregasService.getSituacoes().subscribe((response) => {
            if (response.status === 200) {
                this.situacoes = response.body['data'];
            }
            else {
                this.pnotifyService.notice('Nenhuma situação encontrada.');
            }
        }, (error) => {
            this.pnotifyService.error('Erro ao carregar situações.');
        });
    }
    getMatriculaVendedorLogado() {
        var _a;
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.form.get('CD_VEND').setValue((_a = currentUser === null || currentUser === void 0 ? void 0 : currentUser.info) === null || _a === void 0 ? void 0 : _a.idVendedor);
    }
    onImageLoad() {
        setTimeout(() => {
            this.imageLoading = false;
        }, 200);
    }
};
ComercialControleEntregasListaComponent.ctorParameters = () => [
    { type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsLocaleService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__["PNotifyService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_14__["AtividadesService"] },
    { type: _controle_entregas_service__WEBPACK_IMPORTED_MODULE_13__["ComercialControleEntregasService"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_15__["DateService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_16__["TitleService"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["BsModalService"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_17__["RouterService"] },
    { type: src_app_modules_admin_perfis_services_perfis_service__WEBPACK_IMPORTED_MODULE_18__["AdminPerfisService"] }
];
ComercialControleEntregasListaComponent.propDecorators = {
    scrollToFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['scrollToFilter', {},] }]
};
ComercialControleEntregasListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-controle-entregas-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsLocaleService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__["PNotifyService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_14__["AtividadesService"],
        _controle_entregas_service__WEBPACK_IMPORTED_MODULE_13__["ComercialControleEntregasService"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_15__["DateService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_16__["TitleService"],
        ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["BsModalService"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_17__["RouterService"],
        src_app_modules_admin_perfis_services_perfis_service__WEBPACK_IMPORTED_MODULE_18__["AdminPerfisService"]])
], ComercialControleEntregasListaComponent);



/***/ }),

/***/ "Ky88":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/logistica/entrega/controle-entregas/lista/lista.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ComercialControleEntregasListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialControleEntregasListaComponent", function() { return ComercialControleEntregasListaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lista.component.html */ "UvWK");
/* harmony import */ var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lista.component.scss */ "aSw5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/chronos */ "xj/R");
/* harmony import */ var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/locale */ "0b5p");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _controle_entregas_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../controle-entregas.service */ "QxYm");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var _desmembramento_services_desmembramento_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../desmembramento/services/desmembramento.service */ "PUeC");
/* harmony import */ var _cadastros_filiais_services_filiais_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../cadastros/filiais/services/filiais.service */ "NXOV");












Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_10__["defineLocale"])('pt-br', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_11__["ptBrLocale"]);
// Services








let ComercialControleEntregasListaComponent = class ComercialControleEntregasListaComponent {
    constructor(localeService, router, location, activatedRoute, pnotifyService, formBuilder, atividadesService, service, dateService, titleService, modalService, routerService, pnotify, filiaisService, desmembramentoService) {
        this.localeService = localeService;
        this.router = router;
        this.location = location;
        this.activatedRoute = activatedRoute;
        this.pnotifyService = pnotifyService;
        this.formBuilder = formBuilder;
        this.atividadesService = atividadesService;
        this.service = service;
        this.dateService = dateService;
        this.titleService = titleService;
        this.modalService = modalService;
        this.routerService = routerService;
        this.pnotify = pnotify;
        this.filiaisService = filiaisService;
        this.desmembramentoService = desmembramentoService;
        this.loaderNavbar = false;
        this.loaderFullScreen = false;
        this.loadingFiliais = false;
        this.loaderImage = true;
        this.tableConfig = {
            isResponsive: true,
            subtitleBorder: true,
            isFixed: true,
        };
        this.imageLoading = false;
        this.showAdvancedFilter = true;
        this.vendedores = [];
        this.pedidos = [];
        this.pedidosLoaded = false;
        this.pedidosEmpty = true;
        this.pedido = {};
        this.entrega = [];
        this.detalhes = [];
        this.detalhesRomaneio = [];
        this.detalhesRomaneioEmpty = false;
        this.detalhesRomaneioLoading = false;
        this.currentPage = 1;
        this.maxSize = 10;
        this.itemsPerPage = 300;
        this.pedidosPagination = [];
        this.orderBy = 'dataPrev';
        this.orderType = 'DESC';
        // Subtitles (Ativo/Inativo)
        this.subtitles = [
            {
                id: 1,
                text: 'Entregado',
                color: 'green',
            },
            {
                id: 2,
                text: 'No entregado',
                color: 'red',
            },
        ];
        this.situacoes = [];
        this.filiais = [];
        this.columns = {
            nomeEmpresa: {
                name: 'Empresa',
                active: true,
            },
            romaneio: {
                name: 'Lista',
                active: true,
            },
            dataPrev: {
                name: 'Fecha estimada de entrega',
                active: true,
            },
            dataEntrega: {
                name: 'Fecha de entrega',
                active: false,
            },
            nomeCliente: {
                name: 'Cliente',
                active: true,
            },
            sequencia: {
                name: 'Secuencia',
                active: false,
            },
            pedido: {
                name: 'Pedido',
                active: true,
            },
            notaFiscal: {
                name: 'Nota Fiscal',
                active: true,
            },
            dataEmissao: {
                name: 'Fecha de emisión',
                active: false,
            },
            nomeSituacao: {
                name: 'Situación',
                active: true,
            },
        };
        this.tipoOperacao = [];
        this.keepOriginalOrder = (a, b) => a.key;
        this.localeService.use('pt-br');
        this.bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' }, { adaptivePosition: true }, { showWeekNumbers: false });
        this.pnotifyService.getPNotify();
    }
    ngOnInit() {
        this.setFormFilter();
        this.registrarAcesso();
        this.getFiliais();
        //this.getFiltros();
        this.getSituacoes();
        this.titleService.setTitle('Control de entrega');
        this.getVendedores();
        this.onActivatedRoute();
        this.setBreadCrumb();
        this.getTipoOperacao();
    }
    registrarAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
    }
    setBreadCrumb() {
        var _a;
        const submoduloId = (_a = this.activatedRoute.snapshot.params) === null || _a === void 0 ? void 0 : _a.idSubModulo;
        this.breadCrumbTree = [
            {
                descricao: 'Logistica',
            },
            {
                descricao: 'GESTIÓN DE ENTREGAS',
                routerLink: `/logistica/entrega/${submoduloId}`,
            },
            {
                descricao: 'Control de entrega',
            },
        ];
    }
    getFiltros() {
        /* this.service
          .getFiltros()
          .pipe(
            finalize(() => {
              this.loaderFullScreen = false;
            })
          )
          .subscribe(
            (response: any) => {
              if (response[0].responseCode === 200) {
                this.vendedores = response[0].result;
    
                this.vendedores.unshift({
                  id: 0,
                  nome: 'EXIBIR TODOS',
                });
              }
    
              this.onActivatedRoute();
            },
            (error: any) => {
              this.pnotifyService.error();
              this.location.back();
            }
          ); */
    }
    getVendedores() {
        this.service.getVendedores().subscribe((response) => {
            if (response.status !== 200) {
                return;
            }
            this.vendedores = response.body['data'];
        });
    }
    getFiliais() {
        this.loadingFiliais = true;
        this.filiaisService.getFiliais({ status: '1' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.loadingFiliais = false;
        }))
            .subscribe({
            next: response => {
                this.filiais = response.body['data'];
            },
            error: () => {
                this.pnotify.error();
            }
        });
    }
    onActivatedRoute() {
        this.activatedRoute.queryParams.subscribe((response) => {
            var _a;
            let _response = this.routerService.getBase64UrlParams(response);
            if (Object.keys(_response).length == 0) {
                this.loaderNavbar = false;
                return;
            }
            _response['TP_OPER'] = (_response === null || _response === void 0 ? void 0 : _response.TP_OPER) ? (_a = _response === null || _response === void 0 ? void 0 : _response.TP_OPER) === null || _a === void 0 ? void 0 : _a.split(',') : [];
            this.form.patchValue(_response);
            this.getPedidos(this.getParams());
        });
    }
    getParams() {
        let _params = {};
        let _obj = this.form.value;
        for (let prop in _obj) {
            if (_obj[prop]) {
                if (_obj[prop] instanceof Date)
                    _params[prop] = this.dateService.convertToUrlDate(_obj[prop]);
                else if (Array.isArray(_obj[prop]))
                    _params[prop] = _obj[prop].toString();
                else
                    _params[prop] = _obj[prop];
            }
        }
        /* const vendedorSelecionado = this.vendedores.filter((vendedor) => vendedor?.id == _params["CD_VEND"] )
    
        _params['NM_VEND'] = '';
    
        if(vendedorSelecionado.length == 1){
          _params['NM_VEND'] = vendedorSelecionado[0]['nome'];
        } */
        return _params;
    }
    setFormFilter() {
        this.form = this.formBuilder.group({
            DT_INIC: [this.dateService.getFirstDayMonth(), [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            DT_FINA: [this.dateService.getLastDayMonth(), [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            NM_CLIE: [null],
            NOTA_FISC: [null],
            CD_PEDI: [null],
            SG_PEDI: [null],
            CD_ROMA: [null],
            CD_VEND: [null],
            NM_VEND: [null],
            TP_OPER: [['DEMEMBRAMENTO', 'FACTURA']],
            DS_CLIE: [null],
            CD_FILI: [null],
            ENTR_SG_STAT: [null],
            TT_REGI_PAGI: [300],
            ORDE_BY: ['dataPrev'],
            ORDE_TYPE: ['DESC'],
            PAGI: [1],
            TIME: new Date().getDate(),
        });
        this.getMatriculaVendedorLogado();
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
        this.form.get('ORDE_BY').setValue(this.orderBy);
        this.form.get('ORDE_TYPE').setValue(this.orderType);
        this.onFilter();
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
    getPedidos(params) {
        var _a;
        (_a = this.$serviceSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        this.loaderNavbar = true;
        this.pedidosLoaded = false;
        this.$serviceSubscription = this.service
            .getLista(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.loaderNavbar = false;
            this.pedidosLoaded = true;
        }))
            .subscribe((response) => {
            if (response.status !== 200) {
                this.pedidos = [];
                this.pedidosEmpty = true;
                return;
            }
            this.pedidos = response.body['data'];
            this.totalItems = response.body['total'];
            this.pedidosEmpty = false;
        }, (error) => {
            var _a;
            this.pedidos = [];
            this.pedidosEmpty = true;
            const message = (_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.message;
            message
                ? this.pnotifyService.error(message)
                : this.pnotifyService.error();
        });
    }
    getDetalhesEntrega(params, template) {
        this.loaderNavbar = true;
        this.imageLoading = true;
        this.service
            .getDetalhesPedido(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.loaderNavbar = false;
        }))
            .subscribe((response) => {
            if (response.status !== 200) {
                return;
            }
            this.entrega = response.body['data'];
            if (!this.entrega['ENTR_COMP_FOTO']) {
                setTimeout(() => {
                    this.imageLoading = false;
                }, 200);
            }
            this.modalRef = this.modalService.show(template, {
                animated: false,
                ignoreBackdropClick: true,
                class: 'modal-xxl',
            });
        }, (error) => {
            var _a;
            const message = (_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.message;
            message
                ? this.pnotifyService.error(message)
                : this.pnotifyService.error();
        });
    }
    getDetalhesRomaneio(params) {
        this.detalhesRomaneioLoading = true;
        this.service
            .getDetalhesRomaneio(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.detalhesRomaneioLoading = false;
        }))
            .subscribe((response) => {
            if (response.status !== 200) {
                this.detalhesRomaneioEmpty = true;
                return;
            }
            this.detalhesRomaneioEmpty = false;
            this.detalhesRomaneio = response.body['data'];
        }, (error) => {
            var _a;
            this.detalhesRomaneioEmpty = false;
            const message = (_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.message;
            message
                ? this.pnotifyService.error(message)
                : this.pnotifyService.error();
        });
    }
    onFilter() {
        this.form.get('TIME').setValue(new Date().getTime());
        this.form.get('PAGI').setValue(1);
        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams(this.getParams()),
        });
    }
    viewDetails(item, template) {
        this.pedido = item;
        const params = {
            CD_ROMA: item === null || item === void 0 ? void 0 : item.CD_ROMA,
            CD_PEDI: item === null || item === void 0 ? void 0 : item.CD_PEDI,
            CD_FILI: item === null || item === void 0 ? void 0 : item.CD_FILI,
            ID_LOGI_FUSI_PEDI: item === null || item === void 0 ? void 0 : item.ID_LOGI_FUSI_PEDI,
        };
        this.getDetalhesEntrega(params, template);
        this.getDetalhesRomaneio(params);
    }
    classStatusBorder(item) {
        if ((item === null || item === void 0 ? void 0 : item.ENTR_SG_STAT) == 'ENTREGA_REALIZADA') {
            return 'border-success';
        }
        return 'border-danger';
    }
    getSelectedStyle(item) {
        var _a;
        if (((_a = this.pedido) === null || _a === void 0 ? void 0 : _a.CD_PEDI) == (item === null || item === void 0 ? void 0 : item.CD_PEDI)) {
            return { 'font-weight': 600, color: 'blue' };
        }
        return {};
    }
    onResetForm() {
        this.form.reset();
    }
    /* Paginação */
    onPageChanged(event) {
        this.form.get('TIME').setValue(new Date().getTime());
        this.form.get('PAGI').setValue(event.page);
        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams(this.getParams()),
        });
    }
    /* Paginação */
    getSituacoes() {
        this.service.getSituacoes().subscribe((response) => {
            if (response.status === 200) {
                this.situacoes = response.body['data'];
            }
            else {
                this.pnotifyService.notice('No se encontró ninguna situación.');
            }
        }, (error) => {
            this.pnotifyService.error('Error al cargar situaciones.');
        });
    }
    getMatriculaVendedorLogado() {
        /* const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.form.get('CD_VEND').setValue(currentUser?.info?.idVendedor); */
    }
    onImageLoad() {
        setTimeout(() => {
            this.imageLoading = false;
        }, 200);
    }
    getTipoOperacao(params) {
        this.desmembramentoService
            .getTipoOperacao(params)
            .subscribe((response) => {
            if (response.status !== 200) {
                return;
            }
            this.tipoOperacao = response.body['data'];
        }, (error) => {
        });
    }
    removerDataConsulta(item) {
        const params = { 'idEvento': item === null || item === void 0 ? void 0 : item.ID_EVEN };
        item.loading = true;
        this.service
            .pacthEvento(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            item.loading = false;
        }))
            .subscribe({
            next: (response) => {
                if (response.status != 200) {
                    this.pnotify.error();
                    return;
                }
                this.pnotify.success();
            },
            error: (error) => {
                var _a, _b;
                const message = (_b = (_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : '';
                this.pnotify.error(message);
            }
        });
    }
};
ComercialControleEntregasListaComponent.ctorParameters = () => [
    { type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsLocaleService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__["PNotifyService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_14__["AtividadesService"] },
    { type: _controle_entregas_service__WEBPACK_IMPORTED_MODULE_13__["ComercialControleEntregasService"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_15__["DateService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_16__["TitleService"] },
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["BsModalService"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_17__["RouterService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__["PNotifyService"] },
    { type: _cadastros_filiais_services_filiais_service__WEBPACK_IMPORTED_MODULE_19__["LogisticaFiliaisService"] },
    { type: _desmembramento_services_desmembramento_service__WEBPACK_IMPORTED_MODULE_18__["LogisticaEntregaDesmembramentoService"] }
];
ComercialControleEntregasListaComponent.propDecorators = {
    scrollToFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['scrollToFilter', {},] }]
};
ComercialControleEntregasListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-controle-entregas-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsLocaleService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__["PNotifyService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_14__["AtividadesService"],
        _controle_entregas_service__WEBPACK_IMPORTED_MODULE_13__["ComercialControleEntregasService"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_15__["DateService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_16__["TitleService"],
        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["BsModalService"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_17__["RouterService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__["PNotifyService"],
        _cadastros_filiais_services_filiais_service__WEBPACK_IMPORTED_MODULE_19__["LogisticaFiliaisService"],
        _desmembramento_services_desmembramento_service__WEBPACK_IMPORTED_MODULE_18__["LogisticaEntregaDesmembramentoService"]])
], ComercialControleEntregasListaComponent);



/***/ }),

/***/ "QxYm":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/logistica/entrega/controle-entregas/controle-entregas.service.ts ***!
  \******************************************************************************************/
/*! exports provided: ComercialControleEntregasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialControleEntregasService", function() { return ComercialControleEntregasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/comercial/comercial.service */ "VgqD");
/* harmony import */ var src_app_modules_comercial_services_vendedores_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/comercial/services/vendedores.service */ "4xRd");
/* harmony import */ var src_app_modules_comercial_tid_software_tid_software_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modules/comercial/tid-software/tid-software.service */ "zN97");







// Services
/* import { ComercialService } from '../comercial.service';
import { ComercialVendedoresService } from '../services/vendedores.service';
import { ComercialTidSoftwareService } from '../tid-software/tid-software.service'; */
let ComercialControleEntregasService = class ComercialControleEntregasService {
    constructor(http, comercialService, vendedoresService, tidSoftwareService) {
        this.http = http;
        this.comercialService = comercialService;
        this.vendedoresService = vendedoresService;
        this.tidSoftwareService = tidSoftwareService;
        this.API = `https://crm360.monterrey.com.bo/api`;
    }
    getFiltros() {
        /* const vendedores = this.vendedoresService.getVendedores(); */
        /* const empresas = this.tidSoftwareService.getEmpresas('entregas'); */
        /* return forkJoin([vendedores, empresas]).pipe(take(1)); */
    }
    getLista(params) {
        return this.http
            .get(`${this.API}/comercial/controle-entregas/lista`, { params: params, observe: "response" })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
    }
    getVendedores(params) {
        return this.http
            .get(`${this.API}/logistica/controle-entregas/vendedores`, { params: params, observe: "response" })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
    }
    getDetalhesPedido(params) {
        return this.http
            .get(`${this.API}/comercial/controle-entregas/detalhes-pedido`, {
            params: params,
            observe: "response"
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
    }
    getDetalhesRomaneio(params) {
        return this.http
            .get(`${this.API}/comercial/controle-entregas/detalhes-romaneio`, {
            params: params,
            observe: "response"
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
    }
    getSituacoes() {
        return this.http.get(`${this.API}/comercial/controle-entregas/situacoes`, {
            observe: "response"
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
    }
    pacthEvento(params) {
        return this.http.patch(`${this.API}/logistica/controle-entregas/eventos`, params, {
            observe: 'response'
        });
    }
};
ComercialControleEntregasService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_4__["ComercialService"] },
    { type: src_app_modules_comercial_services_vendedores_service__WEBPACK_IMPORTED_MODULE_5__["ComercialVendedoresService"] },
    { type: src_app_modules_comercial_tid_software_tid_software_service__WEBPACK_IMPORTED_MODULE_6__["ComercialTidSoftwareService"] }
];
ComercialControleEntregasService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
        src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_4__["ComercialService"],
        src_app_modules_comercial_services_vendedores_service__WEBPACK_IMPORTED_MODULE_5__["ComercialVendedoresService"],
        src_app_modules_comercial_tid_software_tid_software_service__WEBPACK_IMPORTED_MODULE_6__["ComercialTidSoftwareService"]])
], ComercialControleEntregasService);



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

/***/ "S5sn":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/comercial/controle-entregas/controle-entregas.service.ts ***!
  \**********************************************************************************/
/*! exports provided: ComercialControleEntregasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialControleEntregasService", function() { return ComercialControleEntregasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _comercial_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../comercial.service */ "VgqD");
/* harmony import */ var _services_vendedores_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/vendedores.service */ "4xRd");
/* harmony import */ var _tid_software_tid_software_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../tid-software/tid-software.service */ "zN97");





// Services



let ComercialControleEntregasService = class ComercialControleEntregasService {
    constructor(http, comercialService, vendedoresService, tidSoftwareService) {
        this.http = http;
        this.comercialService = comercialService;
        this.vendedoresService = vendedoresService;
        this.tidSoftwareService = tidSoftwareService;
        this.API = `https://crm360.monterrey.com.bo/api/comercial/controle-entregas`;
    }
    getFiltros() {
        const vendedores = this.vendedoresService.getVendedores();
        const empresas = this.tidSoftwareService.getEmpresas('entregas');
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])([vendedores, empresas]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
    }
    getLista(params) {
        return this.http
            .get(`${this.API}/lista`, { params: params, observe: "response" })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
    }
    getDetalhesPedido(params) {
        return this.http
            .get(`${this.API}/detalhes-pedido`, {
            params: params,
            observe: "response"
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
    }
    getDetalhesRomaneio(params) {
        return this.http
            .get(`${this.API}/detalhes-romaneio`, {
            params: params,
            observe: "response"
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
    }
    getSituacoes() {
        return this.http.get(`${this.API}/situacoes`, {
            observe: "response"
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
    }
};
ComercialControleEntregasService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _comercial_service__WEBPACK_IMPORTED_MODULE_5__["ComercialService"] },
    { type: _services_vendedores_service__WEBPACK_IMPORTED_MODULE_6__["ComercialVendedoresService"] },
    { type: _tid_software_tid_software_service__WEBPACK_IMPORTED_MODULE_7__["ComercialTidSoftwareService"] }
];
ComercialControleEntregasService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
        _comercial_service__WEBPACK_IMPORTED_MODULE_5__["ComercialService"],
        _services_vendedores_service__WEBPACK_IMPORTED_MODULE_6__["ComercialVendedoresService"],
        _tid_software_tid_software_service__WEBPACK_IMPORTED_MODULE_7__["ComercialTidSoftwareService"]])
], ComercialControleEntregasService);



/***/ }),

/***/ "UvWK":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/entrega/controle-entregas/lista/lista.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\n<app-header appTitle=\"Controle de entregas\">\n  <button\n    type=\"button\"\n    (click)=\"onResetForm()\">\n    Limpiar\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"onFilter()\">\n    Filtrar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\n  <advanced-filter #scrollToFilter>\n    <form [formGroup]=\"form\" autocomplete=\"off\">\n      <div class=\"form-row\">\n        <div class=\"form-group col-3\">\n          <label for=\"dataInicial\">Comienzo</label>\n          <input\n            class=\"form-control\"\n            id=\"dataInicial\"\n            type=\"text\"\n            bsDatepicker\n            [bsConfig]=\"bsConfig\"\n            formControlName=\"DT_INIC\"\n            [ngClass]=\"onFieldError('DT_INIC') + ' ' + onFieldRequired('DT_INIC')\">\n        </div>\n        <div class=\"form-group col-3\">\n          <label for=\"dataFinal\">Final</label>\n          <input\n            class=\"form-control\"\n            id=\"dataFinal\"\n            type=\"text\"\n            bsDatepicker\n            [bsConfig]=\"bsConfig\"\n            formControlName=\"DT_FINA\"\n            [ngClass]=\"onFieldError('DT_FINA') + ' ' + onFieldRequired('DT_FINA')\">\n        </div>\n        <div class=\"form-group col-3\">\n          <label for=\"cliente\">Cliente</label>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"cliente\"\n            formControlName=\"DS_CLIE\"\n            (keydown.enter)=\"onFilter()\">\n        </div>\n        <!-- <div class=\"form-group col-3\">\n          <label for=\"operacao\">Operación</label>\n          <select\n            name=\"operacao\"\n            id=\"operacao\"\n            class=\"form-control\"\n            formControlName=\"TP_OPER\"\n          >\n            <option value=\"ENTREGA_CLIENTE\">Entrega Cliente</option>\n            <option value=\"TRANSFERENCIA\">Transferência</option>\n          </select>\n        </div> -->\n        <div class=\"form-group col-3\">\n          <label for=\"notaFiscal\">Factura</label>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"notaFiscal\"\n            formControlName=\"NOTA_FISC\"\n            (keydown.enter)=\"onFilter()\">\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"form-group col-3\">\n          <label for=\"pedido\">Orden de venta</label>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"pedido\"\n            formControlName=\"CD_PEDI\"\n            (keydown.enter)=\"onFilter()\">\n        </div>\n        <!-- <div class=\"form-group col-3\">\n          <label for=\"sigla\">Sigla</label>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"sigla\"\n            formControlName=\"SG_PEDI\"\n            (keydown.enter)=\"onFilter()\">\n        </div> -->\n        <div class=\"form-group col-3\">\n          <label for=\"romaneio\">Ruta</label>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"romaneio\"\n            formControlName=\"CD_ROMA\"\n            (keydown.enter)=\"onFilter()\">\n        </div>\n        <div class=\"form-group col-lg-3 mb-2\">\n          <label for=\"situacao\">Situación\n            <i class=\"far fa-question-circle ml-1\" [tooltip]=\"tooltipAutoScrollTemplate\"></i>\n          </label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"true\"\n            [items]=\"situacoes\"\n            formControlName=\"ENTR_SG_STAT\"\n            [virtualScroll]=\"true\"\n            labelForId=\"situacao\"\n            bindLabel=\"ENTR_DS_STAT\"\n            bindValue=\"ENTR_SG_STAT\"\n            >\n          </ng-select>\n          <ng-template #tooltipAutoScrollTemplate>\n            <p class=\"mb-0\"><b>ESPERANDO COMPOSICIÓN: Esperando composición de carga para la región del cliente.</b></p>\n            <p class=\"text-nowrap mb-0\"><br><br></p>\n            <p class=\"mb-0\"><b>VEHÍCULO EN ESPERA: Carga formada, pendiente de definición del vehículo.</b></p>\n            <p class=\"text-nowrap mb-0\"><br><br></p>\n            <p class=\"mb-0\"><b>ESPERANDO SALIDA: Vehículo definido, esperando carga y salida para entrega.</b></p>\n            <p class=\"text-nowrap mb-0\"><br><br></p>\n            <p class=\"mb-0\"><b>A LA IZQUIERDA PARA ENTREGA: Se inició el viaje.</b></p>\n            <p class=\"text-nowrap mb-0\"><br><br></p>\n            <p class=\"mb-0\"><b>RETIRO: Retiros de Hecho.</b></p>\n            <p class=\"text-nowrap mb-0\"><br><br></p>\n            <p class=\"mb-0\"><b>ENTREGA RETARDADA: Vuelva a reprogramación.</b></p>\n            <p class=\"text-nowrap mb-0\"><br><br></p>\n            <p class=\"mb-0\"><b>ENTREGA DEVUELTA: Devolución por cancelación.</b></p>\n            <p class=\"text-nowrap mb-0\"><br><br></p>\n            <p class=\"mb-0\"><b>ENTREGA REALIZADA: Entrega completada.</b></p>\n          </ng-template>\n        </div>\n        <div class=\"form-group col-lg-3 mb-2\">\n          <label for=\"vendedores\">Vendedor</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"true\"\n            [items]=\"vendedores\"\n            formControlName=\"NM_VEND\"\n            [virtualScroll]=\"true\"\n            labelForId=\"vendedores\"\n            bindLabel=\"NM_VEND\"\n            bindValue=\"NM_VEND\"\n            >\n          </ng-select>\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"form-group col-3 mb-2\">\n          <label for=\"empresa\">Empresa</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"true\"\n            [loading]=\"loadingFiliais\"\n            [items]=\"filiais\"\n            formControlName=\"CD_FILI\"\n            [virtualScroll]=\"true\"\n            labelForId=\"empresa\"\n            bindLabel=\"nome\"\n            bindValue=\"idFilial\"\n            >\n          </ng-select>\n        </div>\n        <div class=\"form-group col-3 pl-0\">\n          <label for=\"tipoOperacao\">Tipo de operación</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"true\"\n            [items]=\"tipoOperacao\"\n            [multiple]=\"true\"\n            [virtualScroll]=\"true\"\n            labelForId=\"tipoOperacao\"\n            bindLabel=\"TP_OPER\"\n            bindValue=\"TP_OPER\"\n            id=\"tipoOperacao\"\n            formControlName=\"TP_OPER\"\n            (change)=\"onFilter()\"\n            placeholder=\"SELECCIONE...\"\n          >\n          </ng-select>\n        </div>\n        <div class=\"form-group col-lg-3 mb-2\">\n          <label for=\"registros\">Registros</label>\n          <select\n            class=\"form-control\"\n            id=\"registros\"\n            formControlName=\"TT_REGI_PAGI\"\n            (change)=\"onFilter()\"\n            >\n            <option>25</option>\n            <option>50</option>\n            <option>100</option>\n            <option>200</option>\n            <option>300</option>\n          </select>\n        </div>\n      </div>\n    </form>\n  </advanced-filter>\n  <div class=\"row\">\n    <div class=\"col-lg-12\" *ngIf=\"!pedidosEmpty\">\n      <ul\n        class=\"d-flex justify-content-between p-0\"\n      >\n        <li\n          *ngFor=\"let column of columns | keyvalue : keepOriginalOrder; let index = index\"\n          style=\"list-style: none;\"\n        >\n          <div class=\"custom-control custom-checkbox\">\n            <input\n              type=\"checkbox\"\n              class=\"custom-control-input\"\n              [id]=\"'column'+index\"\n              [name]=\"'column'+index\"\n              [checked]=\"column.value.active\"\n              [(ngModel)]=\"column.value.active\"\n              >\n            <label\n              class=\"custom-control-label\"\n              [for]=\"'column'+index\"\n            >\n              {{ column.value.name }}\n            </label>\n          </div>\n        </li>\n      </ul>\n      <custom-table [config]=\"tableConfig\">\n        <ng-template #thead let-thead>\n          <tr>\n            <th\n              class=\"text-center text-truncate hover\"\n              width=\"11%\"\n              *ngIf=\"columns.nomeEmpresa.active\"\n            >\n              <thead-sorter\n                value=\"Empresa\"\n                [active]=\"orderBy == 'nomeEmpresa'\"\n                [sort]=\"orderType\"\n                (click)=\"setOrderBy('nomeEmpresa')\">\n              </thead-sorter>\n            </th>\n            <th\n              class=\"text-center text-truncate hover\"\n              width=\"9%\"\n              *ngIf=\"columns.romaneio.active\"\n            >\n              <thead-sorter\n                value=\"Ruta\"\n                [active]=\"orderBy == 'romaneio'\"\n                [sort]=\"orderType\"\n                (click)=\"setOrderBy('romaneio')\">\n              </thead-sorter>\n            </th>\n            <th\n              class=\"text-center text-truncate hover\"\n              width=\"10%\"\n              *ngIf=\"columns.dataPrev.active\"\n            >\n              <thead-sorter\n                value=\"Fecha Entr Estimada\"\n                [active]=\"orderBy == 'dataPrev'\"\n                [sort]=\"orderType\"\n                (click)=\"setOrderBy('dataPrev')\">\n              </thead-sorter>\n            </th>\n            <th\n              class=\"text-center text-truncate hover\"\n              width=\"10%\"\n              *ngIf=\"columns.dataEntrega.active\"\n            >\n              <thead-sorter\n                value=\"Fecha de Entrega\"\n                [active]=\"orderBy == 'dataEntrega'\"\n                [sort]=\"orderType\"\n                (click)=\"setOrderBy('dataEntrega')\">\n              </thead-sorter>\n            </th>\n            <th\n              class=\"text-truncate hover\"\n              width=\"28%\"\n              *ngIf=\"columns.nomeCliente.active\"\n            >\n              <thead-sorter\n                value=\"Cliente\"\n                [active]=\"orderBy == 'nomeCliente'\"\n                [sort]=\"orderType\"\n                (click)=\"setOrderBy('nomeCliente')\">\n              </thead-sorter>\n            </th>\n            <th\n              class=\"text-center text-truncate\"\n              width=\"5%\"\n              *ngIf=\"columns.sequencia.active\"\n            >Seq.</th>\n            <th\n              class=\"text-center text-truncate hover\"\n              width=\"9%\"\n              *ngIf=\"columns.pedido.active\"\n            >\n              <thead-sorter\n                value=\"Orden de vienda\"\n                [active]=\"orderBy == 'pedido'\"\n                [sort]=\"orderType\"\n                (click)=\"setOrderBy('pedido')\">\n              </thead-sorter>\n            </th>\n            <th\n              class=\"text-center text-truncate hover\"\n              width=\"9%\"\n              *ngIf=\"columns.notaFiscal.active\"\n            >\n              <thead-sorter\n                value=\"Factura\"\n                [active]=\"orderBy == 'notaFiscal'\"\n                [sort]=\"orderType\"\n                (click)=\"setOrderBy('notaFiscal')\">\n              </thead-sorter>\n            </th>\n            <th\n              class=\"text-center text-truncate hover\"\n              width=\"9%\"\n              *ngIf=\"columns.dataEmissao.active\"\n            >\n              <thead-sorter\n                value=\"Fecha de Emisión\"\n                [active]=\"orderBy == 'dataEmissao'\"\n                [sort]=\"orderType\"\n                (click)=\"setOrderBy('dataEmissao')\">\n              </thead-sorter>\n            </th>\n            <th\n              class=\"text-center text-truncate\"\n              width=\"20%\"\n              *ngIf=\"columns.nomeSituacao.active\"\n            >\n              Situación\n            </th>\n            <th width=\"3%\"></th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr *ngFor=\"let item of pedidos\">\n            <td\n              class=\"text-center text-truncate hover\"\n              *ngIf=\"columns.nomeEmpresa.active\"\n              (click)=\"viewDetails(item, modalDetalhes)\"\n            >\n              ({{ item.CD_FILI }})&nbsp;{{ item.NM_FILI }}\n            </td>\n            <td\n              class=\"text-center text-truncate hover\"\n              *ngIf=\"columns.romaneio.active\"\n              (click)=\"viewDetails(item, modalDetalhes)\"\n            >\n              {{ item.CD_ROMA }}\n            </td>\n            <td\n              class=\"text-center text-truncate hover\"\n              *ngIf=\"columns.dataPrev.active\"\n              (click)=\"viewDetails(item, modalDetalhes)\"\n            >\n              {{ item.ROMA_DT_PREV_SAID | date: 'dd/MM/yyyy' }}\n            </td>\n            <td\n              class=\"text-center text-truncate hover\"\n              *ngIf=\"columns.dataEntrega.active\"\n              (click)=\"viewDetails(item, modalDetalhes)\"\n            >\n              {{ item.ENTR_DT_ENTR | date: 'dd/MM/yyyy' }}\n            </td>\n            <td\n              class=\"text-truncate hover\"\n              *ngIf=\"columns.nomeCliente.active\"\n              (click)=\"viewDetails(item, modalDetalhes)\"\n            >\n              ({{ item?.CD_CLIE_ORIG }}) {{ item?.NM_CLIE }}\n            </td>\n            <td\n              class=\"text-center text-truncate hover\"\n              *ngIf=\"columns.sequencia.active\"\n              (click)=\"viewDetails(item, modalDetalhes)\"\n            >\n              {{ item?.SEQU_ENTR }}\n            </td>\n            <td\n              class=\"text-center text-truncate hover\"\n              *ngIf=\"columns.pedido.active\"\n              (click)=\"viewDetails(item, modalDetalhes)\"\n            >\n              {{ item.CD_PEDI }}\n            </td>\n            <td\n              class=\"text-center text-truncate hover\"\n              *ngIf=\"columns.notaFiscal.active\"\n              (click)=\"viewDetails(item, modalDetalhes)\"\n            >\n              {{ item.NOTA_FISC }}\n            </td>\n            <td\n              class=\"text-center text-truncate hover\"\n              *ngIf=\"columns.dataEmissao.active\"\n              (click)=\"viewDetails(item, modalDetalhes)\"\n            >\n              {{ item.DT_NOTA_FISC | date: 'dd/MM/yyyy' }}\n            </td>\n            <td\n              class=\"text-center text-truncate hover\"\n              *ngIf=\"columns.nomeSituacao.active\"\n              (click)=\"viewDetails(item, modalDetalhes)\"\n            >\n              {{ item.ENTR_DS_STAT }}\n            </td>\n            <td>\n              <span\n                [tooltip]=\"!item.ENTR_DT_ENTR ? 'No entregado' : (\n                  !item.ENTR_DT_CONS ? 'No integrado' : ''\n                )\"\n                container=\"body\"\n                placement=\"left\"\n              >\n                <button\n                  class=\"btn-icon-sm\"\n                  *ngIf=\"!item.loading\"\n                  (click)=\"removerDataConsulta(item)\"\n                  [disabled]=\"!item.ENTR_DT_ENTR || !item.ENTR_DT_CONS\"\n                >\n                  <i\n                    class=\"fas fa-paper-plane\"\n                    [ngClass]=\"{\n                      'text-seconday': !item.ENTR_DT_ENTR,\n                      'text-warning': !item.ENTR_DT_CONS && item.ENTR_DT_ENTR,\n                      'text-success': item.ENTR_DT_CONS && item.ENTR_DT_ENTR\n                    }\"\n                  ></i>\n                </button>\n                <div\n                  class=\"spinner-border spinner-border-sm\"\n                  role=\"status\"\n                  *ngIf=\"item.loading\"\n                >\n                  <span class=\"sr-only\">Loading...</span>\n                </div>\n              </span>\n            </td>\n          </tr>\n        </ng-template>\n      </custom-table>\n      <div *ngIf=\"!pedidosEmpty\">\n        Demostración {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\n        <pagination\n        [maxSize]=\"10\"\n          [totalItems]=\"totalItems\"\n          (pageChanged)=\"onPageChanged($event)\"\n          [(itemsPerPage)]=\"itemsPerPage\"\n          [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPage\"\n          previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\"\n          lastText=\"&raquo;\">\n        </pagination>\n      </div>\n    </div>\n    <empty-result message=\"No se encontró información\" class=\"mx-auto mt-5\" *ngIf=\"pedidosLoaded && pedidosEmpty\"></empty-result>\n  </div>\n</app-body>\n<ng-template #modalDetalhes>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Detalles</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <tabset>\n      <tab heading=\"Entrega\" class=\"border-right border-left border-bottom\">\n        <div class=\"p-3\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-lg-4\">\n              <label>Cliente</label>\n              <div>({{ pedido?.CD_CLIE }}) {{ pedido?.NM_FANT }}</div>\n            </div>\n            <div class=\"form-group col-lg-3\">\n              <label>Conductor</label>\n              <div *ngIf=\"pedido?.NM_MOTO\">{{ pedido?.NM_MOTO }}</div>\n              <div *ngIf=\"!pedido?.NM_MOTO\">NO INFORMADO</div>\n            </div>\n            <div class=\"form-group col-lg-3\">\n              <label>Placa de matrícula del vehículo</label>\n              <div *ngIf=\"pedido?.PLAC\">{{ pedido?.PLAC }}</div>\n              <div *ngIf=\"!pedido?.PLAC\">NO INFORMADO</div>\n            </div>\n          </div>\n          <div id=\"scrollDetalhes\" class=\"mt-2 d-flex\">\n            <div class=\"col-4\">\n              <div *ngFor=\"let detalhe of entrega; let last = last; let first = first\" [ngClass]=\"fist ? 'mt-4' : ''\">\n                <div class=\"d-flex w-100\" [tooltip]=\"detalhe?.desricao\" placement=\"left\">\n                  <div class=\"rounded-circle text-white icon-40\" [ngClass]=\"detalhe?.check == 0 ? 'bg-secondary' : 'bg-primary'\">\n                    <i [class]=\"detalhe?.icone\"></i>\n                  </div>\n                  <strong class=\"my-auto ml-3 text-truncate\" [ngClass]=\"detalhe?.check == 1 ? 'text-primary' : ''\" style=\"width: calc(100% - 40px)\">\n                    {{ detalhe?.descricao }}\n                  </strong>\n                </div>\n                <div class=\"my-2\" *ngIf=\"!last\">\n                  <div class=\"ml-1\">\n                    <div class=\"border-left border-secondary ml-3 p-2\">\n                      <div *ngIf=\"detalhe?.check === 1\"></div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-8 p-0 form-group\">\n              <label>Fotografía</label>\n              <div *ngIf=\"imageLoading\">Cargando...</div>\n              <div *ngIf=\"pedido?.ENTR_COMP_FOTO\">\n                <img [hidden]=\"imageLoading\" [src]=\"pedido?.ENTR_COMP_FOTO\" class=\"border rounded shadow-sm w-100\" (load)=\"onImageLoad()\">\n              </div>\n              <empty-result message=\"No se encontró ninguna imagen\" *ngIf=\"!pedido?.ENTR_COMP_FOTO && !imageLoading\"></empty-result>\n            </div>\n          </div>\n        </div>\n      </tab>\n      <tab heading=\"Ruta\" class=\"border-right border-left border-bottom\">\n        <div class=\"px-3 pt-3\" *ngIf=\"!detalhesRomaneioLoading && !detalhesRomaneioEmpty\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-lg-3\">\n              <label>Ruta</label>\n              <div>{{ pedido?.CD_ROMA }}</div>\n            </div>\n            <!-- <div class=\"form-group col-lg-3\">\n              <label>Região da entrega</label>\n              <div>{{ pedido }}</div>\n            </div> -->\n          </div>\n          <div class=\"row\">\n            <div class=\"col\">\n              <subtitles\n                [data]=\"subtitles\"\n                [show]=\"!noResult\">\n              </subtitles>\n            </div>\n          </div>\n          <custom-table [config]=\"tableConfig\">\n            <ng-template #thead let-thead>\n              <tr>\n                <th>Cliente</th>\n                <th class=\"text-center\">Seq.</th>\n                <th class=\"text-center\">Factura</th>\n                <th class=\"text-center\">Orden de vienda</th>\n                <th class=\"text-center\">Código</th>\n                <th>Producto</th>\n                <th class=\"text-center\">Peso</th>\n                <th>Dirección</th>\n              </tr>\n            </ng-template>\n            <ng-template #tbody let-tbody>\n              <tr *ngFor=\"let item of detalhesRomaneio\" [ngStyle]=\"getSelectedStyle(item)\">\n                <td\n                  class=\"hover\"\n                  [ngClass]=\"classStatusBorder(item)\">\n                  ({{ item.CD_CLIE }}) {{ item.NM_FANT }}\n                </td>\n                <td class=\"text-center\">{{ item.NR_SQNC }}</td>\n                <td class=\"text-center\">{{ item.NOTA_FISC }}</td>\n                <td class=\"text-center\">{{ item.CD_PEDI }}</td>\n                <td class=\"text-center\">{{ item.CD_PROD }}</td>\n                <td>{{ item.NM_PROD }}</td>\n                <td class=\"text-center\">{{ item.TT_PROD_PESO  | number: '0.3-3' }}</td>\n                <td>{{ item.DS_ENDE }}</td>\n              </tr>\n            </ng-template>\n          </custom-table>\n        </div>\n        <empty-result message=\"No se encontró información\" *ngIf=\"detalhesRomaneioEmpty\"></empty-result>\n        <div class=\"spinner-border text-primary\" role=\"status\" *ngIf=\"!detalhesRomaneioLoading && detalhesRomaneioEmpty\">\n          <span class=\"sr-only\">Loading...</span>\n        </div>\n      </tab>\n    </tabset>\n  </div>\n</ng-template>\n");

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

/***/ "aSw5":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/logistica/entrega/controle-entregas/lista/lista.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep comercial-controle-entregas #scrollDetalhes {\n  height: 340px;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvZW50cmVnYS9jb250cm9sZS1lbnRyZWdhcy9saXN0YS9saXN0YS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FBRE4iLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2xvZ2lzdGljYS9lbnRyZWdhL2NvbnRyb2xlLWVudHJlZ2FzL2xpc3RhL2xpc3RhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIHtcbiAgY29tZXJjaWFsLWNvbnRyb2xlLWVudHJlZ2FzIHtcbiAgICAjc2Nyb2xsRGV0YWxoZXMge1xuICAgICAgaGVpZ2h0OiAzNDBweDtcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIH1cbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "bH31":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/logistica/entrega/controle-entregas/controle-entregas.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: ComercialControleEntregasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialControleEntregasModule", function() { return ComercialControleEntregasModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "978R");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "6No5");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "2ZVE");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-currency-mask */ "D5nU");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _controle_entregas_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./controle-entregas-routing.module */ "sSNH");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var src_app_shared_directives_directives_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/directives/directives.module */ "yGOH");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./lista/lista.component */ "Ky88");




// ngx-bootstrap





// ng-select

// ng2-currency-mask

// PNotify

// Modules




// Components

let ComercialControleEntregasModule = class ComercialControleEntregasModule {
};
ComercialControleEntregasModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_lista_lista_component__WEBPACK_IMPORTED_MODULE_16__["ComercialControleEntregasListaComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_6__["PaginationModule"].forRoot(),
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__["TabsModule"].forRoot(),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsDatepickerModule"].forRoot(),
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["NgSelectModule"],
            ng2_currency_mask__WEBPACK_IMPORTED_MODULE_10__["CurrencyMaskModule"],
            _controle_entregas_routing_module__WEBPACK_IMPORTED_MODULE_12__["ComercialControleEntregasRoutingModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_14__["TemplatesModule"],
            src_app_shared_directives_directives_module__WEBPACK_IMPORTED_MODULE_15__["DirectivesModule"]
        ],
        providers: [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"]]
    })
], ComercialControleEntregasModule);



/***/ }),

/***/ "oDRf":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/controle-entregas/lista/lista.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\n<app-header appTitle=\"Controle de entregas\">\n  <button\n    type=\"button\"\n    (click)=\"onResetForm()\">\n    Limpar\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"onFilter()\">\n    Filtrar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\n  <advanced-filter #scrollToFilter>\n    <form [formGroup]=\"form\" autocomplete=\"off\">\n      <div class=\"form-row\">\n        <div class=\"form-group col-3\">\n          <label for=\"dataInicial\">Data inicial</label>\n          <input\n            class=\"form-control\"\n            id=\"dataInicial\"\n            type=\"text\"\n            bsDatepicker\n            [bsConfig]=\"bsConfig\"\n            formControlName=\"DT_INIC\"\n            [ngClass]=\"onFieldError('DT_INIC') + ' ' + onFieldRequired('DT_INIC')\">\n        </div>\n        <div class=\"form-group col-3\">\n          <label for=\"dataFinal\">Data final</label>\n          <input\n            class=\"form-control\"\n            id=\"dataFinal\"\n            type=\"text\"\n            bsDatepicker\n            [bsConfig]=\"bsConfig\"\n            formControlName=\"DT_FINA\"\n            [ngClass]=\"onFieldError('DT_FINA') + ' ' + onFieldRequired('DT_FINA')\">\n        </div>\n        <div class=\"form-group col\">\n          <label for=\"cliente\">Cliente</label>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"cliente\"\n            formControlName=\"DS_CLIE\"\n            (keydown.enter)=\"onFilter()\">\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"form-group col-3\">\n          <label for=\"notaFiscal\">Nota fiscal</label>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"notaFiscal\"\n            formControlName=\"NOTA_FISC\"\n            (keydown.enter)=\"onFilter()\">\n        </div>\n        <div class=\"form-group col-3\">\n          <label for=\"pedido\">Pedido</label>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"pedido\"\n            formControlName=\"CD_PEDI\"\n            (keydown.enter)=\"onFilter()\">\n        </div>\n        <div class=\"form-group col-3\">\n          <label for=\"sigla\">Sigla</label>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"sigla\"\n            formControlName=\"SG_PEDI\"\n            (keydown.enter)=\"onFilter()\">\n        </div>\n        <div class=\"form-group col-3\">\n          <label for=\"romaneio\">Romaneio</label>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"romaneio\"\n            formControlName=\"CD_ROMA\"\n            (keydown.enter)=\"onFilter()\">\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"form-group col-lg-3 mb-2\">\n          <label for=\"situacao\">Situação\n            <i class=\"far fa-question-circle ml-1\" [tooltip]=\"tooltipAutoScrollTemplate\"></i>\n          </label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"true\"\n            [items]=\"situacoes\"\n            formControlName=\"ENTR_SG_STAT\"\n            [virtualScroll]=\"true\"\n            labelForId=\"situacao\"\n            bindLabel=\"ENTR_DS_STAT\"\n            bindValue=\"ENTR_SG_STAT\"\n            (change)=\"onFilter()\"\n            >\n          </ng-select>\n          <ng-template #tooltipAutoScrollTemplate>\n            <p class=\"mb-0\"><b>AGUARDANDO COMPOSIÇÃO: Aguardando composição de carga para região do cliente.</b></p>\n            <p class=\"text-nowrap mb-0\"><br><br></p>\n            <p class=\"mb-0\"><b>AGUARDANDO VEíCULO: Carga formada, aguardando definição do veículo.</b></p>\n            <p class=\"text-nowrap mb-0\"><br><br></p>\n            <p class=\"mb-0\"><b>AGUARDANDO SAÍDA: Veículo definido, aguardando carregamento e saída para entrega.</b></p>\n            <p class=\"text-nowrap mb-0\"><br><br></p>\n            <p class=\"mb-0\"><b>SAIU PARA ENTREGA: Viagem Iniciada.</b></p>\n            <p class=\"text-nowrap mb-0\"><br><br></p>\n            <p class=\"mb-0\"><b>RETIRADA: Retira Realizada.</b></p>\n            <p class=\"text-nowrap mb-0\"><br><br></p>\n            <p class=\"mb-0\"><b>ENTREGA ADIADA: Retorno para reprogramação.</b></p>\n            <p class=\"text-nowrap mb-0\"><br><br></p>\n            <p class=\"mb-0\"><b>ENTREGA DEVOLVIDA: Retorno para cancelamento.</b></p>\n            <p class=\"text-nowrap mb-0\"><br><br></p>\n            <p class=\"mb-0\"><b>ENTREGA REALIZADA: Entrega realizada.</b></p>\n          </ng-template>\n        </div>\n        <div class=\"form-group col-lg-3 mb-2\">\n          <label for=\"vendedores\">Vendedor</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"true\"\n            [items]=\"vendedores\"\n            formControlName=\"CD_VEND\"\n            [virtualScroll]=\"true\"\n            labelForId=\"vendedores\"\n            bindLabel=\"nome\"\n            bindValue=\"id\"\n            (change)=\"onFilter()\"\n            >\n          </ng-select>\n        </div>\n        <div class=\"form-group col mb-2\">\n          <label for=\"empresa\">Empresa</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"true\"\n            [items]=\"filiais\"\n            formControlName=\"CD_FILI\"\n            [virtualScroll]=\"true\"\n            labelForId=\"empresa\"\n            bindLabel=\"NM_FILI\"\n            bindValue=\"CD_FILI\"\n            (change)=\"onFilter()\"\n            >\n          </ng-select>\n        </div>\n        <div class=\"form-group col-lg-2 mb-2\">\n          <label for=\"registros\">Registros</label>\n          <select\n            class=\"form-control\"\n            id=\"registros\"\n            formControlName=\"TT_REGI_PAGI\"\n            (change)=\"onFilter()\"\n            >\n            <option>25</option>\n            <option>50</option>\n            <option>100</option>\n            <option>200</option>\n            <option>300</option>\n          </select>\n        </div>\n      </div>\n    </form>\n  </advanced-filter>\n  <div class=\"row\">\n    <div class=\"col-lg-12\" *ngIf=\"!pedidosEmpty\">\n      <ul\n        class=\"d-flex justify-content-between p-0\"\n      >\n        <li\n          *ngFor=\"let column of columns | keyvalue : keepOriginalOrder; let index = index\"\n          style=\"list-style: none;\"\n        >\n          <div class=\"custom-control custom-checkbox\">\n            <input\n              type=\"checkbox\"\n              class=\"custom-control-input\"\n              [id]=\"'column'+index\"\n              [name]=\"'column'+index\"\n              [checked]=\"column.value.active\"\n              [(ngModel)]=\"column.value.active\"\n              >\n            <label\n              class=\"custom-control-label\"\n              [for]=\"'column'+index\"\n            >\n              {{ column.value.name }}\n            </label>\n          </div>\n        </li>\n      </ul>\n      <custom-table [config]=\"tableConfig\">\n        <ng-template #thead let-thead>\n          <tr>\n            <th\n              class=\"text-center text-truncate hover\"\n              width=\"11%\"\n              *ngIf=\"columns.nomeEmpresa.active\"\n            >\n              <thead-sorter\n                value=\"Empresa\"\n                [active]=\"orderBy == 'nomeEmpresa'\"\n                [sort]=\"orderType\"\n                (click)=\"setOrderBy('nomeEmpresa')\">\n              </thead-sorter>\n            </th>\n            <th\n              class=\"text-center text-truncate hover\"\n              width=\"9%\"\n              *ngIf=\"columns.romaneio.active\"\n            >\n              <thead-sorter\n                value=\"Romaneio\"\n                [active]=\"orderBy == 'romaneio'\"\n                [sort]=\"orderType\"\n                (click)=\"setOrderBy('romaneio')\">\n              </thead-sorter>\n            </th>\n            <th\n              class=\"text-center text-truncate hover\"\n              width=\"10%\"\n              *ngIf=\"columns.dataPrev.active\"\n            >\n              <thead-sorter\n                value=\"Data Prev Entrega\"\n                [active]=\"orderBy == 'dataPrev'\"\n                [sort]=\"orderType\"\n                (click)=\"setOrderBy('dataPrev')\">\n              </thead-sorter>\n            </th>\n            <th\n              class=\"text-center text-truncate hover\"\n              width=\"10%\"\n              *ngIf=\"columns.dataEntrega.active\"\n            >\n              <thead-sorter\n                value=\"Data de Entrega\"\n                [active]=\"orderBy == 'dataEntrega'\"\n                [sort]=\"orderType\"\n                (click)=\"setOrderBy('dataEntrega')\">\n              </thead-sorter>\n            </th>\n            <th\n              class=\"text-truncate hover\"\n              width=\"28%\"\n              *ngIf=\"columns.nomeCliente.active\"\n            >\n              <thead-sorter\n                value=\"Cliente\"\n                [active]=\"orderBy == 'nomeCliente'\"\n                [sort]=\"orderType\"\n                (click)=\"setOrderBy('nomeCliente')\">\n              </thead-sorter>\n            </th>\n            <th\n              class=\"text-center text-truncate\"\n              width=\"5%\"\n              *ngIf=\"columns.sequencia.active\"\n            >Seq.</th>\n            <th\n              class=\"text-center text-truncate hover\"\n              width=\"9%\"\n              *ngIf=\"columns.pedido.active\"\n            >\n              <thead-sorter\n                value=\"Pedido\"\n                [active]=\"orderBy == 'pedido'\"\n                [sort]=\"orderType\"\n                (click)=\"setOrderBy('pedido')\">\n              </thead-sorter>\n            </th>\n            <th\n              class=\"text-center text-truncate hover\"\n              width=\"9%\"\n              *ngIf=\"columns.notaFiscal.active\"\n            >\n              <thead-sorter\n                value=\"Nota fiscal\"\n                [active]=\"orderBy == 'notaFiscal'\"\n                [sort]=\"orderType\"\n                (click)=\"setOrderBy('notaFiscal')\">\n              </thead-sorter>\n            </th>\n            <th\n              class=\"text-center text-truncate hover\"\n              width=\"9%\"\n              *ngIf=\"columns.dataEmissao.active\"\n            >\n              <thead-sorter\n                value=\"Data de Emissão\"\n                [active]=\"orderBy == 'dataEmissao'\"\n                [sort]=\"orderType\"\n                (click)=\"setOrderBy('dataEmissao')\">\n              </thead-sorter>\n            </th>\n            <th\n              class=\"text-center text-truncate\"\n              width=\"23%\"\n              *ngIf=\"columns.nomeSituacao.active\"\n            >\n              Situação</th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr *ngFor=\"let item of pedidos\" (click)=\"viewDetails(item, modalDetalhes)\">\n            <td\n              class=\"text-center text-truncate hover\"\n              *ngIf=\"columns.nomeEmpresa.active\"\n            >\n              ({{ item.CD_FILI }})&nbsp;{{ item.NM_FILI }}\n            </td>\n            <td\n              class=\"text-center text-truncate hover\"\n              *ngIf=\"columns.romaneio.active\"\n            >\n              {{ item.CD_ROMA }}\n            </td>\n            <td\n              class=\"text-center text-truncate hover\"\n              *ngIf=\"columns.dataPrev.active\"\n            >\n              {{ item.DT_SAID_PREV | date: 'dd/MM/yyyy' }}\n            </td>\n            <td\n              class=\"text-center text-truncate hover\"\n              *ngIf=\"columns.dataEntrega.active\"\n            >\n              {{ item.ENTR_DT_ENTR | date: 'dd/MM/yyyy' }}\n            </td>\n            <td\n              class=\"text-truncate hover\"\n              *ngIf=\"columns.nomeCliente.active\"\n              isEllipsed\n            >\n              ({{ item?.CD_CLIE }}) {{ item?.NM_CLIE }}\n            </td>\n            <td\n              class=\"text-center text-truncate hover\"\n              *ngIf=\"columns.sequencia.active\"\n            >\n              {{ item?.ENTR_NR_SQNC }}\n            </td>\n            <td\n              class=\"text-center text-truncate hover\"\n              *ngIf=\"columns.pedido.active\"\n            >\n              {{ item.CD_PEDI }}\n            </td>\n            <td\n              class=\"text-center text-truncate hover\"\n              *ngIf=\"columns.notaFiscal.active\"\n            >\n              {{ item.NR_NOTA_FISC }}\n            </td>\n            <td\n              class=\"text-center text-truncate hover\"\n              *ngIf=\"columns.dataEmissao.active\"\n            >\n              {{ item.DT_NOTA_FISC | date: 'dd/MM/yyyy' }}\n            </td>\n            <td\n              class=\"text-center text-truncate hover\"\n              *ngIf=\"columns.nomeSituacao.active\"\n            >\n              {{ item.ENTR_DS_STAT }}\n            </td>\n          </tr>\n        </ng-template>\n      </custom-table>\n      <div *ngIf=\"!pedidosEmpty\">\n        Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\n        <pagination\n        [maxSize]=\"10\"\n          [totalItems]=\"totalItems\"\n          (pageChanged)=\"onPageChanged($event)\"\n          [(itemsPerPage)]=\"itemsPerPage\"\n          [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPage\"\n          previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\"\n          lastText=\"&raquo;\">\n        </pagination>\n      </div>\n    </div>\n    <empty-result message=\"Nenhuma informação encontrada\" class=\"mx-auto mt-5\" *ngIf=\"pedidosLoaded && pedidosEmpty\"></empty-result>\n  </div>\n</app-body>\n<ng-template #modalDetalhes>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Detalhes</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <tabset>\n      <tab heading=\"Entrega\" class=\"border-right border-left border-bottom\">\n        <div class=\"p-3\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-lg-4\">\n              <label>Cliente</label>\n              <div>({{ pedido?.CD_CLIE }}) {{ pedido?.NM_FANT }}</div>\n            </div>\n            <div class=\"form-group col-lg-3\">\n              <label>Motorista</label>\n              <div *ngIf=\"pedido?.NM_MOTO\">{{ pedido?.NM_MOTO }}</div>\n              <div *ngIf=\"!pedido?.NM_MOTO\">NÃO INFORMADO</div>\n            </div>\n            <div class=\"form-group col-lg-3\">\n              <label>Placa do veículo</label>\n              <div *ngIf=\"pedido?.PLAC\">{{ pedido?.PLAC }}</div>\n              <div *ngIf=\"!pedido?.PLAC\">NÃO INFORMADO</div>\n            </div>\n          </div>\n          <div id=\"scrollDetalhes\" class=\"mt-2 d-flex\">\n            <div class=\"col-4\">\n              <div *ngFor=\"let detalhe of entrega; let last = last; let first = first\" [ngClass]=\"fist ? 'mt-4' : ''\">\n                <div class=\"d-flex w-100\" [tooltip]=\"detalhe?.desricao\" placement=\"left\">\n                  <div class=\"rounded-circle text-white icon-40\" [ngClass]=\"detalhe?.check == 0 ? 'bg-secondary' : 'bg-primary'\">\n                    <i [class]=\"detalhe?.icone\"></i>\n                  </div>\n                  <strong class=\"my-auto ml-3 text-truncate\" [ngClass]=\"detalhe?.check == 1 ? 'text-primary' : ''\" style=\"width: calc(100% - 40px)\">\n                    {{ detalhe?.descricao }}\n                  </strong>\n                </div>\n                <div class=\"my-2\" *ngIf=\"!last\">\n                  <div class=\"ml-1\">\n                    <div class=\"border-left border-secondary ml-3 p-2\">\n                      <div *ngIf=\"detalhe?.check === 1\"></div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-8 p-0 form-group\">\n              <label>FOTO DO CANHOTO</label>\n              <div *ngIf=\"imageLoading\">Carregando foto do canhoto...</div>\n              <div *ngIf=\"pedido?.ENTR_COMP_FOTO\">\n                <img [hidden]=\"imageLoading\" [src]=\"pedido?.ENTR_COMP_FOTO\" class=\"border rounded shadow-sm w-100\" (load)=\"onImageLoad()\">\n              </div>\n              <empty-result message=\"Nehuma imagem encontrada\" *ngIf=\"!pedido?.ENTR_COMP_FOTO && !imageLoading\"></empty-result>\n            </div>\n          </div>\n        </div>\n      </tab>\n      <tab heading=\"Romaneio\" class=\"border-right border-left border-bottom\">\n        <div class=\"px-3 pt-3\" *ngIf=\"!detalhesRomaneioLoading && !detalhesRomaneioEmpty\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-lg-3\">\n              <label>Romaneio</label>\n              <div>{{ pedido?.CD_ROMA }}</div>\n            </div>\n            <!-- <div class=\"form-group col-lg-3\">\n              <label>Região da entrega</label>\n              <div>{{ pedido }}</div>\n            </div> -->\n          </div>\n          <div class=\"row\">\n            <div class=\"col\">\n              <subtitles\n                [data]=\"subtitles\"\n                [show]=\"!noResult\">\n              </subtitles>\n            </div>\n          </div>\n          <custom-table [config]=\"tableConfig\">\n            <ng-template #thead let-thead>\n              <tr>\n                <th>Cliente</th>\n                <th class=\"text-center\">Seq.</th>\n                <th class=\"text-center\">Nota fiscal</th>\n                <th class=\"text-center\">Pedido</th>\n                <th class=\"text-center\">Código</th>\n                <th>Material</th>\n                <th class=\"text-center\">Peso</th>\n                <th>Endereço</th>\n              </tr>\n            </ng-template>\n            <ng-template #tbody let-tbody>\n              <tr *ngFor=\"let item of detalhesRomaneio\" [ngStyle]=\"getSelectedStyle(item)\">\n                <td\n                  class=\"hover\"\n                  [ngClass]=\"classStatusBorder(item)\">\n                  ({{ item.CD_CLIE }}) {{ item.NM_FANT }}\n                </td>\n                <td class=\"text-center\">{{ item.NR_SQNC }}</td>\n                <td class=\"text-center\">{{ item.NOTA_FISC }}</td>\n                <td class=\"text-center\">{{ item.CD_PEDI }}</td>\n                <td class=\"text-center\">{{ item.CD_PROD }}</td>\n                <td>{{ item.NM_PROD }}</td>\n                <td class=\"text-center\">{{ item.TT_PROD_PESO  | number: '0.3-3' }}</td>\n                <td>{{ item.DS_ENDE }}</td>\n              </tr>\n            </ng-template>\n          </custom-table>\n        </div>\n        <empty-result message=\"Nenhuma informação encontrada\" *ngIf=\"detalhesRomaneioEmpty\"></empty-result>\n        <div class=\"spinner-border text-primary\" role=\"status\" *ngIf=\"!detalhesRomaneioLoading && detalhesRomaneioEmpty\">\n          <span class=\"sr-only\">Loading...</span>\n        </div>\n      </tab>\n    </tabset>\n  </div>\n</ng-template>\n");

/***/ }),

/***/ "sSNH":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/logistica/entrega/controle-entregas/controle-entregas-routing.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: ComercialControleEntregasRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialControleEntregasRoutingModule", function() { return ComercialControleEntregasRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lista/lista.component */ "Ky88");



// Components

const routes = [
    { path: '', component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_3__["ComercialControleEntregasListaComponent"] }
];
let ComercialControleEntregasRoutingModule = class ComercialControleEntregasRoutingModule {
};
ComercialControleEntregasRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ComercialControleEntregasRoutingModule);



/***/ }),

/***/ "t7QM":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/comercial/controle-entregas/controle-entregas-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: ComercialControleEntregasRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialControleEntregasRoutingModule", function() { return ComercialControleEntregasRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lista/lista.component */ "IVSg");



// Components

const routes = [
    { path: '', component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_3__["ComercialControleEntregasListaComponent"] }
];
let ComercialControleEntregasRoutingModule = class ComercialControleEntregasRoutingModule {
};
ComercialControleEntregasRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ComercialControleEntregasRoutingModule);



/***/ }),

/***/ "yGOH":
/*!********************************************************!*\
  !*** ./src/app/shared/directives/directives.module.ts ***!
  \********************************************************/
/*! exports provided: DirectivesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectivesModule", function() { return DirectivesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _is_ellipsed_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./is-ellipsed.directive */ "02/m");
var DirectivesModule_1;



// Directives

let DirectivesModule = DirectivesModule_1 = class DirectivesModule {
    static forRoot() {
        return {
            ngModule: DirectivesModule_1
        };
    }
};
DirectivesModule = DirectivesModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_is_ellipsed_directive__WEBPACK_IMPORTED_MODULE_3__["IsEllipsedDirective"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        exports: [_is_ellipsed_directive__WEBPACK_IMPORTED_MODULE_3__["IsEllipsedDirective"]]
    })
], DirectivesModule);



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
//# sourceMappingURL=controle-entregas-controle-entregas-module-es2015.js.map