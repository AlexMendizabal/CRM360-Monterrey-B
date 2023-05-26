(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["faturamento-detalhado-faturamento-detalhado-module"],{

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

/***/ "IzYY":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/comercial/relatorios/faturamento-detalhado/faturamento-detalhado.service.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ComercialRelatoriosFaturamentoDetalhadoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialRelatoriosFaturamentoDetalhadoService", function() { return ComercialRelatoriosFaturamentoDetalhadoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_shared_services_requests_escritorios_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/requests/escritorios.service */ "NIE8");
/* harmony import */ var _services_vendedores_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/vendedores.service */ "4xRd");





// Services


let ComercialRelatoriosFaturamentoDetalhadoService = class ComercialRelatoriosFaturamentoDetalhadoService {
    constructor(http, escritoriosService, vendedoresService) {
        this.http = http;
        this.escritoriosService = escritoriosService;
        this.vendedoresService = vendedoresService;
        this.API = `https://crm360.monterrey.com.bo/api/comercial`;
    }
    getFiltros() {
        const escritorios = this.escritoriosService.getEscritorios();
        const vendedores = this.vendedoresService.getVendedores();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])([escritorios, vendedores]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getPerfil() {
        return this.http.get(`${this.API}/perfil`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getFaturamentoDetalhado(params) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http
            .get(`${this.API}/relatorios/faturamento-detalhado/lista`, {
            params: httpParams
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
};
ComercialRelatoriosFaturamentoDetalhadoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: src_app_shared_services_requests_escritorios_service__WEBPACK_IMPORTED_MODULE_5__["EscritoriosService"] },
    { type: _services_vendedores_service__WEBPACK_IMPORTED_MODULE_6__["ComercialVendedoresService"] }
];
ComercialRelatoriosFaturamentoDetalhadoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        src_app_shared_services_requests_escritorios_service__WEBPACK_IMPORTED_MODULE_5__["EscritoriosService"],
        _services_vendedores_service__WEBPACK_IMPORTED_MODULE_6__["ComercialVendedoresService"]])
], ComercialRelatoriosFaturamentoDetalhadoService);



/***/ }),

