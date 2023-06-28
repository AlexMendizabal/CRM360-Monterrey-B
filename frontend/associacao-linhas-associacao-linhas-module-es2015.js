(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["associacao-linhas-associacao-linhas-module"],{

/***/ "9jTo":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/cadastros/associacao-linhas/formulario/formulario.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<app-header [appTitle]=\"appTitle\">\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onCancel()\"\r\n    [disabled]=\"submittingForm\">\r\n    Cancelar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onSubmit()\">\r\n    Salvar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6\">\r\n      <form [formGroup]=\"form\">\r\n        <div class=\"mtc-title\">Dados da Linha</div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col\">\r\n            <label for=\"NM_LINH\">Nome Linha</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"NM_LINH\"\r\n              formControlName=\"NM_LINH\"\r\n              autocomplete=\"new-password\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"col\">\r\n            <hr>\r\n          </div>\r\n        </div>\r\n        <div formArrayName=\"assocSetores\">\r\n          <div class=\"row mb-2\">\r\n            <div class=\"col mt-auto\">\r\n              <div class=\"mtc-title mb-0\">Setores associados a linha</div>\r\n            </div>\r\n            <div class=\"col\">\r\n              <div class=\"d-flex justify-content-end\">\r\n                <button\r\n                  type=\"button\"\r\n                  class=\"btn btn-sm btn-outline-danger\"\r\n                  (click)=\"onLimparAssociacoes()\">\r\n                  <i class=\"fas fa-trash\"></i>\r\n                  <span>Limpar</span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\" *ngIf=\"showSetores && form.value.assocSetores.length > 0\">\r\n            <div class=\"col\">\r\n              <custom-table [config]=\"tableConfigAssocSetores\">\r\n                <ng-template #thead let-thead>\r\n                  <tr>\r\n                    <th scope=\"col\" style=\"width: 95%\">Setor</th>\r\n                    <th scope=\"col\" style=\"width: 5%\"></th>\r\n                  </tr>\r\n                </ng-template>\r\n                <ng-template #tbody let-tbody>\r\n                  <tr *ngFor=\"let setor of assocSetores.controls; let i = index\" [formGroupName]=\"i\">\r\n                    <td style=\"width: 95%\">\r\n                      {{ form.value.assocSetores[i].ID_SETO_ATIV }} - {{ form.value.assocSetores[i].DESCRICAO | uppercase }}\r\n                    </td>\r\n                    <td class=\"text-center\" style=\"width: 5%\">\r\n                      <btn-icon\r\n                        icon=\"fas fa-trash\"\r\n                        size=\"small\"\r\n                        (click)=\"onDeleteSetor(i)\">\r\n                      </btn-icon>\r\n                    </td>\r\n                  </tr>\r\n                </ng-template>\r\n              </custom-table>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\" *ngIf=\"showSetores && form.value.assocSetores.length === 0\">\r\n            <div class=\"col\">\r\n              <message\r\n                icon=\"fas fa-exchange-alt\"\r\n                text=\"Nenhuma associação encontrada\">\r\n              </message>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <div class=\"col-lg-6 border-left\">\r\n      <div class=\"row mb-2\">\r\n        <div class=\"col mt-auto\">\r\n          <div class=\"mtc-title mb-0\">Pesquisa de setores</div>\r\n        </div>\r\n        <div class=\"col\">\r\n          <div class=\"d-flex justify-content-end\">\r\n            <button\r\n              type=\"button\"\r\n              class=\"btn btn-sm btn-outline-secondary\"\r\n              (click)=\"onFilterSetores()\">\r\n              <i class=\"fas fa-search\"></i>\r\n              <span>Pesquisar</span>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <advanced-filter>\r\n        <form [formGroup]=\"formSetores\" autocomplete=\"off\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col\">\r\n              <label for=\"setoresFilter\">Sector empresarial</label>\r\n              <ng-select\r\n                [searchable]=\"true\"\r\n                [clearable]=\"true\"\r\n                [items]=\"setoresFilter\"\r\n                [virtualScroll]=\"true\"\r\n                dropdownPosition=\"bottom\"\r\n                placeholder=\"Selecione...\"\r\n                [loading]=\"setoresFilterLoaded\"\r\n                labelForId=\"ID_SETO_ATIV\"\r\n                bindLabel=\"DESCRICAO\"\r\n                bindValue=\"ID_SETO_ATIV\"\r\n                id=\"ID_SETO_ATIV\"\r\n                formControlName=\"ID_SETO_ATIV\"\r\n                >\r\n              </ng-select>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </advanced-filter>\r\n      <div *ngIf=\"setoresLista.length > 0\">\r\n        <div class=\"row mb-2\">\r\n          <div class=\"col mt-auto\">\r\n            <div class=\"mtc-title mb-0\">Seleção de setores</div>\r\n          </div>\r\n          <div class=\"col\">\r\n            <div class=\"d-flex justify-content-end\">\r\n              <button\r\n                type=\"button\"\r\n                class=\"btn btn-sm btn-outline-primary\"\r\n                (click)=\"onAssociarSetores()\"\r\n                [disabled]=\"searching === true\">\r\n                <i class=\"fas fa-exchange-alt\"></i>\r\n                <span>Associar</span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n            <custom-table [config]=\"tableConfigSetores\">\r\n              <ng-template #thead let-thead>\r\n                <tr>\r\n                  <th\r\n                    scope=\"col\"\r\n                    class=\"text-center\"\r\n                    style=\"width: 5%\">\r\n                    <btn-icon\r\n                      [icon]=\"toggleAll ? 'fas fa-check-square' : 'far fa-square'\"\r\n                      size=\"small\"\r\n                      (click)=\"onToggleAll()\">\r\n                    </btn-icon>\r\n                  </th>\r\n                  <th scope=\"col\" style=\"width: 95%\">Setor de Atividade</th>\r\n                </tr>\r\n              </ng-template>\r\n              <ng-template #tbody let-tbody>\r\n                <tr *ngFor=\"let setor of setoresLista; let i = index;\">\r\n                  <td class=\"text-center\" style=\"width: 5%\">\r\n                    <btn-icon\r\n                      [icon]=\"setor.checked == 1 ? 'fas fa-check-square' : 'far fa-square'\"\r\n                      size=\"small\"\r\n                      (click)=\"onCheckSetor(i, setor)\">\r\n                    </btn-icon>\r\n                  </td>\r\n                  <td\r\n                    class=\"hover\"\r\n                    style=\"width: 95%\"\r\n                    (click)=\"onCheckSetor(i, setor)\">\r\n                    {{ setor.DESCRICAO | uppercase }}\r\n                  </td>\r\n                </tr>\r\n              </ng-template>\r\n            </custom-table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\" *ngIf=\"searching === true\">\r\n        <div class=\"col\">\r\n          <message\r\n            icon=\"fas fa-cog fa-spin\"\r\n            text=\"Estamos pesquisando os setores para você...\">\r\n          </message>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"searching === false\">\r\n        <div class=\"row\" *ngIf=\"setoresListaEmpty && setoresListaLoaded\">\r\n          <div class=\"col\">\r\n            <message\r\n              icon=\"fas fa-box-open\"\r\n              text=\"Nenhuma informação encontrada\">\r\n            </message>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\" *ngIf=\"setoresLista.length === 0 && !firstSearch\">\r\n          <div class=\"col\">\r\n            <message\r\n              icon=\"fas fa-search\"\r\n              text=\"Preecha o campo acima para filtrar o setor\">\r\n            </message>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</app-body>\r\n");

/***/ }),

