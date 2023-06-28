(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["perfis-perfis-module"], {
    /***/
    "8oZc":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/perfis/cadastro/cadastro.component.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function oZc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\r\n<app-header [appTitle]=\"appTitle\">\r\n  <button \r\n    (click)=\"onSave()\"\r\n    [disabled] = \"form.status == 'INVALID'\"\r\n    >\r\n    Guardar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6\">\r\n      <form\r\n        [formGroup]=\"form\"\r\n        class=\"d-flex flex-column\"\r\n        autocomplete=\"off\"\r\n        [hidden]=\"loading\"\r\n      >\r\n        <div class=\"mtc-title\">Dados do perfil</div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col\">\r\n            <label for=\"nome\">Nome</label>\r\n            <input\r\n              id=\"nome\"\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              formControlName=\"nome\"\r\n              placeholder=\"Digite...\"\r\n              [ngClass]=\"onFieldRequired('nome')\"\r\n            >\r\n            <invalid-form-control [show]=\"onFieldInvalid('nome')\" message=\"Nome é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-6\">\r\n            <label for=\"sigla\">Sigla</label>\r\n            <input \r\n              id=\"sigla\"\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              formControlName=\"sigla\"\r\n              placeholder=\"Digite...\"\r\n              [ngClass]=\"onFieldRequired('sigla')\"\r\n            >\r\n            <invalid-form-control [show]=\"onFieldInvalid('sigla')\" message=\"Sigla é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"situacao\">Situação</label>\r\n            <select\r\n              name=\"situacao\"\r\n              id=\"situacao\"\r\n              class=\"form-control\"\r\n              formControlName=\"situacao\"\r\n            >\r\n              <option value=\"1\">Ativo</option>\r\n              <option value=\"0\">Inativo</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n      </form>\r\n      <div class=\"row mb-4\">\r\n        <div class=\"col mb-3\">\r\n          <hr>\r\n        </div>\r\n      </div>\r\n      <message\r\n        *ngIf=\"atividadesAssociadasLoading\"\r\n        icon=\"fas fa-cog fa-spin\"\r\n        text=\"Estamos buscando informações do perfil selecionado...\">\r\n      </message>\r\n      <div [hidden]=\"atividadesAssociadasLoading\">\r\n        <div class=\"row mb-2 mt-4\">\r\n          <div class=\"col mt-auto\">\r\n            <div class=\"mtc-title mb-0\">Atividades associados ao perfil</div>\r\n          </div>\r\n          <div class=\"col\">\r\n            <div class=\"d-flex justify-content-end\">\r\n              <button\r\n                type=\"button\"\r\n                class=\"btn btn-sm btn-outline-danger\"\r\n                (click)=\"onRemoverAssociacao()\">\r\n                <i class=\"fas fa-trash\"></i>\r\n                <span>Limpar</span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\" *ngIf=\"!atividadesAssociadasLoading && atividadesAssociadas.length > 0\">\r\n          <div class=\"col\">\r\n            <custom-table [config]=\"tableConfigAtividadesAssociadas\">\r\n              <ng-template #thead let-thead>\r\n                <tr>\r\n                  <th\r\n                    scope=\"col\"\r\n                    class=\"text-center\"\r\n                    style=\"width: 5%\">\r\n                    <btn-icon\r\n                      [icon]=\"toggle?.atividadesAssociadas ? 'fas fa-check-square' : 'far fa-square'\"\r\n                      size=\"small\"\r\n                      (click)=\"onToggleAll('atividadesAssociadas')\">\r\n                    </btn-icon>\r\n                  </th>\r\n                  <th scope=\"col\" width=\"20%\">Código</th>\r\n                  <th scope=\"col\" width=\"70%\">Descrição</th>\r\n                  <th scope=\"col\" width=\"5%\"></th>\r\n                </tr>\r\n              </ng-template>\r\n              <ng-template #tbody let-tbody>\r\n                <tr *ngFor=\"let item of atividadesAssociadas\" >\r\n                  <td class=\"text-center\" style=\"width: 5%\">\r\n                    <btn-icon\r\n                      [icon]=\"item.checked == 1 ? 'fas fa-check-square' : 'far fa-square'\"\r\n                      size=\"small\"\r\n                      (click)=\"item.checked = !item.checked\">\r\n                    </btn-icon>\r\n                  </td>\r\n                  <td width=\"20%\">{{ item.id }}</td>\r\n                  <td width=\"70%\">\r\n                   {{ item.nome | uppercase }}\r\n                  </td>\r\n                  <td class=\"text-center\" width=\"5%\">\r\n                    <btn-icon\r\n                      icon=\"fas fa-trash\"\r\n                      size=\"small\"\r\n                      (click)=\"onRemoverAssociacao(item)\"\r\n                      *ngIf=\"!item.loading\"  \r\n                    >\r\n                    </btn-icon>\r\n                    <div class=\"text-primary small\" *ngIf=\"item.loading\">\r\n                      <i class=\"fas fa-spinner fa-spin\"></i>\r\n                    </div>\r\n                  </td>\r\n                </tr>\r\n              </ng-template>\r\n            </custom-table>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\" *ngIf=\"!atividadesLoading && atividadesAssociadas.length === 0\">\r\n          <div class=\"col\">\r\n            <message\r\n              icon=\"fas fa-exchange-alt\"\r\n              text=\"Nenhuma associação encontrada\">\r\n            </message>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-6 border-left\">\r\n      <div class=\"row mb-2\">\r\n        <div class=\"col mt-auto\">\r\n          <div class=\"mtc-title mb-0\">Pesquisa de Atividades</div>\r\n        </div>\r\n        <div class=\"col\">\r\n          <div class=\"d-flex justify-content-end\">\r\n            <button\r\n              type=\"button\"\r\n              class=\"btn btn-sm btn-outline-secondary\"\r\n              (click)=\"getAtividades()\">\r\n              <i class=\"fas fa-search\"></i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <advanced-filter>\r\n        <form [formGroup]=\"formAtividades\" autocomplete=\"off\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-4\">\r\n              <label for=\"buscarPor\">BUSCAR POR</label>\r\n              <select\r\n                class=\"form-control custom-select\"\r\n                formControlName=\"buscarPor\"\r\n              >\r\n                <option value=\"id\">Id</option>\r\n                <option value=\"nome\" selected>Nome</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"form-group col-8\">\r\n              <label>TERMO DE PESQUISA</label>\r\n              <div class=\"input-group\">\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  formControlName=\"pesquisa\"\r\n                  (keyup.enter)=\"getAtividades()\"\r\n                >\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </advanced-filter>\r\n      <div *ngIf=\"atividades.length > 0 && !atividadesLoading\">\r\n        <div class=\"row mb-2\">\r\n          <div class=\"col mt-auto\">\r\n            <div class=\"mtc-title mb-0\">Seleção de Atividades</div>\r\n          </div>\r\n          <div class=\"col\">\r\n            <div class=\"d-flex justify-content-end\">\r\n              <button\r\n                type=\"button\"\r\n                class=\"btn btn-sm btn-outline-primary\"\r\n                (click)=\"onAssociarAtividades()\"\r\n                [disabled]=\"!form.get('id')?.value\">\r\n                <i class=\"fas fa-exchange-alt\"></i>\r\n                <span\r\n                  [tooltip]=\"!form.get('id')?.value ? 'Selecione um perfil':''\"\r\n                  container=\"body\"\r\n                  placement =\"left\">Associar\r\n                </span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n            <custom-table [config]=\"tableConfigAtividades\">\r\n              <ng-template #thead let-thead>\r\n                <tr>\r\n                  <th\r\n                    scope=\"col\"\r\n                    class=\"text-center\"\r\n                    style=\"width: 5%\">\r\n                    <btn-icon\r\n                      [icon]=\"toggle?.atividades ? 'fas fa-check-square' : 'far fa-square'\"\r\n                      size=\"small\"\r\n                      (click)=\"onToggleAll('atividades')\">\r\n                    </btn-icon>\r\n                  </th>\r\n                  <th scope=\"col\" style=\"width: 90%\">Atividades</th>\r\n                  <th style=\"width: 5%\"></th>\r\n                </tr>\r\n              </ng-template>\r\n              <ng-template #tbody let-tbody>\r\n                <tr *ngFor=\"let item of atividades\">\r\n                  <td class=\"text-center\" style=\"width: 5%\">\r\n                    <btn-icon\r\n                      [icon]=\"item.checked == 1 ? 'fas fa-check-square' : 'far fa-square'\"\r\n                      size=\"small\"\r\n                      (click)=\"item.checked = !item.checked\">\r\n                    </btn-icon>\r\n                  </td>\r\n                  <td\r\n                    class=\"hover\"\r\n                    style=\"width: 90%\"\r\n                    (click)=\"item.checked = !item.checked\">\r\n                    ({{ item.moduloNome }}) ({{ item.id }}) {{ item.nome | uppercase }}\r\n                  </td>\r\n                  <td style=\"width: 5%\">\r\n                    <div class=\"text-primary small\" *ngIf=\"item.loading\">\r\n                      <i class=\"fas fa-spinner fa-spin\"></i>\r\n                    </div>\r\n                  </td>\r\n                </tr>\r\n              </ng-template>\r\n            </custom-table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\" *ngIf=\"atividadesLoading\">\r\n        <div class=\"col\">\r\n          <message\r\n            icon=\"fas fa-cog fa-spin\"\r\n            text=\"Estamos pesquisando os atividades para você...\">\r\n          </message>\r\n        </div>\r\n      </div>\r\n      <div>\r\n        <div class=\"row\" *ngIf=\"(atividades.length == 0) && !atividadesLoading\">\r\n          <div class=\"col\">\r\n            <message\r\n              icon=\"fas fa-box-open\"\r\n              text=\"Nenhuma informação encontrada\">\r\n            </message>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</app-body>";
      /***/
    },

    /***/
    "C6Zo":
    /*!*******************************************************!*\
      !*** ./src/app/modules/admin/perfis/perfis.module.ts ***!
      \*******************************************************/

    /*! exports provided: AdminPerfisModule */

    /***/
    function C6Zo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminPerfisModule", function () {
        return AdminPerfisModule;
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


      var _perfis_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./perfis-routing.module */
      "Q/a3");
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


      var src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/core/module-wrapper/module-wrapper.module */
      "RoXV");
      /* harmony import */


      var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/core/not-found/not-found.module */
      "sCnT");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/pipes/pipes.module */
      "9Xeq");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./lista/lista.component */
      "pAYm");
      /* harmony import */


      var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./cadastro/cadastro.component */
      "Jcik");

      var AdminPerfisModule = /*#__PURE__*/_createClass(function AdminPerfisModule() {
        _classCallCheck(this, AdminPerfisModule);
      });

      AdminPerfisModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_lista_lista_component__WEBPACK_IMPORTED_MODULE_12__["AdminPerfisListaComponent"], _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_13__["AdminPerfisCadastroComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _perfis_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdminPerfisRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TabsModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TimepickerModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(), src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_7__["ModuleWrapperModule"], src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_8__["NotFoundModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_10__["TemplatesModule"], src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_11__["PipesModule"]]
      })], AdminPerfisModule);
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
    "Jcik":
    /*!*********************************************************************!*\
      !*** ./src/app/modules/admin/perfis/cadastro/cadastro.component.ts ***!
      \*********************************************************************/

    /*! exports provided: AdminPerfisCadastroComponent */

    /***/
    function Jcik(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminPerfisCadastroComponent", function () {
        return AdminPerfisCadastroComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./cadastro.component.html */
      "8oZc");
      /* harmony import */


      var _cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cadastro.component.scss */
      "gLWt");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _services_perfis_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/perfis.service */
      "6bs2");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _atividades_services_atividades_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../atividades/services/atividades.service */
      "UNg1");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/modules/confirm-modal/confirm-modal.service */
      "FOez"); //angular
      //services
      //rxjs


      var AdminPerfisCadastroComponent = /*#__PURE__*/function () {
        function AdminPerfisCadastroComponent(service, formBuilder, pnotify, atividadesService, activatedRoute, router, confirmModalService) {
          _classCallCheck(this, AdminPerfisCadastroComponent);

          this.service = service;
          this.formBuilder = formBuilder;
          this.pnotify = pnotify;
          this.atividadesService = atividadesService;
          this.activatedRoute = activatedRoute;
          this.router = router;
          this.confirmModalService = confirmModalService;
          this.appTitle = "Cadastros";
          this.loading = true;
          this.loadingNavBar = false;
          /* Pagination */

          this.itemsPerPage = 100;
          this.totalItems = 10;
          this.currentPage = 1;
          /* Pagination */

          this.tableConfig = {
            subtitleBorder: true
          };
          this.atividades = [];
          this.atividadesLoading = false;
          this.atividadesAssociadas = [];
          this.atividadesAssociadasLoading = false;
          this.tableConfigAtividadesAssociadas = {
            fixedHeader: false,
            bodyHeight: 243,
            hover: false
          };
          this.tableConfigAtividades = {
            fixedHeader: false,
            bodyHeight: 243
          };
          this.toggle = {
            atividades: false,
            atividadesAssociadas: false
          };
        }

        _createClass(AdminPerfisCadastroComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.buildForm();
            this.onActivatedRoute();
            this.registrarAcesso();
            this.setBreadCrumb();
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            this.breadCrumbTree = [{
              descricao: 'Home',
              routerLink: "/admin/home"
            }, {
              descricao: 'Lista de perfis',
              routerLink: "/admin/perfis"
            }, {
              descricao: this.appTitle
            }];
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var _a;

            (_a = this.$activatedRouteSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
          }
        }, {
          key: "onActivatedRoute",
          value: function onActivatedRoute() {
            var params = this.activatedRoute.snapshot.params;

            if (!(params === null || params === void 0 ? void 0 : params.id)) {
              this.loading = false;
              return;
            }

            this.getPerfil(params === null || params === void 0 ? void 0 : params.id);
            this.getAtividadesAssociadas({
              "perfilId": params === null || params === void 0 ? void 0 : params.id
            });
          }
        }, {
          key: "buildForm",
          value: function buildForm() {
            this.form = this.formBuilder.group({
              id: [null],
              nome: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              sigla: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              situacao: [1]
            });
            this.formAtividades = this.formBuilder.group({
              buscarPor: ['nome'],
              pesquisa: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            });
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
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();

            if (this.form.controls[field].validator) {
              var validationResult = this.form.controls[field].validator(formControl);
              required = validationResult !== null && validationResult.required === true;
            }

            if (required) {
              return 'is-required';
            }
          }
        }, {
          key: "getPerfil",
          value: function getPerfil(id) {
            var _this = this;

            this.loading = true;
            this.service.getPerfil({
              id: id
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(function () {
              _this.loading = false;
            })).subscribe(function (response) {
              if (response.status !== 200) {
                return;
              }

              var data = response.body["data"][0];

              _this.form.patchValue(data);
            });
          }
        }, {
          key: "onSave",
          value: function onSave() {
            var _this2 = this;

            this.loadingNavBar = true;
            var params = this.form.value;
            this.service.postPerfil(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(function () {
              _this2.loadingNavBar = false;
            })).subscribe(function (response) {
              _this2.pnotify.success();

              _this2.router.navigate(["./../"], {
                relativeTo: _this2.activatedRoute
              });
            }, function (error) {
              var _a;

              var message = (_a = error.error) === null || _a === void 0 ? void 0 : _a.message;
              message ? _this2.pnotify.error(message) : _this2.pnotify.error();
            });
          }
        }, {
          key: "getAtividades",
          value: function getAtividades() {
            var _this3 = this;

            var _a, _b;

            var buscarPor = (_a = this.formAtividades.get('buscarPor')) === null || _a === void 0 ? void 0 : _a.value;
            var pesquisa = (_b = this.formAtividades.get('pesquisa')) === null || _b === void 0 ? void 0 : _b.value;
            var params = {};

            if (buscarPor) {
              params[buscarPor] = pesquisa !== null && pesquisa !== void 0 ? pesquisa : '';
            }

            this.toggle.atividades = false;
            this.atividadesLoading = true;
            this.atividadesService.getAtividades(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(function () {
              _this3.atividadesLoading = false;
            })).subscribe(function (response) {
              if (response.status != 200) {
                _this3.atividades = [];
                return;
              }

              var data = response.body['data'];
              _this3.atividades = data.filter(function (atividade) {
                return !_this3.atividadesAssociadas.some(function (item) {
                  return item.id == atividade.id;
                });
              });
              _this3.tableConfigAtividades.fixedHeader = _this3.atividades.length > 9 ? true : false;
            }, function (error) {
              _this3.atividades = [];
              console.log(error);
            });
          }
        }, {
          key: "getAtividadesAssociadas",
          value: function getAtividadesAssociadas(params) {
            var _this4 = this;

            params.IN_STAT = '1';
            params.IN_PAGI = '0';
            /* params.ORDE_BY = 'ID_REFE_ERP' */

            this.atividadesAssociadasLoading = true;
            this.atividadesService.getAtividades(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(function () {
              _this4.atividadesAssociadasLoading = false;
            })).subscribe(function (response) {
              if (response.status !== 200) {
                return;
              }

              _this4.atividadesAssociadas = response.body['data'];
              _this4.tableConfigAtividadesAssociadas.fixedHeader = _this4.atividadesAssociadas.length > 9 ? true : false;
            });
          }
        }, {
          key: "onAssociarAtividades",
          value: function onAssociarAtividades() {
            var _this5 = this;

            var atividades = this.atividades.filter(function (material) {
              return material.checked;
            });
            this.toggle.atividades = false;
            atividades.map(function (item) {
              var _a, _b;

              item.loading = true;

              if (_this5.atividadesAssociadas.some(function (atividade) {
                return (atividade === null || atividade === void 0 ? void 0 : atividade.id) === item.id;
              })) {
                return;
              }

              var params = {
                "atividadeId": (_a = item === null || item === void 0 ? void 0 : item.id) !== null && _a !== void 0 ? _a : "",
                "perfilId": (_b = _this5.form.get("id").value) !== null && _b !== void 0 ? _b : "",
                "status": "1"
              };

              _this5.service.postAtividadesAssociadas(params).subscribe(function (response) {
                if (response.status === 200) {
                  _this5.atividadesAssociadas = [].concat(_toConsumableArray(_this5.atividadesAssociadas), [Object.assign(Object.assign({}, item), {
                    checked: false,
                    loading: false,
                    attividadeId: item.id,
                    perfilId: _this5.form.get("id").value
                  })]);
                  _this5.atividades = _this5.atividades.filter(function (material) {
                    return !material.checked;
                  });
                  _this5.tableConfigAtividadesAssociadas.fixedHeader = _this5.atividadesAssociadas.length > 9 ? true : false;
                }
              }, function (error) {
                item.loading = false;
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
          value: function onRemoverAssociacao(atividade) {
            var _this6 = this;

            var _atividades = atividade ? [atividade] : this.atividadesAssociadas.filter(function (atividade) {
              return atividade.checked;
            });

            var atividades = _atividades.map(function (item) {
              return {
                atividadeId: item.id,
                perfilId: _this6.form.get('id').value
              };
            });

            this.toggle.atividadesAssociadas = false;

            if (atividades.length == 0) {
              this.pnotify.notice("Nenhuma atividade selecionada.");
              return;
            }

            this.confirmDelete().subscribe(function (response) {
              if (!response) {
                _this6.atividadesAssociadas.map(function (item) {
                  return item.checked = false;
                });

                return;
              }

              atividades.map(function (item) {
                item["status"] = '0';
                item["loading"] = true;

                _this6.service.postAtividadesAssociadas(item).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(function () {
                  item["loading"] = false;
                })).subscribe(function (response) {
                  if (response.status !== 200) {
                    return;
                  }

                  _this6.atividadesAssociadas = _this6.atividadesAssociadas.filter(function (atividade) {
                    return atividade.id != item.atividadeId;
                  });
                  _this6.tableConfigAtividadesAssociadas.fixedHeader = _this6.atividadesAssociadas.length > 9 ? true : false;
                });
              });
            });
          }
        }, {
          key: "onToggleAll",
          value: function onToggleAll(item) {
            var _this7 = this;

            this.toggle[item] = !this.toggle[item];
            this[item].map(function (material) {
              return material.checked = _this7.toggle[item];
            });
          }
        }]);

        return AdminPerfisCadastroComponent;
      }();

      AdminPerfisCadastroComponent.ctorParameters = function () {
        return [{
          type: _services_perfis_service__WEBPACK_IMPORTED_MODULE_6__["AdminPerfisService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"]
        }, {
          type: _atividades_services_atividades_service__WEBPACK_IMPORTED_MODULE_8__["AdminAtividadesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_10__["ConfirmModalService"]
        }];
      };

      AdminPerfisCadastroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'admin-perfis-cadastro',
        template: _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_perfis_service__WEBPACK_IMPORTED_MODULE_6__["AdminPerfisService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"], _atividades_services_atividades_service__WEBPACK_IMPORTED_MODULE_8__["AdminAtividadesService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_10__["ConfirmModalService"]])], AdminPerfisCadastroComponent);
      /***/
    },

    /***/
    "Q/a3":
    /*!***************************************************************!*\
      !*** ./src/app/modules/admin/perfis/perfis-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: AdminPerfisRoutingModule */

    /***/
    function QA3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminPerfisRoutingModule", function () {
        return AdminPerfisRoutingModule;
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


      var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./cadastro/cadastro.component */
      "Jcik");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./lista/lista.component */
      "pAYm");

      var routes = [{
        path: '',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_4__["AdminPerfisListaComponent"]
      }, {
        path: 'novo',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_3__["AdminPerfisCadastroComponent"]
      }, {
        path: ':id',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_3__["AdminPerfisCadastroComponent"]
      }];

      var AdminPerfisRoutingModule = /*#__PURE__*/_createClass(function AdminPerfisRoutingModule() {
        _classCallCheck(this, AdminPerfisRoutingModule);
      });

      AdminPerfisRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AdminPerfisRoutingModule);
      /***/
    },

    /***/
    "Rk3r":
    /*!******************************************************!*\
      !*** ./src/app/shared/services/core/date.service.ts ***!
      \******************************************************/

    /*! exports provided: DateService */

    /***/
    function Rk3r(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DateService", function () {
        return DateService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var DateService = /*#__PURE__*/function () {
        function DateService() {
          _classCallCheck(this, DateService);

          this.months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
          this.weeks = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado'];
        }

        _createClass(DateService, [{
          key: "sameDay",
          value: function sameDay(dateA, dateB) {
            return dateA.getFullYear() === dateB.getFullYear() && dateA.getMonth() === dateB.getMonth() && dateA.getDate() === dateB.getDate();
          }
        }, {
          key: "getHourMinute",
          value: function getHourMinute(date) {
            var getHours = date.getHours();
            var getMinutes = date.getMinutes();
            var hours, minutes;

            if (getHours < 10) {
              hours = "0".concat(getHours);
            } else {
              hours = getHours;
            }

            if (getMinutes < 10) {
              minutes = "0".concat(getMinutes);
            } else {
              minutes = getMinutes;
            }

            return "".concat(hours, ":").concat(minutes);
          }
        }, {
          key: "getFullDate",
          value: function getFullDate(dateA, dateB) {
            var showTime = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
            var day = dateA.getDate();
            var weekDay = dateA.getDay();
            var month = dateA.getMonth();
            var year = dateA.getFullYear();
            var hour = this.getHourMinute(dateA);

            if (showTime) {
              if (dateB) {
                var hourB = this.getHourMinute(dateB);
                return "".concat(this.weeks[weekDay], ", ").concat(day, " de ").concat(this.months[month], " del ").concat(year, ", desde ").concat(hour, " hasta ").concat(hourB);
              }

              return "".concat(this.weeks[weekDay], ", ").concat(day, " de ").concat(this.months[month], " del ").concat(year, " hasta ").concat(hour);
            } else {
              return "".concat(this.weeks[weekDay], ", ").concat(day, " de ").concat(this.months[month], " del ").concat(year);
            }
          }
        }, {
          key: "getFullMonth",
          value: function getFullMonth(date) {
            return this.months[date.getMonth()];
          }
        }, {
          key: "getFirstDayYear",
          value: function getFirstDayYear() {
            var date = new Date();
            return new Date(date.getFullYear(), 0, 1);
          }
        }, {
          key: "getLastDayYear",
          value: function getLastDayYear() {
            var date = new Date();
            return new Date(date.getFullYear(), 11, 31);
          }
        }, {
          key: "getFirstDayMonth",
          value: function getFirstDayMonth() {
            var date = new Date();
            return new Date(date.getFullYear(), date.getMonth(), 1);
          }
        }, {
          key: "getLastDayMonth",
          value: function getLastDayMonth() {
            var date = new Date();
            return new Date(date.getFullYear(), date.getMonth() + 1, 0);
          }
        }, {
          key: "getToday",
          value: function getToday() {
            var date = new Date();
            return new Date(date.getFullYear(), date.getMonth(), date.getDate());
          }
        }, {
          key: "convert2PhpDate",
          value: function convert2PhpDate(date) {
            var y = date.getFullYear();
            var m = date.getMonth() + 1;
            var d = date.getDate();
            var h = date.getHours();
            var i = date.getMinutes();
            if (m < 10) m = "0".concat(m);
            if (d < 10) d = "0".concat(d);
            if (h < 10) h = "0".concat(h);
            if (i < 10) i = "0".concat(i);
            return "".concat(y, "-").concat(m, "-").concat(d, " ").concat(h, ":").concat(i);
          }
        }, {
          key: "convertToBrazilianDate",
          value: function convertToBrazilianDate(date) {
            var y = date.getFullYear().toString();
            var m = (date.getMonth() + 1).toString().padStart(2, '0');
            var d = date.getDate().toString().padStart(2, '0');
            var h = date.getHours().toString().padStart(2, '0');
            var i = date.getMinutes().toString().padStart(2, '0');
            var s = date.getSeconds().toString().padStart(2, '0');
            return "".concat(d, "/").concat(m, "/").concat(y, " ").concat(h, ":").concat(i, ":").concat(s);
          }
        }, {
          key: "convertMysqlTime",
          value: function convertMysqlTime(time) {
            if (time !== null) {
              var timeSplit = time.split(':');
              return "".concat(timeSplit[0], ":").concat(timeSplit[1]);
            }

            return time;
          }
        }, {
          key: "convertToUrlDate",
          value: function convertToUrlDate(date) {
            var d = date.getDate();
            var m = date.getMonth() + 1;
            var y = date.getFullYear();
            if (d < 10) d = "0".concat(d);
            if (m < 10) m = "0".concat(m);
            return "".concat(d, "-").concat(m, "-").concat(y);
          }
        }, {
          key: "convertStringToDate",
          value: function convertStringToDate(stringDate, dateType) {
            var date;

            if (stringDate.indexOf(':') > -1) {
              var stringDateSplit = stringDate.split(' ');
              var dateSplit = stringDateSplit[0].split('-');
              var timeSplit = stringDateSplit[1].split(':');

              if (dateType == 'latam') {
                date = new Date(dateSplit[2], parseInt(dateSplit[1]) - 1, dateSplit[0].substr(0, 2), timeSplit[0], timeSplit[1], timeSplit[2]);
              } else if (dateType == 'usa') {
                date = new Date(dateSplit[0], parseInt(dateSplit[1]) - 1, dateSplit[2].substr(0, 2), timeSplit[0], timeSplit[1], timeSplit[2]);
              }
            } else {
              var _dateSplit = stringDate.split('-');

              if (dateType == 'latam') {
                date = new Date(_dateSplit[2], parseInt(_dateSplit[1]) - 1, _dateSplit[0].substr(0, 2));
              } else if (dateType == 'usa') {
                date = new Date(_dateSplit[0], parseInt(_dateSplit[1]) - 1, _dateSplit[2].substr(0, 2));
              }
            }

            return date;
          }
        }, {
          key: "formatWithSlashes",
          value: function formatWithSlashes(stringDate, dateType) {
            var dateSplit = stringDate.split('-');
            var date;

            if (dateType == 'latam') {
              date = "".concat(dateSplit[2], "/").concat(dateSplit[1], "/").concat(dateSplit[0]);
            } else if (dateType == 'usa') {
              date = "".concat(dateSplit[1], "/").concat(dateSplit[2], "/").concat(dateSplit[0]);
            }

            return date;
          }
        }, {
          key: "addDaysToDate",
          value: function addDaysToDate(date, days) {
            return new Date(date.setDate(date.getDate() + days));
          }
        }]);

        return DateService;
      }();

      DateService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], DateService);
      /***/
    },

    /***/
    "WJIb":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/perfis/lista/lista.component.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function WJIb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\r\n<app-header appTitle=\"Lista de Perfis\">\r\n  <button type=\"button\" (click)=\"onReset()\">Limpar</button>\r\n  <button type=\"button\" (click)=\"onFilter()\">Filtrar</button>\r\n  <button type=\"button\" [routerLink]=\"['../novo']\">Adicionar</button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <advanced-filter>\r\n    <form autocomplete=\"off\" [formGroup]=\"form\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"nome\">Nome</label>\r\n          <input id=\"nome\" type=\"text\" class=\"form-control\" placeholder=\"DIGITE...\" formControlName=\"nome\" (keyup.enter)=\"onFilter()\">\r\n        </div>\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"matricula\">Sigla</label>\r\n          <input id=\"matricula\" type=\"text\" class=\"form-control\" placeholder=\"DIGITE...\" formControlName=\"sigla\" (keyup.enter)=\"onFilter()\">\r\n        </div>\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"situacao\">Situação</label>\r\n          <select\r\n            class=\"form-control custom-select\"\r\n            formControlName=\"situacao\"  \r\n            (change)=\"onFilter()\"\r\n          >\r\n            <option value=\"1\">Ativo</option>\r\n            <option value=\"0\">Inativo</option>\r\n            <option value=\"''\">Todos</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group col-1\">\r\n          <label for=\"registrosPorPagina\">Registros</label>\r\n          <select\r\n            class=\"custom-select form-control\"\r\n            (change)=\"onFilter()\"\r\n            formControlName=\"registrosPorPagina\"\r\n          >\r\n            <option value=\"10\">10</option>\r\n            <option value=\"25\">25</option>\r\n            <option value=\"50\">50</option>\r\n            <option value=\"100\">100</option>\r\n            <option value=\"250\">250</option>\r\n            <option value=\"500\">500</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </advanced-filter>\r\n  <div class=\"col-12 p-0\" [hidden]=\"loading || noResult\">\r\n    <div>\r\n      <custom-table [config]=\"tableConfig\">\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n            <th style=\"width:100px\">Id</th>\r\n            <th>Nome</th>\r\n            <th>Sigla</th>\r\n            <th class=\"align-middle\" style=\"width:70px\"></th>\r\n            <!-- <th class=\"align-middle\" style=\"width:70px\"></th> -->\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let item of data; let i = index\">\r\n            <td class=\"text-truncate\" [ngClass]=\"item.situacao == 1 ? 'border-success' : 'border-danger'\">\r\n              {{ item.id | number:'6.0-0' }}\r\n            </td>\r\n            <td>\r\n              {{ item.nome }}\r\n            </td>\r\n            <td> {{ item.sigla }} </td>\r\n            <td class=\"align-middle\">\r\n              <button\r\n                class=\"btn-icon-sm\"\r\n                tooltip=\"Editar\"\r\n                container=\"body\"\r\n              >\r\n                <a [routerLink]=\"['./', item.id]\">\r\n                  <i class=\"fas fa-edit\"></i>\r\n                </a>\r\n              </button>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n    </div>\r\n    <div>\r\n        Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\r\n      <pagination\r\n        [maxSize]=\"10\"\r\n        [totalItems]=\"totalItems\"\r\n        (pageChanged)=\"onPageChanged($event)\"\r\n        [(itemsPerPage)]=\"itemsPerPage\"\r\n        [boundaryLinks]=\"true\"\r\n        [(ngModel)]=\"currentPage\"\r\n        previousText=\"&lsaquo;\"\r\n        nextText=\"&rsaquo;\"\r\n        firstText=\"&laquo;\"\r\n        lastText=\"&raquo;\">\r\n      </pagination>\r\n    </div>\r\n  </div>\r\n  <div [hidden]=\"loading || !noResult\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 80%\">\r\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n  </div>\r\n</app-body>\r\n";
      /***/
    },

    /***/
    "bJ6V":
    /*!*****************************************************************!*\
      !*** ./src/app/modules/admin/perfis/lista/lista.component.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function bJ6V(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".fa-check {\n  color: green;\n}\n\n.fa-ban {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi9wZXJmaXMvbGlzdGEvbGlzdGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FkbWluL3BlcmZpcy9saXN0YS9saXN0YS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYS1jaGVjayB7XHJcbiAgY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG4uZmEtYmFuIHtcclxuICBjb2xvcjogcmVkO1xyXG59Il19 */";
      /***/
    },

    /***/
    "gLWt":
    /*!***********************************************************************!*\
      !*** ./src/app/modules/admin/perfis/cadastro/cadastro.component.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function gLWt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vcGVyZmlzL2NhZGFzdHJvL2NhZGFzdHJvLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "pAYm":
    /*!***************************************************************!*\
      !*** ./src/app/modules/admin/perfis/lista/lista.component.ts ***!
      \***************************************************************/

    /*! exports provided: AdminPerfisListaComponent */

    /***/
    function pAYm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminPerfisListaComponent", function () {
        return AdminPerfisListaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lista.component.html */
      "WJIb");
      /* harmony import */


      var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lista.component.scss */
      "bJ6V");
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


      var _services_perfis_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/perfis.service */
      "6bs2");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");
      /* harmony import */


      var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/services/core/date.service */
      "Rk3r"); //angular
      //rxjs
      //services


      var AdminPerfisListaComponent = /*#__PURE__*/function () {
        function AdminPerfisListaComponent(service, pnotify, route, formBuilder, activatedRoute, atividadesService, routerService, dateService) {
          _classCallCheck(this, AdminPerfisListaComponent);

          this.service = service;
          this.pnotify = pnotify;
          this.route = route;
          this.formBuilder = formBuilder;
          this.activatedRoute = activatedRoute;
          this.atividadesService = atividadesService;
          this.routerService = routerService;
          this.dateService = dateService;
          this.loading = true;
          this.loadingNavBar = false;
          this.breadCrumbTree = [{
            descricao: 'Home',
            routerLink: '/admin/home'
          }, {
            descricao: 'Lista de perfis'
          }];
          /* Pagination */

          this.itemsPerPage = 100;
          this.totalItems = 10;
          this.currentPage = 1;
          /* Pagination */

          this.tableConfig = {
            subtitleBorder: true
          };
          this.form = this.formBuilder.group({
            nome: [null],
            sigla: [null],
            pagina: [1],
            registrosPorPagina: [this.itemsPerPage],
            situacao: ['1'],
            t: [new Date().getTime()]
          });
        }

        _createClass(AdminPerfisListaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registrarAcesso();
            this.onActivatedRoute();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.$activatedRouteSubscription.unsubscribe();
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "onActivatedRoute",
          value: function onActivatedRoute() {
            var _this8 = this;

            this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (response) {
              var _response = _this8.routerService.getBase64UrlParams(response);

              if (_response === null || _response === void 0 ? void 0 : _response.registrosPorPagina) {
                _this8.itemsPerPage = _response === null || _response === void 0 ? void 0 : _response.registrosPorPagina;
              }

              _this8.form.patchValue(_response);

              _this8.getPerfis(_this8.getParams());
            });
          }
        }, {
          key: "getPerfis",
          value: function getPerfis(params) {
            var _this9 = this;

            this.itemsPerPage = this.form.get("registrosPorPagina").value;

            if (!this.loading) {
              this.loadingNavBar = true;
            }

            this.service.getPerfis(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              _this9.loading = false;
              _this9.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status !== 200) {
                _this9.data = [];
                _this9.noResult = true;

                _this9.pnotify.notice('Não houve retorno para sua consulta');

                return;
              }

              _this9.noResult = false;
              _this9.data = response.body['data'];
              _this9.totalItems = response.body['total'];
            }, function (error) {
              _this9.data = [];
              _this9.noResult = true;

              _this9.pnotify.error();
            });
          }
        }, {
          key: "onPageChanged",
          value: function onPageChanged(event) {
            this.form.get('pagina').setValue(event.page);
            this.form.get('t').setValue(new Date().getTime());
            this.route.navigate([], {
              queryParams: this.routerService.setBase64UrlParams(this.getParams())
            });
          }
        }, {
          key: "onFilter",
          value: function onFilter() {
            this.form.get("t").setValue(new Date().getTime());
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
          key: "onReset",
          value: function onReset() {
            this.form.patchValue({
              nome: null,
              sigla: null,
              pagina: 1,
              registrosPorPagina: this.itemsPerPage,
              situacao: '1',
              time: [new Date().getTime()]
            });
            this.onFilter();
          }
        }]);

        return AdminPerfisListaComponent;
      }();

      AdminPerfisListaComponent.ctorParameters = function () {
        return [{
          type: _services_perfis_service__WEBPACK_IMPORTED_MODULE_7__["AdminPerfisService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"]
        }, {
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_11__["DateService"]
        }];
      };

      AdminPerfisListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'admin-perfis-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_perfis_service__WEBPACK_IMPORTED_MODULE_7__["AdminPerfisService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_11__["DateService"]])], AdminPerfisListaComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=perfis-perfis-module-es5.js.map