/***/ "O30c":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/comercial/relatorios/faturamento-detalhado/faturamento-detalhado.component.scss ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL3JlbGF0b3Jpb3MvZmF0dXJhbWVudG8tZGV0YWxoYWRvL2ZhdHVyYW1lbnRvLWRldGFsaGFkby5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "Rfy5":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/relatorios/faturamento-detalhado/faturamento-detalhado.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\n<app-header appTitle=\"Faturamento detalhado\">\n  <button\n    type=\"button\"\n    (click)=\"onExport()\"\n    *ngIf=\"!itensEmpty\">\n    Exportar\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"onFilter()\"\n    [disabled]=\"!form.valid || loaderNavbar\">\n    Filtrar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\n  <advanced-filter>\n    <form [formGroup]=\"form\" autocomplete=\"off\">\n      <div class=\"form-row\">\n        <div class=\"form-group col-lg-2 mb-lg-0\">\n          <label for=\"visao\">Visão relatório</label>\n          <select\n            id=\"visao\"\n            class=\"form-control custom-select\"\n            formControlName=\"visao\">\n            <option value=\"1\">LINHA</option>\n            <option value=\"2\">CLASSE</option>\n            <option value=\"3\">PRODUTO</option>\n          </select>\n        </div>\n        <div class=\"form-group col-lg-2 mb-lg-0\">\n          <label for=\"exibirComparativo\">Comparativo ano anterior</label>\n          <select\n            id=\"exibirComparativo\"\n            class=\"form-control custom-select\"\n            formControlName=\"exibirComparativo\">\n            <option value=\"0\">Não exibir</option>\n            <option value=\"1\">Exibir</option>\n          </select>\n        </div>\n        <div class=\"form-group col-lg-2 mb-lg-0\">\n          <label for=\"inicioData\">Data inicial</label>\n          <input\n            class=\"form-control\"\n            id=\"inicioData\"\n            type=\"text\"\n            bsDatepicker\n            [bsConfig]=\"bsConfig\"\n            formControlName=\"inicioData\"\n            [ngClass]=\"onFieldError('inicioData') + ' ' + onFieldRequired('inicioData')\">\n        </div>\n        <div class=\"form-group col-lg-2 mb-lg-0\">\n          <label for=\"terminoData\">Data final</label>\n          <input\n            class=\"form-control\"\n            id=\"terminoData\"\n            type=\"text\"\n            bsDatepicker\n            [bsConfig]=\"bsConfig\"\n            formControlName=\"terminoData\"\n            [ngClass]=\"onFieldError('terminoData') + ' ' + onFieldRequired('terminoData')\">\n        </div>\n        <div class=\"form-group col-lg-2 mb-lg-0\" *ngIf=\"adminProfile\">\n          <label for=\"filtro\">Filtrar por</label>\n          <select\n            id=\"filtro\"\n            class=\"form-control custom-select\"\n            formControlName=\"filtro\"\n            (change)=\"onChangeFiltrarPor()\">\n            <option value=\"0\">TODOS</option>\n            <option value=\"1\">ESCRITÓRIO</option>\n            <option value=\"2\">VENDEDOR</option>\n            <option value=\"3\">CLIENTE</option>\n          </select>\n        </div>\n        <div class=\"form-group col-lg-2 mb-lg-0\" *ngIf=\"exibeEscritorios\">\n          <label for=\"escritorios\">Escritórios</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"false\"\n            [items]=\"escritorios\"\n            [virtualScroll]=\"true\"\n            labelForId=\"escritorio\"\n            bindLabel=\"nomeEscritorio\"\n            bindValue=\"codEscritorio\"\n            formControlName=\"escritorio\"\n            [ngClass]=\"onFieldError('escritorio') + ' ' + onFieldRequired('escritorio')\">\n          </ng-select>\n        </div>\n        <div class=\"form-group col-lg-2 mb-lg-0\" *ngIf=\"exibeVendedores\">\n          <label for=\"vendedores\">Vendedores</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"false\"\n            [items]=\"vendedores\"\n            [virtualScroll]=\"true\"\n            labelForId=\"vendedor\"\n            bindLabel=\"nome\"\n            bindValue=\"id\"\n            formControlName=\"vendedor\"\n            [ngClass]=\"onFieldError('vendedor') + ' ' + onFieldRequired('vendedor')\">\n          </ng-select>\n        </div>\n        <div class=\"form-group col-lg-2 mb-lg-0\" *ngIf=\"exibeClientes\">\n          <label for=\"cliente\">Código do cliente</label>\n          <input\n            class=\"form-control\"\n            id=\"cliente\"\n            type=\"text\"\n            formControlName=\"cliente\"\n            [ngClass]=\"onFieldError('cliente') + ' ' + onFieldRequired('cliente')\">\n        </div>\n      </div>\n    </form>\n  </advanced-filter>\n  <div class=\"row\">\n    <div class=\"col\">\n      <custom-table *ngIf=\"itensLoaded && !itensEmpty\">\n        <ng-template #thead let-thead>\n          <tr>\n            <th scope=\"col\">Linha</th>\n            <th scope=\"col\" *ngIf=\"exibeClasse || exibeProduto\">Classe</th>\n            <th scope=\"col\" *ngIf=\"exibeProduto\">Produto</th>\n            <th scope=\"col\" colspan=\"2\" class=\"text-center\" *ngIf=\"exibeComparativo\">{{ anoPassado }}</th>\n            <th scope=\"col\" colspan=\"2\" class=\"text-center\">{{ anoCorrente }}</th>\n            <th scope=\"col\" colspan=\"2\" class=\"text-center\" *ngIf=\"exibeComparativo\">Comparativo</th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr *ngFor=\"let item of itensReturned\">\n            <td>{{ item.linha | uppercase }}</td>\n            <td *ngIf=\"exibeClasse || exibeProduto\">{{ item.classe | uppercase }}</td>\n            <td *ngIf=\"exibeProduto\">{{ item.descricaoMaterial | uppercase }}</td>\n            <td class=\"text-center bg-white\" *ngIf=\"exibeComparativo\">{{ item.tonPassado | number:'1.3-3' }}t</td>\n            <td class=\"text-center bg-white\" *ngIf=\"exibeComparativo\">{{ item.valorPassado | currency:'BRL':'symbol':'1.2-2' }}</td>\n            <td class=\"text-center\">{{ item.tonCorrente | number:'1.3-3' }}t</td>\n            <td class=\"text-center\">{{ item.valorCorrente | currency:'BRL':'symbol':'1.2-2' }}</td>\n            <td class=\"text-center bg-white\" [ngClass]=\"classComparativo(item.tonPercentual)\" *ngIf=\"exibeComparativo\">{{ item.tonPercentual | number:'1.2-2' }}%</td>\n            <td class=\"text-center bg-white\" [ngClass]=\"classComparativo(item.valorPercentual)\" *ngIf=\"exibeComparativo\">{{ item.valorPercentual | number:'1.2-2' }}%</td>\n          </tr>\n          <tr>\n            <td class=\"bg-dark text-white text-center\"><strong>Total</strong></td>\n            <td *ngIf=\"exibeProduto\"></td>\n            <td *ngIf=\"exibeProduto || exibeClasse\"></td>\n            <td class=\"bg-dark text-white text-center\" *ngIf=\"exibeComparativo\"><strong>{{ comparativoTotal.tonPassado | number:'1.3-3' }}t</strong></td>\n            <td class=\"bg-dark text-white text-center\" *ngIf=\"exibeComparativo\"><strong>{{ comparativoTotal.valorPassado| currency:'BRL':'symbol':'1.2-2'}}</strong></td>\n            <td class=\"bg-dark text-white text-center\"><strong>{{ comparativoTotal.tonCorrente | number:'1.3-3' }}t</strong></td>\n            <td class=\"bg-dark text-white text-center\"><strong>{{ comparativoTotal.valorCorrente | currency:'BRL':'symbol':'1.2-2' }}</strong></td>\n            <td class=\"bg-dark text-white text-center\" [ngClass]=\"classComparativo(comparativoTotal.tonPercentual)\" *ngIf=\"exibeComparativo\"><strong>{{ comparativoTotal.tonPercentual | number:'1.2-2' }}%</strong></td>\n            <td class=\"bg-dark text-white text-center\" [ngClass]=\"classComparativo(comparativoTotal.valorPercentual)\" *ngIf=\"exibeComparativo\"><strong>{{ comparativoTotal.valorPercentual | number:'1.2-2' }}%</strong></td>\n          </tr>\n        </ng-template>\n      </custom-table>\n      <empty-result\n        message=\"Nenhuma informação encontrada\"\n        *ngIf=\"itensLoaded && itensEmpty\"\n        class=\"mt-3\">\n      </empty-result>\n      <div class=\"d-flex justify-content-center mt-3\" *ngIf=\"itens.length > itemsPerPage && !itensEmpty && !loaderNavbar\" >\n        <pagination\n          [maxSize]=\"maxSize\"\n          [(totalItems)]=\"itens.length\"\n          (pageChanged)=\"onPageChanged($event)\"\n          [(itemsPerPage)]=\"itemsPerPage\"\n          [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPage\"\n          previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\"\n          lastText=\"&raquo;\">\n        </pagination>\n      </div>\n    </div>\n  </div>\n</app-body>\n");

