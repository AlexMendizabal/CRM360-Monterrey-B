(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fluxo-caixa-fluxo-caixa-module"],{

/***/ "1V/m":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/controladoria/fluxo-caixa/listas/bancos/bancos.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ControladoriaListaBancosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControladoriaListaBancosComponent", function() { return ControladoriaListaBancosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_bancos_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./bancos.component.html */ "w9vr");
/* harmony import */ var _bancos_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bancos.component.scss */ "KzLu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _services_bancos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/bancos.service */ "Qkz2");







let ControladoriaListaBancosComponent = class ControladoriaListaBancosComponent {
    constructor(activatedRoute, bancosService, route, notice) {
        this.activatedRoute = activatedRoute;
        this.bancosService = bancosService;
        this.route = route;
        this.notice = notice;
        this.appTitle = 'Bancos/Fundos';
        this.breadCrumbTree = [];
        this.spinnerFullScreen = false;
        this.loaderNavbar = false;
        this.noResult = false;
        this.bancos = [];
        this.dadosEmpty = false;
        /* Config Table */
        this.tableConfig = {
            subtitleBorder: false,
        };
        /* Paginação */
        this.itemsPerPage = 10;
        this.currentPage = 1;
        this.begin = 0;
        this.end = 10;
    }
    ngOnInit() {
        this.setBreadCrumb();
        this.getBancos();
    }
    setBreadCrumb() {
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: '/controladoria/home',
            },
            {
                descricao: 'Lançamento fluxo de caixa',
                routerLink: '/controladoria/fluxo-caixa',
            },
            {
                descricao: this.appTitle,
            },
        ];
    }
    /* Paginação */
    onPageChanged(event) {
        this.begin = (event.page - 1) * event.itemsPerPage;
        this.end = event.page * event.itemsPerPage;
    }
    /* Paginação */
    getBancos() {
        let idLancBanc = 0;
        this.spinnerFullScreen = true;
        this.bancosService.getBancos(idLancBanc).subscribe((response) => {
            if (response.status === 204) {
                this.notice.notice('Não existe bancos cadastrados.');
                this.spinnerFullScreen = false;
            }
            else {
                this.bancos = response.body['data'];
                this.totalItems = response.body['data'].length;
                this.spinnerFullScreen = false;
                this.noResult = true;
            }
        });
    }
};
ControladoriaListaBancosComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_bancos_service__WEBPACK_IMPORTED_MODULE_6__["ControladoriaBancosService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"] }
];
ControladoriaListaBancosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'lista-bancos',
        template: _raw_loader_bancos_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_bancos_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _services_bancos_service__WEBPACK_IMPORTED_MODULE_6__["ControladoriaBancosService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"]])
], ControladoriaListaBancosComponent);



/***/ }),

/***/ "2S9W":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/controladoria/fluxo-caixa/modals/logs/logs.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29udHJvbGFkb3JpYS9mbHV4by1jYWl4YS9tb2RhbHMvbG9ncy9sb2dzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "3Yz5":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/controladoria/fluxo-caixa/cadastros/fluxo-caixa/fluxo-caixa.component.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29udHJvbGFkb3JpYS9mbHV4by1jYWl4YS9jYWRhc3Ryb3MvZmx1eG8tY2FpeGEvZmx1eG8tY2FpeGEuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "7JJC":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/controladoria/fluxo-caixa/cadastros/bancos/bancos.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29udHJvbGFkb3JpYS9mbHV4by1jYWl4YS9jYWRhc3Ryb3MvYmFuY29zL2JhbmNvcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "BWP4":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/controladoria/fluxo-caixa/listas/fluxo-caixa/fluxo-caixa.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen [hidden]=\"!spinnerFullScreen\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar [hidden]=\"!loaderNavbar\"></loader-spinner-navbar>\r\n<app-header [appTitle]=\"appTitle\">\r\n  <button\r\n    (click)=\"exportarExcel()\"\r\n    [disabled]=\"!noResult\"\r\n    >\r\n    Exportar\r\n  </button>\r\n  <button\r\n    [routerLink]=\"['../bancos']\"\r\n    >\r\n    Cadastrar Bancos/Fundo\r\n  </button>\r\n  <button\r\n    [routerLink]=\"['../empresas']\"\r\n    >\r\n    Cadastrar Empresas\r\n  </button>\r\n  <button\r\n    [routerLink]=\"['../tipos-fluxo-caixa']\"\r\n    >\r\n    Cadastrar Tipos Lançamentos\r\n  </button>\r\n  <button\r\n    [routerLink]=\"['../novo']\"\r\n    >\r\n    Inserir\r\n  </button>\r\n  <button\r\n    (click)=\"onFilter()\"\r\n    >\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <!-- Início dos Filtros -->\r\n  <advanced-filter #scrollToFilter>\r\n    <form autocomplete=\"off\" [formGroup]=\"form\">\r\n      <div class=\"form-row justify-content-center\">\r\n        <div class=\"form-group col-md-2\">\r\n          <label for=\"tipo\"> Tipo </label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"true\"\r\n            [items]=\"tipos\"\r\n            [virtualScroll]=\"true\"\r\n            labelForId=\"tipo\"\r\n            bindLabel=\"DESC_TIPO\"\r\n            bindValue=\"COD_TIPO\"\r\n            placeholder=\"Selecione...\"\r\n            formControlName=\"COD_TIPO\"\r\n            (change) =\"getTiposFluxoCaixa($event)\"\r\n            [ngClass]=\"onFieldError('COD_TIPO') + ' ' + onFieldRequired('COD_TIPO')\"\r\n          >\r\n          </ng-select>\r\n          <invalid-form-control\r\n            [show]=\"onFieldInvalid('COD_TIPO')\"\r\n            message=\"Tipo de documento é obrigatório.\">\r\n          </invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group col-md-2\">\r\n          <label for=\"tipoLancamentos\"> Tipo de lançamentos </label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"true\"\r\n            [items]=\"tiposLancamentos\"\r\n            [virtualScroll]=\"true\"\r\n            labelForId=\"tipoLancamentos\"\r\n            bindLabel=\"DESC_TIPO_LANCAMENTO\"\r\n            bindValue=\"COD_TIPO_LANCAMENTO\"\r\n            placeholder=\"Selecione...\"\r\n            formControlName=\"COD_TIPO_LANCAMENTO\"\r\n            [ngClass]=\"onFieldError('COD_TIPO_LANCAMENTO') + ' ' + onFieldRequired('COD_TIPO_LANCAMENTO')\"\r\n          >\r\n          </ng-select>\r\n          <invalid-form-control\r\n            [show]=\"onFieldInvalid('COD_TIPO_LANCAMENTO')\"\r\n            message=\"Tipo de documento é obrigatório.\">\r\n          </invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group col-md-2\">\r\n          <label for=\"empresa\"> Empresa de lançamento </label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"true\"\r\n            [items]=\"empresas\"\r\n            [virtualScroll]=\"true\"\r\n            labelForId=\"tipoDocumento\"\r\n            bindLabel=\"DESC_EMPR\"\r\n            bindValue=\"COD_EMPR\"\r\n            placeholder=\"Selecione...\"\r\n            formControlName=\"COD_EMPR_LANCAMENTO\"\r\n            [ngClass]=\"onFieldError('COD_EMPR_LANCAMENTO') + ' ' + onFieldRequired('COD_EMPR_LANCAMENTO')\"\r\n          >\r\n          </ng-select>\r\n          <invalid-form-control\r\n            [show]=\"onFieldInvalid('COD_EMPR_LANCAMENTO')\"\r\n            message=\"Tipo de documento é obrigatório.\">\r\n          </invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group col-md-2\">\r\n          <label for=\"dataInicio\"> Data inicial </label>\r\n          <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\">\r\n                <i class=\"far fa-calendar-alt\"></i>\r\n              </span>\r\n            </div>\r\n            <input\r\n            class=\"form-control\"\r\n            id=\"inicioData\"\r\n            type=\"text\"\r\n            bsDatepicker\r\n            [bsConfig]=\"bsConfig\"\r\n            formControlName=\"DT_INIC\"\r\n            [ngClass]=\"onFieldError('DT_INIC') + ' ' + onFieldRequired('DT_INIC')\"\r\n            >\r\n          </div>\r\n          <invalid-form-control\r\n            [show]=\"onFieldInvalid('DT_INIC')\"\r\n            message=\"Data inicial é obrigatório.\">\r\n          </invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group col-md-2\">\r\n          <label for=\"dataInicio\"> Data final </label>\r\n          <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\">\r\n                <i class=\"far fa-calendar-alt\"></i>\r\n              </span>\r\n            </div>\r\n            <input\r\n            class=\"form-control\"\r\n            id=\"fimData\"\r\n            type=\"text\"\r\n            bsDatepicker\r\n            [bsConfig]=\"bsConfig\"\r\n            formControlName=\"DT_FINA\"\r\n            [ngClass]=\"onFieldError('DT_FINA') + ' ' + onFieldRequired('DT_FINA')\"\r\n            >\r\n          </div>\r\n          <invalid-form-control\r\n            [show]=\"onFieldInvalid('DT_FINA')\"\r\n            message=\"Data final é obrigatório.\">\r\n          </invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group col-md-2\">\r\n          <label for=\"status\"> Status </label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"true\"\r\n            [items]=\"status\"\r\n            [virtualScroll]=\"true\"\r\n            labelForId=\"tipo\"\r\n            bindLabel=\"NOME\"\r\n            bindValue=\"COD\"\r\n            placeholder=\"Selecione...\"\r\n            formControlName=\"IN_STAT\"\r\n            [ngClass]=\"onFieldError('IN_STAT') + ' ' + onFieldRequired('IN_STAT')\"\r\n          >\r\n          </ng-select>\r\n          <invalid-form-control\r\n            [show]=\"onFieldInvalid('IN_STAT')\"\r\n            message=\"Tipo de documento é obrigatório.\">\r\n          </invalid-form-control>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </advanced-filter>\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <subtitles\r\n        [data]=\"subtitles\"\r\n        [show]=\"noResult\">\r\n      </subtitles>\r\n    </div>\r\n  </div>\r\n  <!-- Início da Lista -->\r\n  <div class=\"row\">\r\n    <div [ngClass]=\"{'col': !showDetailPanel, 'col-7 pr-0': showDetailPanel}\">\r\n      <custom-table [config]=\"tableConfig\" [hidden] = \"!noResult\">\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n            <th class=\"align-middle\" style=\"width:10px\"></th>\r\n            <th class=\"align-middle\" style=\"width:10px\"></th>\r\n            <th class=\"text-center\" scope=\"col\" style=\"width: 60px;\"> Nr. Lançamento </th>\r\n            <th class=\"text-center\" scope=\"col\" style=\"width: 100px;\"> Tipo Lançamento </th>\r\n            <th class=\"text-center\" scope=\"col\" style=\"width: 100px;\"> Descrição Lançamento </th>\r\n            <th class=\"text-center\" scope=\"col\" style=\"width: 80px;\" [hidden]=\"showDetailPanel\"> Empresa de lançamento </th>\r\n            <th class=\"text-center\" scope=\"col\" style=\"width: 80px;\" [hidden]=\"showDetailPanel\"> Data de execução </th>\r\n            <th class=\"text-center\" scope=\"col\" style=\"width: 60px;\" [hidden]=\"showDetailPanel\"> Valor </th>\r\n            <th class=\"text-center\" style=\"width:30px\" [hidden]=\"showDetailPanel\">Status</th>\r\n            <th class=\"text-center\" style=\"width:30px\" [hidden]=\"showDetailPanel\">Log</th>\r\n            <th class=\"text-center\" style=\"width:30px\" [hidden]=\"showDetailPanel\"></th>\r\n            <th class=\"text-center\" style=\"width:30px\" [hidden]=\"showDetailPanel\"></th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody >\r\n          <tr *ngFor=\"let lista of listas | slice : begin : end; let i = index\"\r\n              [ngClass]=\"{'item-selected':lista.selected}\" class=\"hover text-center\">\r\n              <td [ngClass]=\"{\r\n                'border-success'    : lista.IN_STAT == '1',\r\n                'border-danger'     : lista.IN_STAT == '0'\r\n              }\" (click)=\"openTab(lista)\"\r\n              ></td>\r\n              <td class=\"p-0\" (click)=\"openTab(lista)\">\r\n                <span class=\"\" [tooltip]=\"lista.DESC_TIPO == 'RECEBIMENTO' ? 'Recebimento' : 'Pagamento'\" placement=\"left\" container=\"body\">\r\n                <button type=\"button\" class=\"btn-icon-sm\">\r\n                  <i [ngClass]=\"lista.DESC_TIPO == 'RECEBIMENTO' ? 'fas fa-hand-holding-usd' : 'far fa-credit-card'\"></i>\r\n                </button>\r\n              </span>\r\n            </td>\r\n            <td class=\"text-center\" (click)=\"openTab(lista)\">{{ lista.COD_LANCAMENTO }}</td>\r\n            <td class=\"text-center\" (click)=\"openTab(lista)\">{{ lista.DESC_TIPO | uppercase }}</td>\r\n            <td class=\"text-center\" (click)=\"openTab(lista)\">{{ lista.DESC_TIPO_LANCAMENTO | uppercase }}</td>\r\n            <td class=\"text-center\" [hidden]=\"showDetailPanel\" (click)=\"openTab(lista)\">{{ lista.DESC_EMPR_LANCAMENTO | uppercase }}</td>\r\n            <td class=\"text-center\" [hidden]=\"showDetailPanel\" (click)=\"openTab(lista)\">{{ lista.DATA_EXECUCAO }}</td>\r\n            <td class=\"text-end\" [hidden]=\"showDetailPanel\" (click)=\"openTab(lista)\">{{ lista.VALOR | currency:'BRL' }}</td>\r\n            <td class=\"align-middle px-0\" style=\"width:30px\" [hidden]=\"showDetailPanel\">\r\n              <span class=\"\" [tooltip]=\"lista.IN_STAT == '1' ? 'Inativar' : 'Ativar'\" placement=\"left\" container=\"body\">\r\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"openJustificativa(template, lista)\">\r\n                  <i [ngClass]=\"lista.IN_STAT == '1' ? 'fas fa-toggle-on' : 'fas fa-toggle-off'\"></i>\r\n                </button>\r\n              </span>\r\n            </td>\r\n            <td class=\"align-middle px-0\" style=\"width:30px\" [hidden]=\"showDetailPanel\">\r\n              <span tooltip=\"Histórico\" placement=\"left\" container=\"body\">\r\n                <button class=\"btn-icon-sm\"  (click)=\"openLog(lista)\">\r\n                  <i class=\"fas fa-list-ul\"></i>\r\n                </button>\r\n              </span>\r\n            </td>\r\n            <td class=\"align-middle px-0\" style=\"width:30px\" [hidden]=\"showDetailPanel\">\r\n              <span tooltip=\"Editar\" placement=\"left\" container=\"body\">\r\n                <button class=\"btn-icon-sm\" (click)=\"onEdit(lista)\">\r\n                  <i class=\"fas fa-pencil-alt\"></i>\r\n                </button>\r\n              </span>\r\n            </td>\r\n            <td class=\"align-middle px-0\" style=\"width:30px\" [hidden]=\"showDetailPanel\">\r\n              <span tooltip=\"Duplicar\" placement=\"left\" container=\"body\">\r\n                <button class=\"btn-icon-sm\" (click)=\"onDuplicate(lista)\">\r\n                  <i class=\"fas fa-copy\"></i>\r\n                </button>\r\n              </span>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n      <div class=\"mt-3\" [hidden]=\"!noResult\">\r\n        Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\r\n        <pagination\r\n          [maxSize]=\"10\"\r\n          [totalItems]=\"totalItems\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          (pageChanged)=\"onPageChanged($event)\"\r\n          [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPage\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\">\r\n        </pagination>\r\n      </div>\r\n      <empty-result\r\n        message=\"Nenhuma informação encontrada\"\r\n        class=\"my-3\"\r\n        *ngIf=\"dadosEmpty\">\r\n      </empty-result>\r\n    </div>\r\n    <!-- Início da tabela de informações -->\r\n    <div class=\"col-5\" [hidden]=\"!showDetailPanel\">\r\n      <detail-panel [panelTitle]=\"appTitle\">\r\n        <div class=\"d-flex\">\r\n          <div class=\"col-6 pl-0\">\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-md-12\">\r\n                <label> Empresa de lançamento </label>\r\n                <div class=\"text-nowrap\">{{ item.DESC_EMPR_LANCAMENTO | uppercase }}</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-md-12\">\r\n                <label> Data de lançamento </label>\r\n                <div class=\"text-nowrap\">{{ item.DATA_INCLUSAO }}</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-md-12\">\r\n                <label> Data de vencimento </label>\r\n                <div class=\"text-nowrap\">{{ item.DATA_VENCIMENTO }}</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-md-12\">\r\n                <label> Data de execução </label>\r\n                <div class=\"text-nowrap\">{{ item.DATA_EXECUCAO }}</div>\r\n              </div>\r\n            </div>\r\n          </div>  \r\n          <div class=\"col-6\">\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-md-12\">\r\n                <label> Empresa de recebimento </label>\r\n                <div class=\"text-nowrap\">{{ item.DESC_EMPR_RECEBIMENTO | uppercase }}</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-md-12\">\r\n                <label> Valor </label>\r\n                <div class=\"text-nowrap\">{{ item.VALOR | currency:'BRL' }}</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-md-12\">\r\n                <label> Banco/Fundo </label>\r\n                <div class=\"text-nowrap\">{{ item.DESC_BANCO | uppercase }}</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-md-12\">\r\n                <label> Observação </label>\r\n                <div class=\"text-nowrap\">{{ item.OBSERVACAO }}</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </detail-panel>\r\n    </div>\r\n  </div>\r\n  <ng-template #template>\r\n    <form autocomplete=\"off\" [formGroup]=\"form\">\r\n      <div class=\"modal-header\">\r\n        <h6 for=\"JUSTIFICATIVA\"> Justifique sua alteração! </h6>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <textarea name=\"\" id=\"\" cols=\"75\" rows=\"10\" formControlName=\"JUSTIFICATIVA\" #JUSTIFICATIVA minlength=\"10\"></textarea>\r\n        <div class=\"text-right\">\r\n          <button  \r\n            type=\"button\" class=\"btn btn-secondary mr-1\" (click)=\"modalRef.hide()\"\r\n            >\r\n            Cancelar \r\n          </button>\r\n          <button  \r\n            type=\"button\" class=\"btn btn-primary\" (click)=\"changeType(); modalRef.hide()\"\r\n            [disabled]=\"form.get('JUSTIFICATIVA').status == 'INVALID' || !form.get('JUSTIFICATIVA').value\"\r\n            >\r\n            Salvar \r\n          </button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </ng-template>\r\n  <controladoria-fluxo-caixa-logs></controladoria-fluxo-caixa-logs>\r\n</app-body>\r\n");

