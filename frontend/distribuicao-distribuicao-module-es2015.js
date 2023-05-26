(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["distribuicao-distribuicao-module"],{

/***/ "8pCL":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/sul-fluminense/distribuicao/painel-decisao-abastecimento/filtro.service.ts ***!
  \****************************************************************************************************/
/*! exports provided: SulFluminenseFiltroService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SulFluminenseFiltroService", function() { return SulFluminenseFiltroService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");




let SulFluminenseFiltroService = class SulFluminenseFiltroService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.BASE_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API;
    }
    getLinhas() {
        return this.httpClient.get(`${this.BASE_URL}/common/linhas`, {
            observe: "response"
        });
    }
    getClasses(descricaoLinhas) {
        return this.httpClient.get(`${this.BASE_URL}/common/classes`, {
            params: {
                linhas: btoa(descricaoLinhas)
            },
            observe: "response"
        });
    }
    getMateriais(descricaoLinhas, idClasses) {
        if (!idClasses)
            idClasses = "";
        return this.httpClient.get(`${this.BASE_URL}/common/materiais`, {
            params: {
                linhas: btoa(descricaoLinhas),
                classes: btoa(idClasses),
                tipo_material: "Sul Fluminense",
                situacao: "A"
            },
            observe: "response"
        });
    }
    getUnidades() {
        return this.httpClient.get(`${this.BASE_URL}/abastecimento/unidades`, {
            observe: "response"
        });
    }
    getFiltroNivelCritico() {
        return this.httpClient.get(`${this.BASE_URL}/abastecimento/cadastros/niveis-criticos`, {
            observe: "response"
        });
    }
};
SulFluminenseFiltroService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
SulFluminenseFiltroService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], SulFluminenseFiltroService);



/***/ }),

/***/ "9Itx":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/modules/sul-fluminense/distribuicao/painel-decisao-abastecimento/painel-decisao-abastecimento.component.scss ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc3VsLWZsdW1pbmVuc2UvZGlzdHJpYnVpY2FvL3BhaW5lbC1kZWNpc2FvLWFiYXN0ZWNpbWVudG8vcGFpbmVsLWRlY2lzYW8tYWJhc3RlY2ltZW50by5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "G4zF":
/*!************************************************************************************!*\
  !*** ./src/app/modules/sul-fluminense/distribuicao/distribuicao-routing.module.ts ***!
  \************************************************************************************/
/*! exports provided: SulFluminenseDistribuicaoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SulFluminenseDistribuicaoRoutingModule", function() { return SulFluminenseDistribuicaoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _painel_decisao_abastecimento_painel_decisao_abastecimento_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./painel-decisao-abastecimento/painel-decisao-abastecimento.component */ "KYn1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/not-found/not-found.component */ "6nXq");
/* harmony import */ var _distribuicao_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./distribuicao.component */ "RBxI");






const routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _distribuicao_component__WEBPACK_IMPORTED_MODULE_5__["SulFluminenseDistribuicaoComponent"]
            },
            {
                path: 'painel-decisao-abastecimento',
                component: _painel_decisao_abastecimento_painel_decisao_abastecimento_component__WEBPACK_IMPORTED_MODULE_1__["SulFluminensePainelDecisaoAbastecimentoComponent"]
            },
            {
                path: '**',
                component: src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"]
            }
        ]
    }
];
let SulFluminenseDistribuicaoRoutingModule = class SulFluminenseDistribuicaoRoutingModule {
};
SulFluminenseDistribuicaoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], SulFluminenseDistribuicaoRoutingModule);



/***/ }),

/***/ "HmgV":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sul-fluminense/distribuicao/painel-decisao-abastecimento/painel-decisao-abastecimento.component.html ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\n<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<app-header appTitle=\"Painel de decisão de abastecimento\">\n  <button type=\"button\" [disabled]=\"form.status === 'INVALID'\" (click)=\"onFilter()\">\n    Filtrar\n  </button>\n  <button type=\"button\" (click)=\"onResetForm()\">\n    Limpar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\n  <advanced-filter>\n    <form id=\"form-abastecimento-painel-decisao-abastecimento\" [formGroup]=\"form\">\n      <div class=\"form-row\">\n        <div class=\"form-group col-md-3\">\n            <label for=\"unidadeAbastecimento\">Unidade abastecimento</label>\n            <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"false\"\n            [items]=\"unidades\"\n            [virtualScroll]=\"true\"\n            [multiple]=\"true\"\n            [hideSelected]=\"true\"\n            [closeOnSelect]=\"false\"\n            labelForId=\"unidade\"\n            bindLabel=\"Descricao\"\n            bindValue=\"Codigo\"\n            placeholder=\"Todas unidades\"\n            formControlName=\"unidades\"\n            >\n            </ng-select>\n          </div>\n        <div class=\"form-group col-md-3\">\n          <label for=\"linha\">Linha</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"false\"\n            [items]=\"linhas\"\n            [virtualScroll]=\"true\"\n            [multiple]=\"true\"\n            [hideSelected]=\"true\"\n            [closeOnSelect]=\"false\"\n            maxSelectedItems = 3\n            placeholder=\"Selecione linha\"\n            bindLabel=\"linha\"\n            bindValue=\"linha\"\n            formControlName=\"linhas\"\n            (change) = \"getClasses()\"\n            [ngClass]=\"onFieldError('linhas') + ' ' + onFieldRequired('linhas')\"\n          >\n          </ng-select>\n          <invalid-form-control\n            [show]=\"onFieldInvalid('linhas')\"\n            message=\"Linha é obrigatório.\">\n          </invalid-form-control>\n        </div>\n        <div class=\"form-group col-md-3\">\n          <label for=\"classe\">Classe</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"false\"\n            [items]=\"classes\"\n            [virtualScroll]=\"true\"\n            [multiple]=\"true\"\n            [hideSelected]=\"true\"\n            [closeOnSelect]=\"false\"\n            maxSelectedItems = 6\n            labelForId=\"classe\"\n            bindLabel=\"classeDescricao\"\n            bindValue=\"classeId\"\n            placeholder=\"Selecione classe\"\n            formControlName=\"classes\"\n            (change) = \"getMateriais()\"\n            [ngClass]=\"onFieldError('classes') + ' ' + onFieldRequired('classes')\"\n          >\n          </ng-select>\n          <invalid-form-control\n            [show]=\"onFieldInvalid('classes')\"\n            message=\"Classes é obrigatório.\">\n          </invalid-form-control>\n        </div>\n        <div class=\"form-group col-md-3\">\n          <label for=\"ordenacao\">Ordenação</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"false\"\n            [items]=\"ordenacao\"\n            [virtualScroll]=\"true\"\n            [hideSelected]=\"true\"\n            [closeOnSelect]=\"false\"\n            labelForId=\"ordenacao\"\n            bindLabel=\"descricao\"\n            bindValue=\"id\"\n            placeholder=\"Ordenação\"\n            formControlName=\"ordenacao\"\n          >\n          </ng-select>\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"form-group col-md-12\">\n          <label for=\"material\">Material</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"false\"\n            [items]=\"materiais\"\n            [virtualScroll]=\"true\"\n            [multiple]=\"true\"\n            [hideSelected]=\"true\"\n            [closeOnSelect]=\"false\"\n            maxSelectedItems = 30\n            labelForId=\"material\"\n            bindLabel=\"codigoDescricaoMaterial\"\n            bindValue=\"codigoMaterial\"\n            placeholder=\"Selecione material\"\n            formControlName=\"materiais\"\n          >\n          </ng-select>\n        </div>\n      </div>\n    </form>\n  </advanced-filter>\n  <div class=\"col-md-12 mb-4\">\n    <sul-fluminense-cards-materiais></sul-fluminense-cards-materiais>\n  </div>\n</app-body>\n");

