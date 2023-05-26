(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["item-item-module"],{

/***/ "+rmI":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/tecnologia-informacao/contratos/item/item.module.ts ***!
  \*****************************************************************************/
/*! exports provided: TecnologiaInformacaoItemModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoItemModule", function() { return TecnologiaInformacaoItemModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-currency-mask */ "D5nU");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/module-wrapper/module-wrapper.module */ "RoXV");
/* harmony import */ var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/not-found/not-found.module */ "sCnT");
/* harmony import */ var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/pipes/pipes.module */ "9Xeq");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "2ZVE");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/locales/pt */ "vT00");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "6No5");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "978R");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular2-text-mask */ "UVXo");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var ng_brazil__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-brazil */ "hTrW");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./lista/lista.component */ "oNPu");
/* harmony import */ var _item_routing_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./item-routing.module */ "bb1x");
/* harmony import */ var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./cadastro/cadastro.component */ "6zXH");














Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_12___default.a);
Object(ngx_bootstrap__WEBPACK_IMPORTED_MODULE_13__["defineLocale"])('pt-br', ngx_bootstrap__WEBPACK_IMPORTED_MODULE_13__["ptBrLocale"]);
// ngx-bootstrap


// ng-select

// ng-brazil


// Modules


// Components



let TecnologiaInformacaoItemModule = class TecnologiaInformacaoItemModule {
};
TecnologiaInformacaoItemModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"])({
        declarations: [
            _lista_lista_component__WEBPACK_IMPORTED_MODULE_21__["TecnologiaInformacaoCadastrosItemListaComponent"],
            _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_23__["TecnologiaInformacaoCadastrosItemCadastroComponent"],
        ],
        imports: [
            _item_routing_module__WEBPACK_IMPORTED_MODULE_22__["TecnologiaInformacaoCadastrosItemModuleRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_16__["NgSelectModule"],
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_14__["PaginationModule"].forRoot(),
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_15__["TooltipModule"].forRoot(),
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__["TabsModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["ModalModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_13__["BsDatepickerModule"].forRoot(),
            src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"],
            src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_4__["NotFoundModule"],
            src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_3__["ModuleWrapperModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_19__["SharedModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_20__["TemplatesModule"],
            ng_brazil__WEBPACK_IMPORTED_MODULE_18__["NgBrazil"],
            angular2_text_mask__WEBPACK_IMPORTED_MODULE_17__["TextMaskModule"],
            ng2_currency_mask__WEBPACK_IMPORTED_MODULE_1__["CurrencyMaskModule"],
        ],
        providers: [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_2__["PNotifyService"], { provide: _angular_core__WEBPACK_IMPORTED_MODULE_9__["LOCALE_ID"], useValue: 'pt-br' }],
    })
], TecnologiaInformacaoItemModule);



/***/ }),

