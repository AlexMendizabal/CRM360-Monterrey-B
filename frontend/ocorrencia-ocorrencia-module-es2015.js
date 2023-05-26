(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ocorrencia-ocorrencia-module"],{

/***/ "DPcc":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/tecnologia-informacao/contratos/ocorrencia/cadastro/cadastro.component.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGVjbm9sb2dpYS1pbmZvcm1hY2FvL2NvbnRyYXRvcy9vY29ycmVuY2lhL2NhZGFzdHJvL2NhZGFzdHJvLmNvbXBvbmVudC5zY3NzIn0= */");

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

/***/ "G4h3":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/tecnologia-informacao/contratos/ocorrencia/parecer/parecer.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<form [formGroup]=\"form\" autocomplete=\"off\" [hidden] = \"loading\">\n  <fieldset  class=\"col-12\">\n    <fieldset class=\"border rounded shadow-sm col-12 pt-2 mx-auto\">\n      <legend>Dados do Parecer</legend>\n      <div class=\"form-row justify-content-center\">\n        <div class=\"form-group col-md-6 pl-0\">\n          <label for=\"TP_RESP\">Tipo de Responsável</label>\n          <select\n            class=\"form-control custom-select\"\n            id=\"TP_RESP\"\n            formControlName=\"TP_RESP\"\n            [ngClass]=\"onFieldRequired('TP_RESP')\">\n            <option value=\"EMPRESA\">EMPRESA</option>\n            <option value=\"FUNCIONARIO\">FUNCIONARIO</option>\n          </select>\n          <invalid-form-control [show]=\"onFieldInvalid('TP_RESP')\" message=\"Tipo de Responsável é obrigatório.\"></invalid-form-control>\n        </div> \n        <div class=\"form-group col-md-6 pl-0\">\n          <label for=\"DS_STAT_CONC\">Status da Ocorrência</label>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"DS_STAT_CONC\"\n            formControlName=\"DS_STAT_CONC\"\n            placeholder=\"Digite...\"\n          />\n          <invalid-form-control [show]=\"onFieldInvalid('DS_STAT_CONC')\" message=\"Status é obrigatório.\"></invalid-form-control>\n        </div> \n      </div>\n      <div class=\"form-row justify-content-center\">\n        <div class=\"form-group col-md-6 pl-0\">\n          <label for=\"DT_DEVO_APRE\">Data de Devolução</label>\n          <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\n            </div>\n            <input\n            class=\"form-control\"\n            id=\"DT_DEVO_APRE\"\n            type=\"text\"\n            bsDatepicker\n            placeholder=\"Selecione...\"\n            [bsConfig]=\"bsConfig\"\n            formControlName=\"DT_DEVO_APRE\">\n          </div>\n        </div>\n        <div class=\"form-group col-md-6 pl-0\">\n          <label for=\"VL_DSCO\">Valor</label>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"Digite...\"\n            id=\"VL_DSCO\"\n            formControlName=\"VL_DSCO\"\n            autocomplete=\"new-password\"\n            currencyMask [options]=\"{ align: 'left', prefix: 'R$ ', thousands: '.', decimal: ',' }\"          >\n        </div>\n      </div>\n      <div class=\"form-row justify-content-center\">\n        <div class=\"form-group col-12 pl-0\">\n          <label for=\"NM_EMPR_REPA\">Empresa</label>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"NM_EMPR_REPA\"\n            formControlName=\"NM_EMPR_REPA\"\n            placeholder=\"Digite...\"\n          />\n        </div>\n        <div class=\"form-group col-12 pl-0\">\n          <label for=\"CONT_EMPR_REPA\">Contato</label>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"CONT_EMPR_REPA\"\n            formControlName=\"CONT_EMPR_REPA\"\n            placeholder=\"Digite...\"\n          />\n        </div>\n      </div>\n      <div class=\"form-row justify-content-center\">\n        <div class=\"form-group col-md-12 pl-0\">\n          <label for=\"DS_OBSE\">Descrição</label>\n          <textarea \n            class=\"form-control\" \n            id=\"DS_OBSE\"\n            formControlName=\"DS_OBSE\" \n            rows=\"3\"\n            [ngClass]=\"onFieldRequired('DS_OBSE')\"\n            >\n          </textarea>\n          <invalid-form-control [show]=\"onFieldInvalid('DS_OBSE')\" message=\"Descrição é obrigatório, com no minímo 10 caracteres.\"></invalid-form-control>\n        </div> \n      </div>\n    </fieldset>\n    <br>\n    <fieldset class=\"border rounded shadow-sm col-12 pt-2 mx-auto\">\n      <legend>Responsáveis</legend>\n      <div formArrayName=\"responsaveis\">\n        <div class=\"form-row\">\n          <div class=\"form-group col mb-0 d-flex justify-content-between\">\n            <div class=\"mtc-title\"></div>\n            <div>\n              <a\n                class=\"text-secondary\"\n                (click)=\"onAddResponsavel()\"\n                href=\"javascript:void(0)\">\n                <b>Adicionar</b>\n              </a>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-row\"  *ngFor=\"let item of formResponsaveis.controls; let i = index\" [formGroupName]=\"i\">\n          <div class=\"form-group col mb-0\">\n            <div class=\"form-row\">\n              <div class=\"form-group col-md-3 pl-0\">\n                <label for=\"NR_MATR_RESP\">Matricula</label>\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  id=\"NR_MATR_RESP\"\n                  formControlName=\"NR_MATR_RESP\"\n                  placeholder=\"Digite...\"\n                  [ngClass]=\"onNestedFieldError('responsaveis', i, 'NR_MATR_RESP') + ' ' + onNestedFieldRequired('responsaveis', i, 'NR_MATR_RESP')\"\n                >\n              </div>\n              <div class=\"form-group col-md-8 pl-0\">\n                <div class=\"mb-0 d-flex justify-content-between w-100\" style=\"height: 22px\">\n                  <label class=\"my-auto\" for=\"NM_RESP\">Responsável</label>\n                  <div class=\"my-auto text-uppercase\" style=\"font-size: 10px\">\n                    <a\n                      class=\"text-primary\"\n                      href=\"javascript:void(0)\"\n                      (click)=\"openModal(selecionarUsuarios, i)\">\n                      <strong>Selecionar</strong>\n                    </a>\n                  </div>\n                </div>\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  id=\"NM_RESP\"\n                  formControlName=\"NM_RESP\"\n                  [ngClass]=\"onNestedFieldError('responsaveis', i, 'NM_RESP') + ' ' + onNestedFieldRequired('responsaveis', i, 'NM_RESP')\">\n              </div>\n              <div class=\"col-1 pt-4 mt-1 d-flex justify-content-center\">\n                <button\n                  type=\"button\"\n                  class=\"btn-icon\"\n                  (click)=\"onDeleteResponsavel(i)\">\n                  <i class=\"fas fa-trash\"></i>\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <br>\n    </fieldset>\n    <br>\n    <fieldset class=\"border rounded shadow-sm col-12 pt-2 pb-2 mx-auto\">\n      <legend>Documentos</legend>\n      <div class=\"form-group border rounded p-1\">\n        <div>\n          <label for=\"documento\" class=\"w-100 d-flex justify-content-between align-items-center m-0 py-1\" style=\"cursor: pointer;\">\n            <span>Novo Documento</span>\n          </label>\n          <input\n            id=\"documento\"\n            type=\"file\"\n            (change)=\"appendFile($event.target.files)\"\n            class=\"d-none\"\n            >\n        </div>\n      </div>\n      <ul>\n        <li class=\"d-flex justify-content-between\" *ngFor=\"let item of documentos ; let index = index\">\n          <div>{{ item.NM_DOCU | uppercase }}</div>\n          <div>\n            <a\n              [hidden]=\"!item.ID_LOGI_ENMA_FHNC_DOCU\"\n              [href]=\"item.LINK\"\n              target=\"_blank\"\n              class=\"btn-icon-sm mx-2 text-black\"\n              tooltip=\"visualizar\"\n            >\n              <i class=\"far fa-eye\"></i>\n            </a>\n            <button\n              class=\"btn-icon-sm mx-2 hover\"\n              tooltip=\"excluir\"\n              (click)=\"onRemove(item, index)\"\n              >\n              <i class=\"fas fa-trash\"></i>\n            </button>\n          </div>\n        </li>\n      </ul>\n    </fieldset>    \n  </fieldset>\n</form>\n<div  class=\"form-row justify-content-center text-center\">\n  <button \n    type=\"button\" \n    class=\"btn btn-default btn-lg m-2\"\n    (click)=\"postParecer()\"\n    [disabled]=\"form.valid == false\"\n  >\n    <span aria-hidden=\"true\">\n     <i class=\" text-success fas fa-thumbs-up\"></i>\n    </span>Salvar\n  </button>\n</div>\n<ng-template #selecionarUsuarios>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Pesquisa de Responsáveis</h4>\n    <div class=\"d-flex justify-content-center align-items-center\">\n      <div class=\"spinner-border text-primary mr-2\" role=\"status\" *ngIf=\"loadingUsuarios\">\n        <span class=\"sr-only\">Loading...</span>\n      </div>\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModal()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n  </div>\n  <div class=\"modal-body\">\n    <advanced-filter>\n      <form [formGroup]=\"formUsuarios\">\n        <div class=\"form-row\">\n          <div class=\"form-group col-3\">\n            <label for=\"cdItem\">BUSCAR POR</label>\n            <select\n              class=\"form-control custom-select\"\n              formControlName=\"buscarPor\"\n            >\n              <option value=\"matricula\">Matricula</option>\n              <option value=\"nome\" selected> Nome Responsável</option>\n            </select>\n          </div>\n          <div class=\"form-group col-9\">\n            <label>TERMO DE PESQUISA</label>\n            <div class=\"input-group\">\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"pesquisa\"\n                >\n                <div class=\"input-group-append\">\n                  <span \n                    [tooltip]=\"formUsuarios.valid == false ? 'Digite um termo de pesquisa':''\"\n                    container=\"body\"\n                    placement =\"left\"\n                  >\n                    <button\n                    style=\"height: 25px;\"\n                      [disabled]=\"formUsuarios.valid == false\"\n                      class=\"input-group-text hover\"\n                      (click)=\"getUsuarios()\"\n                      >\n                      <i class=\"fas fa-search\"></i>\n                    </button>\n                  </span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </form>\n    </advanced-filter>\n    <custom-table *ngIf=\"!loadingUsuarios && !noUsuarios\" class=\"text-center\">\n      <ng-template #thead let-thead>\n        <tr>\n          <th>Matricula</th>\n          <th>Nome Responsável</th>\n          <th></th>\n        </tr>\n      </ng-template>\n      <ng-template #tbody let-tbody>\n        <tr *ngFor=\"let usuario of usuarios | slice : begin : end; let i = index\">\n          <td>{{ usuario.matricula }}</td>\n          <td>{{ usuario.nome }}</td>\n          <td>\n            <button\n              class=\"btn-icon-sm\"\n              tooltip=\"Salvar Responsável\"\n              container=\"body\"\n              (click)=\"setUsuarios(usuario);modalRef.hide()\"\n            >\n              <i class=\"far fa-save\"></i>\n            </button>\n          </td>\n        </tr>\n      </ng-template>\n    </custom-table>\n    <div *ngIf=\"totalItems > itemsPerPage\">\n      Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\n      <pagination\n        [maxSize]=\"10\"\n        [totalItems]=\"totalItems\"\n        (pageChanged)=\"onPageChanged($event)\"\n        [(itemsPerPage)]=\"itemsPerPage\"\n        [boundaryLinks]=\"true\"\n        [(ngModel)]=\"currentPage\"\n        previousText=\"&lsaquo;\"\n        nextText=\"&rsaquo;\"\n        firstText=\"&laquo;\"\n        lastText=\"&raquo;\">\n      </pagination>\n    </div>\n  </div>\n</ng-template>");

/***/ }),

