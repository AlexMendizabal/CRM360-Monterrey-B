(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["posicao-diaria-posicao-diaria-module"],{

/***/ "EWa7":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/comercial/relatorios/posicao-diaria/posicao-diaria.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL3JlbGF0b3Jpb3MvcG9zaWNhby1kaWFyaWEvcG9zaWNhby1kaWFyaWEuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "JRbZ":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/comercial/relatorios/posicao-diaria/posicao-diaria.service.ts ***!
  \***************************************************************************************/
/*! exports provided: ComercialRelatoriosPosicaoDiariaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialRelatoriosPosicaoDiariaService", function() { return ComercialRelatoriosPosicaoDiariaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");




let ComercialRelatoriosPosicaoDiariaService = class ComercialRelatoriosPosicaoDiariaService {
    constructor(http) {
        this.http = http;
        this.API = `https://crm360.monterrey.com.bo/api/comercial/relatorios/posicao-diaria`;
    }
    getPerfis() {
        return this.http.get(`${this.API}/perfis`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(2));
    }
    getListaManetoni(data) {
        return this.http.get(`${this.API}/lista/${data}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(2));
    }
    getListaDBA(data) {
        return this.http
            .get(`${this.API}/lista-dba/${data}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(2));
    }
    getDetalhesManetoni(params) {
        return this.http
            .get(`${this.API}/detalhes/${params.data}/${params.ordem}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(2));
    }
    postRitmoEditado(params) {
        return this.http.post(`${this.API}/salvar`, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(2));
    }
};
ComercialRelatoriosPosicaoDiariaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
ComercialRelatoriosPosicaoDiariaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], ComercialRelatoriosPosicaoDiariaService);



/***/ }),

