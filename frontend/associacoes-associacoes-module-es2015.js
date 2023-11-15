(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["associacoes-associacoes-module"],{

/***/ "+F/r":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/controladoria/associacoes/pluser/tipo-despesa/lista/lista.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29udHJvbGFkb3JpYS9hc3NvY2lhY29lcy9wbHVzZXIvdGlwby1kZXNwZXNhL2xpc3RhL2xpc3RhLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "+QK4":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/controladoria/associacoes/pluser/tipo-despesa/lista/lista.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\r\n<app-header [appTitle]=\"appTitle\">\r\n  <button (click)=\"onReset()\">\r\n    Limpar\r\n  </button>\r\n  <button \r\n  [disabled]=\"form.status == 'INVALID'\"\r\n  (click)=\"onSearch()\">\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <advanced-filter>\r\n    <form [formGroup]=\"form\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"\">Código do Tipo</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            placeholder=\"DIGITE...\"\r\n            formControlName=\"CD_DESP_TIPO\"\r\n            (keyup.enter)=\"onSearch()\"\r\n          >\r\n        </div>\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"\">Descrição do Tipo</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            placeholder=\"DIGITE...\"\r\n            formControlName=\"DS_DESP_TIPO\"\r\n            (keyup.enter)=\"onSearch()\"\r\n          >\r\n        </div>\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"grupo\">Grupo</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"true\"\r\n            [items]=\"gruposDespesa\"\r\n            [virtualScroll]=\"true\"\r\n            labelForId=\"grupo\"\r\n            bindLabel=\"DS_DESP_GRUP\"\r\n            bindValue=\"CD_DESP_GRUP\"\r\n            (change)=\"onSearch()\"\r\n            formControlName=\"CD_DESP_GRUP\"\r\n            placeholder=\"SELECIONE...\"\r\n          >\r\n            <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\">\r\n              ({{item.CD_DESP_GRUP | number : '3.0-0'}}) {{item.DS_DESP_GRUP}}\r\n            </ng-template>\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"classe\">Classe</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"true\"\r\n            [items]=\"classesDespesa\"\r\n            [virtualScroll]=\"true\"\r\n            labelForId=\"grupo\"\r\n            bindLabel=\"DS_DESP_CLAS\"\r\n            bindValue=\"CD_DESP_CLAS\"\r\n            (change)=\"onSearch()\"\r\n            formControlName=\"CD_DESP_CLAS\"\r\n            placeholder=\"SELECIONE...\"\r\n          >\r\n            <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\">\r\n              ({{item.CD_DESP_CLAS | number : '3.0-0'}}) {{item.DS_DESP_CLAS}}\r\n            </ng-template>\r\n          </ng-select>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </advanced-filter>\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <subtitles\r\n        [data]=\"subtitles\"\r\n        [show]=\"!noResult\">\r\n      </subtitles>\r\n    </div>\r\n  </div>\r\n  <div  class=\"d-flex\" [hidden] = \"loading || noResult\">\r\n    <div class=\"w-100\">\r\n      <custom-table [config]=\"tableConfig\">\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n            <th class=\"text-truncate\">Código do Tipo</th>\r\n            <th class=\"text-truncate\">Descrição do Tipo</th>\r\n            <th class=\"text-truncate\" *ngIf=\"!showDetailPanel\">Código do Grupo</th>\r\n            <th class=\"text-truncate\" *ngIf=\"!showDetailPanel\">Descrição do Grupo</th>\r\n            <th class=\"text-truncate\" *ngIf=\"!showDetailPanel\">Código da Classe</th>\r\n            <th class=\"text-truncate\" *ngIf=\"!showDetailPanel\">Descrição da Classe</th>\r\n            <th></th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>  \r\n          <tr\r\n            *ngFor=\"let item of tiposDespesa | slice : begin : end; let i = index\"\r\n            [ngClass]=\"{'table-active': item.ACTI == true}\"\r\n          >\r\n            <td [ngClass]=\"item.IN_STAT == 1 ? 'border-success' : 'border-danger'\">{{ item.CD_DESP_TIPO }}</td>\r\n            <td class=\"text-truncate\">{{ item.DS_DESP_TIPO }}</td>\r\n            <td class=\"text-truncate\" *ngIf=\"!showDetailPanel\">{{ item.CD_DESP_GRUP }}</td>\r\n            <td class=\"text-truncate\" *ngIf=\"!showDetailPanel\">{{ item.DS_DESP_GRUP }}</td>\r\n            <td class=\"text-truncate\" *ngIf=\"!showDetailPanel\">{{ item.CD_DESP_CLAS }}</td>\r\n            <td class=\"text-truncate\" *ngIf=\"!showDetailPanel\">{{ item.DS_DESP_CLAS }}</td>\r\n            <td class=\"text-truncate\">\r\n              <button\r\n                class=\"btn-icon-sm hover float-right\"\r\n                (click)=\"onViewDetails(item)\"\r\n              >\r\n                <i class=\"far fa-edit\"></i>\r\n              </button>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n      <div>\r\n        Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\r\n        <pagination\r\n          [maxSize]=\"10\"\r\n          [totalItems]=\"totalItems\"\r\n          (pageChanged)=\"onPageChanged($event)\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPage\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\">\r\n        </pagination>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-5 pr-0\" [hidden]=\"!showDetailPanel\">\r\n      <detail-panel [panelTitle]=\"detailPanelTitle\">\r\n        <controladoria-associacoes-pluser-plano-conta [setTipoDespesa]=\"tipoDespesa\"></controladoria-associacoes-pluser-plano-conta>\r\n      </detail-panel>\r\n    </div>\r\n  </div>\r\n  <div [hidden]=\"loading || !noResult\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 250px\">\r\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n  </div>\r\n</app-body>");

/***/ }),

/***/ "173J":
/*!****************************************************************************!*\
  !*** ./src/app/modules/controladoria/associacoes/associacoes.component.ts ***!
  \****************************************************************************/
/*! exports provided: ControladoriaAssociacoesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControladoriaAssociacoesComponent", function() { return ControladoriaAssociacoesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_associacoes_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./associacoes.component.html */ "Cwhs");
/* harmony import */ var _associacoes_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./associacoes.component.scss */ "ktrr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_shared_services_requests_submodulos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/requests/submodulos.service */ "KwnO");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_pipes_title_case_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/pipes/title-case.pipe */ "ciPE");