/***/ }),

/***/ "BXF0":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/controladoria/fluxo-caixa/services/tipos-fluxo-caixa.service.ts ***!
  \*****************************************************************************************/
/*! exports provided: ControladoriaTiposFluxoCaixaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControladoriaTiposFluxoCaixaService", function() { return ControladoriaTiposFluxoCaixaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");



let ControladoriaTiposFluxoCaixaService = class ControladoriaTiposFluxoCaixaService {
    constructor(http) {
        this.http = http;
        this.BASE_URL = `https://crm360.monterrey.com.bo/api`;
    }
    getTiposFluxoCaixa(param) {
        return this.http.get(`${this.BASE_URL}/controladoria/lancamentos-fluxo-caixa/tipos-fluxo-caixa`, {
            params: param,
            observe: 'response',
        });
    }
    putTiposFluxoCaixa(params) {
        if (params.COD_TIPO_LANCAMENTO != undefined) {
            return this.http.put(`${this.BASE_URL}/controladoria/lancamentos-fluxo-caixa/tipos-fluxo-caixa`, params, { observe: 'response' });
        }
        else {
            return this.http.post(`${this.BASE_URL}/controladoria/lancamentos-fluxo-caixa/tipos-fluxo-caixa`, params, { observe: 'response' });
        }
    }
};
ControladoriaTiposFluxoCaixaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ControladoriaTiposFluxoCaixaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ControladoriaTiposFluxoCaixaService);



/***/ }),

/***/ "DF54":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/controladoria/fluxo-caixa/cadastros/fluxo-caixa/fluxo-caixa.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen [hidden]=\"!spinnerFullScreen\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar [hidden]=\"!loaderNavbar\"></loader-spinner-navbar>\r\n<app-header [appTitle]=\"appTitle\">\r\n  <button\r\n    (click)=\"validaSalvar(template)\"\r\n    [disabled]=\"form.status == 'INVALID'\"\r\n    >\r\n    Salvar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <!-- Início dos Filtros -->\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <form autocomplete=\"off\" [formGroup]=\"form\">\r\n        <div class=\"form-row justify-content-center\">\r\n          <div class=\"row col-6\">\r\n            <div class=\"form-group col-md-6\">\r\n              <label for=\"tipo\"> Tipo </label>\r\n              <ng-select\r\n                [searchable]=\"true\"\r\n                [clearable]=\"true\"\r\n                [items]=\"tipos\"\r\n                [virtualScroll]=\"true\"\r\n                labelForId=\"tipo\"\r\n                bindLabel=\"DESC_TIPO\"\r\n                bindValue=\"COD_TIPO\"\r\n                placeholder=\"Selecione...\"\r\n                formControlName=\"COD_TIPO\"\r\n                (change) =\"getTiposFluxoCaixa($event)\"\r\n                [ngClass]=\"onFieldError('COD_TIPO') + ' ' + onFieldRequired('COD_TIPO')\"\r\n              >\r\n              </ng-select>\r\n              <invalid-form-control\r\n                [show]=\"onFieldInvalid('COD_TIPO')\"\r\n                message=\"Tipo é obrigatório.\">\r\n              </invalid-form-control>\r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n              <label for=\"tipoLancamentos\"> Tipo de lançamentos </label>\r\n              <ng-select\r\n                [searchable]=\"true\"\r\n                [clearable]=\"true\"\r\n                [items]=\"tiposLancamentos\"\r\n                [virtualScroll]=\"true\"\r\n                dropdownPosition=\"bottom\"\r\n                labelForId=\"tipoLancamentos\"\r\n                bindLabel=\"DESC_TIPO_LANCAMENTO\"\r\n                bindValue=\"COD_TIPO_LANCAMENTO\"\r\n                placeholder=\"Selecione...\"\r\n                formControlName=\"COD_TIPO_LANCAMENTO\"\r\n                [ngClass]=\"onFieldError('COD_TIPO_LANCAMENTO') + ' ' + onFieldRequired('COD_TIPO_LANCAMENTO')\"\r\n              >\r\n              </ng-select>\r\n              <invalid-form-control\r\n                [show]=\"onFieldInvalid('COD_TIPO_LANCAMENTO')\"\r\n                message=\"Tipo de lançamento é obrigatório.\">\r\n              </invalid-form-control>\r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n              <label for=\"datavenc\"> Data vencimento </label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\">\r\n                    <i class=\"far fa-calendar-alt\"></i>\r\n                  </span>\r\n                </div>\r\n                <input\r\n                class=\"form-control\"\r\n                id=\"datavenc\"\r\n                type=\"text\"\r\n                bsDatepicker\r\n                [bsConfig]=\"bsConfig\"\r\n                formControlName=\"DATA_VENCIMENTO\"\r\n                [ngClass]=\"onFieldError('DATA_VENCIMENTO') + ' ' + onFieldRequired('DATA_VENCIMENTO')\"\r\n                >\r\n              </div>\r\n              <invalid-form-control\r\n                [show]=\"onFieldInvalid('DATA_VENCIMENTO')\"\r\n                message=\"Data inicial é obrigatório.\">\r\n              </invalid-form-control>\r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n              <label *ngIf=\"tipo == 1\" for=\"dataFlux\"> Data recebimento </label>\r\n              <label *ngIf=\"tipo != 1\" for=\"dataFlux\"> Data pagamento </label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\">\r\n                    <i class=\"far fa-calendar-alt\"></i>\r\n                  </span>\r\n                </div>\r\n                <input\r\n                class=\"form-control\"\r\n                id=\"dataFlux\"\r\n                type=\"text\"\r\n                bsDatepicker\r\n                [bsConfig]=\"bsConfig\"\r\n                formControlName=\"DATA_EXECUCAO\"\r\n                [ngClass]=\"onFieldError('DATA_EXECUCAO') + ' ' + onFieldRequired('DATA_EXECUCAO')\"\r\n                >\r\n              </div>\r\n              <invalid-form-control\r\n                [show]=\"onFieldInvalid('DATA_EXECUCAO')\"\r\n                message=\"Data final é obrigatório.\">\r\n              </invalid-form-control>\r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n              <label for=\"empresaPagamento\"> Empresa de lançamento </label>\r\n              <ng-select\r\n                [searchable]=\"true\"\r\n                [clearable]=\"true\"\r\n                [items]=\"empresas\"\r\n                [virtualScroll]=\"true\"\r\n                labelForId=\"empresaPagamento\"\r\n                bindLabel=\"DESC_EMPR\"\r\n                bindValue=\"COD_EMPR\"\r\n                placeholder=\"Selecione...\"\r\n                formControlName=\"COD_EMPR_LANCAMENTO\"\r\n                [ngClass]=\"onFieldError('COD_EMPR_LANCAMENTO') + ' ' + onFieldRequired('COD_EMPR_LANCAMENTO')\"\r\n              >\r\n              </ng-select>\r\n              <invalid-form-control\r\n                [show]=\"onFieldInvalid('COD_EMPR_LANCAMENTO')\"\r\n                message=\"Tipo de documento é obrigatório.\">\r\n              </invalid-form-control>\r\n            </div>\r\n            <div *ngIf=\"validaPagamento\" class=\"form-group col-md-6\">\r\n              <label for=\"empresaRecebimento\"> Empresa de recebimento </label>\r\n              <ng-select\r\n                [searchable]=\"true\"\r\n                [clearable]=\"true\"\r\n                [items]=\"empresas\"\r\n                [virtualScroll]=\"true\"\r\n                labelForId=\"empresaRecebimento\"\r\n                bindLabel=\"DESC_EMPR\"\r\n                bindValue=\"COD_EMPR\"\r\n                placeholder=\"Selecione...\"\r\n                formControlName=\"COD_EMPR_RECEBIMENTO\"\r\n                [ngClass]=\"onFieldError('COD_EMPR_RECEBIMENTO') + ' ' + onFieldRequired('COD_EMPR_RECEBIMENTO')\"\r\n              >\r\n              </ng-select>\r\n              <invalid-form-control\r\n                [show]=\"onFieldInvalid('COD_EMPR_RECEBIMENTO')\"\r\n                message=\"Tipo de documento é obrigatório.\">\r\n              </invalid-form-control>\r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n              <label for=\"valor\"> Valor </label>\r\n              <input\r\n                currencyMask\r\n                [options] = \" {align: 'left', prefix: 'R$', thousands: '.', decimal: ','} \"\r\n                id=\"valor\"\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                placeholder=\"DIGITE...\"\r\n                formControlName=\"VALOR\"\r\n                [ngClass]=\"onFieldError('VALOR') + ' ' + onFieldRequired('VALOR')\"\r\n              >\r\n              <invalid-form-control\r\n                [show]=\"onFieldInvalid('VALOR')\"\r\n                message=\"Tipo de documento é obrigatório.\">\r\n              </invalid-form-control>\r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n              <label for=\"banco\"> Banco/Fundo </label>\r\n              <ng-select\r\n                [searchable]=\"true\"\r\n                [clearable]=\"true\"\r\n                [items]=\"bancos\"\r\n                [virtualScroll]=\"true\"\r\n                labelForId=\"banco\"\r\n                bindLabel=\"DESC_BANCO\"\r\n                bindValue=\"COD_BANCO\"\r\n                placeholder=\"Selecione...\"\r\n                formControlName=\"COD_BANCO\"\r\n                [ngClass]=\"onFieldError('COD_BANCO') + ' ' + onFieldRequired('COD_BANCO')\"\r\n              >\r\n              </ng-select>\r\n              <invalid-form-control\r\n                [show]=\"onFieldInvalid('COD_BANCO')\"\r\n                message=\"Tipo de documento é obrigatório.\">\r\n              </invalid-form-control>\r\n            </div>\r\n            <div class=\"form-group col-md-12\">\r\n              <label for=\"valor\"> Observação </label>\r\n              <input\r\n                id=\"observacao\"\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                placeholder=\"DIGITE...\"\r\n                formControlName=\"OBSERVACAO\"\r\n                [ngClass]=\"onFieldError('OBSERVACAO') + ' ' + onFieldRequired('OBSERVACAO')\"\r\n              >\r\n              <invalid-form-control\r\n                [show]=\"onFieldInvalid('OBSERVACAO')\"\r\n                message=\"Tipo de documento é obrigatório.\">\r\n              </invalid-form-control>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <ng-template #template>\r\n    <form autocomplete=\"off\" [formGroup]=\"form\">\r\n      <div class=\"modal-header\">\r\n        <h6 for=\"JUSTIFICATIVA\"> Justifique sua alteração! </h6>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <textarea name=\"\" id=\"\" cols=\"75\" rows=\"10\" formControlName=\"JUSTIFICATIVA\" #JUSTIFICATIVA minlength=\"10\"></textarea>\r\n        <div class=\"text-right\">\r\n          <button  \r\n            type=\"button\" class=\"btn btn-secondary mr-1\" (click)=\"modalRef.hide()\"\r\n            >\r\n            Cancelar \r\n          </button>\r\n          <button  \r\n            type=\"button\" class=\"btn btn-primary\" (click)=\"postCadastrar(); modalRef.hide()\"\r\n            [disabled]=\"form.get('JUSTIFICATIVA').status == 'INVALID' || !form.get('JUSTIFICATIVA').value\"\r\n            >\r\n            Salvar \r\n          </button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </ng-template>\r\n</app-body>\r\n");

