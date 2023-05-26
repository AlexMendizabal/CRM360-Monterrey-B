(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contratos-comerciais-contratos-comerciais-module"],{

/***/ "252F":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/comercial/gestao/contratos-comerciais/contratos-comerciais.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: ComercialGestaoContratosComerciaisModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialGestaoContratosComerciaisModule", function() { return ComercialGestaoContratosComerciaisModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _templates_templates_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../templates/templates.module */ "9lCC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "6No5");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "978R");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-currency-mask */ "D5nU");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../../../shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../../../shared/templates/templates.module */ "QdM9");
/* harmony import */ var _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../../../shared/modules/shared.module */ "UKGz");
/* harmony import */ var _cadastros_materiais_templates_templates_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../../cadastros/materiais/templates/templates.module */ "11Wi");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./formulario/formulario.component */ "hgqU");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./lista/lista.component */ "f/MI");
/* harmony import */ var _templates_clientes_clientes_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./templates/clientes/clientes.component */ "lEDy");
/* harmony import */ var _formulario_modal_selecionar_selecionar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./formulario/modal/selecionar/selecionar.component */ "fZd8");
/* harmony import */ var _formulario_modal_detalhes_cliente_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./formulario/modal/detalhes/cliente.component */ "Pqti");
/* harmony import */ var _contratos_comerciais_contratos_comerciais_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../contratos-comerciais/contratos-comerciais.service */ "pK9/");
/* harmony import */ var _contratos_comerciais_routing_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./contratos-comerciais-routing.module */ "MTwO");
/* harmony import */ var _formulario_modal_detalhes_cliente_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./formulario/modal/detalhes/cliente.service */ "tnBs");





// ngx-bootstrap



// ng-select

// ng2-currency-mask

// PNotify

// Modules




// Components





// Services



let ComercialGestaoContratosComerciaisModule = class ComercialGestaoContratosComerciaisModule {
};
ComercialGestaoContratosComerciaisModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _lista_lista_component__WEBPACK_IMPORTED_MODULE_16__["ComercialGestaoContratosComerciaisListaComponent"],
            _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_15__["ComercialGestaoContratosComerciaisFormularioComponent"],
            _templates_clientes_clientes_component__WEBPACK_IMPORTED_MODULE_17__["ComercialGestaoContratosComerciaisFormularioTemplateClientesComponent"],
            _formulario_modal_selecionar_selecionar_component__WEBPACK_IMPORTED_MODULE_18__["ComercialGestaoContratosComerciaisFormularioModalSelecionarComponent"],
            _formulario_modal_detalhes_cliente_component__WEBPACK_IMPORTED_MODULE_19__["ComercialGestaoContratosComerciaisFormularioModalDetalhesComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"].forRoot(),
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"],
            ng2_currency_mask__WEBPACK_IMPORTED_MODULE_9__["CurrencyMaskModule"],
            _contratos_comerciais_routing_module__WEBPACK_IMPORTED_MODULE_21__["ComercialGestaoContratosComerciaisRoutingModule"],
            _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"],
            _shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_11__["TemplatesModule"],
            _templates_templates_module__WEBPACK_IMPORTED_MODULE_1__["ComercialTemplatesModule"],
            _cadastros_materiais_templates_templates_module__WEBPACK_IMPORTED_MODULE_13__["ComercialCadastrosMateriaisTemplatesModule"],
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_14__["ModalModule"].forRoot(),
        ],
        entryComponents: [
            _formulario_modal_selecionar_selecionar_component__WEBPACK_IMPORTED_MODULE_18__["ComercialGestaoContratosComerciaisFormularioModalSelecionarComponent"],
            _formulario_modal_detalhes_cliente_component__WEBPACK_IMPORTED_MODULE_19__["ComercialGestaoContratosComerciaisFormularioModalDetalhesComponent"],
        ],
        exports: [
            _formulario_modal_selecionar_selecionar_component__WEBPACK_IMPORTED_MODULE_18__["ComercialGestaoContratosComerciaisFormularioModalSelecionarComponent"],
            _formulario_modal_detalhes_cliente_component__WEBPACK_IMPORTED_MODULE_19__["ComercialGestaoContratosComerciaisFormularioModalDetalhesComponent"],
        ],
        providers: [
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_14__["BsModalRef"],
            _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"],
            _contratos_comerciais_contratos_comerciais_service__WEBPACK_IMPORTED_MODULE_20__["ComercialGestaoContratosComerciaisService"],
            _formulario_modal_detalhes_cliente_service__WEBPACK_IMPORTED_MODULE_22__["ComercialGestaoContratosComerciaisFormularioModalDetalhesService"],
        ],
    })
], ComercialGestaoContratosComerciaisModule);



/***/ }),

/***/ "7cUI":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/comercial/gestao/contratos-comerciais/formulario/formulario.component.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2dlc3Rhby9jb250cmF0b3MtY29tZXJjaWFpcy9mb3JtdWxhcmlvL2Zvcm11bGFyaW8uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "Ew1U":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/gestao/contratos-comerciais/lista/lista.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\n<app-header appTitle=\"Contratos comerciais\">\n  <button\n    type=\"button\"\n    (click)= 'onRefresh();'>\n    Atualizar\n  </button>\n  <button\n    type=\"button\"\n    [routerLink]=\"['../novo']\">\n    Adicionar\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"onFilter()\"\n    [disabled]=\"!form.valid\"\n  >\n    Filtrar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\n  <div class=\"row\" #scrollToFilter>\n    <div class=\"col\">\n      <advanced-filter #scrollToFilter>\n        <form [formGroup]=\"form\" autocomplete=\"off\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-lg-2\">\n              <label for=\"dataInicial\">Data inicial vigência</label>\n              <input\n                class=\"form-control\"\n                id=\"dataInicial\"\n                type=\"text\"\n                bsDatepicker\n                [bsConfig]=\"bsConfig\"\n                formControlName=\"dataInicial\"\n                [ngClass]=\"onFieldError('dataInicial') + ' ' + onFieldRequired('dataInicial')\">\n                <invalid-form-control [show]=\"onFieldInvalid('dataInicial') == 'required'\" message=\"Data Inicial é obrigatório.\"></invalid-form-control>\n            </div>\n            <div class=\"form-group col-lg-2\">\n              <label for=\"dataFinal\">Data final vigência</label>\n              <input\n                class=\"form-control\"\n                id=\"dataFinal\"\n                type=\"text\"\n                bsDatepicker\n                [bsConfig]=\"bsConfig\"\n                formControlName=\"dataFinal\"\n                [ngClass]=\"onFieldError('dataFinal') + ' ' + onFieldRequired('dataFinal')\">\n                <invalid-form-control [show]=\"onFieldInvalid('dataFinal') == 'required'\" message=\"Data Final é obrigatório.\"></invalid-form-control>\n            </div>\n            <div class=\"form-group col-lg-4\">\n              <label for=\"nomeContrato\">Nome Contrato</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"nomeContrato\"\n                formControlName=\"nomeContrato\"\n                placeholder=\"DIGITE...\"\n              >\n            </div>\n            <div class=\"form-group col-lg-3 mb-2 mb-md-0\">\n              <label for=\"situacoes\">Situação</label>\n              <ng-select\n                [closeOnSelect]=\"true\"\n                [items]=\"situacoes\"\n                [searchable]=\"true\"\n                [clearable]=\"false\"\n                formControlName=\"situacao\"\n                labelForId=\"situacao\"\n                bindLabel=\"nomeSituacao\"\n                bindValue=\"codSituacao\">\n              </ng-select>\n            </div>\n            <div class=\"form-group col-lg-1 mb-2 mb-md-0\">\n              <label for=\"registros\">Registros</label>\n              <select\n                class=\"form-control\"\n                id=\"registros\"\n                formControlName=\"registros\">\n                <option>25</option>\n                <option>50</option>\n                <option>100</option>\n                <option>200</option>\n                <option>300</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-lg-4\">\n              <label for=\"cliente\">Cliente</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"cliente\"\n                formControlName=\"cliente\"\n                placeholder=\"DIGITE...\"\n                >\n              <!-- <comercial-ciclo-vendas-cotacoes-formulario-template-clientes\n                [acessoClientes]=\"permissoesAcesso.acessoClientes\"\n                [codCliente]=\"form.value.codCliente\"\n                [asFormField]=\"false\"\n                [setErrors]=\"codClientErrors\"\n                (onChange)=\"onChangeCliente($event, 'user')\"\n                (onLoad)=\"onLoadCliente($event)\">\n              </comercial-ciclo-vendas-cotacoes-formulario-template-clientes> -->\n            </div>\n            <div class=\"form-group col-lg-4 mb-lg-0\">\n              <label for=\"carteira\">Carteira</label>\n              <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"false\"\n              [items]=\"carteira\"\n              formControlName=\"carteira\"\n              [virtualScroll]=\"true\"\n              labelForId=\"carteira\"\n              bindLabel=\"nome\"\n              bindValue=\"id\"\n              [loading]=\"materiaisLoader\"\n              loadingText=\"Carregando...\"\n              [readonly]='profile.vendedor && !profile.gestor'>\n          </ng-select>\n            </div>\n            <div class=\"form-group col-lg-2\">\n              <label for=\"codLinha\">Linha</label>\n              <ng-select\n                [searchable]=\"true\"\n                [clearable]=\"false\"\n                [closeOnSelect]=\"true\"\n                [items]=\"linhas\"\n                formControlName=\"codLinha\"\n                [virtualScroll]=\"true\"\n                labelForId=\"codLinha\"\n                bindLabel=\"descricao\"\n                bindValue=\"id\"\n                placeholder=\"SELECIONE...\"\n                (change)=\"onChangeLinha($event.id)\">\n              </ng-select>\n            </div>\n            <div class=\"form-group col-lg-2\">\n              <label for=\"codClasse\">Classe</label>\n              <ng-select\n                [searchable]=\"true\"\n                [clearable]=\"false\"\n                [closeOnSelect]=\"true\"\n                [items]=\"filteredClasses\"\n                formControlName=\"codClasse\"\n                [virtualScroll]=\"true\"\n                labelForId=\"codClasse\"\n                bindLabel=\"nomeClasse\"\n                bindValue=\"idClasse\"\n                placeholder=\"SELECIONE...\"\n                (change)=\"onChangeClasse($event.idClasse)\">\n              </ng-select>\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-lg-4\">\n              <label for=\"codMaterial\">Material</label>\n              <ng-select\n                [searchable]=\"true\"\n                [clearable]=\"false\"\n                [items]=\"materiais\"\n                [closeOnSelect]=\"true\"\n                formControlName=\"codMaterial\"\n                [virtualScroll]=\"true\"\n                labelForId=\"codMaterial\"\n                bindLabel=\"codigoDescricaoMaterial\"\n                bindValue=\"codigoMaterial\"\n                placeholder=\"SELECIONE...\"\n                [loading]=\"materiaisLoader\"\n                loadingText=\"Carregando...\">\n              </ng-select>\n            </div>\n          </div>\n        </form>\n      </advanced-filter>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <subtitles\n        [data]=\"subtitles\"\n        [show]=\"dadosPagination.length > 0 && !dadosEmpty\">\n      </subtitles>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div [ngClass]=\"{'col': !showDetailPanel, 'col-5 pr-0': showDetailPanel}\">\n\n      <custom-table [config]=\"tableConfig\" *ngIf=\"dadosPagination.length > 0 && !dadosEmpty\">\n        <ng-template #thead let-thead>\n          <tr>\n            <th>Nome Contrato</th>\n            <th >Data Inicial</th>\n            <th >Data Final</th>\n            <th >Situação</th>\n            <th  [hidden]=\"showDetailPanel\">Quem cadastrou</th>\n            <th  [hidden]=\"showDetailPanel\">Total de toneladas</th>\n            <th ></th>\n            <th ></th>\n            <th ></th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <!-- [class.table-active]=\"item.id == enderecoSelecionado.id\" -->\n          <tr *ngFor=\"let item of dadosPagination; let i = index\" >\n            <td\n              class=\"hover\"\n              [ngClass]=\"classStatusBorder(item)\"\n              (click)=\"onDetails(item)\">\n              {{ item.nomeContrato | uppercase }}\n            </td>\n            <td\n              class=\"hover\"\n              (click)=\"onDetails(item)\">\n              {{ item.dataInicialVigencia | date: 'dd/MM/yyyy' }}\n            </td>\n            <td\n              class=\"hover\"\n              (click)=\"onDetails(item)\">\n              {{ item.dataFinalVigencia | date: 'dd/MM/yyyy' }}\n            </td>\n            <td\n              class=\"hover\"\n              (click)=\"onDetails(item)\">\n              {{ item.nomeSituacao | uppercase }}\n            </td>\n            <td\n              class=\"hover\"\n              (click)=\"onDetails(item)\"\n              [hidden]=\"showDetailPanel\">\n              {{ item.nomeUsuario | uppercase }}\n            </td>\n            <td\n              class=\"hover\"\n              (click)=\"onDetails(item)\"\n              [hidden]=\"showDetailPanel\">\n              {{ item.qtdeMaximaConsumo }} t\n            </td>\n            <td>\n              <!--  -->\n              <span class=\"mr-3\" tooltip=\"Aprovar\" placement=\"left\" container=\"body\" [hidden]=\"showDetailPanel\" *ngIf=\"profile.gestor && profile.vendedor && item.codSituacao == 2\"> <!-- <*ngIf=\"lista.codSituacao == 3\"> -->\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onAprovar(item)\">\n                  <i class=\" text-success fas fa-thumbs-up\"></i>\n                </button>\n              </span>\n            </td>\n            <td >\n              <!-- *ngIf=\"profile.gestor && profile.vendedor\" -->\n              <span class=\"mr-3\" tooltip=\"Reprovar\" placement=\"left\" container=\"body\" [hidden]=\"showDetailPanel\" *ngIf=\"profile.gestor && profile.vendedor && item.codSituacao == 2\"> <!-- <*ngIf=\"lista.codSituacao == 3\"> -->\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"openModalReprovar(reprovar); setFormReprovar(item);\">\n                  <i class=\" text-danger fas fa-thumbs-down\"></i>\n                </button>\n              </span>\n\n              <!-- <span class=\"mr-3\" tooltip=\"Contrato Reprovado\" placement=\"left\" container=\"body\" [hidden]=\"showDetailPanel\" *ngIf=\"(!profile.gestor && profile.vendedor || profile.gestor && profile.vendedor) && item.codSituacao == 3\">\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"openModalReprovar(reprovar); setFormReprovar(item);\">\n                  <i class=\" text-danger fas fa-thumbs-down\"></i>\n                </button>\n              </span> -->\n            </td>\n            <td>\n              <span class=\"mr-3\" tooltip=\"Editar\" placement=\"left\" container=\"body\" [hidden]=\"showDetailPanel\" *ngIf=\"(item.codSituacao == 3 || item.codSituacao == 1) && profile.vendedor && profile.gestor\">\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onEdit(item)\">\n                  <i class=\"fas fa-edit\"></i>\n                </button>\n              </span>\n\n              <span   tooltip=\"Visualizar\" placement=\"left\" container=\"body\" [hidden]=\"showDetailPanel\" *ngIf=\"item.codSituacao != 3 && item.codSituacao != 1\">\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onEdit(item)\">\n                  <i class=\"fas fa-search\"></i>\n                </button>\n              </span>\n            </td>\n          </tr>\n        </ng-template>\n      </custom-table>\n      <empty-result\n        message=\"Nenhuma informação encontrada\"\n        class=\"my-3\"\n        *ngIf=\"dadosEmpty\">\n      </empty-result>\n      <div class=\"d-flex justify-content-center mt-3\" *ngIf=\"totalItems > itemsPerPage && dadosLoaded\">\n        <pagination\n          [maxSize]=\"maxSize\"\n          [(totalItems)]=\"totalItems\"\n          (pageChanged)=\"onPageChanged($event)\"\n          [(itemsPerPage)]=\"itemsPerPage\"\n          [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPage\"\n          previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\"\n          lastText=\"&raquo;\">\n        </pagination>\n      </div>\n    </div>\n    <div class=\"col-7\" [hidden]=\"!showDetailPanel\">\n      <detail-panel>\n        <custom-table\n        *ngIf=\"detailPanelCliente.length > 0\"\n        >\n        <div class=\"mtc-title mb-2\">Clientes</div>\n          <ng-template #thead let-thead >\n            <tr>\n              <th scope=\"col\" class=\"text-center\">Código Cliente</th>\n              <th scope=\"col\" class=\"text-center\">Razão Social</th>\n\n            </tr>\n          </ng-template>\n          <ng-template #tbody let-tbody>\n            <tr *ngFor='let item of detailPanelCliente'>\n              <td class=\"text-center\">{{ item.codCliente}}</td>\n              <td class=\"text-center\">{{ item.razaoSocial }}</td>\n            </tr>\n          </ng-template>\n        </custom-table>\n\n        <custom-table\n        *ngIf=\"detailPanelMateriais.length > 0\"\n        >\n        <div class=\"mtc-title mb-2\">Materiais</div>\n          <ng-template #thead let-thead >\n            <tr>\n              <th scope=\"col\" class=\"text-center\">Código Material</th>\n              <th scope=\"col\" class=\"text-center\">Nome</th>\n              <th scope=\"col\">Linha</th>\n              <th scope=\"col\" class=\"text-center\">Classe</th>\n              <th scope=\"col\" class=\"text-center\">Total Toneladas</th>\n            </tr>\n          </ng-template>\n          <ng-template #tbody let-tbody>\n            <tr *ngFor='let item of detailPanelMateriais'>\n              <td class=\"text-center\">{{ item.codMaterial }}</td>\n              <td class=\"text-center\">{{ item.nomeMaterial }}</td>\n              <td class=\"text-center\">{{ item.linha }}</td>\n              <td class=\"text-center\">{{ item.classe }}</td>\n              <td class=\"text-center\">{{ item.qtdeMaximaConsumo }}</td>\n            </tr>\n          </ng-template>\n        </custom-table>\n\n        <div class=\"col-12\" *ngFor='let item of detailPanelData'>\n          <div *ngIf = \"item.codSituacao == 3\">\n            <br>\n            <hr>\n            <div class=\"mtc-title mb-2 text-center\">Motivo da Reprovação</div>\n              <p class=\"text-center\"> {{ item.motivoReprovacao | uppercase }}</p>\n          </div>\n        </div>\n      </detail-panel>\n    </div>\n  </div>\n\n\n<ng-template #reprovar>\n\n  <div>\n    <div class=\"modal-body\">\n\n        <button type=\"button\" class=\"close pull-right\" (click)=\"closeModal(reprovar)\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n        <div class=\"mtc-title\">Motivo da Reprovação</div>\n        <form [formGroup]=\"formReprovar\" autocomplete=\"off\" #scrollToFormOnTop>\n            <div class=\"form-group\">\n              <textarea\n                class=\"form-control\"\n                id=\"text-area\"\n                rows=\"3\"\n                formControlName=\"descMotivo\"\n                [readonly]=\"!profile.gestor && profile.vendedor\">\n            </textarea>\n            </div>\n          </form>\n        <div class=\"row mt-2\">\n          <div class=\"col\" style=\"text-align: center;\" >\n\n          <button\n            *ngIf=\"profile.gestor && profile.vendedor\"\n            type=\"button\"\n            class=\"btn btn-success\"\n            (click)=\"modalRef.hide(); onReprovar();\"\n            >\n            Salvar\n          </button>\n\n        </div>\n      </div>\n\n  </div>\n</div>\n</ng-template>\n\n</app-body>\n\n");