/***/ "POIC":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/tecnologia-informacao/contratos/ocorrencia/ocorrencia.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: TecnologiaInformacaoOcorrenciaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoOcorrenciaModule", function() { return TecnologiaInformacaoOcorrenciaModule; });
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
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "6No5");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "978R");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular2-text-mask */ "UVXo");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var ng_brazil__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-brazil */ "hTrW");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng2-currency-mask */ "D5nU");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./lista/lista.component */ "zvcX");
/* harmony import */ var _ocorrencia_routing_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./ocorrencia-routing.module */ "gVRY");
/* harmony import */ var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./cadastro/cadastro.component */ "qxKm");
/* harmony import */ var _parecer_parecer_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./parecer/parecer.component */ "Vh74");













Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_11___default.a);
Object(ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__["defineLocale"])('pt-br', ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__["ptBrLocale"]);
// ngx-bootstrap


// ng-select

// ng-brazil



// Modules


// Components




let TecnologiaInformacaoOcorrenciaModule = class TecnologiaInformacaoOcorrenciaModule {
};
TecnologiaInformacaoOcorrenciaModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"])({
        declarations: [
            _lista_lista_component__WEBPACK_IMPORTED_MODULE_21__["TecnologiaInformacaoCadastrosOcorrenciaListaComponent"],
            _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_23__["TecnologiaInformacaoCadastrosOcorrenciaCadastroComponent"],
            _parecer_parecer_component__WEBPACK_IMPORTED_MODULE_24__["TecnologiaInformacaoCadastrosOcorrenciaParecerComponent"],
        ],
        imports: [
            _ocorrencia_routing_module__WEBPACK_IMPORTED_MODULE_22__["TecnologiaInformacaoCadastrosOcorrenciaModuleRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
            ng2_currency_mask__WEBPACK_IMPORTED_MODULE_18__["CurrencyMaskModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__["NgSelectModule"],
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_13__["PaginationModule"].forRoot(),
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_14__["TooltipModule"].forRoot(),
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__["TabsModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__["BsDatepickerModule"].forRoot(),
            src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__["PipesModule"],
            src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_3__["NotFoundModule"],
            src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_2__["ModuleWrapperModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_19__["SharedModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_20__["TemplatesModule"],
            ng_brazil__WEBPACK_IMPORTED_MODULE_17__["NgBrazil"],
            angular2_text_mask__WEBPACK_IMPORTED_MODULE_16__["TextMaskModule"],
        ],
        providers: [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_1__["PNotifyService"], { provide: _angular_core__WEBPACK_IMPORTED_MODULE_8__["LOCALE_ID"], useValue: 'pt-br' }],
    })
], TecnologiaInformacaoOcorrenciaModule);



/***/ }),

/***/ "SQzo":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/tecnologia-informacao/contratos/ocorrencia/cadastro/cadastro.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\n<app-header appTitle=\"Cadastro de Ocorrências\">\n  <button \n    [disabled]=\"form.valid === false\"\n    (click)=\"postOcorrencia()\"\n    >\n    Salvar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\n  <form [formGroup]=\"form\" autocomplete=\"off\" [hidden] = \"loading\">\n    <fieldset  class=\"col-12\">\n      <fieldset class=\"border rounded shadow-sm col-10 pt-2 mx-auto\">\n        <legend>Dados da Ocorrência</legend>\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col-3 pl-0\">\n            <div class=\"mb-0 d-flex justify-content-between w-100\" style=\"height: 22px\">\n              <label class=\"my-auto\" for=\"CD_ITEM\">Código do Item</label>\n              <div class=\"my-auto text-uppercase\" style=\"font-size: 10px\">\n                <a\n                  class=\"text-primary\"\n                  href=\"javascript:void(0)\"\n                  (click)=\"openModal(pesquisaDeItens)\">\n                  <strong>Selecionar</strong>\n                </a>\n              </div>\n            </div>\n            <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"CD_ITEM\"\n            placeholder=\"Selecione...\"\n            formControlName=\"CD_ITEM\"\n            [ngClass]=\"onFieldError('CD_ITEM') + ' ' + onFieldRequired('CD_ITEM')\"\n            >\n            <invalid-form-control [show]=\"onFieldInvalid('CD_ITEM')\" message=\"Item é obrigatório.\"></invalid-form-control>\n          </div>\n          <div class=\"form-group col-9 pl-0\">\n            <label for=\"NM_ITEM_TIPO\">Tipo do Objeto</label>\n            <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"NM_ITEM_TIPO\"\n            placeholder=\"Selecione...\"\n            formControlName=\"NM_ITEM_TIPO\"\n            [ngClass]=\"onFieldError('NM_ITEM_TIPO') + ' ' + onFieldRequired('NM_ITEM_TIPO')\"\n            >\n            <invalid-form-control [show]=\"onFieldInvalid('NM_ITEM_TIPO')\" message=\"Tipo de item é obrigatório.\"></invalid-form-control>\n          </div>\n        </div>\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col-3 pl-0\">\n            <label for=\"VL_ITEM\">Valor</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"VL_ITEM\"\n              placeholder=\"Selecione...\"\n              currencyMask [options]=\"{ align: 'left', prefix: 'R$ ', thousands: '.', decimal: ',' }\"\n              formControlName=\"VL_ITEM\"\n              [ngClass]=\"onFieldError('VL_ITEM') + ' ' + onFieldRequired('VL_ITEM')\"\n            >\n            <invalid-form-control [show]=\"onFieldInvalid('VL_ITEM')\" message=\"Valor é obrigatório.\"></invalid-form-control>\n          </div>\n          <div class=\"form-group col-9 pl-0\">\n            <label for=\"NM_MODE\">Modelo do Objeto</label>\n            <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"NM_MODE\"\n            placeholder=\"Selecione...\"\n            formControlName=\"NM_MODE\"\n            [ngClass]=\"onFieldError('NM_MODE') + ' ' + onFieldRequired('NM_MODE')\"\n            >\n            <invalid-form-control [show]=\"onFieldInvalid('NM_MODE')\" message=\"Modelo é obrigatório.\"></invalid-form-control>\n          </div>\n        </div>\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col-12 pl-0\">\n            <label for=\"NM_PROD\">Produto</label>\n            <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"NM_PROD\"\n            placeholder=\"Selecione...\"\n            formControlName=\"NM_PROD\"\n            [ngClass]=\"onFieldError('NM_PROD') + ' ' + onFieldRequired('NM_PROD')\"\n            >\n            <invalid-form-control [show]=\"onFieldInvalid('NM_PROD')\" message=\"Produto é obrigatório.\"></invalid-form-control>\n          </div>\n        </div>\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col-md-3 pl-0\">\n            <label for=\"NR_MATR_FUNC\">Matrícula</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"NR_MATR_FUNC\"\n              formControlName=\"NR_MATR_FUNC\"\n              placeholder=\"Selecione...\"\n              [ngClass]=\"onFieldError('NR_MATR_FUNC') + ' ' + onFieldRequired('NR_MATR_FUNC')\"\n            />\n            <invalid-form-control [show]=\"onFieldInvalid('NR_MATR_FUNC')\" message=\"Matrícula é obrigatório.\"></invalid-form-control>\n          </div>\n          <div class=\"form-group col-md-9 pl-0\">\n            <div class=\"mb-0 d-flex justify-content-between w-100\" style=\"height: 22px\">\n              <label class=\"my-auto\" for=\"NM_FUNC\">Funcionário</label>\n            </div>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"NM_FUNC\"\n              formControlName=\"NM_FUNC\"\n              placeholder=\"Selecione...\"\n              [ngClass]=\"onFieldError('NM_FUNC') + ' ' + onFieldRequired('NM_FUNC')\"\n            />\n            <invalid-form-control [show]=\"onFieldInvalid('NM_FUNC')\" message=\"Funcionário é obrigatório.\"></invalid-form-control>\n          </div>\n        </div>\n      </fieldset>\n      <br>\n      <fieldset class=\"border rounded shadow-sm col-10 pt-2 mx-auto\">\n        <legend>Responsáveis</legend>\n        <div formArrayName=\"responsaveis\">\n          <div class=\"form-row\">\n            <div class=\"form-group col mb-0 d-flex justify-content-between\">\n              <div class=\"mtc-title\"></div>\n              <div>\n                <a\n                  class=\"text-secondary\"\n                  (click)=\"onAddResponsavel()\"\n                  href=\"javascript:void(0)\">\n                  <b>Adicionar</b>\n                </a>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-row\"  *ngFor=\"let item of formResponsaveis.controls; let i = index\" [formGroupName]=\"i\">\n            <div class=\"form-group col mb-0\">\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-3 pl-0\">\n                  <label for=\"NR_MATR_RESP\">Matricula</label>\n                  <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    id=\"NR_MATR_RESP\"\n                    formControlName=\"NR_MATR_RESP\"\n                    placeholder=\"Digite...\"\n                    [ngClass]=\"onNestedFieldError('responsaveis', i, 'NR_MATR_RESP') + ' ' + onNestedFieldRequired('responsaveis', i, 'NR_MATR_RESP')\"\n                  >\n                </div>\n                <div class=\"form-group col-md-8 pl-0\">\n                  <div class=\"mb-0 d-flex justify-content-between w-100\" style=\"height: 22px\">\n                    <label class=\"my-auto\" for=\"NM_RESP\">Responsável</label>\n                    <div class=\"my-auto text-uppercase\" style=\"font-size: 10px\">\n                      <a\n                        class=\"text-primary\"\n                        href=\"javascript:void(0)\"\n                        (click)=\"openModal(selecionarUsuarios, i)\">\n                        <strong>Selecionar</strong>\n                      </a>\n                    </div>\n                  </div>\n                  <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    id=\"NM_RESP\"\n                    formControlName=\"NM_RESP\"\n                    [ngClass]=\"onNestedFieldError('responsaveis', i, 'NM_RESP') + ' ' + onNestedFieldRequired('responsaveis', i, 'NM_RESP')\">\n                </div>\n                <div class=\"col-1 pt-4 mt-1 d-flex justify-content-center\">\n                  <button\n                    type=\"button\"\n                    class=\"btn-icon\"\n                    (click)=\"onDeleteResponsavel(i)\">\n                    <i class=\"fas fa-trash\"></i>\n                  </button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <br>\n      </fieldset>\n      <br>\n      <fieldset class=\"border rounded shadow-sm col-10 pt-2 mx-auto\">\n        <legend>Observação</legend>\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col\">\n            <label for=\"DS_OBSE\" >Observação:</label>\n            <textarea \n              class=\"form-control\" \n              id=\"DS_OBSE\" \n              formControlName=\"DS_OBSE\" \n              rows=\"3\"\n              [ngClass]=\"onFieldError('DS_OBSE') + ' ' + onFieldRequired('DS_OBSE')\">\n            </textarea>\n            <invalid-form-control [show]=\"onFieldInvalid('DS_OBSE')\" message=\"Observação é obrigatório, com no minímo 10 caracteres.\"></invalid-form-control>\n\n          </div>\n        </div>\n        <br>\n      </fieldset>\n      <br>\n      <fieldset class=\"border rounded shadow-sm col-10 pt-2 mx-auto\">\n        <legend>Documentos</legend>\n        <div class=\"form-group border rounded p-1\">\n          <div>\n            <label for=\"documento\" class=\"w-100 d-flex justify-content-between align-items-center m-0 py-1\" style=\"cursor: pointer;\">\n              <span>Novo Documento</span>\n            </label>\n            <input\n              id=\"documento\"\n              type=\"file\"\n              (change)=\"appendFile($event.target.files)\"\n              class=\"d-none\"\n              >\n          </div>\n        </div>\n        <ul>\n          <li class=\"d-flex justify-content-between\" *ngFor=\"let item of documentos ; let index = index\">\n            <div>{{ item.NM_DOCU | uppercase }}</div>\n            <div>\n              <a\n                [hidden]=\"!item.ID_LOGI_ENMA_FHNC_DOCU\"\n                [href]=\"item.LINK\"\n                target=\"_blank\"\n                class=\"btn-icon-sm mx-2 text-black\"\n                tooltip=\"visualizar\"\n              >\n                <i class=\"far fa-eye\"></i>\n              </a>\n              <button\n                class=\"btn-icon-sm mx-2 hover\"\n                tooltip=\"excluir\"\n                (click)=\"onRemove(item, index)\"\n                >\n                <i class=\"fas fa-trash\"></i>\n              </button>\n            </div>\n          </li>\n        </ul>\n      </fieldset>\n    </fieldset>\n  </form>\n  <ng-template #selecionarUsuarios>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title pull-left\">Pesquisa de Responsáveis</h4>\n      <div class=\"d-flex justify-content-center align-items-center\">\n        <div class=\"spinner-border text-primary mr-2\" role=\"status\" *ngIf=\"loadingUsuarios\">\n          <span class=\"sr-only\">Loading...</span>\n        </div>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModal()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n    </div>\n    <div class=\"modal-body\">\n      <advanced-filter>\n        <form [formGroup]=\"formUsuarios\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-3\">\n              <label for=\"buscarPor\">BUSCAR POR</label>\n              <select\n                class=\"form-control custom-select\"\n                formControlName=\"buscarPor\"\n              >\n                <option value=\"matricula\">Matricula</option>\n                <option value=\"nome\" selected> Nome Responsável</option>\n              </select>\n            </div>\n\n            <div class=\"form-group col-9\">\n              <label>TERMO DE PESQUISA</label>\n              <div class=\"input-group\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  formControlName=\"pesquisa\"\n                  >\n                  <div class=\"input-group-append\">\n                    <span \n                      [tooltip]=\"formUsuarios.valid == false ? 'Digite um termo de pesquisa':''\"\n                      container=\"body\"\n                      placement =\"left\"\n                    >\n                      <button\n                      style=\"height: 25px;\"\n                        [disabled]=\"formUsuarios.valid == false\"\n                        class=\"input-group-text hover\"\n                        (click)=\"getUsuarios()\"\n                        >\n                        <i class=\"fas fa-search\"></i>\n                      </button>\n                    </span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </form>\n      </advanced-filter>\n      <custom-table *ngIf=\"!loadingUsuarios && !noUsuarios\" class=\"text-center\">\n        <ng-template #thead let-thead>\n          <tr>\n            <th>Matricula</th>\n            <th>Nome Responsável</th>\n            <th></th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr *ngFor=\"let usuario of usuarios | slice : begin : end; let i = index\">\n            <td>{{ usuario.matricula }}</td>\n            <td>{{ usuario.nome }}</td>\n            <td>\n              <button\n                class=\"btn-icon-sm\"\n                tooltip=\"Salvar Responsável\"\n                container=\"body\"\n                (click)=\"setUsuarios(usuario);modalRef.hide()\"\n              >\n                <i class=\"far fa-save\"></i>\n              </button>\n            </td>\n          </tr>\n        </ng-template>\n      </custom-table>\n      <div *ngIf=\"totalItems > itemsPerPage\">\n        Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\n        <pagination\n          [maxSize]=\"10\"\n          [totalItems]=\"totalItems\"\n          (pageChanged)=\"onPageChanged($event)\"\n          [(itemsPerPage)]=\"itemsPerPage\"\n          [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPage\"\n          previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\"\n          lastText=\"&raquo;\">\n        </pagination>\n      </div>\n    </div>\n  </ng-template>\n  <ng-template #pesquisaDeItens>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title pull-left\">Pesquisa de Itens</h4>\n      <div class=\"d-flex justify-content-center align-items-center\">\n        <div class=\"spinner-border text-primary mr-2\" role=\"status\" *ngIf=\"loadingItens\">\n          <span class=\"sr-only\">Loading...</span>\n        </div>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModal()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n    </div>\n    <div class=\"modal-body\">\n      <advanced-filter>\n        <form [formGroup]=\"formPesquisaItem\">\n          <div class=\"form-row\">\n            <div class=\"form-group col\">\n              <label for=\"buscarPor\">BUSCAR POR</label>\n              <select\n                class=\"form-control custom-select\"\n                formControlName=\"buscarPor\"\n              >\n                <option value=\"ID_TECN_INFO_ITEM\" selected>ID</option>\n                <option value=\"CD_ITEM\">Código/Nº Série</option>\n                <option value=\"NM_PROD\">Produto</option>\n                <option value=\"NM_ITEM_TIPO\">Tipo de Item</option>\n                <option value=\"NM_MODE\">Modelo</option>\n                <option value=\"DS_CONT\">Contrato</option>\n                <option value=\"NR_MATR\">Matrícula do Usuário</option>\n                <option value=\"NM_USUA\">Nome do Usuário</option>\n              </select>\n            </div>\n            <div class=\"form-group col\">\n              <label>TERMO DE PESQUISA</label>\n              <div class=\"input-group\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  formControlName=\"pesquisa\"\n                  (keyup.enter)=\"getItens()\"\n                >\n                <div class=\"input-group-append\">\n                  <span\n                    class=\"input-group-text hover\"\n                    (click)=\"getItens()\"\n                  >\n                    <i class=\"fas fa-search\"></i>\n                  </span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </form>\n      </advanced-filter>\n      <custom-table *ngIf=\"!loadingItens && (itens.length > 0)\">\n        <ng-template #thead let-thead>\n          <tr>\n            <th>ID</th>\n            <th>Código/Nº Série</th>\n            <th>Produto</th>\n            <th></th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr *ngFor=\"let item of itens\">\n            <td>{{ item.ID_TECN_INFO_ITEM }}</td>\n            <td>{{ item.CD_ITEM }}</td>\n            <td>{{ item.NM_PROD }}</td>\n            <td>\n              <button\n                class=\"btn-icon-sm\"\n                tooltip=\"Salvar Item\"\n                container=\"body\"\n                (click)=\"setItem(item);modalRef.hide()\"\n              >\n                <i class=\"far fa-save\"></i>\n              </button>\n            </td>\n          </tr>\n        </ng-template>\n      </custom-table>\n    </div>\n  </ng-template>\n</app-body>");

