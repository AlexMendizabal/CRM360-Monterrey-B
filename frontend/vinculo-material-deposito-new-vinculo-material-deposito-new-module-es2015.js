(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vinculo-material-deposito-new-vinculo-material-deposito-new-module"],{

/***/ "BWiG":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/abastecimento/cadastros/vinculo-material-deposito-new/lista/lista.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen\r\n  *ngIf=\"loaderFullScreen\"\r\n></loader-spinner-full-screen>\r\n<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<app-header appTitle=\"Vínculo de material e depósito\">\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onFilter()\"\r\n    >\r\n    Filtrar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"excelExport()\"\r\n  >\r\n    Exportar Excel\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    routerLink=\"../lista-nao-vinculados\"\r\n  >\r\n    Adicionar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\r\n  <advanced-filter>\r\n    <form [formGroup]=\"form\" autocomplete=\"off\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-lg-2\">\r\n          <label for=\"linha\">Linha</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"false\"\r\n            [multiple]=\"true\"\r\n            [items]=\"linhas\"\r\n            [virtualScroll]=\"true\"\r\n            [hideSelected]=\"true\"\r\n            [closeOnSelect]=\"true\"\r\n            placeholder=\"Selecione...\"\r\n            bindLabel=\"NM_LINH\"\r\n            bindValue=\"ID\"\r\n            formControlName=\"linha\"\r\n            (change)=\"getClasses() + ' ' + getSubLinhas()\"\r\n          >\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-lg-2\">\r\n          <label for=\"subLinha\">Sublinha</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"false\"\r\n            [multiple]=\"true\"\r\n            [items]=\"subLinhas\"\r\n            [virtualScroll]=\"true\"\r\n            [hideSelected]=\"true\"\r\n            [closeOnSelect]=\"true\"\r\n            placeholder=\"Selecione...\"\r\n            bindLabel=\"NM_SUB_LINH\"\r\n            bindValue=\"ID\"\r\n            formControlName=\"subLinha\"\r\n            (change)=\"getClasses()\"\r\n          >\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-lg-2\">\r\n          <label for=\"classe\">Classe</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"false\"\r\n            [multiple]=\"true\"\r\n            [items]=\"classes\"\r\n            [virtualScroll]=\"true\"\r\n            [hideSelected]=\"true\"\r\n            [closeOnSelect]=\"true\"\r\n            placeholder=\"Selecione...\"\r\n            bindLabel=\"NM_CLAS\"\r\n            bindValue=\"ID\"\r\n            formControlName=\"classe\"\r\n          >\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-lg-2\">\r\n          <label for=\"tipoMaterial\">Tipo material</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"false\"\r\n            [multiple]=\"true\"\r\n            [items]=\"tiposMateriais\"\r\n            [virtualScroll]=\"true\"\r\n            [hideSelected]=\"true\"\r\n            [closeOnSelect]=\"true\"\r\n            placeholder=\"Selecione...\"\r\n            bindLabel=\"NM_APOI_TIPO_MATE\"\r\n            bindValue=\"ID\"\r\n            formControlName=\"tipoMaterial\"\r\n          >\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-lg-2\">\r\n          <label for=\"deposito\">Depósito</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"true\"\r\n            [items]=\"depositos\"\r\n            [virtualScroll]=\"true\"\r\n            [hideSelected]=\"true\"\r\n            [closeOnSelect]=\"true\"\r\n            placeholder=\"Selecione...\"\r\n            bindLabel=\"NM_DEPO\"\r\n            bindValue=\"ID\"\r\n            formControlName=\"deposito\"\r\n            (change)=\"enableCondicao($event)\"\r\n            >\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-lg-2\">\r\n          <label for=\"condicao\">Condição</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"false\"\r\n            [items]=\"tiposCondicao\"\r\n            [virtualScroll]=\"true\"\r\n            [hideSelected]=\"true\"\r\n            [closeOnSelect]=\"true\"\r\n            placeholder=\"Selecione...\"\r\n            bindLabel=\"name\"\r\n            bindValue=\"id\"\r\n            formControlName=\"condicao\"\r\n            >\r\n          </ng-select>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </advanced-filter>\r\n  <div class=\"row\">\r\n    <div\r\n      [ngClass]=\"{ 'col-12': !compressedTable, 'col-6 pr-0': compressedTable }\"\r\n      *ngIf=\"loading\"\r\n    >\r\n      <custom-table>\r\n        <ng-template #thead let-thead>\r\n          <tr class=\"text-center\">\r\n            <th scope=\"col\" class=\"hover\" (click)=\"sort('NM_APOI_TIPO_MATE')\">\r\n              Tipo Material\r\n              <span *ngIf=\"key == 'NM_APOI_TIPO_MATE'\"\r\n                ><i\r\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"key != 'NM_APOI_TIPO_MATE'\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n            <th scope=\"col\" class=\"hover\" (click)=\"sort('NM_LINH')\">\r\n              Linha\r\n              <span *ngIf=\"key == 'NM_LINH'\"\r\n                ><i\r\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"key != 'NM_LINH'\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n            <th scope=\"col\" class=\"hover\" (click)=\"sort('NM_SUB_LINH')\">\r\n              Sublinha\r\n              <span *ngIf=\"key == 'NM_SUB_LINH'\"\r\n                ><i\r\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"key != 'NM_SUB_LINH'\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n            <th scope=\"col\" class=\"hover\" (click)=\"sort('NM_CLAS')\">\r\n              Classe\r\n              <span *ngIf=\"key == 'NM_CLAS'\"\r\n                ><i\r\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"key != 'NM_CLAS'\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n            <th scope=\"col\" class=\"hover\" [hidden]=\"compressedTable\" width=\"5%\"></th>\r\n            <th scope=\"col\" class=\"hover\" [hidden]=\"compressedTable\" width=\"5%\"></th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr\r\n            *ngFor=\"\r\n              let item of dados | orderBy: key:reverse | slice: begin:end;\r\n              let i = index\r\n            \"\r\n          >\r\n            <td\r\n              class=\"text-center\"\r\n              [ngClass]=\"item.select ? 'bg-row-selected' : ''\"\r\n            >\r\n              {{ item.NM_APOI_TIPO_MATE }}\r\n            </td>\r\n            <td class=\"text-center\" [ngClass]=\" item.select ? 'bg-row-selected' : ''\">{{ item.NM_LINH }}</td>\r\n            <td class=\"text-center\" [ngClass]=\" item.select ? 'bg-row-selected' : ''\">\r\n              {{ item.NM_SUB_LINH ? item.NM_SUB_LINH : '-' }}\r\n            </td>\r\n            <td class=\"text-center\" [ngClass]=\" item.select ? 'bg-row-selected' : ''\">{{ item.NM_CLAS }}</td>\r\n            <td class=\"text-center\" [hidden]=\"compressedTable\" width=\"5%\">\r\n              <div>\r\n                <button\r\n                  type=\"button\"\r\n                  class=\"btn-icon-sm\"\r\n                  tooltip=\"Editar\"\r\n                  placement=\"left\"\r\n                  container=\"body\"\r\n                >\r\n                <i\r\n                  class=\"fas fa-edit\"\r\n                  (click)=\"onAdd(item)\"\r\n                  >\r\n                </i>\r\n                </button>\r\n              </div>\r\n            </td>\r\n            <td class=\"text-center\" [hidden]=\"compressedTable\" width=\"5%\">\r\n              <div>\r\n                <button\r\n                  type=\"button\"\r\n                  class=\"btn-icon-sm\"\r\n                  (click)=\"openTab(item)\"\r\n                  tooltip=\"Detalles\"\r\n                  placement=\"left\"\r\n                  container=\"body\"\r\n                >\r\n                  <i class=\"fas fa-search\"></i>\r\n                </button>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n    </div>\r\n    <div class=\"col-6\">\r\n      <tabset [hidden]=\"!compressedTable\">\r\n        <button\r\n          type=\"button\"\r\n          class=\"btn-icon close position-absolute\"\r\n          (click)=\"onClose()\"\r\n        >\r\n          <i class=\"fas fa-times\"></i>\r\n        </button>\r\n        <tab heading=\"Detalles\">\r\n          <div\r\n            class=\"border-right border-left border-bottom px-3 pt-3\"\r\n            style=\"overflow: auto; height: 338px;\"\r\n          >\r\n            <custom-table *ngIf=\"!noResultDetalhes && loadingDetalhes\">\r\n              <ng-template #thead let-thead>\r\n                <tr class=\"text-center\">\r\n                  <th scope=\"col\">Empresa</th>\r\n                  <th scope=\"col\">Depósito</th>\r\n                  <th scope=\"col\">Situação</th>\r\n                  <th scope=\"col\" width=\"5%\"></th>\r\n                </tr>\r\n              </ng-template>\r\n              <ng-template #tbody let-tbody>\r\n                <tr *ngFor=\"let item of dadosDetalhes\">\r\n                  <td class=\"text-left\">{{ item.NM_EMPR }}</td>\r\n                  <td class=\"text-left\">{{ item.NM_DEPO }}</td>\r\n                  <td class=\"text-left\">{{ item.DS_STAT }}</td>\r\n                  <td class=\"text-center\" width=\"5%\">\r\n                    <div>\r\n                      <button\r\n                        type=\"button\"\r\n                        class=\"btn-icon-sm\"\r\n                        (click)=\"openModal(item) + '' + lgModal.show()\"\r\n                        tooltip=\"Logs\"\r\n                        placement=\"left\"\r\n                        container=\"body\"\r\n                      >\r\n                        <i class=\"fas fa-external-link-alt text-primary\"></i>\r\n                      </button>\r\n                    </div>\r\n                  </td>\r\n                </tr>\r\n              </ng-template>\r\n            </custom-table>\r\n            <div\r\n              *ngIf=\"noResultDetalhes\"\r\n              class=\"text-center d-flex justify-content-center align-items-center p-5\"\r\n              style=\"height: 80%;\"\r\n            >\r\n              <empty-result\r\n                message=\"Nenhuma informação encontrada\"\r\n              ></empty-result>\r\n            </div>\r\n          </div>\r\n        </tab>\r\n      </tabset>\r\n    </div>\r\n    <div\r\n      class=\"col-12 mb-2 ml-2\"\r\n      *ngIf=\"!noResult && dados?.length > itemsPerPage\"\r\n    >\r\n      Exibindo {{ begin + 1 }} a {{ end }} de {{ dados?.length }}\r\n      <div class=\"d-flex\">\r\n        <pagination\r\n          [maxSize]=\"10\"\r\n          [totalItems]=\"dados?.length\"\r\n          (pageChanged)=\"onPageChanged($event)\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPage\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\"\r\n        >\r\n        </pagination>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div\r\n    *ngIf=\"noResult\"\r\n    class=\"text-center d-flex justify-content-center align-items-center p-5\"\r\n    style=\"height: 80%;\"\r\n  >\r\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n  </div>\r\n</app-body>\r\n\r\n<div bsModal #lgModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\"\r\n     role=\"dialog\" aria-labelledby=\"dialog-sizes-name1\">\r\n  <div class=\"modal-dialog modal-xl\" [hidden]=\"!loadingDetalhesLog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 id=\"dialog-sizes-name1\" class=\"modal-title pull-left\">LOGS VÍNCULO MATERIAL DEPÓSITO</h4>\r\n        <button type=\"button\" class=\"close pull-right\" (click)=\"lgModal.hide()\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div\r\n        class=\"table-responsive\"\r\n        >\r\n          <custom-table *ngIf=\"loadingLogs\">\r\n            <ng-template #thead let-thead>\r\n              <tr class=\"text-center\">\r\n                <th scope=\"col\" nowrap (click)=\"sortA('NM_APOI_TIPO_MATE')\">\r\n                  Tipo Material\r\n                    <span *ngIf=\"keyA == 'NM_APOI_TIPO_MATE'\"\r\n                    ><i\r\n                      [ngClass]=\"\r\n                        reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                      \"\r\n                    ></i\r\n                  ></span>\r\n                  <span *ngIf=\"keyA != 'NM_APOI_TIPO_MATE'\"\r\n                    ><i [ngClass]=\"'fas fa-sort'\"></i\r\n                  ></span>\r\n                </th>\r\n                <th scope=\"col\" nowrap (click)=\"sortA('NM_CLAS')\">\r\n                  Classe\r\n                    <span *ngIf=\"keyA == 'NM_CLAS'\"\r\n                    ><i\r\n                      [ngClass]=\"\r\n                        reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                      \"\r\n                    ></i\r\n                  ></span>\r\n                  <span *ngIf=\"keyA != 'NM_CLAS'\"\r\n                    ><i [ngClass]=\"'fas fa-sort'\"></i\r\n                  ></span>\r\n                </th>\r\n                <th scope=\"col\" nowrap (click)=\"sortA('NM_DEPO')\">\r\n                  Depósito\r\n                    <span *ngIf=\"keyA == 'NM_DEPO'\"\r\n                    ><i\r\n                      [ngClass]=\"\r\n                        reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                      \"\r\n                    ></i\r\n                  ></span>\r\n                  <span *ngIf=\"keyA != 'NM_DEPO'\"\r\n                    ><i [ngClass]=\"'fas fa-sort'\"></i\r\n                  ></span>\r\n                </th>\r\n                <th scope=\"col\" nowrap (click)=\"sortA('DS_STAT')\">\r\n                  Situação\r\n                    <span *ngIf=\"keyA == 'DS_STAT'\"\r\n                    ><i\r\n                      [ngClass]=\"\r\n                        reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                      \"\r\n                    ></i\r\n                  ></span>\r\n                  <span *ngIf=\"keyA != 'DS_STAT'\"\r\n                    ><i [ngClass]=\"'fas fa-sort'\"></i\r\n                  ></span>\r\n                </th>\r\n                <th scope=\"col\" nowrap (click)=\"sortA('DT_ACAO')\">\r\n                  Data\r\n                    <span *ngIf=\"keyA == 'DT_ACAO'\"\r\n                    ><i\r\n                      [ngClass]=\"\r\n                        reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                      \"\r\n                    ></i\r\n                  ></span>\r\n                  <span *ngIf=\"keyA != 'DT_ACAO'\"\r\n                    ><i [ngClass]=\"'fas fa-sort'\"></i\r\n                  ></span>\r\n                </th>\r\n                <th scope=\"col\" nowrap (click)=\"sortA('NM_ACAO')\">\r\n                  Ação\r\n                    <span *ngIf=\"keyA == 'NM_ACAO'\"\r\n                    ><i\r\n                      [ngClass]=\"\r\n                        reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                      \"\r\n                    ></i\r\n                  ></span>\r\n                  <span *ngIf=\"keyA != 'NM_ACAO'\"\r\n                    ><i [ngClass]=\"'fas fa-sort'\"></i\r\n                  ></span>\r\n                </th>\r\n                <th scope=\"col\" nowrap (click)=\"sortA('NM_USUA')\">\r\n                  Usuário\r\n                    <span *ngIf=\"keyA == 'NM_USUA'\"\r\n                    ><i\r\n                      [ngClass]=\"\r\n                        reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                      \"\r\n                    ></i\r\n                  ></span>\r\n                  <span *ngIf=\"keyA != 'NM_USUA'\"\r\n                    ><i [ngClass]=\"'fas fa-sort'\"></i\r\n                  ></span>\r\n                </th>\r\n              </tr>\r\n            </ng-template>\r\n            <ng-template #tbody let-tbody>\r\n              <tr *ngFor=\"let item of dadosLogs | orderBy: keyA:reverseA | slice: beginA:endA; let i = index\">\r\n                <td class=\"text-center\">{{ item.NM_APOI_TIPO_MATE }}</td>\r\n                <td class=\"text-center\">{{ item.NM_CLAS }}</td>\r\n                <td class=\"text-center\">{{ item.NM_DEPO }}</td>\r\n                <td class=\"text-center\">{{ item.DS_STAT }}</td>\r\n                <td class=\"text-center\">{{ item.DT_ACAO | date:'dd/MM/yyyy HH:mm'}}</td>\r\n                <td class=\"text-center\">{{ item.NM_ACAO }}</td>\r\n                <td class=\"text-center\">{{ item.NM_USUA }}</td>\r\n              </tr>\r\n            </ng-template>\r\n          </custom-table>\r\n        </div>\r\n        <div class=\"col-12 mb-2 ml-2\" *ngIf=\"dadosLogs.length > itemsPerPage && loadingLogs\">\r\n          Exibindo {{ beginA + 1 }} a {{ endA }} de {{ dadosLogs?.length }}\r\n          <pagination\r\n            [maxSize]=\"10\"\r\n            [totalItems]=\"dadosLogs?.length\"\r\n            (pageChanged)=\"onPageChangedA($event)\"\r\n            [(itemsPerPage)]=\"itemsPerPage\"\r\n            [boundaryLinks]=\"true\"\r\n            [(ngModel)]=\"currentPageA\"\r\n            previousText=\"&lsaquo;\"\r\n            nextText=\"&rsaquo;\"\r\n            firstText=\"&laquo;\"\r\n            lastText=\"&raquo;\"\r\n          >\r\n          </pagination>\r\n        </div>\r\n        <div\r\n          *ngIf=\"noResultLogs\"\r\n          class=\"text-center d-flex justify-content-center align-items-center p-5\"\r\n          style=\"height: 80%;\"\r\n        >\r\n          <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

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

/***/ "JB1Q":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/cadastros/vinculo-material-deposito-new/cadastro/cadastro.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: AbastecimentoCadastrosVinculoMaterialDepositoCadastroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastrosVinculoMaterialDepositoCadastroComponent", function() { return AbastecimentoCadastrosVinculoMaterialDepositoCadastroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cadastro.component.html */ "jXlm");
/* harmony import */ var _cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cadastro.component.scss */ "TZfr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");
/* harmony import */ var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/modules/confirm-modal/confirm-modal.service */ "FOez");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var _vinculo_material_deposito_new_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../vinculo-material-deposito-new.service */ "tRPG");












