(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["associacao-etapas-associacao-etapas-module"], {
    /***/
    "1Ehf":
    /*!*************************************************************************************!*\
      !*** ./src/app/modules/logistica/yms/associacao-etapas/associacao-etapas.module.ts ***!
      \*************************************************************************************/

    /*! exports provided: LogisticaYmsAssociacaoEtapasModule */

    /***/
    function Ehf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaYmsAssociacaoEtapasModule", function () {
        return LogisticaYmsAssociacaoEtapasModule;
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
      "j3ka");
      /* harmony import */


      var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./cadastro/cadastro.component */
      "bCd4");
      /* harmony import */


      var _associacao_etapas_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./associacao-etapas-routing.module */
      "QmfS");

      var LogisticaYmsAssociacaoEtapasModule = function LogisticaYmsAssociacaoEtapasModule() {
        _classCallCheck(this, LogisticaYmsAssociacaoEtapasModule);
      };

      LogisticaYmsAssociacaoEtapasModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_lista_lista_component__WEBPACK_IMPORTED_MODULE_12__["LogisticaYmsAssociacaoEtapasListaComponent"], _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_13__["LogisticaYmsAssociacaoEtapasCadastroComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TabsModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TimepickerModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(), src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_8__["NotFoundModule"], src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_9__["ModuleWrapperModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_11__["TemplatesModule"], _associacao_etapas_routing_module__WEBPACK_IMPORTED_MODULE_14__["LogisticaYmsAssociacaoEtapasRoutingModule"]]
      })], LogisticaYmsAssociacaoEtapasModule);
      /***/
    },

    /***/
    "37vV":
    /*!**************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/yms/associacao-etapas/lista/lista.component.html ***!
      \**************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function vV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loadingNavBar\"></loader-spinner-navbar>\r\n<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n<app-header appTitle=\"Etapas por Checklist\">\r\n  <button\r\n  type=\"button\"\r\n  (click)=\"onExport()\"\r\n  [disabled]=\"loadingNavBar || noResult\">\r\n  Exportar\r\n</button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onReset()\">\r\n    Limpar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    [routerLink]=\"['../novo']\">\r\n    Adicionar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onFilter()\">\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loading\">\r\n  <div class=\"row\" #scrollToFilter>\r\n    <div class=\"col\">\r\n      <advanced-filter>\r\n        <form [formGroup]=\"form\" autocomplete=\"off\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-5 pl-0\">\r\n              <label for=\"filterChecklist\">Checklist</label>\r\n              <ng-select\r\n                [searchable]=\"true\"\r\n                [clearable]=\"true\"\r\n                [items]=\"filterChecklist\"\r\n                [virtualScroll]=\"true\"\r\n                placeholder=\"Selecione...\"\r\n                [loading]=\"loadingChecklist\"\r\n                labelForId=\"ID_LOGI_YMS_CHEC\"\r\n                bindLabel=\"NM_CHEC\"\r\n                bindValue=\"ID_LOGI_YMS_CHEC\"\r\n                id=\"ID_LOGI_YMS_CHEC\"\r\n                formControlName=\"ID_LOGI_YMS_CHEC\">\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"form-group col-md-2 pl-0\">\r\n              <label for=\"IN_STAT\">Situação</label>\r\n              <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"false\"\r\n              [items]=\"tipos\"\r\n              [virtualScroll]=\"true\"\r\n              labelForId=\"tipo\"\r\n              bindLabel=\"nome\"\r\n              bindValue=\"cod\"\r\n              id=\"tipo\"\r\n              (change)=\"onFilter()\"\r\n              formControlName=\"IN_STAT\"\r\n              (keydown.enter)=\"onFilter()\"\r\n              placeholder=\"Selecione...\"\r\n            >\r\n            </ng-select>\r\n            </div>\r\n            <div class=\"form-group col-md-1 p-0\">\r\n              <label>Registros</label>\r\n              <select \r\n                class=\"form-control custom-select\"\r\n                formControlName=\"TT_REGI_PAGI\"\r\n                (keydown.enter)=\"onFilter()\"\r\n                (change)=\"setPageRegistros($event.target.value)\"  \r\n              >\r\n                <option value=\"10\">10</option>\r\n                <option value=\"25\">25</option>\r\n                <option value=\"50\">50</option>\r\n                <option value=\"100\">100</option>\r\n                <option value=\"250\">250</option>\r\n                <option value=\"500\">500</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </advanced-filter>\r\n    </div>\r\n  </div>\r\n  <div class=\"d-flex\" [hidden] = \"loading || noResult\">\r\n    <div class=\"p-0\" [ngClass]=\"{'col': !showDetailPanel, 'col-6': showDetailPanel}\">\r\n      <div class=\"w-100\">\r\n        <custom-table  [config]=\"tableConfig\" class=\"text-center\" *ngIf=\"!noResult\">\r\n          <ng-template #thead let-thead>\r\n            <tr>\r\n              <th scope=\"col\" >ID</th>\r\n              <th scope=\"col\" >Checklist</th>\r\n              <th scope=\"col\" style=\"width:30px\"[hidden]=\"showDetailPanel\"></th>\r\n              <th scope=\"col\" style=\"width:30px\"></th>\r\n            </tr>\r\n          </ng-template>\r\n          <ng-template #tbody let-tbody>\r\n            <tr *ngFor=\"let check of checklist\"  [class.table-active]=\"check?.ID_LOGI_YMS_CHEC == associacaoSelecionada?.ID_LOGI_YMS_CHEC && showDetailPanel\">\r\n              <td>\r\n              {{check.ID_LOGI_YMS_CHEC }}\r\n              </td>\r\n              <td >{{ check.NM_CHEC | uppercase}}</td>\r\n              <td class=\"align-middle\"  [hidden]=\"showDetailPanel\">\r\n                <span tooltip=\"Editar\" placement=\"left\" container=\"body\">\r\n                  <button type=\"button\" class=\"btn-icon-sm\" [routerLink]=\"['./../', check.ID_LOGI_YMS_CHEC]\">\r\n                    <i class=\"fas fa-edit\"></i>\r\n                  </button>\r\n                </span>\r\n              </td>\r\n              <td class=\"align-middle\">\r\n                <span class=\"mr-3\"  tooltip=\"Detalhes\" placement=\"left\" container=\"body\" >\r\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onDetails(check)\">\r\n                    <i class=\"fas fa-search\"></i>                  \r\n                  </button>\r\n                </span>\r\n              </td>\r\n            </tr>\r\n          </ng-template>\r\n        </custom-table><br>\r\n      </div>\r\n      <div *ngIf=\"totalItems > itemsPerPage\">\r\n        Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\r\n        <pagination\r\n          [maxSize]=\"10\"\r\n          [totalItems]=\"totalItems\"\r\n          (pageChanged)=\"onPageChanged($event)\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPage\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\">\r\n        </pagination>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-6 pr-0\" [hidden]=\"!showDetailPanel\">\r\n      <detail-panel>\r\n        <tabset>\r\n          <tab heading=\"Dados da Area\">\r\n            <div class=\"border-right border-left border-bottom px-3 pt-3\">\r\n              <div>\r\n                <div class=\"form-row mt-3\">\r\n                  <div class=\"form-group col-lg-5\">\r\n                    <label>ID do Checklist</label>\r\n                    <div>{{ associacaoSelecionada?.ID_LOGI_YMS_CHEC }}</div>\r\n                  </div>\r\n                  <div class=\"form-group col-lg-7\">\r\n                    <label>Descrição do Checklist</label>\r\n                    <div>{{ associacaoSelecionada?.NM_CHEC | uppercase}}</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </tab>\r\n          <tab  heading=\"Etapas Associados\">\r\n            <div class=\"border-right border-left border-bottom px-3 pt-3\">\r\n              <div class=\"mb-3\">\r\n                <custom-table  [config]=\"tableConfigAssocEtapas\" *ngIf=\"!loadingAssociacaoEtapas && !noAssocEtapas\">\r\n                  <ng-template #thead let-thead>\r\n                    <tr>\r\n                      <th scope=\"col\"  width=\"20%\">ID ERP</th>\r\n                      <th scope=\"col\"  width=\"80%\">Etapa</th>\r\n                    </tr>\r\n                  </ng-template>\r\n                  <ng-template #tbody let-tbody>\r\n                    <tr *ngFor=\"let etapa of associacaoEtapas\">\r\n                      <td  width=\"20%\">{{ etapa?.ID_MATE }}</td>\r\n                      <td  width=\"80%\">{{ etapa?.NM_MATE_ASSO | uppercase }}</td>\r\n                    </tr>\r\n                  </ng-template>\r\n                </custom-table>\r\n                <message\r\n                  *ngIf=\"loadingAssociacaoEtapas\"\r\n                  icon=\"fas fa-cog fa-spin\"\r\n                  text=\"Estamos pesquisando os etapas para você...\">\r\n                </message>\r\n                <div [hidden]=\"loadingAssociacaoEtapas || !noAssocEtapas\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 80%\">\r\n                  <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </tab>       \r\n        </tabset> \r\n      </detail-panel>\r\n    </div>\r\n  </div>\r\n  <div [hidden]=\"loading || !noResult\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 80%\">\r\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n  </div>\r\n</app-body>";
      /***/
    },

    /***/
    "3l7r":
    /*!***********************************************************************************************!*\
      !*** ./src/app/modules/logistica/yms/associacao-etapas/services/associacao-etapas.service.ts ***!
      \***********************************************************************************************/

    /*! exports provided: LogisticaYmsAssociacaoEtapasService */

    /***/
    function l7r(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaYmsAssociacaoEtapasService", function () {
        return LogisticaYmsAssociacaoEtapasService;
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


      var LogisticaYmsAssociacaoEtapasService = /*#__PURE__*/function () {
        function LogisticaYmsAssociacaoEtapasService(http) {
          _classCallCheck(this, LogisticaYmsAssociacaoEtapasService);

          this.http = http;
          this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API;
        }

        _createClass(LogisticaYmsAssociacaoEtapasService, [{
          key: "getAssociacaoEtapas",
          value: function getAssociacaoEtapas(params) {
            return this.http.get("".concat(this.API, "/logistica/yms/setores/etapas"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "getEtapas",
          value: function getEtapas(params) {
            return this.http.get("".concat(this.API, "/logistica/yms/etapas"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "deleteAssociacoes",
          value: function deleteAssociacoes(params) {
            return this.http["delete"]("".concat(this.API, "/logistica/yms/setores/etapas"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "postAssociacaoEtapas",
          value: function postAssociacaoEtapas(associacao) {
            return this.http.post("".concat(this.API, "/logistica/yms/setores/etapas"), associacao, {
              observe: 'response'
            });
          }
        }]);

        return LogisticaYmsAssociacaoEtapasService;
      }();

      LogisticaYmsAssociacaoEtapasService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      LogisticaYmsAssociacaoEtapasService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], LogisticaYmsAssociacaoEtapasService);
      /***/
    },

    /***/
    "4WXJ":
    /*!******************************************************************************************!*\
      !*** ./src/app/modules/logistica/yms/associacao-etapas/cadastro/cadastro.component.scss ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function WXJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "button[disabled] {\n  cursor: no-drop;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EveW1zL2Fzc29jaWFjYW8tZXRhcGFzL2NhZGFzdHJvL2NhZGFzdHJvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EveW1zL2Fzc29jaWFjYW8tZXRhcGFzL2NhZGFzdHJvL2NhZGFzdHJvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uW2Rpc2FibGVkXXtcclxuICBjdXJzb3I6IG5vLWRyb3A7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "Q0pW":
    /*!********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/yms/associacao-etapas/cadastro/cadastro.component.html ***!
      \********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Q0pW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\r\n<app-header appTitle=\"Etapas por Checklist\">\r\n  <button \r\n    [disabled]=\"loadingNavBar === true\"\r\n    [routerLink]=\"['../']\"\r\n    >\r\n    Voltar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6\">\r\n      <form [formGroup]=\"form\">\r\n        <div class=\"mtc-title\">Dados da Checklist</div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col pl-0\">\r\n            <label for=\"checklist\">Checklist</label>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"true\"\r\n              [items]=\"checklist\"\r\n              [virtualScroll]=\"true\"\r\n              placeholder=\"Selecione...\"\r\n              [loading]=\"loadingChecklist\"\r\n              labelForId=\"ID_LOGI_YMS_CHEC\"\r\n              bindLabel=\"NM_CHEC\"\r\n              bindValue=\"ID_LOGI_YMS_CHEC\"\r\n              id=\"ID_LOGI_YMS_CHEC\"\r\n              formControlName=\"ID_LOGI_YMS_CHEC\" \r\n              [ngClass]=\"onFieldError('ID_LOGI_YMS_CHEC') + ' ' + onFieldRequired('ID_LOGI_YMS_CHEC')\"\r\n              >\r\n            </ng-select>\r\n            <invalid-form-control [show]=\"onFieldInvalid('ID_LOGI_YMS_CHEC')\" message=\"Checklist é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n      </form>\r\n      <div class=\"row mb-4\">\r\n        <div class=\"col mb-3\">\r\n          <hr>\r\n        </div>\r\n      </div>\r\n      <message\r\n        *ngIf=\"loadingConsulta\"\r\n        icon=\"fas fa-cog fa-spin\"\r\n        text=\"Estamos buscando informações da Checklist selecionada...\">\r\n      </message>\r\n      <div [hidden]=\"loadingConsulta\">\r\n        <div class=\"row mb-2 mt-4\">\r\n          <div class=\"col mt-auto\">\r\n            <div class=\"mtc-title mb-0\">Etapas associadas a Checklist</div>\r\n          </div>\r\n          <div class=\"col\">\r\n            <div class=\"d-flex justify-content-end\">\r\n              <button\r\n                type=\"button\"\r\n                class=\"btn btn-sm btn-outline-danger\"\r\n                (click)=\"onLimparAssociacoes()\">\r\n                <i class=\"fas fa-trash\"></i>\r\n                <span>Limpar</span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\" *ngIf=\"showEtapas && etapasAssociadas.length > 0\">\r\n          <div class=\"col\">\r\n            <custom-table [config]=\"tableConfigAssocEtapas\">\r\n              <ng-template #thead let-thead>\r\n                <tr>\r\n                  <th scope=\"col\" width=\"20%\">ID</th>\r\n                  <th scope=\"col\" width=\"75%\">Etapa</th>\r\n                  <th scope=\"col\" width=\"5%\"></th>\r\n                </tr>\r\n              </ng-template>\r\n              <ng-template #tbody let-tbody>\r\n                <tr *ngFor=\"let etapa of etapasAssociadas\" >\r\n                  <td width=\"20%\">{{ etapa.ID_LOGI_YMS_ETAP }}</td>\r\n                  <td width=\"75%\">\r\n                   {{ etapa.NM_ETAP | uppercase }}\r\n                  </td>\r\n                  <td class=\"text-center\" width=\"5%\">\r\n                    <btn-icon\r\n                      icon=\"fas fa-trash\"\r\n                      size=\"small\"\r\n                      (click)=\"onDeleteEtapa(etapa)\">\r\n                    </btn-icon>\r\n                  </td>\r\n                </tr>\r\n              </ng-template>\r\n            </custom-table>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\" *ngIf=\"showEtapas && etapasAssociadas.length === 0\">\r\n          <div class=\"col\">\r\n            <message\r\n              icon=\"fas fa-exchange-alt\"\r\n              text=\"Nenhuma associação encontrada\">\r\n            </message>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-6 border-left\">\r\n      <div class=\"row mb-2\">\r\n        <div class=\"col mt-auto\">\r\n          <div class=\"mtc-title mb-0\">Pesquisa de etapas</div>\r\n        </div>\r\n        <div class=\"col\">\r\n          <div class=\"d-flex justify-content-end\">\r\n            <button\r\n              type=\"button\"\r\n              class=\"btn btn-sm btn-outline-secondary\"\r\n              (click)=\"getEtapas()\"\r\n              [disabled]=\"searching === true || formEtapas.valid == false\">\r\n              <i class=\"fas fa-search\"></i>\r\n              <span \r\n              [tooltip]=\"formEtapas.valid == false ? 'Digite um termo de pesquisa':''\"\r\n              container=\"body\"\r\n              placement =\"left\">Pesquisar</span>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <advanced-filter>\r\n        <form [formGroup]=\"formEtapas\" autocomplete=\"off\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-3\">\r\n              <label for=\"cdItem\">BUSCAR POR</label>\r\n              <select\r\n                class=\"form-control custom-select\"\r\n                formControlName=\"buscarPor\"\r\n              >\r\n                <option value=\"ID_LOGI_YMS_ETAP\">ID</option>\r\n                <option value=\"NM_ETAP\" selected> Nome Etapa</option>\r\n              </select>\r\n            </div>\r\n\r\n            <div class=\"form-group col-9\">\r\n              <label>TERMO DE PESQUISA</label>\r\n              <div class=\"input-group\">\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  formControlName=\"pesquisa\"\r\n                  (keydown.enter)=\"getEtapas()\"\r\n                >\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </advanced-filter>\r\n      <div *ngIf=\"etapasLista.length > 0\">\r\n        <div class=\"row mb-2\">\r\n          <div class=\"col mt-auto\">\r\n            <div class=\"mtc-title mb-0\">Seleção de etapas</div>\r\n          </div>\r\n          <div class=\"col\">\r\n            <div class=\"d-flex justify-content-end\">\r\n              <button\r\n                type=\"button\"\r\n                class=\"btn btn-sm btn-outline-primary\"\r\n                (click)=\"onAssociarEtapas()\"\r\n                [disabled]=\"searching === true || form.valid === false\">\r\n                <i class=\"fas fa-exchange-alt\"></i>\r\n                <span\r\n                  [tooltip]=\"form.valid == false ? 'Selecione uma Checklist':''\"\r\n                  container=\"body\"\r\n                  placement =\"left\">Associar\r\n                </span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n            <custom-table [config]=\"tableConfigEtapas\">\r\n              <ng-template #thead let-thead>\r\n                <tr>\r\n                  <th\r\n                    scope=\"col\"\r\n                    class=\"text-center\"\r\n                    width=\"5%\">\r\n                    <btn-icon\r\n                      [icon]=\"toggleAll ? 'fas fa-check-square' : 'far fa-square'\"\r\n                      size=\"small\"\r\n                      (click)=\"onToggleAll()\">\r\n                    </btn-icon>\r\n                  </th>\r\n                  <th scope=\"col\" width=\"85%\">Etapas</th>\r\n                  <th scope=\"col\" width=\"10%\"></th>\r\n                </tr>\r\n              </ng-template>\r\n              <ng-template #tbody let-tbody>\r\n                <tr *ngFor=\"let etapa of etapasLista; let i = index;\">\r\n                  <td class=\"text-center\" width=\"5%\">\r\n                    <btn-icon\r\n                      [icon]=\"etapa.checked == 1 ? 'fas fa-check-square' : 'far fa-square'\"\r\n                      size=\"small\"\r\n                      (click)=\"onCheckEtapa(i, etapa)\">\r\n                    </btn-icon>\r\n                  </td>\r\n                  <td\r\n                    class=\"hover\"\r\n                    width=\"85%\"\r\n                    (click)=\"onCheckEtapa(i, etapa)\">\r\n                    {{ etapa.ID_LOGI_YMS_ETAP }} - {{ etapa.NM_MATE | uppercase }}\r\n                  </td>\r\n                  <td\r\n                  width=\"10%\"\r\n                  class=\"hover\">\r\n                    <div>\r\n                      <i\r\n                      class=\"far fa-question-circle\"\r\n                      [tooltip]=\"tooltipDetalhesEtapa\"\r\n                      placement=\"left\"\r\n                      container=\"body\"\r\n                      >\r\n                      </i>\r\n\r\n                      <ng-template #tooltipDetalhesEtapa>\r\n                        <table>\r\n                          <tbody>\r\n                            <tr>\r\n                              <th>Classe: </th>\r\n                              <td class=\"text-left\">{{etapa.NM_CLAS || 'NENHUMA INFORMAÇÃO'}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                              <th>Linha: </th>\r\n                              <td class=\"text-left\">{{etapa.NM_LINH || 'NENHUMA INFORMAÇÃO'}}</td>\r\n                            </tr>\r\n                            <tr *ngIf = \"etapa.IN_STAT == 1\">\r\n                              <th><i class=\"far fa-check-circle text-success\"></i></th>\r\n                              <td class=\"text-left\">Etapa {{etapa.DS_STAT}}</td>\r\n                            </tr>\r\n                            <tr *ngIf = \"etapa.IN_STAT != 1\">\r\n                              <th><i class=\"fas fa-ban text-danger \"></i></th>\r\n                              <td class=\"text-left\">Etapa {{etapa.DS_STAT}}</td>\r\n                            </tr>\r\n                          </tbody>\r\n                        </table>\r\n                      </ng-template>\r\n\r\n                    </div>\r\n                  </td>\r\n                </tr>\r\n              </ng-template>\r\n            </custom-table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\" *ngIf=\"searching === true\">\r\n        <div class=\"col\">\r\n          <message\r\n            icon=\"fas fa-cog fa-spin\"\r\n            text=\"Estamos pesquisando os etapas para você...\">\r\n          </message>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"searching === false\">\r\n        <div class=\"row\" *ngIf=\"etapasListaEmpty && loadingEtapasLista\">\r\n          <div class=\"col\">\r\n            <message\r\n              icon=\"fas fa-box-open\"\r\n              text=\"Nenhuma informação encontrada\">\r\n            </message>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\" *ngIf=\"etapasLista.length === 0 && !firstSearch\">\r\n          <div class=\"col\">\r\n            <message\r\n              icon=\"fas fa-search\"\r\n              text=\"Preecha os campos acima para pesquisar etapas\">\r\n            </message>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</app-body>\r\n\r\n\r\n";
      /***/
    },

    /***/
    "QmfS":
    /*!*********************************************************************************************!*\
      !*** ./src/app/modules/logistica/yms/associacao-etapas/associacao-etapas-routing.module.ts ***!
      \*********************************************************************************************/

    /*! exports provided: LogisticaYmsAssociacaoEtapasRoutingModule */

    /***/
    function QmfS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaYmsAssociacaoEtapasRoutingModule", function () {
        return LogisticaYmsAssociacaoEtapasRoutingModule;
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


      var src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/not-found/not-found.component */
      "6nXq");
      /* harmony import */


      var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./cadastro/cadastro.component */
      "bCd4");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./lista/lista.component */
      "j3ka");

      var routes = [{
        path: '',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_5__["LogisticaYmsAssociacaoEtapasListaComponent"]
      }, {
        path: 'novo',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__["LogisticaYmsAssociacaoEtapasCadastroComponent"]
      }, {
        path: ':id',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__["LogisticaYmsAssociacaoEtapasCadastroComponent"]
      }, {
        path: '**',
        component: src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"]
      }];

      var LogisticaYmsAssociacaoEtapasRoutingModule = function LogisticaYmsAssociacaoEtapasRoutingModule() {
        _classCallCheck(this, LogisticaYmsAssociacaoEtapasRoutingModule);
      };

      LogisticaYmsAssociacaoEtapasRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LogisticaYmsAssociacaoEtapasRoutingModule);
      /***/
    },

    /***/
    "bCd4":
    /*!****************************************************************************************!*\
      !*** ./src/app/modules/logistica/yms/associacao-etapas/cadastro/cadastro.component.ts ***!
      \****************************************************************************************/

    /*! exports provided: LogisticaYmsAssociacaoEtapasCadastroComponent */

    /***/
    function bCd4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaYmsAssociacaoEtapasCadastroComponent", function () {
        return LogisticaYmsAssociacaoEtapasCadastroComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./cadastro.component.html */
      "Q0pW");
      /* harmony import */


      var _cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cadastro.component.scss */
      "4WXJ");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../../../../shared/modules/confirm-modal/confirm-modal.service */
      "FOez");
      /* harmony import */


      var _checklist_services_checklist_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./../../checklist/services/checklist.service */
      "JixU");
      /* harmony import */


      var _services_associacao_etapas_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../services/associacao-etapas.service */
      "3l7r");
      /* harmony import */


      var js_brasil__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! js-brasil */
      "zFJr");
      /* harmony import */


      var js_brasil__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(js_brasil__WEBPACK_IMPORTED_MODULE_9__);
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var util__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! util */
      "MCLT");
      /* harmony import */


      var util__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_15__); //Services
      //Bootstrap
      //Angular
      //rxjs
      //interfaces


      var LogisticaYmsAssociacaoEtapasCadastroComponent = /*#__PURE__*/function () {
        /* Pagination */
        function LogisticaYmsAssociacaoEtapasCadastroComponent(pnotify, formBuilder, titleService, activatedRoute, localeService, atividadesService, checklistService, confirmModalService, associacaoEtapasService) {
          _classCallCheck(this, LogisticaYmsAssociacaoEtapasCadastroComponent);

          this.pnotify = pnotify;
          this.formBuilder = formBuilder;
          this.titleService = titleService;
          this.activatedRoute = activatedRoute;
          this.localeService = localeService;
          this.atividadesService = atividadesService;
          this.checklistService = checklistService;
          this.confirmModalService = confirmModalService;
          this.associacaoEtapasService = associacaoEtapasService;
          this.etapas = [];
          this.etapasLista = [];
          this.breadCrumbTree = [];
          this.etapasAssociadas = [];
          this.toggleAll = false;
          this.searching = false;
          this.noEtapas = true;
          this.firstSearch = false;
          this.showEtapas = true;
          this.disabledForm = false;
          this.etapasListaEmpty = false; //loading

          this.loading = false;
          this.loadingNavBar = false;
          this.loadingConsulta = false;
          this.loadingEtapasLista = false;
          this.tableConfigAssocEtapas = {
            fixedHeader: false,
            bodyHeight: 243,
            hover: false
          };
          this.tableConfigEtapas = {
            fixedHeader: false,
            bodyHeight: 243
          };
          /* Pagination */

          this.itemsPerPage = 10;
          this.totalItems = 10;
          this.currentPage = 1;
          this.begin = 0;
          this.end = 10;
          this.MASKS = js_brasil__WEBPACK_IMPORTED_MODULE_9__["utilsBr"].MASKS;
          this.localeService.use('pt-br');
          this.bsConfig = Object.assign({}, {
            containerClass: 'theme-dark-blue'
          }, {
            adaptivePosition: true
          }, {
            showWeekNumbers: false
          });
        }

        _createClass(LogisticaYmsAssociacaoEtapasCadastroComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registrarAcesso();
            this.setBreadCrumb();
            this.setFormBuilder();
            this.onActivatedRoute();
            this.getChecklist();
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

            if (_params === null || _params === void 0 ? void 0 : _params.id) {
              this.getAssociacao(_params['id']);
              this.form.get('ID_LOGI_YMS_CHEC').setValue(parseInt(_params['id']));
            }
          }
        }, {
          key: "consultaFilial",
          value: function consultaFilial(event) {
            this.getAssociacao(event.ID_LOGI_YMS_CHEC);
            this.loadingConsulta = true;
          }
        }, {
          key: "getAssociacao",
          value: function getAssociacao(id) {
            var _this = this;

            this.associacaoEtapasService.getAssociacaoEtapas({
              ID_LOGI_YMS_CHEC: id,
              IN_STAT: 1
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(function () {
              _this.loadingNavBar = false;
              _this.loadingConsulta = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this.etapasAssociadas = response.body['data'];
              } else {
                _this.etapasAssociadas = [];
                _this.noResult = true;
              }

              if (_this.etapasAssociadas.length > 9) {
                _this.tableConfigAssocEtapas.fixedHeader = true;
              }
            }, function (error) {
              var message = error.error.message;
              message ? _this.pnotify.error(message) : _this.pnotify.error();
              _this.noResult = true;
            });
          }
        }, {
          key: "getChecklist",
          value: function getChecklist(params) {
            var _this2 = this;

            var _params = params !== null && params !== void 0 ? params : {};

            _params.IN_STAT = 1;
            _params.IN_PAGI = 0;
            this.loading = true;
            this.checklistService.getChecklist(_params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(function () {
              _this2.loading = false;
              _this2.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this2.checklist = response.body['data'];
                _this2.noResult = false;
              } else {
                _this2.pnotify.error();

                _this2.noResult = true;
              }
            }, function (error) {
              try {
                _this2.pnotify.error(error.error.message);

                _this2.noResult = true;
              } catch (error) {
                _this2.pnotify.error();
              }
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
              descricao: 'Cadastro',
              routerLink: "/logistica/yms/".concat(id)
            }, {
              descricao: 'Etapas por Checklist',
              routerLink: "../"
            }, {
              descricao: this.appTitle
            }];
          } //formulario

        }, {
          key: "setFormBuilder",
          value: function setFormBuilder() {
            this.form = this.formBuilder.group({
              ID_LOGI_YMS_ETAP: [null],
              ID_LOGI_YMS_CHEC: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__["Validators"].required]],
              NM_AREA: [null],
              IN_STAT: [util__WEBPACK_IMPORTED_MODULE_15__["isNull"]],
              DS_OBSE: [null],
              assocEtapas: this.formBuilder.array([])
            });
            this.formEtapas = this.formBuilder.group({
              buscarPor: ['NM_ETAP'],
              pesquisa: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["Validators"].required],
              ID_LOGI_YMS_ETAP: [null],
              NM_ETAP: [null]
            });
          }
        }, {
          key: "onLimparAssociacoes",
          value: function onLimparAssociacoes() {
            var _this3 = this;

            this.confirmDelete().subscribe(function (response) {
              return response ? _this3.deleteAssociacoes(_this3.form.get('ID_LOGI_YMS_CHEC').value) : null;
            });
          }
        }, {
          key: "deleteAssociacoes",
          value: function deleteAssociacoes(params) {
            var _this4 = this;

            this.associacaoEtapasService.deleteAssociacoes({
              ID_LOGI_YMS_CHEC: params
            }).subscribe(function (response) {
              if (response.status === 200) {
                _this4.etapasAssociadas = [];

                _this4.pnotify.success(response.body['message']);
              } else {
                _this4.pnotify.error();
              }
            }, function (error) {
              var message = error.error.message;
              message ? _this4.pnotify.error(message) : _this4.pnotify.error();
              _this4.noResult = true;
            });
          }
        }, {
          key: "onDeleteEtapa",
          value: function onDeleteEtapa(etapa) {
            var _this5 = this;

            this.confirmDelete().subscribe(function (response) {
              return response ? _this5.deleteEtapa(etapa) : null;
            });
          }
        }, {
          key: "confirmDelete",
          value: function confirmDelete() {
            return this.confirmModalService.showConfirm('delete', 'Confirmar exclusão', 'Deseja realmente prosseguir com a exclusão do registro?', 'Cancelar', 'Confirmar');
          }
        }, {
          key: "deleteEtapa",
          value: function deleteEtapa(etapa) {
            var _this6 = this;

            if (!etapa) {
              this.pnotify.notice('Nenhum usuário associado!');
              return;
            }

            etapa['IN_STAT'] = 0;
            this.loadingNavBar = true;
            this.associacaoEtapasService.postAssociacaoEtapas(etapa).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(function () {
              _this6.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                var etapaId = etapa.ID_ETAP + '@' + etapa.ID_LOGI_YMS_CHEC;
                _this6.etapasAssociadas = _this6.etapasAssociadas.filter(function (etapaAssociado) {
                  var etapaCorrenteId = etapaAssociado.ID_ETAP + '@' + etapaAssociado.ID_LOGI_YMS_CHEC;
                  return etapaId != etapaCorrenteId;
                });

                _this6.pnotify.success();
              } else {
                _this6.pnotify.error();
              }
            }, function (error) {
              var message = error.error.message;
              message ? _this6.pnotify.error(message) : _this6.pnotify.error();
            });
          }
        }, {
          key: "getEtapas",
          value: function getEtapas(params) {
            var _this7 = this;

            if (this.formEtapas.valid) {
              this.loadingNavBar = true;
              this.searching = true;
              this.etapasLista = [];
              this.loadingEtapasLista = false;
              this.etapasListaEmpty = false;

              var _params = params !== null && params !== void 0 ? params : {};

              _params.IN_STAT = '1';
              _params.IN_PAGI = 0;
              var _obj = this.formEtapas.value;
              if (_obj['pesquisa']) _params[_obj['buscarPor']] = _obj['pesquisa'];
              this.associacaoEtapasService.getEtapas(_params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(function () {
                _this7.firstSearch = true;
                _this7.searching = false;
                _this7.loadingNavBar = false;
                _this7.loadingEtapasLista = true;
              })).subscribe(function (response) {
                if (response.status === 200) {
                  console.log(response.body['result']);
                  _this7.etapasLista = response.body['result'].map(function (el) {
                    var o = Object.assign({}, el);
                    o.checked = 0;
                    return o;
                  });

                  if (_this7.etapasLista.length > 9) {
                    _this7.tableConfigEtapas.fixedHeader = true;
                  } else {
                    _this7.tableConfigEtapas.fixedHeader = false;
                  }
                } else if (response.hasOwnProperty('success') && response.hasOwnProperty('mensagem')) {
                  _this7.pnotify.error();

                  _this7.etapasListaEmpty = true;
                } else {
                  _this7.pnotify.error();

                  _this7.etapasListaEmpty = true;
                }
              }, function (error) {
                var message = error.error.message;
                message ? _this7.pnotify.error(message) : _this7.pnotify.error();
              });
            }
          }
        }, {
          key: "onAssociarEtapas",
          value: function onAssociarEtapas() {
            var _this8 = this;

            this.toggleAll = false;
            this.etapasLista.forEach(function (el) {
              if (el.checked === 1) {
                var etapa = {
                  ID_ETAP: el.ID_LOGI_YMS_ETAP,
                  NM_ETAP_ASSO: el.NM_ETAP,
                  ID_LOGI_YMS_CHEC: _this8.form.get('ID_LOGI_YMS_CHEC').value
                };

                _this8.onAddEtapa(etapa);

                el.checked = 0;
              }
            });
          }
        }, {
          key: "onAddEtapa",
          value: function onAddEtapa(etapa) {
            if (this.checkEtapaExists(this.etapasAssociadas, etapa) === true) {
              this.pnotify.notice('Etapa já está associado!');
              return;
            }

            if (this.etapasAssociadas.length > 9) {
              this.tableConfigAssocEtapas.fixedHeader = true;
            }

            this.postAssociacaoEtapas(Object.assign(Object.assign({}, etapa), {
              IN_STAT: 1
            }));
          }
        }, {
          key: "checkEtapaExists",
          value: function checkEtapaExists(lista, etapa) {
            return lista.some(function (etapaAssociado) {
              return etapaAssociado.ID_LOGI_YMS_CHEC == etapa.ID_LOGI_YMS_CHEC && etapaAssociado.ID_ETAP == etapa.ID_ETAP;
            });
          }
        }, {
          key: "onToggleAll",
          value: function onToggleAll() {
            var _this9 = this;

            this.toggleAll = !this.toggleAll;
            this.etapasLista.forEach(function (el) {
              el.checked = _this9.toggleAll === true ? 1 : 0;
            });
          }
        }, {
          key: "onCheckEtapa",
          value: function onCheckEtapa(index, etapa) {
            this.etapasLista[index].checked = etapa.checked == 0 ? 1 : 0;
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
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormControl"]();

            if (this.form.controls[field].validator) {
              var validationResult = this.form.controls[field].validator(formControl);
              required = validationResult !== null && validationResult.required === true;
            }

            if (required) {
              return 'is-required';
            }
          }
        }, {
          key: "postAssociacaoEtapas",
          value: function postAssociacaoEtapas(etapa) {
            var _this10 = this;

            this.associacaoEtapasService.postAssociacaoEtapas(etapa).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(function () {
              _this10.loading = false;
              _this10.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this10.etapasAssociadas = [].concat(_toConsumableArray(_this10.etapasAssociadas), [etapa]);
              } else {
                _this10.pnotify.error();
              }
            });

            (function (error) {
              var message = error.error.message;
              message ? _this10.pnotify.error(message) : _this10.pnotify.error();
            });
          }
        }]);

        return LogisticaYmsAssociacaoEtapasCadastroComponent;
      }();

      LogisticaYmsAssociacaoEtapasCadastroComponent.ctorParameters = function () {
        return [{
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_4__["PNotifyService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormBuilder"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_3__["TitleService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"]
        }, {
          type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__["BsLocaleService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_5__["AtividadesService"]
        }, {
          type: _checklist_services_checklist_service__WEBPACK_IMPORTED_MODULE_7__["LogisticaYmsChecklistService"]
        }, {
          type: _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_6__["ConfirmModalService"]
        }, {
          type: _services_associacao_etapas_service__WEBPACK_IMPORTED_MODULE_8__["LogisticaYmsAssociacaoEtapasService"]
        }];
      };

      LogisticaYmsAssociacaoEtapasCadastroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"])({
        selector: 'logistica-associacao-etapas-cadastro',
        template: _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_4__["PNotifyService"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormBuilder"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_3__["TitleService"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__["BsLocaleService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_5__["AtividadesService"], _checklist_services_checklist_service__WEBPACK_IMPORTED_MODULE_7__["LogisticaYmsChecklistService"], _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_6__["ConfirmModalService"], _services_associacao_etapas_service__WEBPACK_IMPORTED_MODULE_8__["LogisticaYmsAssociacaoEtapasService"]])], LogisticaYmsAssociacaoEtapasCadastroComponent);
      /***/
    },

    /***/
    "j3ka":
    /*!**********************************************************************************!*\
      !*** ./src/app/modules/logistica/yms/associacao-etapas/lista/lista.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: LogisticaYmsAssociacaoEtapasListaComponent */

    /***/
    function j3ka(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaYmsAssociacaoEtapasListaComponent", function () {
        return LogisticaYmsAssociacaoEtapasListaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lista.component.html */
      "37vV");
      /* harmony import */


      var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lista.component.scss */
      "ph/m");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/modules/xlsx/xlsx.service */
      "eOmW");
      /* harmony import */


      var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./../../../../../shared/templates/detail-panel/detal-panel.service */
      "gIxL");
      /* harmony import */


      var _checklist_services_checklist_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./../../checklist/services/checklist.service */
      "JixU");
      /* harmony import */


      var _services_associacao_etapas_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../services/associacao-etapas.service */
      "3l7r");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M"); //angular
      //servicos
      // rxjs


      var LogisticaYmsAssociacaoEtapasListaComponent = /*#__PURE__*/function () {
        /* Pagination */
        function LogisticaYmsAssociacaoEtapasListaComponent(route, pnotify, formBuilder, xlsxService, dateService, routerService, activatedRoute, checklistService, detailPanelService, associacaoEtapasService) {
          _classCallCheck(this, LogisticaYmsAssociacaoEtapasListaComponent);

          this.route = route;
          this.pnotify = pnotify;
          this.formBuilder = formBuilder;
          this.xlsxService = xlsxService;
          this.dateService = dateService;
          this.routerService = routerService;
          this.activatedRoute = activatedRoute;
          this.checklistService = checklistService;
          this.detailPanelService = detailPanelService;
          this.associacaoEtapasService = associacaoEtapasService;
          this.showDetailPanel = false; //LOADINGS

          this.loading = true;
          this.loadingNavBar = false;
          this.totalItens = []; // CUSTOM TABLE

          this.tableConfig = {
            subtitleBorder: false
          };
          this.tableConfigAssocEtapas = {
            fixedHeader: false,
            bodyHeight: 230,
            hover: false
          }; // Tipos de Situação dos Checklist (Ativo/Inativo)

          this.tipos = [{
            cod: '1',
            nome: 'Ativos'
          }, {
            cod: '2',
            nome: 'Inativos'
          }];
          /* Pagination */

          this.itemsPerPage = 100;
          this.totalItems = 10;
          this.currentPage = 1;
        }

        _createClass(LogisticaYmsAssociacaoEtapasListaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.buildForm();
            this.setBreadCrumb();
            this.onActivatedRoute();
            this.onDetailPanelEmitter();
            this.getFilterChecklist();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.$activatedRouteSubscription.unsubscribe();
          }
        }, {
          key: "onActivatedRoute",
          value: function onActivatedRoute() {
            var _this11 = this;

            this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (response) {
              var _response = _this11.routerService.getBase64UrlParams(response);

              _this11.form.patchValue(_response);

              if (_response.hasOwnProperty('TT_REGI_PAGI')) _this11.itemsPerPage = _response.TT_REGI_PAGI;

              _this11.getChecklist(_this11.getParams());
            });
          }
        }, {
          key: "onDetailPanelEmitter",
          value: function onDetailPanelEmitter() {
            var _this12 = this;

            this.showDetailPanelSubscription = this.detailPanelService.config.subscribe(function (event) {
              _this12.showDetailPanel = event.showing;
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
          key: "buildForm",
          value: function buildForm() {
            this.form = this.formBuilder.group({
              ID_LOGI_YMS_CHEC: [null],
              NM_AREA: [null],
              IN_STAT: [null],
              DS_OBSE: [null],
              NR_MATR: [null],
              NM_USUA: [null],
              DT_INCL: [null],
              DT_ATUA: [null],
              CD_CEP: [null],
              DS_ESTA: [null],
              DS_CIDA: [null],
              DS_BAIR: [null],
              DS_LOGR: [null],
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
              descricao: 'Etapas por Checklist'
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
          value: function onDetails(associacaoEtapas) {
            this.getAssociacaoEtapas({
              ID_LOGI_YMS_CHEC: associacaoEtapas.ID_LOGI_YMS_CHEC,
              IN_STAT: 1
            });
            this.detailPanelService.show();
            this.associacaoSelecionada = associacaoEtapas;
            this.detailPanelService.loadedFinished(false);
          }
        }, {
          key: "getChecklist",
          value: function getChecklist(params) {
            var _this13 = this;

            if (!this.loading) this.loadingNavBar = true;
            this.checklistService.getChecklist(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () {
              _this13.loading = false;
              _this13.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this13.checklist = response.body['data'];
                _this13.totalItems = response.body['total'];
                _this13.noResult = false;
              } else {
                _this13.noResult = true;
                _this13.checklist = [];
              }
            }, function (error) {
              var message = error.error.message;
              message ? _this13.pnotify.error(message) : _this13.pnotify.error();
              _this13.noResult = true;
            });
          }
        }, {
          key: "getFilterChecklist",
          value: function getFilterChecklist() {
            var _this14 = this;

            this.loadingChecklist = true;
            this.checklistService.getChecklist({
              IN_STAT: '1',
              IN_PAGI: '0'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () {
              _this14.loadingChecklist = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this14.filterChecklist = response.body['data'];
              } else {
                _this14.pnotify.notice('Nenhum registro encontrado!');
              }
            }), function (error) {
              var message = error.error.message;
              message ? _this14.pnotify.error(message) : _this14.pnotify.error();
            };
          }
        }, {
          key: "getAssociacaoEtapas",
          value: function getAssociacaoEtapas(params) {
            var _this15 = this;

            this.noAssocEtapas = true;
            this.loadingAssociacaoEtapas = true;
            this.associacaoEtapasService.getAssociacaoEtapas(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () {
              _this15.loadingAssociacaoEtapas = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this15.associacaoEtapas = response.body['data'];

                if (_this15.associacaoEtapas.length > 9) {
                  _this15.tableConfigAssocEtapas.fixedHeader = true;
                }

                _this15.noAssocEtapas = false;
              } else {
                _this15.pnotify.notice('Nenhuma associação encontrada!');

                _this15.noAssocEtapas = true;
                _this15.associacaoEtapas = [];
              }
            }, function (error) {
              var message = error.error.message;
              message ? _this15.pnotify.error(message) : _this15.pnotify.error();
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
          key: "onExport",
          value: function onExport() {
            var data = new Date().toLocaleDateString().split('/'),
                dataExport = "".concat(data[0]).concat(data[1]).concat(data[2]);
            var listagemExport = [];
            listagemExport = this.associacaoEtapas.concat(this.totalItens);
            this.xlsxService.exportFile(listagemExport, "AssociacaoEtapas".concat(dataExport));
          }
        }]);

        return LogisticaYmsAssociacaoEtapasListaComponent;
      }();

      LogisticaYmsAssociacaoEtapasListaComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_6__["XlsxService"]
        }, {
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_7__["DateService"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_8__["RouterService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _checklist_services_checklist_service__WEBPACK_IMPORTED_MODULE_11__["LogisticaYmsChecklistService"]
        }, {
          type: _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_10__["DetailPanelService"]
        }, {
          type: _services_associacao_etapas_service__WEBPACK_IMPORTED_MODULE_12__["LogisticaYmsAssociacaoEtapasService"]
        }];
      };

      LogisticaYmsAssociacaoEtapasListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'logistica-associacao-etapas-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_6__["XlsxService"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_7__["DateService"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_8__["RouterService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _checklist_services_checklist_service__WEBPACK_IMPORTED_MODULE_11__["LogisticaYmsChecklistService"], _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_10__["DetailPanelService"], _services_associacao_etapas_service__WEBPACK_IMPORTED_MODULE_12__["LogisticaYmsAssociacaoEtapasService"]])], LogisticaYmsAssociacaoEtapasListaComponent);
      /***/
    },

    /***/
    "ph/m":
    /*!************************************************************************************!*\
      !*** ./src/app/modules/logistica/yms/associacao-etapas/lista/lista.component.scss ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function phM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL3ltcy9hc3NvY2lhY2FvLWV0YXBhcy9saXN0YS9saXN0YS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=associacao-etapas-associacao-etapas-module-es5.js.map