/***/ }),

/***/ "I+wB":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/sul-fluminense/distribuicao/distribuicao.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc3VsLWZsdW1pbmVuc2UvZGlzdHJpYnVpY2FvL2Rpc3RyaWJ1aWNhby5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "Ju/8":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/sul-fluminense/distribuicao/painel-decisao-abastecimento/filter.pipe.ts ***!
  \*************************************************************************************************/
/*! exports provided: SulFluminensePainelDecisaoFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SulFluminensePainelDecisaoFilterPipe", function() { return SulFluminensePainelDecisaoFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


let SulFluminensePainelDecisaoFilterPipe = class SulFluminensePainelDecisaoFilterPipe {
    transform(value, arg) {
        if (arg === '')
            return value;
        let aux = false;
        for (const unidade of value) {
            if (unidade.CodigoNivelCritico == arg) {
                aux = true;
            }
            ;
        }
        ;
        return aux ? value : [];
    }
};
SulFluminensePainelDecisaoFilterPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filter'
    })
], SulFluminensePainelDecisaoFilterPipe);



/***/ }),

/***/ "KYn1":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/modules/sul-fluminense/distribuicao/painel-decisao-abastecimento/painel-decisao-abastecimento.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: SulFluminensePainelDecisaoAbastecimentoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SulFluminensePainelDecisaoAbastecimentoComponent", function() { return SulFluminensePainelDecisaoAbastecimentoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_painel_decisao_abastecimento_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./painel-decisao-abastecimento.component.html */ "HmgV");
/* harmony import */ var _painel_decisao_abastecimento_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./painel-decisao-abastecimento.component.scss */ "9Itx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var _filtro_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./filtro.service */ "8pCL");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");









//Converte rota em base64



