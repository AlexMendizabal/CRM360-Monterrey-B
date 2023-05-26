(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["circuitos-circuitos-module"],{

/***/ "40h2":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/logistica/yms/circuitos/circuitos-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: LogisticaYmsCircuitosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaYmsCircuitosRoutingModule", function() { return LogisticaYmsCircuitosRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _associacao_etapas_associacao_etapas_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./associacao-etapas/associacao-etapas.component */ "ig/f");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/not-found/not-found.component */ "6nXq");
/* harmony import */ var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cadastro/cadastro.component */ "cRG+");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lista/lista.component */ "phsi");







const routes = [
    {
        path: '',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_6__["LogisticaYmsCircuitosListaComponent"],
    },
    {
        path: 'novo',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_5__["LogisticaYmsCircuitosCadastroComponent"],
    },
    {
        path: ':id',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_5__["LogisticaYmsCircuitosCadastroComponent"],
    },
    {
        path: 'etapas/:id',
        component: _associacao_etapas_associacao_etapas_component__WEBPACK_IMPORTED_MODULE_1__["LogisticaYmsCircuitosAssociacaoEtapasComponent"],
    },
    {
        path: '**',
        component: src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"],
    },
];
let LogisticaYmsCircuitosRoutingModule = class LogisticaYmsCircuitosRoutingModule {
};
LogisticaYmsCircuitosRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
    })
], LogisticaYmsCircuitosRoutingModule);



/***/ }),

/***/ "Dd3x":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/logistica/yms/circuitos/cadastro/cadastro.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL3ltcy9jaXJjdWl0b3MvY2FkYXN0cm8vY2FkYXN0cm8uY29tcG9uZW50LnNjc3MifQ== */");

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

/***/ "HRJg":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/yms/circuitos/cadastro/cadastro.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\n<app-header appTitle=\"Circuitos\">\n  <button \n    [disabled]=\"form.valid === false || loadingNavBar === true\"\n    (click)=\"postCircuitos()\"\n    >\n    Salvar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\n  <form [formGroup]=\"form\" autocomplete=\"off\" [hidden] = \"loading\">\n    <fieldset  class=\"col-12\">\n      <fieldset class=\"border rounded shadow-sm col-8 pt-2 mx-auto\">\n        <legend>Dados do Circuito</legend>\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col-md-12 pl-0\">\n            <label for=\"NM_CIRC\">Descrição</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"NM_CIRC\"\n              formControlName=\"NM_CIRC\"\n              placeholder=\"Digite...\"\n              [ngClass]=\"onFieldError('NM_CIRC') + ' ' + onFieldRequired('NM_CIRC')\"\n            />\n            <invalid-form-control [show]=\"onFieldInvalid('NM_CIRC')\" message=\"Descrição é obrigatório.\"></invalid-form-control>\n          </div>\n        </div>\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col-md-6 pl-0\">\n            <label for=\"tiposCircuito\">Tipo de Circuito</label>\n            <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"true\"\n              [items]=\"tiposCircuito\"\n              [virtualScroll]=\"true\"\n              placeholder=\"Selecione...\"\n              [loading]=\"loadingTiposCircuito\"\n              labelForId=\"tiposCircuito\"\n              bindLabel=\"NM_CIRC_TIPO\"\n              bindValue=\"UUID_LOGI_YMS_CIRC_TIPO\"\n              id=\"tiposCircuito\"\n              formControlName=\"UUID_LOGI_YMS_CIRC_TIPO\"\n              [ngClass]=\"onFieldError('UUID_LOGI_YMS_CIRC_TIPO') + ' ' + onFieldRequired('UUID_LOGI_YMS_CIRC_TIPO')\"\n              >\n            </ng-select>\n            <invalid-form-control [show]=\"onFieldInvalid('UUID_LOGI_YMS_CIRC_TIPO')\" message=\"Tipo de Circuito é obrigatório.\"></invalid-form-control>\n          </div>\n          <div class=\"form-group col-md-6 pl-0\">\n            <label for=\"filiais\">Filial</label>\n            <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"true\"\n              [items]=\"filiais\"\n              [virtualScroll]=\"true\"\n              placeholder=\"Selecione...\"\n              [loading]=\"loadingFiliais\"\n              labelForId=\"UUID_LOGI_FILI\"\n              bindLabel=\"NM_FILI\"\n              bindValue=\"UUID_LOGI_FILI\"\n              id=\"UUID_LOGI_FILI\"\n              formControlName=\"UUID_LOGI_FILI\"\n              [ngClass]=\"onFieldError('UUID_LOGI_FILI') + ' ' + onFieldRequired('UUID_LOGI_FILI')\"\n              >\n            </ng-select>\n            <invalid-form-control [show]=\"onFieldInvalid('UUID_LOGI_FILI')\" message=\"Filial é obrigatório.\"></invalid-form-control>\n          </div>\n        </div>\n      </fieldset>\n      <br>\n      <br>\n      <fieldset class=\"border rounded shadow-sm col-8 pt-2 mx-auto\">\n        <legend>Observação</legend>\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col\">\n            <label for=\"DS_OBSE\" >Observação:</label>\n            <textarea class=\"form-control\" id=\"DS_OBSE\" formControlName=\"DS_OBSE\" rows=\"3\"></textarea>\n          </div>\n        </div>\n        <br>\n      </fieldset>\n    </fieldset>\n  </form>\n</app-body>");

/***/ }),

/***/ "KqOr":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/logistica/yms/circuitos/associacao-etapas/associacao-etapas.component.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button[disabled] {\n  cursor: no-drop;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EveW1zL2NpcmN1aXRvcy9hc3NvY2lhY2FvLWV0YXBhcy9hc3NvY2lhY2FvLWV0YXBhcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL3ltcy9jaXJjdWl0b3MvYXNzb2NpYWNhby1ldGFwYXMvYXNzb2NpYWNhby1ldGFwYXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b25bZGlzYWJsZWRde1xuICBjdXJzb3I6IG5vLWRyb3A7XG59Il19 */");

/***/ }),