/***/ }),

/***/ "Vh74":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/tecnologia-informacao/contratos/ocorrencia/parecer/parecer.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: TecnologiaInformacaoCadastrosOcorrenciaParecerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoCadastrosOcorrenciaParecerComponent", function() { return TecnologiaInformacaoCadastrosOcorrenciaParecerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_parecer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./parecer.component.html */ "G4h3");
/* harmony import */ var _parecer_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parecer.component.scss */ "XYEl");
/* harmony import */ var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/modules/confirm-modal/confirm-modal.service */ "FOez");
/* harmony import */ var _services_funcionarios_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/funcionarios.service */ "jMbs");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var js_brasil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! js-brasil */ "zFJr");
/* harmony import */ var js_brasil__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(js_brasil__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_ocorrencia_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/ocorrencia.service */ "S1or");






//Services


//Bootstrap


//Angular


//rxjs



//interfaces
let TecnologiaInformacaoCadastrosOcorrenciaParecerComponent = class TecnologiaInformacaoCadastrosOcorrenciaParecerComponent {
    /* Pagination */
    constructor(formBuilder, pnotify, modalService, localeService, ocorrenciaService, funcionarioService, confirmModalService, atividadesService) {
        this.formBuilder = formBuilder;
        this.pnotify = pnotify;
        this.modalService = modalService;
        this.localeService = localeService;
        this.ocorrenciaService = ocorrenciaService;
        this.funcionarioService = funcionarioService;
        this.confirmModalService = confirmModalService;
        this.atividadesService = atividadesService;
        this.fecharModal = new _angular_core__WEBPACK_IMPORTED_MODULE_10__["EventEmitter"]();
        this.breadCrumbTree = [];
        this.formData = [];
        this.usuarios = [];
        this.noUsuarios = true;
        this.parecer = [];
        this.noResponsavel = [];
        this.disabledForm = false;
        this.loading = false;
        this.loadingNavBar = false;
        this.documentos = [];
        /* Pagination */
        this.itemsPerPage = 10;
        this.totalItems = 10;
        this.currentPage = 1;
        this.begin = 0;
        this.end = 10;
        this.MASKS = js_brasil__WEBPACK_IMPORTED_MODULE_8__["utilsBr"].MASKS;
        this.localeService.use('pt-br');
        this.bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' }, { adaptivePosition: true }, { showWeekNumbers: false });
    }
    set ocorrenciaId(id) {
        if (!id)
            return;
        this.setFormBuilder();
        this.form.get('ID_TEIN_OCOR').setValue(id);
    }
    ;
    ngOnInit() {
        this.registrarAcesso();
        this.setFormBuilder();
    }
    registrarAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
    }
    ngOnDestroy() {
        if (this.modalRef != undefined) {
            this.modalRef.hide();
        }
    }
    getResponsaveis(params) {
        this.loadingNavBar = true;
        this.ocorrenciaService
            .getResponsaveis(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(() => {
            this.loadingNavBar = false;
        }))
            .subscribe((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (response.status !== 200) {
                return;
            }
            const responsaveis = response['body']['data'];
            const promise = () => responsaveis.forEach(() => this.onAddResponsavel());
            yield Promise.resolve(promise());
            this.form.get('responsaveis').patchValue(responsaveis);
        }), (error) => {
            this.pnotify.error('Não foi encontrado nenhum material');
        });
    }
    // }
    //formulario
    setFormBuilder() {
        if (this.form == undefined) {
            this.form = this.formBuilder.group({
                TP_RESP: ['EMPRESA', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required]],
                DS_STAT_CONC: [null],
                DS_OBSE: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].minLength(10)]],
                DT_DEVO_APRE: [null],
                VL_DSCO: [null],
                NM_EMPR_REPA: [null],
                CONT_EMPR_REPA: [null],
                ID_TEIN_OCOR: [null],
                ID_TEIN_OCPR: [null],
                IN_STAT: [null],
                NR_MATR: [null],
                NM_USUA: [null],
                DT_INCL: [null],
                responsaveis: this.formBuilder.array([]),
            });
        }
        if (this.formUsuarios == undefined) {
            this.formUsuarios = this.formBuilder.group({
                buscarPor: ['nome'],
                pesquisa: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required],
                matricula: [null],
                nome: [null],
            });
        }
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
    getUsuarios(params) {
        const _params = params !== null && params !== void 0 ? params : {};
        _params.situacao = '1';
        _params.qtItensPagina = 100;
        const _obj = this.formUsuarios.value;
        this.loadingUsuarios = true;
        if (_obj['pesquisa'])
            _params[_obj['buscarPor']] = _obj['pesquisa'];
        this.funcionarioService
            .getUsuarios(_params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(() => {
            this.loadingUsuarios = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.usuarios = response.body['usuarios'];
                this.totalItems = response.body['usuarios'].length;
                this.noUsuarios = false;
            }
            else {
                this.pnotify.notice('Nenhum registro encontrado!');
                this.usuarios = [];
                this.noUsuarios = true;
            }
        }, (error) => {
            this.pnotify.error();
            this.usuarios = [];
        });
    }
    setUsuarios(usuario) {
        const fg = this.form.get('responsaveis');
        fg.controls[this.index].get('NR_MATR_RESP').patchValue(usuario.matricula);
        fg.controls[this.index].get('ID_RESP').patchValue(usuario.id);
        fg.controls[this.index].get('NM_RESP').patchValue(usuario.nome);
    }
    postResponsaveis(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let request = [];
            const responsaveis = this.formResponsaveis.getRawValue();
            if (!responsaveis) {
                return;
            }
            const promise = () => {
                responsaveis.forEach(responsavel => {
                    const params = Object.assign(Object.assign({}, responsavel), { 'ID_TEIN_OCPR': id });
                    request.push(this.ocorrenciaService
                        .postResponsaveis(params));
                });
            };
            yield Promise.resolve(promise());
            Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["forkJoin"])(request)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(() => {
                this.loading = false;
                this.loadingNavBar = false;
            }))
                .subscribe((responses) => {
                this.pnotify.success('Responsáveis cadastrados com sucesso');
            }, (error) => {
                try {
                    this.pnotify.error(error.error.message);
                }
                catch (error) {
                    this.pnotify.error();
                }
            });
        });
    }
    onDeleteResponsavel(index) {
        let responsaveis = this.formResponsaveis.at(index).value;
        responsaveis = Object.assign(Object.assign({}, responsaveis), { 'IN_STAT': '0' });
        this.formResponsaveis.removeAt(index);
        return;
    }
    postParecer() {
        this.loadingNavBar = true;
        let params = JSON.parse(JSON.stringify(this.form.value));
        delete params['responsaveis'];
        this.ocorrenciaService
            .postParecer(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(() => {
            this.loading = false;
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                const idParecer = response.body['data'];
                this.postResponsaveis(idParecer);
                this.postDocumentosParecer(idParecer);
                this.fecharModal.emit(true);
                this.pnotify.success();
            }
            else {
                this.pnotify.error();
            }
        }, (error) => {
            try {
                this.pnotify.error(error.error.message);
            }
            catch (error) {
                this.pnotify.error();
            }
        });
    }
    get formResponsaveis() {
        return this.form.get('responsaveis');
    }
    onAddResponsavel() {
        this.formResponsaveis.push(this.formBuilder.group({
            ID_TEIN_OCPR: [null],
            ID_TEIN_OCOR: [null],
            ID_RESP: [null],
            NR_MATR_RESP: [{ value: null, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required]],
            NM_RESP: [{ value: null, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required]],
        }));
    }
    openModal(template, index) {
        this.index = index;
        this.modalRef = this.modalService.show(template, {
            animated: false,
            class: 'modal-xl',
        });
    }
    hideModal() {
        this.modalRef.hide();
    }
    onNestedFieldError(formGroup, index, field) {
        if (this.onNestedFieldInvalid(formGroup, index, field)) {
            return 'is-invalid';
        }
        return '';
    }
    onNestedFieldInvalid(formGroup, index, field) {
        let nestedForm = this.form.controls[formGroup];
        field = nestedForm.controls[index].get(field);
        return field.status == 'INVALID' && field.touched;
    }
    onNestedFieldRequired(formGroup, index, field) {
        let required = false;
        let formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]();
        let nestedForm = this.form.controls[formGroup];
        if (nestedForm.controls[index].get(field).validator) {
            let validationResult = nestedForm.controls[index]
                .get(field)
                .validator(formControl);
            required =
                validationResult !== null && validationResult.required === true;
        }
        if (required) {
            return 'is-required';
        }
    }
    onPageChanged(event) {
        this.begin = (event.page - 1) * event.itemsPerPage;
        this.end = event.page * event.itemsPerPage;
    }
    postDocumentosParecer(idParecer) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let requests = [];
            if (this.formData.length === 0) {
                return requests;
            }
            const _params = { ID_TEIN_OCPR: idParecer, ID_TEIN_OCOR: this.form.get('ID_TEIN_OCOR').value };
            const promise = () => {
                this.formData.forEach((element) => {
                    requests.push(this.ocorrenciaService.postDocumentoParecer(element, _params));
                });
            };
            Promise.resolve(promise());
            Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["forkJoin"])(requests)
                .subscribe((responses) => {
                responses.forEach(response => {
                    if (response.status === 200) {
                        this.pnotify.success();
                    }
                    else {
                        this.pnotify.error();
                    }
                });
            }, (error) => {
                this.pnotify.error();
            });
            return requests;
        });
    }
    putDocumentoParecer(documento) {
        const [type, title, message, cancelTxt, okTxt] = [
            'inactivate',
            'Confirmar inativação',
            'Deseja realmente prosseguir com a inativação do registro?',
            'Cancelar',
            'Confirmar',
        ];
        this.confirmModalService
            .showConfirm(type, title, message, cancelTxt, okTxt)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["switchMap"])((result) => {
            if (!result)
                return rxjs__WEBPACK_IMPORTED_MODULE_12__["EMPTY"];
            this.loadingNavBar = true;
            return this.ocorrenciaService.putDocumento(documento);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(() => {
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            this.pnotify.success('Documento atualizado com sucesso');
            this.getDocumentoParecer({
                ID_TEIN_OCPR: this.form.get('ID_TEIN_OCPR').value,
                IN_STAT: '1',
            });
        });
    }
    getDocumentoParecer(params) {
        this.ocorrenciaService.getDocumentoParecer(params).subscribe((response) => {
            if (response.status === 200) {
                this.documentos = response.body['data'];
            }
            else {
                this.documentos = [];
            }
        }, (error) => {
            this.documentos = [];
        });
    }
    onRemove(documento, index) {
        if (!documento.hasOwnProperty('ID_TEIF_DOCU')) {
            this.formData = this.formData.filter((element) => {
                return (element.get('file'))['name'] != documento.NM_DOCU;
            });
        }
        documento.IN_STAT = '0';
        this.documentos.splice(index, 1);
        if (documento.hasOwnProperty('ID_TEIF_DOCU')) {
            this.putDocumentoParecer(documento);
        }
    }
    appendFile(files) {
        if (files.length === 0)
            return;
        const fd = new FormData();
        fd.append('file', files[0]);
        this.formData.push(fd);
        this.documentos.push({ NM_DOCU: files[0]['name'] });
    }
};
TecnologiaInformacaoCadastrosOcorrenciaParecerComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"] },
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["BsLocaleService"] },
    { type: _services_ocorrencia_service__WEBPACK_IMPORTED_MODULE_14__["TecnologiaInformacaoCadastroOcorrenciaService"] },
    { type: _services_funcionarios_service__WEBPACK_IMPORTED_MODULE_4__["TecnologiaInformacaoFuncionariosService"] },
    { type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_3__["ConfirmModalService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__["AtividadesService"] }
];
TecnologiaInformacaoCadastrosOcorrenciaParecerComponent.propDecorators = {
    ocorrenciaId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
    fecharModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Output"] }]
};
TecnologiaInformacaoCadastrosOcorrenciaParecerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"])({
        selector: 'tecnologia-informacao-contratos-ocorrencia-parecer',
        template: _raw_loader_parecer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_parecer_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"],
        ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"],
        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["BsLocaleService"],
        _services_ocorrencia_service__WEBPACK_IMPORTED_MODULE_14__["TecnologiaInformacaoCadastroOcorrenciaService"],
        _services_funcionarios_service__WEBPACK_IMPORTED_MODULE_4__["TecnologiaInformacaoFuncionariosService"],
        src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_3__["ConfirmModalService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__["AtividadesService"]])
], TecnologiaInformacaoCadastrosOcorrenciaParecerComponent);