//Converte rota em base64


let AbastecimentoCadastrosVinculoMaterialDepositoCadastroComponent = class AbastecimentoCadastrosVinculoMaterialDepositoCadastroComponent {
    constructor(activatedRoute, formBuilder, pnotifyService, atividadesService, routerService, titleService, confirmModalService, service) {
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.pnotifyService = pnotifyService;
        this.atividadesService = atividadesService;
        this.routerService = routerService;
        this.titleService = titleService;
        this.confirmModalService = confirmModalService;
        this.service = service;
        this.loaderFullScreen = true;
        this.noResultDepositos = false;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.idUsuario = this.currentUser['info']['id'];
        this.breadCrumbTree = [];
        this.depositos = [];
        this.empresas = [];
        this.dadosDepositosAssociados = [];
        this.depositosFilter = [];
        this.form = this.formBuilder.group({
            empresas: [null],
            depositos: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
    }
    ngOnInit() {
        setTimeout(() => {
            this.loaderFullScreen = false;
        }, 1000);
        this.registrarAcesso();
        this.setBreadCrumb();
        this.checkRouterParams();
        this.titleService.setTitle('Vinculo Material Depósito');
    }
    registrarAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
    }
    setBreadCrumb() {
        this.activatedRoute.params.subscribe((params) => {
            this.breadCrumbTree = [
                {
                    descricao: 'Home',
                    routerLink: '/abastecimento/home'
                },
                {
                    descricao: 'Cadastros',
                    routerLink: `/abastecimento/cadastros/${params['idSubModulo']}`
                },
                {
                    descricao: 'Vínculo Material Depósito',
                    routerLink: `/abastecimento/cadastros/${params['idSubModulo']}/vinculo-material-deposito/lista`
                },
                {
                    descricao: 'Cadastro'
                },
            ];
        });
    }
    checkRouterParams() {
        this.activatedRouteSubscription = this.activatedRoute.queryParams.subscribe((queryParams) => {
            if (Object.keys(queryParams).length > 0) {
                let _response = this.routerService.getBase64UrlParams(queryParams);
                this.setValuesInfoMateriais(_response.item);
                this.getDepositos();
                this.getEmpresas();
                this.loadDepositosAssociados();
            }
        });
        this.activatedRouteSubscription.unsubscribe();
    }
    onSave() {
        let depositos = this.form.get("depositos").value;
        let record = {
            ID_CLAS: this.idClasse,
            ID_APOI_TIPO_MATE: this.idTipoMaterial,
            ID_DEPO: depositos.toString(),
            IN_STAT: 1,
            ID_USUA: parseInt(this.idUsuario)
        };
        this.postMaterialDeposito(record);
    }
    postMaterialDeposito(record) {
        this.loaderNavbar = true;
        this.service
            .postMaterialDeposito(record)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            (this.loaderNavbar = false), this.resetValuesForm(), this.loadDepositosAssociados();
        }))
            .subscribe((res) => {
            if (Object.keys(res).length > 0) {
                if (res['responseCode'] === 201) {
                    this.pnotifyService.success(res['message']);
                }
                else {
                    this.pnotifyService.error(res['message']);
                }
            }
        }, error => {
            this.pnotifyService.error(error['error']);
        });
    }
    updateMaterialDeposito(record) {
        this.loaderNavbar = true;
        this.service
            .updateMaterialDeposito(record)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            (this.loaderNavbar = false), this.resetValuesForm(), this.loadDepositosAssociados();
        }))
            .subscribe(res => {
            if (Object.keys(res).length > 0) {
                if (res['responseCode'] === 200) {
                    this.pnotifyService.success(res['message']);
                }
                else {
                    this.pnotifyService.error(res['message']);
                }
            }
        }, error => {
            this.pnotifyService.error(error['error']);
        });
    }
    onUpdate(item) {
        let idSituaçao = item.IN_STAT;
        if (item.IN_STAT === 0) {
            idSituaçao = 1;
        }
        else if (item.IN_STAT === 1) {
            idSituaçao = 0;
        }
        let record = {
            ID_ASSO_DEPO_MATE: item.ID,
            ID_CLAS: item.ID_CLAS,
            ID_APOI_TIPO_MATE: item.ID_APOI_TIPO_MATE,
            ID_DEPO: item.ID_DEPO,
            IN_STAT: idSituaçao,
            ID_USUA: parseInt(this.idUsuario)
        };
        this.updateMaterialDeposito(record);
    }
    onDelete(item) {
        this.loaderNavbar = true;
        let record = {
            ID_ASSO_DEPO_MATE: item.ID,
            ID_USUA: parseInt(this.idUsuario)
        };
        this.confirmDelete()
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(result => result ? this.deleteMaterialDeposito(record) : rxjs__WEBPACK_IMPORTED_MODULE_6__["EMPTY"]))
            .subscribe((success) => {
            this.pnotifyService.success();
            this.loaderNavbar = false;
            this.loadDepositosAssociados();
        }, (error) => {
            this.pnotifyService.error();
            this.loaderNavbar = false;
            this.loadDepositosAssociados();
        });
        this.deleteMaterialDeposito(record);
    }
    deleteMaterialDeposito(record) {
        return this.service.deleteMaterialDeposito(record);
    }
    confirmDelete() {
        return this.confirmModalService.showConfirm('delete', 'Confirmar exclusão', 'Deseja realmente prosseguir com a exclusão do registro?', 'Cancelar', 'Confirmar');
    }
    loadDepositosAssociados() {
        this.getDepositosAssociados({
            ID_CLAS: this.idClasse,
            ID_APOI_TIPO_MATE: this.idTipoMaterial
        });
    }
    getDepositos() {
        let idSituacao = 1;
        this.loaderNavbar = true;
        this.depositos = [];
        let idEmpresa = this.form.value['empresas'] ? this.form.value['empresas'] : '';
        this.service
            .getDepositos(idSituacao, idEmpresa)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => { this.loaderNavbar = false; }))
            .subscribe((res) => {
            if (Object.keys(res).length > 0) {
                if (res['body']['responseCode'] == 200) {
                    this.form.get('depositos').reset();
                    this.depositos = res['body']['result'];
                }
                else if (res['body']['responseCode'] == 404) {
                    this.form.get('depositos').reset();
                    this.pnotifyService.notice(res.message);
                }
            }
        }, error => {
            this.form.get('depositos').reset();
            this.pnotifyService.error('Erro ao carregar Depositos');
        });
    }
    getEmpresas() {
        let idSituacao = 1;
        this.loaderNavbar = true;
        this.empresas = [];
        this.service
            .getEmpresas(idSituacao)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => { this.loaderNavbar = false; }))
            .subscribe(res => {
            if (Object.keys(res).length > 0) {
                this.empresas = res['body']['result'];
            }
        }, error => {
            this.pnotifyService.error('Erro ao carregar Empresas');
        });
    }
    getDepositosAssociados(params) {
        this.loaderNavbar = true;
        this.service
            .getMaterialDepositosDetalhes(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.loaderNavbar = false;
            // this.filterArrayDepositos();
        }))
            .subscribe((res) => {
            if (res.status === 200) {
                if (res['body']['responseCode'] === 200) {
                    this.noResultDepositos = false;
                    this.dadosDepositosAssociados = res['body']['result'];
                }
                else if (res['body']['responseCode'] === 404) {
                    this.noResultDepositos = true;
                    this.pnotifyService.notice(res['body']['message']);
                }
            }
        }, error => {
            this.pnotifyService.error('Erro ao carregar depósitos associados');
        });
    }
    // filterArrayDepositos() {
    //   this.depositosFilter = [];
    //   let depositosFiltrados: Array<any> = [];
    //   let idDeposito: Array<any> = [];
    //   if(this.dadosDepositosAssociados.length > 0 ){
    //     this.dadosDepositosAssociados.forEach(deposito => {
    //       return idDeposito.push(deposito['ID_DEPO']);
    //     });
    //     depositosFiltrados = this.depositos.filter(item =>
    //       idDeposito
    //       .map(val => item.ID.indexOf(val))
    //       .map(val => (val > -1 ? false : true))
    //       .reduce((acc, cum) => acc && cum)
    //       );
    //       this.depositosFilter = depositosFiltrados;
    //     } else {
    //       this.depositosFilter = this.depositos;
    //     }
    // }
    setValuesInfoMateriais(params) {
        this.idLinha = params["ID_LINH"];
        this.linha = params["NM_LINH"];
        this.idSubLinha = params["ID_SUB_LINH"];
        this.subLinha = params["NM_SUB_LINH"];
        this.idClasse = params["ID_CLAS"];
        this.classe = params["NM_CLAS"];
        this.idTipoMaterial = params["ID_APOI_TIPO_MATE"];
        this.tipoMaterial = params["NM_APOI_TIPO_MATE"];
        this.depositosAssociados = params["TT_DEPO_ASSO"];
    }
    resetValuesForm() {
        this.form.get('depositos').reset();
        this.form.get('empresas').reset();
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
};
AbastecimentoCadastrosVinculoMaterialDepositoCadastroComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_12__["RouterService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_10__["TitleService"] },
    { type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_11__["ConfirmModalService"] },
    { type: _vinculo_material_deposito_new_service__WEBPACK_IMPORTED_MODULE_13__["AbastecimentoCadastrosVinculoMaterialDepositoNewService"] }
];
AbastecimentoCadastrosVinculoMaterialDepositoCadastroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'cadastro',
        template: _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_12__["RouterService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_10__["TitleService"],
        src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_11__["ConfirmModalService"],
        _vinculo_material_deposito_new_service__WEBPACK_IMPORTED_MODULE_13__["AbastecimentoCadastrosVinculoMaterialDepositoNewService"]])
], AbastecimentoCadastrosVinculoMaterialDepositoCadastroComponent);



