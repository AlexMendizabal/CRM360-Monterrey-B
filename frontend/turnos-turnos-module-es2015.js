(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["turnos-turnos-module"],{

/***/ "6/+z":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/logistica/cadastros/turnos/turnos-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: LogisticaTurnosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaTurnosRoutingModule", function() { return LogisticaTurnosRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/not-found/not-found.component */ "6nXq");
/* harmony import */ var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cadastro/cadastro.component */ "rkVY");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lista/lista.component */ "YjxE");






const routes = [
    {
        path: '',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_5__["LogisticaTurnosListaComponent"],
    },
    {
        path: 'novo',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__["LogisticaTurnosCadastroComponent"],
    },
    {
        path: ':id',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__["LogisticaTurnosCadastroComponent"],
    },
    {
        path: '**',
        component: src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"],
    },
];
let LogisticaTurnosRoutingModule = class LogisticaTurnosRoutingModule {
};
LogisticaTurnosRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LogisticaTurnosRoutingModule);



/***/ }),

/***/ "AQQP":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/logistica/cadastros/turnos/services/turnos.service.ts ***!
  \*******************************************************************************/
/*! exports provided: LogisticaTurnosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaTurnosService", function() { return LogisticaTurnosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");

//angular

// services


let LogisticaTurnosService = class LogisticaTurnosService {
    constructor(http) {
        this.http = http;
        this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API;
    }
    getTurnos(params) {
        return this.http.get(`${this.API}/logistica/turnos`, {
            params: params,
            observe: 'response',
        });
    }
    getTurno(id) {
        return this.http.get(`${this.API}/logistica/turnos/${id}`, {
            observe: 'response',
        });
    }
    postTurnos(turno) {
        return this.http.post(`${this.API}/logistica/turnos`, turno, {
            observe: 'response',
        });
    }
};
LogisticaTurnosService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
LogisticaTurnosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], LogisticaTurnosService);



/***/ }),

