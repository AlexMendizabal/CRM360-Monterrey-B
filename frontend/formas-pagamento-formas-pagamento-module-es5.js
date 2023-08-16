(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["formas-pagamento-formas-pagamento-module"], {
    /***/
    "++X+":
    /*!*******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/cadastros/formas-pagamento/lista/lista.component.html ***!
      \*******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function X(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<app-header appTitle=\"Formas de pagamento\">\r\n  <button\r\n    type=\"button\"\r\n    [routerLink]=\"['../novo']\">\r\n    Adicionar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onFilter()\">\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\r\n     <div class=\"row\" #scrollToFilter>\r\n      <div class=\"col\">\r\n        <advanced-filter>\r\n          <form [formGroup]=\"form\" autocomplete=\"off\">\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-lg-2\">\r\n                <label for=\"codFormaPagamentoERP\">Código TID</label>\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  formControlName=\"codFormaPagamentoERP\"\r\n                  (keydown.enter)=\"onFilter()\">\r\n              </div>\r\n              <div class=\"form-group col-lg-5\">\r\n                <label for=\"descricao\">Descrição</label>\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  formControlName=\"descricao\"\r\n                  (keydown.enter)=\"onFilter()\">\r\n              </div>\r\n              <div class=\"form-group col-lg-2\">\r\n                <label for=\"codTipoDia\">Tipo</label>\r\n                <select\r\n                  class=\"form-control custom-select\"\r\n                  id=\"codTipoDia\"\r\n                  formControlName=\"codTipoDia\">\r\n                  <option value=\"0\">Todos</option>\r\n                  <option value=\"1\">Dias corridos</option>\r\n                  <option value=\"2\">Dias fora mês</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"form-group col-lg-2\">\r\n                <label for=\"codSituacao\">Situação</label>\r\n                <select\r\n                  class=\"form-control custom-select\"\r\n                  id=\"codSituacao\"\r\n                  formControlName=\"codSituacao\">\r\n                  <option value=\"\">Todos</option>\r\n                  <option value=\"0\">Inativos</option>\r\n                  <option value=\"1\">Ativos</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"form-group col-lg-1\">\r\n                <label for=\"registros\">Registros</label>\r\n                <select\r\n                  class=\"form-control\"\r\n                  id=\"registros\"\r\n                  formControlName=\"registros\">\r\n                  <option>25</option>\r\n                  <option>50</option>\r\n                  <option>100</option>\r\n                  <option>200</option>\r\n                  <option>300</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </advanced-filter>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <subtitles\r\n          [data]=\"subtitles\"\r\n          [show]=\"dadosPagination.length > 0 && !dadosEmpty\">\r\n        </subtitles>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div [ngClass]=\"{'col': !showDetailPanel, 'col-5 pr-0': showDetailPanel}\">\r\n        <custom-table [config]=\"tableConfig\" *ngIf=\"dadosPagination.length > 0 && !dadosEmpty\">\r\n          <ng-template #thead let-thead>\r\n            <tr>\r\n              <th class=\"text-center\" scope=\"col\">Código</th>\r\n              <th class=\"text-center\" scope=\"col\">Código TID</th>\r\n              <th scope=\"col\">Descrição</th>\r\n              <th class=\"text-center\" scope=\"col\">Qtde. parcelas</th>\r\n              <th scope=\"col\" [hidden]=\"showDetailPanel\"></th>\r\n            </tr>\r\n          </ng-template>\r\n          <ng-template #tbody let-tbody>\r\n            <tr\r\n              *ngFor=\"let formaPagamento of dadosPagination; let i = index\"\r\n              [class.table-active]=\"formaPagamento.codFormaPagamento == formaPagamentoSelecionado.codFormaPagamento\">\r\n              <td\r\n                class=\"text-center\"\r\n                [ngClass]=\"classStatusBorder(formaPagamento)\">\r\n                {{ formaPagamento.codFormaPagamento }}\r\n              </td>\r\n              <td class=\"text-center\">{{ formaPagamento.codFormaPagamentoERP }}</td>\r\n              <td>{{ formaPagamento.descricao | uppercase }}</td>\r\n              <td class=\"text-center\">{{ formaPagamento.qtdeParcela }}</td>\r\n              <td class=\"text-right\" [hidden]=\"showDetailPanel\">\r\n                <span *ngIf=\"formaPagamento.codSituacao == 1\" class=\"mr-3\" tooltip=\"Inativar\" placement=\"left\" container=\"body\">\r\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onInactivate(i, formaPagamento)\">\r\n                    <i class=\"fas fa-toggle-on\"></i>\r\n                  </button>\r\n                </span>\r\n                <span *ngIf=\"formaPagamento.codSituacao == 0\" class=\"mr-3\" tooltip=\"Ativar\" placement=\"left\" container=\"body\">\r\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onActivate(i, formaPagamento)\">\r\n                    <i class=\"fas fa-toggle-off\"></i>\r\n                  </button>\r\n                </span>\r\n                <span class=\"mr-3\" tooltip=\"Editar\" placement=\"left\" container=\"body\">\r\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onEdit(formaPagamento)\">\r\n                    <i class=\"fas fa-edit\"></i>\r\n                  </button>\r\n                </span>\r\n              </td>\r\n            </tr>\r\n          </ng-template>\r\n        </custom-table>\r\n        <empty-result\r\n          message=\"Nenhuma informação encontrada\"\r\n          class=\"my-3\"\r\n          *ngIf=\"dadosEmpty\">\r\n        </empty-result>\r\n        <div class=\"d-flex justify-content-center mt-3\" *ngIf=\"totalItems > itemsPerPage && dadosLoaded\">\r\n          <pagination\r\n            [maxSize]=\"maxSize\"\r\n            [(totalItems)]=\"totalItems\"\r\n            (pageChanged)=\"onPageChanged($event)\"\r\n            [(itemsPerPage)]=\"itemsPerPage\"\r\n            [boundaryLinks]=\"true\"\r\n            [(ngModel)]=\"currentPage\"\r\n            previousText=\"&lsaquo;\"\r\n            nextText=\"&rsaquo;\"\r\n            firstText=\"&laquo;\"\r\n            lastText=\"&raquo;\">\r\n          </pagination>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-7\" [hidden]=\"!showDetailPanel\">\r\n        <detail-panel panelTitle=\"Histórico de alterações\">\r\n          <custom-table *ngIf=\"alteracoes.length > 0\">\r\n            <ng-template #thead let-thead>\r\n              <tr>\r\n                <th scope=\"col\" class=\"text-center\">Data</th>\r\n                <th scope=\"col\">Usuário</th>\r\n                <th scope=\"col\">Alteração</th>\r\n              </tr>\r\n            </ng-template>\r\n            <ng-template #tbody let-tbody>\r\n              <tr *ngFor=\"let alteracao of alteracoes\">\r\n                <td class=\"text-center\">{{ alteracao.dataLog | date: 'dd/MM/yyyy HH:mm' }}</td>\r\n                <td>{{ alteracao.nomeUsuario | uppercase }}</td>\r\n                <td>{{ alteracao.mensagem | uppercase }}</td>\r\n              </tr>\r\n            </ng-template>\r\n          </custom-table>\r\n        </detail-panel>\r\n      </div>\r\n    </div>\r\n  </app-body>\r\n";
      /***/
    },

    /***/
    "3jsM":
    /*!***************************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/formas-pagamento/formulario/formulario.component.scss ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function jsM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NhZGFzdHJvcy9mb3JtYXMtcGFnYW1lbnRvL2Zvcm11bGFyaW8vZm9ybXVsYXJpby5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "6OP7":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/cadastros/formas-pagamento/formulario/formulario.component.html ***!
      \*****************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function OP7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<app-header [appTitle]=\"appTitle\">\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onCancel()\"\r\n    [disabled]=\"submittingForm\">\r\n    Cancelar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onSubmit()\"\r\n    [disabled]=\"!form.valid || submittingForm\">\r\n    Salvar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-lg-4\">\r\n      <form [formGroup]=\"form\">\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col\">\r\n            <label for=\"descricao\">Descrição</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"descricao\"\r\n              formControlName=\"descricao\"\r\n              (input)=\"onInput()\"\r\n              autocomplete=\"new-password\"\r\n              [ngClass]=\"onFieldError('descricao') + ' ' + onFieldRequired(form.controls.descricao)\">\r\n            <invalid-form-control [show]=\"onFieldInvalid('descricao')\" message=\"Descrição é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-lg-6\">\r\n            <label for=\"codFormaPagamentoERP\">Código ERP</label>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"false\"\r\n              [items]=\"descFormasERP\"\r\n              formControlName=\"codFormaPagamentoERP\"\r\n              labelForId=\"codFormaPagamentoERP\"\r\n              bindLabel=\"descricao\"\r\n              bindValue=\"codFormaPagamento\"\r\n              [ngClass]=\"onFieldError('codFormaPagamentoERP') + ' ' + onFieldRequired(form.controls.codFormaPagamentoERP)\">\r\n            </ng-select>\r\n          </div>\r\n          <div class=\"form-group col-lg-6\">\r\n            <label for=\"codSituacao\">Situação</label>\r\n            <select\r\n              class=\"form-control custom-select\"\r\n              id=\"codSituacao\"\r\n              formControlName=\"codSituacao\"\r\n              [ngClass]=\"onFieldError('codSituacao') + ' ' + onFieldRequired(form.controls.codSituacao)\">\r\n              <option value=\"0\">Inativo</option>\r\n              <option value=\"1\">Ativo</option>\r\n            </select>\r\n            <invalid-form-control [show]=\"onFieldInvalid('codSituacao')\" message=\"Situação é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-lg-6\">\r\n            <label for=\"codTipoPerc\">Percentual\r\n            <ng-template #tooltipLabelPercentualTemplate>\r\n              <p class=\"text-nowrap mb-0\">Desconto ou</p>\r\n              <p class=\"text-nowrap mb-0\">Acréscimo</p>\r\n            </ng-template>\r\n            <i class=\"far fa-question-circle\" [tooltip]=\"tooltipLabelPercentualTemplate\" container=\"body\"></i>\r\n          </label>\r\n            <select\r\n              class=\"form-control custom-select\"\r\n              id=\"codTipoPerc\"\r\n              formControlName=\"codTipoPerc\"\r\n\r\n              (change)=\"onChangePerc()\">\r\n              <option value=\"0\"></option>\r\n              <option value=\"1\">Desconto</option>\r\n              <option value=\"2\">Acréscimo</option>\r\n            </select>\r\n\r\n          </div>\r\n          <div class=\"form-group col-lg-6\">\r\n            <label for=\"codValorPerc\">Vl. Percentual\r\n            <ng-template #tooltipLabelVlPercentualTemplate>\r\n              <p class=\"text-nowrap mb-0\">Percentual de Desconto</p>\r\n              <p class=\"text-nowrap mb-0\">ou Acréscimo</p>\r\n            </ng-template>\r\n            <i class=\"far fa-question-circle\" [tooltip]=\"tooltipLabelVlPercentualTemplate\" container=\"body\"></i>\r\n            </label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"codValorPerc\"\r\n              currencyMask\r\n              [options]=\"{ align: 'left', thousands: '.', decimal: ',', prefix: '', suffix: '%' }\"\r\n              formControlName=\"codValorPerc\"\r\n              >\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-lg-6\">\r\n            <label for=\"codTipoDia\">Tipo</label>\r\n            <select\r\n              class=\"form-control custom-select\"\r\n              id=\"codTipoDia\"\r\n              formControlName=\"codTipoDia\"\r\n              [ngClass]=\"onFieldError('codTipoDia') + ' ' + onFieldRequired(form.controls.codTipoDia)\">\r\n              <option value=\"1\">Dias corridos</option>\r\n              <option value=\"2\">Dias fora mês</option>\r\n            </select>\r\n            <invalid-form-control [show]=\"onFieldInvalid('codTipoDia')\" message=\"Tipo do dia é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n          <div class=\"form-group col-lg-6\">\r\n            <label for=\"qtdeParcela\">Qtde. parcelas</label>\r\n            <select\r\n              class=\"form-control custom-select\"\r\n              id=\"qtdeParcela\"\r\n              formControlName=\"qtdeParcela\"\r\n              (change)=\"onAddParcelas()\"\r\n              [ngClass]=\"onFieldError('qtdeParcela') + ' ' + onFieldRequired(form.controls.qtdeParcela)\">\r\n              <option value=\"1\">1 Parcela</option>\r\n              <option value=\"2\">2 Parcelas</option>\r\n              <option value=\"3\">3 Parcelas</option>\r\n              <option value=\"4\">4 Parcelas</option>\r\n              <option value=\"5\">5 Parcelas</option>\r\n              <option value=\"6\">6 Parcelas</option>\r\n              <option value=\"7\">7 Parcelas</option>\r\n              <option value=\"8\">8 Parcelas</option>\r\n              <option value=\"9\">9 Parcelas</option>\r\n              <option value=\"10\">10 Parcelas</option>\r\n              <option value=\"11\">11 Parcelas</option>\r\n              <option value=\"12\">12 Parcelas</option>\r\n            </select>\r\n            <invalid-form-control [show]=\"onFieldInvalid('qtdeParcela')\" message=\"Qtde. parcelas é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row border-bottom\">\r\n          <div class=\"form-group col d-flex justify-content-end mb-2\">\r\n            <div class=\"custom-control custom-checkbox\">\r\n              <input\r\n               type=\"checkbox\"\r\n               class=\"custom-control-input\"\r\n               id=\"editavel\"\r\n               formControlName=\"editavel\">\r\n               <label\r\n                class=\"custom-control-label\"\r\n                for=\"editavel\">\r\n                Permite alterar data de vencimento\r\n              </label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div formArrayName=\"qtdeDias\">\r\n          <div class=\"form-row\" *ngFor=\"let item of qtdeDias.controls; let i = index\" [formGroupName]=\"i\">\r\n            <div class=\"form-group col mb-0\">\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-6\">\r\n                  <label for=\"dias\">Parcela {{ i + 1 }}</label>\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    id=\"dias\"\r\n                    formControlName=\"dias\"\r\n                    (input)=\"onInput()\"\r\n                    [ngClass]=\"onNestedFieldError('qtdeDias', i, 'dias') + ' ' + onNestedFieldRequired('qtdeDias', i, 'dias')\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</app-body>\r\n";
      /***/
    },

    /***/
    "FOez":
    /*!***********************************************************************!*\
      !*** ./src/app/shared/modules/confirm-modal/confirm-modal.service.ts ***!
      \***********************************************************************/

    /*! exports provided: ConfirmModalService */

    /***/
    function FOez(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmModalService", function () {
        return ConfirmModalService;
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


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var _confirm_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./confirm-modal.component */
      "SMoX"); // Components


      var ConfirmModalService = /*#__PURE__*/function () {
        function ConfirmModalService(modalService) {
          _classCallCheck(this, ConfirmModalService);

          this.modalService = modalService;
        }

        _createClass(ConfirmModalService, [{
          key: "showConfirm",
          value: function showConfirm(type, title, message, cancelTxt, okTxt) {
            var modalRef = this.modalService.show(_confirm_modal_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmModalComponent"], {
              animated: false,
              ignoreBackdropClick: true,
              keyboard: false,
              "class": 'confirm'
            });
            modalRef.content.type = type;
            modalRef.content.title = title;
            modalRef.content.message = message;

            if (type === 'delete') {
              modalRef.content.messageAlerts = ["Se eliminará toda la información relacionada.", "Esta acción no se puede deshacer."];
            }

            if (type === 'inactivate') {
              modalRef.content.messageAlerts = ['Las informaciones serán inactivadas.'];
            }

            if (cancelTxt) {
              modalRef.content.cancelTxt = cancelTxt;
            }

            if (okTxt) {
              modalRef.content.okTxt = okTxt;
            } // É uma boa prática tipar o retorno.
            // Obs.: ao tipar o retorno é possível acessar o intellisense do serviço.


            return modalRef.content.confirmResult;
          }
        }]);

        return ConfirmModalService;
      }();

      ConfirmModalService.ctorParameters = function () {
        return [{
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]
        }];
      };

      ConfirmModalService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]])], ConfirmModalService);
      /***/
    },

    /***/
    "Fkbs":
    /*!*****************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/formas-pagamento/formas-pagamento.module.ts ***!
      \*****************************************************************************************/

    /*! exports provided: ComercialCadastrosFormasPagamentoModule */

    /***/
    function Fkbs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosFormasPagamentoModule", function () {
        return ComercialCadastrosFormasPagamentoModule;
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


      var angular2_text_mask__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! angular2-text-mask */
      "UVXo");
      /* harmony import */


      var angular2_text_mask__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var ng_brazil__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng-brazil */
      "hTrW");
      /* harmony import */


      var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ng2-currency-mask */
      "D5nU");
      /* harmony import */


      var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_10__);
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _formas_pagamento_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./formas-pagamento-routing.module */
      "S9k7");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./lista/lista.component */
      "Sknv");
      /* harmony import */


      var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./formulario/formulario.component */
      "Rr+7"); // ngx-bootstrap
      // ng-select
      // ng-brazil
      // ng2-currency-mask
      // PNotify
      // Modules
      // Components


      var ComercialCadastrosFormasPagamentoModule = /*#__PURE__*/_createClass(function ComercialCadastrosFormasPagamentoModule() {
        _classCallCheck(this, ComercialCadastrosFormasPagamentoModule);
      });

      ComercialCadastrosFormasPagamentoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_lista_lista_component__WEBPACK_IMPORTED_MODULE_15__["ComercialCadastrosFormasPagamentoListaComponent"], _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_16__["ComercialCadastrosFormasPagamentoFormularioComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"].forRoot(), ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(), ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsDatepickerModule"].forRoot(), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"], angular2_text_mask__WEBPACK_IMPORTED_MODULE_8__["TextMaskModule"], ng2_currency_mask__WEBPACK_IMPORTED_MODULE_10__["CurrencyMaskModule"], ng_brazil__WEBPACK_IMPORTED_MODULE_9__["NgBrazil"], _formas_pagamento_routing_module__WEBPACK_IMPORTED_MODULE_12__["ComercialCadastrosFormasPagamentoModuleRoutingModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_14__["TemplatesModule"]],
        providers: [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"]]
      })], ComercialCadastrosFormasPagamentoModule);
      /***/
    },

    /***/
    "Rr+7":
    /*!*************************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/formas-pagamento/formulario/formulario.component.ts ***!
      \*************************************************************************************************/

    /*! exports provided: ComercialCadastrosFormasPagamentoFormularioComponent */

    /***/
    function Rr7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosFormasPagamentoFormularioComponent", function () {
        return ComercialCadastrosFormasPagamentoFormularioComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./formulario.component.html */
      "6OP7");
      /* harmony import */


      var _formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./formulario.component.scss */
      "3jsM");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _formas_pagamento_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../formas-pagamento.service */
      "tVei");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS");
      /* harmony import */


      var ng_brazil__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ng-brazil */
      "hTrW"); // Services


      var ComercialCadastrosFormasPagamentoFormularioComponent = /*#__PURE__*/function () {
        function ComercialCadastrosFormasPagamentoFormularioComponent(activatedRoute, router, location, formBuilder, formasPagamentoService, pnotifyService, atividadesService, titleService) {
          _classCallCheck(this, ComercialCadastrosFormasPagamentoFormularioComponent);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.location = location;
          this.formBuilder = formBuilder;
          this.formasPagamentoService = formasPagamentoService;
          this.pnotifyService = pnotifyService;
          this.atividadesService = atividadesService;
          this.titleService = titleService;
          this.MASKS = ng_brazil__WEBPACK_IMPORTED_MODULE_12__["MASKS"];
          this.loaderFullScreen = true;
          this.descFormasERP = [];
          this.breadCrumbTree = [];
          this.formChanged = false;
          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialCadastrosFormasPagamentoFormularioComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registrarAcesso();
            this.setBreadCrumb();
            this.setFormBuilder();
            this.disableValorPerc();
            this.getFormFields();
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "teste",
          value: function teste() {}
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            var _this = this;

            this.activatedRoute.params.subscribe(function (params) {
              if (params.id) {
                _this.appTitle = 'Editar Forma de Pagamento';
              } else {
                _this.appTitle = 'Nova Forma de Pagamento';
              }

              _this.titleService.setTitle(_this.appTitle);

              _this.breadCrumbTree = [{
                descricao: 'Home',
                routerLink: '/comercial/home'
              }, {
                descricao: 'Cadastros',
                routerLink: "/comercial/cadastros/".concat(params.idSubModulo)
              }, {
                descricao: 'Formas de pagamento',
                routerLink: "/comercial/cadastros/".concat(params.idSubModulo, "/formas-pagamento/lista")
              }, {
                descricao: _this.appTitle
              }];
            });
          }
        }, {
          key: "setFormBuilder",
          value: function setFormBuilder() {
            if (this.activatedRoute.snapshot.data.detalhes.success === true) {
              var detalhes = this.activatedRoute.snapshot.data.detalhes.data;

              if (detalhes.editavel == undefined || detalhes.editavel == null) {
                detalhes.editavel = 0;
              }

              this.form = this.formBuilder.group({
                codFormaPagamento: [detalhes.codFormaPagamento],
                descricao: [detalhes.descricao, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                codFormaPagamentoERP: [detalhes.codFormaPagamentoERP, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                percentualAcrescimo: [detalhes.percentualAcrescimo],
                percentuaDesconto: [detalhes.percentualDesconto],
                codTipoPerc: 0,
                codValorPerc: null,
                qtdeParcela: [detalhes.qtdeParcela, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                editavel: [detalhes.editavel],
                codTipoDia: [detalhes.codTipoDia, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                codSituacao: [detalhes.codSituacao, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                qtdeDias: this.formBuilder.array([])
              });

              if (detalhes.qtdeDias && detalhes.qtdeDias.length > 0) {
                this.onAddParcelas(detalhes.qtdeDias);
              }

              if (detalhes.percentualAcrescimo > 0) {
                this.form.controls.codTipoPerc.setValue(2);
                this.form.controls.codValorPerc.setValue(detalhes.percentualAcrescimo);
              } else if (detalhes.percentualDesconto > 0) {
                this.form.controls.codTipoPerc.setValue(1);
                this.form.controls.codValorPerc.setValue(detalhes.percentualDesconto);
              }
            } else {
              this.pnotifyService.error();
              this.location.back();
            }

            this.loaderFullScreen = false;
          }
        }, {
          key: "getFormFields",
          value: function getFormFields() {
            var _this2 = this;

            this.loaderFullScreen = true;
            this.formasPagamentoService.getListaFormasERP().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this2.loaderFullScreen = false;
            })).subscribe(function (response) {
              if (response.success === true) {
                _this2.descFormasERP = response.data;

                _this2.descFormasERP.unshift({
                  codFormaPagamento: 0,
                  descricao: 'NENHUM'
                });
              }
            });
          }
        }, {
          key: "disableValorPerc",
          value: function disableValorPerc() {
            if (this.form.controls.codTipoPerc.value == 0) {
              this.form.controls.codValorPerc.disable();
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(change) {
            if (change.codTipoPerc.currentValue > 0) {
              this.onChangePerc();
            }
          }
        }, {
          key: "onChangePerc",
          value: function onChangePerc() {
            if (this.form.controls.codTipoPerc.value > 0) {
              this.form.controls.codValorPerc.enable();
              this.form.controls.codValorPerc.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]);
              this.form.controls.codValorPerc.updateValueAndValidity();
            } else if (this.form.controls.codTipoPerc.value == 0) {
              this.form.controls.codValorPerc.disable();
              this.form.controls.codValorPerc.setValue(null);
              this.form.controls.codValorPerc.clearValidators();
              this.form.controls.codValorPerc.updateValueAndValidity();
            }
          }
        }, {
          key: "qtdeDias",
          get: function get() {
            return this.form.get('qtdeDias');
          }
        }, {
          key: "onAddParcelas",
          value: function onAddParcelas(data) {
            if (!data) {
              this.qtdeDias.clear();
            }

            var qtde = this.form.getRawValue().qtdeParcela;

            for (var i = 0; i < qtde; i++) {
              var dias = data ? data[i].dias : null;
              this.qtdeDias.push(this.formBuilder.group({
                dias: [dias, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]]
              }));
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
            return field.status == 'INVALID' && field.touched;
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
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
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
          key: "onFieldRequired",
          value: function onFieldRequired(abstractControl, abstractControlField) {
            if (abstractControl.validator) {
              var validator = abstractControl.validator({});

              if (validator && validator.required) {
                return 'is-required';
              }
            }

            if (abstractControlField) {
              for (var controlName in abstractControl['controls']) {
                if (abstractControl['controls'][controlName]) {
                  if (this.onFieldRequired(abstractControl['controls'][controlName]) && controlName == abstractControlField) {
                    return 'is-required';
                  }
                }
              }
            }

            return '';
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this3 = this;

            if (this.form.pristine) {
              this.location.back();
            } else {
              if (this.form.valid) {
                this.loaderNavbar = true;
                this.submittingForm = true;
                this.formasPagamentoService.save(this.form.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
                  _this3.loaderNavbar = false;
                  _this3.submittingForm = false;
                })).subscribe({
                  next: function next(response) {
                    if (response.hasOwnProperty('mensagem') && response.hasOwnProperty('success') && response.success === true) {
                      _this3.form.reset();

                      _this3.formChanged = false;

                      _this3.pnotifyService.success(response.mensagem);

                      _this3.activatedRoute.params.subscribe(function (params) {
                        if (params.hasOwnProperty('id')) {
                          _this3.location.back();
                        } else {
                          _this3.router.navigate(['../lista'], {
                            relativeTo: _this3.activatedRoute
                          });
                        }
                      });
                    } else if (response.hasOwnProperty('mensagem') && response.hasOwnProperty('success') && response.success === false) {
                      _this3.pnotifyService.notice(response.mensagem);
                    } else {
                      _this3.pnotifyService.error();
                    }
                  },
                  error: function error(_error) {
                    _this3.pnotifyService.error();
                  }
                });
              }
            }
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
        }]);

        return ComercialCadastrosFormasPagamentoFormularioComponent;
      }();

      ComercialCadastrosFormasPagamentoFormularioComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }, {
          type: _formas_pagamento_service__WEBPACK_IMPORTED_MODULE_8__["ComercialCadastrosFormasPagamentoService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"]
        }];
      };

      ComercialCadastrosFormasPagamentoFormularioComponent.propDecorators = {
        codTipoPerc: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['codTipoPerc']
        }]
      };
      ComercialCadastrosFormasPagamentoFormularioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-cadastros-formas-pagamento-formulario',
        template: _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _formas_pagamento_service__WEBPACK_IMPORTED_MODULE_8__["ComercialCadastrosFormasPagamentoService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"]])], ComercialCadastrosFormasPagamentoFormularioComponent);
      /***/
    },

    /***/
    "S9k7":
    /*!*************************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/formas-pagamento/formas-pagamento-routing.module.ts ***!
      \*************************************************************************************************/

    /*! exports provided: ComercialCadastrosFormasPagamentoModuleRoutingModule */

    /***/
    function S9k7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosFormasPagamentoModuleRoutingModule", function () {
        return ComercialCadastrosFormasPagamentoModuleRoutingModule;
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


      var src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/guards/form-deactivate.guard */
      "iMgG");
      /* harmony import */


      var _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./formulario/formulario-resolver.guard */
      "ybUI");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./lista/lista.component */
      "Sknv");
      /* harmony import */


      var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./formulario/formulario.component */
      "Rr+7"); // Guards
      // Components


      var routes = [{
        path: 'lista',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_5__["ComercialCadastrosFormasPagamentoListaComponent"]
      }, {
        path: 'novo',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__["ComercialCadastrosFormasPagamentoFormularioComponent"],
        resolve: {
          detalhes: _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_4__["ComercialCadastrosFormasPagamentoFormularioResolverGuard"]
        },
        canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]]
      }, {
        path: 'editar/:id',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__["ComercialCadastrosFormasPagamentoFormularioComponent"],
        resolve: {
          detalhes: _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_4__["ComercialCadastrosFormasPagamentoFormularioResolverGuard"]
        },
        canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]]
      }, {
        path: '',
        redirectTo: 'lista',
        pathMatch: 'full'
      }];

      var ComercialCadastrosFormasPagamentoModuleRoutingModule = /*#__PURE__*/_createClass(function ComercialCadastrosFormasPagamentoModuleRoutingModule() {
        _classCallCheck(this, ComercialCadastrosFormasPagamentoModuleRoutingModule);
      });

      ComercialCadastrosFormasPagamentoModuleRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ComercialCadastrosFormasPagamentoModuleRoutingModule);
      /***/
    },

    /***/
    "Sknv":
    /*!***************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/formas-pagamento/lista/lista.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: ComercialCadastrosFormasPagamentoListaComponent */

    /***/
    function Sknv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosFormasPagamentoListaComponent", function () {
        return ComercialCadastrosFormasPagamentoListaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lista.component.html */
      "++X+");
      /* harmony import */


      var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lista.component.scss */
      "duMe");
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


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _formas_pagamento_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../formas-pagamento.service */
      "tVei");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS");
      /* harmony import */


      var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/modules/confirm-modal/confirm-modal.service */
      "FOez");
      /* harmony import */


      var src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/shared/templates/detail-panel/detal-panel.service */
      "gIxL"); // Services


      var ComercialCadastrosFormasPagamentoListaComponent = /*#__PURE__*/function () {
        function ComercialCadastrosFormasPagamentoListaComponent(activatedRoute, router, formBuilder, formasPagamentoService, pnotifyService, atividadesService, titleService, confirmModalService, detailPanelService) {
          _classCallCheck(this, ComercialCadastrosFormasPagamentoListaComponent);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.formBuilder = formBuilder;
          this.formasPagamentoService = formasPagamentoService;
          this.pnotifyService = pnotifyService;
          this.atividadesService = atividadesService;
          this.titleService = titleService;
          this.confirmModalService = confirmModalService;
          this.detailPanelService = detailPanelService;
          this.loaderNavbar = false;
          this.loaderFullScreen = true;
          this.breadCrumbTree = [];
          this.subtitles = [{
            id: 1,
            text: 'Ativo',
            color: 'green'
          }, {
            id: 2,
            text: 'Inativo',
            color: 'red'
          }];
          this.tableConfig = {
            subtitleBorder: true
          };
          this.showDetailPanel = false;
          this.orderBy = 'descricao';
          this.orderType = 'ASC';
          this.maxSize = 10;
          this.itemsPerPage = 300;
          this.currentPage = 1;
          this.totalItems = 0;
          this.dados = [];
          this.dadosPagination = [];
          this.dadosLoaded = false;
          this.dadosEmpty = false;
          this.alteracoes = [];
          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialCadastrosFormasPagamentoListaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registrarAcesso();
            this.setBreadCrumb();
            this.setFormFilter();
            this.titleService.setTitle('Formas de Pagamento');
            this.onDetailPanelEmitter();
            this.setFormaPagamentoSelecionado();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.showDetailPanelSubscription.unsubscribe();
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            var _this4 = this;

            this.activatedRoute.params.subscribe(function (params) {
              _this4.breadCrumbTree = [{
                descricao: 'Home',
                routerLink: '/comercial/home'
              }, {
                descricao: 'Cadastros',
                routerLink: "/comercial/cadastros/".concat(params['idSubModulo'])
              }, {
                descricao: 'Formas de Pagamento'
              }];
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
          key: "setFormFilter",
          value: function setFormFilter() {
            var formValue = this.checkRouterParams();
            this.form = this.formBuilder.group({
              codFormaPagamentoERP: [formValue.codFormaPagamentoERP],
              descricao: [formValue.descricao],
              codTipoDia: [formValue.codTipoDia],
              codSituacao: [formValue.codSituacao],
              orderBy: [formValue.orderBy],
              orderType: [formValue.orderType],
              pagina: [formValue.pagina],
              registros: [formValue.registros]
            });
            this.checkOrder();
            this.loaderFullScreen = false;
          }
        }, {
          key: "checkRouterParams",
          value: function checkRouterParams() {
            var _this6 = this;

            var formValue = {
              codFormaPagamentoERP: null,
              descricao: null,
              codTipoDia: 0,
              codSituacao: '',
              orderBy: this.orderBy,
              orderType: this.orderType,
              pagina: 1,
              registros: this.itemsPerPage
            };
            this.activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (queryParams) {
              if (Object.keys(queryParams).length > 0) {
                var params = atob(queryParams['q']);
                params = JSON.parse(params);

                _this6.search(params);

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
          key: "setFormaPagamentoSelecionado",
          value: function setFormaPagamentoSelecionado() {
            this.formaPagamentoSelecionado = {
              codFormaPagamento: 0,
              descricao: null,
              codFormaPagamentoERP: 0,
              qtdeParcela: 0,
              qtdeDias: null,
              codTipoDia: 2,
              codSituacao: 2,
              situacao: null
            };
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
          value: function onFieldRequired(abstractControl, abstractControlField) {
            if (abstractControl.validator) {
              var validator = abstractControl.validator({});

              if (validator && validator.required) {
                return 'is-required';
              }
            }

            if (abstractControlField) {
              for (var controlName in abstractControl['controls']) {
                if (abstractControl['controls'][controlName]) {
                  if (this.onFieldRequired(abstractControl['controls'][controlName]) && controlName == abstractControlField) {
                    return 'is-required';
                  }
                }
              }
            }

            return '';
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
          }
        }, {
          key: "onFilter",
          value: function onFilter() {
            if (this.form.valid) {
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
          key: "verificaParams",
          value: function verificaParams() {
            var params = {};

            if (this.form.value.codFormaPagamentoERP) {
              params.codFormaPagamentoERP = this.form.value.codFormaPagamentoERP;
            }

            if (this.form.value.descricao) {
              params.descricao = this.form.value.descricao;
            }

            if (this.form.value.codSituacao) {
              params.codSituacao = this.form.value.codSituacao;
            }

            params.codTipoDia = this.form.value.codTipoDia;
            params.orderBy = this.form.value.orderBy;
            params.orderType = this.form.value.orderType;
            return params;
          }
        }, {
          key: "search",
          value: function search(params) {
            var _this7 = this;

            this.loaderNavbar = true;
            this.dados = [];
            this.dadosPagination = [];
            this.dadosLoaded = false;
            this.dadosEmpty = false;
            this.detailPanelService.hide();
            this.formasPagamentoService.getListaFormasPagamento(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this7.loaderNavbar = false;
              _this7.dadosLoaded = true;
            })).subscribe({
              next: function next(response) {
                if (response.hasOwnProperty('success') && response.success === true) {
                  _this7.dados = response.data;
                  _this7.dadosPagination = _this7.dados.slice(0, _this7.itemsPerPage);
                  _this7.totalItems = _this7.dados.length;
                  _this7.dadosLoaded = true;
                } else if (response.hasOwnProperty('success') && response.success === false) {
                  _this7.dadosEmpty = true;
                } else {
                  _this7.pnotifyService.error();

                  _this7.dadosEmpty = true;
                }
              },
              error: function error(_error2) {
                _this7.dadosEmpty = true;

                if (_error2.error.hasOwnProperty('mensagem')) {
                  _this7.pnotifyService.error(_error2.error.mensagem);
                } else {
                  _this7.pnotifyService.error();
                }
              }
            });
          }
        }, {
          key: "classStatusBorder",
          value: function classStatusBorder(formaPagamento) {
            var borderClass;

            if (formaPagamento.codSituacao === 0) {
              borderClass = 'border-danger';
            } else if (formaPagamento.codSituacao === 1) {
              borderClass = 'border-success';
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
          key: "onDetails",
          value: function onDetails(formaPagamento) {
            var _this8 = this;

            this.loaderNavbar = true;
            this.detailPanelService.show();
            this.setFormaPagamentoSelecionado();
            this.formaPagamentoSelecionado = formaPagamento;
            this.alteracoes = [];
            this.formasPagamentoService.getAlteracoes(formaPagamento.codFormaPagamento).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              setTimeout(function () {
                _this8.loaderNavbar = false;
              }, 500);
            })).subscribe({
              next: function next(response) {
                if (response.hasOwnProperty('success') && response.success === true) {
                  // Não está vazio.
                  _this8.detailPanelService.loadedFinished(false);

                  _this8.alteracoes = response.data;
                } else if (response.hasOwnProperty('success') && response.success === false) {
                  // Vazio.
                  _this8.detailPanelService.loadedFinished(true);
                } else {
                  // Vazio e com possível erro.
                  _this8.pnotifyService.error();

                  _this8.detailPanelService.loadedFinished(true);
                }
              },
              error: function error(_error3) {
                // Vazio e com erro.
                _this8.detailPanelService.loadedFinished(true);

                if (_error3.error.hasOwnProperty('mensagem')) {
                  _this8.pnotifyService.error(_error3.error.mensagem);
                } else {
                  _this8.pnotifyService.error();
                }
              }
            });
          }
        }, {
          key: "onEdit",
          value: function onEdit(formaPagamento) {
            this.router.navigate(['../editar', formaPagamento.codFormaPagamento], {
              relativeTo: this.activatedRoute
            });
          }
        }, {
          key: "onActivate",
          value: function onActivate(index, formaPagamento) {
            var _this9 = this;

            this.confirmActivate().asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (result) {
              return result ? _this9.activateFormasPagamento(index, formaPagamento) : rxjs__WEBPACK_IMPORTED_MODULE_6__["EMPTY"];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this9.loaderNavbar = false;
            })).subscribe(function (success) {
              _this9.pnotifyService.success();

              _this9.refreshMainData(formaPagamento);
            }, function (error) {
              _this9.pnotifyService.error();

              _this9.dadosPagination[index].codSituacao = 0;
            });
          }
        }, {
          key: "confirmActivate",
          value: function confirmActivate() {
            return this.confirmModalService.showConfirm(null, null, 'Deseja realmente prosseguir com a ativação do registro?', 'Cancelar', 'Confirmar');
          }
        }, {
          key: "activateFormasPagamento",
          value: function activateFormasPagamento(index, formaPagamento) {
            this.loaderNavbar = true;
            this.dadosPagination[index].codSituacao = 1;
            return this.formasPagamentoService.activateFormasPagamento(formaPagamento.codFormaPagamento);
          }
        }, {
          key: "onInactivate",
          value: function onInactivate(index, formaPagamento) {
            var _this10 = this;

            this.confirmInactive().asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (result) {
              return result ? _this10.inactivateFormasPagamento(index, formaPagamento) : rxjs__WEBPACK_IMPORTED_MODULE_6__["EMPTY"];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this10.loaderNavbar = false;
            })).subscribe(function (success) {
              _this10.pnotifyService.success();

              _this10.refreshMainData(formaPagamento);
            }, function (error) {
              _this10.pnotifyService.error();

              _this10.dadosPagination[index].codSituacao = 1;
            });
          }
        }, {
          key: "confirmInactive",
          value: function confirmInactive() {
            return this.confirmModalService.showConfirm('inactivate', 'Confirmar inativação', 'Deseja realmente prosseguir com a inativação do registro?', 'Cancelar', 'Confirmar');
          }
        }, {
          key: "inactivateFormasPagamento",
          value: function inactivateFormasPagamento(index, formaPagamento) {
            this.loaderNavbar = true;
            this.dadosPagination[index].codSituacao = 0;
            return this.formasPagamentoService.inactivateFormasPagamento(formaPagamento.codFormaPagamento);
          }
        }, {
          key: "refreshMainData",
          value: function refreshMainData(formaPagamento) {
            for (var i = 0; i < this.dados.length; i++) {
              if (formaPagamento.codFormaPagamento === this.dados[i].codFormaPagamento) {
                this.dados[i].codSituacao = formaPagamento.codSituacao;
                return;
              }
            }
          }
        }]);

        return ComercialCadastrosFormasPagamentoListaComponent;
      }();

      ComercialCadastrosFormasPagamentoListaComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _formas_pagamento_service__WEBPACK_IMPORTED_MODULE_8__["ComercialCadastrosFormasPagamentoService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"]
        }, {
          type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_12__["ConfirmModalService"]
        }, {
          type: src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_13__["DetailPanelService"]
        }];
      };

      ComercialCadastrosFormasPagamentoListaComponent.propDecorators = {
        scrollToFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['scrollToFilter', {}]
        }]
      };
      ComercialCadastrosFormasPagamentoListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-cadastros-formas-pagamento-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _formas_pagamento_service__WEBPACK_IMPORTED_MODULE_8__["ComercialCadastrosFormasPagamentoService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"], src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_12__["ConfirmModalService"], src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_13__["DetailPanelService"]])], ComercialCadastrosFormasPagamentoListaComponent);
      /***/
    },

    /***/
    "duMe":
    /*!*****************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/formas-pagamento/lista/lista.component.scss ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function duMe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NhZGFzdHJvcy9mb3JtYXMtcGFnYW1lbnRvL2xpc3RhL2xpc3RhLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "iMgG":
    /*!*************************************************!*\
      !*** ./src/app/guards/form-deactivate.guard.ts ***!
      \*************************************************/

    /*! exports provided: FormDeactivateGuard */

    /***/
    function iMgG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormDeactivateGuard", function () {
        return FormDeactivateGuard;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var FormDeactivateGuard = /*#__PURE__*/function () {
        function FormDeactivateGuard() {
          _classCallCheck(this, FormDeactivateGuard);
        }

        _createClass(FormDeactivateGuard, [{
          key: "canDeactivate",
          value: function canDeactivate(component, route, state) {
            return component.formCanDeactivate();
          }
        }]);

        return FormDeactivateGuard;
      }();

      FormDeactivateGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], FormDeactivateGuard);
      /***/
    },

    /***/
    "tVei":
    /*!******************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/formas-pagamento/formas-pagamento.service.ts ***!
      \******************************************************************************************/

    /*! exports provided: ComercialCadastrosFormasPagamentoService */

    /***/
    function tVei(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosFormasPagamentoService", function () {
        return ComercialCadastrosFormasPagamentoService;
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

      var ComercialCadastrosFormasPagamentoService = /*#__PURE__*/function () {
        function ComercialCadastrosFormasPagamentoService(http) {
          _classCallCheck(this, ComercialCadastrosFormasPagamentoService);

          this.http = http;
          this.API = "http://23.254.204.187/api/comercial/cadastros/formas-pagamento";
        }

        _createClass(ComercialCadastrosFormasPagamentoService, [{
          key: "getListaFormasPagamento",
          value: function getListaFormasPagamento(params) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/lista"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getAlteracoes",
          value: function getAlteracoes(codFormaPagamento) {
            return this.http.get("".concat(this.API, "/alteracoes/").concat(codFormaPagamento)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getDetalhes",
          value: function getDetalhes(codFormaPagamento) {
            return this.http.get("".concat(this.API, "/detalhes/").concat(codFormaPagamento)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "saveFormasPagamento",
          value: function saveFormasPagamento(formaPagamento) {
            return this.http.post("".concat(this.API, "/salvar"), formaPagamento).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "updateFormasPagamento",
          value: function updateFormasPagamento(formaPagamento) {
            return this.http.put("".concat(this.API, "/atualizar"), formaPagamento).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "save",
          value: function save(formaPagamento) {
            if (formaPagamento.codFormaPagamento !== null) {
              return this.updateFormasPagamento(formaPagamento);
            }

            return this.saveFormasPagamento(formaPagamento);
          }
        }, {
          key: "activateFormasPagamento",
          value: function activateFormasPagamento(codigo) {
            return this.http.post("".concat(this.API, "/ativar"), codigo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "inactivateFormasPagamento",
          value: function inactivateFormasPagamento(codigo) {
            return this.http.post("".concat(this.API, "/inativar"), codigo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getListaFormasERP",
          value: function getListaFormasERP() {
            return this.http.get("".concat(this.API, "/erp/lista")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }]);

        return ComercialCadastrosFormasPagamentoService;
      }();

      ComercialCadastrosFormasPagamentoService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      ComercialCadastrosFormasPagamentoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ComercialCadastrosFormasPagamentoService);
      /***/
    },

    /***/
    "ybUI":
    /*!******************************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/formas-pagamento/formulario/formulario-resolver.guard.ts ***!
      \******************************************************************************************************/

    /*! exports provided: ComercialCadastrosFormasPagamentoFormularioResolverGuard */

    /***/
    function ybUI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosFormasPagamentoFormularioResolverGuard", function () {
        return ComercialCadastrosFormasPagamentoFormularioResolverGuard;
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


      var _formas_pagamento_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../formas-pagamento.service */
      "tVei"); // Services


      var ComercialCadastrosFormasPagamentoFormularioResolverGuard = /*#__PURE__*/function () {
        function ComercialCadastrosFormasPagamentoFormularioResolverGuard(formasPagamentoService) {
          _classCallCheck(this, ComercialCadastrosFormasPagamentoFormularioResolverGuard);

          this.formasPagamentoService = formasPagamentoService;
        }

        _createClass(ComercialCadastrosFormasPagamentoFormularioResolverGuard, [{
          key: "resolve",
          value: function resolve(route) {
            if (route.params && route.params.id) {
              return this.formasPagamentoService.getDetalhes(route.params.id);
            } // É implementado o método "of" para manter a tipagem de retorno com Observable.


            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
              success: true,
              data: {
                codFormaPagamento: null,
                formaPagamento: null,
                codFormaPagamentoERP: null,
                codTipoPerc: null,
                codValorPerc: null,
                qtdeParcelas: null,
                codTipoDia: null,
                codSituacao: null,
                situacao: null,
                parcelas: null
              }
            });
          }
        }]);

        return ComercialCadastrosFormasPagamentoFormularioResolverGuard;
      }();

      ComercialCadastrosFormasPagamentoFormularioResolverGuard.ctorParameters = function () {
        return [{
          type: _formas_pagamento_service__WEBPACK_IMPORTED_MODULE_3__["ComercialCadastrosFormasPagamentoService"]
        }];
      };

      ComercialCadastrosFormasPagamentoFormularioResolverGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_formas_pagamento_service__WEBPACK_IMPORTED_MODULE_3__["ComercialCadastrosFormasPagamentoService"]])], ComercialCadastrosFormasPagamentoFormularioResolverGuard);
      /***/
    }
  }]);
})();
//# sourceMappingURL=formas-pagamento-formas-pagamento-module-es5.js.map