/***/ }),

/***/ "XYEl":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/tecnologia-informacao/contratos/ocorrencia/parecer/parecer.component.scss ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGVjbm9sb2dpYS1pbmZvcm1hY2FvL2NvbnRyYXRvcy9vY29ycmVuY2lhL3BhcmVjZXIvcGFyZWNlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "gVRY":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/tecnologia-informacao/contratos/ocorrencia/ocorrencia-routing.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: TecnologiaInformacaoCadastrosOcorrenciaModuleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoCadastrosOcorrenciaModuleRoutingModule", function() { return TecnologiaInformacaoCadastrosOcorrenciaModuleRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lista/lista.component */ "zvcX");
/* harmony import */ var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cadastro/cadastro.component */ "qxKm");



//components


const routes = [
    {
        path: '',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_3__["TecnologiaInformacaoCadastrosOcorrenciaListaComponent"],
    },
    {
        path: 'novo',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__["TecnologiaInformacaoCadastrosOcorrenciaCadastroComponent"],
    },
    {
        path: ':id',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__["TecnologiaInformacaoCadastrosOcorrenciaCadastroComponent"],
    }
];
let TecnologiaInformacaoCadastrosOcorrenciaModuleRoutingModule = class TecnologiaInformacaoCadastrosOcorrenciaModuleRoutingModule {
};
TecnologiaInformacaoCadastrosOcorrenciaModuleRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TecnologiaInformacaoCadastrosOcorrenciaModuleRoutingModule);



/***/ }),