/***/ }),

/***/ "aSUD":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/relatorios/faturamento-detalhado/faturamento-detalhado-routing.module.ts ***!
  \************************************************************************************************************/
/*! exports provided: ComercialRelatoriosFaturamentoDetalhadoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialRelatoriosFaturamentoDetalhadoRoutingModule", function() { return ComercialRelatoriosFaturamentoDetalhadoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _faturamento_detalhado_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./faturamento-detalhado.component */ "vCO5");



// Components

const routes = [
    { path: '', component: _faturamento_detalhado_component__WEBPACK_IMPORTED_MODULE_3__["ComercialRelatoriosFaturamentoDetalhadoComponent"] }
];
let ComercialRelatoriosFaturamentoDetalhadoRoutingModule = class ComercialRelatoriosFaturamentoDetalhadoRoutingModule {
};
ComercialRelatoriosFaturamentoDetalhadoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ComercialRelatoriosFaturamentoDetalhadoRoutingModule);



/***/ }),

/***/ "vCO5":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/comercial/relatorios/faturamento-detalhado/faturamento-detalhado.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ComercialRelatoriosFaturamentoDetalhadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialRelatoriosFaturamentoDetalhadoComponent", function() { return ComercialRelatoriosFaturamentoDetalhadoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_faturamento_detalhado_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./faturamento-detalhado.component.html */ "Rfy5");
/* harmony import */ var _faturamento_detalhado_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./faturamento-detalhado.component.scss */ "O30c");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/chronos */ "xj/R");
/* harmony import */ var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/locale */ "0b5p");
/* harmony import */ var _faturamento_detalhado_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./faturamento-detalhado.service */ "IzYY");
/* harmony import */ var src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/modules/xlsx/xlsx.service */ "eOmW");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/services/core/auth.service */ "yxCR");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");








Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_10__["defineLocale"])('pt-br', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_11__["ptBrLocale"]);
// ngx-bootstrap




