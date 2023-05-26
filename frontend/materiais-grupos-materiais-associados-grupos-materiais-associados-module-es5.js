(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["materiais-grupos-materiais-associados-grupos-materiais-associados-module"], {
    /***/
    "7aYQ":
    /*!*************************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/materiais/grupos-materiais-associados/grupos-materiais-associados.module.ts ***!
      \*************************************************************************************************************************/

    /*! exports provided: ComercialCadastrosMateriaisGrupoMateriaisAssociadosModule */

    /***/
    function aYQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosMateriaisGrupoMateriaisAssociadosModule", function () {
        return ComercialCadastrosMateriaisGrupoMateriaisAssociadosModule;
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


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng2-currency-mask */
      "D5nU");
      /* harmony import */


      var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _grupos_materiais_associados_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./grupos-materiais-associados-routing.module */
      "eWat");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./lista/lista.component */
      "jk8a");
      /* harmony import */


      var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./formulario/formulario.component */
      "fK7M");
      /* harmony import */


      var _grupos_materiais_associados_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./grupos-materiais-associados.service */
      "uUBR"); // ngx-bootstrap
      // ng-select
      // ng2-currency-mask
      // PNotify
      // Modules
      // Components
      // Services


      var ComercialCadastrosMateriaisGrupoMateriaisAssociadosModule = function ComercialCadastrosMateriaisGrupoMateriaisAssociadosModule() {
        _classCallCheck(this, ComercialCadastrosMateriaisGrupoMateriaisAssociadosModule);
      };

      ComercialCadastrosMateriaisGrupoMateriaisAssociadosModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_lista_lista_component__WEBPACK_IMPORTED_MODULE_12__["ComercialCadastrosMateriaisGrupoMateriaisAssociadosListaComponent"], _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_13__["ComercialCadastrosMateriaisGrupoMateriaisAssociadosFormularioComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"].forRoot(), ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"], ng2_currency_mask__WEBPACK_IMPORTED_MODULE_7__["CurrencyMaskModule"], _grupos_materiais_associados_routing_module__WEBPACK_IMPORTED_MODULE_9__["ComercialCadastrosMateriaisGrupoMateriaisAssociadosRoutingModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_11__["TemplatesModule"]],
        providers: [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"], _grupos_materiais_associados_service__WEBPACK_IMPORTED_MODULE_14__["ComercialCadastrosMateriaisGrupoMateriaisAssociadosService"]]
      })], ComercialCadastrosMateriaisGrupoMateriaisAssociadosModule);
      /***/
    },

    /***/
    "AswN":
    /*!************************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/materiais/grupos-materiais-associados/formulario/formulario.component.scss ***!
      \************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function AswN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NhZGFzdHJvcy9tYXRlcmlhaXMvZ3J1cG9zLW1hdGVyaWFpcy1hc3NvY2lhZG9zL2Zvcm11bGFyaW8vZm9ybXVsYXJpby5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "CxXW":
    /*!***************************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/materiais/grupos-materiais-associados/formulario/formulario-resolver.guard.ts ***!
      \***************************************************************************************************************************/

    /*! exports provided: ComercialCadastrosMateriaisGrupoMateriaisAssociadosFormularioResolverGuard */

    /***/
    function CxXW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosMateriaisGrupoMateriaisAssociadosFormularioResolverGuard", function () {
        return ComercialCadastrosMateriaisGrupoMateriaisAssociadosFormularioResolverGuard;
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


      var _grupos_materiais_associados_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../grupos-materiais-associados.service */
      "uUBR"); // Services


      var ComercialCadastrosMateriaisGrupoMateriaisAssociadosFormularioResolverGuard = /*#__PURE__*/function () {
        function ComercialCadastrosMateriaisGrupoMateriaisAssociadosFormularioResolverGuard(materiaisGruposService) {
          _classCallCheck(this, ComercialCadastrosMateriaisGrupoMateriaisAssociadosFormularioResolverGuard);

          this.materiaisGruposService = materiaisGruposService;
        }

        _createClass(ComercialCadastrosMateriaisGrupoMateriaisAssociadosFormularioResolverGuard, [{
          key: "resolve",
          value: function resolve(route) {
            if (route.params && route.params.id) {
              return this.materiaisGruposService.getDetalhes(route.params.id);
            } // É implementado o método "of" para manter a tipagem de retorno com Observable.


            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
              success: true,
              mensagem: null,
              data: {
                codGrupo: null,
                nomeGrupo: null,
                precoGrupo: null,
                codSituacao: '',
                materiais: []
              }
            });
          }
        }]);

        return ComercialCadastrosMateriaisGrupoMateriaisAssociadosFormularioResolverGuard;
      }();

      ComercialCadastrosMateriaisGrupoMateriaisAssociadosFormularioResolverGuard.ctorParameters = function () {
        return [{
          type: _grupos_materiais_associados_service__WEBPACK_IMPORTED_MODULE_3__["ComercialCadastrosMateriaisGrupoMateriaisAssociadosService"]
        }];
      };

      ComercialCadastrosMateriaisGrupoMateriaisAssociadosFormularioResolverGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_grupos_materiais_associados_service__WEBPACK_IMPORTED_MODULE_3__["ComercialCadastrosMateriaisGrupoMateriaisAssociadosService"]])], ComercialCadastrosMateriaisGrupoMateriaisAssociadosFormularioResolverGuard);
      /***/
    },

    /***/
    "DPWG":
    /*!**************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/cadastros/materiais/grupos-materiais-associados/formulario/formulario.component.html ***!
      \**************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function DPWG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\n<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<app-header [appTitle]=\"appTitle\">\n  <button\n    type=\"button\"\n    (click)=\"onCancel()\"\n    [disabled]=\"submittingForm\">\n    Cancelar\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"onSubmit()\"\n    [disabled]=\"!form.valid || submittingForm\">\n    Salvar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\n  <div class=\"row\">\n    <div class=\"col-lg-6\">\n      <form [formGroup]=\"form\">\n        <div class=\"mtc-title\">Dados do grupo</div>\n        <div class=\"form-row\">\n          <div class=\"form-group col\">\n            <label for=\"nomeGrupo\">Nome</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"nomeGrupo\"\n              formControlName=\"nomeGrupo\"\n              (input)=\"onInput()\"\n              autocomplete=\"new-password\"\n              [ngClass]=\"onFieldError('nomeGrupo') + ' ' + onFieldRequired(form.controls.nomeGrupo)\">\n            <invalid-form-control [show]=\"onFieldInvalid('nomeGrupo')\" message=\"Nome é obrigatório.\"></invalid-form-control>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-lg-6\">\n            <label for=\"codSituacao\">Situação</label>\n            <select\n              class=\"form-control\"\n              id=\"codSituacao\"\n              formControlName=\"codSituacao\"\n              (change)=\"onInput()\"\n              [ngClass]=\"onFieldError('codSituacao') + ' ' + onFieldRequired(form.controls.codSituacao)\">\n              <option value=\"\">SELECIONE UMA OPÇÃO</option>\n              <option value=\"0\">Inativo</option>\n              <option value=\"1\">Ativo</option>\n            </select>\n            <invalid-form-control [show]=\"onFieldInvalid('codSituacao')\" message=\"Situação é obrigatório.\"></invalid-form-control>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"col\">\n            <hr>\n          </div>\n        </div>\n        <div formArrayName=\"assocMateriais\">\n          <div class=\"row mb-2\">\n            <div class=\"col mt-auto\">\n              <div class=\"mtc-title mb-0\">Materiais associados ao grupo</div>\n            </div>\n            <div class=\"col\">\n              <div class=\"d-flex justify-content-end\">\n                <button\n                  type=\"button\"\n                  class=\"btn btn-sm btn-outline-danger\"\n                  (click)=\"onLimparAssociacoes(materiaisAssociados, true)\">\n                  <i class=\"fas fa-trash\"></i>\n                  <span>Limpar lista</span>\n                </button>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\" *ngIf=\"showMateriais && materiaisAssociados.length > 0\">\n            <div class=\"col\">\n              <custom-table [config]=\"tableConfigAssocMateriais\">\n                <ng-template #thead let-thead>\n                  <tr>\n                    <th scope=\"col\" style=\"width: 95%\">Material</th>\n                    <th scope=\"col\" style=\"width: 5%\"></th>\n                  </tr>\n                </ng-template>\n                <ng-template #tbody let-tbody>\n                  <tr *ngFor=\"let material of materiaisAssociados; let i = index\">\n                    <td style=\"width: 95%\">\n                      {{ material.codMaterial }} - {{ material.nomeMaterial | uppercase }}\n                    </td>\n                    <td class=\"text-center\" style=\"width: 5%\">\n                      <btn-icon\n                        icon=\"fas fa-trash\"\n                        size=\"small\"\n                        (click)=\"material.checked = !material.checked; onLimparAssociacoes([material])\">\n                      </btn-icon>\n                    </td>\n                  </tr>\n                </ng-template>\n              </custom-table>\n            </div>\n          </div>\n          <div class=\"row\" *ngIf=\"showMateriais && materiaisAssociados.length === 0\">\n            <div class=\"col\">\n              <message\n                icon=\"fas fa-exchange-alt\"\n                text=\"Nenhuma associação encontrada\">\n              </message>\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n    <div class=\"col-lg-6 border-left\">\n      <div class=\"row mb-2\">\n        <div class=\"col mt-auto\">\n          <div class=\"mtc-title mb-0\">Pesquisa de materiais</div>\n        </div>\n        <div class=\"col\">\n          <div class=\"d-flex justify-content-end\">\n            <button\n              type=\"button\"\n              class=\"btn btn-sm btn-outline-secondary\"\n              (click)=\"onFilterMateriais()\"\n              [disabled]=\"searching === true\">\n              <i class=\"fas fa-search\"></i>\n              <span>Pesquisar</span>\n            </button>\n          </div>\n        </div>\n      </div>\n      <advanced-filter>\n        <form [formGroup]=\"formMateriais\" autocomplete=\"off\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-lg-6\">\n              <label for=\"codLinha\">Linha</label>\n              <ng-select\n                [searchable]=\"true\"\n                [clearable]=\"false\"\n                [items]=\"linhas\"\n                formControlName=\"codLinha\"\n                [virtualScroll]=\"true\"\n                labelForId=\"codLinha\"\n                bindLabel=\"descricao\"\n                bindValue=\"id\"\n                (change)=\"onChangeLinha($event.id)\">\n              </ng-select>\n            </div>\n            <div class=\"form-group col-lg-6\">\n              <label for=\"codClasse\">Classe</label>\n              <ng-select\n                [searchable]=\"true\"\n                [clearable]=\"false\"\n                [items]=\"filteredClasses\"\n                formControlName=\"codClasse\"\n                [virtualScroll]=\"true\"\n                labelForId=\"codClasse\"\n                bindLabel=\"nomeClasse\"\n                bindValue=\"idClasse\"\n                (change)=\"onChangeClasse($event.idClasse)\">\n              </ng-select>\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-lg-12\">\n              <label for=\"codMaterial\">Material</label>\n              <ng-select\n                [searchable]=\"true\"\n                [clearable]=\"false\"\n                [items]=\"materiais\"\n                formControlName=\"codMaterial\"\n                [virtualScroll]=\"true\"\n                labelForId=\"codMaterial\"\n                bindLabel=\"codigoDescricaoMaterial\"\n                bindValue=\"codigoMaterial\"\n                [loading]=\"materiaisLoader\"\n                loadingText=\"Carregando...\">\n              </ng-select>\n            </div>\n          </div>\n        </form>\n      </advanced-filter>\n      <div *ngIf=\"materiaisLista.length > 0\">\n        <div class=\"row mb-2\">\n          <div class=\"col mt-auto\">\n            <div class=\"mtc-title mb-0\">Seleção de materiais</div>\n          </div>\n          <div class=\"col\">\n            <div class=\"d-flex justify-content-end\">\n              <button\n                type=\"button\"\n                class=\"btn btn-sm btn-outline-primary\"\n                (click)=\"onAssociarMateriais()\"\n                [disabled]=\"searching === true\">\n                <i class=\"fas fa-exchange-alt\"></i>\n                <span>Associar</span>\n              </button>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <custom-table [config]=\"tableConfigMateriais\">\n              <ng-template #thead let-thead>\n                <tr>\n                  <th\n                    scope=\"col\"\n                    class=\"text-center\"\n                    style=\"width: 5%\">\n                    <btn-icon\n                      [icon]=\"toggleAll ? 'fas fa-check-square' : 'far fa-square'\"\n                      size=\"small\"\n                      (click)=\"onToggleAll()\">\n                    </btn-icon>\n                  </th>\n                  <th scope=\"col\" style=\"width: 95%\">Material</th>\n                </tr>\n              </ng-template>\n              <ng-template #tbody let-tbody>\n                <tr *ngFor=\"let material of materiaisLista; let i = index;\">\n                  <td class=\"text-center\" style=\"width: 5%\">\n                    <btn-icon\n                      [disabled]=\"material.inGrupoMaterialTabelaPreco == 1\"\n                      [icon]=\"material.checked == 1 && material.inGrupoMaterialTabelaPreco == 0 ? 'fas fa-check-square' : 'far fa-square'\"\n                      size=\"small\"\n                      (click)=\"onCheckMaterial(material)\">                      \n                    </btn-icon>\n                  </td>\n                  <td\n                    class=\"hover\"\n                    style=\"width: 90%\"\n                    (click)=\"onCheckMaterial(material)\">\n                    {{ material.codigoDescricaoMaterial | uppercase }}\n                  </td>\n                  <td *ngIf=\"material.inGrupoMaterialTabelaPreco == 1\" style=\"width: 5%;\">\n                    <button type=\"button\" class=\"btn-icon-sm\" style=\"color: #a10\">\n                      <i class=\"fas fa-exclamation-triangle\" placement=\"left\" tooltip=\"Este item está associado ao grupo {{ material.nomeGrupoMaterialTabelaPreco }}\"></i>\n                    </button>\n                  </td>\n                  <td *ngIf=\"material.inGrupoMaterialTabelaPreco == 0\" style=\"width: 5%; color:#a10;\">\n                    <button type=\"button\" class=\"btn-icon-sm\" style=\"color: #090\">\n                      <i class=\"fas fa-check-circle\" placement=\"left\" tooltip=\"Este item não possui associações\"></i>\n                    </button>\n                  </td>\n                </tr>\n              </ng-template>\n            </custom-table>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\" *ngIf=\"searching === true\">\n        <div class=\"col\">\n          <message\n            icon=\"fas fa-cog fa-spin\"\n            text=\"Estamos pesquisando os materiais para você...\">\n          </message>\n        </div>\n      </div>\n      <div *ngIf=\"searching === false\">\n        <div class=\"row\" *ngIf=\"materiaisListaEmpty && materiaisListaLoaded\">\n          <div class=\"col\">\n            <message\n              icon=\"fas fa-box-open\"\n              text=\"Nenhuma informação encontrada\">\n            </message>\n          </div>\n        </div>\n        <div class=\"row\" *ngIf=\"materiaisLista.length === 0 && !firstSearch\">\n          <div class=\"col\">\n            <message\n              icon=\"fas fa-search\"\n              text=\"Preecha os campos acima para pesquisar materiais\">\n            </message>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</app-body>\n";
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
              modalRef.content.messageAlerts = ['Las informacion serán inactivadas.'];
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
    "VgqD":
    /*!********************************************************!*\
      !*** ./src/app/modules/comercial/comercial.service.ts ***!
      \********************************************************/

    /*! exports provided: ComercialService */

    /***/
    function VgqD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialService", function () {
        return ComercialService;
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

      var ComercialService = /*#__PURE__*/function () {
        function ComercialService(http) {
          _classCallCheck(this, ComercialService);

          this.http = http;
          this.API = "https://crm360.monterrey.com.bo/api/comercial";
        }

        _createClass(ComercialService, [{
          key: "getEmpresas",
          value: function getEmpresas(params) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/empresas"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getDepositos",
          value: function getDepositos(params) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/depositos"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getLinhas",
          value: function getLinhas(params) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/linhas"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getClasses",
          value: function getClasses(params) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/classes"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getMateriais",
          value: function getMateriais() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/materiais"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getPerfil",
          value: function getPerfil() {
            return this.http.get("".concat(this.API, "/perfil")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getEscritorios",
          value: function getEscritorios() {
            return this.http.get("".concat(this.API, "/escritorios")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }]);

        return ComercialService;
      }();

      ComercialService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      ComercialService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ComercialService);
      /***/
    },

    /***/
    "XlV9":
    /*!**************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/materiais/grupos-materiais-associados/lista/lista.component.scss ***!
      \**************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function XlV9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NhZGFzdHJvcy9tYXRlcmlhaXMvZ3J1cG9zLW1hdGVyaWFpcy1hc3NvY2lhZG9zL2xpc3RhL2xpc3RhLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "eWat":
    /*!*********************************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/materiais/grupos-materiais-associados/grupos-materiais-associados-routing.module.ts ***!
      \*********************************************************************************************************************************/

    /*! exports provided: ComercialCadastrosMateriaisGrupoMateriaisAssociadosRoutingModule */

    /***/
    function eWat(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosMateriaisGrupoMateriaisAssociadosRoutingModule", function () {
        return ComercialCadastrosMateriaisGrupoMateriaisAssociadosRoutingModule;
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
      "CxXW");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./lista/lista.component */
      "jk8a");
      /* harmony import */


      var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./formulario/formulario.component */
      "fK7M"); // Guards
      // Components


      var routes = [{
        path: 'lista',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_5__["ComercialCadastrosMateriaisGrupoMateriaisAssociadosListaComponent"]
      }, {
        path: 'novo',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__["ComercialCadastrosMateriaisGrupoMateriaisAssociadosFormularioComponent"],
        resolve: {
          detalhes: _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_4__["ComercialCadastrosMateriaisGrupoMateriaisAssociadosFormularioResolverGuard"]
        },
        canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]]
      }, {
        path: 'editar/:id',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__["ComercialCadastrosMateriaisGrupoMateriaisAssociadosFormularioComponent"],
        resolve: {
          detalhes: _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_4__["ComercialCadastrosMateriaisGrupoMateriaisAssociadosFormularioResolverGuard"]
        },
        canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]]
      }, {
        path: '',
        redirectTo: 'lista',
        pathMatch: 'full'
      }];

      var ComercialCadastrosMateriaisGrupoMateriaisAssociadosRoutingModule = function ComercialCadastrosMateriaisGrupoMateriaisAssociadosRoutingModule() {
        _classCallCheck(this, ComercialCadastrosMateriaisGrupoMateriaisAssociadosRoutingModule);
      };

      ComercialCadastrosMateriaisGrupoMateriaisAssociadosRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ComercialCadastrosMateriaisGrupoMateriaisAssociadosRoutingModule);
      /***/
    },

    /***/
    "fK7M":
    /*!**********************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/materiais/grupos-materiais-associados/formulario/formulario.component.ts ***!
      \**********************************************************************************************************************/

    /*! exports provided: ComercialCadastrosMateriaisGrupoMateriaisAssociadosFormularioComponent */

    /***/
    function fK7M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosMateriaisGrupoMateriaisAssociadosFormularioComponent", function () {
        return ComercialCadastrosMateriaisGrupoMateriaisAssociadosFormularioComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./formulario.component.html */
      "DPWG");
      /* harmony import */


      var _formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./formulario.component.scss */
      "AswN");
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


      var ng_brazil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-brazil */
      "hTrW");
      /* harmony import */


      var _grupos_materiais_associados_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../grupos-materiais-associados.service */
      "uUBR");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS");
      /* harmony import */


      var src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/modules/comercial/comercial.service */
      "VgqD");
      /* harmony import */


      var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/shared/modules/confirm-modal/confirm-modal.service */
      "FOez"); // ng-brazil
      // Services


      var ComercialCadastrosMateriaisGrupoMateriaisAssociadosFormularioComponent = /*#__PURE__*/function () {
        function ComercialCadastrosMateriaisGrupoMateriaisAssociadosFormularioComponent(activatedRoute, router, location, formBuilder, materiaisGrupoService, pnotifyService, atividadesService, titleService, comercialService, confirmModalService) {
          _classCallCheck(this, ComercialCadastrosMateriaisGrupoMateriaisAssociadosFormularioComponent);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.location = location;
          this.formBuilder = formBuilder;
          this.materiaisGrupoService = materiaisGrupoService;
          this.pnotifyService = pnotifyService;
          this.atividadesService = atividadesService;
          this.titleService = titleService;
          this.comercialService = comercialService;
          this.confirmModalService = confirmModalService;
          this.MASKS = ng_brazil__WEBPACK_IMPORTED_MODULE_8__["MASKS"];
          this.loaderFullScreen = true;
          this.breadCrumbTree = [];
          this.tableConfigAssocMateriais = {
            fixedHeader: false,
            bodyHeight: 230,
            hover: false
          };
          this.tableConfigMateriais = {
            fixedHeader: false,
            bodyHeight: 243
          };
          this.codClasse = null;
          this.formChanged = false;
          this.showMateriais = true;
          this.materiaisAssociados = [];
          this.linhas = [];
          this.classes = [];
          this.filteredClasses = [];
          this.materiais = [];
          this.toggleAll = false;
          this.searching = false;
          this.firstSearch = false;
          this["delete"] = false;
          this.adicionar = false;
          this.materiaisLista = [];
          this.materiaisListaLoaded = false;
          this.materiaisListaEmpty = false;
          this.excluirGrupo = false;
          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialCadastrosMateriaisGrupoMateriaisAssociadosFormularioComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registrarAcesso();
            this.setBreadCrumb();
            this.getFilterValues();
            this.setFormBuilder();
            this.setFormMateriais();
            this.titleService.setTitle('Cadastro de grupo de materiais');
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            var _this = this;

            this.activatedRoute.params.subscribe(function (params) {
              if (params.id) {
                _this.appTitle = 'Editar grupo de materiais';
              } else {
                _this.appTitle = 'Novo grupo de materiais';
              }

              _this.breadCrumbTree = [{
                descricao: 'Home',
                routerLink: '/comercial/home'
              }, {
                descricao: 'Cadastros',
                routerLink: "/comercial/cadastros/".concat(params.idSubModulo)
              }, {
                descricao: 'Grupos de materiais',
                routerLink: "/comercial/cadastros/".concat(params.idSubModulo, "/materiais/grupos-materiais-associados/lista")
              }, {
                descricao: _this.appTitle
              }];
            });
          }
        }, {
          key: "getFilterValues",
          value: function getFilterValues() {
            var _this2 = this;

            this.materiaisGrupoService.getFilterValues().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this2.loaderFullScreen = false;
            })).subscribe(function (response) {
              if (response[0].responseCode === 200) {
                _this2.linhas = response[0].result;
              } else {
                _this2.pnotifyService.error();

                _this2.location.back();
              }

              if (response[1].responseCode === 200) {
                _this2.classes = response[1].result;
              } else {
                _this2.pnotifyService.error();

                _this2.location.back();
              }
            });
          }
        }, {
          key: "setFormBuilder",
          value: function setFormBuilder() {
            var resolver = this.activatedRoute.snapshot.data.detalhes;

            if (resolver.success === true) {
              var detalhes = resolver.data;
              this.form = this.formBuilder.group({
                codGrupo: [detalhes.codGrupo],
                nomeGrupo: [detalhes.nomeGrupo, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                codSituacao: [detalhes.inSituacao, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                assocMateriais: this.formBuilder.array([])
              });
              this.materiaisAssociados = detalhes.materiais;
            } else {
              this.pnotifyService.error();
              this.location.back();
            }
          }
        }, {
          key: "setFormMateriais",
          value: function setFormMateriais() {
            this.formMateriais = this.formBuilder.group({
              codLinha: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
              codClasse: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
              codMaterial: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
              checked: [false]
            });
          }
        }, {
          key: "onLimparAssociacoes",
          value: function onLimparAssociacoes(materiais, excluir) {
            var _this3 = this;

            var assocMateriais = this.form.get('assocMateriais');
            assocMateriais.clear();
            this.codClasse = null;

            if (excluir == true) {
              var params = {
                codGrupo: materiais[0].codGrupo,
                codMaterial: 0
              };
              this.confirmDeleteAll().subscribe(function (response) {
                // materiais.removeAt()
                _this3.onDeleteMaterial(params); // if(!response){
                //   if(materiais.length === 1){
                //     this.materiaisAssociados
                //       .map(item => {
                //         if(item.codMaterial == materiais[0]['codMaterial']){
                //           item.checked = false
                //         }
                //       })
                //   }
                //   return
                // }
                // materiais
                //   .map(material => {
                //     if(!material?.codAssociacao){
                //       this.materiaisAssociados = this.materiaisAssociados
                //         .filter(item => material.codMaterial != item.codMaterial)
                //       return
                //     }
                //       this.onDeleteMaterial(params);
                //   });

              });
            } else {
              this.confirmDelete().subscribe(function (response) {
                if (!response) {
                  if (materiais.length === 1) {
                    _this3.materiaisAssociados.map(function (item) {
                      if (item.codMaterial == materiais[0]['codMaterial']) {
                        item.checked = false;
                      }
                    });
                  }

                  return;
                }

                materiais.map(function (material) {
                  if (!(material === null || material === void 0 ? void 0 : material.codAssociacao)) {
                    _this3.materiaisAssociados = _this3.materiaisAssociados.filter(function (item) {
                      return material.codMaterial != item.codMaterial;
                    });
                    return;
                  }

                  _this3.onDeleteMaterial(material);
                });
              });
            }

            this["delete"] = true;
          }
        }, {
          key: "onDeleteMaterial",
          value: function onDeleteMaterial(item) {
            var _this4 = this;

            this.loaderNavbar = true;
            var id = this.activatedRoute.snapshot.params.id;
            this.materiaisGrupoService.deleteAssociacao(id, item.codMaterial).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this4.loaderNavbar = false;
              _this4.loaderFullScreen = false;

              if (item.codMaterial == 0) {
                _this4.materiaisAssociados = _this4.materiaisAssociados.filter(function (material) {
                  return material.codMaterial != item.codMaterial;
                });
              }
            })).subscribe(function (response) {
              if (response.success) {
                _this4.pnotifyService.success();
              }

              _this4.materiaisAssociados = _this4.materiaisAssociados.filter(function (material) {
                return material.codMaterial != item.codMaterial;
              });

              if (item.codMaterial == 0) {
                _this4.materiaisAssociados = [];
              }
            }, function (error) {
              var _a;

              var message = (_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.mensagem;
              message ? _this4.pnotifyService.error(message) : _this4.pnotifyService.error();
            });
          }
        }, {
          key: "confirmDelete",
          value: function confirmDelete() {
            return this.confirmModalService.showConfirm('delete', 'Confirmar exclusão', 'Deseja realmente prosseguir com a exclusão do registro?', 'Cancelar', 'Confirmar');
          }
        }, {
          key: "confirmDeleteAll",
          value: function confirmDeleteAll() {
            return this.confirmModalService.showConfirm('delete', 'Confirmar exclusão', 'Deseja realmente prosseguir com a exclusão de todos os registros?', 'Cancelar', 'Confirmar');
          }
        }, {
          key: "onChangeLinha",
          value: function onChangeLinha(codLinha) {
            this.formMateriais.controls.codClasse.reset();
            this.formMateriais.controls.codClasse.setValue(null);
            this.formMateriais.controls.codClasse.enable();
            this.formMateriais.controls.codClasse.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]);
            this.formMateriais.controls.codClasse.updateValueAndValidity();
            this.formMateriais.controls.codMaterial.reset();
            this.formMateriais.controls.codMaterial.disable();
            this.formMateriais.controls.codMaterial.setValue(null);
            this.formMateriais.controls.codMaterial.updateValueAndValidity();
            this.filteredClasses = this.classes.filter(function (value) {
              return value.idLinha == codLinha;
            });
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
            var _this5 = this;

            if (typeof codClasse !== 'undefined' && codClasse !== null) {
              this.materiaisLoader = true;
              this.materiais = [];
              this.comercialService.getMateriais({
                codClasse: codClasse,
                situacao: 'A'
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
                _this5.materiaisLoader = false;
              })).subscribe(function (response) {
                if (response.hasOwnProperty('success') && response.success === true) {
                  _this5.materiais = response.data;

                  _this5.materiais.unshift({
                    codigoMaterial: 0,
                    codigoDescricaoMaterial: 'EXIBIR TODOS'
                  });

                  _this5.formMateriais.controls.codMaterial.setValue(0);
                } else if (response.hasOwnProperty('success') && response.success === false && response.hasOwnProperty('mensagem')) {
                  _this5.pnotifyService.error(response.mensagem);
                } else {
                  _this5.pnotifyService.error();
                }
              }, function (error) {
                if (error['error'].hasOwnProperty('mensagem')) {
                  _this5.pnotifyService.error(error.error.mensagem);
                } else {
                  _this5.pnotifyService.error();
                }
              });
            }
          }
        }, {
          key: "onFilterMateriais",
          value: function onFilterMateriais() {
            var _this6 = this;

            if (this.formMateriais.valid) {
              this.loaderNavbar = true;
              this.searching = true;
              this.materiaisLista = [];
              this.materiaisListaLoaded = false;
              this.materiaisListaEmpty = false;
              var params = {
                codClasse: this.formMateriais.value.codClasse,
                situacao: 'A',
                tipoMaterial: 'Distribuidora'
              };

              if (this.formMateriais.value.codMaterial !== 0) {
                Object.assign(params, {
                  codMaterial: this.formMateriais.value.codMaterial
                });
              }

              this.comercialService.getMateriais(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
                _this6.firstSearch = true;
                _this6.searching = false;
                _this6.loaderNavbar = false;
                _this6.materiaisListaLoaded = true;
              })).subscribe(function (response) {
                if (response.hasOwnProperty('success') && response.success === true) {
                  _this6.materiaisLista = response.data.map(function (el) {
                    var o = Object.assign({}, el);
                    o.checked = 0;
                    return o;
                  });

                  if (_this6.materiaisLista.length > 9) {
                    _this6.tableConfigMateriais.fixedHeader = true;
                  } else {
                    _this6.tableConfigMateriais.fixedHeader = false;
                  }
                } else if (response.hasOwnProperty('success') && response.success === false && response.hasOwnProperty('mensagem')) {
                  _this6.pnotifyService.error(response.mensagem);

                  _this6.materiaisListaEmpty = true;
                } else {
                  _this6.pnotifyService.error();

                  _this6.materiaisListaEmpty = true;
                }
              }, function (error) {
                if (error['error'].hasOwnProperty('mensagem')) {
                  _this6.pnotifyService.error(error.error.mensagem);
                } else {
                  _this6.pnotifyService.error();
                }
              });
            }
          }
        }, {
          key: "onToggleAll",
          value: function onToggleAll() {
            var _this7 = this;

            this.toggleAll = !this.toggleAll;
            this.materiaisLista.map(function (material) {
              return material.checked = _this7.toggleAll;
            });
          }
        }, {
          key: "onCheckMaterial",
          value: function onCheckMaterial(material) {
            material.checked = !material.checked;
          }
        }, {
          key: "onAssociarMateriais",
          value: function onAssociarMateriais() {
            var _this8 = this;

            this.toggleAll = false;
            this.materiaisLista.filter(function (material) {
              return material.checked;
            }).forEach(function (material) {
              if (_this8.codClasse === null) {
                _this8.codClasse = material.codClasse;
              }

              if (_this8.materiaisAssociados.some(function (item) {
                return item.codMaterial == material.codigoMaterial;
              })) {
                return;
              }

              _this8.materiaisAssociados.push({
                codMaterial: material.codigoMaterial,
                nomeMaterial: material.descricao,
                codClasse: material.codClasse
              });

              _this8.form.markAsTouched();

              _this8.form.markAsDirty();
            });
            this.materiaisLista = this.materiaisLista.filter(function (material) {
              return !material.checked;
            });
            this.adicionar = true;
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
          key: "onSubmit",
          value: function onSubmit() {
            var _this9 = this;

            if (this.form.pristine && this["delete"] === false && this.adicionar === false) {
              this.location.back();
              return;
            }

            if (!this.form.valid) {
              return;
            }

            this.loaderNavbar = true;
            this.submittingForm = true;
            var params = this.form.value;
            params['assocMateriais'] = this.materiaisAssociados;
            this.materiaisGrupoService.save(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this9.loaderNavbar = false;
              _this9.submittingForm = false;
            })).subscribe(function (response) {
              if (response.success === true) {
                _this9.formChanged = false;

                _this9.pnotifyService.success(response.mensagem);

                _this9.activatedRoute.params.subscribe(function (params) {
                  var navigateTo;

                  if (params.hasOwnProperty('id')) {
                    navigateTo = '../../lista';
                  } else {
                    navigateTo = '../lista';
                  }

                  _this9.router.navigate([navigateTo], {
                    relativeTo: _this9.activatedRoute
                  });
                });
              } else if (response.hasOwnProperty('success') && response.success === false) {
                _this9.pnotifyService.error(response.mensagem);
              } else {
                _this9.pnotifyService.error();
              }
            }, function (error) {
              _this9.pnotifyService.error();
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

        return ComercialCadastrosMateriaisGrupoMateriaisAssociadosFormularioComponent;
      }();

      ComercialCadastrosMateriaisGrupoMateriaisAssociadosFormularioComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }, {
          type: _grupos_materiais_associados_service__WEBPACK_IMPORTED_MODULE_9__["ComercialCadastrosMateriaisGrupoMateriaisAssociadosService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__["AtividadesService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_12__["TitleService"]
        }, {
          type: src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_13__["ComercialService"]
        }, {
          type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_14__["ConfirmModalService"]
        }];
      };

      ComercialCadastrosMateriaisGrupoMateriaisAssociadosFormularioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-cadastros-materiais-grupos-formulario',
        template: _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _grupos_materiais_associados_service__WEBPACK_IMPORTED_MODULE_9__["ComercialCadastrosMateriaisGrupoMateriaisAssociadosService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__["AtividadesService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_12__["TitleService"], src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_13__["ComercialService"], src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_14__["ConfirmModalService"]])], ComercialCadastrosMateriaisGrupoMateriaisAssociadosFormularioComponent);
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
    "jk8a":
    /*!************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/materiais/grupos-materiais-associados/lista/lista.component.ts ***!
      \************************************************************************************************************/

    /*! exports provided: ComercialCadastrosMateriaisGrupoMateriaisAssociadosListaComponent */

    /***/
    function jk8a(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosMateriaisGrupoMateriaisAssociadosListaComponent", function () {
        return ComercialCadastrosMateriaisGrupoMateriaisAssociadosListaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lista.component.html */
      "nIwd");
      /* harmony import */


      var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lista.component.scss */
      "XlV9");
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


      var _grupos_materiais_associados_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../grupos-materiais-associados.service */
      "uUBR");
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


      var ComercialCadastrosMateriaisGrupoMateriaisAssociadosListaComponent = /*#__PURE__*/function () {
        function ComercialCadastrosMateriaisGrupoMateriaisAssociadosListaComponent(activatedRoute, router, formBuilder, materiaisGrupoService, pnotifyService, atividadesService, titleService, confirmModalService, detailPanelService) {
          _classCallCheck(this, ComercialCadastrosMateriaisGrupoMateriaisAssociadosListaComponent);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.formBuilder = formBuilder;
          this.materiaisGrupoService = materiaisGrupoService;
          this.pnotifyService = pnotifyService;
          this.atividadesService = atividadesService;
          this.titleService = titleService;
          this.confirmModalService = confirmModalService;
          this.detailPanelService = detailPanelService;
          this.loaderNavbar = false;
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
          this.tableConfigMateriais = {
            hover: false
          };
          this.showDetailPanel = false;
          this.orderBy = 'nomeGrupo';
          this.orderType = 'ASC';
          this.maxSize = 10;
          this.itemsPerPage = 300;
          this.currentPage = 1;
          this.totalItems = 0;
          this.dados = [];
          this.dadosPagination = [];
          this.dadosLoaded = false;
          this.dadosEmpty = false;
          this.materiais = [];
          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialCadastrosMateriaisGrupoMateriaisAssociadosListaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registrarAcesso();
            this.setBreadCrumb();
            this.setFormFilter();
            this.titleService.setTitle('Grupos de materiais');
            this.onDetailPanelEmitter();
            this.setGrupoSelecionado();
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            var _this10 = this;

            this.activatedRoute.params.subscribe(function (params) {
              _this10.breadCrumbTree = [{
                descricao: 'Home',
                routerLink: '/comercial/home'
              }, {
                descricao: 'Cadastros',
                routerLink: "/comercial/cadastros/".concat(params.idSubModulo)
              }, {
                descricao: 'Grupos de materiais associados'
              }];
            });
          }
        }, {
          key: "onDetailPanelEmitter",
          value: function onDetailPanelEmitter() {
            var _this11 = this;

            this.showDetailPanelSubscription = this.detailPanelService.config.subscribe(function (event) {
              _this11.showDetailPanel = event.showing;
            });
          }
        }, {
          key: "setFormFilter",
          value: function setFormFilter() {
            var formValue = this.checkRouterParams();
            this.form = this.formBuilder.group({
              grupo: [formValue.grupo],
              material: [formValue.material],
              codSituacao: [formValue.codSituacao],
              orderBy: [formValue.orderBy],
              orderType: [formValue.orderType],
              pagina: [formValue.pagina],
              registros: [formValue.registros, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            });
            this.checkOrder();
          }
        }, {
          key: "checkRouterParams",
          value: function checkRouterParams() {
            var _this12 = this;

            var formValue = {
              grupo: null,
              material: null,
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

                _this12.search(params);

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
          key: "setGrupoSelecionado",
          value: function setGrupoSelecionado() {
            this.grupoSelecionado = {
              codGrupo: null,
              nomeGrupo: null,
              codSituacao: null,
              situacao: null,
              codUsuario: null,
              nomeUsuario: null,
              materiais: []
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

            if (this.form.value.grupo) {
              params.grupo = this.form.value.grupo;
            }

            if (this.form.value.material) {
              params.material = this.form.value.material;
            }

            if (this.form.value.codSituacao) {
              params.codSituacao = this.form.value.codSituacao;
            }

            params.orderBy = this.form.value.orderBy;
            params.orderType = this.form.value.orderType;
            return params;
          }
        }, {
          key: "search",
          value: function search(params) {
            var _this13 = this;

            this.loaderNavbar = true;
            this.detailPanelService.hide();
            this.dados = [];
            this.dadosPagination = [];
            this.dadosLoaded = false;
            this.dadosEmpty = false;
            this.materiaisGrupoService.getListaGrupos(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this13.loaderNavbar = false;
              _this13.dadosLoaded = true;
            })).subscribe(function (response) {
              if (response.hasOwnProperty('success') && response.success === true) {
                _this13.dados = response.data;
                _this13.dadosPagination = _this13.dados.slice(0, _this13.itemsPerPage);
                _this13.totalItems = _this13.dados.length;
                _this13.dadosLoaded = true;
              } else if (response.hasOwnProperty('success') && response.success === false) {
                _this13.dadosEmpty = true;
              } else {
                _this13.pnotifyService.error();

                _this13.dadosEmpty = true;
              }
            }, function (error) {
              _this13.dadosEmpty = true;

              if (error.error.hasOwnProperty('mensagem')) {
                _this13.pnotifyService.error(error.error.mensagem);
              } else {
                _this13.pnotifyService.error();
              }
            });
          }
        }, {
          key: "classStatusBorder",
          value: function classStatusBorder(grupo) {
            var borderClass;

            if (grupo.inSituacao === 0) {
              borderClass = 'border-danger';
            } else if (grupo.inSituacao === 1) {
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
          value: function onDetails(grupo) {
            var _this14 = this;

            this.loaderNavbar = true;
            this.detailPanelService.show();
            this.detailPanelTitle = "Materiais associados (".concat(grupo.nomeGrupo, ")");
            this.setGrupoSelecionado();
            this.grupoSelecionado = grupo;
            this.materiais = [];
            this.materiaisGrupoService.getAssociacoesMateriais(grupo.codGrupo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              setTimeout(function () {
                _this14.loaderNavbar = false;
              }, 500);
            })).subscribe(function (response) {
              if (response.hasOwnProperty('success') && response.success === true) {
                // Não está vazio.
                _this14.detailPanelService.loadedFinished(false);

                _this14.materiais = response.data;
              } else if (response.hasOwnProperty('success') && response.success === false) {
                // Vazio.
                _this14.detailPanelService.loadedFinished(true);
              } else {
                // Vazio e com possível erro.
                _this14.pnotifyService.error();

                _this14.detailPanelService.loadedFinished(true);
              }
            }, function (error) {
              // Vazio e com erro.
              _this14.detailPanelService.loadedFinished(true);

              if (error.error.hasOwnProperty('mensagem')) {
                _this14.pnotifyService.error(error.error.mensagem);
              } else {
                _this14.pnotifyService.error();
              }
            });
          }
        }, {
          key: "onEdit",
          value: function onEdit(grupo) {
            this.router.navigate(['../editar', grupo.codGrupo], {
              relativeTo: this.activatedRoute
            });
          }
        }, {
          key: "onActivate",
          value: function onActivate(index, grupo) {
            var _this15 = this;

            this.confirmActivate().asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (result) {
              return result ? _this15.activateGrupo(index, grupo) : rxjs__WEBPACK_IMPORTED_MODULE_6__["EMPTY"];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this15.loaderNavbar = false;
            })).subscribe(function (success) {
              _this15.pnotifyService.success();

              _this15.refreshMainData(grupo);

              _this15.onFilter();
            }, function (error) {
              _this15.pnotifyService.error();

              _this15.dadosPagination[index].codSituacao = 2;
            });
          }
        }, {
          key: "confirmActivate",
          value: function confirmActivate() {
            return this.confirmModalService.showConfirm(null, null, 'Deseja realmente prosseguir com a ativação do registro?', 'Cancelar', 'Confirmar');
          }
        }, {
          key: "activateGrupo",
          value: function activateGrupo(index, grupo) {
            this.loaderNavbar = true;
            this.dadosPagination[index].codSituacao = 1;
            return this.materiaisGrupoService.activateGrupo(grupo.codGrupo);
          }
        }, {
          key: "onInactivate",
          value: function onInactivate(index, grupo) {
            var _this16 = this;

            this.confirmInactive().asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (result) {
              return result ? _this16.inactivateGrupo(index, grupo) : rxjs__WEBPACK_IMPORTED_MODULE_6__["EMPTY"];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this16.loaderNavbar = false;
            })).subscribe(function (success) {
              _this16.pnotifyService.success();

              _this16.refreshMainData(grupo);

              _this16.onFilter();
            }, function (error) {
              _this16.pnotifyService.error();

              _this16.dadosPagination[index].codSituacao = 1;
            });
          }
        }, {
          key: "confirmInactive",
          value: function confirmInactive() {
            return this.confirmModalService.showConfirm('inactivate', 'Confirmar inativação', 'Deseja realmente prosseguir com a inativação do registro?', 'Cancelar', 'Confirmar');
          }
        }, {
          key: "inactivateGrupo",
          value: function inactivateGrupo(index, grupo) {
            this.loaderNavbar = true;
            this.dadosPagination[index].codSituacao = 0;
            return this.materiaisGrupoService.inactivateGrupo(grupo.codGrupo);
          }
        }, {
          key: "refreshMainData",
          value: function refreshMainData(grupo) {
            for (var i = 0; i < this.dados.length; i++) {
              if (grupo.codGrupo === this.dados[i].codGrupo) {
                this.dados[i].inSituacao = grupo.inSituacao;
                return;
              }
            }
          }
        }]);

        return ComercialCadastrosMateriaisGrupoMateriaisAssociadosListaComponent;
      }();

      ComercialCadastrosMateriaisGrupoMateriaisAssociadosListaComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _grupos_materiais_associados_service__WEBPACK_IMPORTED_MODULE_8__["ComercialCadastrosMateriaisGrupoMateriaisAssociadosService"]
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

      ComercialCadastrosMateriaisGrupoMateriaisAssociadosListaComponent.propDecorators = {
        scrollToFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['scrollToFilter', {}]
        }]
      };
      ComercialCadastrosMateriaisGrupoMateriaisAssociadosListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-cadastros-materiais-grupos-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _grupos_materiais_associados_service__WEBPACK_IMPORTED_MODULE_8__["ComercialCadastrosMateriaisGrupoMateriaisAssociadosService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"], src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_12__["ConfirmModalService"], src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_13__["DetailPanelService"]])], ComercialCadastrosMateriaisGrupoMateriaisAssociadosListaComponent);
      /***/
    },

    /***/
    "nIwd":
    /*!****************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/cadastros/materiais/grupos-materiais-associados/lista/lista.component.html ***!
      \****************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function nIwd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<app-header appTitle=\"Grupos de materiais\">\n  <button\n    type=\"button\"\n    [routerLink]=\"['../novo']\">\n    Adicionar\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"onFilter()\">\n    Filtrar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\n  <div class=\"row\" #scrollToFilter>\n    <div class=\"col\">\n      <advanced-filter>\n        <form [formGroup]=\"form\" autocomplete=\"off\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-lg-3\">\n              <label for=\"grupo\">\n                <span class=\"mr-1\">Grupo</span>\n                <ng-template #tooltipLabelGrupoTemplate>\n                  <p class=\"text-nowrap mb-0\">Código ou nome do grupo</p>\n                </ng-template>\n                <i class=\"far fa-question-circle\" [tooltip]=\"tooltipLabelGrupoTemplate\" container=\"body\"></i>\n              </label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"grupo\"\n                (keydown.enter)=\"onFilter()\">\n            </div>\n            <div class=\"form-group col-lg-3\">\n              <label for=\"material\">\n                <span class=\"mr-1\">Material</span>\n                <ng-template #tooltipLabelMaterialTemplate>\n                  <p class=\"text-nowrap mb-0\">Código ou nome do material</p>\n                </ng-template>\n                <i class=\"far fa-question-circle\" [tooltip]=\"tooltipLabelMaterialTemplate\" container=\"body\"></i>\n              </label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"material\"\n                (keydown.enter)=\"onFilter()\">\n            </div>\n            <div class=\"form-group col-lg-3\">\n              <label for=\"codSituacao\">Situação</label>\n              <select\n                class=\"form-control custom-select\"\n                id=\"codSituacao\"\n                formControlName=\"codSituacao\">\n                <option value=\"\">Todos</option>\n                <option value=\"0\">Inativos</option>\n                <option value=\"1\">Ativos</option>\n              </select>\n            </div>\n            <div class=\"form-group col-lg-3\">\n              <label for=\"registros\">Registros</label>\n              <select\n                class=\"form-control\"\n                id=\"registros\"\n                formControlName=\"registros\">\n                <option>25</option>\n                <option>50</option>\n                <option>100</option>\n                <option>200</option>\n                <option>300</option>\n              </select>\n            </div>\n          </div>\n        </form>\n      </advanced-filter>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div [ngClass]=\"{'col': !showDetailPanel, 'col-5 pr-0': showDetailPanel}\">\n      <custom-table [config]=\"tableConfig\" *ngIf=\"dadosPagination.length > 0 && !dadosEmpty\">\n        <ng-template #thead let-thead>\n          <tr>\n            <th scope=\"col\" class=\"text-center hover\">\n              <thead-sorter\n                value=\"Código\"\n                [active]=\"orderBy == 'codGrupo'\"\n                [sort]=\"orderType\"\n                (click)=\"setOrderBy('codGrupo')\">\n              </thead-sorter>\n            </th>\n            <th scope=\"col\" class=\"hover\">\n              <thead-sorter\n                value=\"Nome grupo\"\n                [active]=\"orderBy == 'nomeGrupo'\"\n                [sort]=\"orderType\"\n                (click)=\"setOrderBy('nomeGrupo')\">\n              </thead-sorter>\n            </th>\n            <th scope=\"col\" [hidden]=\"showDetailPanel\">Usuário cadastro</th>\n            <th scope=\"col\"></th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr *ngFor=\"let grupo of dadosPagination; let i = index;\" [class.table-active]=\"grupo.codGrupo == grupoSelecionado.codGrupo && showDetailPanel\">\n            <td\n              class=\"text-center hover\"\n              [ngClass]=\"classStatusBorder(grupo)\"\n              (click)=\"onDetails(grupo)\">\n              {{ grupo.codGrupo }}\n            </td>\n            <td\n              class=\"hover\"\n              (click)=\"onDetails(grupo)\">\n              {{ grupo.nomeGrupo | uppercase }}\n            </td>\n            <td\n              class=\"hover\"\n              (click)=\"onDetails(grupo)\"\n              [hidden]=\"showDetailPanel\">\n              <span *ngIf=\"grupo.nomeUsuario === null\">NÃO INFORMADO</span>\n              <span *ngIf=\"grupo.nomeUsuario !== null\">\n                {{ grupo.nomeUsuario | uppercase }}\n              </span>\n            </td>\n            <td class=\"text-right\">\n              <span *ngIf=\"grupo.inSituacao == 0\" class=\"mr-3\" tooltip=\"Ativar\" placement=\"left\" container=\"body\">\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onActivate(i, grupo)\">\n                  <i class=\"fas fa-toggle-off\"></i>\n                </button>\n              </span>\n              <span *ngIf=\"grupo.inSituacao == 1\" class=\"mr-3\" tooltip=\"Inativar\" placement=\"left\" container=\"body\">\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onInactivate(i, grupo)\">\n                  <i class=\"fas fa-toggle-on\"></i>\n                </button>\n              </span>\n              <span class=\"mr-3\" tooltip=\"Editar\" placement=\"left\" container=\"body\">\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onEdit(grupo)\">\n                  <i class=\"fas fa-edit\"></i>\n                </button>\n              </span>\n            </td>\n          </tr>\n        </ng-template>\n      </custom-table>\n      <empty-result message=\"Nenhuma informação encontrada\" *ngIf=\"dadosEmpty && dadosLoaded\"></empty-result>\n      <div class=\"d-flex justify-content-center mt-3\" *ngIf=\"totalItems > itemsPerPage && !loaderNavbar\">\n        <pagination\n          [maxSize]=\"maxSize\"\n          [(totalItems)]=\"totalItems\"\n          (pageChanged)=\"onPageChanged($event)\"\n          [(itemsPerPage)]=\"itemsPerPage\"\n          [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPage\"\n          previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\"\n          lastText=\"&raquo;\">\n        </pagination>\n      </div>\n    </div>\n    <div class=\"col-7\" [hidden]=\"!showDetailPanel\">\n      <detail-panel [panelTitle]=\"detailPanelTitle\">\n        <custom-table [config]=\"tableConfigMateriais\" *ngIf=\"materiais.length > 0\">\n          <ng-template #thead let-thead>\n            <tr>\n              <th scope=\"col\" class=\"text-center\">Código</th>\n              <th scope=\"col\">Material</th>\n            </tr>\n          </ng-template>\n          <ng-template #tbody let-tbody>\n            <tr *ngFor=\"let material of materiais\">\n              <td class=\"text-center\">{{ material.codMaterial }}</td>\n              <td>{{ material.nomeMaterial | uppercase }}</td>\n            </tr>\n          </ng-template>\n        </custom-table>\n      </detail-panel>\n    </div>\n  </div>\n</app-body>\n";
      /***/
    },

    /***/
    "uUBR":
    /*!**************************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/materiais/grupos-materiais-associados/grupos-materiais-associados.service.ts ***!
      \**************************************************************************************************************************/

    /*! exports provided: ComercialCadastrosMateriaisGrupoMateriaisAssociadosService */

    /***/
    function uUBR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosMateriaisGrupoMateriaisAssociadosService", function () {
        return ComercialCadastrosMateriaisGrupoMateriaisAssociadosService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _comercial_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../comercial.service */
      "VgqD");
      /* harmony import */


      var _tid_software_tid_software_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../tid-software/tid-software.service */
      "zN97"); // Services


      var ComercialCadastrosMateriaisGrupoMateriaisAssociadosService = /*#__PURE__*/function () {
        function ComercialCadastrosMateriaisGrupoMateriaisAssociadosService(http, comercialService, tidSoftwareService) {
          _classCallCheck(this, ComercialCadastrosMateriaisGrupoMateriaisAssociadosService);

          this.http = http;
          this.comercialService = comercialService;
          this.tidSoftwareService = tidSoftwareService;
          this.API = "https://crm360.monterrey.com.bo/api/comercial/cadastros/materiais/grupos-materiais-associados";
        }

        _createClass(ComercialCadastrosMateriaisGrupoMateriaisAssociadosService, [{
          key: "getListaGrupos",
          value: function getListaGrupos(params) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/lista"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }, {
          key: "getAssociacoesMateriais",
          value: function getAssociacoesMateriais(codGrupo) {
            return this.http.get("".concat(this.API, "/associacoes/").concat(codGrupo)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }, {
          key: "getDetalhes",
          value: function getDetalhes(codGrupo) {
            return this.http.get("".concat(this.API, "/detalhes/").concat(codGrupo)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }, {
          key: "saveGrupo",
          value: function saveGrupo(record) {
            return this.http.post("".concat(this.API, "/salvar"), record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }, {
          key: "updateGrupo",
          value: function updateGrupo(record) {
            return this.http.put("".concat(this.API, "/atualizar"), record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }, {
          key: "save",
          value: function save(record) {
            if (record.codGrupo !== null) {
              return this.updateGrupo(record);
            }

            return this.saveGrupo(record);
          }
        }, {
          key: "activateGrupo",
          value: function activateGrupo(codGrupo) {
            return this.http.post("".concat(this.API, "/ativar"), codGrupo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }, {
          key: "inactivateGrupo",
          value: function inactivateGrupo(codGrupo) {
            return this.http.post("".concat(this.API, "/inativar"), codGrupo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }, {
          key: "getFilterValues",
          value: function getFilterValues() {
            var linhas = this.tidSoftwareService.getLinhas();
            var classes = this.comercialService.getClasses(null);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])([linhas, classes]);
          }
        }, {
          key: "deleteAssociacao",
          value: function deleteAssociacao(codGrupo, codMaterial) {
            return this.http["delete"]("".concat(this.API, "/remover/").concat(codGrupo, "/").concat(codMaterial)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }]);

        return ComercialCadastrosMateriaisGrupoMateriaisAssociadosService;
      }();

      ComercialCadastrosMateriaisGrupoMateriaisAssociadosService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _comercial_service__WEBPACK_IMPORTED_MODULE_5__["ComercialService"]
        }, {
          type: _tid_software_tid_software_service__WEBPACK_IMPORTED_MODULE_6__["ComercialTidSoftwareService"]
        }];
      };

      ComercialCadastrosMateriaisGrupoMateriaisAssociadosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _comercial_service__WEBPACK_IMPORTED_MODULE_5__["ComercialService"], _tid_software_tid_software_service__WEBPACK_IMPORTED_MODULE_6__["ComercialTidSoftwareService"]])], ComercialCadastrosMateriaisGrupoMateriaisAssociadosService);
      /***/
    },

    /***/
    "zN97":
    /*!************************************************************************!*\
      !*** ./src/app/modules/comercial/tid-software/tid-software.service.ts ***!
      \************************************************************************/

    /*! exports provided: ComercialTidSoftwareService */

    /***/
    function zN97(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialTidSoftwareService", function () {
        return ComercialTidSoftwareService;
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
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var ComercialTidSoftwareService = /*#__PURE__*/function () {
        function ComercialTidSoftwareService(http) {
          _classCallCheck(this, ComercialTidSoftwareService);

          this.http = http;
          this.API = "https://crm360.monterrey.com.bo/api/comercial/tid-software";
        }

        _createClass(ComercialTidSoftwareService, [{
          key: "loadDependencies",
          value: function loadDependencies() {
            var empresas = this.getEmpresas('vendas');
            var linhas = this.getLinhas();
            var modulosVendas = this.getModulosVendas();
            var modulosProducaoTela = this.getModulosProducaoTela();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])([empresas, linhas, modulosVendas, modulosProducaoTela]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getEmpresas",
          value: function getEmpresas(acao) {
            return this.http.get("".concat(this.API, "/empresas/").concat(acao)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getLinhas",
          value: function getLinhas() {
            return this.http.get("".concat(this.API, "/linhas")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getModulosVendas",
          value: function getModulosVendas() {
            return this.http.get("".concat(this.API, "/modulos/vendas")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getModulosProducaoTela",
          value: function getModulosProducaoTela() {
            return this.http.get("".concat(this.API, "/modulos/producao-tela")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "postGerarAcesso",
          value: function postGerarAcesso(data) {
            return this.http.post("".concat(this.API, "/gerar-acesso"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }]);

        return ComercialTidSoftwareService;
      }();

      ComercialTidSoftwareService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      ComercialTidSoftwareService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ComercialTidSoftwareService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=materiais-grupos-materiais-associados-grupos-materiais-associados-module-es5.js.map