/***/ "Z7p4":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/relatorios/posicao-diaria/posicao-diaria.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\n<app-header appTitle=\"Posição diária\">\n  <button\n    type=\"button\"\n    (click)=\"onFilter()\">\n    Filtrar\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"onExport()\"\n    *ngIf=\"listagemLoaded && adminProfile\">\n    Exportar\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"onSubmit()\"\n    *ngIf=\"listagemLoaded && adminProfile\">\n    Salvar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\n  <advanced-filter>\n    <form [formGroup]=\"form\" autocomplete=\"off\">\n      <div class=\"form-row\">\n        <div class=\"form-group col-lg-2 mb-lg-0\">\n          <label for=\"data\">Data</label>\n          <input\n            class=\"form-control\"\n            id=\"data\"\n            type=\"text\"\n            bsDatepicker\n            [bsConfig]=\"bsConfig\"\n            formControlName=\"data\"\n            [ngClass]=\"onFieldError('data') + ' ' + onFieldRequired('data')\">\n        </div>\n      </div>\n    </form>\n  </advanced-filter>\n  <div class=\"row\" *ngIf=\"listagemLoaded\">\n    <div class=\"col\">\n      <tabset>\n        <tab heading=\"Manetoni\" class=\"border-right border-left border-bottom\">\n          <ng-template #templateRitmo><div [innerHtml]=\"tooltipRitmo\"></div></ng-template>\n          <custom-table *ngIf=\"listagemLoaded && !listagemEmpty\">\n            <ng-template #thead let-thead>\n              <tr>\n                <th class=\"align-middle text-center\" rowspan=\"2\" scope=\"col\"></th>\n                <th class=\"align-middle text-center\" rowspan=\"2\" scope=\"col\">Linha</th>\n                <th class=\"text-center\" colspan=\"2\" scope=\"col\">{{ dtPesquisa }}</th>\n                <th class=\"text-center\" colspan=\"2\" scope=\"col\">{{ mesAtual }}</th>\n                <th class=\"text-center\" colspan=\"2\" scope=\"col\">Ritmo <i class=\"far fa-question-circle\" [tooltip]=\"templateRitmo\"></i></th>\n                <th class=\"text-center\" colspan=\"2\" scope=\"col\">Editado</th>\n                <th class=\"text-center\" colspan=\"2\" scope=\"col\">Metas</th>\n                <th class=\"text-center\" colspan=\"2\" scope=\"col\">Metas/Editado</th>\n              </tr>\n              <tr>\n                <!-- Dia Atual -->\n                <th scope=\"col\" class=\"text-center\">Ton</th>\n                <th scope=\"col\" class=\"text-center\">R$</th>\n                <!-- Mes Atual -->\n                <th scope=\"col\" class=\"text-center\">Ton</th>\n                <th scope=\"col\" class=\"text-center\">R$</th>\n                <!-- Ritmo -->\n                <th scope=\"col\" class=\"text-center\">Ton</th>\n                <th scope=\"col\" class=\"text-center\">R$</th>\n                <!-- Editado -->\n                <th cope=\"col\" class=\"text-center\">Ton</th>\n                <th scope=\"col\" class=\"text-center\">R$</th>\n                <!-- Metas -->\n                <th scope=\"col\" class=\"text-center\">Ton</th>\n                <th scope=\"col\" class=\"text-center\">R$</th>\n                <!-- Metas/Editado -->\n                <th scope=\"col\" class=\"text-center\">Peso</th>\n                <th scope=\"col\" class=\"text-center\">Valor</th>\n              </tr>\n            </ng-template>\n            <ng-template #tbody let-tbody>\n              <tr *ngFor=\"let item of listagem; let i = index\" [class.table-active]=\"i == linha\">\n                <td>\n                  <span tooltip=\"Mais informações\" placement=\"left\" container=\"body\">\n                    <button type=\"button\" class=\"btn-icon-sm ml-3\" *ngIf=\"onExibir(item.podeEditar)\" (click)=\"onDetalhesFilter(detalhes, item.linha, i + 1)\">\n                      <i class=\"fas fa-plus\"></i>\n                    </button>\n                  </span>\n                </td>\n                <td class=\"text-center\">{{ item.linha }}</td>\n                <td class=\"text-center\">{{ item.toneladaHoje | number:'1.0-0' }}</td>\n                <td class=\"text-center\">{{ item.valorHoje | number:'1.0-0' }}</td>\n                <td class=\"text-center\">{{ item.toneladaMesAtual | number:'1.0-0' }}</td>\n                <td class=\"text-center\">{{ item.valorMesAtual | number:'1.0-0' }}</td>\n                <td class=\"text-center\">{{ item.toneladaRitmo | number:'1.0-0' }}</td>\n                <td class=\"text-center\">{{ item.valorRitmo | number:'1.0-0' }}</td>\n                <!-- Campos Editaveis -->\n                <td class=\"text-center bg-white\">\n                  <span *ngIf=\"!adminProfile || !onExibir(item.podeEditar)\" >{{ item.toneladaEditado | number:'1.0-0' }}</span>\n                  <div class=\"d-flex justify-content-center\" *ngIf=\"adminProfile && onExibir(item.podeEditar)\">\n                    <input\n                      style=\"max-width: 80px;\"\n                      type=\"text\"\n                      class=\"form-control form-control-sm\"\n                      [(ngModel)]=\"formEdit.toneladaEditado[i]\"\n                      name=\"toneladaEditado_{{i}}\"\n                      currencyMask [options]=\"{ align: 'center', prefix: '', thousands: '.', decimal: ',' }\">\n                  </div>\n                </td>\n                <td class=\"text-center bg-white\">\n                  <span *ngIf=\"!adminProfile || !onExibir(item.podeEditar)\">{{ item.valorEditado | number:'1.0-0' }}</span>\n                  <div class=\"d-flex justify-content-center\" *ngIf=\"adminProfile && onExibir(item.podeEditar)\">\n                    <input\n                      style=\"max-width: 80px;\"\n                      type=\"text\"\n                      class=\"form-control form-control-sm\"\n                      [(ngModel)]=\"formEdit.valorEditado[i]\"\n                      name=\"valorEditado{{i}}\"\n                      currencyMask [options]=\"{ align: 'center', prefix: '', thousands: '.', decimal: ',', precision: 0 }\">\n                  </div>\n                </td>\n                <td class=\"text-center bg-white\">\n                  <span *ngIf=\"!adminProfile || !onExibir(item.podeEditar)\">{{ item.toneladaMeta | number:'1.0-0' }}</span>\n                  <div class=\"d-flex justify-content-center\" *ngIf=\"adminProfile && onExibir(item.podeEditar)\">\n                    <input\n                      style=\"max-width: 80px;\"\n                      type=\"text\"\n                      class=\"form-control form-control-sm\"\n                      [(ngModel)]=\"formEdit.toneladaMeta[i]\"\n                      name=\"toneladaMeta{{i}}\"\n                      currencyMask [options]=\"{ align: 'center', prefix: '', thousands: '.', decimal: ',' }\">\n                  </div>\n                </td>\n                <td class=\"text-center bg-white\">\n                  <span *ngIf=\"!adminProfile || !onExibir(item.podeEditar)\">{{ item.valorMeta | number:'1.0-0' }}</span>\n                  <div class=\"d-flex justify-content-center\" *ngIf=\"adminProfile && onExibir(item.podeEditar)\">\n                    <input\n                      style=\"max-width: 80px;\"\n                      type=\"text\"\n                      class=\"form-control form-control-sm\"\n                      [(ngModel)]=\"formEdit.valorMeta[i]\"\n                      name=\"valorMeta{{i}}\"\n                      currencyMask [options]=\"{ align: 'center', prefix: '', thousands: '.', decimal: ',', precision: 0 }\">\n                  </div>\n                </td>\n                <td class=\"text-center bg-white\" [ngClass]=\"classComparativo(item.toneladaMetaEditado)\">{{ item.toneladaMetaEditado | number:'1.2-2' }}%</td>\n                <td class=\"text-center bg-white\" [ngClass]=\"classComparativo(item.valorMetaEditado)\">{{ item.valorMetaEditado | number:'1.2-2' }}%</td>\n              </tr>\n              <!-- Totais -->\n              <tr>\n                <td class=\"bg-dark text-white text-center\" colspan=\"2\"><strong>Total</strong></td>\n                <td class=\"bg-dark text-white text-center\"><strong>{{ totalGeral.toneladaHoje | number:'1.0-0' }}</strong></td>\n                <td class=\"bg-dark text-white text-center\"><strong>{{ totalGeral.valorHoje | number:'1.0-0' }}</strong></td>\n                <td class=\"bg-dark text-white text-center\"><strong>{{ totalGeral.toneladaMesAtual | number:'1.0-0' }}</strong></td>\n                <td class=\"bg-dark text-white text-center\"><strong>{{ totalGeral.valorMesAtual | number:'1.0-0' }}</strong></td>\n                <td class=\"bg-dark text-white text-center\"><strong>{{ totalGeral.toneladaRitmo | number:'1.3-3' }}</strong></td>\n                <td class=\"bg-dark text-white text-center\"><strong>{{ totalGeral.valorRitmo | number:'1.0-0' }}</strong></td>\n                <td class=\"bg-dark text-white text-center\"><strong>{{ totalGeral.toneladaEditado | number:'1.0-0' }}</strong></td>\n                <td class=\"bg-dark text-white text-center\"><strong>{{ totalGeral.valorEditado | number:'1.0-0' }}</strong></td>\n                <td class=\"bg-dark text-white text-center\"><strong>{{ totalGeral.toneladaMeta | number:'1.0-0' }}</strong></td>\n                <td class=\"bg-dark text-white text-center\"><strong>{{ totalGeral.valorMeta | number:'1.0-0' }}</strong></td>\n                <td class=\"bg-dark text-white text-center\" [ngClass]=\"classComparativo(totalGeral.toneladaMetaEditado)\"><strong>{{ totalGeral.toneladaMetaEditado | number:'1.2-2' }}%</strong></td>\n                <td class=\"bg-dark text-white text-center\" [ngClass]=\"classComparativo(totalGeral.valorMetaEditado)\"><strong>{{ totalGeral.valorMetaEditado | number:'1.2-2' }}%</strong></td>\n              </tr>\n            </ng-template>\n          </custom-table>\n          <empty-result message=\"Nenhuma informação encontrada\" class=\"py-3\" *ngIf=\"listagemEmpty\"></empty-result>\n        </tab>\n        <tab heading=\"DBA's\" class=\"border-right border-left border-bottom\" *ngIf=\"acessoDBAs === true\">\n            <ng-template #templateRitmo><div [innerHtml]=\"tooltipRitmo\"></div></ng-template>\n            <custom-table [config]=\"tableConfig\" *ngIf=\"listagemDBALoaded && !listagemDBAEmpty\">\n              <ng-template #thead let-thead>\n                <tr>\n                  <th class=\"align-middle\" scope=\"col\">Unidade</th>\n                  <th class=\"align-middle text-center\" scope=\"col\">{{ dtPesquisa }}</th>\n                  <th class=\"align-middle text-center\" scope=\"col\">Total {{ mesAtual }}</th>\n                  <th class=\"align-middle text-center\" scope=\"col\">Ritmo {{ mesAtual }}</th>\n                </tr>\n              </ng-template>\n              <ng-template #tbody let-tbody>\n                <tr *ngFor=\"let item of listagemDBA; let i = index\">\n                  <td>{{ item.nomeEscritorio | uppercase }}</td>\n                  <td class=\"text-center\">{{ item.toneladasDiaAnterior | number:'1.3-3' }} Ton</td>\n                  <td class=\"text-center\">{{ item.toneladasMesAtual | number:'1.3-3' }} Ton</td>\n                  <td class=\"text-center\">{{ item.ritmo | number:'1.0-0' }} Ton</td>\n                </tr>\n                <tr>\n                  <td class=\"bg-dark text-white\"><strong>{{ totaisDBA.nomeEscritorio | uppercase }}</strong></td>\n                  <td class=\"bg-dark text-white text-center\"><strong>{{ totaisDBA.toneladasDiaAnterior | number:'1.3-3' }} Ton</strong></td>\n                  <td class=\"bg-dark text-white text-center\"><strong>{{ totaisDBA.toneladasMesAtual | number:'1.3-3' }} Ton</strong></td>\n                  <td class=\"bg-dark text-white text-center\" [ngClass]=\"classComparativo(totaisDBA.ritmo)\"><strong>{{ totaisDBA.ritmo | number:'1.0-0' }} Ton</strong></td>\n                </tr>\n              </ng-template>\n            </custom-table>\n            <empty-result message=\"Nenhuma informação encontrada\" class=\"py-3\" *ngIf=\"listagemDBAEmpty\"></empty-result>\n        </tab>\n      </tabset>\n    </div>\n  </div>\n</app-body>\n<ng-template #detalhes>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">{{ detalhesTitulo }}</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"onModalClose()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <custom-table *ngIf=\"detalhesClasseLoaded && !detalhesClasseEmpty\">\n      <ng-template #thead let-thead>\n        <tr>\n          <th class=\"text-center\" rowspan=\"2\" scope=\"col\">Classe</th>\n          <th class=\"text-center\" colspan=\"2\" scope=\"col\">{{ dtPesquisa }}</th>\n          <th class=\"text-center\" colspan=\"2\" scope=\"col\">{{ mesAtual }}</th>\n          <th class=\"text-center\" colspan=\"2\" scope=\"col\">Ritmo</th>\n        </tr>\n        <tr>\n          <!-- Dia Atual -->\n          <th scope=\"col\" class=\"text-center\">Ton</th>\n          <th scope=\"col\" class=\"text-center\">R$</th>\n          <!-- Mes Atual -->\n          <th scope=\"col\" class=\"text-center\">Ton</th>\n          <th scope=\"col\" class=\"text-center\">R$</th>\n          <!-- Ritmo -->\n          <th scope=\"col\" class=\"text-center\">Ton</th>\n          <th scope=\"col\" class=\"text-center\">R$</th>\n        </tr>\n      </ng-template>\n      <ng-template #tbody let-tbody>\n        <tr *ngFor=\"let item of detalhesClasse\">\n          <td class=\"text-center\">{{ item.classe }}</td>\n          <td class=\"text-center\">{{ item.toneladaHoje | number:'1.0-0' }}</td>\n          <td class=\"text-center\">{{ item.valorHoje | number:'1.0-0' }}</td>\n          <td class=\"text-center\">{{ item.toneladaMesAtual | number:'1.0-0' }}</td>\n          <td class=\"text-center\">{{ item.valorMesAtual | number:'1.0-0' }}</td>\n          <td class=\"text-center\">{{ item.toneladaRitmo | number:'1.0-0' }}</td>\n          <td class=\"text-center\">{{ item.valorRitmo | number:'1.0-0' }}</td>\n        </tr>\n        <tr>\n          <td class=\"bg-dark text-white text-center\"><strong>Total</strong></td>\n          <td class=\"bg-dark text-white text-center\"><strong>{{ detalhesTotais.toneladaHoje | number:'1.0-0' }}</strong></td>\n          <td class=\"bg-dark text-white text-center\"><strong>{{ detalhesTotais.valorHoje | number:'1.0-0' }}</strong></td>\n          <td class=\"bg-dark text-white text-center\"><strong>{{ detalhesTotais.toneladaMesAtual | number:'1.0-0' }}</strong></td>\n          <td class=\"bg-dark text-white text-center\"><strong>{{ detalhesTotais.valorMesAtual | number:'1.0-0' }}</strong></td>\n          <td class=\"bg-dark text-white text-center\"><strong>{{ detalhesTotais.toneladaRitmo | number:'1.0-0' }}</strong></td>\n          <td class=\"bg-dark text-white text-center\"><strong>{{ detalhesTotais.valorRitmo | number:'1.0-0' }}</strong></td>\n        </tr>\n      </ng-template>\n    </custom-table>\n    <empty-result message=\"Nenhuma informação encontrada\" *ngIf=\"detalhesClasseEmpty\"></empty-result>\n  </div>\n</ng-template>\n");