let ControladoriaAssociacoesComponent = class ControladoriaAssociacoesComponent {
    constructor(activatedRoute, subModulosService, atividadesService, pnotifyService, titleCasePipe) {
        this.activatedRoute = activatedRoute;
        this.subModulosService = subModulosService;
        this.atividadesService = atividadesService;
        this.pnotifyService = pnotifyService;
        this.titleCasePipe = titleCasePipe;
        this.loaderFullScreen = true;
        this.breadCrumbTree = [];
        this.atividades = [];
        this.appTitle = "Associações";
        this.pnotifyService.getPNotify();
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe((params) => {
            this.registrarAcesso();
            this.getSubmodulo(params['idSubModulo']);
            this.getAtividadesInternas(params['idSubModulo']);
        });
    }
    registrarAcesso() {
        this.atividadesService
            .registrarAcesso()
            .subscribe();
    }
    getSubmodulo(idSubModulo) {
        this.subModulosService
            .getSubModulo(idSubModulo)
            .subscribe((response) => {
            if (response['status'] === 200) {
                this.appName = this.titleCasePipe.transform(response['body']['nome']);
                this.setBreadCrumb(this.appName);
            }
        });
    }
    getAtividadesInternas(idSubModulo) {
        this.atividadesService.getAtividadesInternas(idSubModulo).subscribe((response) => {
            if (response['responseCode'] === 200) {
                this.atividades = response['result'];
                this.loaderFullScreen = false;
            }
            else {
                this.handleAtividadesInternasError();
            }
        }, (error) => {
            this.handleAtividadesInternasError();
        });
    }
    setBreadCrumb(nomeSubModulo) {
        this.breadCrumbTree = [
            {
                descricao: 'Controladoria',
                routerLink: '/controladoria/home'
            },
            {
                descricao: nomeSubModulo
            }
        ];
    }
    handleAtividadesInternasError() {
        this.pnotifyService.error();
        this.loaderFullScreen = false;
    }
};
ControladoriaAssociacoesComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_shared_services_requests_submodulos_service__WEBPACK_IMPORTED_MODULE_5__["SubModulosService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__["AtividadesService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"] },
    { type: src_app_shared_pipes_title_case_pipe__WEBPACK_IMPORTED_MODULE_8__["TitleCasePipe"] }
];
ControladoriaAssociacoesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'controladoria-associacoes',
        template: _raw_loader_associacoes_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_associacoes_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        src_app_shared_services_requests_submodulos_service__WEBPACK_IMPORTED_MODULE_5__["SubModulosService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__["AtividadesService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"],
        src_app_shared_pipes_title_case_pipe__WEBPACK_IMPORTED_MODULE_8__["TitleCasePipe"]])
], ControladoriaAssociacoesComponent);



/***/ }),

/***/ "2nay":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/logistica/services/softran-ideal/centro-custo-veiculo.service.ts ***!
  \******************************************************************************************/
/*! exports provided: LogisticaSoftranCentroCustoVeiculoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaSoftranCentroCustoVeiculoService", function() { return LogisticaSoftranCentroCustoVeiculoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");



let LogisticaSoftranCentroCustoVeiculoService = class LogisticaSoftranCentroCustoVeiculoService {
    constructor(http) {
        this.http = http;
        this.API = `https://crm360.monterrey.com.bo/api`;
    }
    getCentroCustoVeiculo(params) {
        return this.http.get(`${this.API}/softran-ideal/centro-custo-veiculo`, {
            params: params,
            observe: "response"
        });
    }
};
LogisticaSoftranCentroCustoVeiculoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LogisticaSoftranCentroCustoVeiculoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], LogisticaSoftranCentroCustoVeiculoService);



/***/ }),

/***/ "6Jtq":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/controladoria/associacoes/pluser/empresas/lista/lista.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29udHJvbGFkb3JpYS9hc3NvY2lhY29lcy9wbHVzZXIvZW1wcmVzYXMvbGlzdGEvbGlzdGEuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "74++":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/controladoria/associacoes/pluser/tipo-despesa/services/tipo-despesa.service.ts ***!
  \********************************************************************************************************/
/*! exports provided: ControladoriaAssociacoesPluserTipoDespesaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControladoriaAssociacoesPluserTipoDespesaService", function() { return ControladoriaAssociacoesPluserTipoDespesaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");




let ControladoriaAssociacoesPluserTipoDespesaService = class ControladoriaAssociacoesPluserTipoDespesaService {
    constructor(http) {
        this.http = http;
        this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API;
    }
    getTipoDespesa(params) {
        return this.http.get(`${this.API}/tid-software/tipo-despesa`, {
            params: params,
            observe: "response"
        });
    }
    getGrupoDespesa(params) {
        return this.http.get(`${this.API}/tid-software/grupo-despesa`, {
            params: params,
            observe: "response"
        });
    }
    getClasseDespesa(params) {
        return this.http.get(`${this.API}/tid-software/classe-despesa`, {
            params: params,
            observe: "response"
        });
    }
    getAssociacoes(params) {
        return this.http.get(`${this.API}/controladoria/pluser/associacoes/tid-tipo-despesa/tms-plano-conta`, {
            params: params,
            observe: "response"
        });
    }
    postAssociacao(params) {
        return this.http.post(`${this.API}/controladoria/pluser/associacoes/tid-tipo-despesa/tms-plano-conta`, params, {
            observe: "response"
        });
    }
};
ControladoriaAssociacoesPluserTipoDespesaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ControladoriaAssociacoesPluserTipoDespesaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ControladoriaAssociacoesPluserTipoDespesaService);



/***/ }),

/***/ "7WlL":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/controladoria/associacoes/pluser/tipo-despesa/plano-conta/plano-conta.component.html ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"form\">\r\n  <div\r\n    class=\"input-group mb-3\"\r\n  >\r\n    <input\r\n      type=\"text\"\r\n      class=\"form-control\"\r\n      placeholder=\"DIGITE...\"\r\n      formControlName=\"search\"\r\n      (keyup.enter)=\"onFilter()\" \r\n    >\r\n    <div\r\n      class=\"input-group-append hover\"\r\n      (click)=\"onFilter()\"  \r\n    >\r\n      <span class=\"input-group-text\">\r\n        <i class=\"fas fa-search\"></i>\r\n      </span>\r\n    </div>\r\n  </div>\r\n</form>\r\n<div [hidden]=\"loading || noResult\">\r\n  <custom-table>\r\n    <ng-template #thead let-thead>\r\n      <tr>\r\n        <th></th>\r\n        <th>Código</th>\r\n        <th>Descrição</th>\r\n        <th></th>\r\n      </tr>\r\n    </ng-template>\r\n    <ng-template #tbody let-tbody>\r\n      <tr *ngFor=\"let item of planosConta | slice : begin : end; let index = index;\">\r\n        <td>\r\n          <div\r\n            class=\"custom-control custom-checkbox\">\r\n            <input\r\n              type=\"checkbox\"\r\n              class=\"custom-control-input hover\"\r\n              [id]=\"'customCheck' + index\"\r\n              [checked]=\"item.CHEC\"\r\n            >\r\n            <label\r\n              class=\"custom-control-label hover\"\r\n              [for]=\"'customCheck' + index\"\r\n              (click)=\"postAssociacoes(item)\"\r\n            ></label>\r\n          </div>\r\n        </td>\r\n        <td>{{ item.CD_PLAN_CONT }}</td>\r\n        <td>{{ item.DS_PLAN_CONT }}</td>\r\n        <td>\r\n          <div\r\n            class=\"spinner-border text-primary spinner-border-sm\"\r\n            role=\"status\"\r\n            *ngIf=\"item.LOAD\"\r\n          >\r\n            <span class=\"sr-only\">Loading...</span>\r\n          </div>\r\n        </td>\r\n      </tr>\r\n    </ng-template>\r\n  </custom-table>\r\n  <div>\r\n    Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\r\n    <pagination\r\n      [maxSize]=\"5\"\r\n      [totalItems]=\"totalItems\"\r\n      (pageChanged)=\"onPageChanged($event)\"\r\n      [(itemsPerPage)]=\"itemsPerPage\"\r\n      [boundaryLinks]=\"true\"\r\n      [(ngModel)]=\"currentPage\"\r\n      previousText=\"&lsaquo;\"\r\n      nextText=\"&rsaquo;\"\r\n      firstText=\"&laquo;\"\r\n      lastText=\"&raquo;\">\r\n    </pagination>\r\n  </div>\r\n</div>\r\n<div [hidden]=\"loading || !noResult\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 250px\">\r\n  <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n</div>\r\n<div\r\n  class=\"spinner-border text-primary\"\r\n  role=\"status\"\r\n  *ngIf=\"loading\"\r\n>\r\n  <span class=\"sr-only\">Loading...</span>\r\n</div>");