let SulFluminensePainelDecisaoAbastecimentoComponent = class SulFluminensePainelDecisaoAbastecimentoComponent {
    constructor(formBuilder, filtroService, atividadesService, routerService, pnotify, titleService, router, activateRoute) {
        this.formBuilder = formBuilder;
        this.filtroService = filtroService;
        this.atividadesService = atividadesService;
        this.routerService = routerService;
        this.pnotify = pnotify;
        this.titleService = titleService;
        this.router = router;
        this.activateRoute = activateRoute;
        this.loaderFullScreen = true;
        this.loaderNavbar = false;
        this.enableCards = false;
        this.unidades = [];
        this.linhas = [];
        this.classes = [];
        this.materiais = [];
        this.materiaisID = [];
        this.breadCrumbTree = [];
        this.nivelCritico = [];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.matriculaUsuario = this.currentUser['info']['matricula'];
        this.ordenacao = [
            {
                id: 1,
                descricao: 'Codigo Material'
            },
            {
                id: 2,
                descricao: 'Descrição Material'
            },
            {
                id: 3,
                descricao: 'Linha'
            },
            {
                id: 4,
                descricao: 'Classe'
            }
        ];
        this.form = this.formBuilder.group({
            linhas: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            classes: [null],
            materiais: [null],
            unidades: [null],
            ordenacao: [null]
        });
    }
    ngOnInit() {
        setTimeout(() => {
            this.loaderFullScreen = false;
        }, 1000);
        this.registrarAcesso();
        this.setBreadCrumb();
        this.setFormValues();
        this.getLinhas();
        this.getUnidades();
        this.titleService.setTitle('Painel de decisão de abastecimento');
        this.form.get('ordenacao').setValue(1);
    }
    registrarAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
    }
    setBreadCrumb() {
        this.activateRoute.params.subscribe((params) => {
            this.breadCrumbTree = [
                {
                    descricao: 'Home',
                    routerLink: '/sul-fluminense/home'
                },
                {
                    descricao: 'Distribuição',
                    routerLink: `/sul-fluminense/distribuicao/${params['idSubModulo']}`
                },
                {
                    descricao: 'Painel de decisão de abastecimento'
                }
            ];
        });
    }
    setFormValues() {
        let _response = this.activateRoute.snapshot.queryParams;
        let parametros = this.routerService.getBase64UrlParams(_response);
        let unidades = parametros['unidades']
            ? atob(parametros['unidades']).split(',')
            : [];
        let linhas = parametros['linhas']
            ? atob(parametros['linhas']).split(',')
            : [];
        let classes = [];
        let materiais = [];
        this.form.get('linhas').setValue(linhas);
        this.form.get('unidades').setValue(unidades);
        let _materiais = parametros['materiais']
            ? atob(parametros['materiais']).split(',')
            : [];
        let _classes = parametros['classes']
            ? atob(parametros['classes']).split(',')
            : [];
        for (let index = 0; index < _classes.length; index++) {
            classes.push(parseInt(_classes[index]));
        }
        for (let index = 0; index < _materiais.length; index++) {
            materiais.push(parseInt(_materiais[index]));
        }
        if (this.form.get('linhas').status == 'VALID') {
            this.filtroService
                .getClasses(linhas)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
                this.form.patchValue({
                    classes: classes
                });
            }))
                .subscribe((response) => {
                if (Object.keys(response).length > 0) {
                    if (response['status'] === 200) {
                        this.classes = response['body'];
                        this.form.get('classes').enable();
                    }
                }
            });
        }
        else {
            this.form.get('classes').disable();
        }
        if (this.form.get('classes').status == 'VALID') {
            this.filtroService
                .getMateriais(linhas, classes)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
                this.form.patchValue({
                    materiais: materiais
                });
            }))
                .subscribe((response) => {
                if (Object.keys(response).length > 0) {
                    if (response['body'].responseCode === 200) {
                        this.materiais = response.result;
                        this.form.get('materiais').enable();
                    }
                }
            });
        }
        else {
            this.form.get('materiais').disable();
        }
    }
    /* INICIO - CARREGA DADOS DO FILTRO */
    getLinhas() {
        this.filtroService
            .getLinhas()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => (this.loaderNavbar = false)))
            .subscribe((response) => {
            if (Object.keys(response).length > 0) {
                if (response['status'] === 200) {
                    this.linhas = response['body'];
                }
            }
        }, error => {
            this.pnotify.error('Erro ao carregar Filtro Linhas');
        });
    }
    getClasses() {
        this.classes = [];
        if (this.form.get('linhas').value.length > 1) {
            this.form.get('classes').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
        }
        else {
            this.form.get('classes').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].nullValidator]);
            this.form.get('materiais').disable();
        }
        if (this.form.get('linhas').status === 'VALID') {
            this.loaderNavbar = true;
            let descricaoLinhas = this.form.get('linhas').value;
            this.filtroService.getClasses(descricaoLinhas)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => (this.loaderNavbar = false)))
                .subscribe((response) => {
                if (Object.keys(response).length > 0) {
                    if (response['status'] === 200) {
                        this.classes = response['body'];
                        this.form.get('classes').reset();
                        this.form.get('classes').enable();
                    }
                }
            }, error => {
                this.pnotify.error('Erro ao carregar filtro Classes');
            });
        }
        else {
            this.form.get('classes').reset();
            this.form.get('materiais').reset();
            this.form.get('classes').disable();
            this.form.get('materiais').disable();
        }
    }
    getMateriais() {
        this.materiais = [];
        if (this.form.get('classes').value.length > 0 &&
            (this.form.get('linhas').status === 'VALID' ||
                this.form.get('classes').status === 'VALID')) {
            this.loaderNavbar = true;
            let descricaoLinhas = this.form.get('linhas').value;
            let idClasses = this.form.get('classes').value;
            this.filtroService.getMateriais(descricaoLinhas, idClasses)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => (this.loaderNavbar = false)))
                .subscribe((response) => {
                if (Object.keys(response).length > 0) {
                    if (response['body'].responseCode === 200) {
                        this.materiais = response['body'].result;
                        this.form.get('materiais').reset();
                        this.form.get('materiais').enable();
                    }
                    else if (response['body'].responseCode === 204) {
                        this.materiais = [];
                        this.pnotify.notice('Não há materiais cadastrados para essa classe');
                    }
                }
                this.loaderNavbar = false;
            }, error => {
                this.pnotify.error('Erro ao carregar filtro Materias');
            });
        }
        else {
            this.form.get('materiais').reset();
            this.form.get('materiais').disable();
        }
    }
    getUnidades() {
        this.unidades = [];
        this.loaderNavbar = true;
        this.filtroService.getUnidades()
            .subscribe((response) => {
            if (Object.keys(response).length > 0) {
                if (response['status'] === 200) {
                    this.unidades = response['body'];
                }
            }
            this.loaderNavbar = false;
        }, error => {
            this.pnotify.error('Erro ao carregar filtro Unidades');
        });
    }
    /* FIM - CARREGA DADOS DO FILTRO */
    onFilter() {
        let unidades = this.form.get('unidades').value;
        let linhas = this.form.get('linhas').value;
        let classes = this.form.get('classes').value;
        let materiais = this.form.get('materiais').value;
        let ordenacao = this.form.get('ordenacao').value;
        /* define millesegundos para enviar na rota e sempre poder filtrar */
        let aux = new Date();
        let m = aux.getMilliseconds();
        this.setRouterParams({
            matriculaUsuario: this.matriculaUsuario,
            unidades: unidades ? btoa(unidades) : '',
            linhas: linhas ? btoa(linhas) : '',
            classes: classes ? btoa(classes) : '',
            materiais: materiais ? btoa(materiais) : '',
            ordenacao: ordenacao,
            r: m
        });
    }
    setRouterParams(params) {
        this.router.navigate([], {
            relativeTo: this.activateRoute,
            queryParams: this.routerService.setBase64UrlParams(params)
        });
    }
    onResetForm() {
        this.form.reset();
        this.router.navigate([], {
            relativeTo: this.activateRoute
        })
            .finally(() => window.location.reload());
    }
    /* VALIDAÇÕES DO FILTRO */
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
};
SulFluminensePainelDecisaoAbastecimentoComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _filtro_service__WEBPACK_IMPORTED_MODULE_10__["SulFluminenseFiltroService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_8__["AtividadesService"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__["RouterService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
SulFluminensePainelDecisaoAbastecimentoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'painel-decisao-abastecimento',
        template: _raw_loader_painel_decisao_abastecimento_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_painel_decisao_abastecimento_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _filtro_service__WEBPACK_IMPORTED_MODULE_10__["SulFluminenseFiltroService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_8__["AtividadesService"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__["RouterService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
], SulFluminensePainelDecisaoAbastecimentoComponent);



/***/ }),

/***/ "RBxI":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/sul-fluminense/distribuicao/distribuicao.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SulFluminenseDistribuicaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SulFluminenseDistribuicaoComponent", function() { return SulFluminenseDistribuicaoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_distribuicao_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./distribuicao.component.html */ "SzxC");
/* harmony import */ var _distribuicao_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./distribuicao.component.scss */ "I+wB");
/* harmony import */ var _shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");