/***/ "DMlZ":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/associacao-linhas/lista/lista.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NhZGFzdHJvcy9hc3NvY2lhY2FvLWxpbmhhcy9saXN0YS9saXN0YS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "EIwY":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/cadastros/associacao-linhas/lista/lista.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<app-header appTitle=\"Linhas\">\r\n  <!-- <button\r\n    type=\"button\"\r\n    [routerLink]=\"['../novo']\">\r\n    Adicionar\r\n  </button> -->\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onFilter()\">\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <div class=\"row\" #scrollToFilter>\r\n    <div class=\"col\">\r\n      <advanced-filter>\r\n        <form [formGroup]=\"form\" autocomplete=\"off\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-4\">\r\n              <label for=\"linhas\">Linha</label>\r\n              <ng-select\r\n                [searchable]=\"true\"\r\n                [clearable]=\"true\"\r\n                [items]=\"linhas\"\r\n                [virtualScroll]=\"true\"\r\n                dropdownPosition=\"bottom\"\r\n                placeholder=\"Selecione...\"\r\n                [loading]=\"linhasLoaded\"\r\n                labelForId=\"ID_LINH\"\r\n                bindLabel=\"NM_LINH\"\r\n                bindValue=\"ID_LINH\"\r\n                id=\"ID_LINH\"\r\n                formControlName=\"ID_LINH\"\r\n                >\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"form-group col-lg-2\">\r\n              <label for=\"registros\">Registros</label>\r\n              <select\r\n                class=\"form-control\"\r\n                id=\"registros\"\r\n                formControlName=\"registros\">\r\n                <option>25</option>\r\n                <option>50</option>\r\n                <option>100</option>\r\n                <option>200</option>\r\n                <option>300</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </advanced-filter>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div [ngClass]=\"{'col': !showDetailPanel, 'col-5 pr-0': showDetailPanel}\">\r\n      <custom-table *ngIf=\"dadosPagination.length > 0 && !dadosEmpty\">\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n            <th scope=\"col\" class=\"text-center hover\">Código</th>\r\n            <th scope=\"col\" class=\"hover\">Nome da Linha</th>\r\n            <th style=\"width:40px\"[hidden]=\"showDetailPanel\"></th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let linha of dadosPagination; let i = index;\" [class.table-active]=\"linha.ID_LINH == linhaSelecionada.ID_LINH && showDetailPanel\">\r\n            <td\r\n              class=\"text-center hover\"\r\n              (click)=\"onDetails(linha)\">\r\n              {{ linha.ID_LINH }}\r\n            </td>\r\n            <td\r\n              class=\"hover\"\r\n              (click)=\"onDetails(linha)\">\r\n              {{ linha.NM_LINH | uppercase }}\r\n            </td>\r\n            <td class=\"align-middle\" [hidden]=\"showDetailPanel\">\r\n              <span class=\"mr-3\" tooltip=\"Editar\" placement=\"left\" container=\"body\">\r\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onEdit(linha)\">\r\n                  <i class=\"fas fa-edit\"></i>\r\n                </button>\r\n              </span>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n      <empty-result message=\"Nenhuma informação encontrada\" *ngIf=\"dadosEmpty && dadosLoaded\"></empty-result>\r\n      <div class=\"d-flex justify-content-center mt-3\" *ngIf=\"totalItems > itemsPerPage && !loaderNavbar\">\r\n        <pagination\r\n          [maxSize]=\"maxSize\"\r\n          [(totalItems)]=\"totalItems\"\r\n          (pageChanged)=\"onPageChanged($event)\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPage\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\">\r\n        </pagination>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-7\" [hidden]=\"!showDetailPanel\">\r\n      <detail-panel [panelTitle]=\"detailPanelTitle\">\r\n        <custom-table [config]=\"tableConfigSetores\" *ngIf=\"setores.length > 0\">\r\n          <ng-template #thead let-thead>\r\n            <tr>\r\n              <th scope=\"col\" class=\"text-center\">Código</th>\r\n              <th scope=\"col\">Sector empresarial</th>\r\n              <th scope=\"col\" class=\"text-center\">Data de Alteração</th>\r\n            </tr>\r\n          </ng-template>\r\n          <ng-template #tbody let-tbody>\r\n            <tr *ngFor=\"let setor of setores\">\r\n              <td class=\"text-center\">{{ setor.ID_SETO_ATIV }}</td>\r\n              <td>{{ setor.DESCRICAO | uppercase }}</td>\r\n              <td class=\"text-center\">{{ setor.DT_INCL | date : 'dd/MM/yyyy'}}</td>\r\n            </tr>\r\n          </ng-template>\r\n        </custom-table>\r\n      </detail-panel>\r\n    </div>\r\n  </div>\r\n</app-body>\r\n");

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

