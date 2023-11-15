(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["materiais-grupos-grupos-module"], {
    /***/
    "3uWo":
    /*!***************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/materiais/grupos/grupos-routing.module.ts ***!
      \***************************************************************************************/

    /*! exports provided: ComercialCadastrosMateriaisGrupoRoutingModule */

    /***/
    function uWo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosMateriaisGrupoRoutingModule", function () {
        return ComercialCadastrosMateriaisGrupoRoutingModule;
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
      "qerm");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./lista/lista.component */
      "sAAZ");
      /* harmony import */


      var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./formulario/formulario.component */
      "XMyU"); // Guards
      // Components


      var routes = [{
        path: 'lista',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_5__["ComercialCadastrosMateriaisGrupoListaComponent"]
      }, {
        path: 'novo',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__["ComercialCadastrosMateriaisGrupoFormularioComponent"],
        resolve: {
          detalhes: _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_4__["ComercialCadastrosMateriaisGrupoFormularioResolverGuard"]
        },
        canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]]
      }, {
        path: 'editar/:id',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__["ComercialCadastrosMateriaisGrupoFormularioComponent"],
        resolve: {
          detalhes: _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_4__["ComercialCadastrosMateriaisGrupoFormularioResolverGuard"]
        },
        canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]]
      }, {
        path: '',
        redirectTo: 'lista',
        pathMatch: 'full'
      }];

      var ComercialCadastrosMateriaisGrupoRoutingModule = /*#__PURE__*/_createClass(function ComercialCadastrosMateriaisGrupoRoutingModule() {
        _classCallCheck(this, ComercialCadastrosMateriaisGrupoRoutingModule);
      });

      ComercialCadastrosMateriaisGrupoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ComercialCadastrosMateriaisGrupoRoutingModule);
      /***/
    },

    /***/
    "Bryw":
    /*!***************************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/materiais/grupos/formulario/formulario.component.scss ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Bryw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NhZGFzdHJvcy9tYXRlcmlhaXMvZ3J1cG9zL2Zvcm11bGFyaW8vZm9ybXVsYXJpby5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "DuLQ":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/cadastros/materiais/grupos/formulario/formulario.component.html ***!
      \*****************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function DuLQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<app-header [appTitle]=\"appTitle\">\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onCancel()\"\r\n    [disabled]=\"submittingForm\">\r\n    Cancelar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onSubmit()\"\r\n    [disabled]=\"!form.valid || submittingForm\">\r\n    Salvar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6\">\r\n      <form [formGroup]=\"form\">\r\n        <div class=\"mtc-title\">Dados do grupo</div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col\">\r\n            <label for=\"nomeGrupo\">Nome</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"nomeGrupo\"\r\n              formControlName=\"nomeGrupo\"\r\n              (input)=\"onInput()\"\r\n              autocomplete=\"new-password\"\r\n              [ngClass]=\"onFieldError('nomeGrupo') + ' ' + onFieldRequired(form.controls.nomeGrupo)\">\r\n            <invalid-form-control [show]=\"onFieldInvalid('nomeGrupo')\" message=\"Nome é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-lg-6\">\r\n            <label for=\"precoGrupo\">Preço</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"precoGrupo\"\r\n              formControlName=\"precoGrupo\"\r\n              (input)=\"onInput()\"\r\n              autocomplete=\"new-password\"\r\n              currencyMask [options]=\"{ align: 'left', prefix: 'R$ ', thousands: '.', decimal: ',', precision: 2 }\"\r\n              [ngClass]=\"onFieldError('precoGrupo') + ' ' + onFieldRequired(form.controls.precoGrupo)\">\r\n            <invalid-form-control [show]=\"onFieldInvalid('precoGrupo')\" message=\"Preço é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n          <div class=\"form-group col-lg-6\">\r\n            <label for=\"codSituacao\">Situação</label>\r\n            <select\r\n              class=\"form-control\"\r\n              id=\"codSituacao\"\r\n              formControlName=\"codSituacao\"\r\n              (change)=\"onInput()\"\r\n              [ngClass]=\"onFieldError('codSituacao') + ' ' + onFieldRequired(form.controls.codSituacao)\">\r\n              <option value=\"\">SELECIONE UMA OPÇÃO</option>\r\n              <option value=\"0\">Inativo</option>\r\n              <option value=\"1\">Ativo</option>\r\n            </select>\r\n            <invalid-form-control [show]=\"onFieldInvalid('codSituacao')\" message=\"Situação é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"col\">\r\n            <hr>\r\n          </div>\r\n        </div>\r\n        <div formArrayName=\"assocMateriais\">\r\n          <div class=\"row mb-2\">\r\n            <div class=\"col mt-auto\">\r\n              <div class=\"mtc-title mb-0\">Materiais associados ao grupo</div>\r\n            </div>\r\n            <div class=\"col\">\r\n              <div class=\"d-flex justify-content-end\">\r\n                <button\r\n                  type=\"button\"\r\n                  class=\"btn btn-sm btn-outline-danger\"\r\n                  (click)=\"onLimparAssociacoes()\">\r\n                  <i class=\"fas fa-trash\"></i>\r\n                  <span>Limpar</span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\" *ngIf=\"showMateriais && form.value.assocMateriais.length > 0\">\r\n            <div class=\"col\">\r\n              <custom-table [config]=\"tableConfigAssocMateriais\">\r\n                <ng-template #thead let-thead>\r\n                  <tr>\r\n                    <th scope=\"col\" style=\"width: 95%\">Material</th>\r\n                    <th scope=\"col\" style=\"width: 5%\"></th>\r\n                  </tr>\r\n                </ng-template>\r\n                <ng-template #tbody let-tbody>\r\n                  <tr *ngFor=\"let material of assocMateriais.controls; let i = index\" [formGroupName]=\"i\">\r\n                    <td style=\"width: 95%\">\r\n                      {{ form.value.assocMateriais[i].codMaterial }} - {{ form.value.assocMateriais[i].nomeMaterial | uppercase }}\r\n                    </td>\r\n                    <td class=\"text-center\" style=\"width: 5%\">\r\n                      <btn-icon\r\n                        icon=\"fas fa-trash\"\r\n                        size=\"small\"\r\n                        (click)=\"onDeleteMaterial(i)\">\r\n                      </btn-icon>\r\n                    </td>\r\n                  </tr>\r\n                </ng-template>\r\n              </custom-table>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\" *ngIf=\"showMateriais && form.value.assocMateriais.length === 0\">\r\n            <div class=\"col\">\r\n              <message\r\n                icon=\"fas fa-exchange-alt\"\r\n                text=\"Nenhuma associação encontrada\">\r\n              </message>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <div class=\"col-lg-6 border-left\">\r\n      <div class=\"row mb-2\">\r\n        <div class=\"col mt-auto\">\r\n          <div class=\"mtc-title mb-0\">Pesquisa de materiais</div>\r\n        </div>\r\n        <div class=\"col\">\r\n          <div class=\"d-flex justify-content-end\">\r\n            <button\r\n              type=\"button\"\r\n              class=\"btn btn-sm btn-outline-secondary\"\r\n              (click)=\"onFilterMateriais()\"\r\n              [disabled]=\"searching === true\">\r\n              <i class=\"fas fa-search\"></i>\r\n              <span>Pesquisar</span>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <advanced-filter>\r\n        <form [formGroup]=\"formMateriais\" autocomplete=\"off\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-4\">\r\n              <label for=\"codLinha\">Linha</label>\r\n              <ng-select\r\n                [searchable]=\"true\"\r\n                [clearable]=\"false\"\r\n                [items]=\"linhas\"\r\n                formControlName=\"codLinha\"\r\n                [virtualScroll]=\"true\"\r\n                labelForId=\"codLinha\"\r\n                bindLabel=\"descricao\"\r\n                bindValue=\"id\"\r\n                (change)=\"onChangeLinha($event.id)\">\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"form-group col-lg-4\">\r\n              <label for=\"codClasse\">Classe</label>\r\n              <ng-select\r\n                [searchable]=\"true\"\r\n                [clearable]=\"false\"\r\n                [items]=\"filteredClasses\"\r\n                formControlName=\"codClasse\"\r\n                [virtualScroll]=\"true\"\r\n                labelForId=\"codClasse\"\r\n                bindLabel=\"nomeClasse\"\r\n                bindValue=\"idClasse\"\r\n                (change)=\"onChangeClasse($event.idClasse)\">\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"form-group col-lg-4\">\r\n              <label for=\"codMaterial\">Material</label>\r\n              <ng-select\r\n                [searchable]=\"true\"\r\n                [clearable]=\"false\"\r\n                [items]=\"materiais\"\r\n                formControlName=\"codMaterial\"\r\n                [virtualScroll]=\"true\"\r\n                labelForId=\"codMaterial\"\r\n                bindLabel=\"codigoDescricaoMaterial\"\r\n                bindValue=\"codigoMaterial\"\r\n                [loading]=\"materiaisLoader\"\r\n                loadingText=\"Carregando...\">\r\n              </ng-select>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </advanced-filter>\r\n      <div *ngIf=\"materiaisLista.length > 0\">\r\n        <div class=\"row mb-2\">\r\n          <div class=\"col mt-auto\">\r\n            <div class=\"mtc-title mb-0\">Seleção de materiais</div>\r\n          </div>\r\n          <div class=\"col\">\r\n            <div class=\"d-flex justify-content-end\">\r\n              <button\r\n                type=\"button\"\r\n                class=\"btn btn-sm btn-outline-primary\"\r\n                (click)=\"onAssociarMateriais()\"\r\n                [disabled]=\"searching === true\">\r\n                <i class=\"fas fa-exchange-alt\"></i>\r\n                <span>Associar</span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n            <custom-table [config]=\"tableConfigMateriais\">\r\n              <ng-template #thead let-thead>\r\n                <tr>\r\n                  <th\r\n                    scope=\"col\"\r\n                    class=\"text-center\"\r\n                    style=\"width: 5%\">\r\n                    <btn-icon\r\n                      [icon]=\"toggleAll ? 'fas fa-check-square' : 'far fa-square'\"\r\n                      size=\"small\"\r\n                      (click)=\"onToggleAll()\">\r\n                    </btn-icon>\r\n                  </th>\r\n                  <th scope=\"col\" style=\"width: 95%\">Material</th>\r\n                </tr>\r\n              </ng-template>\r\n              <ng-template #tbody let-tbody>\r\n                <tr *ngFor=\"let material of materiaisLista; let i = index;\">\r\n                  <td class=\"text-center\" style=\"width: 5%\">\r\n                    <btn-icon\r\n                      [icon]=\"material.checked == 1 ? 'fas fa-check-square' : 'far fa-square'\"\r\n                      size=\"small\"\r\n                      (click)=\"onCheckMaterial(i, material)\">\r\n                    </btn-icon>\r\n                  </td>\r\n                  <td\r\n                    class=\"hover\"\r\n                    style=\"width: 95%\"\r\n                    (click)=\"onCheckMaterial(i, material)\">\r\n                    {{ material.codigoDescricaoMaterial | uppercase }}\r\n                  </td>\r\n                </tr>\r\n              </ng-template>\r\n            </custom-table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\" *ngIf=\"searching === true\">\r\n        <div class=\"col\">\r\n          <message\r\n            icon=\"fas fa-cog fa-spin\"\r\n            text=\"Estamos pesquisando os materiais para você...\">\r\n          </message>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"searching === false\">\r\n        <div class=\"row\" *ngIf=\"materiaisListaEmpty && materiaisListaLoaded\">\r\n          <div class=\"col\">\r\n            <message\r\n              icon=\"fas fa-box-open\"\r\n              text=\"Nenhuma informação encontrada\">\r\n            </message>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\" *ngIf=\"materiaisLista.length === 0 && !firstSearch\">\r\n          <div class=\"col\">\r\n            <message\r\n              icon=\"fas fa-search\"\r\n              text=\"Preecha os campos acima para pesquisar materiais\">\r\n            </message>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</app-body>\r\n";
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
    "UCJa":
    /*!*******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/cadastros/materiais/grupos/lista/lista.component.html ***!
      \*******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function UCJa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<app-header appTitle=\"Grupos de materiais\">\r\n  <button\r\n    type=\"button\"\r\n    [routerLink]=\"['../novo']\">\r\n    Adicionar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onFilter()\">\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <div class=\"row\" #scrollToFilter>\r\n    <div class=\"col\">\r\n      <advanced-filter>\r\n        <form [formGroup]=\"form\" autocomplete=\"off\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-3\">\r\n              <label for=\"grupo\">\r\n                <span class=\"mr-1\">Grupo</span>\r\n                <ng-template #tooltipLabelGrupoTemplate>\r\n                  <p class=\"text-nowrap mb-0\">Código ou nome do grupo</p>\r\n                </ng-template>\r\n                <i class=\"far fa-question-circle\" [tooltip]=\"tooltipLabelGrupoTemplate\" container=\"body\"></i>\r\n              </label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                formControlName=\"grupo\"\r\n                (keydown.enter)=\"onFilter()\">\r\n            </div>\r\n            <div class=\"form-group col-lg-3\">\r\n              <label for=\"material\">\r\n                <span class=\"mr-1\">Material</span>\r\n                <ng-template #tooltipLabelMaterialTemplate>\r\n                  <p class=\"text-nowrap mb-0\">Código ou nome do material</p>\r\n                </ng-template>\r\n                <i class=\"far fa-question-circle\" [tooltip]=\"tooltipLabelMaterialTemplate\" container=\"body\"></i>\r\n              </label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                formControlName=\"material\"\r\n                (keydown.enter)=\"onFilter()\">\r\n            </div>\r\n            <div class=\"form-group col-lg-3\">\r\n              <label for=\"codSituacao\">Situação</label>\r\n              <select\r\n                class=\"form-control custom-select\"\r\n                id=\"codSituacao\"\r\n                formControlName=\"codSituacao\">\r\n                <option value=\"\">Todos</option>\r\n                <option value=\"0\">Inativos</option>\r\n                <option value=\"1\">Ativos</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"form-group col-lg-3\">\r\n              <label for=\"registros\">Registros</label>\r\n              <select\r\n                class=\"form-control\"\r\n                id=\"registros\"\r\n                formControlName=\"registros\">\r\n                <option>25</option>\r\n                <option>50</option>\r\n                <option>100</option>\r\n                <option>200</option>\r\n                <option>300</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </advanced-filter>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div [ngClass]=\"{'col': !showDetailPanel, 'col-5 pr-0': showDetailPanel}\">\r\n      <custom-table [config]=\"tableConfig\" *ngIf=\"dadosPagination.length > 0 && !dadosEmpty\">\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n            <th scope=\"col\" class=\"text-center hover\">\r\n              <thead-sorter\r\n                value=\"Código\"\r\n                [active]=\"orderBy == 'codGrupo'\"\r\n                [sort]=\"orderType\"\r\n                (click)=\"setOrderBy('codGrupo')\">\r\n              </thead-sorter>\r\n            </th>\r\n            <th scope=\"col\" class=\"hover\">\r\n              <thead-sorter\r\n                value=\"Nome grupo\"\r\n                [active]=\"orderBy == 'nomeGrupo'\"\r\n                [sort]=\"orderType\"\r\n                (click)=\"setOrderBy('nomeGrupo')\">\r\n              </thead-sorter>\r\n            </th>\r\n            <th scope=\"col\" class=\"text-center\">Preço</th>\r\n            <th scope=\"col\" [hidden]=\"showDetailPanel\">Usuário cadastro</th>\r\n            <th scope=\"col\"></th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let grupo of dadosPagination; let i = index;\" [class.table-active]=\"grupo.codGrupo == grupoSelecionado.codGrupo && showDetailPanel\">\r\n            <td\r\n              class=\"text-center hover\"\r\n              [ngClass]=\"classStatusBorder(grupo)\"\r\n              (click)=\"onDetails(grupo)\">\r\n              {{ grupo.codGrupo }}\r\n            </td>\r\n            <td\r\n              class=\"hover\"\r\n              (click)=\"onDetails(grupo)\">\r\n              {{ grupo.nomeGrupo | uppercase }}\r\n            </td>\r\n            <td\r\n              class=\"text-center hover\"\r\n              (click)=\"onDetails(grupo)\">\r\n              {{ grupo.precoGrupo | currency:'BRL':'symbol':'1.2-2' }}\r\n            </td>\r\n            <td\r\n              class=\"hover\"\r\n              (click)=\"onDetails(grupo)\"\r\n              [hidden]=\"showDetailPanel\">\r\n              <span *ngIf=\"grupo.nomeUsuario === null\">NÃO INFORMADO</span>\r\n              <span *ngIf=\"grupo.nomeUsuario !== null\">\r\n                {{ grupo.nomeUsuario | uppercase }}\r\n              </span>\r\n            </td>\r\n            <td class=\"text-right\">\r\n              <span *ngIf=\"grupo.codSituacao == 0\" class=\"mr-3\" tooltip=\"Ativar\" placement=\"left\" container=\"body\">\r\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onActivate(i, grupo)\">\r\n                  <i class=\"fas fa-toggle-off\"></i>\r\n                </button>\r\n              </span>\r\n              <span *ngIf=\"grupo.codSituacao == 1\" class=\"mr-3\" tooltip=\"Inativar\" placement=\"left\" container=\"body\">\r\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onInactivate(i, grupo)\">\r\n                  <i class=\"fas fa-toggle-on\"></i>\r\n                </button>\r\n              </span>\r\n              <span class=\"mr-3\" tooltip=\"Editar\" placement=\"left\" container=\"body\">\r\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onEdit(grupo)\">\r\n                  <i class=\"fas fa-edit\"></i>\r\n                </button>\r\n              </span>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n      <empty-result message=\"Nenhuma informação encontrada\" *ngIf=\"dadosEmpty && dadosLoaded\"></empty-result>\r\n      <div class=\"d-flex justify-content-center mt-3\" *ngIf=\"totalItems > itemsPerPage && !loaderNavbar\">\r\n        <pagination\r\n          [maxSize]=\"maxSize\"\r\n          [(totalItems)]=\"totalItems\"\r\n          (pageChanged)=\"onPageChanged($event)\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPage\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\">\r\n        </pagination>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-7\" [hidden]=\"!showDetailPanel\">\r\n      <detail-panel [panelTitle]=\"detailPanelTitle\">\r\n        <custom-table [config]=\"tableConfigMateriais\" *ngIf=\"materiais.length > 0\">\r\n          <ng-template #thead let-thead>\r\n            <tr>\r\n              <th scope=\"col\" class=\"text-center\">Código</th>\r\n              <th scope=\"col\">Material</th>\r\n            </tr>\r\n          </ng-template>\r\n          <ng-template #tbody let-tbody>\r\n            <tr *ngFor=\"let material of materiais\">\r\n              <td class=\"text-center\">{{ material.codMaterial }}</td>\r\n              <td>{{ material.nomeMaterial | uppercase }}</td>\r\n            </tr>\r\n          </ng-template>\r\n        </custom-table>\r\n      </detail-panel>\r\n    </div>\r\n  </div>\r\n</app-body>\r\n";
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
          this.API = "http://23.254.204.187/api/comercial";
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
          key: "getAlmacen",
          value: function getAlmacen(params) {
            return this.http.get("".concat(this.API, "/almacen")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getLinhasId",
          value: function getLinhasId(id) {
            return this.http.get("".concat(this.API, "/linhas/").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getSublineasId",
          value: function getSublineasId(id) {
            return this.http.get("".concat(this.API, "/sublineas/").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "sincronizarMateriales",
          value: function sincronizarMateriales() {
            return this.http.get("".concat(this.API, "/sincronizar")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getMateriales",
          value: function getMateriales(params) {
            return this.http.get("".concat(this.API, "/materiales"), {
              params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getMaterialesLista",
          value: function getMaterialesLista(params) {
            return this.http.get("".concat(this.API, "/materiales/lista"), {
              params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getMaterialesOferta",
          value: function getMaterialesOferta(params) {
            return this.http.get("".concat(this.API, "/materiales_lista_precio"), {
              params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getMaterialesOfertaVendedor",
          value: function getMaterialesOfertaVendedor(params) {
            return this.http.get("".concat(this.API, "/materiales_lista_precio_vendedor"), {
              params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getUpSellService",
          value: function getUpSellService(params) {
            return this.http.get("".concat(this.API, "/materiales_suplementarios"), {
              params: params
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
        }, {
          key: "getPresentacionMaterial",
          value: function getPresentacionMaterial() {
            return this.http.get("".concat(this.API, "/presentacion_materiales")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getCliente",
          value: function getCliente(codCliente) {
            return this.http.get("".concat(this.API, "/clientes/detalhes/").concat(codCliente)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getListarPrecios",
          value: function getListarPrecios() {
            return this.http.get("".concat(this.API, "/vendedor/lista_precio")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getTodosVendedores",
          value: function getTodosVendedores() {
            return this.http.get("".concat(this.API, "/vendedor/allvendedor")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getCentrosLogisticos",
          value: function getCentrosLogisticos() {
            return this.http.get("".concat(this.API, "/almacen/centros_logisticos"));
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
    "Vprx":
    /*!*****************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/materiais/grupos/lista/lista.component.scss ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function Vprx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NhZGFzdHJvcy9tYXRlcmlhaXMvZ3J1cG9zL2xpc3RhL2xpc3RhLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "XMyU":
    /*!*************************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/materiais/grupos/formulario/formulario.component.ts ***!
      \*************************************************************************************************/

    /*! exports provided: ComercialCadastrosMateriaisGrupoFormularioComponent */

    /***/
    function XMyU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosMateriaisGrupoFormularioComponent", function () {
        return ComercialCadastrosMateriaisGrupoFormularioComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./formulario.component.html */
      "DuLQ");
      /* harmony import */


      var _formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./formulario.component.scss */
      "Bryw");
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


      var _grupos_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../grupos.service */
      "4YhS");
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


      var ComercialCadastrosMateriaisGrupoFormularioComponent = /*#__PURE__*/function () {
        function ComercialCadastrosMateriaisGrupoFormularioComponent(activatedRoute, router, location, formBuilder, materiaisGrupoService, pnotifyService, atividadesService, titleService, comercialService, confirmModalService) {
          _classCallCheck(this, ComercialCadastrosMateriaisGrupoFormularioComponent);

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
          this.linhas = [];
          this.classes = [];
          this.filteredClasses = [];
          this.materiais = [];
          this.toggleAll = false;
          this.searching = false;
          this.firstSearch = false;
          this.materiaisLista = [];
          this.materiaisListaLoaded = false;
          this.materiaisListaEmpty = false;
          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialCadastrosMateriaisGrupoFormularioComponent, [{
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
                routerLink: "/comercial/cadastros/".concat(params.idSubModulo, "/materiais/grupos/lista")
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
                precoGrupo: [detalhes.precoGrupo, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                codSituacao: [detalhes.codSituacao, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                assocMateriais: this.formBuilder.array([])
              });
              this.setMateriais(detalhes.materiais);
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
              codMaterial: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]]
            });
          }
        }, {
          key: "setMateriais",
          value: function setMateriais(materiais) {
            if (materiais.length > 0) {
              for (var i = 0; i < materiais.length; i++) {
                this.onAddMaterial(materiais[i]);
              }
            }
          }
        }, {
          key: "assocMateriais",
          get: function get() {
            return this.form.get('assocMateriais');
          }
        }, {
          key: "onAddMaterial",
          value: function onAddMaterial(material, manipulateForm) {
            var _this3 = this;

            if (this.codClasse === null) {
              this.codClasse = material.codClasse;
            }

            if (this.codClasse === material.codClasse) {
              if (this.checkMaterialExists(material) === false) {
                this.assocMateriais.push(this.formBuilder.group({
                  codMaterial: [material.codMaterial],
                  nomeMaterial: [material.nomeMaterial],
                  codClasse: [material.codClasse]
                }));

                if (this.form.value.assocMateriais.length > 9) {
                  if (this.tableConfigAssocMateriais.fixedHeader === false) {
                    this.showMateriais = false;
                    this.tableConfigAssocMateriais.fixedHeader = true;
                    setTimeout(function () {
                      _this3.showMateriais = true;
                    }, 1);
                  }
                }

                if (manipulateForm) {
                  this.form.markAsTouched();
                  this.form.markAsDirty();
                }
              }
            } else {
              this.pnotifyService.notice('Associe apenas materiais da mesma classe.');
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
            var _this4 = this;

            this.confirmDelete().subscribe(function (response) {
              return response ? _this4.deleteMaterial(index) : null;
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
                codClasse: this.formMateriais.value.codClasse
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
            this.toggleAll = false;

            for (var index = 0; index < this.materiaisLista.length; index++) {
              if (this.materiaisLista[index].checked === 1) {
                var material = {
                  codMaterial: this.materiaisLista[index].codigoMaterial,
                  nomeMaterial: this.materiaisLista[index].descricao,
                  codClasse: this.materiaisLista[index].codClasse
                };
                this.onAddMaterial(material, true);
                this.materiaisLista[index].checked = 0;
              }
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
            var _this7 = this;

            if (this.form.pristine) {
              this.location.back();
            } else {
              if (this.form.valid) {
                if (this.form.value.assocMateriais.length > 0) {
                  this.loaderNavbar = true;
                  this.submittingForm = true;
                  this.materiaisGrupoService.save(this.form.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
                    _this7.loaderNavbar = false;
                    _this7.submittingForm = false;
                  })).subscribe(function (response) {
                    if (response.hasOwnProperty('success') && response.success === true) {
                      _this7.form.reset();

                      _this7.formChanged = false;

                      _this7.pnotifyService.success(response.mensagem);

                      _this7.activatedRoute.params.subscribe(function (params) {
                        var navigateTo;

                        if (params.hasOwnProperty('id')) {
                          navigateTo = '../../lista';
                        } else {
                          navigateTo = '../lista';
                        }

                        _this7.router.navigate([navigateTo], {
                          relativeTo: _this7.activatedRoute
                        });
                      });
                    } else if (response.hasOwnProperty('success') && response.success === false) {
                      _this7.pnotifyService.error(response.mensagem);
                    } else {
                      _this7.pnotifyService.error();
                    }
                  }, function (error) {
                    _this7.pnotifyService.error();
                  });
                } else {
                  this.pnotifyService.notice('Associe pelo menos um material.');
                }
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

        return ComercialCadastrosMateriaisGrupoFormularioComponent;
      }();

      ComercialCadastrosMateriaisGrupoFormularioComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }, {
          type: _grupos_service__WEBPACK_IMPORTED_MODULE_9__["ComercialCadastrosMateriaisGrupoService"]
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

      ComercialCadastrosMateriaisGrupoFormularioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-cadastros-materiais-grupos-formulario',
        template: _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _grupos_service__WEBPACK_IMPORTED_MODULE_9__["ComercialCadastrosMateriaisGrupoService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__["AtividadesService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_12__["TitleService"], src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_13__["ComercialService"], src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_14__["ConfirmModalService"]])], ComercialCadastrosMateriaisGrupoFormularioComponent);
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
    "kZpS":
    /*!*******************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/materiais/grupos/grupos.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: ComercialCadastrosMateriaisGrupoModule */

    /***/
    function kZpS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosMateriaisGrupoModule", function () {
        return ComercialCadastrosMateriaisGrupoModule;
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


      var _grupos_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./grupos-routing.module */
      "3uWo");
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
      "sAAZ");
      /* harmony import */


      var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./formulario/formulario.component */
      "XMyU");
      /* harmony import */


      var _grupos_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./grupos.service */
      "4YhS"); // ngx-bootstrap
      // ng-select
      // ng2-currency-mask
      // PNotify
      // Modules
      // Components
      // Services


      var ComercialCadastrosMateriaisGrupoModule = /*#__PURE__*/_createClass(function ComercialCadastrosMateriaisGrupoModule() {
        _classCallCheck(this, ComercialCadastrosMateriaisGrupoModule);
      });

      ComercialCadastrosMateriaisGrupoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_lista_lista_component__WEBPACK_IMPORTED_MODULE_12__["ComercialCadastrosMateriaisGrupoListaComponent"], _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_13__["ComercialCadastrosMateriaisGrupoFormularioComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"], ng2_currency_mask__WEBPACK_IMPORTED_MODULE_7__["CurrencyMaskModule"], _grupos_routing_module__WEBPACK_IMPORTED_MODULE_9__["ComercialCadastrosMateriaisGrupoRoutingModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_11__["TemplatesModule"]],
        providers: [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"], _grupos_service__WEBPACK_IMPORTED_MODULE_14__["ComercialCadastrosMateriaisGrupoService"]]
      })], ComercialCadastrosMateriaisGrupoModule);
      /***/
    },

    /***/
    "qerm":
    /*!******************************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/materiais/grupos/formulario/formulario-resolver.guard.ts ***!
      \******************************************************************************************************/

    /*! exports provided: ComercialCadastrosMateriaisGrupoFormularioResolverGuard */

    /***/
    function qerm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosMateriaisGrupoFormularioResolverGuard", function () {
        return ComercialCadastrosMateriaisGrupoFormularioResolverGuard;
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


      var _grupos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../grupos.service */
      "4YhS"); // Services


      var ComercialCadastrosMateriaisGrupoFormularioResolverGuard = /*#__PURE__*/function () {
        function ComercialCadastrosMateriaisGrupoFormularioResolverGuard(materiaisGruposService) {
          _classCallCheck(this, ComercialCadastrosMateriaisGrupoFormularioResolverGuard);

          this.materiaisGruposService = materiaisGruposService;
        }

        _createClass(ComercialCadastrosMateriaisGrupoFormularioResolverGuard, [{
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

        return ComercialCadastrosMateriaisGrupoFormularioResolverGuard;
      }();

      ComercialCadastrosMateriaisGrupoFormularioResolverGuard.ctorParameters = function () {
        return [{
          type: _grupos_service__WEBPACK_IMPORTED_MODULE_3__["ComercialCadastrosMateriaisGrupoService"]
        }];
      };

      ComercialCadastrosMateriaisGrupoFormularioResolverGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_grupos_service__WEBPACK_IMPORTED_MODULE_3__["ComercialCadastrosMateriaisGrupoService"]])], ComercialCadastrosMateriaisGrupoFormularioResolverGuard);
      /***/
    },

    /***/
    "sAAZ":
    /*!***************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/materiais/grupos/lista/lista.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: ComercialCadastrosMateriaisGrupoListaComponent */

    /***/
    function sAAZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosMateriaisGrupoListaComponent", function () {
        return ComercialCadastrosMateriaisGrupoListaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lista.component.html */
      "UCJa");
      /* harmony import */


      var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lista.component.scss */
      "Vprx");
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


      var _grupos_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../grupos.service */
      "4YhS");
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


      var ComercialCadastrosMateriaisGrupoListaComponent = /*#__PURE__*/function () {
        function ComercialCadastrosMateriaisGrupoListaComponent(activatedRoute, router, formBuilder, materiaisGrupoService, pnotifyService, atividadesService, titleService, confirmModalService, detailPanelService) {
          _classCallCheck(this, ComercialCadastrosMateriaisGrupoListaComponent);

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

        _createClass(ComercialCadastrosMateriaisGrupoListaComponent, [{
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
            var _this8 = this;

            this.activatedRoute.params.subscribe(function (params) {
              _this8.breadCrumbTree = [{
                descricao: 'Home',
                routerLink: '/comercial/home'
              }, {
                descricao: 'Cadastros',
                routerLink: "/comercial/cadastros/".concat(params.idSubModulo)
              }, {
                descricao: 'Grupos de materiais'
              }];
            });
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
            var _this10 = this;

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

                _this10.search(params);

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
              precoGrupo: null,
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
            var _this11 = this;

            this.loaderNavbar = true;
            this.detailPanelService.hide();
            this.dados = [];
            this.dadosPagination = [];
            this.dadosLoaded = false;
            this.dadosEmpty = false;
            this.materiaisGrupoService.getListaGrupos(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this11.loaderNavbar = false;
              _this11.dadosLoaded = true;
            })).subscribe(function (response) {
              if (response.hasOwnProperty('success') && response.success === true) {
                _this11.dados = response.data;
                _this11.dadosPagination = _this11.dados.slice(0, _this11.itemsPerPage);
                _this11.totalItems = _this11.dados.length;
                _this11.dadosLoaded = true;
              } else if (response.hasOwnProperty('success') && response.success === false) {
                _this11.dadosEmpty = true;
              } else {
                _this11.pnotifyService.error();

                _this11.dadosEmpty = true;
              }
            }, function (error) {
              _this11.dadosEmpty = true;

              if (error.error.hasOwnProperty('mensagem')) {
                _this11.pnotifyService.error(error.error.mensagem);
              } else {
                _this11.pnotifyService.error();
              }
            });
          }
        }, {
          key: "classStatusBorder",
          value: function classStatusBorder(grupo) {
            var borderClass;

            if (grupo.codSituacao === 0) {
              borderClass = 'border-danger';
            } else if (grupo.codSituacao === 1) {
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
            var _this12 = this;

            this.loaderNavbar = true;
            this.detailPanelService.show();
            this.detailPanelTitle = "Materiais associados (".concat(grupo.nomeGrupo, ")");
            this.setGrupoSelecionado();
            this.grupoSelecionado = grupo;
            this.materiais = [];
            this.materiaisGrupoService.getAssociacoesMateriais(grupo.codGrupo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              setTimeout(function () {
                _this12.loaderNavbar = false;
              }, 500);
            })).subscribe(function (response) {
              if (response.hasOwnProperty('success') && response.success === true) {
                // Não está vazio.
                _this12.detailPanelService.loadedFinished(false);

                _this12.materiais = response.data;
              } else if (response.hasOwnProperty('success') && response.success === false) {
                // Vazio.
                _this12.detailPanelService.loadedFinished(true);
              } else {
                // Vazio e com possível erro.
                _this12.pnotifyService.error();

                _this12.detailPanelService.loadedFinished(true);
              }
            }, function (error) {
              // Vazio e com erro.
              _this12.detailPanelService.loadedFinished(true);

              if (error.error.hasOwnProperty('mensagem')) {
                _this12.pnotifyService.error(error.error.mensagem);
              } else {
                _this12.pnotifyService.error();
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
            var _this13 = this;

            this.confirmActivate().asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (result) {
              return result ? _this13.activateGrupo(index, grupo) : rxjs__WEBPACK_IMPORTED_MODULE_6__["EMPTY"];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this13.loaderNavbar = false;
            })).subscribe(function (success) {
              _this13.pnotifyService.success();

              _this13.refreshMainData(grupo);
            }, function (error) {
              _this13.pnotifyService.error();

              _this13.dadosPagination[index].codSituacao = 2;
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
            var _this14 = this;

            this.confirmInactive().asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (result) {
              return result ? _this14.inactivateGrupo(index, grupo) : rxjs__WEBPACK_IMPORTED_MODULE_6__["EMPTY"];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this14.loaderNavbar = false;
            })).subscribe(function (success) {
              _this14.pnotifyService.success();

              _this14.refreshMainData(grupo);
            }, function (error) {
              _this14.pnotifyService.error();

              _this14.dadosPagination[index].codSituacao = 1;
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
                this.dados[i].codSituacao = grupo.codSituacao;
                return;
              }
            }
          }
        }]);

        return ComercialCadastrosMateriaisGrupoListaComponent;
      }();

      ComercialCadastrosMateriaisGrupoListaComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _grupos_service__WEBPACK_IMPORTED_MODULE_8__["ComercialCadastrosMateriaisGrupoService"]
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

      ComercialCadastrosMateriaisGrupoListaComponent.propDecorators = {
        scrollToFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['scrollToFilter', {}]
        }]
      };
      ComercialCadastrosMateriaisGrupoListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-cadastros-materiais-grupos-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _grupos_service__WEBPACK_IMPORTED_MODULE_8__["ComercialCadastrosMateriaisGrupoService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"], src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_12__["ConfirmModalService"], src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_13__["DetailPanelService"]])], ComercialCadastrosMateriaisGrupoListaComponent);
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
          this.API = "http://23.254.204.187/api/comercial/tid-software";
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
//# sourceMappingURL=materiais-grupos-grupos-module-es5.js.map