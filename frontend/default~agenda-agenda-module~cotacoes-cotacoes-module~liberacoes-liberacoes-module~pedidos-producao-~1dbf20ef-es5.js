(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~agenda-agenda-module~cotacoes-cotacoes-module~liberacoes-liberacoes-module~pedidos-producao-~1dbf20ef"], {
    /***/
    "nkG6":
    /*!**************************************************************!*\
      !*** ./src/app/modules/comercial/estoque/estoque.service.ts ***!
      \**************************************************************/

    /*! exports provided: ComercialEstoqueService */

    /***/
    function nkG6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialEstoqueService", function () {
        return ComercialEstoqueService;
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
      /*! ../comercial.service */
      "VgqD");
      /* harmony import */


      var _tid_software_tid_software_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../tid-software/tid-software.service */
      "zN97"); // Services


      var ComercialEstoqueService = /*#__PURE__*/function () {
        function ComercialEstoqueService(http, comercialService, tidSoftwareService) {
          _classCallCheck(this, ComercialEstoqueService);

          this.http = http;
          this.comercialService = comercialService;
          this.tidSoftwareService = tidSoftwareService;
          this.API = "http://23.254.204.187/api/comercial/estoque";
        }

        _createClass(ComercialEstoqueService, [{
          key: "getFiltros",
          value: function getFiltros() {
            /* Almacen */
            var almacenes = this.comercialService.getAlmacen();
            /* Familia */

            var classes = this.comercialService.getClasses(null);
            var depositos = this.comercialService.getDepositos({
              grupoManetoni: 1
            });
            var sucursales = this.comercialService.getEscritorios();
            var empresas = this.tidSoftwareService.getEmpresas('estoques');
            var linhas = this.tidSoftwareService.getLinhas();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])([almacenes, classes, depositos, sucursales, empresas, linhas]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }, {
          key: "getEstoqueAtual",
          value: function getEstoqueAtual(params) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/estoque-atual"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }, {
          key: "getOutrasUnidades",
          value: function getOutrasUnidades(id) {
            return this.http.get("".concat(this.API, "/outras-unidades/").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }, {
          key: "getPedidosCompra",
          value: function getPedidosCompra(params) {
            return this.http.get("".concat(this.API, "/pedidos-compra/").concat(params.idMaterial, "/").concat(params.idEmpresa)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }, {
          key: "getComprometido",
          value: function getComprometido(params) {
            return this.http.get("".concat(this.API, "/estoque-comprometido/").concat(params.idMaterial, "/").concat(params.idEmpresa)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }, {
          key: "getLote",
          value: function getLote(params) {
            return this.http.get("".concat(this.API, "/lote/").concat(params.idMaterial, "/").concat(params.idEmpresa)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }, {
          key: "getEstoqueSuspenso",
          value: function getEstoqueSuspenso(params) {
            return this.http.get("".concat(this.API, "/estoque-suspenso/").concat(params.idMaterial, "/").concat(params.idEmpresa)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }, {
          key: "getStockComprometido",
          value: function getStockComprometido(params) {
            return this.http.get("".concat(this.API, "/estoquecomprometido/").concat(params.idMaterial)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }, {
          key: "getStockSuspeso",
          value: function getStockSuspeso(params) {
            return this.http.get("".concat(this.API, "/estoquesuspenso/").concat(params.idMaterial)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }]);

        return ComercialEstoqueService;
      }();

      ComercialEstoqueService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _comercial_service__WEBPACK_IMPORTED_MODULE_5__["ComercialService"]
        }, {
          type: _tid_software_tid_software_service__WEBPACK_IMPORTED_MODULE_6__["ComercialTidSoftwareService"]
        }];
      };

      ComercialEstoqueService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _comercial_service__WEBPACK_IMPORTED_MODULE_5__["ComercialService"], _tid_software_tid_software_service__WEBPACK_IMPORTED_MODULE_6__["ComercialTidSoftwareService"]])], ComercialEstoqueService);
      /***/
    },

    /***/
    "uuri":
    /*!*****************************************************************************!*\
      !*** ./src/app/modules/comercial/ciclo-vendas/cotacoes/cotacoes.service.ts ***!
      \*****************************************************************************/

    /*! exports provided: ComercialCicloVendasCotacoesService */

    /***/
    function uuri(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCicloVendasCotacoesService", function () {
        return ComercialCicloVendasCotacoesService;
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


      var _comercial_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../comercial.service */
      "VgqD");
      /* harmony import */


      var _tid_software_tid_software_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../tid-software/tid-software.service */
      "zN97");
      /* harmony import */


      var _estoque_estoque_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../estoque/estoque.service */
      "nkG6"); // Services


      var ComercialCicloVendasCotacoesService = /*#__PURE__*/function () {
        function ComercialCicloVendasCotacoesService(http, comercialService, tidSoftwareService, estoqueService) {
          _classCallCheck(this, ComercialCicloVendasCotacoesService);

          this.http = http;
          this.comercialService = comercialService;
          this.tidSoftwareService = tidSoftwareService;
          this.estoqueService = estoqueService;
          this.API = "http://23.254.204.187/api/comercial/ciclo-vendas/cotacoes";
        }

        _createClass(ComercialCicloVendasCotacoesService, [{
          key: "getIdOferta",
          value: function getIdOferta() {
            return this.http.get("".concat(this.API, "/oferta_id")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getPermissoesAcesso",
          value: function getPermissoesAcesso() {
            return this.http.get("".concat(this.API, "/permissoes-acesso")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getCotacoes",
          value: function getCotacoes(params) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/lista"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getOfertas",
          value: function getOfertas(params) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
            return this.http.get("".concat(this.API, "/lista_cotizacion"), {
              params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getDetalleOferta",
          value: function getDetalleOferta(params) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
            return this.http.get("".concat(this.API, "/oferta_detalle"), {
              params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getDetalhesCotacoes",
          value: function getDetalhesCotacoes(codEmpresa, nrPedido) {
            return this.http.get("".concat(this.API, "/detalhes/").concat(codEmpresa, "/").concat(nrPedido)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getDetalhesPedidos",
          value: function getDetalhesPedidos(nrPedido) {
            return this.http.get("".concat(this.API, "/detalhes/").concat(nrPedido)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getMateriaisCotacao",
          value: function getMateriaisCotacao(codEmpresa, nrPedido) {
            return this.http.get("".concat(this.API, "/materiais/detalhes/").concat(codEmpresa, "/").concat(nrPedido)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getSituacaoLiberacao",
          value: function getSituacaoLiberacao(params) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/situacao-liberacao"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "postTransfereFaturamento",
          value: function postTransfereFaturamento(params) {
            return this.http.post("".concat(this.API, "/transfere-faturamento"), params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "postTrocarCliente",
          value: function postTrocarCliente(params) {
            return this.http.post("".concat(this.API, "/trocar/cliente"), params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "postDuplicarProposta",
          value: function postDuplicarProposta(params) {
            return this.http.post("".concat(this.API, "/duplicar-proposta"), params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "postDesdobrarProposta",
          value: function postDesdobrarProposta(params) {
            return this.http.post("".concat(this.API, "/desdobrar-proposta"), params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "postTrocarEmpresa",
          value: function postTrocarEmpresa(params) {
            return this.http.post("".concat(this.API, "/trocar/empresa"), params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getImprimirCotacao",
          value: function getImprimirCotacao(nrPedido, codEmpresa) {
            return this.http.get("".concat(this.API, "/imprimir-cotacao/").concat(nrPedido, "/").concat(codEmpresa)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getImprimirSeparacao",
          value: function getImprimirSeparacao(nrPedido, codEmpresa) {
            return this.http.get("".concat(this.API, "/imprimir-separacao/").concat(nrPedido, "/").concat(codEmpresa)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "postEmailCotacao",
          value: function postEmailCotacao(params) {
            return this.http.post("".concat(this.API, "/email-cotacao"), params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1) // ,
            // retry(2)
            );
          }
        }, {
          key: "getReservarIdCotacao",
          value: function getReservarIdCotacao(params) {
            return this.http.get("".concat(this.API, "/reservar"), {
              params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getCotacao",
          value: function getCotacao(codCotacao, idEmpresa) {
            return this.http.get("".concat(this.API, "/").concat(codCotacao, "/").concat(idEmpresa)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getCotacaoFilterValues",
          value: function getCotacaoFilterValues() {
            var linhas = this.tidSoftwareService.getLinhas();
            var classes = this.comercialService.getClasses(null);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])([linhas, classes]);
          }
        }, {
          key: "getMateriais",
          value: function getMateriais(params) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/materiais"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getEstoqueDetalhes",
          value: function getEstoqueDetalhes(params) {
            return this.estoqueService.getEstoqueAtual(params);
          }
        }, {
          key: "getEstoqueDepositos",
          value: function getEstoqueDepositos(codDeposito, codMaterial) {
            return this.http.get("".concat(this.API, "/materiais/estoque-depositos/").concat(codMaterial, "/").concat(codDeposito)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "descuentoCliente",
          value: function descuentoCliente(params) {
            return this.http.get("".concat(this.API, "/descuento_cliente"), {
              params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getMateriaisCombo",
          value: function getMateriaisCombo(codEmpresa, codMaterial, codCliente, codEndereco, codFormaPagamento, freteConta) {
            return this.http.get("".concat(this.API, "/materiais/combo/").concat(codEmpresa, "/").concat(codMaterial), {
              params: {
                codCliente: codCliente,
                codEndereco: codEndereco,
                codFormaPagamento: codFormaPagamento,
                freteConta: freteConta
              }
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "postVendasGerais",
          value: function postVendasGerais(params) {
            return this.http.post("".concat(this.API, "/materiais/relacionados/vendas"), params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "postVendasCliente",
          value: function postVendasCliente(params) {
            return this.http.post("".concat(this.API, "/materiais/relacionados/cliente"), params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "postMateriaisRelacionados",
          value: function postMateriaisRelacionados(params) {
            return this.http.post("".concat(this.API, "/materiais/relacionados"), params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "postMaterialesRelacionados",
          value: function postMaterialesRelacionados(params) {
            return this.http.post("".concat(this.API, "/materiales/relacionados"), params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getFichaCadastralMaterial",
          value: function getFichaCadastralMaterial(codMaterial) {
            return this.http.get("".concat(this.API, "/material/ficha-cadastral/").concat(codMaterial)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getSimilaridadeMaterial",
          value: function getSimilaridadeMaterial(codEmpresa, codMaterial, codCliente, codEndereco, codFormaPagamento, freteConta) {
            return this.http.get("".concat(this.API, "/material/similaridade/").concat(codEmpresa, "/").concat(codMaterial), {
              params: {
                codEndereco: codEndereco,
                codCliente: codCliente,
                codFormaPagamento: codFormaPagamento,
                freteConta: freteConta
              }
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getTipoCalculoMaterial",
          value: function getTipoCalculoMaterial(codMaterial, codFormaPagamento) {
            return this.http.get("".concat(this.API, "/material/tipo-calculo/").concat(codMaterial), {
              params: {
                codFormaPagamento: codFormaPagamento
              }
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "postCalculoMaterial",
          value: function postCalculoMaterial(params) {
            return this.http.post("".concat(this.API, "/material/calculo"), params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getHistoricoCompras",
          value: function getHistoricoCompras(params) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/historico-compras"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "postGerarDuplicatas",
          value: function postGerarDuplicatas(params) {
            return this.http.post("".concat(this.API, "/duplicatas/gerar"), params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "postAlterarDuplicatas",
          value: function postAlterarDuplicatas(params) {
            return this.http.post("".concat(this.API, "/duplicatas/alterar"), params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getDuplicatas",
          value: function getDuplicatas(params) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/duplicatas/consulta"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "deleteMaterialCotacao",
          value: function deleteMaterialCotacao(params) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http["delete"]("".concat(this.API, "/materiais/excluir"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getHistoricoExclusao",
          value: function getHistoricoExclusao(params) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/historico-exclusao"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "postCotacao",
          value: function postCotacao(params) {
            return this.http.post("".concat(this.API, "/salvar"), params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "postCotizacion",
          value: function postCotizacion(params) {
            return this.http.post("".concat(this.API, "/guardar"), params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "putCotacao",
          value: function putCotacao(params) {
            return this.http.put("".concat(this.API, "/atualizar"), params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "postCotacaoPerdida",
          value: function postCotacaoPerdida(params) {
            return this.http.post("".concat(this.API, "/perdida/salvar"), params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getComissaoCotacao",
          value: function getComissaoCotacao(codCotacao, codEmpresa) {
            return this.http.get("".concat(this.API, "/comissao/").concat(codCotacao, "/").concat(codEmpresa)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getProgressoCotacao",
          value: function getProgressoCotacao(codCotacao, codEmpresa) {
            return this.http.get("".concat(this.API, "/progresso/").concat(codCotacao, "/").concat(codEmpresa)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getValidadeDuplicata",
          value: function getValidadeDuplicata(codCotacao, codEmpresa) {
            return this.http.get("".concat(this.API, "/validade-duplicata/").concat(codCotacao, "/").concat(codEmpresa)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getLoteMaterial",
          value: function getLoteMaterial(codMaterial, codEmpresa) {
            return this.http.get("".concat(this.API, "/material/lote/").concat(codMaterial, "/").concat(codEmpresa)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }]);

        return ComercialCicloVendasCotacoesService;
      }();

      ComercialCicloVendasCotacoesService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _comercial_service__WEBPACK_IMPORTED_MODULE_5__["ComercialService"]
        }, {
          type: _tid_software_tid_software_service__WEBPACK_IMPORTED_MODULE_6__["ComercialTidSoftwareService"]
        }, {
          type: _estoque_estoque_service__WEBPACK_IMPORTED_MODULE_7__["ComercialEstoqueService"]
        }];
      };

      ComercialCicloVendasCotacoesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _comercial_service__WEBPACK_IMPORTED_MODULE_5__["ComercialService"], _tid_software_tid_software_service__WEBPACK_IMPORTED_MODULE_6__["ComercialTidSoftwareService"], _estoque_estoque_service__WEBPACK_IMPORTED_MODULE_7__["ComercialEstoqueService"]])], ComercialCicloVendasCotacoesService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~agenda-agenda-module~cotacoes-cotacoes-module~liberacoes-liberacoes-module~pedidos-producao-~1dbf20ef-es5.js.map