/***/ "37PZ":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/tecnologia-informacao/contratos/item/cadastro/cadastro.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\n<app-header appTitle=\"Cadastro de Itens\">\n  <button \n    [disabled]=\"form.valid === false || loadingNavBar === true\"\n    (click)=\"postMovimentacoes()\"\n    >\n    Salvar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\n  <form [formGroup]=\"form\" autocomplete=\"off\" [hidden] = \"loading\">\n    <fieldset  class=\"col-12\">\n      <fieldset class=\"border rounded shadow-sm col-6 pt-2 mx-auto\">\n        <legend>Dados do Item</legend>\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col pl-0\">\n            <label for=\"contrato\">Contrato</label>\n            <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"true\"\n              [items]=\"contrato\"\n              [virtualScroll]=\"true\"\n              dropdownPosition=\"bottom\"\n              placeholder=\"Selecione...\"\n              [loading]=\"loadingContrato\"\n              labelForId=\"ID_TECN_INFO_CONT\"\n              bindLabel=\"DS_CONT\"\n              bindValue=\"ID_TECN_INFO_CONT\"\n              id=\"ID_TECN_INFO_CONT\"\n              formControlName=\"ID_TECN_INFO_CONT\"\n              >\n            </ng-select>\n            <invalid-form-control [show]=\"onFieldInvalid('ID_TECN_INFO_CONT')\" message=\"Contrato é obrigatório.\"></invalid-form-control>\n          </div>\n        </div>\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col pl-0\">\n            <label for=\"produtos\">Produtos</label>\n            <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"true\"\n              [items]=\"produtos\"\n              [virtualScroll]=\"true\"\n              dropdownPosition=\"bottom\"\n              placeholder=\"Selecione...\"\n              [loading]=\"loadingProduto\"\n              labelForId=\"ID_TEIN_ESTO_PROD\"\n              bindLabel=\"NM_PROD\"\n              bindValue=\"ID_TEIN_ESTO_PROD\"\n              id=\"ID_TEIN_ESTO_PROD\"\n              formControlName=\"ID_TEIN_ESTO_PROD\"\n              (change)=\"setNumeroSerie($event)\"\n              >\n            </ng-select>\n          </div>\n        </div>\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col pl-0\">\n            <div class=\"mb-0 d-flex justify-content-between w-100\" style=\"height: 22px\">\n              <label class=\"my-auto\" for=\"NM_USUA\">Funcionário</label>\n              <div class=\"my-auto text-uppercase\" style=\"font-size: 10px\" >\n                <a\n                  class=\"text-primary\"\n                  href=\"javascript:void(0)\"\n                  (click)=\"openModal(pesquisaDeFuncionarios)\">\n                  <strong>Selecionar</strong>\n                </a>\n              </div>\n            </div>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"NM_USUA\"\n              formControlName=\"NM_USUA\"\n              placeholder=\"Selecionar...\"\n            />\n          </div>\n        </div>\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col pl-0\">\n            <label for=\"centroCusto\">Centro de Custo</label>\n            <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"true\"\n              [items]=\"centroCusto\"\n              [virtualScroll]=\"true\"\n              dropdownPosition=\"bottom\"\n              placeholder=\"Selecione...\"\n              [loading]=\"loadingCcu\"\n              labelForId=\"CD_CCU\"\n              bindLabel=\"NM_CCU\"\n              bindValue=\"CD_CCU\"\n              id=\"CD_CCU\"\n              formControlName=\"CD_CCU\"\n            >\n            </ng-select>\n          </div>\n        </div>\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col pl-0\">\n            <div class=\"mb-0 d-flex justify-content-between w-100\" style=\"height: 22px\">\n              <label class=\"my-auto\" for=\"ID_TECN_INFO_ITEM_REFE\">Item</label>\n              <div class=\"my-auto text-uppercase\" style=\"font-size: 10px\" >\n                <a\n                  class=\"text-primary\"\n                  href=\"javascript:void(0)\"\n                  (click)=\"openModal(pesquisaDeItens)\">\n                  <strong>Selecionar</strong>\n                </a>\n              </div>\n            </div>\n            <select\n                type=\"text\"\n                class=\"form-control\"\n                id=\"ID_TECN_INFO_ITEM_REFE\"\n                formControlName=\"ID_TECN_INFO_ITEM_REFE\"\n                placeholder=\"Selecionar...\"\n              >\n              <option [value]=\"item.ID_TECN_INFO_ITEM\" *ngFor=\"let item of itens\">{{ item.CD_ITEM }}</option>\n          </select>\n          </div>\n        </div>\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col-md-6 pl-0\">\n            <label for=\"CD_ITEM\">Código/Nº Série</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"CD_ITEM\"\n              formControlName=\"CD_ITEM\"\n              placeholder=\"Digite...\"\n              [ngClass]=\"onFieldError('CD_ITEM') + ' ' + onFieldRequired('CD_ITEM')\"\n            />\n            <invalid-form-control [show]=\"onFieldInvalid('CD_ITEM')\" message=\"Código/Nº Série é obrigatório.\"></invalid-form-control>\n          </div>\n          <div class=\"form-group col-md-6 pl-0\">\n            <label for=\"ID_TECN_INFO_ITEM_STAT\">Situação</label>\n            <select\n              class=\"form-control custom-select\"\n              id=\"ID_TECN_INFO_ITEM_STAT\"\n              formControlName=\"ID_TECN_INFO_ITEM_STAT\"\n              [ngClass]=\"onFieldRequired('ID_TECN_INFO_ITEM_STAT')\">\n              <option value=\"1\">Ativo</option>\n              <option value=\"2\">Inativo</option>\n              <option value=\"3\">Furtado</option>\n              <option value=\"4\">Assistência Técnica</option>\n            </select>\n            <invalid-form-control [show]=\"onFieldInvalid('ID_TECN_INFO_ITEM_STAT')\" message=\"Situação é obrigatório.\"></invalid-form-control>\n          </div>  \n        </div>\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col-md-6 pl-0\">\n            <label for=\"VL_ITEM\">Valor</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"VL_ITEM\"\n              formControlName=\"VL_ITEM\"\n              placeholder=\"Digite...\"\n              currencyMask [options]=\"{ align: 'left', prefix: 'R$ ', thousands: '.', decimal: ',' }\"\n              [ngClass]=\"onFieldError('VL_ITEM') + ' ' + onFieldRequired('VL_ITEM')\"\n            />\n            <invalid-form-control [show]=\"onFieldInvalid('VL_ITEM')\" message=\"Valor do Item é obrigatório.\"></invalid-form-control>\n          </div>\n          \n          <div class=\"form-group col-md-6 pl-0\"></div>\n        </div>\n      </fieldset>\n      <br>\n      <br>\n      <fieldset class=\"border rounded shadow-sm col-6 pt-2 mx-auto\">\n            <legend>Observação</legend>\n            <div class=\"form-row justify-content-center\">\n              <div class=\"form-group col\">\n                <label for=\"DS_OBSE\" >Observação:</label>\n                <textarea class=\"form-control\" id=\"DS_OBSE\" formControlName=\"DS_OBSE\" rows=\"3\"></textarea>\n              </div>\n            </div>\n            <br>\n      </fieldset>\n      <br>\n      <br>\n      <fieldset class=\"border rounded shadow-sm col-6 pt-2 pb-2 mx-auto\">\n        <legend>Anexos</legend>\n        <div class=\"form-group border rounded p-1\">\n          <div>\n            <label for=\"documento\" class=\"w-100 d-flex justify-content-between align-items-center m-0 py-1\" style=\"cursor: pointer;\">\n              <span>Novo Documento</span>\n            </label>\n            <input\n              id=\"documento\"\n              type=\"file\"\n              (change)=\"appendFile($event.target.files)\"\n              class=\"d-none\"\n              >\n          </div>\n        </div>\n        <ul>\n          <li class=\"d-flex justify-content-between\" *ngFor=\"let item of documentos\">\n            <div>{{ item.NM_DOCU | uppercase }}</div>\n            <div [hidden]=\"!item.ID_TECN_INFO_ITEM_DOCU\">\n              <a\n                [href]=\"item.LINK\"\n                target=\"_blank\"\n                class=\"btn-icon-sm mx-2 text-black\"\n                tooltip=\"visualizar\"\n              >\n                <i class=\"far fa-eye\"></i>\n              </a>\n              <button\n                class=\"btn-icon-sm mx-2 hover\"\n                tooltip=\"excluir\"\n                (click)=\"onRemove(item)\"\n                >\n                <i class=\"fas fa-trash\"></i>\n              </button>\n            </div>\n          </li>\n        </ul>\n      </fieldset>\n    </fieldset>\n  </form>\n  <ng-template #pesquisaDeItens>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title pull-left\">Pesquisa de Itens</h4>\n      <div class=\"d-flex justify-content-center align-items-center\">\n        <div class=\"spinner-border text-primary mr-2\" role=\"status\" *ngIf=\"loadingItens\">\n          <span class=\"sr-only\">Loading...</span>\n        </div>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModal()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n    </div>\n    <div class=\"modal-body\">\n      <advanced-filter>\n        <form [formGroup]=\"formPesquisaItem\">\n          <div class=\"form-row\">\n            <div class=\"form-group col\">\n              <label for=\"cdItem\">BUSCAR POR</label>\n              <select\n                class=\"form-control custom-select\"\n                formControlName=\"buscarPor\"\n              >\n                <option value=\"ID_TECN_INFO_ITEM\" selected>ID</option>\n                <option value=\"CD_ITEM\">Código/Nº Série</option>\n                <option value=\"NM_PROD\">Produto</option>\n                <option value=\"ID_TECN_INFO_CONT\">Contrato</option>\n              </select>\n            </div>\n            <div class=\"form-group col\">\n              <label>TERMO DE PESQUISA</label>\n              <div class=\"input-group\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  formControlName=\"pesquisa\"\n                  (keyup.enter)=\"getItens()\"\n                >\n                <div class=\"input-group-append\">\n                  <span\n                    class=\"input-group-text hover\"\n                    (click)=\"getItens()\"\n                  >\n                    <i class=\"fas fa-search\"></i>\n                  </span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </form>\n      </advanced-filter>\n      <custom-table *ngIf=\"!loadingItens && (itens.length > 0)\">\n        <ng-template #thead let-thead>\n          <tr>\n            <th>ID</th>\n            <th>Código/Nº Série</th>\n            <th>Produto</th>\n            <th>Contrato</th>\n            <th></th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr *ngFor=\"let item of itens\">\n            <td>{{ item.ID_TECN_INFO_ITEM }}</td>\n            <td>{{ item.CD_ITEM }}</td>\n            <td>{{ item.NM_PROD }}</td>\n            <td>{{ item.DS_CONT }}</td>\n            <td>\n              <button\n                class=\"btn-icon-sm\"\n                tooltip=\"Salvar Item\"\n                container=\"body\"\n                (click)=\"setItem(item);modalRef.hide()\"\n              >\n                <i class=\"far fa-save\"></i>\n              </button>\n            </td>\n          </tr>\n        </ng-template>\n      </custom-table>\n    </div>\n  </ng-template>\n  <ng-template #pesquisaDeFuncionarios>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title pull-left\">Pesquisa de Funcionarios</h4>\n      <div class=\"d-flex justify-content-center align-items-center\">\n        <div class=\"spinner-border text-primary mr-2\" role=\"status\" *ngIf=\"loadingFuncionario\">\n          <span class=\"sr-only\">Loading...</span>\n        </div>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModal()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n    </div>\n    <div class=\"modal-body\">\n      <advanced-filter>\n        <form [formGroup]=\"formPesquisaFuncionario\">\n          <div class=\"form-row\">\n            <div class=\"form-group col\">\n              <label for=\"cdItem\">BUSCAR POR</label>\n              <select\n                class=\"form-control custom-select\"\n                formControlName=\"buscarPor\"\n              >\n                <option value=\"NR_MATR\">Matricula</option>\n                <option value=\"NM_FUNC\" selected>Nome do Funcionario</option>\n              </select>\n            </div>\n            <div class=\"form-group col\">\n              <label>TERMO DE PESQUISA</label>\n              <div class=\"input-group\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  formControlName=\"pesquisa\"\n                  (keyup.enter)=\"getFuncionarios()\"\n                >\n                <div class=\"input-group-append\">\n                  <span\n                    class=\"input-group-text hover\"\n                    (click)=\"getFuncionarios()\"\n                  >\n                    <i class=\"fas fa-search\"></i>\n                  </span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </form>\n      </advanced-filter>\n      <custom-table *ngIf=\"!loadingFuncionario && (funcionarios.length > 0)\">\n        <ng-template #thead let-thead>\n          <tr>\n            <th>Matricula</th>\n            <th>Nome</th>\n            <th></th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr *ngFor=\"let funcionario of funcionarios\">\n            <td>{{ funcionario.NR_MATR }}</td>\n            <td>{{ funcionario.NM_FUNC }}</td>\n            <td>\n              <button\n                class=\"btn-icon-sm\"\n                tooltip=\"Salvar Funcionario\"\n                container=\"body\"\n                (click)=\"setFuncionario(funcionario);modalRef.hide()\"\n              >\n                <i class=\"far fa-save\"></i>\n              </button>\n            </td>\n          </tr>\n        </ng-template>\n      </custom-table>\n    </div>\n  </ng-template>\n</app-body>");