/***/ "qFqN":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/tecnologia-informacao/contratos/ocorrencia/lista/lista.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-navbar *ngIf=\"loadingNavBar\"></loader-spinner-navbar>\n<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\n<app-header appTitle=\"Ocorrências\">\n  <button\n    type=\"button\"\n    (click)=\"onExport()\"\n    [disabled]=\"loadingNavBar || noResult\">\n    Exportar\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"onReset()\">\n    Limpar\n  </button>\n  <button\n    type=\"button\"\n    [routerLink]=\"['../novo']\">\n    Adicionar\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"onFilter()\">\n    Filtrar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loading\">\n  <div class=\"row\" #scrollToFilter>\n    <div class=\"col\">\n      <advanced-filter>\n        <form [formGroup]=\"form\" autocomplete=\"off\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-lg-2 pl-0\">\n              <label for=\"ID_TEIN_OCOR\">ID</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"ID_TEIN_OCOR\"\n                formControlName=\"ID_TEIN_OCOR\"\n                placeholder=\"Digite...\"\n                (keydown.enter)=\"onFilter()\">\n            </div>\n            <div class=\"form-group col-lg-2 pl-0\">\n              <label for=\"IN_FINA\">Status da Ocorrência</label>\n              <ng-select\n                [searchable]=\"true\"\n                [clearable]=\"true\"\n                [items]=\"status\"\n                [virtualScroll]=\"true\"\n                labelForId=\"status\"\n                bindLabel=\"nome\"\n                bindValue=\"cod\"\n                id=\"status\"\n                (change)=\"onFilter()\"\n                formControlName=\"IN_FINA\"\n                placeholder=\"Selecione...\"\n                >\n                <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\"> {{item.nome}}\n                </ng-template>\n              </ng-select>\n            </div>\n            <div class=\"form-group col-lg-2 pl-0\">\n              <label for=\"IN_STAT\">Situação</label>\n              <ng-select\n                [searchable]=\"true\"\n                [clearable]=\"true\"\n                [items]=\"tipos\"\n                [virtualScroll]=\"true\"\n                labelForId=\"tipo\"\n                bindLabel=\"nome\"\n                bindValue=\"cod\"\n                id=\"tipo\"\n                (change)=\"onFilter()\"\n                formControlName=\"IN_STAT\"\n                placeholder=\"Selecione...\"\n                >\n                <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\"> {{item.nome}}\n                </ng-template>\n              </ng-select>\n            </div>\n            <div class=\"form-group col-lg-2 pl-0\">\n              <label for=\"NR_MATR\">Matricula</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                placeholder=\"Digite...\"\n                id=\"NR_MATR\"\n                formControlName=\"NR_MATR\"\n                (keydown.enter)=\"onFilter()\">\n            </div>\n            <div class=\"form-group col-lg-4 pl-0\">\n              <label for=\"NM_USUA\">Funcionario</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                placeholder=\"Digite...\"\n                id=\"NM_USUA\"\n                formControlName=\"NM_USUA\"\n                (keydown.enter)=\"onFilter()\">\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-lg-2 pl-0\">\n              <label for=\"CD_ITEM\">Código/Nº Série</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                placeholder=\"Digite...\"\n                id=\"CD_ITEM\"\n                formControlName=\"CD_ITEM\"\n                (keydown.enter)=\"onFilter()\">\n            </div>\n            <div class=\"form-group col-lg-8 pl-0\">\n              <label for=\"produtos\">Produtos</label>\n              <ng-select\n                [searchable]=\"true\"\n                [clearable]=\"true\"\n                [items]=\"produtos\"\n                [virtualScroll]=\"true\"\n                dropdownPosition=\"bottom\"\n                placeholder=\"Selecione...\"\n                [loading]=\"loadingProduto\"\n                labelForId=\"ID_TEIN_ESTO_PROD\"\n                bindLabel=\"NM_PROD\"\n                bindValue=\"ID_TEIN_ESTO_PROD\"\n                id=\"ID_TEIN_ESTO_PROD\"\n                formControlName=\"ID_TEIN_ESTO_PROD\">\n              </ng-select>\n            </div>\n            <div class=\"form-group col-lg-2 pl-0\">\n              <label>Registros</label>\n              <select \n                class=\"form-control custom-select\"\n                (keydown.enter)=\"onFilter()\"\n                formControlName=\"TT_REGI_PAGI\"\n                (change)=\"setPageRegistros($event.target.value)\"  \n              >\n                <option value=\"10\">10</option>\n                <option value=\"25\">25</option>\n                <option value=\"50\">50</option>\n                <option value=\"100\">100</option>\n                <option value=\"250\">250</option>\n                <option value=\"500\">500</option>\n              </select>\n            </div>\n          </div>\n        </form>\n      </advanced-filter>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <subtitles\n        [data]=\"subtitles\"\n        [show]=\"!noResult\">\n      </subtitles>\n    </div>\n  </div>\n  <div class=\"col-12 p-0\" [hidden] = \"loading || noResult\">\n    <div>\n      <custom-table [config]=\"tableConfig\" class=\"text-center\" *ngIf=\"!noResult\">\n        <ng-template #thead let-thead>\n          <tr>\n            <th scope=\"col\">ID </th>\n            <th scope=\"col\">Produto</th>\n            <th scope=\"col\">Data Cadastro</th>\n            <th scope=\"col\">Status da Ocorrência</th>\n            <th scope=\"col\" style=\"width:160px\"></th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr *ngFor=\"let ocorrencia of ocorrencias | slice : begin : end; let i = index\">\n            <td [ngClass]=\"ocorrencia.IN_STAT == '1' ? 'border-success' : 'border-danger'\">\n            {{ocorrencia.ID_TEIN_OCOR}}\n            </td>\n            <td *ngIf=\"ocorrencia.NM_PROD != null\">{{ ocorrencia.NM_PROD }} ({{ocorrencia.CD_ITEM }}) </td>\n            <td *ngIf=\"ocorrencia.NM_PROD == null\">NÃO INFORMADO</td>\n            <td>{{ ocorrencia.DT_INCL | date: 'dd/MM/yyyy HH:mm' }}</td>\n            <td *ngIf= \"ocorrencia.IN_FINA != 1\"  >\n              <i class=\"text-warning fas fa-minus-circle mr-3\"></i>\n              <span class=\"nowrap\">EM ANDAMENTO</span>\n            </td>\n            <td *ngIf= \"ocorrencia.IN_FINA == 1\"  >\n              <i class=\"text-success fas fa-check-circle mr-3\"></i>\n              <span class=\"nowrap\">CONCLUÍDA</span>\n            </td>\n            <td class=\"align-middle\" style=\"width:70px\">\n              <span class=\"mr-3\" tooltip=\" Gerar Termo\" placement=\"left\" container=\"body\" >\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onTermo(ocorrencia)\">\n                  <i class=\"fas fa-file\" *ngIf=\"ocorrencia.ID_TECN_INFO_ITEM != null \" placement=\"right\"></i>\n                </button>\n              </span>\n              <span class=\"mr-3\" [tooltip]=\"ocorrencia.IN_STAT == 1 ? 'Inativar' : 'Ativar'\" placement=\"left\" container=\"body\">\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"changeType(ocorrencia)\">\n                  <i [ngClass]=\"ocorrencia.IN_STAT == '1' ? 'fas fa-toggle-on' : 'fas fa-toggle-off'\"></i>\n                </button>\n              </span>\n              <span class=\"mr-3\" tooltip=\"Editar\" placement=\"left\" container=\"body\">\n                <button type=\"button\" class=\"btn-icon-sm\" [disabled]=\"ocorrencia.IN_FINA == 1\" [routerLink]=\"['./../', ocorrencia.ID_TEIN_OCOR]\">\n                  <i class=\"fas fa-edit\"></i>\n                </button>\n              </span>\n              <span class=\"mr-3\"  tooltip=\"Detalhe da Ocorrência\" placement=\"left\" container=\"body\" >\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"openModal(detalhesOcorrencia, ocorrencia)\">\n                  <i class=\"fas fa-search\"></i>                  \n                </button>\n              </span>\n            </td>\n          </tr>\n        </ng-template>\n      </custom-table>\n    </div>\n    <div *ngIf=\"totalItems > itemsPerPage\">\n      Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\n      <pagination\n        [maxSize]=\"10\"\n        [totalItems]=\"totalItems\"\n        (pageChanged)=\"onPageChanged($event)\"\n        [(itemsPerPage)]=\"itemsPerPage\"\n        [boundaryLinks]=\"true\"\n        [(ngModel)]=\"currentPage\"\n        previousText=\"&lsaquo;\"\n        nextText=\"&rsaquo;\"\n        firstText=\"&laquo;\"\n        lastText=\"&raquo;\">\n      </pagination>\n    </div>\n  </div>\n  <div [hidden]=\"loading || !noResult\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 80%\">\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n  </div>\n  <ng-template #detalhesOcorrencia >\n    <div class=\"modal-header\" [hidden]=\"hiddenModal\">\n      <h4 class=\"modal-title pull-left\">Detalhes da Ocorrência  -  Nº{{ocorrenciaSelecionada?.ID_TEIN_OCOR}}</h4>\n      <div class=\"d-flex justify-content-center align-items-center\">\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModal()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n    </div>\n    <div class=\"modal-body\" [hidden]=\"hiddenModal\" >\n      <tabset>\n        <tab heading=\"Dados cadastrais\">\n          <div class=\"border-right border-left border-bottom px-3 pt-3\">\n            <div>\n              <div class=\"form-row\">\n                <div class=\"form-group col-lg-6\">\n                  <label>Funcionário</label>\n                  <div *ngIf=\"ocorrenciaSelecionada?.NR_MATR == null\">NÃO INFORMADO</div>\n                  <div *ngIf=\"ocorrenciaSelecionada?.NR_MATR != null\">{{ocorrenciaSelecionada?.NR_MATR}} - {{ocorrenciaSelecionada?.NM_USUA}}</div>\n                </div>\n                <div class=\"form-group col-lg-6\">\n                  <label>Centro de Custo</label>\n                  <div *ngIf=\"ocorrenciaSelecionada?.CD_CCU == null\">NÃO INFORMADO</div>\n                  <div *ngIf=\"ocorrenciaSelecionada?.CD_CCU != null\">{{ocorrenciaSelecionada?.CD_CCU}} - {{ocorrenciaSelecionada?.NM_CCU}}</div>\n                </div>\n                \n              </div>\n              <div class=\"form-row\">\n                <div class=\"form-group col-lg\">\n                  <label>Item</label>\n                  <div *ngIf=\"ocorrenciaSelecionada?.CD_ITEM == null\">NÃO INFORMADO</div>\n                  <div *ngIf=\"ocorrenciaSelecionada?.CD_ITEM != null\">{{ ocorrenciaSelecionada?.NM_ITEM_TIPO }} - {{ ocorrenciaSelecionada?.NM_MODE }} ({{ocorrenciaSelecionada?.CD_ITEM }})</div>\n                </div>\n                <div class=\"form-group col-3 mb-0 d-flex justify-content-between\" *ngIf=\"ocorrenciaSelecionada?.IN_FINA == 0 \">\n                  <button \n                    type=\"button\" \n                    class=\"btn btn-default btn-lg m-2 pull-right\"\n                    (click)=\"finalizarOcorrencia(ocorrenciaSelecionada)\"\n                  >\n                  <span aria-hidden=\"true\">\n                    <i class=\" text-success fas fa-check-circle\"></i>\n                  </span>Concluir Ocorrência\n                  </button>\n                </div>\n              </div>\n              <div class=\"form-row\">\n                <div class=\"form-group col-lg-12\">\n                  <label>Observação</label>\n                  <div *ngIf=\"ocorrenciaSelecionada?.DS_OBSE == null\">NÃO INFORMADO</div>\n                  <div *ngIf=\"ocorrenciaSelecionada?.DS_OBSE != null\">{{ocorrenciaSelecionada?.DS_OBSE}}</div>\n                </div>\n              </div>\n              <hr>\n              <div class=\"form-row\">\n                <div class=\"form-group col-lg-12\">\n                  <label>Responsáveis</label>\n                </div>\n              </div>\n              <div [hidden]=\"!loadingResponsaveis\" class=\"col-lg-12 text-muted \">\n                <p><strong>Buscando os responsáveis da ocorrência...</strong></p>\n              </div>\n              <custom-table class=\"text-center\" *ngIf=\"!loadingResponsaveis && !noResponsaveis\">\n                <ng-template #thead let-thead>\n                  <tr>\n                    <th>Matricula </th>\n                    <th>Nome</th>\n                  </tr>\n                </ng-template>\n                <ng-template #tbody let-tbody>\n                  <tr *ngFor=\"let item of responsaveis\">\n                    <td>{{item.NR_MATR_RESP}}</td>\n                    <td>{{item.NM_RESP}}</td>\n                  </tr>\n                </ng-template>\n              </custom-table>\n              <div [hidden]=\"loadingResponsaveis || !noResponsaveis\" class=\"text-center d-flex justify-content-center align-items-center pb-3\">\n                <empty-result message=\"Nenhum responsável encontrado\"></empty-result>\n              </div>\n              <hr>\n              <div class=\"form-row\">\n                <div class=\"form-group col\">\n                  <label>Usuário Responsável Pelo Cadastro</label>\n                  <div *ngIf=\"ocorrenciaSelecionada?.NR_MATR == null\">NÃO INFORMADO</div>\n                  <div *ngIf=\"ocorrenciaSelecionada?.NR_MATR != null\">{{ocorrenciaSelecionada?.NR_MATR}} - {{ ocorrenciaSelecionada?.NM_USUA }}</div>\n                </div>\n                <div class=\"form-group col\">\n                  <label>Data do Cadastro</label>\n                  <div *ngIf=\"ocorrenciaSelecionada?.DT_INCL == null\">NÃO INFORMADO</div>\n                  <div *ngIf=\"ocorrenciaSelecionada?.DT_INCL != null\">{{ ocorrenciaSelecionada?.DT_INCL | date: 'dd/MM/yyyy HH:mm'}}</div>\n                </div>\n                <div class=\"form-group col\" *ngIf=\"ocorrenciaSelecionada?.DT_ATUA != null\">\n                  <label>Data da Atualização</label>\n                  <div *ngIf=\"ocorrenciaSelecionada?.DT_ATUA == null\">NÃO INFORMADO</div>\n                  <div *ngIf=\"ocorrenciaSelecionada?.DT_ATUA != null\">{{ ocorrenciaSelecionada?.DT_ATUA | date: 'dd/MM/yyyy HH:mm'}}</div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </tab>\n        <tab heading=\"Pareceres\">\n          <div class=\"border-right border-left border-bottom px-3 pt-3\" >\n            <div class=\"form-row\">\n              <div class=\"form-group col justify-content-between text-center m-0\" *ngIf=\"ocorrenciaSelecionada?.IN_FINA == 1\">\n                <blockquote class=\"blockquote text-center m-0\">\n                  <p class=\"mb-0 text-success\"> OCORRÊNCIA CONCLUÍDA </p>\n                  <footer class=\"blockquote-footer\">Essa ocorrência foi concluída, sendo assim não é permitido inserir novo parecer!</footer>\n                </blockquote>\n              </div>\n              <div class=\"form-group col-10 mb-0 d-flex justify-content-between\" *ngIf=\"ocorrenciaSelecionada?.IN_FINA == 0\">\n              </div>\n              <div class=\"form-group col mb-0 d-flex justify-content-between\" *ngIf=\"ocorrenciaSelecionada?.IN_FINA == 0 \">\n                <button \n                  type=\"button\" \n                  class=\"btn btn-default btn-lg m-2 pull-right\"\n                  (click)=\"openModalParecer(modalPareceres)\"\n                  [disabled]=\"ocorrenciaSelecionada?.IN_RESP == 0\"\n                >\n                <span aria-hidden=\"true\">\n                  <i class=\" text-success fas fa-plus\"></i>\n                </span>Adicionar Parecer\n                </button>\n              </div>\n            </div>\n            <hr>\n            <div [hidden]=\"!loadingPareceres\" class=\"col-lg-12 text-muted \">\n              <p><strong>Buscando pareceres da ocorrência...</strong></p>\n            </div>\n            <div class=\"ScrollPareceres\" *ngIf=\"!noPareceres\">\n              <div class=\"col-md-12 mx-2 pb-3 \" data-spy=\"scroll\" *ngFor=\"let parecer of pareceres\">\n                <div class=\"card mr-3\"  *ngIf=\"!loadingDocumentosParecer && !loadingResponsaveisParecer\">\n                  <div class=\"card-body p-2\">\n                    <h5 class=\"card-title mb-1\" >{{parecer.DS_OBSE}}</h5>\n                    <ul class=\"pl-0\">\n                      <li class=\"d-flex\" *ngFor=\"let item of documentosParecer[parecer.ID_TEIN_OCPR];\">\n                        <div class=\"d-flex\">\n                          <div>\n                            <strong class=\"ml-2\">{{ item.NM_DOCU }}</strong>\n                          </div>\n                          <div class=\"ml-4\" *ngIf=\"item.TP_DOCU == 'DOCUMENTO'\">\n                            <a href=\"{{ item.LINK }}\" target=\"_blank\" class=\"btn-icon-sm\">\n                              <i class=\"fas fa-download\"></i>\n                            </a>\n                          </div>\n                          <div class=\"ml-4\" *ngIf=\"item.TP_DOCU == 'IMAGEM'\">\n                            <a href=\"{{ item.LINK }}\" target=\"_blank\" class=\"btn-icon-sm\">\n                              <i class=\"fas fa-eye\"></i>\n                            </a>\n                          </div>\n                        </div>\n                      </li>\n                    </ul>\n                    <div *ngIf=\"!noResponsaveisParecer\">\n                      <ul class=\"pl-0 m-0\">\n                        <li class=\"d-flex\" *ngFor=\"let responsavel of responsaveisParecer[parecer.ID_TEIN_OCPR];\">\n                          <div class=\"d-flex\">\n                            <div>\n                              <p class=\"card-text ml-2\">{{parecer.NM_USUA | name }} atribuiu a ficha de não conformidade para: <strong>{{ responsavel.NR_MATR_RESP }} - {{ responsavel.NM_RESP }}</strong></p>\n                            </div>\n                          </div>\n                        </li>\n                      </ul>\n                    </div>\n                    <p class=\"text-right m-0\"><small class=\"text-muted\"><cite>{{parecer.NR_MATR}} - {{parecer.NM_USUA | uppercase}}</cite></small></p>\n                    <p class=\"text-right m-0\"><small class=\"text-muted\">{{parecer.DT_INCL | date: 'dd/MM/yyyy HH:mm'}}</small></p>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div  *ngIf=\"noPareceres && !loadingPareceres\" class=\"d-flex justify-content-center mb-3\">\n              <empty-result message=\"Nenhum parecer encontrado!\"></empty-result>\n            </div>\n          </div>\n        </tab>\n        <tab heading=\"Documentos\">\n          <div class=\"border-right border-left border-bottom px-3 pt-3\" >\n            <div *ngIf=\"totalImagensOcorrencia != 0\">\n              <blockquote class=\"blockquote\">\n                <p class=\"mb-0\">Imagens</p>\n              </blockquote>\n              <div class=\"row ScrollImagem\" >\n                <div class=\"col-md-4 mb-4\" *ngFor=\"let imagem of imagensOcorrencia\">\n                  <div class=\"card\" >\n                    <img class=\"card-img-responsive\" src=\"{{imagem.LINK}}\" style=\"height: 150px;\">\n                    <div class=\"card-body\">\n                      <p class=\"card-text\"><strong>{{imagem.NM_DOCU}}</strong></p>\n                      <p class=\"card-text mb-2\">{{imagem.DT_INCL | date: 'dd/MM/yyyy HH:mm'}}</p>\n                      <p class=\"card-text mb-2\">{{imagem.NM_USUA}}</p>\n                      <p class=\"card-text-right\">\n                        <a\n                          [href]=\"imagem.LINK\"\n                          target=\"_blank\"\n                          class=\"btn-icon-sm text-black\"\n                          tooltip=\"visualizar\"\n                        >\n                          <i class=\"far fa-eye\"></i>\n                        </a>\n                      </p>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <hr *ngIf=\"totalImagensOcorrencia != 0 && totalDocumentosOcorrencia != 0 \">\n            <div  *ngIf=\"totalDocumentosOcorrencia != 0\">\n              <blockquote class=\"blockquote\">\n                <p class=\"mb-0\">Documentos</p>\n              </blockquote>\n              <ul class=\" pl-0\">\n                <li class=\"d-flex justify-content-between\" *ngFor=\"let documento of documentosOcorrencia;\">\n                  <div>{{ documento.NM_DOCU | uppercase }}</div>\n                  <div>\n                    <a\n                      [href]=\"documento.LINK\"\n                      target=\"_blank\"\n                      class=\"btn-icon-sm mx-2 text-black\"\n                      tooltip=\"Baixar\"\n                    >\n                    <i class=\"fas fa-download\"></i>\n                    </a>\n                  </div>\n                </li>\n              </ul>\n            </div>\n            <div [hidden]=\"totalImagensOcorrencia != 0 || totalDocumentosOcorrencia != 0\" class=\"text-center d-flex justify-content-center align-items-center pb-4\" style=\"height: 80%\">\n              <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n            </div>\n          </div>\n        </tab>\n      </tabset>\n    </div>\n  </ng-template>\n  <ng-template #modalPareceres>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title pull-left\">Nova Ocorrência</h4>\n      <div class=\"d-flex justify-content-center align-items-center\">\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModalParecer()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n    </div>\n    <div class=\"modal-body\" >\n      <tecnologia-informacao-contratos-ocorrencia-parecer\n      [ocorrenciaId] = \"ocorrenciaId\"\n      (fecharModal)=\"onFecharModal($event)\"\n      >\n      </tecnologia-informacao-contratos-ocorrencia-parecer>\n    </div>\n  </ng-template>\n</app-body>");

