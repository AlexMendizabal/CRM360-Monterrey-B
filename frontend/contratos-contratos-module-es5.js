(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contratos-contratos-module"], {
    /***/
    "5Sp0":
    /*!********************************************************************************!*\
      !*** ./src/app/modules/comercial/kanban/contratos/contratos-routing.module.ts ***!
      \********************************************************************************/

    /*! exports provided: ComercialKanbanContratosRoutingModule */

    /***/
    function Sp0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialKanbanContratosRoutingModule", function () {
        return ComercialKanbanContratosRoutingModule;
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
      "y06A"); // Components


      var routes = [{
        path: '',
        children: [{
          path: 'lista',
          component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_3__["ComercialKanbanContratosListaComponent"]
        }, {
          path: '',
          redirectTo: 'lista',
          pathMatch: 'full'
        }]
      }];

      var ComercialKanbanContratosRoutingModule = function ComercialKanbanContratosRoutingModule() {
        _classCallCheck(this, ComercialKanbanContratosRoutingModule);
      };

      ComercialKanbanContratosRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ComercialKanbanContratosRoutingModule);
      /***/
    },

    /***/
    "7HvY":
    /*!**********************************************************************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/contratos/termo-responsabilidade/termo-responsabilidade.component.scss ***!
      \**********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function HvY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGVjbm9sb2dpYS1pbmZvcm1hY2FvL2NvbnRyYXRvcy90ZXJtby1yZXNwb25zYWJpbGlkYWRlL3Rlcm1vLXJlc3BvbnNhYmlsaWRhZGUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "7v+t":
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/kanban/contratos/lista/lista.component.html ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function vT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<!-- <loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen> -->\n<app-header appTitle=\"Kanban Contratos\">\n  <button\n    type=\"button\"\n    (click)= 'onRefresh();'>\n    Atualizar\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"onFilter()\">\n    Filtrar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" >\n  <div class=\"row\">\n    <div class=\"col\">\n      <advanced-filter>\n        <form [formGroup]=\"form\" autocomplete=\"off\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-lg-1\">\n              <label for=\"dataInicial\">Data Inicial</label>\n              <input\n              class=\"form-control\"\n              id=\"dataInicial\"\n              type=\"text\"\n              formControlName=\"dataInicial\"\n              bsDatepicker\n              [ngClass]=\"onFieldError('dataInicial') + ' ' + onFieldRequired('dataInicial')\">\n\n            </div>\n            <div class=\"form-group col-lg-1\">\n              <label for=\"dataFinal\">Data final</label>\n              <input\n              class=\"form-control\"\n              id=\"dataFinal\"\n              type=\"text\"\n              formControlName=\"dataFinal\"\n              bsDatepicker\n              [ngClass]=\"onFieldError('dataFinal') + ' ' + onFieldRequired('dataFinal')\">\n\n            </div>\n\n            <div class=\"form-group col-lg-1\">\n              <label for=\"codSituacao\">Situação</label>\n              <select\n                class=\"form-control custom-select\"\n                id=\"codSituacao\"\n                formControlName=\"codSituacao\">\n                <option selected value=\"\">Todos</option>\n                <option value=\"0\">Inativos</option>\n                <option value=\"1\">Ativos</option>\n              </select>\n            </div>\n\n            <div class=\"form-group col-lg-4\">\n              <label for=\"codVendedor\">Por vendedor</label>\n                    <ng-select\n                      type='text'\n                      [searchable]=\"true\"\n                      [clearable]=\"false\"\n                      [items]=\"vendedores\"\n                      [virtualScroll]=\"true\"\n                      [hideSelected]=\"true\"\n                      [closeOnSelect]=\"true\"\n                      placeholder=\"Selecione...\"\n                      bindLabel=\"nome\"\n                      bindValue=\"id\"\n                      formControlName=\"codVendedor\"\n                    >\n\n                        <invalid-form-control\n                        [show]=\"onFieldInvalid('codVendedor')\"\n                        message=\"Descrição é obrigatório.\">\n                        </invalid-form-control>\n                    </ng-select>\n                </div>\n\n            <div class=\"form-group col-lg-3\">\n              <label for=\"codGerencia\">Por gerência</label>\n              <ng-select\n                      [searchable]=\"true\"\n                      [clearable]=\"false\"\n                      [items]=\"coordenadores\"\n                      [virtualScroll]=\"true\"\n                      [hideSelected]=\"true\"\n                      [closeOnSelect]=\"true\"\n                      placeholder=\"Selecione...\"\n                      bindLabel=\"nome\"\n                      bindValue=\"matricula\"\n                      formControlName=\"codGerencia\"\n                    >\n\n                  <invalid-form-control\n                  [show]=\"onFieldInvalid('codGerencia')\" message=\"Descrição é obrigatório.\">\n                  </invalid-form-control>\n              </ng-select>\n            </div>\n\n            <div class=\"form-group col-lg-2\">\n              <label for=\"codLinha\">Linha</label>\n              <ng-select\n                [closeOnSelect]=\"true\"\n                [items]=\"linhas\"\n                formControlName=\"codLinha\"\n                [virtualScroll]=\"true\"\n                labelForId=\"codLinha\"\n                bindLabel=\"descricao\"\n                bindValue=\"id\">\n              </ng-select>\n            </div>\n\n          </div>\n        </form>\n      </advanced-filter>\n    </div>\n  </div>\n\n\n<div class=\"row mt-4\" *ngIf=\"this.contratos && dadosEmpty\">\n\n  <div class=\"col-3\"></div>\n\n  <div class=\"col-2\">\n    <h6 class='text-center'>CONTRATOS</h6>\n  <div\n  class=\"ml-3 border border-success rounded border-top-0 border-right-0 border-bottom-0 \"\n  style=\"background-color: rgb(249, 252, 252);\"\n  *ngFor=\"let item of contratos\"\n  [class.border-danger]=\"item.tempo > 10\"\n  [class.border-warning]=\"item.tempo > 5 && item.tempo <= 10\"\n  [class.border-success]=\"item.tempo <= 5\"\n  [tooltip]=\"tooltipAutoScrollTemplate\">\n    <div class=\"card-body mb-2 cartao\" >\n      <strong >#{{ item.contrato }} - {{ item.cliente }}</strong><br>\n      <span>{{ item.linha }}</span><br>\n      <span>{{ item.peso }}kg </span><br>\n      <span>{{ item.vendedor }}</span><br>\n      <span>{{ item.unidade }}</span>\n    </div>\n    <ng-template #tooltipAutoScrollTemplate>\n      <p class=\"mt-3 mb-0\"><b>TEMPO NO STATUS - {{ item.tempo }} DIAS</b></p>\n      <p class=\"text-nowrap mb-0\"><br><br></p>\n    </ng-template>\n  </div>\n</div>\n\n<div class=\"col-2\">\n  <h6 class='text-center'>QTDADE FATURADA</h6>\n  <div\n  class=\"ml-3 border border-danger rounded border-top-0 border-right-0 border-bottom-0\"\n  style=\"background-color: rgb(249, 252, 252);\"\n  *ngFor=\"let item of faturados\"\n  [class.border-danger]=\"item.tempo > 10\"\n  [class.border-warning]=\"item.tempo > 5 && item.tempo <= 10\"\n  [class.border-success]=\"item.tempo <= 5\">\n    <div class=\"card-body mb-2 cartao\" style='text-align: center;'>\n      <br>\n      <br>\n      <strong>{{ item.quantidade }}</strong><br>\n      <br>\n      <br>\n    </div>\n  </div>\n</div>\n\n<div class=\"col-2\">\n  <h6 class='text-center'>QTDADE PENDENTE</h6>\n  <div\n  class=\"ml-3 border border-danger rounded border-top-0 border-right-0 border-bottom-0\"\n  style=\"background-color: rgb(249, 252, 252);\"\n  *ngFor=\"let item of pendentes\"\n  [class.border-danger]=\"item.tempo > 10\"\n  [class.border-warning]=\"item.tempo > 5 && item.tempo <= 10\"\n  [class.border-success]=\"item.tempo <= 5\">\n    <div class=\"card-body mb-2 cartao\" style='text-align: center;'>\n      <br>\n      <br>\n      <strong>{{ item.quantidade }}</strong><br>\n      <br>\n      <br>\n    </div>\n  </div>\n</div>\n<div class=\"col-3\"></div>\n\n</div>\n\n\n";
      /***/
    },

    /***/
    "A6pt":
    /*!********************************************************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/contratos/termo-devolucao/termo-devolucao.component.scss ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function A6pt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGVjbm9sb2dpYS1pbmZvcm1hY2FvL2NvbnRyYXRvcy90ZXJtby1kZXZvbHVjYW8vdGVybW8tZGV2b2x1Y2FvLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "E15D":
    /*!*************************************************************************!*\
      !*** ./src/app/modules/comercial/kanban/contratos/contratos.service.ts ***!
      \*************************************************************************/

    /*! exports provided: ComercialKanbanContratosService */

    /***/
    function E15D(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialKanbanContratosService", function () {
        return ComercialKanbanContratosService;
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


      var src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/modules/comercial/comercial.service */
      "VgqD"); // Services


      var ComercialKanbanContratosService = /*#__PURE__*/function () {
        function ComercialKanbanContratosService(http, comercialService) {
          _classCallCheck(this, ComercialKanbanContratosService);

          this.http = http;
          this.comercialService = comercialService;
          this.API = "https://crm360.monterrey.com.bo/api/comercial/kanban/contratos/";
        }

        _createClass(ComercialKanbanContratosService, [{
          key: "getCards",
          value: function getCards(params) {
            var contratos = this.getContratos(params);
            var faturados = this.getFaturados(params);
            var pendentes = this.getPendentes(params);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])([contratos, faturados, pendentes]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
          }
        }, {
          key: "getContratos",
          value: function getContratos() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/contratos-vigentes"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }, {
          key: "getFaturados",
          value: function getFaturados() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/quantidade-faturada"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }, {
          key: "getPendentes",
          value: function getPendentes() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/quantidade-pendente"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }]);

        return ComercialKanbanContratosService;
      }();

      ComercialKanbanContratosService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_5__["ComercialService"]
        }];
      };

      ComercialKanbanContratosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_5__["ComercialService"]])], ComercialKanbanContratosService);
      /***/
    },

    /***/
    "JYNX":
    /*!************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/tecnologia-informacao/contratos/termo-responsabilidade/termo-responsabilidade.component.html ***!
      \************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function JYNX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\n<app-header appTitle=\"Termo de Responsabilidade\">\n  <button\n    type=\"button\"\n    *ngIf=\"tipoVisao == 'formulario'\"\n    [disabled]=\"!form.valid\"\n    (click)=\"onSubmit()\">\n    Gerar\n  </button>\n  <button\n    type=\"button\"\n    *ngIf=\"tipoVisao == 'ficha'\"\n    (click)=\"onCancel()\">\n    Cancelar\n  </button>\n  <button\n    type=\"button\"\n    *ngIf=\"tipoVisao == 'ficha'\"\n    (click)=\"onDownload()\">\n    Download\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\n  <div class=\"row justify-content-center\" *ngIf=\"tipoVisao == 'formulario'\">\n    <div class=\"col-12\" >\n      <h1>Termo de Responsabilidade</h1>\n      <form  [formGroup]=\"form\">\n        <div class=\"form-row\">\n          <div class=\"form-group col mb-0\">\n            <div class=\"mtc-title\">Dados da Empresa</div>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-6\">\n            <label for=\"NM_EMPR\">Nome</label>\n            <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"NM_EMPR\"\n            formControlName=\"NM_EMPR\"\n            >\n          </div>\n          <div class=\"form-group col-md-6\">\n            <label for=\"CD_EMPR_CNPJ\">CNPJ </label>\n            <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"CD_EMPR_CNPJ\"\n            formControlName=\"CD_EMPR_CNPJ\"\n            cnpj [textMask]=\"{ mask: MASKS.cnpj.textMask }\"\n            >\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-6\">\n            <label for=\"DS_EMPR_ENDE\">Endereço</label>\n            <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"DS_EMPR_ENDE\"\n            formControlName=\"DS_EMPR_ENDE\"\n            >\n          </div>\n          <div class=\"form-group col-md-6\">\n            <label for=\"NM_EMPR_BAIR\">Bairro</label>\n            <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"NM_EMPR_BAIR\"\n            formControlName=\"NM_EMPR_BAIR\"\n            >\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-6\">\n            <label for=\"NM_EMPR_CIDA\">Cidade</label>\n            <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"NM_EMPR_CIDA\"\n            formControlName=\"NM_EMPR_CIDA\"\n            >\n          </div>\n          <div class=\"form-group col-md-6\">\n            <label for=\"NM_EMPR_ESTA\">Estado</label>\n            <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"NM_EMPR_ESTA\"\n            formControlName=\"NM_EMPR_ESTA\"\n            >\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col mb-0\">\n            <hr class=\"mt-0\">\n            <div class=\"mtc-title\">Dados do Funcionario</div>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col\">\n            <label for=\"NM_FUNC\">Nome</label>\n            <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"NM_FUNC\"\n            formControlName=\"NM_FUNC\"\n            >\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-6\">\n            <label for=\"CD_USUA_CPF\">CPF</label>\n            <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"CD_USUA_CPF\"\n            formControlName=\"CD_USUA_CPF\"\n            cpf [textMask]=\"{ mask: MASKS.cpf.textMask }\">\n          </div>\n          <div class=\"form-group col-md-6\">\n            <label for=\"CD_USUA_RG\">RG</label>\n            <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"CD_USUA_RG\"\n            formControlName=\"CD_USUA_RG\"\n            >\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-6\">\n            <label for=\"DS_USUA_ENDE\">Endereço</label>\n            <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"DS_USUA_ENDE\"\n            formControlName=\"DS_USUA_ENDE\"\n            >\n          </div>\n          <div class=\"form-group col-md-6\">\n            <label for=\"NM_FUNC_BAIR\">Bairro</label>\n            <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"NM_FUNC_BAIR\"\n            formControlName=\"NM_FUNC_BAIR\"\n            >\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-6\">\n            <label for=\"NM_FUNC_CIDA\">Cidade</label>\n            <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"NM_FUNC_CIDA\"\n            formControlName=\"NM_FUNC_CIDA\"\n            >\n          </div>\n          <div class=\"form-group col-md-6\">\n            <label for=\"NM_FUNC_ESTA\">Estado</label>\n            <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"NM_FUNC_ESTA\"\n            formControlName=\"NM_FUNC_ESTA\"\n            >\n          </div>\n        </div>\n        <div formArrayName=\"objetos\">\n          <div class=\"form-row\">\n            <div class=\"form-group col mb-0\">\n              <hr class=\"mt-0\">\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col mb-0 d-flex justify-content-between\">\n              <div class=\"mtc-title\">Equipamentos/Linhas</div>\n              <div>\n                <a\n                  class=\"text-secondary\"\n                  (click)=\"onAddObjeto()\"\n                  href=\"javascript:void(0)\">\n                  <b>Adicionar</b>\n                </a>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-row\"  *ngFor=\"let item of objetos.controls; let i = index\" [formGroupName]=\"i\">\n            <div class=\"form-group col mb-0\">\n              <div class=\"form-row\">\n                <div class=\"form-group col-2\">\n                  <div class=\"mb-0 d-flex justify-content-between w-100\" style=\"height: 22px\">\n                    <label class=\"my-auto\" for=\"CD_ITEM\">Código do Objeto</label>\n                    <div class=\"my-auto text-uppercase\" style=\"font-size: 10px\">\n                      <a\n                        class=\"text-primary\"\n                        href=\"javascript:void(0)\"\n                        (click)=\"openModal(pesquisaDeItens, i)\">\n                        <strong>Selecionar</strong>\n                      </a>\n                    </div>\n                  </div>\n                  <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  id=\"CD_ITEM\"\n                  formControlName=\"CD_ITEM\"\n                  (input)=\"onInput()\"\n                  [ngClass]=\"onNestedFieldError('objetos', i, 'CD_ITEM') + ' ' + onNestedFieldRequired('objetos', i, 'CD_ITEM')\">\n                </div>\n                <div class=\"form-group col-6\">\n                  <label for=\"NM_PROD\">Produto</label>\n                  <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  id=\"NM_PROD\"\n                  formControlName=\"NM_PROD\"\n                  (input)=\"onInput()\"\n                  [ngClass]=\"onNestedFieldError('objetos', i, 'NM_PROD') + ' ' + onNestedFieldRequired('objetos', i, 'NM_PROD')\">\n                </div>\n                <div class=\"form-group col-1\">\n                  <label for=\"quantidadeObj\">Quantidade</label>\n                  <input\n                    type=\"number\"\n                    class=\"form-control\"\n                    id=\"quantidadeObj\"\n                    formControlName=\"quantidadeObj\"\n                    (input)=\"onInput()\"\n                    [ngClass]=\"onNestedFieldError('objetos', i, 'quantidadeObj') + ' ' + onNestedFieldRequired('objetos', i, 'quantidadeObj')\">\n                </div>\n                <div class=\"form-group col-2\">\n                  <label for=\"VL_ITEM\">Valor</label>\n                  <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    id=\"valorObj\"\n                    formControlName=\"VL_ITEM\"\n                    currencyMask [options]=\"{ align: 'left', prefix: 'R$ ', thousands: '.', decimal: ',' }\"\n                    (input)=\"onInput()\"\n                    [ngClass]=\"onNestedFieldError('objetos', i, 'VL_ITEM') + ' ' + onNestedFieldRequired('objetos', i, 'VL_ITEM')\">\n                </div>\n                <div class=\"col-1 pt-4 d-flex justify-content-center\">\n                  <button\n                    type=\"button\"\n                    class=\"btn-icon\"\n                    (click)=\"onDeleteObjeto(i)\">\n                    <i class=\"fas fa-trash\"></i>\n                  </button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n  <ng-template #pesquisaDeItens>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title pull-left\">Pesquisa de Itens</h4>\n      <div class=\"d-flex justify-content-center align-items-center\">\n        <div class=\"spinner-border text-primary mr-2\" role=\"status\" *ngIf=\"loadingItens\">\n          <span class=\"sr-only\">Loading...</span>\n        </div>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModal()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n    </div>\n    <div class=\"modal-body\">\n      <advanced-filter>\n        <form [formGroup]=\"formPesquisaItem\">\n          <div class=\"form-row\">\n            <div class=\"form-group col\">\n              <label for=\"cdItem\">BUSCAR POR</label>\n              <select\n                class=\"form-control custom-select\"\n                formControlName=\"buscarPor\"\n              >\n                <option value=\"ID_TECN_INFO_ITEM\" selected>ID</option>\n                <option value=\"CD_ITEM\">Código/Nº Série</option>\n                <option value=\"NM_PROD\">Produto</option>\n                <option value=\"DS_CONT\">Contrato</option>\n              </select>\n            </div>\n            <div class=\"form-group col\">\n              <label>TERMO DE PESQUISA</label>\n              <div class=\"input-group\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  formControlName=\"pesquisa\"\n                  (keyup.enter)=\"getItens()\"\n                >\n                <div class=\"input-group-append\">\n                  <span\n                    class=\"input-group-text hover\"\n                    (click)=\"getItens()\"\n                  >\n                    <i class=\"fas fa-search\"></i>\n                  </span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </form>\n      </advanced-filter>\n      <custom-table *ngIf=\"!loadingItens && (itens.length > 0)\">\n        <ng-template #thead let-thead>\n          <tr>\n            <th>ID</th>\n            <th>Código/Nº Série</th>\n            <th>Produto</th>\n            <th>Contrato</th>\n            <th></th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr *ngFor=\"let item of itens\">\n            <td>{{ item.ID_TECN_INFO_ITEM }}</td>\n            <td>{{ item.CD_ITEM }}</td>\n            <td>{{ item.NM_PROD }}</td>\n            <td>{{ item.DS_CONT }}</td>\n            <td>\n              <button\n                class=\"btn-icon-sm\"\n                tooltip=\"Salvar Item\"\n                container=\"body\"\n                (click)=\"setObjetos(item);modalRef.hide()\"\n              >\n                <i class=\"far fa-save\"></i>\n              </button>\n            </td>\n          </tr>\n        </ng-template>\n      </custom-table>\n    </div>\n  </ng-template>\n  <div class=\"row justify-content-center pt-5 uk-margin-top\" id=\"termo-responsabilidade\" *ngIf=\"tipoVisao == 'ficha'\" >\n    <div class=\" row justify-content-center col-10 \">\n      <h1 >TERMO DE RESPONSABILIDADE</h1><br>\n      <div>\n        <div class=\" mt-5 pt-5\">\n          Pelo presente instrumento particular e na melhor forma de direito, \n          as partes a seguir qualificadas de um lado, a empresa {{dataFicha.NM_EMPR | uppercase}} \n          inscrita no CNPJ/MF sob. Nº {{dataFicha.CD_EMPR_CNPJ | cnpj }}, com sede social na, {{dataFicha.DS_EMPR_ENDE | uppercase }},\n          bairro {{dataFicha.NM_EMPR_BAIR | uppercase}}, na cidade de {{dataFicha.NM_EMPR_CIDA | uppercase}}, Estado de {{dataFicha.NM_EMPR_ESTA | uppercase}} , neste ato, representada pelo seu responsável\n          legal, doravante, designada COMODANTE e de outro lado, {{dataFicha.NM_FUNC | uppercase}} , portador do CPF nº {{dataFicha.CD_USUA_CPF}} e do\n          RG nº {{dataFicha.CD_USUA_RG}} residente e domiciliado na {{dataFicha.DS_USUA_ENDE | uppercase}} , {{dataFicha.DS_USUA_BAIR | uppercase}} na \n          cidade de, {{dataFicha.DS_USUA_CIDA | uppercase}} no Estado de {{dataFicha.NM_FUNC_ESTA | uppercase}}, designado COMODATÁRIO, decidem celebrar o \n          presente CONTRATO DE COMODATO DE EQUIPAMENTO, comprometendo-se cada uma das partes perante a outra a cumprir\n          por si e seus sucessores e herdeiros as seguintes cláusulas e condições\n        </div><br>\n        <div>\n          1. DO OBJETO.\n        </div><br>\n        <div>\n          1.1  O presente contrato tem com objeto, a teor dos artigos 579 e seguintes do Código Civil\n          Brasileiro, o comodato do equipamento abaixo discriminado, que a COMODANTE cede ao COMODATÁRIO de forma gratuita, a saber: \n        </div><br>\n        <div>\n          <div *ngIf=\"dataFicha.objetos.length == 0\">NÃO INFORMADO</div>\n          <div *ngIf=\"dataFicha.objetos.length > 0\">\n            <div class=\"row mt-2 col-12\" *ngFor=\"let item of dataFicha.objetos\">\n              <div class=\"col-8\">\n                <p class=\"mt-2 mb-0\">\n                  <strong class=\"mr-2\">Produto:</strong>\n                  <span *ngIf=\"item.NM_PROD == null\">NÃO INFORMADO</span>\n                  <span *ngIf=\"item.NM_PROD != null\">{{ item.NM_PROD | uppercase }} ({{ item.CD_ITEM }})</span>\n                </p>\n              </div>\n              <div class=\"col-1 mr-5\">\n                <p class=\"mt-2 mb-2\">\n                  <strong class=\"mr-2\">Quantidade:</strong>\n                  <span *ngIf=\"item.quantidadeObj == null\">NÃO INFORMADO</span>\n                  <span *ngIf=\"item.quantidadeObj != null\">{{ item.quantidadeObj }}</span>\n                </p>\n              </div>\n              <div class=\"col-2\">\n                <p class=\"mt-2 mb-2\">\n                  <strong class=\"mr-2\">Valor:</strong>\n                  <span *ngIf=\"item.VL_ITEM == null\">NÃO INFORMADO</span>\n                  <span *ngIf=\"item.VL_ITEM != null\">{{ item.VL_ITEM | currency:'BRL':'symbol':'1.2-2'}}</span>\n                </p>\n              </div>\n            </div>\n            <hr width = “2” size = “100”>\n          </div>\n        </div><br>\n        <div>\n          1.2  O COMODATÁRIO declara, neste ato, ter recebido o equipamento acima\n          descrito em perfeito estado de funcionamento (novo), conservação e limpeza, obrigando-se, \n          assim, a conservá-lo e restituí-lo, ao término deste comodato, conforme disposto neste contrato.\n        </div><br>\n        <div>\n          1.3  A finalidade do presente comodato é a utilização do equipamento pelo COMODATÁRIO com \n          vistas a ser utilizado no desempenho das atividades previstas no cargo ocupado por este.\n        </div><br>\n        <div>\n          2. DA MANUTENÇÃO E PROTEÇÃO DO EQUIPAMENTO\n        </div><br>\n        <div>\n          2.1  O COMODATÁRIO será responsável pela guarda, uso e manutenção do equipamento, não \n          podendo vendê-lo, aliená-lo, alugá-lo ou emprestá-lo a terceiros, devendo comunicar \n          imediatamente a COMODANTE sobre eventuais necessidades de reparo que observar. \n        </div><br>\n        <div>\n          2.2  Nenhum outro destino será dado ao equipamento, a não ser aquele ora pactuado,\n           qual seja, o desempenho das atividades profissionais junto a COMODANTE.\n        </div><br>\n        <div>\n          2.3  O COMODATÁRIO obriga-se a manter o equipamento em perfeito estado de funcionamento,\n          conservação e limpeza, para que assim seja restituído quando findo ou rescindido este\n          contrato, sem direito à indenização e/ou retenção do mesmo.\n        </div><br>\n        <div>\n          3. Dentre as outras obrigações consignadas neste instrumento, obriga-se o COMODATÁRIO \n          especificamente a:\n        </div><br>\n        <div>\n          (a) restituir o equipamento, quando for o caso, nas mesmas condições que o mesmo se \n          encontrava quando do início do contrato;\n        </div><br>\n        <div>\n          (b) não ceder, locar ou emprestar o equipamento, sem autorização prévia e por escrito\n           da COMODANTE, sob pena de rescisão imediata do presente contrato;\n        </div><br>\n        <div>\n          (c) responsabilizar-se perante a COMODANTE, na hipótese de destruição, incêndio, ou de \n          qualquer outro fato ou evento que, por qualquer forma, impossibilite, prejudique ou \n          dificulte o exercício pleno da posse e propriedade sobre os bens, desde que decorrentes \n          de ato culposo ou doloso. \n        </div><br>\n        <div>\n          Parágrafo Primeiro - Diante do previsto no item (c), o COMODATÁRIO, desde já, autoriza \n          a COMODANTE a efetuar descontos em seus salários ou rescisão contratual relativos aos \n          prejuízos em valor correspondente ao integral previsto na clausula 1.1 ou valor \n          equivalente a manutenção ou reparo do dano. \n        </div><br>\n        <div>\n          4. DO PRAZO DE RESCISÃO\n        </div><br>\n        <div>\n          4.1  O presente contrato entrará em vigor a partir da entrega efetiva do equipamento ao \n          COMODATÁRIO e vigorará pelo período necessário ao desenvolvimento das atividades \n          previstas no cargo ocupado por este. \n        </div><br>\n        <div>\n          4.2  O presente contrato poderá ser rescindido nas seguintes hipóteses:\n        </div><br>\n        <div>\n          (a) término do vínculo empregatício;\n        </div><br>\n        <div>\n          (b) alteração de cargo do COMODATÁRIO, em consonância à política adotada pela COMODANTE. \n        </div><br>\n        <div>\n          4.3  Em qualquer das hipóteses previstas no item 4.1, haverá a devolução imediata pelo \n          COMODATÁRIO do equipamento descrito no item 1.1, no mesmo estado em que o recebeu, \n          ressalvando o desgaste decorrente do uso normal do mesmo, sob pena de serem aplicados \n          os descontos relativos aos valores em suas verbas rescisórias ou salariais.\n        </div><br>\n        <div>\n          5. DAS DISPOSIÇÕES GERAIS\n        </div><br>\n        <div>\n          5.1  O COMODATÁRIO não poderá, sem o consentimento prévio e por escrito da COMODANTE, \n          ceder, transferir ou emprestar a terceiros, no todo ou em parte, os direitos e \n          obrigações decorrentes do presente contrato, bem como o veículo, objeto deste instrumento. \n        </div><br>\n        <div>\n          5.2  A eventual tolerância das partes na exigência do fiel cumprimento de qualquer \n          obrigação prevista neste instrumento ou no exercício das prerrogativas dele decorrentes \n          será considerada mera liberalidade, não implicando em transação, novação, alteração do \n          pactuado, renúncia aos respectivos termos e condições, nem afetará o direito de à \n          parte exercê-lo a qualquer tempo, cado a COMODANTE revise o termo acima elaborado, o COMODATÁRIO\n          deverá assinar desde que esteja em acordo.\n        </div><br><br>\n      </div>\n      <div class=\"col-11 d-flex justify-content-end pt-5\">  </div>\n      <div class=\"col-11 d-flex justify-content-end pt-5\">  </div>\n      <div class=\"col-11 d-flex justify-content-end\">{{dataFicha.NM_EMPR_CIDA | uppercase}}/{{dataFicha.NM_EMPR_ESTA | uppercase}}-{{dataFicha.dataHoje}} </div>\n      <div class=\"col-11 d-flex justify-content-end pt-5\">  </div>\n      <div class=\"col-11 d-flex justify-content-end pt-5\">_____________________________________________________</div>\n      <div class=\"col-11 d-flex justify-content-end\">{{dataFicha.NM_FUNC | uppercase}}</div>\n    </div>\n  </div>\n</app-body>\n";
      /***/
    },

    /***/
    "MsxC":
    /*!*******************************************************************************!*\
      !*** ./src/app/modules/comercial/kanban/contratos/lista/lista.component.scss ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function MsxC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "::ng-deep .dropdown-item:hover {\n  cursor: pointer;\n}\n::ng-deep .card-title {\n  font-size: 1.05rem;\n}\n::ng-deep .cartao:hover {\n  background-color: #e6e4e4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21lcmNpYWwva2FuYmFuL2NvbnRyYXRvcy9saXN0YS9saXN0YS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGVBQUE7QUFBSjtBQUVFO0VBQ0Usa0JBQUE7QUFBSjtBQUVFO0VBQ0UseUJBQUE7QUFBSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2thbmJhbi9jb250cmF0b3MvbGlzdGEvbGlzdGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAge1xuICAuZHJvcGRvd24taXRlbTpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC5jYXJkLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuMDVyZW07XG4gIH1cbiAgLmNhcnRhbzpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTRlNDtcbiAgfVxuXG59XG5cblxuIl19 */";
      /***/
    },

    /***/
    "NFDp":
    /*!**********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/tecnologia-informacao/contratos/termo-devolucao/termo-devolucao.component.html ***!
      \**********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function NFDp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\n<app-header appTitle=\"Termo de Devolução\">\n  <button\n    type=\"button\"\n    *ngIf=\"tipoVisao == 'formulario'\"\n    [disabled]=\"!form.valid\"\n    (click)=\"onSubmit()\">\n    Gerar\n  </button>\n  <button\n    type=\"button\"\n    *ngIf=\"tipoVisao == 'ficha'\"\n    (click)=\"onCancel()\">\n    Cancelar\n  </button>\n  <button\n    type=\"button\"\n    *ngIf=\"tipoVisao == 'ficha'\"\n    (click)=\"onDownload()\">\n    Download\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\n  <div class=\"row justify-content-center\" *ngIf=\"tipoVisao == 'formulario'\">\n    <div class=\"col-12\" >\n      <h1>Termo de Devolução</h1>\n      <form  [formGroup]=\"form\">\n        <div class=\"form-row\">\n          <div class=\"form-group col mb-0\">\n            <div class=\"mtc-title\">Dados do Comodante</div>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-6\">\n            <label for=\"NM_EMPR\">Nome</label>\n            <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"NM_EMPR\"\n            formControlName=\"NM_EMPR\"\n            >\n          </div>\n          <div class=\"form-group col-md-6\">\n            <label for=\"CD_EMPR_CNPJ\">CNPJ </label>\n            <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"CD_EMPR_CNPJ\"\n            formControlName=\"CD_EMPR_CNPJ\"\n            cnpj [textMask]=\"{ mask: MASKS.cnpj.textMask }\"\n            >\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-6\">\n            <label for=\"DS_EMPR_ENDE\">Endereço</label>\n            <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"DS_EMPR_ENDE\"\n            formControlName=\"DS_EMPR_ENDE\"\n            >\n          </div>\n          <div class=\"form-group col-md-6\">\n            <label for=\"NM_EMPR_BAIR\">Bairro</label>\n            <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"NM_EMPR_BAIR\"\n            formControlName=\"NM_EMPR_BAIR\"\n            >\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-6\">\n            <label for=\"NM_EMPR_CIDA\">Cidade</label>\n            <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"NM_EMPR_CIDA\"\n            formControlName=\"NM_EMPR_CIDA\"\n            >\n          </div>\n          <div class=\"form-group col-md-6\">\n            <label for=\"NM_EMPR_ESTA\">Estado</label>\n            <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"NM_EMPR_ESTA\"\n            formControlName=\"NM_EMPR_ESTA\"\n            >\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col mb-0\">\n            <hr class=\"mt-0\">\n            <div class=\"mtc-title\">Dados do Comodatário</div>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col\">\n            <label for=\"NM_FUNC\">Nome</label>\n            <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"NM_FUNC\"\n            formControlName=\"NM_FUNC\"\n            >\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-6\">\n            <label for=\"CD_USUA_CPF\">CPF</label>\n            <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"CD_USUA_CPF\"\n            formControlName=\"CD_USUA_CPF\"\n            cpf [textMask]=\"{ mask: MASKS.cpf.textMask }\">\n          </div>\n          <div class=\"form-group col-md-6\">\n            <label for=\"CD_USUA_RG\">RG</label>\n            <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"CD_USUA_RG\"\n            formControlName=\"CD_USUA_RG\"\n            >\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-6\">\n            <label for=\"DS_USUA_ENDE\">Endereço</label>\n            <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"DS_USUA_ENDE\"\n            formControlName=\"DS_USUA_ENDE\"\n            >\n          </div>\n          <div class=\"form-group col-md-6\">\n            <label for=\"NM_FUNC_BAIR\">Bairro</label>\n            <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"NM_FUNC_BAIR\"\n            formControlName=\"NM_FUNC_BAIR\"\n            >\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-6\">\n            <label for=\"NM_FUNC_CIDA\">Cidade</label>\n            <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"NM_FUNC_CIDA\"\n            formControlName=\"NM_FUNC_CIDA\"\n            >\n          </div>\n          <div class=\"form-group col-md-6\">\n            <label for=\"NM_FUNC_ESTA\">Estado</label>\n            <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"NM_FUNC_ESTA\"\n            formControlName=\"NM_FUNC_ESTA\"\n            >\n          </div>\n        </div>\n        <div formArrayName=\"objetos\">\n          <div class=\"form-row\">\n            <div class=\"form-group col mb-0\">\n              <hr class=\"mt-0\">\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col mb-0 d-flex justify-content-between\">\n              <div class=\"mtc-title\">Dados da Ocorrência</div>\n              <div>\n                <a\n                  class=\"text-secondary\"\n                  (click)=\"onAddObjeto()\"\n                  href=\"javascript:void(0)\">\n                  <b>Adicionar</b>\n                </a>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-row\"  *ngFor=\"let item of objetos.controls; let i = index\" [formGroupName]=\"i\">\n            <div class=\"form-group col mb-0\">\n              <div class=\"form-row\">\n                <div class=\"form-group col-2\">\n                  <div class=\"mb-0 d-flex justify-content-between w-100\" style=\"height: 22px\">\n                    <label class=\"my-auto\" for=\"CD_ITEM\">Código do Produto</label>\n                    <div class=\"my-auto text-uppercase\" style=\"font-size: 10px\">\n                      <a\n                        class=\"text-primary\"\n                        href=\"javascript:void(0)\"\n                        (click)=\"openModal(pesquisaDeItens, i)\">\n                        <strong>Selecionar</strong>\n                      </a>\n                    </div>\n                  </div>\n                  <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  id=\"CD_ITEM\"\n                  formControlName=\"CD_ITEM\"\n                  (input)=\"onInput()\"\n                  [ngClass]=\"onNestedFieldError('objetos', i, 'CD_ITEM') + ' ' + onNestedFieldRequired('objetos', i, 'CD_ITEM')\">\n                </div>\n                <div class=\"form-group col-2\">\n                  <label for=\"NM_ITEM_TIPO\">Tipo do Produto</label>\n                  <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  id=\"NM_ITEM_TIPO\"\n                  formControlName=\"NM_ITEM_TIPO\"\n                  (input)=\"onInput()\"\n                  [ngClass]=\"onNestedFieldError('objetos', i, 'NM_ITEM_TIPO') + ' ' + onNestedFieldRequired('objetos', i, 'NM_ITEM_TIPO')\">\n                </div>\n                <div class=\"form-group col-4\">\n                  <label for=\"NM_MODE\">Modelo do Produto</label>\n                  <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  id=\"NM_MODE\"\n                  formControlName=\"NM_MODE\"\n                  (input)=\"onInput()\"\n                  [ngClass]=\"onNestedFieldError('objetos', i, 'NM_MODE') + ' ' + onNestedFieldRequired('objetos', i, 'NM_MODE')\">\n                </div>\n                <div class=\"form-group col-1\">\n                  <label for=\"quantidadeObj\">Quantidade</label>\n                  <input\n                    type=\"number\"\n                    class=\"form-control\"\n                    id=\"quantidadeObj\"\n                    formControlName=\"quantidadeObj\"\n                    (input)=\"onInput()\"\n                    [ngClass]=\"onNestedFieldError('objetos', i, 'quantidadeObj') + ' ' + onNestedFieldRequired('objetos', i, 'quantidadeObj')\">\n                </div>\n                <div class=\"form-group col-2\">\n                  <label for=\"VL_ITEM\">Valor</label>\n                  <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    id=\"valorObj\"\n                    formControlName=\"VL_ITEM\"\n                    currencyMask [options]=\"{ align: 'left', prefix: 'R$ ', thousands: '.', decimal: ',' }\"\n                    (input)=\"onInput()\"\n                    [ngClass]=\"onNestedFieldError('objetos', i, 'VL_ITEM') + ' ' + onNestedFieldRequired('objetos', i, 'VL_ITEM')\">\n                </div>\n                <div class=\"col-1 pt-4 d-flex justify-content-center\">\n                  <button\n                    type=\"button\"\n                    class=\"btn-icon\"\n                    (click)=\"onDeleteObjeto(i)\">\n                    <i class=\"fas fa-trash\"></i>\n                  </button>\n                </div>\n              </div>\n              <div class=\"form-row\">\n                <div class=\"form-group col-12\">\n                  <label for=\"NM_PROD\">Produto</label>\n                  <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  id=\"NM_PROD\"\n                  formControlName=\"NM_PROD\"\n                  (input)=\"onInput()\"\n                  [ngClass]=\"onNestedFieldError('objetos', i, 'NM_PROD') + ' ' + onNestedFieldRequired('objetos', i, 'NM_PROD')\">\n                </div>\n              </div>\n            </div>\n          </div>\n          <br>\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-8\" >\n              <label>Observação</label>\n              <div >{{ocorrencias.DS_OBSE}}</div>\n            </div>\n            <div class=\"form-group col-md-4\" >\n              <label>Data de cadastro da ocorrência</label>\n              <div >{{ocorrencias.DT_INCL | date: 'dd/MM/yyyy HH:mm'}}</div>\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n  <ng-template #pesquisaDeItens>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title pull-left\">Pesquisa de Itens</h4>\n      <div class=\"d-flex justify-content-center align-items-center\">\n        <div class=\"spinner-border text-primary mr-2\" role=\"status\" *ngIf=\"loadingItens\">\n          <span class=\"sr-only\">Loading...</span>\n        </div>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModal()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n    </div>\n    <div class=\"modal-body\">\n      <advanced-filter>\n        <form [formGroup]=\"formPesquisaItem\">\n          <div class=\"form-row\">\n            <div class=\"form-group col\">\n              <label for=\"cdItem\">BUSCAR POR</label>\n              <select\n                class=\"form-control custom-select\"\n                formControlName=\"buscarPor\"\n              >\n                <option value=\"ID_TECN_INFO_ITEM\" selected>ID</option>\n                <option value=\"NM_PROD\">Produto</option>\n                <option value=\"CD_ITEM\">Código/Nº Série</option>\n                <option value=\"NM_ITEM_TIPO\">Tipo de Item</option>\n                <option value=\"NM_MODE\">Modelo</option>\n                <option value=\"DS_CONT\">Contrato</option>\n              </select>\n            </div>\n            <div class=\"form-group col\">\n              <label>TERMO DE PESQUISA</label>\n              <div class=\"input-group\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  formControlName=\"pesquisa\"\n                  (keyup.enter)=\"getItens()\"\n                >\n                <div class=\"input-group-append\">\n                  <span\n                    class=\"input-group-text hover\"\n                    (click)=\"getItens()\"\n                  >\n                    <i class=\"fas fa-search\"></i>\n                  </span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </form>\n      </advanced-filter>\n      <custom-table *ngIf=\"!loadingItens && (itens.length > 0)\">\n        <ng-template #thead let-thead>\n          <tr>\n            <th>ID</th>\n            <th>Código/Nº Série</th>\n            <th>Produto</th>\n            <th>Contrato</th>\n            <th></th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr *ngFor=\"let item of itens\">\n            <td>{{ item.ID_TECN_INFO_ITEM }}</td>\n            <td>{{ item.CD_ITEM }}</td>\n            <td>{{ item.NM_PROD}}</td>\n            <td>{{ item.DS_CONT }}</td>\n            <td>\n              <button\n                class=\"btn-icon-sm\"\n                tooltip=\"Salvar Item\"\n                container=\"body\"\n                (click)=\"setObjetos(item);modalRef.hide()\"\n              >\n                <i class=\"far fa-save\"></i>\n              </button>\n            </td>\n          </tr>\n        </ng-template>\n      </custom-table>\n    </div>\n  </ng-template>\n  <div class=\"row justify-content-center pt-5 uk-margin-top\" id=\"termo-devolucao\" *ngIf=\"tipoVisao == 'ficha'\" >\n    <div class=\" row justify-content-center col-10 pt-5 pb-5\">\n      <h1 >CONTRATO DE COMODATO</h1><br>\n      <div>\n        <div class=\" mt-5 pt-5\">\n          <p>\n            <strong>COMODANTE:</strong> {{dataFicha.NM_EMPR | uppercase}}, com sede na {{dataFicha.DS_EMPR_ENDE | uppercase }},\n            bairro {{dataFicha.NM_EMPR_BAIR | uppercase}}, na cidade de {{dataFicha.NM_EMPR_CIDA | uppercase}}, Estado de {{dataFicha.NM_EMPR_ESTA | uppercase}}, inscrita \n            no CNPJ sob o Nº{{dataFicha.CD_EMPR_CNPJ | cnpj }}.\n          </p>\n          <p>\n            <strong>COMODATÁRIO: </strong>{{dataFicha.NM_FUNC | uppercase}}, (estado civil), (profissão), portador da cédula de identidade R.G. nº {{dataFicha.CD_USUA_RG}}, e CPF/MF nº {{dataFicha.CD_USUA_CPF}}, residente e \n            domiciliado na residente e domiciliado na {{dataFicha.DS_USUA_ENDE | uppercase}} , {{dataFicha.DS_USUA_BAIR | uppercase}} na \n            cidade de, {{dataFicha.NM_FUNC_CIDA | uppercase}} no Estado de {{dataFicha.NM_FUNC_ESTA | uppercase}}, registro nº {{dataFicha.NR_MATR}}, sob a gestão de (nome do Gestor);\n          </p>\n          <p>\n            As partes acima identificadas acordam com o presente Contrato de Comodato de Equipamentos, que se regerá pelas cláusulas seguintes:\n          </p>\n          <br>\n          <p class=\"pt-3\">\n            <strong><u>DO OBJETO DO CONTRATO</u></strong>\n          </p>\n          <p>\n            Cláusula 1ª. O OBJETO do presente instrumento é a transferência, pela COMODANTE ao COMODATÁRIO, dos direitos de uso e gozo dos equipamentos e computadores descritos a seguir:\n          </p>\n          <div *ngIf=\"dataFicha.objetos.length == 0\" class=\"pt-3\">NÃO INFORMADO</div>\n          <div *ngIf=\"dataFicha.objetos.length > 0\" class=\"pt-3\">\n            <div class=\"row mt-0 col-12\" *ngFor=\"let item of dataFicha.objetos\">\n              <div class=\"col-8\">\n                <p class=\"mt-0 mb-0\">\n                  <strong class=\"mr-2\">Produto:</strong>\n                  <span *ngIf=\"item.NM_PROD == null\">NÃO INFORMADO</span>\n                  <span *ngIf=\"item.NM_PROD != null\">{{ item.NM_PROD | uppercase }}</span>\n                </p>\n              </div>\n              <div class=\"col-1 mr-5\">\n                <p class=\"mt-0 mb-2\">\n                  <strong class=\"mr-2\">Quantidade:</strong>\n                  <span *ngIf=\"item.quantidadeObj == null\">NÃO INFORMADO</span>\n                  <span *ngIf=\"item.quantidadeObj != null\">{{ item.quantidadeObj }}</span>\n                </p>\n              </div>\n              <div class=\"col-2\">\n                <p class=\"mt-0 mb-2\">\n                  <strong class=\"mr-2\">Valor:</strong>\n                  <span *ngIf=\"item.VL_ITEM == null\">NÃO INFORMADO</span>\n                  <span *ngIf=\"item.VL_ITEM != null\">{{ item.VL_ITEM | currency:'BRL':'symbol':'1.2-2'}}</span>\n                </p>\n              </div>\n            </div>\n            <hr width = “2” size = “100”>\n          </div>\n          <br>\n          <p class=\"pt-3\">\n            <strong><u>DO USO E DAS OBRIGAÇÕES DO COMODATÁRIO</u></strong>\n          </p>\n          <p>\n            Cláusula 2ª. Os equipamentos, objeto deste contrato, deverão ser utilizados somente, pelo COMODATÁRIO, não devendo serem utilizados para fins pessoais.\n          </p>\n          <p>\n            Cláusula 3ª. O COMODATÁRIO deverá utilizar o equipamento e devolve-lo nas mesmas condições em que o recebeu - a <strong>{{dataFicha.NM_EMPR | uppercase}}</strong> irá avaliar o objeto quando da devolução.\n          </p>\n          <p>\n            Cláusula 4ª. O COMODATÁRIO de compromete a não ceder, transferir ou emprestar o equipamento a terceiros, assim como a ressarcir à <strong>{{dataFicha.NM_EMPR | uppercase}}</strong>  o valor correspondente ao custo com reparos, caso o equipamento empresado sofra qualquer tipo de dano; \n          </p>\n          <p>\n            Cláusula 5ª. Em caso de perda, o COMODATÁRIO deverá adquirir e restituir à <strong>{{dataFicha.NM_EMPR | uppercase}}</strong>, qualquer que seja o motivo, novo equipamento da mesma marca e modelo similar. Se o original não for mais comercializado, a <strong>{{dataFicha.NM_EMPR | uppercase}}</strong> deverá aprovar o novo modelo e marca.\n          </p>\n          <p>\n            Cláusula 6ª. O uso e gozo do equipamento, assim como o cumprimento das demais cláusulas referentes ao uso e obrigações, é de responsabilidade do COMODATÁRO, assim como do seu gestor direto.\n          </p>\n          <br>\n          <p>\n            <strong><u>DA DEVOLUÇÃO</u></strong>\n          </p>\n          <p>\n            Cláusula 7ª. Fica obrigado o COMODATÁRIO em devolver o equipamento à COMODANTE quando forem por esta requisitado, em idênticas condições em que estava, e em condições de uso, devendo reparar os equipamentos quando danificados.\n          </p>\n          <p>\n            Cláusula 8ª. O processo de devolução do equipamento deverá ser acompanhado pelo gestor direto do COMODATÁRIO, assim como deverá ser preenchido o <strong>termo de devolução</strong> anexo a este contrato.\n          </p>\n          <br>\n          <p>\n            <strong><u>DA RESCISÃO</u></strong>\n          </p>\n          <p>\n            Cláusula 9ª. O presente contrato é celebrado por prazo indeterminado e será considerado rescindido de pleno direito em caso de infração, por parte da COMODATÁRIA e/ou de seu gestor, de qualquer cláusula acordada, assegurado à COMODANTE o direito de retirar, de onde quer que esteja, o bem ora cedido em comodato.\n          </p>\n          <br>\n          <p>\n            <strong><u>CONDIÇÕES GERAIS</u></strong>\n          </p>\n          <p>\n            Cláusula 10ª. Este contrato, passa a vigorar a partir da assinatura das partes.\n          </p>\n          <br>\n          <p>\n            <strong><u>DO FORO</u></strong>\n          </p>\n          <p>\n            Cláusula 11ª. As partes elegem o foro da comarca de Piracicaba/SP, para dirimirem quaisquer controvérsias oriundas do presente contrato.\n          </p>\n          <div class=\"col-11 d-flex justify-content-end pt-3\">{{dataFicha.NM_EMPR_CIDA | uppercase}}/{{dataFicha.NM_EMPR_ESTA | uppercase}}-{{dataFicha.dataHoje}} </div>\n          <div class=\"col-11 d-flex justify-content-end pt-5\">_____________________________________________________</div>\n          <div class=\"col-11 d-flex justify-content-end\">{{dataFicha.NM_FUNC | uppercase}}</div>\n          <div class=\"col-11 d-flex justify-content-end pt-3\">_____________________________________________________</div>\n          <div class=\"col-11 d-flex justify-content-end\">(GESTOR DO RESPONSÁVEL)</div>\n          <div class=\"col-11 d-flex justify-content-end pt-3\">_____________________________________________________</div>\n          <div class=\"col-11 d-flex justify-content-end\">(Comodatária)</div>\n          <div class=\"justify-content-end\" style=\"height: 200px;\"></div>\n        </div>\n      </div>\n      <br>\n    </div>\n    <br>\n    <div class=\" row justify-content-center col-10 pt-5 \">\n      <br><br>\n      <h1 class=\"pt-5\">TERMO DE DEVOLUÇÃO</h1><br>\n      <div>\n        <div class=\" mt-5 pt-5\">\n          <p>\n            Pelo presente Termo de Devolução, o COMODATÁRIO acima qualificado declara que devolveu o(s) equipamento(s) e acessórios acima especificados, de guarda e responsabilidade da <strong>{{dataFicha.NM_EMPR | uppercase}}</strong>, nas mesmas condições que os recebeu.\n          </p>\n          <p>\n            A COMODANTE e o gestor do COMODATÁRIO, declaram que receberam os equipamentos em devolução, nas mesmas condições de empréstimo.\n          </p>\n          <br>\n          <p class=\"mb-1\">\n            <strong>OBSERVAÇÕES</strong>\n          </p>\n          <a *ngIf =\"dataFicha.DS_OBSE != null\">{{dataFicha.DS_OBSE}}</a>\n          <a *ngIf =\"dataFicha.DS_OBSE == null\">\n            <hr style=\"border: 2px;border-bottom-style: solid;\">\n            <hr style=\"border: 2px;border-bottom-style: solid;\">\n            <hr style=\"border: 2px;border-bottom-style: solid;\">\n            <hr style=\"border: 2px;border-bottom-style: solid;\">\n          </a>\n          <div class=\"col-11 d-flex justify-content-end pt-5\">{{dataFicha.dataHoje}} </div>\n          <div class=\"col-11 d-flex justify-content-end pt-5\">_____________________________________________________</div>\n          <div class=\"col-11 d-flex justify-content-end\">{{dataFicha.NM_FUNC | uppercase}}</div>\n          <div class=\"col-11 d-flex justify-content-end pt-3\">_____________________________________________________</div>\n          <div class=\"col-11 d-flex justify-content-end\">(GESTOR DO RESPONSÁVEL)</div>\n          <div class=\"col-11 d-flex justify-content-end pt-3\">_____________________________________________________</div>\n          <div class=\"col-11 d-flex justify-content-end\">(Comodatária)</div>\n        </div>\n      </div>\n    </div>\n  </div>\n</app-body>\n";
      /***/
    },

    /***/
    "NZE0":
    /*!********************************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/contratos/contratos.component.ts ***!
      \********************************************************************************/

    /*! exports provided: TecnologiaInformacaoContratosComponent */

    /***/
    function NZE0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoContratosComponent", function () {
        return TecnologiaInformacaoContratosComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_contratos_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./contratos.component.html */
      "eIKP");
      /* harmony import */


      var _contratos_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./contratos.component.scss */
      "aHKa");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS"); // Services


      var TecnologiaInformacaoContratosComponent = /*#__PURE__*/function () {
        function TecnologiaInformacaoContratosComponent(activatedRoute, router, atividadesService, pnotifyService, titleService) {
          _classCallCheck(this, TecnologiaInformacaoContratosComponent);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.atividadesService = atividadesService;
          this.pnotifyService = pnotifyService;
          this.titleService = titleService;
          this.loaderFullScreen = true;
          this.breadCrumbTree = [{
            descricao: 'Home',
            routerLink: '/tecnologia-informacao/home'
          }, {
            descricao: 'Contratos'
          }];
          this.atividades = [];
          this.pnotifyService.getPNotify();
        }

        _createClass(TecnologiaInformacaoContratosComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.titleService.setTitle('contratos');
            this.activatedRoute.params.subscribe(function (params) {
              _this.registrarAcesso();

              _this.getAtividadesInternas(params['idSubModulo']);
            });
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "getAtividadesInternas",
          value: function getAtividadesInternas(idSubModulo) {
            var _this2 = this;

            this.atividadesService.getAtividadesInternas(idSubModulo).subscribe(function (response) {
              if (response['responseCode'] === 200) {
                _this2.atividades = response['result'];
                _this2.loaderFullScreen = false;
              } else {
                _this2.handleAtividadesInternasError();
              }
            }, function (error) {
              _this2.handleAtividadesInternasError();
            });
          }
        }, {
          key: "handleAtividadesInternasError",
          value: function handleAtividadesInternasError() {
            this.pnotifyService.error();
            this.router.navigate(['/tecnologia-informacao/home']);
          }
        }]);

        return TecnologiaInformacaoContratosComponent;
      }();

      TecnologiaInformacaoContratosComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__["AtividadesService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_7__["TitleService"]
        }];
      };

      TecnologiaInformacaoContratosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'tecnologia-informacao-contratos',
        template: _raw_loader_contratos_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_contratos_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__["AtividadesService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_7__["TitleService"]])], TecnologiaInformacaoContratosComponent);
      /***/
    },

    /***/
    "S1or":
    /*!***************************************************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/contratos/ocorrencia/services/ocorrencia.service.ts ***!
      \***************************************************************************************************/

    /*! exports provided: TecnologiaInformacaoCadastroOcorrenciaService */

    /***/
    function S1or(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoCadastroOcorrenciaService", function () {
        return TecnologiaInformacaoCadastroOcorrenciaService;
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


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW"); //angular
      // services


      var TecnologiaInformacaoCadastroOcorrenciaService = /*#__PURE__*/function () {
        function TecnologiaInformacaoCadastroOcorrenciaService(http) {
          _classCallCheck(this, TecnologiaInformacaoCadastroOcorrenciaService);

          this.http = http;
          this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API;
        }

        _createClass(TecnologiaInformacaoCadastroOcorrenciaService, [{
          key: "getOcorrencia",
          value: function getOcorrencia(params) {
            return this.http.get("".concat(this.API, "/tecnologia-informacao/ocorrencias"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "postOcorrencia",
          value: function postOcorrencia(ocorrencia) {
            return this.http.post("".concat(this.API, "/tecnologia-informacao/ocorrencias"), ocorrencia, {
              observe: 'response'
            });
          }
        }, {
          key: "getResponsaveis",
          value: function getResponsaveis(params) {
            return this.http.get("".concat(this.API, "/tecnologia-informacao/ocorrencias/responsaveis"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "postResponsaveis",
          value: function postResponsaveis(params) {
            return this.http.post("".concat(this.API, "/tecnologia-informacao/ocorrencias/responsaveis"), params, {
              observe: 'response'
            });
          }
        }, {
          key: "getDocumento",
          value: function getDocumento(params) {
            return this.http.get("".concat(this.API, "/tecnologia-informacao/ocorrencias/documentos"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "postDocumento",
          value: function postDocumento(params, ID_TEIN_OCOR) {
            return this.http.post("".concat(this.API, "/tecnologia-informacao/ocorrencias/documentos?ID_TEIN_OCOR=").concat(ID_TEIN_OCOR), params, {
              observe: 'response'
            });
          }
        }, {
          key: "putDocumento",
          value: function putDocumento(params) {
            return this.http.put("".concat(this.API, "/tecnologia-informacao/ocorrencias/documentos"), params, {
              observe: 'response'
            });
          }
        }, {
          key: "getParecer",
          value: function getParecer(params) {
            return this.http.get("".concat(this.API, "/tecnologia-informacao/ocorrencias/parecer"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "postParecer",
          value: function postParecer(parecer) {
            return this.http.post("".concat(this.API, "/tecnologia-informacao/ocorrencias/parecer"), parecer, {
              observe: 'response'
            });
          }
        }, {
          key: "getDocumentoParecer",
          value: function getDocumentoParecer(params) {
            return this.http.get("".concat(this.API, "/tecnologia-informacao/ocorrencias/documentos"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "postDocumentoParecer",
          value: function postDocumentoParecer(documento, params) {
            return this.http.post("".concat(this.API, "/tecnologia-informacao/ocorrencias/documentos?ID_TEIN_OCOR=").concat(params.ID_TEIN_OCOR, "&ID_TEIN_OCPR=").concat(params.ID_TEIN_OCPR), documento, {
              observe: 'response'
            });
          }
        }, {
          key: "putDocumentoParecer",
          value: function putDocumentoParecer(params) {
            return this.http.put("".concat(this.API, "/tecnologia-informacao/ocorrencias/parecer/documentos"), params, {
              observe: 'response'
            });
          }
        }, {
          key: "getResponsaveisParecer",
          value: function getResponsaveisParecer(params) {
            return this.http.get("".concat(this.API, "/tecnologia-informacao/ocorrencias/responsaveis"), {
              params: params,
              observe: 'response'
            });
          }
        }]);

        return TecnologiaInformacaoCadastroOcorrenciaService;
      }();

      TecnologiaInformacaoCadastroOcorrenciaService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      TecnologiaInformacaoCadastroOcorrenciaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], TecnologiaInformacaoCadastroOcorrenciaService);
      /***/
    },

    /***/
    "SVrc":
    /*!*************************************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/contratos/contratos-routing.module.ts ***!
      \*************************************************************************************/

    /*! exports provided: TecnologiaInformacaoCadastrosRoutingModule */

    /***/
    function SVrc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoCadastrosRoutingModule", function () {
        return TecnologiaInformacaoCadastrosRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _termo_devolucao_termo_devolucao_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./termo-devolucao/termo-devolucao.component */
      "YM0B");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _contratos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./contratos.component */
      "NZE0");
      /* harmony import */


      var _termo_responsabilidade_termo_responsabilidade_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./termo-responsabilidade/termo-responsabilidade.component */
      "xCq4"); // Components


      var routes = [{
        path: '',
        children: [{
          path: '',
          component: _contratos_component__WEBPACK_IMPORTED_MODULE_4__["TecnologiaInformacaoContratosComponent"]
        }, {
          path: 'contratos',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | contrato-contrato-module */
            [__webpack_require__.e("common"), __webpack_require__.e("contrato-contrato-module")]).then(__webpack_require__.bind(null,
            /*! ./contrato/contrato.module */
            "fs7y")).then(function (m) {
              return m.TecnologiaInformacaoContratoModule;
            });
          }
        }, {
          path: 'tipo-contrato',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | tipo-contrato-tipo-contrato-module */
            [__webpack_require__.e("common"), __webpack_require__.e("tipo-contrato-tipo-contrato-module")]).then(__webpack_require__.bind(null,
            /*! ./tipo-contrato/tipo-contrato.module */
            "ZGnT")).then(function (m) {
              return m.TecnologiaInformacaoTipoContratoModule;
            });
          }
        }, {
          path: 'tipo-item',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | tipo-item-tipo-item-module */
            [__webpack_require__.e("common"), __webpack_require__.e("tipo-item-tipo-item-module")]).then(__webpack_require__.bind(null,
            /*! ./tipo-item/tipo-item.module */
            "Jg/J")).then(function (m) {
              return m.TecnologiaInformacaoTipoItemModule;
            });
          }
        }, {
          path: 'modelos',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | modelo-modelo-module */
            [__webpack_require__.e("default~modelo-modelo-module~produtos-produtos-module"), __webpack_require__.e("common"), __webpack_require__.e("modelo-modelo-module")]).then(__webpack_require__.bind(null,
            /*! ./modelo/modelo.module */
            "Q6LE")).then(function (m) {
              return m.TecnologiaInformacaoModeloModule;
            });
          }
        }, {
          path: 'item',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | item-item-module */
            [__webpack_require__.e("common"), __webpack_require__.e("item-item-module")]).then(__webpack_require__.bind(null,
            /*! ./item/item.module */
            "+rmI")).then(function (m) {
              return m.TecnologiaInformacaoItemModule;
            });
          }
        }, {
          path: 'ocorrencias',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | ocorrencia-ocorrencia-module */
            [__webpack_require__.e("common"), __webpack_require__.e("ocorrencia-ocorrencia-module")]).then(__webpack_require__.bind(null,
            /*! ./ocorrencia/ocorrencia.module */
            "POIC")).then(function (m) {
              return m.TecnologiaInformacaoOcorrenciaModule;
            });
          }
        }]
      }, {
        path: 'termo-responsabilidade/:item',
        component: _termo_responsabilidade_termo_responsabilidade_component__WEBPACK_IMPORTED_MODULE_5__["TecnologiaInformacaoTermoResponsabilidadeComponent"]
      }, {
        path: 'termo-devolucao/:ocorrencia',
        component: _termo_devolucao_termo_devolucao_component__WEBPACK_IMPORTED_MODULE_1__["TecnologiaInformacaoTermoDevolucaoComponent"]
      }];

      var TecnologiaInformacaoCadastrosRoutingModule = function TecnologiaInformacaoCadastrosRoutingModule() {
        _classCallCheck(this, TecnologiaInformacaoCadastrosRoutingModule);
      };

      TecnologiaInformacaoCadastrosRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
      })], TecnologiaInformacaoCadastrosRoutingModule);
      /***/
    },

    /***/
    "YM0B":
    /*!******************************************************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/contratos/termo-devolucao/termo-devolucao.component.ts ***!
      \******************************************************************************************************/

    /*! exports provided: TecnologiaInformacaoTermoDevolucaoComponent */

    /***/
    function YM0B(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoTermoDevolucaoComponent", function () {
        return TecnologiaInformacaoTermoDevolucaoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_termo_devolucao_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./termo-devolucao.component.html */
      "NFDp");
      /* harmony import */


      var _termo_devolucao_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./termo-devolucao.component.scss */
      "A6pt");
      /* harmony import */


      var _ocorrencia_services_ocorrencia_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../ocorrencia/services/ocorrencia.service */
      "S1or");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var _item_services_item_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../item/services/item.service */
      "Z7gR");
      /* harmony import */


      var _services_funcionarios_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../services/funcionarios.service */
      "jMbs");
      /* harmony import */


      var _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./../../../../shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./../../../../shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _shared_services_core_pdf_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./../../../../shared/services/core/pdf.service */
      "GTII");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var ng_brazil__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ng-brazil */
      "hTrW");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");

      var TecnologiaInformacaoTermoDevolucaoComponent = /*#__PURE__*/function () {
        function TecnologiaInformacaoTermoDevolucaoComponent(pdfService, route, modalService, activatedRoute, funcionarioService, itensService, pnotifyService, ocorrenciaService, routerService, formBuilder, dateService) {
          _classCallCheck(this, TecnologiaInformacaoTermoDevolucaoComponent);

          this.pdfService = pdfService;
          this.route = route;
          this.modalService = modalService;
          this.activatedRoute = activatedRoute;
          this.funcionarioService = funcionarioService;
          this.itensService = itensService;
          this.pnotifyService = pnotifyService;
          this.ocorrenciaService = ocorrenciaService;
          this.routerService = routerService;
          this.formBuilder = formBuilder;
          this.dateService = dateService;
          this.MASKS = ng_brazil__WEBPACK_IMPORTED_MODULE_13__["MASKS"];
          this.loaderNavbar = false;
          this.tipoVisao = 'formulario';
          this.breadCrumbTree = [];
          this.dataFicha = [];
          this.funcionario = [];
          this.formChanged = false;
          this.loaderFullScreen = true;
          this.ocorrencias = [];
          this.itens = [];
          this.loadingItens = false;
        }

        _createClass(TecnologiaInformacaoTermoDevolucaoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.setBreadCrumb();
            this.setFormBuilder();
            this.onActivatedRoute();
          }
        }, {
          key: "onActivatedRoute",
          value: function onActivatedRoute() {
            var _params = this.activatedRoute.snapshot.params;
            if (!_params.hasOwnProperty('ocorrencia')) return;
            this.getOcorrencia({
              ID_TEIN_OCOR: _params['ocorrencia']
            });
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
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            this.breadCrumbTree = [{
              descricao: 'Home',
              routerLink: '/tecnologia-informacao/home'
            }, {
              descricao: 'Termo de Devolucao'
            }];
          }
        }, {
          key: "getOcorrencia",
          value: function getOcorrencia(params) {
            var _this3 = this;

            this.loading = true;
            this.ocorrenciaService.getOcorrencia(params).subscribe(function (response) {
              if (response.status === 200) {
                var ocorrencia = response.body['data'][0];
                var observacao = ocorrencia['DS_OBSE'];

                _this3.form.get('DS_OBSE').patchValue(observacao);

                var item = ocorrencia['ID_TECN_INFO_ITEM'];
                _this3.ocorrencias = ocorrencia;

                _this3.getObjetos({
                  ID_TECN_INFO_ITEM: item
                });
              } else {
                _this3.ocorrencias = [];
                _this3.loading = false;

                _this3.pnotifyService.error();
              }
            }, function (error) {
              _this3.pnotifyService.error();
            });
          }
        }, {
          key: "getObjetos",
          value: function getObjetos(params) {
            var _this4 = this;

            this.loading = true;
            this.itensService.getItem(params).subscribe(function (response) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var _this5 = this;

                var objetos, _params, promise;

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
                        objetos = response['body']['data'];
                        _params = objetos[0];
                        this.getFuncionario({
                          NR_MATR: _params['NR_MATR']
                        });

                        promise = function promise() {
                          return objetos.forEach(function () {
                            return _this5.onAddObjeto();
                          });
                        };

                        _context.next = 8;
                        return Promise.resolve(promise());

                      case 8:
                        this.form.get('objetos').patchValue(objetos);

                      case 9:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            }, function (error) {
              _this4.pnotifyService.error('Não foi encontrado nenhum material');
            });
          }
        }, {
          key: "setObjetos",
          value: function setObjetos(objeto) {
            var fg = this.form.get('objetos');
            fg.controls[this.index].patchValue(objeto);
          }
        }, {
          key: "onAddObjeto",
          value: function onAddObjeto() {
            this.objetos.push(this.formBuilder.group({
              NM_ITEM_TIPO: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
              NM_MODE: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
              NM_PROD: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
              VL_ITEM: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
              CD_ITEM: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
              quantidadeObj: ['1', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]]
            }));
          }
        }, {
          key: "onDeleteObjeto",
          value: function onDeleteObjeto(index) {
            if (this.objetos.length > 1) {
              this.objetos.removeAt(index);
            } else {
              this.pnotifyService.notice('Informe ao menos um Objeto.');
            }
          }
        }, {
          key: "setFormBuilder",
          value: function setFormBuilder() {
            this.form = this.formBuilder.group({
              NR_MATR: [{
                value: [null],
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
              DS_EMPR_ENDE: [{
                value: [null],
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
              NM_EMPR_BAIR: [{
                value: [null],
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
              NM_EMPR_CIDA: [{
                value: [null],
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
              NM_EMPR_ESTA: [{
                value: [null],
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
              NM_EMPR: [{
                value: [null],
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
              CD_EMPR_EMPR: [{
                value: [null],
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
              NM_FUNC: [{
                value: [null],
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
              CD_USUA_RG: [{
                value: [null],
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
              CD_USUA_CPF: [{
                value: null,
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
              DS_USUA_ENDE: [{
                value: [null],
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
              CD_EMPR_CNPJ: [{
                value: null,
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
              NM_FUNC_BAIR: [{
                value: null,
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
              NM_FUNC_CIDA: [{
                value: null,
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
              NM_FUNC_ESTA: [{
                value: null,
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
              DS_OBSE: [{
                value: null,
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
              objetos: this.formBuilder.array([])
            });
            this.formPesquisaItem = this.formBuilder.group({
              buscarPor: ['CD_ITEM'],
              pesquisa: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
              ID_TECN_INFO_ITEM: [null],
              CD_ITEM: [null],
              NM_ITEM_TIPO: [null],
              NM_MODE: [null],
              NM_PROD: [null],
              ID_TECN_INFO_ITEM_DOCU: [null],
              DS_CONT: [null]
            });
          }
        }, {
          key: "getItens",
          value: function getItens() {
            var _this6 = this;

            var _obj = this.formPesquisaItem.value;
            var _params = {};
            if (_obj['pesquisa']) _params[_obj['buscarPor']] = _obj['pesquisa'];
            this.loadingItens = true;
            this.itensService.getItem(_params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(function () {
              _this6.loadingItens = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this6.itens = response.body['data'];
              } else {
                _this6.pnotifyService.notice('Nenhum registro encontrado!');

                _this6.itens = [];
              }
            }, function (error) {
              _this6.pnotifyService.error();
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this7 = this;

            var dataHoje = new Date();
            var dataHojeC = this.dateService.getFullDate(dataHoje, null, false);

            if (this.form.valid) {
              this.loaderNavbar = true;
              setTimeout(function () {
                var formData = _this7.form.getRawValue();

                _this7.tipoVisao = 'ficha';
                _this7.dataFicha = {
                  NR_MATR: formData['NR_MATR'],
                  DS_EMPR_ENDE: formData['DS_EMPR_ENDE'],
                  NM_EMPR_BAIR: formData['NM_EMPR_BAIR'],
                  NM_EMPR_CIDA: formData['NM_EMPR_CIDA'],
                  NM_EMPR_ESTA: formData['NM_EMPR_ESTA'],
                  NM_EMPR: formData['NM_EMPR'],
                  CD_EMPR_EMPR: formData['CD_EMPR_EMPR'],
                  NM_FUNC: formData['NM_FUNC'],
                  CD_USUA_RG: formData['CD_USUA_RG'],
                  CD_USUA_CPF: formData['CD_USUA_CPF'],
                  DS_USUA_ENDE: formData['DS_USUA_ENDE'],
                  CD_EMPR_CNPJ: formData['CD_EMPR_CNPJ'],
                  NM_FUNC_BAIR: formData['NM_FUNC_BAIR'],
                  NM_FUNC_CIDA: formData['NM_FUNC_CIDA'],
                  NM_FUNC_ESTA: formData['NM_FUNC_ESTA'],
                  DS_OBSE: formData['DS_OBSE'],
                  objetos: formData['objetos'],
                  dataHoje: [dataHojeC]
                };
                _this7.formChanged = false;
                _this7.loaderNavbar = false;
              }, 1000);
            }
          }
        }, {
          key: "onDownload",
          value: function onDownload() {
            var _this8 = this;

            this.loaderNavbar = true;
            var _nome = this.form.get('NM_FUNC').value;
            this.pdfService.download('termo-devolucao', "TERMO DE DEVOLU\xC7\xC3O - ".concat(_nome));
            setTimeout(function () {
              _this8.loaderNavbar = false;
            }, 500);
          }
        }, {
          key: "getFuncionario",
          value: function getFuncionario(params) {
            var _this9 = this;

            this.loading = true;
            this.funcionarioService.getFuncionario(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(function () {
              _this9.loading = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this9.funcionario = response.body['data'][0];

                _this9.form.patchValue(_this9.funcionario);
              }
            });
          }
        }, {
          key: "onCancel",
          value: function onCancel() {
            var _this10 = this;

            this.loaderNavbar = true;
            setTimeout(function () {
              _this10.tipoVisao = 'formulario';
              _this10.loaderNavbar = false;
            }, 1000);
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
          key: "onFieldRequired",
          value: function onFieldRequired(field) {
            var required = false;
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]();

            if (this.form.controls[field].validator) {
              var validationResult = this.form.controls[field].validator(formControl);
              required = validationResult !== null && validationResult.required === true;
            }

            if (required) {
              return 'is-required';
            }
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
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]();
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
          key: "objetos",
          get: function get() {
            return this.form.get('objetos');
          }
        }]);

        return TecnologiaInformacaoTermoDevolucaoComponent;
      }();

      TecnologiaInformacaoTermoDevolucaoComponent.ctorParameters = function () {
        return [{
          type: _shared_services_core_pdf_service__WEBPACK_IMPORTED_MODULE_10__["PdfService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"]
        }, {
          type: _services_funcionarios_service__WEBPACK_IMPORTED_MODULE_6__["TecnologiaInformacaoFuncionariosService"]
        }, {
          type: _item_services_item_service__WEBPACK_IMPORTED_MODULE_5__["TecnologiaInformacaoCadastroItemService"]
        }, {
          type: _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"]
        }, {
          type: _ocorrencia_services_ocorrencia_service__WEBPACK_IMPORTED_MODULE_3__["TecnologiaInformacaoCadastroOcorrenciaService"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_15__["RouterService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"]
        }, {
          type: _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_7__["DateService"]
        }];
      };

      TecnologiaInformacaoTermoDevolucaoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"])({
        selector: 'termo-devolucao',
        template: _raw_loader_termo_devolucao_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_termo_devolucao_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_services_core_pdf_service__WEBPACK_IMPORTED_MODULE_10__["PdfService"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"], _services_funcionarios_service__WEBPACK_IMPORTED_MODULE_6__["TecnologiaInformacaoFuncionariosService"], _item_services_item_service__WEBPACK_IMPORTED_MODULE_5__["TecnologiaInformacaoCadastroItemService"], _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"], _ocorrencia_services_ocorrencia_service__WEBPACK_IMPORTED_MODULE_3__["TecnologiaInformacaoCadastroOcorrenciaService"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_15__["RouterService"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"], _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_7__["DateService"]])], TecnologiaInformacaoTermoDevolucaoComponent);
      /***/
    },

    /***/
    "Z7gR":
    /*!***************************************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/contratos/item/services/item.service.ts ***!
      \***************************************************************************************/

    /*! exports provided: TecnologiaInformacaoCadastroItemService */

    /***/
    function Z7gR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoCadastroItemService", function () {
        return TecnologiaInformacaoCadastroItemService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW"); //angular
      // services


      var TecnologiaInformacaoCadastroItemService = /*#__PURE__*/function () {
        function TecnologiaInformacaoCadastroItemService(http) {
          _classCallCheck(this, TecnologiaInformacaoCadastroItemService);

          this.http = http;
          this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API;
        } //-----------------------------------ITENS--------------------------\\


        _createClass(TecnologiaInformacaoCadastroItemService, [{
          key: "getItem",
          value: function getItem(params) {
            return this.http.get("".concat(this.API, "/tecnologia-informacao/itens"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "getUsuariosSituacoes",
          value: function getUsuariosSituacoes() {
            return this.http.get("".concat(this.API, "/tecnologia-informacao/situacao-usuario")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1));
          }
        }, {
          key: "postItem",
          value: function postItem(item) {
            return this.http.post("".concat(this.API, "/tecnologia-informacao/item"), item, {
              observe: 'response'
            });
          } //-----------------------------------Docuementos--------------------------\\

        }, {
          key: "getDocumento",
          value: function getDocumento(params) {
            return this.http.get("".concat(this.API, "/tecnologia-informacao/item/documentos"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "postDocumento",
          value: function postDocumento(params, ID_TECN_INFO_ITEM) {
            return this.http.post("".concat(this.API, "/tecnologia-informacao/item/documento?ID_TECN_INFO_ITEM=").concat(ID_TECN_INFO_ITEM), params, {
              observe: 'response'
            });
          }
        }, {
          key: "putDocumento",
          value: function putDocumento(params) {
            return this.http.put("".concat(this.API, "/tecnologia-informacao/item/documento"), params, {
              observe: 'response'
            });
          }
        }]);

        return TecnologiaInformacaoCadastroItemService;
      }();

      TecnologiaInformacaoCadastroItemService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }];
      };

      TecnologiaInformacaoCadastroItemService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])], TecnologiaInformacaoCadastroItemService);
      /***/
    },

    /***/
    "aHKa":
    /*!**********************************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/contratos/contratos.component.scss ***!
      \**********************************************************************************/

    /*! exports provided: default */

    /***/
    function aHKa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGVjbm9sb2dpYS1pbmZvcm1hY2FvL2NvbnRyYXRvcy9jb250cmF0b3MuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "eIKP":
    /*!************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/tecnologia-informacao/contratos/contratos.component.html ***!
      \************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function eIKP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\n<app-header appTitle=\"CONTRATOS\"></app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\n  <card-group text=\"Selecione uma atividade\" [list]=\"atividades\"></card-group>\n</app-body>";
      /***/
    },

    /***/
    "fCxQ":
    /*!*****************************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/contratos/contratos.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: TecnologiaInformacaoContratosModule */

    /***/
    function fCxQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoContratosModule", function () {
        return TecnologiaInformacaoContratosModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/pipes/pipes.module */
      "9Xeq");
      /* harmony import */


      var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng2-currency-mask */
      "D5nU");
      /* harmony import */


      var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var ng_brazil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng-brazil */
      "hTrW");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var angular2_text_mask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! angular2-text-mask */
      "UVXo");
      /* harmony import */


      var angular2_text_mask__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/tooltip */
      "978R");
      /* harmony import */


      var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap/pagination */
      "6No5");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _contratos_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./contratos-routing.module */
      "SVrc");
      /* harmony import */


      var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/core/not-found/not-found.module */
      "sCnT");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var _contratos_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./contratos.component */
      "NZE0");
      /* harmony import */


      var _termo_responsabilidade_termo_responsabilidade_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./termo-responsabilidade/termo-responsabilidade.component */
      "xCq4");
      /* harmony import */


      var _termo_devolucao_termo_devolucao_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./termo-devolucao/termo-devolucao.component */
      "YM0B"); // Modules
      // Components


      var TecnologiaInformacaoContratosModule = function TecnologiaInformacaoContratosModule() {
        _classCallCheck(this, TecnologiaInformacaoContratosModule);
      };

      TecnologiaInformacaoContratosModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"])({
        declarations: [_contratos_component__WEBPACK_IMPORTED_MODULE_15__["TecnologiaInformacaoContratosComponent"], _termo_responsabilidade_termo_responsabilidade_component__WEBPACK_IMPORTED_MODULE_16__["TecnologiaInformacaoTermoResponsabilidadeComponent"], _termo_devolucao_termo_devolucao_component__WEBPACK_IMPORTED_MODULE_17__["TecnologiaInformacaoTermoDevolucaoComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"], _contratos_routing_module__WEBPACK_IMPORTED_MODULE_11__["TecnologiaInformacaoCadastrosRoutingModule"], src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_12__["NotFoundModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_14__["TemplatesModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginationModule"].forRoot(), ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"].forRoot(), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"], angular2_text_mask__WEBPACK_IMPORTED_MODULE_5__["TextMaskModule"], ng_brazil__WEBPACK_IMPORTED_MODULE_3__["NgBrazil"], ng2_currency_mask__WEBPACK_IMPORTED_MODULE_2__["CurrencyMaskModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"], src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__["PipesModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_14__["TemplatesModule"]]
      })], TecnologiaInformacaoContratosModule);
      /***/
    },

    /***/
    "jMbs":
    /*!******************************************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/contratos/services/funcionarios.service.ts ***!
      \******************************************************************************************/

    /*! exports provided: TecnologiaInformacaoFuncionariosService */

    /***/
    function jMbs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoFuncionariosService", function () {
        return TecnologiaInformacaoFuncionariosService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var TecnologiaInformacaoFuncionariosService = /*#__PURE__*/function () {
        function TecnologiaInformacaoFuncionariosService(http) {
          _classCallCheck(this, TecnologiaInformacaoFuncionariosService);

          this.http = http;
          this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API;
        }

        _createClass(TecnologiaInformacaoFuncionariosService, [{
          key: "getFuncionario",
          value: function getFuncionario(params) {
            return this.http.get("".concat(this.API, "/tecnologia-informacao/funcionarios"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "getUsuarios",
          value: function getUsuarios(params) {
            return this.http.get("".concat(this.API, "/core/mtcorp/usuarios"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "getCentroCusto",
          value: function getCentroCusto(params) {
            return this.http.get("".concat(this.API, "/tecnologia-informacao/centro-custo"), {
              params: params,
              observe: 'response'
            });
          }
        }]);

        return TecnologiaInformacaoFuncionariosService;
      }();

      TecnologiaInformacaoFuncionariosService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      TecnologiaInformacaoFuncionariosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], TecnologiaInformacaoFuncionariosService);
      /***/
    },

    /***/
    "xCq4":
    /*!********************************************************************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/contratos/termo-responsabilidade/termo-responsabilidade.component.ts ***!
      \********************************************************************************************************************/

    /*! exports provided: TecnologiaInformacaoTermoResponsabilidadeComponent */

    /***/
    function xCq4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoTermoResponsabilidadeComponent", function () {
        return TecnologiaInformacaoTermoResponsabilidadeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_termo_responsabilidade_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./termo-responsabilidade.component.html */
      "JYNX");
      /* harmony import */


      var _termo_responsabilidade_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./termo-responsabilidade.component.scss */
      "7HvY");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var _item_services_item_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../item/services/item.service */
      "Z7gR");
      /* harmony import */


      var _services_funcionarios_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../services/funcionarios.service */
      "jMbs");
      /* harmony import */


      var _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../../../shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./../../../../shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _shared_services_core_pdf_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./../../../../shared/services/core/pdf.service */
      "GTII");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var ng_brazil__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ng-brazil */
      "hTrW");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");

      var TecnologiaInformacaoTermoResponsabilidadeComponent = /*#__PURE__*/function () {
        function TecnologiaInformacaoTermoResponsabilidadeComponent(pdfService, route, modalService, activatedRoute, funcionarioService, itensService, pnotifyService, routerService, formBuilder, dateService) {
          _classCallCheck(this, TecnologiaInformacaoTermoResponsabilidadeComponent);

          this.pdfService = pdfService;
          this.route = route;
          this.modalService = modalService;
          this.activatedRoute = activatedRoute;
          this.funcionarioService = funcionarioService;
          this.itensService = itensService;
          this.pnotifyService = pnotifyService;
          this.routerService = routerService;
          this.formBuilder = formBuilder;
          this.dateService = dateService;
          this.MASKS = ng_brazil__WEBPACK_IMPORTED_MODULE_12__["MASKS"];
          this.loaderNavbar = false;
          this.tipoVisao = 'formulario';
          this.breadCrumbTree = [];
          this.dataFicha = [];
          this.funcionario = [];
          this.formChanged = false;
          this.loaderFullScreen = true;
          this.itens = [];
          this.loadingItens = false;
        }

        _createClass(TecnologiaInformacaoTermoResponsabilidadeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.setBreadCrumb();
            this.setFormBuilder();
            this.onActivatedRoute();
          }
        }, {
          key: "onActivatedRoute",
          value: function onActivatedRoute() {
            var _params = this.activatedRoute.snapshot.params;
            if (!_params.hasOwnProperty('item')) return;
            this.getObjetos({
              ID_TECN_INFO_ITEM: _params['item']
            });
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
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            this.breadCrumbTree = [{
              descricao: 'Home',
              routerLink: '/tecnologia-informacao/home'
            }, {
              descricao: 'Termo de Responsabilidade'
            }];
          }
        }, {
          key: "getObjetos",
          value: function getObjetos(params) {
            var _this11 = this;

            this.loading = true;
            this.itensService.getItem(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () {})).subscribe(function (response) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this11, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var _this12 = this;

                var objetos, _params, promise;

                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        if (!(response.status !== 200)) {
                          _context2.next = 2;
                          break;
                        }

                        return _context2.abrupt("return");

                      case 2:
                        objetos = response['body']['data'];
                        _params = objetos[0];
                        this.getFuncionario({
                          NR_MATR: _params['NR_MATR']
                        });

                        promise = function promise() {
                          return objetos.forEach(function () {
                            return _this12.onAddObjeto();
                          });
                        };

                        _context2.next = 8;
                        return Promise.resolve(promise());

                      case 8:
                        this.form.get('objetos').patchValue(objetos);

                      case 9:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this);
              }));
            }, function (error) {
              _this11.pnotifyService.error('Não foi encontrado nenhum material');
            });
          }
        }, {
          key: "setObjetos",
          value: function setObjetos(objeto) {
            var fg = this.form.get('objetos');
            fg.controls[this.index].patchValue(objeto);
          }
        }, {
          key: "onAddObjeto",
          value: function onAddObjeto() {
            this.objetos.push(this.formBuilder.group({
              NM_PROD: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
              VL_ITEM: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
              CD_ITEM: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
              quantidadeObj: ['1', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]]
            }));
          }
        }, {
          key: "onDeleteObjeto",
          value: function onDeleteObjeto(index) {
            if (this.objetos.length > 1) {
              this.objetos.removeAt(index);
            } else {
              this.pnotifyService.notice('Informe ao menos um Objeto.');
            }
          }
        }, {
          key: "setFormBuilder",
          value: function setFormBuilder() {
            this.form = this.formBuilder.group({
              NR_MATR: [{
                value: [null],
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
              DS_EMPR_ENDE: [{
                value: [null],
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
              NM_EMPR_BAIR: [{
                value: [null],
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
              NM_EMPR_CIDA: [{
                value: [null],
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
              NM_EMPR_ESTA: [{
                value: [null],
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
              NM_EMPR: [{
                value: [null],
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
              CD_EMPR_EMPR: [{
                value: [null],
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
              NM_FUNC: [{
                value: [null],
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
              CD_USUA_RG: [{
                value: [null],
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
              CD_USUA_CPF: [{
                value: null,
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
              DS_USUA_ENDE: [{
                value: [null],
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
              CD_EMPR_CNPJ: [{
                value: null,
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
              NM_FUNC_BAIR: [{
                value: null,
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
              NM_FUNC_CIDA: [{
                value: null,
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
              NM_FUNC_ESTA: [{
                value: null,
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
              objetos: this.formBuilder.array([])
            });
            this.formPesquisaItem = this.formBuilder.group({
              buscarPor: ['CD_ITEM'],
              pesquisa: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
              ID_TECN_INFO_ITEM: [null],
              CD_ITEM: [null],
              NM_PROD: [null],
              DS_CONT: [null]
            });
          }
        }, {
          key: "getItens",
          value: function getItens() {
            var _this13 = this;

            var _obj = this.formPesquisaItem.value;
            var _params = {};
            if (_obj['pesquisa']) _params[_obj['buscarPor']] = _obj['pesquisa'];
            this.loadingItens = true;
            this.itensService.getItem(_params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () {
              _this13.loadingItens = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this13.itens = response.body['data'];
              } else {
                _this13.pnotifyService.notice('Nenhum registro encontrado!');

                _this13.itens = [];
              }
            }, function (error) {
              _this13.pnotifyService.error();
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this14 = this;

            var dataHoje = new Date();
            var dataHojeC = this.dateService.getFullDate(dataHoje, null, false);

            if (this.form.valid) {
              this.loaderNavbar = true;
              setTimeout(function () {
                var formData = _this14.form.getRawValue();

                _this14.tipoVisao = 'ficha';
                _this14.dataFicha = {
                  NR_MATR: formData['NR_MATR'],
                  DS_EMPR_ENDE: formData['DS_EMPR_ENDE'],
                  NM_EMPR_BAIR: formData['NM_EMPR_BAIR'],
                  NM_EMPR_CIDA: formData['NM_EMPR_CIDA'],
                  NM_EMPR_ESTA: formData['NM_EMPR_ESTA'],
                  NM_EMPR: formData['NM_EMPR'],
                  CD_EMPR_EMPR: formData['CD_EMPR_EMPR'],
                  NM_FUNC: formData['NM_FUNC'],
                  CD_USUA_RG: formData['CD_USUA_RG'],
                  CD_USUA_CPF: formData['CD_USUA_CPF'],
                  DS_USUA_ENDE: formData['DS_USUA_ENDE'],
                  CD_EMPR_CNPJ: formData['CD_EMPR_CNPJ'],
                  NM_FUNC_BAIR: formData['NM_FUNC_BAIR'],
                  NM_FUNC_CIDA: formData['NM_FUNC_CIDA'],
                  NM_FUNC_ESTA: formData['NM_FUNC_ESTA'],
                  objetos: formData['objetos'],
                  dataHoje: [dataHojeC]
                };
                _this14.formChanged = false;
                _this14.loaderNavbar = false;
              }, 1000);
            }
          }
        }, {
          key: "onDownload",
          value: function onDownload() {
            var _this15 = this;

            this.loaderNavbar = true;
            var _nome = this.form.get('NM_FUNC').value;
            this.pdfService.download('termo-responsabilidade', "TERMO - ".concat(_nome));
            setTimeout(function () {
              _this15.loaderNavbar = false;
            }, 500);
          }
        }, {
          key: "getFuncionario",
          value: function getFuncionario(params) {
            var _this16 = this;

            this.loading = true;
            this.funcionarioService.getFuncionario(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () {
              _this16.loading = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this16.funcionario = response.body['data'][0];

                _this16.form.patchValue(_this16.funcionario);
              }
            });
          }
        }, {
          key: "onCancel",
          value: function onCancel() {
            var _this17 = this;

            this.loaderNavbar = true;
            setTimeout(function () {
              _this17.tipoVisao = 'formulario';
              _this17.loaderNavbar = false;
            }, 1000);
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
          key: "onFieldRequired",
          value: function onFieldRequired(field) {
            var required = false;
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]();

            if (this.form.controls[field].validator) {
              var validationResult = this.form.controls[field].validator(formControl);
              required = validationResult !== null && validationResult.required === true;
            }

            if (required) {
              return 'is-required';
            }
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
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]();
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
          key: "objetos",
          get: function get() {
            return this.form.get('objetos');
          }
        }]);

        return TecnologiaInformacaoTermoResponsabilidadeComponent;
      }();

      TecnologiaInformacaoTermoResponsabilidadeComponent.ctorParameters = function () {
        return [{
          type: _shared_services_core_pdf_service__WEBPACK_IMPORTED_MODULE_9__["PdfService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"]
        }, {
          type: _services_funcionarios_service__WEBPACK_IMPORTED_MODULE_5__["TecnologiaInformacaoFuncionariosService"]
        }, {
          type: _item_services_item_service__WEBPACK_IMPORTED_MODULE_4__["TecnologiaInformacaoCadastroItemService"]
        }, {
          type: _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_14__["RouterService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]
        }, {
          type: _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_6__["DateService"]
        }];
      };

      TecnologiaInformacaoTermoResponsabilidadeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"])({
        selector: 'termo-responsabilidade',
        template: _raw_loader_termo_responsabilidade_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_termo_responsabilidade_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_services_core_pdf_service__WEBPACK_IMPORTED_MODULE_9__["PdfService"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"], _services_funcionarios_service__WEBPACK_IMPORTED_MODULE_5__["TecnologiaInformacaoFuncionariosService"], _item_services_item_service__WEBPACK_IMPORTED_MODULE_4__["TecnologiaInformacaoCadastroItemService"], _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_14__["RouterService"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"], _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_6__["DateService"]])], TecnologiaInformacaoTermoResponsabilidadeComponent);
      /***/
    },

    /***/
    "xYRW":
    /*!************************************************************************!*\
      !*** ./src/app/modules/comercial/kanban/contratos/contratos.module.ts ***!
      \************************************************************************/

    /*! exports provided: ComercialKanbanContratosModule */

    /***/
    function xYRW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialKanbanContratosModule", function () {
        return ComercialKanbanContratosModule;
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


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _templates_templates_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./../../templates/templates.module */
      "9lCC");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var _cadastros_materiais_templates_templates_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./../../cadastros/materiais/templates/templates.module */
      "11Wi");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./lista/lista.component */
      "y06A");
      /* harmony import */


      var _contratos_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./contratos.service */
      "E15D");
      /* harmony import */


      var _contratos_routing_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./contratos-routing.module */
      "5Sp0"); // ngx-bootstrap
      // ng-select
      // ng2-currency-mask
      // PNotify
      // Modules
      // Components
      // Services


      var ComercialKanbanContratosModule = function ComercialKanbanContratosModule() {
        _classCallCheck(this, ComercialKanbanContratosModule);
      };

      ComercialKanbanContratosModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_lista_lista_component__WEBPACK_IMPORTED_MODULE_15__["ComercialKanbanContratosListaComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"].forRoot(), ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"], ng2_currency_mask__WEBPACK_IMPORTED_MODULE_8__["CurrencyMaskModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_12__["TemplatesModule"], _templates_templates_module__WEBPACK_IMPORTED_MODULE_10__["ComercialTemplatesModule"], _cadastros_materiais_templates_templates_module__WEBPACK_IMPORTED_MODULE_13__["ComercialCadastrosMateriaisTemplatesModule"], _contratos_routing_module__WEBPACK_IMPORTED_MODULE_17__["ComercialKanbanContratosRoutingModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsDatepickerModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_14__["ModalModule"].forRoot()],
        providers: [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"], _contratos_service__WEBPACK_IMPORTED_MODULE_16__["ComercialKanbanContratosService"]]
      })], ComercialKanbanContratosModule);
      /***/
    },

    /***/
    "y06A":
    /*!*****************************************************************************!*\
      !*** ./src/app/modules/comercial/kanban/contratos/lista/lista.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: ComercialKanbanContratosListaComponent */

    /***/
    function y06A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialKanbanContratosListaComponent", function () {
        return ComercialKanbanContratosListaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lista.component.html */
      "7v+t");
      /* harmony import */


      var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lista.component.scss */
      "MsxC");
      /* harmony import */


      var _cadastros_materiais_grupos_grupos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../cadastros/materiais/grupos/grupos.service */
      "4YhS");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "ienR");
      /* harmony import */


      var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-bootstrap/chronos */
      "xj/R");
      /* harmony import */


      var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-bootstrap/locale */
      "0b5p");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _gestao_associacoes_coordenadores_escritorios_coordenadores_escritorios_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./../../../gestao/associacoes/coordenadores-escritorios/coordenadores-escritorios.service */
      "fMkk");
      /* harmony import */


      var _services_vendedores_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./../../../services/vendedores.service */
      "4xRd");
      /* harmony import */


      var _shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./../../../../../shared/services/core/auth.service */
      "yxCR");
      /* harmony import */


      var _comercial_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./../../../comercial.service */
      "VgqD");
      /* harmony import */


      var _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./../../../../../shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var _shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./../../../../../shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var _contratos_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./../contratos.service */
      "E15D"); // ngx-bootstrap


      Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_10__["defineLocale"])('pt-br', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_11__["ptBrLocale"]); // Services

      var ComercialKanbanContratosListaComponent = /*#__PURE__*/function () {
        function ComercialKanbanContratosListaComponent(router, location, formBuilder, pnotifyService, activatedRoute, atividadesService, kanbanContratosService, dateService, localeService, comercialService, authService, comercialVendedoresService, gestaoAssociacoesService, materiaisGrupoService) {
          _classCallCheck(this, ComercialKanbanContratosListaComponent);

          this.router = router;
          this.location = location;
          this.formBuilder = formBuilder;
          this.pnotifyService = pnotifyService;
          this.activatedRoute = activatedRoute;
          this.atividadesService = atividadesService;
          this.kanbanContratosService = kanbanContratosService;
          this.dateService = dateService;
          this.localeService = localeService;
          this.comercialService = comercialService;
          this.authService = authService;
          this.comercialVendedoresService = comercialVendedoresService;
          this.gestaoAssociacoesService = gestaoAssociacoesService;
          this.materiaisGrupoService = materiaisGrupoService;
          this.user = this.authService.getCurrentUser();
          this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
          this.idUsuario = this.currentUser['info']['id'];
          this.loaderNavbar = false;
          this.loaderFullScreen = true;
          this.profile = {};
          this.breadCrumbTree = [];
          this.showDashboard = false;
          this.showFilter = false;
          this.showPermissionDenied = false;
          this.coordenadores = [];
          this.vendedores = [];
          this.unidades = [];
          this.linhas = [];
          this.contratos = [];
          this.faturados = [];
          this.pendentes = [];
          this.itemsPerPage = 50;
          this.currentPage = 1;
          this.maxSize = 10;
          this.clientesPagination = [];
          this.detalhes = false;
          this.red = false;
          this.yellow = false;
          this.green = false;
          this.dadosLoaded = false;
          this.dadosEmpty = false;
          this.dadosFiltrados = [];
          this.pnotifyService.getPNotify();
          this.localeService.use('pt-br');
        }

        _createClass(ComercialKanbanContratosListaComponent, [{
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            var _this18 = this;

            this.activatedRoute.params.subscribe(function (params) {
              _this18.breadCrumbTree = [{
                descricao: 'Home',
                routerLink: '/comercial/home'
              }, {
                descricao: 'Kanban',
                routerLink: "/comercial/kanban/".concat(params.idSubModulo)
              }, {
                descricao: 'Kanban Contratos'
              }];
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registrarAcesso();
            this.setFormFilter();
            this.getPerfil();
            this.getVendedores();
            this.getGestores();
            this.setBreadCrumb();
            this.getFilterValues();
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "setFormFilter",
          value: function setFormFilter() {
            this.form = this.formBuilder.group({
              dataInicial: [this.dateService.getFirstDayMonth()],
              dataFinal: [this.dateService.getToday()],
              codSituacao: '1',
              codVendedor: [null],
              codGerencia: [null],
              codLinha: [null],
              orderBy: [null],
              orderType: [null],
              pagina: [null]
            });
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
            var _this19 = this;

            this.loaderNavbar = false;
            this.dadosFiltrados = [];
            this.dadosLoaded = false;
            this.dadosEmpty = false;
            this.kanbanContratosService.getCards(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
              _this19.loaderNavbar = false;
              _this19.dadosLoaded = true;
            })).subscribe({
              next: function next(response) {
                if (response[0].hasOwnProperty('success') && response[0].success === true) {
                  _this19.contratos = response[0].data;
                  _this19.dadosEmpty = true;
                }

                if (response[0].hasOwnProperty('success') && response[0].success === true) {
                  _this19.faturados = response[1].data;
                  _this19.dadosEmpty = true;
                }

                if (response[0].hasOwnProperty('success') && response[0].success === true) {
                  _this19.pendentes = response[2].data;
                  _this19.dadosEmpty = true;
                } else if (response.hasOwnProperty('success') && response.success === false) {
                  _this19.dadosEmpty = true;
                } else {
                  _this19.pnotifyService.error();

                  _this19.dadosEmpty = true;
                }
              },
              error: function error(_error) {
                _this19.dadosEmpty = true;

                if (_error.error.hasOwnProperty('mensagem')) {
                  _this19.pnotifyService.error(_error.error.mensagem);
                } else {
                  _this19.pnotifyService.error();
                }
              }
            });
          }
        }, {
          key: "getFilterValues",
          value: function getFilterValues() {
            var _this20 = this;

            this.materiaisGrupoService.getFilterValues().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
              _this20.loaderFullScreen = false;
            })).subscribe(function (response) {
              if (response[0].responseCode === 200) {
                _this20.linhas = response[0].result;
              } else {
                _this20.pnotifyService.error();

                _this20.location.back();
              }
            });
          }
        }, {
          key: "setRouterParams",
          value: function setRouterParams(params) {
            if (params === null) {
              this.router.navigate([], {
                relativeTo: this.activatedRoute
              });
            } else {
              this.router.navigate([], {
                relativeTo: this.activatedRoute,
                queryParams: {
                  q: btoa(JSON.stringify(params))
                },
                queryParamsHandling: 'merge'
              });
            }

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

            _params['orderBy'] = this.orderBy;
            _params['orderType'] = this.orderType;
            return _params;
          } // Get perfil

        }, {
          key: "getPerfil",
          value: function getPerfil() {
            var _this21 = this;

            this.comercialService.getPerfil().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
              _this21.loaderFullScreen = false;
            })).subscribe({
              next: function next(response) {
                if (response.responseCode === 200) {
                  _this21.profile = response.result;

                  if (_this21.profile.coordenador === true || _this21.profile.gestor === true || _this21.profile.vendedor === true && _this21.profile.coordenador === false && _this21.profile.gestor === false && _this21.profile.hasVinculoOperadores === true) {
                    _this21.checkRouterParams();
                  } else if (_this21.profile.vendedor === true && _this21.profile.coordenador === false && _this21.profile.gestor === false && _this21.profile.hasVinculoOperadores === false // this.profile.hasVinculoOperadores === true
                  ) {
                      _this21.setRouterParams([]);

                      _this21.profileDisabled();

                      _this21.idVendedor = _this21.user.info.idVendedor;
                      _this21.idEscritorio = _this21.user.info.idEscritorio;

                      _this21.form.get('codVendedor').setValue(parseInt(_this21.user.info.idVendedor));

                      _this21.showDashboard = true;
                    } else {
                    _this21.showPermissionDenied = true;
                  }
                } else {
                  _this21.showPermissionDenied = true;
                }
              },
              error: function error(_error2) {
                _this21.showPermissionDenied = true;
              }
            });
          }
        }, {
          key: "profileDisabled",
          value: function profileDisabled() {
            this.form.get('codVendedor').disable();
            this.form.get('codGerencia').disable();
            this.form.get('codUnidade').disable();
          }
        }, {
          key: "checkRouterParams",
          value: function checkRouterParams() {
            var _this22 = this;

            var formValue = {
              idEscritorio: null,
              idVendedor: null,
              nomeEscritorio: null,
              nomeVendedor: null
            };
            this.activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (queryParams) {
              if (Object.keys(queryParams).length > 0) {
                var params = atob(queryParams['q']);
                params = JSON.parse(params);
                _this22.idEscritorio = parseInt(params.idEscritorio);
                _this22.idVendedor = parseInt(params.idVendedor);
                _this22.nomeEscritorio = params.nomeEscritorio;
                _this22.nomeVendedor = params.nomeVendedor;
                _this22.showFilter = false;
                _this22.showDashboard = true;
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
              } else {
                _this22.showFilter = true;
                _this22.showDashboard = false;
              }
            });
            this.activatedRouteSubscription.unsubscribe();
          }
        }, {
          key: "getGestores",
          value: function getGestores() {
            var _this23 = this;

            this.gestaoAssociacoesService.getListaCoordenadoresEscritorios().subscribe({
              next: function next(response) {
                if (response['responseCode'] === 200) {
                  _this23.coordenadores = response['result']['coordenadores'];
                  _this23.unidades = response['result']['escritorios']; // this.setFormBuilder();
                } else {
                  _this23.pnotifyService.error();

                  _this23.location.back();
                }
              },
              error: function error(_error3) {
                _this23.pnotifyService.error();

                _this23.location.back();
              }
            });
          }
        }, {
          key: "getVendedores",
          value: function getVendedores() {
            var _this24 = this;

            this.comercialVendedoresService.getVendedores().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
              _this24.loaderFullScreen = false;
            })).subscribe({
              next: function next(response) {
                _this24.vendedores = response['result'];
              },
              error: function error(_error4) {
                _this24.pnotifyService.error();

                _this24.location.back();
              }
            });
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
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]();

            if (this.form.controls[field].validator) {
              var validationResult = this.form.controls[field].validator(formControl);
              required = validationResult !== null && validationResult.required === true;
            }

            if (required) {
              return 'is-required';
            }
          }
        }, {
          key: "handleFormFieldsError",
          value: function handleFormFieldsError() {
            this.pnotifyService.error();
            this.location.back();
          }
        }, {
          key: "onRefresh",
          value: function onRefresh() {
            // location.reload()
            this.onFilter();
          }
        }]);

        return ComercialKanbanContratosListaComponent;
      }();

      ComercialKanbanContratosListaComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__["PNotifyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_18__["AtividadesService"]
        }, {
          type: _contratos_service__WEBPACK_IMPORTED_MODULE_19__["ComercialKanbanContratosService"]
        }, {
          type: _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_17__["DateService"]
        }, {
          type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__["BsLocaleService"]
        }, {
          type: _comercial_service__WEBPACK_IMPORTED_MODULE_16__["ComercialService"]
        }, {
          type: _shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"]
        }, {
          type: _services_vendedores_service__WEBPACK_IMPORTED_MODULE_14__["ComercialVendedoresService"]
        }, {
          type: _gestao_associacoes_coordenadores_escritorios_coordenadores_escritorios_service__WEBPACK_IMPORTED_MODULE_13__["ComercialGestaoAssociacoesCoordenadoresEscritoriosService"]
        }, {
          type: _cadastros_materiais_grupos_grupos_service__WEBPACK_IMPORTED_MODULE_3__["ComercialCadastrosMateriaisGrupoService"]
        }];
      };

      ComercialKanbanContratosListaComponent.propDecorators = {
        scrollToFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['scrollToFilter', {}]
        }]
      };
      ComercialKanbanContratosListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'comercial-kanban-contratos-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__["PNotifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_18__["AtividadesService"], _contratos_service__WEBPACK_IMPORTED_MODULE_19__["ComercialKanbanContratosService"], _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_17__["DateService"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__["BsLocaleService"], _comercial_service__WEBPACK_IMPORTED_MODULE_16__["ComercialService"], _shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"], _services_vendedores_service__WEBPACK_IMPORTED_MODULE_14__["ComercialVendedoresService"], _gestao_associacoes_coordenadores_escritorios_coordenadores_escritorios_service__WEBPACK_IMPORTED_MODULE_13__["ComercialGestaoAssociacoesCoordenadoresEscritoriosService"], _cadastros_materiais_grupos_grupos_service__WEBPACK_IMPORTED_MODULE_3__["ComercialCadastrosMateriaisGrupoService"]])], ComercialKanbanContratosListaComponent);
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
//# sourceMappingURL=contratos-contratos-module-es5.js.map