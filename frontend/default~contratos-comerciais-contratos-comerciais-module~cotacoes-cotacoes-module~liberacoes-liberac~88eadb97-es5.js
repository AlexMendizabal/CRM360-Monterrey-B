(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~contratos-comerciais-contratos-comerciais-module~cotacoes-cotacoes-module~liberacoes-liberac~88eadb97"], {
    /***/
    "/Zk1":
    /*!******************************************************************************************!*\
      !*** ./src/app/modules/comercial/ciclo-vendas/cotacoes/formulario/formulario.service.ts ***!
      \******************************************************************************************/

    /*! exports provided: ComercialCicloVendasCotacoesFormularioService */

    /***/
    function Zk1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCicloVendasCotacoesFormularioService", function () {
        return ComercialCicloVendasCotacoesFormularioService;
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


      var _comercial_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../comercial.service */
      "VgqD");
      /* harmony import */


      var _services_vendedores_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../services/vendedores.service */
      "4xRd");
      /* harmony import */


      var _services_clientes_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../services/clientes.service */
      "8ouN");
      /* harmony import */


      var _cadastros_transportadoras_transportadoras_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../cadastros/transportadoras/transportadoras.service */
      "n0wP");
      /* harmony import */


      var _agenda_formulario_formulario_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../agenda/formulario/formulario.service */
      "L7KI");
      /* harmony import */


      var _cadastros_situacao_proposta_situacao_proposta_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../cadastros/situacao-proposta/situacao-proposta.service */
      "3WN2");
      /* harmony import */


      var _cadastros_formas_pagamento_formas_pagamento_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../cadastros/formas-pagamento/formas-pagamento.service */
      "tVei");
      /* harmony import */


      var _cadastros_contato_formas_contato_formas_contato_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../cadastros/contato/formas-contato/formas-contato.service */
      "T2FF");
      /* harmony import */


      var _cadastros_contato_origem_contato_origem_contato_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../cadastros/contato/origem-contato/origem-contato.service */
      "RAv3");
      /* harmony import */


      var _tid_software_tid_software_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../tid-software/tid-software.service */
      "zN97"); // Services


      var ComercialCicloVendasCotacoesFormularioService = /*#__PURE__*/function () {
        function ComercialCicloVendasCotacoesFormularioService(http, comercialService, vendedoresService, clientesService, tidService, transportadorasService, agendaService, situacoesService, formasPagamentoService, formasContatoService, origensContatoService) {
          _classCallCheck(this, ComercialCicloVendasCotacoesFormularioService);

          this.http = http;
          this.comercialService = comercialService;
          this.vendedoresService = vendedoresService;
          this.clientesService = clientesService;
          this.tidService = tidService;
          this.transportadorasService = transportadorasService;
          this.agendaService = agendaService;
          this.situacoesService = situacoesService;
          this.formasPagamentoService = formasPagamentoService;
          this.formasContatoService = formasContatoService;
          this.origensContatoService = origensContatoService;
          this.API = "http://23.254.204.187/api/comercial/ciclo-vendas/cotacoes";
          this.notifySubmit = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.notifySubmitObservable$ = this.notifySubmit.asObservable();
          this.materiaisSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.limparCarrinhoSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.calculoSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.descontoSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.loteSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.codCliente = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        _createClass(ComercialCicloVendasCotacoesFormularioService, [{
          key: "onNotifySubmit",
          value: function onNotifySubmit(data) {
            this.notifySubmit.next(data);
          }
        }, {
          key: "loadDependencies",
          value: function loadDependencies() {
            var situacoes = this.situacoesService.getListaSituacaoProposta(null); // const depositos = this.comercialService.getDepositos({ idDeposito: [1,18,60,79,/*77*/], tipo: 'ssv' });
            // const empresas = this.comercialService.getEmpresas({ idEmpresa: [4,18,55,79,77], tipo: 'search' });

            var empresas = this.tidService.getEmpresas('vendas');
            var depositos = this.comercialService.getDepositos(null);
            var formasPagamento = this.formasPagamentoService.getListaFormasPagamento({
              tipoConsulta: 2
            });
            var formasContato = this.formasContatoService.getListaFormasContato(null);
            var origensContato = this.origensContatoService.getListaOrigemContato(null);
            var transportadoras = this.transportadorasService.getListaTransportadoras({
              tipoConsulta: 2
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])([situacoes, empresas, depositos, formasPagamento, formasContato, origensContato, transportadoras]);
          }
        }, {
          key: "createCarteiraClientes",
          value: function createCarteiraClientes(carteiraClientes) {
            this.carteiraClientesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](carteiraClientes);
            this.carteiraClientes = this.carteiraClientesSubject.asObservable();
            this.carteiraClientesSubject.next(carteiraClientes);
            this.carteiraClientesLoaded = true;
          }
        }, {
          key: "getCurrentCarteiraClientes",
          value: function getCurrentCarteiraClientes() {
            var _carteiraClientes = [];

            if (this.carteiraClientesLoaded === true) {
              _carteiraClientes = this.carteiraClientesSubject.value;
            }

            return _carteiraClientes;
          }
        }, {
          key: "getCarteiraClientes",
          value: function getCarteiraClientes() {
            return this.vendedoresService.getCarteiraClientes();
          }
        }, {
          key: "clearCarteiraClientes",
          value: function clearCarteiraClientes() {
            if (typeof this.carteiraClientesSubject !== 'undefined') {
              this.carteiraClientesSubject.next([]);
            }
          }
        }, {
          key: "getPesquisaCliente",
          value: function getPesquisaCliente(termoPesquisa) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([// {
              //   codCliente: 78919,
              //   razaoSocial: 'LINDSAY',
              // },
            ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(1000));
          }
        }, {
          key: "getLocaisEntrega",
          value: function getLocaisEntrega(codCliente) {
            return this.clientesService.getEnderecos(codCliente, {
              localEntrega: 1
            });
          }
        }, {
          key: "getAnexos",
          value: function getAnexos(codCotacao) {
            return this.http.get("".concat(this.API, "/anexo/documentos/").concat(codCotacao)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
          }
        }, {
          key: "postAnexos",
          value: function postAnexos(params, codCotacao) {
            return this.http.post("".concat(this.API, "/anexo/documentos/salvar?codCotacao=").concat(codCotacao), params);
          }
        }, {
          key: "deleteAnexo",
          value: function deleteAnexo(codAnexo) {
            var params = {
              codAnexo: codAnexo
            };
            return this.http.put("".concat(this.API, "/anexo/documentos/excluir"), params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
          }
        }, {
          key: "getCliente",
          value: function getCliente(codCliente) {
            return this.http.get("http://23.254.204.187/api/comercial/clientes/detalhes/".concat(codCliente)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
          }
        }]);

        return ComercialCicloVendasCotacoesFormularioService;
      }();

      ComercialCicloVendasCotacoesFormularioService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _comercial_service__WEBPACK_IMPORTED_MODULE_5__["ComercialService"]
        }, {
          type: _services_vendedores_service__WEBPACK_IMPORTED_MODULE_6__["ComercialVendedoresService"]
        }, {
          type: _services_clientes_service__WEBPACK_IMPORTED_MODULE_7__["ComercialClientesService"]
        }, {
          type: _tid_software_tid_software_service__WEBPACK_IMPORTED_MODULE_14__["ComercialTidSoftwareService"]
        }, {
          type: _cadastros_transportadoras_transportadoras_service__WEBPACK_IMPORTED_MODULE_8__["ComercialCadastrosTransportadoraService"]
        }, {
          type: _agenda_formulario_formulario_service__WEBPACK_IMPORTED_MODULE_9__["ComercialAgendaFormularioService"]
        }, {
          type: _cadastros_situacao_proposta_situacao_proposta_service__WEBPACK_IMPORTED_MODULE_10__["ComercialCadastrosSituacaoPropostaService"]
        }, {
          type: _cadastros_formas_pagamento_formas_pagamento_service__WEBPACK_IMPORTED_MODULE_11__["ComercialCadastrosFormasPagamentoService"]
        }, {
          type: _cadastros_contato_formas_contato_formas_contato_service__WEBPACK_IMPORTED_MODULE_12__["ComercialCadastrosContatoFormasContatoService"]
        }, {
          type: _cadastros_contato_origem_contato_origem_contato_service__WEBPACK_IMPORTED_MODULE_13__["ComercialCadastrosContatoOrigemContatoService"]
        }];
      };

      ComercialCicloVendasCotacoesFormularioService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _comercial_service__WEBPACK_IMPORTED_MODULE_5__["ComercialService"], _services_vendedores_service__WEBPACK_IMPORTED_MODULE_6__["ComercialVendedoresService"], _services_clientes_service__WEBPACK_IMPORTED_MODULE_7__["ComercialClientesService"], _tid_software_tid_software_service__WEBPACK_IMPORTED_MODULE_14__["ComercialTidSoftwareService"], _cadastros_transportadoras_transportadoras_service__WEBPACK_IMPORTED_MODULE_8__["ComercialCadastrosTransportadoraService"], _agenda_formulario_formulario_service__WEBPACK_IMPORTED_MODULE_9__["ComercialAgendaFormularioService"], _cadastros_situacao_proposta_situacao_proposta_service__WEBPACK_IMPORTED_MODULE_10__["ComercialCadastrosSituacaoPropostaService"], _cadastros_formas_pagamento_formas_pagamento_service__WEBPACK_IMPORTED_MODULE_11__["ComercialCadastrosFormasPagamentoService"], _cadastros_contato_formas_contato_formas_contato_service__WEBPACK_IMPORTED_MODULE_12__["ComercialCadastrosContatoFormasContatoService"], _cadastros_contato_origem_contato_origem_contato_service__WEBPACK_IMPORTED_MODULE_13__["ComercialCadastrosContatoOrigemContatoService"]])], ComercialCicloVendasCotacoesFormularioService);
      /***/
    },

    /***/
    "3WN2":
    /*!********************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/situacao-proposta/situacao-proposta.service.ts ***!
      \********************************************************************************************/

    /*! exports provided: ComercialCadastrosSituacaoPropostaService */

    /***/
    function WN2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosSituacaoPropostaService", function () {
        return ComercialCadastrosSituacaoPropostaService;
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

      var ComercialCadastrosSituacaoPropostaService = /*#__PURE__*/function () {
        function ComercialCadastrosSituacaoPropostaService(http) {
          _classCallCheck(this, ComercialCadastrosSituacaoPropostaService);

          this.http = http;
          this.API = "http://23.254.204.187/api/comercial/cadastros/situacao-proposta";
        }

        _createClass(ComercialCadastrosSituacaoPropostaService, [{
          key: "getListaSituacaoProposta",
          value: function getListaSituacaoProposta(params) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/lista"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getListaSituacaoPropostaTid",
          value: function getListaSituacaoPropostaTid() {
            return this.http.get("".concat(this.API, "/tid/lista")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getAlteracoes",
          value: function getAlteracoes(codSituacaoProposta) {
            return this.http.get("".concat(this.API, "/alteracoes/").concat(codSituacaoProposta)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getDetalhes",
          value: function getDetalhes(codSituacaoProposta) {
            return this.http.get("".concat(this.API, "/detalhes/").concat(codSituacaoProposta)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "saveSituacaoProposta",
          value: function saveSituacaoProposta(situacaoProposta) {
            return this.http.post("".concat(this.API, "/salvar"), situacaoProposta).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "updateSituacaoProposta",
          value: function updateSituacaoProposta(situacaoProposta) {
            return this.http.put("".concat(this.API, "/atualizar"), situacaoProposta).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "save",
          value: function save(situacaoProposta) {
            if (situacaoProposta.codSituacaoProposta !== null) {
              return this.updateSituacaoProposta(situacaoProposta);
            }

            return this.saveSituacaoProposta(situacaoProposta);
          }
        }, {
          key: "activateSituacaoProposta",
          value: function activateSituacaoProposta(codigo) {
            return this.http.post("".concat(this.API, "/ativar"), codigo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "inactivateSituacaoProposta",
          value: function inactivateSituacaoProposta(codigo) {
            return this.http.post("".concat(this.API, "/inativar"), codigo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }]);

        return ComercialCadastrosSituacaoPropostaService;
      }();

      ComercialCadastrosSituacaoPropostaService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      ComercialCadastrosSituacaoPropostaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ComercialCadastrosSituacaoPropostaService);
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
          this.API = "http://23.254.204.187/api/comercial/clientes";
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
          key: "getVendedorCiudad",
          value: function getVendedorCiudad(id_vendedor) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('id_vendedor', id_vendedor);
            return this.http.get("".concat(this.API, "/vendedor/ciudad"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
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
          key: "sapUpdateClient",
          value: function sapUpdateClient(codigo_cliente, data) {
            console.log("update Cliente:", data);
            return this.http.post("".concat(this.API, "/pesquisa/updatesap"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "sapUpdateContacto",
          value: function sapUpdateContacto(codigo_cliente, data) {
            console.log("update Contacto:", data);
            return this.http.post("".concat(this.API, "/pesquisa/updatesapcontacto"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getContatosResumido",
          value: function getContatosResumido(codCliente) {
            return this.http.get("".concat(this.API, "/pesquisa/contactodetalle/").concat(codCliente)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getTipoClientes",
          value: function getTipoClientes() {
            return this.http.get("".concat(this.API, "/tipo_cliente")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
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
          key: "sapPostClient",
          value: function sapPostClient(data) {
            return this.http.post("".concat(this.API, "/postsap"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(0));
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
    "L7KI":
    /*!***************************************************************************!*\
      !*** ./src/app/modules/comercial/agenda/formulario/formulario.service.ts ***!
      \***************************************************************************/

    /*! exports provided: ComercialAgendaFormularioService */

    /***/
    function L7KI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialAgendaFormularioService", function () {
        return ComercialAgendaFormularioService;
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
      /* harmony import */


      var _cadastros_titulos_agenda_titulos_agenda_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../cadastros/titulos-agenda/titulos-agenda.service */
      "yZjN");
      /* harmony import */


      var _services_vendedores_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/vendedores.service */
      "4xRd"); // Services


      var ComercialAgendaFormularioService = /*#__PURE__*/function () {
        function ComercialAgendaFormularioService(http, vendedoresService, titulosAgendaService) {
          _classCallCheck(this, ComercialAgendaFormularioService);

          this.http = http;
          this.vendedoresService = vendedoresService;
          this.titulosAgendaService = titulosAgendaService;
          this.API = "http://23.254.204.187/api/comercial/agenda/formulario";
        }

        _createClass(ComercialAgendaFormularioService, [{
          key: "loadDependencies",
          value: function loadDependencies() {
            var clientes = this.vendedoresService.getCarteiraClientes();
            var vendedores = this.vendedoresService.getVendedores();
            var formasContato = this.getFormasContato();
            var origensContato = this.getOrigensContato();
            var motivosReagendamento = this.getMotivosReagendamento();
            var listarTitulosAgenda = this.titulosAgendaService.getListaTitulosAgenda({
              codSituacao: '1'
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])([clientes, formasContato, origensContato, motivosReagendamento, listarTitulosAgenda, vendedores]);
          }
        }, {
          key: "getFormasContato",
          value: function getFormasContato() {
            return this.http.get("".concat(this.API, "/formas-contato")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getOrigensContato",
          value: function getOrigensContato() {
            return this.http.get("".concat(this.API, "/origens-contato")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getMotivosReagendamento",
          value: function getMotivosReagendamento() {
            return this.http.get("".concat(this.API, "/motivos-reagendamento")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }]);

        return ComercialAgendaFormularioService;
      }();

      ComercialAgendaFormularioService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _services_vendedores_service__WEBPACK_IMPORTED_MODULE_6__["ComercialVendedoresService"]
        }, {
          type: _cadastros_titulos_agenda_titulos_agenda_service__WEBPACK_IMPORTED_MODULE_5__["ComercialCadastrosTitulosAgendaService"]
        }];
      };

      ComercialAgendaFormularioService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_vendedores_service__WEBPACK_IMPORTED_MODULE_6__["ComercialVendedoresService"], _cadastros_titulos_agenda_titulos_agenda_service__WEBPACK_IMPORTED_MODULE_5__["ComercialCadastrosTitulosAgendaService"]])], ComercialAgendaFormularioService);
      /***/
    },

    /***/
    "RAv3":
    /*!**********************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/contato/origem-contato/origem-contato.service.ts ***!
      \**********************************************************************************************/

    /*! exports provided: ComercialCadastrosContatoOrigemContatoService */

    /***/
    function RAv3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosContatoOrigemContatoService", function () {
        return ComercialCadastrosContatoOrigemContatoService;
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

      var ComercialCadastrosContatoOrigemContatoService = /*#__PURE__*/function () {
        function ComercialCadastrosContatoOrigemContatoService(http) {
          _classCallCheck(this, ComercialCadastrosContatoOrigemContatoService);

          this.http = http;
          this.API = "http://23.254.204.187/api/comercial/cadastros/contato/origem-contato";
        }

        _createClass(ComercialCadastrosContatoOrigemContatoService, [{
          key: "getListaOrigemContato",
          value: function getListaOrigemContato(params) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/lista"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getAlteracoes",
          value: function getAlteracoes(codOrigemContato) {
            return this.http.get("".concat(this.API, "/alteracoes/").concat(codOrigemContato)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getOrigemContato",
          value: function getOrigemContato(codOrigemContato) {
            return this.http.get("".concat(this.API, "/detalhes/").concat(codOrigemContato)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "saveOrigemContato",
          value: function saveOrigemContato(record) {
            return this.http.post("".concat(this.API, "/salvar"), record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "updateOrigemContato",
          value: function updateOrigemContato(record) {
            return this.http.put("".concat(this.API, "/atualizar"), record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "save",
          value: function save(record) {
            if (record.codOrigemContato !== null) {
              return this.updateOrigemContato(record);
            }

            return this.saveOrigemContato(record);
          }
        }, {
          key: "deleteOrigemContato",
          value: function deleteOrigemContato(codOrigemContato) {
            return this.http["delete"]("".concat(this.API, "/excluir/").concat(codOrigemContato)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "activateOrigemContato",
          value: function activateOrigemContato(codOrigemContato) {
            return this.http.post("".concat(this.API, "/ativar"), codOrigemContato).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "inactivateOrigemContato",
          value: function inactivateOrigemContato(codOrigemContato) {
            return this.http.post("".concat(this.API, "/inativar"), codOrigemContato).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getListaOrigemERP",
          value: function getListaOrigemERP() {
            return this.http.get("".concat(this.API, "/erp/lista")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }]);

        return ComercialCadastrosContatoOrigemContatoService;
      }();

      ComercialCadastrosContatoOrigemContatoService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      ComercialCadastrosContatoOrigemContatoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ComercialCadastrosContatoOrigemContatoService);
      /***/
    },

    /***/
    "T2FF":
    /*!**********************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/contato/formas-contato/formas-contato.service.ts ***!
      \**********************************************************************************************/

    /*! exports provided: ComercialCadastrosContatoFormasContatoService */

    /***/
    function T2FF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosContatoFormasContatoService", function () {
        return ComercialCadastrosContatoFormasContatoService;
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

      var ComercialCadastrosContatoFormasContatoService = /*#__PURE__*/function () {
        function ComercialCadastrosContatoFormasContatoService(http) {
          _classCallCheck(this, ComercialCadastrosContatoFormasContatoService);

          this.http = http;
          this.API = "http://23.254.204.187/api/comercial/cadastros/contato/forma-contato";
        }

        _createClass(ComercialCadastrosContatoFormasContatoService, [{
          key: "getListaFormasContato",
          value: function getListaFormasContato(params) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/lista"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getAlteracoes",
          value: function getAlteracoes(codFormaContato) {
            return this.http.get("".concat(this.API, "/alteracoes/").concat(codFormaContato)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getFormaContato",
          value: function getFormaContato(codFormaContato) {
            return this.http.get("".concat(this.API, "/detalhes/").concat(codFormaContato)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "saveFormaContato",
          value: function saveFormaContato(record) {
            return this.http.post("".concat(this.API, "/salvar"), record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "updateFormaContato",
          value: function updateFormaContato(record) {
            return this.http.put("".concat(this.API, "/atualizar"), record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "save",
          value: function save(record) {
            if (record.codFormaContato !== null) {
              return this.updateFormaContato(record);
            }

            return this.saveFormaContato(record);
          }
        }, {
          key: "deleteFormaContato",
          value: function deleteFormaContato(codFormaContato) {
            return this.http["delete"]("".concat(this.API, "/excluir/").concat(codFormaContato)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "activateFormaContato",
          value: function activateFormaContato(codFormaContato) {
            return this.http.post("".concat(this.API, "/ativar"), codFormaContato).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "inactivateFormaContato",
          value: function inactivateFormaContato(codFormaContato) {
            return this.http.post("".concat(this.API, "/inativar"), codFormaContato).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getListaFormasERP",
          value: function getListaFormasERP() {
            return this.http.get("".concat(this.API, "/erp/lista")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }]);

        return ComercialCadastrosContatoFormasContatoService;
      }();

      ComercialCadastrosContatoFormasContatoService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      ComercialCadastrosContatoFormasContatoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ComercialCadastrosContatoFormasContatoService);
      /***/
    },

    /***/
    "n0wP":
    /*!****************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/transportadoras/transportadoras.service.ts ***!
      \****************************************************************************************/

    /*! exports provided: ComercialCadastrosTransportadoraService */

    /***/
    function n0wP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosTransportadoraService", function () {
        return ComercialCadastrosTransportadoraService;
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

      var ComercialCadastrosTransportadoraService = /*#__PURE__*/function () {
        function ComercialCadastrosTransportadoraService(http) {
          _classCallCheck(this, ComercialCadastrosTransportadoraService);

          this.http = http;
          this.API = "http://23.254.204.187/api/comercial/cadastros/transportadora";
        }

        _createClass(ComercialCadastrosTransportadoraService, [{
          key: "getListaTransportadoras",
          value: function getListaTransportadoras(params) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/lista"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getTransportadora",
          value: function getTransportadora(id) {
            return this.http.get("".concat(this.API, "/editar/").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "postTransportadora",
          value: function postTransportadora(record) {
            return this.http.post("".concat(this.API, "/salvar"), record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "deleteTransportadora",
          value: function deleteTransportadora(transportadora) {
            return this.http["delete"]("".concat(this.API, "/excluir/").concat(transportadora.codTransportadoraTid)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "deleteContato",
          value: function deleteContato(codTransportdora, id) {
            return this.http["delete"]("".concat(this.API, "/contato/excluir/").concat(codTransportdora, "/").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }]);

        return ComercialCadastrosTransportadoraService;
      }();

      ComercialCadastrosTransportadoraService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      ComercialCadastrosTransportadoraService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ComercialCadastrosTransportadoraService);
      /***/
    },

    /***/
    "tVei":
    /*!******************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/formas-pagamento/formas-pagamento.service.ts ***!
      \******************************************************************************************/

    /*! exports provided: ComercialCadastrosFormasPagamentoService */

    /***/
    function tVei(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosFormasPagamentoService", function () {
        return ComercialCadastrosFormasPagamentoService;
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

      var ComercialCadastrosFormasPagamentoService = /*#__PURE__*/function () {
        function ComercialCadastrosFormasPagamentoService(http) {
          _classCallCheck(this, ComercialCadastrosFormasPagamentoService);

          this.http = http;
          this.API = "http://23.254.204.187/api/comercial/cadastros/formas-pagamento";
        }

        _createClass(ComercialCadastrosFormasPagamentoService, [{
          key: "getListaFormasPagamento",
          value: function getListaFormasPagamento(params) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/lista"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getAlteracoes",
          value: function getAlteracoes(codFormaPagamento) {
            return this.http.get("".concat(this.API, "/alteracoes/").concat(codFormaPagamento)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getDetalhes",
          value: function getDetalhes(codFormaPagamento) {
            return this.http.get("".concat(this.API, "/detalhes/").concat(codFormaPagamento)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "saveFormasPagamento",
          value: function saveFormasPagamento(formaPagamento) {
            return this.http.post("".concat(this.API, "/salvar"), formaPagamento).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "updateFormasPagamento",
          value: function updateFormasPagamento(formaPagamento) {
            return this.http.put("".concat(this.API, "/atualizar"), formaPagamento).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "save",
          value: function save(formaPagamento) {
            if (formaPagamento.codFormaPagamento !== null) {
              return this.updateFormasPagamento(formaPagamento);
            }

            return this.saveFormasPagamento(formaPagamento);
          }
        }, {
          key: "activateFormasPagamento",
          value: function activateFormasPagamento(codigo) {
            return this.http.post("".concat(this.API, "/ativar"), codigo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "inactivateFormasPagamento",
          value: function inactivateFormasPagamento(codigo) {
            return this.http.post("".concat(this.API, "/inativar"), codigo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getListaFormasERP",
          value: function getListaFormasERP() {
            return this.http.get("".concat(this.API, "/erp/lista")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }]);

        return ComercialCadastrosFormasPagamentoService;
      }();

      ComercialCadastrosFormasPagamentoService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      ComercialCadastrosFormasPagamentoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ComercialCadastrosFormasPagamentoService);
      /***/
    },

    /***/
    "yZjN":
    /*!**************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/titulos-agenda/titulos-agenda.service.ts ***!
      \**************************************************************************************/

    /*! exports provided: ComercialCadastrosTitulosAgendaService */

    /***/
    function yZjN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosTitulosAgendaService", function () {
        return ComercialCadastrosTitulosAgendaService;
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

      var ComercialCadastrosTitulosAgendaService = /*#__PURE__*/function () {
        function ComercialCadastrosTitulosAgendaService(http) {
          _classCallCheck(this, ComercialCadastrosTitulosAgendaService);

          this.http = http;
          this.API = "http://23.254.204.187/api/comercial/cadastros/titulos-agenda";
        }

        _createClass(ComercialCadastrosTitulosAgendaService, [{
          key: "getListaTitulosAgenda",
          value: function getListaTitulosAgenda(params) {
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
          value: function getDetalhes(codTitulo) {
            return this.http.get("".concat(this.API, "/detalhes/").concat(codTitulo)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "saveTitulosAgenda",
          value: function saveTitulosAgenda(titulosAgenda) {
            return this.http.post("".concat(this.API, "/salvar"), titulosAgenda).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "updateTitulosAgenda",
          value: function updateTitulosAgenda(titulosAgenda) {
            return this.http.put("".concat(this.API, "/atualizar"), titulosAgenda).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "save",
          value: function save(titulosAgenda) {
            if (titulosAgenda.codTitulo !== null) {
              return this.updateTitulosAgenda(titulosAgenda);
            }

            return this.saveTitulosAgenda(titulosAgenda);
          }
        }, {
          key: "activateTitulosAgenda",
          value: function activateTitulosAgenda(codigo) {
            return this.http.post("".concat(this.API, "/ativar"), codigo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "inactivateTitulosAgenda",
          value: function inactivateTitulosAgenda(codigo) {
            return this.http.post("".concat(this.API, "/inativar"), codigo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }]);

        return ComercialCadastrosTitulosAgendaService;
      }();

      ComercialCadastrosTitulosAgendaService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      ComercialCadastrosTitulosAgendaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ComercialCadastrosTitulosAgendaService);
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
          this.API = "http://23.254.204.187/api/comercial/tid-software";
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
//# sourceMappingURL=default~contratos-comerciais-contratos-comerciais-module~cotacoes-cotacoes-module~liberacoes-liberac~88eadb97-es5.js.map