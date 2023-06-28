(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["estoque-painel-inventario-painel-inventario-module"], {
    /***/
    "+vhV":
    /*!*****************************************************************************************!*\
      !*** ./src/app/modules/logistica/estoque/painel-inventario/painel-inventario.module.ts ***!
      \*****************************************************************************************/

    /*! exports provided: LogisticaEstoquePainelInventarioModule */

    /***/
    function vhV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaEstoquePainelInventarioModule", function () {
        return LogisticaEstoquePainelInventarioModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-bootstrap/pagination */
      "6No5");
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "ienR");
      /* harmony import */


      var ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap/timepicker */
      "M3cK");
      /* harmony import */


      var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-bootstrap/tabs */
      "2ZVE");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng2-currency-mask */
      "D5nU");
      /* harmony import */


      var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_11__);
      /* harmony import */


      var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/core/not-found/not-found.module */
      "sCnT");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ngx-filter-pipe */
      "4muW");
      /* harmony import */


      var _painel_inventario_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./painel-inventario-routing.module */
      "M/gQ");
      /* harmony import */


      var _painel_inventario_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./painel-inventario.component */
      "MCWC");
      /* harmony import */


      var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./cadastro/cadastro.component */
      "LcXQ");
      /* harmony import */


      var _inventario_inventario_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./inventario/inventario.component */
      "bc5J");
      /* harmony import */


      var _inventario_lista_lista_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./inventario/lista/lista.component */
      "Jbbf");
      /* harmony import */


      var _inventario_materiais_notas_fiscais_materiais_notas_fiscais_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./inventario/materiais-notas-fiscais/materiais-notas-fiscais.component */
      "Z9EM");
      /* harmony import */


      var _inventario_materiais_ocorrencias_materiais_ocorrencias_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./inventario/materiais-ocorrencias/materiais-ocorrencias.component */
      "lJJZ");
      /* harmony import */


      var _inventario_relatorio_relatorio_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./inventario/relatorio/relatorio.component */
      "nAji"); // ngx-bootstrap
      // ng-select
      // ng2-currency-mask


      var LogisticaEstoquePainelInventarioModule = /*#__PURE__*/_createClass(function LogisticaEstoquePainelInventarioModule() {
        _classCallCheck(this, LogisticaEstoquePainelInventarioModule);
      });

      LogisticaEstoquePainelInventarioModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_painel_inventario_component__WEBPACK_IMPORTED_MODULE_17__["LogisticaEstoquePainelInventarioComponent"], _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_18__["LogisticaEstoquePainelInventarioCadastroComponent"], _inventario_inventario_component__WEBPACK_IMPORTED_MODULE_19__["LogisticaEstoquePainelInventarioInventarioComponent"], _inventario_lista_lista_component__WEBPACK_IMPORTED_MODULE_20__["LogisticaEstoquePainelInventarioInventarioListaComponent"], _inventario_materiais_notas_fiscais_materiais_notas_fiscais_component__WEBPACK_IMPORTED_MODULE_21__["LogisticaEstoquePainelInventarioInventarioMateriaisNotasFiscaisComponent"], _inventario_materiais_ocorrencias_materiais_ocorrencias_component__WEBPACK_IMPORTED_MODULE_22__["LogisticaEstoquePainelInventarioInventarioMateriaisOcorrenciasComponent"], _inventario_relatorio_relatorio_component__WEBPACK_IMPORTED_MODULE_23__["LogisticaEstoquePainelInventarioInventarioRelatorioComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_15__["FilterPipeModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["ModalModule"].forRoot(), ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__["TabsModule"].forRoot(), ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_7__["TimepickerModule"].forRoot(), ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsDatepickerModule"].forRoot(), ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"].forRoot(), src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_9__["TemplatesModule"].forRoot(), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["NgSelectModule"], ng2_currency_mask__WEBPACK_IMPORTED_MODULE_11__["CurrencyMaskModule"], _painel_inventario_routing_module__WEBPACK_IMPORTED_MODULE_16__["LogisticaEstoquePainelInventarioRoutingModule"], src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_12__["NotFoundModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"]],
        providers: [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_13__["PNotifyService"], {
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],
          useValue: 'pt-PT'
        }]
      })], LogisticaEstoquePainelInventarioModule);
      /***/
    },

    /***/
    "05IL":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/estoque/painel-inventario/inventario/lista/lista.component.html ***!
      \*****************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function IL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen [hidden]=\"!spinnerFullScreen\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar [hidden]=\"!loaderNavbar\"></loader-spinner-navbar>\r\n<app-header [appTitle]=\"appTitle\">\r\n  <button \r\n    (click)=\"onSearch()\"\r\n    >\r\n    Pesquisar\r\n  </button>\r\n  <button \r\n    (click)=\"openOcorrencias(idInventario)\"\r\n    *ngIf=\"ativNotaFiscal\"\r\n    >\r\n    Ocorrências\r\n  </button>\r\n  <button \r\n    (click)=\"openNotaFiscal(idInventario)\"\r\n    *ngIf=\"ativNotaFiscal\"\r\n    >\r\n    Notas Fiscais\r\n  </button>\r\n  <button \r\n    (click)=\"exportarExcel()\"\r\n    [disabled]=\"!info || noResult\"\r\n    *ngIf=\"ativExport\"\r\n    >\r\n    Exportar\r\n  </button>\r\n  <button\r\n    class=\"hover\" \r\n    (click)=\"cancelar(template, 1)\"\r\n    *ngIf=\"ativCancelar\"\r\n    >\r\n    Cancelar\r\n  </button>\r\n  <button \r\n    (click)=\"habilitaCampos()\"\r\n    [disabled]=\"(habilita && !info) || inativBotoes || noResult\"\r\n    *ngIf=\"ativEditar\"\r\n    >\r\n    Editar\r\n  </button>\r\n  <button \r\n    (click)=\"postSalvar()\"\r\n    [disabled]=\"info || inativBotoes || noResult\"\r\n    *ngIf=\"ativSalvar\"\r\n    >\r\n    Salvar\r\n  </button>\r\n  <button \r\n    (click)=\"finalizar(template)\"\r\n    *ngIf=\"ativFinaliza\"\r\n    >\r\n    Finalizar\r\n  </button>\r\n  <button \r\n    (click)=\"atualizarInventario('',1)\"\r\n    *ngIf=\"ativReabrir\"\r\n    >\r\n    Reabrir\r\n  </button>\r\n  <button\r\n    class=\"hover\" \r\n    (click)=\"atualizarInventario('',5)\"\r\n    [disabled]=\"!ativAprovar\"\r\n    *ngIf=\"ativAprovar\"\r\n    >\r\n    Aprovar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <div class=\"d-flex justify-content-between align-items-center col-12 p-0\" [hidden]=\"noResult || spinnerFullScreen\">\r\n    <div>\r\n      <strong style=\"font-size: 1.25rem\">Código do Inventário: {{ idInventario | number : '6.0-0'}} - {{ tipoInventario | uppercase }}</strong>\r\n      <div \r\n        class=\"d-flex justify-content-start align-items-center\" \r\n        style=\"cursor: pointer; font-size: 1rem\"\r\n        *ngIf=\"disabledBotoes.editar\"\r\n        >\r\n          <i [ngClass]=\"{'fa-toggle-off': considerarMaterialSemEstoque == 1, 'fa-toggle-on': considerarMaterialSemEstoque == 0}\" \r\n          class=\"fas pr-1\" \r\n          (click)=\"onToggleListaMateriais();\" \r\n          >\r\n        </i> Considerar materiais sem estoque\r\n      </div>\r\n    </div>\r\n    <form class=\"col-4 p-0\" [formGroup]=\"form\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-12\">\r\n          <label for=\"dsMaterial\">Material</label>\r\n          <ng-select\r\n              [items]= \"listaMateriaisFiltro\"\r\n              [closeOnSelect]=\"true\"\r\n              [hideSelected]=\"true\"\r\n              bindLabel=\"dsMaterial\"\r\n              bindValue=\"cdMaterial\"\r\n              placeholder=\"Pesquise por um material\"\r\n              formControlName=\"cdMaterial\"\r\n          >\r\n          </ng-select>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <div class=\"row mb-3\" [hidden]=\"spinnerFullScreen\">\r\n    <div class=\"col-lg-12\">\r\n      <div class=\"border shadow-sm\">\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n            <div\r\n              id=\"filter-header\"\r\n              class=\"hover w-100 d-flex justify-content-between\"\r\n              [ngClass]=\"{'shadow-sm border-bottom': showAdvancedFilter}\"\r\n              (click)=\"onAdvancedFilter()\">\r\n              <div class=\"mtc-title mb-0 pl-2 pt-1\"> Totalizador </div>\r\n              <button\r\n                type=\"button\"\r\n                class=\"btn-icon-sm my-auto mr-1\">\r\n                <i class=\"fas fa-chevron-down\" [hidden]=\"showAdvancedFilter\"></i>\r\n                <i class=\"fas fa-chevron-up\" [hidden]=\"!showAdvancedFilter\"></i>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div id=\"filter-body\" [hidden]=\"showAdvancedFilter\">\r\n          <custom-table [config]=\"tableFilterConfig\">\r\n            <ng-template #thead let-thead>\r\n              <tr>\r\n                <th scope=\"col\" class=\"text-center\" style=\"border-top: none\"></th>\r\n                <th scope=\"col\" class=\"text-center\" style=\"border-top: none\"></th>\r\n                <th scope=\"col\" class=\"text-center\" style=\"border-top: none\"></th>\r\n                <th scope=\"col\" class=\"text-center\" style=\"border-top: none\"></th>\r\n                <th scope=\"col\" class=\"text-center\" style=\"border-top: none\"></th>\r\n                <th scope=\"col\" class=\"text-center\" style=\"border-top: none\"></th>\r\n                <th scope=\"col\" class=\"text-center\" style=\"border-top: none\"></th>\r\n                <th scope=\"col\" class=\"text-center\" style=\"border-top: none\"></th>\r\n                <th scope=\"col\" class=\"text-center\" style=\"border-top: none\"></th>\r\n                <th scope=\"col\" class=\"text-center\" style=\"border-top: none\"></th>\r\n                <th scope=\"col\" class=\"text-center\" style=\"border-top: none\"></th>\r\n              </tr>\r\n            </ng-template>\r\n            <ng-template #tbody let-tbody>\r\n              <tr>\r\n                <td style=\"border-top: none\"><h6>Total Estoque (tons)</h6></td>\r\n                <td style=\"border-top: none\"><h6>=</h6></td>\r\n                <td style=\"border-top: none\"><h6>{{ listaInfo.qtPesoEstoque | number: '1.3-3' }}</h6></td>\r\n                <td style=\"border-top: none\"><h6></h6></td>\r\n                <td style=\"border-top: none\"><h6>Total geral da contagem</h6></td>\r\n                <td style=\"border-top: none\"><h6>=</h6></td>\r\n                <td style=\"border-top: none\"><h6>{{ listaInfo.saldoEstoqueLancamento | number: '1.3-3' }}</h6></td>\r\n                <td style=\"border-top: none\"><h6></h6></td>\r\n                <td style=\"border-top: none\"><h6>Total inventário rotativo</h6></td>\r\n                <td style=\"border-top: none\"><h6>=</h6></td>\r\n                <td style=\"border-top: none\"><h6></h6></td>\r\n              </tr>\r\n              <tr>\r\n                <td style=\"border-top: none\"><h6>Total qtd. peças</h6></td>\r\n                <td style=\"border-top: none\"><h6>=</h6></td>\r\n                <td style=\"border-top: none\"><h6>{{ listaInfo.qtPecaLancamento }}</h6></td>\r\n                <td style=\"border-top: none\"><h6></h6></td>\r\n                <td style=\"border-top: none\"><h6>Total notas fiscais</h6></td>\r\n                <td style=\"border-top: none\"><h6>=</h6></td>\r\n                <td style=\"border-top: none\"><h6>{{ listaInfo.qtTotalNf | number: '1.3-3' }}</h6></td>\r\n                <td style=\"border-top: none\"><h6></h6></td>\r\n                <td style=\"border-top: none\"><h6>Total valor unitário</h6></td>\r\n                <td style=\"border-top: none\"><h6>=</h6></td>\r\n                <td style=\"border-top: none\"><h6>{{ listaInfo.precoMinimo | currency:'BRL' }}</h6></td>\r\n              </tr>\r\n              <tr>\r\n                <td style=\"border-top: none\"><h6>Total peso físico (tons)</h6></td>\r\n                <td style=\"border-top: none\"><h6>=</h6></td>\r\n                <td style=\"border-top: none\"><h6>{{ listaInfo.qtPesoLancamento | number: '1.3-3' }}</h6></td>\r\n                <td style=\"border-top: none\"><h6></h6></td>\r\n                <td style=\"border-top: none\"><h6>Total saldo inventário</h6></td>\r\n                <td style=\"border-top: none\"><h6>=</h6></td>\r\n                <td style=\"border-top: none\"><h6>{{ listaInfo.saldoEstoque | number: '1.3-3' }}</h6></td>\r\n                <td style=\"border-top: none\"><h6></h6></td>\r\n                <td style=\"border-top: none\"><h6>Total resultado inventário</h6></td>\r\n                <td style=\"border-top: none\"><h6>=</h6></td>\r\n                <td style=\"border-top: none\"><h6></h6></td>\r\n              </tr>\r\n              <tr>\r\n                <td style=\"border-top: none\"></td>\r\n                <td style=\"border-top: none\"></td>\r\n                <td style=\"border-top: none\"></td>\r\n                <td style=\"border-top: none\"></td>\r\n                <td style=\"border-top: none\"><h6>Total notas fiscais R.O.</h6></td>\r\n                <td style=\"border-top: none\"><h6>=</h6></td>\r\n                <td style=\"border-top: none\"><h6></h6></td>\r\n                <td style=\"border-top: none\"><h6></h6></td>\r\n                <td style=\"border-top: none\"><h6>Total resultado monetário</h6></td>\r\n                <td style=\"border-top: none\"><h6>=</h6></td>\r\n                <td style=\"border-top: none\"><h6>{{ listaInfo.saldoFinanceiro | currency:'BRL' }}</h6></td>\r\n              </tr>  \r\n            </ng-template>\r\n          </custom-table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div [ngClass]=\"{'col': !showDetailPanel, 'col-8 pr-0': showDetailPanel}\">\r\n      <custom-table [config]=\"tableConfig\" [hidden]=\"noResult || spinnerFullScreen\">\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n            <th scope=\"col\" style=\"width: 150px;\" class=\"text-center\" [hidden]=\"showDetailPanel\">Classe</th>\r\n            <th scope=\"col\" style=\"width: 150px;\" class=\"text-center\">Cod. material</th>\r\n            <th scope=\"col\" style=\"width: 350px;\" class=\"text-center\">Material</th>\r\n            <th scope=\"col\" style=\"width: 150px;\" class=\"text-center\">Estoque (tons)</th>\r\n            <th scope=\"col\" style=\"width: 150px;\" class=\"text-center\" [hidden]=\"showDetailPanel\">Qtd. peças</th>\r\n            <th scope=\"col\" style=\"width: 150px;\" class=\"text-center\">Peso físico (tons)</th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr class=\"hover\" *ngFor=\"let lista of listas | slice : begin : end; let i = index\" (click)='onDetailPanel(i)'>\r\n            <td class=\"text-center\" [hidden]=\"showDetailPanel\"> {{ lista?.dsClasse | uppercase }}</td>\r\n            <td class=\"text-center\">{{ lista.cdMaterial }}</td>\r\n            <td class=\"text-center\" style=\"width: 350px;\">{{ lista.dsMaterial | uppercase }}</td>\r\n            <td class=\"text-center\" [hidden]=\"showDetailPanel\">{{ lista.qtPesoEstoque | number: '1.3-3'}}</td>\r\n            <td class=\"text-center\">\r\n              <div class=\"input-group\">\r\n                <input \r\n                  class=\"form-control form-control-sm\" \r\n                  type=\"text\" \r\n                  [(ngModel)]=\"lista.qtPecaContagem\"\r\n                  [disabled]=\"info\">\r\n              </div>\r\n            </td>\r\n            <td class=\"align-middle\">\r\n              <div class=\"input-group\">\r\n                <input \r\n                  class=\"form-control form-control-sm\" \r\n                  type=\"text\"\r\n                  [(ngModel)]=\"lista.qtPesoContagem\"\r\n                  [disabled]=\"info\"\r\n                  currencyMask [options]=\"{ align: 'left', prefix: '', thousands: '.', decimal: ',', precision: 3 }\">\r\n              </div>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n      <div class=\"row\" [hidden]=\"noResult || spinnerFullScreen\">\r\n        <div class=\"mt-3 col\">\r\n            Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\r\n          <pagination\r\n            [maxSize]=\"10\"\r\n            [totalItems]=\"totalItems\"\r\n            (pageChanged)=\"onPageChanged($event)\"\r\n            [(itemsPerPage)]=\"itemsPerPage\"\r\n            [boundaryLinks]=\"true\"\r\n            [(ngModel)]=\"currentPage\"\r\n            previousText=\"&lsaquo;\"\r\n            nextText=\"&rsaquo;\"\r\n            firstText=\"&laquo;\"\r\n            lastText=\"&raquo;\">\r\n          </pagination>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-4\" [hidden]=\"!showDetailPanel\">\r\n      <detail-panel [panelTitle]=\"appTitleInventario\">\r\n          <div class=\"row\">\r\n            <div class=\"col-6\">\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-md-12\">\r\n                  <label>Classe</label>\r\n                  <div class=\"text-nowrap\">{{ totalInventario.dsClasse | uppercase }}</div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-md-12\">\r\n                  <label>Endereço</label>\r\n                  <div class=\"text-nowrap\">{{ totalInventario.enderecoPatio | uppercase }}</div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-md-12\">\r\n                  <label>Estoque (tons)</label>\r\n                  <div class=\"text-nowrap\">{{ totalInventario.qtPesoEstoque | number: '1.3-3'}}</div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-md-12\">\r\n                  <label>Peso por peça (Kg)</label>\r\n                  <div class=\"text-nowrap\">{{ totalInventario.pesoPeca | number: '1.3-3' }}</div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-md-12\">\r\n                  <label>Total da contagem</label>\r\n                  <div class=\"text-nowrap\">{{ totalInventario.totalContagem | number: '1.3-3' }}</div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-md-12\">\r\n                  <label>Notas fiscais</label>\r\n                  <div class=\"text-nowrap\">{{ totalInventario.qtMaterialNotaFiscal | number: '1.3-3' }}</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-6\">\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-md-12\">\r\n                  <label>Saldo inventário</label>\r\n                  <div class=\"text-nowrap\">{{ totalInventario.saldoInventario | number: '1.3-3' }}</div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-md-12\">\r\n                  <label>Soma inventário rotativo</label>\r\n                  <div class=\"text-nowrap\">{{ totalInventario.somaInventarioRotativo }}</div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-md-12\">\r\n                  <label>Valor unitário</label>\r\n                  <div class=\"text-nowrap\">{{ totalInventario.precoMinimo | currency:'BRL' }}</div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-md-12\">\r\n                  <label>Resultado inventário</label>\r\n                  <div class=\"text-nowrap\">{{ totalInventario.resultadoInventario | number: '1.3-3' }}</div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-md-12\">\r\n                  <label>Resultado monetário</label>\r\n                  <div class=\"text-nowrap\">{{ totalInventario.resultadoMonetario | currency:'BRL' }}</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n      </detail-panel>\r\n    </div>\r\n    <div class=\"d-flex align-items-center justify-content-center\" style=\"width: 100%; height: 70%;\" [hidden]=\"!noResult\">\r\n      <empty-result message=\"Não há materiais cadastrados para este inventário\"></empty-result>\r\n    </div>\r\n  </div>\r\n  <ng-template #template>\r\n    <div class=\"modal-header\">\r\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <textarea name=\"\" id=\"\" cols=\"63\" rows=\"10\" #justificativa></textarea>\r\n      <button  \r\n        type=\"button\" \r\n        class=\"btn btn-primary justify-content-end \" \r\n        style=\"margin-left: 51vh\"\r\n        (click)=\"atualizarInventario(justificativa.value, 3); modalRef.hide()\"> Finalizar </button>\r\n    </div>\r\n  </ng-template>\r\n</app-body>\r\n\r\n";
      /***/
    },

    /***/
    "298m":
    /*!**********************************************************************************************!*\
      !*** ./src/app/modules/logistica/estoque/painel-inventario/painel-inventario.component.scss ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function m(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2VzdG9xdWUvcGFpbmVsLWludmVudGFyaW8vcGFpbmVsLWludmVudGFyaW8uY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "3pwz":
    /*!************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/estoque/painel-inventario/painel-inventario.component.html ***!
      \************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function pwz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\r\n";
      /***/
    },

    /***/
    "3r0W":
    /*!*****************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/estoque/painel-inventario/inventario/materiais-notas-fiscais/materiais-notas-fiscais.component.html ***!
      \*****************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function r0W(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen [hidden]=\"!spinnerFullScreen\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar [hidden]=\"!loaderNavbar\"></loader-spinner-navbar>\r\n<app-header [appTitle]=\"appTitle\">\r\n  <button \r\n    (click)=\"fecharSalvar(idInventario)\"\r\n  >\r\n    Fechar e Salvar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <advanced-filter #scrollToFilter>\r\n    <form autocomplete=\"off\" [formGroup]=\"form\">\r\n      <div class=\"form-row justify-content-left\">\r\n        <div class=\"form-group col-md-2 justify-content-end\">\r\n          <label for=\"cdInventario\"> Número Nota Fiscal </label>\r\n          <input \r\n            id=\"cdNotaFiscal\"\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            placeholder=\"DIGITE...\"\r\n            formControlName=\"cdNotaFiscal\"\r\n            (keyup.enter)=\"getListaExistente()\"\r\n          >\r\n        </div>\r\n      </div>  \r\n    </form>\r\n  </advanced-filter>\r\n  <div class=\"row\">\r\n    <div [ngClass]=\"{'col': !showDetailPanel, 'col-4 pr-0': showDetailPanel}\">\r\n      <custom-table [config]=\"tableFilterConfig\">\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n            <th style=\"width: 50px\"></th>\r\n            <th>Nota Fiscal</th>\r\n            <th>Data de Emissão</th>\r\n            <th style=\"width: 50px\"></th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr class=\"hover\" *ngFor=\"let notaFiscal of notasFiscais | slice : begin : end; let i = index\" [ngClass]=\"{'bg-active': notaFiscalSelecionada == notaFiscal.notaFiscal}\">\r\n            <td \r\n            style=\"width: 50px\"\r\n            [ngClass]=\"{ 'border-success': notaFiscal.situacao == 'Emitida',\r\n            'border-warning': notaFiscal.situacao != 'Emitida'}\" >\r\n              <div class=\"custom-control custom-checkbox\" style=\"cursor: pointer;\">\r\n                  <input type=\"checkbox\" class=\"custom-control-input\" \r\n                        [(ngModel)]=\"notaFiscal.check\" \r\n                        (change)=\"verificaCheck(notaFiscal)\" \r\n                        id=\"customCheck{{ i }}\" \r\n                        style=\"cursor: pointer;\">\r\n                  <label class=\"custom-control-label\" for=\"customCheck{{ i }}\" style=\"cursor: pointer;\"></label>\r\n              </div>\r\n            </td>\r\n            <td (click)=\"getMateriaisNotasFiscais(notaFiscal.notaFiscal)\">{{ notaFiscal.notaFiscal }}</td>\r\n            <td (click)=\"getMateriaisNotasFiscais(notaFiscal.notaFiscal)\">{{ notaFiscal.dtEmissao | date: 'dd/MM/yyyy HH:mm' }}</td>\r\n            <td style=\"width: 50px; cursor: pointer;\" (click)=\"getMateriaisNotasFiscais(notaFiscal.notaFiscal)\"><i class=\"far fa-file-alt\"></i></td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table><div class=\"mt-3 col-6\"></div>\r\n      <div *ngIf=\"qtNotasFiscais >= itemsPerPage\">\r\n        Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > qtNotasFiscais ? qtNotasFiscais : currentPage*(itemsPerPage) }} de {{ qtNotasFiscais }}\r\n        <pagination\r\n          [maxSize]=\"10\"\r\n          [totalItems]=\"qtNotasFiscais\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          (pageChanged)=\"onPageChanged($event)\"\r\n          [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPage\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\">\r\n        </pagination>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-8\" [hidden]=\"!showDetailPanel\">\r\n      <detail-panel [panelTitle]=\"appTitleNotasFiscais\">\r\n        <custom-table [config]=\"tableNotasFiscaisMateriaisConfig\"> <!-- [heading]=\"notaFiscalSelecionada\" -->\r\n          <ng-template #thead let-thead>\r\n            <tr>\r\n              <th>Código</th>\r\n              <th style=\"width: 50%\">Descrição</th>\r\n              <th>Peso Liq.</th>\r\n              <th>Valor</th>\r\n            </tr>\r\n          </ng-template>\r\n          <ng-template #tbody let-tbody>\r\n            <tr *ngFor=\"let materialNotaFiscal of materiaisNotaFiscal; let i = index\">\r\n              <td>{{ materialNotaFiscal.cdMaterial }}</td>\r\n              <td style=\"width: 50%\">{{ materialNotaFiscal.dsMaterial  }}</td>\r\n              <td>{{ materialNotaFiscal.pesoLiquido | number : '1.3-3' }}</td>\r\n              <td>{{ materialNotaFiscal.vlTotal  | currency:'BRL':'symbol':'1.2-2'}}</td>\r\n            </tr> \r\n          </ng-template>\r\n        </custom-table>\r\n      </detail-panel>\r\n    </div>\r\n  </div>\r\n</app-body>\r\n\r\n<!-- <div bsModal #childModal=\"bs-modal\" class=\"modal fade\" [config]=\"{backdrop: 'static', keyboard: false}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialog-child-name\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\" style=\"position: absolute; left: -100%; width: 58rem;\">\r\n      <div class=\"modal-header\">\r\n        <div class=\"d-flex position-relative\">\r\n          <div class=\"form-group justify-content-end mr-2 mb-0\">\r\n            <label for=\"cdNotaFiscal\"> Número Nota Fiscal </label>\r\n            <input \r\n              id=\"cdNotaFiscal\"\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              placeholder=\"DIGITE...\"\r\n              [(ngModel)]=\"cdNotaFiscal\"\r\n              (keyup.enter)=\"getListaExistente()\"\r\n            >\r\n          </div>\r\n          <div class=\"spinner-border text-primary position-absolut positionSpinner\" role=\"status\" [hidden]=\"!loading\">\r\n            <span class=\"sr-only\">Loading...</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"actions justify-content-end d-flex\">\r\n          <button type=\"button\" class=\"btn btn-light\" (click)=\"hideChildModal()\">\r\n            Fechar\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div> -->\r\n";
      /***/
    },

    /***/
    "4NJB":
    /*!*******************************************************************************************************************************!*\
      !*** ./src/app/modules/logistica/estoque/painel-inventario/inventario/materiais-ocorrencias/materiais-ocorrencias.service.ts ***!
      \*******************************************************************************************************************************/

    /*! exports provided: LogisticaEstoquePainelInventarioInventarioMateriaisOcorrenciasService */

    /***/
    function NJB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaEstoquePainelInventarioInventarioMateriaisOcorrenciasService", function () {
        return LogisticaEstoquePainelInventarioInventarioMateriaisOcorrenciasService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");

      var LogisticaEstoquePainelInventarioInventarioMateriaisOcorrenciasService = /*#__PURE__*/function () {
        function LogisticaEstoquePainelInventarioInventarioMateriaisOcorrenciasService(http) {
          _classCallCheck(this, LogisticaEstoquePainelInventarioInventarioMateriaisOcorrenciasService);

          this.http = http;
          this.BASE_URL = "https://crm360.monterrey.com.bo/api";
        }

        _createClass(LogisticaEstoquePainelInventarioInventarioMateriaisOcorrenciasService, [{
          key: "getInventario",
          value: function getInventario(cdInventario) {
            return this.http.get("".concat(this.BASE_URL, "/logistica/estoque/inventarios"), {
              params: {
                cdInventario: cdInventario
              },
              observe: 'response'
            });
          }
        }, {
          key: "getOcorrencias",
          value: function getOcorrencias(idInventario, params) {
            return this.http.get("".concat(this.BASE_URL, "/logistica/estoque/inventarios/").concat(idInventario, "/ocorrencias"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "getMateriaisNotasFiscais",
          value: function getMateriaisNotasFiscais(idInventario, ocorrencia) {
            return this.http.get("".concat(this.BASE_URL, "/logistica/estoque/inventarios/").concat(idInventario, "/ocorrencias/").concat(ocorrencia), {
              observe: 'response'
            });
          }
        }, {
          key: "salvarNotasFiscais",
          value: function salvarNotasFiscais(idInventario, ocorrencias, matriculaAuditor) {
            return this.http.put("".concat(this.BASE_URL, "/logistica/estoque/inventarios/").concat(idInventario, "/ocorrencias"), {
              notasFiscais: ocorrencias,
              matriculaAuditor: matriculaAuditor
            }, {
              observe: 'response'
            });
          }
        }]);

        return LogisticaEstoquePainelInventarioInventarioMateriaisOcorrenciasService;
      }();

      LogisticaEstoquePainelInventarioInventarioMateriaisOcorrenciasService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      LogisticaEstoquePainelInventarioInventarioMateriaisOcorrenciasService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], LogisticaEstoquePainelInventarioInventarioMateriaisOcorrenciasService);
      /***/
    },

    /***/
    "7d5/":
    /*!**********************************************************************************************!*\
      !*** ./src/app/modules/logistica/estoque/painel-inventario/cadastro/cadastro.component.scss ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function d5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2VzdG9xdWUvcGFpbmVsLWludmVudGFyaW8vY2FkYXN0cm8vY2FkYXN0cm8uY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "Jbbf":
    /*!*************************************************************************************************!*\
      !*** ./src/app/modules/logistica/estoque/painel-inventario/inventario/lista/lista.component.ts ***!
      \*************************************************************************************************/

    /*! exports provided: LogisticaEstoquePainelInventarioInventarioListaComponent */

    /***/
    function Jbbf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaEstoquePainelInventarioInventarioListaComponent", function () {
        return LogisticaEstoquePainelInventarioInventarioListaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lista.component.html */
      "05IL");
      /* harmony import */


      var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lista.component.scss */
      "c/D8");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/modules/xlsx/xlsx.service */
      "eOmW");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/templates/detail-panel/detal-panel.service */
      "gIxL");
      /* harmony import */


      var _lista_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./lista.service */
      "tn3N");
      /* harmony import */


      var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var _models_totalInventario__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./../../models/totalInventario */
      "b35P");

      var LogisticaEstoquePainelInventarioInventarioListaComponent = /*#__PURE__*/function () {
        function LogisticaEstoquePainelInventarioInventarioListaComponent(xlsxService, activatedRoute, notice, listaInventarioService, dateSevice, route, modalService, formBuilder, atividadesService, detailPanelService) {
          _classCallCheck(this, LogisticaEstoquePainelInventarioInventarioListaComponent);

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
            reabrir: false
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
            animated: true
          };
          this.parametros = {};
          this.breadCrumbTree = [{
            descricao: 'Lista',
            routerLink: '/logistica/estoque/painel-inventario/lista'
          }, {
            descricao: this.appTitle
          }];
          /* Config Table */

          this.tableConfig = {};
          this.tableFilterConfig = {
            border: false
          };
          this.tableNotasFiscaisConfig = {
            subtitleBorder: true
          };
          this.tableNotasFiscaisMateriaisConfig = {
            subtitleBorder: true
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
            cdMaterial: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required]
          });
        }

        _createClass(LogisticaEstoquePainelInventarioInventarioListaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getListaMateriaisParaFiltro();
            this.getInfoInventario();
            this.onLoadAplication();
            this.atividadesService.registrarAcesso().subscribe();
            this.getPerfil();
            this.onSubscription();
          }
        }, {
          key: "onLoadAplication",
          value: function onLoadAplication() {
            var _this = this;

            this.adminProfile = true;
            this.loaderNavbar = true;
            var params = {};

            if (!this.adminProfile) {
              setTimeout(function () {
                _this.perfilLoaded = true;
                _this.loaderNavbar = false;
              }, 500);
            } else if (this.adminProfile) {
              setTimeout(function () {
                _this.perfilLoaded = false;
                _this.loaderNavbar = false;
              }, 500);
            }
          }
        }, {
          key: "onAdvancedFilter",
          value: function onAdvancedFilter() {
            this.showAdvancedFilter = !this.showAdvancedFilter;
          }
        }, {
          key: "onToggleListaMateriais",
          value: function onToggleListaMateriais() {
            this.considerarMaterialSemEstoque = this.considerarMaterialSemEstoque == 1 ? 0 : 1;
            this.getLista('', this.considerarMaterialSemEstoque);
          }
        }, {
          key: "getLista",
          value: function getLista() {
            var _this2 = this;

            var cdMaterial = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            var considerarMaterialSemEstoque = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

            if (this.activatedRoute.snapshot.params['id'] > 0) {
              this.idInventario = this.activatedRoute.snapshot.params['id'];
              this.spinnerFullScreen = true;
              this.listas = [];
              this.totalItems = 0; //Carrega a lista de materiais em inventário

              this.listaInventarioService.getLista(this.idInventario, this.matriculaAuditor, cdMaterial, considerarMaterialSemEstoque).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(function () {
                _this2.spinnerFullScreen = false;
                _this2.loaderNavbar = false;

                _this2.getTotal();
              })).subscribe(function (response) {
                if (response.data == null) {
                  _this2.notice.notice('Não há materiais cadastrados para esse inventário.');
                } else {
                  _this2.listas = response.data['materiais'];
                  _this2.totalItems = response.data['qtRegistros'];
                  _this2.noResult = false;

                  _this2.listas.forEach(function (element) {
                    element.totalContagem = element.qtPecaContagem * element.pesoPeca + parseFloat(element.qtPesoContagem);

                    _this2.getInfoInventarioRotativo(element.cdMaterial).subscribe(function (response) {
                      if (response.status == 204) {
                        element.somaInventarioRotativo = 0;
                      } else element.somaInventarioRotativo = parseFloat(response.body.saldoEstoque);

                      element.resultadoInventario = parseFloat(element.saldoEstoque) + element.somaInventarioRotativo;
                    });
                  });
                }
              }, function (error) {
                _this2.notice.notice('Não há materiais cadastrados para esse inventário.');

                _this2.noResult = true;
              });
            }
          }
        }, {
          key: "getListaMateriaisParaFiltro",
          value: function getListaMateriaisParaFiltro() {
            var _this3 = this;

            if (this.activatedRoute.snapshot.params['id'] > 0) {
              this.idInventario = this.activatedRoute.snapshot.params['id']; //Carrega a lista de materiais para o filtro

              this.listaInventarioService.getListaMateriaisParaFiltro(this.idInventario, this.matriculaAuditor).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(function () {
                return _this3.loaderNavbar = false;
              })).subscribe(function (response) {
                if (response['status'] === 200) _this3.listaMateriaisFiltro = response['body']['materiais'];
              });
            }
          }
        }, {
          key: "postSalvar",
          value: function postSalvar() {
            var _this4 = this;

            var materiais = [];
            var requisicao = {};
            this.loaderNavbar = true;
            this.listas.forEach(function (element) {
              if (element.qtPecaContagem != null || element.qtPesoContagem != null) {
                materiais.push({
                  idInventarioMaterial: element.idInventarioMaterial,
                  qtPeca: element.qtPecaContagem ? element.qtPecaContagem : null,
                  qtPeso: element.qtPesoContagem ? element.qtPesoContagem : null,
                  cdMaterial: element.cdMaterial ? element.cdMaterial : null
                });
              }
              /* else {
              this.getLista();
              } */

            });

            if (materiais.length > 0) {
              requisicao = {
                matriculaAuditor: this.matriculaAuditor,
                materiais: materiais
              };
              this.listaInventarioService.postSalvar(requisicao, this.idInventario).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(function () {
                return _this4.loaderNavbar = false;
              })).subscribe(function (response) {
                if (response['body']['erros'].length === 0) {
                  _this4.notice.success('Registros atualizados com sucesso!');
                } else {
                  _this4.notice.error('Alguns registros não puderam ser atualizados');
                }

                _this4.getLista();
              }, function (error) {
                _this4.notice.error('Erro ao salvar registros');
              });
            } else {
              this.notice.notice('Inventário não teve alterações para ser salvo');
              /* this.getLista(); */
            }
          }
        }, {
          key: "finalizar",
          value: function finalizar(template) {
            if (this.dateDiff(this.dateRef, new Date()) >= 7) this.modalRef = this.modalService.show(template);else {
              var finaliza = confirm('Tem certeza que deseja finalizar o inventário?');
              if (finaliza) this.atualizarInventario('', 2);
            }
          }
        }, {
          key: "cancelar",
          value: function cancelar(template, valor) {
            var cancela = confirm('Tem certeza que deseja cancelar o inventário?');
            if (valor == 1) if (cancela) this.modalRef = this.modalService.show(template);
          }
        }, {
          key: "dateDiff",
          value: function dateDiff(date1, date2) {
            var diffTime = Math.abs(date2.getTime() - date1.getTime());
            var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            return diffDays;
          }
        }, {
          key: "atualizarInventario",
          value: function atualizarInventario(justificativa, statusInventario) {
            var _this5 = this;

            this.loaderNavbar = true;
            var finalizacao = {};
            finalizacao = {
              idStatusInventario: statusInventario,
              matriculaAuditor: this.matriculaAuditor,
              idInventario: this.idInventario,
              observacao: justificativa
            };
            this.listaInventarioService.atualizarInventario(justificativa, statusInventario, this.idInventario, this.matriculaAuditor).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(function () {
              return _this5.loaderNavbar = false, _this5.getLista(), _this5.getInfoInventario();
            })).subscribe(function (response) {
              if (response['status'] === 200) _this5.notice.success(response['body']['message']);
            }, function (error) {
              _this5.notice.error(error.error.dsErro);
            });
          }
        }, {
          key: "getInfoInventarioRotativo",
          value: function getInfoInventarioRotativo(cdMaterial) {
            return this.listaInventarioService.getInfoInventarioRotativo(this.idInventario, cdMaterial);
          }
          /* TRATA HORA ATUAL */

        }, {
          key: "RetornaDataHoraAtual",
          value: function RetornaDataHoraAtual() {
            var dNow = new Date();
            var localdate = dNow.getDate() + '/' + (dNow.getMonth() + 1) + '/' + dNow.getFullYear() + ' ' + dNow.getHours() + ':' + dNow.getMinutes();
            return this.dataNow = localdate;
          }
          /* TRATA CAMPOS DE INPUT - DESABILITA EXIGINDO O CLICK NO BOTÃO EDITAR */

        }, {
          key: "getInfoInventario",
          value: function getInfoInventario() {
            var _this6 = this;

            this.listaInventarioService.getInfoInventario(this.idInventario).subscribe(function (response) {
              _this6.dateRef = new Date(response.dtInclusao);
              _this6.status = response.siglaStatusInventario;
              _this6.tipoInventario = response.dsTipoInventario;

              if (response.siglaStatusInventario == 'LOGI_INVE_STAT_ABER' || response.siglaStatusInventario == 'LOGI_INVE_STAT_FINA' || response.siglaStatusInventario == 'LOGI_INVE_STAT_CANC' || response.siglaStatusInventario == 'LOGI_INVE_STAT_CANC_SIST' || response.siglaStatusInventario == 'LOGI_INVE_STAT_APRO') {
                _this6.info = true;
              } else {
                _this6.info;
              }

              if (response.siglaStatusInventario == 'LOGI_INVE_STAT_CANC_SIST') {
                _this6.noResult = true;
              }

              _this6.controlaAcessoBotoes();
            });
          }
          /* HABILITA CAMPOS PARA EDITAR */

        }, {
          key: "habilitaCampos",
          value: function habilitaCampos() {
            if (this.listas !== null) {
              this.info = false;
              this.habilita = true;
            }
          }
        }, {
          key: "exportarExcel",
          value: function exportarExcel() {
            this.xlsxService.exportFile(this.listas, 'inventario');
          }
          /* Paginação */

        }, {
          key: "onPageChanged",
          value: function onPageChanged(event) {
            this.begin = (event.page - 1) * event.itemsPerPage;
            this.end = event.page * event.itemsPerPage;
          }
          /* Paginação */

          /* Pesquisa a lista de materiais para popular o filtro */

        }, {
          key: "onSearch",
          value: function onSearch() {
            this.loaderNavbar = true;
            if (this.form.get('cdMaterial').status == 'VALID') this.getLista(this.form.get('cdMaterial').value, 0);else this.getLista();
          }
          /* */

        }, {
          key: "getMateriaisNotasFiscaisRo",
          value: function getMateriaisNotasFiscaisRo(notaFiscal) {
            var _this7 = this;

            this.loading = true;
            this.materiaisNotaFiscalRo = [];
            this.listaInventarioService.getMateriaisNotasFiscaisRo(this.idInventario, notaFiscal).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(function () {
              return _this7.loading = false;
            })).subscribe(function (data) {
              if (data['status'] === 200) {
                _this7.materiaisNotaFiscalRo = data['body'];
                _this7.compressedTable = true;
                _this7.notaFiscalSelecionadaRo = notaFiscal;
              }
            });
          }
        }, {
          key: "openNotaFiscal",
          value: function openNotaFiscal(idInventario) {
            this.route.navigate(["../../".concat(idInventario, "/notas-fiscais")], {
              relativeTo: this.activatedRoute
            });
          }
        }, {
          key: "openOcorrencias",
          value: function openOcorrencias(idInventario) {
            this.route.navigate(["../../".concat(idInventario, "/ocorrencias")], {
              relativeTo: this.activatedRoute
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

        }, {
          key: "getNotasFiscaisRo",
          value: function getNotasFiscaisRo() {
            var _this8 = this;

            this.loading = true;
            this.listaInventarioService.getNotasFiscaisRo(this.idInventario, this.cdNotaFiscalRo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(function () {
              return _this8.loading = false;
            })).subscribe(function (data) {
              if (data['status'] === 200) {
                _this8.notasFiscaisRo = data['body']['notasFiscais'];
                _this8.tempNotasFiscaisRo = data['body']['notasFiscais'];
                _this8.qtNotasFiscaisRo = data['body']['qtRegistros'];
              } else _this8.notice.notice('Não houve retorno para sua consulta');
            }, function (error) {
              return _this8.notice.error(error.message);
            });
          }
        }, {
          key: "hideChildModal",
          value: function hideChildModal() {
            this.childModal.hide();
            this.postSalvar();
          }
        }, {
          key: "hideChildModalRo",
          value: function hideChildModalRo() {
            this.childModalRo.hide();
            this.postSalvar();
          }
        }, {
          key: "onClose",
          value: function onClose() {
            this.compressedTable = false;
            this.notaFiscalSelecionada = 0;
          }
        }, {
          key: "onCloseRo",
          value: function onCloseRo() {
            this.compressedTable = false;
            this.notaFiscalSelecionadaRo = 0;
          }
          /* Paginação */

        }, {
          key: "onPageChangedProduct",
          value: function onPageChangedProduct(event) {
            this.beginP = (event.page - 1) * event.itemsPerPage;
            this.endP = event.page * event.itemsPerPage;
          }
          /* Paginação */

        }, {
          key: "salvarNotasFiscaisRo",
          value: function salvarNotasFiscaisRo() {
            var _this9 = this;

            var checkAlterado = [];
            this.notasFiscaisRo.forEach(function (element) {
              if (element.checkAlterado) {
                checkAlterado.push(element);
              }
            });
            var particao = 50;
            var qtEnvios = Math.ceil(checkAlterado.length / particao);
            var req = [];
            this.loading = true;

            for (var index = 0; index < qtEnvios; index++) req.push(this.listaInventarioService.salvarNotasFiscaisRo(this.idInventario, checkAlterado.slice(particao * index, particao * (index + 1)), this.matriculaAuditor));

            Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["forkJoin"])(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(function () {
              return _this9.loading = false;
            })).subscribe(function (data) {
              var contador = 0;

              _this9.notice.success('Itens salvos com sucesso!');

              data.forEach(function (element) {
                if (element['status'] == 200) {
                  contador++;
                }
              });

              if (contador === data.length) {}
            }, function (error) {
              _this9.notice.error('Ocorreu um erro ao salvar os itens');
            });
          }
        }, {
          key: "getTotalContagem",
          value: function getTotalContagem(material) {
            return material.pesoPeca / 1000 * material.qtPecaContagem + material.qtPesoContagem;
          }
        }, {
          key: "getSaldoInventario",
          value: function getSaldoInventario(material) {
            var _a;

            if (!material.qtPecaContagem && !material.qtPesoContagem) {
              return undefined;
            }

            var pesoFisico = material.pesoPeca / 1000 * material.qtPecaContagem + material.qtPesoContagem;
            var estoque = material.qtPesoEstoque;
            var notasFiscais = (_a = parseFloat(material.qtMaterialNotaFiscal)) !== null && _a !== void 0 ? _a : 0;
            var saldo = pesoFisico - estoque + notasFiscais;
            return saldo;
          }
        }, {
          key: "getResultadoInventario",
          value: function getResultadoInventario(material) {
            if (!material.qtPecaContagem && !material.qtPesoContagem) {
              return undefined;
            }

            return material.pesoPeca / 1000 * material.qtPecaContagem + material.qtPesoContagem - material.qtPesoEstoque + material.somaInventarioRotativo;
          }
        }, {
          key: "getResultadoMonetario",
          value: function getResultadoMonetario(material) {
            if (!material.qtPecaContagem && !material.qtPesoContagem) {
              return undefined;
            }

            return (material.pesoPeca / 1000 * material.qtPecaContagem + material.qtPesoContagem - material.qtPesoEstoque + material.somaInventarioRotativo) * material.precoMinimo;
          }
        }, {
          key: "getPerfil",
          value: function getPerfil() {
            var _this10 = this;

            this.listaInventarioService.getPerfil(this.matriculaAuditor).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(function () {
              _this10.spinnerFullScreen = false;
              _this10.loaderNavbar = false;

              _this10.getLista();
            })).subscribe(function (response) {
              _this10.disabledBotoes = response['disabledBotoes'];
              _this10.perfilTipo = response['perfilTipo'];

              _this10.controlaAcessoBotoes();
            }, function (error) {
              _this10.notice.notice('Não há vinculo de perfil para realizar inventário nesse usuário.');

              _this10.noResult = true;
            });
          }
        }, {
          key: "getTotal",
          value: function getTotal() {
            var _this11 = this;

            this.spinnerFullScreen = true;
            this.listaInventarioService.getTotal(this.idInventario).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(function () {
              _this11.spinnerFullScreen = false;
            })).subscribe(function (response) {
              _this11.listaInfo = response.body['data']['0'];
            });
          }
        }, {
          key: "controlaAcessoBotoes",
          value: function controlaAcessoBotoes() {
            if (this.perfilTipo == 'assistente' && this.status == 'LOGI_INVE_STAT_ABER') {
              this.ativExport = true;
              this.ativEditar = true;
              this.ativNotaFiscal = true;
              this.ativSalvar = true;
            } else if (this.perfilTipo == 'lider') {
              this.ativFinaliza = true;
              this.ativCancelar = true;
              this.ativEditar = true;
              this.ativNotaFiscal = true;
              this.ativSalvar = true;
              if (this.status == 'LOGI_INVE_STAT_ABER') this.ativExport = true;
            } else if (this.perfilTipo == 'coordenador') {
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
        }, {
          key: "onSubscription",
          value: function onSubscription() {
            var _this12 = this;

            this.$showDetailPanelSubscription = this.detailPanelService.config.subscribe(function (event) {
              _this12.showDetailPanel = event.showing;
            });
          }
        }, {
          key: "onDetailPanel",
          value: function onDetailPanel(i) {
            var _a, _b, _c, _d;

            var index = this.currentPage * this.itemsPerPage - this.itemsPerPage + i;
            var material = this.listas[index];
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
            this.totalInventario.somaInventarioRotativo = material.somaInventarioRotativo;
            this.totalInventario.dsClasse = material.dsClasse;
            this.totalInventario.qtMaterialNotaFiscal = material.qtMaterialNotaFiscal;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.$showDetailPanelSubscription.unsubscribe();
          }
        }]);

        return LogisticaEstoquePainelInventarioInventarioListaComponent;
      }();

      LogisticaEstoquePainelInventarioInventarioListaComponent.ctorParameters = function () {
        return [{
          type: src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_4__["XlsxService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"]
        }, {
          type: _lista_service__WEBPACK_IMPORTED_MODULE_9__["LogisticaEstoquePainelInventarioInventarioListaService"]
        }, {
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_10__["DateService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_14__["AtividadesService"]
        }, {
          type: src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_8__["DetailPanelService"]
        }];
      };

      LogisticaEstoquePainelInventarioInventarioListaComponent.propDecorators = {
        childModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"],
          args: ['childModal', {
            "static": false
          }]
        }],
        childModalRo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"],
          args: ['childModalRo', {
            "static": false
          }]
        }]
      };
      LogisticaEstoquePainelInventarioInventarioListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'logistica-estoque-inventario-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_8__["DetailPanelService"]],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_4__["XlsxService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"], _lista_service__WEBPACK_IMPORTED_MODULE_9__["LogisticaEstoquePainelInventarioInventarioListaService"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_10__["DateService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_14__["AtividadesService"], src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_8__["DetailPanelService"]])], LogisticaEstoquePainelInventarioInventarioListaComponent);
      /***/
    },

    /***/
    "KRZP":
    /*!******************************************************************************************!*\
      !*** ./src/app/modules/logistica/estoque/painel-inventario/cadastro/cadastro.service.ts ***!
      \******************************************************************************************/

    /*! exports provided: LogisticaEstoquePainelInventarioCadastroService */

    /***/
    function KRZP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaEstoquePainelInventarioCadastroService", function () {
        return LogisticaEstoquePainelInventarioCadastroService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");

      var LogisticaEstoquePainelInventarioCadastroService = /*#__PURE__*/function () {
        function LogisticaEstoquePainelInventarioCadastroService(http) {
          _classCallCheck(this, LogisticaEstoquePainelInventarioCadastroService);

          this.http = http;
          this.BASE_URL = "https://crm360.monterrey.com.bo/api";
        }

        _createClass(LogisticaEstoquePainelInventarioCadastroService, [{
          key: "getEmpresas",
          value: function getEmpresas() {
            return this.http.get("".concat(this.BASE_URL, "/common/empresas"));
          }
        }, {
          key: "getDepositos",
          value: function getDepositos(idEmpresa) {
            return this.http.get("".concat(this.BASE_URL, "/common/depositos/").concat(idEmpresa));
          }
        }, {
          key: "getLinhas",
          value: function getLinhas() {
            return this.http.get("".concat(this.BASE_URL, "/common/linhas"));
          }
        }, {
          key: "getClasses",
          value: function getClasses(descricaoLinhas) {
            return this.http.get("".concat(this.BASE_URL, "/common/classes"), {
              params: {
                linhas: btoa(descricaoLinhas)
              }
            });
          }
        }, {
          key: "getMateriais",
          value: function getMateriais(descricaoLinhas, idClasses) {
            if (!idClasses) idClasses = '';
            return this.http.get("".concat(this.BASE_URL, "/common/materiais"), {
              params: {
                linhas: btoa(descricaoLinhas),
                classes: btoa(idClasses)
              }
            });
          }
        }, {
          key: "postCadastraInventario",
          value: function postCadastraInventario(params) {
            return this.http.post("".concat(this.BASE_URL, "/logistica/estoque/inventarios"), params, {
              observe: 'response'
            });
          }
        }, {
          key: "postMateriais",
          value: function postMateriais(matriculaAuditor, idInventario, cdMaterial) {
            return this.http.post("".concat(this.BASE_URL, "/logistica/estoque/inventarios/").concat(idInventario, "/materiais"), {
              matriculaAuditor: matriculaAuditor,
              idInventario: idInventario,
              cdMaterial: cdMaterial
            }, {
              observe: 'response'
            });
          }
        }, {
          key: "getPerfil",
          value: function getPerfil() {
            var matricula = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            return this.http.get("".concat(this.BASE_URL, "/logistica/estoque/inventario/usuarios/").concat(matricula, "/perfis/controle-acesso"));
          }
        }]);

        return LogisticaEstoquePainelInventarioCadastroService;
      }();

      LogisticaEstoquePainelInventarioCadastroService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      LogisticaEstoquePainelInventarioCadastroService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], LogisticaEstoquePainelInventarioCadastroService);
      /***/
    },

    /***/
    "LcXQ":
    /*!********************************************************************************************!*\
      !*** ./src/app/modules/logistica/estoque/painel-inventario/cadastro/cadastro.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: LogisticaEstoquePainelInventarioCadastroComponent */

    /***/
    function LcXQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaEstoquePainelInventarioCadastroComponent", function () {
        return LogisticaEstoquePainelInventarioCadastroComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./cadastro.component.html */
      "eoW+");
      /* harmony import */


      var _cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cadastro.component.scss */
      "7d5/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./../../../../../shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _cadastro_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./cadastro.service */
      "KRZP");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      "iInd");

      var LogisticaEstoquePainelInventarioCadastroComponent = /*#__PURE__*/function () {
        function LogisticaEstoquePainelInventarioCadastroComponent(formBuilder, localeService, cadastroService, notice, route, activatedRoute) {
          _classCallCheck(this, LogisticaEstoquePainelInventarioCadastroComponent);

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
          this.breadCrumbTree = [{
            descricao: 'Lista de inventários',
            routerLink: '/logistica/estoque/painel-inventario/lista'
          }, {
            descricao: this.appTitle
          }];
          /* TIPOS DE INVENTÁRIOS */

          this.tipoInventario = [{
            codigo: 1,
            descNome: 'Inventário oficial'
          }, {
            codigo: 2,
            descNome: 'Inventário rotativo'
          }];
          this.disabledBotoes = {
            finalizar: false,
            editar: false,
            aprovar: false
          };
          this.localeService.use('pt-br');
          this.bsConfig = Object.assign({}, {
            containerClass: 'theme-dark-blue'
          }, {
            adaptivePosition: true
          }, {
            showWeekNumbers: false
          });
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
            matriculaAuditor: [this.matriculaAuditor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });
        }

        _createClass(LogisticaEstoquePainelInventarioCadastroComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this13 = this;

            this.cadastroService.getEmpresas().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
              _this13.spinnerFullScreen = false;
            })).subscribe(function (response) {
              if (Object.keys(response).length > 0) {
                _this13.empresas = response;
              }
            });
            this.cadastroService.getLinhas().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
              return _this13.loading = false;
            })).subscribe(function (response) {
              if (Object.keys(response).length > 0) {
                _this13.linhas = response;
              }
            });
            this.getPerfil();
          }
        }, {
          key: "getDepositos",
          value: function getDepositos() {
            var _this14 = this;

            this.loaderNavbar = true;

            if (this.form.get('cdEmpresa').status === 'VALID') {
              var idEmpresa = this.form.get('cdEmpresa').value;
              this.cadastroService.getDepositos(idEmpresa).subscribe(function (response) {
                if (Object.keys(response).length > 0) {
                  _this14.depositos = response;
                }

                _this14.loaderNavbar = false;
              });
            }
          }
        }, {
          key: "getClasses",
          value: function getClasses() {
            var _this15 = this;

            this.classes = [];
            var descricaoLinhas = [];
            this.loaderNavbar = true;

            if (this.form.get('linhas').status === 'VALID') {
              descricaoLinhas.push(this.form.get('linhas').value);
              this.cadastroService.getClasses(descricaoLinhas).subscribe(function (response) {
                if (Object.keys(response).length > 0) {
                  _this15.classes = response;
                }

                _this15.loaderNavbar = false;
              });
            }
          }
        }, {
          key: "getMateriais",
          value: function getMateriais(linhas, classes) {
            var _this16 = this;

            this.materiais = [];
            this.loaderNavbar = true;

            if (this.form.get('linhas').status === 'VALID' || this.form.get('classes').status === 'VALID') {
              var descricaoLinhas = this.form.get('linhas').value;
              var idClasses = this.form.get('classes').value;
              this.cadastroService.getMateriais(descricaoLinhas, idClasses).subscribe(function (response) {
                if (Object.keys(response).length > 0) {
                  _this16.materiais = response.result;
                }

                _this16.loaderNavbar = false;
              });
            }
          }
        }, {
          key: "postCadastraInventario",
          value: function postCadastraInventario() {
            var _this17 = this;

            if (this.disabledBotoes.finalizar == false && this.disabledBotoes.editar == false && this.disabledBotoes.aprovar == false) {
              this.notice.notice('Seu usuário não pode iniciar um inventário.');
            } else {
              if (this.form.get('cdEmpresa').status === 'VALID' && this.form.get('cdDeposito').status === 'VALID') {
                this.spinnerFullScreen = true;
                this.cadastroService.postCadastraInventario(this.form.value).subscribe(function (response) {
                  if (response.status == 200) {
                    _this17.postMateriais(_this17.matriculaAuditor, response.body.data);
                  } else _this17.notice.error('Houve um errro ao cadastrar o inventário.');
                }, function (error) {
                  _this17.spinnerFullScreen = false;
                  if (error.status < 500) _this17.notice.notice(error.error.dsErro);else _this17.notice.error('Ocorreu um erro! postCadastraInventario');
                });
              }
            }
          }
        }, {
          key: "postMateriais",
          value: function postMateriais(matriculaAuditor, idInventario) {
            var _this18 = this;

            var cdMateriais = [];
            if (this.form.get('materiais').value == null) this.materiais.forEach(function (element) {
              cdMateriais.push(element.codigoMaterial);
            });else cdMateriais = this.form.get('materiais').value;
            var particao = 50;
            var qtEnvios = Math.ceil(cdMateriais.length / particao);
            var mat = [];

            for (var index = 0; index < qtEnvios; index++) mat.push(this.cadastroService.postMateriais(matriculaAuditor, idInventario, cdMateriais.slice(particao * index, particao * (index + 1))));

            Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["forkJoin"])(mat).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
              return _this18.spinnerFullScreen = false;
            })).subscribe(function (response) {
              var contador = 0;
              response.forEach(function (element) {
                if (element.status == 200) {
                  contador++;
                }
              });

              if (contador === response.length) {
                _this18.route.navigate(["../".concat(idInventario, "/contagem-materiais")], {
                  relativeTo: _this18.activatedRoute
                });
              } else {
                _this18.notice.error('Não há dados.');
              }
            }, function (error) {
              if (error.status < 500) _this18.notice.notice(error.error.dsErro);else _this18.notice.error('Ocorreu um erro!');
            });
          }
        }, {
          key: "getPerfil",
          value: function getPerfil() {
            var _this19 = this;

            this.cadastroService.getPerfil(this.matriculaAuditor).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
              _this19.spinnerFullScreen = false;
              _this19.loaderNavbar = false;
            })).subscribe(function (response) {
              _this19.disabledBotoes = response['disabledBotoes'];
            }, function (error) {
              _this19.notice.notice('Não há vinculo de perfil para realizar inventário nesse usuário.');
            });
          }
        }, {
          key: "onFieldError",
          value: function onFieldError(field) {
            if (this.onFieldInvalid(field)) {
              return 'is-invalid';
            }

            return '';
          }
        }, {
          key: "onFieldInvalid",
          value: function onFieldInvalid(field) {
            field = this.form.get(field);
            return field.status == 'INVALID' && field.touched;
          }
        }, {
          key: "onFieldRequired",
          value: function onFieldRequired(field) {
            var required = false;
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();

            if (this.form.controls[field].validator) {
              var validationResult = this.form.controls[field].validator(formControl);
              required = validationResult !== null && validationResult.required === true;
            }

            if (required) {
              return 'is-required';
            }
          }
        }, {
          key: "resetForm",
          value: function resetForm(formReset) {
            this.form.get('classes').reset();
            this.form.get('materiais').reset();
            if (formReset == 'classes') return;
            this.form.get('linhas').reset();
            if (formReset == 'linhas') return;
            this.form.get('cdDeposito').reset();
          }
        }]);

        return LogisticaEstoquePainelInventarioCadastroComponent;
      }();

      LogisticaEstoquePainelInventarioCadastroComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsLocaleService"]
        }, {
          type: _cadastro_service__WEBPACK_IMPORTED_MODULE_8__["LogisticaEstoquePainelInventarioCadastroService"]
        }, {
          type: _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"]
        }];
      };

      LogisticaEstoquePainelInventarioCadastroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'cadastro',
        template: _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsLocaleService"], _cadastro_service__WEBPACK_IMPORTED_MODULE_8__["LogisticaEstoquePainelInventarioCadastroService"], _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"]])], LogisticaEstoquePainelInventarioCadastroComponent);
      /***/
    },

    /***/
    "M/gQ":
    /*!*************************************************************************************************!*\
      !*** ./src/app/modules/logistica/estoque/painel-inventario/painel-inventario-routing.module.ts ***!
      \*************************************************************************************************/

    /*! exports provided: LogisticaEstoquePainelInventarioRoutingModule */

    /***/
    function MGQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaEstoquePainelInventarioRoutingModule", function () {
        return LogisticaEstoquePainelInventarioRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/not-found/not-found.component */
      "6nXq");
      /* harmony import */


      var _inventario_inventario_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./inventario/inventario.component */
      "bc5J");
      /* harmony import */


      var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./cadastro/cadastro.component */
      "LcXQ");
      /* harmony import */


      var _inventario_lista_lista_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./inventario/lista/lista.component */
      "Jbbf");
      /* harmony import */


      var _inventario_materiais_notas_fiscais_materiais_notas_fiscais_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./inventario/materiais-notas-fiscais/materiais-notas-fiscais.component */
      "Z9EM");
      /* harmony import */


      var _inventario_materiais_ocorrencias_materiais_ocorrencias_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./inventario/materiais-ocorrencias/materiais-ocorrencias.component */
      "lJJZ");
      /* harmony import */


      var _inventario_relatorio_relatorio_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./inventario/relatorio/relatorio.component */
      "nAji");

      var routes = [{
        path: '',
        redirectTo: 'lista',
        pathMatch: 'full'
      }, {
        path: 'lista',
        component: _inventario_inventario_component__WEBPACK_IMPORTED_MODULE_4__["LogisticaEstoquePainelInventarioInventarioComponent"]
      }, {
        path: ':id/contagem-materiais',
        component: _inventario_lista_lista_component__WEBPACK_IMPORTED_MODULE_6__["LogisticaEstoquePainelInventarioInventarioListaComponent"]
      }, {
        path: ':id/notas-fiscais',
        component: _inventario_materiais_notas_fiscais_materiais_notas_fiscais_component__WEBPACK_IMPORTED_MODULE_7__["LogisticaEstoquePainelInventarioInventarioMateriaisNotasFiscaisComponent"]
      }, {
        path: ':id/ocorrencias',
        component: _inventario_materiais_ocorrencias_materiais_ocorrencias_component__WEBPACK_IMPORTED_MODULE_8__["LogisticaEstoquePainelInventarioInventarioMateriaisOcorrenciasComponent"]
      }, {
        path: ':id/relatorio',
        component: _inventario_relatorio_relatorio_component__WEBPACK_IMPORTED_MODULE_9__["LogisticaEstoquePainelInventarioInventarioRelatorioComponent"]
      }, {
        path: 'cadastro',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_5__["LogisticaEstoquePainelInventarioCadastroComponent"]
      }, {
        path: '**',
        component: src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"]
      }];

      var LogisticaEstoquePainelInventarioRoutingModule = /*#__PURE__*/_createClass(function LogisticaEstoquePainelInventarioRoutingModule() {
        _classCallCheck(this, LogisticaEstoquePainelInventarioRoutingModule);
      });

      LogisticaEstoquePainelInventarioRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LogisticaEstoquePainelInventarioRoutingModule);
      /***/
    },

    /***/
    "MCWC":
    /*!********************************************************************************************!*\
      !*** ./src/app/modules/logistica/estoque/painel-inventario/painel-inventario.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: LogisticaEstoquePainelInventarioComponent */

    /***/
    function MCWC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaEstoquePainelInventarioComponent", function () {
        return LogisticaEstoquePainelInventarioComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_painel_inventario_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./painel-inventario.component.html */
      "3pwz");
      /* harmony import */


      var _painel_inventario_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./painel-inventario.component.scss */
      "298m");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");

      var LogisticaEstoquePainelInventarioComponent = /*#__PURE__*/function () {
        function LogisticaEstoquePainelInventarioComponent(route, atividadesService) {
          _classCallCheck(this, LogisticaEstoquePainelInventarioComponent);

          this.route = route;
          this.atividadesService = atividadesService;
        }

        _createClass(LogisticaEstoquePainelInventarioComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.route.navigate(['/logistica/estoque/painel-inventario/inventario']);
            this.atividadesService.registrarAcesso().subscribe();
          }
        }]);

        return LogisticaEstoquePainelInventarioComponent;
      }();

      LogisticaEstoquePainelInventarioComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_5__["AtividadesService"]
        }];
      };

      LogisticaEstoquePainelInventarioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'painel-inventario',
        template: _raw_loader_painel_inventario_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_painel_inventario_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_5__["AtividadesService"]])], LogisticaEstoquePainelInventarioComponent);
      /***/
    },

    /***/
    "QOps":
    /*!**************************************************************************************************!*\
      !*** ./src/app/modules/logistica/estoque/painel-inventario/inventario/inventario.component.scss ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function QOps(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".custom-bottom-inve {\n  padding: 1.05rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvZXN0b3F1ZS9wYWluZWwtaW52ZW50YXJpby9pbnZlbnRhcmlvL2ludmVudGFyaW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvZXN0b3F1ZS9wYWluZWwtaW52ZW50YXJpby9pbnZlbnRhcmlvL2ludmVudGFyaW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tLWJvdHRvbS1pbnZlIHtcclxuICBwYWRkaW5nOiAxLjA1cmVtO1xyXG59Il19 */";
      /***/
    },

    /***/
    "Qlyr":
    /*!****************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/estoque/painel-inventario/inventario/inventario.component.html ***!
      \****************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Qlyr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen [hidden]=\"!spinnerFullScreen\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar [hidden]=\"!loaderNavbar\"></loader-spinner-navbar>\r\n<app-header [appTitle]=\"appTitle\">\r\n  <button\r\n    (click)=\"onSearch()\">\r\n    Pesquisar\r\n  </button>\r\n  <button\r\n    (click)=\"onCadastrar()\">\r\n    Cadastro\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <!-- Início dos Filtros -->\r\n  <advanced-filter #scrollToFilter>\r\n    <form autocomplete=\"off\" [formGroup]=\"form\">\r\n      <div class=\"form-row justify-content-center\">\r\n        <div class=\"form-group col-md-2\">\r\n          <label for=\"tipo\">Tipo de Inventário</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"false\"\r\n            [items]=\"tipoInventario\"\r\n            [virtualScroll]=\"true\"\r\n            labelForId=\"tipo\"\r\n            bindLabel=\"descNome\"\r\n            bindValue=\"value\"\r\n            placeholder=\"Selecione um Tipo\"\r\n            formControlName=\"tipoInventario\"\r\n          >\r\n          </ng-select>\r\n          <invalid-form-control\r\n            [show]=\"onFieldInvalid('tipoInventario')\"\r\n            message=\"Empresa é obrigatório.\">\r\n          </invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group col-md-3\">\r\n          <label for=\"empresa\">Empresa</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"false\"\r\n            [items]=\"empresas\"\r\n            [virtualScroll]=\"true\"\r\n            labelForId=\"empresa\"\r\n            bindLabel=\"nomeFantasia\"\r\n            bindValue=\"codigoEmpresa\"\r\n            placeholder=\"Selecione uma empresa\"\r\n            formControlName=\"empresa\"\r\n            (change) =\"getDepositos()\"\r\n          >\r\n          </ng-select>\r\n          <invalid-form-control\r\n            [show]=\"onFieldInvalid('empresa')\"\r\n            message=\"Empresa é obrigatório.\">\r\n          </invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group col-md-2\">\r\n          <label for=\"depositos\">Depósito</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"false\"\r\n            [items]=\"depositos\"\r\n            [virtualScroll]=\"true\"\r\n            labelForId=\"deposito\"\r\n            bindLabel=\"depositoDescricao\"\r\n            bindValue=\"depositoId\"\r\n            placeholder=\"Selecione um deposito\"\r\n            formControlName=\"depositos\"\r\n          >\r\n          </ng-select>\r\n          <invalid-form-control\r\n            [show]=\"onFieldInvalid('depositos')\"\r\n            message=\"Despósito é obrigatório.\">\r\n          </invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group col-md-2\">\r\n          <label for=\"linhas\">Linha</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"false\"\r\n            [items]=\"linhas\"\r\n            [virtualScroll]=\"true\"\r\n            labelForId=\"linha\"\r\n            bindLabel=\"linha\"\r\n            bindValue=\"linha\"\r\n            placeholder=\"Selecione uma linha\"\r\n            formControlName=\"linhas\"\r\n            (change) = \"getClasses(); getMateriais(linhas, '')\"\r\n          >\r\n          </ng-select>\r\n          <invalid-form-control\r\n            [show]=\"onFieldInvalid('linhas')\"\r\n            message=\"Linha é obrigatório.\">\r\n          </invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group col-md-3\">\r\n            <label for=\"classes\">Classe</label>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"false\"\r\n              [items]=\"classes\"\r\n              [multiple]=\"true\"\r\n              [closeOnSelect]=\"false\"\r\n              [virtualScroll]=\"true\"\r\n              labelForId=\"classes\"\r\n              bindLabel=\"classeDescricao\"\r\n              bindValue=\"classeId\"\r\n              placeholder=\"Selecione uma classe\"\r\n              formControlName=\"classes\"\r\n              (change) = \"getMateriais(linhas, classes)\"\r\n              [ngClass]=\"onFieldError('classes')\"\r\n            >\r\n            </ng-select>\r\n            <invalid-form-control\r\n              [show]=\"onFieldInvalid('classes')\"\r\n              message=\"Classe é obrigatório.\">\r\n            </invalid-form-control>\r\n          </div>\r\n      </div>\r\n      <div class=\"form-row justify-content-center\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"materiais\">Material</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"false\"\r\n            [items]=\"materiais\"\r\n            [multiple]=\"true\"\r\n            [closeOnSelect]=\"false\"\r\n            [virtualScroll]=\"true\"\r\n            labelForId=\"materiais\"\r\n            bindLabel=\"codigoDescricaoMaterial\"\r\n            bindValue=\"codigoMaterial\"\r\n            placeholder=\"Selecione um material\"\r\n            formControlName=\"materiais\"\r\n          >\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-md-2\">\r\n          <label for=\"dataInicial\"> Data inicial </label>\r\n          <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\">\r\n                <i class=\"far fa-calendar-alt\"></i>\r\n              </span>\r\n            </div>\r\n            <input\r\n            class=\"form-control\"\r\n            id=\"dataInicial\"\r\n            type=\"text\"\r\n            bsDatepicker\r\n            [bsConfig]=\"bsConfig\"\r\n            formControlName=\"dataInicial\"\r\n            >\r\n          </div>\r\n          <invalid-form-control\r\n            [show]=\"onFieldInvalid('dataInicial')\"\r\n            message=\"Data inicial é obrigatório.\">\r\n          </invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group col-md-2\">\r\n          <label for=\"dataFinal\"> Data final </label>\r\n          <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\">\r\n                <i class=\"far fa-calendar-alt\"></i>\r\n              </span>\r\n            </div>\r\n            <input\r\n            class=\"form-control\"\r\n            id=\"dataFinal\"\r\n            type=\"text\"\r\n            bsDatepicker\r\n            [bsConfig]=\"bsConfig\"\r\n            formControlName=\"dataFinal\"\r\n            >\r\n          </div>\r\n          <invalid-form-control\r\n            [show]=\"onFieldInvalid('dataFinal')\"\r\n            message=\"Data inicial é obrigatório.\">\r\n          </invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group col-md-2 justify-content-end\">\r\n          <label for=\"cdInventario\"> Código do inventário </label>\r\n          <input \r\n            id=\"cdInventario\"\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            placeholder=\"DIGITE...\"\r\n            formControlName=\"cdInventario\"\r\n            (keyup.enter)=\"onSearch()\"\r\n          >\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </advanced-filter>\r\n  <!-- Início das Legendas -->\r\n  <subtitles\r\n    [data]=\"subtitles\"\r\n    [show]=\"inve.length > 0\"\r\n    [allowActivation]=\"true\"\r\n    (activationChange)=\"onClickSubtitle($event?.id)\">\r\n  </subtitles>\r\n  <!-- Início da Tabela -->\r\n  <div class=\"row\">\r\n    <div [ngClass]=\"{'col': !showDetailPanel, 'col-9 pr-0': showDetailPanel}\">\r\n      <custom-table [config]=\"tableConfig\" [hidden]=\"noResult\">\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n            <th>Data</th>\r\n            <th>Código</th>\r\n            <th>Depósito</th>\r\n            <th [hidden]=\"compressedTable\">Linha</th>\r\n            <th>Tipo</th>\r\n            <th style=\"width:250px\" nowrap>Auditor</th>\r\n            <th class=\"align-middle\" style=\"width:70px\"></th>\r\n            <th class=\"align-middle\" style=\"width:70px\"></th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let inventario of inventarios let i = index\" class=\"hover\" \r\n                      [ngClass]=\"inventario.status ? 'bgRowTable' : ''\" (click)=\"getClassesInventario(inventario.idInventario, i)\"\r\n                >\r\n                  <td [ngClass]=\"{\r\n                    'border-primary'    : inventario.siglaStatusInventario == 'LOGI_INVE_STAT_APRO',\r\n                    'border-secondary'  : inventario.siglaStatusInventario == 'LOGI_INVE_STAT_CANC_SIST',\r\n                    'border-danger'     : inventario.siglaStatusInventario == 'LOGI_INVE_STAT_CANC',\r\n                    'border-success'    : inventario.siglaStatusInventario == 'LOGI_INVE_STAT_FINA',\r\n                    'border-warning'    : inventario.siglaStatusInventario == 'LOGI_INVE_STAT_ABER'\r\n                  }\"\r\n                  > {{ inventario.dtInclusao  | date : 'dd/MM/yyyy HH:mm:ss'}} </td>\r\n                  <td> {{ inventario.idInventario   | number:'6.0-0'}} </td>\r\n                  <td> {{ inventario.dsDeposito | uppercase }} </td>\r\n                  <td [hidden]=\"compressedTable\"> {{ inventario.dsLinha | uppercase }} </td>\r\n                  <td> {{ inventario.dsTipoInventario | uppercase }} </td>\r\n                  <td style=\"width:250px\" nowrap> {{ inventario.dsUsuario | uppercase }} </td> \r\n                  <td class=\"align-middle\" style=\"width:70px\">\r\n                    <span tooltip=\"Visualizar\" placement=\"left\" container=\"body\">\r\n                      <button class=\"btn-icon-sm\" (click)=\"abrirInventario(inventario.idInventario)\">\r\n                        <i class=\"fas fa-search\"></i>\r\n                      </button>\r\n                    </span>\r\n                  </td>\r\n                  <td class=\"align-middle\" style=\"width:70px\">\r\n                    <span tooltip=\"Imprimir\" placement=\"left\" container=\"body\">\r\n                      <button class=\"btn-icon-sm\" (click)=\"abrirRelatorio(inventario.idInventario)\">\r\n                        <i class=\"fas fa-file-alt\"></i>\r\n                      </button>\r\n                    </span>\r\n                  </td>\r\n                </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n      <div class=\"mt-3\" [hidden]=\"noResult\">\r\n        Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\r\n        <pagination\r\n          [maxSize]=\"10\"\r\n          [totalItems]=\"totalItems\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          (pageChanged)=\"onPageChanged($event)\"\r\n          [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPage\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\">\r\n        </pagination>\r\n      </div>\r\n      <empty-result\r\n        message=\"Nenhuma informação encontrada\"\r\n        class=\"my-3\"\r\n        *ngIf=\"dadosEmpty\">\r\n      </empty-result>\r\n    </div>\r\n    <div class=\"col-3\" [hidden]=\"!showDetailPanel\">\r\n      <detail-panel [panelTitle]=\"appTitle\">\r\n          <custom-table>\r\n            <ng-template #thead let-thead>\r\n              <tr>\r\n                <th>Classe</th>\r\n              </tr>\r\n            </ng-template>\r\n            <ng-template #tbody let-tbody>\r\n              <tr *ngFor=\"let infoClasse of infoClasses\">\r\n                <td> {{ infoClasse.dsClasse | uppercase }} </td>\r\n              </tr>\r\n            </ng-template>\r\n          </custom-table>\r\n          <custom-table>\r\n            <ng-template #thead let-thead>\r\n              <tr [hidden]=\"infoLinha == null\">\r\n                <th>Linha</th>\r\n              </tr>\r\n            </ng-template>\r\n            <ng-template #tbody let-tbody>\r\n              <tr [hidden]=\"infoLinha == null\">\r\n                <td> {{ infoLinha | uppercase }} </td>\r\n              </tr>\r\n            </ng-template>\r\n          </custom-table>\r\n      </detail-panel>\r\n    </div>\r\n  </div>\r\n</app-body>";
      /***/
    },

    /***/
    "Z9EM":
    /*!*************************************************************************************************************************************!*\
      !*** ./src/app/modules/logistica/estoque/painel-inventario/inventario/materiais-notas-fiscais/materiais-notas-fiscais.component.ts ***!
      \*************************************************************************************************************************************/

    /*! exports provided: LogisticaEstoquePainelInventarioInventarioMateriaisNotasFiscaisComponent */

    /***/
    function Z9EM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaEstoquePainelInventarioInventarioMateriaisNotasFiscaisComponent", function () {
        return LogisticaEstoquePainelInventarioInventarioMateriaisNotasFiscaisComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_materiais_notas_fiscais_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./materiais-notas-fiscais.component.html */
      "3r0W");
      /* harmony import */


      var _materiais_notas_fiscais_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./materiais-notas-fiscais.component.scss */
      "i75G");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _materiais_notas_fiscais_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./materiais-notas-fiscais.service */
      "vuU3");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/templates/detail-panel/detal-panel.service */
      "gIxL");

      var LogisticaEstoquePainelInventarioInventarioMateriaisNotasFiscaisComponent = /*#__PURE__*/function () {
        function LogisticaEstoquePainelInventarioInventarioMateriaisNotasFiscaisComponent(activatedRoute, notice, route, formBuilder, detailPanelService, notaFiscalService) {
          _classCallCheck(this, LogisticaEstoquePainelInventarioInventarioMateriaisNotasFiscaisComponent);

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
            subtitleBorder: true
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
          this.breadCrumbTree = [{
            descricao: 'Contagem de materiais',
            routerLink: "../../".concat(this.idInventario, "/contagem-materiais")
          }, {
            descricao: this.appTitleBreadcrumb
          }];
          this.tableNotasFiscaisMateriaisConfig = {
            subtitleBorder: true
          };
          this.form = this.formBuilder.group({
            cdNotaFiscal: [null]
          });
        }

        _createClass(LogisticaEstoquePainelInventarioInventarioMateriaisNotasFiscaisComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.openModalNotaFiscal();
            this.onSubscription();
          }
        }, {
          key: "openModalNotaFiscal",
          value: function openModalNotaFiscal() {
            this.getListaExistente();
          }
        }, {
          key: "getListaExistente",
          value: function getListaExistente() {
            if (this.getListaCarregadaMaisNotaFiscal()) {
              var val = this.cdNotaFiscal;

              if (!val) {
                this.notasFiscais = this.tempNotasFiscais;
              }

              var temp = this.tempNotasFiscais.filter(function (row) {
                return Object.keys(row).some(function (property) {
                  return row[property] === null ? null : row[property].toString().indexOf(val) !== -1;
                });
              });
              this.notasFiscais = temp;
              this.loading = false;
            } else {
              this.getInventario();
            }
          }
        }, {
          key: "getListaCarregadaMaisNotaFiscal",
          value: function getListaCarregadaMaisNotaFiscal() {
            var _this20 = this;

            var containsNotaFiscal = false;
            var isNotUndefined = typeof this.tempNotasFiscais !== 'undefined';

            if (isNotUndefined) {
              containsNotaFiscal = this.tempNotasFiscais.find(function (element) {
                return element.notaFiscal === _this20.cdNotaFiscal;
              });
            }

            return isNotUndefined && containsNotaFiscal;
          }
        }, {
          key: "getNotasFiscais",
          value: function getNotasFiscais() {
            var _this21 = this;

            this.loaderNavbar = true;

            if (this.activatedRoute.snapshot.params['id'] > 0) {
              this.notaFiscalService.getNotasFiscais(this.idInventario, this.cdNotaFiscal, this.cdEmp).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
                return _this21.loaderNavbar = false;
              })).subscribe(function (data) {
                if (data['status'] === 200) {
                  _this21.notasFiscais = data['body']['data']['notasFiscais'];
                  _this21.tempNotasFiscais = data['body']['data']['notasFiscais'];
                  _this21.qtNotasFiscais = data['body']['data']['qtRegistros'];
                  _this21.spinnerFullScreen = false;
                } else _this21.notice.notice('Não houve retorno para sua consulta');
              }, function (error) {
                return _this21.notice.error(error.message);
              });
            }
          }
        }, {
          key: "getMateriaisNotasFiscais",
          value: function getMateriaisNotasFiscais(notaFiscal) {
            var _this22 = this;

            this.detailPanelService.show();
            this.loading = true;
            this.materiaisNotaFiscal = [];
            this.notaFiscalService.getMateriaisNotasFiscais(this.idInventario, notaFiscal).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              return _this22.loading = false;
            })).subscribe(function (data) {
              if (data['status'] === 200) {
                _this22.materiaisNotaFiscal = data['body']['data'];
                _this22.notaFiscalSelecionada = notaFiscal;

                _this22.detailPanelService.loadedFinished(false);
              } else _this22.detailPanelService.loadedFinished(true);
            });
          }
        }, {
          key: "salvarNotasFiscais",
          value: function salvarNotasFiscais() {
            var _this23 = this;

            var checkAlterado = [];
            this.notasFiscais.forEach(function (element) {
              if (element.checkAlterado) {
                checkAlterado.push(element);
              }
            });
            var particao = 50;
            var qtEnvios = Math.ceil(checkAlterado.length / particao);
            var req = [];
            this.loaderNavbar = true;

            for (var index = 0; index < qtEnvios; index++) req.push(this.notaFiscalService.salvarNotasFiscais(this.idInventario, checkAlterado.slice(particao * index, particao * (index + 1)), this.matriculaAuditor));

            Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["forkJoin"])(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              return _this23.loaderNavbar = false;
            })).subscribe(function (data) {
              var contador = 0;
              data[0]['body'].forEach(function (element) {
                if (element['responseCode'] == 200) {
                  _this23.notice.success('Itens salvos com sucesso!');

                  contador++;
                } else {
                  _this23.notice.error(element['response']);
                }
              });

              if (contador === data.length) {}
            }, function (error) {
              _this23.notice.error('Ocorreu um erro ao salvar os itens');
            });
          }
        }, {
          key: "verificaCheck",
          value: function verificaCheck(notaFiscal) {
            notaFiscal.checkAlterado = !notaFiscal.checkAlterado;
            this.salvarNotasFiscais();
            this.getInventario();
          }
          /* Paginação */

        }, {
          key: "onPageChanged",
          value: function onPageChanged(event) {
            this.begin = (event.page - 1) * event.itemsPerPage;
            this.end = event.page * event.itemsPerPage;
          }
          /* Paginação */

        }, {
          key: "onSubscription",
          value: function onSubscription() {
            var _this24 = this;

            this.$showDetailPanelSubscription = this.detailPanelService.config.subscribe(function (event) {
              _this24.showDetailPanel = event.showing;
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.$showDetailPanelSubscription.unsubscribe();
          }
        }, {
          key: "fecharSalvar",
          value: function fecharSalvar(idInventario) {
            this.route.navigate(["../../".concat(idInventario, "/contagem-materiais")], {
              relativeTo: this.activatedRoute
            });
          }
        }, {
          key: "getInventario",
          value: function getInventario() {
            var _this25 = this;

            this.notaFiscalService.getInventario(this.idInventario).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              return _this25.getNotasFiscais();
            })).subscribe(function (response) {
              if (response['status'] === 200) {
                _this25.cdEmp = response.body['data']['inventarios']['0']['cdEmpresa'];
              }
            });
          }
        }]);

        return LogisticaEstoquePainelInventarioInventarioMateriaisNotasFiscaisComponent;
      }();

      LogisticaEstoquePainelInventarioInventarioMateriaisNotasFiscaisComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }, {
          type: src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_10__["DetailPanelService"]
        }, {
          type: _materiais_notas_fiscais_service__WEBPACK_IMPORTED_MODULE_5__["LogisticaEstoquePainelInventarioInventarioMateriaisNotasFiscaisService"]
        }];
      };

      LogisticaEstoquePainelInventarioInventarioMateriaisNotasFiscaisComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'materiais-notas-fiscais',
        template: _raw_loader_materiais_notas_fiscais_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_materiais_notas_fiscais_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_10__["DetailPanelService"], _materiais_notas_fiscais_service__WEBPACK_IMPORTED_MODULE_5__["LogisticaEstoquePainelInventarioInventarioMateriaisNotasFiscaisService"]])], LogisticaEstoquePainelInventarioInventarioMateriaisNotasFiscaisComponent);
      /***/
    },

    /***/
    "b35P":
    /*!***************************************************************************************!*\
      !*** ./src/app/modules/logistica/estoque/painel-inventario/models/totalInventario.ts ***!
      \***************************************************************************************/

    /*! exports provided: LogisticaEstoquePainelInventarioTotalInventario */

    /***/
    function b35P(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaEstoquePainelInventarioTotalInventario", function () {
        return LogisticaEstoquePainelInventarioTotalInventario;
      });

      var LogisticaEstoquePainelInventarioTotalInventario = /*#__PURE__*/_createClass(function LogisticaEstoquePainelInventarioTotalInventario() {
        _classCallCheck(this, LogisticaEstoquePainelInventarioTotalInventario);
      });
      /***/

    },

    /***/
    "bY0X":
    /*!***********************************************************************************************************!*\
      !*** ./src/app/modules/logistica/estoque/painel-inventario/inventario/relatorio/relatorio.component.scss ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function bY0X(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ul li {\n  list-style-type: none;\n}\n\n.bgdValueList {\n  background-color: #e9ecef;\n}\n\n.textUpper {\n  font-size: -webkit-xxx-large;\n}\n\n.espacamento50 {\n  height: 50px;\n}\n\n.espacamento20 {\n  height: 20px;\n}\n\n.espacamento25 {\n  height: 25px;\n}\n\n.espacamento150 {\n  height: 150px;\n}\n\n.espacamento250 {\n  height: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvZXN0b3F1ZS9wYWluZWwtaW52ZW50YXJpby9pbnZlbnRhcmlvL3JlbGF0b3Jpby9yZWxhdG9yaW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7QUFDRjs7QUFFQTtFQUNFLDRCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2xvZ2lzdGljYS9lc3RvcXVlL3BhaW5lbC1pbnZlbnRhcmlvL2ludmVudGFyaW8vcmVsYXRvcmlvL3JlbGF0b3Jpby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInVsIGxpIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuXHJcbi5iZ2RWYWx1ZUxpc3Qge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XHJcbn1cclxuXHJcbi50ZXh0VXBwZXIge1xyXG4gIGZvbnQtc2l6ZTogLXdlYmtpdC14eHgtbGFyZ2U7XHJcbn1cclxuXHJcbi5lc3BhY2FtZW50bzUwIHtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi5lc3BhY2FtZW50bzIwIHtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5lc3BhY2FtZW50bzI1IHtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbi5lc3BhY2FtZW50bzE1MCB7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxufVxyXG5cclxuLmVzcGFjYW1lbnRvMjUwIHtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "bc5J":
    /*!************************************************************************************************!*\
      !*** ./src/app/modules/logistica/estoque/painel-inventario/inventario/inventario.component.ts ***!
      \************************************************************************************************/

    /*! exports provided: LogisticaEstoquePainelInventarioInventarioComponent */

    /***/
    function bc5J(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaEstoquePainelInventarioInventarioComponent", function () {
        return LogisticaEstoquePainelInventarioInventarioComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_inventario_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./inventario.component.html */
      "Qlyr");
      /* harmony import */


      var _inventario_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./inventario.component.scss */
      "QOps");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "ienR");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var _inventario_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./inventario.service */
      "u/Fv");
      /* harmony import */


      var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/shared/templates/detail-panel/detal-panel.service */
      "gIxL");

      var LogisticaEstoquePainelInventarioInventarioComponent = /*#__PURE__*/function () {
        function LogisticaEstoquePainelInventarioInventarioComponent(inventarioService, activatedRoute, notice, route, atividadesService, localeService, formBuilder, dateService, routerService, detailPanelService) {
          _classCallCheck(this, LogisticaEstoquePainelInventarioInventarioComponent);

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
          this.breadCrumbTree = [{
            descricao: this.appTitle
          }];
          /* Paginação */

          this.itemsPerPage = 10;
          this.currentPage = 1;
          /* Paginação */

          /* Legendas */

          this.subtitles = [{
            id: 'LOGI_INVE_STAT_ABER',
            text: 'Em aberto',
            color: 'yellow'
          }, {
            id: 'LOGI_INVE_STAT_CANC',
            text: 'Cancelado',
            color: 'red'
          }, {
            id: 'LOGI_INVE_STAT_CANC_SIST',
            text: 'Cancelado pelo sistema',
            color: 'gray'
          }, {
            id: 'LOGI_INVE_STAT_FINA',
            text: 'Finalizado',
            color: 'green'
          }, {
            id: 'LOGI_INVE_STAT_APRO',
            text: 'Aprovado',
            color: 'blue'
          }];
          /* Legendas */

          /* TIPOS DE INVENTÁRIOS */

          this.tipoInventario = [{
            value: 1,
            descNome: 'Inventário oficial'
          }, {
            value: 2,
            descNome: 'Inventário rotativo'
          }];
          /* Config Table */

          this.tableConfig = {
            subtitleBorder: true
          };
          this.showDetailPanel = false;
          this.localeService.use('pt-br');
          this.bsConfig = Object.assign({}, {
            containerClass: 'theme-dark-blue'
          }, {
            adaptivePosition: true
          }, {
            showWeekNumbers: false
          });
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
            pagina: 1
          });
        }

        _createClass(LogisticaEstoquePainelInventarioInventarioComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this26 = this;

            this.atividadesService.registrarAcesso().subscribe();
            /* CODIFICAÇÃO E DECODIFICAÇÃO DA ROTA */

            this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (response) {
              if (Object.keys(response).length !== 0) {
                var _response = _this26.routerService.getBase64UrlParams(response);

                _this26.form.patchValue(_response);
              }

              _this26.getInventario(_this26.getParams());
            });
            /* INICIO FILTROS INICIAIS */

            this.inventarioService.getEmpresas().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
              _this26.spinnerFullScreen = false;
            })).subscribe(function (response) {
              if (Object.keys(response).length > 0) {
                _this26.empresas = response;
              }
            });
            this.inventarioService.getLinhas().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
              return _this26.loading = false;
            })).subscribe(function (response) {
              if (Object.keys(response).length > 0) {
                _this26.linhas = response;
              }
            });
            this.onDetailPanel();
          }
        }, {
          key: "onDetailPanel",
          value: function onDetailPanel() {
            var _this27 = this;

            this.$showDetailPanelSubscription = this.detailPanelService.config.subscribe(function (event) {
              _this27.showDetailPanel = event.showing;
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.$activatedRouteSubscription.unsubscribe();
            this.$showDetailPanelSubscription.unsubscribe();
          }
        }, {
          key: "getParams",
          value: function getParams() {
            var _params = {};
            var obj = this.form.value;

            for (var prop in obj) {
              if (obj[prop]) {
                if (prop == 'dataInicial' || prop == 'dataFinal') {
                  _params[prop] = obj[prop] instanceof Date ? this.dateService.convertToUrlDate(obj[prop]) : obj[prop].substring(0, 10);
                } else {
                  _params[prop] = obj[prop];
                }
              }
            }

            return _params;
          }
        }, {
          key: "onSearch",
          value: function onSearch() {
            this.route.navigate([], {
              relativeTo: this.activatedRoute,
              queryParams: this.routerService.setBase64UrlParams(this.getParams())
            });
          }
        }, {
          key: "getDepositos",
          value: function getDepositos() {
            var _this28 = this;

            this.loaderNavbar = true;

            if (this.form.get('empresa').status === 'VALID') {
              var idEmpresa = this.form.get('empresa').value;
              this.inventarioService.getDepositos(idEmpresa).subscribe(function (response) {
                if (Object.keys(response).length > 0) {
                  _this28.depositos = response;
                }

                _this28.loaderNavbar = false;
              });
            }
          }
        }, {
          key: "getClasses",
          value: function getClasses() {
            var _this29 = this;

            this.classes = [];
            var descricaoLinhas = [];
            this.loaderNavbar = true;

            if (this.form.get('linhas').status === 'VALID') {
              descricaoLinhas.push(this.form.get('linhas').value);
              this.inventarioService.getClasses(descricaoLinhas).subscribe(function (response) {
                if (Object.keys(response).length > 0) {
                  _this29.classes = response;
                }

                _this29.loaderNavbar = false;
              });
            }
          }
        }, {
          key: "getMateriais",
          value: function getMateriais(linhas, classes) {
            var _this30 = this;

            this.materiais = [];
            this.loaderNavbar = true;

            if (this.form.get('linhas').status === 'VALID' || this.form.get('classes').status === 'VALID') {
              var descricaoLinhas = this.form.get('linhas').value;
              var idClasses = this.form.get('classes').value;
              this.inventarioService.getMateriais(descricaoLinhas, idClasses).subscribe(function (response) {
                if (Object.keys(response).length > 0) {
                  _this30.materiais = response.result;
                }

                _this30.loaderNavbar = false;
              });
            }
          }
        }, {
          key: "getInventario",
          value: function getInventario(params) {
            var _this31 = this;

            this.loaderNavbar = true;
            this.spinnerFullScreen = true;
            this.checked = !this.checked;
            this.inventarioService.getInventario(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
              _this31.spinnerFullScreen = false;
              _this31.loaderNavbar = false;
            })).subscribe(function (data) {
              if (data.status === 200) {
                _this31.noResult = false;
                _this31.inve = data['body']['data']['inventarios'];
                _this31.inventarios = data['body']['data']['inventarios'];
                var lancamentos = [];

                _this31.inventarios.forEach(function (element) {
                  if (element.empresa || element.deposito) {
                    lancamentos.push({
                      empresa: element.empresa,
                      deposito: element.deposito
                    });
                  }
                });

                _this31.loaderNavbar = false;
                _this31.informacoes = lancamentos;

                if (!_this31.totalItems) {
                  _this31.totalItems = data['body']['data']['qtRegistros'];
                }
              } else if (data.status === 204) {
                _this31.notice.notice('Nenhum resultado para sua pesquisa');

                _this31.dadosEmpty = true;
              } else {
                _this31.notice.error();
              }
            }, function (error) {
              _this31.notice.notice('Não há inventários cadastrados para esse status.');

              _this31.dadosEmpty = true;
            });
          }
        }, {
          key: "getClassesInventario",
          value: function getClassesInventario(idInventario, i) {
            var _this32 = this;

            this.detailPanelService.show();
            this.noLista = true;
            this.noResultado = false;
            this.inventarioService.getClassesInventario(idInventario).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
              _this32.detailPanelService.loadedFinished(false);
            })).subscribe(function (response) {
              if (response['status'] === 200) {
                response.body.data.forEach(function (element) {
                  if (element.dsClasse == null) {
                    _this32.noResultado = true;
                  } else {
                    _this32.noLista = false;
                    _this32.infoClasses = response.body.data;
                  }
                });
              }
            });
            this.compressedTable = true;
            this.infoLinha = this.inve[i].dsLinha;
            this.infoIdInventario = this.inve[i].idInventario;
          }
          /* Paginação */

        }, {
          key: "onPageChanged",
          value: function onPageChanged(event) {
            var page = event.page;
            this.form.get('pagina').setValue(page);
            this.onSearch();
          }
          /* Paginação */

        }, {
          key: "abrirInventario",
          value: function abrirInventario(idInventario, idStatusInventario) {
            this.route.navigate(["../".concat(idInventario, "/contagem-materiais")], {
              relativeTo: this.activatedRoute
            });
          }
        }, {
          key: "abrirRelatorio",
          value: function abrirRelatorio(idInventario) {
            this.route.navigate(["../".concat(idInventario, "/relatorio")], {
              relativeTo: this.activatedRoute
            });
          }
        }, {
          key: "openModal",
          value: function openModal(index) {
            this.idInventario = this.inventarios[index].idInventario;
            this.compressedTable = true;
          }
        }, {
          key: "onClose",
          value: function onClose() {
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

        }, {
          key: "onFieldError",
          value: function onFieldError(field) {
            if (this.onFieldInvalid(field)) {
              return 'is-invalid';
            }

            return '';
          }
        }, {
          key: "onFieldInvalid",
          value: function onFieldInvalid(field) {
            field = this.form.get(field);
            return field.status == 'INVALID' && field.touched;
          }
        }, {
          key: "onFieldRequired",
          value: function onFieldRequired(field) {
            var required = false;
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControl"]();

            if (this.form.controls[field].validator) {
              var validationResult = this.form.controls[field].validator(formControl);
              required = validationResult !== null && validationResult.required === true;
            }

            if (required) {
              return 'is-required';
            }
          }
        }, {
          key: "onClickSubtitle",
          value: function onClickSubtitle(id) {
            this.form.get('sigla').setValue(id);
            this.onSearch();
          }
        }, {
          key: "onCadastrar",
          value: function onCadastrar() {
            this.route.navigate(['../cadastro'], {
              relativeTo: this.activatedRoute
            });
          }
        }]);

        return LogisticaEstoquePainelInventarioInventarioComponent;
      }();

      LogisticaEstoquePainelInventarioInventarioComponent.ctorParameters = function () {
        return [{
          type: _inventario_service__WEBPACK_IMPORTED_MODULE_9__["LogisticaEstoquePainelInventarioInventarioService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_8__["AtividadesService"]
        }, {
          type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsLocaleService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormBuilder"]
        }, {
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_10__["DateService"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_11__["RouterService"]
        }, {
          type: src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_13__["DetailPanelService"]
        }];
      };

      LogisticaEstoquePainelInventarioInventarioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'inventario',
        template: _raw_loader_inventario_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_inventario_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_inventario_service__WEBPACK_IMPORTED_MODULE_9__["LogisticaEstoquePainelInventarioInventarioService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_8__["AtividadesService"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsLocaleService"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormBuilder"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_10__["DateService"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_11__["RouterService"], src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_13__["DetailPanelService"]])], LogisticaEstoquePainelInventarioInventarioComponent);
      /***/
    },

    /***/
    "c/D8":
    /*!***************************************************************************************************!*\
      !*** ./src/app/modules/logistica/estoque/painel-inventario/inventario/lista/lista.component.scss ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function cD8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2VzdG9xdWUvcGFpbmVsLWludmVudGFyaW8vaW52ZW50YXJpby9saXN0YS9saXN0YS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "eoW+":
    /*!************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/estoque/painel-inventario/cadastro/cadastro.component.html ***!
      \************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function eoW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen [hidden]=\"!spinnerFullScreen\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar [hidden]=\"!loaderNavbar\"></loader-spinner-navbar>\r\n<app-header [appTitle]=\"appTitle\">\r\n  <button\r\n    (click)=\"postCadastraInventario()\"\r\n    [disabled]=\"form.status  == 'INVALID' || !tipoInventario\">\r\n    Cadastrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <form autocomplete=\"off\" [formGroup]=\"form\">\r\n        <div class=\"form-row justify-content-center\">\r\n          <div class=\"form-group col-md-3\">\r\n            <label for=\"tipo\">Tipo de Inventário</label>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"false\"\r\n              [items]=\"tipoInventario\"\r\n              [virtualScroll]=\"true\"\r\n              labelForId=\"tipo\"\r\n              bindLabel=\"descNome\"\r\n              bindValue=\"codigo\"\r\n              placeholder=\"Selecione um Tipo\"\r\n              formControlName=\"tipoInventario\"\r\n              [ngClass]=\"onFieldError('tipoInventario') + ' ' + onFieldRequired('tipoInventario')\"\r\n            >\r\n            </ng-select>\r\n            <invalid-form-control\r\n              [show]=\"onFieldInvalid('tipoInventario')\"\r\n              message=\"Tipo de inventário é obrigatório.\">\r\n            </invalid-form-control>\r\n          </div>\r\n          <div class=\"form-group col-md-3\">\r\n            <label for=\"empresa\">Empresa</label>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"false\"\r\n              [items]=\"empresas\"\r\n              [virtualScroll]=\"true\"\r\n              labelForId=\"empresa\"\r\n              bindLabel=\"nomeFantasia\"\r\n              bindValue=\"codigoEmpresa\"\r\n              placeholder=\"Selecione uma empresa\"\r\n              formControlName=\"cdEmpresa\"\r\n              (change) =\"getDepositos()\"\r\n              (focus) =\"resetForm('depositos')\"\r\n              [ngClass]=\"onFieldError('cdEmpresa') + ' ' + onFieldRequired('cdEmpresa')\"\r\n            >\r\n            </ng-select>\r\n            <invalid-form-control\r\n              [show]=\"onFieldInvalid('cdEmpresa')\"\r\n              message=\"Empresa é obrigatório.\">\r\n            </invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row justify-content-center\">\r\n          <div class=\"form-group col-md-3\">\r\n            <label for=\"depositos\">Depósito</label>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"false\"\r\n              [items]=\"depositos\"\r\n              [virtualScroll]=\"true\"\r\n              labelForId=\"deposito\"\r\n              bindLabel=\"depositoDescricao\"\r\n              bindValue=\"depositoId\"\r\n              placeholder=\"Selecione um deposito\"\r\n              formControlName=\"cdDeposito\"\r\n              (focus) =\"resetForm('linhas')\"\r\n              [ngClass]=\"onFieldError('cdDeposito') + ' ' + onFieldRequired('cdDeposito')\"\r\n            >\r\n            </ng-select>\r\n            <invalid-form-control\r\n              [show]=\"onFieldInvalid('cdDeposito')\"\r\n              message=\"Despósito é obrigatório.\">\r\n            </invalid-form-control>\r\n          </div>\r\n          <div class=\"form-group col-md-3\">\r\n            <label for=\"linhas\">Linha</label>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"false\"\r\n              [items]=\"linhas\"\r\n              [virtualScroll]=\"true\"\r\n              labelForId=\"linha\"\r\n              bindLabel=\"linha\"\r\n              bindValue=\"linha\"\r\n              placeholder=\"Selecione uma linha\"\r\n              formControlName=\"linhas\"\r\n              (change) = \"getClasses(); getMateriais(linhas, '')\"\r\n              (focus) =\"resetForm('classes')\"\r\n              [ngClass]=\"onFieldError('linhas') + ' ' + onFieldRequired('linhas')\"\r\n            >\r\n            </ng-select>\r\n            <invalid-form-control\r\n              [show]=\"onFieldInvalid('linhas')\"\r\n              message=\"Linha é obrigatório.\">\r\n            </invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row justify-content-center\">\r\n          <div class=\"form-group col-md-2\">\r\n            <label for=\"classes\">Classe</label>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"false\"\r\n              [items]=\"classes\"\r\n              [multiple]=\"true\"\r\n              [closeOnSelect]=\"false\"\r\n              [virtualScroll]=\"true\"\r\n              labelForId=\"classes\"\r\n              bindLabel=\"classeDescricao\"\r\n              bindValue=\"classeId\"\r\n              placeholder=\"Selecione uma classe\"\r\n              formControlName=\"classes\"\r\n              (change) = \"getMateriais(linhas, classes)\"\r\n              [ngClass]=\"onFieldError('classes')\"\r\n            >\r\n            </ng-select>\r\n            <invalid-form-control\r\n              [show]=\"onFieldInvalid('classes')\"\r\n              message=\"Classe é obrigatório.\">\r\n            </invalid-form-control>\r\n          </div>\r\n          <div class=\"form-group col-md-4\">\r\n            <label for=\"materiais\">Material</label>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"false\"\r\n              [items]=\"materiais\"\r\n              [multiple]=\"true\"\r\n              [closeOnSelect]=\"false\"\r\n              [virtualScroll]=\"true\"\r\n              labelForId=\"materiais\"\r\n              bindLabel=\"codigoDescricaoMaterial\"\r\n              bindValue=\"codigoMaterial\"\r\n              placeholder=\"Selecione um material\"\r\n              formControlName=\"materiais\"\r\n            >\r\n            </ng-select>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</app-body>";
      /***/
    },

    /***/
    "frdo":
    /*!*******************************************************************************************************!*\
      !*** ./src/app/modules/logistica/estoque/painel-inventario/inventario/relatorio/relatorio.service.ts ***!
      \*******************************************************************************************************/

    /*! exports provided: LogisticaEstoquePainelInventarioInventarioRelatorioService */

    /***/
    function frdo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaEstoquePainelInventarioInventarioRelatorioService", function () {
        return LogisticaEstoquePainelInventarioInventarioRelatorioService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var LogisticaEstoquePainelInventarioInventarioRelatorioService = /*#__PURE__*/function () {
        function LogisticaEstoquePainelInventarioInventarioRelatorioService(http) {
          _classCallCheck(this, LogisticaEstoquePainelInventarioInventarioRelatorioService);

          this.http = http;
          this.BASE_URL = "https://crm360.monterrey.com.bo/api";
        }

        _createClass(LogisticaEstoquePainelInventarioInventarioRelatorioService, [{
          key: "getLista",
          value: function getLista(idInventario) {
            return this.http.get("".concat(this.BASE_URL, "/logistica/estoque/inventario/").concat(idInventario, "/materiais"));
          }
        }, {
          key: "getInfoInventario",
          value: function getInfoInventario(idInventario) {
            return this.http.get("".concat(this.BASE_URL, "/logistica/estoque/inventario/").concat(idInventario, "/resultado"));
          }
        }, {
          key: "getInfoInventarioRotativoGeral",
          value: function getInfoInventarioRotativoGeral(idInventario) {
            return this.http.get("".concat(this.BASE_URL, "/logistica/estoque/inventario-rotativo/").concat(idInventario));
          }
        }, {
          key: "getInfoInventarioRotativo",
          value: function getInfoInventarioRotativo(idInventario, cdMaterial) {
            return this.http.get("".concat(this.BASE_URL, "/logistica/estoque/inventario-rotativo/").concat(idInventario, "/material/").concat(cdMaterial), {
              observe: 'response'
            });
          }
        }]);

        return LogisticaEstoquePainelInventarioInventarioRelatorioService;
      }();

      LogisticaEstoquePainelInventarioInventarioRelatorioService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      LogisticaEstoquePainelInventarioInventarioRelatorioService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], LogisticaEstoquePainelInventarioInventarioRelatorioService);
      /***/
    },

    /***/
    "gplo":
    /*!*************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/estoque/painel-inventario/inventario/relatorio/relatorio.component.html ***!
      \*************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function gplo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"spinnerFullScreen\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<div class=\"row\" id=\"application-header\">\r\n  <div class=\"col-6\">\r\n    <div id=\"title\">\r\n      <back-button></back-button>\r\n      <h1>Realtório de inventário</h1>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-6 d-flex justify-content-end\">\r\n    <div id=\"actions\">\r\n      <button \r\n        (click)=\"onDownload()\"\r\n        >\r\n        Imprimir relatório\r\n    </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row\" id=\"application-body\">\r\n  <div class=\"container-fluid\">\r\n    <breadcrumb [tree]=\"breadCrumbTree\"></breadcrumb>\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <div id=\"download\">\r\n          <div class=\"row justify-content-center\">\r\n            <div class=\"d-flex justify-content-between col-6 pl-5\">\r\n              <img class=\"\" src=\"../../../../../../../assets/images/logo/logo-manetoni.png\" height=\"100\" width=\"150\">\r\n            </div>\r\n            \r\n            <div class=\"d-flex justify-content-end col-6 mt-2 pr-5\">\r\n              <img class=\"\" src=\"../../../../../../../assets/images/logo/Logo-MTcorp.png\" height=\"65\" width=\"220\">\r\n            </div>\r\n          </div>\r\n          <div class=\"espacamento250\">&nbsp;</div>\r\n          <div class=\"row justify-content-center\">\r\n            <div class=\"my-5\">\r\n              <div class=\"d-flex justify-content-center\">\r\n                <h1>RELATÓRIO DE RESULTADOS DO INVENTÁRIO</h1>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        <!-- INICIA ESPAÇAMENTO -->\r\n          <div class=\"espacamento150\">&nbsp;</div>\r\n          <div style=\"height: 170px\">&nbsp;</div>\r\n        <!-- FINALIZA ESPAÇAMENTO --> \r\n          <ul class=\"p-0\">\r\n            <li class=\"mx-3\">\r\n              <h6 class=\"card-header border\"> \r\n                Empresa: {{ listaInfo.dsEmpresa | uppercase }} / Depósito: {{ listaInfo.dsDeposito | uppercase }} / Linha: {{ infoLinha| uppercase }} / Classe: {{ infoClasse | uppercase }}\r\n              </h6>\r\n            </li>\r\n          </ul> \r\n          <ul class=\"d-flex p-0 col-12  my-5\">\r\n            <li class=\"col-6\">\r\n              <div class=\"card justify-content-center align-items-center\">\r\n                <h5 class=\"card-header text-center w-100\"> Estoque total ton.(Anterior) </h5>\r\n                <div class=\"card-body font-weight-bold w-100 bgdValueList\">\r\n                  <div class=\"espacamento50\">&nbsp;</div>\r\n                  <div class=\"d-flex text-center col-12 large\">\r\n                    <div class=\"col\"><h1> {{ listaInfo.qtPesoEstoque | number:'1.3-3' }} </h1></div>\r\n                  </div>\r\n                  <div class=\"espacamento50\">&nbsp;</div>\r\n                </div>\r\n              </div>\r\n            </li>\r\n            <li class=\"col-6\">\r\n              <div class=\"card justify-content-center align-items-center\">\r\n                <h5 class=\"card-header text-center w-100\"> Estoque total ton.(Atual) </h5>\r\n                <div class=\"card-body font-weight-bold w-100 bgdValueList\">\r\n                  <div class=\"espacamento50\">&nbsp;</div>\r\n                  <div class=\"d-flex text-center col-12 large\">\r\n                    <div class=\"col\"><h1> {{ listaInfo.saldoEstoque | number:'1.3-3' }} </h1></div>\r\n                  </div>\r\n                  <div class=\"espacamento50\">&nbsp;</div>\r\n                </div>\r\n              </div>\r\n            </li>\r\n          </ul>\r\n          <div class=\"espacamento20\">&nbsp;</div>\r\n          <ul class=\"d-flex p-0 col-12  mt-5\">\r\n            <li class=\"col-6\">\r\n              <div class=\"card justify-content-center align-items-center\">\r\n                <h5 class=\"card-header text-center w-100\"> Total geral da contagem </h5>\r\n                <div class=\"card-body font-weight-bold w-100 bgdValueList\">\r\n                  <div class=\"espacamento50\">&nbsp;</div>\r\n                  <div class=\"d-flex text-center col-12 large\">\r\n                    <div class=\"col\"><h1> {{ listaInfo.saldoEstoqueLancamento | number:'1.3-3' }} </h1></div>\r\n                  </div>\r\n                  <div class=\"espacamento50\">&nbsp;</div>\r\n                </div>\r\n              </div>\r\n            </li>\r\n            <li class=\"col-6\">\r\n              <div class=\"card justify-content-center align-items-center\">\r\n                <h5 class=\"card-header text-center w-100\"> Diferença total ajustada </h5>\r\n                <div class=\"card-body font-weight-bold w-100 bgdValueList\">\r\n                  <div class=\"espacamento50\">&nbsp;</div>  \r\n                  <div class=\"d-flex text-center col-12 large\">\r\n                    <div class=\"col\"><h1> {{ resultadoDiferenca | number:'1.3-3' }} </h1></div>\r\n                  </div>\r\n                  <div class=\"espacamento50\">&nbsp;</div>\r\n                </div>\r\n              </div>\r\n            </li>\r\n          </ul>\r\n          <div class=\"espacamento20\">&nbsp;</div>\r\n          <ul class=\"d-flex p-0 col-12  mt-5\">\r\n            <li class=\"col-6\">\r\n              <div class=\"card justify-content-center align-items-center\">\r\n                  <h5 class=\"card-header text-center w-100\"> Resultado total do inventário </h5>\r\n                <div class=\"card-body font-weight-bold w-100 bgdValueList\">\r\n                  <div class=\"espacamento50\">&nbsp;</div>\r\n                  <div class=\"d-flex text-center col-12 large\">\r\n                    <div class=\"col\"><h1> {{ resultTotalInventario | number:'1.3-3' }} </h1></div>\r\n                  </div>\r\n                  <div class=\"espacamento50\">&nbsp;</div>\r\n                </div>\r\n              </div> \r\n            </li>\r\n            <li class=\"col-6\">\r\n                <div class=\"card justify-content-center align-items-center\">\r\n                  <h5 class=\"card-header text-center w-100\"> Resultado monetário total </h5>\r\n                  <div class=\"card-body font-weight-bold w-100 bgdValueList\">\r\n                    <div class=\"espacamento50\">&nbsp;</div>\r\n                    <div class=\"d-flex text-center col-12 large\">\r\n                      <div class=\"col\"><h1> {{ listaInfo.saldoFinanceiro | currency:'BRL':'symbol':'1.2-2'}} </h1></div>\r\n                    </div>\r\n                    <div class=\"espacamento50\">&nbsp;</div>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n          </ul>\r\n          <div class=\"espacamento25\">&nbsp;</div>\r\n          <ul class=\"p-0\">\r\n            <li class=\"px-1 pb-1 \" *ngFor=\"let lista of listas\" style=\"list-style: none;\">\r\n              <div class=\"card\">\r\n                <h6 class=\"card-header\"> {{ lista.cdMaterial }} - {{ lista.dsMaterial }} </h6>\r\n                <div class=\"row card-body\">\r\n                  <div class=\"list-group list-group-flush col-4\">\r\n                    <div class=\"list-group-item border-0\"> Estoque ton.: {{ lista.qtPesoEstoque | number : '1.3-3' }} </div>\r\n                    <div class=\"list-group-item border-0\"> Qtd. peça físico: {{ lista.qtPecaContagem }} </div>\r\n                    <div class=\"list-group-item border-0\"> Peso físico ton.: {{ lista.qtPesoContagem | number : '1.3-3' }} </div>\r\n                  </div>\r\n                  <div class=\"list-group list-group-flush col-4\">\r\n                    <div class=\"list-group-item border-0\"> Total da contagem: {{ lista.totalContagem | number : '1.3-3' }} </div>\r\n                    <div class=\"list-group-item border-0\"> Diferença ajustada: {{ lista.saldoEstoque | number : '1.3-3' }} </div>\r\n                    <div class=\"list-group-item border-0\"> Soma inventário rotativo: {{ lista.somaInventarioRotativo | number : '1.3-3' }} </div>\r\n                  </div>\r\n                  <div class=\"list-group list-group-flush col-4\">\r\n                    <div class=\"list-group-item border-0\"> Resultado inventário: {{ lista.resultadoInventario | number : '1.3-3' }} </div>\r\n                    <div class=\"list-group-item border-0\"> Custo médio: {{ lista.precoMinimo | currency:'BRL':'symbol':'1.2-2' }} </div>\r\n                    <div class=\"list-group-item border-0\"> Resultado monetário: {{ lista.saldoFinanceiro | currency:'BRL':'symbol':'1.2-2' }} </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>  \r\n\r\n";
      /***/
    },

    /***/
    "i75G":
    /*!***************************************************************************************************************************************!*\
      !*** ./src/app/modules/logistica/estoque/painel-inventario/inventario/materiais-notas-fiscais/materiais-notas-fiscais.component.scss ***!
      \***************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function i75G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2VzdG9xdWUvcGFpbmVsLWludmVudGFyaW8vaW52ZW50YXJpby9tYXRlcmlhaXMtbm90YXMtZmlzY2Fpcy9tYXRlcmlhaXMtbm90YXMtZmlzY2Fpcy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "lJJZ":
    /*!*********************************************************************************************************************************!*\
      !*** ./src/app/modules/logistica/estoque/painel-inventario/inventario/materiais-ocorrencias/materiais-ocorrencias.component.ts ***!
      \*********************************************************************************************************************************/

    /*! exports provided: LogisticaEstoquePainelInventarioInventarioMateriaisOcorrenciasComponent */

    /***/
    function lJJZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaEstoquePainelInventarioInventarioMateriaisOcorrenciasComponent", function () {
        return LogisticaEstoquePainelInventarioInventarioMateriaisOcorrenciasComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_materiais_ocorrencias_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./materiais-ocorrencias.component.html */
      "rJ2p");
      /* harmony import */


      var _materiais_ocorrencias_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./materiais-ocorrencias.component.scss */
      "oolM");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _materiais_ocorrencias_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./materiais-ocorrencias.service */
      "4NJB");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/templates/detail-panel/detal-panel.service */
      "gIxL");
      /* harmony import */


      var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/services/core/date.service */
      "Rk3r");

      var LogisticaEstoquePainelInventarioInventarioMateriaisOcorrenciasComponent = /*#__PURE__*/function () {
        function LogisticaEstoquePainelInventarioInventarioMateriaisOcorrenciasComponent(activatedRoute, notice, route, formBuilder, detailPanelService, dateService, ocorrenciasService) {
          _classCallCheck(this, LogisticaEstoquePainelInventarioInventarioMateriaisOcorrenciasComponent);

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
          this.breadCrumbTree = [{
            descricao: 'Contagem de materiais',
            routerLink: "../../".concat(this.idInventario, "/contagem-materiais")
          }, {
            descricao: this.appTitleBreadcrumb
          }];
          this.tableFilterConfig = {
            subtitleBorder: true
          };
          /* Paginação */

          this.itemsPerPage = 10;
          this.currentPage = 1;
          this.begin = 0;
          this.end = 10;
          this.beginP = 0;
          this.endP = 10;
          this.showDetailPanel = false;
          this.subtitles = [{
            id: 1,
            text: 'Devolução Total de R.O.',
            color: 'red'
          }, {
            id: 2,
            text: 'Devolução Parcial de R.O.',
            color: 'yellow'
          }];
          this.form = this.formBuilder.group({
            cdNotaFiscal: [null],
            cdOcorrencia: [null]
          });
        }

        _createClass(LogisticaEstoquePainelInventarioInventarioMateriaisOcorrenciasComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getListaExistente();
            this.onSubscription();
          }
        }, {
          key: "onSubscription",
          value: function onSubscription() {
            var _this33 = this;

            this.$showDetailPanelSubscription = this.detailPanelService.config.subscribe(function (event) {
              _this33.showDetailPanel = event.showing;
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.$showDetailPanelSubscription.unsubscribe();
          }
        }, {
          key: "getParams",
          value: function getParams() {
            var _params = {};
            var obj = this.form.value;

            for (var prop in obj) {
              if (obj[prop]) {
                if (prop == 'dataInicio' || prop == 'dataFim') {
                  _params[prop] = obj[prop] instanceof Date ? this.dateService.convertToUrlDate(obj[prop]) : obj[prop].substring(0, 10);
                } else {
                  _params[prop] = obj[prop];
                }
              }
            }

            return _params;
          }
        }, {
          key: "getListaExistente",
          value: function getListaExistente() {
            if (this.getListaCarregadaMaisNotaFiscal()) {
              var val = this.cdOcorrencia;

              if (!val) {
                this.ocorrencias = this.tempOcorrencias;
              }

              var temp = this.tempOcorrencias.filter(function (row) {
                return Object.keys(row).some(function (property) {
                  return row[property] === null ? null : row[property].toString().indexOf(val) !== -1;
                });
              });
              this.ocorrencias = temp;
              this.loading = false;
            } else {
              this.getInventario();
            }
          }
        }, {
          key: "getListaCarregadaMaisNotaFiscal",
          value: function getListaCarregadaMaisNotaFiscal() {
            var _this34 = this;

            var containsOcorrencia = false;
            var isNotUndefined = typeof this.tempOcorrencias !== 'undefined';

            if (isNotUndefined) {
              containsOcorrencia = this.tempOcorrencias.find(function (element) {
                return element.ocorrencia === _this34.cdOcorrencia;
              });
            }

            return isNotUndefined && containsOcorrencia;
          }
        }, {
          key: "getInventario",
          value: function getInventario() {
            var _this35 = this;

            this.ocorrenciasService.getInventario(this.idInventario).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              return _this35.getOcorrencias();
            })).subscribe(function (response) {
              if (response['status'] === 200) {
                _this35.cdEmp = response.body['data']['inventarios']['0']['cdEmpresa'];
              }
            });
          }
        }, {
          key: "getOcorrencias",
          value: function getOcorrencias() {
            var _this36 = this;

            this.detailPanelService.hide();
            this.spinnerFullScreen = true;
            this.loaderNavbar = true;
            this.ocorrenciasService.getOcorrencias(this.idInventario, this.getParams()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              return _this36.loaderNavbar = false, _this36.spinnerFullScreen = false;
            })).subscribe(function (response) {
              if (response['status'] === 200) {
                _this36.ocorrencias = response['body']['data']['ocorrencias'];
                _this36.qtNotasFiscais = response['body']['data']['qtRegistros'];
                _this36.noResult = true;
              }
            });
          }
        }, {
          key: "getMateriaisNotasFiscais",
          value: function getMateriaisNotasFiscais(param) {
            var _this37 = this;

            this.detailPanelService.show();
            this.loading = true;
            this.materiaisNotaFiscal = [];
            this.ocorrenciasService.getMateriaisNotasFiscais(this.idInventario, param).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              return _this37.loading = false;
            })).subscribe(function (response) {
              if (response['status'] === 200) {
                _this37.materiaisNotaFiscal = response['body']['data'];
                _this37.notaFiscalSelecionada = param;

                _this37.detailPanelService.loadedFinished(false);
              } else _this37.detailPanelService.loadedFinished(true);
            });
          }
        }, {
          key: "salvarNotasFiscais",
          value: function salvarNotasFiscais() {
            var _this38 = this;

            var checkAlterado = [];
            this.ocorrencias.forEach(function (element) {
              if (element.checkAlterado) {
                checkAlterado.push(element);
              }
            });
            var particao = 50;
            var qtEnvios = Math.ceil(checkAlterado.length / particao);
            var req = [];
            this.loaderNavbar = true;

            for (var index = 0; index < qtEnvios; index++) req.push(this.ocorrenciasService.salvarNotasFiscais(this.idInventario, checkAlterado.slice(particao * index, particao * (index + 1)), this.matriculaAuditor));

            Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["forkJoin"])(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              return _this38.loaderNavbar = false;
            })).subscribe(function (data) {
              var contador = 0;
              data[0]['body'].forEach(function (element) {
                if (element['responseCode'] == 200) {
                  _this38.notice.success('Itens salvos com sucesso!');

                  contador++;
                } else {
                  _this38.notice.error(element['response']);
                }
              });

              if (contador === data.length) {}
            }, function (error) {
              _this38.notice.error('Ocorreu um erro ao salvar os itens');
            });
          }
        }, {
          key: "verificaCheck",
          value: function verificaCheck(notaFiscal) {
            notaFiscal.checkAlterado = !notaFiscal.checkAlterado;
            this.salvarNotasFiscais();
            this.getInventario();
          }
          /* Paginação */

        }, {
          key: "onPageChanged",
          value: function onPageChanged(event) {
            this.begin = (event.page - 1) * event.itemsPerPage;
            this.end = event.page * event.itemsPerPage;
          }
          /* Paginação */

        }, {
          key: "fecharSalvar",
          value: function fecharSalvar(idInventario) {
            this.route.navigate(["../../".concat(idInventario, "/contagem-materiais")], {
              relativeTo: this.activatedRoute
            });
          }
        }]);

        return LogisticaEstoquePainelInventarioInventarioMateriaisOcorrenciasComponent;
      }();

      LogisticaEstoquePainelInventarioInventarioMateriaisOcorrenciasComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }, {
          type: src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_10__["DetailPanelService"]
        }, {
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_11__["DateService"]
        }, {
          type: _materiais_ocorrencias_service__WEBPACK_IMPORTED_MODULE_5__["LogisticaEstoquePainelInventarioInventarioMateriaisOcorrenciasService"]
        }];
      };

      LogisticaEstoquePainelInventarioInventarioMateriaisOcorrenciasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'materiais-ocorrencias',
        template: _raw_loader_materiais_ocorrencias_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_materiais_ocorrencias_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_10__["DetailPanelService"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_11__["DateService"], _materiais_ocorrencias_service__WEBPACK_IMPORTED_MODULE_5__["LogisticaEstoquePainelInventarioInventarioMateriaisOcorrenciasService"]])], LogisticaEstoquePainelInventarioInventarioMateriaisOcorrenciasComponent);
      /***/
    },

    /***/
    "nAji":
    /*!*********************************************************************************************************!*\
      !*** ./src/app/modules/logistica/estoque/painel-inventario/inventario/relatorio/relatorio.component.ts ***!
      \*********************************************************************************************************/

    /*! exports provided: LogisticaEstoquePainelInventarioInventarioRelatorioComponent */

    /***/
    function nAji(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaEstoquePainelInventarioInventarioRelatorioComponent", function () {
        return LogisticaEstoquePainelInventarioInventarioRelatorioComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_relatorio_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./relatorio.component.html */
      "gplo");
      /* harmony import */


      var _relatorio_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./relatorio.component.scss */
      "bY0X");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_shared_services_core_pdf_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/core/pdf.service */
      "GTII");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var _relatorio_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./relatorio.service */
      "frdo");

      var LogisticaEstoquePainelInventarioInventarioRelatorioComponent = /*#__PURE__*/function () {
        function LogisticaEstoquePainelInventarioInventarioRelatorioComponent(pdfService, notice, activatedRoute, relatorioService, atividadesService) {
          _classCallCheck(this, LogisticaEstoquePainelInventarioInventarioRelatorioComponent);

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
          this.breadCrumbTree = [{
            descricao: 'Lista',
            routerLink: '/logistica/estoque/painel-inventario/lista'
          }, {
            descricao: 'Relatório'
          }];
        }

        _createClass(LogisticaEstoquePainelInventarioInventarioRelatorioComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getLista();
            this.getInfoInventario();
            this.getInfoInventarioRotativoGeral();
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "getLista",
          value: function getLista() {
            var _this39 = this;

            var infoMateriais = [];

            if (this.activatedRoute.snapshot.params['id'] > 0) {
              this.idInventario = this.activatedRoute.snapshot.params['id'];
              this.relatorioService.getLista(this.idInventario).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
                return _this39.spinnerFullScreen = false;
              })).subscribe(function (response) {
                if (Object.keys(response).length > 0) {
                  _this39.listas = response['materiais'];
                  /* this.infoLinha = this.listas[0].dsLinha.trim();
                  this.infoClasse = this.listas[0].dsClasse; */

                  _this39.listas.forEach(function (element) {
                    element.totalContagem = element.qtPecaContagem * element.pesoPeca + parseFloat(element.qtPesoContagem);

                    _this39.getInfoInventarioRotativo(element.cdMaterial).subscribe(function (response) {
                      if (response.status == 204) element.somaInventarioRotativo = 0;else element.somaInventarioRotativo = parseFloat(response.body.saldoEstoque);
                      element.resultadoInventario = parseFloat(element.saldoEstoque) + element.somaInventarioRotativo;
                    });
                  });
                }
              }, function (error) {
                _this39.notice.notice('Não há materiais cadastrados para esse inventário.');
              });
            }
          }
        }, {
          key: "getInfoInventario",
          value: function getInfoInventario() {
            var _this40 = this;

            this.relatorioService.getInfoInventario(this.idInventario).subscribe(function (response) {
              _this40.listaInfo = response;
              _this40.resultadoDiferenca = parseFloat(_this40.listaInfo.saldoEstoque) - parseFloat(_this40.listaInfo.qtPesoEstoque);
            });
          }
        }, {
          key: "getInfoInventarioRotativo",
          value: function getInfoInventarioRotativo(cdMaterial) {
            return this.relatorioService.getInfoInventarioRotativo(this.idInventario, cdMaterial);
          }
        }, {
          key: "getInfoInventarioRotativoGeral",
          value: function getInfoInventarioRotativoGeral() {
            var _this41 = this;

            return this.relatorioService.getInfoInventarioRotativoGeral(this.idInventario).subscribe(function (response) {
              _this41.inventarioRotativoTotal = parseFloat(response.saldoEstoque);
              _this41.resultTotalInventario = parseFloat(_this41.listaInfo.saldoEstoque) + parseFloat(_this41.inventarioRotativoTotal);
            });
          }
        }, {
          key: "onDownload",
          value: function onDownload() {
            var _this42 = this;

            this.loaderNavbar = true;
            setTimeout(function () {
              _this42.pdfService.download('download', "".concat(_this42.idInventario, "_ResultadoInventario"));

              _this42.loaderNavbar = false;
            }, 1000);
          }
        }]);

        return LogisticaEstoquePainelInventarioInventarioRelatorioComponent;
      }();

      LogisticaEstoquePainelInventarioInventarioRelatorioComponent.ctorParameters = function () {
        return [{
          type: src_app_shared_services_core_pdf_service__WEBPACK_IMPORTED_MODULE_7__["PdfService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _relatorio_service__WEBPACK_IMPORTED_MODULE_9__["LogisticaEstoquePainelInventarioInventarioRelatorioService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_8__["AtividadesService"]
        }];
      };

      LogisticaEstoquePainelInventarioInventarioRelatorioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'relatorio',
        template: _raw_loader_relatorio_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_relatorio_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_core_pdf_service__WEBPACK_IMPORTED_MODULE_7__["PdfService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _relatorio_service__WEBPACK_IMPORTED_MODULE_9__["LogisticaEstoquePainelInventarioInventarioRelatorioService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_8__["AtividadesService"]])], LogisticaEstoquePainelInventarioInventarioRelatorioComponent);
      /***/
    },

    /***/
    "oolM":
    /*!***********************************************************************************************************************************!*\
      !*** ./src/app/modules/logistica/estoque/painel-inventario/inventario/materiais-ocorrencias/materiais-ocorrencias.component.scss ***!
      \***********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function oolM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2VzdG9xdWUvcGFpbmVsLWludmVudGFyaW8vaW52ZW50YXJpby9tYXRlcmlhaXMtb2NvcnJlbmNpYXMvbWF0ZXJpYWlzLW9jb3JyZW5jaWFzLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "rJ2p":
    /*!*************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/estoque/painel-inventario/inventario/materiais-ocorrencias/materiais-ocorrencias.component.html ***!
      \*************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function rJ2p(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen [hidden]=\"!spinnerFullScreen\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar [hidden]=\"!loaderNavbar\"></loader-spinner-navbar>\r\n<app-header [appTitle]=\"appTitle\">\r\n  <button \r\n    (click)=\"fecharSalvar(idInventario)\"\r\n  >\r\n    Fechar e Salvar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <advanced-filter #scrollToFilter>\r\n    <form autocomplete=\"off\" [formGroup]=\"form\">\r\n      <div class=\"form-row justify-content-left\">\r\n        <div class=\"form-group col-md-2 justify-content-end\">\r\n          <label for=\"cdInventario\"> Número Nota Fiscal </label>\r\n          <input \r\n            id=\"cdNotaFiscal\"\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            placeholder=\"DIGITE...\"\r\n            formControlName=\"cdNotaFiscal\"\r\n            (keyup.enter)=\"getListaExistente()\"\r\n          >\r\n        </div>\r\n        <div class=\"form-group col-md-2 justify-content-end\">\r\n          <label for=\"cdInventario\"> Número R.O. </label>\r\n          <input \r\n            id=\"cdOcorrencia\"\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            placeholder=\"DIGITE...\"\r\n            formControlName=\"cdOcorrencia\"\r\n            (keyup.enter)=\"getListaExistente()\"\r\n          >\r\n        </div>\r\n      </div>  \r\n    </form>\r\n  </advanced-filter>\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <subtitles\r\n        [data]=\"subtitles\"\r\n        [show]=\"noResult\">\r\n      </subtitles>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div [ngClass]=\"{'col': !showDetailPanel, 'col-4 pr-0': showDetailPanel}\">\r\n      <custom-table [config]=\"tableFilterConfig\">\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n            <th style=\"width: 50px\"></th>\r\n            <th class=\"text-center\">Nota Fiscal</th>\r\n            <th class=\"text-center\">Data Emissão NF</th>\r\n            <th class=\"text-center\">R.O.</th>\r\n            <th class=\"text-center\">Data Emissão R.O.</th>\r\n            <th style=\"width: 50px\"></th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr class=\"hover\" *ngFor=\"let ocorrencia of ocorrencias | slice : begin : end; let i = index\" [ngClass]=\"{'bg-active': notaFiscalSelecionada == ocorrencia.NR_NOTA_FISCAL}\">\r\n            <td \r\n            style=\"width: 50px\"\r\n            [ngClass]=\" ocorrencia.SITU == 'TOTAL' ? 'border-danger' : 'border-warning'\" >\r\n              <div class=\"custom-control custom-checkbox\" style=\"cursor: pointer;\">\r\n                  <input type=\"checkbox\" class=\"custom-control-input\" \r\n                        [(ngModel)]=\"ocorrencia.check\" \r\n                        (change)=\"verificaCheck(ocorrencia)\" \r\n                        id=\"customCheck{{ i }}\" \r\n                        style=\"cursor: pointer;\">\r\n                  <label class=\"custom-control-label\" for=\"customCheck{{ i }}\" style=\"cursor: pointer;\"></label>\r\n              </div>\r\n            </td>\r\n            <td class=\"text-center\" (click)=\"getMateriaisNotasFiscais(ocorrencia.CD_OCOR)\">{{ ocorrencia.NR_NOTA_FISCAL }}</td>\r\n            <td class=\"text-center\" (click)=\"getMateriaisNotasFiscais(ocorrencia.CD_OCOR)\">{{ ocorrencia.DATA_EMIS }}</td>\r\n            <td class=\"text-center\" (click)=\"getMateriaisNotasFiscais(ocorrencia.CD_OCOR)\">{{ ocorrencia.CD_OCOR }}</td>\r\n            <td class=\"text-center\" (click)=\"getMateriaisNotasFiscais(ocorrencia.CD_OCOR)\">{{ ocorrencia.DATA_LANC }}</td>\r\n            <td style=\"width: 50px; cursor: pointer;\" (click)=\"getMateriaisNotasFiscais(ocorrencia.CD_OCOR)\"><i class=\"far fa-file-alt\"></i></td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table><div class=\"mt-3 col-6\"></div>\r\n      <div *ngIf=\"qtNotasFiscais >= itemsPerPage\">\r\n        Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > qtNotasFiscais ? qtNotasFiscais : currentPage*(itemsPerPage) }} de {{ qtNotasFiscais }}\r\n        <pagination\r\n          [maxSize]=\"10\"\r\n          [totalItems]=\"qtNotasFiscais\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          (pageChanged)=\"onPageChanged($event)\"\r\n          [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPage\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\">\r\n        </pagination>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-8\" [hidden]=\"!showDetailPanel\">\r\n      <detail-panel [panelTitle]=\"appTitleNotasFiscais\">\r\n        <custom-table [config]=\"tableNotasFiscaisMateriaisConfig\"> <!-- [heading]=\"notaFiscalSelecionada\" -->\r\n          <ng-template #thead let-thead>\r\n            <tr>\r\n              <th>Código</th>\r\n              <th style=\"width: 50%\">Descrição</th>\r\n              <th>Peso Liq. NF</th>\r\n              <th>Peso Liq. Ocorrência</th>\r\n              <th>Valor</th>\r\n            </tr>\r\n          </ng-template>\r\n          <ng-template #tbody let-tbody>\r\n            <tr *ngFor=\"let materialNotaFiscal of materiaisNotaFiscal; let i = index\">\r\n              <td>{{ materialNotaFiscal.CD_MATE }}</td>\r\n              <td style=\"width: 50%\">{{ materialNotaFiscal.DS_MATE  }}</td>\r\n              <td>{{ materialNotaFiscal.QT_ITEM | number : '1.3-3' }}</td>\r\n              <td>{{ materialNotaFiscal.QT_OCOR_DEVO | number : '1.3-3' }}</td>\r\n              <td>{{ materialNotaFiscal.VL_UNIT | currency:'BRL':'symbol':'1.2-2'}}</td>\r\n            </tr> \r\n          </ng-template>\r\n        </custom-table>\r\n      </detail-panel>\r\n    </div>\r\n  </div>\r\n</app-body>\r\n\r\n";
      /***/
    },

    /***/
    "tn3N":
    /*!***********************************************************************************************!*\
      !*** ./src/app/modules/logistica/estoque/painel-inventario/inventario/lista/lista.service.ts ***!
      \***********************************************************************************************/

    /*! exports provided: LogisticaEstoquePainelInventarioInventarioListaService */

    /***/
    function tn3N(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaEstoquePainelInventarioInventarioListaService", function () {
        return LogisticaEstoquePainelInventarioInventarioListaService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var LogisticaEstoquePainelInventarioInventarioListaService = /*#__PURE__*/function () {
        function LogisticaEstoquePainelInventarioInventarioListaService(http) {
          _classCallCheck(this, LogisticaEstoquePainelInventarioInventarioListaService);

          this.http = http;
          this.BASE_URL = "https://crm360.monterrey.com.bo/api";
        }

        _createClass(LogisticaEstoquePainelInventarioInventarioListaService, [{
          key: "getLista",
          value: function getLista(idInventario) {
            var matricula = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
            var cdMaterial = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
            var naoConsideraEstoqueZerado = arguments.length > 3 ? arguments[3] : undefined;
            return this.http.get("".concat(this.BASE_URL, "/logistica/estoque/inventarios/").concat(idInventario, "/materiais"), {
              params: {
                idInventario: idInventario,
                matricula: matricula,
                cdMaterial: cdMaterial,
                naoConsideraEstoqueZerado: naoConsideraEstoqueZerado
              }
            });
          }
        }, {
          key: "getListaMateriaisParaFiltro",
          value: function getListaMateriaisParaFiltro(idInventario) {
            var matricula = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
            return this.http.get("".concat(this.BASE_URL, "/logistica/estoque/inventarios/").concat(idInventario, "/materiais"), {
              params: {
                idInventario: idInventario,
                matricula: matricula,
                naoConsideraEstoqueZerado: '0',
                qtPagina: '1000'
              },
              observe: 'response'
            });
          }
        }, {
          key: "postSalvar",
          value: function postSalvar(requisicao, idInventario) {
            return this.http.post("".concat(this.BASE_URL, "/logistica/estoque/inventario/").concat(idInventario, "/materiais/lancamento"), requisicao, {
              observe: 'response'
            });
          }
        }, {
          key: "atualizarInventario",
          value: function atualizarInventario() {
            var observacao = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            var idStatusInventario = arguments.length > 1 ? arguments[1] : undefined;
            var idInventario = arguments.length > 2 ? arguments[2] : undefined;
            var matriculaAuditor = arguments.length > 3 ? arguments[3] : undefined;
            return this.http.put("".concat(this.BASE_URL, "/logistica/estoque/inventarios/").concat(idInventario), {
              observacao: observacao,
              idStatusInventario: idStatusInventario,
              matriculaAuditor: matriculaAuditor
            }, {
              observe: 'response'
            });
          }
        }, {
          key: "getInfoInventario",
          value: function getInfoInventario(idInventario) {
            return this.http.get("".concat(this.BASE_URL, "/logistica/estoque/inventario/").concat(idInventario));
          }
        }, {
          key: "getNotasFiscaisRo",
          value: function getNotasFiscaisRo(idInventario, nrNotaFiscalRo) {
            return this.http.get("".concat(this.BASE_URL, "/logistica/estoque/inventario/").concat(idInventario, "/notas-fiscais"), {
              params: {
                nrNotaFiscalRo: nrNotaFiscalRo
              },
              observe: 'response'
            });
          }
        }, {
          key: "getMateriaisNotasFiscaisRo",
          value: function getMateriaisNotasFiscaisRo(idInventario, notaFiscalRo) {
            return this.http.get("".concat(this.BASE_URL, "/logistica/estoque/inventario/").concat(idInventario, "/nota-fiscal/").concat(notaFiscalRo), {
              observe: 'response'
            });
          }
        }, {
          key: "salvarNotasFiscaisRo",
          value: function salvarNotasFiscaisRo(idInventario, notasFiscaisRo, matriculaAuditor) {
            return this.http.put("".concat(this.BASE_URL, "/logistica/estoque/inventario/").concat(idInventario, "/notas-fiscais"), {
              notasFiscaisRo: notasFiscaisRo,
              matriculaAuditor: matriculaAuditor
            }, {
              observe: 'response'
            });
          }
        }, {
          key: "getInfoInventarioRotativo",
          value: function getInfoInventarioRotativo(idInventario, cdMaterial) {
            return this.http.get("".concat(this.BASE_URL, "/logistica/estoque/inventario-rotativo/").concat(idInventario, "/material/").concat(cdMaterial), {
              observe: 'response'
            });
          }
        }, {
          key: "getPerfil",
          value: function getPerfil() {
            var matricula = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            return this.http.get("".concat(this.BASE_URL, "/logistica/estoque/inventario/usuarios/").concat(matricula, "/perfis/controle-acesso"));
          }
        }, {
          key: "getTotal",
          value: function getTotal(idInventario) {
            return this.http.get("".concat(this.BASE_URL, "/logistica/estoque/inventarios/").concat(idInventario, "/resultado"), {
              observe: 'response'
            });
          }
        }]);

        return LogisticaEstoquePainelInventarioInventarioListaService;
      }();

      LogisticaEstoquePainelInventarioInventarioListaService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      LogisticaEstoquePainelInventarioInventarioListaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], LogisticaEstoquePainelInventarioInventarioListaService);
      /***/
    },

    /***/
    "u/Fv":
    /*!**********************************************************************************************!*\
      !*** ./src/app/modules/logistica/estoque/painel-inventario/inventario/inventario.service.ts ***!
      \**********************************************************************************************/

    /*! exports provided: LogisticaEstoquePainelInventarioInventarioService */

    /***/
    function uFv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaEstoquePainelInventarioInventarioService", function () {
        return LogisticaEstoquePainelInventarioInventarioService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/core/date.service */
      "Rk3r");

      var LogisticaEstoquePainelInventarioInventarioService = /*#__PURE__*/function () {
        function LogisticaEstoquePainelInventarioInventarioService(http, dateService) {
          _classCallCheck(this, LogisticaEstoquePainelInventarioInventarioService);

          this.http = http;
          this.dateService = dateService;
          this.BASE_URL = "https://crm360.monterrey.com.bo/api";
        }

        _createClass(LogisticaEstoquePainelInventarioInventarioService, [{
          key: "getInventario",
          value: function getInventario(params) {
            return this.http.get("".concat(this.BASE_URL, "/logistica/estoque/inventarios"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "getClassesInventario",
          value: function getClassesInventario(idInventario) {
            return this.http.get("".concat(this.BASE_URL, "/logistica/estoque/inventarios/classes/").concat(idInventario), {
              observe: 'response'
            });
          }
        }, {
          key: "getEmpresas",
          value: function getEmpresas() {
            return this.http.get("".concat(this.BASE_URL, "/common/empresas"));
          }
        }, {
          key: "getDepositos",
          value: function getDepositos(idEmpresa) {
            return this.http.get("".concat(this.BASE_URL, "/common/depositos/").concat(idEmpresa));
          }
        }, {
          key: "getLinhas",
          value: function getLinhas() {
            return this.http.get("".concat(this.BASE_URL, "/common/linhas"));
          }
        }, {
          key: "getClasses",
          value: function getClasses(descricaoLinhas) {
            return this.http.get("".concat(this.BASE_URL, "/common/classes"), {
              params: {
                linhas: btoa(descricaoLinhas)
              }
            });
          }
        }, {
          key: "getMateriais",
          value: function getMateriais(descricaoLinhas, idClasses) {
            if (!idClasses) idClasses = '';
            return this.http.get("".concat(this.BASE_URL, "/common/materiais"), {
              params: {
                linhas: btoa(descricaoLinhas),
                classes: btoa(idClasses)
              }
            });
          }
        }]);

        return LogisticaEstoquePainelInventarioInventarioService;
      }();

      LogisticaEstoquePainelInventarioInventarioService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_3__["DateService"]
        }];
      };

      LogisticaEstoquePainelInventarioInventarioService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_3__["DateService"]])], LogisticaEstoquePainelInventarioInventarioService);
      /***/
    },

    /***/
    "vuU3":
    /*!***********************************************************************************************************************************!*\
      !*** ./src/app/modules/logistica/estoque/painel-inventario/inventario/materiais-notas-fiscais/materiais-notas-fiscais.service.ts ***!
      \***********************************************************************************************************************************/

    /*! exports provided: LogisticaEstoquePainelInventarioInventarioMateriaisNotasFiscaisService */

    /***/
    function vuU3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaEstoquePainelInventarioInventarioMateriaisNotasFiscaisService", function () {
        return LogisticaEstoquePainelInventarioInventarioMateriaisNotasFiscaisService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");

      var LogisticaEstoquePainelInventarioInventarioMateriaisNotasFiscaisService = /*#__PURE__*/function () {
        function LogisticaEstoquePainelInventarioInventarioMateriaisNotasFiscaisService(http) {
          _classCallCheck(this, LogisticaEstoquePainelInventarioInventarioMateriaisNotasFiscaisService);

          this.http = http;
          this.BASE_URL = "https://crm360.monterrey.com.bo/api";
        }

        _createClass(LogisticaEstoquePainelInventarioInventarioMateriaisNotasFiscaisService, [{
          key: "getNotasFiscais",
          value: function getNotasFiscais(idInventario, nrNotaFiscal, cdEmp) {
            return this.http.get("".concat(this.BASE_URL, "/logistica/estoque/inventarios/").concat(idInventario, "/notas-fiscais"), {
              params: {
                nrNotaFiscal: nrNotaFiscal,
                cdEmp: cdEmp
              },
              observe: 'response'
            });
          }
        }, {
          key: "getMateriaisNotasFiscais",
          value: function getMateriaisNotasFiscais(idInventario, notaFiscal) {
            return this.http.get("".concat(this.BASE_URL, "/logistica/estoque/inventarios/").concat(idInventario, "/nota-fiscal/").concat(notaFiscal), {
              observe: 'response'
            });
          }
        }, {
          key: "salvarNotasFiscais",
          value: function salvarNotasFiscais(idInventario, notasFiscais, matriculaAuditor) {
            return this.http.put("".concat(this.BASE_URL, "/logistica/estoque/inventarios/").concat(idInventario, "/notas-fiscais"), {
              notasFiscais: notasFiscais,
              matriculaAuditor: matriculaAuditor
            }, {
              observe: 'response'
            });
          }
        }, {
          key: "getInventario",
          value: function getInventario(cdInventario) {
            return this.http.get("".concat(this.BASE_URL, "/logistica/estoque/inventarios"), {
              params: {
                cdInventario: cdInventario
              },
              observe: 'response'
            });
          }
        }]);

        return LogisticaEstoquePainelInventarioInventarioMateriaisNotasFiscaisService;
      }();

      LogisticaEstoquePainelInventarioInventarioMateriaisNotasFiscaisService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      LogisticaEstoquePainelInventarioInventarioMateriaisNotasFiscaisService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], LogisticaEstoquePainelInventarioInventarioMateriaisNotasFiscaisService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=estoque-painel-inventario-painel-inventario-module-es5.js.map