/***/ "Sr+0":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/yms/circuitos/associacao-etapas/associacao-etapas.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\n<app-header [appTitle]=\"appTitle\">\n  <button \n    [disabled]=\"loadingNavBar === true\"\n    [routerLink]=\"['../../']\"\n    >\n    Finalizar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\n  <div class=\"row\">\n    <div class=\"col-lg-6\">\n      <form [formGroup]=\"form\" autocomplete=\"off\">\n        <div class=\"mtc-title\">Dados do Circuito</div>\n        <div class=\"form-row\">\n          <div class=\"form-group col pl-0\">\n            <label for=\"circuitos\">Circuito</label>\n            <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"true\"\n              [items]=\"circuitos\"\n              [virtualScroll]=\"true\"\n              placeholder=\"Selecione...\"\n              [loading]=\"loadingCircuitos\"\n              labelForId=\"circuitos\"\n              bindLabel=\"NM_CIRC\"\n              bindValue=\"UUID_LOGI_YMS_CIRC\"\n              id=\"circuitos\"\n              formControlName=\"UUID_LOGI_YMS_CIRC\"\n              >\n            </ng-select>\n          </div>\n        </div>\n      </form>\n      <div class=\"row mb-4\">\n        <div class=\"col mb-3\">\n          <hr>\n        </div>\n      </div>\n      <div [hidden]=\"loadingEtapas\">\n        <div class=\"row mb-2 mt-4\">\n          <div class=\"col mt-auto\">\n            <div class=\"mtc-title mb-0\">Etapas associadas ao circuito</div>\n          </div>\n          <div class=\"col\">\n            <div class=\"d-flex justify-content-end\">\n              <button\n                type=\"button\"\n                class=\"btn btn-sm btn-outline-danger\"\n                (click)=\"onRemoverAssociacao()\">\n                <i class=\"fas fa-trash\"></i>\n                <span>Limpar</span>\n              </button>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\" *ngIf=\"!etapasAssociadasLoading && etapasAssociadas.length > 0\">\n          <div class=\"col\">\n            <custom-table [config]=\"tableConfigEtapasAssociadas\">\n              <ng-template #thead let-thead>\n                <tr>\n                  <th\n                    scope=\"col\"\n                    class=\"text-center\"\n                    style=\"width: 5%\">\n                    <btn-icon\n                      [icon]=\"toggle?.etapasAssociadas ? 'fas fa-check-square' : 'far fa-square'\"\n                      size=\"small\"\n                      (click)=\"onToggleAll('etapasAssociadas')\">\n                    </btn-icon>\n                  </th>\n                  <th scope=\"col\" style=\"width: 10%\">Seq.</th>\n                  <th scope=\"col\" style=\"width: 40%\">Etapas</th>\n                  <th scope=\"col\" style=\"width: 40%\">Tipo de Etapa</th>\n                  <th scope=\"col\" style=\"width: 5%\"></th>\n                </tr>\n              </ng-template>\n              <ng-template #tbody let-tbody>\n                <tr *ngFor=\"let item of etapasAssociadas\" >\n                  <td class=\"text-center\" style=\"width: 5%\">\n                    <btn-icon\n                      [icon]=\"item.checked == 1 ? 'fas fa-check-square' : 'far fa-square'\"\n                      size=\"small\"\n                      (click)=\"item.checked = !item.checked\">\n                    </btn-icon>\n                  </td>\n                  <td \n                    class=\"hover\"\n                    style=\"width: 10%\">\n                    {{ item.NR_SQNC  }}\n                  </td>\n                  <td\n                    class=\"hover\"\n                    style=\"width: 40%\">\n                    {{ item.NM_ETAP | uppercase }}\n                  </td>\n                  <td\n                    class=\"hover\"\n                    style=\"width: 40%\">\n                    {{ item.NM_ETAP_TIPO | uppercase }}\n                  </td>\n                  <td class=\"text-center\" width=\"5%\" height=\"26px\">\n                    <btn-icon\n                      icon=\"fas fa-trash\"\n                      size=\"small\"\n                      (click)=\"onRemoverAssociacao(item)\"\n                      *ngIf=\"!item.loading\"  \n                    >\n                    </btn-icon>\n                    <div class=\"text-primary small\" *ngIf=\"item.loading\">\n                      <i class=\"fas fa-spinner fa-spin\"></i>\n                    </div>\n                  </td>\n                </tr>\n              </ng-template>\n            </custom-table>\n          </div>\n        </div>\n        <div class=\"row\" *ngIf=\"!loadingEtapas && etapasAssociadas.length === 0\">\n          <div class=\"col\">\n            <message\n              icon=\"fas fa-exchange-alt\"\n              text=\"Nenhuma associação encontrada\">\n            </message>\n          </div>\n        </div>\n        <div class=\"row\" *ngIf=\"loadingEtapas\">\n          <div class=\"col\">\n            <message\n              icon=\"fas fa-cog fa-spin\"\n              text=\"Estamos pesquisando os etapas para você...\">\n            </message>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-6 border-left\">\n      <form [formGroup]=\"formEtapas\" autocomplete=\"off\">\n        <div class=\"row mb-2\">\n          <div class=\"col mt-auto\">\n            <div class=\"mtc-title mb-0\">Pesquisa de Etapas</div>\n          </div>\n          <div class=\"col\">\n            <div class=\"d-flex justify-content-end\">\n              <button\n                type=\"button\"\n                class=\"btn btn-sm btn-outline-secondary\"\n                (click)=\"getEtapas()\">\n                <i class=\"fas fa-search\"></i>\n                <span \n                container=\"body\"\n                placement =\"left\">Pesquisar</span>\n              </button>\n            </div>\n          </div>\n        </div>\n        <advanced-filter>\n          <div class=\"form-row\">\n              <div class=\"form-group col-md-6 pl-0\">\n                <label for=\"tiposEtapa\">Tipo de Etapa</label>\n                <ng-select\n                  [searchable]=\"true\"\n                  [clearable]=\"true\"\n                  [items]=\"tiposEtapa\"\n                  [virtualScroll]=\"true\"\n                  placeholder=\"Selecione...\"\n                  [loading]=\"loadingTiposEtapa\"\n                  labelForId=\"tiposEtapa\"\n                  (keydown.enter)=\"getEtapas()\"\n                  bindLabel=\"NM_ETAP_TIPO\"\n                  bindValue=\"UUID_LOGI_YMS_ETAP_TIPO\"\n                  id=\"tiposEtapa\"\n                  formControlName=\"UUID_LOGI_YMS_ETAP_TIPO\"\n                  (change)=\"getFilterEtapas({'UUID_LOGI_YMS_ETAP_TIPO': $event?.UUID_LOGI_YMS_ETAP_TIPO || ''})\">\n                </ng-select>\n              </div>\n              <div class=\"form-group col-md-6 pl-0\">\n                <label for=\"filterEtapas\">Etapa</label>\n                <ng-select\n                  [searchable]=\"true\"\n                  [clearable]=\"true\"\n                  [items]=\"filterEtapas\"\n                  [virtualScroll]=\"true\"\n                  placeholder=\"Selecione...\"\n                  [loading]=\"loadingFilterEtapas\"\n                  labelForId=\"filterEtapas\"\n                  (keydown.enter)=\"getEtapas()\"\n                  bindLabel=\"NM_ETAP\"\n                  bindValue=\"UUID_LOGI_YMS_ETAP\"\n                  id=\"filterEtapas\"\n                  formControlName=\"UUID_LOGI_YMS_ETAP\">\n                </ng-select>\n              </div>\n          </div>\n        </advanced-filter>\n        <div *ngIf=\"etapas.length > 0 && !etapasLoading\">\n          <div class=\"row mb-2\">\n            <div class=\"col mt-auto\">\n              <div class=\"mtc-title mb-0\">Seleção de Etapa</div>\n            </div>\n            <div class=\"col\">\n              <div class=\"d-flex justify-content-end\">\n                <button\n                  type=\"button\"\n                  class=\"btn btn-sm btn-outline-primary\"\n                  (click)=\"onAssociarEtapas()\"\n                  [disabled]=\"searching === true || formEtapas.valid === false\">\n                  <i class=\"fas fa-exchange-alt\"></i>\n                  <span\n                    [tooltip]=\"form.valid == false ? 'Selecione uma Circuito':''\"\n                    container=\"body\"\n                    placement =\"left\">Associar\n                  </span>\n                </button>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col\">\n              <custom-table [config]=\"tableConfigEtapas\">\n                <ng-template #thead let-thead>\n                  <tr>\n                    <th\n                      scope=\"col\"\n                      class=\"text-center\"\n                      style=\"width: 5%\">\n                      <btn-icon\n                        [icon]=\"toggle?.etapas ? 'fas fa-check-square' : 'far fa-square'\"\n                        size=\"small\"\n                        (click)=\"onToggleAll('etapas')\">\n                      </btn-icon>\n                    </th>\n                    <th scope=\"col\" style=\"width: 10%\" class=\"text-center\">Seq.</th>\n                    <th scope=\"col\" style=\"width: 40%\">Etapas</th>\n                    <th scope=\"col\" style=\"width: 40%\">Tipo de Etapa</th>\n                    <th style=\"width: 5%\"></th>\n                  </tr>\n                </ng-template>\n                <ng-template #tbody let-tbody>\n                  <tr *ngFor=\"let item of etapas\">\n                    <td class=\"text-center\" style=\"width: 5%\">\n                      <btn-icon\n                        *ngIf = \"item.NR_SQNC > 0 \"\n                        [icon]=\"item.checked == 1 ? 'fas fa-check-square' : 'far fa-square'\"\n                        size=\"small\"\n                        (click)=\"item.checked = !item.checked;\">\n                      </btn-icon>\n                    </td>\n                    <td\n                    class=\"hover\"\n                    style=\"width: 10%\"\n                    >\n                      <input\n                      type=\"number\"\n                      class=\"form-control\"\n                      min = \"1\"\n                      (change)=\"item.NR_SQNC = ($event.target.value);\"\n                    />\n                    </td>\n                    <td\n                      class=\"hover\"\n                      style=\"width: 40%\"\n                      (click)=\"item.checked = !item.checked\">\n                      {{ item.NM_ETAP | uppercase }}\n                    </td>\n                    <td\n                      class=\"hover\"\n                      style=\"width: 40%\"\n                      (click)=\"item.checked = !item.checked\">\n                      {{ item.NM_ETAP_TIPO | uppercase }}\n                    </td>\n                    <td style=\"width: 5%; height: 26px\">\n                      <div class=\"text-primary small\" *ngIf=\"item.loading\">\n                        <i class=\"fas fa-spinner fa-spin\"></i>\n                      </div>\n                    </td>\n                  </tr>\n                </ng-template>\n              </custom-table>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\" *ngIf=\"etapasLoading\">\n          <div class=\"col\">\n            <message\n              icon=\"fas fa-cog fa-spin\"\n              text=\"Estamos pesquisando os etapas para você...\">\n            </message>\n          </div>\n        </div>\n        <div>\n          <div class=\"row\" *ngIf=\"(etapas.length == 0) && !etapasLoading\">\n            <div class=\"col\">\n              <message\n                icon=\"fas fa-box-open\"\n                text=\"Nenhuma informação encontrada\">\n              </message>\n            </div>\n          </div>\n          <!-- <div class=\"row\" *ngIf=\"etapasLista.length === 0 && !firstSearch\">\n            <div class=\"col\">\n              <message\n                icon=\"fas fa-search\"\n                text=\"Preecha os campos acima para pesquisar etapas\">\n              </message>\n            </div>\n          </div> -->\n        </div>\n      </form>\n    </div>\n  </div>\n</app-body>\n\n");