/***/ }),

/***/ "7nrg":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/controladoria/associacoes/pluser/empresas/centro-custo/centro-custo.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"form\">\r\n  <div\r\n    class=\"input-group mb-3\"\r\n  >\r\n    <input\r\n      type=\"text\"\r\n      class=\"form-control\"\r\n      placeholder=\"DIGITE...\"\r\n      formControlName=\"search\"\r\n      (keyup.enter)=\"onFilter()\" \r\n    >\r\n    <div\r\n      class=\"input-group-append hover\"\r\n      (click)=\"onFilter()\"  \r\n    >\r\n      <span class=\"input-group-text\">\r\n        <i class=\"fas fa-search\"></i>\r\n      </span>\r\n    </div>\r\n  </div>\r\n</form>\r\n<div [hidden]=\"loading || noResult\">\r\n  <custom-table>\r\n    <ng-template #thead let-thead>\r\n      <tr>\r\n        <th></th>\r\n        <th>Código</th>\r\n        <th>Descrição</th>\r\n        <th></th>\r\n      </tr>\r\n    </ng-template>\r\n    <ng-template #tbody let-tbody>\r\n      <tr *ngFor=\"let item of centroCustoVeiculo | slice : begin : end; let index = index;\">\r\n        <td>\r\n          <div\r\n            class=\"custom-control custom-checkbox\">\r\n            <input\r\n              type=\"checkbox\"\r\n              class=\"custom-control-input hover\"\r\n              [id]=\"'customCheck' + index\"\r\n              [checked]=\"item?.CHEC\"\r\n            >\r\n            <label\r\n              class=\"custom-control-label hover\"\r\n              [for]=\"'customCheck' + index\"\r\n              (click)=\"postAssociacoes(item)\"\r\n            ></label>\r\n          </div>\r\n        </td>\r\n        <td>{{ item.CD_CENT_CUST_VEIC }}</td>\r\n        <td>{{ item.DS_CENT_CUST_VEIC }}</td>\r\n        <td>\r\n          <div\r\n            class=\"spinner-border text-primary spinner-border-sm\"\r\n            role=\"status\"\r\n            *ngIf=\"item.LOAD\"\r\n          >\r\n            <span class=\"sr-only\">Loading...</span>\r\n          </div>\r\n        </td>\r\n      </tr>\r\n    </ng-template>\r\n  </custom-table>\r\n  <div>\r\n    Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\r\n    <pagination\r\n      [maxSize]=\"5\"\r\n      [totalItems]=\"totalItems\"\r\n      (pageChanged)=\"onPageChanged($event)\"\r\n      [(itemsPerPage)]=\"itemsPerPage\"\r\n      [boundaryLinks]=\"true\"\r\n      [(ngModel)]=\"currentPage\"\r\n      previousText=\"&lsaquo;\"\r\n      nextText=\"&rsaquo;\"\r\n      firstText=\"&laquo;\"\r\n      lastText=\"&raquo;\">\r\n    </pagination>\r\n  </div>\r\n</div>\r\n<div [hidden]=\"loading || !noResult\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 250px\">\r\n  <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n</div>\r\n<div\r\n  class=\"spinner-border text-primary\"\r\n  role=\"status\"\r\n  *ngIf=\"loading\"\r\n>\r\n  <span class=\"sr-only\">Loading...</span>\r\n</div>");

/***/ }),

/***/ "9Shi":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/controladoria/associacoes/pluser/tipo-despesa/lista/lista.component.ts ***!
  \************************************************************************************************/
/*! exports provided: ControladoriaAssociacoesPluserTipoDespesaListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControladoriaAssociacoesPluserTipoDespesaListaComponent", function() { return ControladoriaAssociacoesPluserTipoDespesaListaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lista.component.html */ "+QK4");
/* harmony import */ var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lista.component.scss */ "+F/r");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/templates/detail-panel/detal-panel.service */ "gIxL");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var _services_tipo_despesa_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/tipo-despesa.service */ "74++");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ "kU1M");



//angular



//services





//ngx



