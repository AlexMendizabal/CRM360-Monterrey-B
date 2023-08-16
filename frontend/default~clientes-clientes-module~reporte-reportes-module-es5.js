(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~clientes-clientes-module~reporte-reportes-module"], {
    /***/
    "4xRd":
    /*!******************************************************************!*\
      !*** ./src/app/modules/comercial/services/vendedores.service.ts ***!
      \******************************************************************/

    /*! exports provided: ComercialVendedoresService */

    /***/
    function xRd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialVendedoresService", function () {
        return ComercialVendedoresService;
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

      var ComercialVendedoresService = /*#__PURE__*/function () {
        function ComercialVendedoresService(http) {
          _classCallCheck(this, ComercialVendedoresService);

          this.http = http;
          this.API = "http://23.254.204.187/api/comercial/vendedor";
          this.API_CADASTROS = "http://23.254.204.187/api/comercial/cadastros";
        }

        _createClass(ComercialVendedoresService, [{
          key: "getDetalhesCadastro",
          value: function getDetalhesCadastro() {
            return this.http.get("".concat(this.API, "/detalhes-cadastro")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getVendedores",
          value: function getVendedores() {
            return this.http.get("".concat(this.API, "/lista")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getVendedoresSucursal",
          value: function getVendedoresSucursal(id) {
            return this.http.get("".concat(this.API, "/sucursal-vendedor/").concat(id));
          }
        }, {
          key: "getGestiones",
          value: function getGestiones() {
            return this.http.get("".concat(this.API_CADASTROS, "/titulos-agenda/lista?codSituacao=1")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getCarteiraClientes",
          value: function getCarteiraClientes(params) {
            return this.http.get("".concat(this.API, "/carteira-clientes"), {
              params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getCarteiraClientesCotizacion",
          value: function getCarteiraClientesCotizacion(params) {
            return this.http.get("".concat(this.API, "/carteira-clientes-cotizacion"), {
              params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getValidaClienteCarteira",
          value: function getValidaClienteCarteira(codCliente) {
            return this.http.get("".concat(this.API, "/valida-cliente-carteira/").concat(codCliente)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getVinculoOperadores",
          value: function getVinculoOperadores() {
            return this.http.get("".concat(this.API, "/vinculo-operadores")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }]);

        return ComercialVendedoresService;
      }();

      ComercialVendedoresService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      ComercialVendedoresService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ComercialVendedoresService);
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
    "qdc5":
    /*!********************************************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/cadastro/dados-faturamento/formulario/formulario.service.ts ***!
      \********************************************************************************************************/

    /*! exports provided: ComercialClientesCadastroDadosFaturamentoFormularioService */

    /***/
    function qdc5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialClientesCadastroDadosFaturamentoFormularioService", function () {
        return ComercialClientesCadastroDadosFaturamentoFormularioService;
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

      var ComercialClientesCadastroDadosFaturamentoFormularioService = /*#__PURE__*/function () {
        function ComercialClientesCadastroDadosFaturamentoFormularioService(http) {
          _classCallCheck(this, ComercialClientesCadastroDadosFaturamentoFormularioService);

          this.http = http;
          this.API = "http://23.254.204.187/api/comercial/clientes/cadastro/formulario/dados-faturamento";
        }

        _createClass(ComercialClientesCadastroDadosFaturamentoFormularioService, [{
          key: "loadDependenciesPF",
          value: function loadDependenciesPF() {
            var tiposCadastro = this.getTiposCadastro();
            var contribuintes = this.getContribuintes();
            var setorAtividades = this.getSetorAtividades();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])([tiposCadastro, contribuintes, setorAtividades]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "loadDependenciesPJ",
          value: function loadDependenciesPJ() {
            var tiposCadastro = this.getTiposCadastro();
            var regimesTributacao = this.getRegimesTributacao();
            var contribuintes = this.getContribuintes();
            var setorAtividades = this.getSetorAtividades();
            var finalidadesMaterial = this.getFinalidadesMaterial();
            var cnaes = this.getCnaes();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])([tiposCadastro, regimesTributacao, contribuintes, setorAtividades, finalidadesMaterial, cnaes]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getTiposCadastro",
          value: function getTiposCadastro() {
            return this.http.get("".concat(this.API, "/tipos-cadastro")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getRegimesTributacao",
          value: function getRegimesTributacao() {
            return this.http.get("".concat(this.API, "/regimes-tributacao")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getContribuintes",
          value: function getContribuintes() {
            return this.http.get("".concat(this.API, "/contribuintes")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getSetorAtividades",
          value: function getSetorAtividades() {
            return this.http.get("".concat(this.API, "/setor-atividades")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getFinalidadesMaterial",
          value: function getFinalidadesMaterial() {
            return this.http.get("".concat(this.API, "/finalidades-material")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getCnaes",
          value: function getCnaes() {
            return this.http.get("".concat(this.API, "/cnaes")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }]);

        return ComercialClientesCadastroDadosFaturamentoFormularioService;
      }();

      ComercialClientesCadastroDadosFaturamentoFormularioService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      ComercialClientesCadastroDadosFaturamentoFormularioService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ComercialClientesCadastroDadosFaturamentoFormularioService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~clientes-clientes-module~reporte-reportes-module-es5.js.map