/***/ "GYTr":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/associacao-linhas/formulario/formulario-resolver.guard.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ComercialCadastrosAssociacaoLinhasFormularioResolverGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCadastrosAssociacaoLinhasFormularioResolverGuard", function() { return ComercialCadastrosAssociacaoLinhasFormularioResolverGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _associacao_linhas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../associacao-linhas.service */ "LreX");



// Services

let ComercialCadastrosAssociacaoLinhasFormularioResolverGuard = class ComercialCadastrosAssociacaoLinhasFormularioResolverGuard {
    constructor(associacaoLinhasService) {
        this.associacaoLinhasService = associacaoLinhasService;
    }
    resolve(route) {
        if (route.params && route.params.id) {
            return this.associacaoLinhasService.getDetalhes({
                ID_LINH: route.params.id,
                IN_STAT: 1,
            });
        }
        // É implementado o método "of" para manter a tipagem de retorno com Observable.
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
            success: true,
            mensagem: null,
            data: {
                ID_LINH: null,
                NM_LINH: null,
                setores: [],
            },
        });
    }
};
ComercialCadastrosAssociacaoLinhasFormularioResolverGuard.ctorParameters = () => [
    { type: _associacao_linhas_service__WEBPACK_IMPORTED_MODULE_3__["ComercialCadastrosAssociacaoLinhasService"] }
];
ComercialCadastrosAssociacaoLinhasFormularioResolverGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_associacao_linhas_service__WEBPACK_IMPORTED_MODULE_3__["ComercialCadastrosAssociacaoLinhasService"]])
], ComercialCadastrosAssociacaoLinhasFormularioResolverGuard);



/***/ }),

/***/ "Ufyz":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/associacao-linhas/formulario/formulario.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: ComercialCadastrosAssociacaoLinhasFormularioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCadastrosAssociacaoLinhasFormularioComponent", function() { return ComercialCadastrosAssociacaoLinhasFormularioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./formulario.component.html */ "9jTo");
/* harmony import */ var _formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formulario.component.scss */ "chld");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ng_brazil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-brazil */ "hTrW");
/* harmony import */ var _associacao_linhas_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../associacao-linhas.service */ "LreX");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");
/* harmony import */ var src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/modules/comercial/comercial.service */ "VgqD");
/* harmony import */ var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/modules/confirm-modal/confirm-modal.service */ "FOez");








// ng-brazil

// Services






