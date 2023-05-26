(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["coletas-coletas-module"], {
    /***/
    "0co3":
    /*!*****************************************************************************!*\
      !*** ./src/app/modules/logistica/entrega/coletas/coletas-routing.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: LogisticaEntregaColetasRoutingModule */

    /***/
    function co3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaEntregaColetasRoutingModule", function () {
        return LogisticaEntregaColetasRoutingModule;
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
      "POLo");
      /* harmony import */


      var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./cadastro/cadastro.component */
      "lLcG");

      var routes = [{
        path: '',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_3__["LogisticaEntregaColetasListaComponent"]
      }, {
        path: 'novo',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__["LogisticaEntregaColetasCadastroComponent"]
      }, {
        path: ':id',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__["LogisticaEntregaColetasCadastroComponent"]
      }];

      var LogisticaEntregaColetasRoutingModule = function LogisticaEntregaColetasRoutingModule() {
        _classCallCheck(this, LogisticaEntregaColetasRoutingModule);
      };

      LogisticaEntregaColetasRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LogisticaEntregaColetasRoutingModule);
      /***/
    },

    /***/
    "8ouN":
    /*!****************************************************************!*\
      !*** ./src/app/modules/comercial/services/clientes.service.ts ***!
      \****************************************************************/

    /*! exports provided: ComercialClientesService */

    /***/
    function ouN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialClientesService", function () {
        return ComercialClientesService;
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

      var ComercialClientesService = /*#__PURE__*/function () {
        function ComercialClientesService(http) {
          _classCallCheck(this, ComercialClientesService);

          this.http = http;
          this.API = "https://crm360.monterrey.com.bo/api/comercial/clientes";
        }

        _createClass(ComercialClientesService, [{
          key: "getStatus",
          value: function getStatus() {
            return this.http.get("".concat(this.API, "/pesquisa/status")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getClientes",
          value: function getClientes(params) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/pesquisa/lista"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getClientesGrupoEconomico",
          value: function getClientesGrupoEconomico(codCliente) {
            return this.http.get("".concat(this.API, "/pesquisa/grupo-economico/").concat(codCliente)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getPermissaoAcesso",
          value: function getPermissaoAcesso(id) {
            return this.http.get("".concat(this.API, "/permissao-acesso/").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getDetalhes",
          value: function getDetalhes(codCliente) {
            return this.http.get("".concat(this.API, "/pesquisa/detalhes/").concat(codCliente)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getContatosResumido",
          value: function getContatosResumido(codCliente) {
            return this.http.get("".concat(this.API, "/pesquisa/contatos/").concat(codCliente)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getExisteCpfCnpj",
          value: function getExisteCpfCnpj(documento, getDadosCliente) {
            return this.http.get("".concat(this.API, "/verificar-cpf-cnpj/").concat(documento, "?getDadosCliente=").concat(getDadosCliente === true ? 1 : 0)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "postCliente",
          value: function postCliente(data) {
            return this.http.post("".concat(this.API, "/pre-cadastro"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getPropostaAnaliseCredito",
          value: function getPropostaAnaliseCredito(codCliente) {
            return this.http.get("".concat(this.API, "/proposta-analise-credito/").concat(codCliente)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getDadosFaturamento",
          value: function getDadosFaturamento(codCliente) {
            return this.http.get("".concat(this.API, "/cadastro/carregar/dados-faturamento/").concat(codCliente)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "updateDadosFaturamento",
          value: function updateDadosFaturamento(data) {
            return this.http.put("".concat(this.API, "/cadastro/salvar/dados-faturamento"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "deleteAtividadeSecundaria",
          value: function deleteAtividadeSecundaria(codCliente, id) {
            return this.http["delete"]("".concat(this.API, "/cadastro/excluir/atividade-secundaria/").concat(codCliente, "/").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getEnderecos",
          value: function getEnderecos(codCliente, params) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/cadastro/carregar/enderecos/").concat(codCliente), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getEndereco",
          value: function getEndereco(codCliente, idEndereco, idSituacao) {
            return this.http.get("".concat(this.API, "/cadastro/carregar/endereco/").concat(codCliente, "/").concat(idEndereco, "/").concat(idSituacao)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "updateEndereco",
          value: function updateEndereco(data) {
            return this.http.put("".concat(this.API, "/cadastro/salvar/endereco"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "deleteEndereco",
          value: function deleteEndereco(codCliente, id) {
            return this.http["delete"]("".concat(this.API, "/cadastro/excluir/endereco/").concat(codCliente, "/").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getContatos",
          value: function getContatos(codCliente) {
            return this.http.get("".concat(this.API, "/cadastro/carregar/contatos/").concat(codCliente)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getContato",
          value: function getContato(codCliente, idContato) {
            return this.http.get("".concat(this.API, "/cadastro/carregar/contato/").concat(codCliente, "/").concat(idContato)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "updateContato",
          value: function updateContato(data) {
            return this.http.put("".concat(this.API, "/cadastro/salvar/contato"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "deleteContato",
          value: function deleteContato(codCliente, id, idSeqTid) {
            return this.http["delete"]("".concat(this.API, "/cadastro/excluir/contato/").concat(codCliente, "/").concat(id, "/").concat(idSeqTid)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "deleteMeioContato",
          value: function deleteMeioContato(codCliente, id, idSeqTid) {
            return this.http["delete"]("".concat(this.API, "/cadastro/excluir/meio-contato/").concat(codCliente, "/").concat(id, "/").concat(idSeqTid)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "deleteFilho",
          value: function deleteFilho(idFilho) {
            return this.http["delete"]("".concat(this.API, "/cadastro/excluir/filho/").concat(idFilho)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getDadosRelacionamento",
          value: function getDadosRelacionamento(codCliente) {
            return this.http.get("".concat(this.API, "/cadastro/carregar/dados-relacionamento/").concat(codCliente)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "updateDadosRelacionamento",
          value: function updateDadosRelacionamento(data) {
            return this.http.put("".concat(this.API, "/cadastro/salvar/dados-relacionamento"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getPotencialCompra",
          value: function getPotencialCompra(codCliente) {
            return this.http.get("".concat(this.API, "/cadastro/carregar/potencial-compra/").concat(codCliente)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "updatePotencialCompra",
          value: function updatePotencialCompra(data) {
            return this.http.put("".concat(this.API, "/cadastro/salvar/potencial-compra"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getAnexos",
          value: function getAnexos(codCliente) {
            return this.http.get("".concat(this.API, "/cadastro/carregar/anexos/").concat(codCliente)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1) // , retry(2)
            );
          }
        }, {
          key: "uploadAnexo",
          value: function uploadAnexo(data) {
            return this.http.post("".concat(this.API, "/cadastro/upload/anexo"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1) // , retry(2)
            );
          }
        }, {
          key: "deleteAnexo",
          value: function deleteAnexo(idAnexo) {
            return this.http["delete"]("".concat(this.API, "/cadastro/excluir/anexo/").concat(idAnexo)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getFilial",
          value: function getFilial(codCliente) {
            return this.http.get("".concat(this.API, "/cadastro/carregar/filial/").concat(codCliente)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getTravas",
          value: function getTravas(codCliente) {
            return this.http.get("".concat(this.API, "/cadastro/carregar/travas/").concat(codCliente)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getInformacoesFinanceiras",
          value: function getInformacoesFinanceiras(codCliente) {
            return this.http.get("".concat(this.API, "/cadastro/carregar/informacoes-financeiras/").concat(codCliente)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getInformacoesComerciais",
          value: function getInformacoesComerciais(codCliente) {
            return this.http.get("".concat(this.API, "/cadastro/carregar/informacoes-comerciais/").concat(codCliente)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getListaEmails",
          value: function getListaEmails(codCliente) {
            return this.http.get("".concat(this.API, "/emails/lista/").concat(codCliente)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }]);

        return ComercialClientesService;
      }();

      ComercialClientesService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      ComercialClientesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ComercialClientesService);
      /***/
    },

    /***/
    "C6OW":
    /*!*******************************************************************************!*\
      !*** ./src/app/modules/logistica/entrega/coletas/services/pedidos.service.ts ***!
      \*******************************************************************************/

    /*! exports provided: LogisticaEntregaPedidosService */

    /***/
    function C6OW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaEntregaPedidosService", function () {
        return LogisticaEntregaPedidosService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp"); // angular
      // services


      var LogisticaEntregaPedidosService = /*#__PURE__*/function () {
        function LogisticaEntregaPedidosService(http) {
          _classCallCheck(this, LogisticaEntregaPedidosService);

          this.http = http;
          this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API;
          this.postDocumentosEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        _createClass(LogisticaEntregaPedidosService, [{
          key: "postPedido",
          value: function postPedido(params) {
            return this.http.post("".concat(this.API, "/logistica/coletas"), params, {
              observe: "response"
            });
          }
        }, {
          key: "getPedidos",
          value: function getPedidos(params) {
            return this.http.get("".concat(this.API, "/logistica/coletas"), {
              params: params,
              observe: "response"
            });
          }
        }, {
          key: "postDocumento",
          value: function postDocumento(files, params) {
            return this.http.post("".concat(this.API, "/logistica/coletas/documentos?ID_LOGI_COLE=").concat(params === null || params === void 0 ? void 0 : params.ID_LOGI_COLE), files, {
              observe: "response"
            });
          }
        }, {
          key: "putDocumento",
          value: function putDocumento(documento) {
            return this.http.put("".concat(this.API, "/logistica/coletas/documentos"), documento, {
              observe: "response"
            });
          }
        }, {
          key: "getDocumentos",
          value: function getDocumentos(params) {
            return this.http.get("".concat(this.API, "/logistica/coletas/documentos"), {
              params: params,
              observe: "response"
            });
          }
        }, {
          key: "getEmpresas",
          value: function getEmpresas() {
            var empresas = [{
              "id": "18",
              "nome": "Distribuição Tiete",
              "cnpj": "49795800001883"
            }, {
              "id": "79",
              "nome": "Distribuição Taipas",
              "cnpj": "49795800002340"
            }, {
              "id": "6",
              "nome": "Distribuição Osasco",
              "cnpj": "49795800001530"
            }, {
              "id": "77",
              "nome": "Distribuição Camanducaia",
              "cnpj": "10431297000365"
            }, {
              "id": "41",
              "nome": "Distribuição Valença",
              "cnpj": "10431297000365"
            }, {
              "id": "19",
              "nome": "Distribuição Volta Redonda",
              "cnpj": "10431297000365"
            }, {
              "id": "3",
              "nome": "C&D Rio das Pedras",
              "cnpj": "02506609000162"
            }, {
              "id": "46",
              "nome": "C&D Cajamar",
              "cnpj": "02506609000243"
            }, {
              "id": "72",
              "nome": "C&D Praia Grande",
              "cnpj": "02506609000324"
            }, {
              "id": "9661",
              "nome": "DBA Aço Especial",
              "cnpj": "17469701002897"
            }, {
              "id": "9645",
              "nome": "DBA Piracicaba",
              "cnpj": "17469701002897"
            }, {
              "id": "9636",
              "nome": "DBA Praia Grande",
              "cnpj": "17469701002897"
            }, {
              "id": "9639",
              "nome": "DBA Jacarei",
              "cnpj": "17469701002897"
            }];
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(empresas);
          }
        }]);

        return LogisticaEntregaPedidosService;
      }();

      LogisticaEntregaPedidosService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      LogisticaEntregaPedidosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], LogisticaEntregaPedidosService);
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
    "Fvqg":
    /*!******************************************************************************!*\
      !*** ./src/app/modules/logistica/entrega/coletas/lista/lista.component.scss ***!
      \******************************************************************************/

    /*! exports provided: default */

    /***/
    function Fvqg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "button {\n  background: transparent;\n  border: none;\n}\n\nbutton:disabled {\n  cursor: no-drop;\n}\n\n::ng-deep .tooltip-inner {\n  max-width: 700px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvZW50cmVnYS9jb2xldGFzL2xpc3RhL2xpc3RhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvZW50cmVnYS9jb2xldGFzL2xpc3RhL2xpc3RhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9ue1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG5idXR0b246ZGlzYWJsZWR7XG4gIGN1cnNvcjogbm8tZHJvcDtcbn1cblxuOjpuZy1kZWVwIC50b29sdGlwLWlubmVye1xuICBtYXgtd2lkdGg6IDcwMHB4ICFpbXBvcnRhbnQ7XG59Il19 */";
      /***/
    },

    /***/
    "Kax+":
    /*!**************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/entrega/coletas/cadastro/cadastro.component.html ***!
      \**************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Kax(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\n<app-header [appTitle]=\"appTitle\">\n  <!-- <button\n    (click)=\"openModal(pesquisaDeClientes)\"\n    [disabled]=\"isDisable\"\n  >\n    Pesquisar Cliente\n  </button> -->\n  <button\n    [disabled]=\"form.status == 'INVALID' || isDisable\"\n    (click) = \"postPedido()\"\n  >\n    Salvar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\n  <form [formGroup]=\"form\" autocomplete=\"off\" [hidden] = \"loading\">\n    <fieldset  class=\"col-12\" [disabled]=\"formDisabled\">\n      <fieldset class=\"border rounded shadow-sm col-6 pt-2 mx-auto\">\n        <legend>Datos del documento</legend>\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col-md-6 pl-0\">\n            <label for=\"cdPedido\">Nº del documento</label>\n            <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"cdPedido\"\n                placeholder=\"Escribelo...\"\n                formControlName=\"CD_PEDI\"\n                [ngClass]=\"onFieldRequired('CD_PEDI')\"\n              />\n              <invalid-form-control [show]=\"onFieldInvalid('CD_PEDI')\" message=\"Campo obligatorio\"></invalid-form-control>\n            </div>\n          <div class=\"form-group col-md-6 pr-0\">\n            <label for=\"DT_PEDI\"> Fecha de expedición del documento </label>\n            <div class=\"input-group\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">\n                  <i class=\"far fa-calendar-alt\"></i>\n                </span>\n              </div>\n              <input\n              class=\"form-control\"\n              id=\"DT_PEDI\"\n              type=\"text\"\n              bsDatepicker\n              [bsConfig]=\"bsConfig\"\n              placeholder=\"Escribelo...\"\n              formControlName=\"DT_PEDI\"\n              [ngClass]=\"onFieldRequired('DT_PEDI')\"\n            />\n            <invalid-form-control [show]=\"onFieldInvalid('DT_PEDI')\" message=\"Campo obligatorio\"></invalid-form-control>\n            </div>\n          </div>\n        </div>\n        <br>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-6 pl-0\">\n            <label for=\"QT_PESO\">Peso (Kg's)</label>\n            <input\n              type=\"number\"\n              class=\"form-control\"\n              id=\"QT_PESO\"\n              placeholder=\"Escribelo...\"\n              formControlName=\"QT_PESO\"\n              [ngClass]=\"onFieldRequired('QT_PESO')\"\n            />\n            <invalid-form-control [show]=\"onFieldInvalid('QT_PESO')\" message=\"Campo obligatorio\"></invalid-form-control>\n          </div>\n          <div class=\"form-group col-md-6 pr-0\">\n            <label for=\"TIPO_ENTR\">Tipo de orden</label>\n            <select\n              class=\"form-control custom-select\"\n              id=\"TIPO_ENTR\"\n              formControlName=\"TIPO_ENTR\"\n              [ngClass]=\"onFieldRequired('TIPO_ENTR')\"  \n            >\n              <option value=\"Entrega\">Entrega</option>\n              <option value=\"Servico\">Serviço</option>\n            </select>\n          <invalid-form-control [show]=\"onFieldInvalid('TIPO_ENTR')\" message=\"Campo obligatorio\"></invalid-form-control>\n          </div>\n        </div>\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col-md-6 pl-0\">\n            <label for=\"NOTA_FISC\">Factura</label>\n            <input\n              type=\"number\"\n              class=\"form-control\"\n              id=\"NOTA_FISC\"\n              placeholder=\"Escribelo...\"\n              formControlName=\"NOTA_FISC\"\n              [ngClass]=\"onFieldRequired('NOTA_FISC')\"\n            />\n            <invalid-form-control [show]=\"onFieldInvalid('NOTA_FISC')\" message=\"Campo obligatorio\"></invalid-form-control>\n          </div>\n          <div class=\"form-group col-md-6 pr-0\">\n            <label for=\"DT_EMIS_NOTA_FISC\"> Fecha de emisión de la factura </label>\n            <div class=\"input-group\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">\n                  <i class=\"far fa-calendar-alt\"></i>\n                </span>\n              </div>\n              <input\n                class=\"form-control\"\n                id=\"DT_EMIS_NOTA_FISC\"\n                type=\"text\"\n                bsDatepicker\n                [bsConfig]=\"bsConfig\"\n                placeholder=\"Escribelo...\"\n                formControlName=\"DT_EMIS_NOTA_FISC\"\n                [ngClass]=\"onFieldRequired('DT_EMIS_NOTA_FISC')\"\n              />\n              <invalid-form-control [show]=\"onFieldInvalid('DT_EMIS_NOTA_FISC')\" message=\"Campo obligatorio\"></invalid-form-control>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col-md-6 pl-0\">\n            <label for=\"VL_NOTA_FISC\">Monto de la factura</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"VL_NOTA_FISC\"\n              placeholder=\"Escribelo...\"\n              currencyMask\n              [options]=\"{align: 'left', 'prefix': 'R$', thousands: '.', decimal: ','}\"\n              formControlName=\"VL_NOTA_FISC\"\n              [ngClass]=\"onFieldRequired('VL_NOTA_FISC')\"\n            />\n            <invalid-form-control [show]=\"onFieldInvalid('VL_NOTA_FISC')\" message=\"Campo obligatorio\"></invalid-form-control>\n          </div>\n          <div class=\"form-group col-md-6 pr-0\"></div>\n        </div>\n      </fieldset>\n      <br>\n      <br>\n      <fieldset class=\"border rounded shadow-sm col-6 pt-2 mx-auto\">\n        <legend>Dados do cliente</legend>\n        <!-- <div class=\"d-flex justify-content-between\">\n          <div class=\"form-group\">\n            <div class=\"custom-control custom-radio\">\n              <input type=\"radio\" class=\"custom-control-input\" id=\"pessoaJuridica\" value=\"J\" formControlName=\"TP_PESS\">\n              <label class=\"custom-control-label\" for=\"pessoaJuridica\">Pessoa Jurídica</label>\n            </div>\n            <div class=\"custom-control custom-radio\">\n              <input type=\"radio\" class=\"custom-control-input\" id=\"pessoaFisica\" value=\"F\" formControlName=\"TP_PESS\">\n              <label class=\"custom-control-label\" for=\"pessoaFisica\">Pessoa Física</label>\n            </div>\n          </div>\n          <div\n          >\n            <button\n              class=\"font-weight-bold btn border-0\"\n              [disabled]=\"isDisable\"\n              (click)=\"openModal(pesquisaDeClientes)\"\n            >\n              <a href=\"javascript:void(0)\">Selecionar</a>\n            </button>\n          </div>\n        </div> -->\n\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col-md-6 pl-0\">\n            <label for=\"CD_CLIE_ORIG\">Identificación del cliente</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"CD_CLIE_ORIG\"\n              placeholder=\"Escribelo...\"\n              formControlName=\"CD_CLIE_ORIG\"\n              [ngClass]=\"onFieldRequired('CD_CLIE_ORIG')\"\n            />\n            <invalid-form-control [show]=\"onFieldInvalid('CD_CLIE_ORIG')\" message=\"Campo obligatorio\"></invalid-form-control>\n          </div>\n          <div class=\"form-group col-md-6 pr-0\">\n            <label for=\"CD_CLIE_CNPJ_CPF\">NIT</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"CD_CLIE_CNPJ_CPF\"\n              placeholder=\"Escribelo...\"\n              formControlName=\"CD_CLIE_CNPJ_CPF\"\n              [ngClass]=\"onFieldRequired('CD_CLIE_CNPJ_CPF')\"\n            />\n            <invalid-form-control [show]=\"onFieldInvalid('CD_CLIE_CNPJ_CPF')\" message=\"Campo obligatorio\"></invalid-form-control>\n          </div>\n          <!-- <div class=\"form-group col-md-6 pr-0\" *ngIf=\"form.get('TP_PESS').value == 'F'\">\n            <label for=\"CD_CLIE_CNPJ_CPF\">CPF</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"CD_CLIE_CNPJ_CPF\"\n              placeholder=\"Escribelo...\"\n              formControlName=\"CD_CLIE_CNPJ_CPF\"\n              [ngClass]=\"onFieldRequired('CD_CLIE_CNPJ_CPF')\"\n              [textMask]=\"{mask: MASKS.cpf.textMask}\"\n            />\n            <invalid-form-control [show]=\"onFieldInvalid('CD_CLIE_CNPJ_CPF')\" message=\"Campo obligatorio\"></invalid-form-control>\n          </div> -->\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col p-0\">\n            <label for=\"NM_CLIE\">Razón social</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"NM_CLIE\"\n              placeholder=\"Escribelo...\"\n              formControlName=\"NM_CLIE\"\n              [ngClass]=\"onFieldRequired('NM_CLIE')\"\n            />\n            <invalid-form-control [show]=\"onFieldInvalid('NM_CLIE')\" message=\"Campo obligatorio\"></invalid-form-control>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col p-0\">\n            <label for=\"NM_FANT_CLIE\">Nombre de fantasía</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"NM_FANT_CLIE\"\n              placeholder=\"Escribelo...\"\n              formControlName=\"NM_FANT_CLIE\"\n              [ngClass]=\"onFieldRequired('NM_FANT_CLIE')\"\n            />\n            <invalid-form-control [show]=\"onFieldInvalid('NM_FANT_CLIE')\" message=\"Campo obligatorio\"></invalid-form-control>\n          </div>\n        </div>\n      </fieldset>\n      <br>\n      <br>\n      <fieldset class=\"border rounded shadow-sm col-6 pt-2 mx-auto\">\n        <legend>Lugar de entrega de datos</legend>\n        <!-- <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col-md-6 pl-0\">\n            <label for=\"CD_CEP\">CEP</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"CD_CEP\"\n              placeholder=\"Escribelo...\"\n              formControlName=\"CD_CEP\"\n              [ngClass]=\"onFieldRequired('CD_CEP')\"\n              (keyup.enter)=\"checkCEP($event.target.value)\"\n              cep [textMask]=\"{mask: MASKS.cep.textMask}\"\n            />\n            <invalid-form-control [show]=\"onFieldInvalid('CD_CEP')\" message=\"Campo obligatorio\"></invalid-form-control>\n          </div>\n          <div class=\"form-group col-md-6 pr-0\"></div>\n        </div> -->\n        <div class=\"form-row\">\n          <div class=\"form-group col p-0\">\n            <label for=\"DS_LOCA_ENTR\">Lugar de entrega</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"DS_LOCA_ENTR\"\n              placeholder=\"Escribelo...\"\n              formControlName=\"DS_LOCA_ENTR\"\n              [ngClass]=\"onFieldRequired('DS_LOCA_ENTR')\"\n            />\n            <invalid-form-control [show]=\"onFieldInvalid('DS_LOCA_ENTR')\" message=\"Campo obligatorio\"></invalid-form-control>\n          </div>\n        </div>\n        <div class=\"form-row justify-content-center\">\n          <!-- <div class=\"form-group col-md-6 pl-0\">\n            <label for=\"DS_ESTA\">UF</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"DS_ESTA\"\n              placeholder=\"Escribelo...\"\n              formControlName=\"DS_ESTA\"\n              [ngClass]=\"onFieldRequired('DS_ESTA')\"\n            />\n            <invalid-form-control [show]=\"onFieldInvalid('DS_ESTA')\" message=\"Campo obligatorio\"></invalid-form-control>\n          </div> -->\n          <div class=\"form-group col p-0\">\n            <label for=\"DS_CIDA\">Ciudad</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"DS_CIDA\"\n              placeholder=\"Escribelo...\"\n              formControlName=\"DS_CIDA\"\n              [ngClass]=\"onFieldRequired('DS_CIDA')\"\n            />\n            <invalid-form-control [show]=\"onFieldInvalid('DS_CIDA')\" message=\"Campo obligatorio\"></invalid-form-control>\n          </div>\n        </div>\n        <!-- <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col-md-6 pl-0\">\n            <label for=\"DS_BAIR\">Bairro</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"DS_BAIR\"\n              placeholder=\"Escribelo...\"\n              formControlName=\"DS_BAIR\"\n              [ngClass]=\"onFieldRequired('DS_BAIR')\"\n            />\n            <invalid-form-control [show]=\"onFieldInvalid('DS_BAIR')\" message=\"Campo obligatorio\"></invalid-form-control>\n          </div>\n          <div class=\"form-group col-md-6 pr-0\">\n            <label for=\"IBGE\">Código IBGE</label>\n            <input\n              type=\"number\"\n              class=\"form-control\"\n              id=\"IBGE\"\n              placeholder=\"Escribelo...\"\n              formControlName=\"IBGE\"\n              [ngClass]=\"onFieldRequired('IBGE')\"\n            />\n            <invalid-form-control [show]=\"onFieldInvalid('IBGE')\" message=\"Campo obligatorio\"></invalid-form-control>\n          </div>\n        </div> -->\n      </fieldset>\n      <br>\n      <br>\n      <fieldset class=\"border rounded shadow-sm col-6 pt-2 mx-auto\">\n        <legend>Datos adicionales</legend>\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col-md-6 pl-0\">\n            <label for=\"CD_EMPR\">Expedidor</label>\n            <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"false\"\n              [loading]=\"loadingEmpresas\"\n              [items]=\"empresas\"\n              [virtualScroll]=\"true\"\n              dropdownPosition=\"bottom\"\n              labelForId=\"empresa\"\n              bindLabel=\"nome\"\n              bindValue=\"idFilial\"\n              id=\"empresa\"\n              [loading]=\"loadingFiliais\"\n              [ngClass]=\"onFieldRequired('CD_EMPR')\"\n              formControlName=\"CD_EMPR\"\n              placeholder=\"SELECCIONE...\"\n            >\n            </ng-select>\n          </div>\n          <div class=\"form-group col-md-6 pl-0\">\n            <label for=\"CD_EMPR_CNPJ_CPF\">CNPJ del remitente</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"CD_EMPR_CNPJ_CPF\"\n              placeholder=\"Escribelo...\"\n              formControlName=\"CD_EMPR_CNPJ_CPF\"\n              [ngClass]=\"onFieldRequired('CD_EMPR_CNPJ_CPF')\"\n            />\n            <invalid-form-control [show]=\"onFieldInvalid('CD_EMPR_CNPJ_CPF')\" message=\"Campo obligatorio\"></invalid-form-control>\n          </div>\n        </div>\n        <br>\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col-md-6 pl-0\">\n            <label for=\"PRAZO\">Fecha límite de asistencia</label>\n            <div class=\"input-group\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">\n                  <i class=\"far fa-calendar-alt\"></i>\n                </span>\n              </div>\n              <input\n              class=\"form-control\"\n              id=\"PRAZO\"\n              type=\"text\"\n              bsDatepicker\n              [bsConfig]=\"bsConfig\"\n              placeholder=\"Escribelo...\"\n              formControlName=\"PRAZO\"\n              [ngClass]=\"onFieldRequired('PRAZO')\"\n            />\n            <invalid-form-control [show]=\"onFieldInvalid('PRAZO')\" message=\"Campo obligatorio\"></invalid-form-control>\n            </div>\n          </div>\n          <div class=\"form-group col-md-6 pr-0\"></div>\n        </div>\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col-md-6 pl-0\">\n            <label for=\"CD_PRAC\">Código de lugar</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"CD_PRAC\"\n              placeholder=\"Escribelo...\"\n              formControlName=\"CD_PRAC\"\n              [ngClass]=\"onFieldRequired('CD_PRAC')\"\n            />\n            <invalid-form-control [show]=\"onFieldInvalid('CD_PRAC')\" message=\"Campo obligatorio\"></invalid-form-control>\n          </div>\n          <div class=\"form-group col-md-6 pr-0\">\n            <label for=\"DS_PRAC\">Descripción de la plaza</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"DS_PRAC\"\n              placeholder=\"Escribelo...\"\n              formControlName=\"DS_PRAC\"\n              [ngClass]=\"onFieldRequired('DS_PRAC')\"\n            />\n            <invalid-form-control [show]=\"onFieldInvalid('DS_PRAC')\" message=\"Campo obligatorio\"></invalid-form-control>\n          </div>\n        </div>\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col-md-6 pl-0\">\n            <label for=\"CD_REGI_ENTR\">Código de región</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"CD_REGI_ENTR\"\n              placeholder=\"Escribelo...\"\n              formControlName=\"CD_REGI_ENTR\"\n              (blur)=\"calculaPrazoAtendimento()\"\n              (keyup.enter)=\"calculaPrazoAtendimento()\"\n              [ngClass]=\"onFieldRequired('CD_REGI_ENTR')\"\n            />\n            <invalid-form-control [show]=\"onFieldInvalid('CD_REGI_ENTR')\" message=\"Campo obligatorio\"></invalid-form-control>\n          </div>\n          <div class=\"form-group col-md-6 pr-0\">\n            <label for=\"DS_REGI_ENTR\">Descripción de la región</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"DS_REGI_ENTR\"\n              placeholder=\"Escribelo...\"\n              formControlName=\"DS_REGI_ENTR\"\n              [ngClass]=\"onFieldRequired('DS_REGI_ENTR')\"\n            />\n            <invalid-form-control [show]=\"onFieldInvalid('DS_REGI_ENTR')\" message=\"Campo obligatorio\"></invalid-form-control>\n          </div>\n        </div>\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col-md-6 pl-0\">\n            <label for=\"SEGM_CLIE\">Seguimiento del cliente</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"SEGM_CLIE\"\n              placeholder=\"Escribelo...\"\n              formControlName=\"SEGM_CLIE\"\n              [ngClass]=\"onFieldRequired('SEGM_CLIE')\"\n            />\n            <invalid-form-control [show]=\"onFieldInvalid('SEGM_CLIE')\" message=\"Campo obligatorio\"></invalid-form-control>\n          </div>\n          <div class=\"form-group col-md-6 pr-0\">\n            <label for=\"CD_REST\">Restricción de transporte</label>\n            <select\n              class=\"form-control custom-select\"\n              [ngClass]=\"onFieldRequired('CD_REST')\"\n              formControlName=\"CD_REST\"\n              id=\"CD_REST\"\n              placeholder=\"Escribelo...\"\n            >\n              <option></option>\n              <option *ngFor=\"let item of restricoesTransporte\" [value]=\"item.id\">{{ item.nome }}</option>\n            </select>\n            <invalid-form-control [show]=\"onFieldInvalid('CD_REST')\" message=\"Campo obligatorio\"></invalid-form-control>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"observacao\">Observación</label>\n          <textarea\n            name=\"observacao\"\n            id=\"observacao\"\n            cols=\"30\"\n            rows=\"10\"\n            class=\"form-control\"\n            formControlName=\"DS_OBSE\"\n          >\n          </textarea>\n        </div>\n      </fieldset>\n      <br>\n      <br>\n      <fieldset class=\"border rounded shadow-sm col-6 pt-2 pb-2 mx-auto\">\n        <legend>Anexos</legend>\n        <div class=\"form-group border rounded p-1\">\n          <div>\n            <label\n              for=\"documento\"\n              class=\"w-100 d-flex justify-content-between align-items-center m-0 py-1\"\n              [ngClass]=\"formDisabled ? 'no-drop' : 'hover'\"\n            >\n              Novo Documento\n            </label>\n            <input\n              id=\"documento\"\n              type=\"file\"\n              (change)=\"appendFile($event.target.files)\"\n              class=\"d-none\"\n              >\n          </div>\n        </div>\n        <ul>\n          <li class=\"d-flex justify-content-between\" *ngFor=\"let item of documentos\">\n            <div>{{ item.NM_DOCU | uppercase }}</div>\n            <div [hidden]=\"!item.ID_LOGI_COLE_DOCU\">\n              <a\n                [href]=\"item.LINK\"\n                target=\"_blank\"\n                class=\"btn-icon-sm mx-2 text-black\"\n                tooltip=\"visualizar\"\n              >\n                <i class=\"far fa-eye\"></i>\n              </a>\n              <button\n                class=\"btn-icon-sm mx-2 hover\"\n                tooltip=\"excluir\"\n                (click)=\"onRemove(item)\"\n                >\n                <i class=\"fas fa-trash\"></i>\n              </button>\n            </div>\n          </li>\n        </ul>\n      </fieldset>\n    </fieldset>\n  </form>\n  <!-- <ng-template #pesquisaDeClientes>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title pull-left\">Busqueda de clientes</h4>\n      <div class=\"d-flex justify-content-center align-items-center\">\n        <div class=\"spinner-border text-primary mr-2\" role=\"status\" *ngIf=\"loadingClientes\">\n          <span class=\"sr-only\">Loading...</span>\n        </div>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModal()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n    </div>\n    <div class=\"modal-body\">\n      <advanced-filter>\n        <form [formGroup]=\"formPesquisaCliente\">\n          <div class=\"form-row\">\n            <div class=\"form-group col\">\n              <label for=\"cdCliente\">Código do Cliente</label>\n              <select\n                class=\"form-control custom-select\"\n                formControlName=\"buscarPor\"\n              >\n                <option value=\"1\" selected>Código, nome fantasia ou razão social</option>\n                <option value=\"2\">CPF ou CNPJ</option>\n                <option value=\"3\">Cidade</option>\n                <option value=\"4\">Código</option>\n                <option value=\"5\">Contatos</option>\n              </select>\n            </div>\n            <div class=\"form-group col\">\n              <label>Termo de Pesquisa</label>\n              <div class=\"input-group\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  formControlName=\"pesquisa\"\n                  (keyup.enter)=\"getClientes()\"\n                >\n                <div class=\"input-group-append\">\n                  <span\n                    class=\"input-group-text hover\"\n                    (click)=\"getClientes()\"\n                  >\n                    <i class=\"fas fa-search\"></i>\n                  </span>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group col-2\">\n              <label for=\"cdCliente\">Situação</label>\n              <select\n                class=\"form-control custom-select\"\n                formControlName=\"situacao\"\n              >\n                <option value=\"Ativo\">Ativos</option>\n                <option value=\"Inativo\">Inativos</option>\n                <option value=\"Potenci\">Potenciais</option>\n                <option value=\"Arquivado\">Arquivados</option>\n                <option value=\"T\">Todos</option>\n              </select>\n            </div>\n          </div>\n        </form>\n      </advanced-filter>\n      <div class=\"d-flex\" *ngIf=\"!loadingClientes && clientes.length !== 0\">\n        <accordion [closeOthers]=\"true\" class=\"w-100\">\n          <accordion-group\n            class=\"mb-1\"\n            heading=\"({{cliente.codCliente}}) {{cliente.razaoSocial}}\"\n            *ngFor=\"let cliente of clientes\"\n            (click)=\"viewDetails(cliente)\"\n          >\n            <div class=\"spinner-border text-primary mr-2\" role=\"status\" *ngIf=\"loadingEnderecos\">\n              <span class=\"sr-only\">Loading...</span>\n            </div>\n            <custom-table *ngIf=\"!loadingEnderecos && (enderecos.length > 0)\">\n              <ng-template #thead let-thead>\n                <tr>\n                  <th>Cidade</th>\n                  <th>Bairro</th>\n                  <th>UF</th>\n                  <th>Endereço</th>\n                  <th></th>\n                </tr>\n              </ng-template>\n              <ng-template #tbody let-tbody>\n                <tr *ngFor=\"let endereco of enderecos\">\n                  <td>{{ endereco.cidade }}</td>\n                  <td>{{ endereco.bairro }}</td>\n                  <td>{{ endereco.uf }}</td>\n                  <td>{{ endereco.endereco }}</td>\n                  <td>\n                    <button\n                      class=\"btn-icon-sm\"\n                      tooltip=\"Salvar cliente e endereço\"\n                      container=\"body\"\n                      (click)=\"setEndereco(endereco);modalRef.hide()\"\n                    >\n                      <i class=\"far fa-save\"></i>\n                    </button>\n                  </td>\n                </tr>\n              </ng-template>\n            </custom-table>\n          </accordion-group>\n        </accordion>\n      </div>\n    </div>\n  </ng-template> -->\n</app-body>";
      /***/
    },

    /***/
    "POLo":
    /*!****************************************************************************!*\
      !*** ./src/app/modules/logistica/entrega/coletas/lista/lista.component.ts ***!
      \****************************************************************************/

    /*! exports provided: LogisticaEntregaColetasListaComponent */

    /***/
    function POLo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaEntregaColetasListaComponent", function () {
        return LogisticaEntregaColetasListaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lista.component.html */
      "tLCz");
      /* harmony import */


      var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lista.component.scss */
      "Fvqg");
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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");
      /* harmony import */


      var _services_pedidos_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../services/pedidos.service */
      "C6OW");
      /* harmony import */


      var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _services_fusion_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../services/fusion.service */
      "H8J8");
      /* harmony import */


      var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/shared/modules/confirm-modal/confirm-modal.service */
      "FOez");
      /* harmony import */


      var _cadastros_filiais_services_filiais_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../../cadastros/filiais/services/filiais.service */
      "NXOV"); // angular
      // rxjs
      // services
      // ngx
      // interfaces


      var LogisticaEntregaColetasListaComponent = /*#__PURE__*/function () {
        function LogisticaEntregaColetasListaComponent(formBuilder, activatedRoute, route, routerService, pedidosService, localeService, dateService, atividadesService, pnotify, filiaisService, fusionService, confirmModalService) {
          _classCallCheck(this, LogisticaEntregaColetasListaComponent);

          this.formBuilder = formBuilder;
          this.activatedRoute = activatedRoute;
          this.route = route;
          this.routerService = routerService;
          this.pedidosService = pedidosService;
          this.localeService = localeService;
          this.dateService = dateService;
          this.atividadesService = atividadesService;
          this.pnotify = pnotify;
          this.filiaisService = filiaisService;
          this.fusionService = fusionService;
          this.confirmModalService = confirmModalService;
          this.appTitle = "Lista de Coletas";
          this.breadCrumbTree = [];
          this.showAdvancedFilter = true;
          /* Pagination */

          this.itemsPerPage = 100;
          this.currentPage = 1;
          this.totalItems = 0;
          this.begin = 0;
          this.end = this.itemsPerPage;
          /* Pagination */

          this.subtitles = [{
            id: 1,
            text: 'Ativo',
            color: 'green'
          }, {
            id: 2,
            text: 'Inativo',
            color: 'red'
          }];
          /*loading*/

          this.loading = true;
          this.loadingNavBar = false;
          this.loadingFiliais = false;
          this.noResult = true;
          /*loading*/

          this.tableConfig = {
            subtitleBorder: true
          };
          /* empresas = [
            {
              "id": 18,
              "nome": "Distribuição Tiete",
              "cnpj": 49795800001883
            },
            {
              "id": 79,
              "nome": "Distribuição Taipas",
              "cnpj": 49795800002340
            },
            {
              "id": 6,
              "nome": "Distribuição Osasco",
              "cnpj": 49795800001530
            },
            {
              "id": 3,
              "nome": "C&D Rio das Pedras",
              "cnpj": 2506609000162
            },
            {
              "id": 46,
              "nome": "C&D Cajamar",
              "cnpj": 2506609000243
            },
            {
              "id": 72,
              "nome": "C&D Praia Grande",
              "cnpj": 2506609000324
            },
            {
              "id": 9661,
              "nome": "DBA Aço Especial",
              "cnpj": 17469701002897
            }
          ] */

          this.empresas = [];
          this.localeService.use('pt-br');
          this.bsConfig = Object.assign({}, {
            containerClass: 'theme-dark-blue'
          }, {
            adaptivePosition: true
          }, {
            showWeekNumbers: false
          });
        }

        _createClass(LogisticaEntregaColetasListaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.buildForm();
            this.registraAcesso();
            this.setBreadCrumb();
            this.onActivatedRoute();
            this.getEmpresas();
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

              if (Object.keys(_response).length > 0) {
                _this.form.patchValue(_response);

                _this.getPedidos(_this.getParams());
              } else {
                _this.loading = false;
              }
            });
          }
        }, {
          key: "buildForm",
          value: function buildForm() {
            this.form = this.formBuilder.group({
              CD_PEDI: [null],
              CD_EMPR: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              DT_INIC: [new Date()],
              DT_FINA: [new Date()],
              IN_STAT_ENTR: ['1'],
              QT_ITENS_PAGINA: [100],
              PAGINA: [1],
              TIME: [new Date().getTime()]
            });
          }
        }, {
          key: "registraAcesso",
          value: function registraAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            var _a;

            var submoduloId = (_a = this.activatedRoute.snapshot.params) === null || _a === void 0 ? void 0 : _a.idSubModulo;
            this.breadCrumbTree = [{
              descricao: 'Logistica'
            }, {
              descricao: 'GESTIÓN DE ENTREGAS',
              routerLink: "/logistica/entrega/".concat(submoduloId)
            }, {
              descricao: 'Lista de coletas'
            }];
          }
        }, {
          key: "getEmpresas",
          value: function getEmpresas() {
            var _this2 = this;

            this.loadingFiliais = true;
            this.filiaisService.getFiliais({
              status: '1'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this2.loadingFiliais = false;
            })).subscribe({
              next: function next(response) {
                _this2.empresas = response.body['data'];
              },
              error: function error() {
                _this2.pnotify.error();
              }
            });
          }
        }, {
          key: "getPedidos",
          value: function getPedidos(params) {
            var _this3 = this;

            if (!this.loading) this.loadingNavBar = true;
            this.pedidosService.getPedidos(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this3.loading = false;
              _this3.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this3.noResult = false;
                _this3.pedidos = response.body['data'];
                _this3.totalItems = response.body['total'];
              } else {
                _this3.noResult = true;

                _this3.pnotify.notice("Nenhum pedido localizado.");
              }
            }, function (error) {
              _this3.noResult = true;

              _this3.pnotify.error();
            });
          }
        }, {
          key: "integraPedido",
          value: function integraPedido(item) {
            var _this4 = this;

            item.loading = true;
            var params = {
              cdEmpresa: item["CD_EMPR"],
              pedido: item["ID_LOGI_FUSI_PEDI"],
              parametro: 11
            };
            this.fusionService.integraPedidoFusion(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              item.loading = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this4.pnotify.success();

                item["IN_INTE"] = "I";
              }
            }, function (error) {
              _this4.pnotify.error();
            });
          }
        }, {
          key: "setItensPerPage",
          value: function setItensPerPage(ev) {
            this.itemsPerPage = ev.itensPorPagina;
            return this.itemsPerPage;
          }
        }, {
          key: "openRegister",
          value: function openRegister(item) {
            var queryParams = item ? this.routerService.setBase64UrlParams({
              ID_LOGI_FUSI_PEDI: item["ID_LOGI_FUSI_PEDI"]
            }) : {};
            this.route.navigate(["../cadastro"], {
              relativeTo: this.activatedRoute,
              queryParams: queryParams
            });
          }
          /* Paginação */

        }, {
          key: "onPageChanged",
          value: function onPageChanged(event) {
            this.form.get("pagina").setValue(event.page);
            this.getPedidos(this.getParams());
          }
          /* Paginação */

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
          key: "onSearch",
          value: function onSearch() {
            this.form.get("TIME").setValue(new Date().getTime());
            this.route.navigate([], {
              relativeTo: this.activatedRoute,
              queryParams: this.routerService.setBase64UrlParams(this.getParams())
            });
          }
        }, {
          key: "changeState",
          value: function changeState(pedido) {
            var _this5 = this;

            var _pedido = JSON.parse(JSON.stringify(pedido));

            _pedido.IN_STAT = _pedido.IN_STAT == '0' ? '1' : '0';
            _pedido.PRAZO = this.dateService.convertToUrlDate(new Date(_pedido.PRAZO));
            _pedido.DT_PEDI = this.dateService.convertToUrlDate(new Date(_pedido.DT_PEDI));
            _pedido.DT_EMIS_NOTA_FISC = this.dateService.convertToUrlDate(new Date(_pedido.DT_EMIS_NOTA_FISC));

            var _this$getMessageConfi = this.getMessageConfirmModal(parseInt(_pedido.IN_STAT)),
                _this$getMessageConfi2 = _slicedToArray(_this$getMessageConfi, 5),
                type = _this$getMessageConfi2[0],
                title = _this$getMessageConfi2[1],
                message = _this$getMessageConfi2[2],
                cancelTxt = _this$getMessageConfi2[3],
                okTxt = _this$getMessageConfi2[4];

            this.confirmModalService.showConfirm(type, title, message, cancelTxt, okTxt).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (result) {
              if (!result) return rxjs__WEBPACK_IMPORTED_MODULE_6__["EMPTY"];
              _this5.loadingNavBar = true;
              return _this5.pedidosService.postPedido(_pedido);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this5.loadingNavBar = false;
            })).subscribe(function (success) {
              pedido.IN_STAT = _pedido.IN_STAT;

              _this5.pnotify.success();
            }, function (error) {
              _this5.pnotify.error();
            });
          }
        }, {
          key: "getMessageConfirmModal",
          value: function getMessageConfirmModal(status) {
            if (status) return [null, null, 'Deseja realmente prosseguir com a ativação do registro?', 'Cancelar', 'Confirmar'];
            return ['inactivate', 'Confirmar inativação', 'Deseja realmente prosseguir com a inativação do registro?', 'Cancelar', 'Confirmar'];
          }
        }, {
          key: "onReset",
          value: function onReset() {
            this.form.reset();
            this.form.updateValueAndValidity();
            this.form.get("QT_ITENS_PAGINA").setValue(100);
            this.noResult = true;
            this.pedidos = [];
            this.route.navigate([]);
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
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();

            if (this.form.controls[field].validator) {
              var validationResult = this.form.controls[field].validator(formControl);
              required = validationResult !== null && validationResult.required === true;
            }

            if (required) {
              return 'is-required';
            }
          } // Validação de formulário

        }, {
          key: "canCancel",
          value: function canCancel(pedido) {
            var _user = JSON.parse(localStorage.getItem("currentUser"));

            var _id = _user['info']['id'];
            if (pedido.ID_USUA_RESP_CADA == _id) return true;
            return false;
          }
        }, {
          key: "isEditable",
          value: function isEditable(pedido) {
            if (pedido.IN_STAT == '0') return false;
            if (pedido.IN_STAT_ROMA_PEDI == '1') return false;
            return true;
          }
        }, {
          key: "getTooltip",
          value: function getTooltip(pedido) {
            if (pedido.IN_STAT == '0') return 'Não é possível editar um pedido cancelado';
            if (pedido.IN_STAT_ROMA_PEDI == '1') return 'Não é possível editar um pedido que está em carga';
            return '';
          }
        }]);

        return LogisticaEntregaColetasListaComponent;
      }();

      LogisticaEntregaColetasListaComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_8__["RouterService"]
        }, {
          type: _services_pedidos_service__WEBPACK_IMPORTED_MODULE_9__["LogisticaEntregaPedidosService"]
        }, {
          type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__["BsLocaleService"]
        }, {
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_10__["DateService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__["AtividadesService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_13__["PNotifyService"]
        }, {
          type: _cadastros_filiais_services_filiais_service__WEBPACK_IMPORTED_MODULE_16__["LogisticaFiliaisService"]
        }, {
          type: _services_fusion_service__WEBPACK_IMPORTED_MODULE_14__["LogisticaEntregaFusionService"]
        }, {
          type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_15__["ConfirmModalService"]
        }];
      };

      LogisticaEntregaColetasListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'logistica-entrega-coletas-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_8__["RouterService"], _services_pedidos_service__WEBPACK_IMPORTED_MODULE_9__["LogisticaEntregaPedidosService"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__["BsLocaleService"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_10__["DateService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__["AtividadesService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_13__["PNotifyService"], _cadastros_filiais_services_filiais_service__WEBPACK_IMPORTED_MODULE_16__["LogisticaFiliaisService"], _services_fusion_service__WEBPACK_IMPORTED_MODULE_14__["LogisticaEntregaFusionService"], src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_15__["ConfirmModalService"]])], LogisticaEntregaColetasListaComponent);
      /***/
    },

    /***/
    "TVmm":
    /*!*********************************************************************!*\
      !*** ./src/app/modules/logistica/entrega/coletas/coletas.module.ts ***!
      \*********************************************************************/

    /*! exports provided: LogisticaColetasModule */

    /***/
    function TVmm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaColetasModule", function () {
        return LogisticaColetasModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/locales/pt */
      "vT00");
      /* harmony import */


      var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap/pagination */
      "6No5");
      /* harmony import */


      var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-bootstrap/tooltip */
      "978R");
      /* harmony import */


      var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-bootstrap/tabs */
      "2ZVE");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-bootstrap/timepicker */
      "M3cK");
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "ienR");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/shared/pipes/pipes.module */
      "9Xeq");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! src/app/core/module-wrapper/module-wrapper.module */
      "RoXV");
      /* harmony import */


      var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! src/app/core/not-found/not-found.module */
      "sCnT");
      /* harmony import */


      var ng_brazil__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ng-brazil */
      "hTrW");
      /* harmony import */


      var angular2_text_mask__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! angular2-text-mask */
      "UVXo");
      /* harmony import */


      var angular2_text_mask__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_20__);
      /* harmony import */


      var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ng2-currency-mask */
      "D5nU");
      /* harmony import */


      var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_21__);
      /* harmony import */


      var _coletas_routing_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./coletas-routing.module */
      "0co3");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./lista/lista.component */
      "POLo");
      /* harmony import */


      var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./cadastro/cadastro.component */
      "lLcG");

      Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_5___default.a);
      Object(ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["defineLocale"])('pt-br', ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ptBrLocale"]); // ngx-bootstrap
      // ng-select
      //masks

      var LogisticaColetasModule = function LogisticaColetasModule() {
        _classCallCheck(this, LogisticaColetasModule);
      };

      LogisticaColetasModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_lista_lista_component__WEBPACK_IMPORTED_MODULE_23__["LogisticaEntregaColetasListaComponent"], _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_24__["LogisticaEntregaColetasCadastroComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _coletas_routing_module__WEBPACK_IMPORTED_MODULE_22__["LogisticaEntregaColetasRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__["NgSelectModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginationModule"].forRoot(), ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"].forRoot(), ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_9__["TabsModule"].forRoot(), ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_11__["TimepickerModule"].forRoot(), ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__["BsDatepickerModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__["ModalModule"].forRoot(), src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_15__["PipesModule"], src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_18__["NotFoundModule"], src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_17__["ModuleWrapperModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_16__["TemplatesModule"], ng_brazil__WEBPACK_IMPORTED_MODULE_19__["NgBrazil"], angular2_text_mask__WEBPACK_IMPORTED_MODULE_20__["TextMaskModule"], ng2_currency_mask__WEBPACK_IMPORTED_MODULE_21__["CurrencyMaskModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["AccordionModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ProgressbarModule"].forRoot()]
      })], LogisticaColetasModule);
      /***/
    },

    /***/
    "lLcG":
    /*!**********************************************************************************!*\
      !*** ./src/app/modules/logistica/entrega/coletas/cadastro/cadastro.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: LogisticaEntregaColetasCadastroComponent */

    /***/
    function lLcG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaEntregaColetasCadastroComponent", function () {
        return LogisticaEntregaColetasCadastroComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./cadastro.component.html */
      "Kax+");
      /* harmony import */


      var _cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cadastro.component.scss */
      "qQi3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");
      /* harmony import */


      var src_app_shared_services_ws_cep_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/ws/cep.service */
      "7aZN");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _services_pedidos_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../services/pedidos.service */
      "C6OW");
      /* harmony import */


      var src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/modules/comercial/services/clientes.service */
      "8ouN");
      /* harmony import */


      var src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/templates/detail-panel/detal-panel.service */
      "gIxL");
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! src/app/shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var ng_brazil__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ng-brazil */
      "hTrW");
      /* harmony import */


      var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! src/app/shared/modules/confirm-modal/confirm-modal.service */
      "FOez");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _cadastros_restricoes_transporte_services_restricoes_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../../../cadastros/restricoes-transporte/services/restricoes.service */
      "6xMS");
      /* harmony import */


      var _cadastros_prazo_entrega_services_prazo_entrega_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../../../cadastros/prazo-entrega/services/prazo-entrega.service */
      "KWs8");
      /* harmony import */


      var _cadastros_regioes_entrega_services_regioes_entrega_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ../../../cadastros/regioes-entrega/services/regioes-entrega.service */
      "B4Vw");
      /* harmony import */


      var _cadastros_filiais_services_filiais_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ../../../cadastros/filiais/services/filiais.service */
      "NXOV"); // angular
      // rxjs
      // services
      // ngx
      //ng-brazil


      var LogisticaEntregaColetasCadastroComponent = /*#__PURE__*/function () {
        function LogisticaEntregaColetasCadastroComponent(formBuilder, activatedRoute, route, routerService, localeService, cepService, pnotify, pedidosService, atividadesService, dateService, modalService, clientesService, detailPanelService, restricoesTransporteService, confirmModalService, prazoEntregaService, location, regioesService, filiaisService) {
          _classCallCheck(this, LogisticaEntregaColetasCadastroComponent);

          this.formBuilder = formBuilder;
          this.activatedRoute = activatedRoute;
          this.route = route;
          this.routerService = routerService;
          this.localeService = localeService;
          this.cepService = cepService;
          this.pnotify = pnotify;
          this.pedidosService = pedidosService;
          this.atividadesService = atividadesService;
          this.dateService = dateService;
          this.modalService = modalService;
          this.clientesService = clientesService;
          this.detailPanelService = detailPanelService;
          this.restricoesTransporteService = restricoesTransporteService;
          this.confirmModalService = confirmModalService;
          this.prazoEntregaService = prazoEntregaService;
          this.location = location;
          this.regioesService = regioesService;
          this.filiaisService = filiaisService;
          this.MASKS = ng_brazil__WEBPACK_IMPORTED_MODULE_17__["MASKS"];
          this.appTitle = "Cadastro";
          this.loadingClientes = false;
          this.clientes = new Array();
          this.restricoesTransporte = new Array();
          /*loading*/

          this.loading = true;
          this.loadingNavBar = false;
          this.noResult = true;
          /*loading*/

          this.isDisable = false;
          this.formDisabled = false;
          this.enderecos = new Array();
          this.loadingEnderecos = false;
          this.showDetailPanel = false;
          this.formData = [];
          this.documentos = [];
          this.tableConfig = {
            isFixed: true
          };
          this.empresas = [];
          this.loadingEmpresas = false;
          this.localeService.use('pt-br');
          this.bsConfig = Object.assign({}, {
            containerClass: 'theme-dark-blue'
          }, {
            adaptivePosition: true
          }, {
            showWeekNumbers: false
          });
        }

        _createClass(LogisticaEntregaColetasCadastroComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.buildForm();
            this.setBreadCrumb();
            this.registraAcesso();
            this.onActivatedRoute();
            this.onDetailPanelEmitter();
            this.onRestricoesTransporte();
            this.cnpjSubscription();
            this.calculaPrazoAtendimento();
            this.getEmpresas();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            //this.$activatedRouteSubscription.unsubscribe();
            this.$detailPanelSubscription.unsubscribe();
          }
        }, {
          key: "onActivatedRoute",
          value: function onActivatedRoute() {
            var params = this.activatedRoute.snapshot.params;
            var queryParams = this.activatedRoute.snapshot.queryParams;

            if (params === null || params === void 0 ? void 0 : params.id) {
              this.getPedidos({
                ID_LOGI_COLE: params.id
              });
              this.getDocumentos({
                ID_LOGI_COLE: params.id
              });
              return;
            }

            var _response = this.getParams(this.routerService.getBase64UrlParams(queryParams));

            if (Object.keys(_response).length == 0) {
              this.loading = false;
              return;
            }

            _response["IBGE"] = _response["CD_IBGE"];
            _response["NM_FANT_CLIE"] = _response["NM_FANT"];
            _response["QT_PESO"] = _response["TT_PESO"];
            this.form.patchValue(_response);
            this.loading = false;
            /* if (_response["IN_PEDI_EXTE"] == 1) {
              this.setDisabledFieldForm();
              this.isDisable = true;
              return
            } */
          }
        }, {
          key: "getEmpresas",
          value: function getEmpresas() {
            var _this6 = this;

            this.loadingEmpresas = true;
            this.filiaisService.getFiliais({
              status: '1'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(function () {
              _this6.loadingEmpresas = false;
            })).subscribe({
              next: function next(response) {
                _this6.empresas = response.body['data'];
              },
              error: function error() {
                _this6.pnotify.error();
              }
            });
          }
        }, {
          key: "cnpjSubscription",
          value: function cnpjSubscription() {
            var _this7 = this;

            this.form.get('CD_EMPR').valueChanges.subscribe(function (id) {
              if (id) {
                var cnpj = _this7.empresas.filter(function (empresa) {
                  return empresa.id == id;
                }).shift()['cnpj'];

                _this7.form.get('CD_EMPR_CNPJ_CPF').setValue(cnpj);
              }
            });
          }
        }, {
          key: "buildForm",
          value: function buildForm() {
            this.form = this.formBuilder.group({
              "ID_LOGI_COLE": [null],
              "CD_PEDI": [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              "DT_PEDI": [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              "QT_PESO": [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              "TIPO_ENTR": ["Servico", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              "CD_CLIE_ORIG": [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              "CD_CLIE_CNPJ_CPF": [null],
              "NM_FANT_CLIE": [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              "NM_CLIE": [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              "NOTA_FISC": [null],
              "DT_EMIS_NOTA_FISC": [null],
              "VL_NOTA_FISC": [null],
              "DS_LOCA_ENTR": [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              "DS_BAIR": [null],
              "IBGE": [null],
              "DS_CIDA": [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              "DS_ESTA": [null],
              "CD_CEP": [null],
              "CD_PRAC": [null],
              "DS_PRAC": [null],
              "CD_REGI_ENTR": [null],
              "DS_REGI_ENTR": [null],
              "CD_EMPR": [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              "CD_DEPO": [null],
              "CD_EMPR_CNPJ_CPF": [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              "PRAZO": [{
                value: new Date(),
                disabled: true
              }, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              "SEGM_CLIE": [null],
              "CD_REST": [null],
              "TP_PESS": ["J"],
              "DS_OBSE": [null]
            });
            this.formPesquisaCliente = this.formBuilder.group({
              "buscarPor": [1],
              "pesquisa": [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              "situacao": ["T", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            });
          }
        }, {
          key: "onDetailPanelEmitter",
          value: function onDetailPanelEmitter() {
            var _this8 = this;

            this.$detailPanelSubscription = this.detailPanelService.config.subscribe(function (event) {
              _this8.showDetailPanel = event.showing;
            });
          }
        }, {
          key: "registraAcesso",
          value: function registraAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            this.breadCrumbTree = [{
              descricao: 'Logistica'
            }, {
              descricao: 'GESTIÓN DE ENTREGAS',
              routerLink: '../../'
            }, {
              descricao: 'Lista de Coletas',
              routerLink: '../'
            }, {
              descricao: this.appTitle
            }];
          }
        }, {
          key: "getPedidos",
          value: function getPedidos(params) {
            var _this9 = this;

            if (!this.loading) this.loadingNavBar = true;
            this.pedidosService.getPedidos(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(function () {
              _this9.loading = false;
              _this9.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this9.noResult = false;
                var data = response['body']['data'][0];

                _this9.form.patchValue(_this9.getParams(data));

                if (!_this9.isEditable(data)) {
                  _this9.formDisabled = true;
                  _this9.isDisable = true;
                } else if (data.IN_PEDI_EXTE == '1') {
                  _this9.isDisable = true;

                  _this9.setDisabledFieldForm();
                }
              } else {
                _this9.noResult = true;
              }
            }, function (error) {
              _this9.noResult = true;
            });
          }
        }, {
          key: "castJavascriptDate",
          value: function castJavascriptDate(dateStr) {
            if (!dateStr) return dateStr;

            var _dateStr$split = dateStr.split("-"),
                _dateStr$split2 = _slicedToArray(_dateStr$split, 3),
                year = _dateStr$split2[0],
                month = _dateStr$split2[1],
                day = _dateStr$split2[2];

            return new Date(year, month - 1, day);
          }
        }, {
          key: "postPedido",
          value: function postPedido() {
            var _this10 = this;

            this.loadingNavBar = true;
            var params = JSON.parse(JSON.stringify(this.form.getRawValue()));
            params['PRAZO'] = this.dateService.convertToUrlDate(new Date(params['PRAZO']));
            params['DT_PEDI'] = this.dateService.convertToUrlDate(new Date(params['DT_PEDI']));
            if (params['DT_EMIS_NOTA_FISC']) params['DT_EMIS_NOTA_FISC'] = this.dateService.convertToUrlDate(new Date(params['DT_EMIS_NOTA_FISC']));
            this.pedidosService.postPedido(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(function () {
              _this10.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                var id = response.body['data'];

                _this10.form.get('ID_LOGI_COLE').setValue(id);

                _this10.postDocumentos({
                  'ID_LOGI_COLE': id
                });
              } else {
                _this10.pnotify.error(response.body['message']);
              }
            }, function (error) {
              _this10.pnotify.error(error['error']['message'] || 'Ocorreu um erro durante a requisição.');
            });
          }
        }, {
          key: "checkCEP",
          value: function checkCEP(cep) {
            var _this11 = this;

            this.loadingNavBar = true;
            this.cepService.getData(cep).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(function () {
              _this11.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response['success'] == false) {
                _this11.form.controls['CD_CEP'].setErrors({
                  'incorrect': true
                });

                _this11.pnotify.notice(response['mensagem']);
              } else {
                _this11.form.patchValue({
                  'DS_LOCA_ENTR': response['data']['logradouro'],
                  'DS_BAIR': response['data']['bairro'],
                  'IBGE': response['data']['ibge'],
                  'DS_CIDA': response['data']['localidade'],
                  'DS_ESTA': response['data']['uf'],
                  'CD_CEP': cep.toString()
                });
              }
            });
          }
        }, {
          key: "getParams",
          value: function getParams(obj) {
            var _params = {};
            var regexDate = new RegExp("([0-9]{4})(-)([0-9]{2})(-)([0-9]{2})(.*)");

            for (var prop in obj) {
              if (obj[prop]) {
                _params[prop] = regexDate.test(obj[prop]) ? new Date(obj[prop].substring(0, 10).split("-")) : obj[prop];
              }
            }

            return _params;
          }
        }, {
          key: "setDisabledFieldForm",
          value: function setDisabledFieldForm() {
            this.form.controls['CD_PEDI'].disable();
            this.form.controls['DT_PEDI'].disable();
            this.form.controls['QT_PESO'].disable();
            this.form.controls['CD_CLIE_ORIG'].disable();
            this.form.controls['CD_EMPR_CNPJ_CPF'].disable();
            this.form.controls['TP_PESS'].disable();
            this.form.controls['CD_CLIE_CNPJ_CPF'].disable();
            this.form.controls['NM_FANT_CLIE'].disable();
            this.form.controls['NM_CLIE'].disable();
            this.form.controls['NOTA_FISC'].disable();
            this.form.controls['DT_EMIS_NOTA_FISC'].disable();
            this.form.controls['VL_NOTA_FISC'].disable();
            this.form.controls['CD_EMPR'].disable();
            this.form.controls['CD_DEPO'].disable();
            this.form.controls['CD_PRAC'].disable();
            this.form.controls['DS_PRAC'].disable();
            this.form.controls['CD_REGI_ENTR'].disable();
            this.form.controls['DS_REGI_ENTR'].disable();
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
          key: "openModal",
          value: function openModal(template) {
            this.modalRef = this.modalService.show(template, {
              animated: false,
              "class": 'modal-lg',
              backdrop: 'static'
            });
          }
        }, {
          key: "hideModal",
          value: function hideModal() {
            this.modalRef.hide();
          }
        }, {
          key: "getClientes",
          value: function getClientes() {
            var _this12 = this;

            this.closeDetails();
            this.loadingClientes = true;
            var params = this.formPesquisaCliente.value;
            this.clientesService.getClientes(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(function () {
              _this12.loadingClientes = false;
            })).subscribe(function (response) {
              if (response['responseCode'] === 200) {
                _this12.clientes = response['result']['analitico'];
              } else if (response['responseCode'] === 204) {
                _this12.pnotify.notice("Não houve resultados para sua pesquisa");
              } else {
                _this12.pnotify.error();
              }
            }, function (error) {
              _this12.pnotify.error();
            });
          }
        }, {
          key: "getEnderecos",
          value: function getEnderecos(codCliente) {
            var _this13 = this;

            this.loadingEnderecos = true;
            this.clientesService.getEnderecos(codCliente, {
              "localEntrega": 1
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(function () {
              _this13.detailPanelService.loadedFinished(false);

              _this13.loadingEnderecos = false;
            })).subscribe(function (response) {
              if (response['success'] == true) {
                _this13.enderecos = response['data']['enderecos'];
              } else {
                _this13.enderecos = [];

                _this13.pnotify.notice("Nenhum endereço de entrega localizado para este cliente");
              }
            }, function (error) {
              _this13.pnotify.error();

              _this13.enderecos = [];
            });
          }
        }, {
          key: "closeDetails",
          value: function closeDetails() {
            this.detailPanelService.hide();
          }
        }, {
          key: "viewDetails",
          value: function viewDetails(cliente) {
            this.cliente = cliente;
            this.detailPanelService.show();
            this.showDetailPanel = true;
            this.getEnderecos(cliente.codCliente);
          }
        }, {
          key: "setCliente",
          value: function setCliente(cliente) {
            this.form.patchValue({
              "CD_CLIE_ORIG": cliente.codCliente,
              "CD_CLIE_CNPJ_CPF": cliente.tipo === 'J' ? cliente.cnpj.toString() : cliente.cpf.toString(),
              "NM_FANT_CLIE": cliente.nomeFantasia,
              "NM_CLIE": cliente.razaoSocial,
              "TP_PESS": cliente.tipo
            });
          }
        }, {
          key: "setEndereco",
          value: function setEndereco(endereco) {
            this.setCliente(this.cliente);
            this.form.patchValue({
              "DS_LOCA_ENTR": endereco.endereco,
              "DS_BAIR": endereco.bairro,
              "IBGE": endereco.codIbge,
              "DS_CIDA": endereco.cidade,
              "DS_ESTA": endereco.uf,
              "CD_CEP": endereco.cep.toString(),
              "CD_REGI_ENTR": endereco.idRegiaoEntrega,
              "DS_REGI_ENTR": endereco.descRegiaoEntrega
            });
            this.closeDetails();
          }
        }, {
          key: "onRestricoesTransporte",
          value: function onRestricoesTransporte() {
            var _this14 = this;

            this.restricoesTransporteService.getRestricoes().subscribe(function (response) {
              if (response.status === 200) {
                _this14.restricoesTransporte = response.body['data'];
              } else {
                _this14.pnotify.notice("Falha ao carregar restrições de transporte");
              }
            }, function (error) {
              _this14.pnotify.notice("Falha ao carregar restrições de transporte");
            });
          }
        }, {
          key: "appendFile",
          value: function appendFile(files) {
            if (files.length === 0) return;
            var fd = new FormData();
            fd.append('file', files[0]);
            this.formData.push(fd);
            this.documentos.push({
              'NM_DOCU': files[0]['name']
            });
          }
        }, {
          key: "postDocumentos",
          value: function postDocumentos(pedido) {
            var _this15 = this;

            var req = [];
            var params = {
              ID_LOGI_COLE: pedido === null || pedido === void 0 ? void 0 : pedido.ID_LOGI_COLE
            };
            this.formData.forEach(function (element, index) {
              req.push(_this15.pedidosService.postDocumento(element, params));
            });

            if (req.length === 0) {
              this.form.reset();
              this.pnotify.success();
              this.location.back();
              return;
            }

            Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["forkJoin"])(req).subscribe(function (response) {
              _this15.documentos = [];
              _this15.formData = [];

              _this15.form.reset();

              _this15.pnotify.success("Documentos salvos com sucesso");

              _this15.location.back();
            }, function (error) {
              _this15.pnotify.error('Erro ao salvar documentos');
            });
          }
        }, {
          key: "putDocumento",
          value: function putDocumento(documento) {
            var _this16 = this;

            var type = 'inactivate',
                title = 'Confirmar inativação',
                message = 'Deseja realmente prosseguir com a inativação do registro?',
                cancelTxt = 'Cancelar',
                okTxt = 'Confirmar';
            this.confirmModalService.showConfirm(type, title, message, cancelTxt, okTxt).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["switchMap"])(function (result) {
              if (!result) return rxjs__WEBPACK_IMPORTED_MODULE_5__["EMPTY"];
              _this16.loadingNavBar = true;
              return _this16.pedidosService.putDocumento(documento);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(function () {
              _this16.loadingNavBar = false;
            })).subscribe(function (response) {
              _this16.pnotify.success('Documento atualizado com sucesso');

              _this16.getDocumentos(_this16.form.value);
            });
          }
        }, {
          key: "getDocumentos",
          value: function getDocumentos(params) {
            var _this17 = this;

            this.pedidosService.getDocumentos(params).subscribe(function (response) {
              if (response.status === 200) {
                _this17.documentos = response.body['data'];
              } else {
                _this17.documentos = [];
              }
            }, function (error) {
              _this17.documentos = [];
            });
          }
        }, {
          key: "onRemove",
          value: function onRemove(documento) {
            documento.IN_STAT = '0';
            this.putDocumento(documento);
          }
        }, {
          key: "isEditable",
          value: function isEditable(pedido) {
            var _user = JSON.parse(localStorage.getItem("currentUser"));

            var _id = _user['info']['id'];
            if (pedido.ID_USUA_RESP_CADA == _id && pedido.IN_INTE != 'I') return true;
            return false;
          }
        }, {
          key: "calculaPrazoAtendimento",
          value: function calculaPrazoAtendimento() {
            var _this18 = this;

            var cdEmpresa = this.form.get('CD_EMPR').value;
            var cdRegiao = this.form.get('CD_REGI_ENTR').value;
            if (!cdEmpresa || !cdRegiao) return;
            var params = {
              'CD_FILI': cdEmpresa,
              'CD_REGI_ENTR': cdRegiao
            };
            this.loadingNavBar = true;
            this.isDisable = true;
            this.prazoEntregaService.getPrazosEntrega(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(function () {
              _this18.loadingNavBar = false;
              _this18.isDisable = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                var data = response.body['data'][0];
                var prazo = data["TT_PRZO"];
                if (!prazo) prazo = 2;
                var date = new Date(); //prazo para atendimento

                var dataPrevista = new Date(date.setDate(date.getDate() + parseInt(prazo))); //se for domingo

                if (dataPrevista.getDay() == 0) dataPrevista.setDate(dataPrevista.getDate() + 1); //se for sábado

                if (dataPrevista.getDay() == 6) dataPrevista.setDate(dataPrevista.getDate() + 2);

                _this18.form.get('PRAZO').setValue(dataPrevista);

                _this18.pnotify.success('Prazo para atendimento estimado: ' + dataPrevista.toLocaleDateString());
              }
            });
          }
        }]);

        return LogisticaEntregaColetasCadastroComponent;
      }();

      LogisticaEntregaColetasCadastroComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_7__["RouterService"]
        }, {
          type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_13__["BsLocaleService"]
        }, {
          type: src_app_shared_services_ws_cep_service__WEBPACK_IMPORTED_MODULE_8__["CepService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"]
        }, {
          type: _services_pedidos_service__WEBPACK_IMPORTED_MODULE_10__["LogisticaEntregaPedidosService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_15__["AtividadesService"]
        }, {
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_16__["DateService"]
        }, {
          type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_13__["BsModalService"]
        }, {
          type: src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_11__["ComercialClientesService"]
        }, {
          type: src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_12__["DetailPanelService"]
        }, {
          type: _cadastros_restricoes_transporte_services_restricoes_service__WEBPACK_IMPORTED_MODULE_20__["LogisticaEntergaRestricoesService"]
        }, {
          type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_18__["ConfirmModalService"]
        }, {
          type: _cadastros_prazo_entrega_services_prazo_entrega_service__WEBPACK_IMPORTED_MODULE_21__["LogisticaPrazoEntregaService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_19__["Location"]
        }, {
          type: _cadastros_regioes_entrega_services_regioes_entrega_service__WEBPACK_IMPORTED_MODULE_22__["LogisticaRegioesEntregaService"]
        }, {
          type: _cadastros_filiais_services_filiais_service__WEBPACK_IMPORTED_MODULE_23__["LogisticaFiliaisService"]
        }];
      };

      LogisticaEntregaColetasCadastroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'logistica-entrega-cadastro-cadastro',
        template: _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_7__["RouterService"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_13__["BsLocaleService"], src_app_shared_services_ws_cep_service__WEBPACK_IMPORTED_MODULE_8__["CepService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"], _services_pedidos_service__WEBPACK_IMPORTED_MODULE_10__["LogisticaEntregaPedidosService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_15__["AtividadesService"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_16__["DateService"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_13__["BsModalService"], src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_11__["ComercialClientesService"], src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_12__["DetailPanelService"], _cadastros_restricoes_transporte_services_restricoes_service__WEBPACK_IMPORTED_MODULE_20__["LogisticaEntergaRestricoesService"], src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_18__["ConfirmModalService"], _cadastros_prazo_entrega_services_prazo_entrega_service__WEBPACK_IMPORTED_MODULE_21__["LogisticaPrazoEntregaService"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["Location"], _cadastros_regioes_entrega_services_regioes_entrega_service__WEBPACK_IMPORTED_MODULE_22__["LogisticaRegioesEntregaService"], _cadastros_filiais_services_filiais_service__WEBPACK_IMPORTED_MODULE_23__["LogisticaFiliaisService"]])], LogisticaEntregaColetasCadastroComponent);
      /***/
    },

    /***/
    "qQi3":
    /*!************************************************************************************!*\
      !*** ./src/app/modules/logistica/entrega/coletas/cadastro/cadastro.component.scss ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function qQi3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".modal-header {\n  height: 48px;\n}\n\nlegend {\n  font-size: 1em;\n  text-transform: uppercase;\n  padding-left: 0.25em;\n}\n\nul {\n  list-style: none;\n}\n\n.no-drop {\n  cursor: no-drop;\n}\n\nbutton[disabled] > a {\n  text-decoration: none;\n  cursor: no-drop;\n  color: #cccccc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvZW50cmVnYS9jb2xldGFzL2NhZGFzdHJvL2NhZGFzdHJvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2xvZ2lzdGljYS9lbnRyZWdhL2NvbGV0YXMvY2FkYXN0cm8vY2FkYXN0cm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwtaGVhZGVye1xuICBoZWlnaHQ6IDQ4cHg7XG59XG5cbmxlZ2VuZHtcbiAgZm9udC1zaXplOiAxZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBhZGRpbmctbGVmdDogMC4yNWVtO1xufVxuXG51bHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLm5vLWRyb3B7XG4gIGN1cnNvcjogbm8tZHJvcDtcbn1cblxuYnV0dG9uW2Rpc2FibGVkXSA+IGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGN1cnNvcjogbm8tZHJvcDtcbiAgY29sb3I6ICNjY2NjY2M7XG59Il19 */";
      /***/
    },

    /***/
    "tLCz":
    /*!********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/entrega/coletas/lista/lista.component.html ***!
      \********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function tLCz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\n<app-header [appTitle]=\"appTitle\">\n  <button (click)=\"onReset()\">\n    Limpiar\n  </button>\n  <button \n  [disabled]=\"form.status == 'INVALID'\"\n  (click)=\"onSearch()\">\n    Filtrar\n  </button>\n  <button [routerLink]=\"['./novo']\">\n    Novo\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\n  <advanced-filter>\n    <form autocomplete=\"off\" [formGroup]=\"form\">\n      <div class=\"form-row\">\n        <div class=\"form-group col-2\">\n          <label for=\"dtInicial\">Inicio</label>\n          <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\">\n                <i class=\"far fa-calendar-alt\"></i>\n              </span>\n            </div>\n            <input\n            class=\"form-control\"\n            id=\"dtInicial\"\n            type=\"text\"\n            bsDatepicker\n            [bsConfig]=\"bsConfig\"\n            placeholder=\"Escribelo...\"\n            formControlName=\"DT_INIC\"\n          />\n          </div>\n        </div>\n        <div class=\"form-group col-2\">\n          <label for=\"dtFinal\">Final</label>\n          <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\">\n                <i class=\"far fa-calendar-alt\"></i>\n              </span>\n            </div>\n            <input\n            class=\"form-control\"\n            id=\"dtFinal\"\n            type=\"text\"\n            bsDatepicker\n            [bsConfig]=\"bsConfig\"\n            placeholder=\"Escribelo...\"\n            formControlName=\"DT_FINA\"\n          />\n          </div>\n        </div>\n        <div class=\"form-group col-3\">\n          <label for=\"empresa\">Empresa</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"false\"\n            [items]=\"empresas\"\n            [virtualScroll]=\"true\"\n            dropdownPosition=\"bottom\"\n            labelForId=\"empresa\"\n            bindLabel=\"nome\"\n            bindValue=\"idFilial\"\n            id=\"empresa\"\n            (change)=\"onSearch()\"\n            [loading]=\"loadingFiliais\"\n            [ngClass]=\"onFieldRequired('CD_EMPR')\"\n            formControlName=\"CD_EMPR\"\n            placeholder=\"SELECCIONE...\"\n          >\n          </ng-select>\n        </div>\n        <div class=\"form-group col\">\n          <label for=\"pedido\">Ordem de Venta</label>\n          <input\n            id=\"pedido\" \n            type=\"text\" \n            class=\"form-control\" \n            placeholder=\"Escribelo...\" \n            formControlName=\"CD_PEDI\"\n            (keyup.enter)=\"onSearch()\">\n        </div>\n        <div class=\"form-group col\">\n          <label >COLETA/ENTREGA</label>\n          <select\n            class=\"custom-select form-control\"\n            formControlName=\"IN_STAT_ENTR\"\n          >\n            <option value=\"1\">TODOS</option>\n            <option value=\"2\">PENDENTE</option>\n            <option value=\"3\">REALIZADA</option>\n          </select>\n        </div>\n        <div class=\"form-group col-1\">\n          <label for=\"itensPorPagina\">Registros</label>\n          <select\n            class=\"form-control custom-select\"\n            (change)=\"setItensPerPage($event); onSearch()\"\n            formControlName=\"QT_ITENS_PAGINA\"\n            >\n            <option value=\"10\">10</option>\n            <option value=\"25\">25</option>\n            <option value=\"50\">50</option>\n            <option value=\"100\">100</option>\n            <option value=\"250\">250</option>\n            <option value=\"500\">500</option>\n          </select>\n        </div>\n      </div>\n    </form>\n  </advanced-filter>\n  <div class=\"row\">\n    <div class=\"col\">\n      <subtitles\n        [data]=\"subtitles\"\n        [show]=\"!noResult\">\n      </subtitles>\n    </div>\n  </div>\n  <div  class=\"col-12 p-0\" [hidden] = \"loading || noResult\">\n    <div>\n      <custom-table [config]=\"tableConfig\">\n        <ng-template #thead let-thead>\n          <tr>\n            <th class=\"text-center\">Lanzamiento</th>\n            <th class=\"text-left\">Nº del documento</th>\n            <th class=\"text-center\">Fecha del documento</th>\n            <th>Cliente</th>\n            <th class=\"text-center\">Rota</th>\n            <th class=\"text-center\">Fecha esperada</th>\n            <th class=\"text-center\">Entrega/Recogida</th>\n            <th></th>\n            <th></th>\n            <th></th>\n            <th class=\"text-center\">\n              \n              <ng-template #tooltipStatusIntegracao>\n                <table>\n                  <tbody>\n                    <tr>\n                      <th><i class=\"fas fa-paper-plane text-success\"></i></th>\n                      <td class=\"text-left\">Orden de vienda integrado en Fusion con éxito</td>\n                    </tr>\n                    <tr>\n                      <th><i class=\"fas fa-paper-plane text-warning\"></i></th>\n                      <td class=\"text-left\">Orden de vienda no integrado en Fusion</td>\n                    </tr>\n                  </tbody>\n                </table>\n              </ng-template>\n              \n              <button\n                class=\"btn-icon-sm\"\n                [tooltip]=\"tooltipStatusIntegracao\"\n                container=\"body\"\n                placement=\"top\"  \n              >\n                <i class=\"far fa-question-circle\"></i>\n              </button>\n            </th>\n            <th class=\"text-center\">\n              <ng-template #tooltipStatusPedido>\n                <table>\n                  <tbody>\n                    <tr>\n                      <th><i class=\"far fa-check-circle text-success\"></i></th>\n                      <td class=\"text-left\">Orden activa</td>\n                    </tr>\n                    <tr>\n                      <th><i class=\"fas fa-ban text-danger\"></i></th>\n                      <td class=\"text-left\">Orden inactiva</td>\n                    </tr>\n                  </tbody>\n                </table>\n              </ng-template>\n              \n              <button\n                class=\"btn-icon-sm\"\n                [tooltip]=\"tooltipStatusPedido\"\n                container=\"body\"\n                placement=\"top\"  \n              >\n                <i class=\"far fa-question-circle\"></i>\n              </button>\n            </th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>  \n          <tr *ngFor=\"let item of pedidos; let i = index\">\n            <td class=\"text-center\" [ngClass]=\"item.IN_STAT == 1 ? 'border-success' : 'border-danger'\">{{ item.ID_LOGI_COLE | number: '6.0-0'}}</td>\n            <td class=\"text-left\">{{ item.CD_PEDI }}</td>\n            <td class=\"text-center\">{{ item.DT_PEDI | date: 'dd/MM/yyyy'}}</td>\n            <td class=\"text-truncate\">{{ item.NM_CLIE }}</td>\n            <td class=\"text-center\">\n              <span *ngIf=\"item.CD_ROMA\">{{ item.CD_ROMA }}</span>\n              <span *ngIf=\"!item.CD_ROMA\">-</span>\n            </td>\n            <td class=\"text-center\">\n              <span *ngIf=\"item.PRAZO\">{{ item.PRAZO |  date: 'dd/MM/yyyy'}}</span>               \n              <span *ngIf=\"!item.PRAZO\">-</span>\n            </td>\n            <td class=\"text-center\">\n              <span *ngIf=\"item.DT_ENTR\">{{ item.DT_ENTR | date: 'dd/MM/yyyy' }}</span>\n              <span *ngIf=\"!item.DT_ENTR\">PENDENTE</span>\n            </td>\n            <td>\n              <div\n                tooltip=\"Pedido integrado via MONITOR DE INTEGRACIÓN\"\n                *ngIf=\"item.IN_PEDI_EXTE == 1\"\n                container=\"body\"\n                placement=\"left\"\n              >\n                <i class=\"fas fa-tv\"></i>\n              </div>\n            </td>\n            <td class=\"align-middle text-center\">\n              <ng-template #tooltipAlteracoesPedido>\n                <table>\n                  <tbody>\n                    <tr>\n                      <th class=\"text-left\">Cadastro:</th>\n                      <td class=\"text-left\">{{ item.DS_USUA_RESP_INSE || 'NO SE ENCONTRÓ INFORMACIÓN' }}</td>\n                    </tr>\n                    <tr>\n                      <th class=\"text-left\">Última atualização:</th>\n                      <td class=\"text-left\">{{ item.DS_USUA_RESP_ULTI_ATUA || 'NO SE ENCONTRÓ INFORMACIÓN' }}</td>\n                    </tr>\n                    <tr>\n                      <th class=\"text-left\">Cancelamento:</th>\n                      <td class=\"text-left\">{{ item.DS_USUA_RESP_CANC || 'NO SE ENCONTRÓ INFORMACIÓN' }}</td>\n                    </tr>\n                  </tbody>\n                </table>\n              </ng-template>\n              \n              <div\n                class=\"btn-icon-sm\"\n                [tooltip]=\"tooltipAlteracoesPedido\"\n                container=\"body\"\n                placement=\"left\"\n              >\n                <i class=\"far fa-user\"></i>\n              </div>\n            </td>\n            <td class=\"align-middle text-center\">\n                <button\n                  class=\"btn-icon-sm\"\n                  tooltip=\"Editar\"\n                  container=\"body\"\n                  placement=\"left\"\n                  [routerLink]=\"['./', item?.ID_LOGI_COLE]\" \n                  >\n                  <i class=\"fas fa-edit\"></i>\n                </button>\n            </td>\n            <td class=\"text-center\">\n\n              <ng-template #tooltipStatusPedido>\n                <div *ngIf=\"item.IN_INTE == 'I' && item.IN_STAT == '1'\">\n                  <p class=\"m-0 text-nowrap\">Pedido integrado en Fusion</p>\n                  <p class=\"m-0 text-nowrap\"></p>\n                </div>\n                <div *ngIf=\"item.IN_INTE == 'N' && item.IN_STAT == '1'\">\n                  <p class=\"m-0 text-nowrap d-block\">Pedido não integrado no Fusion</p>\n                  <p class=\"m-0 text-nowrap d-block\">Haga clic para reintegrar</p>\n                </div>\n                <div *ngIf=\"item.IN_STAT == '0'\">\n                  <p class=\"m-0 text-nowrap d-block\">No se puede integrar un pedido cancelado</p>\n                </div>\n              </ng-template>\n              \n              <div\n                [tooltip]=\"'Esta colección se integrará automáticamente.'\"\n                container=\"body\"\n                placement=\"left\"\n              >\n                <button\n                  class=\"btn-icon-sm\"\n                  [hidden]=\"item.loading\"\n                  [disabled]=\"true\"\n                  >\n                  <i class=\"fas fa-paper-plane\" [ngClass]=\"{'text-success': item.IN_INTE === 'I', 'text-warning': item.IN_INTE === 'N', 'text-danger': item.IN_INTE === 'E'}\"></i>\n                </button>\n                <!-- (click)=\"integraPedido(item)\" -->\n                <div class=\"spinner-border text-primary\" role=\"status\" [hidden]=\"!item.loading\" style=\"height: 1rem; width: 1rem;\">\n                  <span class=\"sr-only\">Loading...</span>\n                </div>\n              </div>\n            </td>\n            <td class=\"text-center\">\n              <span\n                class=\"d-block\"\n                container=\"body\"\n                placement=\"left\"\n                [tooltip]=\"canCancel(item) ? (item.IN_STAT == '0' ? 'Ativar' : 'Cancelar') : 'Acción permitida para ordenar solo al creador'\"\n              >\n                <button (click)=\"changeState(item)\" [disabled]=\"!canCancel(item)\">\n                  <i *ngIf=\"item.IN_STAT == '0'\" class=\"fas fa-ban text-danger\"></i>\n                  <i *ngIf=\"item.IN_STAT == '1'\" class=\"far fa-check-circle text-success\">\n                  </i>\n                </button>\n              </span>\n            </td>\n          </tr>\n        </ng-template>\n      </custom-table>\n    </div>\n    <div>\n      Mostrando {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\n      <pagination\n        [maxSize]=\"10\"\n        [totalItems]=\"totalItems\"\n        (pageChanged)=\"onPageChanged($event)\"\n        [(itemsPerPage)]=\"itemsPerPage\"\n        [boundaryLinks]=\"true\"\n        [(ngModel)]=\"currentPage\"\n        previousText=\"&lsaquo;\"\n        nextText=\"&rsaquo;\"\n        firstText=\"&laquo;\"\n        lastText=\"&raquo;\">\n      </pagination>\n    </div>\n  </div>\n  <div [hidden]=\"loading || !noResult\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 250px\">\n    <empty-result message=\"No se encontró información\"></empty-result>\n  </div>\n</app-body>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=coletas-coletas-module-es5.js.map