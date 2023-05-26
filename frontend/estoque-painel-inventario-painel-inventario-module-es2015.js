(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["estoque-painel-inventario-painel-inventario-module"],{

/***/ "+vhV":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/logistica/estoque/painel-inventario/painel-inventario.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: LogisticaEstoquePainelInventarioModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaEstoquePainelInventarioModule", function() { return LogisticaEstoquePainelInventarioModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "6No5");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/timepicker */ "M3cK");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "2ZVE");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-currency-mask */ "D5nU");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/not-found/not-found.module */ "sCnT");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-filter-pipe */ "4muW");
/* harmony import */ var _painel_inventario_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./painel-inventario-routing.module */ "M/gQ");
/* harmony import */ var _painel_inventario_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./painel-inventario.component */ "MCWC");
/* harmony import */ var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./cadastro/cadastro.component */ "LcXQ");
/* harmony import */ var _inventario_inventario_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./inventario/inventario.component */ "bc5J");
/* harmony import */ var _inventario_lista_lista_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./inventario/lista/lista.component */ "Jbbf");
/* harmony import */ var _inventario_materiais_notas_fiscais_materiais_notas_fiscais_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./inventario/materiais-notas-fiscais/materiais-notas-fiscais.component */ "Z9EM");
/* harmony import */ var _inventario_materiais_ocorrencias_materiais_ocorrencias_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./inventario/materiais-ocorrencias/materiais-ocorrencias.component */ "lJJZ");
/* harmony import */ var _inventario_relatorio_relatorio_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./inventario/relatorio/relatorio.component */ "nAji");




// ngx-bootstrap






// ng-select

// ng2-currency-mask













let LogisticaEstoquePainelInventarioModule = class LogisticaEstoquePainelInventarioModule {
};
LogisticaEstoquePainelInventarioModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _painel_inventario_component__WEBPACK_IMPORTED_MODULE_17__["LogisticaEstoquePainelInventarioComponent"],
            _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_18__["LogisticaEstoquePainelInventarioCadastroComponent"],
            _inventario_inventario_component__WEBPACK_IMPORTED_MODULE_19__["LogisticaEstoquePainelInventarioInventarioComponent"],
            _inventario_lista_lista_component__WEBPACK_IMPORTED_MODULE_20__["LogisticaEstoquePainelInventarioInventarioListaComponent"],
            _inventario_materiais_notas_fiscais_materiais_notas_fiscais_component__WEBPACK_IMPORTED_MODULE_21__["LogisticaEstoquePainelInventarioInventarioMateriaisNotasFiscaisComponent"],
            _inventario_materiais_ocorrencias_materiais_ocorrencias_component__WEBPACK_IMPORTED_MODULE_22__["LogisticaEstoquePainelInventarioInventarioMateriaisOcorrenciasComponent"],
            _inventario_relatorio_relatorio_component__WEBPACK_IMPORTED_MODULE_23__["LogisticaEstoquePainelInventarioInventarioRelatorioComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_15__["FilterPipeModule"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["ModalModule"].forRoot(),
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__["TabsModule"].forRoot(),
            ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_7__["TimepickerModule"].forRoot(),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"].forRoot(),
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_9__["TemplatesModule"].forRoot(),
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["NgSelectModule"],
            ng2_currency_mask__WEBPACK_IMPORTED_MODULE_11__["CurrencyMaskModule"],
            _painel_inventario_routing_module__WEBPACK_IMPORTED_MODULE_16__["LogisticaEstoquePainelInventarioRoutingModule"],
            src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_12__["NotFoundModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"],
        ],
        providers: [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_13__["PNotifyService"], { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"], useValue: 'pt-PT' }],
    })
], LogisticaEstoquePainelInventarioModule);



/***/ }),

/***/ "05IL":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/estoque/painel-inventario/inventario/lista/lista.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen [hidden]=\"!spinnerFullScreen\"></loader-spinner-full-screen>\n<loader-spinner-navbar [hidden]=\"!loaderNavbar\"></loader-spinner-navbar>\n<app-header [appTitle]=\"appTitle\">\n  <button \n    (click)=\"onSearch()\"\n    >\n    Pesquisar\n  </button>\n  <button \n    (click)=\"openOcorrencias(idInventario)\"\n    *ngIf=\"ativNotaFiscal\"\n    >\n    Ocorrências\n  </button>\n  <button \n    (click)=\"openNotaFiscal(idInventario)\"\n    *ngIf=\"ativNotaFiscal\"\n    >\n    Notas Fiscais\n  </button>\n  <button \n    (click)=\"exportarExcel()\"\n    [disabled]=\"!info || noResult\"\n    *ngIf=\"ativExport\"\n    >\n    Exportar\n  </button>\n  <button\n    class=\"hover\" \n    (click)=\"cancelar(template, 1)\"\n    *ngIf=\"ativCancelar\"\n    >\n    Cancelar\n  </button>\n  <button \n    (click)=\"habilitaCampos()\"\n    [disabled]=\"(habilita && !info) || inativBotoes || noResult\"\n    *ngIf=\"ativEditar\"\n    >\n    Editar\n  </button>\n  <button \n    (click)=\"postSalvar()\"\n    [disabled]=\"info || inativBotoes || noResult\"\n    *ngIf=\"ativSalvar\"\n    >\n    Salvar\n  </button>\n  <button \n    (click)=\"finalizar(template)\"\n    *ngIf=\"ativFinaliza\"\n    >\n    Finalizar\n  </button>\n  <button \n    (click)=\"atualizarInventario('',1)\"\n    *ngIf=\"ativReabrir\"\n    >\n    Reabrir\n  </button>\n  <button\n    class=\"hover\" \n    (click)=\"atualizarInventario('',5)\"\n    [disabled]=\"!ativAprovar\"\n    *ngIf=\"ativAprovar\"\n    >\n    Aprovar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\n  <div class=\"d-flex justify-content-between align-items-center col-12 p-0\" [hidden]=\"noResult || spinnerFullScreen\">\n    <div>\n      <strong style=\"font-size: 1.25rem\">Código do Inventário: {{ idInventario | number : '6.0-0'}} - {{ tipoInventario | uppercase }}</strong>\n      <div \n        class=\"d-flex justify-content-start align-items-center\" \n        style=\"cursor: pointer; font-size: 1rem\"\n        *ngIf=\"disabledBotoes.editar\"\n        >\n          <i [ngClass]=\"{'fa-toggle-off': considerarMaterialSemEstoque == 1, 'fa-toggle-on': considerarMaterialSemEstoque == 0}\" \n          class=\"fas pr-1\" \n          (click)=\"onToggleListaMateriais();\" \n          >\n        </i> Considerar materiais sem estoque\n      </div>\n    </div>\n    <form class=\"col-4 p-0\" [formGroup]=\"form\">\n      <div class=\"form-row\">\n        <div class=\"form-group col-12\">\n          <label for=\"dsMaterial\">Material</label>\n          <ng-select\n              [items]= \"listaMateriaisFiltro\"\n              [closeOnSelect]=\"true\"\n              [hideSelected]=\"true\"\n              bindLabel=\"dsMaterial\"\n              bindValue=\"cdMaterial\"\n              placeholder=\"Pesquise por um material\"\n              formControlName=\"cdMaterial\"\n          >\n          </ng-select>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"row mb-3\" [hidden]=\"spinnerFullScreen\">\n    <div class=\"col-lg-12\">\n      <div class=\"border shadow-sm\">\n        <div class=\"row\">\n          <div class=\"col\">\n            <div\n              id=\"filter-header\"\n              class=\"hover w-100 d-flex justify-content-between\"\n              [ngClass]=\"{'shadow-sm border-bottom': showAdvancedFilter}\"\n              (click)=\"onAdvancedFilter()\">\n              <div class=\"mtc-title mb-0 pl-2 pt-1\"> Totalizador </div>\n              <button\n                type=\"button\"\n                class=\"btn-icon-sm my-auto mr-1\">\n                <i class=\"fas fa-chevron-down\" [hidden]=\"showAdvancedFilter\"></i>\n                <i class=\"fas fa-chevron-up\" [hidden]=\"!showAdvancedFilter\"></i>\n              </button>\n            </div>\n          </div>\n        </div>\n        <div id=\"filter-body\" [hidden]=\"showAdvancedFilter\">\n          <custom-table [config]=\"tableFilterConfig\">\n            <ng-template #thead let-thead>\n              <tr>\n                <th scope=\"col\" class=\"text-center\" style=\"border-top: none\"></th>\n                <th scope=\"col\" class=\"text-center\" style=\"border-top: none\"></th>\n                <th scope=\"col\" class=\"text-center\" style=\"border-top: none\"></th>\n                <th scope=\"col\" class=\"text-center\" style=\"border-top: none\"></th>\n                <th scope=\"col\" class=\"text-center\" style=\"border-top: none\"></th>\n                <th scope=\"col\" class=\"text-center\" style=\"border-top: none\"></th>\n                <th scope=\"col\" class=\"text-center\" style=\"border-top: none\"></th>\n                <th scope=\"col\" class=\"text-center\" style=\"border-top: none\"></th>\n                <th scope=\"col\" class=\"text-center\" style=\"border-top: none\"></th>\n                <th scope=\"col\" class=\"text-center\" style=\"border-top: none\"></th>\n                <th scope=\"col\" class=\"text-center\" style=\"border-top: none\"></th>\n              </tr>\n            </ng-template>\n            <ng-template #tbody let-tbody>\n              <tr>\n                <td style=\"border-top: none\"><h6>Total Estoque (tons)</h6></td>\n                <td style=\"border-top: none\"><h6>=</h6></td>\n                <td style=\"border-top: none\"><h6>{{ listaInfo.qtPesoEstoque | number: '1.3-3' }}</h6></td>\n                <td style=\"border-top: none\"><h6></h6></td>\n                <td style=\"border-top: none\"><h6>Total geral da contagem</h6></td>\n                <td style=\"border-top: none\"><h6>=</h6></td>\n                <td style=\"border-top: none\"><h6>{{ listaInfo.saldoEstoqueLancamento | number: '1.3-3' }}</h6></td>\n                <td style=\"border-top: none\"><h6></h6></td>\n                <td style=\"border-top: none\"><h6>Total inventário rotativo</h6></td>\n                <td style=\"border-top: none\"><h6>=</h6></td>\n                <td style=\"border-top: none\"><h6></h6></td>\n              </tr>\n              <tr>\n                <td style=\"border-top: none\"><h6>Total qtd. peças</h6></td>\n                <td style=\"border-top: none\"><h6>=</h6></td>\n                <td style=\"border-top: none\"><h6>{{ listaInfo.qtPecaLancamento }}</h6></td>\n                <td style=\"border-top: none\"><h6></h6></td>\n                <td style=\"border-top: none\"><h6>Total notas fiscais</h6></td>\n                <td style=\"border-top: none\"><h6>=</h6></td>\n                <td style=\"border-top: none\"><h6>{{ listaInfo.qtTotalNf | number: '1.3-3' }}</h6></td>\n                <td style=\"border-top: none\"><h6></h6></td>\n                <td style=\"border-top: none\"><h6>Total valor unitário</h6></td>\n                <td style=\"border-top: none\"><h6>=</h6></td>\n                <td style=\"border-top: none\"><h6>{{ listaInfo.precoMinimo | currency:'BRL' }}</h6></td>\n              </tr>\n              <tr>\n                <td style=\"border-top: none\"><h6>Total peso físico (tons)</h6></td>\n                <td style=\"border-top: none\"><h6>=</h6></td>\n                <td style=\"border-top: none\"><h6>{{ listaInfo.qtPesoLancamento | number: '1.3-3' }}</h6></td>\n                <td style=\"border-top: none\"><h6></h6></td>\n                <td style=\"border-top: none\"><h6>Total saldo inventário</h6></td>\n                <td style=\"border-top: none\"><h6>=</h6></td>\n                <td style=\"border-top: none\"><h6>{{ listaInfo.saldoEstoque | number: '1.3-3' }}</h6></td>\n                <td style=\"border-top: none\"><h6></h6></td>\n                <td style=\"border-top: none\"><h6>Total resultado inventário</h6></td>\n                <td style=\"border-top: none\"><h6>=</h6></td>\n                <td style=\"border-top: none\"><h6></h6></td>\n              </tr>\n              <tr>\n                <td style=\"border-top: none\"></td>\n                <td style=\"border-top: none\"></td>\n                <td style=\"border-top: none\"></td>\n                <td style=\"border-top: none\"></td>\n                <td style=\"border-top: none\"><h6>Total notas fiscais R.O.</h6></td>\n                <td style=\"border-top: none\"><h6>=</h6></td>\n                <td style=\"border-top: none\"><h6></h6></td>\n                <td style=\"border-top: none\"><h6></h6></td>\n                <td style=\"border-top: none\"><h6>Total resultado monetário</h6></td>\n                <td style=\"border-top: none\"><h6>=</h6></td>\n                <td style=\"border-top: none\"><h6>{{ listaInfo.saldoFinanceiro | currency:'BRL' }}</h6></td>\n              </tr>  \n            </ng-template>\n          </custom-table>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div [ngClass]=\"{'col': !showDetailPanel, 'col-8 pr-0': showDetailPanel}\">\n      <custom-table [config]=\"tableConfig\" [hidden]=\"noResult || spinnerFullScreen\">\n        <ng-template #thead let-thead>\n          <tr>\n            <th scope=\"col\" style=\"width: 150px;\" class=\"text-center\" [hidden]=\"showDetailPanel\">Classe</th>\n            <th scope=\"col\" style=\"width: 150px;\" class=\"text-center\">Cod. material</th>\n            <th scope=\"col\" style=\"width: 350px;\" class=\"text-center\">Material</th>\n            <th scope=\"col\" style=\"width: 150px;\" class=\"text-center\">Estoque (tons)</th>\n            <th scope=\"col\" style=\"width: 150px;\" class=\"text-center\" [hidden]=\"showDetailPanel\">Qtd. peças</th>\n            <th scope=\"col\" style=\"width: 150px;\" class=\"text-center\">Peso físico (tons)</th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr class=\"hover\" *ngFor=\"let lista of listas | slice : begin : end; let i = index\" (click)='onDetailPanel(i)'>\n            <td class=\"text-center\" [hidden]=\"showDetailPanel\"> {{ lista?.dsClasse | uppercase }}</td>\n            <td class=\"text-center\">{{ lista.cdMaterial }}</td>\n            <td class=\"text-center\" style=\"width: 350px;\">{{ lista.dsMaterial | uppercase }}</td>\n            <td class=\"text-center\" [hidden]=\"showDetailPanel\">{{ lista.qtPesoEstoque | number: '1.3-3'}}</td>\n            <td class=\"text-center\">\n              <div class=\"input-group\">\n                <input \n                  class=\"form-control form-control-sm\" \n                  type=\"text\" \n                  [(ngModel)]=\"lista.qtPecaContagem\"\n                  [disabled]=\"info\">\n              </div>\n            </td>\n            <td class=\"align-middle\">\n              <div class=\"input-group\">\n                <input \n                  class=\"form-control form-control-sm\" \n                  type=\"text\"\n                  [(ngModel)]=\"lista.qtPesoContagem\"\n                  [disabled]=\"info\"\n                  currencyMask [options]=\"{ align: 'left', prefix: '', thousands: '.', decimal: ',', precision: 3 }\">\n              </div>\n            </td>\n          </tr>\n        </ng-template>\n      </custom-table>\n      <div class=\"row\" [hidden]=\"noResult || spinnerFullScreen\">\n        <div class=\"mt-3 col\">\n            Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\n          <pagination\n            [maxSize]=\"10\"\n            [totalItems]=\"totalItems\"\n            (pageChanged)=\"onPageChanged($event)\"\n            [(itemsPerPage)]=\"itemsPerPage\"\n            [boundaryLinks]=\"true\"\n            [(ngModel)]=\"currentPage\"\n            previousText=\"&lsaquo;\"\n            nextText=\"&rsaquo;\"\n            firstText=\"&laquo;\"\n            lastText=\"&raquo;\">\n          </pagination>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-4\" [hidden]=\"!showDetailPanel\">\n      <detail-panel [panelTitle]=\"appTitleInventario\">\n          <div class=\"row\">\n            <div class=\"col-6\">\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-12\">\n                  <label>Classe</label>\n                  <div class=\"text-nowrap\">{{ totalInventario.dsClasse | uppercase }}</div>\n                </div>\n              </div>\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-12\">\n                  <label>Endereço</label>\n                  <div class=\"text-nowrap\">{{ totalInventario.enderecoPatio | uppercase }}</div>\n                </div>\n              </div>\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-12\">\n                  <label>Estoque (tons)</label>\n                  <div class=\"text-nowrap\">{{ totalInventario.qtPesoEstoque | number: '1.3-3'}}</div>\n                </div>\n              </div>\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-12\">\n                  <label>Peso por peça (Kg)</label>\n                  <div class=\"text-nowrap\">{{ totalInventario.pesoPeca | number: '1.3-3' }}</div>\n                </div>\n              </div>\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-12\">\n                  <label>Total da contagem</label>\n                  <div class=\"text-nowrap\">{{ totalInventario.totalContagem | number: '1.3-3' }}</div>\n                </div>\n              </div>\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-12\">\n                  <label>Notas fiscais</label>\n                  <div class=\"text-nowrap\">{{ totalInventario.qtMaterialNotaFiscal | number: '1.3-3' }}</div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-6\">\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-12\">\n                  <label>Saldo inventário</label>\n                  <div class=\"text-nowrap\">{{ totalInventario.saldoInventario | number: '1.3-3' }}</div>\n                </div>\n              </div>\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-12\">\n                  <label>Soma inventário rotativo</label>\n                  <div class=\"text-nowrap\">{{ totalInventario.somaInventarioRotativo }}</div>\n                </div>\n              </div>\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-12\">\n                  <label>Valor unitário</label>\n                  <div class=\"text-nowrap\">{{ totalInventario.precoMinimo | currency:'BRL' }}</div>\n                </div>\n              </div>\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-12\">\n                  <label>Resultado inventário</label>\n                  <div class=\"text-nowrap\">{{ totalInventario.resultadoInventario | number: '1.3-3' }}</div>\n                </div>\n              </div>\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-12\">\n                  <label>Resultado monetário</label>\n                  <div class=\"text-nowrap\">{{ totalInventario.resultadoMonetario | currency:'BRL' }}</div>\n                </div>\n              </div>\n            </div>\n          </div>\n      </detail-panel>\n    </div>\n    <div class=\"d-flex align-items-center justify-content-center\" style=\"width: 100%; height: 70%;\" [hidden]=\"!noResult\">\n      <empty-result message=\"Não há materiais cadastrados para este inventário\"></empty-result>\n    </div>\n  </div>\n  <ng-template #template>\n    <div class=\"modal-header\">\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <textarea name=\"\" id=\"\" cols=\"63\" rows=\"10\" #justificativa></textarea>\n      <button  \n        type=\"button\" \n        class=\"btn btn-primary justify-content-end \" \n        style=\"margin-left: 51vh\"\n        (click)=\"atualizarInventario(justificativa.value, 3); modalRef.hide()\"> Finalizar </button>\n    </div>\n  </ng-template>\n</app-body>\n\n");