/***/ }),

/***/ "IQgH":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/comercial/gestao/contratos-comerciais/lista/lista.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2dlc3Rhby9jb250cmF0b3MtY29tZXJjaWFpcy9saXN0YS9saXN0YS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "Ks30":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/gestao/contratos-comerciais/formulario/modal/detalhes/cliente.component.html ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-content\">\n  <div class=\"modal-header\">\n    <h4 class=\"mtc-title mb-0 my-auto\">DETALHES DO CLIENTE</h4>\n    <button type=\"button\" class=\"close\" (click)=\"onClose()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"row\" *ngIf=\"cliente\">\n      <div class=\"col\">\n        <div class=\"form-row\">\n          <div class=\"form-group col-lg-6\" *ngIf=\"cliente.tipoPessoa == 'F'\">\n            <label>CPF</label>\n            <div *ngIf=\"cliente.cpf == null\">NÃO INFORMADO</div>\n            <div *ngIf=\"cliente.cpf != null\">{{ cliente.cpf }}</div>\n          </div>\n          <div class=\"form-group col-lg-6\" *ngIf=\"cliente.tipoPessoa == 'J'\">\n            <label>CNPJ</label>\n            <div *ngIf=\"cliente.cnpj == null\">NÃO INFORMADO</div>\n            <div *ngIf=\"cliente.cnpj != null\">{{ cliente.cnpj }}</div>\n          </div>\n          <div class=\"form-group col-lg-6\">\n            <label>Nome fantasia</label>\n            <div *ngIf=\"cliente.nomeFantasia == null\">NÃO INFORMADO</div>\n            <div *ngIf=\"cliente.nomeFantasia != null\">{{ cliente.nomeFantasia }}</div>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col\">\n            <label>Razão social</label>\n            <div *ngIf=\"cliente.razaoSocial == null\">NÃO INFORMADO</div>\n            <div *ngIf=\"cliente.razaoSocial != null\">{{ cliente.razaoSocial }}</div>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col\">\n            <label>Endereço</label>\n            <div *ngIf=\"cliente.endereco == null\">NÃO INFORMADO</div>\n            <div *ngIf=\"cliente.endereco != null\">{{ cliente.endereco }}</div>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-lg-8\">\n            <label>Bairro</label>\n            <div *ngIf=\"cliente.bairro == null\">NÃO INFORMADO</div>\n            <div *ngIf=\"cliente.bairro != null\">{{ cliente.bairro }}</div>\n          </div>\n          <div class=\"form-group col-lg-4\">\n            <label>CEP</label>\n            <div *ngIf=\"cliente.cep == null\">NÃO INFORMADO</div>\n            <div *ngIf=\"cliente.cep != null\">{{ cliente.cep }}</div>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-lg-8\">\n            <label>Cidade</label>\n            <div *ngIf=\"cliente.cidade == null\">NÃO INFORMADO</div>\n            <div *ngIf=\"cliente.cidade != null\">{{ cliente.cidade }} / {{ cliente.uf }}</div>\n          </div>\n          <div class=\"form-group col-lg-4\">\n            <label>Segurado</label>\n            <div *ngIf=\"cliente.segurado != ''\">SIM</div>\n            <div *ngIf=\"cliente.segurado == ''\">NÃO</div>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-lg-6\">\n            <label>Vendedor</label>\n            <div *ngIf=\"cliente.vendedor == null\">NÃO INFORMADO</div>\n            <div *ngIf=\"cliente.vendedor != null\">{{ cliente.vendedor }}</div>\n          </div>\n          <div class=\"form-group col-lg-6\">\n            <label>Escritório</label>\n            <div *ngIf=\"cliente.escritorio == null\">NÃO INFORMADO</div>\n            <div *ngIf=\"cliente.escritorio != null\">{{ cliente.escritorio }}</div>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-lg-4\" *ngIf=\"cliente.codSAP != '' && cliente.codSAP != null\">\n            <label>Código DBA</label>\n            <div>{{ cliente.codSAP }}</div>\n          </div>\n          <div class=\"form-group col-lg-4\" *ngIf=\"cliente.escritorioDba != '' && cliente.escritorioDba != null\">\n            <label>Escritório</label>\n            <div>{{ cliente.escritorioDba }}</div>\n          </div>\n          <div class=\"form-group col-lg-4\" *ngIf=\"cliente.ultimaCompraDba != '' && cliente.ultimaCompraDba != null\">\n            <label>Última compra</label>\n            <div>{{ cliente.ultimaCompraDba }}</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "LzM3":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/gestao/contratos-comerciais/formulario/modal/selecionar/selecionar.component.scss ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button[disabled] {\n  cursor: no-drop;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21lcmNpYWwvZ2VzdGFvL2NvbnRyYXRvcy1jb21lcmNpYWlzL2Zvcm11bGFyaW8vbW9kYWwvc2VsZWNpb25hci9zZWxlY2lvbmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9jb21lcmNpYWwvZ2VzdGFvL2NvbnRyYXRvcy1jb21lcmNpYWlzL2Zvcm11bGFyaW8vbW9kYWwvc2VsZWNpb25hci9zZWxlY2lvbmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uW2Rpc2FibGVkXXtcbiAgY3Vyc29yOiBuby1kcm9wO1xufVxuIl19 */");

/***/ }),

/***/ "MTwO":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/comercial/gestao/contratos-comerciais/contratos-comerciais-routing.module.ts ***!
  \******************************************************************************************************/
/*! exports provided: ComercialGestaoContratosComerciaisRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialGestaoContratosComerciaisRoutingModule", function() { return ComercialGestaoContratosComerciaisRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _guards_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guards/formulario-resolver.guard */ "xOuB");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lista/lista.component */ "f/MI");
/* harmony import */ var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./formulario/formulario.component */ "hgqU");



// Guards
// import { FormDeactivateGuard } from 'src/app/guards/form-deactivate.guard';


// Components

const routes = [
    {
        path: '',
        children: [
            { path: 'lista', component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_4__["ComercialGestaoContratosComerciaisListaComponent"] },
            {
                path: '',
                redirectTo: 'lista',
                pathMatch: 'full',
            },
            {
                path: 'novo',
                component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_5__["ComercialGestaoContratosComerciaisFormularioComponent"],
                resolve: {
                    detalhes: _guards_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_3__["ComercialoGestaoContratosComerciaisFormularioResolverGuard"],
                },
            },
            {
                path: 'editar/:id',
                component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_5__["ComercialGestaoContratosComerciaisFormularioComponent"],
                resolve: {
                    detalhes: _guards_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_3__["ComercialoGestaoContratosComerciaisFormularioResolverGuard"],
                },
            },
        ]
    },
];
let ComercialGestaoContratosComerciaisRoutingModule = class ComercialGestaoContratosComerciaisRoutingModule {
};
ComercialGestaoContratosComerciaisRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ComercialGestaoContratosComerciaisRoutingModule);



/***/ }),

/***/ "Pqti":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/gestao/contratos-comerciais/formulario/modal/detalhes/cliente.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: ComercialGestaoContratosComerciaisFormularioModalDetalhesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialGestaoContratosComerciaisFormularioModalDetalhesComponent", function() { return ComercialGestaoContratosComerciaisFormularioModalDetalhesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cliente_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cliente.component.html */ "Ks30");
/* harmony import */ var _cliente_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cliente.component.scss */ "sMXb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");




// ngx-bootstrap

let ComercialGestaoContratosComerciaisFormularioModalDetalhesComponent = class ComercialGestaoContratosComerciaisFormularioModalDetalhesComponent {
    constructor(bsModalRef) {
        this.bsModalRef = bsModalRef;
    }
    ngOnInit() { }
    onClose() {
        this.bsModalRef.hide();
    }
};
ComercialGestaoContratosComerciaisFormularioModalDetalhesComponent.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"] }
];
ComercialGestaoContratosComerciaisFormularioModalDetalhesComponent.propDecorators = {
    cliente: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cliente',] }]
};
ComercialGestaoContratosComerciaisFormularioModalDetalhesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-gestao-contratos-comerciais-formulario-modal-detalhes',
        template: _raw_loader_cliente_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cliente_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"]])
], ComercialGestaoContratosComerciaisFormularioModalDetalhesComponent);



/***/ }),