/***/ }),

/***/ "TZfr":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/cadastros/vinculo-material-deposito-new/cadastro/cadastro.component.scss ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("pFont {\n  font-size: 1.1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hYmFzdGVjaW1lbnRvL2NhZGFzdHJvcy92aW5jdWxvLW1hdGVyaWFsLWRlcG9zaXRvLW5ldy9jYWRhc3Ryby9jYWRhc3Ryby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FiYXN0ZWNpbWVudG8vY2FkYXN0cm9zL3ZpbmN1bG8tbWF0ZXJpYWwtZGVwb3NpdG8tbmV3L2NhZGFzdHJvL2NhZGFzdHJvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicEZvbnQge1xyXG4gIGZvbnQtc2l6ZTogMS4xZW07XHJcbn0iXX0= */");

/***/ }),

/***/ "U9LM":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/cadastros/vinculo-material-deposito-new/vinculo-material-deposito-new-routing.module.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: AbastecimentoCadastrosVinculoMaterialDepositoNewRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastrosVinculoMaterialDepositoNewRoutingModule", function() { return AbastecimentoCadastrosVinculoMaterialDepositoNewRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lista/lista.component */ "t+/W");
/* harmony import */ var _lista_nao_vinculados_lista_nao_vinculados_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lista-nao-vinculados/lista-nao-vinculados.component */ "tVLG");
/* harmony import */ var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cadastro/cadastro.component */ "JB1Q");