/***/ }),

/***/ "298m":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/logistica/estoque/painel-inventario/painel-inventario.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2VzdG9xdWUvcGFpbmVsLWludmVudGFyaW8vcGFpbmVsLWludmVudGFyaW8uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "3pwz":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/estoque/painel-inventario/painel-inventario.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n");

/***/ }),

/***/ "3r0W":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/estoque/painel-inventario/inventario/materiais-notas-fiscais/materiais-notas-fiscais.component.html ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen [hidden]=\"!spinnerFullScreen\"></loader-spinner-full-screen>\n<loader-spinner-navbar [hidden]=\"!loaderNavbar\"></loader-spinner-navbar>\n<app-header [appTitle]=\"appTitle\">\n  <button \n    (click)=\"fecharSalvar(idInventario)\"\n  >\n    Fechar e Salvar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\n  <advanced-filter #scrollToFilter>\n    <form autocomplete=\"off\" [formGroup]=\"form\">\n      <div class=\"form-row justify-content-left\">\n        <div class=\"form-group col-md-2 justify-content-end\">\n          <label for=\"cdInventario\"> Número Nota Fiscal </label>\n          <input \n            id=\"cdNotaFiscal\"\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"DIGITE...\"\n            formControlName=\"cdNotaFiscal\"\n            (keyup.enter)=\"getListaExistente()\"\n          >\n        </div>\n      </div>  \n    </form>\n  </advanced-filter>\n  <div class=\"row\">\n    <div [ngClass]=\"{'col': !showDetailPanel, 'col-4 pr-0': showDetailPanel}\">\n      <custom-table [config]=\"tableFilterConfig\">\n        <ng-template #thead let-thead>\n          <tr>\n            <th style=\"width: 50px\"></th>\n            <th>Nota Fiscal</th>\n            <th>Data de Emissão</th>\n            <th style=\"width: 50px\"></th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr class=\"hover\" *ngFor=\"let notaFiscal of notasFiscais | slice : begin : end; let i = index\" [ngClass]=\"{'bg-active': notaFiscalSelecionada == notaFiscal.notaFiscal}\">\n            <td \n            style=\"width: 50px\"\n            [ngClass]=\"{ 'border-success': notaFiscal.situacao == 'Emitida',\n            'border-warning': notaFiscal.situacao != 'Emitida'}\" >\n              <div class=\"custom-control custom-checkbox\" style=\"cursor: pointer;\">\n                  <input type=\"checkbox\" class=\"custom-control-input\" \n                        [(ngModel)]=\"notaFiscal.check\" \n                        (change)=\"verificaCheck(notaFiscal)\" \n                        id=\"customCheck{{ i }}\" \n                        style=\"cursor: pointer;\">\n                  <label class=\"custom-control-label\" for=\"customCheck{{ i }}\" style=\"cursor: pointer;\"></label>\n              </div>\n            </td>\n            <td (click)=\"getMateriaisNotasFiscais(notaFiscal.notaFiscal)\">{{ notaFiscal.notaFiscal }}</td>\n            <td (click)=\"getMateriaisNotasFiscais(notaFiscal.notaFiscal)\">{{ notaFiscal.dtEmissao | date: 'dd/MM/yyyy HH:mm' }}</td>\n            <td style=\"width: 50px; cursor: pointer;\" (click)=\"getMateriaisNotasFiscais(notaFiscal.notaFiscal)\"><i class=\"far fa-file-alt\"></i></td>\n          </tr>\n        </ng-template>\n      </custom-table><div class=\"mt-3 col-6\"></div>\n      <div *ngIf=\"qtNotasFiscais >= itemsPerPage\">\n        Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > qtNotasFiscais ? qtNotasFiscais : currentPage*(itemsPerPage) }} de {{ qtNotasFiscais }}\n        <pagination\n          [maxSize]=\"10\"\n          [totalItems]=\"qtNotasFiscais\"\n          [(itemsPerPage)]=\"itemsPerPage\"\n          (pageChanged)=\"onPageChanged($event)\"\n          [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPage\"\n          previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\"\n          lastText=\"&raquo;\">\n        </pagination>\n      </div>\n    </div>\n    <div class=\"col-8\" [hidden]=\"!showDetailPanel\">\n      <detail-panel [panelTitle]=\"appTitleNotasFiscais\">\n        <custom-table [config]=\"tableNotasFiscaisMateriaisConfig\"> <!-- [heading]=\"notaFiscalSelecionada\" -->\n          <ng-template #thead let-thead>\n            <tr>\n              <th>Código</th>\n              <th style=\"width: 50%\">Descrição</th>\n              <th>Peso Liq.</th>\n              <th>Valor</th>\n            </tr>\n          </ng-template>\n          <ng-template #tbody let-tbody>\n            <tr *ngFor=\"let materialNotaFiscal of materiaisNotaFiscal; let i = index\">\n              <td>{{ materialNotaFiscal.cdMaterial }}</td>\n              <td style=\"width: 50%\">{{ materialNotaFiscal.dsMaterial  }}</td>\n              <td>{{ materialNotaFiscal.pesoLiquido | number : '1.3-3' }}</td>\n              <td>{{ materialNotaFiscal.vlTotal  | currency:'BRL':'symbol':'1.2-2'}}</td>\n            </tr> \n          </ng-template>\n        </custom-table>\n      </detail-panel>\n    </div>\n  </div>\n</app-body>\n\n<!-- <div bsModal #childModal=\"bs-modal\" class=\"modal fade\" [config]=\"{backdrop: 'static', keyboard: false}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialog-child-name\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\" style=\"position: absolute; left: -100%; width: 58rem;\">\n      <div class=\"modal-header\">\n        <div class=\"d-flex position-relative\">\n          <div class=\"form-group justify-content-end mr-2 mb-0\">\n            <label for=\"cdNotaFiscal\"> Número Nota Fiscal </label>\n            <input \n              id=\"cdNotaFiscal\"\n              type=\"text\"\n              class=\"form-control\"\n              placeholder=\"DIGITE...\"\n              [(ngModel)]=\"cdNotaFiscal\"\n              (keyup.enter)=\"getListaExistente()\"\n            >\n          </div>\n          <div class=\"spinner-border text-primary position-absolut positionSpinner\" role=\"status\" [hidden]=\"!loading\">\n            <span class=\"sr-only\">Loading...</span>\n          </div>\n        </div>\n        <div class=\"actions justify-content-end d-flex\">\n          <button type=\"button\" class=\"btn btn-light\" (click)=\"hideChildModal()\">\n            Fechar\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div> -->\n");

/***/ }),

/***/ "4NJB":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/modules/logistica/estoque/painel-inventario/inventario/materiais-ocorrencias/materiais-ocorrencias.service.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: LogisticaEstoquePainelInventarioInventarioMateriaisOcorrenciasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaEstoquePainelInventarioInventarioMateriaisOcorrenciasService", function() { return LogisticaEstoquePainelInventarioInventarioMateriaisOcorrenciasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");



let LogisticaEstoquePainelInventarioInventarioMateriaisOcorrenciasService = class LogisticaEstoquePainelInventarioInventarioMateriaisOcorrenciasService {
    constructor(http) {
        this.http = http;
        this.BASE_URL = `https://crm360.monterrey.com.bo/api`;
    }
    getInventario(cdInventario) {
        return this.http.get(`${this.BASE_URL}/logistica/estoque/inventarios`, {
            params: { cdInventario: cdInventario
            },
            observe: 'response'
        });
    }
    getOcorrencias(idInventario, params) {
        return this.http.get(`${this.BASE_URL}/logistica/estoque/inventarios/${idInventario}/ocorrencias`, {
            params: params,
            observe: 'response',
        });
    }
    getMateriaisNotasFiscais(idInventario, ocorrencia) {
        return this.http.get(`${this.BASE_URL}/logistica/estoque/inventarios/${idInventario}/ocorrencias/${ocorrencia}`, {
            observe: 'response',
        });
    }
    salvarNotasFiscais(idInventario, ocorrencias, matriculaAuditor) {
        return this.http.put(`${this.BASE_URL}/logistica/estoque/inventarios/${idInventario}/ocorrencias`, {
            notasFiscais: ocorrencias,
            matriculaAuditor: matriculaAuditor,
        }, { observe: 'response' });
    }
};
LogisticaEstoquePainelInventarioInventarioMateriaisOcorrenciasService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LogisticaEstoquePainelInventarioInventarioMateriaisOcorrenciasService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], LogisticaEstoquePainelInventarioInventarioMateriaisOcorrenciasService);



/***/ }),

/***/ "7d5/":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/logistica/estoque/painel-inventario/cadastro/cadastro.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2VzdG9xdWUvcGFpbmVsLWludmVudGFyaW8vY2FkYXN0cm8vY2FkYXN0cm8uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "Jbbf":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/logistica/estoque/painel-inventario/inventario/lista/lista.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: LogisticaEstoquePainelInventarioInventarioListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaEstoquePainelInventarioInventarioListaComponent", function() { return LogisticaEstoquePainelInventarioInventarioListaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lista.component.html */ "05IL");
/* harmony import */ var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lista.component.scss */ "c/D8");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/modules/xlsx/xlsx.service */ "eOmW");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/templates/detail-panel/detal-panel.service */ "gIxL");
/* harmony import */ var _lista_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lista.service */ "tn3N");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var _models_totalInventario__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./../../models/totalInventario */ "b35P");
