/***/ "Q2P+":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/gestao/contratos-comerciais/formulario/formulario.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen\n  *ngIf=\"loaderFullScreen\"\n></loader-spinner-full-screen>\n<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<app-header [appTitle]=\"appTitle\">\n  <button\n    *ngIf=\"visualizar\"\n    type=\"button\"\n    (click)=\"onCancel()\"\n    [disabled]=\"submittingForm\"\n  >\n    Voltar\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"onCancel()\"\n    [disabled]=\"submittingForm\"\n    [hidden]=\"visualizar\"\n  >\n    Cancelar\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"onSubmit(2)\"\n    [disabled]=\"!form.valid || submittingForm || assocMateriais.value.length == 0\"\n    [hidden]=\"visualizar\"\n    >\n    Enviar para Aprovação\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"onSubmit(1)\"\n    [disabled]=\"!form.valid || submittingForm || assocMateriais.value.length == 0\"\n    [hidden]=\"visualizar\"\n  >\n    Salvar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\n  <div class=\"ml-5 mr-5\">\n    <div class=\"col-12\">\n      <form [formGroup]=\"form\" autocomplete=\"off\">\n        <div class=\"mtc-title mb-2\">\n          Tela de cadastro de contratos comerciais\n        </div>\n        <hr />\n        <div class=\"row\">\n          <div class=\"form-group col-lg-6\">\n            <label for=\"codPeso\">Tipo de Serviço</label>\n            <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"false\"\n              [items]=\"tipoServico\"\n              [virtualScroll]=\"true\"\n              [loading]=\"materiaisLoader\"\n              [readonly]=\"visualizar\"\n              formControlName=\"codTipoServico\"\n              labelForId=\"codTipoServico\"\n              bindLabel=\"nomeTipoServico\"\n              bindValue=\"codTipoServico\"\n              loadingText=\"Carregando...\"\n              placeholder=\"Selecione...\"\n              (change)=\"onChangeServico()\"\n              [ngClass]=\"\n                onFieldError('codTipoServico') +\n                ' ' +\n                onFieldRequired('codTipoServico')\n              \"\n            >\n            </ng-select>\n            <invalid-form-control\n              [show]=\"onFieldInvalid('codTipoServico')\"\n              message=\"Tipo de Serviço é obrigatório.\"\n            ></invalid-form-control>\n          </div>\n          <div class=\"form-group col-lg-6\">\n            <label for=\"codEmpresa\">Empresa</label>\n            <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"false\"\n              [items]=\"empresas\"\n              [readonly]=\"visualizar\"\n              [virtualScroll]=\"true\"\n              placeholder=\"Selecione...\"\n              formControlName=\"codEmpresa\"\n              labelForId=\"codEmpresa\"\n              bindLabel=\"nomeEmpresa\"\n              bindValue=\"idEmpresa\"\n              [ngClass]=\"onFieldError('codEmpresa') + ' ' + onFieldRequired('codEmpresa')\">\n            </ng-select>\n            <invalid-form-control [show]=\"onFieldInvalid('codEmpresa')\" message=\"Empresa é obrigatório.\"></invalid-form-control>\n          </div>\n\n          <div class=\"form-group col-lg-12\">\n            <div\n              class=\"mb-1 d-flex justify-content-between w-100\"\n              style=\"height: 19px\"\n            >\n              <label class=\"my-auto\" for=\"codCliente\">Cliente</label>\n              <div class=\"my-auto text-uppercase\" style=\"font-size: 11px\">\n                <a\n                  class=\"text-primary mr-2\"\n                  href=\"javascript:void(0)\"\n                  (click)=\"openModal(selecionarCliente)\"\n                >\n                  <strong>Selecionar</strong>\n                </a>\n                <span class=\"mx-2\" *ngIf=\"form.value.codCliente != null\"\n                  >|</span\n                >\n                <a\n                  *ngIf=\"form.value.codCliente != null\"\n                  class=\"text-primary mr-2\"\n                  href=\"javascript:void(0)\"\n                  (click)=\"onClienteDetalhes()\"\n                >\n                  <strong>Detalhes</strong>\n                </a>\n              </div>\n            </div>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"codRazaoSocial\"\n              formControlName=\"codRazaoSocial\"\n              placeholder=\"Selecione...\"\n              [attr.disabled]=\"true\"\n            />\n          </div>\n\n          <div class=\"form-group col-lg-12\" *ngIf=\"grupoEconomico.length > 1\">\n            <label for=\"grupoEconomico\">Grupo Econômico</label>\n            <ng-select\n              [searchable]=\"true\"\n              [items]=\"grupoEconomico\"\n              [virtualScroll]=\"true\"\n              [multiple]=\"true\"\n              [loading]=\"loaderGrupoEconomico\"\n              [readonly]=\"visualizar\"\n              [closeOnSelect]=\"false\"\n              [clearSearchOnAdd]=\"true\"\n              formControlName=\"grupoEconomico\"\n              labelForId=\"grupoEconomico\"\n              bindValue=\"codCliente\"\n              bindLabel=\"codRazaoSocial\"\n              loadingText=\"Carregando Grupo Econômico...\"\n              placeholder=\"Selecione...\"\n              [ngClass]=\"\n                onFieldError('grupoEconomico') +\n                ' ' +\n                onFieldRequired('grupoEconomico')\n              \"\n            >\n            </ng-select>\n          </div>\n          <div class=\"form-group col-lg-12\">\n            <label for=\"enderecoEntrega\">Endereço de Entrega</label>\n            <ng-select\n              [items]=\"enderecos\"\n              formControlName=\"codEnderecoEntrega\"\n              [virtualScroll]=\"true\"\n              labelForId=\"codEnderecoEntrega\"\n              bindValue=\"id\"\n              bindLabel=\"enderecoAjustado\"\n              [loading]=\"loaderEnderecos\"\n              loadingText=\"Carregando Endereços...\"\n              [readonly]=\"visualizar\"\n              placeholder=\"Selecione...\"\n              [ngClass]=\"\n                onFieldError('codEnderecoEntrega') +\n                ' ' +\n                onFieldRequired('codEnderecoEntrega')\n              \"\n            >\n            </ng-select>\n          </div>\n\n          <div class=\"form-group col-lg-12\">\n            <label for=\"nomeContrato\">Nome do Contrato</label>\n            <input\n              [readonly]=\"visualizar\"\n              class=\"form-control\"\n              id=\"nomeContrato\"\n              type=\"text\"\n              formControlName=\"nomeContrato\"\n              placeholder=\"DIGITE...\"\n              [ngClass]=\"\n                onFieldError('nomeContrato') +\n                ' ' +\n                onFieldRequired('nomeContrato')\n              \"\n            />\n            <invalid-form-control\n              [show]=\"onFieldInvalid('nomeContrato') == 'required'\"\n              message=\"O nome do contrato é obrigatório.\"\n            ></invalid-form-control>\n          </div>\n\n          <div class=\"form-group col-lg-3\">\n            <label for=\"dataInicialContrato\">Data Início</label>\n            <input\n              class=\"form-control\"\n              id=\"dataInicialContrato\"\n              type=\"text\"\n              bsDatepicker\n              formControlName=\"dataInicialContrato\"\n              [readonly]=\"visualizar\"\n              [ngClass]=\"\n                onFieldError('dataInicialContrato') +\n                ' ' +\n                onFieldRequired('dataInicialContrato')\n              \"\n            />\n            <invalid-form-control\n              [show]=\"onFieldInvalid('dataInicialContrato')\"\n              message=\"Data Início é obrigatório.\"\n            ></invalid-form-control>\n          </div>\n\n          <div class=\"form-group col-lg-3\">\n            <label for=\"dataFinalContrato\">Data Final</label>\n            <input\n              class=\"form-control\"\n              id=\"dataFinalContrato\"\n              type=\"text\"\n              bsDatepicker\n              formControlName=\"dataFinalContrato\"\n              [readonly]=\"visualizar\"\n              [ngClass]=\"\n                onFieldError('dataFinalContrato') +\n                ' ' +\n                onFieldRequired('dataFinalContrato')\n              \"\n            />\n            <invalid-form-control\n              [show]=\"onFieldInvalid('dataFinalContrato')\"\n              message=\"Data Vigência é obrigatório.\"\n            ></invalid-form-control>\n          </div>\n\n          <div class=\"form-group col-lg-3\" *ngIf=\"!changeTipoServico\">\n            <label for=\"codPeso\">Quantidade Máxima</label>\n            <td class=\"text-center\" style=\"width: 12%\">\n              <input\n                class=\"form-control\"\n                id=\"codPeso\"\n                type=\"text\"\n                formControlName=\"codPeso\"\n                currencyMask\n                placeholder=\"0,000\"\n                [readonly]=\"visualizar\"\n                [options]=\"{\n                  align: 'left',\n                  prefix: '',\n                  thousands: '.',\n                  decimal: ',',\n                  precision: 3\n                }\"\n              />\n            </td>\n          </div>\n\n          <div class=\"form-group col-lg-3\" *ngIf=\"changeTipoServico\">\n            <label for=\"codPeso\">Quantidade Máxima</label>\n            <td class=\"text-center\" style=\"width: 12%\">\n              <input\n                class=\"form-control\"\n                id=\"codPeso\"\n                type=\"text\"\n                formControlName=\"codPeso\"\n                placeholder=\"0,000\"\n                [readonly]=\"visualizar\"\n                [ngClass]=\"\n                  onFieldError('codPeso') + ' ' + onFieldRequired('codPeso')\n                \"\n                currencyMask\n                [options]=\"{\n                  align: 'left',\n                  prefix: '',\n                  thousands: '.',\n                  decimal: ',',\n                  precision: 3\n                }\"\n              />\n            </td>\n            <invalid-form-control\n              [show]=\"onFieldInvalid('codPeso')\"\n              message=\"Quantidade Máxima é obrigatório.\"\n            ></invalid-form-control>\n          </div>\n\n          <div class=\"form-group col-lg-3\">\n            <label for=\"codSituacao\"\n              >Situação\n              <i\n                class=\"far fa-question-circle\"\n                [tooltip]=\"tooltipLabelTemplate\"\n              ></i\n            ></label>\n            <ng-select\n              type=\"text\"\n              [searchable]=\"true\"\n              [clearable]=\"false\"\n              [items]=\"situacoes\"\n              [virtualScroll]=\"true\"\n              [hideSelected]=\"true\"\n              [closeOnSelect]=\"true\"\n              placeholder=\"EM ABERTO\"\n              bindLabel=\"nomeSituacao\"\n              bindValue=\"codSituacao\"\n              formControlName=\"codSituacao\"\n              [readonly]=\"true\"\n              [ngClass]=\"\n                onFieldError('codSituacao') +\n                ' ' +\n                onFieldRequired('codSituacao')\n              \"\n            >\n            </ng-select>\n            <invalid-form-control\n              [show]=\"onFieldInvalid('codSituacao') == 'required'\"\n              message=\"Situação é obrigatória.\"\n            ></invalid-form-control>\n          </div>\n\n          <ng-template #tooltipLabelTemplate>\n            <p class=\"mt-3 mb-0\"><b>Caso Finalize o pedido em:</b></p>\n            <p class=\"mt-3 mb-0\"><b>Salvar - Situação: EM ABERTO</b></p>\n            <p class=\"mt-3 mb-0\">\n              <b>Enviar para Aprovação - Situação: AGUARDANDO APROVAÇÃO</b>\n            </p>\n            <p class=\"text-nowrap mb-0\"><br /><br /></p>\n          </ng-template>\n\n          <div class=\"form-group col-lg-3\">\n            <label for=\"codPeso\">Forma de pagamento</label>\n            <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"false\"\n              [items]=\"formaPagamento\"\n              formControlName=\"codFormaPagamento\"\n              [virtualScroll]=\"true\"\n              labelForId=\"codFormaPagamento\"\n              bindLabel=\"descricao\"\n              bindValue=\"codigo\"\n              [loading]=\"materiaisLoader\"\n              loadingText=\"Carregando...\"\n              [readonly]=\"visualizar\"\n              placeholder=\"Selecione...\"\n              [ngClass]=\"\n                onFieldError('codFormaPagamento') +\n                ' ' +\n                onFieldRequired('codFormaPagamento')\n              \"\n            >\n            </ng-select>\n            <invalid-form-control\n              [show]=\"onFieldInvalid('codFormaPagamento')\"\n              message=\"Forma de pagamento é obrigatório.\"\n            ></invalid-form-control>\n          </div>\n\n          <div class=\"form-group col-lg-3\">\n            <label for=\"codTipoFrete\">Frete</label>\n            <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"true\"\n              [items]=\"tipoFrete\"\n              formControlName=\"codTipoFrete\"\n              labelForId=\"codTipoFrete\"\n              bindLabel=\"descricao\"\n              bindValue=\"codigo\"\n              [loading]=\"materiaisLoader\"\n              loadingText=\"Carregando...\"\n              [readonly]=\"visualizar\"\n              placeholder=\"Selecione...\"\n            >\n            </ng-select>\n          </div>\n\n          <div class=\"form-group col-lg-3\" [hidden]=\"!changeTipoServico\">\n            <label for=\"codTipoFrete\">Preço Serviço APS</label>\n            <td class=\"text-center\" style=\"width: 12%\">\n              <input\n                class=\"form-control\"\n                id=\"precoAps\"\n                type=\"text\"\n                formControlName=\"precoAps\"\n                [readonly]=\"visualizar\"\n                currencyMask\n                [options]=\"{\n                  align: 'left',\n                  prefix: '',\n                  thousands: '.',\n                  decimal: ',',\n                  precision: 2\n                }\"\n              />\n            </td>\n          </div>\n          <div class=\"form-group col-lg-3\" [hidden]=\"!changeTipoServico\">\n            <label for=\"valorServico\">Preço Serviço CD</label>\n            <td class=\"text-center\" style=\"width: 12%\">\n              <input\n                class=\"form-control\"\n                id=\"valorServico\"\n                type=\"text\"\n                formControlName=\"valorServico\"\n                [readonly]=\"visualizar\"\n                currencyMask\n                [options]=\"{\n                  align: 'left',\n                  prefix: '',\n                  thousands: '.',\n                  decimal: ',',\n                  precision: 2\n                }\"\n                [ngClass]=\"\n                onFieldError('valorServico') +\n                ' ' +\n                onFieldRequired('valorServico')\n              \"\n              />\n              <invalid-form-control\n                [show]=\"onFieldInvalid('valorServico')\"\n                message=\"Preço Serviço CD é obrigatório.\"\n              ></invalid-form-control>\n            </td>\n          </div>\n        </div>\n        <hr />\n        <div class=\"col-lg-12\" formArrayName=\"anexos\">\n          <div class=\"row\">\n            <div class=\"col-lg-12 d-flex align-items-start\">\n              <div class=\"mtc-title mb-0\">Anexos</div>\n            </div>\n            <div class=\"col\">\n              <label\n                for=\"novoAnexo\"\n                class=\"d-flex justify-content-start align-items-center\"\n                style=\"cursor: pointer\"\n                [hidden]=\"visualizar\"\n              >\n                <p class=\"btn btn-sm btn-outline-primary m-0\">\n                  <i class=\"fas fa-plus\"></i>\n                  <span>Anexo</span>\n                </p>\n              </label>\n              <input\n                id=\"novoAnexo\"\n                type=\"file\"\n                (change)=\"appendFile($event.target.files)\"\n                class=\"d-none\"\n              />\n            </div>\n          </div>\n          <div class=\"row\" *ngIf=\"showAnexos && form.value.anexos.length > 0\">\n            <div class=\"col\">\n              <custom-table [config]=\"tableConfigAnexos\">\n                <ng-template #tbody let-tbody>\n                  <tr\n                    *ngFor=\"let anexo of anexos.controls; let i = index\"\n                    [formGroupName]=\"i\"\n                  >\n                    <td style=\"width: 90%\">\n                      {{ form.value.anexos[i].codAnexo }} -\n                      {{ form.value.anexos[i].nomeAnexo | uppercase }}\n                    </td>\n                    <td class=\"text-center\" style=\"width: 5%\">\n                      <a\n                        (click)=\"navegarAnexo(anexo)\"\n                        *ngIf=\"form.value.anexos[i].codAnexo != null\"\n                        target=\"_blank\"\n                        class=\"btn-icon-sm mx-2 text-black\"\n                        tooltip=\"visualizar\"\n                      >\n                        <i class=\"far fa-eye\"></i>\n                      </a>\n                    </td>\n                    <td class=\"text-center\" style=\"width: 5%\">\n                      <btn-icon\n                        icon=\"fas fa-trash\"\n                        size=\"small\"\n                        tooltip=\"Excluir\"\n                        (click)=\"\n                          onDeleteAnexo(form.value.anexos[i].codAnexo, i)\n                        \"\n                        [hidden]=\"visualizar\"\n                      >\n                      </btn-icon>\n                    </td>\n                  </tr>\n                </ng-template>\n              </custom-table>\n            </div>\n          </div>\n          <div class=\"row\" *ngIf=\"showAnexos && form.value.anexos.length === 0\">\n            <div class=\"col\">\n              <message\n                icon=\"fas fa-exchange-alt\"\n                text=\"Nenhum documento encontrado\"\n              >\n              </message>\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n\n    <div class=\"col-12\" *ngIf=\"!visualizar\">\n      <hr />\n      <div class=\"row mb-2\">\n        <div class=\"col mt-auto\">\n          <div class=\"mtc-title mb-0\">Pesquisa de materiais</div>\n        </div>\n        <div class=\"col\">\n          <div class=\"d-flex justify-content-end\">\n            <button\n              type=\"button\"\n              class=\"btn btn-sm btn-outline-secondary\"\n              (click)=\"onFilterMateriais()\"\n              [disabled]=\"!formMateriais.valid || searching === true \"\n              [hidden]=\"visualizar\"\n            >\n              <i class=\"fas fa-search\"></i>\n              <span>Pesquisar</span>\n            </button>\n          </div>\n        </div>\n      </div>\n      <advanced-filter>\n        <form [formGroup]=\"formMateriais\" autocomplete=\"off\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-lg-3\">\n              <label for=\"codLinha\">Linha</label>\n              <ng-select\n                [searchable]=\"true\"\n                [clearable]=\"false\"\n                [items]=\"linhas\"\n                [virtualScroll]=\"true\"\n                [readonly]=\"visualizar\"\n                formControlName=\"codLinha\"\n                labelForId=\"codLinha\"\n                bindLabel=\"descricao\"\n                bindValue=\"id\"\n                placeholder=\"Selecione...\"\n                (change)=\"onChangeLinha($event.id)\"\n                [ngClass]=\"\n                  onFieldErrorFormMaterial('codLinha') +\n                  ' ' +\n                  onFieldRequiredFormMaterial('codLinha')\n                \"\n                >\n              </ng-select>\n              <invalid-form-control\n                [show]=\"onFieldInvalidFormMaterial('codLinha')\"\n                message=\"Linha é obrigatório.\"\n              ></invalid-form-control>\n            </div>\n            <div class=\"form-group col-lg-3\">\n              <label for=\"codClasse\">Classe</label>\n              <ng-select\n                [searchable]=\"true\"\n                [clearable]=\"false\"\n                [items]=\"filteredClasses\"\n                [virtualScroll]=\"true\"\n                [readonly]=\"visualizar\"\n                formControlName=\"codClasse\"\n                labelForId=\"codClasse\"\n                bindLabel=\"nomeClasse\"\n                bindValue=\"idClasse\"\n                placeholder=\"Selecione...\"\n                (change)=\"onChangeClasse($event.idClasse)\"\n                [ngClass]=\"\n                  onFieldErrorFormMaterial('codClasse') +\n                  ' ' +\n                  onFieldRequiredFormMaterial('codClasse')\n                \"\n              >\n              </ng-select>\n              <invalid-form-control\n                [show]=\"onFieldInvalidFormMaterial('codClasse')\"\n                message=\"Classe é obrigatório.\"\n              ></invalid-form-control>\n            </div>\n            <div class=\"form-group col-lg-6\">\n              <label for=\"codMaterial\">Material</label>\n              <ng-select\n                [searchable]=\"true\"\n                [clearable]=\"false\"\n                [items]=\"materiais\"\n                [virtualScroll]=\"true\"\n                [loading]=\"materiaisLoader\"\n                [readonly]=\"visualizar\"\n                formControlName=\"codMaterial\"\n                labelForId=\"codMaterial\"\n                bindLabel=\"codigoDescricaoMaterial\"\n                bindValue=\"codigoMaterial\"\n                placeholder=\"Selecione...\"\n                loadingText=\"Carregando...\"\n              >\n              </ng-select>\n            </div>\n          </div>\n        </form>\n      </advanced-filter>\n    </div>\n\n    <div class=\"col-12\">\n      <div *ngIf=\"materiaisLista.length > 0\">\n        <div class=\"row mb-2\">\n          <div class=\"col mt-auto\">\n            <div class=\"mtc-title mb-0\">Seleção de materiais</div>\n          </div>\n          <div class=\"col-12\">\n            <div class=\"d-flex justify-content-end\">\n              <button\n                type=\"button\"\n                class=\"btn btn-sm btn-outline-primary\"\n                (click)=\"onAssociarMateriais()\"\n                [disabled]=\"searching === true\"\n              >\n                <i class=\"fas fa-exchange-alt\"></i>\n                <span>Adicionar</span>\n              </button>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <custom-table [config]=\"tableConfigMateriais\">\n              <ng-template #thead let-thead>\n                <tr>\n                  <th scope=\"col\" class=\"text-center\" style=\"width: 5%\">\n                    <btn-icon\n                      [icon]=\"\n                        toggleAll ? 'fas fa-check-square' : 'far fa-square'\n                      \"\n                      size=\"small\"\n                      (click)=\"onToggleAll()\"\n                    >\n                    </btn-icon>\n                  </th>\n                  <th scope=\"col\" style=\"width: 95%\">Material</th>\n                </tr>\n              </ng-template>\n              <ng-template #tbody let-tbody>\n                <tr *ngFor=\"let material of materiaisLista; let i = index\">\n                  <td class=\"text-center\" style=\"width: 5%\">\n                    <btn-icon\n                      [icon]=\"\n                        material.checked == 1\n                          ? 'fas fa-check-square'\n                          : 'far fa-square'\n                      \"\n                      size=\"small\"\n                      (click)=\"onCheckMaterial(i, material)\"\n                    >\n                    </btn-icon>\n                  </td>\n                  <td\n                    class=\"hover\"\n                    style=\"width: 95%\"\n                    (click)=\"onCheckMaterial(i, material)\"\n                  >\n                    {{ material.codigoDescricaoMaterial | uppercase }}\n                  </td>\n                </tr>\n              </ng-template>\n            </custom-table>\n          </div>\n        </div>\n      </div>\n      <hr />\n\n      <div class=\"col-12\">\n        <form [formGroup]=\"form\" autocomplete=\"off\">\n          <div\n            class=\"col\"\n            *ngIf=\"showMateriais && form.value.assocMateriais.length > 0\"\n          >\n            <div class=\"col-12\">\n              <div formArrayName=\"assocMateriais\">\n                <custom-table [config]=\"tableConfigAssocMateriais\">\n                  <ng-template #thead let-thead>\n                    <tr>\n                      <th scope=\"col\" style=\"width: 35%\">Material</th>\n                      <th scope=\"col\" style=\"width: 12%\">Preço Original</th>\n                      <th scope=\"col\" style=\"width: 12%\">Preço Negociado</th>\n                      <th scope=\"col\" style=\"width: 12%\">Qt Máxima</th>\n                      <th scope=\"col\" style=\"width: 12%\">Valor Final</th>\n                      <th scope=\"col\" style=\"width: 5%\"></th>\n                    </tr>\n                  </ng-template>\n                  <ng-template #tbody let-tbody>\n                    <tr\n                      *ngFor=\"\n                        let material of assocMateriais.controls;\n                        let i = index\n                      \"\n                      [formGroupName]=\"i\"\n                    >\n                      <td style=\"width: 35%\">\n                        <i\n                          class=\"fas fa-exclamation-circle\"\n                          [tooltip]=\"tooltipServicoTemplate\"\n                          [hidden]=\"!changeTipoServico\"\n                        >\n                        </i>\n                        {{ form.value.assocMateriais[i].codMaterial }} -\n                        {{\n                          form.value.assocMateriais[i].nomeMaterial | uppercase\n                        }}\n                      </td>\n                      <ng-template #tooltipServicoTemplate>\n                        <p class=\"mt-3 mb-0\">\n                          <b>Material com ocorrência de valor de serviço</b>\n                        </p>\n                        <p class=\"text-nowrap mb-0\"><br /><br /></p>\n                      </ng-template>\n                      <td class=\"text-center\" style=\"width: 12%\">\n                        <input\n                          class=\"form-control\"\n                          id=\"precoOriginal\"\n                          type=\"text\"\n                          formControlName=\"precoOriginal\"\n                          [attr.disabled]=\"true\"\n                          [readonly]=\"visualizar\"\n                          currencyMask\n                          [options]=\"{\n                            align: 'left',\n                            prefix: '',\n                            thousands: '.',\n                            decimal: ',',\n                            precision: 2\n                          }\"\n                        />\n                      </td>\n                      <td class=\"text-center\" style=\"width: 12%\">\n                        <input\n                          class=\"form-control\"\n                          id=\"precoAlterado\"\n                          type=\"text\"\n                          formControlName=\"precoAlterado\"\n                          [readonly]=\"visualizar\"\n                          currencyMask\n                          [options]=\"{\n                            align: 'left',\n                            prefix: '',\n                            thousands: '.',\n                            decimal: ',',\n                            precision: 2\n                          }\"\n                          [ngClass]=\"onNestedFieldError('assocMateriais', i, 'precoAlterado') + ' ' + onNestedFieldRequired('assocMateriais', i, 'precoAlterado')\"\n                          />\n                      </td>\n                      <td class=\"text-center\" style=\"width: 12%\">\n                        <input\n                          class=\"form-control\"\n                          id=\"qtdadeMaxima\"\n                          type=\"text\"\n                          formControlName=\"qtdadeMaxima\"\n                          [readonly]=\"visualizar\"\n                          currencyMask\n                          [options]=\"{\n                            align: 'left',\n                            prefix: '',\n                            thousands: '.',\n                            decimal: ',',\n                            precision: 3\n                          }\"\n                          [ngClass]=\"onNestedFieldError('assocMateriais', i, 'qtdadeMaxima') + ' ' + onNestedFieldRequired('assocMateriais', i, 'qtdadeMaxima')\"\n                          />\n                      </td>\n                      <td class=\"text-center\" style=\"width: 12%\">\n                        {{\n                         (changeTipoServico ? \n                          (form.value.assocMateriais[i].precoAlterado + form.value.valorServico) : \n                          form.value.assocMateriais[i].precoAlterado)\n                          | currency: 'BRL':'symbol':'1.2'\n                        }}\n                      </td>\n                      <td class=\"text-center\" style=\"width: 5%\">\n                        <btn-icon\n                          icon=\"fas fa-trash\"\n                          size=\"small\"\n                          (click)=\"onDeleteMaterial(i)\"\n                          [hidden]=\"visualizar\"\n                        >\n                        </btn-icon>\n                      </td>\n                    </tr>\n                  </ng-template>\n                </custom-table>\n                <br *ngIf=\"!visualizar\" />\n                <br *ngIf=\"!visualizar\" />\n                <br *ngIf=\"!visualizar\" />\n                <br *ngIf=\"!visualizar\" />\n                <br *ngIf=\"!visualizar\" />\n                <br *ngIf=\"!visualizar\" />\n                <br *ngIf=\"!visualizar\" />\n                <br *ngIf=\"!visualizar\" />\n                <br *ngIf=\"!visualizar\" />\n                <br *ngIf=\"!visualizar\" />\n                <br *ngIf=\"!visualizar\" />\n                <br *ngIf=\"!visualizar\" />\n              </div>\n            </div>\n          </div>\n        </form>\n      </div>\n\n      <div class=\"row\" *ngIf=\"searching === true\">\n        <div class=\"col\">\n          <message\n            icon=\"fas fa-cog fa-spin\"\n            text=\"Estamos pesquisando os materiais para você...\"\n          >\n          </message>\n        </div>\n      </div>\n      <div *ngIf=\"searching === false\">\n        <div class=\"row\" *ngIf=\"materiaisListaEmpty && materiaisListaLoaded\">\n          <div class=\"col\">\n            <message\n              icon=\"fas fa-box-open\"\n              text=\"Nenhuma informação encontrada\"\n            >\n            </message>\n          </div>\n        </div>\n        <div\n          class=\"row\"\n          *ngIf=\"\n            materiaisLista.length === 0 &&\n            !firstSearch &&\n            !visualizar &&\n            !editar\n          \"\n        >\n          <div class=\"col\">\n            <message\n              icon=\"fas fa-search\"\n              text=\"Preecha os campos acima para pesquisar materiais\"\n            >\n            </message>\n            <br *ngIf=\"!visualizar\" />\n            <br *ngIf=\"!visualizar\" />\n            <br *ngIf=\"!visualizar\" />\n            <br *ngIf=\"!visualizar\" />\n            <br *ngIf=\"!visualizar\" />\n            <br *ngIf=\"!visualizar\" />\n            <br *ngIf=\"!visualizar\" />\n            <br *ngIf=\"!visualizar\" />\n            <br *ngIf=\"!visualizar\" />\n            <br *ngIf=\"!visualizar\" />\n            <br *ngIf=\"!visualizar\" />\n            <br *ngIf=\"!visualizar\" />\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <ng-template #selecionarCliente>\n    <comercial-gestao-contratos-comerciais-formulario-modal-selecionar\n      (fecharModal)=\"onFecharModal($event)\"\n      (cliente)=\"onCliente($event)\"\n    >\n    </comercial-gestao-contratos-comerciais-formulario-modal-selecionar>\n  </ng-template>\n</app-body>\n");

