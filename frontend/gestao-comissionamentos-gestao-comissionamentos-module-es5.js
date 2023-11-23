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


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<app-header [appTitle]=\"appTitle\">\r\n<!-- <button\r\n  *ngIf=\"profile.gerenteEscritorio && notasEscritorio\"\r\n  type=\"button\"\r\n  (click)=\"onNotasEscritorio()\">\r\n  Solicitar Notas Escritório\r\n</button>\r\n<button\r\n  *ngIf=\"profile.gerenteEscritorio && !notasEscritorio\"\r\n  type=\"button\">\r\n  Notas Solicitadas\r\n</button> -->\r\n<!-- *ngIf=\"action === 'update'\" -->\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onFilter()\">\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" >\r\n  <div class=\"row\" >\r\n    <div class=\"col\">\r\n      <advanced-filter>\r\n        <form [formGroup]=\"form\" autocomplete=\"off\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-2\" [hidden]=\"action === 'update'\">\r\n              <label for=\"dtInicioVigencia\">Data Inicio</label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\r\n                </div>\r\n                  <input\r\n                  class=\"form-control\"\r\n                  id=\"dtInicioVigencia\"\r\n                  type=\"text\"\r\n                  formControlName=\"dtInicioVigencia\"\r\n                  (change)=\"checkValidatorsData()\"\r\n                  bsDatepicker>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group col-lg-2\" [hidden]=\"action === 'create'\">\r\n              <label for=\"mesReferente\">Mês Referência</label>\r\n                <input\r\n                  class=\"form-control\"\r\n                  id=\"mesReferente\"\r\n                  type=\"text\"\r\n                  formControlName=\"mesReferente\"\r\n                  [readonly]=\"true\">\r\n            </div>\r\n\r\n            <div class=\"form-group col-lg-2\" [hidden]=\"action === 'update'\">\r\n              <label for=\"dtFimVigencia\">Data Fim</label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\r\n                </div>\r\n                  <input\r\n                    class=\"form-control\"\r\n                    id=\"dtFimVigencia\"\r\n                    type=\"text\"\r\n                    formControlName=\"dtFimVigencia\"\r\n                    change=\"checkValidatorsData()\"\r\n                    bsDatepicker>\r\n              </div>\r\n\r\n            </div>\r\n\r\n            <!-- <div class=\"form-group col-lg-1\" [hidden]=\"action === 'create'\">\r\n              <label for=\"dtFimVigencia\">Dt Fim</label>\r\n              <input\r\n              value=\"{{ dataFinal | date: 'dd/MM/yyyy' }}\"\r\n              class=\"form-control\"\r\n              id=\"dtFimVigencia\"\r\n              type=\"text\"\r\n              formControlName=\"dtFimVigencia\"\r\n              bsDatepicker\r\n              [readonly]=\"true\">\r\n            </div> -->\r\n\r\n            <div class=\"form-group col-lg-3\" [hidden]=\"action === 'create'\">\r\n              <label for=\"codEscritorio\">Escritório</label>\r\n              <ng-select\r\n                  type='text'\r\n                  [items]=\"escritorios\"\r\n                  [searchable]=\"true\"\r\n                  [clearable]=\"false\"\r\n                  [virtualScroll]=\"true\"\r\n                  [hideSelected]=\"true\"\r\n                  placeholder=\"Selecione...\"\r\n                  bindLabel=\"nomeEscritorio\"\r\n                  bindValue=\"idEscritorio\"\r\n                  formControlName=\"codEscritorio\"\r\n                  [readonly]=\"profile.gerenteEscritorio || action === 'create'\"\r\n                  >\r\n                </ng-select>\r\n\r\n            </div>\r\n            <div class=\"form-group col-lg-4\" [hidden]=\"action === 'create'\">\r\n              <label for=\"codRepresentante\">Representante</label>\r\n              <ng-select\r\n                  type='text'\r\n                  [items]=\"representantes\"\r\n                  [searchable]=\"true\"\r\n                  [clearable]=\"false\"\r\n                  placeholder=\"Selecione...\"\r\n                  bindLabel=\"nomeRepresentante\"\r\n                  bindValue=\"codRepresentante\"\r\n                  formControlName=\"codRepresentante\"\r\n                  [readonly]=\"action === 'create'\">\r\n                </ng-select>\r\n            </div>\r\n\r\n            <div class=\"form-group col-lg-3\" [hidden]=\"action === 'create'\">\r\n              <label for=\"codStatus\">Status</label>\r\n              <ng-select\r\n                type='text'\r\n                [items]=\"situacao\"\r\n                [searchable]=\"true\"\r\n                [clearable]=\"false\"\r\n                placeholder=\"Selecione...\"\r\n                bindLabel=\"nomeSituacao\"\r\n                bindValue=\"codSituacao\"\r\n                formControlName=\"codStatus\"\r\n                [readonly]=\"!readonly\"\r\n              >\r\n              </ng-select>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </advanced-filter>\r\n    </div>\r\n  </div>\r\n\r\n  <empty-result message=\"Nenhuma informação encontrada\" *ngIf=\"dadosEmpty && dadosLoaded\"></empty-result>\r\n<div class=\"\"*ngIf=\"dadosComissao.length > 0 && !dadosEmpty\">\r\n  <div class=\"mb-2 border rounded border-light mb-3\" *ngFor=\"let dados of dadosComissao; let indice = index;\">\r\n    <custom-table [config]=\"tableConfigAnexos\">\r\n      <ng-template #thead let-thead>\r\n        <tr *ngIf=\"validaBarraAzul(dados)\">\r\n            <th\r\n            class=\"tdPrimaryLarge rounded-right rounded-left border-light\"\r\n\r\n            *ngIf=\"action == 'create'\">\r\n              <div style=\"text-transform: uppercase; font-weight: bold; font-size: 0.8rem; \">\r\n                  {{ dados.nomeRepresentante }}\r\n              </div>\r\n            </th>\r\n\r\n            <th\r\n            class=\"tdPrimaryLarge\"\r\n\r\n            *ngIf=\"action == 'update'\">\r\n              <div style=\"text-transform: uppercase; font-weight: bold; font-size: 0.8rem; \">\r\n                  {{ dados.nomeRepresentante }}\r\n              </div>\r\n              <div style=\"text-transform: uppercase; font-size: 0.7rem; \">\r\n                Período: DE {{ dados.dataInicial | date: 'dd/MM/yyyy' }} a {{ dados.dataFinal | date: 'dd/MM/yyyy' }}\r\n              </div>\r\n            </th>\r\n\r\n            <!-- input gerente de escritório -->\r\n            <th class=\"tdPrimarySmall\">\r\n            </th>\r\n\r\n           <!-- inputs gerente fiscal -->\r\n            <th class=\"tdPrimarySmall\">\r\n              <btn-icon\r\n                  *ngIf=\"profile.gerenteFiscal && dados.valoresEnviados !== 'true' && action === 'update'\"\r\n                  icon=\"fas fa-plus-square\"\r\n                  size=\"medium\"\r\n                  color=\"primary\"\r\n                  tooltip=\"Adicionar Valores\"\r\n                  (click)=\"openModalValores(valores, indice); setFormValores(dados)\">\r\n              </btn-icon>\r\n\r\n              <btn-icon\r\n                  *ngIf=\"profile.gerenteFiscal && dados.valoresEnviados === 'true' && action === 'update'\"\r\n                  icon=\"fas fa-arrow-circle-right\"\r\n                  size=\"medium\"\r\n                  color=\"primary\"\r\n                  tooltip=\"Valores adicionados\">\r\n              </btn-icon>\r\n            </th>\r\n\r\n            <!-- notas -->\r\n            <th class=\"tdPrimarySmall\" >\r\n              <btn-icon\r\n                  *ngIf=\"profile.gerenteEscritorio && dados.notasSolicitadas != 'true' && action === 'update' && (dados.codSituacao == 1 && dados.emiteNota == 1)\"\r\n                  icon=\"fas fa-clipboard\"\r\n                  size=\"medium\"\r\n                  color=\"primary\"\r\n                  tooltip=\"Solicitar Notas\"\r\n                  [hidden]=\"dados.clicado\"\r\n                  id=\"notas\"\r\n                  (click)=\"onNotasRepresentante(dados)\">\r\n              </btn-icon>\r\n\r\n              <btn-icon\r\n                  *ngIf=\"profile.gerenteEscritorio && dados.notasSolicitadas === 'true' && action === 'update' || (dados.codSituacao == 2 && dados.emiteNota == 1)\"\r\n                  icon=\"fas fa-clipboard-check\"\r\n                  size=\"medium\"\r\n                  color=\"success\"\r\n                  tooltip=\"Notas Solicitadas\"\r\n                  id=\"notas\">\r\n              </btn-icon>\r\n\r\n              <btn-icon\r\n                  *ngIf=\"profile.gerenteEscritorio && dados.notasSolicitadas != 'true' && action === 'update' && (dados.codSituacao == 1 && dados.emiteNota == 0)\"\r\n                  icon=\"fas fa-check\"\r\n                  size=\"medium\"\r\n                  color=\"success\"\r\n                  tooltip=\"Aprovar\"\r\n                  id=\"notas\"\r\n                  (click)=\"onAprovarEscritorio(dados)\">\r\n              </btn-icon>\r\n\r\n              <btn-icon\r\n                  *ngIf=\"profile.gerenteEscritorio && dados.notasSolicitadas == 'true' && action === 'update' && (dados.codSituacao == 3 && dados.emiteNota == 0)\"\r\n                  icon=\"fas fa-check\"\r\n                  size=\"medium\"\r\n                  color=\"success\"\r\n                  tooltip=\"Aprovado\"\r\n                  id=\"notas\">\r\n              </btn-icon>\r\n            </th>\r\n\r\n            <!-- aprovar/reprovar -->\r\n            <!-- *ngFor=\"let item of dados.info; let i = index;\" -->\r\n            <th class=\"tdPrimarySmall\">\r\n              <!-- Analista de Marketing -->\r\n              <btn-icon\r\n                  *ngIf=\"profile.analistaMarketing && (dados.analista != 'false' && dados.analista != 'true') && action === 'update' && dados.codSituacao == 3\"\r\n                  icon=\"fas fa-check\"\r\n                  size=\"medium\"\r\n                  color=\"success\"\r\n                  tooltip=\"Aprovar\"\r\n                  id=\"aprovado\"\r\n                  [hidden]=\"dados.clicado\"\r\n                  (click)=\"onAprovarAnalista(dados)\">\r\n              </btn-icon>\r\n              <btn-icon\r\n                  *ngIf=\"profile.analistaMarketing && (dados.analista != 'false' && dados.analista != 'true') && action === 'update' && dados.codSituacao == 3\"\r\n                  icon=\"fas fa-times\"\r\n                  size=\"medium\"\r\n                  color=\"danger\"\r\n                  tooltip=\"Reprovar\"\r\n                  id=\"reprovado\"\r\n                  [hidden]=\"dados.clicado\"\r\n                  (click)=\"openModalAnalista(analista);\">\r\n              </btn-icon>\r\n              <!-- && (item.aprovadoAnalista === undefined || item.aprovadoAnalista === 'false') -->\r\n              <btn-icon\r\n                  *ngIf=\"profile.analistaMarketing && dados.analista === 'false' && action === 'update'\"\r\n                  icon=\"fas fa-times\"\r\n                  size=\"medium\"\r\n                  color=\"danger\"\r\n                  tooltip=\"Reprovado\"\r\n                  id=\"reprovado\">\r\n              </btn-icon>\r\n              <!-- (item.aprovadoAnalista === undefined || item.aprovadoAnalista === 'true') -->\r\n              <btn-icon\r\n                  *ngIf=\"profile.analistaMarketing  && dados.analista === 'true' && action === 'update'\"\r\n                  icon=\"fas fa-check\"\r\n                  size=\"medium\"\r\n                  color=\"success\"\r\n                  tooltip=\"Aprovado\"\r\n                  id=\"aprovado\">\r\n              </btn-icon>\r\n\r\n              <!-- Gerente de Marketing -->\r\n              <btn-icon\r\n                  *ngIf=\"profile.gerenteMarketing &&\r\n                  !profile.analistaMarketing &&\r\n                  (dados.gerente != 'false' &&\r\n                  dados.gerente != 'true') &&\r\n                  action === 'update' &&\r\n                  dados.codSituacao == 4\"\r\n                  icon=\"fas fa-check\"\r\n                  size=\"medium\"\r\n                  color=\"success\"\r\n                  tooltip=\"Aprovar\"\r\n                  id=\"aprovado\"\r\n                  [hidden]=\"dados.clicado\"\r\n                  (click)=\"onAprovarGerente(dados)\">\r\n              </btn-icon>\r\n              <btn-icon\r\n                  *ngIf=\"profile.gerenteMarketing &&\r\n                  !profile.analistaMarketing &&\r\n                  (dados.gerente != 'false' &&\r\n                  dados.gerente != 'true') &&\r\n                  action === 'update' &&\r\n                  dados.codSituacao == 4\"\r\n                  icon=\"fas fa-times\"\r\n                  size=\"medium\"\r\n                  color=\"danger\"\r\n                  tooltip=\"Reprovar\"\r\n                  id=\"reprovado\"\r\n                  [hidden]=\"dados.clicado\"\r\n                  (click)=\"openModalGerente(gerente)\">\r\n              </btn-icon>\r\n              <!-- && (item.aprovadoGerente === undefined || item.aprovadoGerente === 'false' -->\r\n              <btn-icon\r\n                  *ngIf=\"profile.gerenteMarketing && dados.gerente === 'false' && action === 'update'\"\r\n                  icon=\"fas fa-times\"\r\n                  size=\"medium\"\r\n                  color=\"danger\"\r\n                  tooltip=\"Reprovado\"\r\n                  id=\"reprovado\">\r\n              </btn-icon>\r\n              <!-- && (item.aprovadoGerente === undefined || item.aprovadoGerente === 'true') -->\r\n              <btn-icon\r\n                  *ngIf=\"profile.gerenteMarketing && dados.gerente === 'true' && action === 'update'\"\r\n                  icon=\"fas fa-check\"\r\n                  size=\"medium\"\r\n                  color=\"success\"\r\n                  tooltip=\"Aprovado\"\r\n                  id=\"aprovado\">\r\n              </btn-icon>\r\n\r\n              <!-- Diretor Comercial -->\r\n              <btn-icon\r\n                  *ngIf=\"profile.diretorComercial && (dados.diretor != 'false' && dados.diretor != 'true') && action === 'update' && dados.codSituacao == 6\"\r\n                  icon=\"fas fa-check\"\r\n                  size=\"medium\"\r\n                  tooltip=\"Aprovar\"\r\n                  color=\"success\"\r\n                  id=\"aprovado\"\r\n                  [hidden]=\"dados.clicado\"\r\n                  (click)=\"onAprovarDiretor(dados)\">\r\n              </btn-icon>\r\n              <btn-icon\r\n                  *ngIf=\"profile.diretorComercial && (dados.diretor != 'false' && dados.diretor != 'true') && action === 'update' && dados.codSituacao == 6\"\r\n                  icon=\"fas fa-times\"\r\n                  size=\"medium\"\r\n                  color=\"danger\"\r\n                  tooltip=\"Reprovar\"\r\n                  id=\"reprovado\"\r\n                  [hidden]=\"dados.clicado\"\r\n                  (click)=\"openModalDiretor(diretor)\">\r\n              </btn-icon>\r\n              <!-- && (item.aprovadoDiretor === undefined || item.aprovadoDiretor === 'false') -->\r\n              <btn-icon\r\n                  *ngIf=\"profile.diretorComercial && dados.diretor === 'false' \"\r\n                  icon=\"fas fa-times\"\r\n                  size=\"medium\"\r\n                  color=\"danger\"\r\n                  tooltip=\"Reprovado\"\r\n                  id=\"reprovado\">\r\n              </btn-icon>\r\n              <!-- && (item.aprovadoDiretor === undefined || item.aprovadoDiretor === 'true') -->\r\n              <btn-icon\r\n                  *ngIf=\"profile.diretorComercial && dados.diretor === 'true' && action === 'update'\"\r\n                  icon=\"fas fa-check\"\r\n                  size=\"medium\"\r\n                  color=\"danger\"\r\n                  tooltip=\"Aprovado\"\r\n                  id=\"aprovado\">\r\n              </btn-icon>\r\n\r\n            </th>\r\n\r\n            <!-- mais detalhes -->\r\n            <th\r\n            *ngIf=\"action === 'update'\"\r\n            class=\"tdPrimarySmall\">\r\n              <btn-icon\r\n                  icon=\"fas fa-history\"\r\n                  type=\"button\"\r\n                  size=\"medium\"\r\n                  tooltip=\"Histórico\"\r\n                  (click)=\"openModalHistorico(historico); onHistoricoExclusao(dados.info);\">\r\n              </btn-icon>\r\n\r\n              <!-- <btn-icon\r\n                  class=\"ml-2\"\r\n                  icon=\"fas fa-plus\"\r\n                  size=\"small\"\r\n                  tooltip=\"Mais detalhes\"\r\n                  (click)=\"openModalDetails(details); openDetails(dados);\">\r\n              </btn-icon> -->\r\n            </th>\r\n\r\n        </tr>\r\n\r\n\r\n        <tr *ngIf=\"validaBarraVerde(dados)\">\r\n        <th\r\n          class=\"tdAprovedLarge\"\r\n          >\r\n          <div style=\"text-transform: uppercase; font-weight: bold; font-size: 0.8rem; \">\r\n              {{ dados.nomeRepresentante }}\r\n          </div>\r\n          <div style=\"text-transform: uppercase; font-size: 0.7rem; \">\r\n            Período: DE {{ dados.dataInicial | date: 'dd/MM/yyyy' }} a {{ dados.dataFinal | date: 'dd/MM/yyyy' }}\r\n          </div>\r\n        </th>\r\n\r\n          <!-- input gerente de escritório -->\r\n          <th class=\"tdAprovedSmall\">\r\n          </th>\r\n\r\n         <!-- inputs gerente fiscal -->\r\n          <th class=\"tdAprovedSmall\">\r\n            <btn-icon\r\n            *ngIf=\"profile.gerenteFiscal && dados.valoresEnviados !== 'true' && action === 'update'\"\r\n            icon=\"fas fa-plus-square\"\r\n            size=\"small\"\r\n            tooltip=\"Adicionar Valores\"\r\n            (click)=\"openModalValores(valores, indice); setFormValores(dados)\">\r\n        </btn-icon>\r\n\r\n        <btn-icon\r\n            *ngIf=\"profile.gerenteFiscal && dados.valoresEnviados === 'true' && action === 'update'\"\r\n            icon=\"fas fa-check\"\r\n            size=\"small\"\r\n            tooltip=\"Valores adicionados\">\r\n        </btn-icon>\r\n          </th>\r\n\r\n          <!-- notas -->\r\n          <th class=\"tdAprovedSmall\" >\r\n            <btn-icon\r\n                  *ngIf=\"profile.gerenteEscritorio && dados.notasSolicitadas != 'true' && action === 'update' && (dados.codSituacao == 1 && dados.emiteNota == 1)\"\r\n                  icon=\"fas fa-clipboard\"\r\n                  size=\"medium\"\r\n                  tooltip=\"Solicitar Notas\"\r\n                  id=\"notas\"\r\n                  (click)=\"onNotasRepresentante(dados)\">\r\n              </btn-icon>\r\n\r\n              <btn-icon\r\n                  *ngIf=\"profile.gerenteEscritorio && dados.notasSolicitadas === 'true' && action === 'update' && (dados.codSituacao == 2 && dados.emiteNota == 1)\"\r\n                  icon=\"fas fa-clipboard-check\"\r\n                  size=\"medium\"\r\n                  color=\"success\"\r\n                  tooltip=\"Notas Solicitadas\"\r\n                  id=\"notas\">\r\n              </btn-icon>\r\n\r\n              <btn-icon\r\n                  *ngIf=\"profile.gerenteEscritorio && dados.notasSolicitadas != 'true' && action === 'update' && (dados.codSituacao == 1 && dados.emiteNota == 0)\"\r\n                  icon=\"fas fa-check\"\r\n                  size=\"medium\"\r\n                  tooltip=\"Aprovar\"\r\n                  id=\"notas\">\r\n              </btn-icon>\r\n\r\n              <btn-icon\r\n                  *ngIf=\"profile.gerenteEscritorio && dados.notasSolicitadas != 'true' && action === 'update' && (dados.codSituacao == 3 && dados.emiteNota == 0)\"\r\n                  icon=\"fas fa-check\"\r\n                  size=\"medium\"\r\n                  tooltip=\"Aprovado\"\r\n                  id=\"notas\">\r\n              </btn-icon>\r\n\r\n        </th>\r\n\r\n\r\n          <!-- aprovar/reprovar -->\r\n          <!-- *ngFor=\"let item of dados.info; let i = index;\" -->\r\n          <th class=\"tdAprovedSmall\">\r\n              <!-- Analista de Marketing -->\r\n              <btn-icon\r\n                  *ngIf=\"profile.analistaMarketing && (dados.analista != 'false' && dados.analista != 'true') && action === 'update'\"\r\n                  icon=\"fas fa-check\"\r\n                  size=\"medium\"\r\n                  tooltip=\"Aprovar\"\r\n                  id=\"aprovado\"\r\n                  (click)=\"onAprovarAnalista(dados)\">\r\n              </btn-icon>\r\n              <btn-icon\r\n                  *ngIf=\"profile.analistaMarketing && (dados.analista != 'false' && dados.analista != 'true') && action === 'update'\"\r\n                  icon=\"fas fa-times\"\r\n                  size=\"medium\"\r\n                  tooltip=\"Reprovar\"\r\n                  id=\"reprovado\"\r\n                  (click)=\"openModalAnalista(analista);\">\r\n              </btn-icon>\r\n              <!-- && (item.aprovadoAnalista === undefined || item.aprovadoAnalista === 'false') -->\r\n              <btn-icon\r\n                  *ngIf=\"profile.analistaMarketing && dados.analista === 'false' && action === 'update'\"\r\n                  icon=\"fas fa-times\"\r\n                  size=\"medium\"\r\n                  tooltip=\"Reprovado\"\r\n                  id=\"reprovado\">\r\n              </btn-icon>\r\n              <!-- (item.aprovadoAnalista === undefined || item.aprovadoAnalista === 'true') -->\r\n              <btn-icon\r\n                  *ngIf=\"profile.analistaMarketing  && dados.analista === 'true' && action === 'update'\"\r\n                  icon=\"fas fa-check\"\r\n                  size=\"medium\"\r\n                  tooltip=\"Aprovado\"\r\n                  id=\"aprovado\">\r\n              </btn-icon>\r\n\r\n              <!-- Gerente de Marketing -->\r\n              <btn-icon\r\n              *ngIf=\"profile.gerenteMarketing &&\r\n              !profile.analistaMarketing &&\r\n              (dados.gerente != 'false' &&\r\n              dados.gerente != 'true') &&\r\n              action === 'update' &&\r\n              dados.codSituacao == 4\"\r\n              icon=\"fas fa-check\"\r\n              size=\"medium\"\r\n              color=\"success\"\r\n              tooltip=\"Aprovar\"\r\n              id=\"aprovado\"\r\n              [hidden]=\"dados.clicado\"\r\n              (click)=\"onAprovarGerente(dados)\">\r\n          </btn-icon>\r\n          <btn-icon\r\n              *ngIf=\"profile.gerenteMarketing &&\r\n              !profile.analistaMarketing &&\r\n              (dados.gerente != 'false' &&\r\n              dados.gerente != 'true') &&\r\n              action === 'update' &&\r\n              dados.codSituacao == 4\"\r\n              icon=\"fas fa-times\"\r\n              size=\"medium\"\r\n              color=\"danger\"\r\n              tooltip=\"Reprovar\"\r\n              id=\"reprovado\"\r\n              [hidden]=\"dados.clicado\"\r\n              (click)=\"openModalGerente(gerente)\">\r\n          </btn-icon>\r\n              <!-- && (item.aprovadoGerente === undefined || item.aprovadoGerente === 'false' -->\r\n              <btn-icon\r\n                  *ngIf=\"profile.gerenteMarketing && dados.gerente === 'false' && action === 'update'\"\r\n                  icon=\"fas fa-times\"\r\n                  size=\"medium\"\r\n                  tooltip=\"Reprovado\"\r\n                  id=\"reprovado\">\r\n              </btn-icon>\r\n              <!-- && (item.aprovadoGerente === undefined || item.aprovadoGerente === 'true') -->\r\n              <btn-icon\r\n                  *ngIf=\"profile.gerenteMarketing && dados.gerente === 'true' && action === 'update'\"\r\n                  icon=\"fas fa-check\"\r\n                  size=\"medium\"\r\n                  tooltip=\"Aprovado\"\r\n                  id=\"aprovado\">\r\n              </btn-icon>\r\n\r\n              <!-- Diretor Comercial -->\r\n              <btn-icon\r\n                  *ngIf=\"profile.diretorComercial && (dados.diretor != 'false' && dados.diretor != 'true') && action === 'update'\"\r\n                  icon=\"fas fa-check\"\r\n                  size=\"medium\"\r\n                  tooltip=\"Aprovar\"\r\n                  id=\"aprovado\"\r\n                  (click)=\"onAprovarDiretor(dados)\">\r\n              </btn-icon>\r\n              <btn-icon\r\n                  *ngIf=\"profile.diretorComercial && (dados.diretor != 'false' && dados.diretor != 'true') && action === 'update'\"\r\n                  icon=\"fas fa-times\"\r\n                  size=\"medium\"\r\n                  tooltip=\"Reprovar\"\r\n                  id=\"reprovado\"\r\n                  (click)=\"openModalDiretor(diretor)\">\r\n              </btn-icon>\r\n              <!-- && (item.aprovadoDiretor === undefined || item.aprovadoDiretor === 'false') -->\r\n              <btn-icon\r\n                  *ngIf=\"profile.diretorComercial && dados.diretor === 'false' \"\r\n                  icon=\"fas fa-times\"\r\n                  size=\"medium\"\r\n                  tooltip=\"Reprovado\"\r\n                  id=\"reprovado\">\r\n              </btn-icon>\r\n              <!-- && (item.aprovadoDiretor === undefined || item.aprovadoDiretor === 'true') -->\r\n              <btn-icon\r\n                  *ngIf=\"profile.diretorComercial && dados.diretor === 'true' && action === 'update'\"\r\n                  icon=\"fas fa-check\"\r\n                  size=\"medium\"\r\n                  tooltip=\"Aprovado\"\r\n                  id=\"aprovado\">\r\n              </btn-icon>\r\n\r\n            </th>\r\n\r\n          <!-- mais detalhes -->\r\n          <!-- <th\r\n          *ngIf=\"action === 'update'\"\r\n          class=\"tdAprovedSmall\">\r\n            <btn-icon\r\n                icon=\"fas fa-plus\"\r\n                size=\"small\"\r\n                tooltip=\"Mais detalhes\"\r\n                (click)=\"openModalDetails(details); openDetails(dados);\">\r\n            </btn-icon>\r\n          </th> -->\r\n      </tr>\r\n\r\n      <tr *ngIf=\"validaBarraVermelha(dados)\">\r\n        <th\r\n          class=\"tdReprovedLarge\">\r\n          <div style=\"text-transform: uppercase; font-weight: bold; font-size: 0.8rem; \">\r\n              {{ dados.nomeRepresentante }}\r\n          </div>\r\n          <div style=\"text-transform: uppercase; font-size: 0.7rem; \">\r\n            Período: DE {{ dados.dataInicial | date: 'dd/MM/yyyy' }} a {{ dados.dataFinal | date: 'dd/MM/yyyy' }}\r\n          </div>\r\n        </th>\r\n\r\n        <!-- input gerente de escritório -->\r\n        <th class=\"tdReprovedSmall\">\r\n        </th>\r\n\r\n       <!-- inputs gerente fiscal -->\r\n        <th class=\"tdReprovedSmall\">\r\n          <btn-icon\r\n              *ngIf=\"(profile.gerenteFiscal)\"\r\n              icon=\"fas fa-plus-square\"\r\n              size=\"small\"\r\n              tooltip=\"Adicionar Valores\"\r\n              (click)=\"openModalValores(valores, indice)\">\r\n          </btn-icon>\r\n        </th>\r\n\r\n        <!-- notas -->\r\n        <th class=\"tdReprovedSmall\">\r\n          <btn-icon\r\n                  *ngIf=\"profile.gerenteEscritorio && dados.notasSolicitadas != 'true' && action === 'update' && (dados.codSituacao == 1 && dados.emiteNota == 1)\"\r\n                  icon=\"fas fa-clipboard\"\r\n                  size=\"medium\"\r\n                  tooltip=\"Solicitar Notas\"\r\n                  id=\"notas\"\r\n                  (click)=\"onNotasRepresentante(dados)\">\r\n              </btn-icon>\r\n\r\n              <btn-icon\r\n                  *ngIf=\"profile.gerenteEscritorio && dados.notasSolicitadas === 'true' && action === 'update' && (dados.codSituacao == 2 && dados.emiteNota == 1)\"\r\n                  icon=\"fas fa-clipboard-check\"\r\n                  size=\"medium\"\r\n                  tooltip=\"Notas Solicitadas\"\r\n                  id=\"notas\">\r\n              </btn-icon>\r\n\r\n              <btn-icon\r\n                  *ngIf=\"profile.gerenteEscritorio && dados.notasSolicitadas != 'true' && action === 'update' && (dados.codSituacao == 1 && dados.emiteNota == 0)\"\r\n                  icon=\"fas fa-check\"\r\n                  size=\"medium\"\r\n                  tooltip=\"Aprovar\"\r\n                  id=\"notas\">\r\n              </btn-icon>\r\n\r\n              <btn-icon\r\n                  *ngIf=\"profile.gerenteEscritorio && dados.notasSolicitadas != 'true' && action === 'update' && (dados.codSituacao == 3 && dados.emiteNota == 0)\"\r\n                  icon=\"fas fa-check\"\r\n                  size=\"medium\"\r\n                  tooltip=\"Aprovado\"\r\n                  id=\"notas\">\r\n              </btn-icon>\r\n        </th>\r\n\r\n        <!-- aprovar/reprovar -->\r\n        <!-- *ngFor=\"let item of dados.info; let i = index;\" -->\r\n\r\n        <th class=\"tdReprovedSmall\">\r\n            <!-- Analista de Marketing -->\r\n            <btn-icon\r\n                *ngIf=\"profile.analistaMarketing && (dados.analista != 'false' && dados.analista != 'true') && action === 'update'\"\r\n                icon=\"fas fa-check\"\r\n                size=\"medium\"\r\n                tooltip=\"Aprovar\"\r\n                id=\"aprovado\"\r\n                (click)=\"onAprovarAnalista(dados)\">\r\n            </btn-icon>\r\n            <btn-icon\r\n                *ngIf=\"profile.analistaMarketing && (dados.analista != 'false' && dados.analista != 'true') && action === 'update'\"\r\n                icon=\"fas fa-times\"\r\n                size=\"medium\"\r\n                tooltip=\"Reprovar\"\r\n                id=\"reprovado\"\r\n                (click)=\"openModalAnalista(analista);\">\r\n            </btn-icon>\r\n            <!-- && (item.aprovadoAnalista === undefined || item.aprovadoAnalista === 'false') -->\r\n            <btn-icon\r\n                *ngIf=\"profile.analistaMarketing && dados.analista === 'false' && action === 'update'\"\r\n                icon=\"fas fa-times\"\r\n                size=\"medium\"\r\n                tooltip=\"Reprovado\"\r\n                id=\"reprovado\">\r\n            </btn-icon>\r\n            <!-- (item.aprovadoAnalista === undefined || item.aprovadoAnalista === 'true') -->\r\n            <btn-icon\r\n                *ngIf=\"profile.analistaMarketing  && dados.analista === 'true' && action === 'update'\"\r\n                icon=\"fas fa-check\"\r\n                size=\"medium\"\r\n                tooltip=\"Aprovado\"\r\n                id=\"aprovado\">\r\n            </btn-icon>\r\n\r\n            <!-- Gerente de Marketing -->\r\n            <btn-icon\r\n                *ngIf=\"profile.gerenteMarketing && (dados.gerente != 'false' && dados.gerente != 'true') && action === 'update'\"\r\n                icon=\"fas fa-check\"\r\n                size=\"medium\"\r\n                tooltip=\"Aprovar\"\r\n                id=\"aprovado\"\r\n                (click)=\"onAprovarGerente(dados)\">\r\n            </btn-icon>\r\n            <btn-icon\r\n            *ngIf=\"profile.gerenteMarketing && (dados.gerente != 'false' && dados.gerente != 'true') && action === 'update'\"\r\n                icon=\"fas fa-times\"\r\n                size=\"medium\"\r\n                tooltip=\"Reprovar\"\r\n                id=\"reprovado\"\r\n                (click)=\"openModalGerente(gerente)\">\r\n            </btn-icon>\r\n            <!-- && (item.aprovadoGerente === undefined || item.aprovadoGerente === 'false' -->\r\n            <btn-icon\r\n                *ngIf=\"profile.gerenteMarketing && dados.gerente === 'false' && action === 'update'\"\r\n                icon=\"fas fa-times\"\r\n                size=\"medium\"\r\n                tooltip=\"Reprovado\"\r\n                id=\"reprovado\">\r\n            </btn-icon>\r\n            <!-- && (item.aprovadoGerente === undefined || item.aprovadoGerente === 'true') -->\r\n            <btn-icon\r\n                *ngIf=\"profile.gerenteMarketing && dados.gerente === 'true' && action === 'update'\"\r\n                icon=\"fas fa-check\"\r\n                size=\"medium\"\r\n                tooltip=\"Aprovado\"\r\n                id=\"aprovado\">\r\n            </btn-icon>\r\n\r\n            <!-- Diretor Comercial -->\r\n            <btn-icon\r\n                *ngIf=\"profile.diretorComercial && (dados.diretor != 'false' && dados.diretor != 'true') && action === 'update'\"\r\n                icon=\"fas fa-check\"\r\n                size=\"medium\"\r\n                tooltip=\"Aprovar\"\r\n                id=\"aprovado\"\r\n                (click)=\"onAprovarDiretor(dados)\">\r\n            </btn-icon>\r\n            <btn-icon\r\n                *ngIf=\"profile.diretorComercial && (dados.diretor != 'false' && dados.diretor != 'true') && action === 'update'\"\r\n                icon=\"fas fa-times\"\r\n                size=\"medium\"\r\n                tooltip=\"Reprovar\"\r\n                id=\"reprovado\"\r\n                (click)=\"openModalDiretor(diretor)\">\r\n            </btn-icon>\r\n            <!-- && (item.aprovadoDiretor === undefined || item.aprovadoDiretor === 'false') -->\r\n            <btn-icon\r\n                *ngIf=\"profile.diretorComercial && dados.diretor === 'false' \"\r\n                icon=\"fas fa-times\"\r\n                size=\"medium\"\r\n                tooltip=\"Reprovado\"\r\n                id=\"reprovado\">\r\n            </btn-icon>\r\n            <!-- && (item.aprovadoDiretor === undefined || item.aprovadoDiretor === 'true') -->\r\n            <btn-icon\r\n                *ngIf=\"profile.diretorComercial && dados.diretor === 'true' && action === 'update'\"\r\n                icon=\"fas fa-check\"\r\n                size=\"medium\"\r\n                tooltip=\"Aprovado\"\r\n                id=\"aprovado\">\r\n            </btn-icon>\r\n\r\n          </th>\r\n\r\n        <!-- mais detalhes -->\r\n        <!-- <th\r\n        *ngIf=\"action === 'update'\"\r\n        class=\"tdReprovedSmall\">\r\n          <btn-icon\r\n              icon=\"fas fa-plus\"\r\n              size=\"small\"\r\n              tooltip=\"Mais detalhes\"\r\n              (click)=\"openModalDetails(details); openDetails(dados);\">\r\n          </btn-icon>\r\n        </th> -->\r\n    </tr>\r\n      </ng-template>\r\n    </custom-table>\r\n\r\n    <!-- Anexos -->\r\n\r\n    <div *ngIf=\"dados.codSituacao != 1\">\r\n\r\n        <div class=\"col\" *ngIf=\"action === 'update'\">\r\n          <!-- *ngIf=\"dados.anexos.length === 0\" -->\r\n          <div class=\"row\" *ngIf=\"dados.anexos.length === 0\">\r\n            <div class=\"col-lg-12 d-flex align-items-start\" >\r\n              <div class=\"mtc-title mb-0\">Anexos</div>\r\n            </div>\r\n            <div class=\"col-2\" *ngIf=\"dados.codSituacao == 2 && profile.gerenteEscritorio\">\r\n              <label\r\n\r\n                for=\"novoAnexo\" class=\"d-flex justify-content-start align-items-center\"\r\n                style=\"cursor: pointer;\"\r\n                >\r\n                <p class=\"btn btn-sm btn-outline-primary m-0\" (click)=\"getIndexAnexos(dados, indice)\">\r\n                  <i class=\"fas fa-plus\"></i>\r\n                  <span>Anexar</span>\r\n                </p>\r\n              </label>\r\n              <input\r\n                id=\"novoAnexo\"\r\n                type=\"file\"\r\n                (change)=\"appendFile($event.target.files, indice, dados);\"\r\n                (click)=\"validAnexos()\"\r\n                class=\"d-none\">\r\n            </div>\r\n\r\n            <!-- <div class=\"col-1\" *ngIf=\"dados.codSituacao == 2 && profile.gerenteEscritorio\">\r\n              <btn-icon\r\n                class=\"ml-2\"\r\n                icon=\"fas fa-bullseye\"\r\n                size=\"medium\"\r\n                tooltip=\"Exibir nome do anexo para envio\"\r\n                id=\"notas\"\r\n                (click)=\"showNome(dados, indice)\">\r\n              </btn-icon>\r\n          </div> -->\r\n\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col\" >\r\n\r\n              <custom-table [config]=\"tableConfigAnexos\" >\r\n                <ng-template #tbody let-tbody>\r\n                  <tr *ngFor=\"let anexo of dados.anexos; let i = index\">\r\n                    <td\r\n                      style=\"width: 85%\">\r\n                      {{ anexo.nomeAnexo  }}\r\n                    </td>\r\n                    <td class=\"text-center\" style=\"width: 5%\">\r\n                      <btn-icon\r\n                        *ngIf=\"anexo.nomeAnexo && !anexo.codAnexo && dados.anexoEnviado != 'true'\"\r\n                        class=\"ml-2\"\r\n                        icon=\"fas fa-file-export\"\r\n                        size=\"medium\"\r\n                        tooltip=\"Enviar Nota para análise\"\r\n                        id=\"diretor\"\r\n                        (click)=\"onEnviarNotas(dados, indice)\">\r\n                      </btn-icon>\r\n                      <btn-icon\r\n                        *ngIf=\"anexo.nomeAnexo && !anexo.codAnexo && dados.anexoEnviado === 'true'\"\r\n                        class=\"ml-2\"\r\n                        icon=\"fas fa-file-import\"\r\n                        size=\"medium\"\r\n                        tooltip=\"Nota enviada\"\r\n                        id=\"notas\">\r\n                      </btn-icon>\r\n                    </td>\r\n                    <td\r\n                      class=\"text-center\" style=\"width: 5%\">\r\n                      <a\r\n                        *ngIf=\"anexo.urlAnexo && dados.anexos[0].codComissaoRepresentante != dados.codComissaoRepresentante\"\r\n                        (click)=\"navegarAnexo(anexo)\"\r\n                        target=\"_blank\"\r\n                        class=\"btn-icon-sm mx-2 text-black\"\r\n                        tooltip=\"visualizar\">\r\n                        <i class=\"far fa-eye\"></i>\r\n                      </a>\r\n                    </td>\r\n                    <td class=\"text-center\" style=\"width: 5%\">\r\n                      <btn-icon\r\n                        *ngIf=\"profile.gerenteEscritorio && dados.anexoEnviado != 'true'\"\r\n                        icon=\"fas fa-trash\"\r\n                        size=\"small\"\r\n                        tooltip=\"Excluir\"\r\n                        (click)=\"onDeleteAnexo(dados.anexos.codAnexo, i, dados)\">\r\n                      </btn-icon>\r\n                    </td>\r\n                    <td\r\n                      *ngIf=\"dados.anexoEnviado === 'true'\"\r\n                      class=\"text-center\"\r\n                      style=\"width: 5%\">\r\n                    </td>\r\n                  </tr>\r\n                </ng-template>\r\n              </custom-table>\r\n\r\n            </div>\r\n          </div>\r\n          <!-- <div class=\"row\" *ngIf=\"showAnexos && anexo.anexos.length > 0\">\r\n            <div class=\"col\">\r\n              <message\r\n                icon=\"fas fa-exchange-alt\"\r\n                text=\"Nenhum documento encontrado\">\r\n              </message>\r\n            </div>\r\n          </div> -->\r\n        </div>\r\n    </div>\r\n\r\n\r\n\r\n    <form [formGroup]=\"formInputs\" autocomplete=\"off\">\r\n    <div class=\"row\">\r\n    <div class=\"col\" >\r\n\r\n\r\n      <custom-table [config]=\"tableConfig\" >\r\n\r\n        <ng-template #thead let-thead >\r\n\r\n          <tr>\r\n            <th scope=\"col-1\"></th>\r\n\r\n            <th scope=\"col-4\">Unidade</th>\r\n\r\n            <th scope=\"col-1\">Valor Base <i class=\"far fa-question-circle\" [tooltip]=\"tooltipTemplateValor\"></i></th>\r\n\r\n            <th scope=\"col-1\">Descontos</th>\r\n\r\n            <th scope=\"col-1\">Ajuda de Custo</th>\r\n\r\n            <th scope=\"col-1\">Percentual</th>\r\n\r\n            <th scope=\"col-1\"></th>\r\n\r\n            <th scope=\"col-1\">Valor Comissão</th>\r\n\r\n            <th scope=\"col-1\"></th>\r\n\r\n          </tr>\r\n          <!-- Tooltip -->\r\n          <ng-template #tooltipTemplateValor>\r\n            <p class=\"mt-3 mb-0\"><b></b></p>\r\n            <p class=\"mt-3 mb-0\"><b></b></p>\r\n            <p class=\"mt-3 mb-0\"><b>Valor NF + Valor ICMS = Valor Base</b></p>\r\n            <p class=\"mt-3 mb-0\"><b></b></p>\r\n            <p class=\"mt-3 mb-0\"><b></b></p>\r\n          </ng-template>\r\n\r\n        </ng-template>\r\n\r\n        <!-- Dados Unidade, Valores -->\r\n\r\n        <ng-template #tbody let-tbody>\r\n\r\n          <tr *ngFor=\"let item of dados.info; let i = index;\">\r\n            <td\r\n            scope=\"col-1\"\r\n            class=\"hover\"\r\n            >\r\n            </td>\r\n\r\n            <!-- UNIDADE -->\r\n            <td *ngIf=\"validaUnidade1(dados, item)\"\r\n              scope=\"col-4\"\r\n              class=\"hover\">\r\n              {{ item.unidade | uppercase }}\r\n            </td>\r\n\r\n            <td\r\n            *ngIf=\"validaUnidadeRo(dados, item)\"\r\n              scope=\"col-4\"\r\n              class=\"hover\">\r\n              {{ item.unidade }} - {{ item.nrRo }}\r\n            </td>\r\n\r\n            <td\r\n            *ngIf=\"validaUnidade2(dados, item)\"\r\n              scope=\"col-4\"\r\n              class=\"hover\">\r\n              {{ item.unidade | uppercase }}\r\n            </td>\r\n\r\n            <td\r\n              *ngIf=\"validaUnidadeInput(dados, item)\"\r\n              scope=\"col-4\"\r\n              class=\"hover\"\r\n              >\r\n              <input\r\n              value=\"{{ item.unidade }}\"\r\n              class=\"form-control col-6\"\r\n              id=\"unidade\"\r\n              type=\"text\"\r\n              formControlName=\"unidade\"\r\n              [readonly]=\"visualizar\"\r\n              [ngClass]=\"onFieldErrorInputs('unidade') + ' ' + onFieldRequiredInputs('unidade')\">\r\n            </td>\r\n\r\n            <!-- VALOR BASE -->\r\n            <td *ngIf=\"validaValorBase(dados, item)\"\r\n              scope=\"col-4\"\r\n              class=\"hover\">\r\n              {{ item.valorBase | currency:'BRL':'symbol':'1.2-2' }}\r\n            </td>\r\n\r\n            <td *ngIf=\"validaValorBaseVazio(dados, item)\"\r\n              scope=\"col-4\"\r\n              class=\"hover\">\r\n            </td>\r\n\r\n            <td\r\n            *ngIf=\"validaValorBaseInput(dados, item)\"\r\n              scope=\"col-1\"\r\n              class=\"hover\">\r\n              <input\r\n                value=\"{{ item.valorBase | number:'1.2-2' }}\"\r\n                class=\"form-control col-6\"\r\n                id=\"valorBaseInput\"\r\n                type=\"text\"\r\n                formControlName=\"valorBaseInput\"\r\n                currencyMask [options]=\"{ align: 'left', prefix: '', thousands: '.', decimal: ',', precision: 2 }\"\r\n                [readonly]=\"visualizar\"\r\n                [ngClass]=\"onFieldErrorInputs('valorBaseInput') + ' ' + onFieldRequiredInputs('valorBaseInput')\">\r\n            </td>\r\n\r\n            <td\r\n            *ngIf=\"validaValorBaseInputVazio(dados, item)\"\r\n              scope=\"col-1\"\r\n              class=\"hover\">\r\n              <input\r\n                class=\"form-control col-6\"\r\n                id=\"valorBaseInput\"\r\n                type=\"text\"\r\n                formControlName=\"valorBaseInput\"\r\n                currencyMask [options]=\"{ align: 'left', prefix: '', thousands: '.', decimal: ',', precision: 2 }\"\r\n                [readonly]=\"visualizar\"\r\n                [ngClass]=\"onFieldErrorInputs('valorBaseInput') + ' ' + onFieldRequiredInputs('valorBaseInput')\">\r\n            </td>\r\n\r\n            <td\r\n            *ngIf=\"validaValorBaseInputDba(dados, item)\"\r\n              scope=\"col-1\"\r\n              class=\"hover\">\r\n              <input\r\n                class=\"form-control col-6\"\r\n                id=\"valorBaseDBA\"\r\n                type=\"text\"\r\n                formControlName=\"valorBaseDBA\"\r\n                currencyMask [options]=\"{ align: 'left', prefix: 'R$ ', thousands: '.', decimal: ',', precision: 2 }\"\r\n                [readonly]=\"visualizar\"\r\n                [ngClass]=\"onFieldErrorInputs('valorBaseDBA') + ' ' + onFieldRequiredInputs('valorBaseDBA')\">\r\n            </td>\r\n\r\n            <td\r\n            *ngIf=\"validaValorBaseInputAco(dados, item)\"\r\n              scope=\"col-1\"\r\n              class=\"hover\">\r\n              <input\r\n                class=\"form-control col-6\"\r\n                id=\"valorBaseACO\"\r\n                type=\"text\"\r\n                formControlName=\"valorBaseACO\"\r\n                currencyMask [options]=\"{ align: 'left', prefix: 'R$ ', thousands: '.', decimal: ',', precision: 2 }\"\r\n                [readonly]=\"visualizar\"\r\n                [ngClass]=\"onFieldErrorInputs('valorBaseACO') + ' ' + onFieldRequiredInputs('valorBaseACO')\">\r\n            </td>\r\n\r\n            <!-- DESCONTO -->\r\n            <td *ngIf=\"validaDesconto(dados, item)\"\r\n              scope=\"col-4\"\r\n              class=\"hover\">\r\n              {{ item.valorDesconto | number:'1.2-2' }}\r\n            </td>\r\n\r\n            <td *ngIf=\"validaDescontoVazio(dados, item)\"\r\n              scope=\"col-4\"\r\n              class=\"hover\">\r\n            </td>\r\n\r\n            <td\r\n              *ngIf=\"validaDescontoInput(dados, item)\"\r\n              scope=\"col-1\"\r\n              class=\"hover\">\r\n            <input\r\n              value=\"{{ item.valorDesconto | number:'1.2-2' }}\"\r\n              class=\"form-control col-6\"\r\n              id=\"descontos\"\r\n              type=\"text\"\r\n              formControlName=\"descontos\"\r\n              currencyMask [options]=\"{ align: 'left', prefix: '', thousands: '.', decimal: ',', precision: 2 }\"\r\n              [readonly]=\"visualizar || item.valorBase > 0\">\r\n            </td>\r\n\r\n            <!-- VALOR AJUDA CUSTO -->\r\n            <td *ngIf=\"validaAjudaCusto(dados, item)\"\r\n            scope=\"col-4\"\r\n            class=\"hover\">\r\n            {{ item.valorAjudaCusto | number:'1.2-2' }}\r\n            </td>\r\n\r\n            <td\r\n            *ngIf=\"validaAjudaCustoVazio(dados, item)\"\r\n              scope=\"col-4\"\r\n              class=\"hover\">\r\n            </td>\r\n\r\n            <!-- <td\r\n              *ngIf=\"validaAjudaCustoInput(dados, item)\"\r\n              scope=\"col-1\"\r\n              class=\"hover\"\r\n              id=\"inputs\">\r\n                <input\r\n                  class=\"form-control col-6\"\r\n                  value=\"{{ item.valorAjudaCusto | number:'1.2-2' }}\"\r\n                  id=\"valorAjudaCusto\"\r\n                  type=\"text\"\r\n                  formControlName=\"valorAjudaCusto\"\r\n                  currencyMask [options]=\"{ align: 'left', prefix: '', thousands: '.', decimal: ',', precision: 2 }\"\r\n                  [readonly]=\"visualizar || item.valorBase > 0\">\r\n            </td> -->\r\n\r\n            <!-- PERCENTUAL COMISSAO -->\r\n            <td *ngIf=\"validaPercentual(dados, item)\"\r\n              scope=\"col-4\"\r\n              class=\"hover\">\r\n              {{ item.percentualComissao | number:'1.2-2' }} %\r\n            </td>\r\n\r\n            <td *ngIf=\"validaPercentualVazio(dados, item)\"\r\n              scope=\"col-4\"\r\n              class=\"hover\">\r\n            </td>\r\n\r\n            <td\r\n              *ngIf=\"validaPercentualInput(dados, item)\"\r\n              scope=\"col-1\"\r\n              class=\"hover\"\r\n              id=\"inputs\">\r\n                <input\r\n                  class=\"form-control col-6\"\r\n                  value=\"{{ item.percentualComissao }}\"\r\n                  id=\"percentual\"\r\n                  type=\"text\"\r\n                  formControlName=\"percentual\"\r\n                  currencyMask [options]=\"{ align: 'left', thousands: '.', decimal: ',', precision: 1, prefix: '', suffix: '%' }\"\r\n                  [readonly]=\"visualizar\">\r\n            </td>\r\n\r\n            <td\r\n              *ngIf=\"validaPercentualInputVazio(dados, item)\"\r\n              scope=\"col-1\"\r\n              class=\"hover\"\r\n              id=\"inputs\">\r\n                <input\r\n                  class=\"form-control col-6\"\r\n                  id=\"percentual\"\r\n                  type=\"text\"\r\n                  formControlName=\"percentual\"\r\n                  currencyMask [options]=\"{ align: 'left', thousands: '.', decimal: ',', precision: 1, prefix: '', suffix: '%' }\"\r\n                  [readonly]=\"visualizar\"\r\n                  [ngClass]=\"onFieldErrorInputs('percentual') + ' ' + onFieldRequiredInputs('percentual')\">\r\n            </td>\r\n\r\n            <!-- BUTTON CALCULAR -->\r\n            <td\r\n              scope=\"col-1\"\r\n              class=\"hover\"\r\n              [hidden]=\"visualizar\"\r\n              *ngIf=\"validaButtonCalcular(dados, item)\"\r\n              >\r\n                <btn-icon\r\n                  icon=\"fas fa-calculator\"\r\n                  size=\"small\"\r\n                  tooltip=\"Calcular\"\r\n                  (click)=\"getConta(indice, dados, i, item);\">\r\n                </btn-icon>\r\n            </td>\r\n\r\n            <td *ngIf=\"validaButtonCalcularVazio(dados, item)\"\r\n              scope=\"col-1\"\r\n              class=\"hover\">\r\n            </td>\r\n\r\n            <td\r\n              scope=\"col-1\"\r\n              class=\"hover\"\r\n              [hidden]=\"!visualizar\">\r\n            </td>\r\n\r\n            <td\r\n              *ngIf= \"item.valorComissao == 0\"\r\n              scope=\"col-1\"\r\n              class=\"hover\">\r\n              {{ item.valorComissao | currency:'BRL':'symbol':'1.2-2' }}\r\n            </td>\r\n\r\n            <td\r\n              *ngIf= \"item.valorComissao > 0\"\r\n              style=\"color:#0a0dad;\"\r\n              scope=\"col-1\"\r\n              class=\"hover\">\r\n              {{ item.valorComissao | currency:'BRL':'symbol':'1.2-2' }}\r\n            </td>\r\n\r\n            <td\r\n              *ngIf= \"item.valorComissao < 0\"\r\n              style=\"color:#830808;\"\r\n              scope=\"col-1\"\r\n              class=\"hover\">\r\n              {{ item.valorComissao | currency:'BRL':'symbol':'1.2-2' }}\r\n            </td>\r\n\r\n            <!-- BUTTON DELETAR -->\r\n            <td\r\n              scope=\"col-1\"\r\n              class=\"hover\">\r\n                <btn-icon\r\n                  *ngIf=\"validaButtonDelete(dados, item)\"\r\n                  icon=\"fas fa-trash\"\r\n                  size=\"small\"\r\n                  tooltip=\"Excluir\"\r\n                  (click)=\"onDelete(dados, indice, item, i)\">\r\n                </btn-icon>\r\n            </td>\r\n\r\n          </tr>\r\n\r\n          <tr>\r\n            <td\r\n              scope=\"col-1\"\r\n              class=\"hover totalColor ml-5\">\r\n            </td>\r\n            <td\r\n              scope=\"col-4\"\r\n              class=\"hover totalColorBoldUpper\">\r\n              Total\r\n            </td>\r\n            <td\r\n              scope=\"col-2\"\r\n              class=\"hover totalColor\">\r\n            </td>\r\n            <td\r\n              scope=\"col-1\"\r\n              class=\"hover totalColor\">\r\n            </td>\r\n            <td\r\n              scope=\"col-1\"\r\n              class=\"hover totalColor\">\r\n            </td>\r\n            <td\r\n              scope=\"col-1\"\r\n              class=\"hover totalColor\">\r\n            </td>\r\n            <td\r\n              scope=\"col-1\"\r\n              class=\"hover totalColor\">\r\n            </td>\r\n            <td\r\n              scope=\"col-1\"\r\n              class=\"hover totalColorBold\">\r\n              {{ dados.valorTotalComissao | currency:'BRL':'symbol':'1.2-2' }}\r\n            </td>\r\n            <td\r\n              scope=\"col-1\"\r\n              class=\"hover totalColorBold\">\r\n            </td>\r\n          </tr>\r\n\r\n          <hr *ngIf=\"validaDadosSalvo(dados) && !visualizar\">\r\n\r\n          <tr *ngIf=\"validaDadosSalvo(dados) && !visualizar\">\r\n            <td\r\n              scope=\"col-1\"\r\n              class=\"hover\">\r\n            </td>\r\n            <td\r\n              scope=\"col-4\"\r\n              class=\"hover\">\r\n              <input\r\n                class=\"form-control col-12\"\r\n                id=\"unidadeInput\"\r\n                type=\"text\"\r\n                formControlName=\"unidadeInput\"\r\n                [readonly]=\"visualizar\"\r\n                [ngClass]=\"onFieldErrorInputs('unidadeInput') + ' ' + onFieldRequiredInputs('unidadeInput')\">\r\n            </td>\r\n            <td\r\n              scope=\"col-1\"\r\n              class=\"hover\">\r\n            </td>\r\n\r\n            <td\r\n              scope=\"col-1\"\r\n              class=\"hover\">\r\n              <input\r\n                class=\"form-control col-6\"\r\n                id=\"descontosInput\"\r\n                type=\"text\"\r\n                formControlName=\"descontosInput\"\r\n                currencyMask [options]=\"{ align: 'left', prefix: '', thousands: '.', decimal: ',', precision: 2 }\"\r\n                [readonly]=\"visualizar\">\r\n            </td>\r\n            <td\r\n              scope=\"col-1\"\r\n              class=\"hover\"\r\n              id=\"inputs\">\r\n              <input\r\n                class=\"form-control col-6\"\r\n                id=\"valorAjudaCustoInput\"\r\n                type=\"text\"\r\n                formControlName=\"valorAjudaCustoInput\"\r\n                currencyMask [options]=\"{ align: 'left', prefix: '', thousands: '.', decimal: ',', precision: 2 }\"\r\n                [readonly]=\"visualizar\">\r\n            </td>\r\n            <td\r\n              scope=\"col-1\"\r\n              class=\"hover\">\r\n            </td>\r\n\r\n            <td\r\n              scope=\"col-1\"\r\n              class=\"hover\"\r\n              [hidden]=\"visualizar\">\r\n                <btn-icon\r\n                  icon=\"fas fa-calculator\"\r\n                  size=\"small\"\r\n                  tooltip=\"Calcular\"\r\n                  (click)=\"getConta(indice, dados, i, dados.info);\">\r\n                </btn-icon>\r\n            </td>\r\n\r\n            <td\r\n              scope=\"col-1\"\r\n              class=\"hover\"\r\n              [hidden]=\"!visualizar\">\r\n            </td>\r\n\r\n            <td\r\n              scope=\"col-1\"\r\n              class=\"hover\"></td>\r\n\r\n            <td\r\n              scope=\"col-1\"\r\n              class=\"hover\"></td>\r\n          </tr>\r\n\r\n        </ng-template>\r\n      </custom-table>\r\n\r\n      <div\r\n      *ngIf=\"!visualizar && dados.salvo === 'true'\"\r\n      class=\"float-right mt-2 mr-2 mb-2\">\r\n        <button type=\"button\" class=\"btn btn-success\" >Salvo</button>\r\n      </div>\r\n\r\n      <div\r\n      *ngIf=\"validaDadosSalvo(dados)\"\r\n      class=\"float-right mt-2 mr-2 mb-2\"\r\n      [hidden]=\"visualizar\">\r\n        <button  type=\"button\" class=\"btn btn-light\" (click)=\"onSubmit(dados)\" >Salvar</button>\r\n      </div>\r\n      <br>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</form>\r\n\r\n  <!-- Modal do Analista de Marketing -->\r\n  <ng-template #analista>\r\n    <div>\r\n      <div class=\"modal-body\">\r\n\r\n          <div class=\"mtc-title\">Motivo da Reprovação do Analista de Marketing</div>\r\n            <button type=\"button\" class=\"close pull-right\" (click)=\"closeModal(analista)\" aria-label=\"Close\"></button>\r\n              <form [formGroup]=\"formReprovar\" autocomplete=\"off\">\r\n                <div class=\"form-group\">\r\n                  <textarea class=\"form-control\" id=\"text-area\" rows=\"3\" formControlName=\"descMotivo\"></textarea>\r\n                </div>\r\n              </form>\r\n\r\n          <div class=\"row mt-2\">\r\n            <div class=\"col\" style=\"text-align: center;\">\r\n\r\n              <button\r\n                type=\"button\"\r\n                class=\"btn btn-success\"\r\n                (click)=\"modalRef.hide(); onReprovarAnalista(dados); \"\r\n                >\r\n                Enviar\r\n              </button>\r\n\r\n            </div>\r\n          </div>\r\n\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n\r\n   <!-- Modal do Gerente de Marketing -->\r\n   <ng-template #gerente>\r\n\r\n    <div>\r\n      <div class=\"modal-body\">\r\n\r\n          <div class=\"mtc-title\">Motivo da Reprovação do Gerente de Marketing</div>\r\n            <button type=\"button\" class=\"close pull-right\" (click)=\"closeModal(gerente)\" aria-label=\"Close\"></button>\r\n              <form [formGroup]=\"formReprovar\" autocomplete=\"off\">\r\n                <div class=\"form-group\">\r\n                  <textarea class=\"form-control\" id=\"text-area\" rows=\"3\" formControlName=\"descMotivo\"></textarea>\r\n                </div>\r\n              </form>\r\n\r\n          <div class=\"row mt-2\">\r\n            <div class=\"col\" style=\"text-align: center;\">\r\n\r\n              <button\r\n                type=\"button\"\r\n                class=\"btn btn-success\"\r\n                (click)=\"modalRef.hide(); onReprovarGerente(dados); \"\r\n                >\r\n                Enviar\r\n              </button>\r\n\r\n          </div>\r\n        </div>\r\n\r\n    </div>\r\n  </div>\r\n    </ng-template>\r\n\r\n    <!-- Modal do Diretor Comercial -->\r\n  <ng-template #diretor>\r\n      <div class=\"modal-body\">\r\n\r\n        <div class=\"mtc-title\">Motivo da Reprovação do Diretor Comercial</div>\r\n          <button type=\"button\" class=\"close pull-right\" (click)=\"closeModal(diretor)\" aria-label=\"Close\"></button>\r\n            <form [formGroup]=\"formReprovar\" autocomplete=\"off\">\r\n              <div class=\"form-group\">\r\n                <textarea class=\"form-control\" id=\"text-area\" rows=\"3\" formControlName=\"descMotivo\"></textarea>\r\n              </div>\r\n            </form>\r\n\r\n        <div class=\"row mt-2\">\r\n          <div class=\"col\" style=\"text-align: center;\">\r\n\r\n            <button\r\n              type=\"button\"\r\n              class=\"btn btn-success\"\r\n              (click)=\"modalRef.hide(); onReprovarDiretor(dados); \"\r\n              >\r\n              Enviar\r\n            </button>\r\n\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </ng-template>\r\n\r\n    <!-- Modal de Adição de Valores das notas e comissão -->\r\n  <ng-template #valores>\r\n\r\n    <div>\r\n        <div class=\"modal-header\">\r\n          <div class=\"mtc-title text-center pull-left\">Adicionar Valores de Nota e Comissão</div>\r\n          <button type=\"button\" class=\"close pull-right\" (click)=\"closeModal(valores);\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <br>\r\n        <div class=\"modal-body\">\r\n          <form [formGroup]=\"formValores\" autocomplete=\"off\">\r\n\r\n              <div class=\"row d-flex justify-content-center\">\r\n\r\n                <div class=\"form-group col-lg-2\"></div>\r\n\r\n                <div class=\"form-group col-lg-4\">\r\n                  <label for=\"valorLiquido\">Valor Líquido</label>\r\n                  <input\r\n                    class=\"form-control text-center\"\r\n                    id=\"valorLiquido\"\r\n                    type=\"text\"\r\n                    formControlName=\"valorLiquido\"\r\n                    currencyMask [options]=\"{ align: 'left', prefix: '', thousands: '.', decimal: ',', precision: 2 }\">\r\n                </div>\r\n\r\n                <div class=\"form-group col-lg-4\">\r\n                  <label for=\"valorImposto\">Valor Imposto</label>\r\n                  <input\r\n                    class=\"form-control text-center\"\r\n                    id=\"valorImposto\"\r\n                    type=\"text\"\r\n                    formControlName=\"valorImposto\"\r\n                    currencyMask [options]=\"{ align: 'left', prefix: '', thousands: '.', decimal: ',', precision: 2 }\">\r\n                </div>\r\n\r\n                <div class=\"form-group col-lg-2\"></div>\r\n\r\n              </div>\r\n          </form>\r\n\r\n\r\n          <div class=\"row mt-2\">\r\n            <div class=\"col\" style=\"text-align: center;\">\r\n\r\n            <button\r\n              type=\"button\"\r\n              class=\"btn btn-primary\"\r\n              (click)=\"modalRef.hide(); onSubmitValores(dados);\"\r\n              >\r\n              Enviar\r\n            </button>\r\n\r\n          </div>\r\n        </div>\r\n\r\n    </div>\r\n  </div>\r\n  </ng-template>\r\n\r\n  </div>\r\n</div>\r\n<br>\r\n      <div class=\"d-flex justify-content-center mt-3\" *ngIf=\"totalItems > itemsPerPage && !loaderNavbar\">\r\n        <pagination\r\n          [maxSize]=\"maxSize\"\r\n          [(totalItems)]=\"totalItems\"\r\n          (pageChanged)=\"onPageChanged($event)\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPage\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\">\r\n        </pagination>\r\n      </div>\r\n\r\n  <!-- Modal Detalhes dos Registros -->\r\n  <ng-template #details>\r\n\r\n    <div class=\"mt-4 mr-4 mb-4 ml-4 details detailsConfig\" style=\"text-transform: uppercase;\" *ngIf=\"dadosDetalhes.length > 0\">\r\n\r\n      <div class=\"modal-header\">\r\n        <div class=\"mtc-title text-center\">Detalhes do Representante</div>\r\n        <button type=\"button\" class=\"close pull-right\" (click)=\"closeModal(details);\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n\r\n    <!-- <div class=\"mtc-title text-center\">Detalhes do Representante</div>\r\n    <button type=\"button\" class=\"close pull-right\" (click)=\"closeModal(details)\" aria-label=\"Close\"></button> -->\r\n    <custom-table [config]=\"tableConfig\">\r\n\r\n      <ng-template #tbody let-tbody *ngFor=\"let item of dadosDetalhes; let i = index;\">\r\n        <tr>\r\n          <td class=\"tdHead\">\r\n            Nome do Representante\r\n          </td>\r\n          <td class=\"text-center tdBody\" >\r\n            {{ item.nomeRepresentante | uppercase }}\r\n          </td>\r\n        </tr>\r\n\r\n        <tr>\r\n          <td class=\"tdHead\">\r\n            Tipo de comissionamento do Representante\r\n          </td>\r\n          <td class=\"text-center tdBody\" >\r\n            {{ item.tipoComissionamento | uppercase }}\r\n          </td>\r\n        </tr>\r\n\r\n        <tr>\r\n          <td class=\"tdHead\">\r\n            Número da Porcentagem\r\n          </td>\r\n          <td class=\"text-center tdBody\" >\r\n            {{ item.percentualPagamento | percent:'1.2-5' }}\r\n          </td>\r\n        </tr>\r\n\r\n        <tr>\r\n          <td class=\"tdHead\">\r\n            Período selecionado\r\n          </td>\r\n          <td class=\"text-center tdBody\" >\r\n            {{ item.nomeGestao | uppercase }}\r\n          </td>\r\n        </tr>\r\n\r\n        <tr>\r\n          <td class=\"tdHead\">\r\n            Número da RO\r\n          </td>\r\n          <td class=\"text-center tdBody\" >\r\n            {{ item.nrRo }}\r\n          </td>\r\n        </tr>\r\n\r\n        <tr>\r\n          <td class=\"tdHead\">\r\n            Descontos\r\n          </td>\r\n          <td class=\"text-center tdBody\" >\r\n            {{ item.valorDesconto | currency:'BRL':'symbol':'1.2-2' }}\r\n          </td>\r\n        </tr>\r\n\r\n        <tr>\r\n          <td class=\"tdHead\">\r\n            Ajuda de custos\r\n          </td>\r\n          <td class=\"text-center tdBody\" >\r\n            {{ item.valorAjudaCusto | currency:'BRL':'symbol':'1.2-2' }}\r\n          </td>\r\n        </tr>\r\n\r\n        <tr>\r\n          <td class=\"tdHead\">\r\n            Valor final de comissão a ser pago\r\n          </td>\r\n          <td class=\"text-center tdBody\" >\r\n           {{ item.valorComissao | currency:'BRL':'symbol':'1.2-2' }}\r\n          </td>\r\n        </tr>\r\n\r\n      </ng-template>\r\n\r\n    </custom-table>\r\n  </div>\r\n  </ng-template>\r\n\r\n   <!-- Modal Detalhes das Unidades -->\r\n   <ng-template #detailsRos>\r\n\r\n    <div class=\"mt-5 mb-5\" *ngIf=\"dadosEmptyUnidades\">\r\n      <empty-result message=\"Nenhuma informação encontrada\" ></empty-result>\r\n    </div>\r\n\r\n    <div class=\"mt-4 mr-4 mb-4 ml-4 details\"\r\n    *ngIf=\"dadosDetalhesUnidades.length > 0 && !dadosEmptyUnidades\"\r\n    style=\"text-transform: uppercase;\">\r\n\r\n\r\n    <div class=\"mtc-title text-center\">Detalhes da RO</div>\r\n\r\n    <button type=\"button\" class=\"close pull-right\" (click)=\"closeModal(detailsUnidades)\" aria-label=\"Close\"></button>\r\n    <custom-table [config]=\"tableConfig\">\r\n      <ng-template #thead let-thead>\r\n        <tr >\r\n\r\n          <th>Cód - Cliente</th>\r\n\r\n          <th>Vendedor</th>\r\n\r\n          <th>Empresa</th>\r\n\r\n          <th>Nr. Ro</th>\r\n\r\n          <th>Valor Ro</th>\r\n\r\n          <th>Nr. Nota Fiscal</th>\r\n\r\n          <th>Tipo Pagamento</th>\r\n\r\n          <th>Data Ro</th>\r\n\r\n          <th>Data Inicial Período</th>\r\n\r\n          <th>Data Final Período</th>\r\n\r\n        </tr>\r\n      </ng-template>\r\n      <ng-template #tbody let-tbody>\r\n        <tr *ngFor=\"let item of dadosDetalhesUnidades; let i = index;\">\r\n          <td class=\"hover\">\r\n            {{ item.codNomeCliente }}\r\n          </td>\r\n          <td class=\"hover\">\r\n            {{ item.nomeVendedor }}\r\n          </td>\r\n          <td class=\"hover\">\r\n            {{ item.nomeEmpresa }}\r\n          </td>\r\n          <td class=\"hover\">\r\n            {{ item.nrRo }}\r\n          </td>\r\n          <td class=\"hover\">\r\n            {{ item.valorRo | currency:'BRL':'symbol':'1.2-2' }}\r\n          </td>\r\n          <td class=\"hover\">\r\n            {{ item.nrNotaFiscal }}\r\n          </td>\r\n          <td class=\"hover\">\r\n            {{ item.nomeTipoPagamento }}\r\n          </td>\r\n          <td class=\"hover\">\r\n            {{ item.dataRo | date: 'dd/MM/yyyy' }}\r\n          </td>\r\n          <td class=\"hover\">\r\n            {{ item.dataInicialPeriodo | date: 'dd/MM/yyyy' }}\r\n          </td>\r\n          <td class=\"hover\">\r\n            {{ item.dataFinalPeriodo  | date: 'dd/MM/yyyy' }}\r\n          </td>\r\n        </tr>\r\n      </ng-template>\r\n    </custom-table>\r\n  </div>\r\n  </ng-template>\r\n\r\n     <!-- Modal Detalhes das Ros -->\r\n     <ng-template #detailsUnidades>\r\n\r\n      <div class=\"mt-5 mb-5\" *ngIf=\"dadosEmptyUnidades\">\r\n        <empty-result message=\"Nenhuma informação encontrada\" ></empty-result>\r\n      </div>\r\n\r\n      <div class=\"mt-4 mr-4 mb-4 ml-4 details\"\r\n      *ngIf=\"dadosDetalhesUnidades.length > 0 && !dadosEmptyUnidades\"\r\n      style=\"text-transform: uppercase;\">\r\n\r\n\r\n      <div class=\"mtc-title text-center\">Detalhes da Unidade</div>\r\n\r\n      <button type=\"button\" class=\"close pull-right\" (click)=\"closeModal(detailsRos)\" aria-label=\"Close\"></button>\r\n      <custom-table [config]=\"tableConfig\">\r\n        <ng-template #thead let-thead>\r\n          <tr >\r\n\r\n            <th>Cód - Cliente</th>\r\n\r\n            <th>Vendedor</th>\r\n\r\n            <th>Empresa</th>\r\n\r\n            <th>Unidade</th>\r\n\r\n            <th>Valor Nota Fiscal</th>\r\n\r\n            <th>Nr. Nota Fiscal</th>\r\n\r\n            <th>Valor Título</th>\r\n\r\n            <th>Nr. Título</th>\r\n\r\n            <th>Tipo Pagamento</th>\r\n\r\n            <th>Data Baixa</th>\r\n\r\n            <th>Data Nota Fiscal</th>\r\n\r\n            <th>Data Inicial Período</th>\r\n\r\n            <th>Data Final Período</th>\r\n\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let item of dadosDetalhesUnidades; let i = index;\">\r\n            <td class=\"hover\">\r\n              {{ item.codNomeCliente }}\r\n            </td>\r\n            <td class=\"hover\">\r\n              {{ item.nomeVendedor }}\r\n            </td>\r\n            <td class=\"hover\">\r\n              {{ item.nomeEmpresa }}\r\n            </td>\r\n            <td class=\"hover\">\r\n              {{ item.unidade }}\r\n            </td>\r\n            <td class=\"hover\">\r\n              {{ item.valorNotaFiscal | currency:'BRL':'symbol':'1.2-2' }}\r\n            </td>\r\n            <td class=\"hover\">\r\n              {{ item.nrNotaFiscal }}\r\n            </td>\r\n            <td class=\"hover\">\r\n              {{ item.valorTitulo | currency:'BRL':'symbol':'1.2-2' }}\r\n            </td>\r\n            <td class=\"hover\">\r\n              {{ item.nrTitulo }}\r\n            </td>\r\n            <td class=\"hover\">\r\n              {{ item.nomeTipoPagamento }}\r\n            </td>\r\n            <td class=\"hover\">\r\n              {{ item.dataBaixaTitulo | date: 'dd/MM/yyyy' }}\r\n            </td>\r\n            <td class=\"hover\">\r\n              {{ item.dataNotaFiscal | date: 'dd/MM/yyyy' }}\r\n            </td>\r\n            <td class=\"hover\">\r\n              {{ item.dataInicialPeriodo | date: 'dd/MM/yyyy' }}\r\n            </td>\r\n            <td class=\"hover\">\r\n              {{ item.dataFinalPeriodo  | date: 'dd/MM/yyyy' }}\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n    </div>\r\n    </ng-template>\r\n\r\n     <!-- Modal Historico Exclusão -->\r\n     <ng-template #historico>\r\n\r\n      <div class=\"mt-5 mb-5\" *ngIf=\"dadosEmptyHistorico\">\r\n        <empty-result message=\"Nenhuma informação encontrada\" ></empty-result>\r\n      </div>\r\n\r\n      <div class=\"mt-4 mr-4 mb-4 ml-4 details\"\r\n      *ngIf=\"dadosHistorico.length > 0 && !dadosEmptyHistorico\"\r\n      style=\"text-transform: uppercase;\">\r\n\r\n      <div class=\"modal-header\">\r\n        <div class=\"mtc-title text-center\">Histórico de Aprovações</div>\r\n        <button type=\"button\" class=\"close pull-right\" (click)=\"closeModal(details);\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n\r\n\r\n      <custom-table [config]=\"tableConfig\" class=\"tableConfig\">\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n\r\n            <th class=\"theme\">Usuário</th>\r\n            <!-- style=\"width: 15%;\" -->\r\n            <th >Data Cadastro</th>\r\n            <!-- style=\"width: 8%;\" -->\r\n\r\n            <th >De</th>\r\n            <!-- style=\"width: 20%;\" -->\r\n\r\n            <th >Para</th>\r\n            <!-- style=\"width: 20%;\" -->\r\n\r\n            <th >Motivo</th>\r\n            <!-- style=\"width: 37%;\" -->\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let item of dadosHistorico; let i = index;\">\r\n            <td class=\"hover\">\r\n              {{ item.nomeUsuario }}\r\n            </td>\r\n            <td class=\"hover\">\r\n              {{ item.dataCadastro | date: 'dd/MM/yyyy' }}\r\n            </td>\r\n            <td class=\"hover\" *ngIf=\"item.de == '' \">\r\n              CRIAÇÃO COMISSÃO ANALISTA DE MARKETING\r\n            </td>\r\n            <td class=\"hover\" *ngIf=\"item.de != '' \">\r\n              {{ item.de }}\r\n            </td>\r\n            <td class=\"hover\">\r\n              {{ item.para }}\r\n            </td>\r\n            <td class=\"hover\">\r\n              {{ item.motivo }}\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n    </div>\r\n  </ng-template>\r\n</app-body>\r\n\r\n";
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


      __webpack_exports__["default"] = ".representante {\n  border: 1px solid #B6B3B3;\n}\n\n.representante:hover {\n  background-color: #F4F7F6;\n}\n\n#aprovado {\n  color: #008000;\n}\n\n.tableConfig thead, .tableConfig tr, .tableConfig td {\n  border: none;\n}\n\n.tableConfig thead, .tableConfig tbody {\n  border: 1px solid #0456A3;\n  border-radius: 7px;\n}\n\n.tableConfig th {\n  background-color: #deeafd;\n}\n\n.tdHead {\n  background-color: #deeafd;\n  border: 1px solid #fff;\n  font-size: 0.7rem;\n  font-weight: bold;\n}\n\n.tdBody {\n  border: 1px solid #fff;\n  font-size: 0.7rem;\n}\n\n.borderCard {\n  border: solid 1px #deeafd;\n}\n\n.tdPrimaryLarge {\n  width: 45%;\n  background: #deeafd;\n}\n\n.tdPrimarySmall {\n  width: 5%;\n  background: #deeafd;\n}\n\n.tdAprovedLarge {\n  width: 45%;\n  background: #71ee8f;\n}\n\n.tdAprovedSmall {\n  width: 5%;\n  background: #71ee8f;\n}\n\n.tdReprovedLarge {\n  width: 45%;\n  background: #f18282;\n}\n\n.tdReprovedSmall {\n  width: 5%;\n  background: #f18282;\n}\n\n.totalColor {\n  background: #FCB4B4;\n}\n\n.totalColorBold {\n  font-weight: bold;\n  background: #FCB4B4;\n}\n\n.totalColorBoldUpper {\n  text-transform: uppercase;\n  font-weight: bold;\n  background: #FCB4B4;\n}\n\n.primaryColor {\n  background: #3E0752;\n  color: #fff;\n}\n\n.secondaryColor {\n  background: #CD7940;\n}\n\n.radiusLeft {\n  border-top-left-radius: 10px;\n}\n\n.radiusRight {\n  border-top-right-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21lcmNpYWwvY29taXNzb2VzL3JlcHJlc2VudGFudGVzL2dlc3Rhby1jb21pc3Npb25hbWVudG9zL2Zvcm11bGFyaW8vZm9ybXVsYXJpby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtBQUNGOztBQVlBO0VBQ0UsY0FBQTtBQVRGOztBQWNFO0VBQ0UsWUFBQTtBQVhKOztBQWNFO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtBQVpKOztBQWVFO0VBQ0UseUJBQUE7QUFiSjs7QUFrQkU7RUFDRSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQWZKOztBQWtCRTtFQUNFLHNCQUFBO0VBQ0EsaUJBQUE7QUFmSjs7QUFrQkU7RUFDRSx5QkFBQTtBQWZKOztBQWtCRTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtBQWZKOztBQWtCRTtFQUNFLFNBQUE7RUFDQSxtQkFBQTtBQWZKOztBQWtCRTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtBQWZKOztBQWtCRTtFQUNFLFNBQUE7RUFDQSxtQkFBQTtBQWZKOztBQWtCRTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtBQWZKOztBQWtCRTtFQUNFLFNBQUE7RUFDQSxtQkFBQTtBQWZKOztBQWtCRTtFQUNFLG1CQUFBO0FBZko7O0FBa0JFO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQWZKOztBQWtCRTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQWZKOztBQWtCRTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBQWZKOztBQWtCRTtFQUNFLG1CQUFBO0FBZko7O0FBa0JFO0VBQ0UsNEJBQUE7QUFmSjs7QUFrQkU7RUFDRSw2QkFBQTtBQWZKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9jb21lcmNpYWwvY29taXNzb2VzL3JlcHJlc2VudGFudGVzL2dlc3Rhby1jb21pc3Npb25hbWVudG9zL2Zvcm11bGFyaW8vZm9ybXVsYXJpby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXByZXNlbnRhbnRle1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNCNkIzQjM7XHJcbn1cclxuXHJcbi5yZXByZXNlbnRhbnRlOmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNEY3RjY7XHJcbn1cclxuXHJcbi8vIC50b3RhbHtcclxuLy8gICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTYzLCA0LCA0KTtcclxuLy8gfVxyXG5cclxuLy8gLmRldGFpbHMge1xyXG4vLyAgIHRoZWFkLCB0ciwgdGQge1xyXG4vLyAgICAgYm9yZGVyOiAxcHggc29saWQgI0I2QjNCMztcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbiNhcHJvdmFkbyB7XHJcbiAgY29sb3I6ICMwMDgwMDA7XHJcbn1cclxuXHJcbi50YWJsZUNvbmZpZ3tcclxuXHJcbiAgdGhlYWQsIHRyLCB0ZCB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG5cclxuICB0aGVhZCwgdGJvZHkge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzA0NTZBMztcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICB9XHJcblxyXG4gIHRoIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2RlZWFmZDtcclxuICB9XHJcblxyXG59XHJcblxyXG4gIC50ZEhlYWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZGVlYWZkO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG5cclxuICAudGRCb2R5IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICB9XHJcblxyXG4gIC5ib3JkZXJDYXJkIHtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICNkZWVhZmQ7XHJcbiAgfVxyXG5cclxuICAudGRQcmltYXJ5TGFyZ2Uge1xyXG4gICAgd2lkdGg6IDQ1JTtcclxuICAgIGJhY2tncm91bmQ6I2RlZWFmZDtcclxuICB9XHJcblxyXG4gIC50ZFByaW1hcnlTbWFsbCB7XHJcbiAgICB3aWR0aDogNSU7XHJcbiAgICBiYWNrZ3JvdW5kOiNkZWVhZmQ7XHJcbiAgfVxyXG5cclxuICAudGRBcHJvdmVkTGFyZ2Uge1xyXG4gICAgd2lkdGg6IDQ1JTtcclxuICAgIGJhY2tncm91bmQ6IzcxZWU4ZjtcclxuICB9XHJcblxyXG4gIC50ZEFwcm92ZWRTbWFsbCB7XHJcbiAgICB3aWR0aDogNSU7XHJcbiAgICBiYWNrZ3JvdW5kOiM3MWVlOGY7XHJcbiAgfVxyXG5cclxuICAudGRSZXByb3ZlZExhcmdlIHtcclxuICAgIHdpZHRoOiA0NSU7XHJcbiAgICBiYWNrZ3JvdW5kOiNmMTgyODI7XHJcbiAgfVxyXG5cclxuICAudGRSZXByb3ZlZFNtYWxsIHtcclxuICAgIHdpZHRoOiA1JTtcclxuICAgIGJhY2tncm91bmQ6I2YxODI4MjtcclxuICB9XHJcblxyXG4gIC50b3RhbENvbG9yIHtcclxuICAgIGJhY2tncm91bmQ6ICNGQ0I0QjQ7XHJcbiAgfVxyXG5cclxuICAudG90YWxDb2xvckJvbGQge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkNCNEI0O1xyXG4gIH1cclxuXHJcbiAgLnRvdGFsQ29sb3JCb2xkVXBwZXIge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYmFja2dyb3VuZDogI0ZDQjRCNDtcclxuICB9XHJcblxyXG4gIC5wcmltYXJ5Q29sb3Ige1xyXG4gICAgYmFja2dyb3VuZDogIzNFMDc1MjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuXHJcbiAgLnNlY29uZGFyeUNvbG9yIHtcclxuICAgIGJhY2tncm91bmQ6ICNDRDc5NDA7XHJcbiAgfVxyXG5cclxuICAucmFkaXVzTGVmdCB7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLnJhZGl1c1JpZ2h0IHtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxuIl19 */";
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
          this.meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Setiembre', 'Octubre', 'Noviembre', 'Diciembre'];
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


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<!-- <loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen> -->\r\n<app-header appTitle=\"Representantes\">\r\n  <!-- *ngIf=\"profile.analistaMarketing\" -->\r\n  <button\r\n    *ngIf=\"profile.analistaMarketing\"\r\n    type=\"button\"\r\n    [routerLink]=\"['../novo']\">\r\n    Adicionar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onFilter()\">\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" >\r\n  <div class=\"row\" >\r\n    <div class=\"col\">\r\n      <advanced-filter>\r\n        <form [formGroup]=\"form\" autocomplete=\"off\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-2\">\r\n              <label for=\"dtInicio\">Data Inicio</label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\r\n                </div>\r\n                  <input\r\n                    class=\"form-control\"\r\n                    id=\"dtInicio\"\r\n                    type=\"text\"\r\n                    formControlName=\"dtInicio\"\r\n                    bsDatepicker\r\n                    [ngClass]=\"onFieldError('dtInicio') + ' ' + onFieldRequired('dtInicio')\">\r\n              </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"form-group col-lg-2\">\r\n              <label for=\"dtFim\">Data Fim</label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\r\n                </div>\r\n                  <input\r\n                    class=\"form-control\"\r\n                    id=\"dtFim\"\r\n                    type=\"text\"\r\n                    formControlName=\"dtFim\"\r\n                    bsDatepicker\r\n                    [ngClass]=\"onFieldError('dtFim') + ' ' + onFieldRequired('dtFim')\">\r\n              </div>\r\n            </div>\r\n            <!-- <div class=\"form-group col-lg-6\">\r\n              <label for=\"nomeGestao\">Descrição da tabela</label>\r\n              <input\r\n                  class=\"form-control\"\r\n                  id=\"nomeGestao\"\r\n                  type=\"text\"\r\n                  formControlName=\"nomeGestao\"\r\n                  >\r\n            </div> -->\r\n\r\n          </div>\r\n        </form>\r\n      </advanced-filter>\r\n    </div>\r\n  </div>\r\n  <empty-result message=\"Nenhuma informação encontrada\" *ngIf=\"dadosEmpty && dadosLoaded\"></empty-result>\r\n  <div class=\"row\" >\r\n    <div class=\"col\">\r\n      <custom-table [config]=\"tableConfig\" *ngIf=\"dados.length > 0 && !dadosEmpty\">\r\n        <ng-template #thead let-thead>\r\n          <tr >\r\n\r\n            <th scope=\"col-10\">Código</th>\r\n\r\n            <!-- <th scope=\"col-6\">Descrição Tabela</th>\r\n\r\n            <th scope=\"col-2\">Data Lançamento</th>\r\n\r\n            <th scope=\"col-3\">Usuário Lançamento</th> -->\r\n\r\n            <th scope=\"col-2\"\r\n            >\r\n            </th>\r\n            <!-- [hidden]=\"showDetailPanel\" -->\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let item of dados; let i = index;\">\r\n            <td class=\"hover\">\r\n              {{ item.mesComissao }}\r\n            </td>\r\n            <!-- <td class=\"hover\">\r\n              {{ item.nomeGestao }}\r\n            </td>\r\n            <td class=\"hover\">\r\n              {{ item.dataCadastro | date: 'dd/MM/yyyy' }}\r\n            </td>\r\n            <td class=\"hover\">\r\n              {{ item.nomeUsuario }}\r\n            </td> -->\r\n            <td class=\"text-right\">\r\n              <!-- <span\r\n                *ngIf=\"profile.analistaMarketing\"\r\n                class=\"mr-3\" tooltip=\"Editar\"\r\n                placement=\"left\"\r\n                container=\"body\">\r\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onEdit(item)\">\r\n                    <i class=\"fas fa-edit\"></i>\r\n                  </button>\r\n              </span> -->\r\n\r\n              <!-- *ngIf=\"!profile.analistaMarketing\" -->\r\n              <span\r\n              class=\"mr-3\"\r\n              tooltip=\"Mais Detalhes\"\r\n              placement=\"left\"\r\n              container=\"body\">\r\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onEdit(item)\">\r\n                  <i class=\"fas fa-plus\"></i>\r\n                </button>\r\n            </span>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n      <div class=\"d-flex justify-content-center mt-3\" *ngIf=\"totalItems > itemsPerPage && !loaderNavbar\">\r\n        <pagination\r\n          [maxSize]=\"maxSize\"\r\n          [(totalItems)]=\"totalItems\"\r\n          (pageChanged)=\"onPageChanged($event)\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPage\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\">\r\n        </pagination>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</app-body>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=gestao-comissionamentos-gestao-comissionamentos-module-es5.js.map