let LogisticaEstoquePainelInventarioInventarioListaComponent = class LogisticaEstoquePainelInventarioInventarioListaComponent {
    constructor(xlsxService, activatedRoute, notice, listaInventarioService, dateSevice, route, modalService, formBuilder, atividadesService, detailPanelService) {
        this.xlsxService = xlsxService;
        this.activatedRoute = activatedRoute;
        this.notice = notice;
        this.listaInventarioService = listaInventarioService;
        this.dateSevice = dateSevice;
        this.route = route;
        this.modalService = modalService;
        this.formBuilder = formBuilder;
        this.atividadesService = atividadesService;
        this.detailPanelService = detailPanelService;
        this.idInventario = this.activatedRoute.snapshot.params['id'];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.matriculaAuditor = this.currentUser['info']['matricula'];
        this.showAdvancedFilter = true;
        this.cdNotaFiscal = '';
        this.cdNotaFiscalRo = '';
        this.tipoInventario = '';
        this.adminProfile = true;
        this.loaderNavbar = true;
        this.spinnerFullScreen = true;
        this.loading = false;
        this.noResult = false;
        this.compressedTable = false;
        this.considerarMaterialSemEstoque = 1;
        this.perfilTipo = '';
        this.listas = [];
        this.listaInfo = {};
        this.disabledBotoes = {
            finalizar: false,
            editar: false,
            aprovar: false,
            reabrir: false,
        };
        this.habilita = false;
        this.info = false;
        this.ativAprovar = false;
        this.ativFinaliza = false;
        this.ativReabrir = false;
        this.ativCancelar = false;
        this.ativEditar = false;
        this.ativSalvar = false;
        this.ativNotaFiscal = false;
        this.ativExport = false;
        this.inativBotoes = false;
        this.desabilitarBotoes = true;
        this.appTitle = 'Contagem de Materiais';
        this.appTitleInventario = 'Detalhes do Inventário';
        this.appTitleNotasFiscais = 'Lista de Materiais da Nota';
        this.config = {
            animated: true,
        };
        this.parametros = {};
        this.breadCrumbTree = [
            {
                descricao: 'Lista',
                routerLink: '/logistica/estoque/painel-inventario/lista',
            },
            {
                descricao: this.appTitle,
            },
        ];
        /* Config Table */
        this.tableConfig = {};
        this.tableFilterConfig = {
            border: false,
        };
        this.tableNotasFiscaisConfig = {
            subtitleBorder: true,
        };
        this.tableNotasFiscaisMateriaisConfig = {
            subtitleBorder: true,
        };
        this.showDetailPanel = false;
        /* Paginação */
        this.itemsPerPage = 10;
        this.currentPage = 1;
        this.begin = 0;
        this.end = 10;
        this.beginP = 0;
        this.endP = 10;
        this.selectedPeople = [];
        this.listaMateriaisFiltro = [];
        this.materiaisNotaFiscalRo = [];
        this.totalInventario = new _models_totalInventario__WEBPACK_IMPORTED_MODULE_15__["LogisticaEstoquePainelInventarioTotalInventario"]();
        this.form = this.formBuilder.group({
            cdMaterial: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required],
        });
    }
    ngOnInit() {
        this.getListaMateriaisParaFiltro();
        this.getInfoInventario();
        this.onLoadAplication();
        this.atividadesService.registrarAcesso().subscribe();
        this.getPerfil();
        this.onSubscription();
    }
    onLoadAplication() {
        this.adminProfile = true;
        this.loaderNavbar = true;
        let params = {};
        if (!this.adminProfile) {
            setTimeout(() => {
                this.perfilLoaded = true;
                this.loaderNavbar = false;
            }, 500);
        }
        else if (this.adminProfile) {
            setTimeout(() => {
                this.perfilLoaded = false;
                this.loaderNavbar = false;
            }, 500);
        }
    }
    onAdvancedFilter() {
        this.showAdvancedFilter = !this.showAdvancedFilter;
    }
    onToggleListaMateriais() {
        this.considerarMaterialSemEstoque =
            this.considerarMaterialSemEstoque == 1 ? 0 : 1;
        this.getLista('', this.considerarMaterialSemEstoque);
    }
    getLista(cdMaterial = '', considerarMaterialSemEstoque = 1) {
        if (this.activatedRoute.snapshot.params['id'] > 0) {
            this.idInventario = this.activatedRoute.snapshot.params['id'];
            this.spinnerFullScreen = true;
            this.listas = [];
            this.totalItems = 0;
            //Carrega a lista de materiais em inventário
            this.listaInventarioService
                .getLista(this.idInventario, this.matriculaAuditor, cdMaterial, considerarMaterialSemEstoque)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(() => {
                this.spinnerFullScreen = false;
                this.loaderNavbar = false;
                this.getTotal();
            }))
                .subscribe((response) => {
                if (response.data == null) {
                    this.notice.notice('Não há materiais cadastrados para esse inventário.');
                }
                else {
                    this.listas = response.data['materiais'];
                    this.totalItems = response.data['qtRegistros'];
                    this.noResult = false;
                    this.listas.forEach((element) => {
                        element.totalContagem =
                            element.qtPecaContagem * element.pesoPeca +
                                parseFloat(element.qtPesoContagem);
                        this.getInfoInventarioRotativo(element.cdMaterial).subscribe((response) => {
                            if (response.status == 204) {
                                element.somaInventarioRotativo = 0;
                            }
                            else
                                element.somaInventarioRotativo = parseFloat(response.body.saldoEstoque);
                            element.resultadoInventario =
                                parseFloat(element.saldoEstoque) +
                                    element.somaInventarioRotativo;
                        });
                    });
                }
            }, (error) => {
                this.notice.notice('Não há materiais cadastrados para esse inventário.');
                this.noResult = true;
            });
        }
    }
    getListaMateriaisParaFiltro() {
        if (this.activatedRoute.snapshot.params['id'] > 0) {
            this.idInventario = this.activatedRoute.snapshot.params['id'];
            //Carrega a lista de materiais para o filtro
            this.listaInventarioService
                .getListaMateriaisParaFiltro(this.idInventario, this.matriculaAuditor)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(() => (this.loaderNavbar = false)))
                .subscribe((response) => {
                if (response['status'] === 200)
                    this.listaMateriaisFiltro = response['body']['materiais'];
            });
        }
    }
    postSalvar() {
        let materiais = [];
        let requisicao = {};
        this.loaderNavbar = true;
        this.listas.forEach((element) => {
            if (element.qtPecaContagem != null || element.qtPesoContagem != null) {
                materiais.push({
                    idInventarioMaterial: element.idInventarioMaterial,
                    qtPeca: element.qtPecaContagem ? element.qtPecaContagem : null,
                    qtPeso: element.qtPesoContagem ? element.qtPesoContagem : null,
                    cdMaterial: element.cdMaterial ? element.cdMaterial : null,
                });
            } /* else {
              this.getLista();
            } */
        });
        if (materiais.length > 0) {
            requisicao = {
                matriculaAuditor: this.matriculaAuditor,
                materiais,
            };
            this.listaInventarioService
                .postSalvar(requisicao, this.idInventario)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(() => (this.loaderNavbar = false)))
                .subscribe((response) => {
                if (response['body']['erros'].length === 0) {
                    this.notice.success('Registros atualizados com sucesso!');
                }
                else {
                    this.notice.error('Alguns registros não puderam ser atualizados');
                }
                this.getLista();
            }, (error) => {
                this.notice.error('Erro ao salvar registros');
            });
        }
        else {
            this.notice.notice('Inventário não teve alterações para ser salvo');
            /* this.getLista(); */
        }
    }
    finalizar(template) {
        if (this.dateDiff(this.dateRef, new Date()) >= 7)
            this.modalRef = this.modalService.show(template);
        else {
            let finaliza = confirm('Tem certeza que deseja finalizar o inventário?');
            if (finaliza)
                this.atualizarInventario('', 2);
        }
    }
    cancelar(template, valor) {
        let cancela = confirm('Tem certeza que deseja cancelar o inventário?');
        if (valor == 1)
            if (cancela)
                this.modalRef = this.modalService.show(template);
    }
    dateDiff(date1, date2) {
        const diffTime = Math.abs(date2.getTime() - date1.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    }
    atualizarInventario(justificativa, statusInventario) {
        this.loaderNavbar = true;
        let finalizacao = {};
        finalizacao = {
            idStatusInventario: statusInventario,
            matriculaAuditor: this.matriculaAuditor,
            idInventario: this.idInventario,
            observacao: justificativa,
        };
        this.listaInventarioService
            .atualizarInventario(justificativa, statusInventario, this.idInventario, this.matriculaAuditor)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(() => ((this.loaderNavbar = false),
            this.getLista(),
            this.getInfoInventario())))
            .subscribe((response) => {
            if (response['status'] === 200)
                this.notice.success(response['body']['message']);
        }, (error) => {
            this.notice.error(error.error.dsErro);
        });
    }
    getInfoInventarioRotativo(cdMaterial) {
        return this.listaInventarioService.getInfoInventarioRotativo(this.idInventario, cdMaterial);
    }
    /* TRATA HORA ATUAL */
    RetornaDataHoraAtual() {
        var dNow = new Date();
        var localdate = dNow.getDate() +
            '/' +
            (dNow.getMonth() + 1) +
            '/' +
            dNow.getFullYear() +
            ' ' +
            dNow.getHours() +
            ':' +
            dNow.getMinutes();
        return (this.dataNow = localdate);
    }
    /* TRATA CAMPOS DE INPUT - DESABILITA EXIGINDO O CLICK NO BOTÃO EDITAR */
    getInfoInventario() {
        this.listaInventarioService
            .getInfoInventario(this.idInventario)
            .subscribe((response) => {
            this.dateRef = new Date(response.dtInclusao);
            this.status = response.siglaStatusInventario;
            this.tipoInventario = response.dsTipoInventario;
            if (response.siglaStatusInventario == 'LOGI_INVE_STAT_ABER' ||
                response.siglaStatusInventario == 'LOGI_INVE_STAT_FINA' ||
                response.siglaStatusInventario == 'LOGI_INVE_STAT_CANC' ||
                response.siglaStatusInventario == 'LOGI_INVE_STAT_CANC_SIST' ||
                response.siglaStatusInventario == 'LOGI_INVE_STAT_APRO') {
                this.info = true;
            }
            else {
                this.info;
            }
            if (response.siglaStatusInventario == 'LOGI_INVE_STAT_CANC_SIST') {
                this.noResult = true;
            }
            this.controlaAcessoBotoes();
        });
    }
    /* HABILITA CAMPOS PARA EDITAR */
    habilitaCampos() {
        if (this.listas !== null) {
            this.info = false;
            this.habilita = true;
        }
    }
    exportarExcel() {
        this.xlsxService.exportFile(this.listas, 'inventario');
    }
    /* Paginação */
    onPageChanged(event) {
        this.begin = (event.page - 1) * event.itemsPerPage;
        this.end = event.page * event.itemsPerPage;
    }
    /* Paginação */
    /* Pesquisa a lista de materiais para popular o filtro */
    onSearch() {
        this.loaderNavbar = true;
        if (this.form.get('cdMaterial').status == 'VALID')
            this.getLista(this.form.get('cdMaterial').value, 0);
        else
            this.getLista();
    }
    /* */
    getMateriaisNotasFiscaisRo(notaFiscal) {
        this.loading = true;
        this.materiaisNotaFiscalRo = [];
        this.listaInventarioService
            .getMateriaisNotasFiscaisRo(this.idInventario, notaFiscal)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(() => (this.loading = false)))
            .subscribe((data) => {
            if (data['status'] === 200) {
                this.materiaisNotaFiscalRo = data['body'];
                this.compressedTable = true;
                this.notaFiscalSelecionadaRo = notaFiscal;
            }
        });
    }
    openNotaFiscal(idInventario) {
        this.route.navigate([`../../${idInventario}/notas-fiscais`], {
            relativeTo: this.activatedRoute,
        });
    }
    openOcorrencias(idInventario) {
        this.route.navigate([`../../${idInventario}/ocorrencias`], {
            relativeTo: this.activatedRoute,
        });
    }
    /* Função para abertura de modal de Notas Fiscais relacionadas a R.O's */
    /* openModalRo() {
      this.getListaExistenteRo();
      this.childModalRo.show();
    } */
    /*   getListaCarregadaMaisNotaFiscalRo() {
      let containsNotaFiscal = false;
      let isNotUndefined = typeof this.tempNotasFiscais !== 'undefined';
  
      if (isNotUndefined) {
        containsNotaFiscal = this.tempNotasFiscais.find(
          (element) => element.notaFiscal === this.cdNotaFiscalRo
        );
      }
  
      return isNotUndefined && containsNotaFiscal;
    } */
    /*   getListaExistenteRo() {
      if (this.getListaCarregadaMaisNotaFiscalRo()) {
        const val = this.cdNotaFiscalRo;
  
        if (!val) {
          this.notasFiscaisRo = this.tempNotasFiscais;
        }
  
        const temp = this.tempNotasFiscais.filter((row) => {
          return Object.keys(row).some((property) => {
            return row[property] === null
              ? null
              : row[property].toString().indexOf(val) !== -1;
          });
        });
  
        this.notasFiscaisRo = temp;
        this.loading = false;
      } else this.getNotasFiscaisRo();
    } */
    /* Função consulta lista de notas fiscais, seja ela uma lista com 1 ou mais resultados */
    getNotasFiscaisRo() {
        this.loading = true;
        this.listaInventarioService
            .getNotasFiscaisRo(this.idInventario, this.cdNotaFiscalRo)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(() => (this.loading = false)))
            .subscribe((data) => {
            if (data['status'] === 200) {
                this.notasFiscaisRo = data['body']['notasFiscais'];
                this.tempNotasFiscaisRo = data['body']['notasFiscais'];
                this.qtNotasFiscaisRo = data['body']['qtRegistros'];
            }
            else
                this.notice.notice('Não houve retorno para sua consulta');
        }, (error) => this.notice.error(error.message));
    }
    hideChildModal() {
        this.childModal.hide();
        this.postSalvar();
    }
    hideChildModalRo() {
        this.childModalRo.hide();
        this.postSalvar();
    }
    onClose() {
        this.compressedTable = false;
        this.notaFiscalSelecionada = 0;
    }
    onCloseRo() {
        this.compressedTable = false;
        this.notaFiscalSelecionadaRo = 0;
    }
    /* Paginação */
    onPageChangedProduct(event) {
        this.beginP = (event.page - 1) * event.itemsPerPage;
        this.endP = event.page * event.itemsPerPage;
    }
    /* Paginação */
    salvarNotasFiscaisRo() {
        let checkAlterado = [];
        this.notasFiscaisRo.forEach((element) => {
            if (element.checkAlterado) {
                checkAlterado.push(element);
            }
        });
        let particao = 50;
        let qtEnvios = Math.ceil(checkAlterado.length / particao);
        let req = [];
        this.loading = true;
        for (let index = 0; index < qtEnvios; index++)
            req.push(this.listaInventarioService.salvarNotasFiscaisRo(this.idInventario, checkAlterado.slice(particao * index, particao * (index + 1)), this.matriculaAuditor));
        Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["forkJoin"])(req)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(() => (this.loading = false)))
            .subscribe((data) => {
            let contador = 0;
            this.notice.success('Itens salvos com sucesso!');
            data.forEach((element) => {
                if (element['status'] == 200) {
                    contador++;
                }
            });
            if (contador === data.length) {
            }
        }, (error) => {
            this.notice.error('Ocorreu um erro ao salvar os itens');
        });
    }
    getTotalContagem(material) {
        return ((material.pesoPeca / 1000) * material.qtPecaContagem +
            material.qtPesoContagem);
    }
    getSaldoInventario(material) {
        var _a;
        if (!material.qtPecaContagem && !material.qtPesoContagem) {
            return undefined;
        }
        const pesoFisico = (material.pesoPeca / 1000) * material.qtPecaContagem +
            material.qtPesoContagem;
        const estoque = material.qtPesoEstoque;
        const notasFiscais = (_a = parseFloat(material.qtMaterialNotaFiscal)) !== null && _a !== void 0 ? _a : 0;
        const saldo = pesoFisico - estoque + notasFiscais;
        return saldo;
    }
    getResultadoInventario(material) {
        if (!material.qtPecaContagem && !material.qtPesoContagem) {
            return undefined;
        }
        return ((material.pesoPeca / 1000) * material.qtPecaContagem +
            material.qtPesoContagem -
            material.qtPesoEstoque +
            material.somaInventarioRotativo);
    }
    getResultadoMonetario(material) {
        if (!material.qtPecaContagem && !material.qtPesoContagem) {
            return undefined;
        }
        return (((material.pesoPeca / 1000) * material.qtPecaContagem +
            material.qtPesoContagem -
            material.qtPesoEstoque +
            material.somaInventarioRotativo) *
            material.precoMinimo);
    }
    getPerfil() {
        this.listaInventarioService
            .getPerfil(this.matriculaAuditor)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(() => {
            this.spinnerFullScreen = false;
            this.loaderNavbar = false;
            this.getLista();
        }))
            .subscribe((response) => {
            this.disabledBotoes = response['disabledBotoes'];
            this.perfilTipo = response['perfilTipo'];
            this.controlaAcessoBotoes();
        }, (error) => {
            this.notice.notice('Não há vinculo de perfil para realizar inventário nesse usuário.');
            this.noResult = true;
        });
    }
    getTotal() {
        this.spinnerFullScreen = true;
        this.listaInventarioService
            .getTotal(this.idInventario)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(() => {
            this.spinnerFullScreen = false;
        }))
            .subscribe((response) => {
            this.listaInfo = response.body['data']['0'];
        });
    }
    controlaAcessoBotoes() {
        if (this.perfilTipo == 'assistente' &&
            this.status == 'LOGI_INVE_STAT_ABER') {
            this.ativExport = true;
            this.ativEditar = true;
            this.ativNotaFiscal = true;
            this.ativSalvar = true;
        }
        else if (this.perfilTipo == 'lider') {
            this.ativFinaliza = true;
            this.ativCancelar = true;
            this.ativEditar = true;
            this.ativNotaFiscal = true;
            this.ativSalvar = true;
            if (this.status == 'LOGI_INVE_STAT_ABER')
                this.ativExport = true;
        }
        else if (this.perfilTipo == 'coordenador') {
            if (this.status == 'LOGI_INVE_STAT_ABER') {
                this.ativFinaliza = true;
                this.ativReabrir = false;
                this.ativAprovar = false;
                this.ativCancelar = true;
                this.ativEditar = true;
                this.ativNotaFiscal = true;
                this.ativSalvar = true;
                this.ativExport = true;
            }
            if (this.status == 'LOGI_INVE_STAT_FINA') {
                this.ativFinaliza = false;
                this.ativReabrir = true;
                this.ativAprovar = true;
                this.ativCancelar = true;
                this.ativEditar = false;
                this.ativNotaFiscal = false;
                this.ativSalvar = false;
                this.ativExport = true;
            }
            if (this.status == 'LOGI_INVE_STAT_APRO') {
                this.ativFinaliza = false;
                this.ativReabrir = false;
                this.ativAprovar = false;
                this.ativCancelar = false;
                this.ativEditar = false;
                this.ativNotaFiscal = false;
                this.ativSalvar = false;
                this.ativExport = true;
            }
        }
    }
    onSubscription() {
        this.$showDetailPanelSubscription = this.detailPanelService.config.subscribe((event) => {
            this.showDetailPanel = event.showing;
        });
    }
    onDetailPanel(i) {
        var _a, _b, _c, _d;
        let index = this.currentPage * this.itemsPerPage - this.itemsPerPage + i;
        let material = this.listas[index];
        this.detailPanelService.show();
        this.detailPanelService.loadedFinished(false);
        this.totalInventario.saldoInventario = (_a = this.getSaldoInventario(material)) !== null && _a !== void 0 ? _a : 0;
        this.totalInventario.totalContagem = (_b = this.getTotalContagem(material)) !== null && _b !== void 0 ? _b : 0;
        this.totalInventario.resultadoInventario = (_c = this.getResultadoInventario(material)) !== null && _c !== void 0 ? _c : 0;
        this.totalInventario.resultadoMonetario = (_d = this.getResultadoMonetario(material)) !== null && _d !== void 0 ? _d : 0;
        this.totalInventario.enderecoPatio = material.enderecoPatio;
        this.totalInventario.qtPesoEstoque = material.qtPesoEstoque;
        this.totalInventario.saldoEstoque = material.saldoEstoque;
        this.totalInventario.saldoFinanceiro = material.saldoFinanceiro;
        this.totalInventario.precoMinimo = material.precoMinimo;
        this.totalInventario.pesoPeca = material.pesoPeca;
        this.totalInventario.somaInventarioRotativo =
            material.somaInventarioRotativo;
        this.totalInventario.dsClasse = material.dsClasse;
        this.totalInventario.qtMaterialNotaFiscal = material.qtMaterialNotaFiscal;
    }
    ngOnDestroy() {
        this.$showDetailPanelSubscription.unsubscribe();
    }
};
LogisticaEstoquePainelInventarioInventarioListaComponent.ctorParameters = () => [
    { type: src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_4__["XlsxService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"] },
    { type: _lista_service__WEBPACK_IMPORTED_MODULE_9__["LogisticaEstoquePainelInventarioInventarioListaService"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_10__["DateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_14__["AtividadesService"] },
    { type: src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_8__["DetailPanelService"] }
];
LogisticaEstoquePainelInventarioInventarioListaComponent.propDecorators = {
    childModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"], args: ['childModal', { static: false },] }],
    childModalRo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"], args: ['childModalRo', { static: false },] }]
};
LogisticaEstoquePainelInventarioInventarioListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'logistica-estoque-inventario-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_8__["DetailPanelService"]],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_4__["XlsxService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"],
        _lista_service__WEBPACK_IMPORTED_MODULE_9__["LogisticaEstoquePainelInventarioInventarioListaService"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_10__["DateService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_14__["AtividadesService"],
        src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_8__["DetailPanelService"]])
], LogisticaEstoquePainelInventarioInventarioListaComponent);



/***/ }),

/***/ "KRZP":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/logistica/estoque/painel-inventario/cadastro/cadastro.service.ts ***!
  \******************************************************************************************/
/*! exports provided: LogisticaEstoquePainelInventarioCadastroService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaEstoquePainelInventarioCadastroService", function() { return LogisticaEstoquePainelInventarioCadastroService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");



let LogisticaEstoquePainelInventarioCadastroService = class LogisticaEstoquePainelInventarioCadastroService {
    constructor(http) {
        this.http = http;
        this.BASE_URL = `https://crm360.monterrey.com.bo/api`;
    }
    getEmpresas() {
        return this.http.get(`${this.BASE_URL}/common/empresas`);
    }
    getDepositos(idEmpresa) {
        return this.http.get(`${this.BASE_URL}/common/depositos/${idEmpresa}`);
    }
    getLinhas() {
        return this.http.get(`${this.BASE_URL}/common/linhas`);
    }
    getClasses(descricaoLinhas) {
        return this.http.get(`${this.BASE_URL}/common/classes`, {
            params: {
                linhas: btoa(descricaoLinhas)
            }
        });
    }
    getMateriais(descricaoLinhas, idClasses) {
        if (!idClasses)
            idClasses = '';
        return this.http.get(`${this.BASE_URL}/common/materiais`, {
            params: {
                linhas: btoa(descricaoLinhas),
                classes: btoa(idClasses)
            }
        });
    }
    postCadastraInventario(params) {
        return this.http.post(`${this.BASE_URL}/logistica/estoque/inventarios`, params, { observe: 'response' });
    }
    postMateriais(matriculaAuditor, idInventario, cdMaterial) {
        return this.http.post(`${this.BASE_URL}/logistica/estoque/inventarios/${idInventario}/materiais`, {
            matriculaAuditor: matriculaAuditor,
            idInventario: idInventario,
            cdMaterial: cdMaterial
        }, { observe: 'response' });
    }
    getPerfil(matricula = '') {
        return this.http.get(`${this.BASE_URL}/logistica/estoque/inventario/usuarios/${matricula}/perfis/controle-acesso`);
    }
};
LogisticaEstoquePainelInventarioCadastroService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LogisticaEstoquePainelInventarioCadastroService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], LogisticaEstoquePainelInventarioCadastroService);



/***/ }),