/***/ }),

/***/ "SYP8":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/comercial/gestao/contratos-comerciais/templates/clientes/clientes.component.scss ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep comercial-ciclo-vendas-cotacoes-formulario-template-clientes {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21lcmNpYWwvZ2VzdGFvL2NvbnRyYXRvcy1jb21lcmNpYWlzL3RlbXBsYXRlcy9jbGllbnRlcy9jbGllbnRlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGNBQUE7QUFBSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2dlc3Rhby9jb250cmF0b3MtY29tZXJjaWFpcy90ZW1wbGF0ZXMvY2xpZW50ZXMvY2xpZW50ZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAge1xuICBjb21lcmNpYWwtY2ljbG8tdmVuZGFzLWNvdGFjb2VzLWZvcm11bGFyaW8tdGVtcGxhdGUtY2xpZW50ZXMge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "cY1h":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/gestao/contratos-comerciais/templates/clientes/clientes.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"form\">\n  <div class=\"form-row\">\n    <!-- <div class=\"form-group col\">\n      <ng-select\n        [searchable]=\"true\"\n        [clearable]=\"true\"\n        [items]=\"carteiraClientes$ | async\"\n        formControlName=\"codCliente\"\n        [virtualScroll]=\"true\"\n        bindLabel=\"razaoSocial\"\n        bindValue=\"codCliente\"\n        [loading]=\"clientesLoader\"\n        loadingText=\"Carregando...\"\n        [typeahead]=\"input$\"\n        typeToSearchText=\"Informe o código ou razão social do cliente\"\n        (change)=\"onChangeCliente()\"\n        (clear)=\"onClear()\"\n        [ngClass]=\"onFieldError('codCliente') + ' ' + onFieldRequired('codCliente')\">\n      </ng-select>\n      <invalid-form-control [show]=\"onFieldInvalid('codCliente')\" message=\"Cliente é obrigatório.\"></invalid-form-control>\n    </div> -->\n    <div class=\"form-group col mb-0\">\n      <ng-select\n        [searchable]=\"true\"\n        [clearable]=\"false\"\n        [items]=\"carteiraClientes\"\n        formControlName=\"codCliente\"\n        [virtualScroll]=\"true\"\n        bindLabel=\"codRazaoSocial\"\n        bindValue=\"codCliente\"\n        [loading]=\"clientesLoader\"\n        [multiple]=\"false\"\n        loadingText=\"Carregando...\"\n        (change)=\"onChangeCliente()\"\n        [ngClass]=\"onFieldError('codCliente') + ' ' + onFieldRequired('codCliente')\"\n        [readonly]='visualizar'>\n      </ng-select>\n      <invalid-form-control [show]=\"onFieldInvalid('codCliente')\" message=\"Cliente é obrigatório.\"></invalid-form-control>\n    </div>\n  </div>\n</form>\n");

/***/ }),

/***/ "f/MI":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/comercial/gestao/contratos-comerciais/lista/lista.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ComercialGestaoContratosComerciaisListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialGestaoContratosComerciaisListaComponent", function() { return ComercialGestaoContratosComerciaisListaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lista.component.html */ "Ew1U");
/* harmony import */ var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lista.component.scss */ "IQgH");
/* harmony import */ var _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../../shared/templates/detail-panel/detal-panel.service */ "gIxL");
/* harmony import */ var _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../../shared/modules/confirm-modal/confirm-modal.service */ "FOez");
/* harmony import */ var _cadastros_materiais_grupos_grupos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../cadastros/materiais/grupos/grupos.service */ "4YhS");
/* harmony import */ var _ciclo_vendas_pedidos_producao_telas_formulario_formulario_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../ciclo-vendas/pedidos-producao-telas/formulario/formulario.service */ "8O77");
/* harmony import */ var _contratos_comerciais_contratos_comerciais_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../contratos-comerciais/contratos-comerciais.service */ "pK9/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/chronos */ "xj/R");
/* harmony import */ var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-bootstrap/locale */ "0b5p");
/* harmony import */ var _shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./../../../../../shared/services/core/auth.service */ "yxCR");
/* harmony import */ var _comercial_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./../../../comercial.service */ "VgqD");
/* harmony import */ var _services_vendedores_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./../../../services/vendedores.service */ "4xRd");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");

















Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_15__["defineLocale"])('pt-br', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_16__["ptBrLocale"]);
// Services