/***/ }),

/***/ "cRG+":
/*!********************************************************************************!*\
  !*** ./src/app/modules/logistica/yms/circuitos/cadastro/cadastro.component.ts ***!
  \********************************************************************************/
/*! exports provided: LogisticaYmsCircuitosCadastroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaYmsCircuitosCadastroComponent", function() { return LogisticaYmsCircuitosCadastroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cadastro.component.html */ "HRJg");
/* harmony import */ var _cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cadastro.component.scss */ "Dd3x");
/* harmony import */ var _tipos_circuito_services_tipos_circuito_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../tipos-circuito/services/tipos-circuito.service */ "j4Bn");
/* harmony import */ var _cadastros_filiais_services_filiais_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../cadastros/filiais/services/filiais.service */ "NXOV");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var js_brasil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! js-brasil */ "zFJr");
/* harmony import */ var js_brasil__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(js_brasil__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_circuitos_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/circuitos.service */ "yw/Z");





//Services



//Bootstrap


//Angular





let LogisticaYmsCircuitosCadastroComponent = class LogisticaYmsCircuitosCadastroComponent {
    constructor(formBuilder, pnotify, activatedRoute, router, localeService, circuitosService, titleService, atividadesService, filiaisService, tiposCircuitoService) {
        this.formBuilder = formBuilder;
        this.pnotify = pnotify;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.localeService = localeService;
        this.circuitosService = circuitosService;
        this.titleService = titleService;
        this.atividadesService = atividadesService;
        this.filiaisService = filiaisService;
        this.tiposCircuitoService = tiposCircuitoService;
        this.breadCrumbTree = [];
        this.formData = [];
        //loading
        this.disabledForm = false;
        this.loading = false;
        this.loadingNavBar = false;
        this.MASKS = js_brasil__WEBPACK_IMPORTED_MODULE_8__["utilsBr"].MASKS;
        this.localeService.use('pt-br');
        this.bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' }, { adaptivePosition: true }, { showWeekNumbers: false });
    }
    ngOnInit() {
        this.registrarAcesso();
        this.setBreadCrumb();
        this.setFormBuilder();
        this.onActivatedRoute();
        this.getFiliais();
        this.getTiposCircuito();
    }
    registrarAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
    }
    onActivatedRoute() {
        const _params = this.activatedRoute.snapshot.params;
        if (_params.hasOwnProperty('id'))
            return this.getCircuito(_params['id']);
    }
    getFiliais() {
        this.loadingFiliais = true;
        this.filiaisService
            .getFiliais({ IN_STAT: '1', IN_PAGI: '0', IN_YMS: 1 })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(() => {
            this.loadingFiliais = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.filiais = response.body['data'];
            }
            else {
                this.filiais = [];
                this.pnotify.notice('Nenhuma filial encontrada!');
            }
        }, (error) => {
            const message = error.error.message;
            message ? this.pnotify.error(message) : this.pnotify.error();
        });
    }
    getTiposCircuito() {
        this.loadingTiposCircuito = true;
        this.tiposCircuitoService
            .getTiposCircuito({ IN_STAT: '1', IN_PAGI: '0' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(() => {
            this.loadingTiposCircuito = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.tiposCircuito = response.body['data'];
            }
            else {
                this.tiposCircuito = [];
                this.pnotify.notice('Nenhuma filial encontrada!');
            }
        }, (error) => {
            const message = error.error.message;
            message ? this.pnotify.error(message) : this.pnotify.error();
        });
    }
    getCircuito(id) {
        this.loading = true;
        this.circuitosService
            .getCircuito(id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(() => {
            this.loading = false;
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                const data = response.body['data'][0];
                this.form.patchValue(data);
                this.noResult = false;
            }
            else {
                this.noResult = true;
            }
        }, (error) => {
            const message = error.error.message;
            message ? this.pnotify.error(message) : this.pnotify.error();
            this.noResult = true;
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
                descricao: 'YMS',
                routerLink: `/logistica/yms/${id}`,
            },
            {
                descricao: 'Circuitos',
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
            UUID_LOGI_YMS_CIRC: [null],
            UUID_LOGI_FILI: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required]],
            NM_FILI: [null],
            NM_CIRC: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required]],
            UUID_LOGI_YMS_CIRC_TIPO: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required]],
            NM_CIRC_TIPO: [null],
            IN_STAT: [null],
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
        let formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControl"]();
        if (this.form.controls[field].validator) {
            let validationResult = this.form.controls[field].validator(formControl);
            required =
                validationResult !== null && validationResult.required === true;
        }
        if (required) {
            return 'is-required';
        }
    }
    postCircuitos() {
        this.loadingNavBar = true;
        this.circuitosService
            .postCircuitos(this.form.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(() => {
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
};
LogisticaYmsCircuitosCadastroComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormBuilder"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["BsLocaleService"] },
    { type: _services_circuitos_service__WEBPACK_IMPORTED_MODULE_14__["LogisticaYmsCircuitosService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_5__["TitleService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__["AtividadesService"] },
    { type: _cadastros_filiais_services_filiais_service__WEBPACK_IMPORTED_MODULE_4__["LogisticaFiliaisService"] },
    { type: _tipos_circuito_services_tipos_circuito_service__WEBPACK_IMPORTED_MODULE_3__["LogisticaYmsTiposCircuitoService"] }
];
LogisticaYmsCircuitosCadastroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"])({
        selector: 'logistica-yms-circuitos-cadastro',
        template: _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormBuilder"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"],
        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["BsLocaleService"],
        _services_circuitos_service__WEBPACK_IMPORTED_MODULE_14__["LogisticaYmsCircuitosService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_5__["TitleService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__["AtividadesService"],
        _cadastros_filiais_services_filiais_service__WEBPACK_IMPORTED_MODULE_4__["LogisticaFiliaisService"],
        _tipos_circuito_services_tipos_circuito_service__WEBPACK_IMPORTED_MODULE_3__["LogisticaYmsTiposCircuitoService"]])
], LogisticaYmsCircuitosCadastroComponent);