let SulFluminenseDistribuicaoComponent = class SulFluminenseDistribuicaoComponent {
    constructor(atividadesService, router, titleService, pnotify, activatedRoute) {
        this.atividadesService = atividadesService;
        this.router = router;
        this.titleService = titleService;
        this.pnotify = pnotify;
        this.activatedRoute = activatedRoute;
        this.loading = true;
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: '/sul-fluminense/home'
            },
            {
                descricao: 'Distribuição'
            }
        ];
        this.atividades = [];
    }
    ngOnInit() {
        setTimeout(() => {
            this.loading = false;
        }, 1000);
        this.titleService.setTitle('Distribuição');
        this.registrarAcesso();
        this.onActivedRoute();
    }
    registrarAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
    }
    onActivedRoute() {
        this.activatedRoute.params.subscribe((params) => {
            this.registrarAcesso();
            this.getAtividadesInternas(params['idSubModulo']);
        });
    }
    getAtividadesInternas(idSubModulo) {
        this.atividadesService.getAtividadesInternas(idSubModulo).subscribe(res => {
            if (res['responseCode'] === 200) {
                this.atividades = res['result'];
                this.loading = false;
            }
            else {
                this.handleAtividadesInternasError();
            }
        }, error => {
            this.handleAtividadesInternasError();
        });
    }
    handleAtividadesInternasError() {
        this.pnotify.error();
        this.router.navigate(['/abastecimento/home']);
    }
};
SulFluminenseDistribuicaoComponent.ctorParameters = () => [
    { type: _shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_3__["AtividadesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_7__["TitleService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
SulFluminenseDistribuicaoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'sul-fluminense-distribuicao',
        template: _raw_loader_distribuicao_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_distribuicao_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_3__["AtividadesService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_7__["TitleService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
], SulFluminenseDistribuicaoComponent);



/***/ }),

/***/ "SzxC":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sul-fluminense/distribuicao/distribuicao.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\n\n<app-header appTitle=\"Distribuição\">\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loading\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-md-3\" *ngFor=\"let atividade of atividades\">\n      <card-button\n        [icon]=\"atividade.iconeAtividade\"\n        [text]=\"atividade.nomeAtividade\"\n        [routerLink]=\"[atividade.rotaAtividade]\">\n      </card-button>\n    </div>\n  </div>\n</app-body>");

/***/ }),