/***/ "LcXQ":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/logistica/estoque/painel-inventario/cadastro/cadastro.component.ts ***!
  \********************************************************************************************/
/*! exports provided: LogisticaEstoquePainelInventarioCadastroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaEstoquePainelInventarioCadastroComponent", function() { return LogisticaEstoquePainelInventarioCadastroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cadastro.component.html */ "eoW+");
/* harmony import */ var _cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cadastro.component.scss */ "7d5/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../../shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _cadastro_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cadastro.service */ "KRZP");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "iInd");











let LogisticaEstoquePainelInventarioCadastroComponent = class LogisticaEstoquePainelInventarioCadastroComponent {
    constructor(formBuilder, localeService, cadastroService, notice, route, activatedRoute) {
        this.formBuilder = formBuilder;
        this.localeService = localeService;
        this.cadastroService = cadastroService;
        this.notice = notice;
        this.route = route;
        this.activatedRoute = activatedRoute;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.matriculaAuditor = this.currentUser['info']['matricula'];
        this.loaderNavbar = false;
        this.spinnerFullScreen = true;
        this.loading = true;
        this.appTitle = 'Cadastrar inventário';
        this.cdInventario = '';
        this.breadCrumbTree = [
            {
                descricao: 'Lista de inventários',
                routerLink: '/logistica/estoque/painel-inventario/lista',
            },
            {
                descricao: this.appTitle,
            },
        ];
        /* TIPOS DE INVENTÁRIOS */
        this.tipoInventario = [
            {
                codigo: 1,
                descNome: 'Inventário oficial',
            },
            {
                codigo: 2,
                descNome: 'Inventário rotativo',
            },
        ];
        this.disabledBotoes = {
            finalizar: false,
            editar: false,
            aprovar: false,
        };
        this.localeService.use('pt-br');
        this.bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' }, { adaptivePosition: true }, { showWeekNumbers: false });
        this.form = this.formBuilder.group({
            tipoInventario: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            cdEmpresa: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            cdDeposito: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            linhas: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            classes: [null],
            materiais: [null],
            cdInventario: [null],
            sigla: [null],
            pagina: 1,
            matriculaAuditor: [this.matriculaAuditor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    }
    ngOnInit() {
        this.cadastroService
            .getEmpresas()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => {
            this.spinnerFullScreen = false;
        }))
            .subscribe((response) => {
            if (Object.keys(response).length > 0) {
                this.empresas = response;
            }
        });
        this.cadastroService
            .getLinhas()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => (this.loading = false)))
            .subscribe((response) => {
            if (Object.keys(response).length > 0) {
                this.linhas = response;
            }
        });
        this.getPerfil();
    }
    getDepositos() {
        this.loaderNavbar = true;
        if (this.form.get('cdEmpresa').status === 'VALID') {
            let idEmpresa = this.form.get('cdEmpresa').value;
            this.cadastroService
                .getDepositos(idEmpresa)
                .subscribe((response) => {
                if (Object.keys(response).length > 0) {
                    this.depositos = response;
                }
                this.loaderNavbar = false;
            });
        }
    }
    getClasses() {
        this.classes = [];
        let descricaoLinhas = [];
        this.loaderNavbar = true;
        if (this.form.get('linhas').status === 'VALID') {
            descricaoLinhas.push(this.form.get('linhas').value);
            this.cadastroService
                .getClasses(descricaoLinhas)
                .subscribe((response) => {
                if (Object.keys(response).length > 0) {
                    this.classes = response;
                }
                this.loaderNavbar = false;
            });
        }
    }
    getMateriais(linhas, classes) {
        this.materiais = [];
        this.loaderNavbar = true;
        if (this.form.get('linhas').status === 'VALID' ||
            this.form.get('classes').status === 'VALID') {
            let descricaoLinhas = this.form.get('linhas').value;
            let idClasses = this.form.get('classes').value;
            this.cadastroService
                .getMateriais(descricaoLinhas, idClasses)
                .subscribe((response) => {
                if (Object.keys(response).length > 0) {
                    this.materiais = response.result;
                }
                this.loaderNavbar = false;
            });
        }
    }
    postCadastraInventario() {
        if (this.disabledBotoes.finalizar == false &&
            this.disabledBotoes.editar == false &&
            this.disabledBotoes.aprovar == false) {
            this.notice.notice('Seu usuário não pode iniciar um inventário.');
        }
        else {
            if (this.form.get('cdEmpresa').status === 'VALID' &&
                this.form.get('cdDeposito').status === 'VALID') {
                this.spinnerFullScreen = true;
                this.cadastroService.postCadastraInventario(this.form.value).subscribe((response) => {
                    if (response.status == 200) {
                        this.postMateriais(this.matriculaAuditor, response.body.data);
                    }
                    else
                        this.notice.error('Houve um errro ao cadastrar o inventário.');
                }, (error) => {
                    this.spinnerFullScreen = false;
                    if (error.status < 500)
                        this.notice.notice(error.error.dsErro);
                    else
                        this.notice.error('Ocorreu um erro! postCadastraInventario');
                });
            }
        }
    }
    postMateriais(matriculaAuditor, idInventario) {
        let cdMateriais = [];
        if (this.form.get('materiais').value == null)
            this.materiais.forEach((element) => {
                cdMateriais.push(element.codigoMaterial);
            });
        else
            cdMateriais = this.form.get('materiais').value;
        let particao = 50;
        let qtEnvios = Math.ceil(cdMateriais.length / particao);
        let mat = [];
        for (let index = 0; index < qtEnvios; index++)
            mat.push(this.cadastroService.postMateriais(matriculaAuditor, idInventario, cdMateriais.slice(particao * index, particao * (index + 1))));
        Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["forkJoin"])(mat)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => (this.spinnerFullScreen = false)))
            .subscribe((response) => {
            let contador = 0;
            response.forEach((element) => {
                if (element.status == 200) {
                    contador++;
                }
            });
            if (contador === response.length) {
                this.route.navigate([`../${idInventario}/contagem-materiais`], {
                    relativeTo: this.activatedRoute,
                });
            }
            else {
                this.notice.error('Não há dados.');
            }
        }, (error) => {
            if (error.status < 500)
                this.notice.notice(error.error.dsErro);
            else
                this.notice.error('Ocorreu um erro!');
        });
    }
    getPerfil() {
        this.cadastroService
            .getPerfil(this.matriculaAuditor)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => {
            this.spinnerFullScreen = false;
            this.loaderNavbar = false;
        }))
            .subscribe((response) => {
            this.disabledBotoes = response['disabledBotoes'];
        }, (error) => {
            this.notice.notice('Não há vinculo de perfil para realizar inventário nesse usuário.');
        });
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
    resetForm(formReset) {
        this.form.get('classes').reset();
        this.form.get('materiais').reset();
        if (formReset == 'classes')
            return;
        this.form.get('linhas').reset();
        if (formReset == 'linhas')
            return;
        this.form.get('cdDeposito').reset();
    }
};
LogisticaEstoquePainelInventarioCadastroComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsLocaleService"] },
    { type: _cadastro_service__WEBPACK_IMPORTED_MODULE_8__["LogisticaEstoquePainelInventarioCadastroService"] },
    { type: _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] }
];
LogisticaEstoquePainelInventarioCadastroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'cadastro',
        template: _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsLocaleService"],
        _cadastro_service__WEBPACK_IMPORTED_MODULE_8__["LogisticaEstoquePainelInventarioCadastroService"],
        _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"]])
], LogisticaEstoquePainelInventarioCadastroComponent);



/***/ }),

/***/ "M/gQ":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/logistica/estoque/painel-inventario/painel-inventario-routing.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: LogisticaEstoquePainelInventarioRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaEstoquePainelInventarioRoutingModule", function() { return LogisticaEstoquePainelInventarioRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/not-found/not-found.component */ "6nXq");
/* harmony import */ var _inventario_inventario_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inventario/inventario.component */ "bc5J");
/* harmony import */ var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cadastro/cadastro.component */ "LcXQ");
/* harmony import */ var _inventario_lista_lista_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inventario/lista/lista.component */ "Jbbf");
/* harmony import */ var _inventario_materiais_notas_fiscais_materiais_notas_fiscais_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./inventario/materiais-notas-fiscais/materiais-notas-fiscais.component */ "Z9EM");
/* harmony import */ var _inventario_materiais_ocorrencias_materiais_ocorrencias_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./inventario/materiais-ocorrencias/materiais-ocorrencias.component */ "lJJZ");
/* harmony import */ var _inventario_relatorio_relatorio_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./inventario/relatorio/relatorio.component */ "nAji");










const routes = [
    {
        path: '',
        redirectTo: 'lista',
        pathMatch: 'full',
    },
    {
        path: 'lista',
        component: _inventario_inventario_component__WEBPACK_IMPORTED_MODULE_4__["LogisticaEstoquePainelInventarioInventarioComponent"],
    },
    {
        path: ':id/contagem-materiais',
        component: _inventario_lista_lista_component__WEBPACK_IMPORTED_MODULE_6__["LogisticaEstoquePainelInventarioInventarioListaComponent"],
    },
    {
        path: ':id/notas-fiscais',
        component: _inventario_materiais_notas_fiscais_materiais_notas_fiscais_component__WEBPACK_IMPORTED_MODULE_7__["LogisticaEstoquePainelInventarioInventarioMateriaisNotasFiscaisComponent"],
    },
    {
        path: ':id/ocorrencias',
        component: _inventario_materiais_ocorrencias_materiais_ocorrencias_component__WEBPACK_IMPORTED_MODULE_8__["LogisticaEstoquePainelInventarioInventarioMateriaisOcorrenciasComponent"],
    },
    {
        path: ':id/relatorio',
        component: _inventario_relatorio_relatorio_component__WEBPACK_IMPORTED_MODULE_9__["LogisticaEstoquePainelInventarioInventarioRelatorioComponent"],
    },
    {
        path: 'cadastro',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_5__["LogisticaEstoquePainelInventarioCadastroComponent"],
    },
    {
        path: '**',
        component: src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"],
    },
];
let LogisticaEstoquePainelInventarioRoutingModule = class LogisticaEstoquePainelInventarioRoutingModule {
};
LogisticaEstoquePainelInventarioRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LogisticaEstoquePainelInventarioRoutingModule);



/***/ }),

/***/ "MCWC":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/logistica/estoque/painel-inventario/painel-inventario.component.ts ***!
  \********************************************************************************************/
/*! exports provided: LogisticaEstoquePainelInventarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaEstoquePainelInventarioComponent", function() { return LogisticaEstoquePainelInventarioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_painel_inventario_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./painel-inventario.component.html */ "3pwz");
/* harmony import */ var _painel_inventario_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./painel-inventario.component.scss */ "298m");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");






let LogisticaEstoquePainelInventarioComponent = class LogisticaEstoquePainelInventarioComponent {
    constructor(route, atividadesService) {
        this.route = route;
        this.atividadesService = atividadesService;
    }
    ngOnInit() {
        this.route.navigate(['/logistica/estoque/painel-inventario/inventario']);
        this.atividadesService.registrarAcesso().subscribe();
    }
};
LogisticaEstoquePainelInventarioComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_5__["AtividadesService"] }
];
LogisticaEstoquePainelInventarioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'painel-inventario',
        template: _raw_loader_painel_inventario_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_painel_inventario_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_5__["AtividadesService"]])
], LogisticaEstoquePainelInventarioComponent);



/***/ }),

/***/ "QOps":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/logistica/estoque/painel-inventario/inventario/inventario.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".custom-bottom-inve {\n  padding: 1.05rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvZXN0b3F1ZS9wYWluZWwtaW52ZW50YXJpby9pbnZlbnRhcmlvL2ludmVudGFyaW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvZXN0b3F1ZS9wYWluZWwtaW52ZW50YXJpby9pbnZlbnRhcmlvL2ludmVudGFyaW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tLWJvdHRvbS1pbnZlIHtcbiAgcGFkZGluZzogMS4wNXJlbTtcbn0iXX0= */");

/***/ }),

/***/ "Qlyr":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/estoque/painel-inventario/inventario/inventario.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen [hidden]=\"!spinnerFullScreen\"></loader-spinner-full-screen>\n<loader-spinner-navbar [hidden]=\"!loaderNavbar\"></loader-spinner-navbar>\n<app-header [appTitle]=\"appTitle\">\n  <button\n    (click)=\"onSearch()\">\n    Pesquisar\n  </button>\n  <button\n    (click)=\"onCadastrar()\">\n    Cadastro\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\n  <!-- Início dos Filtros -->\n  <advanced-filter #scrollToFilter>\n    <form autocomplete=\"off\" [formGroup]=\"form\">\n      <div class=\"form-row justify-content-center\">\n        <div class=\"form-group col-md-2\">\n          <label for=\"tipo\">Tipo de Inventário</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"false\"\n            [items]=\"tipoInventario\"\n            [virtualScroll]=\"true\"\n            labelForId=\"tipo\"\n            bindLabel=\"descNome\"\n            bindValue=\"value\"\n            placeholder=\"Selecione um Tipo\"\n            formControlName=\"tipoInventario\"\n          >\n          </ng-select>\n          <invalid-form-control\n            [show]=\"onFieldInvalid('tipoInventario')\"\n            message=\"Empresa é obrigatório.\">\n          </invalid-form-control>\n        </div>\n        <div class=\"form-group col-md-3\">\n          <label for=\"empresa\">Empresa</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"false\"\n            [items]=\"empresas\"\n            [virtualScroll]=\"true\"\n            labelForId=\"empresa\"\n            bindLabel=\"nomeFantasia\"\n            bindValue=\"codigoEmpresa\"\n            placeholder=\"Selecione uma empresa\"\n            formControlName=\"empresa\"\n            (change) =\"getDepositos()\"\n          >\n          </ng-select>\n          <invalid-form-control\n            [show]=\"onFieldInvalid('empresa')\"\n            message=\"Empresa é obrigatório.\">\n          </invalid-form-control>\n        </div>\n        <div class=\"form-group col-md-2\">\n          <label for=\"depositos\">Depósito</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"false\"\n            [items]=\"depositos\"\n            [virtualScroll]=\"true\"\n            labelForId=\"deposito\"\n            bindLabel=\"depositoDescricao\"\n            bindValue=\"depositoId\"\n            placeholder=\"Selecione um deposito\"\n            formControlName=\"depositos\"\n          >\n          </ng-select>\n          <invalid-form-control\n            [show]=\"onFieldInvalid('depositos')\"\n            message=\"Despósito é obrigatório.\">\n          </invalid-form-control>\n        </div>\n        <div class=\"form-group col-md-2\">\n          <label for=\"linhas\">Linha</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"false\"\n            [items]=\"linhas\"\n            [virtualScroll]=\"true\"\n            labelForId=\"linha\"\n            bindLabel=\"linha\"\n            bindValue=\"linha\"\n            placeholder=\"Selecione uma linha\"\n            formControlName=\"linhas\"\n            (change) = \"getClasses(); getMateriais(linhas, '')\"\n          >\n          </ng-select>\n          <invalid-form-control\n            [show]=\"onFieldInvalid('linhas')\"\n            message=\"Linha é obrigatório.\">\n          </invalid-form-control>\n        </div>\n        <div class=\"form-group col-md-3\">\n            <label for=\"classes\">Classe</label>\n            <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"false\"\n              [items]=\"classes\"\n              [multiple]=\"true\"\n              [closeOnSelect]=\"false\"\n              [virtualScroll]=\"true\"\n              labelForId=\"classes\"\n              bindLabel=\"classeDescricao\"\n              bindValue=\"classeId\"\n              placeholder=\"Selecione uma classe\"\n              formControlName=\"classes\"\n              (change) = \"getMateriais(linhas, classes)\"\n              [ngClass]=\"onFieldError('classes')\"\n            >\n            </ng-select>\n            <invalid-form-control\n              [show]=\"onFieldInvalid('classes')\"\n              message=\"Classe é obrigatório.\">\n            </invalid-form-control>\n          </div>\n      </div>\n      <div class=\"form-row justify-content-center\">\n        <div class=\"form-group col-md-6\">\n          <label for=\"materiais\">Material</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"false\"\n            [items]=\"materiais\"\n            [multiple]=\"true\"\n            [closeOnSelect]=\"false\"\n            [virtualScroll]=\"true\"\n            labelForId=\"materiais\"\n            bindLabel=\"codigoDescricaoMaterial\"\n            bindValue=\"codigoMaterial\"\n            placeholder=\"Selecione um material\"\n            formControlName=\"materiais\"\n          >\n          </ng-select>\n        </div>\n        <div class=\"form-group col-md-2\">\n          <label for=\"dataInicial\"> Data inicial </label>\n          <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\">\n                <i class=\"far fa-calendar-alt\"></i>\n              </span>\n            </div>\n            <input\n            class=\"form-control\"\n            id=\"dataInicial\"\n            type=\"text\"\n            bsDatepicker\n            [bsConfig]=\"bsConfig\"\n            formControlName=\"dataInicial\"\n            >\n          </div>\n          <invalid-form-control\n            [show]=\"onFieldInvalid('dataInicial')\"\n            message=\"Data inicial é obrigatório.\">\n          </invalid-form-control>\n        </div>\n        <div class=\"form-group col-md-2\">\n          <label for=\"dataFinal\"> Data final </label>\n          <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\">\n                <i class=\"far fa-calendar-alt\"></i>\n              </span>\n            </div>\n            <input\n            class=\"form-control\"\n            id=\"dataFinal\"\n            type=\"text\"\n            bsDatepicker\n            [bsConfig]=\"bsConfig\"\n            formControlName=\"dataFinal\"\n            >\n          </div>\n          <invalid-form-control\n            [show]=\"onFieldInvalid('dataFinal')\"\n            message=\"Data inicial é obrigatório.\">\n          </invalid-form-control>\n        </div>\n        <div class=\"form-group col-md-2 justify-content-end\">\n          <label for=\"cdInventario\"> Código do inventário </label>\n          <input \n            id=\"cdInventario\"\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"DIGITE...\"\n            formControlName=\"cdInventario\"\n            (keyup.enter)=\"onSearch()\"\n          >\n        </div>\n      </div>\n    </form>\n  </advanced-filter>\n  <!-- Início das Legendas -->\n  <subtitles\n    [data]=\"subtitles\"\n    [show]=\"inve.length > 0\"\n    [allowActivation]=\"true\"\n    (activationChange)=\"onClickSubtitle($event?.id)\">\n  </subtitles>\n  <!-- Início da Tabela -->\n  <div class=\"row\">\n    <div [ngClass]=\"{'col': !showDetailPanel, 'col-9 pr-0': showDetailPanel}\">\n      <custom-table [config]=\"tableConfig\" [hidden]=\"noResult\">\n        <ng-template #thead let-thead>\n          <tr>\n            <th>Data</th>\n            <th>Código</th>\n            <th>Depósito</th>\n            <th [hidden]=\"compressedTable\">Linha</th>\n            <th>Tipo</th>\n            <th style=\"width:250px\" nowrap>Auditor</th>\n            <th class=\"align-middle\" style=\"width:70px\"></th>\n            <th class=\"align-middle\" style=\"width:70px\"></th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr *ngFor=\"let inventario of inventarios let i = index\" class=\"hover\" \n                      [ngClass]=\"inventario.status ? 'bgRowTable' : ''\" (click)=\"getClassesInventario(inventario.idInventario, i)\"\n                >\n                  <td [ngClass]=\"{\n                    'border-primary'    : inventario.siglaStatusInventario == 'LOGI_INVE_STAT_APRO',\n                    'border-secondary'  : inventario.siglaStatusInventario == 'LOGI_INVE_STAT_CANC_SIST',\n                    'border-danger'     : inventario.siglaStatusInventario == 'LOGI_INVE_STAT_CANC',\n                    'border-success'    : inventario.siglaStatusInventario == 'LOGI_INVE_STAT_FINA',\n                    'border-warning'    : inventario.siglaStatusInventario == 'LOGI_INVE_STAT_ABER'\n                  }\"\n                  > {{ inventario.dtInclusao  | date : 'dd/MM/yyyy HH:mm:ss'}} </td>\n                  <td> {{ inventario.idInventario   | number:'6.0-0'}} </td>\n                  <td> {{ inventario.dsDeposito | uppercase }} </td>\n                  <td [hidden]=\"compressedTable\"> {{ inventario.dsLinha | uppercase }} </td>\n                  <td> {{ inventario.dsTipoInventario | uppercase }} </td>\n                  <td style=\"width:250px\" nowrap> {{ inventario.dsUsuario | uppercase }} </td> \n                  <td class=\"align-middle\" style=\"width:70px\">\n                    <span tooltip=\"Visualizar\" placement=\"left\" container=\"body\">\n                      <button class=\"btn-icon-sm\" (click)=\"abrirInventario(inventario.idInventario)\">\n                        <i class=\"fas fa-search\"></i>\n                      </button>\n                    </span>\n                  </td>\n                  <td class=\"align-middle\" style=\"width:70px\">\n                    <span tooltip=\"Imprimir\" placement=\"left\" container=\"body\">\n                      <button class=\"btn-icon-sm\" (click)=\"abrirRelatorio(inventario.idInventario)\">\n                        <i class=\"fas fa-file-alt\"></i>\n                      </button>\n                    </span>\n                  </td>\n                </tr>\n        </ng-template>\n      </custom-table>\n      <div class=\"mt-3\" [hidden]=\"noResult\">\n        Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\n        <pagination\n          [maxSize]=\"10\"\n          [totalItems]=\"totalItems\"\n          [(itemsPerPage)]=\"itemsPerPage\"\n          (pageChanged)=\"onPageChanged($event)\"\n          [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPage\"\n          previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\"\n          lastText=\"&raquo;\">\n        </pagination>\n      </div>\n      <empty-result\n        message=\"Nenhuma informação encontrada\"\n        class=\"my-3\"\n        *ngIf=\"dadosEmpty\">\n      </empty-result>\n    </div>\n    <div class=\"col-3\" [hidden]=\"!showDetailPanel\">\n      <detail-panel [panelTitle]=\"appTitle\">\n          <custom-table>\n            <ng-template #thead let-thead>\n              <tr>\n                <th>Classe</th>\n              </tr>\n            </ng-template>\n            <ng-template #tbody let-tbody>\n              <tr *ngFor=\"let infoClasse of infoClasses\">\n                <td> {{ infoClasse.dsClasse | uppercase }} </td>\n              </tr>\n            </ng-template>\n          </custom-table>\n          <custom-table>\n            <ng-template #thead let-thead>\n              <tr [hidden]=\"infoLinha == null\">\n                <th>Linha</th>\n              </tr>\n            </ng-template>\n            <ng-template #tbody let-tbody>\n              <tr [hidden]=\"infoLinha == null\">\n                <td> {{ infoLinha | uppercase }} </td>\n              </tr>\n            </ng-template>\n          </custom-table>\n      </detail-panel>\n    </div>\n  </div>\n</app-body>");