let ComercialCadastrosAssociacaoLinhasFormularioComponent = class ComercialCadastrosAssociacaoLinhasFormularioComponent {
    constructor(activatedRoute, router, location, formBuilder, setoresLinhaService, pnotifyService, atividadesService, titleService, comercialService, confirmModalService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.location = location;
        this.formBuilder = formBuilder;
        this.setoresLinhaService = setoresLinhaService;
        this.pnotifyService = pnotifyService;
        this.atividadesService = atividadesService;
        this.titleService = titleService;
        this.comercialService = comercialService;
        this.confirmModalService = confirmModalService;
        this.MASKS = ng_brazil__WEBPACK_IMPORTED_MODULE_8__["MASKS"];
        this.loaderFullScreen = true;
        this.breadCrumbTree = [];
        this.tableConfigAssocSetores = {
            fixedHeader: false,
            bodyHeight: 230,
            hover: false,
        };
        this.tableConfigSetores = {
            fixedHeader: false,
            bodyHeight: 243,
        };
        this.codLinha = null;
        this.formChanged = false;
        this.showSetores = true;
        this.linhas = [];
        this.classes = [];
        this.filteredClasses = [];
        this.setores = [];
        this.setoresFilter = [];
        this.toggleAll = false;
        this.searching = false;
        this.firstSearch = false;
        this.setoresFilterLoaded = false;
        this.setoresLista = [];
        this.setoresListaLoaded = false;
        this.setoresListaEmpty = false;
        this.pnotifyService.getPNotify();
    }
    ngOnInit() {
        this.registrarAcesso();
        this.setBreadCrumb();
        this.setFormBuilder();
        this.getSetores();
        this.getSetoresFilter();
        this.setFormSetores();
        this.titleService.setTitle('Cadastro de linha de setores');
    }
    registrarAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
    }
    setBreadCrumb() {
        this.activatedRoute.params.subscribe((params) => {
            if (params.id) {
                this.appTitle = 'Editar Linha';
            }
            else {
                this.appTitle = 'Nova Linha';
            }
            this.breadCrumbTree = [
                {
                    descricao: 'Home',
                    routerLink: '/comercial/home',
                },
                {
                    descricao: 'Cadastros',
                    routerLink: `/comercial/cadastros/${params.idSubModulo}`,
                },
                {
                    descricao: 'Linhas',
                    routerLink: `/comercial/cadastros/${params.idSubModulo}/associacao-linhas/lista`,
                },
                {
                    descricao: this.appTitle,
                },
            ];
        });
    }
    setFormBuilder() {
        const resolver = this.activatedRoute.snapshot.data.detalhes;
        console.log(resolver);
        if (resolver.body.success === true) {
            const detalhes = resolver.body.data[0];
            const setoresAssociados = resolver.body.data;
            this.form = this.formBuilder.group({
                ID_LINH: [detalhes.ID_LINH],
                NM_LINH: [{ value: [detalhes.NM_LINH], disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                assocSetores: this.formBuilder.array([]),
            });
            this.setSetores(setoresAssociados);
        }
        else {
            this.pnotifyService.error();
            this.location.back();
        }
    }
    setFormSetores() {
        this.formSetores = this.formBuilder.group({
            ID_SETO_ATIV: [null],
        });
    }
    setSetores(setores) {
        if (setores.length > 0) {
            for (let i = 0; i < setores.length; i++) {
                this.onAddSetor(setores[i]);
            }
        }
    }
    get assocSetores() {
        return this.form.get('assocSetores');
    }
    getSetoresFilter(params) {
        this.setoresFilterLoaded = true;
        this.setoresLinhaService
            .getSetoresFilter()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.setoresFilterLoaded = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.setoresFilter = response.body['data'];
            }
        });
    }
    onAddSetor(setor, manipulateForm) {
        if (this.checkSetorExists(setor) === false) {
            this.assocSetores.push(this.formBuilder.group({
                ID_SETO_ATIV: [setor.ID_SETO_ATIV],
                DESCRICAO: [setor.DESCRICAO],
                ID: [setor.ID],
            }));
            if (this.form.value.assocSetores.length > 9) {
                if (this.tableConfigAssocSetores.fixedHeader === false) {
                    this.showSetores = false;
                    this.tableConfigAssocSetores.fixedHeader = true;
                    setTimeout(() => {
                        this.showSetores = true;
                    }, 1);
                }
                if (manipulateForm) {
                    this.form.markAsTouched();
                    this.form.markAsDirty();
                }
            }
        }
    }
    checkSetorExists(setor) {
        return this.form.value.assocSetores.some((el) => {
            return el.ID_SETO_ATIV === setor.ID_SETO_ATIV;
        });
    }
    onLimparAssociacoes() {
        const assocSetores = this.form.get('assocSetores');
        assocSetores.clear();
    }
    onDeleteSetor(index) {
        this.confirmDelete().subscribe((response) => response ? this.deleteSetor(index) : null);
    }
    confirmDelete() {
        return this.confirmModalService.showConfirm('delete', 'Confirmar exclusão', 'Deseja realmente prosseguir com a exclusão do registro?', 'Cancelar', 'Confirmar');
    }
    deleteSetor(index) {
        this.assocSetores.removeAt(index);
        this.form.markAsTouched();
        this.form.markAsDirty();
    }
    getSetores() {
        this.setoresLinhaService
            .getSetores()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.loaderFullScreen = false;
            this.setoresLoader = false;
        }))
            .subscribe({
            next: (response) => {
                this.loaderFullScreen = false;
                if (response.status === 200) {
                    this.setores = response.body['data'];
                }
            },
            error: (error) => {
                if (error.error.hasOwnProperty('mensagem')) {
                    this.pnotifyService.error(error.error.mensagem);
                }
                else {
                    this.pnotifyService.error();
                }
            }
        });
    }
    onFilterSetores() {
        if (this.formSetores.valid) {
            this.loaderNavbar = true;
            this.searching = true;
            this.setoresLista = [];
            this.setoresListaLoaded = false;
            this.setoresListaEmpty = false;
            let params;
            if (this.formSetores.value.ID_SETO_ATIV) {
                params = { ID_SETO_ATIV: this.formSetores.value.ID_SETO_ATIV };
            }
            else {
                params = { ID_SETO_ATIV: '' };
            }
            this.setoresLinhaService
                .getSetores(params)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
                this.firstSearch = true;
                this.searching = false;
                this.loaderNavbar = false;
                this.setoresListaLoaded = true;
            }))
                .subscribe({
                next: (response) => {
                    if (response.hasOwnProperty('success') &&
                        response.success === true) {
                        this.setoresLista = response.data.map(function (el) {
                            var o = Object.assign({}, el);
                            o.checked = 0;
                            return o;
                        });
                        if (this.setoresLista.length > 9) {
                            this.tableConfigSetores.fixedHeader = true;
                        }
                        else {
                            this.tableConfigSetores.fixedHeader = false;
                        }
                    }
                    else if (response.hasOwnProperty('success') &&
                        response.success === false &&
                        response.hasOwnProperty('mensagem')) {
                        this.pnotifyService.error(response.mensagem);
                        this.setoresListaEmpty = true;
                    }
                    else {
                        this.pnotifyService.error();
                        this.setoresListaEmpty = true;
                    }
                },
                error: (error) => {
                    if (error['error'].hasOwnProperty('mensagem')) {
                        this.pnotifyService.error(error.error.mensagem);
                    }
                    else {
                        if (this.formSetores.value.ID_SETO_ATIV) {
                            this.pnotifyService.notice('Setor pesquisado não está disponivel para associação');
                        }
                        else {
                            this.pnotifyService.error();
                        }
                    }
                }
            });
        }
    }
    onToggleAll() {
        this.toggleAll = !this.toggleAll;
        for (let index = 0; index < this.setoresLista.length; index++) {
            this.setoresLista[index].checked = this.toggleAll === true ? 1 : 0;
        }
    }
    onCheckSetor(index, setor) {
        this.setoresLista[index].checked = setor.checked == 0 ? 1 : 0;
    }
    onAssociarSetores() {
        this.toggleAll = false;
        for (let index = 0; index < this.setoresLista.length; index++) {
            if (this.setoresLista[index].checked === 1) {
                const setor = {
                    ID_SETO_ATIV: this.setoresLista[index].ID_SETO_ATIV,
                    DESCRICAO: this.setoresLista[index].DESCRICAO,
                };
                this.onAddSetor(setor, true);
                this.setoresLista[index].checked = 0;
            }
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
    onFieldRequired(abstractControl, abstractControlField) {
        if (abstractControl.validator) {
            const validator = abstractControl.validator({});
            if (validator && validator.required) {
                return 'is-required';
            }
        }
        if (abstractControlField) {
            for (const controlName in abstractControl['controls']) {
                if (abstractControl['controls'][controlName]) {
                    if (this.onFieldRequired(abstractControl['controls'][controlName]) &&
                        controlName == abstractControlField) {
                        return 'is-required';
                    }
                }
            }
        }
        return '';
    }
    onSubmit() {
        if (this.form.valid) {
            if (this.form.value.assocSetores.length > 0) {
                this.loaderNavbar = true;
                this.submittingForm = true;
                this.setoresLinhaService
                    .save(this.form.value)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
                    this.loaderNavbar = false;
                    this.submittingForm = false;
                }))
                    .subscribe({
                    next: (response) => {
                        if (response.hasOwnProperty('success') &&
                            response.success === true) {
                            this.form.reset();
                            this.formChanged = false;
                            this.pnotifyService.success(response.mensagem);
                            this.activatedRoute.params.subscribe((params) => {
                                let navigateTo;
                                if (params.hasOwnProperty('id')) {
                                    navigateTo = '../../lista';
                                }
                                else {
                                    navigateTo = '../lista';
                                }
                                this.router.navigate([navigateTo], {
                                    relativeTo: this.activatedRoute,
                                });
                            });
                        }
                        else if (response.hasOwnProperty('success') &&
                            response.success === false) {
                            this.pnotifyService.error(response.mensagem);
                        }
                        else {
                            this.pnotifyService.error();
                        }
                    },
                    error: (error) => {
                        this.pnotifyService.error();
                    }
                });
            }
            else {
                this.pnotifyService.notice('Associe pelo menos um setor.');
            }
        }
    }
    onCancel() {
        this.location.back();
    }
    onInput() {
        this.formChanged = true;
    }
    formCanDeactivate() {
        if (this.formChanged) {
            if (confirm('Este cliente no forma parte de tu cartera?')) {
                return true;
            }
            else {
                return false;
            }
        }
        return true;
    }
};
ComercialCadastrosAssociacaoLinhasFormularioComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _associacao_linhas_service__WEBPACK_IMPORTED_MODULE_9__["ComercialCadastrosAssociacaoLinhasService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__["AtividadesService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_12__["TitleService"] },
    { type: src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_13__["ComercialService"] },
    { type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_14__["ConfirmModalService"] }
];
ComercialCadastrosAssociacaoLinhasFormularioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-cadastros-associacao-linhas-formulario',
        template: _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
        _associacao_linhas_service__WEBPACK_IMPORTED_MODULE_9__["ComercialCadastrosAssociacaoLinhasService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__["AtividadesService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_12__["TitleService"],
        src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_13__["ComercialService"],
        src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_14__["ConfirmModalService"]])
], ComercialCadastrosAssociacaoLinhasFormularioComponent);



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

