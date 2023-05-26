(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nivel-estoque-deposito-new-nivel-estoque-deposito-new-module"], {
    /***/
    "9wJI":
    /*!******************************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/cadastros/nivel-estoque-deposito-new/nivel-estoque-deposito-new.service.ts ***!
      \******************************************************************************************************************/

    /*! exports provided: AbastecimentoCadastrosNivelEstoqueDepositoNewService */

    /***/
    function wJI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastrosNivelEstoqueDepositoNewService", function () {
        return AbastecimentoCadastrosNivelEstoqueDepositoNewService;
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

      var AbastecimentoCadastrosNivelEstoqueDepositoNewService = /*#__PURE__*/function () {
        function AbastecimentoCadastrosNivelEstoqueDepositoNewService(httpClient) {
          _classCallCheck(this, AbastecimentoCadastrosNivelEstoqueDepositoNewService);

          this.httpClient = httpClient;
          this.BASE_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API;
        }

        _createClass(AbastecimentoCadastrosNivelEstoqueDepositoNewService, [{
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
          key: "getMateriais",
          value: function getMateriais(idClasses, idTipoMaterial, idSituacao) {
            if (!idClasses) idClasses = "";
            if (!idTipoMaterial) idTipoMaterial = "";
            return this.httpClient.get("".concat(this.BASE_URL, "/common/v2/materiais"), {
              params: {
                ID_CLAS: idClasses.toString(),
                ID_APOI_TIPO_MATE: idTipoMaterial.toString(),
                IN_STAT: idSituacao
              },
              observe: "response"
            });
          }
        }, {
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
          key: "getDepositosAssociados",
          value: function getDepositosAssociados(idSituacao, idClasse, idTipoMaterial) {
            return this.httpClient.get("".concat(this.BASE_URL, "/abastecimento/cadastros/depositos-associados-materiais"), {
              params: {
                IN_STAT: idSituacao,
                ID_CLAS: idClasse,
                ID_APOI_TIPO_MATE: idTipoMaterial
              },
              observe: "response"
            });
          }
        }, {
          key: "getNiveisEstoque",
          value: function getNiveisEstoque(params) {
            return this.httpClient.get("".concat(this.BASE_URL, "/abastecimento/cadastros/nivel-estoque-materiais"), {
              params: {
                ID_MATE: params["ID_MATE"].toString(),
                ID_LINH: params["ID_LINH"].toString(),
                ID_SUB_LINH: params["ID_SUB_LINH"].toString(),
                ID_CLAS: params["ID_CLAS"].toString(),
                ID_APOI_TIPO_MATE: params["ID_APOI_TIPO_MATE"].toString(),
                SITU_CADA_NIVE_ESTO: params["SITU_CADA_NIVE_ESTO"],
                IN_GERA_RELA: params["IN_GERA_RELA"],
                ID_USUA: params["ID_USUA"]
              },
              observe: "response"
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
          }
        }, {
          key: "getNiveisEstoqueUnidades",
          value: function getNiveisEstoqueUnidades(params) {
            return this.httpClient.get("".concat(this.BASE_URL, "/abastecimento/cadastros/nivel-estoque-material-depositos"), {
              params: params,
              observe: "response"
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
          }
        }, {
          key: "postNivelEstoque",
          value: function postNivelEstoque(record) {
            return this.httpClient.post("".concat(this.BASE_URL, "/abastecimento/cadastros/nivel-estoque-material-depositos"), record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
          }
        }, {
          key: "updateNivelEstoque",
          value: function updateNivelEstoque(record) {
            return this.httpClient.post("".concat(this.BASE_URL, "/abastecimento/cadastros/deposito-associado-material-alterar"), record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
          }
        }, {
          key: "deleteNivelEstoque",
          value: function deleteNivelEstoque(record) {
            var options = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
              }),
              body: record
            };
            return this.httpClient["delete"]("".concat(this.BASE_URL, "/abastecimento/cadastros/nivel-estoque-material-deposito"), options);
          }
        }, {
          key: "getLogs",
          value: function getLogs(params) {
            return this.httpClient.get("".concat(this.BASE_URL, "/abastecimento/cadastros/nivel-estoque-material-deposito-auditoria"), {
              params: params,
              observe: "response"
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
          }
        }]);

        return AbastecimentoCadastrosNivelEstoqueDepositoNewService;
      }();

      AbastecimentoCadastrosNivelEstoqueDepositoNewService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      AbastecimentoCadastrosNivelEstoqueDepositoNewService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], AbastecimentoCadastrosNivelEstoqueDepositoNewService);
      /***/
    },

    /***/
    "AcPB":
    /*!*************************************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/cadastros/nivel-estoque-deposito-new/nivel-estoque-deposito-new-routing.module.ts ***!
      \*************************************************************************************************************************/

    /*! exports provided: AbastecimentoCadastrosNivelEstoqueDepositoNewRoutingModule */

    /***/
    function AcPB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastrosNivelEstoqueDepositoNewRoutingModule", function () {
        return AbastecimentoCadastrosNivelEstoqueDepositoNewRoutingModule;
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
      "JXA/");
      /* harmony import */


      var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./cadastro/cadastro.component */
      "PZqA");

      var routes = [{
        path: '',
        children: [{
          path: 'lista',
          component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_3__["AbastecimentoCadastrosNivelEstoqueDepositoNewListaComponent"]
        }, {
          path: 'cadastro',
          component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__["AbastecimentoCadastrosNivelEstoqueDepositoNewCadastroComponent"]
        }, {
          path: '',
          redirectTo: 'lista',
          pathMatch: 'full'
        }]
      }];

      var AbastecimentoCadastrosNivelEstoqueDepositoNewRoutingModule = function AbastecimentoCadastrosNivelEstoqueDepositoNewRoutingModule() {
        _classCallCheck(this, AbastecimentoCadastrosNivelEstoqueDepositoNewRoutingModule);
      };

      AbastecimentoCadastrosNivelEstoqueDepositoNewRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AbastecimentoCadastrosNivelEstoqueDepositoNewRoutingModule);
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
    "FRzv":
    /*!***************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/abastecimento/cadastros/nivel-estoque-deposito-new/cadastro/cadastro.component.html ***!
      \***************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function FRzv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\n<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<app-header appTitle=\"Cadastro\">\n  <button\n    type=\"button\"\n    (click)=\"onSave()\"\n    [disabled]=\"form.status == 'INVALID' || !validatorsSave()\"\n  >\n    Salvar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\n  <div class=\"container\">\n    <div class=\"col-md-12\">\n      <div class=\"row justify-content-md-center mt-3\">\n        <div class=\"col-md-7\">\n          <div class=\"row\">\n            <div class=\"col-md-3\">\n              <p class=\"pFont\">\n                <strong>CÓDIGO</strong><br />\n                {{ idErpMaterial }}\n              </p>\n            </div>\n            <div class=\"col-md-6\">\n              <p class=\"pFont\">\n                <strong>MATERIAL</strong><br />\n                {{ descMaterial }}\n              </p>\n            </div>\n            <div class=\"col-md-3\">\n              <p class=\"pFont\">\n                <strong>TIPO DE MATERIAL</strong><br />\n                {{ tipoMaterial }}\n              </p>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-3\">\n              <p class=\"pFont\">\n                <strong>LINHA</strong><br />\n               {{ linha }}\n              </p>\n            </div>\n            <div class=\"col-md-6\">\n              <p class=\"pFont\">\n                <strong>SUBLINHA</strong><br />\n               {{ subLinha ? subLinha : \"-\"}}\n              </p>\n            </div>\n            <div class=\"col-md-3\">\n              <p class=\"pFont\">\n                <strong>CLASSE</strong><br />\n                {{ classe }}\n              </p>\n            </div>\n          </div>\n          <form [formGroup]=\"form\" autocomplete=\"off\">\n            <div class=\"form-row\">\n              <div class=\"form-group col-lg-6 mb-lg-0\">\n                <label for=\"deposito\">Depósitos</label>\n                <ng-select\n                  [searchable]=\"true\"\n                  [clearable]=\"true\"\n                  [multiple]=\"true\"\n                  [items]=\"depositos\"\n                  [virtualScroll]=\"true\"\n                  [hideSelected]=\"true\"\n                  [closeOnSelect]=\"false\"\n                  placeholder=\"Selecione...\"\n                  bindLabel=\"NM_DEPO\"\n                  bindValue=\"ID_DEPO\"\n                  formControlName=\"deposito\"\n                  [ngClass]=\"\n                  onFieldError('deposito') + ' ' + onFieldRequired('deposito')\n                \"\n                >\n                </ng-select>\n                <invalid-form-control\n                  [show]=\"onFieldInvalid('deposito')\"\n                  message=\"É necessário inserir depósito\"\n                >\n                </invalid-form-control>\n              </div>\n              <div class=\"form-group col-lg-6 mb-lg-0\">\n                <label for=\"estoqueMinimo\">Estoque mínimo</label>\n                <input\n                  class=\"form-control\"\n                  currencyMask [options]=\"ton\" placeholder=\"0,000\"\n                  formControlName=\"volumeMinimo\"\n                  [ngClass]=\"\n                  onFieldError('volumeMinimo') + ' ' + onFieldRequired('volumeMinimo')\n                \"\n                />\n                <invalid-form-control\n                  [show]=\"onFieldInvalid('volumeMinimo')\"\n                  message=\"É necessário inserir volume mínimo\"\n                >\n                </invalid-form-control>\n                <invalid-form-control\n                  [show]=\"compareValues('volumeMinimo')\"\n                  message=\"Deve ser menor que volume máximo ou segurança\"\n                  >\n                </invalid-form-control>\n              </div>\n            </div>\n            <div class=\"form-row\">\n              <div class=\"form-group col-lg-6 mb-lg-0\">\n                <label for=\"estoqueSeguranca\">Estoque segurança</label>\n                <input\n                  class=\"form-control\"\n                  currencyMask [options]=\"ton\" placeholder=\"0,000\"\n                  formControlName=\"volumeSeguranca\"\n                  [ngClass]=\"\n                  onFieldError('volumeSeguranca') + ' ' + onFieldRequired('volumeSeguranca')\n                \"\n                />\n                <invalid-form-control\n                  [show]=\"onFieldInvalid('volumeSeguranca')\"\n                  message=\"É necessário inserir volume segurança\"\n                >\n                </invalid-form-control>\n                <invalid-form-control\n                  [show]=\"compareValues('volumeSeguranca')\"\n                  message=\"Deve ser menor que máximo ou maior que mínimo\"\n                  >\n                </invalid-form-control>\n              </div>\n              <div class=\"form-group col-lg-6 mb-lg-0\">\n                <label for=\"estoqueMaximo\">Estoque máximo</label>\n                <input\n                  class=\"form-control\"\n                  currencyMask [options]=\"ton\" placeholder=\"0,000\"\n                  formControlName=\"volumeMaximo\"\n                  [ngClass]=\"\n                  onFieldError('volumeMaximo') + ' ' + onFieldRequired('volumeMaximo')\n                \"\n                />\n                <invalid-form-control\n                  [show]=\"onFieldInvalid('volumeMaximo')\"\n                  message=\"É necessário inserir vulume máximo\"\n                >\n                </invalid-form-control>\n                <invalid-form-control\n                  [show]=\"compareValues('volumeMaximo')\"\n                  message=\"Deve ser maior que mínimo ou segurança\"\n                >\n                </invalid-form-control>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n      <div\n        class=\"row justify-content-md-center mt-3\"\n        *ngIf=\"!noResult\"\n        >\n        <div class=\"form-group col-md-7\">\n          <label for=\"depositosVinculados\">Níveis de Estoques por Deposíto</label>\n          <custom-table>\n            <ng-template #thead let-thead>\n              <tr class=\"text-center\">\n                <th scope=\"col\">Empresa</th>\n                <th scope=\"col\">Depósito</th>\n                <th scope=\"col\">Diponível</th>\n                <th scope=\"col\">Mínimo</th>\n                <th scope=\"col\">Segurança</th>\n                <th scope=\"col\">Máximo</th>\n                <th scope=\"col\" class=\"hover\"></th>\n              </tr>\n            </ng-template>\n            <ng-template #tbody let-tbody>\n              <tr *ngFor=\"let item of dadosNiveisEstoquesCadastrados\">\n                <td>{{item.NM_EMPR}}</td>\n                <td>{{item.NM_DEPO}}</td>\n                <td>{{item.TT_ESTO_DISP | number: '0.3' }}</td>\n                <td>{{item.TT_ESTO_MINI | number: '0.3' }}</td>\n                <td>{{item.TT_ESTO_SEGU | number: '0.3' }}</td>\n                <td>{{item.TT_ESTO_MAXI | number: '0.3' }}</td>\n                <td class=\"text-center\">\n                  <div>\n                    <button\n                      type=\"button\"\n                      class=\"btn-icon-sm\"\n                      placement=\"left\"\n                      tooltip=\"Ativar/Desativar\"\n                      container=\"body\"\n                     (click)=\"onUpdate(item)\"\n                    >\n                      <i [ngClass]=\"item.IN_STAT == 1 ? 'fas fa-toggle-on text-success' : 'fas fa-toggle-off'\"></i>\n                    </button>\n                  </div>\n                </td>\n              </tr>\n            </ng-template>\n          </custom-table>\n        </div>\n      </div>\n    </div>\n  </div>\n</app-body>\n";
      /***/
    },

    /***/
    "JXA/":
    /*!*****************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/cadastros/nivel-estoque-deposito-new/lista/lista.component.ts ***!
      \*****************************************************************************************************/

    /*! exports provided: AbastecimentoCadastrosNivelEstoqueDepositoNewListaComponent */

    /***/
    function JXA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastrosNivelEstoqueDepositoNewListaComponent", function () {
        return AbastecimentoCadastrosNivelEstoqueDepositoNewListaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lista.component.html */
      "RUIN");
      /* harmony import */


      var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lista.component.scss */
      "bT3o");
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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _nivel_estoque_deposito_new_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../nivel-estoque-deposito-new.service */
      "9wJI"); //Converte rota em base64


      var AbastecimentoCadastrosNivelEstoqueDepositoNewListaComponent = /*#__PURE__*/function () {
        function AbastecimentoCadastrosNivelEstoqueDepositoNewListaComponent(activatedRoute, router, formBuilder, pnotifyService, atividadesService, routerService, titleService, service) {
          _classCallCheck(this, AbastecimentoCadastrosNivelEstoqueDepositoNewListaComponent);

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
          this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
          this.idUsuario = this.currentUser['info']['id'];
          this.tableConfig = {
            subtitleBorder: true
          };
          this.breadCrumbTree = [];
          /* Arrays filtros */

          this.linhas = [];
          this.classes = [];
          this.subLinhas = [];
          this.tiposMateriais = [];
          this.materiais = [];
          /* Arrays filtros */

          this.dados = [];
          this.dadosExcel = [];
          this.dadosTabs = [];
          this.dadosLogs = [];
          this.depositos = [];
          /* Dados do Ng-select */

          this.situacoes = [// { id: '1', nome: 'Não associados a deposito', icone: 'fas fa-circle text-danger' },
          {
            id: '4',
            nome: 'Com cadastro',
            icone: 'fas fa-circle text-success'
          }, {
            id: '2',
            nome: 'Sem cadastro',
            icone: 'fas fa-circle text-danger'
          }, {
            id: '3',
            nome: 'Parcial',
            icone: 'fas fa-circle text-warning'
          }];
          /* Dados do Ng-select */

          this.subtitles = [{
            text: 'Com cadastro',
            color: 'green'
          }, {
            text: 'Sem cadastro',
            color: 'red'
          }, {
            text: 'Parcial',
            color: 'yellow'
          }];
          /* Ordenação */

          this.reverse = false;
          this.key = 'MATERIAL_ID';
          /* Ordenação */

          /* Ordenação modal */

          this.reverseA = false;
          this.keyA = 'NM_EMPR';
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
            material: [null],
            tipoMaterial: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            linha: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            subLinha: [null],
            classe: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            situacao: [null]
          });
        }

        _createClass(AbastecimentoCadastrosNivelEstoqueDepositoNewListaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            setTimeout(function () {
              _this.loaderFullScreen = false;
            }, 1000);
            this.registrarAcesso();
            this.setBreadCrumb();
            this.getLinhas();
            this.getTiposMateriais();
            this.checkRouterParams();
            this.titleService.setTitle('Nível de estoque por depósito');
          }
        }, {
          key: "getLinhas",
          value: function getLinhas() {
            var _this2 = this;

            var idSituacao = 1;
            this.loaderNavbar = true;
            this.linhas = [];
            this.service.getLinhas(idSituacao).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(function () {
              return _this2.loaderNavbar = false;
            })).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                _this2.linhas = res['body']['result'];

                _this2.form.get('classe').disable();

                _this2.form.get('subLinha').disable();

                _this2.form.get('material').disable();
              }
            }, function (error) {
              _this2.pnotifyService.error('Erro ao carregar linhas');
            });
          }
        }, {
          key: "getSubLinhas",
          value: function getSubLinhas() {
            var _this3 = this;

            var idSituacao = 1;
            this.loaderNavbar = true;
            this.subLinhas = [];

            if (this.form.get('linha').status === 'VALID') {
              var descricaoLinhas = this.form.get('linha').value;
              this.service.getSubLinhas(descricaoLinhas, idSituacao).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(function () {
                return _this3.loaderNavbar = false;
              })).subscribe(function (res) {
                if (Object.keys(res).length > 0) {
                  if (res.status === 200) {
                    if (res['body']['responseCode'] === 200) {
                      _this3.subLinhas = res['body']['result'];

                      _this3.form.get('subLinha').reset();

                      _this3.form.get('subLinha').enable();
                    } else if (res['body']['responseCode'] === 404) {
                      _this3.form.get('subLinha').reset();

                      _this3.form.get('subLinha').disable();

                      _this3.pnotifyService.notice('Não há sublinha cadastrada');
                    }
                  }
                }
              }, function (error) {
                _this3.pnotifyService.error('Erro ao carregar sublinhas');
              });
            } else {
              this.form.get('subLinha').reset();
              this.form.get('subLinha').disable();
            }
          }
        }, {
          key: "getClasses",
          value: function getClasses() {
            var _this4 = this;

            var idSituacao = 1;
            this.classes = [];
            this.loaderNavbar = true;

            if (this.form.get('linha').status === 'VALID') {
              var descricaoLinhas = this.form.get('linha').value;
              var idSubLinha = this.form.get('subLinha').value;
              this.service.getClasses(descricaoLinhas, idSubLinha, idSituacao).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(function () {
                return _this4.loaderNavbar = false;
              })).subscribe(function (res) {
                if (Object.keys(res).length > 0) {
                  _this4.classes = res['body']['result'];

                  _this4.form.get('classe').reset();

                  _this4.form.get('classe').enable();
                }
              }, function (error) {
                _this4.pnotifyService.error('Erro ao carregar classes');
              });
            } else {
              this.form.get('classe').reset();
              this.form.get('classe').disable();
            }
          }
        }, {
          key: "getTiposMateriais",
          value: function getTiposMateriais() {
            var _this5 = this;

            var idSituacao = 1;
            this.loaderNavbar = true;
            this.tiposMateriais = [];
            this.service.getTiposMateriais(idSituacao).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(function () {
              return _this5.loaderNavbar = false;
            })).subscribe(function (res) {
              if (res.status === 200) {
                _this5.tiposMateriais = res['body']['result'];
              }
            }, function (error) {
              _this5.pnotifyService.error('Erro ao carregar tipos materiais');
            });
          }
        }, {
          key: "getMateriais",
          value: function getMateriais() {
            var _this6 = this;

            var idSituacao = 1;
            this.materiais = [];
            this.loaderNavbar = true;
            var idClasses = this.form.get('classe').value;
            var idTipoMaterial = this.form.get('tipoMaterial').value;

            if (this.form.value['classe'] != null && this.form.value['classe'].length > 0) {
              this.service.getMateriais(idClasses, idTipoMaterial, idSituacao).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(function () {
                return _this6.loaderNavbar = false;
              })).subscribe(function (res) {
                if (Object.keys(res).length > 0) {
                  if (res['body'].responseCode === 200) {
                    _this6.materiais = res['body']['result'];

                    _this6.form.get('material').reset();

                    _this6.form.get('material').enable();
                  } else if (res['body']['responseCode'] === 404) {
                    _this6.form.get('material').reset();

                    _this6.form.get('material').disable();

                    _this6.pnotifyService.notice('Não há materiais cadastrados para essa classe');
                  }
                }

                _this6.loaderNavbar = false;
              }, function (error) {
                _this6.pnotifyService.error('Erro ao carregar materias');
              });
            }
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
                routerLink: '/abastecimento/home'
              }, {
                descricao: 'Cadastros',
                routerLink: "/abastecimento/cadastros/".concat(params['idSubModulo'])
              }, {
                descricao: 'Nível de estoque por depósito'
              }];
            });
          }
        }, {
          key: "checkRouterParams",
          value: function checkRouterParams() {
            var _this8 = this;

            this.activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (queryParams) {
              if (Object.keys(queryParams).length > 0) {
                var _response = _this8.routerService.getBase64UrlParams(queryParams);

                _this8.search(_response);

                _this8.setFormValues(_response);
              }
            });
            this.activatedRouteSubscription.unsubscribe();
          }
        }, {
          key: "setFormValues",
          value: function setFormValues(queryParams) {
            var _this9 = this;

            var idSituacao = 1;
            var tipoMaterial = queryParams['ID_APOI_TIPO_MATE'] ? queryParams['ID_APOI_TIPO_MATE'] : "";
            var material = queryParams['ID_MATE'] ? queryParams['ID_MATE'] : "";
            var linha = queryParams['ID_LINH'] ? queryParams['ID_LINH'] : "";
            var subLinha = queryParams['ID_SUB_LINH'] ? queryParams['ID_SUB_LINH'] : "";
            var classe = queryParams['ID_CLAS'] ? queryParams['ID_CLAS'] : "";
            var situacao = queryParams['SITU_CADA_NIVE_ESTO'] ? queryParams['SITU_CADA_NIVE_ESTO'] : 5;

            if (Object.keys(linha).length > 0) {
              this.loaderNavbar = true;
              /* classes */

              this.service.getClasses(linha, subLinha, idSituacao).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(function () {
                return _this9.loaderNavbar = false;
              })).subscribe(function (res) {
                if (Object.keys(res).length > 0) {
                  if (res.status === 200) {
                    if (res['body']['responseCode'] === 200) {
                      _this9.classes = res['body']['result'];

                      _this9.form.get('classe').enable();
                    }
                  }
                }
              }, function (error) {
                _this9.pnotifyService.error('Erro ao carregar Classes');
              });
            } else {
              this.form.get('classe').disable();
            }
            /* sublinhas */


            if (Object.keys(linha).length > 0) {
              this.loaderNavbar = true;
              this.service.getSubLinhas(linha, idSituacao).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(function () {
                return _this9.loaderNavbar = false;
              })).subscribe(function (res) {
                if (Object.keys(res).length > 0) {
                  if (res.status == 200) {
                    if (res['body']['responseCode'] === 200) {
                      _this9.subLinhas = res['body']['result'];

                      _this9.form.get('subLinha').enable();
                    }
                  }
                }
              }, function (error) {
                _this9.pnotifyService.error('Erro ao carregar subLinha');
              });
            } else {
              this.form.get('subLinha').disable();
            }
            /* materiais */


            if (Object.keys(classe).length > 0) {
              this.loaderNavbar = true;
              this.service.getMateriais(classe, tipoMaterial, idSituacao).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(function () {
                return _this9.loaderNavbar = false;
              })).subscribe(function (res) {
                if (Object.keys(res).length > 0) {
                  if (res['body'].responseCode === 200) {
                    _this9.form.get('material').enable();

                    _this9.materiais = res['body']['result'];
                  }
                }
              }, function (error) {
                _this9.pnotifyService.error('Erro ao carregar materias');
              });
            }

            this.form.patchValue({
              tipoMaterial: tipoMaterial,
              linha: linha,
              subLinha: subLinha,
              classe: classe,
              material: material,
              situacao: situacao
            });
          }
        }, {
          key: "excelExport",
          value: function excelExport() {
            var queryParams = {
              IN_GERA_RELA: 1,
              ID_USUA: this.idUsuario,
              ID_APOI_TIPO_MATE: this.form.value['tipoMaterial'] === null || this.form.value['tipoMaterial'] === undefined ? '' : this.form.value['tipoMaterial'],
              ID_LINH: this.form.value['linha'] === null || this.form.value['linha'] === undefined ? '' : this.form.value['linha'],
              ID_SUB_LINH: this.form.value['subLinha'] === null || this.form.value['subLinha'] === undefined ? '' : this.form.value['subLinha'],
              ID_CLAS: this.form.value['classe'] === null || this.form.value['classe'] === undefined ? '' : this.form.value['classe'],
              ID_MATE: this.form.value['material'] === null || this.form.value['material'] === undefined ? '' : this.form.value['material'],
              SITU_CADA_NIVE_ESTO: this.form.value['situacao'] === null || this.form.value['situacao'] === undefined ? 5 : this.form.value['situacao']
            };
            this.getSearchExcel(queryParams);
          }
        }, {
          key: "getSearchExcel",
          value: function getSearchExcel(params) {
            var _this10 = this;

            this.loaderNavbar = true;
            this.dadosExcel = [];
            this.service.getNiveisEstoque(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(function () {
              return _this10.loaderNavbar = false;
            })).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                if (res['body']['responseCode'] === 200) {
                  _this10.dadosExcel = res['body']['result'];

                  _this10.pnotifyService.success(_this10.dadosExcel);
                } else if (res['body']['responseCode'] === 404) {
                  _this10.pnotifyService.notice('Nenhuma informação encontrada');
                }
              }
            }, function (error) {
              _this10.pnotifyService.error('Erro ao carregar dados para excel');
            });
          }
        }, {
          key: "onFilter",
          value: function onFilter() {
            this.setRouterParams({
              ID_APOI_TIPO_MATE: this.form.value['tipoMaterial'] === null || this.form.value['tipoMaterial'] === undefined ? '' : this.form.value['tipoMaterial'],
              ID_LINH: this.form.value['linha'] === null || this.form.value['linha'] === undefined ? '' : this.form.value['linha'],
              ID_SUB_LINH: this.form.value['subLinha'] === null || this.form.value['subLinha'] === undefined ? '' : this.form.value['subLinha'],
              ID_CLAS: this.form.value['classe'] === null || this.form.value['classe'] === undefined ? '' : this.form.value['classe'],
              ID_MATE: this.form.value['material'] === null || this.form.value['material'] === undefined ? '' : this.form.value['material'],
              SITU_CADA_NIVE_ESTO: this.form.value['situacao'] === null || this.form.value['situacao'] === undefined ? 5 : this.form.value['situacao'],
              IN_GERA_RELA: '',
              ID_USUA: ''
            });
            this.onCloseTabs();
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
            var _this11 = this;

            this.loaderNavbar = true;
            this.loading = false;
            this.service.getNiveisEstoque(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(function () {
              return _this11.loaderNavbar = false;
            })).subscribe(function (res) {
              if (res.status === 200) {
                if (res['body']['responseCode'] === 200) {
                  _this11.dados = res['body']['result'];
                  _this11.loading = true;
                  _this11.noResult = false;
                } else if (res['body']['responseCode'] === 404) {
                  _this11.noResult = true;

                  _this11.pnotifyService.notice('Não há dados');
                }
              }
            }, function (error) {
              _this11.pnotifyService.error('Erro ao carregar dados');

              _this11.noResult = true;
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
        }, {
          key: "openTab",
          value: function openTab(i) {
            i.select = !i.select;
            this.getNiveisEstoqueDetalhes({
              ID_MATE: i['ID_MATE']
            });
            this.compressedTable = true;
          }
        }, {
          key: "getNiveisEstoqueDetalhes",
          value: function getNiveisEstoqueDetalhes(params) {
            var _this12 = this;

            this.loaderNavbar = true;
            this.loadingDetalhes = false;
            this.dadosTabs = [];
            this.service.getNiveisEstoqueUnidades(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(function () {
              return _this12.loaderNavbar = false;
            })).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                if (res.status === 200) {
                  if (res['body']['responseCode'] === 200) {
                    _this12.dadosTabs = res['body']['result'];
                    _this12.loadingDetalhes = true;
                    _this12.noResultDetalhes = false;
                  } else if (res['body']['responseCode'] === 404) {
                    _this12.noResultDetalhes = true;
                    _this12.loadingDetalhes = false;

                    _this12.pnotifyService.notice('Não há dados');
                  }
                }
              }
            });
          }
        }, {
          key: "getLogs",
          value: function getLogs(params) {
            var _this13 = this;

            this.loaderNavbar = true;
            this.loadingLogs = false;
            this.loadingDetalhesLog = false;
            this.dadosLogs = [];
            this.service.getLogs(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(function () {
              return _this13.loaderNavbar = false;
            })).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                if (res.status === 200) {
                  if (res['body']['responseCode'] === 200) {
                    _this13.dadosLogs = res['body']['result'];
                    _this13.loadingLogs = true;
                    _this13.loadingDetalhesLog = true;
                    _this13.noResultLogs = false;
                  } else if (res['body']['responseCode'] === 404) {
                    _this13.loadingDetalhesLog = true;
                    _this13.noResultLogs = true;
                    _this13.loadingLogs = false;

                    _this13.pnotifyService.notice('Não há dados');
                  }
                }
              }
            });
          }
        }, {
          key: "onCloseTabs",
          value: function onCloseTabs() {
            this.compressedTable = false;
            this.resetSelected();
          }
        }, {
          key: "openModal",
          value: function openModal(i) {
            this.getLogs({
              ID_ASSO_MATE_DEPO: i['ID']
            });
          }
        }, {
          key: "resetSelected",
          value: function resetSelected() {
            this.dados.forEach(function (e) {
              e.select = false;
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

        return AbastecimentoCadastrosNivelEstoqueDepositoNewListaComponent;
      }();

      AbastecimentoCadastrosNivelEstoqueDepositoNewListaComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__["AtividadesService"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__["RouterService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_8__["TitleService"]
        }, {
          type: _nivel_estoque_deposito_new_service__WEBPACK_IMPORTED_MODULE_11__["AbastecimentoCadastrosNivelEstoqueDepositoNewService"]
        }];
      };

      AbastecimentoCadastrosNivelEstoqueDepositoNewListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__["AtividadesService"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__["RouterService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_8__["TitleService"], _nivel_estoque_deposito_new_service__WEBPACK_IMPORTED_MODULE_11__["AbastecimentoCadastrosNivelEstoqueDepositoNewService"]])], AbastecimentoCadastrosNivelEstoqueDepositoNewListaComponent);
      /***/
    },

    /***/
    "PZqA":
    /*!***********************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/cadastros/nivel-estoque-deposito-new/cadastro/cadastro.component.ts ***!
      \***********************************************************************************************************/

    /*! exports provided: AbastecimentoCadastrosNivelEstoqueDepositoNewCadastroComponent */

    /***/
    function PZqA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastrosNivelEstoqueDepositoNewCadastroComponent", function () {
        return AbastecimentoCadastrosNivelEstoqueDepositoNewCadastroComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./cadastro.component.html */
      "FRzv");
      /* harmony import */


      var _cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cadastro.component.scss */
      "jA1v");
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


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
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


      var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/modules/confirm-modal/confirm-modal.service */
      "FOez");
      /* harmony import */


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");
      /* harmony import */


      var _nivel_estoque_deposito_new_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../nivel-estoque-deposito-new.service */
      "9wJI");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M"); //Converte rota em base64


      var AbastecimentoCadastrosNivelEstoqueDepositoNewCadastroComponent = /*#__PURE__*/function () {
        function AbastecimentoCadastrosNivelEstoqueDepositoNewCadastroComponent(activatedRoute, formBuilder, pnotifyService, atividadesService, routerService, titleService, confirmModalService, service) {
          _classCallCheck(this, AbastecimentoCadastrosNivelEstoqueDepositoNewCadastroComponent);

          this.activatedRoute = activatedRoute;
          this.formBuilder = formBuilder;
          this.pnotifyService = pnotifyService;
          this.atividadesService = atividadesService;
          this.routerService = routerService;
          this.titleService = titleService;
          this.confirmModalService = confirmModalService;
          this.service = service;
          this.loaderFullScreen = true;
          this.noResult = false;
          this.enableSave = false;
          this.minimoBool = false;
          this.segurancaBool = false;
          this.maximoBool = false;
          this.depositos = [];
          this.dadosNiveisEstoquesCadastrados = [];
          this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
          this.idUsuario = this.currentUser['info']['id'];
          this.breadCrumbTree = [];
          /* CurrentyMask para toneladas */

          this.ton = {
            align: 'left',
            prefix: '',
            thousands: '.',
            decimal: ',',
            precision: 3
          };
          this.form = this.formBuilder.group({
            deposito: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            volumeMinimo: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            volumeSeguranca: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            volumeMaximo: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });
        }

        _createClass(AbastecimentoCadastrosNivelEstoqueDepositoNewCadastroComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this14 = this;

            setTimeout(function () {
              _this14.loaderFullScreen = false;
            }, 1000);
            this.registrarAcesso();
            this.setBreadCrumb();
            this.checkRouterParams();
            this.getDepositosAssociados();
            this.titleService.setTitle('Nível de estoque por depósito');
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            var _this15 = this;

            this.activatedRoute.params.subscribe(function (params) {
              _this15.breadCrumbTree = [{
                descricao: 'Home',
                routerLink: '/abastecimento/home'
              }, {
                descricao: 'Cadastros',
                routerLink: "/abastecimento/cadastros/".concat(params['idSubModulo'])
              }, {
                descricao: 'Nível de estoque por Depósito',
                routerLink: "/abastecimento/cadastros/".concat(params['idSubModulo'], "/nivel-material-estoque/lista")
              }, {
                descricao: 'Cadastro'
              }];
            });
          }
        }, {
          key: "checkRouterParams",
          value: function checkRouterParams() {
            var _this16 = this;

            this.activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (queryParams) {
              if (Object.keys(queryParams).length > 0) {
                var _response = _this16.routerService.getBase64UrlParams(queryParams);

                _this16.setValuesInfoNivelEstoque(_response.item);

                _this16.loadNiveisEstoqueCadastrados();
              }
            });
            this.activatedRouteSubscription.unsubscribe();
          }
        }, {
          key: "setValuesInfoNivelEstoque",
          value: function setValuesInfoNivelEstoque(params) {
            this.idLinha = params["ID_LINH"];
            this.linha = params["NM_LINH"];
            this.idSubLinha = params["ID_SUB_LINH"];
            this.subLinha = params["NM_SUB_LINH"];
            this.idClasse = params["ID_CLAS"];
            this.classe = params["NM_CLAS"];
            this.idTipoMaterial = params["ID_APOI_TIPO_MATE"];
            this.tipoMaterial = params["NM_APOI_TIPO_MATE"];
            this.idErpMaterial = params["ID_REFE_ERP"];
            this.idMaterial = params["ID_MATE"];
            this.descMaterial = params["NM_MATE"];
          }
        }, {
          key: "loadNiveisEstoqueCadastrados",
          value: function loadNiveisEstoqueCadastrados() {
            this.getNiveisEstoqueCadastrados({
              ID_MATE: this.idMaterial
            });
          }
        }, {
          key: "getNiveisEstoqueCadastrados",
          value: function getNiveisEstoqueCadastrados(params) {
            var _this17 = this;

            this.loaderNavbar = true;
            this.service.getNiveisEstoqueUnidades(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () {
              return _this17.loaderNavbar = false;
            })).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                if (res.status === 200) {
                  if (res['body']['responseCode'] === 200) {
                    _this17.dadosNiveisEstoquesCadastrados = res['body']['result'];
                    _this17.noResult = false;
                  } else if (res['body']['responseCode'] === 404) {
                    _this17.noResult = true;

                    _this17.pnotifyService.notice('Não há dados');
                  }
                }
              }
            });
          }
        }, {
          key: "getDepositosAssociados",
          value: function getDepositosAssociados() {
            var _this18 = this;

            var idSituacao = 1;
            this.loaderNavbar = true;
            this.depositos = [];
            this.service.getDepositosAssociados(idSituacao, this.idClasse, this.idTipoMaterial).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () {
              return _this18.loaderNavbar = false;
            })).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                _this18.depositos = res['body']['result'];
              }
            }, function (error) {
              _this18.pnotifyService.error('Erro ao carregar Depositos');
            });
          }
        }, {
          key: "onSave",
          value: function onSave() {
            var depositos = this.form.get("deposito").value;
            var volumeMinimo = this.form.get("volumeMinimo").value;
            var volumeSeguranca = this.form.get("volumeSeguranca").value;
            var volumeMaximo = this.form.get("volumeMaximo").value;
            var record = {
              ID_MATE: this.idMaterial,
              ID_DEPO: depositos.toString(),
              TT_ESTO_MINI: parseFloat(volumeMinimo),
              TT_ESTO_SEGU: parseFloat(volumeSeguranca),
              TT_ESTO_MAXI: parseFloat(volumeMaximo),
              ID_USUA: parseInt(this.idUsuario),
              IN_STAT: 1
            };
            this.postNivelEstoque(record);
          }
        }, {
          key: "postNivelEstoque",
          value: function postNivelEstoque(record) {
            var _this19 = this;

            this.loaderNavbar = true;
            this.service.postNivelEstoque(record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () {
              _this19.loaderNavbar = false, _this19.resetValuesForm(), _this19.loadNiveisEstoqueCadastrados();
            })).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                if (res['responseCode'] === 201) {
                  _this19.pnotifyService.success(res['message']);
                } else {
                  _this19.pnotifyService.error(res['message']);
                }
              }
            }, function (error) {
              _this19.pnotifyService.error(error['error']);
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
              ID_MATE: this.idMaterial,
              ID_DEPO: item.ID_DEPO,
              TT_ESTO_MINI: item.TT_ESTO_MINI,
              TT_ESTO_SEGU: item.TT_ESTO_SEGU,
              TT_ESTO_MAXI: item.TT_ESTO_MAXI,
              ID_USUA: parseInt(this.idUsuario),
              IN_STAT: idSituaçao
            };
            this.postNivelEstoque(record);
          }
        }, {
          key: "onDelete",
          value: function onDelete(item) {
            var _this20 = this;

            this.loaderNavbar = true;
            var record = {
              ID_ASSO_MATE_DEPO: item.ID,
              ID_USUA: parseInt(this.idUsuario)
            };
            this.confirmDelete().asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["switchMap"])(function (result) {
              return result ? _this20.deleteNivelEstoque(record) : rxjs__WEBPACK_IMPORTED_MODULE_6__["EMPTY"];
            })).subscribe(function (success) {
              _this20.pnotifyService.success();

              _this20.loaderNavbar = false;

              _this20.loadNiveisEstoqueCadastrados();
            }, function (error) {
              _this20.pnotifyService.error();

              _this20.loaderNavbar = false;

              _this20.loadNiveisEstoqueCadastrados();
            });
            this.deleteNivelEstoque(record);
          }
        }, {
          key: "deleteNivelEstoque",
          value: function deleteNivelEstoque(record) {
            return this.service.deleteNivelEstoque(record);
          }
        }, {
          key: "confirmDelete",
          value: function confirmDelete() {
            return this.confirmModalService.showConfirm('delete', 'Confirmar exclusão', 'Deseja realmente prosseguir com a exclusão do registro?', 'Cancelar', 'Confirmar');
          }
        }, {
          key: "resetValuesForm",
          value: function resetValuesForm() {
            this.form.get('deposito').reset();
            this.form.get("volumeMinimo").reset();
            this.form.get("volumeSeguranca").reset();
            this.form.get("volumeMaximo").reset();
          }
          /* Realiza comparação para verificar se volume minimo < volume seguranca < volume maximo */

        }, {
          key: "compareValues",
          value: function compareValues(field) {
            var minimo = this.form.get("volumeMinimo").value;
            var seguranca = this.form.get("volumeSeguranca").value;
            var maximo = this.form.get("volumeMaximo").value;

            if (this.form.get("volumeMaximo").touched) {
              if (field == "volumeMinimo") {
                if (minimo > seguranca || minimo > maximo) {
                  this.minimoBool = false;
                  return true;
                } else {
                  this.minimoBool = true;
                }
              }

              if (field == "volumeSeguranca") {
                if (seguranca > maximo || seguranca < minimo) {
                  this.segurancaBool = false;
                  return true;
                } else {
                  this.segurancaBool = true;
                }
              }

              if (field == "volumeMaximo") {
                if (maximo < minimo || maximo < seguranca) {
                  this.maximoBool = false;
                  return true;
                } else {
                  this.maximoBool = true;
                }
              }
            }
          }
          /* Validação para habilitar botão de salvar */

        }, {
          key: "validatorsSave",
          value: function validatorsSave() {
            if (this.minimoBool && this.segurancaBool && this.maximoBool) {
              this.enableSave = true;
            } else {
              this.enableSave = false;
            }

            return this.enableSave;
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
        }]);

        return AbastecimentoCadastrosNivelEstoqueDepositoNewCadastroComponent;
      }();

      AbastecimentoCadastrosNivelEstoqueDepositoNewCadastroComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_8__["AtividadesService"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_11__["RouterService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_9__["TitleService"]
        }, {
          type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_10__["ConfirmModalService"]
        }, {
          type: _nivel_estoque_deposito_new_service__WEBPACK_IMPORTED_MODULE_12__["AbastecimentoCadastrosNivelEstoqueDepositoNewService"]
        }];
      };

      AbastecimentoCadastrosNivelEstoqueDepositoNewCadastroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'cadastro',
        template: _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_8__["AtividadesService"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_11__["RouterService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_9__["TitleService"], src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_10__["ConfirmModalService"], _nivel_estoque_deposito_new_service__WEBPACK_IMPORTED_MODULE_12__["AbastecimentoCadastrosNivelEstoqueDepositoNewService"]])], AbastecimentoCadastrosNivelEstoqueDepositoNewCadastroComponent);
      /***/
    },

    /***/
    "RUIN":
    /*!*********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/abastecimento/cadastros/nivel-estoque-deposito-new/lista/lista.component.html ***!
      \*********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function RUIN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\n<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<app-header appTitle=\"Nível de estoque por depósito\">\n  <button\n    type=\"button\"\n    (click)=\"onFilter()\"\n    [disabled] = \"form.status == 'INVALID'\">\n    Filtrar\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"excelExport()\"\n  >\n    Exportar Excel\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\n  <advanced-filter>\n    <form [formGroup]=\"form\" autocomplete=\"off\">\n      <div class=\"form-row\">\n        <div class=\"form-group col-lg-2\">\n          <label for=\"linha\">Linha</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"false\"\n            [multiple]=\"false\"\n            [items]=\"linhas\"\n            [virtualScroll]=\"true\"\n            [hideSelected]=\"true\"\n            [closeOnSelect]=\"true\"\n            placeholder=\"Selecione...\"\n            bindLabel=\"NM_LINH\"\n            bindValue=\"ID\"\n            formControlName=\"linha\"\n            [ngClass]=\"\n              onFieldError('linha') +\n              ' ' +\n              onFieldRequired('linha')\n            \"\n            (change)=\"getClasses() + ' ' + getSubLinhas()\"\n          >\n          </ng-select>\n          <invalid-form-control\n            [show]=\"onFieldInvalid('linha')\"\n            message=\"Linha é obrigatório.\"\n          >\n          </invalid-form-control>\n        </div>\n        <div class=\"form-group col-lg-2\">\n          <label for=\"subLinha\">Sublinha</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"false\"\n            [multiple]=\"true\"\n            [items]=\"subLinhas\"\n            [virtualScroll]=\"true\"\n            [hideSelected]=\"true\"\n            [closeOnSelect]=\"true\"\n            placeholder=\"Selecione...\"\n            bindLabel=\"NM_SUB_LINH\"\n            bindValue=\"ID\"\n            formControlName=\"subLinha\"\n            (change)=\"getClasses()\"\n          >\n          </ng-select>\n        </div>\n        <div class=\"form-group col-lg-2\">\n          <label for=\"classe\">Classe</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"false\"\n            [multiple]=\"true\"\n            [items]=\"classes\"\n            [virtualScroll]=\"true\"\n            [hideSelected]=\"true\"\n            [closeOnSelect]=\"true\"\n            placeholder=\"Selecione...\"\n            bindLabel=\"NM_CLAS\"\n            bindValue=\"ID\"\n            formControlName=\"classe\"\n            (change)=\"getMateriais()\"\n            [ngClass]=\"\n              onFieldError('classe') +\n              ' ' +\n              onFieldRequired('classe')\n            \"\n          >\n          <invalid-form-control\n            [show]=\"onFieldInvalid('classe')\"\n            message=\"Classe é obrigatório.\"\n          >\n          </invalid-form-control>\n          </ng-select>\n        </div>\n        <div class=\"form-group col-lg-2\">\n          <label for=\"tipoMaterial\">Tipo material</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"false\"\n            [multiple]=\"true\"\n            [items]=\"tiposMateriais\"\n            [virtualScroll]=\"true\"\n            [hideSelected]=\"true\"\n            [closeOnSelect]=\"true\"\n            placeholder=\"Selecione...\"\n            bindLabel=\"NM_APOI_TIPO_MATE\"\n            bindValue=\"ID\"\n            formControlName=\"tipoMaterial\"\n            (change)=\"getMateriais()\"\n            [ngClass]=\"\n              onFieldError('tipoMaterial') +\n              ' ' +\n              onFieldRequired('tipoMaterial')\n            \"\n          >\n          </ng-select>\n          <invalid-form-control\n            [show]=\"onFieldInvalid('tipoMaterial')\"\n            message=\"Tipo material é obrigatório.\"\n          >\n          </invalid-form-control>\n        </div>\n        <div class=\"form-group col-lg-4\">\n          <label for=\"material\">Material</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"false\"\n            [items]=\"materiais\"\n            [virtualScroll]=\"true\"\n            [hideSelected]=\"true\"\n            [closeOnSelect]=\"false\"\n            [multiple]=\"true\"\n            placeholder=\"Selecione...\"\n            bindLabel=\"NM_MATE\"\n            bindValue=\"ID\"\n            formControlName=\"material\"\n          >\n          </ng-select>\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"form-group col-lg-2\">\n          <label for=\"situacao\">Situação</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"true\"\n            [items]=\"situacoes\"\n            [virtualScroll]=\"true\"\n            [hideSelected]=\"true\"\n            [closeOnSelect]=\"true\"\n            placeholder=\"Selecione...\"\n            bindLabel=\"nome\"\n            bindValue=\"id\"\n            formControlName=\"situacao\"\n            >\n          </ng-select>\n        </div>\n\n      </div>\n    </form>\n  </advanced-filter>\n  <subtitles [data]=\"subtitles\" [show]=\"loading\"></subtitles>\n  <div class=\"row\">\n    <div class=\"table-responsive\" [ngClass]=\"{'col-12': !compressedTable, 'col-6 pr-0': compressedTable}\" *ngIf=\"loading\">\n      <custom-table [config]=\"tableConfig\">\n        <ng-template #thead let-thead class=\"custom-border\">\n          <tr class=\"text-center\">\n            <th scope=\"col\" class=\"hover\" (click)=\"sort('NM_APOI_TIPO_MATE')\">Tipo material\n              <span *ngIf=\"key == 'NM_APOI_TIPO_MATE'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\n              <span *ngIf=\"key != 'NM_APOI_TIPO_MATE'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th scope=\"col\" class=\"hover\" (click)=\"sort('ID_REFE_ERP')\">Código\n              <span *ngIf=\"key == 'ID_REFE_ERP'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\n              <span *ngIf=\"key != 'ID_REFE_ERP'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th scope=\"col\" class=\"hover\" (click)=\"sort('NM_MATE')\">Material\n              <span *ngIf=\"key == 'NM_MATE'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\n              <span *ngIf=\"key != 'NM_MATE'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th scope=\"col\" class=\"hover\" (click)=\"sort('NM_LINH')\">Linha\n              <span *ngIf=\"key == 'NM_LINH'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\n              <span *ngIf=\"key != 'NM_LINH'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th scope=\"col\" class=\"hover\" (click)=\"sort('NM_SUB_LINH')\">Sublinha\n              <span *ngIf=\"key == 'NM_SUB_LINH'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\n              <span *ngIf=\"key != 'NM_SUB_LINH'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th scope=\"col\" class=\"hover\" (click)=\"sort('NM_CLAS')\">Classe\n              <span *ngIf=\"key == 'NM_CLAS'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\n              <span *ngIf=\"key != 'NM_CLAS'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th scope=\"col\" class=\"hover\" [hidden]=\"compressedTable\" width=\"4%\"></th>\n            <th scope=\"col\" class=\"hover\" [hidden]=\"compressedTable\" width=\"4%\"></th>\n          </tr>  \n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr *ngFor=\"let item of dados | orderBy: key : reverse | slice: begin : end; let i = index\" \n          [ngClass]=\"item.select ? 'bg-success' : '' \" >\n            <td class=\"text-truncate text-center\" [ngClass]=\"{\n              'border-black' : item.ID_SITU_CADA_NIVE_ESTO == 1,\n              'border-danger' : item.ID_SITU_CADA_NIVE_ESTO == 2,\n              'border-warning' : item.ID_SITU_CADA_NIVE_ESTO == 3,\n              'border-success' : item.ID_SITU_CADA_NIVE_ESTO == 4,\n              'bg-row-selected' :  item.select == true\n            }\">\n              <i [ngClass]=\"{'fas fa-warehouse': item.TT_DEPO_ASSO_MATE == 0}\" tooltip=\"Sem depósito\"></i>\n              {{item.NM_APOI_TIPO_MATE}}\n            </td>\n            <td class=\"text-truncate text-center\" [ngClass]=\" item.select ? 'bg-row-selected' : ''\">{{item.ID_REFE_ERP | number: '0.0-0'}}</td>\n            <td [ngClass]=\" item.select ? 'bg-row-selected' : ''\">{{item.NM_MATE}}</td>\n            <td class=\"text-truncate text-center\" [ngClass]=\" item.select ? 'bg-row-selected' : ''\">{{item.NM_LINH}}</td>\n            <td class=\"text-truncate text-center\" [ngClass]=\" item.select ? 'bg-row-selected' : ''\">{{item.NM_SUB_LINH ? item.NM_SUB_LINH : \"-\" }}</td>\n            <td class=\"text-truncate text-center\" [ngClass]=\" item.select ? 'bg-row-selected' : ''\">{{item.NM_CLAS}}</td>\n            <td class=\"text-center\" [hidden]=\"compressedTable\" width=\"4%\">\n              <div>\n                <button\n                  type=\"button\"\n                  class=\"btn-icon-sm\"\n                  tooltip=\"Editar\"\n                  (click)=\"onAdd(item)\"\n                >\n                <i\n                  class=\"fas fa-edit\"\n                  >\n                </i>\n                </button>\n              </div>\n            </td>\n            <td class=\"text-center\" [hidden]=\"compressedTable\" width=\"4%\">\n              <div>\n                <button\n                  type=\"button\"\n                  class=\"btn-icon-sm\"\n                  (click)=\"openTab(item)\"\n                  tooltip=\"Detalhes\"\n                >\n                  <i class=\"fas fa-search\"></i>\n                </button>\n              </div>\n            </td>\n          </tr>\n        </ng-template>\n      </custom-table>\n    </div>\n    <div class=\"col-6\">\n      <tabset  [hidden]=\"!compressedTable\">\n        <button type=\"button\" class=\"btn-icon close position-absolute\" (click)=\"onCloseTabs()\">\n          <i class=\"fas fa-times\"></i>\n        </button>\n        <tab heading=\"Detalhes\">\n          <div class=\"border-right border-left border-bottom border-top px-3 pt-3\" style=\"overflow: auto; height: 380px;\">\n            <custom-table *ngIf=\"loadingDetalhes\">\n              <ng-template #thead let-thead>\n                <tr class=\"text-center\">\n                  <th scope=\"col\">Empresa</th>\n                  <th scope=\"col\">Depósito</th>\n                  <th scope=\"col\">Diponível</th>\n                  <th scope=\"col\">Mínimo</th>\n                  <th scope=\"col\">Segurança</th>\n                  <th scope=\"col\">Máximo</th>\n                  <th scope=\"col\">Situação</th>\n                  <th scope=\"col\" class=\"hover\"></th>\n                </tr>\n              </ng-template>\n              <ng-template #tbody let-tbody>\n                <tr *ngFor=\"let item of dadosTabs\">\n                  <td>{{item.NM_EMPR}}</td>\n                  <td>{{item.NM_DEPO}}</td>\n                  <td>{{item.TT_ESTO_DISP | number: '0.3'}}</td>\n                  <td>{{item.TT_ESTO_MINI | number: '0.3'}}</td>\n                  <td>{{item.TT_ESTO_SEGU | number: '0.3'}}</td>\n                  <td>{{item.TT_ESTO_MAXI | number: '0.3'}}</td>\n                  <td>{{item.DS_STAT}}</td>\n                  <td>\n                    <div>\n                      <button\n                        type=\"button\"\n                        class=\"btn-icon-sm\"\n                        placement=\"left\"\n                        tooltip=\"Logs\"\n                        (click)=\"openModal(item) + '' + lgModal.show()\"\n                        container=\"body\">\n                        <i class=\"fas fa-external-link-alt text-primary\"></i>\n                      </button>\n                    </div>\n                  </td>\n                </tr>\n              </ng-template>\n            </custom-table>\n            <div *ngIf=\"noResultDetalhes\" class=\"text-center d-flex justify-content-center align-items-center p-5\" style=\"height: 80%\">\n              <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n            </div>\n          </div>\n        </tab>\n      </tabset>\n    </div>\n    <div class=\"col-12 mb-2 ml-2\" *ngIf=\"dados.length > itemsPerPage && loading\">\n      Exibindo {{ begin + 1 }} a {{ end }} de {{ dados?.length }}\n      <div class=\"d-flex\">\n        <pagination\n          [maxSize]=\"10\"\n          [totalItems]=\"dados?.length\"\n          (pageChanged)=\"onPageChanged($event)\"\n          [(itemsPerPage)]=\"itemsPerPage\"\n          [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPage\"\n          previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\"\n          lastText=\"&raquo;\">\n        </pagination>\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"noResult\" class=\"text-center d-flex justify-content-center align-items-center p-5\" style=\"height: 80%\">\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n  </div>\n</app-body>\n\n<div bsModal #lgModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\"\n     role=\"dialog\" aria-labelledby=\"dialog-sizes-name1\">\n  <div class=\"modal-dialog modal-xl\" [hidden]=\"!loadingDetalhesLog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 id=\"dialog-sizes-name1\" class=\"modal-title pull-left\">LOGS NÍVEL DE ESTOQUE</h4>\n        <button type=\"button\" class=\"close pull-right\" (click)=\"lgModal.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div\n        class=\"table-responsive\"\n        >\n          <custom-table *ngIf=\"loadingLogs\">\n            <ng-template #thead let-thead>\n              <tr class=\"text-center\">\n                <th scope=\"col\" nowrap (click)=\"sortA('NM_DEPO')\">\n                  Depósito\n                  <span *ngIf=\"keyA == 'NM_DEPO'\"\n                    ><i\n                      [ngClass]=\"\n                        reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                      \"\n                    ></i\n                  ></span>\n                  <span *ngIf=\"keyA != 'NM_DEPO'\"\n                    ><i [ngClass]=\"'fas fa-sort'\"></i\n                  ></span>\n                </th>\n                <th scope=\"col\" nowrap (click)=\"sortA('NM_MATE')\">\n                  Material\n                  <span *ngIf=\"keyA == 'NM_MATE'\"\n                    ><i\n                      [ngClass]=\"\n                        reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                      \"\n                    ></i\n                  ></span>\n                  <span *ngIf=\"keyA != 'NM_MATE'\"\n                    ><i [ngClass]=\"'fas fa-sort'\"></i\n                  ></span>\n                </th>\n                <th scope=\"col\" nowrap (click)=\"sortA('TT_ESTO_MINI')\">\n                  Mínimo\n                  <span *ngIf=\"keyA == 'TT_ESTO_MINI'\"\n                    ><i\n                      [ngClass]=\"\n                        reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                      \"\n                    ></i\n                  ></span>\n                  <span *ngIf=\"keyA != 'TT_ESTO_MINI'\"\n                    ><i [ngClass]=\"'fas fa-sort'\"></i\n                  ></span>\n                </th>\n                <th scope=\"col\" nowrap (click)=\"sortA('TT_ESTO_SEGU')\">\n                  Segurança\n                  <span *ngIf=\"keyA == 'TT_ESTO_SEGU'\"\n                    ><i\n                      [ngClass]=\"\n                        reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                      \"\n                    ></i\n                  ></span>\n                  <span *ngIf=\"keyA != 'TT_ESTO_SEGU'\"\n                    ><i [ngClass]=\"'fas fa-sort'\"></i\n                  ></span>\n                </th>\n                <th scope=\"col\" nowrap (click)=\"sortA('TT_ESTO_MAXI')\">\n                  Máximo\n                  <span *ngIf=\"keyA == 'TT_ESTO_MAXI'\"\n                    ><i\n                      [ngClass]=\"\n                        reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                      \"\n                    ></i\n                  ></span>\n                  <span *ngIf=\"keyA != 'TT_ESTO_MAXI'\"\n                    ><i [ngClass]=\"'fas fa-sort'\"></i\n                  ></span>\n                </th>\n                <th scope=\"col\" nowrap (click)=\"sortA('DS_STAT')\">\n                  Situação\n                  <span *ngIf=\"keyA == 'DS_STAT'\"\n                    ><i\n                      [ngClass]=\"\n                        reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                      \"\n                    ></i\n                  ></span>\n                  <span *ngIf=\"keyA != 'DS_STAT'\"\n                    ><i [ngClass]=\"'fas fa-sort'\"></i\n                  ></span>\n                </th>\n                <th scope=\"col\" nowrap (click)=\"sortA('DT_ACAO')\">\n                  Data\n                  <span *ngIf=\"keyA == 'DT_ACAO'\"\n                    ><i\n                      [ngClass]=\"\n                        reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                      \"\n                    ></i\n                  ></span>\n                  <span *ngIf=\"keyA != 'DT_ACAO'\"\n                    ><i [ngClass]=\"'fas fa-sort'\"></i\n                  ></span>\n                </th>\n                <th scope=\"col\" nowrap (click)=\"sortA('NM_ACAO')\">\n                  Ação\n                  <span *ngIf=\"keyA == 'NM_ACAO'\"\n                    ><i\n                      [ngClass]=\"\n                        reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                      \"\n                    ></i\n                  ></span>\n                  <span *ngIf=\"keyA != 'NM_ACAO'\"\n                    ><i [ngClass]=\"'fas fa-sort'\"></i\n                  ></span>\n                </th>\n                <th scope=\"col\" nowrap (click)=\"sortA('NM_USUA')\">\n                  Usuário\n                  <span *ngIf=\"keyA == 'NM_USUA'\"\n                    ><i\n                      [ngClass]=\"\n                        reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                      \"\n                    ></i\n                  ></span>\n                  <span *ngIf=\"keyA != 'NM_USUA'\"\n                    ><i [ngClass]=\"'fas fa-sort'\"></i\n                  ></span>\n                </th>\n              </tr>\n            </ng-template>\n            <ng-template #tbody let-tbody>\n              <tr *ngFor=\"let item of dadosLogs | orderBy: keyA:reverseA | slice: beginA:endA; let i = index\">\n                <td class=\"text-center\">{{ item.NM_DEPO }}</td>\n                <td class=\"text-center\">{{ item.NM_MATE }}</td>\n                <td class=\"text-center\">{{ item.TT_ESTO_MINI | number: '0.3' }}</td>\n                <td class=\"text-center\">{{ item.TT_ESTO_SEGU | number: '0.3' }}</td>\n                <td class=\"text-center\">{{ item.TT_ESTO_MAXI | number: '0.3' }}</td>\n                <td class=\"text-center\">{{ item.DS_STAT }}</td>\n                <td class=\"text-center\">{{ item.DT_ACAO | date:'dd/MM/yyyy HH:mm'}}</td>\n                <td class=\"text-center\">{{ item.NM_ACAO }}</td>\n                <td class=\"text-center\">{{ item.NM_USUA }}</td>\n              </tr>\n            </ng-template>\n          </custom-table>\n        </div>\n        <div class=\"col-12 mb-2 ml-2\" *ngIf=\"dadosLogs.length > itemsPerPage && loadingLogs\">\n          Exibindo {{ beginA + 1 }} a {{ endA }} de {{ dadosLogs?.length }}\n          <pagination\n            [maxSize]=\"10\"\n            [totalItems]=\"dadosLogs?.length\"\n            (pageChanged)=\"onPageChangedA($event)\"\n            [(itemsPerPage)]=\"itemsPerPage\"\n            [boundaryLinks]=\"true\"\n            [(ngModel)]=\"currentPageA\"\n            previousText=\"&lsaquo;\"\n            nextText=\"&rsaquo;\"\n            firstText=\"&laquo;\"\n            lastText=\"&raquo;\"\n          >\n          </pagination>\n        </div>\n        <div\n          *ngIf=\"noResultLogs\"\n          class=\"text-center d-flex justify-content-center align-items-center p-5\"\n          style=\"height: 80%;\"\n        >\n          <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "UOSk":
    /*!*****************************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/cadastros/nivel-estoque-deposito-new/nivel-estoque-deposito-new.module.ts ***!
      \*****************************************************************************************************************/

    /*! exports provided: AbastecimentoCadastrosNivelEstoqueDepositoNewModule */

    /***/
    function UOSk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastrosNivelEstoqueDepositoNewModule", function () {
        return AbastecimentoCadastrosNivelEstoqueDepositoNewModule;
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


      var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-order-pipe */
      "fnxe");
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/core/not-found/not-found.module */
      "sCnT");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var _nivel_estoque_deposito_new_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./nivel-estoque-deposito-new-routing.module */
      "AcPB");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./lista/lista.component */
      "JXA/");
      /* harmony import */


      var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ng2-currency-mask */
      "D5nU");
      /* harmony import */


      var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_12__);
      /* harmony import */


      var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common/locales/pt */
      "vT00");
      /* harmony import */


      var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_13__);
      /* harmony import */


      var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./cadastro/cadastro.component */
      "PZqA");
      /* Criação de mascaras em valores de formularios */

      /* Localização Brasil */


      Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_13___default.a);
      /* Localização Brasil */

      var AbastecimentoCadastrosNivelEstoqueDepositoNewModule = function AbastecimentoCadastrosNivelEstoqueDepositoNewModule() {
        _classCallCheck(this, AbastecimentoCadastrosNivelEstoqueDepositoNewModule);
      };

      AbastecimentoCadastrosNivelEstoqueDepositoNewModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_lista_lista_component__WEBPACK_IMPORTED_MODULE_11__["AbastecimentoCadastrosNivelEstoqueDepositoNewListaComponent"], _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_14__["AbastecimentoCadastrosNivelEstoqueDepositoNewCadastroComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _nivel_estoque_deposito_new_routing_module__WEBPACK_IMPORTED_MODULE_10__["AbastecimentoCadastrosNivelEstoqueDepositoNewRoutingModule"], src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_7__["NotFoundModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["PaginationModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["TabsModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ModalModule"].forRoot(), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_9__["TemplatesModule"], ngx_order_pipe__WEBPACK_IMPORTED_MODULE_5__["OrderModule"], ng2_currency_mask__WEBPACK_IMPORTED_MODULE_12__["CurrencyMaskModule"]],
        providers: [{
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],
          useValue: 'pt-PT'
        }]
      })], AbastecimentoCadastrosNivelEstoqueDepositoNewModule);
      /***/
    },

    /***/
    "bT3o":
    /*!*******************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/cadastros/nivel-estoque-deposito-new/lista/lista.component.scss ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function bT3o(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".bg-row-selected {\n  background-color: #91b8f0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hYmFzdGVjaW1lbnRvL2NhZGFzdHJvcy9uaXZlbC1lc3RvcXVlLWRlcG9zaXRvLW5ldy9saXN0YS9saXN0YS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FiYXN0ZWNpbWVudG8vY2FkYXN0cm9zL25pdmVsLWVzdG9xdWUtZGVwb3NpdG8tbmV3L2xpc3RhL2xpc3RhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnLXJvdy1zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5MWI4ZjAhaW1wb3J0YW50O1xufSJdfQ== */";
      /***/
    },

    /***/
    "jA1v":
    /*!*************************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/cadastros/nivel-estoque-deposito-new/cadastro/cadastro.component.scss ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function jA1v(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWJhc3RlY2ltZW50by9jYWRhc3Ryb3Mvbml2ZWwtZXN0b3F1ZS1kZXBvc2l0by1uZXcvY2FkYXN0cm8vY2FkYXN0cm8uY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=nivel-estoque-deposito-new-nivel-estoque-deposito-new-module-es5.js.map