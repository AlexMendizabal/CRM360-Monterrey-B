(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["clientes-clientes-module"], {
    /***/
    "0Wpi":
    /*!************************************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/historico-financeiro/debitos/debitos.component.scss ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Wpi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NsaWVudGVzL2hpc3Rvcmljby1maW5hbmNlaXJvL2RlYml0b3MvZGViaXRvcy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "1JOV":
    /*!*****************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/detalhes/detalhes.component.scss ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function JOV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NsaWVudGVzL2RldGFsaGVzL2RldGFsaGVzLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "1XjU":
    /*!***************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/clientes/pre-cadastro/pre-cadastro.component.html ***!
      \***************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function XjU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<app-header appTitle=\"Pre-Registro\">\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onCancel()\"\r\n    [disabled]=\"submittingForm\">\r\n    Cancelar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onSubmit()\"\r\n    [disabled]=\"!form.valid || submittingForm\">\r\n    Salvar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-6\">\r\n      <form [formGroup]=\"form\" autocomplete=\"off\">\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col\">\r\n            <div class=\"btn-group btn-group-sm\">\r\n              <button\r\n                type=\"button\"\r\n                class=\"btn btn-light active\"\r\n                [ngClass]=\"{'active': tipoPessoa == 'F'}\"\r\n                (click)=\"setType('F')\">\r\n                <strong>Persona fisica</strong>\r\n              </button>\r\n              \r\n              <button\r\n              type=\"button\"\r\n              class=\"btn btn-light active\"\r\n              [ngClass]=\"{'active': tipoPessoa == 'J'}\"\r\n              (click)=\"setType('J')\">\r\n              <strong>persona Juridica</strong>\r\n            </button>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-6\" *ngIf=\"tipoPessoa == 'F'\">\r\n            <label for=\"cpf\"> CARNET DE IDENTIDAD </label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"cpf\"\r\n              formControlName=\"cpf\"\r\n              (input)=\"onInput()\"\r\n              [ngClass]=\"onFieldError('cpf') + ' ' + onFieldRequired('cpf')\">\r\n            <invalid-form-control [show]=\"onFieldInvalid('cpf') == 'required'\" message=\"Carnet inválido.\"></invalid-form-control>\r\n          </div>\r\n          <div class=\"form-group col-md-6\" *ngIf=\"tipoPessoa == 'J'\">\r\n            <label for=\"cnpj\">NIT</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"cnpj\"\r\n              formControlName=\"cnpj\"\r\n              (input)=\"onInput()\"\r\n              (blur)=\"validateCNPJ()\"\r\n              [ngClass]=\"onFieldError('cnpj') + ' ' + onFieldRequired('cnpj')\"\r\n            >\r\n            <invalid-form-control [show]=\"onFieldInvalid('cnpj') == 'required'\" message=\"NIT inválido.\"></invalid-form-control>\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"vendedor\">Atribuir vendedor</label>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"false\"\r\n              [items]=\"vendedores\"\r\n              [virtualScroll]=\"true\"\r\n              labelForId=\"vendedor\"\r\n              bindLabel=\"nome\"\r\n              bindValue=\"id\"\r\n              formControlName=\"vendedor\"\r\n              (change)=\"onInput()\">\r\n            </ng-select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-6\" *ngIf=\"tipoPessoa == 'F'\">\r\n            <label for=\"nome\">Nombre</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"nome\"\r\n              formControlName=\"nome\"\r\n              (input)=\"onInput()\"\r\n              [ngClass]=\"onFieldError('nome') + ' ' + onFieldRequired('nome')\">\r\n            <invalid-form-control [show]=\"onFieldInvalid('nome') == 'required'\" message=\"Nombre es obligatorio.\"></invalid-form-control>\r\n            <invalid-form-control [show]=\"onFieldInvalid('nome') == 'maxlength'\" [message]=\"maxLengthMessages.nome\"></invalid-form-control>\r\n          </div>\r\n          <div class=\"form-group col-md-6\" *ngIf=\"tipoPessoa == 'F'\">\r\n            <label for=\"sobrenome\">Apellido</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"sobrenome\"\r\n              formControlName=\"sobrenome\"\r\n              (input)=\"onInput()\"\r\n              [ngClass]=\"onFieldError('sobrenome') + ' ' + onFieldRequired('sobrenome')\">\r\n            <invalid-form-control [show]=\"onFieldInvalid('sobrenome') == 'required'\" message=\"Apellido es obligatorio.\"></invalid-form-control>\r\n            <invalid-form-control [show]=\"onFieldInvalid('sobrenome') == 'maxlength'\" [message]=\"maxLengthMessages.sobrenome\"></invalid-form-control>\r\n          </div>\r\n          <div class=\"form-group col-md-6\" *ngIf=\"tipoPessoa == 'J'\">\r\n            <label for=\"razaoSocial\">Razon social</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"razaoSocial\"\r\n              formControlName=\"razaoSocial\"\r\n              (input)=\"onInput()\"\r\n              [ngClass]=\"onFieldError('razaoSocial') + ' ' + onFieldRequired('razaoSocial')\">\r\n            <invalid-form-control [show]=\"onFieldInvalid('razaoSocial') == 'required'\" message=\"Razon social es obligatorio.\"></invalid-form-control>\r\n            <invalid-form-control [show]=\"onFieldInvalid('razaoSocial') == 'maxlength'\" [message]=\"maxLengthMessages.razaoSocial\"></invalid-form-control>\r\n          </div>\r\n          <div class=\"form-group col-md-6\" *ngIf=\"tipoPessoa == 'J'\">\r\n            <label for=\"nomeFantasia\">Nombre</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"nomeFantasia\"\r\n              formControlName=\"nomeFantasia\"\r\n              (input)=\"onInput()\"\r\n              [ngClass]=\"onFieldError('nomeFantasia') + ' ' + onFieldRequired('nomeFantasia')\">\r\n            <invalid-form-control [show]=\"onFieldInvalid('nomeFantasia') == 'required'\" message=\"Nombre es obligatorio.\"></invalid-form-control>\r\n            <invalid-form-control [show]=\"onFieldInvalid('nomeFantasia') == 'maxlength'\" [message]=\"maxLengthMessages.nomeFantasia\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\" *ngIf=\"tipoPessoa == 'J'\">\r\n          <div class=\"form-group col\">\r\n            <label for=\"cnae\">CNAE (Actividad Economica)</label>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"false\"\r\n              [items]=\"cnaes\"\r\n              [virtualScroll]=\"true\"\r\n              labelForId=\"cnae\"\r\n              bindLabel=\"descricao\"\r\n              bindValue=\"id\"\r\n              formControlName=\"cnae\"\r\n              (change)=\"onInput()\"\r\n              [ngClass]=\"onFieldError('cnae') + ' ' + onFieldRequired('cnae')\">\r\n            </ng-select>\r\n            <invalid-form-control [show]=\"onFieldInvalid('cnae') == 'required'\" message=\"CNAE es obligatorio.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"emailNfe\">E-mail NFE</label>\r\n            <input\r\n              type=\"email\"\r\n              class=\"form-control\"\r\n              id=\"emailNfe\"\r\n              formControlName=\"emailNfe\"\r\n              (input)=\"onInput()\"\r\n              [ngClass]=\"onFieldError('emailNfe') + ' ' + onFieldRequired('emailNfe')\">\r\n            <invalid-form-control [show]=\"onFieldInvalid('emailNfe') == 'required'\" message=\"E-mail NFE es obligatorio.\"></invalid-form-control>\r\n            <invalid-form-control [show]=\"onFieldInvalid('emailNfe') == 'maxlength'\" [message]=\"maxLengthMessages.emailNfe\"></invalid-form-control>\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"telefone\">Telefono</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"telefone\"\r\n              formControlName=\"telefone\"\r\n              (input)=\"onInput()\"\r\n              [ngClass]=\"onFieldError('telefone') + ' ' + onFieldRequired('telefone')\"\r\n            >\r\n            <invalid-form-control [show]=\"onFieldInvalid('telefone') == 'required'\" message=\"Telefono es obligatorio.\"></invalid-form-control>\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <!-- <label for=\"tipopessoa\">Tipo de persona</label> -->\r\n            <!-- <select class=\"form-control\" id=\"tipopessoa\" formControlName=\"tipopessoa\" (change)=\"onInput()\">\r\n              <option value=\"F\">Persona 1 </option>\r\n              <option value=\"J\">Persona 2 </option>\r\n              <option value=\"J\">Persona 3 </option>\r\n            </select> -->\r\n          </div>\r\n        </div>\r\n        \r\n        <!-- <div class=\"form-row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"emailMarketing\">E-mail Marketing</label>\r\n            <input\r\n              type=\"email\"\r\n              class=\"form-control\"\r\n              id=\"emailMarketing\"\r\n              formControlName=\"emailMarketing\"\r\n              (input)=\"onInput()\"\r\n              [ngClass]=\"onFieldError('emailMarketing') + ' ' + onFieldRequired('emailMarketing')\">\r\n            <invalid-form-control [show]=\"onFieldInvalid('emailMarketing') == 'maxlength'\" [message]=\"maxLengthMessages.emailMarketing\"></invalid-form-control>\r\n          </div>\r\n        </div> -->\r\n      </form>\r\n    </div>\r\n  </div>\r\n</app-body>\r\n\r\n<ng-template #modalDetalhesCliente>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Oops! Ese cliente ya esta registrado</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"onCloseDetails()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div class=\"form-row\">\r\n      <div class=\"col\">\r\n        <div class=\"mtc-title\">Datos de registro</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-row\">\r\n      <div class=\"form-group col\">\r\n        <label>Código</label>\r\n        <div *ngIf=\"dadosCliente.codCliente == null\">Sin informacion</div>\r\n        <div *ngIf=\"dadosCliente.codCliente != null\">{{ dadosCliente.codCliente }}</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-row\">\r\n      <div class=\"form-group col-lg-6\" *ngIf=\"dadosCliente.tipo == 'F'\">\r\n        <label>CPF</label>\r\n        <div *ngIf=\"dadosCliente.cpf == null\">Sin informacion</div>\r\n        <div *ngIf=\"dadosCliente.cpf != null\">{{ dadosCliente.cpf }}</div>\r\n      </div>\r\n      <div class=\"form-group col-lg-6\" *ngIf=\"dadosCliente.tipo == 'J'\">\r\n        <label>NIT</label>\r\n        <div *ngIf=\"dadosCliente.cnpj == null\">Sin informacion</div>\r\n        <div *ngIf=\"dadosCliente.cnpj != null\">{{ dadosCliente.cnpj }}</div>\r\n      </div>\r\n      <div class=\"form-group col-lg-6\">\r\n        <label>Nombre fantasia</label>\r\n        <div *ngIf=\"dadosCliente.nomeFantasia == null\">Sin informacion</div>\r\n        <div *ngIf=\"dadosCliente.nomeFantasia != null\">{{ dadosCliente.nomeFantasia }}</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-row\">\r\n      <div class=\"form-group col\">\r\n        <label>Razon social</label>\r\n        <div *ngIf=\"dadosCliente.razaoSocial == null\">Sin informacion</div>\r\n        <div *ngIf=\"dadosCliente.razaoSocial != null\">{{ dadosCliente.razaoSocial }}</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-row\">\r\n      <div class=\"form-group col\">\r\n        <label>Endereço</label>\r\n        <div *ngIf=\"dadosCliente.endereco == null\">Sin informacion</div>\r\n        <div *ngIf=\"dadosCliente.endereco != null\">{{ dadosCliente.endereco }}</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-row\">\r\n      <div class=\"form-group col-lg-6\">\r\n        <label>Bairro</label>\r\n        <div *ngIf=\"dadosCliente.bairro == null\">Sin informacion</div>\r\n        <div *ngIf=\"dadosCliente.bairro != null\">{{ dadosCliente.bairro }}</div>\r\n      </div>\r\n      <div class=\"form-group col-lg-6\">\r\n        <label>CEP</label>\r\n        <div *ngIf=\"dadosCliente.cep == null\">Sin informacion</div>\r\n        <div *ngIf=\"dadosCliente.cep != null\">{{ dadosCliente.cep }}</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-row\">\r\n      <div class=\"form-group col-lg-6\">\r\n        <label>Cidade</label>\r\n        <div *ngIf=\"dadosCliente.cidade == null\">Sin informacion</div>\r\n        <div *ngIf=\"dadosCliente.cidade != null\">{{ dadosCliente.cidade }}</div>\r\n      </div>\r\n      <div class=\"form-group col-lg-6\">\r\n        <label>Estado</label>\r\n        <div *ngIf=\"dadosCliente.uf == null\">Sin informacion</div>\r\n        <div *ngIf=\"dadosCliente.uf != null\">{{ dadosCliente.uf }}</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-row\">\r\n      <div class=\"form-group col\">\r\n        <label>Segurado</label>\r\n        <div *ngIf=\"dadosCliente.segurado != ''\">SI</div>\r\n        <div *ngIf=\"dadosCliente.segurado == ''\">NO</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-row\">\r\n      <div class=\"form-group col-lg-6\">\r\n        <label>Vendedor</label>\r\n        <div *ngIf=\"dadosCliente.vendedor == null\">Sin informacion</div>\r\n        <div *ngIf=\"dadosCliente.vendedor != null\">{{ dadosCliente.vendedor }}</div>\r\n      </div>\r\n      <div class=\"form-group col-lg-6\">\r\n        <label>Escritório</label>\r\n        <div *ngIf=\"dadosCliente.escritorio == null\">Sin informacion</div>\r\n        <div *ngIf=\"dadosCliente.escritorio != null\">{{ dadosCliente.escritorio }}</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-row\">\r\n      <div class=\"form-group col-lg-4\" *ngIf=\"dadosCliente.codSAP != '' && dadosCliente.codSAP != null\">\r\n        <label>Código DBA</label>\r\n        <div>{{ dadosCliente.codSAP }}</div>\r\n      </div>\r\n      <div class=\"form-group col-lg-4\" *ngIf=\"dadosCliente.escritorioDba != '' && dadosCliente.escritorioDba != null\">\r\n        <label>Sucursal</label>\r\n        <div>{{ dadosCliente.escritorioDba }}</div>\r\n      </div>\r\n      <div class=\"form-group col-lg-4\" *ngIf=\"dadosCliente.ultimaCompraDba != '' && dadosCliente.ultimaCompraDba != null\">\r\n        <label>Última compra</label>\r\n        <div>{{ dadosCliente.ultimaCompraDba }}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-light\" (click)=\"onCloseDetails()\">Fechar</button>\r\n    <button\r\n      type=\"button\"\r\n      class=\"btn btn-primary\"\r\n      (click)=\"onNavigateDetail()\">\r\n      Detalles\r\n    </button>\r\n  </div>\r\n</ng-template>\r\n";
      /***/
    },

    /***/
    "2JWa":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/clientes/detalhes/detalhes.component.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function JWa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<app-header appTitle=\"Detalles\"></app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <div class=\"row\">\r\n    <div class=\"col text-center\">\r\n      <h5 class=\"pt-2 mb-4\">{{ cliente.razaoSocial }}</h5>\r\n    </div>\r\n  </div>\r\n  <div class=\"row mb-4\">\r\n    <div class=\"col d-flex justify-content-center w-100\">\r\n      <h5 tooltip=\"Código do cliente\">\r\n        <span class=\"badge badge-dark\">CÓD.: {{ cliente.codCliente }}</span>\r\n      </h5>\r\n      <h5 *ngIf=\"cliente.nomeVendedor\" class=\"ml-3\" tooltip=\"Vendedor\">\r\n        <span class=\"badge badge-light\">{{ cliente.nomeVendedor | uppercase }}</span>\r\n      </h5>\r\n      <h5 class=\"ml-3\" tooltip=\"Status\">\r\n        <span class=\"badge\" [ngClass]=\"classStatusBadge(cliente.status)\">{{ cliente.status | uppercase }}</span>\r\n      </h5>\r\n      <h5 *ngIf=\"cliente.codClienteDBA\" class=\"ml-3\" tooltip=\"Código DBA do cliente\">\r\n        <span class=\"badge badge-warning\">CÓD. DBA: {{ cliente.codClienteDBA }}</span>\r\n      </h5>\r\n    </div>\r\n  </div>\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-lg-9\">\r\n      <div class=\"row justify-content-center\">\r\n        <!-- <div class=\"col-md-3\">\r\n          <card-button\r\n            icon=\"fas fa-folder-open\"\r\n            text=\"Datos de registro\"\r\n            [routerLink]=\"['../../cadastro', cliente.codCliente, 'dados-faturamento']\">\r\n          </card-button>\r\n        </div> -->\r\n         <!--div class=\"col-md-3\">\r\n          <card-button\r\n            icon=\"fas fa-chart-pie\"\r\n            text=\"Dashboard\"\r\n            [routerLink]=\"['../../dashboard', cliente.codCliente]\">\r\n          </card-button>\r\n        </div--> \r\n        <!-- <div class=\"col-md-3\">\r\n          <card-button\r\n            icon=\"fas fa-chart-bar\"\r\n            text=\"Histórico Financeiro\"\r\n            [routerLink]=\"['../../historico-financeiro', cliente.codCliente, 'resumo']\">\r\n          </card-button>\r\n        </div> -->\r\n        <!-- <div class=\"col-md-3\">\r\n          <card-button\r\n            icon=\"fas fa-handshake\"\r\n            text=\"Ficha PAC\"\r\n            [routerLink]=\"['../../proposta-analise-credito', cliente.codCliente]\">\r\n          </card-button>\r\n        </div>\r\n      </div> -->\r\n      <!-- <div class=\"row justify-content-center\">\r\n        <div class=\"col-md-3\">\r\n          <card-button\r\n            icon=\"fas fa-shopping-cart\"\r\n            text=\"Vender\"\r\n            [routerLink]=\"['../../../ciclo-vendas/139/cotacoes-pedidos/lista/']\"\r\n            [queryParams]=\"{codCliente: cliente.codCliente}\">\r\n          </card-button>\r\n        </div> -->\r\n        <div class=\"col-md-3\">\r\n          <card-button\r\n            icon=\"far fa-calendar-alt\"\r\n            text=\"Agendar\"\r\n            [routerLink]=\"['../../../agenda/novo', cliente.codCliente]\">\r\n          </card-button>\r\n        </div>\r\n        <!-- <div class=\"col-md-3\">\r\n          <card-button\r\n            icon=\"fas fa-tasks\"\r\n            text=\"Propuestas / Pedidos\"\r\n            [routerLink]=\"['../../../tid-software/11']\"\r\n            [queryParams]=\"{ codCliente: cliente.codCliente, sistema: 'vendas', modulo: 3 }\">\r\n          </card-button>\r\n        </div> -->\r\n        <!-- <div class=\"col-md-3\">\r\n          <card-button\r\n            icon=\"fas fa-list\"\r\n            text=\"Últimos precios\"\r\n            [routerLink]=\"['../../../clientes/ultimos-precos', cliente.codCliente]\">\r\n          </card-button>\r\n        </div> -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</app-body>\r\n";
      /***/
    },

    /***/
    "2x9x":
    /*!***************************************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/historico-financeiro/historico-financeiro.component.ts ***!
      \***************************************************************************************************/

    /*! exports provided: ComercialClientesHistoricoFinanceiroComponent */

    /***/
    function x9x(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialClientesHistoricoFinanceiroComponent", function () {
        return ComercialClientesHistoricoFinanceiroComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_historico_financeiro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./historico-financeiro.component.html */
      "MKDm");
      /* harmony import */


      var _historico_financeiro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./historico-financeiro.component.scss */
      "xqLP");
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


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _detalhes_detalhes_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./../detalhes/detalhes.service */
      "k2l4");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS"); // Services


      var ComercialClientesHistoricoFinanceiroComponent = /*#__PURE__*/function () {
        function ComercialClientesHistoricoFinanceiroComponent(router, activatedRoute, detalhesService, pnotifyService, location, atividadesService, titleService) {
          _classCallCheck(this, ComercialClientesHistoricoFinanceiroComponent);

          this.router = router;
          this.activatedRoute = activatedRoute;
          this.detalhesService = detalhesService;
          this.pnotifyService = pnotifyService;
          this.location = location;
          this.atividadesService = atividadesService;
          this.titleService = titleService;
          this.loaderFullScreen = true;
          this.breadCrumbTree = [];
          this.cliente = {};
          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialClientesHistoricoFinanceiroComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.activatedRoute.snapshot.data['response']['responseCode'] === 200) {
              this.registrarAcesso();
              this.getDetalhes();
            } else if (this.activatedRoute.snapshot.data['response']['responseCode'] === 403) {
              this.pnotifyService.notice('Este cliente no pertenece a su cartera');
              this.router.navigate(['/comercial/home']);
            } else {
              this.pnotifyService.error();
              this.location.back();
            }
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "getDetalhes",
          value: function getDetalhes() {
            var _this = this;

            this.activatedRoute.params.subscribe(function (params) {
              _this.detalhesService.getDetalhes(params['id']).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
                _this.loaderFullScreen = false;
              })).subscribe({
                next: function next(response) {
                  if (response['responseCode'] === 200) {
                    _this.cliente = response['result'];

                    _this.setBreadCrumb(params['id']);

                    _this.onRouterChange();
                  } else {
                    _this.handleLoadDependenciesError();
                  }
                },
                error: function error(_error) {
                  _this.handleLoadDependenciesError();
                }
              });
            });
          }
        }, {
          key: "handleLoadDependenciesError",
          value: function handleLoadDependenciesError() {
            this.pnotifyService.error();
            this.location.back();
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb(id) {
            var router = this.router.url.split('/');
            var currRoute = router[router.length - 1];
            this.breadCrumbTree = [{
              descricao: 'Home',
              routerLink: '/comercial/home'
            }, {
              descricao: 'Busqueda de clientes',
              routerLink: '/comercial/clientes/lista'
            }, {
              descricao: 'Detalhes',
              routerLink: "/comercial/clientes/detalhes/".concat(id)
            }, {
              descricao: 'Histórico financeiro',
              routerLink: "/comercial/clientes/historico-financeiro/".concat(id, "/resumo")
            }, {
              descricao: this.breadCrumbConfig(currRoute)
            }];
          }
        }, {
          key: "breadCrumbConfig",
          value: function breadCrumbConfig(route) {
            var descricao = '';

            if (route == 'resumo') {
              descricao = 'Resumo';
            } else if (route == 'detalhes') {
              descricao = 'Detalhes';
            } else if (route == 'acumulos-mensais') {
              descricao = 'Acúmulos mensais';
            } else if (route == 'notas-promissorias') {
              descricao = 'Notas promissórias';
            } else if (route == 'debitos') {
              descricao = 'Débitos em aberto';
            } else if (route == 'corte-dobra') {
              descricao = 'Corte Dobra';
            } else {
              descricao = 'Materiais da duplicata';
            }

            this.titleService.setTitle(descricao);
            return descricao;
          }
        }, {
          key: "onRouterChange",
          value: function onRouterChange() {
            var _this2 = this;

            this.router.events.subscribe(function (event) {
              _this2.activatedRoute.params.subscribe(function (params) {
                _this2.setBreadCrumb(params['id']);
              });
            });
          }
        }]);

        return ComercialClientesHistoricoFinanceiroComponent;
      }();

      ComercialClientesHistoricoFinanceiroComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _detalhes_detalhes_service__WEBPACK_IMPORTED_MODULE_8__["ComercialClientesDetalheService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_10__["TitleService"]
        }];
      };

      ComercialClientesHistoricoFinanceiroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-clientes-historico-financeiro',
        template: _raw_loader_historico_financeiro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_historico_financeiro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _detalhes_detalhes_service__WEBPACK_IMPORTED_MODULE_8__["ComercialClientesDetalheService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_10__["TitleService"]])], ComercialClientesHistoricoFinanceiroComponent);
      /***/
    },

    /***/
    "3oZO":
    /*!**********************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/historico-financeiro/materiais-duplicata/materiais-duplicata.component.ts ***!
      \**********************************************************************************************************************/

    /*! exports provided: ComercialClientesHistoricoFinanceiroMateriaisDuplicataComponent */

    /***/
    function oZO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialClientesHistoricoFinanceiroMateriaisDuplicataComponent", function () {
        return ComercialClientesHistoricoFinanceiroMateriaisDuplicataComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_materiais_duplicata_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./materiais-duplicata.component.html */
      "pW1C");
      /* harmony import */


      var _materiais_duplicata_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./materiais-duplicata.component.scss */
      "Q3m2");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _historico_financeiro_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../historico-financeiro.service */
      "THvH"); // Services


      var ComercialClientesHistoricoFinanceiroMateriaisDuplicataComponent = /*#__PURE__*/function () {
        function ComercialClientesHistoricoFinanceiroMateriaisDuplicataComponent(activatedRoute, historicoFinanceiroService) {
          _classCallCheck(this, ComercialClientesHistoricoFinanceiroMateriaisDuplicataComponent);

          this.activatedRoute = activatedRoute;
          this.historicoFinanceiroService = historicoFinanceiroService;
          this.principal = {};
          this.historicoCobrancas = {};
          this.ocorrenciasDuplicatas = {};
          this.ocorrenciasComerciais = {};
          this.duplicataLoaded = false;
        }

        _createClass(ComercialClientesHistoricoFinanceiroMateriaisDuplicataComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.activatedRoute.queryParams.subscribe(function (params) {
              _this3.historicoFinanceiroService.getMateriaisDuplicata(params).subscribe(function (response) {
                if (response['responseCode'] === 200) {
                  _this3.principal = response['result']['principal'];
                  _this3.historicoCobrancas = response['result']['historicoCobrancas'];
                  _this3.ocorrenciasDuplicatas = response['result']['ocorrenciasDuplicatas'];
                  _this3.ocorrenciasComerciais = response['result']['ocorrenciasComerciais'];
                }

                _this3.duplicataLoaded = true;
              });
            });
          }
        }]);

        return ComercialClientesHistoricoFinanceiroMateriaisDuplicataComponent;
      }();

      ComercialClientesHistoricoFinanceiroMateriaisDuplicataComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _historico_financeiro_service__WEBPACK_IMPORTED_MODULE_5__["ComercialClientesHistoricoFinanceiroService"]
        }];
      };

      ComercialClientesHistoricoFinanceiroMateriaisDuplicataComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-clientes-historico-financeiro-materiais-duplicata',
        template: _raw_loader_materiais_duplicata_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_materiais_duplicata_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _historico_financeiro_service__WEBPACK_IMPORTED_MODULE_5__["ComercialClientesHistoricoFinanceiroService"]])], ComercialClientesHistoricoFinanceiroMateriaisDuplicataComponent);
      /***/
    },

    /***/
    "41Ht":
    /*!************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/clientes/historico-financeiro/notas-promissorias/notas-promissorias.component.html ***!
      \************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Ht(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\r\n  <div class=\"col\">\r\n    <div class=\"d-flex w-100\" *ngIf=\"!notasPromissoriasLoaded\">\r\n      <div class=\"spinner-border spinner-border-sm text-dark my-auto mr-2\"></div>\r\n      <strong>Carga de pagarés...</strong>\r\n    </div>\r\n    <custom-table [config]=\"tableConfig\">\r\n      <ng-template #thead let-thead *ngIf=\"notasPromissorias.length > 0 && notasPromissoriasLoaded\">\r\n        <tr>\r\n          <th scope=\"col\" class=\"text-center\">Núm. Registro</th>\r\n          <th scope=\"col\" class=\"text-center\">Núm. Bancário</th>\r\n          <th scope=\"col\" class=\"text-center\">Baixa</th>\r\n          <th scope=\"col\" class=\"text-center\">Valor da baixa</th>\r\n          <th scope=\"col\" class=\"text-center\">Vencimento</th>\r\n          <th scope=\"col\" class=\"text-center\">Valor da duplicata</th>\r\n        </tr>\r\n      </ng-template>\r\n      <ng-template #tbody let-tbody>\r\n        <tr *ngFor=\"let nota of notasPromissorias\">\r\n          <td class=\"text-center\" [ngClass]=\"classStatusBorder(nota.situacao)\">{{ nota.numRegistro }}</td>\r\n          <td class=\"text-center\">{{ nota.numBancario }}</td>\r\n          <td class=\"text-center\">{{ nota.dataBaixa }}</td>\r\n          <td class=\"text-center\">{{ nota.valorBaixa | currency:'BRL':'symbol':'1.2-2' }}</td>\r\n          <td class=\"text-center\">{{ nota.dataVencimento }}</td>\r\n          <td class=\"text-center\">{{ nota.valorDuplicata | currency:'BRL':'symbol':'1.2-2' }}</td>\r\n        </tr>\r\n      </ng-template>\r\n    </custom-table>\r\n    <div class=\"row justify-content-center\" *ngIf=\"notasPromissorias.length > 0 && notasPromissoriasLoaded\">\r\n      <div class=\"col-6 d-flex justify-content-center w-100\">\r\n        <div class=\"d-flex justify-content-around\">\r\n          <div class=\"legend green\">\r\n            <div class=\"square\"></div>\r\n            <div class=\"text\">BAIXADA</div>\r\n          </div>\r\n          <div class=\"legend blue\">\r\n            <div class=\"square\"></div>\r\n            <div class=\"text\">QUITADA</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <empty-result\r\n      message=\"Nenhuma informação encontrada\"\r\n      *ngIf=\"notasPromissorias.length == 0 && notasPromissoriasLoaded\">\r\n    </empty-result>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "4WMF":
    /*!**********************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/historico-financeiro/notas-promissorias/notas-promissorias.component.scss ***!
      \**********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function WMF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NsaWVudGVzL2hpc3Rvcmljby1maW5hbmNlaXJvL25vdGFzLXByb21pc3Nvcmlhcy9ub3Rhcy1wcm9taXNzb3JpYXMuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "4kKV":
    /*!**********************************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/historico-financeiro/resumo/resumo.component.scss ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function kKV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NsaWVudGVzL2hpc3Rvcmljby1maW5hbmNlaXJvL3Jlc3Vtby9yZXN1bW8uY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "5oPb":
    /*!***********************************************************!*\
      !*** ./src/app/shared/services/core/functions.service.ts ***!
      \***********************************************************/

    /*! exports provided: FunctionsService */

    /***/
    function oPb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FunctionsService", function () {
        return FunctionsService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var FunctionsService = /*#__PURE__*/function () {
        function FunctionsService() {
          _classCallCheck(this, FunctionsService);
        }

        _createClass(FunctionsService, [{
          key: "completaZeroEsquerda",
          value: function completaZeroEsquerda(valor, tamanho) {
            if (valor === null) return null;
            valor = valor.toString();
            valor = valor.trim();

            if (valor.length < tamanho) {
              for (var i = valor.length; i < tamanho; i++) {
                valor = "0".concat(valor);
              }
            }

            return valor;
          }
        }]);

        return FunctionsService;
      }();

      FunctionsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], FunctionsService);
      /***/
    },

    /***/
    "6k2g":
    /*!****************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/clientes/historico-financeiro/detalhes/detalhes.component.html ***!
      \****************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function k2g(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\r\n  <div class=\"col\">\r\n    <div class=\"d-flex w-100\" *ngIf=\"!pedidosLoaded\">\r\n      <div class=\"spinner-border spinner-border-sm text-dark my-auto mr-2\"></div>\r\n      <strong>Carga de duplicados...</strong>\r\n    </div>\r\n    <div *ngIf=\"pedidos.length > 0 && pedidosLoaded\">\r\n      <div class=\"row justify-content-between\">\r\n        <div class=\"col-5\">\r\n          <div class=\"d-flex\">\r\n            <div class=\"legend green\">\r\n              <div class=\"square\"></div>\r\n              <div class=\"text\">ABIERTO</div>\r\n            </div>\r\n            <div class=\"legend blue\">\r\n              <div class=\"square\"></div>\r\n              <div class=\"text\">QUITADA</div>\r\n            </div>\r\n            <div class=\"legend yellow\">\r\n              <div class=\"square\"></div>\r\n              <div class=\"text\">VENCIDA</div>\r\n            </div>\r\n            <div class=\"legend red\">\r\n              <div class=\"square\"></div>\r\n              <div class=\"text\">PROTESTA</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-5\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"filtro\" class=\"col-2 text-right pb-0 pt-1 pr-2\">Filtrar</label>\r\n            <div class=\"col-10 pl-0\">\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control form-control-sm\"\r\n                id=\"filtro\"\r\n                placeholder=\"Número da duplicata\"\r\n                #filtro\r\n                (input)=\"onFilter(filtro.value)\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <custom-table [config]=\"tableConfig\">\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n            <th scope=\"col\" class=\"text-center\">Empresa</th>\r\n            <th scope=\"col\" class=\"text-center\">Facturamiento</th>\r\n            <th scope=\"col\" class=\"text-center\">Núm. pedido</th>\r\n            <th scope=\"col\" class=\"text-center\">Duplicar</th>\r\n            <th scope=\"col\" class=\"text-center\">Vencimiento</th>\r\n            <th scope=\"col\" class=\"text-center\">Banco</th>\r\n            <th scope=\"col\" class=\"text-center\">Baja</th>\r\n            <th scope=\"col\" class=\"text-center\">Tipo</th>\r\n            <th scope=\"col\" class=\"text-center\">Pré-datada</th>\r\n            <th scope=\"col\" class=\"text-center\">Atraso</th>\r\n            <th scope=\"col\" class=\"text-center\">Entrega</th>\r\n            <th scope=\"col\" class=\"text-center\">Valor</th>\r\n            <th scope=\"col\" class=\"text-center\"></th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let pedido of pedidosPagination\">\r\n            <td class=\"text-center\" [ngClass]=\"classStatusBorder(pedido.situacao)\">{{ pedido.empresa }}</td>\r\n            <td class=\"text-center\">{{ pedido.dataFaturamento }}</td>\r\n            <td class=\"text-center\">{{ pedido.numPedido }}</td>\r\n            <td class=\"text-center\">{{ pedido.numDuplicata }}</td>\r\n            <td class=\"text-center\">{{ pedido.dataVencimento }}</td>\r\n            <td class=\"text-center\">{{ pedido.banco }}</td>\r\n            <td class=\"text-center\">{{ pedido.dataBaixa }}</td>\r\n            <td class=\"text-center\">{{ pedido.tipoBaixa }}</td>\r\n            <td class=\"text-center\">{{ pedido.dataPreDatada }}</td>\r\n            <td class=\"text-center\">{{ pedido.atraso }} dias</td>\r\n            <td class=\"text-center\">{{ pedido.entrega }} dias</td>\r\n            <td class=\"text-center\">{{ pedido.valor | currency:'BRL':'symbol':'1.2-2' }}</td>\r\n            <td class=\"text-center\">\r\n              <a\r\n                class=\"btn-icon-sm\"\r\n                tooltip=\"Materiais da duplicata\"\r\n                container=\"body\"\r\n                [routerLink]=\"['../materiais-duplicata']\"\r\n                [queryParams]=\"{\r\n                  codEmpresa: pedido.idEmpresa,\r\n                  numPedido: pedido.numPedido,\r\n                  sequencia: pedido.sequencia\r\n                }\">\r\n                <i class=\"fas fa-search\"></i>\r\n              </a>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n      <div class=\"row\" *ngIf=\"pedidosLoaded\">\r\n        <div class=\"col\">\r\n          <div class=\"d-flex justify-content-center mt-3\" *ngIf=\"pedidosFiltered.length > itemsPerPage\">\r\n            <pagination\r\n              [maxSize]=\"maxSize\"\r\n              [totalItems]=\"pedidosFiltered.length\"\r\n              (pageChanged)=\"onPageChanged($event)\"\r\n              [(itemsPerPage)]=\"itemsPerPage\"\r\n              [boundaryLinks]=\"true\"\r\n              previousText=\"&lsaquo;\"\r\n              nextText=\"&rsaquo;\"\r\n              firstText=\"&laquo;\"\r\n              lastText=\"&raquo;\">\r\n            </pagination>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <empty-result message=\"Nenhuma informação encontrada\" *ngIf=\"pedidos.length == 0 && pedidosLoaded\"></empty-result>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "9Ny1":
    /*!************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/clientes/historico-financeiro/resumo/resumo.component.html ***!
      \************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Ny1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row mb-4\">\r\n  <div class=\"col mb-4\">\r\n    <div class=\"border rounded bg-white shadow-sm d-flex justify-content-between w-100 p-3\">\r\n      <div class=\"bg-orange rounded-circle text-white icon-40 my-auto\"><i class=\"fas fa-hand-holding-usd\"></i></div>\r\n      <div class=\"text-right\" [hidden]=\"!sinteticoPendenciasLoaded\">\r\n        <h5\r\n          class=\"font-weight-bolder mb-1\"\r\n          counto\r\n          [step]=\"30\"\r\n          [countTo]=\"sintetico.atrasoPagamento\"\r\n          [countFrom]=\"0\"\r\n          [duration]=\"3\"\r\n          (countoChange)=\"countoAtrasoPagamento = $event\">\r\n          {{ handleCounter(countoAtrasoPagamento) }} dias\r\n        </h5>\r\n        <div class=\"text-muted small font-weight-bold\">MÉDIA ATRASO PAGTO</div>\r\n      </div>\r\n      <div class=\"text-right my-auto\" *ngIf=\"!sinteticoPendenciasLoaded\">\r\n        <div class=\"spinner-border text-dark\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col\">\r\n    <div class=\"border rounded bg-white shadow-sm d-flex justify-content-between w-100 p-3\">\r\n      <div class=\"bg-gray rounded-circle text-white icon-40 my-auto\"><i class=\"fas fa-truck-moving\"></i></div>\r\n      <div class=\"text-right\" [hidden]=\"!sinteticoPendenciasLoaded\">\r\n        <h5\r\n          class=\"font-weight-bolder mb-1\"\r\n          counto\r\n          [step]=\"30\"\r\n          [countTo]=\"sintetico.tempoEntrega\"\r\n          [countFrom]=\"0\"\r\n          [duration]=\"3\"\r\n          (countoChange)=\"countoTempoEntrega = $event\">\r\n          {{ handleCounter(countoTempoEntrega) }} dias\r\n        </h5>\r\n        <div class=\"text-muted small font-weight-bold\">MÉDIA TEMPO ENTREGA</div>\r\n      </div>\r\n      <div class=\"text-right my-auto\" *ngIf=\"!sinteticoPendenciasLoaded\">\r\n        <div class=\"spinner-border text-dark\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col\">\r\n    <div class=\"border rounded bg-white shadow-sm d-flex justify-content-between w-100 p-3\">\r\n      <div class=\"bg-red rounded-circle text-white icon-40 my-auto\"><i class=\"fas fa-dollar-sign\"></i></div>\r\n      <div class=\"text-right\" [hidden]=\"!sinteticoPendenciasLoaded || sintetico.totalAtraso == 0\">\r\n        <h5\r\n          class=\"font-weight-bolder mb-1\"\r\n          counto\r\n          [step]=\"30\"\r\n          [countTo]=\"sintetico.totalAtraso\"\r\n          [countFrom]=\"0\"\r\n          [duration]=\"3\"\r\n          (countoChange)=\"countoTotalAtraso = $event\">\r\n          {{ countoTotalAtraso | currency:'BRL':'symbol':'1.2-2' }}\r\n        </h5>\r\n        <div class=\"text-muted small font-weight-bold\">TOTAL EM ATRASO</div>\r\n      </div>\r\n      <div class=\"text-right my-auto\" *ngIf=\"sinteticoPendenciasLoaded && sintetico.totalAtraso == 0\">\r\n        <h5 class=\"font-weight-bolder mb-1\">R$ 0,00</h5>\r\n        <div class=\"text-muted small font-weight-bold\">TOTAL EM ATRASO</div>\r\n      </div>\r\n      <div class=\"text-right my-auto\" *ngIf=\"!sinteticoPendenciasLoaded\">\r\n        <div class=\"spinner-border text-dark\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col\">\r\n    <div class=\"border rounded bg-white shadow-sm d-flex justify-content-between w-100 p-3\">\r\n      <div class=\"bg-green rounded-circle text-white icon-40 my-auto\"><i class=\"fas fa-file-invoice-dollar\"></i></div>\r\n      <div class=\"text-right\" [hidden]=\"!sinteticoPendenciasLoaded || sintetico.pagtoAntecipado == 0\">\r\n        <h5\r\n          class=\"font-weight-bolder mb-1\"\r\n          counto\r\n          [step]=\"30\"\r\n          [countTo]=\"sintetico.pagtoAntecipado\"\r\n          [countFrom]=\"0\"\r\n          [duration]=\"3\"\r\n          (countoChange)=\"countoPagtoAntecipado = $event\">\r\n          {{ countoPagtoAntecipado | currency:'BRL':'symbol':'1.2-2' }}\r\n        </h5>\r\n        <div class=\"text-muted small font-weight-bold\">ANTECIPADO DISPONÍVEL</div>\r\n      </div>\r\n      <div class=\"text-right my-auto\" *ngIf=\"sinteticoPendenciasLoaded && sintetico.pagtoAntecipado == 0\">\r\n        <h5 class=\"font-weight-bolder mb-1\">R$ 0,00</h5>\r\n        <div class=\"text-muted small font-weight-bold\">ANTECIPADO DISPONÍVEL</div>\r\n      </div>\r\n      <div class=\"text-right my-auto\" *ngIf=\"!sinteticoPendenciasLoaded\">\r\n        <div class=\"spinner-border text-dark\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col\">\r\n    <div class=\"border rounded bg-white shadow-sm d-flex justify-content-between w-100 p-3\">\r\n      <div class=\"bg-blue rounded-circle text-white icon-40 my-auto\"><i class=\"fas fa-building\"></i></div>\r\n      <div class=\"text-right\" [hidden]=\"!sinteticoPendenciasLoaded || sintetico.creditoSeguradora == 0\">\r\n        <h5\r\n          class=\"font-weight-bolder mb-1\"\r\n          counto\r\n          [step]=\"30\"\r\n          [countTo]=\"sintetico.creditoSeguradora\"\r\n          [countFrom]=\"0\"\r\n          [duration]=\"3\"\r\n          (countoChange)=\"countoCreditoSeguradora = $event\">\r\n          {{ countoCreditoSeguradora | currency:'BRL':'symbol':'1.2-2' }}\r\n        </h5>\r\n        <div class=\"text-muted small font-weight-bold\">CRÉDITO SEGURADORA</div>\r\n      </div>\r\n      <div class=\"text-right my-auto\" *ngIf=\"sinteticoPendenciasLoaded && sintetico.creditoSeguradora == 0\">\r\n        <h5 class=\"font-weight-bolder mb-1\">R$ 0,00</h5>\r\n        <div class=\"text-muted small font-weight-bold\">CRÉDITO SEGURADORA</div>\r\n      </div>\r\n      <div class=\"text-right my-auto\" *ngIf=\"!sinteticoPendenciasLoaded\">\r\n        <div class=\"spinner-border text-dark\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-md-8\">\r\n    <div class=\"d-flex w-100\" *ngIf=\"!pedidosLoaded\">\r\n      <div class=\"spinner-border spinner-border-sm text-dark my-auto mr-2\"></div>\r\n      <strong>Carregando duplicatas...</strong>\r\n    </div>\r\n    <div *ngIf=\"pedidos.length > 0 && pedidosLoaded\">\r\n      <div class=\"row justify-content-between\">\r\n        <div class=\"col-6 d-flex\">\r\n          <div class=\"d-flex my-auto\">\r\n            <div class=\"legend green\">\r\n              <div class=\"square\"></div>\r\n              <div class=\"text\">EM ABERTO</div>\r\n            </div>\r\n            <div class=\"legend blue\">\r\n              <div class=\"square\"></div>\r\n              <div class=\"text\">QUITADA</div>\r\n            </div>\r\n            <div class=\"legend yellow\">\r\n              <div class=\"square\"></div>\r\n              <div class=\"text\">VENCIDA</div>\r\n            </div>\r\n            <div class=\"legend red\">\r\n              <div class=\"square\"></div>\r\n              <div class=\"text\">PROTESTO</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-5\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"filtro\" class=\"col-3 text-right pb-0 pt-1 pr-2\">Filtrar</label>\r\n            <div class=\"col-9 pl-0\">\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control form-control-sm\"\r\n                id=\"filtro\"\r\n                placeholder=\"Número da duplicata\"\r\n                #filtro\r\n                (input)=\"onFilter(filtro.value)\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <custom-table [config]=\"tableConfig\">\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n            <th scope=\"col\" class=\"text-center\">Empresa</th>\r\n            <th scope=\"col\" class=\"text-center\">Faturamento</th>\r\n            <th scope=\"col\" class=\"text-center\">Núm. pedido</th>\r\n            <th scope=\"col\" class=\"text-center\">Duplicata</th>\r\n            <th scope=\"col\" class=\"text-center\">Vencto</th>\r\n            <th scope=\"col\" class=\"text-center\">Baixa</th>\r\n            <th scope=\"col\" class=\"text-center\">Valor</th>\r\n            <th scope=\"col\" class=\"text-center\"></th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let pedido of pedidosPagination\">\r\n            <td class=\"text-center\" [ngClass]=\"classStatusBorder(pedido.situacao)\">{{ pedido.empresa }}</td>\r\n            <td class=\"text-center\">{{ pedido.dataFaturamento }}</td>\r\n            <td class=\"text-center\">{{ pedido.numPedido }}</td>\r\n            <td class=\"text-center\">{{ pedido.numDuplicata }}</td>\r\n            <td class=\"text-center\">{{ pedido.dataVencimento }}</td>\r\n            <td class=\"text-center\">{{ pedido.dataBaixa }}</td>\r\n            <td class=\"text-center\">{{ pedido.valor | currency:'BRL':'symbol':'1.2-2' }}</td>\r\n            <td class=\"text-center\">\r\n              <a\r\n                class=\"btn-icon-sm\"\r\n                tooltip=\"Materiais da duplicata\"\r\n                container=\"body\"\r\n                [routerLink]=\"['../materiais-duplicata']\"\r\n                [queryParams]=\"{\r\n                  codEmpresa: pedido.idEmpresa,\r\n                  numPedido: pedido.numPedido,\r\n                  sequencia: pedido.sequencia\r\n                }\">\r\n                <i class=\"fas fa-search\"></i>\r\n              </a>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n      <div class=\"row mt-3\" *ngIf=\"pedidosLoaded\">\r\n        <div class=\"col\">\r\n          <div class=\"d-flex justify-content-center mt-3\" *ngIf=\"pedidosFiltered.length > itemsPerPage\">\r\n            <pagination\r\n              [maxSize]=\"maxSize\"\r\n              [totalItems]=\"pedidosFiltered.length\"\r\n              (pageChanged)=\"onPageChanged($event)\"\r\n              [(itemsPerPage)]=\"itemsPerPage\"\r\n              [boundaryLinks]=\"true\"\r\n              previousText=\"&lsaquo;\"\r\n              nextText=\"&rsaquo;\"\r\n              firstText=\"&laquo;\"\r\n              lastText=\"&raquo;\">\r\n            </pagination>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <empty-result message=\"Nenhuma informação encontrada nos últimos 12 meses. Para períodos anteriores veja em Detalhes.\" *ngIf=\"pedidos.length == 0 && pedidosLoaded\"></empty-result>\r\n  </div>\r\n  <div class=\"col-md-4\">\r\n    <div class=\"d-flex justify-content-between w-100 mb-2\">\r\n      <div>\r\n        <h6>\r\n          <span class=\"mr-2\">Grupo econômico</span>\r\n          <a\r\n            href=\"javascript:void(0)\"\r\n            *ngIf=\"grupoEconomicoLoaded && grupoEconomico.length > 1\"\r\n            (click)=\"onGrupoEconomico(modalGrupoEconomico)\">(ver detalhes)\r\n          </a>\r\n        </h6>\r\n        <small class=\"form-text text-muted\">VISÃO DO GRUPO ECONÔMICO NO HISTÓRICO FINANCEIRO</small>\r\n      </div>\r\n      <div class=\"custom-control custom-switch my-auto\" *ngIf=\"grupoEconomicoLoaded && grupoEconomico.length > 1\">\r\n        <input\r\n        type=\"checkbox\"\r\n        class=\"custom-control-input\"\r\n        id=\"grupoEconomico\"\r\n        [checked]=\"visaoGrupoEconomico\"\r\n        (change)=\"onChangeGrupoEconomico()\"\r\n        [disabled]=\"!sinteticoPendenciasLoaded\">\r\n        <label class=\"custom-control-label\" for=\"grupoEconomico\"></label>\r\n      </div>\r\n    </div>\r\n    <ul class=\"list-group\">\r\n      <li class=\"list-group-item bg-green\">\r\n        <div class=\"d-flex justify-content-between w-100\">\r\n          <div class=\"my-auto\">\r\n            <strong class=\"text-white\">Saldo para faturar</strong>\r\n          </div>\r\n          <strong\r\n            class=\"text-white\"\r\n            counto\r\n            [step]=\"30\"\r\n            [countTo]=\"pendencias.saldo\"\r\n            [countFrom]=\"0\"\r\n            [duration]=\"3\"\r\n            (countoChange)=\"countoSaldo = $event\"\r\n            [hidden]=\"pendencias.saldo == 0 || !sinteticoPendenciasLoaded\">\r\n            {{ countoSaldo | currency:'BRL':'symbol':'1.2-2' }}\r\n          </strong>\r\n          <strong class=\"text-white\" *ngIf=\"pendencias.saldo == 0 && sinteticoPendenciasLoaded\">R$ 0,00</strong>\r\n          <div class=\"spinner-border spinner-border-sm text-white\" *ngIf=\"!sinteticoPendenciasLoaded\"></div>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n    <h6 class=\"my-2\">\r\n      <a\r\n        href=\"javascript:void(0)\"\r\n        (click)=\"showPendenciasDetalhes = !showPendenciasDetalhes\">\r\n        <span *ngIf=\"!showPendenciasDetalhes\"><i class=\"fas fa-chevron-up\"></i> ver detalhes</span>\r\n        <span *ngIf=\"showPendenciasDetalhes\"><i class=\"fas fa-chevron-down\"></i> esconder detalhes</span>\r\n      </a>\r\n    </h6>\r\n    <ul class=\"list-group\" *ngIf=\"showPendenciasDetalhes\">\r\n      <li class=\"list-group-item\">\r\n        <div class=\"d-flex justify-content-between w-100\">\r\n          <div class=\"my-auto\">\r\n            <strong>Títulos em aberto</strong>\r\n          </div>\r\n          <strong\r\n            class=\"text-secondary\"\r\n            counto\r\n            [step]=\"30\"\r\n            [countTo]=\"pendencias.titulos\"\r\n            [countFrom]=\"0\"\r\n            [duration]=\"3\"\r\n            (countoChange)=\"countoTitulos = $event\"\r\n            [hidden]=\"pendencias.titulos == 0 || !sinteticoPendenciasLoaded\">\r\n            {{ countoTitulos | currency:'BRL':'symbol':'1.2-2' }}\r\n          </strong>\r\n          <strong class=\"text-secondary\" *ngIf=\"pendencias.titulos == 0 && sinteticoPendenciasLoaded\">R$ 0,00</strong>\r\n          <div class=\"spinner-border spinner-border-sm text-dark\" *ngIf=\"!sinteticoPendenciasLoaded\"></div>\r\n        </div>\r\n      </li>\r\n      <li class=\"list-group-item\">\r\n        <div class=\"d-flex justify-content-between w-100\">\r\n          <div class=\"my-auto\">\r\n            <strong>Notas de débitos em aberto</strong>\r\n          </div>\r\n          <strong\r\n            class=\"text-secondary\"\r\n            counto\r\n            [step]=\"30\"\r\n            [countTo]=\"pendencias.notasDebito\"\r\n            [countFrom]=\"0\"\r\n            [duration]=\"3\"\r\n            (countoChange)=\"countoNotasDebito = $event\"\r\n            [hidden]=\"pendencias.notasDebito == 0 || !sinteticoPendenciasLoaded\">\r\n            {{ countoNotasDebito | currency:'BRL':'symbol':'1.2-2' }}\r\n          </strong>\r\n          <strong class=\"text-secondary\" *ngIf=\"pendencias.notasDebito == 0 && sinteticoPendenciasLoaded\">R$ 0,00</strong>\r\n          <div class=\"spinner-border spinner-border-sm text-dark\" *ngIf=\"!sinteticoPendenciasLoaded\"></div>\r\n        </div>\r\n      </li>\r\n      <li class=\"list-group-item\">\r\n        <div class=\"d-flex justify-content-between w-100\">\r\n          <div class=\"my-auto\">\r\n            <strong>Notas promissórias em aberto</strong>\r\n          </div>\r\n          <strong\r\n            class=\"text-secondary\"\r\n            counto\r\n            [step]=\"30\"\r\n            [countTo]=\"pendencias.notasPromissorias\"\r\n            [countFrom]=\"0\"\r\n            [duration]=\"3\"\r\n            (countoChange)=\"countoNotasPromissorias = $event\"\r\n            [hidden]=\"pendencias.notasPromissorias == 0 || !sinteticoPendenciasLoaded\">\r\n            {{ countoNotasPromissorias | currency:'BRL':'symbol':'1.2-2' }}\r\n          </strong>\r\n          <strong class=\"text-secondary\" *ngIf=\"pendencias.notasPromissorias == 0 && sinteticoPendenciasLoaded\">R$ 0,00</strong>\r\n          <div class=\"spinner-border spinner-border-sm text-dark\" *ngIf=\"!sinteticoPendenciasLoaded\"></div>\r\n        </div>\r\n      </li>\r\n      <li class=\"list-group-item\">\r\n        <div class=\"d-flex justify-content-between w-100\">\r\n          <div class=\"my-auto\">\r\n            <strong>Cheques devolvidos</strong>\r\n          </div>\r\n          <strong\r\n            class=\"text-secondary\"\r\n            counto\r\n            [step]=\"30\"\r\n            [countTo]=\"pendencias.chequesDevolvidos\"\r\n            [countFrom]=\"0\"\r\n            [duration]=\"3\"\r\n            (countoChange)=\"countoChequesDevolvidos = $event\"\r\n            [hidden]=\"pendencias.chequesDevolvidos == 0 || !sinteticoPendenciasLoaded\">\r\n            {{ countoChequesDevolvidos | currency:'BRL':'symbol':'1.2-2' }}\r\n          </strong>\r\n          <strong class=\"text-secondary\" *ngIf=\"pendencias.chequesDevolvidos == 0 && sinteticoPendenciasLoaded\">R$ 0,00</strong>\r\n          <div class=\"spinner-border spinner-border-sm text-dark\" *ngIf=\"!sinteticoPendenciasLoaded\"></div>\r\n        </div>\r\n      </li>\r\n      <li class=\"list-group-item\">\r\n        <div class=\"d-flex justify-content-between w-100\">\r\n          <div class=\"my-auto\">\r\n            <strong>Corte dobra liberado p/ produção</strong>\r\n          </div>\r\n          <strong\r\n            class=\"text-secondary\"\r\n            counto\r\n            [step]=\"30\"\r\n            [countTo]=\"pendencias.corteDobra\"\r\n            [countFrom]=\"0\"\r\n            [duration]=\"3\"\r\n            (countoChange)=\"countoCorteDobra = $event\"\r\n            [hidden]=\"pendencias.corteDobra == 0 || !sinteticoPendenciasLoaded\">\r\n            {{ countoCorteDobra | currency:'BRL':'symbol':'1.2-2' }}\r\n          </strong>\r\n          <strong class=\"text-secondary\" *ngIf=\"pendencias.corteDobra == 0 && sinteticoPendenciasLoaded\">R$ 0,00</strong>\r\n          <div class=\"spinner-border spinner-border-sm text-dark\" *ngIf=\"!sinteticoPendenciasLoaded\"></div>\r\n        </div>\r\n      </li>\r\n      <li class=\"list-group-item\">\r\n        <div class=\"d-flex justify-content-between w-100\">\r\n          <div class=\"my-auto\">\r\n            <strong>Reserva de bobinas em aberto</strong>\r\n          </div>\r\n          <strong\r\n            class=\"text-secondary\"\r\n            counto\r\n            [step]=\"30\"\r\n            [countTo]=\"pendencias.reservaBobinas\"\r\n            [countFrom]=\"0\"\r\n            [duration]=\"3\"\r\n            (countoChange)=\"countoReservaBobinas = $event\"\r\n            [hidden]=\"pendencias.reservaBobinas == 0 || !sinteticoPendenciasLoaded\">\r\n            {{ countoReservaBobinas | currency:'BRL':'symbol':'1.2-2' }}\r\n          </strong>\r\n          <strong class=\"text-secondary\" *ngIf=\"pendencias.reservaBobinas == 0 && sinteticoPendenciasLoaded\">R$ 0,00</strong>\r\n          <div class=\"spinner-border spinner-border-sm text-dark\" *ngIf=\"!sinteticoPendenciasLoaded\"></div>\r\n        </div>\r\n      </li>\r\n      <li class=\"list-group-item\">\r\n        <div class=\"d-flex justify-content-between w-100\">\r\n          <div class=\"my-auto\">\r\n            <strong>Limite de crédito</strong>\r\n          </div>\r\n          <strong\r\n            class=\"text-secondary\"\r\n            counto\r\n            [step]=\"30\"\r\n            [countTo]=\"pendencias.limiteCredito\"\r\n            [countFrom]=\"0\"\r\n            [duration]=\"3\"\r\n            (countoChange)=\"countoLimiteCredito = $event\"\r\n            [hidden]=\"pendencias.limiteCredito == 0 || !sinteticoPendenciasLoaded\">\r\n            {{ countoLimiteCredito | currency:'BRL':'symbol':'1.2-2' }}\r\n          </strong>\r\n          <strong class=\"text-secondary\" *ngIf=\"pendencias.limiteCredito == 0 && sinteticoPendenciasLoaded\">R$ 0,00</strong>\r\n          <div class=\"spinner-border spinner-border-sm text-dark\" *ngIf=\"!sinteticoPendenciasLoaded\"></div>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #modalGrupoEconomico>\r\n  <div class=\"modal-header\">\r\n    <h5 class=\"modal-title\">Grupo econômico</h5>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"onCloseModalGrupoEconomico()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <custom-table>\r\n      <ng-template #thead let-thead>\r\n        <tr>\r\n          <th scope=\"col\" class=\"text-center\">Tipo</th>\r\n          <th scope=\"col\" class=\"text-center\">Cód. cliente</th>\r\n          <th scope=\"col\" class=\"text-center\">Razão social</th>\r\n          <th scope=\"col\" class=\"text-center\"></th>\r\n        </tr>\r\n      </ng-template>\r\n      <ng-template #tbody let-tbody>\r\n        <tr *ngFor=\"let item of grupoEconomico\">\r\n          <td class=\"text-center\">{{ item.tipo }}</td>\r\n          <td class=\"text-center\">{{ item.codCliente }}</td>\r\n          <td class=\"text-center\">{{ item.razaoSocial }}</td>\r\n          <td class=\"text-center\">\r\n            <a\r\n              class=\"btn-icon-sm\"\r\n              tooltip=\"Visualizar histórico financeiro\"\r\n              container=\"body\"\r\n              [routerLink]=\"['../../../historico-financeiro', item.codCliente, 'resumo']\"\r\n              (click)=\"onCloseModalGrupoEconomico()\">\r\n              <i class=\"fas fa-search\"></i>\r\n            </a>\r\n          </td>\r\n        </tr>\r\n      </ng-template>\r\n    </custom-table>\r\n  </div>\r\n</ng-template>\r\n";
      /***/
    },

    /***/
    "9WDr":
    /*!*********************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/pre-cadastro/pre-cadastro.service.ts ***!
      \*********************************************************************************/

    /*! exports provided: ComercialClientesPreCadastroService */

    /***/
    function WDr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialClientesPreCadastroService", function () {
        return ComercialClientesPreCadastroService;
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


      var _services_vendedores_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/vendedores.service */
      "4xRd");
      /* harmony import */


      var _cadastro_dados_faturamento_formulario_formulario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../cadastro/dados-faturamento/formulario/formulario.service */
      "qdc5");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW"); // Services


      var ComercialClientesPreCadastroService = /*#__PURE__*/function () {
        function ComercialClientesPreCadastroService(vendedoresService, dadosFaturamentoService, http) {
          _classCallCheck(this, ComercialClientesPreCadastroService);

          this.vendedoresService = vendedoresService;
          this.dadosFaturamentoService = dadosFaturamentoService;
          this.http = http;
          this.BASE_URL = "https://crm360.monterrey.com.bo/api";
        }

        _createClass(ComercialClientesPreCadastroService, [{
          key: "loadDependencies",
          value: function loadDependencies() {
            var vendedores = this.vendedoresService.getVendedores();
            var cnaes = this.dadosFaturamentoService.getCnaes();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])([vendedores, cnaes]);
          }
        }, {
          key: "postAkna",
          value: function postAkna(param) {
            return this.http.post("".concat(this.BASE_URL, "/comercial/integracoes/akna/log-email-boas-vindas"), param, {
              observe: 'response'
            });
          }
        }]);

        return ComercialClientesPreCadastroService;
      }();

      ComercialClientesPreCadastroService.ctorParameters = function () {
        return [{
          type: _services_vendedores_service__WEBPACK_IMPORTED_MODULE_3__["ComercialVendedoresService"]
        }, {
          type: _cadastro_dados_faturamento_formulario_formulario_service__WEBPACK_IMPORTED_MODULE_4__["ComercialClientesCadastroDadosFaturamentoFormularioService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }];
      };

      ComercialClientesPreCadastroService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_vendedores_service__WEBPACK_IMPORTED_MODULE_3__["ComercialVendedoresService"], _cadastro_dados_faturamento_formulario_formulario_service__WEBPACK_IMPORTED_MODULE_4__["ComercialClientesCadastroDadosFaturamentoFormularioService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])], ComercialClientesPreCadastroService);
      /***/
    },

    /***/
    "Apbh":
    /*!***********************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/clientes-routing.module.ts ***!
      \***********************************************************************/

    /*! exports provided: ComercialClientesRoutingModule */

    /***/
    function Apbh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialClientesRoutingModule", function () {
        return ComercialClientesRoutingModule;
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


      var _cadastro_dados_faturamento_formulario_formulario_rules_resolver_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./cadastro/dados-faturamento/formulario/formulario-rules-resolver.guard */
      "oH+a");
      /* harmony import */


      var _detalhes_detalhes_resolver_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./detalhes/detalhes-resolver.guard */
      "h7p3");
      /* harmony import */


      var _clientes_resolver_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./clientes-resolver.guard */
      "NJR3");
      /* harmony import */


      var _proposta_analise_credito_proposta_analise_credito_resolver_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./proposta-analise-credito/proposta-analise-credito-resolver.guard */
      "GIfP");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./lista/lista.component */
      "qh7L");
      /* harmony import */


      var _pre_cadastro_pre_cadastro_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./pre-cadastro/pre-cadastro.component */
      "cn9h");
      /* harmony import */


      var _detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./detalhes/detalhes.component */
      "w2Hl");
      /* harmony import */


      var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./dashboard/dashboard.component */
      "Kk6z");
      /* harmony import */


      var _proposta_analise_credito_proposta_analise_credito_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./proposta-analise-credito/proposta-analise-credito.component */
      "dWJH");
      /* harmony import */


      var _ultimos_precos_ultimos_precos_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./ultimos-precos/ultimos-precos.component */
      "BTJQ"); // Guards
      // Components


      var routes = [{
        path: 'lista',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_8__["ComercialClientesListaComponent"]
      }, {
        path: 'pre-cadastro',
        component: _pre_cadastro_pre_cadastro_component__WEBPACK_IMPORTED_MODULE_9__["ComercialClientesPreCadastroComponent"],
        resolve: {
          rules: _cadastro_dados_faturamento_formulario_formulario_rules_resolver_guard__WEBPACK_IMPORTED_MODULE_4__["ComercialClientesCadastroDadosFaturamentoRulesResolverGuard"]
        },
        canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]]
      }, {
        path: 'detalhes/:id',
        component: _detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_10__["ComercialClientesDetalhesComponent"],
        resolve: {
          response: _detalhes_detalhes_resolver_guard__WEBPACK_IMPORTED_MODULE_5__["ComercialClientesDetalhesResolverGuard"]
        }
      }, {
        path: 'cadastro',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | cadastro-cadastro-module */
          [__webpack_require__.e("common"), __webpack_require__.e("cadastro-cadastro-module")]).then(__webpack_require__.bind(null,
          /*! ./cadastro/cadastro.module */
          "1Ob8")).then(function (m) {
            return m.ComercialClientesCadastroModule;
          });
        }
      }, {
        path: 'dashboard/:id',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["ComercialClientesDashboardComponent"],
        resolve: {
          response: _clientes_resolver_guard__WEBPACK_IMPORTED_MODULE_6__["ComercialClientesResolverGuard"]
        }
      }, {
        path: 'historico-financeiro',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(null,
          /*! ./historico-financeiro/historico-financeiro.module */
          "HOaJ")).then(function (m) {
            return m.ComercialClientesHistoricoFinanceiroModule;
          });
        }
      }, {
        path: 'ultimos-precos/:id',
        component: _ultimos_precos_ultimos_precos_component__WEBPACK_IMPORTED_MODULE_13__["ComercialClientesUltimosPrecosComponent"]
      }, {
        path: 'proposta-analise-credito/:id',
        component: _proposta_analise_credito_proposta_analise_credito_component__WEBPACK_IMPORTED_MODULE_12__["ComercialClientesPropostaAnaliseCreditoComponent"],
        resolve: {
          data: _proposta_analise_credito_proposta_analise_credito_resolver_guard__WEBPACK_IMPORTED_MODULE_7__["ComercialClientesPropostaAnaliseCreditoResolverGuard"]
        },
        canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]]
      }, {
        path: '',
        redirectTo: 'lista',
        pathMatch: 'full'
      }, {
        path: '**',
        redirectTo: '/comercial/home',
        pathMatch: 'full'
      }];

      var ComercialClientesRoutingModule = /*#__PURE__*/_createClass(function ComercialClientesRoutingModule() {
        _classCallCheck(this, ComercialClientesRoutingModule);
      });

      ComercialClientesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ComercialClientesRoutingModule);
      /***/
    },

    /***/
    "BTJQ":
    /*!***************************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/ultimos-precos/ultimos-precos.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: ComercialClientesUltimosPrecosComponent */

    /***/
    function BTJQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialClientesUltimosPrecosComponent", function () {
        return ComercialClientesUltimosPrecosComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ultimos_precos_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ultimos-precos.component.html */
      "zgCi");
      /* harmony import */


      var _ultimos_precos_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ultimos-precos.component.scss */
      "ffmo");
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


      var _ultimos_precos_ultimos_precos_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../ultimos-precos/ultimos-precos.service */
      "S/fQ");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS");
      /* harmony import */


      var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! src/app/shared/modules/confirm-modal/confirm-modal.service */
      "FOez");
      /* harmony import */


      var src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! src/app/shared/templates/detail-panel/detal-panel.service */
      "gIxL");
      /* harmony import */


      var _comercial_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../comercial.service */
      "VgqD");

      Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_9__["defineLocale"])('pt-br', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_10__["ptBrLocale"]); // Services

      var ComercialClientesUltimosPrecosComponent = /*#__PURE__*/function () {
        function ComercialClientesUltimosPrecosComponent(localeService, activatedRoute, router, location, formBuilder, ultimosPrecos, pnotifyService, atividadesService, titleService, dateService, confirmModalService, detailPanelService, comercialService) {
          _classCallCheck(this, ComercialClientesUltimosPrecosComponent);

          this.localeService = localeService;
          this.activatedRoute = activatedRoute;
          this.router = router;
          this.location = location;
          this.formBuilder = formBuilder;
          this.ultimosPrecos = ultimosPrecos;
          this.pnotifyService = pnotifyService;
          this.atividadesService = atividadesService;
          this.titleService = titleService;
          this.dateService = dateService;
          this.confirmModalService = confirmModalService;
          this.detailPanelService = detailPanelService;
          this.comercialService = comercialService;
          this.loaderNavbar = false;
          this.loaderFullScreen = true;
          this.breadCrumbTree = [];
          this.showDetailPanel = false;
          this.maxSize = 10;
          this.itemsPerPage = 300;
          this.currentPage = 1;
          this.totalItems = 0;
          this.dados = [];
          this.dadosPagination = [];
          this.dadosLoaded = false;
          this.dadosEmpty = false;
          this.alteracoes = [];
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

        _createClass(ComercialClientesUltimosPrecosComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.activatedRoute.params.subscribe(function (params) {
              _this4.codCliente = params.id;
            });
            this.registrarAcesso();
            this.setFormFilter();
            this.setBreadCrumb(this.codCliente);
            this.titleService.setTitle('Ultimos Preços');
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "setFormFilter",
          value: function setFormFilter() {
            var formValue = this.checkRouterParams();
            this.form = this.formBuilder.group({
              dataInicial: [formValue.dataInicial, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
              dataFinal: [formValue.dataFinal, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]]
            });
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb(id) {
            this.breadCrumbTree = [{
              descricao: 'Home',
              routerLink: '/comercial/home'
            }, {
              descricao: 'Busqueda de clientes',
              routerLink: '/comercial/clientes/lista'
            }, {
              descricao: 'Detalhes',
              routerLink: "/comercial/clientes/detalhes/".concat(id)
            }, {
              descricao: 'Ultimos Preços'
            }];
          }
        }, {
          key: "checkRouterParams",
          value: function checkRouterParams() {
            var _this5 = this;

            var formValue = {
              dataInicial: this.dateService.getFirstDayMonth(),
              dataFinal: this.dateService.getLastDayMonth()
            };
            this.activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (queryParams) {
              if (Object.keys(queryParams).length > 0) {
                var params = atob(queryParams['q']);
                params = JSON.parse(params);

                _this5.search(params);

                Object.keys(formValue).forEach(function (formKey) {
                  Object.keys(params).forEach(function (paramKey) {
                    if (formKey == paramKey && formValue[formKey] != params[paramKey]) {
                      if (formKey === 'dataInicial' || formKey === 'dataFinal') {
                        formValue[formKey] = _this5.dateService.convertStringToDate(params[paramKey], 'pt-br');
                      } else {
                        if (!isNaN(Number(params[paramKey]))) {
                          formValue[formKey] = Number(params[paramKey]);
                        } else {
                          formValue[formKey] = params[paramKey];
                        }
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

            if (field.errors != null) {
              if (field.errors.hasOwnProperty('required') && field.touched) {
                return 'required';
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
          key: "onFilter",
          value: function onFilter() {
            if (this.form.valid) {
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

            if (this.form.value.dataInicial) {
              params.dataInicial = this.dateService.convertToUrlDate(new Date(this.form.value.dataInicial));
            }

            if (this.form.value.dataFinal) {
              params.dataFinal = this.dateService.convertToUrlDate(new Date(this.form.value.dataFinal));
            }

            return params;
          }
        }, {
          key: "search",
          value: function search(params) {
            var _this6 = this;

            this.loaderNavbar = true;
            this.dados = [];
            this.dadosPagination = [];
            this.dadosLoaded = false;
            this.dadosEmpty = false;
            this.detailPanelService.hide();
            params.codCliente = this.codCliente;
            this.ultimosPrecos.getListaUltimosPrecos(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this6.loaderNavbar = false;
              _this6.dadosLoaded = true;
            })).subscribe({
              next: function next(response) {
                if (response.hasOwnProperty('success') && response.success === true) {
                  _this6.dados = response.data;
                  _this6.dadosPagination = _this6.dados.slice(0, _this6.itemsPerPage);
                  _this6.totalItems = _this6.dados.length;
                  _this6.dadosLoaded = true;
                } else if (response.hasOwnProperty('success') && response.success === false) {
                  _this6.dadosEmpty = true;
                } else {
                  _this6.pnotifyService.error();

                  _this6.dadosEmpty = true;
                }
              },
              error: function error(_error2) {
                _this6.dadosEmpty = true;

                if (_error2.error.hasOwnProperty('mensagem')) {
                  _this6.pnotifyService.error(_error2.error.mensagem);
                } else {
                  _this6.pnotifyService.error();
                }
              }
            });
          }
        }]);

        return ComercialClientesUltimosPrecosComponent;
      }();

      ComercialClientesUltimosPrecosComponent.ctorParameters = function () {
        return [{
          type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsLocaleService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }, {
          type: _ultimos_precos_ultimos_precos_service__WEBPACK_IMPORTED_MODULE_11__["ComercialClientesUltimosPrecosService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__["PNotifyService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_13__["AtividadesService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_14__["TitleService"]
        }, {
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_15__["DateService"]
        }, {
          type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_16__["ConfirmModalService"]
        }, {
          type: src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_17__["DetailPanelService"]
        }, {
          type: _comercial_service__WEBPACK_IMPORTED_MODULE_18__["ComercialService"]
        }];
      };

      ComercialClientesUltimosPrecosComponent.propDecorators = {
        scrollToFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['scrollToFilter', {}]
        }]
      };
      ComercialClientesUltimosPrecosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'ultimos-precos',
        template: _raw_loader_ultimos_precos_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ultimos_precos_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsLocaleService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _ultimos_precos_ultimos_precos_service__WEBPACK_IMPORTED_MODULE_11__["ComercialClientesUltimosPrecosService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__["PNotifyService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_13__["AtividadesService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_14__["TitleService"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_15__["DateService"], src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_16__["ConfirmModalService"], src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_17__["DetailPanelService"], _comercial_service__WEBPACK_IMPORTED_MODULE_18__["ComercialService"]])], ComercialClientesUltimosPrecosComponent);
      /***/
    },

    /***/
    "EB1+":
    /*!**************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/clientes/historico-financeiro/debitos/debitos.component.html ***!
      \**************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function EB1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\r\n  <div class=\"col\">\r\n    <div class=\"d-flex w-100\" *ngIf=\"!debitosLoaded\">\r\n      <div class=\"spinner-border spinner-border-sm text-dark my-auto mr-2\"></div>\r\n      <strong>Carga de débitos pendientes...</strong>\r\n    </div>\r\n    <custom-table *ngIf=\"debitos.length > 0 && debitosLoaded\">\r\n      <ng-template #thead let-thead>\r\n        <tr>\r\n          <th scope=\"col\" class=\"text-center\">Data Pedido</th>\r\n          <th scope=\"col\" class=\"text-center\">Núm. Pedido</th>\r\n          <th scope=\"col\" class=\"text-center\">Núm. Duplicata</th>\r\n          <th scope=\"col\" class=\"text-center\">Valor Duplicata</th>\r\n          <th scope=\"col\" class=\"text-center\">Juros</th>\r\n          <th scope=\"col\" class=\"text-center\">Valor Cartório</th>\r\n          <th scope=\"col\" class=\"text-center\">Tarifa</th>\r\n          <th scope=\"col\" class=\"text-center\">Data Tarifa</th>\r\n          <th scope=\"col\" class=\"text-center\">Valor Tarifa</th>\r\n        </tr>\r\n      </ng-template>\r\n      <ng-template #tbody let-tbody>\r\n        <tr *ngFor=\"let debito of debitos\">\r\n          <td class=\"text-center\" [ngClass]=\"classStatusBorder(debito.situacao)\">{{ debito.dataPedido }}</td>\r\n          <td class=\"text-center\">{{ debito.numPedido }}</td>\r\n          <td class=\"text-center\">{{ debito.numDuplicata }}</td>\r\n          <td class=\"text-center\">{{ debito.valorDuplicata | currency:'BRL':'symbol':'1.2-2' }}</td>\r\n          <td class=\"text-center\">{{ debito.juros }}</td>\r\n          <td class=\"text-center\">{{ debito.valorCartorio | currency:'BRL':'symbol':'1.2-2' }}</td>\r\n          <td class=\"text-center\">{{ debito.tarifa }}</td>\r\n          <td class=\"text-center\">{{ debito.dataTarifa }}</td>\r\n          <td class=\"text-center\">{{ debito.valorTarifa | currency:'BRL':'symbol':'1.2-2' }}</td>\r\n        </tr>\r\n      </ng-template>\r\n    </custom-table>\r\n    <empty-result\r\n      message=\"Nenhuma informação encontrada\"\r\n      *ngIf=\"debitos.length == 0 && debitosLoaded\">\r\n    </empty-result>\r\n    <div class=\"row justify-content-center\" *ngIf=\"debitos.length > 0 && debitosLoaded\">\r\n      <div class=\"col-6 d-flex justify-content-center w-100\">\r\n        <div class=\"d-flex justify-content-around\">\r\n          <div class=\"legend green\">\r\n            <div class=\"square\"></div>\r\n            <div class=\"text\">DÉBITO CON NOTA</div>\r\n          </div>\r\n          <div class=\"legend blue\">\r\n            <div class=\"square\"></div>\r\n            <div class=\"text\">DÉBITO CON NOTA</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
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
    "GH03":
    /*!*************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/proposta-analise-credito/proposta-analise-credito.component.scss ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function GH03(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NsaWVudGVzL3Byb3Bvc3RhLWFuYWxpc2UtY3JlZGl0by9wcm9wb3N0YS1hbmFsaXNlLWNyZWRpdG8uY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "GIfP":
    /*!****************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/proposta-analise-credito/proposta-analise-credito-resolver.guard.ts ***!
      \****************************************************************************************************************/

    /*! exports provided: ComercialClientesPropostaAnaliseCreditoResolverGuard */

    /***/
    function GIfP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialClientesPropostaAnaliseCreditoResolverGuard", function () {
        return ComercialClientesPropostaAnaliseCreditoResolverGuard;
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


      var ComercialClientesPropostaAnaliseCreditoResolverGuard = /*#__PURE__*/function () {
        function ComercialClientesPropostaAnaliseCreditoResolverGuard(clienteService) {
          _classCallCheck(this, ComercialClientesPropostaAnaliseCreditoResolverGuard);

          this.clienteService = clienteService;
        }

        _createClass(ComercialClientesPropostaAnaliseCreditoResolverGuard, [{
          key: "resolve",
          value: function resolve(route) {
            if (route.params && route.params['id']) {
              return this.clienteService.getPropostaAnaliseCredito(route.params['id']);
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
              result: {
                razaoSocial: null,
                codCliente: null,
                codSAP: null,
                limiteCredito: null,
                setorAtividade: null,
                nomeVendedor: null,
                telefoneVendedor: null,
                nomeEscritorio: null
              }
            });
          }
        }]);

        return ComercialClientesPropostaAnaliseCreditoResolverGuard;
      }();

      ComercialClientesPropostaAnaliseCreditoResolverGuard.ctorParameters = function () {
        return [{
          type: src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_3__["ComercialClientesService"]
        }];
      };

      ComercialClientesPropostaAnaliseCreditoResolverGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_3__["ComercialClientesService"]])], ComercialClientesPropostaAnaliseCreditoResolverGuard);
      /***/
    },

    /***/
    "HOaJ":
    /*!************************************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/historico-financeiro/historico-financeiro.module.ts ***!
      \************************************************************************************************/

    /*! exports provided: ComercialClientesHistoricoFinanceiroModule */

    /***/
    function HOaJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialClientesHistoricoFinanceiroModule", function () {
        return ComercialClientesHistoricoFinanceiroModule;
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


      var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-bootstrap/tooltip */
      "978R");
      /* harmony import */


      var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-bootstrap/pagination */
      "6No5");
      /* harmony import */


      var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-bootstrap/tabs */
      "2ZVE");
      /* harmony import */


      var ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-filter-pipe */
      "4muW");
      /* harmony import */


      var angular2_counto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! angular2-counto */
      "RNH4");
      /* harmony import */


      var angular2_counto__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angular2_counto__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var _historico_financeiro_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./historico-financeiro-routing.module */
      "iRVN");
      /* harmony import */


      var _historico_financeiro_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./historico-financeiro.component */
      "2x9x");
      /* harmony import */


      var _resumo_resumo_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./resumo/resumo.component */
      "ezd9");
      /* harmony import */


      var _detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./detalhes/detalhes.component */
      "HUfV");
      /* harmony import */


      var _materiais_duplicata_materiais_duplicata_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./materiais-duplicata/materiais-duplicata.component */
      "3oZO");
      /* harmony import */


      var _acumulos_mensais_acumulos_mensais_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./acumulos-mensais/acumulos-mensais.component */
      "VgR1");
      /* harmony import */


      var _notas_promissorias_notas_promissorias_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./notas-promissorias/notas-promissorias.component */
      "wdkM");
      /* harmony import */


      var _debitos_debitos_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./debitos/debitos.component */
      "VAxy");
      /* harmony import */


      var _corte_dobra_corte_dobra_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./corte-dobra/corte-dobra.component */
      "QZWA"); // ngx-bootstrap
      // ngx-filter-pipe
      // Counto
      // Modules
      // Components


      var ComercialClientesHistoricoFinanceiroModule = /*#__PURE__*/_createClass(function ComercialClientesHistoricoFinanceiroModule() {
        _classCallCheck(this, ComercialClientesHistoricoFinanceiroModule);
      });

      ComercialClientesHistoricoFinanceiroModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_historico_financeiro_component__WEBPACK_IMPORTED_MODULE_11__["ComercialClientesHistoricoFinanceiroComponent"], _resumo_resumo_component__WEBPACK_IMPORTED_MODULE_12__["ComercialClientesHistoricoFinanceiroResumoComponent"], _detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_13__["ComercialClientesHistoricoFinanceiroDetalhesComponent"], _materiais_duplicata_materiais_duplicata_component__WEBPACK_IMPORTED_MODULE_14__["ComercialClientesHistoricoFinanceiroMateriaisDuplicataComponent"], _acumulos_mensais_acumulos_mensais_component__WEBPACK_IMPORTED_MODULE_15__["ComercialClientesHistoricoFinanceiroAcumulosMensaisComponent"], _notas_promissorias_notas_promissorias_component__WEBPACK_IMPORTED_MODULE_16__["ComercialClientesHistoricoFinanceiroNotasPromissoriasComponent"], _debitos_debitos_component__WEBPACK_IMPORTED_MODULE_17__["ComercialClientesHistoricoFinanceiroDebitosComponent"], _corte_dobra_corte_dobra_component__WEBPACK_IMPORTED_MODULE_18__["ComercialClientesHistoricoFinanceiroCorteDobraComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_3__["TooltipModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__["TabsModule"], ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_6__["FilterPipeModule"], angular2_counto__WEBPACK_IMPORTED_MODULE_7__["CountoModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_9__["TemplatesModule"].forRoot(), _historico_financeiro_routing_module__WEBPACK_IMPORTED_MODULE_10__["ComercialHistoricoFinanceiroRoutingModule"]]
      })], ComercialClientesHistoricoFinanceiroModule);
      /***/
    },

    /***/
    "HUfV":
    /*!************************************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/historico-financeiro/detalhes/detalhes.component.ts ***!
      \************************************************************************************************/

    /*! exports provided: ComercialClientesHistoricoFinanceiroDetalhesComponent */

    /***/
    function HUfV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialClientesHistoricoFinanceiroDetalhesComponent", function () {
        return ComercialClientesHistoricoFinanceiroDetalhesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_detalhes_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./detalhes.component.html */
      "6k2g");
      /* harmony import */


      var _detalhes_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./detalhes.component.scss */
      "Mj7o");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-filter-pipe */
      "4muW");
      /* harmony import */


      var _historico_financeiro_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../historico-financeiro.service */
      "THvH"); // ngx-filter-pipe
      // Services


      var ComercialClientesHistoricoFinanceiroDetalhesComponent = /*#__PURE__*/function () {
        function ComercialClientesHistoricoFinanceiroDetalhesComponent(activatedRoute, historicoFinanceiroService, filterPipe) {
          _classCallCheck(this, ComercialClientesHistoricoFinanceiroDetalhesComponent);

          this.activatedRoute = activatedRoute;
          this.historicoFinanceiroService = historicoFinanceiroService;
          this.filterPipe = filterPipe;
          this.tableConfig = {
            subtitleBorder: true
          };
          this.pedidos = [];
          this.pedidosPagination = [];
          this.pedidosFiltered = [];
          this.pedidosLoaded = false;
          this.maxSize = 10;
          this.itemsPerPage = 10;
        }

        _createClass(ComercialClientesHistoricoFinanceiroDetalhesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            this.activatedRoute.queryParams.subscribe(function (queryParams) {
              _this7.activatedRoute.parent.params.subscribe(function (params) {
                var grupoEconomico = false;

                if (queryParams['grupoEconomico'] && queryParams['grupoEconomico'] == 'true') {
                  grupoEconomico = true;
                }

                _this7.codCliente = params['id'];

                _this7.getPedidos(_this7.codCliente, grupoEconomico);
              });
            });
          }
        }, {
          key: "getPedidos",
          value: function getPedidos(id, grupoEconomico) {
            var _this8 = this;

            this.historicoFinanceiroService.getDetalhesPedidos(id, grupoEconomico).subscribe(function (response) {
              if (response['responseCode'] === 200) {
                _this8.pedidos = response['result'];
                _this8.pedidosFiltered = response['result'];
                _this8.pedidosPagination = _this8.pedidosFiltered.slice(0, _this8.itemsPerPage);
              }

              _this8.pedidosLoaded = true;
            });
          }
        }, {
          key: "classStatusBorder",
          value: function classStatusBorder(status) {
            var borderClass = '';

            if (status == 'EM ABERTO') {
              borderClass = 'border-success';
            } else if (status == 'QUITADA') {
              borderClass = 'border-primary';
            } else if (status == 'VENCIDA') {
              borderClass = 'border-warning';
            } else if (status == 'PROTESTO') {
              borderClass = 'border-danger';
            }

            return borderClass;
          }
        }, {
          key: "onPageChanged",
          value: function onPageChanged(event) {
            var startItem = (event.page - 1) * event.itemsPerPage;
            var endItem = event.page * event.itemsPerPage;
            this.pedidosPagination = this.pedidos.slice(startItem, endItem);
          }
        }, {
          key: "onFilter",
          value: function onFilter(value) {
            if (value) {
              this.pedidosFiltered = this.filterPipe.transform(this.pedidos, {
                numDuplicata: value
              });
            } else {
              this.pedidosFiltered = this.pedidos;
            }

            this.pedidosPagination = this.pedidosFiltered.slice(0, this.itemsPerPage);
          }
        }]);

        return ComercialClientesHistoricoFinanceiroDetalhesComponent;
      }();

      ComercialClientesHistoricoFinanceiroDetalhesComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _historico_financeiro_service__WEBPACK_IMPORTED_MODULE_6__["ComercialClientesHistoricoFinanceiroService"]
        }, {
          type: ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_5__["FilterPipe"]
        }];
      };

      ComercialClientesHistoricoFinanceiroDetalhesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-clientes-historico-financeiro-detalhes',
        template: _raw_loader_detalhes_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detalhes_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _historico_financeiro_service__WEBPACK_IMPORTED_MODULE_6__["ComercialClientesHistoricoFinanceiroService"], ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_5__["FilterPipe"]])], ComercialClientesHistoricoFinanceiroDetalhesComponent);
      /***/
    },

    /***/
    "K2I3":
    /*!***************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/clientes.module.ts ***!
      \***************************************************************/

    /*! exports provided: ComercialClientesModule */

    /***/
    function K2I3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialClientesModule", function () {
        return ComercialClientesModule;
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


      var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-bootstrap/pagination */
      "6No5");
      /* harmony import */


      var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/tabs */
      "2ZVE");
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "ienR");
      /* harmony import */


      var angular2_counto__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! angular2-counto */
      "RNH4");
      /* harmony import */


      var angular2_counto__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angular2_counto__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var angular2_text_mask__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! angular2-text-mask */
      "UVXo");
      /* harmony import */


      var angular2_text_mask__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_10__);
      /* harmony import */


      var ng_brazil__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng-brazil */
      "hTrW");
      /* harmony import */


      var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ng2-currency-mask */
      "D5nU");
      /* harmony import */


      var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_12__);
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var _clientes_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./clientes-routing.module */
      "Apbh");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./lista/lista.component */
      "qh7L");
      /* harmony import */


      var _pre_cadastro_pre_cadastro_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./pre-cadastro/pre-cadastro.component */
      "cn9h");
      /* harmony import */


      var _detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./detalhes/detalhes.component */
      "w2Hl");
      /* harmony import */


      var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./dashboard/dashboard.module */
      "gN2J");
      /* harmony import */


      var _historico_financeiro_historico_financeiro_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./historico-financeiro/historico-financeiro.module */
      "HOaJ");
      /* harmony import */


      var _proposta_analise_credito_proposta_analise_credito_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./proposta-analise-credito/proposta-analise-credito.component */
      "dWJH");
      /* harmony import */


      var _ultimos_precos_ultimos_precos_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./ultimos-precos/ultimos-precos.component */
      "BTJQ"); // ngx-bootstrap
      // Counto
      // ng-select
      // ng-brazil
      // ng2-currency-mask
      // Modules
      // Components


      var ComercialClientesModule = /*#__PURE__*/_createClass(function ComercialClientesModule() {
        _classCallCheck(this, ComercialClientesModule);
      });

      ComercialClientesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_lista_lista_component__WEBPACK_IMPORTED_MODULE_16__["ComercialClientesListaComponent"], _pre_cadastro_pre_cadastro_component__WEBPACK_IMPORTED_MODULE_17__["ComercialClientesPreCadastroComponent"], _detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_18__["ComercialClientesDetalhesComponent"], _proposta_analise_credito_proposta_analise_credito_component__WEBPACK_IMPORTED_MODULE_21__["ComercialClientesPropostaAnaliseCreditoComponent"], _ultimos_precos_ultimos_precos_component__WEBPACK_IMPORTED_MODULE_22__["ComercialClientesUltimosPrecosComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"].forRoot(), ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"].forRoot(), ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__["TabsModule"].forRoot(), ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsDatepickerModule"].forRoot(), angular2_counto__WEBPACK_IMPORTED_MODULE_8__["CountoModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["NgSelectModule"], angular2_text_mask__WEBPACK_IMPORTED_MODULE_10__["TextMaskModule"], ng_brazil__WEBPACK_IMPORTED_MODULE_11__["NgBrazil"], ng2_currency_mask__WEBPACK_IMPORTED_MODULE_12__["CurrencyMaskModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_14__["TemplatesModule"].forRoot(), _clientes_routing_module__WEBPACK_IMPORTED_MODULE_15__["ComercialClientesRoutingModule"], _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_19__["ComercialClientesDashboardModule"], _historico_financeiro_historico_financeiro_module__WEBPACK_IMPORTED_MODULE_20__["ComercialClientesHistoricoFinanceiroModule"]]
      })], ComercialClientesModule);
      /***/
    },

    /***/
    "MKDm":
    /*!*******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/clientes/historico-financeiro/historico-financeiro.component.html ***!
      \*******************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function MKDm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<app-header appTitle=\"Histórico financeiro\">\r\n  <button\r\n    type=\"button\"\r\n    routerLinkActive=\"active\"\r\n    [routerLink]=\"['resumo']\">\r\n    Resumen\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    routerLinkActive=\"active\"\r\n    [routerLink]=\"['detalhes']\">\r\n    Detalles\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    routerLinkActive=\"active\"\r\n    [routerLink]=\"['acumulos-mensais']\">\r\n    Acumulaciones mensuales\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    routerLinkActive=\"active\"\r\n    [routerLink]=\"['notas-promissorias']\">\r\n    Pagarés  </button>\r\n  <button\r\n    type=\"button\"\r\n    routerLinkActive=\"active\"\r\n    [routerLink]=\"['debitos']\">\r\n    Débitos\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    routerLinkActive=\"active\"\r\n    [routerLink]=\"['corte-dobra']\">\r\n    Corte Doblado\r\n  </button>\r\n</app-header>\r\n<app-body [show]=\"!loaderFullScreen\" [breadCrumbTree]=\"breadCrumbTree\">\r\n  <div class=\"row mb-3\">\r\n    <div class=\"col\">\r\n      <h5 class=\"d-inline-block mb-0 mr-3\" tooltip=\"Código do cliente\">\r\n        <span class=\"badge badge-dark\">CÓD.: {{ cliente.codCliente }}</span>\r\n      </h5>\r\n      <h6 class=\"d-inline-block mb-0\">{{ cliente.razaoSocial }}</h6>\r\n    </div>\r\n  </div>\r\n  <router-outlet></router-outlet>\r\n</app-body>\r\n";
      /***/
    },

    /***/
    "Mj7o":
    /*!**************************************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/historico-financeiro/detalhes/detalhes.component.scss ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Mj7o(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NsaWVudGVzL2hpc3Rvcmljby1maW5hbmNlaXJvL2RldGFsaGVzL2RldGFsaGVzLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "NJR3":
    /*!***********************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/clientes-resolver.guard.ts ***!
      \***********************************************************************/

    /*! exports provided: ComercialClientesResolverGuard */

    /***/
    function NJR3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialClientesResolverGuard", function () {
        return ComercialClientesResolverGuard;
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


      var ComercialClientesResolverGuard = /*#__PURE__*/function () {
        function ComercialClientesResolverGuard(clientesService) {
          _classCallCheck(this, ComercialClientesResolverGuard);

          this.clientesService = clientesService;
        }

        _createClass(ComercialClientesResolverGuard, [{
          key: "resolve",
          value: function resolve(route) {
            if (route.params && route.params['id']) {
              return this.clientesService.getPermissaoAcesso(route.params['id']);
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
              responseCode: 403
            });
          }
        }]);

        return ComercialClientesResolverGuard;
      }();

      ComercialClientesResolverGuard.ctorParameters = function () {
        return [{
          type: src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_3__["ComercialClientesService"]
        }];
      };

      ComercialClientesResolverGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_3__["ComercialClientesService"]])], ComercialClientesResolverGuard);
      /***/
    },

    /***/
    "Q3m2":
    /*!************************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/historico-financeiro/materiais-duplicata/materiais-duplicata.component.scss ***!
      \************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Q3m2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NsaWVudGVzL2hpc3Rvcmljby1maW5hbmNlaXJvL21hdGVyaWFpcy1kdXBsaWNhdGEvbWF0ZXJpYWlzLWR1cGxpY2F0YS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "QZWA":
    /*!******************************************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/historico-financeiro/corte-dobra/corte-dobra.component.ts ***!
      \******************************************************************************************************/

    /*! exports provided: ComercialClientesHistoricoFinanceiroCorteDobraComponent */

    /***/
    function QZWA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialClientesHistoricoFinanceiroCorteDobraComponent", function () {
        return ComercialClientesHistoricoFinanceiroCorteDobraComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_corte_dobra_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./corte-dobra.component.html */
      "Qb8o");
      /* harmony import */


      var _corte_dobra_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./corte-dobra.component.scss */
      "iqaR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _historico_financeiro_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../historico-financeiro.service */
      "THvH"); // Services


      var ComercialClientesHistoricoFinanceiroCorteDobraComponent = /*#__PURE__*/function () {
        function ComercialClientesHistoricoFinanceiroCorteDobraComponent(activatedRoute, historicoFinanceiroService) {
          _classCallCheck(this, ComercialClientesHistoricoFinanceiroCorteDobraComponent);

          this.activatedRoute = activatedRoute;
          this.historicoFinanceiroService = historicoFinanceiroService;
          this.corteDobra = [];
          this.corteDobraLoaded = false;
        }

        _createClass(ComercialClientesHistoricoFinanceiroCorteDobraComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this9 = this;

            this.activatedRoute.parent.params.subscribe(function (params) {
              _this9.getCorteDobra(params['id']);
            });
          }
        }, {
          key: "getCorteDobra",
          value: function getCorteDobra(id) {
            var _this10 = this;

            this.historicoFinanceiroService.getCorteDobra(id).subscribe(function (response) {
              if (response['responseCode'] === 200) {
                _this10.corteDobra = response['result'];
              }

              _this10.corteDobraLoaded = true;
            });
          }
        }]);

        return ComercialClientesHistoricoFinanceiroCorteDobraComponent;
      }();

      ComercialClientesHistoricoFinanceiroCorteDobraComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _historico_financeiro_service__WEBPACK_IMPORTED_MODULE_5__["ComercialClientesHistoricoFinanceiroService"]
        }];
      };

      ComercialClientesHistoricoFinanceiroCorteDobraComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-clientes-historico-financeiro-corte-dobra',
        template: _raw_loader_corte_dobra_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_corte_dobra_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _historico_financeiro_service__WEBPACK_IMPORTED_MODULE_5__["ComercialClientesHistoricoFinanceiroService"]])], ComercialClientesHistoricoFinanceiroCorteDobraComponent);
      /***/
    },

    /***/
    "Qb8o":
    /*!**********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/clientes/historico-financeiro/corte-dobra/corte-dobra.component.html ***!
      \**********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Qb8o(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\r\n  <div class=\"col\">\r\n    <div class=\"d-flex w-100\" *ngIf=\"!corteDobraLoaded\">\r\n      <div class=\"spinner-border spinner-border-sm text-dark my-auto mr-2\"></div>\r\n      <strong>Carregando Corte Dobra...</strong>\r\n    </div>\r\n    <custom-table *ngIf=\"corteDobra.length > 0\">\r\n      <ng-template #thead let-thead>\r\n        <tr>\r\n          <th scope=\"col\" class=\"text-center\">Identificacion</th>\r\n          <th scope=\"col\" class=\"text-center\">Data</th>\r\n          <th scope=\"col\" class=\"text-center\">Obra</th>\r\n          <th scope=\"col\" class=\"text-center\">Discriminación</th>\r\n          <th scope=\"col\" class=\"text-center\">Valor</th>\r\n          <th scope=\"col\" class=\"text-center\">Empresa</th>\r\n        </tr>\r\n      </ng-template>\r\n      <ng-template #tbody let-tbody>\r\n        <tr *ngFor=\"let item of corteDobra\">\r\n          <td class=\"text-center\">{{ item.identificacao }}</td>\r\n          <td class=\"text-center\">{{ item.data }}</td>\r\n          <td class=\"text-center\">{{ item.obra }}</td>\r\n          <td class=\"text-center\">{{ item.discriminacao }}</td>\r\n          <td class=\"text-center\">{{ item.valor | currency:'BRL':'symbol':'1.2-2' }}</td>\r\n          <td class=\"text-center\">{{ item.empresa }}</td>\r\n        </tr>\r\n      </ng-template>\r\n    </custom-table>\r\n    <empty-result\r\n      message=\"Nenhuma informação encontrada\"\r\n      *ngIf=\"corteDobra.length == 0 && corteDobraLoaded\">\r\n    </empty-result>\r\n  </div>\r\n</div>\r\n";
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

          this.months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
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
    "S/fQ":
    /*!*************************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/ultimos-precos/ultimos-precos.service.ts ***!
      \*************************************************************************************/

    /*! exports provided: ComercialClientesUltimosPrecosService */

    /***/
    function SFQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialClientesUltimosPrecosService", function () {
        return ComercialClientesUltimosPrecosService;
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

      var ComercialClientesUltimosPrecosService = /*#__PURE__*/function () {
        function ComercialClientesUltimosPrecosService(http) {
          _classCallCheck(this, ComercialClientesUltimosPrecosService);

          this.http = http;
          this.API = "https://crm360.monterrey.com.bo/api/comercial/clientes/ultimos-precos";
        }

        _createClass(ComercialClientesUltimosPrecosService, [{
          key: "getListaUltimosPrecos",
          value: function getListaUltimosPrecos(params) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/lista"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }]);

        return ComercialClientesUltimosPrecosService;
      }();

      ComercialClientesUltimosPrecosService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      ComercialClientesUltimosPrecosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ComercialClientesUltimosPrecosService);
      /***/
    },

    /***/
    "THvH":
    /*!*************************************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/historico-financeiro/historico-financeiro.service.ts ***!
      \*************************************************************************************************/

    /*! exports provided: ComercialClientesHistoricoFinanceiroService */

    /***/
    function THvH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialClientesHistoricoFinanceiroService", function () {
        return ComercialClientesHistoricoFinanceiroService;
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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var ComercialClientesHistoricoFinanceiroService = /*#__PURE__*/function () {
        function ComercialClientesHistoricoFinanceiroService(http) {
          _classCallCheck(this, ComercialClientesHistoricoFinanceiroService);

          this.http = http;
          this.API = "https://crm360.monterrey.com.bo/api/comercial/clientes/historico-financeiro";
        }

        _createClass(ComercialClientesHistoricoFinanceiroService, [{
          key: "getPermissaoAcesso",
          value: function getPermissaoAcesso(id) {
            return this.http.get("".concat(this.API, "/permissao-acesso/").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getResumoSintetico",
          value: function getResumoSintetico(id, grupoEconomico) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('grupoEconomico', grupoEconomico);
            return this.http.get("".concat(this.API, "/resumo/sintetico/").concat(id), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getGrupoEconomico",
          value: function getGrupoEconomico(id) {
            return this.http.get("".concat(this.API, "/grupo-economico/").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getResumoPedidos",
          value: function getResumoPedidos(id, grupoEconomico) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('grupoEconomico', grupoEconomico);
            return this.http.get("".concat(this.API, "/resumo/pedidos/").concat(id), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getDetalhesPedidos",
          value: function getDetalhesPedidos(id, grupoEconomico) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('grupoEconomico', grupoEconomico);
            return this.http.get("".concat(this.API, "/detalhes/pedidos/").concat(id), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getMateriaisDuplicata",
          value: function getMateriaisDuplicata(params) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/materiais-duplicata"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getAcumulosMensais",
          value: function getAcumulosMensais(id) {
            return this.http.get("".concat(this.API, "/acumulos-mensais/").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getNotasPromissorias",
          value: function getNotasPromissorias(id) {
            return this.http.get("".concat(this.API, "/notas-promissorias/").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getDebitos",
          value: function getDebitos(id) {
            return this.http.get("".concat(this.API, "/debitos/").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getCorteDobra",
          value: function getCorteDobra(id) {
            return this.http.get("".concat(this.API, "/corte-dobra/").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }]);

        return ComercialClientesHistoricoFinanceiroService;
      }();

      ComercialClientesHistoricoFinanceiroService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      ComercialClientesHistoricoFinanceiroService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], ComercialClientesHistoricoFinanceiroService);
      /***/
    },

    /***/
    "VAxy":
    /*!**********************************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/historico-financeiro/debitos/debitos.component.ts ***!
      \**********************************************************************************************/

    /*! exports provided: ComercialClientesHistoricoFinanceiroDebitosComponent */

    /***/
    function VAxy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialClientesHistoricoFinanceiroDebitosComponent", function () {
        return ComercialClientesHistoricoFinanceiroDebitosComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_debitos_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./debitos.component.html */
      "EB1+");
      /* harmony import */


      var _debitos_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./debitos.component.scss */
      "0Wpi");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _historico_financeiro_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../historico-financeiro.service */
      "THvH"); // Services


      var ComercialClientesHistoricoFinanceiroDebitosComponent = /*#__PURE__*/function () {
        function ComercialClientesHistoricoFinanceiroDebitosComponent(activatedRoute, historicoFinanceiroService) {
          _classCallCheck(this, ComercialClientesHistoricoFinanceiroDebitosComponent);

          this.activatedRoute = activatedRoute;
          this.historicoFinanceiroService = historicoFinanceiroService;
          this.debitos = [];
          this.debitosLoaded = false;
        }

        _createClass(ComercialClientesHistoricoFinanceiroDebitosComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this11 = this;

            this.activatedRoute.parent.params.subscribe(function (params) {
              _this11.getDebitos(params['id']);
            });
          }
        }, {
          key: "getDebitos",
          value: function getDebitos(id) {
            var _this12 = this;

            this.historicoFinanceiroService.getDebitos(id).subscribe(function (response) {
              if (response['responseCode'] === 200) {
                _this12.debitos = response['result'];
              }

              _this12.debitosLoaded = true;
            });
          }
        }, {
          key: "classStatusBorder",
          value: function classStatusBorder(status) {
            var borderClass = '';

            if (status == 'COM NOTA') {
              borderClass = 'border-success';
            } else if (status == 'SEM NOTA') {
              borderClass = 'border-primary';
            }

            return borderClass;
          }
        }]);

        return ComercialClientesHistoricoFinanceiroDebitosComponent;
      }();

      ComercialClientesHistoricoFinanceiroDebitosComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _historico_financeiro_service__WEBPACK_IMPORTED_MODULE_5__["ComercialClientesHistoricoFinanceiroService"]
        }];
      };

      ComercialClientesHistoricoFinanceiroDebitosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-clientes-historico-financeiro-debitos',
        template: _raw_loader_debitos_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_debitos_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _historico_financeiro_service__WEBPACK_IMPORTED_MODULE_5__["ComercialClientesHistoricoFinanceiroService"]])], ComercialClientesHistoricoFinanceiroDebitosComponent);
      /***/
    },

    /***/
    "VgR1":
    /*!****************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/historico-financeiro/acumulos-mensais/acumulos-mensais.component.ts ***!
      \****************************************************************************************************************/

    /*! exports provided: ComercialClientesHistoricoFinanceiroAcumulosMensaisComponent */

    /***/
    function VgR1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialClientesHistoricoFinanceiroAcumulosMensaisComponent", function () {
        return ComercialClientesHistoricoFinanceiroAcumulosMensaisComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_acumulos_mensais_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./acumulos-mensais.component.html */
      "jIxS");
      /* harmony import */


      var _acumulos_mensais_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./acumulos-mensais.component.scss */
      "qm78");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _historico_financeiro_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../historico-financeiro.service */
      "THvH"); // Services


      var ComercialClientesHistoricoFinanceiroAcumulosMensaisComponent = /*#__PURE__*/function () {
        function ComercialClientesHistoricoFinanceiroAcumulosMensaisComponent(activatedRoute, historicoFinanceiroService) {
          _classCallCheck(this, ComercialClientesHistoricoFinanceiroAcumulosMensaisComponent);

          this.activatedRoute = activatedRoute;
          this.historicoFinanceiroService = historicoFinanceiroService;
          this.acumulosMensais = {};
          this.acumulosMensaisLoaded = false;
        }

        _createClass(ComercialClientesHistoricoFinanceiroAcumulosMensaisComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this13 = this;

            this.activatedRoute.parent.params.subscribe(function (params) {
              _this13.getAcumulosMensais(params['id']);
            });
          }
        }, {
          key: "getAcumulosMensais",
          value: function getAcumulosMensais(id) {
            var _this14 = this;

            this.historicoFinanceiroService.getAcumulosMensais(id).subscribe(function (response) {
              if (response['responseCode'] === 200) {
                _this14.acumulosMensais = response['result'];
              }

              _this14.acumulosMensaisLoaded = true;
            });
          }
        }]);

        return ComercialClientesHistoricoFinanceiroAcumulosMensaisComponent;
      }();

      ComercialClientesHistoricoFinanceiroAcumulosMensaisComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _historico_financeiro_service__WEBPACK_IMPORTED_MODULE_5__["ComercialClientesHistoricoFinanceiroService"]
        }];
      };

      ComercialClientesHistoricoFinanceiroAcumulosMensaisComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-clientes-historico-financeiro-acumulos-mensais',
        template: _raw_loader_acumulos_mensais_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_acumulos_mensais_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _historico_financeiro_service__WEBPACK_IMPORTED_MODULE_5__["ComercialClientesHistoricoFinanceiroService"]])], ComercialClientesHistoricoFinanceiroAcumulosMensaisComponent);
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
    "WRpt":
    /*!************************************************************!*\
      !*** ./src/app/shared/services/core/form-rules.service.ts ***!
      \************************************************************/

    /*! exports provided: FormRulesService */

    /***/
    function WRpt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormRulesService", function () {
        return FormRulesService;
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

      var FormRulesService = /*#__PURE__*/function () {
        function FormRulesService(http) {
          _classCallCheck(this, FormRulesService);

          this.http = http;
          this.API = "https://crm360.monterrey.com.bo/api/common/services";
        }

        _createClass(FormRulesService, [{
          key: "getRules",
          value: function getRules(formRef) {
            return this.http.get("".concat(this.API, "/form-rules/").concat(formRef)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }]);

        return FormRulesService;
      }();

      FormRulesService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      FormRulesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], FormRulesService);
      /***/
    },

    /***/
    "X6qe":
    /*!***********************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/lista/lista.component.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function X6qe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.modal-content {\n  background-color: #fefefe;\n  margin: 15% auto;\n  padding: 20px;\n  border: 1px solid #888;\n  width: 80%;\n}\n\n.close {\n  color: #aaa;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21lcmNpYWwvY2xpZW50ZXMvbGlzdGEvbGlzdGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLG9DQUFBO0FBQ0o7O0FBRUU7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFRTs7RUFFRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2NvbWVyY2lhbC9jbGllbnRlcy9saXN0YS9saXN0YS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gIH1cclxuICBcclxuICAubW9kYWwtY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xyXG4gICAgbWFyZ2luOiAxNSUgYXV0bztcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICB9XHJcbiAgXHJcbiAgLmNsb3NlIHtcclxuICAgIGNvbG9yOiAjYWFhO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5jbG9zZTpob3ZlcixcclxuICAuY2xvc2U6Zm9jdXMge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICAiXX0= */";
      /***/
    },

    /***/
    "bsvQ":
    /*!*************************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/pre-cadastro/pre-cadastro.component.scss ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function bsvQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NsaWVudGVzL3ByZS1jYWRhc3Ryby9wcmUtY2FkYXN0cm8uY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "cn9h":
    /*!***********************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/pre-cadastro/pre-cadastro.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: ComercialClientesPreCadastroComponent */

    /***/
    function cn9h(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialClientesPreCadastroComponent", function () {
        return ComercialClientesPreCadastroComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_pre_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./pre-cadastro.component.html */
      "1XjU");
      /* harmony import */


      var _pre_cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pre-cadastro.component.scss */
      "bsvQ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var ng_brazil__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng-brazil */
      "hTrW");
      /* harmony import */


      var _pre_cadastro_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./pre-cadastro.service */
      "9WDr");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/modules/comercial/services/clientes.service */
      "8ouN");
      /* harmony import */


      var src_app_shared_services_ws_cnpj_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/shared/services/ws/cnpj.service */
      "w4nC");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS");
      /* harmony import */


      var src_app_shared_services_core_functions_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! src/app/shared/services/core/functions.service */
      "5oPb"); // ngx-bootstrap
      // ng-brazil
      // Services


      var ComercialClientesPreCadastroComponent = /*#__PURE__*/function () {
        function ComercialClientesPreCadastroComponent(preCadastroService, formBuilder, location, activatedRoute, router, clientesService, pnotifyService, cnpjService, atividadesService, titleService, functionsService, modalService) {
          _classCallCheck(this, ComercialClientesPreCadastroComponent);

          this.preCadastroService = preCadastroService;
          this.formBuilder = formBuilder;
          this.location = location;
          this.activatedRoute = activatedRoute;
          this.router = router;
          this.clientesService = clientesService;
          this.pnotifyService = pnotifyService;
          this.cnpjService = cnpjService;
          this.atividadesService = atividadesService;
          this.titleService = titleService;
          this.functionsService = functionsService;
          this.modalService = modalService;
          this.modalConfig = {
            ignoreBackdropClick: true
          };
          this.loaderFullScreen = true;
          this.loaderNavbar = false;
          this.breadCrumbTree = [{
            descricao: 'Home',
            routerLink: '/comercial/home'
          }, {
            descricao: 'Busqueda de clientes',
            routerLink: '/comercial/clientes'
          }, {
            descricao: 'Pre-Registro'
          }];
          this.MASKS = ng_brazil__WEBPACK_IMPORTED_MODULE_9__["MASKS"];
          this.vendedores = [];
          this.cnaes = [];
          this.formChanged = false;
          this.tipoPessoa = 'F';
          this.submittingForm = false;
          this.maxLengthRules = {};
          this.maxLengthMessages = {};
          this.dadosCliente = {};
          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialClientesPreCadastroComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this15 = this;

            this.titleService.setTitle('Pré-cadastro');
            this.getFormFields();
            this.activatedRoute.queryParams.subscribe(function (queryParams) {
              var documento = null;

              if (Object.keys(queryParams).length > 0) {
                if (queryParams['cpf']) {
                  _this15.tipoPessoa = 'F';
                  documento = queryParams['cpf'];
                } else if (queryParams['cnpj']) {
                  _this15.tipoPessoa = 'J';
                  documento = queryParams['cnpj'];
                }
              }

              _this15.registrarAcesso();

              _this15.setMaxLengthRules();

              _this15.setFormBuilder(documento);
            });
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "getFormFields",
          value: function getFormFields() {
            var _this16 = this;

            this.preCadastroService.loadDependencies().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this16.loaderFullScreen = false;
            })).subscribe(function (response) {
              if (response[0].responseCode === 200) {
                _this16.vendedores = response[0].result;
              } else {
                _this16.handleFormFieldsError();
              }

              if (response[1].responseCode === 200) {
                _this16.cnaes = response[1].result;
              } else {
                _this16.handleFormFieldsError();
              }
            }, function (error) {
              _this16.handleFormFieldsError();
            });
          }
        }, {
          key: "handleFormFieldsError",
          value: function handleFormFieldsError() {
            this.pnotifyService.error();
            this.location.back();
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
              emailNfe: "E-mail NF-e deve conter at\xE9 ".concat(this.maxLengthRules.emailNfe, " caracteres.")
            };
          }
        }, {
          key: "setFormBuilder",
          value: function setFormBuilder(documento) {
            var cpf = null;
            var cnpj = null;

            if (documento != null) {
              if (this.tipoPessoa == 'F') {
                cpf = documento;
              } else if (this.tipoPessoa == 'J') {
                cnpj = documento;
              }
            }

            this.form = this.formBuilder.group({
              cpf: [cpf, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].nullValidator]],
              nome: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(this.maxLengthRules.nome)]],
              sobrenome: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(this.maxLengthRules.sobrenome)]],
              cnpj: [cnpj, [ng_brazil__WEBPACK_IMPORTED_MODULE_9__["NgBrazilValidators"].cnpj]],
              razaoSocial: [null],
              nomeFantasia: [null],
              vendedor: [null],
              cnae: [null],
              emailNfe: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(this.maxLengthRules.emailNfe)]],
              // emailMarketing: [
              //   null,
              //   [Validators.email, Validators.maxLength(this.maxLengthRules.emailNfe)],
              // ],
              telefone: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              atividadePrincipal: this.formBuilder.array([]),
              atividadeSecundaria: this.formBuilder.array([])
            });
            this.setType(this.tipoPessoa);

            if (documento != null) {
              if (this.tipoPessoa == 'F') {
                this.validateCPF();
              } else if (this.tipoPessoa == 'J') {
                this.validateCNPJ();
              }
            }
          }
        }, {
          key: "setType",
          value: function setType(type) {
            this.tipoPessoa = type;
            this.form.reset();

            if (this.tipoPessoa == 'F') {
              this.form.controls.cpf.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
              this.form.controls.cpf.updateValueAndValidity();
              this.form.controls.nome.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(this.maxLengthRules.nome)]);
              this.form.controls.nome.updateValueAndValidity();
              this.form.controls.sobrenome.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(this.maxLengthRules.sobrenome)]);
              this.form.controls.sobrenome.updateValueAndValidity();
              this.form.controls.cnpj.clearValidators();
              this.form.controls.cnpj.updateValueAndValidity();
              this.form.controls.razaoSocial.clearValidators();
              this.form.controls.razaoSocial.updateValueAndValidity();
              this.form.controls.nomeFantasia.clearValidators();
              this.form.controls.nomeFantasia.updateValueAndValidity();
              this.form.controls.cnae.clearValidators();
              this.form.controls.cnae.updateValueAndValidity();
            } else if (this.tipoPessoa == 'J') {
              this.form.controls.cnpj.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
              this.form.controls.cnpj.updateValueAndValidity();
              this.form.controls.razaoSocial.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(this.maxLengthRules.razaoSocial)]);
              this.form.controls.razaoSocial.updateValueAndValidity();
              this.form.controls.nomeFantasia.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(this.maxLengthRules.nomeFantasia)]);
              this.form.controls.nomeFantasia.updateValueAndValidity();
              this.form.controls.cnae.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
              this.form.controls.cnae.updateValueAndValidity();
              this.form.controls.cpf.clearValidators();
              this.form.controls.cpf.updateValueAndValidity();
              this.form.controls.nome.clearValidators();
              this.form.controls.nome.updateValueAndValidity();
              this.form.controls.sobrenome.clearValidators();
              this.form.controls.sobrenome.updateValueAndValidity();
            }
          }
        }, {
          key: "atividadePrincipal",
          get: function get() {
            return this.form.get('atividadePrincipal');
          }
        }, {
          key: "atividadeSecundaria",
          get: function get() {
            return this.form.get('atividadeSecundaria');
          }
        }, {
          key: "pushAtividadePrincipal",
          value: function pushAtividadePrincipal(atividade) {
            while (this.atividadePrincipal.length !== 0) {
              this.atividadePrincipal.removeAt(0);
            }

            atividade.code = atividade.code.replace(/\D/g, '');

            if (atividade.code != '0000000') {
              this.atividadePrincipal.push(this.formBuilder.group({
                cnae: [atividade.code],
                descricao: [atividade.text]
              }));
            }
          }
        }, {
          key: "pushAtividadeSecundaria",
          value: function pushAtividadeSecundaria(atividades) {
            while (this.atividadeSecundaria.length !== 0) {
              this.atividadeSecundaria.removeAt(0);
            }

            if (atividades.length > 0) {
              for (var i = 0; i < atividades.length; i++) {
                atividades[i].code = atividades[i].code.replace(/\D/g, '');

                if (atividades[i].code != '0000000') {
                  this.atividadeSecundaria.push(this.formBuilder.group({
                    cnae: [atividades[i].code],
                    descricao: [atividades[i].text]
                  }));
                }
              }
            }
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
          key: "validateCPF",
          value: function validateCPF() {
            var _this17 = this;

            if (this.form.controls.cpf.valid) {
              this.loaderNavbar = true;
              this.dadosCliente = {};
              this.clientesService.getExisteCpfCnpj(this.form.value.cpf.replace(/\D/g, ''), true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
                _this17.loaderNavbar = false;
              })).subscribe(function (response) {
                if (response.responseCode === 200) {
                  if (response.result.verificacao == 1) {
                    _this17.form.controls.cpf.setErrors({
                      incorrect: true
                    });

                    _this17.pnotifyService.notice('O CPF informado já está cadastrado.');

                    if (Object.keys(response.result.dadosCliente).length > 0) {
                      _this17.formChanged = false;
                      _this17.dadosCliente = response.result.dadosCliente;

                      _this17.showDetails();
                    }
                  }
                }
              });
            }
          }
        }, {
          key: "validateCNPJ",
          value: function validateCNPJ() {
            var _this18 = this;

            if (this.form.controls.cnpj.valid) {
              this.loaderNavbar = true;
              this.dadosCliente = {};
              this.clientesService.getExisteCpfCnpj(this.form.value.cnpj.replace(/\D/g, ''), true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
                _this18.loaderNavbar = false;
              })).subscribe(function (response) {
                if (response.responseCode === 200) {
                  if (response.result.verificacao == 1) {
                    _this18.form.controls.cnpj.setErrors({
                      incorrect: true
                    });

                    _this18.pnotifyService.notice('O CNPJ informado já está cadastrado.');

                    if (Object.keys(response.result.dadosCliente).length > 0) {
                      _this18.formChanged = false;
                      _this18.dadosCliente = response.result.dadosCliente;

                      _this18.showDetails();
                    }
                  } else {
                    _this18.loaderNavbar = true;

                    _this18.getCnpjData(_this18.form.value.cnpj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
                      _this18.loaderNavbar = false;
                    })).subscribe(function (response) {
                      _this18.form.controls.razaoSocial.setValue(response.nome);

                      _this18.form.controls.nomeFantasia.setValue(response.fantasia);

                      if (response.atividade_principal[0].code) {
                        _this18.checkCnae(response.atividade_principal[0]);
                      }

                      _this18.pushAtividadePrincipal(response.atividade_principal[0]);

                      _this18.pushAtividadeSecundaria(response.atividades_secundarias);
                    });
                  }
                }
              });
            }
          }
        }, {
          key: "showDetails",
          value: function showDetails() {
            this.modalRef = this.modalService.show(this.modalDetalhesCliente, this.modalConfig);
          }
        }, {
          key: "onCloseDetails",
          value: function onCloseDetails() {
            this.modalRef.hide();
          }
        }, {
          key: "onNavigateDetail",
          value: function onNavigateDetail() {
            if (this.dadosCliente.podeAcessar == 1) {
              this.onCloseDetails();
              this.router.navigate(['../detalhes', this.dadosCliente.codCliente], {
                relativeTo: this.activatedRoute
              });
            } else {
              this.pnotifyService.notice('Este cliente no pertenece a su cartera');
            }
          }
        }, {
          key: "checkCnae",
          value: function checkCnae(data) {
            var cnae = {
              id: parseInt(data.code.replace(/\D/g, '')),
              descricao: data.text
            };
            var exists = false;

            for (var i = 0; i < this.cnaes.length; i++) {
              if (this.cnaes[i].id == cnae.id) {
                exists = true;
              }
            }

            if (!exists) {
              this.cnaes.push(cnae);
            }

            this.form.controls.cnae.setValue(cnae.id);
          }
        }, {
          key: "getCnpjData",
          value: function getCnpjData(cnpj) {
            return this.cnpjService.getData(cnpj);
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this19 = this;

            /* this.postAkna(20081);
            return; */
            if (this.form.valid) {
              this.loaderNavbar = true;
              this.submittingForm = true;
              var formObj = {};

              if (this.tipoPessoa == 'F') {
                formObj = {
                  tipoPessoa: this.tipoPessoa,
                  cpf: this.form.value.cpf,
                  vendedor: this.form.value.vendedor,
                  nome: this.form.value.nome,
                  sobrenome: this.form.value.sobrenome,
                  emailNfe: this.form.value.emailNfe,
                  // emailMarketing: this.form.value.emailMarketing,
                  telefone: this.form.value.telefone
                };
              } else if (this.tipoPessoa == 'J') {
                formObj = {
                  tipoPessoa: this.tipoPessoa,
                  cnpj: this.form.value.cnpj,
                  vendedor: this.form.value.vendedor,
                  razaoSocial: this.form.value.razaoSocial,
                  nomeFantasia: this.form.value.nomeFantasia,
                  cnae: this.functionsService.completaZeroEsquerda(this.form.value.cnae, 7),
                  emailNfe: this.form.value.emailNfe,
                  // emailMarketing: this.form.value.emailMarketing,
                  telefone: this.form.value.telefone,
                  atividadePrincipal: this.form.value.atividadePrincipal,
                  atividadeSecundaria: this.form.value.atividadeSecundaria
                };
              }

              this.clientesService.postCliente(formObj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
                _this19.loaderNavbar = false;
                _this19.submittingForm = false;
              })).subscribe(function (response) {
                if (response.responseCode === 200) {
                  _this19.pnotifyService.success('O cliente foi cadastrado.');

                  _this19.formChanged = false;
                  /* this.postAkna(response.result); */

                  _this19.router.navigate(['../cadastro', response.result], {
                    relativeTo: _this19.activatedRoute
                  });
                } else if (response.responseCode === 403) {
                  _this19.pnotifyService.notice('Falha ao atribuir vendedor ao cadastro.');
                } else {
                  _this19.pnotifyService.error('Ocorreu um erro ao cadastrar o cliente.');
                }
              }, function (error) {
                _this19.pnotifyService.error('Ocorreu um erro ao cadastrar o cliente.');
              });
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
          key: "onCancel",
          value: function onCancel() {
            this.location.back();
          }
        }]);

        return ComercialClientesPreCadastroComponent;
      }();

      ComercialClientesPreCadastroComponent.ctorParameters = function () {
        return [{
          type: _pre_cadastro_service__WEBPACK_IMPORTED_MODULE_10__["ComercialClientesPreCadastroService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_12__["ComercialClientesService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"]
        }, {
          type: src_app_shared_services_ws_cnpj_service__WEBPACK_IMPORTED_MODULE_13__["CnpjService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_14__["AtividadesService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_15__["TitleService"]
        }, {
          type: src_app_shared_services_core_functions_service__WEBPACK_IMPORTED_MODULE_16__["FunctionsService"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["BsModalService"]
        }];
      };

      ComercialClientesPreCadastroComponent.propDecorators = {
        modalDetalhesCliente: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['modalDetalhesCliente', {}]
        }]
      };
      ComercialClientesPreCadastroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-clientes-pre-cadastro',
        template: _raw_loader_pre_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_pre_cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_pre_cadastro_service__WEBPACK_IMPORTED_MODULE_10__["ComercialClientesPreCadastroService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_12__["ComercialClientesService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"], src_app_shared_services_ws_cnpj_service__WEBPACK_IMPORTED_MODULE_13__["CnpjService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_14__["AtividadesService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_15__["TitleService"], src_app_shared_services_core_functions_service__WEBPACK_IMPORTED_MODULE_16__["FunctionsService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["BsModalService"]])], ComercialClientesPreCadastroComponent);
      /***/
    },

    /***/
    "dWJH":
    /*!***********************************************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/proposta-analise-credito/proposta-analise-credito.component.ts ***!
      \***********************************************************************************************************/

    /*! exports provided: ComercialClientesPropostaAnaliseCreditoComponent */

    /***/
    function dWJH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialClientesPropostaAnaliseCreditoComponent", function () {
        return ComercialClientesPropostaAnaliseCreditoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_proposta_analise_credito_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./proposta-analise-credito.component.html */
      "wVIQ");
      /* harmony import */


      var _proposta_analise_credito_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./proposta-analise-credito.component.scss */
      "GH03");
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


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "ienR");
      /* harmony import */


      var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-bootstrap/chronos */
      "xj/R");
      /* harmony import */


      var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-bootstrap/locale */
      "0b5p");
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


      var src_app_shared_services_core_pdf_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/services/core/pdf.service */
      "GTII");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS"); // ngx-bootstrap


      Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_8__["defineLocale"])('pt-br', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_9__["ptBrLocale"]); // ng-brazil
      // Services

      var ComercialClientesPropostaAnaliseCreditoComponent = /*#__PURE__*/function () {
        function ComercialClientesPropostaAnaliseCreditoComponent(activatedRoute, formBuilder, localeService, pnotifyService, pdfService, location, atividadesService, titleService) {
          _classCallCheck(this, ComercialClientesPropostaAnaliseCreditoComponent);

          this.activatedRoute = activatedRoute;
          this.formBuilder = formBuilder;
          this.localeService = localeService;
          this.pnotifyService = pnotifyService;
          this.pdfService = pdfService;
          this.location = location;
          this.atividadesService = atividadesService;
          this.titleService = titleService;
          this.MASKS = js_brasil__WEBPACK_IMPORTED_MODULE_10__["utilsBr"].MASKS;
          this.loaderNavbar = false;
          this.breadCrumbTree = [];
          this.tipoVisao = 'formulario';
          this.dataFicha = [];
          this.formChanged = false;
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

        _createClass(ComercialClientesPropostaAnaliseCreditoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this20 = this;

            this.activatedRoute.params.subscribe(function (params) {
              _this20.codCliente = params['id'];

              _this20.registrarAcesso();

              _this20.setBreadCrumb(_this20.codCliente);

              _this20.titleService.setTitle('Proposta para análise de crédito');

              if (_this20.activatedRoute.snapshot.data['data']['responseCode'] === 200) {
                _this20.setFormBuilder(_this20.activatedRoute.snapshot.data['data']['result']);
              } else {
                _this20.pnotifyService.error();

                _this20.location.back();
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
            this.breadCrumbTree = [{
              descricao: 'Home',
              routerLink: '/comercial/home'
            }, {
              descricao: 'Busqueda de clientes',
              routerLink: '/comercial/clientes/lista'
            }, {
              descricao: 'Detalhes',
              routerLink: "/comercial/clientes/detalhes/".concat(id)
            }, {
              descricao: 'Proposta para análise de crédito'
            }];
          }
        }, {
          key: "setFormBuilder",
          value: function setFormBuilder(data) {
            this.form = this.formBuilder.group({
              razaoSocial: [{
                value: data['razaoSocial'],
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
              dataSolicitacao: [new Date(), [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
              codCliente: [{
                value: data['codCliente'],
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
              codClienteDBA: [{
                value: data['codClienteDBA'],
                disabled: true
              }],
              setorAtividade: [{
                value: data['setorAtividade'],
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
              dataUltimaVisita: [null],
              instalacoes: [null],
              numFuncionarios: [null],
              limiteCreditoAtual: [data['limiteCredito']],
              limiteCreditoSolicitado: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
              condicaoPagto: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
              nomeVendedor: [{
                value: data['nomeVendedor'],
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
              telefoneVendedor: [{
                value: data['telefoneVendedor'],
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
              gestorVendas: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
              nomeEscritorio: [{
                value: data['nomeEscritorio'],
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
              fornecedores: this.formBuilder.array([]),
              clientes: this.formBuilder.array([]),
              vendasConcentradas: [null],
              bancos: this.formBuilder.array([]),
              previsaoCompraTon: [null],
              previsaoCompraValor: [null],
              faturamentoMedio: [null],
              parecerVendedor: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]]
            });
            this.setFormFornecedoresClientesBancos();
          }
        }, {
          key: "setFormFornecedoresClientesBancos",
          value: function setFormFornecedoresClientesBancos() {
            this.onAddFornecedor();
            this.onAddBanco();
          }
        }, {
          key: "fornecedores",
          get: function get() {
            return this.form.get('fornecedores');
          }
        }, {
          key: "clientes",
          get: function get() {
            return this.form.get('clientes');
          }
        }, {
          key: "bancos",
          get: function get() {
            return this.form.get('bancos');
          }
        }, {
          key: "onAddFornecedor",
          value: function onAddFornecedor() {
            this.fornecedores.push(this.formBuilder.group({
              nome: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
              telefone: [null]
            }));
          }
        }, {
          key: "onAddCliente",
          value: function onAddCliente() {
            this.clientes.push(this.formBuilder.group({
              nome: [null]
            }));
          }
        }, {
          key: "onAddBanco",
          value: function onAddBanco() {
            this.bancos.push(this.formBuilder.group({
              nome: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
              agencia: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
              contaCorrente: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
              telefone: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]]
            }));
          }
        }, {
          key: "onDeleteFornecedor",
          value: function onDeleteFornecedor(index) {
            if (this.fornecedores.length > 1) {
              this.fornecedores.removeAt(index);
            } else {
              this.pnotifyService.notice('Informe ao menos um fornecedor.');
            }
          }
        }, {
          key: "onDeleteCliente",
          value: function onDeleteCliente(index) {
            this.clientes.removeAt(index);
          }
        }, {
          key: "onDeleteBanco",
          value: function onDeleteBanco(index) {
            if (this.bancos.length > 1) {
              this.bancos.removeAt(index);
            } else {
              this.pnotifyService.notice('Informe ao menos um banco.');
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
          key: "onNestedFieldError",
          value: function onNestedFieldError(formGroup, index, field) {
            if (this.onNestedFieldInvalid(formGroup, index, field)) {
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
          key: "onNestedFieldInvalid",
          value: function onNestedFieldInvalid(formGroup, index, field) {
            var nestedForm = this.form.controls[formGroup];
            field = nestedForm.controls[index].get(field);
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
          key: "onNestedFieldRequired",
          value: function onNestedFieldRequired(formGroup, index, field) {
            var required = false;
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
            var nestedForm = this.form.controls[formGroup];

            if (nestedForm.controls[index].get(field).validator) {
              var validationResult = nestedForm.controls[index].get(field).validator(formControl);
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
          key: "onSubmit",
          value: function onSubmit() {
            var _this21 = this;

            if (this.form.valid) {
              this.loaderNavbar = true;
              setTimeout(function () {
                var formData = _this21.form.getRawValue();

                var dataSolicitacao = "".concat(formData['dataSolicitacao'].getDate(), "/").concat(formData['dataSolicitacao'].getMonth() + 1, "/").concat(formData['dataSolicitacao'].getFullYear());
                var dataUltimaVisita;

                if (formData['dataUltimaVisita'] != null) {
                  dataUltimaVisita = "".concat(formData['dataUltimaVisita'].getDate(), "/").concat(formData['dataUltimaVisita'].getMonth() + 1, "/").concat(formData['dataUltimaVisita'].getFullYear());
                }

                _this21.tipoVisao = 'ficha';
                _this21.dataFicha = {
                  razaoSocial: formData['razaoSocial'],
                  dataSolicitacao: dataSolicitacao,
                  codCliente: formData['codCliente'],
                  codClienteDBA: formData['codClienteDBA'],
                  setorAtividade: formData['setorAtividade'],
                  dataUltimaVisita: dataUltimaVisita,
                  instalacoes: formData['instalacoes'],
                  numFuncionarios: formData['numFuncionarios'],
                  limiteCreditoAtual: formData['limiteCreditoAtual'],
                  limiteCreditoSolicitado: formData['limiteCreditoSolicitado'],
                  condicaoPagto: formData['condicaoPagto'],
                  nomeVendedor: formData['nomeVendedor'],
                  telefoneVendedor: formData['telefoneVendedor'],
                  gestorVendas: formData['gestorVendas'],
                  nomeEscritorio: formData['nomeEscritorio'],
                  fornecedores: formData['fornecedores'],
                  clientes: formData['clientes'],
                  bancos: formData['bancos'],
                  vendasConcentradas: formData['vendasConcentradas'],
                  previsaoCompraTon: formData['previsaoCompraTon'],
                  previsaoCompraValor: formData['previsaoCompraValor'],
                  faturamentoMedio: formData['faturamentoMedio'],
                  parecerVendedor: formData['parecerVendedor']
                };
                _this21.formChanged = false;
                _this21.loaderNavbar = false;
              }, 1000);
            }
          }
        }, {
          key: "onCancel",
          value: function onCancel() {
            var _this22 = this;

            this.loaderNavbar = true;
            setTimeout(function () {
              _this22.tipoVisao = 'formulario';
              _this22.loaderNavbar = false;
            }, 1000);
          }
        }, {
          key: "onDownload",
          value: function onDownload() {
            var _this23 = this;

            this.loaderNavbar = true;
            this.pdfService.download('impressao-ficha-pac', "".concat(this.codCliente, "_PropostaAnaliseCredito"));
            setTimeout(function () {
              _this23.loaderNavbar = false;
            }, 500);
          }
        }]);

        return ComercialClientesPropostaAnaliseCreditoComponent;
      }();

      ComercialClientesPropostaAnaliseCreditoComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsLocaleService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"]
        }, {
          type: src_app_shared_services_core_pdf_service__WEBPACK_IMPORTED_MODULE_12__["PdfService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_13__["AtividadesService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_14__["TitleService"]
        }];
      };

      ComercialClientesPropostaAnaliseCreditoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercia-clientes-proposta-analise-credito',
        template: _raw_loader_proposta_analise_credito_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_proposta_analise_credito_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsLocaleService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"], src_app_shared_services_core_pdf_service__WEBPACK_IMPORTED_MODULE_12__["PdfService"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_13__["AtividadesService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_14__["TitleService"]])], ComercialClientesPropostaAnaliseCreditoComponent);
      /***/
    },

    /***/
    "ezd9":
    /*!********************************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/historico-financeiro/resumo/resumo.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: ComercialClientesHistoricoFinanceiroResumoComponent */

    /***/
    function ezd9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialClientesHistoricoFinanceiroResumoComponent", function () {
        return ComercialClientesHistoricoFinanceiroResumoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_resumo_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./resumo.component.html */
      "9Ny1");
      /* harmony import */


      var _resumo_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./resumo.component.scss */
      "4kKV");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-filter-pipe */
      "4muW");
      /* harmony import */


      var _historico_financeiro_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./../historico-financeiro.service */
      "THvH"); // ngx-filter-pipe
      // Services


      var ComercialClientesHistoricoFinanceiroResumoComponent = /*#__PURE__*/function () {
        function ComercialClientesHistoricoFinanceiroResumoComponent(activatedRoute, router, historicoFinanceiroService, modalService, filterPipe) {
          _classCallCheck(this, ComercialClientesHistoricoFinanceiroResumoComponent);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.historicoFinanceiroService = historicoFinanceiroService;
          this.modalService = modalService;
          this.filterPipe = filterPipe;
          this.tableConfig = {
            subtitleBorder: true
          };
          this.sinteticoPendenciasLoaded = false;
          this.sintetico = {
            atrasoPagamento: 0,
            tempoEntrega: 0,
            totalAtraso: 0,
            pagtoAntecipado: 0,
            creditoSeguradora: 0
          };
          this.grupoEconomico = [];
          this.grupoEconomicoLoaded = false;
          this.showPendenciasDetalhes = false;
          this.pendencias = {
            titulos: 0,
            notasDebito: 0,
            notasPromissorias: 0,
            chequesDevolvidos: 0,
            corteDobra: 0,
            reservaBobinas: 0,
            limiteCredito: 0,
            saldo: 0
          };
          this.pedidos = [];
          this.pedidosPagination = [];
          this.pedidosFiltered = [];
          this.pedidosLoaded = false;
          this.maxSize = 8;
          this.itemsPerPage = 10;
          this.visaoGrupoEconomico = false;
          this.queryParams = {
            grupoEconomico: this.visaoGrupoEconomico
          };
        }

        _createClass(ComercialClientesHistoricoFinanceiroResumoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this24 = this;

            this.activatedRoute.queryParams.subscribe(function (queryParams) {
              _this24.activatedRoute.parent.params.subscribe(function (params) {
                var grupoEconomico = false;

                if (queryParams['grupoEconomico'] && queryParams['grupoEconomico'] == 'true') {
                  grupoEconomico = true;
                  _this24.visaoGrupoEconomico = true;
                  _this24.queryParams = {
                    grupoEconomico: _this24.visaoGrupoEconomico
                  };
                }

                _this24.codCliente = params['id'];

                _this24.getResumoSintetico(_this24.codCliente, grupoEconomico);

                _this24.getGrupoEconomico(_this24.codCliente);

                _this24.getPedidos(_this24.codCliente, grupoEconomico);
              });
            });
          }
        }, {
          key: "onChangeGrupoEconomico",
          value: function onChangeGrupoEconomico() {
            this.onLoadingGrupoEconomico();
            this.queryParams = {
              grupoEconomico: this.visaoGrupoEconomico
            };
            this.router.navigate(["/comercial/clientes/historico-financeiro/".concat(this.codCliente, "/resumo")], {
              queryParams: this.queryParams
            });
          }
        }, {
          key: "onLoadingGrupoEconomico",
          value: function onLoadingGrupoEconomico() {
            this.visaoGrupoEconomico = !this.visaoGrupoEconomico;
            this.sinteticoPendenciasLoaded = false;
            this.pedidosLoaded = false;
          }
        }, {
          key: "getResumoSintetico",
          value: function getResumoSintetico(id, grupoEconomico) {
            var _this25 = this;

            this.historicoFinanceiroService.getResumoSintetico(id, grupoEconomico).subscribe(function (response) {
              if (response['responseCode'] === 200) {
                _this25.sintetico = response['result']['sintetico'];
                _this25.pendencias = response['result']['pendencias'];
              }

              _this25.sinteticoPendenciasLoaded = true;
            });
          }
        }, {
          key: "getGrupoEconomico",
          value: function getGrupoEconomico(id) {
            var _this26 = this;

            this.historicoFinanceiroService.getGrupoEconomico(id).subscribe(function (response) {
              if (response['responseCode'] === 200) {
                _this26.grupoEconomico = response['result'];
              }

              _this26.grupoEconomicoLoaded = true;
            });
          }
        }, {
          key: "getPedidos",
          value: function getPedidos(id, grupoEconomico) {
            var _this27 = this;

            this.historicoFinanceiroService.getResumoPedidos(id, grupoEconomico).subscribe(function (response) {
              if (response['responseCode'] === 200) {
                _this27.pedidos = response['result'];
                _this27.pedidosFiltered = response['result'];
                _this27.pedidosPagination = _this27.pedidosFiltered.slice(0, _this27.itemsPerPage);
              }

              _this27.pedidosLoaded = true;
            });
          }
        }, {
          key: "onGrupoEconomico",
          value: function onGrupoEconomico(modalRef) {
            this.modalRef = this.modalService.show(modalRef);
          }
        }, {
          key: "onCloseModalGrupoEconomico",
          value: function onCloseModalGrupoEconomico() {
            this.modalRef.hide();
          }
        }, {
          key: "handleCounter",
          value: function handleCounter(valor) {
            return valor.toFixed(0);
          }
        }, {
          key: "classStatusBorder",
          value: function classStatusBorder(status) {
            var borderClass = '';

            if (status == 'EM ABERTO') {
              borderClass = 'border-success';
            } else if (status == 'QUITADA') {
              borderClass = 'border-primary';
            } else if (status == 'VENCIDA') {
              borderClass = 'border-warning';
            } else if (status == 'PROTESTO') {
              borderClass = 'border-danger';
            }

            return borderClass;
          }
        }, {
          key: "onPageChanged",
          value: function onPageChanged(event) {
            var startItem = (event.page - 1) * event.itemsPerPage;
            var endItem = event.page * event.itemsPerPage;
            this.pedidosPagination = this.pedidosFiltered.slice(startItem, endItem);
          }
        }, {
          key: "onFilter",
          value: function onFilter(value) {
            if (value) {
              this.pedidosFiltered = this.filterPipe.transform(this.pedidos, {
                numDuplicata: value
              });
            } else {
              this.pedidosFiltered = this.pedidos;
            }

            this.pedidosPagination = this.pedidosFiltered.slice(0, this.itemsPerPage);
          }
        }]);

        return ComercialClientesHistoricoFinanceiroResumoComponent;
      }();

      ComercialClientesHistoricoFinanceiroResumoComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _historico_financeiro_service__WEBPACK_IMPORTED_MODULE_7__["ComercialClientesHistoricoFinanceiroService"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"]
        }, {
          type: ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_6__["FilterPipe"]
        }];
      };

      ComercialClientesHistoricoFinanceiroResumoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-clientes-historico-financeiro-resumo',
        template: _raw_loader_resumo_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_resumo_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _historico_financeiro_service__WEBPACK_IMPORTED_MODULE_7__["ComercialClientesHistoricoFinanceiroService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"], ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_6__["FilterPipe"]])], ComercialClientesHistoricoFinanceiroResumoComponent);
      /***/
    },

    /***/
    "ffmo":
    /*!*****************************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/ultimos-precos/ultimos-precos.component.scss ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function ffmo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NsaWVudGVzL3VsdGltb3MtcHJlY29zL3VsdGltb3MtcHJlY29zLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "h7p3":
    /*!********************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/detalhes/detalhes-resolver.guard.ts ***!
      \********************************************************************************/

    /*! exports provided: ComercialClientesDetalhesResolverGuard */

    /***/
    function h7p3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialClientesDetalhesResolverGuard", function () {
        return ComercialClientesDetalhesResolverGuard;
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


      var _detalhes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./detalhes.service */
      "k2l4"); // Services


      var ComercialClientesDetalhesResolverGuard = /*#__PURE__*/function () {
        function ComercialClientesDetalhesResolverGuard(detalhesService) {
          _classCallCheck(this, ComercialClientesDetalhesResolverGuard);

          this.detalhesService = detalhesService;
        }

        _createClass(ComercialClientesDetalhesResolverGuard, [{
          key: "resolve",
          value: function resolve(route) {
            if (route.params && route.params['id']) {
              return this.detalhesService.getDetalhes(route.params['id']);
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
              responseCode: 204
            });
          }
        }]);

        return ComercialClientesDetalhesResolverGuard;
      }();

      ComercialClientesDetalhesResolverGuard.ctorParameters = function () {
        return [{
          type: _detalhes_service__WEBPACK_IMPORTED_MODULE_3__["ComercialClientesDetalheService"]
        }];
      };

      ComercialClientesDetalhesResolverGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_detalhes_service__WEBPACK_IMPORTED_MODULE_3__["ComercialClientesDetalheService"]])], ComercialClientesDetalhesResolverGuard);
      /***/
    },

    /***/
    "iRVN":
    /*!********************************************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/historico-financeiro/historico-financeiro-routing.module.ts ***!
      \********************************************************************************************************/

    /*! exports provided: ComercialHistoricoFinanceiroRoutingModule */

    /***/
    function iRVN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialHistoricoFinanceiroRoutingModule", function () {
        return ComercialHistoricoFinanceiroRoutingModule;
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


      var _clientes_resolver_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../clientes-resolver.guard */
      "NJR3");
      /* harmony import */


      var _historico_financeiro_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./historico-financeiro.component */
      "2x9x");
      /* harmony import */


      var _resumo_resumo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./resumo/resumo.component */
      "ezd9");
      /* harmony import */


      var _detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./detalhes/detalhes.component */
      "HUfV");
      /* harmony import */


      var _materiais_duplicata_materiais_duplicata_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./materiais-duplicata/materiais-duplicata.component */
      "3oZO");
      /* harmony import */


      var _acumulos_mensais_acumulos_mensais_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./acumulos-mensais/acumulos-mensais.component */
      "VgR1");
      /* harmony import */


      var _notas_promissorias_notas_promissorias_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./notas-promissorias/notas-promissorias.component */
      "wdkM");
      /* harmony import */


      var _debitos_debitos_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./debitos/debitos.component */
      "VAxy");
      /* harmony import */


      var _corte_dobra_corte_dobra_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./corte-dobra/corte-dobra.component */
      "QZWA"); // Guards
      // Components


      var routes = [{
        path: ':id',
        component: _historico_financeiro_component__WEBPACK_IMPORTED_MODULE_4__["ComercialClientesHistoricoFinanceiroComponent"],
        resolve: {
          response: _clientes_resolver_guard__WEBPACK_IMPORTED_MODULE_3__["ComercialClientesResolverGuard"]
        },
        children: [{
          path: '',
          redirectTo: 'resumo',
          pathMatch: 'full'
        }, {
          path: 'resumo',
          component: _resumo_resumo_component__WEBPACK_IMPORTED_MODULE_5__["ComercialClientesHistoricoFinanceiroResumoComponent"]
        }, {
          path: 'detalhes',
          component: _detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_6__["ComercialClientesHistoricoFinanceiroDetalhesComponent"]
        }, {
          path: 'materiais-duplicata',
          component: _materiais_duplicata_materiais_duplicata_component__WEBPACK_IMPORTED_MODULE_7__["ComercialClientesHistoricoFinanceiroMateriaisDuplicataComponent"]
        }, {
          path: 'acumulos-mensais',
          component: _acumulos_mensais_acumulos_mensais_component__WEBPACK_IMPORTED_MODULE_8__["ComercialClientesHistoricoFinanceiroAcumulosMensaisComponent"]
        }, {
          path: 'notas-promissorias',
          component: _notas_promissorias_notas_promissorias_component__WEBPACK_IMPORTED_MODULE_9__["ComercialClientesHistoricoFinanceiroNotasPromissoriasComponent"]
        }, {
          path: 'debitos',
          component: _debitos_debitos_component__WEBPACK_IMPORTED_MODULE_10__["ComercialClientesHistoricoFinanceiroDebitosComponent"]
        }, {
          path: 'corte-dobra',
          component: _corte_dobra_corte_dobra_component__WEBPACK_IMPORTED_MODULE_11__["ComercialClientesHistoricoFinanceiroCorteDobraComponent"]
        }]
      }, {
        path: '**',
        redirectTo: '/comercial/home',
        pathMatch: 'full'
      }];

      var ComercialHistoricoFinanceiroRoutingModule = /*#__PURE__*/_createClass(function ComercialHistoricoFinanceiroRoutingModule() {
        _classCallCheck(this, ComercialHistoricoFinanceiroRoutingModule);
      });

      ComercialHistoricoFinanceiroRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ComercialHistoricoFinanceiroRoutingModule);
      /***/
    },

    /***/
    "iqaR":
    /*!********************************************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/historico-financeiro/corte-dobra/corte-dobra.component.scss ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function iqaR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NsaWVudGVzL2hpc3Rvcmljby1maW5hbmNlaXJvL2NvcnRlLWRvYnJhL2NvcnRlLWRvYnJhLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "jIxS":
    /*!********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/clientes/historico-financeiro/acumulos-mensais/acumulos-mensais.component.html ***!
      \********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function jIxS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\r\n  <div class=\"col\">\r\n    <div class=\"d-flex w-100\" *ngIf=\"!acumulosMensaisLoaded\">\r\n      <div class=\"spinner-border spinner-border-sm text-dark my-auto mr-2\"></div>\r\n      <strong>Carga de acumulaciones mensuales...</strong>\r\n    </div>\r\n    <tabset *ngIf=\"acumulosMensaisLoaded\">\r\n      <tab heading=\"Principal\">\r\n        <div class=\"border-left border-right border-bottom p-3\">\r\n          <custom-table *ngIf=\"acumulosMensais.principal.length > 0\">\r\n            <ng-template #thead let-thead>\r\n              <tr>\r\n                <th scope=\"col\" class=\"text-center\">Período</th>\r\n                <th scope=\"col\" class=\"text-center\">Valor acumulado</th>\r\n                <th scope=\"col\" class=\"text-center\">Média atraso</th>\r\n              </tr>\r\n            </ng-template>\r\n            <ng-template #tbody let-tbody>\r\n              <tr *ngFor=\"let acumulo of acumulosMensais.principal\">\r\n                <td class=\"text-center\">{{ acumulo.periodo }}</td>\r\n                <td class=\"text-center\">{{ acumulo.valor | currency:'BRL':'symbol':'1.2-2' }}</td>\r\n                <td class=\"text-center\">{{ acumulo.atraso }} dias</td>\r\n              </tr>\r\n            </ng-template>\r\n          </custom-table>\r\n          <empty-result\r\n            message=\"Nenhuma informação encontrada\"\r\n            *ngIf=\"acumulosMensais.principal.length == 0\">\r\n          </empty-result>\r\n        </div>\r\n      </tab>\r\n      <tab heading=\"Maior fatura\">\r\n        <div class=\"border-left border-right border-bottom p-3\">\r\n          <custom-table *ngIf=\"acumulosMensais.maiorFatura.length > 0\">\r\n            <ng-template #thead let-thead>\r\n              <tr>\r\n                <th scope=\"col\" class=\"text-center\">Núm. Pedido</th>\r\n                <th scope=\"col\" class=\"text-center\">Data</th>\r\n                <th scope=\"col\" class=\"text-center\">Empresa</th>\r\n                <th scope=\"col\" class=\"text-center\">Valor</th>\r\n              </tr>\r\n            </ng-template>\r\n            <ng-template #tbody let-tbody>\r\n              <tr *ngFor=\"let acumulo of acumulosMensais.maiorFatura\">\r\n                <td class=\"text-center\">{{ acumulo.numPedido }}</td>\r\n                <td class=\"text-center\">{{ acumulo.data }}</td>\r\n                <td class=\"text-center\">{{ acumulo.empresa }}</td>\r\n                <td class=\"text-center\">{{ acumulo.valor | currency:'BRL':'symbol':'1.2-2' }}</td>\r\n              </tr>\r\n            </ng-template>\r\n          </custom-table>\r\n          <empty-result\r\n            message=\"Nenhuma informação encontrada\"\r\n            *ngIf=\"acumulosMensais.maiorFatura.length == 0\">\r\n          </empty-result>\r\n        </div>\r\n      </tab>\r\n    </tabset>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "oH+a":
    /*!*********************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/cadastro/dados-faturamento/formulario/formulario-rules-resolver.guard.ts ***!
      \*********************************************************************************************************************/

    /*! exports provided: ComercialClientesCadastroDadosFaturamentoRulesResolverGuard */

    /***/
    function oHA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialClientesCadastroDadosFaturamentoRulesResolverGuard", function () {
        return ComercialClientesCadastroDadosFaturamentoRulesResolverGuard;
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


      var ComercialClientesCadastroDadosFaturamentoRulesResolverGuard = /*#__PURE__*/function () {
        function ComercialClientesCadastroDadosFaturamentoRulesResolverGuard(formRulesService) {
          _classCallCheck(this, ComercialClientesCadastroDadosFaturamentoRulesResolverGuard);

          this.formRulesService = formRulesService;
        }

        _createClass(ComercialClientesCadastroDadosFaturamentoRulesResolverGuard, [{
          key: "resolve",
          value: function resolve() {
            return this.formRulesService.getRules(1);
          }
        }]);

        return ComercialClientesCadastroDadosFaturamentoRulesResolverGuard;
      }();

      ComercialClientesCadastroDadosFaturamentoRulesResolverGuard.ctorParameters = function () {
        return [{
          type: src_app_shared_services_core_form_rules_service__WEBPACK_IMPORTED_MODULE_2__["FormRulesService"]
        }];
      };

      ComercialClientesCadastroDadosFaturamentoRulesResolverGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_core_form_rules_service__WEBPACK_IMPORTED_MODULE_2__["FormRulesService"]])], ComercialClientesCadastroDadosFaturamentoRulesResolverGuard);
      /***/
    },

    /***/
    "pW1C":
    /*!**************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/clientes/historico-financeiro/materiais-duplicata/materiais-duplicata.component.html ***!
      \**************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function pW1C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\r\n  <div class=\"col\">\r\n    <div class=\"d-flex w-100\" *ngIf=\"!duplicataLoaded\">\r\n      <div class=\"spinner-border spinner-border-sm text-dark my-auto mr-2\"></div>\r\n      <strong>Carga de duplicados...</strong>\r\n    </div>\r\n    <tabset *ngIf=\"duplicataLoaded\">\r\n      <tab heading=\"Principal\">\r\n        <div class=\"border-left border-right border-bottom p-3\">\r\n          <div class=\"row mb-4\">\r\n            <div class=\"col\">\r\n              <div class=\"bg-light rounded p-4\">\r\n                <div class=\"mtc-title\">Duplicar</div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-4\">\r\n                    <p><strong>Núm. NF:</strong> {{ principal.duplicata.notaSaida }}</p>\r\n                    <p class=\"mb-0\"><strong>Núm. Pedido:</strong> {{ principal.duplicata.numPedido }}</p>\r\n                  </div>\r\n                  <div class=\"col-md-4\">\r\n                    <p><strong>Data:</strong> {{ principal.duplicata.data }}</p>\r\n                    <p class=\"mb-0\"><strong>Línea:</strong> {{ principal.duplicata.linhaNota }}</p>\r\n                  </div>\r\n                  <div class=\"col-md-4\">\r\n                    <p><strong>Cliente:</strong> {{ principal.duplicata.razaoSocial }}</p>\r\n                    <p class=\"mb-0\"><strong>Vendedor:</strong> {{ principal.duplicata.nomeVendedor }}</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row mb-4\">\r\n            <div class=\"col\">\r\n              <custom-table *ngIf=\"principal.materiais.length > 0\">\r\n                <ng-template #thead let-thead>\r\n                  <tr>\r\n                    <th scope=\"col\" class=\"text-center\">Código</th>\r\n                    <th scope=\"col\" class=\"text-center\">Descripción</th>\r\n                    <th scope=\"col\" class=\"text-center\">Sit. Tributária</th>\r\n                    <th scope=\"col\" class=\"text-center\">Qtde.</th>\r\n                    <th scope=\"col\" class=\"text-center\">Valor unidades</th>\r\n                    <th scope=\"col\" class=\"text-center\">Valor total</th>\r\n                    <th scope=\"col\" class=\"text-center\">Alíquota ICMS</th>\r\n                  </tr>\r\n                </ng-template>\r\n                <ng-template #tbody let-tbody>\r\n                  <tr *ngFor=\"let material of principal.materiais\">\r\n                    <td class=\"text-center\">{{ material.idMaterial }}</td>\r\n                    <td class=\"text-center\">{{ material.nomeMaterial }}</td>\r\n                    <td class=\"text-center\">{{ material.situacaoTributaria }}</td>\r\n                    <td class=\"text-center\">{{ material.quantidade }}</td>\r\n                    <td class=\"text-center\">{{ material.valorUnitario | currency:'BRL':'symbol':'1.2-2' }}</td>\r\n                    <td class=\"text-center\">{{ material.valorTotalItem | currency:'BRL':'symbol':'1.2-2' }}</td>\r\n                    <td class=\"text-center\" *ngIf=\"material.aliquotaIcms > 0\">{{ material.aliquotaIcms | number:'1.2-2' }}%</td>\r\n                    <td class=\"text-center\" *ngIf=\"material.aliquotaIcms == 0\">0,00%</td>\r\n                  </tr>\r\n                </ng-template>\r\n              </custom-table>\r\n              <empty-result\r\n                message=\"Nenhuma informação encontrada\"\r\n                *ngIf=\"principal.materiais.length == 0\">\r\n              </empty-result>\r\n            </div>\r\n          </div>\r\n          <div class=\"row mb-4\">\r\n            <div class=\"col-md-6\">\r\n              <div class=\"bg-light rounded p-4\">\r\n                <div class=\"mtc-title\">Condiciones de pago</div>\r\n                <p class=\"mb-0\"><strong></strong>{{ principal.materiais[0]['condicaoPagamento'] }}</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <div class=\"bg-light rounded p-4\">\r\n                <div class=\"mtc-title\">Total productos</div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6\">\r\n                    <p class=\"mb-0\"><strong>Cantidad:</strong> {{ principal.total.peso | number:'1.3-3' }} TON</p>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <p class=\"mb-0\"><strong>Valor:</strong> {{ principal.total.valor | currency:'BRL':'symbol':'1.2-2' }}</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              <div class=\"bg-light rounded p-4\">\r\n                <div class=\"mtc-title\">Lugar de entrega</div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6\">\r\n                    <p><strong>Referencia:</strong> {{ principal.entrega.referencia }}</p>\r\n                    <p class=\"mb-0\"><strong>Endereço:</strong> {{ principal.entrega.logradouro }}</p>\r\n                  </div>\r\n                  <div class=\"col-md-4\">\r\n                    <p><strong>Ciudad:</strong> {{ principal.entrega.cidade }}</p>\r\n                    <p class=\"mb-0\"><strong>Bairro:</strong> {{ principal.entrega.bairro }}</p>\r\n                  </div>\r\n                  <div class=\"col-md-2\">\r\n                    <p class=\"mb-0\"><strong>UF:</strong> {{ principal.entrega.uf }}</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </tab>\r\n      <tab heading=\"Histórico de cobranças\">\r\n        <div class=\"border-left border-right border-bottom p-3\">\r\n          <div class=\"row mb-4\">\r\n            <div class=\"col\">\r\n              <div class=\"bg-light rounded p-4\">\r\n                <div class=\"mtc-title\">Duplicar</div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-4\">\r\n                    <p><strong>Núm. NF:</strong> {{ principal.duplicata.notaSaida }}</p>\r\n                    <p class=\"mb-0\"><strong>Núm. Pedido:</strong> {{ principal.duplicata.numPedido }}</p>\r\n                  </div>\r\n                  <div class=\"col-md-4\">\r\n                    <p><strong>Data:</strong> {{ principal.duplicata.data }}</p>\r\n                    <p class=\"mb-0\"><strong>Linha:</strong> {{ principal.duplicata.linhaNota }}</p>\r\n                  </div>\r\n                  <div class=\"col-md-4\">\r\n                    <p><strong>Cliente:</strong> {{ principal.duplicata.razaoSocial }}</p>\r\n                    <p class=\"mb-0\"><strong>Vendedor:</strong> {{ principal.duplicata.nomeVendedor }}</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row mb-4\">\r\n            <div class=\"col\">\r\n              <custom-table *ngIf=\"historicoCobrancas.length > 0\">\r\n                <ng-template #thead let-thead>\r\n                  <tr>\r\n                    <th scope=\"col\" class=\"text-center\">Num. Lanzamiento</th>\r\n                    <th scope=\"col\" class=\"text-center\">Situación</th>\r\n                    <th scope=\"col\" class=\"text-center\">Fecha</th>\r\n                    <th scope=\"col\" class=\"text-center\">Usuário</th>\r\n                    <th scope=\"col\" class=\"text-center\">Comentário</th>\r\n                  </tr>\r\n                </ng-template>\r\n                <ng-template #tbody let-tbody>\r\n                  <tr *ngFor=\"let cobranca of historicoCobrancas\">\r\n                    <td class=\"text-center\">{{ cobranca.numLancamento }}</td>\r\n                    <td class=\"text-center\">{{ cobranca.situacao }}</td>\r\n                    <td class=\"text-center\">{{ cobranca.data }}</td>\r\n                    <td class=\"text-center\">{{ cobranca.nome }}</td>\r\n                    <td class=\"text-center\">{{ cobranca.comentario }}</td>\r\n                  </tr>\r\n                </ng-template>\r\n              </custom-table>\r\n              <empty-result\r\n                message=\"Nenhuma informação encontrada\"\r\n                *ngIf=\"historicoCobrancas.length == 0\">\r\n              </empty-result>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <div class=\"bg-light rounded p-4\">\r\n                <div class=\"mtc-title\">Colección de la empresa</div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6\">\r\n                    <p class=\"mb-0\"><strong>Código:</strong> Nenhuma informação</p>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <p class=\"mb-0\"><strong>Descripcion:</strong> Nenhuma informação</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <div class=\"bg-light rounded p-4\">\r\n                <div class=\"mtc-title\">Vencimento original</div>\r\n                <div class=\"row\">\r\n                  <div class=\"col\">\r\n                    <p class=\"mb-0\">No hay información</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </tab>\r\n      <tab heading=\"Ocorrências da duplicata\">\r\n        <div class=\"border-left border-right border-bottom p-3\">\r\n          <div class=\"row mb-4\">\r\n            <div class=\"col\">\r\n              <div class=\"bg-light rounded p-4\">\r\n                <div class=\"mtc-title\">Duplicar</div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-4\">\r\n                    <p><strong>Núm. NF:</strong> {{ principal.duplicata.notaSaida }}</p>\r\n                    <p class=\"mb-0\"><strong>Núm. Pedido:</strong> {{ principal.duplicata.numPedido }}</p>\r\n                  </div>\r\n                  <div class=\"col-md-4\">\r\n                    <p><strong>Data:</strong> {{ principal.duplicata.data }}</p>\r\n                    <p class=\"mb-0\"><strong>Linha:</strong> {{ principal.duplicata.linhaNota }}</p>\r\n                  </div>\r\n                  <div class=\"col-md-4\">\r\n                    <p><strong>Cliente:</strong> {{ principal.duplicata.razaoSocial }}</p>\r\n                    <p class=\"mb-0\"><strong>Vendedor:</strong> {{ principal.duplicata.nomeVendedor }}</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              <custom-table *ngIf=\"ocorrenciasDuplicatas.length > 0\">\r\n                <ng-template #thead let-thead>\r\n                  <tr>\r\n                    <th scope=\"col\" class=\"text-center\">Duplicata</th>\r\n                    <th scope=\"col\" class=\"text-center\">Operação</th>\r\n                    <th scope=\"col\" class=\"text-center\">Data</th>\r\n                    <th scope=\"col\" class=\"text-center\">Descrição</th>\r\n                  </tr>\r\n                </ng-template>\r\n                <ng-template #tbody let-tbody>\r\n                  <tr *ngFor=\"let ocorrencia of ocorrenciasDuplicatas\">\r\n                    <td class=\"text-center\">{{ ocorrencia.numDuplicata }}</td>\r\n                    <td class=\"text-center\">{{ ocorrencia.operacao }}</td>\r\n                    <td class=\"text-center\">{{ ocorrencia.data }}</td>\r\n                    <td class=\"text-center\">{{ ocorrencia.descricao }}</td>\r\n                  </tr>\r\n                </ng-template>\r\n              </custom-table>\r\n              <empty-result\r\n                message=\"No hay información encontrada\"\r\n                *ngIf=\"ocorrenciasDuplicatas.length == 0\">\r\n              </empty-result>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </tab>\r\n      <tab heading=\"Ocorrências comerciais\">\r\n        <div class=\"border-left border-right border-bottom p-3\">\r\n          <div class=\"row mb-4\">\r\n            <div class=\"col\">\r\n              <div class=\"bg-light rounded p-4\">\r\n                <div class=\"mtc-title\">Duplicata</div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-4\">\r\n                    <p><strong>Núm. NF:</strong> {{ principal.duplicata.notaSaida }}</p>\r\n                    <p class=\"mb-0\"><strong>Núm. Pedido:</strong> {{ principal.duplicata.numPedido }}</p>\r\n                  </div>\r\n                  <div class=\"col-md-4\">\r\n                    <p><strong>Data:</strong> {{ principal.duplicata.data }}</p>\r\n                    <p class=\"mb-0\"><strong>Linha:</strong> {{ principal.duplicata.linhaNota }}</p>\r\n                  </div>\r\n                  <div class=\"col-md-4\">\r\n                    <p><strong>Cliente:</strong> {{ principal.duplicata.razaoSocial }}</p>\r\n                    <p class=\"mb-0\"><strong>Vendedor:</strong> {{ principal.duplicata.nomeVendedor }}</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              <custom-table *ngIf=\"ocorrenciasComerciais.length > 0\">\r\n                <ng-template #thead let-thead>\r\n                  <tr>\r\n                    <th scope=\"col\" class=\"text-center\">Número</th>\r\n                    <th scope=\"col\" class=\"text-center\">Data</th>\r\n                    <th scope=\"col\" class=\"text-center\">Hora</th>\r\n                    <th scope=\"col\" class=\"text-center\">Usuário</th>\r\n                    <th scope=\"col\" class=\"text-center\">Operação</th>\r\n                    <th scope=\"col\" class=\"text-center\">Situação</th>\r\n                  </tr>\r\n                </ng-template>\r\n                <ng-template #tbody let-tbody>\r\n                  <tr *ngFor=\"let ocorrencia of ocorrenciasComerciais\">\r\n                    <td class=\"text-center\">{{ ocorrencia.numero }}</td>\r\n                    <td class=\"text-center\">{{ ocorrencia.data }}</td>\r\n                    <td class=\"text-center\">{{ ocorrencia.hora }}</td>\r\n                    <td class=\"text-center\">{{ ocorrencia.nome }}</td>\r\n                    <td class=\"text-center\">{{ ocorrencia.operacao }}</td>\r\n                    <td class=\"text-center\">{{ ocorrencia.situacao }}</td>\r\n                  </tr>\r\n                </ng-template>\r\n              </custom-table>\r\n              <empty-result\r\n                message=\"No hay información encontrada\"\r\n                *ngIf=\"ocorrenciasComerciais.length == 0\">\r\n              </empty-result>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </tab>\r\n    </tabset>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "ptMO":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/clientes/lista/lista.component.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ptMO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<app-header appTitle=\"Busqueda de clientes\">\r\n  <!-- <button\r\n    type=\"button\"\r\n    [routerLink]=\"['../pre-cadastro']\">\r\n    Adicionar\r\n  </button> -->\r\n  <button type=\"button\" (click)=\"onFilter()\">Filtrar</button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <div class=\"row justify-content-center mb-2\">\r\n    <div class=\"col-lg-6\">\r\n      <ul class=\"list-unstyled mb-0 d-flex justify-content-around\">\r\n        <li class=\"text-center hover px-3\" (click)=\"filterByStatus('Ativo')\">\r\n          <h6 class=\"text-muted font-weight-light\">Activos</h6>\r\n          <div class=\"text-success\">\r\n            <h4>\r\n              <strong\r\n                counto\r\n                [step]=\"30\"\r\n                [countTo]=\"ativos\"\r\n                [countFrom]=\"0\"\r\n                [duration]=\"3\"\r\n                (countoChange)=\"countoAtivos = $event\"\r\n              >\r\n                {{ handleCounter(countoAtivos) }}\r\n              </strong>\r\n            </h4>\r\n          </div>\r\n        </li>\r\n        <li class=\"text-center hover px-3\" (click)=\"filterByStatus('Inativo')\">\r\n          <h6 class=\"text-muted font-weight-light\">Inactivos</h6>\r\n          <div class=\"text-danger\">\r\n            <h4>\r\n              <strong\r\n                counto\r\n                [step]=\"30\"\r\n                [countTo]=\"inativos\"\r\n                [countFrom]=\"0\"\r\n                [duration]=\"3\"\r\n                (countoChange)=\"countoInativos = $event\"\r\n              >\r\n                {{ handleCounter(countoInativos) }}\r\n              </strong>\r\n            </h4>\r\n          </div>\r\n        </li>\r\n        <li class=\"text-center hover px-3\" (click)=\"filterByStatus('Potenci')\">\r\n          <h6 class=\"text-muted font-weight-light\">Potencial</h6>\r\n          <div class=\"text-primary\">\r\n            <h4>\r\n              <strong\r\n                counto\r\n                [step]=\"30\"\r\n                [countTo]=\"potencial\"\r\n                [countFrom]=\"0\"\r\n                [duration]=\"3\"\r\n                (countoChange)=\"countoPotencial = $event\"\r\n              >\r\n                {{ handleCounter(countoPotencial) }}\r\n              </strong>\r\n            </h4>\r\n          </div>\r\n        </li>\r\n        <li class=\"text-center hover px-3\" (click)=\"filterByStatus('Arquivo')\">\r\n          <h6 class=\"text-muted font-weight-light\">Archivados</h6>\r\n          <div class=\"text-secondary\">\r\n            <h4>\r\n              <strong\r\n                counto\r\n                [step]=\"30\"\r\n                [countTo]=\"arquivados\"\r\n                [countFrom]=\"0\"\r\n                [duration]=\"3\"\r\n                (countoChange)=\"countoArquivados = $event\"\r\n              >\r\n                {{ handleCounter(countoArquivados) }}\r\n              </strong>\r\n            </h4>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <advanced-filter>\r\n    <form [formGroup]=\"formFilter\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-lg-3\">\r\n          <label for=\"buscarPor\">Buscar por</label>\r\n          <select\r\n            class=\"form-control custom-select\"\r\n            id=\"buscarPor\"\r\n            formControlName=\"buscarPor\"\r\n          >\r\n            <option value=\"1\">Código, nombre o razon social</option>\r\n            <option value=\"2\">C.I. o NIT</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group col-lg-3\">\r\n          <label for=\"pesquisa\">Termino de busqueda</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            formControlName=\"pesquisa\"\r\n            (keydown.enter)=\"onFilter()\"\r\n          />\r\n        </div>\r\n        <div class=\"form-group col-lg-3\">\r\n          <label for=\"situacao\">Situacion</label>\r\n          <select\r\n            class=\"form-control custom-select\"\r\n            id=\"situacao\"\r\n            formControlName=\"situacao\"\r\n          >\r\n            <option value=\"Ativo\">Activos</option>\r\n            <option value=\"Inativo\">Inactivos</option>\r\n            <option value=\"Potenci\">Potenciales</option>\r\n            <option value=\"Arquivo\">Archivados</option>\r\n            <option value=\"T\">Todos</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group col-lg-3\">\r\n          <label for=\"setorAtividade\">Sector empresarial</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"false\"\r\n            [items]=\"setorAtividades\"\r\n            [virtualScroll]=\"true\"\r\n            labelForId=\"setorAtividade\"\r\n            bindLabel=\"descricao\"\r\n            bindValue=\"id\"\r\n            formControlName=\"setorAtividade\"\r\n          >\r\n          </ng-select>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-lg-3 mb-lg-0\">\r\n          <label for=\"tipoPessoa\">Tipo de persona</label>\r\n          <select\r\n            class=\"form-control custom-select\"\r\n            id=\"tipoPessoa\"\r\n            formControlName=\"tipoPessoa\"\r\n          >\r\n            <option value=\"F\">Persona física</option>\r\n            <option value=\"J\">Persona jurídica</option>\r\n            <option value=\"T\">Todos</option>\r\n          </select>\r\n        </div>\r\n        <!-- <div class=\"form-group col-lg-3 mb-lg-0\">\r\n          <label for=\"grupoEconomico\">Esta en grupo economico</label>\r\n          <select\r\n            class=\"form-control custom-select\"\r\n            id=\"grupoEconomico\"\r\n            formControlName=\"grupoEconomico\">\r\n            <option value=\"S\">Si</option>\r\n            <option value=\"N\">No</option>\r\n            <option value=\"T\">Todos</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group col-lg-3 mb-lg-0\">\r\n          <label for=\"segurado\">Asegurado</label>\r\n          <select\r\n            class=\"form-control custom-select\"\r\n            id=\"segurado\"\r\n            formControlName=\"segurado\">\r\n            <option value=\"S\">Si</option>\r\n            <option value=\"N\">No</option>\r\n            <option value=\"T\">Todos</option>\r\n          </select>\r\n        </div> -->\r\n        <!-- <div class=\"form-group col-lg-2 mb-lg-0\">\r\n          <label for=\"carteira\">Cartera</label>\r\n          <select\r\n            class=\"form-control custom-select\"\r\n            id=\"carteira\"\r\n            formControlName=\"carteira\">\r\n            <option value=\"S\" selected>Mi cartera</option>\r\n            <option value=\"T\">Todos</option>\r\n          </select>\r\n        </div> -->\r\n        <div class=\"form-group col-lg-1 mb-lg-0\">\r\n          <label for=\"registros\">Registros</label>\r\n          <select\r\n            class=\"form-control custom-select\"\r\n            id=\"registros\"\r\n            formControlName=\"registros\"\r\n          >\r\n            <option>10</option>\r\n            <option>25</option>\r\n            <option>50</option>\r\n            <option>100</option>\r\n            <option>200</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </advanced-filter>\r\n  <div\r\n    class=\"row mt-3\"\r\n    *ngIf=\"\r\n      dataLoaded && searchSubmitted && clientes.length == 0 && buscandoPor != 2\r\n    \"\r\n  >\r\n    <div class=\"col-12\">\r\n      <empty-result\r\n        message=\"No se encontraron clientes para esta búsqueda.\"\r\n        class=\"py-4\"\r\n      ></empty-result>\r\n    </div>\r\n  </div>\r\n  <div\r\n    class=\"row mt-3\"\r\n    *ngIf=\"\r\n      dataLoaded && searchSubmitted && clientes.length == 0 && buscandoPor == 2\r\n    \"\r\n  >\r\n    <div class=\"col-7 d-flex justify-content-end w-100 pr-0\">\r\n      <empty-result\r\n        message=\"No se encontraron clientes para esta búsqueda.\"\r\n        class=\"py-4\"\r\n      ></empty-result>\r\n    </div>\r\n    <div class=\"col-5 d-flex w-100 pl-1\">\r\n      <a\r\n        [routerLink]=\"['../pre-cadastro']\"\r\n        [queryParams]=\"onPreCadastroCpfCnpj()\"\r\n        class=\"my-auto\"\r\n      >\r\n        <strong>Pulse aquí para registrarse..</strong>\r\n      </a>\r\n    </div>\r\n  </div>\r\n  <div class=\"row mt-4\" *ngIf=\"dataLoaded && clientes.length > 0\">\r\n    <div\r\n      [ngClass]=\"{ 'col-12': !showDetailPanel, 'col-7 pr-0': showDetailPanel }\"\r\n    >\r\n      <custom-table [config]=\"tableConfig\">\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n            <th scope=\"col\"></th>\r\n            <th\r\n              scope=\"col\"\r\n              class=\"text-center hover\"\r\n              (click)=\"setOrderBy('codigo_cliente')\"\r\n            >\r\n              <thead-sorter\r\n                value=\"Código Cliente\"\r\n                [active]=\"orderBy == 'codigo_cliente'\"\r\n                [sort]=\"orderType\"\r\n              ></thead-sorter>\r\n            </th>\r\n            <th\r\n              scope=\"col\"\r\n              class=\"text-center hover\"\r\n              (click)=\"setOrderBy('cpf')\"\r\n            >\r\n              <thead-sorter\r\n                value=\"CI/NIT\"\r\n                [active]=\"orderBy == 'cpf'\"\r\n                [sort]=\"orderType\"\r\n              ></thead-sorter>\r\n            </th>\r\n            <th scope=\"col\" class=\"hover\" (click)=\"setOrderBy('nomeFantasia')\">\r\n              <thead-sorter\r\n                value=\"Nombre y apelllido\"\r\n                [active]=\"orderBy == 'nomeFantasia'\"\r\n                [sort]=\"orderType\"\r\n              ></thead-sorter>\r\n            </th>\r\n            <th\r\n              scope=\"col\"\r\n              class=\"hover\"\r\n              (click)=\"setOrderBy('razaoSocial')\"\r\n              *ngIf=\"!showDetailPanel\"\r\n            >\r\n              <thead-sorter\r\n                value=\"Razon Social\"\r\n                [active]=\"orderBy == 'razaoSocial'\"\r\n                [sort]=\"orderType\"\r\n              ></thead-sorter>\r\n            </th>\r\n            <th scope=\"col\"></th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr\r\n            *ngFor=\"let cliente of clientes\"\r\n            [class.table-active]=\"cliente.codigo_cliente == clienteSelecionado\"\r\n          >\r\n            <td\r\n              class=\"text-center hover\"\r\n              [ngClass]=\"classStatusBorder(cliente.situacao)\"\r\n              (click)=\"viewRegister(cliente)\"\r\n            >\r\n              <i\r\n                class=\"text-black-50 far fa-check-square mr-3\"\r\n                *ngIf=\"cliente.segurado == 0\"\r\n                tooltip=\"Cliente no asegurado\"\r\n                placement=\"right\"\r\n              ></i>\r\n              <i\r\n                class=\"text-warning fas fa-check-square mr-3\"\r\n                *ngIf=\"cliente.segurado > 0\"\r\n                tooltip=\"Cliente asegurado\"\r\n                placement=\"right\"\r\n              ></i>\r\n              <i\r\n                class=\"text-black-50 far fa-folder-open\"\r\n                *ngIf=\"cliente.grupoEconomico == 0\"\r\n                tooltip=\"No hace parte de grupo economico\"\r\n                placement=\"right\"\r\n              ></i>\r\n              <i\r\n                class=\"text-warning fas fa-folder-open\"\r\n                *ngIf=\"cliente.grupoEconomico > 0\"\r\n                tooltip=\"Pertenece a un grupo economico\"\r\n                placement=\"right\"\r\n              ></i>\r\n            </td>\r\n            <td class=\"text-center hover\" (click)=\"viewRegister(cliente)\">\r\n              {{ cliente.codigo_cliente }}\r\n            </td>\r\n            <td class=\"text-center hover\" (click)=\"viewRegister(cpf)\">\r\n              {{ cliente.cpf }}\r\n            </td>\r\n            <td class=\"hover\" (click)=\"viewRegister(cliente)\">\r\n              {{ cliente.nomeFantasia | uppercase }}\r\n            </td>\r\n            <td\r\n              class=\"hover\"\r\n              (click)=\"viewRegister(cliente)\"\r\n              *ngIf=\"!showDetailPanel\"\r\n            >\r\n              {{ cliente.razaoSocial | uppercase }}\r\n            </td>\r\n            <td>\r\n              <span\r\n                tooltip=\"Datos registrados\"\r\n                placement=\"left\"\r\n                container=\"body\"\r\n              >\r\n                <button\r\n                  type=\"button\"\r\n                  class=\"btn-icon-sm\"\r\n                  (click)=\"viewDetails(cliente)\"\r\n                >\r\n                  <i class=\"fas fa-user\"></i>\r\n                </button>\r\n              </span>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n      <div\r\n        class=\"d-flex justify-content-center mt-3\"\r\n        *ngIf=\"clientes[0]['total'] > itemsPerPage\"\r\n      >\r\n        <pagination\r\n          [maxSize]=\"maxSize\"\r\n          [(totalItems)]=\"totalItems\"\r\n          (pageChanged)=\"onPageChanged($event)\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPage\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\"\r\n        >\r\n        </pagination>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-5\" [hidden]=\"!showDetailPanel\">\r\n      <div class=\"sticky-top\">\r\n        <detail-panel>\r\n          <tabset>\r\n            <tab heading=\"Datos registrados\">\r\n              <div class=\"border-right border-left border-bottom px-3 pt-3\">\r\n                <div *ngIf=\"dadosCadastraisLoaded && !dadosCadastraisEmpty\">\r\n                  <div class=\"form-row\">\r\n                    <div\r\n                      class=\"form-group col-lg-6\"\r\n                      *ngIf=\"dadosCadastrais.tipoPessoa == 'F'\"\r\n                    >\r\n                      <label>C.I. o NIT</label>\r\n                      <div *ngIf=\"dadosCadastrais.cpf == null\">\r\n                        NO INFORMADO\r\n                      </div>\r\n                      <div *ngIf=\"dadosCadastrais.cpf != null\">\r\n                        {{ dadosCadastrais.cpf }}\r\n                      </div>\r\n                    </div>\r\n                    <div\r\n                      class=\"form-group col-lg-6\"\r\n                      *ngIf=\"dadosCadastrais.tipoPessoa == 'J'\"\r\n                    >\r\n                      <label>CNPJ</label>\r\n                      <div *ngIf=\"dadosCadastrais.cnpj == null\">\r\n                        NO INFORMADO\r\n                      </div>\r\n                      <div *ngIf=\"dadosCadastrais.cnpj != null\">\r\n                        {{ dadosCadastrais.cnpj }}\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group col-lg-6\">\r\n                      <label>Nombre</label>\r\n                      <div *ngIf=\"dadosCadastrais.nomeFantasia == null\">\r\n                        NO INFORMADO\r\n                      </div>\r\n                      <div *ngIf=\"dadosCadastrais.nomeFantasia != null\">\r\n                        {{ dadosCadastrais.nomeFantasia }}\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-row\">\r\n                    <div class=\"form-group col\">\r\n                      <label>Razon social</label>\r\n                      <div *ngIf=\"dadosCadastrais.razaoSocial == null\">\r\n                        NO INFORMADO\r\n                      </div>\r\n                      <div *ngIf=\"dadosCadastrais.razaoSocial != null\">\r\n                        {{ dadosCadastrais.razaoSocial }}\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-row\">\r\n                    <div class=\"form-group col\">\r\n                      <label>Direccion</label>\r\n                      <div *ngIf=\"dadosCadastrais.endereco == null\">\r\n                        NO INFORMADO\r\n                      </div>\r\n                      <div *ngIf=\"dadosCadastrais.endereco != null\">\r\n                        {{ dadosCadastrais.endereco }}\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-row\">\r\n                    <div class=\"form-group col-lg-6\">\r\n                      <label>Barrio</label>\r\n                      <div *ngIf=\"dadosCadastrais.bairro == null\">\r\n                        NO INFORMADO\r\n                      </div>\r\n                      <div *ngIf=\"dadosCadastrais.bairro != null\">\r\n                        {{ dadosCadastrais.bairro }}\r\n                      </div>\r\n                    </div>\r\n                    <!-- <div class=\"form-group col-lg-6\">\r\n                      <label>CEP</label>\r\n                      <div *ngIf=\"dadosCadastrais.cep == null\">NO INFORMADO</div>\r\n                      <div *ngIf=\"dadosCadastrais.cep != null\">{{ dadosCadastrais.cep }}</div>\r\n                    </div> -->\r\n                  </div>\r\n                  <div class=\"form-row\">\r\n                    <div class=\"form-group col-lg-6\">\r\n                      <label>Ciudad</label>\r\n                      <div *ngIf=\"dadosCadastrais.cidade == null\">\r\n                        NO INFORMADO\r\n                      </div>\r\n                      <div *ngIf=\"dadosCadastrais.cidade != null\">\r\n                        {{ dadosCadastrais.cidade }}\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group col-lg-6\">\r\n                      <label>Departamento</label>\r\n                      <div *ngIf=\"dadosCadastrais.uf == null\">NO INFORMADO</div>\r\n                      <div *ngIf=\"dadosCadastrais.uf != null\">\r\n                        {{ dadosCadastrais.uf }}\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-row\">\r\n                    <div class=\"form-group col\">\r\n                      <label>Asegurado</label>\r\n                      <div *ngIf=\"dadosCadastrais.segurado != ''\">Si</div>\r\n                      <div *ngIf=\"dadosCadastrais.segurado == ''\">NO</div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-row\">\r\n                    <div class=\"form-group col-lg-6\">\r\n                      <label>Vendedor</label>\r\n                      <div *ngIf=\"dadosCadastrais.vendedor == null\">\r\n                        NO INFORMADO\r\n                      </div>\r\n                      <div *ngIf=\"dadosCadastrais.vendedor != null\">\r\n                        {{ dadosCadastrais.vendedor }}\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group col-lg-6\">\r\n                      <label>Sucursal</label>\r\n                      <div *ngIf=\"dadosCadastrais.escritorio == null\">\r\n                        NO INFORMADO\r\n                      </div>\r\n                      <div *ngIf=\"dadosCadastrais.escritorio != null\">\r\n                        {{ dadosCadastrais.escritorio }}\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-row\">\r\n                    <div\r\n                      class=\"form-group col-lg-4\"\r\n                      *ngIf=\"\r\n                        dadosCadastrais.codSAP != '' &&\r\n                        dadosCadastrais.codSAP != null\r\n                      \"\r\n                    >\r\n                      <label>Código DBA</label>\r\n                      <div>{{ dadosCadastrais.codSAP }}</div>\r\n                    </div>\r\n                    <div\r\n                      class=\"form-group col-lg-4\"\r\n                      *ngIf=\"\r\n                        dadosCadastrais.escritorioDba != '' &&\r\n                        dadosCadastrais.escritorioDba != null\r\n                      \"\r\n                    >\r\n                      <label>Sucursal</label>\r\n                      <div>{{ dadosCadastrais.escritorioDba }}</div>\r\n                    </div>\r\n                    <div\r\n                      class=\"form-group col-lg-4\"\r\n                      *ngIf=\"\r\n                        dadosCadastrais.ultimaCompraDba != '' &&\r\n                        dadosCadastrais.ultimaCompraDba != null\r\n                      \"\r\n                    >\r\n                      <label>Última compra</label>\r\n                      <div>{{ dadosCadastrais.ultimaCompraDba }}</div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div\r\n                  class=\"mb-3\"\r\n                  *ngIf=\"dadosCadastraisLoaded && dadosCadastraisEmpty\"\r\n                >\r\n                  <empty-result\r\n                    message=\"Nenhuma informação encontrada\"\r\n                  ></empty-result>\r\n                </div>\r\n                <div\r\n                  class=\"d-flex justify-content-center mb-3\"\r\n                  *ngIf=\"!dadosCadastraisLoaded\"\r\n                >\r\n                  <div class=\"spinner-border text-dark\"></div>\r\n                </div>\r\n              </div>\r\n            </tab>\r\n            <tab heading=\"Contactos\">\r\n              <div class=\"border-right border-left border-bottom px-3 pt-3\">\r\n                <div *ngIf=\"contatosLoaded && !contatosEmpty\">\r\n                  <div class=\"form-row\" *ngFor=\"let contato of contatos\">\r\n                    <div class=\"form-group col\">\r\n                      <label>{{ contato.tipoContato }}</label>\r\n                      <div>\r\n                        <span\r\n                          *ngIf=\"contato.nomeContato.length > 1\"\r\n                          class=\"mr-1\"\r\n                          >{{ contato.nomeContato }} :</span\r\n                        >\r\n                        <span\r\n                          *ngIf=\"\r\n                            contato.tipoContato != 'Email NFe' &&\r\n                            contato.tipoContato != 'E-mail NFe' &&\r\n                            contato.tipoContato != 'MalaDireta' &&\r\n                            contato.tipoContato != 'E-Mail'\r\n                          \"\r\n                        >\r\n                          {{ contato.contato }}\r\n                        </span>\r\n                        <span\r\n                          *ngIf=\"\r\n                            contato.tipoContato == 'Email NFe' ||\r\n                            contato.tipoContato == 'E-mail NFe' ||\r\n                            contato.tipoContato == 'MalaDireta' ||\r\n                            contato.tipoContato == 'E-Mail'\r\n                          \"\r\n                        >\r\n                          <a [href]=\"'mailto:' + contato.contato\">{{\r\n                            contato.contato | lowercase\r\n                          }}</a>\r\n                        </span>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"mb-3\" *ngIf=\"contatosLoaded && contatosEmpty\">\r\n                  <empty-result\r\n                    message=\"Ningun contacto encontrado\"\r\n                  ></empty-result>\r\n                </div>\r\n                <div\r\n                  class=\"d-flex justify-content-center mb-3\"\r\n                  *ngIf=\"!contatosLoaded\"\r\n                >\r\n                  <div class=\"spinner-border text-dark\"></div>\r\n                </div>\r\n              </div>\r\n            </tab>\r\n          </tabset>\r\n        </detail-panel>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</app-body>\r\n";
      /***/
    },

    /***/
    "qh7L":
    /*!*********************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/lista/lista.component.ts ***!
      \*********************************************************************/

    /*! exports provided: ComercialClientesListaComponent */

    /***/
    function qh7L(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialClientesListaComponent", function () {
        return ComercialClientesListaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lista.component.html */
      "ptMO");
      /* harmony import */


      var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lista.component.scss */
      "X6qe");
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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/modules/comercial/services/clientes.service */
      "8ouN");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var _cadastro_dados_faturamento_formulario_formulario_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../cadastro/dados-faturamento/formulario/formulario.service */
      "qdc5");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS");
      /* harmony import */


      var src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/templates/detail-panel/detal-panel.service */
      "gIxL"); // Services


      var ComercialClientesListaComponent = /*#__PURE__*/function () {
        function ComercialClientesListaComponent(activatedRoute, router, clientesService, formBuilder, pnotifyService, atividadesService, dadosFaturamentoService, titleService, detailPanelService) {
          _classCallCheck(this, ComercialClientesListaComponent);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.clientesService = clientesService;
          this.formBuilder = formBuilder;
          this.pnotifyService = pnotifyService;
          this.atividadesService = atividadesService;
          this.dadosFaturamentoService = dadosFaturamentoService;
          this.titleService = titleService;
          this.detailPanelService = detailPanelService;
          this.loaderNavbar = false;
          this.breadCrumbTree = [{
            descricao: 'Home',
            routerLink: '/comercial/home'
          }, {
            descricao: 'Busqueda de clientes'
          }];
          this.tableConfig = {
            subtitleBorder: true
          };
          this.showDetailPanel = false;
          this.setorAtividades = [{
            id: 'T',
            descricao: 'TODOS'
          }];
          this.dataLoaded = false;
          this.dadosCadastraisLoaded = false;
          this.dadosCadastraisEmpty = false;
          this.contatosLoaded = false;
          this.contatosEmpty = false;
          this.searchSubmitted = false;
          this.showAdvancedFilter = true;
          this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
          this.matricula = this.currentUser['info']['matricula'];
          this.ativos = 0;
          this.inativos = 0;
          this.potencial = 0;
          this.arquivados = 0;
          this.orderBy = 'codCliente';
          this.orderType = 'desc';
          this.maxSize = 10;
          this.itemsPerPage = 50;
          this.currentPage = 1;
          this.totalItems = 0;
          this.clientes = [];
          this.clientesPagination = [];
          this.dadosCadastrais = {};
          this.contatos = [];
          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialClientesListaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registrarAcesso();
            this.getFormFilters();
            this.setFormFilter();
            this.titleService.setTitle('Busqueda de clientes');
            this.onDetailPanelEmitter();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.showDetailPanelSubscription.unsubscribe();
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "onDetailPanelEmitter",
          value: function onDetailPanelEmitter() {
            var _this28 = this;

            this.showDetailPanelSubscription = this.detailPanelService.config.subscribe(function (event) {
              _this28.showDetailPanel = event.showing;

              if (_this28.showDetailPanel === false) {
                _this28.onCloseDetailPanel();
              }
            });
          }
        }, {
          key: "getFormFilters",
          value: function getFormFilters() {
            var _this29 = this;

            this.dadosFaturamentoService.getSetorAtividades().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              _this29.setorAtividades.unshift({
                id: 'T',
                descricao: 'TODOS'
              });
            })).subscribe(function (response) {
              if (response['responseCode'] === 200) {
                _this29.setorAtividades = response['result'];
              }
            });
          }
        }, {
          key: "setFormFilter",
          value: function setFormFilter() {
            var formValue = this.checkRouterParams();
            this.formFilter = this.formBuilder.group({
              pesquisa: [formValue['pesquisa']],
              buscarPor: [formValue['buscarPor'], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              situacao: [formValue['situacao'], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              setorAtividade: [formValue['setorAtividade'], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              tipoPessoa: [formValue['tipoPessoa'], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              grupoEconomico: [formValue['grupoEconomico'], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              segurado: [formValue['segurado'], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              carteira: [formValue['carteira'], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              pagina: [formValue['pagina']],
              registros: [formValue['registros'], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              id_group_econ: [formValue['grupoEconomico'], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            });
          }
        }, {
          key: "checkRouterParams",
          value: function checkRouterParams() {
            var _this30 = this;

            var aux_cartera;

            if (this.matricula == 1) {
              aux_cartera = 'T';
            } else {
              aux_cartera = 'S';
            }

            var formValue = {
              pesquisa: this.searchInputValue,
              buscarPor: 1,
              situacao: 'T',
              setorAtividade: 'T',
              tipoPessoa: 'T',
              grupoEconomico: 'T',
              segurado: 'T',
              carteira: aux_cartera,
              pagina: 1,
              registros: this.itemsPerPage
            };
            this.activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (queryParams) {
              if (Object.keys(queryParams).length > 0) {
                var params = atob(queryParams['q']);
                params = JSON.parse(params);

                _this30.setSubmittedSearch();

                _this30.search(params);

                if (params['registros']) {
                  _this30.itemsPerPage = params['registros'];
                }

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
              } else {
                _this30.listStatus();
              }
            });
            this.activatedRouteSubscription.unsubscribe();
            return formValue;
          }
        }, {
          key: "listStatus",
          value: function listStatus() {
            var _this31 = this;

            this.clientesService.getStatus().subscribe({
              next: function next(response) {
                if (response['responseCode'] === 200) {
                  _this31.setStatus(response['result']);
                }
              },
              error: function error(_error3) {
                _this31.pnotifyService.error();
              }
            });
          }
        }, {
          key: "setStatus",
          value: function setStatus(status) {
            for (var i = 0; i < status.length; i++) {
              if (status[i]['situacao'] == 'Ativo') {
                this.ativos = status[i]['quantidade'];
              } else if (status[i]['situacao'] == 'Inativo' || status[i]['situacao'] == null) {
                this.inativos += status[i]['quantidade'];
              } else if (status[i]['situacao'] == 'Potenci') {
                this.potencial = status[i]['quantidade'];
              } else if (status[i]['situacao'] == 'Arquivo') {
                this.arquivados = status[i]['quantidade'];
              }
            }
          }
        }, {
          key: "setOrderBy",
          value: function setOrderBy(column) {
            if (this.orderBy === column) {
              if (this.orderType == 'desc') {
                this.orderType = 'asc';
              } else if (this.orderType == 'asc') {
                this.orderType = 'desc';
              }
            } else {
              this.orderBy = column;
              this.orderType = 'asc';
            }

            this.onFilter();
          }
        }, {
          key: "onAdvancedFilter",
          value: function onAdvancedFilter() {
            this.showAdvancedFilter = !this.showAdvancedFilter;
          }
        }, {
          key: "filterByStatus",
          value: function filterByStatus(status) {
            this.formFilter.get('situacao').setValue(status);
            this.onFilter();
          }
        }, {
          key: "onFilter",
          value: function onFilter() {
            var params = this.formFilter.value;
            params['orderBy'] = this.orderBy;
            params['orderType'] = this.orderType;
            this.itemsPerPage = this.formFilter.value['registros'];
            this.currentPage = 1;
            this.setRouterParams(params);
          }
        }, {
          key: "setSubmittedSearch",
          value: function setSubmittedSearch() {
            this.searchSubmitted = true;
          }
        }, {
          key: "setRouterParams",
          value: function setRouterParams(params) {
            this.router.navigate([], {
              relativeTo: this.activatedRoute,
              queryParams: {
                q: btoa(JSON.stringify(params))
              },
              queryParamsHandling: 'merge'
            });
            this.setSubmittedSearch();
            this.search(params);
          }
        }, {
          key: "search",
          value: function search(params) {
            var _this32 = this;

            if (this.searchSubmitted) {
              this.loaderNavbar = true;
              this.dataLoaded = false;
              this.detailPanelService.hide();
              this.clientes = [];
              this.buscandoPor = params['buscarPor'];
              this.pesquisa = params['pesquisa'];
              this.clientesService.getClientes(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
                _this32.loaderNavbar = false;
                _this32.dataLoaded = true;
              })).subscribe(function (response) {
                if (response['responseCode'] === 200) {
                  _this32.clientes = response['result']['analitico'].slice(0, _this32.itemsPerPage);
                  _this32.totalItems = _this32.clientes[0]['total'];

                  _this32.setStatus(response['result']['sintetico']);
                } else if (response['responseCode'] === 204) {
                  _this32.ativos = 0;
                  _this32.inativos = 0;
                  _this32.potencial = 0;
                  _this32.arquivados = 0;
                }
              }, function (error) {
                _this32.pnotifyService.error();
              });
            }
          }
        }, {
          key: "classStatusBorder",
          value: function classStatusBorder(status) {
            var borderClass;

            if (status == 'Ativo') {
              borderClass = 'border-success';
            } else if (status == 'Inativo') {
              borderClass = 'border-danger';
            } else if (status == 'Potenci') {
              borderClass = 'border-primary';
            } else if (status == 'Arquivo') {
              borderClass = 'border-secondary';
            }

            return borderClass;
          }
        }, {
          key: "viewRegister",
          value: function viewRegister(cliente) {
            if (cliente['podeAcessar'] == 1 || cliente['podeAcessar'] == 0) {
              this.router.navigate(['../detalhes', cliente.codCliente], {
                relativeTo: this.activatedRoute
              });
            } else {
              this.pnotifyService.notice('Este cliente no pertenece a su cartera.');
            }
          }
        }, {
          key: "viewDetails",
          value: function viewDetails(cliente) {
            var _this33 = this;

            this.detailPanelService.loadedFinished(false);
            this.clienteSelecionado = cliente.codCliente;
            this.dadosCadastraisLoaded = false;
            this.dadosCadastraisEmpty = false;
            this.contatosLoaded = false;
            this.contatosEmpty = false;
            this.clientesService.getDetalhes(cliente.codCliente).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              _this33.dadosCadastraisLoaded = true;
            })).subscribe(function (response) {
              if (response.success === true) {
                _this33.dadosCadastrais = response.data;
              } else {
                _this33.dadosCadastraisEmpty = true;
              }
            });
            this.clientesService.getContatosResumido(cliente.codCliente).subscribe(function (response) {
              _this33.contatosLoaded = true;

              if (response['responseCode'] === 200) {
                if (Object.keys(response['result']).length > 0) {
                  _this33.contatos = response['result'];
                } else {
                  _this33.contatosEmpty = true;
                }
              } else {
                _this33.contatosEmpty = true;
              }
            });
          }
        }, {
          key: "onCloseDetailPanel",
          value: function onCloseDetailPanel() {
            var _this34 = this;

            this.resetClienteSelecionado();
            setTimeout(function () {
              _this34.dadosCadastraisLoaded = false;
              _this34.dadosCadastraisEmpty = false;
              _this34.dadosCadastrais = {};
              _this34.contatosEmpty = false;
              _this34.contatosLoaded = false;
              _this34.contatos = [];
            }, 500);
          }
        }, {
          key: "onPageChanged",
          value: function onPageChanged(event) {
            if (this.formFilter.value['pagina'] != event.page) {
              this.detailPanelService.hide();
              this.resetClienteSelecionado();
              this.formFilter.value['pagina'] = event.page;
              this.onFilter();
            }
          }
        }, {
          key: "onPreCadastroCpfCnpj",
          value: function onPreCadastroCpfCnpj() {
            var pesquisa = this.pesquisa.replace(/\D/g, '');

            if (pesquisa.length === 11) {
              return {
                cpf: pesquisa
              };
            } else if (pesquisa.length === 14) {
              return {
                cnpj: pesquisa
              };
            }

            return {};
          }
        }, {
          key: "handleCounter",
          value: function handleCounter(value) {
            return value.toFixed(0);
          }
        }, {
          key: "resetClienteSelecionado",
          value: function resetClienteSelecionado() {
            this.clienteSelecionado = null;
          }
        }]);

        return ComercialClientesListaComponent;
      }();

      ComercialClientesListaComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_7__["ComercialClientesService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"]
        }, {
          type: _cadastro_dados_faturamento_formulario_formulario_service__WEBPACK_IMPORTED_MODULE_10__["ComercialClientesCadastroDadosFaturamentoFormularioService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"]
        }, {
          type: src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_12__["DetailPanelService"]
        }];
      };

      ComercialClientesListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-clientes-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_modules_comercial_services_clientes_service__WEBPACK_IMPORTED_MODULE_7__["ComercialClientesService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"], _cadastro_dados_faturamento_formulario_formulario_service__WEBPACK_IMPORTED_MODULE_10__["ComercialClientesCadastroDadosFaturamentoFormularioService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"], src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_12__["DetailPanelService"]])], ComercialClientesListaComponent);
      /***/
    },

    /***/
    "qm78":
    /*!******************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/historico-financeiro/acumulos-mensais/acumulos-mensais.component.scss ***!
      \******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function qm78(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NsaWVudGVzL2hpc3Rvcmljby1maW5hbmNlaXJvL2FjdW11bG9zLW1lbnNhaXMvYWN1bXVsb3MtbWVuc2Fpcy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "w2Hl":
    /*!***************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/detalhes/detalhes.component.ts ***!
      \***************************************************************************/

    /*! exports provided: ComercialClientesDetalhesComponent */

    /***/
    function w2Hl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialClientesDetalhesComponent", function () {
        return ComercialClientesDetalhesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_detalhes_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./detalhes.component.html */
      "2JWa");
      /* harmony import */


      var _detalhes_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./detalhes.component.scss */
      "1JOV");
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
      "dNnS"); // Services


      var ComercialClientesDetalhesComponent = /*#__PURE__*/function () {
        function ComercialClientesDetalhesComponent(activatedRoute, router, pnotifyService, location, atividadesService, titleService) {
          _classCallCheck(this, ComercialClientesDetalhesComponent);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.pnotifyService = pnotifyService;
          this.location = location;
          this.atividadesService = atividadesService;
          this.titleService = titleService;
          this.loaderNavbar = false;
          this.breadCrumbTree = [{
            descricao: 'Home',
            routerLink: '/comercial/home'
          }, {
            descricao: 'Busqueda de clientes',
            routerLink: '/comercial/clientes/lista'
          }, {
            descricao: 'Detalles'
          }];
          this.cliente = {};
          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialClientesDetalhesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.activatedRoute.snapshot.data['response']['responseCode'] === 200) {
              this.cliente = this.activatedRoute.snapshot.data['response']['result'];
              this.registrarAcesso();
              this.titleService.setTitle('Detalhes');
            } else if (this.activatedRoute.snapshot.data['response']['responseCode'] === 403) {
              this.pnotifyService.notice('Este cliente no pertenece a su cartera');
              this.router.navigate(['/comercial/home']);
            } else {
              this.pnotifyService.error();
              this.location.back();
            }
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "classStatusBadge",
          value: function classStatusBadge(status) {
            var badgeClass = '';

            if (status == 'Ativo') {
              badgeClass = 'badge-success';
            } else if (status == 'Inativo') {
              badgeClass = 'badge-danger';
            } else if (status == 'Potenci') {
              badgeClass = 'badge-primary';
            } else if (status == 'Arquivo') {
              badgeClass = 'badge-secondary';
            }

            return badgeClass;
          }
        }]);

        return ComercialClientesDetalhesComponent;
      }();

      ComercialClientesDetalhesComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__["AtividadesService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_8__["TitleService"]
        }];
      };

      ComercialClientesDetalhesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-clientes-detalhes',
        template: _raw_loader_detalhes_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detalhes_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__["AtividadesService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_8__["TitleService"]])], ComercialClientesDetalhesComponent);
      /***/
    },

    /***/
    "w4nC":
    /*!****************************************************!*\
      !*** ./src/app/shared/services/ws/cnpj.service.ts ***!
      \****************************************************/

    /*! exports provided: CnpjService */

    /***/
    function w4nC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CnpjService", function () {
        return CnpjService;
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

      var CnpjService = /*#__PURE__*/function () {
        function CnpjService(http) {
          _classCallCheck(this, CnpjService);

          this.http = http;
          this.API = "https://crm360.monterrey.com.bo/api/common/services/cnpj";
        }

        _createClass(CnpjService, [{
          key: "getData",
          value: function getData(cnpj) {
            cnpj = cnpj.replace(/\D/g, '');
            return this.http.get("".concat(this.API, "/").concat(cnpj)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["timeout"])(5000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (e) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
            }));
          }
        }]);

        return CnpjService;
      }();

      CnpjService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      CnpjService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], CnpjService);
      /***/
    },

    /***/
    "wVIQ":
    /*!***************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/clientes/proposta-analise-credito/proposta-analise-credito.component.html ***!
      \***************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function wVIQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<app-header appTitle=\"Proposta para análise de crédito\">\r\n  <button\r\n    type=\"button\"\r\n    *ngIf=\"tipoVisao == 'formulario'\"\r\n    [disabled]=\"!form.valid\"\r\n    (click)=\"onSubmit()\">\r\n    Generar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    *ngIf=\"tipoVisao == 'ficha'\"\r\n    (click)=\"onCancel()\">\r\n    Cancelar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    *ngIf=\"tipoVisao == 'ficha'\"\r\n    (click)=\"onDownload()\">\r\n    Download\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <div class=\"row justify-content-center\" *ngIf=\"tipoVisao == 'formulario'\">\r\n    <div class=\"col-6\">\r\n      <form [formGroup]=\"form\" autocomplete=\"off\">\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col mb-0\">\r\n            <div class=\"mtc-title\">Datos del cliente</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"razaoSocial\">Razon social</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"razaoSocial\"\r\n              formControlName=\"razaoSocial\">\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"dataSolicitacao\">Fecha de la solicitud</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"dataSolicitacao\"\r\n              bsDatepicker\r\n              [bsConfig]=\"bsConfig\"\r\n              formControlName=\"dataSolicitacao\"\r\n              (input)=\"onInput()\"\r\n              [ngClass]=\"onFieldError('dataSolicitacao') + ' ' + onFieldRequired('dataSolicitacao')\">\r\n            <invalid-form-control [show]=\"onFieldInvalid('dataSolicitacao')\" message=\"Data de solicitação é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-4\">\r\n            <label for=\"codCliente\">Código de cliente</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"codCliente\"\r\n              formControlName=\"codCliente\">\r\n          </div>\r\n          <div class=\"form-group col-md-4\">\r\n            <label for=\"codClienteDBA\">Código SAP</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"codClienteDBA\"\r\n              formControlName=\"codClienteDBA\">\r\n          </div>\r\n          <div class=\"form-group col-md-4\">\r\n            <label for=\"limiteCreditoAtual\">Limite de crédito atual</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"limiteCreditoAtual\"\r\n              formControlName=\"limiteCreditoAtual\"\r\n              currencyMask [options]=\"{ align: 'left', prefix: 'R$ ', thousands: '.', decimal: ',' }\"\r\n              (input)=\"onInput()\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"setorAtividade\">Setor de atividades</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"setorAtividade\"\r\n              formControlName=\"setorAtividade\">\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"dataUltimaVisita\">Fecha de la última visita</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"dataUltimaVisita\"\r\n              bsDatepicker\r\n              [bsConfig]=\"bsConfig\"\r\n              formControlName=\"dataUltimaVisita\"\r\n              (input)=\"onInput()\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"instalacoes\">Instalaciones</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"instalacoes\"\r\n              formControlName=\"instalacoes\"\r\n              (input)=\"onInput()\">\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"numFuncionarios\">Número de empleados</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"numFuncionarios\"\r\n              formControlName=\"numFuncionarios\"\r\n              currencyMask [options]=\"{ align: 'left', prefix: '', thousands: '.', decimal: ',', precision: 0 }\"\r\n              (input)=\"onInput()\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"limiteCreditoSolicitado\">Limite de crédito solicitado</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"limiteCreditoSolicitado\"\r\n              formControlName=\"limiteCreditoSolicitado\"\r\n              currencyMask [options]=\"{ align: 'left', prefix: 'R$ ', thousands: '.', decimal: ',' }\"\r\n              (input)=\"onInput()\"\r\n              [ngClass]=\"onFieldError('limiteCreditoSolicitado') + ' ' + onFieldRequired('limiteCreditoSolicitado')\">\r\n            <invalid-form-control [show]=\"onFieldInvalid('limiteCreditoSolicitado')\" message=\"Limite de crédito solicitado é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"condicaoPagto\">Condiciones de pago</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"condicaoPagto\"\r\n              formControlName=\"condicaoPagto\"\r\n              (input)=\"onInput()\"\r\n              [ngClass]=\"onFieldError('condicaoPagto') + ' ' + onFieldRequired('condicaoPagto')\">\r\n            <invalid-form-control [show]=\"onFieldInvalid('condicaoPagto')\" message=\"Condição de pagamento é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col mb-0\">\r\n            <hr class=\"mt-0\">\r\n            <div class=\"mtc-title\">Solicitud de datos</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"nomeVendedor\">Vendedor(a)</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"nomeVendedor\"\r\n              formControlName=\"nomeVendedor\">\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"telefoneVendedor\">Teléfono</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"telefoneVendedor\"\r\n              formControlName=\"telefoneVendedor\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"gestorVendas\">Jefe de ventas</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"gestorVendas\"\r\n              formControlName=\"gestorVendas\"\r\n              (input)=\"onInput()\"\r\n              [ngClass]=\"onFieldError('gestorVendas') + ' ' + onFieldRequired('gestorVendas')\">\r\n            <invalid-form-control [show]=\"onFieldInvalid('gestorVendas')\" message=\"Gestor(a) de venda é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"nomeEscritorio\">Oficina de ventas</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"nomeEscritorio\"\r\n              formControlName=\"nomeEscritorio\">\r\n          </div>\r\n        </div>\r\n        <div formArrayName=\"fornecedores\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col mb-0\">\r\n              <hr class=\"mt-0\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col mb-0 d-flex justify-content-between\">\r\n              <div class=\"mtc-title\">Proveedores</div>\r\n              <div>\r\n                <a\r\n                  class=\"text-secondary\"\r\n                  (click)=\"onAddFornecedor()\"\r\n                  href=\"javascript:void(0)\">\r\n                  <b>Adicionar</b>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\" *ngFor=\"let item of fornecedores.controls; let i = index\" [formGroupName]=\"i\">\r\n            <div class=\"form-group col mb-0\">\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-6\">\r\n                  <label for=\"nome\">Nobre</label>\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    id=\"nome\"\r\n                    formControlName=\"nome\"\r\n                    (input)=\"onInput()\"\r\n                    [ngClass]=\"onNestedFieldError('fornecedores', i, 'nome') + ' ' + onNestedFieldRequired('fornecedores', i, 'nome')\">\r\n                </div>\r\n                <div class=\"form-group col-5\">\r\n                  <label for=\"telefone\">Telefono</label>\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    id=\"telefone\"\r\n                    formControlName=\"telefone\"\r\n                    (input)=\"onInput()\"\r\n                    telefone [textMask]=\"{ mask: MASKS.telefone.textMaskFunction }\">\r\n                </div>\r\n                <div class=\"col-1 pt-4 mt-1 d-flex justify-content-center\">\r\n                  <button\r\n                    type=\"button\"\r\n                    class=\"btn-icon\"\r\n                    (click)=\"onDeleteFornecedor(i)\">\r\n                    <i class=\"fas fa-trash\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div formArrayName=\"clientes\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col mb-0\">\r\n              <hr class=\"mt-0\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col mb-0 d-flex justify-content-between\">\r\n              <div class=\"mtc-title\">Clientes</div>\r\n              <div>\r\n                <a\r\n                  class=\"text-secondary\"\r\n                  (click)=\"onAddCliente()\"\r\n                  href=\"javascript:void(0)\">\r\n                  <b>Adicionar</b>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"clientes.controls.length > 0\">\r\n            <div class=\"form-row\" *ngFor=\"let item of clientes.controls; let i = index\" [formGroupName]=\"i\">\r\n              <div class=\"form-group col mb-0\">\r\n                <div class=\"form-row\">\r\n                  <div class=\"form-group col-11\">\r\n                    <label for=\"nome\">Nombre</label>\r\n                    <input\r\n                      type=\"text\"\r\n                      class=\"form-control\"\r\n                      id=\"nome\"\r\n                      formControlName=\"nome\"\r\n                      (input)=\"onInput()\">\r\n                  </div>\r\n                  <div class=\"col-1 pt-4 mt-1 d-flex justify-content-center\">\r\n                    <button\r\n                      type=\"button\"\r\n                      class=\"btn-icon\"\r\n                      (click)=\"onDeleteCliente(i)\">\r\n                      <i class=\"fas fa-trash\"></i>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"mb-3\" *ngIf=\"clientes.controls.length == 0\">\r\n            <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n          </div>\r\n        </div>\r\n        <div formArrayName=\"bancos\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col mb-0\">\r\n              <hr class=\"mt-0\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col mb-0 d-flex justify-content-between\">\r\n              <div class=\"mtc-title\">Bancos</div>\r\n              <div>\r\n                <a\r\n                  class=\"text-secondary\"\r\n                  (click)=\"onAddBanco()\"\r\n                  href=\"javascript:void(0)\">\r\n                  <b>Adicionar</b>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\" *ngFor=\"let item of bancos.controls; let i = index\" [formGroupName]=\"i\">\r\n            <div class=\"form-group col mb-0\">\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-3\">\r\n                  <label for=\"nome\">Nome</label>\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    id=\"nome\"\r\n                    formControlName=\"nome\"\r\n                    (input)=\"onInput()\"\r\n                    [ngClass]=\"onNestedFieldError('bancos', i, 'nome') + ' ' + onNestedFieldRequired('bancos', i, 'nome')\">\r\n                </div>\r\n                <div class=\"form-group col-2\">\r\n                  <label for=\"agencia\">Agencia</label>\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    id=\"agencia\"\r\n                    formControlName=\"agencia\"\r\n                    (input)=\"onInput()\"\r\n                    [ngClass]=\"onNestedFieldError('bancos', i, 'agencia') + ' ' + onNestedFieldRequired('bancos', i, 'agencia')\">\r\n                </div>\r\n                <div class=\"form-group col-3\">\r\n                  <label for=\"contaCorrente\">Cuenta corriente</label>\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    id=\"contaCorrente\"\r\n                    formControlName=\"contaCorrente\"\r\n                    (input)=\"onInput()\"\r\n                    [ngClass]=\"onNestedFieldError('bancos', i, 'contaCorrente') + ' ' + onNestedFieldRequired('bancos', i, 'contaCorrente')\">\r\n                </div>\r\n                <div class=\"form-group col-3\">\r\n                  <label for=\"telefone\">Telefono</label>\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    id=\"telefone\"\r\n                    formControlName=\"telefone\"\r\n                    telefone [textMask]=\"{ mask: MASKS.telefone.textMaskFunction }\"\r\n                    (input)=\"onInput()\"\r\n                    [ngClass]=\"onNestedFieldError('bancos', i, 'telefone') + ' ' + onNestedFieldRequired('bancos', i, 'telefone')\">\r\n                </div>\r\n                <div class=\"col-1 pt-4 mt-1 d-flex justify-content-center\">\r\n                  <button\r\n                    type=\"button\"\r\n                    class=\"btn-icon\"\r\n                    (click)=\"onDeleteBanco(i)\">\r\n                    <i class=\"fas fa-trash\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col mb-0\">\r\n            <hr class=\"mt-0\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col mb-0\">\r\n            <label>Ventas concentradas</label>\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col\">\r\n                <div class=\"custom-control custom-radio custom-control-inline\">\r\n                  <input\r\n                    type=\"radio\"\r\n                    id=\"vendasConcentradasSim\"\r\n                    class=\"custom-control-input\"\r\n                    formControlName=\"vendasConcentradas\"\r\n                    value=\"Sim\">\r\n                  <label class=\"custom-control-label\" for=\"vendasConcentradasSim\">Sim</label>\r\n                </div>\r\n                <div class=\"custom-control custom-radio custom-control-inline\">\r\n                  <input\r\n                    type=\"radio\"\r\n                    id=\"vendasConcentradasNao\"\r\n                    class=\"custom-control-input\"\r\n                    formControlName=\"vendasConcentradas\"\r\n                    value=\"Não\">\r\n                  <label class=\"custom-control-label\" for=\"vendasConcentradasNao\">Não</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"previsaoCompraTon\">Compra mensual estimada (Ton)</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"previsaoCompraTon\"\r\n              formControlName=\"previsaoCompraTon\"\r\n              currencyMask [options]=\"{ align: 'left', prefix: '', thousands: '.', decimal: ',', precision: 3 }\">\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"previsaoCompraValor\">Compra mensual estimada (R$)</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"previsaoCompraValor\"\r\n              formControlName=\"previsaoCompraValor\"\r\n              currencyMask [options]=\"{ align: 'left', prefix: 'R$ ', thousands: '.', decimal: ',' }\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"faturamentoMedio\">Facturación media mensual</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"faturamentoMedio\"\r\n              formControlName=\"faturamentoMedio\"\r\n              currencyMask [options]=\"{ align: 'left', prefix: 'R$ ', thousands: '.', decimal: ',' }\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col\">\r\n            <label for=\"parecerVendedor\">Opinión del vendedor</label>\r\n            <textarea\r\n              class=\"form-control\"\r\n              id=\"parecerVendedor\"\r\n              formControlName=\"parecerVendedor\"\r\n              (input)=\"onInput()\"\r\n              [ngClass]=\"onFieldError('parecerVendedor') + ' ' + onFieldRequired('parecerVendedor')\">\r\n            </textarea>\r\n            <invalid-form-control [show]=\"onFieldInvalid('parecerVendedor')\" message=\"Parecer do vendedor é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <div class=\"row justify-content-center pt-5\" id=\"impressao-ficha-pac\" *ngIf=\"tipoVisao == 'ficha'\">\r\n    <div class=\"col-9\">\r\n      <h1>Propuesta de análisis de créditos (PAC)</h1>\r\n      <div class=\"jumbotron p-3 mb-3\">\r\n        <div class=\"mtc-title\">Dados do cliente</div>\r\n        <p class=\"mt-2 mb-0\">\r\n          <strong class=\"mr-2\">Razon social:</strong>\r\n          <span *ngIf=\"dataFicha.razaoSocial == null\">Sin informacion</span>\r\n          <span *ngIf=\"dataFicha.razaoSocial != null\">{{ dataFicha.razaoSocial }}</span>\r\n        </p>\r\n        <p class=\"mt-2 mb-0\">\r\n          <strong class=\"mr-2\">Fecha de la solicitud:</strong>\r\n          <span *ngIf=\"dataFicha.dataSolicitacao == null\">Sin informacion</span>\r\n          <span *ngIf=\"dataFicha.dataSolicitacao != null\">{{ dataFicha.dataSolicitacao }}</span>\r\n        </p>\r\n        <p class=\"mt-2 mb-0\">\r\n          <strong class=\"mr-2\">Código de cliente (TID):</strong>\r\n          <span *ngIf=\"dataFicha.codCliente == null\">Sin informacion</span>\r\n          <span *ngIf=\"dataFicha.codCliente != null\">{{ dataFicha.codCliente }}</span>\r\n        </p>\r\n        <p class=\"mt-2 mb-0\">\r\n          <strong class=\"mr-2\">Código de cliente (SAP):</strong>\r\n          <span *ngIf=\"dataFicha.codClienteDBA == null\">Sin informacion</span>\r\n          <span *ngIf=\"dataFicha.codClienteDBA != null\">{{ dataFicha.codClienteDBA }}</span>\r\n        </p>\r\n        <p class=\"mt-2 mb-0\">\r\n          <strong class=\"mr-2\">Limite de crédito actual:</strong>\r\n          <span *ngIf=\"dataFicha.limiteCreditoAtual == null\">Sin informacion</span>\r\n          <span *ngIf=\"dataFicha.limiteCreditoAtual == null\">{{ dataFicha.limiteCreditoAtual | currency:'BRL':'symbol':'1.2-2' }}</span>\r\n        </p>\r\n        <p class=\"mt-2 mb-0\">\r\n          <strong class=\"mr-2\">Sector de actividade:</strong>\r\n          <span *ngIf=\"dataFicha.setorAtividade == null\">Sin informacion</span>\r\n          <span *ngIf=\"dataFicha.setorAtividade != null\">{{ dataFicha.setorAtividade }}</span>\r\n        </p>\r\n        <p class=\"mt-2 mb-0\">\r\n          <strong class=\"mr-2\">Fecha de la última visita:</strong>\r\n          <span *ngIf=\"dataFicha.dataUltimaVisita == null\">Sin informacion</span>\r\n          <span *ngIf=\"dataFicha.dataUltimaVisita != null\">{{ dataFicha.dataUltimaVisita }}</span>\r\n        </p>\r\n        <p class=\"mt-2 mb-0\">\r\n          <strong class=\"mr-2\">Instalaciones:</strong>\r\n          <span *ngIf=\"dataFicha.instalacoes == null\">Sin informacion</span>\r\n          <span *ngIf=\"dataFicha.instalacoes != null\">{{ dataFicha.instalacoes }}</span>\r\n        </p>\r\n        <p class=\"mt-2 mb-0\">\r\n          <strong class=\"mr-2\">Número de funcionários:</strong>\r\n          <span *ngIf=\"dataFicha.numFuncionarios == null\">Sin informacion</span>\r\n          <span *ngIf=\"dataFicha.numFuncionarios == null\">{{ dataFicha.numFuncionarios }}</span>\r\n        </p>\r\n      </div>\r\n      <div class=\"jumbotron p-3 mb-3\">\r\n        <div class=\"mtc-title\">Propuestas</div>\r\n        <p class=\"mt-2 mb-0\">\r\n          <strong class=\"mr-2\">Limite de crédito solicitado:</strong>\r\n          <span *ngIf=\"dataFicha.limiteCreditoSolicitado == null\">Sin informacion</span>\r\n          <span *ngIf=\"dataFicha.limiteCreditoSolicitado != null\">{{ dataFicha.limiteCreditoSolicitado | currency:'BRL':'symbol':'1.2-2' }}</span>\r\n        </p>\r\n        <p class=\"mt-2 mb-0\">\r\n          <strong class=\"mr-2\">Condiciones de pago:</strong>\r\n          <span *ngIf=\"dataFicha.condicaoPagto == null\">Sin informacion</span>\r\n          <span *ngIf=\"dataFicha.condicaoPagto != null\">{{ dataFicha.condicaoPagto }}</span>\r\n        </p>\r\n      </div>\r\n      <div class=\"jumbotron p-3 mb-3\">\r\n        <div class=\"mtc-title\">Datos del solicitante</div>\r\n        <p class=\"mt-2 mb-0\">\r\n          <strong class=\"mr-2\">Vendedor(a):</strong>\r\n          <span *ngIf=\"dataFicha.condicaoPagto == null\">Sin informacion</span>\r\n          <span *ngIf=\"dataFicha.condicaoPagto != null\">{{ dataFicha.nomeVendedor }}</span>\r\n        </p>\r\n        <p class=\"mt-2 mb-0\">\r\n          <strong class=\"mr-2\">Gestor(a):</strong>\r\n          <span *ngIf=\"dataFicha.gestorVendas == null\">Sin informacion</span>\r\n          <span *ngIf=\"dataFicha.gestorVendas != null\">{{ dataFicha.gestorVendas | uppercase }}</span>\r\n        </p>\r\n        <p class=\"mt-2 mb-0\">\r\n          <strong class=\"mr-2\">Telefono:</strong>\r\n          <span *ngIf=\"dataFicha.gestorVendas == null\">Sin informacion</span>\r\n          <span *ngIf=\"dataFicha.gestorVendas != null\">{{ dataFicha.telefoneVendedor }}</span>\r\n        </p>\r\n        <p class=\"mt-2 mb-0\">\r\n          <strong class=\"mr-2\">Oficina de ventas:</strong>\r\n          <span *ngIf=\"dataFicha.nomeEscritorio == null\">Sin informacion</span>\r\n          <span *ngIf=\"dataFicha.nomeEscritorio != null\">{{ dataFicha.nomeEscritorio }}</span>\r\n        </p>\r\n      </div>\r\n      <div class=\"jumbotron p-3 mb-3\">\r\n        <div class=\"mtc-title\">Principales proveedores</div>\r\n        <div *ngIf=\"dataFicha.fornecedores.length == 0\">Sin informacion</div>\r\n        <div *ngIf=\"dataFicha.fornecedores.length > 0\">\r\n          <div class=\"row mt-2\" *ngFor=\"let item of dataFicha.fornecedores\">\r\n            <div class=\"col-6\">\r\n              <p class=\"mt-2 mb-0\">\r\n                <strong class=\"mr-2\">Nombre:</strong>\r\n                <span *ngIf=\"item.nome == null\">Sin informacion</span>\r\n                <span *ngIf=\"item.nome != null\">{{ item.nome | uppercase }}</span>\r\n              </p>\r\n            </div>\r\n            <div class=\"col-6\">\r\n              <p class=\"mt-2 mb-0\">\r\n                <strong class=\"mr-2\">Telefono:</strong>\r\n                <span *ngIf=\"item.telefone == null\">Sin informacion</span>\r\n                <span *ngIf=\"item.telefone != null\">{{ item.telefone }}</span>\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"jumbotron p-3 mb-3\">\r\n        <div class=\"mtc-title\">Principales clientes</div>\r\n        <div *ngIf=\"dataFicha.clientes.length == 0\">Sin informacion</div>\r\n        <div *ngIf=\"dataFicha.clientes.length > 0\">\r\n          <div *ngFor=\"let item of dataFicha.clientes\">\r\n            <p class=\"mt-2 mb-0\">\r\n              <strong class=\"mr-2\">Nome:</strong> {{ item.nome | uppercase }}\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"jumbotron p-3 mb-3\">\r\n        <div class=\"mtc-title\">Principaless bancos</div>\r\n        <div *ngIf=\"dataFicha.bancos.length == 0\">Sin informacion</div>\r\n        <div *ngIf=\"dataFicha.bancos.length > 0\">\r\n          <div class=\"row\" *ngFor=\"let item of dataFicha.bancos\">\r\n            <div class=\"col-3\">\r\n              <p class=\"mt-2 mb-0\">\r\n                <strong class=\"mr-2\">Banco:</strong>\r\n                <span *ngIf=\"item.nome == null\">Sin informacion</span>\r\n                <span *ngIf=\"item.nome != null\">{{ item.nome | uppercase }}</span>\r\n              </p>\r\n            </div>\r\n            <div class=\"col-3\">\r\n              <p class=\"mt-2 mb-0\">\r\n                <strong class=\"mr-2\">Agencia:</strong>\r\n                <span *ngIf=\"item.agencia == null\">Sin informacion</span>\r\n                <span *ngIf=\"item.agencia != null\">{{ item.agencia }}</span>\r\n              </p>\r\n            </div>\r\n            <div class=\"col-3\">\r\n              <p class=\"mt-2 mb-0\">\r\n                <strong class=\"mr-2\">Cuenta corrinte:</strong>\r\n                <span *ngIf=\"item.contaCorrente == null\">Sin informacion</span>\r\n                <span *ngIf=\"item.contaCorrente != null\">{{ item.contaCorrente }}</span>\r\n              </p>\r\n            </div>\r\n            <div class=\"col-3\">\r\n              <p class=\"mt-2 mb-0\">\r\n                <strong class=\"mr-2\">Telefono:</strong>\r\n                <span *ngIf=\"item.telefone == null\">Sin informacion</span>\r\n                <span *ngIf=\"item.telefone != null\">{{ item.telefone }}</span>\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"jumbotron p-3 mb-3\">\r\n        <div class=\"mtc-title\">Datos financieros</div>\r\n        <p class=\"mt-2 mb-0\">\r\n          <strong class=\"mr-2\">Vendas concretadas:</strong>\r\n          <span *ngIf=\"dataFicha.vendasConcentradas == null\">Sin informacion</span>\r\n          <span *ngIf=\"dataFicha.vendasConcentradas != null\">{{ dataFicha.vendasConcentradas }}</span>\r\n        </p>\r\n        <p class=\"mt-2 mb-0\">\r\n          <strong class=\"mr-2\">Previsión mensual de compras (Ton):</strong>\r\n          <span *ngIf=\"dataFicha.previsaoCompraTon == null\">Sin informacion</span>\r\n          <span *ngIf=\"dataFicha.previsaoCompraTon != null\">{{ dataFicha.previsaoCompraTon | number:'1.3-3' }}t</span>\r\n        </p>\r\n        <p class=\"mt-2 mb-0\">\r\n          <strong class=\"mr-2\">Previsión mensual de compras (R$):</strong>\r\n          <span *ngIf=\"dataFicha.previsaoCompraValor == null\">Sin informacion</span>\r\n          <span *ngIf=\"dataFicha.previsaoCompraValor != null\">{{ dataFicha.previsaoCompraValor | currency:'BRL':'symbol':'1.2-2' }}</span>\r\n        </p>\r\n        <p class=\"mt-2 mb-0\">\r\n          <strong class=\"mr-2\">Facturación media mensual (R$):</strong>\r\n          <span *ngIf=\"dataFicha.faturamentoMedio == null\">Sin informacion</span>\r\n          <span *ngIf=\"dataFicha.faturamentoMedio != null\">{{ dataFicha.faturamentoMedio | currency:'BRL':'symbol':'1.2-2' }}</span>\r\n        </p>\r\n      </div>\r\n      <div class=\"jumbotron p-3 mb-0\">\r\n        <div class=\"mtc-title\">Opinión del vendedor</div>\r\n        <p class=\"mt-2 mb-0\">\r\n          <span *ngIf=\"dataFicha.parecerVendedor == null\">Sin informacion</span>\r\n          <span *ngIf=\"dataFicha.parecerVendedor != null\">{{ dataFicha.parecerVendedor | uppercase }}</span>\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</app-body>\r\n";
      /***/
    },

    /***/
    "wdkM":
    /*!********************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/historico-financeiro/notas-promissorias/notas-promissorias.component.ts ***!
      \********************************************************************************************************************/

    /*! exports provided: ComercialClientesHistoricoFinanceiroNotasPromissoriasComponent */

    /***/
    function wdkM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialClientesHistoricoFinanceiroNotasPromissoriasComponent", function () {
        return ComercialClientesHistoricoFinanceiroNotasPromissoriasComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_notas_promissorias_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./notas-promissorias.component.html */
      "41Ht");
      /* harmony import */


      var _notas_promissorias_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./notas-promissorias.component.scss */
      "4WMF");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _historico_financeiro_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../historico-financeiro.service */
      "THvH"); // Services


      var ComercialClientesHistoricoFinanceiroNotasPromissoriasComponent = /*#__PURE__*/function () {
        function ComercialClientesHistoricoFinanceiroNotasPromissoriasComponent(activatedRoute, historicoFinanceiroService) {
          _classCallCheck(this, ComercialClientesHistoricoFinanceiroNotasPromissoriasComponent);

          this.activatedRoute = activatedRoute;
          this.historicoFinanceiroService = historicoFinanceiroService;
          this.tableConfig = {
            subtitleBorder: true
          };
          this.notasPromissorias = [];
          this.notasPromissoriasLoaded = false;
        }

        _createClass(ComercialClientesHistoricoFinanceiroNotasPromissoriasComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this35 = this;

            this.activatedRoute.parent.params.subscribe(function (params) {
              _this35.getNotasPromissorias(params['id']);
            });
          }
        }, {
          key: "getNotasPromissorias",
          value: function getNotasPromissorias(id) {
            var _this36 = this;

            this.historicoFinanceiroService.getNotasPromissorias(id).subscribe(function (response) {
              if (response['responseCode'] === 200) {
                _this36.notasPromissorias = response['result'];
              }

              _this36.notasPromissoriasLoaded = true;
            });
          }
        }, {
          key: "classStatusBorder",
          value: function classStatusBorder(status) {
            var borderClass = '';

            if (status == 'BAIXADA') {
              borderClass = 'border-success';
            } else if (status == 'QUITADA') {
              borderClass = 'border-primary';
            }

            return borderClass;
          }
        }]);

        return ComercialClientesHistoricoFinanceiroNotasPromissoriasComponent;
      }();

      ComercialClientesHistoricoFinanceiroNotasPromissoriasComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _historico_financeiro_service__WEBPACK_IMPORTED_MODULE_5__["ComercialClientesHistoricoFinanceiroService"]
        }];
      };

      ComercialClientesHistoricoFinanceiroNotasPromissoriasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-clientes-historico-financeiro-notas-promissorias',
        template: _raw_loader_notas_promissorias_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_notas_promissorias_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _historico_financeiro_service__WEBPACK_IMPORTED_MODULE_5__["ComercialClientesHistoricoFinanceiroService"]])], ComercialClientesHistoricoFinanceiroNotasPromissoriasComponent);
      /***/
    },

    /***/
    "xqLP":
    /*!*****************************************************************************************************!*\
      !*** ./src/app/modules/comercial/clientes/historico-financeiro/historico-financeiro.component.scss ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function xqLP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NsaWVudGVzL2hpc3Rvcmljby1maW5hbmNlaXJvL2hpc3Rvcmljby1maW5hbmNlaXJvLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "zgCi":
    /*!*******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/clientes/ultimos-precos/ultimos-precos.component.html ***!
      \*******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function zgCi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<app-header appTitle=\"Dias não úteis\">\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onFilter()\">\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <div class=\"row\" #scrollToFilter>\r\n    <div class=\"col\">\r\n      <advanced-filter>\r\n        <form [formGroup]=\"form\" autocomplete=\"off\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-2\">\r\n              <label for=\"dataInicial\">Fecha inicial</label>\r\n              <input\r\n                class=\"form-control\"\r\n                id=\"dataInicial\"\r\n                type=\"text\"\r\n                bsDatepicker\r\n                [bsConfig]=\"bsConfig\"\r\n                formControlName=\"dataInicial\"\r\n                [ngClass]=\"onFieldError('dataInicial') + ' ' + onFieldRequired('dataInicial')\">\r\n                <invalid-form-control [show]=\"onFieldInvalid('dataInicial') == 'required'\" message=\"Data Inicial é obrigatório.\"></invalid-form-control>\r\n            </div>\r\n            <div class=\"form-group col-lg-2\">\r\n              <label for=\"dataFinal\">Fecha final</label>\r\n              <input\r\n                class=\"form-control\"\r\n                id=\"dataFinal\"\r\n                type=\"text\"\r\n                bsDatepicker\r\n                [bsConfig]=\"bsConfig\"\r\n                formControlName=\"dataFinal\"\r\n                [ngClass]=\"onFieldError('dataFinal') + ' ' + onFieldRequired('dataFinal')\">\r\n                <invalid-form-control [show]=\"onFieldInvalid('dataFinal') == 'required'\" message=\"Data Final é obrigatório.\"></invalid-form-control>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </advanced-filter>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <custom-table [config]=\"tableConfig\" *ngIf=\"dadosPagination.length > 0 && !dadosEmpty\">\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n            <th scope=\"col\">Cod. Material</th>\r\n            <th scope=\"col\">Material</th>\r\n            <th scope=\"col\">Línea / Clase</th>\r\n            <th scope=\"col\">Ton. Vendidas</th>\r\n            <th scope=\"col\">Nota Fiscal</th>\r\n            <th scope=\"col\">Dt. Ultima Compra</th>\r\n            <th scope=\"col\">Precio Unitário</th>\r\n            <th scope=\"col\">Precio Total</th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let ultimoPreco of dadosPagination; let i = index\">\r\n            <td\r\n              class=\"hover\">\r\n              {{ ultimoPreco.codMaterial }}\r\n            </td>\r\n            <td class=\"hover\">\r\n              {{ ultimoPreco.nomeMaterial | uppercase }}\r\n            </td>\r\n            <td\r\n              class=\"hover\">\r\n              {{ ultimoPreco.linha }} / {{ ultimoPreco.classe }}\r\n            </td>\r\n            <td\r\n              class=\"hover\">\r\n              {{ ultimoPreco.qtdeToneladasVendidas | number:'1.3-3' }} ton \r\n            </td>\r\n            <td\r\n              class=\"hover\">\r\n              {{ ultimoPreco.nrNotaFiscal }}\r\n            </td>\r\n            <td\r\n              class=\"hover\">\r\n              {{ ultimoPreco.dataUltimaCompra | date: 'dd/MM/yyyy' }}\r\n            </td>\r\n            <td\r\n              class=\"hover\">\r\n              {{ ultimoPreco.precoUnitarioMaterial | currency:'BRL':'symbol':'1.2-2' }}\r\n            </td>\r\n            <td\r\n              class=\"hover\">\r\n              {{ ultimoPreco.precoTotalMaterial | currency:'BRL':'symbol':'1.2-2' }}\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n      <div class=\"d-flex justify-content-center mt-3\" *ngIf=\"totalItems > itemsPerPage && dadosLoaded\">\r\n        <pagination\r\n          [maxSize]=\"maxSize\"\r\n          [(totalItems)]=\"totalItems\"\r\n          (pageChanged)=\"onPageChanged($event)\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPage\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\">\r\n        </pagination>\r\n      </div>\r\n      <empty-result\r\n        message=\"Nenhuma informação encontrada\"\r\n        class=\"my-3\"\r\n        *ngIf=\"dadosEmpty\">\r\n      </empty-result>\r\n    </div>\r\n  </div>\r\n</app-body>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=clientes-clientes-module-es5.js.map