//Componentes



const routes = [
    {
        path: '',
        children: [
            {
                path: 'lista',
                component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_3__["AbastecimentoCadastrosVinculoMaterialDepositoListaComponent"]
            },
            {
                path: 'lista-nao-vinculados',
                component: _lista_nao_vinculados_lista_nao_vinculados_component__WEBPACK_IMPORTED_MODULE_4__["AbastecimentoCadastrosVinculoMaterialDepositoListaNaoVinculadosComponent"]
            },
            {
                path: 'cadastro',
                component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_5__["AbastecimentoCadastrosVinculoMaterialDepositoCadastroComponent"]
            },
            {
                path: '',
                redirectTo: 'lista',
                pathMatch: 'full'
            }
        ]
    }
];
let AbastecimentoCadastrosVinculoMaterialDepositoNewRoutingModule = class AbastecimentoCadastrosVinculoMaterialDepositoNewRoutingModule {
};
AbastecimentoCadastrosVinculoMaterialDepositoNewRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AbastecimentoCadastrosVinculoMaterialDepositoNewRoutingModule);



/***/ }),

/***/ "WR3X":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/abastecimento/cadastros/vinculo-material-deposito-new/lista-nao-vinculados/lista-nao-vinculados.component.html ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen\r\n  *ngIf=\"loaderFullScreen\"\r\n></loader-spinner-full-screen>\r\n<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<app-header appTitle=\"Não Vinculados\">\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\r\n  <div *ngIf=\"loading\">\r\n    <custom-table>\r\n      <ng-template #thead let-thead>\r\n        <tr class=\"text-center\">\r\n          <th scope=\"col\" class=\"hover\" (click)=\"sort('NM_APOI_TIPO_MATE')\">\r\n            Tipo Material\r\n            <span *ngIf=\"key == 'NM_APOI_TIPO_MATE'\"\r\n              ><i\r\n                [ngClass]=\"\r\n                  reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                \"\r\n              ></i\r\n            ></span>\r\n            <span *ngIf=\"key != 'NM_APOI_TIPO_MATE'\"\r\n              ><i [ngClass]=\"'fas fa-sort'\"></i\r\n            ></span>\r\n          </th>\r\n          <th scope=\"col\" class=\"hover\" (click)=\"sort('NM_LINH')\">\r\n            Linha\r\n            <span *ngIf=\"key == 'NM_LINH'\"\r\n              ><i\r\n                [ngClass]=\"\r\n                  reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                \"\r\n              ></i\r\n            ></span>\r\n            <span *ngIf=\"key != 'NM_LINH'\"\r\n              ><i [ngClass]=\"'fas fa-sort'\"></i\r\n            ></span>\r\n          </th>\r\n          <th scope=\"col\" class=\"hover\" (click)=\"sort('NM_SUB_LINH')\">\r\n            Sublinha\r\n            <span *ngIf=\"key == 'NM_SUB_LINH'\"\r\n              ><i\r\n                [ngClass]=\"\r\n                  reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                \"\r\n              ></i\r\n            ></span>\r\n            <span *ngIf=\"key != 'NM_SUB_LINH'\"\r\n              ><i [ngClass]=\"'fas fa-sort'\"></i\r\n            ></span>\r\n          </th>\r\n          <th scope=\"col\" class=\"hover\" (click)=\"sort('NM_CLAS')\">\r\n            Classe\r\n            <span *ngIf=\"key == 'NM_CLAS'\"\r\n              ><i\r\n                [ngClass]=\"\r\n                  reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\r\n                \"\r\n              ></i\r\n            ></span>\r\n            <span *ngIf=\"key != 'NM_CLAS'\"\r\n              ><i [ngClass]=\"'fas fa-sort'\"></i\r\n            ></span>\r\n          </th>\r\n          <th></th>\r\n        </tr>\r\n      </ng-template>\r\n      <ng-template #tbody let-tbody>\r\n        <tr\r\n          *ngFor=\"\r\n            let item of dadosMateDispAssociacao\r\n              | orderBy: key:reverse\r\n              | slice: begin:end;\r\n            let i = index\r\n          \"\r\n        >\r\n          <td class=\"text-center\">{{ item.NM_APOI_TIPO_MATE }}</td>\r\n          <td class=\"text-center\">{{ item.NM_LINH }}</td>\r\n          <td class=\"text-center\">\r\n            {{ item.NM_SUB_LINH ? item.NM_SUB_LINH : '-' }}\r\n          </td>\r\n          <td class=\"text-center\">{{ item.NM_CLAS }}</td>\r\n          <td class=\"text-center\">\r\n            <div>\r\n              <button\r\n                type=\"button\"\r\n                class=\"btn-icon-sm\"\r\n                tooltip=\"Incluir\"\r\n                placement=\"left\"\r\n                container=\"body\"\r\n              >\r\n                <i\r\n                  class=\"fas fa-edit\"\r\n                  (click)=\"onAdd(item)\" \r\n                  >\r\n                </i>\r\n              </button>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n      </ng-template>\r\n    </custom-table>\r\n  </div>\r\n  <div class=\"mt-2\" *ngIf=\"dadosMateDispAssociacao?.length > itemsPerPage\">\r\n    Exibindo {{ begin + 1 }} a {{ end }} de {{ dadosMateDispAssociacao?.length }}\r\n    <div class=\"d-flex\">\r\n      <pagination\r\n        [maxSize]=\"10\"\r\n        [totalItems]=\"dadosMateDispAssociacao?.length\"\r\n        (pageChanged)=\"onPageChanged($event)\"\r\n        [(itemsPerPage)]=\"itemsPerPage\"\r\n        [boundaryLinks]=\"true\"\r\n        [(ngModel)]=\"currentPage\"\r\n        previousText=\"&lsaquo;\"\r\n        nextText=\"&rsaquo;\"\r\n        firstText=\"&laquo;\"\r\n        lastText=\"&raquo;\"\r\n      >\r\n      </pagination>\r\n    </div>\r\n  </div>\r\n  <div\r\n    *ngIf=\"noResult\"\r\n    class=\"text-center d-flex justify-content-center align-items-center p-5\"\r\n    style=\"height: 80%;\"\r\n  >\r\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n  </div>\r\n</app-body>");

