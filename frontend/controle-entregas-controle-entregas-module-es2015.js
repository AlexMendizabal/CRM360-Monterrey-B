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
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep comercial-controle-entregas #scrollDetalhes {\n  height: 340px;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21lcmNpYWwvY29udHJvbGUtZW50cmVnYXMvbGlzdGEvbGlzdGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDRSxhQUFBO0VBQ0EsY0FBQTtBQUROIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9jb21lcmNpYWwvY29udHJvbGUtZW50cmVnYXMvbGlzdGEvbGlzdGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAge1xyXG4gIGNvbWVyY2lhbC1jb250cm9sZS1lbnRyZWdhcyB7XHJcbiAgICAjc2Nyb2xsRGV0YWxoZXMge1xyXG4gICAgICBoZWlnaHQ6IDM0MHB4O1xyXG4gICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */");

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
        this.API = `http://23.254.204.187/api/comercial/controle-entregas`;
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
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<app-header appTitle=\"Controle de entregas\">\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onResetForm()\">\r\n    Limpiar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onFilter()\">\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\r\n  <advanced-filter #scrollToFilter>\r\n    <form [formGroup]=\"form\" autocomplete=\"off\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"dataInicial\">Comienzo</label>\r\n          <input\r\n            class=\"form-control\"\r\n            id=\"dataInicial\"\r\n            type=\"text\"\r\n            bsDatepicker\r\n            [bsConfig]=\"bsConfig\"\r\n            formControlName=\"DT_INIC\"\r\n            [ngClass]=\"onFieldError('DT_INIC') + ' ' + onFieldRequired('DT_INIC')\">\r\n        </div>\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"dataFinal\">Final</label>\r\n          <input\r\n            class=\"form-control\"\r\n            id=\"dataFinal\"\r\n            type=\"text\"\r\n            bsDatepicker\r\n            [bsConfig]=\"bsConfig\"\r\n            formControlName=\"DT_FINA\"\r\n            [ngClass]=\"onFieldError('DT_FINA') + ' ' + onFieldRequired('DT_FINA')\">\r\n        </div>\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"cliente\">Cliente</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"cliente\"\r\n            formControlName=\"DS_CLIE\"\r\n            (keydown.enter)=\"onFilter()\">\r\n        </div>\r\n        <!-- <div class=\"form-group col-3\">\r\n          <label for=\"operacao\">Operación</label>\r\n          <select\r\n            name=\"operacao\"\r\n            id=\"operacao\"\r\n            class=\"form-control\"\r\n            formControlName=\"TP_OPER\"\r\n          >\r\n            <option value=\"ENTREGA_CLIENTE\">Entrega Cliente</option>\r\n            <option value=\"TRANSFERENCIA\">Transferência</option>\r\n          </select>\r\n        </div> -->\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"notaFiscal\">Factura</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"notaFiscal\"\r\n            formControlName=\"NOTA_FISC\"\r\n            (keydown.enter)=\"onFilter()\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"pedido\">Orden de venta</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"pedido\"\r\n            formControlName=\"CD_PEDI\"\r\n            (keydown.enter)=\"onFilter()\">\r\n        </div>\r\n        <!-- <div class=\"form-group col-3\">\r\n          <label for=\"sigla\">Sigla</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"sigla\"\r\n            formControlName=\"SG_PEDI\"\r\n            (keydown.enter)=\"onFilter()\">\r\n        </div> -->\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"romaneio\">Ruta</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"romaneio\"\r\n            formControlName=\"CD_ROMA\"\r\n            (keydown.enter)=\"onFilter()\">\r\n        </div>\r\n        <div class=\"form-group col-lg-3 mb-2\">\r\n          <label for=\"situacao\">Situación\r\n            <i class=\"far fa-question-circle ml-1\" [tooltip]=\"tooltipAutoScrollTemplate\"></i>\r\n          </label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"true\"\r\n            [items]=\"situacoes\"\r\n            formControlName=\"ENTR_SG_STAT\"\r\n            [virtualScroll]=\"true\"\r\n            labelForId=\"situacao\"\r\n            bindLabel=\"ENTR_DS_STAT\"\r\n            bindValue=\"ENTR_SG_STAT\"\r\n            >\r\n          </ng-select>\r\n          <ng-template #tooltipAutoScrollTemplate>\r\n            <p class=\"mb-0\"><b>ESPERANDO COMPOSICIÓN: Esperando composición de carga para la región del cliente.</b></p>\r\n            <p class=\"text-nowrap mb-0\"><br><br></p>\r\n            <p class=\"mb-0\"><b>VEHÍCULO EN ESPERA: Carga formada, pendiente de definición del vehículo.</b></p>\r\n            <p class=\"text-nowrap mb-0\"><br><br></p>\r\n            <p class=\"mb-0\"><b>ESPERANDO SALIDA: Vehículo definido, esperando carga y salida para entrega.</b></p>\r\n            <p class=\"text-nowrap mb-0\"><br><br></p>\r\n            <p class=\"mb-0\"><b>A LA IZQUIERDA PARA ENTREGA: Se inició el viaje.</b></p>\r\n            <p class=\"text-nowrap mb-0\"><br><br></p>\r\n            <p class=\"mb-0\"><b>RETIRO: Retiros de Hecho.</b></p>\r\n            <p class=\"text-nowrap mb-0\"><br><br></p>\r\n            <p class=\"mb-0\"><b>ENTREGA RETARDADA: Vuelva a reprogramación.</b></p>\r\n            <p class=\"text-nowrap mb-0\"><br><br></p>\r\n            <p class=\"mb-0\"><b>ENTREGA DEVUELTA: Devolución por cancelación.</b></p>\r\n            <p class=\"text-nowrap mb-0\"><br><br></p>\r\n            <p class=\"mb-0\"><b>ENTREGA REALIZADA: Entrega completada.</b></p>\r\n          </ng-template>\r\n        </div>\r\n        <div class=\"form-group col-lg-3 mb-2\">\r\n          <label for=\"vendedores\">Vendedor</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"true\"\r\n            [items]=\"vendedores\"\r\n            formControlName=\"NM_VEND\"\r\n            [virtualScroll]=\"true\"\r\n            labelForId=\"vendedores\"\r\n            bindLabel=\"NM_VEND\"\r\n            bindValue=\"NM_VEND\"\r\n            >\r\n          </ng-select>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-3 mb-2\">\r\n          <label for=\"empresa\">Empresa</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"true\"\r\n            [loading]=\"loadingFiliais\"\r\n            [items]=\"filiais\"\r\n            formControlName=\"CD_FILI\"\r\n            [virtualScroll]=\"true\"\r\n            labelForId=\"empresa\"\r\n            bindLabel=\"nome\"\r\n            bindValue=\"idFilial\"\r\n            >\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-3 pl-0\">\r\n          <label for=\"tipoOperacao\">Tipo de operación</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"true\"\r\n            [items]=\"tipoOperacao\"\r\n            [multiple]=\"true\"\r\n            [virtualScroll]=\"true\"\r\n            labelForId=\"tipoOperacao\"\r\n            bindLabel=\"TP_OPER\"\r\n            bindValue=\"TP_OPER\"\r\n            id=\"tipoOperacao\"\r\n            formControlName=\"TP_OPER\"\r\n            (change)=\"onFilter()\"\r\n            placeholder=\"SELECCIONE...\"\r\n          >\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-lg-3 mb-2\">\r\n          <label for=\"registros\">Registros</label>\r\n          <select\r\n            class=\"form-control\"\r\n            id=\"registros\"\r\n            formControlName=\"TT_REGI_PAGI\"\r\n            (change)=\"onFilter()\"\r\n            >\r\n            <option>25</option>\r\n            <option>50</option>\r\n            <option>100</option>\r\n            <option>200</option>\r\n            <option>300</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </advanced-filter>\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12\" *ngIf=\"!pedidosEmpty\">\r\n      <ul\r\n        class=\"d-flex justify-content-between p-0\"\r\n      >\r\n        <li\r\n          *ngFor=\"let column of columns | keyvalue : keepOriginalOrder; let index = index\"\r\n          style=\"list-style: none;\"\r\n        >\r\n          <div class=\"custom-control custom-checkbox\">\r\n            <input\r\n              type=\"checkbox\"\r\n              class=\"custom-control-input\"\r\n              [id]=\"'column'+index\"\r\n              [name]=\"'column'+index\"\r\n              [checked]=\"column.value.active\"\r\n              [(ngModel)]=\"column.value.active\"\r\n              >\r\n            <label\r\n              class=\"custom-control-label\"\r\n              [for]=\"'column'+index\"\r\n            >\r\n              {{ column.value.name }}\r\n            </label>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n      <custom-table [config]=\"tableConfig\">\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n            <th\r\n              class=\"text-center text-truncate hover\"\r\n              width=\"11%\"\r\n              *ngIf=\"columns.nomeEmpresa.active\"\r\n            >\r\n              <thead-sorter\r\n                value=\"Empresa\"\r\n                [active]=\"orderBy == 'nomeEmpresa'\"\r\n                [sort]=\"orderType\"\r\n                (click)=\"setOrderBy('nomeEmpresa')\">\r\n              </thead-sorter>\r\n            </th>\r\n            <th\r\n              class=\"text-center text-truncate hover\"\r\n              width=\"9%\"\r\n              *ngIf=\"columns.romaneio.active\"\r\n            >\r\n              <thead-sorter\r\n                value=\"Ruta\"\r\n                [active]=\"orderBy == 'romaneio'\"\r\n                [sort]=\"orderType\"\r\n                (click)=\"setOrderBy('romaneio')\">\r\n              </thead-sorter>\r\n            </th>\r\n            <th\r\n              class=\"text-center text-truncate hover\"\r\n              width=\"10%\"\r\n              *ngIf=\"columns.dataPrev.active\"\r\n            >\r\n              <thead-sorter\r\n                value=\"Fecha Entr Estimada\"\r\n                [active]=\"orderBy == 'dataPrev'\"\r\n                [sort]=\"orderType\"\r\n                (click)=\"setOrderBy('dataPrev')\">\r\n              </thead-sorter>\r\n            </th>\r\n            <th\r\n              class=\"text-center text-truncate hover\"\r\n              width=\"10%\"\r\n              *ngIf=\"columns.dataEntrega.active\"\r\n            >\r\n              <thead-sorter\r\n                value=\"Fecha de Entrega\"\r\n                [active]=\"orderBy == 'dataEntrega'\"\r\n                [sort]=\"orderType\"\r\n                (click)=\"setOrderBy('dataEntrega')\">\r\n              </thead-sorter>\r\n            </th>\r\n            <th\r\n              class=\"text-truncate hover\"\r\n              width=\"28%\"\r\n              *ngIf=\"columns.nomeCliente.active\"\r\n            >\r\n              <thead-sorter\r\n                value=\"Cliente\"\r\n                [active]=\"orderBy == 'nomeCliente'\"\r\n                [sort]=\"orderType\"\r\n                (click)=\"setOrderBy('nomeCliente')\">\r\n              </thead-sorter>\r\n            </th>\r\n            <th\r\n              class=\"text-center text-truncate\"\r\n              width=\"5%\"\r\n              *ngIf=\"columns.sequencia.active\"\r\n            >Seq.</th>\r\n            <th\r\n              class=\"text-center text-truncate hover\"\r\n              width=\"9%\"\r\n              *ngIf=\"columns.pedido.active\"\r\n            >\r\n              <thead-sorter\r\n                value=\"Orden de vienda\"\r\n                [active]=\"orderBy == 'pedido'\"\r\n                [sort]=\"orderType\"\r\n                (click)=\"setOrderBy('pedido')\">\r\n              </thead-sorter>\r\n            </th>\r\n            <th\r\n              class=\"text-center text-truncate hover\"\r\n              width=\"9%\"\r\n              *ngIf=\"columns.notaFiscal.active\"\r\n            >\r\n              <thead-sorter\r\n                value=\"Factura\"\r\n                [active]=\"orderBy == 'notaFiscal'\"\r\n                [sort]=\"orderType\"\r\n                (click)=\"setOrderBy('notaFiscal')\">\r\n              </thead-sorter>\r\n            </th>\r\n            <th\r\n              class=\"text-center text-truncate hover\"\r\n              width=\"9%\"\r\n              *ngIf=\"columns.dataEmissao.active\"\r\n            >\r\n              <thead-sorter\r\n                value=\"Fecha de Emisión\"\r\n                [active]=\"orderBy == 'dataEmissao'\"\r\n                [sort]=\"orderType\"\r\n                (click)=\"setOrderBy('dataEmissao')\">\r\n              </thead-sorter>\r\n            </th>\r\n            <th\r\n              class=\"text-center text-truncate\"\r\n              width=\"20%\"\r\n              *ngIf=\"columns.nomeSituacao.active\"\r\n            >\r\n              Situación\r\n            </th>\r\n            <th width=\"3%\"></th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let item of pedidos\">\r\n            <td\r\n              class=\"text-center text-truncate hover\"\r\n              *ngIf=\"columns.nomeEmpresa.active\"\r\n              (click)=\"viewDetails(item, modalDetalhes)\"\r\n            >\r\n              ({{ item.CD_FILI }})&nbsp;{{ item.NM_FILI }}\r\n            </td>\r\n            <td\r\n              class=\"text-center text-truncate hover\"\r\n              *ngIf=\"columns.romaneio.active\"\r\n              (click)=\"viewDetails(item, modalDetalhes)\"\r\n            >\r\n              {{ item.CD_ROMA }}\r\n            </td>\r\n            <td\r\n              class=\"text-center text-truncate hover\"\r\n              *ngIf=\"columns.dataPrev.active\"\r\n              (click)=\"viewDetails(item, modalDetalhes)\"\r\n            >\r\n              {{ item.ROMA_DT_PREV_SAID | date: 'dd/MM/yyyy' }}\r\n            </td>\r\n            <td\r\n              class=\"text-center text-truncate hover\"\r\n              *ngIf=\"columns.dataEntrega.active\"\r\n              (click)=\"viewDetails(item, modalDetalhes)\"\r\n            >\r\n              {{ item.ENTR_DT_ENTR | date: 'dd/MM/yyyy' }}\r\n            </td>\r\n            <td\r\n              class=\"text-truncate hover\"\r\n              *ngIf=\"columns.nomeCliente.active\"\r\n              (click)=\"viewDetails(item, modalDetalhes)\"\r\n            >\r\n              ({{ item?.CD_CLIE_ORIG }}) {{ item?.NM_CLIE }}\r\n            </td>\r\n            <td\r\n              class=\"text-center text-truncate hover\"\r\n              *ngIf=\"columns.sequencia.active\"\r\n              (click)=\"viewDetails(item, modalDetalhes)\"\r\n            >\r\n              {{ item?.SEQU_ENTR }}\r\n            </td>\r\n            <td\r\n              class=\"text-center text-truncate hover\"\r\n              *ngIf=\"columns.pedido.active\"\r\n              (click)=\"viewDetails(item, modalDetalhes)\"\r\n            >\r\n              {{ item.CD_PEDI }}\r\n            </td>\r\n            <td\r\n              class=\"text-center text-truncate hover\"\r\n              *ngIf=\"columns.notaFiscal.active\"\r\n              (click)=\"viewDetails(item, modalDetalhes)\"\r\n            >\r\n              {{ item.NOTA_FISC }}\r\n            </td>\r\n            <td\r\n              class=\"text-center text-truncate hover\"\r\n              *ngIf=\"columns.dataEmissao.active\"\r\n              (click)=\"viewDetails(item, modalDetalhes)\"\r\n            >\r\n              {{ item.DT_NOTA_FISC | date: 'dd/MM/yyyy' }}\r\n            </td>\r\n            <td\r\n              class=\"text-center text-truncate hover\"\r\n              *ngIf=\"columns.nomeSituacao.active\"\r\n              (click)=\"viewDetails(item, modalDetalhes)\"\r\n            >\r\n              {{ item.ENTR_DS_STAT }}\r\n            </td>\r\n            <td>\r\n              <span\r\n                [tooltip]=\"!item.ENTR_DT_ENTR ? 'No entregado' : (\r\n                  !item.ENTR_DT_CONS ? 'No integrado' : ''\r\n                )\"\r\n                container=\"body\"\r\n                placement=\"left\"\r\n              >\r\n                <button\r\n                  class=\"btn-icon-sm\"\r\n                  *ngIf=\"!item.loading\"\r\n                  (click)=\"removerDataConsulta(item)\"\r\n                  [disabled]=\"!item.ENTR_DT_ENTR || !item.ENTR_DT_CONS\"\r\n                >\r\n                  <i\r\n                    class=\"fas fa-paper-plane\"\r\n                    [ngClass]=\"{\r\n                      'text-seconday': !item.ENTR_DT_ENTR,\r\n                      'text-warning': !item.ENTR_DT_CONS && item.ENTR_DT_ENTR,\r\n                      'text-success': item.ENTR_DT_CONS && item.ENTR_DT_ENTR\r\n                    }\"\r\n                  ></i>\r\n                </button>\r\n                <div\r\n                  class=\"spinner-border spinner-border-sm\"\r\n                  role=\"status\"\r\n                  *ngIf=\"item.loading\"\r\n                >\r\n                  <span class=\"sr-only\">Loading...</span>\r\n                </div>\r\n              </span>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n      <div *ngIf=\"!pedidosEmpty\">\r\n        Demostración {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\r\n        <pagination\r\n        [maxSize]=\"10\"\r\n          [totalItems]=\"totalItems\"\r\n          (pageChanged)=\"onPageChanged($event)\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPage\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\">\r\n        </pagination>\r\n      </div>\r\n    </div>\r\n    <empty-result message=\"No se encontró información\" class=\"mx-auto mt-5\" *ngIf=\"pedidosLoaded && pedidosEmpty\"></empty-result>\r\n  </div>\r\n</app-body>\r\n<ng-template #modalDetalhes>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">Detalles</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <tabset>\r\n      <tab heading=\"Entrega\" class=\"border-right border-left border-bottom\">\r\n        <div class=\"p-3\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-4\">\r\n              <label>Cliente</label>\r\n              <div>({{ pedido?.CD_CLIE }}) {{ pedido?.NM_FANT }}</div>\r\n            </div>\r\n            <div class=\"form-group col-lg-3\">\r\n              <label>Conductor</label>\r\n              <div *ngIf=\"pedido?.NM_MOTO\">{{ pedido?.NM_MOTO }}</div>\r\n              <div *ngIf=\"!pedido?.NM_MOTO\">NO INFORMADO</div>\r\n            </div>\r\n            <div class=\"form-group col-lg-3\">\r\n              <label>Placa de matrícula del vehículo</label>\r\n              <div *ngIf=\"pedido?.PLAC\">{{ pedido?.PLAC }}</div>\r\n              <div *ngIf=\"!pedido?.PLAC\">NO INFORMADO</div>\r\n            </div>\r\n          </div>\r\n          <div id=\"scrollDetalhes\" class=\"mt-2 d-flex\">\r\n            <div class=\"col-4\">\r\n              <div *ngFor=\"let detalhe of entrega; let last = last; let first = first\" [ngClass]=\"fist ? 'mt-4' : ''\">\r\n                <div class=\"d-flex w-100\" [tooltip]=\"detalhe?.desricao\" placement=\"left\">\r\n                  <div class=\"rounded-circle text-white icon-40\" [ngClass]=\"detalhe?.check == 0 ? 'bg-secondary' : 'bg-primary'\">\r\n                    <i [class]=\"detalhe?.icone\"></i>\r\n                  </div>\r\n                  <strong class=\"my-auto ml-3 text-truncate\" [ngClass]=\"detalhe?.check == 1 ? 'text-primary' : ''\" style=\"width: calc(100% - 40px)\">\r\n                    {{ detalhe?.descricao }}\r\n                  </strong>\r\n                </div>\r\n                <div class=\"my-2\" *ngIf=\"!last\">\r\n                  <div class=\"ml-1\">\r\n                    <div class=\"border-left border-secondary ml-3 p-2\">\r\n                      <div *ngIf=\"detalhe?.check === 1\"></div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-8 p-0 form-group\">\r\n              <label>Fotografía</label>\r\n              <div *ngIf=\"imageLoading\">Cargando...</div>\r\n              <div *ngIf=\"pedido?.ENTR_COMP_FOTO\">\r\n                <img [hidden]=\"imageLoading\" [src]=\"pedido?.ENTR_COMP_FOTO\" class=\"border rounded shadow-sm w-100\" (load)=\"onImageLoad()\">\r\n              </div>\r\n              <empty-result message=\"No se encontró ninguna imagen\" *ngIf=\"!pedido?.ENTR_COMP_FOTO && !imageLoading\"></empty-result>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </tab>\r\n      <tab heading=\"Ruta\" class=\"border-right border-left border-bottom\">\r\n        <div class=\"px-3 pt-3\" *ngIf=\"!detalhesRomaneioLoading && !detalhesRomaneioEmpty\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-3\">\r\n              <label>Ruta</label>\r\n              <div>{{ pedido?.CD_ROMA }}</div>\r\n            </div>\r\n            <!-- <div class=\"form-group col-lg-3\">\r\n              <label>Região da entrega</label>\r\n              <div>{{ pedido }}</div>\r\n            </div> -->\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              <subtitles\r\n                [data]=\"subtitles\"\r\n                [show]=\"!noResult\">\r\n              </subtitles>\r\n            </div>\r\n          </div>\r\n          <custom-table [config]=\"tableConfig\">\r\n            <ng-template #thead let-thead>\r\n              <tr>\r\n                <th>Cliente</th>\r\n                <th class=\"text-center\">Seq.</th>\r\n                <th class=\"text-center\">Factura</th>\r\n                <th class=\"text-center\">Orden de vienda</th>\r\n                <th class=\"text-center\">Código</th>\r\n                <th>Producto</th>\r\n                <th class=\"text-center\">Peso</th>\r\n                <th>Dirección</th>\r\n              </tr>\r\n            </ng-template>\r\n            <ng-template #tbody let-tbody>\r\n              <tr *ngFor=\"let item of detalhesRomaneio\" [ngStyle]=\"getSelectedStyle(item)\">\r\n                <td\r\n                  class=\"hover\"\r\n                  [ngClass]=\"classStatusBorder(item)\">\r\n                  ({{ item.CD_CLIE }}) {{ item.NM_FANT }}\r\n                </td>\r\n                <td class=\"text-center\">{{ item.NR_SQNC }}</td>\r\n                <td class=\"text-center\">{{ item.NOTA_FISC }}</td>\r\n                <td class=\"text-center\">{{ item.CD_PEDI }}</td>\r\n                <td class=\"text-center\">{{ item.CD_PROD }}</td>\r\n                <td>{{ item.NM_PROD }}</td>\r\n                <td class=\"text-center\">{{ item.TT_PROD_PESO  | number: '0.3-3' }}</td>\r\n                <td>{{ item.DS_ENDE }}</td>\r\n              </tr>\r\n            </ng-template>\r\n          </custom-table>\r\n        </div>\r\n        <empty-result message=\"No se encontró información\" *ngIf=\"detalhesRomaneioEmpty\"></empty-result>\r\n        <div class=\"spinner-border text-primary\" role=\"status\" *ngIf=\"!detalhesRomaneioLoading && detalhesRomaneioEmpty\">\r\n          <span class=\"sr-only\">Loading...</span>\r\n        </div>\r\n      </tab>\r\n    </tabset>\r\n  </div>\r\n</ng-template>\r\n");

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
    getMaterialesLista(params) {
        return this.http
            .get(`${this.API}/materiales/lista`, {
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
    getMaterialesOfertaVendedor(params) {
        return this.http
            .get(`${this.API}/materiales_lista_precio_vendedor`, {
            params: params,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getUpSellService(params) {
        return this.http
            .get(`${this.API}/materiales_suplementarios`, {
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

/***/ "aSw5":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/logistica/entrega/controle-entregas/lista/lista.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep comercial-controle-entregas #scrollDetalhes {\n  height: 340px;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvZW50cmVnYS9jb250cm9sZS1lbnRyZWdhcy9saXN0YS9saXN0YS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FBRE4iLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2xvZ2lzdGljYS9lbnRyZWdhL2NvbnRyb2xlLWVudHJlZ2FzL2xpc3RhL2xpc3RhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIHtcclxuICBjb21lcmNpYWwtY29udHJvbGUtZW50cmVnYXMge1xyXG4gICAgI3Njcm9sbERldGFsaGVzIHtcclxuICAgICAgaGVpZ2h0OiAzNDBweDtcclxuICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

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
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<app-header appTitle=\"Controle de entregas\">\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onResetForm()\">\r\n    Limpar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onFilter()\">\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\r\n  <advanced-filter #scrollToFilter>\r\n    <form [formGroup]=\"form\" autocomplete=\"off\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"dataInicial\">Data inicial</label>\r\n          <input\r\n            class=\"form-control\"\r\n            id=\"dataInicial\"\r\n            type=\"text\"\r\n            bsDatepicker\r\n            [bsConfig]=\"bsConfig\"\r\n            formControlName=\"DT_INIC\"\r\n            [ngClass]=\"onFieldError('DT_INIC') + ' ' + onFieldRequired('DT_INIC')\">\r\n        </div>\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"dataFinal\">Data final</label>\r\n          <input\r\n            class=\"form-control\"\r\n            id=\"dataFinal\"\r\n            type=\"text\"\r\n            bsDatepicker\r\n            [bsConfig]=\"bsConfig\"\r\n            formControlName=\"DT_FINA\"\r\n            [ngClass]=\"onFieldError('DT_FINA') + ' ' + onFieldRequired('DT_FINA')\">\r\n        </div>\r\n        <div class=\"form-group col\">\r\n          <label for=\"cliente\">Cliente</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"cliente\"\r\n            formControlName=\"DS_CLIE\"\r\n            (keydown.enter)=\"onFilter()\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"notaFiscal\">Nota fiscal</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"notaFiscal\"\r\n            formControlName=\"NOTA_FISC\"\r\n            (keydown.enter)=\"onFilter()\">\r\n        </div>\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"pedido\">Pedido</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"pedido\"\r\n            formControlName=\"CD_PEDI\"\r\n            (keydown.enter)=\"onFilter()\">\r\n        </div>\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"sigla\">Sigla</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"sigla\"\r\n            formControlName=\"SG_PEDI\"\r\n            (keydown.enter)=\"onFilter()\">\r\n        </div>\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"romaneio\">Romaneio</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"romaneio\"\r\n            formControlName=\"CD_ROMA\"\r\n            (keydown.enter)=\"onFilter()\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-lg-3 mb-2\">\r\n          <label for=\"situacao\">Situação\r\n            <i class=\"far fa-question-circle ml-1\" [tooltip]=\"tooltipAutoScrollTemplate\"></i>\r\n          </label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"true\"\r\n            [items]=\"situacoes\"\r\n            formControlName=\"ENTR_SG_STAT\"\r\n            [virtualScroll]=\"true\"\r\n            labelForId=\"situacao\"\r\n            bindLabel=\"ENTR_DS_STAT\"\r\n            bindValue=\"ENTR_SG_STAT\"\r\n            (change)=\"onFilter()\"\r\n            >\r\n          </ng-select>\r\n          <ng-template #tooltipAutoScrollTemplate>\r\n            <p class=\"mb-0\"><b>AGUARDANDO COMPOSIÇÃO: Aguardando composição de carga para região do cliente.</b></p>\r\n            <p class=\"text-nowrap mb-0\"><br><br></p>\r\n            <p class=\"mb-0\"><b>AGUARDANDO VEíCULO: Carga formada, aguardando definição do veículo.</b></p>\r\n            <p class=\"text-nowrap mb-0\"><br><br></p>\r\n            <p class=\"mb-0\"><b>AGUARDANDO SAÍDA: Veículo definido, aguardando carregamento e saída para entrega.</b></p>\r\n            <p class=\"text-nowrap mb-0\"><br><br></p>\r\n            <p class=\"mb-0\"><b>SAIU PARA ENTREGA: Viagem Iniciada.</b></p>\r\n            <p class=\"text-nowrap mb-0\"><br><br></p>\r\n            <p class=\"mb-0\"><b>RETIRADA: Retira Realizada.</b></p>\r\n            <p class=\"text-nowrap mb-0\"><br><br></p>\r\n            <p class=\"mb-0\"><b>ENTREGA ADIADA: Retorno para reprogramação.</b></p>\r\n            <p class=\"text-nowrap mb-0\"><br><br></p>\r\n            <p class=\"mb-0\"><b>ENTREGA DEVOLVIDA: Retorno para cancelamento.</b></p>\r\n            <p class=\"text-nowrap mb-0\"><br><br></p>\r\n            <p class=\"mb-0\"><b>ENTREGA REALIZADA: Entrega realizada.</b></p>\r\n          </ng-template>\r\n        </div>\r\n        <div class=\"form-group col-lg-3 mb-2\">\r\n          <label for=\"vendedores\">Vendedor</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"true\"\r\n            [items]=\"vendedores\"\r\n            formControlName=\"CD_VEND\"\r\n            [virtualScroll]=\"true\"\r\n            labelForId=\"vendedores\"\r\n            bindLabel=\"nome\"\r\n            bindValue=\"id\"\r\n            (change)=\"onFilter()\"\r\n            >\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col mb-2\">\r\n          <label for=\"empresa\">Empresa</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"true\"\r\n            [items]=\"filiais\"\r\n            formControlName=\"CD_FILI\"\r\n            [virtualScroll]=\"true\"\r\n            labelForId=\"empresa\"\r\n            bindLabel=\"NM_FILI\"\r\n            bindValue=\"CD_FILI\"\r\n            (change)=\"onFilter()\"\r\n            >\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-lg-2 mb-2\">\r\n          <label for=\"registros\">Registros</label>\r\n          <select\r\n            class=\"form-control\"\r\n            id=\"registros\"\r\n            formControlName=\"TT_REGI_PAGI\"\r\n            (change)=\"onFilter()\"\r\n            >\r\n            <option>25</option>\r\n            <option>50</option>\r\n            <option>100</option>\r\n            <option>200</option>\r\n            <option>300</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </advanced-filter>\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12\" *ngIf=\"!pedidosEmpty\">\r\n      <ul\r\n        class=\"d-flex justify-content-between p-0\"\r\n      >\r\n        <li\r\n          *ngFor=\"let column of columns | keyvalue : keepOriginalOrder; let index = index\"\r\n          style=\"list-style: none;\"\r\n        >\r\n          <div class=\"custom-control custom-checkbox\">\r\n            <input\r\n              type=\"checkbox\"\r\n              class=\"custom-control-input\"\r\n              [id]=\"'column'+index\"\r\n              [name]=\"'column'+index\"\r\n              [checked]=\"column.value.active\"\r\n              [(ngModel)]=\"column.value.active\"\r\n              >\r\n            <label\r\n              class=\"custom-control-label\"\r\n              [for]=\"'column'+index\"\r\n            >\r\n              {{ column.value.name }}\r\n            </label>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n      <custom-table [config]=\"tableConfig\">\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n            <th\r\n              class=\"text-center text-truncate hover\"\r\n              width=\"11%\"\r\n              *ngIf=\"columns.nomeEmpresa.active\"\r\n            >\r\n              <thead-sorter\r\n                value=\"Empresa\"\r\n                [active]=\"orderBy == 'nomeEmpresa'\"\r\n                [sort]=\"orderType\"\r\n                (click)=\"setOrderBy('nomeEmpresa')\">\r\n              </thead-sorter>\r\n            </th>\r\n            <th\r\n              class=\"text-center text-truncate hover\"\r\n              width=\"9%\"\r\n              *ngIf=\"columns.romaneio.active\"\r\n            >\r\n              <thead-sorter\r\n                value=\"Romaneio\"\r\n                [active]=\"orderBy == 'romaneio'\"\r\n                [sort]=\"orderType\"\r\n                (click)=\"setOrderBy('romaneio')\">\r\n              </thead-sorter>\r\n            </th>\r\n            <th\r\n              class=\"text-center text-truncate hover\"\r\n              width=\"10%\"\r\n              *ngIf=\"columns.dataPrev.active\"\r\n            >\r\n              <thead-sorter\r\n                value=\"Data Prev Entrega\"\r\n                [active]=\"orderBy == 'dataPrev'\"\r\n                [sort]=\"orderType\"\r\n                (click)=\"setOrderBy('dataPrev')\">\r\n              </thead-sorter>\r\n            </th>\r\n            <th\r\n              class=\"text-center text-truncate hover\"\r\n              width=\"10%\"\r\n              *ngIf=\"columns.dataEntrega.active\"\r\n            >\r\n              <thead-sorter\r\n                value=\"Data de Entrega\"\r\n                [active]=\"orderBy == 'dataEntrega'\"\r\n                [sort]=\"orderType\"\r\n                (click)=\"setOrderBy('dataEntrega')\">\r\n              </thead-sorter>\r\n            </th>\r\n            <th\r\n              class=\"text-truncate hover\"\r\n              width=\"28%\"\r\n              *ngIf=\"columns.nomeCliente.active\"\r\n            >\r\n              <thead-sorter\r\n                value=\"Cliente\"\r\n                [active]=\"orderBy == 'nomeCliente'\"\r\n                [sort]=\"orderType\"\r\n                (click)=\"setOrderBy('nomeCliente')\">\r\n              </thead-sorter>\r\n            </th>\r\n            <th\r\n              class=\"text-center text-truncate\"\r\n              width=\"5%\"\r\n              *ngIf=\"columns.sequencia.active\"\r\n            >Seq.</th>\r\n            <th\r\n              class=\"text-center text-truncate hover\"\r\n              width=\"9%\"\r\n              *ngIf=\"columns.pedido.active\"\r\n            >\r\n              <thead-sorter\r\n                value=\"Pedido\"\r\n                [active]=\"orderBy == 'pedido'\"\r\n                [sort]=\"orderType\"\r\n                (click)=\"setOrderBy('pedido')\">\r\n              </thead-sorter>\r\n            </th>\r\n            <th\r\n              class=\"text-center text-truncate hover\"\r\n              width=\"9%\"\r\n              *ngIf=\"columns.notaFiscal.active\"\r\n            >\r\n              <thead-sorter\r\n                value=\"Nota fiscal\"\r\n                [active]=\"orderBy == 'notaFiscal'\"\r\n                [sort]=\"orderType\"\r\n                (click)=\"setOrderBy('notaFiscal')\">\r\n              </thead-sorter>\r\n            </th>\r\n            <th\r\n              class=\"text-center text-truncate hover\"\r\n              width=\"9%\"\r\n              *ngIf=\"columns.dataEmissao.active\"\r\n            >\r\n              <thead-sorter\r\n                value=\"Data de Emissão\"\r\n                [active]=\"orderBy == 'dataEmissao'\"\r\n                [sort]=\"orderType\"\r\n                (click)=\"setOrderBy('dataEmissao')\">\r\n              </thead-sorter>\r\n            </th>\r\n            <th\r\n              class=\"text-center text-truncate\"\r\n              width=\"23%\"\r\n              *ngIf=\"columns.nomeSituacao.active\"\r\n            >\r\n              Situação</th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let item of pedidos\" (click)=\"viewDetails(item, modalDetalhes)\">\r\n            <td\r\n              class=\"text-center text-truncate hover\"\r\n              *ngIf=\"columns.nomeEmpresa.active\"\r\n            >\r\n              ({{ item.CD_FILI }})&nbsp;{{ item.NM_FILI }}\r\n            </td>\r\n            <td\r\n              class=\"text-center text-truncate hover\"\r\n              *ngIf=\"columns.romaneio.active\"\r\n            >\r\n              {{ item.CD_ROMA }}\r\n            </td>\r\n            <td\r\n              class=\"text-center text-truncate hover\"\r\n              *ngIf=\"columns.dataPrev.active\"\r\n            >\r\n              {{ item.DT_SAID_PREV | date: 'dd/MM/yyyy' }}\r\n            </td>\r\n            <td\r\n              class=\"text-center text-truncate hover\"\r\n              *ngIf=\"columns.dataEntrega.active\"\r\n            >\r\n              {{ item.ENTR_DT_ENTR | date: 'dd/MM/yyyy' }}\r\n            </td>\r\n            <td\r\n              class=\"text-truncate hover\"\r\n              *ngIf=\"columns.nomeCliente.active\"\r\n              isEllipsed\r\n            >\r\n              ({{ item?.CD_CLIE }}) {{ item?.NM_CLIE }}\r\n            </td>\r\n            <td\r\n              class=\"text-center text-truncate hover\"\r\n              *ngIf=\"columns.sequencia.active\"\r\n            >\r\n              {{ item?.ENTR_NR_SQNC }}\r\n            </td>\r\n            <td\r\n              class=\"text-center text-truncate hover\"\r\n              *ngIf=\"columns.pedido.active\"\r\n            >\r\n              {{ item.CD_PEDI }}\r\n            </td>\r\n            <td\r\n              class=\"text-center text-truncate hover\"\r\n              *ngIf=\"columns.notaFiscal.active\"\r\n            >\r\n              {{ item.NR_NOTA_FISC }}\r\n            </td>\r\n            <td\r\n              class=\"text-center text-truncate hover\"\r\n              *ngIf=\"columns.dataEmissao.active\"\r\n            >\r\n              {{ item.DT_NOTA_FISC | date: 'dd/MM/yyyy' }}\r\n            </td>\r\n            <td\r\n              class=\"text-center text-truncate hover\"\r\n              *ngIf=\"columns.nomeSituacao.active\"\r\n            >\r\n              {{ item.ENTR_DS_STAT }}\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n      <div *ngIf=\"!pedidosEmpty\">\r\n        Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\r\n        <pagination\r\n        [maxSize]=\"10\"\r\n          [totalItems]=\"totalItems\"\r\n          (pageChanged)=\"onPageChanged($event)\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPage\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\">\r\n        </pagination>\r\n      </div>\r\n    </div>\r\n    <empty-result message=\"Nenhuma informação encontrada\" class=\"mx-auto mt-5\" *ngIf=\"pedidosLoaded && pedidosEmpty\"></empty-result>\r\n  </div>\r\n</app-body>\r\n<ng-template #modalDetalhes>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">Detalhes</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <tabset>\r\n      <tab heading=\"Entrega\" class=\"border-right border-left border-bottom\">\r\n        <div class=\"p-3\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-4\">\r\n              <label>Cliente</label>\r\n              <div>({{ pedido?.CD_CLIE }}) {{ pedido?.NM_FANT }}</div>\r\n            </div>\r\n            <div class=\"form-group col-lg-3\">\r\n              <label>Motorista</label>\r\n              <div *ngIf=\"pedido?.NM_MOTO\">{{ pedido?.NM_MOTO }}</div>\r\n              <div *ngIf=\"!pedido?.NM_MOTO\">NÃO INFORMADO</div>\r\n            </div>\r\n            <div class=\"form-group col-lg-3\">\r\n              <label>Placa do veículo</label>\r\n              <div *ngIf=\"pedido?.PLAC\">{{ pedido?.PLAC }}</div>\r\n              <div *ngIf=\"!pedido?.PLAC\">NÃO INFORMADO</div>\r\n            </div>\r\n          </div>\r\n          <div id=\"scrollDetalhes\" class=\"mt-2 d-flex\">\r\n            <div class=\"col-4\">\r\n              <div *ngFor=\"let detalhe of entrega; let last = last; let first = first\" [ngClass]=\"fist ? 'mt-4' : ''\">\r\n                <div class=\"d-flex w-100\" [tooltip]=\"detalhe?.desricao\" placement=\"left\">\r\n                  <div class=\"rounded-circle text-white icon-40\" [ngClass]=\"detalhe?.check == 0 ? 'bg-secondary' : 'bg-primary'\">\r\n                    <i [class]=\"detalhe?.icone\"></i>\r\n                  </div>\r\n                  <strong class=\"my-auto ml-3 text-truncate\" [ngClass]=\"detalhe?.check == 1 ? 'text-primary' : ''\" style=\"width: calc(100% - 40px)\">\r\n                    {{ detalhe?.descricao }}\r\n                  </strong>\r\n                </div>\r\n                <div class=\"my-2\" *ngIf=\"!last\">\r\n                  <div class=\"ml-1\">\r\n                    <div class=\"border-left border-secondary ml-3 p-2\">\r\n                      <div *ngIf=\"detalhe?.check === 1\"></div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-8 p-0 form-group\">\r\n              <label>FOTO DO CANHOTO</label>\r\n              <div *ngIf=\"imageLoading\">Carregando foto do canhoto...</div>\r\n              <div *ngIf=\"pedido?.ENTR_COMP_FOTO\">\r\n                <img [hidden]=\"imageLoading\" [src]=\"pedido?.ENTR_COMP_FOTO\" class=\"border rounded shadow-sm w-100\" (load)=\"onImageLoad()\">\r\n              </div>\r\n              <empty-result message=\"Nehuma imagem encontrada\" *ngIf=\"!pedido?.ENTR_COMP_FOTO && !imageLoading\"></empty-result>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </tab>\r\n      <tab heading=\"Romaneio\" class=\"border-right border-left border-bottom\">\r\n        <div class=\"px-3 pt-3\" *ngIf=\"!detalhesRomaneioLoading && !detalhesRomaneioEmpty\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-3\">\r\n              <label>Romaneio</label>\r\n              <div>{{ pedido?.CD_ROMA }}</div>\r\n            </div>\r\n            <!-- <div class=\"form-group col-lg-3\">\r\n              <label>Região da entrega</label>\r\n              <div>{{ pedido }}</div>\r\n            </div> -->\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              <subtitles\r\n                [data]=\"subtitles\"\r\n                [show]=\"!noResult\">\r\n              </subtitles>\r\n            </div>\r\n          </div>\r\n          <custom-table [config]=\"tableConfig\">\r\n            <ng-template #thead let-thead>\r\n              <tr>\r\n                <th>Cliente</th>\r\n                <th class=\"text-center\">Seq.</th>\r\n                <th class=\"text-center\">Nota fiscal</th>\r\n                <th class=\"text-center\">Pedido</th>\r\n                <th class=\"text-center\">Código</th>\r\n                <th>Material</th>\r\n                <th class=\"text-center\">Peso</th>\r\n                <th>Endereço</th>\r\n              </tr>\r\n            </ng-template>\r\n            <ng-template #tbody let-tbody>\r\n              <tr *ngFor=\"let item of detalhesRomaneio\" [ngStyle]=\"getSelectedStyle(item)\">\r\n                <td\r\n                  class=\"hover\"\r\n                  [ngClass]=\"classStatusBorder(item)\">\r\n                  ({{ item.CD_CLIE }}) {{ item.NM_FANT }}\r\n                </td>\r\n                <td class=\"text-center\">{{ item.NR_SQNC }}</td>\r\n                <td class=\"text-center\">{{ item.NOTA_FISC }}</td>\r\n                <td class=\"text-center\">{{ item.CD_PEDI }}</td>\r\n                <td class=\"text-center\">{{ item.CD_PROD }}</td>\r\n                <td>{{ item.NM_PROD }}</td>\r\n                <td class=\"text-center\">{{ item.TT_PROD_PESO  | number: '0.3-3' }}</td>\r\n                <td>{{ item.DS_ENDE }}</td>\r\n              </tr>\r\n            </ng-template>\r\n          </custom-table>\r\n        </div>\r\n        <empty-result message=\"Nenhuma informação encontrada\" *ngIf=\"detalhesRomaneioEmpty\"></empty-result>\r\n        <div class=\"spinner-border text-primary\" role=\"status\" *ngIf=\"!detalhesRomaneioLoading && detalhesRomaneioEmpty\">\r\n          <span class=\"sr-only\">Loading...</span>\r\n        </div>\r\n      </tab>\r\n    </tabset>\r\n  </div>\r\n</ng-template>\r\n");

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
        this.API = `http://23.254.204.187/api/comercial/tid-software`;
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