/***/ "V1MU":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sul-fluminense/distribuicao/painel-decisao-abastecimento/cards-materiais/cards-materiais.component.html ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\n<div class=\"row justify-content-between mb-3\" [hidden]=\"!viewLegend\">\n  <div class=\"col-6\">\n    <div class=\"d-flex\" *ngIf=\"materiaisID.length > 0\">\n      <div *ngFor=\"let item of nivelCritico\">\n        <div\n          class=\"legend hover\"\n          [tooltip]=\"item.Descricao\"\n          (click)=\"filterPipe(item.Codigo)\"\n          [class.active]=\"filterUnidade === item.Codigo\"\n          [ngClass]=\"item.Cor\">\n          <div class=\"square\"></div>\n          <div class=\"text\">{{ item.Nome | uppercase }}</div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<ng-template #itemTemplate let-item=\"item\">\n  <div>\n    <div class=\"card-body\">\n      <div [ngClass]=\"item.value.MensagemErro != null ? 'alert alert-danger' : 'bg-light2'\" class=\"rounded\" [tooltip]=\"item.value.MensagemErro\" >\n        <div class=\"row\">\n          <div class=\"col-md-2 ml-3\">\n            <strong>Cod:</strong> {{item.value.CodigoMaterial}}\n          </div>\n          <div class=\"col-md-3 text-truncate\">\n            <strong>Desc:</strong> {{item.value.DescricaoMaterial}}\n          </div>\n          <div class=\"col-md-2\">\n            <strong>Linha:</strong> {{item.value.DescricaoLinha}}\n          </div>\n          <div class=\"col-md-2\">\n            <strong>Classe:</strong> {{item.value.DescricaoClasse}}\n          </div>\n        </div>\n      </div>\n      <table class=\"table table-bordered\">\n        <thead>\n          <tr>\n            <th class=\"icone-sem-borda\"></th>\n            <th scope=\"col\" class=\"hover\" (click)=\"sortItems(item, 'DescricaoUnidadeAbastecimento')\" >Unidade de abastecimento\n              <span *ngIf=\"item.campoVisivel =='DescricaoUnidadeAbastecimento'\"><i [ngClass]=\"item.sort ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\n              <span *ngIf=\"item.campoVisivel !='DescricaoUnidadeAbastecimento'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th scope=\"col\" class=\"hover\" (click)=\"sortItems(item,'ValorDemanda')\">Demanda\n              <span *ngIf=\"item.campoVisivel =='ValorDemanda'\"><i [ngClass]=\"item.sort ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\n              <span *ngIf=\"item.campoVisivel !='ValorDemanda'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th scope=\"col\" class=\"hover\" (click)=\"sortItems(item,'EmEnvio')\"><span tooltip=\"Peso em toneladas do material em envio\">Em envio</span>&nbsp;\n              <span *ngIf=\"item.campoVisivel =='EmEnvio'\"><i [ngClass]=\"item.sort ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\n              <span *ngIf=\"item.campoVisivel !='EmEnvio'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th scope=\"col\" class=\"hover\" (click)=\"sortItems(item,'EmTransferencia')\"><span tooltip=\"Peso em toneladas do material em transferência\">Em transferência</span>&nbsp;\n              <span *ngIf=\"item.campoVisivel =='EmTransferencia'\"><i [ngClass]=\"item.sort ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\n              <span *ngIf=\"item.campoVisivel !='EmTransferencia'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th scope=\"col\" class=\"hover\" (click)=\"sortItems(item,'ValorAtendido')\">Atendido\n              <span *ngIf=\"item.campoVisivel =='ValorAtendido'\"><i [ngClass]=\"item.sort ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\n              <span *ngIf=\"item.campoVisivel !='ValorAtendido'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th scope=\"col\" class=\"hover\" (click)=\"sortItems(item,'ValorSaldo')\"><span tooltip=\"Cálculo: Demanda - (Em envio + Em transferência + Atendido)\">Saldo</span>&nbsp; \n              <span *ngIf=\"item.campoVisivel =='ValorSaldo'\"><i [ngClass]=\"item.sort ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\n              <span *ngIf=\"item.campoVisivel !='ValorSaldo'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th scope=\"col\" class=\"hover\" (click)=\"sortItems(item,'ValorEstoqueDisponivel')\">Estoque Disponível\n              <span *ngIf=\"item.campoVisivel =='ValorEstoqueDisponivel'\"><i [ngClass]=\"item.sort ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\n              <span *ngIf=\"item.campoVisivel !='ValorEstoqueDisponivel'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th scope=\"col\" class=\"hover\" (click)=\"sortItems(item,'MediaVendas')\">Média de Vendas\n              <span *ngIf=\"item.campoVisivel =='MediaVendas'\"><i [ngClass]=\"item.sort ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\n              <span *ngIf=\"item.campoVisivel !='MediaVendas'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th scope=\"col\" class=\"hover\" (click)=\"sortItems(item,'Giro')\">Giro\n              <span *ngIf=\"item.campoVisivel =='Giro'\"><i [ngClass]=\"item.sort ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\n              <span *ngIf=\"item.campoVisivel !='Giro'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let unidade of item.value.Unidades | filter: filterUnidade; let index = index\" [ngClass]=\"{'bg-info2': unidade.Detalhes}\">\n            <th  class=\"icone-sem-borda hover\">\n              <div (click)=\"alteraIcone(unidade, item, index)\">\n                <i [ngClass]=\"iconClass(unidade.Detalhes)\"></i>\n              </div>\n            </th>\n            <td class=\"text-truncate\" [ngClass]=\"{\n            'border-danger1' : unidade.CodigoNivelCritico == 1, \n            'border-warning1' : unidade.CodigoNivelCritico == 2, \n            'border-success1' : unidade.CodigoNivelCritico == 3, \n            'border-primary1' : unidade.CodigoNivelCritico == 4\n            }\">\n              {{ unidade.DescricaoUnidadeAbastecimento}}\n            </td>\n            <td>{{ unidade.ValorDemanda | number: '0.3-3'}}</td>\n            <td>{{ unidade.EmEnvio | number: '0.3-3' }}</td>\n            <td>{{ unidade.EmTransferencia | number: '0.3-3' }}</td>\n            <td>{{ unidade.ValorAtendido | number: '0.3-3' }}</td>\n            <td>{{ unidade.ValorSaldo | number: '0.3-3' }}</td>\n            <td>\n              <span *ngIf=\"item.value.PesoEspecifico > 0\">{{ unidade.ValorEstoqueDisponivel | number: '0.3-3' }}</span>\n              <span *ngIf=\"item.value.PesoEspecifico == 0\">-</span>\n            </td>\n            <td>\n              <span *ngIf=\"item.value.PesoEspecifico > 0\">{{ unidade.MediaVendas | number: '0.3-3' }}</span>\n              <span *ngIf=\"item.value.PesoEspecifico == 0\">-</span>\n            </td>\n            <td>\n                <span *ngIf=\"item.value.PesoEspecifico > 0\">{{ unidade.Giro | number: '0.0-0' }}</span>\n                <span *ngIf=\"item.value.PesoEspecifico == 0\">-</span>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n      <table class=\"table table-sm\" *ngIf=\"index == item.id && itemDetalhes\">\n        <thead class=\"thead-color\">\n          <tr>\n            <th scope=\"col\" class=\"bg-info2\">Pedido Pai</th>\n            <th scope=\"col\" class=\"bg-info2\"> Item</th>\n            <th scope=\"col\" class=\"bg-info2\">Pedido Remessa</th>\n            <th scope=\"col\" class=\"bg-info2\">Item</th>\n            <th scope=\"col\" class=\"bg-info2\">Demanda</th>\n            <th scope=\"col\" class=\"bg-info2\">Em envio</th>\n            <th scope=\"col\" class=\"bg-info2\">Em transferência</th>\n            <th scope=\"col\" class=\"bg-info2\">Atendido</th>\n            <th scope=\"col\" class=\"bg-info2\">Saldo</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let materialDetalhe of this.materiaisDetalhes\">\n            <td>{{ materialDetalhe.NumeroPedidoPai | number: '0.0-0' }}</td>\n            <td>{{ materialDetalhe.ItemPedidoPai | number: '0.0-0' }}</td>\n            <td>{{ materialDetalhe.NumeroPedidoRemessa | number: '0.0-0' }}</td>\n            <td>{{ materialDetalhe.ItemPedidoRemessa | number: '0.0-0' }}</td>\n            <td>{{ materialDetalhe.Demanda | number: '0.3-3' }}</td>\n            <td>{{ materialDetalhe.EmEnvio | number: '0.3-3' }}</td>\n            <td>{{ materialDetalhe.EmTransferencia | number: '0.3-3' }}</td>\n            <td>{{ materialDetalhe.Atendido | number: '0.3-3' }}</td>\n            <td>{{ materialDetalhe.Saldo | number: '0.3-3' }}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</ng-template>\n<bs-sortable\n  [(ngModel)]=\"materiaisID\"\n  [itemTemplate]=\"itemTemplate\"\n  itemClass=\"card mb-3\"\n  itemActiveClass=\"border-card bg-info2 shadow\"\n  wrapperClass=\"sortable-wrapper\"\n></bs-sortable>\n<div *ngIf=\"emptyMateriais\"class=\"text-center d-flex justify-content-center align-items-center p-5\" style=\"height: 80%\">\n  <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n</div>");

/***/ }),