let ComercialGestaoContratosComerciaisListaComponent = class ComercialGestaoContratosComerciaisListaComponent {
    constructor(localeService, activatedRoute, router, location, formBuilder, pnotifyService, atividadesService, titleService, dateService, vendedoresService, comercialService, authService, formularioService, contratosComerciaisService, materiaisGrupoService, bsModalService, confirmModalService, detailPanelService) {
        this.localeService = localeService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.location = location;
        this.formBuilder = formBuilder;
        this.pnotifyService = pnotifyService;
        this.atividadesService = atividadesService;
        this.titleService = titleService;
        this.dateService = dateService;
        this.vendedoresService = vendedoresService;
        this.comercialService = comercialService;
        this.authService = authService;
        this.formularioService = formularioService;
        this.contratosComerciaisService = contratosComerciaisService;
        this.materiaisGrupoService = materiaisGrupoService;
        this.bsModalService = bsModalService;
        this.confirmModalService = confirmModalService;
        this.detailPanelService = detailPanelService;
        this.permissoesAcesso = {
            acessoClientes: false,
            historicoExclusao: false,
            duplicataCarteira: false,
        };
        this.user = this.authService.getCurrentUser();
        this.loaderNavbar = false;
        this.loaderFullScreen = true;
        this.breadCrumbTree = [];
        this.subtitles = [
            {
                id: 1,
                text: 'Em Aberto',
                color: 'green',
            },
            {
                id: 4,
                text: 'Aguardando Aprovação',
                color: 'yellow',
            },
            {
                id: 2,
                text: 'Aprovado',
                color: 'blue',
            },
            {
                id: 3,
                text: 'Reprovado',
                color: 'red',
            },
        ];
        this.tableConfig = {
            subtitleBorder: true,
        };
        this.tableConfigAnexos = {
            fixedHeader: false,
            bodyHeight: 230,
            hover: false,
        };
        this.showDashboard = false;
        this.showFilter = false;
        this.showPermissionDenied = false;
        this.profile = {};
        this.showMateriais = true;
        this.materiaisListaLoaded = false;
        this.materiaisListaEmpty = false;
        this.filteredClasses = [];
        this.materiais = [];
        this.classes = [];
        this.linhas = [];
        this.materiaisLista = [];
        this.detailPanelData = [];
        this.detailPanelMateriais = [];
        this.detailPanelCliente = [];
        this.desativado = false;
        this.showDetailPanel = false;
        this.orderBy = 'id';
        this.orderType = 'ASC';
        this.enderecos = [];
        this.changeTipoMaterial = false;
        this.maxSize = 10;
        this.itemsPerPage = 300;
        this.currentPage = 1;
        this.totalItems = 0;
        this.dados = [];
        this.dadosPagination = [];
        this.dadosLoaded = false;
        this.dadosEmpty = false;
        this.codClientErrors = false;
        this.vendedores = [];
        this.empresas = [];
        this.situacoes = [
            {
                id: 0,
                situacao: 'EXIBIR TODOS',
            },
            {
                id: 4,
                situacao: 'APROVADOS',
            },
            {
                id: 3,
                situacao: 'REPROVADOS',
            },
            {
                id: 2,
                situacao: 'AGUARDANDO APROVAÇÃO',
            },
        ];
        this.situacoesFiltered = this.situacoes;
        this.situacaoLoaded = false;
        this.anexos = [];
        this.showAnexos = false;
        this.carteira = [
            {
                codigo: 'S',
                descricao: 'MINHA CARTEIRA',
            },
            {
                codigo: '',
                descricao: 'TODOS',
            }
        ];
        this.form = this.formBuilder.group({
            dataInicial: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required]],
            dataFinal: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required]],
            nomeContrato: [null],
            situacao: [null],
            registros: [null],
            cliente: [null],
            carteira: [null],
            codMaterial: [null],
            codLinha: [null],
            codClasse: [null],
        });
        this.localeService.use('pt-br');
        this.bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' }, { adaptivePosition: true }, { showWeekNumbers: false });
        this.pnotifyService.getPNotify();
    }
    ngOnInit() {
        this.titleService.setTitle('Gestão');
        this.getFilterValues();
        this.getPerfil();
        this.getSituacao();
        this.registrarAcesso();
        this.getFiltros();
        this.setBreadCrumb();
        this.onDetailPanelEmitter();
    }
    registrarAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
    }
    getFiltros() {
        this.vendedoresService
            .getVendedores()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(() => {
            this.loaderFullScreen = false;
        }))
            .subscribe({
            next: (response) => {
                if (response.responseCode === 200) {
                    this.vendedores = response.result;
                    this.vendedores.unshift({
                        id: 'T',
                        nome: 'EXIBIR TODOS',
                    });
                    this.vendedores.unshift({
                        id: 'S',
                        nome: 'MINHA CARTEIRA',
                    });
                    this.carteira = this.vendedores;
                }
            },
            error: (error) => {
                this.pnotifyService.error();
                this.location.back();
            }
        });
    }
    setBreadCrumb() {
        this.activatedRoute.params.subscribe((params) => {
            this.breadCrumbTree = [
                {
                    descricao: 'Home',
                    routerLink: '/comercial/home',
                },
                {
                    descricao: 'Gestão',
                    routerLink: `/comercial/gestao/${params['idSubModulo']}`,
                },
                {
                    descricao: 'Contratos Comerciais',
                },
            ];
        });
    }
    setFormValueFilter() {
        const formValue = this.checkRouterParams();
        this.form.patchValue({
            dataInicial: formValue.dataInicial,
            dataFinal: formValue.dataFinal,
            nomeContrato: formValue.nomeContrato,
            situacao: formValue.situacao,
            registros: formValue.registros,
            cliente: formValue.cliente,
            carteira: formValue.carteira,
            codMaterial: formValue.codMaterial,
            codLinha: formValue.codLinha,
            codClasse: formValue.codClasse,
        });
        if (formValue.codLinha > 0 && (formValue.codLinha != null || formValue.codLinha != undefined)) {
            this.onChangeLinha(formValue.codLinha, true);
        }
        else {
            this.form.get('codClasse').disable();
        }
        if (formValue.codClasse > 0 && (formValue.codClasse != null || formValue.codClasse != undefined)) {
            this.getMateriais(formValue.codClasse);
        }
        else {
            this.form.get('codMaterial').disable();
        }
    }
    getFilterValues() {
        this.materiaisGrupoService
            .getFilterValues()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(() => {
            this.loaderFullScreen = false;
            this.setFormValueFilter();
        }))
            .subscribe((response) => {
            if (response[0].responseCode === 200) {
                this.linhas = response[0].result;
            }
            else {
                this.pnotifyService.error();
                this.location.back();
            }
            if (response[1].responseCode === 200) {
                this.classes = response[1].result;
            }
            else {
                this.pnotifyService.error();
                this.location.back();
            }
        });
    }
    // Get perfil
    getPerfil() {
        this.loaderFullScreen = true;
        this.comercialService
            .getPerfil()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(() => {
            this.loaderFullScreen = false;
        }))
            .subscribe({
            next: (response) => {
                if (response.responseCode === 200) {
                    this.profile = response.result;
                    if (this.profile.coordenador === true ||
                        this.profile.gestor === true
                            && (this.profile.vendedor === true &&
                                this.profile.coordenador === false &&
                                this.profile.gestor === false &&
                                this.profile.hasVinculoOperadores === true)) {
                        this.checkRouterParams();
                    }
                    else if (this.profile.vendedor === true &&
                        this.profile.coordenador === false &&
                        this.profile.gestor === false &&
                        this.profile.hasVinculoOperadores === true) {
                        this.idVendedor = this.user.info.idVendedor;
                        this.idEscritorio = this.user.info.idEscritorio;
                        this.form.get('carteira').setValue('S');
                        // this.form.get('codVendedor').setValue(parseInt(this.user.info.idVendedor));
                        // this.form.get('codGerencia').setValue(parseInt(this.user.info.idEscritorio));
                        this.desativado = true;
                        this.showDashboard = true;
                    }
                    else {
                        this.showPermissionDenied = true;
                    }
                }
                else {
                    this.showPermissionDenied = true;
                }
            },
            error: (error) => {
                this.showPermissionDenied = true;
            }
        });
    }
    checkRouterParams() {
        let formValue = {
            dataInicial: this.dateService.getFirstDayMonth(),
            dataFinal: this.dateService.getLastDayMonth(),
            nomeContrato: null,
            situacao: 0,
            registros: 300,
            cliente: null,
            carteira: 'T',
            codMaterial: null,
            codLinha: null,
            codClasse: null,
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
                            if (formKey === 'dataInicial' || formKey === 'dataFinal') {
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
    onFieldError(field) {
        if (this.onFieldInvalid(field)) {
            return 'is-invalid';
        }
        return '';
    }
    onFieldInvalid(field) {
        field = this.form.get(field);
        if (field.errors != null) {
            if (field.errors.hasOwnProperty('required') && field.touched) {
                return 'required';
            }
        }
        return '';
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
    checkValidatorsData() {
        let validation = true;
        let dataInicial = this.form.value.dataInicial;
        let dataFinal = this.form.value.dataFinal;
        if (dataInicial > dataFinal) {
            validation = false;
        }
        return validation;
    }
    onFilter() {
        let confirm = false;
        if (!this.checkValidatorsData()) {
            this.pnotifyService.notice('Data Inicial não pode ser maior que Data Final');
        }
        else {
            confirm = true;
        }
        if (this.form.valid && confirm == true) {
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
    verificaParams() {
        let params = {};
        if (this.form.value.nomeContrato) {
            params.nomeContrato = this.form.value.nomeContrato;
        }
        if (this.form.value.dataInicial) {
            params.dataInicial = this.dateService.convertToUrlDate(new Date(this.form.value.dataInicial));
        }
        if (this.form.value.dataFinal) {
            params.dataFinal = this.dateService.convertToUrlDate(new Date(this.form.value.dataFinal));
        }
        if (this.form.value.cliente) {
            params.cliente = this.form.value.cliente;
        }
        if (this.form.value.carteira) {
            params.carteira = this.form.value.carteira;
        }
        if (this.form.value.codMaterial) {
            params.codMaterial = this.form.value.codMaterial;
        }
        if (this.form.value.codLinha) {
            params.codLinha = this.form.value.codLinha;
        }
        if (this.form.value.codClasse) {
            params.codClasse = this.form.value.codClasse;
        }
        if (this.form.value.situacao) {
            params.situacao = this.form.value.situacao;
        }
        if (this.form.value.registros) {
            params.registros = this.form.value.registros;
        }
        return params;
    }
    search(params) {
        if (!this.loaderFullScreen)
            this.loaderNavbar = true;
        this.dados = [];
        this.dadosPagination = [];
        this.dadosLoaded = false;
        this.dadosEmpty = false;
        this.contratosComerciaisService
            .getListaContratos(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(() => {
            this.loaderFullScreen = false;
            this.loaderNavbar = false;
        }))
            .subscribe({
            next: (response) => {
                if (response.hasOwnProperty('success') && response.success === true) {
                    this.dados = response.data;
                    this.dadosPagination = this.dados.slice(0, this.itemsPerPage);
                    this.totalItems = this.dados.length;
                    this.dadosLoaded = true;
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
    classStatusBorder(item) {
        let borderClass;
        if (item.codSituacao === 1) {
            borderClass = 'border-success';
        }
        else if (item.codSituacao === 3) {
            borderClass = 'border-danger';
        }
        else if (item.codSituacao === 4) {
            borderClass = 'border-primary';
        }
        else if (item.codSituacao === 2) {
            borderClass = 'border-warning';
        }
        return borderClass;
    }
    onPageChanged(event) {
        const startItem = (event.page - 1) * event.itemsPerPage;
        const endItem = event.page * event.itemsPerPage;
        this.dadosPagination = this.dados.slice(startItem, endItem);
        this.scrollToFilter.nativeElement.scrollIntoView({
            behavior: 'instant',
        });
    }
    onChangeLinha(codLinha, reload) {
        if (!reload) {
            this.form.controls.codClasse.reset();
            this.form.controls.codClasse.setValue(null);
            this.form.controls.codClasse.enable();
            this.form.controls.codClasse.updateValueAndValidity();
            this.form.controls.codMaterial.reset();
            this.form.controls.codMaterial.disable();
            this.form.controls.codMaterial.setValue(null);
            this.form.controls.codMaterial.updateValueAndValidity();
        }
        this.filteredClasses = this.classes.filter((value) => value.idLinha == codLinha);
    }
    onChangeClasse(codClasse) {
        this.form.controls.codMaterial.reset();
        this.form.controls.codMaterial.enable();
        this.form.controls.codMaterial.setValue(0);
        this.form.controls.codMaterial.updateValueAndValidity();
        this.getMateriais(codClasse);
    }
    getSituacao() {
        this.contratosComerciaisService
            .getSituacao()
            .subscribe({
            next: (response) => {
                if (response.success === true) {
                    this.situacoes = response.data;
                    this.situacoes.unshift({
                        codSituacao: 0,
                        nomeSituacao: 'EXIBIR TODOS',
                    });
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
    getMateriais(codClasse) {
        if (typeof codClasse !== 'undefined' && codClasse !== null) {
            this.materiaisLoader = true;
            this.materiais = [];
            this.comercialService
                .getMateriais({
                codClasse: codClasse,
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(() => {
                this.materiaisLoader = false;
            }))
                .subscribe({
                next: (response) => {
                    if (response.hasOwnProperty('success') &&
                        response.success === true) {
                        this.materiais = response.data;
                        this.materiais.unshift({
                            codigoMaterial: 0,
                            codigoDescricaoMaterial: 'EXIBIR TODOS',
                        });
                        this.formMateriais.controls.codMaterial.setValue(0);
                    }
                    else if (response.hasOwnProperty('success') &&
                        response.success === false &&
                        response.hasOwnProperty('mensagem')) {
                        this.pnotifyService.error(response.mensagem);
                    }
                    else {
                        this.pnotifyService.error();
                    }
                },
                error: (error) => {
                    if (error['error'].hasOwnProperty('mensagem')) {
                        this.pnotifyService.error(error.error.mensagem);
                    }
                    else {
                        this.pnotifyService.error();
                    }
                }
            });
        }
    }
    setEnderecoSelecionado() {
        this.enderecoSelecionado = {
            idCliente: -1,
            codEndereco: null,
            razaoSocial: null,
            codSituacao: null,
            situacao: null,
            codUsuario: null,
            nomeUsuario: null,
            dataCadastro: null,
        };
    }
    onDetailPanelEmitter() {
        this.showDetailPanelSubscription = this.detailPanelService.config.subscribe((event) => {
            this.showDetailPanel = event.showing;
        });
    }
    onDetails(detalhes) {
        this.loaderNavbar = true;
        this.detailPanelService.show();
        this.detailPanelMateriais = [];
        this.detailPanelCliente = [];
        this.detailPanelData = [];
        this.contratosComerciaisService
            .getDetailPanel(detalhes.codContrato)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(() => {
            setTimeout(() => {
                this.loaderNavbar = false;
            }, 500);
        }))
            .subscribe({
            next: (response) => {
                if (response.success === true) {
                    this.detailPanelData = response.data;
                    this.detailPanelMateriais = response.data[0].materiais;
                    this.detailPanelCliente = response.data[0].codCliente;
                    this.loaderNavbar = false;
                    this.detailPanelService.loadedFinished(false);
                }
            },
            error: (error) => {
                if (error['error'].hasOwnProperty('mensagem')) {
                    this.pnotifyService.error(error.error.mensagem);
                }
                else {
                    this.pnotifyService.error();
                }
            }
        });
    }
    onEdit(item) {
        this.router.navigate(['../editar', item.codContrato], {
            relativeTo: this.activatedRoute,
        });
    }
    convertMysqlTime(time) {
        return this.dateService.convertMysqlTime(time);
    }
    // modal
    onAprovar(item) {
        this.confirmAprovacao().subscribe((response) => response ? this.contratosComerciaisService
            .postAprovacao(item)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(() => {
            this.loaderFullScreen = false;
        }))
            .subscribe({
            next: (response) => {
                if (response.success === true) {
                    this.pnotifyService.success('Contrato aprovado com sucesso.');
                    this.onFilter();
                }
            },
            error: (error) => {
                this.pnotifyService.error();
                this.location.back();
            }
        }) : null);
    }
    setFormReprovar(item) {
        this.formReprovar = this.formBuilder.group({
            codContrato: [item.codContrato],
            descMotivo: [item.motivoReprovacao]
        });
    }
    onReprovar() {
        this.contratosComerciaisService
            .postReprovacao(this.formReprovar.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(() => {
            this.loaderFullScreen = false;
        }))
            .subscribe({
            next: (response) => {
                if (response.success === true) {
                    this.pnotifyService.success('Contrato reprovado com sucesso.');
                    this.onFilter();
                }
            },
            error: (error) => {
                this.pnotifyService.error();
                this.location.back();
            }
        });
    }
    confirmAprovacao() {
        return this.confirmModalService.showConfirm('aprovar', 'Confirmar aprovação', 'Deseja realmente prosseguir com a aprovação do contrato?', 'Cancelar', 'Confirmar');
    }
    openModalReprovar(reprovar) {
        this.modalRef = this.bsModalService.show(reprovar);
    }
    closeModal(modalRef) {
        this.modalRef.hide();
    }
    onRefresh() {
        this.setFormValueFilter();
        this.checkRouterParams();
    }
};
ComercialGestaoContratosComerciaisListaComponent.ctorParameters = () => [
    { type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__["BsLocaleService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_20__["PNotifyService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_21__["AtividadesService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_22__["TitleService"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_23__["DateService"] },
    { type: _services_vendedores_service__WEBPACK_IMPORTED_MODULE_19__["ComercialVendedoresService"] },
    { type: _comercial_service__WEBPACK_IMPORTED_MODULE_18__["ComercialService"] },
    { type: _shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_17__["AuthService"] },
    { type: _ciclo_vendas_pedidos_producao_telas_formulario_formulario_service__WEBPACK_IMPORTED_MODULE_6__["ComercialCicloVendasPedidosProducaoTelasFormularioService"] },
    { type: _contratos_comerciais_contratos_comerciais_service__WEBPACK_IMPORTED_MODULE_7__["ComercialGestaoContratosComerciaisService"] },
    { type: _cadastros_materiais_grupos_grupos_service__WEBPACK_IMPORTED_MODULE_5__["ComercialCadastrosMateriaisGrupoService"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__["BsModalService"] },
    { type: _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_4__["ConfirmModalService"] },
    { type: _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_3__["DetailPanelService"] }
];
ComercialGestaoContratosComerciaisListaComponent.propDecorators = {
    scrollToFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChild"], args: ['scrollToFilter', {},] }]
};
ComercialGestaoContratosComerciaisListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"])({
        selector: 'contratos-comerciais',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__["BsLocaleService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
        _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_20__["PNotifyService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_21__["AtividadesService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_22__["TitleService"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_23__["DateService"],
        _services_vendedores_service__WEBPACK_IMPORTED_MODULE_19__["ComercialVendedoresService"],
        _comercial_service__WEBPACK_IMPORTED_MODULE_18__["ComercialService"],
        _shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_17__["AuthService"],
        _ciclo_vendas_pedidos_producao_telas_formulario_formulario_service__WEBPACK_IMPORTED_MODULE_6__["ComercialCicloVendasPedidosProducaoTelasFormularioService"],
        _contratos_comerciais_contratos_comerciais_service__WEBPACK_IMPORTED_MODULE_7__["ComercialGestaoContratosComerciaisService"],
        _cadastros_materiais_grupos_grupos_service__WEBPACK_IMPORTED_MODULE_5__["ComercialCadastrosMateriaisGrupoService"],
        ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__["BsModalService"],
        _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_4__["ConfirmModalService"],
        _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_3__["DetailPanelService"]])
], ComercialGestaoContratosComerciaisListaComponent);



/***/ }),

/***/ "fZd8":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/gestao/contratos-comerciais/formulario/modal/selecionar/selecionar.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: ComercialGestaoContratosComerciaisFormularioModalSelecionarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialGestaoContratosComerciaisFormularioModalSelecionarComponent", function() { return ComercialGestaoContratosComerciaisFormularioModalSelecionarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_selecionar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./selecionar.component.html */ "u2yr");
/* harmony import */ var _selecionar_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selecionar.component.scss */ "LzM3");
/* harmony import */ var src_app_modules_comercial_services_vendedores_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/comercial/services/vendedores.service */ "4xRd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "8Y7J");









let ComercialGestaoContratosComerciaisFormularioModalSelecionarComponent = class ComercialGestaoContratosComerciaisFormularioModalSelecionarComponent {
    /* Pagination */
    constructor(formBuilder, pnotifyService, bsModalRef, comercialService) {
        this.formBuilder = formBuilder;
        this.pnotifyService = pnotifyService;
        this.bsModalRef = bsModalRef;
        this.comercialService = comercialService;
        this.loaderNavbar = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
        this.cliente = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
        this.fecharModal = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
        this.noClientes = true;
        this.clientes = [];
        /* Pagination */
        this.itemsPerPage = 10;
        this.begin = 0;
        this.end = 20;
    }
    ngOnInit() {
        this.setFormBuilder();
    }
    onClose() {
        this.fecharModal.emit(true);
    }
    getClientes(params) {
        const _params = params !== null && params !== void 0 ? params : {};
        const _obj = this.formClientes.value;
        this.loadingClientes = true;
        if (_obj['pesquisa'])
            _params[_obj['buscarPor']] = _obj['pesquisa'];
        this.comercialService
            .getCarteiraClientes(_params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
            this.loadingClientes = false;
        }))
            .subscribe({
            next: (response) => {
                if (response.success === true) {
                    this.noClientes = false;
                    this.clientes = response.data;
                }
                else {
                    this.noClientes = true;
                    this.pnotifyService.notice('Nenhum cliente encontrado!');
                }
            },
            error: (error) => {
                this.pnotifyService.error();
            }
        });
    }
    setCliente(cliente) {
        if (cliente.nomeSituacao == 'Arquivo') {
            this.pnotifyService.notice('Cliente arquivado, favor entrar em contato com o Marketing');
        }
        else {
            this.cliente.emit(cliente);
            this.onClose();
        }
    }
    setFormBuilder() {
        this.formClientes = this.formBuilder.group({
            buscarPor: ['NM_CLIE'],
            pesquisa: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            NM_CLIE: [null],
            registros: [this.itemsPerPage],
        });
    }
};
ComercialGestaoContratosComerciaisFormularioModalSelecionarComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["BsModalRef"] },
    { type: src_app_modules_comercial_services_vendedores_service__WEBPACK_IMPORTED_MODULE_3__["ComercialVendedoresService"] }
];
ComercialGestaoContratosComerciaisFormularioModalSelecionarComponent.propDecorators = {
    cliente: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"] }],
    fecharModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"] }]
};
ComercialGestaoContratosComerciaisFormularioModalSelecionarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"])({
        selector: 'comercial-gestao-contratos-comerciais-formulario-modal-selecionar',
        template: _raw_loader_selecionar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_selecionar_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"],
        ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["BsModalRef"],
        src_app_modules_comercial_services_vendedores_service__WEBPACK_IMPORTED_MODULE_3__["ComercialVendedoresService"]])
], ComercialGestaoContratosComerciaisFormularioModalSelecionarComponent);



/***/ }),

/***/ "hgqU":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/comercial/gestao/contratos-comerciais/formulario/formulario.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: ComercialGestaoContratosComerciaisFormularioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialGestaoContratosComerciaisFormularioComponent", function() { return ComercialGestaoContratosComerciaisFormularioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./formulario.component.html */ "Q2P+");
/* harmony import */ var _formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formulario.component.scss */ "7cUI");
/* harmony import */ var _cadastros_formas_pagamento_formas_pagamento_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../cadastros/formas-pagamento/formas-pagamento.service */ "tVei");
/* harmony import */ var _contratos_comerciais_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../contratos-comerciais.service */ "pK9/");
/* harmony import */ var _ciclo_vendas_pedidos_producao_telas_formulario_formulario_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../ciclo-vendas/pedidos-producao-telas/formulario/formulario.service */ "8O77");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var ng_brazil__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-brazil */ "hTrW");
/* harmony import */ var _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../../../../shared/services/core/date.service */ "Rk3r");
/* harmony import */ var _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../../../../../shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _comercial_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../../../comercial.service */ "VgqD");
/* harmony import */ var _shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./../../../../../shared/services/core/auth.service */ "yxCR");
/* harmony import */ var _cadastros_materiais_grupos_grupos_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./../../../cadastros/materiais/grupos/grupos.service */ "4YhS");
/* harmony import */ var _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./../../../../../shared/modules/confirm-modal/confirm-modal.service */ "FOez");
/* harmony import */ var _modal_detalhes_cliente_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modal/detalhes/cliente.service */ "tnBs");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");
/* harmony import */ var _services_clientes_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../services/clientes.service */ "8ouN");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-bootstrap/chronos */ "xj/R");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-bootstrap/locale */ "0b5p");











// ng-brazil

// Interfaces teste
// Services