let ControladoriaAssociacoesPluserTipoDespesaListaComponent = class ControladoriaAssociacoesPluserTipoDespesaListaComponent {
    constructor(formBuilder, activatedRoute, route, routerService, localeService, dateService, atividadesService, pnotify, service, detailPanelService) {
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.route = route;
        this.routerService = routerService;
        this.localeService = localeService;
        this.dateService = dateService;
        this.atividadesService = atividadesService;
        this.pnotify = pnotify;
        this.service = service;
        this.detailPanelService = detailPanelService;
        this.loading = true;
        this.loadingNavBar = false;
        this.noResult = false;
        this.appTitle = "TID(Tipo de despesa) x TMS(Plano de contas)";
        this.breadCrumbTree = [];
        this.showAdvancedFilter = true;
        this.tiposDespesa = [];
        this.tipoDespesa = {};
        this.gruposDespesa = [];
        this.classesDespesa = [];
        /* Pagination */
        this.itemsPerPage = 25;
        this.currentPage = 1;
        this.totalItems = 0;
        this.begin = 0;
        this.end = this.itemsPerPage;
        /* Pagination */
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
        this.tableConfig = {
            subtitleBorder: true,
            isFixed: true
        };
        this.detailPanelTitle = "Detalhes";
    }
    ngOnInit() {
        this.onFormBuilder();
        this.registraAcesso();
        this.setBreadCrumb();
        this.onActivatedRoute();
        this.onDetailPanelEmitter();
        this.getGrupoDespesa();
        this.getClasseDespesa();
    }
    ngOnDestroy() {
        this.$activatedRouteSubscription.unsubscribe();
    }
    onActivatedRoute() {
        this.$activatedRouteSubscription = this.activatedRoute.queryParams
            .subscribe((response) => {
            let _response = this.routerService.getBase64UrlParams(response);
            if (Object.keys(_response).length > 0)
                this.form.patchValue(_response);
            this.getTipoDespesa(this.getParams());
        });
    }
    onFormBuilder() {
        this.form = this.formBuilder.group({
            CD_DESP_TIPO: [null],
            DS_DESP_TIPO: [null],
            CD_DESP_GRUP: [null],
            DS_DESP_GRUP: [null],
            CD_DESP_CLAS: [null],
            DS_DESP_CLAS: [null],
            TIME: [(new Date()).getTime()]
        });
    }
    registraAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
    }
    setBreadCrumb() {
        this.breadCrumbTree = [
            {
                descricao: 'Controladoria'
            },
            {
                descricao: 'Associações',
                routerLink: './../'
            },
            {
                descricao: this.appTitle
            }
        ];
    }
    getTipoDespesa(params) {
        if (!this.loading)
            this.loadingNavBar = true;
        this.service
            .getTipoDespesa(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(() => {
            this.loading = false;
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.tiposDespesa = response.body["data"];
                this.totalItems = this.tiposDespesa.length;
                this.noResult = false;
            }
            else {
                this.tiposDespesa = [];
                this.noResult = true;
                this.pnotify.notice("Nenhum registro localizado.");
            }
        }, (error) => {
            this.tiposDespesa = [];
            this.noResult = true;
            this.pnotify.error();
        });
    }
    getGrupoDespesa(params) {
        this.service
            .getGrupoDespesa(params)
            .subscribe((response) => {
            if (response.status === 200) {
                this.gruposDespesa = response.body["data"];
            }
            else {
                this.gruposDespesa = [];
            }
        }, (error) => {
            this.gruposDespesa = [];
        });
    }
    getClasseDespesa(params) {
        this.service
            .getClasseDespesa(params)
            .subscribe((response) => {
            if (response.status === 200) {
                this.classesDespesa = response.body["data"];
            }
            else {
                this.classesDespesa = [];
            }
        }, (error) => {
            this.classesDespesa = [];
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
    onSearch() {
        this.form.get("TIME").setValue((new Date()).getTime());
        this.showDetailPanel = false;
        this.route.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams(this.getParams())
        });
    }
    /* Paginação */
    onPageChanged($event) {
        this.begin = ($event.page - 1) * this.itemsPerPage;
        this.end = this.begin + this.itemsPerPage;
    }
    /* Paginação */
    onViewDetails(tipoDespesa) {
        this.tiposDespesa.map(item => {
            item["ACTI"] = item.CD_DESP_TIPO === tipoDespesa.CD_DESP_TIPO ? true : false;
        });
        this.tipoDespesa = tipoDespesa;
        this.detailPanelTitle = "(" + tipoDespesa.CD_DESP_TIPO + ") " + tipoDespesa.DS_DESP_TIPO;
    }
    onDetailPanelEmitter() {
        this.$detailPanelSubscription = this.detailPanelService.config.subscribe((event) => {
            this.showDetailPanel = event.showing;
            if (!event.showing)
                this.tiposDespesa.map(item => item["ACTI"] = false);
        });
    }
    onReset() {
        this.form.reset();
    }
};
ControladoriaAssociacoesPluserTipoDespesaListaComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_6__["RouterService"] },
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_11__["BsLocaleService"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_7__["DateService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"] },
    { type: _services_tipo_despesa_service__WEBPACK_IMPORTED_MODULE_12__["ControladoriaAssociacoesPluserTipoDespesaService"] },
    { type: src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_10__["DetailPanelService"] }
];
ControladoriaAssociacoesPluserTipoDespesaListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_6__["RouterService"],
        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_11__["BsLocaleService"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_7__["DateService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"],
        _services_tipo_despesa_service__WEBPACK_IMPORTED_MODULE_12__["ControladoriaAssociacoesPluserTipoDespesaService"],
        src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_10__["DetailPanelService"]])
], ControladoriaAssociacoesPluserTipoDespesaListaComponent);



/***/ }),

/***/ "B7YH":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/controladoria/associacoes/pluser/empresas/services/empresas.service.ts ***!
  \************************************************************************************************/
/*! exports provided: ControladoriaAssociacoesPluserCentroCustoEmpresasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControladoriaAssociacoesPluserCentroCustoEmpresasService", function() { return ControladoriaAssociacoesPluserCentroCustoEmpresasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");




let ControladoriaAssociacoesPluserCentroCustoEmpresasService = class ControladoriaAssociacoesPluserCentroCustoEmpresasService {
    constructor(http) {
        this.http = http;
        this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API;
    }
    getEmpresas(params) {
        return this.http.get(`${this.API}/tid-software/empresas`, {
            params: params,
            observe: "response"
        });
    }
    getAssociacoes(params) {
        return this.http.get(`${this.API}/controladoria/pluser/associacoes/tid-empresa/tms-centro-custo-veiculo`, {
            params: params,
            observe: "response"
        });
    }
    postAssociacao(params) {
        return this.http.post(`${this.API}/controladoria/pluser/associacoes/tid-empresa/tms-centro-custo-veiculo`, params, {
            observe: "response"
        });
    }
};
ControladoriaAssociacoesPluserCentroCustoEmpresasService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ControladoriaAssociacoesPluserCentroCustoEmpresasService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ControladoriaAssociacoesPluserCentroCustoEmpresasService);



/***/ }),

/***/ "Cwhs":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/controladoria/associacoes/associacoes.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<app-header [appTitle]=\"appTitle\"></app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\r\n  <card-group text=\"Selecione uma atividade\" [list]=\"atividades\"></card-group>\r\n</app-body>");

/***/ }),

/***/ "EqvL":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/controladoria/associacoes/associacoes-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: ControladoriaAssociacoesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControladoriaAssociacoesRoutingModule", function() { return ControladoriaAssociacoesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _associacoes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./associacoes.component */ "173J");
/* harmony import */ var src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/not-found/not-found.component */ "6nXq");
/* harmony import */ var _pluser_empresas_lista_lista_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pluser/empresas/lista/lista.component */ "NS54");
/* harmony import */ var _pluser_tipo_despesa_lista_lista_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pluser/tipo-despesa/lista/lista.component */ "9Shi");

//angular


//components




const routes = [
    {
        path: 'associacoes/:idSubModulo',
        children: [
            {
                path: '',
                component: _associacoes_component__WEBPACK_IMPORTED_MODULE_3__["ControladoriaAssociacoesComponent"]
            },
            {
                path: 'tid-empresa-tms-plano-custo',
                component: _pluser_empresas_lista_lista_component__WEBPACK_IMPORTED_MODULE_5__["ControladoriaAssociacoesPluserCentroCustoEmpresasListaComponent"]
            },
            {
                path: 'tid-tipo-despesa-tms-plano-conta',
                component: _pluser_tipo_despesa_lista_lista_component__WEBPACK_IMPORTED_MODULE_6__["ControladoriaAssociacoesPluserTipoDespesaListaComponent"]
            }
        ]
    },
    {
        path: '',
        redirectTo: 'associacoes/:idSubModulo',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"],
    }
];
let ControladoriaAssociacoesRoutingModule = class ControladoriaAssociacoesRoutingModule {
};
ControladoriaAssociacoesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ControladoriaAssociacoesRoutingModule);



/***/ }),

/***/ "GkgG":
/*!*************************************************************************!*\
  !*** ./src/app/modules/controladoria/associacoes/associacoes.module.ts ***!
  \*************************************************************************/
/*! exports provided: ControladoriaAssociacoesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControladoriaAssociacoesModule", function() { return ControladoriaAssociacoesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/not-found/not-found.module */ "sCnT");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _associacoes_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./associacoes-routing.module */ "EqvL");
/* harmony import */ var _associacoes_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./associacoes.component */ "173J");
/* harmony import */ var _pluser_empresas_lista_lista_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pluser/empresas/lista/lista.component */ "NS54");
/* harmony import */ var _pluser_empresas_centro_custo_centro_custo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pluser/empresas/centro-custo/centro-custo.component */ "qMOI");
/* harmony import */ var _pluser_tipo_despesa_lista_lista_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pluser/tipo-despesa/lista/lista.component */ "9Shi");
/* harmony import */ var _pluser_tipo_despesa_plano_conta_plano_conta_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pluser/tipo-despesa/plano-conta/plano-conta.component */ "QnRa");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var ng_brazil__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-brazil */ "hTrW");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular2-text-mask */ "UVXo");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/pipes/pipes.module */ "9Xeq");



//templates




//routing

//components





//ngx

//masks




let ControladoriaAssociacoesModule = class ControladoriaAssociacoesModule {
};
ControladoriaAssociacoesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _associacoes_component__WEBPACK_IMPORTED_MODULE_8__["ControladoriaAssociacoesComponent"],
            _pluser_empresas_lista_lista_component__WEBPACK_IMPORTED_MODULE_9__["ControladoriaAssociacoesPluserCentroCustoEmpresasListaComponent"],
            _pluser_empresas_centro_custo_centro_custo_component__WEBPACK_IMPORTED_MODULE_10__["ControladoriaAssociacoesPluserEmpresasCentroCustoComponent"],
            _pluser_tipo_despesa_lista_lista_component__WEBPACK_IMPORTED_MODULE_11__["ControladoriaAssociacoesPluserTipoDespesaListaComponent"],
            _pluser_tipo_despesa_plano_conta_plano_conta_component__WEBPACK_IMPORTED_MODULE_12__["ControladoriaAssociacoesPluserTipoDespesaPlanoContaComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_16__["NgSelectModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_3__["TemplatesModule"].forRoot(),
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"].forRoot(),
            _associacoes_routing_module__WEBPACK_IMPORTED_MODULE_7__["ControladoriaAssociacoesRoutingModule"],
            src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_5__["NotFoundModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_13__["PaginationModule"],
            ng_brazil__WEBPACK_IMPORTED_MODULE_14__["NgBrazil"],
            angular2_text_mask__WEBPACK_IMPORTED_MODULE_15__["TextMaskModule"],
            src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_17__["PipesModule"]
        ]
    })
], ControladoriaAssociacoesModule);



/***/ }),

/***/ "NS54":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/controladoria/associacoes/pluser/empresas/lista/lista.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ControladoriaAssociacoesPluserCentroCustoEmpresasListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControladoriaAssociacoesPluserCentroCustoEmpresasListaComponent", function() { return ControladoriaAssociacoesPluserCentroCustoEmpresasListaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lista.component.html */ "SPQo");
/* harmony import */ var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lista.component.scss */ "6Jtq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var _services_empresas_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/empresas.service */ "B7YH");
/* harmony import */ var src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/templates/detail-panel/detal-panel.service */ "gIxL");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ng_brazil__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-brazil */ "hTrW");



//angular



//services






//ngx


//ng-brazil

let ControladoriaAssociacoesPluserCentroCustoEmpresasListaComponent = class ControladoriaAssociacoesPluserCentroCustoEmpresasListaComponent {
    constructor(formBuilder, activatedRoute, route, routerService, localeService, dateService, atividadesService, pnotify, service, detailPanelService) {
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.route = route;
        this.routerService = routerService;
        this.localeService = localeService;
        this.dateService = dateService;
        this.atividadesService = atividadesService;
        this.pnotify = pnotify;
        this.service = service;
        this.detailPanelService = detailPanelService;
        this.MASKS = ng_brazil__WEBPACK_IMPORTED_MODULE_14__["MASKS"];
        this.loading = true;
        this.loadingNavBar = false;
        this.noResult = false;
        this.appTitle = "Empresa TID x Centro de Custo do Veiculo TMS";
        this.breadCrumbTree = [];
        this.showAdvancedFilter = true;
        this.empresas = [];
        this.empresa = {};
        /* Pagination */
        this.itemsPerPage = 25;
        this.currentPage = 1;
        this.totalItems = 0;
        this.begin = 0;
        this.end = this.itemsPerPage;
        /* Pagination */
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
        this.tableConfig = {
            subtitleBorder: true
        };
        this.detailPanelTitle = "Detalhes";
    }
    ngOnInit() {
        this.onFormBuilder();
        this.registraAcesso();
        this.setBreadCrumb();
        this.onActivatedRoute();
        this.onDetailPanelEmitter();
    }
    ngOnDestroy() {
        this.$activatedRouteSubscription.unsubscribe();
    }
    onActivatedRoute() {
        this.$activatedRouteSubscription = this.activatedRoute.queryParams
            .subscribe((response) => {
            let _response = this.routerService.getBase64UrlParams(response);
            if (Object.keys(_response).length > 0)
                this.form.patchValue(_response);
            this.getEmpresas(this.getParams());
        });
    }
    onFormBuilder() {
        this.form = this.formBuilder.group({
            CD_EMPR: [null],
            DS_NOME_FANT: [null],
            DS_CNPJ: [null],
            TIME: [(new Date()).getTime()]
        });
    }
    registraAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
    }
    setBreadCrumb() {
        this.breadCrumbTree = [
            {
                descricao: 'Controladoria'
            },
            {
                descricao: 'Associações',
                routerLink: './../'
            },
            {
                descricao: this.appTitle
            }
        ];
    }
    getEmpresas(params) {
        if (!this.loading)
            this.loadingNavBar = true;
        this.service
            .getEmpresas(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(() => {
            this.loading = false;
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.empresas = response.body["data"];
                this.empresas.unshift(...[
                    {
                        "CD_EMPR": 570,
                        "DS_NOME_FANT": "DGA",
                        "IN_STAT": 1
                    },
                    {
                        "CD_EMPR": 572,
                        "DS_NOME_FANT": "DGP",
                        "IN_STAT": 1
                    }
                ]);
                this.totalItems = this.empresas.length;
                this.noResult = false;
            }
            else {
                this.empresas = [];
                this.noResult = true;
                this.pnotify.notice("Nenhum registro localizado.");
            }
        }, (error) => {
            this.empresas = [];
            this.noResult = true;
            this.pnotify.error();
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
    onSearch() {
        this.form.get("TIME").setValue((new Date()).getTime());
        this.showDetailPanel = false;
        this.route.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams(this.getParams())
        });
    }
    /* Paginação */
    onPageChanged($event) {
        this.begin = ($event.page - 1) * this.itemsPerPage;
        this.end = this.begin + this.itemsPerPage;
    }
    /* Paginação */
    onViewDetails(empresa) {
        this.empresa = empresa;
        this.detailPanelTitle = "(" + empresa["CD_EMPR"] + ") " + empresa["DS_NOME_FANT"];
        this.empresas.map(item => item["ACTI"] = item["CD_EMPR"] == empresa["CD_EMPR"] ? true : false);
    }
    onDetailPanelEmitter() {
        this.$detailPanelSubscription = this.detailPanelService.config.subscribe((event) => {
            this.showDetailPanel = event.showing;
            if (!event.showing)
                this.empresas.map(item => item["ACTI"] = false);
        });
    }
    onReset() {
        this.form.reset();
    }
};
ControladoriaAssociacoesPluserCentroCustoEmpresasListaComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_6__["RouterService"] },
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__["BsLocaleService"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_7__["DateService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"] },
    { type: _services_empresas_service__WEBPACK_IMPORTED_MODULE_10__["ControladoriaAssociacoesPluserCentroCustoEmpresasService"] },
    { type: src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_11__["DetailPanelService"] }
];
ControladoriaAssociacoesPluserCentroCustoEmpresasListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'controladoria-associacoes-pluser-empresas-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_6__["RouterService"],
        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__["BsLocaleService"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_7__["DateService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"],
        _services_empresas_service__WEBPACK_IMPORTED_MODULE_10__["ControladoriaAssociacoesPluserCentroCustoEmpresasService"],
        src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_11__["DetailPanelService"]])
], ControladoriaAssociacoesPluserCentroCustoEmpresasListaComponent);