/***/ }),

/***/ "cjCp":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/yms/circuitos/lista/lista.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-navbar *ngIf=\"loadingNavBar\"></loader-spinner-navbar>\n<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\n<app-header appTitle=\"CIRCUITOS\">\n  <button\n  type=\"button\"\n  (click)=\"onExport()\"\n  [disabled]=\"loadingNavBar || noResult\">\n  Exportar\n</button>\n  <button\n    type=\"button\"\n    (click)=\"onReset()\">\n    Limpar\n  </button>\n  <button\n    type=\"button\"\n    [routerLink]=\"['../novo']\">\n    Adicionar\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"onFilter()\">\n    Filtrar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loading\">\n  <div class=\"row\" #scrollToFilter>\n    <div class=\"col\">\n      <advanced-filter>\n        <form [formGroup]=\"form\" autocomplete=\"off\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-5 pl-0\">\n              <label for=\"filterCircuitos\">Circuito</label>\n              <ng-select\n                [searchable]=\"true\"\n                [clearable]=\"true\"\n                [items]=\"filterCircuitos\"\n                [virtualScroll]=\"true\"\n                placeholder=\"Selecione...\"\n                [loading]=\"loadingCircuitos\"\n                labelForId=\"UUID_LOGI_YMS_CIRC\"\n                bindLabel=\"NM_CIRC\"\n                bindValue=\"UUID_LOGI_YMS_CIRC\"\n                id=\"UUID_LOGI_YMS_CIRC\"\n                formControlName=\"UUID_LOGI_YMS_CIRC\">\n              </ng-select>\n            </div>\n            <div class=\"form-group col-md-4 pl-0\">\n              <label for=\"filiais\">Filial</label>\n              <ng-select\n                [searchable]=\"true\"\n                [clearable]=\"true\"\n                [items]=\"filiais\"\n                [virtualScroll]=\"true\"\n                placeholder=\"Selecione...\"\n                [loading]=\"loadingFiliais\"\n                labelForId=\"UUID_LOGI_FILI\"\n                bindLabel=\"NM_FILI\"\n                bindValue=\"UUID_LOGI_FILI\"\n                id=\"UUID_LOGI_FILI\"\n                formControlName=\"UUID_LOGI_FILI\"\n                >\n              </ng-select>\n            </div>\n            <div class=\"form-group col-md-2 pl-0\">\n              <label for=\"IN_STAT\">Situação</label>\n              <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"false\"\n              [items]=\"tipos\"\n              [virtualScroll]=\"true\"\n              labelForId=\"tipo\"\n              bindLabel=\"nome\"\n              bindValue=\"cod\"\n              id=\"tipo\"\n              (change)=\"onFilter()\"\n              formControlName=\"IN_STAT\"\n              (keydown.enter)=\"onFilter()\"\n              placeholder=\"Selecione...\"\n            >\n            </ng-select>\n            </div>\n            <div class=\"form-group col-md-1 p-0\">\n              <label>Registros</label>\n              <select \n                class=\"form-control custom-select\"\n                formControlName=\"TT_REGI_PAGI\"\n                (keydown.enter)=\"onFilter()\"\n                (change)=\"setPageRegistros($event.target.value)\"  \n              >\n                <option value=\"10\">10</option>\n                <option value=\"25\">25</option>\n                <option value=\"50\">50</option>\n                <option value=\"100\">100</option>\n                <option value=\"250\">250</option>\n                <option value=\"500\">500</option>\n              </select>\n            </div>\n          </div>\n        </form>\n      </advanced-filter>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <subtitles\n        [data]=\"subtitles\"\n        [show]=\"!noResult\">\n      </subtitles>\n    </div>\n  </div>\n  <div class=\"d-flex\" [hidden] = \"loading || noResult\">\n    <div class=\"p-0\" [ngClass]=\"{'col': !showDetailPanel, 'col-6': showDetailPanel}\">\n      <div class=\"w-100\">\n        <custom-table  [config]=\"tableConfig\" class=\"text-center\" *ngIf=\"!noResult\">\n          <ng-template #thead let-thead>\n            <tr>\n              <th scope=\"col\" >ID</th>\n              <th scope=\"col\" >Descrição</th>\n              <th scope=\"col\" >Filial</th>\n              <th scope=\"col\" style=\"width:160px\"[hidden]=\"showDetailPanel\"></th>\n            </tr>\n          </ng-template>\n          <ng-template #tbody let-tbody>\n            <tr *ngFor=\"let circuito of circuitos\"  [class.table-active]=\"circuito?.UUID_LOGI_YMS_CIRC == circuitoSelecionado?.UUID_LOGI_YMS_CIRC && showDetailPanel\">\n              <td  [ngClass]=\"circuito.IN_STAT == '1' ? 'border-success' : 'border-danger'\">\n              {{circuito.UUID_LOGI_YMS_CIRC }}\n              </td>\n              <td >{{ circuito.NM_CIRC | uppercase}}</td>\n              <td >{{ circuito.NM_FILI | uppercase}}</td>\n              <td class=\"align-middle\" [hidden]=\"showDetailPanel\">\n                <span class=\"mr-3\" [tooltip]=\"circuito.IN_STAT == 1 ? 'Inativar' : 'Ativar'\" placement=\"left\" container=\"body\">\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"changeType(circuito)\">\n                    <i [ngClass]=\"circuito.IN_STAT == '1' ? 'fas fa-toggle-on' : 'fas fa-toggle-off'\"></i>\n                  </button>\n                </span>\n                <span class=\"mr-3\" tooltip=\"Editar\" placement=\"left\" container=\"body\">\n                  <button type=\"button\" class=\"btn-icon-sm\" [routerLink]=\"['./../', circuito.UUID_LOGI_YMS_CIRC]\">\n                    <i class=\"fas fa-edit\"></i>\n                  </button>\n                </span>\n                <span class=\"mr-3\"  tooltip=\"Associar Etapas\" placement=\"left\" container=\"body\" >\n                  <button type=\"button\" class=\"btn-icon-sm\"  [routerLink]=\"['./../etapas/', circuito.UUID_LOGI_YMS_CIRC]\">\n                    <i class=\"fas fa-tasks\"></i>                  \n                  </button>\n                </span>\n                <span class=\"mr-3\"  tooltip=\"Detalhes\" placement=\"left\" container=\"body\" >\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onDetails(circuito)\">\n                    <i class=\"fas fa-search\"></i>                  \n                  </button>\n                </span>\n              </td>\n            </tr>\n          </ng-template>\n        </custom-table><br>\n      </div>\n      <div *ngIf=\"totalItems > itemsPerPage\">\n        Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\n        <pagination\n          [maxSize]=\"10\"\n          [totalItems]=\"totalItems\"\n          (pageChanged)=\"onPageChanged($event)\"\n          [(itemsPerPage)]=\"itemsPerPage\"\n          [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPage\"\n          previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\"\n          lastText=\"&raquo;\">\n        </pagination>\n      </div>\n    </div>\n    <div class=\"col-6 pr-0\" [hidden]=\"!showDetailPanel\">\n      <detail-panel panelTitle=\"Detalhes\">\n        <tabset>\n          <tab heading=\"Dados do Circuito\">\n            <div class=\"border-right border-left border-bottom px-3 pt-3\">\n              <div>\n                <div class=\"form-row\">\n                  <div class=\"form-group col-lg-6\">\n                    <label>ID do Circuito</label>\n                    <div>{{ circuitoSelecionado?.UUID_LOGI_YMS_CIRC}}</div>\n                  </div>\n                  <div class=\"form-group col-lg-6\">\n                    <label>Circuito</label>\n                    <div>{{ circuitoSelecionado?.NM_CIRC | uppercase}}</div>\n                  </div>\n                </div>\n                <div class=\"form-row\">\n                  <div class=\"form-group col-lg-6\">\n                    <label>Tipo de Circuito</label>\n                    <div>{{ circuitoSelecionado?.NM_CIRC_TIPO | uppercase}}</div>\n                  </div>\n                </div>\n                <div class=\"form-row \">\n                  <div class=\"form-group col-lg-12\">\n                    <label>Observação:</label>\n                    <div>{{ circuitoSelecionado?.DS_OBSE | uppercase}}</div>\n                  </div>\n                </div>\n                <hr>\n                <div class=\"form-row\">\n                  <div class=\"form-group col\">\n                    <label *ngIf=\"!circuitoSelecionado?.DT_ATUA == null\">Usuário Responsável Pelo Cadastro</label>\n                    <label *ngIf=\"circuitoSelecionado?.DT_ATUA == null\">Usuário Responsável Pela Atualização</label>\n                    <div>{{ circuitoSelecionado?.NM_USUA | uppercase }}</div>\n                  </div>\n                  <div class=\"form-group col\">\n                    <label *ngIf=\"!circuitoSelecionado?.DT_ATUA == null\">Data do Cadastro</label>\n                    <label *ngIf=\"circuitoSelecionado?.DT_ATUA == null\">Data da Atualização</label>\n                    <div>{{(circuitoSelecionado?.DT_ATUA | date: 'dd/MM/yyyy HH:mm') || (circuitoSelecionado?.DT_INCL | date: 'dd/MM/yyyy HH:mm') }}</div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </tab>\n          <tab  heading=\"Etapas Associadas\">\n            <div class=\"border-right border-left border-bottom px-3 pt-3\">\n              <div class=\"mb-3\">\n                <custom-table  [config]=\"tableConfigAssocEtapas\"  class=\"text-center\" *ngIf=\"!loadingAssociacaoEtapas && !noAssocEtapas\">\n                  <ng-template #thead let-thead>\n                    <tr>\n                      <th scope=\"col\"  width=\"50%\">Tipo de Etapa</th>\n                      <th scope=\"col\"  width=\"50%\">Etapa</th>\n                    </tr>\n                  </ng-template>\n                  <ng-template #tbody let-tbody>\n                    <tr *ngFor=\"let etapa of associacaoEtapas\">\n                      <td  width=\"50%\">{{ etapa?.NM_ETAP_TIPO | uppercase }}</td>\n                      <td  width=\"50%\">{{ etapa?.NM_ETAP | uppercase }}</td>\n                    </tr>\n                  </ng-template>\n                </custom-table>\n                <message\n                  *ngIf=\"loadingAssociacaoEtapas\"\n                  icon=\"fas fa-cog fa-spin\"\n                  text=\"Estamos pesquisando as etapas para você...\">\n                </message>\n                <div [hidden]=\"loadingAssociacaoEtapas || !noAssocEtapas\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 80%\">\n                  <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n                </div>\n              </div>\n            </div>\n          </tab>       \n        </tabset> \n      </detail-panel>\n    </div>\n  </div>\n  <div [hidden]=\"loading || !noResult\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 80%\">\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n  </div>\n</app-body>");