// ngx-bootstrap




Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_22__["defineLocale"])('pt-br', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_24__["ptBrLocale"]);
let ComercialGestaoContratosComerciaisFormularioComponent = class ComercialGestaoContratosComerciaisFormularioComponent {
    constructor(formBuilder, activatedRoute, dateService, localeService, pnotifyService, confirmModalService, location, contratosComerciaisService, router, comercialService, materiaisGrupoService, authService, formularioService, formaPagamentoService, clientesService, modalService, clienteDetalhesService, titleService) {
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.dateService = dateService;
        this.localeService = localeService;
        this.pnotifyService = pnotifyService;
        this.confirmModalService = confirmModalService;
        this.location = location;
        this.contratosComerciaisService = contratosComerciaisService;
        this.router = router;
        this.comercialService = comercialService;
        this.materiaisGrupoService = materiaisGrupoService;
        this.authService = authService;
        this.formularioService = formularioService;
        this.formaPagamentoService = formaPagamentoService;
        this.clientesService = clientesService;
        this.modalService = modalService;
        this.clienteDetalhesService = clienteDetalhesService;
        this.titleService = titleService;
        this.permissoesAcesso = {
            acessoClientes: false,
            historicoExclusao: false,
            duplicataCarteira: false,
        };
        this.user = this.authService.getCurrentUser();
        this.MASKS = ng_brazil__WEBPACK_IMPORTED_MODULE_11__["MASKS"];
        this.loaderFullScreen = true;
        this.breadCrumbTree = [];
        this.tableConfigAssocMateriais = {
            hover: false,
        };
        this.tableConfigMateriais = {
            fixedHeader: false,
            bodyHeight: 243,
        };
        this.desativado = false;
        this.loadingModal = false;
        this.changeTipoServico = false;
        this.changeTipoMaterial = false;
        this.showDashboard = false;
        this.showFilter = false;
        this.showPermissionDenied = false;
        this.dadosLoaded = false;
        this.dadosEmpty = false;
        this.toggle = false;
        this.searching = false;
        this.firstSearch = false;
        this.formChanged = false;
        this.submittingForm = false;
        this.showMateriais = true;
        this.materiaisListaLoaded = false;
        this.materiaisListaEmpty = false;
        this.showGrupos = true;
        this.toggleAll = false;
        this.modalValues = [];
        this.profile = {};
        this.dados = [];
        this.materiais = [];
        this.clientes = [];
        this.situacoes = [];
        this.coordenadores = [];
        this.vendedores = [];
        this.equipes = [];
        this.materiaisLista = [];
        this.urlAnexo = [];
        this.linhas = [];
        this.classes = [];
        this.filteredClasses = [];
        this.tipoFrete = [];
        this.formaPagamento = [];
        this.tipoServico = [];
        this.grupoEconomico = [];
        this.enderecos = [];
        this.empresas = [];
        this.codClasse = null;
        this.codClientErrors = false;
        this.tableConfigAssocGrupos = {
            fixedHeader: false,
            bodyHeight: 230,
            hover: false,
        };
        this.tableConfigPrecos = {
            fixedHeader: false,
            bodyHeight: 230,
            hover: false,
        };
        this.tableConfigAnexos = {
            fixedHeader: false,
            bodyHeight: 230,
            hover: false,
        };
        this.showAnexos = false;
        this.formData = [];
        this.maxSize = 10;
        this.itemsPerPage = 300;
        this.currentPage = 1;
        this.totalItems = 0;
        this.visualizar = false;
        this.editar = false;
        this.showVisual = false;
        this.changeTipo = false;
        this.localeService.use('pt-br');
        this.pnotifyService.getPNotify();
    }
    ngOnInit() {
        this.titleService.setTitle('Gestão');
        this.setFormFilter();
        this.onFormSubscription();
        this.getTipoServico();
        this.getTipoFrete();
        this.getFormaPagamento();
        this.setBreadCrumb();
        this.getSituacao();
        this.setFormMateriais();
        this.getFilterValues();
        this.setLoaderEvents();
    }
    ngOnDestroy() {
        this.unsetLoaderEvents();
    }
    setBreadCrumb() {
        this.activatedRoute.params.subscribe((params) => {
            if (params.id) {
                this.appTitle = 'Editar Contrato comercial';
                this.action = 'update';
                this.editar = true;
            }
            else {
                this.appTitle = 'Novo Contrato comercial';
                this.action = 'create';
            }
            this.breadCrumbTree = [
                {
                    descricao: 'Home',
                    routerLink: '/comercial/home',
                },
                {
                    descricao: 'Gestão',
                    routerLink: `/comercial/gestao/${params.idSubModulo}`,
                },
                {
                    descricao: 'Contratos Comerciais',
                    routerLink: `/comercial/gestao/${params.idSubModulo}/contratos-comerciais/lista`,
                },
                {
                    descricao: this.appTitle,
                },
            ];
        });
    }
    getEnderecos(id, params) {
        this.loaderEnderecos = true;
        this.enderecos = [];
        this.clientesService
            .getEnderecos(id, params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(() => {
            this.loaderEnderecos = false;
        }))
            .subscribe((response) => {
            this.enderecos = response['data']['enderecos'];
            this.enderecos.map((endereco) => {
                endereco.enderecoAjustado = endereco === null || endereco === void 0 ? void 0 : endereco.endereco;
                if (endereco === null || endereco === void 0 ? void 0 : endereco.codLocal) {
                    endereco.enderecoAjustado += `, ${endereco === null || endereco === void 0 ? void 0 : endereco.codLocal}`;
                }
                if (endereco === null || endereco === void 0 ? void 0 : endereco.bairro) {
                    endereco.enderecoAjustado += `, ${endereco === null || endereco === void 0 ? void 0 : endereco.bairro}`;
                }
                if (endereco === null || endereco === void 0 ? void 0 : endereco.cidade) {
                    endereco.enderecoAjustado += `, ${endereco === null || endereco === void 0 ? void 0 : endereco.cidade}`;
                }
                if (endereco === null || endereco === void 0 ? void 0 : endereco.uf) {
                    endereco.enderecoAjustado += `, ${endereco === null || endereco === void 0 ? void 0 : endereco.uf}`;
                }
            });
        });
    }
    getClientesGrupoEconomico(idCliente) {
        this.loaderGrupoEconomico = true;
        this.clientesService
            .getClientesGrupoEconomico(idCliente)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(() => (this.loaderGrupoEconomico = false)))
            .subscribe({
            next: (response) => {
                if (response) {
                    this.grupoEconomico = response.data;
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
    onFormSubscription() {
        var _a, _b, _c, _d, _e, _f;
        (_b = (_a = this.form.get('codCliente')) === null || _a === void 0 ? void 0 : _a.valueChanges) === null || _b === void 0 ? void 0 : _b.subscribe((codCliente) => {
            this.getEnderecos(codCliente, { localEntrega: 1 });
            this.getClientesGrupoEconomico(codCliente);
        });
        (_d = (_c = this.form
            .get('codTipoServico')) === null || _c === void 0 ? void 0 : _c.valueChanges) === null || _d === void 0 ? void 0 : _d.subscribe((codTipoServico) => {
            codTipoServico == 1
                ? this.form
                    .get('codEnderecoEntrega')
                    .setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required])
                : this.form.get('codEnderecoEntrega').setValidators([]);
            this.form.get('codEnderecoEntrega').updateValueAndValidity();
        });
        (_f = (_e = this.form
            .get('codEnderecoEntrega')) === null || _e === void 0 ? void 0 : _e.valueChanges) === null || _f === void 0 ? void 0 : _f.subscribe((codEnderecoEntrega) => {
            const endereco = this.enderecos.filter((endereco) => (endereco === null || endereco === void 0 ? void 0 : endereco.id) == codEnderecoEntrega);
            if (endereco.length == 1) {
                this.form.get('uf').setValue(endereco[0]['uf']);
            }
        });
    }
    // Formulário Preenchido para edição ou novo formulário
    setFormFilter() {
        const resolver = this.activatedRoute.snapshot.data.detalhes;
        if (resolver.success === true) {
            const detalhes = resolver.data[0];
            this.showVisual = true;
            if (detalhes.codTipoServico === 1) {
                this.changeTipoServico = true;
            }
            var codCliente = null;
            if (detalhes.codCliente > 0 &&
                (detalhes.codCliente != null || detalhes.codCliente != undefined)) {
                codCliente = detalhes.codCliente;
                this.getEnderecos(codCliente, { localEntrega: 1 });
                this.getClientesGrupoEconomico(codCliente);
            }
            this.form = this.formBuilder.group({
                codContrato: [detalhes.codContrato],
                codEmpresa: [detalhes.codEmpresa, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
                codCliente: [codCliente],
                codRazaoSocial: [detalhes.codRazaoSocial],
                nomeContrato: [detalhes.nomeContrato, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
                dataInicialContrato: [
                    detalhes.codContrato == null
                        ? this.dateService.getToday()
                        : this.dateService.convertStringToDate(detalhes.dataInicialVigencia, 'usa'),
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
                ],
                dataFinalContrato: [
                    detalhes.codContrato == null
                        ? this.dateService.getToday()
                        : this.dateService.convertStringToDate(detalhes.dataFinalVigencia, 'usa'),
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
                ],
                codSituacao: this.showVisual === true ? [detalhes.codSituacao] : 1,
                // this.visualizar && this.action === 'update' ? : 2,
                codPeso: this.changeTipoServico === false
                    ? [detalhes.qtdeMaximaConsumo, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]]
                    : [detalhes.qtdeMaximaConsumo],
                codTipoServico: [detalhes.codTipoServico, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
                grupoEconomico: [detalhes.grupoEconomico],
                codFormaPagamento: [detalhes.codFormaPagamento, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
                codTipoFrete: [detalhes.codTipoFrete],
                codEnderecoEntrega: [detalhes.codEnderecoEntrega],
                uf: [null],
                precoAps: this.changeTipoServico === false ? 0 : [detalhes.valorServicoAps],
                valorServico: this.changeTipoServico === false
                    ? 0
                    : [detalhes.valorServico, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
                assocMateriais: this.formBuilder.array([]),
                anexos: this.formBuilder.array([]),
            });
            this.setMateriais(detalhes.materiais);
            if (detalhes.codContrato != null) {
                this.getAnexos(detalhes.codContrato);
            }
            this.visualizar = false;
            if (detalhes.codSituacao != 3 &&
                detalhes.codSituacao != null &&
                detalhes.codSituacao != 1) {
                // this.profileDisabled();
                this.visualizar = true;
            }
        }
        else {
            this.pnotifyService.error();
            this.location.back();
        }
        this.showVisual = false;
    }
    getAnexos(codContrato) {
        this.loaderNavbar = true;
        this.showAnexos = false;
        this.contratosComerciaisService
            .getAnexos(codContrato)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(() => {
            this.loaderNavbar = false;
            this.showAnexos = true;
        }))
            .subscribe({
            next: (response) => {
                if (response.hasOwnProperty('success') && response.success === true) {
                    this.setAnexos(response.data);
                    this.urlAnexo = response.data;
                }
            },
            error: (error) => {
                if (error['error'].hasOwnProperty('mensagem')) {
                    this.pnotifyService.error(error.error.mensagem);
                }
                else {
                    this.pnotifyService.error();
                }
            }
        });
    }
    setAnexos(anexos) {
        if (anexos.length > 0) {
            for (let i = 0; i < anexos.length; i++) {
                this.onAddAnexos(anexos[i], true);
            }
        }
    }
    get anexos() {
        return this.form.get('anexos');
    }
    onAddAnexos(anexo, manipulateForm) {
        if (this.checkAnexoExists(anexo) === false) {
            this.anexos.push(this.formBuilder.group({
                codAnexo: [anexo.codAnexo],
                nomeAnexo: [anexo.nomeAnexo],
                linkAnexo: [anexo.linkAnexo],
                urlAnexo: [anexo.urlAnexo],
            }));
            if (manipulateForm) {
                this.form.markAsTouched();
                this.form.markAsDirty();
            }
        }
    }
    checkAnexoExists(anexo) {
        return this.form.value.anexos.some((el) => {
            return el.codAnexo === anexo.codAnexo || el.nomeAnexo == anexo.nomeAnexo;
        });
    }
    appendFile(files) {
        if (files.length === 0)
            return;
        const fd = new FormData();
        fd.append('file', files[0]);
        this.formData.push(fd);
        this.anexos.push(this.formBuilder.group({
            nomeAnexo: [files[0]['name']],
        }));
        if (this.showAnexos === false) {
            this.showAnexos = true;
        }
    }
    onPostAnexos(codContrato) {
        if (this.formData.length === 0) {
            /* this.pnotifyService.notice('Erro'); */
            return;
        }
        /* const id = this.form.value.codMaterial; */
        this.formData.forEach((element, index) => {
            this.contratosComerciaisService
                .postAnexos(element, codContrato)
                .subscribe();
        });
    }
    onDeleteAnexo(codAnexo, index) {
        this.confirmDelete().subscribe((r) => {
            if (codAnexo) {
                this.loaderNavbar = true;
                this.contratosComerciaisService
                    .deleteAnexo(codAnexo)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(() => {
                    this.loaderNavbar = false;
                }))
                    .subscribe({
                    next: (response) => {
                        if (response.hasOwnProperty('success') &&
                            response.success === true) {
                            r ? this.deleteDocumento(index) : null;
                        }
                        else if (response.hasOwnProperty('success') &&
                            response.success === false &&
                            response.hasOwnProperty('mensagem')) {
                            this.pnotifyService.error(response.mensagem);
                        }
                        else {
                            this.pnotifyService.error();
                        }
                    },
                    error: (error) => {
                        if (error['error'].hasOwnProperty('mensagem')) {
                            this.pnotifyService.error(error.error.mensagem);
                        }
                        else {
                            this.pnotifyService.error();
                        }
                    }
                });
            }
            else {
                r ? this.deleteDocumento(index) : null;
                this.formData.splice(index, 1);
            }
        });
    }
    deleteDocumento(index) {
        this.anexos.removeAt(index);
        this.form.markAsTouched();
        this.form.markAsDirty();
    }
    checkValidatorsData() {
        let validation = true;
        var dtInicialContrato = this.form.value.dataInicialContrato;
        var dtFinalContrato = this.form.value.dataFinalContrato;
        for (let i = 0; i < this.assocMateriais.value.length; i++) {
            var dtInicialMateriais = this.assocMateriais.value[i].dtInicial;
            var dtFinalMateriais = this.assocMateriais.value[i].dtFinal;
            if (dtInicialMateriais > dtFinalMateriais) {
                validation = false;
                this.pnotifyService.error('A Data Inicial do material não pode ser maior que a Data Final.');
            }
            else if ((dtInicialMateriais < dtInicialContrato &&
                dtFinalContrato > dtInicialContrato) ||
                (dtFinalMateriais > dtFinalContrato &&
                    dtInicialContrato < dtFinalContrato)) {
                validation = false;
                this.pnotifyService.error('Verifique se as datas dos materiais estão em acordo com as datas do contrato.');
            }
        }
        if (dtInicialContrato > dtFinalContrato) {
            validation = false;
            this.pnotifyService.error('A Data Inicial do contrato não pode ser mario que a Data Final.');
        }
        else
            return validation;
    }
    getFilterValues() {
        this.materiaisGrupoService
            .getFilterValues()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(() => {
            this.loaderFullScreen = false;
        }))
            .subscribe((response) => {
            if (response[0].responseCode === 200) {
                this.linhas = response[0].result;
            }
            else {
                this.pnotifyService.error();
                this.location.back();
            }
            if (response[1].responseCode === 200) {
                this.classes = response[1].result;
            }
            else {
                this.pnotifyService.error();
                this.location.back();
            }
        });
        this.comercialService
            .getEmpresas({ tipo: 'faturamento' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(() => {
            this.loaderFullScreen = false;
        }))
            .subscribe({
            next: (response) => {
                this.empresas = response.result;
            },
            error: (error) => {
                this.pnotifyService.error('Ocorreu um erro ao carregar filtros.');
                this.location.back();
            }
        });
    }
    onCancel() {
        this.location.back();
    }
    onInput() {
        this.formChanged = true;
    }
    //Ação de Edição ou novo Formulário
    onSubmit(codSituacao) {
        this.form.get('codSituacao').setValue(codSituacao);
        let record = this.form.value;
        if (this.form.value.grupoEconomico != null) {
            record.codCliente = [
                record.codCliente,
                ...record.grupoEconomico,
            ].toString();
        }
        if (this.action === 'update' &&
            this.form.valid &&
            this.checkValidatorsData()) {
            this.onPostAnexos(this.form.value.codContrato);
            this.contratosComerciaisService
                .save(record, this.action)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(() => {
                this.loaderNavbar = false;
                this.submittingForm = false;
            }))
                .subscribe({
                next: (response) => {
                    if (response.hasOwnProperty('success') &&
                        response.success === true) {
                        this.onPostAnexos(this.form.value.codContrato);
                        //this.form.reset();
                        this.formChanged = false;
                        this.pnotifyService.success();
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
            if (this.checkFormValidation() &&
                this.form.valid &&
                this.checkValidatorsData()) {
                if (this.form.value.assocMateriais.length > 0) {
                    this.loaderNavbar = true;
                    this.submittingForm = true;
                    this.contratosComerciaisService
                        .save(record, this.action)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(() => {
                        this.loaderNavbar = false;
                        this.submittingForm = false;
                    }))
                        .subscribe({
                        next: (response) => {
                            var _a;
                            if (response.hasOwnProperty('success') &&
                                response.success === true) {
                                this.onPostAnexos((_a = response.data) === null || _a === void 0 ? void 0 : _a.codContrato);
                                //this.form.reset();
                                this.formChanged = false;
                                this.pnotifyService.success();
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
                    if (this.checkValidatorsData() === false) {
                        this.pnotifyService.notice('Associe pelo menos um material.');
                    }
                }
            }
            else {
                if (this.checkValidatorsData() === false) {
                    this.pnotifyService.notice('Selecione um material.');
                }
            }
        }
    }
    onChangeServico() {
        this.changeTipoServico = false;
        if (this.form.value.codTipoServico === 1) {
            this.changeTipoServico = true;
            this.formMateriais.get('codLinha').setValue(1);
            this.onChangeLinha(1);
            this.formMateriais.get('codClasse').setValue(80);
            this.onChangeClasse(80);
            this.form
                .get('valorServico')
                .setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].min(0.01)]);
            this.form.controls.valorServico.updateValueAndValidity();
        }
        else if (this.form.value.codTipoServico === 2) {
            this.changeTipoServico = false;
            this.form.get('codPeso').setValue('0');
            this.formMateriais.get('codLinha').reset();
            this.formMateriais.get('codClasse').reset();
            this.formMateriais.get('codMaterial').reset();
            this.formMateriais.get('codClasse').disable();
            this.formMateriais.get('codMaterial').disable();
            this.form.get('valorServico').setValidators([]);
            this.form.controls.valorServico.updateValueAndValidity();
        }
        else {
            this.formMateriais.get('codLinha').reset();
            this.formMateriais.get('codClasse').reset();
            this.formMateriais.get('codMaterial').reset();
            this.formMateriais.get('codClasse').disable();
            this.formMateriais.get('codMaterial').disable();
        }
    }
    // Get perfil
    getPerfil() {
        this.comercialService
            .getPerfil()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(() => { }))
            .subscribe({
            next: (response) => {
                if (response.responseCode === 200) {
                    this.profile = response.result;
                    if (this.profile.coordenador === true ||
                        (this.profile.gestor === true &&
                            this.profile.vendedor === true &&
                            this.profile.coordenador === false &&
                            this.profile.gestor === false &&
                            this.profile.hasVinculoOperadores === true)) {
                        this.checkRouterParams();
                    }
                    else if (this.profile.vendedor === true &&
                        this.profile.coordenador === false &&
                        this.profile.gestor === false &&
                        this.profile.hasVinculoOperadores === true) {
                        this.idVendedor = this.user.info.idVendedor;
                        this.idEscritorio = this.user.info.idEscritorio;
                        this.form
                            .get('codVendedor')
                            .setValue(parseInt(this.user.info.idVendedor));
                        this.form
                            .get('codGerencia')
                            .setValue(parseInt(this.user.info.idEscritorio));
                        this.desativado = true;
                        this.showDashboard = true;
                    }
                    else {
                        this.showPermissionDenied = true;
                    }
                }
                else {
                    this.showPermissionDenied = true;
                }
            },
            error: (error) => {
                this.showPermissionDenied = true;
            }
        });
    }
    checkRouterParams() {
        let formValue = {
            nomeContrato: null,
            dataInicial: this.dateService.getFirstDayMonth(),
            dataFinal: this.dateService.getLastDayMonth(),
            cliente: null,
            vendedor: 0,
            situacao: 0,
            registros: 300,
        };
        this.activatedRouteSubscription = this.activatedRoute.queryParams.subscribe((queryParams) => {
            if (Object.keys(queryParams).length > 0) {
                let params = atob(queryParams['q']);
                Object.keys(formValue).forEach((formKey) => {
                    Object.keys(params).forEach((paramKey) => {
                        if (formKey == paramKey &&
                            formValue[formKey] != params[paramKey]) {
                            if (formKey === 'dataInicial' || formKey === 'dataFinal') {
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
        });
        this.activatedRouteSubscription.unsubscribe();
        return formValue;
    }
    getTipoFrete() {
        this.contratosComerciaisService.getTiposFrete().subscribe({
            next: (response) => {
                if (response) {
                    this.tipoFrete = response.data;
                    this.tipoFrete.unshift({
                        codigo: 0,
                        descricao: 'Sem Frete',
                    });
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
    getTipoServico() {
        this.contratosComerciaisService.getTipoServico().subscribe({
            next: (response) => {
                if (response) {
                    this.tipoServico = response.data.filter((tipoServico) => (tipoServico === null || tipoServico === void 0 ? void 0 : tipoServico.nomeTipoServico) == 'Outros');
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
    getFormaPagamento() {
        const params = {
            codSituacao: 1,
        };
        this.formaPagamentoService.getListaFormasPagamento(params).subscribe({
            next: (response) => {
                if (response) {
                    this.formaPagamento = response.data;
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
    setClienteSubscription() {
        this.codClienteSubscription = this.formularioService.codCliente.subscribe((codCliente) => {
            this.form.controls.codCliente.setValue(codCliente);
            this.onChangeCliente(codCliente, 'user');
        });
    }
    onChangeCliente(codCliente, source) {
        this.form.controls.codCliente.setValue(codCliente);
        this.codClientErrors = false;
    }
    onLoadCliente(event) {
        this.isCarteiraClientesLoaded = event;
    }
    checkFormValidation() {
        let isValid = true;
        if (this.form.getRawValue().id === null) {
            isValid = false;
        }
        return isValid;
    }
    navegarAnexo(anexo) {
        this.router
            .navigate([], {
            relativeTo: this.activatedRoute,
        })
            .then((result) => {
            window.open(`${anexo.value.urlAnexo}`, '_blank');
        });
    }
    setFormMateriais() {
        this.formMateriais = this.formBuilder.group({
            codLinha: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
            codClasse: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
            codMaterial: [null],
        });
        this.formMateriais.get('codClasse').disable();
        this.formMateriais.get('codMaterial').disable();
    }
    setMateriais(materiais) {
        materiais.forEach((material) => this.onAddMaterial(material));
    }
    get assocMateriais() {
        return this.form.get('assocMateriais');
    }
    onAddMaterial(material, manipulateForm) {
        if (this.codClasse === null) {
            this.codClasse = material.codClasse;
        }
        this.valorFinalUpdate =
            material.valorMaterial + this.form.value.valorServico;
        // if (this.codClasse === material.codClasse) {
        if (this.checkMaterialExists(material) === false) {
            this.assocMateriais.push(this.formBuilder.group({
                codAssociacao: [material.codAssociacao],
                codMaterial: [material.codMaterial],
                nomeMaterial: [material.nomeMaterial],
                codClasse: [material.codClasse],
                precoOriginal: [material.valorOriginalMaterial],
                precoAlterado: [material.valorMaterial, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
                qtdadeMaxima: [material.qtdeMaximaConsumo, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
                valorFinal: [material.valorMaterial + this.form.value.valorServico],
            }));
            if (this.form.value.assocMateriais.length > 9) {
                if (this.tableConfigAssocMateriais.fixedHeader === false) {
                    this.showMateriais = false;
                    this.tableConfigAssocMateriais.fixedHeader = true;
                    setTimeout(() => {
                        this.showMateriais = true;
                    }, 1);
                }
            }
            if (manipulateForm) {
                this.form.markAsTouched();
                this.form.markAsDirty();
            }
        }
        // } else {
        //   this.pnotifyService.notice('Associe apenas materiais da mesma classe.');
        // }
    }
    changeTipoFrete() {
        this.changeTipo = false;
        if (this.form.value.tipoFrete === 1) {
            this.changeTipo = true;
        }
    }
    checkMaterialExists(material) {
        return this.form.value.assocMateriais.some((el) => {
            return el.codMaterial === material.codMaterial;
        });
    }
    onLimparAssociacoes() {
        const assocMateriais = this.form.get('assocMateriais');
        assocMateriais.clear();
        this.codClasse = null;
    }
    onDeleteMaterial(index) {
        this.confirmDelete().subscribe((response) => response ? this.deleteMaterial(index) : null);
    }
    confirmDelete() {
        return this.confirmModalService.showConfirm('delete', 'Confirmar exclusão', 'Deseja realmente prosseguir com a exclusão do registro?', 'Cancelar', 'Confirmar');
    }
    deleteMaterial(index) {
        this.assocMateriais.removeAt(index);
        this.form.markAsTouched();
        this.form.markAsDirty();
    }
    onChangeLinha(codLinha) {
        this.formMateriais.controls.codClasse.reset();
        this.formMateriais.controls.codClasse.setValue(null);
        this.formMateriais.controls.codClasse.enable();
        this.formMateriais.controls.codClasse.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]);
        this.formMateriais.controls.codClasse.updateValueAndValidity();
        this.formMateriais.controls.codMaterial.reset();
        this.formMateriais.controls.codMaterial.disable();
        this.formMateriais.controls.codMaterial.setValue(null);
        this.formMateriais.controls.codMaterial.updateValueAndValidity();
        this.filteredClasses = this.classes.filter((value) => value.idLinha == codLinha);
        // if (this.form.value.codTipoServico === 1 && this.formMateriais.value.codLinha === 1) {
        //   this.formMateriais.get('codClasse').setValue(80);
        // }
    }
    onChangeClasse(codClasse) {
        this.formMateriais.controls.codMaterial.reset();
        this.formMateriais.controls.codMaterial.enable();
        this.formMateriais.controls.codMaterial.setValue(null);
        this.formMateriais.controls.codMaterial.updateValueAndValidity();
        this.getMateriais(codClasse);
    }
    getMateriais(codClasse) {
        var _a;
        if (typeof codClasse !== 'undefined' && codClasse !== null) {
            if (this.checkFieldErrors() === false) {
                this.materiaisLoader = true;
                this.materiais = [];
                const codEmpresa = (_a = this.form.get('codEmpresa').value) !== null && _a !== void 0 ? _a : '';
                const codEnderecoEntrega = this.form.value.codEnderecoEntrega;
                const codCliente = this.form.getRawValue().codCliente;
                this.contratosComerciaisService
                    .getMateriais({
                    codClasse: codClasse,
                    codEmpresa: codEmpresa,
                    codEnderecoEntrega,
                    codCliente,
                })
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(() => {
                    this.materiaisLoader = false;
                }))
                    .subscribe({
                    next: (response) => {
                        if (response.hasOwnProperty('success') &&
                            response.success === true) {
                            this.materiais = response.data;
                            this.materiais.unshift({
                                codigoMaterial: 0,
                                codigoDescricaoMaterial: 'EXIBIR TODOS',
                            });
                            this.formMateriais.controls.codMaterial.setValue(0);
                        }
                        else {
                            this.pnotifyService.notice(response.mensagem);
                        }
                    },
                    error: (error) => {
                        if (error['error'].hasOwnProperty('mensagem')) {
                            this.pnotifyService.error(error.error.mensagem);
                        }
                        else {
                            this.pnotifyService.error();
                        }
                    }
                });
            }
        }
    }
    onFilterMateriais() {
        if (this.formMateriais.valid) {
            if (this.checkFieldErrors() === false) {
                this.loaderNavbar = true;
                this.searching = true;
                this.materiaisLista = [];
                this.materiaisListaLoaded = false;
                this.materiaisListaEmpty = false;
                const codEmpresa = this.form.get('codEmpresa').value;
                const codEnderecoEntrega = this.form.value.codEnderecoEntrega;
                const codCliente = this.form.getRawValue().codCliente;
                let params = {
                    codClasse: this.formMateriais.value.codClasse,
                    codEmpresa,
                    codEnderecoEntrega,
                    codCliente,
                };
                if (this.formMateriais.value.codMaterial !== 0) {
                    Object.assign(params, {
                        codMaterial: this.formMateriais.value.codMaterial,
                    });
                }
                this.contratosComerciaisService
                    .getMateriais(params)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(() => {
                    this.firstSearch = true;
                    this.searching = false;
                    this.loaderNavbar = false;
                    this.materiaisListaLoaded = true;
                }))
                    .subscribe({
                    next: (response) => {
                        if (response.hasOwnProperty('success') &&
                            response.success === true) {
                            this.materiaisLista = response.data.map(function (el) {
                                var o = Object.assign({}, el);
                                o.checked = 0;
                                return o;
                            });
                            if (this.materiaisLista.length > 9) {
                                this.tableConfigMateriais.fixedHeader = true;
                            }
                            else {
                                this.tableConfigMateriais.fixedHeader = false;
                            }
                        }
                        else if (response.hasOwnProperty('success') &&
                            response.success === false &&
                            response.hasOwnProperty('mensagem')) {
                            this.pnotifyService.error(response.mensagem);
                            this.materiaisListaEmpty = true;
                        }
                        else {
                            this.pnotifyService.error();
                            this.materiaisListaEmpty = true;
                        }
                    },
                    error: (error) => {
                        if (error['error'].hasOwnProperty('mensagem')) {
                            this.pnotifyService.error(error.error.mensagem);
                        }
                        else {
                            this.pnotifyService.error();
                        }
                    }
                });
            }
        }
    }
    checkFieldErrors() {
        let hasError = false;
        if (this.form.getRawValue().codCliente == null) {
            this.pnotifyService.notice('Selecione o cliente');
            hasError = true;
        }
        if (this.form.value.codEmpresa == null) {
            this.pnotifyService.notice('Selecione a empresa');
            hasError = true;
        }
        if (this.form.value.codEnderecoEntrega == null) {
            this.pnotifyService.notice('Selecione o endereço de entrega');
            hasError = true;
        }
        return hasError;
    }
    onToggleAll() {
        this.toggleAll = !this.toggleAll;
        for (let index = 0; index < this.materiaisLista.length; index++) {
            this.materiaisLista[index].checked = this.toggleAll === true ? 1 : 0;
        }
    }
    onCheckMaterial(index, material) {
        this.materiaisLista[index].checked = material.checked == 0 ? 1 : 0;
    }
    onAssociarMateriais() {
        this.toggleAll = false;
        this.materiaisLista
            .filter((material) => material.checked === 1)
            .forEach((material) => {
            this.onAddMaterial({
                codMaterial: material.codigoMaterial,
                nomeMaterial: material.descricao,
                codClasse: material.codClasse,
                valorOriginalMaterial: material.valorOriginalMaterial,
                inCorteDobra: material.inCorteDobra,
            }, true);
        });
        this.materiaisLista = this.materiaisLista.filter((material) => material.checked === 0);
    }
    setGrupos(grupos) {
        if (grupos.length > 0) {
            for (let i = 0; i < grupos.length; i++) {
                this.onAddGrupo(grupos[i], false);
            }
        }
    }
    get assocGrupos() {
        return this.form.get('assocGrupos');
    }
    /**
     * @source = 'application' || 'user'
     */
    onAddGrupo(grupo, manipulateForm) {
        if (this.checkGrupoExists(grupo) === false) {
            this.assocGrupos.push(this.formModelo.value);
            // this.assocGrupos.push(this.valor)
            if (this.form.value.assocGrupos.length > 9) {
                if (this.tableConfigAssocGrupos.fixedHeader === false) {
                    this.showGrupos = false;
                    this.tableConfigAssocGrupos.fixedHeader = true;
                    setTimeout(() => {
                        this.showGrupos = true;
                    }, 1);
                }
            }
            if (!this.toggle) {
                this.assocGrupos.get('de').disable();
                this.assocGrupos.get('ate').disable();
            }
            if (manipulateForm) {
                this.form.markAsTouched();
                this.form.markAsDirty();
            }
        }
    }
    checkGrupoExists(grupo) {
        return this.form.value.assocGrupos.some((el) => {
            return el.codGrupo === grupo.codGrupo;
        });
    }
    grupoAssociado(material) {
        this.onAddGrupo(material, true);
    }
    onAssociarGrupos() {
        this.toggle = false;
        for (let index = 0; index < this.dados.length; index++) {
            if (this.dados[index] === 1) {
                const grupo = {
                    codGrupo: this.dados[index].codGrupo,
                    de: this.dados[index].de,
                    ate: this.dados[index].ate,
                    valorComissao: this.dados[index].valorComissao,
                    valorFixo: this.dados[index].valorFixo,
                };
                this.grupoAssociado(grupo);
                this.dados[index].checked = 0;
            }
        }
    }
    // Consulta selects
    getSituacao() {
        this.contratosComerciaisService.getSituacao().subscribe({
            next: (response) => {
                if (response.success === true) {
                    this.situacoes = response.data;
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
    // CheckBox
    onChecked() {
        this.formModelo.get('de').disable();
        this.formModelo.get('ate').disable();
    }
    // modal
    openModal(template) {
        this.modalRef = this.modalService.show(template, {
            animated: false,
            class: 'modal-xl',
        });
    }
    // Tratamento de erros
    onFieldError(field) {
        if (this.onFieldInvalid(field)) {
            return 'is-invalid';
        }
        return '';
    }
    onFieldInvalid(field) {
        field = this.form.get(field);
        if (field.errors != null) {
            if (field.errors.hasOwnProperty('required') && field.touched) {
                return 'required';
            }
        }
        return '';
    }
    onFieldRequired(field) {
        let required = false;
        let formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]();
        // && this.assocMateriais.controls['controls'][field].validator
        if (this.form.controls[field].validator) {
            let validationResult = this.form.controls[field].validator(formControl);
            required =
                validationResult !== null && validationResult.required === true;
        }
        if (required) {
            return 'is-required';
        }
    }
    // Tratamento de erros Form Material
    onFieldErrorFormMaterial(field) {
        if (this.onFieldInvalidFormMaterial(field)) {
            return 'is-invalid';
        }
        return '';
    }
    onFieldInvalidFormMaterial(field) {
        field = this.formMateriais.get(field);
        if (field.errors != null) {
            if (field.errors.hasOwnProperty('required') && field.touched) {
                return 'required';
            }
        }
        return '';
    }
    onFieldRequiredFormMaterial(field) {
        let required = false;
        let formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]();
        if (this.formMateriais.controls[field].validator) {
            let validationResult = this.formMateriais.controls[field].validator(formControl);
            required =
                validationResult !== null && validationResult.required === true;
        }
        if (required) {
            return 'is-required';
        }
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
        let formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]();
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
    geetParams(params) {
        let dataInicial = params['dataInicialVigencia'];
        let dataFinal = params['dataFimVigencia'];
        this.form.patchValue({
            dataInicialVigencia: dataInicial,
            dataFimVigencia: dataFinal,
        });
        if (dataInicial instanceof Date) {
            dataInicial = this.dateService.convertToUrlDate(dataInicial);
        }
        if (dataFinal instanceof Date) {
            dataFinal = this.dateService.convertToUrlDate(dataFinal);
        }
        return {
            dataInicial: { dataInicial },
            dataFinal: { dataFinal },
        };
    }
    onFecharModal(event) {
        this.modalRef.hide();
    }
    setLoaderEvents() {
        this.loaderDetalhesClienteSubscription =
            this.clienteDetalhesService.loaderNavbar.subscribe((response) => {
                this.loaderNavbar = response;
            });
    }
    unsetLoaderEvents() {
        this.loaderDetalhesClienteSubscription.unsubscribe();
    }
    onClienteDetalhes() {
        this.clienteDetalhesService.showModal(this.form.value.codCliente);
    }
    onCliente(event) {
        this.form.patchValue(event);
        this.onChangeCliente(event.codCliente, 'user');
        this.onLoadCliente(true);
    }
};
ComercialGestaoContratosComerciaisFormularioComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__["DateService"] },
    { type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_21__["BsLocaleService"] },
    { type: _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_13__["PNotifyService"] },
    { type: _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_17__["ConfirmModalService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"] },
    { type: _contratos_comerciais_service__WEBPACK_IMPORTED_MODULE_4__["ComercialGestaoContratosComerciaisService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _comercial_service__WEBPACK_IMPORTED_MODULE_14__["ComercialService"] },
    { type: _cadastros_materiais_grupos_grupos_service__WEBPACK_IMPORTED_MODULE_16__["ComercialCadastrosMateriaisGrupoService"] },
    { type: _shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"] },
    { type: _ciclo_vendas_pedidos_producao_telas_formulario_formulario_service__WEBPACK_IMPORTED_MODULE_5__["ComercialCicloVendasPedidosProducaoTelasFormularioService"] },
    { type: _cadastros_formas_pagamento_formas_pagamento_service__WEBPACK_IMPORTED_MODULE_3__["ComercialCadastrosFormasPagamentoService"] },
    { type: _services_clientes_service__WEBPACK_IMPORTED_MODULE_20__["ComercialClientesService"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_23__["BsModalService"] },
    { type: _modal_detalhes_cliente_service__WEBPACK_IMPORTED_MODULE_18__["ComercialGestaoContratosComerciaisFormularioModalDetalhesService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_19__["TitleService"] }
];
ComercialGestaoContratosComerciaisFormularioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'comercial-gestao-contratos-comerciais-formulario',
        template: _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
        _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__["DateService"],
        ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_21__["BsLocaleService"],
        _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_13__["PNotifyService"],
        _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_17__["ConfirmModalService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"],
        _contratos_comerciais_service__WEBPACK_IMPORTED_MODULE_4__["ComercialGestaoContratosComerciaisService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        _comercial_service__WEBPACK_IMPORTED_MODULE_14__["ComercialService"],
        _cadastros_materiais_grupos_grupos_service__WEBPACK_IMPORTED_MODULE_16__["ComercialCadastrosMateriaisGrupoService"],
        _shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"],
        _ciclo_vendas_pedidos_producao_telas_formulario_formulario_service__WEBPACK_IMPORTED_MODULE_5__["ComercialCicloVendasPedidosProducaoTelasFormularioService"],
        _cadastros_formas_pagamento_formas_pagamento_service__WEBPACK_IMPORTED_MODULE_3__["ComercialCadastrosFormasPagamentoService"],
        _services_clientes_service__WEBPACK_IMPORTED_MODULE_20__["ComercialClientesService"],
        ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_23__["BsModalService"],
        _modal_detalhes_cliente_service__WEBPACK_IMPORTED_MODULE_18__["ComercialGestaoContratosComerciaisFormularioModalDetalhesService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_19__["TitleService"]])
], ComercialGestaoContratosComerciaisFormularioComponent);



/***/ }),

/***/ "lEDy":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/comercial/gestao/contratos-comerciais/templates/clientes/clientes.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: ComercialGestaoContratosComerciaisFormularioTemplateClientesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialGestaoContratosComerciaisFormularioTemplateClientesComponent", function() { return ComercialGestaoContratosComerciaisFormularioTemplateClientesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_clientes_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./clientes.component.html */ "cY1h");
/* harmony import */ var _clientes_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clientes.component.scss */ "SYP8");
/* harmony import */ var _ciclo_vendas_cotacoes_formulario_formulario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../ciclo-vendas/cotacoes/formulario/formulario.service */ "/Zk1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");








let ComercialGestaoContratosComerciaisFormularioTemplateClientesComponent = class ComercialGestaoContratosComerciaisFormularioTemplateClientesComponent {
    constructor(formBuilder, formularioService) {
        this.formBuilder = formBuilder;
        this.formularioService = formularioService;
        this.acessoClientes = false;
        this.isDisabled = false;
        this.codCliente = null;
        this.visualizar = false;
        this.asFormField = false;
        this.setErrors = false;
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.onLoad = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.carteiraClientes = [];
        this.input$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
    }
    ngOnInit() {
        this.checkCarteiraClientes();
        this.setFormBuilder();
        this.getCarteiraClientes();
    }
    ngOnChanges(event) {
        if (event.codCliente) {
            if (typeof this.form !== 'undefined') {
                this.form.controls.codCliente.setValue(event.codCliente.currentValue);
            }
        }
        if (event.isDisabled) {
            if (typeof this.form !== 'undefined') {
                this.onChangeDisable(event.isDisabled.currentValue);
            }
        }
        if (event.setErrors) {
            if (typeof this.form !== 'undefined') {
                if (event.setErrors.currentValue === true) {
                    this.form.controls.codCliente.markAsTouched();
                    this.form.controls.codCliente.setErrors({ incorrect: true });
                }
                else {
                    this.form.controls.codCliente.markAsUntouched();
                    this.form.controls.codCliente.setErrors(null);
                }
            }
        }
    }
    checkCarteiraClientes() {
        const _carteiraClientes = this.formularioService.getCurrentCarteiraClientes();
        if (_carteiraClientes.length > 0) {
            this.carteiraClientes = _carteiraClientes;
        }
        else {
            this.getCarteiraClientes();
            /* if (this.acessoClientes === false) {
              this.getCarteiraClientes();
            } else {
              this.setAsyncSearch();
            } */
        }
    }
    getCarteiraClientes() {
        this.clientesLoader = true;
        this.formularioService
            .getCarteiraClientes()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.clientesLoader = false;
        }))
            .subscribe((response) => {
            if (response.success === true) {
                this.carteiraClientes = response.data;
                this.formularioService.createCarteiraClientes(this.carteiraClientes);
                this.onLoad.emit(true);
            }
        });
    }
    setAsyncSearch() {
        this.carteiraClientes$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["concat"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])([]), this.input$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(() => {
            this.clientesLoader = true;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])((termoPesquisa) => this.formularioService.getPesquisaCliente(termoPesquisa).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])([])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(() => {
            this.clientesLoader = false;
        })))));
    }
    setFormBuilder() {
        this.form = this.formBuilder.group({
            codCliente: [{ value: this.codCliente, disabled: this.isDisabled }],
        });
        this.checkValidators();
    }
    checkValidators() {
        if (this.asFormField === true) {
            this.form.controls.codCliente.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]);
            this.form.controls.codCliente.updateValueAndValidity();
        }
    }
    onChangeDisable(disabled) {
        if (disabled === true) {
            this.form.controls.codCliente.disable();
        }
        else {
            this.form.controls.codCliente.enable();
        }
    }
    onClear() {
        this.form.controls.codCliente.setValue(null);
        this.form.controls.codCliente.markAsUntouched();
        this.onChangeCliente();
    }
    onChangeCliente() {
        this.onChange.emit(this.form.value.codCliente);
    }
    onFieldError(field) {
        if ((this.asFormField === true && this.onFieldInvalid(field)) != '') {
            return 'is-invalid';
        }
        return '';
    }
    onFieldInvalid(field) {
        field = this.form.get(field);
        if (this.asFormField === true && field.errors != null) {
            if (field.errors.hasOwnProperty('incorrect') && field.touched) {
                return 'incorrect';
            }
            if (field.errors.hasOwnProperty('required') && field.touched) {
                return 'required';
            }
            if (field.errors.hasOwnProperty('maxlength') && field.touched) {
                return 'maxlength';
            }
        }
        return '';
    }
    onFieldRequired(field) {
        let required = false;
        let formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        if (this.asFormField === true && this.form.controls[field].validator) {
            let validationResult = this.form.controls[field].validator(formControl);
            required =
                validationResult !== null && validationResult.required === true;
        }
        if (required) {
            return 'is-required';
        }
    }
};
ComercialGestaoContratosComerciaisFormularioTemplateClientesComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _ciclo_vendas_cotacoes_formulario_formulario_service__WEBPACK_IMPORTED_MODULE_3__["ComercialCicloVendasCotacoesFormularioService"] }
];
ComercialGestaoContratosComerciaisFormularioTemplateClientesComponent.propDecorators = {
    acessoClientes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['acessoClientes',] }],
    isDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['isDisabled',] }],
    codCliente: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['codCliente',] }],
    visualizar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['visualizar',] }],
    asFormField: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['asFormField',] }],
    setErrors: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['setErrors',] }],
    onChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"], args: ['onChange',] }],
    onLoad: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"], args: ['onLoad',] }]
};
ComercialGestaoContratosComerciaisFormularioTemplateClientesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'comercial-gestao-contratos-comerciais-formulario-template-clientes',
        template: _raw_loader_clientes_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_clientes_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        _ciclo_vendas_cotacoes_formulario_formulario_service__WEBPACK_IMPORTED_MODULE_3__["ComercialCicloVendasCotacoesFormularioService"]])
], ComercialGestaoContratosComerciaisFormularioTemplateClientesComponent);



