(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ocorrencia-ocorrencia-module"], {
    /***/
    "DPcc":
    /*!*****************************************************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/contratos/ocorrencia/cadastro/cadastro.component.scss ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function DPcc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGVjbm9sb2dpYS1pbmZvcm1hY2FvL2NvbnRyYXRvcy9vY29ycmVuY2lhL2NhZGFzdHJvL2NhZGFzdHJvLmNvbXBvbmVudC5zY3NzIn0= */";
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
    "G4h3":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/tecnologia-informacao/contratos/ocorrencia/parecer/parecer.component.html ***!
      \*****************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function G4h3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\r\n<form [formGroup]=\"form\" autocomplete=\"off\" [hidden] = \"loading\">\r\n  <fieldset  class=\"col-12\">\r\n    <fieldset class=\"border rounded shadow-sm col-12 pt-2 mx-auto\">\r\n      <legend>Dados do Parecer</legend>\r\n      <div class=\"form-row justify-content-center\">\r\n        <div class=\"form-group col-md-6 pl-0\">\r\n          <label for=\"TP_RESP\">Tipo de Responsável</label>\r\n          <select\r\n            class=\"form-control custom-select\"\r\n            id=\"TP_RESP\"\r\n            formControlName=\"TP_RESP\"\r\n            [ngClass]=\"onFieldRequired('TP_RESP')\">\r\n            <option value=\"EMPRESA\">EMPRESA</option>\r\n            <option value=\"FUNCIONARIO\">FUNCIONARIO</option>\r\n          </select>\r\n          <invalid-form-control [show]=\"onFieldInvalid('TP_RESP')\" message=\"Tipo de Responsável é obrigatório.\"></invalid-form-control>\r\n        </div> \r\n        <div class=\"form-group col-md-6 pl-0\">\r\n          <label for=\"DS_STAT_CONC\">Status da Ocorrência</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"DS_STAT_CONC\"\r\n            formControlName=\"DS_STAT_CONC\"\r\n            placeholder=\"Digite...\"\r\n          />\r\n          <invalid-form-control [show]=\"onFieldInvalid('DS_STAT_CONC')\" message=\"Status é obrigatório.\"></invalid-form-control>\r\n        </div> \r\n      </div>\r\n      <div class=\"form-row justify-content-center\">\r\n        <div class=\"form-group col-md-6 pl-0\">\r\n          <label for=\"DT_DEVO_APRE\">Data de Devolução</label>\r\n          <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\r\n            </div>\r\n            <input\r\n            class=\"form-control\"\r\n            id=\"DT_DEVO_APRE\"\r\n            type=\"text\"\r\n            bsDatepicker\r\n            placeholder=\"Selecione...\"\r\n            [bsConfig]=\"bsConfig\"\r\n            formControlName=\"DT_DEVO_APRE\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group col-md-6 pl-0\">\r\n          <label for=\"VL_DSCO\">Valor</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            placeholder=\"Digite...\"\r\n            id=\"VL_DSCO\"\r\n            formControlName=\"VL_DSCO\"\r\n            autocomplete=\"new-password\"\r\n            currencyMask [options]=\"{ align: 'left', prefix: 'R$ ', thousands: '.', decimal: ',' }\"          >\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row justify-content-center\">\r\n        <div class=\"form-group col-12 pl-0\">\r\n          <label for=\"NM_EMPR_REPA\">Empresa</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"NM_EMPR_REPA\"\r\n            formControlName=\"NM_EMPR_REPA\"\r\n            placeholder=\"Digite...\"\r\n          />\r\n        </div>\r\n        <div class=\"form-group col-12 pl-0\">\r\n          <label for=\"CONT_EMPR_REPA\">Contato</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"CONT_EMPR_REPA\"\r\n            formControlName=\"CONT_EMPR_REPA\"\r\n            placeholder=\"Digite...\"\r\n          />\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row justify-content-center\">\r\n        <div class=\"form-group col-md-12 pl-0\">\r\n          <label for=\"DS_OBSE\">Descrição</label>\r\n          <textarea \r\n            class=\"form-control\" \r\n            id=\"DS_OBSE\"\r\n            formControlName=\"DS_OBSE\" \r\n            rows=\"3\"\r\n            [ngClass]=\"onFieldRequired('DS_OBSE')\"\r\n            >\r\n          </textarea>\r\n          <invalid-form-control [show]=\"onFieldInvalid('DS_OBSE')\" message=\"Descrição é obrigatório, com no minímo 10 caracteres.\"></invalid-form-control>\r\n        </div> \r\n      </div>\r\n    </fieldset>\r\n    <br>\r\n    <fieldset class=\"border rounded shadow-sm col-12 pt-2 mx-auto\">\r\n      <legend>Responsáveis</legend>\r\n      <div formArrayName=\"responsaveis\">\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col mb-0 d-flex justify-content-between\">\r\n            <div class=\"mtc-title\"></div>\r\n            <div>\r\n              <a\r\n                class=\"text-secondary\"\r\n                (click)=\"onAddResponsavel()\"\r\n                href=\"javascript:void(0)\">\r\n                <b>Adicionar</b>\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\"  *ngFor=\"let item of formResponsaveis.controls; let i = index\" [formGroupName]=\"i\">\r\n          <div class=\"form-group col mb-0\">\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-md-3 pl-0\">\r\n                <label for=\"NR_MATR_RESP\">Matricula</label>\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  id=\"NR_MATR_RESP\"\r\n                  formControlName=\"NR_MATR_RESP\"\r\n                  placeholder=\"Digite...\"\r\n                  [ngClass]=\"onNestedFieldError('responsaveis', i, 'NR_MATR_RESP') + ' ' + onNestedFieldRequired('responsaveis', i, 'NR_MATR_RESP')\"\r\n                >\r\n              </div>\r\n              <div class=\"form-group col-md-8 pl-0\">\r\n                <div class=\"mb-0 d-flex justify-content-between w-100\" style=\"height: 22px\">\r\n                  <label class=\"my-auto\" for=\"NM_RESP\">Responsável</label>\r\n                  <div class=\"my-auto text-uppercase\" style=\"font-size: 10px\">\r\n                    <a\r\n                      class=\"text-primary\"\r\n                      href=\"javascript:void(0)\"\r\n                      (click)=\"openModal(selecionarUsuarios, i)\">\r\n                      <strong>Selecionar</strong>\r\n                    </a>\r\n                  </div>\r\n                </div>\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  id=\"NM_RESP\"\r\n                  formControlName=\"NM_RESP\"\r\n                  [ngClass]=\"onNestedFieldError('responsaveis', i, 'NM_RESP') + ' ' + onNestedFieldRequired('responsaveis', i, 'NM_RESP')\">\r\n              </div>\r\n              <div class=\"col-1 pt-4 mt-1 d-flex justify-content-center\">\r\n                <button\r\n                  type=\"button\"\r\n                  class=\"btn-icon\"\r\n                  (click)=\"onDeleteResponsavel(i)\">\r\n                  <i class=\"fas fa-trash\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <br>\r\n    </fieldset>\r\n    <br>\r\n    <fieldset class=\"border rounded shadow-sm col-12 pt-2 pb-2 mx-auto\">\r\n      <legend>Documentos</legend>\r\n      <div class=\"form-group border rounded p-1\">\r\n        <div>\r\n          <label for=\"documento\" class=\"w-100 d-flex justify-content-between align-items-center m-0 py-1\" style=\"cursor: pointer;\">\r\n            <span>Novo Documento</span>\r\n          </label>\r\n          <input\r\n            id=\"documento\"\r\n            type=\"file\"\r\n            (change)=\"appendFile($event.target.files)\"\r\n            class=\"d-none\"\r\n            >\r\n        </div>\r\n      </div>\r\n      <ul>\r\n        <li class=\"d-flex justify-content-between\" *ngFor=\"let item of documentos ; let index = index\">\r\n          <div>{{ item.NM_DOCU | uppercase }}</div>\r\n          <div>\r\n            <a\r\n              [hidden]=\"!item.ID_LOGI_ENMA_FHNC_DOCU\"\r\n              [href]=\"item.LINK\"\r\n              target=\"_blank\"\r\n              class=\"btn-icon-sm mx-2 text-black\"\r\n              tooltip=\"visualizar\"\r\n            >\r\n              <i class=\"far fa-eye\"></i>\r\n            </a>\r\n            <button\r\n              class=\"btn-icon-sm mx-2 hover\"\r\n              tooltip=\"excluir\"\r\n              (click)=\"onRemove(item, index)\"\r\n              >\r\n              <i class=\"fas fa-trash\"></i>\r\n            </button>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </fieldset>    \r\n  </fieldset>\r\n</form>\r\n<div  class=\"form-row justify-content-center text-center\">\r\n  <button \r\n    type=\"button\" \r\n    class=\"btn btn-default btn-lg m-2\"\r\n    (click)=\"postParecer()\"\r\n    [disabled]=\"form.valid == false\"\r\n  >\r\n    <span aria-hidden=\"true\">\r\n     <i class=\" text-success fas fa-thumbs-up\"></i>\r\n    </span>Salvar\r\n  </button>\r\n</div>\r\n<ng-template #selecionarUsuarios>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">Pesquisa de Responsáveis</h4>\r\n    <div class=\"d-flex justify-content-center align-items-center\">\r\n      <div class=\"spinner-border text-primary mr-2\" role=\"status\" *ngIf=\"loadingUsuarios\">\r\n        <span class=\"sr-only\">Loading...</span>\r\n      </div>\r\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModal()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <advanced-filter>\r\n      <form [formGroup]=\"formUsuarios\">\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-3\">\r\n            <label for=\"cdItem\">BUSCAR POR</label>\r\n            <select\r\n              class=\"form-control custom-select\"\r\n              formControlName=\"buscarPor\"\r\n            >\r\n              <option value=\"matricula\">Matricula</option>\r\n              <option value=\"nome\" selected> Nome Responsável</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"form-group col-9\">\r\n            <label>TERMO DE PESQUISA</label>\r\n            <div class=\"input-group\">\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                formControlName=\"pesquisa\"\r\n                >\r\n                <div class=\"input-group-append\">\r\n                  <span \r\n                    [tooltip]=\"formUsuarios.valid == false ? 'Digite um termo de pesquisa':''\"\r\n                    container=\"body\"\r\n                    placement =\"left\"\r\n                  >\r\n                    <button\r\n                    style=\"height: 25px;\"\r\n                      [disabled]=\"formUsuarios.valid == false\"\r\n                      class=\"input-group-text hover\"\r\n                      (click)=\"getUsuarios()\"\r\n                      >\r\n                      <i class=\"fas fa-search\"></i>\r\n                    </button>\r\n                  </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </advanced-filter>\r\n    <custom-table *ngIf=\"!loadingUsuarios && !noUsuarios\" class=\"text-center\">\r\n      <ng-template #thead let-thead>\r\n        <tr>\r\n          <th>Matricula</th>\r\n          <th>Nome Responsável</th>\r\n          <th></th>\r\n        </tr>\r\n      </ng-template>\r\n      <ng-template #tbody let-tbody>\r\n        <tr *ngFor=\"let usuario of usuarios | slice : begin : end; let i = index\">\r\n          <td>{{ usuario.matricula }}</td>\r\n          <td>{{ usuario.nome }}</td>\r\n          <td>\r\n            <button\r\n              class=\"btn-icon-sm\"\r\n              tooltip=\"Salvar Responsável\"\r\n              container=\"body\"\r\n              (click)=\"setUsuarios(usuario);modalRef.hide()\"\r\n            >\r\n              <i class=\"far fa-save\"></i>\r\n            </button>\r\n          </td>\r\n        </tr>\r\n      </ng-template>\r\n    </custom-table>\r\n    <div *ngIf=\"totalItems > itemsPerPage\">\r\n      Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\r\n      <pagination\r\n        [maxSize]=\"10\"\r\n        [totalItems]=\"totalItems\"\r\n        (pageChanged)=\"onPageChanged($event)\"\r\n        [(itemsPerPage)]=\"itemsPerPage\"\r\n        [boundaryLinks]=\"true\"\r\n        [(ngModel)]=\"currentPage\"\r\n        previousText=\"&lsaquo;\"\r\n        nextText=\"&rsaquo;\"\r\n        firstText=\"&laquo;\"\r\n        lastText=\"&raquo;\">\r\n      </pagination>\r\n    </div>\r\n  </div>\r\n</ng-template>";
      /***/
    },

    /***/
    "POIC":
    /*!*****************************************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/contratos/ocorrencia/ocorrencia.module.ts ***!
      \*****************************************************************************************/

    /*! exports provided: TecnologiaInformacaoOcorrenciaModule */

    /***/
    function POIC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoOcorrenciaModule", function () {
        return TecnologiaInformacaoOcorrenciaModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/module-wrapper/module-wrapper.module */
      "RoXV");
      /* harmony import */


      var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/not-found/not-found.module */
      "sCnT");
      /* harmony import */


      var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/pipes/pipes.module */
      "9Xeq");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/tabs */
      "2ZVE");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common/locales/pt */
      "vT00");
      /* harmony import */


      var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_11__);
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ngx-bootstrap/pagination */
      "6No5");
      /* harmony import */


      var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ngx-bootstrap/tooltip */
      "978R");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var angular2_text_mask__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! angular2-text-mask */
      "UVXo");
      /* harmony import */


      var angular2_text_mask__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_16__);
      /* harmony import */


      var ng_brazil__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ng-brazil */
      "hTrW");
      /* harmony import */


      var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ng2-currency-mask */
      "D5nU");
      /* harmony import */


      var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_18__);
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./lista/lista.component */
      "zvcX");
      /* harmony import */


      var _ocorrencia_routing_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./ocorrencia-routing.module */
      "gVRY");
      /* harmony import */


      var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./cadastro/cadastro.component */
      "qxKm");
      /* harmony import */


      var _parecer_parecer_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./parecer/parecer.component */
      "Vh74");

      Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_11___default.a);
      Object(ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__["defineLocale"])('pt-br', ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__["ptBrLocale"]); // ngx-bootstrap
      // ng-select
      // ng-brazil
      // Modules
      // Components

      var TecnologiaInformacaoOcorrenciaModule = function TecnologiaInformacaoOcorrenciaModule() {
        _classCallCheck(this, TecnologiaInformacaoOcorrenciaModule);
      };

      TecnologiaInformacaoOcorrenciaModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"])({
        declarations: [_lista_lista_component__WEBPACK_IMPORTED_MODULE_21__["TecnologiaInformacaoCadastrosOcorrenciaListaComponent"], _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_23__["TecnologiaInformacaoCadastrosOcorrenciaCadastroComponent"], _parecer_parecer_component__WEBPACK_IMPORTED_MODULE_24__["TecnologiaInformacaoCadastrosOcorrenciaParecerComponent"]],
        imports: [_ocorrencia_routing_module__WEBPACK_IMPORTED_MODULE_22__["TecnologiaInformacaoCadastrosOcorrenciaModuleRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], ng2_currency_mask__WEBPACK_IMPORTED_MODULE_18__["CurrencyMaskModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__["NgSelectModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_13__["PaginationModule"].forRoot(), ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_14__["TooltipModule"].forRoot(), ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__["TabsModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__["BsDatepickerModule"].forRoot(), src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__["PipesModule"], src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_3__["NotFoundModule"], src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_2__["ModuleWrapperModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_19__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_20__["TemplatesModule"], ng_brazil__WEBPACK_IMPORTED_MODULE_17__["NgBrazil"], angular2_text_mask__WEBPACK_IMPORTED_MODULE_16__["TextMaskModule"]],
        providers: [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_1__["PNotifyService"], {
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_8__["LOCALE_ID"],
          useValue: 'pt-br'
        }]
      })], TecnologiaInformacaoOcorrenciaModule);
      /***/
    },

    /***/
    "SQzo":
    /*!*******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/tecnologia-informacao/contratos/ocorrencia/cadastro/cadastro.component.html ***!
      \*******************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function SQzo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\r\n<app-header appTitle=\"Cadastro de Ocorrências\">\r\n  <button \r\n    [disabled]=\"form.valid === false\"\r\n    (click)=\"postOcorrencia()\"\r\n    >\r\n    Salvar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <form [formGroup]=\"form\" autocomplete=\"off\" [hidden] = \"loading\">\r\n    <fieldset  class=\"col-12\">\r\n      <fieldset class=\"border rounded shadow-sm col-10 pt-2 mx-auto\">\r\n        <legend>Dados da Ocorrência</legend>\r\n        <div class=\"form-row justify-content-center\">\r\n          <div class=\"form-group col-3 pl-0\">\r\n            <div class=\"mb-0 d-flex justify-content-between w-100\" style=\"height: 22px\">\r\n              <label class=\"my-auto\" for=\"CD_ITEM\">Código do Item</label>\r\n              <div class=\"my-auto text-uppercase\" style=\"font-size: 10px\">\r\n                <a\r\n                  class=\"text-primary\"\r\n                  href=\"javascript:void(0)\"\r\n                  (click)=\"openModal(pesquisaDeItens)\">\r\n                  <strong>Selecionar</strong>\r\n                </a>\r\n              </div>\r\n            </div>\r\n            <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"CD_ITEM\"\r\n            placeholder=\"Selecione...\"\r\n            formControlName=\"CD_ITEM\"\r\n            [ngClass]=\"onFieldError('CD_ITEM') + ' ' + onFieldRequired('CD_ITEM')\"\r\n            >\r\n            <invalid-form-control [show]=\"onFieldInvalid('CD_ITEM')\" message=\"Item é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n          <div class=\"form-group col-9 pl-0\">\r\n            <label for=\"NM_ITEM_TIPO\">Tipo do Objeto</label>\r\n            <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"NM_ITEM_TIPO\"\r\n            placeholder=\"Selecione...\"\r\n            formControlName=\"NM_ITEM_TIPO\"\r\n            [ngClass]=\"onFieldError('NM_ITEM_TIPO') + ' ' + onFieldRequired('NM_ITEM_TIPO')\"\r\n            >\r\n            <invalid-form-control [show]=\"onFieldInvalid('NM_ITEM_TIPO')\" message=\"Tipo de item é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row justify-content-center\">\r\n          <div class=\"form-group col-3 pl-0\">\r\n            <label for=\"VL_ITEM\">Valor</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"VL_ITEM\"\r\n              placeholder=\"Selecione...\"\r\n              currencyMask [options]=\"{ align: 'left', prefix: 'R$ ', thousands: '.', decimal: ',' }\"\r\n              formControlName=\"VL_ITEM\"\r\n              [ngClass]=\"onFieldError('VL_ITEM') + ' ' + onFieldRequired('VL_ITEM')\"\r\n            >\r\n            <invalid-form-control [show]=\"onFieldInvalid('VL_ITEM')\" message=\"Valor é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n          <div class=\"form-group col-9 pl-0\">\r\n            <label for=\"NM_MODE\">Modelo do Objeto</label>\r\n            <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"NM_MODE\"\r\n            placeholder=\"Selecione...\"\r\n            formControlName=\"NM_MODE\"\r\n            [ngClass]=\"onFieldError('NM_MODE') + ' ' + onFieldRequired('NM_MODE')\"\r\n            >\r\n            <invalid-form-control [show]=\"onFieldInvalid('NM_MODE')\" message=\"Modelo é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row justify-content-center\">\r\n          <div class=\"form-group col-12 pl-0\">\r\n            <label for=\"NM_PROD\">Produto</label>\r\n            <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"NM_PROD\"\r\n            placeholder=\"Selecione...\"\r\n            formControlName=\"NM_PROD\"\r\n            [ngClass]=\"onFieldError('NM_PROD') + ' ' + onFieldRequired('NM_PROD')\"\r\n            >\r\n            <invalid-form-control [show]=\"onFieldInvalid('NM_PROD')\" message=\"Produto é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row justify-content-center\">\r\n          <div class=\"form-group col-md-3 pl-0\">\r\n            <label for=\"NR_MATR_FUNC\">Matrícula</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"NR_MATR_FUNC\"\r\n              formControlName=\"NR_MATR_FUNC\"\r\n              placeholder=\"Selecione...\"\r\n              [ngClass]=\"onFieldError('NR_MATR_FUNC') + ' ' + onFieldRequired('NR_MATR_FUNC')\"\r\n            />\r\n            <invalid-form-control [show]=\"onFieldInvalid('NR_MATR_FUNC')\" message=\"Matrícula é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n          <div class=\"form-group col-md-9 pl-0\">\r\n            <div class=\"mb-0 d-flex justify-content-between w-100\" style=\"height: 22px\">\r\n              <label class=\"my-auto\" for=\"NM_FUNC\">Funcionário</label>\r\n            </div>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"NM_FUNC\"\r\n              formControlName=\"NM_FUNC\"\r\n              placeholder=\"Selecione...\"\r\n              [ngClass]=\"onFieldError('NM_FUNC') + ' ' + onFieldRequired('NM_FUNC')\"\r\n            />\r\n            <invalid-form-control [show]=\"onFieldInvalid('NM_FUNC')\" message=\"Funcionário é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n      </fieldset>\r\n      <br>\r\n      <fieldset class=\"border rounded shadow-sm col-10 pt-2 mx-auto\">\r\n        <legend>Responsáveis</legend>\r\n        <div formArrayName=\"responsaveis\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col mb-0 d-flex justify-content-between\">\r\n              <div class=\"mtc-title\"></div>\r\n              <div>\r\n                <a\r\n                  class=\"text-secondary\"\r\n                  (click)=\"onAddResponsavel()\"\r\n                  href=\"javascript:void(0)\">\r\n                  <b>Adicionar</b>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\"  *ngFor=\"let item of formResponsaveis.controls; let i = index\" [formGroupName]=\"i\">\r\n            <div class=\"form-group col mb-0\">\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-md-3 pl-0\">\r\n                  <label for=\"NR_MATR_RESP\">Matricula</label>\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    id=\"NR_MATR_RESP\"\r\n                    formControlName=\"NR_MATR_RESP\"\r\n                    placeholder=\"Digite...\"\r\n                    [ngClass]=\"onNestedFieldError('responsaveis', i, 'NR_MATR_RESP') + ' ' + onNestedFieldRequired('responsaveis', i, 'NR_MATR_RESP')\"\r\n                  >\r\n                </div>\r\n                <div class=\"form-group col-md-8 pl-0\">\r\n                  <div class=\"mb-0 d-flex justify-content-between w-100\" style=\"height: 22px\">\r\n                    <label class=\"my-auto\" for=\"NM_RESP\">Responsável</label>\r\n                    <div class=\"my-auto text-uppercase\" style=\"font-size: 10px\">\r\n                      <a\r\n                        class=\"text-primary\"\r\n                        href=\"javascript:void(0)\"\r\n                        (click)=\"openModal(selecionarUsuarios, i)\">\r\n                        <strong>Selecionar</strong>\r\n                      </a>\r\n                    </div>\r\n                  </div>\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    id=\"NM_RESP\"\r\n                    formControlName=\"NM_RESP\"\r\n                    [ngClass]=\"onNestedFieldError('responsaveis', i, 'NM_RESP') + ' ' + onNestedFieldRequired('responsaveis', i, 'NM_RESP')\">\r\n                </div>\r\n                <div class=\"col-1 pt-4 mt-1 d-flex justify-content-center\">\r\n                  <button\r\n                    type=\"button\"\r\n                    class=\"btn-icon\"\r\n                    (click)=\"onDeleteResponsavel(i)\">\r\n                    <i class=\"fas fa-trash\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <br>\r\n      </fieldset>\r\n      <br>\r\n      <fieldset class=\"border rounded shadow-sm col-10 pt-2 mx-auto\">\r\n        <legend>Observação</legend>\r\n        <div class=\"form-row justify-content-center\">\r\n          <div class=\"form-group col\">\r\n            <label for=\"DS_OBSE\" >Observação:</label>\r\n            <textarea \r\n              class=\"form-control\" \r\n              id=\"DS_OBSE\" \r\n              formControlName=\"DS_OBSE\" \r\n              rows=\"3\"\r\n              [ngClass]=\"onFieldError('DS_OBSE') + ' ' + onFieldRequired('DS_OBSE')\">\r\n            </textarea>\r\n            <invalid-form-control [show]=\"onFieldInvalid('DS_OBSE')\" message=\"Observação é obrigatório, com no minímo 10 caracteres.\"></invalid-form-control>\r\n\r\n          </div>\r\n        </div>\r\n        <br>\r\n      </fieldset>\r\n      <br>\r\n      <fieldset class=\"border rounded shadow-sm col-10 pt-2 mx-auto\">\r\n        <legend>Documentos</legend>\r\n        <div class=\"form-group border rounded p-1\">\r\n          <div>\r\n            <label for=\"documento\" class=\"w-100 d-flex justify-content-between align-items-center m-0 py-1\" style=\"cursor: pointer;\">\r\n              <span>Novo Documento</span>\r\n            </label>\r\n            <input\r\n              id=\"documento\"\r\n              type=\"file\"\r\n              (change)=\"appendFile($event.target.files)\"\r\n              class=\"d-none\"\r\n              >\r\n          </div>\r\n        </div>\r\n        <ul>\r\n          <li class=\"d-flex justify-content-between\" *ngFor=\"let item of documentos ; let index = index\">\r\n            <div>{{ item.NM_DOCU | uppercase }}</div>\r\n            <div>\r\n              <a\r\n                [hidden]=\"!item.ID_LOGI_ENMA_FHNC_DOCU\"\r\n                [href]=\"item.LINK\"\r\n                target=\"_blank\"\r\n                class=\"btn-icon-sm mx-2 text-black\"\r\n                tooltip=\"visualizar\"\r\n              >\r\n                <i class=\"far fa-eye\"></i>\r\n              </a>\r\n              <button\r\n                class=\"btn-icon-sm mx-2 hover\"\r\n                tooltip=\"excluir\"\r\n                (click)=\"onRemove(item, index)\"\r\n                >\r\n                <i class=\"fas fa-trash\"></i>\r\n              </button>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n      </fieldset>\r\n    </fieldset>\r\n  </form>\r\n  <ng-template #selecionarUsuarios>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title pull-left\">Pesquisa de Responsáveis</h4>\r\n      <div class=\"d-flex justify-content-center align-items-center\">\r\n        <div class=\"spinner-border text-primary mr-2\" role=\"status\" *ngIf=\"loadingUsuarios\">\r\n          <span class=\"sr-only\">Loading...</span>\r\n        </div>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModal()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <advanced-filter>\r\n        <form [formGroup]=\"formUsuarios\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-3\">\r\n              <label for=\"buscarPor\">BUSCAR POR</label>\r\n              <select\r\n                class=\"form-control custom-select\"\r\n                formControlName=\"buscarPor\"\r\n              >\r\n                <option value=\"matricula\">Matricula</option>\r\n                <option value=\"nome\" selected> Nome Responsável</option>\r\n              </select>\r\n            </div>\r\n\r\n            <div class=\"form-group col-9\">\r\n              <label>TERMO DE PESQUISA</label>\r\n              <div class=\"input-group\">\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  formControlName=\"pesquisa\"\r\n                  >\r\n                  <div class=\"input-group-append\">\r\n                    <span \r\n                      [tooltip]=\"formUsuarios.valid == false ? 'Digite um termo de pesquisa':''\"\r\n                      container=\"body\"\r\n                      placement =\"left\"\r\n                    >\r\n                      <button\r\n                      style=\"height: 25px;\"\r\n                        [disabled]=\"formUsuarios.valid == false\"\r\n                        class=\"input-group-text hover\"\r\n                        (click)=\"getUsuarios()\"\r\n                        >\r\n                        <i class=\"fas fa-search\"></i>\r\n                      </button>\r\n                    </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </advanced-filter>\r\n      <custom-table *ngIf=\"!loadingUsuarios && !noUsuarios\" class=\"text-center\">\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n            <th>Matricula</th>\r\n            <th>Nome Responsável</th>\r\n            <th></th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let usuario of usuarios | slice : begin : end; let i = index\">\r\n            <td>{{ usuario.matricula }}</td>\r\n            <td>{{ usuario.nome }}</td>\r\n            <td>\r\n              <button\r\n                class=\"btn-icon-sm\"\r\n                tooltip=\"Salvar Responsável\"\r\n                container=\"body\"\r\n                (click)=\"setUsuarios(usuario);modalRef.hide()\"\r\n              >\r\n                <i class=\"far fa-save\"></i>\r\n              </button>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n      <div *ngIf=\"totalItems > itemsPerPage\">\r\n        Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\r\n        <pagination\r\n          [maxSize]=\"10\"\r\n          [totalItems]=\"totalItems\"\r\n          (pageChanged)=\"onPageChanged($event)\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPage\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\">\r\n        </pagination>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n  <ng-template #pesquisaDeItens>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title pull-left\">Pesquisa de Itens</h4>\r\n      <div class=\"d-flex justify-content-center align-items-center\">\r\n        <div class=\"spinner-border text-primary mr-2\" role=\"status\" *ngIf=\"loadingItens\">\r\n          <span class=\"sr-only\">Loading...</span>\r\n        </div>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModal()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <advanced-filter>\r\n        <form [formGroup]=\"formPesquisaItem\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col\">\r\n              <label for=\"buscarPor\">BUSCAR POR</label>\r\n              <select\r\n                class=\"form-control custom-select\"\r\n                formControlName=\"buscarPor\"\r\n              >\r\n                <option value=\"ID_TECN_INFO_ITEM\" selected>ID</option>\r\n                <option value=\"CD_ITEM\">Código/Nº Série</option>\r\n                <option value=\"NM_PROD\">Produto</option>\r\n                <option value=\"NM_ITEM_TIPO\">Tipo de Item</option>\r\n                <option value=\"NM_MODE\">Modelo</option>\r\n                <option value=\"DS_CONT\">Contrato</option>\r\n                <option value=\"NR_MATR\">Matrícula do Usuário</option>\r\n                <option value=\"NM_USUA\">Nome do Usuário</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"form-group col\">\r\n              <label>TERMO DE PESQUISA</label>\r\n              <div class=\"input-group\">\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  formControlName=\"pesquisa\"\r\n                  (keyup.enter)=\"getItens()\"\r\n                >\r\n                <div class=\"input-group-append\">\r\n                  <span\r\n                    class=\"input-group-text hover\"\r\n                    (click)=\"getItens()\"\r\n                  >\r\n                    <i class=\"fas fa-search\"></i>\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </advanced-filter>\r\n      <custom-table *ngIf=\"!loadingItens && (itens.length > 0)\">\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n            <th>ID</th>\r\n            <th>Código/Nº Série</th>\r\n            <th>Produto</th>\r\n            <th></th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let item of itens\">\r\n            <td>{{ item.ID_TECN_INFO_ITEM }}</td>\r\n            <td>{{ item.CD_ITEM }}</td>\r\n            <td>{{ item.NM_PROD }}</td>\r\n            <td>\r\n              <button\r\n                class=\"btn-icon-sm\"\r\n                tooltip=\"Salvar Item\"\r\n                container=\"body\"\r\n                (click)=\"setItem(item);modalRef.hide()\"\r\n              >\r\n                <i class=\"far fa-save\"></i>\r\n              </button>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n    </div>\r\n  </ng-template>\r\n</app-body>";
      /***/
    },

    /***/
    "Vh74":
    /*!*************************************************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/contratos/ocorrencia/parecer/parecer.component.ts ***!
      \*************************************************************************************************/

    /*! exports provided: TecnologiaInformacaoCadastrosOcorrenciaParecerComponent */

    /***/
    function Vh74(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoCadastrosOcorrenciaParecerComponent", function () {
        return TecnologiaInformacaoCadastrosOcorrenciaParecerComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_parecer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./parecer.component.html */
      "G4h3");
      /* harmony import */


      var _parecer_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./parecer.component.scss */
      "XYEl");
      /* harmony import */


      var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/modules/confirm-modal/confirm-modal.service */
      "FOez");
      /* harmony import */


      var _services_funcionarios_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../services/funcionarios.service */
      "jMbs");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _services_ocorrencia_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../services/ocorrencia.service */
      "S1or"); //import { PageChangedEvent } from 'ngx-bootstrap/pagination/ngx-bootstrap-pagination';
      //Services
      //Bootstrap
      //Angular
      //rxjs
      //interfaces


      var TecnologiaInformacaoCadastrosOcorrenciaParecerComponent = /*#__PURE__*/function () {
        /* Pagination */
        function TecnologiaInformacaoCadastrosOcorrenciaParecerComponent(formBuilder, pnotify, modalService, localeService, ocorrenciaService, funcionarioService, confirmModalService, atividadesService) {
          _classCallCheck(this, TecnologiaInformacaoCadastrosOcorrenciaParecerComponent);

          this.formBuilder = formBuilder;
          this.pnotify = pnotify;
          this.modalService = modalService;
          this.localeService = localeService;
          this.ocorrenciaService = ocorrenciaService;
          this.funcionarioService = funcionarioService;
          this.confirmModalService = confirmModalService;
          this.atividadesService = atividadesService;
          this.fecharModal = new _angular_core__WEBPACK_IMPORTED_MODULE_10__["EventEmitter"]();
          this.breadCrumbTree = [];
          this.formData = [];
          this.usuarios = [];
          this.noUsuarios = true;
          this.parecer = [];
          this.noResponsavel = [];
          this.disabledForm = false;
          this.loading = false;
          this.loadingNavBar = false;
          this.documentos = [];
          /* Pagination */

          this.itemsPerPage = 10;
          this.totalItems = 10;
          this.currentPage = 1;
          this.begin = 0;
          this.end = 10;
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

        _createClass(TecnologiaInformacaoCadastrosOcorrenciaParecerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registrarAcesso();
            this.setFormBuilder();
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.modalRef != undefined) {
              this.modalRef.hide();
            }
          }
        }, {
          key: "getResponsaveis",
          value: function getResponsaveis(params) {
            var _this = this;

            this.loadingNavBar = true;
            this.ocorrenciaService.getResponsaveis(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () {
              _this.loadingNavBar = false;
            })).subscribe(function (response) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var _this2 = this;

                var responsaveis, promise;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        if (!(response.status !== 200)) {
                          _context.next = 2;
                          break;
                        }

                        return _context.abrupt("return");

                      case 2:
                        responsaveis = response['body']['data'];

                        promise = function promise() {
                          return responsaveis.forEach(function () {
                            return _this2.onAddResponsavel();
                          });
                        };

                        _context.next = 6;
                        return Promise.resolve(promise());

                      case 6:
                        this.form.get('responsaveis').patchValue(responsaveis);

                      case 7:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            }, function (error) {
              _this.pnotify.error('Não foi encontrado nenhum material');
            });
          } // }
          //formulario

        }, {
          key: "setFormBuilder",
          value: function setFormBuilder() {
            if (this.form == undefined) {
              this.form = this.formBuilder.group({
                TP_RESP: ['EMPRESA', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required]],
                DS_STAT_CONC: [null],
                DS_OBSE: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].minLength(10)]],
                DT_DEVO_APRE: [null],
                VL_DSCO: [null],
                NM_EMPR_REPA: [null],
                CONT_EMPR_REPA: [null],
                ID_TEIN_OCOR: [null],
                ID_TEIN_OCPR: [null],
                IN_STAT: [null],
                NR_MATR: [null],
                NM_USUA: [null],
                DT_INCL: [null],
                responsaveis: this.formBuilder.array([])
              });
            }

            if (this.formUsuarios == undefined) {
              this.formUsuarios = this.formBuilder.group({
                buscarPor: ['nome'],
                pesquisa: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required],
                matricula: [null],
                nome: [null]
              });
            }
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
          key: "getUsuarios",
          value: function getUsuarios(params) {
            var _this3 = this;

            var _params = params !== null && params !== void 0 ? params : {};

            _params.situacao = '1';
            _params.qtItensPagina = 100;
            var _obj = this.formUsuarios.value;
            this.loadingUsuarios = true;
            if (_obj['pesquisa']) _params[_obj['buscarPor']] = _obj['pesquisa'];
            this.funcionarioService.getUsuarios(_params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () {
              _this3.loadingUsuarios = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this3.usuarios = response.body['usuarios'];
                _this3.totalItems = response.body['usuarios'].length;
                _this3.noUsuarios = false;
              } else {
                _this3.pnotify.notice('Nenhum registro encontrado!');

                _this3.usuarios = [];
                _this3.noUsuarios = true;
              }
            }, function (error) {
              _this3.pnotify.error();

              _this3.usuarios = [];
            });
          }
        }, {
          key: "setUsuarios",
          value: function setUsuarios(usuario) {
            var fg = this.form.get('responsaveis');
            fg.controls[this.index].get('NR_MATR_RESP').patchValue(usuario.matricula);
            fg.controls[this.index].get('ID_RESP').patchValue(usuario.id);
            fg.controls[this.index].get('NM_RESP').patchValue(usuario.nome);
          }
        }, {
          key: "postResponsaveis",
          value: function postResponsaveis(id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this4 = this;

              var request, responsaveis, promise;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      request = [];
                      responsaveis = this.formResponsaveis.getRawValue();

                      if (responsaveis) {
                        _context2.next = 4;
                        break;
                      }

                      return _context2.abrupt("return");

                    case 4:
                      promise = function promise() {
                        responsaveis.forEach(function (responsavel) {
                          var params = Object.assign(Object.assign({}, responsavel), {
                            'ID_TEIN_OCPR': id
                          });
                          request.push(_this4.ocorrenciaService.postResponsaveis(params));
                        });
                      };

                      _context2.next = 7;
                      return Promise.resolve(promise());

                    case 7:
                      Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["forkJoin"])(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () {
                        _this4.loading = false;
                        _this4.loadingNavBar = false;
                      })).subscribe(function (responses) {
                        _this4.pnotify.success('Responsáveis cadastrados com sucesso');
                      }, function (error) {
                        try {
                          _this4.pnotify.error(error.error.message);
                        } catch (error) {
                          _this4.pnotify.error();
                        }
                      });

                    case 8:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "onDeleteResponsavel",
          value: function onDeleteResponsavel(index) {
            var responsaveis = this.formResponsaveis.at(index).value;
            responsaveis = Object.assign(Object.assign({}, responsaveis), {
              'IN_STAT': '0'
            });
            this.formResponsaveis.removeAt(index);
            return;
          }
        }, {
          key: "postParecer",
          value: function postParecer() {
            var _this5 = this;

            this.loadingNavBar = true;
            var params = JSON.parse(JSON.stringify(this.form.value));
            delete params['responsaveis'];
            this.ocorrenciaService.postParecer(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () {
              _this5.loading = false;
              _this5.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                var idParecer = response.body['data'];

                _this5.postResponsaveis(idParecer);

                _this5.postDocumentosParecer(idParecer);

                _this5.fecharModal.emit(true);

                _this5.pnotify.success();
              } else {
                _this5.pnotify.error();
              }
            }, function (error) {
              try {
                _this5.pnotify.error(error.error.message);
              } catch (error) {
                _this5.pnotify.error();
              }
            });
          }
        }, {
          key: "onAddResponsavel",
          value: function onAddResponsavel() {
            this.formResponsaveis.push(this.formBuilder.group({
              ID_TEIN_OCPR: [null],
              ID_TEIN_OCOR: [null],
              ID_RESP: [null],
              NR_MATR_RESP: [{
                value: null,
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required]],
              NM_RESP: [{
                value: null,
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required]]
            }));
          }
        }, {
          key: "openModal",
          value: function openModal(template, index) {
            this.index = index;
            this.modalRef = this.modalService.show(template, {
              animated: false,
              "class": 'modal-xl'
            });
          }
        }, {
          key: "hideModal",
          value: function hideModal() {
            this.modalRef.hide();
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
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]();
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
          key: "onPageChanged",
          value: function onPageChanged(event) {
            this.begin = (event.page - 1) * event.itemsPerPage;
            this.end = event.page * event.itemsPerPage;
          }
        }, {
          key: "postDocumentosParecer",
          value: function postDocumentosParecer(idParecer) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this6 = this;

              var requests, _params, promise;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      requests = [];

                      if (!(this.formData.length === 0)) {
                        _context3.next = 3;
                        break;
                      }

                      return _context3.abrupt("return", requests);

                    case 3:
                      _params = {
                        ID_TEIN_OCPR: idParecer,
                        ID_TEIN_OCOR: this.form.get('ID_TEIN_OCOR').value
                      };

                      promise = function promise() {
                        _this6.formData.forEach(function (element) {
                          requests.push(_this6.ocorrenciaService.postDocumentoParecer(element, _params));
                        });
                      };

                      Promise.resolve(promise());
                      Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["forkJoin"])(requests).subscribe(function (responses) {
                        responses.forEach(function (response) {
                          if (response.status === 200) {
                            _this6.pnotify.success();
                          } else {
                            _this6.pnotify.error();
                          }
                        });
                      }, function (error) {
                        _this6.pnotify.error();
                      });
                      return _context3.abrupt("return", requests);

                    case 8:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "putDocumentoParecer",
          value: function putDocumentoParecer(documento) {
            var _this7 = this;

            var type = 'inactivate',
                title = 'Confirmar inativação',
                message = 'Deseja realmente prosseguir com a inativação do registro?',
                cancelTxt = 'Cancelar',
                okTxt = 'Confirmar';
            this.confirmModalService.showConfirm(type, title, message, cancelTxt, okTxt).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["switchMap"])(function (result) {
              if (!result) return rxjs__WEBPACK_IMPORTED_MODULE_12__["EMPTY"];
              _this7.loadingNavBar = true;
              return _this7.ocorrenciaService.putDocumento(documento);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () {
              _this7.loadingNavBar = false;
            })).subscribe(function (response) {
              _this7.pnotify.success('Documento atualizado com sucesso');

              _this7.getDocumentoParecer({
                ID_TEIN_OCPR: _this7.form.get('ID_TEIN_OCPR').value,
                IN_STAT: '1'
              });
            });
          }
        }, {
          key: "getDocumentoParecer",
          value: function getDocumentoParecer(params) {
            var _this8 = this;

            this.ocorrenciaService.getDocumentoParecer(params).subscribe(function (response) {
              if (response.status === 200) {
                _this8.documentos = response.body['data'];
              } else {
                _this8.documentos = [];
              }
            }, function (error) {
              _this8.documentos = [];
            });
          }
        }, {
          key: "onRemove",
          value: function onRemove(documento, index) {
            if (!documento.hasOwnProperty('ID_TEIF_DOCU')) {
              this.formData = this.formData.filter(function (element) {
                return element.get('file')['name'] != documento.NM_DOCU;
              });
            }

            documento.IN_STAT = '0';
            this.documentos.splice(index, 1);

            if (documento.hasOwnProperty('ID_TEIF_DOCU')) {
              this.putDocumentoParecer(documento);
            }
          }
        }, {
          key: "appendFile",
          value: function appendFile(files) {
            if (files.length === 0) return;
            var fd = new FormData();
            fd.append('file', files[0]);
            this.formData.push(fd);
            this.documentos.push({
              NM_DOCU: files[0]['name']
            });
          }
        }, {
          key: "ocorrenciaId",
          set: function set(id) {
            if (!id) return;
            this.setFormBuilder();
            this.form.get('ID_TEIN_OCOR').setValue(id);
          }
        }, {
          key: "formResponsaveis",
          get: function get() {
            return this.form.get('responsaveis');
          }
        }]);

        return TecnologiaInformacaoCadastrosOcorrenciaParecerComponent;
      }();

      TecnologiaInformacaoCadastrosOcorrenciaParecerComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"]
        }, {
          type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["BsLocaleService"]
        }, {
          type: _services_ocorrencia_service__WEBPACK_IMPORTED_MODULE_14__["TecnologiaInformacaoCadastroOcorrenciaService"]
        }, {
          type: _services_funcionarios_service__WEBPACK_IMPORTED_MODULE_4__["TecnologiaInformacaoFuncionariosService"]
        }, {
          type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_3__["ConfirmModalService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__["AtividadesService"]
        }];
      };

      TecnologiaInformacaoCadastrosOcorrenciaParecerComponent.propDecorators = {
        ocorrenciaId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"]
        }],
        fecharModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Output"]
        }]
      };
      TecnologiaInformacaoCadastrosOcorrenciaParecerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"])({
        selector: 'tecnologia-informacao-contratos-ocorrencia-parecer',
        template: _raw_loader_parecer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_parecer_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["BsLocaleService"], _services_ocorrencia_service__WEBPACK_IMPORTED_MODULE_14__["TecnologiaInformacaoCadastroOcorrenciaService"], _services_funcionarios_service__WEBPACK_IMPORTED_MODULE_4__["TecnologiaInformacaoFuncionariosService"], src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_3__["ConfirmModalService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__["AtividadesService"]])], TecnologiaInformacaoCadastrosOcorrenciaParecerComponent);
      /***/
    },

    /***/
    "XYEl":
    /*!***************************************************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/contratos/ocorrencia/parecer/parecer.component.scss ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function XYEl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGVjbm9sb2dpYS1pbmZvcm1hY2FvL2NvbnRyYXRvcy9vY29ycmVuY2lhL3BhcmVjZXIvcGFyZWNlci5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "gVRY":
    /*!*************************************************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/contratos/ocorrencia/ocorrencia-routing.module.ts ***!
      \*************************************************************************************************/

    /*! exports provided: TecnologiaInformacaoCadastrosOcorrenciaModuleRoutingModule */

    /***/
    function gVRY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoCadastrosOcorrenciaModuleRoutingModule", function () {
        return TecnologiaInformacaoCadastrosOcorrenciaModuleRoutingModule;
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
      "zvcX");
      /* harmony import */


      var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./cadastro/cadastro.component */
      "qxKm"); //components


      var routes = [{
        path: '',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_3__["TecnologiaInformacaoCadastrosOcorrenciaListaComponent"]
      }, {
        path: 'novo',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__["TecnologiaInformacaoCadastrosOcorrenciaCadastroComponent"]
      }, {
        path: ':id',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__["TecnologiaInformacaoCadastrosOcorrenciaCadastroComponent"]
      }];

      var TecnologiaInformacaoCadastrosOcorrenciaModuleRoutingModule = function TecnologiaInformacaoCadastrosOcorrenciaModuleRoutingModule() {
        _classCallCheck(this, TecnologiaInformacaoCadastrosOcorrenciaModuleRoutingModule);
      };

      TecnologiaInformacaoCadastrosOcorrenciaModuleRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TecnologiaInformacaoCadastrosOcorrenciaModuleRoutingModule);
      /***/
    },

    /***/
    "qFqN":
    /*!*************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/tecnologia-informacao/contratos/ocorrencia/lista/lista.component.html ***!
      \*************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function qFqN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loadingNavBar\"></loader-spinner-navbar>\r\n<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n<app-header appTitle=\"Ocorrências\">\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onExport()\"\r\n    [disabled]=\"loadingNavBar || noResult\">\r\n    Exportar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onReset()\">\r\n    Limpar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    [routerLink]=\"['../novo']\">\r\n    Adicionar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onFilter()\">\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loading\">\r\n  <div class=\"row\" #scrollToFilter>\r\n    <div class=\"col\">\r\n      <advanced-filter>\r\n        <form [formGroup]=\"form\" autocomplete=\"off\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-2 pl-0\">\r\n              <label for=\"ID_TEIN_OCOR\">ID</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"ID_TEIN_OCOR\"\r\n                formControlName=\"ID_TEIN_OCOR\"\r\n                placeholder=\"Digite...\"\r\n                (keydown.enter)=\"onFilter()\">\r\n            </div>\r\n            <div class=\"form-group col-lg-2 pl-0\">\r\n              <label for=\"IN_FINA\">Status da Ocorrência</label>\r\n              <ng-select\r\n                [searchable]=\"true\"\r\n                [clearable]=\"true\"\r\n                [items]=\"status\"\r\n                [virtualScroll]=\"true\"\r\n                labelForId=\"status\"\r\n                bindLabel=\"nome\"\r\n                bindValue=\"cod\"\r\n                id=\"status\"\r\n                (change)=\"onFilter()\"\r\n                formControlName=\"IN_FINA\"\r\n                placeholder=\"Selecione...\"\r\n                >\r\n                <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\"> {{item.nome}}\r\n                </ng-template>\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"form-group col-lg-2 pl-0\">\r\n              <label for=\"IN_STAT\">Situação</label>\r\n              <ng-select\r\n                [searchable]=\"true\"\r\n                [clearable]=\"true\"\r\n                [items]=\"tipos\"\r\n                [virtualScroll]=\"true\"\r\n                labelForId=\"tipo\"\r\n                bindLabel=\"nome\"\r\n                bindValue=\"cod\"\r\n                id=\"tipo\"\r\n                (change)=\"onFilter()\"\r\n                formControlName=\"IN_STAT\"\r\n                placeholder=\"Selecione...\"\r\n                >\r\n                <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\"> {{item.nome}}\r\n                </ng-template>\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"form-group col-lg-2 pl-0\">\r\n              <label for=\"NR_MATR\">Matricula</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                placeholder=\"Digite...\"\r\n                id=\"NR_MATR\"\r\n                formControlName=\"NR_MATR\"\r\n                (keydown.enter)=\"onFilter()\">\r\n            </div>\r\n            <div class=\"form-group col-lg-4 pl-0\">\r\n              <label for=\"NM_USUA\">Funcionario</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                placeholder=\"Digite...\"\r\n                id=\"NM_USUA\"\r\n                formControlName=\"NM_USUA\"\r\n                (keydown.enter)=\"onFilter()\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-2 pl-0\">\r\n              <label for=\"CD_ITEM\">Código/Nº Série</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                placeholder=\"Digite...\"\r\n                id=\"CD_ITEM\"\r\n                formControlName=\"CD_ITEM\"\r\n                (keydown.enter)=\"onFilter()\">\r\n            </div>\r\n            <div class=\"form-group col-lg-8 pl-0\">\r\n              <label for=\"produtos\">Produtos</label>\r\n              <ng-select\r\n                [searchable]=\"true\"\r\n                [clearable]=\"true\"\r\n                [items]=\"produtos\"\r\n                [virtualScroll]=\"true\"\r\n                dropdownPosition=\"bottom\"\r\n                placeholder=\"Selecione...\"\r\n                [loading]=\"loadingProduto\"\r\n                labelForId=\"ID_TEIN_ESTO_PROD\"\r\n                bindLabel=\"NM_PROD\"\r\n                bindValue=\"ID_TEIN_ESTO_PROD\"\r\n                id=\"ID_TEIN_ESTO_PROD\"\r\n                formControlName=\"ID_TEIN_ESTO_PROD\">\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"form-group col-lg-2 pl-0\">\r\n              <label>Registros</label>\r\n              <select \r\n                class=\"form-control custom-select\"\r\n                (keydown.enter)=\"onFilter()\"\r\n                formControlName=\"TT_REGI_PAGI\"\r\n                (change)=\"setPageRegistros($event.target.value)\"  \r\n              >\r\n                <option value=\"10\">10</option>\r\n                <option value=\"25\">25</option>\r\n                <option value=\"50\">50</option>\r\n                <option value=\"100\">100</option>\r\n                <option value=\"250\">250</option>\r\n                <option value=\"500\">500</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </advanced-filter>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <subtitles\r\n        [data]=\"subtitles\"\r\n        [show]=\"!noResult\">\r\n      </subtitles>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-12 p-0\" [hidden] = \"loading || noResult\">\r\n    <div>\r\n      <custom-table [config]=\"tableConfig\" class=\"text-center\" *ngIf=\"!noResult\">\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n            <th scope=\"col\">ID </th>\r\n            <th scope=\"col\">Produto</th>\r\n            <th scope=\"col\">Data Cadastro</th>\r\n            <th scope=\"col\">Status da Ocorrência</th>\r\n            <th scope=\"col\" style=\"width:160px\"></th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let ocorrencia of ocorrencias | slice : begin : end; let i = index\">\r\n            <td [ngClass]=\"ocorrencia.IN_STAT == '1' ? 'border-success' : 'border-danger'\">\r\n            {{ocorrencia.ID_TEIN_OCOR}}\r\n            </td>\r\n            <td *ngIf=\"ocorrencia.NM_PROD != null\">{{ ocorrencia.NM_PROD }} ({{ocorrencia.CD_ITEM }}) </td>\r\n            <td *ngIf=\"ocorrencia.NM_PROD == null\">NÃO INFORMADO</td>\r\n            <td>{{ ocorrencia.DT_INCL | date: 'dd/MM/yyyy HH:mm' }}</td>\r\n            <td *ngIf= \"ocorrencia.IN_FINA != 1\"  >\r\n              <i class=\"text-warning fas fa-minus-circle mr-3\"></i>\r\n              <span class=\"nowrap\">EM ANDAMENTO</span>\r\n            </td>\r\n            <td *ngIf= \"ocorrencia.IN_FINA == 1\"  >\r\n              <i class=\"text-success fas fa-check-circle mr-3\"></i>\r\n              <span class=\"nowrap\">CONCLUÍDA</span>\r\n            </td>\r\n            <td class=\"align-middle\" style=\"width:70px\">\r\n              <span class=\"mr-3\" tooltip=\" Gerar Termo\" placement=\"left\" container=\"body\" >\r\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onTermo(ocorrencia)\">\r\n                  <i class=\"fas fa-file\" *ngIf=\"ocorrencia.ID_TECN_INFO_ITEM != null \" placement=\"right\"></i>\r\n                </button>\r\n              </span>\r\n              <span class=\"mr-3\" [tooltip]=\"ocorrencia.IN_STAT == 1 ? 'Inativar' : 'Ativar'\" placement=\"left\" container=\"body\">\r\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"changeType(ocorrencia)\">\r\n                  <i [ngClass]=\"ocorrencia.IN_STAT == '1' ? 'fas fa-toggle-on' : 'fas fa-toggle-off'\"></i>\r\n                </button>\r\n              </span>\r\n              <span class=\"mr-3\" tooltip=\"Editar\" placement=\"left\" container=\"body\">\r\n                <button type=\"button\" class=\"btn-icon-sm\" [disabled]=\"ocorrencia.IN_FINA == 1\" [routerLink]=\"['./../', ocorrencia.ID_TEIN_OCOR]\">\r\n                  <i class=\"fas fa-edit\"></i>\r\n                </button>\r\n              </span>\r\n              <span class=\"mr-3\"  tooltip=\"Detalhe da Ocorrência\" placement=\"left\" container=\"body\" >\r\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"openModal(detalhesOcorrencia, ocorrencia)\">\r\n                  <i class=\"fas fa-search\"></i>                  \r\n                </button>\r\n              </span>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n    </div>\r\n    <div *ngIf=\"totalItems > itemsPerPage\">\r\n      Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\r\n      <pagination\r\n        [maxSize]=\"10\"\r\n        [totalItems]=\"totalItems\"\r\n        (pageChanged)=\"onPageChanged($event)\"\r\n        [(itemsPerPage)]=\"itemsPerPage\"\r\n        [boundaryLinks]=\"true\"\r\n        [(ngModel)]=\"currentPage\"\r\n        previousText=\"&lsaquo;\"\r\n        nextText=\"&rsaquo;\"\r\n        firstText=\"&laquo;\"\r\n        lastText=\"&raquo;\">\r\n      </pagination>\r\n    </div>\r\n  </div>\r\n  <div [hidden]=\"loading || !noResult\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 80%\">\r\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n  </div>\r\n  <ng-template #detalhesOcorrencia >\r\n    <div class=\"modal-header\" [hidden]=\"hiddenModal\">\r\n      <h4 class=\"modal-title pull-left\">Detalhes da Ocorrência  -  Nº{{ocorrenciaSelecionada?.ID_TEIN_OCOR}}</h4>\r\n      <div class=\"d-flex justify-content-center align-items-center\">\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModal()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal-body\" [hidden]=\"hiddenModal\" >\r\n      <tabset>\r\n        <tab heading=\"Dados cadastrais\">\r\n          <div class=\"border-right border-left border-bottom px-3 pt-3\">\r\n            <div>\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-lg-6\">\r\n                  <label>Funcionário</label>\r\n                  <div *ngIf=\"ocorrenciaSelecionada?.NR_MATR == null\">NÃO INFORMADO</div>\r\n                  <div *ngIf=\"ocorrenciaSelecionada?.NR_MATR != null\">{{ocorrenciaSelecionada?.NR_MATR}} - {{ocorrenciaSelecionada?.NM_USUA}}</div>\r\n                </div>\r\n                <div class=\"form-group col-lg-6\">\r\n                  <label>Centro de Custo</label>\r\n                  <div *ngIf=\"ocorrenciaSelecionada?.CD_CCU == null\">NÃO INFORMADO</div>\r\n                  <div *ngIf=\"ocorrenciaSelecionada?.CD_CCU != null\">{{ocorrenciaSelecionada?.CD_CCU}} - {{ocorrenciaSelecionada?.NM_CCU}}</div>\r\n                </div>\r\n                \r\n              </div>\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-lg\">\r\n                  <label>Item</label>\r\n                  <div *ngIf=\"ocorrenciaSelecionada?.CD_ITEM == null\">NÃO INFORMADO</div>\r\n                  <div *ngIf=\"ocorrenciaSelecionada?.CD_ITEM != null\">{{ ocorrenciaSelecionada?.NM_ITEM_TIPO }} - {{ ocorrenciaSelecionada?.NM_MODE }} ({{ocorrenciaSelecionada?.CD_ITEM }})</div>\r\n                </div>\r\n                <div class=\"form-group col-3 mb-0 d-flex justify-content-between\" *ngIf=\"ocorrenciaSelecionada?.IN_FINA == 0 \">\r\n                  <button \r\n                    type=\"button\" \r\n                    class=\"btn btn-default btn-lg m-2 pull-right\"\r\n                    (click)=\"finalizarOcorrencia(ocorrenciaSelecionada)\"\r\n                  >\r\n                  <span aria-hidden=\"true\">\r\n                    <i class=\" text-success fas fa-check-circle\"></i>\r\n                  </span>Concluir Ocorrência\r\n                  </button>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-lg-12\">\r\n                  <label>Observação</label>\r\n                  <div *ngIf=\"ocorrenciaSelecionada?.DS_OBSE == null\">NÃO INFORMADO</div>\r\n                  <div *ngIf=\"ocorrenciaSelecionada?.DS_OBSE != null\">{{ocorrenciaSelecionada?.DS_OBSE}}</div>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-lg-12\">\r\n                  <label>Responsáveis</label>\r\n                </div>\r\n              </div>\r\n              <div [hidden]=\"!loadingResponsaveis\" class=\"col-lg-12 text-muted \">\r\n                <p><strong>Buscando os responsáveis da ocorrência...</strong></p>\r\n              </div>\r\n              <custom-table class=\"text-center\" *ngIf=\"!loadingResponsaveis && !noResponsaveis\">\r\n                <ng-template #thead let-thead>\r\n                  <tr>\r\n                    <th>Matricula </th>\r\n                    <th>Nome</th>\r\n                  </tr>\r\n                </ng-template>\r\n                <ng-template #tbody let-tbody>\r\n                  <tr *ngFor=\"let item of responsaveis\">\r\n                    <td>{{item.NR_MATR_RESP}}</td>\r\n                    <td>{{item.NM_RESP}}</td>\r\n                  </tr>\r\n                </ng-template>\r\n              </custom-table>\r\n              <div [hidden]=\"loadingResponsaveis || !noResponsaveis\" class=\"text-center d-flex justify-content-center align-items-center pb-3\">\r\n                <empty-result message=\"Nenhum responsável encontrado\"></empty-result>\r\n              </div>\r\n              <hr>\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col\">\r\n                  <label>Usuário Responsável Pelo Cadastro</label>\r\n                  <div *ngIf=\"ocorrenciaSelecionada?.NR_MATR == null\">NÃO INFORMADO</div>\r\n                  <div *ngIf=\"ocorrenciaSelecionada?.NR_MATR != null\">{{ocorrenciaSelecionada?.NR_MATR}} - {{ ocorrenciaSelecionada?.NM_USUA }}</div>\r\n                </div>\r\n                <div class=\"form-group col\">\r\n                  <label>Data do Cadastro</label>\r\n                  <div *ngIf=\"ocorrenciaSelecionada?.DT_INCL == null\">NÃO INFORMADO</div>\r\n                  <div *ngIf=\"ocorrenciaSelecionada?.DT_INCL != null\">{{ ocorrenciaSelecionada?.DT_INCL | date: 'dd/MM/yyyy HH:mm'}}</div>\r\n                </div>\r\n                <div class=\"form-group col\" *ngIf=\"ocorrenciaSelecionada?.DT_ATUA != null\">\r\n                  <label>Data da Atualização</label>\r\n                  <div *ngIf=\"ocorrenciaSelecionada?.DT_ATUA == null\">NÃO INFORMADO</div>\r\n                  <div *ngIf=\"ocorrenciaSelecionada?.DT_ATUA != null\">{{ ocorrenciaSelecionada?.DT_ATUA | date: 'dd/MM/yyyy HH:mm'}}</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </tab>\r\n        <tab heading=\"Pareceres\">\r\n          <div class=\"border-right border-left border-bottom px-3 pt-3\" >\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col justify-content-between text-center m-0\" *ngIf=\"ocorrenciaSelecionada?.IN_FINA == 1\">\r\n                <blockquote class=\"blockquote text-center m-0\">\r\n                  <p class=\"mb-0 text-success\"> OCORRÊNCIA CONCLUÍDA </p>\r\n                  <footer class=\"blockquote-footer\">Essa ocorrência foi concluída, sendo assim não é permitido inserir novo parecer!</footer>\r\n                </blockquote>\r\n              </div>\r\n              <div class=\"form-group col-10 mb-0 d-flex justify-content-between\" *ngIf=\"ocorrenciaSelecionada?.IN_FINA == 0\">\r\n              </div>\r\n              <div class=\"form-group col mb-0 d-flex justify-content-between\" *ngIf=\"ocorrenciaSelecionada?.IN_FINA == 0 \">\r\n                <button \r\n                  type=\"button\" \r\n                  class=\"btn btn-default btn-lg m-2 pull-right\"\r\n                  (click)=\"openModalParecer(modalPareceres)\"\r\n                  [disabled]=\"ocorrenciaSelecionada?.IN_RESP == 0\"\r\n                >\r\n                <span aria-hidden=\"true\">\r\n                  <i class=\" text-success fas fa-plus\"></i>\r\n                </span>Adicionar Parecer\r\n                </button>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n            <div [hidden]=\"!loadingPareceres\" class=\"col-lg-12 text-muted \">\r\n              <p><strong>Buscando pareceres da ocorrência...</strong></p>\r\n            </div>\r\n            <div class=\"ScrollPareceres\" *ngIf=\"!noPareceres\">\r\n              <div class=\"col-md-12 mx-2 pb-3 \" data-spy=\"scroll\" *ngFor=\"let parecer of pareceres\">\r\n                <div class=\"card mr-3\"  *ngIf=\"!loadingDocumentosParecer && !loadingResponsaveisParecer\">\r\n                  <div class=\"card-body p-2\">\r\n                    <h5 class=\"card-title mb-1\" >{{parecer.DS_OBSE}}</h5>\r\n                    <ul class=\"pl-0\">\r\n                      <li class=\"d-flex\" *ngFor=\"let item of documentosParecer[parecer.ID_TEIN_OCPR];\">\r\n                        <div class=\"d-flex\">\r\n                          <div>\r\n                            <strong class=\"ml-2\">{{ item.NM_DOCU }}</strong>\r\n                          </div>\r\n                          <div class=\"ml-4\" *ngIf=\"item.TP_DOCU == 'DOCUMENTO'\">\r\n                            <a href=\"{{ item.LINK }}\" target=\"_blank\" class=\"btn-icon-sm\">\r\n                              <i class=\"fas fa-download\"></i>\r\n                            </a>\r\n                          </div>\r\n                          <div class=\"ml-4\" *ngIf=\"item.TP_DOCU == 'IMAGEM'\">\r\n                            <a href=\"{{ item.LINK }}\" target=\"_blank\" class=\"btn-icon-sm\">\r\n                              <i class=\"fas fa-eye\"></i>\r\n                            </a>\r\n                          </div>\r\n                        </div>\r\n                      </li>\r\n                    </ul>\r\n                    <div *ngIf=\"!noResponsaveisParecer\">\r\n                      <ul class=\"pl-0 m-0\">\r\n                        <li class=\"d-flex\" *ngFor=\"let responsavel of responsaveisParecer[parecer.ID_TEIN_OCPR];\">\r\n                          <div class=\"d-flex\">\r\n                            <div>\r\n                              <p class=\"card-text ml-2\">{{parecer.NM_USUA | name }} atribuiu a ficha de não conformidade para: <strong>{{ responsavel.NR_MATR_RESP }} - {{ responsavel.NM_RESP }}</strong></p>\r\n                            </div>\r\n                          </div>\r\n                        </li>\r\n                      </ul>\r\n                    </div>\r\n                    <p class=\"text-right m-0\"><small class=\"text-muted\"><cite>{{parecer.NR_MATR}} - {{parecer.NM_USUA | uppercase}}</cite></small></p>\r\n                    <p class=\"text-right m-0\"><small class=\"text-muted\">{{parecer.DT_INCL | date: 'dd/MM/yyyy HH:mm'}}</small></p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div  *ngIf=\"noPareceres && !loadingPareceres\" class=\"d-flex justify-content-center mb-3\">\r\n              <empty-result message=\"Nenhum parecer encontrado!\"></empty-result>\r\n            </div>\r\n          </div>\r\n        </tab>\r\n        <tab heading=\"Documentos\">\r\n          <div class=\"border-right border-left border-bottom px-3 pt-3\" >\r\n            <div *ngIf=\"totalImagensOcorrencia != 0\">\r\n              <blockquote class=\"blockquote\">\r\n                <p class=\"mb-0\">Imagens</p>\r\n              </blockquote>\r\n              <div class=\"row ScrollImagem\" >\r\n                <div class=\"col-md-4 mb-4\" *ngFor=\"let imagem of imagensOcorrencia\">\r\n                  <div class=\"card\" >\r\n                    <img class=\"card-img-responsive\" src=\"{{imagem.LINK}}\" style=\"height: 150px;\">\r\n                    <div class=\"card-body\">\r\n                      <p class=\"card-text\"><strong>{{imagem.NM_DOCU}}</strong></p>\r\n                      <p class=\"card-text mb-2\">{{imagem.DT_INCL | date: 'dd/MM/yyyy HH:mm'}}</p>\r\n                      <p class=\"card-text mb-2\">{{imagem.NM_USUA}}</p>\r\n                      <p class=\"card-text-right\">\r\n                        <a\r\n                          [href]=\"imagem.LINK\"\r\n                          target=\"_blank\"\r\n                          class=\"btn-icon-sm text-black\"\r\n                          tooltip=\"visualizar\"\r\n                        >\r\n                          <i class=\"far fa-eye\"></i>\r\n                        </a>\r\n                      </p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr *ngIf=\"totalImagensOcorrencia != 0 && totalDocumentosOcorrencia != 0 \">\r\n            <div  *ngIf=\"totalDocumentosOcorrencia != 0\">\r\n              <blockquote class=\"blockquote\">\r\n                <p class=\"mb-0\">Documentos</p>\r\n              </blockquote>\r\n              <ul class=\" pl-0\">\r\n                <li class=\"d-flex justify-content-between\" *ngFor=\"let documento of documentosOcorrencia;\">\r\n                  <div>{{ documento.NM_DOCU | uppercase }}</div>\r\n                  <div>\r\n                    <a\r\n                      [href]=\"documento.LINK\"\r\n                      target=\"_blank\"\r\n                      class=\"btn-icon-sm mx-2 text-black\"\r\n                      tooltip=\"Baixar\"\r\n                    >\r\n                    <i class=\"fas fa-download\"></i>\r\n                    </a>\r\n                  </div>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n            <div [hidden]=\"totalImagensOcorrencia != 0 || totalDocumentosOcorrencia != 0\" class=\"text-center d-flex justify-content-center align-items-center pb-4\" style=\"height: 80%\">\r\n              <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n            </div>\r\n          </div>\r\n        </tab>\r\n      </tabset>\r\n    </div>\r\n  </ng-template>\r\n  <ng-template #modalPareceres>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title pull-left\">Nova Ocorrência</h4>\r\n      <div class=\"d-flex justify-content-center align-items-center\">\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModalParecer()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal-body\" >\r\n      <tecnologia-informacao-contratos-ocorrencia-parecer\r\n      [ocorrenciaId] = \"ocorrenciaId\"\r\n      (fecharModal)=\"onFecharModal($event)\"\r\n      >\r\n      </tecnologia-informacao-contratos-ocorrencia-parecer>\r\n    </div>\r\n  </ng-template>\r\n</app-body>";
      /***/
    },

    /***/
    "qxKm":
    /*!***************************************************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/contratos/ocorrencia/cadastro/cadastro.component.ts ***!
      \***************************************************************************************************/

    /*! exports provided: TecnologiaInformacaoCadastrosOcorrenciaCadastroComponent */

    /***/
    function qxKm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoCadastrosOcorrenciaCadastroComponent", function () {
        return TecnologiaInformacaoCadastrosOcorrenciaCadastroComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./cadastro.component.html */
      "SQzo");
      /* harmony import */


      var _cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cadastro.component.scss */
      "DPcc");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS");
      /* harmony import */


      var _item_services_item_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./../../item/services/item.service */
      "Z7gR");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/modules/confirm-modal/confirm-modal.service */
      "FOez");
      /* harmony import */


      var _services_funcionarios_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./../../services/funcionarios.service */
      "jMbs");
      /* harmony import */


      var _services_ocorrencia_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../services/ocorrencia.service */
      "S1or");
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! rxjs */
      "qCKp"); //service


      var TecnologiaInformacaoCadastrosOcorrenciaCadastroComponent = /*#__PURE__*/function () {
        /* Pagination */
        function TecnologiaInformacaoCadastrosOcorrenciaCadastroComponent(router, pnotify, formBuilder, titleService, modalService, activatedRoute, itensService, atividadesService, confirmModalService, funcionarioService, ocorrenciaService) {
          _classCallCheck(this, TecnologiaInformacaoCadastrosOcorrenciaCadastroComponent);

          this.router = router;
          this.pnotify = pnotify;
          this.formBuilder = formBuilder;
          this.titleService = titleService;
          this.modalService = modalService;
          this.activatedRoute = activatedRoute;
          this.itensService = itensService;
          this.atividadesService = atividadesService;
          this.confirmModalService = confirmModalService;
          this.funcionarioService = funcionarioService;
          this.ocorrenciaService = ocorrenciaService;
          this.formData = [];
          this.breadCrumbTree = [];
          this.documentos = [];
          this.usuarios = [];
          this.itens = [];
          this.noUsuarios = true;
          this.loading = false;
          this.loadingNavBar = false;
          /* Pagination */

          this.itemsPerPage = 10;
          this.totalItems = 10;
          this.currentPage = 1;
          this.begin = 0;
          this.end = 10;
        }

        _createClass(TecnologiaInformacaoCadastrosOcorrenciaCadastroComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registrarAcesso();
            this.setBreadCrumb();
            this.setFormBuilder();
            this.onActivatedRoute();
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            this.appTitle = 'Cadastro';
            var id = this.activatedRoute.snapshot.params.idSubModulo;
            this.titleService.setTitle(this.appTitle);
            this.breadCrumbTree = [{
              descricao: 'Home',
              routerLink: '/tecnologia-informacao/home'
            }, {
              descricao: 'Contratos',
              routerLink: "/tecnologia-informacao/contratos/".concat(id)
            }, {
              descricao: 'Ocorrências',
              routerLink: "./../"
            }, {
              descricao: this.appTitle
            }];
          }
        }, {
          key: "onActivatedRoute",
          value: function onActivatedRoute() {
            var _params = this.activatedRoute.snapshot.params;
            this.id = _params['id'];

            if (_params.hasOwnProperty('id')) {
              this.getOcorrencia({
                ID_TEIN_OCOR: _params['id']
              });
              this.getResponsaveis({
                ID_TEIN_OCOR: _params['id'],
                IN_STAT: '1'
              });
              this.getDocumentos({
                ID_TEIN_OCOR: _params['id'],
                IN_STAT: '1'
              });
            } else {
              this.onAddResponsavel();
            }
          } //formulario

        }, {
          key: "setFormBuilder",
          value: function setFormBuilder() {
            this.form = this.formBuilder.group({
              ID_TEIN_OCOR: [null],
              ID_TECN_INFO_ITEM: [null],
              DS_OBSE: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(10)]],
              IN_STAT: [null],
              NR_MATR_FUNC: [{
                value: null,
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
              NM_FUNC: [{
                value: null,
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
              CD_ITEM: [{
                value: null,
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
              NM_ITEM_TIPO: [{
                value: null,
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
              NM_MODE: [{
                value: null,
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
              NM_PROD: [{
                value: null,
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
              VL_ITEM: [{
                value: null,
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
              responsaveis: this.formBuilder.array([])
            });
            this.formUsuarios = this.formBuilder.group({
              buscarPor: ['nome'],
              pesquisa: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              matricula: [null],
              nome: [null]
            });
            this.formPesquisaItem = this.formBuilder.group({
              buscarPor: ['CD_ITEM'],
              pesquisa: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              ID_TECN_INFO_ITEM: [null],
              CD_ITEM: [null],
              NM_ITEM_TIPO: [null],
              NM_MODE: [null],
              NM_PROD: [null],
              DS_CONT: [null],
              NR_MATR: [null],
              NM_USUA: [null]
            });
          }
        }, {
          key: "getItens",
          value: function getItens() {
            var _this9 = this;

            var _obj = this.formPesquisaItem.value;
            var _params = {};
            if (_obj['pesquisa']) _params[_obj['buscarPor']] = _obj['pesquisa'];
            this.loadingItens = true;
            this.itensService.getItem(_params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(function () {
              _this9.loadingItens = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this9.itens = response.body['data'];
              } else {
                _this9.pnotify.notice('Nenhum registro encontrado!');

                _this9.itens = [];
              }
            }, function (error) {
              _this9.pnotify.error();
            });
          }
        }, {
          key: "getItem",
          value: function getItem(id) {
            var _this10 = this;

            this.loading = true;
            this.itensService.getItem({
              ID_TECN_INFO_ITEM: id
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(function () {
              _this10.loading = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                var item = response.body['data'][0];

                _this10.setItem(item);
              } else {
                _this10.pnotify.notice('Nenhum item encontrado!');

                _this10.itens = [];
              }
            }, function (error) {
              _this10.pnotify.error();
            });
          }
        }, {
          key: "getResponsaveis",
          value: function getResponsaveis(params) {
            var _this11 = this;

            this.loadingNavBar = true;
            this.ocorrenciaService.getResponsaveis(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(function () {
              _this11.loadingNavBar = false;
            })).subscribe(function (response) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this11, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                var _this12 = this;

                var responsaveis, promise;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        if (!(response.status !== 200)) {
                          _context4.next = 2;
                          break;
                        }

                        return _context4.abrupt("return");

                      case 2:
                        responsaveis = response['body']['data'];

                        promise = function promise() {
                          return responsaveis.forEach(function () {
                            return _this12.onAddResponsavel();
                          });
                        };

                        _context4.next = 6;
                        return Promise.resolve(promise());

                      case 6:
                        this.form.get('responsaveis').patchValue(responsaveis);

                      case 7:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4, this);
              }));
            }, function (error) {
              _this11.pnotify.error('Não foi encontrado nenhum responsável');
            });
          }
        }, {
          key: "getOcorrencia",
          value: function getOcorrencia(params) {
            var _this13 = this;

            this.loading = true;

            var _params = params !== null && params !== void 0 ? params : {};

            this.ocorrenciaService.getOcorrencia(_params).subscribe(function (response) {
              if (response.status !== 200) {
                _this13.noResult = true;
                _this13.loading = false;
                _this13.ocorrencias = [];
                return;
              }

              var _ocorrencias = response.body['data'][0];
              var item = _ocorrencias['ID_TECN_INFO_ITEM'];

              _this13.getItem(item);

              _this13.form.patchValue(_ocorrencias);

              _this13.noResult = false;
            }, function (error) {
              _this13.pnotify.error();

              _this13.noResult = true;
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
          key: "postOcorrencia",
          value: function postOcorrencia() {
            var _this14 = this;

            var params = JSON.parse(JSON.stringify(this.form.getRawValue()));
            delete params['responsaveis'];
            this.loadingNavBar = true;
            this.ocorrenciaService.postOcorrencia(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(function () {
              _this14.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                var id = response.body['data'];

                _this14.pnotify.success();

                _this14.postResponsaveis(id);

                _this14.postDocumentos(id);

                _this14.router.navigate(['../'], {
                  relativeTo: _this14.activatedRoute
                });
              } else {
                _this14.pnotify.error();
              }
            }, function (error) {
              _this14.pnotify.error();
            });
          }
        }, {
          key: "openModal",
          value: function openModal(template, index) {
            this.index = index;
            this.modalRef = this.modalService.show(template, {
              animated: false,
              "class": 'modal-xl'
            });
          }
        }, {
          key: "hideModal",
          value: function hideModal() {
            this.modalRef.hide();
          }
        }, {
          key: "onAddResponsavel",
          value: function onAddResponsavel() {
            this.formResponsaveis.push(this.formBuilder.group({
              ID_TEIN_OCOR: [null],
              ID_RESP: [null],
              NR_MATR_RESP: [{
                value: null,
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
              NM_RESP: [{
                value: null,
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]]
            }));
          }
        }, {
          key: "postResponsaveis",
          value: function postResponsaveis(id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this15 = this;

              var request, responsaveis, promise;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      request = [];
                      responsaveis = this.formResponsaveis.getRawValue();

                      if (!(responsaveis.length == 0)) {
                        _context5.next = 4;
                        break;
                      }

                      return _context5.abrupt("return");

                    case 4:
                      promise = function promise() {
                        responsaveis.forEach(function (responsavel) {
                          var params = Object.assign(Object.assign({}, responsavel), {
                            'ID_TEIN_OCOR': id
                          });
                          request.push(_this15.ocorrenciaService.postResponsaveis(params));
                        });
                      };

                      _context5.next = 7;
                      return Promise.resolve(promise());

                    case 7:
                      Object(rxjs__WEBPACK_IMPORTED_MODULE_15__["forkJoin"])(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(function () {
                        _this15.loading = false;
                        _this15.loadingNavBar = false;
                      })).subscribe(function (responses) {
                        _this15.pnotify.success('Responsáveis cadastrados com sucesso');
                      }, function (error) {
                        try {
                          _this15.pnotify.error(error.error.message);
                        } catch (error) {
                          _this15.pnotify.error();
                        }
                      });

                    case 8:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "getUsuarios",
          value: function getUsuarios(params) {
            var _this16 = this;

            var _params = params !== null && params !== void 0 ? params : {};

            _params.situacao = '1';
            _params.qtItensPagina = 100;
            var _obj = this.formUsuarios.value;
            this.loadingUsuarios = true;
            if (_obj['pesquisa']) _params[_obj['buscarPor']] = _obj['pesquisa'];
            this.funcionarioService.getUsuarios(_params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(function () {
              _this16.loadingUsuarios = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this16.usuarios = response.body['usuarios'];
                _this16.totalItems = response.body['usuarios'].length;
                _this16.noUsuarios = false;
              } else {
                _this16.pnotify.notice('Nenhum registro encontrado!');

                _this16.usuarios = [];
                _this16.noUsuarios = true;
              }
            }, function (error) {
              _this16.pnotify.error();

              _this16.usuarios = [];
            });
          }
        }, {
          key: "setUsuarios",
          value: function setUsuarios(usuario) {
            //const _usuario = {...usuario,'IN_MATE': false}
            var fg = this.form.get('responsaveis');
            fg.controls[this.index].get('NR_MATR_RESP').patchValue(usuario.matricula);
            fg.controls[this.index].get('ID_RESP').patchValue(usuario.id);
            fg.controls[this.index].get('NM_RESP').patchValue(usuario.nome);
          }
        }, {
          key: "setItem",
          value: function setItem(item) {
            this.form.get('ID_TECN_INFO_ITEM').patchValue(item.ID_TECN_INFO_ITEM);
            this.form.get('CD_ITEM').patchValue(item.CD_ITEM);
            this.form.get('NM_ITEM_TIPO').patchValue(item.NM_ITEM_TIPO);
            this.form.get('NM_MODE').patchValue(item.NM_MODE);
            this.form.get('NM_PROD').patchValue(item.NM_PROD);
            this.form.get('VL_ITEM').patchValue(item.VL_ITEM);
            this.form.get('NM_FUNC').patchValue(item.NM_USUA);
            this.form.get('NR_MATR_FUNC').patchValue(item.NR_MATR);
          }
        }, {
          key: "onDeleteResponsavel",
          value: function onDeleteResponsavel(index) {
            var _this17 = this;

            if (this.formResponsaveis.length === 1) {
              this.pnotify.notice('Informe ao menos um responsável.');
              return;
            }

            var id = this.form.get('ID_TEIN_OCOR');
            var responsaveis = this.formResponsaveis.at(index).value;
            responsaveis = Object.assign(Object.assign({}, responsaveis), {
              'IN_STAT': '0'
            });

            if (!responsaveis['ID_RESP']) {
              this.formResponsaveis.removeAt(index);
              return;
            }

            this.loadingNavBar = true;
            this.ocorrenciaService.postResponsaveis(responsaveis).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(function () {
              _this17.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this17.formResponsaveis.removeAt(index);

                _this17.pnotify.success();
              } else {
                _this17.pnotify.error();
              }
            }, function (error) {
              _this17.pnotify.error();
            });
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
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
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
          key: "postDocumentos",
          value: function postDocumentos(id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this18 = this;

              var requests, promise;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      requests = [];

                      if (!(this.formData.length === 0)) {
                        _context6.next = 3;
                        break;
                      }

                      return _context6.abrupt("return", requests);

                    case 3:
                      promise = function promise() {
                        _this18.formData.forEach(function (element) {
                          requests.push(_this18.ocorrenciaService.postDocumento(element, id));
                        });
                      };

                      Promise.resolve(promise());
                      Object(rxjs__WEBPACK_IMPORTED_MODULE_15__["forkJoin"])(requests).subscribe(function (responses) {
                        responses.forEach(function (response) {
                          if (response.status === 200) {
                            _this18.pnotify.success();
                          } else {
                            _this18.pnotify.error();
                          }
                        });
                      }, function (error) {
                        _this18.pnotify.error();
                      });
                      return _context6.abrupt("return", requests);

                    case 7:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "putDocumento",
          value: function putDocumento(documento) {
            var _this19 = this;

            var type = 'inactivate',
                title = 'Confirmar inativação',
                message = 'Deseja realmente prosseguir com a inativação do registro?',
                cancelTxt = 'Cancelar',
                okTxt = 'Confirmar';
            this.confirmModalService.showConfirm(type, title, message, cancelTxt, okTxt).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["switchMap"])(function (result) {
              if (!result) return rxjs__WEBPACK_IMPORTED_MODULE_15__["EMPTY"];
              _this19.loadingNavBar = true;
              return _this19.ocorrenciaService.putDocumento(documento);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(function () {
              _this19.loadingNavBar = false;
            })).subscribe(function (response) {
              _this19.pnotify.success('Documento atualizado com sucesso');

              _this19.getDocumentos({
                ID_TEIN_OCOR: _this19.form.get('ID_TEIN_OCOR').value,
                IN_STAT: '1'
              });
            });
          }
        }, {
          key: "getDocumentos",
          value: function getDocumentos(params) {
            var _this20 = this;

            this.ocorrenciaService.getDocumento(params).subscribe(function (response) {
              if (response.status === 200) {
                _this20.documentos = response.body['data'];
              } else {
                _this20.documentos = [];
              }
            }, function (error) {
              _this20.documentos = [];
            });
          }
        }, {
          key: "onRemove",
          value: function onRemove(documento, index) {
            if (!documento.hasOwnProperty('ID_TEIN_OCOR_DOCU')) {
              this.formData = this.formData.filter(function (element) {
                return element.get('file')['name'] != documento.NM_DOCU;
              });
            }

            documento.IN_STAT = '0';
            this.documentos.splice(index, 1);

            if (documento.hasOwnProperty('ID_TEIN_OCOR_DOCU')) {
              this.putDocumento(documento);
            }
          }
        }, {
          key: "appendFile",
          value: function appendFile(files) {
            if (files.length === 0) return;
            var fd = new FormData();
            fd.append('file', files[0]);
            this.formData.push(fd);
            this.documentos.push({
              NM_DOCU: files[0]['name']
            });
          }
        }, {
          key: "formResponsaveis",
          get: function get() {
            var responsaveis = this.form.get('responsaveis');
            return responsaveis;
          }
        }]);

        return TecnologiaInformacaoCadastrosOcorrenciaCadastroComponent;
      }();

      TecnologiaInformacaoCadastrosOcorrenciaCadastroComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_6__["TitleService"]
        }, {
          type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_13__["BsModalService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _item_services_item_service__WEBPACK_IMPORTED_MODULE_7__["TecnologiaInformacaoCadastroItemService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"]
        }, {
          type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_10__["ConfirmModalService"]
        }, {
          type: _services_funcionarios_service__WEBPACK_IMPORTED_MODULE_11__["TecnologiaInformacaoFuncionariosService"]
        }, {
          type: _services_ocorrencia_service__WEBPACK_IMPORTED_MODULE_12__["TecnologiaInformacaoCadastroOcorrenciaService"]
        }];
      };

      TecnologiaInformacaoCadastrosOcorrenciaCadastroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'tecnologia-informacao-cadastros-ocorrencia-cadastro',
        template: _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_6__["TitleService"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_13__["BsModalService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _item_services_item_service__WEBPACK_IMPORTED_MODULE_7__["TecnologiaInformacaoCadastroItemService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"], src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_10__["ConfirmModalService"], _services_funcionarios_service__WEBPACK_IMPORTED_MODULE_11__["TecnologiaInformacaoFuncionariosService"], _services_ocorrencia_service__WEBPACK_IMPORTED_MODULE_12__["TecnologiaInformacaoCadastroOcorrenciaService"]])], TecnologiaInformacaoCadastrosOcorrenciaCadastroComponent);
      /***/
    },

    /***/
    "xBI/":
    /*!***********************************************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/contratos/ocorrencia/lista/lista.component.scss ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function xBI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".ScrollPareceres {\n  height: 410px;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy90ZWNub2xvZ2lhLWluZm9ybWFjYW8vY29udHJhdG9zL29jb3JyZW5jaWEvbGlzdGEvbGlzdGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy90ZWNub2xvZ2lhLWluZm9ybWFjYW8vY29udHJhdG9zL29jb3JyZW5jaWEvbGlzdGEvbGlzdGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuU2Nyb2xsUGFyZWNlcmVzIHtcclxuICBoZWlnaHQ6IDQxMHB4O1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59Il19 */";
      /***/
    },

    /***/
    "zvcX":
    /*!*********************************************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/contratos/ocorrencia/lista/lista.component.ts ***!
      \*********************************************************************************************/

    /*! exports provided: TecnologiaInformacaoCadastrosOcorrenciaListaComponent */

    /***/
    function zvcX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoCadastrosOcorrenciaListaComponent", function () {
        return TecnologiaInformacaoCadastrosOcorrenciaListaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lista.component.html */
      "qFqN");
      /* harmony import */


      var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lista.component.scss */
      "xBI/");
      /* harmony import */


      var _estoque_produtos_services_produtos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../estoque/produtos/services/produtos.service */
      "Z/u6");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../../../../shared/modules/confirm-modal/confirm-modal.service */
      "FOez");
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


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _services_ocorrencia_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../services/ocorrencia.service */
      "S1or");
      /* harmony import */


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");
      /* harmony import */


      var src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/modules/xlsx/xlsx.service */
      "eOmW");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/shared/services/core/date.service */
      "Rk3r"); //angular
      //servicos
      // rxjs


      var TecnologiaInformacaoCadastrosOcorrenciaListaComponent = /*#__PURE__*/function () {
        /* Pagination */
        function TecnologiaInformacaoCadastrosOcorrenciaListaComponent(route, pnotify, activatedRoute, ocorrenciaService, formBuilder, xlsxService, modalService, produtoService, confirmModalService, routerService, dateService) {
          _classCallCheck(this, TecnologiaInformacaoCadastrosOcorrenciaListaComponent);

          this.route = route;
          this.pnotify = pnotify;
          this.activatedRoute = activatedRoute;
          this.ocorrenciaService = ocorrenciaService;
          this.formBuilder = formBuilder;
          this.xlsxService = xlsxService;
          this.modalService = modalService;
          this.produtoService = produtoService;
          this.confirmModalService = confirmModalService;
          this.routerService = routerService;
          this.dateService = dateService;
          this.responsaveis = [];
          this.loadingDocumentosParecer = true;
          this.loadingResponsaveisParecer = true;
          this.loadingPareceres = true;
          this.loading = true; //Loading FullPage

          this.loadingNavBar = false; //Loading do NAVBAR

          this.hiddenModal = false;
          this.documentosParecer = {};
          this.responsaveisParecer = {};
          this.pareceres = [];
          this.testes = [];
          this.imagensOcorrencia = [];
          this.documentosOcorrencia = [];
          this.produtos = []; // CUSTOM TABLE

          this.tableConfig = {
            subtitleBorder: true
          }; // Tipos de Situação dos Ocorrencias (Ativo/Inativo)

          this.tipos = [{
            cod: '1',
            nome: 'Ativos'
          }, {
            cod: '0',
            nome: 'Inativos'
          }];
          this.status = [{
            cod: '1',
            nome: 'Concluída'
          }, {
            cod: '0',
            nome: 'Em andamento'
          }];
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

        _createClass(TecnologiaInformacaoCadastrosOcorrenciaListaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.buildForm();
            this.setBreadCrumb();
            this.onActivatedRoute();
            this.getProdutos();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.$activatedRouteSubscription.unsubscribe();
          }
        }, {
          key: "onActivatedRoute",
          value: function onActivatedRoute() {
            var _this21 = this;

            this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (response) {
              var _response = _this21.routerService.getBase64UrlParams(response);

              _this21.form.patchValue(_response);

              if (_response.hasOwnProperty('TT_REGI_PAGI')) _this21.itemsPerPage = _response.TT_REGI_PAGI;

              _this21.getOcorrencia(_this21.getParams());
            });
          }
        }, {
          key: "buildForm",
          value: function buildForm() {
            this.form = this.formBuilder.group({
              ID_TEIN_OCOR: [null],
              NR_MATR: [null],
              NM_USUA: [null],
              CD_ITEM: [null],
              ID_TEIN_ESTO_PROD: [null],
              IN_STAT: [null],
              DS_OBSE: [null],
              IN_FINA: [null],
              PAGI: [1],
              TT_REGI_PAGI: [this.itemsPerPage],
              TIME: [new Date().getTime()]
            });
          }
        }, {
          key: "getProdutos",
          value: function getProdutos(params) {
            var _this22 = this;

            var _params = params !== null && params !== void 0 ? params : {};

            _params.IN_STAT = '1';
            _params.IN_PAGI = '0';
            this.loadingProduto = true;
            this.produtoService.getProdutos(_params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () {
              _this22.loadingProduto = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this22.produtos = response.body['data'];
              }
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
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            var id = this.activatedRoute.snapshot.params.idSubModulo;
            this.breadCrumbTree = [{
              descricao: 'Home',
              routerLink: "/tecnologia-informacao/home"
            }, {
              descricao: 'Contratos',
              routerLink: "/tecnologia-informacao/contratos/".concat(id)
            }, {
              descricao: 'Ocorrências'
            }];
          }
        }, {
          key: "getResponsaveis",
          value: function getResponsaveis(params) {
            var _this23 = this;

            this.noResponsaveis = true;
            this.loadingResponsaveis = true;
            this.ocorrenciaService.getResponsaveis(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () {
              _this23.loadingResponsaveis = false;
            })).subscribe(function (response) {
              if (response.status !== 200) {
                _this23.pnotify.notice('Nenhum responsável encontrado!');

                _this23.noResponsaveis = true;
                return;
              }

              _this23.responsaveis = response['body']['data'];
              _this23.noResponsaveis = false;
            }, function (error) {
              _this23.noResponsaveis = true;

              _this23.pnotify.error('Não foi encontrado nenhum responsável');
            });
          }
        }, {
          key: "onFilter",
          value: function onFilter() {
            this.form.get('TIME').setValue(new Date().getTime());
            this.route.navigate([], {
              relativeTo: this.activatedRoute,
              queryParams: this.routerService.setBase64UrlParams(this.getParams())
            });
          }
        }, {
          key: "openModal",
          value: function openModal(template, ocorrencia) {
            this.noPareceres = true;
            this.totalDocumentosOcorrencia = 0;
            this.totalImagensOcorrencia = 0;
            var _params = {
              ID_TEIN_OCOR: ocorrencia['ID_TEIN_OCOR']
            };

            var _paramsImagem = Object.assign(Object.assign({}, _params), {
              TP_DOCU: 'IMAGEM'
            });

            var _paramsDocumento = Object.assign(Object.assign({}, _params), {
              TP_DOCU: 'DOCUMENTO'
            });

            this.getImagensOcorrencia(_paramsImagem);
            this.getDocumentosOcorrencia(_paramsDocumento);
            this.getResponsaveis(_params);
            this.getParecer(_params);
            this.ocorrenciaSelecionada = ocorrencia;
            this.modalRef1 = this.modalService.show(template, {
              animated: false,
              "class": 'modal-xl'
            });
          }
        }, {
          key: "hideModal",
          value: function hideModal() {
            this.modalRef1.hide();
          }
        }, {
          key: "getDocumentosOcorrencia",
          value: function getDocumentosOcorrencia(params) {
            var _this24 = this;

            this.loadingDocumentosOcorrencias = true;
            this.ocorrenciaService.getDocumento(params).subscribe(function (response) {
              if (response.status === 200) {
                _this24.documentosOcorrencia = response.body['data'];
                _this24.totalDocumentosOcorrencia = response.body['data'].length;
                _this24.loadingDocumentosOcorrencias = false;
              } else {
                _this24.documentosOcorrencia = [];
                _this24.totalDocumentosOcorrencia = 0;
                _this24.loadingDocumentosOcorrencias = false;
              }
            }, function (error) {
              _this24.documentosOcorrencia = [];
              _this24.loadingDocumentosOcorrencias = false;
            });
          }
        }, {
          key: "onTermo",
          value: function onTermo(ocorrencia) {
            var id = this.activatedRoute.snapshot.params.idSubModulo;
            this.route.navigate(["/tecnologia-informacao/contratos/".concat(id, "/termo-devolucao"), ocorrencia.ID_TEIN_OCOR], {
              relativeTo: this.activatedRoute
            });
          }
        }, {
          key: "getImagensOcorrencia",
          value: function getImagensOcorrencia(params) {
            var _this25 = this;

            this.loadingImagensOcorrencia = true;
            this.ocorrenciaService.getDocumento(params).subscribe(function (response) {
              if (response.status === 200) {
                _this25.imagensOcorrencia = response.body['data'];
                _this25.totalImagensOcorrencia = response.body['data'].length;
                _this25.loadingImagensOcorrencia = false;
              } else {
                _this25.imagensOcorrencia = [];
                _this25.totalImagensOcorrencia = 0;
                _this25.loadingImagensOcorrencia = false;
              }
            }, function (error) {
              _this25.imagensOcorrencia = [];
              _this25.loadingImagensOcorrencia = false;
            });
          }
        }, {
          key: "getOcorrencia",
          value: function getOcorrencia(params) {
            var _this26 = this;

            if (!this.loading) this.loadingNavBar = true;
            this.ocorrenciaService.getOcorrencia(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () {
              _this26.loading = false;
              _this26.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this26.ocorrencias = response.body['data'];
                _this26.totalItems = response.body['total'];
                _this26.noResult = false;
              } else {
                _this26.noResult = true;
                _this26.ocorrencias = [];
              }
            }, function (error) {
              _this26.pnotify.error();

              _this26.noResult = true;
            });
          }
        }, {
          key: "changeType",
          value: function changeType(ocorrencias) {
            var _this27 = this;

            var stat = ocorrencias.IN_STAT == '1' ? '0' : '1';
            this.confirmChange(stat).asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["switchMap"])(function (result) {
              if (!result) return rxjs__WEBPACK_IMPORTED_MODULE_14__["EMPTY"];
              _this27.loadingNavBar = true;
              ocorrencias.IN_STAT = stat;
              return _this27.ocorrenciaService.postOcorrencia(ocorrencias);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () {
              _this27.loadingNavBar = false;
            })).subscribe(function (success) {
              _this27.pnotify.success();
            }, function (error) {
              ocorrencias.IN_STAT = ocorrencias.IN_STAT == '1' ? '0' : '1';

              _this27.pnotify.error();
            });
          }
        }, {
          key: "confirmChange",
          value: function confirmChange(stat) {
            if (stat == '1') return this.confirmModalService.showConfirm(null, null, 'Deseja realmente prosseguir com a ativação do registro?', 'Cancelar', 'Confirmar');
            return this.confirmModalService.showConfirm('inactivate', 'Confirmar inativação', 'Deseja realmente prosseguir com a inativação do registro?', 'Cancelar', 'Confirmar');
          }
        }, {
          key: "onPageChanged",
          value: function onPageChanged(event) {
            this.form.get('PAGI').setValue(event.page);
            this.onFilter();
          }
        }, {
          key: "setPageRegistros",
          value: function setPageRegistros(itemsPerPage) {
            this.itemsPerPage = itemsPerPage;
            this.onFilter();
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
          key: "onFecharModal",
          value: function onFecharModal(event) {
            var _this28 = this;

            if (event == true) {
              this.hideModalParecer();
              this.getParecer({
                ID_TEIN_OCOR: this.ocorrenciaSelecionada['ID_TEIN_OCOR'],
                IN_STAT: '1'
              });
              this.ocorrenciaService.getOcorrencia({
                ID_TEIN_OCOR: this.ocorrenciaSelecionada['ID_TEIN_OCOR']
              }).subscribe(function (response) {
                if (response.status === 200) {
                  _this28.ocorrenciaSelecionada = response.body['data'][0];
                }

                return;
              });
            }

            return;
          }
        }, {
          key: "openModalParecer",
          value: function openModalParecer(template) {
            var id = this.ocorrenciaSelecionada['ID_TEIN_OCOR'];
            this.ocorrenciaId = id;
            this.hiddenModal = true;
            this.modalRef2 = this.modalService.show(template, {
              animated: true,
              "class": 'modal-lg',
              backdrop: 'static'
            });
          }
        }, {
          key: "hideModalParecer",
          value: function hideModalParecer() {
            this.hiddenModal = false;
            this.modalRef2.hide();
          }
        }, {
          key: "getParecer",
          value: function getParecer(params) {
            var _this29 = this;

            this.loadingPareceres = true;
            params = Object.assign(Object.assign({}, params), {
              ORDE_TYPE: 'desc'
            });
            this.ocorrenciaService.getParecer(params).subscribe(function (response) {
              if (response.status === 200) {
                _this29.pareceres = response.body['data'];
                _this29.noPareceres = false;

                _this29.pareceres.forEach(function (parecer) {
                  _this29.getDocumentoParecer(parecer);

                  _this29.getResponsaveisParecer(parecer);

                  _this29.loadingPareceres = false;
                });
              } else {
                _this29.pareceres = [];
                _this29.noPareceres = true;
                _this29.loadingPareceres = false;
              }
            }, function (error) {
              _this29.pareceres = [];
              _this29.noPareceres = true;
              _this29.loadingPareceres = false;
            });
          }
        }, {
          key: "getDocumentoParecer",
          value: function getDocumentoParecer(params) {
            var _this30 = this;

            this.loadingDocumentosParecer = true;
            this.ocorrenciaService.getDocumentoParecer(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () {
              _this30.loadingDocumentosParecer = false;
            })).subscribe(function (response) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this30, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                var documentos;
                return regeneratorRuntime.wrap(function _callee7$(_context7) {
                  while (1) {
                    switch (_context7.prev = _context7.next) {
                      case 0:
                        if (!(response.status !== 200)) {
                          _context7.next = 2;
                          break;
                        }

                        return _context7.abrupt("return");

                      case 2:
                        documentos = response['body']['data'];
                        this.documentosParecer[params.ID_TEIN_OCPR] = documentos;

                      case 4:
                      case "end":
                        return _context7.stop();
                    }
                  }
                }, _callee7, this);
              }));
            }, function (error) {
              _this30.pnotify.error('Não foi encontrado nenhum documento');
            });
          }
        }, {
          key: "getResponsaveisParecer",
          value: function getResponsaveisParecer(params) {
            var _this31 = this;

            this.loadingResponsaveisParecer = true;
            this.ocorrenciaService.getResponsaveisParecer(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () {
              _this31.loadingResponsaveisParecer = false;
            })).subscribe(function (response) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this31, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
                var responsaveis;
                return regeneratorRuntime.wrap(function _callee8$(_context8) {
                  while (1) {
                    switch (_context8.prev = _context8.next) {
                      case 0:
                        if (!(response.status !== 200)) {
                          _context8.next = 3;
                          break;
                        }

                        this.noResponsaveisParecer = true;
                        return _context8.abrupt("return");

                      case 3:
                        responsaveis = response['body']['data'];
                        this.noResponsaveisParecer = false;
                        this.responsaveisParecer[params.ID_TEIN_OCPR] = responsaveis;

                      case 6:
                      case "end":
                        return _context8.stop();
                    }
                  }
                }, _callee8, this);
              }));
            }, function (error) {
              _this31.pnotify.error('Não foi encontrado nenhum responsável');

              _this31.noResponsaveisParecer = true;
            });
          }
        }, {
          key: "finalizarOcorrencia",
          value: function finalizarOcorrencia(ocorrencias) {
            var _this32 = this;

            var stat = ocorrencias.IN_FINA == 1 ? 0 : 1;
            this.confirmChangeOcorrencia(stat).asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["switchMap"])(function (result) {
              if (!result) return rxjs__WEBPACK_IMPORTED_MODULE_14__["EMPTY"];
              _this32.loadingNavBar = true;
              ocorrencias.IN_FINA = stat;
              return _this32.ocorrenciaService.postOcorrencia(ocorrencias);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () {
              _this32.loadingNavBar = false;
            })).subscribe(function (success) {
              _this32.pnotify.success('Ocorrência concluída com sucesso!');
            }, function (error) {
              ocorrencias.IN_FINA = ocorrencias.IN_FINA == 1 ? 0 : 1;

              _this32.pnotify.error();
            });
          }
        }, {
          key: "confirmChangeOcorrencia",
          value: function confirmChangeOcorrencia(stat) {
            if (stat != 1) {
              this.pnotify.notice('Erro ao concluir ocorrência!');
              return;
            }

            return this.confirmModalService.showConfirm(null, 'Confirmar Finalização da Ocorrência', 'Deseja realmente concluir a ocorrência?', 'Cancelar', 'Confirmar');
          }
        }, {
          key: "onExport",
          value: function onExport() {
            var data = new Date().toLocaleDateString().split('/'),
                dataExport = "".concat(data[0]).concat(data[1]).concat(data[2]);
            var listagemExport = [];
            listagemExport = this.ocorrencias;
            this.xlsxService.exportFile(listagemExport, "Ocorrencias_".concat(dataExport));
          }
        }]);

        return TecnologiaInformacaoCadastrosOcorrenciaListaComponent;
      }();

      TecnologiaInformacaoCadastrosOcorrenciaListaComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }, {
          type: _services_ocorrencia_service__WEBPACK_IMPORTED_MODULE_10__["TecnologiaInformacaoCadastroOcorrenciaService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]
        }, {
          type: src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_12__["XlsxService"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"]
        }, {
          type: _estoque_produtos_services_produtos_service__WEBPACK_IMPORTED_MODULE_3__["TecnologiaInformacaoEstoqueProdutosService"]
        }, {
          type: _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_5__["ConfirmModalService"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_11__["RouterService"]
        }, {
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_15__["DateService"]
        }];
      };

      TecnologiaInformacaoCadastrosOcorrenciaListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'tecnologia-informacao-cadastros-ocorrencia-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _services_ocorrencia_service__WEBPACK_IMPORTED_MODULE_10__["TecnologiaInformacaoCadastroOcorrenciaService"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"], src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_12__["XlsxService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"], _estoque_produtos_services_produtos_service__WEBPACK_IMPORTED_MODULE_3__["TecnologiaInformacaoEstoqueProdutosService"], _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_5__["ConfirmModalService"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_11__["RouterService"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_15__["DateService"]])], TecnologiaInformacaoCadastrosOcorrenciaListaComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=ocorrencia-ocorrencia-module-es5.js.map