/***/ "chld":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/associacao-linhas/formulario/formulario.component.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NhZGFzdHJvcy9hc3NvY2lhY2FvLWxpbmhhcy9mb3JtdWxhcmlvL2Zvcm11bGFyaW8uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "hbkP":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/associacao-linhas/lista/lista.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ComercialCadastrosAssociacaoLinhasListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCadastrosAssociacaoLinhasListaComponent", function() { return ComercialCadastrosAssociacaoLinhasListaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lista.component.html */ "EIwY");
/* harmony import */ var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lista.component.scss */ "DMlZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _associacao_linhas_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../associacao-linhas.service */ "LreX");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");
/* harmony import */ var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/modules/confirm-modal/confirm-modal.service */ "FOez");
/* harmony import */ var src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/templates/detail-panel/detal-panel.service */ "gIxL");







// Services






let ComercialCadastrosAssociacaoLinhasListaComponent = class ComercialCadastrosAssociacaoLinhasListaComponent {
    constructor(activatedRoute, router, formBuilder, setoresLinhaService, pnotifyService, atividadesService, titleService, confirmModalService, detailPanelService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.formBuilder = formBuilder;
        this.setoresLinhaService = setoresLinhaService;
        this.pnotifyService = pnotifyService;
        this.atividadesService = atividadesService;
        this.titleService = titleService;
        this.confirmModalService = confirmModalService;
        this.detailPanelService = detailPanelService;
        this.loaderNavbar = false;
        this.breadCrumbTree = [];
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
        // tableConfig: Partial<CustomTableConfig> = {
        //   subtitleBorder: true,
        // };
        this.tableConfigSetores = {
            hover: false,
        };
        this.showDetailPanel = false;
        this.orderBy = 'NM_LINH';
        this.orderType = 'ASC';
        this.maxSize = 10;
        this.itemsPerPage = 300;
        this.currentPage = 1;
        this.totalItems = 0;
        this.linhas = [];
        this.linhasLoaded = false;
        this.dados = [];
        this.dadosPagination = [];
        this.dadosLoaded = false;
        this.dadosEmpty = false;
        this.setores = [];
        this.pnotifyService.getPNotify();
    }
    ngOnInit() {
        this.registrarAcesso();
        this.setBreadCrumb();
        this.setFormFilter();
        this.getLinhas();
        this.titleService.setTitle('Linhas');
        this.onDetailPanelEmitter();
        this.setLinhaSelecionada();
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
                    descricao: 'Cadastros',
                    routerLink: `/comercial/cadastros/${params.idSubModulo}`,
                },
                {
                    descricao: 'Linhas',
                },
            ];
        });
    }
    onDetailPanelEmitter() {
        this.showDetailPanelSubscription = this.detailPanelService.config.subscribe((event) => {
            this.showDetailPanel = event.showing;
        });
    }
    setFormFilter() {
        const formValue = this.checkRouterParams();
        this.form = this.formBuilder.group({
            ID_LINH: [formValue.ID_LINH],
            IN_STAT: [formValue.IN_STAT],
            orderBy: [formValue.orderBy],
            orderType: [formValue.orderType],
            pagina: [formValue.pagina],
            registros: [formValue.registros, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
        });
        this.checkOrder();
    }
    checkRouterParams() {
        let formValue = {
            ID_LINH: null,
            NM_LINH: '',
            orderBy: this.orderBy,
            orderType: this.orderType,
            pagina: 1,
            registros: this.itemsPerPage,
        };
        this.activatedRouteSubscription = this.activatedRoute.queryParams.subscribe((queryParams) => {
            if (Object.keys(queryParams).length > 0) {
                let params = atob(queryParams['q']);
                params = JSON.parse(params);
                this.search(params);
                Object.keys(formValue).forEach((formKey) => {
                    Object.keys(params).forEach((paramKey) => {
                        if (formKey == paramKey &&
                            formValue[formKey] != params[paramKey]) {
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
        });
        this.activatedRouteSubscription.unsubscribe();
        return formValue;
    }
    checkOrder() {
        if (this.form.value.orderBy !== this.orderBy) {
            this.orderBy = this.form.value.orderBy;
        }
        if (this.form.value.orderType !== this.orderType) {
            this.orderType = this.form.value.orderType;
        }
    }
    setLinhaSelecionada() {
        this.linhaSelecionada = {
            DESCRICAO: null,
            ID_SETO_ATIV: null,
            ID_LINH: null,
            NM_LINH: null,
            IN_STAT: null,
            situacao: null,
            codUsuario: null,
            nomeUsuario: null,
            setores: [],
        };
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
    onFieldRequired(abstractControl, abstractControlField) {
        if (abstractControl.validator) {
            const validator = abstractControl.validator({});
            if (validator && validator.required) {
                return 'is-required';
            }
        }
        if (abstractControlField) {
            for (const controlName in abstractControl['controls']) {
                if (abstractControl['controls'][controlName]) {
                    if (this.onFieldRequired(abstractControl['controls'][controlName]) &&
                        controlName == abstractControlField) {
                        return 'is-required';
                    }
                }
            }
        }
        return '';
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
        this.form.value.orderBy = this.orderBy;
        this.form.value.orderType = this.orderType;
        this.onFilter();
    }
    onFilter() {
        if (this.form.valid) {
            this.itemsPerPage = this.form.value.registros;
            this.currentPage = 1;
            this.setRouterParams(this.verificaParams());
        }
    }
    setRouterParams(params) {
        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: { q: btoa(JSON.stringify(params)) },
        });
        this.search(params);
    }
    verificaParams() {
        let params = {};
        // if (this.form.value.linha) {
        //   params.ID_SETO_ATIV = this.form.value.ID_SETO_ATIV;
        // }
        if (this.form.value.ID_LINH) {
            params.ID_LINH = this.form.value.ID_LINH;
        }
        if (this.form.value.IN_STAT) {
            params.IN_STAT = this.form.value.IN_STAT;
        }
        params.orderBy = this.form.value.orderBy;
        params.orderType = this.form.value.orderType;
        return params;
    }
    search(params) {
        this.loaderNavbar = true;
        this.detailPanelService.hide();
        this.dados = [];
        this.dadosPagination = [];
        this.dadosLoaded = false;
        this.dadosEmpty = false;
        this.setoresLinhaService
            .getListaLinhas(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
            this.loaderNavbar = false;
            this.dadosLoaded = false;
        }))
            .subscribe({
            next: (response) => {
                if (response.hasOwnProperty('success') && response.success === true) {
                    this.dados = response.data;
                    this.dadosPagination = this.dados.slice(0, this.itemsPerPage);
                    this.totalItems = this.dados.length;
                    this.dadosLoaded = false;
                }
                else if (response.hasOwnProperty('success') &&
                    response.success === false) {
                    this.dadosEmpty = true;
                }
                else {
                    this.pnotifyService.error();
                    this.dadosEmpty = true;
                }
            },
            error: (error) => {
                this.dadosEmpty = true;
                if (error.error.hasOwnProperty('mensagem')) {
                    this.pnotifyService.error(error.error.mensagem);
                }
                else {
                    this.pnotifyService.error();
                }
            }
        });
    }
    getLinhas(params) {
        this.linhasLoaded = true;
        this.setoresLinhaService
            .getLinhas()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
            this.linhasLoaded = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.linhas = response.body['data'];
            }
        });
    }
    // classStatusBorder(linha: ILinha): string {
    //   let borderClass: string;
    //   if (linha.IN_STAT === 0) {
    //     borderClass = 'border-danger';
    //   } else if (linha.IN_STAT === 1) {
    //     borderClass = 'border-success';
    //   }
    //   return borderClass;
    // }
    onPageChanged(event) {
        const startItem = (event.page - 1) * event.itemsPerPage;
        const endItem = event.page * event.itemsPerPage;
        this.dadosPagination = this.dados.slice(startItem, endItem);
        this.scrollToFilter.nativeElement.scrollIntoView({
            behavior: 'instant',
        });
    }
    onDetails(linha) {
        this.getAssociacoesSetores({
            ID_LINH: linha.ID_LINH,
            IN_STAT: 1,
        });
        this.loaderNavbar = true;
        this.detailPanelService.show();
        this.detailPanelTitle = `Setores associados (${linha.NM_LINH})`;
        this.setLinhaSelecionada();
        this.linhaSelecionada = linha;
        this.setores = [];
    }
    getAssociacoesSetores(params) {
        this.setoresLinhaService
            .getAssociacoesSetores(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
            setTimeout(() => {
                this.loaderNavbar = false;
            }, 500);
        }))
            .subscribe({
            next: (response) => {
                if (response.status === 200) {
                    this.setores = response.body['data'];
                    this.detailPanelService.loadedFinished(false);
                }
                else {
                    this.detailPanelService.loadedFinished(true);
                }
            },
            error: (error) => {
                // Vazio e com erro.
                this.detailPanelService.loadedFinished(true);
                if (error.error.hasOwnProperty('mensagem')) {
                    this.pnotifyService.error(error.error.mensagem);
                }
                else {
                    this.pnotifyService.error();
                }
            }
        });
    }
    onEdit(linha) {
        this.router.navigate(['../editar', linha.ID_LINH], {
            relativeTo: this.activatedRoute,
        });
    }
    refreshMainData(linha) {
        for (let i = 0; i < this.dados.length; i++) {
            if (linha.ID_LINH === this.dados[i].ID_LINH) {
                this.dados[i].IN_STAT = linha.IN_STAT;
                return;
            }
        }
    }
};
ComercialCadastrosAssociacaoLinhasListaComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _associacao_linhas_service__WEBPACK_IMPORTED_MODULE_7__["ComercialCadastrosAssociacaoLinhasService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_10__["TitleService"] },
    { type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_11__["ConfirmModalService"] },
    { type: src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_12__["DetailPanelService"] }
];
ComercialCadastrosAssociacaoLinhasListaComponent.propDecorators = {
    scrollToFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['scrollToFilter', {},] }]
};
ComercialCadastrosAssociacaoLinhasListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-cadastros-associacao-linhas-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        _associacao_linhas_service__WEBPACK_IMPORTED_MODULE_7__["ComercialCadastrosAssociacaoLinhasService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_10__["TitleService"],
        src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_11__["ConfirmModalService"],
        src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_12__["DetailPanelService"]])
], ComercialCadastrosAssociacaoLinhasListaComponent);