/***/ }),

/***/ "Ha6M":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/controladoria/fluxo-caixa/listas/fluxo-caixa/fluxo-caixa.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("tr.item-selected td {\n  background-color: #8fb9ef !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb250cm9sYWRvcmlhL2ZsdXhvLWNhaXhhL2xpc3Rhcy9mbHV4by1jYWl4YS9mbHV4by1jYWl4YS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9DQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2NvbnRyb2xhZG9yaWEvZmx1eG8tY2FpeGEvbGlzdGFzL2ZsdXhvLWNhaXhhL2ZsdXhvLWNhaXhhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidHIuaXRlbS1zZWxlY3RlZCB0ZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGZiOWVmICFpbXBvcnRhbnQ7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "HfE5":
/*!*************************************************************************!*\
  !*** ./src/app/modules/controladoria/fluxo-caixa/fluxo-caixa.module.ts ***!
  \*************************************************************************/
/*! exports provided: ControladoriaFluxoCaixaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControladoriaFluxoCaixaModule", function() { return ControladoriaFluxoCaixaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../shared/modules/shared.module */ "UKGz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/module-wrapper/module-wrapper.module */ "RoXV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/not-found/not-found.module */ "sCnT");
/* harmony import */ var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/pipes/pipes.module */ "9Xeq");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-currency-mask */ "D5nU");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/locales/pt */ "vT00");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _fluxo_caixa_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./fluxo-caixa-routing.module */ "IxcK");
/* harmony import */ var _fluxo_caixa_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./fluxo-caixa.component */ "PU0D");
/* harmony import */ var _listas_fluxo_caixa_fluxo_caixa_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./listas/fluxo-caixa/fluxo-caixa.component */ "o356");
/* harmony import */ var _cadastros_fluxo_caixa_fluxo_caixa_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./cadastros/fluxo-caixa/fluxo-caixa.component */ "JO0R");
/* harmony import */ var _modals_logs_logs_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./modals/logs/logs.component */ "rxNW");
/* harmony import */ var _listas_tipos_fluxo_caixa_tipos_fluxo_caixa_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./listas/tipos-fluxo-caixa/tipos-fluxo-caixa.component */ "LWhX");
/* harmony import */ var _cadastros_tipos_fluxo_caixa_tipos_fluxo_caixa_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./cadastros/tipos-fluxo-caixa/tipos-fluxo-caixa.component */ "Valb");
/* harmony import */ var _listas_empresas_empresas_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./listas/empresas/empresas.component */ "fpce");
/* harmony import */ var _cadastros_empresas_empresas_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./cadastros/empresas/empresas.component */ "T61W");
/* harmony import */ var _listas_bancos_bancos_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./listas/bancos/bancos.component */ "1V/m");
/* harmony import */ var _cadastros_bancos_bancos_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./cadastros/bancos/bancos.component */ "tUsL");


























Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_14___default.a);
Object(ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["defineLocale"])('pt-br', ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["ptBrLocale"]);
let ControladoriaFluxoCaixaModule = class ControladoriaFluxoCaixaModule {
};
ControladoriaFluxoCaixaModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _fluxo_caixa_component__WEBPACK_IMPORTED_MODULE_16__["ControladoriaFluxoCaixaComponent"],
            _listas_fluxo_caixa_fluxo_caixa_component__WEBPACK_IMPORTED_MODULE_17__["ControladoriaListaFluxoCaixaComponent"],
            _cadastros_fluxo_caixa_fluxo_caixa_component__WEBPACK_IMPORTED_MODULE_18__["ControladoriaCadastrosFluxoCaixaComponent"],
            _listas_tipos_fluxo_caixa_tipos_fluxo_caixa_component__WEBPACK_IMPORTED_MODULE_20__["ControladoriaTiposFluxoCaixaComponent"],
            _cadastros_tipos_fluxo_caixa_tipos_fluxo_caixa_component__WEBPACK_IMPORTED_MODULE_21__["ControladoriaCadastroTiposFluxoCaixaComponent"],
            _listas_empresas_empresas_component__WEBPACK_IMPORTED_MODULE_22__["ControladoriaListaEmpresasComponent"],
            _cadastros_empresas_empresas_component__WEBPACK_IMPORTED_MODULE_23__["ControladoriaCadastroEmpresasComponent"],
            _listas_bancos_bancos_component__WEBPACK_IMPORTED_MODULE_24__["ControladoriaListaBancosComponent"],
            _cadastros_bancos_bancos_component__WEBPACK_IMPORTED_MODULE_25__["ControladoriaCadastroBancosComponent"],
            _modals_logs_logs_component__WEBPACK_IMPORTED_MODULE_19__["ControladoriaFluxoCaixaLogsComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _fluxo_caixa_routing_module__WEBPACK_IMPORTED_MODULE_15__["ControladoriaFluxoCaixaRoutingModule"],
            src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_4__["ModuleWrapperModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_6__["TemplatesModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
            _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"],
            src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_9__["NotFoundModule"],
            src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_10__["PipesModule"],
            ng2_currency_mask__WEBPACK_IMPORTED_MODULE_11__["CurrencyMaskModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["TimepickerModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["PaginationModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["TabsModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__["ModalModule"].forRoot(),
        ],
        providers: [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__["PNotifyService"], { provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"], useValue: 'pt-PT' }],
    })
], ControladoriaFluxoCaixaModule);



/***/ }),

/***/ "I/Vo":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/controladoria/fluxo-caixa/listas/empresas/empresas.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen [hidden]=\"!spinnerFullScreen\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar [hidden]=\"!loaderNavbar\"></loader-spinner-navbar>\r\n<app-header [appTitle]=\"appTitle\">\r\n  <button\r\n    [routerLink]=\"['./novo']\"\r\n    >\r\n    Cadastrar Empresa\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <!-- <advanced-filter #scrollToFilter></advanced-filter> -->\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <custom-table [config]=\"tableConfig\" [hidden] = \"!noResult\">\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n            <th class=\"text-center\" scope=\"col\" style=\"width: 60px;\"> Código Empresa </th>\r\n            <th class=\"text-center\" scope=\"col\" style=\"width: 100px;\"> Nome </th>\r\n            <th class=\"align-middle\" style=\"width:70px\"></th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let empresa of empresas | slice : begin : end; let i = index\" class=\"text-center\">\r\n            <td class=\"text-center\">{{ empresa.COD_EMPR }}</td>\r\n            <td class=\"text-center\">{{ empresa.DESC_EMPR | uppercase }}</td>\r\n            <td class=\"align-middle\" style=\"width:70px\">\r\n              <span tooltip=\"Visualizar\" placement=\"left\" container=\"body\">\r\n                <button class=\"btn-icon-sm\" [routerLink]=\"['./', empresa.COD_EMPR]\">\r\n                  <i class=\"fas fa-pencil-alt\"></i>\r\n                </button>\r\n              </span>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n      <div class=\"mt-3\" [hidden]=\"!noResult\">\r\n        Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\r\n        <pagination\r\n          [maxSize]=\"10\"\r\n          [totalItems]=\"totalItems\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          (pageChanged)=\"onPageChanged($event)\"\r\n          [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPage\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\">\r\n        </pagination>\r\n      </div>\r\n      <empty-result\r\n        message=\"Nenhuma informação encontrada\"\r\n        class=\"my-3\"\r\n        *ngIf=\"dadosEmpty\">\r\n      </empty-result>\r\n    </div>\r\n  </div>\r\n</app-body>\r\n");

/***/ }),

/***/ "IxcK":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/controladoria/fluxo-caixa/fluxo-caixa-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: ControladoriaFluxoCaixaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControladoriaFluxoCaixaRoutingModule", function() { return ControladoriaFluxoCaixaRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/not-found/not-found.component */ "6nXq");
/* harmony import */ var _listas_fluxo_caixa_fluxo_caixa_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./listas/fluxo-caixa/fluxo-caixa.component */ "o356");
/* harmony import */ var _cadastros_fluxo_caixa_fluxo_caixa_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cadastros/fluxo-caixa/fluxo-caixa.component */ "JO0R");
/* harmony import */ var _listas_tipos_fluxo_caixa_tipos_fluxo_caixa_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./listas/tipos-fluxo-caixa/tipos-fluxo-caixa.component */ "LWhX");
/* harmony import */ var _cadastros_tipos_fluxo_caixa_tipos_fluxo_caixa_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cadastros/tipos-fluxo-caixa/tipos-fluxo-caixa.component */ "Valb");
/* harmony import */ var _listas_empresas_empresas_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./listas/empresas/empresas.component */ "fpce");
/* harmony import */ var _cadastros_empresas_empresas_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cadastros/empresas/empresas.component */ "T61W");
/* harmony import */ var _listas_bancos_bancos_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./listas/bancos/bancos.component */ "1V/m");
/* harmony import */ var _cadastros_bancos_bancos_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cadastros/bancos/bancos.component */ "tUsL");