/***/ "DcIT":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/logistica/cadastros/turnos/cadastro/cadastro.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2NhZGFzdHJvcy90dXJub3MvY2FkYXN0cm8vY2FkYXN0cm8uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "EiXP":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/cadastros/turnos/lista/lista.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-navbar *ngIf=\"loadingNavBar\"></loader-spinner-navbar>\r\n<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n<app-header appTitle=\"Turnos\">\r\n  <button\r\n  type=\"button\"\r\n  (click)=\"onExport()\"\r\n  [disabled]=\"loadingNavBar || noResult\">\r\n  Exportar\r\n</button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onReset()\">\r\n    Limpar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    [routerLink]=\"['../novo']\">\r\n    Adicionar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onFilter()\">\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loading\">\r\n  <div class=\"row\" #scrollToFilter>\r\n    <div class=\"col\">\r\n      <advanced-filter>\r\n        <form [formGroup]=\"form\" autocomplete=\"off\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-5 pl-0\">\r\n              <label for=\"filterTurnos\">Turno</label>\r\n              <ng-select\r\n                [searchable]=\"true\"\r\n                [clearable]=\"true\"\r\n                [items]=\"filterTurnos\"\r\n                [virtualScroll]=\"true\"\r\n                placeholder=\"Selecione...\"\r\n                [loading]=\"loadingTurnos\"\r\n                labelForId=\"filterTurnos\"\r\n                bindLabel=\"DS_TURN\"\r\n                bindValue=\"UUID_LOGI_TURN\"\r\n                id=\"filterTurnos\"\r\n                formControlName=\"UUID_LOGI_TURN\">\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"form-group col-md-2 pl-0\">\r\n              <label for=\"IN_STAT\">Situação</label>\r\n              <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"false\"\r\n              [items]=\"tipos\"\r\n              [virtualScroll]=\"true\"\r\n              labelForId=\"tipo\"\r\n              bindLabel=\"nome\"\r\n              bindValue=\"cod\"\r\n              id=\"tipo\"\r\n              (change)=\"onFilter()\"\r\n              formControlName=\"IN_STAT\"\r\n              (keydown.enter)=\"onFilter()\"\r\n              placeholder=\"Selecione...\"\r\n            >\r\n            </ng-select>\r\n            </div>\r\n            <div class=\"form-group col-md-1 p-0\">\r\n              <label>Registros</label>\r\n              <select \r\n                class=\"form-control custom-select\"\r\n                formControlName=\"TT_REGI_PAGI\"\r\n                (keydown.enter)=\"onFilter()\"\r\n                (change)=\"setPageRegistros($event.target.value)\"  \r\n              >\r\n                <option value=\"10\">10</option>\r\n                <option value=\"25\">25</option>\r\n                <option value=\"50\">50</option>\r\n                <option value=\"100\">100</option>\r\n                <option value=\"250\">250</option>\r\n                <option value=\"500\">500</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </advanced-filter>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <subtitles\r\n        [data]=\"subtitles\"\r\n        [show]=\"!noResult\">\r\n      </subtitles>\r\n    </div>\r\n  </div>\r\n  <div class=\"d-flex\" [hidden] = \"loading || noResult\">\r\n    <div class=\"p-0\" [ngClass]=\"{'col': !showDetailPanel, 'col-6': showDetailPanel}\">\r\n      <div class=\"w-100\">\r\n        <custom-table  [config]=\"tableConfig\" class=\"text-center\" *ngIf=\"!noResult\">\r\n          <ng-template #thead let-thead>\r\n            <tr>\r\n              <th scope=\"col\" >Descrição</th>\r\n              <th scope=\"col\" style=\"width:120px\"></th>\r\n            </tr>\r\n          </ng-template>\r\n          <ng-template #tbody let-tbody>\r\n            <tr *ngFor=\"let turno of turnos\"  [class.table-active]=\"turno?.UUID_LOGI_TURN == turnoSelecionado?.UUID_LOGI_TURN && showDetailPanel\">\r\n              <td  [ngClass]=\"turno.IN_STAT == '1' ? 'border-success' : 'border-danger'\">\r\n              {{ turno.DS_TURN | uppercase}}\r\n              </td>\r\n              <td class=\"align-middle\" >\r\n                <span class=\"mr-3\" [tooltip]=\"turno.IN_STAT == 1 ? 'Inativar' : 'Ativar'\" placement=\"left\" container=\"body\">\r\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"changeType(turno)\">\r\n                    <i [ngClass]=\"turno.IN_STAT == '1' ? 'fas fa-toggle-on' : 'fas fa-toggle-off'\"></i>\r\n                  </button>\r\n                </span>\r\n                <span class=\"mr-3\" tooltip=\"Editar\" placement=\"left\" container=\"body\">\r\n                  <button type=\"button\" class=\"btn-icon-sm\" [routerLink]=\"['./../', turno.UUID_LOGI_TURN]\">\r\n                    <i class=\"fas fa-edit\"></i>\r\n                  </button>\r\n                </span>\r\n                <span class=\"mr-3\"  tooltip=\"Detalhes\" placement=\"left\" container=\"body\" >\r\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onDetails(turno)\">\r\n                    <i class=\"fas fa-search\"></i>                  \r\n                  </button>\r\n                </span>\r\n              </td>\r\n            </tr>\r\n          </ng-template>\r\n        </custom-table><br>\r\n      </div>\r\n      <div *ngIf=\"totalItems > itemsPerPage\">\r\n        Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\r\n        <pagination\r\n          [maxSize]=\"10\"\r\n          [totalItems]=\"totalItems\"\r\n          (pageChanged)=\"onPageChanged($event)\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPage\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\">\r\n        </pagination>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-6 pr-0\" [hidden]=\"!showDetailPanel\">\r\n      <detail-panel panelTitle=\"Detalhes\">\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-lg-6\">\r\n            <label>ID</label>\r\n            <div>{{ turnoSelecionado?.UUID_LOGI_TURN }}</div>\r\n          </div>\r\n          <div class=\"form-group col-lg-6\">\r\n            <label>Turno</label>\r\n            <div>{{ turnoSelecionado?.DS_TURN | uppercase}}</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-lg-6\">\r\n            <label>Horário Inicial</label>\r\n            <div>{{ convertMysqlTime(turnoSelecionado?.HR_INIC) | date: 'HH:mm'}}</div>\r\n          </div>\r\n          <div class=\"form-group col-lg-6\">\r\n            <label>Horário Final</label>\r\n            <div>{{ convertMysqlTime(turnoSelecionado?.HR_FINA) | date: 'HH:mm'}}</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-lg-12\">\r\n            <label>Dias da Semana</label>\r\n            <div class=\"d-flex mr-1\">\r\n              <div class=\"mr-1\">\r\n                <i [ngClass]=\"turnoSelecionado?.IN_SEGU ? 'fas fa-check-circle text-success' : 'fas fa-times-circle text-danger'\"></i>\r\n              </div>\r\n              <span>Segunda-feira</span>\r\n            </div>\r\n            <div class=\"d-flex mr-1\">\r\n              <div class=\"mr-1\">\r\n                <i [ngClass]=\"turnoSelecionado?.IN_TERC ? 'fas fa-check-circle text-success' : 'fas fa-times-circle text-danger'\"></i>\r\n              </div>\r\n              <span>Terça-feira</span>\r\n            </div>\r\n            <div class=\"d-flex mr-1\">\r\n              <div class=\"mr-1\">\r\n                <i [ngClass]=\"turnoSelecionado?.IN_QUAR ? 'fas fa-check-circle text-success' : 'fas fa-times-circle text-danger'\"></i>\r\n              </div>\r\n              <span>Quarta-feira</span>\r\n            </div>\r\n            <div class=\"d-flex mr-1\">\r\n              <div class=\"mr-1\">\r\n                <i [ngClass]=\"turnoSelecionado?.IN_QUIN ? 'fas fa-check-circle text-success' : 'fas fa-times-circle text-danger'\"></i>\r\n              </div>\r\n              <span>Quinta-feira</span>\r\n            </div>\r\n            <div class=\"d-flex mr-1\">\r\n              <div class=\"mr-1\">\r\n                <i [ngClass]=\"turnoSelecionado?.IN_SEXT ? 'fas fa-check-circle text-success' : 'fas fa-times-circle text-danger'\"></i>\r\n              </div>\r\n              <span>Sexta-feira</span>\r\n            </div>\r\n            <div class=\"d-flex mr-1\">\r\n              <div class=\"mr-1\">\r\n                <i [ngClass]=\"turnoSelecionado?.IN_SABA ? 'fas fa-check-circle text-success' : 'fas fa-times-circle text-danger'\"></i>\r\n              </div>\r\n              <span>Sábado</span>\r\n            </div>\r\n            <div class=\"d-flex mr-1\">\r\n              <div class=\"mr-1\">\r\n                <i [ngClass]=\"turnoSelecionado?.IN_DOMI ? 'fas fa-check-circle text-success' : 'fas fa-times-circle text-danger'\"></i>\r\n              </div>\r\n              <span>Domingo</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <hr>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-lg-6\">\r\n            <label *ngIf=\"!turnoSelecionado?.DT_ATUA\">Data de Cadastro</label>\r\n            <label *ngIf=\"turnoSelecionado?.DT_ATUA\">Data da Atualização</label>\r\n            <div>{{(turnoSelecionado?.DT_ATUA | date: 'dd/MM/yyyy HH:mm') || (turnoSelecionado?.DT_INCL | date: 'dd/MM/yyyy HH:mm') }}</div>\r\n          </div>\r\n          <div class=\"form-group col-lg-6\">\r\n            <label *ngIf=\"!turnoSelecionado?.DT_ATUA\">Usuário Responsável pelo Cadastro</label>\r\n            <label *ngIf=\"turnoSelecionado?.DT_ATUA\">Usuário Responsável pela Atualização</label>\r\n            <div>{{ turnoSelecionado?.NM_USUA | uppercase }}</div>\r\n          </div>\r\n        </div>\r\n        <!-- <custom-table>\r\n          <ng-template #thead let-thead>\r\n            <tr>\r\n              <th scope=\"col\" class=\"text-center\">Data</th>\r\n              <th scope=\"col\">Usuário</th>\r\n            </tr>\r\n          </ng-template>\r\n          <ng-template #tbody let-tbody>\r\n            <tr>\r\n              <td class=\"text-center\">{{(turnoSelecionado?.DT_ATUA | date: 'dd/MM/yyyy HH:mm') || (turnoSelecionado?.DT_INCL | date: 'dd/MM/yyyy HH:mm') }}</td>\r\n              <td>{{ turnoSelecionado?.NM_USUA | uppercase }}</td>\r\n            </tr>\r\n          </ng-template>\r\n        </custom-table> -->\r\n      </detail-panel>\r\n    </div>\r\n  </div>\r\n  <div [hidden]=\"loading || !noResult\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 80%\">\r\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n  </div>\r\n</app-body>");