/***/ }),

/***/ "iMgG":
/*!*************************************************!*\
  !*** ./src/app/guards/form-deactivate.guard.ts ***!
  \*************************************************/
/*! exports provided: FormDeactivateGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormDeactivateGuard", function() { return FormDeactivateGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


let FormDeactivateGuard = class FormDeactivateGuard {
    canDeactivate(component, route, state) {
        return component.formCanDeactivate();
    }
};
FormDeactivateGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FormDeactivateGuard);



/***/ }),

/***/ "jezK":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/associacao-linhas/associacao-linhas-routing.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: ComercialCadastrosAssociacaoLinhasRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCadastrosAssociacaoLinhasRoutingModule", function() { return ComercialCadastrosAssociacaoLinhasRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/guards/form-deactivate.guard */ "iMgG");
/* harmony import */ var _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./formulario/formulario-resolver.guard */ "GYTr");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lista/lista.component */ "hbkP");
/* harmony import */ var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./formulario/formulario.component */ "Ufyz");



// Guards


// Components


const routes = [
    {
        path: 'lista',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_5__["ComercialCadastrosAssociacaoLinhasListaComponent"],
    },
    {
        path: 'novo',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__["ComercialCadastrosAssociacaoLinhasFormularioComponent"],
        resolve: {
            detalhes: _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_4__["ComercialCadastrosAssociacaoLinhasFormularioResolverGuard"],
        },
        canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]],
    },
    {
        path: 'editar/:id',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__["ComercialCadastrosAssociacaoLinhasFormularioComponent"],
        resolve: {
            detalhes: _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_4__["ComercialCadastrosAssociacaoLinhasFormularioResolverGuard"],
        },
        canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]],
    },
    {
        path: '',
        redirectTo: 'lista',
        pathMatch: 'full',
    },
];
let ComercialCadastrosAssociacaoLinhasRoutingModule = class ComercialCadastrosAssociacaoLinhasRoutingModule {
};
ComercialCadastrosAssociacaoLinhasRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ComercialCadastrosAssociacaoLinhasRoutingModule);