/***/ }),

/***/ "ig/f":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/logistica/yms/circuitos/associacao-etapas/associacao-etapas.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: LogisticaYmsCircuitosAssociacaoEtapasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaYmsCircuitosAssociacaoEtapasComponent", function() { return LogisticaYmsCircuitosAssociacaoEtapasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_associacao_etapas_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./associacao-etapas.component.html */ "Sr+0");
/* harmony import */ var _associacao_etapas_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./associacao-etapas.component.scss */ "KqOr");
/* harmony import */ var _tipos_etapa_services_tipos_etapa_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../tipos-etapa/services/tipos-etapa.service */ "vGh7");
/* harmony import */ var _etapas_services_etapas_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../etapas/services/etapas.service */ "Tp9O");
/* harmony import */ var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/modules/confirm-modal/confirm-modal.service */ "FOez");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _services_circuitos_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/circuitos.service */ "yw/Z");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _cadastros_filiais_services_filiais_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../cadastros/filiais/services/filiais.service */ "NXOV");






// angular



// services



// rxjs


let LogisticaYmsCircuitosAssociacaoEtapasComponent = class LogisticaYmsCircuitosAssociacaoEtapasComponent {
    constructor(formBuilder, circuitosService, pnotify, activatedRoute, atividadesService, confirmModalService, etapasService, tiposEtapaService, filiaisService) {
        this.formBuilder = formBuilder;
        this.circuitosService = circuitosService;
        this.pnotify = pnotify;
        this.activatedRoute = activatedRoute;
        this.atividadesService = atividadesService;
        this.confirmModalService = confirmModalService;
        this.etapasService = etapasService;
        this.tiposEtapaService = tiposEtapaService;
        this.filiaisService = filiaisService;
        this.appTitle = "Associação Etapas";
        this.breadCrumbTree = [];
        /*loading*/
        this.loading = false;
        this.loadingNavBar = false;
        this.noResult = true;
        this.etapas = [];
        this.etapasLoading = false;
        this.loadingEtapas = false;
        this.loadingFilterEtapas = false;
        this.loadingTiposEtapa = false;
        this.etapasAssociadas = [];
        this.etapasAssociadasLoading = false;
        this.tableConfigEtapasAssociados = {
            fixedHeader: false,
            bodyHeight: 243,
            hover: false,
        };
        this.tableConfigEtapas = {
            fixedHeader: false,
            bodyHeight: 243,
        };
        this.toggle = {
            etapas: false,
            etapasAssociadas: false
        };
        this.form = this.formBuilder.group({
            "UUID_LOGI_YMS_CIRC": [{ value: null, disabled: true }],
            "NM_CIRC": [null],
        });
        this.formEtapas = this.formBuilder.group({
            UUID_LOGI_YMS_ETAP: [null],
            NM_ETAP: [null],
            UUID_LOGI_YMS_ETAP_TIPO: [null],
            NM_ETAP_TIPO: [null],
            UUID_LOGI_FILI: [null],
            NM_FILI: [null]
        });
    }
    ngOnInit() {
        this.atividadesService
            .registrarAcesso()
            .subscribe();
        this.onActivatedRoute();
        this.setBreadCrumb();
        this.getCircuitos();
        this.getTiposEtapa();
        this.getFilterEtapas();
    }
    getFilterEtapas(params) {
        const _params = params !== null && params !== void 0 ? params : {};
        _params.IN_STAT = 1;
        _params.IN_PAGI = 0;
        this.loadingFilterEtapas = true;
        this.etapasService
            .getEtapas(_params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(() => {
            this.loadingFilterEtapas = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.filterEtapas = response.body['data'];
            }
            else {
                this.pnotify.notice('Nenhum registro encontrado!');
            }
        }, (error) => {
            const message = error.error.message;
            message ? this.pnotify.error(message) : this.pnotify.error();
        });
    }
    getTiposEtapa() {
        this.loadingTiposEtapa = true;
        this.tiposEtapaService
            .getTiposEtapa({ IN_STAT: '1', IN_PAGI: '0' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(() => {
            this.loadingTiposEtapa = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.tiposEtapa = response.body['data'];
            }
            else {
                this.pnotify.notice('Nenhum registro encontrado!');
            }
        }, (error) => {
            const message = error.error.message;
            message ? this.pnotify.error(message) : this.pnotify.error();
        });
    }
    onActivatedRoute() {
        const params = this.activatedRoute.snapshot.params;
        if (!(params === null || params === void 0 ? void 0 : params.id)) {
            this.loading = false;
            return;
        }
        this.form.get('UUID_LOGI_YMS_CIRC').setValue(params['id']);
        this.getEtapasAssociados({ "UUID_LOGI_YMS_CIRC": params === null || params === void 0 ? void 0 : params.id });
    }
    setBreadCrumb() {
        const id = this.activatedRoute.snapshot.params.idSubModulo;
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
                descricao: 'Circuitos',
                routerLink: `../../`,
            },
            {
                descricao: this.appTitle
            }
        ];
    }
    getCircuitos() {
        this.loadingCircuitos = true;
        this.circuitosService
            .getCircuitos({ IN_STAT: '1', IN_PAGI: '0' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(() => {
            this.loadingCircuitos = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.circuitos = response.body['data'];
            }
            else {
                this.pnotify.notice('Nenhum registro encontrado!');
            }
        });
    }
    getEtapas() {
        var _a;
        let params = (_a = {}) !== null && _a !== void 0 ? _a : this.formEtapas.value;
        params.IN_STAT = 1;
        params.IN_PAGI = 0;
        this.etapasLoading = true;
        this.circuitosService
            .getEtapas(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(() => {
            this.etapasLoading = false;
        }))
            .subscribe(response => {
            let etapas = response.body['data'];
            console.log(etapas);
            this.etapas = etapas.filter(etapa => {
                return !this.etapasAssociadas.some(item => item.UUID_LOGI_YMS_ETAP == etapa.ID);
            });
            this.tableConfigEtapas.fixedHeader = this.etapas.length > 9 ? true : false;
        });
    }
    getEtapasAssociados(params) {
        this.loadingEtapas = true;
        params.IN_STAT = '1';
        params.IN_PAGI = '0';
        params.ORDE_BY = 'ID_REFE_ERP';
        this.circuitosService
            .getEtapasAssociados(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(() => {
            this.loadingEtapas = false;
        }))
            .subscribe(response => {
            if (response.status !== 200) {
                return;
            }
            this.etapasAssociadas = response.body['data'];
            this.tableConfigEtapasAssociados.fixedHeader = this.etapasAssociadas.length > 9 ? true : false;
        });
    }
    onAssociarEtapas() {
        let etapas = this.etapas.filter(etapa => etapa.checked && etapa.NR_SQNC != null);
        console.log(etapas);
        this.toggle.etapas = false;
        etapas.map(item => {
            var _a, _b, _c;
            item.loading = true;
            if (this.etapasAssociadas.some(etapa => (etapa === null || etapa === void 0 ? void 0 : etapa.UUID_LOGI_YMS_ETAP) === item.UUID_LOGI_YMS_ETAP)) {
                return;
            }
            let params = {
                "UUID_LOGI_YMS_CIRC": (_a = this.form.get("UUID_LOGI_YMS_CIRC").value) !== null && _a !== void 0 ? _a : "",
                "UUID_LOGI_YMS_ETAP": (_b = item === null || item === void 0 ? void 0 : item.UUID_LOGI_YMS_ETAP) !== null && _b !== void 0 ? _b : "",
                "IN_STAT": "1",
                "NR_SQNC": (_c = item === null || item === void 0 ? void 0 : item.NR_SQNC) !== null && _c !== void 0 ? _c : "",
            };
            this.circuitosService
                .postEtapasAssociados(params)
                .subscribe(response => {
                if (response.status === 200) {
                    this.etapasAssociadas = [...this.etapasAssociadas, Object.assign(Object.assign({}, item), { checked: false, NR_SQNC: item.NR_SQNC, NM_ETAP: item.NM_ETAP, NM_FILI: item.NM_FILI, NM_ETAP_TIPO: item.NM_ETAP_TIPO, loading: false, UUID_LOGI_YMS_ETAP: item.UUID_LOGI_YMS_ETAP, UUID_LOGI_YMS_CIRC: this.form.get('UUID_LOGI_YMS_CIRC').value })];
                    console.log(this.etapasAssociadas);
                    this.etapas = this.etapas.filter(etapa => !etapa.checked);
                    this.tableConfigEtapasAssociados.fixedHeader = this.etapasAssociadas.length > 9 ? true : false;
                }
            });
        });
    }
    confirmDelete() {
        return this.confirmModalService.showConfirm('delete', 'Confirmar exclusão', 'Deseja realmente prosseguir com a exclusão do registro?', 'Cancelar', 'Confirmar');
    }
    onRemoverAssociacao(etapa) {
        let etapas = etapa ? [etapa] : this.etapasAssociadas.filter(etapa => etapa.checked);
        console.log(etapas);
        this.toggle.etapasAssociadas = false;
        if (etapas.length == 0) {
            this.pnotify.notice("Nenhum etapa selecionado.");
            return;
        }
        this.confirmDelete()
            .subscribe((response) => {
            if (!response) {
                return;
            }
            etapas.map(item => {
                item.IN_STAT = '0';
                item.loading = true;
                this.circuitosService
                    .deleteAssociacoes(item)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(() => {
                    item.loading = false;
                }))
                    .subscribe(response => {
                    if (response.status !== 200) {
                        return;
                    }
                    this.etapasAssociadas = this.etapasAssociadas
                        .filter(etapa => etapa.UUID_LOGI_YMS_ETAP != item.UUID_LOGI_YMS_ETAP);
                    this.tableConfigEtapasAssociados.fixedHeader = this.etapasAssociadas.length > 9 ? true : false;
                });
                (error) => {
                    const message = error.error.message;
                    message ? this.pnotify.error(message) : this.pnotify.error();
                };
            });
        });
    }
    onToggleAll(item) {
        console.log(item);
        this.toggle[item] = !this.toggle[item];
        this[item].map(etapa => etapa.checked = this.toggle[item]);
    }
    // Validação de formulário
    onFieldError(field) {
        if (this.onFieldInvalid(field)) {
            return 'is-invalid';
        }
        return '';
    }
    onFieldInvalid(field) {
        field = this.formEtapas.get(field);
        return field.status == 'INVALID' && field.touched;
    }
    onFieldRequired(field) {
        let required = false;
        let formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]();
        if (this.formEtapas.controls[field].validator) {
            let validationResult = this.formEtapas.controls[field].validator(formControl);
            required =
                validationResult !== null && validationResult.required === true;
        }
        if (required) {
            return 'is-required';
        }
    }
    setValidacao(event) {
        console.log(event);
    }
};
LogisticaYmsCircuitosAssociacaoEtapasComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
    { type: _services_circuitos_service__WEBPACK_IMPORTED_MODULE_9__["LogisticaYmsCircuitosService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__["AtividadesService"] },
    { type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_5__["ConfirmModalService"] },
    { type: _etapas_services_etapas_service__WEBPACK_IMPORTED_MODULE_4__["LogisticaYmsEtapasService"] },
    { type: _tipos_etapa_services_tipos_etapa_service__WEBPACK_IMPORTED_MODULE_3__["LogisticaYmsTiposEtapaService"] },
    { type: _cadastros_filiais_services_filiais_service__WEBPACK_IMPORTED_MODULE_13__["LogisticaFiliaisService"] }
];
LogisticaYmsCircuitosAssociacaoEtapasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'logistica-circuitos-associacao-etapas',
        template: _raw_loader_associacao_etapas_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_associacao_etapas_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
        _services_circuitos_service__WEBPACK_IMPORTED_MODULE_9__["LogisticaYmsCircuitosService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__["AtividadesService"],
        src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_5__["ConfirmModalService"],
        _etapas_services_etapas_service__WEBPACK_IMPORTED_MODULE_4__["LogisticaYmsEtapasService"],
        _tipos_etapa_services_tipos_etapa_service__WEBPACK_IMPORTED_MODULE_3__["LogisticaYmsTiposEtapaService"],
        _cadastros_filiais_services_filiais_service__WEBPACK_IMPORTED_MODULE_13__["LogisticaFiliaisService"]])
], LogisticaYmsCircuitosAssociacaoEtapasComponent);