/***/ }),

/***/ "fjxV":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/comercial/relatorios/posicao-diaria/posicao-diaria.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ComercialRelatoriosPosicaoDiariaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialRelatoriosPosicaoDiariaComponent", function() { return ComercialRelatoriosPosicaoDiariaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_posicao_diaria_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./posicao-diaria.component.html */ "Z7p4");
/* harmony import */ var _posicao_diaria_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./posicao-diaria.component.scss */ "EWa7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/chronos */ "xj/R");
/* harmony import */ var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/locale */ "0b5p");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");
/* harmony import */ var _posicao_diaria_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./posicao-diaria.service */ "JRbZ");
/* harmony import */ var src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/modules/xlsx/xlsx.service */ "eOmW");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");








// ngx-bootstrap





Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_10__["defineLocale"])('pt-br', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_11__["ptBrLocale"]);
// Services





let ComercialRelatoriosPosicaoDiariaComponent = class ComercialRelatoriosPosicaoDiariaComponent {
    constructor(router, location, formBuilder, activatedRoute, dateService, modalService, pnotifyService, localeService, xlsxService, posicaoDiariaService, atividadesService, titleService) {
        this.router = router;
        this.location = location;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.dateService = dateService;
        this.modalService = modalService;
        this.pnotifyService = pnotifyService;
        this.localeService = localeService;
        this.xlsxService = xlsxService;
        this.posicaoDiariaService = posicaoDiariaService;
        this.atividadesService = atividadesService;
        this.titleService = titleService;
        this.loaderNavbar = false;
        this.loaderFullScreen = true;
        this.breadCrumbTree = [];
        this.tableConfig = {
            hover: false,
            small: false,
        };
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.matriculaUser = this.currentUser.info.matricula;
        this.adminProfile = false;
        this.acessoDBAs = false;
        this.listagem = [];
        this.listagemLoaded = false;
        this.listagemEmpty = false;
        this.tooltipRitmo = {};
        this.totalGeral = {};
        this.listagemDBA = [];
        this.totaisDBA = [];
        this.detalhesClasseEmpty = false;
        this.detalhesClasseLoaded = false;
        this.detalhesClasse = [];
        this.detalhesTotais = {};
        this.listagemExport = [];
        this.formEdit = {
            toneladaEditado: [0, 0, 0, 0, 0, 0, 0, 0],
            valorEditado: [0, 0, 0, 0, 0, 0, 0, 0],
            toneladaMeta: [0, 0, 0, 0, 0, 0, 0, 0],
            valorMeta: [0, 0, 0, 0, 0, 0, 0, 0],
        };
        this.localeService.use('pt-br');
        this.bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' }, { adaptivePosition: true }, { showWeekNumbers: false });
        this.pnotifyService.getPNotify();
    }
    ngOnInit() {
        this.registrarAcesso();
        this.setBreadCrumb();
        this.getPerfil();
        this.titleService.setTitle('Posição diária');
    }
    registrarAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
    }
    setBreadCrumb() {
        this.activatedRoute.params.subscribe((params) => {
            this.breadCrumbTree = [
                {
                    descricao: 'Home',
                    routerLink: '/comercial/home',
                },
                {
                    descricao: 'Relatórios',
                    routerLink: `/comercial/relatorios/${params.idSubModulo}`,
                },
                {
                    descricao: 'Posição diária',
                },
            ];
        });
    }
    getPerfil() {
        this.posicaoDiariaService
            .getPerfis()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.loaderFullScreen = false;
            this.setFormFilter();
        }))
            .subscribe({
            next: (response) => {
                if (response.success === true) {
                    this.adminProfile = response.data.acessoAdmin;
                    this.acessoDBAs = response.data.acessoDBAs;
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
    setFormFilter() {
        const formValue = this.checkRouterParams();
        this.form = this.formBuilder.group({
            data: [formValue.data, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
        });
    }
    checkRouterParams() {
        let formValue = {
            data: new Date(),
        };
        this.activatedRouteSubscription = this.activatedRoute.queryParams.subscribe((queryParams) => {
            if (Object.keys(queryParams).length > 0) {
                let params = atob(queryParams.q);
                params = JSON.parse(params);
                this.search(params);
                this.onLoadRitmoDBA(params);
                Object.keys(formValue).forEach((formKey) => {
                    Object.keys(params).forEach((paramKey) => {
                        if (formKey == paramKey &&
                            formValue[formKey] != params[paramKey]) {
                            if (formKey === 'data') {
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
            else {
                const params = {
                    data: this.dateService.convertToUrlDate(new Date(formValue.data)),
                };
                this.search(params);
                this.onLoadRitmoDBA(params);
            }
        });
        this.activatedRouteSubscription.unsubscribe();
        return formValue;
    }
    onFilter() {
        if (this.form.valid) {
            this.setRouterParams(this.verificaParams());
        }
    }
    verificaParams() {
        let params = {};
        params.data = this.dateService.convertToUrlDate(new Date(this.form.value.data));
        return params;
    }
    setRouterParams(params) {
        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: { q: btoa(JSON.stringify(params)) },
        });
        this.search(params);
        this.onLoadRitmoDBA(params);
    }
    search(params) {
        this.loaderNavbar = true;
        this.listagemEmpty = false;
        this.listagemLoaded = false;
        this.posicaoDiariaService
            .getListaManetoni(params.data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.loaderNavbar = false;
            this.listagemLoaded = true;
            this.setDateFormValues();
        }))
            .subscribe({
            next: (response) => {
                if (response.success === true) {
                    if (response.data.analitico && response.data.analitico.length > 0) {
                        this.listagem = response.data.analitico;
                        this.listagemExport = response.data;
                        this.formEdit = {
                            toneladaEditado: [],
                            valorEditado: [],
                            toneladaMeta: [],
                            valorMeta: [],
                        };
                        for (let i = 0; i < this.listagem.length; i++) {
                            if (this.listagem[i].linha != 'TOTAL LONGOS') {
                                this.formEdit.toneladaEditado[i] = this.listagem[i]['toneladaEditado'];
                                this.formEdit.valorEditado[i] = this.listagem[i]['valorEditado'];
                                this.formEdit.toneladaMeta[i] = this.listagem[i]['toneladaMeta'];
                                this.formEdit.valorMeta[i] = this.listagem[i].valorMeta;
                            }
                        }
                        this.tooltipRitmo = `Dias úteis até hoje: ${response.data.dias.ateHoje}. Dias úteis no mês: ${response.data.dias.uteisMes}`;
                        this.tooltipRitmo = `<p class="mb-0">Dias úteis até hoje: ${response.data.dias.ateHoje}.</p><p class="mb-0">Dias úteis no mês: ${response.data.dias.uteisMes}.</p>`;
                        this.totalGeral = response.data.total;
                    }
                    else {
                        this.listagemEmpty = true;
                    }
                }
                else {
                    this.listagemEmpty = true;
                }
            },
            error: (error) => {
                this.listagemEmpty = true;
                this.pnotifyService.error();
            }
        });
    }
    onExibir(podeEditar) {
        return podeEditar === 1 ? true : false;
    }
    onLoadRitmoDBA(params) {
        if (this.acessoDBAs === true) {
            this.listagemDBALoaded = false;
            this.listagemDBAEmpty = false;
            this.posicaoDiariaService.getListaDBA(params.data).subscribe({
                next: (response) => {
                    if (response.success === true) {
                        this.listagemDBA = response.data.analitico;
                        this.totaisDBA = response.data.total;
                        this.listagemDBALoaded = true;
                    }
                    else {
                        this.listagemDBAEmpty = true;
                    }
                },
                error: (error) => {
                    this.pnotifyService.error();
                }
            });
        }
    }
    setDateFormValues() {
        const dia = this.form.value.data.getDate() < 10
            ? `0${this.form.value.data.getDate()}`
            : this.form.value.data.getDate();
        const mes = this.form.value.data.getMonth() + 1 < 10
            ? `0${this.form.value.data.getMonth() + 1}`
            : this.form.value.data.getMonth() + 1;
        this.dtPesquisa = `${dia}/${mes}/${this.form.value['data'].getFullYear()}`;
        this.mesAtual = `${this.dateService.getFullMonth(this.form.value.data)}/${this.form.value.data.getFullYear()}`;
    }
    onDetalhesFilter(detalhes, linha, ordem) {
        this.loaderNavbar = true;
        this.detalhesClasseLoaded = false;
        this.detalhesClasseEmpty = false;
        this.linha = ordem - 1;
        this.posicaoDiariaService
            .getDetalhesManetoni({
            data: this.dateService.convertToUrlDate(new Date(this.form.value.data)),
            ordem: ordem,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.loaderNavbar = false;
        }))
            .subscribe({
            next: (response) => {
                if (response.success === true) {
                    if (response.data.analitico && response.data.analitico.length > 0) {
                        this.detalhesTitulo = linha;
                        this.detalhesClasse = response.data.analitico;
                        this.detalhesTotais = response.data.total;
                        this.detalhesClasseLoaded = true;
                        setTimeout(() => {
                            this.openModal(detalhes);
                        }, 500);
                    }
                    else {
                        this.detalhesClasseEmpty = true;
                    }
                }
            },
            error: (error) => {
                this.pnotifyService.error();
                this.location.back();
            }
        });
    }
    openModal(detalhes) {
        console.log(detalhes);
        this.modalRef = this.modalService.show(detalhes, Object.assign({
            ignoreBackdropClick: true,
        }, { class: 'modal-lg' }));
    }
    onModalClose() {
        this.modalRef.hide();
        this.linha = -1;
    }
    onSubmit() {
        this.loaderNavbar = true;
        let i = 0, formObj = [];
        while (i < 9) {
            if (i != 6 && i != 8) {
                formObj.push({
                    toneladaEditado: this.formEdit.toneladaEditado[i],
                    valorEditado: this.formEdit.valorEditado[i],
                    toneladaMeta: this.formEdit.toneladaMeta[i],
                    valorMeta: this.formEdit.valorMeta[i],
                });
            }
            i++;
        }
        let params = {
            dados: formObj,
            periodo: this.dateService.convertToUrlDate(new Date(this.form.value.data)),
        };
        if (params.dados.length > 0) {
            this.posicaoDiariaService
                .postRitmoEditado(params)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
                this.loaderNavbar = false;
                this.setFormFilter();
            }))
                .subscribe((reponse) => {
                if (reponse.success === true) {
                    this.pnotifyService.success('Dados salvos com sucesso.');
                }
                else {
                    this.pnotifyService.notice('Dados não foram salvos, favor tentar novamente.');
                }
            }, (error) => {
                this.pnotifyService.notice('Dados não foram salvos, favor tentar novamente.');
            });
        }
        else {
            this.pnotifyService.notice('Favor verificar dados.');
        }
    }
    onExport() {
        let data = new Date().toLocaleDateString().split('/'), dataExport = `${data[0]}${data[1]}${data[2]}`;
        let dados = [], listagemExport = [];
        dados = this.listagem.concat(this.totalGeral);
        dados.forEach((item, key) => {
            listagemExport[key] = {
                Linha: item.linha,
                ToneladaHoje: item.toneladaHoje,
                ValorHoje: item.valorHoje,
                ToneladaMesAtual: item.toneladaMesAtual,
                ValorMesAtual: item.valorMesAtual,
                ToneladaRitmo: item.toneladaRitmo,
                ValorRitmo: item.valorRitmo,
                ToneladaEditado: item.toneladaEditado,
                ValorEditado: item.valorEditado,
                ToneladaMeta: item.toneladaMeta,
                ValorMeta: item.valorMeta,
                ToneladaMetaEditado: item.toneladaMetaEditado,
                ValorMetaEditado: item.valorMetaEditado,
            };
        });
        this.xlsxService.exportFile(listagemExport, `PosicaoDiaria_${dataExport}`);
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
};
ComercialRelatoriosPosicaoDiariaComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_13__["DateService"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__["BsModalService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"] },
    { type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsLocaleService"] },
    { type: src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_15__["XlsxService"] },
    { type: _posicao_diaria_service__WEBPACK_IMPORTED_MODULE_14__["ComercialRelatoriosPosicaoDiariaService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_16__["AtividadesService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_17__["TitleService"] }
];
ComercialRelatoriosPosicaoDiariaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-relatorios-posicao-diaria',
        template: _raw_loader_posicao_diaria_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_posicao_diaria_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_13__["DateService"],
        ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__["BsModalService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"],
        ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsLocaleService"],
        src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_15__["XlsxService"],
        _posicao_diaria_service__WEBPACK_IMPORTED_MODULE_14__["ComercialRelatoriosPosicaoDiariaService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_16__["AtividadesService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_17__["TitleService"]])
], ComercialRelatoriosPosicaoDiariaComponent);



/***/ }),

