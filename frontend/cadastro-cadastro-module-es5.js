(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cadastro-cadastro-module"], {
    /***/
    "+MnF":
    /*!******************************************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/cadastro/contatos/formulario/formulario-resolver.guard.ts ***!
      \******************************************************************************************************/

    /*! exports provided: ComercialClientesCadastroContatosResolverGuard */

    /***/
    function MnF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialClientesCadastroContatosResolverGuard", function () {
        return ComercialClientesCadastroContatosResolverGuard;
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


      var src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/modules/comercial/services/clientes.service */
      "8ouN"); // Services


      var ComercialClientesCadastroContatosResolverGuard = /*#__PURE__*/function () {
        function ComercialClientesCadastroContatosResolverGuard(clienteService) {
          _classCallCheck(this, ComercialClientesCadastroContatosResolverGuard);

          this.clienteService = clienteService;
        }

        _createClass(ComercialClientesCadastroContatosResolverGuard, [{
          key: "resolve",
          value: function resolve(route) {
            if (route.params && route.parent.parent.params.id && route.params.idContato) {
              return this.clienteService.getContato(route.parent.parent.params.id, route.params.idContato);
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
              success: true,
              mensagem: null,
              data: {
                id: null,
                nomeCompleto: null,
                idGenero: null,
                idFuncao: null,
                idSetor: null,
                dataAniversario: null,
                idTimeFutebol: null,
                idEstadoCivil: null,
                linkedin: null,
                facebook: null,
                instagram: null,
                hobbies: null,
                qtdeFilhos: null,
                filhos: [],
                observacoes: null,
                contatos: []
              }
            });
          }
        }]);

        return ComercialClientesCadastroContatosResolverGuard;
      }();

      ComercialClientesCadastroContatosResolverGuard.ctorParameters = function () {
        return [{
          type: src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_3__["ComercialClientesService"]
        }];
      };

      ComercialClientesCadastroContatosResolverGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_3__["ComercialClientesService"]])], ComercialClientesCadastroContatosResolverGuard);
      /***/
    },

    /***/
    "+NUh":
    /*!************************************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/cadastro/enderecos/detalhes/detalhes.component.scss ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function NUh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NsaWVudGVzL2NhZGFzdHJvL2VuZGVyZWNvcy9kZXRhbGhlcy9kZXRhbGhlcy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "/m+g":
    /*!*********************************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/cadastro/anexos/detalhes/detalhes.component.scss ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function mG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NsaWVudGVzL2NhZGFzdHJvL2FuZXhvcy9kZXRhbGhlcy9kZXRhbGhlcy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "0FK8":
    /*!**********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/clientes/cadastro/dados-faturamento/detalhes/detalhes.component.html ***!
      \**********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function FK8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<div class=\"row\" *ngIf=\"dadosFaturamentoLoaded\">\r\n  <div class=\"col\">\r\n    <div class=\"mtc-title\">Datos de facturación</div>\r\n    <div *ngIf=\"dadosFaturamento.tipoPessoa == 'F'\">\r\n      <!-- <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label>CPF</label>\r\n          <div *ngIf=\"dadosFaturamento.cpf == null\">SIN INFORMACION</div>\r\n          <div *ngIf=\"dadosFaturamento.cpf != null\">{{ dadosFaturamento.cpf }}</div>\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label>RG</label>\r\n          <div *ngIf=\"dadosFaturamento.rg == null\">SIN INFORMACION</div>\r\n          <div *ngIf=\"dadosFaturamento.rg != null\">{{ dadosFaturamento.rg }}</div>\r\n        </div>\r\n      </div> -->\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label>Nombre</label>\r\n          <div *ngIf=\"dadosFaturamento.nome == null\">SIN INFORMACION</div>\r\n          <div *ngIf=\"dadosFaturamento.nome != null\">{{ dadosFaturamento.nome }}</div>\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label>Apellido</label>\r\n          <div *ngIf=\"dadosFaturamento.sobrenome == null\">SIN INFORMACION</div>\r\n          <div *ngIf=\"dadosFaturamento.sobrenome != null\">{{ dadosFaturamento.sobrenome }}</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <!-- <div class=\"form-group col-md-6\">\r\n          <label>Tipo de registro</label>\r\n          <div *ngIf=\"dadosFaturamento.descTipoCadastro == null\">SIN INFORMACION</div>\r\n          <div *ngIf=\"dadosFaturamento.descTipoCadastro != null\">{{ dadosFaturamento.descTipoCadastro }}</div>\r\n        </div> -->\r\n        <!-- <div class=\"form-group col-md-6\">\r\n          <label>Registro del productor rural</label>\r\n          <div *ngIf=\"dadosFaturamento.inscricaoProdRural == null\">SIN INFORMACION</div>\r\n          <div *ngIf=\"dadosFaturamento.inscricaoProdRural != null\">{{ dadosFaturamento.inscricaoProdRural }}</div>\r\n        </div> -->\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label>Contribuyente</label>\r\n          <div *ngIf=\"dadosFaturamento.descContribuinte == null\">SIN INFORMACION</div>\r\n          <div *ngIf=\"dadosFaturamento.descContribuinte != null\">{{ dadosFaturamento.descContribuinte }}</div>\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label>Sector de actividad</label>\r\n          <div *ngIf=\"dadosFaturamento.descSetorAtividade == null\">SIN INFORMACION</div>\r\n          <div *ngIf=\"dadosFaturamento.descSetorAtividade != null\">{{ dadosFaturamento.descSetorAtividade }}</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label>Limite de crédito</label>\r\n          <div *ngIf=\"dadosFaturamento.limiteCredito == 0\">R$ 0,00</div>\r\n          <div *ngIf=\"dadosFaturamento.limiteCredito > 0\">{{ dadosFaturamento.limiteCredito | currency:'BRL':'symbol':'1.2-2' }}</div>\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label>Limite de crédito (seguradora)</label>\r\n          <div *ngIf=\"dadosFaturamento.creditoSeguradora == 0\">R$ 0,00</div>\r\n          <div *ngIf=\"dadosFaturamento.creditoSeguradora > 0\">{{ dadosFaturamento.creditoSeguradora | currency:'BRL':'symbol':'1.2-2' }}</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label>Fecha de inclusión</label>\r\n          <div *ngIf=\"dadosFaturamento.dataInclusao == null\">Sin informacion</div>\r\n          <div *ngIf=\"dadosFaturamento.dataInclusao != null\">{{ dadosFaturamento.dataInclusao }}</div>\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label>Próximo análisis del crédito en</label>\r\n          <div *ngIf=\"dadosFaturamento.proximaAnaliseCredito == null\">R$ 0,00</div>\r\n          <div *ngIf=\"dadosFaturamento.proximaAnaliseCredito != null\">{{ dadosFaturamento.proximaAnaliseCredito }}</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label>Quien registro</label>\r\n          <div *ngIf=\"dadosFaturamento.quemCadastrou == null\">Sin informacion</div>\r\n          <div *ngIf=\"dadosFaturamento.quemCadastrou != null\">{{ dadosFaturamento.quemCadastrou }}</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col\">\r\n          <label class=\"d-flex\">\r\n            <div class=\"mr-2\">\r\n              <i class=\"fas fa-times-circle text-danger\" *ngIf=\"dadosFaturamento.somenteCarteira == 0\"></i>\r\n              <i class=\"fas fa-check-circle text-success\" *ngIf=\"dadosFaturamento.somenteCarteira == 1\"></i>\r\n            </div>\r\n            <span>Facturación solo de cartera</span>\r\n          </label>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col\">\r\n          <label class=\"d-flex\">\r\n            <div class=\"mr-2\">\r\n              <i class=\"fas fa-times-circle text-danger\" *ngIf=\"dadosFaturamento.boletoDescontado == 0\"></i>\r\n              <i class=\"fas fa-check-circle text-success\" *ngIf=\"dadosFaturamento.boletoDescontado == 1\"></i>\r\n            </div>\r\n            <span>No acepta boleto con descuento</span>\r\n          </label>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col\">\r\n          <label class=\"d-flex\">\r\n            <div class=\"mr-2\">\r\n              <i class=\"fas fa-times-circle text-danger\" *ngIf=\"dadosFaturamento.somenteAVista == 0\"></i>\r\n              <i class=\"fas fa-check-circle text-success\" *ngIf=\"dadosFaturamento.somenteAVista == 1\"></i>\r\n            </div>\r\n            <span>cliente solo efectivo</span>\r\n          </label>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col\">\r\n          <label class=\"d-flex\">\r\n            <div class=\"mr-2\">\r\n              <i class=\"fas fa-times-circle text-danger\" *ngIf=\"dadosFaturamento.exigePesagem == 0\"></i>\r\n              <i class=\"fas fa-check-circle text-success\" *ngIf=\"dadosFaturamento.exigePesagem == 1\"></i>\r\n            </div>\r\n            <span>Requiere pesaje</span>\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"dadosFaturamento.tipoPessoa == 'J'\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6 offset-md-6\">\r\n          <label>Nota de Cliente</label>\r\n          <div *ngIf=\"dadosFaturamento.notaCliente == null\">SIN INFORMACION</div>\r\n          <div *ngIf=\"dadosFaturamento.notaCliente >=1 && dadosFaturamento.notaCliente <2\"><i class=\"fas fa-star\"></i></div>\r\n          <div *ngIf=\"dadosFaturamento.notaCliente >=2 && dadosFaturamento.notaCliente <3\"><i class=\"fas fa-star\"></i><i class=\"fas fa-star\"></i></div>\r\n          <div *ngIf=\"dadosFaturamento.notaCliente >=3 && dadosFaturamento.notaCliente <4\"><i class=\"fas fa-star\"></i><i class=\"fas fa-star\"></i><i class=\"fas fa-star\"></i></div>\r\n          <div *ngIf=\"dadosFaturamento.notaCliente >=4 && dadosFaturamento.notaCliente <5\"><i class=\"fas fa-star\"></i><i class=\"fas fa-star\"></i><i class=\"fas fa-star\"></i><i class=\"fas fa-star\"></i></div>\r\n          <div *ngIf=\"dadosFaturamento.notaCliente >= 5\"><i class=\"fas fa-star\"></i><i class=\"fas fa-star\"></i><i class=\"fas fa-star\"></i><i class=\"fas fa-star\"></i><i class=\"fas fa-star\"></i></div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <!-- <div class=\"form-group col-md-6\">\r\n          <label>CNPJ</label>\r\n          <div *ngIf=\"dadosFaturamento.cnpj == null\">SIN INFORMACION</div>\r\n          <div *ngIf=\"dadosFaturamento.cnpj != null\">{{ dadosFaturamento.cnpj }}</div>\r\n        </div> -->\r\n        <div class=\"form-group col-md-6\">\r\n          <label>Razon Social</label>\r\n          <div *ngIf=\"dadosFaturamento.razaoSocial == null\">SIN INFORMACION</div>\r\n          <div *ngIf=\"dadosFaturamento.razaoSocial != null\">{{ dadosFaturamento.razaoSocial }}</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label>Nombre de fantasia</label>\r\n          <div *ngIf=\"dadosFaturamento.nomeFantasia == null\">SIN INFORMACION</div>\r\n          <div *ngIf=\"dadosFaturamento.nomeFantasia != null\">{{ dadosFaturamento.nomeFantasia }}</div>\r\n        </div>\r\n        <!-- <div class=\"form-group col-md-6\">\r\n          <label>Tipo de registro</label>\r\n          <div *ngIf=\"dadosFaturamento.descTipoCadastro == null\">SIN INFORMACION</div>\r\n          <div *ngIf=\"dadosFaturamento.descTipoCadastro != null\">{{ dadosFaturamento.descTipoCadastro }}</div>\r\n        </div> -->\r\n      </div>\r\n      <!-- <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label>Régimen fiscal</label>\r\n          <div *ngIf=\"dadosFaturamento.descTributacao == null\">SIN INFORMACION</div>\r\n          <div *ngIf=\"dadosFaturamento.descTributacao != null\">{{ dadosFaturamento.descTributacao }}</div>\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label>Contribuyente</label>\r\n          <div *ngIf=\"dadosFaturamento.descContribuinte == null\">SIN INFORMACION</div>\r\n          <div *ngIf=\"dadosFaturamento.descContribuinte != null\">{{ dadosFaturamento.descContribuinte }}</div>\r\n        </div>\r\n      </div> -->\r\n      <div class=\"form-row\">\r\n        <!-- <div class=\"form-group col-md-6\">\r\n          <label>Inscripción Estatal</label>\r\n          <div *ngIf=\"dadosFaturamento.inscricaoEstadual == null\">SIN INFORMACION</div>\r\n          <div *ngIf=\"dadosFaturamento.inscricaoEstadual != null\">{{ dadosFaturamento.inscricaoEstadual }}</div>\r\n        </div> -->\r\n        <div class=\"form-group col-md-6\">\r\n          <label>Sector empresarial</label>\r\n          <div *ngIf=\"dadosFaturamento.descSetorAtividade == null\">SIN INFORMACION</div>\r\n          <div *ngIf=\"dadosFaturamento.descSetorAtividade != null\">{{ dadosFaturamento.descSetorAtividade }}</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <!-- <div class=\"form-group col-md-6\">\r\n          <label>Propósito del material</label>\r\n          <div *ngIf=\"dadosFaturamento.descFinalidadeMaterial == null\">SIN INFORMACION</div>\r\n          <div *ngIf=\"dadosFaturamento.descFinalidadeMaterial != null\">{{ dadosFaturamento.descFinalidadeMaterial }}</div>\r\n        </div> -->\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <!-- <div class=\"form-group col\">\r\n          <label>CNAE (atividade principal)</label>\r\n          <div *ngIf=\"dadosFaturamento.descCnae == null\">SIN INFORMACION</div>\r\n          <div *ngIf=\"dadosFaturamento.descCnae != null\">\r\n            {{ dadosFaturamento.descCnae | uppercase }}\r\n          </div>\r\n        </div> -->\r\n      </div>\r\n      <!-- <div class=\"form-row\">\r\n        <div class=\"form-group col mb-3\">\r\n          <label>Actividades secundarias</label>\r\n          <div *ngIf=\"dadosFaturamento.atividadesSecundarias.length == 0\">SIN INFORMACION</div>\r\n          <div *ngIf=\"dadosFaturamento.atividadesSecundarias.length > 0\">\r\n            <ul class=\"list-unstyled mb-0\">\r\n              <li\r\n                class=\"mb-1\"\r\n                *ngFor=\"let item of dadosFaturamento.atividadesSecundarias\">\r\n                {{ item.descCnae | uppercase }}\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div> -->\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label>Limite de crédito</label>\r\n          <div *ngIf=\"dadosFaturamento.limiteCredito == 0\">R$ 0,00</div>\r\n          <div *ngIf=\"dadosFaturamento.limiteCredito > 0\">{{ dadosFaturamento.limiteCredito | currency:'BRL':'symbol':'1.2-2' }}</div>\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label>Limite de crédito (seguradora)</label>\r\n          <div *ngIf=\"dadosFaturamento.creditoSeguradora == 0\">R$ 0,00</div>\r\n          <div *ngIf=\"dadosFaturamento.creditoSeguradora > 0\">{{ dadosFaturamento.creditoSeguradora | currency:'BRL':'symbol':'1.2-2' }}</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label>Fecha de inclusión</label>\r\n          <div *ngIf=\"dadosFaturamento.dataInclusao == null\">Sin informacion</div>\r\n          <div *ngIf=\"dadosFaturamento.dataInclusao != null\">{{ dadosFaturamento.dataInclusao }}</div>\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label>Próximo análisis de crédito en</label>\r\n          <div *ngIf=\"dadosFaturamento.proximaAnaliseCredito == null\">R$ 0,00</div>\r\n          <div *ngIf=\"dadosFaturamento.proximaAnaliseCredito != null\">{{ dadosFaturamento.proximaAnaliseCredito }}</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label>Quien registro</label>\r\n          <div *ngIf=\"dadosFaturamento.quemCadastrou == null\">Sin informacion</div>\r\n          <div *ngIf=\"dadosFaturamento.quemCadastrou != null\">{{ dadosFaturamento.quemCadastrou }}</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col\">\r\n          <label class=\"d-flex\">\r\n            <div class=\"mr-2\">\r\n              <i class=\"fas fa-times-circle text-danger\" *ngIf=\"dadosFaturamento.somenteCarteira == 0\"></i>\r\n              <i class=\"fas fa-check-circle text-success\" *ngIf=\"dadosFaturamento.somenteCarteira == 1\"></i>\r\n            </div>\r\n            <span>Facturación solo en cartera</span>\r\n          </label>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col\">\r\n          <label class=\"d-flex\">\r\n            <div class=\"mr-2\">\r\n              <i class=\"fas fa-times-circle text-danger\" *ngIf=\"dadosFaturamento.boletoDescontado == 0\"></i>\r\n              <i class=\"fas fa-check-circle text-success\" *ngIf=\"dadosFaturamento.boletoDescontado == 1\"></i>\r\n            </div>\r\n            <span>No acepta boleto con descuento</span>\r\n          </label>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col\">\r\n          <label class=\"d-flex\">\r\n            <div class=\"mr-2\">\r\n              <i class=\"fas fa-times-circle text-danger\" *ngIf=\"dadosFaturamento.somenteAVista == 0\"></i>\r\n              <i class=\"fas fa-check-circle text-success\" *ngIf=\"dadosFaturamento.somenteAVista == 1\"></i>\r\n            </div>\r\n            <span>cliente solo efectivo</span>\r\n          </label>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col\">\r\n          <label class=\"d-flex\">\r\n            <div class=\"mr-2\">\r\n              <i class=\"fas fa-times-circle text-danger\" *ngIf=\"dadosFaturamento.exigePesagem == 0\"></i>\r\n              <i class=\"fas fa-check-circle text-success\" *ngIf=\"dadosFaturamento.exigePesagem == 1\"></i>\r\n            </div>\r\n            <span>Requiere pesaje</span>\r\n          </label>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col mb-md-0\">\r\n          <label class=\"d-flex\">\r\n            <div class=\"mr-2\">\r\n              <i class=\"fas fa-times-circle text-danger\" *ngIf=\"dadosFaturamento.marca == 0\"></i>\r\n              <i class=\"fas fa-check-circle text-success\" *ngIf=\"dadosFaturamento.marca == 1\"></i>\r\n            </div>\r\n            <span>Marca</span>\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "0TGB":
    /*!***********************************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/cadastro/anexos/formulario/formulario.component.ts ***!
      \***********************************************************************************************/

    /*! exports provided: ComercialClientesCadastroAnexosFormularioComponent */

    /***/
    function TGB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialClientesCadastroAnexosFormularioComponent", function () {
        return ComercialClientesCadastroAnexosFormularioComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./formulario.component.html */
      "gtjB");
      /* harmony import */


      var _formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./formulario.component.scss */
      "BPCR");
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


      var src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/core/auth.service */
      "yxCR");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _cadastro_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../cadastro.service */
      "N70Q");
      /* harmony import */


      var src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/modules/comercial/services/clientes.service */
      "8ouN");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_modules_comercial_gestao_contratos_comerciais_contratos_comerciais_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/modules/comercial/gestao/contratos-comerciais/contratos-comerciais.service */
      "pK9/");
      /* harmony import */


      var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/shared/modules/confirm-modal/confirm-modal.service */
      "FOez"); // Services


      var ComercialClientesCadastroAnexosFormularioComponent = /*#__PURE__*/function () {
        function ComercialClientesCadastroAnexosFormularioComponent(confirmModalService, contratosComerciaisService, router, activatedRoute, formBuilder, authService, cadastroService, clientesService, pnotifyService, location) {
          _classCallCheck(this, ComercialClientesCadastroAnexosFormularioComponent);

          this.confirmModalService = confirmModalService;
          this.contratosComerciaisService = contratosComerciaisService;
          this.router = router;
          this.activatedRoute = activatedRoute;
          this.formBuilder = formBuilder;
          this.authService = authService;
          this.cadastroService = cadastroService;
          this.clientesService = clientesService;
          this.pnotifyService = pnotifyService;
          this.location = location;
          this.API = "http://23.254.204.187/api/comercial/clientes/cadastro/upload/anexo";
          this.user = this.authService.getCurrentUser();
          this.urlAnexo = []; // public uploader: FileUploader = new FileUploader({ url: this.API });

          this.loaderFullScreen = true;
          this.formData = [];
          this.formChanged = false;
          this.possuiSituacaoCadastral = false;
          this.possuiSintegra = false;
          this.possuiSerasa = false;
          this.possuiImpostos = false;
          this.possuiContratoSocial = false;
          this.possuiOutros = false;
          this.possuiIdentificacao = false;
          this.possuiComprovanteEndereco = false;
          this.tableConfigAnexos = {
            fixedHeader: false,
            bodyHeight: 230,
            hover: false
          };
          this.showAnexos = false;
          this.tiposAnexo = [];
          this.tiposAnexoF = [{
            id: 2,
            descricao: 'Identificação (CNH ou RG)',
            tipoAnexo: 'Identificacao'
          }, {
            id: 4,
            descricao: 'Comprovante de endereço',
            tipoAnexo: 'Comprovante'
          }];
          this.tiposAnexoJ = [{
            id: 1,
            descricao: 'Contrato social',
            tipoAnexo: 'ContratoSocial'
          }, {
            id: 2,
            descricao: 'Situação Cadastral',
            tipoAnexo: 'SituacaoCadastral'
          }, {
            id: 3,
            descricao: 'Sintegra',
            tipoAnexo: 'Sintegra'
          }, {
            id: 4,
            descricao: 'Serasa',
            tipoAnexo: 'Serasa'
          }, {
            id: 5,
            descricao: 'Impostos',
            tipoAnexo: 'Impostos'
          }, {
            id: 6,
            descricao: 'Outros',
            tipoAnexo: 'Outros'
          }];
          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialClientesCadastroAnexosFormularioComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.activatedRoute.parent.parent.params.subscribe(function (params) {
              _this.clientesService.getAnexos(params['id']).subscribe(function (response) {
                _this.codCliente = params['id'];
                console.log(response);

                if (response['success'] === true && response['data'].length > 0) {
                  _this.tipoCliente = response['data'][0]['tipoCliente'];

                  _this.setFormValidators(response['data']);
                } else {
                  _this.tipoCliente = response['tipoCliente'];

                  _this.clientesService.getDetalhes(_this.codCliente).subscribe(function (response) {
                    _this.tipoCliente = response['data']['tipoPessoa'];

                    _this.setFormValidators(null);
                  });
                }
              });
            });
            this.cancelSubscription();
            this.submitSubscription();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptionCancel.unsubscribe();
            this.subscriptionSubmit.unsubscribe();
          }
        }, {
          key: "cancelSubscription",
          value: function cancelSubscription() {
            var _this2 = this;

            this.subscriptionCancel = this.cadastroService.notifyCancelObservable$.subscribe(function (response) {
              if (response) {
                _this2.onCancel();
              }
            });
          }
        }, {
          key: "submitSubscription",
          value: function submitSubscription() {
            var _this3 = this;

            this.subscriptionSubmit = this.cadastroService.notifySubmitObservable$.subscribe(function (response) {
              if (response) {
                _this3.onSubmit();
              }
            });
          }
        }, {
          key: "setFormValidators",
          value: function setFormValidators(anexos) {
            if (anexos != null) {
              if (this.tipoCliente == 'F') {
                for (var i = 0; i < anexos.length; i++) {
                  if (anexos[i]['idTipo'] == 2) {
                    this.possuiIdentificacao = true;
                  } else if (anexos[i]['idTipo'] == 4) {
                    this.possuiComprovanteEndereco = true;
                  }
                }

                if (this.possuiIdentificacao && this.possuiComprovanteEndereco) {
                  this.handleAnexosUploaded();
                } else {
                  for (var _i = 0; _i < this.tiposAnexoF.length; _i++) {
                    if (this.possuiIdentificacao && this.tiposAnexoF[_i]['id'] == 2) {
                      this.tiposAnexoF.splice(_i, 1);
                    }

                    if (this.possuiComprovanteEndereco && this.tiposAnexoF[_i]['id'] == 4) {
                      this.tiposAnexoF.splice(_i, 1);
                    }
                  }

                  this.tiposAnexo = this.tiposAnexoF;
                  this.setFormBuilder();
                }
              } else if (this.tipoCliente == 'J') {
                for (var _i2 = 0; _i2 < anexos.length; _i2++) {
                  if (anexos[_i2]['idTipo'] == 1) {
                    this.possuiContratoSocial = true;
                  } else if (anexos[_i2]['idTipo'] == 2) {
                    this.possuiSituacaoCadastral = true;
                  } else if (anexos[_i2]['idTipo'] == 3) {
                    this.possuiSintegra = true;
                  } else if (anexos[_i2]['idTipo'] == 4) {
                    this.possuiSerasa = true;
                  } else if (anexos[_i2]['idTipo'] == 5) {
                    this.possuiImpostos = true;
                  } else if (anexos[_i2]['idTipo'] == 6) {
                    this.possuiOutros = true;
                  }
                }

                if (this.possuiSituacaoCadastral && this.possuiContratoSocial && this.possuiImpostos && this.possuiSintegra && this.possuiSerasa && this.possuiOutros) {
                  this.handleAnexosUploaded();
                } else {
                  // for (let i = 0; i < this.tiposAnexoJ.length; i++) {
                  //   if (
                  //     this.possuiContratoSocial &&
                  //     this.tiposAnexoJ[i]['id'] == 1
                  //   ) {
                  //     this.tiposAnexoJ.splice(i, 1);
                  //   }
                  //   if (
                  //     this.possuiSituacaoCadastral &&
                  //     this.tiposAnexoJ[i]['id'] == 2
                  //   ) {
                  //     this.tiposAnexoJ.splice(i, 1);
                  //   }
                  //   if (
                  //     this.possuiSintegra &&
                  //     this.tiposAnexoJ[i]['id'] == 3
                  //   ) {
                  //     this.tiposAnexoJ.splice(i, 1);
                  //   }
                  //   if (
                  //     this.possuiSerasa &&
                  //     this.tiposAnexoJ[i]['id'] == 4
                  //   ) {
                  //     this.tiposAnexoJ.splice(i, 1);
                  //   }
                  //   if (
                  //     this.possuiImpostos &&
                  //     this.tiposAnexoJ[i]['id'] == 5
                  //   ) {
                  //     this.tiposAnexoJ.splice(i, 1);
                  //   }
                  //   if (
                  //     this.possuiOutros &&
                  //     this.tiposAnexoJ[i]['id'] == 6
                  //   ) {
                  //     this.tiposAnexoJ.splice(i, 1);
                  //   }
                  // }
                  this.tiposAnexo = this.tiposAnexoJ;
                  this.setFormBuilder();
                }
              }
            } else {
              if (this.tipoCliente == 'F') {
                this.tiposAnexo = this.tiposAnexoF;
              } else if (this.tipoCliente == 'J') {
                this.tiposAnexo = this.tiposAnexoJ;
              }

              this.setFormBuilder();
            }
          }
        }, {
          key: "handleAnexosUploaded",
          value: function handleAnexosUploaded() {
            this.pnotifyService.notice('O cliente já possui os anexos necessários.');
            this.location.back();
          }
        }, {
          key: "setFormBuilder",
          value: function setFormBuilder() {
            this.form = this.formBuilder.group({
              tipoAnexo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
              tipoCliente: this.tipoCliente,
              codCliente: this.codCliente,
              anexos: this.formBuilder.array([])
            });
            this.loaderFullScreen = false;
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
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();

            if (this.form.controls[field].validator) {
              var validationResult = this.form.controls[field].validator(formControl);
              required = validationResult !== null && validationResult.required === true;
            }

            if (required) {
              return 'is-required';
            }
          }
        }, {
          key: "onChange",
          value: function onChange() {
            this.formChanged = true;
          }
        }, {
          key: "onCancel",
          value: function onCancel() {
            this.location.back();
          }
        }, {
          key: "handleUploadError",
          value: function handleUploadError() {
            this.pnotifyService.error('Erro no upload do anexo. Tente novamente!');
            this.cadastroService.onNotifyLoaded(false);
          } // Formulário Preenchido para edição ou novo formulário

        }, {
          key: "getAnexos",
          value: function getAnexos(codCliente) {
            var _this4 = this;

            this.loaderNavbar = true;
            this.showAnexos = false;
            this.clientesService.getAnexos(codCliente).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(function () {
              _this4.loaderNavbar = false;
              _this4.showAnexos = true;
            })).subscribe({
              next: function next(response) {
                if (response.hasOwnProperty('success') && response.success === true) {
                  _this4.setAnexos(response.data);

                  _this4.urlAnexo = response.data;
                }
              },
              error: function error(_error) {
                if (_error['error'].hasOwnProperty('mensagem')) {
                  _this4.pnotifyService.error(_error.error.mensagem);
                } else {
                  _this4.pnotifyService.error();
                }
              }
            });
          }
        }, {
          key: "setAnexos",
          value: function setAnexos(anexos) {
            if (anexos.length > 0) {
              for (var i = 0; i < anexos.length; i++) {
                this.onAddAnexos(anexos[i], true);
              }
            }
          }
        }, {
          key: "anexos",
          get: function get() {
            return this.form.get('anexos');
          }
        }, {
          key: "onAddAnexos",
          value: function onAddAnexos(anexo, manipulateForm) {
            if (this.checkAnexoExists(anexo) === false) {
              this.anexos.push(this.formBuilder.group({
                codAnexo: [anexo.codAnexo],
                nomeAnexo: [anexo.nomeAnexo],
                linkAnexo: [anexo.linkAnexo],
                urlAnexo: [anexo.urlAnexo]
              }));
              console.log(this.anexos);

              if (manipulateForm) {
                this.form.markAsTouched();
                this.form.markAsDirty();
              }
            }
          }
        }, {
          key: "checkAnexoExists",
          value: function checkAnexoExists(anexo) {
            return this.form.value.anexos.some(function (el) {
              return el.codAnexo === anexo.codAnexo || el.nomeAnexo == anexo.nomeAnexo;
            });
          }
        }, {
          key: "appendFile",
          value: function appendFile(files) {
            var _this5 = this;

            var reader = new FileReader();
            reader.readAsDataURL(files[0]);

            reader.onload = function () {
              var fd = new FormData();
              fd.append('file', files[0]);

              _this5.formData.push(fd);

              _this5.anexos.push(_this5.formBuilder.group({
                nomeAnexo: [files[0]['name']],
                linkAnexo: [reader.result]
              }));

              console.log(_this5.anexos);

              if (_this5.showAnexos === false) {
                _this5.showAnexos = true;
              }
            };
          }
        }, {
          key: "onPostAnexos",
          value: function onPostAnexos(data) {
            var _this6 = this;

            /* const id = this.form.value.codMaterial; */
            this.formData.forEach(function (item) {
              data = data;

              _this6.clientesService.uploadAnexo(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(function () {
                _this6.cadastroService.onNotifyLoaded(false);
              })).subscribe({
                next: function next(response) {
                  if (response.hasOwnProperty('success')) {
                    _this6.pnotifyService.success();

                    _this6.location.back();
                  }
                },
                error: function error(_error2) {
                  if (_error2['error'].hasOwnProperty('mensagem')) {
                    _this6.pnotifyService.error(_error2.error.mensagem);
                  } else {
                    _this6.pnotifyService.error();
                  }
                }
              });
            });
          }
        }, {
          key: "onDeleteAnexo",
          value: function onDeleteAnexo(codAnexo, index) {
            var _this7 = this;

            this.confirmDelete().subscribe(function (r) {
              if (codAnexo) {
                _this7.loaderNavbar = true;

                _this7.clientesService.deleteAnexo(codAnexo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(function () {
                  _this7.loaderNavbar = false;
                })).subscribe({
                  next: function next(response) {
                    if (response.hasOwnProperty('success') && response.success === true) {
                      r ? _this7.deleteDocumento(index) : null;
                    } else if (response.hasOwnProperty('success') && response.success === false && response.hasOwnProperty('mensagem')) {
                      _this7.pnotifyService.error(response.mensagem);
                    } else {
                      _this7.pnotifyService.error();
                    }
                  },
                  error: function error(_error3) {
                    if (_error3['error'].hasOwnProperty('mensagem')) {
                      _this7.pnotifyService.error(_error3.error.mensagem);
                    } else {
                      _this7.pnotifyService.error();
                    }
                  }
                });
              } else {
                r ? _this7.deleteDocumento(index) : null;

                _this7.formData.splice(index, 1);
              }
            });
          }
        }, {
          key: "deleteDocumento",
          value: function deleteDocumento(index) {
            this.anexos.removeAt(index);
            this.form.markAsTouched();
            this.form.markAsDirty();
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            if (this.form.valid && this.formData.length > 0) {
              this.cadastroService.onNotifyLoaded(true);
              var tipoAnexo;

              for (var i = 0; i < this.tiposAnexo.length; i++) {
                if (this.tiposAnexo[i]['id'] == this.form.value['tipoAnexo']) {
                  tipoAnexo = this.tiposAnexo[i]['tipoAnexo'];
                }
              }

              this.onPostAnexos(this.form.value);
            } else {
              this.pnotifyService.notice('Há campos faltando.');
            }
          }
        }, {
          key: "navegarAnexo",
          value: function navegarAnexo(anexo) {
            this.router.navigate([], {
              relativeTo: this.activatedRoute
            }).then(function (result) {
              window.open("".concat(anexo.value.urlAnexo), '_blank');
            });
          }
        }, {
          key: "confirmDelete",
          value: function confirmDelete() {
            return this.confirmModalService.showConfirm('delete', 'Confirmar exclusão', 'Deseja realmente prosseguir com a exclusão do registro?', 'Cancelar', 'Confirmar');
          }
        }]);

        return ComercialClientesCadastroAnexosFormularioComponent;
      }();

      ComercialClientesCadastroAnexosFormularioComponent.ctorParameters = function () {
        return [{
          type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_13__["ConfirmModalService"]
        }, {
          type: src_app_modules_comercial_gestao_contratos_comerciais_contratos_comerciais_service__WEBPACK_IMPORTED_MODULE_12__["ComercialGestaoContratosComerciaisService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }, {
          type: src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
        }, {
          type: _cadastro_service__WEBPACK_IMPORTED_MODULE_9__["ComercialClientesCadastroService"]
        }, {
          type: src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_10__["ComercialClientesService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
        }];
      };

      ComercialClientesCadastroAnexosFormularioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-clientes-cadastro-anexos-formulario',
        template: _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_13__["ConfirmModalService"], src_app_modules_comercial_gestao_contratos_comerciais_contratos_comerciais_service__WEBPACK_IMPORTED_MODULE_12__["ComercialGestaoContratosComerciaisService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"], _cadastro_service__WEBPACK_IMPORTED_MODULE_9__["ComercialClientesCadastroService"], src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_10__["ComercialClientesService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])], ComercialClientesCadastroAnexosFormularioComponent);
      /***/
    },

    /***/
    "0gs9":
    /*!***************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/clientes/cadastro/informacoes-comerciais/detalhes/detalhes.component.html ***!
      \***************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function gs9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<div class=\"row\" *ngIf=\"infosComerciaisLoaded\">\r\n  <div class=\"col\">\r\n    <div class=\"mtc-title\">Informações comerciais</div>\r\n    <ul class=\"list-group\" *ngIf=\"infosComerciais.length > 0\">\r\n      <li class=\"list-group-item\" *ngFor=\"let item of infosComerciais\">\r\n        <b>{{ item.descricao }}</b>\r\n      </li>\r\n    </ul>\r\n    <div class=\"row py-5 my-5\" *ngIf=\"infosComerciais.length == 0\">\r\n      <div class=\"col\">\r\n        <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "1Ob8":
    /*!************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/cadastro/cadastro.module.ts ***!
      \************************************************************************/

    /*! exports provided: ComercialClientesCadastroModule */

    /***/
    function Ob8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialClientesCadastroModule", function () {
        return ComercialClientesCadastroModule;
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


      var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-bootstrap/tooltip */
      "978R");
      /* harmony import */


      var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-bootstrap/accordion */
      "lQde");
      /* harmony import */


      var ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/timepicker */
      "M3cK");
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


      var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ng2-currency-mask */
      "D5nU");
      /* harmony import */


      var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_10__);
      /* harmony import */


      var ng2_file_upload__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng2-file-upload */
      "pYyI");
      /* harmony import */


      var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/pipes/pipes.module */
      "9Xeq");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var _cadastro_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./cadastro-routing.module */
      "Wgoc");
      /* harmony import */


      var _cadastro_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./cadastro.component */
      "L/8C");
      /* harmony import */


      var _dados_faturamento_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./dados-faturamento/detalhes/detalhes.component */
      "fjd7");
      /* harmony import */


      var _dados_faturamento_formulario_formulario_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./dados-faturamento/formulario/formulario.component */
      "8yz0");
      /* harmony import */


      var _enderecos_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./enderecos/detalhes/detalhes.component */
      "QOcb");
      /* harmony import */


      var _enderecos_formulario_formulario_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./enderecos/formulario/formulario.component */
      "n1L9");
      /* harmony import */


      var _contatos_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./contatos/detalhes/detalhes.component */
      "qJk7");
      /* harmony import */


      var _contatos_formulario_formulario_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./contatos/formulario/formulario.component */
      "nF7G");
      /* harmony import */


      var _dados_relacionamento_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./dados-relacionamento/detalhes/detalhes.component */
      "AZRv");
      /* harmony import */


      var _dados_relacionamento_formulario_formulario_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./dados-relacionamento/formulario/formulario.component */
      "1kjR");
      /* harmony import */


      var _potencial_compra_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./potencial-compra/detalhes/detalhes.component */
      "KWqw");
      /* harmony import */


      var _potencial_compra_formulario_formulario_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./potencial-compra/formulario/formulario.component */
      "4zD7");
      /* harmony import */


      var _anexos_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./anexos/detalhes/detalhes.component */
      "PPg3");
      /* harmony import */


      var _anexos_formulario_formulario_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./anexos/formulario/formulario.component */
      "0TGB");
      /* harmony import */


      var _filial_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./filial/detalhes/detalhes.component */
      "sveC");
      /* harmony import */


      var _travas_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./travas/detalhes/detalhes.component */
      "igIG");
      /* harmony import */


      var _informacoes_financeiras_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./informacoes-financeiras/detalhes/detalhes.component */
      "QPni");
      /* harmony import */


      var _informacoes_comerciais_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./informacoes-comerciais/detalhes/detalhes.component */
      "CelN"); // ngx-bootstrap
      // ng-select
      // ng-brazil
      // ng2-currency-mask
      // ng2-file-upload
      // Modules
      // Components


      var ComercialClientesCadastroModule = /*#__PURE__*/_createClass(function ComercialClientesCadastroModule() {
        _classCallCheck(this, ComercialClientesCadastroModule);
      });

      ComercialClientesCadastroModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_cadastro_component__WEBPACK_IMPORTED_MODULE_16__["ComercialClientesCadastroComponent"], _dados_faturamento_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_17__["ComercialClientesCadastroDadosFaturamentoDetalhesComponent"], _dados_faturamento_formulario_formulario_component__WEBPACK_IMPORTED_MODULE_18__["ComercialClientesCadastroDadosFaturamentoFormularioComponent"], _enderecos_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_19__["ComercialClientesCadastroEnderecosDetalhesComponent"], _enderecos_formulario_formulario_component__WEBPACK_IMPORTED_MODULE_20__["ComercialClientesCadastroEnderecosFormularioComponent"], _contatos_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_21__["ComercialClientesCadastroContatosDetalhesComponent"], _contatos_formulario_formulario_component__WEBPACK_IMPORTED_MODULE_22__["ComercialClientesCadastroContatosFormularioComponent"], _dados_relacionamento_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_23__["ComercialClientesCadastroDadosRelacionamentoDetalhesComponent"], _dados_relacionamento_formulario_formulario_component__WEBPACK_IMPORTED_MODULE_24__["ComercialClientesCadastroDadosRelacionamentoFormularioComponent"], _potencial_compra_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_25__["ComercialClientesCadastroPotencialCompraDetalhesComponent"], _potencial_compra_formulario_formulario_component__WEBPACK_IMPORTED_MODULE_26__["ComercialClientesCadastroPotencialCompraFormularioComponent"], _anexos_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_27__["ComercialClientesCadastroAnexosDetalhesComponent"], _anexos_formulario_formulario_component__WEBPACK_IMPORTED_MODULE_28__["ComercialClientesCadastroAnexosFormularioComponent"], _filial_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_29__["ComercialClientesCadastroFilialDetalhesComponent"], _travas_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_30__["ComercialClientesCadastroTravasDetalhesComponent"], _informacoes_financeiras_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_31__["ComercialClientesCadastroInfosFinanceirasDetalhesComponent"], _informacoes_comerciais_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_32__["ComercialClientesCadastroInfosComerciaisDetalhesComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"].forRoot(), ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_5__["AccordionModule"].forRoot(), ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_6__["TimepickerModule"].forRoot(), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"], angular2_text_mask__WEBPACK_IMPORTED_MODULE_8__["TextMaskModule"], ng_brazil__WEBPACK_IMPORTED_MODULE_9__["NgBrazil"], ng2_currency_mask__WEBPACK_IMPORTED_MODULE_10__["CurrencyMaskModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_11__["FileUploadModule"], src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_12__["PipesModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_14__["TemplatesModule"].forRoot(), _cadastro_routing_module__WEBPACK_IMPORTED_MODULE_15__["ComercialCadastrosRoutingModule"]]
      })], ComercialClientesCadastroModule);
      /***/
    },

    /***/
    "1kjR":
    /*!*************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/cadastro/dados-relacionamento/formulario/formulario.component.ts ***!
      \*************************************************************************************************************/

    /*! exports provided: ComercialClientesCadastroDadosRelacionamentoFormularioComponent */

    /***/
    function kjR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialClientesCadastroDadosRelacionamentoFormularioComponent", function () {
        return ComercialClientesCadastroDadosRelacionamentoFormularioComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./formulario.component.html */
      "8M0X");
      /* harmony import */


      var _formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./formulario.component.scss */
      "W5BC");
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _formulario_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./formulario.service */
      "iMMo");
      /* harmony import */


      var _cadastro_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../cadastro.service */
      "N70Q");
      /* harmony import */


      var src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/modules/comercial/services/clientes.service */
      "8ouN"); // Services


      var ComercialClientesCadastroDadosRelacionamentoFormularioComponent = /*#__PURE__*/function () {
        function ComercialClientesCadastroDadosRelacionamentoFormularioComponent(activatedRoute, formBuilder, formService, cadastroService, location, clientesService, pnotifyService) {
          _classCallCheck(this, ComercialClientesCadastroDadosRelacionamentoFormularioComponent);

          this.activatedRoute = activatedRoute;
          this.formBuilder = formBuilder;
          this.formService = formService;
          this.cadastroService = cadastroService;
          this.location = location;
          this.clientesService = clientesService;
          this.pnotifyService = pnotifyService;
          this.loaderFullScreen = true;
          this.formChanged = false;
          this.tiposAtendimento = [];
          this.periodos = [];
          this.frequenciaContatos = [];
          this.frequenciaVisitas = [];
          this.origensContato = [];
          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialClientesCadastroDadosRelacionamentoFormularioComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this8 = this;

            this.cancelSubscription();
            this.submitSubscription();

            if (this.activatedRoute.snapshot.data['data']['responseCode'] === 200) {
              this.getFormFields();
              this.setFormBuilder(this.activatedRoute.snapshot.data['data']['result']);
              this.activatedRoute.parent.parent.params.subscribe(function (params) {
                _this8.codCliente = params['id'];
              });
            } else {
              this.pnotifyService.error();
              this.location.back();
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.cadastroService.onNotifyLoaded(true);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptionCancel.unsubscribe();
            this.subscriptionSubmit.unsubscribe();
          }
        }, {
          key: "getFormFields",
          value: function getFormFields() {
            var _this9 = this;

            this.formService.loadDepencies().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this9.loaderFullScreen = false;

              _this9.cadastroService.onNotifyLoaded(false);
            })).subscribe({
              next: function next(response) {
                if (response[0]['responseCode'] === 200) {
                  _this9.tiposAtendimento = response[0]['result'];
                } else {
                  _this9.handleFormFieldsError();
                }

                if (response[1]['responseCode'] === 200) {
                  _this9.periodos = response[1]['result'];
                } else {
                  _this9.handleFormFieldsError();
                }

                if (response[2]['responseCode'] === 200) {
                  _this9.frequenciaContatos = response[2]['result'];
                } else {
                  _this9.handleFormFieldsError();
                }

                if (response[3]['responseCode'] === 200) {
                  _this9.frequenciaVisitas = response[3]['result'];
                } else {
                  _this9.handleFormFieldsError();
                }

                if (response[4]['responseCode'] === 200) {
                  _this9.origensContato = response[4]['result'];
                } else {
                  _this9.handleFormFieldsError();
                }
              },
              error: function error(_error4) {
                _this9.handleFormFieldsError();
              }
            });
          }
        }, {
          key: "handleFormFieldsError",
          value: function handleFormFieldsError() {
            this.pnotifyService.error();
            this.location.back();
          }
        }, {
          key: "setFormBuilder",
          value: function setFormBuilder(data) {
            this.form = this.formBuilder.group({
              tipoAtendimento: [data['idTipoAtendimento'], [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
              periodo: [data['idPeriodo'], [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
              diasContato: this.formBuilder.group({
                segunda: [data['diasContato']['segunda'] == 0 ? false : true],
                terca: [data['diasContato']['terca'] == 0 ? false : true],
                quarta: [data['diasContato']['quarta'] == 0 ? false : true],
                quinta: [data['diasContato']['quinta'] == 0 ? false : true],
                sexta: [data['diasContato']['sexta'] == 0 ? false : true],
                sabado: [data['diasContato']['sabado'] == 0 ? false : true]
              }),
              frequenciaContato: [data['idFrequenciaContato'], [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
              frequenciaVisita: [data['idFrequenciaVisita'], [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
              origemContato: [data['idOrigemContato']],
              website: [data['website']],
              obsPropostas: [data['obsPropostas']]
            });
          }
        }, {
          key: "cancelSubscription",
          value: function cancelSubscription() {
            var _this10 = this;

            this.subscriptionCancel = this.cadastroService.notifyCancelObservable$.subscribe(function (response) {
              if (response) {
                _this10.onCancel();
              }
            });
          }
        }, {
          key: "submitSubscription",
          value: function submitSubscription() {
            var _this11 = this;

            this.subscriptionSubmit = this.cadastroService.notifySubmitObservable$.subscribe(function (response) {
              if (response) {
                _this11.onSubmit();
              }
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
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();

            if (this.form.controls[field].validator) {
              var validationResult = this.form.controls[field].validator(formControl);
              required = validationResult !== null && validationResult.required === true;
            }

            if (required) {
              return 'is-required';
            }
          }
        }, {
          key: "onInput",
          value: function onInput() {
            this.formChanged = true;
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
        }, {
          key: "checkValidatorsDiasContato",
          value: function checkValidatorsDiasContato() {
            var validation = false;

            for (var key in this.form.value['diasContato']) {
              if (this.form.value['diasContato'][key] === true) {
                validation = true;
              }
            }

            return validation;
          }
        }, {
          key: "onCancel",
          value: function onCancel() {
            this.location.back();
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this12 = this;

            if (!this.checkValidatorsDiasContato()) {
              this.pnotifyService.notice('Selecione um dia para contato.');
              return false;
            }

            if (this.form.pristine) {
              this.location.back();
            } else {
              if (this.form.valid) {
                this.cadastroService.onNotifyLoaded(true);
                var formObj = {
                  codCliente: this.codCliente,
                  tipoAtendimento: this.form.value['tipoAtendimento'],
                  periodo: this.form.value['periodo'],
                  diasContato: {
                    segunda: this.form.value['diasContato']['segunda'] ? 1 : 0,
                    terca: this.form.value['diasContato']['terca'] ? 1 : 0,
                    quarta: this.form.value['diasContato']['quarta'] ? 1 : 0,
                    quinta: this.form.value['diasContato']['quinta'] ? 1 : 0,
                    sexta: this.form.value['diasContato']['sexta'] ? 1 : 0,
                    sabado: this.form.value['diasContato']['sabado'] ? 1 : 0
                  },
                  frequenciaContato: this.form.value['frequenciaContato'],
                  frequenciaVisita: this.form.value['frequenciaVisita'],
                  origemContato: this.form.value['origemContato'],
                  website: this.form.value['website'],
                  obsPropostas: this.form.value['obsPropostas']
                };
                this.clientesService.updateDadosRelacionamento(formObj).subscribe(function (response) {
                  if (response['responseCode'] === 200) {
                    _this12.onSended();

                    _this12.pnotifyService.success();

                    _this12.cadastroService.onNotifyLoaded(false);

                    _this12.formChanged = false;

                    _this12.location.back();
                  } else {
                    _this12.handleSubmitError();
                  }
                }, function (error) {
                  _this12.handleSubmitError();
                });
              }
            }
          }
        }, {
          key: "handleSubmitError",
          value: function handleSubmitError() {
            this.pnotifyService.error('Ocorreu um erro ao salvar o cadastro.');
            this.cadastroService.onNotifyLoaded(false);
          }
        }, {
          key: "onSended",
          value: function onSended() {
            this.cadastroService.onNotifySended(true);
          }
        }]);

        return ComercialClientesCadastroDadosRelacionamentoFormularioComponent;
      }();

      ComercialClientesCadastroDadosRelacionamentoFormularioComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _formulario_service__WEBPACK_IMPORTED_MODULE_9__["ComercialClientesCadastroDadosRelacionamentoFormularioService"]
        }, {
          type: _cadastro_service__WEBPACK_IMPORTED_MODULE_10__["ComercialClientesCadastroService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]
        }, {
          type: src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_11__["ComercialClientesService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"]
        }];
      };

      ComercialClientesCadastroDadosRelacionamentoFormularioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-clientes-cadastro-dados-relacionamento-formulario',
        template: _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _formulario_service__WEBPACK_IMPORTED_MODULE_9__["ComercialClientesCadastroDadosRelacionamentoFormularioService"], _cadastro_service__WEBPACK_IMPORTED_MODULE_10__["ComercialClientesCadastroService"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_11__["ComercialClientesService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"]])], ComercialClientesCadastroDadosRelacionamentoFormularioComponent);
      /***/
    },

    /***/
    "3Lpy":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/clientes/cadastro/cadastro.component.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Lpy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar [hidden]=\"!loaderNavbar\"></loader-spinner-navbar>\r\n<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<app-header [appTitle]=\"title\">\r\n  <button\r\n    type=\"button\"\r\n    style=\"display: none;\"\r\n    (click)=\"onEdit()\"\r\n    [hidden]=\"!showEditButton\"\r\n    [disabled]=\"loaderNavbar\">\r\n    Editar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    style=\"display: none;\"\r\n    (click)=\"onAdd()\"\r\n    [hidden]=\"!showAddButton\"\r\n    [disabled]=\"loaderNavbar\">\r\n    Adicionar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    style=\"display: none;\"\r\n    (click)=\"onCancel()\"\r\n    [hidden]=\"!showCancelButton\"\r\n    [disabled]=\"loaderNavbar\">\r\n    Cancelar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    style=\"display: none;\"\r\n    (click)=\"onSubmit()\"\r\n    [hidden]=\"!showSubmitButton\"\r\n    [disabled]=\"loaderNavbar\">\r\n    Guardar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\r\n  <div class=\"row mb-3\" *ngIf=\"cliente.codCliente\">\r\n    <div class=\"col\">\r\n      <h5 class=\"d-inline-block mb-0 mr-3\" tooltip=\"Código do cliente\">\r\n        <span class=\"badge badge-dark\">CÓD.: {{ cliente.codCliente }}</span>\r\n      </h5>\r\n      <h6 class=\"d-inline-block mb-0\">{{ cliente.razaoSocial }}</h6>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-9 col-xl-10\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n    <div class=\"col-md-3 col-xl-2 pl-0\">\r\n      <ul class=\"sticky-top list-unstyled border-left pl-3 mb-0\">\r\n        <li class=\"mb-2\">\r\n          <a\r\n            class=\"text-black text-decoration-none\"\r\n            [routerLink]=\"['dados-faturamento']\"\r\n            [routerLinkActive]=\"'font-weight-bolder'\">\r\n            Datos de facturación\r\n          </a>\r\n        </li>\r\n        <li class=\"mb-2\">\r\n          <a\r\n            class=\"text-black text-decoration-none\"\r\n            [routerLink]=\"['enderecos']\"\r\n            [routerLinkActive]=\"'font-weight-bolder'\">\r\n            Direcciones\r\n          </a>\r\n        </li>\r\n        <li class=\"mb-2\">\r\n          <a\r\n            class=\"text-black text-decoration-none\"\r\n            [routerLink]=\"['contatos']\"\r\n            [routerLinkActive]=\"'font-weight-bolder'\">\r\n            Contactos\r\n          </a>\r\n        </li>\r\n        <li class=\"mb-2\">\r\n          <a\r\n            class=\"text-black text-decoration-none\"\r\n            [routerLink]=\"['dados-relacionamento']\"\r\n            [routerLinkActive]=\"'font-weight-bolder'\">\r\n            Datos de la relación\r\n          </a>\r\n        </li>\r\n        <li class=\"mb-2 hidden\">\r\n          <a\r\n            class=\"text-black text-decoration-none\"\r\n            [routerLink]=\"['potencial-compra']\"\r\n            [routerLinkActive]=\"'font-weight-bolder'\">\r\n            Potencial de compra\r\n          </a>\r\n        </li>\r\n        <li class=\"mb-2\">\r\n          <a\r\n            class=\"text-black text-decoration-none\"\r\n            [routerLink]=\"['anexos']\"\r\n            [routerLinkActive]=\"'font-weight-bolder'\">\r\n            Anexos\r\n          </a>\r\n        </li>\r\n        <li class=\"mb-2\">\r\n          <a\r\n            class=\"text-black text-decoration-none\"\r\n            [routerLink]=\"['filial']\"\r\n            [routerLinkActive]=\"'font-weight-bolder'\">\r\n            Filial\r\n          </a>\r\n        </li>\r\n        <!-- <li class=\"mb-2\">\r\n          <a\r\n            class=\"text-decoration-none\"\r\n            [routerLink]=\"['travas']\"\r\n            [routerLinkActive]=\"'font-weight-bolder'\"\r\n            [ngClass]=\"{'text-black': travas == 0, 'text-danger font-weight-bold': travas > 0}\">\r\n            Cerraduras\r\n          </a>\r\n          <span class=\"badge badge-danger\" *ngIf=\"travas > 0\">{{ travas }}</span>\r\n        </li> -->\r\n        <li class=\"mb-2\">\r\n          <a\r\n            class=\"text-black text-decoration-none\"\r\n            [routerLink]=\"['informacoes-financeiras']\"\r\n            [routerLinkActive]=\"'font-weight-bolder'\">\r\n            Información financiera\r\n          </a>\r\n        </li>\r\n        <li class=\"mb-0 hidden\">\r\n          <a\r\n            class=\"text-black text-decoration-none\"\r\n            [routerLink]=\"['informacoes-comerciais']\"\r\n            [routerLinkActive]=\"'font-weight-bolder'\">\r\n            Información comercial\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</app-body>\r\n";
      /***/
    },

    /***/
    "3j3d":
    /*!********************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/cadastro/dados-faturamento/formulario/formulario-data-resolver.guard.ts ***!
      \********************************************************************************************************************/

    /*! exports provided: ComercialClientesCadastroDadosFaturamentoResolverGuard */

    /***/
    function j3d(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialClientesCadastroDadosFaturamentoResolverGuard", function () {
        return ComercialClientesCadastroDadosFaturamentoResolverGuard;
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


      var src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/modules/comercial/services/clientes.service */
      "8ouN"); // Services


      var ComercialClientesCadastroDadosFaturamentoResolverGuard = /*#__PURE__*/function () {
        function ComercialClientesCadastroDadosFaturamentoResolverGuard(clienteService) {
          _classCallCheck(this, ComercialClientesCadastroDadosFaturamentoResolverGuard);

          this.clienteService = clienteService;
        }

        _createClass(ComercialClientesCadastroDadosFaturamentoResolverGuard, [{
          key: "resolve",
          value: function resolve(route) {
            if (route.parent.parent.params && route.parent.parent.params.id) {
              return this.clienteService.getDadosFaturamento(route.parent.parent.params.id);
            }
          }
        }]);

        return ComercialClientesCadastroDadosFaturamentoResolverGuard;
      }();

      ComercialClientesCadastroDadosFaturamentoResolverGuard.ctorParameters = function () {
        return [{
          type: src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_2__["ComercialClientesService"]
        }];
      };

      ComercialClientesCadastroDadosFaturamentoResolverGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_2__["ComercialClientesService"]])], ComercialClientesCadastroDadosFaturamentoResolverGuard);
      /***/
    },

    /***/
    "4TVN":
    /*!*************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/clientes/cadastro/potencial-compra/formulario/formulario.component.html ***!
      \*************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function TVN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<div class=\"row\" *ngIf=\"!loaderFullScreen\">\r\n  <div class=\"col\">\r\n    <div class=\"mtc-title\">Editar potencial de compra (mensual)</div>\r\n    <form [formGroup]=\"form\" autocomplete=\"off\">\r\n      <div formArrayName=\"linhas\">\r\n        <div class=\"form-row\" *ngFor=\"let item of linhas.controls; let i = index\" [formGroupName]=\"i\">\r\n          <div class=\"form-group col-md-2 d-flex\">\r\n            <div class=\"my-auto\">\r\n              <label>{{ item.value.descricao | capitalizeFirst }}</label>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group col-md-10\">\r\n            <div class=\"form-row\">\r\n              <div class=\"col-auto\">\r\n                <div class=\"form-row\">\r\n                  <div class=\"form-group col-4 mb-0 d-flex justify-content-end\">\r\n                    <label class=\"my-auto mr-2\" for=\"de\">De (ton)</label>\r\n                  </div>\r\n                  <div class=\"form-group col-8 mb-0\">\r\n                    <input\r\n                      type=\"text\"\r\n                      class=\"form-control\"\r\n                      id=\"de\"\r\n                      formControlName=\"de\"\r\n                      (input)=\"onInput()\"\r\n                      currencyMask [options]=\"{ align: 'left', prefix: '', thousands: '.', decimal: ',', precision: 3 }\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-auto\">\r\n                <div class=\"form-row\">\r\n                  <div class=\"form-group col-4 mb-0 d-flex justify-content-end\">\r\n                    <label class=\"my-auto mr-2\" for=\"ate\">Até (ton)</label>\r\n                  </div>\r\n                  <div class=\"form-group col-8 mb-0\">\r\n                    <input\r\n                      type=\"text\"\r\n                      class=\"form-control\"\r\n                      id=\"ate\"\r\n                      formControlName=\"ate\"\r\n                      (input)=\"onInput()\"\r\n                      currencyMask [options]=\"{ align: 'left', prefix: '', thousands: '.', decimal: ',', precision: 3 }\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group col-12\"><hr class=\"m-0\"></div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "4zD7":
    /*!*********************************************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/cadastro/potencial-compra/formulario/formulario.component.ts ***!
      \*********************************************************************************************************/

    /*! exports provided: ComercialClientesCadastroPotencialCompraFormularioComponent */

    /***/
    function zD7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialClientesCadastroPotencialCompraFormularioComponent", function () {
        return ComercialClientesCadastroPotencialCompraFormularioComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./formulario.component.html */
      "4TVN");
      /* harmony import */


      var _formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./formulario.component.scss */
      "LqhE");
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _cadastro_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../cadastro.service */
      "N70Q");
      /* harmony import */


      var src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/modules/comercial/services/clientes.service */
      "8ouN"); // Services


      var ComercialClientesCadastroPotencialCompraFormularioComponent = /*#__PURE__*/function () {
        function ComercialClientesCadastroPotencialCompraFormularioComponent(activatedRoute, formBuilder, cadastroService, location, clientesService, pnotifyService) {
          _classCallCheck(this, ComercialClientesCadastroPotencialCompraFormularioComponent);

          this.activatedRoute = activatedRoute;
          this.formBuilder = formBuilder;
          this.cadastroService = cadastroService;
          this.location = location;
          this.clientesService = clientesService;
          this.pnotifyService = pnotifyService;
          this.loaderFullScreen = true;
          this.formChanged = false;
          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialClientesCadastroPotencialCompraFormularioComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this13 = this;

            this.cancelSubscription();
            this.submitSubscription();

            if (this.activatedRoute.snapshot.data['data']['responseCode'] === 200) {
              this.activatedRoute.parent.parent.params.subscribe(function (params) {
                _this13.codCliente = params['id'];

                _this13.setFormBuilder(_this13.activatedRoute.snapshot.data['data']['result']);
              });
            } else {
              this.pnotifyService.error();
              this.location.back();
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.cadastroService.onNotifyLoaded(false);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptionCancel.unsubscribe();
            this.subscriptionSubmit.unsubscribe();
          }
        }, {
          key: "setFormBuilder",
          value: function setFormBuilder(data) {
            this.form = this.formBuilder.group({
              linhas: this.formBuilder.array([])
            });
            this.pushLinha(data);
            this.loaderFullScreen = false;
          }
        }, {
          key: "cancelSubscription",
          value: function cancelSubscription() {
            var _this14 = this;

            this.subscriptionCancel = this.cadastroService.notifyCancelObservable$.subscribe(function (response) {
              if (response) {
                _this14.onCancel();
              }
            });
          }
        }, {
          key: "submitSubscription",
          value: function submitSubscription() {
            var _this15 = this;

            this.subscriptionSubmit = this.cadastroService.notifySubmitObservable$.subscribe(function (response) {
              if (response) {
                _this15.onSubmit();
              }
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
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();

            if (this.form.controls[field].validator) {
              var validationResult = this.form.controls[field].validator(formControl);
              required = validationResult !== null && validationResult.required === true;
            }

            if (required) {
              return 'is-required';
            }
          }
        }, {
          key: "onInput",
          value: function onInput() {
            this.formChanged = true;
          }
        }, {
          key: "linhas",
          get: function get() {
            return this.form.get('linhas');
          }
        }, {
          key: "pushLinha",
          value: function pushLinha(linhas) {
            for (var i = 0; i < linhas.length; i++) {
              this.linhas.push(this.formBuilder.group({
                codCliente: [this.codCliente],
                id: [linhas[i]['id']],
                descricao: [linhas[i]['descricao']],
                de: [linhas[i]['de']],
                ate: [linhas[i]['ate']]
              }));
            }
          }
        }, {
          key: "checkValidators",
          value: function checkValidators() {
            var validation = false;

            for (var i = 0; i < this.form.value['linhas'].length; i++) {
              if (this.form.value['linhas'][i]['ate'] > 0) {
                validation = true;
              }
            }

            return validation;
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
        }, {
          key: "onCancel",
          value: function onCancel() {
            this.location.back();
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this16 = this;

            if (!this.checkValidators()) {
              this.pnotifyService.notice('Informe pelo menos uma linha.');
              return false;
            }

            if (this.form.pristine) {
              this.location.back();
            } else {
              if (this.form.valid) {
                this.cadastroService.onNotifyLoaded(true);
                this.clientesService.updatePotencialCompra(this.form.value['linhas']).subscribe({
                  next: function next(response) {
                    if (response['responseCode'] === 200) {
                      _this16.onSended();

                      _this16.pnotifyService.success();

                      _this16.cadastroService.onNotifyLoaded(false);

                      _this16.formChanged = false;

                      _this16.location.back();
                    } else {
                      _this16.handleSubmitError();
                    }
                  },
                  error: function error(_error5) {
                    _this16.handleSubmitError();
                  }
                });
              }
            }
          }
        }, {
          key: "handleSubmitError",
          value: function handleSubmitError() {
            this.pnotifyService.error('Ocorreu um erro ao salvar o cadastro.');
            this.cadastroService.onNotifyLoaded(false);
          }
        }, {
          key: "onSended",
          value: function onSended() {
            this.cadastroService.onNotifySended(true);
          }
        }]);

        return ComercialClientesCadastroPotencialCompraFormularioComponent;
      }();

      ComercialClientesCadastroPotencialCompraFormularioComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _cadastro_service__WEBPACK_IMPORTED_MODULE_8__["ComercialClientesCadastroService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]
        }, {
          type: src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_9__["ComercialClientesService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"]
        }];
      };

      ComercialClientesCadastroPotencialCompraFormularioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-clientes-cadastro-potencial-compra-formulario',
        template: _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _cadastro_service__WEBPACK_IMPORTED_MODULE_8__["ComercialClientesCadastroService"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_9__["ComercialClientesService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"]])], ComercialClientesCadastroPotencialCompraFormularioComponent);
      /***/
    },

    /***/
    "5Q7p":
    /*!****************************************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/cadastro/enderecos/formulario/formulario.component.scss ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Q7p(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NsaWVudGVzL2NhZGFzdHJvL2VuZGVyZWNvcy9mb3JtdWxhcmlvL2Zvcm11bGFyaW8uY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "6eNF":
    /*!******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/clientes/cadastro/enderecos/formulario/formulario.component.html ***!
      \******************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function eNF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<div class=\"row\" *ngIf=\"!loaderFullScreen\">\r\n  <div class=\"col\">\r\n    <div class=\"mtc-title\">Editar endereço</div>\r\n    <form [formGroup]=\"form\" autocomplete=\"off\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-2\">\r\n          <label for=\"cep\">CEP</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"cep\"\r\n            formControlName=\"cep\"\r\n            (input)=\"onInput(); onInputCep(detalhes);\"\r\n            [ngClass]=\"onFieldError('cep') + ' ' + onFieldRequired('cep')\"\r\n            cep [textMask]=\"{mask: MASKS.cep.textMask}\">\r\n          <invalid-form-control [show]=\"onFieldInvalid('cep') == 'required'\" message=\"CEP é obrigatório.\"></invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group\" [ngClass]=\"{'col-md-10': action == 'novo', 'col-md-8': action == 'editar'}\">\r\n          <label for=\"endereco\">Endereço</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"endereco\"\r\n            formControlName=\"endereco\"\r\n            (input)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('endereco') + ' ' + onFieldRequired('endereco')\">\r\n          <invalid-form-control [show]=\"onFieldInvalid('endereco') == 'required'\" message=\"Endereço é obrigatório.\"></invalid-form-control>\r\n          <invalid-form-control [show]=\"onFieldInvalid('endereco') == 'maxlength'\" [message]=\"maxLengthMessages.endereco\"></invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group col-md-2\" *ngIf=\"action == 'editar'\">\r\n          <label for=\"status\">Status</label>\r\n          <select\r\n            class=\"form-control\"\r\n            id=\"status\"\r\n            formControlName=\"status\"\r\n            (change)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('status') + ' ' + onFieldRequired('status')\">\r\n            <option value=\"1\">ATIVO</option>\r\n            <option value=\"2\">INATIVO</option>\r\n          </select>\r\n          <invalid-form-control [show]=\"onFieldInvalid('status') == 'required'\" message=\"Status é obrigatório.\"></invalid-form-control>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"complemento\">Complemento</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"complemento\"\r\n            formControlName=\"complemento\"\r\n            (input)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('complemento')\">\r\n            <invalid-form-control [show]=\"onFieldInvalid('complemento') == 'maxlength'\" [message]=\"maxLengthMessages.complemento\"></invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"referencia\">Referência</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"referencia\"\r\n            formControlName=\"referencia\"\r\n            (input)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('referencia')\">\r\n          <invalid-form-control [show]=\"onFieldInvalid('referencia') == 'maxlength'\" [message]=\"maxLengthMessages.referencia\"></invalid-form-control>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"bairro\">Bairro</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"bairro\"\r\n            formControlName=\"bairro\"\r\n            (input)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('bairro') + ' ' + onFieldRequired('bairro')\">\r\n          <invalid-form-control [show]=\"onFieldInvalid('bairro') == 'required'\" message=\"Bairro é obrigatório.\"></invalid-form-control>\r\n          <invalid-form-control [show]=\"onFieldInvalid('bairro') == 'maxlength'\" [message]=\"maxLengthMessages.bairro\"></invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group col-md-6 \">\r\n          <label for=\"cidade\">Cidade</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"cidade\"\r\n            formControlName=\"cidade\"\r\n            (input)=\"onInput()\"\r\n            (blur)=\"onInputCidade()\"\r\n            [ngClass]=\"onFieldError('cidade') + ' ' + onFieldRequired('cidade')\">\r\n          <invalid-form-control [show]=\"onFieldInvalid('cidade') == 'required'\" message=\"Cidade é obrigatório.\"></invalid-form-control>\r\n          <invalid-form-control [show]=\"onFieldInvalid('cidade') == 'maxlength'\" [message]=\"maxLengthMessages.cidade\"></invalid-form-control>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"uf\">UF</label>\r\n          <select\r\n            class=\"form-control\"\r\n            id=\"uf\"\r\n            formControlName=\"uf\"\r\n            (change)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('uf') + ' ' + onFieldRequired('uf')\">\r\n            <option value=\"\">SELECIONE UMA OPÇÃO</option>\r\n            <option *ngFor=\"let item of estados\" [value]=\"item.sigla\">{{ item.descricao }}</option>\r\n          </select>\r\n          <invalid-form-control [show]=\"onFieldInvalid('uf') == 'required'\" message=\"UF é obrigatório.\"></invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"regiaoAtuacaoComercial\">Região de atuação comercial</label>\r\n          <select\r\n            class=\"form-control\"\r\n            id=\"regiaoAtuacaoComercial\"\r\n            formControlName=\"regiaoAtuacaoComercial\"\r\n            (change)=\"onInput()\">\r\n            <option value=\"\">SELECIONE UMA OPÇÃO</option>\r\n            <option *ngFor=\"let item of regioesAtuacaoComercial\" [value]=\"item.id\">{{ item.descricao }}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-auto mb-md-0\">\r\n          <div class=\"custom-control custom-checkbox\">\r\n            <input\r\n              type=\"checkbox\"\r\n              class=\"custom-control-input\"\r\n              id=\"principal\"\r\n              formControlName=\"principal\">\r\n            <label class=\"custom-control-label\" for=\"principal\">Endereço principal</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group col-auto mb-md-0\">\r\n          <div class=\"custom-control custom-checkbox\">\r\n            <input\r\n              type=\"checkbox\"\r\n              class=\"custom-control-input\"\r\n              id=\"cobranca\"\r\n              formControlName=\"cobranca\">\r\n            <label class=\"custom-control-label\" for=\"cobranca\">Endereço de cobrança</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group col-auto mb-md-0\">\r\n          <div class=\"custom-control custom-checkbox\">\r\n            <input\r\n              type=\"checkbox\"\r\n              class=\"custom-control-input\"\r\n              id=\"entrega\"\r\n              formControlName=\"entrega\"\r\n              (change)=\"onEnderecoEntrega()\">\r\n            <label class=\"custom-control-label\" for=\"entrega\">Endereço de entrega</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div [hidden]=\"!exibirDadosEntrega\">\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"tipoEntrega\">Tipo do Endereço de Entrega</label>\r\n            <select  \r\n              class=\"form-control\"\r\n              id=\"TP_ACAO\"\r\n              formControlName=\"TP_ACAO\"\r\n              (ngModelChange)=\"selecaoCliente($event)\"\r\n            >\r\n              <option></option>\r\n              <option value=\"obra\">Endereço Obra</option>\r\n              <option value=\"filial\">Endereço Filial</option>\r\n              <option value=\"industrialização\">End. Industrialização</option>\r\n            </select>\r\n          </div>\r\n          <div *ngIf=\"exibirSelecaoCliente\" class=\"form-group col-md-6\">\r\n            <div class=\"mb-1 d-flex justify-content-between w-100\" style=\"height: 19px\">\r\n              <label class=\"my-auto\" for=\"COD_CLIE_TERC_RAZ\">Cliente</label>\r\n              <div class=\"my-auto text-uppercase\" style=\"font-size: 11px\">\r\n                <a\r\n                  id=\"top-links\"\r\n                  class=\"text-primary mr-2\"\r\n                  (click)=\"openModal(pesquisaClientes)\">\r\n                  Selecionar\r\n                </a>\r\n              </div>\r\n            </div>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"COD_CLIE_TERC_RAZ\"\r\n              formControlName=\"COD_CLIE_TERC_RAZ\"\r\n              [readonly]=\"visualizar\"\r\n              placeholder=\"Selecionar...\"\r\n              [attr.disabled]=\"true\"\r\n            />\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div [hidden]=\"!exibirDadosEntrega\">\r\n        <div class=\"form-row\">\r\n          <div class=\"col\"><hr></div>\r\n        </div>\r\n        <div class=\"mtc-title\">Dados de entrega</div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"titulo\">Título do local de entrega</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"titulo\"\r\n              formControlName=\"titulo\"\r\n              (input)=\"onInput()\"\r\n              [ngClass]=\"onFieldError('titulo')\">\r\n            <invalid-form-control [show]=\"onFieldInvalid('titulo') == 'maxlength'\" [message]=\"maxLengthMessages.titulo\"></invalid-form-control>\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"regiaoEntrega\">Região de entrega</label>\r\n            <select\r\n              class=\"form-control\"\r\n              id=\"regiaoEntrega\"\r\n              formControlName=\"regiaoEntrega\"\r\n              (change)=\"onInput()\">\r\n              <option value=\"\">SELECIONE UMA OPÇÃO</option>\r\n              <option *ngFor=\"let item of regioesEntrega\" [value]=\"item.id\">{{ item.descricao }}</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div formGroupName=\"diasEntrega\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col\">\r\n              <label class=\"mb-2\">Dias para realizar entregas</label>\r\n              <div class=\"form-row\" formGroupName=\"segunda\">\r\n                <div class=\"form-group col-md-2 d-flex\">\r\n                  <div class=\"custom-control custom-checkbox my-auto\">\r\n                    <input\r\n                      type=\"checkbox\"\r\n                      class=\"custom-control-input\"\r\n                      id=\"segunda\"\r\n                      formControlName=\"checked\"\r\n                      (change)=\"onInput(); onDiaEntregas('segunda')\">\r\n                    <label class=\"custom-control-label\" for=\"segunda\">Segunda-feira</label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group col-md-10\">\r\n                  <div class=\"form-row\">\r\n                    <div class=\"col-auto d-flex pr-4\">\r\n                      <label class=\"my-auto mr-2\">Horário mínimo</label>\r\n                      <timepicker\r\n                        [showMeridian]=\"false\"\r\n                        [showSpinners]=\"false\"\r\n                        [mousewheel]=\"true\"\r\n                        formControlName=\"minimo\"\r\n                        (input)=\"onInput()\">\r\n                      </timepicker>\r\n                    </div>\r\n                    <div class=\"col-auto d-flex\">\r\n                      <label class=\"my-auto mr-2\">Horário máximo</label>\r\n                      <timepicker\r\n                        [showMeridian]=\"false\"\r\n                        [showSpinners]=\"false\"\r\n                        [mousewheel]=\"true\"\r\n                        formControlName=\"maximo\"\r\n                        (input)=\"onInput()\">\r\n                      </timepicker>\r\n                    </div>\r\n                    <div class=\"col-auto d-flex\">\r\n                      <a\r\n                        class=\"text-secondary my-auto\"\r\n                        href=\"javascript:void(0)\"\r\n                        (click)=\"onReplicarHorario('segunda')\">\r\n                        <b>Replicar horário</b>\r\n                      </a>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-row\" formGroupName=\"terca\">\r\n                <div class=\"form-group col-md-2 d-flex\">\r\n                  <div class=\"custom-control custom-checkbox my-auto\">\r\n                    <input\r\n                      type=\"checkbox\"\r\n                      class=\"custom-control-input\"\r\n                      id=\"terca\"\r\n                      formControlName=\"checked\"\r\n                      (change)=\"onInput(); onDiaEntregas('terca')\">\r\n                    <label class=\"custom-control-label\" for=\"terca\">Terça-feira</label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group col-md-10\">\r\n                  <div class=\"form-row\">\r\n                    <div class=\"col-auto d-flex pr-4\">\r\n                      <label class=\"my-auto mr-2\">Horário mínimo</label>\r\n                      <timepicker\r\n                        [showMeridian]=\"false\"\r\n                        [showSpinners]=\"false\"\r\n                        [mousewheel]=\"true\"\r\n                        formControlName=\"minimo\"\r\n                        (input)=\"onInput()\">\r\n                      </timepicker>\r\n                    </div>\r\n                    <div class=\"col-auto d-flex\">\r\n                      <label class=\"my-auto mr-2\">Horário máximo</label>\r\n                      <timepicker\r\n                        [showMeridian]=\"false\"\r\n                        [showSpinners]=\"false\"\r\n                        [mousewheel]=\"true\"\r\n                        formControlName=\"maximo\"\r\n                        (input)=\"onInput()\">\r\n                      </timepicker>\r\n                    </div>\r\n                    <div class=\"col-auto d-flex\">\r\n                      <a\r\n                        class=\"text-secondary my-auto\"\r\n                        href=\"javascript:void(0)\"\r\n                        (click)=\"onReplicarHorario('terca')\">\r\n                        <b>Replicar horário</b>\r\n                      </a>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-row\" formGroupName=\"quarta\">\r\n                <div class=\"form-group col-md-2 d-flex\">\r\n                  <div class=\"custom-control custom-checkbox my-auto\">\r\n                    <input\r\n                      type=\"checkbox\"\r\n                      class=\"custom-control-input\"\r\n                      id=\"quarta\"\r\n                      formControlName=\"checked\"\r\n                      (change)=\"onInput(); onDiaEntregas('quarta')\">\r\n                    <label class=\"custom-control-label\" for=\"quarta\">Quarta-feira</label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group col-md-10\">\r\n                  <div class=\"form-row\">\r\n                    <div class=\"col-auto d-flex pr-4\">\r\n                      <label class=\"my-auto mr-2\">Horário mínimo</label>\r\n                      <timepicker\r\n                        [showMeridian]=\"false\"\r\n                        [showSpinners]=\"false\"\r\n                        [mousewheel]=\"true\"\r\n                        formControlName=\"minimo\"\r\n                        (input)=\"onInput()\">\r\n                      </timepicker>\r\n                    </div>\r\n                    <div class=\"col-auto d-flex\">\r\n                      <label class=\"my-auto mr-2\">Horário máximo</label>\r\n                      <timepicker\r\n                        [showMeridian]=\"false\"\r\n                        [showSpinners]=\"false\"\r\n                        [mousewheel]=\"true\"\r\n                        formControlName=\"maximo\"\r\n                        (input)=\"onInput()\">\r\n                      </timepicker>\r\n                    </div>\r\n                    <div class=\"col-auto d-flex\">\r\n                      <a\r\n                        class=\"text-secondary my-auto\"\r\n                        href=\"javascript:void(0)\"\r\n                        (click)=\"onReplicarHorario('quarta')\">\r\n                        <b>Replicar horário</b>\r\n                      </a>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-row\" formGroupName=\"quinta\">\r\n                <div class=\"form-group col-md-2 d-flex\">\r\n                  <div class=\"custom-control custom-checkbox my-auto\">\r\n                    <input\r\n                      type=\"checkbox\"\r\n                      class=\"custom-control-input\"\r\n                      id=\"quinta\"\r\n                      formControlName=\"checked\"\r\n                      (change)=\"onInput(); onDiaEntregas('quinta')\">\r\n                    <label class=\"custom-control-label\" for=\"quinta\">Quinta-feira</label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group col-md-10\">\r\n                  <div class=\"form-row\">\r\n                    <div class=\"col-auto d-flex pr-4\">\r\n                      <label class=\"my-auto mr-2\">Horário mínimo</label>\r\n                      <timepicker\r\n                        [showMeridian]=\"false\"\r\n                        [showSpinners]=\"false\"\r\n                        [mousewheel]=\"true\"\r\n                        formControlName=\"minimo\"\r\n                        (input)=\"onInput()\">\r\n                      </timepicker>\r\n                    </div>\r\n                    <div class=\"col-auto d-flex\">\r\n                      <label class=\"my-auto mr-2\">Horário máximo</label>\r\n                      <timepicker\r\n                        [showMeridian]=\"false\"\r\n                        [showSpinners]=\"false\"\r\n                        [mousewheel]=\"true\"\r\n                        formControlName=\"maximo\"\r\n                        (input)=\"onInput()\">\r\n                      </timepicker>\r\n                    </div>\r\n                    <div class=\"col-auto d-flex\">\r\n                      <a\r\n                        class=\"text-secondary my-auto\"\r\n                        href=\"javascript:void(0)\"\r\n                        (click)=\"onReplicarHorario('quinta')\">\r\n                        <b>Replicar horário</b>\r\n                      </a>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-row\" formGroupName=\"sexta\">\r\n                <div class=\"form-group col-md-2 d-flex\">\r\n                  <div class=\"custom-control custom-checkbox my-auto\">\r\n                    <input\r\n                      type=\"checkbox\"\r\n                      class=\"custom-control-input\"\r\n                      id=\"sexta\"\r\n                      formControlName=\"checked\"\r\n                      (change)=\"onInput(); onDiaEntregas('sexta')\">\r\n                    <label class=\"custom-control-label\" for=\"sexta\">Sexta-feira</label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group col-md-10\">\r\n                  <div class=\"form-row\">\r\n                    <div class=\"col-auto d-flex pr-4\">\r\n                      <label class=\"my-auto mr-2\">Horário mínimo</label>\r\n                      <timepicker\r\n                        [showMeridian]=\"false\"\r\n                        [showSpinners]=\"false\"\r\n                        [mousewheel]=\"true\"\r\n                        formControlName=\"minimo\"\r\n                        (input)=\"onInput()\">\r\n                      </timepicker>\r\n                    </div>\r\n                    <div class=\"col-auto d-flex\">\r\n                      <label class=\"my-auto mr-2\">Horário máximo</label>\r\n                      <timepicker\r\n                        [showMeridian]=\"false\"\r\n                        [showSpinners]=\"false\"\r\n                        [mousewheel]=\"true\"\r\n                        formControlName=\"maximo\"\r\n                        (input)=\"onInput()\">\r\n                      </timepicker>\r\n                    </div>\r\n                    <div class=\"col-auto d-flex\">\r\n                      <a\r\n                        class=\"text-secondary my-auto\"\r\n                        href=\"javascript:void(0)\"\r\n                        (click)=\"onReplicarHorario('sexta')\">\r\n                        <b>Replicar horário</b>\r\n                      </a>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-row\" formGroupName=\"sabado\">\r\n                <div class=\"form-group col-md-2 d-flex\">\r\n                  <div class=\"custom-control custom-checkbox my-auto\">\r\n                    <input\r\n                      type=\"checkbox\"\r\n                      class=\"custom-control-input\"\r\n                      id=\"sabado\"\r\n                      formControlName=\"checked\"\r\n                      (change)=\"onInput(); onDiaEntregas('sabado')\">\r\n                    <label class=\"custom-control-label\" for=\"sabado\">Sábado</label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group col-md-10\">\r\n                  <div class=\"form-row\">\r\n                    <div class=\"col-auto d-flex pr-4\">\r\n                      <label class=\"my-auto mr-2\">Horário mínimo</label>\r\n                      <timepicker\r\n                        [showMeridian]=\"false\"\r\n                        [showSpinners]=\"false\"\r\n                        [mousewheel]=\"true\"\r\n                        formControlName=\"minimo\"\r\n                        (input)=\"onInput()\">\r\n                      </timepicker>\r\n                    </div>\r\n                    <div class=\"col-auto d-flex\">\r\n                      <label class=\"my-auto mr-2\">Horário máximo</label>\r\n                      <timepicker\r\n                        [showMeridian]=\"false\"\r\n                        [showSpinners]=\"false\"\r\n                        [mousewheel]=\"true\"\r\n                        formControlName=\"maximo\"\r\n                        (input)=\"onInput()\">\r\n                      </timepicker>\r\n                    </div>\r\n                    <div class=\"col-auto d-flex\">\r\n                      <a\r\n                        class=\"text-secondary my-auto\"\r\n                        href=\"javascript:void(0)\"\r\n                        (click)=\"onReplicarHorario('sabado')\">\r\n                        <b>Replicar horário</b>\r\n                      </a>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-row\" formGroupName=\"domingo\">\r\n                <div class=\"form-group col-md-2 d-flex\">\r\n                  <div class=\"custom-control custom-checkbox my-auto\">\r\n                    <input\r\n                      type=\"checkbox\"\r\n                      class=\"custom-control-input\"\r\n                      id=\"domingo\"\r\n                      formControlName=\"checked\"\r\n                      (change)=\"onInput(); onDiaEntregas('domingo')\">\r\n                    <label class=\"custom-control-label\" for=\"domingo\">Domingo</label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group col-md-10\">\r\n                  <div class=\"form-row\">\r\n                    <div class=\"col-auto d-flex pr-4\">\r\n                      <label class=\"my-auto mr-2\">Horário mínimo</label>\r\n                      <timepicker\r\n                        [showMeridian]=\"false\"\r\n                        [showSpinners]=\"false\"\r\n                        [mousewheel]=\"true\"\r\n                        formControlName=\"minimo\"\r\n                        (input)=\"onInput()\">\r\n                      </timepicker>\r\n                    </div>\r\n                    <div class=\"col-auto d-flex\">\r\n                      <label class=\"my-auto mr-2\">Horário máximo</label>\r\n                      <timepicker\r\n                        [showMeridian]=\"false\"\r\n                        [showSpinners]=\"false\"\r\n                        [mousewheel]=\"true\"\r\n                        formControlName=\"maximo\"\r\n                        (input)=\"onInput()\">\r\n                      </timepicker>\r\n                    </div>\r\n                    <div class=\"col-auto d-flex\">\r\n                      <a\r\n                        class=\"text-secondary my-auto\"\r\n                        href=\"javascript:void(0)\"\r\n                        (click)=\"onReplicarHorario('domingo')\">\r\n                        <b>Replicar horário</b>\r\n                      </a>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"tipoMaterial\">Tipo de material</label>\r\n            <select\r\n              class=\"form-control\"\r\n              id=\"tipoMaterial\"\r\n              formControlName=\"tipoMaterial\"\r\n              (change)=\"onInput()\">\r\n              <option value=\"\">SELECIONE UMA OPÇÃO</option>\r\n              <option *ngFor=\"let item of tiposMaterial\" [value]=\"item.id\">{{ item.descricao }}</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"tipoDescarga\">Tipo de descarga</label>\r\n            <select\r\n              class=\"form-control\"\r\n              id=\"tipoDescarga\"\r\n              formControlName=\"tipoDescarga\"\r\n              (change)=\"onInput()\"\r\n              [ngClass]=\"onFieldError('tipoDescarga') + ' ' + onFieldRequired('tipoDescarga')\">\r\n              <option value=\"\">SELECIONE UMA OPÇÃO</option>\r\n              <option *ngFor=\"let item of tiposDescarga\" [value]=\"item.id\">{{ item.descricao }}</option>\r\n            </select>\r\n            <invalid-form-control [show]=\"onFieldInvalid('tipoDescarga') == 'required'\" message=\"Tipo de descarga é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"modoDescarga\">Modo de descarga</label>\r\n            <select\r\n              class=\"form-control\"\r\n              id=\"modoDescarga\"\r\n              formControlName=\"modoDescarga\"\r\n              (change)=\"onInput()\"\r\n              [ngClass]=\"onFieldError('modoDescarga') + ' ' + onFieldRequired('modoDescarga')\">\r\n              <option value=\"\">SELECIONE UMA OPÇÃO</option>\r\n              <option *ngFor=\"let item of modosDescarga\" [value]=\"item.id\">{{ item.descricao }}</option>\r\n            </select>\r\n            <invalid-form-control [show]=\"onFieldInvalid('modoDescarga') == 'required'\" message=\"Modo de descarga é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"tiposVeiculos\">Tipos de veículo</label>\r\n            <ng-select\r\n              [items]=\"tiposVeiculos\"\r\n              [multiple]=\"true\"\r\n              [closeOnSelect]=\"false\"\r\n              labelForId=\"tiposVeiculos\"\r\n              bindValue=\"id\"\r\n              bindLabel=\"descricao\"\r\n              formControlName=\"tiposVeiculos\"\r\n              (change)=\"onInput()\"\r\n              [ngClass]=\"onFieldError('tiposVeiculos') + ' ' + onFieldRequired('tiposVeiculos')\">\r\n            </ng-select>\r\n            <invalid-form-control [show]=\"onFieldInvalid('tiposVeiculos') == 'required'\" message=\"Tipos de veículo é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"dadosEspeciais\">Dados especiais</label>\r\n            <ng-select\r\n              [items]=\"dadosEspeciais\"\r\n              [multiple]=\"true\"\r\n              [closeOnSelect]=\"false\"\r\n              labelForId=\"dadosEspeciais\"\r\n              bindValue=\"id\"\r\n              bindLabel=\"descricao\"\r\n              formControlName=\"dadosEspeciais\"\r\n              (change)=\"onInput()\">\r\n            </ng-select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div formArrayName=\"anexos\" class=\"mb-4 col-6\">\r\n            <div class=\"row\">\r\n              <div class=\"col d-flex align-items-start\">\r\n                <div class=\"mtc-title mb-0\">Anexos</div>\r\n                <div class=\"ml-2\">\r\n                  <ng-template #tooltipAnexos>\r\n                    <p class=\"mb-0\"><b>Como sugestão para auxílio na análise e agilidade no processo, \r\n                      favor inserir os documentos que vinculem a empresa de faturamento com o local de entrega, \r\n                      exemplos em caso de obra: CEI, Projeto, Alvará de Funcionamento, Contrato de Prestação de Serviços, Licitações, etc\r\n                    </b></p>\r\n                    <p class=\"text-nowrap mb-0\"><br><br></p>\r\n                    <p class=\"mb-0\"><b>Entregas para indústria e terceiros, sugerimos inserir (Receita e Sintegra)</b></p>\r\n                    <p class=\"text-nowrap mb-0\"><br><br></p>\r\n                    <p class=\"mb-0\"><b>Faturamento para pessoa física, recomendamos anexar: CNH/RG e comprovante de endereço do local da entrega, comprovando o seu vínculo</b></p>\r\n                    <p class=\"text-nowrap mb-0\"><br><br></p>\r\n                  </ng-template>\r\n                  <i class=\"far fa-question-circle\" [tooltip]=\"tooltipAnexos\"></i>\r\n                </div>\r\n              </div>\r\n              <div class=\"col\">\r\n                <label for=\"novoAnexo\" class=\"d-flex justify-content-end align-items-center\" style=\"cursor: pointer;\">\r\n                  <p class=\"btn btn-sm btn-outline-primary m-0\">\r\n                    <i class=\"fas fa-plus\"></i>\r\n                    <span>Novo</span>\r\n                  </p>\r\n                </label>\r\n                <input\r\n                  id=\"novoAnexo\"\r\n                  type=\"file\"\r\n                  (change)=\"appendFile($event.target.files)\"\r\n                  class=\"d-none\"\r\n                  >\r\n              </div>\r\n            </div>\r\n            <div class=\"row\" *ngIf=\"showAnexos && form.value.anexos.length > 0\">\r\n              <div class=\"col mb-5\">\r\n                <custom-table [config]=\"tableConfigAnexos\">\r\n                  <ng-template #tbody let-tbody>\r\n                    <tr *ngFor=\"let anexo of anexos.controls; let i = index\" [formGroupName]=\"i\">\r\n                      <td style=\"width: 90%\">\r\n                        {{ form.value.anexos[i].codAnexo }} - {{ form.value.anexos[i].nomeAnexo | uppercase }}\r\n                      </td>\r\n                      <td class=\"text-center\" style=\"width: 5%\">\r\n                        <a\r\n                          [href]=\"form.value.anexos[i].linkAnexo\"\r\n                          *ngIf=\"form.value.anexos[i].linkAnexo != null\"\r\n                          target=\"_blank\"\r\n                          class=\"btn-icon-sm mx-2 text-black\"\r\n                          tooltip=\"visualizar\">\r\n                          <i class=\"far fa-eye\"></i>\r\n                        </a>\r\n                      </td>\r\n                      <td class=\"text-center\" style=\"width: 5%\">\r\n                        <btn-icon\r\n                          icon=\"fas fa-trash\"\r\n                          size=\"small\"\r\n                          tooltip=\"Excluir\"\r\n                          (click)=\"onDeleteAnexo(form.value.anexos[i].codAnexo, i)\">\r\n                        </btn-icon>\r\n                      </td>\r\n                    </tr>\r\n                  </ng-template>\r\n                </custom-table>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\" *ngIf=\"showAnexos && form.value.anexos.length === 0\">\r\n              <div class=\"col\">\r\n                <message\r\n                  icon=\"fas fa-exchange-alt\"\r\n                  text=\"Nenhum documento encontrado\">\r\n                </message>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"mb-4 col-6\">\r\n            <div class=\"row\">\r\n              <div class=\"col d-flex align-items-center\">\r\n                <div class=\"mtc-title mb-0\">Observação</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col mt-3\">\r\n                <textarea \r\n                  id=\"observacao\" \r\n                  class=\"form-control\" \r\n                  formControlName=\"observacao\"\r\n                  (input)=\"onInput()\"></textarea>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n<ng-template #detalhes>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">Escolha o endereço a ser utilizado</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"onModalClose()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <form [formGroup]=\"formEnderecos\" (ngSubmit)=\"setValueEndereco()\" autocomplete=\"off\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-12\" *ngFor=\"let endereco of enderecosOp; let i = index\">\r\n          <div class=\"custom-control custom-radio\">\r\n            <input [id]=\"i\" class=\"custom-control-input\" formControlName=\"enderecosRetorno\" type=\"radio\" [value]=\"endereco\"/>\r\n            <label class=\"custom-control-label\" [for]=\"i\">{{endereco.logradouro}}, {{endereco.unidade}} - {{endereco.bairro}}, {{endereco.localidade}} - {{endereco.uf}}, {{endereco.cep}}</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-12 d-flex justify-content-center\">\r\n          <button class=\"btn btn-primary\">Selecionar</button>\r\n        </div> \r\n      </div>\r\n    </form>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #pesquisaClientes>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">Busqueda de Clientes</h4>\r\n    <div class=\"d-flex justify-content-center align-items-center\">\r\n      <div class=\"spinner-border text-primary mr-2\" role=\"status\" *ngIf=\"loadingClientes\">\r\n        <span class=\"sr-only\">Loading...</span>\r\n      </div>\r\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"onModalClose()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <advanced-filter>\r\n      <form [formGroup]=\"formClientes\">\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-4\">\r\n            <label for=\"cdItem\">Buscar por</label>\r\n            <select\r\n              class=\"form-control custom-select\"\r\n              formControlName=\"buscarPor\"\r\n            >\r\n              <option value=\"NM_CLIE\" selected>Código, nome fantasia ou razão social</option>\r\n            </select>\r\n          </div>\r\n  \r\n          <div class=\"form-group col-8\">\r\n            <label>Termo de Pesquisa</label>\r\n            <div class=\"input-group\">\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                formControlName=\"pesquisa\"\r\n                >\r\n                <div class=\"input-group-append\">\r\n                  <span \r\n                    [tooltip]=\"formClientes.valid == false ? 'Digite um termo de pesquisa':''\"\r\n                    container=\"body\"\r\n                    placement =\"left\"\r\n                  >\r\n                    <button\r\n                    style=\"height: 100%; margin-left: 10px;\"\r\n                      [disabled]=\"formClientes.valid == false\"\r\n                      class=\"input-group-text hover\"\r\n                      (click)=\"getClientes()\"\r\n                      >\r\n                      <i class=\"fas fa-search\"></i>\r\n                    </button>\r\n                  </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </advanced-filter>\r\n    <custom-table *ngIf=\"!noClientes\" class=\"text-center\">\r\n      <ng-template #thead let-thead>\r\n        <tr>\r\n          <th>Cód Cliente </th>\r\n          <th>Nome Fantasia</th>\r\n          <th>Razão Social </th>\r\n          <th></th>\r\n        </tr>\r\n      </ng-template>\r\n      <ng-template #tbody let-tbody>\r\n        <tr *ngFor=\"let cliente of clientes | slice : begin : end; let i = index\">\r\n          <td>{{ cliente.codCliente }}</td>\r\n          <td>{{ cliente.nomeCliente }}</td>\r\n          <td>{{ cliente.razaoSocial }}</td>\r\n          <td>\r\n            <button\r\n              class=\"btn-icon-sm\"\r\n              tooltip=\"Salvar Informações\"\r\n              container=\"body\"\r\n              (click)=\"setCliente(cliente)\"\r\n            >\r\n              <i class=\"far fa-save\"></i>\r\n            </button>\r\n          </td>\r\n        </tr>\r\n      </ng-template>\r\n    </custom-table>\r\n  </div>\r\n</ng-template>\r\n";
      /***/
    },

    /***/
    "8M0X":
    /*!*****************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/clientes/cadastro/dados-relacionamento/formulario/formulario.component.html ***!
      \*****************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function M0X(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<div class=\"row\" *ngIf=\"!loaderFullScreen\">\r\n  <div class=\"col\">\r\n    <div class=\"mtc-title\">Editar datos de relación</div>\r\n    <form [formGroup]=\"form\" autocomplete=\"off\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"tipoAtendimento\">Tipo de servicio</label>\r\n          <select\r\n            class=\"form-control\"\r\n            id=\"tipoAtendimento\"\r\n            formControlName=\"tipoAtendimento\"\r\n            (change)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('tipoAtendimento') + ' ' + onFieldRequired('tipoAtendimento')\">\r\n            <option value=\"\">SELECCIONE UNA OPCION</option>\r\n            <option *ngFor=\"let item of tiposAtendimento\" [value]=\"item.id\">{{ item.descricao }}</option>\r\n          </select>\r\n          <invalid-form-control [show]=\"onFieldInvalid('tipoAtendimento')\" message=\"Tipo de atendimento é obrigatório.\"></invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"periodo\">Períodos</label>\r\n          <select\r\n            class=\"form-control\"\r\n            id=\"periodo\"\r\n            formControlName=\"periodo\"\r\n            (change)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('periodo') + ' ' + onFieldRequired('periodo')\">\r\n            <option value=\"\">SELECCIONE UNA OPCION</option>\r\n            <option *ngFor=\"let item of periodos\" [value]=\"item.id\">{{ item.descricao }}</option>\r\n          </select>\r\n          <invalid-form-control [show]=\"onFieldInvalid('periodo')\" message=\"Períodos es obligatorio.\"></invalid-form-control>\r\n        </div>\r\n      </div>\r\n      <div formGroupName=\"diasContato\">\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col\">\r\n            <label>Mejores dias para contactar</label>\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-auto\">\r\n                <div class=\"custom-control custom-checkbox\">\r\n                  <input\r\n                    type=\"checkbox\"\r\n                    class=\"custom-control-input\"\r\n                    id=\"segunda\"\r\n                    formControlName=\"segunda\">\r\n                  <label class=\"custom-control-label\" for=\"segunda\">Lunes</label>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group col-auto\">\r\n                <div class=\"custom-control custom-checkbox\">\r\n                  <input\r\n                    type=\"checkbox\"\r\n                    class=\"custom-control-input\"\r\n                    id=\"terca\"\r\n                    formControlName=\"terca\">\r\n                  <label class=\"custom-control-label\" for=\"terca\">Martes</label>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group col-auto\">\r\n                <div class=\"custom-control custom-checkbox\">\r\n                  <input\r\n                    type=\"checkbox\"\r\n                    class=\"custom-control-input\"\r\n                    id=\"quarta\"\r\n                    formControlName=\"quarta\">\r\n                  <label class=\"custom-control-label\" for=\"quarta\">Miercoles</label>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group col-auto\">\r\n                <div class=\"custom-control custom-checkbox\">\r\n                  <input\r\n                    type=\"checkbox\"\r\n                    class=\"custom-control-input\"\r\n                    id=\"quinta\"\r\n                    formControlName=\"quinta\">\r\n                  <label class=\"custom-control-label\" for=\"quinta\">Jueves</label>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group col-auto\">\r\n                <div class=\"custom-control custom-checkbox\">\r\n                  <input\r\n                    type=\"checkbox\"\r\n                    class=\"custom-control-input\"\r\n                    id=\"sexta\"\r\n                    formControlName=\"sexta\">\r\n                  <label class=\"custom-control-label\" for=\"sexta\">Viernes</label>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group col-auto\">\r\n                <div class=\"custom-control custom-checkbox\">\r\n                  <input\r\n                    type=\"checkbox\"\r\n                    class=\"custom-control-input\"\r\n                    id=\"sabado\"\r\n                    formControlName=\"sabado\">\r\n                  <label class=\"custom-control-label\" for=\"sabado\">Sábado</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"frequenciaContato\">Frequência de contatos</label>\r\n          <select\r\n            class=\"form-control\"\r\n            id=\"frequenciaContato\"\r\n            formControlName=\"frequenciaContato\"\r\n            (change)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('frequenciaContato') + ' ' + onFieldRequired('frequenciaContato')\">\r\n            <option value=\"\">SELECCIONE UNA OPCION</option>\r\n            <option *ngFor=\"let item of frequenciaContatos\" [value]=\"item.id\">{{ item.descricao }}</option>\r\n          </select>\r\n          <invalid-form-control [show]=\"onFieldInvalid('frequenciaContato')\" message=\"Frequência de contatos é obrigatório.\"></invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"frequenciaVisita\">Frecuencia de visitas</label>\r\n          <select\r\n            class=\"form-control\"\r\n            id=\"frequenciaVisita\"\r\n            formControlName=\"frequenciaVisita\"\r\n            (change)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('frequenciaVisita') + ' ' + onFieldRequired('frequenciaVisita')\">\r\n            <option value=\"\">SELECCIONE UNA OPCION</option>\r\n            <option *ngFor=\"let item of frequenciaVisitas\" [value]=\"item.id\">{{ item.descricao }}</option>\r\n          </select>\r\n          <invalid-form-control [show]=\"onFieldInvalid('frequenciaVisita')\" message=\"Períodos é obrigatório.\"></invalid-form-control>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"origemContato\">Fuente de contacto</label>\r\n          <select\r\n            class=\"form-control\"\r\n            id=\"origemContato\"\r\n            formControlName=\"origemContato\"\r\n            (change)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('origemContato') + ' ' + onFieldRequired('origemContato')\">\r\n            <option value=\"\">SELECCIONE UNA OPCION</option>\r\n            <option *ngFor=\"let item of origensContato\" [value]=\"item.id\">{{ item.descricao }}</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"website\">Website</label>\r\n          <input\r\n            type=\"url\"\r\n            class=\"form-control\"\r\n            id=\"website\"\r\n            formControlName=\"website\"\r\n            (input)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('website') + ' ' + onFieldRequired('website')\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col\">\r\n          <label for=\"obsPropostas\">Observaciones (propustas)</label>\r\n          <textarea\r\n            class=\"form-control\"\r\n            id=\"obsPropostas\"\r\n            formControlName=\"obsPropostas\"\r\n            (input)=\"onInput()\">\r\n          </textarea>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "8ljO":
    /*!*****************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/cadastro/cadastro.component.scss ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function ljO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".hidden {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21lcmNpYWwvY2xpZW50ZXMvY2FkYXN0cm8vY2FkYXN0cm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxhQUFBO0FBRkYiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2NvbWVyY2lhbC9jbGllbnRlcy9jYWRhc3Ryby9jYWRhc3Ryby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbi5oaWRkZW4ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "8yz0":
    /*!**********************************************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/cadastro/dados-faturamento/formulario/formulario.component.ts ***!
      \**********************************************************************************************************/

    /*! exports provided: ComercialClientesCadastroDadosFaturamentoFormularioComponent */

    /***/
    function yz0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialClientesCadastroDadosFaturamentoFormularioComponent", function () {
        return ComercialClientesCadastroDadosFaturamentoFormularioComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./formulario.component.html */
      "yQw5");
      /* harmony import */


      var _formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./formulario.component.scss */
      "LqIA");
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var ng_brazil__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng-brazil */
      "hTrW");
      /* harmony import */


      var js_brasil__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! js-brasil */
      "zFJr");
      /* harmony import */


      var js_brasil__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(js_brasil__WEBPACK_IMPORTED_MODULE_10__);
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/modules/confirm-modal/confirm-modal.service */
      "FOez");
      /* harmony import */


      var _formulario_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./formulario.service */
      "qdc5");
      /* harmony import */


      var _cadastro_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../cadastro.service */
      "N70Q");
      /* harmony import */


      var src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/modules/comercial/services/clientes.service */
      "8ouN");
      /* harmony import */


      var src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! src/app/modules/comercial/comercial.service */
      "VgqD"); // ng-brazil
      // Services


      var ComercialClientesCadastroDadosFaturamentoFormularioComponent = /*#__PURE__*/function () {
        function ComercialClientesCadastroDadosFaturamentoFormularioComponent(activatedRoute, formBuilder, formService, cadastroService, comercialService, location, clientesService, pnotifyService, confirmModalService) {
          _classCallCheck(this, ComercialClientesCadastroDadosFaturamentoFormularioComponent);

          this.activatedRoute = activatedRoute;
          this.formBuilder = formBuilder;
          this.formService = formService;
          this.cadastroService = cadastroService;
          this.comercialService = comercialService;
          this.location = location;
          this.clientesService = clientesService;
          this.pnotifyService = pnotifyService;
          this.confirmModalService = confirmModalService;
          this.MASKS = js_brasil__WEBPACK_IMPORTED_MODULE_10__["utilsBr"].MASKS;
          this.profile = {};
          this.showPermissionDenied = false;
          this.loaderFullScreen = true;
          this.showAtividadesSecundarias = false;
          this.tipoPessoa = '';
          this.formChanged = false;
          this.formRules = {};
          this.tiposCadastro = [];
          this.regimesTributacao = [];
          this.contribuintes = [];
          this.setorAtividades = [];
          this.finalidadesMaterial = [];
          this.cnaes = [];
          this.originalValues = {};
          this.maxLengthRules = {};
          this.maxLengthMessages = {};
          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialClientesCadastroDadosFaturamentoFormularioComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this17 = this;

            this.cancelSubscription();
            this.submitSubscription();
            this.getPerfil();
            var snapshot = this.activatedRoute.snapshot.data;

            if (snapshot.data.responseCode === 200) {
              this.getFormFields(snapshot.data.result);
              this.setMaxLengthRules();
              this.setFormBuilder(snapshot.data.result);
              this.activatedRoute.parent.parent.params.subscribe(function (params) {
                _this17.codCliente = params.id;
              });
            } else {
              this.pnotifyService.error();
              this.location.back();
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.cadastroService.onNotifyLoaded(true);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptionCancel.unsubscribe();
            this.subscriptionSubmit.unsubscribe();
          }
        }, {
          key: "cancelSubscription",
          value: function cancelSubscription() {
            var _this18 = this;

            this.subscriptionCancel = this.cadastroService.notifyCancelObservable$.subscribe(function (response) {
              if (response) {
                _this18.onCancel();
              }
            });
          }
        }, {
          key: "submitSubscription",
          value: function submitSubscription() {
            var _this19 = this;

            this.subscriptionSubmit = this.cadastroService.notifySubmitObservable$.subscribe(function (response) {
              if (response) {
                _this19.onSubmit();
              }
            });
          }
        }, {
          key: "getPerfil",
          value: function getPerfil() {
            var _this20 = this;

            this.comercialService.getPerfil().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this20.loaderFullScreen = false;
            })).subscribe({
              next: function next(response) {
                if (response.responseCode === 200) {
                  _this20.profile = response.result; //console.log(this.profile)

                  if (_this20.profile.coordenador === true || _this20.profile.gestor === true) {
                    _this20.setNotaEnable(); //this.disable = false;
                    //console.log(this.disable);

                  } else if (_this20.profile.vendedor === true) {
                    _this20.setNotaDisable(); //this.disable = true;
                    //console.log(this.disable);

                  } else {
                    _this20.showPermissionDenied = true;
                  }
                } else {
                  _this20.showPermissionDenied = true;
                }
              },
              error: function error(_error6) {
                _this20.showPermissionDenied = true;
              }
            });
          }
        }, {
          key: "setNotaDisable",
          value: function setNotaDisable() {
            this.form.controls.notaCliente.disable();
          }
        }, {
          key: "setNotaEnable",
          value: function setNotaEnable() {
            this.form.controls.notaCliente.enable();
          }
        }, {
          key: "setMaxLengthRules",
          value: function setMaxLengthRules() {
            this.maxLengthRules = this.activatedRoute.snapshot.data.rules.data;
            this.maxLengthMessages = {
              nome: "Nome deve conter at\xE9 ".concat(this.maxLengthRules.nome, " caracteres."),
              sobrenome: "Sobrenome deve conter at\xE9 ".concat(this.maxLengthRules.sobrenome, " caracteres."),
              razaoSocial: "Raz\xE3o social deve conter at\xE9 ".concat(this.maxLengthRules.razaoSocial, " caracteres."),
              nomeFantasia: "Nome fantasia deve conter at\xE9 ".concat(this.maxLengthRules.nomeFantasia, " caracteres."),
              rg: "RG deve conter at\xE9 ".concat(this.maxLengthRules.rg, " caracteres."),
              inscricaoEstadual: "Inscri\xE7\xE3o estadual deve conter at\xE9 ".concat(this.maxLengthRules.inscricaoEstadual, " caracteres."),
              inscricaoProdRural: "Inscri\xE7\xE3o produtor rural deve conter at\xE9 ".concat(this.maxLengthRules.inscricaoProdRural, " caracteres.")
            };
          }
        }, {
          key: "setFormBuilder",
          value: function setFormBuilder(data) {
            var autoUpdateNota = data.autoUpdateNota == 1 ? false : true;

            if (data.tipoPessoa == 'F') {
              this.tipoPessoa = 'F';
              this.form = this.formBuilder.group({
                notaCliente: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
                autoUpdateNota: [autoUpdateNota],
                codCliente: [data.codCliente],
                tipoPessoa: [data.tipoPessoa],
                cpf: [data.cpf, [ng_brazil__WEBPACK_IMPORTED_MODULE_9__["NgBrazilValidators"].cpf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
                rg: [data.rg, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(this.maxLengthRules.rg)]],
                nome: [data.nome, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(this.maxLengthRules.nome)]],
                sobrenome: [data.sobrenome, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(this.maxLengthRules.sobrenome)]],
                tipoCadastro: [{
                  value: data.idTipoCadastro,
                  disabled: true
                }],
                inscricaoProdRural: [data.inscricaoProdRural, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(this.maxLengthRules.inscricaoProdRural)],
                contribuinte: [data.idContribuinte],
                setorAtividade: [{
                  value: data.idSetorAtividade != null ? data.idSetorAtividade : 2,
                  disabled: true
                }],
                limiteCredito: [{
                  value: data.limiteCredito,
                  disabled: true
                }],
                creditoSeguradora: [{
                  value: data.creditoSeguradora,
                  disabled: true
                }],
                dataInclusao: [{
                  value: data.dataInclusao,
                  disabled: true
                }],
                proximaAnaliseCredito: [{
                  value: data.proximaAnaliseCredito,
                  disabled: true
                }],
                quemCadastrou: [{
                  value: data.quemCadastrou,
                  disabled: true
                }],
                somenteCarteira: [{
                  value: data.somenteCarteira == 0 ? false : true,
                  disabled: true
                }],
                boletoDescontado: [{
                  value: data.boletoDescontado == 0 ? false : true,
                  disabled: true
                }],
                somenteAVista: [{
                  value: data.somenteAVista == 0 ? false : true,
                  disabled: true
                }],
                exigePesagem: [{
                  value: data.exigePesagem == 0 ? false : true,
                  disabled: true
                }]
              });
              this.checkValidatorsContribuinte(data.inscricaoProdRural);
            } else if (data.tipoPessoa == 'J') {
              this.tipoPessoa = 'J';
              this.form = this.formBuilder.group({
                notaCliente: [data.notaCliente, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                autoUpdateNota: [autoUpdateNota],
                codCliente: [data.codCliente],
                tipoPessoa: [data.tipoPessoa],
                cnpj: [data.cnpj, [ng_brazil__WEBPACK_IMPORTED_MODULE_9__["NgBrazilValidators"].cnpj]],
                razaoSocial: [data.razaoSocial, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(this.maxLengthRules.razaoSocial)]],
                nomeFantasia: [data.nomeFantasia, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(this.maxLengthRules.nomeFantasia)]],
                tipoCadastro: [{
                  value: data.idTipoCadastro,
                  disabled: true
                }],
                tributacao: [data.idTributacao],
                contribuinte: [data.idContribuinte],
                inscricaoEstadual: [data.inscricaoEstadual],
                setorAtividade: [data.idSetorAtividade, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
                cnae: [data.idCnae, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
                finalidadeMaterial: [data.idFinalidadeMaterial],
                atividadesSecundarias: this.formBuilder.array([]),
                limiteCredito: [{
                  value: data.limiteCredito,
                  disabled: true
                }],
                creditoSeguradora: [{
                  value: data.creditoSeguradora,
                  disabled: true
                }],
                dataInclusao: [{
                  value: data.dataInclusao,
                  disabled: true
                }],
                proximaAnaliseCredito: [{
                  value: data.proximaAnaliseCredito,
                  disabled: true
                }],
                quemCadastrou: [{
                  value: data.quemCadastrou,
                  disabled: true
                }],
                somenteCarteira: [{
                  value: data.somenteCarteira == 0 ? false : true,
                  disabled: true
                }],
                boletoDescontado: [{
                  value: data.boletoDescontado == 0 ? false : true,
                  disabled: true
                }],
                somenteAVista: [{
                  value: data.somenteAVista == 0 ? false : true,
                  disabled: true
                }],
                exigePesagem: [{
                  value: data.exigePesagem == 0 ? false : true,
                  disabled: true
                }],
                marca: [{
                  value: data.marca == 0 ? false : true,
                  disabled: true
                }]
              });
              Object.assign(this.originalValues, {
                finalidadeMaterial: data.idFinalidadeMaterial
              });
              this.checkValidatorsCnpj(data.cnpj);
              this.checkValidatorsRazaoSocial(data.razaoSocial);
              this.checkValidatorsInscricaoEstadual(data.idContribuinte);
              this.checkValidatorsFinalidadesMaterial(data.idFinalidadeMaterial);
              this.setFormAtividadesSecundarias(data.atividadesSecundarias);
            }
          }
        }, {
          key: "checkValidatorsContribuinte",
          value: function checkValidatorsContribuinte(inscricaoProdRural) {
            if (inscricaoProdRural != null) {
              this.form.controls.contribuinte.enable();
              this.form.controls.contribuinte.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]);
            } else {
              this.form.controls.contribuinte.disable();
              this.form.controls.contribuinte.clearValidators();
            }

            this.form.controls.contribuinte.updateValueAndValidity();
          }
        }, {
          key: "checkValidatorsCnpj",
          value: function checkValidatorsCnpj(cnpj) {
            if (cnpj.length == 0) {
              this.form.controls.cnpj.enable();
              this.form.controls.cnpj.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]);
            } else {
              this.form.controls.cnpj.disable();
              this.form.controls.cnpj.clearValidators();
            }

            this.form.controls.cnpj.updateValueAndValidity();
          }
        }, {
          key: "checkValidatorsRazaoSocial",
          value: function checkValidatorsRazaoSocial(razaoSocial) {
            if (razaoSocial.length == 0) {
              this.form.controls.razaoSocial.enable();
              this.form.controls.razaoSocial.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]);
            } else {
              this.form.controls.razaoSocial.disable();
              this.form.controls.razaoSocial.clearValidators();
            }

            this.form.controls.razaoSocial.updateValueAndValidity();
          }
        }, {
          key: "checkValidatorsInscricaoEstadual",
          value: function checkValidatorsInscricaoEstadual(contribuinte) {
            if (contribuinte == 1) {
              this.form.controls.inscricaoEstadual.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(18)]);
            } else {
              this.form.controls.inscricaoEstadual.clearValidators();
            }

            this.form.controls.inscricaoEstadual.updateValueAndValidity();
          }
        }, {
          key: "checkValidatorsFinalidadesMaterial",
          value: function checkValidatorsFinalidadesMaterial(finalidadeMaterial) {
            if (finalidadeMaterial == '' || finalidadeMaterial == null) {
              this.form.controls.finalidadeMaterial.enable();
              this.form.controls.finalidadeMaterial.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]);
            } else {
              this.form.controls.finalidadeMaterial.disable();
              this.form.controls.finalidadeMaterial.clearValidators();
            }

            this.form.controls.finalidadeMaterial.updateValueAndValidity();
          }
        }, {
          key: "setFormAtividadesSecundarias",
          value: function setFormAtividadesSecundarias(data) {
            if (data.length > 0 && data != null) {
              for (var i = 0; i < data.length; i++) {
                this.pushAtividadeSecundaria(data[i]);
              }
            }
          }
        }, {
          key: "onChangeContribuinte",
          value: function onChangeContribuinte(contribuinte) {
            if (contribuinte == 9) {
              this.form.controls.finalidadeMaterial.setValue(5);
              this.form.controls.finalidadeMaterial.disable();
            } else {
              this.form.controls.finalidadeMaterial.setValue(this.originalValues.finalidadeMaterial);
            }
          }
        }, {
          key: "getFormFields",
          value: function getFormFields(data) {
            var _this21 = this;

            if (data.tipoPessoa == 'F') {
              this.formService.loadDependenciesPF().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
                _this21.loaderFullScreen = false;

                _this21.cadastroService.onNotifyLoaded(false);
              })).subscribe({
                next: function next(response) {
                  if (response[0].responseCode === 200) {
                    _this21.tiposCadastro = response[0].result;
                  } else {
                    _this21.handleFormFieldsError();
                  }

                  if (response[1].responseCode === 200) {
                    _this21.contribuintes = response[1].result;
                  } else {
                    _this21.handleFormFieldsError();
                  }

                  if (response[2].responseCode === 200) {
                    _this21.setorAtividades = response[2].result;
                  } else {
                    _this21.handleFormFieldsError();
                  }
                },
                error: function error(_error7) {
                  _this21.handleFormFieldsError();
                }
              });
            } else if (data.tipoPessoa == 'J') {
              this.formService.loadDependenciesPJ().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
                _this21.loaderFullScreen = false;

                _this21.cadastroService.onNotifyLoaded(false);
              })).subscribe({
                next: function next(response) {
                  if (response[0].responseCode === 200) {
                    _this21.tiposCadastro = response[0].result;
                  }

                  if (response[1].responseCode === 200) {
                    _this21.regimesTributacao = response[1].result;
                  } else {
                    _this21.handleFormFieldsError();
                  }

                  if (response[2].responseCode === 200) {
                    _this21.contribuintes = response[2].result;
                  } else {
                    _this21.handleFormFieldsError();
                  }

                  if (response[3].responseCode === 200) {
                    _this21.setorAtividades = response[3].result;
                  } else {
                    _this21.handleFormFieldsError();
                  }

                  if (response[4].responseCode === 200) {
                    _this21.finalidadesMaterial = response[4].result;
                  } else {
                    _this21.handleFormFieldsError();
                  }

                  if (response[5].responseCode === 200) {
                    _this21.cnaes = response[5].result;
                  } else {
                    _this21.handleFormFieldsError();
                  }
                },
                error: function error(_error8) {
                  _this21.handleFormFieldsError();
                }
              });
            }
          }
        }, {
          key: "handleFormFieldsError",
          value: function handleFormFieldsError() {
            this.pnotifyService.error();
            this.location.back();
          }
        }, {
          key: "onFieldError",
          value: function onFieldError(field) {
            if (this.onFieldInvalid(field) != '') {
              return 'is-invalid';
            }

            return '';
          }
        }, {
          key: "onFieldInvalid",
          value: function onFieldInvalid(field) {
            field = this.form.get(field);

            if (field.errors != null) {
              if (field.errors.hasOwnProperty('required') && field.touched) {
                return 'required';
              }

              if (field.errors.hasOwnProperty('maxlength') && field.touched) {
                return 'maxlength';
              }
            }

            return '';
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
        }, {
          key: "onInscricaoProdutorRural",
          value: function onInscricaoProdutorRural() {
            if (this.form.value.inscricaoProdRural.length > 0) {
              this.form.controls.contribuinte.enable();
              this.form.controls.contribuinte.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]);
              this.form.controls.contribuinte.updateValueAndValidity();
            } else {
              this.form.controls.contribuinte.disable();
              this.form.controls.contribuinte.clearValidators();
              this.form.controls.contribuinte.updateValueAndValidity();
            }
          }
        }, {
          key: "atividadesSecundarias",
          get: function get() {
            return this.form.get('atividadesSecundarias');
          }
        }, {
          key: "pushAtividadeSecundaria",
          value: function pushAtividadeSecundaria(data) {
            this.atividadesSecundarias.push(this.formBuilder.group({
              id: [data.id],
              idCnae: [data.idCnae],
              descCnae: [data.descCnae]
            }));
          }
        }, {
          key: "onAtividadesSecundarias",
          value: function onAtividadesSecundarias() {
            this.showAtividadesSecundarias = !this.showAtividadesSecundarias;
          }
        }, {
          key: "onAddAtividadeSecundaria",
          value: function onAddAtividadeSecundaria() {
            if (this.selectedAtividadeSecundaria != null) {
              for (var i = 0; i < this.cnaes.length; i++) {
                if (this.cnaes[i].id == this.selectedAtividadeSecundaria) {
                  this.atividadesSecundarias.push(this.formBuilder.group({
                    id: [null],
                    idCnae: [this.cnaes[i].id],
                    descCnae: [this.cnaes[i].descricao]
                  }));
                  this.selectedAtividadeSecundaria = null;
                }
              }

              this.onInput();
            }
          }
        }, {
          key: "onDeleteAtividadeSecundaria",
          value: function onDeleteAtividadeSecundaria(index) {
            var _this22 = this;

            if (this.atividadesSecundarias.controls[index].value.idCnae == null) {
              this.atividadesSecundarias.removeAt(index);
            } else {
              var confirm$ = this.confirmModalService.showConfirm('delete', 'Confirmar exclusão', 'Deseja realmente prosseguir com a exclusão do registro?', 'Cancelar', 'Confirmar');
              confirm$.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (result) {
                return result ? _this22.deleteAtividadeSecundaria(_this22.atividadesSecundarias.controls[index].value.idCnae) : rxjs__WEBPACK_IMPORTED_MODULE_8__["EMPTY"];
              })).subscribe({
                next: function next(success) {
                  _this22.pnotifyService.success();

                  _this22.atividadesSecundarias.removeAt(index);

                  _this22.cadastroService.onNotifyLoaded(false);
                },
                error: function error(_error9) {
                  _this22.pnotifyService.error('Erro ao excluir atividade. Tente novamente!');

                  _this22.cadastroService.onNotifyLoaded(false);
                }
              });
            }
          }
        }, {
          key: "deleteAtividadeSecundaria",
          value: function deleteAtividadeSecundaria(codCnae) {
            this.cadastroService.onNotifyLoaded(true);
            return this.clientesService.deleteAtividadeSecundaria(this.codCliente, codCnae);
          }
        }, {
          key: "onInput",
          value: function onInput() {
            this.formChanged = true;
            this.form.markAsDirty();
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
        }, {
          key: "onCancel",
          value: function onCancel() {
            this.location.back();
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this23 = this;

            if (this.form.getRawValue().notaCliente == null) {
              this.form.controls.notaCliente.setValue(0);
            }

            if (this.form.pristine) {
              this.location.back();
            } else {
              if (this.form.valid) {
                this.cadastroService.onNotifyLoaded(true);
                this.clientesService.updateDadosFaturamento(this.form.getRawValue()).subscribe({
                  next: function next(response) {
                    if (response.responseCode === 200) {
                      _this23.onSended();

                      _this23.pnotifyService.success();

                      _this23.cadastroService.onNotifyLoaded(false);

                      _this23.formChanged = false;

                      _this23.location.back();
                    } else {
                      _this23.handleSubmitError();
                    }
                  },
                  error: function error(_error10) {
                    _this23.handleSubmitError();
                  }
                });
              } else {
                this.pnotifyService.notice('Preencha todos os campos obrigatórios.');
              }
            }
          }
        }, {
          key: "handleSubmitError",
          value: function handleSubmitError() {
            this.pnotifyService.error('Ocorreu um erro ao salvar o cadastro.');
            this.cadastroService.onNotifyLoaded(false);
          }
        }, {
          key: "onSended",
          value: function onSended() {
            this.cadastroService.onNotifySended(true);
          }
        }]);

        return ComercialClientesCadastroDadosFaturamentoFormularioComponent;
      }();

      ComercialClientesCadastroDadosFaturamentoFormularioComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _formulario_service__WEBPACK_IMPORTED_MODULE_13__["ComercialClientesCadastroDadosFaturamentoFormularioService"]
        }, {
          type: _cadastro_service__WEBPACK_IMPORTED_MODULE_14__["ComercialClientesCadastroService"]
        }, {
          type: src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_16__["ComercialService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]
        }, {
          type: src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_15__["ComercialClientesService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"]
        }, {
          type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_12__["ConfirmModalService"]
        }];
      };

      ComercialClientesCadastroDadosFaturamentoFormularioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-clientes-cadastro-dados-faturamento-formulario',
        template: _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _formulario_service__WEBPACK_IMPORTED_MODULE_13__["ComercialClientesCadastroDadosFaturamentoFormularioService"], _cadastro_service__WEBPACK_IMPORTED_MODULE_14__["ComercialClientesCadastroService"], src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_16__["ComercialService"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_15__["ComercialClientesService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"], src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_12__["ConfirmModalService"]])], ComercialClientesCadastroDadosFaturamentoFormularioComponent);
      /***/
    },

    /***/
    "AZRv":
    /*!*********************************************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/cadastro/dados-relacionamento/detalhes/detalhes.component.ts ***!
      \*********************************************************************************************************/

    /*! exports provided: ComercialClientesCadastroDadosRelacionamentoDetalhesComponent */

    /***/
    function AZRv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialClientesCadastroDadosRelacionamentoDetalhesComponent", function () {
        return ComercialClientesCadastroDadosRelacionamentoDetalhesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_detalhes_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./detalhes.component.html */
      "QrRL");
      /* harmony import */


      var _detalhes_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./detalhes.component.scss */
      "x71E");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/modules/comercial/services/clientes.service */
      "8ouN");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+"); // Services


      var ComercialClientesCadastroDadosRelacionamentoDetalhesComponent = /*#__PURE__*/function () {
        function ComercialClientesCadastroDadosRelacionamentoDetalhesComponent(activatedRoute, clientesService, pnotifyService, router) {
          _classCallCheck(this, ComercialClientesCadastroDadosRelacionamentoDetalhesComponent);

          this.activatedRoute = activatedRoute;
          this.clientesService = clientesService;
          this.pnotifyService = pnotifyService;
          this.router = router;
          this.loaderFullScreen = true;
          this.dadosRelacionamento = {};
          this.dadosRelacionamentoLoaded = false;
          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialClientesCadastroDadosRelacionamentoDetalhesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this24 = this;

            this.activatedRoute.parent.parent.params.subscribe(function (params) {
              _this24.getDadosRelacionamento(params['id']);
            });
          }
        }, {
          key: "getDadosRelacionamento",
          value: function getDadosRelacionamento(id) {
            var _this25 = this;

            this.clientesService.getDadosRelacionamento(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
              _this25.loaderFullScreen = false;
              _this25.dadosRelacionamentoLoaded = true;
            })).subscribe({
              next: function next(response) {
                if (response['responseCode'] === 200) {
                  _this25.dadosRelacionamento = response['result'];
                  _this25.dadosRelacionamento['obsPropostas'] = _this25.dadosRelacionamento['obsPropostas'] != null ? _this25.dadosRelacionamento['obsPropostas'].replace(/(?:\r\n|\r|\n)/g, '<br />') : null;
                } else {
                  _this25.handleDadosRelacionamentoError(id);
                }
              },
              error: function error(_error11) {
                _this25.handleDadosRelacionamentoError(id);
              }
            });
          }
        }, {
          key: "handleDadosRelacionamentoError",
          value: function handleDadosRelacionamentoError(id) {
            this.pnotifyService.error();
            this.router.navigate(['/comercial/clientes/detalhes', id]);
          }
        }]);

        return ComercialClientesCadastroDadosRelacionamentoDetalhesComponent;
      }();

      ComercialClientesCadastroDadosRelacionamentoDetalhesComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_6__["ComercialClientesService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      ComercialClientesCadastroDadosRelacionamentoDetalhesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-clientes-cadastro-dados-relacionamento-detalhes',
        template: _raw_loader_detalhes_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detalhes_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_6__["ComercialClientesService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], ComercialClientesCadastroDadosRelacionamentoDetalhesComponent);
      /***/
    },

    /***/
    "B0Of":
    /*!**************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/cadastro/potencial-compra/formulario/formulario-resolver.guard.ts ***!
      \**************************************************************************************************************/

    /*! exports provided: ComercialClientesCadastroPotencialCompraResolverGuard */

    /***/
    function B0Of(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialClientesCadastroPotencialCompraResolverGuard", function () {
        return ComercialClientesCadastroPotencialCompraResolverGuard;
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


      var src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/modules/comercial/services/clientes.service */
      "8ouN");

      var ComercialClientesCadastroPotencialCompraResolverGuard = /*#__PURE__*/function () {
        function ComercialClientesCadastroPotencialCompraResolverGuard(clienteService) {
          _classCallCheck(this, ComercialClientesCadastroPotencialCompraResolverGuard);

          this.clienteService = clienteService;
        }

        _createClass(ComercialClientesCadastroPotencialCompraResolverGuard, [{
          key: "resolve",
          value: function resolve(route) {
            if (route.parent.parent.params && route.parent.parent.params['id']) {
              return this.clienteService.getPotencialCompra(route.parent.parent.params['id']);
            }
          }
        }]);

        return ComercialClientesCadastroPotencialCompraResolverGuard;
      }();

      ComercialClientesCadastroPotencialCompraResolverGuard.ctorParameters = function () {
        return [{
          type: src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_2__["ComercialClientesService"]
        }];
      };

      ComercialClientesCadastroPotencialCompraResolverGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_2__["ComercialClientesService"]])], ComercialClientesCadastroPotencialCompraResolverGuard);
      /***/
    },

    /***/
    "BPCR":
    /*!*************************************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/cadastro/anexos/formulario/formulario.component.scss ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function BPCR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NsaWVudGVzL2NhZGFzdHJvL2FuZXhvcy9mb3JtdWxhcmlvL2Zvcm11bGFyaW8uY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "C/7g":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/clientes/cadastro/contatos/formulario/formulario.component.html ***!
      \*****************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function C7g(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<div class=\"row\" *ngIf=\"!loaderFullScreen\">\r\n  <div class=\"col\">\r\n    <div class=\"mtc-title\">Editar contacto</div>\r\n    <form [formGroup]=\"form\" autocomplete=\"off\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"nomeCompleto\">Nombre completo</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"nomeCompleto\"\r\n            formControlName=\"nomeCompleto\"\r\n            (input)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('nomeCompleto') + ' ' + onFieldRequired('nomeCompleto')\">\r\n          <invalid-form-control [show]=\"onFieldInvalid('nomeCompleto')\" message=\"Nome completo é obrigatório.\"></invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"genero\">Genero</label>\r\n          <select\r\n            class=\"form-control\"\r\n            id=\"genero\"\r\n            formControlName=\"genero\"\r\n            (change)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('genero') + ' ' + onFieldRequired('genero')\">\r\n            <option value=\"\">SELECCIONE UNA OPCION</option>\r\n            <option value=\"1\">FEMENINO</option>\r\n            <option value=\"2\">MASCULINO</option>\r\n          </select>\r\n          <invalid-form-control [show]=\"onFieldInvalid('genero')\" message=\"El género es obligatorio.\"></invalid-form-control>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"funcao\">Ocupación</label>\r\n          <select\r\n            class=\"form-control\"\r\n            id=\"funcao\"\r\n            formControlName=\"funcao\"\r\n            (change)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('funcao') + ' ' + onFieldRequired('funcao')\">\r\n            <option value=\"\">SELECCIONE UNA OPCIÓN</option>\r\n            <option *ngFor=\"let item of funcoes\" [value]=\"item.id\">{{ item.descricao }}</option>\r\n          </select>\r\n          <invalid-form-control [show]=\"onFieldInvalid('funcao')\" message=\"Se requiere rol\"></invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"setor\">Sector</label>\r\n          <select\r\n            class=\"form-control\"\r\n            id=\"setor\"\r\n            formControlName=\"setor\"\r\n            (change)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('setor') + ' ' + onFieldRequired('setor')\">\r\n            <option value=\"\">SELECCIONE UNA OPCIÓN</option>\r\n            <option *ngFor=\"let item of setores\" [value]=\"item.id\">{{ item.descricao }}</option>\r\n          </select>\r\n          <invalid-form-control [show]=\"onFieldInvalid('setor')\" message=\"El sector es obligatorio.\"></invalid-form-control>\r\n        </div>\r\n      </div>\r\n      <div formArrayName=\"celulares\">\r\n        <div class=\"form-row\">\r\n          <div class=\"col\"><hr class=\"mt-0\"></div>\r\n        </div>\r\n        <div class=\"d-flex justify-content-between\">\r\n          <div class=\"mtc-title\">Celulares</div>\r\n          <div>\r\n            <a\r\n              class=\"text-secondary\"\r\n              (click)=\"onAddMeioContato('celular')\"\r\n              href=\"javascript:void(0)\">\r\n              <b>Adicionar</b>\r\n            </a>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"celulares.controls.length > 0\">\r\n          <div class=\"form-row\" *ngFor=\"let item of celulares.controls; let i = index\" [formGroupName]=\"i\">\r\n            <div class=\"form-group col-6\">\r\n              <label for=\"contato\">Celular</label>\r\n              <div class=\"form-row\">\r\n                <div class=\"col-11\">\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    id=\"contato\"\r\n                    formControlName=\"contato\"\r\n                    (input)=\"onInput()\"\r\n                    telefone [textMask]=\"{ mask: MASKS.telefone.textMaskFunction }\">\r\n                  <div class=\"form-row mt-2\">\r\n                    <div class=\"form-group col-auto mb-0\">\r\n                      <div class=\"custom-control custom-checkbox\">\r\n                        <input\r\n                          type=\"checkbox\"\r\n                          class=\"custom-control-input\"\r\n                          [id]=\"'whatsapp_' + i\"\r\n                          formControlName=\"whatsapp\">\r\n                        <label class=\"custom-control-label\" [for]=\"'whatsapp_' + i\">WhatsApp</label>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-1 pt-2 d-flex justify-content-center\">\r\n                  <button\r\n                    type=\"button\"\r\n                    class=\"btn-icon\"\r\n                    (click)=\"onDeleteMeioContato('celular', i)\">\r\n                    <i class=\"fas fa-trash\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <empty-result message=\"No se encontró información\" *ngIf=\"celulares.controls.length == 0\" class=\"mb-3\"></empty-result>\r\n      </div>\r\n      <div formArrayName=\"telefones\">\r\n        <div class=\"form-row\">\r\n          <div class=\"col\"><hr class=\"mt-0\"></div>\r\n        </div>\r\n        <div class=\"d-flex justify-content-between\">\r\n          <div class=\"mtc-title\">Telefono fijo</div>\r\n          <div>\r\n            <a\r\n              class=\"text-secondary\"\r\n              (click)=\"onAddMeioContato('telefone')\"\r\n              href=\"javascript:void(0)\">\r\n              <b>Adicionar</b>\r\n            </a>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"telefones.controls.length > 0\">\r\n          <div class=\"form-row\" *ngFor=\"let item of telefones.controls; let i = index\" [formGroupName]=\"i\">\r\n            <div class=\"form-group col-6\">\r\n              <label for=\"contato\">Telefono fijo</label>\r\n              <div class=\"form-row\">\r\n                <div class=\"col-11\">\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    id=\"contato\"\r\n                    formControlName=\"contato\"\r\n                    (input)=\"onInput()\"\r\n                    telefone [textMask]=\"{ mask: MASKS.telefone.textMaskFunction }\">\r\n                </div>\r\n                <div class=\"col-1 pt-2 d-flex justify-content-center\">\r\n                  <button\r\n                    type=\"button\"\r\n                    class=\"btn-icon\"\r\n                    (click)=\"onDeleteMeioContato('telefone', i)\">\r\n                    <i class=\"fas fa-trash\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <empty-result message=\"No se encontró información\" *ngIf=\"telefones.controls.length == 0\" class=\"mb-3\"></empty-result>\r\n      </div>\r\n      <div formArrayName=\"emails\">\r\n        <div class=\"form-row\">\r\n          <div class=\"col\"><hr class=\"mt-0\"></div>\r\n        </div>\r\n        <div class=\"d-flex justify-content-between\">\r\n          <div class=\"mtc-title\">E-mails</div>\r\n          <div>\r\n            <a\r\n              class=\"text-secondary\"\r\n              (click)=\"onAddMeioContato('email')\"\r\n              href=\"javascript:void(0)\">\r\n              <b>Adicionar</b>\r\n            </a>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"emails.controls.length > 0\">\r\n          <div class=\"form-row\" *ngFor=\"let item of emails.controls; let i = index\" [formGroupName]=\"i\">\r\n            <div class=\"form-group col-6\">\r\n              <label for=\"contato\">E-mail</label>\r\n              <div class=\"form-row\">\r\n                <div class=\"col-11\">\r\n                  <input\r\n                    type=\"email\"\r\n                    class=\"form-control\"\r\n                    id=\"contato\"\r\n                    formControlName=\"contato\"\r\n                    (input)=\"onInput()\">\r\n                  <div class=\"form-row mt-2\">\r\n                    <div class=\"form-group col-auto mb-0\">\r\n                      <div class=\"custom-control custom-checkbox\">\r\n                        <input\r\n                          type=\"checkbox\"\r\n                          class=\"custom-control-input\"\r\n                          [id]=\"'marketing_' + i\"\r\n                          formControlName=\"marketing\">\r\n                        <label class=\"custom-control-label\" [for]=\"'marketing_' + i\">E-mail marketing</label>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group col-auto mb-0\">\r\n                      <div class=\"custom-control custom-checkbox\">\r\n                        <input\r\n                          type=\"checkbox\"\r\n                          class=\"custom-control-input\"\r\n                          [id]=\"'nfe_' + i\"\r\n                          formControlName=\"nfe\">\r\n                        <label class=\"custom-control-label\" [for]=\"'nfe_' + i\">Envio de NF-e</label>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-1 pt-2 d-flex justify-content-center\">\r\n                  <button\r\n                    type=\"button\"\r\n                    class=\"btn-icon\"\r\n                    (click)=\"onDeleteMeioContato('email', i)\">\r\n                    <i class=\"fas fa-trash\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <empty-result message=\"No se encontró información\" *ngIf=\"emails.controls.length == 0\" class=\"mb-3\"></empty-result>\r\n      </div>\r\n\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n      <!-- <div class=\"form-row\">\r\n        <div class=\"col\"><hr class=\"mt-0\"></div>\r\n      </div>\r\n      <div class=\"mtc-title\">Detalhes</div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"dataAniversario\">Aniversário</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"dataAniversario\"\r\n            formControlName=\"dataAniversario\"\r\n            (input)=\"onInput()\">\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"timeFutebol\">Time de futebol</label>\r\n          <select\r\n            class=\"form-control\"\r\n            id=\"timeFutebol\"\r\n            formControlName=\"timeFutebol\"\r\n            (change)=\"onInput()\">\r\n            <option value=\"\">SELECIONE UMA OPÇÃO</option>\r\n            <option *ngFor=\"let item of timesFutebol\" [value]=\"item.id\">{{ item.descricao }}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"estadoCivil\">Estado civil</label>\r\n          <select\r\n            class=\"form-control\"\r\n            id=\"estadoCivil\"\r\n            formControlName=\"estadoCivil\"\r\n            (change)=\"onInput()\">\r\n            <option value=\"\">SELECIONE UMA OPÇÃO</option>\r\n            <option value=\"1\">SOLTEIRO(A)</option>\r\n            <option value=\"2\">DIVORCIADO(A)</option>\r\n            <option value=\"3\">CASADO(A)</option>\r\n            <option value=\"4\">AMASIADO(A)</option>\r\n            <option value=\"5\">VIÚVO(A)</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"hobbies\">Hobbies</label>\r\n          <input\r\n            type=\"url\"\r\n            class=\"form-control\"\r\n            id=\"hobbies\"\r\n            formControlName=\"hobbies\"\r\n            (input)=\"onInput()\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-4\">\r\n          <label for=\"linkedin\">LinkedIn</label>\r\n          <input\r\n            type=\"url\"\r\n            class=\"form-control\"\r\n            id=\"linkedin\"\r\n            formControlName=\"linkedin\"\r\n            (input)=\"onInput()\">\r\n        </div>\r\n        <div class=\"form-group col-md-4\">\r\n          <label for=\"facebook\">Facebook</label>\r\n          <input\r\n            type=\"url\"\r\n            class=\"form-control\"\r\n            id=\"facebook\"\r\n            formControlName=\"facebook\"\r\n            (input)=\"onInput()\">\r\n        </div>\r\n        <div class=\"form-group col-md-4\">\r\n          <label for=\"instagram\">Instagram</label>\r\n          <input\r\n            type=\"url\"\r\n            class=\"form-control\"\r\n            id=\"instagram\"\r\n            formControlName=\"instagram\"\r\n            (input)=\"onInput()\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col\">\r\n          <label for=\"observacoes\">Observações</label>\r\n          <textarea\r\n            class=\"form-control\"\r\n            id=\"observacoes\"\r\n            formControlName=\"observacoes\"\r\n            (input)=\"onInput()\">\r\n          </textarea>\r\n        </div>\r\n      </div>\r\n      <div formArrayName=\"filhos\">\r\n        <div class=\"form-row\">\r\n          <div class=\"col\"><hr class=\"mt-0\"></div>\r\n        </div>\r\n        <div class=\"d-flex justify-content-between\">\r\n          <div class=\"mtc-title\">Filhos</div>\r\n          <div>\r\n              <a\r\n                class=\"text-secondary\"\r\n                (click)=\"onAddFilho()\"\r\n                href=\"javascript:void(0)\">\r\n                <b>Adicionar</b>\r\n              </a>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"filhos.controls.length > 0\">\r\n          <div class=\"form-row\" *ngFor=\"let item of filhos.controls; let i = index\" [formGroupName]=\"i\">\r\n            <div class=\"form-group col-6\">\r\n              <label for=\"contato\">Nome</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"nome\"\r\n                formControlName=\"nome\"\r\n                (input)=\"onInput()\">\r\n            </div>\r\n            <div class=\"form-group col-6\">\r\n              <label for=\"idade\">Idade</label>\r\n              <div class=\"form-row\">\r\n                <div class=\"col-11\">\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    id=\"idade\"\r\n                    formControlName=\"idade\"\r\n                    (input)=\"onInput()\">\r\n                </div>\r\n                <div class=\"col-1 pt-2 d-flex justify-content-center\">\r\n                  <button\r\n                    type=\"button\"\r\n                    class=\"btn-icon\"\r\n                    (click)=\"onDeleteFilho(i)\">\r\n                    <i class=\"fas fa-trash\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <empty-result message=\"No se encontró información\" *ngIf=\"filhos.controls.length == 0\"></empty-result>\r\n      </div> -->\r\n";
      /***/
    },

    /***/
    "CelN":
    /*!***********************************************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/cadastro/informacoes-comerciais/detalhes/detalhes.component.ts ***!
      \***********************************************************************************************************/

    /*! exports provided: ComercialClientesCadastroInfosComerciaisDetalhesComponent */

    /***/
    function CelN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialClientesCadastroInfosComerciaisDetalhesComponent", function () {
        return ComercialClientesCadastroInfosComerciaisDetalhesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_detalhes_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./detalhes.component.html */
      "0gs9");
      /* harmony import */


      var _detalhes_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./detalhes.component.scss */
      "NfpL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/modules/comercial/services/clientes.service */
      "8ouN"); // Services


      var ComercialClientesCadastroInfosComerciaisDetalhesComponent = /*#__PURE__*/function () {
        function ComercialClientesCadastroInfosComerciaisDetalhesComponent(activatedRoute, router, pnotifyService, clientesService) {
          _classCallCheck(this, ComercialClientesCadastroInfosComerciaisDetalhesComponent);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.pnotifyService = pnotifyService;
          this.clientesService = clientesService;
          this.loaderFullScreen = true;
          this.infosComerciais = {};
          this.infosComerciaisLoaded = false;
          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialClientesCadastroInfosComerciaisDetalhesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this26 = this;

            this.activatedRoute.parent.parent.params.subscribe(function (params) {
              _this26.clientesService.getInformacoesComerciais(params['id']).subscribe(function (response) {
                if (response['responseCode'] === 200) {
                  _this26.loaderFullScreen = false;
                  _this26.infosComerciais = response['result'];
                  _this26.infosComerciaisLoaded = true;
                } else if (response['responseCode'] === 204) {
                  _this26.loaderFullScreen = false;
                  _this26.infosComerciaisLoaded = true;
                } else {
                  _this26.pnotifyService.error();

                  _this26.router.navigate(['/comercial/clientes/detalhes', params['id']]);
                }
              });
            });
          }
        }]);

        return ComercialClientesCadastroInfosComerciaisDetalhesComponent;
      }();

      ComercialClientesCadastroInfosComerciaisDetalhesComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"]
        }, {
          type: src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_6__["ComercialClientesService"]
        }];
      };

      ComercialClientesCadastroInfosComerciaisDetalhesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-clientes-cadastro-informacoes-comerciais-detalhes',
        template: _raw_loader_detalhes_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detalhes_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"], src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_6__["ComercialClientesService"]])], ComercialClientesCadastroInfosComerciaisDetalhesComponent);
      /***/
    },

    /***/
    "Hzf7":
    /*!***********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/clientes/cadastro/anexos/detalhes/detalhes.component.html ***!
      \***********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Hzf7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<div class=\"row\" *ngIf=\"anexosLoaded\">\r\n  <div class=\"col\">\r\n    <div class=\"mtc-title\">Anexos</div>\r\n    <ul *ngIf=\"anexos.length > 0\">\r\n      <li *ngFor=\"let anexo of anexos\">\r\n        <div class=\"d-flex\">\r\n          <div>\r\n            <i class=\"far fa-file-pdf text-danger\"></i><strong class=\"ml-2\">{{ anexo.nomeExibicao | capitalizeFirst }}</strong>\r\n          </div>\r\n          <div class=\"ml-4\">\r\n            <a [href]=\"anexo.urlAnexo\" target=\"_blank\" class=\"btn-icon-sm\">\r\n              <i class=\"fas fa-eye\"></i>\r\n            </a>\r\n            <button type=\"button\" class=\"btn-icon-sm ml-4\" (click)=\"onDelete(anexo)\">\r\n              <i class=\"fas fa-trash\"></i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <div><hr></div>\r\n      </li>\r\n    </ul>\r\n    <div class=\"row py-5 my-5\" *ngIf=\"anexos.length == 0\">\r\n      <div class=\"col\">\r\n        <empty-result message=\"No se encontró información\"></empty-result>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "KWqw":
    /*!*****************************************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/cadastro/potencial-compra/detalhes/detalhes.component.ts ***!
      \*****************************************************************************************************/

    /*! exports provided: ComercialClientesCadastroPotencialCompraDetalhesComponent */

    /***/
    function KWqw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialClientesCadastroPotencialCompraDetalhesComponent", function () {
        return ComercialClientesCadastroPotencialCompraDetalhesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_detalhes_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./detalhes.component.html */
      "Uwyb");
      /* harmony import */


      var _detalhes_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./detalhes.component.scss */
      "aeBB");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/modules/comercial/services/clientes.service */
      "8ouN"); // Services


      var ComercialClientesCadastroPotencialCompraDetalhesComponent = /*#__PURE__*/function () {
        function ComercialClientesCadastroPotencialCompraDetalhesComponent(activatedRoute, router, pnotifyService, clientesService) {
          _classCallCheck(this, ComercialClientesCadastroPotencialCompraDetalhesComponent);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.pnotifyService = pnotifyService;
          this.clientesService = clientesService;
          this.loaderFullScreen = true;
          this.potencialCompra = [];
          this.potencialCompraLoaded = false;
          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialClientesCadastroPotencialCompraDetalhesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this27 = this;

            this.activatedRoute.parent.parent.params.subscribe(function (params) {
              _this27.getPotencialCompra(params['id']);
            });
          }
        }, {
          key: "getPotencialCompra",
          value: function getPotencialCompra(id) {
            var _this28 = this;

            this.clientesService.getPotencialCompra(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
              _this28.loaderFullScreen = false;
              _this28.potencialCompraLoaded = true;
            })).subscribe({
              next: function next(response) {
                if (response['responseCode'] === 200) {
                  _this28.potencialCompra = response['result'];
                }
              },
              error: function error(_error12) {
                _this28.pnotifyService.error();

                _this28.router.navigate(['/comercial/clientes/detalhes', id]);
              }
            });
          }
        }, {
          key: "handleNumber",
          value: function handleNumber(number) {
            var fixedNumber;

            if (number == 0 || number == null) {
              fixedNumber = '0.000';
            } else {
              fixedNumber = number.toFixed(3);
            }

            return fixedNumber;
          }
        }]);

        return ComercialClientesCadastroPotencialCompraDetalhesComponent;
      }();

      ComercialClientesCadastroPotencialCompraDetalhesComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"]
        }, {
          type: src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_7__["ComercialClientesService"]
        }];
      };

      ComercialClientesCadastroPotencialCompraDetalhesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-clientes-cadastro-potencial-compra-detalhes',
        template: _raw_loader_detalhes_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detalhes_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"], src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_7__["ComercialClientesService"]])], ComercialClientesCadastroPotencialCompraDetalhesComponent);
      /***/
    },

    /***/
    "L/8C":
    /*!***************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/cadastro/cadastro.component.ts ***!
      \***************************************************************************/

    /*! exports provided: ComercialClientesCadastroComponent */

    /***/
    function L8C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialClientesCadastroComponent", function () {
        return ComercialClientesCadastroComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./cadastro.component.html */
      "3Lpy");
      /* harmony import */


      var _cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cadastro.component.scss */
      "8ljO");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _detalhes_detalhes_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../detalhes/detalhes.service */
      "k2l4");
      /* harmony import */


      var src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/modules/comercial/services/clientes.service */
      "8ouN");
      /* harmony import */


      var _cadastro_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./cadastro.service */
      "N70Q");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS"); // Services


      var ComercialClientesCadastroComponent = /*#__PURE__*/function () {
        function ComercialClientesCadastroComponent(router, activatedRoute, location, detalhesService, clientesService, cadastroService, pnotifyService, atividadesService, titleService) {
          _classCallCheck(this, ComercialClientesCadastroComponent);

          this.router = router;
          this.activatedRoute = activatedRoute;
          this.location = location;
          this.detalhesService = detalhesService;
          this.clientesService = clientesService;
          this.cadastroService = cadastroService;
          this.pnotifyService = pnotifyService;
          this.atividadesService = atividadesService;
          this.titleService = titleService;
          this.loaderFullScreen = true;
          this.loaderNavbar = false;
          this.cliente = {};
          this.title = 'Dados cadastrais';
          this.showEditButton = false;
          this.showAddButton = false;
          this.showCancelButton = false;
          this.showSubmitButton = false;
          this.breadCrumbTree = [];
          this.travas = 0;
          this.pnotifyService.getPNotify();
          this.actionButtonsConfig();
        }

        _createClass(ComercialClientesCadastroComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this29 = this;

            if (this.activatedRoute.snapshot.data['response']['responseCode'] === 200) {
              this.activatedRoute.params.subscribe(function (params) {
                _this29.codCliente = params['id'];

                _this29.registrarAcesso();

                _this29.setBreadCrumb(_this29.codCliente);

                _this29.onRouterChange();

                _this29.sendedSubscription(); // this.getTravas(this.codCliente);


                _this29.getDetalhes(_this29.codCliente);
              });
            } else if (this.activatedRoute.snapshot.data['response']['responseCode'] === 403) {
              this.pnotifyService.notice('Este cliente no pertenece a su cartera');
              this.router.navigate(['/comercial/home']);
            } else {
              this.pnotifyService.error();
              this.location.back();
            }
          }
        }, {
          key: "ngAfterContentChecked",
          value: function ngAfterContentChecked() {
            this.loadedSubscription();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptionLoaded.unsubscribe();
            this.subscriptionSended.unsubscribe();
          }
        }, {
          key: "loadedSubscription",
          value: function loadedSubscription() {
            var _this30 = this;

            this.subscriptionLoaded = this.cadastroService.notifyLoadedObservable$.subscribe(function (response) {
              _this30.loaderNavbar = response;
            });
          }
        }, {
          key: "sendedSubscription",
          value: function sendedSubscription() {
            var _this31 = this;

            this.subscriptionSended = this.cadastroService.notifySendedObservable$.subscribe(function (response) {
              if (response === true) {
                if (_this31.travas > 0) {
                  _this31.getTravas(_this31.codCliente);
                }
              }
            });
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb(id) {
            var router = this.router.url.split('/');
            var currRoute = '';

            if (router.length == 6) {
              currRoute = router[router.length - 1];
            } else if (router.length == 7) {
              currRoute = router[router.length - 2];
            } else if (router.length == 8) {
              currRoute = router[router.length - 3];
            } else if (router.length == 9) {
              currRoute = router[router.length - 4];
            }

            this.breadCrumbTree = [{
              descricao: 'Home',
              routerLink: '/comercial/home'
            }, {
              descricao: 'Busqueda de clientes',
              routerLink: '/comercial/clientes/lista'
            }, {
              descricao: 'Detalles',
              routerLink: "/comercial/clientes/detalhes/".concat(id)
            }, {
              descricao: this.breadCrumbConfig(currRoute)
            }, {
              descricao: 'reporte',
              routerLink: '/comercial/reporte'
            }];
          }
        }, {
          key: "breadCrumbConfig",
          value: function breadCrumbConfig(route) {
            var descricao = '';

            if (route == 'dados-faturamento') {
              descricao = 'Datos de facturación';
            } else if (route == 'enderecos') {
              descricao = 'Direcciones';
            } else if (route == 'contatos') {
              descricao = 'Contactos';
            } else if (route == 'dados-relacionamento') {
              descricao = 'Datos de la relación';
            } else if (route == 'potencial-compra') {
              descricao = 'Potencial de compra';
            } else if (route == 'anexos') {
              descricao = 'Anexos';
            } else if (route == 'filial') {
              descricao = 'Filial';
            } else if (route == 'travas') {
              descricao = 'Cerraduras';
            } else if (route == 'informacoes-financeiras') {
              descricao = 'Información financiera';
            } else if (route == 'informacoes-comerciais') {
              descricao = 'Información Comercial';
            }

            this.title = descricao;
            this.titleService.setTitle(descricao);
            return descricao;
          }
        }, {
          key: "actionButtonsConfig",
          value: function actionButtonsConfig() {
            var router = this.router.url.split('/');
            var routeConfig = {};

            if (router.length == 6) {
              routeConfig = {
                route: router[router.length - 1],
                form: false
              };
            } else if (router.length == 7) {
              routeConfig = {
                route: router[router.length - 2],
                form: true
              };
            } else if (router.length == 8) {
              routeConfig = {
                route: router[router.length - 3],
                form: true
              };
            } else if (router.length == 9) {
              routeConfig = {
                route: router[router.length - 4],
                form: true
              };
            }

            if (routeConfig['route'] == 'dados-faturamento') {
              if (routeConfig['form']) {
                this.setButtonConfig(false, false, true, true);
              } else {
                this.setButtonConfig(true, false, false, false);
              }
            } else if (routeConfig['route'] == 'enderecos') {
              if (routeConfig['form']) {
                this.setButtonConfig(false, false, true, true);
              } else {
                this.setButtonConfig(false, true, false, false);
              }
            } else if (routeConfig['route'] == 'contatos') {
              if (routeConfig['form']) {
                this.setButtonConfig(false, false, true, true);
              } else {
                this.setButtonConfig(false, true, false, false);
              }
            } else if (routeConfig['route'] == 'dados-relacionamento') {
              if (routeConfig['form']) {
                this.setButtonConfig(false, false, true, true);
              } else {
                this.setButtonConfig(true, false, false, false);
              }
            } else if (routeConfig['route'] == 'potencial-compra') {
              if (routeConfig['form']) {
                this.setButtonConfig(false, false, true, true);
              } else {
                this.setButtonConfig(true, false, false, false);
              }
            } else if (routeConfig['route'] == 'anexos') {
              if (routeConfig['form']) {
                this.setButtonConfig(false, false, true, true);
              } else {
                this.setButtonConfig(false, true, false, false);
              }
            } else if (routeConfig['route'] == 'filial') {
              this.setButtonConfig(false, false, false, false);
            } else if (routeConfig['route'] == 'travas') {
              this.setButtonConfig(false, false, false, false);
            } else if (routeConfig['route'] == 'informacoes-financeiras') {
              this.setButtonConfig(false, false, false, false);
            } else if (routeConfig['route'] == 'informacoes-comerciais') {
              this.setButtonConfig(false, false, false, false);
            }
          }
        }, {
          key: "setButtonConfig",
          value: function setButtonConfig(edit, add, cancel, submit) {
            this.showEditButton = edit;
            this.showAddButton = add;
            this.showCancelButton = cancel;
            this.showSubmitButton = submit;
          }
        }, {
          key: "onRouterChange",
          value: function onRouterChange() {
            var _this32 = this;

            this.router.events.subscribe(function (event) {
              _this32.actionButtonsConfig();

              _this32.setBreadCrumb(_this32.codCliente);
            });
          }
        }, {
          key: "getTravas",
          value: function getTravas(id) {
            var _this33 = this;

            this.clientesService.getTravas(id).subscribe({
              next: function next(response) {
                if (response['responseCode'] === 200) {
                  var travas = 0;

                  if (response['result'].length > 0) {
                    for (var i = 0; i < response['result'].length; i++) {
                      if (response['result'][i]['situacao'] == 'TRAVADO') {
                        travas++;
                      }
                    }

                    _this33.travas = travas;
                  }
                }
              },
              error: function error(_error13) {
                _this33.pnotifyService.error('Ocurrio un error al cargar las deudas.');

                _this33.location.back();
              }
            });
          }
        }, {
          key: "getDetalhes",
          value: function getDetalhes(codCliente) {
            var _this34 = this;

            this.detalhesService.getDetalhes(codCliente).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
              _this34.loaderFullScreen = false;
            })).subscribe(function (response) {
              if (response['responseCode'] === 200) {
                _this34.cliente = response['result'];
              }
            });
          }
        }, {
          key: "onEdit",
          value: function onEdit() {
            this.router.navigate([this.router.url, 'editar']);
          }
        }, {
          key: "onCancel",
          value: function onCancel() {
            this.cadastroService.onNotifyCancel(true);
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            this.cadastroService.onNotifySubmit(true);
          }
        }, {
          key: "onAdd",
          value: function onAdd() {
            this.router.navigate([this.router.url, 'novo']);
          }
        }]);

        return ComercialClientesCadastroComponent;
      }();

      ComercialClientesCadastroComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]
        }, {
          type: _detalhes_detalhes_service__WEBPACK_IMPORTED_MODULE_8__["ComercialClientesDetalheService"]
        }, {
          type: src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_9__["ComercialClientesService"]
        }, {
          type: _cadastro_service__WEBPACK_IMPORTED_MODULE_10__["ComercialClientesCadastroService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__["AtividadesService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_12__["TitleService"]
        }];
      };

      ComercialClientesCadastroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'comercial-clientes-cadastro',
        template: _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], _detalhes_detalhes_service__WEBPACK_IMPORTED_MODULE_8__["ComercialClientesDetalheService"], src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_9__["ComercialClientesService"], _cadastro_service__WEBPACK_IMPORTED_MODULE_10__["ComercialClientesCadastroService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__["AtividadesService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_12__["TitleService"]])], ComercialClientesCadastroComponent);
      /***/
    },

    /***/
    "LXQP":
    /*!******************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/cadastro/dados-relacionamento/formulario/formulario-resolver.guard.ts ***!
      \******************************************************************************************************************/

    /*! exports provided: ComercialClientesCadastroDadosRelacionamentoResolverGuard */

    /***/
    function LXQP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialClientesCadastroDadosRelacionamentoResolverGuard", function () {
        return ComercialClientesCadastroDadosRelacionamentoResolverGuard;
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


      var src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/modules/comercial/services/clientes.service */
      "8ouN"); // Services


      var ComercialClientesCadastroDadosRelacionamentoResolverGuard = /*#__PURE__*/function () {
        function ComercialClientesCadastroDadosRelacionamentoResolverGuard(clienteService) {
          _classCallCheck(this, ComercialClientesCadastroDadosRelacionamentoResolverGuard);

          this.clienteService = clienteService;
        }

        _createClass(ComercialClientesCadastroDadosRelacionamentoResolverGuard, [{
          key: "resolve",
          value: function resolve(route) {
            if (route.parent.parent.params && route.parent.parent.params['id']) {
              return this.clienteService.getDadosRelacionamento(route.parent.parent.params['id']);
            }
          }
        }]);

        return ComercialClientesCadastroDadosRelacionamentoResolverGuard;
      }();

      ComercialClientesCadastroDadosRelacionamentoResolverGuard.ctorParameters = function () {
        return [{
          type: src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_2__["ComercialClientesService"]
        }];
      };

      ComercialClientesCadastroDadosRelacionamentoResolverGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_2__["ComercialClientesService"]])], ComercialClientesCadastroDadosRelacionamentoResolverGuard);
      /***/
    },

    /***/
    "LqIA":
    /*!************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/cadastro/dados-faturamento/formulario/formulario.component.scss ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function LqIA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NsaWVudGVzL2NhZGFzdHJvL2RhZG9zLWZhdHVyYW1lbnRvL2Zvcm11bGFyaW8vZm9ybXVsYXJpby5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "LqhE":
    /*!***********************************************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/cadastro/potencial-compra/formulario/formulario.component.scss ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function LqhE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NsaWVudGVzL2NhZGFzdHJvL3BvdGVuY2lhbC1jb21wcmEvZm9ybXVsYXJpby9mb3JtdWxhcmlvLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "Mia2":
    /*!**************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/cadastro/informacoes-financeiras/detalhes/detalhes.component.scss ***!
      \**************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Mia2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NsaWVudGVzL2NhZGFzdHJvL2luZm9ybWFjb2VzLWZpbmFuY2VpcmFzL2RldGFsaGVzL2RldGFsaGVzLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "N70Q":
    /*!*************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/cadastro/cadastro.service.ts ***!
      \*************************************************************************/

    /*! exports provided: ComercialClientesCadastroService */

    /***/
    function N70Q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialClientesCadastroService", function () {
        return ComercialClientesCadastroService;
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

      var ComercialClientesCadastroService = /*#__PURE__*/function () {
        function ComercialClientesCadastroService() {
          _classCallCheck(this, ComercialClientesCadastroService);

          this.notifyLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.notifyCancel = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.notifySubmit = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.notifySended = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.notifyLoadedObservable$ = this.notifyLoaded.asObservable();
          this.notifyCancelObservable$ = this.notifyCancel.asObservable();
          this.notifySubmitObservable$ = this.notifySubmit.asObservable();
          this.notifySendedObservable$ = this.notifySended.asObservable();
        }

        _createClass(ComercialClientesCadastroService, [{
          key: "onNotifyLoaded",
          value: function onNotifyLoaded(data) {
            this.notifyLoaded.next(data);
          }
        }, {
          key: "onNotifyCancel",
          value: function onNotifyCancel(data) {
            this.notifyCancel.next(data);
          }
        }, {
          key: "onNotifySubmit",
          value: function onNotifySubmit(data) {
            this.notifySubmit.next(data);
          }
        }, {
          key: "onNotifySended",
          value: function onNotifySended(data) {
            this.notifySended.next(data);
          }
        }]);

        return ComercialClientesCadastroService;
      }();

      ComercialClientesCadastroService.ctorParameters = function () {
        return [];
      };

      ComercialClientesCadastroService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ComercialClientesCadastroService);
      /***/
    },

    /***/
    "NfpL":
    /*!*************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/cadastro/informacoes-comerciais/detalhes/detalhes.component.scss ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function NfpL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NsaWVudGVzL2NhZGFzdHJvL2luZm9ybWFjb2VzLWNvbWVyY2lhaXMvZGV0YWxoZXMvZGV0YWxoZXMuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "PPg3":
    /*!*******************************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/cadastro/anexos/detalhes/detalhes.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: ComercialClientesCadastroAnexosDetalhesComponent */

    /***/
    function PPg3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialClientesCadastroAnexosDetalhesComponent", function () {
        return ComercialClientesCadastroAnexosDetalhesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_detalhes_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./detalhes.component.html */
      "Hzf7");
      /* harmony import */


      var _detalhes_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./detalhes.component.scss */
      "/m+g");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/modules/comercial/services/clientes.service */
      "8ouN");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/modules/confirm-modal/confirm-modal.service */
      "FOez"); // Services


      var ComercialClientesCadastroAnexosDetalhesComponent = /*#__PURE__*/function () {
        function ComercialClientesCadastroAnexosDetalhesComponent(activatedRoute, clientesService, confirmModalService, pnotifyService, router) {
          _classCallCheck(this, ComercialClientesCadastroAnexosDetalhesComponent);

          this.activatedRoute = activatedRoute;
          this.clientesService = clientesService;
          this.confirmModalService = confirmModalService;
          this.pnotifyService = pnotifyService;
          this.router = router;
          this.loaderFullScreen = true;
          this.anexos = [];
          this.anexosLoaded = false;
          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialClientesCadastroAnexosDetalhesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getAnexos();
          }
        }, {
          key: "getAnexos",
          value: function getAnexos() {
            var _this35 = this;

            this.activatedRoute.parent.parent.params.subscribe(function (params) {
              _this35.clientesService.getAnexos(params['id']).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
                _this35.loaderFullScreen = false;
              })).subscribe(function (response) {
                if (response['success'] == true && response['data'].length > 0) {
                  _this35.loaderFullScreen = false;
                  _this35.anexos = response['data'];
                  console.log(_this35.anexos);
                  _this35.anexosLoaded = true;
                } else if (response['success'] == true && response['data'].length == 0) {
                  _this35.loaderFullScreen = false;
                  _this35.anexosLoaded = true;
                } else {
                  _this35.pnotifyService.error();

                  console.log('erro'); // this.router.navigate([
                  //   '/comercial/clientes/detalhes',
                  //   params['id']
                  // ]);
                }
              });
            });
          }
        }, {
          key: "onDelete",
          value: function onDelete(anexo) {
            var _this36 = this;

            var confirm$ = this.confirmModalService.showConfirm('delete', 'Confirmar exclusão', 'Deseja realmente prosseguir com a exclusão do anexo?', 'Cancelar', 'Confirmar');
            confirm$.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (result) {
              return result ? _this36.deleteAnexo(anexo.codAnexo) : rxjs__WEBPACK_IMPORTED_MODULE_6__["EMPTY"];
            })).subscribe({
              next: function next(success) {
                _this36.pnotifyService.success();

                _this36.anexos = [];

                _this36.getAnexos();
              },
              error: function error(_error14) {
                _this36.pnotifyService.error('Erro ao excluir anexo. Tente novamente!');
              }
            });
          }
        }, {
          key: "deleteAnexo",
          value: function deleteAnexo(id) {
            this.loaderFullScreen = true;
            this.anexosLoaded = false;
            return this.clientesService.deleteAnexo(id);
          }
        }]);

        return ComercialClientesCadastroAnexosDetalhesComponent;
      }();

      ComercialClientesCadastroAnexosDetalhesComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_7__["ComercialClientesService"]
        }, {
          type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_9__["ConfirmModalService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      ComercialClientesCadastroAnexosDetalhesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-clientes-cadastro-anexos-detalhes',
        template: _raw_loader_detalhes_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detalhes_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_7__["ComercialClientesService"], src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_9__["ConfirmModalService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], ComercialClientesCadastroAnexosDetalhesComponent);
      /***/
    },

    /***/
    "QOcb":
    /*!**********************************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/cadastro/enderecos/detalhes/detalhes.component.ts ***!
      \**********************************************************************************************/

    /*! exports provided: ComercialClientesCadastroEnderecosDetalhesComponent */

    /***/
    function QOcb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialClientesCadastroEnderecosDetalhesComponent", function () {
        return ComercialClientesCadastroEnderecosDetalhesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_detalhes_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./detalhes.component.html */
      "YmkE");
      /* harmony import */


      var _detalhes_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./detalhes.component.scss */
      "+NUh");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var ng_brazil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-brazil */
      "hTrW");
      /* harmony import */


      var src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/modules/comercial/services/clientes.service */
      "8ouN");
      /* harmony import */


      var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/modules/confirm-modal/confirm-modal.service */
      "FOez");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/services/core/date.service */
      "Rk3r"); // ng-brazil
      // Services


      var ComercialClientesCadastroEnderecosDetalhesComponent = /*#__PURE__*/function () {
        function ComercialClientesCadastroEnderecosDetalhesComponent(activatedRoute, clientesService, confirmModalService, pnotifyService, router, dateService) {
          _classCallCheck(this, ComercialClientesCadastroEnderecosDetalhesComponent);

          this.activatedRoute = activatedRoute;
          this.clientesService = clientesService;
          this.confirmModalService = confirmModalService;
          this.pnotifyService = pnotifyService;
          this.router = router;
          this.dateService = dateService;
          this.MASKS = ng_brazil__WEBPACK_IMPORTED_MODULE_7__["MASKS"];
          this.loaderFullScreen = true;
          this.enderecos = [];
          this.enderecosInativos = [];
          this.enderecosAguardandoAprovacao = [];
          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialClientesCadastroEnderecosDetalhesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this37 = this;

            this.activatedRoute.parent.parent.params.subscribe(function (params) {
              _this37.codCliente = params.id;
              _this37.tpEndereco = params.tpEndereco;

              _this37.getEnderecos();
            });
          }
        }, {
          key: "getEnderecos",
          value: function getEnderecos() {
            var _this38 = this;

            this.enderecos = [];
            this.enderecosAguardandoAprovacao = [];
            this.enderecosInativos = [];
            this.enderecosLoaded = false;
            this.clientesService.getEnderecos(this.codCliente).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
              _this38.loaderFullScreen = false;
              _this38.enderecosLoaded = true;
            })).subscribe({
              next: function next(response) {
                console.log(response);

                if (response.success === true) {
                  _this38.enderecos = response.data.enderecos;

                  if (response.data.enderecosAguardando) {
                    _this38.enderecosAguardandoAprovacao = response.data.enderecosAguardando;
                  }

                  if (response.data.enderecosInativos) {
                    _this38.enderecosInativos = response.data.enderecosInativos;
                  }
                }
              },
              error: function error(_error15) {
                _this38.pnotifyService.error();

                _this38.router.navigate(['/comercial/clientes/detalhes', _this38.codCliente]);
              }
            });
          }
        }, {
          key: "tipoEndereco",
          value: function tipoEndereco(endereco) {
            var tipoEndereco;

            if (endereco['principal'] == 1) {
              tipoEndereco = 'Dirección principal';
            } else if (endereco['cobranca'] == 1) {
              tipoEndereco = 'Dirección de cobranza';
            } else if (endereco['entrega'] == 1) {
              tipoEndereco = 'Dirección de entrega';

              if (endereco['titulo'] != null && endereco['titulo'].length > 0) {
                tipoEndereco = "".concat(tipoEndereco, " (").concat(endereco['titulo'], ")");
              }
            }

            return tipoEndereco;
          }
        }, {
          key: "convertMysqlTime",
          value: function convertMysqlTime(time) {
            return this.dateService.convertMysqlTime(time);
          }
        }, {
          key: "onDelete",
          value: function onDelete(endereco) {
            var _this39 = this;

            if (endereco.principal == 0) {
              var confirm$ = this.confirmModalService.showConfirm('delete', 'Confirmar exclusão', 'Deseja realmente prosseguir com a exclusão do endereço?', 'Cancelar', 'Confirmar');
              confirm$.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (result) {
                return result ? _this39.deleteEndereco(endereco.id) : rxjs__WEBPACK_IMPORTED_MODULE_6__["EMPTY"];
              })).subscribe({
                next: function next(success) {
                  _this39.pnotifyService.success();

                  _this39.getEnderecos();
                },
                error: function error(_error16) {
                  _this39.pnotifyService.error('Erro ao excluir endereço. Tente novamente!');
                }
              });
            }
          }
        }, {
          key: "deleteEndereco",
          value: function deleteEndereco(id) {
            this.loaderFullScreen = true;
            this.enderecosLoaded = false;
            return this.clientesService.deleteEndereco(this.codCliente, id);
          }
        }]);

        return ComercialClientesCadastroEnderecosDetalhesComponent;
      }();

      ComercialClientesCadastroEnderecosDetalhesComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_8__["ComercialClientesService"]
        }, {
          type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_9__["ConfirmModalService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_11__["DateService"]
        }];
      };

      ComercialClientesCadastroEnderecosDetalhesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-clientes-cadastro-enderecos-detalhes',
        template: _raw_loader_detalhes_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detalhes_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_8__["ComercialClientesService"], src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_9__["ConfirmModalService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_11__["DateService"]])], ComercialClientesCadastroEnderecosDetalhesComponent);
      /***/
    },

    /***/
    "QPni":
    /*!************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/cadastro/informacoes-financeiras/detalhes/detalhes.component.ts ***!
      \************************************************************************************************************/

    /*! exports provided: ComercialClientesCadastroInfosFinanceirasDetalhesComponent */

    /***/
    function QPni(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialClientesCadastroInfosFinanceirasDetalhesComponent", function () {
        return ComercialClientesCadastroInfosFinanceirasDetalhesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_detalhes_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./detalhes.component.html */
      "sPal");
      /* harmony import */


      var _detalhes_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./detalhes.component.scss */
      "Mia2");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/modules/comercial/services/clientes.service */
      "8ouN"); // Services


      var ComercialClientesCadastroInfosFinanceirasDetalhesComponent = /*#__PURE__*/function () {
        function ComercialClientesCadastroInfosFinanceirasDetalhesComponent(activatedRoute, router, pnotifyService, clientesService) {
          _classCallCheck(this, ComercialClientesCadastroInfosFinanceirasDetalhesComponent);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.pnotifyService = pnotifyService;
          this.clientesService = clientesService;
          this.loaderFullScreen = true;
          this.infosFinanceiras = {};
          this.infosFinanceirasLoaded = false;
          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialClientesCadastroInfosFinanceirasDetalhesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this40 = this;

            this.activatedRoute.parent.parent.params.subscribe(function (params) {
              _this40.clientesService.getInformacoesFinanceiras(params['id']).subscribe(function (response) {
                if (response['responseCode'] === 200) {
                  _this40.loaderFullScreen = false;
                  _this40.infosFinanceiras = response['result'];
                  _this40.infosFinanceirasLoaded = true;
                } else if (response['responseCode'] === 204) {
                  _this40.loaderFullScreen = false;
                  _this40.infosFinanceirasLoaded = true;
                } else {
                  _this40.pnotifyService.error();

                  _this40.router.navigate(['/comercial/clientes/detalhes', params['id']]);
                }
              });
            });
          }
        }]);

        return ComercialClientesCadastroInfosFinanceirasDetalhesComponent;
      }();

      ComercialClientesCadastroInfosFinanceirasDetalhesComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"]
        }, {
          type: src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_6__["ComercialClientesService"]
        }];
      };

      ComercialClientesCadastroInfosFinanceirasDetalhesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-clientes-cadastro-informacoes-comerciais-detalhes',
        template: _raw_loader_detalhes_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detalhes_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"], src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_6__["ComercialClientesService"]])], ComercialClientesCadastroInfosFinanceirasDetalhesComponent);
      /***/
    },

    /***/
    "QrRL":
    /*!*************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/clientes/cadastro/dados-relacionamento/detalhes/detalhes.component.html ***!
      \*************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function QrRL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<div class=\"row\" *ngIf=\"dadosRelacionamentoLoaded\">\r\n  <div class=\"col\">\r\n    <div class=\"mtc-title\">Datos de relación</div>\r\n    <div class=\"form-row\">\r\n      <div class=\"form-group col-md-6\">\r\n        <label>Tipo de servicio</label>\r\n        <div *ngIf=\"dadosRelacionamento.descTipoAtendimento == null\">SIN INFORMACION</div>\r\n        <div *ngIf=\"dadosRelacionamento.descTipoAtendimento != null\">{{ dadosRelacionamento.descTipoAtendimento | uppercase }}</div>\r\n      </div>\r\n      <div class=\"form-group col-md-6\">\r\n        <label>Período</label>\r\n        <div *ngIf=\"dadosRelacionamento.descPeriodo == null\">SIN INFORMACION</div>\r\n        <div *ngIf=\"dadosRelacionamento.descPeriodo != null\">{{ dadosRelacionamento.descPeriodo | uppercase }}</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-row\">\r\n      <div class=\"form-group col\">\r\n        <label>Mejores días para contactar</label>\r\n        <ol class=\"breadcrumb bg-white p-0 m-0\">\r\n          <li class=\"breadcrumb-item active text-dark\" *ngIf=\"dadosRelacionamento.diasContato.segunda == 1\">Lunes</li>\r\n          <li class=\"breadcrumb-item active text-dark\" *ngIf=\"dadosRelacionamento.diasContato.terca == 1\">Martes</li>\r\n          <li class=\"breadcrumb-item active text-dark\" *ngIf=\"dadosRelacionamento.diasContato.quarta == 1\">Miercoles</li>\r\n          <li class=\"breadcrumb-item active text-dark\" *ngIf=\"dadosRelacionamento.diasContato.quinta == 1\">Jueves</li>\r\n          <li class=\"breadcrumb-item active text-dark\" *ngIf=\"dadosRelacionamento.diasContato.sexta == 1\">Viernes</li>\r\n          <li class=\"breadcrumb-item active text-dark\" *ngIf=\"dadosRelacionamento.diasContato.sabado == 1\">Sabado</li>\r\n        </ol>\r\n        <div *ngIf=\"dadosRelacionamento.diasContato.segunda == 0 &&\r\n                    dadosRelacionamento.diasContato.terca == 0 &&\r\n                    dadosRelacionamento.diasContato.quarta == 0 &&\r\n                    dadosRelacionamento.diasContato.quinta == 0 &&\r\n                    dadosRelacionamento.diasContato.sexta == 0 &&\r\n                    dadosRelacionamento.diasContato.sabado == 0\">\r\n          SIN INFORMACION\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-row\">\r\n      <div class=\"form-group col-md-6\">\r\n        <label>Frecuencia de contactos</label>\r\n        <div *ngIf=\"dadosRelacionamento.descFrequenciaContato == null\">SIN INFORMACION</div>\r\n        <div *ngIf=\"dadosRelacionamento.descFrequenciaContato != null\">{{ dadosRelacionamento.descFrequenciaContato | uppercase }}</div>\r\n      </div>\r\n      <div class=\"form-group col-md-6\">\r\n        <label>Frecuencia de visitas</label>\r\n        <div *ngIf=\"dadosRelacionamento.descFrequenciaVisita == null\">SIN INFORMACION</div>\r\n        <div *ngIf=\"dadosRelacionamento.descFrequenciaVisita != null\">{{ dadosRelacionamento.descFrequenciaVisita | uppercase }}</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-row\">\r\n      <div class=\"form-group col-md-6\">\r\n        <label>Fuente de contacto</label>\r\n        <div *ngIf=\"dadosRelacionamento.descOrigemContato == null\">SIN INFORMACION</div>\r\n        <div *ngIf=\"dadosRelacionamento.descOrigemContato != null\">{{ dadosRelacionamento.descOrigemContato | uppercase }}</div>\r\n      </div>\r\n      <div class=\"form-group col-md-6\">\r\n        <label>Website</label>\r\n        <div *ngIf=\"dadosRelacionamento.website == null\">SIN INFORMACION</div>\r\n        <div *ngIf=\"dadosRelacionamento.website != null\">\r\n          <a [href]=\"dadosRelacionamento.website\" target=\"_blank\">{{ dadosRelacionamento.website | lowercase }}</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-row\">\r\n      <div class=\"form-group col\">\r\n        <label>Observaciones (Propuestas)</label>\r\n        <div *ngIf=\"dadosRelacionamento.obsPropostas == null\">SIN INFORMACION</div>\r\n        <div *ngIf=\"dadosRelacionamento.obsPropostas != null\" [innerHTML]=\"dadosRelacionamento.obsPropostas | uppercase\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "UPcH":
    /*!***********************************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/cadastro/contatos/formulario/formulario.service.ts ***!
      \***********************************************************************************************/

    /*! exports provided: ComercialClientesCadastroContatosFormularioService */

    /***/
    function UPcH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialClientesCadastroContatosFormularioService", function () {
        return ComercialClientesCadastroContatosFormularioService;
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

      var ComercialClientesCadastroContatosFormularioService = /*#__PURE__*/function () {
        function ComercialClientesCadastroContatosFormularioService(http) {
          _classCallCheck(this, ComercialClientesCadastroContatosFormularioService);

          this.http = http;
          this.API = "http://23.254.204.187/api/comercial/clientes/cadastro/formulario/contatos";
        }

        _createClass(ComercialClientesCadastroContatosFormularioService, [{
          key: "loadDepencies",
          value: function loadDepencies() {
            var funcoes = this.getFuncoes();
            var setores = this.getSetores(); // let timesFutebol = this.getTimesFutebol();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])([funcoes, setores]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getFuncoes",
          value: function getFuncoes() {
            return this.http.get("".concat(this.API, "/funcoes")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getSetores",
          value: function getSetores() {
            return this.http.get("".concat(this.API, "/setores")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getTimesFutebol",
          value: function getTimesFutebol() {
            return this.http.get("".concat(this.API, "/times-futebol")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }]);

        return ComercialClientesCadastroContatosFormularioService;
      }();

      ComercialClientesCadastroContatosFormularioService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      ComercialClientesCadastroContatosFormularioService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ComercialClientesCadastroContatosFormularioService);
      /***/
    },

    /***/
    "Uwyb":
    /*!*********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/clientes/cadastro/potencial-compra/detalhes/detalhes.component.html ***!
      \*********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Uwyb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<div class=\"row\" *ngIf=\"potencialCompraLoaded\">\r\n  <div class=\"col\">\r\n    <div class=\"mtc-title\">Potencial de compra (mensual)</div>\r\n    <div class=\"form-row\" *ngIf=\"potencialCompra.length > 0\">\r\n      <div class=\"form-group col-md-6\" *ngFor=\"let item of potencialCompra\">\r\n        <label>{{ item.descricao | capitalizeFirst }}</label>\r\n        <div>De {{ handleNumber(item.de) }}t até {{ handleNumber(item.ate) }}t</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row py-5 my-5\" *ngIf=\"potencialCompra.length == 0\">\r\n      <div class=\"col\">\r\n        <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "W5BC":
    /*!***************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/cadastro/dados-relacionamento/formulario/formulario.component.scss ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function W5BC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NsaWVudGVzL2NhZGFzdHJvL2RhZG9zLXJlbGFjaW9uYW1lbnRvL2Zvcm11bGFyaW8vZm9ybXVsYXJpby5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "Wgoc":
    /*!********************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/cadastro/cadastro-routing.module.ts ***!
      \********************************************************************************/

    /*! exports provided: ComercialCadastrosRoutingModule */

    /***/
    function Wgoc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosRoutingModule", function () {
        return ComercialCadastrosRoutingModule;
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


      var _clientes_resolver_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../clientes-resolver.guard */
      "NJR3");
      /* harmony import */


      var _dados_faturamento_formulario_formulario_data_resolver_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./dados-faturamento/formulario/formulario-data-resolver.guard */
      "3j3d");
      /* harmony import */


      var _dados_faturamento_formulario_formulario_rules_resolver_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./dados-faturamento/formulario/formulario-rules-resolver.guard */
      "oH+a");
      /* harmony import */


      var _enderecos_formulario_formulario_data_resolver_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./enderecos/formulario/formulario-data-resolver.guard */
      "wDVn");
      /* harmony import */


      var _enderecos_formulario_formulario_rules_resolver_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./enderecos/formulario/formulario-rules-resolver.guard */
      "ruYJ");
      /* harmony import */


      var _contatos_formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./contatos/formulario/formulario-resolver.guard */
      "+MnF");
      /* harmony import */


      var _dados_relacionamento_formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./dados-relacionamento/formulario/formulario-resolver.guard */
      "LXQP");
      /* harmony import */


      var _potencial_compra_formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./potencial-compra/formulario/formulario-resolver.guard */
      "B0Of");
      /* harmony import */


      var _cadastro_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./cadastro.component */
      "L/8C");
      /* harmony import */


      var _dados_faturamento_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./dados-faturamento/detalhes/detalhes.component */
      "fjd7");
      /* harmony import */


      var _dados_faturamento_formulario_formulario_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./dados-faturamento/formulario/formulario.component */
      "8yz0");
      /* harmony import */


      var _enderecos_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./enderecos/detalhes/detalhes.component */
      "QOcb");
      /* harmony import */


      var _enderecos_formulario_formulario_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./enderecos/formulario/formulario.component */
      "n1L9");
      /* harmony import */


      var _contatos_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./contatos/detalhes/detalhes.component */
      "qJk7");
      /* harmony import */


      var _contatos_formulario_formulario_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./contatos/formulario/formulario.component */
      "nF7G");
      /* harmony import */


      var _dados_relacionamento_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./dados-relacionamento/detalhes/detalhes.component */
      "AZRv");
      /* harmony import */


      var _dados_relacionamento_formulario_formulario_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./dados-relacionamento/formulario/formulario.component */
      "1kjR");
      /* harmony import */


      var _potencial_compra_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./potencial-compra/detalhes/detalhes.component */
      "KWqw");
      /* harmony import */


      var _potencial_compra_formulario_formulario_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./potencial-compra/formulario/formulario.component */
      "4zD7");
      /* harmony import */


      var _anexos_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./anexos/detalhes/detalhes.component */
      "PPg3");
      /* harmony import */


      var _anexos_formulario_formulario_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./anexos/formulario/formulario.component */
      "0TGB");
      /* harmony import */


      var _filial_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./filial/detalhes/detalhes.component */
      "sveC");
      /* harmony import */


      var _travas_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./travas/detalhes/detalhes.component */
      "igIG");
      /* harmony import */


      var _informacoes_financeiras_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./informacoes-financeiras/detalhes/detalhes.component */
      "QPni");
      /* harmony import */


      var _informacoes_comerciais_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./informacoes-comerciais/detalhes/detalhes.component */
      "CelN"); // Guards
      // Components


      var routes = [{
        path: ':id',
        component: _cadastro_component__WEBPACK_IMPORTED_MODULE_12__["ComercialClientesCadastroComponent"],
        resolve: {
          response: _clientes_resolver_guard__WEBPACK_IMPORTED_MODULE_4__["ComercialClientesResolverGuard"]
        },
        children: [{
          path: '',
          redirectTo: 'dados-faturamento',
          pathMatch: 'full'
        }, {
          path: 'dados-faturamento',
          children: [{
            path: '',
            component: _dados_faturamento_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_13__["ComercialClientesCadastroDadosFaturamentoDetalhesComponent"]
          }, {
            path: 'editar',
            component: _dados_faturamento_formulario_formulario_component__WEBPACK_IMPORTED_MODULE_14__["ComercialClientesCadastroDadosFaturamentoFormularioComponent"],
            resolve: {
              data: _dados_faturamento_formulario_formulario_data_resolver_guard__WEBPACK_IMPORTED_MODULE_5__["ComercialClientesCadastroDadosFaturamentoResolverGuard"],
              rules: _dados_faturamento_formulario_formulario_rules_resolver_guard__WEBPACK_IMPORTED_MODULE_6__["ComercialClientesCadastroDadosFaturamentoRulesResolverGuard"]
            },
            canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]]
          }]
        }, {
          path: 'enderecos',
          children: [{
            path: '',
            component: _enderecos_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_15__["ComercialClientesCadastroEnderecosDetalhesComponent"]
          }, {
            path: 'novo',
            component: _enderecos_formulario_formulario_component__WEBPACK_IMPORTED_MODULE_16__["ComercialClientesCadastroEnderecosFormularioComponent"],
            resolve: {
              data: _enderecos_formulario_formulario_data_resolver_guard__WEBPACK_IMPORTED_MODULE_7__["ComercialClientesCadastroEnderecosResolverGuard"],
              rules: _enderecos_formulario_formulario_rules_resolver_guard__WEBPACK_IMPORTED_MODULE_8__["ComercialClientesCadastroEnderecosRulesResolverGuard"]
            },
            canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]]
          }, {
            path: 'editar/:idEndereco/:idSituacao',
            component: _enderecos_formulario_formulario_component__WEBPACK_IMPORTED_MODULE_16__["ComercialClientesCadastroEnderecosFormularioComponent"],
            resolve: {
              data: _enderecos_formulario_formulario_data_resolver_guard__WEBPACK_IMPORTED_MODULE_7__["ComercialClientesCadastroEnderecosResolverGuard"],
              rules: _enderecos_formulario_formulario_rules_resolver_guard__WEBPACK_IMPORTED_MODULE_8__["ComercialClientesCadastroEnderecosRulesResolverGuard"]
            },
            canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]]
          }]
        }, {
          path: 'contatos',
          children: [{
            path: '',
            component: _contatos_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_17__["ComercialClientesCadastroContatosDetalhesComponent"]
          }, {
            path: 'novo',
            component: _contatos_formulario_formulario_component__WEBPACK_IMPORTED_MODULE_18__["ComercialClientesCadastroContatosFormularioComponent"],
            resolve: {
              data: _contatos_formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_9__["ComercialClientesCadastroContatosResolverGuard"]
            },
            canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]]
          }, {
            path: 'editar/:idContato',
            component: _contatos_formulario_formulario_component__WEBPACK_IMPORTED_MODULE_18__["ComercialClientesCadastroContatosFormularioComponent"],
            resolve: {
              data: _contatos_formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_9__["ComercialClientesCadastroContatosResolverGuard"]
            },
            canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]]
          }]
        }, {
          path: 'dados-relacionamento',
          children: [{
            path: '',
            component: _dados_relacionamento_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_19__["ComercialClientesCadastroDadosRelacionamentoDetalhesComponent"]
          }, {
            path: 'editar',
            component: _dados_relacionamento_formulario_formulario_component__WEBPACK_IMPORTED_MODULE_20__["ComercialClientesCadastroDadosRelacionamentoFormularioComponent"],
            resolve: {
              data: _dados_relacionamento_formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_10__["ComercialClientesCadastroDadosRelacionamentoResolverGuard"]
            },
            canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]]
          }]
        }, {
          path: 'potencial-compra',
          children: [{
            path: '',
            component: _potencial_compra_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_21__["ComercialClientesCadastroPotencialCompraDetalhesComponent"]
          }, {
            path: 'editar',
            component: _potencial_compra_formulario_formulario_component__WEBPACK_IMPORTED_MODULE_22__["ComercialClientesCadastroPotencialCompraFormularioComponent"],
            resolve: {
              data: _potencial_compra_formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_11__["ComercialClientesCadastroPotencialCompraResolverGuard"]
            },
            canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]]
          }]
        }, {
          path: 'anexos',
          children: [{
            path: '',
            component: _anexos_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_23__["ComercialClientesCadastroAnexosDetalhesComponent"]
          }, {
            path: 'novo',
            component: _anexos_formulario_formulario_component__WEBPACK_IMPORTED_MODULE_24__["ComercialClientesCadastroAnexosFormularioComponent"]
          }]
        }, {
          path: 'filial',
          children: [{
            path: '',
            component: _filial_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_25__["ComercialClientesCadastroFilialDetalhesComponent"]
          }]
        }, {
          path: 'travas',
          children: [{
            path: '',
            component: _travas_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_26__["ComercialClientesCadastroTravasDetalhesComponent"]
          }]
        }, {
          path: 'informacoes-financeiras',
          children: [{
            path: '',
            component: _informacoes_financeiras_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_27__["ComercialClientesCadastroInfosFinanceirasDetalhesComponent"]
          }]
        }, {
          path: 'informacoes-comerciais',
          children: [{
            path: '',
            component: _informacoes_comerciais_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_28__["ComercialClientesCadastroInfosComerciaisDetalhesComponent"]
          }]
        }]
      }, {
        path: '**',
        redirectTo: '/comercial/home',
        pathMatch: 'full'
      }];

      var ComercialCadastrosRoutingModule = /*#__PURE__*/_createClass(function ComercialCadastrosRoutingModule() {
        _classCallCheck(this, ComercialCadastrosRoutingModule);
      });

      ComercialCadastrosRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ComercialCadastrosRoutingModule);
      /***/
    },

    /***/
    "YmkE":
    /*!**************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/clientes/cadastro/enderecos/detalhes/detalhes.component.html ***!
      \**************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function YmkE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<div class=\"row\" *ngIf=\"enderecosLoaded\">\r\n  <div class=\"col\">\r\n    <div class=\"mtc-title\">Direcciones</div>\r\n    <accordion *ngIf=\"enderecos && enderecos.length > 0\">\r\n      <accordion-group class=\"mb-2\" [heading]=\"tipoEndereco(endereco)\" *ngFor=\"let endereco of enderecos\">\r\n        <div class=\"d-flex justify-content-between w-100 mb-3\">\r\n          <div class=\"mtc-title mb-0\">{{ tipoEndereco(endereco) }}</div>\r\n          <div>\r\n            <a\r\n              class=\"text-secondary\"\r\n              [routerLink]=\"['editar', endereco.id, 1]\"\r\n              *ngIf=\"endereco.principal == 0\">\r\n              <b>Editar</b>\r\n            </a>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <!-- <div class=\"form-group col-md-6\">\r\n            <label>CEP</label>\r\n            <div *ngIf=\"endereco.cep == null\">SIN INFORMACION</div>\r\n            <div *ngIf=\"endereco.cep != null\">{{ endereco.cep | cep }}</div>\r\n          </div> -->\r\n          <div class=\"form-group col-md-6\">\r\n            <label>Direccion</label>\r\n            <div *ngIf=\"endereco.endereco == null\">SIN INFORMACION</div>\r\n            <div *ngIf=\"endereco.endereco != null\">{{ endereco.endereco }}</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <!-- <div class=\"form-group col-md-6\">\r\n            <label>Número</label>\r\n            <div *ngIf=\"endereco.numero == null\">SIN INFORMACION</div>\r\n            <div *ngIf=\"endereco.numero != null\">{{ endereco.numero }}</div>\r\n          </div> -->\r\n          <div class=\"form-group col-md-6\">\r\n            <label>Complemento</label>\r\n            <div *ngIf=\"endereco.complemento == null\">SIN INFORMACION</div>\r\n            <div *ngIf=\"endereco.complemento != null\">{{ endereco.complemento }}</div>\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label>Referencia</label>\r\n            <div *ngIf=\"endereco.referencia == null\">SIN INFORMACION</div>\r\n            <div *ngIf=\"endereco.referencia != null\">{{ endereco.referencia }}</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label>Barrio</label>\r\n            <div *ngIf=\"endereco.bairro == null\">SIN INFORMACION</div>\r\n            <div *ngIf=\"endereco.bairro != null\">{{ endereco.bairro }}</div>\r\n          </div>\r\n          <div class=\"form-group col-md-6 mb-0\">\r\n            <label>Ciudad</label>\r\n            <div *ngIf=\"endereco.cidade == null\">SIN INFORMACION</div>\r\n            <div *ngIf=\"endereco.cidade != null\">\r\n              {{ endereco.cidade }}<span *ngIf=\"endereco.uf != null\"> / {{ endereco.uf }}</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <!-- <div class=\"form-group col-md-6 mb-0\" *ngIf=\"endereco.principal == 1\">\r\n            <label>Región de operación comercial</label>\r\n            <div *ngIf=\"endereco.descAtuacaoComercial == null\">SIN INFORMACION</div>\r\n            <div *ngIf=\"endereco.descAtuacaoComercial != null\">{{ endereco.descAtuacaoComercial }}</div>\r\n          </div> -->\r\n        </div>\r\n        <div *ngIf=\"endereco.entrega == 1\">\r\n          <div class=\"form-row\">\r\n            <div class=\"col\"><hr></div>\r\n          </div>\r\n          <div class=\"mtc-title\">Datos de entrega</div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-6\">\r\n              <label>NOMBRE DEL LUGAR DE ENTREGA</label>\r\n              <div *ngIf=\"endereco.titulo == null\">SIN INFORMACION</div>\r\n              <div *ngIf=\"endereco.titulo != null\">{{ endereco.titulo }}</div>\r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n              <label>Region de entrega</label>\r\n              <div *ngIf=\"endereco.descRegiaoEntrega == null\">SIN INFORMACION</div>\r\n              <div *ngIf=\"endereco.descRegiaoEntrega != null\">{{ endereco.descRegiaoEntrega }}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col\">\r\n              <label>Dias para realizar entregas</label>\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col d-flex w-100 mb-1\">\r\n                  <div class=\"d-flex mr-1\">\r\n                    <div class=\"mr-1\">\r\n                      <i class=\"fas fa-times-circle text-danger\" *ngIf=\"endereco.diasEntrega.segunda.checked == 0\"></i>\r\n                      <i class=\"fas fa-check-circle text-success\" *ngIf=\"endereco.diasEntrega.segunda.checked == 1\"></i>\r\n                    </div>\r\n                    <span>Segunda-feira:</span>\r\n                  </div>\r\n                  <div *ngIf=\"endereco.diasEntrega.segunda.checked == 1\">\r\n                    <div *ngIf=\"endereco.diasEntrega.segunda.minimo !== null && endereco.diasEntrega.segunda.maximo !== null\">\r\n                      de {{ convertMysqlTime(endereco.diasEntrega.segunda.minimo) }} a {{ convertMysqlTime(endereco.diasEntrega.segunda.maximo) }}\r\n                    </div>\r\n                    <div *ngIf=\"endereco.diasEntrega.segunda.minimo == null || endereco.diasEntrega.segunda.maximo == null\">\r\n                      horario no definido\r\n                    </div>\r\n                  </div>\r\n                  <strong *ngIf=\"endereco.diasEntrega.segunda.checked == 0\">\r\n                    No acepta entregas\r\n                  </strong>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col d-flex w-100 mb-1\">\r\n                  <div class=\"d-flex mr-1\">\r\n                    <div class=\"mr-1\">\r\n                      <i class=\"fas fa-times-circle text-danger\" *ngIf=\"endereco.diasEntrega.terca.checked == 0\"></i>\r\n                      <i class=\"fas fa-check-circle text-success\" *ngIf=\"endereco.diasEntrega.terca.checked == 1\"></i>\r\n                    </div>\r\n                    <span>Terça-feira:</span>\r\n                  </div>\r\n                  <div *ngIf=\"endereco.diasEntrega.terca.checked == 1\">\r\n                    <div *ngIf=\"endereco.diasEntrega.terca.minimo !== null && endereco.diasEntrega.terca.maximo !== null\">\r\n                      das {{ convertMysqlTime(endereco.diasEntrega.terca.minimo) }} às {{ convertMysqlTime(endereco.diasEntrega.terca.maximo) }}\r\n                    </div>\r\n                    <div *ngIf=\"endereco.diasEntrega.terca.minimo == null || endereco.diasEntrega.terca.maximo == null\">\r\n                      horario no definido\r\n                    </div>\r\n                  </div>\r\n                  <strong *ngIf=\"endereco.diasEntrega.terca.checked == 0\">\r\n                    No acepta entregas\r\n                  </strong>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col d-flex w-100 mb-1\">\r\n                  <div class=\"d-flex mr-1\">\r\n                    <div class=\"mr-1\">\r\n                      <i class=\"fas fa-times-circle text-danger\" *ngIf=\"endereco.diasEntrega.quarta.checked == 0\"></i>\r\n                      <i class=\"fas fa-check-circle text-success\" *ngIf=\"endereco.diasEntrega.quarta.checked == 1\"></i>\r\n                    </div>\r\n                    <span>Quarta-feira:</span>\r\n                  </div>\r\n                  <div *ngIf=\"endereco.diasEntrega.quarta.checked == 1\">\r\n                    <div *ngIf=\"endereco.diasEntrega.quarta.minimo !== null && endereco.diasEntrega.quarta.maximo !== null\">\r\n                      das {{ convertMysqlTime(endereco.diasEntrega.quarta.minimo) }} às {{ convertMysqlTime(endereco.diasEntrega.quarta.maximo) }}\r\n                    </div>\r\n                    <div *ngIf=\"endereco.diasEntrega.quarta.minimo == null || endereco.diasEntrega.quarta.maximo == null\">\r\n                      horario no definido\r\n                    </div>\r\n                  </div>\r\n                  <strong *ngIf=\"endereco.diasEntrega.quarta.checked == 0\">\r\n                    No acepta entregas\r\n                  </strong>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col d-flex w-100 mb-1\">\r\n                  <div class=\"d-flex mr-1\">\r\n                    <div class=\"mr-1\">\r\n                      <i class=\"fas fa-times-circle text-danger\" *ngIf=\"endereco.diasEntrega.quinta.checked == 0\"></i>\r\n                      <i class=\"fas fa-check-circle text-success\" *ngIf=\"endereco.diasEntrega.quinta.checked == 1\"></i>\r\n                    </div>\r\n                    <span>Quinta-feira:</span>\r\n                  </div>\r\n                  <div *ngIf=\"endereco.diasEntrega.quinta.checked == 1\">\r\n                    <div *ngIf=\"endereco.diasEntrega.quinta.minimo !== null && endereco.diasEntrega.quinta.maximo !== null\">\r\n                      das {{ convertMysqlTime(endereco.diasEntrega.quinta.minimo) }} às {{ convertMysqlTime(endereco.diasEntrega.quinta.maximo) }}\r\n                    </div>\r\n                    <div *ngIf=\"endereco.diasEntrega.quinta.minimo == null || endereco.diasEntrega.quinta.maximo == null\">\r\n                      horario no definido\r\n                    </div>\r\n                  </div>\r\n                  <strong *ngIf=\"endereco.diasEntrega.quinta.checked == 0\">\r\n                    No acepta entregas\r\n                  </strong>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col d-flex w-100 mb-1\">\r\n                  <div class=\"d-flex mr-1\">\r\n                    <div class=\"mr-1\">\r\n                      <i class=\"fas fa-times-circle text-danger\" *ngIf=\"endereco.diasEntrega.sexta.checked == 0\"></i>\r\n                      <i class=\"fas fa-check-circle text-success\" *ngIf=\"endereco.diasEntrega.sexta.checked == 1\"></i>\r\n                    </div>\r\n                    <span>Sexta-feira:</span>\r\n                  </div>\r\n                  <div *ngIf=\"endereco.diasEntrega.sexta.checked == 1\">\r\n                    <div *ngIf=\"endereco.diasEntrega.sexta.minimo !== null && endereco.diasEntrega.sexta.maximo !== null\">\r\n                      das {{ convertMysqlTime(endereco.diasEntrega.sexta.minimo) }} às {{ convertMysqlTime(endereco.diasEntrega.sexta.maximo) }}\r\n                    </div>\r\n                    <div *ngIf=\"endereco.diasEntrega.sexta.minimo == null || endereco.diasEntrega.sexta.maximo == null\">\r\n                      horario no definido\r\n                    </div>\r\n                  </div>\r\n                  <strong *ngIf=\"endereco.diasEntrega.sexta.checked == 0\">\r\n                    No acepta entregas\r\n                  </strong>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col d-flex w-100 mb-1\">\r\n                  <div class=\"d-flex mr-1\">\r\n                    <div class=\"mr-1\">\r\n                      <i class=\"fas fa-times-circle text-danger\" *ngIf=\"endereco.diasEntrega.sabado.checked == 0\"></i>\r\n                      <i class=\"fas fa-check-circle text-success\" *ngIf=\"endereco.diasEntrega.sabado.checked == 1\"></i>\r\n                    </div>\r\n                    <span>Sábado:</span>\r\n                  </div>\r\n                  <div *ngIf=\"endereco.diasEntrega.sabado.checked == 1\">\r\n                    <div *ngIf=\"endereco.diasEntrega.sabado.minimo !== null && endereco.diasEntrega.sabado.maximo !== null\">\r\n                      das {{ convertMysqlTime(endereco.diasEntrega.sabado.minimo) }} às {{ convertMysqlTime(endereco.diasEntrega.sabado.maximo) }}\r\n                    </div>\r\n                    <div *ngIf=\"endereco.diasEntrega.sabado.minimo == null || endereco.diasEntrega.sabado.maximo == null\">\r\n                      horario no definido\r\n                    </div>\r\n                  </div>\r\n                  <strong *ngIf=\"endereco.diasEntrega.sabado.checked == 0\">\r\n                    No acepta entregas\r\n                  </strong>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col d-flex w-100 mb-1\">\r\n                  <div class=\"d-flex mr-1\">\r\n                    <div class=\"mr-1\">\r\n                      <i class=\"fas fa-times-circle text-danger\" *ngIf=\"endereco.diasEntrega.domingo.checked == 0\"></i>\r\n                      <i class=\"fas fa-check-circle text-success\" *ngIf=\"endereco.diasEntrega.domingo.checked == 1\"></i>\r\n                    </div>\r\n                    <span>Domingo:</span>\r\n                  </div>\r\n                  <div *ngIf=\"endereco.diasEntrega.domingo.checked == 1\">\r\n                    <div *ngIf=\"endereco.diasEntrega.domingo.minimo !== null && endereco.diasEntrega.domingo.maximo !== null\">\r\n                      das {{ convertMysqlTime(endereco.diasEntrega.domingo.minimo) }} às {{ convertMysqlTime(endereco.diasEntrega.domingo.maximo) }}\r\n                    </div>\r\n                    <div *ngIf=\"endereco.diasEntrega.domingo.minimo == null || endereco.diasEntrega.domingo.maximo == null\">\r\n                      horario no definido\r\n                    </div>\r\n                  </div>\r\n                  <strong *ngIf=\"endereco.diasEntrega.domingo.checked == 0\">\r\n                    No acepta entregas\r\n                  </strong>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-6\">\r\n              <label>Tipo de material</label>\r\n              <div *ngIf=\"endereco.dsTipoMaterial == null\">SIN INFORMACION</div>\r\n              <div *ngIf=\"endereco.dsTipoMaterial != null\">{{ endereco.dsTipoMaterial | uppercase }}</div>\r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n              <label>Tipo de descarga</label>\r\n              <div *ngIf=\"endereco.dsTipoDescarga == null\">SIN INFORMACION</div>\r\n              <div *ngIf=\"endereco.dsTipoDescarga != null\">{{ endereco.dsTipoDescarga | uppercase }}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-6\">\r\n              <label>Modo de descarga</label>\r\n              <div *ngIf=\"endereco.dsModoDescarga == null\">SIN INFORMACION</div>\r\n              <div *ngIf=\"endereco.dsModoDescarga != null\">{{ endereco.dsModoDescarga | uppercase }}</div>\r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n              <label>Tipos de veículo</label>\r\n              <div *ngIf=\"endereco.tiposVeiculosDesc == null\">SIN INFORMACION</div>\r\n              <div *ngIf=\"endereco.tiposVeiculosDesc != null\">{{ endereco.tiposVeiculosDesc | uppercase }}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-6 mb-0\">\r\n              <label>Dados especiais</label>\r\n              <div *ngIf=\"endereco.dadosEspeciaisDesc == null\">SIN INFORMACION</div>\r\n              <div *ngIf=\"endereco.dadosEspeciaisDesc != null\">{{ endereco.dadosEspeciaisDesc | uppercase }}</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </accordion-group>\r\n    </accordion>\r\n    <div class=\"row py-5 my-5\" *ngIf=\"!enderecos\">\r\n      <div class=\"col\">\r\n        <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n      </div>\r\n    </div>\r\n    <div  *ngIf=\"enderecosAguardandoAprovacao && enderecosAguardandoAprovacao.length > 0\">\r\n      <div class=\"mtc-title\">Endereços aguardando aprovação</div>\r\n      <accordion>\r\n        <accordion-group class=\"mb-2\" [heading]=\"endereco.cidade\" *ngFor=\"let endereco of enderecosAguardandoAprovacao\">\r\n          <!-- <div class=\"d-flex justify-content-between w-100 mb-3\">\r\n            <div class=\"mtc-title mb-0\">{{ endereco.cidade }}</div>\r\n            <div>\r\n              <a\r\n                class=\"text-secondary\"\r\n                [routerLink]=\"['editar', endereco.id, endereco.situacao]\"\r\n                *ngIf=\"endereco.situacao == 3\">\r\n                <b>Editar</b>\r\n              </a>\r\n            </div>\r\n          </div> -->\r\n          <div class=\"form-row\">\r\n            <!-- <div class=\"form-group col-md-6\">\r\n              <label>CEP</label>\r\n              <div *ngIf=\"endereco.cep == null\">SIN INFORMACION</div>\r\n              <div *ngIf=\"endereco.cep != null\">{{ endereco.cep | cep }}</div>\r\n            </div> -->\r\n            <div class=\"form-group col-md-6\">\r\n              <label>Dirección</label>\r\n              <div *ngIf=\"endereco.endereco == null\">SIN INFORMACION</div>\r\n              <div *ngIf=\"endereco.endereco != null\">{{ endereco.endereco }}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <!-- <div class=\"form-group col-md-6\">\r\n              <label>Número</label>\r\n              <div *ngIf=\"endereco.numero == null\">SIN INFORMACION</div>\r\n              <div *ngIf=\"endereco.numero != null\">{{ endereco.numero }}</div>\r\n            </div> -->\r\n            <div class=\"form-group col-md-6\">\r\n              <label>Complemento</label>\r\n              <div *ngIf=\"endereco.complemento == null\">SIN INFORMACION</div>\r\n              <div *ngIf=\"endereco.complemento != null\">{{ endereco.complemento }}</div>\r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n              <label>Referencia</label>\r\n              <div *ngIf=\"endereco.referencia == null\">SIN INFORMACION</div>\r\n              <div *ngIf=\"endereco.referencia != null\">{{ endereco.referencia }}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-6\">\r\n              <label>Barrio</label>\r\n              <div *ngIf=\"endereco.bairro == null\">SIN INFORMACION</div>\r\n              <div *ngIf=\"endereco.bairro != null\">{{ endereco.bairro }}</div>\r\n            </div>\r\n            <div class=\"form-group col-md-6 mb-0\">\r\n              <label>Ciudad</label>\r\n              <div *ngIf=\"endereco.cidade == null\">SIN INFORMACION</div>\r\n              <div *ngIf=\"endereco.cidade != null\">\r\n                {{ endereco.cidade }}<span *ngIf=\"endereco.uf != null\"> / {{ endereco.uf }}</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div>\r\n            <div class=\"form-row\">\r\n              <div class=\"col\"><hr></div>\r\n            </div>\r\n            <div class=\"mtc-title\">Datos de entrega</div>\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-md-6\">\r\n                <label>Título de la ubicación de entrega</label>\r\n                <div *ngIf=\"endereco.titulo == null\">SIN INFORMACION</div>\r\n                <div *ngIf=\"endereco.titulo != null\">{{ endereco.titulo }}</div>\r\n              </div>\r\n              <div class=\"form-group col-md-6\">\r\n                <label>Región de entrega</label>\r\n                <div *ngIf=\"endereco.descRegiaoEntrega == null\">SIN INFORMACION</div>\r\n                <div *ngIf=\"endereco.descRegiaoEntrega != null\">{{ endereco.descRegiaoEntrega }}</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col\">\r\n                <label>Dias para realizar entregas</label>\r\n                <div class=\"form-row\">\r\n                  <div class=\"form-group col d-flex w-100 mb-1\">\r\n                    <div class=\"d-flex mr-1\">\r\n                      <div class=\"mr-1\">\r\n                        <i class=\"fas fa-times-circle text-danger\" *ngIf=\"endereco.diasEntrega.segunda.checked == 0\"></i>\r\n                        <i class=\"fas fa-check-circle text-success\" *ngIf=\"endereco.diasEntrega.segunda.checked == 1\"></i>\r\n                      </div>\r\n                      <span>Lunes:</span>\r\n                    </div>\r\n                    <div *ngIf=\"endereco.diasEntrega.segunda.checked == 1\">\r\n                      <div *ngIf=\"endereco.diasEntrega.segunda.minimo !== null && endereco.diasEntrega.segunda.maximo !== null\">\r\n                        das {{ convertMysqlTime(endereco.diasEntrega.segunda.minimo) }} às {{ convertMysqlTime(endereco.diasEntrega.segunda.maximo) }}\r\n                      </div>\r\n                      <div *ngIf=\"endereco.diasEntrega.segunda.minimo == null || endereco.diasEntrega.segunda.maximo == null\">\r\n                        horario no definido\r\n                      </div>\r\n                    </div>\r\n                    <strong *ngIf=\"endereco.diasEntrega.segunda.checked == 0\">\r\n                      No acepta entregas\r\n                    </strong>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-row\">\r\n                  <div class=\"form-group col d-flex w-100 mb-1\">\r\n                    <div class=\"d-flex mr-1\">\r\n                      <div class=\"mr-1\">\r\n                        <i class=\"fas fa-times-circle text-danger\" *ngIf=\"endereco.diasEntrega.terca.checked == 0\"></i>\r\n                        <i class=\"fas fa-check-circle text-success\" *ngIf=\"endereco.diasEntrega.terca.checked == 1\"></i>\r\n                      </div>\r\n                      <span>Martes:</span>\r\n                    </div>\r\n                    <div *ngIf=\"endereco.diasEntrega.terca.checked == 1\">\r\n                      <div *ngIf=\"endereco.diasEntrega.terca.minimo !== null && endereco.diasEntrega.terca.maximo !== null\">\r\n                        das {{ convertMysqlTime(endereco.diasEntrega.terca.minimo) }} às {{ convertMysqlTime(endereco.diasEntrega.terca.maximo) }}\r\n                      </div>\r\n                      <div *ngIf=\"endereco.diasEntrega.terca.minimo == null || endereco.diasEntrega.terca.maximo == null\">\r\n                        horario no definido\r\n                      </div>\r\n                    </div>\r\n                    <strong *ngIf=\"endereco.diasEntrega.terca.checked == 0\">\r\n                      No acepta entregas\r\n                    </strong>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-row\">\r\n                  <div class=\"form-group col d-flex w-100 mb-1\">\r\n                    <div class=\"d-flex mr-1\">\r\n                      <div class=\"mr-1\">\r\n                        <i class=\"fas fa-times-circle text-danger\" *ngIf=\"endereco.diasEntrega.quarta.checked == 0\"></i>\r\n                        <i class=\"fas fa-check-circle text-success\" *ngIf=\"endereco.diasEntrega.quarta.checked == 1\"></i>\r\n                      </div>\r\n                      <span>Miercoles:</span>\r\n                    </div>\r\n                    <div *ngIf=\"endereco.diasEntrega.quarta.checked == 1\">\r\n                      <div *ngIf=\"endereco.diasEntrega.quarta.minimo !== null && endereco.diasEntrega.quarta.maximo !== null\">\r\n                        das {{ convertMysqlTime(endereco.diasEntrega.quarta.minimo) }} às {{ convertMysqlTime(endereco.diasEntrega.quarta.maximo) }}\r\n                      </div>\r\n                      <div *ngIf=\"endereco.diasEntrega.quarta.minimo == null || endereco.diasEntrega.quarta.maximo == null\">\r\n                        horario no definido\r\n                      </div>\r\n                    </div>\r\n                    <strong *ngIf=\"endereco.diasEntrega.quarta.checked == 0\">\r\n                      No acepta entregas\r\n                    </strong>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-row\">\r\n                  <div class=\"form-group col d-flex w-100 mb-1\">\r\n                    <div class=\"d-flex mr-1\">\r\n                      <div class=\"mr-1\">\r\n                        <i class=\"fas fa-times-circle text-danger\" *ngIf=\"endereco.diasEntrega.quinta.checked == 0\"></i>\r\n                        <i class=\"fas fa-check-circle text-success\" *ngIf=\"endereco.diasEntrega.quinta.checked == 1\"></i>\r\n                      </div>\r\n                      <span>Jueves:</span>\r\n                    </div>\r\n                    <div *ngIf=\"endereco.diasEntrega.quinta.checked == 1\">\r\n                      <div *ngIf=\"endereco.diasEntrega.quinta.minimo !== null && endereco.diasEntrega.quinta.maximo !== null\">\r\n                        das {{ convertMysqlTime(endereco.diasEntrega.quinta.minimo) }} às {{ convertMysqlTime(endereco.diasEntrega.quinta.maximo) }}\r\n                      </div>\r\n                      <div *ngIf=\"endereco.diasEntrega.quinta.minimo == null || endereco.diasEntrega.quinta.maximo == null\">\r\n                        horario no definido\r\n                      </div>\r\n                    </div>\r\n                    <strong *ngIf=\"endereco.diasEntrega.quinta.checked == 0\">\r\n                      No acepta entregas\r\n                    </strong>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-row\">\r\n                  <div class=\"form-group col d-flex w-100 mb-1\">\r\n                    <div class=\"d-flex mr-1\">\r\n                      <div class=\"mr-1\">\r\n                        <i class=\"fas fa-times-circle text-danger\" *ngIf=\"endereco.diasEntrega.sexta.checked == 0\"></i>\r\n                        <i class=\"fas fa-check-circle text-success\" *ngIf=\"endereco.diasEntrega.sexta.checked == 1\"></i>\r\n                      </div>\r\n                      <span>Viernes:</span>\r\n                    </div>\r\n                    <div *ngIf=\"endereco.diasEntrega.sexta.checked == 1\">\r\n                      <div *ngIf=\"endereco.diasEntrega.sexta.minimo !== null && endereco.diasEntrega.sexta.maximo !== null\">\r\n                        das {{ convertMysqlTime(endereco.diasEntrega.sexta.minimo) }} às {{ convertMysqlTime(endereco.diasEntrega.sexta.maximo) }}\r\n                      </div>\r\n                      <div *ngIf=\"endereco.diasEntrega.sexta.minimo == null || endereco.diasEntrega.sexta.maximo == null\">\r\n                        horario no definido\r\n                      </div>\r\n                    </div>\r\n                    <strong *ngIf=\"endereco.diasEntrega.sexta.checked == 0\">\r\n                      No acepta entregas\r\n                    </strong>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-row\">\r\n                  <div class=\"form-group col d-flex w-100 mb-1\">\r\n                    <div class=\"d-flex mr-1\">\r\n                      <div class=\"mr-1\">\r\n                        <i class=\"fas fa-times-circle text-danger\" *ngIf=\"endereco.diasEntrega.sabado.checked == 0\"></i>\r\n                        <i class=\"fas fa-check-circle text-success\" *ngIf=\"endereco.diasEntrega.sabado.checked == 1\"></i>\r\n                      </div>\r\n                      <span>Sabado:</span>\r\n                    </div>\r\n                    <div *ngIf=\"endereco.diasEntrega.sabado.checked == 1\">\r\n                      <div *ngIf=\"endereco.diasEntrega.sabado.minimo !== null && endereco.diasEntrega.sabado.maximo !== null\">\r\n                        das {{ convertMysqlTime(endereco.diasEntrega.sabado.minimo) }} às {{ convertMysqlTime(endereco.diasEntrega.sabado.maximo) }}\r\n                      </div>\r\n                      <div *ngIf=\"endereco.diasEntrega.sabado.minimo == null || endereco.diasEntrega.sabado.maximo == null\">\r\n                        horario no definido\r\n                      </div>\r\n                    </div>\r\n                    <strong *ngIf=\"endereco.diasEntrega.sabado.checked == 0\">\r\n                      No acepta entregas\r\n                    </strong>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-row\">\r\n                  <div class=\"form-group col d-flex w-100 mb-1\">\r\n                    <div class=\"d-flex mr-1\">\r\n                      <div class=\"mr-1\">\r\n                        <i class=\"fas fa-times-circle text-danger\" *ngIf=\"endereco.diasEntrega.domingo.checked == 0\"></i>\r\n                        <i class=\"fas fa-check-circle text-success\" *ngIf=\"endereco.diasEntrega.domingo.checked == 1\"></i>\r\n                      </div>\r\n                      <span>Domingo:</span>\r\n                    </div>\r\n                    <div *ngIf=\"endereco.diasEntrega.domingo.checked == 1\">\r\n                      <div *ngIf=\"endereco.diasEntrega.domingo.minimo !== null && endereco.diasEntrega.domingo.maximo !== null\">\r\n                        das {{ convertMysqlTime(endereco.diasEntrega.domingo.minimo) }} às {{ convertMysqlTime(endereco.diasEntrega.domingo.maximo) }}\r\n                      </div>\r\n                      <div *ngIf=\"endereco.diasEntrega.domingo.minimo == null || endereco.diasEntrega.domingo.maximo == null\">\r\n                        horario no definido\r\n                      </div>\r\n                    </div>\r\n                    <strong *ngIf=\"endereco.diasEntrega.domingo.checked == 0\">\r\n                      No acepta entregas\r\n                    </strong>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-md-6\">\r\n                <label>Tipo de material</label>\r\n                <div *ngIf=\"endereco.dsTipoMaterial == null\">SIN INFORMACION</div>\r\n                <div *ngIf=\"endereco.dsTipoMaterial != null\">{{ endereco.dsTipoMaterial | uppercase }}</div>\r\n              </div>\r\n              <div class=\"form-group col-md-6\">\r\n                <label>Tipo de descarga</label>\r\n                <div *ngIf=\"endereco.dsTipoDescarga == null\">SIN INFORMACION</div>\r\n                <div *ngIf=\"endereco.dsTipoDescarga != null\">{{ endereco.dsTipoDescarga | uppercase }}</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-md-6\">\r\n                <label>Modo de descarga</label>\r\n                <div *ngIf=\"endereco.dsModoDescarga == null\">SIN INFORMACION</div>\r\n                <div *ngIf=\"endereco.dsModoDescarga != null\">{{ endereco.dsModoDescarga | uppercase }}</div>\r\n              </div>\r\n              <div class=\"form-group col-md-6\">\r\n                <label>Tipos de vehiculo</label>\r\n                <div *ngIf=\"endereco.tiposVeiculosDesc == null\">SIN INFORMACION</div>\r\n                <div *ngIf=\"endereco.tiposVeiculosDesc != null\">{{ endereco.tiposVeiculosDesc | uppercase }}</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-md-6 mb-0\">\r\n                <label>Datos especiales</label>\r\n                <div *ngIf=\"endereco.dadosEspeciaisDesc == null\">SIN INFORMACION</div>\r\n                <div *ngIf=\"endereco.dadosEspeciaisDesc != null\">{{ endereco.dadosEspeciaisDesc | uppercase }}</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </accordion-group>\r\n      </accordion>\r\n    </div>\r\n    <div *ngIf=\"enderecosInativos && enderecosInativos.length > 0\">\r\n      <div class=\"mtc-title\">Direcciones inactivas / reprobadas</div>\r\n      <accordion >\r\n        <accordion-group class=\"mb-2\" [heading]=\"endereco.cidade\" *ngFor=\"let endereco of enderecosInativos\">\r\n          <div class=\"d-flex justify-content-between w-100 mb-3\">\r\n            <div class=\"mtc-title mb-0\">{{ endereco.descSituacao }}</div>\r\n            <div>\r\n              <a\r\n                class=\"text-secondary\"\r\n                [routerLink]=\"['editar', endereco.id, endereco.situacao]\">\r\n                <b>Editar</b>\r\n              </a>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <!-- <div class=\"form-group col-md-6\">\r\n              <label>CEP</label>\r\n              <div *ngIf=\"endereco.cep == null\">SIN INFORMACION</div>\r\n              <div *ngIf=\"endereco.cep != null\">{{ endereco.cep | cep }}</div>\r\n            </div> -->\r\n            <div class=\"form-group col-md-6\">\r\n              <label>Direccion</label>\r\n              <div *ngIf=\"endereco.endereco == null\">SIN INFORMACION</div>\r\n              <div *ngIf=\"endereco.endereco != null\">{{ endereco.endereco }}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <!-- <div class=\"form-group col-md-6\">\r\n              <label>Número</label>\r\n              <div *ngIf=\"endereco.numero == null\">SIN INFORMACION</div>\r\n              <div *ngIf=\"endereco.numero != null\">{{ endereco.numero }}</div>\r\n            </div> -->\r\n            <div class=\"form-group col-md-6\">\r\n              <label>Complemento</label>\r\n              <div *ngIf=\"endereco.complemento == null\">SIN INFORMACION</div>\r\n              <div *ngIf=\"endereco.complemento != null\">{{ endereco.complemento }}</div>\r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n              <label>Referencia</label>\r\n              <div *ngIf=\"endereco.referencia == null\">SIN INFORMACION</div>\r\n              <div *ngIf=\"endereco.referencia != null\">{{ endereco.referencia }}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-6\">\r\n              <label>Barrio</label>\r\n              <div *ngIf=\"endereco.bairro == null\">SIN INFORMACION</div>\r\n              <div *ngIf=\"endereco.bairro != null\">{{ endereco.bairro }}</div>\r\n            </div>\r\n            <div class=\"form-group col-md-6 mb-0\">\r\n              <label>Ciudad</label>\r\n              <div *ngIf=\"endereco.cidade == null\">SIN INFORMACION</div>\r\n              <div *ngIf=\"endereco.cidade != null\">\r\n                {{ endereco.cidade }}<span *ngIf=\"endereco.uf != null\"> / {{ endereco.uf }}</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div>\r\n            <div class=\"form-row\">\r\n              <div class=\"col\"><hr></div>\r\n            </div>\r\n            <div class=\"mtc-title\">Datos de entrega</div>\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-md-6\">\r\n                <label>Título de la ubicación de entrega</label>\r\n                <div *ngIf=\"endereco.titulo == null\">SIN INFORMACION</div>\r\n                <div *ngIf=\"endereco.titulo != null\">{{ endereco.titulo }}</div>\r\n              </div>\r\n              <div class=\"form-group col-md-6\">\r\n                <label>Region de entrega</label>\r\n                <div *ngIf=\"endereco.descRegiaoEntrega == null\">SIN INFORMACION</div>\r\n                <div *ngIf=\"endereco.descRegiaoEntrega != null\">{{ endereco.descRegiaoEntrega }}</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col\">\r\n                <label>Dias para realizar entregas</label>\r\n                <div class=\"form-row\">\r\n                  <div class=\"form-group col d-flex w-100 mb-1\">\r\n                    <div class=\"d-flex mr-1\">\r\n                      <div class=\"mr-1\">\r\n                        <i class=\"fas fa-times-circle text-danger\" *ngIf=\"endereco.diasEntrega.segunda.checked == 0\"></i>\r\n                        <i class=\"fas fa-check-circle text-success\" *ngIf=\"endereco.diasEntrega.segunda.checked == 1\"></i>\r\n                      </div>\r\n                      <span>Segunda-feira:</span>\r\n                    </div>\r\n                    <div *ngIf=\"endereco.diasEntrega.segunda.checked == 1\">\r\n                      <div *ngIf=\"endereco.diasEntrega.segunda.minimo !== null && endereco.diasEntrega.segunda.maximo !== null\">\r\n                        das {{ convertMysqlTime(endereco.diasEntrega.segunda.minimo) }} às {{ convertMysqlTime(endereco.diasEntrega.segunda.maximo) }}\r\n                      </div>\r\n                      <div *ngIf=\"endereco.diasEntrega.segunda.minimo == null || endereco.diasEntrega.segunda.maximo == null\">\r\n                        horario no definido\r\n                      </div>\r\n                    </div>\r\n                    <strong *ngIf=\"endereco.diasEntrega.segunda.checked == 0\">\r\n                      No acepta entregas\r\n                    </strong>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-row\">\r\n                  <div class=\"form-group col d-flex w-100 mb-1\">\r\n                    <div class=\"d-flex mr-1\">\r\n                      <div class=\"mr-1\">\r\n                        <i class=\"fas fa-times-circle text-danger\" *ngIf=\"endereco.diasEntrega.terca.checked == 0\"></i>\r\n                        <i class=\"fas fa-check-circle text-success\" *ngIf=\"endereco.diasEntrega.terca.checked == 1\"></i>\r\n                      </div>\r\n                      <span>Terça-feira:</span>\r\n                    </div>\r\n                    <div *ngIf=\"endereco.diasEntrega.terca.checked == 1\">\r\n                      <div *ngIf=\"endereco.diasEntrega.terca.minimo !== null && endereco.diasEntrega.terca.maximo !== null\">\r\n                        das {{ convertMysqlTime(endereco.diasEntrega.terca.minimo) }} às {{ convertMysqlTime(endereco.diasEntrega.terca.maximo) }}\r\n                      </div>\r\n                      <div *ngIf=\"endereco.diasEntrega.terca.minimo == null || endereco.diasEntrega.terca.maximo == null\">\r\n                        horario no definido\r\n                      </div>\r\n                    </div>\r\n                    <strong *ngIf=\"endereco.diasEntrega.terca.checked == 0\">\r\n                      No acepta entregas\r\n                    </strong>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-row\">\r\n                  <div class=\"form-group col d-flex w-100 mb-1\">\r\n                    <div class=\"d-flex mr-1\">\r\n                      <div class=\"mr-1\">\r\n                        <i class=\"fas fa-times-circle text-danger\" *ngIf=\"endereco.diasEntrega.quarta.checked == 0\"></i>\r\n                        <i class=\"fas fa-check-circle text-success\" *ngIf=\"endereco.diasEntrega.quarta.checked == 1\"></i>\r\n                      </div>\r\n                      <span>Quarta-feira:</span>\r\n                    </div>\r\n                    <div *ngIf=\"endereco.diasEntrega.quarta.checked == 1\">\r\n                      <div *ngIf=\"endereco.diasEntrega.quarta.minimo !== null && endereco.diasEntrega.quarta.maximo !== null\">\r\n                        das {{ convertMysqlTime(endereco.diasEntrega.quarta.minimo) }} às {{ convertMysqlTime(endereco.diasEntrega.quarta.maximo) }}\r\n                      </div>\r\n                      <div *ngIf=\"endereco.diasEntrega.quarta.minimo == null || endereco.diasEntrega.quarta.maximo == null\">\r\n                        horario no definido\r\n                      </div>\r\n                    </div>\r\n                    <strong *ngIf=\"endereco.diasEntrega.quarta.checked == 0\">\r\n                      No acepta entregas\r\n                    </strong>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-row\">\r\n                  <div class=\"form-group col d-flex w-100 mb-1\">\r\n                    <div class=\"d-flex mr-1\">\r\n                      <div class=\"mr-1\">\r\n                        <i class=\"fas fa-times-circle text-danger\" *ngIf=\"endereco.diasEntrega.quinta.checked == 0\"></i>\r\n                        <i class=\"fas fa-check-circle text-success\" *ngIf=\"endereco.diasEntrega.quinta.checked == 1\"></i>\r\n                      </div>\r\n                      <span>Quinta-feira:</span>\r\n                    </div>\r\n                    <div *ngIf=\"endereco.diasEntrega.quinta.checked == 1\">\r\n                      <div *ngIf=\"endereco.diasEntrega.quinta.minimo !== null && endereco.diasEntrega.quinta.maximo !== null\">\r\n                        das {{ convertMysqlTime(endereco.diasEntrega.quinta.minimo) }} às {{ convertMysqlTime(endereco.diasEntrega.quinta.maximo) }}\r\n                      </div>\r\n                      <div *ngIf=\"endereco.diasEntrega.quinta.minimo == null || endereco.diasEntrega.quinta.maximo == null\">\r\n                        horario no definido\r\n                      </div>\r\n                    </div>\r\n                    <strong *ngIf=\"endereco.diasEntrega.quinta.checked == 0\">\r\n                      No acepta entregas\r\n                    </strong>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-row\">\r\n                  <div class=\"form-group col d-flex w-100 mb-1\">\r\n                    <div class=\"d-flex mr-1\">\r\n                      <div class=\"mr-1\">\r\n                        <i class=\"fas fa-times-circle text-danger\" *ngIf=\"endereco.diasEntrega.sexta.checked == 0\"></i>\r\n                        <i class=\"fas fa-check-circle text-success\" *ngIf=\"endereco.diasEntrega.sexta.checked == 1\"></i>\r\n                      </div>\r\n                      <span>Sexta-feira:</span>\r\n                    </div>\r\n                    <div *ngIf=\"endereco.diasEntrega.sexta.checked == 1\">\r\n                      <div *ngIf=\"endereco.diasEntrega.sexta.minimo !== null && endereco.diasEntrega.sexta.maximo !== null\">\r\n                        das {{ convertMysqlTime(endereco.diasEntrega.sexta.minimo) }} às {{ convertMysqlTime(endereco.diasEntrega.sexta.maximo) }}\r\n                      </div>\r\n                      <div *ngIf=\"endereco.diasEntrega.sexta.minimo == null || endereco.diasEntrega.sexta.maximo == null\">\r\n                        horario no definido\r\n                      </div>\r\n                    </div>\r\n                    <strong *ngIf=\"endereco.diasEntrega.sexta.checked == 0\">\r\n                      No acepta entregas\r\n                    </strong>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-row\">\r\n                  <div class=\"form-group col d-flex w-100 mb-1\">\r\n                    <div class=\"d-flex mr-1\">\r\n                      <div class=\"mr-1\">\r\n                        <i class=\"fas fa-times-circle text-danger\" *ngIf=\"endereco.diasEntrega.sabado.checked == 0\"></i>\r\n                        <i class=\"fas fa-check-circle text-success\" *ngIf=\"endereco.diasEntrega.sabado.checked == 1\"></i>\r\n                      </div>\r\n                      <span>Sábado:</span>\r\n                    </div>\r\n                    <div *ngIf=\"endereco.diasEntrega.sabado.checked == 1\">\r\n                      <div *ngIf=\"endereco.diasEntrega.sabado.minimo !== null && endereco.diasEntrega.sabado.maximo !== null\">\r\n                        das {{ convertMysqlTime(endereco.diasEntrega.sabado.minimo) }} às {{ convertMysqlTime(endereco.diasEntrega.sabado.maximo) }}\r\n                      </div>\r\n                      <div *ngIf=\"endereco.diasEntrega.sabado.minimo == null || endereco.diasEntrega.sabado.maximo == null\">\r\n                        horario no definido\r\n                      </div>\r\n                    </div>\r\n                    <strong *ngIf=\"endereco.diasEntrega.sabado.checked == 0\">\r\n                      No acepta entregas\r\n                    </strong>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-row\">\r\n                  <div class=\"form-group col d-flex w-100 mb-1\">\r\n                    <div class=\"d-flex mr-1\">\r\n                      <div class=\"mr-1\">\r\n                        <i class=\"fas fa-times-circle text-danger\" *ngIf=\"endereco.diasEntrega.domingo.checked == 0\"></i>\r\n                        <i class=\"fas fa-check-circle text-success\" *ngIf=\"endereco.diasEntrega.domingo.checked == 1\"></i>\r\n                      </div>\r\n                      <span>Domingo:</span>\r\n                    </div>\r\n                    <div *ngIf=\"endereco.diasEntrega.domingo.checked == 1\">\r\n                      <div *ngIf=\"endereco.diasEntrega.domingo.minimo !== null && endereco.diasEntrega.domingo.maximo !== null\">\r\n                        das {{ convertMysqlTime(endereco.diasEntrega.domingo.minimo) }} às {{ convertMysqlTime(endereco.diasEntrega.domingo.maximo) }}\r\n                      </div>\r\n                      <div *ngIf=\"endereco.diasEntrega.domingo.minimo == null || endereco.diasEntrega.domingo.maximo == null\">\r\n                        horario no definido\r\n                      </div>\r\n                    </div>\r\n                    <strong *ngIf=\"endereco.diasEntrega.domingo.checked == 0\">\r\n                      No acepta entregas\r\n                    </strong>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-md-6\">\r\n                <label>Tipo de material</label>\r\n                <div *ngIf=\"endereco.dsTipoMaterial == null\">SIN INFORMACION</div>\r\n                <div *ngIf=\"endereco.dsTipoMaterial != null\">{{ endereco.dsTipoMaterial | uppercase }}</div>\r\n              </div>\r\n              <div class=\"form-group col-md-6\">\r\n                <label>Tipo de descarga</label>\r\n                <div *ngIf=\"endereco.dsTipoDescarga == null\">SIN INFORMACION</div>\r\n                <div *ngIf=\"endereco.dsTipoDescarga != null\">{{ endereco.dsTipoDescarga | uppercase }}</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-md-6\">\r\n                <label>Modo de descarga</label>\r\n                <div *ngIf=\"endereco.dsModoDescarga == null\">SIN INFORMACION</div>\r\n                <div *ngIf=\"endereco.dsModoDescarga != null\">{{ endereco.dsModoDescarga | uppercase }}</div>\r\n              </div>\r\n              <div class=\"form-group col-md-6\">\r\n                <label>Tipos de vehiculo</label>\r\n                <div *ngIf=\"endereco.tiposVeiculosDesc == null\">SIN INFORMACION</div>\r\n                <div *ngIf=\"endereco.tiposVeiculosDesc != null\">{{ endereco.tiposVeiculosDesc | uppercase }}</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-md-6 mb-0\">\r\n                <label>Datos especiales</label>\r\n                <div *ngIf=\"endereco.dadosEspeciaisDesc == null\">SIN INFORMACION</div>\r\n                <div *ngIf=\"endereco.dadosEspeciaisDesc != null\">{{ endereco.dadosEspeciaisDesc | uppercase }}</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-row\" *ngIf=\"endereco.situacao == 4\">\r\n              <div class=\"form-group col-md-6 mb-0\">\r\n                <label>Motivo de la desaprobación</label>\r\n                <div *ngIf=\"endereco.situacao == 4 && endereco.motivoAprovacaoReprovacao == null\">SIN INFORMACION</div>\r\n                <div *ngIf=\"endereco.situacao == 4 && endereco.motivoAprovacaoReprovacao != null\">{{ endereco.motivoAprovacaoReprovacao | uppercase }}</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </accordion-group>\r\n      </accordion>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "aeBB":
    /*!*******************************************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/cadastro/potencial-compra/detalhes/detalhes.component.scss ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function aeBB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NsaWVudGVzL2NhZGFzdHJvL3BvdGVuY2lhbC1jb21wcmEvZGV0YWxoZXMvZGV0YWxoZXMuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "bTpe":
    /*!***********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/clientes/cadastro/travas/detalhes/detalhes.component.html ***!
      \***********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function bTpe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<div class=\"row\" *ngIf=\"travasLoaded\">\r\n  <div class=\"col\">\r\n    <div class=\"mtc-title\">Travas</div>\r\n    <ul class=\"list-unstyled\" *ngIf=\"travas.length > 0\">\r\n      <li *ngFor=\"let trava of travas\">\r\n        <div class=\"d-flex\">\r\n          <div class=\"d-flex\">\r\n            <h5 class=\"my-auto\">\r\n              <i [ngClass]=\"iconClass(trava.situacao)\"></i>\r\n            </h5>\r\n            <div class=\"ml-3\">\r\n              <b class=\"d-block text-small text-secondary\">{{ trava.data }}</b>\r\n              <strong class=\"d-block text-uppercase\">{{ trava.descricao }}</strong>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div><hr></div>\r\n      </li>\r\n    </ul>\r\n    <div class=\"row py-5 my-5\" *ngIf=\"travas.length == 0\">\r\n      <div class=\"col\">\r\n        <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "efCb":
    /*!*********************************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/cadastro/travas/detalhes/detalhes.component.scss ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function efCb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NsaWVudGVzL2NhZGFzdHJvL3RyYXZhcy9kZXRhbGhlcy9kZXRhbGhlcy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "f7yW":
    /*!*************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/clientes/cadastro/contatos/detalhes/detalhes.component.html ***!
      \*************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function f7yW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<div class=\"row\" *ngIf=\"contatosLoaded\">\r\n  <div class=\"col\">\r\n    <div class=\"mtc-title\">Contatos</div>\r\n    <accordion *ngIf=\"contatos.length > 0\">\r\n      <accordion-group class=\"mb-2\" [heading]=\"tipoContato(contato)\" *ngFor=\"let contato of contatos\">\r\n        <div class=\"d-flex justify-content-between w-100 mb-3\">\r\n          <div class=\"mtc-title mb-0\">Principal</div>\r\n          <div>\r\n            <a\r\n              class=\"text-secondary mr-3\"\r\n              [routerLink]=\"['editar', contato.idSeqTid]\">\r\n              <b>Editar</b>\r\n            </a>\r\n            <a\r\n              class=\"text-danger\"\r\n              (click)=\"onDelete(contato)\"\r\n              href=\"javascript:void(0)\">\r\n              <b>Excluir</b>\r\n            </a>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label>Nome completo</label>\r\n            <div *ngIf=\"contato.nomeCompleto == null\">SIN INFORMACION</div>\r\n            <div *ngIf=\"contato.nomeCompleto != null\">{{ contato.nomeCompleto }}</div>\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label>Sexo</label>\r\n            <div *ngIf=\"contato.descGenero == null\">SIN INFORMACION</div>\r\n            <div *ngIf=\"contato.descGenero != null\">{{ contato.descGenero }}</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-6 mb-0\">\r\n            <label>Função</label>\r\n            <div *ngIf=\"contato.descFuncao == null\">SIN INFORMACION</div>\r\n            <div *ngIf=\"contato.descFuncao != null\">{{ contato.descFuncao }}</div>\r\n          </div>\r\n          <div class=\"form-group col-md-6 mb-0\">\r\n            <label>Setor</label>\r\n            <div *ngIf=\"contato.descSetor == null\">SIN INFORMACION</div>\r\n            <div *ngIf=\"contato.descSetor != null\">{{ contato.descSetor }}</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"col\"><hr></div>\r\n        </div>\r\n        <div class=\"mtc-title\">Medios de contacto</div>\r\n        <div class=\"form-row\" *ngIf=\"contato.contatos != null\">\r\n          <div class=\"form-group col-md-6\" *ngFor=\"let item of contato.contatos\">\r\n            <label>{{ item.tipo }}</label>\r\n            <div *ngIf=\"(item.tipo == 'Telefone') || (item.tipo == 'Celular')\">\r\n              <div *ngIf=\"item.contato == null\">SIN INFORMACION</div>\r\n              <div *ngIf=\"item.contato != null\">{{ item.contato | telefone }}</div>\r\n            </div>\r\n            <div *ngIf=\"(item.tipo == 'Email NFe') || (item.tipo == 'E-mail NFe') || (item.tipo == 'E-Mail') || (item.tipo == 'Email') || (item.tipo == 'MalaDireta')\">\r\n              <div *ngIf=\"item.contato == null\">SIN INFORMACION</div>\r\n              <div *ngIf=\"item.contato != null\">\r\n                <a [href]=\"'mailto:' + item.contato\">{{ item.contato | lowercase }}</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <empty-result message=\"Ninguna informacion encontrada\" *ngIf=\"contato.contatos == null\"></empty-result>\r\n        <!-- <div class=\"form-row\">\r\n          <div class=\"col\"><hr class=\"mt-0\"></div>\r\n        </div>\r\n        <div class=\"mtc-title\">Detalhes</div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label>Aniversário</label>\r\n            <div *ngIf=\"contato.dataAniversario == null\">NÃO INFORMADO</div>\r\n            <div *ngIf=\"contato.dataAniversario != null\">{{ contato.dataAniversario }}</div>\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label>Time de futebol</label>\r\n            <div *ngIf=\"contato.descTimeFutebol == null\">NÃO INFORMADO</div>\r\n            <div *ngIf=\"contato.descTimeFutebol != null\">{{ contato.descTimeFutebol }}</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label>Estado civil</label>\r\n            <div *ngIf=\"contato.descEstadoCivil == null\">NÃO INFORMADO</div>\r\n            <div *ngIf=\"contato.descEstadoCivil != null\">{{ contato.descEstadoCivil }}</div>\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label>LinkedIn</label>\r\n            <div *ngIf=\"contato.linkedin == null\">NÃO INFORMADO</div>\r\n            <div *ngIf=\"contato.linkedin != null\">\r\n              <a [href]=\"contato.linkedin\" target=\"_blank\">{{ contato.linkedin }}</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label>Facebook</label>\r\n            <div *ngIf=\"contato.facebook == null\">NÃO INFORMADO</div>\r\n            <div *ngIf=\"contato.facebook != null\">\r\n              <a [href]=\"contato.facebook\" target=\"_blank\">{{ contato.facebook }}</a>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label>Instagram</label>\r\n            <div *ngIf=\"contato.instagram == null\">NÃO INFORMADO</div>\r\n            <div *ngIf=\"contato.instagram != null\">\r\n              <a [href]=\"contato.instagram\" target=\"_blank\">{{ contato.instagram }}</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label>Hobbies</label>\r\n            <div *ngIf=\"contato.hobbies == null\">NÃO INFORMADO</div>\r\n            <div *ngIf=\"contato.hobbies != null\">{{ contato.hobbies }}</div>\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label>Qtde. filhos</label>\r\n            <div *ngIf=\"contato.qtdeFilhos == ''\">NÃO INFORMADO</div>\r\n            <div *ngIf=\"contato.qtdeFilhos != ''\">{{ contato.qtdeFilhos }}</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col mb-0\">\r\n            <label>Observações</label>\r\n            <div *ngIf=\"contato.observacoes == null\">NÃO INFORMADO</div>\r\n            <div *ngIf=\"contato.observacoes != null\">{{ contato.observacoes }}</div>\r\n          </div>\r\n        </div> -->\r\n      </accordion-group>\r\n    </accordion>\r\n    <div class=\"row py-5 my-5\" *ngIf=\"contatos.length == 0\">\r\n      <div class=\"col\">\r\n        <empty-result message=\"Ninguna informacion encontrada\"></empty-result>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "fjd7":
    /*!******************************************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/cadastro/dados-faturamento/detalhes/detalhes.component.ts ***!
      \******************************************************************************************************/

    /*! exports provided: ComercialClientesCadastroDadosFaturamentoDetalhesComponent */

    /***/
    function fjd7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialClientesCadastroDadosFaturamentoDetalhesComponent", function () {
        return ComercialClientesCadastroDadosFaturamentoDetalhesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_detalhes_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./detalhes.component.html */
      "0FK8");
      /* harmony import */


      var _detalhes_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./detalhes.component.scss */
      "tMVO");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var js_brasil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! js-brasil */
      "zFJr");
      /* harmony import */


      var js_brasil__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(js_brasil__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/modules/comercial/services/clientes.service */
      "8ouN");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+"); // ng-brazil
      // Services


      var ComercialClientesCadastroDadosFaturamentoDetalhesComponent = /*#__PURE__*/function () {
        function ComercialClientesCadastroDadosFaturamentoDetalhesComponent(activatedRoute, clientesService, pnotifyService, router) {
          _classCallCheck(this, ComercialClientesCadastroDadosFaturamentoDetalhesComponent);

          this.activatedRoute = activatedRoute;
          this.clientesService = clientesService;
          this.pnotifyService = pnotifyService;
          this.router = router;
          this.MASKS = js_brasil__WEBPACK_IMPORTED_MODULE_6__["utilsBr"].MASKS;
          this.loaderFullScreen = true;
          this.dadosFaturamento = {};
          this.dadosFaturamentoLoaded = false;
          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialClientesCadastroDadosFaturamentoDetalhesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this41 = this;

            this.activatedRoute.parent.parent.params.subscribe(function (params) {
              _this41.getDadosFaturamento(params['id']);
            });
          }
        }, {
          key: "getDadosFaturamento",
          value: function getDadosFaturamento(id) {
            var _this42 = this;

            this.clientesService.getDadosFaturamento(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
              _this42.loaderFullScreen = false;
              _this42.dadosFaturamentoLoaded = true;
            })).subscribe({
              next: function next(response) {
                if (response['responseCode'] === 200) {
                  _this42.dadosFaturamento = response['result']; //this.dadosFaturamento.notaCliente = 6;
                } else {
                  _this42.handleDadosFaturamentoError(id);
                }
              },
              error: function error(_error17) {
                _this42.handleDadosFaturamentoError(id);
              }
            });
          }
        }, {
          key: "handleDadosFaturamentoError",
          value: function handleDadosFaturamentoError(id) {
            this.pnotifyService.error();
            this.router.navigate(['/comercial/clientes/detalhes', id]);
          }
        }]);

        return ComercialClientesCadastroDadosFaturamentoDetalhesComponent;
      }();

      ComercialClientesCadastroDadosFaturamentoDetalhesComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_7__["ComercialClientesService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      ComercialClientesCadastroDadosFaturamentoDetalhesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-clientes-dados-faturamento-detalhes',
        template: _raw_loader_detalhes_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detalhes_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_7__["ComercialClientesService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], ComercialClientesCadastroDadosFaturamentoDetalhesComponent);
      /***/
    },

    /***/
    "gtjB":
    /*!***************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/clientes/cadastro/anexos/formulario/formulario.component.html ***!
      \***************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function gtjB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<div class=\"row\" *ngIf=\"!loaderFullScreen\">\r\n  <div class=\"col\">\r\n    <div class=\"mtc-title\">carga de anexos</div>\r\n    <form [formGroup]=\"form\" autocomplete=\"off\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"tipoAnexo\">Tipo de anexo</label>\r\n          <select\r\n            class=\"form-control\"\r\n            id=\"tipoAnexo\"\r\n            formControlName=\"tipoAnexo\"            \r\n            [ngClass]=\"onFieldError('tipoAnexo') + ' ' + onFieldRequired('tipoAnexo')\"\r\n            (change)=\"onChange()\" \r\n            >            \r\n            <option value=\"\">SELECCIONE UNA OPCION</option>\r\n            <option *ngFor=\"let item of tiposAnexo\" [value]=\"item.id\">{{ item.descricao }}</option>\r\n          </select>\r\n          <invalid-form-control [show]=\"onFieldInvalid('tipoAnexo')\" message=\"El tipo de archivo adjunto es obligatorio.3\"></invalid-form-control>\r\n        </div>\r\n        <div class=\"col-lg-12\" formArrayName=\"anexos\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12 d-flex align-items-start\">\r\n              <div class=\"mtc-title mb-0\">Anexos</div>\r\n            </div>\r\n            <div class=\"col\">\r\n              <label\r\n                for=\"novoAnexo\"\r\n                class=\"d-flex justify-content-start align-items-center\"\r\n                style=\"cursor: pointer\"\r\n                [hidden]=\"visualizar\"\r\n              >\r\n                <p class=\"btn btn-sm btn-outline-primary m-0\">\r\n                  <i class=\"fas fa-plus\"></i>\r\n                  <span>Anexo</span>\r\n                </p>\r\n              </label>\r\n              <input\r\n                id=\"novoAnexo\"\r\n                type=\"file\"\r\n                (change)=\"appendFile($event.target.files)\"\r\n                class=\"d-none\"\r\n              />\r\n            </div>\r\n          </div>\r\n          <div class=\"row\" *ngIf=\"showAnexos && form.value.anexos.length > 0\">\r\n            <div class=\"col\">\r\n              <custom-table [config]=\"tableConfigAnexos\">\r\n                <ng-template #tbody let-tbody>\r\n                  <tr\r\n                    *ngFor=\"let anexo of anexos.controls; let i = index\"\r\n                    [formGroupName]=\"i\"\r\n                  >\r\n                    <td style=\"width: 90%\">\r\n                      {{ form.value.anexos[i].codAnexo }} -\r\n                      {{ form.value.anexos[i].nomeAnexo | uppercase }}\r\n                    </td>\r\n                    <td class=\"text-center\" style=\"width: 5%\">\r\n                      <a\r\n                        (click)=\"navegarAnexo(anexo)\"\r\n                        *ngIf=\"form.value.anexos[i].codAnexo != null\"\r\n                        target=\"_blank\"\r\n                        class=\"btn-icon-sm mx-2 text-black\"\r\n                        tooltip=\"visualizar\"\r\n                      >\r\n                        <i class=\"far fa-eye\"></i>\r\n                      </a>\r\n                    </td>\r\n                    <td class=\"text-center\" style=\"width: 5%\">\r\n                      <btn-icon\r\n                        icon=\"fas fa-trash\"\r\n                        size=\"small\"\r\n                        tooltip=\"Excluir\"\r\n                        (click)=\"\r\n                          onDeleteAnexo(form.value.anexos[i].codAnexo, i)\r\n                        \"\r\n                        [hidden]=\"visualizar\"\r\n                      >\r\n                      </btn-icon>\r\n                    </td>\r\n                  </tr>\r\n                </ng-template>\r\n              </custom-table>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\" *ngIf=\"showAnexos && form.value.anexos.length === 0\">\r\n            <div class=\"col\">\r\n              <message\r\n                icon=\"fas fa-exchange-alt\"\r\n                text=\"Ningun documento encontrado\"\r\n              >\r\n              </message>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "h1bq":
    /*!***************************************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/cadastro/contatos/formulario/formulario.component.scss ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function h1bq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NsaWVudGVzL2NhZGFzdHJvL2NvbnRhdG9zL2Zvcm11bGFyaW8vZm9ybXVsYXJpby5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "iMMo":
    /*!***********************************************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/cadastro/dados-relacionamento/formulario/formulario.service.ts ***!
      \***********************************************************************************************************/

    /*! exports provided: ComercialClientesCadastroDadosRelacionamentoFormularioService */

    /***/
    function iMMo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialClientesCadastroDadosRelacionamentoFormularioService", function () {
        return ComercialClientesCadastroDadosRelacionamentoFormularioService;
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

      var ComercialClientesCadastroDadosRelacionamentoFormularioService = /*#__PURE__*/function () {
        function ComercialClientesCadastroDadosRelacionamentoFormularioService(http) {
          _classCallCheck(this, ComercialClientesCadastroDadosRelacionamentoFormularioService);

          this.http = http;
          this.API = "http://23.254.204.187/api/comercial/clientes/cadastro/formulario/dados-relacionamento";
        }

        _createClass(ComercialClientesCadastroDadosRelacionamentoFormularioService, [{
          key: "loadDepencies",
          value: function loadDepencies() {
            var tiposAtendimento = this.getTiposAtendimento();
            var periodos = this.getPeriodos();
            var frequenciaContatos = this.getFrequenciaContatos();
            var frequenciaVisitas = this.getFrequenciaVisitas();
            var origensContato = this.getOrigensContato();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])([tiposAtendimento, periodos, frequenciaContatos, frequenciaVisitas, origensContato]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getTiposAtendimento",
          value: function getTiposAtendimento() {
            return this.http.get("".concat(this.API, "/tipos-atendimento")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getPeriodos",
          value: function getPeriodos() {
            return this.http.get("".concat(this.API, "/periodos")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getFrequenciaContatos",
          value: function getFrequenciaContatos() {
            return this.http.get("".concat(this.API, "/frequencia-contatos")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getFrequenciaVisitas",
          value: function getFrequenciaVisitas() {
            return this.http.get("".concat(this.API, "/frequencia-visitas")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getOrigensContato",
          value: function getOrigensContato() {
            return this.http.get("".concat(this.API, "/origens-contato")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }]);

        return ComercialClientesCadastroDadosRelacionamentoFormularioService;
      }();

      ComercialClientesCadastroDadosRelacionamentoFormularioService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      ComercialClientesCadastroDadosRelacionamentoFormularioService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ComercialClientesCadastroDadosRelacionamentoFormularioService);
      /***/
    },

    /***/
    "igIG":
    /*!*******************************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/cadastro/travas/detalhes/detalhes.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: ComercialClientesCadastroTravasDetalhesComponent */

    /***/
    function igIG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialClientesCadastroTravasDetalhesComponent", function () {
        return ComercialClientesCadastroTravasDetalhesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_detalhes_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./detalhes.component.html */
      "bTpe");
      /* harmony import */


      var _detalhes_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./detalhes.component.scss */
      "efCb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/modules/comercial/services/clientes.service */
      "8ouN");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+"); // Services


      var ComercialClientesCadastroTravasDetalhesComponent = /*#__PURE__*/function () {
        function ComercialClientesCadastroTravasDetalhesComponent(activatedRoute, clientesService, pnotifyService, router) {
          _classCallCheck(this, ComercialClientesCadastroTravasDetalhesComponent);

          this.activatedRoute = activatedRoute;
          this.clientesService = clientesService;
          this.pnotifyService = pnotifyService;
          this.router = router;
          this.loaderFullScreen = true;
          this.travas = [];
          this.travasLoaded = false;
          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialClientesCadastroTravasDetalhesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this43 = this;

            this.activatedRoute.parent.parent.params.subscribe(function (params) {
              _this43.clientesService.getTravas(params['id']).subscribe(function (response) {
                if (response['responseCode'] === 200) {
                  _this43.loaderFullScreen = false;
                  _this43.travas = response['result'];
                  _this43.travasLoaded = true;
                } else if (response['responseCode'] === 204) {
                  _this43.loaderFullScreen = false;
                  _this43.travasLoaded = true;
                } else {
                  _this43.pnotifyService.error();

                  _this43.router.navigate(['/comercial/clientes/detalhes', params['id']]);
                }
              });
            });
          }
        }, {
          key: "iconClass",
          value: function iconClass(situacao) {
            var iconClass;

            if (situacao == 'LIBERADO') {
              iconClass = 'fas fa-check-circle text-success';
            } else if (situacao == 'TRAVADO') {
              iconClass = 'fas fa-exclamation-triangle text-danger';
            }

            return iconClass;
          }
        }]);

        return ComercialClientesCadastroTravasDetalhesComponent;
      }();

      ComercialClientesCadastroTravasDetalhesComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_5__["ComercialClientesService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      ComercialClientesCadastroTravasDetalhesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-clientes-cadastro-travas-detalhes',
        template: _raw_loader_detalhes_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detalhes_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_5__["ComercialClientesService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], ComercialClientesCadastroTravasDetalhesComponent);
      /***/
    },

    /***/
    "n1L9":
    /*!**************************************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/cadastro/enderecos/formulario/formulario.component.ts ***!
      \**************************************************************************************************/

    /*! exports provided: ComercialClientesCadastroEnderecosFormularioComponent */

    /***/
    function n1L9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialClientesCadastroEnderecosFormularioComponent", function () {
        return ComercialClientesCadastroEnderecosFormularioComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./formulario.component.html */
      "6eNF");
      /* harmony import */


      var _formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./formulario.component.scss */
      "5Q7p");
      /* harmony import */


      var _services_vendedores_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../../services/vendedores.service */
      "4xRd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var ng_brazil__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ng-brazil */
      "hTrW");
      /* harmony import */


      var js_brasil__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! js-brasil */
      "zFJr");
      /* harmony import */


      var js_brasil__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(js_brasil__WEBPACK_IMPORTED_MODULE_11__);
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/shared/modules/confirm-modal/confirm-modal.service */
      "FOez");
      /* harmony import */


      var _formulario_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./formulario.service */
      "4Jok");
      /* harmony import */


      var _cadastro_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../cadastro.service */
      "N70Q");
      /* harmony import */


      var src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! src/app/modules/comercial/services/clientes.service */
      "8ouN");
      /* harmony import */


      var src_app_shared_services_requests_estados_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! src/app/shared/services/requests/estados.service */
      "H0sO");
      /* harmony import */


      var src_app_shared_services_ws_cep_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! src/app/shared/services/ws/cep.service */
      "7aZN"); // ng-brazil
      // ngx-bootstrap
      // Services


      var ComercialClientesCadastroEnderecosFormularioComponent = /*#__PURE__*/function () {
        /* Pagination */
        function ComercialClientesCadastroEnderecosFormularioComponent(activatedRoute, formBuilder, formService, cadastroService, location, modalService, clientesService, estadosService, cepService, pnotifyService, confirmModalService, comercialService) {
          _classCallCheck(this, ComercialClientesCadastroEnderecosFormularioComponent);

          this.activatedRoute = activatedRoute;
          this.formBuilder = formBuilder;
          this.formService = formService;
          this.cadastroService = cadastroService;
          this.location = location;
          this.modalService = modalService;
          this.clientesService = clientesService;
          this.estadosService = estadosService;
          this.cepService = cepService;
          this.pnotifyService = pnotifyService;
          this.confirmModalService = confirmModalService;
          this.comercialService = comercialService;
          this.MASKS = js_brasil__WEBPACK_IMPORTED_MODULE_11__["utilsBr"].MASKS;
          this.loaderNavbar = false;
          this.loaderFullScreen = true;
          this.formChanged = false;
          this.podeEditarEnderecoPrincipal = true;
          this.podeEditarEnderecoCobranca = true;
          this.exibirDadosEntrega = false;
          this.exibirSelecaoCliente = false;
          this.tableConfigAnexos = {
            fixedHeader: false,
            bodyHeight: 230,
            hover: false
          };
          this.estados = [];
          this.regioesAtuacaoComercial = [];
          this.regioesEntrega = [];
          this.tiposMaterial = [];
          this.tiposDescarga = [];
          this.modosDescarga = [];
          this.tiposVeiculos = [];
          this.dadosEspeciais = [];
          this.enderecosOp = [];
          this.enderecosLoading = false;
          this.enderecoLoaded = false;
          this.cidadeRetorno = '';
          this.estadoRetorno = '';
          this.maxLengthRules = {};
          this.maxLengthMessages = {};
          this.showAnexos = false;
          this.formData = [];
          this.cliente = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          this.fecharModal = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          this.clientesParams = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          this.noClientes = true;
          this.clientes = [];
          /* Pagination */

          this.itemsPerPage = 10;
          this.begin = 0;
          this.end = 20;
          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialClientesCadastroEnderecosFormularioComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this44 = this;

            this.cancelSubscription();
            this.submitSubscription();

            if (this.activatedRoute.snapshot.data.data.responseCode === 200) {
              this.activatedRoute.parent.parent.params.subscribe(function (params) {
                _this44.codCliente = params.id;

                _this44.checkUrlParams();

                _this44.getFormFields();
              });
            } else {
              this.pnotifyService.error();
              this.location.back();
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.cadastroService.onNotifyLoaded(true);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptionCancel.unsubscribe();
            this.subscriptionSubmit.unsubscribe();
            this.cadastroService.onNotifyLoaded(false);
          }
        }, {
          key: "checkUrlParams",
          value: function checkUrlParams() {
            var _this45 = this;

            this.activatedRoute.params.subscribe(function (params) {
              if (params.idEndereco) {
                _this45.action = 'editar';
              } else {
                _this45.action = 'novo';
              }
            });
            this.setMaxLengthRules();
            this.setFormBuilder(this.codCliente, this.activatedRoute.snapshot.data.data.result);
          }
        }, {
          key: "getFormFields",
          value: function getFormFields() {
            var _this46 = this;

            this.estados = this.estadosService.getEstados();
            this.activatedRoute.parent.parent.params.subscribe(function (params) {
              _this46.formService.loadDepencies(params.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
                _this46.loaderFullScreen = false;

                _this46.cadastroService.onNotifyLoaded(false);
              })).subscribe({
                next: function next(response) {
                  if (response[0].responseCode === 200) {
                    _this46.regioesAtuacaoComercial = response[0].result;
                  } else {
                    _this46.handleFormFieldsError();
                  }

                  if (response[1].responseCode === 200) {
                    _this46.regioesEntrega = response[1].result;
                  } else {
                    _this46.handleFormFieldsError();
                  }

                  if (response[2].responseCode === 200) {
                    _this46.tiposMaterial = response[2].result;
                  } else {
                    _this46.handleFormFieldsError();
                  }

                  if (response[3].responseCode === 200) {
                    _this46.tiposDescarga = response[3].result;
                  } else {
                    _this46.handleFormFieldsError();
                  }

                  if (response[4].responseCode === 200) {
                    _this46.modosDescarga = response[4].result;
                  } else {
                    _this46.handleFormFieldsError();
                  }

                  if (response[5].success === true) {
                    _this46.setValidatorsPrincipalCobranca(response[5].data.enderecos);
                  } else {
                    _this46.setValidatorsPrincipalCobranca([]);
                  }

                  if (response[6].responseCode === 200) {
                    _this46.tiposVeiculos = response[6].result;
                  } else {
                    _this46.handleFormFieldsError();
                  }

                  if (response[7].responseCode === 200) {
                    _this46.dadosEspeciais = response[7].result;
                  } else {
                    _this46.handleFormFieldsError();
                  }
                },
                error: function error(_error18) {
                  _this46.handleFormFieldsError();
                }
              });
            });
          }
        }, {
          key: "handleFormFieldsError",
          value: function handleFormFieldsError() {
            this.pnotifyService.error();
            this.location.back();
          }
        }, {
          key: "setValidatorsPrincipalCobranca",
          value: function setValidatorsPrincipalCobranca(enderecos) {
            if (enderecos) {
              if (enderecos.length > 0) {
                for (var i = 0; i < enderecos.length; i++) {
                  if (enderecos[i].principal === true || enderecos[i].principal == 1) {
                    this.podeEditarEnderecoPrincipal = false;
                  }

                  if (enderecos[i].cobranca === true || enderecos[i].cobranca == 1) {
                    this.podeEditarEnderecoCobranca = false;
                  }
                }
              }
            }

            this.checkValidatorsPrincipalCobranca();
          }
        }, {
          key: "checkValidatorsPrincipalCobranca",
          value: function checkValidatorsPrincipalCobranca() {
            if (!this.podeEditarEnderecoPrincipal) {
              this.form.controls.principal.disable();
            }

            if (!this.podeEditarEnderecoCobranca) {
              this.form.controls.cobranca.disable();
            }
          }
        }, {
          key: "setMaxLengthRules",
          value: function setMaxLengthRules() {
            this.maxLengthRules = this.activatedRoute.snapshot.data.rules.data;
            this.maxLengthMessages = {
              bairro: "Bairro deve conter at\xE9 ".concat(this.maxLengthRules.bairro, " caracteres."),
              cidade: "Cidade deve conter at\xE9 ".concat(this.maxLengthRules.cidade, " caracteres."),
              complemento: "Complemento deve conter at\xE9 ".concat(this.maxLengthRules.complemento, " caracteres."),
              endereco: "Endere\xE7o deve conter at\xE9 ".concat(this.maxLengthRules.endereco, " caracteres."),
              referencia: "Refer\xEAncia deve conter at\xE9 ".concat(this.maxLengthRules.referencia, " caracteres."),
              titulo: "T\xEDtulo do local de entrega deve conter at\xE9 ".concat(this.maxLengthRules.titulo, " caracteres.")
            };
          }
        }, {
          key: "setFormBuilder",
          value: function setFormBuilder(codCliente, data) {
            if (data.entrega === true || data.entrega == 1) {
              this.exibirDadosEntrega = true;
            }

            this.form = this.formBuilder.group({
              codCliente: [codCliente],
              situacao: [data.situacao],
              id: [data.id],
              codEndereco: [data.codEndereco != 'null' ? data.codEndereco : null],
              cep: [{
                value: data.cep,
                disabled: this.action == 'novo' || data.situacao == 4 ? false : true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, ng_brazil__WEBPACK_IMPORTED_MODULE_10__["NgBrazilValidators"].cep]],
              endereco: [{
                value: data.endereco,
                disabled: this.action == 'novo' || data.situacao == 4 ? false : true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(this.maxLengthRules.endereco)]],
              status: [{
                value: this.action == 'editar' && (data.situacao == 1 || data.situacao == 2) ? data.situacao : this.action == 'novo' ? 3 : 1,
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
              complemento: [{
                value: data.complemento,
                disabled: this.action == 'novo' || data.situacao == 4 ? false : true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(this.maxLengthRules.complemento)]],
              referencia: [{
                value: data.referencia,
                disabled: this.action == 'novo' || data.situacao == 4 ? false : true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(this.maxLengthRules.referencia)]],
              bairro: [{
                value: data.bairro,
                disabled: data.situacao == 4 ? false : true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(this.maxLengthRules.bairro)]],
              cidade: [{
                value: data.cidade,
                disabled: data.situacao == 4 ? false : true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(this.maxLengthRules.cidade)]],
              uf: [{
                value: data.uf,
                disabled: data.situacao == 4 ? false : true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
              regiaoAtuacaoComercial: [{
                value: data.idAtuacaoComercial,
                disabled: this.action == 'novo' || data.situacao == 4 ? false : true
              }],
              principal: [data.principal],
              cobranca: [data.cobranca],
              entrega: [data.entrega],
              titulo: [data.titulo, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(this.maxLengthRules.titulo)]],
              regiaoEntrega: [{
                value: data.idRegiaoEntrega,
                disabled: true
              }],
              diasEntrega: this.formBuilder.group({
                segunda: this.formBuilder.group({
                  id: [data.diasEntrega.segunda.id],
                  checked: [data.diasEntrega.segunda.checked == 0 ? false : true],
                  minimo: [this.fixTime(data.diasEntrega.segunda.minimo)],
                  maximo: [this.fixTime(data.diasEntrega.segunda.maximo)]
                }),
                terca: this.formBuilder.group({
                  id: [data.diasEntrega.terca.id],
                  checked: [data.diasEntrega.terca.checked == 0 ? false : true],
                  minimo: [this.fixTime(data.diasEntrega.terca.minimo)],
                  maximo: [this.fixTime(data.diasEntrega.terca.maximo)]
                }),
                quarta: this.formBuilder.group({
                  id: [data.diasEntrega.quarta.id],
                  checked: [data.diasEntrega.quarta.checked == 0 ? false : true],
                  minimo: [this.fixTime(data.diasEntrega.quarta.minimo)],
                  maximo: [this.fixTime(data.diasEntrega.quarta.maximo)]
                }),
                quinta: this.formBuilder.group({
                  id: [data.diasEntrega.quinta.id],
                  checked: [data.diasEntrega.quinta.checked == 0 ? false : true],
                  minimo: [this.fixTime(data.diasEntrega.quinta.minimo)],
                  maximo: [this.fixTime(data.diasEntrega.quinta.maximo)]
                }),
                sexta: this.formBuilder.group({
                  id: [data.diasEntrega.sexta.id],
                  checked: [data.diasEntrega.sexta.checked == 0 ? false : true],
                  minimo: [this.fixTime(data.diasEntrega.sexta.minimo)],
                  maximo: [this.fixTime(data.diasEntrega.sexta.maximo)]
                }),
                sabado: this.formBuilder.group({
                  id: [data.diasEntrega.sabado.id],
                  checked: [data.diasEntrega.sabado.checked == 0 ? false : true],
                  minimo: [this.fixTime(data.diasEntrega.sabado.minimo)],
                  maximo: [this.fixTime(data.diasEntrega.sabado.maximo)]
                }),
                domingo: this.formBuilder.group({
                  id: [data.diasEntrega.domingo.id],
                  checked: [data.diasEntrega.domingo.checked == 0 ? false : true],
                  minimo: [this.fixTime(data.diasEntrega.domingo.minimo)],
                  maximo: [this.fixTime(data.diasEntrega.domingo.maximo)]
                })
              }),
              tipoMaterial: [data.idTipoMaterial],
              tipoDescarga: [data.idTipoDescarga, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
              modoDescarga: [data.idModoDescarga, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
              tiposVeiculos: [data.tiposVeiculos, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
              dadosEspeciais: [data.dadosEspeciais],
              observacao: [data.observacaoLib],
              anexos: this.formBuilder.array([]),
              TP_ACAO: [data.TP_ACAO],
              COD_CLIE_TERC: [data.COD_CLIE_TERC],
              COD_CLIE_TERC_RAZ: [data.COD_CLIE_TERC_RAZ]
            });

            if (data.COD_CLIE_TERC > 0) {
              this.getCliente(data.COD_CLIE_TERC);
            }

            this.formClientes = this.formBuilder.group({
              buscarPor: ['NM_CLIE'],
              pesquisa: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
              NM_CLIE: [null],
              registros: [this.itemsPerPage]
            });
            this.setValidatorsEntrega(data.entrega);
            this.setFormBuilderDiasEntrega(data.diasEntrega);
            this.checarAcesso(data.alteraStatus, data.situacao);
            this.getAnexos(data.entrega, this.form.value.codEndereco);
          }
        }, {
          key: "checarAcesso",
          value: function checarAcesso(acesso, situacao) {
            if (acesso === true || acesso == 1) {
              if (situacao == 1 || situacao == 2) {
                this.form.controls.status.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]);
                this.form.controls.status.enable();
              } else {
                this.form.controls.status.clearValidators();
                this.form.controls.status.disable();
              }
            } else {
              this.form.controls.status.clearValidators();
              this.form.controls.status.disable();
            }

            this.form.controls.status.updateValueAndValidity();
          }
        }, {
          key: "cancelSubscription",
          value: function cancelSubscription() {
            var _this47 = this;

            this.subscriptionCancel = this.cadastroService.notifyCancelObservable$.subscribe(function (response) {
              if (response) {
                _this47.onCancel();
              }
            });
          }
        }, {
          key: "submitSubscription",
          value: function submitSubscription() {
            var _this48 = this;

            this.subscriptionSubmit = this.cadastroService.notifySubmitObservable$.subscribe(function (response) {
              if (response) {
                _this48.onSubmit();
              }
            });
          }
        }, {
          key: "onFieldError",
          value: function onFieldError(field) {
            if (this.onFieldInvalid(field) != '') {
              return 'is-invalid';
            }

            return '';
          }
        }, {
          key: "onFieldInvalid",
          value: function onFieldInvalid(field) {
            field = this.form.get(field);

            if (field.errors != null) {
              if (field.errors.hasOwnProperty('required') && field.touched) {
                return 'required';
              }

              if (field.errors.hasOwnProperty('maxlength') && field.touched) {
                return 'maxlength';
              }
            }

            return '';
          }
        }, {
          key: "onFieldRequired",
          value: function onFieldRequired(field) {
            var required = false;
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();

            if (this.form.controls[field].validator) {
              var validationResult = this.form.controls[field].validator(formControl);
              required = validationResult !== null && validationResult.required === true;
            }

            if (required) {
              return 'is-required';
            }
          }
        }, {
          key: "setValidatorsEntrega",
          value: function setValidatorsEntrega(entrega) {
            if (entrega === true || entrega == 1) {
              this.form.controls.tipoDescarga.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]);
              this.form.controls.modoDescarga.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]);
              this.form.controls.tiposVeiculos.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]);
            } else {
              this.form.controls.tipoDescarga.clearValidators();
              this.form.controls.modoDescarga.clearValidators();
              this.form.controls.tiposVeiculos.clearValidators();
            }

            this.form.controls.tipoDescarga.updateValueAndValidity();
            this.form.controls.modoDescarga.updateValueAndValidity();
            this.form.controls.tiposVeiculos.updateValueAndValidity();
          }
        }, {
          key: "setFormBuilderDiasEntrega",
          value: function setFormBuilderDiasEntrega(diasEntrega) {
            for (var key in diasEntrega) {
              this.onDiaEntregas(key);
            }
          }
        }, {
          key: "getAnexos",
          value: function getAnexos(entrega, codEndereco) {
            var _this49 = this;

            if ((entrega === true || entrega == 1) && codEndereco != null) {
              this.loaderNavbar = true;
              this.showAnexos = false;
              this.formService.getAnexos(codEndereco).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
                _this49.loaderNavbar = false;
              })).subscribe({
                next: function next(response) {
                  if (response.hasOwnProperty('success') && response.success === true) {
                    _this49.setAnexos(response.data);

                    _this49.showAnexos = true;
                  }
                },
                error: function error(_error19) {
                  if (_error19['error'].hasOwnProperty('mensagem')) {
                    _this49.pnotifyService.error(_error19.error.mensagem);
                  } else {
                    _this49.pnotifyService.error();
                  }
                }
              });
            }
          }
        }, {
          key: "setAnexos",
          value: function setAnexos(anexos) {
            if (anexos.length > 0) {
              for (var i = 0; i < anexos.length; i++) {
                this.onAddAnexos(anexos[i], true);
              }
            }
          }
        }, {
          key: "anexos",
          get: function get() {
            return this.form.get('anexos');
          }
        }, {
          key: "onAddAnexos",
          value: function onAddAnexos(anexo, manipulateForm) {
            if (this.checkAnexoExists(anexo) === false) {
              this.anexos.push(this.formBuilder.group({
                codAnexo: [anexo.codAnexo],
                nomeAnexo: [anexo.nomeAnexo],
                linkAnexo: [anexo.linkAnexo]
              }));

              if (manipulateForm) {
                this.form.markAsTouched();
                this.form.markAsDirty();
              }
            }
          }
        }, {
          key: "appendFile",
          value: function appendFile(files) {
            if (files.length === 0) return;
            var fd = new FormData();
            fd.append('file', files[0]);
            this.formData.push(fd);
            this.anexos.push(this.formBuilder.group({
              nomeAnexo: [files[0]['name']]
            }));

            if (this.showAnexos === false) {
              this.showAnexos = true;
            }

            this.form.markAsTouched();
            this.form.markAsDirty();
          }
        }, {
          key: "checkAnexoExists",
          value: function checkAnexoExists(anexo) {
            return this.form.value.anexos.some(function (el) {
              return el.codAnexo === anexo.codAnexo;
            });
          }
        }, {
          key: "onDeleteAnexo",
          value: function onDeleteAnexo(codAnexo, index) {
            var _this50 = this;

            this.confirmDelete().subscribe(function (r) {
              if (codAnexo) {
                _this50.loaderNavbar = true;

                _this50.formService.deleteAnexo(codAnexo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
                  _this50.loaderNavbar = false;
                })).subscribe({
                  next: function next(response) {
                    if (response.hasOwnProperty('success') && response.success === true) {
                      r ? _this50.deleteDocumento(index) : null;
                    } else if (response.hasOwnProperty('success') && response.success === false && response.hasOwnProperty('mensagem')) {
                      _this50.pnotifyService.error(response.mensagem);
                    } else {
                      _this50.pnotifyService.error();
                    }
                  },
                  error: function error(_error20) {
                    if (_error20['error'].hasOwnProperty('mensagem')) {
                      _this50.pnotifyService.error(_error20.error.mensagem);
                    } else {
                      _this50.pnotifyService.error();
                    }
                  }
                });
              } else {
                r ? _this50.deleteDocumento(index) : null;

                _this50.formData.splice(index, 1);
              }
            });
          }
        }, {
          key: "confirmDelete",
          value: function confirmDelete() {
            return this.confirmModalService.showConfirm('delete', 'Confirmar exclusão', 'Deseja realmente prosseguir com a exclusão do registro?', 'Cancelar', 'Confirmar');
          }
        }, {
          key: "deleteDocumento",
          value: function deleteDocumento(index) {
            this.anexos.removeAt(index);
            this.form.markAsTouched();
            this.form.markAsDirty();
          }
        }, {
          key: "onEnderecoEntrega",
          value: function onEnderecoEntrega() {
            this.exibirDadosEntrega = this.form.value.entrega;
            this.setValidatorsEntrega(this.form.value.entrega);
          }
        }, {
          key: "onInput",
          value: function onInput() {
            this.formChanged = true;
          }
        }, {
          key: "onInputCep",
          value: function onInputCep(detalhes) {
            if (this.form.get('cep').status == 'VALID') {
              this.consultaCEP(detalhes, this.form.value.cep);
            }
          }
        }, {
          key: "consultaCEP",
          value: function consultaCEP(detalhes, cep) {
            var _this51 = this;

            if (this.enderecosLoading == false) {
              this.cidadeRetorno = '';
              this.estadoRetorno = '';
              this.cepService.getData(cep).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
                _this51.enderecosLoading = false;
              })).subscribe(function (response) {
                _this51.enderecosLoading = true;

                if (response.hasOwnProperty('mensagem') && response.hasOwnProperty('success') && response.success === true) {
                  if (response.data.length > 1) {
                    _this51.formEnderecos = _this51.formBuilder.group({
                      enderecosRetorno: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]]
                    });
                    _this51.enderecosOp = response.data;

                    if (_this51.enderecosLoading = true) {
                      _this51.openModal(detalhes);
                    }
                  } else {
                    _this51.enderecoLoaded = true;

                    _this51.setFormValues(response.data);

                    _this51.cidadeRetorno = response.data.localidade;
                    _this51.estadoRetorno = response.data.uf;
                  }
                } else if (response.hasOwnProperty('mensagem') && response.hasOwnProperty('success') && response.success === false) {
                  _this51.pnotifyService.notice(response.mensagem);
                } else {
                  _this51.pnotifyService.error();
                }
              });
            }
          }
        }, {
          key: "onInputCidade",
          value: function onInputCidade() {
            var _this52 = this;

            if (this.form.get('cidade').status == 'VALID') {
              var cidade = {
                cidade: this.form.get('cidade').value
              };
              this.formService.getIbgeCidades(cidade).subscribe(function (response) {
                if (response.responseCode === 200) {
                  _this52.setRegiaoEntrega(response.result, _this52.form.get('cidade').value, _this52.form.get('bairro').value);
                } else {
                  _this52.pnotifyService.notice('Região de entrega não localizado, favor entrar em contato com o suporte');
                }
              });
            }
          }
        }, {
          key: "setFormValues",
          value: function setFormValues(enderecoSelecionado) {
            if (this.enderecoLoaded === true) {
              /* if (
                enderecoSelecionado.logradouro == '' &&
                enderecoSelecionado.bairro == ''
              ) {
                this.form.controls.bairro.enable();
                this.form.controls.bairro.updateValueAndValidity();
              } else {
                this.form.controls.bairro.disable();
                this.form.controls.bairro.updateValueAndValidity();
              } */
              this.form.controls.bairro.enable();
              this.form.controls.bairro.updateValueAndValidity();
              this.form.controls.endereco.setValue(enderecoSelecionado.logradouro);
              this.form.controls.bairro.setValue(enderecoSelecionado.bairro);
              this.form.controls.cidade.setValue(enderecoSelecionado.localidade);
              this.form.controls.uf.setValue(enderecoSelecionado.uf);
              this.setRegiaoEntrega(enderecoSelecionado.ibge, enderecoSelecionado.localidade, enderecoSelecionado.bairro);
              /* this.setLatLong(enderecoSelecionado); */
            }
          }
        }, {
          key: "setRegiaoEntrega",
          value: function setRegiaoEntrega(ibge, cidade, bairro) {
            var _this53 = this;

            var getRegiao = cidade == "São Paulo" ? this.formService.getRegiaoEntregaPorBairro(bairro) : this.formService.getRegiaoEntrega(ibge);
            getRegiao.subscribe(function (response) {
              if (response.responseCode === 200) {
                _this53.form.controls.regiaoEntrega.setValue(response.result.idRegiaoEntrega);

                _this53.form.controls.regiaoEntrega.updateValueAndValidity();
              } else {
                _this53.form.controls.regiaoEntrega.enable();

                _this53.form.controls.regiaoEntrega.updateValueAndValidity();
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
        }, {
          key: "checkValidatorsTipoEndereco",
          value: function checkValidatorsTipoEndereco() {
            var validation = true;

            if (this.form.getRawValue().principal === false && this.form.getRawValue().cobranca === false && this.form.getRawValue().entrega === false) {
              validation = false;
            } else if (this.form.getRawValue().principal === true && this.form.getRawValue().cobranca === true && this.form.getRawValue().entrega === false && this.action != 'novo') {
              validation = false;
            } else if (this.form.getRawValue().principal === true && this.form.getRawValue().cobranca === false && this.form.getRawValue().entrega === true && this.action != 'novo') {
              validation = false;
            } else if (this.form.getRawValue().principal === false && this.form.getRawValue().cobranca === true && this.form.getRawValue().entrega === true && this.action != 'novo') {
              validation = false;
            }

            return validation;
          }
        }, {
          key: "checkValidatorsDiasEntregas",
          value: function checkValidatorsDiasEntregas() {
            var validation = false;

            if (this.form.value.entrega === true || this.form.value.entrega == 1) {
              for (var key in this.form.value.diasEntrega) {
                if (this.form.value.diasEntrega[key].checked === true) {
                  validation = true;
                }
              }
            } else {
              validation = true;
            }

            return validation;
          }
        }, {
          key: "checkValidatorsTiposVeiculo",
          value: function checkValidatorsTiposVeiculo() {
            var validation = false;

            if (this.form.value.entrega === true || this.form.value.entrega == 1) {
              if (this.form.value.tiposVeiculos.length > 0) {
                validation = true;
              }
            } else {
              validation = true;
            }

            return validation;
          }
        }, {
          key: "checkValidatorsEndereco",
          value: function checkValidatorsEndereco() {
            var validation = false;
            var verificaNumero = this.form.getRawValue().endereco.split(',');

            if (verificaNumero.length > 1) {
              validation = true;
            }

            return validation;
          }
        }, {
          key: "checkValidatorsCliente",
          value: function checkValidatorsCliente() {
            var validation = false;
            var cliente = this.form.controls.COD_CLIE_TERC.value;

            if (cliente > 0 || !this.exibirSelecaoCliente) {
              validation = true;
            }

            return validation;
          }
        }, {
          key: "fixTime",
          value: function fixTime(horario) {
            var d = new Date();

            if (horario != null) {
              var horarioSplit = horario.split(':');
              var h = parseInt(horarioSplit[0]);
              var m = parseInt(horarioSplit[1]);
              d.setHours(h);
              d.setMinutes(m);
            }

            return d;
          }
        }, {
          key: "onDiaEntregas",
          value: function onDiaEntregas(field) {
            var diasEntrega = this.form.controls.diasEntrega;
            var diaControls = diasEntrega.controls[field];

            if (diaControls.value.checked) {
              diaControls.controls.minimo.enable();
              diaControls.controls.minimo.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]);
              diaControls.controls.minimo.updateValueAndValidity();
              diaControls.controls.maximo.enable();
              diaControls.controls.maximo.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]);
              diaControls.controls.maximo.updateValueAndValidity();
            } else {
              diaControls.controls.minimo.disable();
              diaControls.controls.minimo.clearValidators();
              diaControls.controls.minimo.updateValueAndValidity();
              diaControls.controls.maximo.disable();
              diaControls.controls.maximo.clearValidators();
              diaControls.controls.maximo.updateValueAndValidity();
            }
          }
        }, {
          key: "onReplicarHorario",
          value: function onReplicarHorario(field) {
            var _this54 = this;

            if (this.form.value.diasEntrega[field].checked) {
              var diasEntrega = this.form.controls.diasEntrega;
              var diaControls = diasEntrega.controls[field];

              if (diaControls.status == 'VALID') {
                this.confirmModalService.showConfirm(null, null, 'Deseja realmente replicar este horário para os demais dias selecionados?', 'Cancelar', 'Confirmar').subscribe(function (response) {
                  return response ? _this54.replicaHorario(field) : rxjs__WEBPACK_IMPORTED_MODULE_9__["EMPTY"];
                });
              } else {
                this.pnotifyService.notice('Informe o horário mínimo/máximo.');
              }
            } else {
              this.pnotifyService.notice('Habilite o dia de entrega para replicar.');
            }
          }
        }, {
          key: "replicaHorario",
          value: function replicaHorario(field) {
            var diasEntrega = this.form.controls.diasEntrega;
            var minimo = this.form.value.diasEntrega[field].minimo;
            var maximo = this.form.value.diasEntrega[field].maximo;

            for (var key in this.form.value.diasEntrega) {
              if (key != field) {
                if (this.form.value.diasEntrega[key].checked) {
                  var diaControls = diasEntrega.controls[key];
                  diaControls.controls.minimo.setValue(minimo);
                  diaControls.controls.maximo.setValue(maximo);
                }
              }
            }
          }
        }, {
          key: "onCancel",
          value: function onCancel() {
            this.location.back();
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this55 = this;

            if (!this.checkValidatorsTipoEndereco()) {
              this.pnotifyService.notice('Selecione um tipo de endereço.');
              return false;
            }

            if (!this.checkValidatorsDiasEntregas()) {
              this.pnotifyService.notice('Selecione um dia para entrega.');
              return false;
            }

            if (!this.checkValidatorsTiposVeiculo()) {
              this.pnotifyService.notice('Selecione um tipo de veículo.');
              return false;
            }

            if (!this.checkValidatorsEndereco()) {
              this.pnotifyService.notice('Preencha o número do endereço. ex: "logradouro, número"');
              return false;
            }

            if (!this.checkValidatorsCliente()) {
              this.pnotifyService.notice('Selecione um cliente."');
              return false;
            }

            if (this.cidadeRetorno != '' && this.form.getRawValue().cidade != this.cidadeRetorno) {
              this.pnotifyService.notice('Cidade diferente de resultado de busca automática.');
            }

            if (this.estadoRetorno != '' && this.form.getRawValue().uf != this.estadoRetorno) {
              this.pnotifyService.notice('Estado diferente de resultado de busca automática.');
            }

            if (this.form.getRawValue().principal == true && (this.form.getRawValue().regiaoAtuacaoComercial == null || this.form.getRawValue().regiaoAtuacaoComercial == '') && this.action == 'novo') {
              this.pnotifyService.notice('Selecione um Região de Atuação Comercial.');
              return false;
            }

            if (this.form.pristine) {
              this.pnotifyService.notice('Nenhuma alteração detectada.');
              this.location.back();
            } else {
              if (this.form.valid) {
                this.cadastroService.onNotifyLoaded(true);
                this.clientesService.updateEndereco(this.form.getRawValue()).subscribe({
                  next: function next(response) {
                    if (response.responseCode === 200) {
                      if (_this55.formData.length > 0 && response.codEndereco) {
                        _this55.onPostAnexos(response.codEndereco, _this55.form.value.codCliente);
                      }

                      _this55.onSended();

                      _this55.pnotifyService.success();

                      _this55.cadastroService.onNotifyLoaded(false);

                      _this55.formChanged = false;

                      _this55.location.back();
                    } else {
                      _this55.handleSubmitError();
                    }
                  },
                  error: function error(_error21) {
                    _this55.handleSubmitError();
                  }
                });
              }
            }
          }
        }, {
          key: "onPostAnexos",
          value: function onPostAnexos(codEndereco, codCliente) {
            var _this56 = this;

            if (this.formData.length === 0) {
              this.pnotifyService.notice('Nenhum arquivo !');
              return;
            }

            this.formData.forEach(function (element, index) {
              _this56.formService.postAnexos(element, codEndereco, codCliente).subscribe();
            });
          }
        }, {
          key: "handleSubmitError",
          value: function handleSubmitError() {
            this.pnotifyService.error('Ocorreu um erro ao salvar o cadastro.');
            this.cadastroService.onNotifyLoaded(false);
          }
        }, {
          key: "onSended",
          value: function onSended() {
            this.cadastroService.onNotifySended(true);
          }
        }, {
          key: "openModal",
          value: function openModal(detalhes) {
            this.modalRef = this.modalService.show(detalhes, Object.assign({
              ignoreBackdropClick: true
            }, {
              "class": 'modal-lg'
            }));
          }
        }, {
          key: "onModalClose",
          value: function onModalClose() {
            this.modalRef.hide();
          }
        }, {
          key: "setValueEndereco",
          value: function setValueEndereco() {
            var retornoTratado;
            retornoTratado = this.formEnderecos.value['enderecosRetorno'];
            this.onModalClose();
            this.enderecoLoaded = true;
            this.setFormValues(retornoTratado);
          }
        }, {
          key: "selecaoCliente",
          value: function selecaoCliente(event) {
            if (event == "obra" || event == "filial" || event == "industrialização") {
              this.exibirSelecaoCliente = true;
            } else {
              this.exibirSelecaoCliente = false;
              this.form.controls.COD_CLIE_TERC.setValue(null);
              this.form.controls.COD_CLIE_TERC_RAZ.setValue(null);
              this.form.controls.TP_ACAO.setValue(null);
            }
          }
        }, {
          key: "getClientes",
          value: function getClientes(params) {
            var _this57 = this;

            var _params = params !== null && params !== void 0 ? params : {};

            var _obj = this.formClientes.value;
            this.loadingClientes = true;
            if (_obj['pesquisa']) _params[_obj['buscarPor']] = _obj['pesquisa'];
            this.comercialService.getCarteiraClientes(_params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
              _this57.loadingClientes = false;
            })).subscribe({
              next: function next(response) {
                if (response.success === true) {
                  _this57.noClientes = false;
                  _this57.clientes = response.data;
                } else {
                  _this57.noClientes = true;

                  _this57.pnotifyService.notice('Nenhum cliente encontrado!');
                }
              },
              error: function error(_error22) {
                _this57.pnotifyService.error();
              }
            });
          }
        }, {
          key: "setCliente",
          value: function setCliente(cliente) {
            if (cliente.nomeSituacao == 'Arquivo') {
              this.pnotifyService.notice('Cliente arquivado, favor entrar em contato com o Marketing');
            } else {
              this.form.controls.COD_CLIE_TERC.setValue(cliente.codCliente);
              this.form.controls.COD_CLIE_TERC_RAZ.setValue(cliente.razaoSocial);
              this.onModalClose();
            }
          }
        }, {
          key: "getCliente",
          value: function getCliente(codCliente) {
            var _this58 = this;

            this.loaderFullScreen = true;
            this.formService.getCliente(codCliente).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
              _this58.loaderFullScreen = false;
            })).subscribe({
              next: function next(response) {
                var data = [];
                data[0] = response;

                if (data[0].responseCode === 200) {
                  _this58.form.controls.COD_CLIE_TERC_RAZ.setValue(data[0].result.razaoSocial);

                  _this58.exibirSelecaoCliente = true;
                }
              }
            });
          }
        }]);

        return ComercialClientesCadastroEnderecosFormularioComponent;
      }();

      ComercialClientesCadastroEnderecosFormularioComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }, {
          type: _formulario_service__WEBPACK_IMPORTED_MODULE_15__["ComercialClientesCadastroEnderecosFormularioService"]
        }, {
          type: _cadastro_service__WEBPACK_IMPORTED_MODULE_16__["ComercialClientesCadastroService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__["BsModalService"]
        }, {
          type: src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_17__["ComercialClientesService"]
        }, {
          type: src_app_shared_services_requests_estados_service__WEBPACK_IMPORTED_MODULE_18__["EstadosService"]
        }, {
          type: src_app_shared_services_ws_cep_service__WEBPACK_IMPORTED_MODULE_19__["CepService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_13__["PNotifyService"]
        }, {
          type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_14__["ConfirmModalService"]
        }, {
          type: _services_vendedores_service__WEBPACK_IMPORTED_MODULE_3__["ComercialVendedoresService"]
        }];
      };

      ComercialClientesCadastroEnderecosFormularioComponent.propDecorators = {
        cliente: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        fecharModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        clientesParams: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }]
      };
      ComercialClientesCadastroEnderecosFormularioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'comercial-clientes-cadastro-enderecos-formulario',
        template: _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _formulario_service__WEBPACK_IMPORTED_MODULE_15__["ComercialClientesCadastroEnderecosFormularioService"], _cadastro_service__WEBPACK_IMPORTED_MODULE_16__["ComercialClientesCadastroService"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__["BsModalService"], src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_17__["ComercialClientesService"], src_app_shared_services_requests_estados_service__WEBPACK_IMPORTED_MODULE_18__["EstadosService"], src_app_shared_services_ws_cep_service__WEBPACK_IMPORTED_MODULE_19__["CepService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_13__["PNotifyService"], src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_14__["ConfirmModalService"], _services_vendedores_service__WEBPACK_IMPORTED_MODULE_3__["ComercialVendedoresService"]])], ComercialClientesCadastroEnderecosFormularioComponent);
      /***/
    },

    /***/
    "nF7G":
    /*!*************************************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/cadastro/contatos/formulario/formulario.component.ts ***!
      \*************************************************************************************************/

    /*! exports provided: ComercialClientesCadastroContatosFormularioComponent */

    /***/
    function nF7G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialClientesCadastroContatosFormularioComponent", function () {
        return ComercialClientesCadastroContatosFormularioComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./formulario.component.html */
      "C/7g");
      /* harmony import */


      var _formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./formulario.component.scss */
      "h1bq");
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var ng_brazil__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng-brazil */
      "hTrW");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _formulario_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./formulario.service */
      "UPcH");
      /* harmony import */


      var _cadastro_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../cadastro.service */
      "N70Q");
      /* harmony import */


      var src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/modules/comercial/services/clientes.service */
      "8ouN");
      /* harmony import */


      var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/shared/modules/confirm-modal/confirm-modal.service */
      "FOez"); // ng-brazil
      // Services


      var ComercialClientesCadastroContatosFormularioComponent = /*#__PURE__*/function () {
        function ComercialClientesCadastroContatosFormularioComponent(activatedRoute, formBuilder, formService, cadastroService, location, clientesService, pnotifyService, confirmModalService) {
          _classCallCheck(this, ComercialClientesCadastroContatosFormularioComponent);

          this.activatedRoute = activatedRoute;
          this.formBuilder = formBuilder;
          this.formService = formService;
          this.cadastroService = cadastroService;
          this.location = location;
          this.clientesService = clientesService;
          this.pnotifyService = pnotifyService;
          this.confirmModalService = confirmModalService;
          this.MASKS = ng_brazil__WEBPACK_IMPORTED_MODULE_9__["MASKS"];
          this.loaderFullScreen = true;
          this.formChanged = false;
          this.funcoes = [];
          this.setores = [];
          this.timesFutebol = [];
          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialClientesCadastroContatosFormularioComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this59 = this;

            this.cancelSubscription();
            this.submitSubscription();

            if (this.activatedRoute.snapshot.data.data.success === true) {
              this.getFormFields();
              this.setFormBuilder(this.activatedRoute.snapshot.data.data.data);
              console.log(this.activatedRoute.snapshot.data.data.data);
              this.activatedRoute.parent.parent.params.subscribe(function (params) {
                _this59.codCliente = params.id;
              });
            } else {
              this.pnotifyService.error();
              this.location.back();
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.cadastroService.onNotifyLoaded(true);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptionCancel.unsubscribe();
            this.subscriptionSubmit.unsubscribe();
          }
        }, {
          key: "getFormFields",
          value: function getFormFields() {
            var _this60 = this;

            this.formService.loadDepencies().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this60.loaderFullScreen = false;

              _this60.cadastroService.onNotifyLoaded(false);
            })).subscribe({
              next: function next(response) {
                if (response[0]['responseCode'] === 200) {
                  _this60.funcoes = response[0]['result'];
                } else {
                  _this60.handleFormFieldsError();
                }

                if (response[1]['responseCode'] === 200) {
                  _this60.setores = response[1]['result'];
                } else {
                  _this60.handleFormFieldsError();
                }
                /* if (response[2]['responseCode'] === 200) {
                  this.timesFutebol = response[2]['result'];
                } else {
                  this.handleFormFieldsError();
                } */

              },
              error: function error(_error23) {
                _this60.handleFormFieldsError();
              }
            });
          }
        }, {
          key: "handleFormFieldsError",
          value: function handleFormFieldsError() {
            this.pnotifyService.error();
            this.location.back();
          }
        }, {
          key: "setFormBuilder",
          value: function setFormBuilder(data) {
            this.form = this.formBuilder.group({
              id: [data['id']],
              idSeqTid: [data['idSeqTid']],
              nomeCompleto: [data['nomeCompleto'], [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
              genero: [data['idGenero'], [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
              funcao: [data['idFuncao'], [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
              setor: [data['idSetor'], [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
              celulares: this.formBuilder.array([]),
              telefones: this.formBuilder.array([]),
              emails: this.formBuilder.array([]),

              /* dataAniversario: [data['dataAniversario']],
              timeFutebol: [data['idTimeFutebol']],
              estadoCivil: [data['idEstadoCivil']],
              linkedin: [data['linkedin']],
              facebook: [data['facebook']],
              instagram: [data['instagram']],
              hobbies: [data['hobbies']],
              qtdeFilhos: [data['qtdeFilhos']],
              observacoes: [data['observacoes']],
              filhos: this.formBuilder.array([]), */
              tid: [data['tid']]
            });
            this.setFormMeiosContato(data['contatos']); // this.setFormFilhos(data['filhos']);
          }
        }, {
          key: "cancelSubscription",
          value: function cancelSubscription() {
            var _this61 = this;

            this.subscriptionCancel = this.cadastroService.notifyCancelObservable$.subscribe(function (response) {
              if (response) {
                _this61.onCancel();
              }
            });
          }
        }, {
          key: "submitSubscription",
          value: function submitSubscription() {
            var _this62 = this;

            this.subscriptionSubmit = this.cadastroService.notifySubmitObservable$.subscribe(function (response) {
              if (response) {
                _this62.onSubmit();
              }
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
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();

            if (this.form.controls[field].validator) {
              var validationResult = this.form.controls[field].validator(formControl);
              required = validationResult !== null && validationResult.required === true;
            }

            if (required) {
              return 'is-required';
            }
          }
        }, {
          key: "onInput",
          value: function onInput() {
            this.formChanged = true;
          }
        }, {
          key: "setFormMeiosContato",
          value: function setFormMeiosContato(meiosContato) {
            if (meiosContato.length > 0 && meiosContato != null) {
              for (var i = 0; i < meiosContato.length; i++) {
                this.pushMeioContato(meiosContato[i]);
              }
            }
          }
        }, {
          key: "setFormFilhos",
          value: function setFormFilhos(filhos) {
            if (filhos.length > 0 && filhos != null) {
              for (var i = 0; i < filhos.length; i++) {
                this.pushFilho(filhos[i]);
              }
            }
          }
        }, {
          key: "celulares",
          get: function get() {
            return this.form.get('celulares');
          }
        }, {
          key: "telefones",
          get: function get() {
            return this.form.get('telefones');
          }
        }, {
          key: "emails",
          get: function get() {
            return this.form.get('emails');
          }
        }, {
          key: "filhos",
          get: function get() {
            return this.form.get('filhos');
          }
        }, {
          key: "pushMeioContato",
          value: function pushMeioContato(contato) {
            if (contato['tipo'] == 'Celular') {
              this.pushCelular(contato);
            } else if (contato['tipo'] == 'Telefone') {
              this.pushTelefone(contato);
            } else if (contato['tipo'] == 'Email' || contato['tipo'] == 'E-Mail' || contato['tipo'] == 'Email NFe' || contato['tipo'] == 'E-mail NFe' || contato['tipo'] == 'MalaDireta') {
              this.pushEmail(contato);
            }
          }
        }, {
          key: "pushCelular",
          value: function pushCelular(contato) {
            var isWhatsApp = false;

            if (contato['idTipoContato'] == 1) {
              isWhatsApp = true;
            }

            this.celulares.push(this.formBuilder.group({
              id: [contato['id']],
              tipo: [contato['tipo']],
              contato: [contato['contato'].toString(), [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
              whatsapp: [isWhatsApp]
            }));
          }
        }, {
          key: "pushTelefone",
          value: function pushTelefone(contato) {
            this.telefones.push(this.formBuilder.group({
              id: [contato['id']],
              tipo: [contato['tipo']],
              contato: [contato['contato'].toString(), [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]]
            }));
          }
        }, {
          key: "pushEmail",
          value: function pushEmail(contato) {
            var isEmailMarketing = false;
            var isEmailNFe = false;

            if (contato['tipo'] == 'MalaDireta') {
              isEmailMarketing = true;
            }

            if (contato['tipo'] == 'Email NFe' || contato['tipo'] == 'E-mail NFe') {
              isEmailNFe = true;
            }

            this.emails.push(this.formBuilder.group({
              id: [contato['id']],
              tipo: [contato['tipo']],
              contato: [contato['contato'], [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email]],
              marketing: [isEmailMarketing],
              nfe: [isEmailNFe]
            }));
          }
        }, {
          key: "pushFilho",
          value: function pushFilho(filho) {
            this.filhos.push(this.formBuilder.group({
              id: [filho['id']],
              nome: [filho['nome'], [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
              idade: [filho['idade'], [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]]
            }));
          }
        }, {
          key: "onAddMeioContato",
          value: function onAddMeioContato(tipo) {
            if (tipo == 'celular') {
              this.onAddCelular();
            } else if (tipo == 'telefone') {
              this.onAddTelefone();
            } else if (tipo == 'email') {
              this.onAddEmail();
            }
          }
        }, {
          key: "onAddCelular",
          value: function onAddCelular() {
            this.celulares.push(this.formBuilder.group({
              id: [null],
              tipo: ['Celular'],
              contato: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
              whatsapp: [false]
            }));
          }
        }, {
          key: "onAddTelefone",
          value: function onAddTelefone() {
            this.telefones.push(this.formBuilder.group({
              id: [null],
              tipo: ['Telefone'],
              contato: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]]
            }));
          }
        }, {
          key: "onAddEmail",
          value: function onAddEmail() {
            this.emails.push(this.formBuilder.group({
              id: [null],
              tipo: ['E-Mail'],
              contato: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
              marketing: [false],
              nfe: [false]
            }));
          }
        }, {
          key: "onAddFilho",
          value: function onAddFilho() {
            this.filhos.push(this.formBuilder.group({
              id: [null],
              nome: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
              idade: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]]
            }));
          }
        }, {
          key: "onDeleteMeioContato",
          value: function onDeleteMeioContato(tipo, index) {
            if (tipo == 'celular') {
              this.onDeleteCelular(index);
            } else if (tipo == 'telefone') {
              this.onDeleteTelefone(index);
            } else if (tipo == 'email') {
              this.onDeleteEmail(index);
            }
          }
        }, {
          key: "onDeleteCelular",
          value: function onDeleteCelular(index) {
            var _this63 = this;

            if (this.celulares.controls[index].value['id'] == null) {
              this.celulares.removeAt(index);
            } else {
              this.confirmDelete().asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (result) {
                return result ? _this63.deleteMeioContato(_this63.celulares.controls[index].value['id']) : rxjs__WEBPACK_IMPORTED_MODULE_8__["EMPTY"];
              })).subscribe({
                next: function next(response) {
                  if (response['responseCode'] === 200) {
                    _this63.celulares.removeAt(index);

                    _this63.pnotifyService.success();

                    _this63.cadastroService.onNotifyLoaded(false);
                  }
                },
                error: function error(_error24) {
                  _this63.pnotifyService.error('Erro ao excluir celular. Tente novamente!');

                  _this63.cadastroService.onNotifyLoaded(false);
                }
              });
            }
          }
        }, {
          key: "onDeleteTelefone",
          value: function onDeleteTelefone(index) {
            var _this64 = this;

            if (this.telefones.controls[index].value['id'] == null) {
              this.telefones.removeAt(index);
            } else {
              this.confirmDelete().asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (result) {
                return result ? _this64.deleteMeioContato(_this64.telefones.controls[index].value['id']) : rxjs__WEBPACK_IMPORTED_MODULE_8__["EMPTY"];
              })).subscribe({
                next: function next(response) {
                  if (response['responseCode'] === 200) {
                    _this64.telefones.removeAt(index);

                    _this64.pnotifyService.success();

                    _this64.cadastroService.onNotifyLoaded(false);
                  }
                },
                error: function error(_error25) {
                  _this64.pnotifyService.error('Erro ao excluir telefone. Tente novamente!');

                  _this64.cadastroService.onNotifyLoaded(false);
                }
              });
            }
          }
        }, {
          key: "onDeleteEmail",
          value: function onDeleteEmail(index) {
            var _this65 = this;

            if (this.emails.controls[index].value['id'] == null) {
              this.emails.removeAt(index);
            } else {
              this.confirmDelete().asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (result) {
                return result ? _this65.deleteMeioContato(_this65.emails.controls[index].value['id']) : rxjs__WEBPACK_IMPORTED_MODULE_8__["EMPTY"];
              })).subscribe({
                next: function next(response) {
                  if (response['responseCode'] === 200) {
                    _this65.emails.removeAt(index);

                    _this65.pnotifyService.success();

                    _this65.cadastroService.onNotifyLoaded(false);
                  }
                },
                error: function error(_error26) {
                  _this65.pnotifyService.error('Erro ao excluir e-mail. Tente novamente!');

                  _this65.cadastroService.onNotifyLoaded(false);
                }
              });
            }
          }
        }, {
          key: "onDeleteFilho",
          value: function onDeleteFilho(index) {
            var _this66 = this;

            if (this.filhos.controls[index].value['id'] == null) {
              this.filhos.removeAt(index);
            } else {
              this.confirmDelete().asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (result) {
                return result ? _this66.deleteFilho(index) : rxjs__WEBPACK_IMPORTED_MODULE_8__["EMPTY"];
              })).subscribe({
                next: function next(success) {
                  _this66.pnotifyService.success();

                  _this66.cadastroService.onNotifyLoaded(false);
                },
                error: function error(_error27) {
                  _this66.pnotifyService.error('Erro ao excluir filho. Tente novamente!');

                  _this66.cadastroService.onNotifyLoaded(false);
                }
              });
            }
          }
        }, {
          key: "confirmDelete",
          value: function confirmDelete() {
            return this.confirmModalService.showConfirm('delete', 'Confirmar exclusão', 'Deseja realmente prosseguir com a exclusão do registro?', 'Cancelar', 'Confirmar');
          }
        }, {
          key: "deleteMeioContato",
          value: function deleteMeioContato(id) {
            this.cadastroService.onNotifyLoaded(false);
            return this.clientesService.deleteMeioContato(this.codCliente, this.form.value['id'], id);
          }
        }, {
          key: "deleteFilho",
          value: function deleteFilho(id) {
            this.cadastroService.onNotifyLoaded(false);
            return this.clientesService.deleteFilho(id);
          }
        }, {
          key: "checkValidatorsMeiosContato",
          value: function checkValidatorsMeiosContato() {
            var validation = true;

            if (this.form.value['celulares'].length == 0 && this.form.value['telefones'].length == 0 && this.form.value['emails'].length == 0) {
              validation = false;
            }

            return validation;
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
        }, {
          key: "onCancel",
          value: function onCancel() {
            this.location.back();
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this67 = this;

            if (!this.checkValidatorsMeiosContato()) {
              this.pnotifyService.notice('Informe ao menos um meio de contato.');
              return false;
            }

            if (this.form.pristine) {
              this.location.back();
            } else {
              if (this.form.valid) {
                this.cadastroService.onNotifyLoaded(true);
                var formObj = {
                  codCliente: this.codCliente,
                  id: this.form.value['id'],
                  idSeqTid: this.form.value['idSeqTid'],
                  nomeCompleto: this.form.value['nomeCompleto'],
                  idSetor: this.form.value['setor'],
                  idFuncao: this.form.value['funcao'],
                  idGenero: this.form.value['genero'],
                  contatos: []
                };
                formObj['contatos'] = this.form.value['celulares'].concat(this.form.value['telefones'], this.form.value['emails']);
                this.clientesService.updateContato(formObj).subscribe({
                  next: function next(response) {
                    console.log(response);

                    if (response['responseCode'] === 200) {
                      _this67.onSended();

                      _this67.pnotifyService.success();

                      _this67.cadastroService.onNotifyLoaded(false);

                      _this67.formChanged = false;

                      _this67.location.back();
                    } else {
                      _this67.handleSubmitError();
                    }
                  },
                  error: function error(_error28) {
                    _this67.handleSubmitError();
                  }
                });
              }
            }
          }
        }, {
          key: "handleSubmitError",
          value: function handleSubmitError() {
            this.pnotifyService.error('Ocorreu um erro ao salvar o cadastro.');
            this.cadastroService.onNotifyLoaded(false);
          }
        }, {
          key: "onSended",
          value: function onSended() {
            this.cadastroService.onNotifySended(true);
          }
        }]);

        return ComercialClientesCadastroContatosFormularioComponent;
      }();

      ComercialClientesCadastroContatosFormularioComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _formulario_service__WEBPACK_IMPORTED_MODULE_11__["ComercialClientesCadastroContatosFormularioService"]
        }, {
          type: _cadastro_service__WEBPACK_IMPORTED_MODULE_12__["ComercialClientesCadastroService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]
        }, {
          type: src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_13__["ComercialClientesService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"]
        }, {
          type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_14__["ConfirmModalService"]
        }];
      };

      ComercialClientesCadastroContatosFormularioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-clientes-cadastro-contatos-formulario',
        template: _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _formulario_service__WEBPACK_IMPORTED_MODULE_11__["ComercialClientesCadastroContatosFormularioService"], _cadastro_service__WEBPACK_IMPORTED_MODULE_12__["ComercialClientesCadastroService"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_13__["ComercialClientesService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"], src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_14__["ConfirmModalService"]])], ComercialClientesCadastroContatosFormularioComponent);
      /***/
    },

    /***/
    "pYyI":
    /*!******************************************************************!*\
      !*** ./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js ***!
      \******************************************************************/

    /*! exports provided: FileDropDirective, FileItem, FileLikeObject, FileSelectDirective, FileUploadModule, FileUploader */

    /***/
    function pYyI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileDropDirective", function () {
        return FileDropDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileItem", function () {
        return FileItem;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileLikeObject", function () {
        return FileLikeObject;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileSelectDirective", function () {
        return FileSelectDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileUploadModule", function () {
        return FileUploadModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileUploader", function () {
        return FileUploader;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} node
       * @return {?}
       */


      function isElement(node) {
        return !!(node && (node.nodeName || node.prop && node.attr && node.find));
      }

      var FileLikeObject = /*#__PURE__*/function () {
        /**
         * @param {?} fileOrInput
         */
        function FileLikeObject(fileOrInput) {
          _classCallCheck(this, FileLikeObject);

          this.rawFile = fileOrInput;
          /** @type {?} */

          var isInput = isElement(fileOrInput);
          /** @type {?} */

          var fakePathOrObject = isInput ? fileOrInput.value : fileOrInput;
          /** @type {?} */

          var postfix = typeof fakePathOrObject === 'string' ? 'FakePath' : 'Object';
          /** @type {?} */

          var method = '_createFrom' + postfix;

          /** @type {?} */
          this[method](fakePathOrObject);
        }
        /**
         * @param {?} path
         * @return {?}
         */


        _createClass(FileLikeObject, [{
          key: "_createFromFakePath",
          value: function _createFromFakePath(path) {
            this.lastModifiedDate = void 0;
            this.size = void 0;
            this.type = 'like/' + path.slice(path.lastIndexOf('.') + 1).toLowerCase();
            this.name = path.slice(path.lastIndexOf('/') + path.lastIndexOf('\\') + 2);
          }
          /**
           * @param {?} object
           * @return {?}
           */

        }, {
          key: "_createFromObject",
          value: function _createFromObject(object) {
            this.size = object.size;
            this.type = object.type;
            this.name = object.name;
          }
        }]);

        return FileLikeObject;
      }();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var FileItem = /*#__PURE__*/function () {
        /**
         * @param {?} uploader
         * @param {?} some
         * @param {?} options
         */
        function FileItem(uploader, some, options) {
          _classCallCheck(this, FileItem);

          this.url = '/';
          this.headers = [];
          this.withCredentials = true;
          this.formData = [];
          this.isReady = false;
          this.isUploading = false;
          this.isUploaded = false;
          this.isSuccess = false;
          this.isCancel = false;
          this.isError = false;
          this.progress = 0;
          this.index = void 0;
          this.uploader = uploader;
          this.some = some;
          this.options = options;
          this.file = new FileLikeObject(some);
          this._file = some;

          if (uploader.options) {
            this.method = uploader.options.method || 'POST';
            this.alias = uploader.options.itemAlias || 'file';
          }

          this.url = uploader.options.url;
        }
        /**
         * @return {?}
         */


        _createClass(FileItem, [{
          key: "upload",
          value: function upload() {
            try {
              this.uploader.uploadItem(this);
            } catch (e) {
              this.uploader._onCompleteItem(this, '', 0, {});

              this.uploader._onErrorItem(this, '', 0, {});
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "cancel",
          value: function cancel() {
            this.uploader.cancelItem(this);
          }
          /**
           * @return {?}
           */

        }, {
          key: "remove",
          value: function remove() {
            this.uploader.removeFromQueue(this);
          }
          /**
           * @return {?}
           */

        }, {
          key: "onBeforeUpload",
          value: function onBeforeUpload() {
            return void 0;
          }
          /**
           * @param {?} form
           * @return {?}
           */

        }, {
          key: "onBuildForm",
          value: function onBuildForm(form) {
            return {
              form: form
            };
          }
          /**
           * @param {?} progress
           * @return {?}
           */

        }, {
          key: "onProgress",
          value: function onProgress(progress) {
            return {
              progress: progress
            };
          }
          /**
           * @param {?} response
           * @param {?} status
           * @param {?} headers
           * @return {?}
           */

        }, {
          key: "onSuccess",
          value: function onSuccess(response, status, headers) {
            return {
              response: response,
              status: status,
              headers: headers
            };
          }
          /**
           * @param {?} response
           * @param {?} status
           * @param {?} headers
           * @return {?}
           */

        }, {
          key: "onError",
          value: function onError(response, status, headers) {
            return {
              response: response,
              status: status,
              headers: headers
            };
          }
          /**
           * @param {?} response
           * @param {?} status
           * @param {?} headers
           * @return {?}
           */

        }, {
          key: "onCancel",
          value: function onCancel(response, status, headers) {
            return {
              response: response,
              status: status,
              headers: headers
            };
          }
          /**
           * @param {?} response
           * @param {?} status
           * @param {?} headers
           * @return {?}
           */

        }, {
          key: "onComplete",
          value: function onComplete(response, status, headers) {
            return {
              response: response,
              status: status,
              headers: headers
            };
          }
          /**
           * @return {?}
           */

        }, {
          key: "_onBeforeUpload",
          value: function _onBeforeUpload() {
            this.isReady = true;
            this.isUploading = true;
            this.isUploaded = false;
            this.isSuccess = false;
            this.isCancel = false;
            this.isError = false;
            this.progress = 0;
            this.onBeforeUpload();
          }
          /**
           * @param {?} form
           * @return {?}
           */

        }, {
          key: "_onBuildForm",
          value: function _onBuildForm(form) {
            this.onBuildForm(form);
          }
          /**
           * @param {?} progress
           * @return {?}
           */

        }, {
          key: "_onProgress",
          value: function _onProgress(progress) {
            this.progress = progress;
            this.onProgress(progress);
          }
          /**
           * @param {?} response
           * @param {?} status
           * @param {?} headers
           * @return {?}
           */

        }, {
          key: "_onSuccess",
          value: function _onSuccess(response, status, headers) {
            this.isReady = false;
            this.isUploading = false;
            this.isUploaded = true;
            this.isSuccess = true;
            this.isCancel = false;
            this.isError = false;
            this.progress = 100;
            this.index = void 0;
            this.onSuccess(response, status, headers);
          }
          /**
           * @param {?} response
           * @param {?} status
           * @param {?} headers
           * @return {?}
           */

        }, {
          key: "_onError",
          value: function _onError(response, status, headers) {
            this.isReady = false;
            this.isUploading = false;
            this.isUploaded = true;
            this.isSuccess = false;
            this.isCancel = false;
            this.isError = true;
            this.progress = 0;
            this.index = void 0;
            this.onError(response, status, headers);
          }
          /**
           * @param {?} response
           * @param {?} status
           * @param {?} headers
           * @return {?}
           */

        }, {
          key: "_onCancel",
          value: function _onCancel(response, status, headers) {
            this.isReady = false;
            this.isUploading = false;
            this.isUploaded = false;
            this.isSuccess = false;
            this.isCancel = true;
            this.isError = false;
            this.progress = 0;
            this.index = void 0;
            this.onCancel(response, status, headers);
          }
          /**
           * @param {?} response
           * @param {?} status
           * @param {?} headers
           * @return {?}
           */

        }, {
          key: "_onComplete",
          value: function _onComplete(response, status, headers) {
            this.onComplete(response, status, headers);

            if (this.uploader.options.removeAfterUpload) {
              this.remove();
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "_prepareToUploading",
          value: function _prepareToUploading() {
            this.index = this.index || ++this.uploader._nextIndex;
            this.isReady = true;
          }
        }]);

        return FileItem;
      }();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var FileType = /*#__PURE__*/function () {
        function FileType() {
          _classCallCheck(this, FileType);
        }

        _createClass(FileType, null, [{
          key: "getMimeClass",
          value:
          /**
           * @param {?} file
           * @return {?}
           */
          function getMimeClass(file) {
            /** @type {?} */
            var mimeClass = 'application';

            if (this.mime_psd.indexOf(file.type) !== -1) {
              mimeClass = 'image';
            } else if (file.type.match('image.*')) {
              mimeClass = 'image';
            } else if (file.type.match('video.*')) {
              mimeClass = 'video';
            } else if (file.type.match('audio.*')) {
              mimeClass = 'audio';
            } else if (file.type === 'application/pdf') {
              mimeClass = 'pdf';
            } else if (this.mime_compress.indexOf(file.type) !== -1) {
              mimeClass = 'compress';
            } else if (this.mime_doc.indexOf(file.type) !== -1) {
              mimeClass = 'doc';
            } else if (this.mime_xsl.indexOf(file.type) !== -1) {
              mimeClass = 'xls';
            } else if (this.mime_ppt.indexOf(file.type) !== -1) {
              mimeClass = 'ppt';
            }

            if (mimeClass === 'application') {
              mimeClass = this.fileTypeDetection(file.name);
            }

            return mimeClass;
          }
          /**
           * @param {?} inputFilename
           * @return {?}
           */

        }, {
          key: "fileTypeDetection",
          value: function fileTypeDetection(inputFilename) {
            /** @type {?} */
            var types = {
              'jpg': 'image',
              'jpeg': 'image',
              'tif': 'image',
              'psd': 'image',
              'bmp': 'image',
              'png': 'image',
              'nef': 'image',
              'tiff': 'image',
              'cr2': 'image',
              'dwg': 'image',
              'cdr': 'image',
              'ai': 'image',
              'indd': 'image',
              'pin': 'image',
              'cdp': 'image',
              'skp': 'image',
              'stp': 'image',
              '3dm': 'image',
              'mp3': 'audio',
              'wav': 'audio',
              'wma': 'audio',
              'mod': 'audio',
              'm4a': 'audio',
              'compress': 'compress',
              'zip': 'compress',
              'rar': 'compress',
              '7z': 'compress',
              'lz': 'compress',
              'z01': 'compress',
              'bz2': 'compress',
              'gz': 'compress',
              'pdf': 'pdf',
              'xls': 'xls',
              'xlsx': 'xls',
              'ods': 'xls',
              'mp4': 'video',
              'avi': 'video',
              'wmv': 'video',
              'mpg': 'video',
              'mts': 'video',
              'flv': 'video',
              '3gp': 'video',
              'vob': 'video',
              'm4v': 'video',
              'mpeg': 'video',
              'm2ts': 'video',
              'mov': 'video',
              'doc': 'doc',
              'docx': 'doc',
              'eps': 'doc',
              'txt': 'doc',
              'odt': 'doc',
              'rtf': 'doc',
              'ppt': 'ppt',
              'pptx': 'ppt',
              'pps': 'ppt',
              'ppsx': 'ppt',
              'odp': 'ppt'
            };
            /** @type {?} */

            var chunks = inputFilename.split('.');

            if (chunks.length < 2) {
              return 'application';
            }
            /** @type {?} */


            var extension = chunks[chunks.length - 1].toLowerCase();

            if (types[extension] === undefined) {
              return 'application';
            } else {
              return types[extension];
            }
          }
        }]);

        return FileType;
      }();
      /*  MS office  */


      FileType.mime_doc = ['application/msword', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.openxmlformats-officedocument.wordprocessingml.template', 'application/vnd.ms-word.document.macroEnabled.12', 'application/vnd.ms-word.template.macroEnabled.12'];
      FileType.mime_xsl = ['application/vnd.ms-excel', 'application/vnd.ms-excel', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.spreadsheetml.template', 'application/vnd.ms-excel.sheet.macroEnabled.12', 'application/vnd.ms-excel.template.macroEnabled.12', 'application/vnd.ms-excel.addin.macroEnabled.12', 'application/vnd.ms-excel.sheet.binary.macroEnabled.12'];
      FileType.mime_ppt = ['application/vnd.ms-powerpoint', 'application/vnd.ms-powerpoint', 'application/vnd.ms-powerpoint', 'application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.presentationml.template', 'application/vnd.openxmlformats-officedocument.presentationml.slideshow', 'application/vnd.ms-powerpoint.addin.macroEnabled.12', 'application/vnd.ms-powerpoint.presentation.macroEnabled.12', 'application/vnd.ms-powerpoint.presentation.macroEnabled.12', 'application/vnd.ms-powerpoint.slideshow.macroEnabled.12'];
      /* PSD */

      FileType.mime_psd = ['image/photoshop', 'image/x-photoshop', 'image/psd', 'application/photoshop', 'application/psd', 'zz-application/zz-winassoc-psd'];
      /* Compressed files */

      FileType.mime_compress = ['application/x-gtar', 'application/x-gcompress', 'application/compress', 'application/x-tar', 'application/x-rar-compressed', 'application/octet-stream', 'application/x-zip-compressed', 'application/zip-compressed', 'application/x-7z-compressed', 'application/gzip', 'application/x-bzip2'];

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} value
       * @return {?}
       */


      function _isFile(value) {
        return File && value instanceof File;
      }
      /**
       * @record
       */


      function Headers() {}

      if (false) {}
      /**
       * @record
       */


      function FileUploaderOptions() {}

      if (false) {}

      var FileUploader = /*#__PURE__*/function () {
        /**
         * @param {?} options
         */
        function FileUploader(options) {
          _classCallCheck(this, FileUploader);

          this.isUploading = false;
          this.queue = [];
          this.progress = 0;
          this._nextIndex = 0;
          this.options = {
            autoUpload: false,
            isHTML5: true,
            filters: [],
            removeAfterUpload: false,
            disableMultipart: false,
            formatDataFunction:
            /**
            * @param {?} item
            * @return {?}
            */
            function formatDataFunction(item) {
              return item._file;
            },
            formatDataFunctionIsAsync: false
          };
          this.setOptions(options);
          this.response = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }
        /**
         * @param {?} options
         * @return {?}
         */


        _createClass(FileUploader, [{
          key: "setOptions",
          value: function setOptions(options) {
            this.options = Object.assign(this.options, options);
            this.authToken = this.options.authToken;
            this.authTokenHeader = this.options.authTokenHeader || 'Authorization';
            this.autoUpload = this.options.autoUpload;
            this.options.filters.unshift({
              name: 'queueLimit',
              fn: this._queueLimitFilter
            });

            if (this.options.maxFileSize) {
              this.options.filters.unshift({
                name: 'fileSize',
                fn: this._fileSizeFilter
              });
            }

            if (this.options.allowedFileType) {
              this.options.filters.unshift({
                name: 'fileType',
                fn: this._fileTypeFilter
              });
            }

            if (this.options.allowedMimeType) {
              this.options.filters.unshift({
                name: 'mimeType',
                fn: this._mimeTypeFilter
              });
            }

            for (var i = 0; i < this.queue.length; i++) {
              this.queue[i].url = this.options.url;
            }
          }
          /**
           * @param {?} files
           * @param {?=} options
           * @param {?=} filters
           * @return {?}
           */

        }, {
          key: "addToQueue",
          value: function addToQueue(files, options, filters) {
            var _this68 = this;

            /** @type {?} */
            var list = [];

            var _iterator = _createForOfIteratorHelper(files),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var file = _step.value;
                list.push(file);
              }
              /** @type {?} */

            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            var arrayOfFilters = this._getFilters(filters);
            /** @type {?} */


            var count = this.queue.length;
            /** @type {?} */

            var addedFileItems = [];
            list.map(
            /**
            * @param {?} some
            * @return {?}
            */
            function (some) {
              if (!options) {
                options = _this68.options;
              }
              /** @type {?} */


              var temp = new FileLikeObject(some);

              if (_this68._isValidFile(temp, arrayOfFilters, options)) {
                /** @type {?} */
                var fileItem = new FileItem(_this68, some, options);
                addedFileItems.push(fileItem);

                _this68.queue.push(fileItem);

                _this68._onAfterAddingFile(fileItem);
              } else {
                /** @type {?} */
                var filter = arrayOfFilters[_this68._failFilterIndex];

                _this68._onWhenAddingFileFailed(temp, filter, options);
              }
            });

            if (this.queue.length !== count) {
              this._onAfterAddingAll(addedFileItems);

              this.progress = this._getTotalProgress();
            }

            this._render();

            if (this.options.autoUpload) {
              this.uploadAll();
            }
          }
          /**
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "removeFromQueue",
          value: function removeFromQueue(value) {
            /** @type {?} */
            var index = this.getIndexOfItem(value);
            /** @type {?} */

            var item = this.queue[index];

            if (item.isUploading) {
              item.cancel();
            }

            this.queue.splice(index, 1);
            this.progress = this._getTotalProgress();
          }
          /**
           * @return {?}
           */

        }, {
          key: "clearQueue",
          value: function clearQueue() {
            while (this.queue.length) {
              this.queue[0].remove();
            }

            this.progress = 0;
          }
          /**
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "uploadItem",
          value: function uploadItem(value) {
            /** @type {?} */
            var index = this.getIndexOfItem(value);
            /** @type {?} */

            var item = this.queue[index];
            /** @type {?} */

            var transport = this.options.isHTML5 ? '_xhrTransport' : '_iframeTransport';

            item._prepareToUploading();

            if (this.isUploading) {
              return;
            }

            this.isUploading = true;

            /** @type {?} */
            this[transport](item);
          }
          /**
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "cancelItem",
          value: function cancelItem(value) {
            /** @type {?} */
            var index = this.getIndexOfItem(value);
            /** @type {?} */

            var item = this.queue[index];
            /** @type {?} */

            var prop = this.options.isHTML5 ? item._xhr : item._form;

            if (item && item.isUploading) {
              prop.abort();
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "uploadAll",
          value: function uploadAll() {
            /** @type {?} */
            var items = this.getNotUploadedItems().filter(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              return !item.isUploading;
            });

            if (!items.length) {
              return;
            }

            items.map(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              return item._prepareToUploading();
            });
            items[0].upload();
          }
          /**
           * @return {?}
           */

        }, {
          key: "cancelAll",
          value: function cancelAll() {
            /** @type {?} */
            var items = this.getNotUploadedItems();
            items.map(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              return item.cancel();
            });
          }
          /**
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "isFile",
          value: function isFile(value) {
            return _isFile(value);
          }
          /**
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "isFileLikeObject",
          value: function isFileLikeObject(value) {
            return value instanceof FileLikeObject;
          }
          /**
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "getIndexOfItem",
          value: function getIndexOfItem(value) {
            return typeof value === 'number' ? value : this.queue.indexOf(value);
          }
          /**
           * @return {?}
           */

        }, {
          key: "getNotUploadedItems",
          value: function getNotUploadedItems() {
            return this.queue.filter(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              return !item.isUploaded;
            });
          }
          /**
           * @return {?}
           */

        }, {
          key: "getReadyItems",
          value: function getReadyItems() {
            return this.queue.filter(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              return item.isReady && !item.isUploading;
            }).sort(
            /**
            * @param {?} item1
            * @param {?} item2
            * @return {?}
            */
            function (item1, item2) {
              return item1.index - item2.index;
            });
          }
          /**
           * @return {?}
           */

        }, {
          key: "destroy",
          value: function destroy() {
            return void 0;
          }
          /**
           * @param {?} fileItems
           * @return {?}
           */

        }, {
          key: "onAfterAddingAll",
          value: function onAfterAddingAll(fileItems) {
            return {
              fileItems: fileItems
            };
          }
          /**
           * @param {?} fileItem
           * @param {?} form
           * @return {?}
           */

        }, {
          key: "onBuildItemForm",
          value: function onBuildItemForm(fileItem, form) {
            return {
              fileItem: fileItem,
              form: form
            };
          }
          /**
           * @param {?} fileItem
           * @return {?}
           */

        }, {
          key: "onAfterAddingFile",
          value: function onAfterAddingFile(fileItem) {
            return {
              fileItem: fileItem
            };
          }
          /**
           * @param {?} item
           * @param {?} filter
           * @param {?} options
           * @return {?}
           */

        }, {
          key: "onWhenAddingFileFailed",
          value: function onWhenAddingFileFailed(item, filter, options) {
            return {
              item: item,
              filter: filter,
              options: options
            };
          }
          /**
           * @param {?} fileItem
           * @return {?}
           */

        }, {
          key: "onBeforeUploadItem",
          value: function onBeforeUploadItem(fileItem) {
            return {
              fileItem: fileItem
            };
          }
          /**
           * @param {?} fileItem
           * @param {?} progress
           * @return {?}
           */

        }, {
          key: "onProgressItem",
          value: function onProgressItem(fileItem, progress) {
            return {
              fileItem: fileItem,
              progress: progress
            };
          }
          /**
           * @param {?} progress
           * @return {?}
           */

        }, {
          key: "onProgressAll",
          value: function onProgressAll(progress) {
            return {
              progress: progress
            };
          }
          /**
           * @param {?} item
           * @param {?} response
           * @param {?} status
           * @param {?} headers
           * @return {?}
           */

        }, {
          key: "onSuccessItem",
          value: function onSuccessItem(item, response, status, headers) {
            return {
              item: item,
              response: response,
              status: status,
              headers: headers
            };
          }
          /**
           * @param {?} item
           * @param {?} response
           * @param {?} status
           * @param {?} headers
           * @return {?}
           */

        }, {
          key: "onErrorItem",
          value: function onErrorItem(item, response, status, headers) {
            return {
              item: item,
              response: response,
              status: status,
              headers: headers
            };
          }
          /**
           * @param {?} item
           * @param {?} response
           * @param {?} status
           * @param {?} headers
           * @return {?}
           */

        }, {
          key: "onCancelItem",
          value: function onCancelItem(item, response, status, headers) {
            return {
              item: item,
              response: response,
              status: status,
              headers: headers
            };
          }
          /**
           * @param {?} item
           * @param {?} response
           * @param {?} status
           * @param {?} headers
           * @return {?}
           */

        }, {
          key: "onCompleteItem",
          value: function onCompleteItem(item, response, status, headers) {
            return {
              item: item,
              response: response,
              status: status,
              headers: headers
            };
          }
          /**
           * @return {?}
           */

        }, {
          key: "onCompleteAll",
          value: function onCompleteAll() {
            return void 0;
          }
          /**
           * @param {?} item
           * @return {?}
           */

        }, {
          key: "_mimeTypeFilter",
          value: function _mimeTypeFilter(item) {
            return !(this.options.allowedMimeType && this.options.allowedMimeType.indexOf(item.type) === -1);
          }
          /**
           * @param {?} item
           * @return {?}
           */

        }, {
          key: "_fileSizeFilter",
          value: function _fileSizeFilter(item) {
            return !(this.options.maxFileSize && item.size > this.options.maxFileSize);
          }
          /**
           * @param {?} item
           * @return {?}
           */

        }, {
          key: "_fileTypeFilter",
          value: function _fileTypeFilter(item) {
            return !(this.options.allowedFileType && this.options.allowedFileType.indexOf(FileType.getMimeClass(item)) === -1);
          }
          /**
           * @param {?} item
           * @param {?} response
           * @param {?} status
           * @param {?} headers
           * @return {?}
           */

        }, {
          key: "_onErrorItem",
          value: function _onErrorItem(item, response, status, headers) {
            item._onError(response, status, headers);

            this.onErrorItem(item, response, status, headers);
          }
          /**
           * @param {?} item
           * @param {?} response
           * @param {?} status
           * @param {?} headers
           * @return {?}
           */

        }, {
          key: "_onCompleteItem",
          value: function _onCompleteItem(item, response, status, headers) {
            item._onComplete(response, status, headers);

            this.onCompleteItem(item, response, status, headers);
            /** @type {?} */

            var nextItem = this.getReadyItems()[0];
            this.isUploading = false;

            if (nextItem) {
              nextItem.upload();
              return;
            }

            this.onCompleteAll();
            this.progress = this._getTotalProgress();

            this._render();
          }
          /**
           * @protected
           * @param {?} parsedHeaders
           * @return {?}
           */

        }, {
          key: "_headersGetter",
          value: function _headersGetter(parsedHeaders) {
            return (
              /**
              * @param {?} name
              * @return {?}
              */
              function (name) {
                if (name) {
                  return parsedHeaders[name.toLowerCase()] || void 0;
                }

                return parsedHeaders;
              }
            );
          }
          /**
           * @protected
           * @param {?} item
           * @return {?}
           */

        }, {
          key: "_xhrTransport",
          value: function _xhrTransport(item) {
            var _this69 = this;

            /** @type {?} */
            var that = this;
            /** @type {?} */

            var xhr = item._xhr = new XMLHttpRequest();
            /** @type {?} */

            var sendable;

            this._onBeforeUploadItem(item);

            if (typeof item._file.size !== 'number') {
              throw new TypeError('The file specified is no longer valid');
            }

            if (!this.options.disableMultipart) {
              sendable = new FormData();

              this._onBuildItemForm(item, sendable);
              /** @type {?} */


              var appendFile =
              /**
              * @return {?}
              */
              function appendFile() {
                return sendable.append(item.alias, item._file, item.file.name);
              };

              if (!this.options.parametersBeforeFiles) {
                appendFile();
              } // For AWS, Additional Parameters must come BEFORE Files


              if (this.options.additionalParameter !== undefined) {
                Object.keys(this.options.additionalParameter).forEach(
                /**
                * @param {?} key
                * @return {?}
                */
                function (key) {
                  /** @type {?} */
                  var paramVal = _this69.options.additionalParameter[key]; // Allow an additional parameter to include the filename

                  if (typeof paramVal === 'string' && paramVal.indexOf('{{file_name}}') >= 0) {
                    paramVal = paramVal.replace('{{file_name}}', item.file.name);
                  }

                  sendable.append(key, paramVal);
                });
              }

              if (this.options.parametersBeforeFiles) {
                appendFile();
              }
            } else {
              sendable = this.options.formatDataFunction(item);
            }

            xhr.upload.onprogress =
            /**
            * @param {?} event
            * @return {?}
            */
            function (event) {
              /** @type {?} */
              var progress = Math.round(event.lengthComputable ? event.loaded * 100 / event.total : 0);

              _this69._onProgressItem(item, progress);
            };

            xhr.onload =
            /**
            * @return {?}
            */
            function () {
              /** @type {?} */
              var headers = _this69._parseHeaders(xhr.getAllResponseHeaders());
              /** @type {?} */


              var response = _this69._transformResponse(xhr.response, headers);
              /** @type {?} */


              var gist = _this69._isSuccessCode(xhr.status) ? 'Success' : 'Error';
              /** @type {?} */

              var method = '_on' + gist + 'Item';

              /** @type {?} */
              _this69[method](item, response, xhr.status, headers);

              _this69._onCompleteItem(item, response, xhr.status, headers);
            };

            xhr.onerror =
            /**
            * @return {?}
            */
            function () {
              /** @type {?} */
              var headers = _this69._parseHeaders(xhr.getAllResponseHeaders());
              /** @type {?} */


              var response = _this69._transformResponse(xhr.response, headers);

              _this69._onErrorItem(item, response, xhr.status, headers);

              _this69._onCompleteItem(item, response, xhr.status, headers);
            };

            xhr.onabort =
            /**
            * @return {?}
            */
            function () {
              /** @type {?} */
              var headers = _this69._parseHeaders(xhr.getAllResponseHeaders());
              /** @type {?} */


              var response = _this69._transformResponse(xhr.response, headers);

              _this69._onCancelItem(item, response, xhr.status, headers);

              _this69._onCompleteItem(item, response, xhr.status, headers);
            };

            xhr.open(item.method, item.url, true);
            xhr.withCredentials = item.withCredentials;

            if (this.options.headers) {
              var _iterator2 = _createForOfIteratorHelper(this.options.headers),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var header = _step2.value;
                  xhr.setRequestHeader(header.name, header.value);
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }

            if (item.headers.length) {
              var _iterator3 = _createForOfIteratorHelper(item.headers),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var _header = _step3.value;
                  xhr.setRequestHeader(_header.name, _header.value);
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
            }

            if (this.authToken) {
              xhr.setRequestHeader(this.authTokenHeader, this.authToken);
            }

            xhr.onreadystatechange =
            /**
            * @return {?}
            */
            function () {
              if (xhr.readyState == XMLHttpRequest.DONE) {
                that.response.emit(xhr.responseText);
              }
            };

            if (this.options.formatDataFunctionIsAsync) {
              sendable.then(
              /**
              * @param {?} result
              * @return {?}
              */
              function (result) {
                return xhr.send(JSON.stringify(result));
              });
            } else {
              xhr.send(sendable);
            }

            this._render();
          }
          /**
           * @protected
           * @param {?=} value
           * @return {?}
           */

        }, {
          key: "_getTotalProgress",
          value: function _getTotalProgress() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

            if (this.options.removeAfterUpload) {
              return value;
            }
            /** @type {?} */


            var notUploaded = this.getNotUploadedItems().length;
            /** @type {?} */

            var uploaded = notUploaded ? this.queue.length - notUploaded : this.queue.length;
            /** @type {?} */

            var ratio = 100 / this.queue.length;
            /** @type {?} */

            var current = value * ratio / 100;
            return Math.round(uploaded * ratio + current);
          }
          /**
           * @protected
           * @param {?} filters
           * @return {?}
           */

        }, {
          key: "_getFilters",
          value: function _getFilters(filters) {
            if (!filters) {
              return this.options.filters;
            }

            if (Array.isArray(filters)) {
              return filters;
            }

            if (typeof filters === 'string') {
              /** @type {?} */
              var names = filters.match(/[^\s,]+/g);
              return this.options.filters.filter(
              /**
              * @param {?} filter
              * @return {?}
              */
              function (filter) {
                return names.indexOf(filter.name) !== -1;
              });
            }

            return this.options.filters;
          }
          /**
           * @protected
           * @return {?}
           */

        }, {
          key: "_render",
          value: function _render() {
            return void 0;
          }
          /**
           * @protected
           * @return {?}
           */

        }, {
          key: "_queueLimitFilter",
          value: function _queueLimitFilter() {
            return this.options.queueLimit === undefined || this.queue.length < this.options.queueLimit;
          }
          /**
           * @protected
           * @param {?} file
           * @param {?} filters
           * @param {?} options
           * @return {?}
           */

        }, {
          key: "_isValidFile",
          value: function _isValidFile(file, filters, options) {
            var _this70 = this;

            this._failFilterIndex = -1;
            return !filters.length ? true : filters.every(
            /**
            * @param {?} filter
            * @return {?}
            */
            function (filter) {
              _this70._failFilterIndex++;
              return filter.fn.call(_this70, file, options);
            });
          }
          /**
           * @protected
           * @param {?} status
           * @return {?}
           */

        }, {
          key: "_isSuccessCode",
          value: function _isSuccessCode(status) {
            return status >= 200 && status < 300 || status === 304;
          }
          /**
           * @protected
           * @param {?} response
           * @param {?} headers
           * @return {?}
           */

        }, {
          key: "_transformResponse",
          value: function _transformResponse(response, headers) {
            return response;
          }
          /**
           * @protected
           * @param {?} headers
           * @return {?}
           */

        }, {
          key: "_parseHeaders",
          value: function _parseHeaders(headers) {
            /** @type {?} */
            var parsed = {};
            /** @type {?} */

            var key;
            /** @type {?} */

            var val;
            /** @type {?} */

            var i;

            if (!headers) {
              return parsed;
            }

            headers.split('\n').map(
            /**
            * @param {?} line
            * @return {?}
            */
            function (line) {
              i = line.indexOf(':');
              key = line.slice(0, i).trim().toLowerCase();
              val = line.slice(i + 1).trim();

              if (key) {
                parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
              }
            });
            return parsed;
          }
          /**
           * @protected
           * @param {?} item
           * @param {?} filter
           * @param {?} options
           * @return {?}
           */

        }, {
          key: "_onWhenAddingFileFailed",
          value: function _onWhenAddingFileFailed(item, filter, options) {
            this.onWhenAddingFileFailed(item, filter, options);
          }
          /**
           * @protected
           * @param {?} item
           * @return {?}
           */

        }, {
          key: "_onAfterAddingFile",
          value: function _onAfterAddingFile(item) {
            this.onAfterAddingFile(item);
          }
          /**
           * @protected
           * @param {?} items
           * @return {?}
           */

        }, {
          key: "_onAfterAddingAll",
          value: function _onAfterAddingAll(items) {
            this.onAfterAddingAll(items);
          }
          /**
           * @protected
           * @param {?} item
           * @return {?}
           */

        }, {
          key: "_onBeforeUploadItem",
          value: function _onBeforeUploadItem(item) {
            item._onBeforeUpload();

            this.onBeforeUploadItem(item);
          }
          /**
           * @protected
           * @param {?} item
           * @param {?} form
           * @return {?}
           */

        }, {
          key: "_onBuildItemForm",
          value: function _onBuildItemForm(item, form) {
            item._onBuildForm(form);

            this.onBuildItemForm(item, form);
          }
          /**
           * @protected
           * @param {?} item
           * @param {?} progress
           * @return {?}
           */

        }, {
          key: "_onProgressItem",
          value: function _onProgressItem(item, progress) {
            /** @type {?} */
            var total = this._getTotalProgress(progress);

            this.progress = total;

            item._onProgress(progress);

            this.onProgressItem(item, progress);
            this.onProgressAll(total);

            this._render();
          }
          /**
           * @protected
           * @param {?} item
           * @param {?} response
           * @param {?} status
           * @param {?} headers
           * @return {?}
           */

        }, {
          key: "_onSuccessItem",
          value: function _onSuccessItem(item, response, status, headers) {
            item._onSuccess(response, status, headers);

            this.onSuccessItem(item, response, status, headers);
          }
          /**
           * @protected
           * @param {?} item
           * @param {?} response
           * @param {?} status
           * @param {?} headers
           * @return {?}
           */

        }, {
          key: "_onCancelItem",
          value: function _onCancelItem(item, response, status, headers) {
            item._onCancel(response, status, headers);

            this.onCancelItem(item, response, status, headers);
          }
        }]);

        return FileUploader;
      }();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var FileSelectDirective = /*#__PURE__*/function () {
        /**
         * @param {?} element
         */
        function FileSelectDirective(element) {
          _classCallCheck(this, FileSelectDirective);

          this.onFileSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.element = element;
        }
        /**
         * @return {?}
         */


        _createClass(FileSelectDirective, [{
          key: "getOptions",
          value: function getOptions() {
            return this.uploader.options;
          }
          /**
           * @return {?}
           */

        }, {
          key: "getFilters",
          value: function getFilters() {
            return {};
          }
          /**
           * @return {?}
           */

        }, {
          key: "isEmptyAfterSelection",
          value: function isEmptyAfterSelection() {
            return !!this.element.nativeElement.attributes.multiple;
          }
          /**
           * @return {?}
           */

        }, {
          key: "onChange",
          value: function onChange() {
            /** @type {?} */
            var files = this.element.nativeElement.files;
            /** @type {?} */

            var options = this.getOptions();
            /** @type {?} */

            var filters = this.getFilters();
            this.uploader.addToQueue(files, options, filters);
            this.onFileSelected.emit(files);

            if (this.isEmptyAfterSelection()) {
              this.element.nativeElement.value = '';
            }
          }
        }]);

        return FileSelectDirective;
      }();

      FileSelectDirective.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[ng2FileSelect]'
        }]
      }];
      /** @nocollapse */

      FileSelectDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      };

      FileSelectDirective.propDecorators = {
        uploader: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onFileSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['change']
        }]
      };

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var FileDropDirective = /*#__PURE__*/function () {
        /**
         * @param {?} element
         */
        function FileDropDirective(element) {
          _classCallCheck(this, FileDropDirective);

          this.fileOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.onFileDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.element = element;
        }
        /**
         * @return {?}
         */


        _createClass(FileDropDirective, [{
          key: "getOptions",
          value: function getOptions() {
            return this.uploader.options;
          }
          /**
           * @return {?}
           */

        }, {
          key: "getFilters",
          value: function getFilters() {
            return {};
          }
          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "onDrop",
          value: function onDrop(event) {
            /** @type {?} */
            var transfer = this._getTransfer(event);

            if (!transfer) {
              return;
            }
            /** @type {?} */


            var options = this.getOptions();
            /** @type {?} */

            var filters = this.getFilters();

            this._preventAndStop(event);

            this.uploader.addToQueue(transfer.files, options, filters);
            this.fileOver.emit(false);
            this.onFileDrop.emit(transfer.files);
          }
          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "onDragOver",
          value: function onDragOver(event) {
            /** @type {?} */
            var transfer = this._getTransfer(event);

            if (!this._haveFiles(transfer.types)) {
              return;
            }

            transfer.dropEffect = 'copy';

            this._preventAndStop(event);

            this.fileOver.emit(true);
          }
          /**
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "onDragLeave",
          value: function onDragLeave(event) {
            if (
            /** @type {?} */
            this.element) {
              if (event.currentTarget ===
              /** @type {?} */
              this.element[0]) {
                return;
              }
            }

            this._preventAndStop(event);

            this.fileOver.emit(false);
          }
          /**
           * @protected
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "_getTransfer",
          value: function _getTransfer(event) {
            return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer; // jQuery fix;
          }
          /**
           * @protected
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "_preventAndStop",
          value: function _preventAndStop(event) {
            event.preventDefault();
            event.stopPropagation();
          }
          /**
           * @protected
           * @param {?} types
           * @return {?}
           */

        }, {
          key: "_haveFiles",
          value: function _haveFiles(types) {
            if (!types) {
              return false;
            }

            if (types.indexOf) {
              return types.indexOf('Files') !== -1;
            } else if (types.contains) {
              return types.contains('Files');
            } else {
              return false;
            }
          }
        }]);

        return FileDropDirective;
      }();

      FileDropDirective.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[ng2FileDrop]'
        }]
      }];
      /** @nocollapse */

      FileDropDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      };

      FileDropDirective.propDecorators = {
        uploader: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        fileOver: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onFileDrop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onDrop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['drop', ['$event']]
        }],
        onDragOver: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['dragover', ['$event']]
        }],
        onDragLeave: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['dragleave', ['$event']]
        }]
      };

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var FileUploadModule = /*#__PURE__*/_createClass(function FileUploadModule() {
        _classCallCheck(this, FileUploadModule);
      });

      FileUploadModule.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          declarations: [FileDropDirective, FileSelectDirective],
          exports: [FileDropDirective, FileSelectDirective]
        }]
      }];
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=ng2-file-upload.js.map

      /***/
    },

    /***/
    "qJk7":
    /*!*********************************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/cadastro/contatos/detalhes/detalhes.component.ts ***!
      \*********************************************************************************************/

    /*! exports provided: ComercialClientesCadastroContatosDetalhesComponent */

    /***/
    function qJk7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialClientesCadastroContatosDetalhesComponent", function () {
        return ComercialClientesCadastroContatosDetalhesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_detalhes_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./detalhes.component.html */
      "f7yW");
      /* harmony import */


      var _detalhes_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./detalhes.component.scss */
      "zUZ2");
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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var ng_brazil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-brazil */
      "hTrW");
      /* harmony import */


      var src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/modules/comercial/services/clientes.service */
      "8ouN");
      /* harmony import */


      var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/modules/confirm-modal/confirm-modal.service */
      "FOez");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+"); // ng-brazil
      // Services


      var ComercialClientesCadastroContatosDetalhesComponent = /*#__PURE__*/function () {
        function ComercialClientesCadastroContatosDetalhesComponent(activatedRoute, clientesService, confirmModalService, pnotifyService, location) {
          _classCallCheck(this, ComercialClientesCadastroContatosDetalhesComponent);

          this.activatedRoute = activatedRoute;
          this.clientesService = clientesService;
          this.confirmModalService = confirmModalService;
          this.pnotifyService = pnotifyService;
          this.location = location;
          this.MASKS = ng_brazil__WEBPACK_IMPORTED_MODULE_8__["MASKS"];
          this.loaderFullScreen = true;
          this.contatos = [];
          this.contatosLoaded = false;
          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialClientesCadastroContatosDetalhesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this71 = this;

            this.activatedRoute.parent.parent.params.subscribe(function (params) {
              _this71.codCliente = params.id;

              _this71.getContatos();
            });
          }
        }, {
          key: "getContatos",
          value: function getContatos() {
            var _this72 = this;

            this.clientesService.getContatos(this.codCliente).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              _this72.loaderFullScreen = false;
              _this72.contatosLoaded = true;
            })).subscribe({
              next: function next(response) {
                if (response.success === true) {
                  _this72.contatos = response.data;
                }
              },
              error: function error(_error29) {
                _this72.pnotifyService.error();

                _this72.location.back();
              }
            });
          }
        }, {
          key: "tipoContato",
          value: function tipoContato(contato) {
            var tipoContato = contato.nomeCompleto;

            if (contato.descFuncao != null) {
              if (contato.descSetor != null) {
                tipoContato = "".concat(tipoContato, " - ").concat(contato.descFuncao, " / ").concat(contato.descSetor);
              } else {
                tipoContato = "".concat(tipoContato, " - ").concat(contato.descFuncao);
              }
            }

            return "(".concat(contato.contatos[0].tipo, ") ").concat(tipoContato).toUpperCase();
          }
        }, {
          key: "onDelete",
          value: function onDelete(contato) {
            var _this73 = this;

            var confirm$ = this.confirmModalService.showConfirm('delete', 'Confirmar exclusão', 'Deseja realmente prosseguir com a exclusão do contato?', 'Cancelar', 'Confirmar');
            confirm$.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (result) {
              return result ? _this73.deleteContato(contato) : rxjs__WEBPACK_IMPORTED_MODULE_7__["EMPTY"];
            })).subscribe({
              next: function next(response) {
                if (response.responseCode === 200) {
                  _this73.pnotifyService.success();

                  _this73.getContatos();
                } else if (response.responseCode === 206) {
                  _this73.handleOnDeleteError(response.message);
                } else {
                  _this73.handleOnDeleteError();
                }
              },
              error: function error(_error30) {
                _this73.handleOnDeleteError('Erro ao excluir contato. Tente novamente!');
              }
            });
          }
        }, {
          key: "handleOnDeleteError",
          value: function handleOnDeleteError() {
            var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            this.pnotifyService.error(msg);
            this.loaderFullScreen = false;
            this.contatosLoaded = true;
          }
        }, {
          key: "deleteContato",
          value: function deleteContato(contato) {
            this.loaderFullScreen = true;
            this.contatosLoaded = false;
            return this.clientesService.deleteContato(this.codCliente, contato.id, contato.idSeqTid);
          }
        }]);

        return ComercialClientesCadastroContatosDetalhesComponent;
      }();

      ComercialClientesCadastroContatosDetalhesComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_9__["ComercialClientesService"]
        }, {
          type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_10__["ConfirmModalService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
        }];
      };

      ComercialClientesCadastroContatosDetalhesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-clientes-cadastro-contatos-detalhes',
        template: _raw_loader_detalhes_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detalhes_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_9__["ComercialClientesService"], src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_10__["ConfirmModalService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])], ComercialClientesCadastroContatosDetalhesComponent);
      /***/
    },

    /***/
    "qjWA":
    /*!*********************************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/cadastro/filial/detalhes/detalhes.component.scss ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function qjWA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NsaWVudGVzL2NhZGFzdHJvL2ZpbGlhbC9kZXRhbGhlcy9kZXRhbGhlcy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "rGHX":
    /*!***********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/clientes/cadastro/filial/detalhes/detalhes.component.html ***!
      \***********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function rGHX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<div class=\"row\" *ngIf=\"tipoEmpresaLoaded\">\r\n  <div class=\"col\">\r\n    <div class=\"mtc-title\">Filial</div>\r\n    <div *ngIf=\"tipoEmpresa == 'matriz'\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col\">\r\n          <label>Tipo de empresa</label>\r\n          <div>MATRIZ</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"tipoEmpresa == 'filial'\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label>Tipo de empresa</label>\r\n          <div>{{ filial.descTipo }}</div>\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label>Código da matriz</label>\r\n          <div>\r\n            <a [routerLink]=\"['/comercial/clientes/cadastro', filial.idMatriz, 'dados-faturamento']\" target=\"_blank\">{{ filial.idMatriz }}</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label>CNPJ da matriz</label>\r\n          <div>{{ filial.cnpjMatriz }}</div>\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label>Razão social da matriz</label>\r\n          <div>{{ filial.razaoSocialMatriz }}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row py-5 my-5\" *ngIf=\"tipoEmpresa == ''\">\r\n      <div class=\"col\">\r\n        <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "ruYJ":
    /*!*************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/cadastro/enderecos/formulario/formulario-rules-resolver.guard.ts ***!
      \*************************************************************************************************************/

    /*! exports provided: ComercialClientesCadastroEnderecosRulesResolverGuard */

    /***/
    function ruYJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialClientesCadastroEnderecosRulesResolverGuard", function () {
        return ComercialClientesCadastroEnderecosRulesResolverGuard;
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


      var src_app_shared_services_core_form_rules_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/services/core/form-rules.service */
      "WRpt"); // Services


      var ComercialClientesCadastroEnderecosRulesResolverGuard = /*#__PURE__*/function () {
        function ComercialClientesCadastroEnderecosRulesResolverGuard(formRulesService) {
          _classCallCheck(this, ComercialClientesCadastroEnderecosRulesResolverGuard);

          this.formRulesService = formRulesService;
        }

        _createClass(ComercialClientesCadastroEnderecosRulesResolverGuard, [{
          key: "resolve",
          value: function resolve() {
            return this.formRulesService.getRules(2);
          }
        }]);

        return ComercialClientesCadastroEnderecosRulesResolverGuard;
      }();

      ComercialClientesCadastroEnderecosRulesResolverGuard.ctorParameters = function () {
        return [{
          type: src_app_shared_services_core_form_rules_service__WEBPACK_IMPORTED_MODULE_2__["FormRulesService"]
        }];
      };

      ComercialClientesCadastroEnderecosRulesResolverGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_core_form_rules_service__WEBPACK_IMPORTED_MODULE_2__["FormRulesService"]])], ComercialClientesCadastroEnderecosRulesResolverGuard);
      /***/
    },

    /***/
    "sPal":
    /*!****************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/clientes/cadastro/informacoes-financeiras/detalhes/detalhes.component.html ***!
      \****************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function sPal(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<div class=\"row\" *ngIf=\"infosFinanceirasLoaded\">\r\n  <div class=\"col\">\r\n    <div class=\"mtc-title\">Información financiera</div>\r\n    <ul class=\"list-group\" *ngIf=\"infosFinanceiras.length > 0\">\r\n      <li class=\"list-group-item\" *ngFor=\"let item of infosFinanceiras\">\r\n        <b>{{ item.descricao }}</b>\r\n      </li>\r\n    </ul>\r\n    <div class=\"row py-5 my-5\" *ngIf=\"infosFinanceiras.length == 0\">\r\n      <div class=\"col\">\r\n        <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "sveC":
    /*!*******************************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/cadastro/filial/detalhes/detalhes.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: ComercialClientesCadastroFilialDetalhesComponent */

    /***/
    function sveC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialClientesCadastroFilialDetalhesComponent", function () {
        return ComercialClientesCadastroFilialDetalhesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_detalhes_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./detalhes.component.html */
      "rGHX");
      /* harmony import */


      var _detalhes_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./detalhes.component.scss */
      "qjWA");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/modules/comercial/services/clientes.service */
      "8ouN"); // Services


      var ComercialClientesCadastroFilialDetalhesComponent = /*#__PURE__*/function () {
        function ComercialClientesCadastroFilialDetalhesComponent(activatedRoute, clientesService) {
          _classCallCheck(this, ComercialClientesCadastroFilialDetalhesComponent);

          this.activatedRoute = activatedRoute;
          this.clientesService = clientesService;
          this.loaderFullScreen = true;
          this.tipoEmpresa = '';
          this.tipoEmpresaLoaded = false;
          this.filiais = [];
          this.filial = {};
        }

        _createClass(ComercialClientesCadastroFilialDetalhesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this74 = this;

            this.activatedRoute.parent.parent.params.subscribe(function (params) {
              _this74.clientesService.getFilial(params['id']).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
                _this74.loaderFullScreen = false;
                _this74.tipoEmpresaLoaded = true;
              })).subscribe(function (response) {
                if (response['responseCode'] === 200) {
                  if (Object.keys(response['result']['matriz']).length > 0) {
                    _this74.tipoEmpresa = 'filial';
                    _this74.filial = response['result']['matriz'];
                  } else if (Object.keys(response['result']['filial']).length > 0) {
                    _this74.tipoEmpresa = 'matriz';
                    _this74.filiais = response['result']['filial'];
                  }
                }
              });
            });
          }
        }]);

        return ComercialClientesCadastroFilialDetalhesComponent;
      }();

      ComercialClientesCadastroFilialDetalhesComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_6__["ComercialClientesService"]
        }];
      };

      ComercialClientesCadastroFilialDetalhesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-clientes-cadastro-filial-detalhes',
        template: _raw_loader_detalhes_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detalhes_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_6__["ComercialClientesService"]])], ComercialClientesCadastroFilialDetalhesComponent);
      /***/
    },

    /***/
    "tMVO":
    /*!********************************************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/cadastro/dados-faturamento/detalhes/detalhes.component.scss ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function tMVO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NsaWVudGVzL2NhZGFzdHJvL2RhZG9zLWZhdHVyYW1lbnRvL2RldGFsaGVzL2RldGFsaGVzLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "wDVn":
    /*!************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/cadastro/enderecos/formulario/formulario-data-resolver.guard.ts ***!
      \************************************************************************************************************/

    /*! exports provided: ComercialClientesCadastroEnderecosResolverGuard */

    /***/
    function wDVn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialClientesCadastroEnderecosResolverGuard", function () {
        return ComercialClientesCadastroEnderecosResolverGuard;
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


      var src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/modules/comercial/services/clientes.service */
      "8ouN"); // Services


      var ComercialClientesCadastroEnderecosResolverGuard = /*#__PURE__*/function () {
        function ComercialClientesCadastroEnderecosResolverGuard(clienteService) {
          _classCallCheck(this, ComercialClientesCadastroEnderecosResolverGuard);

          this.clienteService = clienteService;
        }

        _createClass(ComercialClientesCadastroEnderecosResolverGuard, [{
          key: "resolve",
          value: function resolve(route) {
            if (route.params && route.parent.parent.params['id'] && route.params['idEndereco'] && route.params['idSituacao']) {
              return this.clienteService.getEndereco(route.parent.parent.params['id'], route.params['idEndereco'], route.params['idSituacao']);
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
              responseCode: 200,
              result: {
                id: null,
                cep: null,
                endereco: null,
                situacao: 1,
                status: 2,
                numero: null,
                complemento: null,
                referencia: null,
                bairro: null,
                cidade: null,
                uf: null,
                principal: false,
                cobranca: false,
                entrega: false,
                idAtuacaoComercial: null,
                titulo: null,
                idRegiaoEntrega: null,
                idTipoDescarga: null,
                idModoDescarga: null,
                idTipoMaterial: null,
                diasEntrega: {
                  segunda: {
                    id: 1,
                    checked: 0,
                    minimo: null,
                    maximo: null
                  },
                  terca: {
                    id: 2,
                    checked: 0,
                    minimo: null,
                    maximo: null
                  },
                  quarta: {
                    id: 3,
                    checked: 0,
                    minimo: null,
                    maximo: null
                  },
                  quinta: {
                    id: 4,
                    checked: 0,
                    minimo: null,
                    maximo: null
                  },
                  sexta: {
                    id: 5,
                    checked: 0,
                    minimo: null,
                    maximo: null
                  },
                  sabado: {
                    id: 6,
                    checked: 0,
                    minimo: null,
                    maximo: null
                  },
                  domingo: {
                    id: 7,
                    checked: 0,
                    minimo: null,
                    maximo: null
                  }
                },
                tiposVeiculos: [],
                dadosEspeciais: []
              }
            });
          }
        }]);

        return ComercialClientesCadastroEnderecosResolverGuard;
      }();

      ComercialClientesCadastroEnderecosResolverGuard.ctorParameters = function () {
        return [{
          type: src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_3__["ComercialClientesService"]
        }];
      };

      ComercialClientesCadastroEnderecosResolverGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_3__["ComercialClientesService"]])], ComercialClientesCadastroEnderecosResolverGuard);
      /***/
    },

    /***/
    "x71E":
    /*!***********************************************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/cadastro/dados-relacionamento/detalhes/detalhes.component.scss ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function x71E(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NsaWVudGVzL2NhZGFzdHJvL2RhZG9zLXJlbGFjaW9uYW1lbnRvL2RldGFsaGVzL2RldGFsaGVzLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "yQw5":
    /*!**************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/clientes/cadastro/dados-faturamento/formulario/formulario.component.html ***!
      \**************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function yQw5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<div class=\"row\" *ngIf=\"!loaderFullScreen\">\r\n  <div class=\"col\">\r\n    <div class=\"mtc-title\">Editar datos de facturación</div>\r\n    <form [formGroup]=\"form\" autocomplete=\"off\" *ngIf=\"tipoPessoa == 'F'\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"cpf\">CPF</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"cpf\"\r\n            formControlName=\"cpf\"\r\n            (input)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('cpf') + ' ' + onFieldRequired('cpf')\"\r\n            cpf [textMask]=\"{ mask: MASKS.cpf.textMask }\">\r\n          <invalid-form-control [show]=\"onFieldInvalid('cpf') == 'required'\" message=\"CPF es obligatorio.\"></invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"rg\">RG</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"rg\"\r\n            formControlName=\"rg\"\r\n            (input)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('rg') + ' ' + onFieldRequired('rg')\">\r\n          <invalid-form-control [show]=\"onFieldInvalid('rg') == 'required'\" message=\"RG es obligatorio.\"></invalid-form-control>\r\n          <invalid-form-control [show]=\"onFieldInvalid('rg') == 'maxlength'\" [message]=\"maxLengthMessages.rg\"></invalid-form-control>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"nome\">Nombre</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"nome\"\r\n            formControlName=\"nome\"\r\n            (input)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('nome') + ' ' + onFieldRequired('nome')\">\r\n          <invalid-form-control [show]=\"onFieldInvalid('nome') == 'required'\" message=\"Nome es obligatorio.\"></invalid-form-control>\r\n          <invalid-form-control [show]=\"onFieldInvalid('nome') == 'maxlength'\" [message]=\"maxLengthMessages.nome\"></invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"nome\">Apellido</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"sobrenome\"\r\n            formControlName=\"sobrenome\"\r\n            (input)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('sobrenome') + ' ' + onFieldRequired('sobrenome')\">\r\n          <invalid-form-control [show]=\"onFieldInvalid('sobrenome') == 'required'\" message=\"Sobrenome es obligatorio.\"></invalid-form-control>\r\n          <invalid-form-control [show]=\"onFieldInvalid('sobrenome') == 'maxlength'\" [message]=\"maxLengthMessages.sobrenome\"></invalid-form-control>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"tipoCadastro\">Tipo de registro</label>\r\n          <select\r\n            class=\"form-control\"\r\n            id=\"tipoCadastro\"\r\n            formControlName=\"tipoCadastro\"\r\n            (change)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('tipoCadastro') + ' ' + onFieldRequired('tipoCadastro')\">\r\n            <option value=\"\">SELECCIONE UNA OPCIÓN</option>\r\n            <option *ngFor=\"let item of tiposCadastro\" [value]=\"item.id\">{{ item.descricao }}</option>\r\n          </select>\r\n          <invalid-form-control [show]=\"onFieldInvalid('tipoCadastro') == 'required'\" message=\"Tipo de cadastro es obligatorio.\"></invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"inscricaoProdRural\">Registro de productores rurales</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"inscricaoProdRural\"\r\n            formControlName=\"inscricaoProdRural\"\r\n            (input)=\"onInput(); onInscricaoProdutorRural();\">\r\n            <invalid-form-control [show]=\"onFieldInvalid('inscricaoProdRural') == 'maxlength'\" [message]=\"maxLengthMessages.inscricaoProdRural\"></invalid-form-control>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"contribuinte\">Contribuyente</label>\r\n          <select\r\n            class=\"form-control\"\r\n            id=\"contribuinte\"\r\n            formControlName=\"contribuinte\"\r\n            (change)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('contribuinte') + ' ' + onFieldRequired('contribuinte')\">\r\n            <option value=\"\">SELECCIONE UNA OPCIÓN</option>\r\n            <option *ngFor=\"let item of contribuintes\" [value]=\"item.id\">{{ item.descricao }}</option>\r\n          </select>\r\n          <invalid-form-control [show]=\"onFieldInvalid('contribuinte') == 'required'\" message=\"Contribuinte es obligatorio.\"></invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"setorAtividade\">Sector de actividad</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"false\"\r\n            [items]=\"setorAtividades\"\r\n            [virtualScroll]=\"true\"\r\n            labelForId=\"setorAtividade\"\r\n            bindLabel=\"descricao\"\r\n            bindValue=\"id\"\r\n            formControlName=\"setorAtividade\"\r\n            (input)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('setorAtividade') + ' ' + onFieldRequired('setorAtividade')\">\r\n          </ng-select>\r\n          <invalid-form-control [show]=\"onFieldInvalid('setorAtividade') == 'required'\" message=\"Setor de atividade es obligatorio.\"></invalid-form-control>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"limiteCredito\">Limite de crédito</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"limiteCredito\"\r\n            formControlName=\"limiteCredito\"\r\n            currencyMask [options]=\"{ align: 'left', prefix: 'R$ ', thousands: '.', decimal: ',' }\"\r\n            (input)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('limiteCredito') + ' ' + onFieldRequired('limiteCredito')\">\r\n          <invalid-form-control [show]=\"onFieldInvalid('limiteCredito') == 'required'\" message=\"Limite de crédito es obligatorio.\"></invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"creditoSeguradora\">Limite de crédito (aseguradora)</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"creditoSeguradora\"\r\n            formControlName=\"creditoSeguradora\"\r\n            currencyMask [options]=\"{ align: 'left', prefix: 'R$ ', thousands: '.', decimal: ',' }\"\r\n            (input)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('creditoSeguradora') + ' ' + onFieldRequired('creditoSeguradora')\">\r\n          <invalid-form-control [show]=\"onFieldInvalid('dataInclusao') == 'required'\" message=\"Limite de crédito (seguradora) es obligatorio.\"></invalid-form-control>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"dataInclusao\">Fecha de inclusión</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"dataInclusao\"\r\n            formControlName=\"dataInclusao\"\r\n            (input)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('dataInclusao') + ' ' + onFieldRequired('dataInclusao')\">\r\n          <invalid-form-control [show]=\"onFieldInvalid('dataInclusao') == 'required'\" message=\"Data de inclusão es obligatorio.\"></invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"proximaAnaliseCredito\">Próximo análisis de crédito en</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"proximaAnaliseCredito\"\r\n            formControlName=\"proximaAnaliseCredito\"\r\n            (input)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('proximaAnaliseCredito') + ' ' + onFieldRequired('proximaAnaliseCredito')\">\r\n          <invalid-form-control [show]=\"onFieldInvalid('proximaAnaliseCredito') == 'required'\" message=\"Próxima análise de crédito es obligatorio.\"></invalid-form-control>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"quemCadastrou\">Quien se registró</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"quemCadastrou\"\r\n            formControlName=\"quemCadastrou\"\r\n            (input)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('quemCadastrou') + ' ' + onFieldRequired('quemCadastrou')\">\r\n          <invalid-form-control [show]=\"onFieldInvalid('quemCadastrou') == 'required'\" message=\"Quien se registró es obligatorio.\"></invalid-form-control>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col\">\r\n          <div class=\"custom-control custom-checkbox\">\r\n            <input\r\n              type=\"checkbox\"\r\n              class=\"custom-control-input\"\r\n              id=\"somenteCarteira\"\r\n              formControlName=\"somenteCarteira\">\r\n            <label class=\"custom-control-label\" for=\"somenteCarteira\">Facturación solo de Cartera</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col\">\r\n          <div class=\"custom-control custom-checkbox\">\r\n            <input\r\n              type=\"checkbox\"\r\n              class=\"custom-control-input\"\r\n              id=\"boletoDescontado\"\r\n              formControlName=\"boletoDescontado\">\r\n            <label class=\"custom-control-label\" for=\"boletoDescontado\">No acepta boleto con descuento</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col\">\r\n          <div class=\"custom-control custom-checkbox\">\r\n            <input\r\n              type=\"checkbox\"\r\n              class=\"custom-control-input\"\r\n              id=\"somenteAVista\"\r\n              formControlName=\"somenteAVista\">\r\n            <label class=\"custom-control-label\" for=\"somenteAVista\">cliente solo efectivo</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col\">\r\n          <div class=\"custom-control custom-checkbox\">\r\n            <input\r\n              type=\"checkbox\"\r\n              class=\"custom-control-input\"\r\n              id=\"exigePesagem\"\r\n              formControlName=\"exigePesagem\">\r\n            <label class=\"custom-control-label\" for=\"exigePesagem\">Requiere pesaje</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n    <form [formGroup]=\"form\" autocomplete=\"off\" *ngIf=\"tipoPessoa == 'J'\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-2 offset-md-10\">\r\n          <label for=\"notaCliente\">Nota del cliente \r\n            <ng-template #tooltipLabelNotaClienteTemplate>\r\n              <p class=\"text-nowrap mb-0\">Nota del cliente </p>\r\n              <p class=\"text-nowrap mb-0\">de 1 a 5</p>\r\n            </ng-template>\r\n            <i class=\"far fa-question-circle\" [tooltip]=\"tooltipLabelNotaClienteTemplate\" container=\"body\"></i>\r\n          </label>\r\n          <input type=\"text\"\r\n          class=\"form-control\"\r\n          id=\"notaCliente\"\r\n          formControlName=\"notaCliente\"\r\n          (input)=\"onInput()\"\r\n          [ngClass]=\"onFieldError('notaCliente') + ' ' + onFieldRequired('notaCliente')\">\r\n          <invalid-form-control [show]=\"onFieldInvalid('notaCliente') == 'required'\" message=\"Nota del cliente es obligatorio.\"></invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group col-md-2 offset-md-10\">\r\n          <div class=\"custom-control custom-checkbox mt-auto\">\r\n            <input\r\n            type=\"checkbox\"\r\n            class=\"custom-control-input\"\r\n            id=\"auto-update-nota\"\r\n            formControlName=\"autoUpdateNota\">\r\n            <label\r\n              class=\"custom-control-label\"\r\n              for=\"auto-update-nota\">\r\n              Fixar nota\r\n              <ng-template #tooltipAutoUpdateNotaTemplate>\r\n                <p class=\"text-nowrap mb-0\">Ao marcar esse campo</p>\r\n                <p class=\"text-nowrap mb-0\">a nota não será atualizada</p>\r\n                <p class=\"text-nowrap mb-0\">automaticamente</p>\r\n              </ng-template>\r\n              <i class=\"far fa-question-circle\" [tooltip]=\"tooltipAutoUpdateNotaTemplate\" container=\"body\"></i>\r\n            </label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"cnpj\">CNPJ</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"cnpj\"\r\n            formControlName=\"cnpj\"\r\n            (input)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('cnpj') + ' ' + onFieldRequired('cnpj')\"\r\n            cnpj [textMask]=\"{ mask: MASKS.cnpj.textMask }\">\r\n          <invalid-form-control [show]=\"onFieldInvalid('cnpj') == 'required'\" message=\"CNPJ es obligatorio.\"></invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"razaoSocial\">Razon Social</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"razaoSocial\"\r\n            formControlName=\"razaoSocial\"\r\n            (input)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('razaoSocial') + ' ' + onFieldRequired('razaoSocial')\">\r\n          <invalid-form-control [show]=\"onFieldInvalid('razaoSocial') == 'required'\" message=\"Razon Social es obligatorio.\"></invalid-form-control>\r\n          <invalid-form-control [show]=\"onFieldInvalid('razaoSocial') == 'maxlength'\" [message]=\"maxLengthRules.razaoSocial\"></invalid-form-control>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"nomeFantasia\">Nombre de fantasia</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"nomeFantasia\"\r\n            formControlName=\"nomeFantasia\"\r\n            (input)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('nomeFantasia') + ' ' + onFieldRequired('nomeFantasia')\">\r\n          <invalid-form-control [show]=\"onFieldInvalid('nomeFantasia') == 'required'\" message=\"Nombre de fantasia es obligatorio.\"></invalid-form-control>\r\n          <invalid-form-control [show]=\"onFieldInvalid('nomeFantasia') == 'maxlength'\" [message]=\"maxLengthRules.nomeFantasia\"></invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"tipoCadastro\">Tipo de registro</label>\r\n          <select\r\n            class=\"form-control\"\r\n            id=\"tipoCadastro\"\r\n            formControlName=\"tipoCadastro\"\r\n            (change)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('tipoCadastro') + ' ' + onFieldRequired('tipoCadastro')\">\r\n            <option value=\"\">SELECCIONE UNA OPCIÓN</option>\r\n            <option *ngFor=\"let item of tiposCadastro\" [value]=\"item.id\">{{ item.descricao }}</option>\r\n          </select>\r\n          <invalid-form-control [show]=\"onFieldInvalid('tipoCadastro') == 'required'\" message=\"Tipo de registro es obligatorio.\"></invalid-form-control>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"tributacao\">Régimen fiscal</label>\r\n          <select\r\n            class=\"form-control\"\r\n            id=\"tributacao\"\r\n            formControlName=\"tributacao\"\r\n            (change)=\"onInput()\">\r\n            <option value=\"\">SELECCIONE UNA OPCIÓN</option>\r\n            <option *ngFor=\"let item of regimesTributacao\" [value]=\"item.id\">{{ item.descricao }}</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"contribuinte\">Contribuinte</label>\r\n          <select\r\n            class=\"form-control\"\r\n            id=\"contribuinte\"\r\n            formControlName=\"contribuinte\"\r\n            (change)=\"onInput(); checkValidatorsInscricaoEstadual(form.value['contribuinte']); onChangeContribuinte(form.value['contribuinte'])\"\r\n            [ngClass]=\"onFieldError('contribuinte') + ' ' + onFieldRequired('contribuinte')\">\r\n            <option value=\"\">SELECCIONE UNA OPCIÓN</option>\r\n            <option *ngFor=\"let item of contribuintes\" [value]=\"item.id\">{{ item.descricao }}</option>\r\n          </select>\r\n          <invalid-form-control [show]=\"onFieldInvalid('contribuinte') == 'required'\" message=\"Contribuinte es obligatorio.\"></invalid-form-control>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"inscricaoEstadual\">Inscripción Estatal</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"inscricaoEstadual\"\r\n            formControlName=\"inscricaoEstadual\"\r\n            (input)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('inscricaoEstadual') + ' ' + onFieldRequired('inscricaoEstadual')\">\r\n          <invalid-form-control [show]=\"onFieldInvalid('inscricaoEstadual') == 'required'\" message=\"Inscrição estadual es obligatorio.\"></invalid-form-control>\r\n          <invalid-form-control [show]=\"onFieldInvalid('inscricaoEstadual') == 'maxlength'\" [message]=\"maxLengthMessages.inscricaoEstadual\"></invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"setorAtividade\">Sector de actividad</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"false\"\r\n            [items]=\"setorAtividades\"\r\n            [virtualScroll]=\"true\"\r\n            labelForId=\"setorAtividade\"\r\n            bindLabel=\"descricao\"\r\n            bindValue=\"id\"\r\n            formControlName=\"setorAtividade\"\r\n            (input)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('setorAtividade') + ' ' + onFieldRequired('setorAtividade')\">\r\n          </ng-select>\r\n          <invalid-form-control [show]=\"onFieldInvalid('setorAtividade') == 'required'\" message=\"Setor de atividade es obligatorio.\"></invalid-form-control>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"finalidadeMaterial\">Finalidade do material</label>\r\n          <select\r\n            class=\"form-control\"\r\n            id=\"finalidadeMaterial\"\r\n            formControlName=\"finalidadeMaterial\"\r\n            (change)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('finalidadeMaterial') + ' ' + onFieldRequired('finalidadeMaterial')\">\r\n            <option value=\"\">SELECCIONE UNA OPCIÓN</option>\r\n            <option *ngFor=\"let item of finalidadesMaterial\" [value]=\"item.id\">{{ item.descricao }}</option>\r\n          </select>\r\n          <invalid-form-control [show]=\"onFieldInvalid('finalidadeMaterial') == 'required'\" message=\"Finalidade do material es obligatorio.\"></invalid-form-control>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col\">\r\n          <label for=\"cnae\">CNAE (atividade principal)</label>\r\n          <div class=\"form-row\">\r\n            <div class=\"col-11\">\r\n              <ng-select\r\n                [searchable]=\"true\"\r\n                [clearable]=\"false\"\r\n                [items]=\"cnaes\"\r\n                [virtualScroll]=\"true\"\r\n                labelForId=\"cnae\"\r\n                bindLabel=\"descricao\"\r\n                bindValue=\"id\"\r\n                formControlName=\"cnae\"\r\n                (input)=\"onInput()\">\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"col-1 pt-1 d-flex justify-content-center\">\r\n              <button\r\n                type=\"button\"\r\n                class=\"btn-icon-sm\"\r\n                tooltip=\"Atividades secundárias\"\r\n                container=\"body\"\r\n                (click)=\"onAtividadesSecundarias()\">\r\n                <i [ngClass]=\"{'fa-plus': !showAtividadesSecundarias, 'fa-minus': showAtividadesSecundarias}\" class=\"fas\"></i>\r\n              </button>\r\n            </div>\r\n          </div>\r\n          <invalid-form-control [show]=\"onFieldInvalid('cnae') == 'required'\" message=\"CNAE es obligatorio.\"></invalid-form-control>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"showAtividadesSecundarias\">\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col\">\r\n            <hr class=\"my-2\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col\">\r\n            <div class=\"form-row\">\r\n              <div class=\"col-11\">\r\n                <div class=\"mtc-title\">Actividades secundarias</div>\r\n                <ng-select\r\n                  [searchable]=\"true\"\r\n                  [clearable]=\"false\"\r\n                  [items]=\"cnaes\"\r\n                  [virtualScroll]=\"true\"\r\n                  labelForId=\"cnaeSecundario\"\r\n                  bindLabel=\"descricao\"\r\n                  bindValue=\"id\"\r\n                  [(ngModel)]=\"selectedAtividadeSecundaria\"\r\n                  [ngModelOptions]=\"{ standalone: true }\">\r\n                </ng-select>\r\n              </div>\r\n              <div class=\"col-1 pt-4 d-flex justify-content-center\">\r\n                <button\r\n                  type=\"button\"\r\n                  class=\"btn-icon-sm my-auto\"\r\n                  tooltip=\"Adicionar\"\r\n                  container=\"body\"\r\n                  [disabled]=\"selectedAtividadeSecundaria == null\"\r\n                  (click)=\"onAddAtividadeSecundaria()\">\r\n                  <i class=\"fas fa-check\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div formArrayName=\"atividadesSecundarias\">\r\n          <div *ngIf=\"atividadesSecundarias.controls.length > 0\">\r\n              <div class=\"form-row\" *ngFor=\"let item of atividadesSecundarias.controls; let i = index\" [formGroupName]=\"i\">\r\n              <div class=\"form-group col\">\r\n                <div class=\"form-row\">\r\n                  <div class=\"col my-auto\">\r\n                    {{ item.value['descCnae'] | uppercase }}\r\n                    <button\r\n                      type=\"button\"\r\n                      class=\"btn-icon-sm ml-3\"\r\n                      (click)=\"onDeleteAtividadeSecundaria(i)\">\r\n                      <i class=\"fas fa-trash\"></i>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col\">\r\n            <hr class=\"my-2\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"limiteCredito\">Limite de crédito</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"limiteCredito\"\r\n            formControlName=\"limiteCredito\"\r\n            currencyMask [options]=\"{ align: 'left', prefix: 'R$ ', thousands: '.', decimal: ',' }\"\r\n            (input)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('limiteCredito') + ' ' + onFieldRequired('limiteCredito')\">\r\n          <invalid-form-control [show]=\"onFieldInvalid('limiteCredito') == 'required'\" message=\"Limite de crédito es obligatorio.\"></invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"creditoSeguradora\">Limite de crédito (seguradora)</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"creditoSeguradora\"\r\n            formControlName=\"creditoSeguradora\"\r\n            currencyMask [options]=\"{ align: 'left', prefix: 'R$ ', thousands: '.', decimal: ',' }\"\r\n            (input)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('creditoSeguradora') + ' ' + onFieldRequired('creditoSeguradora')\">\r\n          <invalid-form-control [show]=\"onFieldInvalid('dataInclusao') == 'required'\" message=\"Limite de crédito (seguradora) es obligatorio.\"></invalid-form-control>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"dataInclusao\">Fecha de inclusión</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"dataInclusao\"\r\n            formControlName=\"dataInclusao\"\r\n            (input)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('dataInclusao') + ' ' + onFieldRequired('dataInclusao')\">\r\n          <invalid-form-control [show]=\"onFieldInvalid('dataInclusao') == 'required'\" message=\"Fecha de inclusión es obligatorio.\"></invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"proximaAnaliseCredito\">Próximo análisis de crédito en</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"proximaAnaliseCredito\"\r\n            formControlName=\"proximaAnaliseCredito\"\r\n            (input)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('proximaAnaliseCredito') + ' ' + onFieldRequired('proximaAnaliseCredito')\">\r\n          <invalid-form-control [show]=\"onFieldInvalid('proximaAnaliseCredito') == 'required'\" message=\"Próxima análise de crédito es obligatorio.\"></invalid-form-control>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"quemCadastrou\">Quien se registró</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"quemCadastrou\"\r\n            formControlName=\"quemCadastrou\"\r\n            (input)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('quemCadastrou') + ' ' + onFieldRequired('quemCadastrou')\">\r\n          <invalid-form-control [show]=\"onFieldInvalid('quemCadastrou') == 'required'\" message=\"Quien se registró es obligatorio.\"></invalid-form-control>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col\">\r\n          <div class=\"custom-control custom-checkbox\">\r\n            <input\r\n              type=\"checkbox\"\r\n              class=\"custom-control-input\"\r\n              id=\"somenteCarteira\"\r\n              formControlName=\"somenteCarteira\">\r\n            <label class=\"custom-control-label\" for=\"somenteCarteira\">Facturación solo en cartera</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col\">\r\n          <div class=\"custom-control custom-checkbox\">\r\n            <input\r\n              type=\"checkbox\"\r\n              class=\"custom-control-input\"\r\n              id=\"boletoDescontado\"\r\n              formControlName=\"boletoDescontado\">\r\n            <label class=\"custom-control-label\" for=\"boletoDescontado\">No acepta boleto con descuento</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col\">\r\n          <div class=\"custom-control custom-checkbox\">\r\n            <input\r\n              type=\"checkbox\"\r\n              class=\"custom-control-input\"\r\n              id=\"somenteAVista\"\r\n              formControlName=\"somenteAVista\">\r\n            <label class=\"custom-control-label\" for=\"somenteAVista\">cliente solo efectivo</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col\">\r\n          <div class=\"custom-control custom-checkbox\">\r\n            <input\r\n              type=\"checkbox\"\r\n              class=\"custom-control-input\"\r\n              id=\"exigePesagem\"\r\n              formControlName=\"exigePesagem\">\r\n            <label class=\"custom-control-label\" for=\"exigePesagem\">Requiere pesaje</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col\">\r\n          <div class=\"custom-control custom-checkbox\">\r\n            <input\r\n              type=\"checkbox\"\r\n              class=\"custom-control-input\"\r\n              id=\"marca\"\r\n              formControlName=\"marca\">\r\n            <label class=\"custom-control-label\" for=\"marca\">Marca</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "zUZ2":
    /*!***********************************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/cadastro/contatos/detalhes/detalhes.component.scss ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function zUZ2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NsaWVudGVzL2NhZGFzdHJvL2NvbnRhdG9zL2RldGFsaGVzL2RldGFsaGVzLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=cadastro-cadastro-module-es5.js.map