const routes = [
    {
        path: 'tipos-fluxo-caixa',
        children: [
            {
                path: '',
                component: _listas_tipos_fluxo_caixa_tipos_fluxo_caixa_component__WEBPACK_IMPORTED_MODULE_6__["ControladoriaTiposFluxoCaixaComponent"],
            },
            {
                path: 'novo',
                component: _cadastros_tipos_fluxo_caixa_tipos_fluxo_caixa_component__WEBPACK_IMPORTED_MODULE_7__["ControladoriaCadastroTiposFluxoCaixaComponent"],
            },
            {
                path: ':id',
                component: _cadastros_tipos_fluxo_caixa_tipos_fluxo_caixa_component__WEBPACK_IMPORTED_MODULE_7__["ControladoriaCadastroTiposFluxoCaixaComponent"],
            }
        ]
    },
    {
        path: 'empresas',
        children: [
            {
                path: '',
                component: _listas_empresas_empresas_component__WEBPACK_IMPORTED_MODULE_8__["ControladoriaListaEmpresasComponent"],
            },
            {
                path: 'novo',
                component: _cadastros_empresas_empresas_component__WEBPACK_IMPORTED_MODULE_9__["ControladoriaCadastroEmpresasComponent"],
            },
            {
                path: ':id',
                component: _cadastros_empresas_empresas_component__WEBPACK_IMPORTED_MODULE_9__["ControladoriaCadastroEmpresasComponent"],
            }
        ]
    },
    {
        path: 'bancos',
        children: [
            {
                path: '',
                component: _listas_bancos_bancos_component__WEBPACK_IMPORTED_MODULE_10__["ControladoriaListaBancosComponent"],
            },
            {
                path: 'novo',
                component: _cadastros_bancos_bancos_component__WEBPACK_IMPORTED_MODULE_11__["ControladoriaCadastroBancosComponent"],
            },
            {
                path: ':id',
                component: _cadastros_bancos_bancos_component__WEBPACK_IMPORTED_MODULE_11__["ControladoriaCadastroBancosComponent"],
            }
        ]
    },
    {
        path: '',
        component: _listas_fluxo_caixa_fluxo_caixa_component__WEBPACK_IMPORTED_MODULE_4__["ControladoriaListaFluxoCaixaComponent"]
    },
    {
        path: 'novo',
        component: _cadastros_fluxo_caixa_fluxo_caixa_component__WEBPACK_IMPORTED_MODULE_5__["ControladoriaCadastrosFluxoCaixaComponent"],
    },
    {
        path: ':id',
        component: _cadastros_fluxo_caixa_fluxo_caixa_component__WEBPACK_IMPORTED_MODULE_5__["ControladoriaCadastrosFluxoCaixaComponent"],
    },
    {
        path: '**',
        component: src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"],
    }
];
let ControladoriaFluxoCaixaRoutingModule = class ControladoriaFluxoCaixaRoutingModule {
};
ControladoriaFluxoCaixaRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ControladoriaFluxoCaixaRoutingModule);



/***/ }),

/***/ "JO0R":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/controladoria/fluxo-caixa/cadastros/fluxo-caixa/fluxo-caixa.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: ControladoriaCadastrosFluxoCaixaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControladoriaCadastrosFluxoCaixaComponent", function() { return ControladoriaCadastrosFluxoCaixaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_fluxo_caixa_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./fluxo-caixa.component.html */ "DF54");
/* harmony import */ var _fluxo_caixa_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fluxo-caixa.component.scss */ "3Yz5");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var _services_fluxo_caixa_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/fluxo-caixa.service */ "VUIZ");
/* harmony import */ var _services_tipos_fluxo_caixa_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../services/tipos-fluxo-caixa.service */ "BXF0");
/* harmony import */ var _services_empresas_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../services/empresas.service */ "mtWt");
/* harmony import */ var _services_bancos_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../services/bancos.service */ "Qkz2");

















let ControladoriaCadastrosFluxoCaixaComponent = class ControladoriaCadastrosFluxoCaixaComponent {
    constructor(fluxoCaixaService, tiposFluxoCaixaService, empresaService, bancoService, activatedRoute, routerService, route, notice, formBuilder, localeService, modalService, dateService, location) {
        this.fluxoCaixaService = fluxoCaixaService;
        this.tiposFluxoCaixaService = tiposFluxoCaixaService;
        this.empresaService = empresaService;
        this.bancoService = bancoService;
        this.activatedRoute = activatedRoute;
        this.routerService = routerService;
        this.route = route;
        this.notice = notice;
        this.formBuilder = formBuilder;
        this.localeService = localeService;
        this.modalService = modalService;
        this.dateService = dateService;
        this.location = location;
        this.spinnerFullScreen = false;
        this.loaderNavbar = false;
        this.breadCrumbTree = [];
        this.data = new Date();
        this.tipos = [];
        this.tipo = 0;
        this.tiposLancamentos = [];
        this.empresas = [];
        this.bancos = [];
        this.validaPagamento = false;
        this.inativaBotao = true;
        this.config = {
            animated: false,
            ignoreBackdropClick: true,
        };
        this.appTitle = 'Cadastro de Lançamentos';
        this.localeService.use('pt-br');
        this.bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' }, { adaptivePosition: true }, { showWeekNumbers: false });
        this.form = this.formBuilder.group({
            COD_LANCAMENTO: [null],
            DATA_VENCIMENTO: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            DATA_EXECUCAO: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            COD_TIPO: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            COD_TIPO_LANCAMENTO: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            COD_EMPR_LANCAMENTO: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            COD_EMPR_RECEBIMENTO: [null],
            COD_BANCO: [null],
            VALOR: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            OBSERVACAO: [null],
            JUSTIFICATIVA: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(10)],
            time: [new Date().getTime()],
        });
    }
    ngOnInit() {
        this.setBreadCrumb();
        this.getTipos();
        this.getEmpresas();
        this.getBancos();
        this.onActivatedRoute();
    }
    setBreadCrumb() {
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: '/controladoria/home',
            },
            {
                descricao: 'Fluxo de caixa',
                routerLink: '/controladoria/fluxo-caixa',
            },
            {
                descricao: this.appTitle,
            },
        ];
    }
    onActivatedRoute() {
        const params = this.activatedRoute.snapshot.params;
        const queryParams = this.activatedRoute.snapshot.queryParams;
        if (params.hasOwnProperty('id')) {
            this.getFluxoCaixa({ COD_LANCAMENTO: params.id });
        }
        else if (queryParams.hasOwnProperty('q')) {
            const decoded = this.routerService.getBase64UrlParams(queryParams);
            this.getTiposFluxoCaixa({ COD_TIPO: decoded['COD_TIPO'] });
            this.form.patchValue(decoded);
            this.form.get('COD_LANCAMENTO').setValue(undefined);
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
    getTipos() {
        this.tipo;
        this.fluxoCaixaService.getTipos().subscribe((response) => {
            this.tipos = response['data'];
        });
    }
    getTiposFluxoCaixa(params) {
        this.spinnerFullScreen = true;
        this.tipo = this.form.value.COD_TIPO;
        this.tiposFluxoCaixaService
            .getTiposFluxoCaixa(params)
            .subscribe((response) => {
            if (response.status === 204) {
                this.notice.notice('Não existe tipos de lançamentos cadastrados.');
                this.spinnerFullScreen = false;
                this.tiposLancamentos = [];
            }
            else {
                this.tiposLancamentos = response.body['data'];
                this.spinnerFullScreen = false;
                this.mostraCampos();
            }
        });
    }
    getEmpresas() {
        this.empresaService
            .getEmpresas(this.getParams())
            .subscribe((response) => {
            if (response.status === 204) {
                this.notice.notice('Não existe empresas cadastradas.');
            }
            else
                this.empresas = response.body['data'];
        });
    }
    getBancos() {
        this.bancoService.getBancos(this.getParams()).subscribe((response) => {
            if (response.status === 204) {
                this.notice.notice('Não existe bancos cadastradas.');
            }
            else
                this.bancos = response.body['data'];
        });
    }
    mostraCampos() {
        if (this.form.value['COD_TIPO'] == 2) {
            this.validaPagamento = true;
            this.form.controls['COD_EMPR_RECEBIMENTO'].enable();
            this.form.controls['COD_BANCO'].enable();
            return true;
        }
        else if (this.form.value['COD_EMPR_RECEBIMENTO']) {
            this.validaPagamento = false;
            this.form.controls['COD_EMPR_RECEBIMENTO'].enable();
            this.form.controls['COD_BANCO'].enable();
            return true;
        }
        this.validaPagamento = true;
        this.form.controls['COD_EMPR_RECEBIMENTO'].enable();
        this.form.controls['COD_BANCO'].enable();
        return false;
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
    validaSalvar(template) {
        if (!this.form.get('COD_LANCAMENTO').value) {
            this.postCadastrar();
        }
        else {
            this.modalRef = this.modalService.show(template, this.config);
        }
    }
    postCadastrar() {
        this.spinnerFullScreen = true;
        this.fluxoCaixaService.postCadastrar(this.getParams()).subscribe((response) => {
            if (response.status === 200)
                this.notice.success(response.body['mensagem']);
            this.location.back();
        }, (error) => this.notice.error());
    }
    retorna() {
        this.route.navigate([`./../`], {
            relativeTo: this.activatedRoute,
        });
    }
    getFluxoCaixa(params) {
        this.spinnerFullScreen = true;
        this.fluxoCaixaService
            .getFluxoCaixa(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => {
            this.spinnerFullScreen = false;
        }))
            .subscribe((response) => {
            this.form.patchValue(response.body['data'][0]);
            this.getTiposFluxoCaixa(this.getParams());
        });
    }
};
ControladoriaCadastrosFluxoCaixaComponent.ctorParameters = () => [
    { type: _services_fluxo_caixa_service__WEBPACK_IMPORTED_MODULE_13__["ControladoriaFluxoCaixaService"] },
    { type: _services_tipos_fluxo_caixa_service__WEBPACK_IMPORTED_MODULE_14__["ControladoriaTiposFluxoCaixaService"] },
    { type: _services_empresas_service__WEBPACK_IMPORTED_MODULE_15__["ControladoriaEmpresasService"] },
    { type: _services_bancos_service__WEBPACK_IMPORTED_MODULE_16__["ControladoriaBancosService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_12__["RouterService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsLocaleService"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalService"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_9__["DateService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] }
];
ControladoriaCadastrosFluxoCaixaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'cadastro-fluxo-caixa',
        template: _raw_loader_fluxo_caixa_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_fluxo_caixa_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_fluxo_caixa_service__WEBPACK_IMPORTED_MODULE_13__["ControladoriaFluxoCaixaService"],
        _services_tipos_fluxo_caixa_service__WEBPACK_IMPORTED_MODULE_14__["ControladoriaTiposFluxoCaixaService"],
        _services_empresas_service__WEBPACK_IMPORTED_MODULE_15__["ControladoriaEmpresasService"],
        _services_bancos_service__WEBPACK_IMPORTED_MODULE_16__["ControladoriaBancosService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_12__["RouterService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsLocaleService"],
        ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalService"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_9__["DateService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"]])
], ControladoriaCadastrosFluxoCaixaComponent);



/***/ }),

/***/ "JxTG":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/controladoria/fluxo-caixa/cadastros/tipos-fluxo-caixa/tipos-fluxo-caixa.component.html ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen [hidden]=\"!spinnerFullScreen\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar [hidden]=\"!loaderNavbar\"></loader-spinner-navbar>\r\n<app-header [appTitle]=\"appTitle\">\r\n  <button\r\n    (click)=\"putTiposFluxoCaixa()\"\r\n    [disabled]=\"form.status == 'INVALID'\"\r\n    >\r\n    Cadastrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <form autocomplete=\"off\" [formGroup]=\"form\">\r\n        <div class=\"form-row justify-content-center\">\r\n          <div class=\"form-group col-md-4\">\r\n            <label for=\"tipo\"> Tipo </label>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"true\"\r\n              [items]=\"tipos\"\r\n              [virtualScroll]=\"true\"\r\n              labelForId=\"tipo\"\r\n              bindLabel=\"DESC_TIPO\"\r\n              bindValue=\"COD_TIPO\"\r\n              placeholder=\"Selecione...\"\r\n              formControlName=\"COD_TIPO\"\r\n              [ngClass]=\"onFieldError('COD_TIPO') + ' ' + onFieldRequired('COD_TIPO')\"\r\n            >\r\n            </ng-select>\r\n            <invalid-form-control\r\n              [show]=\"onFieldInvalid('COD_TIPO')\"\r\n              message=\"Tipo de documento é obrigatório.\">\r\n            </invalid-form-control>\r\n          </div>\r\n          <div class=\"form-group col-md-4\">\r\n            <div class=\"form-group col-md-12\">\r\n              <label for=\"lancamento\"> Descrição do lançamento </label>\r\n              <input\r\n                id=\"lancamento\"\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                placeholder=\"DIGITE...\"\r\n                formControlName=\"DESC_TIPO_LANCAMENTO\"\r\n                [ngClass]=\"onFieldError('DESC_TIPO_LANCAMENTO') + ' ' + onFieldRequired('DESC_TIPO_LANCAMENTO')\">\r\n            </div>\r\n            <invalid-form-control\r\n              [show]=\"onFieldInvalid('DESC_TIPO_LANCAMENTO')\"\r\n              message=\"Tipo de documento é obrigatório.\">\r\n            </invalid-form-control>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</app-body>\r\n");

/***/ }),

/***/ "KzLu":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/controladoria/fluxo-caixa/listas/bancos/bancos.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29udHJvbGFkb3JpYS9mbHV4by1jYWl4YS9saXN0YXMvYmFuY29zL2JhbmNvcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "LWhX":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/controladoria/fluxo-caixa/listas/tipos-fluxo-caixa/tipos-fluxo-caixa.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: ControladoriaTiposFluxoCaixaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControladoriaTiposFluxoCaixaComponent", function() { return ControladoriaTiposFluxoCaixaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tipos_fluxo_caixa_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tipos-fluxo-caixa.component.html */ "yvIa");
/* harmony import */ var _tipos_fluxo_caixa_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tipos-fluxo-caixa.component.scss */ "yGtA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var _services_tipos_fluxo_caixa_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/tipos-fluxo-caixa.service */ "BXF0");
/* harmony import */ var _services_fluxo_caixa_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/fluxo-caixa.service */ "VUIZ");












