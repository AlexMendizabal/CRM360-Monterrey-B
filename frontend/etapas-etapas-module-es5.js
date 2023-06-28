(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["etapas-etapas-module"], {
    /***/
    "+wCn":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/yms/etapas/associacao-setores/associacao-setores.component.html ***!
      \*****************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function wCn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\r\n<app-header [appTitle]=\"appTitle\">\r\n  <button \r\n    [disabled]=\"loadingNavBar === true\"\r\n    [routerLink]=\"['../../']\"\r\n    >\r\n    Finalizar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6\">\r\n      <form [formGroup]=\"form\" autocomplete=\"off\">\r\n        <div class=\"mtc-title\">Dados da Etapa</div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col pl-0\">\r\n            <label for=\"etapas\">Etapa</label>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"true\"\r\n              [items]=\"etapas\"\r\n              [virtualScroll]=\"true\"\r\n              placeholder=\"Selecione...\"\r\n              [loading]=\"loadingEtapas\"\r\n              labelForId=\"etapas\"\r\n              bindLabel=\"NM_ETAP\"\r\n              bindValue=\"UUID_LOGI_YMS_ETAP\"\r\n              id=\"etapas\"\r\n              formControlName=\"UUID_LOGI_YMS_ETAP\"\r\n              >\r\n            </ng-select>\r\n          </div>\r\n        </div>\r\n      </form>\r\n      <div class=\"row mb-4\">\r\n        <div class=\"col mb-3\">\r\n          <hr>\r\n        </div>\r\n      </div>\r\n      <div [hidden]=\"loadingSetores\">\r\n        <div class=\"row mb-2 mt-4\">\r\n          <div class=\"col mt-auto\">\r\n            <div class=\"mtc-title mb-0\">Setores associados a Etapa</div>\r\n          </div>\r\n          <div class=\"col\">\r\n            <div class=\"d-flex justify-content-end\">\r\n              <button\r\n                type=\"button\"\r\n                class=\"btn btn-sm btn-outline-danger\"\r\n                (click)=\"onRemoverAssociacao()\">\r\n                <i class=\"fas fa-trash\"></i>\r\n                <span>Limpar</span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\" *ngIf=\"!setoresAssociadosLoading && setoresAssociados.length > 0\">\r\n          <div class=\"col\">\r\n            <custom-table [config]=\"tableConfigSetoresAssociados\">\r\n              <ng-template #thead let-thead>\r\n                <tr>\r\n                  <th\r\n                    scope=\"col\"\r\n                    class=\"text-center\"\r\n                    style=\"width: 5%\">\r\n                    <btn-icon\r\n                      [icon]=\"toggle?.setoresAssociados ? 'fas fa-check-square' : 'far fa-square'\"\r\n                      size=\"small\"\r\n                      (click)=\"onToggleAll('setoresAssociados')\">\r\n                    </btn-icon>\r\n                  </th>\r\n                  <th scope=\"col\" style=\"width: 10%\">Seq.</th>\r\n                  <th scope=\"col\" style=\"width: 10%\"></th>\r\n                  <th scope=\"col\" style=\"width: 35%\">Setores</th>\r\n                  <th scope=\"col\" style=\"width: 35%\">Tipo de setor</th>\r\n                </tr>\r\n              </ng-template>\r\n              <ng-template #tbody let-tbody>\r\n                <tr *ngFor=\"let item of setoresAssociados\" >\r\n                  <td class=\"text-center\" style=\"width: 5%\">\r\n                    <btn-icon\r\n                      [icon]=\"item.checked == 1 ? 'fas fa-check-square' : 'far fa-square'\"\r\n                      size=\"small\"\r\n                      (click)=\"item.checked = !item.checked\">\r\n                    </btn-icon>\r\n                  </td>\r\n                  <td \r\n                    class=\"hover\"\r\n                    style=\"width: 10%\">\r\n                    {{ item.NR_SQNC  }}\r\n                  </td>\r\n                  <td\r\n                    class=\"hover text-center\"\r\n                    style=\"width: 10%\">\r\n                    <div [class]=\"item.DS_ICON\"></div>\r\n                  </td>\r\n                  <td\r\n                    class=\"hover\"\r\n                    style=\"width: 35%\">\r\n                    {{ item.NM_SETO | uppercase }}\r\n                  </td>\r\n                  <td\r\n                    class=\"hover\"\r\n                    style=\"width: 35%\">\r\n                    {{ item.NM_SETO_TIPO | uppercase }}\r\n                  </td>\r\n                  <td class=\"text-center\" width=\"5%\" height=\"26px\">\r\n                    <btn-icon\r\n                      icon=\"fas fa-trash\"\r\n                      size=\"small\"\r\n                      (click)=\"onRemoverAssociacao(item)\"\r\n                      *ngIf=\"!item.loading\"  \r\n                    >\r\n                    </btn-icon>\r\n                    <div class=\"text-primary small\" *ngIf=\"item.loading\">\r\n                      <i class=\"fas fa-spinner fa-spin\"></i>\r\n                    </div>\r\n                  </td>\r\n                </tr>\r\n              </ng-template>\r\n            </custom-table>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\" *ngIf=\"!loadingSetores && setoresAssociados.length === 0\">\r\n          <div class=\"col\">\r\n            <message\r\n              icon=\"fas fa-exchange-alt\"\r\n              text=\"Nenhuma associação encontrada\">\r\n            </message>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\" *ngIf=\"loadingSetores\">\r\n          <div class=\"col\">\r\n            <message\r\n              icon=\"fas fa-cog fa-spin\"\r\n              text=\"Estamos pesquisando os setores para você...\">\r\n            </message>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-6 border-left\">\r\n      <form [formGroup]=\"formSetores\" autocomplete=\"off\">\r\n        <div class=\"row mb-2\">\r\n          <div class=\"col mt-auto\">\r\n            <div class=\"mtc-title mb-0\">Pesquisa de Setores</div>\r\n          </div>\r\n          <div class=\"col\">\r\n            <div class=\"d-flex justify-content-end\">\r\n              <button\r\n                type=\"button\"\r\n                class=\"btn btn-sm btn-outline-secondary\"\r\n                (click)=\"getSetores()\">\r\n                <i class=\"fas fa-search\"></i>\r\n                <span \r\n                container=\"body\"\r\n                placement =\"left\">Pesquisar</span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <advanced-filter>\r\n          <div class=\"form-row\">\r\n              <div class=\"form-group col-md-6 pl-0\">\r\n                <label for=\"tiposSetor\">Tipo de Setor</label>\r\n                <ng-select\r\n                  [searchable]=\"true\"\r\n                  [clearable]=\"true\"\r\n                  [items]=\"tiposSetor\"\r\n                  [virtualScroll]=\"true\"\r\n                  placeholder=\"Selecione...\"\r\n                  [loading]=\"loadingTiposSetor\"\r\n                  labelForId=\"tiposSetor\"\r\n                  (keydown.enter)=\"getSetores()\"\r\n                  bindLabel=\"NM_SETO_TIPO\"\r\n                  bindValue=\"UUID_LOGI_YMS_SETO_TIPO\"\r\n                  id=\"tiposSetor\"\r\n                  formControlName=\"UUID_LOGI_YMS_SETO_TIPO\"\r\n                  (change)=\"getFilterSetores({'UUID_LOGI_YMS_SETO_TIPO': $event?.UUID_LOGI_YMS_SETO_TIPO || ''})\">\r\n                </ng-select>\r\n              </div>\r\n              <div class=\"form-group col-md-6 pl-0\">\r\n                <label for=\"filterSetores\">Setor</label>\r\n                <ng-select\r\n                  [searchable]=\"true\"\r\n                  [clearable]=\"true\"\r\n                  [items]=\"filterSetores\"\r\n                  [virtualScroll]=\"true\"\r\n                  placeholder=\"Selecione...\"\r\n                  [loading]=\"loadingFilterSetores\"\r\n                  labelForId=\"filterSetores\"\r\n                  (keydown.enter)=\"getSetores()\"\r\n                  bindLabel=\"NM_SETO\"\r\n                  bindValue=\"UUID_LOGI_YMS_SETO\"\r\n                  id=\"filterSetores\"\r\n                  formControlName=\"UUID_LOGI_YMS_SETO\">\r\n                </ng-select>\r\n              </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n              <div class=\"form-group col-md-12 pl-0\">\r\n                <label for=\"filiais\">Filial</label>\r\n                <ng-select\r\n                  [searchable]=\"true\"\r\n                  [clearable]=\"true\"\r\n                  [items]=\"filiais\"\r\n                  [virtualScroll]=\"true\"\r\n                  placeholder=\"Selecione...\"\r\n                  (keydown.enter)=\"getSetores()\"\r\n                  [loading]=\"loadingFiliais\"\r\n                  labelForId=\"filiais\"\r\n                  bindLabel=\"NM_FILI\"\r\n                  bindValue=\"UUID_LOGI_FILI\"\r\n                  id=\"filiais\"\r\n                  formControlName=\"UUID_LOGI_FILI\"\r\n                  >\r\n                </ng-select>\r\n              </div>\r\n          </div>\r\n        </advanced-filter>\r\n        <div *ngIf=\"setores.length > 0 && !setoresLoading\">\r\n          <div class=\"row mb-2\">\r\n            <div class=\"col mt-auto\">\r\n              <div class=\"mtc-title mb-0\">Seleção de Setor</div>\r\n            </div>\r\n            <div class=\"col\">\r\n              <div class=\"d-flex justify-content-end\">\r\n                <button\r\n                  type=\"button\"\r\n                  class=\"btn btn-sm btn-outline-primary\"\r\n                  (click)=\"onAssociarSetores()\"\r\n                  [disabled]=\"searching === true || formSetores.valid === false\">\r\n                  <i class=\"fas fa-exchange-alt\"></i>\r\n                  <span\r\n                    [tooltip]=\"form.valid == false ? 'Selecione uma Etapa':''\"\r\n                    container=\"body\"\r\n                    placement =\"left\">Associar\r\n                  </span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              <custom-table [config]=\"tableConfigSetores\">\r\n                <ng-template #thead let-thead>\r\n                  <tr>\r\n                    <th\r\n                      scope=\"col\"\r\n                      class=\"text-center\"\r\n                      style=\"width: 5%\">\r\n                      <btn-icon\r\n                        [icon]=\"toggle?.setores ? 'fas fa-check-square' : 'far fa-square'\"\r\n                        size=\"small\"\r\n                        (click)=\"onToggleAll('setores')\">\r\n                      </btn-icon>\r\n                    </th>\r\n                    <th scope=\"col\" style=\"width: 10%\" class=\"text-center\">Seq.</th>\r\n                    <th scope=\"col\" style=\"width: 10%\"></th>\r\n                    <th scope=\"col\" style=\"width: 35%\">Setores</th>\r\n                    <th scope=\"col\" style=\"width: 35%\">Tipo de setor</th>\r\n                    <th style=\"width: 5%\"></th>\r\n                  </tr>\r\n                </ng-template>\r\n                <ng-template #tbody let-tbody>\r\n                  <tr *ngFor=\"let item of setores\">\r\n                    <td class=\"text-center\" style=\"width: 5%\">\r\n                      <btn-icon\r\n                        *ngIf = \"item.NR_SQNC > 0 \"\r\n                        [icon]=\"item.checked == 1 ? 'fas fa-check-square' : 'far fa-square'\"\r\n                        size=\"small\"\r\n                        (click)=\"item.checked = !item.checked;\">\r\n                      </btn-icon>\r\n                    </td>\r\n                    <td\r\n                    class=\"hover\"\r\n                    style=\"width: 10%\"\r\n                    >\r\n                      <input\r\n                      type=\"number\"\r\n                      class=\"form-control\"\r\n                      min = \"1\"\r\n                      (change)=\"item.NR_SQNC = ($event.target.value);\"\r\n                    />\r\n                    </td>\r\n                    <td \r\n                      class=\"hover text-center\"\r\n                      style=\"width: 10%\">\r\n                      <div [class]=\"item.DS_ICON\"></div>\r\n                    </td>\r\n                    <td\r\n                      class=\"hover\"\r\n                      style=\"width: 35%\"\r\n                      (click)=\"item.checked = !item.checked\">\r\n                      {{ item.NM_SETO | uppercase }}\r\n                    </td>\r\n                    <td\r\n                      class=\"hover\"\r\n                      style=\"width: 35%\"\r\n                      (click)=\"item.checked = !item.checked\">\r\n                      {{ item.NM_SETO_TIPO | uppercase }}\r\n                    </td>\r\n                    <td style=\"width: 5%; height: 26px\">\r\n                      <div class=\"text-primary small\" *ngIf=\"item.loading\">\r\n                        <i class=\"fas fa-spinner fa-spin\"></i>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                </ng-template>\r\n              </custom-table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\" *ngIf=\"setoresLoading\">\r\n          <div class=\"col\">\r\n            <message\r\n              icon=\"fas fa-cog fa-spin\"\r\n              text=\"Estamos pesquisando os setores para você...\">\r\n            </message>\r\n          </div>\r\n        </div>\r\n        <div>\r\n          <div class=\"row\" *ngIf=\"(setores.length == 0) && !setoresLoading\">\r\n            <div class=\"col\">\r\n              <message\r\n                icon=\"fas fa-box-open\"\r\n                text=\"Nenhuma informação encontrada\">\r\n              </message>\r\n            </div>\r\n          </div>\r\n          <!-- <div class=\"row\" *ngIf=\"setoresLista.length === 0 && !firstSearch\">\r\n            <div class=\"col\">\r\n              <message\r\n                icon=\"fas fa-search\"\r\n                text=\"Preecha os campos acima para pesquisar setores\">\r\n              </message>\r\n            </div>\r\n          </div> -->\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</app-body>\r\n\r\n";
      /***/
    },

    /***/
    "0HNB":
    /*!*******************************************************************************!*\
      !*** ./src/app/modules/logistica/yms/etapas/cadastro/cadastro.component.scss ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function HNB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL3ltcy9ldGFwYXMvY2FkYXN0cm8vY2FkYXN0cm8uY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "6mhV":
    /*!*************************************************************************!*\
      !*** ./src/app/modules/logistica/yms/etapas/lista/lista.component.scss ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function mhV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL3ltcy9ldGFwYXMvbGlzdGEvbGlzdGEuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "Cft5":
    /*!***************************************************************************************************!*\
      !*** ./src/app/modules/logistica/yms/etapas/associacao-setores/associacao-setores.component.scss ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Cft5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "button[disabled] {\n  cursor: no-drop;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EveW1zL2V0YXBhcy9hc3NvY2lhY2FvLXNldG9yZXMvYXNzb2NpYWNhby1zZXRvcmVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EveW1zL2V0YXBhcy9hc3NvY2lhY2FvLXNldG9yZXMvYXNzb2NpYWNhby1zZXRvcmVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uW2Rpc2FibGVkXXtcclxuICBjdXJzb3I6IG5vLWRyb3A7XHJcbn1cclxuIl19 */";
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
    "FfNJ":
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/yms/etapas/cadastro/cadastro.component.html ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function FfNJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\r\n<app-header appTitle=\"Etapas\">\r\n  <button \r\n    [disabled]=\"form.valid === false || loadingNavBar === true\"\r\n    (click)=\"postEtapas()\"\r\n    >\r\n    Salvar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <form [formGroup]=\"form\" autocomplete=\"off\" [hidden] = \"loading\">\r\n    <fieldset  class=\"col-12\">\r\n      <fieldset class=\"border rounded shadow-sm col-8 pt-2 mx-auto\">\r\n        <legend>Dados da Etapa</legend>\r\n        <div class=\"form-row justify-content-center\">\r\n          <div class=\"form-group col-md-12 pl-0\">\r\n            <label for=\"NM_ETAP\">Descrição</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"NM_ETAP\"\r\n              formControlName=\"NM_ETAP\"\r\n              placeholder=\"Digite...\"\r\n              [ngClass]=\"onFieldError('NM_ETAP') + ' ' + onFieldRequired('NM_ETAP')\"\r\n            />\r\n            <invalid-form-control [show]=\"onFieldInvalid('NM_ETAP')\" message=\"Descrição é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row justify-content-center\">\r\n          <div class=\"form-group col-md-6 pl-0\">\r\n            <label for=\"tiposEtapa\">Tipo de etapa</label>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"true\"\r\n              [items]=\"tiposEtapa\"\r\n              [virtualScroll]=\"true\"\r\n              placeholder=\"Selecione...\"\r\n              [loading]=\"loadingTiposEtapa\"\r\n              labelForId=\"tiposEtapa\"\r\n              bindLabel=\"NM_ETAP_TIPO\"\r\n              bindValue=\"UUID_LOGI_YMS_ETAP_TIPO\"\r\n              id=\"tiposEtapa\"\r\n              formControlName=\"UUID_LOGI_YMS_ETAP_TIPO\"\r\n              [ngClass]=\"onFieldError('UUID_LOGI_YMS_ETAP_TIPO') + ' ' + onFieldRequired('UUID_LOGI_YMS_ETAP_TIPO')\">\r\n              >\r\n            </ng-select>\r\n            <invalid-form-control [show]=\"onFieldInvalid('UUID_LOGI_YMS_ETAP_TIPO')\" message=\"Circuito é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n          <div class=\"form-group col-md-6 pl-0\">\r\n            <label for=\"IN_STAT\">Sigla</label>\r\n            <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"false\"\r\n            [items]=\"tipos\"\r\n            [virtualScroll]=\"true\"\r\n            labelForId=\"tipo\"\r\n            bindLabel=\"nome\"\r\n            bindValue=\"cod\"\r\n            id=\"tipo\"\r\n            formControlName=\"SG_ETAP\"\r\n            placeholder=\"Selecione...\"\r\n            [ngClass]=\"onFieldError('SG_ETAP') + ' ' + onFieldRequired('SG_ETAP')\"\r\n          >\r\n          </ng-select>\r\n          <invalid-form-control [show]=\"onFieldInvalid('SG_ETAP')\" message=\"Tipo de circuito é obrigatório.\"></invalid-form-control>\r\n\r\n          </div>\r\n        </div>\r\n      </fieldset>\r\n      <br>\r\n      <br>\r\n      <fieldset class=\"border rounded shadow-sm col-8 pt-2 mx-auto\">\r\n        <legend>Observação</legend>\r\n        <div class=\"form-row justify-content-center\">\r\n          <div class=\"form-group col\">\r\n            <label for=\"DS_OBSE\" >Observação:</label>\r\n            <textarea class=\"form-control\" id=\"DS_OBSE\" formControlName=\"DS_OBSE\" rows=\"3\"></textarea>\r\n          </div>\r\n        </div>\r\n        <br>\r\n      </fieldset>\r\n    </fieldset>\r\n  </form>\r\n</app-body>";
      /***/
    },

    /***/
    "IZqw":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/yms/etapas/lista/lista.component.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function IZqw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loadingNavBar\"></loader-spinner-navbar>\r\n<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n<app-header appTitle=\"ETAPAS\">\r\n  <button\r\n  type=\"button\"\r\n  (click)=\"onExport()\"\r\n  [disabled]=\"loadingNavBar || noResult\">\r\n  Exportar\r\n</button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onReset()\">\r\n    Limpar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    [routerLink]=\"['../novo']\">\r\n    Adicionar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onFilter()\">\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loading\">\r\n  <div class=\"row\" #scrollToFilter>\r\n    <div class=\"col\">\r\n      <advanced-filter>\r\n        <form [formGroup]=\"form\" autocomplete=\"off\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-3 pl-0\">\r\n              <label for=\"circuitos\">Circuito</label>\r\n              <ng-select\r\n                [searchable]=\"true\"\r\n                [clearable]=\"true\"\r\n                [items]=\"circuitos\"\r\n                [virtualScroll]=\"true\"\r\n                placeholder=\"Selecione...\"\r\n                [loading]=\"loadingCircuitos\"\r\n                labelForId=\"ID_LOGI_YMS_CIRC\"\r\n                bindLabel=\"NM_CIRC\"\r\n                bindValue=\"ID_LOGI_YMS_CIRC\"\r\n                id=\"ID_LOGI_YMS_CIRC\"\r\n                formControlName=\"ID_LOGI_YMS_CIRC\">\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"form-group col-md-3 pl-0\">\r\n              <label for=\"setores\">Setores</label>\r\n              <ng-select\r\n                [searchable]=\"true\"\r\n                [clearable]=\"true\"\r\n                [items]=\"setores\"\r\n                [virtualScroll]=\"true\"\r\n                placeholder=\"Selecione...\"\r\n                [loading]=\"loadingSetores\"\r\n                labelForId=\"ID_LOGI_YMS_SETO\"\r\n                bindLabel=\"NM_SETO\"\r\n                bindValue=\"ID_LOGI_YMS_SETO\"\r\n                id=\"ID_LOGI_YMS_SETO\"\r\n                formControlName=\"ID_LOGI_YMS_SETO\">\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"form-group col-md-3 pl-0\">\r\n              <label for=\"filterEtapas\">Etapa</label>\r\n              <ng-select\r\n                [searchable]=\"true\"\r\n                [clearable]=\"true\"\r\n                [items]=\"filterEtapas\"\r\n                [virtualScroll]=\"true\"\r\n                placeholder=\"Selecione...\"\r\n                [loading]=\"loadingEtapas\"\r\n                labelForId=\"UUID_LOGI_YMS_ETAP\"\r\n                bindLabel=\"NM_ETAP\"\r\n                bindValue=\"UUID_LOGI_YMS_ETAP\"\r\n                id=\"UUID_LOGI_YMS_ETAP\"\r\n                formControlName=\"UUID_LOGI_YMS_ETAP\">\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"form-group col-md-2 pl-0\">\r\n              <label for=\"IN_STAT\">Situação</label>\r\n              <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"false\"\r\n              [items]=\"tipos\"\r\n              [virtualScroll]=\"true\"\r\n              labelForId=\"tipo\"\r\n              bindLabel=\"nome\"\r\n              bindValue=\"cod\"\r\n              id=\"tipo\"\r\n              (change)=\"onFilter()\"\r\n              formControlName=\"IN_STAT\"\r\n              (keydown.enter)=\"onFilter()\"\r\n              placeholder=\"Selecione...\"\r\n            >\r\n            </ng-select>\r\n            </div>\r\n            <div class=\"form-group col-md-1 p-0\">\r\n              <label>Registros</label>\r\n              <select \r\n                class=\"form-control custom-select\"\r\n                formControlName=\"TT_REGI_PAGI\"\r\n                (keydown.enter)=\"onFilter()\"\r\n                (change)=\"setPageRegistros($event.target.value)\"  \r\n              >\r\n                <option value=\"10\">10</option>\r\n                <option value=\"25\">25</option>\r\n                <option value=\"50\">50</option>\r\n                <option value=\"100\">100</option>\r\n                <option value=\"250\">250</option>\r\n                <option value=\"500\">500</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </advanced-filter>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <subtitles\r\n        [data]=\"subtitles\"\r\n        [show]=\"!noResult\">\r\n      </subtitles>\r\n    </div>\r\n  </div>\r\n  <div class=\"d-flex\" [hidden] = \"loading || noResult\">\r\n    <div class=\"p-0\" [ngClass]=\"{'col': !showDetailPanel, 'col-6': showDetailPanel}\">\r\n      <div class=\"w-100\">\r\n        <custom-table  [config]=\"tableConfig\" class=\"text-center\" *ngIf=\"!noResult\">\r\n          <ng-template #thead let-thead>\r\n            <tr>\r\n              <th scope=\"col\" >ID</th>\r\n              <th scope=\"col\" >Descrição</th>\r\n              <th scope=\"col\" >Tipo etapas</th>\r\n              <th scope=\"col\" style=\"width:160px\"[hidden]=\"showDetailPanel\"></th>\r\n            </tr>\r\n          </ng-template>\r\n          <ng-template #tbody let-tbody>\r\n            <tr *ngFor=\"let etapa of etapas\"  [class.table-active]=\"etapa?.UUID_LOGI_YMS_ETAP == etapaSelecionada?.UUID_LOGI_YMS_ETAP && showDetailPanel\">\r\n              <td  [ngClass]=\"etapa.IN_STAT == '1' ? 'border-success' : 'border-danger'\">\r\n              {{etapa.UUID_LOGI_YMS_ETAP }}\r\n              </td>\r\n              <td >{{ etapa.NM_ETAP | uppercase}}</td>\r\n              <td >{{ etapa.NM_ETAP_TIPO | uppercase}}</td>\r\n              <td class=\"align-middle\" [hidden]=\"showDetailPanel\">\r\n                <span class=\"mr-3\" [tooltip]=\"etapa.IN_STAT == 1 ? 'Inativar' : 'Ativar'\" placement=\"left\" container=\"body\">\r\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"changeType(etapa)\">\r\n                    <i [ngClass]=\"etapa.IN_STAT == '1' ? 'fas fa-toggle-on' : 'fas fa-toggle-off'\"></i>\r\n                  </button>\r\n                </span>\r\n                <span class=\"mr-3\" tooltip=\"Editar\" placement=\"left\" container=\"body\">\r\n                  <button type=\"button\" class=\"btn-icon-sm\" [routerLink]=\"['./../', etapa.UUID_LOGI_YMS_ETAP]\">\r\n                    <i class=\"fas fa-edit\"></i>\r\n                  </button>\r\n                </span>\r\n                <span class=\"mr-3\"  tooltip=\"Associar Setores\" placement=\"left\" container=\"body\" >\r\n                  <button type=\"button\" class=\"btn-icon-sm\" [routerLink]=\"['./../setores/', etapa.UUID_LOGI_YMS_ETAP]\">\r\n                    <i class=\"fas fa-warehouse\"></i>                  \r\n                  </button>\r\n                </span>\r\n                <span class=\"mr-3\"  tooltip=\"Detalhes\" placement=\"left\" container=\"body\" >\r\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onDetails(etapa)\">\r\n                    <i class=\"fas fa-search\"></i>                  \r\n                  </button>\r\n                </span>\r\n              </td>\r\n            </tr>\r\n          </ng-template>\r\n        </custom-table><br>\r\n      </div>\r\n      <div *ngIf=\"totalItems > itemsPerPage\">\r\n        Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\r\n        <pagination\r\n          [maxSize]=\"10\"\r\n          [totalItems]=\"totalItems\"\r\n          (pageChanged)=\"onPageChanged($event)\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPage\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\">\r\n        </pagination>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-6 pr-0\" [hidden]=\"!showDetailPanel\">\r\n      <detail-panel panelTitle=\"Detalhes\">\r\n        <tabset>\r\n          <tab heading=\"Dados da Etapa\">\r\n            <div class=\"border-right border-left border-bottom px-3 pt-3\">\r\n              <div>\r\n                <div class=\"form-row\">\r\n                  <div class=\"form-group col-lg-6\">\r\n                    <label>ID da Etapa</label>\r\n                    <div>{{ etapaSelecionada?.UUID_LOGI_YMS_ETAP}}</div>\r\n                  </div>\r\n                  <div class=\"form-group col-lg-6\">\r\n                    <label>Etapa</label>\r\n                    <div>{{ etapaSelecionada?.NM_ETAP | uppercase}}</div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-row\">\r\n                  <div class=\"form-group col-lg-6\">\r\n                    <label>Tipo de Etapa</label>\r\n                    <div>{{ etapaSelecionada?.NM_ETAP_TIPO | uppercase}}</div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-row \">\r\n                  <div class=\"form-group col-lg-12\">\r\n                    <label>Observação:</label>\r\n                    <div>{{ etapaSelecionada?.DS_OBSE | uppercase}}</div>\r\n                  </div>\r\n                </div>\r\n                <hr>\r\n                <div class=\"form-row\">\r\n                  <div class=\"form-group col\">\r\n                    <label *ngIf=\"!etapaSelecionada?.DT_ATUA == null\">Usuário Responsável Pelo Cadastro</label>\r\n                    <label *ngIf=\"etapaSelecionada?.DT_ATUA == null\">Usuário Responsável Pela Atualização</label>\r\n                    <div>{{ etapaSelecionada?.NM_USUA | uppercase }}</div>\r\n                  </div>\r\n                  <div class=\"form-group col\">\r\n                    <label *ngIf=\"!etapaSelecionada?.DT_ATUA == null\">Data do Cadastro</label>\r\n                    <label *ngIf=\"etapaSelecionada?.DT_ATUA == null\">Data da Atualização</label>\r\n                    <div>{{(etapaSelecionada?.DT_ATUA | date: 'dd/MM/yyyy HH:mm') || (etapaSelecionada?.DT_INCL | date: 'dd/MM/yyyy HH:mm') }}</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </tab>\r\n          <tab  heading=\"Setores Associados\">\r\n            <div class=\"border-right border-left border-bottom px-3 pt-3\">\r\n              <div class=\"mb-3\">\r\n                <!-- <custom-table  [config]=\"tableConfigAssocSetores\"  class=\"text-center\" *ngIf=\"!loadingAssociacaoSetores && !noAssocSetores\">\r\n                  <ng-template #thead let-thead>\r\n                    <tr>\r\n                      <th scope=\"col\"  width=\"50%\">Tipo de Setor</th>\r\n                      <th scope=\"col\"  width=\"50%\">Setor</th>\r\n                    </tr>\r\n                  </ng-template>\r\n                  <ng-template #tbody let-tbody>\r\n                    <tr *ngFor=\"let setor of associacaoSetores\">\r\n                      <td  width=\"50%\">{{ setor?.NM_SETO_TIPO | uppercase }}</td>\r\n                      <td  width=\"50%\">{{ setor?.NM_SETO | uppercase }}</td>\r\n                    </tr>\r\n                  </ng-template>\r\n                </custom-table> -->\r\n                <div *ngFor=\"let setor of associacaoSetores; let last = last; let first = first\" [ngClass]=\"fist ? 'mt-4' : ''\">\r\n                  <div class=\"d-flex w-100\" [tooltip]=\"setor?.NM_SETO\" placement=\"left\">\r\n                    <div class=\"rounded-circle text-white icon-40 bg-secondary\">\r\n                      <i [class]=\"setor?.DS_ICON\"></i>\r\n                    </div>\r\n                    <strong class=\"my-auto ml-3 text-truncate\">\r\n                      {{ setor?.NM_SETO | uppercase}}\r\n                    </strong>\r\n                  </div>\r\n                  <div class=\"my-1\" *ngIf=\"!last\">\r\n                    <div class=\"ml-1\">\r\n                      <div class=\"border-left border-secondary ml-3 p-2\">\r\n                        <div *ngIf=\"setor?.check === 1\"></div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <message\r\n                  *ngIf=\"loadingAssociacaoSetores\"\r\n                  icon=\"fas fa-cog fa-spin\"\r\n                  text=\"Estamos pesquisando os setores para você...\">\r\n                </message>\r\n                <div [hidden]=\"loadingAssociacaoSetores || !noAssocSetores\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 80%\">\r\n                  <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </tab>       \r\n        </tabset> \r\n      </detail-panel>\r\n    </div>\r\n  </div>\r\n  <div [hidden]=\"loading || !noResult\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 80%\">\r\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n  </div>\r\n</app-body>";
      /***/
    },

    /***/
    "KwSx":
    /*!*****************************************************************************!*\
      !*** ./src/app/modules/logistica/yms/etapas/cadastro/cadastro.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: LogisticaYmsEtapasCadastroComponent */

    /***/
    function KwSx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaYmsEtapasCadastroComponent", function () {
        return LogisticaYmsEtapasCadastroComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./cadastro.component.html */
      "FfNJ");
      /* harmony import */


      var _cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cadastro.component.scss */
      "0HNB");
      /* harmony import */


      var _tipos_etapa_services_tipos_etapa_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../tipos-etapa/services/tipos-etapa.service */
      "vGh7");
      /* harmony import */


      var _setores_services_setores_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../setores/services/setores.service */
      "vpXL");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var js_brasil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! js-brasil */
      "zFJr");
      /* harmony import */


      var js_brasil__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(js_brasil__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _services_etapas_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../services/etapas.service */
      "Tp9O"); //Services
      //Bootstrap
      //Angular


      var LogisticaYmsEtapasCadastroComponent = /*#__PURE__*/function () {
        function LogisticaYmsEtapasCadastroComponent(formBuilder, pnotify, activatedRoute, router, localeService, etapasService, titleService, atividadesService, tiposEtapaService, setoresService) {
          _classCallCheck(this, LogisticaYmsEtapasCadastroComponent);

          this.formBuilder = formBuilder;
          this.pnotify = pnotify;
          this.activatedRoute = activatedRoute;
          this.router = router;
          this.localeService = localeService;
          this.etapasService = etapasService;
          this.titleService = titleService;
          this.atividadesService = atividadesService;
          this.tiposEtapaService = tiposEtapaService;
          this.setoresService = setoresService;
          this.breadCrumbTree = [];
          this.formData = []; //loading

          this.disabledForm = false;
          this.loading = false;
          this.loadingNavBar = false;
          this.tipos = [{
            cod: 'fixa',
            nome: 'Fixa'
          }, {
            cod: 'variavel',
            nome: 'Variável'
          }];
          this.MASKS = js_brasil__WEBPACK_IMPORTED_MODULE_8__["utilsBr"].MASKS;
          this.localeService.use('pt-br');
          this.bsConfig = Object.assign({}, {
            containerClass: 'theme-dark-blue'
          }, {
            adaptivePosition: true
          }, {
            showWeekNumbers: false
          });
        }

        _createClass(LogisticaYmsEtapasCadastroComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registrarAcesso();
            this.setBreadCrumb();
            this.setFormBuilder();
            this.onActivatedRoute();
            this.getTiposEtapa();
            this.getSetores();
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "onActivatedRoute",
          value: function onActivatedRoute() {
            var _params = this.activatedRoute.snapshot.params;
            if (_params.hasOwnProperty('id')) return this.getEtapa(_params['id']);
          }
        }, {
          key: "getTiposEtapa",
          value: function getTiposEtapa(params) {
            var _this = this;

            var _params = params !== null && params !== void 0 ? params : {};

            _params.IN_STAT = 1;
            _params.IN_PAGI = 0;
            this.loadingTiposEtapa = true;
            this.tiposEtapaService.getTiposEtapa(_params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () {
              _this.loadingTiposEtapa = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this.tiposEtapa = response.body['data'];
              } else {
                _this.tiposEtapa = [];
              }
            }, function (error) {
              try {
                _this.pnotify.error(error.error.message);
              } catch (error) {
                _this.pnotify.error();
              }
            });
          }
        }, {
          key: "getSetores",
          value: function getSetores(params) {
            var _this2 = this;

            var _params = params !== null && params !== void 0 ? params : {};

            _params.IN_STAT = 1;
            _params.IN_PAGI = 0;
            this.loadingSetores = true;
            this.setoresService.getSetores(_params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () {
              _this2.loadingSetores = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this2.setores = response.body['data'];
              } else {
                _this2.setores = [];
              }
            }, function (error) {
              try {
                _this2.pnotify.error(error.error.message);
              } catch (error) {
                _this2.pnotify.error();
              }
            });
          }
        }, {
          key: "getEtapa",
          value: function getEtapa(id) {
            var _this3 = this;

            this.loading = true;
            this.etapasService.getEtapa(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () {
              _this3.loading = false;
              _this3.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                var data = response.body['data'][0];

                _this3.form.patchValue(data);

                _this3.noResult = false;
              } else {
                _this3.noResult = true;
              }
            }, function (error) {
              _this3.pnotify.error();

              _this3.noResult = true;
            });
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            var id = this.activatedRoute.snapshot.params.idSubModulo;
            this.appTitle = 'Cadastro';
            this.titleService.setTitle(this.appTitle);
            this.breadCrumbTree = [{
              descricao: 'Home',
              routerLink: '/logistica/home'
            }, {
              descricao: 'YMS',
              routerLink: "/logistica/yms/".concat(id)
            }, {
              descricao: 'Etapas',
              routerLink: "../"
            }, {
              descricao: this.appTitle
            }];
          } //formulario

        }, {
          key: "setFormBuilder",
          value: function setFormBuilder() {
            this.form = this.formBuilder.group({
              UUID_LOGI_YMS_ETAP: [null],
              NM_ETAP: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required]],
              SG_ETAP: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required]],
              UUID_LOGI_YMS_ETAP_TIPO: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required]],
              NM_ETAP_TIPO: [null],
              IN_STAT: [null],
              DS_OBSE: [null]
            });
          } // Validação de formulário

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
          key: "postEtapas",
          value: function postEtapas() {
            var _this4 = this;

            this.loadingNavBar = true;
            this.etapasService.postEtapas(this.form.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () {
              _this4.loading = false;
              _this4.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this4.pnotify.success();

                _this4.router.navigate(['../'], {
                  relativeTo: _this4.activatedRoute
                });
              } else {
                _this4.pnotify.error();
              }
            }, function (error) {
              try {
                _this4.pnotify.error(error.error.message);
              } catch (error) {
                _this4.pnotify.error();
              }
            });
          }
        }]);

        return LogisticaYmsEtapasCadastroComponent;
      }();

      LogisticaYmsEtapasCadastroComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormBuilder"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]
        }, {
          type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["BsLocaleService"]
        }, {
          type: _services_etapas_service__WEBPACK_IMPORTED_MODULE_14__["LogisticaYmsEtapasService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_5__["TitleService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__["AtividadesService"]
        }, {
          type: _tipos_etapa_services_tipos_etapa_service__WEBPACK_IMPORTED_MODULE_3__["LogisticaYmsTiposEtapaService"]
        }, {
          type: _setores_services_setores_service__WEBPACK_IMPORTED_MODULE_4__["LogisticaYmsSetoresService"]
        }];
      };

      LogisticaYmsEtapasCadastroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"])({
        selector: 'logistica-yms-etapas-cadastro',
        template: _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormBuilder"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["BsLocaleService"], _services_etapas_service__WEBPACK_IMPORTED_MODULE_14__["LogisticaYmsEtapasService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_5__["TitleService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__["AtividadesService"], _tipos_etapa_services_tipos_etapa_service__WEBPACK_IMPORTED_MODULE_3__["LogisticaYmsTiposEtapaService"], _setores_services_setores_service__WEBPACK_IMPORTED_MODULE_4__["LogisticaYmsSetoresService"]])], LogisticaYmsEtapasCadastroComponent);
      /***/
    },

    /***/
    "TGEt":
    /*!*************************************************************************************************!*\
      !*** ./src/app/modules/logistica/yms/etapas/associacao-setores/associacao-setores.component.ts ***!
      \*************************************************************************************************/

    /*! exports provided: LogisticaYmsEtapasAssociacaoSetoresComponent */

    /***/
    function TGEt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaYmsEtapasAssociacaoSetoresComponent", function () {
        return LogisticaYmsEtapasAssociacaoSetoresComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_associacao_setores_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./associacao-setores.component.html */
      "+wCn");
      /* harmony import */


      var _associacao_setores_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./associacao-setores.component.scss */
      "Cft5");
      /* harmony import */


      var _tipos_setor_services_tipos_setor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../tipos-setor/services/tipos-setor.service */
      "uO4K");
      /* harmony import */


      var _setores_services_setores_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../setores/services/setores.service */
      "vpXL");
      /* harmony import */


      var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/modules/confirm-modal/confirm-modal.service */
      "FOez");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _services_etapas_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../services/etapas.service */
      "Tp9O");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _cadastros_filiais_services_filiais_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../cadastros/filiais/services/filiais.service */
      "NXOV"); // angular
      // services
      // rxjs


      var LogisticaYmsEtapasAssociacaoSetoresComponent = /*#__PURE__*/function () {
        function LogisticaYmsEtapasAssociacaoSetoresComponent(formBuilder, etapasService, pnotify, activatedRoute, atividadesService, confirmModalService, setoresService, tiposSetorService, filiaisService) {
          _classCallCheck(this, LogisticaYmsEtapasAssociacaoSetoresComponent);

          this.formBuilder = formBuilder;
          this.etapasService = etapasService;
          this.pnotify = pnotify;
          this.activatedRoute = activatedRoute;
          this.atividadesService = atividadesService;
          this.confirmModalService = confirmModalService;
          this.setoresService = setoresService;
          this.tiposSetorService = tiposSetorService;
          this.filiaisService = filiaisService;
          this.appTitle = "Associação Setores";
          this.breadCrumbTree = [];
          /*loading*/

          this.loading = false;
          this.loadingNavBar = false;
          this.noResult = true;
          this.setores = [];
          this.setoresLoading = false;
          this.loadingSetores = false;
          this.loadingFilterSetores = false;
          this.loadingTiposSetor = false;
          this.setoresAssociados = [];
          this.setoresAssociadosLoading = false;
          this.tableConfigSetoresAssociados = {
            fixedHeader: false,
            bodyHeight: 243,
            hover: false
          };
          this.tableConfigSetores = {
            fixedHeader: false,
            bodyHeight: 243
          };
          this.toggle = {
            setores: false,
            setoresAssociados: false
          };
          this.form = this.formBuilder.group({
            "UUID_LOGI_YMS_ETAP": [{
              value: null,
              disabled: true
            }],
            "NM_ETAP": [null]
          });
          this.formSetores = this.formBuilder.group({
            UUID_LOGI_YMS_SETO: [null],
            NM_SETO: [null],
            UUID_LOGI_YMS_SETO_TIPO: [null],
            NM_SETO_TIPO: [null],
            UUID_LOGI_FILI: [null],
            NM_FILI: [null]
          });
        }

        _createClass(LogisticaYmsEtapasAssociacaoSetoresComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.atividadesService.registrarAcesso().subscribe();
            this.onActivatedRoute();
            this.setBreadCrumb();
            this.getEtapas();
            this.getTiposSetor();
            this.getFilterSetores();
            this.getFiliais();
          }
        }, {
          key: "getFilterSetores",
          value: function getFilterSetores(params) {
            var _this5 = this;

            var _params = params !== null && params !== void 0 ? params : {};

            _params.IN_STAT = 1;
            _params.IN_PAGI = 0;
            this.loadingFilterSetores = true;
            this.setoresService.getSetores(_params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(function () {
              _this5.loadingFilterSetores = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this5.filterSetores = response.body['data'];
              } else {
                _this5.pnotify.notice('Nenhum registro encontrado!');
              }
            }, function (error) {
              var message = error.error.message;
              message ? _this5.pnotify.error(message) : _this5.pnotify.error();
            });
          }
        }, {
          key: "getTiposSetor",
          value: function getTiposSetor() {
            var _this6 = this;

            this.loadingTiposSetor = true;
            this.tiposSetorService.getTiposSetor({
              IN_STAT: '1',
              IN_PAGI: '0'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(function () {
              _this6.loadingTiposSetor = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this6.tiposSetor = response.body['data'];
              } else {
                _this6.pnotify.notice('Nenhum registro encontrado!');
              }
            }, function (error) {
              var message = error.error.message;
              message ? _this6.pnotify.error(message) : _this6.pnotify.error();
            });
          }
        }, {
          key: "getFiliais",
          value: function getFiliais() {
            var _this7 = this;

            this.loadingFiliais = true;
            this.filiaisService.getFiliais({
              IN_STAT: '1',
              IN_PAGI: '0',
              IN_YMS: 1
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(function () {
              _this7.loadingFiliais = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this7.filiais = response.body['data'];
              } else {
                _this7.filiais = [];

                _this7.pnotify.notice('Nenhuma filial encontrada!');
              }
            }), function (error) {
              var message = error.error.message;
              message ? _this7.pnotify.error(message) : _this7.pnotify.error();
            };
          }
        }, {
          key: "onActivatedRoute",
          value: function onActivatedRoute() {
            var params = this.activatedRoute.snapshot.params;

            if (!(params === null || params === void 0 ? void 0 : params.id)) {
              this.loading = false;
              return;
            }

            this.form.get('UUID_LOGI_YMS_ETAP').setValue(params['id']);
            this.getSetoresAssociados({
              "UUID_LOGI_YMS_ETAP": params === null || params === void 0 ? void 0 : params.id
            });
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            var id = this.activatedRoute.snapshot.params.idSubModulo;
            this.breadCrumbTree = [{
              descricao: 'Home',
              routerLink: '/logistica/home'
            }, {
              descricao: 'Cadastro',
              routerLink: "/logistica/cadastros/".concat(id)
            }, {
              descricao: 'Etapas',
              routerLink: "../../"
            }, {
              descricao: this.appTitle
            }];
          }
        }, {
          key: "getEtapas",
          value: function getEtapas() {
            var _this8 = this;

            this.loadingEtapas = true;
            this.etapasService.getEtapas({
              IN_STAT: '1',
              IN_PAGI: '0'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(function () {
              _this8.loadingEtapas = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this8.etapas = response.body['data'];
              } else {
                _this8.pnotify.notice('Nenhum registro encontrado!');
              }
            });
          }
        }, {
          key: "getSetores",
          value: function getSetores() {
            var _this9 = this;

            var _a;

            var params = (_a = {}) !== null && _a !== void 0 ? _a : this.formSetores.value;
            params.IN_STAT = 1;
            params.IN_PAGI = 0;
            this.setoresLoading = true;
            this.etapasService.getSetores(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(function () {
              _this9.setoresLoading = false;
            })).subscribe(function (response) {
              var setores = response.body['data'];
              console.log(setores);
              _this9.setores = setores.filter(function (setor) {
                return !_this9.setoresAssociados.some(function (item) {
                  return item.UUID_LOGI_YMS_SETO == setor.ID;
                });
              });
              _this9.tableConfigSetores.fixedHeader = _this9.setores.length > 9 ? true : false;
            });
          }
        }, {
          key: "getSetoresAssociados",
          value: function getSetoresAssociados(params) {
            var _this10 = this;

            this.loadingSetores = true;
            params.IN_STAT = '1';
            params.IN_PAGI = '0';
            params.ORDE_BY = 'ID_REFE_ERP';
            this.etapasService.getSetoresAssociados(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(function () {
              _this10.loadingSetores = false;
            })).subscribe(function (response) {
              if (response.status !== 200) {
                return;
              }

              _this10.setoresAssociados = response.body['data'];
              _this10.tableConfigSetoresAssociados.fixedHeader = _this10.setoresAssociados.length > 9 ? true : false;
            });
          }
        }, {
          key: "onAssociarSetores",
          value: function onAssociarSetores() {
            var _this11 = this;

            var setores = this.setores.filter(function (setor) {
              return setor.checked && setor.NR_SQNC != null;
            });
            console.log(setores);
            this.toggle.setores = false;
            setores.map(function (item) {
              var _a, _b, _c;

              item.loading = true;

              if (_this11.setoresAssociados.some(function (setor) {
                return (setor === null || setor === void 0 ? void 0 : setor.UUID_LOGI_YMS_SETO) === item.UUID_LOGI_YMS_SETO;
              })) {
                return;
              }

              var params = {
                "UUID_LOGI_YMS_ETAP": (_a = _this11.form.get("UUID_LOGI_YMS_ETAP").value) !== null && _a !== void 0 ? _a : "",
                "UUID_LOGI_YMS_SETO": (_b = item === null || item === void 0 ? void 0 : item.UUID_LOGI_YMS_SETO) !== null && _b !== void 0 ? _b : "",
                "IN_STAT": "1",
                "NR_SQNC": (_c = item === null || item === void 0 ? void 0 : item.NR_SQNC) !== null && _c !== void 0 ? _c : ""
              };

              _this11.etapasService.postSetoresAssociados(params).subscribe(function (response) {
                if (response.status === 200) {
                  _this11.setoresAssociados = [].concat(_toConsumableArray(_this11.setoresAssociados), [Object.assign(Object.assign({}, item), {
                    checked: false,
                    NR_SQNC: item.NR_SQNC,
                    NM_SETO: item.NM_SETO,
                    NM_FILI: item.NM_FILI,
                    NM_SETO_TIPO: item.NM_SETO_TIPO,
                    loading: false,
                    UUID_LOGI_YMS_SETO: item.UUID_LOGI_YMS_SETO,
                    UUID_LOGI_YMS_ETAP: _this11.form.get('UUID_LOGI_YMS_ETAP').value
                  })]);
                  console.log(_this11.setoresAssociados);
                  _this11.setores = _this11.setores.filter(function (setor) {
                    return !setor.checked;
                  });
                  _this11.tableConfigSetoresAssociados.fixedHeader = _this11.setoresAssociados.length > 9 ? true : false;
                }
              });
            });
          }
        }, {
          key: "confirmDelete",
          value: function confirmDelete() {
            return this.confirmModalService.showConfirm('delete', 'Confirmar exclusão', 'Deseja realmente prosseguir com a exclusão do registro?', 'Cancelar', 'Confirmar');
          }
        }, {
          key: "onRemoverAssociacao",
          value: function onRemoverAssociacao(setor) {
            var _this12 = this;

            var setores = setor ? [setor] : this.setoresAssociados.filter(function (setor) {
              return setor.checked;
            });
            console.log(setores);
            this.toggle.setoresAssociados = false;

            if (setores.length == 0) {
              this.pnotify.notice("Nenhum setor selecionado.");
              return;
            }

            this.confirmDelete().subscribe(function (response) {
              if (!response) {
                return;
              }

              setores.map(function (item) {
                item.IN_STAT = '0';
                item.loading = true;

                _this12.etapasService.deleteAssociacoes(item).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(function () {
                  item.loading = false;
                })).subscribe(function (response) {
                  if (response.status !== 200) {
                    return;
                  }

                  _this12.setoresAssociados = _this12.setoresAssociados.filter(function (setor) {
                    return setor.UUID_LOGI_YMS_SETO != item.UUID_LOGI_YMS_SETO;
                  });
                  _this12.tableConfigSetoresAssociados.fixedHeader = _this12.setoresAssociados.length > 9 ? true : false;
                });

                (function (error) {
                  var message = error.error.message;
                  message ? _this12.pnotify.error(message) : _this12.pnotify.error();
                });
              });
            });
          }
        }, {
          key: "onToggleAll",
          value: function onToggleAll(item) {
            var _this13 = this;

            console.log(item);
            this.toggle[item] = !this.toggle[item];
            this[item].map(function (setor) {
              return setor.checked = _this13.toggle[item];
            });
          } // Validação de formulário

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
            field = this.formSetores.get(field);
            return field.status == 'INVALID' && field.touched;
          }
        }, {
          key: "onFieldRequired",
          value: function onFieldRequired(field) {
            var required = false;
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]();

            if (this.formSetores.controls[field].validator) {
              var validationResult = this.formSetores.controls[field].validator(formControl);
              required = validationResult !== null && validationResult.required === true;
            }

            if (required) {
              return 'is-required';
            }
          }
        }, {
          key: "setValidacao",
          value: function setValidacao(event) {
            console.log(event);
          }
        }]);

        return LogisticaYmsEtapasAssociacaoSetoresComponent;
      }();

      LogisticaYmsEtapasAssociacaoSetoresComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
        }, {
          type: _services_etapas_service__WEBPACK_IMPORTED_MODULE_9__["LogisticaYmsEtapasService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__["AtividadesService"]
        }, {
          type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_5__["ConfirmModalService"]
        }, {
          type: _setores_services_setores_service__WEBPACK_IMPORTED_MODULE_4__["LogisticaYmsSetoresService"]
        }, {
          type: _tipos_setor_services_tipos_setor_service__WEBPACK_IMPORTED_MODULE_3__["LogisticaYmsTiposSetorService"]
        }, {
          type: _cadastros_filiais_services_filiais_service__WEBPACK_IMPORTED_MODULE_13__["LogisticaFiliaisService"]
        }];
      };

      LogisticaYmsEtapasAssociacaoSetoresComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'logistica-etapas-associacao-setores',
        template: _raw_loader_associacao_setores_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_associacao_setores_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], _services_etapas_service__WEBPACK_IMPORTED_MODULE_9__["LogisticaYmsEtapasService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__["AtividadesService"], src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_5__["ConfirmModalService"], _setores_services_setores_service__WEBPACK_IMPORTED_MODULE_4__["LogisticaYmsSetoresService"], _tipos_setor_services_tipos_setor_service__WEBPACK_IMPORTED_MODULE_3__["LogisticaYmsTiposSetorService"], _cadastros_filiais_services_filiais_service__WEBPACK_IMPORTED_MODULE_13__["LogisticaFiliaisService"]])], LogisticaYmsEtapasAssociacaoSetoresComponent);
      /***/
    },

    /***/
    "YYnq":
    /*!***************************************************************!*\
      !*** ./src/app/modules/logistica/yms/etapas/etapas.module.ts ***!
      \***************************************************************/

    /*! exports provided: LogisticaYmsEtapasModule */

    /***/
    function YYnq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaYmsEtapasModule", function () {
        return LogisticaYmsEtapasModule;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/pipes/pipes.module */
      "9Xeq");
      /* harmony import */


      var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/core/not-found/not-found.module */
      "sCnT");
      /* harmony import */


      var src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/core/module-wrapper/module-wrapper.module */
      "RoXV");
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
      "wVov");
      /* harmony import */


      var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./cadastro/cadastro.component */
      "KwSx");
      /* harmony import */


      var _etapas_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./etapas-routing.module */
      "kuaD");
      /* harmony import */


      var _associacao_setores_associacao_setores_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./associacao-setores/associacao-setores.component */
      "TGEt");

      var LogisticaYmsEtapasModule = /*#__PURE__*/_createClass(function LogisticaYmsEtapasModule() {
        _classCallCheck(this, LogisticaYmsEtapasModule);
      });

      LogisticaYmsEtapasModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_lista_lista_component__WEBPACK_IMPORTED_MODULE_12__["LogisticaYmsEtapasListaComponent"], _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_13__["LogisticaYmsEtapasCadastroComponent"], _associacao_setores_associacao_setores_component__WEBPACK_IMPORTED_MODULE_15__["LogisticaYmsEtapasAssociacaoSetoresComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TabsModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TimepickerModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(), src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_8__["NotFoundModule"], src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_9__["ModuleWrapperModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_11__["TemplatesModule"], _etapas_routing_module__WEBPACK_IMPORTED_MODULE_14__["LogisticaYmsEtapasRoutingModule"]]
      })], LogisticaYmsEtapasModule);
      /***/
    },

    /***/
    "kuaD":
    /*!***********************************************************************!*\
      !*** ./src/app/modules/logistica/yms/etapas/etapas-routing.module.ts ***!
      \***********************************************************************/

    /*! exports provided: LogisticaYmsEtapasRoutingModule */

    /***/
    function kuaD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaYmsEtapasRoutingModule", function () {
        return LogisticaYmsEtapasRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _associacao_setores_associacao_setores_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./associacao-setores/associacao-setores.component */
      "TGEt");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/core/not-found/not-found.component */
      "6nXq");
      /* harmony import */


      var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./cadastro/cadastro.component */
      "KwSx");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./lista/lista.component */
      "wVov");

      var routes = [{
        path: '',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_6__["LogisticaYmsEtapasListaComponent"]
      }, {
        path: 'novo',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_5__["LogisticaYmsEtapasCadastroComponent"]
      }, {
        path: ':id',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_5__["LogisticaYmsEtapasCadastroComponent"]
      }, {
        path: 'setores/:id',
        component: _associacao_setores_associacao_setores_component__WEBPACK_IMPORTED_MODULE_1__["LogisticaYmsEtapasAssociacaoSetoresComponent"]
      }, {
        path: '**',
        component: src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"]
      }];

      var LogisticaYmsEtapasRoutingModule = /*#__PURE__*/_createClass(function LogisticaYmsEtapasRoutingModule() {
        _classCallCheck(this, LogisticaYmsEtapasRoutingModule);
      });

      LogisticaYmsEtapasRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
      })], LogisticaYmsEtapasRoutingModule);
      /***/
    },

    /***/
    "wVov":
    /*!***********************************************************************!*\
      !*** ./src/app/modules/logistica/yms/etapas/lista/lista.component.ts ***!
      \***********************************************************************/

    /*! exports provided: LogisticaYmsEtapasListaComponent */

    /***/
    function wVov(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaYmsEtapasListaComponent", function () {
        return LogisticaYmsEtapasListaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lista.component.html */
      "IZqw");
      /* harmony import */


      var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lista.component.scss */
      "6mhV");
      /* harmony import */


      var _setores_services_setores_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../setores/services/setores.service */
      "vpXL");
      /* harmony import */


      var _circuitos_services_circuitos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../circuitos/services/circuitos.service */
      "yw/Z");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./../../../../../shared/modules/confirm-modal/confirm-modal.service */
      "FOez");
      /* harmony import */


      var _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./../../../../../shared/templates/detail-panel/detal-panel.service */
      "gIxL");
      /* harmony import */


      var _services_etapas_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../services/etapas.service */
      "Tp9O");
      /* harmony import */


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");
      /* harmony import */


      var src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/shared/modules/xlsx/xlsx.service */
      "eOmW");
      /* harmony import */


      var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! rxjs */
      "qCKp"); //angular
      //servicos
      // rxjs


      var LogisticaYmsEtapasListaComponent = /*#__PURE__*/function () {
        /* Pagination */
        function LogisticaYmsEtapasListaComponent(route, pnotify, formBuilder, xlsxService, dateService, routerService, activatedRoute, detailPanelService, confirmModalService, etapasService, circuitosService, setoresService) {
          _classCallCheck(this, LogisticaYmsEtapasListaComponent);

          this.route = route;
          this.pnotify = pnotify;
          this.formBuilder = formBuilder;
          this.xlsxService = xlsxService;
          this.dateService = dateService;
          this.routerService = routerService;
          this.activatedRoute = activatedRoute;
          this.detailPanelService = detailPanelService;
          this.confirmModalService = confirmModalService;
          this.etapasService = etapasService;
          this.circuitosService = circuitosService;
          this.setoresService = setoresService;
          this.showDetailPanel = false; //LOADINGS

          this.loading = true;
          this.loadingNavBar = false; //VARIAVEIS

          this.totalItens = []; // CUSTOM TABLE

          this.tableConfig = {
            subtitleBorder: true
          };
          this.tableConfigAssocSetores = {
            fixedHeader: false,
            bodyHeight: 230,
            hover: false
          }; // Tipos de Situação dos Etapas (Ativo/Inativo)

          this.tipos = [{
            cod: '1',
            nome: 'Ativos'
          }, {
            cod: '2',
            nome: 'Inativos'
          }]; // Subtitles (Ativo/Inativo)

          this.subtitles = [{
            id: 1,
            text: 'Ativo',
            color: 'green'
          }, {
            id: 2,
            text: 'Inativo',
            color: 'red'
          }];
          /* Pagination */

          this.itemsPerPage = 100;
          this.totalItems = 10;
          this.currentPage = 1;
        }

        _createClass(LogisticaYmsEtapasListaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.buildForm();
            this.setBreadCrumb();
            this.onActivatedRoute();
            this.onDetailPanelEmitter();
            this.getFilterEtapas();
            this.getCircuitos();
            this.getSetores();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.$activatedRouteSubscription.unsubscribe();
          }
        }, {
          key: "onActivatedRoute",
          value: function onActivatedRoute() {
            var _this14 = this;

            this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (response) {
              var _response = _this14.routerService.getBase64UrlParams(response);

              _this14.form.patchValue(_response);

              if (_response.hasOwnProperty('TT_REGI_PAGI')) _this14.itemsPerPage = _response.TT_REGI_PAGI;

              _this14.getEtapas(_this14.getParams());
            });
          }
        }, {
          key: "onDetailPanelEmitter",
          value: function onDetailPanelEmitter() {
            var _this15 = this;

            this.showDetailPanelSubscription = this.detailPanelService.config.subscribe(function (event) {
              _this15.showDetailPanel = event.showing;
            });
          }
        }, {
          key: "onReset",
          value: function onReset() {
            this.form.reset();
            this.form.patchValue({
              PAGI: 1,
              TT_REGI_PAGI: 100,
              TIME: [new Date().getTime()]
            });
          }
        }, {
          key: "getCircuitos",
          value: function getCircuitos(params) {
            var _this16 = this;

            var _params = params !== null && params !== void 0 ? params : {};

            _params.IN_STAT = 1;
            _params.IN_PAGI = 0;
            this.loadingCircuitos = true;
            this.circuitosService.getCircuitos(_params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(function () {
              _this16.loadingCircuitos = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this16.circuitos = response.body['data'];
              } else {
                _this16.circuitos = [];
              }
            }, function (error) {
              try {
                _this16.pnotify.error(error.error.message);
              } catch (error) {
                _this16.pnotify.error();
              }
            });
          }
        }, {
          key: "getSetores",
          value: function getSetores(params) {
            var _this17 = this;

            var _params = params !== null && params !== void 0 ? params : {};

            _params.IN_STAT = 1;
            _params.IN_PAGI = 0;
            this.loadingSetores = true;
            this.setoresService.getSetores(_params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(function () {
              _this17.loadingSetores = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this17.setores = response.body['data'];
              } else {
                _this17.setores = [];
              }
            }, function (error) {
              try {
                _this17.pnotify.error(error.error.message);
              } catch (error) {
                _this17.pnotify.error();
              }
            });
          }
        }, {
          key: "buildForm",
          value: function buildForm() {
            this.form = this.formBuilder.group({
              UUID_LOGI_YMS_ETAP: [null],
              NM_ETAP: [null],
              ID_LOGI_YMS_SETO: [null],
              NM_SETO: [null],
              ID_LOGI_YMS_CIRC: [null],
              NM_CIRC: [null],
              IN_STAT: [null],
              DS_OBSE: [null],
              NR_MATR: [null],
              NM_USUA: [null],
              DT_INCL: [null],
              DT_ATUA: [null],
              PAGI: [1],
              TT_REGI_PAGI: [this.itemsPerPage],
              TIME: [new Date().getTime()]
            });
          }
        }, {
          key: "setPageRegistros",
          value: function setPageRegistros(itemsPerPage) {
            this.itemsPerPage = itemsPerPage;
            this.onFilter();
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            var id = this.activatedRoute.snapshot.params.idSubModulo;
            this.breadCrumbTree = [{
              descricao: 'Home',
              routerLink: "/logistica/home"
            }, {
              descricao: 'YMS',
              routerLink: "/logistica/yms/".concat(id)
            }, {
              descricao: 'Etapas'
            }];
          }
        }, {
          key: "onFilter",
          value: function onFilter() {
            this.detailPanelService.hide();
            this.form.get('PAGI').setValue(1);
            this.form.get('TIME').setValue(new Date().getTime());
            this.route.navigate([], {
              relativeTo: this.activatedRoute,
              queryParams: this.routerService.setBase64UrlParams(this.getParams())
            });
          }
        }, {
          key: "onDetails",
          value: function onDetails(etapas) {
            this.getSetoresAssociados({
              UUID_LOGI_YMS_ETAP: etapas.UUID_LOGI_YMS_ETAP
            });
            this.detailPanelService.show();
            this.etapaSelecionada = etapas;
            this.detailPanelService.loadedFinished(false);
          }
        }, {
          key: "getEtapas",
          value: function getEtapas(params) {
            var _this18 = this;

            if (!this.loading) this.loadingNavBar = true;
            this.etapasService.getEtapas(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(function () {
              _this18.loading = false;
              _this18.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this18.etapas = response.body['data'];
                _this18.totalItems = response.body['total'];
                _this18.noResult = false;
              } else {
                _this18.noResult = true;
                _this18.etapas = [];
              }
            }, function (error) {
              try {
                _this18.noResult = true;

                _this18.pnotify.error(error.error.message);
              } catch (error) {
                _this18.pnotify.error();
              }
            });
          }
        }, {
          key: "getSetoresAssociados",
          value: function getSetoresAssociados(params) {
            var _this19 = this;

            this.loadingAssociacaoSetores = true;
            params.IN_STAT = '1';
            params.IN_PAGI = '0';
            params.ORDE_BY = 'NR_SQNC';
            params.ORDE_BY = 'asc';
            console.log(params);
            this.etapasService.getSetoresAssociados(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(function () {
              _this19.loadingAssociacaoSetores = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this19.associacaoSetores = response.body['data'];

                if (_this19.associacaoSetores.length > 9) {
                  _this19.tableConfigAssocSetores.fixedHeader = true;
                }

                _this19.noAssocSetores = false;
              } else {
                _this19.pnotify.notice('Nenhuma associação encontrada!');

                _this19.noAssocSetores = true;
                _this19.associacaoSetores = [];
              }
            }, function (error) {
              _this19.pnotify.error();
            });
          }
        }, {
          key: "getFilterEtapas",
          value: function getFilterEtapas() {
            var _this20 = this;

            this.loadingEtapas = true;
            this.etapasService.getEtapas({
              IN_STAT: '1',
              IN_PAGI: '0'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(function () {
              _this20.loadingEtapas = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this20.filterEtapas = response.body['data'];
              } else {
                _this20.filterEtapas = [];
              }
            }, function (error) {
              try {
                _this20.pnotify.error(error.error.message);
              } catch (error) {
                _this20.pnotify.error();
              }
            });
          }
        }, {
          key: "onPageChanged",
          value: function onPageChanged(event) {
            this.form.get('PAGI').setValue(event.page);
            this.form.get('TIME').setValue(new Date().getTime());
            this.route.navigate([], {
              relativeTo: this.activatedRoute,
              queryParams: this.routerService.setBase64UrlParams(this.getParams())
            });
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
          key: "classStatusBorder",
          value: function classStatusBorder(etapas) {
            var borderClass;

            if (etapas.IN_STAT == 1) {
              borderClass = 'border-success';
            } else if (etapas.IN_STAT == 2) {
              borderClass = 'border-danger';
            }

            return borderClass;
          }
        }, {
          key: "changeType",
          value: function changeType(params) {
            var _this21 = this;

            var stat = params.IN_STAT == 1 ? 0 : 1;
            this.confirmChange(stat).asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["switchMap"])(function (result) {
              if (!result) return rxjs__WEBPACK_IMPORTED_MODULE_16__["EMPTY"];
              _this21.loadingNavBar = true;
              params.IN_STAT = stat;
              return _this21.etapasService.postEtapas(params);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(function () {
              _this21.loadingNavBar = false;
            })).subscribe(function (success) {
              _this21.pnotify.success();
            }, function (error) {
              params.IN_STAT = params.IN_STAT == 1 ? 0 : 1;

              _this21.pnotify.error();
            });
          }
        }, {
          key: "confirmChange",
          value: function confirmChange(stat) {
            if (stat == 1) return this.confirmModalService.showConfirm(null, null, 'Deseja realmente prosseguir com a ativação do registro?', 'Cancelar', 'Confirmar');
            return this.confirmModalService.showConfirm('inactivate', 'Confirmar inativação', 'Deseja realmente prosseguir com a inativação do registro?', 'Cancelar', 'Confirmar');
          }
        }, {
          key: "onExport",
          value: function onExport() {
            var data = new Date().toLocaleDateString().split('/'),
                dataExport = "".concat(data[0]).concat(data[1]).concat(data[2]);
            var listagemExport = [];
            listagemExport = this.etapas.concat(this.totalItens);
            this.xlsxService.exportFile(listagemExport, "Etapas".concat(dataExport));
          }
        }]);

        return LogisticaYmsEtapasListaComponent;
      }();

      LogisticaYmsEtapasListaComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
        }, {
          type: src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_13__["XlsxService"]
        }, {
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_14__["DateService"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_12__["RouterService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_10__["DetailPanelService"]
        }, {
          type: _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_9__["ConfirmModalService"]
        }, {
          type: _services_etapas_service__WEBPACK_IMPORTED_MODULE_11__["LogisticaYmsEtapasService"]
        }, {
          type: _circuitos_services_circuitos_service__WEBPACK_IMPORTED_MODULE_4__["LogisticaYmsCircuitosService"]
        }, {
          type: _setores_services_setores_service__WEBPACK_IMPORTED_MODULE_3__["LogisticaYmsSetoresService"]
        }];
      };

      LogisticaYmsEtapasListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'logistica-yms-etapas-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_13__["XlsxService"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_14__["DateService"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_12__["RouterService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_10__["DetailPanelService"], _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_9__["ConfirmModalService"], _services_etapas_service__WEBPACK_IMPORTED_MODULE_11__["LogisticaYmsEtapasService"], _circuitos_services_circuitos_service__WEBPACK_IMPORTED_MODULE_4__["LogisticaYmsCircuitosService"], _setores_services_setores_service__WEBPACK_IMPORTED_MODULE_3__["LogisticaYmsSetoresService"]])], LogisticaYmsEtapasListaComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=etapas-etapas-module-es5.js.map