/***/ }),

/***/ "ck7C":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/cadastros/vinculo-material-deposito-new/lista-nao-vinculados/lista-nao-vinculados.component.scss ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWJhc3RlY2ltZW50by9jYWRhc3Ryb3MvdmluY3Vsby1tYXRlcmlhbC1kZXBvc2l0by1uZXcvbGlzdGEtbmFvLXZpbmN1bGFkb3MvbGlzdGEtbmFvLXZpbmN1bGFkb3MuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "j3AB":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/cadastros/vinculo-material-deposito-new/vinculo-material-deposito-new.module.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: AbastecimentoCadastrosVinculoMaterialDepositoNewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastrosVinculoMaterialDepositoNewModule", function() { return AbastecimentoCadastrosVinculoMaterialDepositoNewModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/not-found/not-found.module */ "sCnT");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-order-pipe */ "fnxe");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var _vinculo_material_deposito_new_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./vinculo-material-deposito-new-routing.module */ "U9LM");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/locales/pt */ "vT00");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lista/lista.component */ "t+/W");
/* harmony import */ var _lista_nao_vinculados_lista_nao_vinculados_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lista-nao-vinculados/lista-nao-vinculados.component */ "tVLG");
/* harmony import */ var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./cadastro/cadastro.component */ "JB1Q");











/* Localização Brasil */


Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_11___default.a);
/* Localização Brasil */
//Componentes do modulo



let AbastecimentoCadastrosVinculoMaterialDepositoNewModule = class AbastecimentoCadastrosVinculoMaterialDepositoNewModule {
};
AbastecimentoCadastrosVinculoMaterialDepositoNewModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _lista_lista_component__WEBPACK_IMPORTED_MODULE_12__["AbastecimentoCadastrosVinculoMaterialDepositoListaComponent"],
            _lista_nao_vinculados_lista_nao_vinculados_component__WEBPACK_IMPORTED_MODULE_13__["AbastecimentoCadastrosVinculoMaterialDepositoListaNaoVinculadosComponent"],
            _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_14__["AbastecimentoCadastrosVinculoMaterialDepositoCadastroComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _vinculo_material_deposito_new_routing_module__WEBPACK_IMPORTED_MODULE_10__["AbastecimentoCadastrosVinculoMaterialDepositoNewRoutingModule"],
            src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_4__["NotFoundModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["PaginationModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["TabsModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["ModalModule"].forRoot(),
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["NgSelectModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_6__["TemplatesModule"],
            ngx_order_pipe__WEBPACK_IMPORTED_MODULE_8__["OrderModule"]
        ],
        providers: [{ provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"], useValue: 'pt-PT' }]
    })
], AbastecimentoCadastrosVinculoMaterialDepositoNewModule);



/***/ }),

/***/ "jXlm":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/abastecimento/cadastros/vinculo-material-deposito-new/cadastro/cadastro.component.html ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen\r\n  *ngIf=\"loaderFullScreen\"\r\n></loader-spinner-full-screen>\r\n<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<app-header appTitle=\"Cadastro\">\r\n  <button\r\n    type=\"button\"\r\n    [disabled]=\"form.status == 'INVALID'\"\r\n    (click)=\"onSave()\"\r\n  >\r\n    Guardar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\r\n  <div class=\"container\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"row justify-content-md-center mt-3\">\r\n        <div class=\"col-md-7\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <p class=\"pFont\">\r\n                <strong>TIPO DE MATERIAL</strong><br />\r\n                {{ tipoMaterial }}\r\n              </p>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <p class=\"pFont\">\r\n                <strong>LINHA</strong><br />\r\n                {{ linha }}\r\n              </p>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <p class=\"pFont\">\r\n                <strong>SUB LINHA</strong><br />\r\n                {{ subLinha ? subLinha : '-' }}\r\n              </p>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <p class=\"pFont\">\r\n                <strong>CLASSE</strong><br />\r\n                {{ classe }}\r\n              </p>\r\n            </div>\r\n          </div>\r\n          <form [formGroup]=\"form\" autocomplete=\"off\">\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-lg-6 mb-lg-0\">\r\n                <label for=\"deposito\">Empresas</label>\r\n                <ng-select\r\n                  [searchable]=\"true\"\r\n                  [clearable]=\"true\"\r\n                  [multiple]=\"true\"\r\n                  [items]=\"empresas\"\r\n                  [virtualScroll]=\"true\"\r\n                  [hideSelected]=\"true\"\r\n                  [closeOnSelect]=\"false\"\r\n                  placeholder=\"Selecione...\"\r\n                  bindLabel=\"NM_FANT\"\r\n                  bindValue=\"ID\"\r\n                  formControlName=\"empresas\"\r\n                  (change)=\"getDepositos()\"\r\n                >\r\n                </ng-select>\r\n              </div>\r\n              <div class=\"form-group col-lg-6 mb-lg-0\">\r\n                <label for=\"deposito\">Depósitos</label>\r\n                <ng-select\r\n                  [searchable]=\"true\"\r\n                  [clearable]=\"true\"\r\n                  [multiple]=\"true\"\r\n                  [items]=\"depositos\"\r\n                  [virtualScroll]=\"true\"\r\n                  [hideSelected]=\"true\"\r\n                  [closeOnSelect]=\"false\"\r\n                  placeholder=\"Selecione...\"\r\n                  bindLabel=\"NM_DEPO\"\r\n                  bindValue=\"ID\"\r\n                  formControlName=\"depositos\"\r\n                  [ngClass]=\"\r\n                  onFieldError('depositos') +\r\n                  ' ' +\r\n                  onFieldRequired('depositos')\r\n                \"\r\n                >\r\n                </ng-select>\r\n                <invalid-form-control\r\n                  [show]=\"onFieldInvalid('depositos')\"\r\n                  message=\"Depósito é obrigatório.\"\r\n                >\r\n                </invalid-form-control>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <div\r\n        class=\"row justify-content-md-center mt-3\"\r\n        *ngIf=\"!noResultDepositos\"\r\n      >\r\n        <div class=\"form-group col-md-7\">\r\n          <label for=\"depositosVinculados\">Depósitos Vinculados</label>\r\n          <div class=\"table-reponsive\">\r\n            <custom-table>\r\n              <ng-template #thead let-thead>\r\n                <tr class=\"text-center\">\r\n                  <th scope=\"col\">Empresa</th>\r\n                  <th scope=\"col\">Depósito</th>\r\n                  <th scope=\"col\" class=\"hover\"></th>\r\n                </tr>\r\n              </ng-template>\r\n              <ng-template #tbody let-tbody>\r\n                <tr *ngFor=\"let item of dadosDepositosAssociados\">\r\n                  <td class=\"text-left\">{{ item.NM_EMPR }}</td>\r\n                  <td class=\"text-left\">{{ item.NM_DEPO }}</td>\r\n                  <td class=\"text-center\" style=\"width: 40px;\">\r\n                    <div>\r\n                      <button\r\n                        type=\"button\"\r\n                        class=\"btn-icon-sm\"\r\n                        placement=\"left\"\r\n                        tooltip=\"Ativar/Desativar\"\r\n                        container=\"body\"\r\n                       (click)=\"onUpdate(item)\"\r\n                      >\r\n                        <i [ngClass]=\"item.IN_STAT == 1 ? 'fas fa-toggle-on text-success' : 'fas fa-toggle-off'\"></i>\r\n                      </button>\r\n                    </div>\r\n                  </td>\r\n                  <!-- <td style=\"width: 40px;\">\r\n                    <button\r\n                      class=\"btn-icon-sm text-center\"\r\n                      style=\"color: red;\"\r\n                      tooltip=\"Excluir\"\r\n                      (click)=\"onDelete(item)\"\r\n                    >\r\n                      <i class=\"far fa-trash-alt\"></i>\r\n                    </button>\r\n                  </td> -->\r\n                </tr>\r\n              </ng-template>\r\n            </custom-table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</app-body>\r\n");

/***/ }),