/***/ }),

/***/ "Z9EM":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/modules/logistica/estoque/painel-inventario/inventario/materiais-notas-fiscais/materiais-notas-fiscais.component.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: LogisticaEstoquePainelInventarioInventarioMateriaisNotasFiscaisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaEstoquePainelInventarioInventarioMateriaisNotasFiscaisComponent", function() { return LogisticaEstoquePainelInventarioInventarioMateriaisNotasFiscaisComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_materiais_notas_fiscais_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./materiais-notas-fiscais.component.html */ "3r0W");
/* harmony import */ var _materiais_notas_fiscais_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./materiais-notas-fiscais.component.scss */ "i75G");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _materiais_notas_fiscais_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./materiais-notas-fiscais.service */ "vuU3");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/templates/detail-panel/detal-panel.service */ "gIxL");











let LogisticaEstoquePainelInventarioInventarioMateriaisNotasFiscaisComponent = class LogisticaEstoquePainelInventarioInventarioMateriaisNotasFiscaisComponent {
    constructor(activatedRoute, notice, route, formBuilder, detailPanelService, notaFiscalService) {
        this.activatedRoute = activatedRoute;
        this.notice = notice;
        this.route = route;
        this.formBuilder = formBuilder;
        this.detailPanelService = detailPanelService;
        this.notaFiscalService = notaFiscalService;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.matriculaAuditor = this.currentUser['info']['matricula'];
        this.idInventario = this.activatedRoute.snapshot.params['id'];
        this.loading = false;
        this.cdNotaFiscal = '';
        this.cdEmp = '';
        this.materiaisNotaFiscal = [];
        this.spinnerFullScreen = true;
        this.loaderNavbar = true;
        this.tableFilterConfig = {
            subtitleBorder: true,
        };
        /* Paginação */
        this.itemsPerPage = 10;
        this.currentPage = 1;
        this.begin = 0;
        this.end = 10;
        this.beginP = 0;
        this.endP = 10;
        this.showDetailPanel = false;
        this.appTitle = 'Notas fiscais - Inventário:' + this.idInventario;
        this.appTitleBreadcrumb = 'Notas fiscais';
        this.appTitleNotasFiscais = 'Lista de Materiais da Nota';
        this.breadCrumbTree = [
            {
                descricao: 'Contagem de materiais',
                routerLink: `../../${this.idInventario}/contagem-materiais`,
            },
            {
                descricao: this.appTitleBreadcrumb,
            },
        ];
        this.tableNotasFiscaisMateriaisConfig = {
            subtitleBorder: true,
        };
        this.form = this.formBuilder.group({
            cdNotaFiscal: [null],
        });
    }
    ngOnInit() {
        this.openModalNotaFiscal();
        this.onSubscription();
    }
    openModalNotaFiscal() {
        this.getListaExistente();
    }
    getListaExistente() {
        if (this.getListaCarregadaMaisNotaFiscal()) {
            const val = this.cdNotaFiscal;
            if (!val) {
                this.notasFiscais = this.tempNotasFiscais;
            }
            const temp = this.tempNotasFiscais.filter((row) => {
                return Object.keys(row).some((property) => {
                    return row[property] === null
                        ? null
                        : row[property].toString().indexOf(val) !== -1;
                });
            });
            this.notasFiscais = temp;
            this.loading = false;
        }
        else {
            this.getInventario();
        }
    }
    getListaCarregadaMaisNotaFiscal() {
        let containsNotaFiscal = false;
        let isNotUndefined = typeof this.tempNotasFiscais !== 'undefined';
        if (isNotUndefined) {
            containsNotaFiscal = this.tempNotasFiscais.find((element) => element.notaFiscal === this.cdNotaFiscal);
        }
        return isNotUndefined && containsNotaFiscal;
    }
    getNotasFiscais() {
        this.loaderNavbar = true;
        if (this.activatedRoute.snapshot.params['id'] > 0) {
            this.notaFiscalService
                .getNotasFiscais(this.idInventario, this.cdNotaFiscal, this.cdEmp)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => (this.loaderNavbar = false)))
                .subscribe((data) => {
                if (data['status'] === 200) {
                    this.notasFiscais = data['body']['data']['notasFiscais'];
                    this.tempNotasFiscais = data['body']['data']['notasFiscais'];
                    this.qtNotasFiscais = data['body']['data']['qtRegistros'];
                    this.spinnerFullScreen = false;
                }
                else
                    this.notice.notice('Não houve retorno para sua consulta');
            }, (error) => this.notice.error(error.message));
        }
    }
    getMateriaisNotasFiscais(notaFiscal) {
        this.detailPanelService.show();
        this.loading = true;
        this.materiaisNotaFiscal = [];
        this.notaFiscalService
            .getMateriaisNotasFiscais(this.idInventario, notaFiscal)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => (this.loading = false)))
            .subscribe((data) => {
            if (data['status'] === 200) {
                this.materiaisNotaFiscal = data['body']['data'];
                this.notaFiscalSelecionada = notaFiscal;
                this.detailPanelService.loadedFinished(false);
            }
            else
                this.detailPanelService.loadedFinished(true);
        });
    }
    salvarNotasFiscais() {
        let checkAlterado = [];
        this.notasFiscais.forEach((element) => {
            if (element.checkAlterado) {
                checkAlterado.push(element);
            }
        });
        let particao = 50;
        let qtEnvios = Math.ceil(checkAlterado.length / particao);
        let req = [];
        this.loaderNavbar = true;
        for (let index = 0; index < qtEnvios; index++)
            req.push(this.notaFiscalService.salvarNotasFiscais(this.idInventario, checkAlterado.slice(particao * index, particao * (index + 1)), this.matriculaAuditor));
        Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["forkJoin"])(req)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => (this.loaderNavbar = false)))
            .subscribe((data) => {
            let contador = 0;
            data[0]['body'].forEach((element) => {
                if (element['responseCode'] == 200) {
                    this.notice.success('Itens salvos com sucesso!');
                    contador++;
                }
                else {
                    this.notice.error(element['response']);
                }
            });
            if (contador === data.length) {
            }
        }, (error) => {
            this.notice.error('Ocorreu um erro ao salvar os itens');
        });
    }
    verificaCheck(notaFiscal) {
        notaFiscal.checkAlterado = !notaFiscal.checkAlterado;
        this.salvarNotasFiscais();
        this.getInventario();
    }
    /* Paginação */
    onPageChanged(event) {
        this.begin = (event.page - 1) * event.itemsPerPage;
        this.end = event.page * event.itemsPerPage;
    }
    /* Paginação */
    onSubscription() {
        this.$showDetailPanelSubscription = this.detailPanelService.config.subscribe((event) => {
            this.showDetailPanel = event.showing;
        });
    }
    ngOnDestroy() {
        this.$showDetailPanelSubscription.unsubscribe();
    }
    fecharSalvar(idInventario) {
        this.route.navigate([`../../${idInventario}/contagem-materiais`], {
            relativeTo: this.activatedRoute,
        });
    }
    getInventario() {
        this.notaFiscalService.getInventario(this.idInventario)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => (this.getNotasFiscais())))
            .subscribe((response) => {
            if (response['status'] === 200) {
                this.cdEmp = response.body['data']['inventarios']['0']['cdEmpresa'];
            }
        });
    }
};
LogisticaEstoquePainelInventarioInventarioMateriaisNotasFiscaisComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_10__["DetailPanelService"] },
    { type: _materiais_notas_fiscais_service__WEBPACK_IMPORTED_MODULE_5__["LogisticaEstoquePainelInventarioInventarioMateriaisNotasFiscaisService"] }
];
LogisticaEstoquePainelInventarioInventarioMateriaisNotasFiscaisComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'materiais-notas-fiscais',
        template: _raw_loader_materiais_notas_fiscais_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_materiais_notas_fiscais_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_10__["DetailPanelService"],
        _materiais_notas_fiscais_service__WEBPACK_IMPORTED_MODULE_5__["LogisticaEstoquePainelInventarioInventarioMateriaisNotasFiscaisService"]])
], LogisticaEstoquePainelInventarioInventarioMateriaisNotasFiscaisComponent);



/***/ }),

/***/ "b35P":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/logistica/estoque/painel-inventario/models/totalInventario.ts ***!
  \***************************************************************************************/
/*! exports provided: LogisticaEstoquePainelInventarioTotalInventario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaEstoquePainelInventarioTotalInventario", function() { return LogisticaEstoquePainelInventarioTotalInventario; });
class LogisticaEstoquePainelInventarioTotalInventario {
}


/***/ }),

/***/ "bY0X":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/logistica/estoque/painel-inventario/inventario/relatorio/relatorio.component.scss ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ul li {\n  list-style-type: none;\n}\n\n.bgdValueList {\n  background-color: #e9ecef;\n}\n\n.textUpper {\n  font-size: -webkit-xxx-large;\n}\n\n.espacamento50 {\n  height: 50px;\n}\n\n.espacamento20 {\n  height: 20px;\n}\n\n.espacamento25 {\n  height: 25px;\n}\n\n.espacamento150 {\n  height: 150px;\n}\n\n.espacamento250 {\n  height: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvZXN0b3F1ZS9wYWluZWwtaW52ZW50YXJpby9pbnZlbnRhcmlvL3JlbGF0b3Jpby9yZWxhdG9yaW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7QUFDRjs7QUFFQTtFQUNFLDRCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2xvZ2lzdGljYS9lc3RvcXVlL3BhaW5lbC1pbnZlbnRhcmlvL2ludmVudGFyaW8vcmVsYXRvcmlvL3JlbGF0b3Jpby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInVsIGxpIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG4uYmdkVmFsdWVMaXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZjtcbn1cblxuLnRleHRVcHBlciB7XG4gIGZvbnQtc2l6ZTogLXdlYmtpdC14eHgtbGFyZ2U7XG59XG5cbi5lc3BhY2FtZW50bzUwIHtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4uZXNwYWNhbWVudG8yMCB7XG4gIGhlaWdodDogMjBweDtcbn1cblxuLmVzcGFjYW1lbnRvMjUge1xuICBoZWlnaHQ6IDI1cHg7XG59XG5cbi5lc3BhY2FtZW50bzE1MCB7XG4gIGhlaWdodDogMTUwcHg7XG59XG5cbi5lc3BhY2FtZW50bzI1MCB7XG4gIGhlaWdodDogMTUwcHg7XG59XG4iXX0= */");

/***/ }),

/***/ "bc5J":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/logistica/estoque/painel-inventario/inventario/inventario.component.ts ***!
  \************************************************************************************************/
/*! exports provided: LogisticaEstoquePainelInventarioInventarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaEstoquePainelInventarioInventarioComponent", function() { return LogisticaEstoquePainelInventarioInventarioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_inventario_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./inventario.component.html */ "Qlyr");
/* harmony import */ var _inventario_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inventario.component.scss */ "QOps");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var _inventario_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./inventario.service */ "u/Fv");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/templates/detail-panel/detal-panel.service */ "gIxL");