let ControladoriaTiposFluxoCaixaComponent = class ControladoriaTiposFluxoCaixaComponent {
    constructor(activatedRoute, tiposFluxoCaixaService, fluxoCaixaService, formBuilder, route, routerService, notice, dateService) {
        this.activatedRoute = activatedRoute;
        this.tiposFluxoCaixaService = tiposFluxoCaixaService;
        this.fluxoCaixaService = fluxoCaixaService;
        this.formBuilder = formBuilder;
        this.route = route;
        this.routerService = routerService;
        this.notice = notice;
        this.dateService = dateService;
        this.appTitle = 'Tipos de Lançamentos';
        this.breadCrumbTree = [];
        this.spinnerFullScreen = false;
        this.loaderNavbar = false;
        this.tipos = [];
        this.tiposLancamentos = [];
        this.noResult = false;
        this.dadosEmpty = false;
        /* Paginação */
        this.itemsPerPage = 10;
        this.currentPage = 1;
        this.begin = 0;
        this.end = 10;
        /* Config Table */
        this.tableConfig = {
            subtitleBorder: true,
        };
        this.form = this.formBuilder.group({
            COD_TIPO: [null],
            DESC_TIPO: [null],
            COD_TIPO_LANCAMENTO: [null],
            DESC_TIPO_LANCAMENTO: [null],
            time: [new Date().getTime()],
        });
    }
    ngOnInit() {
        this.setBreadCrumb();
        this.getTipos();
        this.getTiposFluxoCaixa(this.getParams());
    }
    setBreadCrumb() {
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: '/controladoria/home',
            },
            {
                descricao: 'Lançamento fluxo de caixa',
                routerLink: '/controladoria/fluxo-caixa',
            },
            {
                descricao: this.appTitle,
            },
        ];
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
    /* Paginação */
    onPageChanged(event) {
        this.begin = (event.page - 1) * event.itemsPerPage;
        this.end = event.page * event.itemsPerPage;
    }
    /* Paginação */
    getTipos() {
        this.fluxoCaixaService.getTipos().subscribe((response) => {
            this.tipos = response['data'];
        });
    }
    getTiposFluxoCaixa(param) {
        this.spinnerFullScreen = true;
        this.tiposFluxoCaixaService
            .getTiposFluxoCaixa(param)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
            this.spinnerFullScreen = false;
            this.noResult = true;
        }))
            .subscribe((response) => {
            if (response.status === 204) {
                this.notice.notice('Não existe tipos de lançamentos cadastrados.');
                this.tiposLancamentos = [];
            }
            else {
                this.tiposLancamentos = response.body['data'];
                this.totalItems = response.body['data'].length;
            }
        });
    }
    onFilter() {
        this.getTiposFluxoCaixa(this.getParams());
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
};
ControladoriaTiposFluxoCaixaComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_tipos_fluxo_caixa_service__WEBPACK_IMPORTED_MODULE_10__["ControladoriaTiposFluxoCaixaService"] },
    { type: _services_fluxo_caixa_service__WEBPACK_IMPORTED_MODULE_11__["ControladoriaFluxoCaixaService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__["RouterService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_8__["DateService"] }
];
ControladoriaTiposFluxoCaixaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'lista-tipos-fluxo-caixa',
        template: _raw_loader_tipos_fluxo_caixa_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tipos_fluxo_caixa_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _services_tipos_fluxo_caixa_service__WEBPACK_IMPORTED_MODULE_10__["ControladoriaTiposFluxoCaixaService"],
        _services_fluxo_caixa_service__WEBPACK_IMPORTED_MODULE_11__["ControladoriaFluxoCaixaService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__["RouterService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_8__["DateService"]])
], ControladoriaTiposFluxoCaixaComponent);



/***/ }),

/***/ "PU0D":
/*!****************************************************************************!*\
  !*** ./src/app/modules/controladoria/fluxo-caixa/fluxo-caixa.component.ts ***!
  \****************************************************************************/
/*! exports provided: ControladoriaFluxoCaixaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControladoriaFluxoCaixaComponent", function() { return ControladoriaFluxoCaixaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_fluxo_caixa_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./fluxo-caixa.component.html */ "cseJ");
/* harmony import */ var _fluxo_caixa_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fluxo-caixa.component.scss */ "w2Ph");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");






let ControladoriaFluxoCaixaComponent = class ControladoriaFluxoCaixaComponent {
    constructor(route, atividadesService) {
        this.route = route;
        this.atividadesService = atividadesService;
    }
    ngOnInit() {
        this.route.navigate(['/controladoria/fluxo-caixa']);
        this.atividadesService
            .registrarAcesso()
            .subscribe();
    }
};
ControladoriaFluxoCaixaComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_5__["AtividadesService"] }
];
ControladoriaFluxoCaixaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'fluxo-caixa',
        template: _raw_loader_fluxo_caixa_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_fluxo_caixa_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_5__["AtividadesService"]])
], ControladoriaFluxoCaixaComponent);



/***/ }),

/***/ "Qkz2":
/*!******************************************************************************!*\
  !*** ./src/app/modules/controladoria/fluxo-caixa/services/bancos.service.ts ***!
  \******************************************************************************/
/*! exports provided: ControladoriaBancosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControladoriaBancosService", function() { return ControladoriaBancosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");



let ControladoriaBancosService = class ControladoriaBancosService {
    constructor(http) {
        this.http = http;
        this.BASE_URL = `https://crm360.monterrey.com.bo/api`;
    }
    getBancos(param) {
        return this.http.get(`${this.BASE_URL}/controladoria/lancamentos-fluxo-caixa/bancos`, {
            params: param,
            observe: 'response',
        });
    }
    putBancos(params) {
        if (params.COD_BANCO != undefined) {
            return this.http.put(`${this.BASE_URL}/controladoria/lancamentos-fluxo-caixa/bancos`, params, { observe: 'response' });
        }
        else {
            return this.http.post(`${this.BASE_URL}/controladoria/lancamentos-fluxo-caixa/bancos`, params, { observe: 'response' });
        }
    }
};
ControladoriaBancosService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ControladoriaBancosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ControladoriaBancosService);



/***/ }),

/***/ "RVJb":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/controladoria/fluxo-caixa/cadastros/bancos/bancos.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen [hidden]=\"!spinnerFullScreen\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar [hidden]=\"!loaderNavbar\"></loader-spinner-navbar>\r\n<app-header [appTitle]=\"appTitle\">\r\n  <button\r\n    (click)=\"putBancos()\"\r\n    [disabled]=\"form.status == 'INVALID'\"\r\n    >\r\n    Cadastrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <form autocomplete=\"off\" [formGroup]=\"form\">\r\n        <div class=\"form-row justify-content-center\">\r\n          <div class=\"form-group col-md-4\">\r\n            <div class=\"form-group col-md-12 p-0\">\r\n              <label for=\"banco\"> Nome Banco/Fundo </label>\r\n              <input\r\n                id=\"banco\"\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                placeholder=\"DIGITE...\"\r\n                formControlName=\"DESC_BANCO\"\r\n                [ngClass]=\"onFieldError('DESC_BANCO') + ' ' + onFieldRequired('DESC_BANCO')\">\r\n            </div>\r\n            <invalid-form-control\r\n              [show]=\"onFieldInvalid('DESC_BANCO')\"\r\n              message=\"Informar banco é obrigatório.\">\r\n            </invalid-form-control>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</app-body>\r\n");

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

/***/ "T61W":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/controladoria/fluxo-caixa/cadastros/empresas/empresas.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ControladoriaCadastroEmpresasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControladoriaCadastroEmpresasComponent", function() { return ControladoriaCadastroEmpresasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_empresas_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./empresas.component.html */ "a6gk");
/* harmony import */ var _empresas_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./empresas.component.scss */ "v2IY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");
/* harmony import */ var _services_empresas_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/empresas.service */ "mtWt");










let ControladoriaCadastroEmpresasComponent = class ControladoriaCadastroEmpresasComponent {
    constructor(activatedRoute, formBuilder, notice, empresaService, route, location, dateService) {
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.notice = notice;
        this.empresaService = empresaService;
        this.route = route;
        this.location = location;
        this.dateService = dateService;
        this.idLancEmpr = this.activatedRoute.snapshot.params['id'];
        this.breadCrumbTree = [];
        this.spinnerFullScreen = false;
        this.loaderNavbar = false;
        this.appTitle = 'Cadastro de Empresas';
        this.empresas = [];
        this.form = this.formBuilder.group({
            DESC_EMPR: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            COD_EMPR: [null],
            time: [new Date().getTime()],
        });
    }
    ngOnInit() {
        this.setBreadCrumb();
        this.onActivatedRoute();
    }
    setBreadCrumb() {
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: '/controladoria/home',
            },
            {
                descricao: 'Lançamento fluxo de caixa',
                routerLink: '/controladoria/fluxo-caixa',
            },
            {
                descricao: 'Empresas',
                routerLink: '/controladoria/fluxo-caixa/empresas',
            },
            {
                descricao: this.appTitle,
            },
        ];
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
    getEmpresas(param) {
        this.spinnerFullScreen = true;
        this.empresaService.getEmpresas(param).subscribe((response) => {
            this.empresas = response.body['data'];
            this.spinnerFullScreen = false;
            this.form.patchValue(response.body['data'][0]);
        });
    }
    putEmpresas() {
        this.spinnerFullScreen = true;
        this.empresaService.putEmpresas(this.getParams()).subscribe((response) => {
            if (response.status === 200)
                this.notice.success(response.body['mensagem']);
            this.location.back();
        }, (error) => this.notice.error());
    }
    onActivatedRoute() {
        const params = this.activatedRoute.snapshot.params;
        if (params.hasOwnProperty('id')) {
            this.getEmpresas({ COD_EMPR: params.id });
        }
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
};
ControladoriaCadastroEmpresasComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"] },
    { type: _services_empresas_service__WEBPACK_IMPORTED_MODULE_9__["ControladoriaEmpresasService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_8__["DateService"] }
];
ControladoriaCadastroEmpresasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'cadastro-empresas',
        template: _raw_loader_empresas_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_empresas_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"],
        _services_empresas_service__WEBPACK_IMPORTED_MODULE_9__["ControladoriaEmpresasService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_8__["DateService"]])
], ControladoriaCadastroEmpresasComponent);



/***/ }),

/***/ "VUIZ":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/controladoria/fluxo-caixa/services/fluxo-caixa.service.ts ***!
  \***********************************************************************************/
/*! exports provided: ControladoriaFluxoCaixaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControladoriaFluxoCaixaService", function() { return ControladoriaFluxoCaixaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");



let ControladoriaFluxoCaixaService = class ControladoriaFluxoCaixaService {
    constructor(http) {
        this.http = http;
        this.BASE_URL = `https://crm360.monterrey.com.bo/api`;
        this.modalEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.detailPanelEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    getTipos() {
        return this.http.get(`${this.BASE_URL}/controladoria/lancamentos-fluxo-caixa/tipo`);
    }
    getFluxoCaixa(params) {
        return this.http.get(`${this.BASE_URL}/controladoria/lancamentos-fluxo-caixa/fluxo-caixa`, {
            params: params,
            observe: 'response',
        });
    }
    getLog(params) {
        return this.http.get(`${this.BASE_URL}/controladoria/lancamentos-fluxo-caixa/logs`, {
            params: params,
            observe: 'response',
        });
    }
    setStateModal(params = { state: true, template: undefined, data: [] }) {
        return this.modalEmitter.emit(params);
    }
    getStateModal() {
        return this.modalEmitter;
    }
    setDetailPanel(value) {
        return this.detailPanelEmitter.emit(value);
    }
    getDetailPanel() {
        return this.detailPanelEmitter;
    }
    postCadastrar(param) {
        if (!param.COD_LANCAMENTO) {
            return this.http.post(`${this.BASE_URL}/controladoria/lancamentos-fluxo-caixa/fluxo-caixa`, param, { observe: 'response' });
        }
        return this.http.put(`${this.BASE_URL}/controladoria/lancamentos-fluxo-caixa/fluxo-caixa`, param, { observe: 'response' });
    }
};
ControladoriaFluxoCaixaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ControladoriaFluxoCaixaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ControladoriaFluxoCaixaService);



/***/ }),

/***/ "Valb":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/controladoria/fluxo-caixa/cadastros/tipos-fluxo-caixa/tipos-fluxo-caixa.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: ControladoriaCadastroTiposFluxoCaixaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControladoriaCadastroTiposFluxoCaixaComponent", function() { return ControladoriaCadastroTiposFluxoCaixaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tipos_fluxo_caixa_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tipos-fluxo-caixa.component.html */ "JxTG");
/* harmony import */ var _tipos_fluxo_caixa_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tipos-fluxo-caixa.component.scss */ "g9Pz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");
/* harmony import */ var _services_tipos_fluxo_caixa_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/tipos-fluxo-caixa.service */ "BXF0");
/* harmony import */ var _services_fluxo_caixa_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/fluxo-caixa.service */ "VUIZ");