/***/ "Wcjn":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/modules/sul-fluminense/distribuicao/painel-decisao-abastecimento/cards-materiais/cards-materiais.component.scss ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("th {\n  background-color: #d5e7fb;\n}\n\ntd, th {\n  text-align: center;\n  font-size: 13px;\n}\n\ntable th, table td {\n  padding: 1px;\n}\n\n.card-body {\n  padding: 12px;\n  text-align: -webkit-center;\n}\n\n.bg-light2 {\n  background-color: #b6d6f9;\n  padding: 0.2rem;\n  margin-bottom: 0.6rem;\n}\n\ni.fas.fa-plus, i.fas.fa-minus {\n  border: 1px solid #a59a9a;\n  border-radius: 0.2rem !important;\n  padding: 0.05rem;\n}\n\n.fa-plus {\n  color: #01a700;\n}\n\n.fa-minus {\n  color: #01a700;\n}\n\n.table-sm {\n  width: 80%;\n}\n\n.bg-info2 {\n  background-color: #f1f1f1;\n}\n\n.icone-sem-borda {\n  background: white;\n  border: hidden;\n  -webkit-border-end: inherit;\n          border-inline-end: inherit;\n}\n\n::ng-deep .border-card {\n  border: 3px dashed rgba(80, 136, 240, 0.795);\n}\n\n::ng-deep .border-danger1 {\n  border-left-color: #dc3545 !important;\n  border-left-width: 3px !important;\n}\n\n::ng-deep .border-warning1 {\n  border-left-color: #ffc107 !important;\n  border-left-width: 3px !important;\n}\n\n::ng-deep .border-success1 {\n  border-left-color: #28a745 !important;\n  border-left-width: 3px !important;\n}\n\n::ng-deep .border-primary1 {\n  border-left-color: #007bff !important;\n  border-left-width: 3px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zdWwtZmx1bWluZW5zZS9kaXN0cmlidWljYW8vcGFpbmVsLWRlY2lzYW8tYWJhc3RlY2ltZW50by9jYXJkcy1tYXRlcmlhaXMvY2FyZHMtbWF0ZXJpYWlzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0kseUJBQUE7QUFBSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLDBCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7VUFBQSwwQkFBQTtBQUNKOztBQUlJO0VBQ0ksNENBQUE7QUFEUjs7QUFHSTtFQUNJLHFDQUFBO0VBQ0EsaUNBQUE7QUFEUjs7QUFJSTtFQUNJLHFDQUFBO0VBQ0EsaUNBQUE7QUFGUjs7QUFLSTtFQUNJLHFDQUFBO0VBQ0EsaUNBQUE7QUFIUjs7QUFNSTtFQUNJLHFDQUFBO0VBQ0EsaUNBQUE7QUFKUiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc3VsLWZsdW1pbmVuc2UvZGlzdHJpYnVpY2FvL3BhaW5lbC1kZWNpc2FvLWFiYXN0ZWNpbWVudG8vY2FyZHMtbWF0ZXJpYWlzL2NhcmRzLW1hdGVyaWFpcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxudGgge1xuICAgIGJhY2tncm91bmQtY29sb3I6I2Q1ZTdmYjtcbn1cbnRkLCB0aCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn1cblxudGFibGUgdGgsIHRhYmxlIHRke1xuICAgIHBhZGRpbmc6IDFweDtcbn1cblxuLmNhcmQtYm9keSB7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbn1cblxuLmJnLWxpZ2h0MiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I2ZDZmOTtcbiAgICBwYWRkaW5nOiAuMnJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAuNnJlbTtcbn1cblxuaS5mYXMuZmEtcGx1cyxpLmZhcy5mYS1taW51c3tcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYTU5YTlhO1xuICAgIGJvcmRlci1yYWRpdXM6IC4yMHJlbSFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogLjA1cmVtO1xufVxuXG4uZmEtcGx1c3tcbiAgICBjb2xvcjogIzAxYTcwMDtcbn1cblxuLmZhLW1pbnVze1xuICAgIGNvbG9yOiAjMDFhNzAwO1xufVxuXG4udGFibGUtc217XG4gICAgd2lkdGg6IDgwJTtcbn1cblxuLmJnLWluZm8ye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG59XG5cbi5pY29uZS1zZW0tYm9yZGF7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyOiBoaWRkZW47XG4gICAgYm9yZGVyLWlubGluZS1lbmQ6IGluaGVyaXQ7XG59XG5cblxuOjpuZy1kZWVwIHsgXG4gICAgLmJvcmRlci1jYXJke1xuICAgICAgICBib3JkZXI6IDNweCBkYXNoZWQgcmdiYSg4MCwgMTM2LCAyNDAsIDAuNzk1KTtcbiAgICB9XG4gICAgLmJvcmRlci1kYW5nZXIxe1xuICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogI2RjMzU0NSFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAzcHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgXG4gICAgLmJvcmRlci13YXJuaW5nMXtcbiAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6ICNmZmMxMDchaW1wb3J0YW50O1xuICAgICAgICBib3JkZXItbGVmdC13aWR0aDogM3B4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIFxuICAgIC5ib3JkZXItc3VjY2VzczF7XG4gICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjMjhhNzQ1IWltcG9ydGFudDtcbiAgICAgICAgYm9yZGVyLWxlZnQtd2lkdGg6IDNweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBcbiAgICAuYm9yZGVyLXByaW1hcnkxe1xuICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogIzAwN2JmZiFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAzcHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgXG59Il19 */");

/***/ }),

/***/ "dpkx":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/modules/sul-fluminense/distribuicao/painel-decisao-abastecimento/painel-decisao-abastecimento.service.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: PainelDecisaoAbastecimentoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PainelDecisaoAbastecimentoService", function() { return PainelDecisaoAbastecimentoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");




let PainelDecisaoAbastecimentoService = class PainelDecisaoAbastecimentoService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.BASE_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API;
    }
    getMateriaisId(dados) {
        let unidades = dados["unidades"];
        let materiais = dados["materiais"];
        let linhas = dados["linhas"];
        let classes = dados["classes"];
        let matriculaUsuario = dados["matriculaUsuario"];
        let pagina = dados["pagina"];
        let ordenacao = dados["ordenacao"];
        return this.httpClient.get(`${this.BASE_URL}/abastecimento/demandas-materiais`, {
            params: {
                Unidades: (unidades == undefined) ? '' : (unidades),
                Materiais: (materiais == undefined) ? '' : (materiais),
                Linhas: (linhas),
                Classes: (classes == undefined) ? '' : (classes),
                MatriculaUsuario: matriculaUsuario,
                Pagina: pagina,
                CampoOrdenacao: ordenacao
            },
            observe: "response"
        });
    }
    getDemandasMateriais(dados) {
        let unidades = dados["unidades"];
        let materiais = dados["materiais"];
        return this.httpClient.get(`${this.BASE_URL}/abastecimento/demandas-materiais`, {
            params: {
                Unidades: (unidades == undefined) ? '' : (unidades),
                Materiais: (materiais == undefined) ? '' : (materiais)
            },
            observe: "response"
        });
    }
    getMateriaisDetalhes(idUnidade, idMaterial, pesoEspecifico) {
        let unidades = idUnidade;
        let materiais = idMaterial;
        //let pesoEsp = 
        return this.httpClient.get(`${this.BASE_URL}/abastecimento/demandas-materiais/detalhes`, {
            params: {
                Unidade: (unidades == undefined) ? '' : (unidades),
                Material: (materiais == undefined) ? '' : (materiais),
                PesoEspecifico: (pesoEspecifico == undefined) ? '' : (pesoEspecifico),
            },
            observe: "response"
        });
    }
    getCountMateriais(dados) {
        let unidades = dados["unidades"];
        let materiais = dados["materiais"];
        let linhas = dados["linhas"];
        let classes = dados["classes"];
        let matriculaUsuario = dados["matriculaUsuario"];
        return this.httpClient.get(`${this.BASE_URL}/abastecimento/materiais-em-carteira`, {
            params: {
                Unidades: (unidades == undefined) ? '' : (unidades),
                Materiais: (materiais == undefined) ? '' : (materiais),
                Linhas: (linhas),
                Classes: (classes == undefined) ? '' : (classes),
                MatriculaUsuario: matriculaUsuario,
                CampoOrdenacao: "1"
            },
            observe: "response"
        });
    }
};
PainelDecisaoAbastecimentoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
PainelDecisaoAbastecimentoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], PainelDecisaoAbastecimentoService);