let LogisticaEstoquePainelInventarioInventarioComponent = class LogisticaEstoquePainelInventarioInventarioComponent {
    constructor(inventarioService, activatedRoute, notice, route, atividadesService, localeService, formBuilder, dateService, routerService, detailPanelService) {
        this.inventarioService = inventarioService;
        this.activatedRoute = activatedRoute;
        this.notice = notice;
        this.route = route;
        this.atividadesService = atividadesService;
        this.localeService = localeService;
        this.formBuilder = formBuilder;
        this.dateService = dateService;
        this.routerService = routerService;
        this.detailPanelService = detailPanelService;
        this.listaInventarios = [];
        this.inventarios = [];
        this.loaderNavbar = false;
        this.spinnerFullScreen = true;
        this.loading = true;
        this.ultimoStatusEnviado = null;
        this.noResult = true;
        this.noResultado = true;
        this.noLista = true;
        this.inve = [];
        this.compressedTable = false;
        this.infoClasses = '';
        this.infoLinha = '';
        this.infoIdInventario = '';
        this.appTitle = 'Painel de inventário';
        this.cdInventario = '';
        this.parametro = false;
        this.checked = true;
        /* Parametros para filtros */
        this.filtroEmpresas = [];
        this.filtroDepositos = [];
        this.filtroLinhas = [];
        this.filtroClasses = [];
        this.filtroMateriais = [];
        this.dadosEmpty = false;
        this.breadCrumbTree = [
            {
                descricao: this.appTitle,
            },
        ];
        /* Paginação */
        this.itemsPerPage = 10;
        this.currentPage = 1;
        /* Paginação */
        /* Legendas */
        this.subtitles = [
            {
                id: 'LOGI_INVE_STAT_ABER',
                text: 'Em aberto',
                color: 'yellow',
            },
            {
                id: 'LOGI_INVE_STAT_CANC',
                text: 'Cancelado',
                color: 'red',
            },
            {
                id: 'LOGI_INVE_STAT_CANC_SIST',
                text: 'Cancelado pelo sistema',
                color: 'gray',
            },
            {
                id: 'LOGI_INVE_STAT_FINA',
                text: 'Finalizado',
                color: 'green',
            },
            {
                id: 'LOGI_INVE_STAT_APRO',
                text: 'Aprovado',
                color: 'blue',
            },
        ];
        /* Legendas */
        /* TIPOS DE INVENTÁRIOS */
        this.tipoInventario = [
            {
                value: 1,
                descNome: 'Inventário oficial',
            },
            {
                value: 2,
                descNome: 'Inventário rotativo',
            },
        ];
        /* Config Table */
        this.tableConfig = {
            subtitleBorder: true,
        };
        this.showDetailPanel = false;
        this.localeService.use('pt-br');
        this.bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' }, { adaptivePosition: true }, { showWeekNumbers: false });
        this.form = this.formBuilder.group({
            tipoInventario: [null],
            empresa: [null],
            depositos: [null],
            linhas: [null],
            classes: [null],
            materiais: [null],
            dataInicial: [''],
            dataFinal: [''],
            cdInventario: [null],
            sigla: [null],
            pagina: 1,
        });
    }
    ngOnInit() {
        this.atividadesService.registrarAcesso().subscribe();
        /* CODIFICAÇÃO E DECODIFICAÇÃO DA ROTA */
        this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe((response) => {
            if (Object.keys(response).length !== 0) {
                const _response = this.routerService.getBase64UrlParams(response);
                this.form.patchValue(_response);
            }
            this.getInventario(this.getParams());
        });
        /* INICIO FILTROS INICIAIS */
        this.inventarioService
            .getEmpresas()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => {
            this.spinnerFullScreen = false;
        }))
            .subscribe((response) => {
            if (Object.keys(response).length > 0) {
                this.empresas = response;
            }
        });
        this.inventarioService
            .getLinhas()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => (this.loading = false)))
            .subscribe((response) => {
            if (Object.keys(response).length > 0) {
                this.linhas = response;
            }
        });
        this.onDetailPanel();
    }
    onDetailPanel() {
        this.$showDetailPanelSubscription = this.detailPanelService.config.subscribe((event) => {
            this.showDetailPanel = event.showing;
        });
    }
    ngOnDestroy() {
        this.$activatedRouteSubscription.unsubscribe();
        this.$showDetailPanelSubscription.unsubscribe();
    }
    getParams() {
        let _params = {};
        const obj = this.form.value;
        for (let prop in obj) {
            if (obj[prop]) {
                if (prop == 'dataInicial' || prop == 'dataFinal') {
                    _params[prop] =
                        obj[prop] instanceof Date
                            ? this.dateService.convertToUrlDate(obj[prop])
                            : obj[prop].substring(0, 10);
                }
                else {
                    _params[prop] = obj[prop];
                }
            }
        }
        return _params;
    }
    onSearch() {
        this.route.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams(this.getParams()),
        });
    }
    getDepositos() {
        this.loaderNavbar = true;
        if (this.form.get('empresa').status === 'VALID') {
            let idEmpresa = this.form.get('empresa').value;
            this.inventarioService
                .getDepositos(idEmpresa)
                .subscribe((response) => {
                if (Object.keys(response).length > 0) {
                    this.depositos = response;
                }
                this.loaderNavbar = false;
            });
        }
    }
    getClasses() {
        this.classes = [];
        let descricaoLinhas = [];
        this.loaderNavbar = true;
        if (this.form.get('linhas').status === 'VALID') {
            descricaoLinhas.push(this.form.get('linhas').value);
            this.inventarioService
                .getClasses(descricaoLinhas)
                .subscribe((response) => {
                if (Object.keys(response).length > 0) {
                    this.classes = response;
                }
                this.loaderNavbar = false;
            });
        }
    }
    getMateriais(linhas, classes) {
        this.materiais = [];
        this.loaderNavbar = true;
        if (this.form.get('linhas').status === 'VALID' ||
            this.form.get('classes').status === 'VALID') {
            let descricaoLinhas = this.form.get('linhas').value;
            let idClasses = this.form.get('classes').value;
            this.inventarioService
                .getMateriais(descricaoLinhas, idClasses)
                .subscribe((response) => {
                if (Object.keys(response).length > 0) {
                    this.materiais = response.result;
                }
                this.loaderNavbar = false;
            });
        }
    }
    getInventario(params) {
        this.loaderNavbar = true;
        this.spinnerFullScreen = true;
        this.checked = !this.checked;
        this.inventarioService
            .getInventario(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => {
            this.spinnerFullScreen = false;
            this.loaderNavbar = false;
        }))
            .subscribe((data) => {
            if (data.status === 200) {
                this.noResult = false;
                this.inve = data['body']['data']['inventarios'];
                this.inventarios = data['body']['data']['inventarios'];
                let lancamentos = [];
                this.inventarios.forEach((element) => {
                    if (element.empresa || element.deposito) {
                        lancamentos.push({
                            empresa: element.empresa,
                            deposito: element.deposito,
                        });
                    }
                });
                this.loaderNavbar = false;
                this.informacoes = lancamentos;
                if (!this.totalItems) {
                    this.totalItems = data['body']['data']['qtRegistros'];
                }
            }
            else if (data.status === 204) {
                this.notice.notice('Nenhum resultado para sua pesquisa');
                this.dadosEmpty = true;
            }
            else {
                this.notice.error();
            }
        }, (error) => {
            this.notice.notice('Não há inventários cadastrados para esse status.');
            this.dadosEmpty = true;
        });
    }
    getClassesInventario(idInventario, i) {
        this.detailPanelService.show();
        this.noLista = true;
        this.noResultado = false;
        this.inventarioService
            .getClassesInventario(idInventario)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => {
            this.detailPanelService.loadedFinished(false);
        }))
            .subscribe((response) => {
            if (response['status'] === 200) {
                response.body.data.forEach((element) => {
                    if (element.dsClasse == null) {
                        this.noResultado = true;
                    }
                    else {
                        this.noLista = false;
                        this.infoClasses = response.body.data;
                    }
                });
            }
        });
        this.compressedTable = true;
        this.infoLinha = this.inve[i].dsLinha;
        this.infoIdInventario = this.inve[i].idInventario;
    }
    /* Paginação */
    onPageChanged(event) {
        const page = event.page;
        this.form.get('pagina').setValue(page);
        this.onSearch();
    }
    /* Paginação */
    abrirInventario(idInventario, idStatusInventario) {
        this.route.navigate([`../${idInventario}/contagem-materiais`], {
            relativeTo: this.activatedRoute,
        });
    }
    abrirRelatorio(idInventario) {
        this.route.navigate([`../${idInventario}/relatorio`], {
            relativeTo: this.activatedRoute,
        });
    }
    openModal(index) {
        this.idInventario = this.inventarios[index].idInventario;
        this.compressedTable = true;
    }
    onClose() {
        this.compressedTable = false;
    }
    /* clickEvent(inventario) {
      this.inventarios.forEach(element => {
        if (element.idInventario != inventario.idInventario) {
          element.status = false;
        } else if (inventario.status == true) {
          inventario.status = true;
        } else {
          inventario.status = !inventario.status;
        }
        this.detailPanelService.hide();
      });
    } */
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
    onClickSubtitle(id) {
        this.form.get('sigla').setValue(id);
        this.onSearch();
    }
    onCadastrar() {
        this.route.navigate(['../cadastro'], {
            relativeTo: this.activatedRoute,
        });
    }
};
LogisticaEstoquePainelInventarioInventarioComponent.ctorParameters = () => [
    { type: _inventario_service__WEBPACK_IMPORTED_MODULE_9__["LogisticaEstoquePainelInventarioInventarioService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_8__["AtividadesService"] },
    { type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsLocaleService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormBuilder"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_10__["DateService"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_11__["RouterService"] },
    { type: src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_13__["DetailPanelService"] }
];
LogisticaEstoquePainelInventarioInventarioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'inventario',
        template: _raw_loader_inventario_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_inventario_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_inventario_service__WEBPACK_IMPORTED_MODULE_9__["LogisticaEstoquePainelInventarioInventarioService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_8__["AtividadesService"],
        ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsLocaleService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormBuilder"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_10__["DateService"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_11__["RouterService"],
        src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_13__["DetailPanelService"]])
], LogisticaEstoquePainelInventarioInventarioComponent);



/***/ }),

/***/ "c/D8":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/logistica/estoque/painel-inventario/inventario/lista/lista.component.scss ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2VzdG9xdWUvcGFpbmVsLWludmVudGFyaW8vaW52ZW50YXJpby9saXN0YS9saXN0YS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "eoW+":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/estoque/painel-inventario/cadastro/cadastro.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen [hidden]=\"!spinnerFullScreen\"></loader-spinner-full-screen>\n<loader-spinner-navbar [hidden]=\"!loaderNavbar\"></loader-spinner-navbar>\n<app-header [appTitle]=\"appTitle\">\n  <button\n    (click)=\"postCadastraInventario()\"\n    [disabled]=\"form.status  == 'INVALID' || !tipoInventario\">\n    Cadastrar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <form autocomplete=\"off\" [formGroup]=\"form\">\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col-md-3\">\n            <label for=\"tipo\">Tipo de Inventário</label>\n            <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"false\"\n              [items]=\"tipoInventario\"\n              [virtualScroll]=\"true\"\n              labelForId=\"tipo\"\n              bindLabel=\"descNome\"\n              bindValue=\"codigo\"\n              placeholder=\"Selecione um Tipo\"\n              formControlName=\"tipoInventario\"\n              [ngClass]=\"onFieldError('tipoInventario') + ' ' + onFieldRequired('tipoInventario')\"\n            >\n            </ng-select>\n            <invalid-form-control\n              [show]=\"onFieldInvalid('tipoInventario')\"\n              message=\"Tipo de inventário é obrigatório.\">\n            </invalid-form-control>\n          </div>\n          <div class=\"form-group col-md-3\">\n            <label for=\"empresa\">Empresa</label>\n            <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"false\"\n              [items]=\"empresas\"\n              [virtualScroll]=\"true\"\n              labelForId=\"empresa\"\n              bindLabel=\"nomeFantasia\"\n              bindValue=\"codigoEmpresa\"\n              placeholder=\"Selecione uma empresa\"\n              formControlName=\"cdEmpresa\"\n              (change) =\"getDepositos()\"\n              (focus) =\"resetForm('depositos')\"\n              [ngClass]=\"onFieldError('cdEmpresa') + ' ' + onFieldRequired('cdEmpresa')\"\n            >\n            </ng-select>\n            <invalid-form-control\n              [show]=\"onFieldInvalid('cdEmpresa')\"\n              message=\"Empresa é obrigatório.\">\n            </invalid-form-control>\n          </div>\n        </div>\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col-md-3\">\n            <label for=\"depositos\">Depósito</label>\n            <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"false\"\n              [items]=\"depositos\"\n              [virtualScroll]=\"true\"\n              labelForId=\"deposito\"\n              bindLabel=\"depositoDescricao\"\n              bindValue=\"depositoId\"\n              placeholder=\"Selecione um deposito\"\n              formControlName=\"cdDeposito\"\n              (focus) =\"resetForm('linhas')\"\n              [ngClass]=\"onFieldError('cdDeposito') + ' ' + onFieldRequired('cdDeposito')\"\n            >\n            </ng-select>\n            <invalid-form-control\n              [show]=\"onFieldInvalid('cdDeposito')\"\n              message=\"Despósito é obrigatório.\">\n            </invalid-form-control>\n          </div>\n          <div class=\"form-group col-md-3\">\n            <label for=\"linhas\">Linha</label>\n            <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"false\"\n              [items]=\"linhas\"\n              [virtualScroll]=\"true\"\n              labelForId=\"linha\"\n              bindLabel=\"linha\"\n              bindValue=\"linha\"\n              placeholder=\"Selecione uma linha\"\n              formControlName=\"linhas\"\n              (change) = \"getClasses(); getMateriais(linhas, '')\"\n              (focus) =\"resetForm('classes')\"\n              [ngClass]=\"onFieldError('linhas') + ' ' + onFieldRequired('linhas')\"\n            >\n            </ng-select>\n            <invalid-form-control\n              [show]=\"onFieldInvalid('linhas')\"\n              message=\"Linha é obrigatório.\">\n            </invalid-form-control>\n          </div>\n        </div>\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col-md-2\">\n            <label for=\"classes\">Classe</label>\n            <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"false\"\n              [items]=\"classes\"\n              [multiple]=\"true\"\n              [closeOnSelect]=\"false\"\n              [virtualScroll]=\"true\"\n              labelForId=\"classes\"\n              bindLabel=\"classeDescricao\"\n              bindValue=\"classeId\"\n              placeholder=\"Selecione uma classe\"\n              formControlName=\"classes\"\n              (change) = \"getMateriais(linhas, classes)\"\n              [ngClass]=\"onFieldError('classes')\"\n            >\n            </ng-select>\n            <invalid-form-control\n              [show]=\"onFieldInvalid('classes')\"\n              message=\"Classe é obrigatório.\">\n            </invalid-form-control>\n          </div>\n          <div class=\"form-group col-md-4\">\n            <label for=\"materiais\">Material</label>\n            <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"false\"\n              [items]=\"materiais\"\n              [multiple]=\"true\"\n              [closeOnSelect]=\"false\"\n              [virtualScroll]=\"true\"\n              labelForId=\"materiais\"\n              bindLabel=\"codigoDescricaoMaterial\"\n              bindValue=\"codigoMaterial\"\n              placeholder=\"Selecione um material\"\n              formControlName=\"materiais\"\n            >\n            </ng-select>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</app-body>");

/***/ }),

/***/ "frdo":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/logistica/estoque/painel-inventario/inventario/relatorio/relatorio.service.ts ***!
  \*******************************************************************************************************/
/*! exports provided: LogisticaEstoquePainelInventarioInventarioRelatorioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaEstoquePainelInventarioInventarioRelatorioService", function() { return LogisticaEstoquePainelInventarioInventarioRelatorioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");



let LogisticaEstoquePainelInventarioInventarioRelatorioService = class LogisticaEstoquePainelInventarioInventarioRelatorioService {
    constructor(http) {
        this.http = http;
        this.BASE_URL = `https://crm360.monterrey.com.bo/api`;
    }
    getLista(idInventario) {
        return this.http.get(`${this.BASE_URL}/logistica/estoque/inventario/${idInventario}/materiais`);
    }
    getInfoInventario(idInventario) {
        return this.http.get(`${this.BASE_URL}/logistica/estoque/inventario/${idInventario}/resultado`);
    }
    getInfoInventarioRotativoGeral(idInventario) {
        return this.http.get(`${this.BASE_URL}/logistica/estoque/inventario-rotativo/${idInventario}`);
    }
    getInfoInventarioRotativo(idInventario, cdMaterial) {
        return this.http.get(`${this.BASE_URL}/logistica/estoque/inventario-rotativo/${idInventario}/material/${cdMaterial}`, {
            observe: 'response',
        });
    }
};
LogisticaEstoquePainelInventarioInventarioRelatorioService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
LogisticaEstoquePainelInventarioInventarioRelatorioService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], LogisticaEstoquePainelInventarioInventarioRelatorioService);



/***/ }),