let ControladoriaCadastroTiposFluxoCaixaComponent = class ControladoriaCadastroTiposFluxoCaixaComponent {
    constructor(cadastroTiposService, fluxoCaixaService, activatedRoute, notice, formBuilder, location, dateService) {
        this.cadastroTiposService = cadastroTiposService;
        this.fluxoCaixaService = fluxoCaixaService;
        this.activatedRoute = activatedRoute;
        this.notice = notice;
        this.formBuilder = formBuilder;
        this.location = location;
        this.dateService = dateService;
        this.breadCrumbTree = [];
        this.spinnerFullScreen = false;
        this.loaderNavbar = false;
        this.appTitle = 'Cadastro de Lançamentos';
        this.tipos = [];
        this.tiposLancamentos = [];
        this.form = this.formBuilder.group({
            COD_TIPO: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            DESC_TIPO_LANCAMENTO: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            COD_TIPO_LANCAMENTO: [null],
            time: [new Date().getTime()],
        });
    }
    ngOnInit() {
        this.setBreadCrumb();
        this.getTipos();
        this.onActivatedRoute();
    }
    setBreadCrumb() {
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: '/controladoria/home',
            },
            {
                descricao: 'Lançamento fluxo de caixa',
                routerLink: '/controladoria/fluxo-caixa',
            },
            {
                descricao: 'Tipos de Lançamentos',
                routerLink: '/controladoria/fluxo-caixa/tipos-fluxo-caixa',
            },
            {
                descricao: this.appTitle,
            },
        ];
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
    getTipos() {
        this.fluxoCaixaService.getTipos().subscribe((response) => {
            this.tipos = response['data'];
        });
    }
    getTiposFluxoCaixa(params) {
        this.spinnerFullScreen = true;
        this.cadastroTiposService.getTiposFluxoCaixa(params).subscribe((response) => {
            this.form.patchValue(response.body['data'][0]);
            this.spinnerFullScreen = false;
        });
    }
    getTiposLancamentosAtualizado() {
        let lista = this.tiposLancamentos[0];
        this.form.controls['cadastroTipo'].setValue(lista.COD_TIPO);
        this.form.controls['cadastroLancamento'].setValue(lista.DESC_TIPO_LANCAMENTO);
    }
    putTiposFluxoCaixa() {
        this.spinnerFullScreen = true;
        this.cadastroTiposService.putTiposFluxoCaixa(this.getParams()).subscribe((response) => {
            if (response.status === 200) {
                this.notice.success(response.body['mensagem']);
                this.location.back();
            }
        }, (error) => this.notice.error());
    }
    onActivatedRoute() {
        const params = this.activatedRoute.snapshot.params;
        if (params.hasOwnProperty('id')) {
            this.getTiposFluxoCaixa({ COD_TIPO_LANCAMENTO: params.id });
        }
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
};
ControladoriaCadastroTiposFluxoCaixaComponent.ctorParameters = () => [
    { type: _services_tipos_fluxo_caixa_service__WEBPACK_IMPORTED_MODULE_9__["ControladoriaTiposFluxoCaixaService"] },
    { type: _services_fluxo_caixa_service__WEBPACK_IMPORTED_MODULE_10__["ControladoriaFluxoCaixaService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_8__["DateService"] }
];
ControladoriaCadastroTiposFluxoCaixaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'cadastro-tipos-fluxo-caixa',
        template: _raw_loader_tipos_fluxo_caixa_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tipos_fluxo_caixa_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_tipos_fluxo_caixa_service__WEBPACK_IMPORTED_MODULE_9__["ControladoriaTiposFluxoCaixaService"],
        _services_fluxo_caixa_service__WEBPACK_IMPORTED_MODULE_10__["ControladoriaFluxoCaixaService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_8__["DateService"]])
], ControladoriaCadastroTiposFluxoCaixaComponent);



/***/ }),

/***/ "a6gk":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/controladoria/fluxo-caixa/cadastros/empresas/empresas.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen [hidden]=\"!spinnerFullScreen\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar [hidden]=\"!loaderNavbar\"></loader-spinner-navbar>\r\n<app-header [appTitle]=\"appTitle\">\r\n  <button\r\n    (click)=\"putEmpresas()\"\r\n    [disabled]=\"form.status == 'INVALID'\"\r\n    >\r\n    Cadastrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <form autocomplete=\"off\" [formGroup]=\"form\">\r\n        <div class=\"form-row justify-content-center\">\r\n          <div class=\"form-group col-md-4\">\r\n            <div class=\"form-group col-md-12 p-0\">\r\n              <label for=\"lancamento\"> Nome Empresa </label>\r\n              <input\r\n                id=\"empresa\"\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                placeholder=\"DIGITE...\"\r\n                formControlName=\"DESC_EMPR\"\r\n                [ngClass]=\"onFieldError('DESC_EMPR') + ' ' + onFieldRequired('DESC_EMPR')\">\r\n            </div>\r\n            <invalid-form-control\r\n              [show]=\"onFieldInvalid('DESC_EMPR')\"\r\n              message=\"Informar empresa é obrigatório.\">\r\n            </invalid-form-control>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</app-body>\r\n\r\n");

/***/ }),

/***/ "cseJ":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/controladoria/fluxo-caixa/fluxo-caixa.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>fluxo-caixa works!</p>\r\n");

/***/ }),

/***/ "fpce":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/controladoria/fluxo-caixa/listas/empresas/empresas.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ControladoriaListaEmpresasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControladoriaListaEmpresasComponent", function() { return ControladoriaListaEmpresasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_empresas_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./empresas.component.html */ "I/Vo");
/* harmony import */ var _empresas_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./empresas.component.scss */ "nKZH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _services_empresas_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/empresas.service */ "mtWt");







let ControladoriaListaEmpresasComponent = class ControladoriaListaEmpresasComponent {
    constructor(activatedRoute, empresaService, route, notice) {
        this.activatedRoute = activatedRoute;
        this.empresaService = empresaService;
        this.route = route;
        this.notice = notice;
        this.appTitle = 'Empresas';
        this.breadCrumbTree = [];
        this.spinnerFullScreen = false;
        this.loaderNavbar = false;
        this.noResult = false;
        this.empresas = [];
        this.dadosEmpty = false;
        /* Config Table */
        this.tableConfig = {
            subtitleBorder: false,
        };
        /* Paginação */
        this.itemsPerPage = 10;
        this.currentPage = 1;
        this.begin = 0;
        this.end = 10;
    }
    ngOnInit() {
        this.setBreadCrumb();
        this.getEmpresas();
    }
    setBreadCrumb() {
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: '/controladoria/home',
            },
            {
                descricao: 'Lançamento fluxo de caixa',
                routerLink: '/controladoria/fluxo-caixa',
            },
            {
                descricao: this.appTitle,
            },
        ];
    }
    /* Paginação */
    onPageChanged(event) {
        this.begin = (event.page - 1) * event.itemsPerPage;
        this.end = event.page * event.itemsPerPage;
    }
    /* Paginação */
    getEmpresas() {
        let idLancEmpr = 0;
        this.spinnerFullScreen = true;
        this.empresaService.getEmpresas(idLancEmpr).subscribe((response) => {
            if (response.status === 204) {
                this.notice.notice('Não existe empresas cadastradas.');
                this.spinnerFullScreen = false;
            }
            else {
                this.empresas = response.body['data'];
                this.totalItems = response.body['data'].length;
                this.spinnerFullScreen = false;
                this.noResult = true;
            }
        });
    }
};
ControladoriaListaEmpresasComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_empresas_service__WEBPACK_IMPORTED_MODULE_6__["ControladoriaEmpresasService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"] }
];
ControladoriaListaEmpresasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'lista-empresas',
        template: _raw_loader_empresas_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_empresas_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _services_empresas_service__WEBPACK_IMPORTED_MODULE_6__["ControladoriaEmpresasService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"]])
], ControladoriaListaEmpresasComponent);



/***/ }),

/***/ "g9Pz":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/controladoria/fluxo-caixa/cadastros/tipos-fluxo-caixa/tipos-fluxo-caixa.component.scss ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29udHJvbGFkb3JpYS9mbHV4by1jYWl4YS9jYWRhc3Ryb3MvdGlwb3MtZmx1eG8tY2FpeGEvdGlwb3MtZmx1eG8tY2FpeGEuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "iBXP":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/controladoria/fluxo-caixa/modals/logs/logs.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen [hidden]=\"!spinnerFullScreen\"></loader-spinner-full-screen>\r\n<ng-template #template>\r\n  <div class=\"modal-body\">\r\n    <h5>Log de lançamentos e alterações de fluxo de caixa</h5>\r\n    <div class=\"row\">\r\n      <div [ngClass]=\"{'col-12': !showDetailPanel, 'col-7 pr-0': showDetailPanel}\">\r\n        <custom-table [config]=\"tableLogConfig\">\r\n          <ng-template #thead let-thead>\r\n            <tr>\r\n              <th class=\"text-center\" scope=\"col\" style=\"width: 60px;\"> Nr. Lançamento </th>\r\n              <th class=\"text-center\" scope=\"col\" style=\"width: 100px;\"> Tipo Lançamento </th>\r\n              <th class=\"text-center\" scope=\"col\" style=\"width: 100px;\"> Descrição Lançamento </th>\r\n              <th class=\"text-center\" scope=\"col\" style=\"width: 80px;\" [hidden]=\"showDetailPanel\"> Empresa de Lançamento </th>\r\n              <th class=\"text-center\" scope=\"col\" style=\"width: 80px;\" [hidden]=\"showDetailPanel\"> Empresa de Recebimento </th>\r\n              <th class=\"text-center\" scope=\"col\" style=\"width: 80px;\" [hidden]=\"showDetailPanel\"> Cod. Usuário de Alteração </th>\r\n              <th class=\"text-center\" scope=\"col\" style=\"width: 80px;\" [hidden]=\"showDetailPanel\"> Nome Usuário de Alteração </th>\r\n            </tr>\r\n          </ng-template>\r\n          <ng-template #tbody let-tbody >\r\n            <tr class=\"text-center text-white\" (click)=\"openTab(dados)\">\r\n              <td class=\"text-center bg-primary\">{{ dados?.COD_LANCAMENTO }}</td>\r\n              <td class=\"text-center bg-primary\">{{ dados?.DESC_TIPO | uppercase }}</td>\r\n              <td class=\"text-center bg-primary\">{{ dados?.DESC_TIPO_LANCAMENTO | uppercase }}</td>\r\n              <td class=\"text-center bg-primary\" [hidden]=\"showDetailPanel\">{{ dados?.DESC_EMPR_LANCAMENTO | uppercase }}</td>\r\n              <td class=\"text-center bg-primary\" [hidden]=\"showDetailPanel\">{{ dados?.DESC_EMPR_RECEBIMENTO | uppercase }}</td>\r\n              <td class=\"text-center bg-primary\" [hidden]=\"showDetailPanel\">{{ dados?.COD_USUARIO }}</td>\r\n              <td class=\"text-center bg-primary\" [hidden]=\"showDetailPanel\">{{ dados?.NM_USUARIO }}</td>\r\n            </tr>\r\n            <tr class=\"text-center\" *ngFor=\"let item of items | slice : begin : end; let i = index\" (click)=\"openTab(item)\">\r\n              <td class=\"text-center\">{{ item?.COD_LANCAMENTO }}</td>\r\n              <td class=\"text-center\">{{ item?.DESC_TIPO | uppercase }}</td>\r\n              <td class=\"text-center\">{{ item?.DESC_TIPO_LANCAMENTO | uppercase }}</td>\r\n              <td class=\"text-center\" [hidden]=\"showDetailPanel\">{{ item?.DESC_EMPR_LANCAMENTO | uppercase }}</td>\r\n              <td class=\"text-center\" [hidden]=\"showDetailPanel\">{{ item?.DESC_EMPR_RECEBIMENTO | uppercase }}</td>\r\n              <td class=\"text-center\" [hidden]=\"showDetailPanel\">{{ item?.COD_USUARIO }}</td>\r\n              <td class=\"text-center\" [hidden]=\"showDetailPanel\">{{ item?.NM_USUARIO }}</td>\r\n            </tr>\r\n          </ng-template>\r\n        </custom-table>\r\n        <div class=\"mt-3\">\r\n          Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\r\n          <div class=\"row justify-content-between\">\r\n            <div class=\"ml-3\">\r\n              <pagination\r\n                [maxSize]=\"10\"\r\n                [totalItems]=\"totalItems\"\r\n                [(itemsPerPage)]=\"itemsPerPage\"\r\n                (pageChanged)=\"onPageChanged($event)\"\r\n                [boundaryLinks]=\"true\"\r\n                [(ngModel)]=\"currentPage\"\r\n                previousText=\"&lsaquo;\"\r\n                nextText=\"&rsaquo;\"\r\n                firstText=\"&laquo;\"\r\n                lastText=\"&raquo;\">\r\n              </pagination>\r\n            </div>\r\n            <div class=\"mr-2 pr-1\">\r\n              <button  \r\n                type=\"button\" class=\"btn btn-secondary mr-1\" (click)=\"modalRef.hide()\"\r\n                >\r\n                Fechar \r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <empty-result\r\n          message=\"Nenhuma informação encontrada\"\r\n          class=\"my-3\"\r\n          *ngIf=\"dadosEmpty\">\r\n        </empty-result>\r\n      </div>\r\n      <div class=\"col-5\" [hidden]=\"!showDetailPanel\">\r\n        <detail-panel [panelTitle]=\"appTitle\">\r\n          <div class=\"d-flex\">\r\n            <div class=\"col-6 pl-0\">\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-md-12\">\r\n                  <label> Cod. Usuário de Alteração </label>\r\n                  <div class=\"text-nowrap\">{{ log.COD_USUARIO }}</div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-md-12\">\r\n                  <label> Empresa de lançamento </label>\r\n                  <div class=\"text-nowrap\">{{ log.DESC_EMPR_LANCAMENTO | uppercase }}</div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-md-12\">\r\n                  <label> Data de lançamento </label>\r\n                  <div class=\"text-nowrap\">{{ log.DATA_INCLUSAO }}</div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-md-12\">\r\n                  <label> Data de vencimento </label>\r\n                  <div class=\"text-nowrap\">{{ log.DATA_VENCIMENTO }}</div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-md-12\">\r\n                  <label> Data de execução </label>\r\n                  <div class=\"text-nowrap\">{{ log.DATA_EXECUCAO }}</div>\r\n                </div>\r\n              </div>\r\n            </div>  \r\n            <div class=\"col-6\">\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-md-12\">\r\n                  <label> Nome Usuário de Alteração </label>\r\n                  <div class=\"text-nowrap\">{{ log.NM_USUARIO | uppercase }}</div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-md-12\">\r\n                  <label> Empresa de recebimento </label>\r\n                  <div class=\"text-nowrap\">{{ log.DESC_EMPR_RECEBIMENTO | uppercase }}</div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-md-12\">\r\n                  <label> Valor </label>\r\n                  <div class=\"text-nowrap\">{{ log.VALOR | currency:'BRL' }}</div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-md-12\">\r\n                  <label> Banco/Fundo </label>\r\n                  <div class=\"text-nowrap\">{{ log.DESC_BANCO | uppercase }}</div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-md-12\">\r\n                  <label> Observação </label>\r\n                  <div class=\"text-nowrap\">{{ log.OBSERVACAO }}</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col p-0\">\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-md-12\">\r\n                <label> Justificativa da alteração </label>\r\n                <div class=\"text-nowrap\">{{ log.JUSTIFICATIVA | uppercase }}</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </detail-panel>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>");