/***/ }),

/***/ "FOez":
/*!***********************************************************************!*\
  !*** ./src/app/shared/modules/confirm-modal/confirm-modal.service.ts ***!
  \***********************************************************************/
/*! exports provided: ConfirmModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmModalService", function() { return ConfirmModalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _confirm_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confirm-modal.component */ "SMoX");



// Components

let ConfirmModalService = class ConfirmModalService {
    constructor(modalService) {
        this.modalService = modalService;
    }
    showConfirm(type, title, message, cancelTxt, okTxt) {
        const modalRef = this.modalService.show(_confirm_modal_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmModalComponent"], {
            animated: false,
            ignoreBackdropClick: true,
            keyboard: false,
            class: 'confirm'
        });
        modalRef.content.type = type;
        modalRef.content.title = title;
        modalRef.content.message = message;
        if (type === 'delete') {
            modalRef.content.messageAlerts = [
                "Se eliminará toda la información relacionada.",
                "Esta acción no se puede deshacer."
            ];
        }
        if (type === 'inactivate') {
            modalRef.content.messageAlerts = [
                'Las informacion serán inactivadas.'
            ];
        }
        if (cancelTxt) {
            modalRef.content.cancelTxt = cancelTxt;
        }
        if (okTxt) {
            modalRef.content.okTxt = okTxt;
        }
        // É uma boa prática tipar o retorno.
        // Obs.: ao tipar o retorno é possível acessar o intellisense do serviço.
        return modalRef.content.confirmResult;
    }
};
ConfirmModalService.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] }
];
ConfirmModalService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]])
], ConfirmModalService);