/***/ }),

/***/ "wwCg":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/associacao-linhas/associacao-linhas.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: ComercialCadastrosAssociacaoLinhasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCadastrosAssociacaoLinhasModule", function() { return ComercialCadastrosAssociacaoLinhasModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "6No5");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "978R");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-currency-mask */ "D5nU");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _associacao_linhas_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./associacao-linhas-routing.module */ "jezK");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lista/lista.component */ "hbkP");
/* harmony import */ var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./formulario/formulario.component */ "Ufyz");
/* harmony import */ var _associacao_linhas_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./associacao-linhas.service */ "LreX");




// ngx-bootstrap


// ng-select

// ng2-currency-mask

// PNotify

// Modules



// Components


// Services

let ComercialCadastrosAssociacaoLinhasModule = class ComercialCadastrosAssociacaoLinhasModule {
};
ComercialCadastrosAssociacaoLinhasModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _lista_lista_component__WEBPACK_IMPORTED_MODULE_12__["ComercialCadastrosAssociacaoLinhasListaComponent"],
            _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_13__["ComercialCadastrosAssociacaoLinhasFormularioComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"],
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"],
            ng2_currency_mask__WEBPACK_IMPORTED_MODULE_7__["CurrencyMaskModule"],
            _associacao_linhas_routing_module__WEBPACK_IMPORTED_MODULE_9__["ComercialCadastrosAssociacaoLinhasRoutingModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_11__["TemplatesModule"],
        ],
        providers: [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"], _associacao_linhas_service__WEBPACK_IMPORTED_MODULE_14__["ComercialCadastrosAssociacaoLinhasService"]],
    })
], ComercialCadastrosAssociacaoLinhasModule);



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
//# sourceMappingURL=associacao-linhas-associacao-linhas-module-es2015.js.map