/***/ }),

/***/ "sMXb":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/gestao/contratos-comerciais/formulario/modal/detalhes/cliente.component.scss ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2dlc3Rhby9jb250cmF0b3MtY29tZXJjaWFpcy9mb3JtdWxhcmlvL21vZGFsL2RldGFsaGVzL2NsaWVudGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "tnBs":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/gestao/contratos-comerciais/formulario/modal/detalhes/cliente.service.ts ***!
  \************************************************************************************************************/
/*! exports provided: ComercialGestaoContratosComerciaisFormularioModalDetalhesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialGestaoContratosComerciaisFormularioModalDetalhesService", function() { return ComercialGestaoContratosComerciaisFormularioModalDetalhesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _cliente_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cliente.component */ "Pqti");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modules/comercial/services/clientes.service */ "8ouN");



// ngx-bootstrap

// Components

// Services


let ComercialGestaoContratosComerciaisFormularioModalDetalhesService = class ComercialGestaoContratosComerciaisFormularioModalDetalhesService {
    constructor(modalService, pnotifyService, clientesService) {
        this.modalService = modalService;
        this.pnotifyService = pnotifyService;
        this.clientesService = clientesService;
        this.loaderNavbar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.pnotifyService.getPNotify();
    }
    showModal(codCliente) {
        this.loaderNavbar.emit(true);
        this.clientesService
            .getDetalhes(codCliente)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => {
            this.loaderNavbar.emit(false);
        }))
            .subscribe({
            next: (response) => {
                if (response.success === true) {
                    const modalConfig = {
                        animated: false,
                    };
                    const initialState = {
                        cliente: response.data,
                    };
                    this.modalService.show(_cliente_component__WEBPACK_IMPORTED_MODULE_4__["ComercialGestaoContratosComerciaisFormularioModalDetalhesComponent"], Object.assign({}, modalConfig, {
                        initialState,
                    }));
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
};
ComercialGestaoContratosComerciaisFormularioModalDetalhesService.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"] },
    { type: src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_6__["ComercialClientesService"] }
];
ComercialGestaoContratosComerciaisFormularioModalDetalhesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"],
        src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_6__["ComercialClientesService"]])
], ComercialGestaoContratosComerciaisFormularioModalDetalhesService);