/***/ }),

/***/ "QnRa":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/controladoria/associacoes/pluser/tipo-despesa/plano-conta/plano-conta.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: ControladoriaAssociacoesPluserTipoDespesaPlanoContaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControladoriaAssociacoesPluserTipoDespesaPlanoContaComponent", function() { return ControladoriaAssociacoesPluserTipoDespesaPlanoContaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_plano_conta_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./plano-conta.component.html */ "7WlL");
/* harmony import */ var _plano_conta_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plano-conta.component.scss */ "WCSk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/templates/detail-panel/detal-panel.service */ "gIxL");
/* harmony import */ var _services_tipo_despesa_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/tipo-despesa.service */ "74++");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_modules_logistica_services_softran_ideal_plano_conta_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/modules/logistica/services/softran-ideal/plano-conta.service */ "uD0Z");










let ControladoriaAssociacoesPluserTipoDespesaPlanoContaComponent = class ControladoriaAssociacoesPluserTipoDespesaPlanoContaComponent {
    constructor(planoContaService, pnotify, detailPanelService, service, formBuilder) {
        this.planoContaService = planoContaService;
        this.pnotify = pnotify;
        this.detailPanelService = detailPanelService;
        this.service = service;
        this.formBuilder = formBuilder;
        this.planosConta = [];
        this.noResult = false;
        this.loading = true;
        /* Pagination */
        this.itemsPerPage = 10;
        this.currentPage = 1;
        this.totalItems = 10;
        this.begin = 0;
        this.end = this.itemsPerPage;
    }
    set setTipoDespesa(tipoDespesa) {
        if (Object.keys(tipoDespesa).length === 0)
            return;
        this.tipoDespesa = tipoDespesa;
        this.onViewDetails();
    }
    ;
    ngOnInit() {
        this.onFormBuilder();
        this.getPlanoConta({ ORDE_BY: "DS_PLAN_CONT" });
    }
    onFormBuilder() {
        this.form = this.formBuilder.group({
            search: [null]
        });
    }
    getPlanoConta(params) {
        this.loading = true;
        params = Object.assign(Object.assign({}, params), { "CD_PLAN_CONT_TIPO": 4 });
        this.planoContaService
            .getPlanoConta(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(() => {
            this.begin = 0;
            this.end = 10;
            this.currentPage = 1;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.planosConta = response.body["data"];
                this.totalItems = this.planosConta.length;
                if (this.tipoDespesa)
                    this.getAssociacoes({ CD_REFE: this.tipoDespesa.CD_DESP_TIPO, IN_STAT: '1' });
                else
                    this.loading = false;
                this.noResult = false;
            }
            else {
                this.planosConta = [];
                this.noResult = true;
            }
        }, (error) => {
            this.planosConta = [];
            this.noResult = true;
            this.pnotify.error();
        });
    }
    getAssociacoes(params) {
        this.service
            .getAssociacoes(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(() => {
            this.loading = false;
        }))
            .subscribe((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (response.status !== 200) {
                this.planosConta.map(item => item["CHEC"] = false);
                return;
            }
            const associacoes = response.body["data"];
            let associacoesIds = [];
            const promise = associacoes
                .filter((associacao) => associacao.IN_STAT == '1')
                .map((associacao) => associacoesIds.push(associacao.CD_ASSO));
            yield Promise
                .all(promise)
                .then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.planosConta
                    .map(item => {
                    item["CHEC"] = associacoesIds.includes(item.CD_PLAN_CONT);
                });
            }))
                .catch(() => {
                this.planosConta.map(item => item["CHEC"] = false);
            });
        }), (error) => {
            this.planosConta.map(item => item["CHEC"] = false);
            this.pnotify.error();
        });
    }
    postAssociacoes(item) {
        item["LOAD"] = true;
        //item["CHEC"] = !item["CHEC"];
        const _params = {
            CD_ASSO: item.CD_PLAN_CONT,
            CD_REFE: this.tipoDespesa["CD_DESP"],
            IN_STAT: item["CHEC"] ? '0' : '1',
            ID_INTE_PLUS_DPAR_TIPO_ASSO: 1
        };
        this.service
            .postAssociacao(_params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(() => {
            item["LOAD"] = false;
        }))
            .subscribe(response => {
            this.pnotify.success();
            this.getAssociacoes({ CD_REFE: this.tipoDespesa.CD_DESP_TIPO, IN_STAT: '1' });
        }, error => {
            try {
                this.pnotify.error(error.error.message);
            }
            catch (error) {
                this.pnotify.error();
            }
        });
    }
    onViewDetails() {
        this.detailPanelService.show();
        this.detailPanelService.loadedFinished(false);
        this.getAssociacoes({ CD_REFE: this.tipoDespesa.CD_DESP_TIPO, IN_STAT: '1' });
        this.loading = true;
    }
    onPageChanged($event) {
        this.begin = ($event.page - 1) * this.itemsPerPage;
        this.end = this.begin + this.itemsPerPage;
    }
    onFilter() {
        var _a;
        let _value = (_a = this.form.get("search").value) !== null && _a !== void 0 ? _a : '';
        let _params = { ORDE_BY: "DS_PLAN_CONT" };
        if (Number.isInteger(_value)) {
            _params["CD_PLAN_CONT"] = _value;
        }
        else {
            _params["DS_PLAN_CONT"] = _value;
        }
        this.getPlanoConta(_params);
    }
};
ControladoriaAssociacoesPluserTipoDespesaPlanoContaComponent.ctorParameters = () => [
    { type: src_app_modules_logistica_services_softran_ideal_plano_conta_service__WEBPACK_IMPORTED_MODULE_9__["LogisticaSofranIdealPlanoContaService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"] },
    { type: src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_6__["DetailPanelService"] },
    { type: _services_tipo_despesa_service__WEBPACK_IMPORTED_MODULE_7__["ControladoriaAssociacoesPluserTipoDespesaService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
ControladoriaAssociacoesPluserTipoDespesaPlanoContaComponent.propDecorators = {
    setTipoDespesa: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ControladoriaAssociacoesPluserTipoDespesaPlanoContaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'controladoria-associacoes-pluser-plano-conta',
        template: _raw_loader_plano_conta_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_plano_conta_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_modules_logistica_services_softran_ideal_plano_conta_service__WEBPACK_IMPORTED_MODULE_9__["LogisticaSofranIdealPlanoContaService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"],
        src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_6__["DetailPanelService"],
        _services_tipo_despesa_service__WEBPACK_IMPORTED_MODULE_7__["ControladoriaAssociacoesPluserTipoDespesaService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
], ControladoriaAssociacoesPluserTipoDespesaPlanoContaComponent);



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

/***/ "SPQo":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/controladoria/associacoes/pluser/empresas/lista/lista.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\r\n<app-header [appTitle]=\"appTitle\">\r\n  <button (click)=\"onReset()\">\r\n    Limpar\r\n  </button>\r\n  <button \r\n  [disabled]=\"form.status == 'INVALID'\"\r\n  (click)=\"onSearch()\">\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <advanced-filter>\r\n    <form [formGroup]=\"form\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"\">Código</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            placeholder=\"DIGITE...\"\r\n            formControlName=\"CD_EMPR\"\r\n            (keyup.enter)=\"onSearch()\"\r\n          >\r\n        </div>\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"\">Descrição</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            placeholder=\"DIGITE...\"\r\n            formControlName=\"DS_NOME_FANT\"\r\n            (keyup.enter)=\"onSearch()\"\r\n          >\r\n        </div>\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"\">CNPJ</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            [textMask]=\"{mask: MASKS.cnpj.textMask}\"\r\n            placeholder=\"DIGITE...\"\r\n            formControlName=\"DS_CNPJ\"\r\n            (keyup.enter)=\"onSearch()\"\r\n          >\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </advanced-filter>\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <subtitles\r\n        [data]=\"subtitles\"\r\n        [show]=\"!noResult\">\r\n      </subtitles>\r\n    </div>\r\n  </div>\r\n  <div  class=\"d-flex\" [hidden] = \"loading || noResult\">\r\n    <div class=\"w-100\">\r\n      <custom-table [config]=\"tableConfig\">\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n            <th>Código</th>\r\n            <th>Descrição</th>\r\n            <th>CNPJ</th>\r\n            <th>Endereço</th>\r\n            <th></th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>  \r\n          <tr\r\n            *ngFor=\"let item of empresas | slice : begin : end; let i = index\"\r\n            [ngClass]=\"{'table-active': item.ACTI == true}\"  \r\n          >\r\n            <td [ngClass]=\"item.IN_STAT == 1 ? 'border-success' : 'border-danger'\">{{ item.CD_EMPR }}</td>\r\n            <td>{{ item.DS_NOME_FANT | hifen}}</td>\r\n            <td>{{ item.DS_CNPJ | cnpj | hifen}}</td>\r\n            <td>{{ item.DS_ENDE | hifen}}</td>\r\n            <td>\r\n              <button\r\n                class=\"btn-icon-sm hover\"\r\n                (click)=\"onViewDetails(item)\"\r\n              >\r\n                <i class=\"far fa-edit\"></i>\r\n              </button>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n      <div>\r\n        Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\r\n        <pagination\r\n          [maxSize]=\"10\"\r\n          [totalItems]=\"totalItems\"\r\n          (pageChanged)=\"onPageChanged($event)\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPage\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\">\r\n        </pagination>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-5 pr-0\" [hidden]=\"!showDetailPanel\">\r\n      <detail-panel [panelTitle]=\"detailPanelTitle\">\r\n        <controladoria-associacoes-pluser-empresas-centro-custo [setEmpresa]=\"empresa\"></controladoria-associacoes-pluser-empresas-centro-custo>\r\n      </detail-panel>\r\n    </div>\r\n  </div>\r\n  <div [hidden]=\"loading || !noResult\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 250px\">\r\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n  </div>\r\n</app-body>");

/***/ }),

