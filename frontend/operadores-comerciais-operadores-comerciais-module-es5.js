(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["operadores-comerciais-operadores-comerciais-module"], {
    /***/
    "23UM":
    /*!***********************************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/operadores-comerciais/operadores-comerciais-routing.module.ts ***!
      \***********************************************************************************************************/

    /*! exports provided: ComercialCadastrosOperadorComercialModuleRoutingModule */

    /***/
    function UM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosOperadorComercialModuleRoutingModule", function () {
        return ComercialCadastrosOperadorComercialModuleRoutingModule;
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
      "9E95");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./lista/lista.component */
      "RUuT");
      /* harmony import */


      var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./formulario/formulario.component */
      "QgDs"); // Guards
      // Components


      var routes = [{
        path: 'lista',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_5__["ComercialCadastrosOperadorComercialListaComponent"]
      }, {
        path: 'novo',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__["ComercialCadastrosOperadorComercialFormularioComponent"],
        resolve: {
          detalhes: _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_4__["ComercialCadastrosOperadorComercialFormularioResolverGuard"]
        },
        canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]]
      }, {
        path: 'editar/:id',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__["ComercialCadastrosOperadorComercialFormularioComponent"],
        resolve: {
          detalhes: _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_4__["ComercialCadastrosOperadorComercialFormularioResolverGuard"]
        },
        canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]]
      }, {
        path: '',
        redirectTo: 'lista',
        pathMatch: 'full'
      }];

      var ComercialCadastrosOperadorComercialModuleRoutingModule = function ComercialCadastrosOperadorComercialModuleRoutingModule() {
        _classCallCheck(this, ComercialCadastrosOperadorComercialModuleRoutingModule);
      };

      ComercialCadastrosOperadorComercialModuleRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ComercialCadastrosOperadorComercialModuleRoutingModule);
      /***/
    },

    /***/
    "877+":
    /*!****************************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/operadores-comerciais/operadores-comerciais.service.ts ***!
      \****************************************************************************************************/

    /*! exports provided: ComercialCadastrosOperadorComercialService */

    /***/
    function _(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosOperadorComercialService", function () {
        return ComercialCadastrosOperadorComercialService;
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

      var ComercialCadastrosOperadorComercialService = /*#__PURE__*/function () {
        function ComercialCadastrosOperadorComercialService(http) {
          _classCallCheck(this, ComercialCadastrosOperadorComercialService);

          this.http = http;
          this.API = "https://crm360.monterrey.com.bo/api/comercial/cadastros/operador-comercial";
        }

        _createClass(ComercialCadastrosOperadorComercialService, [{
          key: "getListaOperadoresComerciais",
          value: function getListaOperadoresComerciais(params) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/lista"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getDetalhes",
          value: function getDetalhes(codOperador) {
            return this.http.get("".concat(this.API, "/detalhes/").concat(codOperador)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "saveOperadorComercial",
          value: function saveOperadorComercial(operadorComercial) {
            return this.http.post("".concat(this.API, "/salvar"), operadorComercial).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "updateOperadorComercial",
          value: function updateOperadorComercial(operadorComercial) {
            return this.http.put("".concat(this.API, "/atualizar"), operadorComercial).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "save",
          value: function save(operadorComercial) {
            if (operadorComercial.codOperador !== null) {
              return this.updateOperadorComercial(operadorComercial);
            }

            return this.saveOperadorComercial(operadorComercial);
          }
        }, {
          key: "activateOperadorComercial",
          value: function activateOperadorComercial(codOperador) {
            return this.http.post("".concat(this.API, "/ativar"), codOperador).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "inactivateOperadorComercial",
          value: function inactivateOperadorComercial(codOperador) {
            return this.http.post("".concat(this.API, "/inativar"), codOperador).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getAssociacoesOperadores",
          value: function getAssociacoesOperadores(codOperador) {
            return this.http.get("".concat(this.API, "/associacoes/").concat(codOperador)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getHistoricoAssociacoes",
          value: function getHistoricoAssociacoes(codOperador) {
            return this.http.get("".concat(this.API, "/historico-associacoes/").concat(codOperador)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "postAssociacaoOperador",
          value: function postAssociacaoOperador(params) {
            return this.http.post("".concat(this.API, "/salvar-associacao"), params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "deleteAssociacaoOperador",
          value: function deleteAssociacaoOperador(params) {
            return this.http.post("".concat(this.API, "/excluir-associacao"), params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }]);

        return ComercialCadastrosOperadorComercialService;
      }();

      ComercialCadastrosOperadorComercialService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      ComercialCadastrosOperadorComercialService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ComercialCadastrosOperadorComercialService);
      /***/
    },

    /***/
    "9E95":
    /*!***********************************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/operadores-comerciais/formulario/formulario-resolver.guard.ts ***!
      \***********************************************************************************************************/

    /*! exports provided: ComercialCadastrosOperadorComercialFormularioResolverGuard */

    /***/
    function E95(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosOperadorComercialFormularioResolverGuard", function () {
        return ComercialCadastrosOperadorComercialFormularioResolverGuard;
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


      var _operadores_comerciais_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../operadores-comerciais.service */
      "877+"); // Services


      var ComercialCadastrosOperadorComercialFormularioResolverGuard = /*#__PURE__*/function () {
        function ComercialCadastrosOperadorComercialFormularioResolverGuard(operadorComercialService) {
          _classCallCheck(this, ComercialCadastrosOperadorComercialFormularioResolverGuard);

          this.operadorComercialService = operadorComercialService;
        }

        _createClass(ComercialCadastrosOperadorComercialFormularioResolverGuard, [{
          key: "resolve",
          value: function resolve(route) {
            if (route.params && route.params.id) {
              return this.operadorComercialService.getDetalhes(route.params.id);
            } // É implementado o método "of" para manter a tipagem de retorno com Observable.


            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
              success: true,
              data: {
                codOperador: null,
                codSap: null,
                codMtcorp: null,
                nomeOperador: null,
                sobrenomeOperador: null,
                tipoOperador: null,
                codSituacao: null,
                codEquipe: null,
                codEscritorio: null,
                tipoPessoa: 'F',
                cpf: null,
                cnpj: null,
                ie: null,
                rg: null,
                telefone: null,
                whatsApp: null,
                email: null,
                cep: null,
                logradouro: null,
                numero: null,
                complemento: null,
                referencia: null,
                bairro: null,
                cidade: null,
                estado: null,
                banco: null,
                agencia: null,
                contaCorrente: null,
                dataInicioContrato: null,
                dataFinalContrato: null
              }
            });
          }
        }]);

        return ComercialCadastrosOperadorComercialFormularioResolverGuard;
      }();

      ComercialCadastrosOperadorComercialFormularioResolverGuard.ctorParameters = function () {
        return [{
          type: _operadores_comerciais_service__WEBPACK_IMPORTED_MODULE_3__["ComercialCadastrosOperadorComercialService"]
        }];
      };

      ComercialCadastrosOperadorComercialFormularioResolverGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_operadores_comerciais_service__WEBPACK_IMPORTED_MODULE_3__["ComercialCadastrosOperadorComercialService"]])], ComercialCadastrosOperadorComercialFormularioResolverGuard);
      /***/
    },

    /***/
    "Dr2I":
    /*!************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/cadastros/operadores-comerciais/associacoes/associacoes.component.html ***!
      \************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Dr2I(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row justify-content-center\">\n  <div class=\"col-lg-8\">\n    <div class=\"form-row\">\n      <div class=\"form-group col\"><hr></div>\n    </div>\n    <div class=\"form-row\">\n      <div class=\"form-group col mb-3 d-flex justify-content-between\">\n        <div class=\"mtc-title mb-0\">Associação de operadores</div>\n        <div>\n          <div *ngIf=\"!showLoader\">\n            <a\n              class=\"text-primary mr-3\"\n              href=\"javascript:void(0)\"\n              (click)=\"onHistorico()\"\n              *ngIf=\"associacoes.length > 0 && !associacoesEmpty\">\n              <strong>Histórico</strong>\n            </a>\n            <a\n              class=\"text-secondary\"\n              href=\"javascript:void(0)\"\n              (click)=\"onAdd()\">\n              <strong>Adicionar</strong>\n            </a>\n          </div>\n          <div class=\"d-flex w-100\" *ngIf=\"showLoader\">\n            <div class=\"spinner-border spinner-border-sm text-dark my-auto mr-2\"></div>\n            <strong>Aguarde...</strong>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col\">\n        <custom-table *ngIf=\"associacoes.length > 0 && !associacoesEmpty\">\n          <ng-template #thead let-thead>\n            <tr>\n              <th scope=\"col\">Nome do operador</th>\n              <th scope=\"col\">Motivo</th>\n              <th scope=\"col\" class=\"text-center\">Início</th>\n              <th scope=\"col\" class=\"text-center\">Término</th>\n              <th scope=\"col\"></th>\n            </tr>\n          </ng-template>\n          <ng-template #tbody let-tbody>\n            <tr *ngFor=\"let associacao of associacoes\">\n              <td>{{ associacao.nomeOperadorAssociacao | uppercase }}</td>\n              <td>{{ associacao.motivo | uppercase }}</td>\n              <td class=\"text-center\">{{ associacao.dataInicialAssociacao | date: 'dd/MM/yyyy' }}</td>\n              <td class=\"text-center\">{{ associacao.dataFinalAssociacao | date: 'dd/MM/yyyy' }}</td>\n              <td class=\"text-right\">\n                <span class=\"mr-3\" tooltip=\"Inativar\" placement=\"left\" container=\"body\">\n                  <button\n                    type=\"button\"\n                    class=\"btn-icon-sm\"\n                    [disabled]=\"showLoader\"\n                    (click)=\"onDelete(associacao)\">\n                    <i class=\"fas fa-trash\"></i>\n                  </button>\n                </span>\n              </td>\n            </tr>\n          </ng-template>\n        </custom-table>\n        <empty-result\n          message=\"Nenhuma informação encontrada\"\n          class=\"my-3\"\n          *ngIf=\"associacoesEmpty\">\n        </empty-result>\n        <div class=\"mt-2 d-flex w-100\" *ngIf=\"!associacoesLoaded\">\n          <div class=\"spinner-border spinner-border-sm text-dark my-auto mr-2\"></div>\n          <strong>Carregando associações...</strong>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<ng-template #modalAssociacoes>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Associação de operadores</h4>\n    <button\n      type=\"button\"\n      class=\"close pull-right\"\n      [disabled]=\"submittingForm\"\n      (click)=\"hideModal()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <form [formGroup]=\"form\">\n      <div class=\"form-row\">\n        <div class=\"form-group col\">\n          <label for=\"operadores\">Selecione os operadores</label>\n          <ng-select\n            [items]=\"operadores\"\n            [multiple]=\"true\"\n            [closeOnSelect]=\"false\"\n            labelForId=\"operadores\"\n            bindValue=\"codOperador\"\n            bindLabel=\"nomeCompleto\"\n            formControlName=\"operadores\"\n            [ngClass]=\"onFieldError('operadores') + ' ' + onFieldRequired(form.controls.operadores)\">\n          </ng-select>\n          <invalid-form-control [show]=\"onFieldInvalid('operadores')\" message=\"Selecione pelo menos um operador.\"></invalid-form-control>\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"form-group col\">\n          <label for=\"motivoAssociacao\">Motivo da associação</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"false\"\n            [items]=\"motivosAssociacao\"\n            formControlName=\"motivoAssociacao\"\n            [virtualScroll]=\"true\"\n            bindLabel=\"motivoAssociacao\"\n            bindValue=\"codMotivoAssociacao\"\n            [ngClass]=\"onFieldError('motivoAssociacao') + ' ' + onFieldRequired(form.controls.motivoAssociacao)\">\n          </ng-select>\n          <invalid-form-control [show]=\"onFieldInvalid('motivoAssociacao')\" message=\"Motivo da associação é obrigatório.\"></invalid-form-control>\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"form-group col-lg-6\">\n          <label for=\"dataInicio\">Início</label>\n          <input\n            class=\"form-control\"\n            id=\"dataInicio\"\n            type=\"text\"\n            bsDatepicker\n            [bsConfig]=\"bsConfig\"\n            formControlName=\"dataInicio\"\n            [ngClass]=\"onFieldError('dataInicio') + ' ' + onFieldRequired(form.controls.dataInicio)\">\n          <invalid-form-control [show]=\"onFieldInvalid('dataInicio')\" message=\"Início da associação é obrigatório.\"></invalid-form-control>\n        </div>\n        <div class=\"form-group col-lg-6\">\n          <label for=\"dataTermino\">Término</label>\n          <input\n            class=\"form-control\"\n            id=\"dataTermino\"\n            type=\"text\"\n            bsDatepicker\n            [bsConfig]=\"bsConfig\"\n            formControlName=\"dataTermino\">\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"modal-footer\">\n    <button\n      type=\"button\"\n      class=\"btn btn-light\"\n      [disabled]=\"submittingForm\"\n      (click)=\"hideModal()\">\n      Cancelar\n    </button>\n    <button\n      type=\"button\"\n      class=\"btn btn-primary\"\n      [disabled]=\"submittingForm\"\n      (click)=\"onSubmit()\">\n      <span *ngIf=\"!submittingForm\">Salvar</span>\n      <span *ngIf=\"submittingForm\">Aguarde</span>\n    </button>\n  </div>\n</ng-template>\n\n<ng-template #modalHistoricoAssociacoes>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Histórico de associações</h4>\n    <button\n      type=\"button\"\n      class=\"close pull-right\"\n      [disabled]=\"submittingForm\"\n      (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <custom-table *ngIf=\"historicoAssociacoes.length > 0\">\n      <ng-template #thead let-thead>\n        <tr>\n          <th scope=\"col\" class=\"text-center\">Data</th>\n          <th scope=\"col\">Usuário</th>\n          <th scope=\"col\">Alteração</th>\n        </tr>\n      </ng-template>\n      <ng-template #tbody let-tbody>\n        <tr *ngFor=\"let historico of historicoAssociacoes\">\n          <td class=\"text-center\">{{ historico.dataLog | date: 'dd/MM/yyyy HH:mm' }}</td>\n          <td>{{ historico.nomeUsuario | uppercase }}</td>\n          <td>{{ historico.mensagem | uppercase }}</td>\n        </tr>\n      </ng-template>\n    </custom-table>\n  </div>\n</ng-template>\n";
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
    "QgDs":
    /*!******************************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/operadores-comerciais/formulario/formulario.component.ts ***!
      \******************************************************************************************************/

    /*! exports provided: ComercialCadastrosOperadorComercialFormularioComponent */

    /***/
    function QgDs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosOperadorComercialFormularioComponent", function () {
        return ComercialCadastrosOperadorComercialFormularioComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./formulario.component.html */
      "oYlE");
      /* harmony import */


      var _formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./formulario.component.scss */
      "c6R1");
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


      var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
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


      var ng_brazil__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ng-brazil */
      "hTrW");
      /* harmony import */


      var js_brasil__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! js-brasil */
      "zFJr");
      /* harmony import */


      var js_brasil__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(js_brasil__WEBPACK_IMPORTED_MODULE_13__);
      /* harmony import */


      var _operadores_comerciais_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../operadores-comerciais.service */
      "877+");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS");
      /* harmony import */


      var src_app_modules_comercial_cadastros_tipo_operadores_tipo_operadores_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! src/app/modules/comercial/cadastros/tipo-operadores/tipo-operadores.service */
      "3gui");
      /* harmony import */


      var src_app_modules_comercial_cadastros_equipe_venda_equipe_venda_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! src/app/modules/comercial/cadastros/equipe-venda/equipe-venda.service */
      "44Bq");
      /* harmony import */


      var src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! src/app/modules/comercial/comercial.service */
      "VgqD");
      /* harmony import */


      var src_app_shared_services_requests_estados_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! src/app/shared/services/requests/estados.service */
      "H0sO");
      /* harmony import */


      var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! src/app/shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! src/app/shared/modules/confirm-modal/confirm-modal.service */
      "FOez");
      /* harmony import */


      var src_app_shared_services_ws_cep_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! src/app/shared/services/ws/cep.service */
      "7aZN"); // ngx-bootstrap


      Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_10__["defineLocale"])('pt-br', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_11__["ptBrLocale"]); // ng-brazil
      // Services

      var ComercialCadastrosOperadorComercialFormularioComponent = /*#__PURE__*/function () {
        function ComercialCadastrosOperadorComercialFormularioComponent(activatedRoute, router, location, localeService, formBuilder, operadorComercialService, pnotifyService, atividadesService, titleService, tipoOperadorService, equipeVendaService, comercialService, estadosService, dateService, confirmModalService, cepService) {
          _classCallCheck(this, ComercialCadastrosOperadorComercialFormularioComponent);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.location = location;
          this.localeService = localeService;
          this.formBuilder = formBuilder;
          this.operadorComercialService = operadorComercialService;
          this.pnotifyService = pnotifyService;
          this.atividadesService = atividadesService;
          this.titleService = titleService;
          this.tipoOperadorService = tipoOperadorService;
          this.equipeVendaService = equipeVendaService;
          this.comercialService = comercialService;
          this.estadosService = estadosService;
          this.dateService = dateService;
          this.confirmModalService = confirmModalService;
          this.cepService = cepService;
          this.MASKS = js_brasil__WEBPACK_IMPORTED_MODULE_13__["utilsBr"].MASKS;
          this.loaderFullScreen = true;
          this.breadCrumbTree = [];
          this.codOperador = null;
          this.formChanged = false;
          this.tipoOperadores = [];
          this.equipesVenda = [];
          this.escritorios = [];
          this.estados = [];
          this.localeService.use('pt-br');
          this.bsConfig = Object.assign({}, {
            containerClass: 'theme-dark-blue'
          }, {
            adaptivePosition: true
          }, {
            showWeekNumbers: false
          });
          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialCadastrosOperadorComercialFormularioComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registrarAcesso();
            this.setBreadCrumb();
            this.getFormFields();
            this.setFormBuilder();
            this.checkRouterParams();
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
                _this.appTitle = 'Editar operador comercial';
                _this.codOperador = params.id;
              } else {
                _this.appTitle = 'Novo operador comercial';
              }

              _this.titleService.setTitle(_this.appTitle);

              _this.breadCrumbTree = [{
                descricao: 'Home',
                routerLink: '/comercial/home'
              }, {
                descricao: 'Cadastros',
                routerLink: "/comercial/cadastros/".concat(params.idSubModulo)
              }, {
                descricao: 'Operadores comerciais',
                routerLink: "/comercial/cadastros/".concat(params.idSubModulo, "/operadores-comerciais/lista")
              }, {
                descricao: _this.appTitle
              }];
            });
          }
        }, {
          key: "getFormFields",
          value: function getFormFields() {
            var _this2 = this;

            this.formDependencies().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this2.loaderFullScreen = false;
            })).subscribe({
              next: function next(response) {
                if (response[0].hasOwnProperty('success') && response[0].success === true) {
                  _this2.tipoOperadores = response[0].data;
                } else {
                  _this2.pnotifyService.error();

                  _this2.location.back();
                }

                if (response[1].hasOwnProperty('success') && response[1].success === true) {
                  _this2.equipesVenda = response[1].data;
                } else {
                  _this2.pnotifyService.error();

                  _this2.location.back();
                }

                if (response[2].responseCode === 200) {
                  _this2.escritorios = response[2].result;
                } else {
                  _this2.pnotifyService.error();

                  _this2.location.back();
                }

                _this2.estados = _this2.estadosService.getEstados();
              },
              error: function error(_error) {
                _this2.pnotifyService.error();

                _this2.location.back();
              }
            });
          }
        }, {
          key: "formDependencies",
          value: function formDependencies() {
            var tipoOperadores = this.tipoOperadorService.getListaTipoOperador({
              codSituacao: 1
            });
            var equipesVenda = this.equipeVendaService.getListaEquipesVenda({
              codSituacao: 1
            });
            var escritorios = this.comercialService.getEscritorios();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["forkJoin"])([tipoOperadores, equipesVenda, escritorios]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1));
          }
        }, {
          key: "setFormBuilder",
          value: function setFormBuilder() {
            if (this.activatedRoute.snapshot.data.detalhes.success === true) {
              var detalhes = this.activatedRoute.snapshot.data.detalhes.data;
              var dataInicioContrato = detalhes.dataInicioContrato === null ? null : this.dateService.convertStringToDate(detalhes.dataInicioContrato, 'usa');
              var dataFinalContrato = detalhes.dataFinalContrato === null ? null : this.dateService.convertStringToDate(detalhes.dataFinalContrato, 'usa');
              this.form = this.formBuilder.group({
                codOperador: [detalhes.codOperador],
                nomeOperador: [detalhes.nomeOperador, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                sobrenomeOperador: [detalhes.sobrenomeOperador, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                codTipoOperador: [detalhes.codTipoOperador, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                codSituacao: [detalhes.codSituacao, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                codEquipe: [detalhes.codEquipe, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                codEscritorio: [detalhes.codEscritorio, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                tipoPessoa: [detalhes.tipoPessoa, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                cpf: [detalhes.cpfCnpj],
                cnpj: [detalhes.cpfCnpj],
                rg: [detalhes.rgIe],
                ie: [detalhes.rgIe],
                telefone: [detalhes.telefone, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                celular: [detalhes.celular, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                email: [detalhes.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email]],
                endereco: this.formBuilder.group({
                  cep: [detalhes.cep, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                  logradouro: [detalhes.logradouro, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                  numero: [detalhes.numero, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                  complemento: [detalhes.complemento],
                  referencia: [detalhes.referencia],
                  bairro: [detalhes.bairro, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                  cidade: [detalhes.cidade, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                  estado: [detalhes.estado, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]]
                }),
                dadosBancarios: this.formBuilder.group({
                  banco: [detalhes.banco],
                  agencia: [detalhes.agencia],
                  contaCorrente: [detalhes.contaCorrente]
                }),
                dataInicioContrato: [dataInicioContrato, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                dataFinalContrato: [dataFinalContrato]
              });
              this.setType(detalhes.tipoPessoa);
            } else {
              this.pnotifyService.error();
              this.location.back();
            }
          }
        }, {
          key: "checkRouterParams",
          value: function checkRouterParams() {
            var _this3 = this;

            this.activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (queryParams) {
              if (Object.keys(queryParams).length > 0) {
                var params = atob(queryParams['q']);
                params = JSON.parse(params);

                if (params['showModalAssociacoes'] && params['showModalAssociacoes'] === 1) {
                  _this3.showModalAssociacoes = true;
                }
              }
            });
            this.activatedRouteSubscription.unsubscribe();
          }
        }, {
          key: "setType",
          value: function setType(tipoPessoa) {
            if (tipoPessoa === 'F') {
              this.form.controls.cpf.markAsUntouched();
              this.form.controls.cpf.enable();
              this.form.controls.cpf.setValidators([ng_brazil__WEBPACK_IMPORTED_MODULE_12__["NgBrazilValidators"].cpf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]);
              this.form.controls.rg.markAsUntouched();
              this.form.controls.rg.enable();
              this.form.controls.rg.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]);
              this.form.controls.cnpj.setValue(null);
              this.form.controls.cnpj.disable();
              this.form.controls.ie.setValue(null);
              this.form.controls.ie.disable();
            } else if (tipoPessoa === 'J') {
              this.form.controls.cnpj.markAsUntouched();
              this.form.controls.cnpj.enable();
              this.form.controls.cnpj.setValidators([ng_brazil__WEBPACK_IMPORTED_MODULE_12__["NgBrazilValidators"].cnpj, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]);
              this.form.controls.ie.markAsUntouched();
              this.form.controls.ie.enable();
              this.form.controls.ie.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]);
              this.form.controls.cpf.setValue(null);
              this.form.controls.cpf.disable();
              this.form.controls.rg.setValue(null);
              this.form.controls.rg.disable();
            }

            this.form.controls.cpf.updateValueAndValidity();
            this.form.controls.cnpj.updateValueAndValidity();
            this.form.controls.rg.updateValueAndValidity();
            this.form.controls.ie.updateValueAndValidity();
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
            var _this4 = this;

            if (this.form.pristine) {
              this.location.back();
            } else {
              if (this.form.valid) {
                this.loaderNavbar = true;
                this.submittingForm = true;
                this.operadorComercialService.save(this.form.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
                  _this4.loaderNavbar = false;
                  _this4.submittingForm = false;
                })).subscribe({
                  next: function next(response) {
                    if (response.hasOwnProperty('mensagem') && response.hasOwnProperty('success') && response.success === true) {
                      _this4.formChanged = false;

                      _this4.pnotifyService.success(response.mensagem);

                      _this4.activatedRoute.params.subscribe(function (params) {
                        _this4.activatedRoute.queryParams.subscribe(function (queryParams) {
                          if (queryParams.hasOwnProperty('q')) {
                            _this4.router.navigate(['../../lista'], {
                              relativeTo: _this4.activatedRoute
                            });
                          } else {
                            if (params.hasOwnProperty('id')) {
                              _this4.location.back();
                            } else {
                              _this4.checkAssociacoes(response.data);
                            }
                          }
                        });
                      });
                    } else if (response.hasOwnProperty('mensagem') && response.hasOwnProperty('success') && response.success === false) {
                      _this4.pnotifyService.notice(response.mensagem);
                    } else {
                      _this4.pnotifyService.error();
                    }
                  },
                  error: function error(_error2) {
                    _this4.pnotifyService.error();
                  }
                });
              }
            }
          }
        }, {
          key: "checkAssociacoes",
          value: function checkAssociacoes(codOperador) {
            var _this5 = this;

            this.confirmModalService.showConfirm(null, 'Associação de operadores', 'Deseja associar outros operadores comerciais?', 'Cancelar', 'Confirmar').subscribe(function (response) {
              return response ? _this5.onConfirmAssociacoes(codOperador) : _this5.onRefuseAssociacoes();
            });
          }
        }, {
          key: "onConfirmAssociacoes",
          value: function onConfirmAssociacoes(codOperador) {
            this.router.navigate(['../editar', codOperador], {
              relativeTo: this.activatedRoute,
              queryParams: {
                q: btoa(JSON.stringify({
                  showModalAssociacoes: 1
                }))
              }
            });
          }
        }, {
          key: "onRefuseAssociacoes",
          value: function onRefuseAssociacoes() {
            this.router.navigate(['../lista'], {
              relativeTo: this.activatedRoute
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
          key: "onInputCep",
          value: function onInputCep() {
            if (this.form.get('endereco.cep').status == 'VALID') {
              this.consultaCEP(this.form.value.endereco.cep);
            }
          }
        }, {
          key: "consultaCEP",
          value: function consultaCEP(cep) {
            var _this6 = this;

            this.loaderNavbar = true;
            this.cepService.getData(cep).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this6.loaderNavbar = false;
            })).subscribe(function (response) {
              if (response.hasOwnProperty('success') && response.success === true) {
                _this6.form.patchValue({
                  endereco: {
                    logradouro: response.data.logradouro,
                    bairro: response.data.bairro,
                    cidade: response.data.localidade,
                    estado: response.data.uf
                  }
                });
              }
            });
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

        return ComercialCadastrosOperadorComercialFormularioComponent;
      }();

      ComercialCadastrosOperadorComercialFormularioComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
        }, {
          type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__["BsLocaleService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }, {
          type: _operadores_comerciais_service__WEBPACK_IMPORTED_MODULE_14__["ComercialCadastrosOperadorComercialService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_15__["PNotifyService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_16__["AtividadesService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_17__["TitleService"]
        }, {
          type: src_app_modules_comercial_cadastros_tipo_operadores_tipo_operadores_service__WEBPACK_IMPORTED_MODULE_18__["ComercialCadastrosTipoOperadorService"]
        }, {
          type: src_app_modules_comercial_cadastros_equipe_venda_equipe_venda_service__WEBPACK_IMPORTED_MODULE_19__["ComercialCadastrosEquipeVendaService"]
        }, {
          type: src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_20__["ComercialService"]
        }, {
          type: src_app_shared_services_requests_estados_service__WEBPACK_IMPORTED_MODULE_21__["EstadosService"]
        }, {
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_22__["DateService"]
        }, {
          type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_23__["ConfirmModalService"]
        }, {
          type: src_app_shared_services_ws_cep_service__WEBPACK_IMPORTED_MODULE_24__["CepService"]
        }];
      };

      ComercialCadastrosOperadorComercialFormularioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-cadastros-operador-comercial-formulario',
        template: _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__["BsLocaleService"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _operadores_comerciais_service__WEBPACK_IMPORTED_MODULE_14__["ComercialCadastrosOperadorComercialService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_15__["PNotifyService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_16__["AtividadesService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_17__["TitleService"], src_app_modules_comercial_cadastros_tipo_operadores_tipo_operadores_service__WEBPACK_IMPORTED_MODULE_18__["ComercialCadastrosTipoOperadorService"], src_app_modules_comercial_cadastros_equipe_venda_equipe_venda_service__WEBPACK_IMPORTED_MODULE_19__["ComercialCadastrosEquipeVendaService"], src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_20__["ComercialService"], src_app_shared_services_requests_estados_service__WEBPACK_IMPORTED_MODULE_21__["EstadosService"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_22__["DateService"], src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_23__["ConfirmModalService"], src_app_shared_services_ws_cep_service__WEBPACK_IMPORTED_MODULE_24__["CepService"]])], ComercialCadastrosOperadorComercialFormularioComponent);
      /***/
    },

    /***/
    "RUuT":
    /*!********************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/operadores-comerciais/lista/lista.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: ComercialCadastrosOperadorComercialListaComponent */

    /***/
    function RUuT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosOperadorComercialListaComponent", function () {
        return ComercialCadastrosOperadorComercialListaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lista.component.html */
      "UjmV");
      /* harmony import */


      var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lista.component.scss */
      "WJc9");
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


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _operadores_comerciais_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../operadores-comerciais.service */
      "877+");
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


      var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/shared/modules/confirm-modal/confirm-modal.service */
      "FOez");
      /* harmony import */


      var _tipo_operadores_tipo_operadores_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../tipo-operadores/tipo-operadores.service */
      "3gui");
      /* harmony import */


      var _equipe_venda_equipe_venda_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../equipe-venda/equipe-venda.service */
      "44Bq");
      /* harmony import */


      var src_app_shared_services_requests_escritorios_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! src/app/shared/services/requests/escritorios.service */
      "NIE8"); // Services


      var ComercialCadastrosOperadorComercialListaComponent = /*#__PURE__*/function () {
        function ComercialCadastrosOperadorComercialListaComponent(activatedRoute, router, location, formBuilder, operadorComercialService, pnotifyService, atividadesService, titleService, confirmModalService, tipoOperadorService, equipeVendaService, escritorioService) {
          _classCallCheck(this, ComercialCadastrosOperadorComercialListaComponent);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.location = location;
          this.formBuilder = formBuilder;
          this.operadorComercialService = operadorComercialService;
          this.pnotifyService = pnotifyService;
          this.atividadesService = atividadesService;
          this.titleService = titleService;
          this.confirmModalService = confirmModalService;
          this.tipoOperadorService = tipoOperadorService;
          this.equipeVendaService = equipeVendaService;
          this.escritorioService = escritorioService;
          this.loaderNavbar = false;
          this.loaderFullScreen = true;
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
          this.orderBy = 'nomeOperador';
          this.orderType = 'ASC';
          this.tipoOperadores = [];
          this.equipesVenda = [];
          this.escritorios = [];
          this.maxSize = 10;
          this.itemsPerPage = 300;
          this.currentPage = 1;
          this.totalItems = 0;
          this.dados = [];
          this.dadosPagination = [];
          this.dadosLoaded = false;
          this.dadosEmpty = false;
          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialCadastrosOperadorComercialListaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registrarAcesso();
            this.setBreadCrumb();
            this.getFormFields();
            this.setFormFilter();
            this.titleService.setTitle('Operadores comerciais');
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            var _this7 = this;

            this.activatedRoute.params.subscribe(function (params) {
              _this7.breadCrumbTree = [{
                descricao: 'Home',
                routerLink: '/comercial/home'
              }, {
                descricao: 'Cadastros',
                routerLink: "/comercial/cadastros/".concat(params['idSubModulo'])
              }, {
                descricao: 'Operadores comerciais'
              }];
            });
          }
        }, {
          key: "getFormFields",
          value: function getFormFields() {
            var _this8 = this;

            this.loadDependencies().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
              _this8.loaderFullScreen = false;
            })).subscribe({
              next: function next(response) {
                if (response[0].hasOwnProperty('success') && response[0].success === true) {
                  _this8.tipoOperadores = response[0].data;

                  _this8.tipoOperadores.unshift({
                    codTipoOperador: 0,
                    tipo: 'EXIBIR TODOS',
                    codSituacao: null,
                    situacao: null,
                    nomeUsuario: null,
                    dataCadastro: null
                  });
                } else {
                  _this8.pnotifyService.error();

                  _this8.location.back();
                }

                if (response[1].hasOwnProperty('success') && response[1].success === true) {
                  _this8.equipesVenda = response[1].data;

                  _this8.equipesVenda.unshift({
                    codEquipeVenda: 0,
                    dsEquipeVenda: 'EXIBIR TODOS',
                    codCarteira: null,
                    codSituacao: null,
                    situacao: null,
                    codUsuario: null,
                    nomeUsuario: null,
                    dataCadastro: null,
                    codReferenteErp: null
                  });
                } else {
                  _this8.pnotifyService.error();

                  _this8.location.back();
                }

                if (response[2].responseCode === 200) {
                  _this8.escritorios = response[2].result;

                  _this8.escritorios.unshift({
                    codEscritorio: 0,
                    nomeEscritorio: 'EXIBIR TODOS'
                  });
                } else {
                  _this8.pnotifyService.error();

                  _this8.location.back();
                }
              },
              error: function error(_error3) {
                _this8.pnotifyService.error();

                _this8.location.back();
              }
            });
          }
        }, {
          key: "loadDependencies",
          value: function loadDependencies() {
            var tipoOperadores = this.tipoOperadorService.getListaTipoOperador({
              codSituacao: 1
            });
            var equipesVenda = this.equipeVendaService.getListaEquipesVenda({
              codSituacao: 1
            });
            var escritorios = this.escritorioService.getEscritorios();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["forkJoin"])([tipoOperadores, equipesVenda, escritorios]);
          }
        }, {
          key: "setFormFilter",
          value: function setFormFilter() {
            var formValue = this.checkRouterParams();
            this.form = this.formBuilder.group({
              cpfCnpj: [formValue.cpfCnpj],
              rgIe: [formValue.rgIe],
              nomeOperador: [formValue.nomeOperador],
              codTipoOperador: [formValue.codTipoOperador],
              codEquipe: [formValue.codEquipe],
              codEscritorio: [formValue.codEscritorio],
              codSituacao: [formValue.codSituacao],
              orderBy: [formValue.orderBy],
              orderType: [formValue.orderType],
              pagina: [formValue.pagina],
              registros: [formValue.registros, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
            });
            this.checkOrder();
          }
        }, {
          key: "checkRouterParams",
          value: function checkRouterParams() {
            var _this9 = this;

            var formValue = {
              cpfCnpj: null,
              rgIe: null,
              nomeOperador: null,
              codTipoOperador: 0,
              codEquipe: 0,
              codEscritorio: 0,
              codSituacao: 0,
              orderBy: this.orderBy,
              orderType: this.orderType,
              pagina: 1,
              registros: this.itemsPerPage
            };
            this.activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (queryParams) {
              if (Object.keys(queryParams).length > 0) {
                var params = atob(queryParams['q']);
                params = JSON.parse(params);

                _this9.search(params);

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

            if (this.form.value.cpfCnpj) {
              params.cpfCnpj = this.form.value.cpfCnpj;
            }

            if (this.form.value.rgIe) {
              params.rgIe = this.form.value.rgIe;
            }

            if (this.form.value.nomeOperador) {
              params.nomeOperador = this.form.value.nomeOperador;
            }

            if (this.form.value.codTipoOperador) {
              params.codTipoOperador = this.form.value.codTipoOperador;
            }

            if (this.form.value.codEquipe) {
              params.codEquipe = this.form.value.codEquipe;
            }

            if (this.form.value.codEscritorio) {
              params.codEscritorio = this.form.value.codEscritorio;
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
            var _this10 = this;

            this.loaderNavbar = true;
            this.dados = [];
            this.dadosPagination = [];
            this.dadosLoaded = false;
            this.dadosEmpty = false;
            this.totalItems = 0;
            this.operadorComercialService.getListaOperadoresComerciais(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
              _this10.loaderNavbar = false;
              _this10.dadosLoaded = true;
            })).subscribe({
              next: function next(response) {
                if (response.hasOwnProperty('success') && response.success === true) {
                  _this10.dados = response.data;
                  _this10.dadosPagination = _this10.dados.slice(0, _this10.itemsPerPage);
                  _this10.totalItems = _this10.dados.length;
                  _this10.dadosLoaded = true;
                } else if (response.hasOwnProperty('success') && response.success === false) {
                  _this10.dadosEmpty = true;
                } else {
                  _this10.pnotifyService.error();

                  _this10.dadosEmpty = true;
                }
              },
              error: function error(_error4) {
                _this10.dadosEmpty = true;

                if (_error4.error.hasOwnProperty('mensagem')) {
                  _this10.pnotifyService.error(_error4.error.mensagem);
                } else {
                  _this10.pnotifyService.error();
                }
              }
            });
          }
        }, {
          key: "classStatusBorder",
          value: function classStatusBorder(operadorComercial) {
            var borderClass;

            if (operadorComercial.codSituacao === 1) {
              borderClass = 'border-success';
            } else if (operadorComercial.codSituacao === 2) {
              borderClass = 'border-danger';
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
          key: "onEdit",
          value: function onEdit(operadorComercial) {
            this.router.navigate(['../editar', operadorComercial.codOperador], {
              relativeTo: this.activatedRoute
            });
          }
        }, {
          key: "onActivate",
          value: function onActivate(index, operadorComercial) {
            var _this11 = this;

            this.confirmActivate().asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(function (result) {
              return result ? _this11.activateOperadorComercial(index, operadorComercial) : rxjs__WEBPACK_IMPORTED_MODULE_7__["EMPTY"];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
              _this11.loaderNavbar = false;
            })).subscribe(function (success) {
              _this11.pnotifyService.success();

              _this11.refreshMainData(operadorComercial);
            }, function (error) {
              _this11.pnotifyService.error();

              _this11.dadosPagination[index].codSituacao = 2;
            });
          }
        }, {
          key: "confirmActivate",
          value: function confirmActivate() {
            return this.confirmModalService.showConfirm(null, null, 'Deseja realmente prosseguir com a ativação do registro?', 'Cancelar', 'Confirmar');
          }
        }, {
          key: "activateOperadorComercial",
          value: function activateOperadorComercial(index, operadorComercial) {
            this.loaderNavbar = true;
            this.dadosPagination[index].codSituacao = 1;
            return this.operadorComercialService.activateOperadorComercial(operadorComercial.codOperador);
          }
        }, {
          key: "onInactivate",
          value: function onInactivate(index, operadorComercial) {
            var _this12 = this;

            this.confirmInactive().asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(function (result) {
              return result ? _this12.inactivateOperadorComercial(index, operadorComercial) : rxjs__WEBPACK_IMPORTED_MODULE_7__["EMPTY"];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
              _this12.loaderNavbar = false;
            })).subscribe(function (success) {
              _this12.pnotifyService.success();

              _this12.refreshMainData(operadorComercial);
            }, function (error) {
              _this12.pnotifyService.error();

              _this12.dadosPagination[index].codSituacao = 1;
            });
          }
        }, {
          key: "confirmInactive",
          value: function confirmInactive() {
            return this.confirmModalService.showConfirm('inactivate', 'Confirmar inativação', 'Deseja realmente prosseguir com a inativação do registro?', 'Cancelar', 'Confirmar');
          }
        }, {
          key: "inactivateOperadorComercial",
          value: function inactivateOperadorComercial(index, operadorComercial) {
            this.loaderNavbar = true;
            this.dadosPagination[index].codSituacao = 2;
            return this.operadorComercialService.inactivateOperadorComercial(operadorComercial.codOperador);
          }
        }, {
          key: "refreshMainData",
          value: function refreshMainData(operadorComercial) {
            for (var i = 0; i < this.dados.length; i++) {
              if (operadorComercial.codOperador === this.dados[i].codOperador) {
                this.dados[i].codSituacao = operadorComercial.codSituacao;
                return;
              }
            }
          }
        }]);

        return ComercialCadastrosOperadorComercialListaComponent;
      }();

      ComercialCadastrosOperadorComercialListaComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }, {
          type: _operadores_comerciais_service__WEBPACK_IMPORTED_MODULE_9__["ComercialCadastrosOperadorComercialService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__["AtividadesService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_12__["TitleService"]
        }, {
          type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_13__["ConfirmModalService"]
        }, {
          type: _tipo_operadores_tipo_operadores_service__WEBPACK_IMPORTED_MODULE_14__["ComercialCadastrosTipoOperadorService"]
        }, {
          type: _equipe_venda_equipe_venda_service__WEBPACK_IMPORTED_MODULE_15__["ComercialCadastrosEquipeVendaService"]
        }, {
          type: src_app_shared_services_requests_escritorios_service__WEBPACK_IMPORTED_MODULE_16__["EscritoriosService"]
        }];
      };

      ComercialCadastrosOperadorComercialListaComponent.propDecorators = {
        scrollToFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['scrollToFilter', {}]
        }]
      };
      ComercialCadastrosOperadorComercialListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-cadastros-operador-comercial-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _operadores_comerciais_service__WEBPACK_IMPORTED_MODULE_9__["ComercialCadastrosOperadorComercialService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__["AtividadesService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_12__["TitleService"], src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_13__["ConfirmModalService"], _tipo_operadores_tipo_operadores_service__WEBPACK_IMPORTED_MODULE_14__["ComercialCadastrosTipoOperadorService"], _equipe_venda_equipe_venda_service__WEBPACK_IMPORTED_MODULE_15__["ComercialCadastrosEquipeVendaService"], src_app_shared_services_requests_escritorios_service__WEBPACK_IMPORTED_MODULE_16__["EscritoriosService"]])], ComercialCadastrosOperadorComercialListaComponent);
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
    "UjmV":
    /*!************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/cadastros/operadores-comerciais/lista/lista.component.html ***!
      \************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function UjmV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\n<app-header appTitle=\"Operadores comerciais\">\n  <button\n    type=\"button\"\n    [routerLink]=\"['../novo']\">\n    Adicionar\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"onFilter()\">\n    Filtrar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\n  <div class=\"row\" #scrollToFilter>\n    <div class=\"col\">\n      <advanced-filter>\n        <form [formGroup]=\"form\" autocomplete=\"off\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-lg-2\">\n              <label for=\"cpfCnpj\">CPF/CNPJ</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"cpfCnpj\"\n                (keydown.enter)=\"onFilter()\">\n            </div>\n            <div class=\"form-group col-lg-2\">\n              <label for=\"rgIe\">RG/IE</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"rgIe\"\n                (keydown.enter)=\"onFilter()\">\n            </div>\n            <div class=\"form-group col-lg-6\">\n              <label for=\"nomeOperador\">Nome do operador</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"nomeOperador\"\n                (keydown.enter)=\"onFilter()\">\n            </div>\n            <div class=\"form-group col-lg-2\">\n              <label for=\"codTipoOperador\">Tipo de operador</label>\n              <ng-select\n                [searchable]=\"true\"\n                [clearable]=\"false\"\n                [items]=\"tipoOperadores\"\n                formControlName=\"codTipoOperador\"\n                [virtualScroll]=\"true\"\n                bindLabel=\"tipo\"\n                bindValue=\"codTipoOperador\">\n              </ng-select>\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-lg-3\">\n              <label for=\"codEquipe\">Equipe de venda</label>\n              <ng-select\n                [searchable]=\"true\"\n                [clearable]=\"false\"\n                [items]=\"equipesVenda\"\n                formControlName=\"codEquipe\"\n                [virtualScroll]=\"true\"\n                bindLabel=\"dsEquipeVenda\"\n                bindValue=\"codEquipeVenda\">\n              </ng-select>\n            </div>\n            <div class=\"form-group col-lg-3\">\n              <label for=\"codEscritorio\">Escritório</label>\n              <ng-select\n                [searchable]=\"true\"\n                [clearable]=\"false\"\n                [items]=\"escritorios\"\n                formControlName=\"codEscritorio\"\n                [virtualScroll]=\"true\"\n                bindLabel=\"nomeEscritorio\"\n                bindValue=\"codEscritorio\">\n              </ng-select>\n            </div>\n            <div class=\"form-group col-lg-3\">\n              <label for=\"codSituacao\">Situação</label>\n              <select\n                class=\"form-control custom-select\"\n                id=\"codSituacao\"\n                formControlName=\"codSituacao\">\n                <option value=\"0\">Todos</option>\n                <option value=\"1\">Ativos</option>\n                <option value=\"2\">Inativos</option>\n              </select>\n            </div>\n            <div class=\"form-group col-lg-3\">\n              <label for=\"registros\">Registros</label>\n              <select\n                class=\"form-control\"\n                id=\"registros\"\n                formControlName=\"registros\">\n                <option>25</option>\n                <option>50</option>\n                <option>100</option>\n                <option>200</option>\n                <option>300</option>\n              </select>\n            </div>\n          </div>\n        </form>\n      </advanced-filter>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <subtitles\n        [data]=\"subtitles\"\n        [show]=\"dadosPagination.length > 0 && !dadosEmpty\">\n      </subtitles>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <custom-table [config]=\"tableConfig\" *ngIf=\"dadosPagination.length > 0 && !dadosEmpty\">\n        <ng-template #thead let-thead>\n          <tr>\n            <th scope=\"col\" class=\"hover\">\n              <thead-sorter\n                value=\"Nome do operador\"\n                [active]=\"orderBy == 'nomeOperador'\"\n                [sort]=\"orderType\"\n                (click)=\"setOrderBy('nomeOperador')\">\n              </thead-sorter>\n            </th>\n            <th scope=\"col\" class=\"hover\">\n              <thead-sorter\n                value=\"Tipo\"\n                [active]=\"orderBy == 'descTipoOperador'\"\n                [sort]=\"orderType\"\n                (click)=\"setOrderBy('descTipoOperador')\">\n              </thead-sorter>\n            </th>\n            <th scope=\"col\" class=\"hover\">\n              <thead-sorter\n                value=\"Equipe\"\n                [active]=\"orderBy == 'nomeEquipe'\"\n                [sort]=\"orderType\"\n                (click)=\"setOrderBy('nomeEquipe')\">\n              </thead-sorter>\n            </th>\n            <th scope=\"col\" class=\"hover\">\n              <thead-sorter\n                value=\"Escritório\"\n                [active]=\"orderBy == 'nomeEscritorio'\"\n                [sort]=\"orderType\"\n                (click)=\"setOrderBy('nomeEscritorio')\">\n              </thead-sorter>\n            </th>\n            <th scope=\"col\"></th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr *ngFor=\"let operadorComercial of dadosPagination; let i = index\">\n            <td [ngClass]=\"classStatusBorder(operadorComercial)\">\n              {{ operadorComercial.nomeCompleto | uppercase }}\n            </td>\n            <td>{{ operadorComercial.descTipoOperador | uppercase }}</td>\n            <td>{{ operadorComercial.nomeEquipe | uppercase }}</td>\n            <td>{{ operadorComercial.nomeEscritorio | uppercase }}</td>\n            <td class=\"text-right\">\n              <span *ngIf=\"operadorComercial.codSituacao == 1\" class=\"mr-3\" tooltip=\"Inativar\" placement=\"left\" container=\"body\">\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onInactivate(i, operadorComercial)\">\n                  <i class=\"fas fa-toggle-on\"></i>\n                </button>\n              </span>\n              <span *ngIf=\"operadorComercial.codSituacao == 2\" class=\"mr-3\" tooltip=\"Ativar\" placement=\"left\" container=\"body\">\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onActivate(i, operadorComercial)\">\n                  <i class=\"fas fa-toggle-off\"></i>\n                </button>\n              </span>\n              <span class=\"mr-3\" tooltip=\"Editar\" placement=\"left\" container=\"body\">\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onEdit(operadorComercial)\">\n                  <i class=\"fas fa-edit\"></i>\n                </button>\n              </span>\n            </td>\n          </tr>\n        </ng-template>\n      </custom-table>\n      <empty-result\n        message=\"Nenhuma informação encontrada\"\n        class=\"my-3\"\n        *ngIf=\"dadosEmpty\">\n      </empty-result>\n      <div class=\"d-flex justify-content-center mt-3\" *ngIf=\"totalItems > itemsPerPage && dadosLoaded\">\n        <pagination\n          [maxSize]=\"maxSize\"\n          [(totalItems)]=\"totalItems\"\n          (pageChanged)=\"onPageChanged($event)\"\n          [(itemsPerPage)]=\"itemsPerPage\"\n          [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPage\"\n          previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\"\n          lastText=\"&raquo;\">\n        </pagination>\n      </div>\n    </div>\n  </div>\n</app-body>\n";
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
    "WJc9":
    /*!**********************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/operadores-comerciais/lista/lista.component.scss ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function WJc9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NhZGFzdHJvcy9vcGVyYWRvcmVzLWNvbWVyY2lhaXMvbGlzdGEvbGlzdGEuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "XcG9":
    /*!**********************************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/operadores-comerciais/associacoes/associacoes.component.scss ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function XcG9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NhZGFzdHJvcy9vcGVyYWRvcmVzLWNvbWVyY2lhaXMvYXNzb2NpYWNvZXMvYXNzb2NpYWNvZXMuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "c6R1":
    /*!********************************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/operadores-comerciais/formulario/formulario.component.scss ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function c6R1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NhZGFzdHJvcy9vcGVyYWRvcmVzLWNvbWVyY2lhaXMvZm9ybXVsYXJpby9mb3JtdWxhcmlvLmNvbXBvbmVudC5zY3NzIn0= */";
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
    "m3Ta":
    /*!********************************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/operadores-comerciais/associacoes/associacoes.component.ts ***!
      \********************************************************************************************************/

    /*! exports provided: ComercialCadastrosOperadorComercialAssociacoesComponent */

    /***/
    function m3Ta(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosOperadorComercialAssociacoesComponent", function () {
        return ComercialCadastrosOperadorComercialAssociacoesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_associacoes_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./associacoes.component.html */
      "Dr2I");
      /* harmony import */


      var _associacoes_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./associacoes.component.scss */
      "XcG9");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "ienR");
      /* harmony import */


      var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-bootstrap/chronos */
      "xj/R");
      /* harmony import */


      var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-bootstrap/locale */
      "0b5p");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/modules/confirm-modal/confirm-modal.service */
      "FOez");
      /* harmony import */


      var _operadores_comerciais_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../operadores-comerciais.service */
      "877+");
      /* harmony import */


      var _motivo_associacao_motivo_associacao_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../motivo-associacao/motivo-associacao.service */
      "n2Rm"); // ngx-bootstrap


      Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_9__["defineLocale"])('pt-br', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_10__["ptBrLocale"]); // Services

      var ComercialCadastrosOperadorComercialAssociacoesComponent = /*#__PURE__*/function () {
        function ComercialCadastrosOperadorComercialAssociacoesComponent(localeService, formBuilder, modalService, pnotifyService, confirmModalService, operadorComercialService, motivosAssociacaoService) {
          _classCallCheck(this, ComercialCadastrosOperadorComercialAssociacoesComponent);

          this.localeService = localeService;
          this.formBuilder = formBuilder;
          this.modalService = modalService;
          this.pnotifyService = pnotifyService;
          this.confirmModalService = confirmModalService;
          this.operadorComercialService = operadorComercialService;
          this.motivosAssociacaoService = motivosAssociacaoService;
          this.showModal = false;
          this.associacoes = [];
          this.associacoesLoaded = false;
          this.associacoesEmpty = false;
          this.historicoAssociacoes = [];
          this.historicoAssociacoesLoaded = false;
          this.dependenciesLoaded = false;
          this.operadores = [];
          this.motivosAssociacao = [];
          this.localeService.use('pt-br');
          this.bsConfig = Object.assign({}, {
            containerClass: 'theme-dark-blue'
          }, {
            adaptivePosition: true
          }, {
            showWeekNumbers: false
          });
          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialCadastrosOperadorComercialAssociacoesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.checkAssociacoes();
            this.setFormBuilder();
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.showModal.currentValue === true) {
              this.onAdd();
            }
          }
        }, {
          key: "setFormBuilder",
          value: function setFormBuilder() {
            this.form = this.formBuilder.group({
              operadores: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              motivoAssociacao: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              dataInicio: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              dataTermino: [null]
            });
          }
        }, {
          key: "checkAssociacoes",
          value: function checkAssociacoes() {
            if (this.codOperador !== null) {
              this.getAssociacoesOperadores();
            }
          }
        }, {
          key: "getAssociacoesOperadores",
          value: function getAssociacoesOperadores() {
            var _this13 = this;

            this.associacoes = [];
            this.associacoesEmpty = false;
            this.associacoesLoaded = false;
            this.historicoAssociacoes = [];
            this.historicoAssociacoesLoaded = false;
            this.operadorComercialService.getAssociacoesOperadores(this.codOperador).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
              _this13.associacoesLoaded = true;
            })).subscribe({
              next: function next(response) {
                if (response.hasOwnProperty('success') && response.success === true) {
                  _this13.associacoes = response.data;
                } else {
                  _this13.associacoesEmpty = true;
                }
              },
              error: function error(_error5) {
                _this13.associacoesEmpty = true;
              }
            });
          }
        }, {
          key: "onReloadAssociacoes",
          value: function onReloadAssociacoes() {
            this.getAssociacoesOperadores();
          }
        }, {
          key: "onAdd",
          value: function onAdd() {
            if (this.dependenciesLoaded === false) {
              this.getFormFields();
            } else {
              this.openModal(this.modalAssociacoes);
            }
          }
        }, {
          key: "getFormFields",
          value: function getFormFields() {
            var _this14 = this;

            this.showLoader = true;
            this.operadores = [];
            this.motivosAssociacao = [];
            this.loadDepencencies().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
              _this14.showLoader = false;
            })).subscribe({
              next: function next(response) {
                if (response[0].hasOwnProperty('success') && response[0].success === true) {
                  if (response[1].hasOwnProperty('success') && response[1].success === true) {
                    _this14.operadores = response[0].data;
                    _this14.motivosAssociacao = response[1].data;
                    _this14.dependenciesLoaded = true;

                    _this14.openModal(_this14.modalAssociacoes);
                  } else {
                    _this14.pnotifyService.error('A operação não pode ser realizada.');
                  }
                } else {
                  _this14.pnotifyService.error('A operação não pode ser realizada.');
                }
              },
              error: function error(_error6) {
                _this14.pnotifyService.error('A operação não pode ser realizada.');
              }
            });
          }
        }, {
          key: "loadDepencencies",
          value: function loadDepencencies() {
            var operadores = this.operadorComercialService.getListaOperadoresComerciais({
              codSituacao: 1
            });
            var motivosAssociacao = this.motivosAssociacaoService.getListaMotivosAssociacao({
              codSituacao: 1
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["forkJoin"])([operadores, motivosAssociacao]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1));
          }
        }, {
          key: "onDelete",
          value: function onDelete(associacaoOperadorComercial) {
            var _this15 = this;

            this.confirmDelete().asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (result) {
              return result ? _this15.deleteAssociacaoOperador(associacaoOperadorComercial) : rxjs__WEBPACK_IMPORTED_MODULE_6__["EMPTY"];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
              _this15.showLoader = false;
            })).subscribe(function (success) {
              _this15.pnotifyService.success();

              _this15.onReloadAssociacoes();
            }, function (error) {
              _this15.pnotifyService.error();
            });
          }
        }, {
          key: "confirmDelete",
          value: function confirmDelete() {
            return this.confirmModalService.showConfirm('inactivate', 'Confirmar inativação', 'Deseja realmente prosseguir com a inativação da associação?', 'Cancelar', 'Confirmar');
          }
        }, {
          key: "deleteAssociacaoOperador",
          value: function deleteAssociacaoOperador(associacaoOperadorComercial) {
            this.showLoader = true;
            return this.operadorComercialService.deleteAssociacaoOperador({
              codAssociacao: associacaoOperadorComercial.codAssociacao,
              codOperador: associacaoOperadorComercial.codOperador
            });
          }
        }, {
          key: "openModal",
          value: function openModal(template, customClass) {
            var config = {
              keyboard: false,
              ignoreBackdropClick: true
            };

            if (customClass) {
              Object.assign(config, {
                "class": customClass
              });
            }

            this.modalRef = this.modalService.show(template, config);
          }
        }, {
          key: "hideModal",
          value: function hideModal() {
            this.modalRef.hide();
            this.form.reset();
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
            var _this16 = this;

            if (this.form.valid) {
              this.submittingForm = true;
              this.operadorComercialService.postAssociacaoOperador(Object.assign(this.form.value, {
                codOperador: this.codOperador
              })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
                _this16.submittingForm = false;
              })).subscribe({
                next: function next(response) {
                  if (response.hasOwnProperty('mensagem') && response.hasOwnProperty('success') && response.success === true) {
                    _this16.pnotifyService.success(response.mensagem);

                    _this16.hideModal();

                    _this16.getAssociacoesOperadores();
                  } else if (response.hasOwnProperty('mensagem') && response.hasOwnProperty('success') && response.success === false) {
                    _this16.pnotifyService.notice(response.mensagem);
                  } else {
                    _this16.pnotifyService.error();
                  }
                },
                error: function error(_error7) {
                  _this16.pnotifyService.error();
                }
              });
            }
          }
        }, {
          key: "onHistorico",
          value: function onHistorico() {
            var _this17 = this;

            if (this.historicoAssociacoesLoaded === false) {
              this.showLoader = true;
              this.operadorComercialService.getHistoricoAssociacoes(this.codOperador).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
                _this17.showLoader = false;
              })).subscribe({
                next: function next(response) {
                  if (response.hasOwnProperty('mensagem') && response.hasOwnProperty('success') && response.success === true) {
                    _this17.historicoAssociacoes = response.data;
                    _this17.historicoAssociacoesLoaded = true;

                    _this17.openModal(_this17.modalHistoricoAssociacoes, 'modal-xxl');
                  } else if (response.hasOwnProperty('mensagem') && response.hasOwnProperty('success') && response.success === false) {
                    _this17.pnotifyService.notice(response.mensagem);
                  } else {
                    _this17.pnotifyService.error();
                  }
                },
                error: function error(_error8) {
                  _this17.pnotifyService.error();
                }
              });
            } else {
              this.openModal(this.modalHistoricoAssociacoes, 'modal-xxl');
            }
          }
        }]);

        return ComercialCadastrosOperadorComercialAssociacoesComponent;
      }();

      ComercialCadastrosOperadorComercialAssociacoesComponent.ctorParameters = function () {
        return [{
          type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsLocaleService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["BsModalService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"]
        }, {
          type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_12__["ConfirmModalService"]
        }, {
          type: _operadores_comerciais_service__WEBPACK_IMPORTED_MODULE_13__["ComercialCadastrosOperadorComercialService"]
        }, {
          type: _motivo_associacao_motivo_associacao_service__WEBPACK_IMPORTED_MODULE_14__["ComercialCadastrosMotivoAssociacaoService"]
        }];
      };

      ComercialCadastrosOperadorComercialAssociacoesComponent.propDecorators = {
        codOperador: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['codOperador']
        }],
        showModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['showModal']
        }],
        modalAssociacoes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['modalAssociacoes', {}]
        }],
        modalHistoricoAssociacoes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['modalHistoricoAssociacoes', {}]
        }]
      };
      ComercialCadastrosOperadorComercialAssociacoesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-cadastros-operadores-comerciais-associacoes',
        template: _raw_loader_associacoes_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_associacoes_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsLocaleService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["BsModalService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"], src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_12__["ConfirmModalService"], _operadores_comerciais_service__WEBPACK_IMPORTED_MODULE_13__["ComercialCadastrosOperadorComercialService"], _motivo_associacao_motivo_associacao_service__WEBPACK_IMPORTED_MODULE_14__["ComercialCadastrosMotivoAssociacaoService"]])], ComercialCadastrosOperadorComercialAssociacoesComponent);
      /***/
    },

    /***/
    "oYlE":
    /*!**********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/cadastros/operadores-comerciais/formulario/formulario.component.html ***!
      \**********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function oYlE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\n<app-header [appTitle]=\"appTitle\">\n  <button\n    type=\"button\"\n    (click)=\"onCancel()\"\n    [disabled]=\"submittingForm\">\n    Cancelar\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"onSubmit()\"\n    [disabled]=\"!form.valid || submittingForm\">\n    Salvar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-lg-5\">\n      <form [formGroup]=\"form\">\n        <div class=\"form-row\">\n          <div class=\"form-group col-lg-6\">\n            <label for=\"nomeOperador\">Nome</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"nomeOperador\"\n              formControlName=\"nomeOperador\"\n              (input)=\"onInput()\"\n              autocomplete=\"new-password\"\n              [ngClass]=\"onFieldError('nomeOperador') + ' ' + onFieldRequired(form.controls.nomeOperador)\">\n            <invalid-form-control [show]=\"onFieldInvalid('nomeOperador')\" message=\"Nome é obrigatório.\"></invalid-form-control>\n          </div>\n          <div class=\"form-group col-lg-6\">\n            <label for=\"sobrenomeOperador\">Sobrenome</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"sobrenomeOperador\"\n              formControlName=\"sobrenomeOperador\"\n              (input)=\"onInput()\"\n              autocomplete=\"new-password\"\n              [ngClass]=\"onFieldError('sobrenomeOperador') + ' ' + onFieldRequired(form.controls.sobrenomeOperador)\">\n            <invalid-form-control [show]=\"onFieldInvalid('sobrenomeOperador')\" message=\"Sobrenome é obrigatório.\"></invalid-form-control>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-lg-6\">\n            <label for=\"codTipoOperador\">Tipo de operador</label>\n            <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"false\"\n              [items]=\"tipoOperadores\"\n              formControlName=\"codTipoOperador\"\n              [virtualScroll]=\"true\"\n              bindLabel=\"tipo\"\n              bindValue=\"codTipoOperador\"\n              [ngClass]=\"onFieldError('codTipoOperador') + ' ' + onFieldRequired(form.controls.codTipoOperador)\">\n            </ng-select>\n            <invalid-form-control [show]=\"onFieldInvalid('codTipoOperador')\" message=\"Tipo de operador é obrigatório.\"></invalid-form-control>\n          </div>\n          <div class=\"form-group col-lg-6\">\n            <label for=\"codSituacao\">Situação</label>\n            <select\n              class=\"form-control custom-select\"\n              id=\"codSituacao\"\n              formControlName=\"codSituacao\"\n              [ngClass]=\"onFieldError('codSituacao') + ' ' + onFieldRequired(form.controls.codSituacao)\">\n              <option value=\"1\">Ativo</option>\n              <option value=\"2\">Inativo</option>\n            </select>\n            <invalid-form-control [show]=\"onFieldInvalid('codSituacao')\" message=\"Situação é obrigatório.\"></invalid-form-control>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-lg-6\">\n            <label for=\"codEquipe\">Equipe de vendas</label>\n            <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"false\"\n              [items]=\"equipesVenda\"\n              formControlName=\"codEquipe\"\n              [virtualScroll]=\"true\"\n              bindLabel=\"dsEquipeVenda\"\n              bindValue=\"codEquipeVenda\"\n              [ngClass]=\"onFieldError('codEquipe') + ' ' + onFieldRequired(form.controls.codEquipe)\">\n            </ng-select>\n            <invalid-form-control [show]=\"onFieldInvalid('codEquipe')\" message=\"Equipe de venda é obrigatório.\"></invalid-form-control>\n          </div>\n          <div class=\"form-group col-lg-6\">\n            <label for=\"codEscritorio\">Escritório</label>\n            <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"false\"\n              [items]=\"escritorios\"\n              formControlName=\"codEscritorio\"\n              [virtualScroll]=\"true\"\n              bindLabel=\"nome\"\n              bindValue=\"id\"\n              [ngClass]=\"onFieldError('codEscritorio') + ' ' + onFieldRequired(form.controls.codEscritorio)\">\n            </ng-select>\n            <invalid-form-control [show]=\"onFieldInvalid('codEscritorio')\" message=\"Escritório é obrigatório.\"></invalid-form-control>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-12\">\n            <label>Tipo de pessoa</label>\n          </div>\n          <div class=\"form-group col-12\">\n            <div class=\"custom-control custom-radio custom-control-inline\" (click)=\"setType('F')\">\n              <input\n                type=\"radio\"\n                id=\"tipoPessoaF\"\n                name=\"tipoPessoa\"\n                class=\"custom-control-input\"\n                value=\"F\"\n                formControlName=\"tipoPessoa\">\n              <label class=\"custom-control-label\" for=\"tipoPessoaF\">Pessoa física</label>\n            </div>\n            <div class=\"custom-control custom-radio custom-control-inline\" (click)=\"setType('J')\">\n              <input\n                type=\"radio\"\n                id=\"tipoPessoaJ\"\n                name=\"tipoPessoa\"\n                class=\"custom-control-input\"\n                value=\"J\"\n                formControlName=\"tipoPessoa\">\n              <label class=\"custom-control-label\" for=\"tipoPessoaJ\">Pessoa jurídica</label>\n            </div>\n            <invalid-form-control [show]=\"onFieldInvalid('tipoPessoa')\" message=\"Tipo de pessoa é obrigatório.\"></invalid-form-control>\n          </div>\n        </div>\n        <div class=\"form-row\" *ngIf=\"form.value.tipoPessoa === 'F'\">\n          <div class=\"form-group col-lg-6\">\n            <label for=\"cpf\">CPF</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"cpf\"\n              formControlName=\"cpf\"\n              (input)=\"onInput()\"\n              autocomplete=\"new-password\"\n              [ngClass]=\"onFieldError('cpf') + ' ' + onFieldRequired(form.controls.cpf)\"\n              cpf [textMask]=\"{ mask: MASKS.cpf.textMask }\">\n            <invalid-form-control [show]=\"onFieldInvalid('cpf')\" message=\"CPF é obrigatório.\"></invalid-form-control>\n          </div>\n          <div class=\"form-group col-lg-6\">\n            <label for=\"rg\">RG</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"rg\"\n              formControlName=\"rg\"\n              (input)=\"onInput()\"\n              autocomplete=\"new-password\"\n              [ngClass]=\"onFieldError('rg') + ' ' + onFieldRequired(form.controls.rg)\">\n            <invalid-form-control [show]=\"onFieldInvalid('rg')\" message=\"RG é obrigatório.\"></invalid-form-control>\n          </div>\n        </div>\n        <div class=\"form-row\" *ngIf=\"form.value.tipoPessoa === 'J'\">\n          <div class=\"form-group col-lg-6\">\n            <label for=\"cnpj\">CNPJ</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"cnpj\"\n              formControlName=\"cnpj\"\n              (input)=\"onInput()\"\n              autocomplete=\"new-password\"\n              [ngClass]=\"onFieldError('cnpj') + ' ' + onFieldRequired(form.controls.cnpj)\"\n              cnpj [textMask]=\"{ mask: MASKS.cnpj.textMask }\">\n            <invalid-form-control [show]=\"onFieldInvalid('cnpj')\" message=\"CNPJ é obrigatório.\"></invalid-form-control>\n          </div>\n          <div class=\"form-group col-lg-6\">\n            <label for=\"ie\">Inscrição estadual</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"ie\"\n              formControlName=\"ie\"\n              (input)=\"onInput()\"\n              autocomplete=\"new-password\"\n              [ngClass]=\"onFieldError('ie') + ' ' + onFieldRequired(form.controls.ie)\">\n            <invalid-form-control [show]=\"onFieldInvalid('ie')\" message=\"Inscrição estadual é obrigatório.\"></invalid-form-control>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-lg-6\">\n            <label for=\"telefone\">Telefone</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"telefone\"\n              formControlName=\"telefone\"\n              (input)=\"onInput()\"\n              autocomplete=\"new-password\"\n              [ngClass]=\"onFieldError('telefone') + ' ' + onFieldRequired(form.controls.telefone)\"\n              telefone [textMask]=\"{ mask: MASKS.telefone.textMaskFunction }\">\n            <invalid-form-control [show]=\"onFieldInvalid('telefone')\" message=\"Telefone é obrigatório.\"></invalid-form-control>\n          </div>\n          <div class=\"form-group col-lg-6\">\n            <label for=\"celular\">Celular</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"celular\"\n              formControlName=\"celular\"\n              (input)=\"onInput()\"\n              autocomplete=\"new-password\"\n              [ngClass]=\"onFieldError('celular') + ' ' + onFieldRequired(form.controls.celular)\"\n              telefone [textMask]=\"{ mask: MASKS.telefone.textMaskFunction }\">\n            <invalid-form-control [show]=\"onFieldInvalid('celular')\" message=\"Celular é obrigatório.\"></invalid-form-control>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col\">\n            <label for=\"email\">E-mail</label>\n            <input\n              type=\"email\"\n              class=\"form-control\"\n              id=\"email\"\n              formControlName=\"email\"\n              (input)=\"onInput()\"\n              autocomplete=\"new-password\"\n              [ngClass]=\"onFieldError('email') + ' ' + onFieldRequired(form.controls.email)\">\n            <invalid-form-control [show]=\"onFieldInvalid('email')\" message=\"E-mail é obrigatório.\"></invalid-form-control>\n          </div>\n        </div>\n        <div formGroupName=\"endereco\">\n          <div class=\"form-row\">\n            <div class=\"form-group col\"><hr></div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col\">\n              <div class=\"mtc-title\">Endereço</div>\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-lg-6\">\n              <label for=\"cep\">CEP</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"cep\"\n                formControlName=\"cep\"\n                (input)=\"onInput(); onInputCep();\"\n                autocomplete=\"new-password\"\n                [ngClass]=\"onFieldError('endereco.cep') + ' ' + onFieldRequired(form.controls.endereco, 'cep')\"\n                cep [textMask]=\"{mask: MASKS.cep.textMask}\">\n              <invalid-form-control [show]=\"onFieldInvalid('endereco.cep')\" message=\"CEP é obrigatório.\"></invalid-form-control>\n            </div>\n            <div class=\"form-group col-lg-6\">\n              <label for=\"logradouro\">Endereço</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"logradouro\"\n                formControlName=\"logradouro\"\n                (input)=\"onInput()\"\n                autocomplete=\"new-password\"\n                [ngClass]=\"onFieldError('endereco.logradouro') + ' ' + onFieldRequired(form.controls.endereco, 'logradouro')\">\n              <invalid-form-control [show]=\"onFieldInvalid('endereco.logradouro')\" message=\"Endereço é obrigatório.\"></invalid-form-control>\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-lg-6\">\n              <label for=\"numero\">Número</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"numero\"\n                formControlName=\"numero\"\n                (input)=\"onInput()\"\n                autocomplete=\"new-password\"\n                [ngClass]=\"onFieldError('endereco.numero') + ' ' + onFieldRequired(form.controls.endereco, 'numero')\">\n              <invalid-form-control [show]=\"onFieldInvalid('endereco.numero')\" message=\"Número é obrigatório.\"></invalid-form-control>\n            </div>\n            <div class=\"form-group col-lg-6\">\n              <label for=\"complemento\">Complemento</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"complemento\"\n                formControlName=\"complemento\"\n                autocomplete=\"new-password\">\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-lg-6\">\n              <label for=\"referencia\">Referência</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"referencia\"\n                formControlName=\"referencia\"\n                autocomplete=\"new-password\">\n            </div>\n            <div class=\"form-group col-lg-6\">\n              <label for=\"bairro\">Bairro</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"bairro\"\n                formControlName=\"bairro\"\n                (input)=\"onInput()\"\n                autocomplete=\"new-password\"\n                [ngClass]=\"onFieldError('endereco.bairro') + ' ' + onFieldRequired(form.controls.endereco, 'bairro')\">\n              <invalid-form-control [show]=\"onFieldInvalid('endereco.bairro')\" message=\"Bairro é obrigatório.\"></invalid-form-control>\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-lg-6\">\n              <label for=\"numero\">Cidade</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"cidade\"\n                formControlName=\"cidade\"\n                (input)=\"onInput()\"\n                [ngClass]=\"onFieldError('endereco.cidade') + ' ' + onFieldRequired(form.controls.endereco, 'cidade')\">\n              <invalid-form-control [show]=\"onFieldInvalid('endereco.cidade')\" message=\"Cidade é obrigatório.\"></invalid-form-control>\n            </div>\n            <div class=\"form-group col-lg-6\">\n              <label for=\"estado\">Estado</label>\n              <select\n                class=\"form-control\"\n                id=\"estado\"\n                formControlName=\"estado\"\n                (change)=\"onInput()\"\n                [ngClass]=\"onFieldError('endereco.estado') + ' ' + onFieldRequired(form.controls.endereco, 'estado')\">\n                <option value=\"\">SELECIONE UMA OPÇÃO</option>\n                <option *ngFor=\"let item of estados\" [value]=\"item.sigla\">{{ item.descricao }}</option>\n              </select>\n              <invalid-form-control [show]=\"onFieldInvalid('endereco.estado')\" message=\"Estado é obrigatório.\"></invalid-form-control>\n            </div>\n          </div>\n        </div>\n        <div formGroupName=\"dadosBancarios\">\n          <div class=\"form-row\">\n            <div class=\"form-group col\"><hr></div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col\">\n              <div class=\"mtc-title\">Dados bancários</div>\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col\">\n              <label for=\"banco\">Banco</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"banco\"\n                formControlName=\"banco\"\n                (input)=\"onInput()\"\n                autocomplete=\"new-password\">\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-lg-6\">\n              <label for=\"agencia\">Agência</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"agencia\"\n                formControlName=\"agencia\"\n                (input)=\"onInput()\"\n                autocomplete=\"new-password\">\n            </div>\n            <div class=\"form-group col-lg-6\">\n              <label for=\"contaCorrente\">Conta corrente</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"contaCorrente\"\n                formControlName=\"contaCorrente\"\n                (input)=\"onInput()\"\n                autocomplete=\"new-password\">\n            </div>\n          </div>\n        </div>\n        <div>\n          <div class=\"form-row\">\n            <div class=\"form-group col\"><hr></div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col\">\n              <div class=\"mtc-title\">Contrato</div>\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-lg-6\">\n              <label for=\"dataInicioContrato\">Início</label>\n              <input\n                class=\"form-control\"\n                id=\"dataInicioContrato\"\n                type=\"text\"\n                bsDatepicker\n                [bsConfig]=\"bsConfig\"\n                formControlName=\"dataInicioContrato\"\n                [ngClass]=\"onFieldError('dataInicioContrato') + ' ' + onFieldRequired(form.controls.dataInicioContrato)\">\n              <invalid-form-control [show]=\"onFieldInvalid('dataInicioContrato')\" message=\"Início do contrato é obrigatório.\"></invalid-form-control>\n            </div>\n            <div class=\"form-group col-lg-6\">\n              <label for=\"dataFinalContrato\">Término</label>\n              <input\n                class=\"form-control\"\n                id=\"dataFinalContrato\"\n                type=\"text\"\n                bsDatepicker\n                [bsConfig]=\"bsConfig\"\n                formControlName=\"dataFinalContrato\">\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n  <div *ngIf=\"codOperador !== null\">\n    <comercial-cadastros-operadores-comerciais-associacoes\n      [codOperador]=\"codOperador\"\n      [showModal]=\"showModalAssociacoes\">\n    </comercial-cadastros-operadores-comerciais-associacoes>\n  </div>\n</app-body>\n";
      /***/
    },

    /***/
    "xxq8":
    /*!***************************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/operadores-comerciais/operadores-comerciais.module.ts ***!
      \***************************************************************************************************/

    /*! exports provided: ComercialCadastrosOperadorComercialModule */

    /***/
    function xxq8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosOperadorComercialModule", function () {
        return ComercialCadastrosOperadorComercialModule;
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


      var angular2_text_mask__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! angular2-text-mask */
      "UVXo");
      /* harmony import */


      var angular2_text_mask__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var ng_brazil__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng-brazil */
      "hTrW");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _operadores_comerciais_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./operadores-comerciais-routing.module */
      "23UM");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./lista/lista.component */
      "RUuT");
      /* harmony import */


      var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./formulario/formulario.component */
      "QgDs");
      /* harmony import */


      var _associacoes_associacoes_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./associacoes/associacoes.component */
      "m3Ta"); // ngx-bootstrap
      // ng-select
      // ng-brazil
      // PNotify
      // Modules
      // Components


      var ComercialCadastrosOperadorComercialModule = function ComercialCadastrosOperadorComercialModule() {
        _classCallCheck(this, ComercialCadastrosOperadorComercialModule);
      };

      ComercialCadastrosOperadorComercialModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_lista_lista_component__WEBPACK_IMPORTED_MODULE_14__["ComercialCadastrosOperadorComercialListaComponent"], _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_15__["ComercialCadastrosOperadorComercialFormularioComponent"], _associacoes_associacoes_component__WEBPACK_IMPORTED_MODULE_16__["ComercialCadastrosOperadorComercialAssociacoesComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"].forRoot(), ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(), ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsDatepickerModule"].forRoot(), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"], angular2_text_mask__WEBPACK_IMPORTED_MODULE_8__["TextMaskModule"], ng_brazil__WEBPACK_IMPORTED_MODULE_9__["NgBrazil"], _operadores_comerciais_routing_module__WEBPACK_IMPORTED_MODULE_11__["ComercialCadastrosOperadorComercialModuleRoutingModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_13__["TemplatesModule"]],
        providers: [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"]]
      })], ComercialCadastrosOperadorComercialModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=operadores-comerciais-operadores-comerciais-module-es5.js.map