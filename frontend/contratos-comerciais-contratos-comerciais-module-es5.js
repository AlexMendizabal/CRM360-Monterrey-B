(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contratos-comerciais-contratos-comerciais-module"], {
    /***/
    "252F":
    /*!**********************************************************************************************!*\
      !*** ./src/app/modules/comercial/gestao/contratos-comerciais/contratos-comerciais.module.ts ***!
      \**********************************************************************************************/

    /*! exports provided: ComercialGestaoContratosComerciaisModule */

    /***/
    function F(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialGestaoContratosComerciaisModule", function () {
        return ComercialGestaoContratosComerciaisModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _templates_templates_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../templates/templates.module */
      "9lCC");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-bootstrap/pagination */
      "6No5");
      /* harmony import */


      var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/tooltip */
      "978R");
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "ienR");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng2-currency-mask */
      "D5nU");
      /* harmony import */


      var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_9__);
      /* harmony import */


      var _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./../../../../shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./../../../../shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./../../../../shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var _cadastros_materiais_templates_templates_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./../../cadastros/materiais/templates/templates.module */
      "11Wi");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./formulario/formulario.component */
      "hgqU");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./lista/lista.component */
      "f/MI");
      /* harmony import */


      var _templates_clientes_clientes_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./templates/clientes/clientes.component */
      "lEDy");
      /* harmony import */


      var _formulario_modal_selecionar_selecionar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./formulario/modal/selecionar/selecionar.component */
      "fZd8");
      /* harmony import */


      var _formulario_modal_detalhes_cliente_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./formulario/modal/detalhes/cliente.component */
      "Pqti");
      /* harmony import */


      var _contratos_comerciais_contratos_comerciais_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../contratos-comerciais/contratos-comerciais.service */
      "pK9/");
      /* harmony import */


      var _contratos_comerciais_routing_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./contratos-comerciais-routing.module */
      "MTwO");
      /* harmony import */


      var _formulario_modal_detalhes_cliente_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./formulario/modal/detalhes/cliente.service */
      "tnBs"); // ngx-bootstrap
      // ng-select
      // ng2-currency-mask
      // PNotify
      // Modules
      // Components
      // Services


      var ComercialGestaoContratosComerciaisModule = function ComercialGestaoContratosComerciaisModule() {
        _classCallCheck(this, ComercialGestaoContratosComerciaisModule);
      };

      ComercialGestaoContratosComerciaisModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_lista_lista_component__WEBPACK_IMPORTED_MODULE_16__["ComercialGestaoContratosComerciaisListaComponent"], _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_15__["ComercialGestaoContratosComerciaisFormularioComponent"], _templates_clientes_clientes_component__WEBPACK_IMPORTED_MODULE_17__["ComercialGestaoContratosComerciaisFormularioTemplateClientesComponent"], _formulario_modal_selecionar_selecionar_component__WEBPACK_IMPORTED_MODULE_18__["ComercialGestaoContratosComerciaisFormularioModalSelecionarComponent"], _formulario_modal_detalhes_cliente_component__WEBPACK_IMPORTED_MODULE_19__["ComercialGestaoContratosComerciaisFormularioModalDetalhesComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"].forRoot(), ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"], ng2_currency_mask__WEBPACK_IMPORTED_MODULE_9__["CurrencyMaskModule"], _contratos_comerciais_routing_module__WEBPACK_IMPORTED_MODULE_21__["ComercialGestaoContratosComerciaisRoutingModule"], _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"], _shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_11__["TemplatesModule"], _templates_templates_module__WEBPACK_IMPORTED_MODULE_1__["ComercialTemplatesModule"], _cadastros_materiais_templates_templates_module__WEBPACK_IMPORTED_MODULE_13__["ComercialCadastrosMateriaisTemplatesModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsDatepickerModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_14__["ModalModule"].forRoot()],
        entryComponents: [_formulario_modal_selecionar_selecionar_component__WEBPACK_IMPORTED_MODULE_18__["ComercialGestaoContratosComerciaisFormularioModalSelecionarComponent"], _formulario_modal_detalhes_cliente_component__WEBPACK_IMPORTED_MODULE_19__["ComercialGestaoContratosComerciaisFormularioModalDetalhesComponent"]],
        exports: [_formulario_modal_selecionar_selecionar_component__WEBPACK_IMPORTED_MODULE_18__["ComercialGestaoContratosComerciaisFormularioModalSelecionarComponent"], _formulario_modal_detalhes_cliente_component__WEBPACK_IMPORTED_MODULE_19__["ComercialGestaoContratosComerciaisFormularioModalDetalhesComponent"]],
        providers: [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_14__["BsModalRef"], _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"], _contratos_comerciais_contratos_comerciais_service__WEBPACK_IMPORTED_MODULE_20__["ComercialGestaoContratosComerciaisService"], _formulario_modal_detalhes_cliente_service__WEBPACK_IMPORTED_MODULE_22__["ComercialGestaoContratosComerciaisFormularioModalDetalhesService"]]
      })], ComercialGestaoContratosComerciaisModule);
      /***/
    },

    /***/
    "7cUI":
    /*!****************************************************************************************************!*\
      !*** ./src/app/modules/comercial/gestao/contratos-comerciais/formulario/formulario.component.scss ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function cUI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2dlc3Rhby9jb250cmF0b3MtY29tZXJjaWFpcy9mb3JtdWxhcmlvL2Zvcm11bGFyaW8uY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "Ew1U":
    /*!********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/gestao/contratos-comerciais/lista/lista.component.html ***!
      \********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Ew1U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<app-header appTitle=\"Contratos comerciais\">\r\n  <button\r\n    type=\"button\"\r\n    (click)= 'onRefresh();'>\r\n    Atualizar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    [routerLink]=\"['../novo']\">\r\n    Adicionar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onFilter()\"\r\n    [disabled]=\"!form.valid\"\r\n  >\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\r\n  <div class=\"row\" #scrollToFilter>\r\n    <div class=\"col\">\r\n      <advanced-filter #scrollToFilter>\r\n        <form [formGroup]=\"form\" autocomplete=\"off\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-2\">\r\n              <label for=\"dataInicial\">Data inicial vigência</label>\r\n              <input\r\n                class=\"form-control\"\r\n                id=\"dataInicial\"\r\n                type=\"text\"\r\n                bsDatepicker\r\n                [bsConfig]=\"bsConfig\"\r\n                formControlName=\"dataInicial\"\r\n                [ngClass]=\"onFieldError('dataInicial') + ' ' + onFieldRequired('dataInicial')\">\r\n                <invalid-form-control [show]=\"onFieldInvalid('dataInicial') == 'required'\" message=\"Data Inicial é obrigatório.\"></invalid-form-control>\r\n            </div>\r\n            <div class=\"form-group col-lg-2\">\r\n              <label for=\"dataFinal\">Data final vigência</label>\r\n              <input\r\n                class=\"form-control\"\r\n                id=\"dataFinal\"\r\n                type=\"text\"\r\n                bsDatepicker\r\n                [bsConfig]=\"bsConfig\"\r\n                formControlName=\"dataFinal\"\r\n                [ngClass]=\"onFieldError('dataFinal') + ' ' + onFieldRequired('dataFinal')\">\r\n                <invalid-form-control [show]=\"onFieldInvalid('dataFinal') == 'required'\" message=\"Data Final é obrigatório.\"></invalid-form-control>\r\n            </div>\r\n            <div class=\"form-group col-lg-4\">\r\n              <label for=\"nomeContrato\">Nome Contrato</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"nomeContrato\"\r\n                formControlName=\"nomeContrato\"\r\n                placeholder=\"DIGITE...\"\r\n              >\r\n            </div>\r\n            <div class=\"form-group col-lg-3 mb-2 mb-md-0\">\r\n              <label for=\"situacoes\">Situação</label>\r\n              <ng-select\r\n                [closeOnSelect]=\"true\"\r\n                [items]=\"situacoes\"\r\n                [searchable]=\"true\"\r\n                [clearable]=\"false\"\r\n                formControlName=\"situacao\"\r\n                labelForId=\"situacao\"\r\n                bindLabel=\"nomeSituacao\"\r\n                bindValue=\"codSituacao\">\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"form-group col-lg-1 mb-2 mb-md-0\">\r\n              <label for=\"registros\">Registros</label>\r\n              <select\r\n                class=\"form-control\"\r\n                id=\"registros\"\r\n                formControlName=\"registros\">\r\n                <option>25</option>\r\n                <option>50</option>\r\n                <option>100</option>\r\n                <option>200</option>\r\n                <option>300</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-4\">\r\n              <label for=\"cliente\">Cliente</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"cliente\"\r\n                formControlName=\"cliente\"\r\n                placeholder=\"DIGITE...\"\r\n                >\r\n              <!-- <comercial-ciclo-vendas-cotacoes-formulario-template-clientes\r\n                [acessoClientes]=\"permissoesAcesso.acessoClientes\"\r\n                [codCliente]=\"form.value.codCliente\"\r\n                [asFormField]=\"false\"\r\n                [setErrors]=\"codClientErrors\"\r\n                (onChange)=\"onChangeCliente($event, 'user')\"\r\n                (onLoad)=\"onLoadCliente($event)\">\r\n              </comercial-ciclo-vendas-cotacoes-formulario-template-clientes> -->\r\n            </div>\r\n            <div class=\"form-group col-lg-4 mb-lg-0\">\r\n              <label for=\"carteira\">Carteira</label>\r\n              <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"false\"\r\n              [items]=\"carteira\"\r\n              formControlName=\"carteira\"\r\n              [virtualScroll]=\"true\"\r\n              labelForId=\"carteira\"\r\n              bindLabel=\"nome\"\r\n              bindValue=\"id\"\r\n              [loading]=\"materiaisLoader\"\r\n              loadingText=\"Carregando...\"\r\n              [readonly]='profile.vendedor && !profile.gestor'>\r\n          </ng-select>\r\n            </div>\r\n            <div class=\"form-group col-lg-2\">\r\n              <label for=\"codLinha\">Linha</label>\r\n              <ng-select\r\n                [searchable]=\"true\"\r\n                [clearable]=\"false\"\r\n                [closeOnSelect]=\"true\"\r\n                [items]=\"linhas\"\r\n                formControlName=\"codLinha\"\r\n                [virtualScroll]=\"true\"\r\n                labelForId=\"codLinha\"\r\n                bindLabel=\"descricao\"\r\n                bindValue=\"id\"\r\n                placeholder=\"SELECIONE...\"\r\n                (change)=\"onChangeLinha($event.id)\">\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"form-group col-lg-2\">\r\n              <label for=\"codClasse\">Classe</label>\r\n              <ng-select\r\n                [searchable]=\"true\"\r\n                [clearable]=\"false\"\r\n                [closeOnSelect]=\"true\"\r\n                [items]=\"filteredClasses\"\r\n                formControlName=\"codClasse\"\r\n                [virtualScroll]=\"true\"\r\n                labelForId=\"codClasse\"\r\n                bindLabel=\"nomeClasse\"\r\n                bindValue=\"idClasse\"\r\n                placeholder=\"SELECIONE...\"\r\n                (change)=\"onChangeClasse($event.idClasse)\">\r\n              </ng-select>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-4\">\r\n              <label for=\"codMaterial\">Material</label>\r\n              <ng-select\r\n                [searchable]=\"true\"\r\n                [clearable]=\"false\"\r\n                [items]=\"materiais\"\r\n                [closeOnSelect]=\"true\"\r\n                formControlName=\"codMaterial\"\r\n                [virtualScroll]=\"true\"\r\n                labelForId=\"codMaterial\"\r\n                bindLabel=\"codigoDescricaoMaterial\"\r\n                bindValue=\"codigoMaterial\"\r\n                placeholder=\"SELECIONE...\"\r\n                [loading]=\"materiaisLoader\"\r\n                loadingText=\"Carregando...\">\r\n              </ng-select>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </advanced-filter>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <subtitles\r\n        [data]=\"subtitles\"\r\n        [show]=\"dadosPagination.length > 0 && !dadosEmpty\">\r\n      </subtitles>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div [ngClass]=\"{'col': !showDetailPanel, 'col-5 pr-0': showDetailPanel}\">\r\n\r\n      <custom-table [config]=\"tableConfig\" *ngIf=\"dadosPagination.length > 0 && !dadosEmpty\">\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n            <th>Nome Contrato</th>\r\n            <th >Data Inicial</th>\r\n            <th >Data Final</th>\r\n            <th >Situação</th>\r\n            <th  [hidden]=\"showDetailPanel\">Quem cadastrou</th>\r\n            <th  [hidden]=\"showDetailPanel\">Total de toneladas</th>\r\n            <th ></th>\r\n            <th ></th>\r\n            <th ></th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <!-- [class.table-active]=\"item.id == enderecoSelecionado.id\" -->\r\n          <tr *ngFor=\"let item of dadosPagination; let i = index\" >\r\n            <td\r\n              class=\"hover\"\r\n              [ngClass]=\"classStatusBorder(item)\"\r\n              (click)=\"onDetails(item)\">\r\n              {{ item.nomeContrato | uppercase }}\r\n            </td>\r\n            <td\r\n              class=\"hover\"\r\n              (click)=\"onDetails(item)\">\r\n              {{ item.dataInicialVigencia | date: 'dd/MM/yyyy' }}\r\n            </td>\r\n            <td\r\n              class=\"hover\"\r\n              (click)=\"onDetails(item)\">\r\n              {{ item.dataFinalVigencia | date: 'dd/MM/yyyy' }}\r\n            </td>\r\n            <td\r\n              class=\"hover\"\r\n              (click)=\"onDetails(item)\">\r\n              {{ item.nomeSituacao | uppercase }}\r\n            </td>\r\n            <td\r\n              class=\"hover\"\r\n              (click)=\"onDetails(item)\"\r\n              [hidden]=\"showDetailPanel\">\r\n              {{ item.nomeUsuario | uppercase }}\r\n            </td>\r\n            <td\r\n              class=\"hover\"\r\n              (click)=\"onDetails(item)\"\r\n              [hidden]=\"showDetailPanel\">\r\n              {{ item.qtdeMaximaConsumo }} t\r\n            </td>\r\n            <td>\r\n              <!--  -->\r\n              <span class=\"mr-3\" tooltip=\"Aprovar\" placement=\"left\" container=\"body\" [hidden]=\"showDetailPanel\" *ngIf=\"profile.gestor && profile.vendedor && item.codSituacao == 2\"> <!-- <*ngIf=\"lista.codSituacao == 3\"> -->\r\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onAprovar(item)\">\r\n                  <i class=\" text-success fas fa-thumbs-up\"></i>\r\n                </button>\r\n              </span>\r\n            </td>\r\n            <td >\r\n              <!-- *ngIf=\"profile.gestor && profile.vendedor\" -->\r\n              <span class=\"mr-3\" tooltip=\"Reprovar\" placement=\"left\" container=\"body\" [hidden]=\"showDetailPanel\" *ngIf=\"profile.gestor && profile.vendedor && item.codSituacao == 2\"> <!-- <*ngIf=\"lista.codSituacao == 3\"> -->\r\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"openModalReprovar(reprovar); setFormReprovar(item);\">\r\n                  <i class=\" text-danger fas fa-thumbs-down\"></i>\r\n                </button>\r\n              </span>\r\n\r\n              <!-- <span class=\"mr-3\" tooltip=\"Contrato Reprovado\" placement=\"left\" container=\"body\" [hidden]=\"showDetailPanel\" *ngIf=\"(!profile.gestor && profile.vendedor || profile.gestor && profile.vendedor) && item.codSituacao == 3\">\r\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"openModalReprovar(reprovar); setFormReprovar(item);\">\r\n                  <i class=\" text-danger fas fa-thumbs-down\"></i>\r\n                </button>\r\n              </span> -->\r\n            </td>\r\n            <td>\r\n              <span class=\"mr-3\" tooltip=\"Editar\" placement=\"left\" container=\"body\" [hidden]=\"showDetailPanel\" *ngIf=\"(item.codSituacao == 3 || item.codSituacao == 1) && profile.vendedor && profile.gestor\">\r\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onEdit(item)\">\r\n                  <i class=\"fas fa-edit\"></i>\r\n                </button>\r\n              </span>\r\n\r\n              <span   tooltip=\"Visualizar\" placement=\"left\" container=\"body\" [hidden]=\"showDetailPanel\" *ngIf=\"item.codSituacao != 3 && item.codSituacao != 1\">\r\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onEdit(item)\">\r\n                  <i class=\"fas fa-search\"></i>\r\n                </button>\r\n              </span>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n      <empty-result\r\n        message=\"Nenhuma informação encontrada\"\r\n        class=\"my-3\"\r\n        *ngIf=\"dadosEmpty\">\r\n      </empty-result>\r\n      <div class=\"d-flex justify-content-center mt-3\" *ngIf=\"totalItems > itemsPerPage && dadosLoaded\">\r\n        <pagination\r\n          [maxSize]=\"maxSize\"\r\n          [(totalItems)]=\"totalItems\"\r\n          (pageChanged)=\"onPageChanged($event)\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPage\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\">\r\n        </pagination>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-7\" [hidden]=\"!showDetailPanel\">\r\n      <detail-panel>\r\n        <custom-table\r\n        *ngIf=\"detailPanelCliente.length > 0\"\r\n        >\r\n        <div class=\"mtc-title mb-2\">Clientes</div>\r\n          <ng-template #thead let-thead >\r\n            <tr>\r\n              <th scope=\"col\" class=\"text-center\">Código Cliente</th>\r\n              <th scope=\"col\" class=\"text-center\">Razão Social</th>\r\n\r\n            </tr>\r\n          </ng-template>\r\n          <ng-template #tbody let-tbody>\r\n            <tr *ngFor='let item of detailPanelCliente'>\r\n              <td class=\"text-center\">{{ item.codCliente}}</td>\r\n              <td class=\"text-center\">{{ item.razaoSocial }}</td>\r\n            </tr>\r\n          </ng-template>\r\n        </custom-table>\r\n\r\n        <custom-table\r\n        *ngIf=\"detailPanelMateriais.length > 0\"\r\n        >\r\n        <div class=\"mtc-title mb-2\">Materiais</div>\r\n          <ng-template #thead let-thead >\r\n            <tr>\r\n              <th scope=\"col\" class=\"text-center\">Código Material</th>\r\n              <th scope=\"col\" class=\"text-center\">Nome</th>\r\n              <th scope=\"col\">Linha</th>\r\n              <th scope=\"col\" class=\"text-center\">Classe</th>\r\n              <th scope=\"col\" class=\"text-center\">Total Toneladas</th>\r\n            </tr>\r\n          </ng-template>\r\n          <ng-template #tbody let-tbody>\r\n            <tr *ngFor='let item of detailPanelMateriais'>\r\n              <td class=\"text-center\">{{ item.codMaterial }}</td>\r\n              <td class=\"text-center\">{{ item.nomeMaterial }}</td>\r\n              <td class=\"text-center\">{{ item.linha }}</td>\r\n              <td class=\"text-center\">{{ item.classe }}</td>\r\n              <td class=\"text-center\">{{ item.qtdeMaximaConsumo }}</td>\r\n            </tr>\r\n          </ng-template>\r\n        </custom-table>\r\n\r\n        <div class=\"col-12\" *ngFor='let item of detailPanelData'>\r\n          <div *ngIf = \"item.codSituacao == 3\">\r\n            <br>\r\n            <hr>\r\n            <div class=\"mtc-title mb-2 text-center\">Motivo da Reprovação</div>\r\n              <p class=\"text-center\"> {{ item.motivoReprovacao | uppercase }}</p>\r\n          </div>\r\n        </div>\r\n      </detail-panel>\r\n    </div>\r\n  </div>\r\n\r\n\r\n<ng-template #reprovar>\r\n\r\n  <div>\r\n    <div class=\"modal-body\">\r\n\r\n        <button type=\"button\" class=\"close pull-right\" (click)=\"closeModal(reprovar)\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n        <div class=\"mtc-title\">Motivo da Reprovação</div>\r\n        <form [formGroup]=\"formReprovar\" autocomplete=\"off\" #scrollToFormOnTop>\r\n            <div class=\"form-group\">\r\n              <textarea\r\n                class=\"form-control\"\r\n                id=\"text-area\"\r\n                rows=\"3\"\r\n                formControlName=\"descMotivo\"\r\n                [readonly]=\"!profile.gestor && profile.vendedor\">\r\n            </textarea>\r\n            </div>\r\n          </form>\r\n        <div class=\"row mt-2\">\r\n          <div class=\"col\" style=\"text-align: center;\" >\r\n\r\n          <button\r\n            *ngIf=\"profile.gestor && profile.vendedor\"\r\n            type=\"button\"\r\n            class=\"btn btn-success\"\r\n            (click)=\"modalRef.hide(); onReprovar();\"\r\n            >\r\n            Salvar\r\n          </button>\r\n\r\n        </div>\r\n      </div>\r\n\r\n  </div>\r\n</div>\r\n</ng-template>\r\n\r\n</app-body>\r\n\r\n";
      /***/
    },

    /***/
    "IQgH":
    /*!******************************************************************************************!*\
      !*** ./src/app/modules/comercial/gestao/contratos-comerciais/lista/lista.component.scss ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function IQgH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2dlc3Rhby9jb250cmF0b3MtY29tZXJjaWFpcy9saXN0YS9saXN0YS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "Ks30":
    /*!******************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/gestao/contratos-comerciais/formulario/modal/detalhes/cliente.component.html ***!
      \******************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Ks30(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"modal-content\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"mtc-title mb-0 my-auto\">DETALLES DEL CLIENTE</h4>\r\n    <button type=\"button\" class=\"close\" (click)=\"onClose()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div class=\"row\" *ngIf=\"cliente\">\r\n      <div class=\"col\">\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-lg-6\" *ngIf=\"cliente.tipoPessoa == 'F'\">\r\n            <label>CPF</label>\r\n            <div *ngIf=\"cliente.cpf == null\">NÃO INFORMADO</div>\r\n            <div *ngIf=\"cliente.cpf != null\">{{ cliente.cpf }}</div>\r\n          </div>\r\n          <div class=\"form-group col-lg-6\" *ngIf=\"cliente.tipoPessoa == 'J'\">\r\n            <label>CNPJ</label>\r\n            <div *ngIf=\"cliente.cnpj == null\">NÃO INFORMADO</div>\r\n            <div *ngIf=\"cliente.cnpj != null\">{{ cliente.cnpj }}</div>\r\n          </div>\r\n          <div class=\"form-group col-lg-6\">\r\n            <label>Nome fantasia</label>\r\n            <div *ngIf=\"cliente.nomeFantasia == null\">NÃO INFORMADO</div>\r\n            <div *ngIf=\"cliente.nomeFantasia != null\">{{ cliente.nomeFantasia }}</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col\">\r\n            <label>Razão social</label>\r\n            <div *ngIf=\"cliente.razaoSocial == null\">NÃO INFORMADO</div>\r\n            <div *ngIf=\"cliente.razaoSocial != null\">{{ cliente.razaoSocial }}</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col\">\r\n            <label>Endereço</label>\r\n            <div *ngIf=\"cliente.endereco == null\">NÃO INFORMADO</div>\r\n            <div *ngIf=\"cliente.endereco != null\">{{ cliente.endereco }}</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-lg-8\">\r\n            <label>Bairro</label>\r\n            <div *ngIf=\"cliente.bairro == null\">NÃO INFORMADO</div>\r\n            <div *ngIf=\"cliente.bairro != null\">{{ cliente.bairro }}</div>\r\n          </div>\r\n          <div class=\"form-group col-lg-4\">\r\n            <label>CEP</label>\r\n            <div *ngIf=\"cliente.cep == null\">NÃO INFORMADO</div>\r\n            <div *ngIf=\"cliente.cep != null\">{{ cliente.cep }}</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-lg-8\">\r\n            <label>Cidade</label>\r\n            <div *ngIf=\"cliente.cidade == null\">NÃO INFORMADO</div>\r\n            <div *ngIf=\"cliente.cidade != null\">{{ cliente.cidade }} / {{ cliente.uf }}</div>\r\n          </div>\r\n          <div class=\"form-group col-lg-4\">\r\n            <label>Segurado</label>\r\n            <div *ngIf=\"cliente.segurado != ''\">SIM</div>\r\n            <div *ngIf=\"cliente.segurado == ''\">NÃO</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-lg-6\">\r\n            <label>Vendedor</label>\r\n            <div *ngIf=\"cliente.vendedor == null\">NÃO INFORMADO</div>\r\n            <div *ngIf=\"cliente.vendedor != null\">{{ cliente.vendedor }}</div>\r\n          </div>\r\n          <div class=\"form-group col-lg-6\">\r\n            <label>Escritório</label>\r\n            <div *ngIf=\"cliente.escritorio == null\">NÃO INFORMADO</div>\r\n            <div *ngIf=\"cliente.escritorio != null\">{{ cliente.escritorio }}</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-lg-4\" *ngIf=\"cliente.codSAP != '' && cliente.codSAP != null\">\r\n            <label>Código DBA</label>\r\n            <div>{{ cliente.codSAP }}</div>\r\n          </div>\r\n          <div class=\"form-group col-lg-4\" *ngIf=\"cliente.escritorioDba != '' && cliente.escritorioDba != null\">\r\n            <label>Escritório</label>\r\n            <div>{{ cliente.escritorioDba }}</div>\r\n          </div>\r\n          <div class=\"form-group col-lg-4\" *ngIf=\"cliente.ultimaCompraDba != '' && cliente.ultimaCompraDba != null\">\r\n            <label>Última compra</label>\r\n            <div>{{ cliente.ultimaCompraDba }}</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "LzM3":
    /*!*********************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/gestao/contratos-comerciais/formulario/modal/selecionar/selecionar.component.scss ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function LzM3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "button[disabled] {\n  cursor: no-drop;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21lcmNpYWwvZ2VzdGFvL2NvbnRyYXRvcy1jb21lcmNpYWlzL2Zvcm11bGFyaW8vbW9kYWwvc2VsZWNpb25hci9zZWxlY2lvbmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9jb21lcmNpYWwvZ2VzdGFvL2NvbnRyYXRvcy1jb21lcmNpYWlzL2Zvcm11bGFyaW8vbW9kYWwvc2VsZWNpb25hci9zZWxlY2lvbmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uW2Rpc2FibGVkXXtcclxuICBjdXJzb3I6IG5vLWRyb3A7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "MTwO":
    /*!******************************************************************************************************!*\
      !*** ./src/app/modules/comercial/gestao/contratos-comerciais/contratos-comerciais-routing.module.ts ***!
      \******************************************************************************************************/

    /*! exports provided: ComercialGestaoContratosComerciaisRoutingModule */

    /***/
    function MTwO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialGestaoContratosComerciaisRoutingModule", function () {
        return ComercialGestaoContratosComerciaisRoutingModule;
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


      var _guards_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./guards/formulario-resolver.guard */
      "xOuB");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./lista/lista.component */
      "f/MI");
      /* harmony import */


      var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./formulario/formulario.component */
      "hgqU"); // Guards
      // import { FormDeactivateGuard } from 'src/app/guards/form-deactivate.guard';
      // Components


      var routes = [{
        path: '',
        children: [{
          path: 'lista',
          component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_4__["ComercialGestaoContratosComerciaisListaComponent"]
        }, {
          path: '',
          redirectTo: 'lista',
          pathMatch: 'full'
        }, {
          path: 'novo',
          component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_5__["ComercialGestaoContratosComerciaisFormularioComponent"],
          resolve: {
            detalhes: _guards_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_3__["ComercialoGestaoContratosComerciaisFormularioResolverGuard"]
          }
        }, {
          path: 'editar/:id',
          component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_5__["ComercialGestaoContratosComerciaisFormularioComponent"],
          resolve: {
            detalhes: _guards_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_3__["ComercialoGestaoContratosComerciaisFormularioResolverGuard"]
          }
        }]
      }];

      var ComercialGestaoContratosComerciaisRoutingModule = function ComercialGestaoContratosComerciaisRoutingModule() {
        _classCallCheck(this, ComercialGestaoContratosComerciaisRoutingModule);
      };

      ComercialGestaoContratosComerciaisRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ComercialGestaoContratosComerciaisRoutingModule);
      /***/
    },

    /***/
    "Pqti":
    /*!**************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/gestao/contratos-comerciais/formulario/modal/detalhes/cliente.component.ts ***!
      \**************************************************************************************************************/

    /*! exports provided: ComercialGestaoContratosComerciaisFormularioModalDetalhesComponent */

    /***/
    function Pqti(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialGestaoContratosComerciaisFormularioModalDetalhesComponent", function () {
        return ComercialGestaoContratosComerciaisFormularioModalDetalhesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_cliente_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./cliente.component.html */
      "Ks30");
      /* harmony import */


      var _cliente_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cliente.component.scss */
      "sMXb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI"); // ngx-bootstrap


      var ComercialGestaoContratosComerciaisFormularioModalDetalhesComponent = /*#__PURE__*/function () {
        function ComercialGestaoContratosComerciaisFormularioModalDetalhesComponent(bsModalRef) {
          _classCallCheck(this, ComercialGestaoContratosComerciaisFormularioModalDetalhesComponent);

          this.bsModalRef = bsModalRef;
        }

        _createClass(ComercialGestaoContratosComerciaisFormularioModalDetalhesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onClose",
          value: function onClose() {
            this.bsModalRef.hide();
          }
        }]);

        return ComercialGestaoContratosComerciaisFormularioModalDetalhesComponent;
      }();

      ComercialGestaoContratosComerciaisFormularioModalDetalhesComponent.ctorParameters = function () {
        return [{
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"]
        }];
      };

      ComercialGestaoContratosComerciaisFormularioModalDetalhesComponent.propDecorators = {
        cliente: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['cliente']
        }]
      };
      ComercialGestaoContratosComerciaisFormularioModalDetalhesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-gestao-contratos-comerciais-formulario-modal-detalhes',
        template: _raw_loader_cliente_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cliente_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"]])], ComercialGestaoContratosComerciaisFormularioModalDetalhesComponent);
      /***/
    },

    /***/
    "Q2P+":
    /*!******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/gestao/contratos-comerciais/formulario/formulario.component.html ***!
      \******************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Q2P(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen\r\n  *ngIf=\"loaderFullScreen\"\r\n></loader-spinner-full-screen>\r\n<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<app-header [appTitle]=\"appTitle\">\r\n  <button\r\n    *ngIf=\"visualizar\"\r\n    type=\"button\"\r\n    (click)=\"onCancel()\"\r\n    [disabled]=\"submittingForm\"\r\n  >\r\n    Voltar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onCancel()\"\r\n    [disabled]=\"submittingForm\"\r\n    [hidden]=\"visualizar\"\r\n  >\r\n    Cancelar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onSubmit(2)\"\r\n    [disabled]=\"!form.valid || submittingForm || assocMateriais.value.length == 0\"\r\n    [hidden]=\"visualizar\"\r\n    >\r\n    Enviar para Aprovação\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onSubmit(1)\"\r\n    [disabled]=\"!form.valid || submittingForm || assocMateriais.value.length == 0\"\r\n    [hidden]=\"visualizar\"\r\n  >\r\n    Salvar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\r\n  <div class=\"ml-5 mr-5\">\r\n    <div class=\"col-12\">\r\n      <form [formGroup]=\"form\" autocomplete=\"off\">\r\n        <div class=\"mtc-title mb-2\">\r\n          Tela de cadastro de contratos comerciais\r\n        </div>\r\n        <hr />\r\n        <div class=\"row\">\r\n          <div class=\"form-group col-lg-6\">\r\n            <label for=\"codPeso\">Tipo de Serviço</label>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"false\"\r\n              [items]=\"tipoServico\"\r\n              [virtualScroll]=\"true\"\r\n              [loading]=\"materiaisLoader\"\r\n              [readonly]=\"visualizar\"\r\n              formControlName=\"codTipoServico\"\r\n              labelForId=\"codTipoServico\"\r\n              bindLabel=\"nomeTipoServico\"\r\n              bindValue=\"codTipoServico\"\r\n              loadingText=\"Carregando...\"\r\n              placeholder=\"Selecione...\"\r\n              (change)=\"onChangeServico()\"\r\n              [ngClass]=\"\r\n                onFieldError('codTipoServico') +\r\n                ' ' +\r\n                onFieldRequired('codTipoServico')\r\n              \"\r\n            >\r\n            </ng-select>\r\n            <invalid-form-control\r\n              [show]=\"onFieldInvalid('codTipoServico')\"\r\n              message=\"Tipo de Serviço é obrigatório.\"\r\n            ></invalid-form-control>\r\n          </div>\r\n          <div class=\"form-group col-lg-6\">\r\n            <label for=\"codEmpresa\">Empresa</label>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"false\"\r\n              [items]=\"empresas\"\r\n              [readonly]=\"visualizar\"\r\n              [virtualScroll]=\"true\"\r\n              placeholder=\"Selecione...\"\r\n              formControlName=\"codEmpresa\"\r\n              labelForId=\"codEmpresa\"\r\n              bindLabel=\"nomeEmpresa\"\r\n              bindValue=\"idEmpresa\"\r\n              [ngClass]=\"onFieldError('codEmpresa') + ' ' + onFieldRequired('codEmpresa')\">\r\n            </ng-select>\r\n            <invalid-form-control [show]=\"onFieldInvalid('codEmpresa')\" message=\"Empresa é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n\r\n          <div class=\"form-group col-lg-12\">\r\n            <div\r\n              class=\"mb-1 d-flex justify-content-between w-100\"\r\n              style=\"height: 19px\"\r\n            >\r\n              <label class=\"my-auto\" for=\"codCliente\">Cliente</label>\r\n              <div class=\"my-auto text-uppercase\" style=\"font-size: 11px\">\r\n                <a\r\n                  class=\"text-primary mr-2\"\r\n                  href=\"javascript:void(0)\"\r\n                  (click)=\"openModal(selecionarCliente)\"\r\n                >\r\n                  <strong>Selecionar</strong>\r\n                </a>\r\n                <span class=\"mx-2\" *ngIf=\"form.value.codCliente != null\"\r\n                  >|</span\r\n                >\r\n                <a\r\n                  *ngIf=\"form.value.codCliente != null\"\r\n                  class=\"text-primary mr-2\"\r\n                  href=\"javascript:void(0)\"\r\n                  (click)=\"onClienteDetalhes()\"\r\n                >\r\n                  <strong>Detalles</strong>\r\n                </a>\r\n              </div>\r\n            </div>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"codRazaoSocial\"\r\n              formControlName=\"codRazaoSocial\"\r\n              placeholder=\"Selecione...\"\r\n              [attr.disabled]=\"true\"\r\n            />\r\n          </div>\r\n\r\n          <div class=\"form-group col-lg-12\" *ngIf=\"grupoEconomico.length > 1\">\r\n            <label for=\"grupoEconomico\">Grupo Econômico</label>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [items]=\"grupoEconomico\"\r\n              [virtualScroll]=\"true\"\r\n              [multiple]=\"true\"\r\n              [loading]=\"loaderGrupoEconomico\"\r\n              [readonly]=\"visualizar\"\r\n              [closeOnSelect]=\"false\"\r\n              [clearSearchOnAdd]=\"true\"\r\n              formControlName=\"grupoEconomico\"\r\n              labelForId=\"grupoEconomico\"\r\n              bindValue=\"codCliente\"\r\n              bindLabel=\"codRazaoSocial\"\r\n              loadingText=\"Carregando Grupo Econômico...\"\r\n              placeholder=\"Selecione...\"\r\n              [ngClass]=\"\r\n                onFieldError('grupoEconomico') +\r\n                ' ' +\r\n                onFieldRequired('grupoEconomico')\r\n              \"\r\n            >\r\n            </ng-select>\r\n          </div>\r\n          <div class=\"form-group col-lg-12\">\r\n            <label for=\"enderecoEntrega\">Endereço de Entrega</label>\r\n            <ng-select\r\n              [items]=\"enderecos\"\r\n              formControlName=\"codEnderecoEntrega\"\r\n              [virtualScroll]=\"true\"\r\n              labelForId=\"codEnderecoEntrega\"\r\n              bindValue=\"id\"\r\n              bindLabel=\"enderecoAjustado\"\r\n              [loading]=\"loaderEnderecos\"\r\n              loadingText=\"Carregando Endereços...\"\r\n              [readonly]=\"visualizar\"\r\n              placeholder=\"Selecione...\"\r\n              [ngClass]=\"\r\n                onFieldError('codEnderecoEntrega') +\r\n                ' ' +\r\n                onFieldRequired('codEnderecoEntrega')\r\n              \"\r\n            >\r\n            </ng-select>\r\n          </div>\r\n\r\n          <div class=\"form-group col-lg-12\">\r\n            <label for=\"nomeContrato\">Nome do Contrato</label>\r\n            <input\r\n              [readonly]=\"visualizar\"\r\n              class=\"form-control\"\r\n              id=\"nomeContrato\"\r\n              type=\"text\"\r\n              formControlName=\"nomeContrato\"\r\n              placeholder=\"DIGITE...\"\r\n              [ngClass]=\"\r\n                onFieldError('nomeContrato') +\r\n                ' ' +\r\n                onFieldRequired('nomeContrato')\r\n              \"\r\n            />\r\n            <invalid-form-control\r\n              [show]=\"onFieldInvalid('nomeContrato') == 'required'\"\r\n              message=\"O nome do contrato é obrigatório.\"\r\n            ></invalid-form-control>\r\n          </div>\r\n\r\n          <div class=\"form-group col-lg-3\">\r\n            <label for=\"dataInicialContrato\">Data Início</label>\r\n            <input\r\n              class=\"form-control\"\r\n              id=\"dataInicialContrato\"\r\n              type=\"text\"\r\n              bsDatepicker\r\n              formControlName=\"dataInicialContrato\"\r\n              [readonly]=\"visualizar\"\r\n              [ngClass]=\"\r\n                onFieldError('dataInicialContrato') +\r\n                ' ' +\r\n                onFieldRequired('dataInicialContrato')\r\n              \"\r\n            />\r\n            <invalid-form-control\r\n              [show]=\"onFieldInvalid('dataInicialContrato')\"\r\n              message=\"Data Início é obrigatório.\"\r\n            ></invalid-form-control>\r\n          </div>\r\n\r\n          <div class=\"form-group col-lg-3\">\r\n            <label for=\"dataFinalContrato\">Data Final</label>\r\n            <input\r\n              class=\"form-control\"\r\n              id=\"dataFinalContrato\"\r\n              type=\"text\"\r\n              bsDatepicker\r\n              formControlName=\"dataFinalContrato\"\r\n              [readonly]=\"visualizar\"\r\n              [ngClass]=\"\r\n                onFieldError('dataFinalContrato') +\r\n                ' ' +\r\n                onFieldRequired('dataFinalContrato')\r\n              \"\r\n            />\r\n            <invalid-form-control\r\n              [show]=\"onFieldInvalid('dataFinalContrato')\"\r\n              message=\"Data Vigência é obrigatório.\"\r\n            ></invalid-form-control>\r\n          </div>\r\n\r\n          <div class=\"form-group col-lg-3\" *ngIf=\"!changeTipoServico\">\r\n            <label for=\"codPeso\">Quantidade Máxima</label>\r\n            <td class=\"text-center\" style=\"width: 12%\">\r\n              <input\r\n                class=\"form-control\"\r\n                id=\"codPeso\"\r\n                type=\"text\"\r\n                formControlName=\"codPeso\"\r\n                currencyMask\r\n                placeholder=\"0,000\"\r\n                [readonly]=\"visualizar\"\r\n                [options]=\"{\r\n                  align: 'left',\r\n                  prefix: '',\r\n                  thousands: '.',\r\n                  decimal: ',',\r\n                  precision: 3\r\n                }\"\r\n              />\r\n            </td>\r\n          </div>\r\n\r\n          <div class=\"form-group col-lg-3\" *ngIf=\"changeTipoServico\">\r\n            <label for=\"codPeso\">Quantidade Máxima</label>\r\n            <td class=\"text-center\" style=\"width: 12%\">\r\n              <input\r\n                class=\"form-control\"\r\n                id=\"codPeso\"\r\n                type=\"text\"\r\n                formControlName=\"codPeso\"\r\n                placeholder=\"0,000\"\r\n                [readonly]=\"visualizar\"\r\n                [ngClass]=\"\r\n                  onFieldError('codPeso') + ' ' + onFieldRequired('codPeso')\r\n                \"\r\n                currencyMask\r\n                [options]=\"{\r\n                  align: 'left',\r\n                  prefix: '',\r\n                  thousands: '.',\r\n                  decimal: ',',\r\n                  precision: 3\r\n                }\"\r\n              />\r\n            </td>\r\n            <invalid-form-control\r\n              [show]=\"onFieldInvalid('codPeso')\"\r\n              message=\"Quantidade Máxima é obrigatório.\"\r\n            ></invalid-form-control>\r\n          </div>\r\n\r\n          <div class=\"form-group col-lg-3\">\r\n            <label for=\"codSituacao\"\r\n              >Situação\r\n              <i\r\n                class=\"far fa-question-circle\"\r\n                [tooltip]=\"tooltipLabelTemplate\"\r\n              ></i\r\n            ></label>\r\n            <ng-select\r\n              type=\"text\"\r\n              [searchable]=\"true\"\r\n              [clearable]=\"false\"\r\n              [items]=\"situacoes\"\r\n              [virtualScroll]=\"true\"\r\n              [hideSelected]=\"true\"\r\n              [closeOnSelect]=\"true\"\r\n              placeholder=\"EM ABERTO\"\r\n              bindLabel=\"nomeSituacao\"\r\n              bindValue=\"codSituacao\"\r\n              formControlName=\"codSituacao\"\r\n              [readonly]=\"true\"\r\n              [ngClass]=\"\r\n                onFieldError('codSituacao') +\r\n                ' ' +\r\n                onFieldRequired('codSituacao')\r\n              \"\r\n            >\r\n            </ng-select>\r\n            <invalid-form-control\r\n              [show]=\"onFieldInvalid('codSituacao') == 'required'\"\r\n              message=\"Situação é obrigatória.\"\r\n            ></invalid-form-control>\r\n          </div>\r\n\r\n          <ng-template #tooltipLabelTemplate>\r\n            <p class=\"mt-3 mb-0\"><b>Caso Finalize o pedido em:</b></p>\r\n            <p class=\"mt-3 mb-0\"><b>Salvar - Situação: EM ABERTO</b></p>\r\n            <p class=\"mt-3 mb-0\">\r\n              <b>Enviar para Aprovação - Situação: AGUARDANDO APROVAÇÃO</b>\r\n            </p>\r\n            <p class=\"text-nowrap mb-0\"><br /><br /></p>\r\n          </ng-template>\r\n\r\n          <div class=\"form-group col-lg-3\">\r\n            <label for=\"codPeso\">Forma de pagamento</label>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"false\"\r\n              [items]=\"formaPagamento\"\r\n              formControlName=\"codFormaPagamento\"\r\n              [virtualScroll]=\"true\"\r\n              labelForId=\"codFormaPagamento\"\r\n              bindLabel=\"descricao\"\r\n              bindValue=\"codigo\"\r\n              [loading]=\"materiaisLoader\"\r\n              loadingText=\"Carregando...\"\r\n              [readonly]=\"visualizar\"\r\n              placeholder=\"Selecione...\"\r\n              [ngClass]=\"\r\n                onFieldError('codFormaPagamento') +\r\n                ' ' +\r\n                onFieldRequired('codFormaPagamento')\r\n              \"\r\n            >\r\n            </ng-select>\r\n            <invalid-form-control\r\n              [show]=\"onFieldInvalid('codFormaPagamento')\"\r\n              message=\"Forma de pagamento é obrigatório.\"\r\n            ></invalid-form-control>\r\n          </div>\r\n\r\n          <div class=\"form-group col-lg-3\">\r\n            <label for=\"codTipoFrete\">Frete</label>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"true\"\r\n              [items]=\"tipoFrete\"\r\n              formControlName=\"codTipoFrete\"\r\n              labelForId=\"codTipoFrete\"\r\n              bindLabel=\"descricao\"\r\n              bindValue=\"codigo\"\r\n              [loading]=\"materiaisLoader\"\r\n              loadingText=\"Carregando...\"\r\n              [readonly]=\"visualizar\"\r\n              placeholder=\"Selecione...\"\r\n            >\r\n            </ng-select>\r\n          </div>\r\n\r\n          <div class=\"form-group col-lg-3\" [hidden]=\"!changeTipoServico\">\r\n            <label for=\"codTipoFrete\">Preço Serviço APS</label>\r\n            <td class=\"text-center\" style=\"width: 12%\">\r\n              <input\r\n                class=\"form-control\"\r\n                id=\"precoAps\"\r\n                type=\"text\"\r\n                formControlName=\"precoAps\"\r\n                [readonly]=\"visualizar\"\r\n                currencyMask\r\n                [options]=\"{\r\n                  align: 'left',\r\n                  prefix: '',\r\n                  thousands: '.',\r\n                  decimal: ',',\r\n                  precision: 2\r\n                }\"\r\n              />\r\n            </td>\r\n          </div>\r\n          <div class=\"form-group col-lg-3\" [hidden]=\"!changeTipoServico\">\r\n            <label for=\"valorServico\">Preço Serviço CD</label>\r\n            <td class=\"text-center\" style=\"width: 12%\">\r\n              <input\r\n                class=\"form-control\"\r\n                id=\"valorServico\"\r\n                type=\"text\"\r\n                formControlName=\"valorServico\"\r\n                [readonly]=\"visualizar\"\r\n                currencyMask\r\n                [options]=\"{\r\n                  align: 'left',\r\n                  prefix: '',\r\n                  thousands: '.',\r\n                  decimal: ',',\r\n                  precision: 2\r\n                }\"\r\n                [ngClass]=\"\r\n                onFieldError('valorServico') +\r\n                ' ' +\r\n                onFieldRequired('valorServico')\r\n              \"\r\n              />\r\n              <invalid-form-control\r\n                [show]=\"onFieldInvalid('valorServico')\"\r\n                message=\"Preço Serviço CD é obrigatório.\"\r\n              ></invalid-form-control>\r\n            </td>\r\n          </div>\r\n        </div>\r\n        <hr />\r\n        <div class=\"col-lg-12\" formArrayName=\"anexos\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12 d-flex align-items-start\">\r\n              <div class=\"mtc-title mb-0\">Anexos</div>\r\n            </div>\r\n            <div class=\"col\">\r\n              <label\r\n                for=\"novoAnexo\"\r\n                class=\"d-flex justify-content-start align-items-center\"\r\n                style=\"cursor: pointer\"\r\n                [hidden]=\"visualizar\"\r\n              >\r\n                <p class=\"btn btn-sm btn-outline-primary m-0\">\r\n                  <i class=\"fas fa-plus\"></i>\r\n                  <span>Anexo</span>\r\n                </p>\r\n              </label>\r\n              <input\r\n                id=\"novoAnexo\"\r\n                type=\"file\"\r\n                (change)=\"appendFile($event.target.files)\"\r\n                class=\"d-none\"\r\n              />\r\n            </div>\r\n          </div>\r\n          <div class=\"row\" *ngIf=\"showAnexos && form.value.anexos.length > 0\">\r\n            <div class=\"col\">\r\n              <custom-table [config]=\"tableConfigAnexos\">\r\n                <ng-template #tbody let-tbody>\r\n                  <tr\r\n                    *ngFor=\"let anexo of anexos.controls; let i = index\"\r\n                    [formGroupName]=\"i\"\r\n                  >\r\n                    <td style=\"width: 90%\">\r\n                      {{ form.value.anexos[i].codAnexo }} -\r\n                      {{ form.value.anexos[i].nomeAnexo | uppercase }}\r\n                    </td>\r\n                    <td class=\"text-center\" style=\"width: 5%\">\r\n                      <a\r\n                        (click)=\"navegarAnexo(anexo)\"\r\n                        *ngIf=\"form.value.anexos[i].codAnexo != null\"\r\n                        target=\"_blank\"\r\n                        class=\"btn-icon-sm mx-2 text-black\"\r\n                        tooltip=\"visualizar\"\r\n                      >\r\n                        <i class=\"far fa-eye\"></i>\r\n                      </a>\r\n                    </td>\r\n                    <td class=\"text-center\" style=\"width: 5%\">\r\n                      <btn-icon\r\n                        icon=\"fas fa-trash\"\r\n                        size=\"small\"\r\n                        tooltip=\"Excluir\"\r\n                        (click)=\"\r\n                          onDeleteAnexo(form.value.anexos[i].codAnexo, i)\r\n                        \"\r\n                        [hidden]=\"visualizar\"\r\n                      >\r\n                      </btn-icon>\r\n                    </td>\r\n                  </tr>\r\n                </ng-template>\r\n              </custom-table>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\" *ngIf=\"showAnexos && form.value.anexos.length === 0\">\r\n            <div class=\"col\">\r\n              <message\r\n                icon=\"fas fa-exchange-alt\"\r\n                text=\"Nenhum documento encontrado\"\r\n              >\r\n              </message>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n\r\n    <div class=\"col-12\" *ngIf=\"!visualizar\">\r\n      <hr />\r\n      <div class=\"row mb-2\">\r\n        <div class=\"col mt-auto\">\r\n          <div class=\"mtc-title mb-0\">Pesquisa de materiais</div>\r\n        </div>\r\n        <div class=\"col\">\r\n          <div class=\"d-flex justify-content-end\">\r\n            <button\r\n              type=\"button\"\r\n              class=\"btn btn-sm btn-outline-secondary\"\r\n              (click)=\"onFilterMateriais()\"\r\n              [disabled]=\"!formMateriais.valid || searching === true \"\r\n              [hidden]=\"visualizar\"\r\n            >\r\n              <i class=\"fas fa-search\"></i>\r\n              <span>Pesquisar</span>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <advanced-filter>\r\n        <form [formGroup]=\"formMateriais\" autocomplete=\"off\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-3\">\r\n              <label for=\"codLinha\">Linha</label>\r\n              <ng-select\r\n                [searchable]=\"true\"\r\n                [clearable]=\"false\"\r\n                [items]=\"linhas\"\r\n                [virtualScroll]=\"true\"\r\n                [readonly]=\"visualizar\"\r\n                formControlName=\"codLinha\"\r\n                labelForId=\"codLinha\"\r\n                bindLabel=\"descricao\"\r\n                bindValue=\"id\"\r\n                placeholder=\"Selecione...\"\r\n                (change)=\"onChangeLinha($event.id)\"\r\n                [ngClass]=\"\r\n                  onFieldErrorFormMaterial('codLinha') +\r\n                  ' ' +\r\n                  onFieldRequiredFormMaterial('codLinha')\r\n                \"\r\n                >\r\n              </ng-select>\r\n              <invalid-form-control\r\n                [show]=\"onFieldInvalidFormMaterial('codLinha')\"\r\n                message=\"Linha é obrigatório.\"\r\n              ></invalid-form-control>\r\n            </div>\r\n            <div class=\"form-group col-lg-3\">\r\n              <label for=\"codClasse\">Classe</label>\r\n              <ng-select\r\n                [searchable]=\"true\"\r\n                [clearable]=\"false\"\r\n                [items]=\"filteredClasses\"\r\n                [virtualScroll]=\"true\"\r\n                [readonly]=\"visualizar\"\r\n                formControlName=\"codClasse\"\r\n                labelForId=\"codClasse\"\r\n                bindLabel=\"nomeClasse\"\r\n                bindValue=\"idClasse\"\r\n                placeholder=\"Selecione...\"\r\n                (change)=\"onChangeClasse($event.idClasse)\"\r\n                [ngClass]=\"\r\n                  onFieldErrorFormMaterial('codClasse') +\r\n                  ' ' +\r\n                  onFieldRequiredFormMaterial('codClasse')\r\n                \"\r\n              >\r\n              </ng-select>\r\n              <invalid-form-control\r\n                [show]=\"onFieldInvalidFormMaterial('codClasse')\"\r\n                message=\"Classe é obrigatório.\"\r\n              ></invalid-form-control>\r\n            </div>\r\n            <div class=\"form-group col-lg-6\">\r\n              <label for=\"codMaterial\">Material</label>\r\n              <ng-select\r\n                [searchable]=\"true\"\r\n                [clearable]=\"false\"\r\n                [items]=\"materiais\"\r\n                [virtualScroll]=\"true\"\r\n                [loading]=\"materiaisLoader\"\r\n                [readonly]=\"visualizar\"\r\n                formControlName=\"codMaterial\"\r\n                labelForId=\"codMaterial\"\r\n                bindLabel=\"codigoDescricaoMaterial\"\r\n                bindValue=\"codigoMaterial\"\r\n                placeholder=\"Selecione...\"\r\n                loadingText=\"Carregando...\"\r\n              >\r\n              </ng-select>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </advanced-filter>\r\n    </div>\r\n\r\n    <div class=\"col-12\">\r\n      <div *ngIf=\"materiaisLista.length > 0\">\r\n        <div class=\"row mb-2\">\r\n          <div class=\"col mt-auto\">\r\n            <div class=\"mtc-title mb-0\">Seleção de materiais</div>\r\n          </div>\r\n          <div class=\"col-12\">\r\n            <div class=\"d-flex justify-content-end\">\r\n              <button\r\n                type=\"button\"\r\n                class=\"btn btn-sm btn-outline-primary\"\r\n                (click)=\"onAssociarMateriais()\"\r\n                [disabled]=\"searching === true\"\r\n              >\r\n                <i class=\"fas fa-exchange-alt\"></i>\r\n                <span>Adicionar</span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <custom-table [config]=\"tableConfigMateriais\">\r\n              <ng-template #thead let-thead>\r\n                <tr>\r\n                  <th scope=\"col\" class=\"text-center\" style=\"width: 5%\">\r\n                    <btn-icon\r\n                      [icon]=\"\r\n                        toggleAll ? 'fas fa-check-square' : 'far fa-square'\r\n                      \"\r\n                      size=\"small\"\r\n                      (click)=\"onToggleAll()\"\r\n                    >\r\n                    </btn-icon>\r\n                  </th>\r\n                  <th scope=\"col\" style=\"width: 95%\">Material</th>\r\n                </tr>\r\n              </ng-template>\r\n              <ng-template #tbody let-tbody>\r\n                <tr *ngFor=\"let material of materiaisLista; let i = index\">\r\n                  <td class=\"text-center\" style=\"width: 5%\">\r\n                    <btn-icon\r\n                      [icon]=\"\r\n                        material.checked == 1\r\n                          ? 'fas fa-check-square'\r\n                          : 'far fa-square'\r\n                      \"\r\n                      size=\"small\"\r\n                      (click)=\"onCheckMaterial(i, material)\"\r\n                    >\r\n                    </btn-icon>\r\n                  </td>\r\n                  <td\r\n                    class=\"hover\"\r\n                    style=\"width: 95%\"\r\n                    (click)=\"onCheckMaterial(i, material)\"\r\n                  >\r\n                    {{ material.codigoDescricaoMaterial | uppercase }}\r\n                  </td>\r\n                </tr>\r\n              </ng-template>\r\n            </custom-table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <hr />\r\n\r\n      <div class=\"col-12\">\r\n        <form [formGroup]=\"form\" autocomplete=\"off\">\r\n          <div\r\n            class=\"col\"\r\n            *ngIf=\"showMateriais && form.value.assocMateriais.length > 0\"\r\n          >\r\n            <div class=\"col-12\">\r\n              <div formArrayName=\"assocMateriais\">\r\n                <custom-table [config]=\"tableConfigAssocMateriais\">\r\n                  <ng-template #thead let-thead>\r\n                    <tr>\r\n                      <th scope=\"col\" style=\"width: 35%\">Material</th>\r\n                      <th scope=\"col\" style=\"width: 12%\">Preço Original</th>\r\n                      <th scope=\"col\" style=\"width: 12%\">Preço Negociado</th>\r\n                      <th scope=\"col\" style=\"width: 12%\">Qt Máxima</th>\r\n                      <th scope=\"col\" style=\"width: 12%\">Valor Final</th>\r\n                      <th scope=\"col\" style=\"width: 5%\"></th>\r\n                    </tr>\r\n                  </ng-template>\r\n                  <ng-template #tbody let-tbody>\r\n                    <tr\r\n                      *ngFor=\"\r\n                        let material of assocMateriais.controls;\r\n                        let i = index\r\n                      \"\r\n                      [formGroupName]=\"i\"\r\n                    >\r\n                      <td style=\"width: 35%\">\r\n                        <i\r\n                          class=\"fas fa-exclamation-circle\"\r\n                          [tooltip]=\"tooltipServicoTemplate\"\r\n                          [hidden]=\"!changeTipoServico\"\r\n                        >\r\n                        </i>\r\n                        {{ form.value.assocMateriais[i].codMaterial }} -\r\n                        {{\r\n                          form.value.assocMateriais[i].nomeMaterial | uppercase\r\n                        }}\r\n                      </td>\r\n                      <ng-template #tooltipServicoTemplate>\r\n                        <p class=\"mt-3 mb-0\">\r\n                          <b>Material com ocorrência de valor de serviço</b>\r\n                        </p>\r\n                        <p class=\"text-nowrap mb-0\"><br /><br /></p>\r\n                      </ng-template>\r\n                      <td class=\"text-center\" style=\"width: 12%\">\r\n                        <input\r\n                          class=\"form-control\"\r\n                          id=\"precoOriginal\"\r\n                          type=\"text\"\r\n                          formControlName=\"precoOriginal\"\r\n                          [attr.disabled]=\"true\"\r\n                          [readonly]=\"visualizar\"\r\n                          currencyMask\r\n                          [options]=\"{\r\n                            align: 'left',\r\n                            prefix: '',\r\n                            thousands: '.',\r\n                            decimal: ',',\r\n                            precision: 2\r\n                          }\"\r\n                        />\r\n                      </td>\r\n                      <td class=\"text-center\" style=\"width: 12%\">\r\n                        <input\r\n                          class=\"form-control\"\r\n                          id=\"precoAlterado\"\r\n                          type=\"text\"\r\n                          formControlName=\"precoAlterado\"\r\n                          [readonly]=\"visualizar\"\r\n                          currencyMask\r\n                          [options]=\"{\r\n                            align: 'left',\r\n                            prefix: '',\r\n                            thousands: '.',\r\n                            decimal: ',',\r\n                            precision: 2\r\n                          }\"\r\n                          [ngClass]=\"onNestedFieldError('assocMateriais', i, 'precoAlterado') + ' ' + onNestedFieldRequired('assocMateriais', i, 'precoAlterado')\"\r\n                          />\r\n                      </td>\r\n                      <td class=\"text-center\" style=\"width: 12%\">\r\n                        <input\r\n                          class=\"form-control\"\r\n                          id=\"qtdadeMaxima\"\r\n                          type=\"text\"\r\n                          formControlName=\"qtdadeMaxima\"\r\n                          [readonly]=\"visualizar\"\r\n                          currencyMask\r\n                          [options]=\"{\r\n                            align: 'left',\r\n                            prefix: '',\r\n                            thousands: '.',\r\n                            decimal: ',',\r\n                            precision: 3\r\n                          }\"\r\n                          [ngClass]=\"onNestedFieldError('assocMateriais', i, 'qtdadeMaxima') + ' ' + onNestedFieldRequired('assocMateriais', i, 'qtdadeMaxima')\"\r\n                          />\r\n                      </td>\r\n                      <td class=\"text-center\" style=\"width: 12%\">\r\n                        {{\r\n                         (changeTipoServico ?\r\n                          (form.value.assocMateriais[i].precoAlterado + form.value.valorServico) :\r\n                          form.value.assocMateriais[i].precoAlterado)\r\n                          | currency: 'BRL':'symbol':'1.2'\r\n                        }}\r\n                      </td>\r\n                      <td class=\"text-center\" style=\"width: 5%\">\r\n                        <btn-icon\r\n                          icon=\"fas fa-trash\"\r\n                          size=\"small\"\r\n                          (click)=\"onDeleteMaterial(i)\"\r\n                          [hidden]=\"visualizar\"\r\n                        >\r\n                        </btn-icon>\r\n                      </td>\r\n                    </tr>\r\n                  </ng-template>\r\n                </custom-table>\r\n                <br *ngIf=\"!visualizar\" />\r\n                <br *ngIf=\"!visualizar\" />\r\n                <br *ngIf=\"!visualizar\" />\r\n                <br *ngIf=\"!visualizar\" />\r\n                <br *ngIf=\"!visualizar\" />\r\n                <br *ngIf=\"!visualizar\" />\r\n                <br *ngIf=\"!visualizar\" />\r\n                <br *ngIf=\"!visualizar\" />\r\n                <br *ngIf=\"!visualizar\" />\r\n                <br *ngIf=\"!visualizar\" />\r\n                <br *ngIf=\"!visualizar\" />\r\n                <br *ngIf=\"!visualizar\" />\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n\r\n      <div class=\"row\" *ngIf=\"searching === true\">\r\n        <div class=\"col\">\r\n          <message\r\n            icon=\"fas fa-cog fa-spin\"\r\n            text=\"Estamos pesquisando os materiais para você...\"\r\n          >\r\n          </message>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"searching === false\">\r\n        <div class=\"row\" *ngIf=\"materiaisListaEmpty && materiaisListaLoaded\">\r\n          <div class=\"col\">\r\n            <message\r\n              icon=\"fas fa-box-open\"\r\n              text=\"Nenhuma informação encontrada\"\r\n            >\r\n            </message>\r\n          </div>\r\n        </div>\r\n        <div\r\n          class=\"row\"\r\n          *ngIf=\"\r\n            materiaisLista.length === 0 &&\r\n            !firstSearch &&\r\n            !visualizar &&\r\n            !editar\r\n          \"\r\n        >\r\n          <div class=\"col\">\r\n            <message\r\n              icon=\"fas fa-search\"\r\n              text=\"Preecha os campos acima para pesquisar materiais\"\r\n            >\r\n            </message>\r\n            <br *ngIf=\"!visualizar\" />\r\n            <br *ngIf=\"!visualizar\" />\r\n            <br *ngIf=\"!visualizar\" />\r\n            <br *ngIf=\"!visualizar\" />\r\n            <br *ngIf=\"!visualizar\" />\r\n            <br *ngIf=\"!visualizar\" />\r\n            <br *ngIf=\"!visualizar\" />\r\n            <br *ngIf=\"!visualizar\" />\r\n            <br *ngIf=\"!visualizar\" />\r\n            <br *ngIf=\"!visualizar\" />\r\n            <br *ngIf=\"!visualizar\" />\r\n            <br *ngIf=\"!visualizar\" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ng-template #selecionarCliente>\r\n    <comercial-gestao-contratos-comerciais-formulario-modal-selecionar\r\n      (fecharModal)=\"onFecharModal($event)\"\r\n      (cliente)=\"onCliente($event)\"\r\n    >\r\n    </comercial-gestao-contratos-comerciais-formulario-modal-selecionar>\r\n  </ng-template>\r\n</app-body>\r\n";
      /***/
    },

    /***/
    "SYP8":
    /*!**********************************************************************************************************!*\
      !*** ./src/app/modules/comercial/gestao/contratos-comerciais/templates/clientes/clientes.component.scss ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function SYP8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "::ng-deep comercial-ciclo-vendas-cotacoes-formulario-template-clientes {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21lcmNpYWwvZ2VzdGFvL2NvbnRyYXRvcy1jb21lcmNpYWlzL3RlbXBsYXRlcy9jbGllbnRlcy9jbGllbnRlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGNBQUE7QUFBSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2dlc3Rhby9jb250cmF0b3MtY29tZXJjaWFpcy90ZW1wbGF0ZXMvY2xpZW50ZXMvY2xpZW50ZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAge1xyXG4gIGNvbWVyY2lhbC1jaWNsby12ZW5kYXMtY290YWNvZXMtZm9ybXVsYXJpby10ZW1wbGF0ZS1jbGllbnRlcyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "cY1h":
    /*!************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/gestao/contratos-comerciais/templates/clientes/clientes.component.html ***!
      \************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function cY1h(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form [formGroup]=\"form\">\r\n  <div class=\"form-row\">\r\n    <!-- <div class=\"form-group col\">\r\n      <ng-select\r\n        [searchable]=\"true\"\r\n        [clearable]=\"true\"\r\n        [items]=\"carteiraClientes$ | async\"\r\n        formControlName=\"codCliente\"\r\n        [virtualScroll]=\"true\"\r\n        bindLabel=\"razaoSocial\"\r\n        bindValue=\"codCliente\"\r\n        [loading]=\"clientesLoader\"\r\n        loadingText=\"Carregando...\"\r\n        [typeahead]=\"input$\"\r\n        typeToSearchText=\"Informe o código ou razão social do cliente\"\r\n        (change)=\"onChangeCliente()\"\r\n        (clear)=\"onClear()\"\r\n        [ngClass]=\"onFieldError('codCliente') + ' ' + onFieldRequired('codCliente')\">\r\n      </ng-select>\r\n      <invalid-form-control [show]=\"onFieldInvalid('codCliente')\" message=\"Cliente é obrigatório.\"></invalid-form-control>\r\n    </div> -->\r\n    <div class=\"form-group col mb-0\">\r\n      <ng-select\r\n        [searchable]=\"true\"\r\n        [clearable]=\"false\"\r\n        [items]=\"carteiraClientes\"\r\n        formControlName=\"codCliente\"\r\n        [virtualScroll]=\"true\"\r\n        bindLabel=\"codRazaoSocial\"\r\n        bindValue=\"codCliente\"\r\n        [loading]=\"clientesLoader\"\r\n        [multiple]=\"false\"\r\n        loadingText=\"Carregando...\"\r\n        (change)=\"onChangeCliente()\"\r\n        [ngClass]=\"onFieldError('codCliente') + ' ' + onFieldRequired('codCliente')\"\r\n        [readonly]='visualizar'>\r\n      </ng-select>\r\n      <invalid-form-control [show]=\"onFieldInvalid('codCliente')\" message=\"Cliente é obrigatório.\"></invalid-form-control>\r\n    </div>\r\n  </div>\r\n</form>\r\n";
      /***/
    },

    /***/
    "f/MI":
    /*!****************************************************************************************!*\
      !*** ./src/app/modules/comercial/gestao/contratos-comerciais/lista/lista.component.ts ***!
      \****************************************************************************************/

    /*! exports provided: ComercialGestaoContratosComerciaisListaComponent */

    /***/
    function fMI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialGestaoContratosComerciaisListaComponent", function () {
        return ComercialGestaoContratosComerciaisListaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lista.component.html */
      "Ew1U");
      /* harmony import */


      var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lista.component.scss */
      "IQgH");
      /* harmony import */


      var _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../../../shared/templates/detail-panel/detal-panel.service */
      "gIxL");
      /* harmony import */


      var _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../../../../shared/modules/confirm-modal/confirm-modal.service */
      "FOez");
      /* harmony import */


      var _cadastros_materiais_grupos_grupos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../../cadastros/materiais/grupos/grupos.service */
      "4YhS");
      /* harmony import */


      var _ciclo_vendas_pedidos_producao_telas_formulario_formulario_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../../ciclo-vendas/pedidos-producao-telas/formulario/formulario.service */
      "8O77");
      /* harmony import */


      var _contratos_comerciais_contratos_comerciais_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../contratos-comerciais/contratos-comerciais.service */
      "pK9/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "ienR");
      /* harmony import */


      var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ngx-bootstrap/chronos */
      "xj/R");
      /* harmony import */


      var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ngx-bootstrap/locale */
      "0b5p");
      /* harmony import */


      var _shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./../../../../../shared/services/core/auth.service */
      "yxCR");
      /* harmony import */


      var _comercial_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./../../../comercial.service */
      "VgqD");
      /* harmony import */


      var _services_vendedores_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./../../../services/vendedores.service */
      "4xRd");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS");
      /* harmony import */


      var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! src/app/shared/services/core/date.service */
      "Rk3r");

      Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_15__["defineLocale"])('pt-br', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_16__["ptBrLocale"]); // Services

      var ComercialGestaoContratosComerciaisListaComponent = /*#__PURE__*/function () {
        function ComercialGestaoContratosComerciaisListaComponent(localeService, activatedRoute, router, location, formBuilder, pnotifyService, atividadesService, titleService, dateService, vendedoresService, comercialService, authService, formularioService, contratosComerciaisService, materiaisGrupoService, bsModalService, confirmModalService, detailPanelService) {
          _classCallCheck(this, ComercialGestaoContratosComerciaisListaComponent);

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
            duplicataCarteira: false
          };
          this.user = this.authService.getCurrentUser();
          this.loaderNavbar = false;
          this.loaderFullScreen = true;
          this.breadCrumbTree = [];
          this.subtitles = [{
            id: 1,
            text: 'Em Aberto',
            color: 'green'
          }, {
            id: 4,
            text: 'Aguardando Aprovação',
            color: 'yellow'
          }, {
            id: 2,
            text: 'Aprovado',
            color: 'blue'
          }, {
            id: 3,
            text: 'Reprovado',
            color: 'red'
          }];
          this.tableConfig = {
            subtitleBorder: true
          };
          this.tableConfigAnexos = {
            fixedHeader: false,
            bodyHeight: 230,
            hover: false
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
          this.situacoes = [{
            id: 0,
            situacao: 'EXIBIR TODOS'
          }, {
            id: 4,
            situacao: 'APROVADOS'
          }, {
            id: 3,
            situacao: 'REPROVADOS'
          }, {
            id: 2,
            situacao: 'AGUARDANDO APROVAÇÃO'
          }];
          this.situacoesFiltered = this.situacoes;
          this.situacaoLoaded = false;
          this.anexos = [];
          this.showAnexos = false;
          this.carteira = [{
            codigo: 'S',
            descricao: 'MINHA CARTEIRA'
          }, {
            codigo: '',
            descricao: 'TODOS'
          }];
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
            codClasse: [null]
          });
          this.localeService.use('pt-br');
          this.bsConfig = Object.assign({}, {
            containerClass: 'theme-dark-blue'
          }, {
            adaptivePosition: true
          }, {
            showWeekNumbers: false
          });
          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialGestaoContratosComerciaisListaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.titleService.setTitle('Gestão');
            this.getFilterValues();
            this.getPerfil();
            this.getSituacao();
            this.registrarAcesso();
            this.getFiltros();
            this.setBreadCrumb();
            this.onDetailPanelEmitter();
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "getFiltros",
          value: function getFiltros() {
            var _this = this;

            this.vendedoresService.getVendedores().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(function () {
              _this.loaderFullScreen = false;
            })).subscribe({
              next: function next(response) {
                if (response.responseCode === 200) {
                  _this.vendedores = response.result;

                  _this.vendedores.unshift({
                    id: 'T',
                    nome: 'EXIBIR TODOS'
                  });

                  _this.vendedores.unshift({
                    id: 'S',
                    nome: 'MINHA CARTEIRA'
                  });

                  _this.carteira = _this.vendedores;
                }
              },
              error: function error(_error) {
                _this.pnotifyService.error();

                _this.location.back();
              }
            });
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            var _this2 = this;

            this.activatedRoute.params.subscribe(function (params) {
              _this2.breadCrumbTree = [{
                descricao: 'Home',
                routerLink: '/comercial/home'
              }, {
                descricao: 'Gestão',
                routerLink: "/comercial/gestao/".concat(params['idSubModulo'])
              }, {
                descricao: 'Contratos Comerciais'
              }];
            });
          }
        }, {
          key: "setFormValueFilter",
          value: function setFormValueFilter() {
            var formValue = this.checkRouterParams();
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
              codClasse: formValue.codClasse
            });

            if (formValue.codLinha > 0 && (formValue.codLinha != null || formValue.codLinha != undefined)) {
              this.onChangeLinha(formValue.codLinha, true);
            } else {
              this.form.get('codClasse').disable();
            }

            if (formValue.codClasse > 0 && (formValue.codClasse != null || formValue.codClasse != undefined)) {
              this.getMateriais(formValue.codClasse);
            } else {
              this.form.get('codMaterial').disable();
            }
          }
        }, {
          key: "getFilterValues",
          value: function getFilterValues() {
            var _this3 = this;

            this.materiaisGrupoService.getFilterValues().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(function () {
              _this3.loaderFullScreen = false;

              _this3.setFormValueFilter();
            })).subscribe(function (response) {
              if (response[0].responseCode === 200) {
                _this3.linhas = response[0].result;
              } else {
                _this3.pnotifyService.error();

                _this3.location.back();
              }

              if (response[1].responseCode === 200) {
                _this3.classes = response[1].result;
              } else {
                _this3.pnotifyService.error();

                _this3.location.back();
              }
            });
          } // Get perfil

        }, {
          key: "getPerfil",
          value: function getPerfil() {
            var _this4 = this;

            this.loaderFullScreen = true;
            this.comercialService.getPerfil().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(function () {
              _this4.loaderFullScreen = false;
            })).subscribe({
              next: function next(response) {
                if (response.responseCode === 200) {
                  _this4.profile = response.result;

                  if (_this4.profile.coordenador === true || _this4.profile.gestor === true && _this4.profile.vendedor === true && _this4.profile.coordenador === false && _this4.profile.gestor === false && _this4.profile.hasVinculoOperadores === true) {
                    _this4.checkRouterParams();
                  } else if (_this4.profile.vendedor === true && _this4.profile.coordenador === false && _this4.profile.gestor === false && _this4.profile.hasVinculoOperadores === true) {
                    _this4.idVendedor = _this4.user.info.idVendedor;
                    _this4.idEscritorio = _this4.user.info.idEscritorio;

                    _this4.form.get('carteira').setValue('S'); // this.form.get('codVendedor').setValue(parseInt(this.user.info.idVendedor));
                    // this.form.get('codGerencia').setValue(parseInt(this.user.info.idEscritorio));


                    _this4.desativado = true;
                    _this4.showDashboard = true;
                  } else {
                    _this4.showPermissionDenied = true;
                  }
                } else {
                  _this4.showPermissionDenied = true;
                }
              },
              error: function error(_error2) {
                _this4.showPermissionDenied = true;
              }
            });
          }
        }, {
          key: "checkRouterParams",
          value: function checkRouterParams() {
            var _this5 = this;

            var formValue = {
              dataInicial: this.dateService.getFirstDayMonth(),
              dataFinal: this.dateService.getLastDayMonth(),
              nomeContrato: null,
              situacao: 0,
              registros: 300,
              cliente: null,
              carteira: 'T',
              codMaterial: null,
              codLinha: null,
              codClasse: null
            };
            this.activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (queryParams) {
              if (Object.keys(queryParams).length > 0) {
                var params = atob(queryParams['q']);
                params = JSON.parse(params);

                _this5.search(params);

                Object.keys(formValue).forEach(function (formKey) {
                  Object.keys(params).forEach(function (paramKey) {
                    if (formKey == paramKey && formValue[formKey] != params[paramKey]) {
                      if (formKey === 'dataInicial' || formKey === 'dataFinal') {
                        formValue[formKey] = _this5.dateService.convertStringToDate(params[paramKey], 'pt-br');
                      } else {
                        if (!isNaN(Number(params[paramKey]))) {
                          formValue[formKey] = Number(params[paramKey]);
                        } else {
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
        }, {
          key: "checkOrder",
          value: function checkOrder() {
            if (this.form.value.orderBy !== this.orderBy) {
              this.orderBy = this.form.value.orderBy;
            }

            if (this.form.value.orderType !== this.orderType) {
              this.orderType = this.form.value.orderType;
            }
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

            if (field.errors != null) {
              if (field.errors.hasOwnProperty('required') && field.touched) {
                return 'required';
              }
            }

            return '';
          }
        }, {
          key: "onFieldRequired",
          value: function onFieldRequired(field) {
            var required = false;
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]();

            if (this.form.controls[field].validator) {
              var validationResult = this.form.controls[field].validator(formControl);
              required = validationResult !== null && validationResult.required === true;
            }

            if (required) {
              return 'is-required';
            }
          }
        }, {
          key: "checkValidatorsData",
          value: function checkValidatorsData() {
            var validation = true;
            var dataInicial = this.form.value.dataInicial;
            var dataFinal = this.form.value.dataFinal;

            if (dataInicial > dataFinal) {
              validation = false;
            }

            return validation;
          }
        }, {
          key: "onFilter",
          value: function onFilter() {
            var confirm = false;

            if (!this.checkValidatorsData()) {
              this.pnotifyService.notice('Data Inicial não pode ser maior que Data Final');
            } else {
              confirm = true;
            }

            if (this.form.valid && confirm == true) {
              this.itemsPerPage = this.form.value.registros;
              this.currentPage = 1;
              this.setRouterParams(this.verificaParams());
            }
          }
        }, {
          key: "setRouterParams",
          value: function setRouterParams(params) {
            this.router.navigate([], {
              relativeTo: this.activatedRoute,
              queryParams: {
                q: btoa(JSON.stringify(params))
              }
            });
            this.search(params);
          }
        }, {
          key: "getParams",
          value: function getParams() {
            var _params = {};
            var _obj = this.form.value;

            for (var prop in _obj) {
              if (_obj[prop]) {
                if (_obj[prop] instanceof Date) _params[prop] = this.dateService.convertToUrlDate(_obj[prop]);else _params[prop] = _obj[prop];
              }
            }

            return _params;
          }
        }, {
          key: "verificaParams",
          value: function verificaParams() {
            var params = {};

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
        }, {
          key: "search",
          value: function search(params) {
            var _this6 = this;

            if (!this.loaderFullScreen) this.loaderNavbar = true;
            this.dados = [];
            this.dadosPagination = [];
            this.dadosLoaded = false;
            this.dadosEmpty = false;
            this.contratosComerciaisService.getListaContratos(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(function () {
              _this6.loaderFullScreen = false;
              _this6.loaderNavbar = false;
            })).subscribe({
              next: function next(response) {
                if (response.hasOwnProperty('success') && response.success === true) {
                  _this6.dados = response.data;
                  _this6.dadosPagination = _this6.dados.slice(0, _this6.itemsPerPage);
                  _this6.totalItems = _this6.dados.length;
                  _this6.dadosLoaded = true;
                } else if (response.hasOwnProperty('success') && response.success === false) {
                  _this6.dadosEmpty = true;
                } else {
                  _this6.pnotifyService.error();

                  _this6.dadosEmpty = true;
                }
              },
              error: function error(_error3) {
                _this6.dadosEmpty = true;

                if (_error3.error.hasOwnProperty('mensagem')) {
                  _this6.pnotifyService.error(_error3.error.mensagem);
                } else {
                  _this6.pnotifyService.error();
                }
              }
            });
          }
        }, {
          key: "classStatusBorder",
          value: function classStatusBorder(item) {
            var borderClass;

            if (item.codSituacao === 1) {
              borderClass = 'border-success';
            } else if (item.codSituacao === 3) {
              borderClass = 'border-danger';
            } else if (item.codSituacao === 4) {
              borderClass = 'border-primary';
            } else if (item.codSituacao === 2) {
              borderClass = 'border-warning';
            }

            return borderClass;
          }
        }, {
          key: "onPageChanged",
          value: function onPageChanged(event) {
            var startItem = (event.page - 1) * event.itemsPerPage;
            var endItem = event.page * event.itemsPerPage;
            this.dadosPagination = this.dados.slice(startItem, endItem);
            this.scrollToFilter.nativeElement.scrollIntoView({
              behavior: 'instant'
            });
          }
        }, {
          key: "onChangeLinha",
          value: function onChangeLinha(codLinha, reload) {
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

            this.filteredClasses = this.classes.filter(function (value) {
              return value.idLinha == codLinha;
            });
          }
        }, {
          key: "onChangeClasse",
          value: function onChangeClasse(codClasse) {
            this.form.controls.codMaterial.reset();
            this.form.controls.codMaterial.enable();
            this.form.controls.codMaterial.setValue(0);
            this.form.controls.codMaterial.updateValueAndValidity();
            this.getMateriais(codClasse);
          }
        }, {
          key: "getSituacao",
          value: function getSituacao() {
            var _this7 = this;

            this.contratosComerciaisService.getSituacao().subscribe({
              next: function next(response) {
                if (response.success === true) {
                  _this7.situacoes = response.data;

                  _this7.situacoes.unshift({
                    codSituacao: 0,
                    nomeSituacao: 'EXIBIR TODOS'
                  });
                } else {
                  _this7.pnotifyService.error();

                  _this7.location.back();
                }
              },
              error: function error(_error4) {
                _this7.pnotifyService.error();

                _this7.location.back();
              }
            });
          }
        }, {
          key: "getMateriais",
          value: function getMateriais(codClasse) {
            var _this8 = this;

            if (typeof codClasse !== 'undefined' && codClasse !== null) {
              this.materiaisLoader = true;
              this.materiais = [];
              this.comercialService.getMateriais({
                codClasse: codClasse
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(function () {
                _this8.materiaisLoader = false;
              })).subscribe({
                next: function next(response) {
                  if (response.hasOwnProperty('success') && response.success === true) {
                    _this8.materiais = response.data;

                    _this8.materiais.unshift({
                      codigoMaterial: 0,
                      codigoDescricaoMaterial: 'EXIBIR TODOS'
                    });

                    _this8.formMateriais.controls.codMaterial.setValue(0);
                  } else if (response.hasOwnProperty('success') && response.success === false && response.hasOwnProperty('mensagem')) {
                    _this8.pnotifyService.error(response.mensagem);
                  } else {
                    _this8.pnotifyService.error();
                  }
                },
                error: function error(_error5) {
                  if (_error5['error'].hasOwnProperty('mensagem')) {
                    _this8.pnotifyService.error(_error5.error.mensagem);
                  } else {
                    _this8.pnotifyService.error();
                  }
                }
              });
            }
          }
        }, {
          key: "setEnderecoSelecionado",
          value: function setEnderecoSelecionado() {
            this.enderecoSelecionado = {
              idCliente: -1,
              codEndereco: null,
              razaoSocial: null,
              codSituacao: null,
              situacao: null,
              codUsuario: null,
              nomeUsuario: null,
              dataCadastro: null
            };
          }
        }, {
          key: "onDetailPanelEmitter",
          value: function onDetailPanelEmitter() {
            var _this9 = this;

            this.showDetailPanelSubscription = this.detailPanelService.config.subscribe(function (event) {
              _this9.showDetailPanel = event.showing;
            });
          }
        }, {
          key: "onDetails",
          value: function onDetails(detalhes) {
            var _this10 = this;

            this.loaderNavbar = true;
            this.detailPanelService.show();
            this.detailPanelMateriais = [];
            this.detailPanelCliente = [];
            this.detailPanelData = [];
            this.contratosComerciaisService.getDetailPanel(detalhes.codContrato).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(function () {
              setTimeout(function () {
                _this10.loaderNavbar = false;
              }, 500);
            })).subscribe({
              next: function next(response) {
                if (response.success === true) {
                  _this10.detailPanelData = response.data;
                  _this10.detailPanelMateriais = response.data[0].materiais;
                  _this10.detailPanelCliente = response.data[0].codCliente;
                  _this10.loaderNavbar = false;

                  _this10.detailPanelService.loadedFinished(false);
                }
              },
              error: function error(_error6) {
                if (_error6['error'].hasOwnProperty('mensagem')) {
                  _this10.pnotifyService.error(_error6.error.mensagem);
                } else {
                  _this10.pnotifyService.error();
                }
              }
            });
          }
        }, {
          key: "onEdit",
          value: function onEdit(item) {
            this.router.navigate(['../editar', item.codContrato], {
              relativeTo: this.activatedRoute
            });
          }
        }, {
          key: "convertMysqlTime",
          value: function convertMysqlTime(time) {
            return this.dateService.convertMysqlTime(time);
          } // modal

        }, {
          key: "onAprovar",
          value: function onAprovar(item) {
            var _this11 = this;

            this.confirmAprovacao().subscribe(function (response) {
              return response ? _this11.contratosComerciaisService.postAprovacao(item).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(function () {
                _this11.loaderFullScreen = false;
              })).subscribe({
                next: function next(response) {
                  if (response.success === true) {
                    _this11.pnotifyService.success('Contrato aprovado com sucesso.');

                    _this11.onFilter();
                  }
                },
                error: function error(_error7) {
                  _this11.pnotifyService.error();

                  _this11.location.back();
                }
              }) : null;
            });
          }
        }, {
          key: "setFormReprovar",
          value: function setFormReprovar(item) {
            this.formReprovar = this.formBuilder.group({
              codContrato: [item.codContrato],
              descMotivo: [item.motivoReprovacao]
            });
          }
        }, {
          key: "onReprovar",
          value: function onReprovar() {
            var _this12 = this;

            this.contratosComerciaisService.postReprovacao(this.formReprovar.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(function () {
              _this12.loaderFullScreen = false;
            })).subscribe({
              next: function next(response) {
                if (response.success === true) {
                  _this12.pnotifyService.success('Contrato reprovado com sucesso.');

                  _this12.onFilter();
                }
              },
              error: function error(_error8) {
                _this12.pnotifyService.error();

                _this12.location.back();
              }
            });
          }
        }, {
          key: "confirmAprovacao",
          value: function confirmAprovacao() {
            return this.confirmModalService.showConfirm('aprovar', 'Confirmar aprovação', 'Deseja realmente prosseguir com a aprovação do contrato?', 'Cancelar', 'Confirmar');
          }
        }, {
          key: "openModalReprovar",
          value: function openModalReprovar(reprovar) {
            this.modalRef = this.bsModalService.show(reprovar);
          }
        }, {
          key: "closeModal",
          value: function closeModal(modalRef) {
            this.modalRef.hide();
          }
        }, {
          key: "onRefresh",
          value: function onRefresh() {
            this.setFormValueFilter();
            this.checkRouterParams();
          }
        }]);

        return ComercialGestaoContratosComerciaisListaComponent;
      }();

      ComercialGestaoContratosComerciaisListaComponent.ctorParameters = function () {
        return [{
          type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__["BsLocaleService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_20__["PNotifyService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_21__["AtividadesService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_22__["TitleService"]
        }, {
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_23__["DateService"]
        }, {
          type: _services_vendedores_service__WEBPACK_IMPORTED_MODULE_19__["ComercialVendedoresService"]
        }, {
          type: _comercial_service__WEBPACK_IMPORTED_MODULE_18__["ComercialService"]
        }, {
          type: _shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_17__["AuthService"]
        }, {
          type: _ciclo_vendas_pedidos_producao_telas_formulario_formulario_service__WEBPACK_IMPORTED_MODULE_6__["ComercialCicloVendasPedidosProducaoTelasFormularioService"]
        }, {
          type: _contratos_comerciais_contratos_comerciais_service__WEBPACK_IMPORTED_MODULE_7__["ComercialGestaoContratosComerciaisService"]
        }, {
          type: _cadastros_materiais_grupos_grupos_service__WEBPACK_IMPORTED_MODULE_5__["ComercialCadastrosMateriaisGrupoService"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__["BsModalService"]
        }, {
          type: _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_4__["ConfirmModalService"]
        }, {
          type: _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_3__["DetailPanelService"]
        }];
      };

      ComercialGestaoContratosComerciaisListaComponent.propDecorators = {
        scrollToFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChild"],
          args: ['scrollToFilter', {}]
        }]
      };
      ComercialGestaoContratosComerciaisListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"])({
        selector: 'contratos-comerciais',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__["BsLocaleService"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_20__["PNotifyService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_21__["AtividadesService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_22__["TitleService"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_23__["DateService"], _services_vendedores_service__WEBPACK_IMPORTED_MODULE_19__["ComercialVendedoresService"], _comercial_service__WEBPACK_IMPORTED_MODULE_18__["ComercialService"], _shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_17__["AuthService"], _ciclo_vendas_pedidos_producao_telas_formulario_formulario_service__WEBPACK_IMPORTED_MODULE_6__["ComercialCicloVendasPedidosProducaoTelasFormularioService"], _contratos_comerciais_contratos_comerciais_service__WEBPACK_IMPORTED_MODULE_7__["ComercialGestaoContratosComerciaisService"], _cadastros_materiais_grupos_grupos_service__WEBPACK_IMPORTED_MODULE_5__["ComercialCadastrosMateriaisGrupoService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__["BsModalService"], _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_4__["ConfirmModalService"], _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_3__["DetailPanelService"]])], ComercialGestaoContratosComerciaisListaComponent);
      /***/
    },

    /***/
    "fZd8":
    /*!*******************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/gestao/contratos-comerciais/formulario/modal/selecionar/selecionar.component.ts ***!
      \*******************************************************************************************************************/

    /*! exports provided: ComercialGestaoContratosComerciaisFormularioModalSelecionarComponent */

    /***/
    function fZd8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialGestaoContratosComerciaisFormularioModalSelecionarComponent", function () {
        return ComercialGestaoContratosComerciaisFormularioModalSelecionarComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_selecionar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./selecionar.component.html */
      "u2yr");
      /* harmony import */


      var _selecionar_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./selecionar.component.scss */
      "LzM3");
      /* harmony import */


      var src_app_modules_comercial_services_vendedores_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/modules/comercial/services/vendedores.service */
      "4xRd");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var ComercialGestaoContratosComerciaisFormularioModalSelecionarComponent = /*#__PURE__*/function () {
        /* Pagination */
        function ComercialGestaoContratosComerciaisFormularioModalSelecionarComponent(formBuilder, pnotifyService, bsModalRef, comercialService) {
          _classCallCheck(this, ComercialGestaoContratosComerciaisFormularioModalSelecionarComponent);

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

        _createClass(ComercialGestaoContratosComerciaisFormularioModalSelecionarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.setFormBuilder();
          }
        }, {
          key: "onClose",
          value: function onClose() {
            this.fecharModal.emit(true);
          }
        }, {
          key: "getClientes",
          value: function getClientes(params) {
            var _this13 = this;

            var _params = params !== null && params !== void 0 ? params : {};

            var _obj = this.formClientes.value;
            this.loadingClientes = true;
            if (_obj['pesquisa']) _params[_obj['buscarPor']] = _obj['pesquisa'];
            this.comercialService.getCarteiraClientes(_params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              _this13.loadingClientes = false;
            })).subscribe({
              next: function next(response) {
                if (response.success === true) {
                  _this13.noClientes = false;
                  _this13.clientes = response.data;
                } else {
                  _this13.noClientes = true;

                  _this13.pnotifyService.notice('Nenhum cliente encontrado!');
                }
              },
              error: function error(_error9) {
                _this13.pnotifyService.error();
              }
            });
          }
        }, {
          key: "setCliente",
          value: function setCliente(cliente) {
            if (cliente.nomeSituacao == 'Arquivo') {
              this.pnotifyService.notice('Cliente arquivado, favor entrar em contato com o Marketing');
            } else {
              this.cliente.emit(cliente);
              this.onClose();
            }
          }
        }, {
          key: "setFormBuilder",
          value: function setFormBuilder() {
            this.formClientes = this.formBuilder.group({
              buscarPor: ['NM_CLIE'],
              pesquisa: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              NM_CLIE: [null],
              registros: [this.itemsPerPage]
            });
          }
        }]);

        return ComercialGestaoContratosComerciaisFormularioModalSelecionarComponent;
      }();

      ComercialGestaoContratosComerciaisFormularioModalSelecionarComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["BsModalRef"]
        }, {
          type: src_app_modules_comercial_services_vendedores_service__WEBPACK_IMPORTED_MODULE_3__["ComercialVendedoresService"]
        }];
      };

      ComercialGestaoContratosComerciaisFormularioModalSelecionarComponent.propDecorators = {
        cliente: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
        }],
        fecharModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
        }]
      };
      ComercialGestaoContratosComerciaisFormularioModalSelecionarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"])({
        selector: 'comercial-gestao-contratos-comerciais-formulario-modal-selecionar',
        template: _raw_loader_selecionar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_selecionar_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["BsModalRef"], src_app_modules_comercial_services_vendedores_service__WEBPACK_IMPORTED_MODULE_3__["ComercialVendedoresService"]])], ComercialGestaoContratosComerciaisFormularioModalSelecionarComponent);
      /***/
    },

    /***/
    "hgqU":
    /*!**************************************************************************************************!*\
      !*** ./src/app/modules/comercial/gestao/contratos-comerciais/formulario/formulario.component.ts ***!
      \**************************************************************************************************/

    /*! exports provided: ComercialGestaoContratosComerciaisFormularioComponent */

    /***/
    function hgqU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialGestaoContratosComerciaisFormularioComponent", function () {
        return ComercialGestaoContratosComerciaisFormularioComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./formulario.component.html */
      "Q2P+");
      /* harmony import */


      var _formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./formulario.component.scss */
      "7cUI");
      /* harmony import */


      var _cadastros_formas_pagamento_formas_pagamento_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../cadastros/formas-pagamento/formas-pagamento.service */
      "tVei");
      /* harmony import */


      var _contratos_comerciais_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../contratos-comerciais.service */
      "pK9/");
      /* harmony import */


      var _ciclo_vendas_pedidos_producao_telas_formulario_formulario_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../../ciclo-vendas/pedidos-producao-telas/formulario/formulario.service */
      "8O77");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var ng_brazil__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng-brazil */
      "hTrW");
      /* harmony import */


      var _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./../../../../../shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./../../../../../shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _comercial_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./../../../comercial.service */
      "VgqD");
      /* harmony import */


      var _shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./../../../../../shared/services/core/auth.service */
      "yxCR");
      /* harmony import */


      var _cadastros_materiais_grupos_grupos_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./../../../cadastros/materiais/grupos/grupos.service */
      "4YhS");
      /* harmony import */


      var _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./../../../../../shared/modules/confirm-modal/confirm-modal.service */
      "FOez");
      /* harmony import */


      var _modal_detalhes_cliente_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./modal/detalhes/cliente.service */
      "tnBs");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS");
      /* harmony import */


      var _services_clientes_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../../../services/clientes.service */
      "8ouN");
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "ienR");
      /* harmony import */


      var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ngx-bootstrap/chronos */
      "xj/R");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ngx-bootstrap/locale */
      "0b5p"); // ng-brazil
      // Interfaces teste
      // Services
      // ngx-bootstrap


      Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_22__["defineLocale"])('pt-br', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_24__["ptBrLocale"]);

      var ComercialGestaoContratosComerciaisFormularioComponent = /*#__PURE__*/function () {
        function ComercialGestaoContratosComerciaisFormularioComponent(formBuilder, activatedRoute, dateService, localeService, pnotifyService, confirmModalService, location, contratosComerciaisService, router, comercialService, materiaisGrupoService, authService, formularioService, formaPagamentoService, clientesService, modalService, clienteDetalhesService, titleService) {
          _classCallCheck(this, ComercialGestaoContratosComerciaisFormularioComponent);

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
            duplicataCarteira: false
          };
          this.user = this.authService.getCurrentUser();
          this.MASKS = ng_brazil__WEBPACK_IMPORTED_MODULE_11__["MASKS"];
          this.loaderFullScreen = true;
          this.breadCrumbTree = [];
          this.tableConfigAssocMateriais = {
            hover: false
          };
          this.tableConfigMateriais = {
            fixedHeader: false,
            bodyHeight: 243
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
            hover: false
          };
          this.tableConfigPrecos = {
            fixedHeader: false,
            bodyHeight: 230,
            hover: false
          };
          this.tableConfigAnexos = {
            fixedHeader: false,
            bodyHeight: 230,
            hover: false
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

        _createClass(ComercialGestaoContratosComerciaisFormularioComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
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
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.unsetLoaderEvents();
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            var _this14 = this;

            this.activatedRoute.params.subscribe(function (params) {
              if (params.id) {
                _this14.appTitle = 'Editar Contrato comercial';
                _this14.action = 'update';
                _this14.editar = true;
              } else {
                _this14.appTitle = 'Novo Contrato comercial';
                _this14.action = 'create';
              }

              _this14.breadCrumbTree = [{
                descricao: 'Home',
                routerLink: '/comercial/home'
              }, {
                descricao: 'Gestão',
                routerLink: "/comercial/gestao/".concat(params.idSubModulo)
              }, {
                descricao: 'Contratos Comerciais',
                routerLink: "/comercial/gestao/".concat(params.idSubModulo, "/contratos-comerciais/lista")
              }, {
                descricao: _this14.appTitle
              }];
            });
          }
        }, {
          key: "getEnderecos",
          value: function getEnderecos(id, params) {
            var _this15 = this;

            this.loaderEnderecos = true;
            this.enderecos = [];
            this.clientesService.getEnderecos(id, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(function () {
              _this15.loaderEnderecos = false;
            })).subscribe(function (response) {
              _this15.enderecos = response['data']['enderecos'];

              _this15.enderecos.map(function (endereco) {
                endereco.enderecoAjustado = endereco === null || endereco === void 0 ? void 0 : endereco.endereco;

                if (endereco === null || endereco === void 0 ? void 0 : endereco.codLocal) {
                  endereco.enderecoAjustado += ", ".concat(endereco === null || endereco === void 0 ? void 0 : endereco.codLocal);
                }

                if (endereco === null || endereco === void 0 ? void 0 : endereco.bairro) {
                  endereco.enderecoAjustado += ", ".concat(endereco === null || endereco === void 0 ? void 0 : endereco.bairro);
                }

                if (endereco === null || endereco === void 0 ? void 0 : endereco.cidade) {
                  endereco.enderecoAjustado += ", ".concat(endereco === null || endereco === void 0 ? void 0 : endereco.cidade);
                }

                if (endereco === null || endereco === void 0 ? void 0 : endereco.uf) {
                  endereco.enderecoAjustado += ", ".concat(endereco === null || endereco === void 0 ? void 0 : endereco.uf);
                }
              });
            });
          }
        }, {
          key: "getClientesGrupoEconomico",
          value: function getClientesGrupoEconomico(idCliente) {
            var _this16 = this;

            this.loaderGrupoEconomico = true;
            this.clientesService.getClientesGrupoEconomico(idCliente).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(function () {
              return _this16.loaderGrupoEconomico = false;
            })).subscribe({
              next: function next(response) {
                if (response) {
                  _this16.grupoEconomico = response.data;
                } else {
                  _this16.pnotifyService.error();

                  _this16.location.back();
                }
              },
              error: function error(_error10) {
                _this16.pnotifyService.error();

                _this16.location.back();
              }
            });
          }
        }, {
          key: "onFormSubscription",
          value: function onFormSubscription() {
            var _this17 = this;

            var _a, _b, _c, _d, _e, _f;

            (_b = (_a = this.form.get('codCliente')) === null || _a === void 0 ? void 0 : _a.valueChanges) === null || _b === void 0 ? void 0 : _b.subscribe(function (codCliente) {
              _this17.getEnderecos(codCliente, {
                localEntrega: 1
              });

              _this17.getClientesGrupoEconomico(codCliente);
            });
            (_d = (_c = this.form.get('codTipoServico')) === null || _c === void 0 ? void 0 : _c.valueChanges) === null || _d === void 0 ? void 0 : _d.subscribe(function (codTipoServico) {
              codTipoServico == 1 ? _this17.form.get('codEnderecoEntrega').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]) : _this17.form.get('codEnderecoEntrega').setValidators([]);

              _this17.form.get('codEnderecoEntrega').updateValueAndValidity();
            });
            (_f = (_e = this.form.get('codEnderecoEntrega')) === null || _e === void 0 ? void 0 : _e.valueChanges) === null || _f === void 0 ? void 0 : _f.subscribe(function (codEnderecoEntrega) {
              var endereco = _this17.enderecos.filter(function (endereco) {
                return (endereco === null || endereco === void 0 ? void 0 : endereco.id) == codEnderecoEntrega;
              });

              if (endereco.length == 1) {
                _this17.form.get('uf').setValue(endereco[0]['uf']);
              }
            });
          } // Formulário Preenchido para edição ou novo formulário

        }, {
          key: "setFormFilter",
          value: function setFormFilter() {
            var resolver = this.activatedRoute.snapshot.data.detalhes;

            if (resolver.success === true) {
              var detalhes = resolver.data[0];
              this.showVisual = true;

              if (detalhes.codTipoServico === 1) {
                this.changeTipoServico = true;
              }

              var codCliente = null;

              if (detalhes.codCliente > 0 && (detalhes.codCliente != null || detalhes.codCliente != undefined)) {
                codCliente = detalhes.codCliente;
                this.getEnderecos(codCliente, {
                  localEntrega: 1
                });
                this.getClientesGrupoEconomico(codCliente);
              }

              this.form = this.formBuilder.group({
                codContrato: [detalhes.codContrato],
                codEmpresa: [detalhes.codEmpresa, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
                codCliente: [codCliente],
                codRazaoSocial: [detalhes.codRazaoSocial],
                nomeContrato: [detalhes.nomeContrato, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
                dataInicialContrato: [detalhes.codContrato == null ? this.dateService.getToday() : this.dateService.convertStringToDate(detalhes.dataInicialVigencia, 'usa'), [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
                dataFinalContrato: [detalhes.codContrato == null ? this.dateService.getToday() : this.dateService.convertStringToDate(detalhes.dataFinalVigencia, 'usa'), [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
                codSituacao: this.showVisual === true ? [detalhes.codSituacao] : 1,
                // this.visualizar && this.action === 'update' ? : 2,
                codPeso: this.changeTipoServico === false ? [detalhes.qtdeMaximaConsumo, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]] : [detalhes.qtdeMaximaConsumo],
                codTipoServico: [detalhes.codTipoServico, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
                grupoEconomico: [detalhes.grupoEconomico],
                codFormaPagamento: [detalhes.codFormaPagamento, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
                codTipoFrete: [detalhes.codTipoFrete],
                codEnderecoEntrega: [detalhes.codEnderecoEntrega],
                uf: [null],
                precoAps: this.changeTipoServico === false ? 0 : [detalhes.valorServicoAps],
                valorServico: this.changeTipoServico === false ? 0 : [detalhes.valorServico, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
                assocMateriais: this.formBuilder.array([]),
                anexos: this.formBuilder.array([])
              });
              this.setMateriais(detalhes.materiais);

              if (detalhes.codContrato != null) {
                this.getAnexos(detalhes.codContrato);
              }

              this.visualizar = false;

              if (detalhes.codSituacao != 3 && detalhes.codSituacao != null && detalhes.codSituacao != 1) {
                // this.profileDisabled();
                this.visualizar = true;
              }
            } else {
              this.pnotifyService.error();
              this.location.back();
            }

            this.showVisual = false;
          }
        }, {
          key: "getAnexos",
          value: function getAnexos(codContrato) {
            var _this18 = this;

            this.loaderNavbar = true;
            this.showAnexos = false;
            this.contratosComerciaisService.getAnexos(codContrato).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(function () {
              _this18.loaderNavbar = false;
              _this18.showAnexos = true;
            })).subscribe({
              next: function next(response) {
                if (response.hasOwnProperty('success') && response.success === true) {
                  _this18.setAnexos(response.data);

                  _this18.urlAnexo = response.data;
                }
              },
              error: function error(_error11) {
                if (_error11['error'].hasOwnProperty('mensagem')) {
                  _this18.pnotifyService.error(_error11.error.mensagem);
                } else {
                  _this18.pnotifyService.error();
                }
              }
            });
          }
        }, {
          key: "setAnexos",
          value: function setAnexos(anexos) {
            if (anexos.length > 0) {
              for (var i = 0; i < anexos.length; i++) {
                this.onAddAnexos(anexos[i], true);
              }
            }
          }
        }, {
          key: "onAddAnexos",
          value: function onAddAnexos(anexo, manipulateForm) {
            if (this.checkAnexoExists(anexo) === false) {
              this.anexos.push(this.formBuilder.group({
                codAnexo: [anexo.codAnexo],
                nomeAnexo: [anexo.nomeAnexo],
                linkAnexo: [anexo.linkAnexo],
                urlAnexo: [anexo.urlAnexo]
              }));

              if (manipulateForm) {
                this.form.markAsTouched();
                this.form.markAsDirty();
              }
            }
          }
        }, {
          key: "checkAnexoExists",
          value: function checkAnexoExists(anexo) {
            return this.form.value.anexos.some(function (el) {
              return el.codAnexo === anexo.codAnexo || el.nomeAnexo == anexo.nomeAnexo;
            });
          }
        }, {
          key: "appendFile",
          value: function appendFile(files) {
            if (files.length === 0) return;
            var fd = new FormData();
            fd.append('file', files[0]);
            this.formData.push(fd);
            this.anexos.push(this.formBuilder.group({
              nomeAnexo: [files[0]['name']]
            }));

            if (this.showAnexos === false) {
              this.showAnexos = true;
            }
          }
        }, {
          key: "onPostAnexos",
          value: function onPostAnexos(codContrato) {
            var _this19 = this;

            if (this.formData.length === 0) {
              /* this.pnotifyService.notice('Erro'); */
              return;
            }
            /* const id = this.form.value.codMaterial; */


            this.formData.forEach(function (element, index) {
              _this19.contratosComerciaisService.postAnexos(element, codContrato).subscribe();
            });
          }
        }, {
          key: "onDeleteAnexo",
          value: function onDeleteAnexo(codAnexo, index) {
            var _this20 = this;

            this.confirmDelete().subscribe(function (r) {
              if (codAnexo) {
                _this20.loaderNavbar = true;

                _this20.contratosComerciaisService.deleteAnexo(codAnexo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(function () {
                  _this20.loaderNavbar = false;
                })).subscribe({
                  next: function next(response) {
                    if (response.hasOwnProperty('success') && response.success === true) {
                      r ? _this20.deleteDocumento(index) : null;
                    } else if (response.hasOwnProperty('success') && response.success === false && response.hasOwnProperty('mensagem')) {
                      _this20.pnotifyService.error(response.mensagem);
                    } else {
                      _this20.pnotifyService.error();
                    }
                  },
                  error: function error(_error12) {
                    if (_error12['error'].hasOwnProperty('mensagem')) {
                      _this20.pnotifyService.error(_error12.error.mensagem);
                    } else {
                      _this20.pnotifyService.error();
                    }
                  }
                });
              } else {
                r ? _this20.deleteDocumento(index) : null;

                _this20.formData.splice(index, 1);
              }
            });
          }
        }, {
          key: "deleteDocumento",
          value: function deleteDocumento(index) {
            this.anexos.removeAt(index);
            this.form.markAsTouched();
            this.form.markAsDirty();
          }
        }, {
          key: "checkValidatorsData",
          value: function checkValidatorsData() {
            var validation = true;
            var dtInicialContrato = this.form.value.dataInicialContrato;
            var dtFinalContrato = this.form.value.dataFinalContrato;

            for (var i = 0; i < this.assocMateriais.value.length; i++) {
              var dtInicialMateriais = this.assocMateriais.value[i].dtInicial;
              var dtFinalMateriais = this.assocMateriais.value[i].dtFinal;

              if (dtInicialMateriais > dtFinalMateriais) {
                validation = false;
                this.pnotifyService.error('A Data Inicial do material não pode ser maior que a Data Final.');
              } else if (dtInicialMateriais < dtInicialContrato && dtFinalContrato > dtInicialContrato || dtFinalMateriais > dtFinalContrato && dtInicialContrato < dtFinalContrato) {
                validation = false;
                this.pnotifyService.error('Verifique se as datas dos materiais estão em acordo com as datas do contrato.');
              }
            }

            if (dtInicialContrato > dtFinalContrato) {
              validation = false;
              this.pnotifyService.error('A Data Inicial do contrato não pode ser mario que a Data Final.');
            } else return validation;
          }
        }, {
          key: "getFilterValues",
          value: function getFilterValues() {
            var _this21 = this;

            this.materiaisGrupoService.getFilterValues().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(function () {
              _this21.loaderFullScreen = false;
            })).subscribe(function (response) {
              if (response[0].responseCode === 200) {
                _this21.linhas = response[0].result;
              } else {
                _this21.pnotifyService.error();

                _this21.location.back();
              }

              if (response[1].responseCode === 200) {
                _this21.classes = response[1].result;
              } else {
                _this21.pnotifyService.error();

                _this21.location.back();
              }
            });
            this.comercialService.getEmpresas({
              tipo: 'faturamento'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(function () {
              _this21.loaderFullScreen = false;
            })).subscribe({
              next: function next(response) {
                _this21.empresas = response.result;
              },
              error: function error(_error13) {
                _this21.pnotifyService.error('Ocorreu um erro ao carregar filtros.');

                _this21.location.back();
              }
            });
          }
        }, {
          key: "onCancel",
          value: function onCancel() {
            this.location.back();
          }
        }, {
          key: "onInput",
          value: function onInput() {
            this.formChanged = true;
          } //Ação de Edição ou novo Formulário

        }, {
          key: "onSubmit",
          value: function onSubmit(codSituacao) {
            var _this22 = this;

            this.form.get('codSituacao').setValue(codSituacao);
            var record = this.form.value;

            if (this.form.value.grupoEconomico != null) {
              record.codCliente = [record.codCliente].concat(_toConsumableArray(record.grupoEconomico)).toString();
            }

            if (this.action === 'update' && this.form.valid && this.checkValidatorsData()) {
              this.onPostAnexos(this.form.value.codContrato);
              this.contratosComerciaisService.save(record, this.action).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(function () {
                _this22.loaderNavbar = false;
                _this22.submittingForm = false;
              })).subscribe({
                next: function next(response) {
                  if (response.hasOwnProperty('success') && response.success === true) {
                    _this22.onPostAnexos(_this22.form.value.codContrato); //this.form.reset();


                    _this22.formChanged = false;

                    _this22.pnotifyService.success();

                    _this22.activatedRoute.params.subscribe(function (params) {
                      var navigateTo;

                      if (params.hasOwnProperty('id')) {
                        navigateTo = '../../lista';
                      } else {
                        navigateTo = '../lista';
                      }

                      _this22.router.navigate([navigateTo], {
                        relativeTo: _this22.activatedRoute
                      });
                    });
                  } else if (response.hasOwnProperty('success') && response.success === false) {
                    _this22.pnotifyService.error(response.mensagem);
                  } else {
                    _this22.pnotifyService.error();
                  }
                },
                error: function error(_error14) {
                  _this22.pnotifyService.error();
                }
              });
            } else {
              if (this.checkFormValidation() && this.form.valid && this.checkValidatorsData()) {
                if (this.form.value.assocMateriais.length > 0) {
                  this.loaderNavbar = true;
                  this.submittingForm = true;
                  this.contratosComerciaisService.save(record, this.action).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(function () {
                    _this22.loaderNavbar = false;
                    _this22.submittingForm = false;
                  })).subscribe({
                    next: function next(response) {
                      var _a;

                      if (response.hasOwnProperty('success') && response.success === true) {
                        _this22.onPostAnexos((_a = response.data) === null || _a === void 0 ? void 0 : _a.codContrato); //this.form.reset();


                        _this22.formChanged = false;

                        _this22.pnotifyService.success();

                        _this22.activatedRoute.params.subscribe(function (params) {
                          var navigateTo;

                          if (params.hasOwnProperty('id')) {
                            navigateTo = '../../lista';
                          } else {
                            navigateTo = '../lista';
                          }

                          _this22.router.navigate([navigateTo], {
                            relativeTo: _this22.activatedRoute
                          });
                        });
                      } else if (response.hasOwnProperty('success') && response.success === false) {
                        _this22.pnotifyService.error(response.mensagem);
                      } else {
                        _this22.pnotifyService.error();
                      }
                    },
                    error: function error(_error15) {
                      _this22.pnotifyService.error();
                    }
                  });
                } else {
                  if (this.checkValidatorsData() === false) {
                    this.pnotifyService.notice('Associe pelo menos um material.');
                  }
                }
              } else {
                if (this.checkValidatorsData() === false) {
                  this.pnotifyService.notice('Selecione um material.');
                }
              }
            }
          }
        }, {
          key: "onChangeServico",
          value: function onChangeServico() {
            this.changeTipoServico = false;

            if (this.form.value.codTipoServico === 1) {
              this.changeTipoServico = true;
              this.formMateriais.get('codLinha').setValue(1);
              this.onChangeLinha(1);
              this.formMateriais.get('codClasse').setValue(80);
              this.onChangeClasse(80);
              this.form.get('valorServico').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].min(0.01)]);
              this.form.controls.valorServico.updateValueAndValidity();
            } else if (this.form.value.codTipoServico === 2) {
              this.changeTipoServico = false;
              this.form.get('codPeso').setValue('0');
              this.formMateriais.get('codLinha').reset();
              this.formMateriais.get('codClasse').reset();
              this.formMateriais.get('codMaterial').reset();
              this.formMateriais.get('codClasse').disable();
              this.formMateriais.get('codMaterial').disable();
              this.form.get('valorServico').setValidators([]);
              this.form.controls.valorServico.updateValueAndValidity();
            } else {
              this.formMateriais.get('codLinha').reset();
              this.formMateriais.get('codClasse').reset();
              this.formMateriais.get('codMaterial').reset();
              this.formMateriais.get('codClasse').disable();
              this.formMateriais.get('codMaterial').disable();
            }
          } // Get perfil

        }, {
          key: "getPerfil",
          value: function getPerfil() {
            var _this23 = this;

            this.comercialService.getPerfil().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(function () {})).subscribe({
              next: function next(response) {
                if (response.responseCode === 200) {
                  _this23.profile = response.result;

                  if (_this23.profile.coordenador === true || _this23.profile.gestor === true && _this23.profile.vendedor === true && _this23.profile.coordenador === false && _this23.profile.gestor === false && _this23.profile.hasVinculoOperadores === true) {
                    _this23.checkRouterParams();
                  } else if (_this23.profile.vendedor === true && _this23.profile.coordenador === false && _this23.profile.gestor === false && _this23.profile.hasVinculoOperadores === true) {
                    _this23.idVendedor = _this23.user.info.idVendedor;
                    _this23.idEscritorio = _this23.user.info.idEscritorio;

                    _this23.form.get('codVendedor').setValue(parseInt(_this23.user.info.idVendedor));

                    _this23.form.get('codGerencia').setValue(parseInt(_this23.user.info.idEscritorio));

                    _this23.desativado = true;
                    _this23.showDashboard = true;
                  } else {
                    _this23.showPermissionDenied = true;
                  }
                } else {
                  _this23.showPermissionDenied = true;
                }
              },
              error: function error(_error16) {
                _this23.showPermissionDenied = true;
              }
            });
          }
        }, {
          key: "checkRouterParams",
          value: function checkRouterParams() {
            var _this24 = this;

            var formValue = {
              nomeContrato: null,
              dataInicial: this.dateService.getFirstDayMonth(),
              dataFinal: this.dateService.getLastDayMonth(),
              cliente: null,
              vendedor: 0,
              situacao: 0,
              registros: 300
            };
            this.activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (queryParams) {
              if (Object.keys(queryParams).length > 0) {
                var params = atob(queryParams['q']);
                Object.keys(formValue).forEach(function (formKey) {
                  Object.keys(params).forEach(function (paramKey) {
                    if (formKey == paramKey && formValue[formKey] != params[paramKey]) {
                      if (formKey === 'dataInicial' || formKey === 'dataFinal') {
                        formValue[formKey] = _this24.dateService.convertStringToDate(params[paramKey], 'pt-br');
                      } else {
                        if (!isNaN(Number(params[paramKey]))) {
                          formValue[formKey] = Number(params[paramKey]);
                        } else {
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
        }, {
          key: "getTipoFrete",
          value: function getTipoFrete() {
            var _this25 = this;

            this.contratosComerciaisService.getTiposFrete().subscribe({
              next: function next(response) {
                if (response) {
                  _this25.tipoFrete = response.data;

                  _this25.tipoFrete.unshift({
                    codigo: 0,
                    descricao: 'Sem Frete'
                  });
                } else {
                  _this25.pnotifyService.error();

                  _this25.location.back();
                }
              },
              error: function error(_error17) {
                _this25.pnotifyService.error();

                _this25.location.back();
              }
            });
          }
        }, {
          key: "getTipoServico",
          value: function getTipoServico() {
            var _this26 = this;

            this.contratosComerciaisService.getTipoServico().subscribe({
              next: function next(response) {
                if (response) {
                  _this26.tipoServico = response.data.filter(function (tipoServico) {
                    return (tipoServico === null || tipoServico === void 0 ? void 0 : tipoServico.nomeTipoServico) == 'Outros';
                  });
                } else {
                  _this26.pnotifyService.error();

                  _this26.location.back();
                }
              },
              error: function error(_error18) {
                _this26.pnotifyService.error();

                _this26.location.back();
              }
            });
          }
        }, {
          key: "getFormaPagamento",
          value: function getFormaPagamento() {
            var _this27 = this;

            var params = {
              codSituacao: 1
            };
            this.formaPagamentoService.getListaFormasPagamento(params).subscribe({
              next: function next(response) {
                if (response) {
                  _this27.formaPagamento = response.data;
                } else {
                  _this27.pnotifyService.error();

                  _this27.location.back();
                }
              },
              error: function error(_error19) {
                _this27.pnotifyService.error();

                _this27.location.back();
              }
            });
          }
        }, {
          key: "setClienteSubscription",
          value: function setClienteSubscription() {
            var _this28 = this;

            this.codClienteSubscription = this.formularioService.codCliente.subscribe(function (codCliente) {
              _this28.form.controls.codCliente.setValue(codCliente);

              _this28.onChangeCliente(codCliente, 'user');
            });
          }
        }, {
          key: "onChangeCliente",
          value: function onChangeCliente(codCliente, source) {
            this.form.controls.codCliente.setValue(codCliente);
            this.codClientErrors = false;
          }
        }, {
          key: "onLoadCliente",
          value: function onLoadCliente(event) {
            this.isCarteiraClientesLoaded = event;
          }
        }, {
          key: "checkFormValidation",
          value: function checkFormValidation() {
            var isValid = true;

            if (this.form.getRawValue().id === null) {
              isValid = false;
            }

            return isValid;
          }
        }, {
          key: "navegarAnexo",
          value: function navegarAnexo(anexo) {
            this.router.navigate([], {
              relativeTo: this.activatedRoute
            }).then(function (result) {
              window.open("".concat(anexo.value.urlAnexo), '_blank');
            });
          }
        }, {
          key: "setFormMateriais",
          value: function setFormMateriais() {
            this.formMateriais = this.formBuilder.group({
              codLinha: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
              codClasse: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
              codMaterial: [null]
            });
            this.formMateriais.get('codClasse').disable();
            this.formMateriais.get('codMaterial').disable();
          }
        }, {
          key: "setMateriais",
          value: function setMateriais(materiais) {
            var _this29 = this;

            materiais.forEach(function (material) {
              return _this29.onAddMaterial(material);
            });
          }
        }, {
          key: "onAddMaterial",
          value: function onAddMaterial(material, manipulateForm) {
            var _this30 = this;

            if (this.codClasse === null) {
              this.codClasse = material.codClasse;
            }

            this.valorFinalUpdate = material.valorMaterial + this.form.value.valorServico; // if (this.codClasse === material.codClasse) {

            if (this.checkMaterialExists(material) === false) {
              this.assocMateriais.push(this.formBuilder.group({
                codAssociacao: [material.codAssociacao],
                codMaterial: [material.codMaterial],
                nomeMaterial: [material.nomeMaterial],
                codClasse: [material.codClasse],
                precoOriginal: [material.valorOriginalMaterial],
                precoAlterado: [material.valorMaterial, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
                qtdadeMaxima: [material.qtdeMaximaConsumo, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
                valorFinal: [material.valorMaterial + this.form.value.valorServico]
              }));

              if (this.form.value.assocMateriais.length > 9) {
                if (this.tableConfigAssocMateriais.fixedHeader === false) {
                  this.showMateriais = false;
                  this.tableConfigAssocMateriais.fixedHeader = true;
                  setTimeout(function () {
                    _this30.showMateriais = true;
                  }, 1);
                }
              }

              if (manipulateForm) {
                this.form.markAsTouched();
                this.form.markAsDirty();
              }
            } // } else {
            //   this.pnotifyService.notice('Associe apenas materiais da mesma classe.');
            // }

          }
        }, {
          key: "changeTipoFrete",
          value: function changeTipoFrete() {
            this.changeTipo = false;

            if (this.form.value.tipoFrete === 1) {
              this.changeTipo = true;
            }
          }
        }, {
          key: "checkMaterialExists",
          value: function checkMaterialExists(material) {
            return this.form.value.assocMateriais.some(function (el) {
              return el.codMaterial === material.codMaterial;
            });
          }
        }, {
          key: "onLimparAssociacoes",
          value: function onLimparAssociacoes() {
            var assocMateriais = this.form.get('assocMateriais');
            assocMateriais.clear();
            this.codClasse = null;
          }
        }, {
          key: "onDeleteMaterial",
          value: function onDeleteMaterial(index) {
            var _this31 = this;

            this.confirmDelete().subscribe(function (response) {
              return response ? _this31.deleteMaterial(index) : null;
            });
          }
        }, {
          key: "confirmDelete",
          value: function confirmDelete() {
            return this.confirmModalService.showConfirm('delete', 'Confirmar exclusão', 'Deseja realmente prosseguir com a exclusão do registro?', 'Cancelar', 'Confirmar');
          }
        }, {
          key: "deleteMaterial",
          value: function deleteMaterial(index) {
            this.assocMateriais.removeAt(index);
            this.form.markAsTouched();
            this.form.markAsDirty();
          }
        }, {
          key: "onChangeLinha",
          value: function onChangeLinha(codLinha) {
            this.formMateriais.controls.codClasse.reset();
            this.formMateriais.controls.codClasse.setValue(null);
            this.formMateriais.controls.codClasse.enable();
            this.formMateriais.controls.codClasse.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]);
            this.formMateriais.controls.codClasse.updateValueAndValidity();
            this.formMateriais.controls.codMaterial.reset();
            this.formMateriais.controls.codMaterial.disable();
            this.formMateriais.controls.codMaterial.setValue(null);
            this.formMateriais.controls.codMaterial.updateValueAndValidity();
            this.filteredClasses = this.classes.filter(function (value) {
              return value.idLinha == codLinha;
            }); // if (this.form.value.codTipoServico === 1 && this.formMateriais.value.codLinha === 1) {
            //   this.formMateriais.get('codClasse').setValue(80);
            // }
          }
        }, {
          key: "onChangeClasse",
          value: function onChangeClasse(codClasse) {
            this.formMateriais.controls.codMaterial.reset();
            this.formMateriais.controls.codMaterial.enable();
            this.formMateriais.controls.codMaterial.setValue(null);
            this.formMateriais.controls.codMaterial.updateValueAndValidity();
            this.getMateriais(codClasse);
          }
        }, {
          key: "getMateriais",
          value: function getMateriais(codClasse) {
            var _this32 = this;

            var _a;

            if (typeof codClasse !== 'undefined' && codClasse !== null) {
              if (this.checkFieldErrors() === false) {
                this.materiaisLoader = true;
                this.materiais = [];
                var codEmpresa = (_a = this.form.get('codEmpresa').value) !== null && _a !== void 0 ? _a : '';
                var codEnderecoEntrega = this.form.value.codEnderecoEntrega;
                var codCliente = this.form.getRawValue().codCliente;
                this.contratosComerciaisService.getMateriais({
                  codClasse: codClasse,
                  codEmpresa: codEmpresa,
                  codEnderecoEntrega: codEnderecoEntrega,
                  codCliente: codCliente
                }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(function () {
                  _this32.materiaisLoader = false;
                })).subscribe({
                  next: function next(response) {
                    if (response.hasOwnProperty('success') && response.success === true) {
                      _this32.materiais = response.data;

                      _this32.materiais.unshift({
                        codigoMaterial: 0,
                        codigoDescricaoMaterial: 'EXIBIR TODOS'
                      });

                      _this32.formMateriais.controls.codMaterial.setValue(0);
                    } else {
                      _this32.pnotifyService.notice(response.mensagem);
                    }
                  },
                  error: function error(_error20) {
                    if (_error20['error'].hasOwnProperty('mensagem')) {
                      _this32.pnotifyService.error(_error20.error.mensagem);
                    } else {
                      _this32.pnotifyService.error();
                    }
                  }
                });
              }
            }
          }
        }, {
          key: "onFilterMateriais",
          value: function onFilterMateriais() {
            var _this33 = this;

            if (this.formMateriais.valid) {
              if (this.checkFieldErrors() === false) {
                this.loaderNavbar = true;
                this.searching = true;
                this.materiaisLista = [];
                this.materiaisListaLoaded = false;
                this.materiaisListaEmpty = false;
                var codEmpresa = this.form.get('codEmpresa').value;
                var codEnderecoEntrega = this.form.value.codEnderecoEntrega;
                var codCliente = this.form.getRawValue().codCliente;
                var params = {
                  codClasse: this.formMateriais.value.codClasse,
                  codEmpresa: codEmpresa,
                  codEnderecoEntrega: codEnderecoEntrega,
                  codCliente: codCliente
                };

                if (this.formMateriais.value.codMaterial !== 0) {
                  Object.assign(params, {
                    codMaterial: this.formMateriais.value.codMaterial
                  });
                }

                this.contratosComerciaisService.getMateriais(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(function () {
                  _this33.firstSearch = true;
                  _this33.searching = false;
                  _this33.loaderNavbar = false;
                  _this33.materiaisListaLoaded = true;
                })).subscribe({
                  next: function next(response) {
                    if (response.hasOwnProperty('success') && response.success === true) {
                      _this33.materiaisLista = response.data.map(function (el) {
                        var o = Object.assign({}, el);
                        o.checked = 0;
                        return o;
                      });

                      if (_this33.materiaisLista.length > 9) {
                        _this33.tableConfigMateriais.fixedHeader = true;
                      } else {
                        _this33.tableConfigMateriais.fixedHeader = false;
                      }
                    } else if (response.hasOwnProperty('success') && response.success === false && response.hasOwnProperty('mensagem')) {
                      _this33.pnotifyService.error(response.mensagem);

                      _this33.materiaisListaEmpty = true;
                    } else {
                      _this33.pnotifyService.error();

                      _this33.materiaisListaEmpty = true;
                    }
                  },
                  error: function error(_error21) {
                    if (_error21['error'].hasOwnProperty('mensagem')) {
                      _this33.pnotifyService.error(_error21.error.mensagem);
                    } else {
                      _this33.pnotifyService.error();
                    }
                  }
                });
              }
            }
          }
        }, {
          key: "checkFieldErrors",
          value: function checkFieldErrors() {
            var hasError = false;

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
        }, {
          key: "onToggleAll",
          value: function onToggleAll() {
            this.toggleAll = !this.toggleAll;

            for (var index = 0; index < this.materiaisLista.length; index++) {
              this.materiaisLista[index].checked = this.toggleAll === true ? 1 : 0;
            }
          }
        }, {
          key: "onCheckMaterial",
          value: function onCheckMaterial(index, material) {
            this.materiaisLista[index].checked = material.checked == 0 ? 1 : 0;
          }
        }, {
          key: "onAssociarMateriais",
          value: function onAssociarMateriais() {
            var _this34 = this;

            this.toggleAll = false;
            this.materiaisLista.filter(function (material) {
              return material.checked === 1;
            }).forEach(function (material) {
              _this34.onAddMaterial({
                codMaterial: material.codigoMaterial,
                nomeMaterial: material.descricao,
                codClasse: material.codClasse,
                valorOriginalMaterial: material.valorOriginalMaterial,
                inCorteDobra: material.inCorteDobra
              }, true);
            });
            this.materiaisLista = this.materiaisLista.filter(function (material) {
              return material.checked === 0;
            });
          }
        }, {
          key: "setGrupos",
          value: function setGrupos(grupos) {
            if (grupos.length > 0) {
              for (var i = 0; i < grupos.length; i++) {
                this.onAddGrupo(grupos[i], false);
              }
            }
          }
        }, {
          key: "onAddGrupo",

          /**
           * @source = 'application' || 'user'
           */
          value: function onAddGrupo(grupo, manipulateForm) {
            var _this35 = this;

            if (this.checkGrupoExists(grupo) === false) {
              this.assocGrupos.push(this.formModelo.value); // this.assocGrupos.push(this.valor)

              if (this.form.value.assocGrupos.length > 9) {
                if (this.tableConfigAssocGrupos.fixedHeader === false) {
                  this.showGrupos = false;
                  this.tableConfigAssocGrupos.fixedHeader = true;
                  setTimeout(function () {
                    _this35.showGrupos = true;
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
        }, {
          key: "checkGrupoExists",
          value: function checkGrupoExists(grupo) {
            return this.form.value.assocGrupos.some(function (el) {
              return el.codGrupo === grupo.codGrupo;
            });
          }
        }, {
          key: "grupoAssociado",
          value: function grupoAssociado(material) {
            this.onAddGrupo(material, true);
          }
        }, {
          key: "onAssociarGrupos",
          value: function onAssociarGrupos() {
            this.toggle = false;

            for (var index = 0; index < this.dados.length; index++) {
              if (this.dados[index] === 1) {
                var grupo = {
                  codGrupo: this.dados[index].codGrupo,
                  de: this.dados[index].de,
                  ate: this.dados[index].ate,
                  valorComissao: this.dados[index].valorComissao,
                  valorFixo: this.dados[index].valorFixo
                };
                this.grupoAssociado(grupo);
                this.dados[index].checked = 0;
              }
            }
          } // Consulta selects

        }, {
          key: "getSituacao",
          value: function getSituacao() {
            var _this36 = this;

            this.contratosComerciaisService.getSituacao().subscribe({
              next: function next(response) {
                if (response.success === true) {
                  _this36.situacoes = response.data;
                } else {
                  _this36.pnotifyService.error();

                  _this36.location.back();
                }
              },
              error: function error(_error22) {
                _this36.pnotifyService.error();

                _this36.location.back();
              }
            });
          } // CheckBox

        }, {
          key: "onChecked",
          value: function onChecked() {
            this.formModelo.get('de').disable();
            this.formModelo.get('ate').disable();
          } // modal

        }, {
          key: "openModal",
          value: function openModal(template) {
            this.modalRef = this.modalService.show(template, {
              animated: false,
              "class": 'modal-xl'
            });
          } // Tratamento de erros

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

            if (field.errors != null) {
              if (field.errors.hasOwnProperty('required') && field.touched) {
                return 'required';
              }
            }

            return '';
          }
        }, {
          key: "onFieldRequired",
          value: function onFieldRequired(field) {
            var required = false;
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](); // && this.assocMateriais.controls['controls'][field].validator

            if (this.form.controls[field].validator) {
              var validationResult = this.form.controls[field].validator(formControl);
              required = validationResult !== null && validationResult.required === true;
            }

            if (required) {
              return 'is-required';
            }
          } // Tratamento de erros Form Material

        }, {
          key: "onFieldErrorFormMaterial",
          value: function onFieldErrorFormMaterial(field) {
            if (this.onFieldInvalidFormMaterial(field)) {
              return 'is-invalid';
            }

            return '';
          }
        }, {
          key: "onFieldInvalidFormMaterial",
          value: function onFieldInvalidFormMaterial(field) {
            field = this.formMateriais.get(field);

            if (field.errors != null) {
              if (field.errors.hasOwnProperty('required') && field.touched) {
                return 'required';
              }
            }

            return '';
          }
        }, {
          key: "onFieldRequiredFormMaterial",
          value: function onFieldRequiredFormMaterial(field) {
            var required = false;
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]();

            if (this.formMateriais.controls[field].validator) {
              var validationResult = this.formMateriais.controls[field].validator(formControl);
              required = validationResult !== null && validationResult.required === true;
            }

            if (required) {
              return 'is-required';
            }
          }
        }, {
          key: "formCanDeactivate",
          value: function formCanDeactivate() {
            if (this.formChanged) {
              if (confirm('Este cliente no forma parte de tu cartera?')) {
                return true;
              } else {
                return false;
              }
            }

            return true;
          }
        }, {
          key: "onNestedFieldError",
          value: function onNestedFieldError(formGroup, index, field) {
            if (this.onNestedFieldInvalid(formGroup, index, field)) {
              return 'is-invalid';
            }

            return '';
          }
        }, {
          key: "onNestedFieldInvalid",
          value: function onNestedFieldInvalid(formGroup, index, field) {
            var nestedForm = this.form.controls[formGroup];
            field = nestedForm.controls[index].get(field);
            return field.status == 'INVALID' && field.touched;
          }
        }, {
          key: "onNestedFieldRequired",
          value: function onNestedFieldRequired(formGroup, index, field) {
            var required = false;
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]();
            var nestedForm = this.form.controls[formGroup];

            if (nestedForm.controls[index].get(field).validator) {
              var validationResult = nestedForm.controls[index].get(field).validator(formControl);
              required = validationResult !== null && validationResult.required === true;
            }

            if (required) {
              return 'is-required';
            }
          }
        }, {
          key: "geetParams",
          value: function geetParams(params) {
            var dataInicial = params['dataInicialVigencia'];
            var dataFinal = params['dataFimVigencia'];
            this.form.patchValue({
              dataInicialVigencia: dataInicial,
              dataFimVigencia: dataFinal
            });

            if (dataInicial instanceof Date) {
              dataInicial = this.dateService.convertToUrlDate(dataInicial);
            }

            if (dataFinal instanceof Date) {
              dataFinal = this.dateService.convertToUrlDate(dataFinal);
            }

            return {
              dataInicial: {
                dataInicial: dataInicial
              },
              dataFinal: {
                dataFinal: dataFinal
              }
            };
          }
        }, {
          key: "onFecharModal",
          value: function onFecharModal(event) {
            this.modalRef.hide();
          }
        }, {
          key: "setLoaderEvents",
          value: function setLoaderEvents() {
            var _this37 = this;

            this.loaderDetalhesClienteSubscription = this.clienteDetalhesService.loaderNavbar.subscribe(function (response) {
              _this37.loaderNavbar = response;
            });
          }
        }, {
          key: "unsetLoaderEvents",
          value: function unsetLoaderEvents() {
            this.loaderDetalhesClienteSubscription.unsubscribe();
          }
        }, {
          key: "onClienteDetalhes",
          value: function onClienteDetalhes() {
            this.clienteDetalhesService.showModal(this.form.value.codCliente);
          }
        }, {
          key: "onCliente",
          value: function onCliente(event) {
            this.form.patchValue(event);
            this.onChangeCliente(event.codCliente, 'user');
            this.onLoadCliente(true);
          }
        }, {
          key: "anexos",
          get: function get() {
            return this.form.get('anexos');
          }
        }, {
          key: "assocMateriais",
          get: function get() {
            return this.form.get('assocMateriais');
          }
        }, {
          key: "assocGrupos",
          get: function get() {
            return this.form.get('assocGrupos');
          }
        }]);

        return ComercialGestaoContratosComerciaisFormularioComponent;
      }();

      ComercialGestaoContratosComerciaisFormularioComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }, {
          type: _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__["DateService"]
        }, {
          type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_21__["BsLocaleService"]
        }, {
          type: _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_13__["PNotifyService"]
        }, {
          type: _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_17__["ConfirmModalService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"]
        }, {
          type: _contratos_comerciais_service__WEBPACK_IMPORTED_MODULE_4__["ComercialGestaoContratosComerciaisService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _comercial_service__WEBPACK_IMPORTED_MODULE_14__["ComercialService"]
        }, {
          type: _cadastros_materiais_grupos_grupos_service__WEBPACK_IMPORTED_MODULE_16__["ComercialCadastrosMateriaisGrupoService"]
        }, {
          type: _shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"]
        }, {
          type: _ciclo_vendas_pedidos_producao_telas_formulario_formulario_service__WEBPACK_IMPORTED_MODULE_5__["ComercialCicloVendasPedidosProducaoTelasFormularioService"]
        }, {
          type: _cadastros_formas_pagamento_formas_pagamento_service__WEBPACK_IMPORTED_MODULE_3__["ComercialCadastrosFormasPagamentoService"]
        }, {
          type: _services_clientes_service__WEBPACK_IMPORTED_MODULE_20__["ComercialClientesService"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_23__["BsModalService"]
        }, {
          type: _modal_detalhes_cliente_service__WEBPACK_IMPORTED_MODULE_18__["ComercialGestaoContratosComerciaisFormularioModalDetalhesService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_19__["TitleService"]
        }];
      };

      ComercialGestaoContratosComerciaisFormularioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'comercial-gestao-contratos-comerciais-formulario',
        template: _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__["DateService"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_21__["BsLocaleService"], _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_13__["PNotifyService"], _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_17__["ConfirmModalService"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"], _contratos_comerciais_service__WEBPACK_IMPORTED_MODULE_4__["ComercialGestaoContratosComerciaisService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _comercial_service__WEBPACK_IMPORTED_MODULE_14__["ComercialService"], _cadastros_materiais_grupos_grupos_service__WEBPACK_IMPORTED_MODULE_16__["ComercialCadastrosMateriaisGrupoService"], _shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"], _ciclo_vendas_pedidos_producao_telas_formulario_formulario_service__WEBPACK_IMPORTED_MODULE_5__["ComercialCicloVendasPedidosProducaoTelasFormularioService"], _cadastros_formas_pagamento_formas_pagamento_service__WEBPACK_IMPORTED_MODULE_3__["ComercialCadastrosFormasPagamentoService"], _services_clientes_service__WEBPACK_IMPORTED_MODULE_20__["ComercialClientesService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_23__["BsModalService"], _modal_detalhes_cliente_service__WEBPACK_IMPORTED_MODULE_18__["ComercialGestaoContratosComerciaisFormularioModalDetalhesService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_19__["TitleService"]])], ComercialGestaoContratosComerciaisFormularioComponent);
      /***/
    },

    /***/
    "lEDy":
    /*!********************************************************************************************************!*\
      !*** ./src/app/modules/comercial/gestao/contratos-comerciais/templates/clientes/clientes.component.ts ***!
      \********************************************************************************************************/

    /*! exports provided: ComercialGestaoContratosComerciaisFormularioTemplateClientesComponent */

    /***/
    function lEDy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialGestaoContratosComerciaisFormularioTemplateClientesComponent", function () {
        return ComercialGestaoContratosComerciaisFormularioTemplateClientesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_clientes_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./clientes.component.html */
      "cY1h");
      /* harmony import */


      var _clientes_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./clientes.component.scss */
      "SYP8");
      /* harmony import */


      var _ciclo_vendas_cotacoes_formulario_formulario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../../ciclo-vendas/cotacoes/formulario/formulario.service */
      "/Zk1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var ComercialGestaoContratosComerciaisFormularioTemplateClientesComponent = /*#__PURE__*/function () {
        function ComercialGestaoContratosComerciaisFormularioTemplateClientesComponent(formBuilder, formularioService) {
          _classCallCheck(this, ComercialGestaoContratosComerciaisFormularioTemplateClientesComponent);

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

        _createClass(ComercialGestaoContratosComerciaisFormularioTemplateClientesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.checkCarteiraClientes();
            this.setFormBuilder();
            this.getCarteiraClientes();
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(event) {
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
                  this.form.controls.codCliente.setErrors({
                    incorrect: true
                  });
                } else {
                  this.form.controls.codCliente.markAsUntouched();
                  this.form.controls.codCliente.setErrors(null);
                }
              }
            }
          }
        }, {
          key: "checkCarteiraClientes",
          value: function checkCarteiraClientes() {
            var _carteiraClientes = this.formularioService.getCurrentCarteiraClientes();

            if (_carteiraClientes.length > 0) {
              this.carteiraClientes = _carteiraClientes;
            } else {
              this.getCarteiraClientes();
              /* if (this.acessoClientes === false) {
                this.getCarteiraClientes();
              } else {
                this.setAsyncSearch();
              } */
            }
          }
        }, {
          key: "getCarteiraClientes",
          value: function getCarteiraClientes() {
            var _this38 = this;

            this.clientesLoader = true;
            this.formularioService.getCarteiraClientes().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this38.clientesLoader = false;
            })).subscribe(function (response) {
              if (response.success === true) {
                _this38.carteiraClientes = response.data;

                _this38.formularioService.createCarteiraClientes(_this38.carteiraClientes);

                _this38.onLoad.emit(true);
              }
            });
          }
        }, {
          key: "setAsyncSearch",
          value: function setAsyncSearch() {
            var _this39 = this;

            this.carteiraClientes$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["concat"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])([]), this.input$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(function () {
              _this39.clientesLoader = true;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (termoPesquisa) {
              return _this39.formularioService.getPesquisaCliente(termoPesquisa).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(function () {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])([]);
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(function () {
                _this39.clientesLoader = false;
              }));
            })));
          }
        }, {
          key: "setFormBuilder",
          value: function setFormBuilder() {
            this.form = this.formBuilder.group({
              codCliente: [{
                value: this.codCliente,
                disabled: this.isDisabled
              }]
            });
            this.checkValidators();
          }
        }, {
          key: "checkValidators",
          value: function checkValidators() {
            if (this.asFormField === true) {
              this.form.controls.codCliente.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]);
              this.form.controls.codCliente.updateValueAndValidity();
            }
          }
        }, {
          key: "onChangeDisable",
          value: function onChangeDisable(disabled) {
            if (disabled === true) {
              this.form.controls.codCliente.disable();
            } else {
              this.form.controls.codCliente.enable();
            }
          }
        }, {
          key: "onClear",
          value: function onClear() {
            this.form.controls.codCliente.setValue(null);
            this.form.controls.codCliente.markAsUntouched();
            this.onChangeCliente();
          }
        }, {
          key: "onChangeCliente",
          value: function onChangeCliente() {
            this.onChange.emit(this.form.value.codCliente);
          }
        }, {
          key: "onFieldError",
          value: function onFieldError(field) {
            if ((this.asFormField === true && this.onFieldInvalid(field)) != '') {
              return 'is-invalid';
            }

            return '';
          }
        }, {
          key: "onFieldInvalid",
          value: function onFieldInvalid(field) {
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
        }, {
          key: "onFieldRequired",
          value: function onFieldRequired(field) {
            var required = false;
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();

            if (this.asFormField === true && this.form.controls[field].validator) {
              var validationResult = this.form.controls[field].validator(formControl);
              required = validationResult !== null && validationResult.required === true;
            }

            if (required) {
              return 'is-required';
            }
          }
        }]);

        return ComercialGestaoContratosComerciaisFormularioTemplateClientesComponent;
      }();

      ComercialGestaoContratosComerciaisFormularioTemplateClientesComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _ciclo_vendas_cotacoes_formulario_formulario_service__WEBPACK_IMPORTED_MODULE_3__["ComercialCicloVendasCotacoesFormularioService"]
        }];
      };

      ComercialGestaoContratosComerciaisFormularioTemplateClientesComponent.propDecorators = {
        acessoClientes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
          args: ['acessoClientes']
        }],
        isDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
          args: ['isDisabled']
        }],
        codCliente: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
          args: ['codCliente']
        }],
        visualizar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
          args: ['visualizar']
        }],
        asFormField: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
          args: ['asFormField']
        }],
        setErrors: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
          args: ['setErrors']
        }],
        onChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
          args: ['onChange']
        }],
        onLoad: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
          args: ['onLoad']
        }]
      };
      ComercialGestaoContratosComerciaisFormularioTemplateClientesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'comercial-gestao-contratos-comerciais-formulario-template-clientes',
        template: _raw_loader_clientes_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_clientes_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _ciclo_vendas_cotacoes_formulario_formulario_service__WEBPACK_IMPORTED_MODULE_3__["ComercialCicloVendasCotacoesFormularioService"]])], ComercialGestaoContratosComerciaisFormularioTemplateClientesComponent);
      /***/
    },

    /***/
    "sMXb":
    /*!****************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/gestao/contratos-comerciais/formulario/modal/detalhes/cliente.component.scss ***!
      \****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function sMXb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2dlc3Rhby9jb250cmF0b3MtY29tZXJjaWFpcy9mb3JtdWxhcmlvL21vZGFsL2RldGFsaGVzL2NsaWVudGUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "tnBs":
    /*!************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/gestao/contratos-comerciais/formulario/modal/detalhes/cliente.service.ts ***!
      \************************************************************************************************************/

    /*! exports provided: ComercialGestaoContratosComerciaisFormularioModalDetalhesService */

    /***/
    function tnBs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialGestaoContratosComerciaisFormularioModalDetalhesService", function () {
        return ComercialGestaoContratosComerciaisFormularioModalDetalhesService;
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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var _cliente_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./cliente.component */
      "Pqti");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/modules/comercial/services/clientes.service */
      "8ouN"); // ngx-bootstrap
      // Components
      // Services


      var ComercialGestaoContratosComerciaisFormularioModalDetalhesService = /*#__PURE__*/function () {
        function ComercialGestaoContratosComerciaisFormularioModalDetalhesService(modalService, pnotifyService, clientesService) {
          _classCallCheck(this, ComercialGestaoContratosComerciaisFormularioModalDetalhesService);

          this.modalService = modalService;
          this.pnotifyService = pnotifyService;
          this.clientesService = clientesService;
          this.loaderNavbar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialGestaoContratosComerciaisFormularioModalDetalhesService, [{
          key: "showModal",
          value: function showModal(codCliente) {
            var _this40 = this;

            this.loaderNavbar.emit(true);
            this.clientesService.getDetalhes(codCliente).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () {
              _this40.loaderNavbar.emit(false);
            })).subscribe({
              next: function next(response) {
                if (response.success === true) {
                  var modalConfig = {
                    animated: false
                  };
                  var initialState = {
                    cliente: response.data
                  };

                  _this40.modalService.show(_cliente_component__WEBPACK_IMPORTED_MODULE_4__["ComercialGestaoContratosComerciaisFormularioModalDetalhesComponent"], Object.assign({}, modalConfig, {
                    initialState: initialState
                  }));
                } else {
                  _this40.pnotifyService.error();
                }
              },
              error: function error(_error23) {
                _this40.pnotifyService.error();
              }
            });
          }
        }]);

        return ComercialGestaoContratosComerciaisFormularioModalDetalhesService;
      }();

      ComercialGestaoContratosComerciaisFormularioModalDetalhesService.ctorParameters = function () {
        return [{
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"]
        }, {
          type: src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_6__["ComercialClientesService"]
        }];
      };

      ComercialGestaoContratosComerciaisFormularioModalDetalhesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"], src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_6__["ComercialClientesService"]])], ComercialGestaoContratosComerciaisFormularioModalDetalhesService);
      /***/
    },

    /***/
    "u2yr":
    /*!***********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/gestao/contratos-comerciais/formulario/modal/selecionar/selecionar.component.html ***!
      \***********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function u2yr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title pull-left\">Busqueda de Clientes</h4>\r\n  <div class=\"d-flex justify-content-center align-items-center\">\r\n    <div class=\"spinner-border text-primary mr-2\" role=\"status\" *ngIf=\"loadingClientes\">\r\n      <span class=\"sr-only\">Loading...</span>\r\n    </div>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"onClose()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <advanced-filter>\r\n    <form [formGroup]=\"formClientes\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-4\">\r\n          <label for=\"cdItem\">BUSCAR POR</label>\r\n          <select\r\n            class=\"form-control custom-select\"\r\n            formControlName=\"buscarPor\"\r\n          >\r\n            <option value=\"NM_CLIE\" selected>Código, nome fantasia ou razão social</option>\r\n          </select>\r\n        </div>\r\n\r\n        <div class=\"form-group col-8\">\r\n          <label>TERMO DE PESQUISA</label>\r\n          <div class=\"input-group\">\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              formControlName=\"pesquisa\"\r\n              >\r\n              <div class=\"input-group-append\">\r\n                <span \r\n                  [tooltip]=\"formClientes.valid == false ? 'Digite um termo de pesquisa':''\"\r\n                  container=\"body\"\r\n                  placement =\"left\"\r\n                >\r\n                  <button\r\n                  style=\"height: 25px;\"\r\n                    [disabled]=\"formClientes.valid == false\"\r\n                    class=\"input-group-text hover\"\r\n                    (click)=\"getClientes()\"\r\n                    >\r\n                    <i class=\"fas fa-search\"></i>\r\n                  </button>\r\n                </span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </advanced-filter>\r\n  <custom-table *ngIf=\"!noClientes\" class=\"text-center\">\r\n    <ng-template #thead let-thead>\r\n      <tr>\r\n        <th>Cód Cliente </th>\r\n        <th>Nome Fantasia</th>\r\n        <th>Razão Social </th>\r\n        <th></th>\r\n      </tr>\r\n    </ng-template>\r\n    <ng-template #tbody let-tbody>\r\n      <tr *ngFor=\"let cliente of clientes | slice : begin : end; let i = index\">\r\n        <td>{{ cliente.codCliente }}</td>\r\n        <td>{{ cliente.nomeCliente }}</td>\r\n        <td>{{ cliente.razaoSocial }}</td>\r\n        <td>\r\n          <button\r\n            class=\"btn-icon-sm\"\r\n            tooltip=\"Salvar Informações\"\r\n            container=\"body\"\r\n            (click)=\"setCliente(cliente)\"\r\n          >\r\n            <i class=\"far fa-save\"></i>\r\n          </button>\r\n        </td>\r\n      </tr>\r\n    </ng-template>\r\n  </custom-table>\r\n</div>";
      /***/
    },

    /***/
    "xOuB":
    /*!***************************************************************************************************!*\
      !*** ./src/app/modules/comercial/gestao/contratos-comerciais/guards/formulario-resolver.guard.ts ***!
      \***************************************************************************************************/

    /*! exports provided: ComercialoGestaoContratosComerciaisFormularioResolverGuard */

    /***/
    function xOuB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialoGestaoContratosComerciaisFormularioResolverGuard", function () {
        return ComercialoGestaoContratosComerciaisFormularioResolverGuard;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _contratos_comerciais_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../contratos-comerciais.service */
      "pK9/"); // Services


      var ComercialoGestaoContratosComerciaisFormularioResolverGuard = /*#__PURE__*/function () {
        function ComercialoGestaoContratosComerciaisFormularioResolverGuard(contratosComerciaisService) {
          _classCallCheck(this, ComercialoGestaoContratosComerciaisFormularioResolverGuard);

          this.contratosComerciaisService = contratosComerciaisService;
        }

        _createClass(ComercialoGestaoContratosComerciaisFormularioResolverGuard, [{
          key: "resolve",
          value: function resolve(route) {
            if (route.params && route.params.id) {
              return this.contratosComerciaisService.getDetalhes(route.params.id);
            } // É implementado o método "of" para manter a tipagem de retorno com Observable.


            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
              success: true,
              mensagem: null,
              data: [{
                codContrato: null,
                codCliente: [],
                nomeContrato: null,
                dataInicialVigencia: null,
                dataFinalVigencia: null,
                codSituacao: null,
                qtdeMaximaConsumo: null,
                materiais: []
              }]
            });
          }
        }]);

        return ComercialoGestaoContratosComerciaisFormularioResolverGuard;
      }();

      ComercialoGestaoContratosComerciaisFormularioResolverGuard.ctorParameters = function () {
        return [{
          type: _contratos_comerciais_service__WEBPACK_IMPORTED_MODULE_3__["ComercialGestaoContratosComerciaisService"]
        }];
      };

      ComercialoGestaoContratosComerciaisFormularioResolverGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_contratos_comerciais_service__WEBPACK_IMPORTED_MODULE_3__["ComercialGestaoContratosComerciaisService"]])], ComercialoGestaoContratosComerciaisFormularioResolverGuard);
      /***/
    }
  }]);
})();
//# sourceMappingURL=contratos-comerciais-contratos-comerciais-module-es5.js.map