/***/ }),

/***/ "6zXH":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/tecnologia-informacao/contratos/item/cadastro/cadastro.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: TecnologiaInformacaoCadastrosItemCadastroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoCadastrosItemCadastroComponent", function() { return TecnologiaInformacaoCadastrosItemCadastroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cadastro.component.html */ "37PZ");
/* harmony import */ var _cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cadastro.component.scss */ "bhCr");
/* harmony import */ var _estoque_movimentacoes_services_movimentacoes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../estoque/movimentacoes/services/movimentacoes.service */ "3vpR");
/* harmony import */ var _estoque_services_estoque_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../estoque/services/estoque.service */ "vqwq");
/* harmony import */ var _services_funcionarios_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/funcionarios.service */ "jMbs");
/* harmony import */ var _contrato_services_contrato_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../contrato/services/contrato.service */ "Ztrz");
/* harmony import */ var js_brasil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! js-brasil */ "zFJr");
/* harmony import */ var js_brasil__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(js_brasil__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/modules/confirm-modal/confirm-modal.service */ "FOez");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/item.service */ "Z7gR");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ "qCKp");









//Services




//Bootstrap

//Angular



//rxjs


let TecnologiaInformacaoCadastrosItemCadastroComponent = class TecnologiaInformacaoCadastrosItemCadastroComponent {
    // tipoMoeda = [];
    constructor(formBuilder, pnotify, activatedRoute, confirmModalService, modalService, titleService, estoqueService, atividadesService, itemService, funcionarioService, contratos, movimentacoesService, router) {
        this.formBuilder = formBuilder;
        this.pnotify = pnotify;
        this.activatedRoute = activatedRoute;
        this.confirmModalService = confirmModalService;
        this.modalService = modalService;
        this.titleService = titleService;
        this.estoqueService = estoqueService;
        this.atividadesService = atividadesService;
        this.itemService = itemService;
        this.funcionarioService = funcionarioService;
        this.contratos = contratos;
        this.movimentacoesService = movimentacoesService;
        this.router = router;
        this.breadCrumbTree = [];
        this.formData = [];
        //loading
        this.loading = false;
        // loadingMoeda: boolean;
        this.loadingItens = false;
        this.loadingNavBar = false;
        this.anexosLoaded = false;
        //Interfaces
        this.documentos = [];
        this.produtos = [];
        this.itens = [];
        this.contrato = [];
        this.funcionarios = [];
        this.centroCusto = [];
        this.MASKS = js_brasil__WEBPACK_IMPORTED_MODULE_7__["utilsBr"].MASKS;
    }
    ngOnInit() {
        this.registrarAcesso();
        this.setBreadCrumb();
        this.setFormBuilder();
        this.onActivatedRoute();
        this.getContrato();
        this.getEstoqueItens();
        this.getCentroCusto();
    }
    registrarAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
    }
    getEstoqueItens(params) {
        const _params = params !== null && params !== void 0 ? params : {};
        _params.IN_STAT = '1';
        _params.IN_PAGI = '0';
        this.loadingProduto = true;
        this.estoqueService
            .getEstoqueItens(_params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["finalize"])(() => {
            this.loadingProduto = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.produtos = response.body['data'];
            }
        });
    }
    getContrato(params) {
        const _params = params !== null && params !== void 0 ? params : {};
        _params.IN_STAT = '1';
        this.loadingContrato = true;
        this.contratos
            .getContrato(_params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["finalize"])(() => {
            this.loadingContrato = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.contrato = response.body['data'];
            }
            else {
                this.contrato = [];
            }
        }, (error) => {
            this.contrato = [];
        });
    }
    getCentroCusto(params) {
        this.loadingCcu = true;
        this.funcionarioService
            .getCentroCusto()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["finalize"])(() => {
            this.loadingCcu = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.centroCusto = response.body['data'];
            }
        });
    }
    onActivatedRoute() {
        const _params = this.activatedRoute.snapshot.params;
        if (!_params.hasOwnProperty('id'))
            return;
        this.getItem({ ID_TECN_INFO_ITEM: _params['id'] });
        this.getDocumentos({ ID_TECN_INFO_ITEM: _params['id'], IN_STAT: '1' });
    }
    getItem(params) {
        this.loading = true;
        this.itemService.getItem(params).subscribe((response) => {
            if (response.status === 200) {
                this.loading = false;
                const _items = response.body['data'][0];
                this.form.patchValue(_items);
                this.formPesquisaItem.patchValue({
                    buscarPor: 'ID_TECN_INFO_ITEM',
                    pesquisa: _items.ID_TECN_INFO_ITEM_REFE,
                });
                this.getItens();
            }
        }, (error) => {
            this.pnotify.error();
        });
    }
    getItens() {
        const _obj = this.formPesquisaItem.value;
        const _params = {};
        if (_obj['pesquisa'])
            _params[_obj['buscarPor']] = _obj['pesquisa'];
        this.loadingItens = true;
        this.itemService
            .getItem(_params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["finalize"])(() => {
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
    getFuncionarios(params) {
        const _obj = this.formPesquisaFuncionario.value;
        const _params = params !== null && params !== void 0 ? params : {};
        _params.CD_STAT_USUA = 1;
        if (_obj['pesquisa'])
            _params[_obj['buscarPor']] = _obj['pesquisa'];
        this.loadingFuncionario = true;
        this.funcionarioService
            .getFuncionario(_params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["finalize"])(() => {
            this.loadingFuncionario = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.funcionarios = response.body['data'];
            }
            else {
                this.pnotify.notice('Nenhum registro encontrado!');
                this.funcionarios = [];
            }
        }, (error) => {
            this.pnotify.error();
            this.funcionarios = [];
        });
    }
    setItem(item) {
        this.getItens();
        this.form.get('ID_TECN_INFO_ITEM_REFE').setValue(item.ID_TECN_INFO_ITEM);
    }
    setFuncionario(funcionario) {
        this.form.get('NR_MATR').setValue(funcionario.NR_MATR);
        this.form.get('NM_USUA').setValue(funcionario.NM_USUA);
    }
    setBreadCrumb() {
        const id = this.activatedRoute.snapshot.params.idSubModulo;
        this.appTitle = 'Cadastro';
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
                descricao: 'Itens',
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
            CD_ITEM: [{ value: null, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__["Validators"].required]],
            VL_ITEM: [null],
            ID_TEIN_ESTO_PROD: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__["Validators"].required]],
            ID_TECN_INFO_ITEM: [null],
            ID_TECN_INFO_ITEM_STAT: ['1', [_angular_forms__WEBPACK_IMPORTED_MODULE_16__["Validators"].required]],
            ID_TECN_INFO_CONT: [null],
            ID_TECN_INFO_ITEM_DOCU: [null],
            NR_MATR: [null],
            TP_MOVI: [null],
            ID_EMPR: [null],
            NM_USUA: [{ value: null, disabled: true }],
            ID_TIPO_MOED: [null],
            ID_TECN_INFO_ITEM_REFE: [{ value: null, disabled: true }],
            CD_CCU: [null],
            DS_OBSE: [null],
        });
        this.formPesquisaItem = this.formBuilder.group({
            buscarPor: ['CD_ITEM'],
            pesquisa: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["Validators"].required],
            ID_TECN_INFO_ITEM: [null],
            CD_ITEM: [null],
            NM_PROD: [null],
            ID_TECN_INFO_CONT: [null],
        });
        this.formPesquisaFuncionario = this.formBuilder.group({
            buscarPor: ['NM_FUNC'],
            pesquisa: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["Validators"].required],
            NR_MATR: [null],
            NM_FUNC: [null],
            NM_EMPR: [null],
            CD_USUA_CPF: [null],
            CD_USUA_RG: [null],
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
        let formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormControl"]();
        if (this.form.controls[field].validator) {
            let validationResult = this.form.controls[field].validator(formControl);
            required =
                validationResult !== null && validationResult.required === true;
        }
        if (required) {
            return 'is-required';
        }
    }
    postMovimentacoes() {
        this.loadingNavBar = true;
        let params = JSON.parse(JSON.stringify(this.form.getRawValue()));
        this.movimentacoesService
            .postMovimentacoes(Object.assign(Object.assign({}, params), { TP_MOVI: 'SAIDA', TT_PROD: 1 }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.pnotify.success();
                this.postItem();
            }
            else {
                this.loadingNavBar = false;
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
    postItem() {
        this.loadingNavBar = true;
        let params = JSON.parse(JSON.stringify(this.form.getRawValue()));
        this.itemService.postItem(params).subscribe((response) => {
            if (response.status === 200) {
                const _id = response.body['data']['message'];
                this.postDocumentos(_id);
                this.pnotify.success();
            }
            else {
                this.movimentacoesService.postMovimentacoes(Object.assign(Object.assign({}, params), { TP_MOVI: 'ENTRADA', TT_PROD: 1 }));
                this.pnotify.error('Nenhuma Movimentação foi realizada!');
            }
        }, (error) => {
            this.pnotify.error();
        });
    }
    setNumeroSerie(event) {
        console.log(event);
        const cod = event === null || event === void 0 ? void 0 : event.CD_ITEM;
        const codEmpr = event === null || event === void 0 ? void 0 : event.ID_EMPR;
        this.form.get('CD_ITEM').setValue(cod);
        this.form.get('ID_EMPR').setValue(codEmpr);
    }
    postDocumentos(id) {
        let req = [];
        if (this.formData.length == 0) {
            this.form.reset();
            this.loadingNavBar = false;
            return;
        }
        this.formData.forEach((element, index) => {
            req.push(this.itemService.postDocumento(element, id));
        });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_18__["forkJoin"])(req)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["finalize"])(() => {
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            this.documentos = [];
            this.formData = [];
            this.pnotify.success(`Documentos salvos com sucesso`);
            this.form.reset();
            this.router.navigate(['../'], {
                relativeTo: this.activatedRoute,
            });
        }, (error) => {
            this.pnotify.error('Erro ao salvar documentos');
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
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["switchMap"])((result) => {
            if (!result)
                return rxjs__WEBPACK_IMPORTED_MODULE_18__["EMPTY"];
            this.loadingNavBar = true;
            return this.itemService.putDocumento(documento);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["finalize"])(() => {
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            this.pnotify.success('Documento atualizado com sucesso');
            this.getDocumentos({
                ID_TECN_INFO_ITEM: this.form.get('ID_TECN_INFO_ITEM').value,
                IN_STAT: '1',
            });
        });
    }
    getDocumentos(params) {
        this.itemService.getDocumento(params).subscribe((response) => {
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
    onRemove(documento) {
        documento.IN_STAT = '0';
        this.putDocumento(documento);
    }
    appendFile(files) {
        if (files.length === 0)
            return;
        const fd = new FormData();
        fd.append('file', files[0]);
        this.formData.push(fd);
        this.documentos.push({ NM_DOCU: files[0]['name'] });
    }
    openModal(template) {
        this.modalRef = this.modalService.show(template, {
            animated: false,
            class: 'modal-lg',
            backdrop: 'static',
        });
    }
    hideModal() {
        this.modalRef.hide();
    }
};
TecnologiaInformacaoCadastrosItemCadastroComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormBuilder"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__["PNotifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__["ActivatedRoute"] },
    { type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_8__["ConfirmModalService"] },
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_13__["BsModalService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_9__["TitleService"] },
    { type: _estoque_services_estoque_service__WEBPACK_IMPORTED_MODULE_4__["TecnologiaInformacaoEstoqueService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"] },
    { type: _services_item_service__WEBPACK_IMPORTED_MODULE_11__["TecnologiaInformacaoCadastroItemService"] },
    { type: _services_funcionarios_service__WEBPACK_IMPORTED_MODULE_5__["TecnologiaInformacaoFuncionariosService"] },
    { type: _contrato_services_contrato_service__WEBPACK_IMPORTED_MODULE_6__["TecnologiaInformacaoCadastroContratoService"] },
    { type: _estoque_movimentacoes_services_movimentacoes_service__WEBPACK_IMPORTED_MODULE_3__["TecnologiaInformacaoEstoqueMovimentacoesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"] }
];
TecnologiaInformacaoCadastrosItemCadastroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_15__["Component"])({
        selector: 'tecnologia-informacao-cadastros-item-cadastro',
        template: _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormBuilder"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__["PNotifyService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_14__["ActivatedRoute"],
        src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_8__["ConfirmModalService"],
        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_13__["BsModalService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_9__["TitleService"],
        _estoque_services_estoque_service__WEBPACK_IMPORTED_MODULE_4__["TecnologiaInformacaoEstoqueService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"],
        _services_item_service__WEBPACK_IMPORTED_MODULE_11__["TecnologiaInformacaoCadastroItemService"],
        _services_funcionarios_service__WEBPACK_IMPORTED_MODULE_5__["TecnologiaInformacaoFuncionariosService"],
        _contrato_services_contrato_service__WEBPACK_IMPORTED_MODULE_6__["TecnologiaInformacaoCadastroContratoService"],
        _estoque_movimentacoes_services_movimentacoes_service__WEBPACK_IMPORTED_MODULE_3__["TecnologiaInformacaoEstoqueMovimentacoesService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"]])
], TecnologiaInformacaoCadastrosItemCadastroComponent);



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

/***/ "WOC4":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/tecnologia-informacao/contratos/item/lista/lista.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-navbar *ngIf=\"loadingNavBar\"></loader-spinner-navbar>\n<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\n<app-header appTitle=\"ITENS\">\n  <button\n  type=\"button\"\n  (click)=\"getTotalItens()\">\n  Exportar\n</button>\n  <button\n  type=\"button\"\n  (click)=\"onReset()\">\n  Limpar\n</button>\n  <button\n    type=\"button\"\n    [routerLink]=\"['../novo']\">\n    Adicionar\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"onFilter()\">\n    Filtrar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loading\">\n  <div class=\"row\" #scrollToFilter>\n    <div class=\"col\">\n      <advanced-filter>\n        <form [formGroup]=\"form\" autocomplete=\"off\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-lg-1 pl-0\">\n              <label for=\"ID_TECN_INFO_ITEM\">ID</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                placeholder=\"Digite...\"\n                id=\"ID_TECN_INFO_ITEM\"\n                formControlName=\"ID_TECN_INFO_ITEM\"\n                (keydown.enter)=\"onFilter()\">\n            </div>\n            <div class=\"form-group col-lg-4 pl-0\">\n              <label for=\"CD_ITEM\">Código/Nº Série</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                placeholder=\"Digite...\"\n                id=\"CD_ITEM\"\n                formControlName=\"CD_ITEM\"\n                (keydown.enter)=\"onFilter()\">\n            </div>\n            <div class=\"form-group col-lg-7 pl-0\">\n              <label for=\"produtos\">Produtos</label>\n              <ng-select\n                [searchable]=\"true\"\n                [clearable]=\"true\"\n                [items]=\"produtos\"\n                [virtualScroll]=\"true\"\n                dropdownPosition=\"bottom\"\n                placeholder=\"Selecione...\"\n                [loading]=\"loadingProduto\"\n                labelForId=\"ID_TEIN_ESTO_PROD\"\n                bindLabel=\"NM_PROD\"\n                bindValue=\"ID_TEIN_ESTO_PROD\"\n                id=\"ID_TEIN_ESTO_PROD\"\n                formControlName=\"ID_TEIN_ESTO_PROD\">\n              </ng-select>\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-lg-1 pl-0\">\n              <label for=\"NR_MATR\">Matricula</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                placeholder=\"Digite...\"\n                id=\"NR_MATR\"\n                formControlName=\"NR_MATR\"\n                (keydown.enter)=\"onFilter()\">\n            </div>\n            <div class=\"form-group col-lg-4 pl-0\">\n              <label for=\"NM_USUA\">Funcionario</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                placeholder=\"Digite...\"\n                id=\"NM_USUA\"\n                formControlName=\"NM_USUA\"\n                (keydown.enter)=\"onFilter()\">\n            </div>\n            <div class=\"form-group col-lg-4 pl-0\">\n              <label for=\"centroCusto\">Centro de Custo</label>\n              <ng-select\n                [searchable]=\"true\"\n                [clearable]=\"true\"\n                [items]=\"centroCusto\"\n                [virtualScroll]=\"true\"\n                dropdownPosition=\"bottom\"\n                placeholder=\"Selecione...\"\n                [loading]=\"loadingCcu\"\n                labelForId=\"CD_CCU\"\n                bindLabel=\"NM_CCU\"\n                bindValue=\"CD_CCU\"\n                id=\"CD_CCU\"\n                formControlName=\"CD_CCU\"\n              >\n              </ng-select>\n            </div>\n            <div class=\"form-group col-lg-3 pl-0\">\n              <label for=\"CD_STAT_USUA\">Status do Responsável</label>\n              <ng-select\n                [searchable]=\"true\"\n                [clearable]=\"true\"\n                [items]=\"situacoesUsuarios\"\n                [virtualScroll]=\"true\"\n                placeholder=\"Selecione...\"\n                [loading]=\"loadingSitUsuarios\"\n                labelForId=\"CD_STAT_USUA\"\n                bindLabel=\"DS_STAT_USUA\"\n                bindValue=\"CD_STAT_USUA\"\n                id=\"CD_STAT_USUA\"\n                formControlName=\"CD_STAT_USUA\">\n              </ng-select>\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-lg-3 pl-0\">\n              <label for=\"contrato\">Contrato</label>\n              <ng-select\n                [searchable]=\"true\"\n                [clearable]=\"true\"\n                [items]=\"contrato\"\n                [virtualScroll]=\"true\"\n                dropdownPosition=\"bottom\"\n                placeholder=\"Selecione...\"\n                [loading]=\"loadingContrato\"\n                labelForId=\"ID_TECN_INFO_CONT\"\n                bindLabel=\"DS_CONT\"\n                bindValue=\"ID_TECN_INFO_CONT\"\n                id=\"ID_TECN_INFO_CONT\"\n                formControlName=\"ID_TECN_INFO_CONT\"\n                >\n              </ng-select>\n            </div>\n            <div class=\"form-group col-lg-2 pl-0\">\n              <label for=\"ID_TECN_INFO_ITEM_STAT\">Situação</label>\n              <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"true\"\n              [items]=\"tipos\"\n              [virtualScroll]=\"true\"\n              labelForId=\"tipo\"\n              bindLabel=\"nome\"\n              bindValue=\"cod\"\n              id=\"tipo\"\n              (change)=\"onFilter()\"\n              formControlName=\"ID_TECN_INFO_ITEM_STAT\"\n              placeholder=\"Selecione...\"\n            >\n              <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\"> {{item.nome}}\n              </ng-template>\n            </ng-select>\n            </div>\n            <div class=\"form-group col-lg-1 pl-0\">\n              <label>Registros</label>\n              <select \n                class=\"form-control custom-select\"\n                formControlName=\"TT_REGI_PAGI\"\n                (change)=\"setPageRegistros($event.target.value)\"  \n              >\n                <option value=\"10\">10</option>\n                <option value=\"25\">25</option>\n                <option value=\"50\">50</option>\n                <option value=\"100\">100</option>\n                <option value=\"250\">250</option>\n                <option value=\"500\">500</option>\n              </select>\n            </div>\n          </div>\n        </form>\n      </advanced-filter>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <subtitles\n        [data]=\"subtitles\"\n        [show]=\"!noResult\">\n      </subtitles>\n    </div>\n  </div>\n  <div class=\"d-flex\" [hidden] = \"loading || noResult\">\n    <div class=\"p-0\" [ngClass]=\"{'col': !showDetailPanel, 'col-4': showDetailPanel}\">\n      <div class=\"w-100\">\n        <custom-table  [config]=\"tableConfig\" class=\"text-center\" *ngIf=\"!noResult\">\n          <ng-template #thead let-thead>\n            <tr>\n              <th scope=\"col\" >ID </th>\n              <th scope=\"col\">Código/Nº Série</th>\n              <th scope=\"col\"[hidden]=\"showDetailPanel\">Produto</th>\n              <th scope=\"col\"[hidden]=\"showDetailPanel\">Responsável</th>\n              <th scope=\"col\" style=\"width:120px\"[hidden]=\"showDetailPanel\"></th>\n            </tr>\n          </ng-template>\n          <ng-template #tbody let-tbody>\n            <tr *ngFor=\"let item of item; let i = index\"  [class.table-active]=\"item?.ID_TECN_INFO_ITEM == itemSelecionado?.ID_TECN_INFO_ITEM && showDetailPanel\">\n              <td (click)=\"onDetails(item)\"[ngClass]=\"classStatusBorder(item)\">\n              {{item.ID_TECN_INFO_ITEM}}\n              </td>\n              <td (click)=\"onDetails(item)\">{{ item.CD_ITEM }}</td>\n              <td (click)=\"onDetails(item)\" [hidden]=\"showDetailPanel\">{{ item.NM_PROD }}</td>\n              <td  *ngIf=\"item.NM_USUA != null && item.NM_USUA != ''\" (click)=\"onDetails(item)\" [hidden]=\"showDetailPanel\">{{ item.NM_USUA | uppercase }}</td>\n              <td  *ngIf=\"item.NM_USUA != null && item.NM_USUA == ''\" (click)=\"onDetails(item)\" [hidden]=\"showDetailPanel\">NENHUM RESPONSÁVEL</td>\n              <td  *ngIf=\"item.NM_USUA == null && item.NM_CCU != null\" (click)=\"onDetails(item)\" [hidden]=\"showDetailPanel\">{{ item.NM_CCU | uppercase }}</td>\n              <td  *ngIf=\"item.NM_USUA == null && item.NM_CCU == null\" (click)=\"onDetails(item)\" [hidden]=\"showDetailPanel\">NENHUM RESPONSÁVEL</td>\n              <td class=\"align-middle\" [hidden]=\"showDetailPanel\">\n                <span class=\"mr-3\" tooltip=\"Editar\" placement=\"left\" container=\"body\">\n                  <button type=\"button\" class=\"btn-icon-sm\" [routerLink]=\"['./../', item.ID_TECN_INFO_ITEM]\">\n                    <i class=\"fas fa-edit\"></i>\n                  </button>\n                </span>\n                <span class=\"mr-3\" tooltip=\" Gerar Termo\" placement=\"left\" container=\"body\" >\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onTermo(item)\">\n                    <i class=\"text-warning fas fa-file\" *ngIf= \"item.QT_DOCU > 0 \"placement=\"right\"></i>\n                    <i class=\"text-black fas fa-file\" *ngIf=\"item.QT_DOCU == 0\"  placement=\"right\"></i>\n                  </button>\n                </span>\n                <span class=\"mr-3\"  placement=\"left\" container=\"body\" >\n                  <button type=\"button\" class=\"btn-icon-sm\">\n                    <i class=\"text-{{item.DS_COR_STAT_USUA}} fas fa-user\" placement=\"right\" *ngIf=\"item.CD_STAT_USUA == 7 && item.NM_USUA != null\"  tooltip=\"Responsável {{item.DS_STAT_USUA}}\"></i>\n                    <i class=\"text-{{item.DS_COR_STAT_USUA}} fas fa-user\" placement=\"right\" *ngIf=\"item.CD_STAT_USUA == 1 && item.NM_USUA != null\"  tooltip=\"Responsável {{item.DS_STAT_USUA}}\"></i>\n                    <i class=\"text-{{item.DS_COR_STAT_USUA}} fas fa-user\" placement=\"right\" *ngIf=\"item.CD_STAT_USUA != 1 && item.CD_STAT_USUA != 7 && item.NM_USUA != null \" tooltip=\"Responsável {{item.DS_STAT_USUA}}\"></i>\n                    <i class=\"text-black fas fa-hotel\" placement=\"right\" *ngIf=\"item.NM_USUA == null && item.NM_CCU != null\" tooltip=\"Escritório\"></i>\n                    <i class=\"text-black fas fa-times\" placement=\"right\" *ngIf=\"item.NM_USUA == null && item.NM_CCU == null\" tooltip=\"Nenhum Responsável\"></i>\n                  </button>\n                </span>\n              </td>\n            </tr>\n          </ng-template>\n        </custom-table><br>\n      </div>\n      <div>\n        Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\n        <pagination\n          [maxSize]=\"10\"\n          [totalItems]=\"totalItems\"\n          (pageChanged)=\"onPageChanged($event)\"\n          [(itemsPerPage)]=\"itemsPerPage\"\n          [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPage\"\n          previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\"\n          lastText=\"&raquo;\">\n        </pagination>\n      </div>\n    </div>\n    <div class=\"col-8\" [hidden]=\"!showDetailPanel\">\n      <detail-panel>\n        <tabset>\n          <tab heading=\"Dados cadastrais\">\n            <div class=\"border-right border-left border-bottom px-3 pt-3\">\n              <div>\n                <div class=\"form-row\">\n                  <div class=\"form-group col-lg-6\">\n                    <label>Nome</label>\n                    <div *ngIf=\"itemSelecionado?.NM_USUA == null\">NÃO INFORMADO</div>\n                    <div *ngIf=\"itemSelecionado?.NM_USUA == ''\" >NÃO INFORMADO</div>\n                    <div *ngIf=\"itemSelecionado?.NM_USUA != null && itemSelecionado?.NM_USUA != ''\">{{itemSelecionado?.NR_MATR}} - {{ itemSelecionado?.NM_USUA | uppercase}}</div>\n                  </div>\n                  <div class=\"form-group col-lg-6\">\n                    <label>Código/Nº Série</label>\n                    <div *ngIf=\"itemSelecionado?.CD_ITEM == null\">NÃO INFORMADO</div>\n                    <div *ngIf=\"itemSelecionado?.CD_ITEM != null\">{{ itemSelecionado?.CD_ITEM}}</div>\n                  </div>\n                </div>\n                <div class=\"form-row\">\n                  <div class=\"form-group col-lg-6\">\n                    <label>Centro de Custo</label>\n                    <div *ngIf=\"itemSelecionado?.CD_CCU == null\">NÃO INFORMADO</div>\n                    <div *ngIf=\"itemSelecionado?.CD_CCU != null\"> {{itemSelecionado?.CD_CCU}} - {{ itemSelecionado?.NM_CCU | uppercase}}</div>\n                  </div>\n                  <div class=\"form-group col-lg-6\">\n                    <label>Valor</label>\n                    <div *ngIf=\"itemSelecionado?.VL_ITEM == null\">NÃO INFORMADO</div>\n                    <div *ngIf=\"itemSelecionado?.VL_ITEM != null\">{{ itemSelecionado?.VL_ITEM  | currency:'BRL' }}</div>\n                  </div>\n                </div>\n                <div class=\"form-row\">\n                  <div class=\"form-group col-lg-12\">\n                    <label>Produto</label>\n                    <div *ngIf=\"itemSelecionado?.ID_TEIN_ESTO_PROD == null\">NÃO INFORMADO</div>\n                    <div *ngIf=\"itemSelecionado?.ID_TEIN_ESTO_PROD != null\">{{ itemSelecionado?.NM_ITEM_TIPO | uppercase}}</div>\n                  </div>\n                </div>\n                <div class=\"form-row\">\n                  <div class=\"form-group col-lg-6\">\n                    <label>Contrato</label>\n                    <div *ngIf=\"itemSelecionado?.ID_TECN_INFO_CONT == null \">NÃO INFORMADO</div>\n                    <div *ngIf=\"itemSelecionado?.ID_TECN_INFO_CONT != null \">{{ itemSelecionado?.DS_CONT | uppercase}}</div>\n                  </div>\n                  <div class=\"form-group col-lg-6\">\n                    <label>OBSERVAÇÃO</label>\n                    <div *ngIf=\"itemSelecionado?.DS_OBSE == null \">NÃO INFORMADO</div>\n                    <div *ngIf=\"itemSelecionado?.DS_OBSE != null \">{{ itemSelecionado?.DS_OBSE | uppercase}}</div>\n                  </div>\n                </div><hr>\n                <div class=\"form-row\">\n                  <div class=\"form-group col-lg-6\">\n                    <label>Usuário Responsável Pelo Cadastro</label>\n                    <div>{{ itemSelecionado?.NM_USUA_CADA | uppercase}}</div>\n                  </div>\n                  <div class=\"form-group col-lg-6\">\n                    <label>Data do Cadastro</label>\n                    <div>{{ itemSelecionado?.DT_INCL | date: 'dd/MM/yyyy' }}</div>\n                  </div>\n                </div>\n              </div>\n              <!-- <div class=\"mb-3\" *ngIf=\"dadosCadastraisLoaded && dadosCadastraisEmpty\">\n                <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n              </div>\n               -->\n            </div>\n          </tab>\n          <tab heading=\"Itens Vinculados\">\n            <div class=\"border-right border-left border-bottom px-3 pt-3\" >\n              <div *ngIf=\"!loadingVinculo && !noVinculo\">\n                <table  class=\"table table-borderless text-center\" >\n                    <thead class=\"thead-light\">\n                      <tr>\n                        <th scope=\"col\" style=\"width:40px\"></th>\n                        <th scope=\"col\">ID </th>\n                        <th scope=\"col\">Código/Nº Série</th>\n                        <th scope=\"col\">Tipo de Item</th>\n                        <th scope=\"col\">Modelo</th>\n                        <th scope=\"col\" style=\"width:40px\"></th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr *ngFor=\"let item of itensVinculados; let i = index\">\n                        <td class=\"d-flex\">\n                          <i class=\"text-success fas fa-circle mr-3\" *ngIf=\"item.ID_TECN_INFO_ITEM_STAT == 1\" tooltip=\"Ativo\" ></i>\n                          <i class=\"text-danger  fas fa-circle mr-3\" *ngIf=\"item.ID_TECN_INFO_ITEM_STAT == 2\" tooltip=\"Inativo\"></i>\n                          <i class=\"text-warning fas fa-circle mr-3\" *ngIf=\"item.ID_TECN_INFO_ITEM_STAT == 3\" tooltip=\"Furtado\"></i>\n                          <i class=\"text-primary fas fa-circle mr-3\" *ngIf=\"item.ID_TECN_INFO_ITEM_STAT == 4\" tooltip=\"Assistência Técnica\"></i>\n                        </td>\n                        <td>{{ item.ID_TECN_INFO_ITEM }}</td>\n                        <td>{{ item.CD_ITEM }}</td>\n                        <td>{{ item.NM_ITEM_TIPO | uppercase }}</td>\n                        <td>{{ item.NM_MODE  | uppercase}}</td>                        <td style=\"text-align: right;\">\n                          <span class=\"mr-3\" tooltip=\"Editar\" placement=\"left\" container=\"body\">\n                            <button type=\"button\" class=\"btn-icon-sm\" [routerLink]=\"['./../', item.ID_TECN_INFO_ITEM]\">\n                              <i class=\"fas fa-edit\"></i>\n                            </button>\n                          </span>\n                        </td>\n                      </tr>\n                    </tbody>\n                </table>\n              </div>\n              <div class=\"d-flex justify-content-center mb-3\" *ngIf=\"loadingVinculo\">\n                <div class=\"spinner-border text-dark\"></div>\n              </div>\n              <div *ngIf=\"!loadingVinculo && noVinculo\" class=\"d-flex justify-content-center mb-3\">\n                <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n              </div>\n            </div>\n          </tab>\n        </tabset>\n      </detail-panel>\n    </div>\n  </div>\n  <div [hidden]=\"loading || !noResult\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 80%\">\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n  </div>\n</app-body>");

/***/ }),