/***/ }),

/***/ "qxKm":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/tecnologia-informacao/contratos/ocorrencia/cadastro/cadastro.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: TecnologiaInformacaoCadastrosOcorrenciaCadastroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoCadastrosOcorrenciaCadastroComponent", function() { return TecnologiaInformacaoCadastrosOcorrenciaCadastroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cadastro.component.html */ "SQzo");
/* harmony import */ var _cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cadastro.component.scss */ "DPcc");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");
/* harmony import */ var _item_services_item_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../item/services/item.service */ "Z7gR");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/modules/confirm-modal/confirm-modal.service */ "FOez");
/* harmony import */ var _services_funcionarios_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../services/funcionarios.service */ "jMbs");
/* harmony import */ var _services_ocorrencia_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/ocorrencia.service */ "S1or");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ "qCKp");






//service










let TecnologiaInformacaoCadastrosOcorrenciaCadastroComponent = class TecnologiaInformacaoCadastrosOcorrenciaCadastroComponent {
    /* Pagination */
    constructor(router, pnotify, formBuilder, titleService, modalService, activatedRoute, itensService, atividadesService, confirmModalService, funcionarioService, ocorrenciaService) {
        this.router = router;
        this.pnotify = pnotify;
        this.formBuilder = formBuilder;
        this.titleService = titleService;
        this.modalService = modalService;
        this.activatedRoute = activatedRoute;
        this.itensService = itensService;
        this.atividadesService = atividadesService;
        this.confirmModalService = confirmModalService;
        this.funcionarioService = funcionarioService;
        this.ocorrenciaService = ocorrenciaService;
        this.formData = [];
        this.breadCrumbTree = [];
        this.documentos = [];
        this.usuarios = [];
        this.itens = [];
        this.noUsuarios = true;
        this.loading = false;
        this.loadingNavBar = false;
        /* Pagination */
        this.itemsPerPage = 10;
        this.totalItems = 10;
        this.currentPage = 1;
        this.begin = 0;
        this.end = 10;
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
                routerLink: '/tecnologia-informacao/home',
            },
            {
                descricao: 'Contratos',
                routerLink: `/tecnologia-informacao/contratos/${id}`,
            },
            {
                descricao: 'Ocorrências',
                routerLink: `./../`,
            },
            {
                descricao: this.appTitle,
            },
        ];
    }
    onActivatedRoute() {
        const _params = this.activatedRoute.snapshot.params;
        this.id = _params['id'];
        if (_params.hasOwnProperty('id')) {
            this.getOcorrencia({ ID_TEIN_OCOR: _params['id'] });
            this.getResponsaveis({ ID_TEIN_OCOR: _params['id'], IN_STAT: '1' });
            this.getDocumentos({ ID_TEIN_OCOR: _params['id'], IN_STAT: '1' });
        }
        else {
            this.onAddResponsavel();
        }
    }
    //formulario
    setFormBuilder() {
        this.form = this.formBuilder.group({
            ID_TEIN_OCOR: [null],
            ID_TECN_INFO_ITEM: [null],
            DS_OBSE: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(10)]],
            IN_STAT: [null],
            NR_MATR_FUNC: [{ value: null, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            NM_FUNC: [{ value: null, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            CD_ITEM: [{ value: null, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            NM_ITEM_TIPO: [{ value: null, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            NM_MODE: [{ value: null, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            NM_PROD: [{ value: null, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            VL_ITEM: [{ value: null, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            responsaveis: this.formBuilder.array([]),
        });
        this.formUsuarios = this.formBuilder.group({
            buscarPor: ['nome'],
            pesquisa: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            matricula: [null],
            nome: [null],
        });
        this.formPesquisaItem = this.formBuilder.group({
            buscarPor: ['CD_ITEM'],
            pesquisa: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            ID_TECN_INFO_ITEM: [null],
            CD_ITEM: [null],
            NM_ITEM_TIPO: [null],
            NM_MODE: [null],
            NM_PROD: [null],
            DS_CONT: [null],
            NR_MATR: [null],
            NM_USUA: [null],
        });
    }
    getItens() {
        const _obj = this.formPesquisaItem.value;
        const _params = {};
        if (_obj['pesquisa'])
            _params[_obj['buscarPor']] = _obj['pesquisa'];
        this.loadingItens = true;
        this.itensService
            .getItem(_params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(() => {
            this.loadingItens = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.itens = response.body['data'];
            }
            else {
                this.pnotify.notice('Nenhum registro encontrado!');
                this.itens = [];
            }
        }, (error) => {
            this.pnotify.error();
        });
    }
    getItem(id) {
        this.loading = true;
        this.itensService
            .getItem({ ID_TECN_INFO_ITEM: id })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(() => {
            this.loading = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                const item = response.body['data'][0];
                this.setItem(item);
            }
            else {
                this.pnotify.notice('Nenhum item encontrado!');
                this.itens = [];
            }
        }, (error) => {
            this.pnotify.error();
        });
    }
    getResponsaveis(params) {
        this.loadingNavBar = true;
        this.ocorrenciaService
            .getResponsaveis(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(() => {
            this.loadingNavBar = false;
        }))
            .subscribe((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (response.status !== 200) {
                return;
            }
            const responsaveis = response['body']['data'];
            const promise = () => responsaveis.forEach(() => this.onAddResponsavel());
            yield Promise.resolve(promise());
            this.form.get('responsaveis').patchValue(responsaveis);
        }), (error) => {
            this.pnotify.error('Não foi encontrado nenhum responsável');
        });
    }
    getOcorrencia(params) {
        this.loading = true;
        const _params = params !== null && params !== void 0 ? params : {};
        this.ocorrenciaService
            .getOcorrencia(_params)
            .subscribe((response) => {
            if (response.status !== 200) {
                this.noResult = true;
                this.loading = false;
                this.ocorrencias = [];
                return;
            }
            const _ocorrencias = response.body['data'][0];
            const item = _ocorrencias['ID_TECN_INFO_ITEM'];
            this.getItem(item);
            this.form.patchValue(_ocorrencias);
            this.noResult = false;
        }, (error) => {
            this.pnotify.error();
            this.noResult = true;
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
    postOcorrencia() {
        let params = JSON.parse(JSON.stringify(this.form.getRawValue()));
        delete params['responsaveis'];
        this.loadingNavBar = true;
        this.ocorrenciaService
            .postOcorrencia(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(() => {
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                const id = response.body['data'];
                this.pnotify.success();
                this.postResponsaveis(id);
                this.postDocumentos(id);
                this.router.navigate(['../'], {
                    relativeTo: this.activatedRoute,
                });
            }
            else {
                this.pnotify.error();
            }
        }, (error) => {
            this.pnotify.error();
        });
    }
    get formResponsaveis() {
        const responsaveis = this.form.get('responsaveis');
        return responsaveis;
    }
    openModal(template, index) {
        this.index = index;
        this.modalRef = this.modalService.show(template, {
            animated: false,
            class: 'modal-xl',
        });
    }
    hideModal() {
        this.modalRef.hide();
    }
    onAddResponsavel() {
        this.formResponsaveis.push(this.formBuilder.group({
            ID_TEIN_OCOR: [null],
            ID_RESP: [null],
            NR_MATR_RESP: [{ value: null, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            NM_RESP: [{ value: null, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
        }));
    }
    postResponsaveis(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let request = [];
            const responsaveis = this.formResponsaveis.getRawValue();
            if (responsaveis.length == 0) {
                return;
            }
            const promise = () => {
                responsaveis.forEach(responsavel => {
                    const params = Object.assign(Object.assign({}, responsavel), { 'ID_TEIN_OCOR': id });
                    request.push(this.ocorrenciaService
                        .postResponsaveis(params));
                });
            };
            yield Promise.resolve(promise());
            Object(rxjs__WEBPACK_IMPORTED_MODULE_15__["forkJoin"])(request)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(() => {
                this.loading = false;
                this.loadingNavBar = false;
            }))
                .subscribe((responses) => {
                this.pnotify.success('Responsáveis cadastrados com sucesso');
            }, (error) => {
                try {
                    this.pnotify.error(error.error.message);
                }
                catch (error) {
                    this.pnotify.error();
                }
            });
        });
    }
    getUsuarios(params) {
        const _params = params !== null && params !== void 0 ? params : {};
        _params.situacao = '1';
        _params.qtItensPagina = 100;
        const _obj = this.formUsuarios.value;
        this.loadingUsuarios = true;
        if (_obj['pesquisa'])
            _params[_obj['buscarPor']] = _obj['pesquisa'];
        this.funcionarioService
            .getUsuarios(_params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(() => {
            this.loadingUsuarios = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.usuarios = response.body['usuarios'];
                this.totalItems = response.body['usuarios'].length;
                this.noUsuarios = false;
            }
            else {
                this.pnotify.notice('Nenhum registro encontrado!');
                this.usuarios = [];
                this.noUsuarios = true;
            }
        }, (error) => {
            this.pnotify.error();
            this.usuarios = [];
        });
    }
    setUsuarios(usuario) {
        //const _usuario = {...usuario,'IN_MATE': false}
        const fg = this.form.get('responsaveis');
        fg.controls[this.index].get('NR_MATR_RESP').patchValue(usuario.matricula);
        fg.controls[this.index].get('ID_RESP').patchValue(usuario.id);
        fg.controls[this.index].get('NM_RESP').patchValue(usuario.nome);
    }
    setItem(item) {
        this.form.get('ID_TECN_INFO_ITEM').patchValue(item.ID_TECN_INFO_ITEM);
        this.form.get('CD_ITEM').patchValue(item.CD_ITEM);
        this.form.get('NM_ITEM_TIPO').patchValue(item.NM_ITEM_TIPO);
        this.form.get('NM_MODE').patchValue(item.NM_MODE);
        this.form.get('NM_PROD').patchValue(item.NM_PROD);
        this.form.get('VL_ITEM').patchValue(item.VL_ITEM);
        this.form.get('NM_FUNC').patchValue(item.NM_USUA);
        this.form.get('NR_MATR_FUNC').patchValue(item.NR_MATR);
    }
    onDeleteResponsavel(index) {
        if (this.formResponsaveis.length === 1) {
            this.pnotify.notice('Informe ao menos um responsável.');
            return;
        }
        const id = this.form.get('ID_TEIN_OCOR');
        let responsaveis = this.formResponsaveis.at(index).value;
        responsaveis = Object.assign(Object.assign({}, responsaveis), { 'IN_STAT': '0' });
        if (!responsaveis['ID_RESP']) {
            this.formResponsaveis.removeAt(index);
            return;
        }
        this.loadingNavBar = true;
        this.ocorrenciaService
            .postResponsaveis(responsaveis)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(() => {
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.formResponsaveis.removeAt(index);
                this.pnotify.success();
            }
            else {
                this.pnotify.error();
            }
        }, (error) => {
            this.pnotify.error();
        });
    }
    onNestedFieldError(formGroup, index, field) {
        if (this.onNestedFieldInvalid(formGroup, index, field)) {
            return 'is-invalid';
        }
        return '';
    }
    onNestedFieldInvalid(formGroup, index, field) {
        let nestedForm = this.form.controls[formGroup];
        field = nestedForm.controls[index].get(field);
        return field.status == 'INVALID' && field.touched;
    }
    onNestedFieldRequired(formGroup, index, field) {
        let required = false;
        let formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        let nestedForm = this.form.controls[formGroup];
        if (nestedForm.controls[index].get(field).validator) {
            let validationResult = nestedForm.controls[index]
                .get(field)
                .validator(formControl);
            required =
                validationResult !== null && validationResult.required === true;
        }
        if (required) {
            return 'is-required';
        }
    }
    postDocumentos(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let requests = [];
            if (this.formData.length === 0) {
                return requests;
            }
            const promise = () => {
                this.formData.forEach((element) => {
                    requests.push(this.ocorrenciaService.postDocumento(element, id));
                });
            };
            Promise.resolve(promise());
            Object(rxjs__WEBPACK_IMPORTED_MODULE_15__["forkJoin"])(requests)
                .subscribe((responses) => {
                responses.forEach(response => {
                    if (response.status === 200) {
                        this.pnotify.success();
                    }
                    else {
                        this.pnotify.error();
                    }
                });
            }, (error) => {
                this.pnotify.error();
            });
            return requests;
        });
    }
    putDocumento(documento) {
        const [type, title, message, cancelTxt, okTxt] = [
            'inactivate',
            'Confirmar inativação',
            'Deseja realmente prosseguir com a inativação do registro?',
            'Cancelar',
            'Confirmar',
        ];
        this.confirmModalService
            .showConfirm(type, title, message, cancelTxt, okTxt)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["switchMap"])((result) => {
            if (!result)
                return rxjs__WEBPACK_IMPORTED_MODULE_15__["EMPTY"];
            this.loadingNavBar = true;
            return this.ocorrenciaService.putDocumento(documento);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(() => {
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            this.pnotify.success('Documento atualizado com sucesso');
            this.getDocumentos({
                ID_TEIN_OCOR: this.form.get('ID_TEIN_OCOR').value,
                IN_STAT: '1',
            });
        });
    }
    getDocumentos(params) {
        this.ocorrenciaService.getDocumento(params).subscribe((response) => {
            if (response.status === 200) {
                this.documentos = response.body['data'];
            }
            else {
                this.documentos = [];
            }
        }, (error) => {
            this.documentos = [];
        });
    }
    onRemove(documento, index) {
        if (!documento.hasOwnProperty('ID_TEIN_OCOR_DOCU')) {
            this.formData = this.formData.filter((element) => {
                return (element.get('file'))['name'] != documento.NM_DOCU;
            });
        }
        documento.IN_STAT = '0';
        this.documentos.splice(index, 1);
        if (documento.hasOwnProperty('ID_TEIN_OCOR_DOCU')) {
            this.putDocumento(documento);
        }
    }
    appendFile(files) {
        if (files.length === 0)
            return;
        const fd = new FormData();
        fd.append('file', files[0]);
        this.formData.push(fd);
        this.documentos.push({ NM_DOCU: files[0]['name'] });
    }
};
TecnologiaInformacaoCadastrosOcorrenciaCadastroComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_6__["TitleService"] },
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_13__["BsModalService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _item_services_item_service__WEBPACK_IMPORTED_MODULE_7__["TecnologiaInformacaoCadastroItemService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"] },
    { type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_10__["ConfirmModalService"] },
    { type: _services_funcionarios_service__WEBPACK_IMPORTED_MODULE_11__["TecnologiaInformacaoFuncionariosService"] },
    { type: _services_ocorrencia_service__WEBPACK_IMPORTED_MODULE_12__["TecnologiaInformacaoCadastroOcorrenciaService"] }
];
TecnologiaInformacaoCadastrosOcorrenciaCadastroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'tecnologia-informacao-cadastros-ocorrencia-cadastro',
        template: _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_6__["TitleService"],
        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_13__["BsModalService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _item_services_item_service__WEBPACK_IMPORTED_MODULE_7__["TecnologiaInformacaoCadastroItemService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"],
        src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_10__["ConfirmModalService"],
        _services_funcionarios_service__WEBPACK_IMPORTED_MODULE_11__["TecnologiaInformacaoFuncionariosService"],
        _services_ocorrencia_service__WEBPACK_IMPORTED_MODULE_12__["TecnologiaInformacaoCadastroOcorrenciaService"]])
], TecnologiaInformacaoCadastrosOcorrenciaCadastroComponent);



/***/ }),

/***/ "xBI/":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/tecnologia-informacao/contratos/ocorrencia/lista/lista.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ScrollPareceres {\n  height: 410px;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy90ZWNub2xvZ2lhLWluZm9ybWFjYW8vY29udHJhdG9zL29jb3JyZW5jaWEvbGlzdGEvbGlzdGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy90ZWNub2xvZ2lhLWluZm9ybWFjYW8vY29udHJhdG9zL29jb3JyZW5jaWEvbGlzdGEvbGlzdGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuU2Nyb2xsUGFyZWNlcmVzIHtcbiAgaGVpZ2h0OiA0MTBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufSJdfQ== */");

/***/ }),

/***/ "zvcX":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/tecnologia-informacao/contratos/ocorrencia/lista/lista.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: TecnologiaInformacaoCadastrosOcorrenciaListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoCadastrosOcorrenciaListaComponent", function() { return TecnologiaInformacaoCadastrosOcorrenciaListaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lista.component.html */ "qFqN");
/* harmony import */ var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lista.component.scss */ "xBI/");
/* harmony import */ var _estoque_produtos_services_produtos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../estoque/produtos/services/produtos.service */ "Z/u6");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../../shared/modules/confirm-modal/confirm-modal.service */ "FOez");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _services_ocorrencia_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/ocorrencia.service */ "S1or");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/modules/xlsx/xlsx.service */ "eOmW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");






