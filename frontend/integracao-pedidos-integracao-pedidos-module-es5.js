(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["integracao-pedidos-integracao-pedidos-module"], {
    /***/
    "+WEo":
    /*!***************************************************************************************************!*\
      !*** ./src/app/modules/comercial/integracoes/dagda/integracao-pedidos/lista/lista.component.scss ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function WEo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".border-secondary {\n  border-color: #929090 !important;\n}\n\ninput[type=number] {\n  -moz-appearance: textfield;\n}\n\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21lcmNpYWwvaW50ZWdyYWNvZXMvZGFnZGEvaW50ZWdyYWNhby1wZWRpZG9zL2xpc3RhL2xpc3RhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0NBQUE7QUFDRjs7QUFFQTtFQUNFLDBCQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsd0JBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2ludGVncmFjb2VzL2RhZ2RhL2ludGVncmFjYW8tcGVkaWRvcy9saXN0YS9saXN0YS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3JkZXItc2Vjb25kYXJ5IHtcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMTQ2LCAxNDQsIDE0NCkgIWltcG9ydGFudDtcbn1cblxuaW5wdXRbdHlwZT0nbnVtYmVyJ10ge1xuICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbn1cblxuaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXG5pbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuIl19 */";
      /***/
    },

    /***/
    "C9+X":
    /*!*************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/monitores/integracao-pedidos/integracao-pedidos.module.ts ***!
      \*************************************************************************************************/

    /*! exports provided: AbastecimentoMonitoresIntegracaoPedidosModule */

    /***/
    function C9X(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoMonitoresIntegracaoPedidosModule", function () {
        return AbastecimentoMonitoresIntegracaoPedidosModule;
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


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-order-pipe */
      "fnxe");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
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


      var _integracao_pedidos_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./integracao-pedidos-routing.module */
      "LiyD");
      /* harmony import */


      var _integracao_pedidos_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./integracao-pedidos.component */
      "ZxEz");

      var AbastecimentoMonitoresIntegracaoPedidosModule = function AbastecimentoMonitoresIntegracaoPedidosModule() {
        _classCallCheck(this, AbastecimentoMonitoresIntegracaoPedidosModule);
      };

      AbastecimentoMonitoresIntegracaoPedidosModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_integracao_pedidos_component__WEBPACK_IMPORTED_MODULE_11__["AbastecimentoMonitoresIntegracaoPedidosComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _integracao_pedidos_routing_module__WEBPACK_IMPORTED_MODULE_10__["AbastecimentoMonitoresIntegracaoPedidosRoutingModule"], src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_7__["NotFoundModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsDatepickerModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["TabsModule"].forRoot(), ngx_order_pipe__WEBPACK_IMPORTED_MODULE_5__["OrderModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_9__["TemplatesModule"]]
      })], AbastecimentoMonitoresIntegracaoPedidosModule);
      /***/
    },

    /***/
    "EEgZ":
    /*!**************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/monitores/integracao-pedidos/integracao-pedidos.service.ts ***!
      \**************************************************************************************************/

    /*! exports provided: AbastecimentoMonitoresIntegracaoPedidosService */

    /***/
    function EEgZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoMonitoresIntegracaoPedidosService", function () {
        return AbastecimentoMonitoresIntegracaoPedidosService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

      var AbastecimentoMonitoresIntegracaoPedidosService = /*#__PURE__*/function () {
        function AbastecimentoMonitoresIntegracaoPedidosService(httpClient) {
          _classCallCheck(this, AbastecimentoMonitoresIntegracaoPedidosService);

          this.httpClient = httpClient;
          this.BASE_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API;
        }

        _createClass(AbastecimentoMonitoresIntegracaoPedidosService, [{
          key: "getIntegradoresPedidos",
          value: function getIntegradoresPedidos(params) {
            return this.httpClient.get("".concat(this.BASE_URL, "/common/v2/integradores-pedidos"), {
              params: {
                IN_STAT: params
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
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1));
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
          key: "getSituacoes",
          value: function getSituacoes() {
            return this.httpClient.get("".concat(this.BASE_URL, "/abastecimento/cadastros/situacao-integracao-pedido"), {
              observe: "response"
            });
          }
        }, {
          key: "getPedidosIntegracao",
          value: function getPedidosIntegracao(params) {
            return this.httpClient.get("".concat(this.BASE_URL, "/abastecimento/cadastros/pedidos-integracao"), {
              params: {
                DT_INIC_ENVI: params['DT_INIC_ENVI'],
                DT_FINA_ENVI: params['DT_FINA_ENVI'],
                ID_APOI_INTE_PEDI: params['ID_APOI_INTE_PEDI'].toString(),
                //ID_EMPR: params['ID_EMPR'],
                ID_DEPO: params['ID_DEPO'].toString(),
                //ID_FORN: params['ID_FORN'],
                ID_LINH: params['ID_LINH'],
                ID_SUB_LINH: params['ID_SUB_LINH'],
                ID_CLAS: params['ID_CLAS'],
                ID_MATE: params['ID_MATE'].toString(),
                //NR_PEDI: params['NR_PEDI'],
                ID_STAT_PEDI: params['ID_STAT_PEDI'].toString(),
                IN_INCL_ITEM_PEDI: params['IN_INCL_ITEM_PEDI'],
                IN_GERA_RELA_EXCE: params['IN_GERA_RELA_EXCE'],
                ID_USUA: params['ID_USUA'],
                NR_PAGE_INIC: params['NR_PAGE_INIC'],
                TT_REGI_PAGI: params['TT_REGI_PAGI'],
                ORDE_BY: params['ORDE_BY'],
                ORDE_TYPE: params['ORDE_TYPE']
              },
              observe: "response"
            });
          }
        }, {
          key: "getPedidosIntegracaoItens",
          value: function getPedidosIntegracaoItens(params) {
            return this.httpClient.get("".concat(this.BASE_URL, "/abastecimento/cadastros/pedido-integracao-itens"), {
              params: {
                ID_INTE_PEDI_COMP: params['ID_INTE_PEDI_COMP'],
                ID_STAT_ITEM_PEDI: "",
                NR_PAGE_INIC: "",
                TT_REGI_PAGI: "",
                ORDE_BY: "",
                ORDE_TYPE: ""
              },
              observe: "response"
            });
          }
        }, {
          key: "getPedidosIntegracaoLogs",
          value: function getPedidosIntegracaoLogs(params) {
            return this.httpClient.get("".concat(this.BASE_URL, "/abastecimento/cadastros/pedido-integracao-itens-auditoria"), {
              params: {
                ID_INTE_PEDI_COMP: params['ID_INTE_PEDI_COMP'],
                ID_INTE_PEDI_COMP_ITEM: params['ID_INTE_PEDI_COMP_ITEM'],
                NR_PAGE_INIC: "",
                TT_REGI_PAGI: "",
                ORDE_BY: "",
                ORDE_TYPE: ""
              },
              observe: "response"
            });
          }
        }]);

        return AbastecimentoMonitoresIntegracaoPedidosService;
      }();

      AbastecimentoMonitoresIntegracaoPedidosService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      AbastecimentoMonitoresIntegracaoPedidosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], AbastecimentoMonitoresIntegracaoPedidosService);
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
    "LiyD":
    /*!*********************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/monitores/integracao-pedidos/integracao-pedidos-routing.module.ts ***!
      \*********************************************************************************************************/

    /*! exports provided: AbastecimentoMonitoresIntegracaoPedidosRoutingModule */

    /***/
    function LiyD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoMonitoresIntegracaoPedidosRoutingModule", function () {
        return AbastecimentoMonitoresIntegracaoPedidosRoutingModule;
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


      var _integracao_pedidos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./integracao-pedidos.component */
      "ZxEz");

      var routes = [{
        path: '',
        component: _integracao_pedidos_component__WEBPACK_IMPORTED_MODULE_3__["AbastecimentoMonitoresIntegracaoPedidosComponent"]
      }];

      var AbastecimentoMonitoresIntegracaoPedidosRoutingModule = function AbastecimentoMonitoresIntegracaoPedidosRoutingModule() {
        _classCallCheck(this, AbastecimentoMonitoresIntegracaoPedidosRoutingModule);
      };

      AbastecimentoMonitoresIntegracaoPedidosRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AbastecimentoMonitoresIntegracaoPedidosRoutingModule);
      /***/
    },

    /***/
    "RXUc":
    /*!*************************************************************************************************!*\
      !*** ./src/app/modules/comercial/integracoes/dagda/integracao-pedidos/lista/lista.component.ts ***!
      \*************************************************************************************************/

    /*! exports provided: ComercialIntegracoesDagdaIntegracaoPedidosListaComponent */

    /***/
    function RXUc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialIntegracoesDagdaIntegracaoPedidosListaComponent", function () {
        return ComercialIntegracoesDagdaIntegracaoPedidosListaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lista.component.html */
      "qcnM");
      /* harmony import */


      var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lista.component.scss */
      "+WEo");
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "ienR");
      /* harmony import */


      var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-bootstrap/locale */
      "0b5p");
      /* harmony import */


      var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-bootstrap/chronos */
      "xj/R");
      /* harmony import */


      var _shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../../../../../shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _services_integracao_pedidos_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../services/integracao-pedidos.service */
      "tCjb");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS");
      /* harmony import */


      var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! src/app/shared/modules/confirm-modal/confirm-modal.service */
      "FOez");
      /* harmony import */


      var src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! src/app/shared/templates/detail-panel/detal-panel.service */
      "gIxL"); // Services


      Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_5__["defineLocale"])('pt-br', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_4__["ptBrLocale"]);

      var ComercialIntegracoesDagdaIntegracaoPedidosListaComponent = /*#__PURE__*/function () {
        function ComercialIntegracoesDagdaIntegracaoPedidosListaComponent(activatedRoute, router, location, localeService, formBuilder, pnotifyService, integracaoPedidosService, atividadesService, titleService, confirmModalService, detailPanelService, bsModalService) {
          _classCallCheck(this, ComercialIntegracoesDagdaIntegracaoPedidosListaComponent);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.location = location;
          this.localeService = localeService;
          this.formBuilder = formBuilder;
          this.pnotifyService = pnotifyService;
          this.integracaoPedidosService = integracaoPedidosService;
          this.atividadesService = atividadesService;
          this.titleService = titleService;
          this.confirmModalService = confirmModalService;
          this.detailPanelService = detailPanelService;
          this.bsModalService = bsModalService;
          this.loaderNavbar = false;
          this.loaderFullScreen = true;
          this.loaderModalFullScreen = false;
          this.breadCrumbTree = [];
          this.subtitles = [{
            id: 1,
            text: 'Integrado',
            color: 'green'
          }, {
            id: 2,
            text: 'Ag.Integração',
            color: 'gray'
          }, {
            id: 3,
            text: 'Erro',
            color: 'red'
          }];
          this.tableConfig = {
            subtitleBorder: true
          };
          this.showDetailPanel = false;
          this.orderBy = 'codigo';
          this.orderType = 'ASC';
          this.maxSize = 10;
          this.itemsPerPage = 300;
          this.currentPage = 1;
          this.totalItems = 0;
          this.status = [];
          this.logs = [];
          this.dados = [];
          this.dadosPagination = [];
          this.dadosLoaded = false;
          this.dadosEmpty = false;
          this.enviado = [];
          this.appTitle = 'Integração de Pedidos';
          this.localeService.use('pt-br');
          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialIntegracoesDagdaIntegracaoPedidosListaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getStatus();
            this.registrarAcesso();
            this.setBreadCrumb();
            this.setFormFilter();
            this.titleService.setTitle('Pedidos');
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {//this.showDetailPanelSubscription.unsubscribe();
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            var id = this.activatedRoute.snapshot.params.idSubModulo;
            this.breadCrumbTree = [{
              descricao: 'Home',
              routerLink: "/comercial/home"
            }, {
              descricao: 'Integração Dagda',
              routerLink: "/comercial/integracoes/dagda/".concat(id)
            }, {
              descricao: this.appTitle
            }];
          }
          /*Formulario */

        }, {
          key: "setFormFilter",
          value: function setFormFilter() {
            var formValue = this.checkRouterParams();
            this.form = this.formBuilder.group({
              idEmpresa: [formValue.idEmpresa],
              nomeEmpresa: [formValue.nomeEmpresa],
              pedidoTid: [formValue.pedidoTid],
              pedidoDagda: [formValue.pedidoDagda],
              status: [formValue.status],
              dataAcao: [formValue.dataAcao],
              orderBy: [formValue.orderBy],
              orderType: [formValue.orderType],
              pagina: [formValue.pagina],
              registros: [formValue.registros, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]
            });
            this.checkOrder();
            this.loaderFullScreen = false;
          }
        }, {
          key: "checkRouterParams",
          value: function checkRouterParams() {
            var _this = this;

            var formValue = {
              idEmpresa: '',
              nomeEmpresa: '',
              pedidoTid: '',
              pedidoDagda: '',
              status: 0,
              dataAcao: '',
              orderBy: this.orderBy,
              orderType: this.orderType,
              pagina: 1,
              registros: this.itemsPerPage
            };
            this.activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (queryParams) {
              if (Object.keys(queryParams).length > 0) {
                var params = atob(queryParams['q']);
                params = JSON.parse(params);

                _this.search(params);

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
          /*Modal*/

        }, {
          key: "openModal",
          value: function openModal(template, index) {
            this.modalRef = this.bsModalService.show(template, {
              "class": 'modal-xl'
            });
          }
        }, {
          key: "closeModal",
          value: function closeModal(modalRef) {
            this.modalRef.hide();
          }
          /*Filtrar*/

        }, {
          key: "onFilter",
          value: function onFilter() {
            if (this.form.valid) {
              this.itemsPerPage = this.form.value.registros;
              this.currentPage = 1;
              this.setRouterParams(this.verificaParams());
            }
          }
          /*Select */

        }, {
          key: "getStatus",
          value: function getStatus() {
            var _this2 = this;

            this.loaderFullScreen = true;
            this.integracaoPedidosService.getIntegracaoStatus().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(function () {
              _this2.loaderFullScreen = false;
            })).subscribe({
              next: function next(response) {
                if (response.success === true) {
                  _this2.status = response.data;

                  _this2.status.unshift({
                    id: 0,
                    nomeStatus: 'EXIBIR TODOS'
                  });
                } else {
                  _this2.pnotifyService.error();
                }
              },
              error: function error(_error) {
                _this2.pnotifyService.error();
              }
            });
          }
          /*Log /histórico */

        }, {
          key: "onLogs",
          value: function onLogs(item) {
            var _this3 = this;

            this.loaderModalFullScreen = true;
            this.integracaoPedidosService.getIntegracaoLogs(item).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(function () {
              _this3.loaderModalFullScreen = false;
            })).subscribe({
              next: function next(response) {
                if (response.body['success'] === true) {
                  _this3.logs = response.body['data'];
                }
              },
              error: function error(_error2) {
                _this3.pnotifyService.error();
              }
            });
          }
          /*Processar */

        }, {
          key: "postProcessamento",
          value: function postProcessamento(item, index) {
            var _this4 = this;

            item.dsIntegracao = 'Solicitação de Processamento';
            this.enviado.push(index);
            this.loaderNavbar = true;
            this.integracaoPedidosService.postIntegracaoPedidos(item).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(function () {
              _this4.loaderNavbar = false;
            })).subscribe({
              next: function next(response) {
                if (response.body['success'] === true) {
                  _this4.pnotifyService.success();

                  _this4.onFilter();
                }
              },
              error: function error(_error3) {
                _this4.enviado = [];

                _this4.pnotifyService.error();
              }
            });
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

            if (this.form.value.pedidoTid) {
              params.pedidoTid = this.form.value.pedidoTid;
            }

            if (this.form.value.pedidoDagda) {
              params.pedidoDagda = this.form.value.pedidoDagda;
            }

            if (this.form.value.status) {
              params.status = this.form.value.status;
            }

            if (this.form.value.dataAcao) {
              params.dataAcao = this.form.value.dataAcao;
            }

            params.orderBy = this.form.value.orderBy;
            params.orderType = this.form.value.orderType;
            return params;
          }
        }, {
          key: "search",
          value: function search(params) {
            var _this5 = this;

            this.loaderNavbar = true;
            this.dados = [];
            this.dadosPagination = [];
            this.dadosLoaded = false;
            this.dadosEmpty = false;
            this.integracaoPedidosService.getIntegracaoPedidos(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(function () {
              _this5.loaderNavbar = false;
              _this5.dadosLoaded = true;
            })).subscribe({
              next: function next(response) {
                if (response.status === 200) {
                  _this5.dados = response.body['data'];
                  _this5.dadosPagination = _this5.dados.slice(0, _this5.itemsPerPage);
                  _this5.totalItems = _this5.dados.length;
                  _this5.dadosLoaded = true;
                } else {
                  _this5.pnotifyService.notice('Nenhuma informação encontrada');

                  _this5.dadosEmpty = true;
                }
              },
              error: function error(_error4) {
                _this5.dadosEmpty = true;

                if (_error4.error.hasOwnProperty('mensagem')) {
                  _this5.pnotifyService.error(_error4.error.mensagem);
                } else {
                  _this5.pnotifyService.error();
                }
              }
            });
          }
          /* Borda lateral da tabela */

        }, {
          key: "classStatusBorder",
          value: function classStatusBorder(item) {
            var borderClass;

            if (item.status === '1') {
              borderClass = 'border-success';
            } else if (item.status === '2') {
              borderClass = 'border-secondary';
            } else if (item.status === '3') {
              borderClass = 'border-danger';
            }

            return borderClass;
          }
          /*Paginação */

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
        }]);

        return ComercialIntegracoesDagdaIntegracaoPedidosListaComponent;
      }();

      ComercialIntegracoesDagdaIntegracaoPedidosListaComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"]
        }, {
          type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_3__["BsLocaleService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_13__["PNotifyService"]
        }, {
          type: _services_integracao_pedidos_service__WEBPACK_IMPORTED_MODULE_14__["ComercialIntegracoesDagdaIntegracaoPedidosService"]
        }, {
          type: _shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__["AtividadesService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_15__["TitleService"]
        }, {
          type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_16__["ConfirmModalService"]
        }, {
          type: src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_17__["DetailPanelService"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__["BsModalService"]
        }];
      };

      ComercialIntegracoesDagdaIntegracaoPedidosListaComponent.propDecorators = {
        scrollToFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"],
          args: ['scrollToFilter', {}]
        }]
      };
      ComercialIntegracoesDagdaIntegracaoPedidosListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: 'comercial-cadastros-linha-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_3__["BsLocaleService"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_13__["PNotifyService"], _services_integracao_pedidos_service__WEBPACK_IMPORTED_MODULE_14__["ComercialIntegracoesDagdaIntegracaoPedidosService"], _shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__["AtividadesService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_15__["TitleService"], src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_16__["ConfirmModalService"], src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_17__["DetailPanelService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__["BsModalService"]])], ComercialIntegracoesDagdaIntegracaoPedidosListaComponent);
      /***/
    },

    /***/
    "Rfmj":
    /*!******************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/monitores/integracao-pedidos/integracao-pedidos.component.scss ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Rfmj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".text-purple {\n  color: purple;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hYmFzdGVjaW1lbnRvL21vbml0b3Jlcy9pbnRlZ3JhY2FvLXBlZGlkb3MvaW50ZWdyYWNhby1wZWRpZG9zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hYmFzdGVjaW1lbnRvL21vbml0b3Jlcy9pbnRlZ3JhY2FvLXBlZGlkb3MvaW50ZWdyYWNhby1wZWRpZG9zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtcHVycGxlIHtcbiAgY29sb3I6IHB1cnBsZTtcbn0iXX0= */";
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
    "XAB6":
    /*!*************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/integracoes/dagda/integracao-pedidos/integracao-pedidos-routing.module.ts ***!
      \*************************************************************************************************************/

    /*! exports provided: ComercialIntegracoesDagdaIntegracaoPedidosRoutingModule */

    /***/
    function XAB6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialIntegracoesDagdaIntegracaoPedidosRoutingModule", function () {
        return ComercialIntegracoesDagdaIntegracaoPedidosRoutingModule;
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


      var _core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../core/not-found/not-found.component */
      "6nXq");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./lista/lista.component */
      "RXUc");

      var routes = [{
        path: '',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_4__["ComercialIntegracoesDagdaIntegracaoPedidosListaComponent"]
      }, {
        path: '**',
        component: _core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"]
      }];

      var ComercialIntegracoesDagdaIntegracaoPedidosRoutingModule = function ComercialIntegracoesDagdaIntegracaoPedidosRoutingModule() {
        _classCallCheck(this, ComercialIntegracoesDagdaIntegracaoPedidosRoutingModule);
      };

      ComercialIntegracoesDagdaIntegracaoPedidosRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ComercialIntegracoesDagdaIntegracaoPedidosRoutingModule);
      /***/
    },

    /***/
    "ZxEz":
    /*!****************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/monitores/integracao-pedidos/integracao-pedidos.component.ts ***!
      \****************************************************************************************************/

    /*! exports provided: AbastecimentoMonitoresIntegracaoPedidosComponent */

    /***/
    function ZxEz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoMonitoresIntegracaoPedidosComponent", function () {
        return AbastecimentoMonitoresIntegracaoPedidosComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_integracao_pedidos_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./integracao-pedidos.component.html */
      "idQN");
      /* harmony import */


      var _integracao_pedidos_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./integracao-pedidos.component.scss */
      "Rfmj");
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


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap/chronos */
      "xj/R");
      /* harmony import */


      var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-bootstrap/locale */
      "0b5p");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS");
      /* harmony import */


      var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var _integracao_pedidos_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./integracao-pedidos.service */
      "EEgZ");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_7__["defineLocale"])('pt-br', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_8__["ptBrLocale"]);

      var AbastecimentoMonitoresIntegracaoPedidosComponent = /*#__PURE__*/function () {
        function AbastecimentoMonitoresIntegracaoPedidosComponent(activatedRoute, router, formBuilder, localeService, pnotifyService, atividadesService, routerService, titleService, dateService, service) {
          _classCallCheck(this, AbastecimentoMonitoresIntegracaoPedidosComponent);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.formBuilder = formBuilder;
          this.localeService = localeService;
          this.pnotifyService = pnotifyService;
          this.atividadesService = atividadesService;
          this.routerService = routerService;
          this.titleService = titleService;
          this.dateService = dateService;
          this.service = service;
          this.loaderFullScreen = true;
          this.loading = false;
          this.loadingDetalhes = false;
          this.loadingLogs = false;
          this.noResult = false;
          this.noResultDetalhes = false;
          this.noResultLogs = false;
          this.visibleEtapas = false;
          this.breadCrumbTree = [];
          this.dados = [];
          this.dadosDetalhes = [];
          this.dadosLogs = [];
          this.dadosExcel = [];
          this.integradores = [];
          this.depositos = [{
            id: 1,
            name: "Tiete"
          }, {
            id: 2,
            name: "RDP"
          }, {
            id: 3,
            name: "Osasco"
          }, {
            id: 4,
            name: "MT COGI"
          }];
          this.linhas = [];
          this.subLinhas = [];
          this.classes = [];
          this.materiais = [];
          this.situacoes = [];
          /* Ordenação */

          this.reverse = false;
          this.key = 'NM_EMPR';
          /* Ordenação */

          /* Ordenação modal */

          this.reverseA = false;
          this.keyA = 'NR_ITEM_PEDI';
          this.reverseB = false;
          this.keyB = 'NR_ITEM_PEDI';
          /* Paginação */

          this.itemsPerPage = 15;
          this.totalItems = 15;
          this.currentPage = 1;
          this.begin = 0;
          this.end = 15;
          /* Paginação */

          /* PaginationModal*/

          this.currentPageA = 1;
          this.beginA = 0;
          this.endA = 15;
          this.currentPageB = 1;
          this.beginB = 0;
          this.endB = 15;
          /* dados do usuário */

          this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
          this.idUsuario = this.currentUser['info']['id'];
          /* dados do usuário */

          this.modal = [];
          this.tableConfig = {
            subtitleBorder: true
          };
          this.localeService.use('pt-br');
          this.bsConfig = Object.assign({}, {
            containerClass: 'theme-dark-blue'
          }, {
            adaptivePosition: true
          }, {
            showWeekNumbers: false
          });
          this.form = this.formBuilder.group({
            dataInicial: [null],
            dataFinal: [null],
            integrador: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            depositos: [null],
            linha: [null],
            subLinha: [null],
            classe: [null],
            material: [null],
            situacao: [null]
          });
        }

        _createClass(AbastecimentoMonitoresIntegracaoPedidosComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            setTimeout(function () {
              _this6.loaderFullScreen = false;
            }, 1000);
            this.registrarAcesso();
            this.setBreadCrumb();
            this.titleService.setTitle('Integração de Pedidos');
            this.checkRouterParams();
            this.getLinhas();
            this.getSituacoes();
            this.getIntegradoresPedidos();
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
                descricao: 'Monitores',
                routerLink: "/abastecimento/monitores/".concat(params['idSubModulo'])
              }, {
                descricao: 'Integração de Pedidos'
              }];
            });
          }
        }, {
          key: "checkRouterParams",
          value: function checkRouterParams() {
            var _this8 = this;

            this.activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (queryParams) {
              if (Object.keys(queryParams).length > 0) {
                var _response = _this8.routerService.getBase64UrlParams(queryParams); //busca de dados


                _this8.search(_response);

                _this8.setFormValues(_response);
              }
            });
            this.activatedRouteSubscription.unsubscribe();
          }
        }, {
          key: "setFormValues",
          value: function setFormValues(queryParams) {
            var dataInicial = queryParams['DT_INIC_ENVI'] ? queryParams['DT_INIC_ENVI'] : null;
            var dataFinal = queryParams['DT_FINA_ENVI'] ? queryParams['DT_FINA_ENVI'] : null;
            var integrador = [];
            integrador = queryParams['ID_APOI_INTE_PEDI'] ? queryParams['ID_APOI_INTE_PEDI'] : null;
            var depositos = queryParams['ID_DEPO'] ? queryParams['ID_DEPO'] : null;
            var situacao = queryParams['ID_STAT_PEDI'] ? queryParams['ID_STAT_PEDI'] : null;
            var linha = queryParams['ID_LINH'] ? queryParams['ID_LINH'] : null;
            var subLinha = queryParams['ID_SUB_LINH'] ? queryParams['ID_SUB_LINH'] : null;
            var classe = queryParams['ID_CLAS'] ? queryParams['ID_CLAS'] : [];
            var material = queryParams['ID_MATE'] ? queryParams['ID_MATE'] : null; //consulta para recarregamento dos dados no form

            this.getDadosForm({
              linha: linha,
              subLinha: subLinha,
              classe: classe,
              integrador: integrador
            });
            this.form.patchValue({
              dataInicial: dataInicial,
              dataFinal: dataFinal,
              integrador: integrador,
              depositos: depositos,
              linha: linha,
              subLinha: subLinha,
              classe: classe,
              material: material,
              situacao: situacao
            });
          }
        }, {
          key: "getDadosForm",
          value: function getDadosForm(params) {
            var _this9 = this;

            /* Alimenta select depositos */
            if (params['integrador'] !== null) {
              var _params = {
                ID_APOI_INTE_PEDI: params['integrador']
              };
              this.service.getIntegradorDepositos(_params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(function () {
                return _this9.loaderNavbar = false;
              })).subscribe(function (res) {
                if (Object.keys(res).length > 0) {
                  if (res.status === 200) {
                    _this9.depositos = res['body']['result'];

                    _this9.setFormEnable(['depositos']);
                  }
                }
              }, function (error) {
                _this9.pnotifyService.error('Erro ao carregar Integradores');
              });
            } else {
              this.loaderNavbar = false;
              this.setFormDisable(['depositos']);
            }
            /* Alimenta select Sublinha */


            if (params['linha'] !== null) {
              var campos = ['subLinha'];
              this.service.getSubLinhas(params['linha'], 1).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(function () {
                return _this9.loaderNavbar = false;
              })).subscribe(function (res) {
                if (Object.keys(res).length > 0) {
                  if (res.status === 200) {
                    if (res['body']['responseCode'] === 200) {
                      _this9.subLinhas = res['body']['result'];

                      _this9.setFormEnable(campos);
                    } else if (res['body']['responseCode'] === 404) {
                      _this9.setFormDisable(campos);
                    }
                  }
                }
              }, function (error) {
                _this9.pnotifyService.error('Erro ao carregar Sublinhas');
              });
            } else {
              this.setFormDisable(['subLinha']);
            }
            /* Alimenta select Classes */


            if (params['linha'] !== null) {
              var _campos = ['classe'];
              this.service.getClasses(params['linha'], params['subLinha'], 1).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(function () {
                return _this9.loaderNavbar = false;
              })).subscribe(function (res) {
                if (Object.keys(res).length > 0) {
                  if (res.status === 200) {
                    _this9.classes = res['body']['result'];

                    _this9.setFormEnable(_campos);
                  }
                }
              }, function (error) {
                _this9.pnotifyService.error('Erro ao carregar Classes');
              });
            }
            /* Alimenta select Materiais */


            if (Object.keys(params['classe']).length > 0) {
              var _campos2 = ['material'];
              this.service.getMateriais(params['classe'], "", 1).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(function () {
                return _this9.loaderNavbar = false;
              })).subscribe(function (res) {
                if (Object.keys(res).length > 0) {
                  if (res['body'].responseCode === 200) {
                    _this9.materiais = res['body'].result;

                    _this9.setFormEnable(_campos2);
                  } else if (res['body']['responseCode'] === 204 || res['body']['responseCode'] === 404) {
                    _this9.setFormDisable(_campos2);

                    _this9.pnotifyService.notice('Não há materiais cadastrados para essa classe');
                  }
                }

                _this9.loaderNavbar = false;
              }, function (error) {
                _this9.pnotifyService.error('Erro ao carregar filtro Materias');
              });
            } else {
              this.loaderNavbar = false;
              this.setFormDisable(['material']);
            }
          }
        }, {
          key: "getIntegradoresPedidos",
          value: function getIntegradoresPedidos() {
            var _this10 = this;

            this.loaderNavbar = true;
            this.integradores = [];
            var idSituacao = 1;
            this.service.getIntegradoresPedidos(idSituacao).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(function () {
              return _this10.loaderNavbar = false;
            })).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                if (res.status === 200) {
                  _this10.integradores = res['body']['result'];
                }
              }
            }, function (error) {
              _this10.pnotifyService.error('Erro ao carregar Integradores');
            });
          }
        }, {
          key: "getIntegradorDepositos",
          value: function getIntegradorDepositos() {
            var _this11 = this;

            this.loaderNavbar = true;
            this.depositos = [];

            if (this.form.get('integrador').status === 'VALID') {
              var params = {
                ID_APOI_INTE_PEDI: this.form.value['integrador']
              };
              this.service.getIntegradorDepositos(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(function () {
                return _this11.loaderNavbar = false;
              })).subscribe(function (res) {
                if (Object.keys(res).length > 0) {
                  if (res.status === 200) {
                    _this11.depositos = res['body']['result'];

                    _this11.setFormEnable(['depositos']);
                  }
                }
              }, function (error) {
                _this11.pnotifyService.error('Erro ao carregar Integradores');
              });
            } else {
              this.loaderNavbar = false;
              this.setFormDisable(['depositos']);
              this.setFormReset(['depositos']);
            }
          }
        }, {
          key: "getLinhas",
          value: function getLinhas() {
            var _this12 = this;

            this.loaderNavbar = true;
            this.linhas = [];
            var campos = ['classe', 'subLinha', 'material', 'depositos'];
            this.setFormDisable(campos);
            var idSituacao = 1;
            this.service.getLinhas(idSituacao).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(function () {
              return _this12.loaderNavbar = false;
            })).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                if (res.status === 200) {
                  _this12.linhas = res['body']['result'];
                }
              }
            }, function (error) {
              _this12.pnotifyService.error('Erro ao carregar Linhas');
            });
          }
        }, {
          key: "getSituacoes",
          value: function getSituacoes() {
            var _this13 = this;

            this.loaderNavbar = true;
            this.situacoes = [];
            this.service.getSituacoes().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(function () {
              return _this13.loaderNavbar = false;
            })).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                if (res.status === 200) {
                  _this13.situacoes = res['body']['result'];
                }
              }
            }, function (error) {
              _this13.pnotifyService.error('Erro ao carregar Situações');
            });
          }
        }, {
          key: "getSubLinhas",
          value: function getSubLinhas() {
            var _this14 = this;

            this.loaderNavbar = true;
            var campos = ['subLinha', 'classe', 'material'];
            this.setFormReset(campos);
            this.setFormDisable(campos);
            this.subLinhas = [];

            if (this.form.get('linha').status === 'VALID') {
              var descricaoLinhas = this.form.get('linha').value;
              var idSituacao = 1;
              this.service.getSubLinhas(descricaoLinhas, idSituacao).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(function () {
                return _this14.loaderNavbar = false;
              })).subscribe(function (res) {
                if (Object.keys(res).length > 0) {
                  if (res.status === 200) {
                    if (res['body']['responseCode'] === 200) {
                      _this14.subLinhas = res['body']['result'];

                      _this14.setFormEnable(['subLinha']);
                    } else if (res['body']['responseCode'] === 404) {
                      _this14.pnotifyService.notice('Não há sublinha cadastrada');
                    }
                  }
                }
              }, function (error) {
                _this14.pnotifyService.error('Erro ao carregar sublinhas');
              });
            } else {
              this.loaderNavbar = false;
              this.setFormDisable(['subLinha']);
            }
          }
        }, {
          key: "getClasses",
          value: function getClasses() {
            var _this15 = this;

            this.classes = [];
            this.loaderNavbar = true;
            var campos = ['classe'];
            this.setFormReset(campos);

            if (this.form.value['linha'] != null && this.form.value['linha'].length > 0) {
              var descricaoLinhas = this.form.get('linha').value;
              var idSubLinha = this.form.get('subLinha').value;
              var idSituacao = 1;
              this.service.getClasses(descricaoLinhas, idSubLinha, idSituacao).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(function () {
                return _this15.loaderNavbar = false;
              })).subscribe(function (res) {
                if (Object.keys(res).length > 0) {
                  if (res.status === 200) {
                    _this15.classes = res['body']['result'];

                    _this15.setFormEnable(campos);
                  }
                }
              }, function (error) {
                _this15.pnotifyService.error('Erro ao carregar Classes');
              });
            } else {
              this.loaderNavbar = false;
              this.setFormDisable(campos);
            }
          }
        }, {
          key: "getMateriais",
          value: function getMateriais() {
            var _this16 = this;

            this.materiais = [];
            this.loaderNavbar = true;
            var campos = ['material'];
            this.setFormReset(campos);
            var idClasses = this.form.get('classe').value;
            var idTipoMaterial = "";
            var idSituacao = 1;

            if (this.form.value['classe'] != null && this.form.value['classe'].length > 0) {
              this.service.getMateriais(idClasses, idTipoMaterial, idSituacao).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(function () {
                return _this16.loaderNavbar = false;
              })).subscribe(function (res) {
                if (Object.keys(res).length > 0) {
                  if (res['body'].responseCode === 200) {
                    _this16.materiais = res['body'].result;

                    _this16.setFormEnable(campos);
                  } else if (res['body']['responseCode'] === 204 || res['body']['responseCode'] === 404) {
                    _this16.materiais = [];

                    _this16.setFormDisable(campos);

                    _this16.pnotifyService.notice('Não há materiais cadastrados para essa classe');
                  }
                }

                _this16.loaderNavbar = false;
              }, function (error) {
                _this16.pnotifyService.error('Erro ao carregar filtro Materias');
              });
            } else {
              this.loaderNavbar = false;
              this.setFormDisable(campos);
            }
          }
        }, {
          key: "onFilter",
          value: function onFilter() {
            var dataInicial = this.setDateValid(this.form.value['dataInicial']);
            var dataFinal = this.setDateValid(this.form.value['dataFinal']);
            this.setRouterParams({
              DT_INIC_ENVI: dataInicial ? dataInicial : "",
              DT_FINA_ENVI: dataFinal ? dataFinal : "",
              ID_APOI_INTE_PEDI: this.form.value['integrador'] ? this.form.value['integrador'] : "",
              ID_DEPO: this.form.value['depositos'] ? this.form.value['depositos'] : "",
              ID_LINH: this.form.value['linha'] ? this.form.value['linha'] : "",
              ID_SUB_LINH: this.form.value['subLinha'] ? this.form.value['subLinha'] : "",
              ID_CLAS: this.form.value['classe'] ? this.form.value['classe'] : "",
              ID_MATE: this.form.value['material'] ? this.form.value['material'] : "",
              ID_STAT_PEDI: this.form.value['situacao'] ? this.form.value['situacao'] : "",
              IN_INCL_ITEM_PEDI: "",
              IN_GERA_RELA_EXCE: "",
              ID_USUA: "",
              TT_REGI_PAGI: "",
              NR_PAGE_INIC: "",
              ORDE_BY: "",
              ORDE_TYPE: ""
            });
          }
        }, {
          key: "setRouterParams",
          value: function setRouterParams(params) {
            this.router.navigate([], {
              relativeTo: this.activatedRoute,
              queryParams: this.routerService.setBase64UrlParams(params)
            }); //busca dados

            this.search(params);
          }
        }, {
          key: "search",
          value: function search(params) {
            var _this17 = this;

            this.loaderNavbar = true;
            this.loading = false;
            this.service.getPedidosIntegracao(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(function () {
              return _this17.loaderNavbar = false;
            })).subscribe(function (res) {
              if (res.status === 200) {
                if (res['body']['responseCode'] === 200) {
                  _this17.dados = res['body']['result'];
                  _this17.loading = true;
                  _this17.noResult = false;
                } else if (res['body']['responseCode'] === 404) {
                  _this17.noResult = true;

                  _this17.pnotifyService.notice('Não há dados');
                }
              }
            }, function (error) {
              _this17.pnotifyService.error('Erro ao carregar dados');

              _this17.noResult = true;
            });
          }
        }, {
          key: "excelExport",
          value: function excelExport() {
            var dataInicial = this.setDateValid(this.form.value['dataInicial']);
            var dataFinal = this.setDateValid(this.form.value['dataFinal']);
            var params = {
              DT_INIC_ENVI: dataInicial ? dataInicial : "",
              DT_FINA_ENVI: dataFinal ? dataFinal : "",
              ID_APOI_INTE_PEDI: this.form.value['integrador'] ? this.form.value['integrador'] : "",
              ID_DEPO: this.form.value['depositos'] ? this.form.value['depositos'] : "",
              ID_LINH: this.form.value['linha'] ? this.form.value['linha'] : "",
              ID_SUB_LINH: this.form.value['subLinha'] ? this.form.value['subLinha'] : "",
              ID_CLAS: this.form.value['classe'] ? this.form.value['classe'] : "",
              ID_MATE: this.form.value['material'] ? this.form.value['material'] : "",
              ID_STAT_PEDI: this.form.value['situacao'] ? this.form.value['situacao'] : "",
              IN_INCL_ITEM_PEDI: 1,
              IN_GERA_RELA_EXCE: 1,
              ID_USUA: parseInt(this.idUsuario),
              TT_REGI_PAGI: "",
              NR_PAGE_INIC: "",
              ORDE_BY: "",
              ORDE_TYPE: ""
            };
            this.getPedidosIntegracaoExcel(params);
          }
        }, {
          key: "getPedidosIntegracaoExcel",
          value: function getPedidosIntegracaoExcel(params) {
            var _this18 = this;

            this.loaderNavbar = true;
            this.dadosExcel = [];
            this.service.getPedidosIntegracao(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(function () {
              return _this18.loaderNavbar = false;
            })).subscribe(function (res) {
              if (Object.keys(res).length > 0) {
                if (res['body']['responseCode'] === 200) {
                  _this18.dadosExcel = res['body']['result'];

                  _this18.pnotifyService.success(_this18.dadosExcel);
                } else if (res['body']['responseCode'] === 404) {
                  _this18.pnotifyService.notice('Nenhuma informação encontrada');
                }
              }
            }, function (error) {
              _this18.pnotifyService.error('Erro ao carregar para excel dados');
            });
          }
        }, {
          key: "onDetalhes",
          value: function onDetalhes(item) {
            this.modal.codFornecedor = item.ID_FORN_REFE_ERP;
            this.modal.descFornecedor = item.NM_FORN;
            this.modal.nPedido = item.NR_PEDI;
            this.modal.linhaPedido = item.NM_LINH;
            this.modal.condPagamento = item.DS_COND_PAGA;
            this.modal.dataEnvio = item.DT_ULTI_ENVI_PEDI;
            var params = {
              ID_INTE_PEDI_COMP: item.ID
            };
            this.getPedidosIntegracaoItens(params);
          }
        }, {
          key: "onLogs",
          value: function onLogs(item) {
            var params = {
              ID_INTE_PEDI_COMP: item.ID ? item.ID : "",
              ID_INTE_PEDI_COMP_ITEM: item.ID_ITEM_PEDI ? item.ID_ITEM_PEDI : ""
            };
            this.getPedidosIntegracaoLogs(params);
          }
        }, {
          key: "getPedidosIntegracaoLogs",
          value: function getPedidosIntegracaoLogs(params) {
            var _this19 = this;

            this.loaderNavbar = true;
            this.loadingLogs = false;
            this.service.getPedidosIntegracaoLogs(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(function () {
              return _this19.loaderNavbar = false;
            })).subscribe(function (res) {
              if (res.status === 200) {
                if (res['body']['responseCode'] === 200) {
                  _this19.dadosLogs = res['body']['result'];
                  _this19.loadingLogs = true;
                  _this19.noResultLogs = false;
                } else if (res['body']['responseCode'] === 404) {
                  _this19.loadingLogs = true;
                  _this19.noResultLogs = true;

                  _this19.pnotifyService.notice('Não há dados');
                }
              }
            }, function (error) {
              _this19.pnotifyService.error('Erro ao carregar dados');

              _this19.noResultLogs = true;
            });
          }
        }, {
          key: "getPedidosIntegracaoItens",
          value: function getPedidosIntegracaoItens(params) {
            var _this20 = this;

            this.loaderNavbar = true;
            this.loadingDetalhes = false;
            this.service.getPedidosIntegracaoItens(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(function () {
              return _this20.loaderNavbar = false;
            })).subscribe(function (res) {
              if (res.status === 200) {
                if (res['body']['responseCode'] === 200) {
                  _this20.dadosDetalhes = res['body']['result'];
                  _this20.loadingDetalhes = true;
                  _this20.noResultDetalhes = false;
                } else if (res['body']['responseCode'] === 404) {
                  _this20.loadingDetalhes = true;
                  _this20.noResultDetalhes = true;

                  _this20.pnotifyService.notice('Não há dados');
                }
              }
            }, function (error) {
              _this20.pnotifyService.error('Erro ao carregar dados');

              _this20.noResultDetalhes = true;
              _this20.loadingDetalhes = true;
            });
          }
        }, {
          key: "setDateValid",
          value: function setDateValid(date) {
            if (date instanceof Date) {
              date = this.dateService.convertToUrlDate(date);
            }

            return date;
          }
        }, {
          key: "setFormDisable",
          value: function setFormDisable(selects) {
            var _this21 = this;

            selects.forEach(function (element) {
              return _this21.form.get(element).disable();
            });
          }
        }, {
          key: "setFormEnable",
          value: function setFormEnable(selects) {
            var _this22 = this;

            selects.forEach(function (element) {
              return _this22.form.get(element).enable();
            });
          }
        }, {
          key: "setFormReset",
          value: function setFormReset(selects) {
            var _this23 = this;

            selects.forEach(function (element) {
              return _this23.form.get(element).reset();
            });
          }
        }, {
          key: "setIconeStatus",
          value: function setIconeStatus(idStatus) {
            var icone; //Aguardando integração

            if (idStatus == 'AB3E3D41-9D81-4C68-8549-6A48E4AAC4D1') {
              icone = 'fas fa-hourglass-half';
            } //Pronto para integrar


            if (idStatus == '8955B81D-2B64-4839-B9F5-ACC768C9A499') {
              icone = 'far fa-paper-plane text-secondary';
            } //Aguardando processamento do unica


            if (idStatus == 'F8820F49-AD30-4571-A595-C7EE9AC42E5F') {
              icone = 'fas fa-exchange-alt text-info';
            } //Erro de processamento da unica


            if (idStatus == '8065F50C-8AF9-42E8-8AC1-8BAB9B455DB4') {
              icone = 'fas fa-window-close text-danger';
            } //Aguardando criação de ov


            if (idStatus == '8C812241-00BD-4809-9D0D-B13F08358796') {
              icone = 'fas fa-cogs text-purple';
            } //Erro de criação de ov


            if (idStatus == '69881918-9C82-4683-86B9-F822C132178F') {
              icone = 'fas fa-exclamation-triangle text-warning';
            } //Ov gerada com sucesso


            if (idStatus == '55DFED4D-172C-4D6C-BC5E-4BC1B007C30E') {
              icone = 'fas fa-check text-success';
            }

            return icone;
          }
        }, {
          key: "setVisibleEtapas",
          value: function setVisibleEtapas() {
            this.visibleEtapas = !this.visibleEtapas;
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

          /* Ordenaçao modal */

        }, {
          key: "sortA",
          value: function sortA(keyA) {
            this.keyA = keyA;
            this.reverseA = !this.reverseA;
          }
        }, {
          key: "sortB",
          value: function sortB(keyB) {
            this.keyB = keyB;
            this.reverseB = !this.reverseB;
          }
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
          key: "onPageChangedB",
          value: function onPageChangedB(event) {
            this.beginB = (event.page - 1) * event.itemsPerPage;
            this.endB = event.page * event.itemsPerPage;
          }
        }]);

        return AbastecimentoMonitoresIntegracaoPedidosComponent;
      }();

      AbastecimentoMonitoresIntegracaoPedidosComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsLocaleService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_11__["RouterService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_12__["TitleService"]
        }, {
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_13__["DateService"]
        }, {
          type: _integracao_pedidos_service__WEBPACK_IMPORTED_MODULE_14__["AbastecimentoMonitoresIntegracaoPedidosService"]
        }];
      };

      AbastecimentoMonitoresIntegracaoPedidosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'integracao-pedidos',
        template: _raw_loader_integracao_pedidos_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_integracao_pedidos_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsLocaleService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_11__["RouterService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_12__["TitleService"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_13__["DateService"], _integracao_pedidos_service__WEBPACK_IMPORTED_MODULE_14__["AbastecimentoMonitoresIntegracaoPedidosService"]])], AbastecimentoMonitoresIntegracaoPedidosComponent);
      /***/
    },

    /***/
    "idQN":
    /*!********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/abastecimento/monitores/integracao-pedidos/integracao-pedidos.component.html ***!
      \********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function idQN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen\n  *ngIf=\"loaderFullScreen\"\n></loader-spinner-full-screen>\n<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<app-header appTitle=\"Integração de Pedidos\">\n  <button\n    type=\"button\"\n    (click)=\"onFilter()\"\n    [disabled]= \"form.status == 'INVALID'\"\n    >\n    Filtrar\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"excelExport()\"\n    [disabled]= \"form.status == 'INVALID'\"\n    >\n    Exportar Excel\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\n  <advanced-filter>\n      <form [formGroup]=\"form\" autocomplete=\"off\">\n        <div class=\"form-row\">\n          <div class=\"form-group col-lg-2\">\n            <label for=\"dataInicial\">Data Inicial</label>\n            <input\n              class=\"form-control\"\n              id=\"dataInicial\"\n              type=\"text\"\n              bsDatepicker\n              [bsConfig]=\"bsConfig\"\n              formControlName=\"dataInicial\"\n            />\n          </div>\n          <div class=\"form-group col-lg-2\">\n            <label for=\"dataFinal\">Data Final</label>\n            <input\n              class=\"form-control\"\n              id=\"dataFinal\"\n              type=\"text\"\n              bsDatepicker\n              [bsConfig]=\"bsConfig\"\n              formControlName=\"dataFinal\"\n            />\n          </div>\n          <div class=\"form-group col-lg-2\">\n            <label for=\"Integrador\">Integrador</label>\n            <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"false\"\n              [items]=\"integradores\"\n              [virtualScroll]=\"true\"\n              [multiple]=\"true\"\n              [hideSelected]=\"true\"\n              [closeOnSelect]=\"false\"\n              maxSelectedItems=\"6\"\n              placeholder=\"Selecione...\"\n              bindLabel=\"NM_APOI_INTE_PEDI\"\n              bindValue=\"ID\"\n              formControlName=\"integrador\"\n              (change)=\"getIntegradorDepositos()\"\n              [ngClass]=\"onFieldRequired('integrador')\"\n              >\n            </ng-select>\n            <invalid-form-control [show]=\"onFieldInvalid('integrador')\" message=\"Integrador é obrigatório.\"></invalid-form-control>\n          </div>\n          <div class=\"form-group col-lg-2\">\n            <label for=\"depositos\">Depositos</label>\n            <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"false\"\n              [items]=\"depositos\"\n              [virtualScroll]=\"true\"\n              [hideSelected]=\"true\"\n              [closeOnSelect]=\"false\"\n              [multiple]=\"true\"\n              placeholder=\"Selecione...\"\n              bindLabel=\"NM_DEPO\"\n              bindValue=\"ID_DEPO\"\n              formControlName=\"depositos\"\n            >\n            </ng-select>\n          </div>\n          <div class=\"form-group col-lg-2\">\n            <label for=\"linha\">Linha</label>\n            <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"true\"\n              [items]=\"linhas\"\n              [virtualScroll]=\"true\"\n              [hideSelected]=\"true\"\n              [closeOnSelect]=\"true\"\n              placeholder=\"Selecione...\"\n              bindLabel=\"NM_LINH\"\n              bindValue=\"ID\"\n              formControlName=\"linha\"\n              (change)=\"\n                getSubLinhas() +\n                  ' ' +\n                  getClasses()\n              \"\n            >\n            </ng-select>\n          </div>\n          <div class=\"form-group col-lg-2\">\n            <label for=\"subLinha\">Sublinha</label>\n            <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"true\"\n              [items]=\"subLinhas\"\n              [virtualScroll]=\"true\"\n              [hideSelected]=\"true\"\n              [closeOnSelect]=\"true\"\n              placeholder=\"Selecione...\"\n              bindLabel=\"NM_SUB_LINH\"\n              bindValue=\"ID\"\n              (change)=\"getClasses()\"\n              formControlName=\"subLinha\"\n            >\n            </ng-select>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-lg-2\">\n            <label for=\"classe\">Classe</label>\n            <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"true\"\n              [items]=\"classes\"\n              [virtualScroll]=\"true\"\n              [hideSelected]=\"true\"\n              [closeOnSelect]=\"false\"\n              maxSelectedItems=\"6\"\n              placeholder=\"Selecione...\"\n              bindLabel=\"NM_CLAS\"\n              bindValue=\"ID\"\n              formControlName=\"classe\"\n              (change)=\"getMateriais()\"\n            >\n            </ng-select>\n          </div>\n          <div class=\"form-group col-lg-6\">\n            <label for=\"material\">Material</label>\n            <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"false\"\n              [items]=\"materiais\"\n              [virtualScroll]=\"true\"\n              [hideSelected]=\"true\"\n              [closeOnSelect]=\"false\"\n              [multiple]=\"true\"\n              placeholder=\"Selecione...\"\n              bindLabel=\"ID_REFE_ERP_NM_MATE\"\n              bindValue=\"ID\"\n              formControlName=\"material\"\n            >\n            </ng-select>\n          </div>        \n          <div class=\"form-group col-lg-2\">\n            <label for=\"situacao\">Situação</label>\n            <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"false\"\n              [items]=\"situacoes\"\n              [virtualScroll]=\"true\"\n              [hideSelected]=\"true\"\n              [closeOnSelect]=\"false\"\n              [multiple]=\"true\"\n              placeholder=\"Selecione...\"\n              bindLabel=\"NM_APOI_SITU_INTE_PEDI\"\n              bindValue=\"ID\"\n              formControlName=\"situacao\"\n            >\n            </ng-select>\n          </div>        \n        </div>\n      </form>\n  </advanced-filter>\n  <div class=\"mt-3\" *ngIf=\"loading\">\n    <div class=\"text-primary d-flex align-items-center justify-content-end\">\n      <span (click)=\"setVisibleEtapas()\">\n        <p *ngIf=\"visibleEtapas\"><strong>MOSTRAR ETAPAS</strong></p>\n        <p *ngIf=\"!visibleEtapas\"><strong>OCULTAR ETAPAS</strong></p>\n      </span>\n    </div>\n    <div class=\"card-deck\" [hidden]=\"visibleEtapas\">\n      <div class=\"card border rounded bg-white shadow-sm\">\n        <div class=\"card-body\">\n          <h6 class=\"card-title\">ETAPA 1</h6>\n          <div class=\"border rounded bg-white shadow-sm w-100 p-3 mb-2\">\n            <div class=\"d-flex justify-content-between\">\n              <div class=\"bg-gray rounded-circle text-white icon-40 my-auto\"><i class=\"fas fa-hourglass-half\"></i></div>\n              <div class=\"text-right\">\n                <h5\n                class=\"font-weight-bolder mb-1\">\n                  {{dados[0].TT_AGUA_INTE}}\n                </h5>\n                <div class=\"text-muted small font-weight-bold\">AGUARDANDO INTEGRAÇÃO</div>\n              </div>\n            </div>\n          </div>\n          <div class=\"border rounded bg-white shadow-sm w-100 p-3 mb-2\">\n            <div class=\"d-flex justify-content-between\">\n              <div class=\"bg-secondary rounded-circle text-white icon-40 my-auto\"><i class=\"fas fa-paper-plane\"></i></div>\n              <div class=\"text-right\">\n                <h5\n                class=\"font-weight-bolder mb-1\">\n                  {{dados[0].TT_PRON_INTE}}\n                </h5>\n                <div class=\"text-muted small font-weight-bold\">PRONTO PARA INTEGRAR</div>\n              </div>\n            </div>\n          </div>\n          <div class=\"border rounded bg-white shadow-sm w-100 p-3\">\n            <div class=\"d-flex justify-content-between\">\n              <div class=\"bg-blue rounded-circle text-white icon-40 my-auto\"><i class=\"fas fa-exchange-alt\"></i></div>\n              <div class=\"text-right\">\n                <h5\n                class=\"font-weight-bolder mb-1\">\n                  {{dados[0].TT_AGUA_PROC_UNIC}}\n                </h5>\n                <div class=\"text-muted small font-weight-bold\">AGUARDANDO PROCESSAMENTO ÚNICA</div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"card border rounded bg-white shadow-sm\">\n        <div class=\"card-body\">\n          <h6 class=\"card-title\">ETAPA 2</h6>\n          <div class=\"border rounded bg-white shadow-sm w-100 p-3 mb-2\">\n            <div class=\"d-flex justify-content-between\">\n              <div class=\"bg-red rounded-circle text-white icon-40 my-auto\"><i class=\"fas fa-window-close\"></i></div>\n              <div class=\"text-right\">\n                <h5\n                class=\"font-weight-bolder mb-1\">\n                  {{dados[0].TT_PROC_UNIC_ERRO}}\n                </h5>\n                <div class=\"text-muted small font-weight-bold\">ERRO DE PROCESSAMENTO ÚNICA</div>\n              </div>\n            </div>\n          </div>\n          <div class=\"border rounded bg-white shadow-sm w-100 p-3\">\n            <div class=\"d-flex justify-content-between\">\n              <div class=\"bg-purple rounded-circle text-white icon-40 my-auto\"><i class=\"fas fa-cogs\"></i></div>\n              <div class=\"text-right\">\n                <h5\n                class=\"font-weight-bolder mb-1\">\n                {{dados[0].TT_AGUA_ORDE_VEND}}\n                </h5>\n                <div class=\"text-muted small font-weight-bold\">AGUARDANDO CRIAÇÃO DE OV</div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"card border rounded bg-white shadow-sm\">\n        <div class=\"card-body\">\n          <h6 class=\"card-title\">ETAPA 3</h6>\n          <div class=\"border rounded bg-white shadow-sm w-100 p-3 mb-2\">\n            <div class=\"d-flex justify-content-between\">\n              <div class=\"bg-yellow rounded-circle text-white icon-40 my-auto\"><i class=\"fas fa-exclamation-triangle\"></i></div>\n              <div class=\"text-right\">\n                <h5\n                class=\"font-weight-bolder mb-1\">\n                  {{dados[0].TT_ORDE_VEND_ERRO}}\n                </h5>\n                <div class=\"text-muted small font-weight-bold\">ERRO DE CRIAÇÃO DE OV</div>\n              </div>\n            </div>\n          </div>\n          <div class=\"border rounded bg-white shadow-sm w-100 p-3\">\n            <div class=\"d-flex justify-content-between\">\n              <div class=\"bg-green rounded-circle text-white icon-40 my-auto\"><i class=\"fas fa-check\"></i></div>\n              <div class=\"text-right\">\n                <h5\n                class=\"font-weight-bolder mb-1\">\n                  {{dados[0].TT_ORDE_VEND_SUCE}}\n                </h5>\n                <div class=\"text-muted small font-weight-bold\">OV GERADA COM SUCESSO</div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"table-responsive mt-3\">\n      <custom-table>\n        <ng-template #thead let-thead>\n          <tr class=\"text-center\">\n            <th nowrap scope=\"col\" class=\"hover\" (click)=\"sort('NM_EMPR')\">Empresa\n              <span *ngIf=\"key == 'NM_EMPR'\"\n                ><i\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\n                ></i\n              ></span>\n              <span *ngIf=\"key != 'NM_EMPR'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>  \n            </th>\n            <th nowrap scope=\"col\" class=\"hover\" (click)=\"sort('NM_DEPO')\">Depósito\n              <span *ngIf=\"key == 'NM_DEPO'\"\n                ><i\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\n                ></i\n              ></span>\n              <span *ngIf=\"key != 'NM_DEPO'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>  \n            </th>\n            <th nowrap scope=\"col\" class=\"hover\" (click)=\"sort('NR_PEDI')\">Nº pedido\n              <span *ngIf=\"key == 'NR_PEDI'\"\n                ><i\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\n                ></i\n              ></span>\n              <span *ngIf=\"key != 'NR_PEDI'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>  \n            </th>\n            <th nowrap scope=\"col\" class=\"hover\" (click)=\"sort('DT_PEDI')\">Data pedido\n              <span *ngIf=\"key == 'DT_PEDI'\"\n                ><i\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\n                ></i\n              ></span>\n              <span *ngIf=\"key != 'DT_PEDI'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>  \n            </th>\n            <th nowrap scope=\"col\" class=\"hover\" (click)=\"sort('NM_APOI_INTE_PEDI')\">Linha do pedido\n              <span *ngIf=\"key == 'NM_APOI_INTE_PEDI'\"\n                ><i\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\n                ></i\n              ></span>\n              <span *ngIf=\"key != 'NM_APOI_INTE_PEDI'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>  \n            </th>\n            <th nowrap scope=\"col\" class=\"hover\" (click)=\"sort('NM_GRUP_FORN')\">Grupo do fornecedor\n              <span *ngIf=\"key == 'NM_GRUP_FORN'\"\n                ><i\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\n                ></i\n              ></span>\n              <span *ngIf=\"key != 'NM_GRUP_FORN'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>  \n            </th>\n            <th nowrap scope=\"col\" class=\"hover\" (click)=\"sort('VL_TOTA_PEDI')\">Valor total\n              <span *ngIf=\"key == 'VL_TOTA_PEDI'\"\n                ><i\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\n                ></i\n              ></span>\n              <span *ngIf=\"key != 'VL_TOTA_PEDI'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>  \n            </th>\n            <th nowrap scope=\"col\" class=\"hover\" (click)=\"sort('QT_TOTA_PEDI')\">Peso (ton)\n              <span *ngIf=\"key == 'QT_TOTA_PEDI'\"\n                ><i\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\n                ></i\n              ></span>\n              <span *ngIf=\"key != 'QT_TOTA_PEDI'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>  \n            </th>\n            <th nowrap scope=\"col\" class=\"hover\" (click)=\"sort('DT_ENTR')\">Data desejada\n              <span *ngIf=\"key == 'DT_ENTR'\"\n                ><i\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\n                ></i\n              ></span>\n              <span *ngIf=\"key != 'DT_ENTR'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>  \n            </th>\n            <th nowrap scope=\"col\" class=\"hover\" (click)=\"sort('NR_ORDE_VEND_PEDI')\">Ordem de Venda\n              <span *ngIf=\"key == 'NR_ORDE_VEND_PEDI'\"\n                ><i\n                  [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\n                ></i\n              ></span>\n              <span *ngIf=\"key != 'NR_ORDE_VEND_PEDI'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>  \n            </th>\n            <th nowrap scope=\"col\" width=\"5%\"></th>\n            <th nowrap scope=\"col\" width=\"5%\"></th>\n            <th nowrap scope=\"col\" width=\"5%\"></th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr *ngFor=\"let item of dados | orderBy: key:reverse | slice: begin:end\">\n            <td nowrap>{{item.NM_EMPR}}</td>\n            <td nowrap>{{item.NM_DEPO}}</td>\n            <td nowrap class=\"text-right\">{{item.NR_PEDI | number}}</td>\n            <td nowrap class=\"text-center\">{{item.DT_PEDI | date:'dd/MM/yyyy'}}</td>\n            <td nowrap>{{item.NM_LINH}}</td>\n            <td nowrap>{{item.NM_GRUP_FORN}}</td>\n            <td nowrap class=\"text-right\">{{item.VL_TOTA_PEDI | currency:'BRL'}}</td>\n            <td nowrap class=\"text-right\">{{item.QT_TOTA_PEDI_TONE | number:'0.3'}}</td>\n            <td nowrap class=\"text-center\">{{item.DT_ENTR ? (item.DT_ENTR | date:'dd/MM/yyyy') : \"-\"}}</td>\n            <td nowrap class=\"text-center\">{{item.NR_ORDE_VEND_PEDI ? (item.NR_ORDE_VEND_PEDI | number:'0.0') : '-' }}</td>\n            <td nowrap width=\"5%\" class=\"text-center\">\n              <span>\n                <i [ngClass]=\"setIconeStatus(item.ID_STAT_PEDI)\" tooltip=\"{{item.DS_STAT_PEDI}}\"></i>\n              </span>\n            </td>\n            <td width=\"5%\" class=\"text-center\">\n              <span>\n                <i class=\"fas fa-external-link-alt text-info\" (click)=\"lgModalA.show() + '' +  onLogs(item)\" tooltip=\"Logs\"></i>\n              </span>\n            </td>\n            <td nowrap width=\"5%\" class=\"text-center\">\n              <span>\n                <i class=\"fas fa-search\" (click)=\"lgModal.show() + ' ' +  onDetalhes(item)\" tooltip=\"Detalhes\"></i>\n              </span>\n            </td>\n          </tr>\n        </ng-template>\n      </custom-table>\n    </div>\n    <div\n    class=\"col-12 mb-2 ml-2\"\n    *ngIf=\"!noResult && dados?.length > itemsPerPage\"\n  >\n    Exibindo {{ begin + 1 }} a {{ end }} de {{ dados?.length }}\n    <div class=\"d-flex\">\n      <pagination\n        [maxSize]=\"10\"\n        [totalItems]=\"dados?.length\"\n        (pageChanged)=\"onPageChanged($event)\"\n        [(itemsPerPage)]=\"itemsPerPage\"\n        [boundaryLinks]=\"true\"\n        [(ngModel)]=\"currentPage\"\n        previousText=\"&lsaquo;\"\n        nextText=\"&rsaquo;\"\n        firstText=\"&laquo;\"\n        lastText=\"&raquo;\"\n      >\n      </pagination>\n    </div>\n  </div>\n  </div>\n  <div\n    *ngIf=\"noResult\"\n    class=\"text-center d-flex justify-content-center align-items-center p-5\"\n    style=\"height: 80%;\"\n  >\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n  </div>\n</app-body>\n<div\n  bsModal\n  #lgModal=\"bs-modal\"\n  class=\"modal fade\"\n  tabindex=\"-1\"\n  role=\"dialog\"\n  aria-labelledby=\"dialog-sizes-name1\"\n  [hidden]=\"!loadingDetalhes\"\n>\n  <div class=\"modal-dialog modal-xl\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 id=\"dialog-sizes-name1\" class=\"modal-title pull-left\">\n          Detalhes\n        </h4>\n        <button\n          type=\"button\"\n          class=\"close pull-right\"\n          (click)=\"lgModal.hide()\"\n          aria-label=\"Close\"\n        >\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"mt-3\">\n          <div class=\"row mb-2 mt-2\">\n            <div class=\"col-3\">\n              <p style=\"font-size: 14px;\">\n                <strong> CÓD. FORNECEDOR: </strong> {{ modal.codFornecedor | number}}\n              </p>\n            </div>\n            <div class=\"col-3\">\n              <p style=\"font-size: 14px;\">\n                <strong> FORNECEDOR: </strong> {{ modal.descFornecedor }}\n              </p>\n            </div>\n            <div class=\"col-3\">\n              <p style=\"font-size: 14px;\">\n                <strong> Nº PEDIDO: </strong> {{ modal.nPedido | number }}\n              </p>\n            </div>\n            <div class=\"col-3\">\n              <p style=\"font-size: 14px;\">\n                <strong> LINHA PEDIDO: </strong> {{ modal.linhaPedido }}\n              </p>\n            </div>\n          </div>\n          <div class=\"row mb-2 mt-2\">\n            <div class=\"col-4\">\n              <p style=\"font-size: 14px;\">\n                <strong> COND. PAGAMENTO: </strong> {{ modal.condPagamento }}\n              </p>\n            </div>\n            <div class=\"col-4\">\n              <p style=\"font-size: 14px;\">\n                <strong> DATA ENVIO: </strong> {{ modal.dataEnvio ? (modal.dataEnvio | date:'dd/MM/yyyy') : '-' }}\n              </p>\n            </div>\n          </div>\n          <div class=\"table-responsive\" *ngIf=\"!noResultDetalhes && loadingDetalhes\">\n            <custom-table>\n              <ng-template #thead let-thead>\n                <tr class=\"text-center\">\n                  <th nowrap scope=\"col\" class=\"hover\" (click)=\"sortA('NR_ITEM_PEDI')\">Item\n                    <span *ngIf=\"keyA == 'NR_ITEM_PEDI'\"\n                      ><i\n                        [ngClass]=\"reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\n                      ></i\n                    ></span>\n                    <span *ngIf=\"keyA != 'NR_ITEM_PEDI'\"\n                      ><i [ngClass]=\"'fas fa-sort'\"></i\n                    ></span>  \n                  </th>\n                  <th nowrap scope=\"col\" class=\"hover\" (click)=\"sortA('ID_MATE_REFE_ERP')\">Cód. material\n                    <span *ngIf=\"keyA == 'ID_MATE_REFE_ERP'\"\n                      ><i\n                        [ngClass]=\"reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\n                      ></i\n                    ></span>\n                    <span *ngIf=\"keyA != 'ID_MATE_REFE_ERP'\"\n                      ><i [ngClass]=\"'fas fa-sort'\"></i\n                    ></span>  \n                  </th>\n                  <th nowrap scope=\"col\" class=\"hover\" (click)=\"sortA('NM_MATE')\">Material\n                    <span *ngIf=\"keyA == 'NM_MATE'\"\n                      ><i\n                        [ngClass]=\"reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\n                      ></i\n                    ></span>\n                    <span *ngIf=\"keyA != 'NM_MATE'\"\n                      ><i [ngClass]=\"'fas fa-sort'\"></i\n                    ></span>  \n                  </th>\n                  <th nowrap scope=\"col\" class=\"hover\" (click)=\"sortA('NM_LINH')\">Linha\n                    <span *ngIf=\"keyA == 'NM_LINH'\"\n                      ><i\n                        [ngClass]=\"reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\n                      ></i\n                    ></span>\n                    <span *ngIf=\"keyA != 'NM_LINH'\"\n                      ><i [ngClass]=\"'fas fa-sort'\"></i\n                    ></span>  \n                  </th>\n                  <th nowrap scope=\"col\" class=\"hover\" (click)=\"sortA('NM_SUB_LINH')\">Sublinha\n                    <span *ngIf=\"keyA == 'NM_SUB_LINH'\"\n                      ><i\n                        [ngClass]=\"reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\n                      ></i\n                    ></span>\n                    <span *ngIf=\"keyA != 'NM_SUB_LINH'\"\n                      ><i [ngClass]=\"'fas fa-sort'\"></i\n                    ></span>  \n                  </th>\n                  <th nowrap scope=\"col\" class=\"hover\" (click)=\"sortA('NM_CLAS')\">Classe\n                    <span *ngIf=\"keyA == 'NM_CLAS'\"\n                      ><i\n                        [ngClass]=\"reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\n                      ></i\n                    ></span>\n                    <span *ngIf=\"keyA != 'NM_CLAS'\"\n                      ><i [ngClass]=\"'fas fa-sort'\"></i\n                    ></span>  \n                  </th>\n                  <th nowrap scope=\"col\" class=\"hover\" (click)=\"sortA('DS_UNID')\">Un. Medida\n                    <span *ngIf=\"keyA == 'DS_UNID'\"\n                      ><i\n                        [ngClass]=\"reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\n                      ></i\n                    ></span>\n                    <span *ngIf=\"keyA != 'DS_UNID'\"\n                      ><i [ngClass]=\"'fas fa-sort'\"></i\n                    ></span>  \n                  </th>\n                  <th nowrap scope=\"col\" class=\"hover\" (click)=\"sortA('CD_MATE_FORN')\">Cód. Mat. Fornecedor\n                    <span *ngIf=\"keyA == 'CD_MATE_FORN'\"\n                      ><i\n                        [ngClass]=\"reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\n                      ></i\n                    ></span>\n                    <span *ngIf=\"keyA != 'CD_MATE_FORN'\"\n                      ><i [ngClass]=\"'fas fa-sort'\"></i\n                    ></span>  \n                  </th>\n                  <th nowrap scope=\"col\" class=\"hover\" (click)=\"sortA('VL_UNIT_ITEM')\">Valor Unitário\n                    <span *ngIf=\"keyA == 'VL_UNIT_ITEM'\"\n                      ><i\n                        [ngClass]=\"reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\n                      ></i\n                    ></span>\n                    <span *ngIf=\"keyA != 'VL_UNIT_ITEM'\"\n                      ><i [ngClass]=\"'fas fa-sort'\"></i\n                    ></span>  \n                  </th>\n                  <th nowrap scope=\"col\" class=\"hover\" (click)=\"sortA('QT_ITEM')\">Peso (TON)\n                    <span *ngIf=\"keyA == 'QT_ITEM'\"\n                      ><i\n                        [ngClass]=\"reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\n                      ></i\n                    ></span>\n                    <span *ngIf=\"keyA != 'QT_ITEM'\"\n                      ><i [ngClass]=\"'fas fa-sort'\"></i\n                    ></span>  \n                  </th>\n                  <th nowrap scope=\"col\" class=\"hover\" (click)=\"sortA('VL_TOTA_ITEM')\">Valor Total\n                    <span *ngIf=\"keyA == 'VL_TOTA_ITEM'\"\n                      ><i\n                        [ngClass]=\"reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\n                      ></i\n                    ></span>\n                    <span *ngIf=\"keyA != 'VL_TOTA_ITEM'\"\n                      ><i [ngClass]=\"'fas fa-sort'\"></i\n                    ></span>  \n                  </th>\n                  <th nowrap scope=\"col\" class=\"hover\" (click)=\"sortA('NR_ORDE_VEND_ITEM_PEDI')\">Ordem de Venda\n                    <span *ngIf=\"keyA == 'NR_ORDE_VEND_ITEM_PEDI'\"\n                      ><i\n                        [ngClass]=\"reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\n                      ></i\n                    ></span>\n                    <span *ngIf=\"keyA != 'NR_ORDE_VEND_ITEM_PEDI'\"\n                      ><i [ngClass]=\"'fas fa-sort'\"></i\n                    ></span>  \n                  </th>\n                  <th scope=\"col\" width=\"5%\"></th>\n                  <th scope=\"col\" width=\"5%\"></th>\n                </tr>\n              </ng-template>\n              <ng-template #tbody let-tbody>\n                <tr *ngFor=\"let item of dadosDetalhes | orderBy: keyA:reverseA | slice: beginA:endA\">\n                  <td nowrap class=\"text-right\">{{ item.NR_ITEM_PEDI | number}}</td>\n                  <td nowrap class=\"text-right\">{{ item.ID_MATE_REFE_ERP | number}}</td>\n                  <td nowrap>{{ item.NM_MATE}}</td>\n                  <td nowrap>{{ item.NM_LINH}}</td>\n                  <td nowrap class=\"text-center\">{{ item.NM_SUB_LINH ? item.NM_SUB_LINH : '-' }}</td>\n                  <td nowrap>{{ item.NM_CLAS}}</td>\n                  <td nowrap class=\"text-center\">{{ item.DS_UNID}}</td>\n                  <td nowrap class=\"text-center\">{{ item.CD_MATE_FORN ? item.CD_MATE_FORN : '-' }} </td>\n                  <td nowrap class=\"text-right\">{{ item.VL_UNIT_ITEM | currency:'BRL'}}</td>\n                  <td nowrap class=\"text-right\">{{ item.QT_ITEM_TONE | number: '0.3'}}</td>\n                  <td nowrap class=\"text-right\">{{ item.VL_TOTA_ITEM | currency:'BRL'}}</td>\n                  <td nowrap class=\"text-center\">{{item.NR_ORDE_VEND_ITEM_PEDI? (item.NR_ORDE_VEND_ITEM_PEDI | number:'0.0' ) : '-'}}</td>\n                  <td width=\"5%\" class=\"text-center\">\n                    <span>\n                      <i [ngClass]=\"setIconeStatus(item.ID_STAT_ITEM_PEDI)\" tooltip=\"{{item.DS_STAT_ITEM_PEDI}}\"></i>\n                    </span>\n                  </td>\n                  <td width=\"5%\" class=\"text-center\">\n                    <span>\n                      <i class=\"fas fa-external-link-alt text-info\" (click)=\"lgModalA.show() + '' +  onLogs(item)\" tooltip=\"Logs\"></i>\n                    </span>\n                  </td>\n                </tr>\n              </ng-template>\n            </custom-table>\n          </div>\n          <div\n          class=\"col-12 mb-2 ml-2\"\n          *ngIf=\"!noResultDetalhes && dadosDetalhes?.length > itemsPerPage\"\n        >\n          Exibindo {{ beginA + 1 }} a {{ endA }} de {{ dadosDetalhes?.length }}\n          <div class=\"d-flex\">\n            <pagination\n              [maxSize]=\"10\"\n              [totalItems]=\"dadosDetalhes?.length\"\n              (pageChanged)=\"onPageChangedA($event)\"\n              [(itemsPerPage)]=\"itemsPerPage\"\n              [boundaryLinks]=\"true\"\n              [(ngModel)]=\"currentPageA\"\n              previousText=\"&lsaquo;\"\n              nextText=\"&rsaquo;\"\n              firstText=\"&laquo;\"\n              lastText=\"&raquo;\"\n            >\n            </pagination>\n          </div>\n        </div>\n        </div>\n        <div\n          *ngIf=\"noResultDetalhes\"\n          class=\"text-center d-flex justify-content-center align-items-center p-5\"\n          style=\"height: 80%;\"\n        >\n          <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div\n  bsModal\n  #lgModalA=\"bs-modal\"\n  class=\"modal fade\"\n  tabindex=\"-1\"\n  role=\"dialog\"\n  aria-labelledby=\"dialog-sizes-name1\"\n  [hidden]=\"!loadingLogs\"\n  >\n  <div class=\"modal-dialog modal-xl\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 id=\"dialog-sizes-name1\" class=\"modal-title pull-left\">\n          Logs\n        </h4>\n        <button\n          type=\"button\"\n          class=\"close pull-right\"\n          (click)=\"lgModalA.hide()\"\n          aria-label=\"Close\"\n        >\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\" style=\"height:550px\">\n        <div class=\"mt-3\">\n          <div class=\"table-responsive\" *ngIf=\"!noResultLogs && loadingLogs\">\n            <custom-table>\n              <ng-template #thead let-thead>\n                <tr class=\"text-center\">\n                  <th nowrap scope=\"col\" class=\"hover\" (click)=\"sortB('NR_ITEM_PEDI')\">Item\n                    <span *ngIf=\"keyB == 'NR_ITEM_PEDI'\"\n                      ><i\n                        [ngClass]=\"reverseB ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\n                      ></i\n                    ></span>\n                    <span *ngIf=\"keyB != 'NR_ITEM_PEDI'\"\n                      ><i [ngClass]=\"'fas fa-sort'\"></i\n                    ></span>  \n                  </th>\n                  <th nowrap scope=\"col\" class=\"hover\" (click)=\"sortB('ID_MATE_REFE_ERP')\">Cód. Requisição\n                    <span *ngIf=\"keyB == 'ID_MATE_REFE_ERP'\"\n                      ><i\n                        [ngClass]=\"reverseB ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\n                      ></i\n                    ></span>\n                    <span *ngIf=\"keyB != 'ID_MATE_REFE_ERP'\"\n                      ><i [ngClass]=\"'fas fa-sort'\"></i\n                    ></span>  \n                  </th>\n                  <th nowrap scope=\"col\" class=\"hover\" (click)=\"sortB('NM_MATE')\">Descrição envio\n                    <span *ngIf=\"keyB == 'NM_MATE'\"\n                      ><i\n                        [ngClass]=\"reverseB ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\n                      ></i\n                    ></span>\n                    <span *ngIf=\"keyB != 'NM_MATE'\"\n                      ><i [ngClass]=\"'fas fa-sort'\"></i\n                    ></span>  \n                  </th>\n                  <th nowrap scope=\"col\" class=\"hover\" (click)=\"sortB('NM_LINH')\">Data envio\n                    <span *ngIf=\"keyB == 'NM_LINH'\"\n                      ><i\n                        [ngClass]=\"reverseB ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\n                      ></i\n                    ></span>\n                    <span *ngIf=\"keyB != 'NM_LINH'\"\n                      ><i [ngClass]=\"'fas fa-sort'\"></i\n                    ></span>  \n                  </th>\n                  <th nowrap scope=\"col\" class=\"hover\" (click)=\"sortB('NM_SUB_LINH')\">Usuário\n                    <span *ngIf=\"keyB == 'NM_SUB_LINH'\"\n                      ><i\n                        [ngClass]=\"reverseB ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\n                      ></i\n                    ></span>\n                    <span *ngIf=\"keyB != 'NM_SUB_LINH'\"\n                      ><i [ngClass]=\"'fas fa-sort'\"></i\n                    ></span>  \n                  </th>\n                </tr>\n              </ng-template>\n              <ng-template #tbody let-tbody>\n                <tr class=\"text-center\" *ngFor=\"let item of dadosLogs | orderBy: keyB:reverseB | slice: beginB:endB\">\n                  <td nowrap>{{ item.NR_ITEM_PEDI }}</td>\n                  <td nowrap>{{ item.CD_STAT_RETO_REQU }}</td>\n                  <td nowrap>{{ item.DS_STAT_RETO_REQU }}</td>\n                  <td nowrap>{{ item.DT_ACAO | date:'dd/MM/yyyy HH:mm' }}</td>\n                  <td nowrap>{{ item.NM_USUA }}</td>\n                </tr>\n              </ng-template>\n            </custom-table>\n          </div>\n          <div\n          class=\"col-12 mb-2 ml-2\"\n          *ngIf=\"!noResultLogs && dadosLogs?.length > itemsPerPage\"\n        >\n          Exibindo {{ beginB + 1 }} a {{ endB }} de {{ dadosLogs?.length }}\n          <div class=\"d-flex\">\n            <pagination\n              [maxSize]=\"10\"\n              [totalItems]=\"dadosLogs?.length\"\n              (pageChanged)=\"onPageChangedB($event)\"\n              [(itemsPerPage)]=\"itemsPerPage\"\n              [boundaryLinks]=\"true\"\n              [(ngModel)]=\"currentPageB\"\n              previousText=\"&lsaquo;\"\n              nextText=\"&rsaquo;\"\n              firstText=\"&laquo;\"\n              lastText=\"&raquo;\"\n            >\n            </pagination>\n          </div>\n        </div>\n        </div>\n        <div\n          *ngIf=\"noResultLogs\"\n          class=\"text-center d-flex justify-content-center align-items-center p-5\"\n          style=\"height: 80%;\"\n        >\n          <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "qcnM":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/integracoes/dagda/integracao-pedidos/lista/lista.component.html ***!
      \*****************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function qcnM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\n<app-header appTitle=\" Integração DAGDA\">\n  <button\n    type=\"button\"\n    (click)=\"onFilter()\">\n    Filtrar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\n     <div class=\"row\" #scrollToFilter>\n      <div class=\"col\">\n        <advanced-filter>\n          <form [formGroup]=\"form\" autocomplete=\"off\">\n            <div class=\"form-row\">\n              <div class=\"form-group col-lg-3\">\n                <label for=\"pedidoTid\">\n                  <span class=\"mr-1\">Pedido TID</span>\n                <ng-template #tooltipLabelDeTemplate>\n                  <p class=\"text-nowrap mb-0\">Código do Pedido TID</p>\n                </ng-template>\n                <i class=\"far fa-question-circle\" [tooltip]=\"tooltipLabelDeTemplate\" container=\"body\"></i>\n                </label>\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  formControlName=\"pedidoTid\"\n                  (keydown.enter)=\"onFilter()\">\n              </div>\n              <div class=\"form-group col-lg-3\">\n                <label for=\"pedidoDagda\">\n                  <span class=\"mr-1\">Pedido Dagda</span>\n                <ng-template #tooltipLabelParaTemplate>\n                  <p class=\"text-nowrap mb-0\">Código do Pedido Dagda </p>\n                </ng-template>\n                <i class=\"far fa-question-circle\" [tooltip]=\"tooltipLabelParaTemplate\" container=\"body\"></i> </label>\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  formControlName=\"pedidoDagda\"\n                  (keydown.enter)=\"onFilter()\">\n              </div>\n              <div class=\"form-group col-lg-3\">\n                <label for=\"status\">Status</label>\n                <ng-select\n                  [searchable]=\"true\"\n\t\t\t\t\t\t\t\t  [clearable]=\"false\"\n\t\t\t\t\t\t\t\t  [items]=\"status\"\n\t\t\t\t\t\t\t\t  [virtualScroll]=\"true\"\n                  placeholder=\"Selecione...\"\n\t\t\t\t\t\t\t\t  labelForId=\"status\"\n\t\t\t\t\t\t\t\t  bindLabel=\"nomeStatus\"\n\t\t\t\t\t\t\t\t  bindValue=\"id\"\n                  formControlName=\"status\"\n                  >\n                </ng-select>\n              </div>\n            </div>\n          </form>\n        </advanced-filter>\n      </div>\n    </div>\n    <!-- *ngIf=\"dadosPagination.length > 0 && !dadosEmpty -->\n    <div class=\"row\" >\n      <div class=\"col\">\n        <subtitles\n          [data]=\"subtitles\"\n          [show]=\"dadosPagination.length > 0 && !dadosEmpty \">\n        </subtitles>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div [ngClass]=\"{'col': !showDetailPanel, 'col-5 pr-0': showDetailPanel}\">\n        <custom-table [config]=\"tableConfig\" *ngIf=\"dadosPagination.length > 0 && !dadosEmpty\"   class=\"table\">\n          <ng-template  #thead let-thead >\n            <tr>\n              <th scope=\"col\" class=\"text-center\">Código Empresa</th>\n              <th scope=\"col\" class=\"text-center\">Nome da Empresa</th>\n              <th scope=\"col\" class=\"text-center\">Pedido TID</th>\n              <th scope=\"col\" class=\"text-center\">Pedido Dagda</th>\n              <th scope=\"col\" class=\"text-center\">Status</th>\n              <th scope=\"col\" class=\"text-center\">Dt.Integração</th>\n              <th scope=\"col\" class=\"text-center\"></th>\n              <th scope=\"col\" class=\"text-center\"></th>\n            </tr>\n          </ng-template>\n          <ng-template #tbody let-tbody >\n            <tr *ngFor=\"let item of dadosPagination; let i = index;\">\n              <td\n                class=\"hover text-center\"\n                [ngClass]=\"classStatusBorder(item)\">\n                {{ item.idEmpresa }}\n              </td>\n              <td\n                class=\"hover text-center\">\n                {{ item.nomeEmpresa | uppercase}}\n              </td>\n              <td\n                class=\"hover text-center\">\n                {{ item.pedidoTid | uppercase}}\n              </td>\n              <td\n                class=\"hover text-center\">\n                {{ item.pedidoDagda | uppercase}}\n              </td>\n              <td\n                class=\"hover text-center\">\n                {{ item.nomeStatus | uppercase}}\n              </td>\n              <td\n                class=\"hover text-center\">\n                {{ item.dataAcao | date: 'dd/MM/yyyy' }}\n              </td>\n              <td class=\"text-center\" >\n                <span >\n                <btn-icon\n                  icon=\"fas fa-sync-alt\"\n                  color=\"danger\"\n                  size=\"small\"\n                  tooltip=\"Reprocessar\"\n                  *ngIf=\"item.status == '3'\"\n                  (click)=\"postProcessamento(item , i);\"\n                  >\n                </btn-icon>\n                </span>\n              </td>\n              <td>\n              <span class=\"ml-2\">\n                <btn-icon\n                    icon=\"fas fa-history text-primary\"\n                    size=\"small\"\n                    tooltip=\"Log\"\n                    (click)=\"openModal(template, i); onLogs(item)\">\n                  </btn-icon>\n              </span>\n              </td>\n            </tr>\n          </ng-template>\n        </custom-table>\n        <empty-result\n          message=\"Nenhuma informação encontrada\"\n          class=\"my-3\"\n          *ngIf=\"dadosEmpty\">\n        </empty-result>\n        <div class=\"d-flex justify-content-center\" *ngIf=\"totalItems > itemsPerPage && dadosLoaded\">\n          <pagination\n            [maxSize]=\"10\"\n            [(totalItems)]=\"totalItems\"\n            (pageChanged)=\"onPageChanged($event)\"\n            [(itemsPerPage)]=\"itemsPerPage\"\n            [boundaryLinks]=\"true\"\n            [(ngModel)]=\"currentPage\"\n            previousText=\"&lsaquo;\"\n            nextText=\"&rsaquo;\"\n            firstText=\"&laquo;\"\n            lastText=\"&raquo;\">\n          </pagination>\n        </div>\n     </div>\n    </div>\n\n    <ng-template #template>\n      <div class=\"modal-body\">\n        <loader-spinner-full-screen *ngIf=\"loaderModalFullScreen\"></loader-spinner-full-screen>\n        <button type=\"button\" class=\"close pull-right \" (click)=\"closeModal(template)\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n        <div class=\"text-center mtc-title \">\n          <label>Integração de Pedidos</label>\n        </div>\n        <custom-table>\n          <ng-template #thead let-thead>\n            <tr>\n              <th scope=\"col\" class=\"text-center\">Data</th>\n              <th scope=\"col\" class=\"text-center\">Hora</th>\n              <th scope=\"col\" class=\"text-center\">Status</th>\n              <th scope=\"col\" class=\"text-center\">Motivo</th>\n            </tr>\n          </ng-template>\n          <ng-template #tbody let-tbody>\n            <tr *ngFor=\"let item of logs; let i = index;\" >\n              <td class=\"hover text-center\">\n                {{ item.dataAcao | date: 'dd/MM/yyyy'}}\n              </td>\n              <td class=\"hover text-center\">\n                {{ item.dataAcao | date: 'HH:MM:ss'}}\n              </td>\n              <td class=\"hover text-center\">\n                {{ item.nomeStatus}}\n              </td>\n              <td class=\"hover text-center\">\n                {{ item.dsIntegracao }}\n              </td>\n            </tr>\n          </ng-template>\n        </custom-table>\n      </div>\n    </ng-template>\n</app-body>\n\n";
      /***/
    },

    /***/
    "tCjb":
    /*!********************************************************************************************!*\
      !*** ./src/app/modules/comercial/integracoes/dagda/services/integracao-pedidos.service.ts ***!
      \********************************************************************************************/

    /*! exports provided: ComercialIntegracoesDagdaIntegracaoPedidosService */

    /***/
    function tCjb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialIntegracoesDagdaIntegracaoPedidosService", function () {
        return ComercialIntegracoesDagdaIntegracaoPedidosService;
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


      var _comercial_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../comercial.service */
      "VgqD");
      /* harmony import */


      var _tid_software_tid_software_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../tid-software/tid-software.service */
      "zN97");

      var ComercialIntegracoesDagdaIntegracaoPedidosService = /*#__PURE__*/function () {
        function ComercialIntegracoesDagdaIntegracaoPedidosService(http, comercialService, tidSoftwareService) {
          _classCallCheck(this, ComercialIntegracoesDagdaIntegracaoPedidosService);

          this.http = http;
          this.comercialService = comercialService;
          this.tidSoftwareService = tidSoftwareService;
          this.BASE_URL = "https://crm360.monterrey.com.bo/api";
          this.API = "https://crm360.monterrey.com.bo/api/comercial/integracoes/dagda";
        }

        _createClass(ComercialIntegracoesDagdaIntegracaoPedidosService, [{
          key: "getIntegracaoPedidos",
          value: function getIntegracaoPedidos(param) {
            return this.http.get("".concat(this.API), {
              params: param,
              observe: 'response'
            });
          }
        }, {
          key: "postIntegracaoPedidos",
          value: function postIntegracaoPedidos(params) {
            return this.http.post("".concat(this.API), params, {
              observe: 'response'
            });
          }
        }, {
          key: "getIntegracaoStatus",
          value: function getIntegracaoStatus() {
            return this.http.get("".concat(this.API, "/status"));
          }
        }, {
          key: "getIntegracaoLogs",
          value: function getIntegracaoLogs(param) {
            return this.http.get("".concat(this.API, "/logs"), {
              params: param,
              observe: 'response'
            });
          }
        }]);

        return ComercialIntegracoesDagdaIntegracaoPedidosService;
      }();

      ComercialIntegracoesDagdaIntegracaoPedidosService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _comercial_service__WEBPACK_IMPORTED_MODULE_3__["ComercialService"]
        }, {
          type: _tid_software_tid_software_service__WEBPACK_IMPORTED_MODULE_4__["ComercialTidSoftwareService"]
        }];
      };

      ComercialIntegracoesDagdaIntegracaoPedidosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _comercial_service__WEBPACK_IMPORTED_MODULE_3__["ComercialService"], _tid_software_tid_software_service__WEBPACK_IMPORTED_MODULE_4__["ComercialTidSoftwareService"]])], ComercialIntegracoesDagdaIntegracaoPedidosService);
      /***/
    },

    /***/
    "vEh0":
    /*!*****************************************************************************************************!*\
      !*** ./src/app/modules/comercial/integracoes/dagda/integracao-pedidos/integracao-pedidos.module.ts ***!
      \*****************************************************************************************************/

    /*! exports provided: ComercialIntegracoesDagdaIntegracaoPedidosModule */

    /***/
    function vEh0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialIntegracoesDagdaIntegracaoPedidosModule", function () {
        return ComercialIntegracoesDagdaIntegracaoPedidosModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./lista/lista.component */
      "RXUc");
      /* harmony import */


      var _shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/locales/pt */
      "vT00");
      /* harmony import */


      var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _integracao_pedidos_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./integracao-pedidos-routing.module */
      "XAB6");
      /* harmony import */


      var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/core/not-found/not-found.module */
      "sCnT");
      /* harmony import */


      var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-bootstrap/tooltip */
      "978R");
      /* harmony import */


      var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-bootstrap/pagination */
      "6No5");

      Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_7___default.a, 'pt'); //import { ComercialCadastrosPedidosTemplatesModule } from '../../../cadastros/pedidos/templates/templates.module';

      var ComercialIntegracoesDagdaIntegracaoPedidosModule = function ComercialIntegracoesDagdaIntegracaoPedidosModule() {
        _classCallCheck(this, ComercialIntegracoesDagdaIntegracaoPedidosModule);
      };

      ComercialIntegracoesDagdaIntegracaoPedidosModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"])({
        declarations: [_lista_lista_component__WEBPACK_IMPORTED_MODULE_1__["ComercialIntegracoesDagdaIntegracaoPedidosListaComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_11__["TooltipModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_12__["PaginationModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"], _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_2__["TemplatesModule"], src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_10__["NotFoundModule"], //ComercialIntegracoesDagdaPedidosTemplatesModule,
        // ComercialCadastrosPedidosTemplatesModule,
        _integracao_pedidos_routing_module__WEBPACK_IMPORTED_MODULE_9__["ComercialIntegracoesDagdaIntegracaoPedidosRoutingModule"]],
        providers: [{
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_8__["LOCALE_ID"],
          useValue: 'pt-BR'
        }]
      })], ComercialIntegracoesDagdaIntegracaoPedidosModule);
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
//# sourceMappingURL=integracao-pedidos-integracao-pedidos-module-es5.js.map