/***/ "WCSk":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/controladoria/associacoes/pluser/tipo-despesa/plano-conta/plano-conta.component.scss ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29udHJvbGFkb3JpYS9hc3NvY2lhY29lcy9wbHVzZXIvdGlwby1kZXNwZXNhL3BsYW5vLWNvbnRhL3BsYW5vLWNvbnRhLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "ejuI":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/controladoria/associacoes/pluser/empresas/centro-custo/centro-custo.component.scss ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29udHJvbGFkb3JpYS9hc3NvY2lhY29lcy9wbHVzZXIvZW1wcmVzYXMvY2VudHJvLWN1c3RvL2NlbnRyby1jdXN0by5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "ktrr":
/*!******************************************************************************!*\
  !*** ./src/app/modules/controladoria/associacoes/associacoes.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29udHJvbGFkb3JpYS9hc3NvY2lhY29lcy9hc3NvY2lhY29lcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "qMOI":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/controladoria/associacoes/pluser/empresas/centro-custo/centro-custo.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ControladoriaAssociacoesPluserEmpresasCentroCustoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControladoriaAssociacoesPluserEmpresasCentroCustoComponent", function() { return ControladoriaAssociacoesPluserEmpresasCentroCustoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_centro_custo_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./centro-custo.component.html */ "7nrg");
/* harmony import */ var _centro_custo_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./centro-custo.component.scss */ "ejuI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/templates/detail-panel/detal-panel.service */ "gIxL");
/* harmony import */ var _services_empresas_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/empresas.service */ "B7YH");
/* harmony import */ var src_app_modules_logistica_services_softran_ideal_centro_custo_veiculo_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modules/logistica/services/softran-ideal/centro-custo-veiculo.service */ "2nay");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "kU1M");