/***/ "bb1x":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/tecnologia-informacao/contratos/item/item-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: TecnologiaInformacaoCadastrosItemModuleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoCadastrosItemModuleRoutingModule", function() { return TecnologiaInformacaoCadastrosItemModuleRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lista/lista.component */ "oNPu");
/* harmony import */ var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cadastro/cadastro.component */ "6zXH");



//components


const routes = [
    {
        path: '',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_3__["TecnologiaInformacaoCadastrosItemListaComponent"],
    },
    {
        path: 'novo',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__["TecnologiaInformacaoCadastrosItemCadastroComponent"],
    },
    {
        path: ':id',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__["TecnologiaInformacaoCadastrosItemCadastroComponent"],
    }
];
let TecnologiaInformacaoCadastrosItemModuleRoutingModule = class TecnologiaInformacaoCadastrosItemModuleRoutingModule {
};
TecnologiaInformacaoCadastrosItemModuleRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TecnologiaInformacaoCadastrosItemModuleRoutingModule);



/***/ }),

/***/ "bhCr":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/tecnologia-informacao/contratos/item/cadastro/cadastro.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep.modal-header {\n  height: 48px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy90ZWNub2xvZ2lhLWluZm9ybWFjYW8vY29udHJhdG9zL2l0ZW0vY2FkYXN0cm8vY2FkYXN0cm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3RlY25vbG9naWEtaW5mb3JtYWNhby9jb250cmF0b3MvaXRlbS9jYWRhc3Ryby9jYWRhc3Ryby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcC5tb2RhbC1oZWFkZXIge1xuICBoZWlnaHQ6IDQ4cHg7XG59XG4iXX0= */");

/***/ }),