/***/ "gplo":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/estoque/painel-inventario/inventario/relatorio/relatorio.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"spinnerFullScreen\"></loader-spinner-full-screen>\n<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<div class=\"row\" id=\"application-header\">\n  <div class=\"col-6\">\n    <div id=\"title\">\n      <back-button></back-button>\n      <h1>Realtório de inventário</h1>\n    </div>\n  </div>\n  <div class=\"col-6 d-flex justify-content-end\">\n    <div id=\"actions\">\n      <button \n        (click)=\"onDownload()\"\n        >\n        Imprimir relatório\n    </button>\n    </div>\n  </div>\n</div>\n<div class=\"row\" id=\"application-body\">\n  <div class=\"container-fluid\">\n    <breadcrumb [tree]=\"breadCrumbTree\"></breadcrumb>\n    <div class=\"row\">\n      <div class=\"col\">\n        <div id=\"download\">\n          <div class=\"row justify-content-center\">\n            <div class=\"d-flex justify-content-between col-6 pl-5\">\n              <img class=\"\" src=\"../../../../../../../assets/images/logo/logo-manetoni.png\" height=\"100\" width=\"150\">\n            </div>\n            \n            <div class=\"d-flex justify-content-end col-6 mt-2 pr-5\">\n              <img class=\"\" src=\"../../../../../../../assets/images/logo/Logo-MTcorp.png\" height=\"65\" width=\"220\">\n            </div>\n          </div>\n          <div class=\"espacamento250\">&nbsp;</div>\n          <div class=\"row justify-content-center\">\n            <div class=\"my-5\">\n              <div class=\"d-flex justify-content-center\">\n                <h1>RELATÓRIO DE RESULTADOS DO INVENTÁRIO</h1>\n              </div>\n            </div>\n          </div>\n        <!-- INICIA ESPAÇAMENTO -->\n          <div class=\"espacamento150\">&nbsp;</div>\n          <div style=\"height: 170px\">&nbsp;</div>\n        <!-- FINALIZA ESPAÇAMENTO --> \n          <ul class=\"p-0\">\n            <li class=\"mx-3\">\n              <h6 class=\"card-header border\"> \n                Empresa: {{ listaInfo.dsEmpresa | uppercase }} / Depósito: {{ listaInfo.dsDeposito | uppercase }} / Linha: {{ infoLinha| uppercase }} / Classe: {{ infoClasse | uppercase }}\n              </h6>\n            </li>\n          </ul> \n          <ul class=\"d-flex p-0 col-12  my-5\">\n            <li class=\"col-6\">\n              <div class=\"card justify-content-center align-items-center\">\n                <h5 class=\"card-header text-center w-100\"> Estoque total ton.(Anterior) </h5>\n                <div class=\"card-body font-weight-bold w-100 bgdValueList\">\n                  <div class=\"espacamento50\">&nbsp;</div>\n                  <div class=\"d-flex text-center col-12 large\">\n                    <div class=\"col\"><h1> {{ listaInfo.qtPesoEstoque | number:'1.3-3' }} </h1></div>\n                  </div>\n                  <div class=\"espacamento50\">&nbsp;</div>\n                </div>\n              </div>\n            </li>\n            <li class=\"col-6\">\n              <div class=\"card justify-content-center align-items-center\">\n                <h5 class=\"card-header text-center w-100\"> Estoque total ton.(Atual) </h5>\n                <div class=\"card-body font-weight-bold w-100 bgdValueList\">\n                  <div class=\"espacamento50\">&nbsp;</div>\n                  <div class=\"d-flex text-center col-12 large\">\n                    <div class=\"col\"><h1> {{ listaInfo.saldoEstoque | number:'1.3-3' }} </h1></div>\n                  </div>\n                  <div class=\"espacamento50\">&nbsp;</div>\n                </div>\n              </div>\n            </li>\n          </ul>\n          <div class=\"espacamento20\">&nbsp;</div>\n          <ul class=\"d-flex p-0 col-12  mt-5\">\n            <li class=\"col-6\">\n              <div class=\"card justify-content-center align-items-center\">\n                <h5 class=\"card-header text-center w-100\"> Total geral da contagem </h5>\n                <div class=\"card-body font-weight-bold w-100 bgdValueList\">\n                  <div class=\"espacamento50\">&nbsp;</div>\n                  <div class=\"d-flex text-center col-12 large\">\n                    <div class=\"col\"><h1> {{ listaInfo.saldoEstoqueLancamento | number:'1.3-3' }} </h1></div>\n                  </div>\n                  <div class=\"espacamento50\">&nbsp;</div>\n                </div>\n              </div>\n            </li>\n            <li class=\"col-6\">\n              <div class=\"card justify-content-center align-items-center\">\n                <h5 class=\"card-header text-center w-100\"> Diferença total ajustada </h5>\n                <div class=\"card-body font-weight-bold w-100 bgdValueList\">\n                  <div class=\"espacamento50\">&nbsp;</div>  \n                  <div class=\"d-flex text-center col-12 large\">\n                    <div class=\"col\"><h1> {{ resultadoDiferenca | number:'1.3-3' }} </h1></div>\n                  </div>\n                  <div class=\"espacamento50\">&nbsp;</div>\n                </div>\n              </div>\n            </li>\n          </ul>\n          <div class=\"espacamento20\">&nbsp;</div>\n          <ul class=\"d-flex p-0 col-12  mt-5\">\n            <li class=\"col-6\">\n              <div class=\"card justify-content-center align-items-center\">\n                  <h5 class=\"card-header text-center w-100\"> Resultado total do inventário </h5>\n                <div class=\"card-body font-weight-bold w-100 bgdValueList\">\n                  <div class=\"espacamento50\">&nbsp;</div>\n                  <div class=\"d-flex text-center col-12 large\">\n                    <div class=\"col\"><h1> {{ resultTotalInventario | number:'1.3-3' }} </h1></div>\n                  </div>\n                  <div class=\"espacamento50\">&nbsp;</div>\n                </div>\n              </div> \n            </li>\n            <li class=\"col-6\">\n                <div class=\"card justify-content-center align-items-center\">\n                  <h5 class=\"card-header text-center w-100\"> Resultado monetário total </h5>\n                  <div class=\"card-body font-weight-bold w-100 bgdValueList\">\n                    <div class=\"espacamento50\">&nbsp;</div>\n                    <div class=\"d-flex text-center col-12 large\">\n                      <div class=\"col\"><h1> {{ listaInfo.saldoFinanceiro | currency:'BRL':'symbol':'1.2-2'}} </h1></div>\n                    </div>\n                    <div class=\"espacamento50\">&nbsp;</div>\n                  </div>\n                </div>\n              </li>\n          </ul>\n          <div class=\"espacamento25\">&nbsp;</div>\n          <ul class=\"p-0\">\n            <li class=\"px-1 pb-1 \" *ngFor=\"let lista of listas\" style=\"list-style: none;\">\n              <div class=\"card\">\n                <h6 class=\"card-header\"> {{ lista.cdMaterial }} - {{ lista.dsMaterial }} </h6>\n                <div class=\"row card-body\">\n                  <div class=\"list-group list-group-flush col-4\">\n                    <div class=\"list-group-item border-0\"> Estoque ton.: {{ lista.qtPesoEstoque | number : '1.3-3' }} </div>\n                    <div class=\"list-group-item border-0\"> Qtd. peça físico: {{ lista.qtPecaContagem }} </div>\n                    <div class=\"list-group-item border-0\"> Peso físico ton.: {{ lista.qtPesoContagem | number : '1.3-3' }} </div>\n                  </div>\n                  <div class=\"list-group list-group-flush col-4\">\n                    <div class=\"list-group-item border-0\"> Total da contagem: {{ lista.totalContagem | number : '1.3-3' }} </div>\n                    <div class=\"list-group-item border-0\"> Diferença ajustada: {{ lista.saldoEstoque | number : '1.3-3' }} </div>\n                    <div class=\"list-group-item border-0\"> Soma inventário rotativo: {{ lista.somaInventarioRotativo | number : '1.3-3' }} </div>\n                  </div>\n                  <div class=\"list-group list-group-flush col-4\">\n                    <div class=\"list-group-item border-0\"> Resultado inventário: {{ lista.resultadoInventario | number : '1.3-3' }} </div>\n                    <div class=\"list-group-item border-0\"> Custo médio: {{ lista.precoMinimo | currency:'BRL':'symbol':'1.2-2' }} </div>\n                    <div class=\"list-group-item border-0\"> Resultado monetário: {{ lista.saldoFinanceiro | currency:'BRL':'symbol':'1.2-2' }} </div>\n                  </div>\n                </div>\n              </div>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>  \n\n");

/***/ }),

/***/ "i75G":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/modules/logistica/estoque/painel-inventario/inventario/materiais-notas-fiscais/materiais-notas-fiscais.component.scss ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2VzdG9xdWUvcGFpbmVsLWludmVudGFyaW8vaW52ZW50YXJpby9tYXRlcmlhaXMtbm90YXMtZmlzY2Fpcy9tYXRlcmlhaXMtbm90YXMtZmlzY2Fpcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "lJJZ":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/modules/logistica/estoque/painel-inventario/inventario/materiais-ocorrencias/materiais-ocorrencias.component.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: LogisticaEstoquePainelInventarioInventarioMateriaisOcorrenciasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaEstoquePainelInventarioInventarioMateriaisOcorrenciasComponent", function() { return LogisticaEstoquePainelInventarioInventarioMateriaisOcorrenciasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_materiais_ocorrencias_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./materiais-ocorrencias.component.html */ "rJ2p");
/* harmony import */ var _materiais_ocorrencias_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./materiais-ocorrencias.component.scss */ "oolM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _materiais_ocorrencias_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./materiais-ocorrencias.service */ "4NJB");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/templates/detail-panel/detal-panel.service */ "gIxL");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");












let LogisticaEstoquePainelInventarioInventarioMateriaisOcorrenciasComponent = class LogisticaEstoquePainelInventarioInventarioMateriaisOcorrenciasComponent {
    constructor(activatedRoute, notice, route, formBuilder, detailPanelService, dateService, ocorrenciasService) {
        this.activatedRoute = activatedRoute;
        this.notice = notice;
        this.route = route;
        this.formBuilder = formBuilder;
        this.detailPanelService = detailPanelService;
        this.dateService = dateService;
        this.ocorrenciasService = ocorrenciasService;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.matriculaAuditor = this.currentUser['info']['matricula'];
        this.idInventario = this.activatedRoute.snapshot.params['id'];
        this.spinnerFullScreen = true;
        this.loaderNavbar = true;
        this.materiaisNotaFiscal = [];
        this.cdOcorrencia = '';
        this.cdEmp = '';
        this.loading = false;
        this.noResult = false;
        this.tableNotasFiscaisMateriaisConfig = false;
        this.appTitle = 'Ocorrências - Inventário:' + this.idInventario;
        this.appTitleBreadcrumb = 'Ocorrências';
        this.appTitleNotasFiscais = 'Lista de Materiais da ocorrência';
        this.breadCrumbTree = [
            {
                descricao: 'Contagem de materiais',
                routerLink: `../../${this.idInventario}/contagem-materiais`,
            },
            {
                descricao: this.appTitleBreadcrumb,
            },
        ];
        this.tableFilterConfig = {
            subtitleBorder: true,
        };
        /* Paginação */
        this.itemsPerPage = 10;
        this.currentPage = 1;
        this.begin = 0;
        this.end = 10;
        this.beginP = 0;
        this.endP = 10;
        this.showDetailPanel = false;
        this.subtitles = [
            {
                id: 1,
                text: 'Devolução Total de R.O.',
                color: 'red',
            },
            {
                id: 2,
                text: 'Devolução Parcial de R.O.',
                color: 'yellow',
            },
        ];
        this.form = this.formBuilder.group({
            cdNotaFiscal: [null],
            cdOcorrencia: [null],
        });
    }
    ngOnInit() {
        this.getListaExistente();
        this.onSubscription();
    }
    onSubscription() {
        this.$showDetailPanelSubscription = this.detailPanelService.config.subscribe((event) => {
            this.showDetailPanel = event.showing;
        });
    }
    ngOnDestroy() {
        this.$showDetailPanelSubscription.unsubscribe();
    }
    getParams() {
        let _params = {};
        const obj = this.form.value;
        for (let prop in obj) {
            if (obj[prop]) {
                if (prop == 'dataInicio' || prop == 'dataFim') {
                    _params[prop] =
                        obj[prop] instanceof Date
                            ? this.dateService.convertToUrlDate(obj[prop])
                            : obj[prop].substring(0, 10);
                }
                else {
                    _params[prop] = obj[prop];
                }
            }
        }
        return _params;
    }
    getListaExistente() {
        if (this.getListaCarregadaMaisNotaFiscal()) {
            const val = this.cdOcorrencia;
            if (!val) {
                this.ocorrencias = this.tempOcorrencias;
            }
            const temp = this.tempOcorrencias.filter((row) => {
                return Object.keys(row).some((property) => {
                    return row[property] === null
                        ? null
                        : row[property].toString().indexOf(val) !== -1;
                });
            });
            this.ocorrencias = temp;
            this.loading = false;
        }
        else {
            this.getInventario();
        }
    }
    getListaCarregadaMaisNotaFiscal() {
        let containsOcorrencia = false;
        let isNotUndefined = typeof this.tempOcorrencias !== 'undefined';
        if (isNotUndefined) {
            containsOcorrencia = this.tempOcorrencias.find((element) => element.ocorrencia === this.cdOcorrencia);
        }
        return isNotUndefined && containsOcorrencia;
    }
    getInventario() {
        this.ocorrenciasService.getInventario(this.idInventario)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => (this.getOcorrencias())))
            .subscribe((response) => {
            if (response['status'] === 200) {
                this.cdEmp = response.body['data']['inventarios']['0']['cdEmpresa'];
            }
        });
    }
    getOcorrencias() {
        this.detailPanelService.hide();
        this.spinnerFullScreen = true;
        this.loaderNavbar = true;
        this.ocorrenciasService
            .getOcorrencias(this.idInventario, this.getParams())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => (this.loaderNavbar = false,
            this.spinnerFullScreen = false)))
            .subscribe((response) => {
            if (response['status'] === 200) {
                this.ocorrencias = response['body']['data']['ocorrencias'];
                this.qtNotasFiscais = response['body']['data']['qtRegistros'];
                this.noResult = true;
            }
        });
    }
    getMateriaisNotasFiscais(param) {
        this.detailPanelService.show();
        this.loading = true;
        this.materiaisNotaFiscal = [];
        this.ocorrenciasService
            .getMateriaisNotasFiscais(this.idInventario, param)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => (this.loading = false)))
            .subscribe((response) => {
            if (response['status'] === 200) {
                this.materiaisNotaFiscal = response['body']['data'];
                this.notaFiscalSelecionada = param;
                this.detailPanelService.loadedFinished(false);
            }
            else
                this.detailPanelService.loadedFinished(true);
        });
    }
    salvarNotasFiscais() {
        let checkAlterado = [];
        this.ocorrencias.forEach((element) => {
            if (element.checkAlterado) {
                checkAlterado.push(element);
            }
        });
        let particao = 50;
        let qtEnvios = Math.ceil(checkAlterado.length / particao);
        let req = [];
        this.loaderNavbar = true;
        for (let index = 0; index < qtEnvios; index++)
            req.push(this.ocorrenciasService.salvarNotasFiscais(this.idInventario, checkAlterado.slice(particao * index, particao * (index + 1)), this.matriculaAuditor));
        Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["forkJoin"])(req)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => (this.loaderNavbar = false)))
            .subscribe((data) => {
            let contador = 0;
            data[0]['body'].forEach((element) => {
                if (element['responseCode'] == 200) {
                    this.notice.success('Itens salvos com sucesso!');
                    contador++;
                }
                else {
                    this.notice.error(element['response']);
                }
            });
            if (contador === data.length) {
            }
        }, (error) => {
            this.notice.error('Ocorreu um erro ao salvar os itens');
        });
    }
    verificaCheck(notaFiscal) {
        notaFiscal.checkAlterado = !notaFiscal.checkAlterado;
        this.salvarNotasFiscais();
        this.getInventario();
    }
    /* Paginação */
    onPageChanged(event) {
        this.begin = (event.page - 1) * event.itemsPerPage;
        this.end = event.page * event.itemsPerPage;
    }
    /* Paginação */
    fecharSalvar(idInventario) {
        this.route.navigate([`../../${idInventario}/contagem-materiais`], {
            relativeTo: this.activatedRoute,
        });
    }
};
LogisticaEstoquePainelInventarioInventarioMateriaisOcorrenciasComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_10__["DetailPanelService"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_11__["DateService"] },
    { type: _materiais_ocorrencias_service__WEBPACK_IMPORTED_MODULE_5__["LogisticaEstoquePainelInventarioInventarioMateriaisOcorrenciasService"] }
];
LogisticaEstoquePainelInventarioInventarioMateriaisOcorrenciasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'materiais-ocorrencias',
        template: _raw_loader_materiais_ocorrencias_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_materiais_ocorrencias_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_10__["DetailPanelService"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_11__["DateService"],
        _materiais_ocorrencias_service__WEBPACK_IMPORTED_MODULE_5__["LogisticaEstoquePainelInventarioInventarioMateriaisOcorrenciasService"]])
], LogisticaEstoquePainelInventarioInventarioMateriaisOcorrenciasComponent);



/***/ }),

/***/ "nAji":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/logistica/estoque/painel-inventario/inventario/relatorio/relatorio.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: LogisticaEstoquePainelInventarioInventarioRelatorioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaEstoquePainelInventarioInventarioRelatorioComponent", function() { return LogisticaEstoquePainelInventarioInventarioRelatorioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_relatorio_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./relatorio.component.html */ "gplo");
/* harmony import */ var _relatorio_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./relatorio.component.scss */ "bY0X");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_services_core_pdf_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/core/pdf.service */ "GTII");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var _relatorio_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./relatorio.service */ "frdo");