// Services






let ComercialRelatoriosFaturamentoDetalhadoComponent = class ComercialRelatoriosFaturamentoDetalhadoComponent {
    constructor(activatedRoute, router, location, formBuilder, pnotifyService, localeService, faturamentoDetalhadoService, xlsxService, atividadesService, authService, titleService, dateService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.location = location;
        this.formBuilder = formBuilder;
        this.pnotifyService = pnotifyService;
        this.localeService = localeService;
        this.faturamentoDetalhadoService = faturamentoDetalhadoService;
        this.xlsxService = xlsxService;
        this.atividadesService = atividadesService;
        this.authService = authService;
        this.titleService = titleService;
        this.dateService = dateService;
        this.loaderNavbar = false;
        this.loaderFullScreen = true;
        this.adminProfile = false;
        this.breadCrumbTree = [];
        this.itensLoaded = false;
        this.itensEmpty = true;
        this.itens = [];
        this.itensReturned = [];
        this.vendedores = [];
        this.escritorios = [];
        this.exibeClasse = false;
        this.exibeProduto = false;
        this.exibeLinha = false;
        this.exibeComparativo = false;
        this.comparativoTotal = [];
        this.exibeVendedores = false;
        this.exibeEscritorios = false;
        this.exibeClientes = false;
        this.maxSize = 10;
        this.itemsPerPage = 25;
        this.currentPage = 1;
        this.localeService.use('pt-br');
        this.bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' }, { adaptivePosition: true }, { showWeekNumbers: false });
        this.pnotifyService.getPNotify();
        this.idVendedor = this.authService.getCurrentUser()['info']['idVendedor'];
    }
    ngOnInit() {
        this.registrarAcesso();
        this.setBreadCrumb();
        this.getPerfil();
        this.setFormFilter();
        this.titleService.setTitle('Faturamento detalhado');
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
                    descricao: 'Relatórios',
                    routerLink: `/comercial/relatorios/${params['idSubModulo']}`
                },
                {
                    descricao: 'Faturamento detalhado'
                }
            ];
        });
    }
    getPerfil() {
        this.faturamentoDetalhadoService
            .getPerfil()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            if (this.adminProfile) {
                this.getFilterValues();
                this.onChangeFiltrarPor();
            }
            else {
                this.loaderFullScreen = false;
            }
            this.montaFiltros();
        }))
            .subscribe({
            next: (response) => {
                if (response['responseCode'] === 200) {
                    if (response['result']['coordenador'] ||
                        response['result']['gestor']) {
                        this.adminProfile = true;
                    }
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
    getFilterValues() {
        this.faturamentoDetalhadoService
            .getFiltros()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.loaderFullScreen = false;
        }))
            .subscribe({
            next: (response) => {
                if (response[0]['responseCode'] === 200) {
                    this.escritorios = response[0]['result'];
                }
                if (response[1]['responseCode'] === 200) {
                    this.vendedores = response[1]['result'];
                }
            },
            error: (error) => {
                this.pnotifyService.error();
                this.location.back();
            }
        });
    }
    setFormFilter() {
        const formValue = this.checkRouterParams();
        this.form = this.formBuilder.group({
            visao: [formValue['visao'], [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            filtro: [formValue['filtro'], [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            inicioData: [formValue['inicioData'], [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            terminoData: [formValue['terminoData'], [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            exibirComparativo: [formValue['exibirComparativo']],
            vendedor: [formValue['vendedor']],
            escritorio: [formValue['escritorio']],
            cliente: [formValue['cliente']]
        });
    }
    checkRouterParams() {
        let formValue = {
            visao: 1,
            filtro: 0,
            inicioData: this.dateService.getFirstDayMonth(),
            terminoData: new Date(),
            exibirComparativo: 0,
            vendedor: null,
            escritorio: null,
            cliente: null
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
                            if (formKey === 'inicioData' || formKey === 'terminoData') {
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
    onFilter() {
        if (this.form.valid) {
            this.setRouterParams(this.verificaParams());
            this.currentPage = 1;
        }
    }
    search(params) {
        this.loaderNavbar = true;
        this.itensLoaded = false;
        this.itensEmpty = true;
        this.itens = [];
        this.itensReturned = [];
        this.faturamentoDetalhadoService
            .getFaturamentoDetalhado(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.loaderNavbar = false;
            this.itensLoaded = true;
            this.visaoRelatorio(params['visao']);
            this.verificaComparativo(params['exibirComparativo']);
        }))
            .subscribe({
            next: (response) => {
                if (response['responseCode'] === 200) {
                    if (response['result']['analitico'].length != 0 &&
                        response['result']['analitico']) {
                        let d = new Date();
                        this.anoCorrente = d.getFullYear();
                        this.anoPassado = this.anoCorrente - 1;
                        this.itens = response['result']['analitico'];
                        this.itensReturned = this.itens.slice(0, this.itemsPerPage);
                        this.comparativoTotal = response['result']['total'];
                        this.itensEmpty = false;
                    }
                }
                else if (response['responseCode'] === 204) {
                    this.pnotifyService.notice('Nenhuma informação encontrada');
                }
            },
            error: (error) => {
                this.pnotifyService.error();
                this.location.back();
            }
        });
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
        params['visao'] = this.form.value['visao'];
        params['exibirComparativo'] = this.form.value['exibirComparativo'];
        params['inicioData'] = this.dateService.convertToUrlDate(new Date(this.form.value['inicioData']));
        params['terminoData'] = this.dateService.convertToUrlDate(new Date(this.form.value['terminoData']));
        params['filtro'] = this.form.value['filtro'];
        if (this.form.value['escritorio']) {
            params['escritorio'] = this.form.value['escritorio'];
        }
        if (this.form.value['vendedor']) {
            params['vendedor'] = this.form.value['vendedor'];
        }
        if (this.form.value['cliente']) {
            params['cliente'] = this.form.value['cliente'];
        }
        return params;
    }
    montaFiltros() {
        if (this.adminProfile == false) {
            this.form.controls['filtro'].setValue(2);
            this.form.controls['vendedor'].setValue(this.idVendedor);
        }
    }
    onChangeFiltrarPor() {
        if (this.form.value['filtro'] == 1) {
            this.exibeEscritorios = true;
            this.form.controls['escritorio'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
        }
        else {
            this.exibeEscritorios = false;
            this.form.controls['escritorio'].clearValidators();
        }
        this.form.controls['escritorio'].updateValueAndValidity();
        if (this.form.value['filtro'] == 2) {
            this.exibeVendedores = true;
            this.form.controls['vendedor'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
        }
        else {
            this.exibeVendedores = false;
            this.form.controls['vendedor'].clearValidators();
        }
        this.form.controls['vendedor'].updateValueAndValidity();
        if (this.form.value['filtro'] == 3) {
            this.exibeClientes = true;
            this.form.controls['cliente'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
        }
        else {
            this.exibeClientes = false;
            this.form.controls['cliente'].clearValidators();
        }
        this.form.controls['cliente'].updateValueAndValidity();
    }
    onExport() {
        let data = new Date().toLocaleDateString().split('/'), dataExport = `${data[0]}${data[1]}${data[2]}`;
        let listagemExport = [];
        listagemExport = this.itens.concat(this.comparativoTotal);
        this.xlsxService.exportFile(listagemExport, `FaturamentoDetalhado_${dataExport}`);
    }
    verificaComparativo(comparativo) {
        this.exibeComparativo = comparativo == 1 ? true : false;
    }
    verificaData(inicio, termino) {
        let dtInicio, dtTermino;
        dtInicio = `${inicio.getFullYear()}-${inicio.getMonth() +
            1}-${inicio.getDate()}`;
        dtTermino = `${termino.getFullYear()}-${termino.getMonth() +
            1}-${termino.getDate()}`;
        return [dtInicio, dtTermino];
    }
    visaoRelatorio(visao) {
        this.exibeLinha = visao == 1 ? true : false;
        this.exibeClasse = visao == 2 ? true : false;
        this.exibeProduto = visao == 3 ? true : false;
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
    classComparativo(value) {
        let textClass = '';
        if (value > 0) {
            textClass = 'text-success';
        }
        else if (value < 0) {
            textClass = 'text-danger';
        }
        return textClass;
    }
    onPageChanged(event) {
        const startItem = (event.page - 1) * event.itemsPerPage;
        const endItem = event.page * event.itemsPerPage;
        this.itensReturned = this.itens.slice(startItem, endItem);
    }
};
ComercialRelatoriosFaturamentoDetalhadoComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"] },
    { type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsLocaleService"] },
    { type: _faturamento_detalhado_service__WEBPACK_IMPORTED_MODULE_12__["ComercialRelatoriosFaturamentoDetalhadoService"] },
    { type: src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_13__["XlsxService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_14__["AtividadesService"] },
    { type: src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_16__["TitleService"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_17__["DateService"] }
];
ComercialRelatoriosFaturamentoDetalhadoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-relatorios-faturamento-detalhado',
        template: _raw_loader_faturamento_detalhado_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_faturamento_detalhado_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"],
        ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsLocaleService"],
        _faturamento_detalhado_service__WEBPACK_IMPORTED_MODULE_12__["ComercialRelatoriosFaturamentoDetalhadoService"],
        src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_13__["XlsxService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_14__["AtividadesService"],
        src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_16__["TitleService"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_17__["DateService"]])
], ComercialRelatoriosFaturamentoDetalhadoComponent);



/***/ }),

/***/ "xkYQ":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/comercial/relatorios/faturamento-detalhado/faturamento-detalhado.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: ComercialRelatoriosFaturamentoDetalhadoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialRelatoriosFaturamentoDetalhadoModule", function() { return ComercialRelatoriosFaturamentoDetalhadoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/locales/pt */ "vT00");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "6No5");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var _faturamento_detalhado_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./faturamento-detalhado-routing.module */ "aSUD");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var _faturamento_detalhado_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./faturamento-detalhado.component */ "vCO5");






Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_4___default.a, 'pt-BR');
// ngx-bootstrap


// ng-select

// Modules



// Components

let ComercialRelatoriosFaturamentoDetalhadoModule = class ComercialRelatoriosFaturamentoDetalhadoModule {
};
ComercialRelatoriosFaturamentoDetalhadoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_faturamento_detalhado_component__WEBPACK_IMPORTED_MODULE_11__["ComercialRelatoriosFaturamentoDetalhadoComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_6__["PaginationModule"].forRoot(),
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
            _faturamento_detalhado_routing_module__WEBPACK_IMPORTED_MODULE_8__["ComercialRelatoriosFaturamentoDetalhadoRoutingModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_10__["TemplatesModule"]
        ]
    })
], ComercialRelatoriosFaturamentoDetalhadoModule);



/***/ })

}]);
//# sourceMappingURL=faturamento-detalhado-faturamento-detalhado-module-es2015.js.map