/***/ }),

/***/ "o1gm":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/modules/sul-fluminense/distribuicao/painel-decisao-abastecimento/painel-decisao-abastecimento.module.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: SulFluminensePainelDecisaoAbastecimentoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SulFluminensePainelDecisaoAbastecimentoModule", function() { return SulFluminensePainelDecisaoAbastecimentoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/locales/pt */ "vT00");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "978R");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "6No5");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var ngx_bootstrap_sortable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/sortable */ "p4Ho");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var angular2_counto__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular2-counto */ "RNH4");
/* harmony import */ var angular2_counto__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(angular2_counto__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var _cards_materiais_cards_materiais_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./cards-materiais/cards-materiais.component */ "rZDR");
/* harmony import */ var _painel_decisao_abastecimento_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./painel-decisao-abastecimento.component */ "KYn1");
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./filter.pipe */ "Ju/8");





//locale pt-BR


Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_5___default.a);
// ngx-bootstrap






// Counto





let SulFluminensePainelDecisaoAbastecimentoModule = class SulFluminensePainelDecisaoAbastecimentoModule {
};
SulFluminensePainelDecisaoAbastecimentoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _cards_materiais_cards_materiais_component__WEBPACK_IMPORTED_MODULE_14__["SulFluminenseCardsMateriaisComponent"],
            _painel_decisao_abastecimento_component__WEBPACK_IMPORTED_MODULE_15__["SulFluminensePainelDecisaoAbastecimentoComponent"],
            _filter_pipe__WEBPACK_IMPORTED_MODULE_16__["SulFluminensePainelDecisaoFilterPipe"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_1__["TemplatesModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"].forRoot(),
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginationModule"].forRoot(),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap_sortable__WEBPACK_IMPORTED_MODULE_10__["SortableModule"].forRoot(),
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["NgSelectModule"],
            angular2_counto__WEBPACK_IMPORTED_MODULE_12__["CountoModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_11__["CollapseModule"].forRoot(),
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"]
        ],
        providers: [{ provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"], useValue: 'pt-PT' }],
    })
], SulFluminensePainelDecisaoAbastecimentoModule);



/***/ }),

/***/ "rZDR":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/modules/sul-fluminense/distribuicao/painel-decisao-abastecimento/cards-materiais/cards-materiais.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: SulFluminenseCardsMateriaisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SulFluminenseCardsMateriaisComponent", function() { return SulFluminenseCardsMateriaisComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cards_materiais_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cards-materiais.component.html */ "V1MU");
/* harmony import */ var _cards_materiais_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cards-materiais.component.scss */ "Wcjn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var _filtro_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../filtro.service */ "8pCL");
/* harmony import */ var _painel_decisao_abastecimento_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../painel-decisao-abastecimento.service */ "dpkx");








//Converte rota em base64



