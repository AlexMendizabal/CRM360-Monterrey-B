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
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\r\n<app-header appTitle=\"Cadastro de Itens\">\r\n  <button \r\n    [disabled]=\"form.valid === false || loadingNavBar === true\"\r\n    (click)=\"postMovimentacoes()\"\r\n    >\r\n    Salvar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <form [formGroup]=\"form\" autocomplete=\"off\" [hidden] = \"loading\">\r\n    <fieldset  class=\"col-12\">\r\n      <fieldset class=\"border rounded shadow-sm col-6 pt-2 mx-auto\">\r\n        <legend>Dados do Item</legend>\r\n        <div class=\"form-row justify-content-center\">\r\n          <div class=\"form-group col pl-0\">\r\n            <label for=\"contrato\">Contrato</label>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"true\"\r\n              [items]=\"contrato\"\r\n              [virtualScroll]=\"true\"\r\n              dropdownPosition=\"bottom\"\r\n              placeholder=\"Selecione...\"\r\n              [loading]=\"loadingContrato\"\r\n              labelForId=\"ID_TECN_INFO_CONT\"\r\n              bindLabel=\"DS_CONT\"\r\n              bindValue=\"ID_TECN_INFO_CONT\"\r\n              id=\"ID_TECN_INFO_CONT\"\r\n              formControlName=\"ID_TECN_INFO_CONT\"\r\n              >\r\n            </ng-select>\r\n            <invalid-form-control [show]=\"onFieldInvalid('ID_TECN_INFO_CONT')\" message=\"Contrato é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row justify-content-center\">\r\n          <div class=\"form-group col pl-0\">\r\n            <label for=\"produtos\">Produtos</label>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"true\"\r\n              [items]=\"produtos\"\r\n              [virtualScroll]=\"true\"\r\n              dropdownPosition=\"bottom\"\r\n              placeholder=\"Selecione...\"\r\n              [loading]=\"loadingProduto\"\r\n              labelForId=\"ID_TEIN_ESTO_PROD\"\r\n              bindLabel=\"NM_PROD\"\r\n              bindValue=\"ID_TEIN_ESTO_PROD\"\r\n              id=\"ID_TEIN_ESTO_PROD\"\r\n              formControlName=\"ID_TEIN_ESTO_PROD\"\r\n              (change)=\"setNumeroSerie($event)\"\r\n              >\r\n            </ng-select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row justify-content-center\">\r\n          <div class=\"form-group col pl-0\">\r\n            <div class=\"mb-0 d-flex justify-content-between w-100\" style=\"height: 22px\">\r\n              <label class=\"my-auto\" for=\"NM_USUA\">Funcionário</label>\r\n              <div class=\"my-auto text-uppercase\" style=\"font-size: 10px\" >\r\n                <a\r\n                  class=\"text-primary\"\r\n                  href=\"javascript:void(0)\"\r\n                  (click)=\"openModal(pesquisaDeFuncionarios)\">\r\n                  <strong>Selecionar</strong>\r\n                </a>\r\n              </div>\r\n            </div>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"NM_USUA\"\r\n              formControlName=\"NM_USUA\"\r\n              placeholder=\"Selecionar...\"\r\n            />\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row justify-content-center\">\r\n          <div class=\"form-group col pl-0\">\r\n            <label for=\"centroCusto\">Centro de Custo</label>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"true\"\r\n              [items]=\"centroCusto\"\r\n              [virtualScroll]=\"true\"\r\n              dropdownPosition=\"bottom\"\r\n              placeholder=\"Selecione...\"\r\n              [loading]=\"loadingCcu\"\r\n              labelForId=\"CD_CCU\"\r\n              bindLabel=\"NM_CCU\"\r\n              bindValue=\"CD_CCU\"\r\n              id=\"CD_CCU\"\r\n              formControlName=\"CD_CCU\"\r\n            >\r\n            </ng-select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row justify-content-center\">\r\n          <div class=\"form-group col pl-0\">\r\n            <div class=\"mb-0 d-flex justify-content-between w-100\" style=\"height: 22px\">\r\n              <label class=\"my-auto\" for=\"ID_TECN_INFO_ITEM_REFE\">Item</label>\r\n              <div class=\"my-auto text-uppercase\" style=\"font-size: 10px\" >\r\n                <a\r\n                  class=\"text-primary\"\r\n                  href=\"javascript:void(0)\"\r\n                  (click)=\"openModal(pesquisaDeItens)\">\r\n                  <strong>Selecionar</strong>\r\n                </a>\r\n              </div>\r\n            </div>\r\n            <select\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"ID_TECN_INFO_ITEM_REFE\"\r\n                formControlName=\"ID_TECN_INFO_ITEM_REFE\"\r\n                placeholder=\"Selecionar...\"\r\n              >\r\n              <option [value]=\"item.ID_TECN_INFO_ITEM\" *ngFor=\"let item of itens\">{{ item.CD_ITEM }}</option>\r\n          </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row justify-content-center\">\r\n          <div class=\"form-group col-md-6 pl-0\">\r\n            <label for=\"CD_ITEM\">Código/Nº Série</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"CD_ITEM\"\r\n              formControlName=\"CD_ITEM\"\r\n              placeholder=\"Digite...\"\r\n              [ngClass]=\"onFieldError('CD_ITEM') + ' ' + onFieldRequired('CD_ITEM')\"\r\n            />\r\n            <invalid-form-control [show]=\"onFieldInvalid('CD_ITEM')\" message=\"Código/Nº Série é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n          <div class=\"form-group col-md-6 pl-0\">\r\n            <label for=\"ID_TECN_INFO_ITEM_STAT\">Situação</label>\r\n            <select\r\n              class=\"form-control custom-select\"\r\n              id=\"ID_TECN_INFO_ITEM_STAT\"\r\n              formControlName=\"ID_TECN_INFO_ITEM_STAT\"\r\n              [ngClass]=\"onFieldRequired('ID_TECN_INFO_ITEM_STAT')\">\r\n              <option value=\"1\">Ativo</option>\r\n              <option value=\"2\">Inativo</option>\r\n              <option value=\"3\">Furtado</option>\r\n              <option value=\"4\">Assistência Técnica</option>\r\n            </select>\r\n            <invalid-form-control [show]=\"onFieldInvalid('ID_TECN_INFO_ITEM_STAT')\" message=\"Situação é obrigatório.\"></invalid-form-control>\r\n          </div>  \r\n        </div>\r\n        <div class=\"form-row justify-content-center\">\r\n          <div class=\"form-group col-md-6 pl-0\">\r\n            <label for=\"VL_ITEM\">Valor</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"VL_ITEM\"\r\n              formControlName=\"VL_ITEM\"\r\n              placeholder=\"Digite...\"\r\n              currencyMask [options]=\"{ align: 'left', prefix: 'R$ ', thousands: '.', decimal: ',' }\"\r\n              [ngClass]=\"onFieldError('VL_ITEM') + ' ' + onFieldRequired('VL_ITEM')\"\r\n            />\r\n            <invalid-form-control [show]=\"onFieldInvalid('VL_ITEM')\" message=\"Valor do Item é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n          \r\n          <div class=\"form-group col-md-6 pl-0\"></div>\r\n        </div>\r\n      </fieldset>\r\n      <br>\r\n      <br>\r\n      <fieldset class=\"border rounded shadow-sm col-6 pt-2 mx-auto\">\r\n            <legend>Observação</legend>\r\n            <div class=\"form-row justify-content-center\">\r\n              <div class=\"form-group col\">\r\n                <label for=\"DS_OBSE\" >Observação:</label>\r\n                <textarea class=\"form-control\" id=\"DS_OBSE\" formControlName=\"DS_OBSE\" rows=\"3\"></textarea>\r\n              </div>\r\n            </div>\r\n            <br>\r\n      </fieldset>\r\n      <br>\r\n      <br>\r\n      <fieldset class=\"border rounded shadow-sm col-6 pt-2 pb-2 mx-auto\">\r\n        <legend>Anexos</legend>\r\n        <div class=\"form-group border rounded p-1\">\r\n          <div>\r\n            <label for=\"documento\" class=\"w-100 d-flex justify-content-between align-items-center m-0 py-1\" style=\"cursor: pointer;\">\r\n              <span>Novo Documento</span>\r\n            </label>\r\n            <input\r\n              id=\"documento\"\r\n              type=\"file\"\r\n              (change)=\"appendFile($event.target.files)\"\r\n              class=\"d-none\"\r\n              >\r\n          </div>\r\n        </div>\r\n        <ul>\r\n          <li class=\"d-flex justify-content-between\" *ngFor=\"let item of documentos\">\r\n            <div>{{ item.NM_DOCU | uppercase }}</div>\r\n            <div [hidden]=\"!item.ID_TECN_INFO_ITEM_DOCU\">\r\n              <a\r\n                [href]=\"item.LINK\"\r\n                target=\"_blank\"\r\n                class=\"btn-icon-sm mx-2 text-black\"\r\n                tooltip=\"visualizar\"\r\n              >\r\n                <i class=\"far fa-eye\"></i>\r\n              </a>\r\n              <button\r\n                class=\"btn-icon-sm mx-2 hover\"\r\n                tooltip=\"excluir\"\r\n                (click)=\"onRemove(item)\"\r\n                >\r\n                <i class=\"fas fa-trash\"></i>\r\n              </button>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n      </fieldset>\r\n    </fieldset>\r\n  </form>\r\n  <ng-template #pesquisaDeItens>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title pull-left\">Pesquisa de Itens</h4>\r\n      <div class=\"d-flex justify-content-center align-items-center\">\r\n        <div class=\"spinner-border text-primary mr-2\" role=\"status\" *ngIf=\"loadingItens\">\r\n          <span class=\"sr-only\">Loading...</span>\r\n        </div>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModal()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <advanced-filter>\r\n        <form [formGroup]=\"formPesquisaItem\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col\">\r\n              <label for=\"cdItem\">BUSCAR POR</label>\r\n              <select\r\n                class=\"form-control custom-select\"\r\n                formControlName=\"buscarPor\"\r\n              >\r\n                <option value=\"ID_TECN_INFO_ITEM\" selected>ID</option>\r\n                <option value=\"CD_ITEM\">Código/Nº Série</option>\r\n                <option value=\"NM_PROD\">Produto</option>\r\n                <option value=\"ID_TECN_INFO_CONT\">Contrato</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"form-group col\">\r\n              <label>TERMO DE PESQUISA</label>\r\n              <div class=\"input-group\">\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  formControlName=\"pesquisa\"\r\n                  (keyup.enter)=\"getItens()\"\r\n                >\r\n                <div class=\"input-group-append\">\r\n                  <span\r\n                    class=\"input-group-text hover\"\r\n                    (click)=\"getItens()\"\r\n                  >\r\n                    <i class=\"fas fa-search\"></i>\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </advanced-filter>\r\n      <custom-table *ngIf=\"!loadingItens && (itens.length > 0)\">\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n            <th>ID</th>\r\n            <th>Código/Nº Série</th>\r\n            <th>Produto</th>\r\n            <th>Contrato</th>\r\n            <th></th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let item of itens\">\r\n            <td>{{ item.ID_TECN_INFO_ITEM }}</td>\r\n            <td>{{ item.CD_ITEM }}</td>\r\n            <td>{{ item.NM_PROD }}</td>\r\n            <td>{{ item.DS_CONT }}</td>\r\n            <td>\r\n              <button\r\n                class=\"btn-icon-sm\"\r\n                tooltip=\"Salvar Item\"\r\n                container=\"body\"\r\n                (click)=\"setItem(item);modalRef.hide()\"\r\n              >\r\n                <i class=\"far fa-save\"></i>\r\n              </button>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n    </div>\r\n  </ng-template>\r\n  <ng-template #pesquisaDeFuncionarios>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title pull-left\">Pesquisa de Funcionarios</h4>\r\n      <div class=\"d-flex justify-content-center align-items-center\">\r\n        <div class=\"spinner-border text-primary mr-2\" role=\"status\" *ngIf=\"loadingFuncionario\">\r\n          <span class=\"sr-only\">Loading...</span>\r\n        </div>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModal()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <advanced-filter>\r\n        <form [formGroup]=\"formPesquisaFuncionario\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col\">\r\n              <label for=\"cdItem\">BUSCAR POR</label>\r\n              <select\r\n                class=\"form-control custom-select\"\r\n                formControlName=\"buscarPor\"\r\n              >\r\n                <option value=\"NR_MATR\">Matricula</option>\r\n                <option value=\"NM_FUNC\" selected>Nome do Funcionario</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"form-group col\">\r\n              <label>TERMO DE PESQUISA</label>\r\n              <div class=\"input-group\">\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  formControlName=\"pesquisa\"\r\n                  (keyup.enter)=\"getFuncionarios()\"\r\n                >\r\n                <div class=\"input-group-append\">\r\n                  <span\r\n                    class=\"input-group-text hover\"\r\n                    (click)=\"getFuncionarios()\"\r\n                  >\r\n                    <i class=\"fas fa-search\"></i>\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </advanced-filter>\r\n      <custom-table *ngIf=\"!loadingFuncionario && (funcionarios.length > 0)\">\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n            <th>Matricula</th>\r\n            <th>Nome</th>\r\n            <th></th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let funcionario of funcionarios\">\r\n            <td>{{ funcionario.NR_MATR }}</td>\r\n            <td>{{ funcionario.NM_FUNC }}</td>\r\n            <td>\r\n              <button\r\n                class=\"btn-icon-sm\"\r\n                tooltip=\"Salvar Funcionario\"\r\n                container=\"body\"\r\n                (click)=\"setFuncionario(funcionario);modalRef.hide()\"\r\n              >\r\n                <i class=\"far fa-save\"></i>\r\n              </button>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n    </div>\r\n  </ng-template>\r\n</app-body>");

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
                'Las informaciones serán inactivadas.'
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
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-navbar *ngIf=\"loadingNavBar\"></loader-spinner-navbar>\r\n<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n<app-header appTitle=\"ITENS\">\r\n  <button\r\n  type=\"button\"\r\n  (click)=\"getTotalItens()\">\r\n  Exportar\r\n</button>\r\n  <button\r\n  type=\"button\"\r\n  (click)=\"onReset()\">\r\n  Limpar\r\n</button>\r\n  <button\r\n    type=\"button\"\r\n    [routerLink]=\"['../novo']\">\r\n    Adicionar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onFilter()\">\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loading\">\r\n  <div class=\"row\" #scrollToFilter>\r\n    <div class=\"col\">\r\n      <advanced-filter>\r\n        <form [formGroup]=\"form\" autocomplete=\"off\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-1 pl-0\">\r\n              <label for=\"ID_TECN_INFO_ITEM\">ID</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                placeholder=\"Digite...\"\r\n                id=\"ID_TECN_INFO_ITEM\"\r\n                formControlName=\"ID_TECN_INFO_ITEM\"\r\n                (keydown.enter)=\"onFilter()\">\r\n            </div>\r\n            <div class=\"form-group col-lg-4 pl-0\">\r\n              <label for=\"CD_ITEM\">Código/Nº Série</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                placeholder=\"Digite...\"\r\n                id=\"CD_ITEM\"\r\n                formControlName=\"CD_ITEM\"\r\n                (keydown.enter)=\"onFilter()\">\r\n            </div>\r\n            <div class=\"form-group col-lg-7 pl-0\">\r\n              <label for=\"produtos\">Produtos</label>\r\n              <ng-select\r\n                [searchable]=\"true\"\r\n                [clearable]=\"true\"\r\n                [items]=\"produtos\"\r\n                [virtualScroll]=\"true\"\r\n                dropdownPosition=\"bottom\"\r\n                placeholder=\"Selecione...\"\r\n                [loading]=\"loadingProduto\"\r\n                labelForId=\"ID_TEIN_ESTO_PROD\"\r\n                bindLabel=\"NM_PROD\"\r\n                bindValue=\"ID_TEIN_ESTO_PROD\"\r\n                id=\"ID_TEIN_ESTO_PROD\"\r\n                formControlName=\"ID_TEIN_ESTO_PROD\">\r\n              </ng-select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-1 pl-0\">\r\n              <label for=\"NR_MATR\">Matricula</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                placeholder=\"Digite...\"\r\n                id=\"NR_MATR\"\r\n                formControlName=\"NR_MATR\"\r\n                (keydown.enter)=\"onFilter()\">\r\n            </div>\r\n            <div class=\"form-group col-lg-4 pl-0\">\r\n              <label for=\"NM_USUA\">Funcionario</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                placeholder=\"Digite...\"\r\n                id=\"NM_USUA\"\r\n                formControlName=\"NM_USUA\"\r\n                (keydown.enter)=\"onFilter()\">\r\n            </div>\r\n            <div class=\"form-group col-lg-4 pl-0\">\r\n              <label for=\"centroCusto\">Centro de Custo</label>\r\n              <ng-select\r\n                [searchable]=\"true\"\r\n                [clearable]=\"true\"\r\n                [items]=\"centroCusto\"\r\n                [virtualScroll]=\"true\"\r\n                dropdownPosition=\"bottom\"\r\n                placeholder=\"Selecione...\"\r\n                [loading]=\"loadingCcu\"\r\n                labelForId=\"CD_CCU\"\r\n                bindLabel=\"NM_CCU\"\r\n                bindValue=\"CD_CCU\"\r\n                id=\"CD_CCU\"\r\n                formControlName=\"CD_CCU\"\r\n              >\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"form-group col-lg-3 pl-0\">\r\n              <label for=\"CD_STAT_USUA\">Status do Responsável</label>\r\n              <ng-select\r\n                [searchable]=\"true\"\r\n                [clearable]=\"true\"\r\n                [items]=\"situacoesUsuarios\"\r\n                [virtualScroll]=\"true\"\r\n                placeholder=\"Selecione...\"\r\n                [loading]=\"loadingSitUsuarios\"\r\n                labelForId=\"CD_STAT_USUA\"\r\n                bindLabel=\"DS_STAT_USUA\"\r\n                bindValue=\"CD_STAT_USUA\"\r\n                id=\"CD_STAT_USUA\"\r\n                formControlName=\"CD_STAT_USUA\">\r\n              </ng-select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-3 pl-0\">\r\n              <label for=\"contrato\">Contrato</label>\r\n              <ng-select\r\n                [searchable]=\"true\"\r\n                [clearable]=\"true\"\r\n                [items]=\"contrato\"\r\n                [virtualScroll]=\"true\"\r\n                dropdownPosition=\"bottom\"\r\n                placeholder=\"Selecione...\"\r\n                [loading]=\"loadingContrato\"\r\n                labelForId=\"ID_TECN_INFO_CONT\"\r\n                bindLabel=\"DS_CONT\"\r\n                bindValue=\"ID_TECN_INFO_CONT\"\r\n                id=\"ID_TECN_INFO_CONT\"\r\n                formControlName=\"ID_TECN_INFO_CONT\"\r\n                >\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"form-group col-lg-2 pl-0\">\r\n              <label for=\"ID_TECN_INFO_ITEM_STAT\">Situação</label>\r\n              <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"true\"\r\n              [items]=\"tipos\"\r\n              [virtualScroll]=\"true\"\r\n              labelForId=\"tipo\"\r\n              bindLabel=\"nome\"\r\n              bindValue=\"cod\"\r\n              id=\"tipo\"\r\n              (change)=\"onFilter()\"\r\n              formControlName=\"ID_TECN_INFO_ITEM_STAT\"\r\n              placeholder=\"Selecione...\"\r\n            >\r\n              <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\"> {{item.nome}}\r\n              </ng-template>\r\n            </ng-select>\r\n            </div>\r\n            <div class=\"form-group col-lg-1 pl-0\">\r\n              <label>Registros</label>\r\n              <select \r\n                class=\"form-control custom-select\"\r\n                formControlName=\"TT_REGI_PAGI\"\r\n                (change)=\"setPageRegistros($event.target.value)\"  \r\n              >\r\n                <option value=\"10\">10</option>\r\n                <option value=\"25\">25</option>\r\n                <option value=\"50\">50</option>\r\n                <option value=\"100\">100</option>\r\n                <option value=\"250\">250</option>\r\n                <option value=\"500\">500</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </advanced-filter>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <subtitles\r\n        [data]=\"subtitles\"\r\n        [show]=\"!noResult\">\r\n      </subtitles>\r\n    </div>\r\n  </div>\r\n  <div class=\"d-flex\" [hidden] = \"loading || noResult\">\r\n    <div class=\"p-0\" [ngClass]=\"{'col': !showDetailPanel, 'col-4': showDetailPanel}\">\r\n      <div class=\"w-100\">\r\n        <custom-table  [config]=\"tableConfig\" class=\"text-center\" *ngIf=\"!noResult\">\r\n          <ng-template #thead let-thead>\r\n            <tr>\r\n              <th scope=\"col\" >ID </th>\r\n              <th scope=\"col\">Código/Nº Série</th>\r\n              <th scope=\"col\"[hidden]=\"showDetailPanel\">Produto</th>\r\n              <th scope=\"col\"[hidden]=\"showDetailPanel\">Responsável</th>\r\n              <th scope=\"col\" style=\"width:120px\"[hidden]=\"showDetailPanel\"></th>\r\n            </tr>\r\n          </ng-template>\r\n          <ng-template #tbody let-tbody>\r\n            <tr *ngFor=\"let item of item; let i = index\"  [class.table-active]=\"item?.ID_TECN_INFO_ITEM == itemSelecionado?.ID_TECN_INFO_ITEM && showDetailPanel\">\r\n              <td (click)=\"onDetails(item)\"[ngClass]=\"classStatusBorder(item)\">\r\n              {{item.ID_TECN_INFO_ITEM}}\r\n              </td>\r\n              <td (click)=\"onDetails(item)\">{{ item.CD_ITEM }}</td>\r\n              <td (click)=\"onDetails(item)\" [hidden]=\"showDetailPanel\">{{ item.NM_PROD }}</td>\r\n              <td  *ngIf=\"item.NM_USUA != null && item.NM_USUA != ''\" (click)=\"onDetails(item)\" [hidden]=\"showDetailPanel\">{{ item.NM_USUA | uppercase }}</td>\r\n              <td  *ngIf=\"item.NM_USUA != null && item.NM_USUA == ''\" (click)=\"onDetails(item)\" [hidden]=\"showDetailPanel\">NENHUM RESPONSÁVEL</td>\r\n              <td  *ngIf=\"item.NM_USUA == null && item.NM_CCU != null\" (click)=\"onDetails(item)\" [hidden]=\"showDetailPanel\">{{ item.NM_CCU | uppercase }}</td>\r\n              <td  *ngIf=\"item.NM_USUA == null && item.NM_CCU == null\" (click)=\"onDetails(item)\" [hidden]=\"showDetailPanel\">NENHUM RESPONSÁVEL</td>\r\n              <td class=\"align-middle\" [hidden]=\"showDetailPanel\">\r\n                <span class=\"mr-3\" tooltip=\"Editar\" placement=\"left\" container=\"body\">\r\n                  <button type=\"button\" class=\"btn-icon-sm\" [routerLink]=\"['./../', item.ID_TECN_INFO_ITEM]\">\r\n                    <i class=\"fas fa-edit\"></i>\r\n                  </button>\r\n                </span>\r\n                <span class=\"mr-3\" tooltip=\" Gerar Termo\" placement=\"left\" container=\"body\" >\r\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onTermo(item)\">\r\n                    <i class=\"text-warning fas fa-file\" *ngIf= \"item.QT_DOCU > 0 \"placement=\"right\"></i>\r\n                    <i class=\"text-black fas fa-file\" *ngIf=\"item.QT_DOCU == 0\"  placement=\"right\"></i>\r\n                  </button>\r\n                </span>\r\n                <span class=\"mr-3\"  placement=\"left\" container=\"body\" >\r\n                  <button type=\"button\" class=\"btn-icon-sm\">\r\n                    <i class=\"text-{{item.DS_COR_STAT_USUA}} fas fa-user\" placement=\"right\" *ngIf=\"item.CD_STAT_USUA == 7 && item.NM_USUA != null\"  tooltip=\"Responsável {{item.DS_STAT_USUA}}\"></i>\r\n                    <i class=\"text-{{item.DS_COR_STAT_USUA}} fas fa-user\" placement=\"right\" *ngIf=\"item.CD_STAT_USUA == 1 && item.NM_USUA != null\"  tooltip=\"Responsável {{item.DS_STAT_USUA}}\"></i>\r\n                    <i class=\"text-{{item.DS_COR_STAT_USUA}} fas fa-user\" placement=\"right\" *ngIf=\"item.CD_STAT_USUA != 1 && item.CD_STAT_USUA != 7 && item.NM_USUA != null \" tooltip=\"Responsável {{item.DS_STAT_USUA}}\"></i>\r\n                    <i class=\"text-black fas fa-hotel\" placement=\"right\" *ngIf=\"item.NM_USUA == null && item.NM_CCU != null\" tooltip=\"Escritório\"></i>\r\n                    <i class=\"text-black fas fa-times\" placement=\"right\" *ngIf=\"item.NM_USUA == null && item.NM_CCU == null\" tooltip=\"Nenhum Responsável\"></i>\r\n                  </button>\r\n                </span>\r\n              </td>\r\n            </tr>\r\n          </ng-template>\r\n        </custom-table><br>\r\n      </div>\r\n      <div>\r\n        Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\r\n        <pagination\r\n          [maxSize]=\"10\"\r\n          [totalItems]=\"totalItems\"\r\n          (pageChanged)=\"onPageChanged($event)\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPage\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\">\r\n        </pagination>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-8\" [hidden]=\"!showDetailPanel\">\r\n      <detail-panel>\r\n        <tabset>\r\n          <tab heading=\"Dados cadastrais\">\r\n            <div class=\"border-right border-left border-bottom px-3 pt-3\">\r\n              <div>\r\n                <div class=\"form-row\">\r\n                  <div class=\"form-group col-lg-6\">\r\n                    <label>Nome</label>\r\n                    <div *ngIf=\"itemSelecionado?.NM_USUA == null\">NÃO INFORMADO</div>\r\n                    <div *ngIf=\"itemSelecionado?.NM_USUA == ''\" >NÃO INFORMADO</div>\r\n                    <div *ngIf=\"itemSelecionado?.NM_USUA != null && itemSelecionado?.NM_USUA != ''\">{{itemSelecionado?.NR_MATR}} - {{ itemSelecionado?.NM_USUA | uppercase}}</div>\r\n                  </div>\r\n                  <div class=\"form-group col-lg-6\">\r\n                    <label>Código/Nº Série</label>\r\n                    <div *ngIf=\"itemSelecionado?.CD_ITEM == null\">NÃO INFORMADO</div>\r\n                    <div *ngIf=\"itemSelecionado?.CD_ITEM != null\">{{ itemSelecionado?.CD_ITEM}}</div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-row\">\r\n                  <div class=\"form-group col-lg-6\">\r\n                    <label>Centro de Custo</label>\r\n                    <div *ngIf=\"itemSelecionado?.CD_CCU == null\">NÃO INFORMADO</div>\r\n                    <div *ngIf=\"itemSelecionado?.CD_CCU != null\"> {{itemSelecionado?.CD_CCU}} - {{ itemSelecionado?.NM_CCU | uppercase}}</div>\r\n                  </div>\r\n                  <div class=\"form-group col-lg-6\">\r\n                    <label>Valor</label>\r\n                    <div *ngIf=\"itemSelecionado?.VL_ITEM == null\">NÃO INFORMADO</div>\r\n                    <div *ngIf=\"itemSelecionado?.VL_ITEM != null\">{{ itemSelecionado?.VL_ITEM  | currency:'BRL' }}</div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-row\">\r\n                  <div class=\"form-group col-lg-12\">\r\n                    <label>Produto</label>\r\n                    <div *ngIf=\"itemSelecionado?.ID_TEIN_ESTO_PROD == null\">NÃO INFORMADO</div>\r\n                    <div *ngIf=\"itemSelecionado?.ID_TEIN_ESTO_PROD != null\">{{ itemSelecionado?.NM_ITEM_TIPO | uppercase}}</div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-row\">\r\n                  <div class=\"form-group col-lg-6\">\r\n                    <label>Contrato</label>\r\n                    <div *ngIf=\"itemSelecionado?.ID_TECN_INFO_CONT == null \">NÃO INFORMADO</div>\r\n                    <div *ngIf=\"itemSelecionado?.ID_TECN_INFO_CONT != null \">{{ itemSelecionado?.DS_CONT | uppercase}}</div>\r\n                  </div>\r\n                  <div class=\"form-group col-lg-6\">\r\n                    <label>OBSERVAÇÃO</label>\r\n                    <div *ngIf=\"itemSelecionado?.DS_OBSE == null \">NÃO INFORMADO</div>\r\n                    <div *ngIf=\"itemSelecionado?.DS_OBSE != null \">{{ itemSelecionado?.DS_OBSE | uppercase}}</div>\r\n                  </div>\r\n                </div><hr>\r\n                <div class=\"form-row\">\r\n                  <div class=\"form-group col-lg-6\">\r\n                    <label>Usuário Responsável Pelo Cadastro</label>\r\n                    <div>{{ itemSelecionado?.NM_USUA_CADA | uppercase}}</div>\r\n                  </div>\r\n                  <div class=\"form-group col-lg-6\">\r\n                    <label>Data do Cadastro</label>\r\n                    <div>{{ itemSelecionado?.DT_INCL | date: 'dd/MM/yyyy' }}</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- <div class=\"mb-3\" *ngIf=\"dadosCadastraisLoaded && dadosCadastraisEmpty\">\r\n                <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n              </div>\r\n               -->\r\n            </div>\r\n          </tab>\r\n          <tab heading=\"Itens Vinculados\">\r\n            <div class=\"border-right border-left border-bottom px-3 pt-3\" >\r\n              <div *ngIf=\"!loadingVinculo && !noVinculo\">\r\n                <table  class=\"table table-borderless text-center\" >\r\n                    <thead class=\"thead-light\">\r\n                      <tr>\r\n                        <th scope=\"col\" style=\"width:40px\"></th>\r\n                        <th scope=\"col\">ID </th>\r\n                        <th scope=\"col\">Código/Nº Série</th>\r\n                        <th scope=\"col\">Tipo de Item</th>\r\n                        <th scope=\"col\">Modelo</th>\r\n                        <th scope=\"col\" style=\"width:40px\"></th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr *ngFor=\"let item of itensVinculados; let i = index\">\r\n                        <td class=\"d-flex\">\r\n                          <i class=\"text-success fas fa-circle mr-3\" *ngIf=\"item.ID_TECN_INFO_ITEM_STAT == 1\" tooltip=\"Ativo\" ></i>\r\n                          <i class=\"text-danger  fas fa-circle mr-3\" *ngIf=\"item.ID_TECN_INFO_ITEM_STAT == 2\" tooltip=\"Inativo\"></i>\r\n                          <i class=\"text-warning fas fa-circle mr-3\" *ngIf=\"item.ID_TECN_INFO_ITEM_STAT == 3\" tooltip=\"Furtado\"></i>\r\n                          <i class=\"text-primary fas fa-circle mr-3\" *ngIf=\"item.ID_TECN_INFO_ITEM_STAT == 4\" tooltip=\"Assistência Técnica\"></i>\r\n                        </td>\r\n                        <td>{{ item.ID_TECN_INFO_ITEM }}</td>\r\n                        <td>{{ item.CD_ITEM }}</td>\r\n                        <td>{{ item.NM_ITEM_TIPO | uppercase }}</td>\r\n                        <td>{{ item.NM_MODE  | uppercase}}</td>                        <td style=\"text-align: right;\">\r\n                          <span class=\"mr-3\" tooltip=\"Editar\" placement=\"left\" container=\"body\">\r\n                            <button type=\"button\" class=\"btn-icon-sm\" [routerLink]=\"['./../', item.ID_TECN_INFO_ITEM]\">\r\n                              <i class=\"fas fa-edit\"></i>\r\n                            </button>\r\n                          </span>\r\n                        </td>\r\n                      </tr>\r\n                    </tbody>\r\n                </table>\r\n              </div>\r\n              <div class=\"d-flex justify-content-center mb-3\" *ngIf=\"loadingVinculo\">\r\n                <div class=\"spinner-border text-dark\"></div>\r\n              </div>\r\n              <div *ngIf=\"!loadingVinculo && noVinculo\" class=\"d-flex justify-content-center mb-3\">\r\n                <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n              </div>\r\n            </div>\r\n          </tab>\r\n        </tabset>\r\n      </detail-panel>\r\n    </div>\r\n  </div>\r\n  <div [hidden]=\"loading || !noResult\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 80%\">\r\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n  </div>\r\n</app-body>");

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
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep.modal-header {\n  height: 48px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy90ZWNub2xvZ2lhLWluZm9ybWFjYW8vY29udHJhdG9zL2l0ZW0vY2FkYXN0cm8vY2FkYXN0cm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3RlY25vbG9naWEtaW5mb3JtYWNhby9jb250cmF0b3MvaXRlbS9jYWRhc3Ryby9jYWRhc3Ryby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcC5tb2RhbC1oZWFkZXIge1xyXG4gIGhlaWdodDogNDhweDtcclxufVxyXG4iXX0= */");

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