(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~gestao-comissionamentos-gestao-comissionamentos-module~vendedores-internos-vendedores-internos-module"], {
    /***/
    "8kqo":
    /*!********************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/comissoes/vendedores-internos/gestao-comissionamentos/formulario/formulario.component.html ***!
      \********************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function kqo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<!-- <loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen> -->\r\n<app-header appTitle=\"Tela de criação e detalhes da tabela de comissionamento\">\r\n\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onFilter()\">\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" >\r\n  <div class=\"row\" >\r\n    <div class=\"col\">\r\n      <advanced-filter>\r\n        <form [formGroup]=\"form\" autocomplete=\"off\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg\">\r\n              <label for=\"periodo\">Período</label>\r\n              <input\r\n            class=\"form-control\"\r\n            id=\"periodo\"\r\n            type=\"text\"\r\n            formControlName=\"periodo\"\r\n            >\r\n            </div>\r\n            <div class=\"form-group col-lg\">\r\n              <label for=\"descTabela\">Descrição da tabela</label>\r\n              <input\r\n            class=\"form-control\"\r\n            id=\"descTabela\"\r\n            type=\"text\"\r\n            formControlName=\"descTabela\"\r\n            >\r\n            </div>\r\n            <div class=\"form-group col-lg\">\r\n              <label for=\"escritorio\">Gerente</label>\r\n              <ng-select\r\n                [items]=\"escritorios\"\r\n                labelForId=\"escritorio\"\r\n                formControlName=\"escritorio\"\r\n                bindValue=\"matricula\"\r\n                bindLabel=\"nome\"\r\n                [virtualScroll]=\"true\">\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"form-group col-lg\">\r\n              <label for=\"vendedor\">Vendedor</label>\r\n              <ng-select\r\n                [items]=\"vendedores\"\r\n                labelForId=\"vendedor\"\r\n                formControlName=\"vendedor\"\r\n                bindValue=\"id\"\r\n                bindLabel=\"nome\"\r\n                [virtualScroll]=\"true\">\r\n              </ng-select>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </advanced-filter>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"vendedoresInternos\">\r\n    <custom-table [config]=\"tableConfig\" *ngIf=\"dados.length > 0 && !dadosEmpty\">\r\n      <ng-template #thead let-thead>\r\n        <tr>\r\n          <th style=\"width: 45%\">\r\n            <div style=\"text-transform: uppercase; font-weight: bold;\">\r\n                Vendedor: {{ dados[0].vendedor[0].nomeVendedor }}\r\n            </div>\r\n          </th>\r\n          <!-- aprovar/reprovar -->\r\n          <th style=\"width: 5%\">\r\n            <!-- Analista de Marketing -->\r\n            <btn-icon\r\n                *ngIf=\"profile.analistaMarketing && aprovarAnalista && reprovarAnalista\"\r\n                icon=\"fas fa-check\"\r\n                size=\"medium\"\r\n                tooltip=\"Aprovar\"\r\n                id=\"aprovado\"\r\n                (click)=\"onAprovarAnalista()\">\r\n            </btn-icon>\r\n            <btn-icon\r\n                *ngIf=\"profile.analistaMarketing && aprovarAnalista && reprovarAnalista\"\r\n                icon=\"fas fa-times\"\r\n                size=\"medium\"\r\n                tooltip=\"Reprovar\"\r\n                id=\"reprovado\"\r\n                (click)=\"openModalAnalista(analista)\">\r\n            </btn-icon>\r\n            <btn-icon\r\n                *ngIf=\"(profile.analistaMarketing || profile.gerenteEscritorio) && (aprovarAnalista && !reprovarAnalista)\"\r\n                icon=\"fas fa-times\"\r\n                size=\"medium\"\r\n                tooltip=\"Reprovado\"\r\n                id=\"reprovado\">\r\n            </btn-icon>\r\n            <btn-icon\r\n                *ngIf=\"(profile.analistaMarketing || profile.gerenteFiscal) && (!aprovarAnalista && reprovarAnalista)\"\r\n                icon=\"fas fa-check\"\r\n                size=\"medium\"\r\n                tooltip=\"Aprovado\"\r\n                id=\"aprovado\">\r\n            </btn-icon>\r\n\r\n            <!-- Gerente de Marketing -->\r\n            <btn-icon\r\n                *ngIf=\"profile.gerenteMarketing && aprovarGerente && reprovarGerente\"\r\n                icon=\"fas fa-check\"\r\n                size=\"medium\"\r\n                tooltip=\"Aprovar\"\r\n                id=\"aprovado\"\r\n                (click)=\"onAprovarGerente()\">\r\n            </btn-icon>\r\n            <btn-icon\r\n            *ngIf=\"profile.gerenteMarketing && aprovarGerente && reprovarGerente\"\r\n                icon=\"fas fa-times\"\r\n                size=\"medium\"\r\n                tooltip=\"Reprovar\"\r\n                id=\"reprovado\"\r\n                (click)=\"openModalGerente(gerente)\">\r\n            </btn-icon>\r\n            <btn-icon\r\n                *ngIf=\"(profile.gerenteMarketing || profile.gerenteEscritorio) && (aprovarGerente && !reprovarGerente)\"\r\n                icon=\"fas fa-times\"\r\n                size=\"medium\"\r\n                tooltip=\"Reprovado\"\r\n                id=\"reprovado\">\r\n            </btn-icon>\r\n            <btn-icon\r\n                *ngIf=\"(profile.gerenteMarketing || profile.gerenteFiscal) && (!aprovarGerente && reprovarGerente)\"\r\n                icon=\"fas fa-check\"\r\n                size=\"medium\"\r\n                tooltip=\"Aprovado\"\r\n                id=\"aprovado\">\r\n            </btn-icon>\r\n\r\n            <!-- Diretor Comercial -->\r\n            <btn-icon\r\n                *ngIf=\"profile.diretorComercial && aprovarDiretor && reprovarDiretor\"\r\n                icon=\"fas fa-check\"\r\n                size=\"medium\"\r\n                tooltip=\"Aprovar\"\r\n                id=\"aprovado\"\r\n                (click)=\"onAprovarDiretor()\">\r\n            </btn-icon>\r\n            <btn-icon\r\n                *ngIf=\"profile.diretorComercial && aprovarDiretor && reprovarDiretor\"\r\n                icon=\"fas fa-times\"\r\n                size=\"medium\"\r\n                tooltip=\"Reprovar\"\r\n                id=\"reprovado\"\r\n                (click)=\"openModalDiretor(diretor)\">\r\n            </btn-icon>\r\n            <btn-icon\r\n                *ngIf=\"(profile.diretorComercial || profile.gerenteEscritorio) && (aprovarDiretor && !reprovarDiretor)\"\r\n                icon=\"fas fa-times\"\r\n                size=\"medium\"\r\n                tooltip=\"Reprovado\"\r\n                id=\"reprovado\">\r\n            </btn-icon>\r\n            <btn-icon\r\n                *ngIf=\"(profile.diretorComercial || profile.gerenteFiscal) && (!aprovarDiretor && reprovarDiretor)\"\r\n                icon=\"fas fa-check\"\r\n                size=\"medium\"\r\n                tooltip=\"Aprovado\"\r\n                id=\"aprovado\">\r\n            </btn-icon>\r\n          </th>\r\n        </tr>\r\n      </ng-template>\r\n    </custom-table>\r\n    <custom-table [config]=\"tableConfig\" *ngIf=\"dados.length > 0 && !dadosEmpty\">\r\n      <ng-template #thead let-thead>\r\n        <tr style=\"text-align: center;\" >\r\n          <th scope=\"col\">Fixo</th>\r\n          <th scope=\"col\">KPI's</th>\r\n          <th scope=\"col\">% Ganho</th>\r\n          <th scope=\"col\">Meta</th>\r\n          <th scope=\"col\">Total Realizado</th>\r\n          <th scope=\"col\">% Alcançado</th>\r\n          <th scope=\"col\">Potencial de Ganho</th>\r\n          <th scope=\"col\">Ganho Efetivo</th>\r\n        </tr>\r\n      </ng-template>\r\n      <ng-template #tbody let-tbody>\r\n        <tr style=\"text-align: center;\">\r\n            <!--*ngFor=\"let lista of dados[0].vendedor[0].kpi; let i = index\" [class.table-active]=\"lista.codTabela == rankingSelecionado.codClassificacao-->\r\n          <td>\r\n            0,15 \r\n          </td>\r\n          <td >\r\n            {{ dados[0].vendedor[0].kpi[0].descKpi }}\r\n          </td>\r\n          <td >\r\n            {{ dados[0].vendedor[0].kpi[0].porcGanho }}\r\n          </td>\r\n          <td >\r\n            {{ dados[0].vendedor[0].kpi[0].meta }}\r\n          </td>\r\n          <td *ngIf=\"dados[0].vendedor[0].kpi[0].totalRealizado < dados[0].vendedor[0].kpi[0].meta\" style=\"color: red;\">\r\n            {{ dados[0].vendedor[0].kpi[0].totalRealizado }}\r\n          </td>\r\n          <td *ngIf=\"dados[0].vendedor[0].kpi[0].totalRealizado >= dados[0].vendedor[0].kpi[0].meta\" style=\"color: green;\">\r\n            {{ dados[0].vendedor[0].kpi[0].totalRealizado }}\r\n          </td>\r\n          <td >\r\n            {{ dados[0].vendedor[0].kpi[0].porcAlcancado  }}\r\n          </td>\r\n          <td> \r\n            {{ dados[0].vendedor[0].kpi[0].potencialGanho }} \r\n          </td>\r\n          <td >\r\n            {{ dados[0].vendedor[0].kpi[0].ganhoEfetivo }}\r\n          </td>\r\n        </tr>\r\n        <tr style=\"text-align: center;\">\r\n          <td >\r\n            0,15 \r\n          </td>\r\n          <td >\r\n            {{ dados[0].vendedor[0].kpi[1].descKpi }}\r\n          </td>\r\n          <td >\r\n            {{ dados[0].vendedor[0].kpi[1].porcGanho }}\r\n          </td>\r\n          <td >\r\n            {{ dados[0].vendedor[0].kpi[1].meta }}\r\n          </td>\r\n          <td *ngIf=\"dados[0].vendedor[0].kpi[1].totalRealizado < dados[0].vendedor[0].kpi[1].meta\" style=\"color: red;\">\r\n            {{ dados[0].vendedor[0].kpi[0].totalRealizado }}\r\n          </td>\r\n          <td *ngIf=\"dados[0].vendedor[0].kpi[1].totalRealizado >= dados[0].vendedor[0].kpi[1].meta\" style=\"color: green;\" >\r\n            {{ dados[0].vendedor[0].kpi[1].totalRealizado }}\r\n          </td>\r\n          <td >\r\n            {{ dados[0].vendedor[0].kpi[1].porcAlcancado }}\r\n          </td>\r\n          <td >\r\n            {{ dados[0].vendedor[0].kpi[1].potencialGanho }}\r\n          </td>\r\n          <td >\r\n            {{ dados[0].vendedor[0].kpi[1].ganhoEfetivo }}\r\n          </td>\r\n        </tr>\r\n        <!-- <tr><td colspan=\"8\"></td></tr>\r\n        <tr style=\"text-align: center;\">\r\n          <td rowspan=\"2\">\r\n            Total Faturado (R$)\r\n          </td>\r\n          <td>\r\n            Manetoni\r\n          </td>\r\n          <td colspan=\"3\" style=\"text-align: end;\">\r\n            R$ 68.412,63\r\n          </td>\r\n          <td rowspan=\"2\">\r\n            R$ 102,62\r\n          </td>\r\n        </tr>\r\n      \r\n        <tr style=\"text-align: center;\">\r\n          <td>\r\n            DBA\r\n          </td>\r\n          <td colspan=\"3\" style=\"text-align: end;\">\r\n            -\r\n          </td>\r\n        </tr>\r\n        <tr style=\"text-align: center;\">\r\n          <td>\r\n            0,3\r\n          </td>\r\n          <td>\r\n            Corte e Dobra\r\n          </td>\r\n          <td>\r\n            -\r\n          </td>\r\n          <td>\r\n            0,3\r\n          </td>\r\n          <td>\r\n            -\r\n          </td>\r\n          <td>\r\n            R$ 32.396,60\r\n          </td>\r\n          <td>\r\n            CD\r\n          </td>\r\n          <td>\r\n            R$ 97,19\r\n          </td>\r\n        </tr>\r\n        <tr style=\"text-align: center;\">\r\n          <td>\r\n            0,3\r\n          </td>\r\n          <td >\r\n            Cercas\r\n          </td>\r\n          <td>\r\n            -\r\n          </td>\r\n          <td>\r\n            0,3\r\n          </td>\r\n          <td>\r\n            -\r\n          </td>\r\n          <td>\r\n            R$ 6.270,00\r\n          </td>\r\n          <td>\r\n            Cercas\r\n          </td>\r\n          <td>\r\n            R$ 18,81\r\n          </td>\r\n        </tr>\r\n        <tr style=\"text-align: center;\">\r\n          <td rowspan=\"2\" colspan=\"6\"></td>\r\n          <td>\r\n            RO\r\n          </td>\r\n          <td>\r\n            -\r\n          </td>\r\n        </tr>\r\n        <tr style=\"text-align: center;\">\r\n          <td>\r\n            GANHO FINAL\r\n          </td>\r\n          <td style=\"background-color: green;\">\r\n            R$ 218,62\r\n          </td>\r\n        </tr> -->\r\n      </ng-template>\r\n    </custom-table>\r\n  </div>\r\n  <hr>\r\n  <div class=\"total\">\r\n    <custom-table [config]=\"tableConfig\" >\r\n      <!-- *ngIf=\"dados.length > 0 && !dadosEmpty\" -->\r\n      <ng-template #thead let-thead>\r\n        <tr>\r\n          <td class=\"hover ml-5\" style=\"background: rgb(248, 176, 176)\">\r\n\r\n          </td>\r\n          <td\r\n             style=\"background: rgb(248, 176, 176)\">\r\n          </td>\r\n          <td\r\n            \r\n            style=\"background: rgb(248, 176, 176);\r\n            text-transform: uppercase;\r\n            font-weight: bold;\">\r\n            Total Escritório\r\n          </td>\r\n          <td\r\n            \r\n            style=\"background: rgb(248, 176, 176);\r\n            font-weight: bold\">\r\n            R$ 18.310,62\r\n          </td>\r\n        </tr>\r\n      </ng-template>\r\n    </custom-table>\r\n  </div>\r\n  <div class=\"d-flex justify-content-center mt-3\" *ngIf=\"totalItems > itemsPerPage && !loaderNavbar\">\r\n    <pagination\r\n      [maxSize]=\"maxSize\"\r\n      [(totalItems)]=\"totalItems\"\r\n      (pageChanged)=\"onPageChanged($event)\"\r\n      [(itemsPerPage)]=\"itemsPerPage\"\r\n      [boundaryLinks]=\"true\"\r\n      [(ngModel)]=\"currentPage\"\r\n      previousText=\"&lsaquo;\"\r\n      nextText=\"&rsaquo;\"\r\n      firstText=\"&laquo;\"\r\n      lastText=\"&raquo;\">\r\n    </pagination>\r\n  </div> \r\n</app-body>\r\n\r\n";
      /***/
    },

    /***/
    "B81P":
    /*!******************************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/comissoes/vendedores-internos/gestao-comissionamentos/formulario/formulario.component.scss ***!
      \******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function B81P(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NvbWlzc29lcy92ZW5kZWRvcmVzLWludGVybm9zL2dlc3Rhby1jb21pc3Npb25hbWVudG9zL2Zvcm11bGFyaW8vZm9ybXVsYXJpby5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "BBLr":
    /*!***************************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/comissoes/vendedores-internos/gestao-comissionamentos/gestao-comissionamentos.module.ts ***!
      \***************************************************************************************************************************/

    /*! exports provided: ComercialComissoesVendedoresInternosGestaoComissionamentosModule */

    /***/
    function BBLr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialComissoesVendedoresInternosGestaoComissionamentosModule", function () {
        return ComercialComissoesVendedoresInternosGestaoComissionamentosModule;
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


      var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-bootstrap/pagination */
      "6No5");
      /* harmony import */


      var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-bootstrap/tooltip */
      "978R");
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "ienR");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng2-currency-mask */
      "D5nU");
      /* harmony import */


      var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./../../../../../shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _cadastros_materiais_templates_templates_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./../../../cadastros/materiais/templates/templates.module */
      "11Wi");
      /* harmony import */


      var _templates_templates_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./../../../templates/templates.module */
      "9lCC");
      /* harmony import */


      var _shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./../../../../../shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./../../../../../shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var _gestao_comissionamentos_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./gestao-comissionamentos.routing.module */
      "tTD3");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./lista/lista.component */
      "a8Q8");
      /* harmony import */


      var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./formulario/formulario.component */
      "m8gU");
      /* harmony import */


      var _gestao_comissionamentos_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./gestao-comissionamentos.service */
      "TTUb"); // ngx-bootstrap
      // ng-select
      // ng2-currency-mask
      // PNotify
      // Modules
      // Components
      // Services


      var ComercialComissoesVendedoresInternosGestaoComissionamentosModule = /*#__PURE__*/_createClass(function ComercialComissoesVendedoresInternosGestaoComissionamentosModule() {
        _classCallCheck(this, ComercialComissoesVendedoresInternosGestaoComissionamentosModule);
      });

      ComercialComissoesVendedoresInternosGestaoComissionamentosModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_lista_lista_component__WEBPACK_IMPORTED_MODULE_16__["ComercialComissoesVendedoresInternosGestaoComissionamentosListaComponent"], _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_17__["ComercialComissoesVendedoresInternosGestaoComissionamentosFormularioComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"].forRoot(), ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"], ng2_currency_mask__WEBPACK_IMPORTED_MODULE_8__["CurrencyMaskModule"], _gestao_comissionamentos_routing_module__WEBPACK_IMPORTED_MODULE_15__["ComercialComissoesVendedoresInternosGestaoComissionamentosRoutingModule"], _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"], _shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_12__["TemplatesModule"], _templates_templates_module__WEBPACK_IMPORTED_MODULE_11__["ComercialTemplatesModule"], _cadastros_materiais_templates_templates_module__WEBPACK_IMPORTED_MODULE_10__["ComercialCadastrosMateriaisTemplatesModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsDatepickerModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_14__["ModalModule"].forRoot()],
        providers: [_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"], _gestao_comissionamentos_service__WEBPACK_IMPORTED_MODULE_18__["ComercialComissoesVendedoresInternosGestaoComissionamentosService"]]
      })], ComercialComissoesVendedoresInternosGestaoComissionamentosModule);
      /***/
    },

    /***/
    "TTUb":
    /*!****************************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/comissoes/vendedores-internos/gestao-comissionamentos/gestao-comissionamentos.service.ts ***!
      \****************************************************************************************************************************/

    /*! exports provided: ComercialComissoesVendedoresInternosGestaoComissionamentosService */

    /***/
    function TTUb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialComissoesVendedoresInternosGestaoComissionamentosService", function () {
        return ComercialComissoesVendedoresInternosGestaoComissionamentosService;
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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var ComercialComissoesVendedoresInternosGestaoComissionamentosService = /*#__PURE__*/function () {
        function ComercialComissoesVendedoresInternosGestaoComissionamentosService(http) {
          _classCallCheck(this, ComercialComissoesVendedoresInternosGestaoComissionamentosService);

          this.http = http;
          this.API = "http://23.254.204.187/api/comercial/comissoes/vendedores-internos/gestao-comissionamentos";
        }
        /* getComissionamentos(params: any = []): Observable<any> {
              let httpParams = new HttpParams();
          for (let param in params) {
          httpParams = httpParams.append(param, params[param]);    }
          return this.http.get(`${this.API}/lista`, { params: httpParams })
          .pipe(
            take(1),
            retry(2)
            );
        } */

        /* getModelo(params: any = []): Observable<any> {
              let httpParams = new HttpParams();
          for (let param in params) {
          httpParams = httpParams.append(param, params[param]);    }
          return this.http.get(`${this.API}/lista`, { params: httpParams })
          .pipe(
            take(1),
            retry(2)
            );
        } */


        _createClass(ComercialComissoesVendedoresInternosGestaoComissionamentosService, [{
          key: "getDetalhes",
          value: function getDetalhes(codRepresentante) {
            return this.http.get("".concat(this.API, "/detalhes/").concat(codRepresentante)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getPermissoesAcesso",
          value: function getPermissoesAcesso() {
            return this.http.get("".concat(this.API, "/permissoes-acesso")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }]);

        return ComercialComissoesVendedoresInternosGestaoComissionamentosService;
      }();

      ComercialComissoesVendedoresInternosGestaoComissionamentosService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      ComercialComissoesVendedoresInternosGestaoComissionamentosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ComercialComissoesVendedoresInternosGestaoComissionamentosService);
      /***/
    },

    /***/
    "W8yK":
    /*!*********************************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/comissoes/vendedores-internos/gestao-comissionamentos/formulario/formulario-resolver.guard.ts ***!
      \*********************************************************************************************************************************/

    /*! exports provided: ComercialComissoesVendedoresInternosGestaoComissionamentosFormularioResolverGuard */

    /***/
    function W8yK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialComissoesVendedoresInternosGestaoComissionamentosFormularioResolverGuard", function () {
        return ComercialComissoesVendedoresInternosGestaoComissionamentosFormularioResolverGuard;
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


      var _gestao_comissionamentos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../gestao-comissionamentos.service */
      "TTUb"); // Services


      var ComercialComissoesVendedoresInternosGestaoComissionamentosFormularioResolverGuard = /*#__PURE__*/function () {
        function ComercialComissoesVendedoresInternosGestaoComissionamentosFormularioResolverGuard(gestaoComissionamentosService) {
          _classCallCheck(this, ComercialComissoesVendedoresInternosGestaoComissionamentosFormularioResolverGuard);

          this.gestaoComissionamentosService = gestaoComissionamentosService;
        }

        _createClass(ComercialComissoesVendedoresInternosGestaoComissionamentosFormularioResolverGuard, [{
          key: "resolve",
          value: function resolve(route) {
            if (route.params && route.params.id) {
              return this.gestaoComissionamentosService.getDetalhes(route.params.id);
            } // É implementado o método "of" para manter a tipagem de retorno com Observable.


            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
              success: true,
              mensagem: null,
              data: {
                codRepresentante: null,
                codSituacao: 0,
                nome: null,
                endereco: null,
                bairro: null,
                cep: null,
                cidade: null,
                uf: null,
                cpf: null,
                rg: null,
                comissao: null,
                sap: null,
                codRH: null,
                telefone: null,
                celular: null,
                email: null,
                banco: null,
                tipo: null,
                agencia: null,
                titular: null,
                contaCorrente: null,
                dtInicio: null,
                dtRenovacao: null,
                dtVigencia: null,
                tipoComissao: null,
                nomeEmpresa: null,
                cnpj: null,
                ie: null,
                im: null,
                grupos: []
              }
            });
          }
        }]);

        return ComercialComissoesVendedoresInternosGestaoComissionamentosFormularioResolverGuard;
      }();

      ComercialComissoesVendedoresInternosGestaoComissionamentosFormularioResolverGuard.ctorParameters = function () {
        return [{
          type: _gestao_comissionamentos_service__WEBPACK_IMPORTED_MODULE_3__["ComercialComissoesVendedoresInternosGestaoComissionamentosService"]
        }];
      };

      ComercialComissoesVendedoresInternosGestaoComissionamentosFormularioResolverGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_gestao_comissionamentos_service__WEBPACK_IMPORTED_MODULE_3__["ComercialComissoesVendedoresInternosGestaoComissionamentosService"]])], ComercialComissoesVendedoresInternosGestaoComissionamentosFormularioResolverGuard);
      /***/
    },

    /***/
    "a8Q8":
    /*!******************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/comissoes/vendedores-internos/gestao-comissionamentos/lista/lista.component.ts ***!
      \******************************************************************************************************************/

    /*! exports provided: ComercialComissoesVendedoresInternosGestaoComissionamentosListaComponent */

    /***/
    function a8Q8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialComissoesVendedoresInternosGestaoComissionamentosListaComponent", function () {
        return ComercialComissoesVendedoresInternosGestaoComissionamentosListaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lista.component.html */
      "wOft");
      /* harmony import */


      var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lista.component.scss */
      "b0A6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "ienR");
      /* harmony import */


      var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap/chronos */
      "xj/R");
      /* harmony import */


      var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-bootstrap/locale */
      "0b5p");
      /* harmony import */


      var _shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./../../../../../../shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./../../../../../../shared/modules/confirm-modal/confirm-modal.service */
      "FOez");
      /* harmony import */


      var _cadastros_representantes_representantes_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./../../../../cadastros/representantes/representantes.service */
      "T6IP");
      /* harmony import */


      var _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./../../../../../../shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./../../../../../../shared/templates/detail-panel/detal-panel.service */
      "gIxL");
      /* harmony import */


      var _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./../../../../../../shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var _gestao_comissionamentos_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../gestao-comissionamentos.service */
      "TTUb"); // ngx-bootstrap


      Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_7__["defineLocale"])('pt-br', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_8__["ptBrLocale"]); // Services

      var ComercialComissoesVendedoresInternosGestaoComissionamentosListaComponent = /*#__PURE__*/function () {
        function ComercialComissoesVendedoresInternosGestaoComissionamentosListaComponent(formBuilder, activatedRoute, localeService, dateService, router, detailPanelService, pnotifyService, cadastroRepresentantesService, confirmModalService, atividadesService, gestaoComissionamentosService) {
          _classCallCheck(this, ComercialComissoesVendedoresInternosGestaoComissionamentosListaComponent);

          this.formBuilder = formBuilder;
          this.activatedRoute = activatedRoute;
          this.localeService = localeService;
          this.dateService = dateService;
          this.router = router;
          this.detailPanelService = detailPanelService;
          this.pnotifyService = pnotifyService;
          this.cadastroRepresentantesService = cadastroRepresentantesService;
          this.confirmModalService = confirmModalService;
          this.atividadesService = atividadesService;
          this.gestaoComissionamentosService = gestaoComissionamentosService;
          this.loaderNavbar = false;
          this.loaderFullScreen = true;
          this.breadCrumbTree = [];
          this.showDetailPanel = false;
          this.dadosPagination = [{
            codTabela: 1,
            nomeTabela: 'Tabela 1',
            dataInicial: null,
            dataFinal: null,
            situacao: 1,
            nomeUsuario: 'Ususario 1',
            dataCadastro: '01/11/2020'
          }, {
            codTabela: 2,
            nomeTabela: 'Tabela 2',
            dataInicial: null,
            dataFinal: null,
            situacao: 1,
            nomeUsuario: 'Ususario 2',
            dataCadastro: '01/11/2020'
          }, {
            codTabela: 1,
            nomeTabela: 'Tabela 3',
            dataInicial: null,
            dataFinal: null,
            situacao: 1,
            nomeUsuario: 'Ususario 3',
            dataCadastro: '01/11/2020'
          }];
          this.dados = [];
          this.modeloComissao = [];
          this.dadosLoaded = false;
          this.dadosEmpty = false;
          this.tableConfig = {
            subtitleBorder: true
          };
          this.tableConfigMateriais = {
            hover: false
          };
          this.orderBy = 'codPreco';
          this.orderType = 'ASC';
          this.maxSize = 10;
          this.itemsPerPage = 300;
          this.currentPage = 1;
          this.totalItems = 0;
          this.localeService.use('pt-br');
        }

        _createClass(ComercialComissoesVendedoresInternosGestaoComissionamentosListaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registrarAcesso();
            this.setBreadCrumb();
            this.setFormFilter();
            this.getRegistros();
            this.onDetailPanelEmitter();
            this.setTabelaSelecionada(); //this.getPerfil();
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            var _this = this;

            this.activatedRoute.params.subscribe(function (params) {
              _this.breadCrumbTree = [{
                descricao: 'Home',
                routerLink: '/comercial/home'
              }, {
                descricao: 'Comissões',
                routerLink: "/comercial/comissoes/".concat(params['idSubModulo'])
              }, {
                descricao: 'Vendedores Internos',
                routerLink: "/comercial/comissoes/".concat(params['idSubModulo'], "/vendedores-internos")
              }, {
                descricao: 'Gestão de Comissionamentos'
              }];
            });
          } // Formulário

        }, {
          key: "setFormFilter",
          value: function setFormFilter() {
            var formValue = this.checkRouterParams();
            console.log(formValue);
            this.form = this.formBuilder.group({
              codVendedor: [formValue.codVendedor],
              situacao: [formValue.situacao],
              periodo: [formValue.periodo],
              descTabela: [formValue.descTabela],
              orderBy: [formValue.orderBy],
              orderType: [formValue.orderType],
              pagina: [formValue.pagina],
              registros: [formValue.registros, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            });
            this.checkOrder();
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "checkRouterParams",
          value: function checkRouterParams() {
            var _this2 = this;

            var formValue = {
              codVendedor: null,
              situacao: 2,
              orderBy: this.orderBy,
              orderType: this.orderType,
              pagina: 1,
              registros: this.itemsPerPage
            };
            this.activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (queryParams) {
              if (Object.keys(queryParams).length > 0) {
                var params = atob(queryParams['q']);
                params = JSON.parse(params);

                _this2.search(params);

                Object.keys(formValue).forEach(function (formKey) {
                  Object.keys(params).forEach(function (paramKey) {
                    if (formKey == paramKey && formValue[formKey] != params[paramKey]) {
                      if (!isNaN(Number(params[paramKey]))) {
                        formValue[formKey] = Number(params[paramKey]);
                      } else {
                        formValue[formKey] = params[paramKey];
                      }
                    }
                  });
                });
              }
            });
            this.activatedRouteSubscription.unsubscribe();
            return formValue;
          } // Ordem lista

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
          key: "setOrderBy",
          value: function setOrderBy(column) {
            if (this.orderBy === column) {
              if (this.orderType == 'DESC') {
                this.orderType = 'ASC';
              } else if (this.orderType == 'ASC') {
                this.orderType = 'DESC';
              }
            } else {
              this.orderBy = column;
              this.orderType = 'ASC';
            }

            this.form.value.orderBy = this.orderBy;
            this.form.value.orderType = this.orderType;
            this.onFilter();
          } // Pesquisa

        }, {
          key: "onFilter",
          value: function onFilter() {
            if (this.form.valid) {
              this.itemsPerPage = this.form.value.registros;
              this.currentPage = 1;
              this.setRouterParams(this.getParams());
            }
          }
        }, {
          key: "search",
          value: function search(params) {
            this.loaderNavbar = true;
            this.detailPanelService.hide();
            this.dados = [];
            this.dadosLoaded = false;
            this.dadosEmpty = false;
            this.loaderNavbar = false; //retirar

            /* this.cadastroRepresentantesService
              .getRepresentantes(params)
              .pipe(
                finalize(() => {
                  this.loaderNavbar = false;
                  this.dadosLoaded = true;
                })
              )
              .subscribe(
                (response: JsonResponse) => {
                  console.log(response)
                  if (response.hasOwnProperty('success') && response.success === true) {
                    this.dados = response.data;
                    this.da = this.dados[0]['total'];
                  } else if (
                    response.hasOwnProperty('success') &&
                    response.success === false
                  ) {
                    this.dadosEmpty = true;
                  } else {
                    this.pnotifyService.error();
                    this.dadosEmpty = true;
                  }
                      },
                (error: any) => {
                  this.dadosEmpty = true;
                        if (error.error.hasOwnProperty('mensagem')) {
                    this.pnotifyService.error(error.error.mensagem);
                  } else {
                    this.pnotifyService.error();
                  }
                }
              ); */
          } // Verifica Parâmetros

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

            _params['orderBy'] = this.orderBy;
            _params['orderType'] = this.orderType;
            return _params;
          }
        }, {
          key: "verificaParams",
          value: function verificaParams() {
            var params = {};

            if (this.form.value.codPreco) {
              params.codPreco = this.form.value.codPreco;
            }

            if (this.form.value.dtInicioVigencia) {
              params.dtInicioVigencia = this.form.value.dtInicioVigencia;
            }

            if (this.form.value.dtFimVigencia) {
              params.dtFimVigencia = this.form.value.dtFimVigencia;
            }

            if (this.form.value.situacao) {
              params.situacao = this.form.value.situacao;
            }

            params.pagina = this.form.value.pagina;
            params.registros = this.form.value.registros;
            params.orderBy = this.form.value.orderBy;
            params.orderType = this.form.value.orderType;
            return params;
          } // Detail Panel

        }, {
          key: "onDetails",
          value: function onDetails(item) {
            this.detailPanelService.show();
            this.detailPanelTitle = "Modelo de Comissionamento";
            this.modeloComissao = [];
            this.loaderNavbar = true;
            /* this.cadastroRepresentantesService
              .getAssociacoes(item.codRepresentante)
              .pipe(
                finalize(() => {
                  setTimeout(() => {
                    this.loaderNavbar = false;
                    this.detailPanelService.loadedFinished(false);
                  }, 500);
                })
              )
              .subscribe(
                (response: JsonResponse) => {
                  if (response.hasOwnProperty('success') && response.success === true) {
                    this.modeloComissao = response.data;
                    this.totalItems = this.dados[0]['total'];
                  }  else {
                    this.pnotifyService.error();
                  }
                      },
                (error: any) => {
                        if (error.error.hasOwnProperty('mensagem')) {
                    this.pnotifyService.error(error.error.mensagem);
                  } else {
                    this.pnotifyService.error();
                  }
                }
              ); */
          }
        }, {
          key: "setTabelaSelecionada",
          value: function setTabelaSelecionada() {
            this.tabelaSelecionada = {
              codTabela: null,
              nomeTabela: null,
              dataInicial: null,
              dataFinal: null,
              situacao: null,
              nomeUsuario: null,
              dataCadastro: null
            };
          }
        }, {
          key: "onDetailPanelEmitter",
          value: function onDetailPanelEmitter() {
            var _this3 = this;

            this.showDetailPanelSubscription = this.detailPanelService.config.subscribe(function (event) {
              _this3.showDetailPanel = event.showing;
            });
          } // Activate e Inactivate e borda Situação
          // onActivate(index: number, grupo: descricaoTabela): void {
          //   this.confirmActivate()
          //     .asObservable()
          //     .pipe(
          //       take(1),
          //       switchMap((result) =>
          //         result ? this.activateGrupo(index, grupo) : EMPTY
          //       ),
          //       finalize(() => {
          //         this.loaderNavbar = false;
          //       })
          //     )
          //     .subscribe(
          //       (success: any) => {
          //         this.pnotifyService.success();
          //         this.refreshMainData(grupo);
          //       },
          //       (error: any) => {
          //         this.pnotifyService.error();
          //         this.dados[index].situacao = 0;
          //       }
          //     );
          // }
          // confirmActivate(): any {
          //   return this.confirmModalService.showConfirm(
          //     null,
          //     null,
          //     'Deseja realmente prosseguir com a ativação do registro?',
          //     'Cancelar',
          //     'Confirmar'
          //   );
          // }
          // activateGrupo(index: number, grupo: descricaoTabela): Observable<any> {
          //   this.loaderNavbar = true;
          //   this.dados[index].situacao = 1;
          //   return this.tabelaPrecosService.activateGrupo(grupo.codTabela);
          // }
          // onInactivate(index: number, grupo: descricaoTabela): void {
          //   this.confirmInactive()
          //     .asObservable()
          //     .pipe(
          //       take(1),
          //       switchMap((result) =>
          //         result ? this.inactivateGrupo(index, grupo) : EMPTY
          //       ),
          //       finalize(() => {
          //         this.loaderNavbar = false;
          //       })
          //     )
          //     .subscribe(
          //       (success: any) => {
          //         this.pnotifyService.success();
          //         this.refreshMainData(grupo);
          //       },
          //       (error: any) => {
          //         this.pnotifyService.error();
          //         this.dados[index].situacao = 1;
          //       }
          //     );
          // }
          // confirmInactive(): any {
          //   return this.confirmModalService.showConfirm(
          //     'inactivate',
          //     'Confirmar inativação',
          //     'Deseja realmente prosseguir com a inativação do registro?',
          //     'Cancelar',
          //     'Confirmar'
          //   );
          // }
          // inactivateGrupo(index: number, grupo: descricaoTabela): Observable<any> {
          //   this.loaderNavbar = true;
          //   this.dados[index].situacao = 0;
          //   return this.tabelaPrecosService.inactivateGrupo(grupo.codTabela);
          // }

        }, {
          key: "classStatusBorder",
          value: function classStatusBorder(grupo) {
            var borderClass;

            if (grupo.situacao === 2) {
              borderClass = 'border-danger';
            } else if (grupo.situacao === 1) {
              borderClass = 'border-success';
            }

            return borderClass;
          } // Get perfil

          /* getPerfil() {
            this.gestaoComissionamentosService
              .getPermissoesAcesso()
              .pipe(
                finalize(() => {
                  this.loaderFullScreen = false;
                })
              )
              .subscribe(
                (response: any) => {
                  if (response.success === true) {
                    this.profile = response.data;
                    console.log(response)
                    if (
                      this.profile.gerenteMarketing === true
                    ) {
                      console.log('gerenteMarketing')
                    } else if (
                      this.profile.gerenteEscritorio === true
                    ) {
                      console.log('gerenteEscritorio')
                    } else if (
                      this.profile.gerenteFiscal === true
                    ) {
                      console.log('gerenteFiscal')
                    } else if (
                      this.profile.diretorComercial === true
                    ) {
                      console.log('diretorComercial')
                    }
                  }
                    },
                (error: any) => {
                  this.showPermissionDenied = true;
              }
            )
          } */
          // Get e EditarLista

        }, {
          key: "getRegistros",
          value: function getRegistros() {
            this.loaderNavbar = true;
            this.detailPanelService.hide();
            this.dadosLoaded = false;
            this.dadosEmpty = false;
            this.loaderNavbar = false; //retirar

            /* this.cadastroRepresentantesService
              .getRepresentantes()
              .pipe(
                finalize(() => {
                  this.loaderNavbar = false;
                  this.dadosLoaded = true;
                })
              )
              .subscribe(dados => {this.dados = dados; } */
            // (response: JsonResponse) => {
            //   if (response.hasOwnProperty('success') && response.success === true) {
            //     this.dados = response.data;
            //     this.totalItems = this.dados[0]['total'];
            //   } else if (
            //     response.hasOwnProperty('success') &&
            //     response.success === false
            //   ) {
            //     this.dadosEmpty = true;
            //   } else {
            //     this.pnotifyService.error();
            //     this.dadosEmpty = true;
            //   }
            // },
            // (error: any) => {
            //   this.dadosEmpty = true;
            //   if (error.error.hasOwnProperty('mensagem')) {
            //     this.pnotifyService.error(error.error.mensagem);
            //   } else {
            //     this.pnotifyService.error();
            //   }
            // }
            //);
          }
        }, {
          key: "onEdit",
          value: function onEdit(item) {
            this.router.navigate(['../editar', item.codRepresentante], {
              relativeTo: this.activatedRoute
            });
          } // Outros

        }, {
          key: "onPageChanged",
          value: function onPageChanged(event) {
            if (this.form.value.pagina != event.page) {
              this.detailPanelService.hide();
              this.setTabelaSelecionada();
              this.form.value.pagina = event.page;
              this.onFilter();
              this.scrollToFilter.nativeElement.scrollIntoView({
                behavior: 'instant'
              });
            }
          }
        }, {
          key: "refreshMainData",
          value: function refreshMainData(grupo) {
            for (var i = 0; i < this.dados.length; i++) {
              if (grupo.codTabela === this.dados[i].codTabela) {
                this.dados[i].situacao = grupo.situacao;
                return;
              }
            }
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
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();

            if (this.form.controls[field].validator) {
              var validationResult = this.form.controls[field].validator(formControl);
              required = validationResult !== null && validationResult.required === true;
            }

            if (required) {
              return 'is-required';
            }
          }
        }]);

        return ComercialComissoesVendedoresInternosGestaoComissionamentosListaComponent;
      }();

      ComercialComissoesVendedoresInternosGestaoComissionamentosListaComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsLocaleService"]
        }, {
          type: _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_14__["DateService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_13__["DetailPanelService"]
        }, {
          type: _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__["PNotifyService"]
        }, {
          type: _cadastros_representantes_representantes_service__WEBPACK_IMPORTED_MODULE_11__["ComercialCadastrosRepresentantesService"]
        }, {
          type: _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_10__["ConfirmModalService"]
        }, {
          type: _shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"]
        }, {
          type: _gestao_comissionamentos_service__WEBPACK_IMPORTED_MODULE_15__["ComercialComissoesVendedoresInternosGestaoComissionamentosService"]
        }];
      };

      ComercialComissoesVendedoresInternosGestaoComissionamentosListaComponent.propDecorators = {
        scrollToFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['scrollToFilter', {}]
        }]
      };
      ComercialComissoesVendedoresInternosGestaoComissionamentosListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-comissoes-vendedores-internos-gestao-comissionamentos-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsLocaleService"], _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_14__["DateService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_13__["DetailPanelService"], _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__["PNotifyService"], _cadastros_representantes_representantes_service__WEBPACK_IMPORTED_MODULE_11__["ComercialCadastrosRepresentantesService"], _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_10__["ConfirmModalService"], _shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"], _gestao_comissionamentos_service__WEBPACK_IMPORTED_MODULE_15__["ComercialComissoesVendedoresInternosGestaoComissionamentosService"]])], ComercialComissoesVendedoresInternosGestaoComissionamentosListaComponent);
      /***/
    },

    /***/
    "b0A6":
    /*!********************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/comissoes/vendedores-internos/gestao-comissionamentos/lista/lista.component.scss ***!
      \********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function b0A6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NvbWlzc29lcy92ZW5kZWRvcmVzLWludGVybm9zL2dlc3Rhby1jb21pc3Npb25hbWVudG9zL2xpc3RhL2xpc3RhLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "m8gU":
    /*!****************************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/comissoes/vendedores-internos/gestao-comissionamentos/formulario/formulario.component.ts ***!
      \****************************************************************************************************************************/

    /*! exports provided: ComercialComissoesVendedoresInternosGestaoComissionamentosFormularioComponent */

    /***/
    function m8gU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialComissoesVendedoresInternosGestaoComissionamentosFormularioComponent", function () {
        return ComercialComissoesVendedoresInternosGestaoComissionamentosFormularioComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./formulario.component.html */
      "8kqo");
      /* harmony import */


      var _formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./formulario.component.scss */
      "B81P");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap/chronos */
      "xj/R");
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "ienR");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-bootstrap/locale */
      "0b5p");
      /* harmony import */


      var _shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./../../../../../../shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./../../../../../../shared/modules/confirm-modal/confirm-modal.service */
      "FOez");
      /* harmony import */


      var _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./../../../../../../shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./../../../../../../shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS");
      /* harmony import */


      var _gestao_comissionamentos_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../gestao-comissionamentos.service */
      "TTUb");
      /* harmony import */


      var src_app_modules_comercial_services_vendedores_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! src/app/modules/comercial/services/vendedores.service */
      "4xRd");
      /* harmony import */


      var src_app_modules_comercial_gestao_associacoes_coordenadores_escritorios_coordenadores_escritorios_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! src/app/modules/comercial/gestao/associacoes/coordenadores-escritorios/coordenadores-escritorios.service */
      "fMkk"); // ngx-bootstrap


      Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_7__["defineLocale"])('pt-br', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_10__["ptBrLocale"]); // Services

      var ComercialComissoesVendedoresInternosGestaoComissionamentosFormularioComponent = /*#__PURE__*/function () {
        function ComercialComissoesVendedoresInternosGestaoComissionamentosFormularioComponent(formBuilder, activatedRoute, localeService, dateService, router, pnotifyService, gestaoComissionamentosService, atividadesService, bsModalService, confirmModalService, modalService, titleService, escritoriosService, vendedoresService) {
          _classCallCheck(this, ComercialComissoesVendedoresInternosGestaoComissionamentosFormularioComponent);

          this.formBuilder = formBuilder;
          this.activatedRoute = activatedRoute;
          this.localeService = localeService;
          this.dateService = dateService;
          this.router = router;
          this.pnotifyService = pnotifyService;
          this.gestaoComissionamentosService = gestaoComissionamentosService;
          this.atividadesService = atividadesService;
          this.bsModalService = bsModalService;
          this.confirmModalService = confirmModalService;
          this.modalService = modalService;
          this.titleService = titleService;
          this.escritoriosService = escritoriosService;
          this.vendedoresService = vendedoresService;
          this.loaderNavbar = false;
          this.loaderFullScreen = true;
          this.breadCrumbTree = [];
          this.showPermissionDenied = false;
          this.aprovarAnalista = true;
          this.reprovarAnalista = true;
          this.aprovarGerente = true;
          this.reprovarGerente = true;
          this.aprovarDiretor = true;
          this.reprovarDiretor = true;
          this.dados = [{
            codTabela: 1,
            nomeTabela: 'tabela 1',
            dataInicial: '01/11/2020',
            dataFinal: '30/11/2020',
            situacao: 1,
            nomeUsuario: 'user 1',
            dataCadastro: '01/11/2020',
            vendedor: [{
              codVendedor: 1,
              nomeVendedor: 'Vendedor 1',
              escritorio: 1,
              kpi: [{
                codKpi: 1,
                descKpi: 'kpi 1',
                porcGanho: 0.075,
                meta: 10,
                totalRealizado: 9,
                porcAlcancado: 90,
                potencialGanho: 0.33,
                ganhoEfetivo: 0.15
              }, {
                codKpi: 2,
                descKpi: 'kpi 2',
                porcGanho: 0.075,
                meta: 20,
                totalRealizado: 20,
                porcAlcancado: 100,
                potencialGanho: 0.33,
                ganhoEfetivo: 0.33
              }]
            }, {
              codVendedor: 2,
              nomeVendedor: 'Vendedor 2',
              escritorio: 2,
              kpi: [{
                codKpi: 1,
                descKpi: 'kpi 1',
                porcGanho: 0.075,
                meta: 10,
                totalRealizado: 10,
                porcAlcancado: 0,
                potencialGanho: 0.33,
                ganhoEfetivo: 0.15
              }, {
                codKpi: 2,
                descKpi: 'kpi 2',
                porcGanho: 0.075,
                meta: 20,
                totalRealizado: 20,
                porcAlcancado: 0,
                potencialGanho: 0.33,
                ganhoEfetivo: 0.15
              }]
            }]
          }];
          this.vendedores = [];
          this.escritorios = [];
          this.profile = {};
          this.dadosLoaded = false;
          this.dadosEmpty = false;
          this.programado = false;
          this.tableConfig = {
            subtitleBorder: false,
            hover: false
          };
          this.tableConfigMateriais = {
            hover: false
          };
          this.orderBy = 'codPreco';
          this.orderType = 'ASC';
          this.maxSize = 10;
          this.itemsPerPage = 300;
          this.currentPage = 1;
          this.totalItems = 0;
          this.localeService.use('pt-br');
        }

        _createClass(ComercialComissoesVendedoresInternosGestaoComissionamentosFormularioComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.setFormFilter();
            this.getRegistros();
            this.setBreadCrumb();
            this.registrarAcesso();
            this.getPerfil();
            this.getEscritorio();
            this.getVendedores();
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            var _this4 = this;

            this.activatedRoute.params.subscribe(function (params) {
              if (params.id) {
                _this4.appTitle = 'Editar tabela';
              } else {
                _this4.appTitle = 'Nova tabela';
              }

              _this4.titleService.setTitle(_this4.appTitle);

              _this4.breadCrumbTree = [{
                descricao: 'Home',
                routerLink: '/comercial/home'
              }, {
                descricao: 'Comissões',
                routerLink: "/comercial/comissoes/".concat(params['idSubModulo'])
              }, {
                descricao: 'Vendedores Internos',
                routerLink: "/comercial/comissoes/".concat(params['idSubModulo'], "/vendedores-internos")
              }, {
                descricao: 'Gestão de Comissionamentos',
                routerLink: "/comercial/comissoes/".concat(params['idSubModulo'], "/vendedores-internos/gestao-comissionamentos/lista")
              }, {
                descricao: _this4.appTitle
              }];
            });
          } // Formulário

        }, {
          key: "setFormFilter",
          value: function setFormFilter() {
            var formValue = this.checkRouterParams();
            console.log(formValue);
            console.log(this.dados);
            this.form = this.formBuilder.group({
              periodo: [formValue.periodo, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              descTabela: [formValue.descTabela, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              escritorio: [formValue.escritorios],
              vendedor: [formValue.vendedores],
              orderBy: [formValue.orderBy],
              orderType: [formValue.orderType],
              pagina: [formValue.pagina],
              registros: [formValue.registros, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            });
            this.checkOrder();
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "checkRouterParams",
          value: function checkRouterParams() {
            var _this5 = this;

            var formValue = {
              codTabela: null,
              periodo: null,
              codStatus: 2,
              orderBy: this.orderBy,
              orderType: this.orderType,
              pagina: 1,
              registros: this.itemsPerPage
            };
            this.activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (queryParams) {
              if (Object.keys(queryParams).length > 0) {
                var params = atob(queryParams['q']);
                params = JSON.parse(params);

                _this5.search(params);

                Object.keys(formValue).forEach(function (formKey) {
                  Object.keys(params).forEach(function (paramKey) {
                    if (formKey == paramKey && formValue[formKey] != params[paramKey]) {
                      if (!isNaN(Number(params[paramKey]))) {
                        formValue[formKey] = Number(params[paramKey]);
                      } else {
                        formValue[formKey] = params[paramKey];
                      }
                    }
                  });
                });
              }
            });
            this.activatedRouteSubscription.unsubscribe();
            return formValue;
          } // Ordem lista

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
          key: "setOrderBy",
          value: function setOrderBy(column) {
            if (this.orderBy === column) {
              if (this.orderType == 'DESC') {
                this.orderType = 'ASC';
              } else if (this.orderType == 'ASC') {
                this.orderType = 'DESC';
              }
            } else {
              this.orderBy = column;
              this.orderType = 'ASC';
            }

            this.form.value.orderBy = this.orderBy;
            this.form.value.orderType = this.orderType;
            this.onFilter();
          } // Pesquisa

        }, {
          key: "onFilter",
          value: function onFilter() {
            if (this.form.valid) {
              this.itemsPerPage = this.form.value.registros;
              this.currentPage = 1;
              this.setRouterParams(this.getParams());
            }
          }
        }, {
          key: "search",
          value: function search(params) {
            this.loaderNavbar = true;
            this.dados = [];
            this.dadosLoaded = false;
            this.dadosEmpty = false;
            /* this.programacaoPagamentosService
              .getProgramacao(params)
              .pipe(
                finalize(() => {
                  this.loaderNavbar = false;
                  this.dadosLoaded = true;
                })
              )
              .subscribe(
                (response: JsonResponse) => {
                  if (response.hasOwnProperty('success') && response.success === true) {
                    this.dados = response.data;
                    this.totalItems = this.dados[0]['total'];
                  } else if (
                    response.hasOwnProperty('success') &&
                    response.success === false
                  ) {
                    this.dadosEmpty = true;
                  } else {
                    this.pnotifyService.error();
                    this.dadosEmpty = true;
                  }
                      },
                (error: any) => {
                  this.dadosEmpty = true;
                        if (error.error.hasOwnProperty('mensagem')) {
                    this.pnotifyService.error(error.error.mensagem);
                  } else {
                    this.pnotifyService.error();
                  }
                }
              ); */
          } // Verifica Parâmetros

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

            _params['orderBy'] = this.orderBy;
            _params['orderType'] = this.orderType;
            return _params;
          }
        }, {
          key: "verificaParams",
          value: function verificaParams() {
            var params = {};

            if (this.form.value.codVendedor) {
              params.codVendedor = this.form.value.codVendedor;
            }

            if (this.form.value.dtInicioVigencia) {
              params.dtInicioVigencia = this.form.value.dtInicioVigencia;
            }

            if (this.form.value.dtFimVigencia) {
              params.dtFimVigencia = this.form.value.dtFimVigencia;
            }

            if (this.form.value.codStatus) {
              params.codStatus = this.form.value.codStatus;
            }

            params.pagina = this.form.value.pagina;
            params.registros = this.form.value.registros;
            params.orderBy = this.form.value.orderBy;
            params.orderType = this.form.value.orderType;
            return params;
          } // Get perfil

        }, {
          key: "getPerfil",
          value: function getPerfil() {
            var _this6 = this;

            this.gestaoComissionamentosService.getPermissoesAcesso().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              _this6.loaderFullScreen = false;
            })).subscribe({
              next: function next(response) {
                if (response.success === true) {
                  _this6.profile = response.data;
                  console.log(response);

                  if (_this6.profile.analistaMarketing === true) {
                    console.log('analistaMarketing');
                  } else if (_this6.profile.gerenteMarketing === true) {
                    console.log('gerenteMarketing');

                    _this6.gerenteDisabled();
                  } else if (_this6.profile.gerenteEscritorio === true) {
                    console.log('gerenteEscritorio');

                    _this6.escritorioDisabled();
                  } else if (_this6.profile.gerenteFiscal === true) {
                    _this6.fiscalDisabled();

                    console.log('gerenteFiscal');
                  } else if (_this6.profile.diretorComercial === true) {
                    console.log('diretorComercial');

                    _this6.diretorDisabled();
                  }
                }
              },
              error: function error(_error) {
                _this6.showPermissionDenied = true;
              }
            });
          }
        }, {
          key: "escritorioDisabled",
          value: function escritorioDisabled() {
            this.form.get('periodo').disable();
            this.form.get('escritorio').disable();
            this.form.get('codStatus').setValue('1');
            this.form.get('codStatus').disable();
          }
        }, {
          key: "gerenteDisabled",
          value: function gerenteDisabled() {
            this.form.get('periodo').disable();
          }
        }, {
          key: "fiscalDisabled",
          value: function fiscalDisabled() {
            this.form.get('periodo').disable();
            this.form.get('codStatus').setValue('4');
            this.form.get('codStatus').disable();
          }
        }, {
          key: "diretorDisabled",
          value: function diretorDisabled() {
            this.form.get('periodo').disable();
          } // Lógicas de aprovação

        }, {
          key: "onAprovarAnalista",
          value: function onAprovarAnalista() {
            this.aprovarAnalista = !this.aprovarAnalista;
            console.log('AGUARDANDO GERENTE DE MARKETING');
          }
        }, {
          key: "onReprovarAnalista",
          value: function onReprovarAnalista() {
            this.reprovarAnalista = !this.reprovarAnalista;
            console.log('AGUARDANDO GERENTE DE ESCRITÓRIO');
          }
        }, {
          key: "onAprovarGerente",
          value: function onAprovarGerente() {
            this.aprovarGerente = !this.aprovarGerente;
            console.log('AGUARDANDO GERENTE FISCAL');
          }
        }, {
          key: "onReprovarGerente",
          value: function onReprovarGerente() {
            this.reprovarGerente = !this.reprovarGerente;
            console.log('AGUARDANDO GERENTE DE ESCRITÓRIO');
          }
        }, {
          key: "onAprovarDiretor",
          value: function onAprovarDiretor() {
            this.aprovarDiretor = !this.aprovarDiretor;
            console.log('CONCLUIDO');
          }
        }, {
          key: "onReprovarDiretor",
          value: function onReprovarDiretor() {
            this.reprovarDiretor = !this.reprovarDiretor;
            console.log('AGUARDANDO GERENTE DE MARKETING');
          }
          /* setVendedorSelecionado(): void {
            this.vendedorSelecionado = {
              codTabela: null,
            };
          }
          */
          // Get e EditarLista

        }, {
          key: "getRegistros",
          value: function getRegistros() {
            this.loaderNavbar = true;
            this.dadosLoaded = false;
            this.dadosEmpty = false;
            /* this.programacaoPagamentosService
              .getProgramacao()
              .pipe(
                finalize(() => {
                  this.loaderNavbar = false;
                  this.dadosLoaded = true;
                })
              )
              .subscribe(
                dados => {this.dados = dados; },
                (response: JsonResponse) => {
                  if (response.hasOwnProperty('success') && response.success === true) {
                    this.dados = response.data;
                          this.totalItems = this.dados[0]['total'];
                  } else if (
                    response.hasOwnProperty('success') &&
                    response.success === false
                  ) {
                    this.dadosEmpty = true;
                  } else {
                    this.pnotifyService.error();
                    this.dadosEmpty = true;
                  }
                },
                // (error: any) => {
                //   this.dadosEmpty = true;
                      //   if (error.error.hasOwnProperty('mensagem')) {
                //     this.pnotifyService.error(error.error.mensagem);
                //   } else {
                //     this.pnotifyService.error();
                //   }
                // }
              ); */
          }
        }, {
          key: "onEdit",
          value: function onEdit(item) {
            this.router.navigate(['../editar', item.codPreco], {
              relativeTo: this.activatedRoute
            });
          } // Outros

        }, {
          key: "onPageChanged",
          value: function onPageChanged(event) {
            if (this.form.value.pagina != event.page) {
              this.form.value.pagina = event.page;
              this.onFilter();
              this.scrollToFilter.nativeElement.scrollIntoView({
                behavior: 'instant'
              });
            }
          }
        }, {
          key: "refreshMainData",
          value: function refreshMainData(lista) {
            for (var i = 0; i < this.dados.length; i++) {
              if (lista.codTabela === this.dados[i].codTabela) {
                this.dados[i].situacao = lista.situacao;
                return;
              }
            }
          } //modal

        }, {
          key: "openModal",
          value: function openModal(template, index) {
            this.modalRef = this.bsModalService.show(template, index);
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
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();

            if (this.form.controls[field].validator) {
              var validationResult = this.form.controls[field].validator(formControl);
              required = validationResult !== null && validationResult.required === true;
            }

            if (required) {
              return 'is-required';
            }
          }
        }, {
          key: "getVendedores",
          value: function getVendedores() {
            var _this7 = this;

            this.vendedoresService.getVendedores().subscribe(function (response) {
              if (response.responseCode === 200) {
                _this7.vendedores = response.result;

                _this7.vendedores.unshift({
                  id: 0,
                  nome: 'EXIBIR TODOS'
                });
              }
            });
          }
        }, {
          key: "getEscritorio",
          value: function getEscritorio() {
            var _this8 = this;

            this.escritoriosService.getListaCoordenadoresEscritorios().subscribe(function (response) {
              if (response.responseCode === 200) {
                _this8.escritorios = response.result.coordenadores;

                _this8.escritorios.unshift({
                  id: 0,
                  nome: 'EXIBIR TODOS'
                });
              }
            });
          }
        }]);

        return ComercialComissoesVendedoresInternosGestaoComissionamentosFormularioComponent;
      }();

      ComercialComissoesVendedoresInternosGestaoComissionamentosFormularioComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsLocaleService"]
        }, {
          type: _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_14__["DateService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_13__["PNotifyService"]
        }, {
          type: _gestao_comissionamentos_service__WEBPACK_IMPORTED_MODULE_16__["ComercialComissoesVendedoresInternosGestaoComissionamentosService"]
        }, {
          type: _shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__["AtividadesService"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["BsModalService"]
        }, {
          type: _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_12__["ConfirmModalService"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["BsModalService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_15__["TitleService"]
        }, {
          type: src_app_modules_comercial_gestao_associacoes_coordenadores_escritorios_coordenadores_escritorios_service__WEBPACK_IMPORTED_MODULE_18__["ComercialGestaoAssociacoesCoordenadoresEscritoriosService"]
        }, {
          type: src_app_modules_comercial_services_vendedores_service__WEBPACK_IMPORTED_MODULE_17__["ComercialVendedoresService"]
        }];
      };

      ComercialComissoesVendedoresInternosGestaoComissionamentosFormularioComponent.propDecorators = {
        scrollToFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['scrollToFilter', {}]
        }]
      };
      ComercialComissoesVendedoresInternosGestaoComissionamentosFormularioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-comissoes-vendedores-internos-gestao-comissionamentos-formulario',
        template: _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsLocaleService"], _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_14__["DateService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_13__["PNotifyService"], _gestao_comissionamentos_service__WEBPACK_IMPORTED_MODULE_16__["ComercialComissoesVendedoresInternosGestaoComissionamentosService"], _shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__["AtividadesService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["BsModalService"], _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_12__["ConfirmModalService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["BsModalService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_15__["TitleService"], src_app_modules_comercial_gestao_associacoes_coordenadores_escritorios_coordenadores_escritorios_service__WEBPACK_IMPORTED_MODULE_18__["ComercialGestaoAssociacoesCoordenadoresEscritoriosService"], src_app_modules_comercial_services_vendedores_service__WEBPACK_IMPORTED_MODULE_17__["ComercialVendedoresService"]])], ComercialComissoesVendedoresInternosGestaoComissionamentosFormularioComponent);
      /***/
    },

    /***/
    "tTD3":
    /*!***********************************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/comissoes/vendedores-internos/gestao-comissionamentos/gestao-comissionamentos.routing.module.ts ***!
      \***********************************************************************************************************************************/

    /*! exports provided: ComercialComissoesVendedoresInternosGestaoComissionamentosRoutingModule */

    /***/
    function tTD3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialComissoesVendedoresInternosGestaoComissionamentosRoutingModule", function () {
        return ComercialComissoesVendedoresInternosGestaoComissionamentosRoutingModule;
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


      var _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./formulario/formulario-resolver.guard */
      "W8yK");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./lista/lista.component */
      "a8Q8");
      /* harmony import */


      var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./formulario/formulario.component */
      "m8gU"); // Guards
      // import { FormDeactivateGuard } from 'src/app/guards/form-deactivate.guard';
      // Components


      var routes = [{
        path: '',
        children: [{
          path: 'lista',
          component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_4__["ComercialComissoesVendedoresInternosGestaoComissionamentosListaComponent"]
        }, {
          path: '',
          redirectTo: 'lista',
          pathMatch: 'full'
        }, {
          path: 'novo',
          component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_5__["ComercialComissoesVendedoresInternosGestaoComissionamentosFormularioComponent"],
          resolve: {
            detalhes: _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_3__["ComercialComissoesVendedoresInternosGestaoComissionamentosFormularioResolverGuard"]
          }
        }, {
          path: 'editar/:id',
          component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_5__["ComercialComissoesVendedoresInternosGestaoComissionamentosFormularioComponent"],
          resolve: {
            detalhes: _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_3__["ComercialComissoesVendedoresInternosGestaoComissionamentosFormularioResolverGuard"]
          }
        }]
      }];

      var ComercialComissoesVendedoresInternosGestaoComissionamentosRoutingModule = /*#__PURE__*/_createClass(function ComercialComissoesVendedoresInternosGestaoComissionamentosRoutingModule() {
        _classCallCheck(this, ComercialComissoesVendedoresInternosGestaoComissionamentosRoutingModule);
      });

      ComercialComissoesVendedoresInternosGestaoComissionamentosRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ComercialComissoesVendedoresInternosGestaoComissionamentosRoutingModule);
      /***/
    },

    /***/
    "wOft":
    /*!**********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/comissoes/vendedores-internos/gestao-comissionamentos/lista/lista.component.html ***!
      \**********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function wOft(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<!-- <loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen> -->\r\n<app-header appTitle=\"GESTÃO DE COMISSIONAMENTOS\">\r\n  <button\r\n    type=\"button\"\r\n    [routerLink]=\"['../novo']\">\r\n    Adicionar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onFilter()\">\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" >\r\n  <div class=\"row\" >\r\n    <div class=\"col\">\r\n      <advanced-filter>\r\n        <form [formGroup]=\"form\" autocomplete=\"off\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-6\">\r\n              <label for=\"periodo\">Período</label>\r\n              <input\r\n            class=\"form-control\"\r\n            id=\"periodo\"\r\n            type=\"text\"\r\n            formControlName=\"periodo\"\r\n            >\r\n            </div>\r\n            <div class=\"form-group col-lg-6\">\r\n              <label for=\"descTabela\">Descrição da tabela</label>\r\n              <input\r\n            class=\"form-control\"\r\n            id=\"descTabela\"\r\n            type=\"text\"\r\n            formControlName=\"descTabela\"\r\n            >\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </advanced-filter>\r\n    </div>\r\n  </div>\r\n  <div class=\"row text-center justify-content-center\" >\r\n    <div class=\"col\">\r\n      <custom-table [config]=\"tableConfig\" *ngIf=\"dadosPagination.length > 0 && !dadosEmpty\">\r\n        <ng-template #thead let-thead>\r\n          <tr >\r\n            <!-- <th scope=\"col\" class=\"text-center hover\" >\r\n              <thead-sorter\r\n                value=\"Código\"\r\n                [active]=\"orderBy == 'codDesc'\"\r\n                [sort]=\"orderType\"\r\n                (click)=\"setOrderBy('codDesc')\">\r\n              </thead-sorter>\r\n            </th> -->\r\n            <th scope=\"col-6\">Descrição Tabela</th>\r\n            <th scope=\"col-2\">Data Lançamento</th>\r\n            <th scope=\"col-3\">Usuário Lançamento</th>\r\n            <th scope=\"col-1\" [hidden]=\"showDetailPanel\"></th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let lista of dadosPagination; let i = index;\" [class.table-active]=\"lista.codTabela == tabelaSelecionada.codTabela\">\r\n            <!-- <td\r\n              class=\"text-center hover\"\r\n              [ngClass]=\"classStatusBorder(lista)\"\r\n              (click)=\"onDetails(lista)\">\r\n              {{ lista.codRepresentante }}\r\n            </td> -->\r\n            <td class=\"hover\">\r\n              {{ lista.nomeTabela }}\r\n            </td>\r\n            <td class=\"hover\" >\r\n              {{ lista.dataCadastro }}\r\n            </td>\r\n            <td class=\"hover\">\r\n              {{ lista.nomeUsuario }}\r\n            </td>\r\n            <td class=\"text-right\">\r\n              <span class=\"mr-3\" tooltip=\"Mais detalhes\" placement=\"left\" container=\"body\">\r\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onEdit(lista)\">\r\n                  <i class=\"fas fa-plus\"></i>\r\n                </button>\r\n              </span>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n      <div class=\"d-flex justify-content-center mt-3\" *ngIf=\"totalItems > itemsPerPage && !loaderNavbar\">\r\n        <pagination\r\n          [maxSize]=\"maxSize\"\r\n          [(totalItems)]=\"totalItems\"\r\n          (pageChanged)=\"onPageChanged($event)\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPage\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\">\r\n        </pagination>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</app-body>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~gestao-comissionamentos-gestao-comissionamentos-module~vendedores-internos-vendedores-internos-module-es5.js.map