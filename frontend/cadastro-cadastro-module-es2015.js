(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cadastro-cadastro-module"],{

/***/ "+MnF":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/comercial/clientes/cadastro/contatos/formulario/formulario-resolver.guard.ts ***!
  \******************************************************************************************************/
/*! exports provided: ComercialClientesCadastroContatosResolverGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialClientesCadastroContatosResolverGuard", function() { return ComercialClientesCadastroContatosResolverGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/comercial/services/clientes.service */ "8ouN");



// Services

let ComercialClientesCadastroContatosResolverGuard = class ComercialClientesCadastroContatosResolverGuard {
    constructor(clienteService) {
        this.clienteService = clienteService;
    }
    resolve(route) {
        if (route.params &&
            route.parent.parent.params.id &&
            route.params.idContato) {
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
                contatos: [],
            },
        });
    }
};
ComercialClientesCadastroContatosResolverGuard.ctorParameters = () => [
    { type: src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_3__["ComercialClientesService"] }
];
ComercialClientesCadastroContatosResolverGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_3__["ComercialClientesService"]])
], ComercialClientesCadastroContatosResolverGuard);



/***/ }),

/***/ "+NUh":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/comercial/clientes/cadastro/enderecos/detalhes/detalhes.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NsaWVudGVzL2NhZGFzdHJvL2VuZGVyZWNvcy9kZXRhbGhlcy9kZXRhbGhlcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "/m+g":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/comercial/clientes/cadastro/anexos/detalhes/detalhes.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NsaWVudGVzL2NhZGFzdHJvL2FuZXhvcy9kZXRhbGhlcy9kZXRhbGhlcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "0FK8":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/clientes/cadastro/dados-faturamento/detalhes/detalhes.component.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<div class=\"row\" *ngIf=\"dadosFaturamentoLoaded\">\r\n  <div class=\"col\">\r\n    <div class=\"mtc-title\">Datos de facturación</div>\r\n    <div *ngIf=\"dadosFaturamento.tipoPessoa == 'F'\">\r\n      <!-- <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label>CPF</label>\r\n          <div *ngIf=\"dadosFaturamento.cpf == null\">SIN INFORMACION</div>\r\n          <div *ngIf=\"dadosFaturamento.cpf != null\">{{ dadosFaturamento.cpf }}</div>\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label>RG</label>\r\n          <div *ngIf=\"dadosFaturamento.rg == null\">SIN INFORMACION</div>\r\n          <div *ngIf=\"dadosFaturamento.rg != null\">{{ dadosFaturamento.rg }}</div>\r\n        </div>\r\n      </div> -->\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label>Nombre</label>\r\n          <div *ngIf=\"dadosFaturamento.nome == null\">SIN INFORMACION</div>\r\n          <div *ngIf=\"dadosFaturamento.nome != null\">{{ dadosFaturamento.nome }}</div>\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label>Apellido</label>\r\n          <div *ngIf=\"dadosFaturamento.sobrenome == null\">SIN INFORMACION</div>\r\n          <div *ngIf=\"dadosFaturamento.sobrenome != null\">{{ dadosFaturamento.sobrenome }}</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <!-- <div class=\"form-group col-md-6\">\r\n          <label>Tipo de registro</label>\r\n          <div *ngIf=\"dadosFaturamento.descTipoCadastro == null\">SIN INFORMACION</div>\r\n          <div *ngIf=\"dadosFaturamento.descTipoCadastro != null\">{{ dadosFaturamento.descTipoCadastro }}</div>\r\n        </div> -->\r\n        <!-- <div class=\"form-group col-md-6\">\r\n          <label>Registro del productor rural</label>\r\n          <div *ngIf=\"dadosFaturamento.inscricaoProdRural == null\">SIN INFORMACION</div>\r\n          <div *ngIf=\"dadosFaturamento.inscricaoProdRural != null\">{{ dadosFaturamento.inscricaoProdRural }}</div>\r\n        </div> -->\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label>Contribuyente</label>\r\n          <div *ngIf=\"dadosFaturamento.descContribuinte == null\">SIN INFORMACION</div>\r\n          <div *ngIf=\"dadosFaturamento.descContribuinte != null\">{{ dadosFaturamento.descContribuinte }}</div>\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label>Sector de actividad</label>\r\n          <div *ngIf=\"dadosFaturamento.descSetorAtividade == null\">SIN INFORMACION</div>\r\n          <div *ngIf=\"dadosFaturamento.descSetorAtividade != null\">{{ dadosFaturamento.descSetorAtividade }}</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label>Limite de crédito</label>\r\n          <div *ngIf=\"dadosFaturamento.limiteCredito == 0\">R$ 0,00</div>\r\n          <div *ngIf=\"dadosFaturamento.limiteCredito > 0\">{{ dadosFaturamento.limiteCredito | currency:'BRL':'symbol':'1.2-2' }}</div>\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label>Limite de crédito (seguradora)</label>\r\n          <div *ngIf=\"dadosFaturamento.creditoSeguradora == 0\">R$ 0,00</div>\r\n          <div *ngIf=\"dadosFaturamento.creditoSeguradora > 0\">{{ dadosFaturamento.creditoSeguradora | currency:'BRL':'symbol':'1.2-2' }}</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label>Fecha de inclusión</label>\r\n          <div *ngIf=\"dadosFaturamento.dataInclusao == null\">Sin informacion</div>\r\n          <div *ngIf=\"dadosFaturamento.dataInclusao != null\">{{ dadosFaturamento.dataInclusao }}</div>\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label>Próximo análisis del crédito en</label>\r\n          <div *ngIf=\"dadosFaturamento.proximaAnaliseCredito == null\">R$ 0,00</div>\r\n          <div *ngIf=\"dadosFaturamento.proximaAnaliseCredito != null\">{{ dadosFaturamento.proximaAnaliseCredito }}</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label>Quien registro</label>\r\n          <div *ngIf=\"dadosFaturamento.quemCadastrou == null\">Sin informacion</div>\r\n          <div *ngIf=\"dadosFaturamento.quemCadastrou != null\">{{ dadosFaturamento.quemCadastrou }}</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col\">\r\n          <label class=\"d-flex\">\r\n            <div class=\"mr-2\">\r\n              <i class=\"fas fa-times-circle text-danger\" *ngIf=\"dadosFaturamento.somenteCarteira == 0\"></i>\r\n              <i class=\"fas fa-check-circle text-success\" *ngIf=\"dadosFaturamento.somenteCarteira == 1\"></i>\r\n            </div>\r\n            <span>Facturación solo de cartera</span>\r\n          </label>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col\">\r\n          <label class=\"d-flex\">\r\n            <div class=\"mr-2\">\r\n              <i class=\"fas fa-times-circle text-danger\" *ngIf=\"dadosFaturamento.boletoDescontado == 0\"></i>\r\n              <i class=\"fas fa-check-circle text-success\" *ngIf=\"dadosFaturamento.boletoDescontado == 1\"></i>\r\n            </div>\r\n            <span>No acepta boleto con descuento</span>\r\n          </label>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col\">\r\n          <label class=\"d-flex\">\r\n            <div class=\"mr-2\">\r\n              <i class=\"fas fa-times-circle text-danger\" *ngIf=\"dadosFaturamento.somenteAVista == 0\"></i>\r\n              <i class=\"fas fa-check-circle text-success\" *ngIf=\"dadosFaturamento.somenteAVista == 1\"></i>\r\n            </div>\r\n            <span>cliente solo efectivo</span>\r\n          </label>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col\">\r\n          <label class=\"d-flex\">\r\n            <div class=\"mr-2\">\r\n              <i class=\"fas fa-times-circle text-danger\" *ngIf=\"dadosFaturamento.exigePesagem == 0\"></i>\r\n              <i class=\"fas fa-check-circle text-success\" *ngIf=\"dadosFaturamento.exigePesagem == 1\"></i>\r\n            </div>\r\n            <span>Requiere pesaje</span>\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"dadosFaturamento.tipoPessoa == 'J'\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6 offset-md-6\">\r\n          <label>Nota de Cliente</label>\r\n          <div *ngIf=\"dadosFaturamento.notaCliente == null\">SIN INFORMACION</div>\r\n          <div *ngIf=\"dadosFaturamento.notaCliente >=1 && dadosFaturamento.notaCliente <2\"><i class=\"fas fa-star\"></i></div>\r\n          <div *ngIf=\"dadosFaturamento.notaCliente >=2 && dadosFaturamento.notaCliente <3\"><i class=\"fas fa-star\"></i><i class=\"fas fa-star\"></i></div>\r\n          <div *ngIf=\"dadosFaturamento.notaCliente >=3 && dadosFaturamento.notaCliente <4\"><i class=\"fas fa-star\"></i><i class=\"fas fa-star\"></i><i class=\"fas fa-star\"></i></div>\r\n          <div *ngIf=\"dadosFaturamento.notaCliente >=4 && dadosFaturamento.notaCliente <5\"><i class=\"fas fa-star\"></i><i class=\"fas fa-star\"></i><i class=\"fas fa-star\"></i><i class=\"fas fa-star\"></i></div>\r\n          <div *ngIf=\"dadosFaturamento.notaCliente >= 5\"><i class=\"fas fa-star\"></i><i class=\"fas fa-star\"></i><i class=\"fas fa-star\"></i><i class=\"fas fa-star\"></i><i class=\"fas fa-star\"></i></div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <!-- <div class=\"form-group col-md-6\">\r\n          <label>CNPJ</label>\r\n          <div *ngIf=\"dadosFaturamento.cnpj == null\">SIN INFORMACION</div>\r\n          <div *ngIf=\"dadosFaturamento.cnpj != null\">{{ dadosFaturamento.cnpj }}</div>\r\n        </div> -->\r\n        <div class=\"form-group col-md-6\">\r\n          <label>Razon Social</label>\r\n          <div *ngIf=\"dadosFaturamento.razaoSocial == null\">SIN INFORMACION</div>\r\n          <div *ngIf=\"dadosFaturamento.razaoSocial != null\">{{ dadosFaturamento.razaoSocial }}</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label>Nombre de fantasia</label>\r\n          <div *ngIf=\"dadosFaturamento.nomeFantasia == null\">SIN INFORMACION</div>\r\n          <div *ngIf=\"dadosFaturamento.nomeFantasia != null\">{{ dadosFaturamento.nomeFantasia }}</div>\r\n        </div>\r\n        <!-- <div class=\"form-group col-md-6\">\r\n          <label>Tipo de registro</label>\r\n          <div *ngIf=\"dadosFaturamento.descTipoCadastro == null\">SIN INFORMACION</div>\r\n          <div *ngIf=\"dadosFaturamento.descTipoCadastro != null\">{{ dadosFaturamento.descTipoCadastro }}</div>\r\n        </div> -->\r\n      </div>\r\n      <!-- <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label>Régimen fiscal</label>\r\n          <div *ngIf=\"dadosFaturamento.descTributacao == null\">SIN INFORMACION</div>\r\n          <div *ngIf=\"dadosFaturamento.descTributacao != null\">{{ dadosFaturamento.descTributacao }}</div>\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label>Contribuyente</label>\r\n          <div *ngIf=\"dadosFaturamento.descContribuinte == null\">SIN INFORMACION</div>\r\n          <div *ngIf=\"dadosFaturamento.descContribuinte != null\">{{ dadosFaturamento.descContribuinte }}</div>\r\n        </div>\r\n      </div> -->\r\n      <div class=\"form-row\">\r\n        <!-- <div class=\"form-group col-md-6\">\r\n          <label>Inscripción Estatal</label>\r\n          <div *ngIf=\"dadosFaturamento.inscricaoEstadual == null\">SIN INFORMACION</div>\r\n          <div *ngIf=\"dadosFaturamento.inscricaoEstadual != null\">{{ dadosFaturamento.inscricaoEstadual }}</div>\r\n        </div> -->\r\n        <div class=\"form-group col-md-6\">\r\n          <label>Sector empresarial</label>\r\n          <div *ngIf=\"dadosFaturamento.descSetorAtividade == null\">SIN INFORMACION</div>\r\n          <div *ngIf=\"dadosFaturamento.descSetorAtividade != null\">{{ dadosFaturamento.descSetorAtividade }}</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <!-- <div class=\"form-group col-md-6\">\r\n          <label>Propósito del material</label>\r\n          <div *ngIf=\"dadosFaturamento.descFinalidadeMaterial == null\">SIN INFORMACION</div>\r\n          <div *ngIf=\"dadosFaturamento.descFinalidadeMaterial != null\">{{ dadosFaturamento.descFinalidadeMaterial }}</div>\r\n        </div> -->\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <!-- <div class=\"form-group col\">\r\n          <label>CNAE (atividade principal)</label>\r\n          <div *ngIf=\"dadosFaturamento.descCnae == null\">SIN INFORMACION</div>\r\n          <div *ngIf=\"dadosFaturamento.descCnae != null\">\r\n            {{ dadosFaturamento.descCnae | uppercase }}\r\n          </div>\r\n        </div> -->\r\n      </div>\r\n      <!-- <div class=\"form-row\">\r\n        <div class=\"form-group col mb-3\">\r\n          <label>Actividades secundarias</label>\r\n          <div *ngIf=\"dadosFaturamento.atividadesSecundarias.length == 0\">SIN INFORMACION</div>\r\n          <div *ngIf=\"dadosFaturamento.atividadesSecundarias.length > 0\">\r\n            <ul class=\"list-unstyled mb-0\">\r\n              <li\r\n                class=\"mb-1\"\r\n                *ngFor=\"let item of dadosFaturamento.atividadesSecundarias\">\r\n                {{ item.descCnae | uppercase }}\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div> -->\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label>Limite de crédito</label>\r\n          <div *ngIf=\"dadosFaturamento.limiteCredito == 0\">R$ 0,00</div>\r\n          <div *ngIf=\"dadosFaturamento.limiteCredito > 0\">{{ dadosFaturamento.limiteCredito | currency:'BRL':'symbol':'1.2-2' }}</div>\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label>Limite de crédito (seguradora)</label>\r\n          <div *ngIf=\"dadosFaturamento.creditoSeguradora == 0\">R$ 0,00</div>\r\n          <div *ngIf=\"dadosFaturamento.creditoSeguradora > 0\">{{ dadosFaturamento.creditoSeguradora | currency:'BRL':'symbol':'1.2-2' }}</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label>Fecha de inclusión</label>\r\n          <div *ngIf=\"dadosFaturamento.dataInclusao == null\">Sin informacion</div>\r\n          <div *ngIf=\"dadosFaturamento.dataInclusao != null\">{{ dadosFaturamento.dataInclusao }}</div>\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label>Próximo análisis de crédito en</label>\r\n          <div *ngIf=\"dadosFaturamento.proximaAnaliseCredito == null\">R$ 0,00</div>\r\n          <div *ngIf=\"dadosFaturamento.proximaAnaliseCredito != null\">{{ dadosFaturamento.proximaAnaliseCredito }}</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label>Quien registro</label>\r\n          <div *ngIf=\"dadosFaturamento.quemCadastrou == null\">Sin informacion</div>\r\n          <div *ngIf=\"dadosFaturamento.quemCadastrou != null\">{{ dadosFaturamento.quemCadastrou }}</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col\">\r\n          <label class=\"d-flex\">\r\n            <div class=\"mr-2\">\r\n              <i class=\"fas fa-times-circle text-danger\" *ngIf=\"dadosFaturamento.somenteCarteira == 0\"></i>\r\n              <i class=\"fas fa-check-circle text-success\" *ngIf=\"dadosFaturamento.somenteCarteira == 1\"></i>\r\n            </div>\r\n            <span>Facturación solo en cartera</span>\r\n          </label>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col\">\r\n          <label class=\"d-flex\">\r\n            <div class=\"mr-2\">\r\n              <i class=\"fas fa-times-circle text-danger\" *ngIf=\"dadosFaturamento.boletoDescontado == 0\"></i>\r\n              <i class=\"fas fa-check-circle text-success\" *ngIf=\"dadosFaturamento.boletoDescontado == 1\"></i>\r\n            </div>\r\n            <span>No acepta boleto con descuento</span>\r\n          </label>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col\">\r\n          <label class=\"d-flex\">\r\n            <div class=\"mr-2\">\r\n              <i class=\"fas fa-times-circle text-danger\" *ngIf=\"dadosFaturamento.somenteAVista == 0\"></i>\r\n              <i class=\"fas fa-check-circle text-success\" *ngIf=\"dadosFaturamento.somenteAVista == 1\"></i>\r\n            </div>\r\n            <span>cliente solo efectivo</span>\r\n          </label>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col\">\r\n          <label class=\"d-flex\">\r\n            <div class=\"mr-2\">\r\n              <i class=\"fas fa-times-circle text-danger\" *ngIf=\"dadosFaturamento.exigePesagem == 0\"></i>\r\n              <i class=\"fas fa-check-circle text-success\" *ngIf=\"dadosFaturamento.exigePesagem == 1\"></i>\r\n            </div>\r\n            <span>Requiere pesaje</span>\r\n          </label>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col mb-md-0\">\r\n          <label class=\"d-flex\">\r\n            <div class=\"mr-2\">\r\n              <i class=\"fas fa-times-circle text-danger\" *ngIf=\"dadosFaturamento.marca == 0\"></i>\r\n              <i class=\"fas fa-check-circle text-success\" *ngIf=\"dadosFaturamento.marca == 1\"></i>\r\n            </div>\r\n            <span>Marca</span>\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "0TGB":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/comercial/clientes/cadastro/anexos/formulario/formulario.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ComercialClientesCadastroAnexosFormularioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialClientesCadastroAnexosFormularioComponent", function() { return ComercialClientesCadastroAnexosFormularioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./formulario.component.html */ "gtjB");
/* harmony import */ var _formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formulario.component.scss */ "BPCR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/core/auth.service */ "yxCR");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _cadastro_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../cadastro.service */ "N70Q");
/* harmony import */ var src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/modules/comercial/services/clientes.service */ "8ouN");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_modules_comercial_gestao_contratos_comerciais_contratos_comerciais_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/modules/comercial/gestao/contratos-comerciais/contratos-comerciais.service */ "pK9/");
/* harmony import */ var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/modules/confirm-modal/confirm-modal.service */ "FOez");







// Services







let ComercialClientesCadastroAnexosFormularioComponent = class ComercialClientesCadastroAnexosFormularioComponent {
    constructor(confirmModalService, contratosComerciaisService, router, activatedRoute, formBuilder, authService, cadastroService, clientesService, pnotifyService, location) {
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
        this.API = `http://23.254.204.187/api/comercial/clientes/cadastro/upload/anexo`;
        this.user = this.authService.getCurrentUser();
        this.urlAnexo = [];
        // public uploader: FileUploader = new FileUploader({ url: this.API });
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
            hover: false,
        };
        this.showAnexos = false;
        this.tiposAnexo = [];
        this.tiposAnexoF = [
            {
                id: 2,
                descricao: 'Identificação (CNH ou RG)',
                tipoAnexo: 'Identificacao'
            },
            {
                id: 4,
                descricao: 'Comprovante de endereço',
                tipoAnexo: 'Comprovante'
            }
        ];
        this.tiposAnexoJ = [
            {
                id: 1,
                descricao: 'Contrato social',
                tipoAnexo: 'ContratoSocial'
            },
            {
                id: 2,
                descricao: 'Situação Cadastral',
                tipoAnexo: 'SituacaoCadastral'
            },
            {
                id: 3,
                descricao: 'Sintegra',
                tipoAnexo: 'Sintegra'
            },
            {
                id: 4,
                descricao: 'Serasa',
                tipoAnexo: 'Serasa'
            },
            {
                id: 5,
                descricao: 'Impostos',
                tipoAnexo: 'Impostos'
            },
            {
                id: 6,
                descricao: 'Outros',
                tipoAnexo: 'Outros'
            }
        ];
        this.pnotifyService.getPNotify();
    }
    ngOnInit() {
        this.activatedRoute.parent.parent.params.subscribe(params => {
            this.clientesService
                .getAnexos(params['id'])
                .subscribe((response) => {
                this.codCliente = params['id'];
                console.log(response);
                if (response['success'] === true && response['data'].length > 0) {
                    this.tipoCliente = response['data'][0]['tipoCliente'];
                    this.setFormValidators(response['data']);
                }
                else {
                    this.tipoCliente = response['tipoCliente'];
                    this.clientesService.getDetalhes(this.codCliente).subscribe((response) => {
                        this.tipoCliente = response['data']['tipoPessoa'];
                        this.setFormValidators(null);
                    });
                }
            });
        });
        this.cancelSubscription();
        this.submitSubscription();
    }
    ngOnDestroy() {
        this.subscriptionCancel.unsubscribe();
        this.subscriptionSubmit.unsubscribe();
    }
    cancelSubscription() {
        this.subscriptionCancel = this.cadastroService.notifyCancelObservable$.subscribe((response) => {
            if (response) {
                this.onCancel();
            }
        });
    }
    submitSubscription() {
        this.subscriptionSubmit = this.cadastroService.notifySubmitObservable$.subscribe((response) => {
            if (response) {
                this.onSubmit();
            }
        });
    }
    setFormValidators(anexos) {
        if (anexos != null) {
            if (this.tipoCliente == 'F') {
                for (let i = 0; i < anexos.length; i++) {
                    if (anexos[i]['idTipo'] == 2) {
                        this.possuiIdentificacao = true;
                    }
                    else if (anexos[i]['idTipo'] == 4) {
                        this.possuiComprovanteEndereco = true;
                    }
                }
                if (this.possuiIdentificacao && this.possuiComprovanteEndereco) {
                    this.handleAnexosUploaded();
                }
                else {
                    for (let i = 0; i < this.tiposAnexoF.length; i++) {
                        if (this.possuiIdentificacao && this.tiposAnexoF[i]['id'] == 2) {
                            this.tiposAnexoF.splice(i, 1);
                        }
                        if (this.possuiComprovanteEndereco &&
                            this.tiposAnexoF[i]['id'] == 4) {
                            this.tiposAnexoF.splice(i, 1);
                        }
                    }
                    this.tiposAnexo = this.tiposAnexoF;
                    this.setFormBuilder();
                }
            }
            else if (this.tipoCliente == 'J') {
                for (let i = 0; i < anexos.length; i++) {
                    if (anexos[i]['idTipo'] == 1) {
                        this.possuiContratoSocial = true;
                    }
                    else if (anexos[i]['idTipo'] == 2) {
                        this.possuiSituacaoCadastral = true;
                    }
                    else if (anexos[i]['idTipo'] == 3) {
                        this.possuiSintegra = true;
                    }
                    else if (anexos[i]['idTipo'] == 4) {
                        this.possuiSerasa = true;
                    }
                    else if (anexos[i]['idTipo'] == 5) {
                        this.possuiImpostos = true;
                    }
                    else if (anexos[i]['idTipo'] == 6) {
                        this.possuiOutros = true;
                    }
                }
                if (this.possuiSituacaoCadastral &&
                    this.possuiContratoSocial &&
                    this.possuiImpostos &&
                    this.possuiSintegra &&
                    this.possuiSerasa &&
                    this.possuiOutros) {
                    this.handleAnexosUploaded();
                }
                else {
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
        }
        else {
            if (this.tipoCliente == 'F') {
                this.tiposAnexo = this.tiposAnexoF;
            }
            else if (this.tipoCliente == 'J') {
                this.tiposAnexo = this.tiposAnexoJ;
            }
            this.setFormBuilder();
        }
    }
    handleAnexosUploaded() {
        this.pnotifyService.notice('O cliente já possui os anexos necessários.');
        this.location.back();
    }
    setFormBuilder() {
        this.form = this.formBuilder.group({
            tipoAnexo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            tipoCliente: this.tipoCliente,
            codCliente: this.codCliente,
            anexos: this.formBuilder.array([])
        });
        this.loaderFullScreen = false;
    }
    formCanDeactivate() {
        if (this.formChanged) {
            if (confirm('Este cliente no forma parte de tu cartera?')) {
                return true;
            }
            else {
                return false;
            }
        }
        return true;
    }
    onFieldError(field) {
        if (this.onFieldInvalid(field)) {
            return 'is-invalid';
        }
        return '';
    }
    onFieldInvalid(field) {
        field = this.form.get(field);
        return field.status == 'INVALID' && field.touched;
    }
    onFieldRequired(field) {
        let required = false;
        let formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        if (this.form.controls[field].validator) {
            let validationResult = this.form.controls[field].validator(formControl);
            required =
                validationResult !== null && validationResult.required === true;
        }
        if (required) {
            return 'is-required';
        }
    }
    onChange() {
        this.formChanged = true;
    }
    onCancel() {
        this.location.back();
    }
    handleUploadError() {
        this.pnotifyService.error('Erro no upload do anexo. Tente novamente!');
        this.cadastroService.onNotifyLoaded(false);
    }
    // Formulário Preenchido para edição ou novo formulário
    getAnexos(codCliente) {
        this.loaderNavbar = true;
        this.showAnexos = false;
        this.clientesService
            .getAnexos(codCliente)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(() => {
            this.loaderNavbar = false;
            this.showAnexos = true;
        }))
            .subscribe({
            next: (response) => {
                if (response.hasOwnProperty('success') && response.success === true) {
                    this.setAnexos(response.data);
                    this.urlAnexo = response.data;
                }
            },
            error: (error) => {
                if (error['error'].hasOwnProperty('mensagem')) {
                    this.pnotifyService.error(error.error.mensagem);
                }
                else {
                    this.pnotifyService.error();
                }
            }
        });
    }
    setAnexos(anexos) {
        if (anexos.length > 0) {
            for (let i = 0; i < anexos.length; i++) {
                this.onAddAnexos(anexos[i], true);
            }
        }
    }
    get anexos() {
        return this.form.get('anexos');
    }
    onAddAnexos(anexo, manipulateForm) {
        if (this.checkAnexoExists(anexo) === false) {
            this.anexos.push(this.formBuilder.group({
                codAnexo: [anexo.codAnexo],
                nomeAnexo: [anexo.nomeAnexo],
                linkAnexo: [anexo.linkAnexo],
                urlAnexo: [anexo.urlAnexo],
            }));
            console.log(this.anexos);
            if (manipulateForm) {
                this.form.markAsTouched();
                this.form.markAsDirty();
            }
        }
    }
    checkAnexoExists(anexo) {
        return this.form.value.anexos.some((el) => {
            return el.codAnexo === anexo.codAnexo || el.nomeAnexo == anexo.nomeAnexo;
        });
    }
    appendFile(files) {
        const reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = () => {
            const fd = new FormData();
            fd.append('file', files[0]);
            this.formData.push(fd);
            this.anexos.push(this.formBuilder.group({
                nomeAnexo: [files[0]['name']],
                linkAnexo: [reader.result]
            }));
            console.log(this.anexos);
            if (this.showAnexos === false) {
                this.showAnexos = true;
            }
        };
    }
    onPostAnexos(data) {
        /* const id = this.form.value.codMaterial; */
        this.formData.forEach((item) => {
            data = data;
            this.clientesService
                .uploadAnexo(data)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(() => {
                this.cadastroService.onNotifyLoaded(false);
            }))
                .subscribe({
                next: (response) => {
                    if (response.hasOwnProperty('success')) {
                        this.pnotifyService.success();
                        this.location.back();
                    }
                },
                error: (error) => {
                    if (error['error'].hasOwnProperty('mensagem')) {
                        this.pnotifyService.error(error.error.mensagem);
                    }
                    else {
                        this.pnotifyService.error();
                    }
                }
            });
        });
    }
    onDeleteAnexo(codAnexo, index) {
        this.confirmDelete().subscribe((r) => {
            if (codAnexo) {
                this.loaderNavbar = true;
                this.clientesService
                    .deleteAnexo(codAnexo)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(() => {
                    this.loaderNavbar = false;
                }))
                    .subscribe({
                    next: (response) => {
                        if (response.hasOwnProperty('success') &&
                            response.success === true) {
                            r ? this.deleteDocumento(index) : null;
                        }
                        else if (response.hasOwnProperty('success') &&
                            response.success === false &&
                            response.hasOwnProperty('mensagem')) {
                            this.pnotifyService.error(response.mensagem);
                        }
                        else {
                            this.pnotifyService.error();
                        }
                    },
                    error: (error) => {
                        if (error['error'].hasOwnProperty('mensagem')) {
                            this.pnotifyService.error(error.error.mensagem);
                        }
                        else {
                            this.pnotifyService.error();
                        }
                    }
                });
            }
            else {
                r ? this.deleteDocumento(index) : null;
                this.formData.splice(index, 1);
            }
        });
    }
    deleteDocumento(index) {
        this.anexos.removeAt(index);
        this.form.markAsTouched();
        this.form.markAsDirty();
    }
    onSubmit() {
        if (this.form.valid && this.formData.length > 0) {
            this.cadastroService.onNotifyLoaded(true);
            let tipoAnexo;
            for (let i = 0; i < this.tiposAnexo.length; i++) {
                if (this.tiposAnexo[i]['id'] == this.form.value['tipoAnexo']) {
                    tipoAnexo = this.tiposAnexo[i]['tipoAnexo'];
                }
            }
            this.onPostAnexos(this.form.value);
        }
        else {
            this.pnotifyService.notice('Há campos faltando.');
        }
    }
    navegarAnexo(anexo) {
        this.router
            .navigate([], {
            relativeTo: this.activatedRoute,
        })
            .then((result) => {
            window.open(`${anexo.value.urlAnexo}`, '_blank');
        });
    }
    confirmDelete() {
        return this.confirmModalService.showConfirm('delete', 'Confirmar exclusão', 'Deseja realmente prosseguir com a exclusão do registro?', 'Cancelar', 'Confirmar');
    }
};
ComercialClientesCadastroAnexosFormularioComponent.ctorParameters = () => [
    { type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_13__["ConfirmModalService"] },
    { type: src_app_modules_comercial_gestao_contratos_comerciais_contratos_comerciais_service__WEBPACK_IMPORTED_MODULE_12__["ComercialGestaoContratosComerciaisService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: _cadastro_service__WEBPACK_IMPORTED_MODULE_9__["ComercialClientesCadastroService"] },
    { type: src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_10__["ComercialClientesService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }
];
ComercialClientesCadastroAnexosFormularioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-clientes-cadastro-anexos-formulario',
        template: _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_13__["ConfirmModalService"],
        src_app_modules_comercial_gestao_contratos_comerciais_contratos_comerciais_service__WEBPACK_IMPORTED_MODULE_12__["ComercialGestaoContratosComerciaisService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
        src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
        _cadastro_service__WEBPACK_IMPORTED_MODULE_9__["ComercialClientesCadastroService"],
        src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_10__["ComercialClientesService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
], ComercialClientesCadastroAnexosFormularioComponent);



/***/ }),

/***/ "0gs9":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/clientes/cadastro/informacoes-comerciais/detalhes/detalhes.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<div class=\"row\" *ngIf=\"infosComerciaisLoaded\">\r\n  <div class=\"col\">\r\n    <div class=\"mtc-title\">Informações comerciais</div>\r\n    <ul class=\"list-group\" *ngIf=\"infosComerciais.length > 0\">\r\n      <li class=\"list-group-item\" *ngFor=\"let item of infosComerciais\">\r\n        <b>{{ item.descricao }}</b>\r\n      </li>\r\n    </ul>\r\n    <div class=\"row py-5 my-5\" *ngIf=\"infosComerciais.length == 0\">\r\n      <div class=\"col\">\r\n        <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "1Ob8":
/*!************************************************************************!*\
  !*** ./src/app/modules/comercial/clientes/cadastro/cadastro.module.ts ***!
  \************************************************************************/
/*! exports provided: ComercialClientesCadastroModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialClientesCadastroModule", function() { return ComercialClientesCadastroModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "978R");
/* harmony import */ var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/accordion */ "lQde");
/* harmony import */ var ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/timepicker */ "M3cK");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular2-text-mask */ "UVXo");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ng_brazil__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-brazil */ "hTrW");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-currency-mask */ "D5nU");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-file-upload */ "pYyI");
/* harmony import */ var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/pipes/pipes.module */ "9Xeq");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var _cadastro_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./cadastro-routing.module */ "Wgoc");
/* harmony import */ var _cadastro_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./cadastro.component */ "L/8C");
/* harmony import */ var _dados_faturamento_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dados-faturamento/detalhes/detalhes.component */ "fjd7");
/* harmony import */ var _dados_faturamento_formulario_formulario_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dados-faturamento/formulario/formulario.component */ "8yz0");
/* harmony import */ var _enderecos_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./enderecos/detalhes/detalhes.component */ "QOcb");
/* harmony import */ var _enderecos_formulario_formulario_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./enderecos/formulario/formulario.component */ "n1L9");
/* harmony import */ var _contatos_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./contatos/detalhes/detalhes.component */ "qJk7");
/* harmony import */ var _contatos_formulario_formulario_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./contatos/formulario/formulario.component */ "nF7G");
/* harmony import */ var _dados_relacionamento_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./dados-relacionamento/detalhes/detalhes.component */ "AZRv");
/* harmony import */ var _dados_relacionamento_formulario_formulario_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./dados-relacionamento/formulario/formulario.component */ "1kjR");
/* harmony import */ var _potencial_compra_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./potencial-compra/detalhes/detalhes.component */ "KWqw");
/* harmony import */ var _potencial_compra_formulario_formulario_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./potencial-compra/formulario/formulario.component */ "4zD7");
/* harmony import */ var _anexos_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./anexos/detalhes/detalhes.component */ "PPg3");
/* harmony import */ var _anexos_formulario_formulario_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./anexos/formulario/formulario.component */ "0TGB");
/* harmony import */ var _filial_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./filial/detalhes/detalhes.component */ "sveC");
/* harmony import */ var _travas_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./travas/detalhes/detalhes.component */ "igIG");
/* harmony import */ var _informacoes_financeiras_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./informacoes-financeiras/detalhes/detalhes.component */ "QPni");
/* harmony import */ var _informacoes_comerciais_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./informacoes-comerciais/detalhes/detalhes.component */ "CelN");




// ngx-bootstrap



// ng-select

// ng-brazil


// ng2-currency-mask

// ng2-file-upload

// Modules




// Components

















let ComercialClientesCadastroModule = class ComercialClientesCadastroModule {
};
ComercialClientesCadastroModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _cadastro_component__WEBPACK_IMPORTED_MODULE_16__["ComercialClientesCadastroComponent"],
            _dados_faturamento_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_17__["ComercialClientesCadastroDadosFaturamentoDetalhesComponent"],
            _dados_faturamento_formulario_formulario_component__WEBPACK_IMPORTED_MODULE_18__["ComercialClientesCadastroDadosFaturamentoFormularioComponent"],
            _enderecos_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_19__["ComercialClientesCadastroEnderecosDetalhesComponent"],
            _enderecos_formulario_formulario_component__WEBPACK_IMPORTED_MODULE_20__["ComercialClientesCadastroEnderecosFormularioComponent"],
            _contatos_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_21__["ComercialClientesCadastroContatosDetalhesComponent"],
            _contatos_formulario_formulario_component__WEBPACK_IMPORTED_MODULE_22__["ComercialClientesCadastroContatosFormularioComponent"],
            _dados_relacionamento_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_23__["ComercialClientesCadastroDadosRelacionamentoDetalhesComponent"],
            _dados_relacionamento_formulario_formulario_component__WEBPACK_IMPORTED_MODULE_24__["ComercialClientesCadastroDadosRelacionamentoFormularioComponent"],
            _potencial_compra_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_25__["ComercialClientesCadastroPotencialCompraDetalhesComponent"],
            _potencial_compra_formulario_formulario_component__WEBPACK_IMPORTED_MODULE_26__["ComercialClientesCadastroPotencialCompraFormularioComponent"],
            _anexos_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_27__["ComercialClientesCadastroAnexosDetalhesComponent"],
            _anexos_formulario_formulario_component__WEBPACK_IMPORTED_MODULE_28__["ComercialClientesCadastroAnexosFormularioComponent"],
            _filial_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_29__["ComercialClientesCadastroFilialDetalhesComponent"],
            _travas_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_30__["ComercialClientesCadastroTravasDetalhesComponent"],
            _informacoes_financeiras_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_31__["ComercialClientesCadastroInfosFinanceirasDetalhesComponent"],
            _informacoes_comerciais_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_32__["ComercialClientesCadastroInfosComerciaisDetalhesComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"].forRoot(),
            ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_5__["AccordionModule"].forRoot(),
            ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_6__["TimepickerModule"].forRoot(),
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
            angular2_text_mask__WEBPACK_IMPORTED_MODULE_8__["TextMaskModule"],
            ng_brazil__WEBPACK_IMPORTED_MODULE_9__["NgBrazil"],
            ng2_currency_mask__WEBPACK_IMPORTED_MODULE_10__["CurrencyMaskModule"],
            ng2_file_upload__WEBPACK_IMPORTED_MODULE_11__["FileUploadModule"],
            src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_12__["PipesModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_14__["TemplatesModule"].forRoot(),
            _cadastro_routing_module__WEBPACK_IMPORTED_MODULE_15__["ComercialCadastrosRoutingModule"]
        ]
    })
], ComercialClientesCadastroModule);



/***/ }),

/***/ "1kjR":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/clientes/cadastro/dados-relacionamento/formulario/formulario.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: ComercialClientesCadastroDadosRelacionamentoFormularioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialClientesCadastroDadosRelacionamentoFormularioComponent", function() { return ComercialClientesCadastroDadosRelacionamentoFormularioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./formulario.component.html */ "8M0X");
/* harmony import */ var _formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formulario.component.scss */ "W5BC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _formulario_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./formulario.service */ "iMMo");
/* harmony import */ var _cadastro_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../cadastro.service */ "N70Q");
/* harmony import */ var src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/modules/comercial/services/clientes.service */ "8ouN");








// Services




let ComercialClientesCadastroDadosRelacionamentoFormularioComponent = class ComercialClientesCadastroDadosRelacionamentoFormularioComponent {
    constructor(activatedRoute, formBuilder, formService, cadastroService, location, clientesService, pnotifyService) {
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
    ngOnInit() {
        this.cancelSubscription();
        this.submitSubscription();
        if (this.activatedRoute.snapshot.data['data']['responseCode'] === 200) {
            this.getFormFields();
            this.setFormBuilder(this.activatedRoute.snapshot.data['data']['result']);
            this.activatedRoute.parent.parent.params.subscribe(params => {
                this.codCliente = params['id'];
            });
        }
        else {
            this.pnotifyService.error();
            this.location.back();
        }
    }
    ngAfterViewInit() {
        this.cadastroService.onNotifyLoaded(true);
    }
    ngOnDestroy() {
        this.subscriptionCancel.unsubscribe();
        this.subscriptionSubmit.unsubscribe();
    }
    getFormFields() {
        this.formService
            .loadDepencies()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.loaderFullScreen = false;
            this.cadastroService.onNotifyLoaded(false);
        }))
            .subscribe({
            next: (response) => {
                if (response[0]['responseCode'] === 200) {
                    this.tiposAtendimento = response[0]['result'];
                }
                else {
                    this.handleFormFieldsError();
                }
                if (response[1]['responseCode'] === 200) {
                    this.periodos = response[1]['result'];
                }
                else {
                    this.handleFormFieldsError();
                }
                if (response[2]['responseCode'] === 200) {
                    this.frequenciaContatos = response[2]['result'];
                }
                else {
                    this.handleFormFieldsError();
                }
                if (response[3]['responseCode'] === 200) {
                    this.frequenciaVisitas = response[3]['result'];
                }
                else {
                    this.handleFormFieldsError();
                }
                if (response[4]['responseCode'] === 200) {
                    this.origensContato = response[4]['result'];
                }
                else {
                    this.handleFormFieldsError();
                }
            },
            error: (error) => {
                this.handleFormFieldsError();
            }
        });
    }
    handleFormFieldsError() {
        this.pnotifyService.error();
        this.location.back();
    }
    setFormBuilder(data) {
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
    cancelSubscription() {
        this.subscriptionCancel = this.cadastroService.notifyCancelObservable$.subscribe((response) => {
            if (response) {
                this.onCancel();
            }
        });
    }
    submitSubscription() {
        this.subscriptionSubmit = this.cadastroService.notifySubmitObservable$.subscribe((response) => {
            if (response) {
                this.onSubmit();
            }
        });
    }
    onFieldError(field) {
        if (this.onFieldInvalid(field)) {
            return 'is-invalid';
        }
        return '';
    }
    onFieldInvalid(field) {
        field = this.form.get(field);
        return field.status == 'INVALID' && field.touched;
    }
    onFieldRequired(field) {
        let required = false;
        let formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        if (this.form.controls[field].validator) {
            let validationResult = this.form.controls[field].validator(formControl);
            required =
                validationResult !== null && validationResult.required === true;
        }
        if (required) {
            return 'is-required';
        }
    }
    onInput() {
        this.formChanged = true;
    }
    formCanDeactivate() {
        if (this.formChanged) {
            if (confirm('Este cliente no forma parte de tu cartera?')) {
                return true;
            }
            else {
                return false;
            }
        }
        return true;
    }
    checkValidatorsDiasContato() {
        let validation = false;
        for (let key in this.form.value['diasContato']) {
            if (this.form.value['diasContato'][key] === true) {
                validation = true;
            }
        }
        return validation;
    }
    onCancel() {
        this.location.back();
    }
    onSubmit() {
        if (!this.checkValidatorsDiasContato()) {
            this.pnotifyService.notice('Selecione um dia para contato.');
            return false;
        }
        if (this.form.pristine) {
            this.location.back();
        }
        else {
            if (this.form.valid) {
                this.cadastroService.onNotifyLoaded(true);
                let formObj = {
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
                this.clientesService.updateDadosRelacionamento(formObj).subscribe((response) => {
                    if (response['responseCode'] === 200) {
                        this.onSended();
                        this.pnotifyService.success();
                        this.cadastroService.onNotifyLoaded(false);
                        this.formChanged = false;
                        this.location.back();
                    }
                    else {
                        this.handleSubmitError();
                    }
                }, (error) => {
                    this.handleSubmitError();
                });
            }
        }
    }
    handleSubmitError() {
        this.pnotifyService.error('Ocorreu um erro ao salvar o cadastro.');
        this.cadastroService.onNotifyLoaded(false);
    }
    onSended() {
        this.cadastroService.onNotifySended(true);
    }
};
ComercialClientesCadastroDadosRelacionamentoFormularioComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _formulario_service__WEBPACK_IMPORTED_MODULE_9__["ComercialClientesCadastroDadosRelacionamentoFormularioService"] },
    { type: _cadastro_service__WEBPACK_IMPORTED_MODULE_10__["ComercialClientesCadastroService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] },
    { type: src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_11__["ComercialClientesService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"] }
];
ComercialClientesCadastroDadosRelacionamentoFormularioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-clientes-cadastro-dados-relacionamento-formulario',
        template: _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        _formulario_service__WEBPACK_IMPORTED_MODULE_9__["ComercialClientesCadastroDadosRelacionamentoFormularioService"],
        _cadastro_service__WEBPACK_IMPORTED_MODULE_10__["ComercialClientesCadastroService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"],
        src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_11__["ComercialClientesService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"]])
], ComercialClientesCadastroDadosRelacionamentoFormularioComponent);



/***/ }),

/***/ "3Lpy":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/clientes/cadastro/cadastro.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-navbar [hidden]=\"!loaderNavbar\"></loader-spinner-navbar>\r\n<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<app-header [appTitle]=\"title\">\r\n  <button\r\n    type=\"button\"\r\n    style=\"display: none;\"\r\n    (click)=\"onEdit()\"\r\n    [hidden]=\"!showEditButton\"\r\n    [disabled]=\"loaderNavbar\">\r\n    Editar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    style=\"display: none;\"\r\n    (click)=\"onAdd()\"\r\n    [hidden]=\"!showAddButton\"\r\n    [disabled]=\"loaderNavbar\">\r\n    Adicionar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    style=\"display: none;\"\r\n    (click)=\"onCancel()\"\r\n    [hidden]=\"!showCancelButton\"\r\n    [disabled]=\"loaderNavbar\">\r\n    Cancelar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    style=\"display: none;\"\r\n    (click)=\"onSubmit()\"\r\n    [hidden]=\"!showSubmitButton\"\r\n    [disabled]=\"loaderNavbar\">\r\n    Guardar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\r\n  <div class=\"row mb-3\" *ngIf=\"cliente.codCliente\">\r\n    <div class=\"col\">\r\n      <h5 class=\"d-inline-block mb-0 mr-3\" tooltip=\"Código do cliente\">\r\n        <span class=\"badge badge-dark\">CÓD.: {{ cliente.codCliente }}</span>\r\n      </h5>\r\n      <h6 class=\"d-inline-block mb-0\">{{ cliente.razaoSocial }}</h6>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-9 col-xl-10\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n    <div class=\"col-md-3 col-xl-2 pl-0\">\r\n      <ul class=\"sticky-top list-unstyled border-left pl-3 mb-0\">\r\n        <li class=\"mb-2\">\r\n          <a\r\n            class=\"text-black text-decoration-none\"\r\n            [routerLink]=\"['dados-faturamento']\"\r\n            [routerLinkActive]=\"'font-weight-bolder'\">\r\n            Datos de facturación\r\n          </a>\r\n        </li>\r\n        <li class=\"mb-2\">\r\n          <a\r\n            class=\"text-black text-decoration-none\"\r\n            [routerLink]=\"['enderecos']\"\r\n            [routerLinkActive]=\"'font-weight-bolder'\">\r\n            Direcciones\r\n          </a>\r\n        </li>\r\n        <li class=\"mb-2\">\r\n          <a\r\n            class=\"text-black text-decoration-none\"\r\n            [routerLink]=\"['contatos']\"\r\n            [routerLinkActive]=\"'font-weight-bolder'\">\r\n            Contactos\r\n          </a>\r\n        </li>\r\n        <li class=\"mb-2\">\r\n          <a\r\n            class=\"text-black text-decoration-none\"\r\n            [routerLink]=\"['dados-relacionamento']\"\r\n            [routerLinkActive]=\"'font-weight-bolder'\">\r\n            Datos de la relación\r\n          </a>\r\n        </li>\r\n        <li class=\"mb-2 hidden\">\r\n          <a\r\n            class=\"text-black text-decoration-none\"\r\n            [routerLink]=\"['potencial-compra']\"\r\n            [routerLinkActive]=\"'font-weight-bolder'\">\r\n            Potencial de compra\r\n          </a>\r\n        </li>\r\n        <li class=\"mb-2\">\r\n          <a\r\n            class=\"text-black text-decoration-none\"\r\n            [routerLink]=\"['anexos']\"\r\n            [routerLinkActive]=\"'font-weight-bolder'\">\r\n            Anexos\r\n          </a>\r\n        </li>\r\n        <li class=\"mb-2\">\r\n          <a\r\n            class=\"text-black text-decoration-none\"\r\n            [routerLink]=\"['filial']\"\r\n            [routerLinkActive]=\"'font-weight-bolder'\">\r\n            Filial\r\n          </a>\r\n        </li>\r\n        <!-- <li class=\"mb-2\">\r\n          <a\r\n            class=\"text-decoration-none\"\r\n            [routerLink]=\"['travas']\"\r\n            [routerLinkActive]=\"'font-weight-bolder'\"\r\n            [ngClass]=\"{'text-black': travas == 0, 'text-danger font-weight-bold': travas > 0}\">\r\n            Cerraduras\r\n          </a>\r\n          <span class=\"badge badge-danger\" *ngIf=\"travas > 0\">{{ travas }}</span>\r\n        </li> -->\r\n        <li class=\"mb-2\">\r\n          <a\r\n            class=\"text-black text-decoration-none\"\r\n            [routerLink]=\"['informacoes-financeiras']\"\r\n            [routerLinkActive]=\"'font-weight-bolder'\">\r\n            Información financiera\r\n          </a>\r\n        </li>\r\n        <li class=\"mb-0 hidden\">\r\n          <a\r\n            class=\"text-black text-decoration-none\"\r\n            [routerLink]=\"['informacoes-comerciais']\"\r\n            [routerLinkActive]=\"'font-weight-bolder'\">\r\n            Información comercial\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</app-body>\r\n");

/***/ }),

/***/ "3j3d":
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/clientes/cadastro/dados-faturamento/formulario/formulario-data-resolver.guard.ts ***!
  \********************************************************************************************************************/
/*! exports provided: ComercialClientesCadastroDadosFaturamentoResolverGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialClientesCadastroDadosFaturamentoResolverGuard", function() { return ComercialClientesCadastroDadosFaturamentoResolverGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/comercial/services/clientes.service */ "8ouN");


// Services

let ComercialClientesCadastroDadosFaturamentoResolverGuard = class ComercialClientesCadastroDadosFaturamentoResolverGuard {
    constructor(clienteService) {
        this.clienteService = clienteService;
    }
    resolve(route) {
        if (route.parent.parent.params && route.parent.parent.params.id) {
            return this.clienteService.getDadosFaturamento(route.parent.parent.params.id);
        }
    }
};
ComercialClientesCadastroDadosFaturamentoResolverGuard.ctorParameters = () => [
    { type: src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_2__["ComercialClientesService"] }
];
ComercialClientesCadastroDadosFaturamentoResolverGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_2__["ComercialClientesService"]])
], ComercialClientesCadastroDadosFaturamentoResolverGuard);



/***/ }),

/***/ "4TVN":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/clientes/cadastro/potencial-compra/formulario/formulario.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<div class=\"row\" *ngIf=\"!loaderFullScreen\">\r\n  <div class=\"col\">\r\n    <div class=\"mtc-title\">Editar potencial de compra (mensual)</div>\r\n    <form [formGroup]=\"form\" autocomplete=\"off\">\r\n      <div formArrayName=\"linhas\">\r\n        <div class=\"form-row\" *ngFor=\"let item of linhas.controls; let i = index\" [formGroupName]=\"i\">\r\n          <div class=\"form-group col-md-2 d-flex\">\r\n            <div class=\"my-auto\">\r\n              <label>{{ item.value.descricao | capitalizeFirst }}</label>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group col-md-10\">\r\n            <div class=\"form-row\">\r\n              <div class=\"col-auto\">\r\n                <div class=\"form-row\">\r\n                  <div class=\"form-group col-4 mb-0 d-flex justify-content-end\">\r\n                    <label class=\"my-auto mr-2\" for=\"de\">De (ton)</label>\r\n                  </div>\r\n                  <div class=\"form-group col-8 mb-0\">\r\n                    <input\r\n                      type=\"text\"\r\n                      class=\"form-control\"\r\n                      id=\"de\"\r\n                      formControlName=\"de\"\r\n                      (input)=\"onInput()\"\r\n                      currencyMask [options]=\"{ align: 'left', prefix: '', thousands: '.', decimal: ',', precision: 3 }\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-auto\">\r\n                <div class=\"form-row\">\r\n                  <div class=\"form-group col-4 mb-0 d-flex justify-content-end\">\r\n                    <label class=\"my-auto mr-2\" for=\"ate\">Até (ton)</label>\r\n                  </div>\r\n                  <div class=\"form-group col-8 mb-0\">\r\n                    <input\r\n                      type=\"text\"\r\n                      class=\"form-control\"\r\n                      id=\"ate\"\r\n                      formControlName=\"ate\"\r\n                      (input)=\"onInput()\"\r\n                      currencyMask [options]=\"{ align: 'left', prefix: '', thousands: '.', decimal: ',', precision: 3 }\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group col-12\"><hr class=\"m-0\"></div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "4zD7":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/comercial/clientes/cadastro/potencial-compra/formulario/formulario.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ComercialClientesCadastroPotencialCompraFormularioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialClientesCadastroPotencialCompraFormularioComponent", function() { return ComercialClientesCadastroPotencialCompraFormularioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./formulario.component.html */ "4TVN");
/* harmony import */ var _formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formulario.component.scss */ "LqhE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _cadastro_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../cadastro.service */ "N70Q");
/* harmony import */ var src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/modules/comercial/services/clientes.service */ "8ouN");







// Services



let ComercialClientesCadastroPotencialCompraFormularioComponent = class ComercialClientesCadastroPotencialCompraFormularioComponent {
    constructor(activatedRoute, formBuilder, cadastroService, location, clientesService, pnotifyService) {
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
    ngOnInit() {
        this.cancelSubscription();
        this.submitSubscription();
        if (this.activatedRoute.snapshot.data['data']['responseCode'] === 200) {
            this.activatedRoute.parent.parent.params.subscribe(params => {
                this.codCliente = params['id'];
                this.setFormBuilder(this.activatedRoute.snapshot.data['data']['result']);
            });
        }
        else {
            this.pnotifyService.error();
            this.location.back();
        }
    }
    ngAfterViewInit() {
        this.cadastroService.onNotifyLoaded(false);
    }
    ngOnDestroy() {
        this.subscriptionCancel.unsubscribe();
        this.subscriptionSubmit.unsubscribe();
    }
    setFormBuilder(data) {
        this.form = this.formBuilder.group({
            linhas: this.formBuilder.array([])
        });
        this.pushLinha(data);
        this.loaderFullScreen = false;
    }
    cancelSubscription() {
        this.subscriptionCancel = this.cadastroService.notifyCancelObservable$.subscribe((response) => {
            if (response) {
                this.onCancel();
            }
        });
    }
    submitSubscription() {
        this.subscriptionSubmit = this.cadastroService.notifySubmitObservable$.subscribe((response) => {
            if (response) {
                this.onSubmit();
            }
        });
    }
    onFieldError(field) {
        if (this.onFieldInvalid(field)) {
            return 'is-invalid';
        }
        return '';
    }
    onFieldInvalid(field) {
        field = this.form.get(field);
        return field.status == 'INVALID' && field.touched;
    }
    onFieldRequired(field) {
        let required = false;
        let formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        if (this.form.controls[field].validator) {
            let validationResult = this.form.controls[field].validator(formControl);
            required =
                validationResult !== null && validationResult.required === true;
        }
        if (required) {
            return 'is-required';
        }
    }
    onInput() {
        this.formChanged = true;
    }
    get linhas() {
        return this.form.get('linhas');
    }
    pushLinha(linhas) {
        for (let i = 0; i < linhas.length; i++) {
            this.linhas.push(this.formBuilder.group({
                codCliente: [this.codCliente],
                id: [linhas[i]['id']],
                descricao: [linhas[i]['descricao']],
                de: [linhas[i]['de']],
                ate: [linhas[i]['ate']]
            }));
        }
    }
    checkValidators() {
        let validation = false;
        for (let i = 0; i < this.form.value['linhas'].length; i++) {
            if (this.form.value['linhas'][i]['ate'] > 0) {
                validation = true;
            }
        }
        return validation;
    }
    formCanDeactivate() {
        if (this.formChanged) {
            if (confirm('Este cliente no forma parte de tu cartera?')) {
                return true;
            }
            else {
                return false;
            }
        }
        return true;
    }
    onCancel() {
        this.location.back();
    }
    onSubmit() {
        if (!this.checkValidators()) {
            this.pnotifyService.notice('Informe pelo menos uma linha.');
            return false;
        }
        if (this.form.pristine) {
            this.location.back();
        }
        else {
            if (this.form.valid) {
                this.cadastroService.onNotifyLoaded(true);
                this.clientesService
                    .updatePotencialCompra(this.form.value['linhas'])
                    .subscribe({
                    next: (response) => {
                        if (response['responseCode'] === 200) {
                            this.onSended();
                            this.pnotifyService.success();
                            this.cadastroService.onNotifyLoaded(false);
                            this.formChanged = false;
                            this.location.back();
                        }
                        else {
                            this.handleSubmitError();
                        }
                    },
                    error: (error) => {
                        this.handleSubmitError();
                    }
                });
            }
        }
    }
    handleSubmitError() {
        this.pnotifyService.error('Ocorreu um erro ao salvar o cadastro.');
        this.cadastroService.onNotifyLoaded(false);
    }
    onSended() {
        this.cadastroService.onNotifySended(true);
    }
};
ComercialClientesCadastroPotencialCompraFormularioComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _cadastro_service__WEBPACK_IMPORTED_MODULE_8__["ComercialClientesCadastroService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] },
    { type: src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_9__["ComercialClientesService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"] }
];
ComercialClientesCadastroPotencialCompraFormularioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-clientes-cadastro-potencial-compra-formulario',
        template: _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        _cadastro_service__WEBPACK_IMPORTED_MODULE_8__["ComercialClientesCadastroService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"],
        src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_9__["ComercialClientesService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"]])
], ComercialClientesCadastroPotencialCompraFormularioComponent);



/***/ }),

/***/ "5Q7p":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/comercial/clientes/cadastro/enderecos/formulario/formulario.component.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NsaWVudGVzL2NhZGFzdHJvL2VuZGVyZWNvcy9mb3JtdWxhcmlvL2Zvcm11bGFyaW8uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "6eNF":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/clientes/cadastro/enderecos/formulario/formulario.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<div class=\"row\" *ngIf=\"!loaderFullScreen\">\r\n  <div class=\"col\">\r\n    <div class=\"mtc-title\">Editar endereço</div>\r\n    <form [formGroup]=\"form\" autocomplete=\"off\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-2\">\r\n          <label for=\"cep\">CEP</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"cep\"\r\n            formControlName=\"cep\"\r\n            (input)=\"onInput(); onInputCep(detalhes);\"\r\n            [ngClass]=\"onFieldError('cep') + ' ' + onFieldRequired('cep')\"\r\n            cep [textMask]=\"{mask: MASKS.cep.textMask}\">\r\n          <invalid-form-control [show]=\"onFieldInvalid('cep') == 'required'\" message=\"CEP é obrigatório.\"></invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group\" [ngClass]=\"{'col-md-10': action == 'novo', 'col-md-8': action == 'editar'}\">\r\n          <label for=\"endereco\">Endereço</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"endereco\"\r\n            formControlName=\"endereco\"\r\n            (input)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('endereco') + ' ' + onFieldRequired('endereco')\">\r\n          <invalid-form-control [show]=\"onFieldInvalid('endereco') == 'required'\" message=\"Endereço é obrigatório.\"></invalid-form-control>\r\n          <invalid-form-control [show]=\"onFieldInvalid('endereco') == 'maxlength'\" [message]=\"maxLengthMessages.endereco\"></invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group col-md-2\" *ngIf=\"action == 'editar'\">\r\n          <label for=\"status\">Status</label>\r\n          <select\r\n            class=\"form-control\"\r\n            id=\"status\"\r\n            formControlName=\"status\"\r\n            (change)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('status') + ' ' + onFieldRequired('status')\">\r\n            <option value=\"1\">ATIVO</option>\r\n            <option value=\"2\">INATIVO</option>\r\n          </select>\r\n          <invalid-form-control [show]=\"onFieldInvalid('status') == 'required'\" message=\"Status é obrigatório.\"></invalid-form-control>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"complemento\">Complemento</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"complemento\"\r\n            formControlName=\"complemento\"\r\n            (input)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('complemento')\">\r\n            <invalid-form-control [show]=\"onFieldInvalid('complemento') == 'maxlength'\" [message]=\"maxLengthMessages.complemento\"></invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"referencia\">Referência</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"referencia\"\r\n            formControlName=\"referencia\"\r\n            (input)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('referencia')\">\r\n          <invalid-form-control [show]=\"onFieldInvalid('referencia') == 'maxlength'\" [message]=\"maxLengthMessages.referencia\"></invalid-form-control>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"bairro\">Bairro</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"bairro\"\r\n            formControlName=\"bairro\"\r\n            (input)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('bairro') + ' ' + onFieldRequired('bairro')\">\r\n          <invalid-form-control [show]=\"onFieldInvalid('bairro') == 'required'\" message=\"Bairro é obrigatório.\"></invalid-form-control>\r\n          <invalid-form-control [show]=\"onFieldInvalid('bairro') == 'maxlength'\" [message]=\"maxLengthMessages.bairro\"></invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group col-md-6 \">\r\n          <label for=\"cidade\">Cidade</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"cidade\"\r\n            formControlName=\"cidade\"\r\n            (input)=\"onInput()\"\r\n            (blur)=\"onInputCidade()\"\r\n            [ngClass]=\"onFieldError('cidade') + ' ' + onFieldRequired('cidade')\">\r\n          <invalid-form-control [show]=\"onFieldInvalid('cidade') == 'required'\" message=\"Cidade é obrigatório.\"></invalid-form-control>\r\n          <invalid-form-control [show]=\"onFieldInvalid('cidade') == 'maxlength'\" [message]=\"maxLengthMessages.cidade\"></invalid-form-control>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"uf\">UF</label>\r\n          <select\r\n            class=\"form-control\"\r\n            id=\"uf\"\r\n            formControlName=\"uf\"\r\n            (change)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('uf') + ' ' + onFieldRequired('uf')\">\r\n            <option value=\"\">SELECIONE UMA OPÇÃO</option>\r\n            <option *ngFor=\"let item of estados\" [value]=\"item.sigla\">{{ item.descricao }}</option>\r\n          </select>\r\n          <invalid-form-control [show]=\"onFieldInvalid('uf') == 'required'\" message=\"UF é obrigatório.\"></invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"regiaoAtuacaoComercial\">Região de atuação comercial</label>\r\n          <select\r\n            class=\"form-control\"\r\n            id=\"regiaoAtuacaoComercial\"\r\n            formControlName=\"regiaoAtuacaoComercial\"\r\n            (change)=\"onInput()\">\r\n            <option value=\"\">SELECIONE UMA OPÇÃO</option>\r\n            <option *ngFor=\"let item of regioesAtuacaoComercial\" [value]=\"item.id\">{{ item.descricao }}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-auto mb-md-0\">\r\n          <div class=\"custom-control custom-checkbox\">\r\n            <input\r\n              type=\"checkbox\"\r\n              class=\"custom-control-input\"\r\n              id=\"principal\"\r\n              formControlName=\"principal\">\r\n            <label class=\"custom-control-label\" for=\"principal\">Endereço principal</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group col-auto mb-md-0\">\r\n          <div class=\"custom-control custom-checkbox\">\r\n            <input\r\n              type=\"checkbox\"\r\n              class=\"custom-control-input\"\r\n              id=\"cobranca\"\r\n              formControlName=\"cobranca\">\r\n            <label class=\"custom-control-label\" for=\"cobranca\">Endereço de cobrança</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group col-auto mb-md-0\">\r\n          <div class=\"custom-control custom-checkbox\">\r\n            <input\r\n              type=\"checkbox\"\r\n              class=\"custom-control-input\"\r\n              id=\"entrega\"\r\n              formControlName=\"entrega\"\r\n              (change)=\"onEnderecoEntrega()\">\r\n            <label class=\"custom-control-label\" for=\"entrega\">Endereço de entrega</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div [hidden]=\"!exibirDadosEntrega\">\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"tipoEntrega\">Tipo do Endereço de Entrega</label>\r\n            <select  \r\n              class=\"form-control\"\r\n              id=\"TP_ACAO\"\r\n              formControlName=\"TP_ACAO\"\r\n              (ngModelChange)=\"selecaoCliente($event)\"\r\n            >\r\n              <option></option>\r\n              <option value=\"obra\">Endereço Obra</option>\r\n              <option value=\"filial\">Endereço Filial</option>\r\n              <option value=\"industrialização\">End. Industrialização</option>\r\n            </select>\r\n          </div>\r\n          <div *ngIf=\"exibirSelecaoCliente\" class=\"form-group col-md-6\">\r\n            <div class=\"mb-1 d-flex justify-content-between w-100\" style=\"height: 19px\">\r\n              <label class=\"my-auto\" for=\"COD_CLIE_TERC_RAZ\">Cliente</label>\r\n              <div class=\"my-auto text-uppercase\" style=\"font-size: 11px\">\r\n                <a\r\n                  id=\"top-links\"\r\n                  class=\"text-primary mr-2\"\r\n                  (click)=\"openModal(pesquisaClientes)\">\r\n                  Selecionar\r\n                </a>\r\n              </div>\r\n            </div>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"COD_CLIE_TERC_RAZ\"\r\n              formControlName=\"COD_CLIE_TERC_RAZ\"\r\n              [readonly]=\"visualizar\"\r\n              placeholder=\"Selecionar...\"\r\n              [attr.disabled]=\"true\"\r\n            />\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div [hidden]=\"!exibirDadosEntrega\">\r\n        <div class=\"form-row\">\r\n          <div class=\"col\"><hr></div>\r\n        </div>\r\n        <div class=\"mtc-title\">Dados de entrega</div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"titulo\">Título do local de entrega</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"titulo\"\r\n              formControlName=\"titulo\"\r\n              (input)=\"onInput()\"\r\n              [ngClass]=\"onFieldError('titulo')\">\r\n            <invalid-form-control [show]=\"onFieldInvalid('titulo') == 'maxlength'\" [message]=\"maxLengthMessages.titulo\"></invalid-form-control>\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"regiaoEntrega\">Região de entrega</label>\r\n            <select\r\n              class=\"form-control\"\r\n              id=\"regiaoEntrega\"\r\n              formControlName=\"regiaoEntrega\"\r\n              (change)=\"onInput()\">\r\n              <option value=\"\">SELECIONE UMA OPÇÃO</option>\r\n              <option *ngFor=\"let item of regioesEntrega\" [value]=\"item.id\">{{ item.descricao }}</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div formGroupName=\"diasEntrega\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col\">\r\n              <label class=\"mb-2\">Dias para realizar entregas</label>\r\n              <div class=\"form-row\" formGroupName=\"segunda\">\r\n                <div class=\"form-group col-md-2 d-flex\">\r\n                  <div class=\"custom-control custom-checkbox my-auto\">\r\n                    <input\r\n                      type=\"checkbox\"\r\n                      class=\"custom-control-input\"\r\n                      id=\"segunda\"\r\n                      formControlName=\"checked\"\r\n                      (change)=\"onInput(); onDiaEntregas('segunda')\">\r\n                    <label class=\"custom-control-label\" for=\"segunda\">Segunda-feira</label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group col-md-10\">\r\n                  <div class=\"form-row\">\r\n                    <div class=\"col-auto d-flex pr-4\">\r\n                      <label class=\"my-auto mr-2\">Horário mínimo</label>\r\n                      <timepicker\r\n                        [showMeridian]=\"false\"\r\n                        [showSpinners]=\"false\"\r\n                        [mousewheel]=\"true\"\r\n                        formControlName=\"minimo\"\r\n                        (input)=\"onInput()\">\r\n                      </timepicker>\r\n                    </div>\r\n                    <div class=\"col-auto d-flex\">\r\n                      <label class=\"my-auto mr-2\">Horário máximo</label>\r\n                      <timepicker\r\n                        [showMeridian]=\"false\"\r\n                        [showSpinners]=\"false\"\r\n                        [mousewheel]=\"true\"\r\n                        formControlName=\"maximo\"\r\n                        (input)=\"onInput()\">\r\n                      </timepicker>\r\n                    </div>\r\n                    <div class=\"col-auto d-flex\">\r\n                      <a\r\n                        class=\"text-secondary my-auto\"\r\n                        href=\"javascript:void(0)\"\r\n                        (click)=\"onReplicarHorario('segunda')\">\r\n                        <b>Replicar horário</b>\r\n                      </a>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-row\" formGroupName=\"terca\">\r\n                <div class=\"form-group col-md-2 d-flex\">\r\n                  <div class=\"custom-control custom-checkbox my-auto\">\r\n                    <input\r\n                      type=\"checkbox\"\r\n                      class=\"custom-control-input\"\r\n                      id=\"terca\"\r\n                      formControlName=\"checked\"\r\n                      (change)=\"onInput(); onDiaEntregas('terca')\">\r\n                    <label class=\"custom-control-label\" for=\"terca\">Terça-feira</label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group col-md-10\">\r\n                  <div class=\"form-row\">\r\n                    <div class=\"col-auto d-flex pr-4\">\r\n                      <label class=\"my-auto mr-2\">Horário mínimo</label>\r\n                      <timepicker\r\n                        [showMeridian]=\"false\"\r\n                        [showSpinners]=\"false\"\r\n                        [mousewheel]=\"true\"\r\n                        formControlName=\"minimo\"\r\n                        (input)=\"onInput()\">\r\n                      </timepicker>\r\n                    </div>\r\n                    <div class=\"col-auto d-flex\">\r\n                      <label class=\"my-auto mr-2\">Horário máximo</label>\r\n                      <timepicker\r\n                        [showMeridian]=\"false\"\r\n                        [showSpinners]=\"false\"\r\n                        [mousewheel]=\"true\"\r\n                        formControlName=\"maximo\"\r\n                        (input)=\"onInput()\">\r\n                      </timepicker>\r\n                    </div>\r\n                    <div class=\"col-auto d-flex\">\r\n                      <a\r\n                        class=\"text-secondary my-auto\"\r\n                        href=\"javascript:void(0)\"\r\n                        (click)=\"onReplicarHorario('terca')\">\r\n                        <b>Replicar horário</b>\r\n                      </a>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-row\" formGroupName=\"quarta\">\r\n                <div class=\"form-group col-md-2 d-flex\">\r\n                  <div class=\"custom-control custom-checkbox my-auto\">\r\n                    <input\r\n                      type=\"checkbox\"\r\n                      class=\"custom-control-input\"\r\n                      id=\"quarta\"\r\n                      formControlName=\"checked\"\r\n                      (change)=\"onInput(); onDiaEntregas('quarta')\">\r\n                    <label class=\"custom-control-label\" for=\"quarta\">Quarta-feira</label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group col-md-10\">\r\n                  <div class=\"form-row\">\r\n                    <div class=\"col-auto d-flex pr-4\">\r\n                      <label class=\"my-auto mr-2\">Horário mínimo</label>\r\n                      <timepicker\r\n                        [showMeridian]=\"false\"\r\n                        [showSpinners]=\"false\"\r\n                        [mousewheel]=\"true\"\r\n                        formControlName=\"minimo\"\r\n                        (input)=\"onInput()\">\r\n                      </timepicker>\r\n                    </div>\r\n                    <div class=\"col-auto d-flex\">\r\n                      <label class=\"my-auto mr-2\">Horário máximo</label>\r\n                      <timepicker\r\n                        [showMeridian]=\"false\"\r\n                        [showSpinners]=\"false\"\r\n                        [mousewheel]=\"true\"\r\n                        formControlName=\"maximo\"\r\n                        (input)=\"onInput()\">\r\n                      </timepicker>\r\n                    </div>\r\n                    <div class=\"col-auto d-flex\">\r\n                      <a\r\n                        class=\"text-secondary my-auto\"\r\n                        href=\"javascript:void(0)\"\r\n                        (click)=\"onReplicarHorario('quarta')\">\r\n                        <b>Replicar horário</b>\r\n                      </a>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-row\" formGroupName=\"quinta\">\r\n                <div class=\"form-group col-md-2 d-flex\">\r\n                  <div class=\"custom-control custom-checkbox my-auto\">\r\n                    <input\r\n                      type=\"checkbox\"\r\n                      class=\"custom-control-input\"\r\n                      id=\"quinta\"\r\n                      formControlName=\"checked\"\r\n                      (change)=\"onInput(); onDiaEntregas('quinta')\">\r\n                    <label class=\"custom-control-label\" for=\"quinta\">Quinta-feira</label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group col-md-10\">\r\n                  <div class=\"form-row\">\r\n                    <div class=\"col-auto d-flex pr-4\">\r\n                      <label class=\"my-auto mr-2\">Horário mínimo</label>\r\n                      <timepicker\r\n                        [showMeridian]=\"false\"\r\n                        [showSpinners]=\"false\"\r\n                        [mousewheel]=\"true\"\r\n                        formControlName=\"minimo\"\r\n                        (input)=\"onInput()\">\r\n                      </timepicker>\r\n                    </div>\r\n                    <div class=\"col-auto d-flex\">\r\n                      <label class=\"my-auto mr-2\">Horário máximo</label>\r\n                      <timepicker\r\n                        [showMeridian]=\"false\"\r\n                        [showSpinners]=\"false\"\r\n                        [mousewheel]=\"true\"\r\n                        formControlName=\"maximo\"\r\n                        (input)=\"onInput()\">\r\n                      </timepicker>\r\n                    </div>\r\n                    <div class=\"col-auto d-flex\">\r\n                      <a\r\n                        class=\"text-secondary my-auto\"\r\n                        href=\"javascript:void(0)\"\r\n                        (click)=\"onReplicarHorario('quinta')\">\r\n                        <b>Replicar horário</b>\r\n                      </a>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-row\" formGroupName=\"sexta\">\r\n                <div class=\"form-group col-md-2 d-flex\">\r\n                  <div class=\"custom-control custom-checkbox my-auto\">\r\n                    <input\r\n                      type=\"checkbox\"\r\n                      class=\"custom-control-input\"\r\n                      id=\"sexta\"\r\n                      formControlName=\"checked\"\r\n                      (change)=\"onInput(); onDiaEntregas('sexta')\">\r\n                    <label class=\"custom-control-label\" for=\"sexta\">Sexta-feira</label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group col-md-10\">\r\n                  <div class=\"form-row\">\r\n                    <div class=\"col-auto d-flex pr-4\">\r\n                      <label class=\"my-auto mr-2\">Horário mínimo</label>\r\n                      <timepicker\r\n                        [showMeridian]=\"false\"\r\n                        [showSpinners]=\"false\"\r\n                        [mousewheel]=\"true\"\r\n                        formControlName=\"minimo\"\r\n                        (input)=\"onInput()\">\r\n                      </timepicker>\r\n                    </div>\r\n                    <div class=\"col-auto d-flex\">\r\n                      <label class=\"my-auto mr-2\">Horário máximo</label>\r\n                      <timepicker\r\n                        [showMeridian]=\"false\"\r\n                        [showSpinners]=\"false\"\r\n                        [mousewheel]=\"true\"\r\n                        formControlName=\"maximo\"\r\n                        (input)=\"onInput()\">\r\n                      </timepicker>\r\n                    </div>\r\n                    <div class=\"col-auto d-flex\">\r\n                      <a\r\n                        class=\"text-secondary my-auto\"\r\n                        href=\"javascript:void(0)\"\r\n                        (click)=\"onReplicarHorario('sexta')\">\r\n                        <b>Replicar horário</b>\r\n                      </a>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-row\" formGroupName=\"sabado\">\r\n                <div class=\"form-group col-md-2 d-flex\">\r\n                  <div class=\"custom-control custom-checkbox my-auto\">\r\n                    <input\r\n                      type=\"checkbox\"\r\n                      class=\"custom-control-input\"\r\n                      id=\"sabado\"\r\n                      formControlName=\"checked\"\r\n                      (change)=\"onInput(); onDiaEntregas('sabado')\">\r\n                    <label class=\"custom-control-label\" for=\"sabado\">Sábado</label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group col-md-10\">\r\n                  <div class=\"form-row\">\r\n                    <div class=\"col-auto d-flex pr-4\">\r\n                      <label class=\"my-auto mr-2\">Horário mínimo</label>\r\n                      <timepicker\r\n                        [showMeridian]=\"false\"\r\n                        [showSpinners]=\"false\"\r\n                        [mousewheel]=\"true\"\r\n                        formControlName=\"minimo\"\r\n                        (input)=\"onInput()\">\r\n                      </timepicker>\r\n                    </div>\r\n                    <div class=\"col-auto d-flex\">\r\n                      <label class=\"my-auto mr-2\">Horário máximo</label>\r\n                      <timepicker\r\n                        [showMeridian]=\"false\"\r\n                        [showSpinners]=\"false\"\r\n                        [mousewheel]=\"true\"\r\n                        formControlName=\"maximo\"\r\n                        (input)=\"onInput()\">\r\n                      </timepicker>\r\n                    </div>\r\n                    <div class=\"col-auto d-flex\">\r\n                      <a\r\n                        class=\"text-secondary my-auto\"\r\n                        href=\"javascript:void(0)\"\r\n                        (click)=\"onReplicarHorario('sabado')\">\r\n                        <b>Replicar horário</b>\r\n                      </a>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-row\" formGroupName=\"domingo\">\r\n                <div class=\"form-group col-md-2 d-flex\">\r\n                  <div class=\"custom-control custom-checkbox my-auto\">\r\n                    <input\r\n                      type=\"checkbox\"\r\n                      class=\"custom-control-input\"\r\n                      id=\"domingo\"\r\n                      formControlName=\"checked\"\r\n                      (change)=\"onInput(); onDiaEntregas('domingo')\">\r\n                    <label class=\"custom-control-label\" for=\"domingo\">Domingo</label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group col-md-10\">\r\n                  <div class=\"form-row\">\r\n                    <div class=\"col-auto d-flex pr-4\">\r\n                      <label class=\"my-auto mr-2\">Horário mínimo</label>\r\n                      <timepicker\r\n                        [showMeridian]=\"false\"\r\n                        [showSpinners]=\"false\"\r\n                        [mousewheel]=\"true\"\r\n                        formControlName=\"minimo\"\r\n                        (input)=\"onInput()\">\r\n                      </timepicker>\r\n                    </div>\r\n                    <div class=\"col-auto d-flex\">\r\n                      <label class=\"my-auto mr-2\">Horário máximo</label>\r\n                      <timepicker\r\n                        [showMeridian]=\"false\"\r\n                        [showSpinners]=\"false\"\r\n                        [mousewheel]=\"true\"\r\n                        formControlName=\"maximo\"\r\n                        (input)=\"onInput()\">\r\n                      </timepicker>\r\n                    </div>\r\n                    <div class=\"col-auto d-flex\">\r\n                      <a\r\n                        class=\"text-secondary my-auto\"\r\n                        href=\"javascript:void(0)\"\r\n                        (click)=\"onReplicarHorario('domingo')\">\r\n                        <b>Replicar horário</b>\r\n                      </a>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"tipoMaterial\">Tipo de material</label>\r\n            <select\r\n              class=\"form-control\"\r\n              id=\"tipoMaterial\"\r\n              formControlName=\"tipoMaterial\"\r\n              (change)=\"onInput()\">\r\n              <option value=\"\">SELECIONE UMA OPÇÃO</option>\r\n              <option *ngFor=\"let item of tiposMaterial\" [value]=\"item.id\">{{ item.descricao }}</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"tipoDescarga\">Tipo de descarga</label>\r\n            <select\r\n              class=\"form-control\"\r\n              id=\"tipoDescarga\"\r\n              formControlName=\"tipoDescarga\"\r\n              (change)=\"onInput()\"\r\n              [ngClass]=\"onFieldError('tipoDescarga') + ' ' + onFieldRequired('tipoDescarga')\">\r\n              <option value=\"\">SELECIONE UMA OPÇÃO</option>\r\n              <option *ngFor=\"let item of tiposDescarga\" [value]=\"item.id\">{{ item.descricao }}</option>\r\n            </select>\r\n            <invalid-form-control [show]=\"onFieldInvalid('tipoDescarga') == 'required'\" message=\"Tipo de descarga é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"modoDescarga\">Modo de descarga</label>\r\n            <select\r\n              class=\"form-control\"\r\n              id=\"modoDescarga\"\r\n              formControlName=\"modoDescarga\"\r\n              (change)=\"onInput()\"\r\n              [ngClass]=\"onFieldError('modoDescarga') + ' ' + onFieldRequired('modoDescarga')\">\r\n              <option value=\"\">SELECIONE UMA OPÇÃO</option>\r\n              <option *ngFor=\"let item of modosDescarga\" [value]=\"item.id\">{{ item.descricao }}</option>\r\n            </select>\r\n            <invalid-form-control [show]=\"onFieldInvalid('modoDescarga') == 'required'\" message=\"Modo de descarga é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"tiposVeiculos\">Tipos de veículo</label>\r\n            <ng-select\r\n              [items]=\"tiposVeiculos\"\r\n              [multiple]=\"true\"\r\n              [closeOnSelect]=\"false\"\r\n              labelForId=\"tiposVeiculos\"\r\n              bindValue=\"id\"\r\n              bindLabel=\"descricao\"\r\n              formControlName=\"tiposVeiculos\"\r\n              (change)=\"onInput()\"\r\n              [ngClass]=\"onFieldError('tiposVeiculos') + ' ' + onFieldRequired('tiposVeiculos')\">\r\n            </ng-select>\r\n            <invalid-form-control [show]=\"onFieldInvalid('tiposVeiculos') == 'required'\" message=\"Tipos de veículo é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"dadosEspeciais\">Dados especiais</label>\r\n            <ng-select\r\n              [items]=\"dadosEspeciais\"\r\n              [multiple]=\"true\"\r\n              [closeOnSelect]=\"false\"\r\n              labelForId=\"dadosEspeciais\"\r\n              bindValue=\"id\"\r\n              bindLabel=\"descricao\"\r\n              formControlName=\"dadosEspeciais\"\r\n              (change)=\"onInput()\">\r\n            </ng-select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div formArrayName=\"anexos\" class=\"mb-4 col-6\">\r\n            <div class=\"row\">\r\n              <div class=\"col d-flex align-items-start\">\r\n                <div class=\"mtc-title mb-0\">Anexos</div>\r\n                <div class=\"ml-2\">\r\n                  <ng-template #tooltipAnexos>\r\n                    <p class=\"mb-0\"><b>Como sugestão para auxílio na análise e agilidade no processo, \r\n                      favor inserir os documentos que vinculem a empresa de faturamento com o local de entrega, \r\n                      exemplos em caso de obra: CEI, Projeto, Alvará de Funcionamento, Contrato de Prestação de Serviços, Licitações, etc\r\n                    </b></p>\r\n                    <p class=\"text-nowrap mb-0\"><br><br></p>\r\n                    <p class=\"mb-0\"><b>Entregas para indústria e terceiros, sugerimos inserir (Receita e Sintegra)</b></p>\r\n                    <p class=\"text-nowrap mb-0\"><br><br></p>\r\n                    <p class=\"mb-0\"><b>Faturamento para pessoa física, recomendamos anexar: CNH/RG e comprovante de endereço do local da entrega, comprovando o seu vínculo</b></p>\r\n                    <p class=\"text-nowrap mb-0\"><br><br></p>\r\n                  </ng-template>\r\n                  <i class=\"far fa-question-circle\" [tooltip]=\"tooltipAnexos\"></i>\r\n                </div>\r\n              </div>\r\n              <div class=\"col\">\r\n                <label for=\"novoAnexo\" class=\"d-flex justify-content-end align-items-center\" style=\"cursor: pointer;\">\r\n                  <p class=\"btn btn-sm btn-outline-primary m-0\">\r\n                    <i class=\"fas fa-plus\"></i>\r\n                    <span>Novo</span>\r\n                  </p>\r\n                </label>\r\n                <input\r\n                  id=\"novoAnexo\"\r\n                  type=\"file\"\r\n                  (change)=\"appendFile($event.target.files)\"\r\n                  class=\"d-none\"\r\n                  >\r\n              </div>\r\n            </div>\r\n            <div class=\"row\" *ngIf=\"showAnexos && form.value.anexos.length > 0\">\r\n              <div class=\"col mb-5\">\r\n                <custom-table [config]=\"tableConfigAnexos\">\r\n                  <ng-template #tbody let-tbody>\r\n                    <tr *ngFor=\"let anexo of anexos.controls; let i = index\" [formGroupName]=\"i\">\r\n                      <td style=\"width: 90%\">\r\n                        {{ form.value.anexos[i].codAnexo }} - {{ form.value.anexos[i].nomeAnexo | uppercase }}\r\n                      </td>\r\n                      <td class=\"text-center\" style=\"width: 5%\">\r\n                        <a\r\n                          [href]=\"form.value.anexos[i].linkAnexo\"\r\n                          *ngIf=\"form.value.anexos[i].linkAnexo != null\"\r\n                          target=\"_blank\"\r\n                          class=\"btn-icon-sm mx-2 text-black\"\r\n                          tooltip=\"visualizar\">\r\n                          <i class=\"far fa-eye\"></i>\r\n                        </a>\r\n                      </td>\r\n                      <td class=\"text-center\" style=\"width: 5%\">\r\n                        <btn-icon\r\n                          icon=\"fas fa-trash\"\r\n                          size=\"small\"\r\n                          tooltip=\"Excluir\"\r\n                          (click)=\"onDeleteAnexo(form.value.anexos[i].codAnexo, i)\">\r\n                        </btn-icon>\r\n                      </td>\r\n                    </tr>\r\n                  </ng-template>\r\n                </custom-table>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\" *ngIf=\"showAnexos && form.value.anexos.length === 0\">\r\n              <div class=\"col\">\r\n                <message\r\n                  icon=\"fas fa-exchange-alt\"\r\n                  text=\"Nenhum documento encontrado\">\r\n                </message>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"mb-4 col-6\">\r\n            <div class=\"row\">\r\n              <div class=\"col d-flex align-items-center\">\r\n                <div class=\"mtc-title mb-0\">Observação</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col mt-3\">\r\n                <textarea \r\n                  id=\"observacao\" \r\n                  class=\"form-control\" \r\n                  formControlName=\"observacao\"\r\n                  (input)=\"onInput()\"></textarea>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n<ng-template #detalhes>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">Escolha o endereço a ser utilizado</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"onModalClose()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <form [formGroup]=\"formEnderecos\" (ngSubmit)=\"setValueEndereco()\" autocomplete=\"off\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-12\" *ngFor=\"let endereco of enderecosOp; let i = index\">\r\n          <div class=\"custom-control custom-radio\">\r\n            <input [id]=\"i\" class=\"custom-control-input\" formControlName=\"enderecosRetorno\" type=\"radio\" [value]=\"endereco\"/>\r\n            <label class=\"custom-control-label\" [for]=\"i\">{{endereco.logradouro}}, {{endereco.unidade}} - {{endereco.bairro}}, {{endereco.localidade}} - {{endereco.uf}}, {{endereco.cep}}</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-12 d-flex justify-content-center\">\r\n          <button class=\"btn btn-primary\">Selecionar</button>\r\n        </div> \r\n      </div>\r\n    </form>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #pesquisaClientes>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">Busqueda de Clientes</h4>\r\n    <div class=\"d-flex justify-content-center align-items-center\">\r\n      <div class=\"spinner-border text-primary mr-2\" role=\"status\" *ngIf=\"loadingClientes\">\r\n        <span class=\"sr-only\">Loading...</span>\r\n      </div>\r\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"onModalClose()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <advanced-filter>\r\n      <form [formGroup]=\"formClientes\">\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-4\">\r\n            <label for=\"cdItem\">Buscar por</label>\r\n            <select\r\n              class=\"form-control custom-select\"\r\n              formControlName=\"buscarPor\"\r\n            >\r\n              <option value=\"NM_CLIE\" selected>Código, nome fantasia ou razão social</option>\r\n            </select>\r\n          </div>\r\n  \r\n          <div class=\"form-group col-8\">\r\n            <label>Termo de Pesquisa</label>\r\n            <div class=\"input-group\">\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                formControlName=\"pesquisa\"\r\n                >\r\n                <div class=\"input-group-append\">\r\n                  <span \r\n                    [tooltip]=\"formClientes.valid == false ? 'Digite um termo de pesquisa':''\"\r\n                    container=\"body\"\r\n                    placement =\"left\"\r\n                  >\r\n                    <button\r\n                    style=\"height: 100%; margin-left: 10px;\"\r\n                      [disabled]=\"formClientes.valid == false\"\r\n                      class=\"input-group-text hover\"\r\n                      (click)=\"getClientes()\"\r\n                      >\r\n                      <i class=\"fas fa-search\"></i>\r\n                    </button>\r\n                  </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </advanced-filter>\r\n    <custom-table *ngIf=\"!noClientes\" class=\"text-center\">\r\n      <ng-template #thead let-thead>\r\n        <tr>\r\n          <th>Cód Cliente </th>\r\n          <th>Nome Fantasia</th>\r\n          <th>Razão Social </th>\r\n          <th></th>\r\n        </tr>\r\n      </ng-template>\r\n      <ng-template #tbody let-tbody>\r\n        <tr *ngFor=\"let cliente of clientes | slice : begin : end; let i = index\">\r\n          <td>{{ cliente.codCliente }}</td>\r\n          <td>{{ cliente.nomeCliente }}</td>\r\n          <td>{{ cliente.razaoSocial }}</td>\r\n          <td>\r\n            <button\r\n              class=\"btn-icon-sm\"\r\n              tooltip=\"Salvar Informações\"\r\n              container=\"body\"\r\n              (click)=\"setCliente(cliente)\"\r\n            >\r\n              <i class=\"far fa-save\"></i>\r\n            </button>\r\n          </td>\r\n        </tr>\r\n      </ng-template>\r\n    </custom-table>\r\n  </div>\r\n</ng-template>\r\n");

/***/ }),

/***/ "8M0X":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/clientes/cadastro/dados-relacionamento/formulario/formulario.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<div class=\"row\" *ngIf=\"!loaderFullScreen\">\r\n  <div class=\"col\">\r\n    <div class=\"mtc-title\">Editar datos de relación</div>\r\n    <form [formGroup]=\"form\" autocomplete=\"off\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"tipoAtendimento\">Tipo de servicio</label>\r\n          <select\r\n            class=\"form-control\"\r\n            id=\"tipoAtendimento\"\r\n            formControlName=\"tipoAtendimento\"\r\n            (change)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('tipoAtendimento') + ' ' + onFieldRequired('tipoAtendimento')\">\r\n            <option value=\"\">SELECCIONE UNA OPCION</option>\r\n            <option *ngFor=\"let item of tiposAtendimento\" [value]=\"item.id\">{{ item.descricao }}</option>\r\n          </select>\r\n          <invalid-form-control [show]=\"onFieldInvalid('tipoAtendimento')\" message=\"Tipo de atendimento é obrigatório.\"></invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"periodo\">Períodos</label>\r\n          <select\r\n            class=\"form-control\"\r\n            id=\"periodo\"\r\n            formControlName=\"periodo\"\r\n            (change)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('periodo') + ' ' + onFieldRequired('periodo')\">\r\n            <option value=\"\">SELECCIONE UNA OPCION</option>\r\n            <option *ngFor=\"let item of periodos\" [value]=\"item.id\">{{ item.descricao }}</option>\r\n          </select>\r\n          <invalid-form-control [show]=\"onFieldInvalid('periodo')\" message=\"Períodos es obligatorio.\"></invalid-form-control>\r\n        </div>\r\n      </div>\r\n      <div formGroupName=\"diasContato\">\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col\">\r\n            <label>Mejores dias para contactar</label>\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-auto\">\r\n                <div class=\"custom-control custom-checkbox\">\r\n                  <input\r\n                    type=\"checkbox\"\r\n                    class=\"custom-control-input\"\r\n                    id=\"segunda\"\r\n                    formControlName=\"segunda\">\r\n                  <label class=\"custom-control-label\" for=\"segunda\">Lunes</label>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group col-auto\">\r\n                <div class=\"custom-control custom-checkbox\">\r\n                  <input\r\n                    type=\"checkbox\"\r\n                    class=\"custom-control-input\"\r\n                    id=\"terca\"\r\n                    formControlName=\"terca\">\r\n                  <label class=\"custom-control-label\" for=\"terca\">Martes</label>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group col-auto\">\r\n                <div class=\"custom-control custom-checkbox\">\r\n                  <input\r\n                    type=\"checkbox\"\r\n                    class=\"custom-control-input\"\r\n                    id=\"quarta\"\r\n                    formControlName=\"quarta\">\r\n                  <label class=\"custom-control-label\" for=\"quarta\">Miercoles</label>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group col-auto\">\r\n                <div class=\"custom-control custom-checkbox\">\r\n                  <input\r\n                    type=\"checkbox\"\r\n                    class=\"custom-control-input\"\r\n                    id=\"quinta\"\r\n                    formControlName=\"quinta\">\r\n                  <label class=\"custom-control-label\" for=\"quinta\">Jueves</label>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group col-auto\">\r\n                <div class=\"custom-control custom-checkbox\">\r\n                  <input\r\n                    type=\"checkbox\"\r\n                    class=\"custom-control-input\"\r\n                    id=\"sexta\"\r\n                    formControlName=\"sexta\">\r\n                  <label class=\"custom-control-label\" for=\"sexta\">Viernes</label>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group col-auto\">\r\n                <div class=\"custom-control custom-checkbox\">\r\n                  <input\r\n                    type=\"checkbox\"\r\n                    class=\"custom-control-input\"\r\n                    id=\"sabado\"\r\n                    formControlName=\"sabado\">\r\n                  <label class=\"custom-control-label\" for=\"sabado\">Sábado</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"frequenciaContato\">Frequência de contatos</label>\r\n          <select\r\n            class=\"form-control\"\r\n            id=\"frequenciaContato\"\r\n            formControlName=\"frequenciaContato\"\r\n            (change)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('frequenciaContato') + ' ' + onFieldRequired('frequenciaContato')\">\r\n            <option value=\"\">SELECCIONE UNA OPCION</option>\r\n            <option *ngFor=\"let item of frequenciaContatos\" [value]=\"item.id\">{{ item.descricao }}</option>\r\n          </select>\r\n          <invalid-form-control [show]=\"onFieldInvalid('frequenciaContato')\" message=\"Frequência de contatos é obrigatório.\"></invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"frequenciaVisita\">Frecuencia de visitas</label>\r\n          <select\r\n            class=\"form-control\"\r\n            id=\"frequenciaVisita\"\r\n            formControlName=\"frequenciaVisita\"\r\n            (change)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('frequenciaVisita') + ' ' + onFieldRequired('frequenciaVisita')\">\r\n            <option value=\"\">SELECCIONE UNA OPCION</option>\r\n            <option *ngFor=\"let item of frequenciaVisitas\" [value]=\"item.id\">{{ item.descricao }}</option>\r\n          </select>\r\n          <invalid-form-control [show]=\"onFieldInvalid('frequenciaVisita')\" message=\"Períodos é obrigatório.\"></invalid-form-control>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"origemContato\">Fuente de contacto</label>\r\n          <select\r\n            class=\"form-control\"\r\n            id=\"origemContato\"\r\n            formControlName=\"origemContato\"\r\n            (change)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('origemContato') + ' ' + onFieldRequired('origemContato')\">\r\n            <option value=\"\">SELECCIONE UNA OPCION</option>\r\n            <option *ngFor=\"let item of origensContato\" [value]=\"item.id\">{{ item.descricao }}</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"website\">Website</label>\r\n          <input\r\n            type=\"url\"\r\n            class=\"form-control\"\r\n            id=\"website\"\r\n            formControlName=\"website\"\r\n            (input)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('website') + ' ' + onFieldRequired('website')\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col\">\r\n          <label for=\"obsPropostas\">Observaciones (propustas)</label>\r\n          <textarea\r\n            class=\"form-control\"\r\n            id=\"obsPropostas\"\r\n            formControlName=\"obsPropostas\"\r\n            (input)=\"onInput()\">\r\n          </textarea>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "8ljO":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/comercial/clientes/cadastro/cadastro.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hidden {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21lcmNpYWwvY2xpZW50ZXMvY2FkYXN0cm8vY2FkYXN0cm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxhQUFBO0FBRkYiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2NvbWVyY2lhbC9jbGllbnRlcy9jYWRhc3Ryby9jYWRhc3Ryby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbi5oaWRkZW4ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "8yz0":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/comercial/clientes/cadastro/dados-faturamento/formulario/formulario.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ComercialClientesCadastroDadosFaturamentoFormularioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialClientesCadastroDadosFaturamentoFormularioComponent", function() { return ComercialClientesCadastroDadosFaturamentoFormularioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./formulario.component.html */ "yQw5");
/* harmony import */ var _formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formulario.component.scss */ "LqIA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var ng_brazil__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-brazil */ "hTrW");
/* harmony import */ var js_brasil__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! js-brasil */ "zFJr");
/* harmony import */ var js_brasil__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(js_brasil__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/modules/confirm-modal/confirm-modal.service */ "FOez");
/* harmony import */ var _formulario_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./formulario.service */ "qdc5");
/* harmony import */ var _cadastro_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../cadastro.service */ "N70Q");
/* harmony import */ var src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/modules/comercial/services/clientes.service */ "8ouN");
/* harmony import */ var src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/modules/comercial/comercial.service */ "VgqD");









// ng-brazil


// Services






let ComercialClientesCadastroDadosFaturamentoFormularioComponent = class ComercialClientesCadastroDadosFaturamentoFormularioComponent {
    constructor(activatedRoute, formBuilder, formService, cadastroService, comercialService, location, clientesService, pnotifyService, confirmModalService) {
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
    ngOnInit() {
        this.cancelSubscription();
        this.submitSubscription();
        this.getPerfil();
        const snapshot = this.activatedRoute.snapshot.data;
        if (snapshot.data.responseCode === 200) {
            this.getFormFields(snapshot.data.result);
            this.setMaxLengthRules();
            this.setFormBuilder(snapshot.data.result);
            this.activatedRoute.parent.parent.params.subscribe(params => {
                this.codCliente = params.id;
            });
        }
        else {
            this.pnotifyService.error();
            this.location.back();
        }
    }
    ngAfterViewInit() {
        this.cadastroService.onNotifyLoaded(true);
    }
    ngOnDestroy() {
        this.subscriptionCancel.unsubscribe();
        this.subscriptionSubmit.unsubscribe();
    }
    cancelSubscription() {
        this.subscriptionCancel = this.cadastroService.notifyCancelObservable$.subscribe((response) => {
            if (response) {
                this.onCancel();
            }
        });
    }
    submitSubscription() {
        this.subscriptionSubmit = this.cadastroService.notifySubmitObservable$.subscribe((response) => {
            if (response) {
                this.onSubmit();
            }
        });
    }
    getPerfil() {
        this.comercialService
            .getPerfil()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.loaderFullScreen = false;
        }))
            .subscribe({
            next: (response) => {
                if (response.responseCode === 200) {
                    this.profile = response.result;
                    //console.log(this.profile)
                    if (this.profile.coordenador === true ||
                        this.profile.gestor === true) {
                        this.setNotaEnable();
                        //this.disable = false;
                        //console.log(this.disable);
                    }
                    else if (this.profile.vendedor === true) {
                        this.setNotaDisable();
                        //this.disable = true;
                        //console.log(this.disable);
                    }
                    else {
                        this.showPermissionDenied = true;
                    }
                }
                else {
                    this.showPermissionDenied = true;
                }
            },
            error: (error) => {
                this.showPermissionDenied = true;
            }
        });
    }
    setNotaDisable() {
        this.form.controls.notaCliente.disable();
    }
    setNotaEnable() {
        this.form.controls.notaCliente.enable();
    }
    setMaxLengthRules() {
        this.maxLengthRules = this.activatedRoute.snapshot.data.rules.data;
        this.maxLengthMessages = {
            nome: `Nome deve conter até ${this.maxLengthRules.nome} caracteres.`,
            sobrenome: `Sobrenome deve conter até ${this.maxLengthRules.sobrenome} caracteres.`,
            razaoSocial: `Razão social deve conter até ${this.maxLengthRules.razaoSocial} caracteres.`,
            nomeFantasia: `Nome fantasia deve conter até ${this.maxLengthRules.nomeFantasia} caracteres.`,
            rg: `RG deve conter até ${this.maxLengthRules.rg} caracteres.`,
            inscricaoEstadual: `Inscrição estadual deve conter até ${this.maxLengthRules.inscricaoEstadual} caracteres.`,
            inscricaoProdRural: `Inscrição produtor rural deve conter até ${this.maxLengthRules.inscricaoProdRural} caracteres.`
        };
    }
    setFormBuilder(data) {
        let autoUpdateNota = data.autoUpdateNota == 1 ? false : true;
        if (data.tipoPessoa == 'F') {
            this.tipoPessoa = 'F';
            this.form = this.formBuilder.group({
                notaCliente: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
                autoUpdateNota: [autoUpdateNota],
                codCliente: [data.codCliente],
                tipoPessoa: [data.tipoPessoa],
                cpf: [data.cpf, [ng_brazil__WEBPACK_IMPORTED_MODULE_9__["NgBrazilValidators"].cpf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
                rg: [
                    data.rg,
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(this.maxLengthRules.rg)]
                ],
                nome: [
                    data.nome,
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(this.maxLengthRules.nome)]
                ],
                sobrenome: [
                    data.sobrenome,
                    [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(this.maxLengthRules.sobrenome)
                    ]
                ],
                tipoCadastro: [{ value: data.idTipoCadastro, disabled: true }],
                inscricaoProdRural: [
                    data.inscricaoProdRural,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(this.maxLengthRules.inscricaoProdRural)
                ],
                contribuinte: [data.idContribuinte],
                setorAtividade: [
                    {
                        value: data.idSetorAtividade != null ? data.idSetorAtividade : 2,
                        disabled: true
                    }
                ],
                limiteCredito: [{ value: data.limiteCredito, disabled: true }],
                creditoSeguradora: [{ value: data.creditoSeguradora, disabled: true }],
                dataInclusao: [{ value: data.dataInclusao, disabled: true }],
                proximaAnaliseCredito: [
                    { value: data.proximaAnaliseCredito, disabled: true }
                ],
                quemCadastrou: [{ value: data.quemCadastrou, disabled: true }],
                somenteCarteira: [
                    {
                        value: data.somenteCarteira == 0 ? false : true,
                        disabled: true
                    }
                ],
                boletoDescontado: [
                    {
                        value: data.boletoDescontado == 0 ? false : true,
                        disabled: true
                    }
                ],
                somenteAVista: [
                    {
                        value: data.somenteAVista == 0 ? false : true,
                        disabled: true
                    }
                ],
                exigePesagem: [
                    {
                        value: data.exigePesagem == 0 ? false : true,
                        disabled: true
                    }
                ]
            });
            this.checkValidatorsContribuinte(data.inscricaoProdRural);
        }
        else if (data.tipoPessoa == 'J') {
            this.tipoPessoa = 'J';
            this.form = this.formBuilder.group({
                notaCliente: [data.notaCliente, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                autoUpdateNota: [autoUpdateNota],
                codCliente: [data.codCliente],
                tipoPessoa: [data.tipoPessoa],
                cnpj: [data.cnpj, [ng_brazil__WEBPACK_IMPORTED_MODULE_9__["NgBrazilValidators"].cnpj]],
                razaoSocial: [
                    data.razaoSocial,
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(this.maxLengthRules.razaoSocial)]
                ],
                nomeFantasia: [
                    data.nomeFantasia,
                    [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(this.maxLengthRules.nomeFantasia)
                    ]
                ],
                tipoCadastro: [{ value: data.idTipoCadastro, disabled: true }],
                tributacao: [data.idTributacao],
                contribuinte: [data.idContribuinte],
                inscricaoEstadual: [data.inscricaoEstadual],
                setorAtividade: [data.idSetorAtividade, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
                cnae: [data.idCnae, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
                finalidadeMaterial: [data.idFinalidadeMaterial],
                atividadesSecundarias: this.formBuilder.array([]),
                limiteCredito: [{ value: data.limiteCredito, disabled: true }],
                creditoSeguradora: [{ value: data.creditoSeguradora, disabled: true }],
                dataInclusao: [{ value: data.dataInclusao, disabled: true }],
                proximaAnaliseCredito: [
                    { value: data.proximaAnaliseCredito, disabled: true }
                ],
                quemCadastrou: [{ value: data.quemCadastrou, disabled: true }],
                somenteCarteira: [
                    {
                        value: data.somenteCarteira == 0 ? false : true,
                        disabled: true
                    }
                ],
                boletoDescontado: [
                    {
                        value: data.boletoDescontado == 0 ? false : true,
                        disabled: true
                    }
                ],
                somenteAVista: [
                    {
                        value: data.somenteAVista == 0 ? false : true,
                        disabled: true
                    }
                ],
                exigePesagem: [
                    {
                        value: data.exigePesagem == 0 ? false : true,
                        disabled: true
                    }
                ],
                marca: [
                    {
                        value: data.marca == 0 ? false : true,
                        disabled: true
                    }
                ]
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
    checkValidatorsContribuinte(inscricaoProdRural) {
        if (inscricaoProdRural != null) {
            this.form.controls.contribuinte.enable();
            this.form.controls.contribuinte.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]);
        }
        else {
            this.form.controls.contribuinte.disable();
            this.form.controls.contribuinte.clearValidators();
        }
        this.form.controls.contribuinte.updateValueAndValidity();
    }
    checkValidatorsCnpj(cnpj) {
        if (cnpj.length == 0) {
            this.form.controls.cnpj.enable();
            this.form.controls.cnpj.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]);
        }
        else {
            this.form.controls.cnpj.disable();
            this.form.controls.cnpj.clearValidators();
        }
        this.form.controls.cnpj.updateValueAndValidity();
    }
    checkValidatorsRazaoSocial(razaoSocial) {
        if (razaoSocial.length == 0) {
            this.form.controls.razaoSocial.enable();
            this.form.controls.razaoSocial.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]);
        }
        else {
            this.form.controls.razaoSocial.disable();
            this.form.controls.razaoSocial.clearValidators();
        }
        this.form.controls.razaoSocial.updateValueAndValidity();
    }
    checkValidatorsInscricaoEstadual(contribuinte) {
        if (contribuinte == 1) {
            this.form.controls.inscricaoEstadual.setValidators([
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(18)
            ]);
        }
        else {
            this.form.controls.inscricaoEstadual.clearValidators();
        }
        this.form.controls.inscricaoEstadual.updateValueAndValidity();
    }
    checkValidatorsFinalidadesMaterial(finalidadeMaterial) {
        if (finalidadeMaterial == '' || finalidadeMaterial == null) {
            this.form.controls.finalidadeMaterial.enable();
            this.form.controls.finalidadeMaterial.setValidators([
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required
            ]);
        }
        else {
            this.form.controls.finalidadeMaterial.disable();
            this.form.controls.finalidadeMaterial.clearValidators();
        }
        this.form.controls.finalidadeMaterial.updateValueAndValidity();
    }
    setFormAtividadesSecundarias(data) {
        if (data.length > 0 && data != null) {
            for (let i = 0; i < data.length; i++) {
                this.pushAtividadeSecundaria(data[i]);
            }
        }
    }
    onChangeContribuinte(contribuinte) {
        if (contribuinte == 9) {
            this.form.controls.finalidadeMaterial.setValue(5);
            this.form.controls.finalidadeMaterial.disable();
        }
        else {
            this.form.controls.finalidadeMaterial.setValue(this.originalValues.finalidadeMaterial);
        }
    }
    getFormFields(data) {
        if (data.tipoPessoa == 'F') {
            this.formService
                .loadDependenciesPF()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
                this.loaderFullScreen = false;
                this.cadastroService.onNotifyLoaded(false);
            }))
                .subscribe({
                next: (response) => {
                    if (response[0].responseCode === 200) {
                        this.tiposCadastro = response[0].result;
                    }
                    else {
                        this.handleFormFieldsError();
                    }
                    if (response[1].responseCode === 200) {
                        this.contribuintes = response[1].result;
                    }
                    else {
                        this.handleFormFieldsError();
                    }
                    if (response[2].responseCode === 200) {
                        this.setorAtividades = response[2].result;
                    }
                    else {
                        this.handleFormFieldsError();
                    }
                },
                error: (error) => {
                    this.handleFormFieldsError();
                }
            });
        }
        else if (data.tipoPessoa == 'J') {
            this.formService
                .loadDependenciesPJ()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
                this.loaderFullScreen = false;
                this.cadastroService.onNotifyLoaded(false);
            }))
                .subscribe({
                next: (response) => {
                    if (response[0].responseCode === 200) {
                        this.tiposCadastro = response[0].result;
                    }
                    if (response[1].responseCode === 200) {
                        this.regimesTributacao = response[1].result;
                    }
                    else {
                        this.handleFormFieldsError();
                    }
                    if (response[2].responseCode === 200) {
                        this.contribuintes = response[2].result;
                    }
                    else {
                        this.handleFormFieldsError();
                    }
                    if (response[3].responseCode === 200) {
                        this.setorAtividades = response[3].result;
                    }
                    else {
                        this.handleFormFieldsError();
                    }
                    if (response[4].responseCode === 200) {
                        this.finalidadesMaterial = response[4].result;
                    }
                    else {
                        this.handleFormFieldsError();
                    }
                    if (response[5].responseCode === 200) {
                        this.cnaes = response[5].result;
                    }
                    else {
                        this.handleFormFieldsError();
                    }
                },
                error: (error) => {
                    this.handleFormFieldsError();
                }
            });
        }
    }
    handleFormFieldsError() {
        this.pnotifyService.error();
        this.location.back();
    }
    onFieldError(field) {
        if (this.onFieldInvalid(field) != '') {
            return 'is-invalid';
        }
        return '';
    }
    onFieldInvalid(field) {
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
    onFieldRequired(field) {
        let required = false;
        let formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        if (this.form.controls[field].validator) {
            let validationResult = this.form.controls[field].validator(formControl);
            required =
                validationResult !== null && validationResult.required === true;
        }
        if (required) {
            return 'is-required';
        }
    }
    onInscricaoProdutorRural() {
        if (this.form.value.inscricaoProdRural.length > 0) {
            this.form.controls.contribuinte.enable();
            this.form.controls.contribuinte.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]);
            this.form.controls.contribuinte.updateValueAndValidity();
        }
        else {
            this.form.controls.contribuinte.disable();
            this.form.controls.contribuinte.clearValidators();
            this.form.controls.contribuinte.updateValueAndValidity();
        }
    }
    get atividadesSecundarias() {
        return this.form.get('atividadesSecundarias');
    }
    pushAtividadeSecundaria(data) {
        this.atividadesSecundarias.push(this.formBuilder.group({
            id: [data.id],
            idCnae: [data.idCnae],
            descCnae: [data.descCnae]
        }));
    }
    onAtividadesSecundarias() {
        this.showAtividadesSecundarias = !this.showAtividadesSecundarias;
    }
    onAddAtividadeSecundaria() {
        if (this.selectedAtividadeSecundaria != null) {
            for (let i = 0; i < this.cnaes.length; i++) {
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
    onDeleteAtividadeSecundaria(index) {
        if (this.atividadesSecundarias.controls[index].value.idCnae == null) {
            this.atividadesSecundarias.removeAt(index);
        }
        else {
            let confirm$ = this.confirmModalService.showConfirm('delete', 'Confirmar exclusão', 'Deseja realmente prosseguir com a exclusão do registro?', 'Cancelar', 'Confirmar');
            confirm$
                .asObservable()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(result => result
                ? this.deleteAtividadeSecundaria(this.atividadesSecundarias.controls[index].value.idCnae)
                : rxjs__WEBPACK_IMPORTED_MODULE_8__["EMPTY"]))
                .subscribe({
                next: (success) => {
                    this.pnotifyService.success();
                    this.atividadesSecundarias.removeAt(index);
                    this.cadastroService.onNotifyLoaded(false);
                },
                error: (error) => {
                    this.pnotifyService.error('Erro ao excluir atividade. Tente novamente!');
                    this.cadastroService.onNotifyLoaded(false);
                }
            });
        }
    }
    deleteAtividadeSecundaria(codCnae) {
        this.cadastroService.onNotifyLoaded(true);
        return this.clientesService.deleteAtividadeSecundaria(this.codCliente, codCnae);
    }
    onInput() {
        this.formChanged = true;
        this.form.markAsDirty();
    }
    formCanDeactivate() {
        if (this.formChanged) {
            if (confirm('Este cliente no forma parte de tu cartera?')) {
                return true;
            }
            else {
                return false;
            }
        }
        return true;
    }
    onCancel() {
        this.location.back();
    }
    onSubmit() {
        if (this.form.getRawValue().notaCliente == null) {
            this.form.controls.notaCliente.setValue(0);
        }
        if (this.form.pristine) {
            this.location.back();
        }
        else {
            if (this.form.valid) {
                this.cadastroService.onNotifyLoaded(true);
                this.clientesService
                    .updateDadosFaturamento(this.form.getRawValue())
                    .subscribe({
                    next: (response) => {
                        if (response.responseCode === 200) {
                            this.onSended();
                            this.pnotifyService.success();
                            this.cadastroService.onNotifyLoaded(false);
                            this.formChanged = false;
                            this.location.back();
                        }
                        else {
                            this.handleSubmitError();
                        }
                    },
                    error: (error) => {
                        this.handleSubmitError();
                    }
                });
            }
            else {
                this.pnotifyService.notice('Preencha todos os campos obrigatórios.');
            }
        }
    }
    handleSubmitError() {
        this.pnotifyService.error('Ocorreu um erro ao salvar o cadastro.');
        this.cadastroService.onNotifyLoaded(false);
    }
    onSended() {
        this.cadastroService.onNotifySended(true);
    }
};
ComercialClientesCadastroDadosFaturamentoFormularioComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _formulario_service__WEBPACK_IMPORTED_MODULE_13__["ComercialClientesCadastroDadosFaturamentoFormularioService"] },
    { type: _cadastro_service__WEBPACK_IMPORTED_MODULE_14__["ComercialClientesCadastroService"] },
    { type: src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_16__["ComercialService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] },
    { type: src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_15__["ComercialClientesService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"] },
    { type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_12__["ConfirmModalService"] }
];
ComercialClientesCadastroDadosFaturamentoFormularioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-clientes-cadastro-dados-faturamento-formulario',
        template: _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        _formulario_service__WEBPACK_IMPORTED_MODULE_13__["ComercialClientesCadastroDadosFaturamentoFormularioService"],
        _cadastro_service__WEBPACK_IMPORTED_MODULE_14__["ComercialClientesCadastroService"],
        src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_16__["ComercialService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"],
        src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_15__["ComercialClientesService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"],
        src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_12__["ConfirmModalService"]])
], ComercialClientesCadastroDadosFaturamentoFormularioComponent);



/***/ }),

/***/ "AZRv":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/comercial/clientes/cadastro/dados-relacionamento/detalhes/detalhes.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ComercialClientesCadastroDadosRelacionamentoDetalhesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialClientesCadastroDadosRelacionamentoDetalhesComponent", function() { return ComercialClientesCadastroDadosRelacionamentoDetalhesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_detalhes_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./detalhes.component.html */ "QrRL");
/* harmony import */ var _detalhes_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detalhes.component.scss */ "x71E");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modules/comercial/services/clientes.service */ "8ouN");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");






// Services


let ComercialClientesCadastroDadosRelacionamentoDetalhesComponent = class ComercialClientesCadastroDadosRelacionamentoDetalhesComponent {
    constructor(activatedRoute, clientesService, pnotifyService, router) {
        this.activatedRoute = activatedRoute;
        this.clientesService = clientesService;
        this.pnotifyService = pnotifyService;
        this.router = router;
        this.loaderFullScreen = true;
        this.dadosRelacionamento = {};
        this.dadosRelacionamentoLoaded = false;
        this.pnotifyService.getPNotify();
    }
    ngOnInit() {
        this.activatedRoute.parent.parent.params.subscribe(params => {
            this.getDadosRelacionamento(params['id']);
        });
    }
    getDadosRelacionamento(id) {
        this.clientesService
            .getDadosRelacionamento(id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => {
            this.loaderFullScreen = false;
            this.dadosRelacionamentoLoaded = true;
        }))
            .subscribe({
            next: (response) => {
                if (response['responseCode'] === 200) {
                    this.dadosRelacionamento = response['result'];
                    this.dadosRelacionamento['obsPropostas'] =
                        this.dadosRelacionamento['obsPropostas'] != null
                            ? this.dadosRelacionamento['obsPropostas'].replace(/(?:\r\n|\r|\n)/g, '<br />')
                            : null;
                }
                else {
                    this.handleDadosRelacionamentoError(id);
                }
            },
            error: (error) => {
                this.handleDadosRelacionamentoError(id);
            }
        });
    }
    handleDadosRelacionamentoError(id) {
        this.pnotifyService.error();
        this.router.navigate(['/comercial/clientes/detalhes', id]);
    }
};
ComercialClientesCadastroDadosRelacionamentoDetalhesComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_6__["ComercialClientesService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ComercialClientesCadastroDadosRelacionamentoDetalhesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-clientes-cadastro-dados-relacionamento-detalhes',
        template: _raw_loader_detalhes_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detalhes_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_6__["ComercialClientesService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], ComercialClientesCadastroDadosRelacionamentoDetalhesComponent);



/***/ }),

/***/ "B0Of":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/clientes/cadastro/potencial-compra/formulario/formulario-resolver.guard.ts ***!
  \**************************************************************************************************************/
/*! exports provided: ComercialClientesCadastroPotencialCompraResolverGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialClientesCadastroPotencialCompraResolverGuard", function() { return ComercialClientesCadastroPotencialCompraResolverGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/comercial/services/clientes.service */ "8ouN");



let ComercialClientesCadastroPotencialCompraResolverGuard = class ComercialClientesCadastroPotencialCompraResolverGuard {
    constructor(clienteService) {
        this.clienteService = clienteService;
    }
    resolve(route) {
        if (route.parent.parent.params && route.parent.parent.params['id']) {
            return this.clienteService.getPotencialCompra(route.parent.parent.params['id']);
        }
    }
};
ComercialClientesCadastroPotencialCompraResolverGuard.ctorParameters = () => [
    { type: src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_2__["ComercialClientesService"] }
];
ComercialClientesCadastroPotencialCompraResolverGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_2__["ComercialClientesService"]])
], ComercialClientesCadastroPotencialCompraResolverGuard);



/***/ }),

/***/ "BPCR":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/comercial/clientes/cadastro/anexos/formulario/formulario.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NsaWVudGVzL2NhZGFzdHJvL2FuZXhvcy9mb3JtdWxhcmlvL2Zvcm11bGFyaW8uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "C/7g":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/clientes/cadastro/contatos/formulario/formulario.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<div class=\"row\" *ngIf=\"!loaderFullScreen\">\r\n  <div class=\"col\">\r\n    <div class=\"mtc-title\">Editar contacto</div>\r\n    <form [formGroup]=\"form\" autocomplete=\"off\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"nomeCompleto\">Nombre completo</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"nomeCompleto\"\r\n            formControlName=\"nomeCompleto\"\r\n            (input)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('nomeCompleto') + ' ' + onFieldRequired('nomeCompleto')\">\r\n          <invalid-form-control [show]=\"onFieldInvalid('nomeCompleto')\" message=\"Nome completo é obrigatório.\"></invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"genero\">Genero</label>\r\n          <select\r\n            class=\"form-control\"\r\n            id=\"genero\"\r\n            formControlName=\"genero\"\r\n            (change)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('genero') + ' ' + onFieldRequired('genero')\">\r\n            <option value=\"\">SELECCIONE UNA OPCION</option>\r\n            <option value=\"1\">FEMENINO</option>\r\n            <option value=\"2\">MASCULINO</option>\r\n          </select>\r\n          <invalid-form-control [show]=\"onFieldInvalid('genero')\" message=\"El género es obligatorio.\"></invalid-form-control>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"funcao\">Ocupación</label>\r\n          <select\r\n            class=\"form-control\"\r\n            id=\"funcao\"\r\n            formControlName=\"funcao\"\r\n            (change)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('funcao') + ' ' + onFieldRequired('funcao')\">\r\n            <option value=\"\">SELECCIONE UNA OPCIÓN</option>\r\n            <option *ngFor=\"let item of funcoes\" [value]=\"item.id\">{{ item.descricao }}</option>\r\n          </select>\r\n          <invalid-form-control [show]=\"onFieldInvalid('funcao')\" message=\"Se requiere rol\"></invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"setor\">Sector</label>\r\n          <select\r\n            class=\"form-control\"\r\n            id=\"setor\"\r\n            formControlName=\"setor\"\r\n            (change)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('setor') + ' ' + onFieldRequired('setor')\">\r\n            <option value=\"\">SELECCIONE UNA OPCIÓN</option>\r\n            <option *ngFor=\"let item of setores\" [value]=\"item.id\">{{ item.descricao }}</option>\r\n          </select>\r\n          <invalid-form-control [show]=\"onFieldInvalid('setor')\" message=\"El sector es obligatorio.\"></invalid-form-control>\r\n        </div>\r\n      </div>\r\n      <div formArrayName=\"celulares\">\r\n        <div class=\"form-row\">\r\n          <div class=\"col\"><hr class=\"mt-0\"></div>\r\n        </div>\r\n        <div class=\"d-flex justify-content-between\">\r\n          <div class=\"mtc-title\">Celulares</div>\r\n          <div>\r\n            <a\r\n              class=\"text-secondary\"\r\n              (click)=\"onAddMeioContato('celular')\"\r\n              href=\"javascript:void(0)\">\r\n              <b>Adicionar</b>\r\n            </a>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"celulares.controls.length > 0\">\r\n          <div class=\"form-row\" *ngFor=\"let item of celulares.controls; let i = index\" [formGroupName]=\"i\">\r\n            <div class=\"form-group col-6\">\r\n              <label for=\"contato\">Celular</label>\r\n              <div class=\"form-row\">\r\n                <div class=\"col-11\">\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    id=\"contato\"\r\n                    formControlName=\"contato\"\r\n                    (input)=\"onInput()\"\r\n                    telefone [textMask]=\"{ mask: MASKS.telefone.textMaskFunction }\">\r\n                  <div class=\"form-row mt-2\">\r\n                    <div class=\"form-group col-auto mb-0\">\r\n                      <div class=\"custom-control custom-checkbox\">\r\n                        <input\r\n                          type=\"checkbox\"\r\n                          class=\"custom-control-input\"\r\n                          [id]=\"'whatsapp_' + i\"\r\n                          formControlName=\"whatsapp\">\r\n                        <label class=\"custom-control-label\" [for]=\"'whatsapp_' + i\">WhatsApp</label>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-1 pt-2 d-flex justify-content-center\">\r\n                  <button\r\n                    type=\"button\"\r\n                    class=\"btn-icon\"\r\n                    (click)=\"onDeleteMeioContato('celular', i)\">\r\n                    <i class=\"fas fa-trash\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <empty-result message=\"No se encontró información\" *ngIf=\"celulares.controls.length == 0\" class=\"mb-3\"></empty-result>\r\n      </div>\r\n      <div formArrayName=\"telefones\">\r\n        <div class=\"form-row\">\r\n          <div class=\"col\"><hr class=\"mt-0\"></div>\r\n        </div>\r\n        <div class=\"d-flex justify-content-between\">\r\n          <div class=\"mtc-title\">Telefono fijo</div>\r\n          <div>\r\n            <a\r\n              class=\"text-secondary\"\r\n              (click)=\"onAddMeioContato('telefone')\"\r\n              href=\"javascript:void(0)\">\r\n              <b>Adicionar</b>\r\n            </a>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"telefones.controls.length > 0\">\r\n          <div class=\"form-row\" *ngFor=\"let item of telefones.controls; let i = index\" [formGroupName]=\"i\">\r\n            <div class=\"form-group col-6\">\r\n              <label for=\"contato\">Telefono fijo</label>\r\n              <div class=\"form-row\">\r\n                <div class=\"col-11\">\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    id=\"contato\"\r\n                    formControlName=\"contato\"\r\n                    (input)=\"onInput()\"\r\n                    telefone [textMask]=\"{ mask: MASKS.telefone.textMaskFunction }\">\r\n                </div>\r\n                <div class=\"col-1 pt-2 d-flex justify-content-center\">\r\n                  <button\r\n                    type=\"button\"\r\n                    class=\"btn-icon\"\r\n                    (click)=\"onDeleteMeioContato('telefone', i)\">\r\n                    <i class=\"fas fa-trash\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <empty-result message=\"No se encontró información\" *ngIf=\"telefones.controls.length == 0\" class=\"mb-3\"></empty-result>\r\n      </div>\r\n      <div formArrayName=\"emails\">\r\n        <div class=\"form-row\">\r\n          <div class=\"col\"><hr class=\"mt-0\"></div>\r\n        </div>\r\n        <div class=\"d-flex justify-content-between\">\r\n          <div class=\"mtc-title\">E-mails</div>\r\n          <div>\r\n            <a\r\n              class=\"text-secondary\"\r\n              (click)=\"onAddMeioContato('email')\"\r\n              href=\"javascript:void(0)\">\r\n              <b>Adicionar</b>\r\n            </a>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"emails.controls.length > 0\">\r\n          <div class=\"form-row\" *ngFor=\"let item of emails.controls; let i = index\" [formGroupName]=\"i\">\r\n            <div class=\"form-group col-6\">\r\n              <label for=\"contato\">E-mail</label>\r\n              <div class=\"form-row\">\r\n                <div class=\"col-11\">\r\n                  <input\r\n                    type=\"email\"\r\n                    class=\"form-control\"\r\n                    id=\"contato\"\r\n                    formControlName=\"contato\"\r\n                    (input)=\"onInput()\">\r\n                  <div class=\"form-row mt-2\">\r\n                    <div class=\"form-group col-auto mb-0\">\r\n                      <div class=\"custom-control custom-checkbox\">\r\n                        <input\r\n                          type=\"checkbox\"\r\n                          class=\"custom-control-input\"\r\n                          [id]=\"'marketing_' + i\"\r\n                          formControlName=\"marketing\">\r\n                        <label class=\"custom-control-label\" [for]=\"'marketing_' + i\">E-mail marketing</label>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group col-auto mb-0\">\r\n                      <div class=\"custom-control custom-checkbox\">\r\n                        <input\r\n                          type=\"checkbox\"\r\n                          class=\"custom-control-input\"\r\n                          [id]=\"'nfe_' + i\"\r\n                          formControlName=\"nfe\">\r\n                        <label class=\"custom-control-label\" [for]=\"'nfe_' + i\">Envio de NF-e</label>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-1 pt-2 d-flex justify-content-center\">\r\n                  <button\r\n                    type=\"button\"\r\n                    class=\"btn-icon\"\r\n                    (click)=\"onDeleteMeioContato('email', i)\">\r\n                    <i class=\"fas fa-trash\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <empty-result message=\"No se encontró información\" *ngIf=\"emails.controls.length == 0\" class=\"mb-3\"></empty-result>\r\n      </div>\r\n\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n      <!-- <div class=\"form-row\">\r\n        <div class=\"col\"><hr class=\"mt-0\"></div>\r\n      </div>\r\n      <div class=\"mtc-title\">Detalhes</div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"dataAniversario\">Aniversário</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"dataAniversario\"\r\n            formControlName=\"dataAniversario\"\r\n            (input)=\"onInput()\">\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"timeFutebol\">Time de futebol</label>\r\n          <select\r\n            class=\"form-control\"\r\n            id=\"timeFutebol\"\r\n            formControlName=\"timeFutebol\"\r\n            (change)=\"onInput()\">\r\n            <option value=\"\">SELECIONE UMA OPÇÃO</option>\r\n            <option *ngFor=\"let item of timesFutebol\" [value]=\"item.id\">{{ item.descricao }}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"estadoCivil\">Estado civil</label>\r\n          <select\r\n            class=\"form-control\"\r\n            id=\"estadoCivil\"\r\n            formControlName=\"estadoCivil\"\r\n            (change)=\"onInput()\">\r\n            <option value=\"\">SELECIONE UMA OPÇÃO</option>\r\n            <option value=\"1\">SOLTEIRO(A)</option>\r\n            <option value=\"2\">DIVORCIADO(A)</option>\r\n            <option value=\"3\">CASADO(A)</option>\r\n            <option value=\"4\">AMASIADO(A)</option>\r\n            <option value=\"5\">VIÚVO(A)</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"hobbies\">Hobbies</label>\r\n          <input\r\n            type=\"url\"\r\n            class=\"form-control\"\r\n            id=\"hobbies\"\r\n            formControlName=\"hobbies\"\r\n            (input)=\"onInput()\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-4\">\r\n          <label for=\"linkedin\">LinkedIn</label>\r\n          <input\r\n            type=\"url\"\r\n            class=\"form-control\"\r\n            id=\"linkedin\"\r\n            formControlName=\"linkedin\"\r\n            (input)=\"onInput()\">\r\n        </div>\r\n        <div class=\"form-group col-md-4\">\r\n          <label for=\"facebook\">Facebook</label>\r\n          <input\r\n            type=\"url\"\r\n            class=\"form-control\"\r\n            id=\"facebook\"\r\n            formControlName=\"facebook\"\r\n            (input)=\"onInput()\">\r\n        </div>\r\n        <div class=\"form-group col-md-4\">\r\n          <label for=\"instagram\">Instagram</label>\r\n          <input\r\n            type=\"url\"\r\n            class=\"form-control\"\r\n            id=\"instagram\"\r\n            formControlName=\"instagram\"\r\n            (input)=\"onInput()\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col\">\r\n          <label for=\"observacoes\">Observações</label>\r\n          <textarea\r\n            class=\"form-control\"\r\n            id=\"observacoes\"\r\n            formControlName=\"observacoes\"\r\n            (input)=\"onInput()\">\r\n          </textarea>\r\n        </div>\r\n      </div>\r\n      <div formArrayName=\"filhos\">\r\n        <div class=\"form-row\">\r\n          <div class=\"col\"><hr class=\"mt-0\"></div>\r\n        </div>\r\n        <div class=\"d-flex justify-content-between\">\r\n          <div class=\"mtc-title\">Filhos</div>\r\n          <div>\r\n              <a\r\n                class=\"text-secondary\"\r\n                (click)=\"onAddFilho()\"\r\n                href=\"javascript:void(0)\">\r\n                <b>Adicionar</b>\r\n              </a>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"filhos.controls.length > 0\">\r\n          <div class=\"form-row\" *ngFor=\"let item of filhos.controls; let i = index\" [formGroupName]=\"i\">\r\n            <div class=\"form-group col-6\">\r\n              <label for=\"contato\">Nome</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"nome\"\r\n                formControlName=\"nome\"\r\n                (input)=\"onInput()\">\r\n            </div>\r\n            <div class=\"form-group col-6\">\r\n              <label for=\"idade\">Idade</label>\r\n              <div class=\"form-row\">\r\n                <div class=\"col-11\">\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    id=\"idade\"\r\n                    formControlName=\"idade\"\r\n                    (input)=\"onInput()\">\r\n                </div>\r\n                <div class=\"col-1 pt-2 d-flex justify-content-center\">\r\n                  <button\r\n                    type=\"button\"\r\n                    class=\"btn-icon\"\r\n                    (click)=\"onDeleteFilho(i)\">\r\n                    <i class=\"fas fa-trash\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <empty-result message=\"No se encontró información\" *ngIf=\"filhos.controls.length == 0\"></empty-result>\r\n      </div> -->\r\n");

/***/ }),

/***/ "CelN":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/comercial/clientes/cadastro/informacoes-comerciais/detalhes/detalhes.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: ComercialClientesCadastroInfosComerciaisDetalhesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialClientesCadastroInfosComerciaisDetalhesComponent", function() { return ComercialClientesCadastroInfosComerciaisDetalhesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_detalhes_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./detalhes.component.html */ "0gs9");
/* harmony import */ var _detalhes_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detalhes.component.scss */ "NfpL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modules/comercial/services/clientes.service */ "8ouN");





// Services


let ComercialClientesCadastroInfosComerciaisDetalhesComponent = class ComercialClientesCadastroInfosComerciaisDetalhesComponent {
    constructor(activatedRoute, router, pnotifyService, clientesService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.pnotifyService = pnotifyService;
        this.clientesService = clientesService;
        this.loaderFullScreen = true;
        this.infosComerciais = {};
        this.infosComerciaisLoaded = false;
        this.pnotifyService.getPNotify();
    }
    ngOnInit() {
        this.activatedRoute.parent.parent.params.subscribe(params => {
            this.clientesService
                .getInformacoesComerciais(params['id'])
                .subscribe((response) => {
                if (response['responseCode'] === 200) {
                    this.loaderFullScreen = false;
                    this.infosComerciais = response['result'];
                    this.infosComerciaisLoaded = true;
                }
                else if (response['responseCode'] === 204) {
                    this.loaderFullScreen = false;
                    this.infosComerciaisLoaded = true;
                }
                else {
                    this.pnotifyService.error();
                    this.router.navigate([
                        '/comercial/clientes/detalhes',
                        params['id']
                    ]);
                }
            });
        });
    }
};
ComercialClientesCadastroInfosComerciaisDetalhesComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"] },
    { type: src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_6__["ComercialClientesService"] }
];
ComercialClientesCadastroInfosComerciaisDetalhesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-clientes-cadastro-informacoes-comerciais-detalhes',
        template: _raw_loader_detalhes_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detalhes_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"],
        src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_6__["ComercialClientesService"]])
], ComercialClientesCadastroInfosComerciaisDetalhesComponent);



/***/ }),

/***/ "Hzf7":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/clientes/cadastro/anexos/detalhes/detalhes.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<div class=\"row\" *ngIf=\"anexosLoaded\">\r\n  <div class=\"col\">\r\n    <div class=\"mtc-title\">Anexos</div>\r\n    <ul *ngIf=\"anexos.length > 0\">\r\n      <li *ngFor=\"let anexo of anexos\">\r\n        <div class=\"d-flex\">\r\n          <div>\r\n            <i class=\"far fa-file-pdf text-danger\"></i><strong class=\"ml-2\">{{ anexo.nomeExibicao | capitalizeFirst }}</strong>\r\n          </div>\r\n          <div class=\"ml-4\">\r\n            <a [href]=\"anexo.urlAnexo\" target=\"_blank\" class=\"btn-icon-sm\">\r\n              <i class=\"fas fa-eye\"></i>\r\n            </a>\r\n            <button type=\"button\" class=\"btn-icon-sm ml-4\" (click)=\"onDelete(anexo)\">\r\n              <i class=\"fas fa-trash\"></i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <div><hr></div>\r\n      </li>\r\n    </ul>\r\n    <div class=\"row py-5 my-5\" *ngIf=\"anexos.length == 0\">\r\n      <div class=\"col\">\r\n        <empty-result message=\"No se encontró información\"></empty-result>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "KWqw":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/comercial/clientes/cadastro/potencial-compra/detalhes/detalhes.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ComercialClientesCadastroPotencialCompraDetalhesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialClientesCadastroPotencialCompraDetalhesComponent", function() { return ComercialClientesCadastroPotencialCompraDetalhesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_detalhes_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./detalhes.component.html */ "Uwyb");
/* harmony import */ var _detalhes_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detalhes.component.scss */ "aeBB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/comercial/services/clientes.service */ "8ouN");






// Services


let ComercialClientesCadastroPotencialCompraDetalhesComponent = class ComercialClientesCadastroPotencialCompraDetalhesComponent {
    constructor(activatedRoute, router, pnotifyService, clientesService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.pnotifyService = pnotifyService;
        this.clientesService = clientesService;
        this.loaderFullScreen = true;
        this.potencialCompra = [];
        this.potencialCompraLoaded = false;
        this.pnotifyService.getPNotify();
    }
    ngOnInit() {
        this.activatedRoute.parent.parent.params.subscribe(params => {
            this.getPotencialCompra(params['id']);
        });
    }
    getPotencialCompra(id) {
        this.clientesService
            .getPotencialCompra(id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => {
            this.loaderFullScreen = false;
            this.potencialCompraLoaded = true;
        }))
            .subscribe({
            next: (response) => {
                if (response['responseCode'] === 200) {
                    this.potencialCompra = response['result'];
                }
            },
            error: (error) => {
                this.pnotifyService.error();
                this.router.navigate(['/comercial/clientes/detalhes', id]);
            }
        });
    }
    handleNumber(number) {
        let fixedNumber;
        if (number == 0 || number == null) {
            fixedNumber = '0.000';
        }
        else {
            fixedNumber = number.toFixed(3);
        }
        return fixedNumber;
    }
};
ComercialClientesCadastroPotencialCompraDetalhesComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"] },
    { type: src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_7__["ComercialClientesService"] }
];
ComercialClientesCadastroPotencialCompraDetalhesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-clientes-cadastro-potencial-compra-detalhes',
        template: _raw_loader_detalhes_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detalhes_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"],
        src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_7__["ComercialClientesService"]])
], ComercialClientesCadastroPotencialCompraDetalhesComponent);



/***/ }),

/***/ "L/8C":
/*!***************************************************************************!*\
  !*** ./src/app/modules/comercial/clientes/cadastro/cadastro.component.ts ***!
  \***************************************************************************/
/*! exports provided: ComercialClientesCadastroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialClientesCadastroComponent", function() { return ComercialClientesCadastroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cadastro.component.html */ "3Lpy");
/* harmony import */ var _cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cadastro.component.scss */ "8ljO");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _detalhes_detalhes_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../detalhes/detalhes.service */ "k2l4");
/* harmony import */ var src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/modules/comercial/services/clientes.service */ "8ouN");
/* harmony import */ var _cadastro_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cadastro.service */ "N70Q");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");







// Services






let ComercialClientesCadastroComponent = class ComercialClientesCadastroComponent {
    constructor(router, activatedRoute, location, detalhesService, clientesService, cadastroService, pnotifyService, atividadesService, titleService) {
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
    ngOnInit() {
        if (this.activatedRoute.snapshot.data['response']['responseCode'] === 200) {
            this.activatedRoute.params.subscribe(params => {
                this.codCliente = params['id'];
                this.registrarAcesso();
                this.setBreadCrumb(this.codCliente);
                this.onRouterChange();
                this.sendedSubscription();
                // this.getTravas(this.codCliente);
                this.getDetalhes(this.codCliente);
            });
        }
        else if (this.activatedRoute.snapshot.data['response']['responseCode'] === 403) {
            this.pnotifyService.notice('Este cliente no pertenece a su cartera');
            this.router.navigate(['/comercial/home']);
        }
        else {
            this.pnotifyService.error();
            this.location.back();
        }
    }
    ngAfterContentChecked() {
        this.loadedSubscription();
    }
    ngOnDestroy() {
        this.subscriptionLoaded.unsubscribe();
        this.subscriptionSended.unsubscribe();
    }
    loadedSubscription() {
        this.subscriptionLoaded = this.cadastroService.notifyLoadedObservable$.subscribe((response) => {
            this.loaderNavbar = response;
        });
    }
    sendedSubscription() {
        this.subscriptionSended = this.cadastroService.notifySendedObservable$.subscribe((response) => {
            if (response === true) {
                if (this.travas > 0) {
                    this.getTravas(this.codCliente);
                }
            }
        });
    }
    registrarAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
    }
    setBreadCrumb(id) {
        let router = this.router.url.split('/');
        let currRoute = '';
        if (router.length == 6) {
            currRoute = router[router.length - 1];
        }
        else if (router.length == 7) {
            currRoute = router[router.length - 2];
        }
        else if (router.length == 8) {
            currRoute = router[router.length - 3];
        }
        else if (router.length == 9) {
            currRoute = router[router.length - 4];
        }
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: '/comercial/home'
            },
            {
                descricao: 'Busqueda de clientes',
                routerLink: '/comercial/clientes/lista'
            },
            {
                descricao: 'Detalles',
                routerLink: `/comercial/clientes/detalhes/${id}`
            },
            {
                descricao: this.breadCrumbConfig(currRoute)
            },
            {
                descricao: 'reporte',
                routerLink: '/comercial/reporte'
            },
        ];
    }
    breadCrumbConfig(route) {
        let descricao = '';
        if (route == 'dados-faturamento') {
            descricao = 'Datos de facturación';
        }
        else if (route == 'enderecos') {
            descricao = 'Direcciones';
        }
        else if (route == 'contatos') {
            descricao = 'Contactos';
        }
        else if (route == 'dados-relacionamento') {
            descricao = 'Datos de la relación';
        }
        else if (route == 'potencial-compra') {
            descricao = 'Potencial de compra';
        }
        else if (route == 'anexos') {
            descricao = 'Anexos';
        }
        else if (route == 'filial') {
            descricao = 'Filial';
        }
        else if (route == 'travas') {
            descricao = 'Cerraduras';
        }
        else if (route == 'informacoes-financeiras') {
            descricao = 'Información financiera';
        }
        else if (route == 'informacoes-comerciais') {
            descricao = 'Información Comercial';
        }
        this.title = descricao;
        this.titleService.setTitle(descricao);
        return descricao;
    }
    actionButtonsConfig() {
        let router = this.router.url.split('/');
        let routeConfig = {};
        if (router.length == 6) {
            routeConfig = {
                route: router[router.length - 1],
                form: false
            };
        }
        else if (router.length == 7) {
            routeConfig = {
                route: router[router.length - 2],
                form: true
            };
        }
        else if (router.length == 8) {
            routeConfig = {
                route: router[router.length - 3],
                form: true
            };
        }
        else if (router.length == 9) {
            routeConfig = {
                route: router[router.length - 4],
                form: true
            };
        }
        if (routeConfig['route'] == 'dados-faturamento') {
            if (routeConfig['form']) {
                this.setButtonConfig(false, false, true, true);
            }
            else {
                this.setButtonConfig(true, false, false, false);
            }
        }
        else if (routeConfig['route'] == 'enderecos') {
            if (routeConfig['form']) {
                this.setButtonConfig(false, false, true, true);
            }
            else {
                this.setButtonConfig(false, true, false, false);
            }
        }
        else if (routeConfig['route'] == 'contatos') {
            if (routeConfig['form']) {
                this.setButtonConfig(false, false, true, true);
            }
            else {
                this.setButtonConfig(false, true, false, false);
            }
        }
        else if (routeConfig['route'] == 'dados-relacionamento') {
            if (routeConfig['form']) {
                this.setButtonConfig(false, false, true, true);
            }
            else {
                this.setButtonConfig(true, false, false, false);
            }
        }
        else if (routeConfig['route'] == 'potencial-compra') {
            if (routeConfig['form']) {
                this.setButtonConfig(false, false, true, true);
            }
            else {
                this.setButtonConfig(true, false, false, false);
            }
        }
        else if (routeConfig['route'] == 'anexos') {
            if (routeConfig['form']) {
                this.setButtonConfig(false, false, true, true);
            }
            else {
                this.setButtonConfig(false, true, false, false);
            }
        }
        else if (routeConfig['route'] == 'filial') {
            this.setButtonConfig(false, false, false, false);
        }
        else if (routeConfig['route'] == 'travas') {
            this.setButtonConfig(false, false, false, false);
        }
        else if (routeConfig['route'] == 'informacoes-financeiras') {
            this.setButtonConfig(false, false, false, false);
        }
        else if (routeConfig['route'] == 'informacoes-comerciais') {
            this.setButtonConfig(false, false, false, false);
        }
    }
    setButtonConfig(edit, add, cancel, submit) {
        this.showEditButton = edit;
        this.showAddButton = add;
        this.showCancelButton = cancel;
        this.showSubmitButton = submit;
    }
    onRouterChange() {
        this.router.events.subscribe(event => {
            this.actionButtonsConfig();
            this.setBreadCrumb(this.codCliente);
        });
    }
    getTravas(id) {
        this.clientesService.getTravas(id).subscribe({
            next: (response) => {
                if (response['responseCode'] === 200) {
                    let travas = 0;
                    if (response['result'].length > 0) {
                        for (let i = 0; i < response['result'].length; i++) {
                            if (response['result'][i]['situacao'] == 'TRAVADO') {
                                travas++;
                            }
                        }
                        this.travas = travas;
                    }
                }
            },
            error: (error) => {
                this.pnotifyService.error('Ocurrio un error al cargar las deudas.');
                this.location.back();
            }
        });
    }
    getDetalhes(codCliente) {
        this.detalhesService
            .getDetalhes(codCliente)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => {
            this.loaderFullScreen = false;
        }))
            .subscribe((response) => {
            if (response['responseCode'] === 200) {
                this.cliente = response['result'];
            }
        });
    }
    onEdit() {
        this.router.navigate([this.router.url, 'editar']);
    }
    onCancel() {
        this.cadastroService.onNotifyCancel(true);
    }
    onSubmit() {
        this.cadastroService.onNotifySubmit(true);
    }
    onAdd() {
        this.router.navigate([this.router.url, 'novo']);
    }
};
ComercialClientesCadastroComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] },
    { type: _detalhes_detalhes_service__WEBPACK_IMPORTED_MODULE_8__["ComercialClientesDetalheService"] },
    { type: src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_9__["ComercialClientesService"] },
    { type: _cadastro_service__WEBPACK_IMPORTED_MODULE_10__["ComercialClientesCadastroService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__["AtividadesService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_12__["TitleService"] }
];
ComercialClientesCadastroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'comercial-clientes-cadastro',
        template: _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"],
        _detalhes_detalhes_service__WEBPACK_IMPORTED_MODULE_8__["ComercialClientesDetalheService"],
        src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_9__["ComercialClientesService"],
        _cadastro_service__WEBPACK_IMPORTED_MODULE_10__["ComercialClientesCadastroService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__["AtividadesService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_12__["TitleService"]])
], ComercialClientesCadastroComponent);



/***/ }),

/***/ "LXQP":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/clientes/cadastro/dados-relacionamento/formulario/formulario-resolver.guard.ts ***!
  \******************************************************************************************************************/
/*! exports provided: ComercialClientesCadastroDadosRelacionamentoResolverGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialClientesCadastroDadosRelacionamentoResolverGuard", function() { return ComercialClientesCadastroDadosRelacionamentoResolverGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/comercial/services/clientes.service */ "8ouN");


// Services

let ComercialClientesCadastroDadosRelacionamentoResolverGuard = class ComercialClientesCadastroDadosRelacionamentoResolverGuard {
    constructor(clienteService) {
        this.clienteService = clienteService;
    }
    resolve(route) {
        if (route.parent.parent.params && route.parent.parent.params['id']) {
            return this.clienteService.getDadosRelacionamento(route.parent.parent.params['id']);
        }
    }
};
ComercialClientesCadastroDadosRelacionamentoResolverGuard.ctorParameters = () => [
    { type: src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_2__["ComercialClientesService"] }
];
ComercialClientesCadastroDadosRelacionamentoResolverGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_2__["ComercialClientesService"]])
], ComercialClientesCadastroDadosRelacionamentoResolverGuard);



/***/ }),

/***/ "LqIA":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/clientes/cadastro/dados-faturamento/formulario/formulario.component.scss ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NsaWVudGVzL2NhZGFzdHJvL2RhZG9zLWZhdHVyYW1lbnRvL2Zvcm11bGFyaW8vZm9ybXVsYXJpby5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "LqhE":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/comercial/clientes/cadastro/potencial-compra/formulario/formulario.component.scss ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NsaWVudGVzL2NhZGFzdHJvL3BvdGVuY2lhbC1jb21wcmEvZm9ybXVsYXJpby9mb3JtdWxhcmlvLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "Mia2":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/clientes/cadastro/informacoes-financeiras/detalhes/detalhes.component.scss ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NsaWVudGVzL2NhZGFzdHJvL2luZm9ybWFjb2VzLWZpbmFuY2VpcmFzL2RldGFsaGVzL2RldGFsaGVzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "N70Q":
/*!*************************************************************************!*\
  !*** ./src/app/modules/comercial/clientes/cadastro/cadastro.service.ts ***!
  \*************************************************************************/
/*! exports provided: ComercialClientesCadastroService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialClientesCadastroService", function() { return ComercialClientesCadastroService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");



let ComercialClientesCadastroService = class ComercialClientesCadastroService {
    constructor() {
        this.notifyLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.notifyCancel = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.notifySubmit = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.notifySended = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.notifyLoadedObservable$ = this.notifyLoaded.asObservable();
        this.notifyCancelObservable$ = this.notifyCancel.asObservable();
        this.notifySubmitObservable$ = this.notifySubmit.asObservable();
        this.notifySendedObservable$ = this.notifySended.asObservable();
    }
    onNotifyLoaded(data) {
        this.notifyLoaded.next(data);
    }
    onNotifyCancel(data) {
        this.notifyCancel.next(data);
    }
    onNotifySubmit(data) {
        this.notifySubmit.next(data);
    }
    onNotifySended(data) {
        this.notifySended.next(data);
    }
};
ComercialClientesCadastroService.ctorParameters = () => [];
ComercialClientesCadastroService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ComercialClientesCadastroService);



/***/ }),

/***/ "NfpL":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/clientes/cadastro/informacoes-comerciais/detalhes/detalhes.component.scss ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NsaWVudGVzL2NhZGFzdHJvL2luZm9ybWFjb2VzLWNvbWVyY2lhaXMvZGV0YWxoZXMvZGV0YWxoZXMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "PPg3":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/comercial/clientes/cadastro/anexos/detalhes/detalhes.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ComercialClientesCadastroAnexosDetalhesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialClientesCadastroAnexosDetalhesComponent", function() { return ComercialClientesCadastroAnexosDetalhesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_detalhes_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./detalhes.component.html */ "Hzf7");
/* harmony import */ var _detalhes_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detalhes.component.scss */ "/m+g");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/comercial/services/clientes.service */ "8ouN");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/modules/confirm-modal/confirm-modal.service */ "FOez");







// Services



let ComercialClientesCadastroAnexosDetalhesComponent = class ComercialClientesCadastroAnexosDetalhesComponent {
    constructor(activatedRoute, clientesService, confirmModalService, pnotifyService, router) {
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
    ngOnInit() {
        this.getAnexos();
    }
    getAnexos() {
        this.activatedRoute.parent.parent.params.subscribe(params => {
            this.clientesService
                .getAnexos(params['id'])
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => {
                this.loaderFullScreen = false;
            }))
                .subscribe((response) => {
                if (response['success'] == true && response['data'].length > 0) {
                    this.loaderFullScreen = false;
                    this.anexos = response['data'];
                    console.log(this.anexos);
                    this.anexosLoaded = true;
                }
                else if (response['success'] == true && response['data'].length == 0) {
                    this.loaderFullScreen = false;
                    this.anexosLoaded = true;
                }
                else {
                    this.pnotifyService.error();
                    console.log('erro');
                    // this.router.navigate([
                    //   '/comercial/clientes/detalhes',
                    //   params['id']
                    // ]);
                }
            });
        });
    }
    onDelete(anexo) {
        let confirm$ = this.confirmModalService.showConfirm('delete', 'Confirmar exclusão', 'Deseja realmente prosseguir com a exclusão do anexo?', 'Cancelar', 'Confirmar');
        confirm$
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(result => (result ? this.deleteAnexo(anexo.codAnexo) : rxjs__WEBPACK_IMPORTED_MODULE_6__["EMPTY"])))
            .subscribe({
            next: (success) => {
                this.pnotifyService.success();
                this.anexos = [];
                this.getAnexos();
            },
            error: (error) => {
                this.pnotifyService.error('Erro ao excluir anexo. Tente novamente!');
            }
        });
    }
    deleteAnexo(id) {
        this.loaderFullScreen = true;
        this.anexosLoaded = false;
        return this.clientesService.deleteAnexo(id);
    }
};
ComercialClientesCadastroAnexosDetalhesComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_7__["ComercialClientesService"] },
    { type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_9__["ConfirmModalService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ComercialClientesCadastroAnexosDetalhesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-clientes-cadastro-anexos-detalhes',
        template: _raw_loader_detalhes_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detalhes_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_7__["ComercialClientesService"],
        src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_9__["ConfirmModalService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], ComercialClientesCadastroAnexosDetalhesComponent);



/***/ }),

/***/ "QOcb":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/comercial/clientes/cadastro/enderecos/detalhes/detalhes.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ComercialClientesCadastroEnderecosDetalhesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialClientesCadastroEnderecosDetalhesComponent", function() { return ComercialClientesCadastroEnderecosDetalhesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_detalhes_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./detalhes.component.html */ "YmkE");
/* harmony import */ var _detalhes_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detalhes.component.scss */ "+NUh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var ng_brazil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-brazil */ "hTrW");
/* harmony import */ var src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modules/comercial/services/clientes.service */ "8ouN");
/* harmony import */ var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/modules/confirm-modal/confirm-modal.service */ "FOez");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");







// ng-brazil

// Services




let ComercialClientesCadastroEnderecosDetalhesComponent = class ComercialClientesCadastroEnderecosDetalhesComponent {
    constructor(activatedRoute, clientesService, confirmModalService, pnotifyService, router, dateService) {
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
    ngOnInit() {
        this.activatedRoute.parent.parent.params.subscribe((params) => {
            this.codCliente = params.id;
            this.tpEndereco = params.tpEndereco;
            this.getEnderecos();
        });
    }
    getEnderecos() {
        this.enderecos = [];
        this.enderecosAguardandoAprovacao = [];
        this.enderecosInativos = [];
        this.enderecosLoaded = false;
        this.clientesService
            .getEnderecos(this.codCliente)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => {
            this.loaderFullScreen = false;
            this.enderecosLoaded = true;
        }))
            .subscribe({
            next: (response) => {
                console.log(response);
                if (response.success === true) {
                    this.enderecos = response.data.enderecos;
                    if (response.data.enderecosAguardando) {
                        this.enderecosAguardandoAprovacao =
                            response.data.enderecosAguardando;
                    }
                    if (response.data.enderecosInativos) {
                        this.enderecosInativos = response.data.enderecosInativos;
                    }
                }
            },
            error: (error) => {
                this.pnotifyService.error();
                this.router.navigate([
                    '/comercial/clientes/detalhes',
                    this.codCliente
                ]);
            }
        });
    }
    tipoEndereco(endereco) {
        let tipoEndereco;
        if (endereco['principal'] == 1) {
            tipoEndereco = 'Dirección principal';
        }
        else if (endereco['cobranca'] == 1) {
            tipoEndereco = 'Dirección de cobranza';
        }
        else if (endereco['entrega'] == 1) {
            tipoEndereco = 'Dirección de entrega';
            if (endereco['titulo'] != null && endereco['titulo'].length > 0) {
                tipoEndereco = `${tipoEndereco} (${endereco['titulo']})`;
            }
        }
        return tipoEndereco;
    }
    convertMysqlTime(time) {
        return this.dateService.convertMysqlTime(time);
    }
    onDelete(endereco) {
        if (endereco.principal == 0) {
            let confirm$ = this.confirmModalService.showConfirm('delete', 'Confirmar exclusão', 'Deseja realmente prosseguir com a exclusão do endereço?', 'Cancelar', 'Confirmar');
            confirm$
                .asObservable()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(result => result ? this.deleteEndereco(endereco.id) : rxjs__WEBPACK_IMPORTED_MODULE_6__["EMPTY"]))
                .subscribe({
                next: (success) => {
                    this.pnotifyService.success();
                    this.getEnderecos();
                },
                error: (error) => {
                    this.pnotifyService.error('Erro ao excluir endereço. Tente novamente!');
                }
            });
        }
    }
    deleteEndereco(id) {
        this.loaderFullScreen = true;
        this.enderecosLoaded = false;
        return this.clientesService.deleteEndereco(this.codCliente, id);
    }
};
ComercialClientesCadastroEnderecosDetalhesComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_8__["ComercialClientesService"] },
    { type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_9__["ConfirmModalService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_11__["DateService"] }
];
ComercialClientesCadastroEnderecosDetalhesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-clientes-cadastro-enderecos-detalhes',
        template: _raw_loader_detalhes_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detalhes_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_8__["ComercialClientesService"],
        src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_9__["ConfirmModalService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_11__["DateService"]])
], ComercialClientesCadastroEnderecosDetalhesComponent);



/***/ }),

/***/ "QPni":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/clientes/cadastro/informacoes-financeiras/detalhes/detalhes.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: ComercialClientesCadastroInfosFinanceirasDetalhesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialClientesCadastroInfosFinanceirasDetalhesComponent", function() { return ComercialClientesCadastroInfosFinanceirasDetalhesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_detalhes_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./detalhes.component.html */ "sPal");
/* harmony import */ var _detalhes_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detalhes.component.scss */ "Mia2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modules/comercial/services/clientes.service */ "8ouN");





// Services


let ComercialClientesCadastroInfosFinanceirasDetalhesComponent = class ComercialClientesCadastroInfosFinanceirasDetalhesComponent {
    constructor(activatedRoute, router, pnotifyService, clientesService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.pnotifyService = pnotifyService;
        this.clientesService = clientesService;
        this.loaderFullScreen = true;
        this.infosFinanceiras = {};
        this.infosFinanceirasLoaded = false;
        this.pnotifyService.getPNotify();
    }
    ngOnInit() {
        this.activatedRoute.parent.parent.params.subscribe(params => {
            this.clientesService
                .getInformacoesFinanceiras(params['id'])
                .subscribe((response) => {
                if (response['responseCode'] === 200) {
                    this.loaderFullScreen = false;
                    this.infosFinanceiras = response['result'];
                    this.infosFinanceirasLoaded = true;
                }
                else if (response['responseCode'] === 204) {
                    this.loaderFullScreen = false;
                    this.infosFinanceirasLoaded = true;
                }
                else {
                    this.pnotifyService.error();
                    this.router.navigate([
                        '/comercial/clientes/detalhes',
                        params['id']
                    ]);
                }
            });
        });
    }
};
ComercialClientesCadastroInfosFinanceirasDetalhesComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"] },
    { type: src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_6__["ComercialClientesService"] }
];
ComercialClientesCadastroInfosFinanceirasDetalhesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-clientes-cadastro-informacoes-comerciais-detalhes',
        template: _raw_loader_detalhes_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detalhes_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"],
        src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_6__["ComercialClientesService"]])
], ComercialClientesCadastroInfosFinanceirasDetalhesComponent);



/***/ }),

/***/ "QrRL":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/clientes/cadastro/dados-relacionamento/detalhes/detalhes.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<div class=\"row\" *ngIf=\"dadosRelacionamentoLoaded\">\r\n  <div class=\"col\">\r\n    <div class=\"mtc-title\">Datos de relación</div>\r\n    <div class=\"form-row\">\r\n      <div class=\"form-group col-md-6\">\r\n        <label>Tipo de servicio</label>\r\n        <div *ngIf=\"dadosRelacionamento.descTipoAtendimento == null\">SIN INFORMACION</div>\r\n        <div *ngIf=\"dadosRelacionamento.descTipoAtendimento != null\">{{ dadosRelacionamento.descTipoAtendimento | uppercase }}</div>\r\n      </div>\r\n      <div class=\"form-group col-md-6\">\r\n        <label>Período</label>\r\n        <div *ngIf=\"dadosRelacionamento.descPeriodo == null\">SIN INFORMACION</div>\r\n        <div *ngIf=\"dadosRelacionamento.descPeriodo != null\">{{ dadosRelacionamento.descPeriodo | uppercase }}</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-row\">\r\n      <div class=\"form-group col\">\r\n        <label>Mejores días para contactar</label>\r\n        <ol class=\"breadcrumb bg-white p-0 m-0\">\r\n          <li class=\"breadcrumb-item active text-dark\" *ngIf=\"dadosRelacionamento.diasContato.segunda == 1\">Lunes</li>\r\n          <li class=\"breadcrumb-item active text-dark\" *ngIf=\"dadosRelacionamento.diasContato.terca == 1\">Martes</li>\r\n          <li class=\"breadcrumb-item active text-dark\" *ngIf=\"dadosRelacionamento.diasContato.quarta == 1\">Miercoles</li>\r\n          <li class=\"breadcrumb-item active text-dark\" *ngIf=\"dadosRelacionamento.diasContato.quinta == 1\">Jueves</li>\r\n          <li class=\"breadcrumb-item active text-dark\" *ngIf=\"dadosRelacionamento.diasContato.sexta == 1\">Viernes</li>\r\n          <li class=\"breadcrumb-item active text-dark\" *ngIf=\"dadosRelacionamento.diasContato.sabado == 1\">Sabado</li>\r\n        </ol>\r\n        <div *ngIf=\"dadosRelacionamento.diasContato.segunda == 0 &&\r\n                    dadosRelacionamento.diasContato.terca == 0 &&\r\n                    dadosRelacionamento.diasContato.quarta == 0 &&\r\n                    dadosRelacionamento.diasContato.quinta == 0 &&\r\n                    dadosRelacionamento.diasContato.sexta == 0 &&\r\n                    dadosRelacionamento.diasContato.sabado == 0\">\r\n          SIN INFORMACION\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-row\">\r\n      <div class=\"form-group col-md-6\">\r\n        <label>Frecuencia de contactos</label>\r\n        <div *ngIf=\"dadosRelacionamento.descFrequenciaContato == null\">SIN INFORMACION</div>\r\n        <div *ngIf=\"dadosRelacionamento.descFrequenciaContato != null\">{{ dadosRelacionamento.descFrequenciaContato | uppercase }}</div>\r\n      </div>\r\n      <div class=\"form-group col-md-6\">\r\n        <label>Frecuencia de visitas</label>\r\n        <div *ngIf=\"dadosRelacionamento.descFrequenciaVisita == null\">SIN INFORMACION</div>\r\n        <div *ngIf=\"dadosRelacionamento.descFrequenciaVisita != null\">{{ dadosRelacionamento.descFrequenciaVisita | uppercase }}</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-row\">\r\n      <div class=\"form-group col-md-6\">\r\n        <label>Fuente de contacto</label>\r\n        <div *ngIf=\"dadosRelacionamento.descOrigemContato == null\">SIN INFORMACION</div>\r\n        <div *ngIf=\"dadosRelacionamento.descOrigemContato != null\">{{ dadosRelacionamento.descOrigemContato | uppercase }}</div>\r\n      </div>\r\n      <div class=\"form-group col-md-6\">\r\n        <label>Website</label>\r\n        <div *ngIf=\"dadosRelacionamento.website == null\">SIN INFORMACION</div>\r\n        <div *ngIf=\"dadosRelacionamento.website != null\">\r\n          <a [href]=\"dadosRelacionamento.website\" target=\"_blank\">{{ dadosRelacionamento.website | lowercase }}</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-row\">\r\n      <div class=\"form-group col\">\r\n        <label>Observaciones (Propuestas)</label>\r\n        <div *ngIf=\"dadosRelacionamento.obsPropostas == null\">SIN INFORMACION</div>\r\n        <div *ngIf=\"dadosRelacionamento.obsPropostas != null\" [innerHTML]=\"dadosRelacionamento.obsPropostas | uppercase\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "UPcH":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/comercial/clientes/cadastro/contatos/formulario/formulario.service.ts ***!
  \***********************************************************************************************/
/*! exports provided: ComercialClientesCadastroContatosFormularioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialClientesCadastroContatosFormularioService", function() { return ComercialClientesCadastroContatosFormularioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");





let ComercialClientesCadastroContatosFormularioService = class ComercialClientesCadastroContatosFormularioService {
    constructor(http) {
        this.http = http;
        this.API = `http://23.254.204.187/api/comercial/clientes/cadastro/formulario/contatos`;
    }
    loadDepencies() {
        let funcoes = this.getFuncoes();
        let setores = this.getSetores();
        // let timesFutebol = this.getTimesFutebol();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])([funcoes, setores]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getFuncoes() {
        return this.http.get(`${this.API}/funcoes`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getSetores() {
        return this.http.get(`${this.API}/setores`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getTimesFutebol() {
        return this.http.get(`${this.API}/times-futebol`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
};
ComercialClientesCadastroContatosFormularioService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ComercialClientesCadastroContatosFormularioService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ComercialClientesCadastroContatosFormularioService);



/***/ }),

/***/ "Uwyb":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/clientes/cadastro/potencial-compra/detalhes/detalhes.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<div class=\"row\" *ngIf=\"potencialCompraLoaded\">\r\n  <div class=\"col\">\r\n    <div class=\"mtc-title\">Potencial de compra (mensual)</div>\r\n    <div class=\"form-row\" *ngIf=\"potencialCompra.length > 0\">\r\n      <div class=\"form-group col-md-6\" *ngFor=\"let item of potencialCompra\">\r\n        <label>{{ item.descricao | capitalizeFirst }}</label>\r\n        <div>De {{ handleNumber(item.de) }}t até {{ handleNumber(item.ate) }}t</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row py-5 my-5\" *ngIf=\"potencialCompra.length == 0\">\r\n      <div class=\"col\">\r\n        <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "W5BC":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/clientes/cadastro/dados-relacionamento/formulario/formulario.component.scss ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NsaWVudGVzL2NhZGFzdHJvL2RhZG9zLXJlbGFjaW9uYW1lbnRvL2Zvcm11bGFyaW8vZm9ybXVsYXJpby5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "Wgoc":
/*!********************************************************************************!*\
  !*** ./src/app/modules/comercial/clientes/cadastro/cadastro-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: ComercialCadastrosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCadastrosRoutingModule", function() { return ComercialCadastrosRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/guards/form-deactivate.guard */ "iMgG");
/* harmony import */ var _clientes_resolver_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../clientes-resolver.guard */ "NJR3");
/* harmony import */ var _dados_faturamento_formulario_formulario_data_resolver_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dados-faturamento/formulario/formulario-data-resolver.guard */ "3j3d");
/* harmony import */ var _dados_faturamento_formulario_formulario_rules_resolver_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dados-faturamento/formulario/formulario-rules-resolver.guard */ "oH+a");
/* harmony import */ var _enderecos_formulario_formulario_data_resolver_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./enderecos/formulario/formulario-data-resolver.guard */ "wDVn");
/* harmony import */ var _enderecos_formulario_formulario_rules_resolver_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./enderecos/formulario/formulario-rules-resolver.guard */ "ruYJ");
/* harmony import */ var _contatos_formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contatos/formulario/formulario-resolver.guard */ "+MnF");
/* harmony import */ var _dados_relacionamento_formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dados-relacionamento/formulario/formulario-resolver.guard */ "LXQP");
/* harmony import */ var _potencial_compra_formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./potencial-compra/formulario/formulario-resolver.guard */ "B0Of");
/* harmony import */ var _cadastro_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cadastro.component */ "L/8C");
/* harmony import */ var _dados_faturamento_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dados-faturamento/detalhes/detalhes.component */ "fjd7");
/* harmony import */ var _dados_faturamento_formulario_formulario_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dados-faturamento/formulario/formulario.component */ "8yz0");
/* harmony import */ var _enderecos_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./enderecos/detalhes/detalhes.component */ "QOcb");
/* harmony import */ var _enderecos_formulario_formulario_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./enderecos/formulario/formulario.component */ "n1L9");
/* harmony import */ var _contatos_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./contatos/detalhes/detalhes.component */ "qJk7");
/* harmony import */ var _contatos_formulario_formulario_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./contatos/formulario/formulario.component */ "nF7G");
/* harmony import */ var _dados_relacionamento_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./dados-relacionamento/detalhes/detalhes.component */ "AZRv");
/* harmony import */ var _dados_relacionamento_formulario_formulario_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./dados-relacionamento/formulario/formulario.component */ "1kjR");
/* harmony import */ var _potencial_compra_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./potencial-compra/detalhes/detalhes.component */ "KWqw");
/* harmony import */ var _potencial_compra_formulario_formulario_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./potencial-compra/formulario/formulario.component */ "4zD7");
/* harmony import */ var _anexos_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./anexos/detalhes/detalhes.component */ "PPg3");
/* harmony import */ var _anexos_formulario_formulario_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./anexos/formulario/formulario.component */ "0TGB");
/* harmony import */ var _filial_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./filial/detalhes/detalhes.component */ "sveC");
/* harmony import */ var _travas_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./travas/detalhes/detalhes.component */ "igIG");
/* harmony import */ var _informacoes_financeiras_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./informacoes-financeiras/detalhes/detalhes.component */ "QPni");
/* harmony import */ var _informacoes_comerciais_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./informacoes-comerciais/detalhes/detalhes.component */ "CelN");



// Guards









// Components

















const routes = [
    {
        path: ':id',
        component: _cadastro_component__WEBPACK_IMPORTED_MODULE_12__["ComercialClientesCadastroComponent"],
        resolve: {
            response: _clientes_resolver_guard__WEBPACK_IMPORTED_MODULE_4__["ComercialClientesResolverGuard"]
        },
        children: [
            {
                path: '',
                redirectTo: 'dados-faturamento',
                pathMatch: 'full'
            },
            {
                path: 'dados-faturamento',
                children: [
                    {
                        path: '',
                        component: _dados_faturamento_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_13__["ComercialClientesCadastroDadosFaturamentoDetalhesComponent"]
                    },
                    {
                        path: 'editar',
                        component: _dados_faturamento_formulario_formulario_component__WEBPACK_IMPORTED_MODULE_14__["ComercialClientesCadastroDadosFaturamentoFormularioComponent"],
                        resolve: {
                            data: _dados_faturamento_formulario_formulario_data_resolver_guard__WEBPACK_IMPORTED_MODULE_5__["ComercialClientesCadastroDadosFaturamentoResolverGuard"],
                            rules: _dados_faturamento_formulario_formulario_rules_resolver_guard__WEBPACK_IMPORTED_MODULE_6__["ComercialClientesCadastroDadosFaturamentoRulesResolverGuard"]
                        },
                        canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]]
                    }
                ]
            },
            {
                path: 'enderecos',
                children: [
                    {
                        path: '',
                        component: _enderecos_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_15__["ComercialClientesCadastroEnderecosDetalhesComponent"]
                    },
                    {
                        path: 'novo',
                        component: _enderecos_formulario_formulario_component__WEBPACK_IMPORTED_MODULE_16__["ComercialClientesCadastroEnderecosFormularioComponent"],
                        resolve: {
                            data: _enderecos_formulario_formulario_data_resolver_guard__WEBPACK_IMPORTED_MODULE_7__["ComercialClientesCadastroEnderecosResolverGuard"],
                            rules: _enderecos_formulario_formulario_rules_resolver_guard__WEBPACK_IMPORTED_MODULE_8__["ComercialClientesCadastroEnderecosRulesResolverGuard"]
                        },
                        canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]]
                    },
                    {
                        path: 'editar/:idEndereco/:idSituacao',
                        component: _enderecos_formulario_formulario_component__WEBPACK_IMPORTED_MODULE_16__["ComercialClientesCadastroEnderecosFormularioComponent"],
                        resolve: {
                            data: _enderecos_formulario_formulario_data_resolver_guard__WEBPACK_IMPORTED_MODULE_7__["ComercialClientesCadastroEnderecosResolverGuard"],
                            rules: _enderecos_formulario_formulario_rules_resolver_guard__WEBPACK_IMPORTED_MODULE_8__["ComercialClientesCadastroEnderecosRulesResolverGuard"]
                        },
                        canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]]
                    }
                ]
            },
            {
                path: 'contatos',
                children: [
                    {
                        path: '',
                        component: _contatos_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_17__["ComercialClientesCadastroContatosDetalhesComponent"]
                    },
                    {
                        path: 'novo',
                        component: _contatos_formulario_formulario_component__WEBPACK_IMPORTED_MODULE_18__["ComercialClientesCadastroContatosFormularioComponent"],
                        resolve: {
                            data: _contatos_formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_9__["ComercialClientesCadastroContatosResolverGuard"]
                        },
                        canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]]
                    },
                    {
                        path: 'editar/:idContato',
                        component: _contatos_formulario_formulario_component__WEBPACK_IMPORTED_MODULE_18__["ComercialClientesCadastroContatosFormularioComponent"],
                        resolve: {
                            data: _contatos_formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_9__["ComercialClientesCadastroContatosResolverGuard"]
                        },
                        canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]]
                    }
                ]
            },
            {
                path: 'dados-relacionamento',
                children: [
                    {
                        path: '',
                        component: _dados_relacionamento_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_19__["ComercialClientesCadastroDadosRelacionamentoDetalhesComponent"]
                    },
                    {
                        path: 'editar',
                        component: _dados_relacionamento_formulario_formulario_component__WEBPACK_IMPORTED_MODULE_20__["ComercialClientesCadastroDadosRelacionamentoFormularioComponent"],
                        resolve: {
                            data: _dados_relacionamento_formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_10__["ComercialClientesCadastroDadosRelacionamentoResolverGuard"]
                        },
                        canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]]
                    }
                ]
            },
            {
                path: 'potencial-compra',
                children: [
                    {
                        path: '',
                        component: _potencial_compra_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_21__["ComercialClientesCadastroPotencialCompraDetalhesComponent"]
                    },
                    {
                        path: 'editar',
                        component: _potencial_compra_formulario_formulario_component__WEBPACK_IMPORTED_MODULE_22__["ComercialClientesCadastroPotencialCompraFormularioComponent"],
                        resolve: {
                            data: _potencial_compra_formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_11__["ComercialClientesCadastroPotencialCompraResolverGuard"]
                        },
                        canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]]
                    }
                ]
            },
            {
                path: 'anexos',
                children: [
                    {
                        path: '',
                        component: _anexos_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_23__["ComercialClientesCadastroAnexosDetalhesComponent"]
                    },
                    {
                        path: 'novo',
                        component: _anexos_formulario_formulario_component__WEBPACK_IMPORTED_MODULE_24__["ComercialClientesCadastroAnexosFormularioComponent"]
                    }
                ]
            },
            {
                path: 'filial',
                children: [
                    {
                        path: '',
                        component: _filial_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_25__["ComercialClientesCadastroFilialDetalhesComponent"]
                    }
                ]
            },
            {
                path: 'travas',
                children: [
                    {
                        path: '',
                        component: _travas_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_26__["ComercialClientesCadastroTravasDetalhesComponent"]
                    }
                ]
            },
            {
                path: 'informacoes-financeiras',
                children: [
                    {
                        path: '',
                        component: _informacoes_financeiras_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_27__["ComercialClientesCadastroInfosFinanceirasDetalhesComponent"]
                    }
                ]
            },
            {
                path: 'informacoes-comerciais',
                children: [
                    {
                        path: '',
                        component: _informacoes_comerciais_detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_28__["ComercialClientesCadastroInfosComerciaisDetalhesComponent"]
                    }
                ]
            }
        ]
    },
    {
        path: '**',
        redirectTo: '/comercial/home',
        pathMatch: 'full'
    }
];
let ComercialCadastrosRoutingModule = class ComercialCadastrosRoutingModule {
};
ComercialCadastrosRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ComercialCadastrosRoutingModule);



/***/ }),

/***/ "YmkE":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/clientes/cadastro/enderecos/detalhes/detalhes.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<div class=\"row\" *ngIf=\"enderecosLoaded\">\r\n  <div class=\"col\">\r\n    <div class=\"mtc-title\">Direcciones</div>\r\n    <accordion *ngIf=\"enderecos && enderecos.length > 0\">\r\n      <accordion-group class=\"mb-2\" [heading]=\"tipoEndereco(endereco)\" *ngFor=\"let endereco of enderecos\">\r\n        <div class=\"d-flex justify-content-between w-100 mb-3\">\r\n          <div class=\"mtc-title mb-0\">{{ tipoEndereco(endereco) }}</div>\r\n          <div>\r\n            <a\r\n              class=\"text-secondary\"\r\n              [routerLink]=\"['editar', endereco.id, 1]\"\r\n              *ngIf=\"endereco.principal == 0\">\r\n              <b>Editar</b>\r\n            </a>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <!-- <div class=\"form-group col-md-6\">\r\n            <label>CEP</label>\r\n            <div *ngIf=\"endereco.cep == null\">SIN INFORMACION</div>\r\n            <div *ngIf=\"endereco.cep != null\">{{ endereco.cep | cep }}</div>\r\n          </div> -->\r\n          <div class=\"form-group col-md-6\">\r\n            <label>Direccion</label>\r\n            <div *ngIf=\"endereco.endereco == null\">SIN INFORMACION</div>\r\n            <div *ngIf=\"endereco.endereco != null\">{{ endereco.endereco }}</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <!-- <div class=\"form-group col-md-6\">\r\n            <label>Número</label>\r\n            <div *ngIf=\"endereco.numero == null\">SIN INFORMACION</div>\r\n            <div *ngIf=\"endereco.numero != null\">{{ endereco.numero }}</div>\r\n          </div> -->\r\n          <div class=\"form-group col-md-6\">\r\n            <label>Complemento</label>\r\n            <div *ngIf=\"endereco.complemento == null\">SIN INFORMACION</div>\r\n            <div *ngIf=\"endereco.complemento != null\">{{ endereco.complemento }}</div>\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label>Referencia</label>\r\n            <div *ngIf=\"endereco.referencia == null\">SIN INFORMACION</div>\r\n            <div *ngIf=\"endereco.referencia != null\">{{ endereco.referencia }}</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label>Barrio</label>\r\n            <div *ngIf=\"endereco.bairro == null\">SIN INFORMACION</div>\r\n            <div *ngIf=\"endereco.bairro != null\">{{ endereco.bairro }}</div>\r\n          </div>\r\n          <div class=\"form-group col-md-6 mb-0\">\r\n            <label>Ciudad</label>\r\n            <div *ngIf=\"endereco.cidade == null\">SIN INFORMACION</div>\r\n            <div *ngIf=\"endereco.cidade != null\">\r\n              {{ endereco.cidade }}<span *ngIf=\"endereco.uf != null\"> / {{ endereco.uf }}</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <!-- <div class=\"form-group col-md-6 mb-0\" *ngIf=\"endereco.principal == 1\">\r\n            <label>Región de operación comercial</label>\r\n            <div *ngIf=\"endereco.descAtuacaoComercial == null\">SIN INFORMACION</div>\r\n            <div *ngIf=\"endereco.descAtuacaoComercial != null\">{{ endereco.descAtuacaoComercial }}</div>\r\n          </div> -->\r\n        </div>\r\n        <div *ngIf=\"endereco.entrega == 1\">\r\n          <div class=\"form-row\">\r\n            <div class=\"col\"><hr></div>\r\n          </div>\r\n          <div class=\"mtc-title\">Datos de entrega</div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-6\">\r\n              <label>NOMBRE DEL LUGAR DE ENTREGA</label>\r\n              <div *ngIf=\"endereco.titulo == null\">SIN INFORMACION</div>\r\n              <div *ngIf=\"endereco.titulo != null\">{{ endereco.titulo }}</div>\r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n              <label>Region de entrega</label>\r\n              <div *ngIf=\"endereco.descRegiaoEntrega == null\">SIN INFORMACION</div>\r\n              <div *ngIf=\"endereco.descRegiaoEntrega != null\">{{ endereco.descRegiaoEntrega }}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col\">\r\n              <label>Dias para realizar entregas</label>\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col d-flex w-100 mb-1\">\r\n                  <div class=\"d-flex mr-1\">\r\n                    <div class=\"mr-1\">\r\n                      <i class=\"fas fa-times-circle text-danger\" *ngIf=\"endereco.diasEntrega.segunda.checked == 0\"></i>\r\n                      <i class=\"fas fa-check-circle text-success\" *ngIf=\"endereco.diasEntrega.segunda.checked == 1\"></i>\r\n                    </div>\r\n                    <span>Segunda-feira:</span>\r\n                  </div>\r\n                  <div *ngIf=\"endereco.diasEntrega.segunda.checked == 1\">\r\n                    <div *ngIf=\"endereco.diasEntrega.segunda.minimo !== null && endereco.diasEntrega.segunda.maximo !== null\">\r\n                      de {{ convertMysqlTime(endereco.diasEntrega.segunda.minimo) }} a {{ convertMysqlTime(endereco.diasEntrega.segunda.maximo) }}\r\n                    </div>\r\n                    <div *ngIf=\"endereco.diasEntrega.segunda.minimo == null || endereco.diasEntrega.segunda.maximo == null\">\r\n                      horario no definido\r\n                    </div>\r\n                  </div>\r\n                  <strong *ngIf=\"endereco.diasEntrega.segunda.checked == 0\">\r\n                    No acepta entregas\r\n                  </strong>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col d-flex w-100 mb-1\">\r\n                  <div class=\"d-flex mr-1\">\r\n                    <div class=\"mr-1\">\r\n                      <i class=\"fas fa-times-circle text-danger\" *ngIf=\"endereco.diasEntrega.terca.checked == 0\"></i>\r\n                      <i class=\"fas fa-check-circle text-success\" *ngIf=\"endereco.diasEntrega.terca.checked == 1\"></i>\r\n                    </div>\r\n                    <span>Terça-feira:</span>\r\n                  </div>\r\n                  <div *ngIf=\"endereco.diasEntrega.terca.checked == 1\">\r\n                    <div *ngIf=\"endereco.diasEntrega.terca.minimo !== null && endereco.diasEntrega.terca.maximo !== null\">\r\n                      das {{ convertMysqlTime(endereco.diasEntrega.terca.minimo) }} às {{ convertMysqlTime(endereco.diasEntrega.terca.maximo) }}\r\n                    </div>\r\n                    <div *ngIf=\"endereco.diasEntrega.terca.minimo == null || endereco.diasEntrega.terca.maximo == null\">\r\n                      horario no definido\r\n                    </div>\r\n                  </div>\r\n                  <strong *ngIf=\"endereco.diasEntrega.terca.checked == 0\">\r\n                    No acepta entregas\r\n                  </strong>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col d-flex w-100 mb-1\">\r\n                  <div class=\"d-flex mr-1\">\r\n                    <div class=\"mr-1\">\r\n                      <i class=\"fas fa-times-circle text-danger\" *ngIf=\"endereco.diasEntrega.quarta.checked == 0\"></i>\r\n                      <i class=\"fas fa-check-circle text-success\" *ngIf=\"endereco.diasEntrega.quarta.checked == 1\"></i>\r\n                    </div>\r\n                    <span>Quarta-feira:</span>\r\n                  </div>\r\n                  <div *ngIf=\"endereco.diasEntrega.quarta.checked == 1\">\r\n                    <div *ngIf=\"endereco.diasEntrega.quarta.minimo !== null && endereco.diasEntrega.quarta.maximo !== null\">\r\n                      das {{ convertMysqlTime(endereco.diasEntrega.quarta.minimo) }} às {{ convertMysqlTime(endereco.diasEntrega.quarta.maximo) }}\r\n                    </div>\r\n                    <div *ngIf=\"endereco.diasEntrega.quarta.minimo == null || endereco.diasEntrega.quarta.maximo == null\">\r\n                      horario no definido\r\n                    </div>\r\n                  </div>\r\n                  <strong *ngIf=\"endereco.diasEntrega.quarta.checked == 0\">\r\n                    No acepta entregas\r\n                  </strong>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col d-flex w-100 mb-1\">\r\n                  <div class=\"d-flex mr-1\">\r\n                    <div class=\"mr-1\">\r\n                      <i class=\"fas fa-times-circle text-danger\" *ngIf=\"endereco.diasEntrega.quinta.checked == 0\"></i>\r\n                      <i class=\"fas fa-check-circle text-success\" *ngIf=\"endereco.diasEntrega.quinta.checked == 1\"></i>\r\n                    </div>\r\n                    <span>Quinta-feira:</span>\r\n                  </div>\r\n                  <div *ngIf=\"endereco.diasEntrega.quinta.checked == 1\">\r\n                    <div *ngIf=\"endereco.diasEntrega.quinta.minimo !== null && endereco.diasEntrega.quinta.maximo !== null\">\r\n                      das {{ convertMysqlTime(endereco.diasEntrega.quinta.minimo) }} às {{ convertMysqlTime(endereco.diasEntrega.quinta.maximo) }}\r\n                    </div>\r\n                    <div *ngIf=\"endereco.diasEntrega.quinta.minimo == null || endereco.diasEntrega.quinta.maximo == null\">\r\n                      horario no definido\r\n                    </div>\r\n                  </div>\r\n                  <strong *ngIf=\"endereco.diasEntrega.quinta.checked == 0\">\r\n                    No acepta entregas\r\n                  </strong>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col d-flex w-100 mb-1\">\r\n                  <div class=\"d-flex mr-1\">\r\n                    <div class=\"mr-1\">\r\n                      <i class=\"fas fa-times-circle text-danger\" *ngIf=\"endereco.diasEntrega.sexta.checked == 0\"></i>\r\n                      <i class=\"fas fa-check-circle text-success\" *ngIf=\"endereco.diasEntrega.sexta.checked == 1\"></i>\r\n                    </div>\r\n                    <span>Sexta-feira:</span>\r\n                  </div>\r\n                  <div *ngIf=\"endereco.diasEntrega.sexta.checked == 1\">\r\n                    <div *ngIf=\"endereco.diasEntrega.sexta.minimo !== null && endereco.diasEntrega.sexta.maximo !== null\">\r\n                      das {{ convertMysqlTime(endereco.diasEntrega.sexta.minimo) }} às {{ convertMysqlTime(endereco.diasEntrega.sexta.maximo) }}\r\n                    </div>\r\n                    <div *ngIf=\"endereco.diasEntrega.sexta.minimo == null || endereco.diasEntrega.sexta.maximo == null\">\r\n                      horario no definido\r\n                    </div>\r\n                  </div>\r\n                  <strong *ngIf=\"endereco.diasEntrega.sexta.checked == 0\">\r\n                    No acepta entregas\r\n                  </strong>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col d-flex w-100 mb-1\">\r\n                  <div class=\"d-flex mr-1\">\r\n                    <div class=\"mr-1\">\r\n                      <i class=\"fas fa-times-circle text-danger\" *ngIf=\"endereco.diasEntrega.sabado.checked == 0\"></i>\r\n                      <i class=\"fas fa-check-circle text-success\" *ngIf=\"endereco.diasEntrega.sabado.checked == 1\"></i>\r\n                    </div>\r\n                    <span>Sábado:</span>\r\n                  </div>\r\n                  <div *ngIf=\"endereco.diasEntrega.sabado.checked == 1\">\r\n                    <div *ngIf=\"endereco.diasEntrega.sabado.minimo !== null && endereco.diasEntrega.sabado.maximo !== null\">\r\n                      das {{ convertMysqlTime(endereco.diasEntrega.sabado.minimo) }} às {{ convertMysqlTime(endereco.diasEntrega.sabado.maximo) }}\r\n                    </div>\r\n                    <div *ngIf=\"endereco.diasEntrega.sabado.minimo == null || endereco.diasEntrega.sabado.maximo == null\">\r\n                      horario no definido\r\n                    </div>\r\n                  </div>\r\n                  <strong *ngIf=\"endereco.diasEntrega.sabado.checked == 0\">\r\n                    No acepta entregas\r\n                  </strong>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col d-flex w-100 mb-1\">\r\n                  <div class=\"d-flex mr-1\">\r\n                    <div class=\"mr-1\">\r\n                      <i class=\"fas fa-times-circle text-danger\" *ngIf=\"endereco.diasEntrega.domingo.checked == 0\"></i>\r\n                      <i class=\"fas fa-check-circle text-success\" *ngIf=\"endereco.diasEntrega.domingo.checked == 1\"></i>\r\n                    </div>\r\n                    <span>Domingo:</span>\r\n                  </div>\r\n                  <div *ngIf=\"endereco.diasEntrega.domingo.checked == 1\">\r\n                    <div *ngIf=\"endereco.diasEntrega.domingo.minimo !== null && endereco.diasEntrega.domingo.maximo !== null\">\r\n                      das {{ convertMysqlTime(endereco.diasEntrega.domingo.minimo) }} às {{ convertMysqlTime(endereco.diasEntrega.domingo.maximo) }}\r\n                    </div>\r\n                    <div *ngIf=\"endereco.diasEntrega.domingo.minimo == null || endereco.diasEntrega.domingo.maximo == null\">\r\n                      horario no definido\r\n                    </div>\r\n                  </div>\r\n                  <strong *ngIf=\"endereco.diasEntrega.domingo.checked == 0\">\r\n                    No acepta entregas\r\n                  </strong>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-6\">\r\n              <label>Tipo de material</label>\r\n              <div *ngIf=\"endereco.dsTipoMaterial == null\">SIN INFORMACION</div>\r\n              <div *ngIf=\"endereco.dsTipoMaterial != null\">{{ endereco.dsTipoMaterial | uppercase }}</div>\r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n              <label>Tipo de descarga</label>\r\n              <div *ngIf=\"endereco.dsTipoDescarga == null\">SIN INFORMACION</div>\r\n              <div *ngIf=\"endereco.dsTipoDescarga != null\">{{ endereco.dsTipoDescarga | uppercase }}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-6\">\r\n              <label>Modo de descarga</label>\r\n              <div *ngIf=\"endereco.dsModoDescarga == null\">SIN INFORMACION</div>\r\n              <div *ngIf=\"endereco.dsModoDescarga != null\">{{ endereco.dsModoDescarga | uppercase }}</div>\r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n              <label>Tipos de veículo</label>\r\n              <div *ngIf=\"endereco.tiposVeiculosDesc == null\">SIN INFORMACION</div>\r\n              <div *ngIf=\"endereco.tiposVeiculosDesc != null\">{{ endereco.tiposVeiculosDesc | uppercase }}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-6 mb-0\">\r\n              <label>Dados especiais</label>\r\n              <div *ngIf=\"endereco.dadosEspeciaisDesc == null\">SIN INFORMACION</div>\r\n              <div *ngIf=\"endereco.dadosEspeciaisDesc != null\">{{ endereco.dadosEspeciaisDesc | uppercase }}</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </accordion-group>\r\n    </accordion>\r\n    <div class=\"row py-5 my-5\" *ngIf=\"!enderecos\">\r\n      <div class=\"col\">\r\n        <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n      </div>\r\n    </div>\r\n    <div  *ngIf=\"enderecosAguardandoAprovacao && enderecosAguardandoAprovacao.length > 0\">\r\n      <div class=\"mtc-title\">Endereços aguardando aprovação</div>\r\n      <accordion>\r\n        <accordion-group class=\"mb-2\" [heading]=\"endereco.cidade\" *ngFor=\"let endereco of enderecosAguardandoAprovacao\">\r\n          <!-- <div class=\"d-flex justify-content-between w-100 mb-3\">\r\n            <div class=\"mtc-title mb-0\">{{ endereco.cidade }}</div>\r\n            <div>\r\n              <a\r\n                class=\"text-secondary\"\r\n                [routerLink]=\"['editar', endereco.id, endereco.situacao]\"\r\n                *ngIf=\"endereco.situacao == 3\">\r\n                <b>Editar</b>\r\n              </a>\r\n            </div>\r\n          </div> -->\r\n          <div class=\"form-row\">\r\n            <!-- <div class=\"form-group col-md-6\">\r\n              <label>CEP</label>\r\n              <div *ngIf=\"endereco.cep == null\">SIN INFORMACION</div>\r\n              <div *ngIf=\"endereco.cep != null\">{{ endereco.cep | cep }}</div>\r\n            </div> -->\r\n            <div class=\"form-group col-md-6\">\r\n              <label>Dirección</label>\r\n              <div *ngIf=\"endereco.endereco == null\">SIN INFORMACION</div>\r\n              <div *ngIf=\"endereco.endereco != null\">{{ endereco.endereco }}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <!-- <div class=\"form-group col-md-6\">\r\n              <label>Número</label>\r\n              <div *ngIf=\"endereco.numero == null\">SIN INFORMACION</div>\r\n              <div *ngIf=\"endereco.numero != null\">{{ endereco.numero }}</div>\r\n            </div> -->\r\n            <div class=\"form-group col-md-6\">\r\n              <label>Complemento</label>\r\n              <div *ngIf=\"endereco.complemento == null\">SIN INFORMACION</div>\r\n              <div *ngIf=\"endereco.complemento != null\">{{ endereco.complemento }}</div>\r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n              <label>Referencia</label>\r\n              <div *ngIf=\"endereco.referencia == null\">SIN INFORMACION</div>\r\n              <div *ngIf=\"endereco.referencia != null\">{{ endereco.referencia }}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-6\">\r\n              <label>Barrio</label>\r\n              <div *ngIf=\"endereco.bairro == null\">SIN INFORMACION</div>\r\n              <div *ngIf=\"endereco.bairro != null\">{{ endereco.bairro }}</div>\r\n            </div>\r\n            <div class=\"form-group col-md-6 mb-0\">\r\n              <label>Ciudad</label>\r\n              <div *ngIf=\"endereco.cidade == null\">SIN INFORMACION</div>\r\n              <div *ngIf=\"endereco.cidade != null\">\r\n                {{ endereco.cidade }}<span *ngIf=\"endereco.uf != null\"> / {{ endereco.uf }}</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div>\r\n            <div class=\"form-row\">\r\n              <div class=\"col\"><hr></div>\r\n            </div>\r\n            <div class=\"mtc-title\">Datos de entrega</div>\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-md-6\">\r\n                <label>Título de la ubicación de entrega</label>\r\n                <div *ngIf=\"endereco.titulo == null\">SIN INFORMACION</div>\r\n                <div *ngIf=\"endereco.titulo != null\">{{ endereco.titulo }}</div>\r\n              </div>\r\n              <div class=\"form-group col-md-6\">\r\n                <label>Región de entrega</label>\r\n                <div *ngIf=\"endereco.descRegiaoEntrega == null\">SIN INFORMACION</div>\r\n                <div *ngIf=\"endereco.descRegiaoEntrega != null\">{{ endereco.descRegiaoEntrega }}</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col\">\r\n                <label>Dias para realizar entregas</label>\r\n                <div class=\"form-row\">\r\n                  <div class=\"form-group col d-flex w-100 mb-1\">\r\n                    <div class=\"d-flex mr-1\">\r\n                      <div class=\"mr-1\">\r\n                        <i class=\"fas fa-times-circle text-danger\" *ngIf=\"endereco.diasEntrega.segunda.checked == 0\"></i>\r\n                        <i class=\"fas fa-check-circle text-success\" *ngIf=\"endereco.diasEntrega.segunda.checked == 1\"></i>\r\n                      </div>\r\n                      <span>Lunes:</span>\r\n                    </div>\r\n                    <div *ngIf=\"endereco.diasEntrega.segunda.checked == 1\">\r\n                      <div *ngIf=\"endereco.diasEntrega.segunda.minimo !== null && endereco.diasEntrega.segunda.maximo !== null\">\r\n                        das {{ convertMysqlTime(endereco.diasEntrega.segunda.minimo) }} às {{ convertMysqlTime(endereco.diasEntrega.segunda.maximo) }}\r\n                      </div>\r\n                      <div *ngIf=\"endereco.diasEntrega.segunda.minimo == null || endereco.diasEntrega.segunda.maximo == null\">\r\n                        horario no definido\r\n                      </div>\r\n                    </div>\r\n                    <strong *ngIf=\"endereco.diasEntrega.segunda.checked == 0\">\r\n                      No acepta entregas\r\n                    </strong>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-row\">\r\n                  <div class=\"form-group col d-flex w-100 mb-1\">\r\n                    <div class=\"d-flex mr-1\">\r\n                      <div class=\"mr-1\">\r\n                        <i class=\"fas fa-times-circle text-danger\" *ngIf=\"endereco.diasEntrega.terca.checked == 0\"></i>\r\n                        <i class=\"fas fa-check-circle text-success\" *ngIf=\"endereco.diasEntrega.terca.checked == 1\"></i>\r\n                      </div>\r\n                      <span>Martes:</span>\r\n                    </div>\r\n                    <div *ngIf=\"endereco.diasEntrega.terca.checked == 1\">\r\n                      <div *ngIf=\"endereco.diasEntrega.terca.minimo !== null && endereco.diasEntrega.terca.maximo !== null\">\r\n                        das {{ convertMysqlTime(endereco.diasEntrega.terca.minimo) }} às {{ convertMysqlTime(endereco.diasEntrega.terca.maximo) }}\r\n                      </div>\r\n                      <div *ngIf=\"endereco.diasEntrega.terca.minimo == null || endereco.diasEntrega.terca.maximo == null\">\r\n                        horario no definido\r\n                      </div>\r\n                    </div>\r\n                    <strong *ngIf=\"endereco.diasEntrega.terca.checked == 0\">\r\n                      No acepta entregas\r\n                    </strong>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-row\">\r\n                  <div class=\"form-group col d-flex w-100 mb-1\">\r\n                    <div class=\"d-flex mr-1\">\r\n                      <div class=\"mr-1\">\r\n                        <i class=\"fas fa-times-circle text-danger\" *ngIf=\"endereco.diasEntrega.quarta.checked == 0\"></i>\r\n                        <i class=\"fas fa-check-circle text-success\" *ngIf=\"endereco.diasEntrega.quarta.checked == 1\"></i>\r\n                      </div>\r\n                      <span>Miercoles:</span>\r\n                    </div>\r\n                    <div *ngIf=\"endereco.diasEntrega.quarta.checked == 1\">\r\n                      <div *ngIf=\"endereco.diasEntrega.quarta.minimo !== null && endereco.diasEntrega.quarta.maximo !== null\">\r\n                        das {{ convertMysqlTime(endereco.diasEntrega.quarta.minimo) }} às {{ convertMysqlTime(endereco.diasEntrega.quarta.maximo) }}\r\n                      </div>\r\n                      <div *ngIf=\"endereco.diasEntrega.quarta.minimo == null || endereco.diasEntrega.quarta.maximo == null\">\r\n                        horario no definido\r\n                      </div>\r\n                    </div>\r\n                    <strong *ngIf=\"endereco.diasEntrega.quarta.checked == 0\">\r\n                      No acepta entregas\r\n                    </strong>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-row\">\r\n                  <div class=\"form-group col d-flex w-100 mb-1\">\r\n                    <div class=\"d-flex mr-1\">\r\n                      <div class=\"mr-1\">\r\n                        <i class=\"fas fa-times-circle text-danger\" *ngIf=\"endereco.diasEntrega.quinta.checked == 0\"></i>\r\n                        <i class=\"fas fa-check-circle text-success\" *ngIf=\"endereco.diasEntrega.quinta.checked == 1\"></i>\r\n                      </div>\r\n                      <span>Jueves:</span>\r\n                    </div>\r\n                    <div *ngIf=\"endereco.diasEntrega.quinta.checked == 1\">\r\n                      <div *ngIf=\"endereco.diasEntrega.quinta.minimo !== null && endereco.diasEntrega.quinta.maximo !== null\">\r\n                        das {{ convertMysqlTime(endereco.diasEntrega.quinta.minimo) }} às {{ convertMysqlTime(endereco.diasEntrega.quinta.maximo) }}\r\n                      </div>\r\n                      <div *ngIf=\"endereco.diasEntrega.quinta.minimo == null || endereco.diasEntrega.quinta.maximo == null\">\r\n                        horario no definido\r\n                      </div>\r\n                    </div>\r\n                    <strong *ngIf=\"endereco.diasEntrega.quinta.checked == 0\">\r\n                      No acepta entregas\r\n                    </strong>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-row\">\r\n                  <div class=\"form-group col d-flex w-100 mb-1\">\r\n                    <div class=\"d-flex mr-1\">\r\n                      <div class=\"mr-1\">\r\n                        <i class=\"fas fa-times-circle text-danger\" *ngIf=\"endereco.diasEntrega.sexta.checked == 0\"></i>\r\n                        <i class=\"fas fa-check-circle text-success\" *ngIf=\"endereco.diasEntrega.sexta.checked == 1\"></i>\r\n                      </div>\r\n                      <span>Viernes:</span>\r\n                    </div>\r\n                    <div *ngIf=\"endereco.diasEntrega.sexta.checked == 1\">\r\n                      <div *ngIf=\"endereco.diasEntrega.sexta.minimo !== null && endereco.diasEntrega.sexta.maximo !== null\">\r\n                        das {{ convertMysqlTime(endereco.diasEntrega.sexta.minimo) }} às {{ convertMysqlTime(endereco.diasEntrega.sexta.maximo) }}\r\n                      </div>\r\n                      <div *ngIf=\"endereco.diasEntrega.sexta.minimo == null || endereco.diasEntrega.sexta.maximo == null\">\r\n                        horario no definido\r\n                      </div>\r\n                    </div>\r\n                    <strong *ngIf=\"endereco.diasEntrega.sexta.checked == 0\">\r\n                      No acepta entregas\r\n                    </strong>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-row\">\r\n                  <div class=\"form-group col d-flex w-100 mb-1\">\r\n                    <div class=\"d-flex mr-1\">\r\n                      <div class=\"mr-1\">\r\n                        <i class=\"fas fa-times-circle text-danger\" *ngIf=\"endereco.diasEntrega.sabado.checked == 0\"></i>\r\n                        <i class=\"fas fa-check-circle text-success\" *ngIf=\"endereco.diasEntrega.sabado.checked == 1\"></i>\r\n                      </div>\r\n                      <span>Sabado:</span>\r\n                    </div>\r\n                    <div *ngIf=\"endereco.diasEntrega.sabado.checked == 1\">\r\n                      <div *ngIf=\"endereco.diasEntrega.sabado.minimo !== null && endereco.diasEntrega.sabado.maximo !== null\">\r\n                        das {{ convertMysqlTime(endereco.diasEntrega.sabado.minimo) }} às {{ convertMysqlTime(endereco.diasEntrega.sabado.maximo) }}\r\n                      </div>\r\n                      <div *ngIf=\"endereco.diasEntrega.sabado.minimo == null || endereco.diasEntrega.sabado.maximo == null\">\r\n                        horario no definido\r\n                      </div>\r\n                    </div>\r\n                    <strong *ngIf=\"endereco.diasEntrega.sabado.checked == 0\">\r\n                      No acepta entregas\r\n                    </strong>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-row\">\r\n                  <div class=\"form-group col d-flex w-100 mb-1\">\r\n                    <div class=\"d-flex mr-1\">\r\n                      <div class=\"mr-1\">\r\n                        <i class=\"fas fa-times-circle text-danger\" *ngIf=\"endereco.diasEntrega.domingo.checked == 0\"></i>\r\n                        <i class=\"fas fa-check-circle text-success\" *ngIf=\"endereco.diasEntrega.domingo.checked == 1\"></i>\r\n                      </div>\r\n                      <span>Domingo:</span>\r\n                    </div>\r\n                    <div *ngIf=\"endereco.diasEntrega.domingo.checked == 1\">\r\n                      <div *ngIf=\"endereco.diasEntrega.domingo.minimo !== null && endereco.diasEntrega.domingo.maximo !== null\">\r\n                        das {{ convertMysqlTime(endereco.diasEntrega.domingo.minimo) }} às {{ convertMysqlTime(endereco.diasEntrega.domingo.maximo) }}\r\n                      </div>\r\n                      <div *ngIf=\"endereco.diasEntrega.domingo.minimo == null || endereco.diasEntrega.domingo.maximo == null\">\r\n                        horario no definido\r\n                      </div>\r\n                    </div>\r\n                    <strong *ngIf=\"endereco.diasEntrega.domingo.checked == 0\">\r\n                      No acepta entregas\r\n                    </strong>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-md-6\">\r\n                <label>Tipo de material</label>\r\n                <div *ngIf=\"endereco.dsTipoMaterial == null\">SIN INFORMACION</div>\r\n                <div *ngIf=\"endereco.dsTipoMaterial != null\">{{ endereco.dsTipoMaterial | uppercase }}</div>\r\n              </div>\r\n              <div class=\"form-group col-md-6\">\r\n                <label>Tipo de descarga</label>\r\n                <div *ngIf=\"endereco.dsTipoDescarga == null\">SIN INFORMACION</div>\r\n                <div *ngIf=\"endereco.dsTipoDescarga != null\">{{ endereco.dsTipoDescarga | uppercase }}</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-md-6\">\r\n                <label>Modo de descarga</label>\r\n                <div *ngIf=\"endereco.dsModoDescarga == null\">SIN INFORMACION</div>\r\n                <div *ngIf=\"endereco.dsModoDescarga != null\">{{ endereco.dsModoDescarga | uppercase }}</div>\r\n              </div>\r\n              <div class=\"form-group col-md-6\">\r\n                <label>Tipos de vehiculo</label>\r\n                <div *ngIf=\"endereco.tiposVeiculosDesc == null\">SIN INFORMACION</div>\r\n                <div *ngIf=\"endereco.tiposVeiculosDesc != null\">{{ endereco.tiposVeiculosDesc | uppercase }}</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-md-6 mb-0\">\r\n                <label>Datos especiales</label>\r\n                <div *ngIf=\"endereco.dadosEspeciaisDesc == null\">SIN INFORMACION</div>\r\n                <div *ngIf=\"endereco.dadosEspeciaisDesc != null\">{{ endereco.dadosEspeciaisDesc | uppercase }}</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </accordion-group>\r\n      </accordion>\r\n    </div>\r\n    <div *ngIf=\"enderecosInativos && enderecosInativos.length > 0\">\r\n      <div class=\"mtc-title\">Direcciones inactivas / reprobadas</div>\r\n      <accordion >\r\n        <accordion-group class=\"mb-2\" [heading]=\"endereco.cidade\" *ngFor=\"let endereco of enderecosInativos\">\r\n          <div class=\"d-flex justify-content-between w-100 mb-3\">\r\n            <div class=\"mtc-title mb-0\">{{ endereco.descSituacao }}</div>\r\n            <div>\r\n              <a\r\n                class=\"text-secondary\"\r\n                [routerLink]=\"['editar', endereco.id, endereco.situacao]\">\r\n                <b>Editar</b>\r\n              </a>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <!-- <div class=\"form-group col-md-6\">\r\n              <label>CEP</label>\r\n              <div *ngIf=\"endereco.cep == null\">SIN INFORMACION</div>\r\n              <div *ngIf=\"endereco.cep != null\">{{ endereco.cep | cep }}</div>\r\n            </div> -->\r\n            <div class=\"form-group col-md-6\">\r\n              <label>Direccion</label>\r\n              <div *ngIf=\"endereco.endereco == null\">SIN INFORMACION</div>\r\n              <div *ngIf=\"endereco.endereco != null\">{{ endereco.endereco }}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <!-- <div class=\"form-group col-md-6\">\r\n              <label>Número</label>\r\n              <div *ngIf=\"endereco.numero == null\">SIN INFORMACION</div>\r\n              <div *ngIf=\"endereco.numero != null\">{{ endereco.numero }}</div>\r\n            </div> -->\r\n            <div class=\"form-group col-md-6\">\r\n              <label>Complemento</label>\r\n              <div *ngIf=\"endereco.complemento == null\">SIN INFORMACION</div>\r\n              <div *ngIf=\"endereco.complemento != null\">{{ endereco.complemento }}</div>\r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n              <label>Referencia</label>\r\n              <div *ngIf=\"endereco.referencia == null\">SIN INFORMACION</div>\r\n              <div *ngIf=\"endereco.referencia != null\">{{ endereco.referencia }}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-6\">\r\n              <label>Barrio</label>\r\n              <div *ngIf=\"endereco.bairro == null\">SIN INFORMACION</div>\r\n              <div *ngIf=\"endereco.bairro != null\">{{ endereco.bairro }}</div>\r\n            </div>\r\n            <div class=\"form-group col-md-6 mb-0\">\r\n              <label>Ciudad</label>\r\n              <div *ngIf=\"endereco.cidade == null\">SIN INFORMACION</div>\r\n              <div *ngIf=\"endereco.cidade != null\">\r\n                {{ endereco.cidade }}<span *ngIf=\"endereco.uf != null\"> / {{ endereco.uf }}</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div>\r\n            <div class=\"form-row\">\r\n              <div class=\"col\"><hr></div>\r\n            </div>\r\n            <div class=\"mtc-title\">Datos de entrega</div>\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-md-6\">\r\n                <label>Título de la ubicación de entrega</label>\r\n                <div *ngIf=\"endereco.titulo == null\">SIN INFORMACION</div>\r\n                <div *ngIf=\"endereco.titulo != null\">{{ endereco.titulo }}</div>\r\n              </div>\r\n              <div class=\"form-group col-md-6\">\r\n                <label>Region de entrega</label>\r\n                <div *ngIf=\"endereco.descRegiaoEntrega == null\">SIN INFORMACION</div>\r\n                <div *ngIf=\"endereco.descRegiaoEntrega != null\">{{ endereco.descRegiaoEntrega }}</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col\">\r\n                <label>Dias para realizar entregas</label>\r\n                <div class=\"form-row\">\r\n                  <div class=\"form-group col d-flex w-100 mb-1\">\r\n                    <div class=\"d-flex mr-1\">\r\n                      <div class=\"mr-1\">\r\n                        <i class=\"fas fa-times-circle text-danger\" *ngIf=\"endereco.diasEntrega.segunda.checked == 0\"></i>\r\n                        <i class=\"fas fa-check-circle text-success\" *ngIf=\"endereco.diasEntrega.segunda.checked == 1\"></i>\r\n                      </div>\r\n                      <span>Segunda-feira:</span>\r\n                    </div>\r\n                    <div *ngIf=\"endereco.diasEntrega.segunda.checked == 1\">\r\n                      <div *ngIf=\"endereco.diasEntrega.segunda.minimo !== null && endereco.diasEntrega.segunda.maximo !== null\">\r\n                        das {{ convertMysqlTime(endereco.diasEntrega.segunda.minimo) }} às {{ convertMysqlTime(endereco.diasEntrega.segunda.maximo) }}\r\n                      </div>\r\n                      <div *ngIf=\"endereco.diasEntrega.segunda.minimo == null || endereco.diasEntrega.segunda.maximo == null\">\r\n                        horario no definido\r\n                      </div>\r\n                    </div>\r\n                    <strong *ngIf=\"endereco.diasEntrega.segunda.checked == 0\">\r\n                      No acepta entregas\r\n                    </strong>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-row\">\r\n                  <div class=\"form-group col d-flex w-100 mb-1\">\r\n                    <div class=\"d-flex mr-1\">\r\n                      <div class=\"mr-1\">\r\n                        <i class=\"fas fa-times-circle text-danger\" *ngIf=\"endereco.diasEntrega.terca.checked == 0\"></i>\r\n                        <i class=\"fas fa-check-circle text-success\" *ngIf=\"endereco.diasEntrega.terca.checked == 1\"></i>\r\n                      </div>\r\n                      <span>Terça-feira:</span>\r\n                    </div>\r\n                    <div *ngIf=\"endereco.diasEntrega.terca.checked == 1\">\r\n                      <div *ngIf=\"endereco.diasEntrega.terca.minimo !== null && endereco.diasEntrega.terca.maximo !== null\">\r\n                        das {{ convertMysqlTime(endereco.diasEntrega.terca.minimo) }} às {{ convertMysqlTime(endereco.diasEntrega.terca.maximo) }}\r\n                      </div>\r\n                      <div *ngIf=\"endereco.diasEntrega.terca.minimo == null || endereco.diasEntrega.terca.maximo == null\">\r\n                        horario no definido\r\n                      </div>\r\n                    </div>\r\n                    <strong *ngIf=\"endereco.diasEntrega.terca.checked == 0\">\r\n                      No acepta entregas\r\n                    </strong>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-row\">\r\n                  <div class=\"form-group col d-flex w-100 mb-1\">\r\n                    <div class=\"d-flex mr-1\">\r\n                      <div class=\"mr-1\">\r\n                        <i class=\"fas fa-times-circle text-danger\" *ngIf=\"endereco.diasEntrega.quarta.checked == 0\"></i>\r\n                        <i class=\"fas fa-check-circle text-success\" *ngIf=\"endereco.diasEntrega.quarta.checked == 1\"></i>\r\n                      </div>\r\n                      <span>Quarta-feira:</span>\r\n                    </div>\r\n                    <div *ngIf=\"endereco.diasEntrega.quarta.checked == 1\">\r\n                      <div *ngIf=\"endereco.diasEntrega.quarta.minimo !== null && endereco.diasEntrega.quarta.maximo !== null\">\r\n                        das {{ convertMysqlTime(endereco.diasEntrega.quarta.minimo) }} às {{ convertMysqlTime(endereco.diasEntrega.quarta.maximo) }}\r\n                      </div>\r\n                      <div *ngIf=\"endereco.diasEntrega.quarta.minimo == null || endereco.diasEntrega.quarta.maximo == null\">\r\n                        horario no definido\r\n                      </div>\r\n                    </div>\r\n                    <strong *ngIf=\"endereco.diasEntrega.quarta.checked == 0\">\r\n                      No acepta entregas\r\n                    </strong>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-row\">\r\n                  <div class=\"form-group col d-flex w-100 mb-1\">\r\n                    <div class=\"d-flex mr-1\">\r\n                      <div class=\"mr-1\">\r\n                        <i class=\"fas fa-times-circle text-danger\" *ngIf=\"endereco.diasEntrega.quinta.checked == 0\"></i>\r\n                        <i class=\"fas fa-check-circle text-success\" *ngIf=\"endereco.diasEntrega.quinta.checked == 1\"></i>\r\n                      </div>\r\n                      <span>Quinta-feira:</span>\r\n                    </div>\r\n                    <div *ngIf=\"endereco.diasEntrega.quinta.checked == 1\">\r\n                      <div *ngIf=\"endereco.diasEntrega.quinta.minimo !== null && endereco.diasEntrega.quinta.maximo !== null\">\r\n                        das {{ convertMysqlTime(endereco.diasEntrega.quinta.minimo) }} às {{ convertMysqlTime(endereco.diasEntrega.quinta.maximo) }}\r\n                      </div>\r\n                      <div *ngIf=\"endereco.diasEntrega.quinta.minimo == null || endereco.diasEntrega.quinta.maximo == null\">\r\n                        horario no definido\r\n                      </div>\r\n                    </div>\r\n                    <strong *ngIf=\"endereco.diasEntrega.quinta.checked == 0\">\r\n                      No acepta entregas\r\n                    </strong>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-row\">\r\n                  <div class=\"form-group col d-flex w-100 mb-1\">\r\n                    <div class=\"d-flex mr-1\">\r\n                      <div class=\"mr-1\">\r\n                        <i class=\"fas fa-times-circle text-danger\" *ngIf=\"endereco.diasEntrega.sexta.checked == 0\"></i>\r\n                        <i class=\"fas fa-check-circle text-success\" *ngIf=\"endereco.diasEntrega.sexta.checked == 1\"></i>\r\n                      </div>\r\n                      <span>Sexta-feira:</span>\r\n                    </div>\r\n                    <div *ngIf=\"endereco.diasEntrega.sexta.checked == 1\">\r\n                      <div *ngIf=\"endereco.diasEntrega.sexta.minimo !== null && endereco.diasEntrega.sexta.maximo !== null\">\r\n                        das {{ convertMysqlTime(endereco.diasEntrega.sexta.minimo) }} às {{ convertMysqlTime(endereco.diasEntrega.sexta.maximo) }}\r\n                      </div>\r\n                      <div *ngIf=\"endereco.diasEntrega.sexta.minimo == null || endereco.diasEntrega.sexta.maximo == null\">\r\n                        horario no definido\r\n                      </div>\r\n                    </div>\r\n                    <strong *ngIf=\"endereco.diasEntrega.sexta.checked == 0\">\r\n                      No acepta entregas\r\n                    </strong>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-row\">\r\n                  <div class=\"form-group col d-flex w-100 mb-1\">\r\n                    <div class=\"d-flex mr-1\">\r\n                      <div class=\"mr-1\">\r\n                        <i class=\"fas fa-times-circle text-danger\" *ngIf=\"endereco.diasEntrega.sabado.checked == 0\"></i>\r\n                        <i class=\"fas fa-check-circle text-success\" *ngIf=\"endereco.diasEntrega.sabado.checked == 1\"></i>\r\n                      </div>\r\n                      <span>Sábado:</span>\r\n                    </div>\r\n                    <div *ngIf=\"endereco.diasEntrega.sabado.checked == 1\">\r\n                      <div *ngIf=\"endereco.diasEntrega.sabado.minimo !== null && endereco.diasEntrega.sabado.maximo !== null\">\r\n                        das {{ convertMysqlTime(endereco.diasEntrega.sabado.minimo) }} às {{ convertMysqlTime(endereco.diasEntrega.sabado.maximo) }}\r\n                      </div>\r\n                      <div *ngIf=\"endereco.diasEntrega.sabado.minimo == null || endereco.diasEntrega.sabado.maximo == null\">\r\n                        horario no definido\r\n                      </div>\r\n                    </div>\r\n                    <strong *ngIf=\"endereco.diasEntrega.sabado.checked == 0\">\r\n                      No acepta entregas\r\n                    </strong>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-row\">\r\n                  <div class=\"form-group col d-flex w-100 mb-1\">\r\n                    <div class=\"d-flex mr-1\">\r\n                      <div class=\"mr-1\">\r\n                        <i class=\"fas fa-times-circle text-danger\" *ngIf=\"endereco.diasEntrega.domingo.checked == 0\"></i>\r\n                        <i class=\"fas fa-check-circle text-success\" *ngIf=\"endereco.diasEntrega.domingo.checked == 1\"></i>\r\n                      </div>\r\n                      <span>Domingo:</span>\r\n                    </div>\r\n                    <div *ngIf=\"endereco.diasEntrega.domingo.checked == 1\">\r\n                      <div *ngIf=\"endereco.diasEntrega.domingo.minimo !== null && endereco.diasEntrega.domingo.maximo !== null\">\r\n                        das {{ convertMysqlTime(endereco.diasEntrega.domingo.minimo) }} às {{ convertMysqlTime(endereco.diasEntrega.domingo.maximo) }}\r\n                      </div>\r\n                      <div *ngIf=\"endereco.diasEntrega.domingo.minimo == null || endereco.diasEntrega.domingo.maximo == null\">\r\n                        horario no definido\r\n                      </div>\r\n                    </div>\r\n                    <strong *ngIf=\"endereco.diasEntrega.domingo.checked == 0\">\r\n                      No acepta entregas\r\n                    </strong>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-md-6\">\r\n                <label>Tipo de material</label>\r\n                <div *ngIf=\"endereco.dsTipoMaterial == null\">SIN INFORMACION</div>\r\n                <div *ngIf=\"endereco.dsTipoMaterial != null\">{{ endereco.dsTipoMaterial | uppercase }}</div>\r\n              </div>\r\n              <div class=\"form-group col-md-6\">\r\n                <label>Tipo de descarga</label>\r\n                <div *ngIf=\"endereco.dsTipoDescarga == null\">SIN INFORMACION</div>\r\n                <div *ngIf=\"endereco.dsTipoDescarga != null\">{{ endereco.dsTipoDescarga | uppercase }}</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-md-6\">\r\n                <label>Modo de descarga</label>\r\n                <div *ngIf=\"endereco.dsModoDescarga == null\">SIN INFORMACION</div>\r\n                <div *ngIf=\"endereco.dsModoDescarga != null\">{{ endereco.dsModoDescarga | uppercase }}</div>\r\n              </div>\r\n              <div class=\"form-group col-md-6\">\r\n                <label>Tipos de vehiculo</label>\r\n                <div *ngIf=\"endereco.tiposVeiculosDesc == null\">SIN INFORMACION</div>\r\n                <div *ngIf=\"endereco.tiposVeiculosDesc != null\">{{ endereco.tiposVeiculosDesc | uppercase }}</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-md-6 mb-0\">\r\n                <label>Datos especiales</label>\r\n                <div *ngIf=\"endereco.dadosEspeciaisDesc == null\">SIN INFORMACION</div>\r\n                <div *ngIf=\"endereco.dadosEspeciaisDesc != null\">{{ endereco.dadosEspeciaisDesc | uppercase }}</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-row\" *ngIf=\"endereco.situacao == 4\">\r\n              <div class=\"form-group col-md-6 mb-0\">\r\n                <label>Motivo de la desaprobación</label>\r\n                <div *ngIf=\"endereco.situacao == 4 && endereco.motivoAprovacaoReprovacao == null\">SIN INFORMACION</div>\r\n                <div *ngIf=\"endereco.situacao == 4 && endereco.motivoAprovacaoReprovacao != null\">{{ endereco.motivoAprovacaoReprovacao | uppercase }}</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </accordion-group>\r\n      </accordion>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "aeBB":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/comercial/clientes/cadastro/potencial-compra/detalhes/detalhes.component.scss ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NsaWVudGVzL2NhZGFzdHJvL3BvdGVuY2lhbC1jb21wcmEvZGV0YWxoZXMvZGV0YWxoZXMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "bTpe":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/clientes/cadastro/travas/detalhes/detalhes.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<div class=\"row\" *ngIf=\"travasLoaded\">\r\n  <div class=\"col\">\r\n    <div class=\"mtc-title\">Travas</div>\r\n    <ul class=\"list-unstyled\" *ngIf=\"travas.length > 0\">\r\n      <li *ngFor=\"let trava of travas\">\r\n        <div class=\"d-flex\">\r\n          <div class=\"d-flex\">\r\n            <h5 class=\"my-auto\">\r\n              <i [ngClass]=\"iconClass(trava.situacao)\"></i>\r\n            </h5>\r\n            <div class=\"ml-3\">\r\n              <b class=\"d-block text-small text-secondary\">{{ trava.data }}</b>\r\n              <strong class=\"d-block text-uppercase\">{{ trava.descricao }}</strong>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div><hr></div>\r\n      </li>\r\n    </ul>\r\n    <div class=\"row py-5 my-5\" *ngIf=\"travas.length == 0\">\r\n      <div class=\"col\">\r\n        <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "efCb":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/comercial/clientes/cadastro/travas/detalhes/detalhes.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NsaWVudGVzL2NhZGFzdHJvL3RyYXZhcy9kZXRhbGhlcy9kZXRhbGhlcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "f7yW":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/clientes/cadastro/contatos/detalhes/detalhes.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<div class=\"row\" *ngIf=\"contatosLoaded\">\r\n  <div class=\"col\">\r\n    <div class=\"mtc-title\">Contatos</div>\r\n    <accordion *ngIf=\"contatos.length > 0\">\r\n      <accordion-group class=\"mb-2\" [heading]=\"tipoContato(contato)\" *ngFor=\"let contato of contatos\">\r\n        <div class=\"d-flex justify-content-between w-100 mb-3\">\r\n          <div class=\"mtc-title mb-0\">Principal</div>\r\n          <div>\r\n            <a\r\n              class=\"text-secondary mr-3\"\r\n              [routerLink]=\"['editar', contato.idSeqTid]\">\r\n              <b>Editar</b>\r\n            </a>\r\n            <a\r\n              class=\"text-danger\"\r\n              (click)=\"onDelete(contato)\"\r\n              href=\"javascript:void(0)\">\r\n              <b>Excluir</b>\r\n            </a>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label>Nome completo</label>\r\n            <div *ngIf=\"contato.nomeCompleto == null\">SIN INFORMACION</div>\r\n            <div *ngIf=\"contato.nomeCompleto != null\">{{ contato.nomeCompleto }}</div>\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label>Sexo</label>\r\n            <div *ngIf=\"contato.descGenero == null\">SIN INFORMACION</div>\r\n            <div *ngIf=\"contato.descGenero != null\">{{ contato.descGenero }}</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-6 mb-0\">\r\n            <label>Função</label>\r\n            <div *ngIf=\"contato.descFuncao == null\">SIN INFORMACION</div>\r\n            <div *ngIf=\"contato.descFuncao != null\">{{ contato.descFuncao }}</div>\r\n          </div>\r\n          <div class=\"form-group col-md-6 mb-0\">\r\n            <label>Setor</label>\r\n            <div *ngIf=\"contato.descSetor == null\">SIN INFORMACION</div>\r\n            <div *ngIf=\"contato.descSetor != null\">{{ contato.descSetor }}</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"col\"><hr></div>\r\n        </div>\r\n        <div class=\"mtc-title\">Medios de contacto</div>\r\n        <div class=\"form-row\" *ngIf=\"contato.contatos != null\">\r\n          <div class=\"form-group col-md-6\" *ngFor=\"let item of contato.contatos\">\r\n            <label>{{ item.tipo }}</label>\r\n            <div *ngIf=\"(item.tipo == 'Telefone') || (item.tipo == 'Celular')\">\r\n              <div *ngIf=\"item.contato == null\">SIN INFORMACION</div>\r\n              <div *ngIf=\"item.contato != null\">{{ item.contato | telefone }}</div>\r\n            </div>\r\n            <div *ngIf=\"(item.tipo == 'Email NFe') || (item.tipo == 'E-mail NFe') || (item.tipo == 'E-Mail') || (item.tipo == 'Email') || (item.tipo == 'MalaDireta')\">\r\n              <div *ngIf=\"item.contato == null\">SIN INFORMACION</div>\r\n              <div *ngIf=\"item.contato != null\">\r\n                <a [href]=\"'mailto:' + item.contato\">{{ item.contato | lowercase }}</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <empty-result message=\"Ninguna informacion encontrada\" *ngIf=\"contato.contatos == null\"></empty-result>\r\n        <!-- <div class=\"form-row\">\r\n          <div class=\"col\"><hr class=\"mt-0\"></div>\r\n        </div>\r\n        <div class=\"mtc-title\">Detalhes</div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label>Aniversário</label>\r\n            <div *ngIf=\"contato.dataAniversario == null\">NÃO INFORMADO</div>\r\n            <div *ngIf=\"contato.dataAniversario != null\">{{ contato.dataAniversario }}</div>\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label>Time de futebol</label>\r\n            <div *ngIf=\"contato.descTimeFutebol == null\">NÃO INFORMADO</div>\r\n            <div *ngIf=\"contato.descTimeFutebol != null\">{{ contato.descTimeFutebol }}</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label>Estado civil</label>\r\n            <div *ngIf=\"contato.descEstadoCivil == null\">NÃO INFORMADO</div>\r\n            <div *ngIf=\"contato.descEstadoCivil != null\">{{ contato.descEstadoCivil }}</div>\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label>LinkedIn</label>\r\n            <div *ngIf=\"contato.linkedin == null\">NÃO INFORMADO</div>\r\n            <div *ngIf=\"contato.linkedin != null\">\r\n              <a [href]=\"contato.linkedin\" target=\"_blank\">{{ contato.linkedin }}</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label>Facebook</label>\r\n            <div *ngIf=\"contato.facebook == null\">NÃO INFORMADO</div>\r\n            <div *ngIf=\"contato.facebook != null\">\r\n              <a [href]=\"contato.facebook\" target=\"_blank\">{{ contato.facebook }}</a>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label>Instagram</label>\r\n            <div *ngIf=\"contato.instagram == null\">NÃO INFORMADO</div>\r\n            <div *ngIf=\"contato.instagram != null\">\r\n              <a [href]=\"contato.instagram\" target=\"_blank\">{{ contato.instagram }}</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label>Hobbies</label>\r\n            <div *ngIf=\"contato.hobbies == null\">NÃO INFORMADO</div>\r\n            <div *ngIf=\"contato.hobbies != null\">{{ contato.hobbies }}</div>\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label>Qtde. filhos</label>\r\n            <div *ngIf=\"contato.qtdeFilhos == ''\">NÃO INFORMADO</div>\r\n            <div *ngIf=\"contato.qtdeFilhos != ''\">{{ contato.qtdeFilhos }}</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col mb-0\">\r\n            <label>Observações</label>\r\n            <div *ngIf=\"contato.observacoes == null\">NÃO INFORMADO</div>\r\n            <div *ngIf=\"contato.observacoes != null\">{{ contato.observacoes }}</div>\r\n          </div>\r\n        </div> -->\r\n      </accordion-group>\r\n    </accordion>\r\n    <div class=\"row py-5 my-5\" *ngIf=\"contatos.length == 0\">\r\n      <div class=\"col\">\r\n        <empty-result message=\"Ninguna informacion encontrada\"></empty-result>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "fjd7":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/comercial/clientes/cadastro/dados-faturamento/detalhes/detalhes.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: ComercialClientesCadastroDadosFaturamentoDetalhesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialClientesCadastroDadosFaturamentoDetalhesComponent", function() { return ComercialClientesCadastroDadosFaturamentoDetalhesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_detalhes_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./detalhes.component.html */ "0FK8");
/* harmony import */ var _detalhes_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detalhes.component.scss */ "tMVO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var js_brasil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-brasil */ "zFJr");
/* harmony import */ var js_brasil__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(js_brasil__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/comercial/services/clientes.service */ "8ouN");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");






// ng-brazil

// Services


let ComercialClientesCadastroDadosFaturamentoDetalhesComponent = class ComercialClientesCadastroDadosFaturamentoDetalhesComponent {
    constructor(activatedRoute, clientesService, pnotifyService, router) {
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
    ngOnInit() {
        this.activatedRoute.parent.parent.params.subscribe(params => {
            this.getDadosFaturamento(params['id']);
        });
    }
    getDadosFaturamento(id) {
        this.clientesService
            .getDadosFaturamento(id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => {
            this.loaderFullScreen = false;
            this.dadosFaturamentoLoaded = true;
        }))
            .subscribe({
            next: (response) => {
                if (response['responseCode'] === 200) {
                    this.dadosFaturamento = response['result'];
                    //this.dadosFaturamento.notaCliente = 6;
                }
                else {
                    this.handleDadosFaturamentoError(id);
                }
            },
            error: (error) => {
                this.handleDadosFaturamentoError(id);
            }
        });
    }
    handleDadosFaturamentoError(id) {
        this.pnotifyService.error();
        this.router.navigate(['/comercial/clientes/detalhes', id]);
    }
};
ComercialClientesCadastroDadosFaturamentoDetalhesComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_7__["ComercialClientesService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ComercialClientesCadastroDadosFaturamentoDetalhesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-clientes-dados-faturamento-detalhes',
        template: _raw_loader_detalhes_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detalhes_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_7__["ComercialClientesService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], ComercialClientesCadastroDadosFaturamentoDetalhesComponent);



/***/ }),

/***/ "gtjB":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/clientes/cadastro/anexos/formulario/formulario.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<div class=\"row\" *ngIf=\"!loaderFullScreen\">\r\n  <div class=\"col\">\r\n    <div class=\"mtc-title\">carga de anexos</div>\r\n    <form [formGroup]=\"form\" autocomplete=\"off\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"tipoAnexo\">Tipo de anexo</label>\r\n          <select\r\n            class=\"form-control\"\r\n            id=\"tipoAnexo\"\r\n            formControlName=\"tipoAnexo\"            \r\n            [ngClass]=\"onFieldError('tipoAnexo') + ' ' + onFieldRequired('tipoAnexo')\"\r\n            (change)=\"onChange()\" \r\n            >            \r\n            <option value=\"\">SELECCIONE UNA OPCION</option>\r\n            <option *ngFor=\"let item of tiposAnexo\" [value]=\"item.id\">{{ item.descricao }}</option>\r\n          </select>\r\n          <invalid-form-control [show]=\"onFieldInvalid('tipoAnexo')\" message=\"El tipo de archivo adjunto es obligatorio.3\"></invalid-form-control>\r\n        </div>\r\n        <div class=\"col-lg-12\" formArrayName=\"anexos\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12 d-flex align-items-start\">\r\n              <div class=\"mtc-title mb-0\">Anexos</div>\r\n            </div>\r\n            <div class=\"col\">\r\n              <label\r\n                for=\"novoAnexo\"\r\n                class=\"d-flex justify-content-start align-items-center\"\r\n                style=\"cursor: pointer\"\r\n                [hidden]=\"visualizar\"\r\n              >\r\n                <p class=\"btn btn-sm btn-outline-primary m-0\">\r\n                  <i class=\"fas fa-plus\"></i>\r\n                  <span>Anexo</span>\r\n                </p>\r\n              </label>\r\n              <input\r\n                id=\"novoAnexo\"\r\n                type=\"file\"\r\n                (change)=\"appendFile($event.target.files)\"\r\n                class=\"d-none\"\r\n              />\r\n            </div>\r\n          </div>\r\n          <div class=\"row\" *ngIf=\"showAnexos && form.value.anexos.length > 0\">\r\n            <div class=\"col\">\r\n              <custom-table [config]=\"tableConfigAnexos\">\r\n                <ng-template #tbody let-tbody>\r\n                  <tr\r\n                    *ngFor=\"let anexo of anexos.controls; let i = index\"\r\n                    [formGroupName]=\"i\"\r\n                  >\r\n                    <td style=\"width: 90%\">\r\n                      {{ form.value.anexos[i].codAnexo }} -\r\n                      {{ form.value.anexos[i].nomeAnexo | uppercase }}\r\n                    </td>\r\n                    <td class=\"text-center\" style=\"width: 5%\">\r\n                      <a\r\n                        (click)=\"navegarAnexo(anexo)\"\r\n                        *ngIf=\"form.value.anexos[i].codAnexo != null\"\r\n                        target=\"_blank\"\r\n                        class=\"btn-icon-sm mx-2 text-black\"\r\n                        tooltip=\"visualizar\"\r\n                      >\r\n                        <i class=\"far fa-eye\"></i>\r\n                      </a>\r\n                    </td>\r\n                    <td class=\"text-center\" style=\"width: 5%\">\r\n                      <btn-icon\r\n                        icon=\"fas fa-trash\"\r\n                        size=\"small\"\r\n                        tooltip=\"Excluir\"\r\n                        (click)=\"\r\n                          onDeleteAnexo(form.value.anexos[i].codAnexo, i)\r\n                        \"\r\n                        [hidden]=\"visualizar\"\r\n                      >\r\n                      </btn-icon>\r\n                    </td>\r\n                  </tr>\r\n                </ng-template>\r\n              </custom-table>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\" *ngIf=\"showAnexos && form.value.anexos.length === 0\">\r\n            <div class=\"col\">\r\n              <message\r\n                icon=\"fas fa-exchange-alt\"\r\n                text=\"Ningun documento encontrado\"\r\n              >\r\n              </message>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "h1bq":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/comercial/clientes/cadastro/contatos/formulario/formulario.component.scss ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NsaWVudGVzL2NhZGFzdHJvL2NvbnRhdG9zL2Zvcm11bGFyaW8vZm9ybXVsYXJpby5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "iMMo":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/comercial/clientes/cadastro/dados-relacionamento/formulario/formulario.service.ts ***!
  \***********************************************************************************************************/
/*! exports provided: ComercialClientesCadastroDadosRelacionamentoFormularioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialClientesCadastroDadosRelacionamentoFormularioService", function() { return ComercialClientesCadastroDadosRelacionamentoFormularioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");





let ComercialClientesCadastroDadosRelacionamentoFormularioService = class ComercialClientesCadastroDadosRelacionamentoFormularioService {
    constructor(http) {
        this.http = http;
        this.API = `http://23.254.204.187/api/comercial/clientes/cadastro/formulario/dados-relacionamento`;
    }
    loadDepencies() {
        let tiposAtendimento = this.getTiposAtendimento();
        let periodos = this.getPeriodos();
        let frequenciaContatos = this.getFrequenciaContatos();
        let frequenciaVisitas = this.getFrequenciaVisitas();
        let origensContato = this.getOrigensContato();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])([
            tiposAtendimento,
            periodos,
            frequenciaContatos,
            frequenciaVisitas,
            origensContato
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getTiposAtendimento() {
        return this.http.get(`${this.API}/tipos-atendimento`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getPeriodos() {
        return this.http.get(`${this.API}/periodos`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getFrequenciaContatos() {
        return this.http.get(`${this.API}/frequencia-contatos`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getFrequenciaVisitas() {
        return this.http.get(`${this.API}/frequencia-visitas`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getOrigensContato() {
        return this.http.get(`${this.API}/origens-contato`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
};
ComercialClientesCadastroDadosRelacionamentoFormularioService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ComercialClientesCadastroDadosRelacionamentoFormularioService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ComercialClientesCadastroDadosRelacionamentoFormularioService);



/***/ }),

/***/ "igIG":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/comercial/clientes/cadastro/travas/detalhes/detalhes.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ComercialClientesCadastroTravasDetalhesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialClientesCadastroTravasDetalhesComponent", function() { return ComercialClientesCadastroTravasDetalhesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_detalhes_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./detalhes.component.html */ "bTpe");
/* harmony import */ var _detalhes_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detalhes.component.scss */ "efCb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/comercial/services/clientes.service */ "8ouN");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");





// Services


let ComercialClientesCadastroTravasDetalhesComponent = class ComercialClientesCadastroTravasDetalhesComponent {
    constructor(activatedRoute, clientesService, pnotifyService, router) {
        this.activatedRoute = activatedRoute;
        this.clientesService = clientesService;
        this.pnotifyService = pnotifyService;
        this.router = router;
        this.loaderFullScreen = true;
        this.travas = [];
        this.travasLoaded = false;
        this.pnotifyService.getPNotify();
    }
    ngOnInit() {
        this.activatedRoute.parent.parent.params.subscribe(params => {
            this.clientesService
                .getTravas(params['id'])
                .subscribe((response) => {
                if (response['responseCode'] === 200) {
                    this.loaderFullScreen = false;
                    this.travas = response['result'];
                    this.travasLoaded = true;
                }
                else if (response['responseCode'] === 204) {
                    this.loaderFullScreen = false;
                    this.travasLoaded = true;
                }
                else {
                    this.pnotifyService.error();
                    this.router.navigate([
                        '/comercial/clientes/detalhes',
                        params['id']
                    ]);
                }
            });
        });
    }
    iconClass(situacao) {
        let iconClass;
        if (situacao == 'LIBERADO') {
            iconClass = 'fas fa-check-circle text-success';
        }
        else if (situacao == 'TRAVADO') {
            iconClass = 'fas fa-exclamation-triangle text-danger';
        }
        return iconClass;
    }
};
ComercialClientesCadastroTravasDetalhesComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_5__["ComercialClientesService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ComercialClientesCadastroTravasDetalhesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-clientes-cadastro-travas-detalhes',
        template: _raw_loader_detalhes_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detalhes_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_5__["ComercialClientesService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], ComercialClientesCadastroTravasDetalhesComponent);



/***/ }),

/***/ "n1L9":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/comercial/clientes/cadastro/enderecos/formulario/formulario.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: ComercialClientesCadastroEnderecosFormularioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialClientesCadastroEnderecosFormularioComponent", function() { return ComercialClientesCadastroEnderecosFormularioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./formulario.component.html */ "6eNF");
/* harmony import */ var _formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formulario.component.scss */ "5Q7p");
/* harmony import */ var _services_vendedores_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../services/vendedores.service */ "4xRd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var ng_brazil__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-brazil */ "hTrW");
/* harmony import */ var js_brasil__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! js-brasil */ "zFJr");
/* harmony import */ var js_brasil__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(js_brasil__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/modules/confirm-modal/confirm-modal.service */ "FOez");
/* harmony import */ var _formulario_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./formulario.service */ "4Jok");
/* harmony import */ var _cadastro_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../cadastro.service */ "N70Q");
/* harmony import */ var src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/modules/comercial/services/clientes.service */ "8ouN");
/* harmony import */ var src_app_shared_services_requests_estados_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/services/requests/estados.service */ "H0sO");
/* harmony import */ var src_app_shared_services_ws_cep_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/shared/services/ws/cep.service */ "7aZN");










// ng-brazil


// ngx-bootstrap

// Services







let ComercialClientesCadastroEnderecosFormularioComponent = class ComercialClientesCadastroEnderecosFormularioComponent {
    /* Pagination */
    constructor(activatedRoute, formBuilder, formService, cadastroService, location, modalService, clientesService, estadosService, cepService, pnotifyService, confirmModalService, comercialService) {
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
            hover: false,
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
    ngOnInit() {
        this.cancelSubscription();
        this.submitSubscription();
        if (this.activatedRoute.snapshot.data.data.responseCode === 200) {
            this.activatedRoute.parent.parent.params.subscribe((params) => {
                this.codCliente = params.id;
                this.checkUrlParams();
                this.getFormFields();
            });
        }
        else {
            this.pnotifyService.error();
            this.location.back();
        }
    }
    ngAfterViewInit() {
        this.cadastroService.onNotifyLoaded(true);
    }
    ngOnDestroy() {
        this.subscriptionCancel.unsubscribe();
        this.subscriptionSubmit.unsubscribe();
        this.cadastroService.onNotifyLoaded(false);
    }
    checkUrlParams() {
        this.activatedRoute.params.subscribe((params) => {
            if (params.idEndereco) {
                this.action = 'editar';
            }
            else {
                this.action = 'novo';
            }
        });
        this.setMaxLengthRules();
        this.setFormBuilder(this.codCliente, this.activatedRoute.snapshot.data.data.result);
    }
    getFormFields() {
        this.estados = this.estadosService.getEstados();
        this.activatedRoute.parent.parent.params.subscribe((params) => {
            this.formService
                .loadDepencies(params.id)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(() => {
                this.loaderFullScreen = false;
                this.cadastroService.onNotifyLoaded(false);
            }))
                .subscribe({
                next: (response) => {
                    if (response[0].responseCode === 200) {
                        this.regioesAtuacaoComercial = response[0].result;
                    }
                    else {
                        this.handleFormFieldsError();
                    }
                    if (response[1].responseCode === 200) {
                        this.regioesEntrega = response[1].result;
                    }
                    else {
                        this.handleFormFieldsError();
                    }
                    if (response[2].responseCode === 200) {
                        this.tiposMaterial = response[2].result;
                    }
                    else {
                        this.handleFormFieldsError();
                    }
                    if (response[3].responseCode === 200) {
                        this.tiposDescarga = response[3].result;
                    }
                    else {
                        this.handleFormFieldsError();
                    }
                    if (response[4].responseCode === 200) {
                        this.modosDescarga = response[4].result;
                    }
                    else {
                        this.handleFormFieldsError();
                    }
                    if (response[5].success === true) {
                        this.setValidatorsPrincipalCobranca(response[5].data.enderecos);
                    }
                    else {
                        this.setValidatorsPrincipalCobranca([]);
                    }
                    if (response[6].responseCode === 200) {
                        this.tiposVeiculos = response[6].result;
                    }
                    else {
                        this.handleFormFieldsError();
                    }
                    if (response[7].responseCode === 200) {
                        this.dadosEspeciais = response[7].result;
                    }
                    else {
                        this.handleFormFieldsError();
                    }
                },
                error: (error) => {
                    this.handleFormFieldsError();
                }
            });
        });
    }
    handleFormFieldsError() {
        this.pnotifyService.error();
        this.location.back();
    }
    setValidatorsPrincipalCobranca(enderecos) {
        if (enderecos) {
            if (enderecos.length > 0) {
                for (let i = 0; i < enderecos.length; i++) {
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
    checkValidatorsPrincipalCobranca() {
        if (!this.podeEditarEnderecoPrincipal) {
            this.form.controls.principal.disable();
        }
        if (!this.podeEditarEnderecoCobranca) {
            this.form.controls.cobranca.disable();
        }
    }
    setMaxLengthRules() {
        this.maxLengthRules = this.activatedRoute.snapshot.data.rules.data;
        this.maxLengthMessages = {
            bairro: `Bairro deve conter até ${this.maxLengthRules.bairro} caracteres.`,
            cidade: `Cidade deve conter até ${this.maxLengthRules.cidade} caracteres.`,
            complemento: `Complemento deve conter até ${this.maxLengthRules.complemento} caracteres.`,
            endereco: `Endereço deve conter até ${this.maxLengthRules.endereco} caracteres.`,
            referencia: `Referência deve conter até ${this.maxLengthRules.referencia} caracteres.`,
            titulo: `Título do local de entrega deve conter até ${this.maxLengthRules.titulo} caracteres.`,
        };
    }
    setFormBuilder(codCliente, data) {
        if (data.entrega === true || data.entrega == 1) {
            this.exibirDadosEntrega = true;
        }
        this.form = this.formBuilder.group({
            codCliente: [codCliente],
            situacao: [data.situacao],
            id: [data.id],
            codEndereco: [data.codEndereco != 'null' ? data.codEndereco : null],
            cep: [
                {
                    value: data.cep,
                    disabled: this.action == 'novo' || data.situacao == 4 ? false : true,
                },
                [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, ng_brazil__WEBPACK_IMPORTED_MODULE_10__["NgBrazilValidators"].cep],
            ],
            endereco: [
                {
                    value: data.endereco,
                    disabled: this.action == 'novo' || data.situacao == 4 ? false : true,
                },
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(this.maxLengthRules.endereco),
                ],
            ],
            status: [
                {
                    value: this.action == 'editar' &&
                        (data.situacao == 1 || data.situacao == 2)
                        ? data.situacao
                        : this.action == 'novo'
                            ? 3
                            : 1,
                    disabled: true,
                },
                [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            ],
            complemento: [
                {
                    value: data.complemento,
                    disabled: this.action == 'novo' || data.situacao == 4 ? false : true,
                },
                [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(this.maxLengthRules.complemento)],
            ],
            referencia: [
                {
                    value: data.referencia,
                    disabled: this.action == 'novo' || data.situacao == 4 ? false : true,
                },
                [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(this.maxLengthRules.referencia)],
            ],
            bairro: [
                {
                    value: data.bairro,
                    disabled: data.situacao == 4 ? false : true,
                },
                [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(this.maxLengthRules.bairro)],
            ],
            cidade: [
                {
                    value: data.cidade,
                    disabled: data.situacao == 4 ? false : true,
                },
                [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(this.maxLengthRules.cidade)],
            ],
            uf: [
                {
                    value: data.uf,
                    disabled: data.situacao == 4 ? false : true,
                },
                [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            ],
            regiaoAtuacaoComercial: [
                {
                    value: data.idAtuacaoComercial,
                    disabled: this.action == 'novo' || data.situacao == 4 ? false : true,
                },
            ],
            principal: [data.principal],
            cobranca: [data.cobranca],
            entrega: [data.entrega],
            titulo: [data.titulo, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(this.maxLengthRules.titulo)]],
            regiaoEntrega: [{ value: data.idRegiaoEntrega, disabled: true }],
            diasEntrega: this.formBuilder.group({
                segunda: this.formBuilder.group({
                    id: [data.diasEntrega.segunda.id],
                    checked: [data.diasEntrega.segunda.checked == 0 ? false : true],
                    minimo: [this.fixTime(data.diasEntrega.segunda.minimo)],
                    maximo: [this.fixTime(data.diasEntrega.segunda.maximo)],
                }),
                terca: this.formBuilder.group({
                    id: [data.diasEntrega.terca.id],
                    checked: [data.diasEntrega.terca.checked == 0 ? false : true],
                    minimo: [this.fixTime(data.diasEntrega.terca.minimo)],
                    maximo: [this.fixTime(data.diasEntrega.terca.maximo)],
                }),
                quarta: this.formBuilder.group({
                    id: [data.diasEntrega.quarta.id],
                    checked: [data.diasEntrega.quarta.checked == 0 ? false : true],
                    minimo: [this.fixTime(data.diasEntrega.quarta.minimo)],
                    maximo: [this.fixTime(data.diasEntrega.quarta.maximo)],
                }),
                quinta: this.formBuilder.group({
                    id: [data.diasEntrega.quinta.id],
                    checked: [data.diasEntrega.quinta.checked == 0 ? false : true],
                    minimo: [this.fixTime(data.diasEntrega.quinta.minimo)],
                    maximo: [this.fixTime(data.diasEntrega.quinta.maximo)],
                }),
                sexta: this.formBuilder.group({
                    id: [data.diasEntrega.sexta.id],
                    checked: [data.diasEntrega.sexta.checked == 0 ? false : true],
                    minimo: [this.fixTime(data.diasEntrega.sexta.minimo)],
                    maximo: [this.fixTime(data.diasEntrega.sexta.maximo)],
                }),
                sabado: this.formBuilder.group({
                    id: [data.diasEntrega.sabado.id],
                    checked: [data.diasEntrega.sabado.checked == 0 ? false : true],
                    minimo: [this.fixTime(data.diasEntrega.sabado.minimo)],
                    maximo: [this.fixTime(data.diasEntrega.sabado.maximo)],
                }),
                domingo: this.formBuilder.group({
                    id: [data.diasEntrega.domingo.id],
                    checked: [data.diasEntrega.domingo.checked == 0 ? false : true],
                    minimo: [this.fixTime(data.diasEntrega.domingo.minimo)],
                    maximo: [this.fixTime(data.diasEntrega.domingo.maximo)],
                }),
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
            COD_CLIE_TERC_RAZ: [data.COD_CLIE_TERC_RAZ],
        });
        if (data.COD_CLIE_TERC > 0) {
            this.getCliente(data.COD_CLIE_TERC);
        }
        this.formClientes = this.formBuilder.group({
            buscarPor: ['NM_CLIE'],
            pesquisa: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            NM_CLIE: [null],
            registros: [this.itemsPerPage],
        });
        this.setValidatorsEntrega(data.entrega);
        this.setFormBuilderDiasEntrega(data.diasEntrega);
        this.checarAcesso(data.alteraStatus, data.situacao);
        this.getAnexos(data.entrega, this.form.value.codEndereco);
    }
    checarAcesso(acesso, situacao) {
        if (acesso === true || acesso == 1) {
            if (situacao == 1 || situacao == 2) {
                this.form.controls.status.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]);
                this.form.controls.status.enable();
            }
            else {
                this.form.controls.status.clearValidators();
                this.form.controls.status.disable();
            }
        }
        else {
            this.form.controls.status.clearValidators();
            this.form.controls.status.disable();
        }
        this.form.controls.status.updateValueAndValidity();
    }
    cancelSubscription() {
        this.subscriptionCancel = this.cadastroService.notifyCancelObservable$.subscribe((response) => {
            if (response) {
                this.onCancel();
            }
        });
    }
    submitSubscription() {
        this.subscriptionSubmit = this.cadastroService.notifySubmitObservable$.subscribe((response) => {
            if (response) {
                this.onSubmit();
            }
        });
    }
    onFieldError(field) {
        if (this.onFieldInvalid(field) != '') {
            return 'is-invalid';
        }
        return '';
    }
    onFieldInvalid(field) {
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
    onFieldRequired(field) {
        let required = false;
        let formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        if (this.form.controls[field].validator) {
            let validationResult = this.form.controls[field].validator(formControl);
            required =
                validationResult !== null && validationResult.required === true;
        }
        if (required) {
            return 'is-required';
        }
    }
    setValidatorsEntrega(entrega) {
        if (entrega === true || entrega == 1) {
            this.form.controls.tipoDescarga.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]);
            this.form.controls.modoDescarga.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]);
            this.form.controls.tiposVeiculos.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]);
        }
        else {
            this.form.controls.tipoDescarga.clearValidators();
            this.form.controls.modoDescarga.clearValidators();
            this.form.controls.tiposVeiculos.clearValidators();
        }
        this.form.controls.tipoDescarga.updateValueAndValidity();
        this.form.controls.modoDescarga.updateValueAndValidity();
        this.form.controls.tiposVeiculos.updateValueAndValidity();
    }
    setFormBuilderDiasEntrega(diasEntrega) {
        for (let key in diasEntrega) {
            this.onDiaEntregas(key);
        }
    }
    getAnexos(entrega, codEndereco) {
        if ((entrega === true || entrega == 1) && codEndereco != null) {
            this.loaderNavbar = true;
            this.showAnexos = false;
            this.formService
                .getAnexos(codEndereco)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(() => {
                this.loaderNavbar = false;
            }))
                .subscribe({
                next: (response) => {
                    if (response.hasOwnProperty('success') &&
                        response.success === true) {
                        this.setAnexos(response.data);
                        this.showAnexos = true;
                    }
                },
                error: (error) => {
                    if (error['error'].hasOwnProperty('mensagem')) {
                        this.pnotifyService.error(error.error.mensagem);
                    }
                    else {
                        this.pnotifyService.error();
                    }
                }
            });
        }
    }
    setAnexos(anexos) {
        if (anexos.length > 0) {
            for (let i = 0; i < anexos.length; i++) {
                this.onAddAnexos(anexos[i], true);
            }
        }
    }
    get anexos() {
        return this.form.get('anexos');
    }
    onAddAnexos(anexo, manipulateForm) {
        if (this.checkAnexoExists(anexo) === false) {
            this.anexos.push(this.formBuilder.group({
                codAnexo: [anexo.codAnexo],
                nomeAnexo: [anexo.nomeAnexo],
                linkAnexo: [anexo.linkAnexo],
            }));
            if (manipulateForm) {
                this.form.markAsTouched();
                this.form.markAsDirty();
            }
        }
    }
    appendFile(files) {
        if (files.length === 0)
            return;
        const fd = new FormData();
        fd.append('file', files[0]);
        this.formData.push(fd);
        this.anexos.push(this.formBuilder.group({
            nomeAnexo: [files[0]['name']],
        }));
        if (this.showAnexos === false) {
            this.showAnexos = true;
        }
        this.form.markAsTouched();
        this.form.markAsDirty();
    }
    checkAnexoExists(anexo) {
        return this.form.value.anexos.some((el) => {
            return el.codAnexo === anexo.codAnexo;
        });
    }
    onDeleteAnexo(codAnexo, index) {
        this.confirmDelete().subscribe((r) => {
            if (codAnexo) {
                this.loaderNavbar = true;
                this.formService
                    .deleteAnexo(codAnexo)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(() => {
                    this.loaderNavbar = false;
                }))
                    .subscribe({
                    next: (response) => {
                        if (response.hasOwnProperty('success') &&
                            response.success === true) {
                            r ? this.deleteDocumento(index) : null;
                        }
                        else if (response.hasOwnProperty('success') &&
                            response.success === false &&
                            response.hasOwnProperty('mensagem')) {
                            this.pnotifyService.error(response.mensagem);
                        }
                        else {
                            this.pnotifyService.error();
                        }
                    },
                    error: (error) => {
                        if (error['error'].hasOwnProperty('mensagem')) {
                            this.pnotifyService.error(error.error.mensagem);
                        }
                        else {
                            this.pnotifyService.error();
                        }
                    }
                });
            }
            else {
                r ? this.deleteDocumento(index) : null;
                this.formData.splice(index, 1);
            }
        });
    }
    confirmDelete() {
        return this.confirmModalService.showConfirm('delete', 'Confirmar exclusão', 'Deseja realmente prosseguir com a exclusão do registro?', 'Cancelar', 'Confirmar');
    }
    deleteDocumento(index) {
        this.anexos.removeAt(index);
        this.form.markAsTouched();
        this.form.markAsDirty();
    }
    onEnderecoEntrega() {
        this.exibirDadosEntrega = this.form.value.entrega;
        this.setValidatorsEntrega(this.form.value.entrega);
    }
    onInput() {
        this.formChanged = true;
    }
    onInputCep(detalhes) {
        if (this.form.get('cep').status == 'VALID') {
            this.consultaCEP(detalhes, this.form.value.cep);
        }
    }
    consultaCEP(detalhes, cep) {
        if (this.enderecosLoading == false) {
            this.cidadeRetorno = '';
            this.estadoRetorno = '';
            this.cepService
                .getData(cep)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(() => {
                this.enderecosLoading = false;
            }))
                .subscribe((response) => {
                this.enderecosLoading = true;
                if (response.hasOwnProperty('mensagem') &&
                    response.hasOwnProperty('success') &&
                    response.success === true) {
                    if (response.data.length > 1) {
                        this.formEnderecos = this.formBuilder.group({
                            enderecosRetorno: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                        });
                        this.enderecosOp = response.data;
                        if ((this.enderecosLoading = true)) {
                            this.openModal(detalhes);
                        }
                    }
                    else {
                        this.enderecoLoaded = true;
                        this.setFormValues(response.data);
                        this.cidadeRetorno = response.data.localidade;
                        this.estadoRetorno = response.data.uf;
                    }
                }
                else if (response.hasOwnProperty('mensagem') &&
                    response.hasOwnProperty('success') &&
                    response.success === false) {
                    this.pnotifyService.notice(response.mensagem);
                }
                else {
                    this.pnotifyService.error();
                }
            });
        }
    }
    onInputCidade() {
        if (this.form.get('cidade').status == 'VALID') {
            let cidade = {
                cidade: this.form.get('cidade').value,
            };
            this.formService.getIbgeCidades(cidade).subscribe((response) => {
                if (response.responseCode === 200) {
                    this.setRegiaoEntrega(response.result, this.form.get('cidade').value, this.form.get('bairro').value);
                }
                else {
                    this.pnotifyService.notice('Região de entrega não localizado, favor entrar em contato com o suporte');
                }
            });
        }
    }
    setFormValues(enderecoSelecionado) {
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
    setRegiaoEntrega(ibge, cidade, bairro) {
        const getRegiao = cidade == "São Paulo" ? this.formService.getRegiaoEntregaPorBairro(bairro) : this.formService.getRegiaoEntrega(ibge);
        getRegiao.subscribe((response) => {
            if (response.responseCode === 200) {
                this.form.controls.regiaoEntrega.setValue(response.result.idRegiaoEntrega);
                this.form.controls.regiaoEntrega.updateValueAndValidity();
            }
            else {
                this.form.controls.regiaoEntrega.enable();
                this.form.controls.regiaoEntrega.updateValueAndValidity();
            }
        });
    }
    formCanDeactivate() {
        if (this.formChanged) {
            if (confirm('Este cliente no forma parte de tu cartera?')) {
                return true;
            }
            else {
                return false;
            }
        }
        return true;
    }
    checkValidatorsTipoEndereco() {
        let validation = true;
        if (this.form.getRawValue().principal === false &&
            this.form.getRawValue().cobranca === false &&
            this.form.getRawValue().entrega === false) {
            validation = false;
        }
        else if (this.form.getRawValue().principal === true &&
            this.form.getRawValue().cobranca === true &&
            this.form.getRawValue().entrega === false &&
            this.action != 'novo') {
            validation = false;
        }
        else if (this.form.getRawValue().principal === true &&
            this.form.getRawValue().cobranca === false &&
            this.form.getRawValue().entrega === true &&
            this.action != 'novo') {
            validation = false;
        }
        else if (this.form.getRawValue().principal === false &&
            this.form.getRawValue().cobranca === true &&
            this.form.getRawValue().entrega === true &&
            this.action != 'novo') {
            validation = false;
        }
        return validation;
    }
    checkValidatorsDiasEntregas() {
        let validation = false;
        if (this.form.value.entrega === true || this.form.value.entrega == 1) {
            for (let key in this.form.value.diasEntrega) {
                if (this.form.value.diasEntrega[key].checked === true) {
                    validation = true;
                }
            }
        }
        else {
            validation = true;
        }
        return validation;
    }
    checkValidatorsTiposVeiculo() {
        let validation = false;
        if (this.form.value.entrega === true || this.form.value.entrega == 1) {
            if (this.form.value.tiposVeiculos.length > 0) {
                validation = true;
            }
        }
        else {
            validation = true;
        }
        return validation;
    }
    checkValidatorsEndereco() {
        let validation = false;
        let verificaNumero = this.form.getRawValue().endereco.split(',');
        if (verificaNumero.length > 1) {
            validation = true;
        }
        return validation;
    }
    checkValidatorsCliente() {
        let validation = false;
        let cliente = this.form.controls.COD_CLIE_TERC.value;
        if (cliente > 0 || !this.exibirSelecaoCliente) {
            validation = true;
        }
        return validation;
    }
    fixTime(horario) {
        let d = new Date();
        if (horario != null) {
            let horarioSplit = horario.split(':');
            let h = parseInt(horarioSplit[0]);
            let m = parseInt(horarioSplit[1]);
            d.setHours(h);
            d.setMinutes(m);
        }
        return d;
    }
    onDiaEntregas(field) {
        const diasEntrega = this.form.controls.diasEntrega;
        const diaControls = diasEntrega.controls[field];
        if (diaControls.value.checked) {
            diaControls.controls.minimo.enable();
            diaControls.controls.minimo.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]);
            diaControls.controls.minimo.updateValueAndValidity();
            diaControls.controls.maximo.enable();
            diaControls.controls.maximo.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]);
            diaControls.controls.maximo.updateValueAndValidity();
        }
        else {
            diaControls.controls.minimo.disable();
            diaControls.controls.minimo.clearValidators();
            diaControls.controls.minimo.updateValueAndValidity();
            diaControls.controls.maximo.disable();
            diaControls.controls.maximo.clearValidators();
            diaControls.controls.maximo.updateValueAndValidity();
        }
    }
    onReplicarHorario(field) {
        if (this.form.value.diasEntrega[field].checked) {
            const diasEntrega = this.form.controls.diasEntrega;
            const diaControls = diasEntrega.controls[field];
            if (diaControls.status == 'VALID') {
                this.confirmModalService
                    .showConfirm(null, null, 'Deseja realmente replicar este horário para os demais dias selecionados?', 'Cancelar', 'Confirmar')
                    .subscribe((response) => response ? this.replicaHorario(field) : rxjs__WEBPACK_IMPORTED_MODULE_9__["EMPTY"]);
            }
            else {
                this.pnotifyService.notice('Informe o horário mínimo/máximo.');
            }
        }
        else {
            this.pnotifyService.notice('Habilite o dia de entrega para replicar.');
        }
    }
    replicaHorario(field) {
        const diasEntrega = this.form.controls.diasEntrega;
        const minimo = this.form.value.diasEntrega[field].minimo;
        const maximo = this.form.value.diasEntrega[field].maximo;
        for (let key in this.form.value.diasEntrega) {
            if (key != field) {
                if (this.form.value.diasEntrega[key].checked) {
                    const diaControls = diasEntrega.controls[key];
                    diaControls.controls.minimo.setValue(minimo);
                    diaControls.controls.maximo.setValue(maximo);
                }
            }
        }
    }
    onCancel() {
        this.location.back();
    }
    onSubmit() {
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
        if (this.cidadeRetorno != '' &&
            this.form.getRawValue().cidade != this.cidadeRetorno) {
            this.pnotifyService.notice('Cidade diferente de resultado de busca automática.');
        }
        if (this.estadoRetorno != '' &&
            this.form.getRawValue().uf != this.estadoRetorno) {
            this.pnotifyService.notice('Estado diferente de resultado de busca automática.');
        }
        if (this.form.getRawValue().principal == true &&
            (this.form.getRawValue().regiaoAtuacaoComercial == null ||
                this.form.getRawValue().regiaoAtuacaoComercial == '') &&
            this.action == 'novo') {
            this.pnotifyService.notice('Selecione um Região de Atuação Comercial.');
            return false;
        }
        if (this.form.pristine) {
            this.pnotifyService.notice('Nenhuma alteração detectada.');
            this.location.back();
        }
        else {
            if (this.form.valid) {
                this.cadastroService.onNotifyLoaded(true);
                this.clientesService.updateEndereco(this.form.getRawValue()).subscribe({
                    next: (response) => {
                        if (response.responseCode === 200) {
                            if (this.formData.length > 0 && response.codEndereco) {
                                this.onPostAnexos(response.codEndereco, this.form.value.codCliente);
                            }
                            this.onSended();
                            this.pnotifyService.success();
                            this.cadastroService.onNotifyLoaded(false);
                            this.formChanged = false;
                            this.location.back();
                        }
                        else {
                            this.handleSubmitError();
                        }
                    },
                    error: (error) => {
                        this.handleSubmitError();
                    }
                });
            }
        }
    }
    onPostAnexos(codEndereco, codCliente) {
        if (this.formData.length === 0) {
            this.pnotifyService.notice('Nenhum arquivo !');
            return;
        }
        this.formData.forEach((element, index) => {
            this.formService.postAnexos(element, codEndereco, codCliente).subscribe();
        });
    }
    handleSubmitError() {
        this.pnotifyService.error('Ocorreu um erro ao salvar o cadastro.');
        this.cadastroService.onNotifyLoaded(false);
    }
    onSended() {
        this.cadastroService.onNotifySended(true);
    }
    openModal(detalhes) {
        this.modalRef = this.modalService.show(detalhes, Object.assign({
            ignoreBackdropClick: true,
        }, { class: 'modal-lg' }));
    }
    onModalClose() {
        this.modalRef.hide();
    }
    setValueEndereco() {
        let retornoTratado;
        retornoTratado = this.formEnderecos.value['enderecosRetorno'];
        this.onModalClose();
        this.enderecoLoaded = true;
        this.setFormValues(retornoTratado);
    }
    selecaoCliente(event) {
        if (event == "obra" || event == "filial" || event == "industrialização") {
            this.exibirSelecaoCliente = true;
        }
        else {
            this.exibirSelecaoCliente = false;
            this.form.controls.COD_CLIE_TERC.setValue(null);
            this.form.controls.COD_CLIE_TERC_RAZ.setValue(null);
            this.form.controls.TP_ACAO.setValue(null);
        }
    }
    getClientes(params) {
        const _params = params !== null && params !== void 0 ? params : {};
        const _obj = this.formClientes.value;
        this.loadingClientes = true;
        if (_obj['pesquisa'])
            _params[_obj['buscarPor']] = _obj['pesquisa'];
        this.comercialService
            .getCarteiraClientes(_params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(() => {
            this.loadingClientes = false;
        }))
            .subscribe({
            next: (response) => {
                if (response.success === true) {
                    this.noClientes = false;
                    this.clientes = response.data;
                }
                else {
                    this.noClientes = true;
                    this.pnotifyService.notice('Nenhum cliente encontrado!');
                }
            },
            error: (error) => {
                this.pnotifyService.error();
            }
        });
    }
    setCliente(cliente) {
        if (cliente.nomeSituacao == 'Arquivo') {
            this.pnotifyService.notice('Cliente arquivado, favor entrar em contato com o Marketing');
        }
        else {
            this.form.controls.COD_CLIE_TERC.setValue(cliente.codCliente);
            this.form.controls.COD_CLIE_TERC_RAZ.setValue(cliente.razaoSocial);
            this.onModalClose();
        }
    }
    getCliente(codCliente) {
        this.loaderFullScreen = true;
        this.formService.getCliente(codCliente)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(() => {
            this.loaderFullScreen = false;
        }))
            .subscribe({
            next: (response) => {
                const data = [];
                data[0] = response;
                if (data[0].responseCode === 200) {
                    this.form.controls.COD_CLIE_TERC_RAZ.setValue(data[0].result.razaoSocial);
                    this.exibirSelecaoCliente = true;
                }
            }
        });
    }
};
ComercialClientesCadastroEnderecosFormularioComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _formulario_service__WEBPACK_IMPORTED_MODULE_15__["ComercialClientesCadastroEnderecosFormularioService"] },
    { type: _cadastro_service__WEBPACK_IMPORTED_MODULE_16__["ComercialClientesCadastroService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__["BsModalService"] },
    { type: src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_17__["ComercialClientesService"] },
    { type: src_app_shared_services_requests_estados_service__WEBPACK_IMPORTED_MODULE_18__["EstadosService"] },
    { type: src_app_shared_services_ws_cep_service__WEBPACK_IMPORTED_MODULE_19__["CepService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_13__["PNotifyService"] },
    { type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_14__["ConfirmModalService"] },
    { type: _services_vendedores_service__WEBPACK_IMPORTED_MODULE_3__["ComercialVendedoresService"] }
];
ComercialClientesCadastroEnderecosFormularioComponent.propDecorators = {
    cliente: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    fecharModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    clientesParams: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }]
};
ComercialClientesCadastroEnderecosFormularioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'comercial-clientes-cadastro-enderecos-formulario',
        template: _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
        _formulario_service__WEBPACK_IMPORTED_MODULE_15__["ComercialClientesCadastroEnderecosFormularioService"],
        _cadastro_service__WEBPACK_IMPORTED_MODULE_16__["ComercialClientesCadastroService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"],
        ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__["BsModalService"],
        src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_17__["ComercialClientesService"],
        src_app_shared_services_requests_estados_service__WEBPACK_IMPORTED_MODULE_18__["EstadosService"],
        src_app_shared_services_ws_cep_service__WEBPACK_IMPORTED_MODULE_19__["CepService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_13__["PNotifyService"],
        src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_14__["ConfirmModalService"],
        _services_vendedores_service__WEBPACK_IMPORTED_MODULE_3__["ComercialVendedoresService"]])
], ComercialClientesCadastroEnderecosFormularioComponent);



/***/ }),

/***/ "nF7G":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/comercial/clientes/cadastro/contatos/formulario/formulario.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ComercialClientesCadastroContatosFormularioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialClientesCadastroContatosFormularioComponent", function() { return ComercialClientesCadastroContatosFormularioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./formulario.component.html */ "C/7g");
/* harmony import */ var _formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formulario.component.scss */ "h1bq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var ng_brazil__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-brazil */ "hTrW");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _formulario_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./formulario.service */ "UPcH");
/* harmony import */ var _cadastro_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../cadastro.service */ "N70Q");
/* harmony import */ var src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/modules/comercial/services/clientes.service */ "8ouN");
/* harmony import */ var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/modules/confirm-modal/confirm-modal.service */ "FOez");









// ng-brazil

// Services





let ComercialClientesCadastroContatosFormularioComponent = class ComercialClientesCadastroContatosFormularioComponent {
    constructor(activatedRoute, formBuilder, formService, cadastroService, location, clientesService, pnotifyService, confirmModalService) {
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
    ngOnInit() {
        this.cancelSubscription();
        this.submitSubscription();
        if (this.activatedRoute.snapshot.data.data.success === true) {
            this.getFormFields();
            this.setFormBuilder(this.activatedRoute.snapshot.data.data.data);
            console.log(this.activatedRoute.snapshot.data.data.data);
            this.activatedRoute.parent.parent.params.subscribe((params) => {
                this.codCliente = params.id;
            });
        }
        else {
            this.pnotifyService.error();
            this.location.back();
        }
    }
    ngAfterViewInit() {
        this.cadastroService.onNotifyLoaded(true);
    }
    ngOnDestroy() {
        this.subscriptionCancel.unsubscribe();
        this.subscriptionSubmit.unsubscribe();
    }
    getFormFields() {
        this.formService
            .loadDepencies()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.loaderFullScreen = false;
            this.cadastroService.onNotifyLoaded(false);
        }))
            .subscribe({
            next: (response) => {
                if (response[0]['responseCode'] === 200) {
                    this.funcoes = response[0]['result'];
                }
                else {
                    this.handleFormFieldsError();
                }
                if (response[1]['responseCode'] === 200) {
                    this.setores = response[1]['result'];
                }
                else {
                    this.handleFormFieldsError();
                }
                /* if (response[2]['responseCode'] === 200) {
                  this.timesFutebol = response[2]['result'];
                } else {
                  this.handleFormFieldsError();
                } */
            },
            error: (error) => {
                this.handleFormFieldsError();
            }
        });
    }
    handleFormFieldsError() {
        this.pnotifyService.error();
        this.location.back();
    }
    setFormBuilder(data) {
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
            tid: [data['tid']],
        });
        this.setFormMeiosContato(data['contatos']);
        // this.setFormFilhos(data['filhos']);
    }
    cancelSubscription() {
        this.subscriptionCancel = this.cadastroService.notifyCancelObservable$.subscribe((response) => {
            if (response) {
                this.onCancel();
            }
        });
    }
    submitSubscription() {
        this.subscriptionSubmit = this.cadastroService.notifySubmitObservable$.subscribe((response) => {
            if (response) {
                this.onSubmit();
            }
        });
    }
    onFieldError(field) {
        if (this.onFieldInvalid(field)) {
            return 'is-invalid';
        }
        return '';
    }
    onFieldInvalid(field) {
        field = this.form.get(field);
        return field.status == 'INVALID' && field.touched;
    }
    onFieldRequired(field) {
        let required = false;
        let formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        if (this.form.controls[field].validator) {
            let validationResult = this.form.controls[field].validator(formControl);
            required =
                validationResult !== null && validationResult.required === true;
        }
        if (required) {
            return 'is-required';
        }
    }
    onInput() {
        this.formChanged = true;
    }
    setFormMeiosContato(meiosContato) {
        if (meiosContato.length > 0 && meiosContato != null) {
            for (let i = 0; i < meiosContato.length; i++) {
                this.pushMeioContato(meiosContato[i]);
            }
        }
    }
    setFormFilhos(filhos) {
        if (filhos.length > 0 && filhos != null) {
            for (let i = 0; i < filhos.length; i++) {
                this.pushFilho(filhos[i]);
            }
        }
    }
    get celulares() {
        return this.form.get('celulares');
    }
    get telefones() {
        return this.form.get('telefones');
    }
    get emails() {
        return this.form.get('emails');
    }
    get filhos() {
        return this.form.get('filhos');
    }
    pushMeioContato(contato) {
        if (contato['tipo'] == 'Celular') {
            this.pushCelular(contato);
        }
        else if (contato['tipo'] == 'Telefone') {
            this.pushTelefone(contato);
        }
        else if (contato['tipo'] == 'Email' ||
            contato['tipo'] == 'E-Mail' ||
            contato['tipo'] == 'Email NFe' ||
            contato['tipo'] == 'E-mail NFe' ||
            contato['tipo'] == 'MalaDireta') {
            this.pushEmail(contato);
        }
    }
    pushCelular(contato) {
        let isWhatsApp = false;
        if (contato['idTipoContato'] == 1) {
            isWhatsApp = true;
        }
        this.celulares.push(this.formBuilder.group({
            id: [contato['id']],
            tipo: [contato['tipo']],
            contato: [contato['contato'].toString(), [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            whatsapp: [isWhatsApp],
        }));
    }
    pushTelefone(contato) {
        this.telefones.push(this.formBuilder.group({
            id: [contato['id']],
            tipo: [contato['tipo']],
            contato: [contato['contato'].toString(), [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
        }));
    }
    pushEmail(contato) {
        let isEmailMarketing = false;
        let isEmailNFe = false;
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
            nfe: [isEmailNFe],
        }));
    }
    pushFilho(filho) {
        this.filhos.push(this.formBuilder.group({
            id: [filho['id']],
            nome: [filho['nome'], [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            idade: [filho['idade'], [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
        }));
    }
    onAddMeioContato(tipo) {
        if (tipo == 'celular') {
            this.onAddCelular();
        }
        else if (tipo == 'telefone') {
            this.onAddTelefone();
        }
        else if (tipo == 'email') {
            this.onAddEmail();
        }
    }
    onAddCelular() {
        this.celulares.push(this.formBuilder.group({
            id: [null],
            tipo: ['Celular'],
            contato: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            whatsapp: [false],
        }));
    }
    onAddTelefone() {
        this.telefones.push(this.formBuilder.group({
            id: [null],
            tipo: ['Telefone'],
            contato: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
        }));
    }
    onAddEmail() {
        this.emails.push(this.formBuilder.group({
            id: [null],
            tipo: ['E-Mail'],
            contato: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            marketing: [false],
            nfe: [false],
        }));
    }
    onAddFilho() {
        this.filhos.push(this.formBuilder.group({
            id: [null],
            nome: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            idade: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
        }));
    }
    onDeleteMeioContato(tipo, index) {
        if (tipo == 'celular') {
            this.onDeleteCelular(index);
        }
        else if (tipo == 'telefone') {
            this.onDeleteTelefone(index);
        }
        else if (tipo == 'email') {
            this.onDeleteEmail(index);
        }
    }
    onDeleteCelular(index) {
        if (this.celulares.controls[index].value['id'] == null) {
            this.celulares.removeAt(index);
        }
        else {
            this.confirmDelete()
                .asObservable()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])((result) => result
                ? this.deleteMeioContato(this.celulares.controls[index].value['id'])
                : rxjs__WEBPACK_IMPORTED_MODULE_8__["EMPTY"]))
                .subscribe({
                next: (response) => {
                    if (response['responseCode'] === 200) {
                        this.celulares.removeAt(index);
                        this.pnotifyService.success();
                        this.cadastroService.onNotifyLoaded(false);
                    }
                },
                error: (error) => {
                    this.pnotifyService.error('Erro ao excluir celular. Tente novamente!');
                    this.cadastroService.onNotifyLoaded(false);
                }
            });
        }
    }
    onDeleteTelefone(index) {
        if (this.telefones.controls[index].value['id'] == null) {
            this.telefones.removeAt(index);
        }
        else {
            this.confirmDelete()
                .asObservable()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])((result) => result
                ? this.deleteMeioContato(this.telefones.controls[index].value['id'])
                : rxjs__WEBPACK_IMPORTED_MODULE_8__["EMPTY"]))
                .subscribe({
                next: (response) => {
                    if (response['responseCode'] === 200) {
                        this.telefones.removeAt(index);
                        this.pnotifyService.success();
                        this.cadastroService.onNotifyLoaded(false);
                    }
                },
                error: (error) => {
                    this.pnotifyService.error('Erro ao excluir telefone. Tente novamente!');
                    this.cadastroService.onNotifyLoaded(false);
                }
            });
        }
    }
    onDeleteEmail(index) {
        if (this.emails.controls[index].value['id'] == null) {
            this.emails.removeAt(index);
        }
        else {
            this.confirmDelete()
                .asObservable()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])((result) => result
                ? this.deleteMeioContato(this.emails.controls[index].value['id'])
                : rxjs__WEBPACK_IMPORTED_MODULE_8__["EMPTY"]))
                .subscribe({
                next: (response) => {
                    if (response['responseCode'] === 200) {
                        this.emails.removeAt(index);
                        this.pnotifyService.success();
                        this.cadastroService.onNotifyLoaded(false);
                    }
                },
                error: (error) => {
                    this.pnotifyService.error('Erro ao excluir e-mail. Tente novamente!');
                    this.cadastroService.onNotifyLoaded(false);
                }
            });
        }
    }
    onDeleteFilho(index) {
        if (this.filhos.controls[index].value['id'] == null) {
            this.filhos.removeAt(index);
        }
        else {
            this.confirmDelete()
                .asObservable()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])((result) => (result ? this.deleteFilho(index) : rxjs__WEBPACK_IMPORTED_MODULE_8__["EMPTY"])))
                .subscribe({
                next: (success) => {
                    this.pnotifyService.success();
                    this.cadastroService.onNotifyLoaded(false);
                },
                error: (error) => {
                    this.pnotifyService.error('Erro ao excluir filho. Tente novamente!');
                    this.cadastroService.onNotifyLoaded(false);
                }
            });
        }
    }
    confirmDelete() {
        return this.confirmModalService.showConfirm('delete', 'Confirmar exclusão', 'Deseja realmente prosseguir com a exclusão do registro?', 'Cancelar', 'Confirmar');
    }
    deleteMeioContato(id) {
        this.cadastroService.onNotifyLoaded(false);
        return this.clientesService.deleteMeioContato(this.codCliente, this.form.value['id'], id);
    }
    deleteFilho(id) {
        this.cadastroService.onNotifyLoaded(false);
        return this.clientesService.deleteFilho(id);
    }
    checkValidatorsMeiosContato() {
        let validation = true;
        if (this.form.value['celulares'].length == 0 &&
            this.form.value['telefones'].length == 0 &&
            this.form.value['emails'].length == 0) {
            validation = false;
        }
        return validation;
    }
    formCanDeactivate() {
        if (this.formChanged) {
            if (confirm('Este cliente no forma parte de tu cartera?')) {
                return true;
            }
            else {
                return false;
            }
        }
        return true;
    }
    onCancel() {
        this.location.back();
    }
    onSubmit() {
        if (!this.checkValidatorsMeiosContato()) {
            this.pnotifyService.notice('Informe ao menos um meio de contato.');
            return false;
        }
        if (this.form.pristine) {
            this.location.back();
        }
        else {
            if (this.form.valid) {
                this.cadastroService.onNotifyLoaded(true);
                let formObj = {
                    codCliente: this.codCliente,
                    id: this.form.value['id'],
                    idSeqTid: this.form.value['idSeqTid'],
                    nomeCompleto: this.form.value['nomeCompleto'],
                    idSetor: this.form.value['setor'],
                    idFuncao: this.form.value['funcao'],
                    idGenero: this.form.value['genero'],
                    contatos: [],
                };
                formObj['contatos'] = this.form.value['celulares'].concat(this.form.value['telefones'], this.form.value['emails']);
                this.clientesService.updateContato(formObj).subscribe({
                    next: (response) => {
                        console.log(response);
                        if (response['responseCode'] === 200) {
                            this.onSended();
                            this.pnotifyService.success();
                            this.cadastroService.onNotifyLoaded(false);
                            this.formChanged = false;
                            this.location.back();
                        }
                        else {
                            this.handleSubmitError();
                        }
                    },
                    error: (error) => {
                        this.handleSubmitError();
                    }
                });
            }
        }
    }
    handleSubmitError() {
        this.pnotifyService.error('Ocorreu um erro ao salvar o cadastro.');
        this.cadastroService.onNotifyLoaded(false);
    }
    onSended() {
        this.cadastroService.onNotifySended(true);
    }
};
ComercialClientesCadastroContatosFormularioComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _formulario_service__WEBPACK_IMPORTED_MODULE_11__["ComercialClientesCadastroContatosFormularioService"] },
    { type: _cadastro_service__WEBPACK_IMPORTED_MODULE_12__["ComercialClientesCadastroService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] },
    { type: src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_13__["ComercialClientesService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"] },
    { type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_14__["ConfirmModalService"] }
];
ComercialClientesCadastroContatosFormularioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-clientes-cadastro-contatos-formulario',
        template: _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        _formulario_service__WEBPACK_IMPORTED_MODULE_11__["ComercialClientesCadastroContatosFormularioService"],
        _cadastro_service__WEBPACK_IMPORTED_MODULE_12__["ComercialClientesCadastroService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"],
        src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_13__["ComercialClientesService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"],
        src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_14__["ConfirmModalService"]])
], ComercialClientesCadastroContatosFormularioComponent);



/***/ }),

/***/ "pYyI":
/*!******************************************************************!*\
  !*** ./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js ***!
  \******************************************************************/
/*! exports provided: FileDropDirective, FileItem, FileLikeObject, FileSelectDirective, FileUploadModule, FileUploader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileDropDirective", function() { return FileDropDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileItem", function() { return FileItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileLikeObject", function() { return FileLikeObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileSelectDirective", function() { return FileSelectDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadModule", function() { return FileUploadModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploader", function() { return FileUploader; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");



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
class FileLikeObject {
    /**
     * @param {?} fileOrInput
     */
    constructor(fileOrInput) {
        this.rawFile = fileOrInput;
        /** @type {?} */
        let isInput = isElement(fileOrInput);
        /** @type {?} */
        let fakePathOrObject = isInput ? fileOrInput.value : fileOrInput;
        /** @type {?} */
        let postfix = typeof fakePathOrObject === 'string' ? 'FakePath' : 'Object';
        /** @type {?} */
        let method = '_createFrom' + postfix;
        ((/** @type {?} */ (this)))[method](fakePathOrObject);
    }
    /**
     * @param {?} path
     * @return {?}
     */
    _createFromFakePath(path) {
        this.lastModifiedDate = void 0;
        this.size = void 0;
        this.type = 'like/' + path.slice(path.lastIndexOf('.') + 1).toLowerCase();
        this.name = path.slice(path.lastIndexOf('/') + path.lastIndexOf('\\') + 2);
    }
    /**
     * @param {?} object
     * @return {?}
     */
    _createFromObject(object) {
        this.size = object.size;
        this.type = object.type;
        this.name = object.name;
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FileItem {
    /**
     * @param {?} uploader
     * @param {?} some
     * @param {?} options
     */
    constructor(uploader, some, options) {
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
    upload() {
        try {
            this.uploader.uploadItem(this);
        }
        catch (e) {
            this.uploader._onCompleteItem(this, '', 0, {});
            this.uploader._onErrorItem(this, '', 0, {});
        }
    }
    /**
     * @return {?}
     */
    cancel() {
        this.uploader.cancelItem(this);
    }
    /**
     * @return {?}
     */
    remove() {
        this.uploader.removeFromQueue(this);
    }
    /**
     * @return {?}
     */
    onBeforeUpload() {
        return void 0;
    }
    /**
     * @param {?} form
     * @return {?}
     */
    onBuildForm(form) {
        return { form };
    }
    /**
     * @param {?} progress
     * @return {?}
     */
    onProgress(progress) {
        return { progress };
    }
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    onSuccess(response, status, headers) {
        return { response, status, headers };
    }
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    onError(response, status, headers) {
        return { response, status, headers };
    }
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    onCancel(response, status, headers) {
        return { response, status, headers };
    }
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    onComplete(response, status, headers) {
        return { response, status, headers };
    }
    /**
     * @return {?}
     */
    _onBeforeUpload() {
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
    _onBuildForm(form) {
        this.onBuildForm(form);
    }
    /**
     * @param {?} progress
     * @return {?}
     */
    _onProgress(progress) {
        this.progress = progress;
        this.onProgress(progress);
    }
    /**
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    _onSuccess(response, status, headers) {
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
    _onError(response, status, headers) {
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
    _onCancel(response, status, headers) {
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
    _onComplete(response, status, headers) {
        this.onComplete(response, status, headers);
        if (this.uploader.options.removeAfterUpload) {
            this.remove();
        }
    }
    /**
     * @return {?}
     */
    _prepareToUploading() {
        this.index = this.index || ++this.uploader._nextIndex;
        this.isReady = true;
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FileType {
    /**
     * @param {?} file
     * @return {?}
     */
    static getMimeClass(file) {
        /** @type {?} */
        let mimeClass = 'application';
        if (this.mime_psd.indexOf(file.type) !== -1) {
            mimeClass = 'image';
        }
        else if (file.type.match('image.*')) {
            mimeClass = 'image';
        }
        else if (file.type.match('video.*')) {
            mimeClass = 'video';
        }
        else if (file.type.match('audio.*')) {
            mimeClass = 'audio';
        }
        else if (file.type === 'application/pdf') {
            mimeClass = 'pdf';
        }
        else if (this.mime_compress.indexOf(file.type) !== -1) {
            mimeClass = 'compress';
        }
        else if (this.mime_doc.indexOf(file.type) !== -1) {
            mimeClass = 'doc';
        }
        else if (this.mime_xsl.indexOf(file.type) !== -1) {
            mimeClass = 'xls';
        }
        else if (this.mime_ppt.indexOf(file.type) !== -1) {
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
    static fileTypeDetection(inputFilename) {
        /** @type {?} */
        let types = {
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
        let chunks = inputFilename.split('.');
        if (chunks.length < 2) {
            return 'application';
        }
        /** @type {?} */
        let extension = chunks[chunks.length - 1].toLowerCase();
        if (types[extension] === undefined) {
            return 'application';
        }
        else {
            return types[extension];
        }
    }
}
/*  MS office  */
FileType.mime_doc = [
    'application/msword',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
    'application/vnd.ms-word.document.macroEnabled.12',
    'application/vnd.ms-word.template.macroEnabled.12'
];
FileType.mime_xsl = [
    'application/vnd.ms-excel',
    'application/vnd.ms-excel',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.template',
    'application/vnd.ms-excel.sheet.macroEnabled.12',
    'application/vnd.ms-excel.template.macroEnabled.12',
    'application/vnd.ms-excel.addin.macroEnabled.12',
    'application/vnd.ms-excel.sheet.binary.macroEnabled.12'
];
FileType.mime_ppt = [
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'application/vnd.openxmlformats-officedocument.presentationml.template',
    'application/vnd.openxmlformats-officedocument.presentationml.slideshow',
    'application/vnd.ms-powerpoint.addin.macroEnabled.12',
    'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
    'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
    'application/vnd.ms-powerpoint.slideshow.macroEnabled.12'
];
/* PSD */
FileType.mime_psd = [
    'image/photoshop',
    'image/x-photoshop',
    'image/psd',
    'application/photoshop',
    'application/psd',
    'zz-application/zz-winassoc-psd'
];
/* Compressed files */
FileType.mime_compress = [
    'application/x-gtar',
    'application/x-gcompress',
    'application/compress',
    'application/x-tar',
    'application/x-rar-compressed',
    'application/octet-stream',
    'application/x-zip-compressed',
    'application/zip-compressed',
    'application/x-7z-compressed',
    'application/gzip',
    'application/x-bzip2'
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} value
 * @return {?}
 */
function isFile(value) {
    return (File && value instanceof File);
}
/**
 * @record
 */
function Headers() { }
if (false) {}
/**
 * @record
 */
function FileUploaderOptions() { }
if (false) {}
class FileUploader {
    /**
     * @param {?} options
     */
    constructor(options) {
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
            formatDataFunction: (/**
             * @param {?} item
             * @return {?}
             */
            (item) => item._file),
            formatDataFunctionIsAsync: false
        };
        this.setOptions(options);
        this.response = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} options
     * @return {?}
     */
    setOptions(options) {
        this.options = Object.assign(this.options, options);
        this.authToken = this.options.authToken;
        this.authTokenHeader = this.options.authTokenHeader || 'Authorization';
        this.autoUpload = this.options.autoUpload;
        this.options.filters.unshift({ name: 'queueLimit', fn: this._queueLimitFilter });
        if (this.options.maxFileSize) {
            this.options.filters.unshift({ name: 'fileSize', fn: this._fileSizeFilter });
        }
        if (this.options.allowedFileType) {
            this.options.filters.unshift({ name: 'fileType', fn: this._fileTypeFilter });
        }
        if (this.options.allowedMimeType) {
            this.options.filters.unshift({ name: 'mimeType', fn: this._mimeTypeFilter });
        }
        for (let i = 0; i < this.queue.length; i++) {
            this.queue[i].url = this.options.url;
        }
    }
    /**
     * @param {?} files
     * @param {?=} options
     * @param {?=} filters
     * @return {?}
     */
    addToQueue(files, options, filters) {
        /** @type {?} */
        let list = [];
        for (let file of files) {
            list.push(file);
        }
        /** @type {?} */
        let arrayOfFilters = this._getFilters(filters);
        /** @type {?} */
        let count = this.queue.length;
        /** @type {?} */
        let addedFileItems = [];
        list.map((/**
         * @param {?} some
         * @return {?}
         */
        (some) => {
            if (!options) {
                options = this.options;
            }
            /** @type {?} */
            let temp = new FileLikeObject(some);
            if (this._isValidFile(temp, arrayOfFilters, options)) {
                /** @type {?} */
                let fileItem = new FileItem(this, some, options);
                addedFileItems.push(fileItem);
                this.queue.push(fileItem);
                this._onAfterAddingFile(fileItem);
            }
            else {
                /** @type {?} */
                let filter = arrayOfFilters[this._failFilterIndex];
                this._onWhenAddingFileFailed(temp, filter, options);
            }
        }));
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
    removeFromQueue(value) {
        /** @type {?} */
        let index = this.getIndexOfItem(value);
        /** @type {?} */
        let item = this.queue[index];
        if (item.isUploading) {
            item.cancel();
        }
        this.queue.splice(index, 1);
        this.progress = this._getTotalProgress();
    }
    /**
     * @return {?}
     */
    clearQueue() {
        while (this.queue.length) {
            this.queue[0].remove();
        }
        this.progress = 0;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    uploadItem(value) {
        /** @type {?} */
        let index = this.getIndexOfItem(value);
        /** @type {?} */
        let item = this.queue[index];
        /** @type {?} */
        let transport = this.options.isHTML5 ? '_xhrTransport' : '_iframeTransport';
        item._prepareToUploading();
        if (this.isUploading) {
            return;
        }
        this.isUploading = true;
        ((/** @type {?} */ (this)))[transport](item);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    cancelItem(value) {
        /** @type {?} */
        let index = this.getIndexOfItem(value);
        /** @type {?} */
        let item = this.queue[index];
        /** @type {?} */
        let prop = this.options.isHTML5 ? item._xhr : item._form;
        if (item && item.isUploading) {
            prop.abort();
        }
    }
    /**
     * @return {?}
     */
    uploadAll() {
        /** @type {?} */
        let items = this.getNotUploadedItems().filter((/**
         * @param {?} item
         * @return {?}
         */
        (item) => !item.isUploading));
        if (!items.length) {
            return;
        }
        items.map((/**
         * @param {?} item
         * @return {?}
         */
        (item) => item._prepareToUploading()));
        items[0].upload();
    }
    /**
     * @return {?}
     */
    cancelAll() {
        /** @type {?} */
        let items = this.getNotUploadedItems();
        items.map((/**
         * @param {?} item
         * @return {?}
         */
        (item) => item.cancel()));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isFile(value) {
        return isFile(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isFileLikeObject(value) {
        return value instanceof FileLikeObject;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getIndexOfItem(value) {
        return typeof value === 'number' ? value : this.queue.indexOf(value);
    }
    /**
     * @return {?}
     */
    getNotUploadedItems() {
        return this.queue.filter((/**
         * @param {?} item
         * @return {?}
         */
        (item) => !item.isUploaded));
    }
    /**
     * @return {?}
     */
    getReadyItems() {
        return this.queue
            .filter((/**
         * @param {?} item
         * @return {?}
         */
        (item) => (item.isReady && !item.isUploading)))
            .sort((/**
         * @param {?} item1
         * @param {?} item2
         * @return {?}
         */
        (item1, item2) => item1.index - item2.index));
    }
    /**
     * @return {?}
     */
    destroy() {
        return void 0;
    }
    /**
     * @param {?} fileItems
     * @return {?}
     */
    onAfterAddingAll(fileItems) {
        return { fileItems };
    }
    /**
     * @param {?} fileItem
     * @param {?} form
     * @return {?}
     */
    onBuildItemForm(fileItem, form) {
        return { fileItem, form };
    }
    /**
     * @param {?} fileItem
     * @return {?}
     */
    onAfterAddingFile(fileItem) {
        return { fileItem };
    }
    /**
     * @param {?} item
     * @param {?} filter
     * @param {?} options
     * @return {?}
     */
    onWhenAddingFileFailed(item, filter, options) {
        return { item, filter, options };
    }
    /**
     * @param {?} fileItem
     * @return {?}
     */
    onBeforeUploadItem(fileItem) {
        return { fileItem };
    }
    /**
     * @param {?} fileItem
     * @param {?} progress
     * @return {?}
     */
    onProgressItem(fileItem, progress) {
        return { fileItem, progress };
    }
    /**
     * @param {?} progress
     * @return {?}
     */
    onProgressAll(progress) {
        return { progress };
    }
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    onSuccessItem(item, response, status, headers) {
        return { item, response, status, headers };
    }
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    onErrorItem(item, response, status, headers) {
        return { item, response, status, headers };
    }
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    onCancelItem(item, response, status, headers) {
        return { item, response, status, headers };
    }
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    onCompleteItem(item, response, status, headers) {
        return { item, response, status, headers };
    }
    /**
     * @return {?}
     */
    onCompleteAll() {
        return void 0;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    _mimeTypeFilter(item) {
        return !(this.options.allowedMimeType && this.options.allowedMimeType.indexOf(item.type) === -1);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    _fileSizeFilter(item) {
        return !(this.options.maxFileSize && item.size > this.options.maxFileSize);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    _fileTypeFilter(item) {
        return !(this.options.allowedFileType &&
            this.options.allowedFileType.indexOf(FileType.getMimeClass(item)) === -1);
    }
    /**
     * @param {?} item
     * @param {?} response
     * @param {?} status
     * @param {?} headers
     * @return {?}
     */
    _onErrorItem(item, response, status, headers) {
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
    _onCompleteItem(item, response, status, headers) {
        item._onComplete(response, status, headers);
        this.onCompleteItem(item, response, status, headers);
        /** @type {?} */
        let nextItem = this.getReadyItems()[0];
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
    _headersGetter(parsedHeaders) {
        return (/**
         * @param {?} name
         * @return {?}
         */
        (name) => {
            if (name) {
                return parsedHeaders[name.toLowerCase()] || void 0;
            }
            return parsedHeaders;
        });
    }
    /**
     * @protected
     * @param {?} item
     * @return {?}
     */
    _xhrTransport(item) {
        /** @type {?} */
        let that = this;
        /** @type {?} */
        let xhr = item._xhr = new XMLHttpRequest();
        /** @type {?} */
        let sendable;
        this._onBeforeUploadItem(item);
        if (typeof item._file.size !== 'number') {
            throw new TypeError('The file specified is no longer valid');
        }
        if (!this.options.disableMultipart) {
            sendable = new FormData();
            this._onBuildItemForm(item, sendable);
            /** @type {?} */
            const appendFile = (/**
             * @return {?}
             */
            () => sendable.append(item.alias, item._file, item.file.name));
            if (!this.options.parametersBeforeFiles) {
                appendFile();
            }
            // For AWS, Additional Parameters must come BEFORE Files
            if (this.options.additionalParameter !== undefined) {
                Object.keys(this.options.additionalParameter).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                (key) => {
                    /** @type {?} */
                    let paramVal = this.options.additionalParameter[key];
                    // Allow an additional parameter to include the filename
                    if (typeof paramVal === 'string' && paramVal.indexOf('{{file_name}}') >= 0) {
                        paramVal = paramVal.replace('{{file_name}}', item.file.name);
                    }
                    sendable.append(key, paramVal);
                }));
            }
            if (this.options.parametersBeforeFiles) {
                appendFile();
            }
        }
        else {
            sendable = this.options.formatDataFunction(item);
        }
        xhr.upload.onprogress = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            /** @type {?} */
            let progress = Math.round(event.lengthComputable ? event.loaded * 100 / event.total : 0);
            this._onProgressItem(item, progress);
        });
        xhr.onload = (/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            let headers = this._parseHeaders(xhr.getAllResponseHeaders());
            /** @type {?} */
            let response = this._transformResponse(xhr.response, headers);
            /** @type {?} */
            let gist = this._isSuccessCode(xhr.status) ? 'Success' : 'Error';
            /** @type {?} */
            let method = '_on' + gist + 'Item';
            ((/** @type {?} */ (this)))[method](item, response, xhr.status, headers);
            this._onCompleteItem(item, response, xhr.status, headers);
        });
        xhr.onerror = (/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            let headers = this._parseHeaders(xhr.getAllResponseHeaders());
            /** @type {?} */
            let response = this._transformResponse(xhr.response, headers);
            this._onErrorItem(item, response, xhr.status, headers);
            this._onCompleteItem(item, response, xhr.status, headers);
        });
        xhr.onabort = (/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            let headers = this._parseHeaders(xhr.getAllResponseHeaders());
            /** @type {?} */
            let response = this._transformResponse(xhr.response, headers);
            this._onCancelItem(item, response, xhr.status, headers);
            this._onCompleteItem(item, response, xhr.status, headers);
        });
        xhr.open(item.method, item.url, true);
        xhr.withCredentials = item.withCredentials;
        if (this.options.headers) {
            for (let header of this.options.headers) {
                xhr.setRequestHeader(header.name, header.value);
            }
        }
        if (item.headers.length) {
            for (let header of item.headers) {
                xhr.setRequestHeader(header.name, header.value);
            }
        }
        if (this.authToken) {
            xhr.setRequestHeader(this.authTokenHeader, this.authToken);
        }
        xhr.onreadystatechange = (/**
         * @return {?}
         */
        function () {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                that.response.emit(xhr.responseText);
            }
        });
        if (this.options.formatDataFunctionIsAsync) {
            sendable.then((/**
             * @param {?} result
             * @return {?}
             */
            (result) => xhr.send(JSON.stringify(result))));
        }
        else {
            xhr.send(sendable);
        }
        this._render();
    }
    /**
     * @protected
     * @param {?=} value
     * @return {?}
     */
    _getTotalProgress(value = 0) {
        if (this.options.removeAfterUpload) {
            return value;
        }
        /** @type {?} */
        let notUploaded = this.getNotUploadedItems().length;
        /** @type {?} */
        let uploaded = notUploaded ? this.queue.length - notUploaded : this.queue.length;
        /** @type {?} */
        let ratio = 100 / this.queue.length;
        /** @type {?} */
        let current = value * ratio / 100;
        return Math.round(uploaded * ratio + current);
    }
    /**
     * @protected
     * @param {?} filters
     * @return {?}
     */
    _getFilters(filters) {
        if (!filters) {
            return this.options.filters;
        }
        if (Array.isArray(filters)) {
            return filters;
        }
        if (typeof filters === 'string') {
            /** @type {?} */
            let names = filters.match(/[^\s,]+/g);
            return this.options.filters
                .filter((/**
             * @param {?} filter
             * @return {?}
             */
            (filter) => names.indexOf(filter.name) !== -1));
        }
        return this.options.filters;
    }
    /**
     * @protected
     * @return {?}
     */
    _render() {
        return void 0;
    }
    /**
     * @protected
     * @return {?}
     */
    _queueLimitFilter() {
        return this.options.queueLimit === undefined || this.queue.length < this.options.queueLimit;
    }
    /**
     * @protected
     * @param {?} file
     * @param {?} filters
     * @param {?} options
     * @return {?}
     */
    _isValidFile(file, filters, options) {
        this._failFilterIndex = -1;
        return !filters.length ? true : filters.every((/**
         * @param {?} filter
         * @return {?}
         */
        (filter) => {
            this._failFilterIndex++;
            return filter.fn.call(this, file, options);
        }));
    }
    /**
     * @protected
     * @param {?} status
     * @return {?}
     */
    _isSuccessCode(status) {
        return (status >= 200 && status < 300) || status === 304;
    }
    /**
     * @protected
     * @param {?} response
     * @param {?} headers
     * @return {?}
     */
    _transformResponse(response, headers) {
        return response;
    }
    /**
     * @protected
     * @param {?} headers
     * @return {?}
     */
    _parseHeaders(headers) {
        /** @type {?} */
        let parsed = {};
        /** @type {?} */
        let key;
        /** @type {?} */
        let val;
        /** @type {?} */
        let i;
        if (!headers) {
            return parsed;
        }
        headers.split('\n').map((/**
         * @param {?} line
         * @return {?}
         */
        (line) => {
            i = line.indexOf(':');
            key = line.slice(0, i).trim().toLowerCase();
            val = line.slice(i + 1).trim();
            if (key) {
                parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
            }
        }));
        return parsed;
    }
    /**
     * @protected
     * @param {?} item
     * @param {?} filter
     * @param {?} options
     * @return {?}
     */
    _onWhenAddingFileFailed(item, filter, options) {
        this.onWhenAddingFileFailed(item, filter, options);
    }
    /**
     * @protected
     * @param {?} item
     * @return {?}
     */
    _onAfterAddingFile(item) {
        this.onAfterAddingFile(item);
    }
    /**
     * @protected
     * @param {?} items
     * @return {?}
     */
    _onAfterAddingAll(items) {
        this.onAfterAddingAll(items);
    }
    /**
     * @protected
     * @param {?} item
     * @return {?}
     */
    _onBeforeUploadItem(item) {
        item._onBeforeUpload();
        this.onBeforeUploadItem(item);
    }
    /**
     * @protected
     * @param {?} item
     * @param {?} form
     * @return {?}
     */
    _onBuildItemForm(item, form) {
        item._onBuildForm(form);
        this.onBuildItemForm(item, form);
    }
    /**
     * @protected
     * @param {?} item
     * @param {?} progress
     * @return {?}
     */
    _onProgressItem(item, progress) {
        /** @type {?} */
        let total = this._getTotalProgress(progress);
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
    _onSuccessItem(item, response, status, headers) {
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
    _onCancelItem(item, response, status, headers) {
        item._onCancel(response, status, headers);
        this.onCancelItem(item, response, status, headers);
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FileSelectDirective {
    /**
     * @param {?} element
     */
    constructor(element) {
        this.onFileSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.element = element;
    }
    /**
     * @return {?}
     */
    getOptions() {
        return this.uploader.options;
    }
    /**
     * @return {?}
     */
    getFilters() {
        return {};
    }
    /**
     * @return {?}
     */
    isEmptyAfterSelection() {
        return !!this.element.nativeElement.attributes.multiple;
    }
    /**
     * @return {?}
     */
    onChange() {
        /** @type {?} */
        let files = this.element.nativeElement.files;
        /** @type {?} */
        let options = this.getOptions();
        /** @type {?} */
        let filters = this.getFilters();
        this.uploader.addToQueue(files, options, filters);
        this.onFileSelected.emit(files);
        if (this.isEmptyAfterSelection()) {
            this.element.nativeElement.value = '';
        }
    }
}
FileSelectDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ng2FileSelect]' },] }
];
/** @nocollapse */
FileSelectDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
FileSelectDirective.propDecorators = {
    uploader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    onFileSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['change',] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FileDropDirective {
    /**
     * @param {?} element
     */
    constructor(element) {
        this.fileOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onFileDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.element = element;
    }
    /**
     * @return {?}
     */
    getOptions() {
        return this.uploader.options;
    }
    /**
     * @return {?}
     */
    getFilters() {
        return {};
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDrop(event) {
        /** @type {?} */
        let transfer = this._getTransfer(event);
        if (!transfer) {
            return;
        }
        /** @type {?} */
        let options = this.getOptions();
        /** @type {?} */
        let filters = this.getFilters();
        this._preventAndStop(event);
        this.uploader.addToQueue(transfer.files, options, filters);
        this.fileOver.emit(false);
        this.onFileDrop.emit(transfer.files);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDragOver(event) {
        /** @type {?} */
        let transfer = this._getTransfer(event);
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
    onDragLeave(event) {
        if (((/** @type {?} */ (this))).element) {
            if (event.currentTarget === ((/** @type {?} */ (this))).element[0]) {
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
    _getTransfer(event) {
        return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer; // jQuery fix;
    }
    /**
     * @protected
     * @param {?} event
     * @return {?}
     */
    _preventAndStop(event) {
        event.preventDefault();
        event.stopPropagation();
    }
    /**
     * @protected
     * @param {?} types
     * @return {?}
     */
    _haveFiles(types) {
        if (!types) {
            return false;
        }
        if (types.indexOf) {
            return types.indexOf('Files') !== -1;
        }
        else if (types.contains) {
            return types.contains('Files');
        }
        else {
            return false;
        }
    }
}
FileDropDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ng2FileDrop]' },] }
];
/** @nocollapse */
FileDropDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
FileDropDirective.propDecorators = {
    uploader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    fileOver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onFileDrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onDrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['drop', ['$event'],] }],
    onDragOver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['dragover', ['$event'],] }],
    onDragLeave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['dragleave', ['$event'],] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FileUploadModule {
}
FileUploadModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                declarations: [FileDropDirective, FileSelectDirective],
                exports: [FileDropDirective, FileSelectDirective]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=ng2-file-upload.js.map


/***/ }),

/***/ "qJk7":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/comercial/clientes/cadastro/contatos/detalhes/detalhes.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ComercialClientesCadastroContatosDetalhesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialClientesCadastroContatosDetalhesComponent", function() { return ComercialClientesCadastroContatosDetalhesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_detalhes_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./detalhes.component.html */ "f7yW");
/* harmony import */ var _detalhes_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detalhes.component.scss */ "zUZ2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var ng_brazil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-brazil */ "hTrW");
/* harmony import */ var src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/modules/comercial/services/clientes.service */ "8ouN");
/* harmony import */ var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/modules/confirm-modal/confirm-modal.service */ "FOez");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");








// ng-brazil

// Services



let ComercialClientesCadastroContatosDetalhesComponent = class ComercialClientesCadastroContatosDetalhesComponent {
    constructor(activatedRoute, clientesService, confirmModalService, pnotifyService, location) {
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
    ngOnInit() {
        this.activatedRoute.parent.parent.params.subscribe((params) => {
            this.codCliente = params.id;
            this.getContatos();
        });
    }
    getContatos() {
        this.clientesService
            .getContatos(this.codCliente)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
            this.loaderFullScreen = false;
            this.contatosLoaded = true;
        }))
            .subscribe({
            next: (response) => {
                if (response.success === true) {
                    this.contatos = response.data;
                }
            },
            error: (error) => {
                this.pnotifyService.error();
                this.location.back();
            }
        });
    }
    tipoContato(contato) {
        let tipoContato = contato.nomeCompleto;
        if (contato.descFuncao != null) {
            if (contato.descSetor != null) {
                tipoContato = `${tipoContato} - ${contato.descFuncao} / ${contato.descSetor}`;
            }
            else {
                tipoContato = `${tipoContato} - ${contato.descFuncao}`;
            }
        }
        return `(${contato.contatos[0].tipo}) ${tipoContato}`.toUpperCase();
    }
    onDelete(contato) {
        let confirm$ = this.confirmModalService.showConfirm('delete', 'Confirmar exclusão', 'Deseja realmente prosseguir com a exclusão do contato?', 'Cancelar', 'Confirmar');
        confirm$
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])((result) => (result ? this.deleteContato(contato) : rxjs__WEBPACK_IMPORTED_MODULE_7__["EMPTY"])))
            .subscribe({
            next: (response) => {
                if (response.responseCode === 200) {
                    this.pnotifyService.success();
                    this.getContatos();
                }
                else if (response.responseCode === 206) {
                    this.handleOnDeleteError(response.message);
                }
                else {
                    this.handleOnDeleteError();
                }
            },
            error: (error) => {
                this.handleOnDeleteError('Erro ao excluir contato. Tente novamente!');
            }
        });
    }
    handleOnDeleteError(msg = null) {
        this.pnotifyService.error(msg);
        this.loaderFullScreen = false;
        this.contatosLoaded = true;
    }
    deleteContato(contato) {
        this.loaderFullScreen = true;
        this.contatosLoaded = false;
        return this.clientesService.deleteContato(this.codCliente, contato.id, contato.idSeqTid);
    }
};
ComercialClientesCadastroContatosDetalhesComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_9__["ComercialClientesService"] },
    { type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_10__["ConfirmModalService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }
];
ComercialClientesCadastroContatosDetalhesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-clientes-cadastro-contatos-detalhes',
        template: _raw_loader_detalhes_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detalhes_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_9__["ComercialClientesService"],
        src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_10__["ConfirmModalService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
], ComercialClientesCadastroContatosDetalhesComponent);



/***/ }),

/***/ "qjWA":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/comercial/clientes/cadastro/filial/detalhes/detalhes.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NsaWVudGVzL2NhZGFzdHJvL2ZpbGlhbC9kZXRhbGhlcy9kZXRhbGhlcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "rGHX":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/clientes/cadastro/filial/detalhes/detalhes.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<div class=\"row\" *ngIf=\"tipoEmpresaLoaded\">\r\n  <div class=\"col\">\r\n    <div class=\"mtc-title\">Filial</div>\r\n    <div *ngIf=\"tipoEmpresa == 'matriz'\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col\">\r\n          <label>Tipo de empresa</label>\r\n          <div>MATRIZ</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"tipoEmpresa == 'filial'\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label>Tipo de empresa</label>\r\n          <div>{{ filial.descTipo }}</div>\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label>Código da matriz</label>\r\n          <div>\r\n            <a [routerLink]=\"['/comercial/clientes/cadastro', filial.idMatriz, 'dados-faturamento']\" target=\"_blank\">{{ filial.idMatriz }}</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label>CNPJ da matriz</label>\r\n          <div>{{ filial.cnpjMatriz }}</div>\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label>Razão social da matriz</label>\r\n          <div>{{ filial.razaoSocialMatriz }}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row py-5 my-5\" *ngIf=\"tipoEmpresa == ''\">\r\n      <div class=\"col\">\r\n        <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "ruYJ":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/clientes/cadastro/enderecos/formulario/formulario-rules-resolver.guard.ts ***!
  \*************************************************************************************************************/
/*! exports provided: ComercialClientesCadastroEnderecosRulesResolverGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialClientesCadastroEnderecosRulesResolverGuard", function() { return ComercialClientesCadastroEnderecosRulesResolverGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_shared_services_core_form_rules_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/core/form-rules.service */ "WRpt");


// Services

let ComercialClientesCadastroEnderecosRulesResolverGuard = class ComercialClientesCadastroEnderecosRulesResolverGuard {
    constructor(formRulesService) {
        this.formRulesService = formRulesService;
    }
    resolve() {
        return this.formRulesService.getRules(2);
    }
};
ComercialClientesCadastroEnderecosRulesResolverGuard.ctorParameters = () => [
    { type: src_app_shared_services_core_form_rules_service__WEBPACK_IMPORTED_MODULE_2__["FormRulesService"] }
];
ComercialClientesCadastroEnderecosRulesResolverGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_core_form_rules_service__WEBPACK_IMPORTED_MODULE_2__["FormRulesService"]])
], ComercialClientesCadastroEnderecosRulesResolverGuard);



/***/ }),

/***/ "sPal":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/clientes/cadastro/informacoes-financeiras/detalhes/detalhes.component.html ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<div class=\"row\" *ngIf=\"infosFinanceirasLoaded\">\r\n  <div class=\"col\">\r\n    <div class=\"mtc-title\">Información financiera</div>\r\n    <ul class=\"list-group\" *ngIf=\"infosFinanceiras.length > 0\">\r\n      <li class=\"list-group-item\" *ngFor=\"let item of infosFinanceiras\">\r\n        <b>{{ item.descricao }}</b>\r\n      </li>\r\n    </ul>\r\n    <div class=\"row py-5 my-5\" *ngIf=\"infosFinanceiras.length == 0\">\r\n      <div class=\"col\">\r\n        <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "sveC":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/comercial/clientes/cadastro/filial/detalhes/detalhes.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ComercialClientesCadastroFilialDetalhesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialClientesCadastroFilialDetalhesComponent", function() { return ComercialClientesCadastroFilialDetalhesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_detalhes_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./detalhes.component.html */ "rGHX");
/* harmony import */ var _detalhes_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detalhes.component.scss */ "qjWA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modules/comercial/services/clientes.service */ "8ouN");






// Services

let ComercialClientesCadastroFilialDetalhesComponent = class ComercialClientesCadastroFilialDetalhesComponent {
    constructor(activatedRoute, clientesService) {
        this.activatedRoute = activatedRoute;
        this.clientesService = clientesService;
        this.loaderFullScreen = true;
        this.tipoEmpresa = '';
        this.tipoEmpresaLoaded = false;
        this.filiais = [];
        this.filial = {};
    }
    ngOnInit() {
        this.activatedRoute.parent.parent.params.subscribe(params => {
            this.clientesService
                .getFilial(params['id'])
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => {
                this.loaderFullScreen = false;
                this.tipoEmpresaLoaded = true;
            }))
                .subscribe((response) => {
                if (response['responseCode'] === 200) {
                    if (Object.keys(response['result']['matriz']).length > 0) {
                        this.tipoEmpresa = 'filial';
                        this.filial = response['result']['matriz'];
                    }
                    else if (Object.keys(response['result']['filial']).length > 0) {
                        this.tipoEmpresa = 'matriz';
                        this.filiais = response['result']['filial'];
                    }
                }
            });
        });
    }
};
ComercialClientesCadastroFilialDetalhesComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_6__["ComercialClientesService"] }
];
ComercialClientesCadastroFilialDetalhesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-clientes-cadastro-filial-detalhes',
        template: _raw_loader_detalhes_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detalhes_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_6__["ComercialClientesService"]])
], ComercialClientesCadastroFilialDetalhesComponent);



/***/ }),

/***/ "tMVO":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/comercial/clientes/cadastro/dados-faturamento/detalhes/detalhes.component.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NsaWVudGVzL2NhZGFzdHJvL2RhZG9zLWZhdHVyYW1lbnRvL2RldGFsaGVzL2RldGFsaGVzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "wDVn":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/clientes/cadastro/enderecos/formulario/formulario-data-resolver.guard.ts ***!
  \************************************************************************************************************/
/*! exports provided: ComercialClientesCadastroEnderecosResolverGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialClientesCadastroEnderecosResolverGuard", function() { return ComercialClientesCadastroEnderecosResolverGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/comercial/services/clientes.service */ "8ouN");



// Services

let ComercialClientesCadastroEnderecosResolverGuard = class ComercialClientesCadastroEnderecosResolverGuard {
    constructor(clienteService) {
        this.clienteService = clienteService;
    }
    resolve(route) {
        if (route.params &&
            route.parent.parent.params['id'] &&
            route.params['idEndereco'] &&
            route.params['idSituacao']) {
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
                        maximo: null,
                    },
                    terca: {
                        id: 2,
                        checked: 0,
                        minimo: null,
                        maximo: null,
                    },
                    quarta: {
                        id: 3,
                        checked: 0,
                        minimo: null,
                        maximo: null,
                    },
                    quinta: {
                        id: 4,
                        checked: 0,
                        minimo: null,
                        maximo: null,
                    },
                    sexta: {
                        id: 5,
                        checked: 0,
                        minimo: null,
                        maximo: null,
                    },
                    sabado: {
                        id: 6,
                        checked: 0,
                        minimo: null,
                        maximo: null,
                    },
                    domingo: {
                        id: 7,
                        checked: 0,
                        minimo: null,
                        maximo: null,
                    },
                },
                tiposVeiculos: [],
                dadosEspeciais: [],
            },
        });
    }
};
ComercialClientesCadastroEnderecosResolverGuard.ctorParameters = () => [
    { type: src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_3__["ComercialClientesService"] }
];
ComercialClientesCadastroEnderecosResolverGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_3__["ComercialClientesService"]])
], ComercialClientesCadastroEnderecosResolverGuard);



/***/ }),

/***/ "x71E":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/comercial/clientes/cadastro/dados-relacionamento/detalhes/detalhes.component.scss ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NsaWVudGVzL2NhZGFzdHJvL2RhZG9zLXJlbGFjaW9uYW1lbnRvL2RldGFsaGVzL2RldGFsaGVzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "yQw5":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/clientes/cadastro/dados-faturamento/formulario/formulario.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<div class=\"row\" *ngIf=\"!loaderFullScreen\">\r\n  <div class=\"col\">\r\n    <div class=\"mtc-title\">Editar datos de facturación</div>\r\n    <form [formGroup]=\"form\" autocomplete=\"off\" *ngIf=\"tipoPessoa == 'F'\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"cpf\">CPF</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"cpf\"\r\n            formControlName=\"cpf\"\r\n            (input)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('cpf') + ' ' + onFieldRequired('cpf')\"\r\n            cpf [textMask]=\"{ mask: MASKS.cpf.textMask }\">\r\n          <invalid-form-control [show]=\"onFieldInvalid('cpf') == 'required'\" message=\"CPF es obligatorio.\"></invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"rg\">RG</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"rg\"\r\n            formControlName=\"rg\"\r\n            (input)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('rg') + ' ' + onFieldRequired('rg')\">\r\n          <invalid-form-control [show]=\"onFieldInvalid('rg') == 'required'\" message=\"RG es obligatorio.\"></invalid-form-control>\r\n          <invalid-form-control [show]=\"onFieldInvalid('rg') == 'maxlength'\" [message]=\"maxLengthMessages.rg\"></invalid-form-control>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"nome\">Nombre</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"nome\"\r\n            formControlName=\"nome\"\r\n            (input)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('nome') + ' ' + onFieldRequired('nome')\">\r\n          <invalid-form-control [show]=\"onFieldInvalid('nome') == 'required'\" message=\"Nome es obligatorio.\"></invalid-form-control>\r\n          <invalid-form-control [show]=\"onFieldInvalid('nome') == 'maxlength'\" [message]=\"maxLengthMessages.nome\"></invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"nome\">Apellido</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"sobrenome\"\r\n            formControlName=\"sobrenome\"\r\n            (input)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('sobrenome') + ' ' + onFieldRequired('sobrenome')\">\r\n          <invalid-form-control [show]=\"onFieldInvalid('sobrenome') == 'required'\" message=\"Sobrenome es obligatorio.\"></invalid-form-control>\r\n          <invalid-form-control [show]=\"onFieldInvalid('sobrenome') == 'maxlength'\" [message]=\"maxLengthMessages.sobrenome\"></invalid-form-control>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"tipoCadastro\">Tipo de registro</label>\r\n          <select\r\n            class=\"form-control\"\r\n            id=\"tipoCadastro\"\r\n            formControlName=\"tipoCadastro\"\r\n            (change)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('tipoCadastro') + ' ' + onFieldRequired('tipoCadastro')\">\r\n            <option value=\"\">SELECCIONE UNA OPCIÓN</option>\r\n            <option *ngFor=\"let item of tiposCadastro\" [value]=\"item.id\">{{ item.descricao }}</option>\r\n          </select>\r\n          <invalid-form-control [show]=\"onFieldInvalid('tipoCadastro') == 'required'\" message=\"Tipo de cadastro es obligatorio.\"></invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"inscricaoProdRural\">Registro de productores rurales</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"inscricaoProdRural\"\r\n            formControlName=\"inscricaoProdRural\"\r\n            (input)=\"onInput(); onInscricaoProdutorRural();\">\r\n            <invalid-form-control [show]=\"onFieldInvalid('inscricaoProdRural') == 'maxlength'\" [message]=\"maxLengthMessages.inscricaoProdRural\"></invalid-form-control>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"contribuinte\">Contribuyente</label>\r\n          <select\r\n            class=\"form-control\"\r\n            id=\"contribuinte\"\r\n            formControlName=\"contribuinte\"\r\n            (change)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('contribuinte') + ' ' + onFieldRequired('contribuinte')\">\r\n            <option value=\"\">SELECCIONE UNA OPCIÓN</option>\r\n            <option *ngFor=\"let item of contribuintes\" [value]=\"item.id\">{{ item.descricao }}</option>\r\n          </select>\r\n          <invalid-form-control [show]=\"onFieldInvalid('contribuinte') == 'required'\" message=\"Contribuinte es obligatorio.\"></invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"setorAtividade\">Sector de actividad</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"false\"\r\n            [items]=\"setorAtividades\"\r\n            [virtualScroll]=\"true\"\r\n            labelForId=\"setorAtividade\"\r\n            bindLabel=\"descricao\"\r\n            bindValue=\"id\"\r\n            formControlName=\"setorAtividade\"\r\n            (input)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('setorAtividade') + ' ' + onFieldRequired('setorAtividade')\">\r\n          </ng-select>\r\n          <invalid-form-control [show]=\"onFieldInvalid('setorAtividade') == 'required'\" message=\"Setor de atividade es obligatorio.\"></invalid-form-control>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"limiteCredito\">Limite de crédito</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"limiteCredito\"\r\n            formControlName=\"limiteCredito\"\r\n            currencyMask [options]=\"{ align: 'left', prefix: 'R$ ', thousands: '.', decimal: ',' }\"\r\n            (input)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('limiteCredito') + ' ' + onFieldRequired('limiteCredito')\">\r\n          <invalid-form-control [show]=\"onFieldInvalid('limiteCredito') == 'required'\" message=\"Limite de crédito es obligatorio.\"></invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"creditoSeguradora\">Limite de crédito (aseguradora)</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"creditoSeguradora\"\r\n            formControlName=\"creditoSeguradora\"\r\n            currencyMask [options]=\"{ align: 'left', prefix: 'R$ ', thousands: '.', decimal: ',' }\"\r\n            (input)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('creditoSeguradora') + ' ' + onFieldRequired('creditoSeguradora')\">\r\n          <invalid-form-control [show]=\"onFieldInvalid('dataInclusao') == 'required'\" message=\"Limite de crédito (seguradora) es obligatorio.\"></invalid-form-control>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"dataInclusao\">Fecha de inclusión</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"dataInclusao\"\r\n            formControlName=\"dataInclusao\"\r\n            (input)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('dataInclusao') + ' ' + onFieldRequired('dataInclusao')\">\r\n          <invalid-form-control [show]=\"onFieldInvalid('dataInclusao') == 'required'\" message=\"Data de inclusão es obligatorio.\"></invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"proximaAnaliseCredito\">Próximo análisis de crédito en</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"proximaAnaliseCredito\"\r\n            formControlName=\"proximaAnaliseCredito\"\r\n            (input)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('proximaAnaliseCredito') + ' ' + onFieldRequired('proximaAnaliseCredito')\">\r\n          <invalid-form-control [show]=\"onFieldInvalid('proximaAnaliseCredito') == 'required'\" message=\"Próxima análise de crédito es obligatorio.\"></invalid-form-control>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"quemCadastrou\">Quien se registró</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"quemCadastrou\"\r\n            formControlName=\"quemCadastrou\"\r\n            (input)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('quemCadastrou') + ' ' + onFieldRequired('quemCadastrou')\">\r\n          <invalid-form-control [show]=\"onFieldInvalid('quemCadastrou') == 'required'\" message=\"Quien se registró es obligatorio.\"></invalid-form-control>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col\">\r\n          <div class=\"custom-control custom-checkbox\">\r\n            <input\r\n              type=\"checkbox\"\r\n              class=\"custom-control-input\"\r\n              id=\"somenteCarteira\"\r\n              formControlName=\"somenteCarteira\">\r\n            <label class=\"custom-control-label\" for=\"somenteCarteira\">Facturación solo de Cartera</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col\">\r\n          <div class=\"custom-control custom-checkbox\">\r\n            <input\r\n              type=\"checkbox\"\r\n              class=\"custom-control-input\"\r\n              id=\"boletoDescontado\"\r\n              formControlName=\"boletoDescontado\">\r\n            <label class=\"custom-control-label\" for=\"boletoDescontado\">No acepta boleto con descuento</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col\">\r\n          <div class=\"custom-control custom-checkbox\">\r\n            <input\r\n              type=\"checkbox\"\r\n              class=\"custom-control-input\"\r\n              id=\"somenteAVista\"\r\n              formControlName=\"somenteAVista\">\r\n            <label class=\"custom-control-label\" for=\"somenteAVista\">cliente solo efectivo</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col\">\r\n          <div class=\"custom-control custom-checkbox\">\r\n            <input\r\n              type=\"checkbox\"\r\n              class=\"custom-control-input\"\r\n              id=\"exigePesagem\"\r\n              formControlName=\"exigePesagem\">\r\n            <label class=\"custom-control-label\" for=\"exigePesagem\">Requiere pesaje</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n    <form [formGroup]=\"form\" autocomplete=\"off\" *ngIf=\"tipoPessoa == 'J'\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-2 offset-md-10\">\r\n          <label for=\"notaCliente\">Nota del cliente \r\n            <ng-template #tooltipLabelNotaClienteTemplate>\r\n              <p class=\"text-nowrap mb-0\">Nota del cliente </p>\r\n              <p class=\"text-nowrap mb-0\">de 1 a 5</p>\r\n            </ng-template>\r\n            <i class=\"far fa-question-circle\" [tooltip]=\"tooltipLabelNotaClienteTemplate\" container=\"body\"></i>\r\n          </label>\r\n          <input type=\"text\"\r\n          class=\"form-control\"\r\n          id=\"notaCliente\"\r\n          formControlName=\"notaCliente\"\r\n          (input)=\"onInput()\"\r\n          [ngClass]=\"onFieldError('notaCliente') + ' ' + onFieldRequired('notaCliente')\">\r\n          <invalid-form-control [show]=\"onFieldInvalid('notaCliente') == 'required'\" message=\"Nota del cliente es obligatorio.\"></invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group col-md-2 offset-md-10\">\r\n          <div class=\"custom-control custom-checkbox mt-auto\">\r\n            <input\r\n            type=\"checkbox\"\r\n            class=\"custom-control-input\"\r\n            id=\"auto-update-nota\"\r\n            formControlName=\"autoUpdateNota\">\r\n            <label\r\n              class=\"custom-control-label\"\r\n              for=\"auto-update-nota\">\r\n              Fixar nota\r\n              <ng-template #tooltipAutoUpdateNotaTemplate>\r\n                <p class=\"text-nowrap mb-0\">Ao marcar esse campo</p>\r\n                <p class=\"text-nowrap mb-0\">a nota não será atualizada</p>\r\n                <p class=\"text-nowrap mb-0\">automaticamente</p>\r\n              </ng-template>\r\n              <i class=\"far fa-question-circle\" [tooltip]=\"tooltipAutoUpdateNotaTemplate\" container=\"body\"></i>\r\n            </label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"cnpj\">CNPJ</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"cnpj\"\r\n            formControlName=\"cnpj\"\r\n            (input)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('cnpj') + ' ' + onFieldRequired('cnpj')\"\r\n            cnpj [textMask]=\"{ mask: MASKS.cnpj.textMask }\">\r\n          <invalid-form-control [show]=\"onFieldInvalid('cnpj') == 'required'\" message=\"CNPJ es obligatorio.\"></invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"razaoSocial\">Razon Social</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"razaoSocial\"\r\n            formControlName=\"razaoSocial\"\r\n            (input)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('razaoSocial') + ' ' + onFieldRequired('razaoSocial')\">\r\n          <invalid-form-control [show]=\"onFieldInvalid('razaoSocial') == 'required'\" message=\"Razon Social es obligatorio.\"></invalid-form-control>\r\n          <invalid-form-control [show]=\"onFieldInvalid('razaoSocial') == 'maxlength'\" [message]=\"maxLengthRules.razaoSocial\"></invalid-form-control>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"nomeFantasia\">Nombre de fantasia</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"nomeFantasia\"\r\n            formControlName=\"nomeFantasia\"\r\n            (input)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('nomeFantasia') + ' ' + onFieldRequired('nomeFantasia')\">\r\n          <invalid-form-control [show]=\"onFieldInvalid('nomeFantasia') == 'required'\" message=\"Nombre de fantasia es obligatorio.\"></invalid-form-control>\r\n          <invalid-form-control [show]=\"onFieldInvalid('nomeFantasia') == 'maxlength'\" [message]=\"maxLengthRules.nomeFantasia\"></invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"tipoCadastro\">Tipo de registro</label>\r\n          <select\r\n            class=\"form-control\"\r\n            id=\"tipoCadastro\"\r\n            formControlName=\"tipoCadastro\"\r\n            (change)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('tipoCadastro') + ' ' + onFieldRequired('tipoCadastro')\">\r\n            <option value=\"\">SELECCIONE UNA OPCIÓN</option>\r\n            <option *ngFor=\"let item of tiposCadastro\" [value]=\"item.id\">{{ item.descricao }}</option>\r\n          </select>\r\n          <invalid-form-control [show]=\"onFieldInvalid('tipoCadastro') == 'required'\" message=\"Tipo de registro es obligatorio.\"></invalid-form-control>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"tributacao\">Régimen fiscal</label>\r\n          <select\r\n            class=\"form-control\"\r\n            id=\"tributacao\"\r\n            formControlName=\"tributacao\"\r\n            (change)=\"onInput()\">\r\n            <option value=\"\">SELECCIONE UNA OPCIÓN</option>\r\n            <option *ngFor=\"let item of regimesTributacao\" [value]=\"item.id\">{{ item.descricao }}</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"contribuinte\">Contribuinte</label>\r\n          <select\r\n            class=\"form-control\"\r\n            id=\"contribuinte\"\r\n            formControlName=\"contribuinte\"\r\n            (change)=\"onInput(); checkValidatorsInscricaoEstadual(form.value['contribuinte']); onChangeContribuinte(form.value['contribuinte'])\"\r\n            [ngClass]=\"onFieldError('contribuinte') + ' ' + onFieldRequired('contribuinte')\">\r\n            <option value=\"\">SELECCIONE UNA OPCIÓN</option>\r\n            <option *ngFor=\"let item of contribuintes\" [value]=\"item.id\">{{ item.descricao }}</option>\r\n          </select>\r\n          <invalid-form-control [show]=\"onFieldInvalid('contribuinte') == 'required'\" message=\"Contribuinte es obligatorio.\"></invalid-form-control>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"inscricaoEstadual\">Inscripción Estatal</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"inscricaoEstadual\"\r\n            formControlName=\"inscricaoEstadual\"\r\n            (input)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('inscricaoEstadual') + ' ' + onFieldRequired('inscricaoEstadual')\">\r\n          <invalid-form-control [show]=\"onFieldInvalid('inscricaoEstadual') == 'required'\" message=\"Inscrição estadual es obligatorio.\"></invalid-form-control>\r\n          <invalid-form-control [show]=\"onFieldInvalid('inscricaoEstadual') == 'maxlength'\" [message]=\"maxLengthMessages.inscricaoEstadual\"></invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"setorAtividade\">Sector de actividad</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"false\"\r\n            [items]=\"setorAtividades\"\r\n            [virtualScroll]=\"true\"\r\n            labelForId=\"setorAtividade\"\r\n            bindLabel=\"descricao\"\r\n            bindValue=\"id\"\r\n            formControlName=\"setorAtividade\"\r\n            (input)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('setorAtividade') + ' ' + onFieldRequired('setorAtividade')\">\r\n          </ng-select>\r\n          <invalid-form-control [show]=\"onFieldInvalid('setorAtividade') == 'required'\" message=\"Setor de atividade es obligatorio.\"></invalid-form-control>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"finalidadeMaterial\">Finalidade do material</label>\r\n          <select\r\n            class=\"form-control\"\r\n            id=\"finalidadeMaterial\"\r\n            formControlName=\"finalidadeMaterial\"\r\n            (change)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('finalidadeMaterial') + ' ' + onFieldRequired('finalidadeMaterial')\">\r\n            <option value=\"\">SELECCIONE UNA OPCIÓN</option>\r\n            <option *ngFor=\"let item of finalidadesMaterial\" [value]=\"item.id\">{{ item.descricao }}</option>\r\n          </select>\r\n          <invalid-form-control [show]=\"onFieldInvalid('finalidadeMaterial') == 'required'\" message=\"Finalidade do material es obligatorio.\"></invalid-form-control>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col\">\r\n          <label for=\"cnae\">CNAE (atividade principal)</label>\r\n          <div class=\"form-row\">\r\n            <div class=\"col-11\">\r\n              <ng-select\r\n                [searchable]=\"true\"\r\n                [clearable]=\"false\"\r\n                [items]=\"cnaes\"\r\n                [virtualScroll]=\"true\"\r\n                labelForId=\"cnae\"\r\n                bindLabel=\"descricao\"\r\n                bindValue=\"id\"\r\n                formControlName=\"cnae\"\r\n                (input)=\"onInput()\">\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"col-1 pt-1 d-flex justify-content-center\">\r\n              <button\r\n                type=\"button\"\r\n                class=\"btn-icon-sm\"\r\n                tooltip=\"Atividades secundárias\"\r\n                container=\"body\"\r\n                (click)=\"onAtividadesSecundarias()\">\r\n                <i [ngClass]=\"{'fa-plus': !showAtividadesSecundarias, 'fa-minus': showAtividadesSecundarias}\" class=\"fas\"></i>\r\n              </button>\r\n            </div>\r\n          </div>\r\n          <invalid-form-control [show]=\"onFieldInvalid('cnae') == 'required'\" message=\"CNAE es obligatorio.\"></invalid-form-control>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"showAtividadesSecundarias\">\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col\">\r\n            <hr class=\"my-2\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col\">\r\n            <div class=\"form-row\">\r\n              <div class=\"col-11\">\r\n                <div class=\"mtc-title\">Actividades secundarias</div>\r\n                <ng-select\r\n                  [searchable]=\"true\"\r\n                  [clearable]=\"false\"\r\n                  [items]=\"cnaes\"\r\n                  [virtualScroll]=\"true\"\r\n                  labelForId=\"cnaeSecundario\"\r\n                  bindLabel=\"descricao\"\r\n                  bindValue=\"id\"\r\n                  [(ngModel)]=\"selectedAtividadeSecundaria\"\r\n                  [ngModelOptions]=\"{ standalone: true }\">\r\n                </ng-select>\r\n              </div>\r\n              <div class=\"col-1 pt-4 d-flex justify-content-center\">\r\n                <button\r\n                  type=\"button\"\r\n                  class=\"btn-icon-sm my-auto\"\r\n                  tooltip=\"Adicionar\"\r\n                  container=\"body\"\r\n                  [disabled]=\"selectedAtividadeSecundaria == null\"\r\n                  (click)=\"onAddAtividadeSecundaria()\">\r\n                  <i class=\"fas fa-check\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div formArrayName=\"atividadesSecundarias\">\r\n          <div *ngIf=\"atividadesSecundarias.controls.length > 0\">\r\n              <div class=\"form-row\" *ngFor=\"let item of atividadesSecundarias.controls; let i = index\" [formGroupName]=\"i\">\r\n              <div class=\"form-group col\">\r\n                <div class=\"form-row\">\r\n                  <div class=\"col my-auto\">\r\n                    {{ item.value['descCnae'] | uppercase }}\r\n                    <button\r\n                      type=\"button\"\r\n                      class=\"btn-icon-sm ml-3\"\r\n                      (click)=\"onDeleteAtividadeSecundaria(i)\">\r\n                      <i class=\"fas fa-trash\"></i>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col\">\r\n            <hr class=\"my-2\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"limiteCredito\">Limite de crédito</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"limiteCredito\"\r\n            formControlName=\"limiteCredito\"\r\n            currencyMask [options]=\"{ align: 'left', prefix: 'R$ ', thousands: '.', decimal: ',' }\"\r\n            (input)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('limiteCredito') + ' ' + onFieldRequired('limiteCredito')\">\r\n          <invalid-form-control [show]=\"onFieldInvalid('limiteCredito') == 'required'\" message=\"Limite de crédito es obligatorio.\"></invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"creditoSeguradora\">Limite de crédito (seguradora)</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"creditoSeguradora\"\r\n            formControlName=\"creditoSeguradora\"\r\n            currencyMask [options]=\"{ align: 'left', prefix: 'R$ ', thousands: '.', decimal: ',' }\"\r\n            (input)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('creditoSeguradora') + ' ' + onFieldRequired('creditoSeguradora')\">\r\n          <invalid-form-control [show]=\"onFieldInvalid('dataInclusao') == 'required'\" message=\"Limite de crédito (seguradora) es obligatorio.\"></invalid-form-control>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"dataInclusao\">Fecha de inclusión</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"dataInclusao\"\r\n            formControlName=\"dataInclusao\"\r\n            (input)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('dataInclusao') + ' ' + onFieldRequired('dataInclusao')\">\r\n          <invalid-form-control [show]=\"onFieldInvalid('dataInclusao') == 'required'\" message=\"Fecha de inclusión es obligatorio.\"></invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"proximaAnaliseCredito\">Próximo análisis de crédito en</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"proximaAnaliseCredito\"\r\n            formControlName=\"proximaAnaliseCredito\"\r\n            (input)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('proximaAnaliseCredito') + ' ' + onFieldRequired('proximaAnaliseCredito')\">\r\n          <invalid-form-control [show]=\"onFieldInvalid('proximaAnaliseCredito') == 'required'\" message=\"Próxima análise de crédito es obligatorio.\"></invalid-form-control>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"quemCadastrou\">Quien se registró</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"quemCadastrou\"\r\n            formControlName=\"quemCadastrou\"\r\n            (input)=\"onInput()\"\r\n            [ngClass]=\"onFieldError('quemCadastrou') + ' ' + onFieldRequired('quemCadastrou')\">\r\n          <invalid-form-control [show]=\"onFieldInvalid('quemCadastrou') == 'required'\" message=\"Quien se registró es obligatorio.\"></invalid-form-control>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col\">\r\n          <div class=\"custom-control custom-checkbox\">\r\n            <input\r\n              type=\"checkbox\"\r\n              class=\"custom-control-input\"\r\n              id=\"somenteCarteira\"\r\n              formControlName=\"somenteCarteira\">\r\n            <label class=\"custom-control-label\" for=\"somenteCarteira\">Facturación solo en cartera</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col\">\r\n          <div class=\"custom-control custom-checkbox\">\r\n            <input\r\n              type=\"checkbox\"\r\n              class=\"custom-control-input\"\r\n              id=\"boletoDescontado\"\r\n              formControlName=\"boletoDescontado\">\r\n            <label class=\"custom-control-label\" for=\"boletoDescontado\">No acepta boleto con descuento</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col\">\r\n          <div class=\"custom-control custom-checkbox\">\r\n            <input\r\n              type=\"checkbox\"\r\n              class=\"custom-control-input\"\r\n              id=\"somenteAVista\"\r\n              formControlName=\"somenteAVista\">\r\n            <label class=\"custom-control-label\" for=\"somenteAVista\">cliente solo efectivo</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col\">\r\n          <div class=\"custom-control custom-checkbox\">\r\n            <input\r\n              type=\"checkbox\"\r\n              class=\"custom-control-input\"\r\n              id=\"exigePesagem\"\r\n              formControlName=\"exigePesagem\">\r\n            <label class=\"custom-control-label\" for=\"exigePesagem\">Requiere pesaje</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col\">\r\n          <div class=\"custom-control custom-checkbox\">\r\n            <input\r\n              type=\"checkbox\"\r\n              class=\"custom-control-input\"\r\n              id=\"marca\"\r\n              formControlName=\"marca\">\r\n            <label class=\"custom-control-label\" for=\"marca\">Marca</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "zUZ2":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/comercial/clientes/cadastro/contatos/detalhes/detalhes.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NsaWVudGVzL2NhZGFzdHJvL2NvbnRhdG9zL2RldGFsaGVzL2RldGFsaGVzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=cadastro-cadastro-module-es2015.js.map