/***/ }),

/***/ "u2yr":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/gestao/contratos-comerciais/formulario/modal/selecionar/selecionar.component.html ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n  <h4 class=\"modal-title pull-left\">Busqueda de Clientes</h4>\n  <div class=\"d-flex justify-content-center align-items-center\">\n    <div class=\"spinner-border text-primary mr-2\" role=\"status\" *ngIf=\"loadingClientes\">\n      <span class=\"sr-only\">Loading...</span>\n    </div>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"onClose()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n</div>\n<div class=\"modal-body\">\n  <advanced-filter>\n    <form [formGroup]=\"formClientes\">\n      <div class=\"form-row\">\n        <div class=\"form-group col-4\">\n          <label for=\"cdItem\">BUSCAR POR</label>\n          <select\n            class=\"form-control custom-select\"\n            formControlName=\"buscarPor\"\n          >\n            <option value=\"NM_CLIE\" selected>Código, nome fantasia ou razão social</option>\n          </select>\n        </div>\n\n        <div class=\"form-group col-8\">\n          <label>TERMO DE PESQUISA</label>\n          <div class=\"input-group\">\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              formControlName=\"pesquisa\"\n              >\n              <div class=\"input-group-append\">\n                <span \n                  [tooltip]=\"formClientes.valid == false ? 'Digite um termo de pesquisa':''\"\n                  container=\"body\"\n                  placement =\"left\"\n                >\n                  <button\n                  style=\"height: 25px;\"\n                    [disabled]=\"formClientes.valid == false\"\n                    class=\"input-group-text hover\"\n                    (click)=\"getClientes()\"\n                    >\n                    <i class=\"fas fa-search\"></i>\n                  </button>\n                </span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </form>\n  </advanced-filter>\n  <custom-table *ngIf=\"!noClientes\" class=\"text-center\">\n    <ng-template #thead let-thead>\n      <tr>\n        <th>Cód Cliente </th>\n        <th>Nome Fantasia</th>\n        <th>Razão Social </th>\n        <th></th>\n      </tr>\n    </ng-template>\n    <ng-template #tbody let-tbody>\n      <tr *ngFor=\"let cliente of clientes | slice : begin : end; let i = index\">\n        <td>{{ cliente.codCliente }}</td>\n        <td>{{ cliente.nomeCliente }}</td>\n        <td>{{ cliente.razaoSocial }}</td>\n        <td>\n          <button\n            class=\"btn-icon-sm\"\n            tooltip=\"Salvar Informações\"\n            container=\"body\"\n            (click)=\"setCliente(cliente)\"\n          >\n            <i class=\"far fa-save\"></i>\n          </button>\n        </td>\n      </tr>\n    </ng-template>\n  </custom-table>\n</div>");

/***/ }),

/***/ "xOuB":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/comercial/gestao/contratos-comerciais/guards/formulario-resolver.guard.ts ***!
  \***************************************************************************************************/
/*! exports provided: ComercialoGestaoContratosComerciaisFormularioResolverGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialoGestaoContratosComerciaisFormularioResolverGuard", function() { return ComercialoGestaoContratosComerciaisFormularioResolverGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _contratos_comerciais_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../contratos-comerciais.service */ "pK9/");



// Services

let ComercialoGestaoContratosComerciaisFormularioResolverGuard = class ComercialoGestaoContratosComerciaisFormularioResolverGuard {
    constructor(contratosComerciaisService) {
        this.contratosComerciaisService = contratosComerciaisService;
    }
    resolve(route) {
        if (route.params && route.params.id) {
            return this.contratosComerciaisService.getDetalhes(route.params.id);
        }
        // É implementado o método "of" para manter a tipagem de retorno com Observable.
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
            success: true,
            mensagem: null,
            data: [
                {
                    codContrato: null,
                    codCliente: [],
                    nomeContrato: null,
                    dataInicialVigencia: null,
                    dataFinalVigencia: null,
                    codSituacao: null,
                    qtdeMaximaConsumo: null,
                    materiais: []
                }
            ],
        });
    }
};
ComercialoGestaoContratosComerciaisFormularioResolverGuard.ctorParameters = () => [
    { type: _contratos_comerciais_service__WEBPACK_IMPORTED_MODULE_3__["ComercialGestaoContratosComerciaisService"] }
];
ComercialoGestaoContratosComerciaisFormularioResolverGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_contratos_comerciais_service__WEBPACK_IMPORTED_MODULE_3__["ComercialGestaoContratosComerciaisService"]])
], ComercialoGestaoContratosComerciaisFormularioResolverGuard);



/***/ })

}]);
//# sourceMappingURL=contratos-comerciais-contratos-comerciais-module-es2015.js.map