/***/ "lH7e":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/tecnologia-informacao/contratos/item/lista/lista.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGVjbm9sb2dpYS1pbmZvcm1hY2FvL2NvbnRyYXRvcy9pdGVtL2xpc3RhL2xpc3RhLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "oNPu":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/tecnologia-informacao/contratos/item/lista/lista.component.ts ***!
  \***************************************************************************************/
/*! exports provided: TecnologiaInformacaoCadastrosItemListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoCadastrosItemListaComponent", function() { return TecnologiaInformacaoCadastrosItemListaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lista.component.html */ "WOC4");
/* harmony import */ var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lista.component.scss */ "lH7e");
/* harmony import */ var _estoque_produtos_services_produtos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../estoque/produtos/services/produtos.service */ "Z/u6");
/* harmony import */ var _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../../shared/templates/detail-panel/detal-panel.service */ "gIxL");
/* harmony import */ var _services_funcionarios_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/funcionarios.service */ "jMbs");
/* harmony import */ var _contrato_services_contrato_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../contrato/services/contrato.service */ "Ztrz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/item.service */ "Z7gR");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");
/* harmony import */ var src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/modules/xlsx/xlsx.service */ "eOmW");







//angular



//servicos



// rxjs



let TecnologiaInformacaoCadastrosItemListaComponent = class TecnologiaInformacaoCadastrosItemListaComponent {
    /* Pagination */
    constructor(route, pnotify, activatedRoute, itemService, formBuilder, xlsxService, routerService, produtoService, funcionarioService, dateService, detailPanelService, contratos) {
        this.route = route;
        this.pnotify = pnotify;
        this.activatedRoute = activatedRoute;
        this.itemService = itemService;
        this.formBuilder = formBuilder;
        this.xlsxService = xlsxService;
        this.routerService = routerService;
        this.produtoService = produtoService;
        this.funcionarioService = funcionarioService;
        this.dateService = dateService;
        this.detailPanelService = detailPanelService;
        this.contratos = contratos;
        this.totalItens = [];
        this.noVinculo = true;
        this.loading = true; //Loading FullPage
        this.loadingNavBar = false; //Loading do NAVBAR
        this.loadingVinculo = true;
        this.loadingSitUsuarios = true;
        this.situacoesUsuarios = [];
        this.produtos = [];
        this.contrato = [];
        this.itensVinculados = [];
        this.tableConfig = { subtitleBorder: true };
        this.funcionario = [];
        this.centroCusto = [];
        this.showDetailPanel = false;
        // Tipos de Situação dos Tipos de Items (Ativo/Inativo)
        this.tipos = [
            {
                cod: '1',
                nome: 'Ativos',
            },
            {
                cod: '2',
                nome: 'Inativos',
            },
            {
                cod: '3',
                nome: 'Furtado',
            },
            {
                cod: '4',
                nome: 'Assistência Técnica',
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
            {
                id: 3,
                text: 'Furtado',
                color: 'yellow',
            },
            {
                id: 3,
                text: 'Assistência Técnica',
                color: 'blue',
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
        this.getContrato();
        this.getCentroCusto();
        this.getUsuariosSituacoes();
        this.onDetailPanelEmitter();
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
            this.getItem(this.getParams());
        });
    }
    onDetailPanelEmitter() {
        this.showDetailPanelSubscription = this.detailPanelService.config.subscribe((event) => {
            this.showDetailPanel = event.showing;
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
    getContrato(params) {
        const _params = params !== null && params !== void 0 ? params : {};
        _params.IN_STAT = '1';
        this.loadingContrato = true;
        this.contratos
            .getContrato(_params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(() => {
            this.loadingContrato = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.contrato = response.body['data'];
            }
        });
    }
    getCentroCusto(params) {
        this.loadingCcu = true;
        this.funcionarioService
            .getCentroCusto()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(() => {
            this.loadingCcu = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.centroCusto = response.body['data'];
            }
        });
    }
    getFuncionario(params) {
        params = params !== null && params !== void 0 ? params : {};
        params['IN_PAGI'] = '0';
        this.loadingFuncionario = true;
        this.funcionarioService
            .getFuncionario(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(() => {
            this.loadingFuncionario = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.funcionario = response.body['data'];
            }
        });
    }
    getUsuariosSituacoes() {
        this.itemService
            .getUsuariosSituacoes()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(() => (this.loadingSitUsuarios = false)))
            .subscribe((response) => {
            this.situacoesUsuarios = response['data'];
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
            ID_TECN_INFO_ITEM: [null],
            CD_ITEM: [null],
            VL_ITEM: [null],
            NM_PROD: [null],
            ID_TECN_INFO_CONT: [null],
            ID_TEIN_ESTO_PROD: [null],
            ID_TECN_INFO_ITEM_STAT: [null],
            NR_MATR: [null],
            NM_USUA: [null],
            CD_STAT_USUA: [null],
            QT_DOCU: [null],
            NR_MATR_CADA: [null],
            CD_CCU: [null],
            PAGI: [null],
            CD_SITU: [null],
            TT_REGI_PAGI: ['100'],
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
                routerLink: `/tecnologia-informacao/home`,
            },
            {
                descricao: 'Contratos',
                routerLink: `/tecnologia-informacao/contratos/${id}`,
            },
            {
                descricao: 'Itens',
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
    onDetails(item) {
        this.getItensVinculados({ ID_TECN_INFO_ITEM_REFE: item.ID_TECN_INFO_ITEM });
        this.loadingNavBar = true;
        this.detailPanelService.show();
        this.itemSelecionado = item;
        this.detailPanelService.loadedFinished(false);
        setTimeout(() => {
            this.loadingNavBar = false;
        }, 500);
    }
    getItem(params) {
        const _params = Object.assign(Object.assign({}, params), { TT_REGI_PAGI: this.itemsPerPage });
        if (!this.loading)
            this.loadingNavBar = true;
        this.itemService
            .getItem(_params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(() => {
            this.loading = false;
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.item = response.body['data'];
                this.totalItems = response.body['total'];
                this.noResult = false;
            }
            else {
                this.noResult = true;
                this.item = [];
            }
        }, (error) => {
            this.pnotify.error();
            this.noResult = true;
        });
    }
    getTotalItens(params) {
        this.loadingNavBar = true;
        params = this.getParams();
        const _params = Object.assign(Object.assign({}, params), { IN_PAGI: '0' });
        this.itemService
            .getItem(_params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(() => {
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.totalItens = response.body['data'];
                this.onExport();
            }
            else {
                this.totalItens = [];
            }
        }, (error) => {
            this.pnotify.error();
        });
    }
    getItensVinculados(params) {
        this.loadingVinculo = true;
        this.noVinculo = true;
        this.itemService
            .getItem(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(() => {
            this.loading = false;
            this.loadingVinculo = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.itensVinculados = response.body['data'];
                this.noVinculo = false;
            }
            else {
                this.noVinculo = true;
                this.itensVinculados = [];
            }
        }, (error) => {
            this.pnotify.error();
        });
    }
    onTermo(item) {
        const id = this.activatedRoute.snapshot.params.idSubModulo;
        this.route.navigate([`/tecnologia-informacao/contratos/${id}/termo-responsabilidade`, item.ID_TECN_INFO_ITEM], {
            relativeTo: this.activatedRoute,
        });
    }
    openRegister(item) {
        this.route.navigate(['../cadastro'], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams(item),
        });
    }
    onPageChanged(event) {
        this.detailPanelService.hide();
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
    classStatusBorder(item) {
        let borderClass;
        if (item.ID_TECN_INFO_ITEM_STAT == 1) {
            borderClass = 'border-success';
        }
        else if (item.ID_TECN_INFO_ITEM_STAT == 2) {
            borderClass = 'border-danger';
        }
        else if (item.ID_TECN_INFO_ITEM_STAT == 3) {
            borderClass = 'border-warning';
        }
        else if (item.ID_TECN_INFO_ITEM_STAT == 4) {
            borderClass = 'border-primary';
        }
        return borderClass;
    }
    onExport() {
        let data = new Date().toLocaleDateString().split('/'), dataExport = `${data[0]}${data[1]}${data[2]}`;
        let listagemExport = [];
        listagemExport = this.totalItens;
        this.xlsxService.exportFile(listagemExport, `Controle_Itens_${dataExport}`);
    }
};
TecnologiaInformacaoCadastrosItemListaComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: _services_item_service__WEBPACK_IMPORTED_MODULE_11__["TecnologiaInformacaoCadastroItemService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"] },
    { type: src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_15__["XlsxService"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_12__["RouterService"] },
    { type: _estoque_produtos_services_produtos_service__WEBPACK_IMPORTED_MODULE_3__["TecnologiaInformacaoEstoqueProdutosService"] },
    { type: _services_funcionarios_service__WEBPACK_IMPORTED_MODULE_5__["TecnologiaInformacaoFuncionariosService"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_14__["DateService"] },
    { type: _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_4__["DetailPanelService"] },
    { type: _contrato_services_contrato_service__WEBPACK_IMPORTED_MODULE_6__["TecnologiaInformacaoCadastroContratoService"] }
];
TecnologiaInformacaoCadastrosItemListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: 'tecnologia-informacao-cadastros-item-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
        _services_item_service__WEBPACK_IMPORTED_MODULE_11__["TecnologiaInformacaoCadastroItemService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"],
        src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_15__["XlsxService"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_12__["RouterService"],
        _estoque_produtos_services_produtos_service__WEBPACK_IMPORTED_MODULE_3__["TecnologiaInformacaoEstoqueProdutosService"],
        _services_funcionarios_service__WEBPACK_IMPORTED_MODULE_5__["TecnologiaInformacaoFuncionariosService"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_14__["DateService"],
        _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_4__["DetailPanelService"],
        _contrato_services_contrato_service__WEBPACK_IMPORTED_MODULE_6__["TecnologiaInformacaoCadastroContratoService"]])
], TecnologiaInformacaoCadastrosItemListaComponent);



/***/ }),

/***/ "vqwq":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/tecnologia-informacao/estoque/services/estoque.service.ts ***!
  \***********************************************************************************/
/*! exports provided: TecnologiaInformacaoEstoqueService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoEstoqueService", function() { return TecnologiaInformacaoEstoqueService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");

//angular

// services


let TecnologiaInformacaoEstoqueService = class TecnologiaInformacaoEstoqueService {
    constructor(http) {
        this.http = http;
        this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API;
    }
    getEmpresas(params) {
        return this.http.get(`${this.API}/common/v2/empresas`, {
            params: params,
            observe: 'response',
        });
    }
    getEstoque(params) {
        return this.http.get(`${this.API}/tecnologia-informacao/estoque`, {
            params: params,
            observe: 'response',
        });
    }
    getEstoqueItens(params) {
        return this.http.get(`${this.API}/tecnologia-informacao/estoque/itens`, {
            params: params,
            observe: 'response',
        });
    }
};
TecnologiaInformacaoEstoqueService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
TecnologiaInformacaoEstoqueService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], TecnologiaInformacaoEstoqueService);



/***/ })

}]);
//# sourceMappingURL=item-item-module-es2015.js.map