(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gestao-comissionamentos-gestao-comissionamentos-module"], {
    /***/
    "+fVa":
    /*!****************************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/comissoes/representantes/gestao-comissionamentos/formulario/formulario-resolver.guard.ts ***!
      \****************************************************************************************************************************/

    /*! exports provided: ComercialComissoesGestaoComissionamentosFormularioResolverGuard */

    /***/
    function fVa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialComissoesGestaoComissionamentosFormularioResolverGuard", function () {
        return ComercialComissoesGestaoComissionamentosFormularioResolverGuard;
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
      "dRIe"); // Services


      var ComercialComissoesGestaoComissionamentosFormularioResolverGuard = /*#__PURE__*/function () {
        function ComercialComissoesGestaoComissionamentosFormularioResolverGuard(gestaoComissionamentosService) {
          _classCallCheck(this, ComercialComissoesGestaoComissionamentosFormularioResolverGuard);

          this.gestaoComissionamentosService = gestaoComissionamentosService;
        }

        _createClass(ComercialComissoesGestaoComissionamentosFormularioResolverGuard, [{
          key: "resolve",
          value: function resolve(route) {
            if (route.params && route.params.id) {
              return this.gestaoComissionamentosService.getDetalhes(route.params.id);
            } // É implementado o método "of" para manter a tipagem de retorno com Observable.


            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
              success: true,
              mensagem: null,
              data: {
                nomeRepresentante: '',
                codRepresentante: '',
                valorTotalDescontos: '',
                valorTotalAjuda: '',
                dataInicial: '',
                dataFinal: '',
                codTipoPagamento: '',
                valorTotalComissao: '',
                idAnoMes: '',
                anexos: [],
                info: []
              }
            });
          }
        }]);

        return ComercialComissoesGestaoComissionamentosFormularioResolverGuard;
      }();

      ComercialComissoesGestaoComissionamentosFormularioResolverGuard.ctorParameters = function () {
        return [{
          type: _gestao_comissionamentos_service__WEBPACK_IMPORTED_MODULE_3__["ComercialComissoesGestaoComissionamentosService"]
        }];
      };

      ComercialComissoesGestaoComissionamentosFormularioResolverGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_gestao_comissionamentos_service__WEBPACK_IMPORTED_MODULE_3__["ComercialComissoesGestaoComissionamentosService"]])], ComercialComissoesGestaoComissionamentosFormularioResolverGuard);
      /***/
    },

    /***/
    "GR5m":
    /*!**********************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/comissoes/representantes/gestao-comissionamentos/gestao-comissionamentos.module.ts ***!
      \**********************************************************************************************************************/

    /*! exports provided: ComercialComissoesRepresentantesGestaoComissionamentosModule */

    /***/
    function GR5m(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialComissoesRepresentantesGestaoComissionamentosModule", function () {
        return ComercialComissoesRepresentantesGestaoComissionamentosModule;
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
      "fU3u");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./lista/lista.component */
      "no/O");
      /* harmony import */


      var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./formulario/formulario.component */
      "uxx0");
      /* harmony import */


      var _gestao_comissionamentos_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./gestao-comissionamentos.service */
      "dRIe"); // ngx-bootstrap
      // ng-select
      // ng2-currency-mask
      // PNotify
      // Modules
      // Components
      // Services


      var ComercialComissoesRepresentantesGestaoComissionamentosModule = function ComercialComissoesRepresentantesGestaoComissionamentosModule() {
        _classCallCheck(this, ComercialComissoesRepresentantesGestaoComissionamentosModule);
      };

      ComercialComissoesRepresentantesGestaoComissionamentosModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_lista_lista_component__WEBPACK_IMPORTED_MODULE_16__["ComercialComissoesGestaoComissionamentosListaComponent"], _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_17__["ComercialComissoesGestaoComissionamentosFormularioComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"].forRoot(), ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"], ng2_currency_mask__WEBPACK_IMPORTED_MODULE_8__["CurrencyMaskModule"], _gestao_comissionamentos_routing_module__WEBPACK_IMPORTED_MODULE_15__["ComercialComissoesGestaoComissionamentosRoutingModule"], _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"], _shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_12__["TemplatesModule"], _templates_templates_module__WEBPACK_IMPORTED_MODULE_11__["ComercialTemplatesModule"], _cadastros_materiais_templates_templates_module__WEBPACK_IMPORTED_MODULE_10__["ComercialCadastrosMateriaisTemplatesModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsDatepickerModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_14__["ModalModule"].forRoot()],
        providers: [_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"], _gestao_comissionamentos_service__WEBPACK_IMPORTED_MODULE_18__["ComercialComissoesGestaoComissionamentosService"]]
      })], ComercialComissoesRepresentantesGestaoComissionamentosModule);
      /***/
    },

    /***/
    "aeDo":
    /*!***************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/comissoes/representantes/gestao-comissionamentos/formulario/formulario.component.html ***!
      \***************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function aeDo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\n<app-header [appTitle]=\"appTitle\">\n<!-- <button\n  *ngIf=\"profile.gerenteEscritorio && notasEscritorio\"\n  type=\"button\"\n  (click)=\"onNotasEscritorio()\">\n  Solicitar Notas Escritório\n</button>\n<button\n  *ngIf=\"profile.gerenteEscritorio && !notasEscritorio\"\n  type=\"button\">\n  Notas Solicitadas\n</button> -->\n<!-- *ngIf=\"action === 'update'\" -->\n  <button\n    type=\"button\"\n    (click)=\"onFilter()\">\n    Filtrar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" >\n  <div class=\"row\" >\n    <div class=\"col\">\n      <advanced-filter>\n        <form [formGroup]=\"form\" autocomplete=\"off\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-lg-2\" [hidden]=\"action === 'update'\">\n              <label for=\"dtInicioVigencia\">Data Inicio</label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\n                </div>\n                  <input\n                  class=\"form-control\"\n                  id=\"dtInicioVigencia\"\n                  type=\"text\"\n                  formControlName=\"dtInicioVigencia\"\n                  (change)=\"checkValidatorsData()\"\n                  bsDatepicker>\n              </div>\n            </div>\n\n            <div class=\"form-group col-lg-2\" [hidden]=\"action === 'create'\">\n              <label for=\"mesReferente\">Mês Referência</label>\n                <input\n                  class=\"form-control\"\n                  id=\"mesReferente\"\n                  type=\"text\"\n                  formControlName=\"mesReferente\"\n                  [readonly]=\"true\">\n            </div>\n\n            <div class=\"form-group col-lg-2\" [hidden]=\"action === 'update'\">\n              <label for=\"dtFimVigencia\">Data Fim</label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\n                </div>\n                  <input\n                    class=\"form-control\"\n                    id=\"dtFimVigencia\"\n                    type=\"text\"\n                    formControlName=\"dtFimVigencia\"\n                    change=\"checkValidatorsData()\"\n                    bsDatepicker>\n              </div>\n\n            </div>\n\n            <!-- <div class=\"form-group col-lg-1\" [hidden]=\"action === 'create'\">\n              <label for=\"dtFimVigencia\">Dt Fim</label>\n              <input\n              value=\"{{ dataFinal | date: 'dd/MM/yyyy' }}\"\n              class=\"form-control\"\n              id=\"dtFimVigencia\"\n              type=\"text\"\n              formControlName=\"dtFimVigencia\"\n              bsDatepicker\n              [readonly]=\"true\">\n            </div> -->\n\n            <div class=\"form-group col-lg-3\" [hidden]=\"action === 'create'\">\n              <label for=\"codEscritorio\">Escritório</label>\n              <ng-select\n                  type='text'\n                  [items]=\"escritorios\"\n                  [searchable]=\"true\"\n                  [clearable]=\"false\"\n                  [virtualScroll]=\"true\"\n                  [hideSelected]=\"true\"\n                  placeholder=\"Selecione...\"\n                  bindLabel=\"nomeEscritorio\"\n                  bindValue=\"idEscritorio\"\n                  formControlName=\"codEscritorio\"\n                  [readonly]=\"profile.gerenteEscritorio || action === 'create'\"\n                  >\n                </ng-select>\n\n            </div>\n            <div class=\"form-group col-lg-4\" [hidden]=\"action === 'create'\">\n              <label for=\"codRepresentante\">Representante</label>\n              <ng-select\n                  type='text'\n                  [items]=\"representantes\"\n                  [searchable]=\"true\"\n                  [clearable]=\"false\"\n                  placeholder=\"Selecione...\"\n                  bindLabel=\"nomeRepresentante\"\n                  bindValue=\"codRepresentante\"\n                  formControlName=\"codRepresentante\"\n                  [readonly]=\"action === 'create'\">\n                </ng-select>\n            </div>\n\n            <div class=\"form-group col-lg-3\" [hidden]=\"action === 'create'\">\n              <label for=\"codStatus\">Status</label>\n              <ng-select\n                type='text'\n                [items]=\"situacao\"\n                [searchable]=\"true\"\n                [clearable]=\"false\"\n                placeholder=\"Selecione...\"\n                bindLabel=\"nomeSituacao\"\n                bindValue=\"codSituacao\"\n                formControlName=\"codStatus\"\n                [readonly]=\"!readonly\"\n              >\n              </ng-select>\n            </div>\n          </div>\n        </form>\n      </advanced-filter>\n    </div>\n  </div>\n\n  <empty-result message=\"Nenhuma informação encontrada\" *ngIf=\"dadosEmpty && dadosLoaded\"></empty-result>\n<div class=\"\"*ngIf=\"dadosComissao.length > 0 && !dadosEmpty\">\n  <div class=\"mb-2 border rounded border-light mb-3\" *ngFor=\"let dados of dadosComissao; let indice = index;\">\n    <custom-table [config]=\"tableConfigAnexos\">\n      <ng-template #thead let-thead>\n        <tr *ngIf=\"validaBarraAzul(dados)\">\n            <th\n            class=\"tdPrimaryLarge rounded-right rounded-left border-light\"\n\n            *ngIf=\"action == 'create'\">\n              <div style=\"text-transform: uppercase; font-weight: bold; font-size: 0.8rem; \">\n                  {{ dados.nomeRepresentante }}\n              </div>\n            </th>\n\n            <th\n            class=\"tdPrimaryLarge\"\n\n            *ngIf=\"action == 'update'\">\n              <div style=\"text-transform: uppercase; font-weight: bold; font-size: 0.8rem; \">\n                  {{ dados.nomeRepresentante }}\n              </div>\n              <div style=\"text-transform: uppercase; font-size: 0.7rem; \">\n                Período: DE {{ dados.dataInicial | date: 'dd/MM/yyyy' }} a {{ dados.dataFinal | date: 'dd/MM/yyyy' }}\n              </div>\n            </th>\n\n            <!-- input gerente de escritório -->\n            <th class=\"tdPrimarySmall\">\n            </th>\n\n           <!-- inputs gerente fiscal -->\n            <th class=\"tdPrimarySmall\">\n              <btn-icon\n                  *ngIf=\"profile.gerenteFiscal && dados.valoresEnviados !== 'true' && action === 'update'\"\n                  icon=\"fas fa-plus-square\"\n                  size=\"medium\"\n                  color=\"primary\"\n                  tooltip=\"Adicionar Valores\"\n                  (click)=\"openModalValores(valores, indice); setFormValores(dados)\">\n              </btn-icon>\n\n              <btn-icon\n                  *ngIf=\"profile.gerenteFiscal && dados.valoresEnviados === 'true' && action === 'update'\"\n                  icon=\"fas fa-arrow-circle-right\"\n                  size=\"medium\"\n                  color=\"primary\"\n                  tooltip=\"Valores adicionados\">\n              </btn-icon>\n            </th>\n\n            <!-- notas -->\n            <th class=\"tdPrimarySmall\" >\n              <btn-icon\n                  *ngIf=\"profile.gerenteEscritorio && dados.notasSolicitadas != 'true' && action === 'update' && (dados.codSituacao == 1 && dados.emiteNota == 1)\"\n                  icon=\"fas fa-clipboard\"\n                  size=\"medium\"\n                  color=\"primary\"\n                  tooltip=\"Solicitar Notas\"\n                  [hidden]=\"dados.clicado\"\n                  id=\"notas\"\n                  (click)=\"onNotasRepresentante(dados)\">\n              </btn-icon>\n\n              <btn-icon\n                  *ngIf=\"profile.gerenteEscritorio && dados.notasSolicitadas === 'true' && action === 'update' || (dados.codSituacao == 2 && dados.emiteNota == 1)\"\n                  icon=\"fas fa-clipboard-check\"\n                  size=\"medium\"\n                  color=\"success\"\n                  tooltip=\"Notas Solicitadas\"\n                  id=\"notas\">\n              </btn-icon>\n\n              <btn-icon\n                  *ngIf=\"profile.gerenteEscritorio && dados.notasSolicitadas != 'true' && action === 'update' && (dados.codSituacao == 1 && dados.emiteNota == 0)\"\n                  icon=\"fas fa-check\"\n                  size=\"medium\"\n                  color=\"success\"\n                  tooltip=\"Aprovar\"\n                  id=\"notas\"\n                  (click)=\"onAprovarEscritorio(dados)\">\n              </btn-icon>\n\n              <btn-icon\n                  *ngIf=\"profile.gerenteEscritorio && dados.notasSolicitadas == 'true' && action === 'update' && (dados.codSituacao == 3 && dados.emiteNota == 0)\"\n                  icon=\"fas fa-check\"\n                  size=\"medium\"\n                  color=\"success\"\n                  tooltip=\"Aprovado\"\n                  id=\"notas\">\n              </btn-icon>\n            </th>\n\n            <!-- aprovar/reprovar -->\n            <!-- *ngFor=\"let item of dados.info; let i = index;\" -->\n            <th class=\"tdPrimarySmall\">\n              <!-- Analista de Marketing -->\n              <btn-icon\n                  *ngIf=\"profile.analistaMarketing && (dados.analista != 'false' && dados.analista != 'true') && action === 'update' && dados.codSituacao == 3\"\n                  icon=\"fas fa-check\"\n                  size=\"medium\"\n                  color=\"success\"\n                  tooltip=\"Aprovar\"\n                  id=\"aprovado\"\n                  [hidden]=\"dados.clicado\"\n                  (click)=\"onAprovarAnalista(dados)\">\n              </btn-icon>\n              <btn-icon\n                  *ngIf=\"profile.analistaMarketing && (dados.analista != 'false' && dados.analista != 'true') && action === 'update' && dados.codSituacao == 3\"\n                  icon=\"fas fa-times\"\n                  size=\"medium\"\n                  color=\"danger\"\n                  tooltip=\"Reprovar\"\n                  id=\"reprovado\"\n                  [hidden]=\"dados.clicado\"\n                  (click)=\"openModalAnalista(analista);\">\n              </btn-icon>\n              <!-- && (item.aprovadoAnalista === undefined || item.aprovadoAnalista === 'false') -->\n              <btn-icon\n                  *ngIf=\"profile.analistaMarketing && dados.analista === 'false' && action === 'update'\"\n                  icon=\"fas fa-times\"\n                  size=\"medium\"\n                  color=\"danger\"\n                  tooltip=\"Reprovado\"\n                  id=\"reprovado\">\n              </btn-icon>\n              <!-- (item.aprovadoAnalista === undefined || item.aprovadoAnalista === 'true') -->\n              <btn-icon\n                  *ngIf=\"profile.analistaMarketing  && dados.analista === 'true' && action === 'update'\"\n                  icon=\"fas fa-check\"\n                  size=\"medium\"\n                  color=\"success\"\n                  tooltip=\"Aprovado\"\n                  id=\"aprovado\">\n              </btn-icon>\n\n              <!-- Gerente de Marketing -->\n              <btn-icon\n                  *ngIf=\"profile.gerenteMarketing &&\n                  !profile.analistaMarketing &&\n                  (dados.gerente != 'false' &&\n                  dados.gerente != 'true') &&\n                  action === 'update' &&\n                  dados.codSituacao == 4\"\n                  icon=\"fas fa-check\"\n                  size=\"medium\"\n                  color=\"success\"\n                  tooltip=\"Aprovar\"\n                  id=\"aprovado\"\n                  [hidden]=\"dados.clicado\"\n                  (click)=\"onAprovarGerente(dados)\">\n              </btn-icon>\n              <btn-icon\n                  *ngIf=\"profile.gerenteMarketing &&\n                  !profile.analistaMarketing &&\n                  (dados.gerente != 'false' &&\n                  dados.gerente != 'true') &&\n                  action === 'update' &&\n                  dados.codSituacao == 4\"\n                  icon=\"fas fa-times\"\n                  size=\"medium\"\n                  color=\"danger\"\n                  tooltip=\"Reprovar\"\n                  id=\"reprovado\"\n                  [hidden]=\"dados.clicado\"\n                  (click)=\"openModalGerente(gerente)\">\n              </btn-icon>\n              <!-- && (item.aprovadoGerente === undefined || item.aprovadoGerente === 'false' -->\n              <btn-icon\n                  *ngIf=\"profile.gerenteMarketing && dados.gerente === 'false' && action === 'update'\"\n                  icon=\"fas fa-times\"\n                  size=\"medium\"\n                  color=\"danger\"\n                  tooltip=\"Reprovado\"\n                  id=\"reprovado\">\n              </btn-icon>\n              <!-- && (item.aprovadoGerente === undefined || item.aprovadoGerente === 'true') -->\n              <btn-icon\n                  *ngIf=\"profile.gerenteMarketing && dados.gerente === 'true' && action === 'update'\"\n                  icon=\"fas fa-check\"\n                  size=\"medium\"\n                  color=\"success\"\n                  tooltip=\"Aprovado\"\n                  id=\"aprovado\">\n              </btn-icon>\n\n              <!-- Diretor Comercial -->\n              <btn-icon\n                  *ngIf=\"profile.diretorComercial && (dados.diretor != 'false' && dados.diretor != 'true') && action === 'update' && dados.codSituacao == 6\"\n                  icon=\"fas fa-check\"\n                  size=\"medium\"\n                  tooltip=\"Aprovar\"\n                  color=\"success\"\n                  id=\"aprovado\"\n                  [hidden]=\"dados.clicado\"\n                  (click)=\"onAprovarDiretor(dados)\">\n              </btn-icon>\n              <btn-icon\n                  *ngIf=\"profile.diretorComercial && (dados.diretor != 'false' && dados.diretor != 'true') && action === 'update' && dados.codSituacao == 6\"\n                  icon=\"fas fa-times\"\n                  size=\"medium\"\n                  color=\"danger\"\n                  tooltip=\"Reprovar\"\n                  id=\"reprovado\"\n                  [hidden]=\"dados.clicado\"\n                  (click)=\"openModalDiretor(diretor)\">\n              </btn-icon>\n              <!-- && (item.aprovadoDiretor === undefined || item.aprovadoDiretor === 'false') -->\n              <btn-icon\n                  *ngIf=\"profile.diretorComercial && dados.diretor === 'false' \"\n                  icon=\"fas fa-times\"\n                  size=\"medium\"\n                  color=\"danger\"\n                  tooltip=\"Reprovado\"\n                  id=\"reprovado\">\n              </btn-icon>\n              <!-- && (item.aprovadoDiretor === undefined || item.aprovadoDiretor === 'true') -->\n              <btn-icon\n                  *ngIf=\"profile.diretorComercial && dados.diretor === 'true' && action === 'update'\"\n                  icon=\"fas fa-check\"\n                  size=\"medium\"\n                  color=\"danger\"\n                  tooltip=\"Aprovado\"\n                  id=\"aprovado\">\n              </btn-icon>\n\n            </th>\n\n            <!-- mais detalhes -->\n            <th\n            *ngIf=\"action === 'update'\"\n            class=\"tdPrimarySmall\">\n              <btn-icon\n                  icon=\"fas fa-history\"\n                  type=\"button\"\n                  size=\"medium\"\n                  tooltip=\"Histórico\"\n                  (click)=\"openModalHistorico(historico); onHistoricoExclusao(dados.info);\">\n              </btn-icon>\n\n              <!-- <btn-icon\n                  class=\"ml-2\"\n                  icon=\"fas fa-plus\"\n                  size=\"small\"\n                  tooltip=\"Mais detalhes\"\n                  (click)=\"openModalDetails(details); openDetails(dados);\">\n              </btn-icon> -->\n            </th>\n\n        </tr>\n\n\n        <tr *ngIf=\"validaBarraVerde(dados)\">\n        <th\n          class=\"tdAprovedLarge\"\n          >\n          <div style=\"text-transform: uppercase; font-weight: bold; font-size: 0.8rem; \">\n              {{ dados.nomeRepresentante }}\n          </div>\n          <div style=\"text-transform: uppercase; font-size: 0.7rem; \">\n            Período: DE {{ dados.dataInicial | date: 'dd/MM/yyyy' }} a {{ dados.dataFinal | date: 'dd/MM/yyyy' }}\n          </div>\n        </th>\n\n          <!-- input gerente de escritório -->\n          <th class=\"tdAprovedSmall\">\n          </th>\n\n         <!-- inputs gerente fiscal -->\n          <th class=\"tdAprovedSmall\">\n            <btn-icon\n            *ngIf=\"profile.gerenteFiscal && dados.valoresEnviados !== 'true' && action === 'update'\"\n            icon=\"fas fa-plus-square\"\n            size=\"small\"\n            tooltip=\"Adicionar Valores\"\n            (click)=\"openModalValores(valores, indice); setFormValores(dados)\">\n        </btn-icon>\n\n        <btn-icon\n            *ngIf=\"profile.gerenteFiscal && dados.valoresEnviados === 'true' && action === 'update'\"\n            icon=\"fas fa-check\"\n            size=\"small\"\n            tooltip=\"Valores adicionados\">\n        </btn-icon>\n          </th>\n\n          <!-- notas -->\n          <th class=\"tdAprovedSmall\" >\n            <btn-icon\n                  *ngIf=\"profile.gerenteEscritorio && dados.notasSolicitadas != 'true' && action === 'update' && (dados.codSituacao == 1 && dados.emiteNota == 1)\"\n                  icon=\"fas fa-clipboard\"\n                  size=\"medium\"\n                  tooltip=\"Solicitar Notas\"\n                  id=\"notas\"\n                  (click)=\"onNotasRepresentante(dados)\">\n              </btn-icon>\n\n              <btn-icon\n                  *ngIf=\"profile.gerenteEscritorio && dados.notasSolicitadas === 'true' && action === 'update' && (dados.codSituacao == 2 && dados.emiteNota == 1)\"\n                  icon=\"fas fa-clipboard-check\"\n                  size=\"medium\"\n                  color=\"success\"\n                  tooltip=\"Notas Solicitadas\"\n                  id=\"notas\">\n              </btn-icon>\n\n              <btn-icon\n                  *ngIf=\"profile.gerenteEscritorio && dados.notasSolicitadas != 'true' && action === 'update' && (dados.codSituacao == 1 && dados.emiteNota == 0)\"\n                  icon=\"fas fa-check\"\n                  size=\"medium\"\n                  tooltip=\"Aprovar\"\n                  id=\"notas\">\n              </btn-icon>\n\n              <btn-icon\n                  *ngIf=\"profile.gerenteEscritorio && dados.notasSolicitadas != 'true' && action === 'update' && (dados.codSituacao == 3 && dados.emiteNota == 0)\"\n                  icon=\"fas fa-check\"\n                  size=\"medium\"\n                  tooltip=\"Aprovado\"\n                  id=\"notas\">\n              </btn-icon>\n\n        </th>\n\n\n          <!-- aprovar/reprovar -->\n          <!-- *ngFor=\"let item of dados.info; let i = index;\" -->\n          <th class=\"tdAprovedSmall\">\n              <!-- Analista de Marketing -->\n              <btn-icon\n                  *ngIf=\"profile.analistaMarketing && (dados.analista != 'false' && dados.analista != 'true') && action === 'update'\"\n                  icon=\"fas fa-check\"\n                  size=\"medium\"\n                  tooltip=\"Aprovar\"\n                  id=\"aprovado\"\n                  (click)=\"onAprovarAnalista(dados)\">\n              </btn-icon>\n              <btn-icon\n                  *ngIf=\"profile.analistaMarketing && (dados.analista != 'false' && dados.analista != 'true') && action === 'update'\"\n                  icon=\"fas fa-times\"\n                  size=\"medium\"\n                  tooltip=\"Reprovar\"\n                  id=\"reprovado\"\n                  (click)=\"openModalAnalista(analista);\">\n              </btn-icon>\n              <!-- && (item.aprovadoAnalista === undefined || item.aprovadoAnalista === 'false') -->\n              <btn-icon\n                  *ngIf=\"profile.analistaMarketing && dados.analista === 'false' && action === 'update'\"\n                  icon=\"fas fa-times\"\n                  size=\"medium\"\n                  tooltip=\"Reprovado\"\n                  id=\"reprovado\">\n              </btn-icon>\n              <!-- (item.aprovadoAnalista === undefined || item.aprovadoAnalista === 'true') -->\n              <btn-icon\n                  *ngIf=\"profile.analistaMarketing  && dados.analista === 'true' && action === 'update'\"\n                  icon=\"fas fa-check\"\n                  size=\"medium\"\n                  tooltip=\"Aprovado\"\n                  id=\"aprovado\">\n              </btn-icon>\n\n              <!-- Gerente de Marketing -->\n              <btn-icon\n              *ngIf=\"profile.gerenteMarketing &&\n              !profile.analistaMarketing &&\n              (dados.gerente != 'false' &&\n              dados.gerente != 'true') &&\n              action === 'update' &&\n              dados.codSituacao == 4\"\n              icon=\"fas fa-check\"\n              size=\"medium\"\n              color=\"success\"\n              tooltip=\"Aprovar\"\n              id=\"aprovado\"\n              [hidden]=\"dados.clicado\"\n              (click)=\"onAprovarGerente(dados)\">\n          </btn-icon>\n          <btn-icon\n              *ngIf=\"profile.gerenteMarketing &&\n              !profile.analistaMarketing &&\n              (dados.gerente != 'false' &&\n              dados.gerente != 'true') &&\n              action === 'update' &&\n              dados.codSituacao == 4\"\n              icon=\"fas fa-times\"\n              size=\"medium\"\n              color=\"danger\"\n              tooltip=\"Reprovar\"\n              id=\"reprovado\"\n              [hidden]=\"dados.clicado\"\n              (click)=\"openModalGerente(gerente)\">\n          </btn-icon>\n              <!-- && (item.aprovadoGerente === undefined || item.aprovadoGerente === 'false' -->\n              <btn-icon\n                  *ngIf=\"profile.gerenteMarketing && dados.gerente === 'false' && action === 'update'\"\n                  icon=\"fas fa-times\"\n                  size=\"medium\"\n                  tooltip=\"Reprovado\"\n                  id=\"reprovado\">\n              </btn-icon>\n              <!-- && (item.aprovadoGerente === undefined || item.aprovadoGerente === 'true') -->\n              <btn-icon\n                  *ngIf=\"profile.gerenteMarketing && dados.gerente === 'true' && action === 'update'\"\n                  icon=\"fas fa-check\"\n                  size=\"medium\"\n                  tooltip=\"Aprovado\"\n                  id=\"aprovado\">\n              </btn-icon>\n\n              <!-- Diretor Comercial -->\n              <btn-icon\n                  *ngIf=\"profile.diretorComercial && (dados.diretor != 'false' && dados.diretor != 'true') && action === 'update'\"\n                  icon=\"fas fa-check\"\n                  size=\"medium\"\n                  tooltip=\"Aprovar\"\n                  id=\"aprovado\"\n                  (click)=\"onAprovarDiretor(dados)\">\n              </btn-icon>\n              <btn-icon\n                  *ngIf=\"profile.diretorComercial && (dados.diretor != 'false' && dados.diretor != 'true') && action === 'update'\"\n                  icon=\"fas fa-times\"\n                  size=\"medium\"\n                  tooltip=\"Reprovar\"\n                  id=\"reprovado\"\n                  (click)=\"openModalDiretor(diretor)\">\n              </btn-icon>\n              <!-- && (item.aprovadoDiretor === undefined || item.aprovadoDiretor === 'false') -->\n              <btn-icon\n                  *ngIf=\"profile.diretorComercial && dados.diretor === 'false' \"\n                  icon=\"fas fa-times\"\n                  size=\"medium\"\n                  tooltip=\"Reprovado\"\n                  id=\"reprovado\">\n              </btn-icon>\n              <!-- && (item.aprovadoDiretor === undefined || item.aprovadoDiretor === 'true') -->\n              <btn-icon\n                  *ngIf=\"profile.diretorComercial && dados.diretor === 'true' && action === 'update'\"\n                  icon=\"fas fa-check\"\n                  size=\"medium\"\n                  tooltip=\"Aprovado\"\n                  id=\"aprovado\">\n              </btn-icon>\n\n            </th>\n\n          <!-- mais detalhes -->\n          <!-- <th\n          *ngIf=\"action === 'update'\"\n          class=\"tdAprovedSmall\">\n            <btn-icon\n                icon=\"fas fa-plus\"\n                size=\"small\"\n                tooltip=\"Mais detalhes\"\n                (click)=\"openModalDetails(details); openDetails(dados);\">\n            </btn-icon>\n          </th> -->\n      </tr>\n\n      <tr *ngIf=\"validaBarraVermelha(dados)\">\n        <th\n          class=\"tdReprovedLarge\">\n          <div style=\"text-transform: uppercase; font-weight: bold; font-size: 0.8rem; \">\n              {{ dados.nomeRepresentante }}\n          </div>\n          <div style=\"text-transform: uppercase; font-size: 0.7rem; \">\n            Período: DE {{ dados.dataInicial | date: 'dd/MM/yyyy' }} a {{ dados.dataFinal | date: 'dd/MM/yyyy' }}\n          </div>\n        </th>\n\n        <!-- input gerente de escritório -->\n        <th class=\"tdReprovedSmall\">\n        </th>\n\n       <!-- inputs gerente fiscal -->\n        <th class=\"tdReprovedSmall\">\n          <btn-icon\n              *ngIf=\"(profile.gerenteFiscal)\"\n              icon=\"fas fa-plus-square\"\n              size=\"small\"\n              tooltip=\"Adicionar Valores\"\n              (click)=\"openModalValores(valores, indice)\">\n          </btn-icon>\n        </th>\n\n        <!-- notas -->\n        <th class=\"tdReprovedSmall\">\n          <btn-icon\n                  *ngIf=\"profile.gerenteEscritorio && dados.notasSolicitadas != 'true' && action === 'update' && (dados.codSituacao == 1 && dados.emiteNota == 1)\"\n                  icon=\"fas fa-clipboard\"\n                  size=\"medium\"\n                  tooltip=\"Solicitar Notas\"\n                  id=\"notas\"\n                  (click)=\"onNotasRepresentante(dados)\">\n              </btn-icon>\n\n              <btn-icon\n                  *ngIf=\"profile.gerenteEscritorio && dados.notasSolicitadas === 'true' && action === 'update' && (dados.codSituacao == 2 && dados.emiteNota == 1)\"\n                  icon=\"fas fa-clipboard-check\"\n                  size=\"medium\"\n                  tooltip=\"Notas Solicitadas\"\n                  id=\"notas\">\n              </btn-icon>\n\n              <btn-icon\n                  *ngIf=\"profile.gerenteEscritorio && dados.notasSolicitadas != 'true' && action === 'update' && (dados.codSituacao == 1 && dados.emiteNota == 0)\"\n                  icon=\"fas fa-check\"\n                  size=\"medium\"\n                  tooltip=\"Aprovar\"\n                  id=\"notas\">\n              </btn-icon>\n\n              <btn-icon\n                  *ngIf=\"profile.gerenteEscritorio && dados.notasSolicitadas != 'true' && action === 'update' && (dados.codSituacao == 3 && dados.emiteNota == 0)\"\n                  icon=\"fas fa-check\"\n                  size=\"medium\"\n                  tooltip=\"Aprovado\"\n                  id=\"notas\">\n              </btn-icon>\n        </th>\n\n        <!-- aprovar/reprovar -->\n        <!-- *ngFor=\"let item of dados.info; let i = index;\" -->\n\n        <th class=\"tdReprovedSmall\">\n            <!-- Analista de Marketing -->\n            <btn-icon\n                *ngIf=\"profile.analistaMarketing && (dados.analista != 'false' && dados.analista != 'true') && action === 'update'\"\n                icon=\"fas fa-check\"\n                size=\"medium\"\n                tooltip=\"Aprovar\"\n                id=\"aprovado\"\n                (click)=\"onAprovarAnalista(dados)\">\n            </btn-icon>\n            <btn-icon\n                *ngIf=\"profile.analistaMarketing && (dados.analista != 'false' && dados.analista != 'true') && action === 'update'\"\n                icon=\"fas fa-times\"\n                size=\"medium\"\n                tooltip=\"Reprovar\"\n                id=\"reprovado\"\n                (click)=\"openModalAnalista(analista);\">\n            </btn-icon>\n            <!-- && (item.aprovadoAnalista === undefined || item.aprovadoAnalista === 'false') -->\n            <btn-icon\n                *ngIf=\"profile.analistaMarketing && dados.analista === 'false' && action === 'update'\"\n                icon=\"fas fa-times\"\n                size=\"medium\"\n                tooltip=\"Reprovado\"\n                id=\"reprovado\">\n            </btn-icon>\n            <!-- (item.aprovadoAnalista === undefined || item.aprovadoAnalista === 'true') -->\n            <btn-icon\n                *ngIf=\"profile.analistaMarketing  && dados.analista === 'true' && action === 'update'\"\n                icon=\"fas fa-check\"\n                size=\"medium\"\n                tooltip=\"Aprovado\"\n                id=\"aprovado\">\n            </btn-icon>\n\n            <!-- Gerente de Marketing -->\n            <btn-icon\n                *ngIf=\"profile.gerenteMarketing && (dados.gerente != 'false' && dados.gerente != 'true') && action === 'update'\"\n                icon=\"fas fa-check\"\n                size=\"medium\"\n                tooltip=\"Aprovar\"\n                id=\"aprovado\"\n                (click)=\"onAprovarGerente(dados)\">\n            </btn-icon>\n            <btn-icon\n            *ngIf=\"profile.gerenteMarketing && (dados.gerente != 'false' && dados.gerente != 'true') && action === 'update'\"\n                icon=\"fas fa-times\"\n                size=\"medium\"\n                tooltip=\"Reprovar\"\n                id=\"reprovado\"\n                (click)=\"openModalGerente(gerente)\">\n            </btn-icon>\n            <!-- && (item.aprovadoGerente === undefined || item.aprovadoGerente === 'false' -->\n            <btn-icon\n                *ngIf=\"profile.gerenteMarketing && dados.gerente === 'false' && action === 'update'\"\n                icon=\"fas fa-times\"\n                size=\"medium\"\n                tooltip=\"Reprovado\"\n                id=\"reprovado\">\n            </btn-icon>\n            <!-- && (item.aprovadoGerente === undefined || item.aprovadoGerente === 'true') -->\n            <btn-icon\n                *ngIf=\"profile.gerenteMarketing && dados.gerente === 'true' && action === 'update'\"\n                icon=\"fas fa-check\"\n                size=\"medium\"\n                tooltip=\"Aprovado\"\n                id=\"aprovado\">\n            </btn-icon>\n\n            <!-- Diretor Comercial -->\n            <btn-icon\n                *ngIf=\"profile.diretorComercial && (dados.diretor != 'false' && dados.diretor != 'true') && action === 'update'\"\n                icon=\"fas fa-check\"\n                size=\"medium\"\n                tooltip=\"Aprovar\"\n                id=\"aprovado\"\n                (click)=\"onAprovarDiretor(dados)\">\n            </btn-icon>\n            <btn-icon\n                *ngIf=\"profile.diretorComercial && (dados.diretor != 'false' && dados.diretor != 'true') && action === 'update'\"\n                icon=\"fas fa-times\"\n                size=\"medium\"\n                tooltip=\"Reprovar\"\n                id=\"reprovado\"\n                (click)=\"openModalDiretor(diretor)\">\n            </btn-icon>\n            <!-- && (item.aprovadoDiretor === undefined || item.aprovadoDiretor === 'false') -->\n            <btn-icon\n                *ngIf=\"profile.diretorComercial && dados.diretor === 'false' \"\n                icon=\"fas fa-times\"\n                size=\"medium\"\n                tooltip=\"Reprovado\"\n                id=\"reprovado\">\n            </btn-icon>\n            <!-- && (item.aprovadoDiretor === undefined || item.aprovadoDiretor === 'true') -->\n            <btn-icon\n                *ngIf=\"profile.diretorComercial && dados.diretor === 'true' && action === 'update'\"\n                icon=\"fas fa-check\"\n                size=\"medium\"\n                tooltip=\"Aprovado\"\n                id=\"aprovado\">\n            </btn-icon>\n\n          </th>\n\n        <!-- mais detalhes -->\n        <!-- <th\n        *ngIf=\"action === 'update'\"\n        class=\"tdReprovedSmall\">\n          <btn-icon\n              icon=\"fas fa-plus\"\n              size=\"small\"\n              tooltip=\"Mais detalhes\"\n              (click)=\"openModalDetails(details); openDetails(dados);\">\n          </btn-icon>\n        </th> -->\n    </tr>\n      </ng-template>\n    </custom-table>\n\n    <!-- Anexos -->\n\n    <div *ngIf=\"dados.codSituacao != 1\">\n\n        <div class=\"col\" *ngIf=\"action === 'update'\">\n          <!-- *ngIf=\"dados.anexos.length === 0\" -->\n          <div class=\"row\" *ngIf=\"dados.anexos.length === 0\">\n            <div class=\"col-lg-12 d-flex align-items-start\" >\n              <div class=\"mtc-title mb-0\">Anexos</div>\n            </div>\n            <div class=\"col-2\" *ngIf=\"dados.codSituacao == 2 && profile.gerenteEscritorio\">\n              <label\n\n                for=\"novoAnexo\" class=\"d-flex justify-content-start align-items-center\"\n                style=\"cursor: pointer;\"\n                >\n                <p class=\"btn btn-sm btn-outline-primary m-0\" (click)=\"getIndexAnexos(dados, indice)\">\n                  <i class=\"fas fa-plus\"></i>\n                  <span>Anexar</span>\n                </p>\n              </label>\n              <input\n                id=\"novoAnexo\"\n                type=\"file\"\n                (change)=\"appendFile($event.target.files, indice, dados);\"\n                (click)=\"validAnexos()\"\n                class=\"d-none\">\n            </div>\n\n            <!-- <div class=\"col-1\" *ngIf=\"dados.codSituacao == 2 && profile.gerenteEscritorio\">\n              <btn-icon\n                class=\"ml-2\"\n                icon=\"fas fa-bullseye\"\n                size=\"medium\"\n                tooltip=\"Exibir nome do anexo para envio\"\n                id=\"notas\"\n                (click)=\"showNome(dados, indice)\">\n              </btn-icon>\n          </div> -->\n\n          </div>\n          <div class=\"row\">\n            <div class=\"col\" >\n\n              <custom-table [config]=\"tableConfigAnexos\" >\n                <ng-template #tbody let-tbody>\n                  <tr *ngFor=\"let anexo of dados.anexos; let i = index\">\n                    <td\n                      style=\"width: 85%\">\n                      {{ anexo.nomeAnexo  }}\n                    </td>\n                    <td class=\"text-center\" style=\"width: 5%\">\n                      <btn-icon\n                        *ngIf=\"anexo.nomeAnexo && !anexo.codAnexo && dados.anexoEnviado != 'true'\"\n                        class=\"ml-2\"\n                        icon=\"fas fa-file-export\"\n                        size=\"medium\"\n                        tooltip=\"Enviar Nota para análise\"\n                        id=\"diretor\"\n                        (click)=\"onEnviarNotas(dados, indice)\">\n                      </btn-icon>\n                      <btn-icon\n                        *ngIf=\"anexo.nomeAnexo && !anexo.codAnexo && dados.anexoEnviado === 'true'\"\n                        class=\"ml-2\"\n                        icon=\"fas fa-file-import\"\n                        size=\"medium\"\n                        tooltip=\"Nota enviada\"\n                        id=\"notas\">\n                      </btn-icon>\n                    </td>\n                    <td\n                      class=\"text-center\" style=\"width: 5%\">\n                      <a\n                        *ngIf=\"anexo.urlAnexo && dados.anexos[0].codComissaoRepresentante != dados.codComissaoRepresentante\"\n                        (click)=\"navegarAnexo(anexo)\"\n                        target=\"_blank\"\n                        class=\"btn-icon-sm mx-2 text-black\"\n                        tooltip=\"visualizar\">\n                        <i class=\"far fa-eye\"></i>\n                      </a>\n                    </td>\n                    <td class=\"text-center\" style=\"width: 5%\">\n                      <btn-icon\n                        *ngIf=\"profile.gerenteEscritorio && dados.anexoEnviado != 'true'\"\n                        icon=\"fas fa-trash\"\n                        size=\"small\"\n                        tooltip=\"Excluir\"\n                        (click)=\"onDeleteAnexo(dados.anexos.codAnexo, i, dados)\">\n                      </btn-icon>\n                    </td>\n                    <td\n                      *ngIf=\"dados.anexoEnviado === 'true'\"\n                      class=\"text-center\"\n                      style=\"width: 5%\">\n                    </td>\n                  </tr>\n                </ng-template>\n              </custom-table>\n\n            </div>\n          </div>\n          <!-- <div class=\"row\" *ngIf=\"showAnexos && anexo.anexos.length > 0\">\n            <div class=\"col\">\n              <message\n                icon=\"fas fa-exchange-alt\"\n                text=\"Nenhum documento encontrado\">\n              </message>\n            </div>\n          </div> -->\n        </div>\n    </div>\n\n\n\n    <form [formGroup]=\"formInputs\" autocomplete=\"off\">\n    <div class=\"row\">\n    <div class=\"col\" >\n\n\n      <custom-table [config]=\"tableConfig\" >\n\n        <ng-template #thead let-thead >\n\n          <tr>\n            <th scope=\"col-1\"></th>\n\n            <th scope=\"col-4\">Unidade</th>\n\n            <th scope=\"col-1\">Valor Base <i class=\"far fa-question-circle\" [tooltip]=\"tooltipTemplateValor\"></i></th>\n\n            <th scope=\"col-1\">Descontos</th>\n\n            <th scope=\"col-1\">Ajuda de Custo</th>\n\n            <th scope=\"col-1\">Percentual</th>\n\n            <th scope=\"col-1\"></th>\n\n            <th scope=\"col-1\">Valor Comissão</th>\n\n            <th scope=\"col-1\"></th>\n\n          </tr>\n          <!-- Tooltip -->\n          <ng-template #tooltipTemplateValor>\n            <p class=\"mt-3 mb-0\"><b></b></p>\n            <p class=\"mt-3 mb-0\"><b></b></p>\n            <p class=\"mt-3 mb-0\"><b>Valor NF + Valor ICMS = Valor Base</b></p>\n            <p class=\"mt-3 mb-0\"><b></b></p>\n            <p class=\"mt-3 mb-0\"><b></b></p>\n          </ng-template>\n\n        </ng-template>\n\n        <!-- Dados Unidade, Valores -->\n\n        <ng-template #tbody let-tbody>\n\n          <tr *ngFor=\"let item of dados.info; let i = index;\">\n            <td\n            scope=\"col-1\"\n            class=\"hover\"\n            >\n            </td>\n\n            <!-- UNIDADE -->\n            <td *ngIf=\"validaUnidade1(dados, item)\"\n              scope=\"col-4\"\n              class=\"hover\">\n              {{ item.unidade | uppercase }}\n            </td>\n\n            <td\n            *ngIf=\"validaUnidadeRo(dados, item)\"\n              scope=\"col-4\"\n              class=\"hover\">\n              {{ item.unidade }} - {{ item.nrRo }}\n            </td>\n\n            <td\n            *ngIf=\"validaUnidade2(dados, item)\"\n              scope=\"col-4\"\n              class=\"hover\">\n              {{ item.unidade | uppercase }}\n            </td>\n\n            <td\n              *ngIf=\"validaUnidadeInput(dados, item)\"\n              scope=\"col-4\"\n              class=\"hover\"\n              >\n              <input\n              value=\"{{ item.unidade }}\"\n              class=\"form-control col-6\"\n              id=\"unidade\"\n              type=\"text\"\n              formControlName=\"unidade\"\n              [readonly]=\"visualizar\"\n              [ngClass]=\"onFieldErrorInputs('unidade') + ' ' + onFieldRequiredInputs('unidade')\">\n            </td>\n\n            <!-- VALOR BASE -->\n            <td *ngIf=\"validaValorBase(dados, item)\"\n              scope=\"col-4\"\n              class=\"hover\">\n              {{ item.valorBase | currency:'BRL':'symbol':'1.2-2' }}\n            </td>\n\n            <td *ngIf=\"validaValorBaseVazio(dados, item)\"\n              scope=\"col-4\"\n              class=\"hover\">\n            </td>\n\n            <td\n            *ngIf=\"validaValorBaseInput(dados, item)\"\n              scope=\"col-1\"\n              class=\"hover\">\n              <input\n                value=\"{{ item.valorBase | number:'1.2-2' }}\"\n                class=\"form-control col-6\"\n                id=\"valorBaseInput\"\n                type=\"text\"\n                formControlName=\"valorBaseInput\"\n                currencyMask [options]=\"{ align: 'left', prefix: '', thousands: '.', decimal: ',', precision: 2 }\"\n                [readonly]=\"visualizar\"\n                [ngClass]=\"onFieldErrorInputs('valorBaseInput') + ' ' + onFieldRequiredInputs('valorBaseInput')\">\n            </td>\n\n            <td\n            *ngIf=\"validaValorBaseInputVazio(dados, item)\"\n              scope=\"col-1\"\n              class=\"hover\">\n              <input\n                class=\"form-control col-6\"\n                id=\"valorBaseInput\"\n                type=\"text\"\n                formControlName=\"valorBaseInput\"\n                currencyMask [options]=\"{ align: 'left', prefix: '', thousands: '.', decimal: ',', precision: 2 }\"\n                [readonly]=\"visualizar\"\n                [ngClass]=\"onFieldErrorInputs('valorBaseInput') + ' ' + onFieldRequiredInputs('valorBaseInput')\">\n            </td>\n\n            <td\n            *ngIf=\"validaValorBaseInputDba(dados, item)\"\n              scope=\"col-1\"\n              class=\"hover\">\n              <input\n                class=\"form-control col-6\"\n                id=\"valorBaseDBA\"\n                type=\"text\"\n                formControlName=\"valorBaseDBA\"\n                currencyMask [options]=\"{ align: 'left', prefix: 'R$ ', thousands: '.', decimal: ',', precision: 2 }\"\n                [readonly]=\"visualizar\"\n                [ngClass]=\"onFieldErrorInputs('valorBaseDBA') + ' ' + onFieldRequiredInputs('valorBaseDBA')\">\n            </td>\n\n            <td\n            *ngIf=\"validaValorBaseInputAco(dados, item)\"\n              scope=\"col-1\"\n              class=\"hover\">\n              <input\n                class=\"form-control col-6\"\n                id=\"valorBaseACO\"\n                type=\"text\"\n                formControlName=\"valorBaseACO\"\n                currencyMask [options]=\"{ align: 'left', prefix: 'R$ ', thousands: '.', decimal: ',', precision: 2 }\"\n                [readonly]=\"visualizar\"\n                [ngClass]=\"onFieldErrorInputs('valorBaseACO') + ' ' + onFieldRequiredInputs('valorBaseACO')\">\n            </td>\n\n            <!-- DESCONTO -->\n            <td *ngIf=\"validaDesconto(dados, item)\"\n              scope=\"col-4\"\n              class=\"hover\">\n              {{ item.valorDesconto | number:'1.2-2' }}\n            </td>\n\n            <td *ngIf=\"validaDescontoVazio(dados, item)\"\n              scope=\"col-4\"\n              class=\"hover\">\n            </td>\n\n            <td\n              *ngIf=\"validaDescontoInput(dados, item)\"\n              scope=\"col-1\"\n              class=\"hover\">\n            <input\n              value=\"{{ item.valorDesconto | number:'1.2-2' }}\"\n              class=\"form-control col-6\"\n              id=\"descontos\"\n              type=\"text\"\n              formControlName=\"descontos\"\n              currencyMask [options]=\"{ align: 'left', prefix: '', thousands: '.', decimal: ',', precision: 2 }\"\n              [readonly]=\"visualizar || item.valorBase > 0\">\n            </td>\n\n            <!-- VALOR AJUDA CUSTO -->\n            <td *ngIf=\"validaAjudaCusto(dados, item)\"\n            scope=\"col-4\"\n            class=\"hover\">\n            {{ item.valorAjudaCusto | number:'1.2-2' }}\n            </td>\n\n            <td\n            *ngIf=\"validaAjudaCustoVazio(dados, item)\"\n              scope=\"col-4\"\n              class=\"hover\">\n            </td>\n\n            <!-- <td\n              *ngIf=\"validaAjudaCustoInput(dados, item)\"\n              scope=\"col-1\"\n              class=\"hover\"\n              id=\"inputs\">\n                <input\n                  class=\"form-control col-6\"\n                  value=\"{{ item.valorAjudaCusto | number:'1.2-2' }}\"\n                  id=\"valorAjudaCusto\"\n                  type=\"text\"\n                  formControlName=\"valorAjudaCusto\"\n                  currencyMask [options]=\"{ align: 'left', prefix: '', thousands: '.', decimal: ',', precision: 2 }\"\n                  [readonly]=\"visualizar || item.valorBase > 0\">\n            </td> -->\n\n            <!-- PERCENTUAL COMISSAO -->\n            <td *ngIf=\"validaPercentual(dados, item)\"\n              scope=\"col-4\"\n              class=\"hover\">\n              {{ item.percentualComissao | number:'1.2-2' }} %\n            </td>\n\n            <td *ngIf=\"validaPercentualVazio(dados, item)\"\n              scope=\"col-4\"\n              class=\"hover\">\n            </td>\n\n            <td\n              *ngIf=\"validaPercentualInput(dados, item)\"\n              scope=\"col-1\"\n              class=\"hover\"\n              id=\"inputs\">\n                <input\n                  class=\"form-control col-6\"\n                  value=\"{{ item.percentualComissao }}\"\n                  id=\"percentual\"\n                  type=\"text\"\n                  formControlName=\"percentual\"\n                  currencyMask [options]=\"{ align: 'left', thousands: '.', decimal: ',', precision: 1, prefix: '', suffix: '%' }\"\n                  [readonly]=\"visualizar\">\n            </td>\n\n            <td\n              *ngIf=\"validaPercentualInputVazio(dados, item)\"\n              scope=\"col-1\"\n              class=\"hover\"\n              id=\"inputs\">\n                <input\n                  class=\"form-control col-6\"\n                  id=\"percentual\"\n                  type=\"text\"\n                  formControlName=\"percentual\"\n                  currencyMask [options]=\"{ align: 'left', thousands: '.', decimal: ',', precision: 1, prefix: '', suffix: '%' }\"\n                  [readonly]=\"visualizar\"\n                  [ngClass]=\"onFieldErrorInputs('percentual') + ' ' + onFieldRequiredInputs('percentual')\">\n            </td>\n\n            <!-- BUTTON CALCULAR -->\n            <td\n              scope=\"col-1\"\n              class=\"hover\"\n              [hidden]=\"visualizar\"\n              *ngIf=\"validaButtonCalcular(dados, item)\"\n              >\n                <btn-icon\n                  icon=\"fas fa-calculator\"\n                  size=\"small\"\n                  tooltip=\"Calcular\"\n                  (click)=\"getConta(indice, dados, i, item);\">\n                </btn-icon>\n            </td>\n\n            <td *ngIf=\"validaButtonCalcularVazio(dados, item)\"\n              scope=\"col-1\"\n              class=\"hover\">\n            </td>\n\n            <td\n              scope=\"col-1\"\n              class=\"hover\"\n              [hidden]=\"!visualizar\">\n            </td>\n\n            <td\n              *ngIf= \"item.valorComissao == 0\"\n              scope=\"col-1\"\n              class=\"hover\">\n              {{ item.valorComissao | currency:'BRL':'symbol':'1.2-2' }}\n            </td>\n\n            <td\n              *ngIf= \"item.valorComissao > 0\"\n              style=\"color:#0a0dad;\"\n              scope=\"col-1\"\n              class=\"hover\">\n              {{ item.valorComissao | currency:'BRL':'symbol':'1.2-2' }}\n            </td>\n\n            <td\n              *ngIf= \"item.valorComissao < 0\"\n              style=\"color:#830808;\"\n              scope=\"col-1\"\n              class=\"hover\">\n              {{ item.valorComissao | currency:'BRL':'symbol':'1.2-2' }}\n            </td>\n\n            <!-- BUTTON DELETAR -->\n            <td\n              scope=\"col-1\"\n              class=\"hover\">\n                <btn-icon\n                  *ngIf=\"validaButtonDelete(dados, item)\"\n                  icon=\"fas fa-trash\"\n                  size=\"small\"\n                  tooltip=\"Excluir\"\n                  (click)=\"onDelete(dados, indice, item, i)\">\n                </btn-icon>\n            </td>\n\n          </tr>\n\n          <tr>\n            <td\n              scope=\"col-1\"\n              class=\"hover totalColor ml-5\">\n            </td>\n            <td\n              scope=\"col-4\"\n              class=\"hover totalColorBoldUpper\">\n              Total\n            </td>\n            <td\n              scope=\"col-2\"\n              class=\"hover totalColor\">\n            </td>\n            <td\n              scope=\"col-1\"\n              class=\"hover totalColor\">\n            </td>\n            <td\n              scope=\"col-1\"\n              class=\"hover totalColor\">\n            </td>\n            <td\n              scope=\"col-1\"\n              class=\"hover totalColor\">\n            </td>\n            <td\n              scope=\"col-1\"\n              class=\"hover totalColor\">\n            </td>\n            <td\n              scope=\"col-1\"\n              class=\"hover totalColorBold\">\n              {{ dados.valorTotalComissao | currency:'BRL':'symbol':'1.2-2' }}\n            </td>\n            <td\n              scope=\"col-1\"\n              class=\"hover totalColorBold\">\n            </td>\n          </tr>\n\n          <hr *ngIf=\"validaDadosSalvo(dados) && !visualizar\">\n\n          <tr *ngIf=\"validaDadosSalvo(dados) && !visualizar\">\n            <td\n              scope=\"col-1\"\n              class=\"hover\">\n            </td>\n            <td\n              scope=\"col-4\"\n              class=\"hover\">\n              <input\n                class=\"form-control col-12\"\n                id=\"unidadeInput\"\n                type=\"text\"\n                formControlName=\"unidadeInput\"\n                [readonly]=\"visualizar\"\n                [ngClass]=\"onFieldErrorInputs('unidadeInput') + ' ' + onFieldRequiredInputs('unidadeInput')\">\n            </td>\n            <td\n              scope=\"col-1\"\n              class=\"hover\">\n            </td>\n\n            <td\n              scope=\"col-1\"\n              class=\"hover\">\n              <input\n                class=\"form-control col-6\"\n                id=\"descontosInput\"\n                type=\"text\"\n                formControlName=\"descontosInput\"\n                currencyMask [options]=\"{ align: 'left', prefix: '', thousands: '.', decimal: ',', precision: 2 }\"\n                [readonly]=\"visualizar\">\n            </td>\n            <td\n              scope=\"col-1\"\n              class=\"hover\"\n              id=\"inputs\">\n              <input\n                class=\"form-control col-6\"\n                id=\"valorAjudaCustoInput\"\n                type=\"text\"\n                formControlName=\"valorAjudaCustoInput\"\n                currencyMask [options]=\"{ align: 'left', prefix: '', thousands: '.', decimal: ',', precision: 2 }\"\n                [readonly]=\"visualizar\">\n            </td>\n            <td\n              scope=\"col-1\"\n              class=\"hover\">\n            </td>\n\n            <td\n              scope=\"col-1\"\n              class=\"hover\"\n              [hidden]=\"visualizar\">\n                <btn-icon\n                  icon=\"fas fa-calculator\"\n                  size=\"small\"\n                  tooltip=\"Calcular\"\n                  (click)=\"getConta(indice, dados, i, dados.info);\">\n                </btn-icon>\n            </td>\n\n            <td\n              scope=\"col-1\"\n              class=\"hover\"\n              [hidden]=\"!visualizar\">\n            </td>\n\n            <td\n              scope=\"col-1\"\n              class=\"hover\"></td>\n\n            <td\n              scope=\"col-1\"\n              class=\"hover\"></td>\n          </tr>\n\n        </ng-template>\n      </custom-table>\n\n      <div\n      *ngIf=\"!visualizar && dados.salvo === 'true'\"\n      class=\"float-right mt-2 mr-2 mb-2\">\n        <button type=\"button\" class=\"btn btn-success\" >Salvo</button>\n      </div>\n\n      <div\n      *ngIf=\"validaDadosSalvo(dados)\"\n      class=\"float-right mt-2 mr-2 mb-2\"\n      [hidden]=\"visualizar\">\n        <button  type=\"button\" class=\"btn btn-light\" (click)=\"onSubmit(dados)\" >Salvar</button>\n      </div>\n      <br>\n\n    </div>\n  </div>\n\n</form>\n\n  <!-- Modal do Analista de Marketing -->\n  <ng-template #analista>\n    <div>\n      <div class=\"modal-body\">\n\n          <div class=\"mtc-title\">Motivo da Reprovação do Analista de Marketing</div>\n            <button type=\"button\" class=\"close pull-right\" (click)=\"closeModal(analista)\" aria-label=\"Close\"></button>\n              <form [formGroup]=\"formReprovar\" autocomplete=\"off\">\n                <div class=\"form-group\">\n                  <textarea class=\"form-control\" id=\"text-area\" rows=\"3\" formControlName=\"descMotivo\"></textarea>\n                </div>\n              </form>\n\n          <div class=\"row mt-2\">\n            <div class=\"col\" style=\"text-align: center;\">\n\n              <button\n                type=\"button\"\n                class=\"btn btn-success\"\n                (click)=\"modalRef.hide(); onReprovarAnalista(dados); \"\n                >\n                Enviar\n              </button>\n\n            </div>\n          </div>\n\n      </div>\n    </div>\n  </ng-template>\n\n   <!-- Modal do Gerente de Marketing -->\n   <ng-template #gerente>\n\n    <div>\n      <div class=\"modal-body\">\n\n          <div class=\"mtc-title\">Motivo da Reprovação do Gerente de Marketing</div>\n            <button type=\"button\" class=\"close pull-right\" (click)=\"closeModal(gerente)\" aria-label=\"Close\"></button>\n              <form [formGroup]=\"formReprovar\" autocomplete=\"off\">\n                <div class=\"form-group\">\n                  <textarea class=\"form-control\" id=\"text-area\" rows=\"3\" formControlName=\"descMotivo\"></textarea>\n                </div>\n              </form>\n\n          <div class=\"row mt-2\">\n            <div class=\"col\" style=\"text-align: center;\">\n\n              <button\n                type=\"button\"\n                class=\"btn btn-success\"\n                (click)=\"modalRef.hide(); onReprovarGerente(dados); \"\n                >\n                Enviar\n              </button>\n\n          </div>\n        </div>\n\n    </div>\n  </div>\n    </ng-template>\n\n    <!-- Modal do Diretor Comercial -->\n  <ng-template #diretor>\n      <div class=\"modal-body\">\n\n        <div class=\"mtc-title\">Motivo da Reprovação do Diretor Comercial</div>\n          <button type=\"button\" class=\"close pull-right\" (click)=\"closeModal(diretor)\" aria-label=\"Close\"></button>\n            <form [formGroup]=\"formReprovar\" autocomplete=\"off\">\n              <div class=\"form-group\">\n                <textarea class=\"form-control\" id=\"text-area\" rows=\"3\" formControlName=\"descMotivo\"></textarea>\n              </div>\n            </form>\n\n        <div class=\"row mt-2\">\n          <div class=\"col\" style=\"text-align: center;\">\n\n            <button\n              type=\"button\"\n              class=\"btn btn-success\"\n              (click)=\"modalRef.hide(); onReprovarDiretor(dados); \"\n              >\n              Enviar\n            </button>\n\n          </div>\n        </div>\n\n      </div>\n\n    </ng-template>\n\n    <!-- Modal de Adição de Valores das notas e comissão -->\n  <ng-template #valores>\n\n    <div>\n        <div class=\"modal-header\">\n          <div class=\"mtc-title text-center pull-left\">Adicionar Valores de Nota e Comissão</div>\n          <button type=\"button\" class=\"close pull-right\" (click)=\"closeModal(valores);\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <br>\n        <div class=\"modal-body\">\n          <form [formGroup]=\"formValores\" autocomplete=\"off\">\n\n              <div class=\"row d-flex justify-content-center\">\n\n                <div class=\"form-group col-lg-2\"></div>\n\n                <div class=\"form-group col-lg-4\">\n                  <label for=\"valorLiquido\">Valor Líquido</label>\n                  <input\n                    class=\"form-control text-center\"\n                    id=\"valorLiquido\"\n                    type=\"text\"\n                    formControlName=\"valorLiquido\"\n                    currencyMask [options]=\"{ align: 'left', prefix: '', thousands: '.', decimal: ',', precision: 2 }\">\n                </div>\n\n                <div class=\"form-group col-lg-4\">\n                  <label for=\"valorImposto\">Valor Imposto</label>\n                  <input\n                    class=\"form-control text-center\"\n                    id=\"valorImposto\"\n                    type=\"text\"\n                    formControlName=\"valorImposto\"\n                    currencyMask [options]=\"{ align: 'left', prefix: '', thousands: '.', decimal: ',', precision: 2 }\">\n                </div>\n\n                <div class=\"form-group col-lg-2\"></div>\n\n              </div>\n          </form>\n\n\n          <div class=\"row mt-2\">\n            <div class=\"col\" style=\"text-align: center;\">\n\n            <button\n              type=\"button\"\n              class=\"btn btn-primary\"\n              (click)=\"modalRef.hide(); onSubmitValores(dados);\"\n              >\n              Enviar\n            </button>\n\n          </div>\n        </div>\n\n    </div>\n  </div>\n  </ng-template>\n\n  </div>\n</div>\n<br>\n      <div class=\"d-flex justify-content-center mt-3\" *ngIf=\"totalItems > itemsPerPage && !loaderNavbar\">\n        <pagination\n          [maxSize]=\"maxSize\"\n          [(totalItems)]=\"totalItems\"\n          (pageChanged)=\"onPageChanged($event)\"\n          [(itemsPerPage)]=\"itemsPerPage\"\n          [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPage\"\n          previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\"\n          lastText=\"&raquo;\">\n        </pagination>\n      </div>\n\n  <!-- Modal Detalhes dos Registros -->\n  <ng-template #details>\n\n    <div class=\"mt-4 mr-4 mb-4 ml-4 details detailsConfig\" style=\"text-transform: uppercase;\" *ngIf=\"dadosDetalhes.length > 0\">\n\n      <div class=\"modal-header\">\n        <div class=\"mtc-title text-center\">Detalhes do Representante</div>\n        <button type=\"button\" class=\"close pull-right\" (click)=\"closeModal(details);\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n\n    <!-- <div class=\"mtc-title text-center\">Detalhes do Representante</div>\n    <button type=\"button\" class=\"close pull-right\" (click)=\"closeModal(details)\" aria-label=\"Close\"></button> -->\n    <custom-table [config]=\"tableConfig\">\n\n      <ng-template #tbody let-tbody *ngFor=\"let item of dadosDetalhes; let i = index;\">\n        <tr>\n          <td class=\"tdHead\">\n            Nome do Representante\n          </td>\n          <td class=\"text-center tdBody\" >\n            {{ item.nomeRepresentante | uppercase }}\n          </td>\n        </tr>\n\n        <tr>\n          <td class=\"tdHead\">\n            Tipo de comissionamento do Representante\n          </td>\n          <td class=\"text-center tdBody\" >\n            {{ item.tipoComissionamento | uppercase }}\n          </td>\n        </tr>\n\n        <tr>\n          <td class=\"tdHead\">\n            Número da Porcentagem\n          </td>\n          <td class=\"text-center tdBody\" >\n            {{ item.percentualPagamento | percent:'1.2-5' }}\n          </td>\n        </tr>\n\n        <tr>\n          <td class=\"tdHead\">\n            Período selecionado\n          </td>\n          <td class=\"text-center tdBody\" >\n            {{ item.nomeGestao | uppercase }}\n          </td>\n        </tr>\n\n        <tr>\n          <td class=\"tdHead\">\n            Número da RO\n          </td>\n          <td class=\"text-center tdBody\" >\n            {{ item.nrRo }}\n          </td>\n        </tr>\n\n        <tr>\n          <td class=\"tdHead\">\n            Descontos\n          </td>\n          <td class=\"text-center tdBody\" >\n            {{ item.valorDesconto | currency:'BRL':'symbol':'1.2-2' }}\n          </td>\n        </tr>\n\n        <tr>\n          <td class=\"tdHead\">\n            Ajuda de custos\n          </td>\n          <td class=\"text-center tdBody\" >\n            {{ item.valorAjudaCusto | currency:'BRL':'symbol':'1.2-2' }}\n          </td>\n        </tr>\n\n        <tr>\n          <td class=\"tdHead\">\n            Valor final de comissão a ser pago\n          </td>\n          <td class=\"text-center tdBody\" >\n           {{ item.valorComissao | currency:'BRL':'symbol':'1.2-2' }}\n          </td>\n        </tr>\n\n      </ng-template>\n\n    </custom-table>\n  </div>\n  </ng-template>\n\n   <!-- Modal Detalhes das Unidades -->\n   <ng-template #detailsRos>\n\n    <div class=\"mt-5 mb-5\" *ngIf=\"dadosEmptyUnidades\">\n      <empty-result message=\"Nenhuma informação encontrada\" ></empty-result>\n    </div>\n\n    <div class=\"mt-4 mr-4 mb-4 ml-4 details\"\n    *ngIf=\"dadosDetalhesUnidades.length > 0 && !dadosEmptyUnidades\"\n    style=\"text-transform: uppercase;\">\n\n\n    <div class=\"mtc-title text-center\">Detalhes da RO</div>\n\n    <button type=\"button\" class=\"close pull-right\" (click)=\"closeModal(detailsUnidades)\" aria-label=\"Close\"></button>\n    <custom-table [config]=\"tableConfig\">\n      <ng-template #thead let-thead>\n        <tr >\n\n          <th>Cód - Cliente</th>\n\n          <th>Vendedor</th>\n\n          <th>Empresa</th>\n\n          <th>Nr. Ro</th>\n\n          <th>Valor Ro</th>\n\n          <th>Nr. Nota Fiscal</th>\n\n          <th>Tipo Pagamento</th>\n\n          <th>Data Ro</th>\n\n          <th>Data Inicial Período</th>\n\n          <th>Data Final Período</th>\n\n        </tr>\n      </ng-template>\n      <ng-template #tbody let-tbody>\n        <tr *ngFor=\"let item of dadosDetalhesUnidades; let i = index;\">\n          <td class=\"hover\">\n            {{ item.codNomeCliente }}\n          </td>\n          <td class=\"hover\">\n            {{ item.nomeVendedor }}\n          </td>\n          <td class=\"hover\">\n            {{ item.nomeEmpresa }}\n          </td>\n          <td class=\"hover\">\n            {{ item.nrRo }}\n          </td>\n          <td class=\"hover\">\n            {{ item.valorRo | currency:'BRL':'symbol':'1.2-2' }}\n          </td>\n          <td class=\"hover\">\n            {{ item.nrNotaFiscal }}\n          </td>\n          <td class=\"hover\">\n            {{ item.nomeTipoPagamento }}\n          </td>\n          <td class=\"hover\">\n            {{ item.dataRo | date: 'dd/MM/yyyy' }}\n          </td>\n          <td class=\"hover\">\n            {{ item.dataInicialPeriodo | date: 'dd/MM/yyyy' }}\n          </td>\n          <td class=\"hover\">\n            {{ item.dataFinalPeriodo  | date: 'dd/MM/yyyy' }}\n          </td>\n        </tr>\n      </ng-template>\n    </custom-table>\n  </div>\n  </ng-template>\n\n     <!-- Modal Detalhes das Ros -->\n     <ng-template #detailsUnidades>\n\n      <div class=\"mt-5 mb-5\" *ngIf=\"dadosEmptyUnidades\">\n        <empty-result message=\"Nenhuma informação encontrada\" ></empty-result>\n      </div>\n\n      <div class=\"mt-4 mr-4 mb-4 ml-4 details\"\n      *ngIf=\"dadosDetalhesUnidades.length > 0 && !dadosEmptyUnidades\"\n      style=\"text-transform: uppercase;\">\n\n\n      <div class=\"mtc-title text-center\">Detalhes da Unidade</div>\n\n      <button type=\"button\" class=\"close pull-right\" (click)=\"closeModal(detailsRos)\" aria-label=\"Close\"></button>\n      <custom-table [config]=\"tableConfig\">\n        <ng-template #thead let-thead>\n          <tr >\n\n            <th>Cód - Cliente</th>\n\n            <th>Vendedor</th>\n\n            <th>Empresa</th>\n\n            <th>Unidade</th>\n\n            <th>Valor Nota Fiscal</th>\n\n            <th>Nr. Nota Fiscal</th>\n\n            <th>Valor Título</th>\n\n            <th>Nr. Título</th>\n\n            <th>Tipo Pagamento</th>\n\n            <th>Data Baixa</th>\n\n            <th>Data Nota Fiscal</th>\n\n            <th>Data Inicial Período</th>\n\n            <th>Data Final Período</th>\n\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr *ngFor=\"let item of dadosDetalhesUnidades; let i = index;\">\n            <td class=\"hover\">\n              {{ item.codNomeCliente }}\n            </td>\n            <td class=\"hover\">\n              {{ item.nomeVendedor }}\n            </td>\n            <td class=\"hover\">\n              {{ item.nomeEmpresa }}\n            </td>\n            <td class=\"hover\">\n              {{ item.unidade }}\n            </td>\n            <td class=\"hover\">\n              {{ item.valorNotaFiscal | currency:'BRL':'symbol':'1.2-2' }}\n            </td>\n            <td class=\"hover\">\n              {{ item.nrNotaFiscal }}\n            </td>\n            <td class=\"hover\">\n              {{ item.valorTitulo | currency:'BRL':'symbol':'1.2-2' }}\n            </td>\n            <td class=\"hover\">\n              {{ item.nrTitulo }}\n            </td>\n            <td class=\"hover\">\n              {{ item.nomeTipoPagamento }}\n            </td>\n            <td class=\"hover\">\n              {{ item.dataBaixaTitulo | date: 'dd/MM/yyyy' }}\n            </td>\n            <td class=\"hover\">\n              {{ item.dataNotaFiscal | date: 'dd/MM/yyyy' }}\n            </td>\n            <td class=\"hover\">\n              {{ item.dataInicialPeriodo | date: 'dd/MM/yyyy' }}\n            </td>\n            <td class=\"hover\">\n              {{ item.dataFinalPeriodo  | date: 'dd/MM/yyyy' }}\n            </td>\n          </tr>\n        </ng-template>\n      </custom-table>\n    </div>\n    </ng-template>\n\n     <!-- Modal Historico Exclusão -->\n     <ng-template #historico>\n\n      <div class=\"mt-5 mb-5\" *ngIf=\"dadosEmptyHistorico\">\n        <empty-result message=\"Nenhuma informação encontrada\" ></empty-result>\n      </div>\n\n      <div class=\"mt-4 mr-4 mb-4 ml-4 details\"\n      *ngIf=\"dadosHistorico.length > 0 && !dadosEmptyHistorico\"\n      style=\"text-transform: uppercase;\">\n\n      <div class=\"modal-header\">\n        <div class=\"mtc-title text-center\">Histórico de Aprovações</div>\n        <button type=\"button\" class=\"close pull-right\" (click)=\"closeModal(details);\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n\n\n      <custom-table [config]=\"tableConfig\" class=\"tableConfig\">\n        <ng-template #thead let-thead>\n          <tr>\n\n            <th class=\"theme\">Usuário</th>\n            <!-- style=\"width: 15%;\" -->\n            <th >Data Cadastro</th>\n            <!-- style=\"width: 8%;\" -->\n\n            <th >De</th>\n            <!-- style=\"width: 20%;\" -->\n\n            <th >Para</th>\n            <!-- style=\"width: 20%;\" -->\n\n            <th >Motivo</th>\n            <!-- style=\"width: 37%;\" -->\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr *ngFor=\"let item of dadosHistorico; let i = index;\">\n            <td class=\"hover\">\n              {{ item.nomeUsuario }}\n            </td>\n            <td class=\"hover\">\n              {{ item.dataCadastro | date: 'dd/MM/yyyy' }}\n            </td>\n            <td class=\"hover\" *ngIf=\"item.de == '' \">\n              CRIAÇÃO COMISSÃO ANALISTA DE MARKETING\n            </td>\n            <td class=\"hover\" *ngIf=\"item.de != '' \">\n              {{ item.de }}\n            </td>\n            <td class=\"hover\">\n              {{ item.para }}\n            </td>\n            <td class=\"hover\">\n              {{ item.motivo }}\n            </td>\n          </tr>\n        </ng-template>\n      </custom-table>\n    </div>\n  </ng-template>\n</app-body>\n\n";
      /***/
    },

    /***/
    "bujq":
    /*!*************************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/comissoes/representantes/gestao-comissionamentos/formulario/formulario.component.scss ***!
      \*************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function bujq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".representante {\n  border: 1px solid #B6B3B3;\n}\n\n.representante:hover {\n  background-color: #F4F7F6;\n}\n\n#aprovado {\n  color: #008000;\n}\n\n.tableConfig thead, .tableConfig tr, .tableConfig td {\n  border: none;\n}\n\n.tableConfig thead, .tableConfig tbody {\n  border: 1px solid #0456A3;\n  border-radius: 7px;\n}\n\n.tableConfig th {\n  background-color: #deeafd;\n}\n\n.tdHead {\n  background-color: #deeafd;\n  border: 1px solid #fff;\n  font-size: 0.7rem;\n  font-weight: bold;\n}\n\n.tdBody {\n  border: 1px solid #fff;\n  font-size: 0.7rem;\n}\n\n.borderCard {\n  border: solid 1px #deeafd;\n}\n\n.tdPrimaryLarge {\n  width: 45%;\n  background: #deeafd;\n}\n\n.tdPrimarySmall {\n  width: 5%;\n  background: #deeafd;\n}\n\n.tdAprovedLarge {\n  width: 45%;\n  background: #71ee8f;\n}\n\n.tdAprovedSmall {\n  width: 5%;\n  background: #71ee8f;\n}\n\n.tdReprovedLarge {\n  width: 45%;\n  background: #f18282;\n}\n\n.tdReprovedSmall {\n  width: 5%;\n  background: #f18282;\n}\n\n.totalColor {\n  background: #FCB4B4;\n}\n\n.totalColorBold {\n  font-weight: bold;\n  background: #FCB4B4;\n}\n\n.totalColorBoldUpper {\n  text-transform: uppercase;\n  font-weight: bold;\n  background: #FCB4B4;\n}\n\n.primaryColor {\n  background: #3E0752;\n  color: #fff;\n}\n\n.secondaryColor {\n  background: #CD7940;\n}\n\n.radiusLeft {\n  border-top-left-radius: 10px;\n}\n\n.radiusRight {\n  border-top-right-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21lcmNpYWwvY29taXNzb2VzL3JlcHJlc2VudGFudGVzL2dlc3Rhby1jb21pc3Npb25hbWVudG9zL2Zvcm11bGFyaW8vZm9ybXVsYXJpby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtBQUNGOztBQVlBO0VBQ0UsY0FBQTtBQVRGOztBQWNFO0VBQ0UsWUFBQTtBQVhKOztBQWNFO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtBQVpKOztBQWVFO0VBQ0UseUJBQUE7QUFiSjs7QUFrQkU7RUFDRSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQWZKOztBQWtCRTtFQUNFLHNCQUFBO0VBQ0EsaUJBQUE7QUFmSjs7QUFrQkU7RUFDRSx5QkFBQTtBQWZKOztBQWtCRTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtBQWZKOztBQWtCRTtFQUNFLFNBQUE7RUFDQSxtQkFBQTtBQWZKOztBQWtCRTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtBQWZKOztBQWtCRTtFQUNFLFNBQUE7RUFDQSxtQkFBQTtBQWZKOztBQWtCRTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtBQWZKOztBQWtCRTtFQUNFLFNBQUE7RUFDQSxtQkFBQTtBQWZKOztBQWtCRTtFQUNFLG1CQUFBO0FBZko7O0FBa0JFO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQWZKOztBQWtCRTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQWZKOztBQWtCRTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBQWZKOztBQWtCRTtFQUNFLG1CQUFBO0FBZko7O0FBa0JFO0VBQ0UsNEJBQUE7QUFmSjs7QUFrQkU7RUFDRSw2QkFBQTtBQWZKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9jb21lcmNpYWwvY29taXNzb2VzL3JlcHJlc2VudGFudGVzL2dlc3Rhby1jb21pc3Npb25hbWVudG9zL2Zvcm11bGFyaW8vZm9ybXVsYXJpby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXByZXNlbnRhbnRle1xuICBib3JkZXI6IDFweCBzb2xpZCAjQjZCM0IzO1xufVxuXG4ucmVwcmVzZW50YW50ZTpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjdGNjtcbn1cblxuLy8gLnRvdGFse1xuLy8gICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTYzLCA0LCA0KTtcbi8vIH1cblxuLy8gLmRldGFpbHMge1xuLy8gICB0aGVhZCwgdHIsIHRkIHtcbi8vICAgICBib3JkZXI6IDFweCBzb2xpZCAjQjZCM0IzO1xuLy8gICB9XG4vLyB9XG5cbiNhcHJvdmFkbyB7XG4gIGNvbG9yOiAjMDA4MDAwO1xufVxuXG4udGFibGVDb25maWd7XG5cbiAgdGhlYWQsIHRyLCB0ZCB7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG5cbiAgdGhlYWQsIHRib2R5IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDQ1NkEzO1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgfVxuXG4gIHRoIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNkZWVhZmQ7XG4gIH1cblxufVxuXG4gIC50ZEhlYWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6I2RlZWFmZDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbiAgLnRkQm9keSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgfVxuXG4gIC5ib3JkZXJDYXJkIHtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjZGVlYWZkO1xuICB9XG5cbiAgLnRkUHJpbWFyeUxhcmdlIHtcbiAgICB3aWR0aDogNDUlO1xuICAgIGJhY2tncm91bmQ6I2RlZWFmZDtcbiAgfVxuXG4gIC50ZFByaW1hcnlTbWFsbCB7XG4gICAgd2lkdGg6IDUlO1xuICAgIGJhY2tncm91bmQ6I2RlZWFmZDtcbiAgfVxuXG4gIC50ZEFwcm92ZWRMYXJnZSB7XG4gICAgd2lkdGg6IDQ1JTtcbiAgICBiYWNrZ3JvdW5kOiM3MWVlOGY7XG4gIH1cblxuICAudGRBcHJvdmVkU21hbGwge1xuICAgIHdpZHRoOiA1JTtcbiAgICBiYWNrZ3JvdW5kOiM3MWVlOGY7XG4gIH1cblxuICAudGRSZXByb3ZlZExhcmdlIHtcbiAgICB3aWR0aDogNDUlO1xuICAgIGJhY2tncm91bmQ6I2YxODI4MjtcbiAgfVxuXG4gIC50ZFJlcHJvdmVkU21hbGwge1xuICAgIHdpZHRoOiA1JTtcbiAgICBiYWNrZ3JvdW5kOiNmMTgyODI7XG4gIH1cblxuICAudG90YWxDb2xvciB7XG4gICAgYmFja2dyb3VuZDogI0ZDQjRCNDtcbiAgfVxuXG4gIC50b3RhbENvbG9yQm9sZCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYmFja2dyb3VuZDogI0ZDQjRCNDtcbiAgfVxuXG4gIC50b3RhbENvbG9yQm9sZFVwcGVyIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJhY2tncm91bmQ6ICNGQ0I0QjQ7XG4gIH1cblxuICAucHJpbWFyeUNvbG9yIHtcbiAgICBiYWNrZ3JvdW5kOiAjM0UwNzUyO1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG5cbiAgLnNlY29uZGFyeUNvbG9yIHtcbiAgICBiYWNrZ3JvdW5kOiAjQ0Q3OTQwO1xuICB9XG5cbiAgLnJhZGl1c0xlZnQge1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gIH1cblxuICAucmFkaXVzUmlnaHQge1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICB9XG4iXX0= */";
      /***/
    },

    /***/
    "fU3u":
    /*!******************************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/comissoes/representantes/gestao-comissionamentos/gestao-comissionamentos.routing.module.ts ***!
      \******************************************************************************************************************************/

    /*! exports provided: ComercialComissoesGestaoComissionamentosRoutingModule */

    /***/
    function fU3u(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialComissoesGestaoComissionamentosRoutingModule", function () {
        return ComercialComissoesGestaoComissionamentosRoutingModule;
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
      "+fVa");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./lista/lista.component */
      "no/O");
      /* harmony import */


      var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./formulario/formulario.component */
      "uxx0"); // Guards
      // import { FormDeactivateGuard } from 'src/app/guards/form-deactivate.guard';
      // Components


      var routes = [{
        path: '',
        children: [{
          path: 'lista',
          component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_4__["ComercialComissoesGestaoComissionamentosListaComponent"]
        }, {
          path: '',
          redirectTo: 'lista',
          pathMatch: 'full'
        }, {
          path: 'novo',
          component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_5__["ComercialComissoesGestaoComissionamentosFormularioComponent"],
          resolve: {
            detalhes: _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_3__["ComercialComissoesGestaoComissionamentosFormularioResolverGuard"]
          }
        }, {
          path: 'editar/:id',
          component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_5__["ComercialComissoesGestaoComissionamentosFormularioComponent"],
          resolve: {
            detalhes: _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_3__["ComercialComissoesGestaoComissionamentosFormularioResolverGuard"]
          }
        }]
      }];

      var ComercialComissoesGestaoComissionamentosRoutingModule = function ComercialComissoesGestaoComissionamentosRoutingModule() {
        _classCallCheck(this, ComercialComissoesGestaoComissionamentosRoutingModule);
      };

      ComercialComissoesGestaoComissionamentosRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ComercialComissoesGestaoComissionamentosRoutingModule);
      /***/
    },

    /***/
    "no/O":
    /*!*************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/comissoes/representantes/gestao-comissionamentos/lista/lista.component.ts ***!
      \*************************************************************************************************************/

    /*! exports provided: ComercialComissoesGestaoComissionamentosListaComponent */

    /***/
    function noO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialComissoesGestaoComissionamentosListaComponent", function () {
        return ComercialComissoesGestaoComissionamentosListaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lista.component.html */
      "zd8m");
      /* harmony import */


      var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lista.component.scss */
      "o94N");
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


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "ienR");
      /* harmony import */


      var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-bootstrap/chronos */
      "xj/R");
      /* harmony import */


      var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-bootstrap/locale */
      "0b5p");
      /* harmony import */


      var _shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./../../../../../../shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./../../../../../../shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./../../../../../../shared/templates/detail-panel/detal-panel.service */
      "gIxL");
      /* harmony import */


      var _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./../../../../../../shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var _gestao_comissionamentos_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./../gestao-comissionamentos.service */
      "dRIe"); // ngx-bootstrap


      Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_8__["defineLocale"])('pt-br', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_9__["ptBrLocale"]); // Services

      var ComercialComissoesGestaoComissionamentosListaComponent = /*#__PURE__*/function () {
        function ComercialComissoesGestaoComissionamentosListaComponent(formBuilder, activatedRoute, localeService, dateService, router, detailPanelService, pnotifyService, atividadesService, gestaoComissionamentosService) {
          _classCallCheck(this, ComercialComissoesGestaoComissionamentosListaComponent);

          this.formBuilder = formBuilder;
          this.activatedRoute = activatedRoute;
          this.localeService = localeService;
          this.dateService = dateService;
          this.router = router;
          this.detailPanelService = detailPanelService;
          this.pnotifyService = pnotifyService;
          this.atividadesService = atividadesService;
          this.gestaoComissionamentosService = gestaoComissionamentosService;
          this.loaderNavbar = false;
          this.loaderFullScreen = true;
          this.showDetailPanel = false;
          this.dados = [];
          this.modeloComissao = [];
          this.dadosLoaded = false;
          this.dadosEmpty = false;
          this.profile = {};
          this.situacao = [];
          this.showPermissionDenied = false;
          this.tableConfig = {
            subtitleBorder: true
          };
          this.tableConfigMateriais = {
            hover: false
          };
          this.data = [];
          this.orderBy = 'codPreco';
          this.orderType = 'ASC';
          this.maxSize = 10;
          this.itemsPerPage = 300;
          this.currentPage = 1;
          this.totalItems = 0;
          this.localeService.use('pt-br');
        }

        _createClass(ComercialComissoesGestaoComissionamentosListaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.setFormFilter();
            this.setBreadCrumb();
            this.registrarAcesso();
            this.onDetailPanelEmitter();
            this.getPerfil();
            this.getStatus();
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            var _this = this;

            this.activatedRoute.params.subscribe(function (params) {
              _this.breadCrumbTree = [{
                descricao: 'Home',
                routerLink: '/comercial/'
              }, {
                descricao: 'Comissões',
                routerLink: "/comercial/comissoes/".concat(params['idSubModulo'])
              }, {
                descricao: 'Representantes',
                routerLink: "/comercial/comissoes/".concat(params['idSubModulo'], "/representantes")
              }];
            });
          }
        }, {
          key: "getFirstDayMonth",
          value: function getFirstDayMonth() {
            var date = new Date();
            return new Date(date.getFullYear(), date.getMonth() - 1);
          }
        }, {
          key: "getLastDayMonth",
          value: function getLastDayMonth() {
            var date = new Date();
            return new Date(date.getFullYear(), date.getMonth(), 1, -1);
          } // Formulário

        }, {
          key: "setFormFilter",
          value: function setFormFilter() {
            var formValue = this.checkRouterParams();
            this.form = this.formBuilder.group({
              dtInicio: [this.getFirstDayMonth()],
              dtFim: [this.getLastDayMonth()]
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
              codRepresentante: null,
              codSituacao: 2,
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
            var _this3 = this;

            this.loaderNavbar = true;
            this.detailPanelService.hide();
            this.dados = [];
            this.dadosLoaded = false;
            this.dadosEmpty = false;
            this.gestaoComissionamentosService.getListaComissoes(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              _this3.loaderNavbar = false;
              _this3.dadosLoaded = true;
            })).subscribe({
              next: function next(response) {
                if (response.hasOwnProperty('success') && response.success === true) {
                  _this3.dados = response.data;
                  _this3.totalItems = _this3.dados[0]['total'];
                } else if (response.hasOwnProperty('success') && response.success === false) {
                  _this3.dadosEmpty = true;
                } else {
                  _this3.pnotifyService.error();

                  _this3.dadosEmpty = true;
                }
              },
              error: function error(_error) {
                _this3.dadosEmpty = true;

                if (_error.error.hasOwnProperty('mensagem')) {
                  _this3.pnotifyService.error(_error.error.mensagem);
                } else {
                  _this3.pnotifyService.error();
                }
              }
            });
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
            } // _params['orderBy'] = this.orderBy;    _params['orderType'] = this.orderType;


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

            if (this.form.value.codSituacao) {
              params.codSituacao = this.form.value.codSituacao;
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
            var _this4 = this;

            this.detailPanelService.show();
            this.detailPanelTitle = "Modelo de Comissionamento";
            this.modeloComissao = [];
            this.loaderNavbar = true;
            this.gestaoComissionamentosService.getModelo(item.codGestao).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              setTimeout(function () {
                _this4.loaderNavbar = false;

                _this4.detailPanelService.loadedFinished(false);
              }, 500);
            })).subscribe({
              next: function next(response) {
                if (response.hasOwnProperty('success') && response.success === true) {
                  _this4.modeloComissao = response.data;
                  _this4.totalItems = _this4.dados[0]['total'];
                } else {
                  _this4.pnotifyService.error();
                }
              },
              error: function error(_error2) {
                if (_error2.error.hasOwnProperty('mensagem')) {
                  _this4.pnotifyService.error(_error2.error.mensagem);
                } else {
                  _this4.pnotifyService.error();
                }
              }
            });
          }
        }, {
          key: "onDetailPanelEmitter",
          value: function onDetailPanelEmitter() {
            var _this5 = this;

            this.showDetailPanelSubscription = this.detailPanelService.config.subscribe(function (event) {
              _this5.showDetailPanel = event.showing;
            });
          }
        }, {
          key: "classStatusBorder",
          value: function classStatusBorder(grupo) {
            var borderClass;

            if (grupo.codSituacao === 2) {
              borderClass = 'border-danger';
            } else if (grupo.codSituacao === 1) {
              borderClass = 'border-success';
            }

            return borderClass;
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

                  if (_this6.profile.analistaMarketing === true) {
                    _this6.analistaDisabled();
                  } else if (_this6.profile.gerenteMarketing === true) {
                    _this6.gerenteDisabled();
                  } else if (_this6.profile.gerenteEscritorio === true) {
                    _this6.escritorioDisabled();
                  } else if (_this6.profile.gerenteFiscal === true) {
                    _this6.fiscalDisabled();
                  } else if (_this6.profile.diretorComercial === true) {
                    _this6.diretorDisabled();
                  }
                }
              },
              error: function error(_error3) {
                _this6.showPermissionDenied = true;
              }
            });
          }
        }, {
          key: "analistaDisabled",
          value: function analistaDisabled() {// this.form.get("codStatus").setValue(2);
            // // this.form.get("codStatus").disable();
          }
        }, {
          key: "escritorioDisabled",
          value: function escritorioDisabled() {// this.form.get("codStatus").setValue(1);
            // // this.form.get("codStatus").disable();
          }
        }, {
          key: "gerenteDisabled",
          value: function gerenteDisabled() {// this.form.get("codStatus").setValue(3);
            // // this.form.get("codStatus").disable();
          }
        }, {
          key: "fiscalDisabled",
          value: function fiscalDisabled() {// this.form.get("codStatus").setValue(4);
            // // this.form.get("codStatus").disable();
          }
        }, {
          key: "diretorDisabled",
          value: function diretorDisabled() {// this.form.get("codStatus").setValue(5);
            // // this.form.get("codStatus").disable();
          } // programaçãoDisabled() {
          //   this.form.get("codStatus").setValue(6);
          //   // this.form.get("codStatus").disable();
          // }
          // // Get e EditarLista
          //   getRegistros() {
          //     this.loaderNavbar = true;
          //     this.detailPanelService.hide();
          //     this.dadosLoaded = false;
          //     this.dadosEmpty = false;
          //     this.gestaoComissionamentosService
          //       .getComissionamentos()
          //       .pipe(
          //         finalize(() => {
          //           this.loaderNavbar = false;
          //           this.dadosLoaded = true;
          //         })
          //       )
          //       .subscribe(dados => {this.dados = dados; }
          //       );
          //   }

        }, {
          key: "getStatus",
          value: function getStatus() {
            var _this7 = this;

            this.gestaoComissionamentosService.getSituacao().subscribe({
              next: function next(response) {
                if (response.success === true) {
                  _this7.situacao = response.data;

                  _this7.situacao.unshift({
                    codSituacao: 0,
                    nomeSituacao: 'EXIBIR TODOS'
                  });
                } else {
                  _this7.pnotifyService.error();
                }
              },
              error: function error(_error4) {
                _this7.pnotifyService.error();
              }
            });
          }
        }, {
          key: "onEdit",
          value: function onEdit(item) {
            this.router.navigate(['../editar', item.idAnoMes], {
              relativeTo: this.activatedRoute
            });
          } // Outros

        }, {
          key: "onPageChanged",
          value: function onPageChanged(event) {
            if (this.form.value.pagina != event.page) {
              this.detailPanelService.hide();
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
                this.dados[i].codSituacao = grupo.codSituacao;
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

        return ComercialComissoesGestaoComissionamentosListaComponent;
      }();

      ComercialComissoesGestaoComissionamentosListaComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsLocaleService"]
        }, {
          type: _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_13__["DateService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_12__["DetailPanelService"]
        }, {
          type: _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"]
        }, {
          type: _shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"]
        }, {
          type: _gestao_comissionamentos_service__WEBPACK_IMPORTED_MODULE_14__["ComercialComissoesGestaoComissionamentosService"]
        }];
      };

      ComercialComissoesGestaoComissionamentosListaComponent.propDecorators = {
        scrollToFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['scrollToFilter', {}]
        }]
      };
      ComercialComissoesGestaoComissionamentosListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'gestao-comissionamentos-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsLocaleService"], _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_13__["DateService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_12__["DetailPanelService"], _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"], _shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"], _gestao_comissionamentos_service__WEBPACK_IMPORTED_MODULE_14__["ComercialComissoesGestaoComissionamentosService"]])], ComercialComissoesGestaoComissionamentosListaComponent);
      /***/
    },

    /***/
    "o94N":
    /*!***************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/comissoes/representantes/gestao-comissionamentos/lista/lista.component.scss ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function o94N(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NvbWlzc29lcy9yZXByZXNlbnRhbnRlcy9nZXN0YW8tY29taXNzaW9uYW1lbnRvcy9saXN0YS9saXN0YS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "uxx0":
    /*!***********************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/comissoes/representantes/gestao-comissionamentos/formulario/formulario.component.ts ***!
      \***********************************************************************************************************************/

    /*! exports provided: ComercialComissoesGestaoComissionamentosFormularioComponent */

    /***/
    function uxx0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialComissoesGestaoComissionamentosFormularioComponent", function () {
        return ComercialComissoesGestaoComissionamentosFormularioComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./formulario.component.html */
      "aeDo");
      /* harmony import */


      var _formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./formulario.component.scss */
      "bujq");
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "ienR");
      /* harmony import */


      var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-bootstrap/chronos */
      "xj/R");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-bootstrap/locale */
      "0b5p");
      /* harmony import */


      var _shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./../../../../../../shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./../../../../../../shared/modules/confirm-modal/confirm-modal.service */
      "FOez");
      /* harmony import */


      var _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./../../../../../../shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./../../../../../../shared/templates/detail-panel/detal-panel.service */
      "gIxL");
      /* harmony import */


      var _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./../../../../../../shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var _shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./../../../../../../shared/services/core/auth.service */
      "yxCR");
      /* harmony import */


      var _gestao_associacoes_coordenadores_escritorios_coordenadores_escritorios_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./../../../../gestao/associacoes/coordenadores-escritorios/coordenadores-escritorios.service */
      "fMkk");
      /* harmony import */


      var _gestao_comissionamentos_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./../gestao-comissionamentos.service */
      "dRIe"); // ngx-bootstrap


      Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_9__["defineLocale"])('pt-br', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_11__["ptBrLocale"]); // Services

      var ComercialComissoesGestaoComissionamentosFormularioComponent = /*#__PURE__*/function () {
        function ComercialComissoesGestaoComissionamentosFormularioComponent(formBuilder, activateRoute, localeService, dateService, router, detailPanelService, pnotifyService, gestaoComissionamentosService, atividadesService, bsModalService, confirmModalService, authService, activatedRoute, location, gestaoAssociacoesService) {
          _classCallCheck(this, ComercialComissoesGestaoComissionamentosFormularioComponent);

          this.formBuilder = formBuilder;
          this.activateRoute = activateRoute;
          this.localeService = localeService;
          this.dateService = dateService;
          this.router = router;
          this.detailPanelService = detailPanelService;
          this.pnotifyService = pnotifyService;
          this.gestaoComissionamentosService = gestaoComissionamentosService;
          this.atividadesService = atividadesService;
          this.bsModalService = bsModalService;
          this.confirmModalService = confirmModalService;
          this.authService = authService;
          this.activatedRoute = activatedRoute;
          this.location = location;
          this.gestaoAssociacoesService = gestaoAssociacoesService;
          this.user = this.authService.getCurrentUser();
          this.loaderNavbar = false;
          this.loaderFullScreen = true;
          this.tableConfig = {
            border: false,
            hover: true
          };
          this.formData = [];
          this.dados = [];
          this.dadosComissao = [];
          this.dadosDetalhes = [];
          this.dadosDetalhesUnidades = [];
          this.dadosHistorico = [];
          this.dadosData = [];
          this.representantes = [];
          this.escritorios = [];
          this.situacao = [];
          this.profile = {};
          this.arrayAnexos = [];
          this.valorParcial = [];
          this.valorParcialDescontos = [];
          this.valorParcialAjuda = [];
          this.filteredRepresentantes = [];
          this.dadosIndex = [];
          this.nomeAnexo = 'vazio';
          this.valorBaseDBA = 0;
          this.percentualDBA = 0;
          this.valorBaseACO = 0;
          this.percentualACO = 0;
          this.initialValue = true;
          this.showPermissionDenied = false;
          this.saved = false;
          this.salvar = false;
          this.visualizar = false;
          this.anexar = true;
          this.notasEscritorio = true;
          this.notasRepresentante = true;
          this.enviarDiretor = false;
          this.showAnexos = false;
          this.submittingForm = false;
          this.edit = true;
          this.dadosLoaded = false;
          this.dadosEmpty = false;
          this.dadosEmptyUnidades = false;
          this.dadosEmptyHistorico = false;
          this.readonly = true;
          this.maxSize = 10;
          this.itemsPerPage = 300;
          this.currentPage = 1;
          this.totalItems = 0;
          this.data = [];
          this.meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
          this.localeService.use('pt-br');
        }

        _createClass(ComercialComissoesGestaoComissionamentosFormularioComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.setFormFilter();
            this.setBreadCrumb();
            this.setFormValores();
            this.setFormInputs();
            this.setFormReprovar();
            this.registrarAcesso();
            this.getPerfil();
            this.getCreate();
            this.getStatus();
            this.getEscritorios();
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            var _this8 = this;

            this.activatedRoute.params.subscribe(function (params) {
              if (params.id) {
                _this8.appTitle = 'Editar Comissionamento';
                _this8.action = 'update';
                _this8.edit = true;
                _this8.submittingForm = true;
              } else {
                _this8.appTitle = 'Novo Comissionamento';
                _this8.action = 'create';
                _this8.edit = false;
              }

              _this8.breadCrumbTree = [{
                descricao: 'Home',
                routerLink: '/comercial/'
              }, {
                descricao: 'Comissões',
                routerLink: "/comercial/comissoes/".concat(params['idSubModulo'])
              }, {
                descricao: 'Representantes',
                routerLink: "/comercial/comissoes/".concat(params['idSubModulo'], "/representantes")
              }, {
                descricao: 'Lista',
                routerLink: "/comercial/comissoes/".concat(params['idSubModulo'], "/representantes/gestao-comissionamentos/lista")
              }];
            });
          } // formPesquisa e envio de dados para salvar

        }, {
          key: "setFormFilter",
          value: function setFormFilter() {
            var resolver = this.activatedRoute.snapshot.data.detalhes;
            var detalhes = resolver.data;
            this.form = this.formBuilder.group({
              dtInicioVigencia: detalhes.dataInicial != '' ? detalhes[0].dataInicial : [this.dateService.getFirstDayMonth()],
              dtFimVigencia: detalhes.dataFinal != '' ? detalhes[0].dataFinal : [this.dateService.getLastDayMonth()],
              mesReferente: '',
              idAnoMes: detalhes.idAnoMes == undefined ? detalhes[0].idAnoMes : '',
              codEscritorio: [0],
              codRepresentante: [0],
              codStatus: [0]
            });
          }
        }, {
          key: "checkRouterParams",
          value: function checkRouterParams() {
            var _this9 = this;

            var formValue = {
              dtInicioVigencia: [this.dateService.getFirstDayMonth()],
              dtFimVigencia: [this.dateService.getLastDayMonth()],
              codGestao: 0,
              codEscritorio: 0,
              codRepresentante: 0,
              codStatus: 0
            };
            this.activatedRouteSubscription = this.activateRoute.queryParams.subscribe(function (queryParams) {
              if (Object.keys(queryParams).length > 0) {
                var params = atob(queryParams['q']);
                params = JSON.parse(params);

                _this9.search(params);

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
          }
        }, {
          key: "onVerify",
          value: function onVerify(dados) {
            // Cálculo Unidades
            for (var i = 0; i < dados.info.length; i++) {
              if (dados.info[i].valorBase > 0 && dados.info[i].valorComissao == 0) {
                this.pnotifyService.notice('Efetue o cálculo das unidades obrigatórias.');
                return;
              }
            } // Cálculo ROS


            for (var _i = 0; _i < dados.info.length; _i++) {
              if (dados.info[_i].nrRo > 0 && dados.info[_i].valorDesconto == 0) {
                this.pnotifyService.notice('Efetue o cálculo da(s) RO(s).');
                return;
              }
            } // Cálculo Totais


            for (var _i2 = 0; _i2 < dados.info.length; _i2++) {
              if (dados.valorTotalComissao == null || dados.valorTotalComissao == 0) {
                this.pnotifyService.notice('Efetue o cálculo do valor total.');
                return;
              }
            }
          } // Cálculo do total de descontos

        }, {
          key: "onCalcDescontos",
          value: function onCalcDescontos(dados) {
            this.valorParcialDescontos = [];
            this.valorTotalDescontos = 0;

            for (var i = 0; i < dados.info.length; i++) {
              if (!dados.info[i].valorDesconto) return;
              this.valorParcialDescontos.push(parseFloat(dados.info[i].valorDesconto));
              var valorParcialValoresDescontos = this.valorParcialDescontos.filter(Boolean);

              if (dados.info[0].valorDesconto) {
                this.valorTotalDescontos = valorParcialValoresDescontos.reduce(function (total, currentElement) {
                  return total += currentElement;
                });
              } else {
                dados.info[0].valorDesconto = 0;

                if (dados.info[i].valorDesconto == 0) {} else {
                  this.valorTotalDescontos = valorParcialValoresDescontos.reduce(function (total, currentElement) {
                    return total += currentElement;
                  });
                }
              }
            }

            dados.valorTotalDescontos = this.valorTotalDescontos;
          } // Cálculo do total de valor da ajuda

        }, {
          key: "onCalcAjuda",
          value: function onCalcAjuda(dados) {
            this.valorParcialAjuda = [];
            this.valorTotalAjuda = 0;

            for (var i = 0; i < dados.info.length; i++) {
              if (!dados.info[i].valorAjudaCusto) return;
              this.valorParcialAjuda.push(parseFloat(dados.info[i].valorAjudaCusto));
              var valorParcialValoresAjuda = this.valorParcialAjuda.filter(Boolean);

              if (dados.info[0].valorAjudaCusto) {
                this.valorTotalAjuda = valorParcialValoresAjuda.reduce(function (total, currentElement) {
                  return total += currentElement;
                });
              } else {
                dados.info[0].valorAjudaCusto = 0;

                if (dados.info[i].valorAjudaCusto == 0) {} else {
                  this.valorTotalAjuda = valorParcialValoresAjuda.reduce(function (total, currentElement) {
                    return total += currentElement;
                  });
                }
              }
            }

            dados.valorTotalAjuda = this.valorTotalAjuda;
          } // Adiciona dados ao array de dados

        }, {
          key: "onAddData",
          value: function onAddData(dados) {
            this.onCalcDescontos(dados);
            this.onCalcAjuda(dados);
            dados.dataInicial = this.form.value.dtInicioVigencia;
            dados.dataFinal = this.form.value.dtFimVigencia;
          } // Grava os dados do array

        }, {
          key: "onSubmit",
          value: function onSubmit(dados) {
            var _this10 = this;

            this.onVerify(dados);
            this.onAddData(dados);
            this.saved = false;

            if (this.action === 'update') {
              if (dados.info.length > 0) {
                this.loaderNavbar = true;
                this.submittingForm = true;
                this.gestaoComissionamentosService.updateComissao(dados, this.action).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
                  _this10.loaderNavbar = false;
                  _this10.submittingForm = false;
                })).subscribe({
                  next: function next(response) {
                    if (response.hasOwnProperty('success') && response.success === true) {
                      _this10.saved = true;
                      dados.salvo = 'true';

                      _this10.pnotifyService.success(response.mensagem);
                    } else if (response.hasOwnProperty('success') && response.success === false) {
                      _this10.pnotifyService.error(response.mensagem);
                    } else {
                      _this10.pnotifyService.error();
                    }
                  },
                  error: function error(_error5) {
                    _this10.pnotifyService.error();
                  }
                });
              } else {
                this.pnotifyService.notice('Adicione um Comissionamento.');
              }
            } else {
              if (dados.info.length > 0) {
                this.loaderNavbar = true;
                this.submittingForm = true;
                this.gestaoComissionamentosService.saveComissao(dados, this.action).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
                  _this10.loaderNavbar = false;
                  _this10.submittingForm = false;
                })).subscribe({
                  next: function next(response) {
                    if (response.hasOwnProperty('success') && response.success === true) {
                      _this10.saved = true;
                      dados.salvo = 'true';

                      _this10.pnotifyService.success(response.mensagem);
                    } else if (response.hasOwnProperty('success') && response.success === false) {
                      _this10.pnotifyService.error(response.mensagem);
                    } else {
                      _this10.pnotifyService.error();
                    }
                  },
                  error: function error(_error6) {
                    _this10.pnotifyService.error();
                  }
                });
              } else {
                this.pnotifyService.notice('Adicione um Comissionamento.');
              }
            }
          } // formInputs dos cálculos

        }, {
          key: "setFormInputs",
          value: function setFormInputs() {
            this.formInputs = this.formBuilder.group({
              nomeRepresentante: '',
              codRepresentante: '',
              unidade: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              valorBaseInput: [''],
              valorBaseDBA: [''],
              valorBaseACO: [''],
              descontos: 0,
              valorAjudaCusto: 0,
              percentual: [''],
              unidadeInput: [''],
              descontosInput: 0,
              valorAjudaCustoInput: 0,
              anexos: this.formBuilder.array([])
            });
          } // formReprovar da reprovação da comissão

        }, {
          key: "setFormReprovar",
          value: function setFormReprovar(dados) {
            this.formReprovar = this.formBuilder.group({
              codComissaoRepresentante: '',
              descMotivo: ''
            });
          } // formValores para envio de valores do Gerente Fiscal

        }, {
          key: "setFormValores",
          value: function setFormValores(dados) {
            this.formValores = this.formBuilder.group({
              codComissaoRepresentante: dados ? [dados.codComissaoRepresentante] : '',
              valorLiquido: 0,
              valorImposto: 0
            });
          }
        }, {
          key: "onSubmitValores",
          value: function onSubmitValores(dados) {
            var _this11 = this;

            if (this.formValores.value.valorLiquido + this.formValores.value.valorImposto === dados.valorTotalComissao) {
              var formValores = {
                codComissaoRepresentante: dados.codComissaoRepresentante,
                valorLiquido: this.formValores.value.valorLiquido.toFixed(2),
                valorImposto: this.formValores.value.valorImposto.toFixed(2)
              };
              this.gestaoComissionamentosService.postValores(formValores).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
                _this11.loaderNavbar = false;
                _this11.dadosLoaded = true;
                dados.valoresEnviados = 'true';
              })).subscribe({
                next: function next(response) {
                  if (response.success === true) {
                    _this11.dados = response.data;

                    _this11.pnotifyService.success('Valores cadastrados com sucesso');

                    dados.valoresEnviados = 'true';
                  } else if (response.hasOwnProperty('success') && response.success === false) {} else {
                    _this11.pnotifyService.error();
                  }
                },
                error: function error(_error7) {
                  if (_error7.error.hasOwnProperty('mensagem')) {
                    _this11.pnotifyService.error(_error7.error.mensagem);
                  } else {
                    _this11.pnotifyService.error('Erro ao cadastrar valores');
                  }
                }
              });
            } else {
              this.pnotifyService.notice('O total do valor líquido + valor dos impostos não são iguais o valor total da comissão.');
            }
          } // Essa função checa se as datas são de meses diferentes

        }, {
          key: "checkValidatorsData",
          value: function checkValidatorsData() {
            var validation = true;
            var dtInicialContrato = this.form.value.dtInicioVigencia.getMonth();
            var dtFinalContrato = this.form.value.dtFimVigencia.getMonth();

            if (dtInicialContrato != dtFinalContrato) {
              validation = false;
              return;
            }

            return validation;
          } // Chamada de dados para Adição ou Edição

        }, {
          key: "getCreate",
          value: function getCreate(item, dados) {
            if (this.action === 'update') {
              var resolver = this.activatedRoute.snapshot.data.detalhes;

              if (resolver.success === true) {
                var detalhes = resolver.data;
                this.dadosData = resolver.data;
                this.dataInicial = this.dadosData[0].dataInicial;
                this.dataFinal = this.dadosData[0].dataFinal;
                this.mesRef = this.dadosData[0].periodo;
                this.form.get('mesReferente').setValue(this.dadosData[0].periodo);
              }
            }
          }
        }, {
          key: "getDados",
          value: function getDados(params) {
            var _this12 = this;

            this.dadosEmpty = false;
            this.gestaoComissionamentosService.getFormComissoes(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              _this12.loaderNavbar = false;
            })).subscribe({
              next: function next(response) {
                if (response.success === true) {
                  _this12.dadosComissao = response.data;
                } else {
                  _this12.pnotifyService.error();

                  _this12.dadosEmpty = true;
                }
              },
              error: function error(_error8) {
                if (_error8['error'].hasOwnProperty('mensagem')) {
                  _this12.pnotifyService.error(_error8.error.mensagem);
                } else {
                  _this12.pnotifyService.error();
                }
              }
            });
          } // Lógica de Cálculos e exclusão de dados

        }, {
          key: "onDelete",
          value: function onDelete(dados, indice, item, index) {
            dados.info.splice(index, 1);
            this.valorParcial = [];

            for (var i = 0; i < dados.info.length; i++) {
              this.valorParcial.push(parseFloat(dados.info[i].valorComissao));
              var valorParcial2 = this.valorParcial.filter(Boolean);
              this.valorTotal = valorParcial2.reduce(function (total, currentElement) {
                return total += currentElement;
              });
            }

            dados.valorTotalComissao = this.valorTotal;
          } // Pega o array retornado da pesquisa e cria unidades

        }, {
          key: "onCreateUnidades",
          value: function onCreateUnidades(item) {
            this.formInputs.value.valorBaseInput = item.valorBase;

            if (this.formInputs.get('percentual').touched) {
              item.percentualComissao = this.formInputs.value.percentual;
              item.valorAjudaCusto = 0;
              var percentual = item.percentualComissao / 100;
              var total = item.valorBase * percentual;
              item.valorComissao = Number(total.toFixed(2));
            } else {
              item.valorAjudaCusto = 0;

              var _percentual = item.percentualComissao / 100;

              var _total = item.valorBase * _percentual;

              item.valorComissao = Number(_total.toFixed(2));
            }
          } // Pega o array retornado da pesquisa e cria DBA

        }, {
          key: "onCreateDBA",
          value: function onCreateDBA(item) {
            item.percentualComissao = 0;
            item.valorBase = 0;

            if (this.formInputs.value.valorBaseDBA == null || this.formInputs.value.valorBaseDBA == undefined) {
              // this.pnotifyService.notice('Favor preencher os dados corretamente.');
              this.formInputs.get('valorBase').setValue(0);
            }

            if (this.formInputs.value.valorBaseDBA == 0 || this.formInputs.value.percentual == 0) {
              this.pnotifyService.notice('Não é possível cálcular um DBA com valor zerado.');
              return;
            } else {
              item.valorBase = this.formInputs.value.valorBaseDBA;
              item.percentualComissao = this.formInputs.value.percentual; // this.valorBaseDBA = item.valorBase;
              // this.percentualDBA = item.percentualComissao;

              item.valorAjudaCusto = 0;
              var percentual = item.percentualComissao / 100;
              var total = item.valorBase * percentual;
              item.valorComissao = total.toFixed(2);
            }
          } // Pega o array retornado da pesquisa e cria PLANA AÇO

        }, {
          key: "onCreatePlanaAco",
          value: function onCreatePlanaAco(item) {
            item.percentualComissao = 0;
            item.valorBase = 0;

            if (this.formInputs.value.valorBaseACO == null || this.formInputs.value.valorBaseACO == undefined) {
              // this.pnotifyService.notice('Favor preencher os dados corretamente.');
              this.formInputs.get('valorBase').setValue(0);
            }

            if (this.formInputs.value.valorBaseACO == 0 || this.formInputs.value.percentual == 0) {
              this.pnotifyService.notice('Não é possível cálcular um PLANA AÇO com valor zerado.');
              return;
            } else {
              item.valorBase = this.formInputs.value.valorBaseACO;
              item.percentualComissao = this.formInputs.value.percentual; // this.valorBaseACO = item.valorBase;
              // this.percentualACO = item.percentualComissao;

              item.valorAjudaCusto = 0;
              var percentual = item.percentualComissao / 100;
              var total = item.valorBase * percentual;
              item.valorComissao = total.toFixed(2);
            }
          } // Pega o array retornado da pesquisa e cria ROS

        }, {
          key: "onCreateRo",
          value: function onCreateRo(item) {
            if (item.valorDesconto == 0 && this.formInputs.value.descontos == 0) {
              this.pnotifyService.notice('Favor adicionar um valor para o cálculo!');
              return;
            }

            item.valorAjudaCusto = 0;
            item.valorDesconto = this.formInputs.value.descontos;
            var valorComissao = 0;
            item.valorComissao = valorComissao - item.valorDesconto;
          } // Pega o array retornado da pesquisa e cria campo para DESCONTOS

        }, {
          key: "onCreateDescontos",
          value: function onCreateDescontos(item) {
            item.valorBase = 0;
            item.percentualComissao = 0;
            item.valorDesconto = this.formInputs.value.descontos;
            item.valorAjudaCusto = 0;
            var valorComissao = 0;
            item.valorComissao = valorComissao - this.formInputs.value.descontos;
          } // Pega o array retornado da pesquisa e cria campo para AJUDA DE CUSTO

        }, {
          key: "onCreateAjudaCusto",
          value: function onCreateAjudaCusto(item) {
            item.valorBase = 0;
            item.percentualComissao = 0;
            item.valorDesconto = 0;
            item.valorAjudaCusto = this.formInputs.value.valorAjudaCusto;
            var valorComissao = 0;
            item.valorComissao = valorComissao + this.formInputs.value.valorAjudaCusto;
          } // Usa o formInputs para adicionar um novo array de DESCONTOS no array principal retornado

        }, {
          key: "onCreateAddDescontos",
          value: function onCreateAddDescontos(item, dados) {
            item.valorBase = 0;
            item.percentualComissao = 0;
            item.valorDesconto = this.formInputs.value.descontos;
            item.valorAjudaCusto = 0;
            var valorComissao = 0;
            item.valorComissao = valorComissao - this.formInputs.value.descontosInput;
            var valores = {
              codGestao: dados.info[0].codGestao,
              codRepresentante: dados.codRepresentante,
              unidade: this.formInputs.value.unidadeInput,
              codTipoPagamento: dados.info[0].codTipoPagamento,
              nrRo: null,
              valorBase: 0,
              valorDesconto: this.formInputs.value.descontosInput,
              percentualComissao: 0,
              valorAjudaCusto: 0,
              valorComissao: item.valorComissao.toFixed(2)
            };
            dados.info.push(valores);
          } // Usa o formInputs para adicionar um novo array de AJUDA DE CUSTO no array principal retornado

        }, {
          key: "onCreateAddAjudaCusto",
          value: function onCreateAddAjudaCusto(item, dados) {
            item.valorBase = 0;
            item.percentualComissao = 0;
            item.valorDesconto = 0;
            item.valorAjudaCusto = this.formInputs.value.valorAjudaCusto;
            var valorComissao = 0;
            item.valorComissao = valorComissao + this.formInputs.value.valorAjudaCustoInput;
            var valores = {
              codGestao: dados.info[0].codGestao,
              codRepresentante: dados.codRepresentante,
              unidade: this.formInputs.value.unidadeInput,
              codTipoPagamento: dados.info[0].codTipoPagamento,
              nrRo: null,
              valorBase: 0,
              valorDesconto: 0,
              percentualComissao: 0,
              valorAjudaCusto: this.formInputs.value.valorAjudaCustoInput,
              valorComissao: item.valorComissao.toFixed(2)
            };
            dados.info.push(valores);
          }
        }, {
          key: "onUpdateUnidades",
          value: function onUpdateUnidades(item) {
            this.formInputs.value.valorBaseInput = item.valorBase;
            item.percentualComissao = this.formInputs.value.percentual;
            var percentual = item.percentualComissao / 100;
            var total = item.valorBase * percentual;
            item.valorComissao = total.toFixed(2);
          }
        }, {
          key: "onUpdateDBA",
          value: function onUpdateDBA(item) {}
        }, {
          key: "onUpdatePlanaAco",
          value: function onUpdatePlanaAco(item) {}
        }, {
          key: "onUpdateRo",
          value: function onUpdateRo(item) {
            item.valorDesconto = this.formInputs.value.descontos;
            var valorComissao = 0;
            item.valorComissao = valorComissao - item.valorDesconto;
            item.valorAjudaCusto = 0;
          }
        }, {
          key: "onUpdateDescontos",
          value: function onUpdateDescontos(item) {
            item.valorDesconto = this.formInputs.value.descontos;
            var valorComissao = 0;
            item.valorComissao = valorComissao - item.valorDesconto;
          }
        }, {
          key: "onUpdateAjudaCusto",
          value: function onUpdateAjudaCusto(item) {
            item.valorAjudaCusto = this.formInputs.value.valorAjudaCusto;
            var valorComissao = 0;
            item.valorComissao = valorComissao + item.valorAjudaCusto;
          }
        }, {
          key: "onUpdateAddDescontos",
          value: function onUpdateAddDescontos(item, dados) {
            item.valorBase = 0;
            item.valorPercentual = 0;
            item.valorDesconto = this.formInputs.value.descontos;
            item.valorAjudaCusto = 0;
            var valorComissao = 0;
            item.valorComissao = valorComissao - this.formInputs.value.descontosInput;
            var valores = {
              codRepresentante: dados.codRepresentante,
              unidade: this.formInputs.value.unidadeInput,
              codTipoPagamento: dados.info[0].codTipoPagamento,
              valorBase: 0,
              valorDesconto: this.formInputs.value.descontosInput,
              valorPercentual: 0,
              valorAjudaCusto: 0,
              valorComissao: item.valorComissao.toFixed(2)
            };
            dados.info.push(valores);
          }
        }, {
          key: "onUpdateAddAjudaCusto",
          value: function onUpdateAddAjudaCusto(item, dados) {
            item.valorBase = 0;
            item.valorPercentual = 0;
            item.valorDesconto = 0;
            item.valorAjudaCusto = this.formInputs.value.valorAjudaCusto;
            var valorComissao = 0;
            item.valorComissao = valorComissao + this.formInputs.value.valorAjudaCustoInput;
            var valores = {
              codRepresentante: dados.codRepresentante,
              unidade: this.formInputs.value.unidadeInput,
              codTipoPagamento: dados.info[0].codTipoPagamento,
              valorBase: 0,
              valorDesconto: 0,
              valorPercentual: 0,
              valorAjudaCusto: this.formInputs.value.valorAjudaCustoInput,
              valorComissao: item.valorComissao.toFixed(2)
            };
            dados.info.push(valores);
          }
        }, {
          key: "getConta",
          value: function getConta(indice, dados, i, item) {
            this.valorParcial = [];

            if (this.action === 'create') {
              if (item.codRepresentante) {
                // essa tratativa foi comentada porque no momento do desenvolvimento os valores já vem cálculados,
                // mas caso isso mude ainda em desenvolvimento pode utilizar esse código, caso aprovado pela área,
                // pode deletar essa parte do código
                // if ((this.formInputs.value.percentual > 0 || item.percentualComissao > 0) && item.nrRo == null &&
                // (item.unidade != 'DBA' || item.unidade != 'PLANA AÇO') &&
                //   this.formInputs.value.unidadeInput == '' && this.formInputs.value.descontos == 0 &&
                //   this.formInputs.value.valorAjudaCusto == 0) {
                //     this.onCreateUnidades(item);
                //   } else
                if (item.unidade === 'DBA') {
                  this.onCreateDBA(item);
                } else if (item.unidade === 'PLANA AÇO') {
                  this.onCreatePlanaAco(item);
                } else if (item.nrRo > 0) {
                  this.onCreateRo(item);
                } else if (item.valorDesconto > 0 && item.unidade != 'RO') {
                  this.onCreateDescontos(item);
                } else if (item.valorAjudaCusto > 0 && dados.info[0].valorComissao > 0) {
                  this.onCreateAjudaCusto(item);
                }
              } else {
                // Esse if verifica se tanto os inputs de desconto e valorAjuda estão preenchidos ao mesmo tempo
                // algo proibido, tendo em conta que pode enviar apenas um dado desses por vez
                if (this.formInputs.value.descontosInput > 0 && this.formInputs.value.valorAjudaCustoInput > 0) {
                  this.pnotifyService.notice('Preencha apenas os Descontos ou o valor da Ajuda de custos.');
                  this.formInputsFieldReset();
                  return; // Esse else if verifica se tanto os inputs de desconto e valorAjuda não estão preenchidos
                } else if (this.formInputs.value.descontosInput == 0 && this.formInputs.value.valorAjudaCustoInput == 0 || this.formInputs.value.unidadeInput == '' && this.formInputs.value.valorBaseInput > 0 && item.nrRo == 0) {
                  this.pnotifyService.notice('Preencha os campos antes de calcular.');
                  this.formInputsFieldReset();
                  return;
                } else if ((this.formInputs.value.descontosInput > 0 || this.formInputs.value.valorAjudaCustoInput > 0) && this.formInputs.value.unidadeInput == '') {
                  this.pnotifyService.notice('Preencha o nome da ocorrência antes de calcular.');
                  return;
                } else if (this.formInputs.value.descontosInput > 0 && dados.info[0].valorComissao > 0) {
                  this.onCreateAddDescontos(item, dados);
                } else if (this.formInputs.value.valorAjudaCustoInput > 0 && dados.info[0].valorComissao > 0) {
                  this.onCreateAddAjudaCusto(item, dados);
                } // Essa parte do código foi comentada para testar se não vai ocorrer erros, pode ser deletada caso não ocorra
                // else if (dados.info[0].valorComissao == 0 || dados.info[0].valorComissao == null) {
                //   this.formInputsFieldReset();
                //   this.pnotifyService.notice('Favor efetuar os cálculos das unidades primeiro.');
                // }

              }
            } else {
              if (item.codRepresentante) {
                if (item.percentualComissao > 0 && item.nrRo == 0 && this.formInputs.value.unidadeInput == '') {
                  this.onUpdateUnidades(item);
                } else if (item.nrRo > 0 || item.unidade === 'ROs') {
                  this.onUpdateRo(item);
                } else if (item.valorDesconto > 0) {
                  this.onUpdateDescontos(item);
                } else if (item.valorAjudaCusto > 0) {
                  this.onUpdateAjudaCusto(item);
                }
              } else {
                if (this.formInputs.value.descontosInput > 0 && this.formInputs.value.valorAjudaCustoInput > 0) {
                  this.pnotifyService.notice('Preencha apenas os Descontos ou o valor da Ajuda de custos.');
                  this.formInputsFieldReset();
                  return;
                } else if (this.formInputs.value.descontosInput == 0 && this.formInputs.value.valorAjudaCustoInput == 0 || this.formInputs.value.unidadeInput == '') {
                  this.pnotifyService.notice('Preencha os campos antes de calcular.');
                  this.formInputsFieldReset();
                  return;
                } else if (this.formInputs.value.descontosInput > 0) {
                  this.onUpdateAddDescontos(item, dados);
                } else if (this.formInputs.value.valorAjudaCustoInput > 0 && dados.info[0].valorComissao > 0) {
                  this.onUpdateAddAjudaCusto(item, dados);
                }
              }
            }

            this.onCalcTotalComissao(dados);
            this.formInputsFieldReset();
            this.formInputs.get('percentual').markAsUntouched(); // this.formInputs.get('valorBase').markAsUntouched();
          }
        }, {
          key: "onCalcTotalComissao",
          value: function onCalcTotalComissao(dados) {
            for (var i = 0; i < dados.info.length; i++) {
              this.valorParcial.push(parseFloat(dados.info[i].valorComissao));
              var valorParcialValores = this.valorParcial.filter(Boolean);

              if (dados.info[0].valorComissao) {
                this.valorTotal = valorParcialValores.reduce(function (total, currentElement) {
                  return total += currentElement;
                });
              } else {
                dados.info[0].valorComissao = 0;

                if (dados.info[i].valorComissao == 0) {} else {
                  this.valorTotal = valorParcialValores.reduce(function (total, currentElement) {
                    return total += currentElement;
                  });
                }
              }
            }

            dados.valorTotalComissao = this.valorTotal;
          }
        }, {
          key: "formInputsFieldReset",
          value: function formInputsFieldReset() {
            this.formInputs.get('unidadeInput').setValue('');
            this.formInputs.get('descontosInput').setValue('');
            this.formInputs.get('valorAjudaCustoInput').setValue('');
          }
        }, {
          key: "formDbaAcoReset",
          value: function formDbaAcoReset() {
            this.formInputs.patchValue({
              valorBaseDBA: 0,
              valorBaseACO: 0,
              percentual: 0
            });
          } // Lógica de Anexos

        }, {
          key: "getAnexos",
          value: function getAnexos(codComissao) {
            var _this13 = this;

            this.loaderNavbar = true;
            this.showAnexos = false;
            this.gestaoComissionamentosService.getAnexos(codComissao).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              _this13.loaderNavbar = false;
            })).subscribe({
              next: function next(response) {
                if (response.success === true) {
                  _this13.setAnexos(response.data);

                  _this13.showAnexos = true;
                } else if (response.success === false && response.hasOwnProperty('mensagem')) {// this.pnotifyService.error(response.mensagem);
                } else {
                  _this13.pnotifyService.error();
                }
              },
              error: function error(_error9) {
                if (_error9['error'].hasOwnProperty('mensagem')) {
                  _this13.pnotifyService.error(_error9.error.mensagem);
                } else {
                  _this13.pnotifyService.error();
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
                linkAnexo: [anexo.linkAnexo]
              }));

              if (manipulateForm) {
                this.formInputs.markAsTouched();
                this.formInputs.markAsDirty();
              }
            }
          }
        }, {
          key: "onAnexar",
          value: function onAnexar() {
            this.anexar = !this.anexar;
          }
        }, {
          key: "appendFile",
          value: function appendFile(files, index, dados) {
            if (this.formData.length > 0) {
              return;
            }

            if (files.length === 0) return;
            var fd = new FormData();
            fd.append('file', files[0]);
            this.formData.push(fd);
            this.arrayAnexos.push({
              nomeAnexo: files[0]['name'],
              codComissaoRepresentante: this.codComissaoRepresentante
            });
            dados = this.dadosIndex;
            dados.anexos = this.arrayAnexos;

            if (this.showAnexos === false) {
              this.showAnexos = true;
            }
          }
        }, {
          key: "validAnexos",
          value: function validAnexos() {
            if (this.formData.length > 0) {
              this.pnotifyService.notice("Favor enviar anexos pendentes!");
              return;
            }
          }
        }, {
          key: "getIndexAnexos",
          value: function getIndexAnexos(dados, index) {
            this.indexAnexos = index;
            this.codComissaoRepresentante = dados.codComissaoRepresentante;
            this.dadosIndex = dados;
          }
        }, {
          key: "checkAnexoExists",
          value: function checkAnexoExists(anexo) {
            return this.formInputs.value.anexos.some(function (el) {
              return el.codAnexo === anexo.codAnexo;
            });
          }
        }, {
          key: "onDeleteAnexo",
          value: function onDeleteAnexo(codAnexo, index, dados) {
            var _this14 = this;

            this.confirmDelete().subscribe(function (r) {
              if (dados.anexos[0].codAnexo) {
                _this14.loaderNavbar = true;

                _this14.gestaoComissionamentosService.deleteAnexo(dados.anexos[0].codAnexo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
                  _this14.loaderNavbar = false;
                })).subscribe({
                  next: function next(response) {
                    if (response.hasOwnProperty('success') && response.success === true) {
                      r ? _this14.deleteDocumento(index, dados) : null;

                      _this14.pnotifyService.success(response.mensagem);
                    } else if (response.hasOwnProperty('success') && response.success === false && response.hasOwnProperty('mensagem')) {
                      _this14.pnotifyService.error(response.mensagem);
                    } else {
                      _this14.pnotifyService.error();
                    }
                  },
                  error: function error(_error10) {
                    if (_error10['error'].hasOwnProperty('mensagem')) {
                      _this14.pnotifyService.error(_error10.error.mensagem);
                    } else {
                      _this14.pnotifyService.error();
                    }
                  }
                });
              } else {
                r ? _this14.deleteDocumento(index, dados) : null;

                _this14.formData.splice(index, 1);
              }
            });
          }
        }, {
          key: "confirmDelete",
          value: function confirmDelete() {
            return this.confirmModalService.showConfirm('delete', 'Confirmar exclusão', 'Deseja realmente prosseguir com a exclusão do registro?', 'Cancelar', 'Confirmar');
          }
        }, {
          key: "onPostAnexos",
          value: function onPostAnexos(codComissaoRepresentante, dados, indexComissao) {
            var _this15 = this;

            if (this.formData.length === 0) {
              /* this.pnotifyService.notice('Erro'); */
              return;
            }

            this.formData.forEach(function (element, index) {
              _this15.gestaoComissionamentosService.postAnexos(element, codComissaoRepresentante).subscribe({
                next: function next(response) {
                  if (response.success === true) {
                    _this15.pnotifyService.success(response.mensagem);

                    dados.anexoEnviado = 'true';
                    dados.codSituacao = 3;
                  } else if (response.hasOwnProperty('success') && response.success === false) {
                    _this15.pnotifyService.error(response.mensagem);
                  } else {
                    _this15.pnotifyService.error();
                  }
                },
                error: function error(_error11) {
                  _this15.pnotifyService.error();
                },
                complete: function complete() {
                  _this15.arrayAnexos = [];
                  _this15.dadosIndex = [];
                  _this15.formData = [];
                  dados.anexos = [];
                  setTimeout(function () {
                    _this15.checkRouterParams();
                  }, 1000);
                }
              });
            });
          }
        }, {
          key: "deleteDocumento",
          value: function deleteDocumento(index, dados) {
            dados.anexos.splice(index, 1);
            this.nomeAnexo = 'vazio'; // dados.anexos.removeAt(index);

            this.form.markAsTouched();
            this.form.markAsDirty();
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          } // Get de dados para ngSelect

        }, {
          key: "getStatus",
          value: function getStatus() {
            var _this16 = this;

            this.gestaoComissionamentosService.getSituacao().subscribe({
              next: function next(response) {
                if (response.success === true) {
                  _this16.situacao = response.data;

                  _this16.situacao.unshift({
                    codSituacao: 0,
                    nomeSituacao: 'EXIBIR TODOS'
                  });
                } else {
                  _this16.pnotifyService.error();
                }
              },
              error: function error(_error12) {
                _this16.pnotifyService.error();
              }
            });
          }
        }, {
          key: "getEscritorios",
          value: function getEscritorios() {
            var _this17 = this;

            this.gestaoComissionamentosService.getEscritorios().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {})).subscribe(function (response) {
              if (response.success === true) {
                _this17.escritorios = response.data;

                _this17.escritorios.unshift({
                  idEscritorio: 0,
                  nomeEscritorio: 'EXIBIR TODOS'
                });

                setTimeout(function () {
                  var escritorios = _this17.form.controls['codEscritorio'].value;

                  _this17.getRepresentantes(escritorios);
                }, 2000);
              } else {
                _this17.pnotifyService.error();

                _this17.location.back();
              }
            });
          }
        }, {
          key: "getRepresentantes",
          value: function getRepresentantes(codEscritorio) {
            var _this18 = this;

            this.gestaoComissionamentosService.getRepresentantes(codEscritorio).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              _this18.loaderFullScreen = false;
            })).subscribe(function (response) {
              if (response.success === true) {
                _this18.representantes = response.data;

                _this18.representantes.unshift({
                  codRepresentante: 0,
                  nomeRepresentante: 'EXIBIR TODOS'
                });
              } else {
                _this18.pnotifyService.error();

                _this18.location.back();
              }
            });
          }
        }, {
          key: "onChangeEscritorio",
          value: function onChangeEscritorio(codEscritorio) {
            var representantes = this.representantes.filter(function (representante) {
              return representante.codTidEscritorio == codEscritorio;
            });
            this.filteredRepresentantes = representantes;
            this.filteredRepresentantes.unshift({
              codRepresentante: 0,
              nomeRepresentante: 'TODOS'
            });
          }
        }, {
          key: "openDetails",
          value: function openDetails(dados) {
            var _this19 = this;

            this.loaderNavbar = true;
            this.gestaoComissionamentosService.getDetalhesRepresentante(dados).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              _this19.loaderNavbar = false;
            })).subscribe({
              next: function next(response) {
                if (response.success === true) {
                  _this19.dadosDetalhes = response.data;
                } else {
                  _this19.pnotifyService.error();
                }
              },
              error: function error(_error13) {
                _this19.pnotifyService.error();
              }
            });
          }
        }, {
          key: "openDetailsUnidadess",
          value: function openDetailsUnidadess(item) {
            var _this20 = this;

            this.dadosDetalhesUnidades = [];
            this.loaderFullScreen = true;
            this.dadosEmptyUnidades = false;

            if (item.unidade === 'RO') {
              var codRo = 1;
            } else {
              var codRo = 0;
            }

            var params = {
              codGestao: item.codGestao,
              codRepresentante: item.codRepresentante,
              codUnidade: item.codUnidade,
              codRo: codRo,
              codTipoPagamento: item.codTipoPagamento
            };
            this.gestaoComissionamentosService.getDetalhesUnidades(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              _this20.loaderFullScreen = false;
            })).subscribe({
              next: function next(response) {
                if (response.success === true) {
                  _this20.dadosDetalhesUnidades = response.data;
                  _this20.dadosEmptyUnidades = false;
                } else {
                  _this20.pnotifyService.error();

                  _this20.loaderFullScreen = false;
                  _this20.dadosEmptyUnidades = true;
                }
              },
              error: function error(_error14) {
                _this20.pnotifyService.error();
              }
            });
          } // Pesquisa

        }, {
          key: "onFilter",
          value: function onFilter() {
            if (this.action == 'create') {
              if (!this.checkValidatorsData()) {
                this.pnotifyService.notice('A data inicial e final não podem ser de meses diferentes!');
                return;
              }
            }

            if (this.form.valid) {
              this.itemsPerPage = this.form.value.registros;
              this.currentPage = 1;
              this.setRouterParams(this.getParams());
            }
          }
        }, {
          key: "search",
          value: function search(params) {
            var _this21 = this;

            this.loaderNavbar = true;
            this.detailPanelService.hide();
            this.dados = [];
            this.dadosLoaded = false;
            this.dadosEmpty = false;
            this.formDbaAcoReset();

            if (this.action === 'create') {
              this.getDados(params);
            } else {
              this.gestaoComissionamentosService.getListaEdicaoComissoes(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
                _this21.loaderNavbar = false;
                _this21.dadosLoaded = true;
              })).subscribe({
                next: function next(response) {
                  if (response.success === true) {
                    _this21.dadosEmpty = false;
                    _this21.dadosComissao = response.data;
                  } else if (response.hasOwnProperty('success') && response.success === false) {
                    _this21.dadosEmpty = true;
                  } else {
                    _this21.pnotifyService.error();

                    _this21.dadosEmpty = true;
                  }
                },
                error: function error(_error15) {
                  _this21.dadosEmpty = true;

                  if (_error15.error.hasOwnProperty('mensagem')) {
                    _this21.pnotifyService.error(_error15.error.mensagem);
                  } else {
                    _this21.pnotifyService.error();
                  }
                }
              });
            }
          } // Verificar Parâmetros

        }, {
          key: "setRouterParams",
          value: function setRouterParams(params) {
            this.router.navigate([], {
              relativeTo: this.activateRoute,
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

            if (this.form.value.codRepresentante) {
              params.codRepresentante = this.form.value.codRepresentante;
            }

            if (this.form.value.codEscritorio) {
              params.codEscritorio = this.form.value.codEscritorio;
            }

            if (this.form.value.dtInicioVigencia) {
              params.dtInicioVigencia = this.form.value.dtInicioVigencia;
            }

            if (this.form.value.dtFimVigencia) {
              params.dtInicioVigencia = this.form.value.dtFimVigencia;
            }

            if (this.form.value.codStatus) {
              params.codStatus = this.form.value.codStatus;
            }

            return params;
          } // inputFileChange(event) {
          //   if (event.target.files && event.target.files[0]) {
          //     const file = event.target.files[0];
          //     const formData = new FormData();
          //     formData.append('file', file);
          //   }
          // }

        }, {
          key: "navegarAnexo",
          value: function navegarAnexo(anexo) {
            this.router.navigate([], {
              relativeTo: this.activatedRoute
            }).then(function (result) {
              window.open("".concat(anexo.urlAnexo), '_blank');
            });
          } // Lógicas de perfil

        }, {
          key: "getPerfil",
          value: function getPerfil() {
            var _this22 = this;

            this.visualizar = false;
            this.gestaoComissionamentosService.getPermissoesAcesso().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {// this.loaderFullScreen = false;
            })).subscribe({
              next: function next(response) {
                if (response.success === true) {
                  _this22.profile = response.data;

                  if (_this22.profile.analistaMarketing === true && (_this22.profile.gerenteMarketing === false || _this22.profile.gerenteEscritorio === false || _this22.profile.gerenteFiscal === false || _this22.profile.diretorComercial === false)) {
                    _this22.analistaDisabled();

                    if (_this22.action === 'create') {
                      _this22.visualizar = false;
                    } else {
                      _this22.visualizar = true; // caso precise de edição, tirar essa Unidade
                    }
                  } else if (_this22.profile.gerenteMarketing === true) {
                    _this22.gerenteDisabled();

                    _this22.visualizar = true;
                  } else if (_this22.profile.gerenteEscritorio === true) {
                    var id = _this22.profile.info[0].escritorio;

                    _this22.escritorioDisabled(id);

                    _this22.visualizar = true;
                  } else if (_this22.profile.gerenteFiscal === true) {
                    _this22.fiscalDisabled();

                    _this22.visualizar = true;
                  } else if (_this22.profile.diretorComercial === true) {
                    _this22.diretorDisabled();

                    _this22.visualizar = true;
                  }
                }
              },
              error: function error(_error16) {
                _this22.showPermissionDenied = true;
              }
            });
          }
        }, {
          key: "analistaDisabled",
          value: function analistaDisabled() {
            // SE FOR PASSAR STATUS, TIRAR OS DISABLES
            if (this.action === 'update') {
              this.form.get('codStatus').setValue(3);
              this.status = this.form.value.codStatus; // this.form.get("codStatus").disable();
            }
          }
        }, {
          key: "escritorioDisabled",
          value: function escritorioDisabled(idEscritorio) {
            this.form.get('dtInicioVigencia').disable(); // SE FOR PASSAR DATAS, TIRAR OS DISABLES

            this.form.get('dtFimVigencia').disable();
            this.form.get('codEscritorio').setValue(idEscritorio);
            this.form.get('codStatus').setValue('1, 2');
            this.readonly = false;
          }
        }, {
          key: "gerenteDisabled",
          value: function gerenteDisabled() {
            this.form.get('dtInicioVigencia').disable();
            this.form.get('dtFimVigencia').disable();
            this.form.get('codStatus').setValue(4);
            this.readonly = false;
          }
        }, {
          key: "fiscalDisabled",
          value: function fiscalDisabled() {
            // SE FOR PASSAR DATAS, TIRAR OS DISABLES
            this.form.get('dtInicioVigencia').disable();
            this.form.get('dtFimVigencia').disable();
            this.form.get('codStatus').setValue(5);
            this.readonly = false;
          }
        }, {
          key: "diretorDisabled",
          value: function diretorDisabled() {
            this.form.get('dtInicioVigencia').disable();
            this.form.get('dtFimVigencia').disable();
            this.form.get('codStatus').setValue(6);
            this.readonly = false;
          } // Histórico de Exclusão

        }, {
          key: "onHistoricoExclusao",
          value: function onHistoricoExclusao(dados) {
            var _this23 = this;

            this.dadosHistorico = [];
            this.loaderFullScreen = true;
            this.dadosEmptyHistorico = false;
            this.gestaoComissionamentosService.getHistorico(dados[0].codComissaoRepresentante).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              _this23.loaderFullScreen = false;
            })).subscribe({
              next: function next(response) {
                if (response.success === true) {
                  _this23.dadosHistorico = response.data;
                  _this23.dadosEmptyHistorico = false;
                } else if (response.hasOwnProperty('success') && response.success === false) {
                  _this23.dadosEmptyHistorico = true;
                } else {
                  _this23.pnotifyService.error();
                }
              },
              error: function error(_error17) {
                _this23.dadosEmptyHistorico = true;

                if (_error17.error.hasOwnProperty('mensagem')) {
                  _this23.pnotifyService.error(_error17.error.mensagem);
                } else {
                  _this23.pnotifyService.error();
                }
              }
            });
          } // Lógicas de aprovação

        }, {
          key: "onAprovarAnalista",
          value: function onAprovarAnalista(dados) {
            var _this24 = this;

            dados.clicado = true;
            this.gestaoComissionamentosService.postAprovar(dados).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              _this24.loaderNavbar = false;
              _this24.dadosLoaded = true;
              dados.clicado = false;
            })).subscribe({
              next: function next(response) {
                if (response.success === true) {
                  _this24.pnotifyService.success('Comissão aprovada com sucesso!');

                  dados.analista = 'true';
                } else if (response.hasOwnProperty('success') && response.success === false) {
                  _this24.dadosEmpty = true;
                } else {
                  _this24.pnotifyService.error();

                  _this24.dadosEmpty = true;
                }
              },
              error: function error(_error18) {
                _this24.dadosEmpty = true;

                if (_error18.error.hasOwnProperty('mensagem')) {
                  _this24.pnotifyService.error(_error18.error.mensagem);
                } else {
                  _this24.pnotifyService.error();
                }
              }
            });
          }
        }, {
          key: "onReprovarAnalista",
          value: function onReprovarAnalista(dados) {
            var _this25 = this;

            dados.clicado = true;
            var formReprovar = {
              codComissaoRepresentante: dados.codComissaoRepresentante,
              descMotivo: this.formReprovar.value.descMotivo
            };

            if (this.formReprovar.value.descMotivo == '') {
              this.pnotifyService.notice('Motivo da reprovação é obrigatório!');
              return;
            }

            this.gestaoComissionamentosService.postReprovar(formReprovar).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              _this25.loaderNavbar = false;
              _this25.dadosLoaded = true;
              dados.clicado = false;
            })).subscribe({
              next: function next(response) {
                if (response.success === true) {
                  _this25.pnotifyService.success('Comissão reprovada com sucesso!');

                  dados.analista = 'false';
                } else if (response.hasOwnProperty('success') && response.success === false) {
                  _this25.dadosEmpty = true;
                } else {
                  _this25.pnotifyService.error();

                  _this25.dadosEmpty = true;
                }
              },
              error: function error(_error19) {
                _this25.dadosEmpty = true;

                if (_error19.error.hasOwnProperty('mensagem')) {
                  _this25.pnotifyService.error(_error19.error.mensagem);
                } else {
                  _this25.pnotifyService.error();
                }
              }
            });
          }
        }, {
          key: "onAprovarEscritorio",
          value: function onAprovarEscritorio(dados) {
            var _this26 = this;

            dados.clicado = true;
            this.gestaoComissionamentosService.postAprovar(dados).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              _this26.loaderNavbar = false;
              _this26.dadosLoaded = true;
              dados.clicado = false;
              dados.notasSolicitadas = 'true';
            })).subscribe({
              next: function next(response) {
                if (response.success === true) {
                  _this26.pnotifyService.success('Comissão aprovada com sucesso!');

                  dados.analista = 'true';
                } else if (response.hasOwnProperty('success') && response.success === false) {
                  _this26.dadosEmpty = true;
                } else {
                  _this26.pnotifyService.error();

                  _this26.dadosEmpty = true;
                }
              },
              error: function error(_error20) {
                _this26.dadosEmpty = true;

                if (_error20.error.hasOwnProperty('mensagem')) {
                  _this26.pnotifyService.error(_error20.error.mensagem);
                } else {
                  _this26.pnotifyService.error();
                }
              }
            });
          }
        }, {
          key: "onAprovarGerente",
          value: function onAprovarGerente(dados) {
            var _this27 = this;

            dados.clicado = true;
            this.gestaoComissionamentosService.postAprovar(dados).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              _this27.loaderNavbar = false;
              _this27.dadosLoaded = true;
              dados.clicado = false;
            })).subscribe({
              next: function next(response) {
                if (response.success === true) {
                  dados.gerente = 'true';

                  _this27.pnotifyService.success('Comissão aprovada com sucesso!');
                } else if (response.hasOwnProperty('success') && response.success === false) {
                  _this27.dadosEmpty = true;
                } else {
                  _this27.pnotifyService.error();

                  _this27.dadosEmpty = true;
                }
              },
              error: function error(_error21) {
                _this27.dadosEmpty = true;

                if (_error21.error.hasOwnProperty('mensagem')) {
                  _this27.pnotifyService.error(_error21.error.mensagem);
                } else {
                  _this27.pnotifyService.error();
                }
              }
            });
          }
        }, {
          key: "onReprovarGerente",
          value: function onReprovarGerente(dados) {
            var _this28 = this;

            dados.clicado = true;
            var formReprovar = {
              codComissaoRepresentante: dados.codComissaoRepresentante,
              descMotivo: this.formReprovar.value.descMotivo
            };

            if (this.formReprovar.value.descMotivo == '') {
              this.pnotifyService.notice('Motivo da reprovação é obrigatório!');
              return;
            }

            this.gestaoComissionamentosService.postReprovar(formReprovar).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              _this28.loaderNavbar = false;
              _this28.dadosLoaded = true;
              dados.clicado = false;
            })).subscribe({
              next: function next(response) {
                if (response.success === true) {
                  dados.gerente = 'false';

                  _this28.pnotifyService.success('Comissão reprovada com sucesso!');
                } else if (response.hasOwnProperty('success') && response.success === false) {
                  _this28.dadosEmpty = true;
                } else {
                  _this28.pnotifyService.error();

                  _this28.dadosEmpty = true;
                }
              },
              error: function error(_error22) {
                _this28.dadosEmpty = true;

                if (_error22.error.hasOwnProperty('mensagem')) {
                  _this28.pnotifyService.error(_error22.error.mensagem);
                } else {
                  _this28.pnotifyService.error();
                }
              }
            });
          }
        }, {
          key: "onAprovarDiretor",
          value: function onAprovarDiretor(dados) {
            var _this29 = this;

            dados.clicado = true;
            this.gestaoComissionamentosService.postAprovar(dados).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              _this29.loaderNavbar = false;
              _this29.dadosLoaded = true;
              dados.clicado = false;
            })).subscribe({
              next: function next(response) {
                if (response.success === true) {
                  dados.diretor = 'true';

                  _this29.pnotifyService.success('Comissão aprovada com sucesso!');
                } else if (response.hasOwnProperty('success') && response.success === false) {
                  _this29.dadosEmpty = true;
                } else {
                  _this29.pnotifyService.error();

                  _this29.dadosEmpty = true;
                }
              },
              error: function error(_error23) {
                _this29.dadosEmpty = true;

                if (_error23.error.hasOwnProperty('mensagem')) {
                  _this29.pnotifyService.error(_error23.error.mensagem);
                } else {
                  _this29.pnotifyService.error();
                }
              }
            });
          }
        }, {
          key: "onReprovarDiretor",
          value: function onReprovarDiretor(dados) {
            var _this30 = this;

            dados.clicado = true;
            var formReprovar = {
              codComissaoRepresentante: dados.codComissaoRepresentante,
              descMotivo: this.formReprovar.value.descMotivo
            };

            if (this.formReprovar.value.descMotivo == '') {
              this.pnotifyService.notice('Motivo da reprovação é obrigatório!');
              return;
            }

            this.gestaoComissionamentosService.postReprovar(formReprovar).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              _this30.loaderNavbar = false;
              _this30.dadosLoaded = true;
              dados.clicado = false;
            })).subscribe({
              next: function next(response) {
                if (response.success === true) {
                  dados.diretor = 'false';

                  _this30.pnotifyService.success('Comissão reprovada com sucesso!');
                } else if (response.hasOwnProperty('success') && response.success === false) {
                  _this30.dadosEmpty = true;
                } else {
                  _this30.pnotifyService.error();

                  _this30.dadosEmpty = true;
                }
              },
              error: function error(_error24) {
                _this30.dadosEmpty = true;

                if (_error24.error.hasOwnProperty('mensagem')) {
                  _this30.pnotifyService.error(_error24.error.mensagem);
                } else {
                  _this30.pnotifyService.error();
                }
              }
            });
          }
        }, {
          key: "onNotasEscritorio",
          value: function onNotasEscritorio() {
            this.notasEscritorio = !this.notasEscritorio;
          }
        }, {
          key: "onNotasRepresentante",
          value: function onNotasRepresentante(dados) {
            var _this31 = this;

            this.loaderNavbar = true;
            dados.clicado = true;
            var notasRepresentante = {
              codComissaoRepresentante: dados.codComissaoRepresentante
            };
            this.gestaoComissionamentosService.getSolicitaNfRepresentante(notasRepresentante).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              _this31.loaderNavbar = false;
              _this31.dadosLoaded = true;
              dados.clicado = false;
            })).subscribe({
              next: function next(response) {
                if (response.success === true) {
                  _this31.pnotifyService.success('Notas solicitadas com sucesso');

                  dados.notasSolicitadas = 'true';

                  _this31.onFilter();
                } else if (response.hasOwnProperty('success') && response.success === false) {
                  _this31.dadosEmpty = true;
                } else {
                  _this31.pnotifyService.error('Erro ao solicitar notas, tente novamente.');

                  _this31.dadosEmpty = true;
                }
              },
              error: function error(_error25) {
                _this31.dadosEmpty = true;

                if (_error25.error.hasOwnProperty('mensagem')) {
                  _this31.pnotifyService.error(_error25.error.mensagem);
                } else {
                  _this31.pnotifyService.error('Erro ao solicitar notas, tente novamente.');
                }
              }
            });
          }
        }, {
          key: "onEnviarNotas",
          value: function onEnviarNotas(dados, index) {
            if (dados.anexos) {
              if (dados.anexos.length == 0) {
                dados.anexos = this.arrayAnexos;
              }
            }

            this.onPostAnexos(dados.codComissaoRepresentante, dados, index);
          } // Outros

        }, {
          key: "onPageChanged",
          value: function onPageChanged(event) {
            if (this.form.value.pagina != event.page) {
              this.detailPanelService.hide();
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
              if (grupo.codRepresentantes === this.dados[i].codRepresentantes) {
                this.dados[i].codSituacao = grupo.codSituacao;
                return;
              }
            }
          } //modais

        }, {
          key: "openModalAnalista",
          value: function openModalAnalista(analista) {
            this.modalRef = this.bsModalService.show(analista);
          }
        }, {
          key: "openModalGerente",
          value: function openModalGerente(gerente) {
            this.modalRef = this.bsModalService.show(gerente);
          }
        }, {
          key: "openModalDiretor",
          value: function openModalDiretor(diretor) {
            this.modalRef = this.bsModalService.show(diretor);
          }
        }, {
          key: "openModalDetails",
          value: function openModalDetails(details) {
            this.modalRef = this.bsModalService.show(details);
          }
        }, {
          key: "openModalDetailsUnidades",
          value: function openModalDetailsUnidades(detailsUnidades) {
            this.modalRef = this.bsModalService.show(detailsUnidades, {
              "class": 'modal-xl'
            });
          }
        }, {
          key: "openModalDetailsRos",
          value: function openModalDetailsRos(detailsRos) {
            this.modalRef = this.bsModalService.show(detailsRos, {
              "class": 'modal-xl'
            });
          }
        }, {
          key: "openModalHistorico",
          value: function openModalHistorico(historico) {
            this.modalRef = this.bsModalService.show(historico, {
              "class": 'modal-xl'
            });
          }
        }, {
          key: "openModalValores",
          value: function openModalValores(valores) {
            this.modalRef = this.bsModalService.show(valores);
          }
        }, {
          key: "openModalAjudaCustos",
          value: function openModalAjudaCustos(custos) {
            this.modalRef = this.bsModalService.show(custos);
          }
        }, {
          key: "closeModal",
          value: function closeModal(modalRef) {
            this.modalRef.hide();
          } // Tratamento de erros
          //  Erros form

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
          } // Erros formInputs

        }, {
          key: "onFieldErrorInputs",
          value: function onFieldErrorInputs(field) {
            if (this.onFieldInvalidInputs(field)) {
              return 'is-invalid';
            }

            return '';
          }
        }, {
          key: "onFieldInvalidInputs",
          value: function onFieldInvalidInputs(field) {
            field = this.formInputs.get(field);

            if (field.errors != null) {
              if (field.errors.hasOwnProperty('required') && field.touched) {
                return 'required';
              }
            }

            return '';
          }
        }, {
          key: "onFieldRequiredInputs",
          value: function onFieldRequiredInputs(field) {
            var required = false;
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();

            if (this.formInputs.controls[field].validator) {
              var validationResult = this.formInputs.controls[field].validator(formControl);
              required = validationResult !== null && validationResult.required === true;
            }

            if (required) {
              return 'is-required';
            }
          } // VALIDAÇÕES
          // VALIDA BARRA

        }, {
          key: "validaBarraAzul",
          value: function validaBarraAzul(dados) {
            var valida = false;

            if ((dados.salvo === undefined || dados.salvo === null || !dados.salvo) && dados.analista != 'true' && dados.analista != 'false' && dados.gerente != 'true' && dados.gerente != 'false' && dados.diretor != 'true' && dados.diretor != 'false' && dados.anexoEnviado != 'true' && dados.anexoEnviado != 'false' && dados.valoresEnviados != 'true' && dados.valoresEnviados != 'false') {
              valida = true;
            }

            return valida;
          }
        }, {
          key: "validaBarraVerde",
          value: function validaBarraVerde(dados) {
            var valida = false;

            if (dados.salvo === 'true' || dados.analista === 'true' || dados.gerente === 'true' || dados.diretor === 'true' || dados.anexoEnviado === 'true' || dados.valoresEnviados === 'true') {
              valida = true;
            }

            return valida;
          }
        }, {
          key: "validaBarraVermelha",
          value: function validaBarraVermelha(dados) {
            var valida = false;

            if (dados.salvo === 'false' || dados.analista === 'false' || dados.gerente === 'false' || dados.diretor === 'false') {
              valida = true;
            }

            return valida;
          } // VALIDA UNIDADE

        }, {
          key: "validaUnidade1",
          value: function validaUnidade1(dados, item) {
            var valida = false;

            if (!this.profile.analistaMarketing && item.codTipoPagamento != null && item.valorBase > 0 || this.profile.analistaMarketing && item.codTipoPagamento != null && item.valorBase > 0) {
              valida = true;
            }

            return valida;
          }
        }, {
          key: "validaUnidadeRo",
          value: function validaUnidadeRo(dados, item) {
            var valida = false;

            if (!this.profile.analistaMarketing && item.codTipoPagamento != null && item.valorBase == 0 && item.unidade == 'RO' || this.profile.analistaMarketing && item.codTipoPagamento != null && item.valorBase == 0 && item.unidade == 'RO') {
              valida = true;
            }

            return valida;
          }
        }, {
          key: "validaUnidade2",
          value: function validaUnidade2(dados, item) {
            var valida = false;

            if (!this.profile.analistaMarketing && item.codTipoPagamento != null && item.valorBase == 0 && item.unidade != 'RO' || this.profile.analistaMarketing && item.codTipoPagamento != null && item.valorBase == 0 && item.unidade != 'RO') {
              valida = true;
            }

            return valida;
          }
        }, {
          key: "validaUnidadeInput",
          value: function validaUnidadeInput(dados, item) {
            var valida = false;

            if (this.profile.analistaMarketing && item.codTipoPagamento == null) {
              valida = true;
            }

            return valida;
          } // VALOR BASE

        }, {
          key: "validaValorBase",
          value: function validaValorBase(dados, item) {
            var valida = false;

            if (this.action == 'update' && item.codTipoPagamento != null && (item.nrRo == null || item.nrRo == 0) && (item.valorAjudaCusto == 0 || item.valorAjudaCusto == undefined) && (item.valorDesconto == 0 || item.valorDesconto == undefined) || this.action == 'create' && item.codTipoPagamento != null && (item.nrRo == null || item.nrRo == 0) && (item.valorAjudaCusto == 0 || item.valorAjudaCusto == undefined) && (item.valorDesconto == 0 || item.valorDesconto == undefined) && item.unidade != 'DBA' && item.unidade != 'PLANA AÇO') {
              valida = true;
            }

            return valida;
          }
        }, {
          key: "validaValorBaseVazio",
          value: function validaValorBaseVazio(dados, item) {
            var valida = false;

            if (!this.profile.analistaMarketing && item.codTipoPagamento != null && item.valorBase == 0 && (item.unidade != 'DBA' || item.unidade != 'PLANA AÇO') || this.profile.analistaMarketing && item.codTipoPagamento != null && item.valorBase == 0 && item.unidade != 'DBA' && item.unidade != 'PLANA AÇO') {
              valida = true;
            }

            return valida;
          }
        }, {
          key: "validaValorBaseInput",
          value: function validaValorBaseInput(dados, item) {
            var valida = false;

            if (this.action == 'create' && item.valorBase == 0 && item.valorDesconto == 0 && item.valorAjudaCusto == 0 && item.unidade != 'DBA' && item.unidade != 'PLANA AÇO') {
              valida = true;
            }

            return valida;
          }
        }, {
          key: "validaValorBaseInputVazio",
          value: function validaValorBaseInputVazio(dados, item) {
            var valida = false;

            if (this.action == 'create' && item.unidade === 'DBA' && item.unidade === 'PLANA AÇO') {
              valida = true;
            }

            return valida;
          }
        }, {
          key: "validaValorBaseInputDba",
          value: function validaValorBaseInputDba(dados, item) {
            var valida = false;

            if (this.action == 'create' && item.unidade === 'DBA' && item.unidade != 'PLANA AÇO' && this.action === 'create') {
              valida = true;
            }

            return valida;
          }
        }, {
          key: "validaValorBaseInputAco",
          value: function validaValorBaseInputAco(dados, item) {
            var valida = false;

            if (this.action == 'create' && item.unidade != 'DBA' && item.unidade === 'PLANA AÇO' && this.action === 'create') {
              valida = true;
            }

            return valida;
          } // VALOR DESCONTO

        }, {
          key: "validaDesconto",
          value: function validaDesconto(dados, item) {
            var valida = false;

            if (this.action == 'update' && item.valorDesconto < 0 || this.action == 'create' && item.valorBase == 0 && item.valorDesconto > 0 && item.unidade != 'RO') {
              valida = true;
            }

            return valida;
          }
        }, {
          key: "validaDescontoVazio",
          value: function validaDescontoVazio(dados, item) {
            var valida = false;

            if (!this.profile.analistaMarketing && item.valorBase > 0 && (item.unidade != 'DBA' || item.unidade != 'PLANA AÇO') || this.profile.analistaMarketing && item.valorBase > 0 || item.valorDesconto == 0 && item.valorAjudaCusto > 0 || item.unidade === 'DBA' || item.unidade === 'PLANA AÇO') {
              valida = true;
            }

            return valida;
          }
        }, {
          key: "validaDescontoInput",
          value: function validaDescontoInput(dados, item) {
            var valida = false;

            if (this.action == 'create' && item.valorBase == 0 && (item.valorAjudaCusto == 0 || item.valorAjudaCusto == undefined) && item.nrRo > 0 && item.unidade != 'DBA' && item.unidade != 'PLANA AÇO') {
              valida = true;
            }

            return valida;
          } // VALIDA AJUDA CUSTO
          // this.action == 'create' && item.valorBase == 0 &&
          //   item.valorDesconto == 0 && (item.unidade != 'DBA' && item.unidade != 'PLANA AÇO') &&
          //   (item.nrRo == null || (item.valorAjudaCusto > 0))

        }, {
          key: "validaAjudaCusto",
          value: function validaAjudaCusto(dados, item) {
            var valida = false;

            if (item.valorAjudaCusto > 0) {
              valida = true;
            }

            return valida;
          }
        }, {
          key: "validaAjudaCustoVazio",
          value: function validaAjudaCustoVazio(dados, item) {
            var valida = false;

            if (!this.profile.analistaMarketing && item.valorBase > 0 || this.profile.analistaMarketing && item.valorBase > 0 || this.profile.analistaMarketing && item.nrRo > 0 || item.valorDesconto < 0 && this.action == 'update' && item.valorAjudaCusto == 0 || item.valorDesconto > 0 && this.action == 'create' || (item.unidade === 'DBA' || item.unidade === 'PLANA AÇO') && item.valorBase == 0) {
              valida = true;
            }

            return valida;
          } // validaAjudaCustoInput(dados, item) {
          //   let valida = false;
          //   if (
          //     (item.unidade == 'DBA' || item.unidade == 'PLANA AÇO') &&
          //     this.action == 'update') {
          //       valida = true
          //   }
          //   return valida
          // }

        }, {
          key: "validaPercentual",
          value: function validaPercentual(dados, item) {
            var valida = false;

            if ((item.unidade == 'DBA' || item.unidade == 'PLANA AÇO') && this.action == 'update') {
              valida = true;
            }

            return valida;
          }
        }, {
          key: "validaPercentualVazio",
          value: function validaPercentualVazio(dados, item) {
            var valida = false;

            if (item.valorBase > 0 && item.unidade != 'DBA' && item.unidade != 'PLANA AÇO' || item.valorDesconto < 0 && this.action == 'update' || item.valorAjudaCusto > 0 || item.valorDesconto > 0 && this.action == 'create' || item.unidade === 'RO') {
              valida = true;
            }

            return valida;
          }
        }, {
          key: "validaPercentualInput",
          value: function validaPercentualInput(dados, item) {
            var valida = false;

            if (this.action == 'create' && item.valorBase == 0 && item.valorDesconto == 0 && item.valorAjudaCusto == 0 && item.unidade != 'DBA' && item.unidade != 'PLANA AÇO') {
              valida = true;
            }

            return valida;
          }
        }, {
          key: "validaPercentualInputVazio",
          value: function validaPercentualInputVazio(dados, item) {
            var valida = false;

            if (this.action == 'create' && (item.unidade === 'DBA' || item.unidade === 'PLANA AÇO')) {
              valida = true;
            }

            return valida;
          } // VALIDA BUTTON CALCULAR

        }, {
          key: "validaButtonCalcular",
          value: function validaButtonCalcular(dados, item) {
            var valida = false;

            if (item.unidade == 'DBA' || item.unidade == 'PLANA AÇO' || item.unidade === 'RO' || item.valorDesconto < 0 && this.action == 'update') {
              valida = true;
            }

            return valida;
          }
        }, {
          key: "validaButtonCalcularVazio",
          value: function validaButtonCalcularVazio(dados, item) {
            var valida = false;

            if ((item.valorBase == 0 && item.unidade != 'RO' || item.valorBase > 0 && item.valorAjudaCusto == 0 || item.valorBase > 0 && item.valorDesconto == 0) && item.unidade != 'DBA' && item.unidade != 'PLANA AÇO' && this.action === 'create') {
              valida = true;
            }

            return valida;
          } // VALIDA BUTTON DELETAR

        }, {
          key: "validaButtonDelete",
          value: function validaButtonDelete(dados, item) {
            var valida = false;

            if (this.action == 'create' && item.valorBase == 0 && item.unidade != 'DBA' && item.unidade != 'PLANA AÇO' && item.unidade != 'RO') {
              valida = true;
            }

            return valida;
          } // VALIDA DADOS SALVO

        }, {
          key: "validaDadosSalvo",
          value: function validaDadosSalvo(dados) {
            var valida = false;

            if (this.visualizar && dados.salvo === undefined || dados.salvo === null || !dados.salvo) {
              valida = true;
            }

            return valida;
          }
        }, {
          key: "anexos",
          get: function get() {
            return this.formInputs.get('anexos');
          }
        }]);

        return ComercialComissoesGestaoComissionamentosFormularioComponent;
      }();

      ComercialComissoesGestaoComissionamentosFormularioComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsLocaleService"]
        }, {
          type: _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_16__["DateService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_15__["DetailPanelService"]
        }, {
          type: _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_14__["PNotifyService"]
        }, {
          type: _gestao_comissionamentos_service__WEBPACK_IMPORTED_MODULE_19__["ComercialComissoesGestaoComissionamentosService"]
        }, {
          type: _shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_12__["AtividadesService"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__["BsModalService"]
        }, {
          type: _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_13__["ConfirmModalService"]
        }, {
          type: _shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_17__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"]
        }, {
          type: _gestao_associacoes_coordenadores_escritorios_coordenadores_escritorios_service__WEBPACK_IMPORTED_MODULE_18__["ComercialGestaoAssociacoesCoordenadoresEscritoriosService"]
        }];
      };

      ComercialComissoesGestaoComissionamentosFormularioComponent.propDecorators = {
        scrollToFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['scrollToFilter', {}]
        }]
      };
      ComercialComissoesGestaoComissionamentosFormularioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-representantes-programacao-pagamentos-formulario',
        template: _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsLocaleService"], _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_16__["DateService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_15__["DetailPanelService"], _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_14__["PNotifyService"], _gestao_comissionamentos_service__WEBPACK_IMPORTED_MODULE_19__["ComercialComissoesGestaoComissionamentosService"], _shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_12__["AtividadesService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__["BsModalService"], _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_13__["ConfirmModalService"], _shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_17__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"], _gestao_associacoes_coordenadores_escritorios_coordenadores_escritorios_service__WEBPACK_IMPORTED_MODULE_18__["ComercialGestaoAssociacoesCoordenadoresEscritoriosService"]])], ComercialComissoesGestaoComissionamentosFormularioComponent);
      /***/
    },

    /***/
    "zd8m":
    /*!*****************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/comissoes/representantes/gestao-comissionamentos/lista/lista.component.html ***!
      \*****************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function zd8m(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<!-- <loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen> -->\n<app-header appTitle=\"Representantes\">\n  <!-- *ngIf=\"profile.analistaMarketing\" -->\n  <button\n    *ngIf=\"profile.analistaMarketing\"\n    type=\"button\"\n    [routerLink]=\"['../novo']\">\n    Adicionar\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"onFilter()\">\n    Filtrar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" >\n  <div class=\"row\" >\n    <div class=\"col\">\n      <advanced-filter>\n        <form [formGroup]=\"form\" autocomplete=\"off\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-lg-2\">\n              <label for=\"dtInicio\">Data Inicio</label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\n                </div>\n                  <input\n                    class=\"form-control\"\n                    id=\"dtInicio\"\n                    type=\"text\"\n                    formControlName=\"dtInicio\"\n                    bsDatepicker\n                    [ngClass]=\"onFieldError('dtInicio') + ' ' + onFieldRequired('dtInicio')\">\n              </div>\n\n            </div>\n\n            <div class=\"form-group col-lg-2\">\n              <label for=\"dtFim\">Data Fim</label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\n                </div>\n                  <input\n                    class=\"form-control\"\n                    id=\"dtFim\"\n                    type=\"text\"\n                    formControlName=\"dtFim\"\n                    bsDatepicker\n                    [ngClass]=\"onFieldError('dtFim') + ' ' + onFieldRequired('dtFim')\">\n              </div>\n            </div>\n            <!-- <div class=\"form-group col-lg-6\">\n              <label for=\"nomeGestao\">Descrição da tabela</label>\n              <input\n                  class=\"form-control\"\n                  id=\"nomeGestao\"\n                  type=\"text\"\n                  formControlName=\"nomeGestao\"\n                  >\n            </div> -->\n\n          </div>\n        </form>\n      </advanced-filter>\n    </div>\n  </div>\n  <empty-result message=\"Nenhuma informação encontrada\" *ngIf=\"dadosEmpty && dadosLoaded\"></empty-result>\n  <div class=\"row\" >\n    <div class=\"col\">\n      <custom-table [config]=\"tableConfig\" *ngIf=\"dados.length > 0 && !dadosEmpty\">\n        <ng-template #thead let-thead>\n          <tr >\n\n            <th scope=\"col-10\">Código</th>\n\n            <!-- <th scope=\"col-6\">Descrição Tabela</th>\n\n            <th scope=\"col-2\">Data Lançamento</th>\n\n            <th scope=\"col-3\">Usuário Lançamento</th> -->\n\n            <th scope=\"col-2\"\n            >\n            </th>\n            <!-- [hidden]=\"showDetailPanel\" -->\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr *ngFor=\"let item of dados; let i = index;\">\n            <td class=\"hover\">\n              {{ item.mesComissao }}\n            </td>\n            <!-- <td class=\"hover\">\n              {{ item.nomeGestao }}\n            </td>\n            <td class=\"hover\">\n              {{ item.dataCadastro | date: 'dd/MM/yyyy' }}\n            </td>\n            <td class=\"hover\">\n              {{ item.nomeUsuario }}\n            </td> -->\n            <td class=\"text-right\">\n              <!-- <span\n                *ngIf=\"profile.analistaMarketing\"\n                class=\"mr-3\" tooltip=\"Editar\"\n                placement=\"left\"\n                container=\"body\">\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onEdit(item)\">\n                    <i class=\"fas fa-edit\"></i>\n                  </button>\n              </span> -->\n\n              <!-- *ngIf=\"!profile.analistaMarketing\" -->\n              <span\n              class=\"mr-3\"\n              tooltip=\"Mais Detalhes\"\n              placement=\"left\"\n              container=\"body\">\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onEdit(item)\">\n                  <i class=\"fas fa-plus\"></i>\n                </button>\n            </span>\n            </td>\n          </tr>\n        </ng-template>\n      </custom-table>\n      <div class=\"d-flex justify-content-center mt-3\" *ngIf=\"totalItems > itemsPerPage && !loaderNavbar\">\n        <pagination\n          [maxSize]=\"maxSize\"\n          [(totalItems)]=\"totalItems\"\n          (pageChanged)=\"onPageChanged($event)\"\n          [(itemsPerPage)]=\"itemsPerPage\"\n          [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPage\"\n          previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\"\n          lastText=\"&raquo;\">\n        </pagination>\n      </div>\n    </div>\n  </div>\n</app-body>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=gestao-comissionamentos-gestao-comissionamentos-module-es5.js.map