let SulFluminenseCardsMateriaisComponent = class SulFluminenseCardsMateriaisComponent {
    constructor(getDataService, activatedRoute, routerService, pnotify, filtroService) {
        this.getDataService = getDataService;
        this.activatedRoute = activatedRoute;
        this.routerService = routerService;
        this.pnotify = pnotify;
        this.filtroService = filtroService;
        this.materiaisID = [];
        this.materiaisID_ = [];
        this.materiaisIDFilter = [];
        this.materiaisDetalhes = [];
        this.nivelCritico = [];
        this.reqMateriais = [];
        this.reqCodMateriais = [];
        this.loading = false;
        this.openDetalhes = false;
        this.viewLegend = false;
        this.itemDetalhes = false;
        this.isColapsed = true;
        this.emptyMateriais = false;
        this.filterUnidade = '';
    }
    ngOnInit() {
        this.onActivedRoute();
        this.getFiltroNivelCritico();
    }
    filterPipe(value) {
        this.itemDetalhes = false;
        if (this.filterUnidade != value) {
            this.filterUnidade = value;
        }
        else if (this.filterUnidade == value) {
            this.filterUnidade = '';
        }
    }
    onActivedRoute() {
        this.activatedRoute.queryParams.subscribe(queryParams => {
            if (Object.keys(queryParams).length > 0) {
                let _response = this.routerService.getBase64UrlParams(queryParams);
                this.getCountMateriais(_response);
                this.pagina = _response['pagina'];
            }
        });
    }
    //traz os codigos do materiais
    getCountMateriais(response) {
        this.reqMateriais = [];
        this.reqCodMateriais = [];
        this.getDataService
            .getCountMateriais(response)
            .subscribe(res => {
            if (res.status === 200) {
                this.emptyMateriais = false;
                this.reqMateriais = res['body'];
                this.reqMateriais.forEach(element => {
                    this.reqCodMateriais.push(element.CODIGOMATERIAL);
                });
                this.getMateriais(response);
            }
            else if (res.status === 204) {
                this.materiaisID_ = [];
                this.materiaisID = [];
                this.emptyMateriais = true;
                this.pnotify.notice('Não há itens a serem exibidos');
            }
            else {
                this.emptyMateriais = true;
                this.pnotify.error('Erro ao carregar Cards Materiais');
            }
        }, error => {
            this.emptyMateriais = true;
            this.pnotify.error('Erro ao carregar Cards Materiais');
        });
    }
    getMateriais(response) {
        this.materiaisID_ = [];
        this.materiaisID = [];
        this.loading = true;
        //armazena as requisições
        let request = [];
        let itensRequest = 5;
        let totalItens = this.reqCodMateriais.length;
        let i = 0;
        let reqCodMateriais = "";
        let qtdRequest = Math.ceil(totalItens / itensRequest);
        for (let index = 0; index < qtdRequest; index++) {
            reqCodMateriais = this.reqCodMateriais.slice(i, i + 5);
            i += 5;
            request.push(this.getDataService.getDemandasMateriais({
                materiais: btoa(reqCodMateriais),
                unidades: response['unidades']
            }));
        }
        Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["forkJoin"])(request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => {
            this.loading = false;
            this.viewLegend = true;
            this.materiaisID = this.materiaisID_;
        }))
            .subscribe(response => {
            response.forEach(element => {
                if (element['status'] === 200) {
                    element['body'].forEach(material => {
                        this.materiaisID_.push(material);
                    });
                }
            });
        });
    }
    getMateriaisDetalhes(unidade, material, pesoEspecifico) {
        this.loading = true;
        this.materiaisDetalhes = [];
        this.getDataService.getMateriaisDetalhes(unidade, material, pesoEspecifico).subscribe((response) => {
            if (Object.keys(response).length > 0) {
                if (response.status === 200) {
                    this.materiaisDetalhes = response['body'];
                }
            }
            else if (response.status === 204) {
                this.pnotify.notice('Não há itens a serem exibidos');
            }
            else {
                this.pnotify.error('Erro ao carregar detalhes dos Materiais');
            }
            this.loading = false;
        }, error => {
            this.pnotify.error('Erro ao carregar detalhes dos Materiais');
        });
    }
    iconClass(unidade) {
        let iconClass;
        if (unidade === true && this.itemDetalhes === true) {
            iconClass = 'fas fa-minus';
        }
        else {
            iconClass = 'fas fa-plus';
        }
        return iconClass;
    }
    alteraIcone(unidade, item, index) {
        let validaIcone = false;
        this.materiaisID.forEach((element, i) => {
            return element['Unidades'].forEach((unidades, j) => {
                if (element.CodigoMaterial === item.initData.CodigoMaterial &&
                    j === index) {
                    validaIcone = !unidades['Detalhes'];
                    return (unidades['Detalhes'] = validaIcone);
                }
                else {
                    return (unidades['Detalhes'] = false);
                }
            });
        });
        item.detalhes = validaIcone;
        this.itemDetalhes = item.detalhes;
        this.index = item.id;
        this.unidadeAbt = unidade.CodigoDeposito;
        this.codMaterial = item.value.CodigoMaterial;
        this.pesoEspecifico = item.value.PesoEspecifico;
        if (item.detalhes) {
            this.getMateriaisDetalhes(this.unidadeAbt, this.codMaterial, this.pesoEspecifico);
        }
    }
    sortItems(item, campo) {
        let index = item.initData.CodigoMaterial;
        item.campoVisivel = campo;
        item.sort = !item.sort;
        this.materiaisID.forEach(element => {
            if (element.CodigoMaterial === index) {
                element.sort = !element.sort;
                element.Unidades.sort((a, b) => {
                    if (a[campo] < b[campo]) {
                        return element.sort ? 1 : -1;
                    }
                    else if (a[campo] > b[campo]) {
                        return element.sort ? -1 : 1;
                    }
                    else {
                        return 0;
                    }
                });
            }
        });
    }
    filterNivelCritico(nivelCritico) {
        this.materiaisID.forEach((material, i) => {
            let unidadeEncontrada = false;
            material['Unidades'].forEach((unidade, j) => {
                if (unidade.CodigoNivelCritico === nivelCritico) {
                    unidadeEncontrada = true;
                }
            });
            if (unidadeEncontrada) {
                this.materiaisIDFilter.push(material);
            }
        });
    }
    getFiltroNivelCritico() {
        this.filtroService
            .getFiltroNivelCritico()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => (this.viewLegend = true)))
            .subscribe((response) => {
            if (Object.keys(response).length > 0) {
                this.nivelCritico = response['body'];
            }
        });
    }
};
SulFluminenseCardsMateriaisComponent.ctorParameters = () => [
    { type: _painel_decisao_abastecimento_service__WEBPACK_IMPORTED_MODULE_10__["PainelDecisaoAbastecimentoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_8__["RouterService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"] },
    { type: _filtro_service__WEBPACK_IMPORTED_MODULE_9__["SulFluminenseFiltroService"] }
];
SulFluminenseCardsMateriaisComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'sul-fluminense-cards-materiais',
        template: _raw_loader_cards_materiais_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cards_materiais_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_painel_decisao_abastecimento_service__WEBPACK_IMPORTED_MODULE_10__["PainelDecisaoAbastecimentoService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_8__["RouterService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"],
        _filtro_service__WEBPACK_IMPORTED_MODULE_9__["SulFluminenseFiltroService"]])
], SulFluminenseCardsMateriaisComponent);



/***/ }),

/***/ "um/L":
/*!****************************************************************************!*\
  !*** ./src/app/modules/sul-fluminense/distribuicao/distribuicao.module.ts ***!
  \****************************************************************************/
/*! exports provided: SulFluminenseDistribuicaoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SulFluminenseDistribuicaoModule", function() { return SulFluminenseDistribuicaoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../shared/modules/shared.module */ "UKGz");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "6No5");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "978R");
/* harmony import */ var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/not-found/not-found.module */ "sCnT");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var _painel_decisao_abastecimento_painel_decisao_abastecimento_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./painel-decisao-abastecimento/painel-decisao-abastecimento.module */ "o1gm");
/* harmony import */ var _distribuicao_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./distribuicao-routing.module */ "G4zF");
/* harmony import */ var _distribuicao_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./distribuicao.component */ "RBxI");














let SulFluminenseDistribuicaoModule = class SulFluminenseDistribuicaoModule {
};
SulFluminenseDistribuicaoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _distribuicao_component__WEBPACK_IMPORTED_MODULE_13__["SulFluminenseDistribuicaoComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _painel_decisao_abastecimento_painel_decisao_abastecimento_module__WEBPACK_IMPORTED_MODULE_11__["SulFluminensePainelDecisaoAbastecimentoModule"],
            _distribuicao_routing_module__WEBPACK_IMPORTED_MODULE_12__["SulFluminenseDistribuicaoRoutingModule"],
            src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_9__["NotFoundModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"].forRoot(),
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginationModule"].forRoot(),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsDatepickerModule"].forRoot(),
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_10__["TemplatesModule"]
        ]
    })
], SulFluminenseDistribuicaoModule);



/***/ })

}]);
//# sourceMappingURL=distribuicao-distribuicao-module-es2015.js.map