(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vinculo-material-deposito-new-vinculo-material-deposito-new-module"], {
    /***/
    "BWiG":
    /*!************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/abastecimento/cadastros/vinculo-material-deposito-new/lista/lista.component.html ***!
      \************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function BWiG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen\n  *ngIf=\"loaderFullScreen\"\n></loader-spinner-full-screen>\n<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<app-header appTitle=\"Vínculo de material e depósito\">\n  <button\n    type=\"button\"\n    (click)=\"onFilter()\"\n    >\n    Filtrar\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"excelExport()\"\n  >\n    Exportar Excel\n  </button>\n  <button\n    type=\"button\"\n    routerLink=\"../lista-nao-vinculados\"\n  >\n    Adicionar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\n  <advanced-filter>\n    <form [formGroup]=\"form\" autocomplete=\"off\">\n      <div class=\"form-row\">\n        <div class=\"form-group col-lg-2\">\n          <label for=\"linha\">Linha</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"false\"\n            [multiple]=\"true\"\n            [items]=\"linhas\"\n            [virtualScroll]=\"true\"\n            [hideSelected]=\"true\"\n            [closeOnSelect]=\"true\"\n            placeholder=\"Selecione...\"\n            bindLabel=\"NM_LINH\"\n            bindValue=\"ID\"\n            formControlName=\"linha\"\n            (change)=\"getClasses() + ' ' + getSubLinhas()\"\n          >\n          </ng-select>\n        </div>\n        <div class=\"form-group col-lg-2\">\n          <label for=\"subLinha\">Sublinha</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"false\"\n            [multiple]=\"true\"\n            [items]=\"subLinhas\"\n            [virtualScroll]=\"true\"\n            [hideSelected]=\"true\"\n            [closeOnSelect]=\"true\"\n            placeholder=\"Selecione...\"\n            bindLabel=\"NM_SUB_LINH\"\n            bindValue=\"ID\"\n            formControlName=\"subLinha\"\n            (change)=\"getClasses()\"\n          >\n          </ng-select>\n        </div>\n        <div class=\"form-group col-lg-2\">\n          <label for=\"classe\">Classe</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"false\"\n            [multiple]=\"true\"\n            [items]=\"classes\"\n            [virtualScroll]=\"true\"\n            [hideSelected]=\"true\"\n            [closeOnSelect]=\"true\"\n            placeholder=\"Selecione...\"\n            bindLabel=\"NM_CLAS\"\n            bindValue=\"ID\"\n            formControlName=\"classe\"\n          >\n          </ng-select>\n        </div>\n        <div class=\"form-group col-lg-2\">\n          <label for=\"tipoMaterial\">Tipo material</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"false\"\n            [multiple]=\"true\"\n            [items]=\"tiposMateriais\"\n            [virtualScroll]=\"true\"\n            [hideSelected]=\"true\"\n            [closeOnSelect]=\"true\"\n            placeholder=\"Selecione...\"\n            bindLabel=\"NM_APOI_TIPO_MATE\"\n            bindValue=\"ID\"\n            formControlName=\"tipoMaterial\"\n          >\n          </ng-select>\n        </div>\n        <div class=\"form-group col-lg-2\">\n          <label for=\"deposito\">Depósito</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"true\"\n            [items]=\"depositos\"\n            [virtualScroll]=\"true\"\n            [hideSelected]=\"true\"\n            [closeOnSelect]=\"true\"\n            placeholder=\"Selecione...\"\n            bindLabel=\"NM_DEPO\"\n            bindValue=\"ID\"\n            formControlName=\"deposito\"\n            (change)=\"enableCondicao($event)\"\n            >\n          </ng-select>\n        </div>\n        <div class=\"form-group col-lg-2\">\n          <label for=\"condicao\">Condição</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"false\"\n            [items]=\"tiposCondicao\"\n            [virtualScroll]=\"true\"\n            [hideSelected]=\"true\"\n            [closeOnSelect]=\"true\"\n            placeholder=\"Selecione...\"\n            bindLabel=\"name\"\n            bindValue=\"id\"\n            formControlName=\"condicao\"\n            >\n          </ng-select>\n        </div>\n      </div>\n    </form>\n  </advanced-filter>\n  <div class=\"row\">\n    <div\n      [ngClass]=\"{ 'col-12': !compressedTable, 'col-6 pr-0': compressedTable }\"\n      *ngIf=\"loading\"\n    >\n      <custom-table>\n        <ng-template #thead let-thead>\n          <tr class=\"text-center\">\n            <th scope=\"col\" class=\"hover\" (click)=\"sort('NM_APOI_TIPO_MATE')\">\n              Tipo Material\n              <span *ngIf=\"key == 'NM_APOI_TIPO_MATE'\"\n                ><i\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\n                ></i\n              ></span>\n              <span *ngIf=\"key != 'NM_APOI_TIPO_MATE'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th scope=\"col\" class=\"hover\" (click)=\"sort('NM_LINH')\">\n              Linha\n              <span *ngIf=\"key == 'NM_LINH'\"\n                ><i\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\n                ></i\n              ></span>\n              <span *ngIf=\"key != 'NM_LINH'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th scope=\"col\" class=\"hover\" (click)=\"sort('NM_SUB_LINH')\">\n              Sublinha\n              <span *ngIf=\"key == 'NM_SUB_LINH'\"\n                ><i\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\n                ></i\n              ></span>\n              <span *ngIf=\"key != 'NM_SUB_LINH'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th scope=\"col\" class=\"hover\" (click)=\"sort('NM_CLAS')\">\n              Classe\n              <span *ngIf=\"key == 'NM_CLAS'\"\n                ><i\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\n                ></i\n              ></span>\n              <span *ngIf=\"key != 'NM_CLAS'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th scope=\"col\" class=\"hover\" [hidden]=\"compressedTable\" width=\"5%\"></th>\n            <th scope=\"col\" class=\"hover\" [hidden]=\"compressedTable\" width=\"5%\"></th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr\n            *ngFor=\"\n              let item of dados | orderBy: key:reverse | slice: begin:end;\n              let i = index\n            \"\n          >\n            <td\n              class=\"text-center\"\n              [ngClass]=\"item.select ? 'bg-row-selected' : ''\"\n            >\n              {{ item.NM_APOI_TIPO_MATE }}\n            </td>\n            <td class=\"text-center\" [ngClass]=\" item.select ? 'bg-row-selected' : ''\">{{ item.NM_LINH }}</td>\n            <td class=\"text-center\" [ngClass]=\" item.select ? 'bg-row-selected' : ''\">\n              {{ item.NM_SUB_LINH ? item.NM_SUB_LINH : '-' }}\n            </td>\n            <td class=\"text-center\" [ngClass]=\" item.select ? 'bg-row-selected' : ''\">{{ item.NM_CLAS }}</td>\n            <td class=\"text-center\" [hidden]=\"compressedTable\" width=\"5%\">\n              <div>\n                <button\n                  type=\"button\"\n                  class=\"btn-icon-sm\"\n                  tooltip=\"Editar\"\n                  placement=\"left\"\n                  container=\"body\"\n                >\n                <i\n                  class=\"fas fa-edit\"\n                  (click)=\"onAdd(item)\" \n                  >\n                </i>\n                </button>\n              </div>\n            </td>\n            <td class=\"text-center\" [hidden]=\"compressedTable\" width=\"5%\">\n              <div>\n                <button\n                  type=\"button\"\n                  class=\"btn-icon-sm\"\n                  (click)=\"openTab(item)\"\n                  tooltip=\"Detalhes\"\n                  placement=\"left\"\n                  container=\"body\"\n                >\n                  <i class=\"fas fa-search\"></i>\n                </button>\n              </div>\n            </td>\n          </tr>\n        </ng-template>\n      </custom-table>\n    </div>\n    <div class=\"col-6\">\n      <tabset [hidden]=\"!compressedTable\">\n        <button\n          type=\"button\"\n          class=\"btn-icon close position-absolute\"\n          (click)=\"onClose()\"\n        >\n          <i class=\"fas fa-times\"></i>\n        </button>\n        <tab heading=\"Detalhes\">\n          <div\n            class=\"border-right border-left border-bottom px-3 pt-3\"\n            style=\"overflow: auto; height: 338px;\"\n          >\n            <custom-table *ngIf=\"!noResultDetalhes && loadingDetalhes\">\n              <ng-template #thead let-thead>\n                <tr class=\"text-center\">\n                  <th scope=\"col\">Empresa</th>\n                  <th scope=\"col\">Depósito</th>\n                  <th scope=\"col\">Situação</th>\n                  <th scope=\"col\" width=\"5%\"></th>\n                </tr>\n              </ng-template>\n              <ng-template #tbody let-tbody>\n                <tr *ngFor=\"let item of dadosDetalhes\">\n                  <td class=\"text-left\">{{ item.NM_EMPR }}</td>\n                  <td class=\"text-left\">{{ item.NM_DEPO }}</td>\n                  <td class=\"text-left\">{{ item.DS_STAT }}</td>\n                  <td class=\"text-center\" width=\"5%\">\n                    <div>\n                      <button\n                        type=\"button\"\n                        class=\"btn-icon-sm\"\n                        (click)=\"openModal(item) + '' + lgModal.show()\"\n                        tooltip=\"Logs\"\n                        placement=\"left\"\n                        container=\"body\"\n                      >\n                        <i class=\"fas fa-external-link-alt text-primary\"></i>\n                      </button>\n                    </div>\n                  </td>\n                </tr>\n              </ng-template>\n            </custom-table>\n            <div\n              *ngIf=\"noResultDetalhes\"\n              class=\"text-center d-flex justify-content-center align-items-center p-5\"\n              style=\"height: 80%;\"\n            >\n              <empty-result\n                message=\"Nenhuma informação encontrada\"\n              ></empty-result>\n            </div>\n          </div>\n        </tab>\n      </tabset>\n    </div>\n    <div\n      class=\"col-12 mb-2 ml-2\"\n      *ngIf=\"!noResult && dados?.length > itemsPerPage\"\n    >\n      Exibindo {{ begin + 1 }} a {{ end }} de {{ dados?.length }}\n      <div class=\"d-flex\">\n        <pagination\n          [maxSize]=\"10\"\n          [totalItems]=\"dados?.length\"\n          (pageChanged)=\"onPageChanged($event)\"\n          [(itemsPerPage)]=\"itemsPerPage\"\n          [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPage\"\n          previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\"\n          lastText=\"&raquo;\"\n        >\n        </pagination>\n      </div>\n    </div>\n  </div>\n  <div\n    *ngIf=\"noResult\"\n    class=\"text-center d-flex justify-content-center align-items-center p-5\"\n    style=\"height: 80%;\"\n  >\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n  </div>\n</app-body>\n\n<div bsModal #lgModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\"\n     role=\"dialog\" aria-labelledby=\"dialog-sizes-name1\">\n  <div class=\"modal-dialog modal-xl\" [hidden]=\"!loadingDetalhesLog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 id=\"dialog-sizes-name1\" class=\"modal-title pull-left\">LOGS VÍNCULO MATERIAL DEPÓSITO</h4>\n        <button type=\"button\" class=\"close pull-right\" (click)=\"lgModal.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div\n        class=\"table-responsive\"\n        >\n          <custom-table *ngIf=\"loadingLogs\">\n            <ng-template #thead let-thead>\n              <tr class=\"text-center\">\n                <th scope=\"col\" nowrap (click)=\"sortA('NM_APOI_TIPO_MATE')\">\n                  Tipo Material\n                    <span *ngIf=\"keyA == 'NM_APOI_TIPO_MATE'\"\n                    ><i\n                      [ngClass]=\"\n                        reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                      \"\n                    ></i\n                  ></span>\n                  <span *ngIf=\"keyA != 'NM_APOI_TIPO_MATE'\"\n                    ><i [ngClass]=\"'fas fa-sort'\"></i\n                  ></span>\n                </th>\n                <th scope=\"col\" nowrap (click)=\"sortA('NM_CLAS')\">\n                  Classe\n                    <span *ngIf=\"keyA == 'NM_CLAS'\"\n                    ><i\n                      [ngClass]=\"\n                        reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                      \"\n                    ></i\n                  ></span>\n                  <span *ngIf=\"keyA != 'NM_CLAS'\"\n                    ><i [ngClass]=\"'fas fa-sort'\"></i\n                  ></span>\n                </th>\n                <th scope=\"col\" nowrap (click)=\"sortA('NM_DEPO')\">\n                  Depósito\n                    <span *ngIf=\"keyA == 'NM_DEPO'\"\n                    ><i\n                      [ngClass]=\"\n                        reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                      \"\n                    ></i\n                  ></span>\n                  <span *ngIf=\"keyA != 'NM_DEPO'\"\n                    ><i [ngClass]=\"'fas fa-sort'\"></i\n                  ></span>\n                </th>\n                <th scope=\"col\" nowrap (click)=\"sortA('DS_STAT')\">\n                  Situação\n                    <span *ngIf=\"keyA == 'DS_STAT'\"\n                    ><i\n                      [ngClass]=\"\n                        reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                      \"\n                    ></i\n                  ></span>\n                  <span *ngIf=\"keyA != 'DS_STAT'\"\n                    ><i [ngClass]=\"'fas fa-sort'\"></i\n                  ></span>\n                </th>\n                <th scope=\"col\" nowrap (click)=\"sortA('DT_ACAO')\">\n                  Data\n                    <span *ngIf=\"keyA == 'DT_ACAO'\"\n                    ><i\n                      [ngClass]=\"\n                        reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                      \"\n                    ></i\n                  ></span>\n                  <span *ngIf=\"keyA != 'DT_ACAO'\"\n                    ><i [ngClass]=\"'fas fa-sort'\"></i\n                  ></span>\n                </th>\n                <th scope=\"col\" nowrap (click)=\"sortA('NM_ACAO')\">\n                  Ação\n                    <span *ngIf=\"keyA == 'NM_ACAO'\"\n                    ><i\n                      [ngClass]=\"\n                        reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                      \"\n                    ></i\n                  ></span>\n                  <span *ngIf=\"keyA != 'NM_ACAO'\"\n                    ><i [ngClass]=\"'fas fa-sort'\"></i\n                  ></span>\n                </th>\n                <th scope=\"col\" nowrap (click)=\"sortA('NM_USUA')\">\n                  Usuário\n                    <span *ngIf=\"keyA == 'NM_USUA'\"\n                    ><i\n                      [ngClass]=\"\n                        reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                      \"\n                    ></i\n                  ></span>\n                  <span *ngIf=\"keyA != 'NM_USUA'\"\n                    ><i [ngClass]=\"'fas fa-sort'\"></i\n                  ></span>\n                </th>\n              </tr>\n            </ng-template>\n            <ng-template #tbody let-tbody>\n              <tr *ngFor=\"let item of dadosLogs | orderBy: keyA:reverseA | slice: beginA:endA; let i = index\">\n                <td class=\"text-center\">{{ item.NM_APOI_TIPO_MATE }}</td>\n                <td class=\"text-center\">{{ item.NM_CLAS }}</td>\n                <td class=\"text-center\">{{ item.NM_DEPO }}</td>\n                <td class=\"text-center\">{{ item.DS_STAT }}</td>\n                <td class=\"text-center\">{{ item.DT_ACAO | date:'dd/MM/yyyy HH:mm'}}</td>\n                <td class=\"text-center\">{{ item.NM_ACAO }}</td>\n                <td class=\"text-center\">{{ item.NM_USUA }}</td>\n              </tr>\n            </ng-template>\n          </custom-table>\n        </div>\n        <div class=\"col-12 mb-2 ml-2\" *ngIf=\"dadosLogs.length > itemsPerPage && loadingLogs\">\n          Exibindo {{ beginA + 1 }} a {{ endA }} de {{ dadosLogs?.length }}\n          <pagination\n            [maxSize]=\"10\"\n            [totalItems]=\"dadosLogs?.length\"\n            (pageChanged)=\"onPageChangedA($event)\"\n            [(itemsPerPage)]=\"itemsPerPage\"\n            [boundaryLinks]=\"true\"\n            [(ngModel)]=\"currentPageA\"\n            previousText=\"&lsaquo;\"\n            nextText=\"&rsaquo;\"\n            firstText=\"&laquo;\"\n            lastText=\"&raquo;\"\n          >\n          </pagination>\n        </div>\n        <div\n          *ngIf=\"noResultLogs\"\n          class=\"text-center d-flex justify-content-center align-items-center p-5\"\n          style=\"height: 80%;\"\n        >\n          <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
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
    "JB1Q":
    /*!**************************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/cadastros/vinculo-material-deposito-new/cadastro/cadastro.component.ts ***!
      \**************************************************************************************************************/

    /*! exports provided: AbastecimentoCadastrosVinculoMaterialDepositoCadastroComponent */

    /***/
    function JB1Q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastrosVinculoMaterialDepositoCadastroComponent", function () {
        return AbastecimentoCadastrosVinculoMaterialDepositoCadastroComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./cadastro.component.html */
      "jXlm");
      /* harmony import */


      var _cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cadastro.component.scss */
      "TZfr");
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


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS");
      /* harmony import */


      var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/modules/confirm-modal/confirm-modal.service */
      "FOez");
      /* harmony import */


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");
      /* harmony import */


      var _vinculo_material_deposito_new_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../vinculo-material-deposito-new.service */
      "tRPG"); //Converte rota em base64


      var AbastecimentoCadastrosVinculoMaterialDepositoCadastroComponent = /*#__PURE__*/function () {
        function AbastecimentoCadastrosVinculoMaterialDepositoCadastroComponent(activatedRoute, formBuilder, pnotifyService, atividadesService, routerService, titleService, confirmModalService, service) {
          _classCallCheck(this, AbastecimentoCadastrosVinculoMaterialDepositoCadastroComponent);

          this.activatedRoute = activatedRoute;
          this.formBuilder = formBuilder;
          this.pnotifyService = pnotifyService;
          this.atividadesService = atividadesService;
          this.routerService = routerService;
          this.titleService = titleService;
          this.confirmModalService = confirmModalService;
          this.service = service;
          this.loaderFullScreen = true;
          this.noResultDepositos = false;
          this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
          this.idUsuario = this.currentUser['info']['id'];
          this.breadCrumbTree = [];
          this.depositos = [];
          this.empresas = [];
          this.dadosDepositosAssociados = [];
          this.depositosFilter = [];
          this.form = this.formBuilder.group({
            empresas: [null],
            depositos: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
          });
        }

        _createClass(AbastecimentoCadastrosVinculoMaterialDepositoCadastroComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            setTimeout(function () {
              _this.loaderFullScreen = false;
            }, 1000);
            this.registrarAcesso();
            this.setBreadCrumb();
            this.checkRouterParams();
            this.titleService.setTitle('Vinculo Material Depósito');
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            var _this2 = this;

            this.activatedRoute.params.subscribe(function (params) {
              _this2.breadCrumbTree = [{
                descricao: 'Home',
                routerLink: '/abastecimento/home'
              }, {
                descricao: 'Cadastros',
                routerLink: "/abastecimento/cadastros/".concat(params['idSubModulo'])
              }, {
                descricao: 'Vínculo Material Depósito',
                routerLink: "/abastecimento/cadastros/".concat(params['idSubModulo'], "/vinculo-material-deposito/lista")
              }, {
                descricao: 'Cadastro'
              }];
            });
          }
        }, {
          key: "checkRouterParams",
          value: function checkRouterParams() {
            var _this3 = this;

            this.activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (queryParams) {
              if (Object.keys(queryParams).length > 0) {
                var _response = _this3.routerService.getBase64UrlParams(queryParams);

                _this3.setValuesInfoMateriais(_response.item);

                _this3.getDepositos();

                _this3.getEmpresas();

                _this3.loadDepositosAssociados();
              }
            });
            this.activatedRouteSubscription.unsubscribe();
          }
        }, {
          key: "onSave",
          value: function onSave() {
            var depositos = this.form.get("depositos").value;
            var record = {
              ID_CLAS: this.idClasse,
              ID_APOI_TIPO_MATE: this.idTipoMaterial,
              ID_DEPO: depositos.toString(),
              IN_STAT: 1,
              ID_USUA: parseInt(this.idUsuario)
            };
            this.postMaterialDeposito(record);
          }
        }, {
          key: "postMaterialDeposito",
          value: function postMaterialDeposito(record) {
            var _this4 = this;

            this.loaderNavbar = true;
            this.service.postMaterialDeposito(record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this4.loaderNavbar = false, _this4.resetValuesForm(), _this4.loadDepositosAssociados();
            })).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                if (res['responseCode'] === 201) {
                  _this4.pnotifyService.success(res['message']);
                } else {
                  _this4.pnotifyService.error(res['message']);
                }
              }
            }, function (error) {
              _this4.pnotifyService.error(error['error']);
            });
          }
        }, {
          key: "updateMaterialDeposito",
          value: function updateMaterialDeposito(record) {
            var _this5 = this;

            this.loaderNavbar = true;
            this.service.updateMaterialDeposito(record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this5.loaderNavbar = false, _this5.resetValuesForm(), _this5.loadDepositosAssociados();
            })).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                if (res['responseCode'] === 200) {
                  _this5.pnotifyService.success(res['message']);
                } else {
                  _this5.pnotifyService.error(res['message']);
                }
              }
            }, function (error) {
              _this5.pnotifyService.error(error['error']);
            });
          }
        }, {
          key: "onUpdate",
          value: function onUpdate(item) {
            var idSituaçao = item.IN_STAT;

            if (item.IN_STAT === 0) {
              idSituaçao = 1;
            } else if (item.IN_STAT === 1) {
              idSituaçao = 0;
            }

            var record = {
              ID_ASSO_DEPO_MATE: item.ID,
              ID_CLAS: item.ID_CLAS,
              ID_APOI_TIPO_MATE: item.ID_APOI_TIPO_MATE,
              ID_DEPO: item.ID_DEPO,
              IN_STAT: idSituaçao,
              ID_USUA: parseInt(this.idUsuario)
            };
            this.updateMaterialDeposito(record);
          }
        }, {
          key: "onDelete",
          value: function onDelete(item) {
            var _this6 = this;

            this.loaderNavbar = true;
            var record = {
              ID_ASSO_DEPO_MATE: item.ID,
              ID_USUA: parseInt(this.idUsuario)
            };
            this.confirmDelete().asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (result) {
              return result ? _this6.deleteMaterialDeposito(record) : rxjs__WEBPACK_IMPORTED_MODULE_6__["EMPTY"];
            })).subscribe(function (success) {
              _this6.pnotifyService.success();

              _this6.loaderNavbar = false;

              _this6.loadDepositosAssociados();
            }, function (error) {
              _this6.pnotifyService.error();

              _this6.loaderNavbar = false;

              _this6.loadDepositosAssociados();
            });
            this.deleteMaterialDeposito(record);
          }
        }, {
          key: "deleteMaterialDeposito",
          value: function deleteMaterialDeposito(record) {
            return this.service.deleteMaterialDeposito(record);
          }
        }, {
          key: "confirmDelete",
          value: function confirmDelete() {
            return this.confirmModalService.showConfirm('delete', 'Confirmar exclusão', 'Deseja realmente prosseguir com a exclusão do registro?', 'Cancelar', 'Confirmar');
          }
        }, {
          key: "loadDepositosAssociados",
          value: function loadDepositosAssociados() {
            this.getDepositosAssociados({
              ID_CLAS: this.idClasse,
              ID_APOI_TIPO_MATE: this.idTipoMaterial
            });
          }
        }, {
          key: "getDepositos",
          value: function getDepositos() {
            var _this7 = this;

            var idSituacao = 1;
            this.loaderNavbar = true;
            this.depositos = [];
            var idEmpresa = this.form.value['empresas'] ? this.form.value['empresas'] : '';
            this.service.getDepositos(idSituacao, idEmpresa).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this7.loaderNavbar = false;
            })).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                if (res['body']['responseCode'] == 200) {
                  _this7.form.get('depositos').reset();

                  _this7.depositos = res['body']['result'];
                } else if (res['body']['responseCode'] == 404) {
                  _this7.form.get('depositos').reset();

                  _this7.pnotifyService.notice(res.message);
                }
              }
            }, function (error) {
              _this7.form.get('depositos').reset();

              _this7.pnotifyService.error('Erro ao carregar Depositos');
            });
          }
        }, {
          key: "getEmpresas",
          value: function getEmpresas() {
            var _this8 = this;

            var idSituacao = 1;
            this.loaderNavbar = true;
            this.empresas = [];
            this.service.getEmpresas(idSituacao).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this8.loaderNavbar = false;
            })).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                _this8.empresas = res['body']['result'];
              }
            }, function (error) {
              _this8.pnotifyService.error('Erro ao carregar Empresas');
            });
          }
        }, {
          key: "getDepositosAssociados",
          value: function getDepositosAssociados(params) {
            var _this9 = this;

            this.loaderNavbar = true;
            this.service.getMaterialDepositosDetalhes(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this9.loaderNavbar = false; // this.filterArrayDepositos();
            })).subscribe(function (res) {
              if (res.status === 200) {
                if (res['body']['responseCode'] === 200) {
                  _this9.noResultDepositos = false;
                  _this9.dadosDepositosAssociados = res['body']['result'];
                } else if (res['body']['responseCode'] === 404) {
                  _this9.noResultDepositos = true;

                  _this9.pnotifyService.notice(res['body']['message']);
                }
              }
            }, function (error) {
              _this9.pnotifyService.error('Erro ao carregar depósitos associados');
            });
          } // filterArrayDepositos() {
          //   this.depositosFilter = [];
          //   let depositosFiltrados: Array<any> = [];
          //   let idDeposito: Array<any> = [];
          //   if(this.dadosDepositosAssociados.length > 0 ){
          //     this.dadosDepositosAssociados.forEach(deposito => {
          //       return idDeposito.push(deposito['ID_DEPO']);
          //     });
          //     depositosFiltrados = this.depositos.filter(item =>
          //       idDeposito
          //       .map(val => item.ID.indexOf(val))
          //       .map(val => (val > -1 ? false : true))
          //       .reduce((acc, cum) => acc && cum)
          //       );
          //       this.depositosFilter = depositosFiltrados;
          //     } else {
          //       this.depositosFilter = this.depositos;
          //     }
          // }

        }, {
          key: "setValuesInfoMateriais",
          value: function setValuesInfoMateriais(params) {
            this.idLinha = params["ID_LINH"];
            this.linha = params["NM_LINH"];
            this.idSubLinha = params["ID_SUB_LINH"];
            this.subLinha = params["NM_SUB_LINH"];
            this.idClasse = params["ID_CLAS"];
            this.classe = params["NM_CLAS"];
            this.idTipoMaterial = params["ID_APOI_TIPO_MATE"];
            this.tipoMaterial = params["NM_APOI_TIPO_MATE"];
            this.depositosAssociados = params["TT_DEPO_ASSO"];
          }
        }, {
          key: "resetValuesForm",
          value: function resetValuesForm() {
            this.form.get('depositos').reset();
            this.form.get('empresas').reset();
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

        return AbastecimentoCadastrosVinculoMaterialDepositoCadastroComponent;
      }();

      AbastecimentoCadastrosVinculoMaterialDepositoCadastroComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_12__["RouterService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_10__["TitleService"]
        }, {
          type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_11__["ConfirmModalService"]
        }, {
          type: _vinculo_material_deposito_new_service__WEBPACK_IMPORTED_MODULE_13__["AbastecimentoCadastrosVinculoMaterialDepositoNewService"]
        }];
      };

      AbastecimentoCadastrosVinculoMaterialDepositoCadastroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'cadastro',
        template: _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_12__["RouterService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_10__["TitleService"], src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_11__["ConfirmModalService"], _vinculo_material_deposito_new_service__WEBPACK_IMPORTED_MODULE_13__["AbastecimentoCadastrosVinculoMaterialDepositoNewService"]])], AbastecimentoCadastrosVinculoMaterialDepositoCadastroComponent);
      /***/
    },

    /***/
    "TZfr":
    /*!****************************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/cadastros/vinculo-material-deposito-new/cadastro/cadastro.component.scss ***!
      \****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function TZfr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "pFont {\n  font-size: 1.1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hYmFzdGVjaW1lbnRvL2NhZGFzdHJvcy92aW5jdWxvLW1hdGVyaWFsLWRlcG9zaXRvLW5ldy9jYWRhc3Ryby9jYWRhc3Ryby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FiYXN0ZWNpbWVudG8vY2FkYXN0cm9zL3ZpbmN1bG8tbWF0ZXJpYWwtZGVwb3NpdG8tbmV3L2NhZGFzdHJvL2NhZGFzdHJvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicEZvbnQge1xuICBmb250LXNpemU6IDEuMWVtO1xufSJdfQ== */";
      /***/
    },

    /***/
    "U9LM":
    /*!*******************************************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/cadastros/vinculo-material-deposito-new/vinculo-material-deposito-new-routing.module.ts ***!
      \*******************************************************************************************************************************/

    /*! exports provided: AbastecimentoCadastrosVinculoMaterialDepositoNewRoutingModule */

    /***/
    function U9LM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastrosVinculoMaterialDepositoNewRoutingModule", function () {
        return AbastecimentoCadastrosVinculoMaterialDepositoNewRoutingModule;
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


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./lista/lista.component */
      "t+/W");
      /* harmony import */


      var _lista_nao_vinculados_lista_nao_vinculados_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./lista-nao-vinculados/lista-nao-vinculados.component */
      "tVLG");
      /* harmony import */


      var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./cadastro/cadastro.component */
      "JB1Q"); //Componentes


      var routes = [{
        path: '',
        children: [{
          path: 'lista',
          component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_3__["AbastecimentoCadastrosVinculoMaterialDepositoListaComponent"]
        }, {
          path: 'lista-nao-vinculados',
          component: _lista_nao_vinculados_lista_nao_vinculados_component__WEBPACK_IMPORTED_MODULE_4__["AbastecimentoCadastrosVinculoMaterialDepositoListaNaoVinculadosComponent"]
        }, {
          path: 'cadastro',
          component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_5__["AbastecimentoCadastrosVinculoMaterialDepositoCadastroComponent"]
        }, {
          path: '',
          redirectTo: 'lista',
          pathMatch: 'full'
        }]
      }];

      var AbastecimentoCadastrosVinculoMaterialDepositoNewRoutingModule = function AbastecimentoCadastrosVinculoMaterialDepositoNewRoutingModule() {
        _classCallCheck(this, AbastecimentoCadastrosVinculoMaterialDepositoNewRoutingModule);
      };

      AbastecimentoCadastrosVinculoMaterialDepositoNewRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AbastecimentoCadastrosVinculoMaterialDepositoNewRoutingModule);
      /***/
    },

    /***/
    "WR3X":
    /*!******************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/abastecimento/cadastros/vinculo-material-deposito-new/lista-nao-vinculados/lista-nao-vinculados.component.html ***!
      \******************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function WR3X(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen\n  *ngIf=\"loaderFullScreen\"\n></loader-spinner-full-screen>\n<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<app-header appTitle=\"Não Vinculados\">\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\n  <div *ngIf=\"loading\">\n    <custom-table>\n      <ng-template #thead let-thead>\n        <tr class=\"text-center\">\n          <th scope=\"col\" class=\"hover\" (click)=\"sort('NM_APOI_TIPO_MATE')\">\n            Tipo Material\n            <span *ngIf=\"key == 'NM_APOI_TIPO_MATE'\"\n              ><i\n                [ngClass]=\"\n                  reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                \"\n              ></i\n            ></span>\n            <span *ngIf=\"key != 'NM_APOI_TIPO_MATE'\"\n              ><i [ngClass]=\"'fas fa-sort'\"></i\n            ></span>\n          </th>\n          <th scope=\"col\" class=\"hover\" (click)=\"sort('NM_LINH')\">\n            Linha\n            <span *ngIf=\"key == 'NM_LINH'\"\n              ><i\n                [ngClass]=\"\n                  reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                \"\n              ></i\n            ></span>\n            <span *ngIf=\"key != 'NM_LINH'\"\n              ><i [ngClass]=\"'fas fa-sort'\"></i\n            ></span>\n          </th>\n          <th scope=\"col\" class=\"hover\" (click)=\"sort('NM_SUB_LINH')\">\n            Sublinha\n            <span *ngIf=\"key == 'NM_SUB_LINH'\"\n              ><i\n                [ngClass]=\"\n                  reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                \"\n              ></i\n            ></span>\n            <span *ngIf=\"key != 'NM_SUB_LINH'\"\n              ><i [ngClass]=\"'fas fa-sort'\"></i\n            ></span>\n          </th>\n          <th scope=\"col\" class=\"hover\" (click)=\"sort('NM_CLAS')\">\n            Classe\n            <span *ngIf=\"key == 'NM_CLAS'\"\n              ><i\n                [ngClass]=\"\n                  reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                \"\n              ></i\n            ></span>\n            <span *ngIf=\"key != 'NM_CLAS'\"\n              ><i [ngClass]=\"'fas fa-sort'\"></i\n            ></span>\n          </th>\n          <th></th>\n        </tr>\n      </ng-template>\n      <ng-template #tbody let-tbody>\n        <tr\n          *ngFor=\"\n            let item of dadosMateDispAssociacao\n              | orderBy: key:reverse\n              | slice: begin:end;\n            let i = index\n          \"\n        >\n          <td class=\"text-center\">{{ item.NM_APOI_TIPO_MATE }}</td>\n          <td class=\"text-center\">{{ item.NM_LINH }}</td>\n          <td class=\"text-center\">\n            {{ item.NM_SUB_LINH ? item.NM_SUB_LINH : '-' }}\n          </td>\n          <td class=\"text-center\">{{ item.NM_CLAS }}</td>\n          <td class=\"text-center\">\n            <div>\n              <button\n                type=\"button\"\n                class=\"btn-icon-sm\"\n                tooltip=\"Incluir\"\n                placement=\"left\"\n                container=\"body\"\n              >\n                <i\n                  class=\"fas fa-edit\"\n                  (click)=\"onAdd(item)\" \n                  >\n                </i>\n              </button>\n            </div>\n          </td>\n        </tr>\n      </ng-template>\n    </custom-table>\n  </div>\n  <div class=\"mt-2\" *ngIf=\"dadosMateDispAssociacao?.length > itemsPerPage\">\n    Exibindo {{ begin + 1 }} a {{ end }} de {{ dadosMateDispAssociacao?.length }}\n    <div class=\"d-flex\">\n      <pagination\n        [maxSize]=\"10\"\n        [totalItems]=\"dadosMateDispAssociacao?.length\"\n        (pageChanged)=\"onPageChanged($event)\"\n        [(itemsPerPage)]=\"itemsPerPage\"\n        [boundaryLinks]=\"true\"\n        [(ngModel)]=\"currentPage\"\n        previousText=\"&lsaquo;\"\n        nextText=\"&rsaquo;\"\n        firstText=\"&laquo;\"\n        lastText=\"&raquo;\"\n      >\n      </pagination>\n    </div>\n  </div>\n  <div\n    *ngIf=\"noResult\"\n    class=\"text-center d-flex justify-content-center align-items-center p-5\"\n    style=\"height: 80%;\"\n  >\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n  </div>\n</app-body>";
      /***/
    },

    /***/
    "ck7C":
    /*!****************************************************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/cadastros/vinculo-material-deposito-new/lista-nao-vinculados/lista-nao-vinculados.component.scss ***!
      \****************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ck7C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWJhc3RlY2ltZW50by9jYWRhc3Ryb3MvdmluY3Vsby1tYXRlcmlhbC1kZXBvc2l0by1uZXcvbGlzdGEtbmFvLXZpbmN1bGFkb3MvbGlzdGEtbmFvLXZpbmN1bGFkb3MuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "j3AB":
    /*!***********************************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/cadastros/vinculo-material-deposito-new/vinculo-material-deposito-new.module.ts ***!
      \***********************************************************************************************************************/

    /*! exports provided: AbastecimentoCadastrosVinculoMaterialDepositoNewModule */

    /***/
    function j3AB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastrosVinculoMaterialDepositoNewModule", function () {
        return AbastecimentoCadastrosVinculoMaterialDepositoNewModule;
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


      var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/core/not-found/not-found.module */
      "sCnT");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-order-pipe */
      "fnxe");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var _vinculo_material_deposito_new_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./vinculo-material-deposito-new-routing.module */
      "U9LM");
      /* harmony import */


      var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common/locales/pt */
      "vT00");
      /* harmony import */


      var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_11__);
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./lista/lista.component */
      "t+/W");
      /* harmony import */


      var _lista_nao_vinculados_lista_nao_vinculados_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./lista-nao-vinculados/lista-nao-vinculados.component */
      "tVLG");
      /* harmony import */


      var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./cadastro/cadastro.component */
      "JB1Q");
      /* Localização Brasil */


      Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_11___default.a);
      /* Localização Brasil */
      //Componentes do modulo

      var AbastecimentoCadastrosVinculoMaterialDepositoNewModule = function AbastecimentoCadastrosVinculoMaterialDepositoNewModule() {
        _classCallCheck(this, AbastecimentoCadastrosVinculoMaterialDepositoNewModule);
      };

      AbastecimentoCadastrosVinculoMaterialDepositoNewModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_lista_lista_component__WEBPACK_IMPORTED_MODULE_12__["AbastecimentoCadastrosVinculoMaterialDepositoListaComponent"], _lista_nao_vinculados_lista_nao_vinculados_component__WEBPACK_IMPORTED_MODULE_13__["AbastecimentoCadastrosVinculoMaterialDepositoListaNaoVinculadosComponent"], _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_14__["AbastecimentoCadastrosVinculoMaterialDepositoCadastroComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _vinculo_material_deposito_new_routing_module__WEBPACK_IMPORTED_MODULE_10__["AbastecimentoCadastrosVinculoMaterialDepositoNewRoutingModule"], src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_4__["NotFoundModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["PaginationModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["TabsModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["ModalModule"].forRoot(), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["NgSelectModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_6__["TemplatesModule"], ngx_order_pipe__WEBPACK_IMPORTED_MODULE_8__["OrderModule"]],
        providers: [{
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],
          useValue: 'pt-PT'
        }]
      })], AbastecimentoCadastrosVinculoMaterialDepositoNewModule);
      /***/
    },

    /***/
    "jXlm":
    /*!******************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/abastecimento/cadastros/vinculo-material-deposito-new/cadastro/cadastro.component.html ***!
      \******************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function jXlm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen\n  *ngIf=\"loaderFullScreen\"\n></loader-spinner-full-screen>\n<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<app-header appTitle=\"Cadastro\">\n  <button\n    type=\"button\"\n    [disabled]=\"form.status == 'INVALID'\"\n    (click)=\"onSave()\"\n  >\n    Salvar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\n  <div class=\"container\">\n    <div class=\"col-md-12\">\n      <div class=\"row justify-content-md-center mt-3\">\n        <div class=\"col-md-7\">\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <p class=\"pFont\">\n                <strong>TIPO DE MATERIAL</strong><br />\n                {{ tipoMaterial }}\n              </p>\n            </div>\n            <div class=\"col-md-6\">\n              <p class=\"pFont\">\n                <strong>LINHA</strong><br />\n                {{ linha }}\n              </p>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <p class=\"pFont\">\n                <strong>SUB LINHA</strong><br />\n                {{ subLinha ? subLinha : '-' }}\n              </p>\n            </div>\n            <div class=\"col-md-6\">\n              <p class=\"pFont\">\n                <strong>CLASSE</strong><br />\n                {{ classe }}\n              </p>\n            </div>\n          </div>\n          <form [formGroup]=\"form\" autocomplete=\"off\">\n            <div class=\"form-row\">\n              <div class=\"form-group col-lg-6 mb-lg-0\">\n                <label for=\"deposito\">Empresas</label>\n                <ng-select\n                  [searchable]=\"true\"\n                  [clearable]=\"true\"\n                  [multiple]=\"true\"\n                  [items]=\"empresas\"\n                  [virtualScroll]=\"true\"\n                  [hideSelected]=\"true\"\n                  [closeOnSelect]=\"false\"\n                  placeholder=\"Selecione...\"\n                  bindLabel=\"NM_FANT\"\n                  bindValue=\"ID\"\n                  formControlName=\"empresas\"\n                  (change)=\"getDepositos()\"\n                >\n                </ng-select>\n              </div>\n              <div class=\"form-group col-lg-6 mb-lg-0\">\n                <label for=\"deposito\">Depósitos</label>\n                <ng-select\n                  [searchable]=\"true\"\n                  [clearable]=\"true\"\n                  [multiple]=\"true\"\n                  [items]=\"depositos\"\n                  [virtualScroll]=\"true\"\n                  [hideSelected]=\"true\"\n                  [closeOnSelect]=\"false\"\n                  placeholder=\"Selecione...\"\n                  bindLabel=\"NM_DEPO\"\n                  bindValue=\"ID\"\n                  formControlName=\"depositos\"\n                  [ngClass]=\"\n                  onFieldError('depositos') +\n                  ' ' +\n                  onFieldRequired('depositos')\n                \"\n                >\n                </ng-select>\n                <invalid-form-control\n                  [show]=\"onFieldInvalid('depositos')\"\n                  message=\"Depósito é obrigatório.\"\n                >\n                </invalid-form-control>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n      <div\n        class=\"row justify-content-md-center mt-3\"\n        *ngIf=\"!noResultDepositos\"\n      >\n        <div class=\"form-group col-md-7\">\n          <label for=\"depositosVinculados\">Depósitos Vinculados</label>\n          <div class=\"table-reponsive\">\n            <custom-table>\n              <ng-template #thead let-thead>\n                <tr class=\"text-center\">\n                  <th scope=\"col\">Empresa</th>\n                  <th scope=\"col\">Depósito</th>\n                  <th scope=\"col\" class=\"hover\"></th>\n                </tr>\n              </ng-template>\n              <ng-template #tbody let-tbody>\n                <tr *ngFor=\"let item of dadosDepositosAssociados\">\n                  <td class=\"text-left\">{{ item.NM_EMPR }}</td>\n                  <td class=\"text-left\">{{ item.NM_DEPO }}</td>\n                  <td class=\"text-center\" style=\"width: 40px;\">\n                    <div>\n                      <button\n                        type=\"button\"\n                        class=\"btn-icon-sm\"\n                        placement=\"left\"\n                        tooltip=\"Ativar/Desativar\"\n                        container=\"body\"\n                       (click)=\"onUpdate(item)\"\n                      >\n                        <i [ngClass]=\"item.IN_STAT == 1 ? 'fas fa-toggle-on text-success' : 'fas fa-toggle-off'\"></i>\n                      </button>\n                    </div>\n                  </td>\n                  <!-- <td style=\"width: 40px;\">\n                    <button\n                      class=\"btn-icon-sm text-center\"\n                      style=\"color: red;\"\n                      tooltip=\"Excluir\"\n                      (click)=\"onDelete(item)\"\n                    >\n                      <i class=\"far fa-trash-alt\"></i>\n                    </button>\n                  </td> -->\n                </tr>\n              </ng-template>\n            </custom-table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</app-body>\n";
      /***/
    },

    /***/
    "sq3E":
    /*!**********************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/cadastros/vinculo-material-deposito-new/lista/lista.component.scss ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function sq3E(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".bg-row-selected {\n  background-color: #91b8f0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hYmFzdGVjaW1lbnRvL2NhZGFzdHJvcy92aW5jdWxvLW1hdGVyaWFsLWRlcG9zaXRvLW5ldy9saXN0YS9saXN0YS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FiYXN0ZWNpbWVudG8vY2FkYXN0cm9zL3ZpbmN1bG8tbWF0ZXJpYWwtZGVwb3NpdG8tbmV3L2xpc3RhL2xpc3RhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnLXJvdy1zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5MWI4ZjAhaW1wb3J0YW50O1xufSJdfQ== */";
      /***/
    },

    /***/
    "t+/W":
    /*!********************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/cadastros/vinculo-material-deposito-new/lista/lista.component.ts ***!
      \********************************************************************************************************/

    /*! exports provided: AbastecimentoCadastrosVinculoMaterialDepositoListaComponent */

    /***/
    function tW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastrosVinculoMaterialDepositoListaComponent", function () {
        return AbastecimentoCadastrosVinculoMaterialDepositoListaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lista.component.html */
      "BWiG");
      /* harmony import */


      var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lista.component.scss */
      "sq3E");
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


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS");
      /* harmony import */


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");
      /* harmony import */


      var _vinculo_material_deposito_new_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../vinculo-material-deposito-new.service */
      "tRPG"); //Converte rota em base64


      var AbastecimentoCadastrosVinculoMaterialDepositoListaComponent = /*#__PURE__*/function () {
        function AbastecimentoCadastrosVinculoMaterialDepositoListaComponent(activatedRoute, router, formBuilder, pnotifyService, atividadesService, routerService, titleService, service) {
          _classCallCheck(this, AbastecimentoCadastrosVinculoMaterialDepositoListaComponent);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.formBuilder = formBuilder;
          this.pnotifyService = pnotifyService;
          this.atividadesService = atividadesService;
          this.routerService = routerService;
          this.titleService = titleService;
          this.service = service;
          this.loaderFullScreen = true;
          this.loading = false;
          this.loadingLogs = false;
          this.loadingDetalhes = false;
          this.loadingDetalhesLog = false;
          this.noResult = false;
          this.noResultDetalhes = false;
          this.noResultLogs = false;
          this.compressedTable = false;
          this.selectedRow = false;
          this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
          this.idUsuario = this.currentUser['info']['id'];
          this.breadCrumbTree = [];
          this.depositos = [];
          this.linhas = [];
          this.subLinhas = [];
          this.classes = [];
          this.dados = [];
          this.dadosExcel = [];
          this.dadosLogs = [];
          this.dadosDetalhes = [];
          this.tiposMateriais = [];
          this.tiposCondicao = [{
            id: 2,
            name: "Associado"
          }, {
            id: 3,
            name: "Não associado"
          }];
          /* Ordenação */

          this.reverse = false;
          this.key = 'TP_MATE';
          /* Ordenação */

          /* Ordenação modal */

          this.reverseA = false;
          this.keyA = 'NM_APOI_TIPO_MATE';
          /* Paginação */

          this.itemsPerPage = 15;
          this.totalItems = 15;
          this.currentPage = 1;
          this.begin = 0;
          this.end = 15;
          /* Paginação */

          this.currentPageA = 1;
          this.beginA = 0;
          this.endA = 15;
          this.form = this.formBuilder.group({
            deposito: [null],
            tipoMaterial: [null],
            linha: [null],
            subLinha: [null],
            classe: [null],
            condicao: [null]
          });
        }

        _createClass(AbastecimentoCadastrosVinculoMaterialDepositoListaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this10 = this;

            setTimeout(function () {
              _this10.loaderFullScreen = false;
            }, 1000);
            this.form.get("condicao").disable();
            this.registrarAcesso();
            this.setBreadCrumb();
            this.getLinhas();
            this.getTiposMateriais();
            this.getDepositos();
            this.checkRouterParams();
            this.titleService.setTitle('Vinculo Material Depósito');
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            var _this11 = this;

            this.activatedRoute.params.subscribe(function (params) {
              _this11.breadCrumbTree = [{
                descricao: 'Home',
                routerLink: '/abastecimento/home'
              }, {
                descricao: 'Cadastros',
                routerLink: "/abastecimento/cadastros/".concat(params['idSubModulo'])
              }, {
                descricao: 'Vínculo de material e depósito'
              }];
            });
          }
        }, {
          key: "getLinhas",
          value: function getLinhas() {
            var _this12 = this;

            var idSituacao = 1;
            this.loaderNavbar = true;
            this.linhas = [];
            this.service.getLinhas(idSituacao).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              return _this12.loaderNavbar = false;
            })).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                _this12.linhas = res['body']['result'];

                _this12.form.get('classe').disable();

                _this12.form.get('subLinha').disable();
              }
            }, function (error) {
              _this12.pnotifyService.error('Erro ao carregar linhas');
            });
          }
        }, {
          key: "getSubLinhas",
          value: function getSubLinhas() {
            var _this13 = this;

            var idSituacao = 1;
            var linha = this.form.get('linha').value;
            this.loaderNavbar = true;
            this.subLinhas = [];
            this.form.get('subLinha').disable();

            if (this.form.get('linha').status === 'VALID' && Object.keys(linha).length > 0) {
              var descricaoLinhas = this.form.get('linha').value;
              this.service.getSubLinhas(descricaoLinhas, idSituacao).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
                return _this13.loaderNavbar = false;
              })).subscribe(function (res) {
                if (Object.keys(res).length > 0) {
                  if (res.status === 200) {
                    if (res['body']['responseCode'] === 200) {
                      _this13.subLinhas = res['body']['result'];

                      _this13.form.get('subLinha').reset();

                      _this13.form.get('subLinha').enable();
                    } else if (res['body']['responseCode'] === 404) {
                      _this13.form.get('subLinha').reset();

                      _this13.form.get('subLinha').disable();

                      _this13.pnotifyService.notice('Não há sublinha cadastrada');
                    }
                  }
                }
              }, function (error) {
                _this13.pnotifyService.error('Erro ao carregar sublinha');
              });
            } else {
              this.form.get('subLinha').reset();
              this.form.get('subLinha').disable();
            }
          }
        }, {
          key: "getClasses",
          value: function getClasses() {
            var _this14 = this;

            var idSituacao = 1;
            this.classes = [];
            this.loaderNavbar = true;

            if (this.form.get('linha').status === 'VALID') {
              var descricaoLinhas = this.form.get('linha').value;
              var idSubLinha = this.form.get('subLinha').value;
              this.service.getClasses(descricaoLinhas, idSubLinha, idSituacao).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
                return _this14.loaderNavbar = false;
              })).subscribe(function (res) {
                if (Object.keys(res).length > 0) {
                  _this14.classes = res['body']['result'];

                  _this14.form.get('classe').reset();

                  _this14.form.get('classe').enable();
                }
              }, function (error) {
                _this14.pnotifyService.error('Erro ao carregar classe');
              });
            } else {
              this.form.get('classe').reset();
              this.form.get('classe').disable();
            }
          }
        }, {
          key: "getDepositos",
          value: function getDepositos() {
            var _this15 = this;

            var idSituacao = 1;
            this.loaderNavbar = true;
            this.depositos = [];
            this.service.getDepositos(idSituacao, '').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              return _this15.loaderNavbar = false;
            })).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                if (res['body']['responseCode'] == 200) {
                  _this15.depositos = res['body']['result'];
                } else if (res['body']['responseCode'] == 404) {}
              }
            }, function (error) {
              _this15.pnotifyService.error('Erro ao carregar depósito');
            });
          }
        }, {
          key: "getTiposMateriais",
          value: function getTiposMateriais() {
            var _this16 = this;

            var idSituacao = 1;
            this.loaderNavbar = true;
            this.tiposMateriais = [];
            this.service.getTiposMateriais(idSituacao).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              return _this16.loaderNavbar = false;
            })).subscribe(function (res) {
              if (res.status === 200) {
                _this16.tiposMateriais = res['body']['result'];
              }
            }, function (error) {
              _this16.pnotifyService.error('Erro ao carregar tipos materiais');
            });
          }
        }, {
          key: "checkRouterParams",
          value: function checkRouterParams() {
            var _this17 = this;

            this.activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (queryParams) {
              if (Object.keys(queryParams).length > 0) {
                var _response = _this17.routerService.getBase64UrlParams(queryParams);

                _this17.search(_response);

                _this17.setFormValues(_response);
              }
            });
            this.activatedRouteSubscription.unsubscribe();
          }
        }, {
          key: "setFormValues",
          value: function setFormValues(queryParams) {
            var _this18 = this;

            var idSituacao = 1;
            var deposito = queryParams['ID_DEPO'] ? queryParams['ID_DEPO'] : null;
            var tipoMaterial = queryParams['ID_APOI_TIPO_MATE'];
            var linha = queryParams['ID_LINH'];
            var subLinha = queryParams['ID_SUB_LINH'] ? queryParams['ID_SUB_LINH'] : null;
            var classe = queryParams['ID_CLAS'] ? queryParams['ID_CLAS'] : null;
            var condicao = queryParams['ID_SITU_MATE'] ? queryParams['ID_SITU_MATE'] : 0;

            if (condicao > 0) {
              this.form.get("condicao").enable();
            }

            if (Object.keys(linha).length > 0) {
              this.loaderNavbar = true;
              /* classes */

              this.service.getClasses(linha, subLinha, idSituacao).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
                return _this18.loaderNavbar = false;
              })).subscribe(function (res) {
                if (Object.keys(res).length > 0) {
                  if (res.status === 200) {
                    if (res['body']['responseCode'] === 200) {
                      _this18.classes = res['body']['result'];

                      _this18.form.get('classe').enable();
                    }
                  }
                }
              }, function (error) {
                _this18.pnotifyService.error('Erro ao carregar Classes');
              });
            } else {
              this.form.get('classe').disable();
            }
            /* sublinhas */


            if (Object.keys(linha).length > 0) {
              this.service.getSubLinhas(linha, idSituacao).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
                return _this18.loaderNavbar = false;
              })).subscribe(function (res) {
                if (Object.keys(res).length > 0) {
                  if (res.status == 200) {
                    if (res['body']['responseCode'] === 200) {
                      _this18.subLinhas = res['body']['result'];

                      _this18.form.get('subLinha').enable();
                    }
                  }
                }
              }, function (error) {
                _this18.pnotifyService.error('Erro ao carregar SubLinha');
              });
            } else {
              this.form.get('subLinha').disable();
            }

            this.form.patchValue({
              deposito: deposito,
              tipoMaterial: tipoMaterial,
              linha: linha,
              subLinha: subLinha,
              classe: classe,
              condicao: condicao
            });
          }
        }, {
          key: "onFilter",
          value: function onFilter() {
            this.setRouterParams({
              ID_DEPO: this.form.value['deposito'] === null || this.form.value['deposito'] === undefined ? '' : this.form.value['deposito'],
              ID_APOI_TIPO_MATE: this.form.value['tipoMaterial'] === null || this.form.value['tipoMaterial'] === undefined ? '' : this.form.value['tipoMaterial'],
              ID_LINH: this.form.value['linha'] === null || this.form.value['linha'] === undefined ? '' : this.form.value['linha'],
              ID_SUB_LINH: this.form.value['subLinha'] === null || this.form.value['subLinha'] === undefined ? '' : this.form.value['subLinha'],
              ID_CLAS: this.form.value['classe'] === null || this.form.value['classe'] === undefined ? '' : this.form.value['classe'],
              ID_SITU_MATE: this.form.value['condicao'] === null || this.form.value['condicao'] === undefined ? 0 : this.form.value['condicao']
            });
            this.onClose();
          }
        }, {
          key: "setRouterParams",
          value: function setRouterParams(params) {
            this.router.navigate([], {
              relativeTo: this.activatedRoute,
              queryParams: this.routerService.setBase64UrlParams(params)
            });
            this.search(params);
          }
        }, {
          key: "search",
          value: function search(params) {
            var _this19 = this;

            this.loaderNavbar = true;
            this.loading = false;
            this.dados = [];
            this.service.getMaterialDepositos(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              _this19.loaderNavbar = false;
            })).subscribe(function (res) {
              if (res.status === 200) {
                if (res['body']['responseCode'] === 200) {
                  _this19.loading = true;
                  _this19.noResult = false;
                  _this19.dados = res['body']['result'];
                } else if (res['body']['responseCode'] === 404) {
                  _this19.noResult = true;
                  _this19.loading = false;

                  _this19.pnotifyService.notice('Não há dados');
                }
              }
            }, function (error) {
              _this19.noResult = true;
              _this19.loading = false;

              _this19.pnotifyService.error('Erro ao carregar lista de material depósito');
            });
          }
        }, {
          key: "excelExport",
          value: function excelExport() {
            var queryParams = {
              IN_GERA_RELA_EXCE: 1,
              ID_USUA: this.idUsuario,
              ID_DEPO: this.form.value['deposito'] === null || this.form.value['deposito'] === undefined ? '' : this.form.value['deposito'],
              ID_APOI_TIPO_MATE: this.form.value['tipoMaterial'] === null || this.form.value['tipoMaterial'] === undefined ? '' : this.form.value['tipoMaterial'].toString(),
              ID_LINH: this.form.value['linha'] === null || this.form.value['linha'] === undefined ? '' : this.form.value['linha'].toString(),
              ID_SUB_LINH: this.form.value['subLinha'] === null || this.form.value['subLinha'] === undefined ? '' : this.form.value['subLinha'].toString(),
              ID_CLAS: this.form.value['classe'] === null || this.form.value['classe'] === undefined ? '' : this.form.value['classe'].toString(),
              ID_SITU_MATE: this.form.value['condicao'] === null || this.form.value['condicao'] === undefined ? 0 : this.form.value['condicao']
            };
            this.getSearchExcel(queryParams);
          }
        }, {
          key: "getSearchExcel",
          value: function getSearchExcel(params) {
            var _this20 = this;

            this.loaderNavbar = true;
            this.dadosExcel = [];
            this.service.getMaterialDepositosDetalhes(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              return _this20.loaderNavbar = false;
            })).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                if (res['body']['responseCode'] === 200) {
                  _this20.dadosExcel = res['body']['result'];

                  _this20.pnotifyService.success(_this20.dadosExcel);
                } else if (res['body']['responseCode'] === 404) {
                  _this20.pnotifyService.notice('Nenhuma informação encontrada');
                }
              }
            }, function (error) {
              _this20.pnotifyService.error('Erro ao carregar para excel dados');
            });
          }
        }, {
          key: "getMaterialDepositosDetalhes",
          value: function getMaterialDepositosDetalhes(params) {
            var _this21 = this;

            this.loaderNavbar = true;
            this.loadingDetalhes = false;
            this.dadosDetalhes = [];
            this.service.getMaterialDepositosDetalhes(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              _this21.loaderNavbar = false;
            })).subscribe(function (res) {
              if (res.status === 200) {
                if (res['body']['responseCode'] === 200) {
                  _this21.dadosDetalhes = res['body']['result'];
                  _this21.noResultDetalhes = false;
                  _this21.loadingDetalhes = true;
                } else if (res['body']['responseCode'] === 404) {
                  _this21.loadingDetalhes = false;
                  _this21.noResultDetalhes = true;

                  _this21.pnotifyService.notice('Não há dados');
                }
              }
            }, function (error) {
              _this21.pnotifyService.error('Erro ao carregar detalhes de material depósito');

              _this21.loadingDetalhes = false;
            });
          }
        }, {
          key: "getMaterialDepositosLogs",
          value: function getMaterialDepositosLogs(params) {
            var _this22 = this;

            this.loaderNavbar = true;
            this.loadingLogs = false;
            this.dadosLogs = [];
            this.loadingDetalhesLog = false;
            this.service.getLogs(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              return _this22.loaderNavbar = false;
            })).subscribe(function (res) {
              if (res.status === 200) {
                if (res['body']['responseCode'] === 200) {
                  _this22.dadosLogs = res['body']['result'];
                  _this22.noResultLogs = false;
                  _this22.loadingLogs = true;
                  _this22.loadingDetalhesLog = true;
                } else if (res['body']['responseCode'] === 404) {
                  _this22.pnotifyService.notice('Não há dados');

                  _this22.loadingDetalhesLog = true;
                  _this22.noResultLogs = true;
                  _this22.loadingLogs = false;
                }
              }
            }, function (error) {
              _this22.pnotifyService.error('Erro ao carregar detalhes logs');

              _this22.noResultLogs = true;
              _this22.loadingLogs = false;
            });
          }
        }, {
          key: "openTab",
          value: function openTab(i) {
            i.select = !i.select;
            this.getMaterialDepositosDetalhes({
              ID_CLAS: i['ID_CLAS'],
              ID_APOI_TIPO_MATE: i['ID_APOI_TIPO_MATE']
            });
            this.compressedTable = true;
          }
        }, {
          key: "openModal",
          value: function openModal(i) {
            this.getMaterialDepositosLogs({
              ID_ASSO_DEPO_MATE: i['ID']
            });
          }
        }, {
          key: "onClose",
          value: function onClose() {
            this.dados.forEach(function (e) {
              e.select = false;
            });
            this.selectedRow = false;
            this.compressedTable = false;
          }
        }, {
          key: "onAdd",
          value: function onAdd(item) {
            this.router.navigate(['../cadastro'], {
              relativeTo: this.activatedRoute,
              queryParams: this.routerService.setBase64UrlParams({
                item: item
              })
            });
          }
        }, {
          key: "enableCondicao",
          value: function enableCondicao(event) {
            if (event) {
              this.form.get("condicao").enable();
              this.form.get("condicao").setValue(2);
            } else {
              this.form.get("condicao").disable();
              this.form.get("condicao").reset();
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
          /* Ordenação */

        }, {
          key: "sort",
          value: function sort(key) {
            this.key = key;
            this.reverse = !this.reverse;
          }
          /* Ordenação */

          /* Paginação Tabela Principal*/

        }, {
          key: "onPageChanged",
          value: function onPageChanged(event) {
            this.begin = (event.page - 1) * event.itemsPerPage;
            this.end = event.page * event.itemsPerPage;
          }
          /* Paginação */

          /* Paginação Modal*/

        }, {
          key: "onPageChangedA",
          value: function onPageChangedA(event) {
            this.beginA = (event.page - 1) * event.itemsPerPage;
            this.endA = event.page * event.itemsPerPage;
          }
        }, {
          key: "sortA",
          value: function sortA(keyA) {
            this.keyA = keyA;
            this.reverseA = !this.reverseA;
          }
        }]);

        return AbastecimentoCadastrosVinculoMaterialDepositoListaComponent;
      }();

      AbastecimentoCadastrosVinculoMaterialDepositoListaComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_8__["AtividadesService"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_9__["TitleService"]
        }, {
          type: _vinculo_material_deposito_new_service__WEBPACK_IMPORTED_MODULE_11__["AbastecimentoCadastrosVinculoMaterialDepositoNewService"]
        }];
      };

      AbastecimentoCadastrosVinculoMaterialDepositoListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_8__["AtividadesService"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_9__["TitleService"], _vinculo_material_deposito_new_service__WEBPACK_IMPORTED_MODULE_11__["AbastecimentoCadastrosVinculoMaterialDepositoNewService"]])], AbastecimentoCadastrosVinculoMaterialDepositoListaComponent);
      /***/
    },

    /***/
    "tRPG":
    /*!************************************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/cadastros/vinculo-material-deposito-new/vinculo-material-deposito-new.service.ts ***!
      \************************************************************************************************************************/

    /*! exports provided: AbastecimentoCadastrosVinculoMaterialDepositoNewService */

    /***/
    function tRPG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastrosVinculoMaterialDepositoNewService", function () {
        return AbastecimentoCadastrosVinculoMaterialDepositoNewService;
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
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var AbastecimentoCadastrosVinculoMaterialDepositoNewService = /*#__PURE__*/function () {
        function AbastecimentoCadastrosVinculoMaterialDepositoNewService(httpClient) {
          _classCallCheck(this, AbastecimentoCadastrosVinculoMaterialDepositoNewService);

          this.httpClient = httpClient;
          this.BASE_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API;
        }

        _createClass(AbastecimentoCadastrosVinculoMaterialDepositoNewService, [{
          key: "getTiposMateriais",
          value: function getTiposMateriais(idSituacao) {
            return this.httpClient.get("".concat(this.BASE_URL, "/common/v2/tipos-material"), {
              params: {
                IN_STAT: idSituacao
              },
              observe: "response"
            });
          }
        }, {
          key: "getLinhas",
          value: function getLinhas(idSituacao) {
            return this.httpClient.get("".concat(this.BASE_URL, "/common/v2/linhas"), {
              params: {
                IN_STAT: idSituacao
              },
              observe: "response"
            });
          }
        }, {
          key: "getSubLinhas",
          value: function getSubLinhas(descricaoLinhas, idSituacao) {
            return this.httpClient.get("".concat(this.BASE_URL, "/common/v2/sub-linhas"), {
              params: {
                ID_LINH: descricaoLinhas.toString(),
                IN_STAT: idSituacao
              },
              observe: "response"
            });
          }
        }, {
          key: "getClasses",
          value: function getClasses(descricaoLinhas, idSubLinha, idSituacao) {
            if (!idSubLinha) idSubLinha = "";
            return this.httpClient.get("".concat(this.BASE_URL, "/common/v2/classes"), {
              params: {
                ID_LINH: descricaoLinhas.toString(),
                ID_SUB_LINH: idSubLinha,
                IN_STAT: idSituacao
              },
              observe: "response"
            });
          }
        }, {
          key: "getDepositos",
          value: function getDepositos(idSituacao, idEmpresa) {
            return this.httpClient.get("".concat(this.BASE_URL, "/common/v2/depositos"), {
              params: {
                IN_STAT: idSituacao,
                ID_EMPR: idEmpresa.toString()
              },
              observe: "response"
            });
          }
        }, {
          key: "getEmpresas",
          value: function getEmpresas(idSituacao) {
            return this.httpClient.get("".concat(this.BASE_URL, "/common/v2/empresas"), {
              params: {
                IN_STAT: idSituacao
              },
              observe: "response"
            });
          }
        }, {
          key: "getMaterialDepositosDetalhes",
          value: function getMaterialDepositosDetalhes(params) {
            return this.httpClient.get("".concat(this.BASE_URL, "/abastecimento/cadastros/depositos-associados-materiais"), {
              params: params,
              observe: "response"
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
          }
        }, {
          key: "getMateDispAssociacao",
          value: function getMateDispAssociacao() {
            return this.httpClient.get("".concat(this.BASE_URL, "/abastecimento/cadastros/materiais-disponiveis-associacao-depositos"), {
              params: {
                ID_SITU_MATE: "1"
              },
              observe: "response"
            });
            ;
          }
        }, {
          key: "getMaterialDepositos",
          value: function getMaterialDepositos(params) {
            return this.httpClient.get("".concat(this.BASE_URL, "/abastecimento/cadastros/materiais-disponiveis-associacao-depositos"), {
              params: {
                ID_DEPO: params["ID_DEPO"],
                ID_APOI_TIPO_MATE: params["ID_APOI_TIPO_MATE"].toString(),
                ID_LINH: params["ID_LINH"].toString(),
                ID_SUB_LINH: params["ID_SUB_LINH"].toString(),
                ID_CLAS: params["ID_CLAS"].toString(),
                ID_SITU_MATE: params["ID_SITU_MATE"]
              },
              observe: "response"
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
          }
        }, {
          key: "postMaterialDeposito",
          value: function postMaterialDeposito(record) {
            return this.httpClient.post("".concat(this.BASE_URL, "/abastecimento/cadastros/deposito-associado-material"), record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
          }
        }, {
          key: "updateMaterialDeposito",
          value: function updateMaterialDeposito(record) {
            return this.httpClient.post("".concat(this.BASE_URL, "/abastecimento/cadastros/deposito-associado-material-alterar"), record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
          }
        }, {
          key: "deleteMaterialDeposito",
          value: function deleteMaterialDeposito(record) {
            var options = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
              }),
              body: record
            };
            return this.httpClient["delete"]("".concat(this.BASE_URL, "/abastecimento/cadastros/deposito-associado-material"), options);
          }
        }, {
          key: "getLogs",
          value: function getLogs(params) {
            return this.httpClient.get("".concat(this.BASE_URL, "/abastecimento/cadastros/depositos-associados-materiais-auditoria"), {
              params: params,
              observe: "response"
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
          }
        }]);

        return AbastecimentoCadastrosVinculoMaterialDepositoNewService;
      }();

      AbastecimentoCadastrosVinculoMaterialDepositoNewService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      AbastecimentoCadastrosVinculoMaterialDepositoNewService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], AbastecimentoCadastrosVinculoMaterialDepositoNewService);
      /***/
    },

    /***/
    "tVLG":
    /*!**************************************************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/cadastros/vinculo-material-deposito-new/lista-nao-vinculados/lista-nao-vinculados.component.ts ***!
      \**************************************************************************************************************************************/

    /*! exports provided: AbastecimentoCadastrosVinculoMaterialDepositoListaNaoVinculadosComponent */

    /***/
    function tVLG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastrosVinculoMaterialDepositoListaNaoVinculadosComponent", function () {
        return AbastecimentoCadastrosVinculoMaterialDepositoListaNaoVinculadosComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lista_nao_vinculados_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lista-nao-vinculados.component.html */
      "WR3X");
      /* harmony import */


      var _lista_nao_vinculados_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lista-nao-vinculados.component.scss */
      "ck7C");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS");
      /* harmony import */


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");
      /* harmony import */


      var _vinculo_material_deposito_new_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../vinculo-material-deposito-new.service */
      "tRPG"); //Converte rota em base64


      var AbastecimentoCadastrosVinculoMaterialDepositoListaNaoVinculadosComponent = /*#__PURE__*/function () {
        /* Paginação */
        function AbastecimentoCadastrosVinculoMaterialDepositoListaNaoVinculadosComponent(activatedRoute, router, pnotifyService, atividadesService, routerService, titleService, service) {
          _classCallCheck(this, AbastecimentoCadastrosVinculoMaterialDepositoListaNaoVinculadosComponent);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.pnotifyService = pnotifyService;
          this.atividadesService = atividadesService;
          this.routerService = routerService;
          this.titleService = titleService;
          this.service = service;
          this.loaderFullScreen = true;
          this.loading = false;
          this.noResult = false;
          this.breadCrumbTree = [];
          this.dadosMateDispAssociacao = [];
          /* Ordenação */

          this.reverse = false;
          this.key = 'NM_APOI_TIPO_MATE';
          /* Ordenação */

          /* Paginação */

          this.itemsPerPage = 15;
          this.totalItems = 15;
          this.currentPage = 1;
          this.begin = 0;
          this.end = 15;
        }

        _createClass(AbastecimentoCadastrosVinculoMaterialDepositoListaNaoVinculadosComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this23 = this;

            setTimeout(function () {
              _this23.loaderFullScreen = false;
            }, 1000);
            this.registrarAcesso();
            this.setBreadCrumb();
            this.getMateDispAssociacao();
            this.titleService.setTitle('Vinculo Material Depósito');
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            var _this24 = this;

            this.activatedRoute.params.subscribe(function (params) {
              _this24.breadCrumbTree = [{
                descricao: 'Home',
                routerLink: '/abastecimento/home'
              }, {
                descricao: 'Cadastros',
                routerLink: "/abastecimento/cadastros/".concat(params['idSubModulo'])
              }, {
                descricao: 'Vínculo Material Depósito',
                routerLink: "/abastecimento/cadastros/".concat(params['idSubModulo'], "/vinculo-material-deposito/lista")
              }, {
                descricao: 'Não Vinculados'
              }];
            });
          }
        }, {
          key: "getMateDispAssociacao",
          value: function getMateDispAssociacao() {
            var _this25 = this;

            this.loaderNavbar = true;
            this.loading = false;
            this.dadosMateDispAssociacao = [];
            this.service.getMateDispAssociacao().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
              _this25.loaderNavbar = false;
            })).subscribe(function (res) {
              if (res.status === 200) {
                if (res['body']['responseCode'] === 200) {
                  _this25.dadosMateDispAssociacao = res['body']['result'];
                  _this25.loading = true;
                  _this25.noResult = false;
                } else if (res['body']['responseCode'] === 404) {
                  _this25.noResult = true;
                  _this25.loading = false;

                  _this25.pnotifyService.notice('Não há dados');
                }
              }
            }, function (error) {
              _this25.loading = false;
              _this25.noResult = true;

              _this25.pnotifyService.error('Erro ao carregar materiais disponiveis para associação');
            });
          }
        }, {
          key: "onAdd",
          value: function onAdd(item) {
            this.router.navigate(['../cadastro'], {
              relativeTo: this.activatedRoute,
              queryParams: this.routerService.setBase64UrlParams({
                item: item
              })
            });
          }
          /* Ordenação */

        }, {
          key: "sort",
          value: function sort(key) {
            this.key = key;
            this.reverse = !this.reverse;
          }
          /* Ordenação */

          /* Paginação Tabela Principal*/

        }, {
          key: "onPageChanged",
          value: function onPageChanged(event) {
            this.begin = (event.page - 1) * event.itemsPerPage;
            this.end = event.page * event.itemsPerPage;
          }
        }]);

        return AbastecimentoCadastrosVinculoMaterialDepositoListaNaoVinculadosComponent;
      }();

      AbastecimentoCadastrosVinculoMaterialDepositoListaNaoVinculadosComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__["AtividadesService"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__["RouterService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_8__["TitleService"]
        }, {
          type: _vinculo_material_deposito_new_service__WEBPACK_IMPORTED_MODULE_10__["AbastecimentoCadastrosVinculoMaterialDepositoNewService"]
        }];
      };

      AbastecimentoCadastrosVinculoMaterialDepositoListaNaoVinculadosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'lista-nao-vinculados',
        template: _raw_loader_lista_nao_vinculados_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_nao_vinculados_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__["AtividadesService"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__["RouterService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_8__["TitleService"], _vinculo_material_deposito_new_service__WEBPACK_IMPORTED_MODULE_10__["AbastecimentoCadastrosVinculoMaterialDepositoNewService"]])], AbastecimentoCadastrosVinculoMaterialDepositoListaNaoVinculadosComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=vinculo-material-deposito-new-vinculo-material-deposito-new-module-es5.js.map