/***/ }),

/***/ "M12J":
/*!*********************************************************************!*\
  !*** ./src/app/modules/logistica/cadastros/turnos/turnos.module.ts ***!
  \*********************************************************************/
/*! exports provided: LogisticaTurnosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaTurnosModule", function() { return LogisticaTurnosModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/pipes/pipes.module */ "9Xeq");
/* harmony import */ var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/not-found/not-found.module */ "sCnT");
/* harmony import */ var src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/module-wrapper/module-wrapper.module */ "RoXV");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lista/lista.component */ "YjxE");
/* harmony import */ var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./cadastro/cadastro.component */ "rkVY");
/* harmony import */ var _turnos_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./turnos-routing.module */ "6/+z");















let LogisticaTurnosModule = class LogisticaTurnosModule {
};
LogisticaTurnosModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _lista_lista_component__WEBPACK_IMPORTED_MODULE_12__["LogisticaTurnosListaComponent"],
            _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_13__["LogisticaTurnosCadastroComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TabsModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TimepickerModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
            src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_8__["NotFoundModule"],
            src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_9__["ModuleWrapperModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_11__["TemplatesModule"],
            _turnos_routing_module__WEBPACK_IMPORTED_MODULE_14__["LogisticaTurnosRoutingModule"]
        ]
    })
], LogisticaTurnosModule);



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