/***/ }),

/***/ "phsi":
/*!**************************************************************************!*\
  !*** ./src/app/modules/logistica/yms/circuitos/lista/lista.component.ts ***!
  \**************************************************************************/
/*! exports provided: LogisticaYmsCircuitosListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaYmsCircuitosListaComponent", function() { return LogisticaYmsCircuitosListaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lista.component.html */ "cjCp");
/* harmony import */ var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lista.component.scss */ "t34c");
/* harmony import */ var _cadastros_filiais_services_filiais_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../cadastros/filiais/services/filiais.service */ "NXOV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../../../shared/modules/confirm-modal/confirm-modal.service */ "FOez");
/* harmony import */ var _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../../../../shared/templates/detail-panel/detal-panel.service */ "gIxL");
/* harmony import */ var _services_circuitos_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/circuitos.service */ "yw/Z");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/modules/xlsx/xlsx.service */ "eOmW");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ "qCKp");




//angular



//servicos







// rxjs


let LogisticaYmsCircuitosListaComponent = class LogisticaYmsCircuitosListaComponent {
    /* Pagination */
    constructor(route, pnotify, formBuilder, xlsxService, dateService, routerService, activatedRoute, detailPanelService, confirmModalService, circuitosService, filiaisService) {
        this.route = route;
        this.pnotify = pnotify;
        this.formBuilder = formBuilder;
        this.xlsxService = xlsxService;
        this.dateService = dateService;
        this.routerService = routerService;
        this.activatedRoute = activatedRoute;
        this.detailPanelService = detailPanelService;
        this.confirmModalService = confirmModalService;
        this.circuitosService = circuitosService;
        this.filiaisService = filiaisService;
        this.showDetailPanel = false;
        //LOADINGS
        this.loading = true;
        this.loadingNavBar = false;
        this.totalItens = [];
        // CUSTOM TABLE
        this.tableConfig = {
            subtitleBorder: true,
        };
        this.tableConfigAssocEtapas = {
            fixedHeader: false,
            bodyHeight: 230,
            hover: false,
        };
        // Tipos de Situação dos Circuitos (Ativo/Inativo)
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
        this.getFilterCircuitos();
        this.getFiliais();
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
            this.getCircuitos(this.getParams());
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
            UUID_LOGI_YMS_CIRC: [null],
            UUID_LOGI_FILI: [null],
            NM_CIRC: [null],
            IN_STAT: [null],
            DS_OBSE: [null],
            NR_MATR: [null],
            NM_USUA: [null],
            DT_INCL: [null],
            DT_ATUA: [null],
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
                descricao: 'YMS',
                routerLink: `/logistica/yms/${id}`,
            },
            {
                descricao: 'Circuitos',
            },
        ];
    }
    getFiliais() {
        this.loadingFiliais = true;
        this.filiaisService
            .getFiliais({ IN_STAT: '1', IN_PAGI: '0', IN_YMS: 1 })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(() => {
            this.loadingFiliais = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.filiais = response.body['data'];
            }
            else {
                this.filiais = [];
                this.pnotify.notice('Nenhuma filial encontrada!');
            }
        }, (error) => {
            const message = error.error.message;
            message ? this.pnotify.error(message) : this.pnotify.error();
        });
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
    onDetails(circuitos) {
        this.getEtapasAssociados({ UUID_LOGI_YMS_CIRC: circuitos.UUID_LOGI_YMS_CIRC });
        this.detailPanelService.show();
        this.circuitoSelecionado = circuitos;
        this.detailPanelService.loadedFinished(false);
    }
    getEtapasAssociados(params) {
        this.loadingAssociacaoEtapas = true;
        params.IN_STAT = '1';
        params.IN_PAGI = '0';
        console.log(params);
        this.circuitosService
            .getEtapasAssociados(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(() => {
            this.loadingAssociacaoEtapas = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.associacaoEtapas = response.body['data'];
                if (this.associacaoEtapas.length > 9) {
                    this.tableConfigAssocEtapas.fixedHeader = true;
                }
                this.noAssocEtapas = false;
            }
            else {
                this.pnotify.notice('Nenhuma associação encontrada!');
                this.noAssocEtapas = true;
                this.associacaoEtapas = [];
            }
        }, (error) => {
            this.pnotify.error();
        });
    }
    getCircuitos(params) {
        if (!this.loading)
            this.loadingNavBar = true;
        this.circuitosService
            .getCircuitos(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(() => {
            this.loading = false;
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.circuitos = response.body['data'];
                this.totalItems = response.body['total'];
                this.noResult = false;
            }
            else {
                this.noResult = true;
                this.circuitos = [];
            }
        }, (error) => {
            this.pnotify.error();
            this.noResult = true;
        });
    }
    getFilterCircuitos() {
        this.loadingCircuitos = true;
        this.circuitosService
            .getCircuitos({ IN_STAT: '1', IN_PAGI: '0' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(() => {
            this.loadingCircuitos = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.filterCircuitos = response.body['data'];
            }
            else {
                this.pnotify.notice('Nenhum registro encontrado!');
            }
        });
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
    classStatusBorder(circuitos) {
        let borderClass;
        if (circuitos.IN_STAT == 1) {
            borderClass = 'border-success';
        }
        else if (circuitos.IN_STAT == 2) {
            borderClass = 'border-danger';
        }
        return borderClass;
    }
    changeType(params) {
        const stat = params.IN_STAT == 1 ? 0 : 1;
        this.confirmChange(stat)
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["switchMap"])((result) => {
            if (!result)
                return rxjs__WEBPACK_IMPORTED_MODULE_15__["EMPTY"];
            this.loadingNavBar = true;
            params.IN_STAT = stat;
            return this.circuitosService.postCircuitos(params);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(() => {
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
        listagemExport = this.circuitos.concat(this.totalItens);
        this.xlsxService.exportFile(listagemExport, `Circuitos${dataExport}`);
    }
};
LogisticaYmsCircuitosListaComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_12__["XlsxService"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_13__["DateService"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_11__["RouterService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_9__["DetailPanelService"] },
    { type: _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_8__["ConfirmModalService"] },
    { type: _services_circuitos_service__WEBPACK_IMPORTED_MODULE_10__["LogisticaYmsCircuitosService"] },
    { type: _cadastros_filiais_services_filiais_service__WEBPACK_IMPORTED_MODULE_3__["LogisticaFiliaisService"] }
];
LogisticaYmsCircuitosListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'logistica-yms-circuitos-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
        src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_12__["XlsxService"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_13__["DateService"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_11__["RouterService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_9__["DetailPanelService"],
        _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_8__["ConfirmModalService"],
        _services_circuitos_service__WEBPACK_IMPORTED_MODULE_10__["LogisticaYmsCircuitosService"],
        _cadastros_filiais_services_filiais_service__WEBPACK_IMPORTED_MODULE_3__["LogisticaFiliaisService"]])
], LogisticaYmsCircuitosListaComponent);



/***/ }),

/***/ "rrWp":
/*!*********************************************************************!*\
  !*** ./src/app/modules/logistica/yms/circuitos/circuitos.module.ts ***!
  \*********************************************************************/
/*! exports provided: LogisticaYmsCircuitosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaYmsCircuitosModule", function() { return LogisticaYmsCircuitosModule; });
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
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lista/lista.component */ "phsi");
/* harmony import */ var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./cadastro/cadastro.component */ "cRG+");
/* harmony import */ var _circuitos_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./circuitos-routing.module */ "40h2");
/* harmony import */ var _associacao_etapas_associacao_etapas_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./associacao-etapas/associacao-etapas.component */ "ig/f");
















let LogisticaYmsCircuitosModule = class LogisticaYmsCircuitosModule {
};
LogisticaYmsCircuitosModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _lista_lista_component__WEBPACK_IMPORTED_MODULE_12__["LogisticaYmsCircuitosListaComponent"],
            _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_13__["LogisticaYmsCircuitosCadastroComponent"],
            _associacao_etapas_associacao_etapas_component__WEBPACK_IMPORTED_MODULE_15__["LogisticaYmsCircuitosAssociacaoEtapasComponent"]
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
            _circuitos_routing_module__WEBPACK_IMPORTED_MODULE_14__["LogisticaYmsCircuitosRoutingModule"]
        ]
    })
], LogisticaYmsCircuitosModule);



/***/ }),

/***/ "t34c":
/*!****************************************************************************!*\
  !*** ./src/app/modules/logistica/yms/circuitos/lista/lista.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL3ltcy9jaXJjdWl0b3MvbGlzdGEvbGlzdGEuY29tcG9uZW50LnNjc3MifQ== */");

/***/ })

}]);
//# sourceMappingURL=circuitos-circuitos-module-es2015.js.map