//angular



//servicos




// rxjs



let TecnologiaInformacaoCadastrosOcorrenciaListaComponent = class TecnologiaInformacaoCadastrosOcorrenciaListaComponent {
    /* Pagination */
    constructor(route, pnotify, activatedRoute, ocorrenciaService, formBuilder, xlsxService, modalService, produtoService, confirmModalService, routerService, dateService) {
        this.route = route;
        this.pnotify = pnotify;
        this.activatedRoute = activatedRoute;
        this.ocorrenciaService = ocorrenciaService;
        this.formBuilder = formBuilder;
        this.xlsxService = xlsxService;
        this.modalService = modalService;
        this.produtoService = produtoService;
        this.confirmModalService = confirmModalService;
        this.routerService = routerService;
        this.dateService = dateService;
        this.responsaveis = [];
        this.loadingDocumentosParecer = true;
        this.loadingResponsaveisParecer = true;
        this.loadingPareceres = true;
        this.loading = true; //Loading FullPage
        this.loadingNavBar = false; //Loading do NAVBAR
        this.hiddenModal = false;
        this.documentosParecer = {};
        this.responsaveisParecer = {};
        this.pareceres = [];
        this.testes = [];
        this.imagensOcorrencia = [];
        this.documentosOcorrencia = [];
        this.produtos = [];
        // CUSTOM TABLE
        this.tableConfig = {
            subtitleBorder: true,
        };
        // Tipos de Situação dos Ocorrencias (Ativo/Inativo)
        this.tipos = [
            {
                cod: '1',
                nome: 'Ativos',
            },
            {
                cod: '0',
                nome: 'Inativos',
            },
        ];
        this.status = [
            {
                cod: '1',
                nome: 'Concluída',
            },
            {
                cod: '0',
                nome: 'Em andamento',
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
        /* Pagination */
        this.itemsPerPage = 100;
        this.totalItems = 10;
        this.currentPage = 1;
    }
    ngOnInit() {
        this.buildForm();
        this.setBreadCrumb();
        this.onActivatedRoute();
        this.getProdutos();
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
            this.getOcorrencia(this.getParams());
        });
    }
    buildForm() {
        this.form = this.formBuilder.group({
            ID_TEIN_OCOR: [null],
            NR_MATR: [null],
            NM_USUA: [null],
            CD_ITEM: [null],
            ID_TEIN_ESTO_PROD: [null],
            IN_STAT: [null],
            DS_OBSE: [null],
            IN_FINA: [null],
            PAGI: [1],
            TT_REGI_PAGI: [this.itemsPerPage],
            TIME: [new Date().getTime()],
        });
    }
    getProdutos(params) {
        const _params = params !== null && params !== void 0 ? params : {};
        _params.IN_STAT = '1';
        _params.IN_PAGI = '0';
        this.loadingProduto = true;
        this.produtoService
            .getProdutos(_params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(() => {
            this.loadingProduto = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.produtos = response.body['data'];
            }
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
    setBreadCrumb() {
        const id = this.activatedRoute.snapshot.params.idSubModulo;
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: `/tecnologia-informacao/home`,
            },
            {
                descricao: 'Contratos',
                routerLink: `/tecnologia-informacao/contratos/${id}`,
            },
            {
                descricao: 'Ocorrências',
            },
        ];
    }
    getResponsaveis(params) {
        this.noResponsaveis = true;
        this.loadingResponsaveis = true;
        this.ocorrenciaService
            .getResponsaveis(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(() => {
            this.loadingResponsaveis = false;
        }))
            .subscribe((response) => {
            if (response.status !== 200) {
                this.pnotify.notice('Nenhum responsável encontrado!');
                this.noResponsaveis = true;
                return;
            }
            this.responsaveis = response['body']['data'];
            this.noResponsaveis = false;
        }, (error) => {
            this.noResponsaveis = true;
            this.pnotify.error('Não foi encontrado nenhum responsável');
        });
    }
    onFilter() {
        this.form.get('TIME').setValue(new Date().getTime());
        this.route.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams(this.getParams()),
        });
    }
    openModal(template, ocorrencia) {
        this.noPareceres = true;
        this.totalDocumentosOcorrencia = 0;
        this.totalImagensOcorrencia = 0;
        const _params = { ID_TEIN_OCOR: ocorrencia['ID_TEIN_OCOR'] };
        const _paramsImagem = Object.assign(Object.assign({}, _params), { TP_DOCU: 'IMAGEM' });
        const _paramsDocumento = Object.assign(Object.assign({}, _params), { TP_DOCU: 'DOCUMENTO' });
        this.getImagensOcorrencia(_paramsImagem);
        this.getDocumentosOcorrencia(_paramsDocumento);
        this.getResponsaveis(_params);
        this.getParecer(_params);
        this.ocorrenciaSelecionada = ocorrencia;
        this.modalRef1 = this.modalService.show(template, {
            animated: false,
            class: 'modal-xl',
        });
    }
    hideModal() {
        this.modalRef1.hide();
    }
    getDocumentosOcorrencia(params) {
        this.loadingDocumentosOcorrencias = true;
        this.ocorrenciaService.getDocumento(params).subscribe((response) => {
            if (response.status === 200) {
                this.documentosOcorrencia = response.body['data'];
                this.totalDocumentosOcorrencia = response.body['data'].length;
                this.loadingDocumentosOcorrencias = false;
            }
            else {
                this.documentosOcorrencia = [];
                this.totalDocumentosOcorrencia = 0;
                this.loadingDocumentosOcorrencias = false;
            }
        }, (error) => {
            this.documentosOcorrencia = [];
            this.loadingDocumentosOcorrencias = false;
        });
    }
    onTermo(ocorrencia) {
        const id = this.activatedRoute.snapshot.params.idSubModulo;
        this.route.navigate([`/tecnologia-informacao/contratos/${id}/termo-devolucao`, ocorrencia.ID_TEIN_OCOR], {
            relativeTo: this.activatedRoute,
        });
    }
    getImagensOcorrencia(params) {
        this.loadingImagensOcorrencia = true;
        this.ocorrenciaService.getDocumento(params).subscribe((response) => {
            if (response.status === 200) {
                this.imagensOcorrencia = response.body['data'];
                this.totalImagensOcorrencia = response.body['data'].length;
                this.loadingImagensOcorrencia = false;
            }
            else {
                this.imagensOcorrencia = [];
                this.totalImagensOcorrencia = 0;
                this.loadingImagensOcorrencia = false;
            }
        }, (error) => {
            this.imagensOcorrencia = [];
            this.loadingImagensOcorrencia = false;
        });
    }
    getOcorrencia(params) {
        if (!this.loading)
            this.loadingNavBar = true;
        this.ocorrenciaService
            .getOcorrencia(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(() => {
            this.loading = false;
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.ocorrencias = response.body['data'];
                this.totalItems = response.body['total'];
                this.noResult = false;
            }
            else {
                this.noResult = true;
                this.ocorrencias = [];
            }
        }, (error) => {
            this.pnotify.error();
            this.noResult = true;
        });
    }
    changeType(ocorrencias) {
        const stat = ocorrencias.IN_STAT == '1' ? '0' : '1';
        this.confirmChange(stat)
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["switchMap"])((result) => {
            if (!result)
                return rxjs__WEBPACK_IMPORTED_MODULE_14__["EMPTY"];
            this.loadingNavBar = true;
            ocorrencias.IN_STAT = stat;
            return this.ocorrenciaService.postOcorrencia(ocorrencias);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(() => {
            this.loadingNavBar = false;
        }))
            .subscribe((success) => {
            this.pnotify.success();
        }, (error) => {
            ocorrencias.IN_STAT = ocorrencias.IN_STAT == '1' ? '0' : '1';
            this.pnotify.error();
        });
    }
    confirmChange(stat) {
        if (stat == '1')
            return this.confirmModalService.showConfirm(null, null, 'Deseja realmente prosseguir com a ativação do registro?', 'Cancelar', 'Confirmar');
        return this.confirmModalService.showConfirm('inactivate', 'Confirmar inativação', 'Deseja realmente prosseguir com a inativação do registro?', 'Cancelar', 'Confirmar');
    }
    onPageChanged(event) {
        this.form.get('PAGI').setValue(event.page);
        this.onFilter();
    }
    setPageRegistros(itemsPerPage) {
        this.itemsPerPage = itemsPerPage;
        this.onFilter();
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
    onFecharModal(event) {
        if (event == true) {
            this.hideModalParecer();
            this.getParecer({ ID_TEIN_OCOR: this.ocorrenciaSelecionada['ID_TEIN_OCOR'], IN_STAT: '1' });
            this.ocorrenciaService
                .getOcorrencia({ ID_TEIN_OCOR: this.ocorrenciaSelecionada['ID_TEIN_OCOR'], })
                .subscribe((response) => {
                if (response.status === 200) {
                    this.ocorrenciaSelecionada = response.body['data'][0];
                }
                return;
            });
        }
        return;
    }
    openModalParecer(template) {
        const id = this.ocorrenciaSelecionada['ID_TEIN_OCOR'];
        this.ocorrenciaId = id;
        this.hiddenModal = true;
        this.modalRef2 = this.modalService.show(template, {
            animated: true,
            class: 'modal-lg',
            backdrop: 'static',
        });
    }
    hideModalParecer() {
        this.hiddenModal = false;
        this.modalRef2.hide();
    }
    getParecer(params) {
        this.loadingPareceres = true;
        params = Object.assign(Object.assign({}, params), { ORDE_TYPE: 'desc' });
        this.ocorrenciaService.getParecer(params)
            .subscribe((response) => {
            if (response.status === 200) {
                this.pareceres = response.body['data'];
                this.noPareceres = false;
                this.pareceres.forEach(parecer => {
                    this.getDocumentoParecer(parecer);
                    this.getResponsaveisParecer(parecer);
                    this.loadingPareceres = false;
                });
            }
            else {
                this.pareceres = [];
                this.noPareceres = true;
                this.loadingPareceres = false;
            }
        }, (error) => {
            this.pareceres = [];
            this.noPareceres = true;
            this.loadingPareceres = false;
        });
    }
    getDocumentoParecer(params) {
        this.loadingDocumentosParecer = true;
        this.ocorrenciaService
            .getDocumentoParecer(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(() => {
            this.loadingDocumentosParecer = false;
        }))
            .subscribe((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (response.status !== 200) {
                return;
            }
            const documentos = response['body']['data'];
            this.documentosParecer[params.ID_TEIN_OCPR] = documentos;
        }), (error) => {
            this.pnotify.error('Não foi encontrado nenhum documento');
        });
    }
    getResponsaveisParecer(params) {
        this.loadingResponsaveisParecer = true;
        this.ocorrenciaService
            .getResponsaveisParecer(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(() => {
            this.loadingResponsaveisParecer = false;
        }))
            .subscribe((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (response.status !== 200) {
                this.noResponsaveisParecer = true;
                return;
            }
            const responsaveis = response['body']['data'];
            this.noResponsaveisParecer = false;
            this.responsaveisParecer[params.ID_TEIN_OCPR] = responsaveis;
        }), (error) => {
            this.pnotify.error('Não foi encontrado nenhum responsável');
            this.noResponsaveisParecer = true;
        });
    }
    finalizarOcorrencia(ocorrencias) {
        const stat = ocorrencias.IN_FINA == 1 ? 0 : 1;
        this.confirmChangeOcorrencia(stat)
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["switchMap"])((result) => {
            if (!result)
                return rxjs__WEBPACK_IMPORTED_MODULE_14__["EMPTY"];
            this.loadingNavBar = true;
            ocorrencias.IN_FINA = stat;
            return this.ocorrenciaService.postOcorrencia(ocorrencias);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(() => {
            this.loadingNavBar = false;
        }))
            .subscribe((success) => {
            this.pnotify.success('Ocorrência concluída com sucesso!');
        }, (error) => {
            ocorrencias.IN_FINA = ocorrencias.IN_FINA == 1 ? 0 : 1;
            this.pnotify.error();
        });
    }
    confirmChangeOcorrencia(stat) {
        if (stat != 1) {
            this.pnotify.notice('Erro ao concluir ocorrência!');
            return;
        }
        return this.confirmModalService.showConfirm(null, 'Confirmar Finalização da Ocorrência', 'Deseja realmente concluir a ocorrência?', 'Cancelar', 'Confirmar');
    }
    onExport() {
        let data = new Date().toLocaleDateString().split('/'), dataExport = `${data[0]}${data[1]}${data[2]}`;
        let listagemExport = [];
        listagemExport = this.ocorrencias;
        this.xlsxService.exportFile(listagemExport, `Ocorrencias_${dataExport}`);
    }
};
TecnologiaInformacaoCadastrosOcorrenciaListaComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _services_ocorrencia_service__WEBPACK_IMPORTED_MODULE_10__["TecnologiaInformacaoCadastroOcorrenciaService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"] },
    { type: src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_12__["XlsxService"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] },
    { type: _estoque_produtos_services_produtos_service__WEBPACK_IMPORTED_MODULE_3__["TecnologiaInformacaoEstoqueProdutosService"] },
    { type: _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_5__["ConfirmModalService"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_11__["RouterService"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_15__["DateService"] }
];
TecnologiaInformacaoCadastrosOcorrenciaListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'tecnologia-informacao-cadastros-ocorrencia-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
        _services_ocorrencia_service__WEBPACK_IMPORTED_MODULE_10__["TecnologiaInformacaoCadastroOcorrenciaService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"],
        src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_12__["XlsxService"],
        ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
        _estoque_produtos_services_produtos_service__WEBPACK_IMPORTED_MODULE_3__["TecnologiaInformacaoEstoqueProdutosService"],
        _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_5__["ConfirmModalService"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_11__["RouterService"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_15__["DateService"]])
], TecnologiaInformacaoCadastrosOcorrenciaListaComponent);



/***/ })

}]);
//# sourceMappingURL=ocorrencia-ocorrencia-module-es2015.js.map