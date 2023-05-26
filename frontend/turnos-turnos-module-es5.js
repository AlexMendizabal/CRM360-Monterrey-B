(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["turnos-turnos-module"], {
    /***/
    "6/+z":
    /*!*****************************************************************************!*\
      !*** ./src/app/modules/logistica/cadastros/turnos/turnos-routing.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: LogisticaTurnosRoutingModule */

    /***/
    function z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaTurnosRoutingModule", function () {
        return LogisticaTurnosRoutingModule;
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
      "rkVY");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./lista/lista.component */
      "YjxE");

      var routes = [{
        path: '',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_5__["LogisticaTurnosListaComponent"]
      }, {
        path: 'novo',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__["LogisticaTurnosCadastroComponent"]
      }, {
        path: ':id',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__["LogisticaTurnosCadastroComponent"]
      }, {
        path: '**',
        component: src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"]
      }];

      var LogisticaTurnosRoutingModule = function LogisticaTurnosRoutingModule() {
        _classCallCheck(this, LogisticaTurnosRoutingModule);
      };

      LogisticaTurnosRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LogisticaTurnosRoutingModule);
      /***/
    },

    /***/
    "AQQP":
    /*!*******************************************************************************!*\
      !*** ./src/app/modules/logistica/cadastros/turnos/services/turnos.service.ts ***!
      \*******************************************************************************/

    /*! exports provided: LogisticaTurnosService */

    /***/
    function AQQP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaTurnosService", function () {
        return LogisticaTurnosService;
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


      var LogisticaTurnosService = /*#__PURE__*/function () {
        function LogisticaTurnosService(http) {
          _classCallCheck(this, LogisticaTurnosService);

          this.http = http;
          this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API;
        }

        _createClass(LogisticaTurnosService, [{
          key: "getTurnos",
          value: function getTurnos(params) {
            return this.http.get("".concat(this.API, "/logistica/turnos"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "getTurno",
          value: function getTurno(id) {
            return this.http.get("".concat(this.API, "/logistica/turnos/").concat(id), {
              observe: 'response'
            });
          }
        }, {
          key: "postTurnos",
          value: function postTurnos(turno) {
            return this.http.post("".concat(this.API, "/logistica/turnos"), turno, {
              observe: 'response'
            });
          }
        }]);

        return LogisticaTurnosService;
      }();

      LogisticaTurnosService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      LogisticaTurnosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], LogisticaTurnosService);
      /***/
    },

    /***/
    "DcIT":
    /*!*************************************************************************************!*\
      !*** ./src/app/modules/logistica/cadastros/turnos/cadastro/cadastro.component.scss ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function DcIT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2NhZGFzdHJvcy90dXJub3MvY2FkYXN0cm8vY2FkYXN0cm8uY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "EiXP":
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/cadastros/turnos/lista/lista.component.html ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function EiXP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loadingNavBar\"></loader-spinner-navbar>\n<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\n<app-header appTitle=\"Turnos\">\n  <button\n  type=\"button\"\n  (click)=\"onExport()\"\n  [disabled]=\"loadingNavBar || noResult\">\n  Exportar\n</button>\n  <button\n    type=\"button\"\n    (click)=\"onReset()\">\n    Limpar\n  </button>\n  <button\n    type=\"button\"\n    [routerLink]=\"['../novo']\">\n    Adicionar\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"onFilter()\">\n    Filtrar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loading\">\n  <div class=\"row\" #scrollToFilter>\n    <div class=\"col\">\n      <advanced-filter>\n        <form [formGroup]=\"form\" autocomplete=\"off\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-5 pl-0\">\n              <label for=\"filterTurnos\">Turno</label>\n              <ng-select\n                [searchable]=\"true\"\n                [clearable]=\"true\"\n                [items]=\"filterTurnos\"\n                [virtualScroll]=\"true\"\n                placeholder=\"Selecione...\"\n                [loading]=\"loadingTurnos\"\n                labelForId=\"filterTurnos\"\n                bindLabel=\"DS_TURN\"\n                bindValue=\"UUID_LOGI_TURN\"\n                id=\"filterTurnos\"\n                formControlName=\"UUID_LOGI_TURN\">\n              </ng-select>\n            </div>\n            <div class=\"form-group col-md-2 pl-0\">\n              <label for=\"IN_STAT\">Situação</label>\n              <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"false\"\n              [items]=\"tipos\"\n              [virtualScroll]=\"true\"\n              labelForId=\"tipo\"\n              bindLabel=\"nome\"\n              bindValue=\"cod\"\n              id=\"tipo\"\n              (change)=\"onFilter()\"\n              formControlName=\"IN_STAT\"\n              (keydown.enter)=\"onFilter()\"\n              placeholder=\"Selecione...\"\n            >\n            </ng-select>\n            </div>\n            <div class=\"form-group col-md-1 p-0\">\n              <label>Registros</label>\n              <select \n                class=\"form-control custom-select\"\n                formControlName=\"TT_REGI_PAGI\"\n                (keydown.enter)=\"onFilter()\"\n                (change)=\"setPageRegistros($event.target.value)\"  \n              >\n                <option value=\"10\">10</option>\n                <option value=\"25\">25</option>\n                <option value=\"50\">50</option>\n                <option value=\"100\">100</option>\n                <option value=\"250\">250</option>\n                <option value=\"500\">500</option>\n              </select>\n            </div>\n          </div>\n        </form>\n      </advanced-filter>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <subtitles\n        [data]=\"subtitles\"\n        [show]=\"!noResult\">\n      </subtitles>\n    </div>\n  </div>\n  <div class=\"d-flex\" [hidden] = \"loading || noResult\">\n    <div class=\"p-0\" [ngClass]=\"{'col': !showDetailPanel, 'col-6': showDetailPanel}\">\n      <div class=\"w-100\">\n        <custom-table  [config]=\"tableConfig\" class=\"text-center\" *ngIf=\"!noResult\">\n          <ng-template #thead let-thead>\n            <tr>\n              <th scope=\"col\" >Descrição</th>\n              <th scope=\"col\" style=\"width:120px\"></th>\n            </tr>\n          </ng-template>\n          <ng-template #tbody let-tbody>\n            <tr *ngFor=\"let turno of turnos\"  [class.table-active]=\"turno?.UUID_LOGI_TURN == turnoSelecionado?.UUID_LOGI_TURN && showDetailPanel\">\n              <td  [ngClass]=\"turno.IN_STAT == '1' ? 'border-success' : 'border-danger'\">\n              {{ turno.DS_TURN | uppercase}}\n              </td>\n              <td class=\"align-middle\" >\n                <span class=\"mr-3\" [tooltip]=\"turno.IN_STAT == 1 ? 'Inativar' : 'Ativar'\" placement=\"left\" container=\"body\">\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"changeType(turno)\">\n                    <i [ngClass]=\"turno.IN_STAT == '1' ? 'fas fa-toggle-on' : 'fas fa-toggle-off'\"></i>\n                  </button>\n                </span>\n                <span class=\"mr-3\" tooltip=\"Editar\" placement=\"left\" container=\"body\">\n                  <button type=\"button\" class=\"btn-icon-sm\" [routerLink]=\"['./../', turno.UUID_LOGI_TURN]\">\n                    <i class=\"fas fa-edit\"></i>\n                  </button>\n                </span>\n                <span class=\"mr-3\"  tooltip=\"Detalhes\" placement=\"left\" container=\"body\" >\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onDetails(turno)\">\n                    <i class=\"fas fa-search\"></i>                  \n                  </button>\n                </span>\n              </td>\n            </tr>\n          </ng-template>\n        </custom-table><br>\n      </div>\n      <div *ngIf=\"totalItems > itemsPerPage\">\n        Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\n        <pagination\n          [maxSize]=\"10\"\n          [totalItems]=\"totalItems\"\n          (pageChanged)=\"onPageChanged($event)\"\n          [(itemsPerPage)]=\"itemsPerPage\"\n          [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPage\"\n          previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\"\n          lastText=\"&raquo;\">\n        </pagination>\n      </div>\n    </div>\n    <div class=\"col-6 pr-0\" [hidden]=\"!showDetailPanel\">\n      <detail-panel panelTitle=\"Detalhes\">\n        <div class=\"form-row\">\n          <div class=\"form-group col-lg-6\">\n            <label>ID</label>\n            <div>{{ turnoSelecionado?.UUID_LOGI_TURN }}</div>\n          </div>\n          <div class=\"form-group col-lg-6\">\n            <label>Turno</label>\n            <div>{{ turnoSelecionado?.DS_TURN | uppercase}}</div>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-lg-6\">\n            <label>Horário Inicial</label>\n            <div>{{ convertMysqlTime(turnoSelecionado?.HR_INIC) | date: 'HH:mm'}}</div>\n          </div>\n          <div class=\"form-group col-lg-6\">\n            <label>Horário Final</label>\n            <div>{{ convertMysqlTime(turnoSelecionado?.HR_FINA) | date: 'HH:mm'}}</div>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-lg-12\">\n            <label>Dias da Semana</label>\n            <div class=\"d-flex mr-1\">\n              <div class=\"mr-1\">\n                <i [ngClass]=\"turnoSelecionado?.IN_SEGU ? 'fas fa-check-circle text-success' : 'fas fa-times-circle text-danger'\"></i>\n              </div>\n              <span>Segunda-feira</span>\n            </div>\n            <div class=\"d-flex mr-1\">\n              <div class=\"mr-1\">\n                <i [ngClass]=\"turnoSelecionado?.IN_TERC ? 'fas fa-check-circle text-success' : 'fas fa-times-circle text-danger'\"></i>\n              </div>\n              <span>Terça-feira</span>\n            </div>\n            <div class=\"d-flex mr-1\">\n              <div class=\"mr-1\">\n                <i [ngClass]=\"turnoSelecionado?.IN_QUAR ? 'fas fa-check-circle text-success' : 'fas fa-times-circle text-danger'\"></i>\n              </div>\n              <span>Quarta-feira</span>\n            </div>\n            <div class=\"d-flex mr-1\">\n              <div class=\"mr-1\">\n                <i [ngClass]=\"turnoSelecionado?.IN_QUIN ? 'fas fa-check-circle text-success' : 'fas fa-times-circle text-danger'\"></i>\n              </div>\n              <span>Quinta-feira</span>\n            </div>\n            <div class=\"d-flex mr-1\">\n              <div class=\"mr-1\">\n                <i [ngClass]=\"turnoSelecionado?.IN_SEXT ? 'fas fa-check-circle text-success' : 'fas fa-times-circle text-danger'\"></i>\n              </div>\n              <span>Sexta-feira</span>\n            </div>\n            <div class=\"d-flex mr-1\">\n              <div class=\"mr-1\">\n                <i [ngClass]=\"turnoSelecionado?.IN_SABA ? 'fas fa-check-circle text-success' : 'fas fa-times-circle text-danger'\"></i>\n              </div>\n              <span>Sábado</span>\n            </div>\n            <div class=\"d-flex mr-1\">\n              <div class=\"mr-1\">\n                <i [ngClass]=\"turnoSelecionado?.IN_DOMI ? 'fas fa-check-circle text-success' : 'fas fa-times-circle text-danger'\"></i>\n              </div>\n              <span>Domingo</span>\n            </div>\n          </div>\n        </div>\n        <hr>\n        <div class=\"form-row\">\n          <div class=\"form-group col-lg-6\">\n            <label *ngIf=\"!turnoSelecionado?.DT_ATUA\">Data de Cadastro</label>\n            <label *ngIf=\"turnoSelecionado?.DT_ATUA\">Data da Atualização</label>\n            <div>{{(turnoSelecionado?.DT_ATUA | date: 'dd/MM/yyyy HH:mm') || (turnoSelecionado?.DT_INCL | date: 'dd/MM/yyyy HH:mm') }}</div>\n          </div>\n          <div class=\"form-group col-lg-6\">\n            <label *ngIf=\"!turnoSelecionado?.DT_ATUA\">Usuário Responsável pelo Cadastro</label>\n            <label *ngIf=\"turnoSelecionado?.DT_ATUA\">Usuário Responsável pela Atualização</label>\n            <div>{{ turnoSelecionado?.NM_USUA | uppercase }}</div>\n          </div>\n        </div>\n        <!-- <custom-table>\n          <ng-template #thead let-thead>\n            <tr>\n              <th scope=\"col\" class=\"text-center\">Data</th>\n              <th scope=\"col\">Usuário</th>\n            </tr>\n          </ng-template>\n          <ng-template #tbody let-tbody>\n            <tr>\n              <td class=\"text-center\">{{(turnoSelecionado?.DT_ATUA | date: 'dd/MM/yyyy HH:mm') || (turnoSelecionado?.DT_INCL | date: 'dd/MM/yyyy HH:mm') }}</td>\n              <td>{{ turnoSelecionado?.NM_USUA | uppercase }}</td>\n            </tr>\n          </ng-template>\n        </custom-table> -->\n      </detail-panel>\n    </div>\n  </div>\n  <div [hidden]=\"loading || !noResult\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 80%\">\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n  </div>\n</app-body>";
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
    "M12J":
    /*!*********************************************************************!*\
      !*** ./src/app/modules/logistica/cadastros/turnos/turnos.module.ts ***!
      \*********************************************************************/

    /*! exports provided: LogisticaTurnosModule */

    /***/
    function M12J(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaTurnosModule", function () {
        return LogisticaTurnosModule;
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
      "YjxE");
      /* harmony import */


      var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./cadastro/cadastro.component */
      "rkVY");
      /* harmony import */


      var _turnos_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./turnos-routing.module */
      "6/+z");

      var LogisticaTurnosModule = function LogisticaTurnosModule() {
        _classCallCheck(this, LogisticaTurnosModule);
      };

      LogisticaTurnosModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_lista_lista_component__WEBPACK_IMPORTED_MODULE_12__["LogisticaTurnosListaComponent"], _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_13__["LogisticaTurnosCadastroComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TabsModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TimepickerModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(), src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_8__["NotFoundModule"], src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_9__["ModuleWrapperModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_11__["TemplatesModule"], _turnos_routing_module__WEBPACK_IMPORTED_MODULE_14__["LogisticaTurnosRoutingModule"]]
      })], LogisticaTurnosModule);
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

          this.months = ['Enero', 'Febrero', 'Marzon', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
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
    "SOb9":
    /*!***************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/cadastros/turnos/cadastro/cadastro.component.html ***!
      \***************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function SOb9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\n<app-header appTitle=\"Turnos\">\n  <button \n    [disabled]=\"form.valid === false || loadingNavBar === true\"\n    (click)=\"postTurnos()\"\n    >\n    Salvar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\n  <form [formGroup]=\"form\" autocomplete=\"off\">\n    <fieldset  class=\"col-12\">\n      <fieldset class=\"border rounded shadow-sm col-10 pt-2 mx-auto\">\n        <legend>Dados do Turno</legend>\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col-md-12 pl-0\">\n            <label for=\"DS_TURN\">Descrição</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"DS_TURN\"\n              formControlName=\"DS_TURN\"\n              placeholder=\"Digite...\"\n              [ngClass]=\"onFieldError('DS_TURN') + ' ' + onFieldRequired('DS_TURN')\"\n            />\n            <invalid-form-control [show]=\"onFieldInvalid('DS_TURN')\" message=\"Descrição é obrigatório.\"></invalid-form-control>\n          </div>\n        </div>\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col-md-12\">\n            <div class=\"form-row justify-content-center\">\n              <div class=\"col-auto d-flex pr-4\">\n                <label class=\"my-auto mr-2\">Horário mínimo</label>\n                <timepicker\n                  [showMeridian]=\"false\"\n                  [showSpinners]=\"false\"\n                  [mousewheel]=\"true\"\n                  formControlName=\"HR_INIC\"\n                  [ngClass]=\"onFieldError('HR_INIC') + ' ' + onFieldRequired('HR_INIC')\"\n                  required\n                  >\n                </timepicker>\n              </div>\n              <div class=\"col-auto d-flex\">\n                <label class=\"my-auto mr-2\">Horário máximo</label>\n                <timepicker\n                  [showMeridian]=\"false\"\n                  [showSpinners]=\"false\"\n                  [mousewheel]=\"true\"\n                  formControlName=\"HR_FINA\"\n                  [ngClass]=\"onFieldError('HR_FINA') + ' ' + onFieldRequired('HR_FINA')\"\n                  >\n                </timepicker>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group mx-4\">\n            <div class=\"custom-control custom-checkbox my-auto\">\n              <input\n                type=\"checkbox\"\n                class=\"custom-control-input\"\n                id=\"IN_SEGU\"\n                formControlName=\"IN_SEGU\"\n                (change)=\"onDias('IN_SEGU')\">\n              <label class=\"custom-control-label\" for=\"IN_SEGU\"><strong>Segunda-feira</strong></label>\n            </div>\n          </div>\n          <div class=\"form-group mx-4\">\n            <div class=\"custom-control custom-checkbox my-auto\">\n              <input\n                type=\"checkbox\"\n                class=\"custom-control-input\"\n                id=\"IN_TERC\"\n                formControlName=\"IN_TERC\"\n                (change)=\"onDias('IN_TERC')\">\n              <label class=\"custom-control-label\" for=\"IN_TERC\"><strong>Terça-feira</strong></label>\n            </div>\n          </div>\n          <div class=\"form-group mx-4\">\n            <div class=\"custom-control custom-checkbox my-auto\">\n              <input\n                type=\"checkbox\"\n                class=\"custom-control-input\"\n                id=\"IN_QUAR\"\n                formControlName=\"IN_QUAR\"\n                (change)=\"onDias('IN_QUAR')\">\n              <label class=\"custom-control-label\" for=\"IN_QUAR\"><strong>Quarta-feira</strong></label>\n            </div>\n          </div>\n          <div class=\"form-group mx-4\">\n            <div class=\"custom-control custom-checkbox my-auto\">\n              <input\n                type=\"checkbox\"\n                class=\"custom-control-input\"\n                id=\"IN_QUIN\"\n                formControlName=\"IN_QUIN\"\n                (change)=\"onDias('IN_QUIN')\">\n              <label class=\"custom-control-label\" for=\"IN_QUIN\"><strong>Quinta-feira</strong></label>\n            </div>\n          </div>\n          <div class=\"form-group mx-4\">\n            <div class=\"custom-control custom-checkbox my-auto\">\n              <input\n                type=\"checkbox\"\n                class=\"custom-control-input\"\n                id=\"IN_SEXT\"\n                formControlName=\"IN_SEXT\"\n                (change)=\"onDias('IN_SEXT')\">\n              <label class=\"custom-control-label\" for=\"IN_SEXT\"><strong>Sexta-feira</strong></label>\n            </div>\n          </div>\n          <div class=\"form-group mx-4\">\n            <div class=\"custom-control custom-checkbox my-auto\">\n              <input\n                type=\"checkbox\"\n                class=\"custom-control-input\"\n                id=\"IN_SABA\"\n                formControlName=\"IN_SABA\"\n                (change)=\"onDias('IN_SABA')\">\n              <label class=\"custom-control-label\" for=\"IN_SABA\"><strong>Sábado</strong></label>\n            </div>\n          </div>\n          <div class=\"form-group mx-4\">\n            <div class=\"custom-control custom-checkbox my-auto\">\n              <input\n                type=\"checkbox\"\n                class=\"custom-control-input\"\n                id=\"IN_DOMI\"\n                formControlName=\"IN_DOMI\"\n                (change)=\"onDias('IN_DOMI')\">\n              <label class=\"custom-control-label\" for=\"IN_DOMI\"><strong>Domingo</strong></label>\n            </div>\n          </div>\n        </div>\n      </fieldset>\n      <br>\n      <br>\n      <fieldset class=\"border rounded shadow-sm col-10 pt-2 mx-auto\">\n        <legend>Observação</legend>\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col\">\n            <label for=\"DS_OBSE\" >Observação:</label>\n            <textarea class=\"form-control\" id=\"DS_OBSE\" formControlName=\"DS_OBSE\" rows=\"3\"></textarea>\n          </div>\n        </div>\n        <br>\n      </fieldset>\n    </fieldset>\n  </form>\n</app-body>";
      /***/
    },

    /***/
    "YjxE":
    /*!*****************************************************************************!*\
      !*** ./src/app/modules/logistica/cadastros/turnos/lista/lista.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: LogisticaTurnosListaComponent */

    /***/
    function YjxE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaTurnosListaComponent", function () {
        return LogisticaTurnosListaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lista.component.html */
      "EiXP");
      /* harmony import */


      var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lista.component.scss */
      "jfi3");
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


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./../../../../../shared/modules/confirm-modal/confirm-modal.service */
      "FOez");
      /* harmony import */


      var _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./../../../../../shared/templates/detail-panel/detal-panel.service */
      "gIxL");
      /* harmony import */


      var _services_turnos_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../services/turnos.service */
      "AQQP");
      /* harmony import */


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");
      /* harmony import */


      var src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/modules/xlsx/xlsx.service */
      "eOmW");
      /* harmony import */


      var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! rxjs */
      "qCKp"); //angular
      //servicos
      // rxjs


      var LogisticaTurnosListaComponent = /*#__PURE__*/function () {
        /* Pagination */
        function LogisticaTurnosListaComponent(route, pnotify, formBuilder, xlsxService, dateService, routerService, activatedRoute, detailPanelService, confirmModalService, turnosService) {
          _classCallCheck(this, LogisticaTurnosListaComponent);

          this.route = route;
          this.pnotify = pnotify;
          this.formBuilder = formBuilder;
          this.xlsxService = xlsxService;
          this.dateService = dateService;
          this.routerService = routerService;
          this.activatedRoute = activatedRoute;
          this.detailPanelService = detailPanelService;
          this.confirmModalService = confirmModalService;
          this.turnosService = turnosService;
          this.showDetailPanel = false; //LOADINGS

          this.loading = true;
          this.loadingNavBar = false; //VARIAVEIS

          this.totalItens = []; // CUSTOM TABLE

          this.tableConfig = {
            subtitleBorder: true
          }; // Tipos de Situação dos turnos (Ativo/Inativo)

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

        _createClass(LogisticaTurnosListaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.buildForm();
            this.setBreadCrumb();
            this.onActivatedRoute();
            this.onDetailPanelEmitter();
            this.getFilterTurnos();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.$activatedRouteSubscription.unsubscribe();
          }
        }, {
          key: "onActivatedRoute",
          value: function onActivatedRoute() {
            var _this = this;

            this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (response) {
              var _response = _this.routerService.getBase64UrlParams(response);

              _this.form.patchValue(_response);

              if (_response.hasOwnProperty('TT_REGI_PAGI')) _this.itemsPerPage = _response.TT_REGI_PAGI;

              _this.getTurnos(_this.getParams());
            });
          }
        }, {
          key: "onDetailPanelEmitter",
          value: function onDetailPanelEmitter() {
            var _this2 = this;

            this.showDetailPanelSubscription = this.detailPanelService.config.subscribe(function (event) {
              _this2.showDetailPanel = event.showing;
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
              UUID_LOGI_TURN: [null],
              DS_TURN: [null],
              IN_STAT: [null],
              DS_OBSE: [null],
              NR_MATR: [null],
              NM_USUA: [null],
              DT_INCL: [null],
              DT_ATUA: [null],
              IN_SEGU: [false],
              IN_TERC: [false],
              IN_QUAR: [false],
              IN_QUIN: [false],
              IN_SEXT: [false],
              IN_SABA: [false],
              IN_DOMI: [false],
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
              descricao: 'Cadastro',
              routerLink: "/logistica/cadastros/".concat(id)
            }, {
              descricao: 'Turnos'
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
          value: function onDetails(tipos) {
            this.detailPanelService.show();
            this.turnoSelecionado = tipos;
            this.detailPanelService.loadedFinished(false);
          }
        }, {
          key: "convertMysqlTime",
          value: function convertMysqlTime(time) {
            return this.dateService.convertMysqlTime(time);
          }
        }, {
          key: "getTurnos",
          value: function getTurnos(params) {
            var _this3 = this;

            if (!this.loading) this.loadingNavBar = true;
            this.turnosService.getTurnos(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () {
              _this3.loading = false;
              _this3.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this3.turnos = response.body['data'];
                _this3.totalItems = response.body['total'];
                _this3.noResult = false;
              } else {
                _this3.noResult = true;
                _this3.turnos = [];
              }
            }, function (error) {
              _this3.noResult = true;
              var message = error.error.message;
              message ? _this3.pnotify.error(message) : _this3.pnotify.error();
            });
          }
        }, {
          key: "getFilterTurnos",
          value: function getFilterTurnos() {
            var _this4 = this;

            this.loadingTurnos = true;
            this.turnosService.getTurnos({
              IN_STAT: '1',
              IN_PAGI: '0'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () {
              _this4.loadingTurnos = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this4.filterTurnos = response.body['data'];
              } else {
                _this4.pnotify.notice('Nenhum registro encontrado!');
              }
            }), function (error) {
              var message = error.error.message;
              message ? _this4.pnotify.error(message) : _this4.pnotify.error();
            };
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
          value: function classStatusBorder(tipos) {
            var borderClass;

            if (tipos.IN_STAT == 1) {
              borderClass = 'border-success';
            } else if (tipos.IN_STAT == 2) {
              borderClass = 'border-danger';
            }

            return borderClass;
          }
        }, {
          key: "changeType",
          value: function changeType(params) {
            var _this5 = this;

            var stat = params.IN_STAT == 1 ? 0 : 1;
            this.confirmChange(stat).asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["switchMap"])(function (result) {
              if (!result) return rxjs__WEBPACK_IMPORTED_MODULE_14__["EMPTY"];
              _this5.loadingNavBar = true;
              params.IN_STAT = stat;
              return _this5.turnosService.postTurnos(params);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () {
              _this5.loadingNavBar = false;
            })).subscribe(function (success) {
              _this5.pnotify.success();
            }, function (error) {
              params.IN_STAT = params.IN_STAT == 1 ? 0 : 1;

              _this5.pnotify.error();
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
            listagemExport = this.turnos.concat(this.totalItens);
            this.xlsxService.exportFile(listagemExport, "Tipos_Setor".concat(dataExport));
          }
        }]);

        return LogisticaTurnosListaComponent;
      }();

      LogisticaTurnosListaComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_11__["XlsxService"]
        }, {
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__["DateService"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_8__["DetailPanelService"]
        }, {
          type: _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_7__["ConfirmModalService"]
        }, {
          type: _services_turnos_service__WEBPACK_IMPORTED_MODULE_9__["LogisticaTurnosService"]
        }];
      };

      LogisticaTurnosListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'logistica-turnos-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_11__["XlsxService"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__["DateService"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_8__["DetailPanelService"], _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_7__["ConfirmModalService"], _services_turnos_service__WEBPACK_IMPORTED_MODULE_9__["LogisticaTurnosService"]])], LogisticaTurnosListaComponent);
      /***/
    },

    /***/
    "jfi3":
    /*!*******************************************************************************!*\
      !*** ./src/app/modules/logistica/cadastros/turnos/lista/lista.component.scss ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function jfi3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2NhZGFzdHJvcy90dXJub3MvbGlzdGEvbGlzdGEuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "rkVY":
    /*!***********************************************************************************!*\
      !*** ./src/app/modules/logistica/cadastros/turnos/cadastro/cadastro.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: LogisticaTurnosCadastroComponent */

    /***/
    function rkVY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaTurnosCadastroComponent", function () {
        return LogisticaTurnosCadastroComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./cadastro.component.html */
      "SOb9");
      /* harmony import */


      var _cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cadastro.component.scss */
      "DcIT");
      /* harmony import */


      var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var js_brasil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! js-brasil */
      "zFJr");
      /* harmony import */


      var js_brasil__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(js_brasil__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _services_turnos_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../services/turnos.service */
      "AQQP"); //Services
      //Bootstrap
      //Angular


      var LogisticaTurnosCadastroComponent = /*#__PURE__*/function () {
        function LogisticaTurnosCadastroComponent(dateService, formBuilder, pnotify, activatedRoute, router, localeService, turnosService, titleService, atividadesService) {
          _classCallCheck(this, LogisticaTurnosCadastroComponent);

          this.dateService = dateService;
          this.formBuilder = formBuilder;
          this.pnotify = pnotify;
          this.activatedRoute = activatedRoute;
          this.router = router;
          this.localeService = localeService;
          this.turnosService = turnosService;
          this.titleService = titleService;
          this.atividadesService = atividadesService;
          this.breadCrumbTree = [];
          this.formData = []; //loading

          this.disabledForm = false;
          this.loading = false;
          this.loadingNavBar = false;
          this.MASKS = js_brasil__WEBPACK_IMPORTED_MODULE_7__["utilsBr"].MASKS;
          this.localeService.use('pt-br');
          this.bsConfig = Object.assign({}, {
            containerClass: 'theme-dark-blue'
          }, {
            adaptivePosition: true
          }, {
            showWeekNumbers: false
          });
        }

        _createClass(LogisticaTurnosCadastroComponent, [{
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
          key: "onActivatedRoute",
          value: function onActivatedRoute() {
            var _params = this.activatedRoute.snapshot.params;

            if (_params.hasOwnProperty('id')) {
              this.getTurno(_params['id']);
              return;
            }
          }
        }, {
          key: "getTurno",
          value: function getTurno(id) {
            var _this6 = this;

            this.loading = true;
            this.turnosService.getTurno(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(function () {
              _this6.loading = false;
              _this6.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this6.form.patchValue(response.body['data']);

                console.log(_this6.form.value);
                _this6.noResult = false;
              } else {
                _this6.noResult = true;
              }
            }, function (error) {
              _this6.noResult = true;
              var message = error.error.message;
              message ? _this6.pnotify.error(message) : _this6.pnotify.error();
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
              routerLink: "/logistica/cadastros/".concat(id)
            }, {
              descricao: 'Turnos',
              routerLink: "../"
            }, {
              descricao: this.appTitle
            }];
          } //formulario

        }, {
          key: "setFormBuilder",
          value: function setFormBuilder() {
            this.form = this.formBuilder.group({
              UUID_LOGI_TURN: [null],
              HR_INIC: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required]],
              HR_FINA: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required]],
              DS_TURN: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required]],
              IN_STAT: [null],
              IN_SEGU: [false],
              IN_TERC: [false],
              IN_QUAR: [false],
              IN_QUIN: [false],
              IN_SEXT: [false],
              IN_SABA: [false],
              IN_DOMI: [false],
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
          key: "postTurnos",
          value: function postTurnos() {
            var _this7 = this;

            var _params = this.form.value;
            _params.HR_INIC = this.dateService.convert2PhpDate(this.form.get('HR_INIC').value);
            _params.HR_FINA = this.dateService.convert2PhpDate(this.form.get('HR_FINA').value);
            console.log(_params);
            this.loadingNavBar = true;
            this.turnosService.postTurnos(_params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(function () {
              _this7.loading = false;
              _this7.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this7.pnotify.success();

                _this7.router.navigate(['../'], {
                  relativeTo: _this7.activatedRoute
                });
              } else {
                _this7.pnotify.error();
              }
            }, function (error) {
              var message = error.error.message;
              message ? _this7.pnotify.error(message) : _this7.pnotify.error();
            });
          }
        }, {
          key: "onDias",
          value: function onDias(dia) {
            var valor = this.form.get(dia).value;
            valor == true ? false : true;
            this.form.get(dia).setValue(valor);
          }
        }]);

        return LogisticaTurnosCadastroComponent;
      }();

      LogisticaTurnosCadastroComponent.ctorParameters = function () {
        return [{
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_3__["DateService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
        }, {
          type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["BsLocaleService"]
        }, {
          type: _services_turnos_service__WEBPACK_IMPORTED_MODULE_13__["LogisticaTurnosService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_4__["TitleService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_5__["AtividadesService"]
        }];
      };

      LogisticaTurnosCadastroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"])({
        selector: 'logistica--turnos-cadastro',
        template: _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_3__["DateService"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["BsLocaleService"], _services_turnos_service__WEBPACK_IMPORTED_MODULE_13__["LogisticaTurnosService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_4__["TitleService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_5__["AtividadesService"]])], LogisticaTurnosCadastroComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=turnos-turnos-module-es5.js.map