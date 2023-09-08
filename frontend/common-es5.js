(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "3gui":
    /*!****************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/tipo-operadores/tipo-operadores.service.ts ***!
      \****************************************************************************************/

    /*! exports provided: ComercialCadastrosTipoOperadorService */

    /***/
    function gui(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosTipoOperadorService", function () {
        return ComercialCadastrosTipoOperadorService;
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

      var ComercialCadastrosTipoOperadorService = /*#__PURE__*/function () {
        function ComercialCadastrosTipoOperadorService(http) {
          _classCallCheck(this, ComercialCadastrosTipoOperadorService);

          this.http = http;
          this.API = "http://23.254.204.187/api/comercial/cadastros/tipo-operador";
        }

        _createClass(ComercialCadastrosTipoOperadorService, [{
          key: "getListaTipoOperador",
          value: function getListaTipoOperador(params) {
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
          value: function getAlteracoes(codTipoOperador) {
            return this.http.get("".concat(this.API, "/alteracoes/").concat(codTipoOperador)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getDetalhes",
          value: function getDetalhes(codTipoOperador) {
            return this.http.get("".concat(this.API, "/detalhes/").concat(codTipoOperador)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "saveTipoOperador",
          value: function saveTipoOperador(tipoOperador) {
            return this.http.post("".concat(this.API, "/salvar"), tipoOperador).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "updateTipoOperador",
          value: function updateTipoOperador(tipoOperador) {
            return this.http.put("".concat(this.API, "/atualizar"), tipoOperador).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "save",
          value: function save(tipoOperador) {
            if (tipoOperador.codTipoOperador !== null) {
              return this.updateTipoOperador(tipoOperador);
            }

            return this.saveTipoOperador(tipoOperador);
          }
        }, {
          key: "activateTipoOperador",
          value: function activateTipoOperador(codTipoOperador) {
            return this.http.post("".concat(this.API, "/ativar"), codTipoOperador).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "inactivateTipoOperador",
          value: function inactivateTipoOperador(codTipoOperador) {
            return this.http.post("".concat(this.API, "/inativar"), codTipoOperador).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }]);

        return ComercialCadastrosTipoOperadorService;
      }();

      ComercialCadastrosTipoOperadorService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      ComercialCadastrosTipoOperadorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ComercialCadastrosTipoOperadorService);
      /***/
    },

    /***/
    "3vpR":
    /*!*******************************************************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/estoque/movimentacoes/services/movimentacoes.service.ts ***!
      \*******************************************************************************************************/

    /*! exports provided: TecnologiaInformacaoEstoqueMovimentacoesService */

    /***/
    function vpR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoEstoqueMovimentacoesService", function () {
        return TecnologiaInformacaoEstoqueMovimentacoesService;
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


      var TecnologiaInformacaoEstoqueMovimentacoesService = /*#__PURE__*/function () {
        function TecnologiaInformacaoEstoqueMovimentacoesService(http) {
          _classCallCheck(this, TecnologiaInformacaoEstoqueMovimentacoesService);

          this.http = http;
          this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API;
        } //-----------------------------------MOVIMENTACÃO--------------------------\\


        _createClass(TecnologiaInformacaoEstoqueMovimentacoesService, [{
          key: "getMovimentacoes",
          value: function getMovimentacoes(params) {
            return this.http.get("".concat(this.API, "/tecnologia-informacao/estoque/movimentacoes"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "postMovimentacoes",
          value: function postMovimentacoes(item) {
            return this.http.post("".concat(this.API, "/tecnologia-informacao/estoque/movimentacoes"), item, {
              observe: 'response'
            });
          }
        }]);

        return TecnologiaInformacaoEstoqueMovimentacoesService;
      }();

      TecnologiaInformacaoEstoqueMovimentacoesService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      TecnologiaInformacaoEstoqueMovimentacoesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], TecnologiaInformacaoEstoqueMovimentacoesService);
      /***/
    },

    /***/
    "44Bq":
    /*!**********************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/equipe-venda/equipe-venda.service.ts ***!
      \**********************************************************************************/

    /*! exports provided: ComercialCadastrosEquipeVendaService */

    /***/
    function Bq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosEquipeVendaService", function () {
        return ComercialCadastrosEquipeVendaService;
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

      var ComercialCadastrosEquipeVendaService = /*#__PURE__*/function () {
        function ComercialCadastrosEquipeVendaService(http) {
          _classCallCheck(this, ComercialCadastrosEquipeVendaService);

          this.http = http;
          this.API = "http://23.254.204.187/api/comercial/cadastros/equipe-venda";
        }

        _createClass(ComercialCadastrosEquipeVendaService, [{
          key: "getListaEquipesVenda",
          value: function getListaEquipesVenda(params) {
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
          value: function getAlteracoes(codEquipeVenda) {
            return this.http.get("".concat(this.API, "/alteracoes/").concat(codEquipeVenda)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getDetalhes",
          value: function getDetalhes(codEquipeVenda) {
            return this.http.get("".concat(this.API, "/detalhes/").concat(codEquipeVenda)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "saveEquipeVenda",
          value: function saveEquipeVenda(equipeVenda) {
            return this.http.post("".concat(this.API, "/salvar"), equipeVenda).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "updateEquipeVenda",
          value: function updateEquipeVenda(equipeVenda) {
            return this.http.put("".concat(this.API, "/atualizar"), equipeVenda).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "save",
          value: function save(equipeVenda) {
            if (equipeVenda.codEquipeVenda !== null) {
              return this.updateEquipeVenda(equipeVenda);
            }

            return this.saveEquipeVenda(equipeVenda);
          }
        }, {
          key: "activateEquipeVenda",
          value: function activateEquipeVenda(codigo) {
            return this.http.post("".concat(this.API, "/ativar"), codigo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "inactivateEquipeVenda",
          value: function inactivateEquipeVenda(codigo) {
            return this.http.post("".concat(this.API, "/inativar"), codigo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getListaEquipesERP",
          value: function getListaEquipesERP() {
            return this.http.get("".concat(this.API, "/erp/lista")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }]);

        return ComercialCadastrosEquipeVendaService;
      }();

      ComercialCadastrosEquipeVendaService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      ComercialCadastrosEquipeVendaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ComercialCadastrosEquipeVendaService);
      /***/
    },

    /***/
    "4Jok":
    /*!************************************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/cadastro/enderecos/formulario/formulario.service.ts ***!
      \************************************************************************************************/

    /*! exports provided: ComercialClientesCadastroEnderecosFormularioService */

    /***/
    function Jok(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialClientesCadastroEnderecosFormularioService", function () {
        return ComercialClientesCadastroEnderecosFormularioService;
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


      var src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/modules/comercial/services/clientes.service */
      "8ouN"); // Services


      var ComercialClientesCadastroEnderecosFormularioService = /*#__PURE__*/function () {
        function ComercialClientesCadastroEnderecosFormularioService(http, clientesService) {
          _classCallCheck(this, ComercialClientesCadastroEnderecosFormularioService);

          this.http = http;
          this.clientesService = clientesService;
          this.API = "http://23.254.204.187/api/comercial/clientes/cadastro/formulario/enderecos";
        }

        _createClass(ComercialClientesCadastroEnderecosFormularioService, [{
          key: "loadDepencies",
          value: function loadDepencies(codCliente) {
            var regioesAtuacaoComercial = this.getRegioesAtuacaoComercial();
            var regioesEntrega = this.getRegioesEntrega();
            var tiposMaterial = this.getTiposMaterial();
            var tiposDescarga = this.getTiposDescarga();
            var modosDescarga = this.getModosDescarga();
            var validacoes = this.clientesService.getEnderecos(codCliente);
            var tiposVeiculos = this.getTiposVeiculos();
            var dadosEspeciais = this.getDadosEspeciais();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])([regioesAtuacaoComercial, regioesEntrega, tiposMaterial, tiposDescarga, modosDescarga, validacoes, tiposVeiculos, dadosEspeciais]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getRegioesAtuacaoComercial",
          value: function getRegioesAtuacaoComercial() {
            return this.http.get("".concat(this.API, "/regioes-atuacao-comercial")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getRegioesEntrega",
          value: function getRegioesEntrega() {
            return this.http.get("".concat(this.API, "/regioes-entrega")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getIbgeCidades",
          value: function getIbgeCidades(data) {
            return this.http.post("".concat(this.API, "/ibge"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getRegiaoEntrega",
          value: function getRegiaoEntrega(codIBGE) {
            return this.http.get("".concat(this.API, "/regiao-entrega/").concat(codIBGE)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getRegiaoEntregaPorBairro",
          value: function getRegiaoEntregaPorBairro(bairro) {
            return this.http.get("".concat(this.API, "/regiao-entrega-por-bairro/").concat(bairro)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getTiposMaterial",
          value: function getTiposMaterial() {
            return this.http.get("".concat(this.API, "/tipos-material")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getTiposDescarga",
          value: function getTiposDescarga() {
            return this.http.get("".concat(this.API, "/tipos-descarga")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getModosDescarga",
          value: function getModosDescarga() {
            return this.http.get("".concat(this.API, "/modos-descarga")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getTiposVeiculos",
          value: function getTiposVeiculos() {
            return this.http.get("".concat(this.API, "/tipos-veiculos")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getDadosEspeciais",
          value: function getDadosEspeciais() {
            return this.http.get("".concat(this.API, "/dados-especiais")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getAnexos",
          value: function getAnexos(codEndereco) {
            return this.http.get("".concat(this.API, "/anexos/").concat(codEndereco)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getCliente",
          value: function getCliente(codCliente) {
            return this.http.get("http://23.254.204.187/api/comercial/clientes/detalhes/".concat(codCliente)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "postAnexos",
          value: function postAnexos(params, codEndereco, codCliente) {
            return this.http.post("".concat(this.API, "/anexos/salvar?codEndereco=").concat(codEndereco, "&codCliente=").concat(codCliente), params);
          }
        }, {
          key: "deleteAnexo",
          value: function deleteAnexo(codAnexo) {
            var params = {
              codAnexo: codAnexo
            };
            return this.http.put("".concat(this.API, "/anexos/excluir"), params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }]);

        return ComercialClientesCadastroEnderecosFormularioService;
      }();

      ComercialClientesCadastroEnderecosFormularioService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_5__["ComercialClientesService"]
        }];
      };

      ComercialClientesCadastroEnderecosFormularioService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_5__["ComercialClientesService"]])], ComercialClientesCadastroEnderecosFormularioService);
      /***/
    },

    /***/
    "4YhS":
    /*!********************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/materiais/grupos/grupos.service.ts ***!
      \********************************************************************************/

    /*! exports provided: ComercialCadastrosMateriaisGrupoService */

    /***/
    function YhS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosMateriaisGrupoService", function () {
        return ComercialCadastrosMateriaisGrupoService;
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


      var _tid_software_tid_software_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../tid-software/tid-software.service */
      "zN97"); // Services


      var ComercialCadastrosMateriaisGrupoService = /*#__PURE__*/function () {
        function ComercialCadastrosMateriaisGrupoService(http, comercialService, tidSoftwareService) {
          _classCallCheck(this, ComercialCadastrosMateriaisGrupoService);

          this.http = http;
          this.comercialService = comercialService;
          this.tidSoftwareService = tidSoftwareService;
          this.API = "http://23.254.204.187/api/comercial/cadastros/materiais/grupos";
        }

        _createClass(ComercialCadastrosMateriaisGrupoService, [{
          key: "getListaGrupos",
          value: function getListaGrupos(params) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/lista"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }, {
          key: "getAssociacoesMateriais",
          value: function getAssociacoesMateriais(codGrupo) {
            return this.http.get("".concat(this.API, "/associacoes/").concat(codGrupo)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }, {
          key: "getDetalhes",
          value: function getDetalhes(codGrupo) {
            return this.http.get("".concat(this.API, "/detalhes/").concat(codGrupo)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }, {
          key: "saveGrupo",
          value: function saveGrupo(record) {
            return this.http.post("".concat(this.API, "/salvar"), record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }, {
          key: "updateGrupo",
          value: function updateGrupo(record) {
            return this.http.put("".concat(this.API, "/atualizar"), record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }, {
          key: "save",
          value: function save(record) {
            if (record.codGrupo !== null) {
              return this.updateGrupo(record);
            }

            return this.saveGrupo(record);
          }
        }, {
          key: "activateGrupo",
          value: function activateGrupo(codGrupo) {
            return this.http.post("".concat(this.API, "/ativar"), codGrupo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }, {
          key: "inactivateGrupo",
          value: function inactivateGrupo(codGrupo) {
            return this.http.post("".concat(this.API, "/inativar"), codGrupo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }, {
          key: "getFilterValues",
          value: function getFilterValues() {
            var linhas = this.tidSoftwareService.getLinhas();
            var classes = this.comercialService.getClasses(null);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])([linhas, classes]);
          }
        }]);

        return ComercialCadastrosMateriaisGrupoService;
      }();

      ComercialCadastrosMateriaisGrupoService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _comercial_service__WEBPACK_IMPORTED_MODULE_5__["ComercialService"]
        }, {
          type: _tid_software_tid_software_service__WEBPACK_IMPORTED_MODULE_6__["ComercialTidSoftwareService"]
        }];
      };

      ComercialCadastrosMateriaisGrupoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _comercial_service__WEBPACK_IMPORTED_MODULE_5__["ComercialService"], _tid_software_tid_software_service__WEBPACK_IMPORTED_MODULE_6__["ComercialTidSoftwareService"]])], ComercialCadastrosMateriaisGrupoService);
      /***/
    },

    /***/
    "4muW":
    /*!*****************************************************************!*\
      !*** ./node_modules/ngx-filter-pipe/esm2015/ngx-filter-pipe.js ***!
      \*****************************************************************/

    /*! exports provided: FilterPipeModule, FilterPipe */

    /***/
    function muW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilterPipeModule", function () {
        return FilterPipeModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilterPipe", function () {
        return FilterPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes} checked by tsc
       */


      var FilterPipe = /*#__PURE__*/function () {
        function FilterPipe() {
          _classCallCheck(this, FilterPipe);
        }

        _createClass(FilterPipe, [{
          key: "filterByString",
          value:
          /**
           * @param {?} filter
           * @return {?}
           */
          function filterByString(filter) {
            if (filter) {
              filter = filter.toLowerCase();
            }

            return function (value) {
              return !filter || (value ? ('' + value).toLowerCase().indexOf(filter) !== -1 : false);
            };
          }
          /**
           * @param {?} filter
           * @return {?}
           */

        }, {
          key: "filterByBoolean",
          value: function filterByBoolean(filter) {
            return function (value) {
              return Boolean(value) === filter;
            };
          }
          /**
           * @param {?} filter
           * @return {?}
           */

        }, {
          key: "filterByObject",
          value: function filterByObject(filter) {
            var _this = this;

            return function (value) {
              for (var
              /** @type {?} */
              key in filter) {
                if (key === '$or') {
                  if (!_this.filterByOr(filter.$or)(FilterPipe.getValue(value))) {
                    return false;
                  }

                  continue;
                }

                if (!value || !FilterPipe.isFoundOnWalking(value, key)) {
                  return false;
                }

                if (!_this.isMatching(filter[key], FilterPipe.getValue(value[key]))) {
                  return false;
                }
              }

              return true;
            };
          }
          /**
           * @param {?} filter
           * @param {?} val
           * @return {?}
           */

        }, {
          key: "isMatching",
          value: function isMatching(filter, val) {
            switch (typeof filter) {
              case 'boolean':
                return this.filterByBoolean(filter)(val);

              case 'string':
                return this.filterByString(filter)(val);

              case 'object':
                return this.filterByObject(filter)(val);
            }

            return this.filterDefault(filter)(val);
          }
          /**
           * Filter value by $or
           * @param {?} filter
           * @return {?}
           */

        }, {
          key: "filterByOr",
          value: function filterByOr(filter) {
            var _this2 = this;

            return function (value) {
              var
              /** @type {?} */
              length = filter.length;

              var
              /** @type {?} */
              arrayComparison = function arrayComparison(i) {
                return value.indexOf(filter[i]) !== -1;
              };

              var
              /** @type {?} */
              otherComparison = function otherComparison(i) {
                return _this2.isMatching(filter[i], value);
              };

              var
              /** @type {?} */
              comparison = Array.isArray(value) ? arrayComparison : otherComparison;

              for (var
              /** @type {?} */
              i = 0; i < length; i++) {
                if (comparison(i)) {
                  return true;
                }
              }

              return false;
            };
          }
          /**
           * Default filterDefault function
           * @param {?} filter
           * @return {?}
           */

        }, {
          key: "filterDefault",
          value: function filterDefault(filter) {
            return function (value) {
              return filter === undefined || filter == value;
            };
          }
          /**
           * @param {?} array
           * @param {?} filter
           * @return {?}
           */

        }, {
          key: "transform",
          value: function transform(array, filter) {
            if (!array) {
              return array;
            }

            switch (typeof filter) {
              case 'boolean':
                return array.filter(this.filterByBoolean(filter));

              case 'string':
                if (FilterPipe.isNumber(filter)) {
                  return array.filter(this.filterDefault(filter));
                }

                return array.filter(this.filterByString(filter));

              case 'object':
                return array.filter(this.filterByObject(filter));

              case 'function':
                return array.filter(filter);
            }

            return array.filter(this.filterDefault(filter));
          }
        }], [{
          key: "isFoundOnWalking",
          value:
          /**
           * @param {?} value
           * @param {?} key
           * @return {?}
           */
          function isFoundOnWalking(value, key) {
            var
            /** @type {?} */
            walker = value;
            var
            /** @type {?} */
            found = false;

            do {
              if (walker.hasOwnProperty(key) || Object.getOwnPropertyDescriptor(walker, key)) {
                found = true;
                break;
              }
            } while (walker = Object.getPrototypeOf(walker));

            return found;
          }
          /**
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "isNumber",
          value: function isNumber(value) {
            return !isNaN(parseInt(value, 10)) && isFinite(value);
          }
          /**
           * Checks function's value if type is function otherwise same value
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "getValue",
          value: function getValue(value) {
            return typeof value === 'function' ? value() : value;
          }
        }]);

        return FilterPipe;
      }();

      FilterPipe.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'filterBy',
          pure: false
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }];
      /** @nocollapse */

      FilterPipe.ctorParameters = function () {
        return [];
      };
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes} checked by tsc
       */


      var FilterPipeModule = /*#__PURE__*/_createClass(function FilterPipeModule() {
        _classCallCheck(this, FilterPipeModule);
      });

      FilterPipeModule.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [FilterPipe],
          providers: [FilterPipe],
          exports: [FilterPipe]
        }]
      }];
      /** @nocollapse */

      FilterPipeModule.ctorParameters = function () {
        return [];
      };
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes} checked by tsc
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ngx-filter-pipe.js.map

      /***/

    },

    /***/
    "6bs2":
    /*!*****************************************************************!*\
      !*** ./src/app/modules/admin/perfis/services/perfis.service.ts ***!
      \*****************************************************************/

    /*! exports provided: AdminPerfisService */

    /***/
    function bs2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminPerfisService", function () {
        return AdminPerfisService;
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

      var AdminPerfisService = /*#__PURE__*/function () {
        function AdminPerfisService(http) {
          _classCallCheck(this, AdminPerfisService);

          this.http = http;
          this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API;
          this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        _createClass(AdminPerfisService, [{
          key: "getPerfil",
          value: function getPerfil() {
            var perfil = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return this.http.get("".concat(this.API, "/core/perfis"), {
              params: perfil,
              observe: "response"
            });
          }
        }, {
          key: "getPerfis",
          value: function getPerfis(params) {
            return this.http.get("".concat(this.API, "/core/perfis"), {
              params: params,
              observe: "response"
            });
          }
        }, {
          key: "postPerfil",
          value: function postPerfil(perfil) {
            return this.http.post("".concat(this.API, "/core/perfis"), perfil, {
              observe: "response"
            });
          }
        }, {
          key: "getAtividadesAssociadas",
          value: function getAtividadesAssociadas(params) {
            return this.http.get("".concat(this.API, "/core/perfis/atividades"), {
              params: params,
              observe: "response"
            });
          }
        }, {
          key: "postAtividadesAssociadas",
          value: function postAtividadesAssociadas(params) {
            return this.http.post("".concat(this.API, "/core/perfis/atividades"), params, {
              observe: "response"
            });
          }
        }]);

        return AdminPerfisService;
      }();

      AdminPerfisService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      AdminPerfisService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], AdminPerfisService);
      /***/
    },

    /***/
    "6nXq":
    /*!*******************************************************!*\
      !*** ./src/app/core/not-found/not-found.component.ts ***!
      \*******************************************************/

    /*! exports provided: NotFoundComponent */

    /***/
    function nXq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
        return NotFoundComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_not_found_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./not-found.component.html */
      "6xDO");
      /* harmony import */


      var _not_found_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./not-found.component.scss */
      "fKXl");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var NotFoundComponent = /*#__PURE__*/function () {
        function NotFoundComponent() {
          _classCallCheck(this, NotFoundComponent);
        }

        _createClass(NotFoundComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NotFoundComponent;
      }();

      NotFoundComponent.ctorParameters = function () {
        return [];
      };

      NotFoundComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'not-found',
        template: _raw_loader_not_found_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_not_found_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], NotFoundComponent);
      /***/
    },

    /***/
    "6xDO":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/not-found/not-found.component.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function xDO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\" id=\"application-header\">\r\n  <div class=\"col-6\">\r\n    <div id=\"title\">\r\n      <back-button></back-button>\r\n      <h1>Página não encontrada</h1>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row\" id=\"application-body\">\r\n  <div class=\"col\">\r\n    <div class=\"not-found\">\r\n      <img id=\"img\" src=\"../../../assets/images/system-alerts/404.png\">\r\n      <div>\r\n        <div id=\"title\">Oops! Página não encontrada</div>\r\n        <div id=\"message\">A página que você está tentando acessar não existe\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n";
      /***/
    },

    /***/
    "6xMS":
    /*!**************************************************************************************************!*\
      !*** ./src/app/modules/logistica/cadastros/restricoes-transporte/services/restricoes.service.ts ***!
      \**************************************************************************************************/

    /*! exports provided: LogisticaEntergaRestricoesService */

    /***/
    function xMS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaEntergaRestricoesService", function () {
        return LogisticaEntergaRestricoesService;
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
      "IheW");

      var LogisticaEntergaRestricoesService = /*#__PURE__*/function () {
        function LogisticaEntergaRestricoesService(http) {
          _classCallCheck(this, LogisticaEntergaRestricoesService);

          this.http = http;
          this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API;
        }

        _createClass(LogisticaEntergaRestricoesService, [{
          key: "getRestricoes",
          value: function getRestricoes(params) {
            return this.http.get("".concat(this.API, "/logistica/restricoes-transporte"), {
              params: params,
              observe: "response"
            });
          }
        }, {
          key: "getRestricao",
          value: function getRestricao(uuid) {
            return this.http.get("".concat(this.API, "/logistica/restricoes-transporte/").concat(uuid), {
              observe: "response"
            });
          }
        }, {
          key: "postRestricoes",
          value: function postRestricoes(params) {
            return this.http.post("".concat(this.API, "/logistica/restricoes-transporte"), params, {
              observe: "response"
            });
          }
        }, {
          key: "postMateriaisAssociados",
          value: function postMateriaisAssociados(params) {
            return this.http.post("".concat(this.API, "/logistica/restricoes-transporte/materiais"), params, {
              observe: "response"
            });
          }
        }, {
          key: "getMateriais",
          value: function getMateriais(params) {
            return this.http.get("".concat(this.API, "/logistica/entrada-materiais/materiais"), {
              params: params,
              observe: "response"
            });
          }
        }, {
          key: "getMateriaisAssociados",
          value: function getMateriaisAssociados(params) {
            return this.http.get("".concat(this.API, "/logistica/restricoes-transporte/materiais"), {
              params: params,
              observe: "response"
            });
          }
        }]);

        return LogisticaEntergaRestricoesService;
      }();

      LogisticaEntergaRestricoesService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      LogisticaEntergaRestricoesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], LogisticaEntergaRestricoesService);
      /***/
    },

    /***/
    "73eH":
    /*!************************************************************!*\
      !*** ./src/app/modules/comercial/agenda/agenda.service.ts ***!
      \************************************************************/

    /*! exports provided: ComercialAgendaService */

    /***/
    function eH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialAgendaService", function () {
        return ComercialAgendaService;
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

      var ComercialAgendaService = /*#__PURE__*/function () {
        function ComercialAgendaService(http) {
          _classCallCheck(this, ComercialAgendaService);

          this.http = http;
          this.API = "http://23.254.204.187/api/comercial/agenda";
        }

        _createClass(ComercialAgendaService, [{
          key: "getruta",
          value: function getruta(id_agenda) {
            return this.http.get("".concat(this.API, "/getruta/").concat(id_agenda)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getAcessos",
          value: function getAcessos() {
            return this.http.get("".concat(this.API, "/acessos")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getCompromissos",
          value: function getCompromissos(params) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/compromissos/lista"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getCompromisso",
          value: function getCompromisso(id) {
            return this.http.get("".concat(this.API, "/compromissos/detalhes/").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "reporteAgenda",
          value: function reporteAgenda(data) {
            console.log('entro');
            return this.http.post("".concat(this.API, "/reporte"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "estadosAgenda",
          value: function estadosAgenda(data) {
            var params = data ? {
              params: data
            } : {}; // Opcionalmente, incluye los parámetros en la solicitud

            return this.http.get("".concat(this.API, "/estados"), params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "saveCompromisso",
          value: function saveCompromisso(record) {
            return this.http.post("".concat(this.API, "/compromisso/salvar"), record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          } // private actualizarCompromiso(record: any) {
          //   return this.http
          //     .post(`${this.API}/compromiso/actualizar`, record)
          //     .pipe(take(1), retry(2));
          // }

        }, {
          key: "updateCompromisso",
          value: function updateCompromisso(record) {
            return this.http.post("".concat(this.API, "/compromiso/actualizar"), record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "rescheduleCompromisso",
          value: function rescheduleCompromisso(record) {
            return this.http.post("".concat(this.API, "/compromisso/reagendar"), record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "finalizarCompromisso",
          value: function finalizarCompromisso(record) {
            return this.http.post("".concat(this.API, "/compromiso/actualizar"), record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "save",
          value: function save(action, record) {
            if (action == 'editar') {
              return this.updateCompromisso(record);
            } else if (action == 'finalizar') {
              return this.finalizarCompromisso(record);
            } else if (action == 'reagendar') {
              return this.rescheduleCompromisso(record);
            } else {
              return this.saveCompromisso(record);
            }
          }
        }, {
          key: "deleteCompromisso",
          value: function deleteCompromisso(id) {
            var record = {
              id: id
            };
            return this.http.post("".concat(this.API, "/compromiso/eliminar"), record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "reporte",
          value: function reporte(params) {
            console.log(params);
            return this.http.post("".concat(this.API, "/reporte"), params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "reporte_cliente",
          value: function reporte_cliente(params) {
            console.log('entro432');
            console.log(params);
            return this.http.post("".concat(this.API, "/reportecliente"), params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getPosicionPromotor",
          value: function getPosicionPromotor(id) {
            return this.http.get("".concat(this.API, "/getruta/").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getImagenes",
          value: function getImagenes(id) {
            return this.http.get("".concat(this.API, "/getimagenes/").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }]);

        return ComercialAgendaService;
      }();

      ComercialAgendaService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      ComercialAgendaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ComercialAgendaService);
      /***/
    },

    /***/
    "7aZN":
    /*!***************************************************!*\
      !*** ./src/app/shared/services/ws/cep.service.ts ***!
      \***************************************************/

    /*! exports provided: CepService */

    /***/
    function aZN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CepService", function () {
        return CepService;
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

      var CepService = /*#__PURE__*/function () {
        function CepService(http) {
          _classCallCheck(this, CepService);

          this.http = http;
          this.API = "http://23.254.204.187/api/common/services/cep";
        }

        _createClass(CepService, [{
          key: "getData",
          value: function getData(cep) {
            cep = cep.replace(/\D/g, '');

            if (cep !== '') {
              var validaCep = /^[0-9]{8}$/;

              if (validaCep.test(cep)) {
                return this.http.get("".concat(this.API, "/").concat(cep));
              }
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({});
          }
        }]);

        return CepService;
      }();

      CepService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      CepService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], CepService);
      /***/
    },

    /***/
    "81bo":
    /*!*****************************************************************************************************!*\
      !*** ./src/app/modules/logistica/entrada-materiais/notas-fiscais/services/notas-fiscais.service.ts ***!
      \*****************************************************************************************************/

    /*! exports provided: LogisticaEntradaMateriaisNotasFiscaisService */

    /***/
    function bo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaEntradaMateriaisNotasFiscaisService", function () {
        return LogisticaEntradaMateriaisNotasFiscaisService;
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


      var LogisticaEntradaMateriaisNotasFiscaisService = /*#__PURE__*/function () {
        function LogisticaEntradaMateriaisNotasFiscaisService(http) {
          _classCallCheck(this, LogisticaEntradaMateriaisNotasFiscaisService);

          this.http = http;
          this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API;
        }

        _createClass(LogisticaEntradaMateriaisNotasFiscaisService, [{
          key: "getNotasFiscais",
          value: function getNotasFiscais(params) {
            return this.http.get("".concat(this.API, "/logistica/entrada-materiais/notas-fiscais"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "getExport",
          value: function getExport(params) {
            return this.http.get("".concat(this.API, "/logistica/entrada-materiais/notas-fiscais/relatorio"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "getAlteracoes",
          value: function getAlteracoes(params) {
            return this.http.get("".concat(this.API, "/logistica/entrada-materiais/notas-fiscais/historico"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "getLotesDuplicados",
          value: function getLotesDuplicados(params) {
            return this.http.get("".concat(this.API, "/logistica/entrada-materiais/notas-fiscais/materiais/lotes-duplicados"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "postNotasDuplicadas",
          value: function postNotasDuplicadas(notas) {
            return this.http.post("".concat(this.API, "/logistica/entrada-materiais/notas-fiscais/materiais/lotes-duplicados"), notas, {
              observe: 'response'
            });
          }
        }, {
          key: "postNotasFiscais",
          value: function postNotasFiscais(notas) {
            return this.http.post("".concat(this.API, "/logistica/entrada-materiais/notas-fiscais"), notas, {
              observe: 'response'
            });
          }
        }, {
          key: "getHistoricoMateriais",
          value: function getHistoricoMateriais(params) {
            return this.http.get("".concat(this.API, "/logistica/entrada-materiais/notas-fiscais/materiais/historico"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "getNotasMateriais",
          value: function getNotasMateriais(params) {
            return this.http.get("".concat(this.API, "/logistica/entrada-materiais/notas-fiscais/materiais"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "postMateriais",
          value: function postMateriais(notas) {
            return this.http.post("".concat(this.API, "/logistica/entrada-materiais/notas-fiscais/materiais"), notas, {
              observe: 'response'
            });
          }
        }]);

        return LogisticaEntradaMateriaisNotasFiscaisService;
      }();

      LogisticaEntradaMateriaisNotasFiscaisService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      LogisticaEntradaMateriaisNotasFiscaisService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], LogisticaEntradaMateriaisNotasFiscaisService);
      /***/
    },

    /***/
    "8L2n":
    /*!****************************************************************!*\
      !*** ./src/app/modules/logistica/services/steellog.service.ts ***!
      \****************************************************************/

    /*! exports provided: LogisticaSteellogService */

    /***/
    function L2n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaSteellogService", function () {
        return LogisticaSteellogService;
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

      var LogisticaSteellogService = /*#__PURE__*/function () {
        function LogisticaSteellogService(http) {
          _classCallCheck(this, LogisticaSteellogService);

          this.http = http;
          this.API = "https://crm360.monterrey.com.bo/api";
        }

        _createClass(LogisticaSteellogService, [{
          key: "getTipoTransporte",
          value: function getTipoTransporte(params) {
            return this.http.get("".concat(this.API, "/logistica/steellog/tipo-transporte"), {
              params: params,
              observe: "response"
            });
          }
        }, {
          key: "getEmpresas",
          value: function getEmpresas(params) {
            return this.http.get("".concat(this.API, "/logistica/steellog/empresas"), {
              params: params,
              observe: "response"
            });
          }
        }]);

        return LogisticaSteellogService;
      }();

      LogisticaSteellogService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      LogisticaSteellogService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], LogisticaSteellogService);
      /***/
    },

    /***/
    "8O77":
    /*!********************************************************************************************************!*\
      !*** ./src/app/modules/comercial/ciclo-vendas/pedidos-producao-telas/formulario/formulario.service.ts ***!
      \********************************************************************************************************/

    /*! exports provided: ComercialCicloVendasPedidosProducaoTelasFormularioService */

    /***/
    function O77(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCicloVendasPedidosProducaoTelasFormularioService", function () {
        return ComercialCicloVendasPedidosProducaoTelasFormularioService;
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


      var _cadastros_situacao_proposta_situacao_proposta_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../cadastros/situacao-proposta/situacao-proposta.service */
      "3WN2"); // Services


      var ComercialCicloVendasPedidosProducaoTelasFormularioService = /*#__PURE__*/function () {
        function ComercialCicloVendasPedidosProducaoTelasFormularioService(http, comercialService, vendedoresService, situacoesService) {
          _classCallCheck(this, ComercialCicloVendasPedidosProducaoTelasFormularioService);

          this.http = http;
          this.comercialService = comercialService;
          this.vendedoresService = vendedoresService;
          this.situacoesService = situacoesService;
          this.API = "http://23.254.204.187/api/comercial/ciclo-vendas/pedidos-producao-telas";
          this.notifySubmit = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.notifySubmitObservable$ = this.notifySubmit.asObservable();
          this.materiaisSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.limparCarrinhoSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.calculoSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.dataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.descontoSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.codCliente = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        _createClass(ComercialCicloVendasPedidosProducaoTelasFormularioService, [{
          key: "onNotifySubmit",
          value: function onNotifySubmit(data) {
            this.notifySubmit.next(data);
          }
        }, {
          key: "loadDependencies",
          value: function loadDependencies() {
            var situacoes = this.situacoesService.getListaSituacaoProposta(null);
            var empresas = this.comercialService.getEmpresas({
              tipo: 'faturamento'
            });
            var depositos = this.comercialService.getDepositos({
              grupoManetoni: 1
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])([situacoes, empresas, depositos]);
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
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([{
              codCliente: 78919,
              razaoSocial: 'LINDSAY'
            }]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(1000));
          }
        }, {
          key: "postProducao",
          value: function postProducao(nrPedido) {
            return this.http.post("".concat(this.API, "/producao"), nrPedido).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
          }
        }, {
          key: "postExpedicao",
          value: function postExpedicao(nrPedido) {
            return this.http.post("".concat(this.API, "/expedicao"), nrPedido).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
          } // getCalculoMaterial(
          //   params
          // ): Observable<Object | JsonResponse> {
          //   return this.http
          //     .get(`${this.API}/material/calculo`, params)
          //     .pipe(take(1));
          // }

        }, {
          key: "getCalculoMaterial",
          value: function getCalculoMaterial(params) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/material/calculo"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
          }
        }]);

        return ComercialCicloVendasPedidosProducaoTelasFormularioService;
      }();

      ComercialCicloVendasPedidosProducaoTelasFormularioService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _comercial_service__WEBPACK_IMPORTED_MODULE_5__["ComercialService"]
        }, {
          type: _services_vendedores_service__WEBPACK_IMPORTED_MODULE_6__["ComercialVendedoresService"]
        }, {
          type: _cadastros_situacao_proposta_situacao_proposta_service__WEBPACK_IMPORTED_MODULE_7__["ComercialCadastrosSituacaoPropostaService"]
        }];
      };

      ComercialCicloVendasPedidosProducaoTelasFormularioService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _comercial_service__WEBPACK_IMPORTED_MODULE_5__["ComercialService"], _services_vendedores_service__WEBPACK_IMPORTED_MODULE_6__["ComercialVendedoresService"], _cadastros_situacao_proposta_situacao_proposta_service__WEBPACK_IMPORTED_MODULE_7__["ComercialCadastrosSituacaoPropostaService"]])], ComercialCicloVendasPedidosProducaoTelasFormularioService);
      /***/
    },

    /***/
    "8WR6":
    /*!******************************************************!*\
      !*** ./src/app/shared/services/core/xlsx.service.ts ***!
      \******************************************************/

    /*! exports provided: XlsxService */

    /***/
    function WR6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "XlsxService", function () {
        return XlsxService;
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


      var xlsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! xlsx */
      "EUZL");
      /* harmony import */


      var xlsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_2__); // xlsx


      var XlsxService = /*#__PURE__*/function () {
        function XlsxService() {
          _classCallCheck(this, XlsxService);

          this.wopts = {
            bookType: 'xlsx',
            type: 'array'
          };
          this.fileLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        _createClass(XlsxService, [{
          key: "export",
          value: function _export(params) {
            var _a;

            var varExport = [];
            var headers = (_a = params.headers) !== null && _a !== void 0 ? _a : Object.keys(params.data[0]);
            varExport.push(headers);
            params.data.forEach(function (element) {
              varExport.push(Object.values(element));
            });
            /* generate worksheet */

            var ws = xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].aoa_to_sheet(varExport);
            /* generate workbook and add the worksheet */

            var wb = xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].book_new();
            xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].book_append_sheet(wb, ws, 'Sheet1');
            /* save to file */

            xlsx__WEBPACK_IMPORTED_MODULE_2__["writeFile"](wb, this.getFileName(params.filename) + '.xlsx');
          }
        }, {
          key: "getFile",
          value: function getFile(evt) {
            var _this3 = this;

            /* wire up file reader */
            var target = evt.target;
            if (target.files.length !== 1) throw new Error('Cannot use multiple files');
            var reader = new FileReader();

            reader.onload = function (e) {
              /* read workbook */
              var bstr = e.target.result;
              var wb = xlsx__WEBPACK_IMPORTED_MODULE_2__["read"](bstr, {
                type: 'binary'
              });
              /* grab first sheet */

              var wsname = wb.SheetNames[0];
              var ws = wb.Sheets[wsname];
              /* save data */

              _this3.fileLoaded.emit(xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].sheet_to_json(ws, {
                header: 1
              }));
            };

            reader.readAsBinaryString(target.files[0]);
          }
        }, {
          key: "getFileName",
          value: function getFileName() {
            var filename = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'relatorio';
            filename = filename !== null && filename !== void 0 ? filename : 'relatorio';
            var d = new Date();
            var timestamp = "".concat(d.getFullYear(), "_").concat(d.getMonth(), "_").concat(d.getDate(), "_").concat(d.getHours(), "_").concat(d.getMinutes(), "_").concat(d.getSeconds());
            return "".concat(filename, "__").concat(timestamp);
          }
        }]);

        return XlsxService;
      }();

      XlsxService.ctorParameters = function () {
        return [];
      };

      XlsxService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], XlsxService);
      /***/
    },

    /***/
    "9Yla":
    /*!*******************************************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/contratos/modelo/services/modelo.service.ts ***!
      \*******************************************************************************************/

    /*! exports provided: TecnologiaInformacaoCadastroModeloService */

    /***/
    function Yla(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoCadastroModeloService", function () {
        return TecnologiaInformacaoCadastroModeloService;
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


      var TecnologiaInformacaoCadastroModeloService = /*#__PURE__*/function () {
        function TecnologiaInformacaoCadastroModeloService(http) {
          _classCallCheck(this, TecnologiaInformacaoCadastroModeloService);

          this.http = http;
          this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API;
        }

        _createClass(TecnologiaInformacaoCadastroModeloService, [{
          key: "getModelo",
          value: function getModelo(params) {
            return this.http.get("".concat(this.API, "/tecnologia-informacao/item/modelos"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "postModelo",
          value: function postModelo(modelo) {
            return this.http.post("".concat(this.API, "/tecnologia-informacao/item/modelo"), modelo, {
              observe: 'response'
            });
          }
        }]);

        return TecnologiaInformacaoCadastroModeloService;
      }();

      TecnologiaInformacaoCadastroModeloService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      TecnologiaInformacaoCadastroModeloService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], TecnologiaInformacaoCadastroModeloService);
      /***/
    },

    /***/
    "B4Vw":
    /*!*************************************************************************************************!*\
      !*** ./src/app/modules/logistica/cadastros/regioes-entrega/services/regioes-entrega.service.ts ***!
      \*************************************************************************************************/

    /*! exports provided: LogisticaRegioesEntregaService */

    /***/
    function B4Vw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaRegioesEntregaService", function () {
        return LogisticaRegioesEntregaService;
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


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

      var LogisticaRegioesEntregaService = /*#__PURE__*/function () {
        function LogisticaRegioesEntregaService(http) {
          _classCallCheck(this, LogisticaRegioesEntregaService);

          this.http = http;
          this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API;
        }

        _createClass(LogisticaRegioesEntregaService, [{
          key: "postRegiaoEntrega",
          value: function postRegiaoEntrega(params) {
            return this.http.post("".concat(this.API, "/logistica/regioes-entrega"), params, {
              observe: "response"
            });
          }
        }, {
          key: "getRegioesEntrega",
          value: function getRegioesEntrega(params) {
            return this.http.get("".concat(this.API, "/logistica/regioes-entrega"), {
              params: params,
              observe: "response"
            });
          }
        }, {
          key: "getRegiaoEntrega",
          value: function getRegiaoEntrega(id) {
            return this.http.get("".concat(this.API, "/logistica/regioes-entrega/").concat(id), {
              observe: "response"
            });
          }
        }]);

        return LogisticaRegioesEntregaService;
      }();

      LogisticaRegioesEntregaService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      LogisticaRegioesEntregaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], LogisticaRegioesEntregaService);
      /***/
    },

    /***/
    "B5rI":
    /*!*********************************************************************!*\
      !*** ./src/app/shared/services/core/icons-fonts-awesome.service.ts ***!
      \*********************************************************************/

    /*! exports provided: IconesFontAwesomeService */

    /***/
    function B5rI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IconesFontAwesomeService", function () {
        return IconesFontAwesomeService;
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
      "IheW");

      var IconesFontAwesomeService = /*#__PURE__*/function () {
        function IconesFontAwesomeService(http) {
          _classCallCheck(this, IconesFontAwesomeService);

          this.http = http;
          this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API;
        }

        _createClass(IconesFontAwesomeService, [{
          key: "getIcones",
          value: function getIcones() {
            var icone = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
              qtItensPorPagina: '1000000'
            };
            return this.http.get("".concat(this.API, "/servicos/icons"), {
              params: icone,
              observe: 'response'
            });
          }
        }]);

        return IconesFontAwesomeService;
      }();

      IconesFontAwesomeService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      IconesFontAwesomeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], IconesFontAwesomeService);
      /***/
    },

    /***/
    "C+/D":
    /*!*************************************************************************************!*\
      !*** ./src/app/modules/sul-fluminense/estoque-avancado/services/generic.service.ts ***!
      \*************************************************************************************/

    /*! exports provided: SulFluminenseEstoqueAvancadoGenericService */

    /***/
    function CD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SulFluminenseEstoqueAvancadoGenericService", function () {
        return SulFluminenseEstoqueAvancadoGenericService;
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

      var SulFluminenseEstoqueAvancadoGenericService = /*#__PURE__*/function () {
        function SulFluminenseEstoqueAvancadoGenericService(http) {
          _classCallCheck(this, SulFluminenseEstoqueAvancadoGenericService);

          this.http = http;
          this.BASE_URL = "https://crm360.monterrey.com.bo/api";
        }

        _createClass(SulFluminenseEstoqueAvancadoGenericService, [{
          key: "getLinhas",
          value: function getLinhas() {
            return this.http.get("".concat(this.BASE_URL, "/common/v2/linhas"), {
              observe: 'response'
            });
          }
        }, {
          key: "getClasses",
          value: function getClasses(params) {
            return this.http.get("".concat(this.BASE_URL, "/common/v2/classes"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "getMateriais",
          value: function getMateriais() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return this.http.get("".concat(this.BASE_URL, "/common/v2/materiais"), {
              params: params,
              observe: 'response'
            });
          }
        }]);

        return SulFluminenseEstoqueAvancadoGenericService;
      }();

      SulFluminenseEstoqueAvancadoGenericService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      SulFluminenseEstoqueAvancadoGenericService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], SulFluminenseEstoqueAvancadoGenericService);
      /***/
    },

    /***/
    "CU0E":
    /*!********************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/escritorios/escritorios.service.ts ***!
      \********************************************************************************/

    /*! exports provided: ComercialCadastrosEscritorioService */

    /***/
    function CU0E(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosEscritorioService", function () {
        return ComercialCadastrosEscritorioService;
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

      var ComercialCadastrosEscritorioService = /*#__PURE__*/function () {
        function ComercialCadastrosEscritorioService(http) {
          _classCallCheck(this, ComercialCadastrosEscritorioService);

          this.http = http;
          this.API = "http://23.254.204.187/api/comercial/cadastros/escritorio";
        }

        _createClass(ComercialCadastrosEscritorioService, [{
          key: "getListaEscritorios",
          value: function getListaEscritorios(params) {
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
          value: function getAlteracoes(codEscritorio) {
            return this.http.get("".concat(this.API, "/alteracoes/").concat(codEscritorio)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getDetalhes",
          value: function getDetalhes(codEscritorio) {
            return this.http.get("".concat(this.API, "/detalhes/").concat(codEscritorio)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "saveEscritorio",
          value: function saveEscritorio(escritorio) {
            return this.http.post("".concat(this.API, "/salvar"), escritorio).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "updateEscritorio",
          value: function updateEscritorio(escritorio) {
            return this.http.put("".concat(this.API, "/atualizar"), escritorio).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "save",
          value: function save(escritorio) {
            if (escritorio.codEscritorio !== null) {
              return this.updateEscritorio(escritorio);
            }

            return this.saveEscritorio(escritorio);
          }
        }, {
          key: "activateEscritorio",
          value: function activateEscritorio(codEscritorio) {
            return this.http.post("".concat(this.API, "/ativar"), codEscritorio).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "inactivateEscritorio",
          value: function inactivateEscritorio(codEscritorio) {
            return this.http.post("".concat(this.API, "/inativar"), codEscritorio).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }]);

        return ComercialCadastrosEscritorioService;
      }();

      ComercialCadastrosEscritorioService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      ComercialCadastrosEscritorioService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ComercialCadastrosEscritorioService);
      /***/
    },

    /***/
    "GjWS":
    /*!********************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/materiais/combos/combos.service.ts ***!
      \********************************************************************************/

    /*! exports provided: ComercialCadastrosMateriaisComboService */

    /***/
    function GjWS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosMateriaisComboService", function () {
        return ComercialCadastrosMateriaisComboService;
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


      var _tid_software_tid_software_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../tid-software/tid-software.service */
      "zN97"); // Services


      var ComercialCadastrosMateriaisComboService = /*#__PURE__*/function () {
        function ComercialCadastrosMateriaisComboService(http, comercialService, tidSoftwareService) {
          _classCallCheck(this, ComercialCadastrosMateriaisComboService);

          this.http = http;
          this.comercialService = comercialService;
          this.tidSoftwareService = tidSoftwareService;
          this.API = "http://23.254.204.187/api/comercial/cadastros/materiais/combos";
        }

        _createClass(ComercialCadastrosMateriaisComboService, [{
          key: "getListaCombos",
          value: function getListaCombos(params) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/lista"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }, {
          key: "getAssociacoesMateriais",
          value: function getAssociacoesMateriais(codMaterial, params) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/associacoes/").concat(codMaterial), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }, {
          key: "getDetalhes",
          value: function getDetalhes(codMaterial) {
            return this.http.get("".concat(this.API, "/detalhes/").concat(codMaterial)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }, {
          key: "saveCombo",
          value: function saveCombo(record) {
            return this.http.post("".concat(this.API, "/salvar"), record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }, {
          key: "updateCombo",
          value: function updateCombo(record) {
            return this.http.put("".concat(this.API, "/atualizar"), record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }, {
          key: "save",
          value: function save(record, action) {
            if (action === 'update') {
              return this.updateCombo(record);
            }

            return this.saveCombo(record);
          }
        }, {
          key: "deleteAssociacao",
          value: function deleteAssociacao(codCombo, codAssociacao) {
            return this.http["delete"]("".concat(this.API, "/associacao/remover/").concat(codCombo, "/").concat(codAssociacao)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }, {
          key: "activateCombo",
          value: function activateCombo(codCombo) {
            return this.http.post("".concat(this.API, "/ativar"), codCombo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }, {
          key: "inactivateCombo",
          value: function inactivateCombo(codCombo) {
            return this.http.post("".concat(this.API, "/inativar"), codCombo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
          }
        }, {
          key: "getFilterValues",
          value: function getFilterValues() {
            var linhas = this.tidSoftwareService.getLinhas();
            var classes = this.comercialService.getClasses(null);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])([linhas, classes]);
          }
        }]);

        return ComercialCadastrosMateriaisComboService;
      }();

      ComercialCadastrosMateriaisComboService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _comercial_service__WEBPACK_IMPORTED_MODULE_5__["ComercialService"]
        }, {
          type: _tid_software_tid_software_service__WEBPACK_IMPORTED_MODULE_6__["ComercialTidSoftwareService"]
        }];
      };

      ComercialCadastrosMateriaisComboService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _comercial_service__WEBPACK_IMPORTED_MODULE_5__["ComercialService"], _tid_software_tid_software_service__WEBPACK_IMPORTED_MODULE_6__["ComercialTidSoftwareService"]])], ComercialCadastrosMateriaisComboService);
      /***/
    },

    /***/
    "H0sO":
    /*!*************************************************************!*\
      !*** ./src/app/shared/services/requests/estados.service.ts ***!
      \*************************************************************/

    /*! exports provided: EstadosService */

    /***/
    function H0sO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EstadosService", function () {
        return EstadosService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var EstadosService = /*#__PURE__*/function () {
        function EstadosService() {
          _classCallCheck(this, EstadosService);

          this.estados = [{
            sigla: 'AC',
            descricao: 'Acre'
          }, {
            sigla: 'AL',
            descricao: 'Alagoas'
          }, {
            sigla: 'AP',
            descricao: 'Amapá'
          }, {
            sigla: 'AM',
            descricao: 'Amazonas'
          }, {
            sigla: 'BA',
            descricao: 'Bahia'
          }, {
            sigla: 'CE',
            descricao: 'Ceará'
          }, {
            sigla: 'DF',
            descricao: 'Distrito Federal'
          }, {
            sigla: 'ES',
            descricao: 'Espírito Santo'
          }, {
            sigla: 'GO',
            descricao: 'Goiás'
          }, {
            sigla: 'MA',
            descricao: 'Maranhão'
          }, {
            sigla: 'MT',
            descricao: 'Mato Grosso'
          }, {
            sigla: 'MS',
            descricao: 'Mato Grosso do Sul'
          }, {
            sigla: 'MG',
            descricao: 'Minas Gerais'
          }, {
            sigla: 'PA',
            descricao: 'Pará'
          }, {
            sigla: 'PB',
            descricao: 'Paraíba'
          }, {
            sigla: 'PR',
            descricao: 'Paraná'
          }, {
            sigla: 'PE',
            descricao: 'Pernambuco'
          }, {
            sigla: 'PI',
            descricao: 'Piauí'
          }, {
            sigla: 'RJ',
            descricao: 'Rio de Janeiro'
          }, {
            sigla: 'RN',
            descricao: 'Rio Grande do Norte'
          }, {
            sigla: 'RS',
            descricao: 'Rio Grande do Sul'
          }, {
            sigla: 'RO',
            descricao: 'Rondônia'
          }, {
            sigla: 'RR',
            descricao: 'Roraima'
          }, {
            sigla: 'SC',
            descricao: 'Santa Catarina'
          }, {
            sigla: 'SP',
            descricao: 'São Paulo'
          }, {
            sigla: 'SE',
            descricao: 'Sergipe'
          }, {
            sigla: 'TO',
            descricao: 'Tocantins'
          }];
        }

        _createClass(EstadosService, [{
          key: "getEstados",
          value: function getEstados() {
            return this.estados;
          }
        }]);

        return EstadosService;
      }();

      EstadosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], EstadosService);
      /***/
    },

    /***/
    "H8J8":
    /*!**********************************************************************!*\
      !*** ./src/app/modules/logistica/entrega/services/fusion.service.ts ***!
      \**********************************************************************/

    /*! exports provided: LogisticaEntregaFusionService */

    /***/
    function H8J8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaEntregaFusionService", function () {
        return LogisticaEntregaFusionService;
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

      var LogisticaEntregaFusionService = /*#__PURE__*/function () {
        function LogisticaEntregaFusionService(http) {
          _classCallCheck(this, LogisticaEntregaFusionService);

          this.http = http;
          this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API;
        }

        _createClass(LogisticaEntregaFusionService, [{
          key: "getPedidos",
          value: function getPedidos() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return this.http.get("".concat(this.API, "/logistica/integracoes/fusion/pedidos"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "integraPedidoFusion",
          value: function integraPedidoFusion(params) {
            return this.http.post("".concat(this.API, "/logistica/integracoes/fusion/pedidos"), params, {
              observe: 'response'
            });
          }
        }, {
          key: "getManifestos",
          value: function getManifestos(params) {
            return this.http.get("".concat(this.API, "/logistica/integracoes/fusion/steellog/manifestos"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "postManifesto",
          value: function postManifesto(params) {
            return this.http.post("".concat(this.API, "/logistica/integracoes/fusion/steellog/manifestos"), params, {
              observe: 'response'
            });
          }
        }, {
          key: "getFiliais",
          value: function getFiliais() {
            return [{
              id: '1',
              nome: 'Centro Logístico 01',
              cnpj: '1028555020'
            }, {
              id: '21',
              nome: 'Centro Logístico 03',
              cnpj: '1028555020'
            }, {
              id: '2',
              nome: 'Centro Logístico 07',
              cnpj: '1028555020'
            }, {
              id: '3',
              nome: 'Centro Logístico 08',
              cnpj: '1028555020'
            }, {
              nome: 'Almacen 09 - Montero',
              id: '9',
              cnpj: '1028555020'
            }, {
              nome: 'Almacen 11 - Trinidad',
              id: '11',
              cnpj: '1028555020'
            }, {
              nome: 'Almacen 12 - Satelite',
              id: '12',
              cnpj: '1028555020'
            }, {
              nome: 'Almacen 17 - Sucre',
              id: '17',
              cnpj: '1028555020'
            }, {
              nome: 'Almacen 18 - La Paz',
              id: '18',
              cnpj: '1028555020'
            }, {
              nome: 'Almacen 19 - Potosi',
              id: '19',
              cnpj: '1028555020'
            }, {
              nome: 'Almacen 20 - Tarija',
              id: '20',
              cnpj: '1028555020'
            }, {
              nome: 'Almacen V 32',
              id: '25',
              cnpj: '1028555020'
            }, {
              nome: 'Centro de Acopio y Distribucion',
              id: '14',
              cnpj: '1028555020'
            }, {
              nome: 'Producción 07',
              id: '22',
              cnpj: '1028555020'
            }, {
              nome: 'Producción 17',
              id: '23',
              cnpj: '1028555020'
            }, {
              nome: 'Producción 20',
              id: '24',
              cnpj: '1028555020'
            }];
          }
        }]);

        return LogisticaEntregaFusionService;
      }();

      LogisticaEntregaFusionService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      LogisticaEntregaFusionService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], LogisticaEntregaFusionService);
      /***/
    },

    /***/
    "I/OU":
    /*!*************************************************************!*\
      !*** ./src/app/shared/services/requests/generic.service.ts ***!
      \*************************************************************/

    /*! exports provided: GenericService */

    /***/
    function IOU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GenericService", function () {
        return GenericService;
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

      var GenericService = /*#__PURE__*/function () {
        function GenericService(http) {
          _classCallCheck(this, GenericService);

          this.http = http;
          this.API = "http://23.254.204.187/api/common";
        }

        _createClass(GenericService, [{
          key: "getEscritorios",
          value: function getEscritorios() {
            return this.http.get("".concat(this.API, "/escritorios")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getLinhas",
          value: function getLinhas() {
            return this.http.get("".concat(this.API, "/linhas")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getEmpresas",
          value: function getEmpresas() {
            return this.http.get("".concat(this.API, "/empresas")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getDepositos",
          value: function getDepositos(idEmpresa) {
            return this.http.get("".concat(this.API, "/depositos/").concat(idEmpresa));
          }
        }, {
          key: "getClasses",
          value: function getClasses(linha) {
            return this.http.get("".concat(this.API, "/classes/").concat(linha)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
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
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getSituacoes",
          value: function getSituacoes() {
            return this.http.get("".concat(this.API, "/situacoes")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getFiltros",
          value: function getFiltros() {
            var materiais = this.getMateriais();
            var linhas = this.getLinhas();
            var empresas = this.getEmpresas();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])([materiais, linhas, empresas]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }]);

        return GenericService;
      }();

      GenericService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      GenericService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], GenericService);
      /***/
    },

    /***/
    "JixU":
    /*!*******************************************************************************!*\
      !*** ./src/app/modules/logistica/yms/checklist/services/checklist.service.ts ***!
      \*******************************************************************************/

    /*! exports provided: LogisticaYmsChecklistService */

    /***/
    function JixU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaYmsChecklistService", function () {
        return LogisticaYmsChecklistService;
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


      var LogisticaYmsChecklistService = /*#__PURE__*/function () {
        function LogisticaYmsChecklistService(http) {
          _classCallCheck(this, LogisticaYmsChecklistService);

          this.http = http;
          this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API;
        }

        _createClass(LogisticaYmsChecklistService, [{
          key: "getChecklist",
          value: function getChecklist(params) {
            return this.http.get("".concat(this.API, "/logistica/yms/checklist"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "postChecklist",
          value: function postChecklist(checklist) {
            return this.http.post("".concat(this.API, "/logistica/yms/checklist"), checklist, {
              observe: 'response'
            });
          }
        }]);

        return LogisticaYmsChecklistService;
      }();

      LogisticaYmsChecklistService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      LogisticaYmsChecklistService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], LogisticaYmsChecklistService);
      /***/
    },

    /***/
    "KWs8":
    /*!*********************************************************************************************!*\
      !*** ./src/app/modules/logistica/cadastros/prazo-entrega/services/prazo-entrega.service.ts ***!
      \*********************************************************************************************/

    /*! exports provided: LogisticaPrazoEntregaService */

    /***/
    function KWs8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaPrazoEntregaService", function () {
        return LogisticaPrazoEntregaService;
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


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

      var LogisticaPrazoEntregaService = /*#__PURE__*/function () {
        function LogisticaPrazoEntregaService(http) {
          _classCallCheck(this, LogisticaPrazoEntregaService);

          this.http = http;
          this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API;
        }

        _createClass(LogisticaPrazoEntregaService, [{
          key: "postPrazoEntrega",
          value: function postPrazoEntrega(params) {
            return this.http.post("".concat(this.API, "/logistica/prazos-entrega"), params, {
              observe: "response"
            });
          }
        }, {
          key: "getPrazosEntrega",
          value: function getPrazosEntrega(params) {
            return this.http.get("".concat(this.API, "/logistica/prazos-entrega"), {
              params: params,
              observe: "response"
            });
          }
        }, {
          key: "getPrazoEntrega",
          value: function getPrazoEntrega(id) {
            return this.http.get("".concat(this.API, "/logistica/prazos-entrega/").concat(id), {
              observe: "response"
            });
          }
        }]);

        return LogisticaPrazoEntregaService;
      }();

      LogisticaPrazoEntregaService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      LogisticaPrazoEntregaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], LogisticaPrazoEntregaService);
      /***/
    },

    /***/
    "KwnO":
    /*!****************************************************************!*\
      !*** ./src/app/shared/services/requests/submodulos.service.ts ***!
      \****************************************************************/

    /*! exports provided: SubModulosService */

    /***/
    function KwnO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SubModulosService", function () {
        return SubModulosService;
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

      var SubModulosService = /*#__PURE__*/function () {
        function SubModulosService(http) {
          _classCallCheck(this, SubModulosService);

          this.http = http;
          this.API = "http://23.254.204.187/api/core/submodulo";
        }

        _createClass(SubModulosService, [{
          key: "getSubModulo",
          value: function getSubModulo(idSubModulo) {
            return this.http.get("".concat(this.API, "/").concat(idSubModulo), {
              observe: 'response'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }]);

        return SubModulosService;
      }();

      SubModulosService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      SubModulosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], SubModulosService);
      /***/
    },

    /***/
    "NIE8":
    /*!*****************************************************************!*\
      !*** ./src/app/shared/services/requests/escritorios.service.ts ***!
      \*****************************************************************/

    /*! exports provided: EscritoriosService */

    /***/
    function NIE8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EscritoriosService", function () {
        return EscritoriosService;
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

      var EscritoriosService = /*#__PURE__*/function () {
        function EscritoriosService(http) {
          _classCallCheck(this, EscritoriosService);

          this.http = http;
          this.API = "http://23.254.204.187/api/common/escritorios";
        }

        _createClass(EscritoriosService, [{
          key: "getEscritorios",
          value: function getEscritorios() {
            return this.http.get("".concat(this.API)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }]);

        return EscritoriosService;
      }();

      EscritoriosService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      EscritoriosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], EscritoriosService);
      /***/
    },

    /***/
    "NXOV":
    /*!*********************************************************************************!*\
      !*** ./src/app/modules/logistica/cadastros/filiais/services/filiais.service.ts ***!
      \*********************************************************************************/

    /*! exports provided: LogisticaFiliaisService */

    /***/
    function NXOV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaFiliaisService", function () {
        return LogisticaFiliaisService;
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


      var LogisticaFiliaisService = /*#__PURE__*/function () {
        function LogisticaFiliaisService(http) {
          _classCallCheck(this, LogisticaFiliaisService);

          this.http = http;
          this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API;
        }

        _createClass(LogisticaFiliaisService, [{
          key: "getFiliais",
          value: function getFiliais(params) {
            return this.http.get("".concat(this.API, "/logistica/filiais"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "getFilial",
          value: function getFilial(id) {
            return this.http.get("".concat(this.API, "/logistica/filiais/").concat(id), {
              observe: 'response'
            });
          }
        }, {
          key: "postFiliais",
          value: function postFiliais(filiais) {
            return this.http.post("".concat(this.API, "/logistica/filiais"), filiais, {
              observe: 'response'
            });
          }
        }, {
          key: "getUsuariosAssociados",
          value: function getUsuariosAssociados(params) {
            return this.http.get("".concat(this.API, "/logistica/filiais/usuarios"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "postUsuariosAssociados",
          value: function postUsuariosAssociados(associacao) {
            return this.http.post("".concat(this.API, "/logistica/filiais/usuarios"), associacao, {
              observe: 'response'
            });
          }
        }, {
          key: "deleteAssociacoes",
          value: function deleteAssociacoes(params) {
            return this.http["delete"]("".concat(this.API, "/logistica/filiais/usuarios"), {
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
        }]);

        return LogisticaFiliaisService;
      }();

      LogisticaFiliaisService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      LogisticaFiliaisService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], LogisticaFiliaisService);
      /***/
    },

    /***/
    "PUeC":
    /*!*********************************************************************************************!*\
      !*** ./src/app/modules/logistica/entrega/desmembramento/services/desmembramento.service.ts ***!
      \*********************************************************************************************/

    /*! exports provided: LogisticaEntregaDesmembramentoService */

    /***/
    function PUeC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaEntregaDesmembramentoService", function () {
        return LogisticaEntregaDesmembramentoService;
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
      "AytR"); // angular
      // services


      var LogisticaEntregaDesmembramentoService = /*#__PURE__*/function () {
        function LogisticaEntregaDesmembramentoService(http) {
          _classCallCheck(this, LogisticaEntregaDesmembramentoService);

          this.http = http;
          this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API;
        }

        _createClass(LogisticaEntregaDesmembramentoService, [{
          key: "getProdutos",
          value: function getProdutos(params) {
            return this.http.get("".concat(this.API, "/logistica/pedidos/produtos"), {
              params: params,
              observe: "response"
            });
          }
        }, {
          key: "getTipoOperacao",
          value: function getTipoOperacao(params) {
            return this.http.get("".concat(this.API, "/logistica/pedidos/tipo-operacao"), {
              params: params,
              observe: "response"
            });
          }
        }, {
          key: "post",
          value: function post(params) {
            return this.http.post("".concat(this.API, "/logistica/pedidos/desmembramento"), params, {
              observe: "response"
            });
          }
        }, {
          key: "put",
          value: function put(params) {
            return this.http.put("".concat(this.API, "/logistica/pedidos/desmembramento"), params, {
              observe: "response"
            });
          }
        }]);

        return LogisticaEntregaDesmembramentoService;
      }();

      LogisticaEntregaDesmembramentoService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      LogisticaEntregaDesmembramentoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], LogisticaEntregaDesmembramentoService);
      /***/
    },

    /***/
    "T6IP":
    /*!**************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/representantes/representantes.service.ts ***!
      \**************************************************************************************/

    /*! exports provided: ComercialCadastrosRepresentantesService */

    /***/
    function T6IP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosRepresentantesService", function () {
        return ComercialCadastrosRepresentantesService;
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

      var ComercialCadastrosRepresentantesService = /*#__PURE__*/function () {
        function ComercialCadastrosRepresentantesService(http) {
          _classCallCheck(this, ComercialCadastrosRepresentantesService);

          this.http = http;
          this.API = "http://23.254.204.187/api/comercial/cadastros/representantes";
        }

        _createClass(ComercialCadastrosRepresentantesService, [{
          key: "getListaRepresentantes",
          value: function getListaRepresentantes() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/lista"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "saveERP",
          value: function saveERP(record) {
            return this.http.post("".concat(this.API, "/save"), record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "updateERP",
          value: function updateERP(record) {
            return this.http.put("".concat(this.API, "/update"), record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "save",
          value: function save(record, action) {
            console.log(record);

            if (action === 'update') {
              console.log(record);
              return this.updateERP(record);
            }

            return this.saveERP(record);
          }
        }, {
          key: "getDetalhes",
          value: function getDetalhes(codRepresentante) {
            return this.http.get("".concat(this.API, "/detalhes/").concat(codRepresentante)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getTipoComissionamento",
          value: function getTipoComissionamento() {
            return this.http.get("".concat(this.API, "/tipo-comissionamento")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getBancos",
          value: function getBancos() {
            return this.http.get("".concat(this.API, "/bancos")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getTipoVendedor",
          value: function getTipoVendedor() {
            return this.http.get("".concat(this.API, "/tipo-vendedor")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "activateERP",
          value: function activateERP(codERP) {
            return this.http.post("".concat(this.API, "/ativar"), codERP).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "inactivateERP",
          value: function inactivateERP(codERP) {
            return this.http.post("".concat(this.API, "/inativar"), codERP).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getAnexos",
          value: function getAnexos(codRepresentante) {
            return this.http.get("".concat(this.API, "/anexo/documentos/").concat(codRepresentante)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "postAnexos",
          value: function postAnexos(params, codRepresentante) {
            return this.http.post("".concat(this.API, "/anexo/documentos/salvar?codRepresentante=").concat(codRepresentante), params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "deleteAnexo",
          value: function deleteAnexo(codAnexo) {
            var params = {
              codAnexo: codAnexo
            };
            return this.http.put("".concat(this.API, "/anexo/documentos/excluir"), params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }]);

        return ComercialCadastrosRepresentantesService;
      }();

      ComercialCadastrosRepresentantesService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      ComercialCadastrosRepresentantesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ComercialCadastrosRepresentantesService);
      /***/
    },

    /***/
    "Tp9O":
    /*!*************************************************************************!*\
      !*** ./src/app/modules/logistica/yms/etapas/services/etapas.service.ts ***!
      \*************************************************************************/

    /*! exports provided: LogisticaYmsEtapasService */

    /***/
    function Tp9O(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaYmsEtapasService", function () {
        return LogisticaYmsEtapasService;
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


      var LogisticaYmsEtapasService = /*#__PURE__*/function () {
        function LogisticaYmsEtapasService(http) {
          _classCallCheck(this, LogisticaYmsEtapasService);

          this.http = http;
          this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API;
        }

        _createClass(LogisticaYmsEtapasService, [{
          key: "getEtapas",
          value: function getEtapas(params) {
            return this.http.get("".concat(this.API, "/logistica/yms/etapas"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "getEtapa",
          value: function getEtapa(id) {
            return this.http.get("".concat(this.API, "/logistica/yms/etapas/").concat(id), {
              observe: 'response'
            });
          }
        }, {
          key: "postEtapas",
          value: function postEtapas(etapas) {
            return this.http.post("".concat(this.API, "/logistica/yms/etapas"), etapas, {
              observe: 'response'
            });
          }
        }, {
          key: "getSetoresAssociados",
          value: function getSetoresAssociados(params) {
            return this.http.get("".concat(this.API, "/logistica/yms/etapas/setores"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "getSetores",
          value: function getSetores(params) {
            return this.http.get("".concat(this.API, "/logistica/yms/setores"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "deleteAssociacoes",
          value: function deleteAssociacoes(params) {
            return this.http["delete"]("".concat(this.API, "/logistica/yms/etapas/setores"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "postSetoresAssociados",
          value: function postSetoresAssociados(associacao) {
            return this.http.post("".concat(this.API, "/logistica/yms/etapas/setores"), associacao, {
              observe: 'response'
            });
          }
        }]);

        return LogisticaYmsEtapasService;
      }();

      LogisticaYmsEtapasService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      LogisticaYmsEtapasService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], LogisticaYmsEtapasService);
      /***/
    },

    /***/
    "WlQZ":
    /*!*************************************************************!*\
      !*** ./node_modules/@amcharts/amcharts4/themes/animated.js ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function WlQZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _internal_themes_animated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../.internal/themes/animated */
      "tQmC");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "default", function () {
        return _internal_themes_animated__WEBPACK_IMPORTED_MODULE_0__["default"];
      }); //# sourceMappingURL=animated.js.map

      /***/

    },

    /***/
    "Z/u6":
    /*!*********************************************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/estoque/produtos/services/produtos.service.ts ***!
      \*********************************************************************************************/

    /*! exports provided: TecnologiaInformacaoEstoqueProdutosService */

    /***/
    function ZU6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoEstoqueProdutosService", function () {
        return TecnologiaInformacaoEstoqueProdutosService;
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


      var TecnologiaInformacaoEstoqueProdutosService = /*#__PURE__*/function () {
        function TecnologiaInformacaoEstoqueProdutosService(http) {
          _classCallCheck(this, TecnologiaInformacaoEstoqueProdutosService);

          this.http = http;
          this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API;
        }

        _createClass(TecnologiaInformacaoEstoqueProdutosService, [{
          key: "getProdutos",
          value: function getProdutos(params) {
            return this.http.get("".concat(this.API, "/tecnologia-informacao/estoque/produtos"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "getProduto",
          value: function getProduto(id) {
            return this.http.get("".concat(this.API, "/tecnologia-informacao/estoque/produtos/").concat(id), {
              observe: 'response'
            });
          }
        }, {
          key: "postProdutos",
          value: function postProdutos(item) {
            return this.http.post("".concat(this.API, "/tecnologia-informacao/estoque/produtos"), item, {
              observe: 'response'
            });
          }
        }]);

        return TecnologiaInformacaoEstoqueProdutosService;
      }();

      TecnologiaInformacaoEstoqueProdutosService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      TecnologiaInformacaoEstoqueProdutosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], TecnologiaInformacaoEstoqueProdutosService);
      /***/
    },

    /***/
    "Z5a6":
    /*!********************************************************!*\
      !*** ./node_modules/@amcharts/amcharts4/lang/pt_BR.js ***!
      \********************************************************/

    /*! exports provided: default */

    /***/
    function Z5a6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /**
       * amCharts 4 locale
       *
       * Locale: pt_BR
       * Language: Brazilian Portuguese
       *
       * Follow instructions in [on this page](https://www.amcharts.com/docs/v4/tutorials/creating-translations/) to make corrections or add new translations.
       */

      /* harmony default export */


      __webpack_exports__["default"] = {
        // Number formatting options.
        // 
        // Please check with the local standards which separator is accepted to be
        // used for separating decimals, and which for thousands.
        "_decimalSeparator": ",",
        "_thousandSeparator": ".",
        // Position of the percent sign in numbers
        "_percentPrefix": null,
        "_percentSuffix": "%",
        // Default date formats for various periods.
        // 
        // This should reflect official or de facto formatting universally accepted
        // in the country translation is being made for
        // Available format codes here:
        // https://www.amcharts.com/docs/v4/concepts/formatters/formatting-date-time/#Format_codes
        // 
        // This will be used when formatting date/time for particular granularity,
        // e.g. "_date_hour" will be shown whenever we need to show time as hours.
        "_date_millisecond": "mm:ss SSS",
        "_date_second": "HH:mm:ss",
        "_date_minute": "HH:mm",
        "_date_hour": "HH:mm",
        "_date_day": "dd MMM",
        "_date_week": "ww",
        "_date_month": "MMM",
        "_date_year": "yyyy",
        // Default duration formats for various base units.
        // 
        // This will be used by DurationFormatter to format numeric values into
        // duration.
        // 
        // Available codes here:
        // https://www.amcharts.com/docs/v4/concepts/formatters/formatting-duration/#Available_Codes
        "_duration_millisecond": "SSS",
        "_duration_second": "ss",
        "_duration_minute": "mm",
        "_duration_hour": "hh",
        "_duration_day": "dd",
        "_duration_week": "ww",
        "_duration_month": "MM",
        "_duration_year": "yyyy",
        // Era translations
        "_era_ad": "DC",
        "_era_bc": "AC",
        // Day part, used in 12-hour formats, e.g. 5 P.M.
        // Please note that these come in 3 variants:
        // * one letter (e.g. "A")
        // * two letters (e.g. "AM")
        // * two letters with dots (e.g. "A.M.")
        // 
        // All three need to to be translated even if they are all the same. Some
        // users might use one, some the other.
        "A": "",
        "P": "",
        "AM": "",
        "PM": "",
        "A.M.": "",
        "P.M.": "",
        // Date-related stuff.
        // 
        // When translating months, if there's a difference, use the form which is
        // best for a full date, e.g. as you would use it in "2018 January 1".
        // 
        // Note that May is listed twice. This is because in English May is the same
        // in both long and short forms, while in other languages it may not be the
        // case. Translate "May" to full word, while "May(short)" to shortened
        // version.
        "January": "Janeiro",
        "February": "Fevereiro",
        "March": "Março",
        "April": "Abril",
        "May": "Maio",
        "June": "Junho",
        "July": "Julho",
        "August": "Agosto",
        "September": "Setembro",
        "October": "Outubro",
        "November": "Novembro",
        "December": "Dezembro",
        "Jan": "Jan",
        "Feb": "Fev",
        "Mar": "Mar",
        "Apr": "Abr",
        "May(short)": "Mai",
        "Jun": "Jun",
        "Jul": "Jul",
        "Aug": "Ago",
        "Sep": "Set",
        "Oct": "Out",
        "Nov": "Nov",
        "Dec": "Dez",
        // Weekdays.
        "Sunday": "Domingo",
        "Monday": "Segunda-feira",
        "Tuesday": "Terça-feira",
        "Wednesday": "Quarta-feira",
        "Thursday": "Quinta-feira",
        "Friday": "Sexta-feira",
        "Saturday": "Sábado",
        "Sun": "Dom",
        "Mon": "Seg",
        "Tue": "Ter",
        "Wed": "Qua",
        "Thu": "Qui",
        "Fri": "Sex",
        "Sat": "Sáb",
        // Date ordinal function.
        // 
        // This is used when adding number ordinal when formatting days in dates.
        // 
        // E.g. "January 1st", "February 2nd".
        // 
        // The function accepts day number, and returns a string to be added to the
        // day, like in default English translation, if we pass in 2, we will receive
        // "nd" back.
        "_dateOrd": function _dateOrd(day) {
          return "º";
        },
        // Various chart controls.
        // Shown as a tooltip on zoom out button.
        "Zoom Out": "Reduzir Zoom",
        // Timeline buttons
        "Play": "Play",
        "Stop": "Parar",
        // Chart's Legend screen reader title.
        "Legend": "Legenda",
        // Legend's item screen reader indicator.
        "Click, tap or press ENTER to toggle": "Clique, toque ou pressione ENTER para alternar",
        // Shown when the chart is busy loading something.
        "Loading": "Carregando",
        // Shown as the first button in the breadcrumb navigation, e.g.:
        // Home > First level > ...
        "Home": "Início",
        // Chart types.
        // Those are used as default screen reader titles for the main chart element
        // unless developer has set some more descriptive title.
        "Chart": "Gráfico",
        "Serial chart": "Gráfico Serial",
        "X/Y chart": "Gráfico XY",
        "Pie chart": "Gráfico de Pizza",
        "Gauge chart": "Gráfico Indicador",
        "Radar chart": "Gráfico de Radar",
        "Sankey diagram": "Diagrama Sankey",
        "Chord diagram": "Diagram Chord",
        "Flow diagram": "Diagrama Flow",
        "TreeMap chart": "Gráfico de Mapa de Árvore",
        // Series types.
        // Used to name series by type for screen readers if they do not have their
        // name set.
        "Series": "Séries",
        "Candlestick Series": "Séries do Candlestick",
        "Column Series": "Séries de Colunas",
        "Line Series": "Séries de Linhas",
        "Pie Slice Series": "Séries de Fatias de Pizza",
        "X/Y Series": "Séries de XY",
        // Map-related stuff.
        "Map": "Mapa",
        "Press ENTER to zoom in": "Pressione ENTER para aumentar o zoom",
        "Press ENTER to zoom out": "Pressione ENTER para diminuir o zoom",
        "Use arrow keys to zoom in and out": "Use as setas para diminuir ou aumentar o zoom",
        "Use plus and minus keys on your keyboard to zoom in and out": "Use as teclas mais ou menos no seu teclado para diminuir ou aumentar o zoom",
        // Export-related stuff.
        // These prompts are used in Export menu labels.
        // 
        // "Export" is the top-level menu item.
        // 
        // "Image", "Data", "Print" as second-level indicating type of export
        // operation.
        // 
        // Leave actual format untranslated, unless you absolutely know that they
        // would convey more meaning in some other way.
        "Export": "Exportar",
        "Image": "Imagem",
        "Data": "Dados",
        "Print": "Imprimir",
        "Click, tap or press ENTER to open": "Clique, toque ou pressione ENTER para abrir",
        "Click, tap or press ENTER to print.": "Clique, toque ou pressione ENTER para imprimir",
        "Click, tap or press ENTER to export as %1.": "Clique, toque ou pressione ENTER para exportar como %1.",
        'To save the image, right-click this link and choose "Save picture as..."': "Para salvar a imagem, clique no link com o botão da direira e escolha \"Salvar imagem como...\"",
        'To save the image, right-click thumbnail on the left and choose "Save picture as..."': "Para salvar, clique na imagem à esquerda com o botão direito e escolha \"Salvar imagem como...\"",
        "(Press ESC to close this message)": "(Pressione ESC para fechar esta mensagem)",
        "Image Export Complete": "A exportação da imagem foi completada",
        "Export operation took longer than expected. Something might have gone wrong.": "A exportação da imagem demorou mais do que o experado. Algo deve ter dado errado.",
        "Saved from": "Salvo de",
        "PNG": "",
        "JPG": "",
        "GIF": "",
        "SVG": "",
        "PDF": "",
        "JSON": "",
        "CSV": "",
        "XLSX": "",
        // Scrollbar-related stuff.
        // 
        // Scrollbar is a control which can zoom and pan the axes on the chart.
        // 
        // Each scrollbar has two grips: left or right (for horizontal scrollbar) or
        // upper and lower (for vertical one).
        // 
        // Prompts change in relation to whether Scrollbar is vertical or horizontal.
        // 
        // The final section is used to indicate the current range of selection.
        "Use TAB to select grip buttons or left and right arrows to change selection": "Use TAB para selecionar os botões ou setas para a direita ou esquerda para mudar a seleção",
        "Use left and right arrows to move selection": "Use as setas para a esquerda ou direita para mover a seleção",
        "Use left and right arrows to move left selection": "Use as setas para a esquerda ou direita para mover a seleção da esquerda",
        "Use left and right arrows to move right selection": "Use as setas para a esquerda ou direita para mover a seleção da direita",
        "Use TAB select grip buttons or up and down arrows to change selection": "Use TAB para selecionar os botões ou setas para cima ou para baixo para mudar a seleção",
        "Use up and down arrows to move selection": "Use as setas para cima ou para baixo para mover a seleção",
        "Use up and down arrows to move lower selection": "Use as setas para cima ou para baixo para mover a seleção de baixo",
        "Use up and down arrows to move upper selection": "Use as setas para cima ou para baixo para mover a seleção de cima",
        "From %1 to %2": "De %1 até %2",
        "From %1": "De %1",
        "To %1": "Até %1",
        // Data loader-related.
        "No parser available for file: %1": "Não há um interpretador para este arquivo: %1",
        "Error parsing file: %1": "Erro analizando o arquivo: %1",
        "Unable to load file: %1": "O arquivo não pôde ser carregado: %1",
        "Invalid date": "Data inválida"
      }; //# sourceMappingURL=pt_BR.js.map

      /***/
    },

    /***/
    "ZeMZ":
    /*!*************************************************************!*\
      !*** ./node_modules/@amcharts/amcharts4/themes/material.js ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function ZeMZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _internal_themes_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../.internal/themes/material */
      "u3MO");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "default", function () {
        return _internal_themes_material__WEBPACK_IMPORTED_MODULE_0__["default"];
      }); //# sourceMappingURL=material.js.map

      /***/

    },

    /***/
    "Ztrz":
    /*!***********************************************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/contratos/contrato/services/contrato.service.ts ***!
      \***********************************************************************************************/

    /*! exports provided: TecnologiaInformacaoCadastroContratoService */

    /***/
    function Ztrz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoCadastroContratoService", function () {
        return TecnologiaInformacaoCadastroContratoService;
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


      var TecnologiaInformacaoCadastroContratoService = /*#__PURE__*/function () {
        function TecnologiaInformacaoCadastroContratoService(http) {
          _classCallCheck(this, TecnologiaInformacaoCadastroContratoService);

          this.http = http;
          this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API;
        } //-----------------------------------ITENS--------------------------\\


        _createClass(TecnologiaInformacaoCadastroContratoService, [{
          key: "getContrato",
          value: function getContrato(params) {
            return this.http.get("".concat(this.API, "/tecnologia-informacao/contratos"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "postContrato",
          value: function postContrato(contrato) {
            return this.http.post("".concat(this.API, "/tecnologia-informacao/contrato"), contrato, {
              observe: 'response'
            });
          } //-----------------------------------Docuementos--------------------------\\

        }, {
          key: "getDocumento",
          value: function getDocumento(params) {
            return this.http.get("".concat(this.API, "/tecnologia-informacao/contratos/documentos"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "postDocumento",
          value: function postDocumento(params, ID_TECN_INFO_CONT) {
            return this.http.post("".concat(this.API, "/tecnologia-informacao/contrato/documento?ID_TECN_INFO_CONT=").concat(ID_TECN_INFO_CONT), params, {
              observe: 'response'
            });
          }
        }, {
          key: "putDocumento",
          value: function putDocumento(params) {
            return this.http.put("".concat(this.API, "/tecnologia-informacao/contrato/documento"), params, {
              observe: 'response'
            });
          } //------------------------------------  EMPRESAS ------------------------------//

        }, {
          key: "getEmpresas",
          value: function getEmpresas(params) {
            return this.http.get("".concat(this.API, "/tecnologia-informacao/empresas"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "getEmpresasAssoc",
          value: function getEmpresasAssoc(params) {
            return this.http.get("".concat(this.API, "/tecnologia-informacao/contratos/empresas"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "postEmpresas",
          value: function postEmpresas(params) {
            return this.http.post("".concat(this.API, "/tecnologia-informacao/contratos/empresas"), params, {
              observe: 'response'
            });
          }
        }, {
          key: "getIndices",
          value: function getIndices(params) {
            return this.http.get("".concat(this.API, "/servicos/indices"), {
              params: params,
              observe: 'response'
            });
          }
        }]);

        return TecnologiaInformacaoCadastroContratoService;
      }();

      TecnologiaInformacaoCadastroContratoService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      TecnologiaInformacaoCadastroContratoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], TecnologiaInformacaoCadastroContratoService);
      /***/
    },

    /***/
    "cy+q":
    /*!*********************************************************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/contratos/tipo-contrato/services/tipo-contrato.service.ts ***!
      \*********************************************************************************************************/

    /*! exports provided: TecnologiaInformacaoCadastroTipoContratoService */

    /***/
    function cyQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoCadastroTipoContratoService", function () {
        return TecnologiaInformacaoCadastroTipoContratoService;
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


      var TecnologiaInformacaoCadastroTipoContratoService = /*#__PURE__*/function () {
        function TecnologiaInformacaoCadastroTipoContratoService(http) {
          _classCallCheck(this, TecnologiaInformacaoCadastroTipoContratoService);

          this.http = http;
          this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API;
        }

        _createClass(TecnologiaInformacaoCadastroTipoContratoService, [{
          key: "getTipoContrato",
          value: function getTipoContrato(params) {
            return this.http.get("".concat(this.API, "/tecnologia-informacao/contrato/tipo-contrato"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "postTipoContrato",
          value: function postTipoContrato(tipoContrato) {
            return this.http.post("".concat(this.API, "/tecnologia-informacao/contrato/tipo-contrato"), tipoContrato, {
              observe: 'response'
            });
          }
        }]);

        return TecnologiaInformacaoCadastroTipoContratoService;
      }();

      TecnologiaInformacaoCadastroTipoContratoService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      TecnologiaInformacaoCadastroTipoContratoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], TecnologiaInformacaoCadastroTipoContratoService);
      /***/
    },

    /***/
    "dRIe":
    /*!***********************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/comissoes/representantes/gestao-comissionamentos/gestao-comissionamentos.service.ts ***!
      \***********************************************************************************************************************/

    /*! exports provided: ComercialComissoesGestaoComissionamentosService */

    /***/
    function dRIe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialComissoesGestaoComissionamentosService", function () {
        return ComercialComissoesGestaoComissionamentosService;
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

      var ComercialComissoesGestaoComissionamentosService = /*#__PURE__*/function () {
        function ComercialComissoesGestaoComissionamentosService(http) {
          _classCallCheck(this, ComercialComissoesGestaoComissionamentosService);

          this.http = http;
          this.API = "http://23.254.204.187/api/comercial/comissoes/representantes/gestao-comissionamentos";
        }

        _createClass(ComercialComissoesGestaoComissionamentosService, [{
          key: "getComissionamentos",
          value: function getComissionamentos() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/lista"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getListaComissoes",
          value: function getListaComissoes() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/lista"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getListaEdicaoComissoes",
          value: function getListaEdicaoComissoes() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/lista-edicao"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getDetalhesRepresentante",
          value: function getDetalhesRepresentante(params) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/representantes-detalhes"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getDetalhesUnidades",
          value: function getDetalhesUnidades(params) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/unidades-detalhes"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          } // getDetalhesRepresentante(params): Observable<any> {
          //   return this.http.get(`${this.API}/comissoes-detalhes/${codGestao}/${codComissao}`)
          //   .pipe(
          //     take(1),
          //     retry(2)
          //     );
          // }

        }, {
          key: "getFormComissoes",
          value: function getFormComissoes(params) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/dados-comissoes"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getHistorico",
          value: function getHistorico(codComissaoRepresentante) {
            return this.http.get("".concat(this.API, "/historico/").concat(codComissaoRepresentante)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getModelo",
          value: function getModelo(codGestao) {
            return this.http.get("".concat(this.API, "/modelos/").concat(codGestao)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getSituacao",
          value: function getSituacao() {
            return this.http.get("".concat(this.API, "/situacao")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          } // getFilterValues(): Observable<Object | JsonResponse> {
          //   let escritorios = this.getEscritorios();
          //   let representantes = this.getRepresentantes();
          //   return forkJoin([
          //     escritorios,
          //     representantes,
          //   ]).pipe(take(1));
          // }

        }, {
          key: "getRepresentantes",
          value: function getRepresentantes(codEscritorio) {
            return this.http.get("".concat(this.API, "/representantes/").concat(codEscritorio)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getEscritorios",
          value: function getEscritorios() {
            return this.http.get("".concat(this.API, "/escritorios")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getDetalhes",
          value: function getDetalhes(idAnoMes) {
            return this.http.get("".concat(this.API, "/detalhes/").concat(idAnoMes)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getPermissoesAcesso",
          value: function getPermissoesAcesso() {
            return this.http.get("".concat(this.API, "/permissoes-acesso")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "saveComissao",
          value: function saveComissao(record, action) {
            return this.http.post("".concat(this.API, "/salvar"), record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "updateComissao",
          value: function updateComissao(record, action) {
            return this.http.put("".concat(this.API, "/atualizar"), record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          } // getSolicitaNfEscritorio(){
          //   return this.http.get(`${this.API}/solicitar-nf-escritorio`).pipe(take(1));
          // }

        }, {
          key: "getSolicitaNfRepresentante",
          value: function getSolicitaNfRepresentante(params) {
            return this.http.post("".concat(this.API, "/solicitar-nf-representante"), params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "postValores",
          value: function postValores(params) {
            return this.http.post("".concat(this.API, "/salvar-valores"), params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "postAprovar",
          value: function postAprovar(params) {
            return this.http.post("".concat(this.API, "/aprovar"), params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "postReprovar",
          value: function postReprovar(params) {
            return this.http.post("".concat(this.API, "/reprovar"), params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getAnexos",
          value: function getAnexos(codComissao) {
            return this.http.get("".concat(this.API, "/anexo/documentos/").concat(codComissao)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "postAnexos",
          value: function postAnexos(params, codComissaoRepresentante) {
            return this.http.post("".concat(this.API, "/anexo/documentos/salvar?codComissaoRepresentante=").concat(codComissaoRepresentante), params);
          }
        }, {
          key: "deleteAnexo",
          value: function deleteAnexo(codAnexo) {
            var params = {
              codAnexo: codAnexo
            };
            return this.http.put("".concat(this.API, "/anexo/documentos/excluir"), params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }]);

        return ComercialComissoesGestaoComissionamentosService;
      }();

      ComercialComissoesGestaoComissionamentosService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      ComercialComissoesGestaoComissionamentosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ComercialComissoesGestaoComissionamentosService);
      /***/
    },

    /***/
    "dunZ":
    /*!**************************************************!*\
      !*** ./node_modules/file-saver/src/FileSaver.js ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function dunZ(module, exports, __webpack_require__) {
      /*
      * FileSaver.js
      * A saveAs() FileSaver implementation.
      *
      * By Eli Grey, http://eligrey.com
      *
      * License : https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md (MIT)
      * source  : http://purl.eligrey.com/github/FileSaver.js
      */
      // The one and only way of getting global scope in all environments
      // https://stackoverflow.com/q/3277182/1008999
      var _global = typeof window === 'object' && window.window === window ? window : typeof self === 'object' && self.self === self ? self : typeof global === 'object' && global.global === global ? global : this;

      function bom(blob, opts) {
        if (typeof opts === 'undefined') opts = {
          autoBom: false
        };else if (typeof opts !== 'object') {
          console.warn('Deprecated: Expected third argument to be a object');
          opts = {
            autoBom: !opts
          };
        } // prepend BOM for UTF-8 XML and text/* types (including HTML)
        // note: your browser will automatically convert UTF-16 U+FEFF to EF BB BF

        if (opts.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
          return new Blob([String.fromCharCode(0xFEFF), blob], {
            type: blob.type
          });
        }

        return blob;
      }

      function download(url, name, opts) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.responseType = 'blob';

        xhr.onload = function () {
          saveAs(xhr.response, name, opts);
        };

        xhr.onerror = function () {
          console.error('could not download file');
        };

        xhr.send();
      }

      function corsEnabled(url) {
        var xhr = new XMLHttpRequest(); // use sync to avoid popup blocker

        xhr.open('HEAD', url, false);

        try {
          xhr.send();
        } catch (e) {}

        return xhr.status >= 200 && xhr.status <= 299;
      } // `a.click()` doesn't work for all browsers (#465)


      function click(node) {
        try {
          node.dispatchEvent(new MouseEvent('click'));
        } catch (e) {
          var evt = document.createEvent('MouseEvents');
          evt.initMouseEvent('click', true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null);
          node.dispatchEvent(evt);
        }
      } // Detect WebView inside a native macOS app by ruling out all browsers
      // We just need to check for 'Safari' because all other browsers (besides Firefox) include that too
      // https://www.whatismybrowser.com/guides/the-latest-user-agent/macos


      var isMacOSWebView = _global.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent);
      var saveAs = _global.saveAs || ( // probably in some web worker
      typeof window !== 'object' || window !== _global ? function saveAs() {
        /* noop */
      } // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView
      : 'download' in HTMLAnchorElement.prototype && !isMacOSWebView ? function saveAs(blob, name, opts) {
        var URL = _global.URL || _global.webkitURL;
        var a = document.createElement('a');
        name = name || blob.name || 'download';
        a.download = name;
        a.rel = 'noopener'; // tabnabbing
        // TODO: detect chrome extensions & packaged apps
        // a.target = '_blank'

        if (typeof blob === 'string') {
          // Support regular links
          a.href = blob;

          if (a.origin !== location.origin) {
            corsEnabled(a.href) ? download(blob, name, opts) : click(a, a.target = '_blank');
          } else {
            click(a);
          }
        } else {
          // Support blobs
          a.href = URL.createObjectURL(blob);
          setTimeout(function () {
            URL.revokeObjectURL(a.href);
          }, 4E4); // 40s

          setTimeout(function () {
            click(a);
          }, 0);
        }
      } // Use msSaveOrOpenBlob as a second approach
      : 'msSaveOrOpenBlob' in navigator ? function saveAs(blob, name, opts) {
        name = name || blob.name || 'download';

        if (typeof blob === 'string') {
          if (corsEnabled(blob)) {
            download(blob, name, opts);
          } else {
            var a = document.createElement('a');
            a.href = blob;
            a.target = '_blank';
            setTimeout(function () {
              click(a);
            });
          }
        } else {
          navigator.msSaveOrOpenBlob(bom(blob, opts), name);
        }
      } // Fallback to using FileReader and a popup
      : function saveAs(blob, name, opts, popup) {
        // Open a popup immediately do go around popup blocker
        // Mostly only available on user interaction and the fileReader is async so...
        popup = popup || open('', '_blank');

        if (popup) {
          popup.document.title = popup.document.body.innerText = 'downloading...';
        }

        if (typeof blob === 'string') return download(blob, name, opts);
        var force = blob.type === 'application/octet-stream';

        var isSafari = /constructor/i.test(_global.HTMLElement) || _global.safari;

        var isChromeIOS = /CriOS\/[\d]+/.test(navigator.userAgent);

        if ((isChromeIOS || force && isSafari || isMacOSWebView) && typeof FileReader !== 'undefined') {
          // Safari doesn't allow downloading of blob URLs
          var reader = new FileReader();

          reader.onloadend = function () {
            var url = reader.result;
            url = isChromeIOS ? url : url.replace(/^data:[^;]*;/, 'data:attachment/file;');
            if (popup) popup.location.href = url;else location = url;
            popup = null; // reverse-tabnabbing #460
          };

          reader.readAsDataURL(blob);
        } else {
          var URL = _global.URL || _global.webkitURL;
          var url = URL.createObjectURL(blob);
          if (popup) popup.location = url;else location.href = url;
          popup = null; // reverse-tabnabbing #460

          setTimeout(function () {
            URL.revokeObjectURL(url);
          }, 4E4); // 40s
        }
      });
      _global.saveAs = saveAs.saveAs = saveAs;

      if (true) {
        module.exports = saveAs;
      }
      /***/

    },

    /***/
    "fKXl":
    /*!*********************************************************!*\
      !*** ./src/app/core/not-found/not-found.component.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function fKXl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "::ng-deep not-found {\n  height: 100vh;\n}\n::ng-deep not-found .not-found {\n  -ms-flex-align: center;\n      align-items: center;\n  display: -ms-flexbox;\n  display: flex;\n  height: 100%;\n  -ms-flex-pack: center;\n      justify-content: center;\n  width: 100%;\n}\n::ng-deep not-found .not-found #img {\n  height: 70px;\n  margin-right: 15px;\n}\n::ng-deep not-found .not-found #title {\n  color: #586464;\n  font-size: 18px;\n  font-weight: 500;\n  letter-spacing: 0.25px;\n}\n::ng-deep not-found .not-found #message {\n  color: #212529;\n  font-size: 16px;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic3JjL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy5zY3NzIiwic3JjL2Fzc2V0cy9zY3NzL2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlFO0VBQ0UsYUFBQTtBQUhKO0FBSUk7RUFDRSxzQkFBQTtNQUFBLG1CQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO01BQUEsdUJBQUE7RUFDQSxXQUFBO0FBRk47QUFHTTtFQUNFLFlBQUE7RUFDQSxrQkNkQztBRGFUO0FBR007RUFDRSxjRWRNO0VGZU4sZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUFEUjtBQUdNO0VBQ0UsY0VyQkk7RUZzQkosZUFBQTtFQUNBLGdCQUFBO0FBRFIiLCJmaWxlIjoic3JjL2FwcC9jb3JlL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAge1xyXG4gIEBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy9zY3NzL2NvbG9ycyc7XHJcbiAgQGltcG9ydCAnLi4vLi4vLi4vYXNzZXRzL3Njc3MvdmFyaWFibGVzJztcclxuXHJcbiAgbm90LWZvdW5kIHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAubm90LWZvdW5kIHtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICNpbWcge1xyXG4gICAgICAgIGhlaWdodDogNzBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6ICRndXR0ZXI7XHJcbiAgICAgIH1cclxuICAgICAgI3RpdGxlIHtcclxuICAgICAgICBjb2xvcjogJG1lZGl1bS1ncmF5O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjI1cHg7XHJcbiAgICAgIH1cclxuICAgICAgI21lc3NhZ2Uge1xyXG4gICAgICAgIGNvbG9yOiAkZGFyay1ncmF5O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIiRndXR0ZXI6IDE1cHg7XHJcbiRzaWRlYmFyLXNpemU6IDQ4cHg7XHJcbiRzaWRlYmFyLW9wZW4tc2l6ZTogMjUwcHg7XHJcbiRuYXZiYXItc2l6ZTogNDhweDtcclxuJGhlYWRlci1zaXplOiA0NXB4O1xyXG4iLCIkYmxhY2s6ICMwMDAwMDA7XHJcbiRncmF5OiAjNWE1YTVhO1xyXG4kZGFyay1ncmF5OiAjMjEyNTI5O1xyXG4kbWVkaXVtLWdyYXk6ICM1ODY0NjQ7XHJcbiRsaWdodC1ncmF5OiAjZTVlNWUzO1xyXG4kY3lhbm86ICMwMGUwZDg7XHJcbiRibHVlOiAjMDA1ZmRjO1xyXG4kbGlnaHQtYmx1ZTogIzhGQjlFRjtcclxuJGRhcmstYmx1ZTogIzA0MzM1ZTtcclxuJHJlZDogI2I4MzQyYztcclxuJG9yYW5nZTogI2ZmNjYzMztcclxuJGxpZ2h0LW9yYW5nZTogI2ZmODQyOTtcclxuJGFxdWE6ICMyMmZmYTE7XHJcbiRncmVlbjogIzRkY2M3MTtcclxuJGxpZ2h0LWdyZWVuOiAjYmZmZjAwO1xyXG4kZGFyay1ncmVlbjogIzAwODA2MDtcclxuJHllbGxvdzogI2ZmZWEwMDtcclxuJGdvbGRlbjogI2NhOWYxZDtcclxuJHBpbms6ICNjYzA3NjY7XHJcbiRwdXJwbGU6ICM3OTBhYTM7XHJcbiR3aGl0ZTogI2ZmZmZmZjtcclxuJGljZTogI2Y3ZjdmNztcclxuJHB1cnBsZU10Q29ycDogIzNlMDc1MjtcclxuJHB1cnBsZUxpZ2h0TXRDb3JwOiAjOTYyMThlO1xyXG4kb3JhbmdlTXRDb3JwOiAjRkM5RjNBO1xyXG4kb3JhbmdlRGFya010Q29ycDogIzllNTIwMTtcclxuIl19 */";
      /***/
    },

    /***/
    "fMkk":
    /*!*********************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/gestao/associacoes/coordenadores-escritorios/coordenadores-escritorios.service.ts ***!
      \*********************************************************************************************************************/

    /*! exports provided: ComercialGestaoAssociacoesCoordenadoresEscritoriosService */

    /***/
    function fMkk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialGestaoAssociacoesCoordenadoresEscritoriosService", function () {
        return ComercialGestaoAssociacoesCoordenadoresEscritoriosService;
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

      var ComercialGestaoAssociacoesCoordenadoresEscritoriosService = /*#__PURE__*/function () {
        function ComercialGestaoAssociacoesCoordenadoresEscritoriosService(http) {
          _classCallCheck(this, ComercialGestaoAssociacoesCoordenadoresEscritoriosService);

          this.http = http;
          this.API = "http://23.254.204.187/api/comercial/gestao/associacao-coordenadores";
        }

        _createClass(ComercialGestaoAssociacoesCoordenadoresEscritoriosService, [{
          key: "getListaCoordenadoresEscritorios",
          value: function getListaCoordenadoresEscritorios() {
            return this.http.get("".concat(this.API, "/lista")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "putAssociacaoCoordenadorEscritorio",
          value: function putAssociacaoCoordenadorEscritorio(data) {
            return this.http.put("".concat(this.API, "/salvar"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }]);

        return ComercialGestaoAssociacoesCoordenadoresEscritoriosService;
      }();

      ComercialGestaoAssociacoesCoordenadoresEscritoriosService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      ComercialGestaoAssociacoesCoordenadoresEscritoriosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ComercialGestaoAssociacoesCoordenadoresEscritoriosService);
      /***/
    },

    /***/
    "fnxe":
    /*!****************************************************************!*\
      !*** ./node_modules/ngx-order-pipe/fesm2015/ngx-order-pipe.js ***!
      \****************************************************************/

    /*! exports provided: OrderModule, OrderPipe */

    /***/
    function fnxe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderModule", function () {
        return OrderModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderPipe", function () {
        return OrderPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var OrderPipe = /*#__PURE__*/function () {
        function OrderPipe() {
          _classCallCheck(this, OrderPipe);
        }

        _createClass(OrderPipe, [{
          key: "transform",
          value: function transform(value, expression, reverse) {
            var isCaseInsensitive = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
            var comparator = arguments.length > 4 ? arguments[4] : undefined;

            if (!value) {
              return value;
            }

            if (Array.isArray(expression)) {
              return this.multiExpressionTransform(value, expression.slice(), reverse, isCaseInsensitive, comparator);
            }

            if (Array.isArray(value)) {
              return this.sortArray(value.slice(), expression, reverse, isCaseInsensitive, comparator);
            }

            if (typeof value === "object") {
              return this.transformObject(Object.assign({}, value), expression, reverse, isCaseInsensitive, comparator);
            }

            return value;
          }
          /**
           * Sort array, returns sorted array
           *
           * @param array
           * @param expression
           * @param reverse
           * @param isCaseInsensitive
           * @param comparator
           * @returns {Type[]}
           */

        }, {
          key: "sortArray",
          value: function sortArray(array, expression, reverse, isCaseInsensitive, comparator) {
            var isDeepLink = expression && expression.indexOf(".") !== -1;

            if (isDeepLink) {
              expression = OrderPipe.parseExpression(expression);
            }

            var compareFn;

            if (comparator && typeof comparator === "function") {
              compareFn = comparator;
            } else {
              compareFn = isCaseInsensitive ? OrderPipe.caseInsensitiveSort : OrderPipe.defaultCompare;
            }

            var sortedArray = array.sort(function (a, b) {
              if (!expression) {
                return compareFn(a, b);
              }

              if (!isDeepLink) {
                if (a && b) {
                  return compareFn(a[expression], b[expression]);
                }

                return compareFn(a, b);
              }

              return compareFn(OrderPipe.getValue(a, expression), OrderPipe.getValue(b, expression));
            });

            if (reverse) {
              return sortedArray.reverse();
            }

            return sortedArray;
          }
          /**
           * Transform Object
           *
           * @param value
           * @param expression
           * @param reverse
           * @param isCaseInsensitive
           * @param comparator
           * @returns {any[]}
           */

        }, {
          key: "transformObject",
          value: function transformObject(value, expression, reverse, isCaseInsensitive, comparator) {
            var parsedExpression = OrderPipe.parseExpression(expression);
            var lastPredicate = parsedExpression.pop();
            var oldValue = OrderPipe.getValue(value, parsedExpression);

            if (!Array.isArray(oldValue)) {
              parsedExpression.push(lastPredicate);
              lastPredicate = null;
              oldValue = OrderPipe.getValue(value, parsedExpression);
            }

            if (!oldValue) {
              return value;
            }

            OrderPipe.setValue(value, this.transform(oldValue, lastPredicate, reverse, isCaseInsensitive), parsedExpression);
            return value;
          }
          /**
           * Apply multiple expressions
           *
           * @param value
           * @param {any[]} expressions
           * @param {boolean} reverse
           * @param {boolean} isCaseInsensitive
           * @param {Function} comparator
           * @returns {any}
           */

        }, {
          key: "multiExpressionTransform",
          value: function multiExpressionTransform(value, expressions, reverse) {
            var _this4 = this;

            var isCaseInsensitive = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
            var comparator = arguments.length > 4 ? arguments[4] : undefined;
            return expressions.reverse().reduce(function (result, expression) {
              return _this4.transform(result, expression, reverse, isCaseInsensitive, comparator);
            }, value);
          }
        }], [{
          key: "isString",
          value:
          /**
           * Check if a value is a string
           *
           * @param value
           */
          function isString(value) {
            return typeof value === "string" || value instanceof String;
          }
          /**
           * Sorts values ignoring the case
           *
           * @param a
           * @param b
           */

        }, {
          key: "caseInsensitiveSort",
          value: function caseInsensitiveSort(a, b) {
            if (OrderPipe.isString(a) && OrderPipe.isString(b)) {
              return a.localeCompare(b);
            }

            return OrderPipe.defaultCompare(a, b);
          }
          /**
           * Default compare method
           *
           * @param a
           * @param b
           */

        }, {
          key: "defaultCompare",
          value: function defaultCompare(a, b) {
            if (a && a instanceof Date) {
              a = a.getTime();
            }

            if (b && b instanceof Date) {
              b = b.getTime();
            }

            if (a === b) {
              return 0;
            }

            if (a == null) {
              return 1;
            }

            if (b == null) {
              return -1;
            }

            return a > b ? 1 : -1;
          }
          /**
           * Parse expression, split into items
           * @param expression
           * @returns {string[]}
           */

        }, {
          key: "parseExpression",
          value: function parseExpression(expression) {
            expression = expression.replace(/\[(\w+)\]/g, ".$1");
            expression = expression.replace(/^\./, "");
            return expression.split(".");
          }
          /**
           * Get value by expression
           *
           * @param object
           * @param expression
           * @returns {any}
           */

        }, {
          key: "getValue",
          value: function getValue(object, expression) {
            for (var i = 0, n = expression.length; i < n; ++i) {
              if (!object) {
                return;
              }

              var k = expression[i];

              if (!(k in object)) {
                return;
              }

              if (typeof object[k] === "function") {
                object = object[k]();
              } else {
                object = object[k];
              }
            }

            return object;
          }
          /**
           * Set value by expression
           *
           * @param object
           * @param value
           * @param expression
           */

        }, {
          key: "setValue",
          value: function setValue(object, value, expression) {
            var i;

            for (i = 0; i < expression.length - 1; i++) {
              object = object[expression[i]];
            }

            object[expression[i]] = value;
          }
        }]);

        return OrderPipe;
      }();

      OrderPipe.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: "orderBy",
          pure: false
        }]
      }];
      /**
       * Created by vadimdez on 20/01/2017.
       */

      var OrderModule = /*#__PURE__*/_createClass(function OrderModule() {
        _classCallCheck(this, OrderModule);
      });

      OrderModule.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [OrderPipe],
          exports: [OrderPipe],
          providers: [OrderPipe]
        }]
      }];
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ngx-order-pipe.js.map

      /***/
    },

    /***/
    "gK9Q":
    /*!*****************************************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/estoque/marcas/services/marcas.service.ts ***!
      \*****************************************************************************************/

    /*! exports provided: TecnologiaInformacaoEstoqueMarcasService */

    /***/
    function gK9Q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoEstoqueMarcasService", function () {
        return TecnologiaInformacaoEstoqueMarcasService;
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


      var TecnologiaInformacaoEstoqueMarcasService = /*#__PURE__*/function () {
        function TecnologiaInformacaoEstoqueMarcasService(http) {
          _classCallCheck(this, TecnologiaInformacaoEstoqueMarcasService);

          this.http = http;
          this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API;
        }

        _createClass(TecnologiaInformacaoEstoqueMarcasService, [{
          key: "getMarcas",
          value: function getMarcas(params) {
            return this.http.get("".concat(this.API, "/tecnologia-informacao/estoque/produtos/marcas"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "postMarcas",
          value: function postMarcas(marca) {
            return this.http.post("".concat(this.API, "/tecnologia-informacao/estoque/produtos/marcas"), marca, {
              observe: 'response'
            });
          }
        }]);

        return TecnologiaInformacaoEstoqueMarcasService;
      }();

      TecnologiaInformacaoEstoqueMarcasService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      TecnologiaInformacaoEstoqueMarcasService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], TecnologiaInformacaoEstoqueMarcasService);
      /***/
    },

    /***/
    "hMv8":
    /*!*************************************************************************!*\
      !*** ./src/app/modules/admin/submodulos/services/submodulos.service.ts ***!
      \*************************************************************************/

    /*! exports provided: AdminSubModulosService */

    /***/
    function hMv8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminSubModulosService", function () {
        return AdminSubModulosService;
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

      var AdminSubModulosService = /*#__PURE__*/function () {
        function AdminSubModulosService(http) {
          _classCallCheck(this, AdminSubModulosService);

          this.http = http;
          this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API;
        }

        _createClass(AdminSubModulosService, [{
          key: "getSubModulos",
          value: function getSubModulos() {
            var submodulo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return this.http.get("".concat(this.API, "/core/submodulos"), {
              params: submodulo,
              observe: "response"
            });
          }
        }, {
          key: "getSubModulo",
          value: function getSubModulo(id) {
            return this.http.get("".concat(this.API, "/core/submodulos/").concat(id), {
              observe: "response"
            });
          }
        }, {
          key: "postSubModulo",
          value: function postSubModulo(subModulo) {
            return this.http.post("".concat(this.API, "/core/submodulos"), subModulo, {
              observe: "response"
            });
          }
        }]);

        return AdminSubModulosService;
      }();

      AdminSubModulosService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      AdminSubModulosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], AdminSubModulosService);
      /***/
    },

    /***/
    "hjNq":
    /*!*****************************************************************************************!*\
      !*** ./src/app/modules/logistica/dashboards/conferencia-cte/conferencia-cte.service.ts ***!
      \*****************************************************************************************/

    /*! exports provided: LogisticaDashboardConferenciaCteService */

    /***/
    function hjNq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaDashboardConferenciaCteService", function () {
        return LogisticaDashboardConferenciaCteService;
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

      var LogisticaDashboardConferenciaCteService = /*#__PURE__*/function () {
        function LogisticaDashboardConferenciaCteService(http) {
          _classCallCheck(this, LogisticaDashboardConferenciaCteService);

          this.http = http;
          this.API = "https://crm360.monterrey.com.bo/api";
        }

        _createClass(LogisticaDashboardConferenciaCteService, [{
          key: "getConferencia",
          value: function getConferencia(params) {
            return this.http.get("".concat(this.API, "/logistica/indicadores/conferencia-cte"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "getRelatorio",
          value: function getRelatorio(params) {
            return this.http.get("".concat(this.API, "/logistica/indicadores/conferencia-cte/relatorio"), {
              params: params,
              observe: 'response'
            });
          }
        }]);

        return LogisticaDashboardConferenciaCteService;
      }();

      LogisticaDashboardConferenciaCteService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      LogisticaDashboardConferenciaCteService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], LogisticaDashboardConferenciaCteService);
      /***/
    },

    /***/
    "j4Bn":
    /*!*****************************************************************************************!*\
      !*** ./src/app/modules/logistica/yms/tipos-circuito/services/tipos-circuito.service.ts ***!
      \*****************************************************************************************/

    /*! exports provided: LogisticaYmsTiposCircuitoService */

    /***/
    function j4Bn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaYmsTiposCircuitoService", function () {
        return LogisticaYmsTiposCircuitoService;
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


      var LogisticaYmsTiposCircuitoService = /*#__PURE__*/function () {
        function LogisticaYmsTiposCircuitoService(http) {
          _classCallCheck(this, LogisticaYmsTiposCircuitoService);

          this.http = http;
          this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API;
        }

        _createClass(LogisticaYmsTiposCircuitoService, [{
          key: "getTiposCircuito",
          value: function getTiposCircuito(params) {
            return this.http.get("".concat(this.API, "/logistica/yms/circuitos/tipo"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "postTiposCircuito",
          value: function postTiposCircuito(tipo) {
            return this.http.post("".concat(this.API, "/logistica/yms/circuitos/tipo"), tipo, {
              observe: 'response'
            });
          }
        }]);

        return LogisticaYmsTiposCircuitoService;
      }();

      LogisticaYmsTiposCircuitoService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      LogisticaYmsTiposCircuitoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], LogisticaYmsTiposCircuitoService);
      /***/
    },

    /***/
    "jhlZ":
    /*!**********************************************************************************************!*\
      !*** ./src/app/modules/logistica/dashboards/analise-frete/services/analise-frete.service.ts ***!
      \**********************************************************************************************/

    /*! exports provided: LogisticaDashboardsAnaliseFreteService */

    /***/
    function jhlZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaDashboardsAnaliseFreteService", function () {
        return LogisticaDashboardsAnaliseFreteService;
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

      var LogisticaDashboardsAnaliseFreteService = /*#__PURE__*/function () {
        function LogisticaDashboardsAnaliseFreteService(http) {
          _classCallCheck(this, LogisticaDashboardsAnaliseFreteService);

          this.http = http;
          this.API = "https://crm360.monterrey.com.bo/api";
        }

        _createClass(LogisticaDashboardsAnaliseFreteService, [{
          key: "getIndicadores",
          value: function getIndicadores(params) {
            return this.http.get("".concat(this.API, "/logistica/dashboards/analise-frete"), {
              params: params,
              observe: "response"
            });
          }
        }, {
          key: "getRotulos",
          value: function getRotulos(params) {
            return this.http.get("".concat(this.API, "/logistica/dashboards/analise-frete/rotulos"), {
              params: params,
              observe: "response"
            });
          }
        }]);

        return LogisticaDashboardsAnaliseFreteService;
      }();

      LogisticaDashboardsAnaliseFreteService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      LogisticaDashboardsAnaliseFreteService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], LogisticaDashboardsAnaliseFreteService);
      /***/
    },

    /***/
    "n2Rm":
    /*!********************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/motivo-associacao/motivo-associacao.service.ts ***!
      \********************************************************************************************/

    /*! exports provided: ComercialCadastrosMotivoAssociacaoService */

    /***/
    function n2Rm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosMotivoAssociacaoService", function () {
        return ComercialCadastrosMotivoAssociacaoService;
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

      var ComercialCadastrosMotivoAssociacaoService = /*#__PURE__*/function () {
        function ComercialCadastrosMotivoAssociacaoService(http) {
          _classCallCheck(this, ComercialCadastrosMotivoAssociacaoService);

          this.http = http;
          this.API = "http://23.254.204.187/api/comercial/cadastros/motivo-associacao";
        }

        _createClass(ComercialCadastrosMotivoAssociacaoService, [{
          key: "getListaMotivosAssociacao",
          value: function getListaMotivosAssociacao(params) {
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
          value: function getAlteracoes(codMotivoAssociacao) {
            return this.http.get("".concat(this.API, "/alteracoes/").concat(codMotivoAssociacao)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getDetalhes",
          value: function getDetalhes(codMotivoAssociacao) {
            return this.http.get("".concat(this.API, "/detalhes/").concat(codMotivoAssociacao)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "saveMotivoAssociacao",
          value: function saveMotivoAssociacao(motivoAssociacao) {
            return this.http.post("".concat(this.API, "/salvar"), motivoAssociacao).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "updateMotivoAssociacao",
          value: function updateMotivoAssociacao(motivoAssociacao) {
            return this.http.put("".concat(this.API, "/atualizar"), motivoAssociacao).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "save",
          value: function save(motivoAssociacao) {
            if (motivoAssociacao.codMotivoAssociacao !== null) {
              return this.updateMotivoAssociacao(motivoAssociacao);
            }

            return this.saveMotivoAssociacao(motivoAssociacao);
          }
        }, {
          key: "activateMotivoAssociacao",
          value: function activateMotivoAssociacao(codigo) {
            return this.http.post("".concat(this.API, "/ativar"), codigo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "inactivateMotivoAssociacao",
          value: function inactivateMotivoAssociacao(codigo) {
            return this.http.post("".concat(this.API, "/inativar"), codigo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }]);

        return ComercialCadastrosMotivoAssociacaoService;
      }();

      ComercialCadastrosMotivoAssociacaoService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      ComercialCadastrosMotivoAssociacaoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ComercialCadastrosMotivoAssociacaoService);
      /***/
    },

    /***/
    "n8zn":
    /*!***********************************************************************!*\
      !*** ./src/app/modules/servicos/contatos/services/contato.service.ts ***!
      \***********************************************************************/

    /*! exports provided: ContatoService */

    /***/
    function n8zn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContatoService", function () {
        return ContatoService;
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

      var ContatoService = /*#__PURE__*/function () {
        function ContatoService(http) {
          _classCallCheck(this, ContatoService);

          this.http = http;
          this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API;
        }

        _createClass(ContatoService, [{
          key: "get",
          value: function get(params) {
            return this.http.get("".concat(this.API, "/servicos/contatos"), {
              observe: "response",
              params: params
            });
          }
        }]);

        return ContatoService;
      }();

      ContatoService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      ContatoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ContatoService);
      /***/
    },

    /***/
    "nNBc":
    /*!*************************************************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/contratos/tipo-item/services/tipo-item.service.ts ***!
      \*************************************************************************************************/

    /*! exports provided: TecnologiaInformacaoCadastroTipoItemService */

    /***/
    function nNBc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoCadastroTipoItemService", function () {
        return TecnologiaInformacaoCadastroTipoItemService;
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


      var TecnologiaInformacaoCadastroTipoItemService = /*#__PURE__*/function () {
        function TecnologiaInformacaoCadastroTipoItemService(http) {
          _classCallCheck(this, TecnologiaInformacaoCadastroTipoItemService);

          this.http = http;
          this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API;
        }

        _createClass(TecnologiaInformacaoCadastroTipoItemService, [{
          key: "getTipoItem",
          value: function getTipoItem(params) {
            return this.http.get("".concat(this.API, "/tecnologia-informacao/item/tipo-item"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "postTipoItem",
          value: function postTipoItem(tipoItem) {
            return this.http.post("".concat(this.API, "/tecnologia-informacao/item/tipo-item"), tipoItem, {
              observe: 'response'
            });
          }
        }]);

        return TecnologiaInformacaoCadastroTipoItemService;
      }();

      TecnologiaInformacaoCadastroTipoItemService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      TecnologiaInformacaoCadastroTipoItemService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], TecnologiaInformacaoCadastroTipoItemService);
      /***/
    },

    /***/
    "pK9/":
    /*!***********************************************************************************************!*\
      !*** ./src/app/modules/comercial/gestao/contratos-comerciais/contratos-comerciais.service.ts ***!
      \***********************************************************************************************/

    /*! exports provided: ComercialGestaoContratosComerciaisService */

    /***/
    function pK9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialGestaoContratosComerciaisService", function () {
        return ComercialGestaoContratosComerciaisService;
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

      var ComercialGestaoContratosComerciaisService = /*#__PURE__*/function () {
        function ComercialGestaoContratosComerciaisService(http) {
          _classCallCheck(this, ComercialGestaoContratosComerciaisService);

          this.http = http;
          this.API = "http://23.254.204.187/api/comercial/gestao/contratos-comerciais";
        }

        _createClass(ComercialGestaoContratosComerciaisService, [{
          key: "getListaContratos",
          value: function getListaContratos(params) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/lista"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getListaRepresentantes",
          value: function getListaRepresentantes() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/lista"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getDetailPanel",
          value: function getDetailPanel(codContrato) {
            return this.http.get("".concat(this.API, "/detail-panel/").concat(codContrato)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getDetalhes",
          value: function getDetalhes(codContrato) {
            return this.http.get("".concat(this.API, "/detalhes/").concat(codContrato)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "aprovaReprovaEndereco",
          value: function aprovaReprovaEndereco(record) {
            return this.http.put("".concat(this.API, "/aprova-reprova-endereco"), record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getUltimaCompra",
          value: function getUltimaCompra(codCliente) {
            return this.http.get("".concat(this.API, "/ultima-compra/").concat(codCliente)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "saveContrato",
          value: function saveContrato(record) {
            return this.http.post("".concat(this.API, "/save"), record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "updateContrato",
          value: function updateContrato(record) {
            return this.http.put("".concat(this.API, "/atualizar"), record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "save",
          value: function save(record, action) {
            if (action === 'update') {
              return this.updateContrato(record);
            }

            return this.saveContrato(record);
          }
        }, {
          key: "getSituacao",
          value: function getSituacao() {
            return this.http.get("".concat(this.API, "/situacao")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getTiposFrete",
          value: function getTiposFrete() {
            return this.http.get("".concat(this.API, "/tipos-frete")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getTipoServico",
          value: function getTipoServico() {
            return this.http.get("".concat(this.API, "/tipo-servico")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "postAprovacao",
          value: function postAprovacao(params) {
            return this.http.post("".concat(this.API, "/aprovar"), params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "postReprovacao",
          value: function postReprovacao(params) {
            return this.http.post("".concat(this.API, "/reprovar"), params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getAnexos",
          value: function getAnexos(codContrato) {
            return this.http.get("".concat(this.API, "/anexo/documentos/").concat(codContrato)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "postAnexos",
          value: function postAnexos(params, codContrato) {
            return this.http.post("".concat(this.API, "/anexo/documentos/salvar?codContrato=").concat(codContrato), params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "deleteAnexo",
          value: function deleteAnexo(codAnexo) {
            var params = {
              codAnexo: codAnexo
            };
            return this.http.put("".concat(this.API, "/anexo/documentos/excluir"), params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
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
        }]);

        return ComercialGestaoContratosComerciaisService;
      }();

      ComercialGestaoContratosComerciaisService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      ComercialGestaoContratosComerciaisService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ComercialGestaoContratosComerciaisService);
      /***/
    },

    /***/
    "sCnT":
    /*!****************************************************!*\
      !*** ./src/app/core/not-found/not-found.module.ts ***!
      \****************************************************/

    /*! exports provided: NotFoundModule */

    /***/
    function sCnT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotFoundModule", function () {
        return NotFoundModule;
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


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var _not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./not-found.component */
      "6nXq"); // Modules
      // Components


      var NotFoundModule = /*#__PURE__*/_createClass(function NotFoundModule() {
        _classCallCheck(this, NotFoundModule);
      });

      NotFoundModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]],
        exports: [_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"]]
      })], NotFoundModule);
      /***/
    },

    /***/
    "tQmC":
    /*!***********************************************************************!*\
      !*** ./node_modules/@amcharts/amcharts4/.internal/themes/animated.js ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function tQmC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_Registry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../core/Registry */
      "hM+/");

      var theme = function theme(object) {
        if (Object(_core_Registry__WEBPACK_IMPORTED_MODULE_0__["is"])(object, "SpriteState")) {
          object.transitionDuration = 400;
        }

        if (Object(_core_Registry__WEBPACK_IMPORTED_MODULE_0__["is"])(object, "Component")) {
          object.rangeChangeDuration = 500;
          object.interpolationDuration = 500;
          object.sequencedInterpolation = false;

          if (Object(_core_Registry__WEBPACK_IMPORTED_MODULE_0__["is"])(object, "SankeyDiagram")) {
            object.sequencedInterpolation = true;
          }

          if (Object(_core_Registry__WEBPACK_IMPORTED_MODULE_0__["is"])(object, "FunnelSeries")) {
            object.sequencedInterpolation = true;
          }
        }

        if (Object(_core_Registry__WEBPACK_IMPORTED_MODULE_0__["is"])(object, "Chart")) {
          object.defaultState.transitionDuration = 2000;
          object.hiddenState.transitionDuration = 1000;
        }

        if (Object(_core_Registry__WEBPACK_IMPORTED_MODULE_0__["is"])(object, "Tooltip")) {
          object.animationDuration = 400;
          object.defaultState.transitionDuration = 400;
          object.hiddenState.transitionDuration = 400;
        }

        if (Object(_core_Registry__WEBPACK_IMPORTED_MODULE_0__["is"])(object, "Scrollbar")) {
          object.animationDuration = 500;
        }

        if (Object(_core_Registry__WEBPACK_IMPORTED_MODULE_0__["is"])(object, "Series")) {
          object.defaultState.transitionDuration = 1000;
          object.hiddenState.transitionDuration = 700;
          object.hiddenState.properties.opacity = 1;
          object.showOnInit = true;
        }

        if (Object(_core_Registry__WEBPACK_IMPORTED_MODULE_0__["is"])(object, "MapSeries")) {
          object.hiddenState.properties.opacity = 0;
        }

        if (Object(_core_Registry__WEBPACK_IMPORTED_MODULE_0__["is"])(object, "PercentSeries")) {
          object.hiddenState.properties.opacity = 0;
        }

        if (Object(_core_Registry__WEBPACK_IMPORTED_MODULE_0__["is"])(object, "FunnelSlice")) {
          object.defaultState.transitionDuration = 800;
          object.hiddenState.transitionDuration = 1000;
          object.hiddenState.properties.opacity = 1;
        }

        if (Object(_core_Registry__WEBPACK_IMPORTED_MODULE_0__["is"])(object, "Slice")) {
          object.defaultState.transitionDuration = 700;
          object.hiddenState.transitionDuration = 1000;
          object.hiddenState.properties.opacity = 1;
        }

        if (Object(_core_Registry__WEBPACK_IMPORTED_MODULE_0__["is"])(object, "Preloader")) {
          object.hiddenState.transitionDuration = 2000;
        }

        if (Object(_core_Registry__WEBPACK_IMPORTED_MODULE_0__["is"])(object, "Column")) {
          object.defaultState.transitionDuration = 700;
          object.hiddenState.transitionDuration = 1000;
          object.hiddenState.properties.opacity = 1;
        }

        if (Object(_core_Registry__WEBPACK_IMPORTED_MODULE_0__["is"])(object, "Column3D")) {
          object.hiddenState.properties.opacity = 0;
        }
      };
      /* harmony default export */


      __webpack_exports__["default"] = theme; //# sourceMappingURL=animated.js.map

      /***/
    },

    /***/
    "u3MO":
    /*!***********************************************************************!*\
      !*** ./node_modules/@amcharts/amcharts4/.internal/themes/material.js ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function u3MO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_Registry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../core/Registry */
      "hM+/");
      /* harmony import */


      var _core_utils_Color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../core/utils/Color */
      "A9VE");

      var theme = function theme(object) {
        if (Object(_core_Registry__WEBPACK_IMPORTED_MODULE_0__["is"])(object, "ColorSet")) {
          object.list = [Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#F44336"), Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#E91E63"), Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#9C27B0"), Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#673AB7"), Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#3F51B5"), Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#2196F3"), Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#03A9F4"), Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#00BCD4"), Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#009688"), Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#4CAF50"), Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#8BC34A"), Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#CDDC39"), Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#FFEB3B"), Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#FFC107"), Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#FF9800"), Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#FF5722"), Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#795548"), Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#9E9E9E"), Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#607D8B")];
          object.minLightness = 0.2;
          object.maxLightness = 0.7;
          object.reuse = true;
        }

        if (Object(_core_Registry__WEBPACK_IMPORTED_MODULE_0__["is"])(object, "ResizeButton")) {
          object.background.cornerRadiusTopLeft = 20;
          object.background.cornerRadiusTopRight = 20;
          object.background.cornerRadiusBottomLeft = 20;
          object.background.cornerRadiusBottomRight = 20;
        }

        if (Object(_core_Registry__WEBPACK_IMPORTED_MODULE_0__["is"])(object, "Tooltip")) {
          object.animationDuration = 800;
        }
      };
      /* harmony default export */


      __webpack_exports__["default"] = theme; //# sourceMappingURL=material.js.map

      /***/
    },

    /***/
    "uO4K":
    /*!***********************************************************************************!*\
      !*** ./src/app/modules/logistica/yms/tipos-setor/services/tipos-setor.service.ts ***!
      \***********************************************************************************/

    /*! exports provided: LogisticaYmsTiposSetorService */

    /***/
    function uO4K(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaYmsTiposSetorService", function () {
        return LogisticaYmsTiposSetorService;
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


      var LogisticaYmsTiposSetorService = /*#__PURE__*/function () {
        function LogisticaYmsTiposSetorService(http) {
          _classCallCheck(this, LogisticaYmsTiposSetorService);

          this.http = http;
          this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API;
        }

        _createClass(LogisticaYmsTiposSetorService, [{
          key: "getTiposSetor",
          value: function getTiposSetor(params) {
            return this.http.get("".concat(this.API, "/logistica/yms/setores/tipo"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "getTipo",
          value: function getTipo(id) {
            return this.http.get("".concat(this.API, "/logistica/yms/setores/tipo/").concat(id), {
              observe: 'response'
            });
          }
        }, {
          key: "postTiposSetor",
          value: function postTiposSetor(tipo) {
            return this.http.post("".concat(this.API, "/logistica/yms/setores/tipo"), tipo, {
              observe: 'response'
            });
          }
        }]);

        return LogisticaYmsTiposSetorService;
      }();

      LogisticaYmsTiposSetorService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      LogisticaYmsTiposSetorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], LogisticaYmsTiposSetorService);
      /***/
    },

    /***/
    "v9B3":
    /*!***************************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/tipos-comissionamento/tipo-comissionamento.service.ts ***!
      \***************************************************************************************************/

    /*! exports provided: ComercialCadastrosTipoComissionamentoService */

    /***/
    function v9B3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosTipoComissionamentoService", function () {
        return ComercialCadastrosTipoComissionamentoService;
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

      var ComercialCadastrosTipoComissionamentoService = /*#__PURE__*/function () {
        function ComercialCadastrosTipoComissionamentoService(http) {
          _classCallCheck(this, ComercialCadastrosTipoComissionamentoService);

          this.http = http;
          this.API = "http://23.254.204.187/api/comercial/cadastros/tipo-comissionamento";
        }

        _createClass(ComercialCadastrosTipoComissionamentoService, [{
          key: "getTipoComissionamento",
          value: function getTipoComissionamento(params) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/lista"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
          }
        }, {
          key: "getAlteracoes",
          value: function getAlteracoes(codTipoComissionamento) {
            return this.http.get("".concat(this.API, "/alteracoes/").concat(codTipoComissionamento)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
          }
        }, {
          key: "getDetalhes",
          value: function getDetalhes(codTipoComissionamento) {
            return this.http.get("".concat(this.API, "/detalhes/").concat(codTipoComissionamento)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
          }
        }, {
          key: "getDetailTipoComissionamento",
          value: function getDetailTipoComissionamento(codTipoComissionamento) {
            return this.http.get("".concat(this.API, "/faixa-percentual/").concat(codTipoComissionamento)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
          }
        }, {
          key: "getFilterValues",
          value: function getFilterValues() {
            var linhas = this.getLinhas();
            var classes = this.getClasses(null);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])([linhas, classes]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
          }
        }, {
          key: "getLinhas",
          value: function getLinhas() {
            return this.http.get("".concat(this.API, "/linhas")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
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
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
          }
        }, {
          key: "saveTipoComissionamento",
          value: function saveTipoComissionamento(codTipoComissionamento) {
            return this.http.post("".concat(this.API, "/salvar"), codTipoComissionamento).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
          }
        }, {
          key: "updateTipoComissionamento",
          value: function updateTipoComissionamento(codTipoComissionamento) {
            return this.http.put("".concat(this.API, "/atualizar"), codTipoComissionamento).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
          }
        }, {
          key: "save",
          value: function save(codTipoComissionamento) {
            if (codTipoComissionamento.codTipoComissionamento !== null) {
              return this.updateTipoComissionamento(codTipoComissionamento);
            }

            return this.saveTipoComissionamento(codTipoComissionamento);
          }
        }, {
          key: "deleteFaixa",
          value: function deleteFaixa(params) {
            return this.http.put("".concat(this.API, "/delete"), params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
          }
        }, {
          key: "activateTipoComissionamento",
          value: function activateTipoComissionamento(codTipoComissionamento) {
            return this.http.post("".concat(this.API, "/ativar"), codTipoComissionamento).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
          }
        }, {
          key: "inactivateTipoComissionamento",
          value: function inactivateTipoComissionamento(codTipoComissionamento) {
            return this.http.post("".concat(this.API, "/inativar"), codTipoComissionamento).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
          }
        }]);

        return ComercialCadastrosTipoComissionamentoService;
      }();

      ComercialCadastrosTipoComissionamentoService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      ComercialCadastrosTipoComissionamentoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ComercialCadastrosTipoComissionamentoService);
      /***/
    },

    /***/
    "vGh7":
    /*!***********************************************************************************!*\
      !*** ./src/app/modules/logistica/yms/tipos-etapa/services/tipos-etapa.service.ts ***!
      \***********************************************************************************/

    /*! exports provided: LogisticaYmsTiposEtapaService */

    /***/
    function vGh7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaYmsTiposEtapaService", function () {
        return LogisticaYmsTiposEtapaService;
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


      var LogisticaYmsTiposEtapaService = /*#__PURE__*/function () {
        function LogisticaYmsTiposEtapaService(http) {
          _classCallCheck(this, LogisticaYmsTiposEtapaService);

          this.http = http;
          this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API;
        }

        _createClass(LogisticaYmsTiposEtapaService, [{
          key: "getTiposEtapa",
          value: function getTiposEtapa(params) {
            return this.http.get("".concat(this.API, "/logistica/yms/etapas/tipo"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "getTipo",
          value: function getTipo(id) {
            return this.http.get("".concat(this.API, "/logistica/yms/etapas/tipo/").concat(id), {
              observe: 'response'
            });
          }
        }, {
          key: "postTiposEtapa",
          value: function postTiposEtapa(tipo) {
            return this.http.post("".concat(this.API, "/logistica/yms/etapas/tipo"), tipo, {
              observe: 'response'
            });
          }
        }]);

        return LogisticaYmsTiposEtapaService;
      }();

      LogisticaYmsTiposEtapaService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      LogisticaYmsTiposEtapaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], LogisticaYmsTiposEtapaService);
      /***/
    },

    /***/
    "vpXL":
    /*!***************************************************************************!*\
      !*** ./src/app/modules/logistica/yms/setores/services/setores.service.ts ***!
      \***************************************************************************/

    /*! exports provided: LogisticaYmsSetoresService */

    /***/
    function vpXL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaYmsSetoresService", function () {
        return LogisticaYmsSetoresService;
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


      var LogisticaYmsSetoresService = /*#__PURE__*/function () {
        function LogisticaYmsSetoresService(http) {
          _classCallCheck(this, LogisticaYmsSetoresService);

          this.http = http;
          this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API;
        }

        _createClass(LogisticaYmsSetoresService, [{
          key: "getSetores",
          value: function getSetores(params) {
            return this.http.get("".concat(this.API, "/logistica/yms/setores"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "getSetor",
          value: function getSetor(id) {
            return this.http.get("".concat(this.API, "/logistica/yms/setores/").concat(id), {
              observe: 'response'
            });
          }
        }, {
          key: "postSetores",
          value: function postSetores(setores) {
            return this.http.post("".concat(this.API, "/logistica/yms/setores"), setores, {
              observe: 'response'
            });
          }
        }, {
          key: "postIntervalos",
          value: function postIntervalos(params) {
            return this.http.post("".concat(this.API, "/logistica/yms/setores/intervalos"), params, {
              observe: 'response'
            });
          }
        }, {
          key: "getIntervalos",
          value: function getIntervalos(params) {
            return this.http.get("".concat(this.API, "/logistica/yms/setores/intervalos"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "getMateriaisAssociados",
          value: function getMateriaisAssociados(params) {
            return this.http.get("".concat(this.API, "/logistica/yms/setores/materiais"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "getMateriais",
          value: function getMateriais(params) {
            return this.http.get("".concat(this.API, "/common/v2/materiais"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "deleteAssociacoes",
          value: function deleteAssociacoes(params) {
            return this.http["delete"]("".concat(this.API, "/logistica/yms/setores/materiais"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "postMateriaisAssociados",
          value: function postMateriaisAssociados(associacao) {
            return this.http.post("".concat(this.API, "/logistica/yms/setores/materiais"), associacao, {
              observe: 'response'
            });
          }
        }]);

        return LogisticaYmsSetoresService;
      }();

      LogisticaYmsSetoresService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      LogisticaYmsSetoresService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], LogisticaYmsSetoresService);
      /***/
    },

    /***/
    "w8N5":
    /*!***********************************************************************************************!*\
      !*** ./src/app/modules/logistica/cadastros/tipo-motorista/services/tipo-motorista.service.ts ***!
      \***********************************************************************************************/

    /*! exports provided: LogisticaTipoMotoristaService */

    /***/
    function w8N5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaTipoMotoristaService", function () {
        return LogisticaTipoMotoristaService;
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

      var LogisticaTipoMotoristaService = /*#__PURE__*/function () {
        function LogisticaTipoMotoristaService(http) {
          _classCallCheck(this, LogisticaTipoMotoristaService);

          this.http = http;
          this.API = "https://crm360.monterrey.com.bo/api";
        }

        _createClass(LogisticaTipoMotoristaService, [{
          key: "getTipoMotoristas",
          value: function getTipoMotoristas(params) {
            return this.http.get("".concat(this.API, "/logistica/tipo-motorista"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "postTipoMotorista",
          value: function postTipoMotorista(params) {
            return this.http.post("".concat(this.API, "/logistica/tipo-motorista"), params, {
              observe: 'response'
            });
          }
        }]);

        return LogisticaTipoMotoristaService;
      }();

      LogisticaTipoMotoristaService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      LogisticaTipoMotoristaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], LogisticaTipoMotoristaService);
      /***/
    },

    /***/
    "ylUn":
    /*!***********************************************************************!*\
      !*** ./src/app/modules/comercial/akna/mensagens/mensagens.service.ts ***!
      \***********************************************************************/

    /*! exports provided: ComercialAknaMensagensService */

    /***/
    function ylUn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialAknaMensagensService", function () {
        return ComercialAknaMensagensService;
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
      "IheW"); // services


      var ComercialAknaMensagensService = /*#__PURE__*/function () {
        function ComercialAknaMensagensService(http) {
          _classCallCheck(this, ComercialAknaMensagensService);

          this.http = http;
          this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API;
        }

        _createClass(ComercialAknaMensagensService, [{
          key: "getMensagens",
          value: function getMensagens(params) {
            return this.http.get("".concat(this.API, "/comercial/integracoes/akna/lista-mensagens"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "postMensagens",
          value: function postMensagens(mensagens) {
            return this.http.post("".concat(this.API, "/comercial/akna/mensagens"), mensagens, {
              observe: 'response'
            });
          }
        }]);

        return ComercialAknaMensagensService;
      }();

      ComercialAknaMensagensService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      ComercialAknaMensagensService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], ComercialAknaMensagensService);
      /***/
    },

    /***/
    "yw/Z":
    /*!*******************************************************************************!*\
      !*** ./src/app/modules/logistica/yms/circuitos/services/circuitos.service.ts ***!
      \*******************************************************************************/

    /*! exports provided: LogisticaYmsCircuitosService */

    /***/
    function ywZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaYmsCircuitosService", function () {
        return LogisticaYmsCircuitosService;
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


      var LogisticaYmsCircuitosService = /*#__PURE__*/function () {
        function LogisticaYmsCircuitosService(http) {
          _classCallCheck(this, LogisticaYmsCircuitosService);

          this.http = http;
          this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API;
        }

        _createClass(LogisticaYmsCircuitosService, [{
          key: "getCircuitos",
          value: function getCircuitos(params) {
            return this.http.get("".concat(this.API, "/logistica/yms/circuitos"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "getCircuito",
          value: function getCircuito(id) {
            return this.http.get("".concat(this.API, "/logistica/yms/circuitos/").concat(id), {
              observe: 'response'
            });
          }
        }, {
          key: "postCircuitos",
          value: function postCircuitos(circuitos) {
            return this.http.post("".concat(this.API, "/logistica/yms/circuitos"), circuitos, {
              observe: 'response'
            });
          }
        }, {
          key: "getEtapasAssociados",
          value: function getEtapasAssociados(params) {
            return this.http.get("".concat(this.API, "/logistica/yms/circuitos/etapas"), {
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
            return this.http["delete"]("".concat(this.API, "/logistica/yms/circuitos/etapas"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "postEtapasAssociados",
          value: function postEtapasAssociados(associacao) {
            return this.http.post("".concat(this.API, "/logistica/yms/circuitos/etapas"), associacao, {
              observe: 'response'
            });
          }
        }]);

        return LogisticaYmsCircuitosService;
      }();

      LogisticaYmsCircuitosService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      LogisticaYmsCircuitosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], LogisticaYmsCircuitosService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map