let LogisticaEstoquePainelInventarioInventarioRelatorioComponent = class LogisticaEstoquePainelInventarioInventarioRelatorioComponent {
    constructor(pdfService, notice, activatedRoute, relatorioService, atividadesService) {
        this.pdfService = pdfService;
        this.notice = notice;
        this.activatedRoute = activatedRoute;
        this.relatorioService = relatorioService;
        this.atividadesService = atividadesService;
        this.idInventario = this.activatedRoute.snapshot.params['id'];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.matriculaAuditor = this.currentUser['info']['matricula'];
        this.spinnerFullScreen = true;
        this.listas = [];
        this.listaInfo = [];
        this.infoLinha = '';
        this.infoClasse = '';
        this.loaderNavbar = false;
        this.breadCrumbTree = [
            {
                descricao: 'Lista',
                routerLink: '/logistica/estoque/painel-inventario/lista',
            },
            {
                descricao: 'Relatório',
            },
        ];
    }
    ngOnInit() {
        this.getLista();
        this.getInfoInventario();
        this.getInfoInventarioRotativoGeral();
        this.atividadesService.registrarAcesso().subscribe();
    }
    getLista() {
        let infoMateriais = [];
        if (this.activatedRoute.snapshot.params['id'] > 0) {
            this.idInventario = this.activatedRoute.snapshot.params['id'];
            this.relatorioService
                .getLista(this.idInventario)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => (this.spinnerFullScreen = false)))
                .subscribe((response) => {
                if (Object.keys(response).length > 0) {
                    this.listas = response['materiais'];
                    /* this.infoLinha = this.listas[0].dsLinha.trim();
                    this.infoClasse = this.listas[0].dsClasse; */
                    this.listas.forEach((element) => {
                        element.totalContagem =
                            element.qtPecaContagem * element.pesoPeca +
                                parseFloat(element.qtPesoContagem);
                        this.getInfoInventarioRotativo(element.cdMaterial).subscribe((response) => {
                            if (response.status == 204)
                                element.somaInventarioRotativo = 0;
                            else
                                element.somaInventarioRotativo = parseFloat(response.body.saldoEstoque);
                            element.resultadoInventario =
                                parseFloat(element.saldoEstoque) +
                                    element.somaInventarioRotativo;
                        });
                    });
                }
            }, (error) => {
                this.notice.notice('Não há materiais cadastrados para esse inventário.');
            });
        }
    }
    getInfoInventario() {
        this.relatorioService
            .getInfoInventario(this.idInventario)
            .subscribe((response) => {
            this.listaInfo = response;
            this.resultadoDiferenca =
                parseFloat(this.listaInfo.saldoEstoque) -
                    parseFloat(this.listaInfo.qtPesoEstoque);
        });
    }
    getInfoInventarioRotativo(cdMaterial) {
        return this.relatorioService.getInfoInventarioRotativo(this.idInventario, cdMaterial);
    }
    getInfoInventarioRotativoGeral() {
        return this.relatorioService
            .getInfoInventarioRotativoGeral(this.idInventario)
            .subscribe((response) => {
            this.inventarioRotativoTotal = parseFloat(response.saldoEstoque);
            this.resultTotalInventario =
                parseFloat(this.listaInfo.saldoEstoque) +
                    parseFloat(this.inventarioRotativoTotal);
        });
    }
    onDownload() {
        this.loaderNavbar = true;
        setTimeout(() => {
            this.pdfService.download('download', `${this.idInventario}_ResultadoInventario`);
            this.loaderNavbar = false;
        }, 1000);
    }
};
LogisticaEstoquePainelInventarioInventarioRelatorioComponent.ctorParameters = () => [
    { type: src_app_shared_services_core_pdf_service__WEBPACK_IMPORTED_MODULE_7__["PdfService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _relatorio_service__WEBPACK_IMPORTED_MODULE_9__["LogisticaEstoquePainelInventarioInventarioRelatorioService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_8__["AtividadesService"] }
];
LogisticaEstoquePainelInventarioInventarioRelatorioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'relatorio',
        template: _raw_loader_relatorio_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_relatorio_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_core_pdf_service__WEBPACK_IMPORTED_MODULE_7__["PdfService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _relatorio_service__WEBPACK_IMPORTED_MODULE_9__["LogisticaEstoquePainelInventarioInventarioRelatorioService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_8__["AtividadesService"]])
], LogisticaEstoquePainelInventarioInventarioRelatorioComponent);



/***/ }),

/***/ "oolM":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/modules/logistica/estoque/painel-inventario/inventario/materiais-ocorrencias/materiais-ocorrencias.component.scss ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2VzdG9xdWUvcGFpbmVsLWludmVudGFyaW8vaW52ZW50YXJpby9tYXRlcmlhaXMtb2NvcnJlbmNpYXMvbWF0ZXJpYWlzLW9jb3JyZW5jaWFzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "rJ2p":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/estoque/painel-inventario/inventario/materiais-ocorrencias/materiais-ocorrencias.component.html ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen [hidden]=\"!spinnerFullScreen\"></loader-spinner-full-screen>\n<loader-spinner-navbar [hidden]=\"!loaderNavbar\"></loader-spinner-navbar>\n<app-header [appTitle]=\"appTitle\">\n  <button \n    (click)=\"fecharSalvar(idInventario)\"\n  >\n    Fechar e Salvar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\n  <advanced-filter #scrollToFilter>\n    <form autocomplete=\"off\" [formGroup]=\"form\">\n      <div class=\"form-row justify-content-left\">\n        <div class=\"form-group col-md-2 justify-content-end\">\n          <label for=\"cdInventario\"> Número Nota Fiscal </label>\n          <input \n            id=\"cdNotaFiscal\"\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"DIGITE...\"\n            formControlName=\"cdNotaFiscal\"\n            (keyup.enter)=\"getListaExistente()\"\n          >\n        </div>\n        <div class=\"form-group col-md-2 justify-content-end\">\n          <label for=\"cdInventario\"> Número R.O. </label>\n          <input \n            id=\"cdOcorrencia\"\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"DIGITE...\"\n            formControlName=\"cdOcorrencia\"\n            (keyup.enter)=\"getListaExistente()\"\n          >\n        </div>\n      </div>  \n    </form>\n  </advanced-filter>\n  <div class=\"row\">\n    <div class=\"col\">\n      <subtitles\n        [data]=\"subtitles\"\n        [show]=\"noResult\">\n      </subtitles>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div [ngClass]=\"{'col': !showDetailPanel, 'col-4 pr-0': showDetailPanel}\">\n      <custom-table [config]=\"tableFilterConfig\">\n        <ng-template #thead let-thead>\n          <tr>\n            <th style=\"width: 50px\"></th>\n            <th class=\"text-center\">Nota Fiscal</th>\n            <th class=\"text-center\">Data Emissão NF</th>\n            <th class=\"text-center\">R.O.</th>\n            <th class=\"text-center\">Data Emissão R.O.</th>\n            <th style=\"width: 50px\"></th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr class=\"hover\" *ngFor=\"let ocorrencia of ocorrencias | slice : begin : end; let i = index\" [ngClass]=\"{'bg-active': notaFiscalSelecionada == ocorrencia.NR_NOTA_FISCAL}\">\n            <td \n            style=\"width: 50px\"\n            [ngClass]=\" ocorrencia.SITU == 'TOTAL' ? 'border-danger' : 'border-warning'\" >\n              <div class=\"custom-control custom-checkbox\" style=\"cursor: pointer;\">\n                  <input type=\"checkbox\" class=\"custom-control-input\" \n                        [(ngModel)]=\"ocorrencia.check\" \n                        (change)=\"verificaCheck(ocorrencia)\" \n                        id=\"customCheck{{ i }}\" \n                        style=\"cursor: pointer;\">\n                  <label class=\"custom-control-label\" for=\"customCheck{{ i }}\" style=\"cursor: pointer;\"></label>\n              </div>\n            </td>\n            <td class=\"text-center\" (click)=\"getMateriaisNotasFiscais(ocorrencia.CD_OCOR)\">{{ ocorrencia.NR_NOTA_FISCAL }}</td>\n            <td class=\"text-center\" (click)=\"getMateriaisNotasFiscais(ocorrencia.CD_OCOR)\">{{ ocorrencia.DATA_EMIS }}</td>\n            <td class=\"text-center\" (click)=\"getMateriaisNotasFiscais(ocorrencia.CD_OCOR)\">{{ ocorrencia.CD_OCOR }}</td>\n            <td class=\"text-center\" (click)=\"getMateriaisNotasFiscais(ocorrencia.CD_OCOR)\">{{ ocorrencia.DATA_LANC }}</td>\n            <td style=\"width: 50px; cursor: pointer;\" (click)=\"getMateriaisNotasFiscais(ocorrencia.CD_OCOR)\"><i class=\"far fa-file-alt\"></i></td>\n          </tr>\n        </ng-template>\n      </custom-table><div class=\"mt-3 col-6\"></div>\n      <div *ngIf=\"qtNotasFiscais >= itemsPerPage\">\n        Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > qtNotasFiscais ? qtNotasFiscais : currentPage*(itemsPerPage) }} de {{ qtNotasFiscais }}\n        <pagination\n          [maxSize]=\"10\"\n          [totalItems]=\"qtNotasFiscais\"\n          [(itemsPerPage)]=\"itemsPerPage\"\n          (pageChanged)=\"onPageChanged($event)\"\n          [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPage\"\n          previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\"\n          lastText=\"&raquo;\">\n        </pagination>\n      </div>\n    </div>\n    <div class=\"col-8\" [hidden]=\"!showDetailPanel\">\n      <detail-panel [panelTitle]=\"appTitleNotasFiscais\">\n        <custom-table [config]=\"tableNotasFiscaisMateriaisConfig\"> <!-- [heading]=\"notaFiscalSelecionada\" -->\n          <ng-template #thead let-thead>\n            <tr>\n              <th>Código</th>\n              <th style=\"width: 50%\">Descrição</th>\n              <th>Peso Liq. NF</th>\n              <th>Peso Liq. Ocorrência</th>\n              <th>Valor</th>\n            </tr>\n          </ng-template>\n          <ng-template #tbody let-tbody>\n            <tr *ngFor=\"let materialNotaFiscal of materiaisNotaFiscal; let i = index\">\n              <td>{{ materialNotaFiscal.CD_MATE }}</td>\n              <td style=\"width: 50%\">{{ materialNotaFiscal.DS_MATE  }}</td>\n              <td>{{ materialNotaFiscal.QT_ITEM | number : '1.3-3' }}</td>\n              <td>{{ materialNotaFiscal.QT_OCOR_DEVO | number : '1.3-3' }}</td>\n              <td>{{ materialNotaFiscal.VL_UNIT | currency:'BRL':'symbol':'1.2-2'}}</td>\n            </tr> \n          </ng-template>\n        </custom-table>\n      </detail-panel>\n    </div>\n  </div>\n</app-body>\n\n");

/***/ }),

/***/ "tn3N":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/logistica/estoque/painel-inventario/inventario/lista/lista.service.ts ***!
  \***********************************************************************************************/
/*! exports provided: LogisticaEstoquePainelInventarioInventarioListaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaEstoquePainelInventarioInventarioListaService", function() { return LogisticaEstoquePainelInventarioInventarioListaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");



let LogisticaEstoquePainelInventarioInventarioListaService = class LogisticaEstoquePainelInventarioInventarioListaService {
    constructor(http) {
        this.http = http;
        this.BASE_URL = `https://crm360.monterrey.com.bo/api`;
    }
    getLista(idInventario, matricula = '', cdMaterial = '', naoConsideraEstoqueZerado) {
        return this.http.get(`${this.BASE_URL}/logistica/estoque/inventarios/${idInventario}/materiais`, {
            params: {
                idInventario: idInventario,
                matricula: matricula,
                cdMaterial: cdMaterial,
                naoConsideraEstoqueZerado: naoConsideraEstoqueZerado,
            },
        });
    }
    getListaMateriaisParaFiltro(idInventario, matricula = '') {
        return this.http.get(`${this.BASE_URL}/logistica/estoque/inventarios/${idInventario}/materiais`, {
            params: {
                idInventario: idInventario,
                matricula: matricula,
                naoConsideraEstoqueZerado: '0',
                qtPagina: '1000',
            },
            observe: 'response',
        });
    }
    postSalvar(requisicao, idInventario) {
        return this.http.post(`${this.BASE_URL}/logistica/estoque/inventario/${idInventario}/materiais/lancamento`, requisicao, { observe: 'response' });
    }
    atualizarInventario(observacao = '', idStatusInventario, idInventario, matriculaAuditor) {
        return this.http.put(`${this.BASE_URL}/logistica/estoque/inventarios/${idInventario}`, {
            observacao: observacao,
            idStatusInventario: idStatusInventario,
            matriculaAuditor: matriculaAuditor,
        }, { observe: 'response' });
    }
    getInfoInventario(idInventario) {
        return this.http.get(`${this.BASE_URL}/logistica/estoque/inventario/${idInventario}`);
    }
    getNotasFiscaisRo(idInventario, nrNotaFiscalRo) {
        return this.http.get(`${this.BASE_URL}/logistica/estoque/inventario/${idInventario}/notas-fiscais`, {
            params: {
                nrNotaFiscalRo: nrNotaFiscalRo,
            },
            observe: 'response',
        });
    }
    getMateriaisNotasFiscaisRo(idInventario, notaFiscalRo) {
        return this.http.get(`${this.BASE_URL}/logistica/estoque/inventario/${idInventario}/nota-fiscal/${notaFiscalRo}`, {
            observe: 'response',
        });
    }
    salvarNotasFiscaisRo(idInventario, notasFiscaisRo, matriculaAuditor) {
        return this.http.put(`${this.BASE_URL}/logistica/estoque/inventario/${idInventario}/notas-fiscais`, {
            notasFiscaisRo: notasFiscaisRo,
            matriculaAuditor: matriculaAuditor,
        }, { observe: 'response' });
    }
    getInfoInventarioRotativo(idInventario, cdMaterial) {
        return this.http.get(`${this.BASE_URL}/logistica/estoque/inventario-rotativo/${idInventario}/material/${cdMaterial}`, {
            observe: 'response',
        });
    }
    getPerfil(matricula = '') {
        return this.http.get(`${this.BASE_URL}/logistica/estoque/inventario/usuarios/${matricula}/perfis/controle-acesso`);
    }
    getTotal(idInventario) {
        return this.http.get(`${this.BASE_URL}/logistica/estoque/inventarios/${idInventario}/resultado`, {
            observe: 'response',
        });
    }
};
LogisticaEstoquePainelInventarioInventarioListaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
LogisticaEstoquePainelInventarioInventarioListaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], LogisticaEstoquePainelInventarioInventarioListaService);



/***/ }),

/***/ "u/Fv":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/logistica/estoque/painel-inventario/inventario/inventario.service.ts ***!
  \**********************************************************************************************/
/*! exports provided: LogisticaEstoquePainelInventarioInventarioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaEstoquePainelInventarioInventarioService", function() { return LogisticaEstoquePainelInventarioInventarioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");




let LogisticaEstoquePainelInventarioInventarioService = class LogisticaEstoquePainelInventarioInventarioService {
    constructor(http, dateService) {
        this.http = http;
        this.dateService = dateService;
        this.BASE_URL = `https://crm360.monterrey.com.bo/api`;
    }
    getInventario(params) {
        return this.http.get(`${this.BASE_URL}/logistica/estoque/inventarios`, {
            params: params,
            observe: 'response'
        });
    }
    getClassesInventario(idInventario) {
        return this.http.get(`${this.BASE_URL}/logistica/estoque/inventarios/classes/${idInventario}`, {
            observe: 'response'
        });
    }
    getEmpresas() {
        return this.http.get(`${this.BASE_URL}/common/empresas`);
    }
    getDepositos(idEmpresa) {
        return this.http.get(`${this.BASE_URL}/common/depositos/${idEmpresa}`);
    }
    getLinhas() {
        return this.http.get(`${this.BASE_URL}/common/linhas`);
    }
    getClasses(descricaoLinhas) {
        return this.http.get(`${this.BASE_URL}/common/classes`, {
            params: {
                linhas: btoa(descricaoLinhas)
            }
        });
    }
    getMateriais(descricaoLinhas, idClasses) {
        if (!idClasses)
            idClasses = '';
        return this.http.get(`${this.BASE_URL}/common/materiais`, {
            params: {
                linhas: btoa(descricaoLinhas),
                classes: btoa(idClasses)
            }
        });
    }
};
LogisticaEstoquePainelInventarioInventarioService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_3__["DateService"] }
];
LogisticaEstoquePainelInventarioInventarioService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_3__["DateService"]])
], LogisticaEstoquePainelInventarioInventarioService);



/***/ }),

/***/ "vuU3":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/modules/logistica/estoque/painel-inventario/inventario/materiais-notas-fiscais/materiais-notas-fiscais.service.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: LogisticaEstoquePainelInventarioInventarioMateriaisNotasFiscaisService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaEstoquePainelInventarioInventarioMateriaisNotasFiscaisService", function() { return LogisticaEstoquePainelInventarioInventarioMateriaisNotasFiscaisService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");



let LogisticaEstoquePainelInventarioInventarioMateriaisNotasFiscaisService = class LogisticaEstoquePainelInventarioInventarioMateriaisNotasFiscaisService {
    constructor(http) {
        this.http = http;
        this.BASE_URL = `https://crm360.monterrey.com.bo/api`;
    }
    getNotasFiscais(idInventario, nrNotaFiscal, cdEmp) {
        return this.http.get(`${this.BASE_URL}/logistica/estoque/inventarios/${idInventario}/notas-fiscais`, {
            params: {
                nrNotaFiscal: nrNotaFiscal,
                cdEmp: cdEmp
            },
            observe: 'response',
        });
    }
    getMateriaisNotasFiscais(idInventario, notaFiscal) {
        return this.http.get(`${this.BASE_URL}/logistica/estoque/inventarios/${idInventario}/nota-fiscal/${notaFiscal}`, {
            observe: 'response',
        });
    }
    salvarNotasFiscais(idInventario, notasFiscais, matriculaAuditor) {
        return this.http.put(`${this.BASE_URL}/logistica/estoque/inventarios/${idInventario}/notas-fiscais`, {
            notasFiscais: notasFiscais,
            matriculaAuditor: matriculaAuditor,
        }, { observe: 'response' });
    }
    getInventario(cdInventario) {
        return this.http.get(`${this.BASE_URL}/logistica/estoque/inventarios`, {
            params: { cdInventario: cdInventario
            },
            observe: 'response'
        });
    }
};
LogisticaEstoquePainelInventarioInventarioMateriaisNotasFiscaisService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LogisticaEstoquePainelInventarioInventarioMateriaisNotasFiscaisService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], LogisticaEstoquePainelInventarioInventarioMateriaisNotasFiscaisService);



/***/ })

}]);
//# sourceMappingURL=estoque-painel-inventario-painel-inventario-module-es2015.js.map