/***/ }),

/***/ "mtWt":
/*!********************************************************************************!*\
  !*** ./src/app/modules/controladoria/fluxo-caixa/services/empresas.service.ts ***!
  \********************************************************************************/
/*! exports provided: ControladoriaEmpresasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControladoriaEmpresasService", function() { return ControladoriaEmpresasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");



let ControladoriaEmpresasService = class ControladoriaEmpresasService {
    constructor(http) {
        this.http = http;
        this.BASE_URL = `https://crm360.monterrey.com.bo/api`;
    }
    getEmpresas(param) {
        return this.http.get(`${this.BASE_URL}/controladoria/lancamentos-fluxo-caixa/empresas`, {
            params: param,
            observe: 'response',
        });
    }
    putEmpresas(params) {
        if (params.COD_EMPR != undefined) {
            return this.http.put(`${this.BASE_URL}/controladoria/lancamentos-fluxo-caixa/empresas`, params, { observe: 'response' });
        }
        else {
            return this.http.post(`${this.BASE_URL}/controladoria/lancamentos-fluxo-caixa/empresas`, params, { observe: 'response' });
        }
    }
};
ControladoriaEmpresasService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ControladoriaEmpresasService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ControladoriaEmpresasService);



/***/ }),

/***/ "nKZH":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/controladoria/fluxo-caixa/listas/empresas/empresas.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29udHJvbGFkb3JpYS9mbHV4by1jYWl4YS9saXN0YXMvZW1wcmVzYXMvZW1wcmVzYXMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "o356":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/controladoria/fluxo-caixa/listas/fluxo-caixa/fluxo-caixa.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ControladoriaListaFluxoCaixaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControladoriaListaFluxoCaixaComponent", function() { return ControladoriaListaFluxoCaixaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_fluxo_caixa_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./fluxo-caixa.component.html */ "BWP4");
/* harmony import */ var _fluxo_caixa_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fluxo-caixa.component.scss */ "Ha6M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");
/* harmony import */ var src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/modules/xlsx/xlsx.service */ "eOmW");
/* harmony import */ var src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/templates/detail-panel/detal-panel.service */ "gIxL");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var _services_fluxo_caixa_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../services/fluxo-caixa.service */ "VUIZ");
/* harmony import */ var _services_empresas_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../services/empresas.service */ "mtWt");
/* harmony import */ var _services_tipos_fluxo_caixa_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../services/tipos-fluxo-caixa.service */ "BXF0");



// ANGULAR




// BOOTSTRAP


// SERVICES








let ControladoriaListaFluxoCaixaComponent = class ControladoriaListaFluxoCaixaComponent {
    constructor(activatedRoute, route, routerService, fluxoCaixaService, tiposFluxoCaixaService, empresaService, notice, localeService, dateService, xlsxService, detailPanelService, modalService, formBuilder) {
        this.activatedRoute = activatedRoute;
        this.route = route;
        this.routerService = routerService;
        this.fluxoCaixaService = fluxoCaixaService;
        this.tiposFluxoCaixaService = tiposFluxoCaixaService;
        this.empresaService = empresaService;
        this.notice = notice;
        this.localeService = localeService;
        this.dateService = dateService;
        this.xlsxService = xlsxService;
        this.detailPanelService = detailPanelService;
        this.modalService = modalService;
        this.formBuilder = formBuilder;
        this.spinnerFullScreen = false;
        this.loaderNavbar = false;
        this.breadCrumbTree = [];
        this.data = new Date();
        this.tipos = [];
        this.tiposLancamentos = [];
        this.empresas = [];
        this.noResult = false;
        this.dadosEmpty = false;
        this.listas = [];
        this.item = {};
        this.listaSelecionada = [];
        this.listaLog = [];
        this.editParam = [];
        this.appTitle = 'Lançamento Fluxo de Caixa';
        /* Paginação */
        this.itemsPerPage = 10;
        this.currentPage = 1;
        this.begin = 0;
        this.end = 10;
        this.showDetailPanel = false;
        this.detailPanel = 'principal';
        /* Config Table */
        this.tableConfig = {
            subtitleBorder: true,
        };
        this.status = [
            {
                COD: '1',
                NOME: 'Ativos',
            },
            {
                COD: '0',
                NOME: 'Inativos',
            },
        ];
        this.subtitles = [
            {
                id: 1,
                text: 'Ativo',
                color: 'green',
            },
            {
                id: 2,
                text: 'Inativo',
                color: 'red',
            },
        ];
        this.config = {
            animated: false,
            ignoreBackdropClick: true,
        };
        this.localeService.use('pt-br');
        this.bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' }, { adaptivePosition: true }, { showWeekNumbers: false });
        this.form = this.formBuilder.group({
            DT_INIC: [this.dateService.getFirstDayMonth(), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            DT_FINA: [this.data, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            COD_TIPO: [null],
            COD_TIPO_LANCAMENTO: [null],
            COD_EMPR_LANCAMENTO: [null],
            IN_STAT: [null],
            JUSTIFICATIVA: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(10)],
            time: [new Date().getTime()],
        });
    }
    ngOnInit() {
        this.setBreadCrumb();
        this.getTipos();
        this.getEmpresas();
        this.getActiveRoute();
        this.onDetailPanel();
        this.getTiposFluxoCaixa(this.getParams());
    }
    setBreadCrumb() {
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: '/controladoria/home',
            },
            {
                descricao: this.appTitle,
            },
        ];
    }
    exportarExcel() {
        this.xlsxService.exportFile(this.listas, 'lançamentos');
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
    ngOnDestroy() {
        this.$showDetailPanelSubscription.unsubscribe();
        this.$activateRoutedSubscription.unsubscribe();
        this.$lancamentoServiceSubscription.unsubscribe();
    }
    onFilter() {
        this.form.get('time').setValue(new Date().getTime());
        this.route.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams(this.getParams()),
        });
    }
    onShowFilter() {
        this.showAdvancedFilter = !this.showAdvancedFilter;
    }
    /* Paginação */
    onPageChanged(event) {
        this.begin = (event.page - 1) * event.itemsPerPage;
        this.end = event.page * event.itemsPerPage;
    }
    /* Paginação */
    getTipos() {
        this.fluxoCaixaService.getTipos().subscribe((response) => {
            this.tipos = response['data'];
        });
    }
    getTiposFluxoCaixa(param) {
        this.tiposFluxoCaixaService
            .getTiposFluxoCaixa(param['COD_TIPO'])
            .subscribe((response) => {
            if (response.status === 204) {
                this.notice.notice('Não existe tipos de lançamentos cadastrados.');
            }
            else
                this.tiposLancamentos = response.body['data'];
        });
    }
    getEmpresas() {
        this.empresaService.getEmpresas(this.getParams()).subscribe((response) => {
            if (response.status === 204) {
                this.notice.notice('Não existe empresas cadastradas.');
            }
            else
                this.empresas = response.body['data'];
        });
    }
    getActiveRoute() {
        this.$activateRoutedSubscription = this.activatedRoute.queryParams.subscribe((response) => {
            if (Object.keys(response).length > 0) {
                const _response = this.routerService.getBase64UrlParams(response);
                this.form.patchValue(_response);
            }
            this.getFluxoCaixa(this.getParams());
        });
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
    getFluxoCaixa(params) {
        this.spinnerFullScreen = true;
        if (this.form.status === 'VALID') {
            this.fluxoCaixaService
                .getFluxoCaixa(params)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
                this.spinnerFullScreen = false;
            }))
                .subscribe((response) => {
                if (response.status === 204) {
                    this.notice.notice('Não há informações para esse período.');
                    this.dadosEmpty = true;
                    this.noResult = false;
                }
                else {
                    this.listas = response.body['data'];
                    this.listas.forEach((element, i) => {
                        element.INDICE = i + 1;
                    });
                    this.totalItems = response.body['data'].length;
                    this.dadosEmpty = false;
                    this.noResult = true;
                    this.showAdvancedFilter = true;
                }
            }, (error) => this.notice.error());
        }
    }
    onDetailPanel() {
        this.$showDetailPanelSubscription = this.detailPanelService.config.subscribe((event) => {
            if (this.detailPanel !== 'principal')
                return;
            this.showDetailPanel = event.showing;
            if (!this.showDetailPanel)
                this.listas.map((lista) => (lista.selected = false));
        });
        this.$lancamentoServiceSubscription = this.fluxoCaixaService
            .getDetailPanel()
            .subscribe((event) => {
            this.detailPanel = event;
            this.detailPanelService.loadedFinished(false);
        });
    }
    openTab(item) {
        this.listas.map((lista) => (lista.selected = false));
        this.item = item;
        this.item.selected = true;
        this.fluxoCaixaService.setDetailPanel('principal');
    }
    openJustificativa(template, data) {
        this.form.get('JUSTIFICATIVA').reset();
        this.listaSelecionada = [];
        this.listaSelecionada = data;
        this.modalRef = this.modalService.show(template, this.config);
    }
    changeType() {
        this.spinnerFullScreen = true;
        let _saldo = JSON.parse(JSON.stringify(this.listaSelecionada));
        _saldo.IN_STAT = _saldo['IN_STAT'] == '1' ? '0' : '1';
        _saldo.JUSTIFICATIVA = this.form.value['JUSTIFICATIVA'];
        this.fluxoCaixaService
            .postCadastrar(_saldo)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
            this.spinnerFullScreen = false;
        }))
            .subscribe((response) => {
            if (response.status === 200)
                this.notice.success(response.body['mensagem']);
            this.listaSelecionada.IN_STAT = _saldo.IN_STAT;
        }, (error) => this.notice.error());
    }
    openLog(data) {
        this.fluxoCaixaService.setStateModal(data);
    }
    onDuplicate(item) {
        this.route.navigate(['./novo'], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams(item),
        });
    }
    onEdit(item) {
        this.route.navigate(['./', item.COD_LANCAMENTO], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams(item),
        });
    }
};
ControladoriaListaFluxoCaixaComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_13__["RouterService"] },
    { type: _services_fluxo_caixa_service__WEBPACK_IMPORTED_MODULE_14__["ControladoriaFluxoCaixaService"] },
    { type: _services_tipos_fluxo_caixa_service__WEBPACK_IMPORTED_MODULE_16__["ControladoriaTiposFluxoCaixaService"] },
    { type: _services_empresas_service__WEBPACK_IMPORTED_MODULE_15__["ControladoriaEmpresasService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"] },
    { type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsLocaleService"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_10__["DateService"] },
    { type: src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_11__["XlsxService"] },
    { type: src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_12__["DetailPanelService"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["BsModalService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
ControladoriaListaFluxoCaixaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'lista-fluxo-caixa',
        template: _raw_loader_fluxo_caixa_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_fluxo_caixa_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_13__["RouterService"],
        _services_fluxo_caixa_service__WEBPACK_IMPORTED_MODULE_14__["ControladoriaFluxoCaixaService"],
        _services_tipos_fluxo_caixa_service__WEBPACK_IMPORTED_MODULE_16__["ControladoriaTiposFluxoCaixaService"],
        _services_empresas_service__WEBPACK_IMPORTED_MODULE_15__["ControladoriaEmpresasService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"],
        ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsLocaleService"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_10__["DateService"],
        src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_11__["XlsxService"],
        src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_12__["DetailPanelService"],
        ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["BsModalService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
], ControladoriaListaFluxoCaixaComponent);



/***/ }),

/***/ "rxNW":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/controladoria/fluxo-caixa/modals/logs/logs.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ControladoriaFluxoCaixaLogsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControladoriaFluxoCaixaLogsComponent", function() { return ControladoriaFluxoCaixaLogsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_logs_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./logs.component.html */ "iBXP");
/* harmony import */ var _logs_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logs.component.scss */ "2S9W");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/templates/detail-panel/detal-panel.service */ "gIxL");
/* harmony import */ var _services_fluxo_caixa_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/fluxo-caixa.service */ "VUIZ");








