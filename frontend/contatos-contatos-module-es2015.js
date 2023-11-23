(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contatos-contatos-module"],{

/***/ "0OhI":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/comercial/akna/contatos/formulario/clientes/clientes.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2FrbmEvY29udGF0b3MvZm9ybXVsYXJpby9jbGllbnRlcy9jbGllbnRlcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "2NBD":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/akna/contatos/formulario/formulario.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen> -->\r\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\r\n<app-header appTitle=\"Cadastro de Contatos\">\r\n  <button\r\n    [disabled]=\"form.valid === false\"\r\n    (click)=\"postContatos()\"\r\n    >\r\n    Salvar\r\n  </button>\r\n  <button\r\n  type=\"button\"\r\n  (click)=\"onFilter()\">\r\n  Filtrar\r\n</button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <form [formGroup]=\"form\" autocomplete=\"off\" >\r\n    <fieldset  class=\"col-12\">\r\n      <fieldset class=\"border rounded shadow-sm col-12 pt-2 mx-auto\">\r\n        <legend>Datos de Lista de Contactos</legend>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-6 pl-0\">\r\n            <label for=\"DESCRICAO\">Descripción</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"DESCRICAO\"\r\n              formControlName=\"DESCRICAO\"\r\n              placeholder=\"Digite...\"\r\n              [ngClass]=\"onFieldError('DESCRICAO') + ' ' + onFieldRequired('DESCRICAO')\"\r\n            />\r\n            <invalid-form-control [show]=\"onFieldInvalid('DESCRICAO')\" message=\"Descrição é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n      </fieldset>\r\n    </fieldset>\r\n  </form><br><br>\r\n  <blockquote class=\"blockquote  text-center\" *ngIf=\"!idLista\">\r\n    <p class=\"mb-0 text-danger\">Associação de Clientes</p>\r\n    <footer class=\"blockquote-footer\">Associação de clientes é realizada somente com registros já existentes!</footer>\r\n  </blockquote>\r\n  <div  >\r\n    <hr>\r\n    <fieldset  class=\"col-12\">\r\n      <fieldset class=\"border rounded shadow-sm col-12 pt-2 mx-auto\">\r\n        <legend>Búsqueda de Clientes</legend>\r\n        <comercial-akna-contatos-clientes></comercial-akna-contatos-clientes>\r\n        <br>\r\n      </fieldset>\r\n    </fieldset>\r\n  </div>\r\n</app-body>\r\n");

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

/***/ "5Ujk":
/*!************************************************************************************!*\
  !*** ./src/app/modules/comercial/akna/contatos/formulario/formulario.component.ts ***!
  \************************************************************************************/
/*! exports provided: ComercialAknaContatosFormularioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialAknaContatosFormularioComponent", function() { return ComercialAknaContatosFormularioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./formulario.component.html */ "2NBD");
/* harmony import */ var _formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formulario.component.scss */ "bIcV");
/* harmony import */ var _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../../shared/services/core/date.service */ "Rk3r");
/* harmony import */ var _shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../../shared/services/core/router.service */ "w8rm");
/* harmony import */ var _contatos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../contatos.service */ "916M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






//Angular






//Bootstrap

//rxjs