/***/ "sq3E":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/cadastros/vinculo-material-deposito-new/lista/lista.component.scss ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bg-row-selected {\n  background-color: #91b8f0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hYmFzdGVjaW1lbnRvL2NhZGFzdHJvcy92aW5jdWxvLW1hdGVyaWFsLWRlcG9zaXRvLW5ldy9saXN0YS9saXN0YS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FiYXN0ZWNpbWVudG8vY2FkYXN0cm9zL3ZpbmN1bG8tbWF0ZXJpYWwtZGVwb3NpdG8tbmV3L2xpc3RhL2xpc3RhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnLXJvdy1zZWxlY3RlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkxYjhmMCFpbXBvcnRhbnQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "t+/W":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/cadastros/vinculo-material-deposito-new/lista/lista.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: AbastecimentoCadastrosVinculoMaterialDepositoListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastrosVinculoMaterialDepositoListaComponent", function() { return AbastecimentoCadastrosVinculoMaterialDepositoListaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lista.component.html */ "BWiG");
/* harmony import */ var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lista.component.scss */ "sq3E");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var _vinculo_material_deposito_new_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../vinculo-material-deposito-new.service */ "tRPG");










//Converte rota em base64


let AbastecimentoCadastrosVinculoMaterialDepositoListaComponent = class AbastecimentoCadastrosVinculoMaterialDepositoListaComponent {
    constructor(activatedRoute, router, formBuilder, pnotifyService, atividadesService, routerService, titleService, service) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.formBuilder = formBuilder;
        this.pnotifyService = pnotifyService;
        this.atividadesService = atividadesService;
        this.routerService = routerService;
        this.titleService = titleService;
        this.service = service;
        this.loaderFullScreen = true;
        this.loading = false;
        this.loadingLogs = false;
        this.loadingDetalhes = false;
        this.loadingDetalhesLog = false;
        this.noResult = false;
        this.noResultDetalhes = false;
        this.noResultLogs = false;
        this.compressedTable = false;
        this.selectedRow = false;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.idUsuario = this.currentUser['info']['id'];
        this.breadCrumbTree = [];
        this.depositos = [];
        this.linhas = [];
        this.subLinhas = [];
        this.classes = [];
        this.dados = [];
        this.dadosExcel = [];
        this.dadosLogs = [];
        this.dadosDetalhes = [];
        this.tiposMateriais = [];
        this.tiposCondicao = [
            { id: 2, name: "Associado" },
            { id: 3, name: "Não associado" }
        ];
        /* Ordenação */
        this.reverse = false;
        this.key = 'TP_MATE';
        /* Ordenação */
        /* Ordenação modal */
        this.reverseA = false;
        this.keyA = 'NM_APOI_TIPO_MATE';
        /* Paginação */
        this.itemsPerPage = 15;
        this.totalItems = 15;
        this.currentPage = 1;
        this.begin = 0;
        this.end = 15;
        /* Paginação */
        this.currentPageA = 1;
        this.beginA = 0;
        this.endA = 15;
        this.form = this.formBuilder.group({
            deposito: [null],
            tipoMaterial: [null],
            linha: [null],
            subLinha: [null],
            classe: [null],
            condicao: [null]
        });
    }
    ngOnInit() {
        setTimeout(() => {
            this.loaderFullScreen = false;
        }, 1000);
        this.form.get("condicao").disable();
        this.registrarAcesso();
        this.setBreadCrumb();
        this.getLinhas();
        this.getTiposMateriais();
        this.getDepositos();
        this.checkRouterParams();
        this.titleService.setTitle('Vinculo Material Depósito');
    }
    registrarAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
    }
    setBreadCrumb() {
        this.activatedRoute.params.subscribe((params) => {
            this.breadCrumbTree = [
                {
                    descricao: 'Home',
                    routerLink: '/abastecimento/home'
                },
                {
                    descricao: 'Cadastros',
                    routerLink: `/abastecimento/cadastros/${params['idSubModulo']}`
                },
                {
                    descricao: 'Vínculo de material e depósito'
                }
            ];
        });
    }
    getLinhas() {
        let idSituacao = 1;
        this.loaderNavbar = true;
        this.linhas = [];
        this.service
            .getLinhas(idSituacao)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => (this.loaderNavbar = false)))
            .subscribe(res => {
            if (Object.keys(res).length > 0) {
                this.linhas = res['body']['result'];
                this.form.get('classe').disable();
                this.form.get('subLinha').disable();
            }
        }, error => {
            this.pnotifyService.error('Erro ao carregar linhas');
        });
    }
    getSubLinhas() {
        let idSituacao = 1;
        let linha = this.form.get('linha').value;
        this.loaderNavbar = true;
        this.subLinhas = [];
        this.form.get('subLinha').disable();
        if (this.form.get('linha').status === 'VALID' && Object.keys(linha).length > 0) {
            let descricaoLinhas = this.form.get('linha').value;
            this.service
                .getSubLinhas(descricaoLinhas, idSituacao)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => (this.loaderNavbar = false)))
                .subscribe(res => {
                if (Object.keys(res).length > 0) {
                    if (res.status === 200) {
                        if (res['body']['responseCode'] === 200) {
                            this.subLinhas = res['body']['result'];
                            this.form.get('subLinha').reset();
                            this.form.get('subLinha').enable();
                        }
                        else if (res['body']['responseCode'] === 404) {
                            this.form.get('subLinha').reset();
                            this.form.get('subLinha').disable();
                            this.pnotifyService.notice('Não há sublinha cadastrada');
                        }
                    }
                }
            }, error => {
                this.pnotifyService.error('Erro ao carregar sublinha');
            });
        }
        else {
            this.form.get('subLinha').reset();
            this.form.get('subLinha').disable();
        }
    }
    getClasses() {
        let idSituacao = 1;
        this.classes = [];
        this.loaderNavbar = true;
        if (this.form.get('linha').status === 'VALID') {
            let descricaoLinhas = this.form.get('linha').value;
            let idSubLinha = this.form.get('subLinha').value;
            this.service
                .getClasses(descricaoLinhas, idSubLinha, idSituacao)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => (this.loaderNavbar = false)))
                .subscribe(res => {
                if (Object.keys(res).length > 0) {
                    this.classes = res['body']['result'];
                    this.form.get('classe').reset();
                    this.form.get('classe').enable();
                }
            }, error => {
                this.pnotifyService.error('Erro ao carregar classe');
            });
        }
        else {
            this.form.get('classe').reset();
            this.form.get('classe').disable();
        }
    }
    getDepositos() {
        let idSituacao = 1;
        this.loaderNavbar = true;
        this.depositos = [];
        this.service
            .getDepositos(idSituacao, '')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => (this.loaderNavbar = false)))
            .subscribe(res => {
            if (Object.keys(res).length > 0) {
                if (res['body']['responseCode'] == 200) {
                    this.depositos = res['body']['result'];
                }
                else if (res['body']['responseCode'] == 404) {
                }
            }
        }, error => {
            this.pnotifyService.error('Erro ao carregar depósito');
        });
    }
    getTiposMateriais() {
        let idSituacao = 1;
        this.loaderNavbar = true;
        this.tiposMateriais = [];
        this.service
            .getTiposMateriais(idSituacao)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => (this.loaderNavbar = false)))
            .subscribe(res => {
            if (res.status === 200) {
                this.tiposMateriais = res['body']['result'];
            }
        }, error => {
            this.pnotifyService.error('Erro ao carregar tipos materiais');
        });
    }
    checkRouterParams() {
        this.activatedRouteSubscription = this.activatedRoute.queryParams.subscribe((queryParams) => {
            if (Object.keys(queryParams).length > 0) {
                let _response = this.routerService.getBase64UrlParams(queryParams);
                this.search(_response);
                this.setFormValues(_response);
            }
        });
        this.activatedRouteSubscription.unsubscribe();
    }
    setFormValues(queryParams) {
        let idSituacao = 1;
        let deposito = queryParams['ID_DEPO'] ? queryParams['ID_DEPO'] : null;
        let tipoMaterial = queryParams['ID_APOI_TIPO_MATE'];
        let linha = queryParams['ID_LINH'];
        let subLinha = queryParams['ID_SUB_LINH'] ? queryParams['ID_SUB_LINH'] : null;
        let classe = queryParams['ID_CLAS'] ? queryParams['ID_CLAS'] : null;
        let condicao = queryParams['ID_SITU_MATE'] ? queryParams['ID_SITU_MATE'] : 0;
        if (condicao > 0) {
            this.form.get("condicao").enable();
        }
        if (Object.keys(linha).length > 0) {
            this.loaderNavbar = true;
            /* classes */
            this.service
                .getClasses(linha, subLinha, idSituacao)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => (this.loaderNavbar = false)))
                .subscribe(res => {
                if (Object.keys(res).length > 0) {
                    if (res.status === 200) {
                        if (res['body']['responseCode'] === 200) {
                            this.classes = res['body']['result'];
                            this.form.get('classe').enable();
                        }
                    }
                }
            }, error => {
                this.pnotifyService.error('Erro ao carregar Classes');
            });
        }
        else {
            this.form.get('classe').disable();
        }
        /* sublinhas */
        if (Object.keys(linha).length > 0) {
            this.service
                .getSubLinhas(linha, idSituacao)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => (this.loaderNavbar = false)))
                .subscribe(res => {
                if (Object.keys(res).length > 0) {
                    if (res.status == 200) {
                        if (res['body']['responseCode'] === 200) {
                            this.subLinhas = res['body']['result'];
                            this.form.get('subLinha').enable();
                        }
                    }
                }
            }, error => {
                this.pnotifyService.error('Erro ao carregar SubLinha');
            });
        }
        else {
            this.form.get('subLinha').disable();
        }
        this.form.patchValue({
            deposito: deposito,
            tipoMaterial: tipoMaterial,
            linha: linha,
            subLinha: subLinha,
            classe: classe,
            condicao: condicao
        });
    }
    onFilter() {
        this.setRouterParams({
            ID_DEPO: this.form.value['deposito'] === null ||
                this.form.value['deposito'] === undefined
                ? ''
                : this.form.value['deposito'],
            ID_APOI_TIPO_MATE: this.form.value['tipoMaterial'] === null ||
                this.form.value['tipoMaterial'] === undefined
                ? ''
                : this.form.value['tipoMaterial'],
            ID_LINH: this.form.value['linha'] === null ||
                this.form.value['linha'] === undefined
                ? ''
                : this.form.value['linha'],
            ID_SUB_LINH: this.form.value['subLinha'] === null ||
                this.form.value['subLinha'] === undefined
                ? ''
                : this.form.value['subLinha'],
            ID_CLAS: this.form.value['classe'] === null ||
                this.form.value['classe'] === undefined
                ? ''
                : this.form.value['classe'],
            ID_SITU_MATE: this.form.value['condicao'] === null ||
                this.form.value['condicao'] === undefined
                ? 0
                : this.form.value['condicao'],
        });
        this.onClose();
    }
    setRouterParams(params) {
        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams(params)
        });
        this.search(params);
    }
    search(params) {
        this.loaderNavbar = true;
        this.loading = false;
        this.dados = [];
        this.service
            .getMaterialDepositos(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
            this.loaderNavbar = false;
        }))
            .subscribe(res => {
            if (res.status === 200) {
                if (res['body']['responseCode'] === 200) {
                    this.loading = true;
                    this.noResult = false;
                    this.dados = res['body']['result'];
                }
                else if (res['body']['responseCode'] === 404) {
                    this.noResult = true;
                    this.loading = false;
                    this.pnotifyService.notice('Não há dados');
                }
            }
        }, error => {
            this.noResult = true;
            this.loading = false;
            this.pnotifyService.error('Erro ao carregar lista de material depósito');
        });
    }
    excelExport() {
        let queryParams = {
            IN_GERA_RELA_EXCE: 1,
            ID_USUA: this.idUsuario,
            ID_DEPO: this.form.value['deposito'] === null ||
                this.form.value['deposito'] === undefined
                ? ''
                : this.form.value['deposito'],
            ID_APOI_TIPO_MATE: this.form.value['tipoMaterial'] === null ||
                this.form.value['tipoMaterial'] === undefined
                ? ''
                : this.form.value['tipoMaterial'].toString(),
            ID_LINH: this.form.value['linha'] === null ||
                this.form.value['linha'] === undefined
                ? ''
                : this.form.value['linha'].toString(),
            ID_SUB_LINH: this.form.value['subLinha'] === null ||
                this.form.value['subLinha'] === undefined
                ? ''
                : this.form.value['subLinha'].toString(),
            ID_CLAS: this.form.value['classe'] === null ||
                this.form.value['classe'] === undefined
                ? ''
                : this.form.value['classe'].toString(),
            ID_SITU_MATE: this.form.value['condicao'] === null ||
                this.form.value['condicao'] === undefined
                ? 0
                : this.form.value['condicao'],
        };
        this.getSearchExcel(queryParams);
    }
    getSearchExcel(params) {
        this.loaderNavbar = true;
        this.dadosExcel = [];
        this.service
            .getMaterialDepositosDetalhes(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => (this.loaderNavbar = false)))
            .subscribe((res) => {
            if (Object.keys(res).length > 0) {
                if (res['body']['responseCode'] === 200) {
                    this.dadosExcel = res['body']['result'];
                    this.pnotifyService.success(this.dadosExcel);
                }
                else if (res['body']['responseCode'] === 404) {
                    this.pnotifyService.notice('Nenhuma informação encontrada');
                }
            }
        }, error => {
            this.pnotifyService.error('Erro ao carregar para excel dados');
        });
    }
    getMaterialDepositosDetalhes(params) {
        this.loaderNavbar = true;
        this.loadingDetalhes = false;
        this.dadosDetalhes = [];
        this.service
            .getMaterialDepositosDetalhes(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
            this.loaderNavbar = false;
        }))
            .subscribe(res => {
            if (res.status === 200) {
                if (res['body']['responseCode'] === 200) {
                    this.dadosDetalhes = res['body']['result'];
                    this.noResultDetalhes = false;
                    this.loadingDetalhes = true;
                }
                else if (res['body']['responseCode'] === 404) {
                    this.loadingDetalhes = false;
                    this.noResultDetalhes = true;
                    this.pnotifyService.notice('Não há dados');
                }
            }
        }, error => {
            this.pnotifyService.error('Erro ao carregar detalhes de material depósito');
            this.loadingDetalhes = false;
        });
    }
    getMaterialDepositosLogs(params) {
        this.loaderNavbar = true;
        this.loadingLogs = false;
        this.dadosLogs = [];
        this.loadingDetalhesLog = false;
        this.service
            .getLogs(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => (this.loaderNavbar = false)))
            .subscribe(res => {
            if (res.status === 200) {
                if (res['body']['responseCode'] === 200) {
                    this.dadosLogs = res['body']['result'];
                    this.noResultLogs = false;
                    this.loadingLogs = true;
                    this.loadingDetalhesLog = true;
                }
                else if (res['body']['responseCode'] === 404) {
                    this.pnotifyService.notice('Não há dados');
                    this.loadingDetalhesLog = true;
                    this.noResultLogs = true;
                    this.loadingLogs = false;
                }
            }
        }, error => {
            this.pnotifyService.error('Erro ao carregar detalhes logs');
            this.noResultLogs = true;
            this.loadingLogs = false;
        });
    }
    openTab(i) {
        i.select = !i.select;
        this.getMaterialDepositosDetalhes({
            ID_CLAS: i['ID_CLAS'],
            ID_APOI_TIPO_MATE: i['ID_APOI_TIPO_MATE']
        });
        this.compressedTable = true;
    }
    openModal(i) {
        this.getMaterialDepositosLogs({
            ID_ASSO_DEPO_MATE: i['ID']
        });
    }
    onClose() {
        this.dados.forEach(e => {
            e.select = false;
        });
        this.selectedRow = false;
        this.compressedTable = false;
    }
    onAdd(item) {
        this.router.navigate(['../cadastro'], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams({
                item
            })
        });
    }
    enableCondicao(event) {
        if (event) {
            this.form.get("condicao").enable();
            this.form.get("condicao").setValue(2);
        }
        else {
            this.form.get("condicao").disable();
            this.form.get("condicao").reset();
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
    /* Ordenação */
    sort(key) {
        this.key = key;
        this.reverse = !this.reverse;
    }
    /* Ordenação */
    /* Paginação Tabela Principal*/
    onPageChanged(event) {
        this.begin = (event.page - 1) * event.itemsPerPage;
        this.end = event.page * event.itemsPerPage;
    }
    /* Paginação */
    /* Paginação Modal*/
    onPageChangedA(event) {
        this.beginA = (event.page - 1) * event.itemsPerPage;
        this.endA = event.page * event.itemsPerPage;
    }
    sortA(keyA) {
        this.keyA = keyA;
        this.reverseA = !this.reverseA;
    }
};
AbastecimentoCadastrosVinculoMaterialDepositoListaComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_8__["AtividadesService"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_9__["TitleService"] },
    { type: _vinculo_material_deposito_new_service__WEBPACK_IMPORTED_MODULE_11__["AbastecimentoCadastrosVinculoMaterialDepositoNewService"] }
];
AbastecimentoCadastrosVinculoMaterialDepositoListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_8__["AtividadesService"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_9__["TitleService"],
        _vinculo_material_deposito_new_service__WEBPACK_IMPORTED_MODULE_11__["AbastecimentoCadastrosVinculoMaterialDepositoNewService"]])
], AbastecimentoCadastrosVinculoMaterialDepositoListaComponent);