let ControladoriaFluxoCaixaLogsComponent = class ControladoriaFluxoCaixaLogsComponent {
    constructor(modalService, service, notice, detailPanelService) {
        this.modalService = modalService;
        this.service = service;
        this.notice = notice;
        this.detailPanelService = detailPanelService;
        this.spinnerFullScreen = false;
        this.dados = [];
        this.items = [];
        this.noResult = false;
        this.dadosEmpty = false;
        this.log = {};
        this.appTitle = 'Detalhes';
        this.config = {
            animated: false,
            ignoreBackdropClick: true,
            class: 'modal-xxl',
        };
        this.showDetailPanel = false;
        this.detailPanel = 'modal';
        this.tableLogConfig = {
            hover: true,
        };
        /* Paginação */
        this.itemsPerPage = 10;
        this.currentPage = 1;
        this.begin = 0;
        this.end = 10;
    }
    ngOnInit() {
        this.openModal();
        this.onDetailPanel();
    }
    ngOnDestroy() {
        this.$serviceSubscription.unsubscribe();
        this.$serviceModalSubscription.unsubscribe();
    }
    openModal() {
        this.$serviceModalSubscription = this.service
            .getStateModal()
            .subscribe((response) => {
            console.log(response);
            this.dados = response;
            this.modalRef = this.modalService.show(this.template, this.config);
            this.showDetailPanel = false;
            this.getLog();
        });
    }
    getLog() {
        this.items = [];
        this.spinnerFullScreen = true;
        let param = {
            COD_LANCAMENTO: this.dados['COD_LANCAMENTO'],
        };
        this.service.getLog(param).subscribe((response) => {
            if (response.status === 204) {
                this.notice.notice('Não existe log registrado.');
                this.spinnerFullScreen = false;
            }
            else {
                this.items = response.body['data'];
                this.totalItems = response.body['data'].length;
                this.dadosEmpty = false;
                this.noResult = true;
                this.spinnerFullScreen = false;
            }
        });
    }
    /* Paginação */
    onPageChanged(event) {
        this.begin = (event.page - 1) * event.itemsPerPage;
        this.end = event.page * event.itemsPerPage;
    }
    /* Paginação */
    onDetailPanel() {
        this.$showDetailPanelSubscription = this.detailPanelService.config.subscribe((event) => {
            if (this.detailPanel !== 'modal')
                return;
            this.showDetailPanel = event.showing;
            if (!this.showDetailPanel)
                this.items.map((item) => (item.selected = false));
        });
        this.$serviceSubscription = this.service
            .getDetailPanel()
            .subscribe((event) => {
            this.detailPanel = event;
            this.detailPanelService.loadedFinished(false);
        });
    }
    openTab(log) {
        console.log(log);
        this.items.map((item) => (item.selected = false));
        this.log = log;
        this.log.selected = true;
        this.service.setDetailPanel('modal');
    }
};
ControladoriaFluxoCaixaLogsComponent.ctorParameters = () => [
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] },
    { type: _services_fluxo_caixa_service__WEBPACK_IMPORTED_MODULE_7__["ControladoriaFluxoCaixaService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"] },
    { type: src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_6__["DetailPanelService"] }
];
ControladoriaFluxoCaixaLogsComponent.propDecorators = {
    template: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['template', { static: false },] }]
};
ControladoriaFluxoCaixaLogsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'controladoria-fluxo-caixa-logs',
        template: _raw_loader_logs_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_logs_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
        _services_fluxo_caixa_service__WEBPACK_IMPORTED_MODULE_7__["ControladoriaFluxoCaixaService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"],
        src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_6__["DetailPanelService"]])
], ControladoriaFluxoCaixaLogsComponent);



/***/ }),

/***/ "tUsL":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/controladoria/fluxo-caixa/cadastros/bancos/bancos.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ControladoriaCadastroBancosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControladoriaCadastroBancosComponent", function() { return ControladoriaCadastroBancosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_bancos_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./bancos.component.html */ "RVJb");
/* harmony import */ var _bancos_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bancos.component.scss */ "7JJC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");
/* harmony import */ var _services_bancos_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/bancos.service */ "Qkz2");










let ControladoriaCadastroBancosComponent = class ControladoriaCadastroBancosComponent {
    constructor(activatedRoute, formBuilder, notice, bancosService, route, location, dateService) {
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.notice = notice;
        this.bancosService = bancosService;
        this.route = route;
        this.location = location;
        this.dateService = dateService;
        this.breadCrumbTree = [];
        this.spinnerFullScreen = false;
        this.loaderNavbar = false;
        this.appTitle = 'Cadastro de Bancos/Fundos';
        this.bancos = [];
        this.form = this.formBuilder.group({
            DESC_BANCO: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            COD_BANCO: [null],
            time: [new Date().getTime()],
        });
    }
    ngOnInit() {
        this.setBreadCrumb();
        this.onActivatedRoute();
    }
    setBreadCrumb() {
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: '/controladoria/home',
            },
            {
                descricao: 'Lançamento fluxo de caixa',
                routerLink: '/controladoria/fluxo-caixa',
            },
            {
                descricao: 'Bancos',
                routerLink: '/controladoria/fluxo-caixa/bancos',
            },
            {
                descricao: this.appTitle,
            },
        ];
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
    getBancos(param) {
        this.spinnerFullScreen = true;
        this.bancosService.getBancos(param).subscribe((response) => {
            this.bancos = response.body['data'];
            this.spinnerFullScreen = false;
            this.form.patchValue(response.body['data'][0]);
        });
    }
    putBancos() {
        this.spinnerFullScreen = true;
        this.bancosService.putBancos(this.getParams()).subscribe((response) => {
            if (response.status === 200)
                this.notice.success(response.body['mensagem']);
            this.location.back();
        }, (error) => this.notice.error());
    }
    onActivatedRoute() {
        const params = this.activatedRoute.snapshot.params;
        if (params.hasOwnProperty('id')) {
            this.getBancos({ COD_BANCO: params.id });
        }
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
};
ControladoriaCadastroBancosComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"] },
    { type: _services_bancos_service__WEBPACK_IMPORTED_MODULE_9__["ControladoriaBancosService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_8__["DateService"] }
];
ControladoriaCadastroBancosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'cadastro-bancos',
        template: _raw_loader_bancos_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_bancos_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"],
        _services_bancos_service__WEBPACK_IMPORTED_MODULE_9__["ControladoriaBancosService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_8__["DateService"]])
], ControladoriaCadastroBancosComponent);



/***/ }),

/***/ "v2IY":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/controladoria/fluxo-caixa/cadastros/empresas/empresas.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29udHJvbGFkb3JpYS9mbHV4by1jYWl4YS9jYWRhc3Ryb3MvZW1wcmVzYXMvZW1wcmVzYXMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "w2Ph":
/*!******************************************************************************!*\
  !*** ./src/app/modules/controladoria/fluxo-caixa/fluxo-caixa.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29udHJvbGFkb3JpYS9mbHV4by1jYWl4YS9mbHV4by1jYWl4YS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "w9vr":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/controladoria/fluxo-caixa/listas/bancos/bancos.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen [hidden]=\"!spinnerFullScreen\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar [hidden]=\"!loaderNavbar\"></loader-spinner-navbar>\r\n<app-header [appTitle]=\"appTitle\">\r\n  <button\r\n    [routerLink]=\"['./novo']\"\r\n    >\r\n    Cadastrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <!-- <advanced-filter #scrollToFilter></advanced-filter> -->\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <custom-table [config]=\"tableConfig\" [hidden] = \"!noResult\">\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n            <th class=\"text-center\" scope=\"col\" style=\"width: 60px;\"> Código Banco/Fundo </th>\r\n            <th class=\"text-center\" scope=\"col\" style=\"width: 100px;\"> Nome </th>\r\n            <th class=\"align-middle\" style=\"width:70px\"></th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let banco of bancos | slice : begin : end; let i = index\" class=\"text-center\">\r\n            <td class=\"text-center\">{{ banco.COD_BANCO }}</td>\r\n            <td class=\"text-center\">{{ banco.DESC_BANCO | uppercase }}</td>\r\n            <td class=\"align-middle\" style=\"width:70px\">\r\n              <span tooltip=\"Editar\" placement=\"left\" container=\"body\">\r\n                <button class=\"btn-icon-sm\" [routerLink]=\"['./', banco.COD_BANCO]\">\r\n                  <i class=\"fas fa-pencil-alt\"></i>\r\n                </button>\r\n              </span>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n      <div class=\"mt-3\" [hidden]=\"!noResult\">\r\n        Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\r\n        <pagination\r\n          [maxSize]=\"10\"\r\n          [totalItems]=\"totalItems\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          (pageChanged)=\"onPageChanged($event)\"\r\n          [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPage\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\">\r\n        </pagination>\r\n      </div>\r\n      <empty-result\r\n        message=\"Nenhuma informação encontrada\"\r\n        class=\"my-3\"\r\n        *ngIf=\"dadosEmpty\">\r\n      </empty-result>\r\n    </div>\r\n  </div>\r\n</app-body>\r\n");

/***/ }),

/***/ "yGtA":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/controladoria/fluxo-caixa/listas/tipos-fluxo-caixa/tipos-fluxo-caixa.component.scss ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29udHJvbGFkb3JpYS9mbHV4by1jYWl4YS9saXN0YXMvdGlwb3MtZmx1eG8tY2FpeGEvdGlwb3MtZmx1eG8tY2FpeGEuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "yvIa":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/controladoria/fluxo-caixa/listas/tipos-fluxo-caixa/tipos-fluxo-caixa.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen [hidden]=\"!spinnerFullScreen\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar [hidden]=\"!loaderNavbar\"></loader-spinner-navbar>\r\n<app-header [appTitle]=\"appTitle\">\r\n  <button\r\n    [routerLink]=\"['./novo']\" \r\n    >\r\n    Cadastrar\r\n  </button>\r\n  <button\r\n    (click)=\"onFilter()\"\r\n    >\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <!-- Início dos Filtros -->\r\n  <advanced-filter #scrollToFilter>\r\n    <form autocomplete=\"off\" [formGroup]=\"form\">\r\n      <div class=\"form-row justify-content-center\">\r\n        <div class=\"form-group col-md-4\">\r\n          <label for=\"tipo\"> Tipo de lançamento</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"true\"\r\n            [items]=\"tipos\"\r\n            [virtualScroll]=\"true\"\r\n            labelForId=\"tipo\"\r\n            bindLabel=\"DESC_TIPO\"\r\n            bindValue=\"COD_TIPO\"\r\n            placeholder=\"Selecione...\"\r\n            formControlName=\"COD_TIPO\"\r\n            (change) =\"getTiposFluxoCaixa($event)\"\r\n          >\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-md-4\">\r\n          <label for=\"tipoLancamentos\"> Tipo de lançamentos </label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"true\"\r\n            [items]=\"tiposLancamentos\"\r\n            [virtualScroll]=\"true\"\r\n            labelForId=\"tipoLancamentos\"\r\n            bindLabel=\"DESC_TIPO_LANCAMENTO\"\r\n            bindValue=\"COD_TIPO_LANCAMENTO\"\r\n            placeholder=\"Selecione...\"\r\n            formControlName=\"COD_TIPO_LANCAMENTO\"\r\n          >\r\n          </ng-select>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </advanced-filter>\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <custom-table [config]=\"tableConfig\" [hidden] = \"!noResult\">\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n            <th class=\"text-center\" scope=\"col\" style=\"width: 60px;\"> Nr. Lançamento </th>\r\n            <th class=\"text-center\" scope=\"col\" style=\"width: 100px;\"> Descrição Lançamento </th>\r\n            <th class=\"text-center\" scope=\"col\" style=\"width: 100px;\"> Tipo Lançamento </th>\r\n            <th class=\"align-middle\" style=\"width:70px\"></th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let lancamento of tiposLancamentos | slice : begin : end; let i = index\" class=\"text-center\">\r\n              <td [ngClass]=\"{\r\n                'border-success'    : lancamento.DESC_TIPO == 'Recebimento',\r\n                'border-danger'     : lancamento.DESC_TIPO == 'Pagamento'\r\n              }\"\r\n              >{{ lancamento.COD_TIPO_LANCAMENTO }}</td>\r\n            <td class=\"text-center\">{{ lancamento.DESC_TIPO_LANCAMENTO | uppercase }}</td>\r\n            <td class=\"text-center\">{{ lancamento.DESC_TIPO | uppercase }}</td>\r\n            <td class=\"align-middle\" style=\"width:70px\">\r\n              <span tooltip=\"Editar\" placement=\"left\" container=\"body\">\r\n                <button class=\"btn-icon-sm\" [routerLink]=\"['./', lancamento.COD_TIPO_LANCAMENTO]\">\r\n                  <i class=\"fas fa-pencil-alt\"></i>\r\n                </button>\r\n              </span>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n      <div class=\"mt-3\" [hidden]=\"!noResult\">\r\n        Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\r\n        <pagination\r\n          [maxSize]=\"10\"\r\n          [totalItems]=\"totalItems\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          (pageChanged)=\"onPageChanged($event)\"\r\n          [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPage\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\">\r\n        </pagination>\r\n      </div>\r\n      <empty-result\r\n        message=\"Nenhuma informação encontrada\"\r\n        class=\"my-3\"\r\n        *ngIf=\"dadosEmpty\">\r\n      </empty-result>\r\n    </div>\r\n  </div>\r\n</app-body>\r\n");

/***/ })

}]);
//# sourceMappingURL=fluxo-caixa-fluxo-caixa-module-es2015.js.map