let ControladoriaAssociacoesPluserEmpresasCentroCustoComponent = class ControladoriaAssociacoesPluserEmpresasCentroCustoComponent {
    constructor(softranCentroCustoVeiculoService, pnotify, detailPanelService, service, formBuilder) {
        this.softranCentroCustoVeiculoService = softranCentroCustoVeiculoService;
        this.pnotify = pnotify;
        this.detailPanelService = detailPanelService;
        this.service = service;
        this.formBuilder = formBuilder;
        this.centroCustoVeiculo = [];
        this.noResult = false;
        this.loading = true;
        /* Pagination */
        this.itemsPerPage = 10;
        this.currentPage = 1;
        this.totalItems = 10;
        this.begin = 0;
        this.end = this.itemsPerPage;
    }
    set setEmpresa(empresa) {
        if (Object.keys(empresa).length === 0)
            return;
        this.empresa = empresa;
        this.onViewDetails();
    }
    ;
    ngOnInit() {
        this.onFormBuilder();
        this.getCentroCustoVeiculo({ ORDE_BY: "DS_CENT_CUST_VEIC", IN_PAGI: "0" });
    }
    onFormBuilder() {
        this.form = this.formBuilder.group({
            search: [null]
        });
    }
    getCentroCustoVeiculo(params) {
        this.loading = true;
        this.softranCentroCustoVeiculoService
            .getCentroCustoVeiculo(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(() => {
            this.begin = 0;
            this.end = 10;
            this.currentPage = 1;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.centroCustoVeiculo = response.body["data"];
                this.totalItems = this.centroCustoVeiculo.length;
                if (this.empresa)
                    this.getAssociacoes({ CD_REFE: this.empresa.CD_EMPR, IN_STAT: '1' });
                else
                    this.loading = false;
                this.noResult = false;
            }
            else {
                this.centroCustoVeiculo = [];
                this.noResult = true;
                this.loading = false;
            }
        }, (error) => {
            this.centroCustoVeiculo = [];
            this.noResult = true;
            this.loading = false;
            this.pnotify.error();
        });
    }
    getAssociacoes(params) {
        this.service
            .getAssociacoes(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(() => {
            this.loading = false;
        }))
            .subscribe((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (response.status !== 200) {
                this.centroCustoVeiculo.map(item => item["CHEC"] = false);
                return;
            }
            const associacoes = response.body["data"];
            let associacoesIds = [];
            const promise = associacoes
                .filter((associacao) => associacao.IN_STAT == '1')
                .map((associacao) => associacoesIds.push(associacao.CD_ASSO));
            console.log(associacoesIds);
            console.log(this.centroCustoVeiculo);
            yield Promise
                .all(promise)
                .then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.centroCustoVeiculo
                    .map(item => {
                    item["CHEC"] = associacoesIds.includes(item.CD_CENT_CUST_VEIC);
                });
            }))
                .catch(() => {
                this.centroCustoVeiculo.map(item => item["CHEC"] = false);
            });
        }), (error) => {
            this.centroCustoVeiculo.map(item => item["CHEC"] = false);
            this.pnotify.error();
        });
    }
    postAssociacoes(item) {
        item["LOAD"] = true;
        //item["CHEC"] = !item["CHEC"];
        const _params = {
            CD_ASSO: item.CD_CENT_CUST_VEIC,
            CD_REFE: this.empresa["CD_EMPR"],
            IN_STAT: item["CHEC"] ? '0' : '1',
            ID_INTE_PLUS_DPAR_TIPO_ASSO: 1
        };
        this.service
            .postAssociacao(_params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(() => {
            item["LOAD"] = false;
        }))
            .subscribe(response => {
            this.pnotify.success();
            this.getAssociacoes({ CD_REFE: this.empresa.CD_EMPR, IN_STAT: '1' });
        }, error => {
            try {
                this.pnotify.error(error.error.message);
            }
            catch (error) {
                this.pnotify.error();
            }
        });
    }
    onViewDetails() {
        this.detailPanelService.show();
        this.detailPanelService.loadedFinished(false);
        this.getAssociacoes({ CD_REFE: this.empresa.CD_EMPR, IN_STAT: "1" });
        this.loading = true;
    }
    onPageChanged($event) {
        this.begin = ($event.page - 1) * this.itemsPerPage;
        this.end = this.begin + this.itemsPerPage;
    }
    onFilter() {
        var _a;
        let _value = (_a = this.form.get("search").value) !== null && _a !== void 0 ? _a : "";
        let _params = { ORDE_BY: "DS_CENT_CUST_VEIC", IN_PAGI: "0" };
        if (Number.isInteger(_value)) {
            _params["CD_CENT_CUST_VEIC"] = _value;
        }
        else {
            _params["DS_CENT_CUST_VEIC"] = _value;
        }
        this.getCentroCustoVeiculo(_params);
    }
};
ControladoriaAssociacoesPluserEmpresasCentroCustoComponent.ctorParameters = () => [
    { type: src_app_modules_logistica_services_softran_ideal_centro_custo_veiculo_service__WEBPACK_IMPORTED_MODULE_8__["LogisticaSoftranCentroCustoVeiculoService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"] },
    { type: src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_6__["DetailPanelService"] },
    { type: _services_empresas_service__WEBPACK_IMPORTED_MODULE_7__["ControladoriaAssociacoesPluserCentroCustoEmpresasService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
ControladoriaAssociacoesPluserEmpresasCentroCustoComponent.propDecorators = {
    setEmpresa: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ControladoriaAssociacoesPluserEmpresasCentroCustoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'controladoria-associacoes-pluser-empresas-centro-custo',
        template: _raw_loader_centro_custo_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_centro_custo_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_modules_logistica_services_softran_ideal_centro_custo_veiculo_service__WEBPACK_IMPORTED_MODULE_8__["LogisticaSoftranCentroCustoVeiculoService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"],
        src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_6__["DetailPanelService"],
        _services_empresas_service__WEBPACK_IMPORTED_MODULE_7__["ControladoriaAssociacoesPluserCentroCustoEmpresasService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
], ControladoriaAssociacoesPluserEmpresasCentroCustoComponent);



/***/ }),

/***/ "uD0Z":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/logistica/services/softran-ideal/plano-conta.service.ts ***!
  \*********************************************************************************/
/*! exports provided: LogisticaSofranIdealPlanoContaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaSofranIdealPlanoContaService", function() { return LogisticaSofranIdealPlanoContaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");



let LogisticaSofranIdealPlanoContaService = class LogisticaSofranIdealPlanoContaService {
    constructor(http) {
        this.http = http;
        this.API = `https://crm360.monterrey.com.bo/api`;
    }
    getPlanoConta(params) {
        return this.http.get(`${this.API}/softran-ideal/plano-conta`, {
            params: params,
            observe: "response"
        });
    }
};
LogisticaSofranIdealPlanoContaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LogisticaSofranIdealPlanoContaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], LogisticaSofranIdealPlanoContaService);



/***/ })

}]);
//# sourceMappingURL=associacoes-associacoes-module-es2015.js.map