/***/ "SOb9":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/cadastros/turnos/cadastro/cadastro.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\r\n<app-header appTitle=\"Turnos\">\r\n  <button \r\n    [disabled]=\"form.valid === false || loadingNavBar === true\"\r\n    (click)=\"postTurnos()\"\r\n    >\r\n    Salvar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <form [formGroup]=\"form\" autocomplete=\"off\">\r\n    <fieldset  class=\"col-12\">\r\n      <fieldset class=\"border rounded shadow-sm col-10 pt-2 mx-auto\">\r\n        <legend>Dados do Turno</legend>\r\n        <div class=\"form-row justify-content-center\">\r\n          <div class=\"form-group col-md-12 pl-0\">\r\n            <label for=\"DS_TURN\">Descrição</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"DS_TURN\"\r\n              formControlName=\"DS_TURN\"\r\n              placeholder=\"Digite...\"\r\n              [ngClass]=\"onFieldError('DS_TURN') + ' ' + onFieldRequired('DS_TURN')\"\r\n            />\r\n            <invalid-form-control [show]=\"onFieldInvalid('DS_TURN')\" message=\"Descrição é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row justify-content-center\">\r\n          <div class=\"form-group col-md-12\">\r\n            <div class=\"form-row justify-content-center\">\r\n              <div class=\"col-auto d-flex pr-4\">\r\n                <label class=\"my-auto mr-2\">Horário mínimo</label>\r\n                <timepicker\r\n                  [showMeridian]=\"false\"\r\n                  [showSpinners]=\"false\"\r\n                  [mousewheel]=\"true\"\r\n                  formControlName=\"HR_INIC\"\r\n                  [ngClass]=\"onFieldError('HR_INIC') + ' ' + onFieldRequired('HR_INIC')\"\r\n                  required\r\n                  >\r\n                </timepicker>\r\n              </div>\r\n              <div class=\"col-auto d-flex\">\r\n                <label class=\"my-auto mr-2\">Horário máximo</label>\r\n                <timepicker\r\n                  [showMeridian]=\"false\"\r\n                  [showSpinners]=\"false\"\r\n                  [mousewheel]=\"true\"\r\n                  formControlName=\"HR_FINA\"\r\n                  [ngClass]=\"onFieldError('HR_FINA') + ' ' + onFieldRequired('HR_FINA')\"\r\n                  >\r\n                </timepicker>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row justify-content-center\">\r\n          <div class=\"form-group mx-4\">\r\n            <div class=\"custom-control custom-checkbox my-auto\">\r\n              <input\r\n                type=\"checkbox\"\r\n                class=\"custom-control-input\"\r\n                id=\"IN_SEGU\"\r\n                formControlName=\"IN_SEGU\"\r\n                (change)=\"onDias('IN_SEGU')\">\r\n              <label class=\"custom-control-label\" for=\"IN_SEGU\"><strong>Segunda-feira</strong></label>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group mx-4\">\r\n            <div class=\"custom-control custom-checkbox my-auto\">\r\n              <input\r\n                type=\"checkbox\"\r\n                class=\"custom-control-input\"\r\n                id=\"IN_TERC\"\r\n                formControlName=\"IN_TERC\"\r\n                (change)=\"onDias('IN_TERC')\">\r\n              <label class=\"custom-control-label\" for=\"IN_TERC\"><strong>Terça-feira</strong></label>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group mx-4\">\r\n            <div class=\"custom-control custom-checkbox my-auto\">\r\n              <input\r\n                type=\"checkbox\"\r\n                class=\"custom-control-input\"\r\n                id=\"IN_QUAR\"\r\n                formControlName=\"IN_QUAR\"\r\n                (change)=\"onDias('IN_QUAR')\">\r\n              <label class=\"custom-control-label\" for=\"IN_QUAR\"><strong>Quarta-feira</strong></label>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group mx-4\">\r\n            <div class=\"custom-control custom-checkbox my-auto\">\r\n              <input\r\n                type=\"checkbox\"\r\n                class=\"custom-control-input\"\r\n                id=\"IN_QUIN\"\r\n                formControlName=\"IN_QUIN\"\r\n                (change)=\"onDias('IN_QUIN')\">\r\n              <label class=\"custom-control-label\" for=\"IN_QUIN\"><strong>Quinta-feira</strong></label>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group mx-4\">\r\n            <div class=\"custom-control custom-checkbox my-auto\">\r\n              <input\r\n                type=\"checkbox\"\r\n                class=\"custom-control-input\"\r\n                id=\"IN_SEXT\"\r\n                formControlName=\"IN_SEXT\"\r\n                (change)=\"onDias('IN_SEXT')\">\r\n              <label class=\"custom-control-label\" for=\"IN_SEXT\"><strong>Sexta-feira</strong></label>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group mx-4\">\r\n            <div class=\"custom-control custom-checkbox my-auto\">\r\n              <input\r\n                type=\"checkbox\"\r\n                class=\"custom-control-input\"\r\n                id=\"IN_SABA\"\r\n                formControlName=\"IN_SABA\"\r\n                (change)=\"onDias('IN_SABA')\">\r\n              <label class=\"custom-control-label\" for=\"IN_SABA\"><strong>Sábado</strong></label>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group mx-4\">\r\n            <div class=\"custom-control custom-checkbox my-auto\">\r\n              <input\r\n                type=\"checkbox\"\r\n                class=\"custom-control-input\"\r\n                id=\"IN_DOMI\"\r\n                formControlName=\"IN_DOMI\"\r\n                (change)=\"onDias('IN_DOMI')\">\r\n              <label class=\"custom-control-label\" for=\"IN_DOMI\"><strong>Domingo</strong></label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </fieldset>\r\n      <br>\r\n      <br>\r\n      <fieldset class=\"border rounded shadow-sm col-10 pt-2 mx-auto\">\r\n        <legend>Observação</legend>\r\n        <div class=\"form-row justify-content-center\">\r\n          <div class=\"form-group col\">\r\n            <label for=\"DS_OBSE\" >Observação:</label>\r\n            <textarea class=\"form-control\" id=\"DS_OBSE\" formControlName=\"DS_OBSE\" rows=\"3\"></textarea>\r\n          </div>\r\n        </div>\r\n        <br>\r\n      </fieldset>\r\n    </fieldset>\r\n  </form>\r\n</app-body>");