/***/ }),

/***/ "tRPG":
/*!************************************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/cadastros/vinculo-material-deposito-new/vinculo-material-deposito-new.service.ts ***!
  \************************************************************************************************************************/
/*! exports provided: AbastecimentoCadastrosVinculoMaterialDepositoNewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastrosVinculoMaterialDepositoNewService", function() { return AbastecimentoCadastrosVinculoMaterialDepositoNewService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





let AbastecimentoCadastrosVinculoMaterialDepositoNewService = class AbastecimentoCadastrosVinculoMaterialDepositoNewService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.BASE_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API;
    }
    getTiposMateriais(idSituacao) {
        return this.httpClient.get(`${this.BASE_URL}/common/v2/tipos-material`, {
            params: {
                IN_STAT: idSituacao
            },
            observe: "response"
        });
    }
    getLinhas(idSituacao) {
        return this.httpClient.get(`${this.BASE_URL}/common/v2/linhas`, {
            params: {
                IN_STAT: idSituacao
            },
            observe: "response"
        });
    }
    getSubLinhas(descricaoLinhas, idSituacao) {
        return this.httpClient.get(`${this.BASE_URL}/common/v2/sub-linhas`, {
            params: {
                ID_LINH: descricaoLinhas.toString(),
                IN_STAT: idSituacao
            },
            observe: "response"
        });
    }
    getClasses(descricaoLinhas, idSubLinha, idSituacao) {
        if (!idSubLinha)
            idSubLinha = "";
        return this.httpClient.get(`${this.BASE_URL}/common/v2/classes`, {
            params: {
                ID_LINH: descricaoLinhas.toString(),
                ID_SUB_LINH: idSubLinha,
                IN_STAT: idSituacao
            },
            observe: "response"
        });
    }
    getDepositos(idSituacao, idEmpresa) {
        return this.httpClient.get(`${this.BASE_URL}/common/v2/depositos`, {
            params: {
                IN_STAT: idSituacao,
                ID_EMPR: idEmpresa.toString()
            },
            observe: "response"
        });
    }
    getEmpresas(idSituacao) {
        return this.httpClient.get(`${this.BASE_URL}/common/v2/empresas`, {
            params: {
                IN_STAT: idSituacao
            },
            observe: "response"
        });
    }
    getMaterialDepositosDetalhes(params) {
        return this.httpClient.get(`${this.BASE_URL}/abastecimento/cadastros/depositos-associados-materiais`, {
            params,
            observe: "response"
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    }
    getMateDispAssociacao() {
        return this.httpClient.get(`${this.BASE_URL}/abastecimento/cadastros/materiais-disponiveis-associacao-depositos`, {
            params: {
                ID_SITU_MATE: "1",
            },
            observe: "response"
        });
        ;
    }
    getMaterialDepositos(params) {
        return this.httpClient.get(`${this.BASE_URL}/abastecimento/cadastros/materiais-disponiveis-associacao-depositos`, {
            params: {
                ID_DEPO: params["ID_DEPO"],
                ID_APOI_TIPO_MATE: params["ID_APOI_TIPO_MATE"].toString(),
                ID_LINH: params["ID_LINH"].toString(),
                ID_SUB_LINH: params["ID_SUB_LINH"].toString(),
                ID_CLAS: params["ID_CLAS"].toString(),
                ID_SITU_MATE: params["ID_SITU_MATE"]
            },
            observe: "response"
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    }
    postMaterialDeposito(record) {
        return this.httpClient.post(`${this.BASE_URL}/abastecimento/cadastros/deposito-associado-material`, record)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    }
    updateMaterialDeposito(record) {
        return this.httpClient.post(`${this.BASE_URL}/abastecimento/cadastros/deposito-associado-material-alterar`, record)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    }
    deleteMaterialDeposito(record) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            body: record
        };
        return this.httpClient.delete(`${this.BASE_URL}/abastecimento/cadastros/deposito-associado-material`, options);
    }
    getLogs(params) {
        return this.httpClient.get(`${this.BASE_URL}/abastecimento/cadastros/depositos-associados-materiais-auditoria`, {
            params,
            observe: "response"
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    }
};
AbastecimentoCadastrosVinculoMaterialDepositoNewService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
AbastecimentoCadastrosVinculoMaterialDepositoNewService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], AbastecimentoCadastrosVinculoMaterialDepositoNewService);



/***/ }),

