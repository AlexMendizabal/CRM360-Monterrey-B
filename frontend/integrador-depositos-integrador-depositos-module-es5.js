(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["integrador-depositos-integrador-depositos-module"], {
    /***/
    "3hcN":
    /*!***************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/abastecimento/cadastros/integrador-depositos/lista/lista.component.html ***!
      \***************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function hcN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen\r\n  *ngIf=\"loaderFullScreen\"\r\n></loader-spinner-full-screen>\r\n<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<app-header appTitle=\"Vínculo Integrador X Depósito\">\r\n  <button type=\"button\" (click)=\"onFilter()\">\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\r\n  <advanced-filter>\r\n    <form [formGroup]=\"form\" autocomplete=\"off\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-lg-3\">\r\n          <label for=\"integrador\">Integrador</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"false\"\r\n            [multiple]=\"true\"\r\n            [items]=\"integradores\"\r\n            [virtualScroll]=\"true\"\r\n            [hideSelected]=\"true\"\r\n            [closeOnSelect]=\"true\"\r\n            placeholder=\"Selecione...\"\r\n            bindLabel=\"NM_APOI_INTE_PEDI\"\r\n            bindValue=\"ID\"\r\n            formControlName=\"integrador\"\r\n          >\r\n          </ng-select>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </advanced-filter>\r\n  <div class=\"row\">\r\n    <div\r\n      [ngClass]=\"{ 'col-12': !compressedTable, 'col-6 pr-0': compressedTable }\"\r\n      *ngIf=\"loading\"\r\n    >\r\n      <custom-table [config]=\"tableConfig\">\r\n        <ng-template #thead let-thead>\r\n          <tr class=\"text-center\">\r\n            <th scope=\"col\" class=\"hover\" (click)=\"sort('NM_APOI_INTE_PEDI')\">\r\n              Integrador\r\n              <span *ngIf=\"key == 'NM_APOI_INTE_PEDI'\"\r\n                ><i\r\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\r\n                ></i\r\n              ></span>\r\n              <span *ngIf=\"key != 'NM_APOI_INTE_PEDI'\"\r\n                ><i [ngClass]=\"'fas fa-sort'\"></i\r\n              ></span>\r\n            </th>\r\n            <th\r\n              scope=\"col\"\r\n              class=\"hover\"\r\n              [hidden]=\"compressedTable\"\r\n              width=\"5%\"\r\n            ></th>\r\n            <th\r\n              scope=\"col\"\r\n              class=\"hover\"\r\n              [hidden]=\"compressedTable\"\r\n              width=\"5%\"\r\n            ></th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr\r\n            *ngFor=\"\r\n              let item of dados | orderBy: key:reverse | slice: begin:end;\r\n              let i = index\r\n            \"\r\n          >\r\n            <td\r\n              class=\"text-center\"\r\n              [ngClass]=\"[\r\n                item.select ? 'bg-row-selected' : '',\r\n                item.IN_STAT == 0 ? 'border-danger' : 'border-success'\r\n              ]\"\r\n            >\r\n              {{ item.NM_APOI_INTE_PEDI }}\r\n            </td>\r\n            <td class=\"text-center\" [hidden]=\"compressedTable\" width=\"5%\">\r\n              <div>\r\n                <button\r\n                  type=\"button\"\r\n                  class=\"btn-icon-sm\"\r\n                  tooltip=\"Editar\"\r\n                  placement=\"left\"\r\n                  container=\"body\"\r\n                >\r\n                  <i class=\"fas fa-edit\" (click)=\"onAdd(item)\"> </i>\r\n                </button>\r\n              </div>\r\n            </td>\r\n            <td class=\"text-center\" [hidden]=\"compressedTable\" width=\"5%\">\r\n              <div>\r\n                <button\r\n                  type=\"button\"\r\n                  class=\"btn-icon-sm\"\r\n                  (click)=\"openTab(item)\"\r\n                  tooltip=\"Detalles\"\r\n                  placement=\"left\"\r\n                  container=\"body\"\r\n                >\r\n                  <i class=\"fas fa-search\"></i>\r\n                </button>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n    </div>\r\n    <div class=\"col-6\">\r\n      <tabset [hidden]=\"!compressedTable\">\r\n        <button\r\n          type=\"button\"\r\n          class=\"btn-icon close position-absolute\"\r\n          (click)=\"onClose()\"\r\n        >\r\n          <i class=\"fas fa-times\"></i>\r\n        </button>\r\n        <tab heading=\"Detalles\">\r\n          <div\r\n            class=\"border-right border-left border-bottom px-3 pt-3\"\r\n            style=\"overflow: auto; height: 338px;\"\r\n          >\r\n            <custom-table *ngIf=\"!noResultDetalhes && loadingDetalhes\">\r\n              <ng-template #thead let-thead>\r\n                <tr class=\"text-center\">\r\n                  <th scope=\"col\">Empresa</th>\r\n                  <th scope=\"col\">Depósito</th>\r\n                </tr>\r\n              </ng-template>\r\n              <ng-template #tbody let-tbody>\r\n                <tr *ngFor=\"let item of dadosDetalhes\">\r\n                  <td class=\"text-left\">{{ item.NM_EMPR }}</td>\r\n                  <td class=\"text-left\">{{ item.NM_DEPO }}</td>\r\n                </tr>\r\n              </ng-template>\r\n            </custom-table>\r\n            <div\r\n              *ngIf=\"noResultDetalhes\"\r\n              class=\"text-center d-flex justify-content-center align-items-center p-5\"\r\n              style=\"height: 80%;\"\r\n            >\r\n              <empty-result\r\n                message=\"Nenhuma informação encontrada\"\r\n              ></empty-result>\r\n            </div>\r\n          </div>\r\n        </tab>\r\n      </tabset>\r\n    </div>\r\n    <div\r\n      class=\"col-12 mb-2 ml-2\"\r\n      *ngIf=\"!noResult && dados?.length > itemsPerPage\"\r\n    >\r\n      Exibindo {{ begin + 1 }} a {{ end }} de {{ dados?.length }}\r\n      <div class=\"d-flex\">\r\n        <pagination\r\n          [maxSize]=\"10\"\r\n          [totalItems]=\"dados?.length\"\r\n          (pageChanged)=\"onPageChanged($event)\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPage\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\"\r\n        >\r\n        </pagination>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div\r\n    *ngIf=\"noResult\"\r\n    class=\"text-center d-flex justify-content-center align-items-center p-5\"\r\n    style=\"height: 80%;\"\r\n  >\r\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n  </div>\r\n</app-body>\r\n";
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
    "G/dq":
    /*!*********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/abastecimento/cadastros/integrador-depositos/cadastro/cadastro.component.html ***!
      \*********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function GDq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen\r\n  *ngIf=\"loaderFullScreen\"\r\n></loader-spinner-full-screen>\r\n<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<app-header appTitle=\"Cadastro\">\r\n  <button\r\n    type=\"button\"\r\n    [disabled]=\"form.status == 'INVALID'\"\r\n    (click)=\"onSave()\"\r\n  >\r\n    Guardar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\r\n  <div class=\"container\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"row justify-content-md-center mt-3\">\r\n        <div class=\"col-md-7\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <p class=\"pFont\">\r\n                <strong>INTEGRADOR</strong><br />\r\n                {{ Integrador }}\r\n              </p>\r\n            </div>\r\n          </div>\r\n          <form [formGroup]=\"form\" autocomplete=\"off\">\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-lg-6 mb-lg-0\">\r\n                <label for=\"deposito\">Depósitos</label>\r\n                <ng-select\r\n                  [searchable]=\"true\"\r\n                  [clearable]=\"true\"\r\n                  [multiple]=\"true\"\r\n                  [items]=\"depositosFilter\"\r\n                  [virtualScroll]=\"true\"\r\n                  [hideSelected]=\"true\"\r\n                  [closeOnSelect]=\"false\"\r\n                  placeholder=\"Selecione...\"\r\n                  bindLabel=\"NM_DEPO\"\r\n                  bindValue=\"ID\"\r\n                  formControlName=\"depositos\"\r\n                  [ngClass]=\"onFieldRequired('depositos')\">\r\n                >\r\n                </ng-select>\r\n                <invalid-form-control [show]=\"onFieldInvalid('depositos')\" message=\"Depósito é obrigatório.\"></invalid-form-control>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <div\r\n        class=\"row justify-content-md-center mt-3\"\r\n        [hidden]=\"noResultDepositos\"\r\n      >\r\n        <div class=\"form-group col-md-7\">\r\n          <label for=\"depositosVinculados\">Depósitos Vinculados</label>\r\n          <table\r\n            class=\"table table-sm table-hover border-left border-right border-bottom text-center table-fixed w-100\"\r\n          >\r\n            <tbody>\r\n              <tr *ngFor=\"let item of dadosDepositosAssociados\">\r\n                <td class=\"text-truncate text-left\">{{ item.NM_DEPO }}</td>\r\n                <td style=\"width: 40px;\">\r\n                  <button\r\n                    class=\"btn-icon-sm\"\r\n                    style=\"color: red;\"\r\n                    tooltip=\"Excluir\"\r\n                    (click)=\"onDelete(item)\"\r\n                  >\r\n                    <i class=\"far fa-trash-alt\"></i>\r\n                  </button>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</app-body>\r\n";
      /***/
    },

    /***/
    "Y3Cv":
    /*!*****************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/cadastros/integrador-depositos/integrador-depositos.module.ts ***!
      \*****************************************************************************************************/

    /*! exports provided: AbastecimentoCadastrosIntegradorDepositosModule */

    /***/
    function Y3Cv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastrosIntegradorDepositosModule", function () {
        return AbastecimentoCadastrosIntegradorDepositosModule;
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


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/core/not-found/not-found.module */
      "sCnT");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-order-pipe */
      "fnxe");
      /* harmony import */


      var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common/locales/pt */
      "vT00");
      /* harmony import */


      var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_10__);
      /* harmony import */


      var _integrador_depositos_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./integrador-depositos-routing.module */
      "YUod");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./lista/lista.component */
      "kAHP");
      /* harmony import */


      var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./cadastro/cadastro.component */
      "YF07");
      /* Localização Brasil */


      Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_10___default.a);
      /* Localização Brasil */

      var AbastecimentoCadastrosIntegradorDepositosModule = /*#__PURE__*/_createClass(function AbastecimentoCadastrosIntegradorDepositosModule() {
        _classCallCheck(this, AbastecimentoCadastrosIntegradorDepositosModule);
      });

      AbastecimentoCadastrosIntegradorDepositosModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_lista_lista_component__WEBPACK_IMPORTED_MODULE_12__["AbastecimentoCadastrosIntegradorDepositosListaComponent"], _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_13__["AbastecimentoCadastrosIntegradorDepositosCadastroComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _integrador_depositos_routing_module__WEBPACK_IMPORTED_MODULE_11__["AbastecimentoCadastrosIntegradorDepositosRoutingModule"], src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_5__["NotFoundModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["PaginationModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["TabsModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["ModalModule"].forRoot(), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_7__["TemplatesModule"], ngx_order_pipe__WEBPACK_IMPORTED_MODULE_9__["OrderModule"]],
        providers: [{
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],
          useValue: 'pt-PT'
        }]
      })], AbastecimentoCadastrosIntegradorDepositosModule);
      /***/
    },

    /***/
    "YF07":
    /*!*****************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/cadastros/integrador-depositos/cadastro/cadastro.component.ts ***!
      \*****************************************************************************************************/

    /*! exports provided: AbastecimentoCadastrosIntegradorDepositosCadastroComponent */

    /***/
    function YF07(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastrosIntegradorDepositosCadastroComponent", function () {
        return AbastecimentoCadastrosIntegradorDepositosCadastroComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./cadastro.component.html */
      "G/dq");
      /* harmony import */


      var _cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cadastro.component.scss */
      "qPLo");
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


      var _integrador_depositos_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./../integrador-depositos.service */
      "cXIl"); //Converte rota em base64


      var AbastecimentoCadastrosIntegradorDepositosCadastroComponent = /*#__PURE__*/function () {
        function AbastecimentoCadastrosIntegradorDepositosCadastroComponent(activatedRoute, formBuilder, pnotifyService, atividadesService, routerService, titleService, confirmModalService, service) {
          _classCallCheck(this, AbastecimentoCadastrosIntegradorDepositosCadastroComponent);

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
          this.dadosDepositosAssociados = [];
          this.depositosFilter = [];
          this.form = this.formBuilder.group({
            depositos: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
          });
        }

        _createClass(AbastecimentoCadastrosIntegradorDepositosCadastroComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            setTimeout(function () {
              _this.loaderFullScreen = false;
            }, 1000);
            this.registrarAcesso();
            this.setBreadCrumb();
            this.checkRouterParams();
            this.titleService.setTitle('Vinculo Integrador X Depósitos');
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
                descricao: 'Vínculo Integrador X Depósitos',
                routerLink: "/abastecimento/cadastros/".concat(params['idSubModulo'], "/integrador-depositos/lista")
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

                _this3.setValuesIntegrador(_response.item);

                _this3.getDepositos();
              }
            });
            this.activatedRouteSubscription.unsubscribe();
          }
        }, {
          key: "onSave",
          value: function onSave() {
            var depositos = this.form.get("depositos").value;
            var record = {
              ID_APOI_INTE_PEDI: this.IdIntegrador,
              ID_DEPO: depositos.toString(),
              IN_STAT: 1,
              ID_USUA: parseInt(this.idUsuario)
            };
            this.postIntegradorDepositos(record);
          }
        }, {
          key: "postIntegradorDepositos",
          value: function postIntegradorDepositos(record) {
            var _this4 = this;

            this.loaderNavbar = true;
            this.service.postIntegradorDepositos(record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
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
          key: "onDelete",
          value: function onDelete(item) {
            var _this5 = this;

            this.loaderNavbar = true;
            var record = {
              ID_ASSO_INTE_PEDI_DEPO: item.ID,
              ID_USUA: parseInt(this.idUsuario)
            };
            this.confirmDelete().asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (result) {
              return result ? _this5.deleteIntegradorDepositos(record) : rxjs__WEBPACK_IMPORTED_MODULE_6__["EMPTY"];
            })).subscribe(function (success) {
              _this5.pnotifyService.success();

              _this5.loaderNavbar = false;

              _this5.loadDepositosAssociados();
            }, function (error) {
              _this5.pnotifyService.error();

              _this5.loaderNavbar = false;

              _this5.loadDepositosAssociados();
            });
            this.deleteIntegradorDepositos(record);
          }
        }, {
          key: "deleteIntegradorDepositos",
          value: function deleteIntegradorDepositos(record) {
            return this.service.deleteIntegradorDepositos(record);
          }
        }, {
          key: "confirmDelete",
          value: function confirmDelete() {
            return this.confirmModalService.showConfirm('delete', 'Confirmar exclusão', 'Deseja realmente prosseguir com a exclusão do registro?', 'Cancelar', 'Confirmar');
          }
        }, {
          key: "loadDepositosAssociados",
          value: function loadDepositosAssociados() {
            this.getIntegradorDepositos({
              ID_APOI_INTE_PEDI: this.IdIntegrador
            });
          }
        }, {
          key: "getDepositos",
          value: function getDepositos() {
            var _this6 = this;

            var idSituacao = 1;
            this.loaderNavbar = true;
            this.depositos = [];
            this.service.getDepositos(idSituacao).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this6.loaderNavbar = false;

              _this6.loadDepositosAssociados();
            })).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                _this6.depositos = res['body']['result'];
              }
            }, function (error) {
              _this6.pnotifyService.error('Erro ao carregar Depositos');
            });
          }
        }, {
          key: "getIntegradorDepositos",
          value: function getIntegradorDepositos(params) {
            var _this7 = this;

            this.dadosDepositosAssociados = [];
            this.loaderNavbar = true;
            this.service.getIntegradorDepositos(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this7.loaderNavbar = false;

              _this7.filterArrayDepositos();
            })).subscribe(function (res) {
              if (res.status === 200) {
                if (res['body']['responseCode'] === 200) {
                  _this7.noResultDepositos = false;
                  _this7.dadosDepositosAssociados = res['body']['result'];
                } else if (res['body']['responseCode'] === 404) {
                  _this7.noResultDepositos = true;

                  _this7.pnotifyService.notice(res['body']['message']);
                }
              }
            }, function (error) {
              _this7.pnotifyService.error('Erro ao carregar depósitos associados');
            });
          }
        }, {
          key: "filterArrayDepositos",
          value: function filterArrayDepositos() {
            this.depositosFilter = [];
            var depositosFiltrados = [];
            var idDeposito = [];

            if (this.dadosDepositosAssociados.length > 0) {
              this.dadosDepositosAssociados.forEach(function (deposito) {
                return idDeposito.push(deposito['ID_DEPO']);
              });
              depositosFiltrados = this.depositos.filter(function (item) {
                return idDeposito.map(function (val) {
                  return item.ID.indexOf(val);
                }).map(function (val) {
                  return val > -1 ? false : true;
                }).reduce(function (acc, cum) {
                  return acc && cum;
                });
              });
              this.depositosFilter = depositosFiltrados;
            } else {
              this.depositosFilter = this.depositos;
            }
          }
        }, {
          key: "setValuesIntegrador",
          value: function setValuesIntegrador(params) {
            this.Integrador = params['NM_APOI_INTE_PEDI'];
            this.IdIntegrador = params['ID'];
          }
        }, {
          key: "resetValuesForm",
          value: function resetValuesForm() {
            this.form.get('depositos').reset();
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

        return AbastecimentoCadastrosIntegradorDepositosCadastroComponent;
      }();

      AbastecimentoCadastrosIntegradorDepositosCadastroComponent.ctorParameters = function () {
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
          type: _integrador_depositos_service__WEBPACK_IMPORTED_MODULE_13__["AbastecimentoCadastrosIntegradorDepositosService"]
        }];
      };

      AbastecimentoCadastrosIntegradorDepositosCadastroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'cadastro',
        template: _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_12__["RouterService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_10__["TitleService"], src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_11__["ConfirmModalService"], _integrador_depositos_service__WEBPACK_IMPORTED_MODULE_13__["AbastecimentoCadastrosIntegradorDepositosService"]])], AbastecimentoCadastrosIntegradorDepositosCadastroComponent);
      /***/
    },

    /***/
    "YUod":
    /*!*************************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/cadastros/integrador-depositos/integrador-depositos-routing.module.ts ***!
      \*************************************************************************************************************/

    /*! exports provided: AbastecimentoCadastrosIntegradorDepositosRoutingModule */

    /***/
    function YUod(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastrosIntegradorDepositosRoutingModule", function () {
        return AbastecimentoCadastrosIntegradorDepositosRoutingModule;
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
      "YF07");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./lista/lista.component */
      "kAHP");

      var routes = [{
        path: '',
        children: [{
          path: 'lista',
          component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_4__["AbastecimentoCadastrosIntegradorDepositosListaComponent"]
        }, {
          path: 'cadastro',
          component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_3__["AbastecimentoCadastrosIntegradorDepositosCadastroComponent"]
        }, {
          path: '',
          redirectTo: 'lista',
          pathMatch: 'full'
        }]
      }];

      var AbastecimentoCadastrosIntegradorDepositosRoutingModule = /*#__PURE__*/_createClass(function AbastecimentoCadastrosIntegradorDepositosRoutingModule() {
        _classCallCheck(this, AbastecimentoCadastrosIntegradorDepositosRoutingModule);
      });

      AbastecimentoCadastrosIntegradorDepositosRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AbastecimentoCadastrosIntegradorDepositosRoutingModule);
      /***/
    },

    /***/
    "cXIl":
    /*!******************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/cadastros/integrador-depositos/integrador-depositos.service.ts ***!
      \******************************************************************************************************/

    /*! exports provided: AbastecimentoCadastrosIntegradorDepositosService */

    /***/
    function cXIl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastrosIntegradorDepositosService", function () {
        return AbastecimentoCadastrosIntegradorDepositosService;
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


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var AbastecimentoCadastrosIntegradorDepositosService = /*#__PURE__*/function () {
        function AbastecimentoCadastrosIntegradorDepositosService(httpClient) {
          _classCallCheck(this, AbastecimentoCadastrosIntegradorDepositosService);

          this.httpClient = httpClient;
          this.BASE_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API;
        }

        _createClass(AbastecimentoCadastrosIntegradorDepositosService, [{
          key: "getDepositos",
          value: function getDepositos(idSituacao) {
            return this.httpClient.get("".concat(this.BASE_URL, "/common/v2/depositos"), {
              params: {
                IN_STAT: idSituacao
              },
              observe: "response"
            });
          }
        }, {
          key: "getIntegradorDepositos",
          value: function getIntegradorDepositos(params) {
            return this.httpClient.get("".concat(this.BASE_URL, "/abastecimento/cadastros/associacao-integrador-pedidos-depositos"), {
              params: {
                ID_APOI_INTE_PEDI: params['ID_APOI_INTE_PEDI']
              },
              observe: "response"
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
          }
        }, {
          key: "getIntegradoresPedidosFiltro",
          value: function getIntegradoresPedidosFiltro(params) {
            return this.httpClient.get("".concat(this.BASE_URL, "/common/v2/integradores-pedidos"), {
              params: {
                IN_STAT: params
              },
              observe: "response"
            });
          }
        }, {
          key: "getIntegradoresPedidos",
          value: function getIntegradoresPedidos(params) {
            return this.httpClient.get("".concat(this.BASE_URL, "/common/v2/integradores-pedidos"), {
              params: {
                IN_STAT: params['IN_STAT'],
                ID: params['ID_APOI_INTE_PEDI']
              },
              observe: "response"
            });
          }
        }, {
          key: "postIntegradorDepositos",
          value: function postIntegradorDepositos(record) {
            return this.httpClient.post("".concat(this.BASE_URL, "/abastecimento/cadastros/associacao-integrador-pedidos-depositos"), record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
          }
        }, {
          key: "deleteIntegradorDepositos",
          value: function deleteIntegradorDepositos(record) {
            var options = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
              }),
              body: record
            };
            return this.httpClient["delete"]("".concat(this.BASE_URL, "/abastecimento/cadastros/associacao-integrador-pedidos-deposito"), options);
          }
        }]);

        return AbastecimentoCadastrosIntegradorDepositosService;
      }();

      AbastecimentoCadastrosIntegradorDepositosService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      AbastecimentoCadastrosIntegradorDepositosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], AbastecimentoCadastrosIntegradorDepositosService);
      /***/
    },

    /***/
    "kAHP":
    /*!***********************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/cadastros/integrador-depositos/lista/lista.component.ts ***!
      \***********************************************************************************************/

    /*! exports provided: AbastecimentoCadastrosIntegradorDepositosListaComponent */

    /***/
    function kAHP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastrosIntegradorDepositosListaComponent", function () {
        return AbastecimentoCadastrosIntegradorDepositosListaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lista.component.html */
      "3hcN");
      /* harmony import */


      var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lista.component.scss */
      "yXRL");
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


      var _integrador_depositos_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../integrador-depositos.service */
      "cXIl"); //Converte rota em base64


      var AbastecimentoCadastrosIntegradorDepositosListaComponent = /*#__PURE__*/function () {
        function AbastecimentoCadastrosIntegradorDepositosListaComponent(activatedRoute, router, formBuilder, pnotifyService, atividadesService, routerService, titleService, service) {
          _classCallCheck(this, AbastecimentoCadastrosIntegradorDepositosListaComponent);

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
          this.loadingDetalhes = false;
          this.noResult = false;
          this.noResultDetalhes = false;
          this.compressedTable = false;
          this.selectedRow = false;
          this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
          this.idUsuario = this.currentUser['info']['id'];
          this.breadCrumbTree = [];
          this.dados = [];
          this.dadosDetalhes = [];
          this.integradores = [];
          /* Ordenação */

          this.reverse = false;
          this.key = 'TP_MATE';
          /* Ordenação */

          /* Paginação */

          this.itemsPerPage = 15;
          this.totalItems = 15;
          this.currentPage = 1;
          this.begin = 0;
          this.end = 15;
          /* Paginação */

          this.tableConfig = {
            subtitleBorder: true
          };
          this.form = this.formBuilder.group({
            integrador: [null]
          });
        }

        _createClass(AbastecimentoCadastrosIntegradorDepositosListaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this8 = this;

            setTimeout(function () {
              _this8.loaderFullScreen = false;
            }, 1000);
            this.registrarAcesso();
            this.setBreadCrumb();
            this.checkRouterParams();
            this.getIntegradores();
            this.titleService.setTitle('Vínculo Integrador X Depósito');
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            var _this9 = this;

            this.activatedRoute.params.subscribe(function (params) {
              _this9.breadCrumbTree = [{
                descricao: 'Home',
                routerLink: '/abastecimento/home'
              }, {
                descricao: 'Cadastros',
                routerLink: "/abastecimento/cadastros/".concat(params['idSubModulo'])
              }, {
                descricao: 'Vínculo Integrador X Depósito'
              }];
            });
          }
        }, {
          key: "checkRouterParams",
          value: function checkRouterParams() {
            var _this10 = this;

            this.activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (queryParams) {
              if (Object.keys(queryParams).length > 0) {
                var _response = _this10.routerService.getBase64UrlParams(queryParams);

                _this10.search(_response);

                _this10.setFormValues(_response);
              }
            });
            this.activatedRouteSubscription.unsubscribe();
          }
        }, {
          key: "setFormValues",
          value: function setFormValues(queryParams) {
            var integrador = queryParams['ID_APOI_INTE_PEDI'] ? queryParams['ID_APOI_INTE_PEDI'] : "";
            ;
            this.form.patchValue({
              integrador: integrador
            });
          }
        }, {
          key: "getIntegradores",
          value: function getIntegradores() {
            var _this11 = this;

            var idSituacao = 1;
            this.loaderNavbar = true;
            this.integradores = [];
            this.service.getIntegradoresPedidosFiltro(idSituacao).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              return _this11.loaderNavbar = false;
            })).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                _this11.integradores = res['body']['result'];
              }
            }, function (error) {
              _this11.pnotifyService.error('Erro ao carregar fornecedor');
            });
          }
        }, {
          key: "onFilter",
          value: function onFilter() {
            this.setRouterParams({
              ID_APOI_INTE_PEDI: this.form.value['integrador'] === null || this.form.value['integrador'] === undefined ? '' : this.form.value['integrador'],
              IN_STAT: '',
              NR_PAGE_INIC: '',
              TT_REGI_PAGI: '',
              ORDE_BY: '',
              ORDE_TYPE: ''
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
            var _this12 = this;

            this.loaderNavbar = true;
            this.loading = false;
            this.service.getIntegradoresPedidos(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              return _this12.loaderNavbar = false;
            })).subscribe(function (res) {
              if (res.status === 200) {
                if (res['body']['responseCode'] === 200) {
                  _this12.dados = res['body']['result'];
                  _this12.loading = true;
                  _this12.noResult = false;
                } else if (res['body']['responseCode'] === 404) {
                  _this12.noResult = true;

                  _this12.pnotifyService.notice('Não há dados');
                }
              }
            }, function (error) {
              _this12.pnotifyService.error('Erro ao carregar dados');

              _this12.noResult = true;
            });
          }
        }, {
          key: "openTab",
          value: function openTab(i) {
            i.select = !i.select;
            this.getIntegradorDepositos({
              ID_APOI_INTE_PEDI: i['ID']
            });
            this.compressedTable = true;
          }
        }, {
          key: "getIntegradorDepositos",
          value: function getIntegradorDepositos(params) {
            var _this13 = this;

            this.loadingDetalhes = false;
            this.noResultDetalhes = false;
            this.loaderNavbar = true;
            this.dadosDetalhes = [];
            this.service.getIntegradorDepositos(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              return _this13.loaderNavbar = false;
            })).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                if (res['body']['responseCode'] == 200) {
                  _this13.dadosDetalhes = res['body']['result'];
                  _this13.noResultDetalhes = false;
                  _this13.loadingDetalhes = true;
                } else if (res['body']['responseCode'] == 404) {
                  _this13.loadingDetalhes = false;
                  _this13.noResultDetalhes = true;

                  _this13.pnotifyService.notice(res['body']['message']);
                }
              }
            }, function (error) {
              _this13.loadingDetalhes = false;

              _this13.pnotifyService.error('Erro ao carregar depósitos vinculados');
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

        return AbastecimentoCadastrosIntegradorDepositosListaComponent;
      }();

      AbastecimentoCadastrosIntegradorDepositosListaComponent.ctorParameters = function () {
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
          type: _integrador_depositos_service__WEBPACK_IMPORTED_MODULE_11__["AbastecimentoCadastrosIntegradorDepositosService"]
        }];
      };

      AbastecimentoCadastrosIntegradorDepositosListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_8__["AtividadesService"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_9__["TitleService"], _integrador_depositos_service__WEBPACK_IMPORTED_MODULE_11__["AbastecimentoCadastrosIntegradorDepositosService"]])], AbastecimentoCadastrosIntegradorDepositosListaComponent);
      /***/
    },

    /***/
    "qPLo":
    /*!*******************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/cadastros/integrador-depositos/cadastro/cadastro.component.scss ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function qPLo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWJhc3RlY2ltZW50by9jYWRhc3Ryb3MvaW50ZWdyYWRvci1kZXBvc2l0b3MvY2FkYXN0cm8vY2FkYXN0cm8uY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "yXRL":
    /*!*************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/cadastros/integrador-depositos/lista/lista.component.scss ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function yXRL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".bg-row-selected {\n  background-color: #91b8f0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hYmFzdGVjaW1lbnRvL2NhZGFzdHJvcy9pbnRlZ3JhZG9yLWRlcG9zaXRvcy9saXN0YS9saXN0YS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FiYXN0ZWNpbWVudG8vY2FkYXN0cm9zL2ludGVncmFkb3ItZGVwb3NpdG9zL2xpc3RhL2xpc3RhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnLXJvdy1zZWxlY3RlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkxYjhmMCFpbXBvcnRhbnQ7XHJcbn0iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=integrador-depositos-integrador-depositos-module-es5.js.map