/***/ }),

/***/ "YjxE":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/logistica/cadastros/turnos/lista/lista.component.ts ***!
  \*****************************************************************************/
/*! exports provided: LogisticaTurnosListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaTurnosListaComponent", function() { return LogisticaTurnosListaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lista.component.html */ "EiXP");
/* harmony import */ var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lista.component.scss */ "jfi3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../../shared/modules/confirm-modal/confirm-modal.service */ "FOez");
/* harmony import */ var _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../../../shared/templates/detail-panel/detal-panel.service */ "gIxL");
/* harmony import */ var _services_turnos_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/turnos.service */ "AQQP");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/modules/xlsx/xlsx.service */ "eOmW");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ "qCKp");



//angular



//servicos







// rxjs


let LogisticaTurnosListaComponent = class LogisticaTurnosListaComponent {
    /* Pagination */
    constructor(route, pnotify, formBuilder, xlsxService, dateService, routerService, activatedRoute, detailPanelService, confirmModalService, turnosService) {
        this.route = route;
        this.pnotify = pnotify;
        this.formBuilder = formBuilder;
        this.xlsxService = xlsxService;
        this.dateService = dateService;
        this.routerService = routerService;
        this.activatedRoute = activatedRoute;
        this.detailPanelService = detailPanelService;
        this.confirmModalService = confirmModalService;
        this.turnosService = turnosService;
        this.showDetailPanel = false;
        //LOADINGS
        this.loading = true;
        this.loadingNavBar = false;
        //VARIAVEIS
        this.totalItens = [];
        // CUSTOM TABLE
        this.tableConfig = {
            subtitleBorder: true,
        };
        // Tipos de Situação dos turnos (Ativo/Inativo)
        this.tipos = [
            {
                cod: '1',
                nome: 'Ativos',
            },
            {
                cod: '2',
                nome: 'Inativos',
            },
        ];
        // Subtitles (Ativo/Inativo)
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
        /* Pagination */
        this.itemsPerPage = 100;
        this.totalItems = 10;
        this.currentPage = 1;
    }
    ngOnInit() {
        this.buildForm();
        this.setBreadCrumb();
        this.onActivatedRoute();
        this.onDetailPanelEmitter();
        this.getFilterTurnos();
    }
    ngOnDestroy() {
        this.$activatedRouteSubscription.unsubscribe();
    }
    onActivatedRoute() {
        this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe((response) => {
            const _response = this.routerService.getBase64UrlParams(response);
            this.form.patchValue(_response);
            if (_response.hasOwnProperty('TT_REGI_PAGI'))
                this.itemsPerPage = _response.TT_REGI_PAGI;
            this.getTurnos(this.getParams());
        });
    }
    onDetailPanelEmitter() {
        this.showDetailPanelSubscription = this.detailPanelService.config.subscribe((event) => {
            this.showDetailPanel = event.showing;
        });
    }
    onReset() {
        this.form.reset();
        this.form.patchValue({
            PAGI: 1,
            TT_REGI_PAGI: 100,
            TIME: [new Date().getTime()],
        });
    }
    buildForm() {
        this.form = this.formBuilder.group({
            UUID_LOGI_TURN: [null],
            DS_TURN: [null],
            IN_STAT: [null],
            DS_OBSE: [null],
            NR_MATR: [null],
            NM_USUA: [null],
            DT_INCL: [null],
            DT_ATUA: [null],
            IN_SEGU: [false],
            IN_TERC: [false],
            IN_QUAR: [false],
            IN_QUIN: [false],
            IN_SEXT: [false],
            IN_SABA: [false],
            IN_DOMI: [false],
            PAGI: [1],
            TT_REGI_PAGI: [this.itemsPerPage],
            TIME: [new Date().getTime()],
        });
    }
    setPageRegistros(itemsPerPage) {
        this.itemsPerPage = itemsPerPage;
        this.onFilter();
    }
    setBreadCrumb() {
        const id = this.activatedRoute.snapshot.params.idSubModulo;
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: `/logistica/home`,
            },
            {
                descricao: 'Cadastro',
                routerLink: `/logistica/cadastros/${id}`,
            },
            {
                descricao: 'Turnos',
            },
        ];
    }
    onFilter() {
        this.detailPanelService.hide();
        this.form.get('PAGI').setValue(1);
        this.form.get('TIME').setValue(new Date().getTime());
        this.route.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams(this.getParams()),
        });
    }
    onDetails(tipos) {
        this.detailPanelService.show();
        this.turnoSelecionado = tipos;
        this.detailPanelService.loadedFinished(false);
    }
    convertMysqlTime(time) {
        return this.dateService.convertMysqlTime(time);
    }
    getTurnos(params) {
        if (!this.loading)
            this.loadingNavBar = true;
        this.turnosService
            .getTurnos(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(() => {
            this.loading = false;
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.turnos = response.body['data'];
                this.totalItems = response.body['total'];
                this.noResult = false;
            }
            else {
                this.noResult = true;
                this.turnos = [];
            }
        }, (error) => {
            this.noResult = true;
            const message = error.error.message;
            message ? this.pnotify.error(message) : this.pnotify.error();
        });
    }
    getFilterTurnos() {
        this.loadingTurnos = true;
        this.turnosService
            .getTurnos({ IN_STAT: '1', IN_PAGI: '0' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(() => {
            this.loadingTurnos = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.filterTurnos = response.body['data'];
            }
            else {
                this.pnotify.notice('Nenhum registro encontrado!');
            }
        }),
            (error) => {
                const message = error.error.message;
                message ? this.pnotify.error(message) : this.pnotify.error();
            };
    }
    onPageChanged(event) {
        this.form.get('PAGI').setValue(event.page);
        this.form.get('TIME').setValue(new Date().getTime());
        this.route.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams(this.getParams()),
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
    classStatusBorder(tipos) {
        let borderClass;
        if (tipos.IN_STAT == 1) {
            borderClass = 'border-success';
        }
        else if (tipos.IN_STAT == 2) {
            borderClass = 'border-danger';
        }
        return borderClass;
    }
    changeType(params) {
        const stat = params.IN_STAT == 1 ? 0 : 1;
        this.confirmChange(stat)
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["switchMap"])((result) => {
            if (!result)
                return rxjs__WEBPACK_IMPORTED_MODULE_14__["EMPTY"];
            this.loadingNavBar = true;
            params.IN_STAT = stat;
            return this.turnosService.postTurnos(params);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(() => {
            this.loadingNavBar = false;
        }))
            .subscribe((success) => {
            this.pnotify.success();
        }, (error) => {
            params.IN_STAT = params.IN_STAT == 1 ? 0 : 1;
            this.pnotify.error();
        });
    }
    confirmChange(stat) {
        if (stat == 1)
            return this.confirmModalService.showConfirm(null, null, 'Deseja realmente prosseguir com a ativação do registro?', 'Cancelar', 'Confirmar');
        return this.confirmModalService.showConfirm('inactivate', 'Confirmar inativação', 'Deseja realmente prosseguir com a inativação do registro?', 'Cancelar', 'Confirmar');
    }
    onExport() {
        let data = new Date().toLocaleDateString().split('/'), dataExport = `${data[0]}${data[1]}${data[2]}`;
        let listagemExport = [];
        listagemExport = this.turnos.concat(this.totalItens);
        this.xlsxService.exportFile(listagemExport, `Tipos_Setor${dataExport}`);
    }
};
LogisticaTurnosListaComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_11__["XlsxService"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__["DateService"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_8__["DetailPanelService"] },
    { type: _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_7__["ConfirmModalService"] },
    { type: _services_turnos_service__WEBPACK_IMPORTED_MODULE_9__["LogisticaTurnosService"] }
];
LogisticaTurnosListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'logistica-turnos-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_11__["XlsxService"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__["DateService"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_8__["DetailPanelService"],
        _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_7__["ConfirmModalService"],
        _services_turnos_service__WEBPACK_IMPORTED_MODULE_9__["LogisticaTurnosService"]])
], LogisticaTurnosListaComponent);