/***/ "gSrK":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/comercial/relatorios/posicao-diaria/posicao-diaria-routing.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: ComercialRelatoriosPosicaoDiariaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialRelatoriosPosicaoDiariaRoutingModule", function() { return ComercialRelatoriosPosicaoDiariaRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _posicao_diaria_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./posicao-diaria.component */ "fjxV");



// Components

const routes = [
    { path: '', component: _posicao_diaria_component__WEBPACK_IMPORTED_MODULE_3__["ComercialRelatoriosPosicaoDiariaComponent"] }
];
let ComercialRelatoriosPosicaoDiariaRoutingModule = class ComercialRelatoriosPosicaoDiariaRoutingModule {
};
ComercialRelatoriosPosicaoDiariaRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ComercialRelatoriosPosicaoDiariaRoutingModule);



/***/ }),

/***/ "qRfM":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/comercial/relatorios/posicao-diaria/posicao-diaria.module.ts ***!
  \**************************************************************************************/
/*! exports provided: ComercialRelatoriosPosicaoDiariaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialRelatoriosPosicaoDiariaModule", function() { return ComercialRelatoriosPosicaoDiariaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/locales/pt */ "vT00");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "978R");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "2ZVE");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-currency-mask */ "D5nU");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _posicao_diaria_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./posicao-diaria-routing.module */ "gSrK");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var _posicao_diaria_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./posicao-diaria.component */ "fjxV");






Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_4___default.a, 'pt-BR');
// ngx-bootstrap




// ng2-currency-mask

// Modules



// Components

let ComercialRelatoriosPosicaoDiariaModule = class ComercialRelatoriosPosicaoDiariaModule {
};
ComercialRelatoriosPosicaoDiariaModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_posicao_diaria_component__WEBPACK_IMPORTED_MODULE_13__["ComercialRelatoriosPosicaoDiariaComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(),
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__["TabsModule"].forRoot(),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalModule"].forRoot(),
            ng2_currency_mask__WEBPACK_IMPORTED_MODULE_9__["CurrencyMaskModule"],
            _posicao_diaria_routing_module__WEBPACK_IMPORTED_MODULE_10__["ComercialRelatoriosPosicaoDiariaRoutingModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_12__["TemplatesModule"]
        ]
    })
], ComercialRelatoriosPosicaoDiariaModule);



/***/ })

}]);
//# sourceMappingURL=posicao-diaria-posicao-diaria-module-es2015.js.map