let ComercialAknaContatosFormularioComponent = class ComercialAknaContatosFormularioComponent {
    constructor(formBuilder, pnotify, activatedRoute, router, localeService, titleService, atividadesService, contatoService, routerService, dateService, route) {
        this.formBuilder = formBuilder;
        this.pnotify = pnotify;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.localeService = localeService;
        this.titleService = titleService;
        this.atividadesService = atividadesService;
        this.contatoService = contatoService;
        this.routerService = routerService;
        this.dateService = dateService;
        this.route = route;
        this.breadCrumbTree = [];
        this.formData = [];
        this.compararData = null;
        //loading
        this.loading = true;
        this.loadingNavBar = false;
        this.localeService.use('pt-br');
        this.bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' }, { adaptivePosition: true }, { showWeekNumbers: false });
    }
    ngOnInit() {
        this.registrarAcesso();
        this.setBreadCrumb();
        this.setFormBuilder();
        this.onActivatedRoute();
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
                routerLink: '/postContatos/home',
            },
            {
                descricao: 'Akna',
                routerLink: `/comercial/akna/${id}`,
            },
            {
                descricao: 'Contatos',
                routerLink: `../`,
            },
            {
                descricao: this.appTitle,
            },
        ];
    }
    onActivatedRoute() {
        const params = this.activatedRoute.snapshot.params;
        if (params.hasOwnProperty('id')) {
            this.idLista = params.id;
        }
    }
    //formulario
    setFormBuilder() {
        this.form = this.formBuilder.group({
            ID: [null],
            DESCRICAO: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
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
    onFilter() {
        this.contatoService.onEventFilter();
    }
    postContatos() {
        this.loadingNavBar = true;
        this.contatoService
            .postContatos(this.form.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(() => {
            this.loadingNavBar = false;
        }))
            .subscribe({
            next: (response) => {
                if (response.status === 200) {
                    this.pnotify.success();
                    this.router.navigate(['../'], {
                        relativeTo: this.activatedRoute,
                    });
                }
                else {
                    this.pnotify.error();
                }
            },
            error: (error) => {
                this.pnotify.error();
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
        return _params;
    }
};
ComercialAknaContatosFormularioComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__["BsLocaleService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_9__["TitleService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"] },
    { type: _contatos_service__WEBPACK_IMPORTED_MODULE_5__["ComercialAknaContatosService"] },
    { type: _shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_4__["RouterService"] },
    { type: _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_3__["DateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
ComercialAknaContatosFormularioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: 'comercial-akna-contatos-formulario',
        template: _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__["BsLocaleService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_9__["TitleService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"],
        _contatos_service__WEBPACK_IMPORTED_MODULE_5__["ComercialAknaContatosService"],
        _shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_4__["RouterService"],
        _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_3__["DateService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
], ComercialAknaContatosFormularioComponent);



/***/ }),

/***/ "7R0/":
/*!**************************************************************************!*\
  !*** ./src/app/modules/comercial/akna/contatos/lista/lista.component.ts ***!
  \**************************************************************************/
/*! exports provided: ComercialAknaContatosListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialAknaContatosListaComponent", function() { return ComercialAknaContatosListaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lista.component.html */ "hlq3");
/* harmony import */ var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lista.component.scss */ "Xj53");
/* harmony import */ var _contatos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../contatos.service */ "916M");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../../shared/modules/confirm-modal/confirm-modal.service */ "FOez");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");






//angular



//servicos


// rxjs


let ComercialAknaContatosListaComponent = class ComercialAknaContatosListaComponent {
    /* Pagination */
    constructor(route, pnotify, activatedRoute, formBuilder, localeService, contatoService, confirmModalService, routerService, dateService) {
        this.route = route;
        this.pnotify = pnotify;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.localeService = localeService;
        this.contatoService = contatoService;
        this.confirmModalService = confirmModalService;
        this.routerService = routerService;
        this.dateService = dateService;
        this.noResult = false;
        this.loading = false; //Loading FullPage
        this.loadingNavBar = false; //Loading do NAVBAR
        this.tableConfig = { subtitleBorder: true };
        this.contatos = [];
        this.contatosFiltrados = [];
        // Tipos de Situação dos Tipos de Items (Ativo/Inativo)
        this.tipos = [
            {
                cod: 'N',
                nome: 'Ativos',
            },
            {
                cod: 'S',
                nome: 'Arquivado',
            },
        ];
        this.subtitles = [
            {
                id: 1,
                text: 'ATIVO',
                color: 'green',
            },
            {
                id: 2,
                text: 'ARQUIVADO',
                color: 'red',
            },
        ];
        /* Pagination */
        this.itemsPerPage = 10;
        this.currentPage = 1;
        this.begin = 0;
        this.end = 10;
        this.localeService.use('pt-br');
        this.bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' }, { adaptivePosition: true }, { showWeekNumbers: false });
    }
    ngOnInit() {
        this.buildForm();
        this.setBreadCrumb();
        this.onActivatedRoute();
    }
    ngOnDestroy() {
        this.$activatedRouteSubscription.unsubscribe();
    }
    onActivatedRoute() {
        this.$activatedRouteSubscription =
            this.activatedRoute.queryParams.subscribe((response) => {
                const _response = this.routerService.getBase64UrlParams(response);
                this.form.patchValue(_response);
                this.getContatos(this.getParams());
            });
    }
    getContatos(params) {
        this.loading = true;
        this.contatoService
            .getContatos(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(() => {
            this.loading = false;
            this.loadingNavBar = false;
        }))
            .subscribe({
            next: (response) => {
                if (response.status === 200) {
                    this.contatos = response.body;
                    this.contatosFiltrados = response.body;
                    this.totalItems = response.body.length;
                    this.loading = false;
                }
                else {
                    this.noResult = true;
                    this.contatos = [];
                }
            },
            error: (error) => {
                this.pnotify.error();
                this.noResult = true;
            }
        });
    }
    buildForm() {
        this.form = this.formBuilder.group({
            ID: [null],
            DESCRICAO: [null],
            ARQUIVADA: [null],
            CONTATOS_VALIDOS: [null],
            PAGI: [1],
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
                descricao: 'Akna',
                routerLink: `/comercial/akna/${id}`,
            },
            {
                descricao: 'Contatos',
            },
        ];
    }
    onFilter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { ID, DESCRICAO, ARQUIVADA } = this.getParams();
            let _params = {};
            if (ID)
                _params['ID'] = ID;
            if (DESCRICAO)
                _params['DESCRICAO'] = DESCRICAO;
            if (ARQUIVADA)
                _params['ARQUIVADA'] = ARQUIVADA;
            if (Object.keys(_params).length === 0) {
                this.contatosFiltrados = this.contatos;
                return;
            }
            const promise = new Promise((resolve, reject) => {
                try {
                    const filter = this.contatos.filter((contato) => {
                        let _match = false;
                        for (const key in _params) {
                            if (key === 'DESCRICAO') {
                                if (contato[key]
                                    .toString()
                                    .toLowerCase()
                                    .indexOf(_params[key].toString().toLowerCase()) == -1) {
                                    _match = false;
                                    break;
                                }
                            }
                            else if (contato[key] !== _params[key]) {
                                _match = false;
                                break;
                            }
                            _match = true;
                        }
                        return _match;
                    });
                    resolve(filter);
                }
                catch (error) {
                    reject(error);
                }
            });
            yield promise
                .then((contatos) => {
                this.contatosFiltrados = contatos;
                console.log(contatos);
            })
                .catch((error) => {
                console.log(error);
            });
        });
    }
    openRegister(contato) {
        this.route.navigate(['../cadastro'], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams(contato),
        });
    }
    onPageChanged(event) {
        this.begin = (event.page - 1) * event.itemsPerPage;
        this.end = event.page * event.itemsPerPage;
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
    classStatusBorder(contato) {
        let borderClass;
        if (contato.ARQUIVADA == 'N') {
            borderClass = 'border-success';
        }
        else if (contato.ARQUIVADA == 'S') {
            borderClass = 'border-danger';
        }
        return borderClass;
    }
};
ComercialAknaContatosListaComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"] },
    { type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_4__["BsLocaleService"] },
    { type: _contatos_service__WEBPACK_IMPORTED_MODULE_3__["ComercialAknaContatosService"] },
    { type: _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_5__["ConfirmModalService"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__["DateService"] }
];
ComercialAknaContatosListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'comercial-akna-contatos-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"],
        ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_4__["BsLocaleService"],
        _contatos_service__WEBPACK_IMPORTED_MODULE_3__["ComercialAknaContatosService"],
        _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_5__["ConfirmModalService"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__["DateService"]])
], ComercialAknaContatosListaComponent);



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
        this.API = `http://23.254.204.187/api/comercial/clientes`;
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
    getVendedorCiudad(id_vendedor) {
        const httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('id_vendedor', id_vendedor);
        return this.http
            .get(`${this.API}/vendedor/ciudad`, { params: httpParams })
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
    sapUpdateClient(codigo_cliente, data) {
        console.log("update Cliente:", data);
        return this.http
            .post(`${this.API}/pesquisa/updatesap`, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    sapUpdateContacto(codigo_cliente, data) {
        console.log("update Contacto:", data);
        return this.http
            .post(`${this.API}/pesquisa/updatesapcontacto`, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getContatosResumido(codCliente) {
        return this.http
            .get(`${this.API}/pesquisa/contactodetalle/${codCliente}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getTipoClientes() {
        return this.http.get(`${this.API}/tipo_cliente`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
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
    sapPostClient(data) {
        return this.http
            .post(`${this.API}/postsap`, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(0));
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

/***/ "916M":
/*!*********************************************************************!*\
  !*** ./src/app/modules/comercial/akna/contatos/contatos.service.ts ***!
  \*********************************************************************/
/*! exports provided: ComercialAknaContatosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialAknaContatosService", function() { return ComercialAknaContatosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");


// services


let ComercialAknaContatosService = class ComercialAknaContatosService {
    constructor(http) {
        this.http = http;
        this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    getContatos(params) {
        return this.http.get(`${this.API}/comercial/integracoes/akna/listas-contatos`, {
            params: params,
            observe: 'response',
        });
    }
    postContatos(contatos) {
        return this.http.post(`${this.API}/comercial/akna/contatos`, contatos, {
            observe: 'response',
        });
    }
    // -------------------------------------------Clientes-------------------------------
    getClientes(params) {
        return this.http.get(`${this.API}/comercial/integracoes/akna/listas-contatos-clientes`, {
            params: params,
            observe: 'response',
        });
    }
    getSetorAtividades(params) {
        return this.http.get(`${this.API}/comercial/emailMarketing/associacao/setor-atividade`, {
            params: params,
            observe: 'response',
        });
    }
    postVinculoClientes(params) {
        return this.http.post(`${this.API}`, params, {
            observe: 'response',
        });
    }
    onEventLoading(value) {
        this.event.emit({ loading: value });
    }
    onEventFilter() {
        this.event.emit({ filter: true });
    }
};
ComercialAknaContatosService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
ComercialAknaContatosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], ComercialAknaContatosService);



/***/ }),

/***/ "Ade5":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/akna/contatos/formulario/clientes/clientes.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div>\r\n  <advanced-filter>\r\n    <form [formGroup]=\"formFilter\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-lg-3  pl-0\">\r\n          <label for=\"buscarPor\">Buscar por</label>\r\n          <select\r\n            class=\"form-control custom-select\"\r\n            id=\"buscarPor\"\r\n            formControlName=\"buscarPor\">\r\n            <option value=\"1\">Código, nome fantasia ou razão social</option>\r\n            <option value=\"2\">CPF ou CNPJ</option>\r\n            <option value=\"3\">Cidade</option>\r\n            <option value=\"4\">Código SAP</option>\r\n            <option value=\"5\">Contactos</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group col-lg-4  pl-0\">\r\n          <label for=\"pesquisa\">Termo de pesquisa</label>\r\n          <input\r\n            type=\"text\"\r\n            placeholder=\"digite...\"\r\n            class=\"form-control\"\r\n            formControlName=\"pesquisa\"\r\n            (keydown.enter)=\"onFilter()\">\r\n        </div>\r\n        <div class=\"form-group col-lg-3  pl-0\">\r\n          <label for=\"linhas\">Linha</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"true\"\r\n            [items]=\"linhas\"\r\n            [virtualScroll]=\"true\"\r\n            dropdownPosition=\"bottom\"\r\n            placeholder=\"Selecione...\"\r\n            labelForId=\"ID_LINH\"\r\n            bindLabel=\"NM_LINH\"\r\n            bindValue=\"linha\"\r\n            id=\"linha\"\r\n            formControlName=\"linha\"\r\n            >\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-lg-2  pl-0\">\r\n          <label for=\"tipoPessoa\">Tipo de pessoa</label>\r\n          <select\r\n            class=\"form-control custom-select\"\r\n            id=\"tipoPessoa\"\r\n            formControlName=\"tipoPessoa\">\r\n            <option value=\"F\">Pessoa física</option>\r\n            <option value=\"J\">Pessoa jurídica</option>\r\n            <option value=\"T\">Todos</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-lg-3  pl-0\">\r\n          <label for=\"tipoData\">Tipo de Data</label>\r\n          <select\r\n            class=\"form-control custom-select\"\r\n            id=\"tipoData\"\r\n            formControlName=\"tipoData\">\r\n            <option value=\"1\">Data de Inclusão</option>\r\n            <option value=\"2\">Data do Último Faturamento</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group col-md-2 pl-0\">\r\n          <label for=\"dataInicio\">Data Inicial</label>\r\n          <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\r\n            </div>\r\n            <input\r\n            class=\"form-control\"\r\n            id=\"dataInicio\"\r\n            type=\"text\"\r\n            bsDatepicker\r\n            data-placement=\"top\"\r\n            placeholder=\"Selecione...\"\r\n            [bsConfig]=\"bsConfig\"\r\n            formControlName=\"dataInicio\"\r\n            >\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group col-md-2 pl-0\">\r\n          <label for=\"dataFinal\">Data Final</label>\r\n          <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\r\n            </div>\r\n            <input\r\n            class=\"form-control\"\r\n            id=\"dataFinal\"\r\n            type=\"text\"\r\n            bsDatepicker\r\n            data-placement=\"top\"\r\n            placeholder=\"Selecione...\"\r\n            [bsConfig]=\"bsConfig\"\r\n            formControlName=\"dataFinal\"\r\n            >\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group col-lg-3  pl-0\">\r\n          <label for=\"situacao\">Situação</label>\r\n          <select\r\n            class=\"form-control custom-select\"\r\n            id=\"situacao\"\r\n            formControlName=\"situacao\">\r\n            <option value=\"Ativo\">Ativos</option>\r\n            <option value=\"Inativo\">Inativos</option>\r\n            <option value=\"Potenci\">Potenciais</option>\r\n            <option value=\"Arquivo\">Arquivados</option>\r\n            <option value=\"T\">Todos</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group col-lg-2  pl-0\">\r\n          <label for=\"registros\">Registros</label>\r\n          <select\r\n            class=\"form-control custom-select\"\r\n            id=\"registros\"\r\n            formControlName=\"registros\">\r\n            <option>10</option>\r\n            <option>25</option>\r\n            <option>50</option>\r\n            <option>100</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-lg-3  pl-0\">\r\n          <label for=\"gerentes\">Gerencia</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"true\"\r\n            [items]=\"gerentes\"\r\n            [virtualScroll]=\"true\"\r\n            dropdownPosition=\"bottom\"\r\n            placeholder=\"Selecione...\"\r\n            labelForId=\"gerente\"\r\n            bindLabel=\"DS_GERE\"\r\n            bindValue=\"gerente\"\r\n            id=\"gerente\"\r\n            formControlName=\"gerente\"\r\n            >\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-lg-4  pl-0\">\r\n          <label for=\"vendedores\">Promotor</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"true\"\r\n            [items]=\"vendedores\"\r\n            [virtualScroll]=\"true\"\r\n            dropdownPosition=\"bottom\"\r\n            placeholder=\"Selecione...\"\r\n            labelForId=\"vendedor\"\r\n            bindLabel=\"nome\"\r\n            bindValue=\"id\"\r\n            id=\"vendedor\"\r\n            formControlName=\"vendedor\"\r\n            >\r\n          </ng-select>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </advanced-filter>\r\n  <div class=\"row mt-3\" *ngIf=\"dataLoaded && clientes.length > 0\">\r\n    <div class=\"col-12\" *ngIf=\"clientes.length > 1\">\r\n      <div class=\"custom-control custom-checkbox mr-sm-2 hover\">\r\n        <input\r\n        class=\"custom-control-input hover\"\r\n        type=\"checkbox\"\r\n        id=\"toggleAll\"\r\n        (click)=\"onToggleAll()\">\r\n        <label class=\"custom-control-label hover font-weight-bold\" for=\"toggleAll\">\r\n          SELECIONAR OS {{totalClientes}} REGISTROS ENCONTRADOS\r\n        </label>\r\n      </div>\r\n    </div>\r\n    <br><br>\r\n    <div class=\"col-12\">\r\n      <custom-table [config]=\"tableConfig\">\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n            <th scope=\"col\"></th>\r\n            <th\r\n              scope=\"col\"\r\n              class=\"text-center hover\"\r\n              (click)=\"setOrderBy('codCliente')\">\r\n              <thead-sorter value=\"Código\" [active]=\"orderBy == 'codCliente'\" [sort]=\"orderType\"></thead-sorter>\r\n            </th>\r\n            <th\r\n              scope=\"col\"\r\n              class=\"hover\"\r\n              (click)=\"setOrderBy('razaoSocial')\">\r\n              <thead-sorter value=\"Razon Social\" [active]=\"orderBy == 'razaoSocial'\" [sort]=\"orderType\"></thead-sorter>\r\n            </th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let cliente of clientes\" [class.table-active]=\"cliente.codCliente == clienteSelecionado\">\r\n            <td class=\"text-center\" style=\"width: 5%\">\r\n              <btn-icon\r\n                [icon]=\"cliente.checked ? 'fas fa-check-square' : 'far fa-square'\"\r\n                size=\"small\"\r\n                (click)=\"onCheckClientes(cliente)\">\r\n              </btn-icon>\r\n            </td>\r\n            <td class=\"text-center hover\" (click)=\"onCheckClientes(cliente)\">{{ cliente.codCliente | number: '6.0-0' }}</td>\r\n            <td (click)=\"onCheckClientes(cliente)\">\r\n              <i class=\"text-success  fas fa-circle mr-3\" tooltip=\"Ativo\" *ngIf= \"cliente.situacao == 'Ativo'\" ></i>\r\n              <i class=\"text-danger fas fa-circle mr-3\" tooltip=\"Inativo\" *ngIf= \"cliente.situacao == 'Inativo'\" ></i>\r\n              <i class=\"text-primary fas fa-circle mr-3\" tooltip=\"Potencial\" *ngIf= \"cliente.situacao == 'Potenci'\"></i>\r\n              <i class=\"text-warning fas fa-circle mr-3\"  tooltip=\"Arquivado\" *ngIf= \"cliente.situacao == 'Arquivo'\" ></i>\r\n              <span>{{ cliente.razaoSocial}}</span>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n      <div class=\"d-flex justify-content-center mt-3\" *ngIf=\"clientes[0]['total'] > itemsPerPage\">\r\n        <pagination\r\n          [maxSize]=\"maxSize\"\r\n          [(totalItems)]=\"totalClientes\"\r\n          (pageChanged)=\"onPageChanged($event)\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPage\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\">\r\n        </pagination>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

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

/***/ "XhaH":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/comercial/akna/contatos/formulario/clientes/clientes.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ComercialAknaContatosClientesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialAknaContatosClientesComponent", function() { return ComercialAknaContatosClientesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_clientes_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./clientes.component.html */ "Ade5");
/* harmony import */ var _clientes_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clientes.component.scss */ "0OhI");
/* harmony import */ var _services_vendedores_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../services/vendedores.service */ "4xRd");
/* harmony import */ var _cadastros_associacao_linhas_associacao_linhas_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../cadastros/associacao-linhas/associacao-linhas.service */ "LreX");
/* harmony import */ var _contatos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../contatos.service */ "916M");
/* harmony import */ var _shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../../../shared/services/core/title.service */ "dNnS");
/* harmony import */ var _shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../../../shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var _services_clientes_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../../services/clientes.service */ "8ouN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");









//angular



//services

//rxjs


let ComercialAknaContatosClientesComponent = class ComercialAknaContatosClientesComponent {
    constructor(activatedRoute, router, contatosService, clientesService, formBuilder, pnotifyService, atividadesService, localeService, comercialService, setoresLinhaService, titleService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.contatosService = contatosService;
        this.clientesService = clientesService;
        this.formBuilder = formBuilder;
        this.pnotifyService = pnotifyService;
        this.atividadesService = atividadesService;
        this.localeService = localeService;
        this.comercialService = comercialService;
        this.setoresLinhaService = setoresLinhaService;
        this.titleService = titleService;
        this.loaderNavbar = false;
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: '/comercial/home',
            },
            {
                descricao: 'Busqueda de clientes',
            },
        ];
        this.tableConfig = {
            subtitleBorder: false,
        };
        this.$subscriptions = [];
        this.linhas = [];
        this.vendedores = [];
        this.dataLoaded = false;
        this.dadosCadastraisLoaded = false;
        this.dadosCadastraisEmpty = false;
        this.contatosLoaded = false;
        this.contatosEmpty = false;
        this.toggleAll = false;
        this.searchSubmitted = false;
        this.showAdvancedFilter = true;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.matricula = this.currentUser['info']['matricula'];
        this.ativos = 0;
        this.inativos = 0;
        this.potencial = 0;
        this.arquivados = 0;
        this.orderBy = 'codCliente';
        this.orderType = 'desc';
        this.maxSize = 10;
        this.itemsPerPage = 50;
        this.currentPage = 1;
        this.totalClientes = 0;
        this.gerentes = [];
        this.clientes = [];
        this.allClientes = [];
        this.clientesPagination = [];
        this.dadosCadastrais = {};
        this.contatos = [];
        {
            this.localeService.use('pt-br');
            this.bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' }, { adaptivePosition: true }, { showWeekNumbers: false });
        }
        this.pnotifyService.getPNotify();
    }
    ngOnInit() {
        this.registrarAcesso();
        this.onEventSubscription();
        this.getFormFilters();
        this.setFormFilter();
        this.titleService.setTitle('Busqueda de clientes');
    }
    registrarAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
    }
    getFormFilters() {
        if (!this.idLista) {
            this.setoresLinhaService
                .getLinhas()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(() => { }))
                .subscribe((response) => {
                if (response.status === 200) {
                    this.linhas = response.body['data'];
                }
            });
            this.comercialService
                .getVendedores()
                .pipe()
                .subscribe((response) => {
                if (response.responseCode === 200) {
                    this.vendedores = response.result;
                }
            });
        }
    }
    setFormFilter() {
        const formValue = this.checkRouterParams();
        this.formFilter = this.formBuilder.group({
            pesquisa: [formValue['pesquisa']],
            linha: [formValue['linha']],
            gerente: [formValue['gerente']],
            dataFinal: [formValue['dataFinal']],
            dataInicio: [formValue['dataInicio']],
            vendedor: [formValue['vendedor']],
            tipoPessoa: [formValue['tipoPessoa'], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required],
            buscarPor: [formValue['buscarPor'], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required],
            tipoData: [formValue['tipoData'], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required],
            situacao: [formValue['situacao'], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required],
            pagina: [formValue['pagina']],
            registros: [formValue['registros'], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required],
        });
    }
    checkRouterParams() {
        let formValue = {
            pesquisa: null,
            buscarPor: 1,
            tipoData: 1,
            situacao: 'Ativo',
            tipoPessoa: 'T',
            pagina: 1,
            linha: null,
            registros: this.itemsPerPage,
        };
        const queryParams = this.activatedRoute.snapshot.queryParams;
        if (Object.keys(queryParams).length > 0) {
            let params = atob(queryParams['q']);
            params = JSON.parse(params);
            this.setSubmittedSearch();
            this.search(params);
            if (params['registros']) {
                this.itemsPerPage = params['registros'];
            }
            Object.keys(formValue).forEach((formKey) => {
                Object.keys(params).forEach((paramKey) => {
                    if (formKey == paramKey && formValue[formKey] != params[paramKey]) {
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
        const params = this.activatedRoute.snapshot.params;
        if (params.hasOwnProperty('id')) {
            this.idLista = params.id;
        }
        return formValue;
    }
    setOrderBy(column) {
        if (this.orderBy === column) {
            if (this.orderType == 'desc') {
                this.orderType = 'asc';
            }
            else if (this.orderType == 'asc') {
                this.orderType = 'desc';
            }
        }
        else {
            this.orderBy = column;
            this.orderType = 'asc';
        }
        this.onFilter();
    }
    onAdvancedFilter() {
        this.showAdvancedFilter = !this.showAdvancedFilter;
    }
    filterByStatus(status) {
        this.formFilter.get('situacao').setValue(status);
        this.onFilter();
    }
    onFilter() {
        this.contatosService.onEventLoading(true);
        let params = this.formFilter.value;
        params['orderBy'] = this.orderBy;
        params['orderType'] = this.orderType;
        this.itemsPerPage = this.formFilter.value['registros'];
        this.currentPage = 1;
        this.setRouterParams(params);
    }
    setSubmittedSearch() {
        this.searchSubmitted = true;
    }
    setRouterParams(params) {
        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: { q: btoa(JSON.stringify(params)) },
            queryParamsHandling: 'merge',
        });
        this.setSubmittedSearch();
        this.search(params);
    }
    search(params) {
        if (this.searchSubmitted) {
            this.loaderNavbar = true;
            this.dataLoaded = false;
            this.clientes = [];
            this.buscandoPor = params['buscarPor'];
            this.tiposDatas = params['tipoData'];
            this.pesquisa = params['pesquisa'];
            this.clientesService
                .getClientes(params)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(() => {
                this.loaderNavbar = false;
                this.dataLoaded = true;
            }))
                .subscribe({
                next: (response) => {
                    if (response['responseCode'] === 200) {
                        const clientes = response.result.analitico;
                        // clientes.map(function (el: any) {
                        //   el.checked = 0;
                        // });
                        this.clientes = clientes.slice(0, this.itemsPerPage);
                        this.allClientes =
                            response['result']['sintetico'][1]['quantidade'];
                        this.totalClientes = this.clientes[0]['total'];
                    }
                    else if (response['responseCode'] === 204) {
                        this.ativos = 0;
                        this.inativos = 0;
                        this.potencial = 0;
                        this.arquivados = 0;
                        this.pnotifyService.notice('Nenhum registro encontrado!');
                    }
                },
                error: (error) => {
                    this.pnotifyService.error();
                }
            });
        }
    }
    onToggleAll() {
        this.toggleAll = !this.toggleAll;
        this.clientes.map((cliente) => (cliente.checked = this.toggleAll));
        this.postVinculoAllClientes();
    }
    onCheckClientes(cliente) {
        cliente.checked = !cliente.checked;
        this.postVinculoClientes(cliente);
    }
    postVinculoAllClientes(cliente) {
        let _params = {};
        this.contatosService.onEventLoading(true);
        _params['filtros'] = this.formFilter.value;
        _params['idLista'] = this.idLista;
        if (this.toggleAll) {
            _params['selectAll'] = '1';
        }
        else {
            _params['selectAll'] = '0';
        }
        this.contatosService
            .postVinculoClientes(_params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(() => {
            this.contatosService.onEventLoading(false);
        }))
            .subscribe({
            next: (response) => {
                this.pnotifyService.success();
            },
            error: (error) => {
                this.pnotifyService.error();
            }
        });
    }
    postVinculoClientes(cliente) {
        let _params = {};
        this.contatosService.onEventLoading(true);
        _params['situacao'] = cliente.checked == true ? 1 : 0;
        _params['codCliente'] = cliente.codCliente;
        _params['idLista'] = this.idLista;
        this.contatosService
            .postVinculoClientes(_params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(() => {
            this.contatosService.onEventLoading(false);
        }))
            .subscribe({
            next: (response) => {
                this.pnotifyService.success();
            },
            error: (error) => {
                this.pnotifyService.error();
            }
        });
    }
    classStatusBorder(status) {
        let borderClass;
        if (status == 'Ativo') {
            borderClass = 'border-success';
        }
        else if (status == 'Inativo') {
            borderClass = 'border-danger';
        }
        else if (status == 'Potenci') {
            borderClass = 'border-primary';
        }
        else if (status == 'Arquivo') {
            borderClass = 'border-secondary';
        }
        return borderClass;
    }
    onEventSubscription() {
        this.$subscriptions[2] = this.contatosService.event.subscribe((response) => {
            if (response.filter === true) {
                this.onFilter();
            }
        });
    }
    onPageChanged(event) {
        if (this.formFilter.value['pagina'] != event.page) {
            this.resetClienteSelecionado();
            this.formFilter.value['pagina'] = event.page;
            this.onFilter();
        }
    }
    onPreCadastroCpfCnpj() {
        let pesquisa = this.pesquisa.replace(/\D/g, '');
        if (pesquisa.length === 11) {
            return { cpf: pesquisa };
        }
        else if (pesquisa.length === 14) {
            return { cnpj: pesquisa };
        }
        return {};
    }
    handleCounter(value) {
        return value.toFixed(0);
    }
    resetClienteSelecionado() {
        this.clienteSelecionado = null;
    }
};
ComercialAknaContatosClientesComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] },
    { type: _contatos_service__WEBPACK_IMPORTED_MODULE_5__["ComercialAknaContatosService"] },
    { type: _services_clientes_service__WEBPACK_IMPORTED_MODULE_8__["ComercialClientesService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__["PNotifyService"] },
    { type: _shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__["AtividadesService"] },
    { type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__["BsLocaleService"] },
    { type: _services_vendedores_service__WEBPACK_IMPORTED_MODULE_3__["ComercialVendedoresService"] },
    { type: _cadastros_associacao_linhas_associacao_linhas_service__WEBPACK_IMPORTED_MODULE_4__["ComercialCadastrosAssociacaoLinhasService"] },
    { type: _shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_6__["TitleService"] }
];
ComercialAknaContatosClientesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"])({
        selector: 'comercial-akna-contatos-clientes',
        template: _raw_loader_clientes_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_clientes_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"],
        _contatos_service__WEBPACK_IMPORTED_MODULE_5__["ComercialAknaContatosService"],
        _services_clientes_service__WEBPACK_IMPORTED_MODULE_8__["ComercialClientesService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__["PNotifyService"],
        _shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__["AtividadesService"],
        ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__["BsLocaleService"],
        _services_vendedores_service__WEBPACK_IMPORTED_MODULE_3__["ComercialVendedoresService"],
        _cadastros_associacao_linhas_associacao_linhas_service__WEBPACK_IMPORTED_MODULE_4__["ComercialCadastrosAssociacaoLinhasService"],
        _shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_6__["TitleService"]])
], ComercialAknaContatosClientesComponent);



/***/ }),

/***/ "Xj53":
/*!****************************************************************************!*\
  !*** ./src/app/modules/comercial/akna/contatos/lista/lista.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2FrbmEvY29udGF0b3MvbGlzdGEvbGlzdGEuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "bIcV":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/comercial/akna/contatos/formulario/formulario.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2FrbmEvY29udGF0b3MvZm9ybXVsYXJpby9mb3JtdWxhcmlvLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "hlq3":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/akna/contatos/lista/lista.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-navbar *ngIf=\"loadingNavBar\"></loader-spinner-navbar>\r\n<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n<app-header appTitle=\"CONTATOS\">\r\n  <button\r\n    type=\"button\"\r\n    [routerLink]=\"['../novo']\">\r\n    Adicionar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onFilter()\">\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loading\">\r\n  <div class=\"row\" #scrollToFilter>\r\n    <div class=\"col\">\r\n      <advanced-filter>\r\n        <form [formGroup]=\"form\" autocomplete=\"off\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-2\">\r\n              <label for=\"ID\">ID</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"ID\"\r\n                formControlName=\"ID\"\r\n                (keydown.enter)=\"onFilter()\">\r\n            </div>\r\n            <div class=\"form-group col-lg-4\">\r\n              <label for=\"DESCRICAO\">Descrição</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"DESCRICAO\"\r\n                formControlName=\"DESCRICAO\"\r\n                (keydown.enter)=\"onFilter()\">\r\n            </div>\r\n            <div class=\"form-group col-lg-2\">\r\n              <label for=\"ARQUIVADA\">Situação</label>\r\n              <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"true\"\r\n              [items]=\"tipos\"\r\n              [virtualScroll]=\"true\"\r\n              labelForId=\"tipo\"\r\n              bindLabel=\"nome\"\r\n              bindValue=\"cod\"\r\n              id=\"tipo\"\r\n              (change)=\"onFilter()\"\r\n              formControlName=\"ARQUIVADA\"\r\n              placeholder=\"Selecione...\"\r\n            >\r\n              <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\"> {{item.nome}}\r\n              </ng-template>\r\n            </ng-select>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </advanced-filter>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <subtitles\r\n        [data]=\"subtitles\"\r\n        [show]=\"!noResult\">\r\n      </subtitles>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <custom-table [config]=\"tableConfig\" *ngIf=\"!noResult\">\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n            <th scope=\"col\" class=\"text-center\">ID </th>\r\n            <th scope=\"col\" class=\"text-center\">Descrição</th>\r\n            <th scope=\"col\" class=\"text-center\">Quantidade de e-mails</th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let contato of contatosFiltrados | slice : begin : end; let i = index\">\r\n            <td\r\n              class=\"text-center hover\"\r\n              [ngClass]=\"classStatusBorder(contato)\">\r\n              {{contato.ID}}\r\n            </td>\r\n            <td  class=\"text-center hover\">{{ contato.DESCRICAO }}</td>\r\n            <td  class=\"text-center hover\">{{ contato.CONTATOS_VALIDOS}}</td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table><br>\r\n      <empty-result\r\n        message=\"Nenhuma informação encontrada\"\r\n        class=\"my-3\"\r\n        *ngIf=\"noResult\">\r\n      </empty-result>\r\n      <div *ngIf=\"!noResult\">\r\n        Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\r\n        <pagination\r\n          [maxSize]=\"10\"\r\n          [totalItems]=\"totalItems\"\r\n          (pageChanged)=\"onPageChanged($event)\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPage\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\">\r\n        </pagination>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</app-body>");

/***/ }),

/***/ "nwB5":
/*!********************************************************************!*\
  !*** ./src/app/modules/comercial/akna/contatos/contatos.module.ts ***!
  \********************************************************************/
/*! exports provided: ComercialAknaContatosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialAknaContatosModule", function() { return ComercialAknaContatosModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/module-wrapper/module-wrapper.module */ "RoXV");
/* harmony import */ var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/not-found/not-found.module */ "sCnT");
/* harmony import */ var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/pipes/pipes.module */ "9Xeq");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "2ZVE");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/locales/pt */ "vT00");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/chronos */ "xj/R");
/* harmony import */ var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/locale */ "0b5p");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "6No5");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "978R");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular2-text-mask */ "UVXo");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var ng_brazil__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-brazil */ "hTrW");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng2-currency-mask */ "D5nU");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./lista/lista.component */ "7R0/");
/* harmony import */ var _contatos_routing_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./contatos-routing.module */ "t69G");
/* harmony import */ var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./formulario/formulario.component */ "5Ujk");
/* harmony import */ var _formulario_clientes_clientes_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./formulario/clientes/clientes.component */ "XhaH");















Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_11___default.a);
Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_12__["defineLocale"])('pt-br', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_13__["ptBrLocale"]);
// ngx-bootstrap


// ng-select

// ng-brazil



// Modules


// Components




let ComercialAknaContatosModule = class ComercialAknaContatosModule {
};
ComercialAknaContatosModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"])({
        declarations: [
            _lista_lista_component__WEBPACK_IMPORTED_MODULE_23__["ComercialAknaContatosListaComponent"],
            _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_25__["ComercialAknaContatosFormularioComponent"],
            _formulario_clientes_clientes_component__WEBPACK_IMPORTED_MODULE_26__["ComercialAknaContatosClientesComponent"],
        ],
        imports: [
            _contatos_routing_module__WEBPACK_IMPORTED_MODULE_24__["ComercialAknaContatosRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__["NgSelectModule"],
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_15__["PaginationModule"].forRoot(),
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_16__["TooltipModule"].forRoot(),
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__["TabsModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__["BsDatepickerModule"].forRoot(),
            src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__["PipesModule"],
            src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_3__["NotFoundModule"],
            src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_2__["ModuleWrapperModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_21__["SharedModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_22__["TemplatesModule"],
            ng_brazil__WEBPACK_IMPORTED_MODULE_19__["NgBrazil"],
            angular2_text_mask__WEBPACK_IMPORTED_MODULE_18__["TextMaskModule"],
            ng2_currency_mask__WEBPACK_IMPORTED_MODULE_20__["CurrencyMaskModule"],
        ],
        providers: [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_1__["PNotifyService"], { provide: _angular_core__WEBPACK_IMPORTED_MODULE_8__["LOCALE_ID"], useValue: 'pt-br' }],
    })
], ComercialAknaContatosModule);



/***/ }),

/***/ "t69G":
/*!****************************************************************************!*\
  !*** ./src/app/modules/comercial/akna/contatos/contatos-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: ComercialAknaContatosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialAknaContatosRoutingModule", function() { return ComercialAknaContatosRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lista/lista.component */ "7R0/");
/* harmony import */ var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./formulario/formulario.component */ "5Ujk");



//components


const routes = [
    {
        path: 'lista',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_3__["ComercialAknaContatosListaComponent"],
    },
    {
        path: 'novo',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_4__["ComercialAknaContatosFormularioComponent"],
    },
    {
        path: ':id',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_4__["ComercialAknaContatosFormularioComponent"],
    },
    {
        path: '',
        redirectTo: 'lista',
        pathMatch: 'full',
    },
];
let ComercialAknaContatosRoutingModule = class ComercialAknaContatosRoutingModule {
};
ComercialAknaContatosRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ComercialAknaContatosRoutingModule);



/***/ })

}]);
//# sourceMappingURL=contatos-contatos-module-es2015.js.map