/***/ }),

/***/ "jfi3":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/logistica/cadastros/turnos/lista/lista.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2NhZGFzdHJvcy90dXJub3MvbGlzdGEvbGlzdGEuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "rkVY":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/logistica/cadastros/turnos/cadastro/cadastro.component.ts ***!
  \***********************************************************************************/
/*! exports provided: LogisticaTurnosCadastroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaTurnosCadastroComponent", function() { return LogisticaTurnosCadastroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cadastro.component.html */ "SOb9");
/* harmony import */ var _cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cadastro.component.scss */ "DcIT");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var js_brasil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! js-brasil */ "zFJr");
/* harmony import */ var js_brasil__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(js_brasil__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_turnos_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/turnos.service */ "AQQP");




//Services



//Bootstrap


//Angular





let LogisticaTurnosCadastroComponent = class LogisticaTurnosCadastroComponent {
    constructor(dateService, formBuilder, pnotify, activatedRoute, router, localeService, turnosService, titleService, atividadesService) {
        this.dateService = dateService;
        this.formBuilder = formBuilder;
        this.pnotify = pnotify;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.localeService = localeService;
        this.turnosService = turnosService;
        this.titleService = titleService;
        this.atividadesService = atividadesService;
        this.breadCrumbTree = [];
        this.formData = [];
        //loading
        this.disabledForm = false;
        this.loading = false;
        this.loadingNavBar = false;
        this.MASKS = js_brasil__WEBPACK_IMPORTED_MODULE_7__["utilsBr"].MASKS;
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
    onActivatedRoute() {
        const _params = this.activatedRoute.snapshot.params;
        if (_params.hasOwnProperty('id')) {
            this.getTurno(_params['id']);
            return;
        }
    }
    getTurno(id) {
        this.loading = true;
        this.turnosService
            .getTurno(id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(() => {
            this.loading = false;
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.form.patchValue(response.body['data']);
                console.log(this.form.value);
                this.noResult = false;
            }
            else {
                this.noResult = true;
            }
        }, (error) => {
            this.noResult = true;
            const message = error.error.message;
            message ? this.pnotify.error(message) : this.pnotify.error();
        });
    }
    setBreadCrumb() {
        const id = this.activatedRoute.snapshot.params.idSubModulo;
        this.appTitle = 'Cadastro';
        this.titleService.setTitle(this.appTitle);
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: '/logistica/home',
            },
            {
                descricao: 'Cadastro',
                routerLink: `/logistica/cadastros/${id}`,
            },
            {
                descricao: 'Turnos',
                routerLink: `../`,
            },
            {
                descricao: this.appTitle,
            },
        ];
    }
    //formulario
    setFormBuilder() {
        this.form = this.formBuilder.group({
            UUID_LOGI_TURN: [null],
            HR_INIC: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required]],
            HR_FINA: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required]],
            DS_TURN: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required]],
            IN_STAT: [null],
            IN_SEGU: [false],
            IN_TERC: [false],
            IN_QUAR: [false],
            IN_QUIN: [false],
            IN_SEXT: [false],
            IN_SABA: [false],
            IN_DOMI: [false],
            DS_OBSE: [null],
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
        let formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]();
        if (this.form.controls[field].validator) {
            let validationResult = this.form.controls[field].validator(formControl);
            required =
                validationResult !== null && validationResult.required === true;
        }
        if (required) {
            return 'is-required';
        }
    }
    postTurnos() {
        const _params = this.form.value;
        _params.HR_INIC = this.dateService.convert2PhpDate(this.form.get('HR_INIC').value);
        _params.HR_FINA = this.dateService.convert2PhpDate(this.form.get('HR_FINA').value);
        console.log(_params);
        this.loadingNavBar = true;
        this.turnosService
            .postTurnos(_params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(() => {
            this.loading = false;
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.pnotify.success();
                this.router.navigate(['../'], {
                    relativeTo: this.activatedRoute,
                });
            }
            else {
                this.pnotify.error();
            }
        }, (error) => {
            const message = error.error.message;
            message ? this.pnotify.error(message) : this.pnotify.error();
        });
    }
    onDias(dia) {
        const valor = this.form.get(dia).value;
        valor == true ? false : true;
        this.form.get(dia).setValue(valor);
    }
};
LogisticaTurnosCadastroComponent.ctorParameters = () => [
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_3__["DateService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["BsLocaleService"] },
    { type: _services_turnos_service__WEBPACK_IMPORTED_MODULE_13__["LogisticaTurnosService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_4__["TitleService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_5__["AtividadesService"] }
];
LogisticaTurnosCadastroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"])({
        selector: 'logistica--turnos-cadastro',
        template: _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_3__["DateService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["BsLocaleService"],
        _services_turnos_service__WEBPACK_IMPORTED_MODULE_13__["LogisticaTurnosService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_4__["TitleService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_5__["AtividadesService"]])
], LogisticaTurnosCadastroComponent);



/***/ })

}]);
//# sourceMappingURL=turnos-turnos-module-es2015.js.map