/***/ "tVLG":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/cadastros/vinculo-material-deposito-new/lista-nao-vinculados/lista-nao-vinculados.component.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: AbastecimentoCadastrosVinculoMaterialDepositoListaNaoVinculadosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastrosVinculoMaterialDepositoListaNaoVinculadosComponent", function() { return AbastecimentoCadastrosVinculoMaterialDepositoListaNaoVinculadosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lista_nao_vinculados_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lista-nao-vinculados.component.html */ "WR3X");
/* harmony import */ var _lista_nao_vinculados_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lista-nao-vinculados.component.scss */ "ck7C");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var _vinculo_material_deposito_new_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../vinculo-material-deposito-new.service */ "tRPG");









//Converte rota em base64


let AbastecimentoCadastrosVinculoMaterialDepositoListaNaoVinculadosComponent = class AbastecimentoCadastrosVinculoMaterialDepositoListaNaoVinculadosComponent {
    /* Paginação */
    constructor(activatedRoute, router, pnotifyService, atividadesService, routerService, titleService, service) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.pnotifyService = pnotifyService;
        this.atividadesService = atividadesService;
        this.routerService = routerService;
        this.titleService = titleService;
        this.service = service;
        this.loaderFullScreen = true;
        this.loading = false;
        this.noResult = false;
        this.breadCrumbTree = [];
        this.dadosMateDispAssociacao = [];
        /* Ordenação */
        this.reverse = false;
        this.key = 'NM_APOI_TIPO_MATE';
        /* Ordenação */
        /* Paginação */
        this.itemsPerPage = 15;
        this.totalItems = 15;
        this.currentPage = 1;
        this.begin = 0;
        this.end = 15;
    }
    ngOnInit() {
        setTimeout(() => {
            this.loaderFullScreen = false;
        }, 1000);
        this.registrarAcesso();
        this.setBreadCrumb();
        this.getMateDispAssociacao();
        this.titleService.setTitle('Vinculo Material Depósito');
    }
    registrarAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
    }
    setBreadCrumb() {
        this.activatedRoute.params.subscribe((params) => {
            this.breadCrumbTree = [
                {
                    descricao: 'Home',
                    routerLink: '/abastecimento/home'
                },
                {
                    descricao: 'Cadastros',
                    routerLink: `/abastecimento/cadastros/${params['idSubModulo']}`
                },
                {
                    descricao: 'Vínculo Material Depósito',
                    routerLink: `/abastecimento/cadastros/${params['idSubModulo']}/vinculo-material-deposito/lista`
                },
                {
                    descricao: 'Não Vinculados'
                },
            ];
        });
    }
    getMateDispAssociacao() {
        this.loaderNavbar = true;
        this.loading = false;
        this.dadosMateDispAssociacao = [];
        this.service
            .getMateDispAssociacao()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => {
            this.loaderNavbar = false;
        }))
            .subscribe(res => {
            if (res.status === 200) {
                if (res['body']['responseCode'] === 200) {
                    this.dadosMateDispAssociacao = res['body']['result'];
                    this.loading = true;
                    this.noResult = false;
                }
                else if (res['body']['responseCode'] === 404) {
                    this.noResult = true;
                    this.loading = false;
                    this.pnotifyService.notice('Não há dados');
                }
            }
        }, error => {
            this.loading = false;
            this.noResult = true;
            this.pnotifyService.error('Erro ao carregar materiais disponiveis para associação');
        });
    }
    onAdd(item) {
        this.router.navigate(['../cadastro'], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams({ item })
        });
    }
    /* Ordenação */
    sort(key) {
        this.key = key;
        this.reverse = !this.reverse;
    }
    /* Ordenação */
    /* Paginação Tabela Principal*/
    onPageChanged(event) {
        this.begin = (event.page - 1) * event.itemsPerPage;
        this.end = event.page * event.itemsPerPage;
    }
};
AbastecimentoCadastrosVinculoMaterialDepositoListaNaoVinculadosComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__["AtividadesService"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__["RouterService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_8__["TitleService"] },
    { type: _vinculo_material_deposito_new_service__WEBPACK_IMPORTED_MODULE_10__["AbastecimentoCadastrosVinculoMaterialDepositoNewService"] }
];
AbastecimentoCadastrosVinculoMaterialDepositoListaNaoVinculadosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'lista-nao-vinculados',
        template: _raw_loader_lista_nao_vinculados_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_nao_vinculados_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__["AtividadesService"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__["RouterService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_8__["TitleService"],
        _vinculo_material_deposito_new_service__WEBPACK_IMPORTED_MODULE_10__["AbastecimentoCadastrosVinculoMaterialDepositoNewService"]])
], AbastecimentoCadastrosVinculoMaterialDepositoListaNaoVinculadosComponent);



/***/ })

}]);
//# sourceMappingURL=vinculo-material-deposito-new-vinculo-material-deposito-new-module-es2015.js.map