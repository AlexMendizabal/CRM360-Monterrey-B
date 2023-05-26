(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\n<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<app-header appTitle=\"Pre-Registro\">\n  <button\n    type=\"button\"\n    (click)=\"onCancel()\"\n    [disabled]=\"submittingForm\">\n    Cancelar\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"onSubmit()\"\n    [disabled]=\"!form.valid || submittingForm\">\n    Salvar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-6\">\n      <form [formGroup]=\"form\" autocomplete=\"off\">\n        <div class=\"form-row\">\n          <div class=\"form-group col\">\n            <div class=\"btn-group btn-group-sm\">\n              <button\n                type=\"button\"\n                class=\"btn btn-light active\"\n                [ngClass]=\"{'active': tipoPessoa == 'F'}\"\n                (click)=\"setType('F')\">\n                <strong>Persona fisica</strong>\n              </button>\n              \n              <button\n              type=\"button\"\n              class=\"btn btn-light active\"\n              [ngClass]=\"{'active': tipoPessoa == 'J'}\"\n              (click)=\"setType('J')\">\n              <strong>persona Juridica</strong>\n            </button>\n\n            </div>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-6\" *ngIf=\"tipoPessoa == 'F'\">\n            <label for=\"cpf\"> CARNET DE IDENTIDAD </label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"cpf\"\n              formControlName=\"cpf\"\n              (input)=\"onInput()\"\n              [ngClass]=\"onFieldError('cpf') + ' ' + onFieldRequired('cpf')\">\n            <invalid-form-control [show]=\"onFieldInvalid('cpf') == 'required'\" message=\"Carnet inválido.\"></invalid-form-control>\n          </div>\n          <div class=\"form-group col-md-6\" *ngIf=\"tipoPessoa == 'J'\">\n            <label for=\"cnpj\">NIT</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"cnpj\"\n              formControlName=\"cnpj\"\n              (input)=\"onInput()\"\n              (blur)=\"validateCNPJ()\"\n              [ngClass]=\"onFieldError('cnpj') + ' ' + onFieldRequired('cnpj')\"\n            >\n            <invalid-form-control [show]=\"onFieldInvalid('cnpj') == 'required'\" message=\"NIT inválido.\"></invalid-form-control>\n          </div>\n          <div class=\"form-group col-md-6\">\n            <label for=\"vendedor\">Atribuir vendedor</label>\n            <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"false\"\n              [items]=\"vendedores\"\n              [virtualScroll]=\"true\"\n              labelForId=\"vendedor\"\n              bindLabel=\"nome\"\n              bindValue=\"id\"\n              formControlName=\"vendedor\"\n              (change)=\"onInput()\">\n            </ng-select>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-6\" *ngIf=\"tipoPessoa == 'F'\">\n            <label for=\"nome\">Nombre</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"nome\"\n              formControlName=\"nome\"\n              (input)=\"onInput()\"\n              [ngClass]=\"onFieldError('nome') + ' ' + onFieldRequired('nome')\">\n            <invalid-form-control [show]=\"onFieldInvalid('nome') == 'required'\" message=\"Nombre es obligatorio.\"></invalid-form-control>\n            <invalid-form-control [show]=\"onFieldInvalid('nome') == 'maxlength'\" [message]=\"maxLengthMessages.nome\"></invalid-form-control>\n          </div>\n          <div class=\"form-group col-md-6\" *ngIf=\"tipoPessoa == 'F'\">\n            <label for=\"sobrenome\">Apellido</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"sobrenome\"\n              formControlName=\"sobrenome\"\n              (input)=\"onInput()\"\n              [ngClass]=\"onFieldError('sobrenome') + ' ' + onFieldRequired('sobrenome')\">\n            <invalid-form-control [show]=\"onFieldInvalid('sobrenome') == 'required'\" message=\"Apellido es obligatorio.\"></invalid-form-control>\n            <invalid-form-control [show]=\"onFieldInvalid('sobrenome') == 'maxlength'\" [message]=\"maxLengthMessages.sobrenome\"></invalid-form-control>\n          </div>\n          <div class=\"form-group col-md-6\" *ngIf=\"tipoPessoa == 'J'\">\n            <label for=\"razaoSocial\">Razon social</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"razaoSocial\"\n              formControlName=\"razaoSocial\"\n              (input)=\"onInput()\"\n              [ngClass]=\"onFieldError('razaoSocial') + ' ' + onFieldRequired('razaoSocial')\">\n            <invalid-form-control [show]=\"onFieldInvalid('razaoSocial') == 'required'\" message=\"Razon social es obligatorio.\"></invalid-form-control>\n            <invalid-form-control [show]=\"onFieldInvalid('razaoSocial') == 'maxlength'\" [message]=\"maxLengthMessages.razaoSocial\"></invalid-form-control>\n          </div>\n          <div class=\"form-group col-md-6\" *ngIf=\"tipoPessoa == 'J'\">\n            <label for=\"nomeFantasia\">Nombre</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"nomeFantasia\"\n              formControlName=\"nomeFantasia\"\n              (input)=\"onInput()\"\n              [ngClass]=\"onFieldError('nomeFantasia') + ' ' + onFieldRequired('nomeFantasia')\">\n            <invalid-form-control [show]=\"onFieldInvalid('nomeFantasia') == 'required'\" message=\"Nombre es obligatorio.\"></invalid-form-control>\n            <invalid-form-control [show]=\"onFieldInvalid('nomeFantasia') == 'maxlength'\" [message]=\"maxLengthMessages.nomeFantasia\"></invalid-form-control>\n          </div>\n        </div>\n        <div class=\"form-row\" *ngIf=\"tipoPessoa == 'J'\">\n          <div class=\"form-group col\">\n            <label for=\"cnae\">CNAE (Actividad Economica)</label>\n            <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"false\"\n              [items]=\"cnaes\"\n              [virtualScroll]=\"true\"\n              labelForId=\"cnae\"\n              bindLabel=\"descricao\"\n              bindValue=\"id\"\n              formControlName=\"cnae\"\n              (change)=\"onInput()\"\n              [ngClass]=\"onFieldError('cnae') + ' ' + onFieldRequired('cnae')\">\n            </ng-select>\n            <invalid-form-control [show]=\"onFieldInvalid('cnae') == 'required'\" message=\"CNAE es obligatorio.\"></invalid-form-control>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-6\">\n            <label for=\"emailNfe\">E-mail NFE</label>\n            <input\n              type=\"email\"\n              class=\"form-control\"\n              id=\"emailNfe\"\n              formControlName=\"emailNfe\"\n              (input)=\"onInput()\"\n              [ngClass]=\"onFieldError('emailNfe') + ' ' + onFieldRequired('emailNfe')\">\n            <invalid-form-control [show]=\"onFieldInvalid('emailNfe') == 'required'\" message=\"E-mail NFE es obligatorio.\"></invalid-form-control>\n            <invalid-form-control [show]=\"onFieldInvalid('emailNfe') == 'maxlength'\" [message]=\"maxLengthMessages.emailNfe\"></invalid-form-control>\n          </div>\n          <div class=\"form-group col-md-6\">\n            <label for=\"telefone\">Telefono</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"telefone\"\n              formControlName=\"telefone\"\n              (input)=\"onInput()\"\n              [ngClass]=\"onFieldError('telefone') + ' ' + onFieldRequired('telefone')\"\n            >\n            <invalid-form-control [show]=\"onFieldInvalid('telefone') == 'required'\" message=\"Telefono es obligatorio.\"></invalid-form-control>\n          </div>\n          <div class=\"form-group col-md-6\">\n            <!-- <label for=\"tipopessoa\">Tipo de persona</label> -->\n            <!-- <select class=\"form-control\" id=\"tipopessoa\" formControlName=\"tipopessoa\" (change)=\"onInput()\">\n              <option value=\"F\">Persona 1 </option>\n              <option value=\"J\">Persona 2 </option>\n              <option value=\"J\">Persona 3 </option>\n            </select> -->\n          </div>\n        </div>\n        \n        <!-- <div class=\"form-row\">\n          <div class=\"form-group col-md-6\">\n            <label for=\"emailMarketing\">E-mail Marketing</label>\n            <input\n              type=\"email\"\n              class=\"form-control\"\n              id=\"emailMarketing\"\n              formControlName=\"emailMarketing\"\n              (input)=\"onInput()\"\n              [ngClass]=\"onFieldError('emailMarketing') + ' ' + onFieldRequired('emailMarketing')\">\n            <invalid-form-control [show]=\"onFieldInvalid('emailMarketing') == 'maxlength'\" [message]=\"maxLengthMessages.emailMarketing\"></invalid-form-control>\n          </div>\n        </div> -->\n      </form>\n    </div>\n  </div>\n</app-body>\n\n<ng-template #modalDetalhesCliente>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Oops! Ese cliente ya esta registrado</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"onCloseDetails()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"form-row\">\n      <div class=\"col\">\n        <div class=\"mtc-title\">Datos de registro</div>\n      </div>\n    </div>\n    <div class=\"form-row\">\n      <div class=\"form-group col\">\n        <label>Código</label>\n        <div *ngIf=\"dadosCliente.codCliente == null\">Sin informacion</div>\n        <div *ngIf=\"dadosCliente.codCliente != null\">{{ dadosCliente.codCliente }}</div>\n      </div>\n    </div>\n    <div class=\"form-row\">\n      <div class=\"form-group col-lg-6\" *ngIf=\"dadosCliente.tipo == 'F'\">\n        <label>CPF</label>\n        <div *ngIf=\"dadosCliente.cpf == null\">Sin informacion</div>\n        <div *ngIf=\"dadosCliente.cpf != null\">{{ dadosCliente.cpf }}</div>\n      </div>\n      <div class=\"form-group col-lg-6\" *ngIf=\"dadosCliente.tipo == 'J'\">\n        <label>NIT</label>\n        <div *ngIf=\"dadosCliente.cnpj == null\">Sin informacion</div>\n        <div *ngIf=\"dadosCliente.cnpj != null\">{{ dadosCliente.cnpj }}</div>\n      </div>\n      <div class=\"form-group col-lg-6\">\n        <label>Nombre fantasia</label>\n        <div *ngIf=\"dadosCliente.nomeFantasia == null\">Sin informacion</div>\n        <div *ngIf=\"dadosCliente.nomeFantasia != null\">{{ dadosCliente.nomeFantasia }}</div>\n      </div>\n    </div>\n    <div class=\"form-row\">\n      <div class=\"form-group col\">\n        <label>Razon social</label>\n        <div *ngIf=\"dadosCliente.razaoSocial == null\">Sin informacion</div>\n        <div *ngIf=\"dadosCliente.razaoSocial != null\">{{ dadosCliente.razaoSocial }}</div>\n      </div>\n    </div>\n    <div class=\"form-row\">\n      <div class=\"form-group col\">\n        <label>Endereço</label>\n        <div *ngIf=\"dadosCliente.endereco == null\">Sin informacion</div>\n        <div *ngIf=\"dadosCliente.endereco != null\">{{ dadosCliente.endereco }}</div>\n      </div>\n    </div>\n    <div class=\"form-row\">\n      <div class=\"form-group col-lg-6\">\n        <label>Bairro</label>\n        <div *ngIf=\"dadosCliente.bairro == null\">Sin informacion</div>\n        <div *ngIf=\"dadosCliente.bairro != null\">{{ dadosCliente.bairro }}</div>\n      </div>\n      <div class=\"form-group col-lg-6\">\n        <label>CEP</label>\n        <div *ngIf=\"dadosCliente.cep == null\">Sin informacion</div>\n        <div *ngIf=\"dadosCliente.cep != null\">{{ dadosCliente.cep }}</div>\n      </div>\n    </div>\n    <div class=\"form-row\">\n      <div class=\"form-group col-lg-6\">\n        <label>Cidade</label>\n        <div *ngIf=\"dadosCliente.cidade == null\">Sin informacion</div>\n        <div *ngIf=\"dadosCliente.cidade != null\">{{ dadosCliente.cidade }}</div>\n      </div>\n      <div class=\"form-group col-lg-6\">\n        <label>Estado</label>\n        <div *ngIf=\"dadosCliente.uf == null\">Sin informacion</div>\n        <div *ngIf=\"dadosCliente.uf != null\">{{ dadosCliente.uf }}</div>\n      </div>\n    </div>\n    <div class=\"form-row\">\n      <div class=\"form-group col\">\n        <label>Segurado</label>\n        <div *ngIf=\"dadosCliente.segurado != ''\">SI</div>\n        <div *ngIf=\"dadosCliente.segurado == ''\">NO</div>\n      </div>\n    </div>\n    <div class=\"form-row\">\n      <div class=\"form-group col-lg-6\">\n        <label>Vendedor</label>\n        <div *ngIf=\"dadosCliente.vendedor == null\">Sin informacion</div>\n        <div *ngIf=\"dadosCliente.vendedor != null\">{{ dadosCliente.vendedor }}</div>\n      </div>\n      <div class=\"form-group col-lg-6\">\n        <label>Escritório</label>\n        <div *ngIf=\"dadosCliente.escritorio == null\">Sin informacion</div>\n        <div *ngIf=\"dadosCliente.escritorio != null\">{{ dadosCliente.escritorio }}</div>\n      </div>\n    </div>\n    <div class=\"form-row\">\n      <div class=\"form-group col-lg-4\" *ngIf=\"dadosCliente.codSAP != '' && dadosCliente.codSAP != null\">\n        <label>Código DBA</label>\n        <div>{{ dadosCliente.codSAP }}</div>\n      </div>\n      <div class=\"form-group col-lg-4\" *ngIf=\"dadosCliente.escritorioDba != '' && dadosCliente.escritorioDba != null\">\n        <label>Sucursal</label>\n        <div>{{ dadosCliente.escritorioDba }}</div>\n      </div>\n      <div class=\"form-group col-lg-4\" *ngIf=\"dadosCliente.ultimaCompraDba != '' && dadosCliente.ultimaCompraDba != null\">\n        <label>Última compra</label>\n        <div>{{ dadosCliente.ultimaCompraDba }}</div>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-light\" (click)=\"onCloseDetails()\">Fechar</button>\n    <button\n      type=\"button\"\n      class=\"btn btn-primary\"\n      (click)=\"onNavigateDetail()\">\n      Detalles\n    </button>\n  </div>\n</ng-template>\n";
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


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<app-header appTitle=\"Detalles\"></app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\n  <div class=\"row\">\n    <div class=\"col text-center\">\n      <h5 class=\"pt-2 mb-4\">{{ cliente.razaoSocial }}</h5>\n    </div>\n  </div>\n  <div class=\"row mb-4\">\n    <div class=\"col d-flex justify-content-center w-100\">\n      <h5 tooltip=\"Código do cliente\">\n        <span class=\"badge badge-dark\">CÓD.: {{ cliente.codCliente }}</span>\n      </h5>\n      <h5 *ngIf=\"cliente.nomeVendedor\" class=\"ml-3\" tooltip=\"Vendedor\">\n        <span class=\"badge badge-light\">{{ cliente.nomeVendedor | uppercase }}</span>\n      </h5>\n      <h5 class=\"ml-3\" tooltip=\"Status\">\n        <span class=\"badge\" [ngClass]=\"classStatusBadge(cliente.status)\">{{ cliente.status | uppercase }}</span>\n      </h5>\n      <h5 *ngIf=\"cliente.codClienteDBA\" class=\"ml-3\" tooltip=\"Código DBA do cliente\">\n        <span class=\"badge badge-warning\">CÓD. DBA: {{ cliente.codClienteDBA }}</span>\n      </h5>\n    </div>\n  </div>\n  <div class=\"row justify-content-center\">\n    <div class=\"col-lg-9\">\n      <div class=\"row justify-content-center\">\n        <!-- <div class=\"col-md-3\">\n          <card-button\n            icon=\"fas fa-folder-open\"\n            text=\"Datos de registro\"\n            [routerLink]=\"['../../cadastro', cliente.codCliente, 'dados-faturamento']\">\n          </card-button>\n        </div> -->\n         <!--div class=\"col-md-3\">\n          <card-button\n            icon=\"fas fa-chart-pie\"\n            text=\"Dashboard\"\n            [routerLink]=\"['../../dashboard', cliente.codCliente]\">\n          </card-button>\n        </div--> \n        <!-- <div class=\"col-md-3\">\n          <card-button\n            icon=\"fas fa-chart-bar\"\n            text=\"Histórico Financeiro\"\n            [routerLink]=\"['../../historico-financeiro', cliente.codCliente, 'resumo']\">\n          </card-button>\n        </div> -->\n        <!-- <div class=\"col-md-3\">\n          <card-button\n            icon=\"fas fa-handshake\"\n            text=\"Ficha PAC\"\n            [routerLink]=\"['../../proposta-analise-credito', cliente.codCliente]\">\n          </card-button>\n        </div>\n      </div> -->\n      <!-- <div class=\"row justify-content-center\">\n        <div class=\"col-md-3\">\n          <card-button\n            icon=\"fas fa-shopping-cart\"\n            text=\"Vender\"\n            [routerLink]=\"['../../../ciclo-vendas/139/cotacoes-pedidos/lista/']\"\n            [queryParams]=\"{codCliente: cliente.codCliente}\">\n          </card-button>\n        </div> -->\n        <div class=\"col-md-3\">\n          <card-button\n            icon=\"far fa-calendar-alt\"\n            text=\"Agendar\"\n            [routerLink]=\"['../../../agenda/novo', cliente.codCliente]\">\n          </card-button>\n        </div>\n        <!-- <div class=\"col-md-3\">\n          <card-button\n            icon=\"fas fa-tasks\"\n            text=\"Propuestas / Pedidos\"\n            [routerLink]=\"['../../../tid-software/11']\"\n            [queryParams]=\"{ codCliente: cliente.codCliente, sistema: 'vendas', modulo: 3 }\">\n          </card-button>\n        </div> -->\n        <!-- <div class=\"col-md-3\">\n          <card-button\n            icon=\"fas fa-list\"\n            text=\"Últimos precios\"\n            [routerLink]=\"['../../../clientes/ultimos-precos', cliente.codCliente]\">\n          </card-button>\n        </div> -->\n      </div>\n    </div>\n  </div>\n</app-body>\n";
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


      __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col\">\n    <div class=\"d-flex w-100\" *ngIf=\"!notasPromissoriasLoaded\">\n      <div class=\"spinner-border spinner-border-sm text-dark my-auto mr-2\"></div>\n      <strong>Carga de pagarés...</strong>\n    </div>\n    <custom-table [config]=\"tableConfig\">\n      <ng-template #thead let-thead *ngIf=\"notasPromissorias.length > 0 && notasPromissoriasLoaded\">\n        <tr>\n          <th scope=\"col\" class=\"text-center\">Núm. Registro</th>\n          <th scope=\"col\" class=\"text-center\">Núm. Bancário</th>\n          <th scope=\"col\" class=\"text-center\">Baixa</th>\n          <th scope=\"col\" class=\"text-center\">Valor da baixa</th>\n          <th scope=\"col\" class=\"text-center\">Vencimento</th>\n          <th scope=\"col\" class=\"text-center\">Valor da duplicata</th>\n        </tr>\n      </ng-template>\n      <ng-template #tbody let-tbody>\n        <tr *ngFor=\"let nota of notasPromissorias\">\n          <td class=\"text-center\" [ngClass]=\"classStatusBorder(nota.situacao)\">{{ nota.numRegistro }}</td>\n          <td class=\"text-center\">{{ nota.numBancario }}</td>\n          <td class=\"text-center\">{{ nota.dataBaixa }}</td>\n          <td class=\"text-center\">{{ nota.valorBaixa | currency:'BRL':'symbol':'1.2-2' }}</td>\n          <td class=\"text-center\">{{ nota.dataVencimento }}</td>\n          <td class=\"text-center\">{{ nota.valorDuplicata | currency:'BRL':'symbol':'1.2-2' }}</td>\n        </tr>\n      </ng-template>\n    </custom-table>\n    <div class=\"row justify-content-center\" *ngIf=\"notasPromissorias.length > 0 && notasPromissoriasLoaded\">\n      <div class=\"col-6 d-flex justify-content-center w-100\">\n        <div class=\"d-flex justify-content-around\">\n          <div class=\"legend green\">\n            <div class=\"square\"></div>\n            <div class=\"text\">BAIXADA</div>\n          </div>\n          <div class=\"legend blue\">\n            <div class=\"square\"></div>\n            <div class=\"text\">QUITADA</div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <empty-result\n      message=\"Nenhuma informação encontrada\"\n      *ngIf=\"notasPromissorias.length == 0 && notasPromissoriasLoaded\">\n    </empty-result>\n  </div>\n</div>\n";
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
          this.API = "https://crm360.monterrey.com.bo/api/comercial/vendedor";
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
          key: "getCarteiraClientes",
          value: function getCarteiraClientes(params) {
            return this.http.get("".concat(this.API, "/carteira-clientes"), {
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


      __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col\">\n    <div class=\"d-flex w-100\" *ngIf=\"!pedidosLoaded\">\n      <div class=\"spinner-border spinner-border-sm text-dark my-auto mr-2\"></div>\n      <strong>Carga de duplicados...</strong>\n    </div>\n    <div *ngIf=\"pedidos.length > 0 && pedidosLoaded\">\n      <div class=\"row justify-content-between\">\n        <div class=\"col-5\">\n          <div class=\"d-flex\">\n            <div class=\"legend green\">\n              <div class=\"square\"></div>\n              <div class=\"text\">ABIERTO</div>\n            </div>\n            <div class=\"legend blue\">\n              <div class=\"square\"></div>\n              <div class=\"text\">QUITADA</div>\n            </div>\n            <div class=\"legend yellow\">\n              <div class=\"square\"></div>\n              <div class=\"text\">VENCIDA</div>\n            </div>\n            <div class=\"legend red\">\n              <div class=\"square\"></div>\n              <div class=\"text\">PROTESTA</div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-5\">\n          <div class=\"form-group row\">\n            <label for=\"filtro\" class=\"col-2 text-right pb-0 pt-1 pr-2\">Filtrar</label>\n            <div class=\"col-10 pl-0\">\n              <input\n                type=\"text\"\n                class=\"form-control form-control-sm\"\n                id=\"filtro\"\n                placeholder=\"Número da duplicata\"\n                #filtro\n                (input)=\"onFilter(filtro.value)\">\n            </div>\n          </div>\n        </div>\n      </div>\n      <custom-table [config]=\"tableConfig\">\n        <ng-template #thead let-thead>\n          <tr>\n            <th scope=\"col\" class=\"text-center\">Empresa</th>\n            <th scope=\"col\" class=\"text-center\">Facturamiento</th>\n            <th scope=\"col\" class=\"text-center\">Núm. pedido</th>\n            <th scope=\"col\" class=\"text-center\">Duplicar</th>\n            <th scope=\"col\" class=\"text-center\">Vencimiento</th>\n            <th scope=\"col\" class=\"text-center\">Banco</th>\n            <th scope=\"col\" class=\"text-center\">Baja</th>\n            <th scope=\"col\" class=\"text-center\">Tipo</th>\n            <th scope=\"col\" class=\"text-center\">Pré-datada</th>\n            <th scope=\"col\" class=\"text-center\">Atraso</th>\n            <th scope=\"col\" class=\"text-center\">Entrega</th>\n            <th scope=\"col\" class=\"text-center\">Valor</th>\n            <th scope=\"col\" class=\"text-center\"></th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr *ngFor=\"let pedido of pedidosPagination\">\n            <td class=\"text-center\" [ngClass]=\"classStatusBorder(pedido.situacao)\">{{ pedido.empresa }}</td>\n            <td class=\"text-center\">{{ pedido.dataFaturamento }}</td>\n            <td class=\"text-center\">{{ pedido.numPedido }}</td>\n            <td class=\"text-center\">{{ pedido.numDuplicata }}</td>\n            <td class=\"text-center\">{{ pedido.dataVencimento }}</td>\n            <td class=\"text-center\">{{ pedido.banco }}</td>\n            <td class=\"text-center\">{{ pedido.dataBaixa }}</td>\n            <td class=\"text-center\">{{ pedido.tipoBaixa }}</td>\n            <td class=\"text-center\">{{ pedido.dataPreDatada }}</td>\n            <td class=\"text-center\">{{ pedido.atraso }} dias</td>\n            <td class=\"text-center\">{{ pedido.entrega }} dias</td>\n            <td class=\"text-center\">{{ pedido.valor | currency:'BRL':'symbol':'1.2-2' }}</td>\n            <td class=\"text-center\">\n              <a\n                class=\"btn-icon-sm\"\n                tooltip=\"Materiais da duplicata\"\n                container=\"body\"\n                [routerLink]=\"['../materiais-duplicata']\"\n                [queryParams]=\"{\n                  codEmpresa: pedido.idEmpresa,\n                  numPedido: pedido.numPedido,\n                  sequencia: pedido.sequencia\n                }\">\n                <i class=\"fas fa-search\"></i>\n              </a>\n            </td>\n          </tr>\n        </ng-template>\n      </custom-table>\n      <div class=\"row\" *ngIf=\"pedidosLoaded\">\n        <div class=\"col\">\n          <div class=\"d-flex justify-content-center mt-3\" *ngIf=\"pedidosFiltered.length > itemsPerPage\">\n            <pagination\n              [maxSize]=\"maxSize\"\n              [totalItems]=\"pedidosFiltered.length\"\n              (pageChanged)=\"onPageChanged($event)\"\n              [(itemsPerPage)]=\"itemsPerPage\"\n              [boundaryLinks]=\"true\"\n              previousText=\"&lsaquo;\"\n              nextText=\"&rsaquo;\"\n              firstText=\"&laquo;\"\n              lastText=\"&raquo;\">\n            </pagination>\n          </div>\n        </div>\n      </div>\n    </div>\n    <empty-result message=\"Nenhuma informação encontrada\" *ngIf=\"pedidos.length == 0 && pedidosLoaded\"></empty-result>\n  </div>\n</div>\n";
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


      __webpack_exports__["default"] = "<div class=\"row mb-4\">\n  <div class=\"col mb-4\">\n    <div class=\"border rounded bg-white shadow-sm d-flex justify-content-between w-100 p-3\">\n      <div class=\"bg-orange rounded-circle text-white icon-40 my-auto\"><i class=\"fas fa-hand-holding-usd\"></i></div>\n      <div class=\"text-right\" [hidden]=\"!sinteticoPendenciasLoaded\">\n        <h5\n          class=\"font-weight-bolder mb-1\"\n          counto\n          [step]=\"30\"\n          [countTo]=\"sintetico.atrasoPagamento\"\n          [countFrom]=\"0\"\n          [duration]=\"3\"\n          (countoChange)=\"countoAtrasoPagamento = $event\">\n          {{ handleCounter(countoAtrasoPagamento) }} dias\n        </h5>\n        <div class=\"text-muted small font-weight-bold\">MÉDIA ATRASO PAGTO</div>\n      </div>\n      <div class=\"text-right my-auto\" *ngIf=\"!sinteticoPendenciasLoaded\">\n        <div class=\"spinner-border text-dark\"></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col\">\n    <div class=\"border rounded bg-white shadow-sm d-flex justify-content-between w-100 p-3\">\n      <div class=\"bg-gray rounded-circle text-white icon-40 my-auto\"><i class=\"fas fa-truck-moving\"></i></div>\n      <div class=\"text-right\" [hidden]=\"!sinteticoPendenciasLoaded\">\n        <h5\n          class=\"font-weight-bolder mb-1\"\n          counto\n          [step]=\"30\"\n          [countTo]=\"sintetico.tempoEntrega\"\n          [countFrom]=\"0\"\n          [duration]=\"3\"\n          (countoChange)=\"countoTempoEntrega = $event\">\n          {{ handleCounter(countoTempoEntrega) }} dias\n        </h5>\n        <div class=\"text-muted small font-weight-bold\">MÉDIA TEMPO ENTREGA</div>\n      </div>\n      <div class=\"text-right my-auto\" *ngIf=\"!sinteticoPendenciasLoaded\">\n        <div class=\"spinner-border text-dark\"></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col\">\n    <div class=\"border rounded bg-white shadow-sm d-flex justify-content-between w-100 p-3\">\n      <div class=\"bg-red rounded-circle text-white icon-40 my-auto\"><i class=\"fas fa-dollar-sign\"></i></div>\n      <div class=\"text-right\" [hidden]=\"!sinteticoPendenciasLoaded || sintetico.totalAtraso == 0\">\n        <h5\n          class=\"font-weight-bolder mb-1\"\n          counto\n          [step]=\"30\"\n          [countTo]=\"sintetico.totalAtraso\"\n          [countFrom]=\"0\"\n          [duration]=\"3\"\n          (countoChange)=\"countoTotalAtraso = $event\">\n          {{ countoTotalAtraso | currency:'BRL':'symbol':'1.2-2' }}\n        </h5>\n        <div class=\"text-muted small font-weight-bold\">TOTAL EM ATRASO</div>\n      </div>\n      <div class=\"text-right my-auto\" *ngIf=\"sinteticoPendenciasLoaded && sintetico.totalAtraso == 0\">\n        <h5 class=\"font-weight-bolder mb-1\">R$ 0,00</h5>\n        <div class=\"text-muted small font-weight-bold\">TOTAL EM ATRASO</div>\n      </div>\n      <div class=\"text-right my-auto\" *ngIf=\"!sinteticoPendenciasLoaded\">\n        <div class=\"spinner-border text-dark\"></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col\">\n    <div class=\"border rounded bg-white shadow-sm d-flex justify-content-between w-100 p-3\">\n      <div class=\"bg-green rounded-circle text-white icon-40 my-auto\"><i class=\"fas fa-file-invoice-dollar\"></i></div>\n      <div class=\"text-right\" [hidden]=\"!sinteticoPendenciasLoaded || sintetico.pagtoAntecipado == 0\">\n        <h5\n          class=\"font-weight-bolder mb-1\"\n          counto\n          [step]=\"30\"\n          [countTo]=\"sintetico.pagtoAntecipado\"\n          [countFrom]=\"0\"\n          [duration]=\"3\"\n          (countoChange)=\"countoPagtoAntecipado = $event\">\n          {{ countoPagtoAntecipado | currency:'BRL':'symbol':'1.2-2' }}\n        </h5>\n        <div class=\"text-muted small font-weight-bold\">ANTECIPADO DISPONÍVEL</div>\n      </div>\n      <div class=\"text-right my-auto\" *ngIf=\"sinteticoPendenciasLoaded && sintetico.pagtoAntecipado == 0\">\n        <h5 class=\"font-weight-bolder mb-1\">R$ 0,00</h5>\n        <div class=\"text-muted small font-weight-bold\">ANTECIPADO DISPONÍVEL</div>\n      </div>\n      <div class=\"text-right my-auto\" *ngIf=\"!sinteticoPendenciasLoaded\">\n        <div class=\"spinner-border text-dark\"></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col\">\n    <div class=\"border rounded bg-white shadow-sm d-flex justify-content-between w-100 p-3\">\n      <div class=\"bg-blue rounded-circle text-white icon-40 my-auto\"><i class=\"fas fa-building\"></i></div>\n      <div class=\"text-right\" [hidden]=\"!sinteticoPendenciasLoaded || sintetico.creditoSeguradora == 0\">\n        <h5\n          class=\"font-weight-bolder mb-1\"\n          counto\n          [step]=\"30\"\n          [countTo]=\"sintetico.creditoSeguradora\"\n          [countFrom]=\"0\"\n          [duration]=\"3\"\n          (countoChange)=\"countoCreditoSeguradora = $event\">\n          {{ countoCreditoSeguradora | currency:'BRL':'symbol':'1.2-2' }}\n        </h5>\n        <div class=\"text-muted small font-weight-bold\">CRÉDITO SEGURADORA</div>\n      </div>\n      <div class=\"text-right my-auto\" *ngIf=\"sinteticoPendenciasLoaded && sintetico.creditoSeguradora == 0\">\n        <h5 class=\"font-weight-bolder mb-1\">R$ 0,00</h5>\n        <div class=\"text-muted small font-weight-bold\">CRÉDITO SEGURADORA</div>\n      </div>\n      <div class=\"text-right my-auto\" *ngIf=\"!sinteticoPendenciasLoaded\">\n        <div class=\"spinner-border text-dark\"></div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-8\">\n    <div class=\"d-flex w-100\" *ngIf=\"!pedidosLoaded\">\n      <div class=\"spinner-border spinner-border-sm text-dark my-auto mr-2\"></div>\n      <strong>Carregando duplicatas...</strong>\n    </div>\n    <div *ngIf=\"pedidos.length > 0 && pedidosLoaded\">\n      <div class=\"row justify-content-between\">\n        <div class=\"col-6 d-flex\">\n          <div class=\"d-flex my-auto\">\n            <div class=\"legend green\">\n              <div class=\"square\"></div>\n              <div class=\"text\">EM ABERTO</div>\n            </div>\n            <div class=\"legend blue\">\n              <div class=\"square\"></div>\n              <div class=\"text\">QUITADA</div>\n            </div>\n            <div class=\"legend yellow\">\n              <div class=\"square\"></div>\n              <div class=\"text\">VENCIDA</div>\n            </div>\n            <div class=\"legend red\">\n              <div class=\"square\"></div>\n              <div class=\"text\">PROTESTO</div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-5\">\n          <div class=\"form-group row\">\n            <label for=\"filtro\" class=\"col-3 text-right pb-0 pt-1 pr-2\">Filtrar</label>\n            <div class=\"col-9 pl-0\">\n              <input\n                type=\"text\"\n                class=\"form-control form-control-sm\"\n                id=\"filtro\"\n                placeholder=\"Número da duplicata\"\n                #filtro\n                (input)=\"onFilter(filtro.value)\">\n            </div>\n          </div>\n        </div>\n      </div>\n      <custom-table [config]=\"tableConfig\">\n        <ng-template #thead let-thead>\n          <tr>\n            <th scope=\"col\" class=\"text-center\">Empresa</th>\n            <th scope=\"col\" class=\"text-center\">Faturamento</th>\n            <th scope=\"col\" class=\"text-center\">Núm. pedido</th>\n            <th scope=\"col\" class=\"text-center\">Duplicata</th>\n            <th scope=\"col\" class=\"text-center\">Vencto</th>\n            <th scope=\"col\" class=\"text-center\">Baixa</th>\n            <th scope=\"col\" class=\"text-center\">Valor</th>\n            <th scope=\"col\" class=\"text-center\"></th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr *ngFor=\"let pedido of pedidosPagination\">\n            <td class=\"text-center\" [ngClass]=\"classStatusBorder(pedido.situacao)\">{{ pedido.empresa }}</td>\n            <td class=\"text-center\">{{ pedido.dataFaturamento }}</td>\n            <td class=\"text-center\">{{ pedido.numPedido }}</td>\n            <td class=\"text-center\">{{ pedido.numDuplicata }}</td>\n            <td class=\"text-center\">{{ pedido.dataVencimento }}</td>\n            <td class=\"text-center\">{{ pedido.dataBaixa }}</td>\n            <td class=\"text-center\">{{ pedido.valor | currency:'BRL':'symbol':'1.2-2' }}</td>\n            <td class=\"text-center\">\n              <a\n                class=\"btn-icon-sm\"\n                tooltip=\"Materiais da duplicata\"\n                container=\"body\"\n                [routerLink]=\"['../materiais-duplicata']\"\n                [queryParams]=\"{\n                  codEmpresa: pedido.idEmpresa,\n                  numPedido: pedido.numPedido,\n                  sequencia: pedido.sequencia\n                }\">\n                <i class=\"fas fa-search\"></i>\n              </a>\n            </td>\n          </tr>\n        </ng-template>\n      </custom-table>\n      <div class=\"row mt-3\" *ngIf=\"pedidosLoaded\">\n        <div class=\"col\">\n          <div class=\"d-flex justify-content-center mt-3\" *ngIf=\"pedidosFiltered.length > itemsPerPage\">\n            <pagination\n              [maxSize]=\"maxSize\"\n              [totalItems]=\"pedidosFiltered.length\"\n              (pageChanged)=\"onPageChanged($event)\"\n              [(itemsPerPage)]=\"itemsPerPage\"\n              [boundaryLinks]=\"true\"\n              previousText=\"&lsaquo;\"\n              nextText=\"&rsaquo;\"\n              firstText=\"&laquo;\"\n              lastText=\"&raquo;\">\n            </pagination>\n          </div>\n        </div>\n      </div>\n    </div>\n    <empty-result message=\"Nenhuma informação encontrada nos últimos 12 meses. Para períodos anteriores veja em Detalhes.\" *ngIf=\"pedidos.length == 0 && pedidosLoaded\"></empty-result>\n  </div>\n  <div class=\"col-md-4\">\n    <div class=\"d-flex justify-content-between w-100 mb-2\">\n      <div>\n        <h6>\n          <span class=\"mr-2\">Grupo econômico</span>\n          <a\n            href=\"javascript:void(0)\"\n            *ngIf=\"grupoEconomicoLoaded && grupoEconomico.length > 1\"\n            (click)=\"onGrupoEconomico(modalGrupoEconomico)\">(ver detalhes)\n          </a>\n        </h6>\n        <small class=\"form-text text-muted\">VISÃO DO GRUPO ECONÔMICO NO HISTÓRICO FINANCEIRO</small>\n      </div>\n      <div class=\"custom-control custom-switch my-auto\" *ngIf=\"grupoEconomicoLoaded && grupoEconomico.length > 1\">\n        <input\n        type=\"checkbox\"\n        class=\"custom-control-input\"\n        id=\"grupoEconomico\"\n        [checked]=\"visaoGrupoEconomico\"\n        (change)=\"onChangeGrupoEconomico()\"\n        [disabled]=\"!sinteticoPendenciasLoaded\">\n        <label class=\"custom-control-label\" for=\"grupoEconomico\"></label>\n      </div>\n    </div>\n    <ul class=\"list-group\">\n      <li class=\"list-group-item bg-green\">\n        <div class=\"d-flex justify-content-between w-100\">\n          <div class=\"my-auto\">\n            <strong class=\"text-white\">Saldo para faturar</strong>\n          </div>\n          <strong\n            class=\"text-white\"\n            counto\n            [step]=\"30\"\n            [countTo]=\"pendencias.saldo\"\n            [countFrom]=\"0\"\n            [duration]=\"3\"\n            (countoChange)=\"countoSaldo = $event\"\n            [hidden]=\"pendencias.saldo == 0 || !sinteticoPendenciasLoaded\">\n            {{ countoSaldo | currency:'BRL':'symbol':'1.2-2' }}\n          </strong>\n          <strong class=\"text-white\" *ngIf=\"pendencias.saldo == 0 && sinteticoPendenciasLoaded\">R$ 0,00</strong>\n          <div class=\"spinner-border spinner-border-sm text-white\" *ngIf=\"!sinteticoPendenciasLoaded\"></div>\n        </div>\n      </li>\n    </ul>\n    <h6 class=\"my-2\">\n      <a\n        href=\"javascript:void(0)\"\n        (click)=\"showPendenciasDetalhes = !showPendenciasDetalhes\">\n        <span *ngIf=\"!showPendenciasDetalhes\"><i class=\"fas fa-chevron-up\"></i> ver detalhes</span>\n        <span *ngIf=\"showPendenciasDetalhes\"><i class=\"fas fa-chevron-down\"></i> esconder detalhes</span>\n      </a>\n    </h6>\n    <ul class=\"list-group\" *ngIf=\"showPendenciasDetalhes\">\n      <li class=\"list-group-item\">\n        <div class=\"d-flex justify-content-between w-100\">\n          <div class=\"my-auto\">\n            <strong>Títulos em aberto</strong>\n          </div>\n          <strong\n            class=\"text-secondary\"\n            counto\n            [step]=\"30\"\n            [countTo]=\"pendencias.titulos\"\n            [countFrom]=\"0\"\n            [duration]=\"3\"\n            (countoChange)=\"countoTitulos = $event\"\n            [hidden]=\"pendencias.titulos == 0 || !sinteticoPendenciasLoaded\">\n            {{ countoTitulos | currency:'BRL':'symbol':'1.2-2' }}\n          </strong>\n          <strong class=\"text-secondary\" *ngIf=\"pendencias.titulos == 0 && sinteticoPendenciasLoaded\">R$ 0,00</strong>\n          <div class=\"spinner-border spinner-border-sm text-dark\" *ngIf=\"!sinteticoPendenciasLoaded\"></div>\n        </div>\n      </li>\n      <li class=\"list-group-item\">\n        <div class=\"d-flex justify-content-between w-100\">\n          <div class=\"my-auto\">\n            <strong>Notas de débitos em aberto</strong>\n          </div>\n          <strong\n            class=\"text-secondary\"\n            counto\n            [step]=\"30\"\n            [countTo]=\"pendencias.notasDebito\"\n            [countFrom]=\"0\"\n            [duration]=\"3\"\n            (countoChange)=\"countoNotasDebito = $event\"\n            [hidden]=\"pendencias.notasDebito == 0 || !sinteticoPendenciasLoaded\">\n            {{ countoNotasDebito | currency:'BRL':'symbol':'1.2-2' }}\n          </strong>\n          <strong class=\"text-secondary\" *ngIf=\"pendencias.notasDebito == 0 && sinteticoPendenciasLoaded\">R$ 0,00</strong>\n          <div class=\"spinner-border spinner-border-sm text-dark\" *ngIf=\"!sinteticoPendenciasLoaded\"></div>\n        </div>\n      </li>\n      <li class=\"list-group-item\">\n        <div class=\"d-flex justify-content-between w-100\">\n          <div class=\"my-auto\">\n            <strong>Notas promissórias em aberto</strong>\n          </div>\n          <strong\n            class=\"text-secondary\"\n            counto\n            [step]=\"30\"\n            [countTo]=\"pendencias.notasPromissorias\"\n            [countFrom]=\"0\"\n            [duration]=\"3\"\n            (countoChange)=\"countoNotasPromissorias = $event\"\n            [hidden]=\"pendencias.notasPromissorias == 0 || !sinteticoPendenciasLoaded\">\n            {{ countoNotasPromissorias | currency:'BRL':'symbol':'1.2-2' }}\n          </strong>\n          <strong class=\"text-secondary\" *ngIf=\"pendencias.notasPromissorias == 0 && sinteticoPendenciasLoaded\">R$ 0,00</strong>\n          <div class=\"spinner-border spinner-border-sm text-dark\" *ngIf=\"!sinteticoPendenciasLoaded\"></div>\n        </div>\n      </li>\n      <li class=\"list-group-item\">\n        <div class=\"d-flex justify-content-between w-100\">\n          <div class=\"my-auto\">\n            <strong>Cheques devolvidos</strong>\n          </div>\n          <strong\n            class=\"text-secondary\"\n            counto\n            [step]=\"30\"\n            [countTo]=\"pendencias.chequesDevolvidos\"\n            [countFrom]=\"0\"\n            [duration]=\"3\"\n            (countoChange)=\"countoChequesDevolvidos = $event\"\n            [hidden]=\"pendencias.chequesDevolvidos == 0 || !sinteticoPendenciasLoaded\">\n            {{ countoChequesDevolvidos | currency:'BRL':'symbol':'1.2-2' }}\n          </strong>\n          <strong class=\"text-secondary\" *ngIf=\"pendencias.chequesDevolvidos == 0 && sinteticoPendenciasLoaded\">R$ 0,00</strong>\n          <div class=\"spinner-border spinner-border-sm text-dark\" *ngIf=\"!sinteticoPendenciasLoaded\"></div>\n        </div>\n      </li>\n      <li class=\"list-group-item\">\n        <div class=\"d-flex justify-content-between w-100\">\n          <div class=\"my-auto\">\n            <strong>Corte dobra liberado p/ produção</strong>\n          </div>\n          <strong\n            class=\"text-secondary\"\n            counto\n            [step]=\"30\"\n            [countTo]=\"pendencias.corteDobra\"\n            [countFrom]=\"0\"\n            [duration]=\"3\"\n            (countoChange)=\"countoCorteDobra = $event\"\n            [hidden]=\"pendencias.corteDobra == 0 || !sinteticoPendenciasLoaded\">\n            {{ countoCorteDobra | currency:'BRL':'symbol':'1.2-2' }}\n          </strong>\n          <strong class=\"text-secondary\" *ngIf=\"pendencias.corteDobra == 0 && sinteticoPendenciasLoaded\">R$ 0,00</strong>\n          <div class=\"spinner-border spinner-border-sm text-dark\" *ngIf=\"!sinteticoPendenciasLoaded\"></div>\n        </div>\n      </li>\n      <li class=\"list-group-item\">\n        <div class=\"d-flex justify-content-between w-100\">\n          <div class=\"my-auto\">\n            <strong>Reserva de bobinas em aberto</strong>\n          </div>\n          <strong\n            class=\"text-secondary\"\n            counto\n            [step]=\"30\"\n            [countTo]=\"pendencias.reservaBobinas\"\n            [countFrom]=\"0\"\n            [duration]=\"3\"\n            (countoChange)=\"countoReservaBobinas = $event\"\n            [hidden]=\"pendencias.reservaBobinas == 0 || !sinteticoPendenciasLoaded\">\n            {{ countoReservaBobinas | currency:'BRL':'symbol':'1.2-2' }}\n          </strong>\n          <strong class=\"text-secondary\" *ngIf=\"pendencias.reservaBobinas == 0 && sinteticoPendenciasLoaded\">R$ 0,00</strong>\n          <div class=\"spinner-border spinner-border-sm text-dark\" *ngIf=\"!sinteticoPendenciasLoaded\"></div>\n        </div>\n      </li>\n      <li class=\"list-group-item\">\n        <div class=\"d-flex justify-content-between w-100\">\n          <div class=\"my-auto\">\n            <strong>Limite de crédito</strong>\n          </div>\n          <strong\n            class=\"text-secondary\"\n            counto\n            [step]=\"30\"\n            [countTo]=\"pendencias.limiteCredito\"\n            [countFrom]=\"0\"\n            [duration]=\"3\"\n            (countoChange)=\"countoLimiteCredito = $event\"\n            [hidden]=\"pendencias.limiteCredito == 0 || !sinteticoPendenciasLoaded\">\n            {{ countoLimiteCredito | currency:'BRL':'symbol':'1.2-2' }}\n          </strong>\n          <strong class=\"text-secondary\" *ngIf=\"pendencias.limiteCredito == 0 && sinteticoPendenciasLoaded\">R$ 0,00</strong>\n          <div class=\"spinner-border spinner-border-sm text-dark\" *ngIf=\"!sinteticoPendenciasLoaded\"></div>\n        </div>\n      </li>\n    </ul>\n  </div>\n</div>\n\n<ng-template #modalGrupoEconomico>\n  <div class=\"modal-header\">\n    <h5 class=\"modal-title\">Grupo econômico</h5>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"onCloseModalGrupoEconomico()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <custom-table>\n      <ng-template #thead let-thead>\n        <tr>\n          <th scope=\"col\" class=\"text-center\">Tipo</th>\n          <th scope=\"col\" class=\"text-center\">Cód. cliente</th>\n          <th scope=\"col\" class=\"text-center\">Razão social</th>\n          <th scope=\"col\" class=\"text-center\"></th>\n        </tr>\n      </ng-template>\n      <ng-template #tbody let-tbody>\n        <tr *ngFor=\"let item of grupoEconomico\">\n          <td class=\"text-center\">{{ item.tipo }}</td>\n          <td class=\"text-center\">{{ item.codCliente }}</td>\n          <td class=\"text-center\">{{ item.razaoSocial }}</td>\n          <td class=\"text-center\">\n            <a\n              class=\"btn-icon-sm\"\n              tooltip=\"Visualizar histórico financeiro\"\n              container=\"body\"\n              [routerLink]=\"['../../../historico-financeiro', item.codCliente, 'resumo']\"\n              (click)=\"onCloseModalGrupoEconomico()\">\n              <i class=\"fas fa-search\"></i>\n            </a>\n          </td>\n        </tr>\n      </ng-template>\n    </custom-table>\n  </div>\n</ng-template>\n";
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

      var ComercialClientesRoutingModule = function ComercialClientesRoutingModule() {
        _classCallCheck(this, ComercialClientesRoutingModule);
      };

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


      __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col\">\n    <div class=\"d-flex w-100\" *ngIf=\"!debitosLoaded\">\n      <div class=\"spinner-border spinner-border-sm text-dark my-auto mr-2\"></div>\n      <strong>Carga de débitos pendientes...</strong>\n    </div>\n    <custom-table *ngIf=\"debitos.length > 0 && debitosLoaded\">\n      <ng-template #thead let-thead>\n        <tr>\n          <th scope=\"col\" class=\"text-center\">Data Pedido</th>\n          <th scope=\"col\" class=\"text-center\">Núm. Pedido</th>\n          <th scope=\"col\" class=\"text-center\">Núm. Duplicata</th>\n          <th scope=\"col\" class=\"text-center\">Valor Duplicata</th>\n          <th scope=\"col\" class=\"text-center\">Juros</th>\n          <th scope=\"col\" class=\"text-center\">Valor Cartório</th>\n          <th scope=\"col\" class=\"text-center\">Tarifa</th>\n          <th scope=\"col\" class=\"text-center\">Data Tarifa</th>\n          <th scope=\"col\" class=\"text-center\">Valor Tarifa</th>\n        </tr>\n      </ng-template>\n      <ng-template #tbody let-tbody>\n        <tr *ngFor=\"let debito of debitos\">\n          <td class=\"text-center\" [ngClass]=\"classStatusBorder(debito.situacao)\">{{ debito.dataPedido }}</td>\n          <td class=\"text-center\">{{ debito.numPedido }}</td>\n          <td class=\"text-center\">{{ debito.numDuplicata }}</td>\n          <td class=\"text-center\">{{ debito.valorDuplicata | currency:'BRL':'symbol':'1.2-2' }}</td>\n          <td class=\"text-center\">{{ debito.juros }}</td>\n          <td class=\"text-center\">{{ debito.valorCartorio | currency:'BRL':'symbol':'1.2-2' }}</td>\n          <td class=\"text-center\">{{ debito.tarifa }}</td>\n          <td class=\"text-center\">{{ debito.dataTarifa }}</td>\n          <td class=\"text-center\">{{ debito.valorTarifa | currency:'BRL':'symbol':'1.2-2' }}</td>\n        </tr>\n      </ng-template>\n    </custom-table>\n    <empty-result\n      message=\"Nenhuma informação encontrada\"\n      *ngIf=\"debitos.length == 0 && debitosLoaded\">\n    </empty-result>\n    <div class=\"row justify-content-center\" *ngIf=\"debitos.length > 0 && debitosLoaded\">\n      <div class=\"col-6 d-flex justify-content-center w-100\">\n        <div class=\"d-flex justify-content-around\">\n          <div class=\"legend green\">\n            <div class=\"square\"></div>\n            <div class=\"text\">DÉBITO CON NOTA</div>\n          </div>\n          <div class=\"legend blue\">\n            <div class=\"square\"></div>\n            <div class=\"text\">DÉBITO CON NOTA</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
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


      var ComercialClientesHistoricoFinanceiroModule = function ComercialClientesHistoricoFinanceiroModule() {
        _classCallCheck(this, ComercialClientesHistoricoFinanceiroModule);
      };

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


      var ComercialClientesModule = function ComercialClientesModule() {
        _classCallCheck(this, ComercialClientesModule);
      };

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


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\n<app-header appTitle=\"Histórico financeiro\">\n  <button\n    type=\"button\"\n    routerLinkActive=\"active\"\n    [routerLink]=\"['resumo']\">\n    Resumen\n  </button>\n  <button\n    type=\"button\"\n    routerLinkActive=\"active\"\n    [routerLink]=\"['detalhes']\">\n    Detalles\n  </button>\n  <button\n    type=\"button\"\n    routerLinkActive=\"active\"\n    [routerLink]=\"['acumulos-mensais']\">\n    Acumulaciones mensuales\n  </button>\n  <button\n    type=\"button\"\n    routerLinkActive=\"active\"\n    [routerLink]=\"['notas-promissorias']\">\n    Pagarés  </button>\n  <button\n    type=\"button\"\n    routerLinkActive=\"active\"\n    [routerLink]=\"['debitos']\">\n    Débitos\n  </button>\n  <button\n    type=\"button\"\n    routerLinkActive=\"active\"\n    [routerLink]=\"['corte-dobra']\">\n    Corte Doblado\n  </button>\n</app-header>\n<app-body [show]=\"!loaderFullScreen\" [breadCrumbTree]=\"breadCrumbTree\">\n  <div class=\"row mb-3\">\n    <div class=\"col\">\n      <h5 class=\"d-inline-block mb-0 mr-3\" tooltip=\"Código do cliente\">\n        <span class=\"badge badge-dark\">CÓD.: {{ cliente.codCliente }}</span>\n      </h5>\n      <h6 class=\"d-inline-block mb-0\">{{ cliente.razaoSocial }}</h6>\n    </div>\n  </div>\n  <router-outlet></router-outlet>\n</app-body>\n";
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


      __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col\">\n    <div class=\"d-flex w-100\" *ngIf=\"!corteDobraLoaded\">\n      <div class=\"spinner-border spinner-border-sm text-dark my-auto mr-2\"></div>\n      <strong>Carregando Corte Dobra...</strong>\n    </div>\n    <custom-table *ngIf=\"corteDobra.length > 0\">\n      <ng-template #thead let-thead>\n        <tr>\n          <th scope=\"col\" class=\"text-center\">Identificacion</th>\n          <th scope=\"col\" class=\"text-center\">Data</th>\n          <th scope=\"col\" class=\"text-center\">Obra</th>\n          <th scope=\"col\" class=\"text-center\">Discriminación</th>\n          <th scope=\"col\" class=\"text-center\">Valor</th>\n          <th scope=\"col\" class=\"text-center\">Empresa</th>\n        </tr>\n      </ng-template>\n      <ng-template #tbody let-tbody>\n        <tr *ngFor=\"let item of corteDobra\">\n          <td class=\"text-center\">{{ item.identificacao }}</td>\n          <td class=\"text-center\">{{ item.data }}</td>\n          <td class=\"text-center\">{{ item.obra }}</td>\n          <td class=\"text-center\">{{ item.discriminacao }}</td>\n          <td class=\"text-center\">{{ item.valor | currency:'BRL':'symbol':'1.2-2' }}</td>\n          <td class=\"text-center\">{{ item.empresa }}</td>\n        </tr>\n      </ng-template>\n    </custom-table>\n    <empty-result\n      message=\"Nenhuma informação encontrada\"\n      *ngIf=\"corteDobra.length == 0 && corteDobraLoaded\">\n    </empty-result>\n  </div>\n</div>\n";
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


      __webpack_exports__["default"] = ".modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.modal-content {\n  background-color: #fefefe;\n  margin: 15% auto;\n  padding: 20px;\n  border: 1px solid #888;\n  width: 80%;\n}\n\n.close {\n  color: #aaa;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21lcmNpYWwvY2xpZW50ZXMvbGlzdGEvbGlzdGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLG9DQUFBO0FBQ0o7O0FBRUU7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFRTs7RUFFRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2NvbWVyY2lhbC9jbGllbnRlcy9saXN0YS9saXN0YS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogMTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICB9XG4gIFxuICAubW9kYWwtY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiAgICBtYXJnaW46IDE1JSBhdXRvO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcbiAgICB3aWR0aDogODAlO1xuICB9XG4gIFxuICAuY2xvc2Uge1xuICAgIGNvbG9yOiAjYWFhO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgXG4gIC5jbG9zZTpob3ZlcixcbiAgLmNsb3NlOmZvY3VzIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBcbiAgIl19 */";
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

      var ComercialHistoricoFinanceiroRoutingModule = function ComercialHistoricoFinanceiroRoutingModule() {
        _classCallCheck(this, ComercialHistoricoFinanceiroRoutingModule);
      };

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


      __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col\">\n    <div class=\"d-flex w-100\" *ngIf=\"!acumulosMensaisLoaded\">\n      <div class=\"spinner-border spinner-border-sm text-dark my-auto mr-2\"></div>\n      <strong>Carga de acumulaciones mensuales...</strong>\n    </div>\n    <tabset *ngIf=\"acumulosMensaisLoaded\">\n      <tab heading=\"Principal\">\n        <div class=\"border-left border-right border-bottom p-3\">\n          <custom-table *ngIf=\"acumulosMensais.principal.length > 0\">\n            <ng-template #thead let-thead>\n              <tr>\n                <th scope=\"col\" class=\"text-center\">Período</th>\n                <th scope=\"col\" class=\"text-center\">Valor acumulado</th>\n                <th scope=\"col\" class=\"text-center\">Média atraso</th>\n              </tr>\n            </ng-template>\n            <ng-template #tbody let-tbody>\n              <tr *ngFor=\"let acumulo of acumulosMensais.principal\">\n                <td class=\"text-center\">{{ acumulo.periodo }}</td>\n                <td class=\"text-center\">{{ acumulo.valor | currency:'BRL':'symbol':'1.2-2' }}</td>\n                <td class=\"text-center\">{{ acumulo.atraso }} dias</td>\n              </tr>\n            </ng-template>\n          </custom-table>\n          <empty-result\n            message=\"Nenhuma informação encontrada\"\n            *ngIf=\"acumulosMensais.principal.length == 0\">\n          </empty-result>\n        </div>\n      </tab>\n      <tab heading=\"Maior fatura\">\n        <div class=\"border-left border-right border-bottom p-3\">\n          <custom-table *ngIf=\"acumulosMensais.maiorFatura.length > 0\">\n            <ng-template #thead let-thead>\n              <tr>\n                <th scope=\"col\" class=\"text-center\">Núm. Pedido</th>\n                <th scope=\"col\" class=\"text-center\">Data</th>\n                <th scope=\"col\" class=\"text-center\">Empresa</th>\n                <th scope=\"col\" class=\"text-center\">Valor</th>\n              </tr>\n            </ng-template>\n            <ng-template #tbody let-tbody>\n              <tr *ngFor=\"let acumulo of acumulosMensais.maiorFatura\">\n                <td class=\"text-center\">{{ acumulo.numPedido }}</td>\n                <td class=\"text-center\">{{ acumulo.data }}</td>\n                <td class=\"text-center\">{{ acumulo.empresa }}</td>\n                <td class=\"text-center\">{{ acumulo.valor | currency:'BRL':'symbol':'1.2-2' }}</td>\n              </tr>\n            </ng-template>\n          </custom-table>\n          <empty-result\n            message=\"Nenhuma informação encontrada\"\n            *ngIf=\"acumulosMensais.maiorFatura.length == 0\">\n          </empty-result>\n        </div>\n      </tab>\n    </tabset>\n  </div>\n</div>\n";
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


      __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col\">\n    <div class=\"d-flex w-100\" *ngIf=\"!duplicataLoaded\">\n      <div class=\"spinner-border spinner-border-sm text-dark my-auto mr-2\"></div>\n      <strong>Carga de duplicados...</strong>\n    </div>\n    <tabset *ngIf=\"duplicataLoaded\">\n      <tab heading=\"Principal\">\n        <div class=\"border-left border-right border-bottom p-3\">\n          <div class=\"row mb-4\">\n            <div class=\"col\">\n              <div class=\"bg-light rounded p-4\">\n                <div class=\"mtc-title\">Duplicar</div>\n                <div class=\"row\">\n                  <div class=\"col-md-4\">\n                    <p><strong>Núm. NF:</strong> {{ principal.duplicata.notaSaida }}</p>\n                    <p class=\"mb-0\"><strong>Núm. Pedido:</strong> {{ principal.duplicata.numPedido }}</p>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <p><strong>Data:</strong> {{ principal.duplicata.data }}</p>\n                    <p class=\"mb-0\"><strong>Línea:</strong> {{ principal.duplicata.linhaNota }}</p>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <p><strong>Cliente:</strong> {{ principal.duplicata.razaoSocial }}</p>\n                    <p class=\"mb-0\"><strong>Vendedor:</strong> {{ principal.duplicata.nomeVendedor }}</p>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row mb-4\">\n            <div class=\"col\">\n              <custom-table *ngIf=\"principal.materiais.length > 0\">\n                <ng-template #thead let-thead>\n                  <tr>\n                    <th scope=\"col\" class=\"text-center\">Código</th>\n                    <th scope=\"col\" class=\"text-center\">Descripción</th>\n                    <th scope=\"col\" class=\"text-center\">Sit. Tributária</th>\n                    <th scope=\"col\" class=\"text-center\">Qtde.</th>\n                    <th scope=\"col\" class=\"text-center\">Valor unidades</th>\n                    <th scope=\"col\" class=\"text-center\">Valor total</th>\n                    <th scope=\"col\" class=\"text-center\">Alíquota ICMS</th>\n                  </tr>\n                </ng-template>\n                <ng-template #tbody let-tbody>\n                  <tr *ngFor=\"let material of principal.materiais\">\n                    <td class=\"text-center\">{{ material.idMaterial }}</td>\n                    <td class=\"text-center\">{{ material.nomeMaterial }}</td>\n                    <td class=\"text-center\">{{ material.situacaoTributaria }}</td>\n                    <td class=\"text-center\">{{ material.quantidade }}</td>\n                    <td class=\"text-center\">{{ material.valorUnitario | currency:'BRL':'symbol':'1.2-2' }}</td>\n                    <td class=\"text-center\">{{ material.valorTotalItem | currency:'BRL':'symbol':'1.2-2' }}</td>\n                    <td class=\"text-center\" *ngIf=\"material.aliquotaIcms > 0\">{{ material.aliquotaIcms | number:'1.2-2' }}%</td>\n                    <td class=\"text-center\" *ngIf=\"material.aliquotaIcms == 0\">0,00%</td>\n                  </tr>\n                </ng-template>\n              </custom-table>\n              <empty-result\n                message=\"Nenhuma informação encontrada\"\n                *ngIf=\"principal.materiais.length == 0\">\n              </empty-result>\n            </div>\n          </div>\n          <div class=\"row mb-4\">\n            <div class=\"col-md-6\">\n              <div class=\"bg-light rounded p-4\">\n                <div class=\"mtc-title\">Condiciones de pago</div>\n                <p class=\"mb-0\"><strong></strong>{{ principal.materiais[0]['condicaoPagamento'] }}</p>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"bg-light rounded p-4\">\n                <div class=\"mtc-title\">Total productos</div>\n                <div class=\"row\">\n                  <div class=\"col-md-6\">\n                    <p class=\"mb-0\"><strong>Cantidad:</strong> {{ principal.total.peso | number:'1.3-3' }} TON</p>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <p class=\"mb-0\"><strong>Valor:</strong> {{ principal.total.valor | currency:'BRL':'symbol':'1.2-2' }}</p>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col\">\n              <div class=\"bg-light rounded p-4\">\n                <div class=\"mtc-title\">Lugar de entrega</div>\n                <div class=\"row\">\n                  <div class=\"col-md-6\">\n                    <p><strong>Referencia:</strong> {{ principal.entrega.referencia }}</p>\n                    <p class=\"mb-0\"><strong>Endereço:</strong> {{ principal.entrega.logradouro }}</p>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <p><strong>Ciudad:</strong> {{ principal.entrega.cidade }}</p>\n                    <p class=\"mb-0\"><strong>Bairro:</strong> {{ principal.entrega.bairro }}</p>\n                  </div>\n                  <div class=\"col-md-2\">\n                    <p class=\"mb-0\"><strong>UF:</strong> {{ principal.entrega.uf }}</p>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </tab>\n      <tab heading=\"Histórico de cobranças\">\n        <div class=\"border-left border-right border-bottom p-3\">\n          <div class=\"row mb-4\">\n            <div class=\"col\">\n              <div class=\"bg-light rounded p-4\">\n                <div class=\"mtc-title\">Duplicar</div>\n                <div class=\"row\">\n                  <div class=\"col-md-4\">\n                    <p><strong>Núm. NF:</strong> {{ principal.duplicata.notaSaida }}</p>\n                    <p class=\"mb-0\"><strong>Núm. Pedido:</strong> {{ principal.duplicata.numPedido }}</p>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <p><strong>Data:</strong> {{ principal.duplicata.data }}</p>\n                    <p class=\"mb-0\"><strong>Linha:</strong> {{ principal.duplicata.linhaNota }}</p>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <p><strong>Cliente:</strong> {{ principal.duplicata.razaoSocial }}</p>\n                    <p class=\"mb-0\"><strong>Vendedor:</strong> {{ principal.duplicata.nomeVendedor }}</p>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row mb-4\">\n            <div class=\"col\">\n              <custom-table *ngIf=\"historicoCobrancas.length > 0\">\n                <ng-template #thead let-thead>\n                  <tr>\n                    <th scope=\"col\" class=\"text-center\">Num. Lanzamiento</th>\n                    <th scope=\"col\" class=\"text-center\">Situación</th>\n                    <th scope=\"col\" class=\"text-center\">Fecha</th>\n                    <th scope=\"col\" class=\"text-center\">Usuário</th>\n                    <th scope=\"col\" class=\"text-center\">Comentário</th>\n                  </tr>\n                </ng-template>\n                <ng-template #tbody let-tbody>\n                  <tr *ngFor=\"let cobranca of historicoCobrancas\">\n                    <td class=\"text-center\">{{ cobranca.numLancamento }}</td>\n                    <td class=\"text-center\">{{ cobranca.situacao }}</td>\n                    <td class=\"text-center\">{{ cobranca.data }}</td>\n                    <td class=\"text-center\">{{ cobranca.nome }}</td>\n                    <td class=\"text-center\">{{ cobranca.comentario }}</td>\n                  </tr>\n                </ng-template>\n              </custom-table>\n              <empty-result\n                message=\"Nenhuma informação encontrada\"\n                *ngIf=\"historicoCobrancas.length == 0\">\n              </empty-result>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"bg-light rounded p-4\">\n                <div class=\"mtc-title\">Colección de la empresa</div>\n                <div class=\"row\">\n                  <div class=\"col-md-6\">\n                    <p class=\"mb-0\"><strong>Código:</strong> Nenhuma informação</p>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <p class=\"mb-0\"><strong>Descripcion:</strong> Nenhuma informação</p>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"bg-light rounded p-4\">\n                <div class=\"mtc-title\">Vencimento original</div>\n                <div class=\"row\">\n                  <div class=\"col\">\n                    <p class=\"mb-0\">No hay información</p>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </tab>\n      <tab heading=\"Ocorrências da duplicata\">\n        <div class=\"border-left border-right border-bottom p-3\">\n          <div class=\"row mb-4\">\n            <div class=\"col\">\n              <div class=\"bg-light rounded p-4\">\n                <div class=\"mtc-title\">Duplicar</div>\n                <div class=\"row\">\n                  <div class=\"col-md-4\">\n                    <p><strong>Núm. NF:</strong> {{ principal.duplicata.notaSaida }}</p>\n                    <p class=\"mb-0\"><strong>Núm. Pedido:</strong> {{ principal.duplicata.numPedido }}</p>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <p><strong>Data:</strong> {{ principal.duplicata.data }}</p>\n                    <p class=\"mb-0\"><strong>Linha:</strong> {{ principal.duplicata.linhaNota }}</p>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <p><strong>Cliente:</strong> {{ principal.duplicata.razaoSocial }}</p>\n                    <p class=\"mb-0\"><strong>Vendedor:</strong> {{ principal.duplicata.nomeVendedor }}</p>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col\">\n              <custom-table *ngIf=\"ocorrenciasDuplicatas.length > 0\">\n                <ng-template #thead let-thead>\n                  <tr>\n                    <th scope=\"col\" class=\"text-center\">Duplicata</th>\n                    <th scope=\"col\" class=\"text-center\">Operação</th>\n                    <th scope=\"col\" class=\"text-center\">Data</th>\n                    <th scope=\"col\" class=\"text-center\">Descrição</th>\n                  </tr>\n                </ng-template>\n                <ng-template #tbody let-tbody>\n                  <tr *ngFor=\"let ocorrencia of ocorrenciasDuplicatas\">\n                    <td class=\"text-center\">{{ ocorrencia.numDuplicata }}</td>\n                    <td class=\"text-center\">{{ ocorrencia.operacao }}</td>\n                    <td class=\"text-center\">{{ ocorrencia.data }}</td>\n                    <td class=\"text-center\">{{ ocorrencia.descricao }}</td>\n                  </tr>\n                </ng-template>\n              </custom-table>\n              <empty-result\n                message=\"No hay información encontrada\"\n                *ngIf=\"ocorrenciasDuplicatas.length == 0\">\n              </empty-result>\n            </div>\n          </div>\n        </div>\n      </tab>\n      <tab heading=\"Ocorrências comerciais\">\n        <div class=\"border-left border-right border-bottom p-3\">\n          <div class=\"row mb-4\">\n            <div class=\"col\">\n              <div class=\"bg-light rounded p-4\">\n                <div class=\"mtc-title\">Duplicata</div>\n                <div class=\"row\">\n                  <div class=\"col-md-4\">\n                    <p><strong>Núm. NF:</strong> {{ principal.duplicata.notaSaida }}</p>\n                    <p class=\"mb-0\"><strong>Núm. Pedido:</strong> {{ principal.duplicata.numPedido }}</p>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <p><strong>Data:</strong> {{ principal.duplicata.data }}</p>\n                    <p class=\"mb-0\"><strong>Linha:</strong> {{ principal.duplicata.linhaNota }}</p>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <p><strong>Cliente:</strong> {{ principal.duplicata.razaoSocial }}</p>\n                    <p class=\"mb-0\"><strong>Vendedor:</strong> {{ principal.duplicata.nomeVendedor }}</p>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col\">\n              <custom-table *ngIf=\"ocorrenciasComerciais.length > 0\">\n                <ng-template #thead let-thead>\n                  <tr>\n                    <th scope=\"col\" class=\"text-center\">Número</th>\n                    <th scope=\"col\" class=\"text-center\">Data</th>\n                    <th scope=\"col\" class=\"text-center\">Hora</th>\n                    <th scope=\"col\" class=\"text-center\">Usuário</th>\n                    <th scope=\"col\" class=\"text-center\">Operação</th>\n                    <th scope=\"col\" class=\"text-center\">Situação</th>\n                  </tr>\n                </ng-template>\n                <ng-template #tbody let-tbody>\n                  <tr *ngFor=\"let ocorrencia of ocorrenciasComerciais\">\n                    <td class=\"text-center\">{{ ocorrencia.numero }}</td>\n                    <td class=\"text-center\">{{ ocorrencia.data }}</td>\n                    <td class=\"text-center\">{{ ocorrencia.hora }}</td>\n                    <td class=\"text-center\">{{ ocorrencia.nome }}</td>\n                    <td class=\"text-center\">{{ ocorrencia.operacao }}</td>\n                    <td class=\"text-center\">{{ ocorrencia.situacao }}</td>\n                  </tr>\n                </ng-template>\n              </custom-table>\n              <empty-result\n                message=\"No hay información encontrada\"\n                *ngIf=\"ocorrenciasComerciais.length == 0\">\n              </empty-result>\n            </div>\n          </div>\n        </div>\n      </tab>\n    </tabset>\n  </div>\n</div>\n";
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


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<app-header appTitle=\"Busqueda de clientes\">\n  <!-- <button\n    type=\"button\"\n    [routerLink]=\"['../pre-cadastro']\">\n    Adicionar\n  </button> -->\n  <button\n    type=\"button\"\n    (click)=\"onFilter()\">\n    Filtrar\n  </button>\n\n\n\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\n  <div class=\"row justify-content-center mb-2\">\n     <div class=\"col-lg-6\">\n      <ul class=\"list-unstyled mb-0 d-flex justify-content-around\">\n        <li class=\"text-center hover px-3\" (click)=\"filterByStatus('Ativo')\">\n          <h6 class=\"text-muted font-weight-light\">Activos</h6>\n          <div class=\"text-success\">\n            <h4>\n              <strong\n                counto\n                [step]=\"30\"\n                [countTo]=\"ativos\"\n                [countFrom]=\"0\"\n                [duration]=\"3\"\n                (countoChange)=\"countoAtivos = $event\">\n                {{ handleCounter(countoAtivos) }}\n              </strong>\n            </h4>\n          </div>\n        </li>\n        <li class=\"text-center hover px-3\" (click)=\"filterByStatus('Inativo')\">\n          <h6 class=\"text-muted font-weight-light\">Inactivos</h6>\n          <div class=\"text-danger\">\n            <h4>\n              <strong\n                counto\n                [step]=\"30\"\n                [countTo]=\"inativos\"\n                [countFrom]=\"0\"\n                [duration]=\"3\"\n                (countoChange)=\"countoInativos = $event\">\n                {{ handleCounter(countoInativos) }}\n              </strong>\n            </h4>\n          </div>\n        </li>\n        <li class=\"text-center hover px-3\" (click)=\"filterByStatus('Potenci')\">\n          <h6 class=\"text-muted font-weight-light\">Potencial</h6>\n          <div class=\"text-primary\">\n            <h4>\n              <strong\n                counto\n                [step]=\"30\"\n                [countTo]=\"potencial\"\n                [countFrom]=\"0\"\n                [duration]=\"3\"\n                (countoChange)=\"countoPotencial = $event\">\n                {{ handleCounter(countoPotencial) }}\n              </strong>\n            </h4>\n          </div>\n        </li>\n        <li class=\"text-center hover px-3\" (click)=\"filterByStatus('Arquivo')\">\n          <h6 class=\"text-muted font-weight-light\">Archivados</h6>\n          <div class=\"text-secondary\">\n            <h4>\n              <strong\n                counto\n                [step]=\"30\"\n                [countTo]=\"arquivados\"\n                [countFrom]=\"0\"\n                [duration]=\"3\"\n                (countoChange)=\"countoArquivados = $event\">\n                {{ handleCounter(countoArquivados) }}\n              </strong>\n            </h4>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <advanced-filter>\n    <form [formGroup]=\"formFilter\">\n      <div class=\"form-row\">\n        <div class=\"form-group col-lg-3\">\n          <label for=\"buscarPor\">Buscar por</label>\n          <select\n            class=\"form-control custom-select\"\n            id=\"buscarPor\"\n            formControlName=\"buscarPor\">\n            <option value=\"1\">Código, nombre o razon social</option>\n            <option value=\"2\">C.I. o NIT</option>\n          </select>\n        </div>\n        <div class=\"form-group col-lg-3\">\n          <label for=\"pesquisa\">Termino de busqueda</label>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            formControlName=\"pesquisa\"\n            (keydown.enter)=\"onFilter()\">\n        </div>\n        <div class=\"form-group col-lg-3\">\n          <label for=\"situacao\">Situacion</label>\n          <select\n            class=\"form-control custom-select\"\n            id=\"situacao\"\n            formControlName=\"situacao\">\n            <option value=\"Ativo\">Activos</option>\n            <option value=\"Inativo\">Inactivos</option>\n            <option value=\"Potenci\">Potenciales</option>\n            <option value=\"Arquivo\">Archivados</option>\n            <option value=\"T\">Todos</option>\n          </select>\n        </div>\n        <div class=\"form-group col-lg-3\">\n          <label for=\"setorAtividade\">Sector empresarial</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"false\"\n            [items]=\"setorAtividades\"\n            [virtualScroll]=\"true\"\n            labelForId=\"setorAtividade\"\n            bindLabel=\"descricao\"\n            bindValue=\"id\"\n            formControlName=\"setorAtividade\">\n          </ng-select>\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"form-group col-lg-3 mb-lg-0\">\n          <label for=\"tipoPessoa\">Tipo de persona</label>\n          <select\n            class=\"form-control custom-select\"\n            id=\"tipoPessoa\"\n            formControlName=\"tipoPessoa\">\n            <option value=\"F\">Persona física</option>\n            <option value=\"J\">Persona jurídica</option>\n            <option value=\"T\">Todos</option>\n          </select>\n        </div>\n        <!-- <div class=\"form-group col-lg-3 mb-lg-0\">\n          <label for=\"grupoEconomico\">Esta en grupo economico</label>\n          <select\n            class=\"form-control custom-select\"\n            id=\"grupoEconomico\"\n            formControlName=\"grupoEconomico\">\n            <option value=\"S\">Si</option>\n            <option value=\"N\">No</option>\n            <option value=\"T\">Todos</option>\n          </select>\n        </div>\n        <div class=\"form-group col-lg-3 mb-lg-0\">\n          <label for=\"segurado\">Asegurado</label>\n          <select\n            class=\"form-control custom-select\"\n            id=\"segurado\"\n            formControlName=\"segurado\">\n            <option value=\"S\">Si</option>\n            <option value=\"N\">No</option>\n            <option value=\"T\">Todos</option>\n          </select>\n        </div> -->\n        <!-- <div class=\"form-group col-lg-2 mb-lg-0\">\n          <label for=\"carteira\">Cartera</label>\n          <select\n            class=\"form-control custom-select\"\n            id=\"carteira\"\n            formControlName=\"carteira\">\n            <option value=\"S\" selected>Mi cartera</option>\n            <option value=\"T\">Todos</option>\n          </select>\n        </div> -->\n        <div class=\"form-group col-lg-1 mb-lg-0\">\n          <label for=\"registros\">Registros</label>\n          <select\n            class=\"form-control custom-select\"\n            id=\"registros\"\n            formControlName=\"registros\">\n            <option>10</option>\n            <option>25</option>\n            <option>50</option>\n            <option>100</option>\n            <option>200</option>\n          </select>\n        </div>\n      </div>\n    </form>\n  </advanced-filter>\n  <div class=\"row mt-3\" *ngIf=\"dataLoaded && searchSubmitted && clientes.length == 0 && buscandoPor != 2\">\n    <div class=\"col-12\">\n      <empty-result message=\"No se encontraron clientes para esta búsqueda.\" class=\"py-4\"></empty-result>\n    </div>\n  </div>\n  <div class=\"row mt-3\" *ngIf=\"dataLoaded && searchSubmitted && clientes.length == 0 && buscandoPor == 2\">\n    <div class=\"col-7 d-flex justify-content-end w-100 pr-0\">\n      <empty-result message=\"No se encontraron clientes para esta búsqueda.\" class=\"py-4\"></empty-result>\n    </div>\n    <div class=\"col-5 d-flex w-100 pl-1\">\n      <a [routerLink]=\"['../pre-cadastro']\" [queryParams]=\"onPreCadastroCpfCnpj()\" class=\"my-auto\">\n        <strong>Pulse aquí para registrarse..</strong>\n      </a>\n    </div>\n  </div>\n  <div class=\"row mt-4\" *ngIf=\"dataLoaded && clientes.length > 0\">\n    <div [ngClass]=\"{'col-12': !showDetailPanel, 'col-7 pr-0': showDetailPanel}\">\n      <custom-table [config]=\"tableConfig\">\n        <ng-template #thead let-thead>\n          <tr>\n            <th scope=\"col\"></th>\n            <th\n              scope=\"col\"\n              class=\"text-center hover\"\n              (click)=\"setOrderBy('codigo_cliente')\">\n              <thead-sorter value=\"Código Cliente\" [active]=\"orderBy == 'codigo_cliente'\" [sort]=\"orderType\"></thead-sorter>\n            </th>\n            <th\n              scope=\"col\"\n              class=\"text-center hover\"\n              (click)=\"setOrderBy('cpf')\">\n              <thead-sorter value=\"CI/NIT\" [active]=\"orderBy == 'cpf'\" [sort]=\"orderType\"></thead-sorter>\n            </th>\n            <th\n              scope=\"col\"\n              class=\"hover\"\n              (click)=\"setOrderBy('nomeFantasia')\">\n              <thead-sorter value=\"Nombre y apelllido\" [active]=\"orderBy == 'nomeFantasia'\" [sort]=\"orderType\"></thead-sorter>\n            </th>\n            <th\n              scope=\"col\"\n              class=\"hover\"\n              (click)=\"setOrderBy('razaoSocial')\"\n              *ngIf=\"!showDetailPanel\">\n              <thead-sorter value=\"Razon Social\" [active]=\"orderBy == 'razaoSocial'\" [sort]=\"orderType\"></thead-sorter>\n            </th>\n            <th scope=\"col\"></th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr *ngFor=\"let cliente of clientes\" [class.table-active]=\"cliente.codigo_cliente == clienteSelecionado\">\n            <td class=\"text-center hover\" [ngClass]=\"classStatusBorder(cliente.situacao)\" (click)=\"viewRegister(cliente)\">\n              <i class=\"text-black-50 far fa-check-square mr-3\" *ngIf=\"cliente.segurado == 0\" tooltip=\"Cliente no asegurado\" placement=\"right\"></i>\n              <i class=\"text-warning fas fa-check-square mr-3\" *ngIf=\"cliente.segurado > 0\" tooltip=\"Cliente asegurado\" placement=\"right\"></i>\n              <i class=\"text-black-50 far fa-folder-open\" *ngIf=\"cliente.grupoEconomico == 0\" tooltip=\"No hace parte de grupo economico\" placement=\"right\"></i>\n              <i class=\"text-warning fas fa-folder-open\" *ngIf=\"cliente.grupoEconomico > 0\" tooltip=\"Pertenece a un grupo economico\" placement=\"right\"></i>\n            </td>\n            <td class=\"text-center hover\" (click)=\"viewRegister(cliente)\">{{ cliente.codigo_cliente }}</td>\n            <td class=\"text-center hover\" (click)=\"viewRegister(cpf)\">{{ cliente.cpf }}</td>\n            <td class=\"hover\" (click)=\"viewRegister(cliente)\">{{ cliente.nomeFantasia | uppercase }}</td>\n            <td class=\"hover\" (click)=\"viewRegister(cliente)\" *ngIf=\"!showDetailPanel\">{{ cliente.razaoSocial | uppercase }}</td>\n            <td>\n              <span tooltip=\"Datos registrados\" placement=\"left\" container=\"body\">\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"viewDetails(cliente)\">\n                  <i class=\"fas fa-user\"></i>\n                </button>\n              </span>\n            </td>\n          </tr>\n        </ng-template>\n      </custom-table>\n      <div class=\"d-flex justify-content-center mt-3\" *ngIf=\"clientes[0]['total'] > itemsPerPage\">\n        <pagination\n          [maxSize]=\"maxSize\"\n          [(totalItems)]=\"totalItems\"\n          (pageChanged)=\"onPageChanged($event)\"\n          [(itemsPerPage)]=\"itemsPerPage\"\n          [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPage\"\n          previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\"\n          lastText=\"&raquo;\">\n        </pagination>\n      </div>\n    </div>\n    <div class=\"col-5\" [hidden]=\"!showDetailPanel\">\n      <div class=\"sticky-top\">\n        <detail-panel>\n          <tabset>\n            <tab heading=\"Datos registrados\">\n              <div class=\"border-right border-left border-bottom px-3 pt-3\">\n                <div *ngIf=\"dadosCadastraisLoaded && !dadosCadastraisEmpty\">\n                  <div class=\"form-row\">\n                    <div class=\"form-group col-lg-6\" *ngIf=\"dadosCadastrais.tipoPessoa == 'F'\">\n                      <label>C.I. o NIT</label>\n                      <div *ngIf=\"dadosCadastrais.cpf == null\">NO INFORMADO</div>\n                      <div *ngIf=\"dadosCadastrais.cpf != null\">{{ dadosCadastrais.cpf }}</div>\n                    </div>\n                    <div class=\"form-group col-lg-6\" *ngIf=\"dadosCadastrais.tipoPessoa == 'J'\">\n                      <label>CNPJ</label>\n                      <div *ngIf=\"dadosCadastrais.cnpj == null\">NO INFORMADO</div>\n                      <div *ngIf=\"dadosCadastrais.cnpj != null\">{{ dadosCadastrais.cnpj }}</div>\n                    </div>\n                    <div class=\"form-group col-lg-6\">\n                      <label>Nombre</label>\n                      <div *ngIf=\"dadosCadastrais.nomeFantasia == null\">NO INFORMADO</div>\n                      <div *ngIf=\"dadosCadastrais.nomeFantasia != null\">{{ dadosCadastrais.nomeFantasia }}</div>\n                    </div>\n                  </div>\n                  <div class=\"form-row\">\n                    <div class=\"form-group col\">\n                      <label>Razon social</label>\n                      <div *ngIf=\"dadosCadastrais.razaoSocial == null\">NO INFORMADO</div>\n                      <div *ngIf=\"dadosCadastrais.razaoSocial != null\">{{ dadosCadastrais.razaoSocial }}</div>\n                    </div>\n                  </div>\n                  <div class=\"form-row\">\n                    <div class=\"form-group col\">\n                      <label>Direccion</label>\n                      <div *ngIf=\"dadosCadastrais.endereco == null\">NO INFORMADO</div>\n                      <div *ngIf=\"dadosCadastrais.endereco != null\">{{ dadosCadastrais.endereco }}</div>\n                    </div>\n                  </div>\n                  <div class=\"form-row\">\n                    <div class=\"form-group col-lg-6\">\n                      <label>Barrio</label>\n                      <div *ngIf=\"dadosCadastrais.bairro == null\">NO INFORMADO</div>\n                      <div *ngIf=\"dadosCadastrais.bairro != null\">{{ dadosCadastrais.bairro }}</div>\n                    </div>\n                    <!-- <div class=\"form-group col-lg-6\">\n                      <label>CEP</label>\n                      <div *ngIf=\"dadosCadastrais.cep == null\">NO INFORMADO</div>\n                      <div *ngIf=\"dadosCadastrais.cep != null\">{{ dadosCadastrais.cep }}</div>\n                    </div> -->\n                  </div>\n                  <div class=\"form-row\">\n                    <div class=\"form-group col-lg-6\">\n                      <label>Ciudad</label>\n                      <div *ngIf=\"dadosCadastrais.cidade == null\">NO INFORMADO</div>\n                      <div *ngIf=\"dadosCadastrais.cidade != null\">{{ dadosCadastrais.cidade }}</div>\n                    </div>\n                    <div class=\"form-group col-lg-6\">\n                      <label>Departamento</label>\n                      <div *ngIf=\"dadosCadastrais.uf == null\">NO INFORMADO</div>\n                      <div *ngIf=\"dadosCadastrais.uf != null\">{{ dadosCadastrais.uf }}</div>\n                    </div>\n                  </div>\n                  <div class=\"form-row\">\n                    <div class=\"form-group col\">\n                      <label>Asegurado</label>\n                      <div *ngIf=\"dadosCadastrais.segurado != ''\">Si</div>\n                      <div *ngIf=\"dadosCadastrais.segurado == ''\">NO</div>\n                    </div>\n                  </div>\n                  <div class=\"form-row\">\n                    <div class=\"form-group col-lg-6\">\n                      <label>Vendedor</label>\n                      <div *ngIf=\"dadosCadastrais.vendedor == null\">NO INFORMADO</div>\n                      <div *ngIf=\"dadosCadastrais.vendedor != null\">{{ dadosCadastrais.vendedor }}</div>\n                    </div>\n                    <div class=\"form-group col-lg-6\">\n                      <label>Sucursal</label>\n                      <div *ngIf=\"dadosCadastrais.escritorio == null\">NO INFORMADO</div>\n                      <div *ngIf=\"dadosCadastrais.escritorio != null\">{{ dadosCadastrais.escritorio }}</div>\n                    </div>\n                  </div>\n                  <div class=\"form-row\">\n                    <div class=\"form-group col-lg-4\" *ngIf=\"dadosCadastrais.codSAP != '' && dadosCadastrais.codSAP != null\">\n                      <label>Código DBA</label>\n                      <div>{{ dadosCadastrais.codSAP }}</div>\n                    </div>\n                    <div class=\"form-group col-lg-4\" *ngIf=\"dadosCadastrais.escritorioDba != '' && dadosCadastrais.escritorioDba != null\">\n                      <label>Sucursal</label>\n                      <div>{{ dadosCadastrais.escritorioDba }}</div>\n                    </div>\n                    <div class=\"form-group col-lg-4\" *ngIf=\"dadosCadastrais.ultimaCompraDba != '' && dadosCadastrais.ultimaCompraDba != null\">\n                      <label>Última compra</label>\n                      <div>{{ dadosCadastrais.ultimaCompraDba }}</div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"mb-3\" *ngIf=\"dadosCadastraisLoaded && dadosCadastraisEmpty\">\n                  <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n                </div>\n                <div class=\"d-flex justify-content-center mb-3\" *ngIf=\"!dadosCadastraisLoaded\">\n                  <div class=\"spinner-border text-dark\"></div>\n                </div>\n              </div>\n            </tab>\n            <tab heading=\"Contatos\">\n              <div class=\"border-right border-left border-bottom px-3 pt-3\">\n                <div *ngIf=\"contatosLoaded && !contatosEmpty\">\n                  <div class=\"form-row\" *ngFor=\"let contato of contatos\">\n                    <div class=\"form-group col\">\n                      <label>{{ contato.tipoContato }}</label>\n                      <div>\n                        <span *ngIf=\"contato.nomeContato.length > 1\" class=\"mr-1\">{{ contato.nomeContato }} :</span>\n                        <span\n                          *ngIf=\"(contato.tipoContato != 'Email NFe') &&\n                                (contato.tipoContato != 'E-mail NFe') &&\n                                (contato.tipoContato != 'MalaDireta') &&\n                                (contato.tipoContato != 'E-Mail')\">\n                          {{ contato.contato }}\n                        </span>\n                        <span\n                          *ngIf=\"(contato.tipoContato == 'Email NFe') ||\n                                (contato.tipoContato == 'E-mail NFe') ||\n                                (contato.tipoContato == 'MalaDireta') ||\n                                (contato.tipoContato == 'E-Mail')\">\n                          <a [href]=\"'mailto:' + contato.contato\">{{ contato.contato | lowercase }}</a>\n                        </span>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"mb-3\" *ngIf=\"contatosLoaded && contatosEmpty\">\n                  <empty-result message=\"Ningun contacto encontrado\"></empty-result>\n                </div>\n                <div class=\"d-flex justify-content-center mb-3\" *ngIf=\"!contatosLoaded\">\n                  <div class=\"spinner-border text-dark\"></div>\n                </div>\n              </div>\n            </tab>\n          </tabset>\n        </detail-panel>\n      </div>\n    </div>\n  </div>\n</app-body>\n";
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
          this.API = "https://crm360.monterrey.com.bo/api/comercial/clientes/cadastro/formulario/dados-faturamento";
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
            descricao: 'EXIBIR TODOS'
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
                descricao: 'EXIBIR TODOS'
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
              this.pnotifyService.notice('Esse cliente não faz parte da sua carteira.');
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
            descricao: 'Detalhes'
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


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<app-header appTitle=\"Proposta para análise de crédito\">\n  <button\n    type=\"button\"\n    *ngIf=\"tipoVisao == 'formulario'\"\n    [disabled]=\"!form.valid\"\n    (click)=\"onSubmit()\">\n    Generar\n  </button>\n  <button\n    type=\"button\"\n    *ngIf=\"tipoVisao == 'ficha'\"\n    (click)=\"onCancel()\">\n    Cancelar\n  </button>\n  <button\n    type=\"button\"\n    *ngIf=\"tipoVisao == 'ficha'\"\n    (click)=\"onDownload()\">\n    Download\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\n  <div class=\"row justify-content-center\" *ngIf=\"tipoVisao == 'formulario'\">\n    <div class=\"col-6\">\n      <form [formGroup]=\"form\" autocomplete=\"off\">\n        <div class=\"form-row\">\n          <div class=\"form-group col mb-0\">\n            <div class=\"mtc-title\">Datos del cliente</div>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-6\">\n            <label for=\"razaoSocial\">Razon social</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"razaoSocial\"\n              formControlName=\"razaoSocial\">\n          </div>\n          <div class=\"form-group col-md-6\">\n            <label for=\"dataSolicitacao\">Fecha de la solicitud</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"dataSolicitacao\"\n              bsDatepicker\n              [bsConfig]=\"bsConfig\"\n              formControlName=\"dataSolicitacao\"\n              (input)=\"onInput()\"\n              [ngClass]=\"onFieldError('dataSolicitacao') + ' ' + onFieldRequired('dataSolicitacao')\">\n            <invalid-form-control [show]=\"onFieldInvalid('dataSolicitacao')\" message=\"Data de solicitação é obrigatório.\"></invalid-form-control>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-4\">\n            <label for=\"codCliente\">Código de cliente</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"codCliente\"\n              formControlName=\"codCliente\">\n          </div>\n          <div class=\"form-group col-md-4\">\n            <label for=\"codClienteDBA\">Código SAP</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"codClienteDBA\"\n              formControlName=\"codClienteDBA\">\n          </div>\n          <div class=\"form-group col-md-4\">\n            <label for=\"limiteCreditoAtual\">Limite de crédito atual</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"limiteCreditoAtual\"\n              formControlName=\"limiteCreditoAtual\"\n              currencyMask [options]=\"{ align: 'left', prefix: 'R$ ', thousands: '.', decimal: ',' }\"\n              (input)=\"onInput()\">\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-6\">\n            <label for=\"setorAtividade\">Setor de atividades</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"setorAtividade\"\n              formControlName=\"setorAtividade\">\n          </div>\n          <div class=\"form-group col-md-6\">\n            <label for=\"dataUltimaVisita\">Fecha de la última visita</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"dataUltimaVisita\"\n              bsDatepicker\n              [bsConfig]=\"bsConfig\"\n              formControlName=\"dataUltimaVisita\"\n              (input)=\"onInput()\">\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-6\">\n            <label for=\"instalacoes\">Instalaciones</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"instalacoes\"\n              formControlName=\"instalacoes\"\n              (input)=\"onInput()\">\n          </div>\n          <div class=\"form-group col-md-6\">\n            <label for=\"numFuncionarios\">Número de empleados</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"numFuncionarios\"\n              formControlName=\"numFuncionarios\"\n              currencyMask [options]=\"{ align: 'left', prefix: '', thousands: '.', decimal: ',', precision: 0 }\"\n              (input)=\"onInput()\">\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-6\">\n            <label for=\"limiteCreditoSolicitado\">Limite de crédito solicitado</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"limiteCreditoSolicitado\"\n              formControlName=\"limiteCreditoSolicitado\"\n              currencyMask [options]=\"{ align: 'left', prefix: 'R$ ', thousands: '.', decimal: ',' }\"\n              (input)=\"onInput()\"\n              [ngClass]=\"onFieldError('limiteCreditoSolicitado') + ' ' + onFieldRequired('limiteCreditoSolicitado')\">\n            <invalid-form-control [show]=\"onFieldInvalid('limiteCreditoSolicitado')\" message=\"Limite de crédito solicitado é obrigatório.\"></invalid-form-control>\n          </div>\n          <div class=\"form-group col-md-6\">\n            <label for=\"condicaoPagto\">Condiciones de pago</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"condicaoPagto\"\n              formControlName=\"condicaoPagto\"\n              (input)=\"onInput()\"\n              [ngClass]=\"onFieldError('condicaoPagto') + ' ' + onFieldRequired('condicaoPagto')\">\n            <invalid-form-control [show]=\"onFieldInvalid('condicaoPagto')\" message=\"Condição de pagamento é obrigatório.\"></invalid-form-control>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col mb-0\">\n            <hr class=\"mt-0\">\n            <div class=\"mtc-title\">Solicitud de datos</div>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-6\">\n            <label for=\"nomeVendedor\">Vendedor(a)</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"nomeVendedor\"\n              formControlName=\"nomeVendedor\">\n          </div>\n          <div class=\"form-group col-md-6\">\n            <label for=\"telefoneVendedor\">Teléfono</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"telefoneVendedor\"\n              formControlName=\"telefoneVendedor\">\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-6\">\n            <label for=\"gestorVendas\">Jefe de ventas</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"gestorVendas\"\n              formControlName=\"gestorVendas\"\n              (input)=\"onInput()\"\n              [ngClass]=\"onFieldError('gestorVendas') + ' ' + onFieldRequired('gestorVendas')\">\n            <invalid-form-control [show]=\"onFieldInvalid('gestorVendas')\" message=\"Gestor(a) de venda é obrigatório.\"></invalid-form-control>\n          </div>\n          <div class=\"form-group col-md-6\">\n            <label for=\"nomeEscritorio\">Oficina de ventas</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"nomeEscritorio\"\n              formControlName=\"nomeEscritorio\">\n          </div>\n        </div>\n        <div formArrayName=\"fornecedores\">\n          <div class=\"form-row\">\n            <div class=\"form-group col mb-0\">\n              <hr class=\"mt-0\">\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col mb-0 d-flex justify-content-between\">\n              <div class=\"mtc-title\">Proveedores</div>\n              <div>\n                <a\n                  class=\"text-secondary\"\n                  (click)=\"onAddFornecedor()\"\n                  href=\"javascript:void(0)\">\n                  <b>Adicionar</b>\n                </a>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-row\" *ngFor=\"let item of fornecedores.controls; let i = index\" [formGroupName]=\"i\">\n            <div class=\"form-group col mb-0\">\n              <div class=\"form-row\">\n                <div class=\"form-group col-6\">\n                  <label for=\"nome\">Nobre</label>\n                  <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    id=\"nome\"\n                    formControlName=\"nome\"\n                    (input)=\"onInput()\"\n                    [ngClass]=\"onNestedFieldError('fornecedores', i, 'nome') + ' ' + onNestedFieldRequired('fornecedores', i, 'nome')\">\n                </div>\n                <div class=\"form-group col-5\">\n                  <label for=\"telefone\">Telefono</label>\n                  <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    id=\"telefone\"\n                    formControlName=\"telefone\"\n                    (input)=\"onInput()\"\n                    telefone [textMask]=\"{ mask: MASKS.telefone.textMaskFunction }\">\n                </div>\n                <div class=\"col-1 pt-4 mt-1 d-flex justify-content-center\">\n                  <button\n                    type=\"button\"\n                    class=\"btn-icon\"\n                    (click)=\"onDeleteFornecedor(i)\">\n                    <i class=\"fas fa-trash\"></i>\n                  </button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div formArrayName=\"clientes\">\n          <div class=\"form-row\">\n            <div class=\"form-group col mb-0\">\n              <hr class=\"mt-0\">\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col mb-0 d-flex justify-content-between\">\n              <div class=\"mtc-title\">Clientes</div>\n              <div>\n                <a\n                  class=\"text-secondary\"\n                  (click)=\"onAddCliente()\"\n                  href=\"javascript:void(0)\">\n                  <b>Adicionar</b>\n                </a>\n              </div>\n            </div>\n          </div>\n          <div *ngIf=\"clientes.controls.length > 0\">\n            <div class=\"form-row\" *ngFor=\"let item of clientes.controls; let i = index\" [formGroupName]=\"i\">\n              <div class=\"form-group col mb-0\">\n                <div class=\"form-row\">\n                  <div class=\"form-group col-11\">\n                    <label for=\"nome\">Nombre</label>\n                    <input\n                      type=\"text\"\n                      class=\"form-control\"\n                      id=\"nome\"\n                      formControlName=\"nome\"\n                      (input)=\"onInput()\">\n                  </div>\n                  <div class=\"col-1 pt-4 mt-1 d-flex justify-content-center\">\n                    <button\n                      type=\"button\"\n                      class=\"btn-icon\"\n                      (click)=\"onDeleteCliente(i)\">\n                      <i class=\"fas fa-trash\"></i>\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"mb-3\" *ngIf=\"clientes.controls.length == 0\">\n            <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n          </div>\n        </div>\n        <div formArrayName=\"bancos\">\n          <div class=\"form-row\">\n            <div class=\"form-group col mb-0\">\n              <hr class=\"mt-0\">\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col mb-0 d-flex justify-content-between\">\n              <div class=\"mtc-title\">Bancos</div>\n              <div>\n                <a\n                  class=\"text-secondary\"\n                  (click)=\"onAddBanco()\"\n                  href=\"javascript:void(0)\">\n                  <b>Adicionar</b>\n                </a>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-row\" *ngFor=\"let item of bancos.controls; let i = index\" [formGroupName]=\"i\">\n            <div class=\"form-group col mb-0\">\n              <div class=\"form-row\">\n                <div class=\"form-group col-3\">\n                  <label for=\"nome\">Nome</label>\n                  <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    id=\"nome\"\n                    formControlName=\"nome\"\n                    (input)=\"onInput()\"\n                    [ngClass]=\"onNestedFieldError('bancos', i, 'nome') + ' ' + onNestedFieldRequired('bancos', i, 'nome')\">\n                </div>\n                <div class=\"form-group col-2\">\n                  <label for=\"agencia\">Agencia</label>\n                  <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    id=\"agencia\"\n                    formControlName=\"agencia\"\n                    (input)=\"onInput()\"\n                    [ngClass]=\"onNestedFieldError('bancos', i, 'agencia') + ' ' + onNestedFieldRequired('bancos', i, 'agencia')\">\n                </div>\n                <div class=\"form-group col-3\">\n                  <label for=\"contaCorrente\">Cuenta corriente</label>\n                  <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    id=\"contaCorrente\"\n                    formControlName=\"contaCorrente\"\n                    (input)=\"onInput()\"\n                    [ngClass]=\"onNestedFieldError('bancos', i, 'contaCorrente') + ' ' + onNestedFieldRequired('bancos', i, 'contaCorrente')\">\n                </div>\n                <div class=\"form-group col-3\">\n                  <label for=\"telefone\">Telefono</label>\n                  <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    id=\"telefone\"\n                    formControlName=\"telefone\"\n                    telefone [textMask]=\"{ mask: MASKS.telefone.textMaskFunction }\"\n                    (input)=\"onInput()\"\n                    [ngClass]=\"onNestedFieldError('bancos', i, 'telefone') + ' ' + onNestedFieldRequired('bancos', i, 'telefone')\">\n                </div>\n                <div class=\"col-1 pt-4 mt-1 d-flex justify-content-center\">\n                  <button\n                    type=\"button\"\n                    class=\"btn-icon\"\n                    (click)=\"onDeleteBanco(i)\">\n                    <i class=\"fas fa-trash\"></i>\n                  </button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col mb-0\">\n            <hr class=\"mt-0\">\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col mb-0\">\n            <label>Ventas concentradas</label>\n            <div class=\"form-row\">\n              <div class=\"form-group col\">\n                <div class=\"custom-control custom-radio custom-control-inline\">\n                  <input\n                    type=\"radio\"\n                    id=\"vendasConcentradasSim\"\n                    class=\"custom-control-input\"\n                    formControlName=\"vendasConcentradas\"\n                    value=\"Sim\">\n                  <label class=\"custom-control-label\" for=\"vendasConcentradasSim\">Sim</label>\n                </div>\n                <div class=\"custom-control custom-radio custom-control-inline\">\n                  <input\n                    type=\"radio\"\n                    id=\"vendasConcentradasNao\"\n                    class=\"custom-control-input\"\n                    formControlName=\"vendasConcentradas\"\n                    value=\"Não\">\n                  <label class=\"custom-control-label\" for=\"vendasConcentradasNao\">Não</label>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-6\">\n            <label for=\"previsaoCompraTon\">Compra mensual estimada (Ton)</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"previsaoCompraTon\"\n              formControlName=\"previsaoCompraTon\"\n              currencyMask [options]=\"{ align: 'left', prefix: '', thousands: '.', decimal: ',', precision: 3 }\">\n          </div>\n          <div class=\"form-group col-md-6\">\n            <label for=\"previsaoCompraValor\">Compra mensual estimada (R$)</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"previsaoCompraValor\"\n              formControlName=\"previsaoCompraValor\"\n              currencyMask [options]=\"{ align: 'left', prefix: 'R$ ', thousands: '.', decimal: ',' }\">\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-6\">\n            <label for=\"faturamentoMedio\">Facturación media mensual</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"faturamentoMedio\"\n              formControlName=\"faturamentoMedio\"\n              currencyMask [options]=\"{ align: 'left', prefix: 'R$ ', thousands: '.', decimal: ',' }\">\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col\">\n            <label for=\"parecerVendedor\">Opinión del vendedor</label>\n            <textarea\n              class=\"form-control\"\n              id=\"parecerVendedor\"\n              formControlName=\"parecerVendedor\"\n              (input)=\"onInput()\"\n              [ngClass]=\"onFieldError('parecerVendedor') + ' ' + onFieldRequired('parecerVendedor')\">\n            </textarea>\n            <invalid-form-control [show]=\"onFieldInvalid('parecerVendedor')\" message=\"Parecer do vendedor é obrigatório.\"></invalid-form-control>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n  <div class=\"row justify-content-center pt-5\" id=\"impressao-ficha-pac\" *ngIf=\"tipoVisao == 'ficha'\">\n    <div class=\"col-9\">\n      <h1>Propuesta de análisis de créditos (PAC)</h1>\n      <div class=\"jumbotron p-3 mb-3\">\n        <div class=\"mtc-title\">Dados do cliente</div>\n        <p class=\"mt-2 mb-0\">\n          <strong class=\"mr-2\">Razon social:</strong>\n          <span *ngIf=\"dataFicha.razaoSocial == null\">Sin informacion</span>\n          <span *ngIf=\"dataFicha.razaoSocial != null\">{{ dataFicha.razaoSocial }}</span>\n        </p>\n        <p class=\"mt-2 mb-0\">\n          <strong class=\"mr-2\">Fecha de la solicitud:</strong>\n          <span *ngIf=\"dataFicha.dataSolicitacao == null\">Sin informacion</span>\n          <span *ngIf=\"dataFicha.dataSolicitacao != null\">{{ dataFicha.dataSolicitacao }}</span>\n        </p>\n        <p class=\"mt-2 mb-0\">\n          <strong class=\"mr-2\">Código de cliente (TID):</strong>\n          <span *ngIf=\"dataFicha.codCliente == null\">Sin informacion</span>\n          <span *ngIf=\"dataFicha.codCliente != null\">{{ dataFicha.codCliente }}</span>\n        </p>\n        <p class=\"mt-2 mb-0\">\n          <strong class=\"mr-2\">Código de cliente (SAP):</strong>\n          <span *ngIf=\"dataFicha.codClienteDBA == null\">Sin informacion</span>\n          <span *ngIf=\"dataFicha.codClienteDBA != null\">{{ dataFicha.codClienteDBA }}</span>\n        </p>\n        <p class=\"mt-2 mb-0\">\n          <strong class=\"mr-2\">Limite de crédito actual:</strong>\n          <span *ngIf=\"dataFicha.limiteCreditoAtual == null\">Sin informacion</span>\n          <span *ngIf=\"dataFicha.limiteCreditoAtual == null\">{{ dataFicha.limiteCreditoAtual | currency:'BRL':'symbol':'1.2-2' }}</span>\n        </p>\n        <p class=\"mt-2 mb-0\">\n          <strong class=\"mr-2\">Sector de actividade:</strong>\n          <span *ngIf=\"dataFicha.setorAtividade == null\">Sin informacion</span>\n          <span *ngIf=\"dataFicha.setorAtividade != null\">{{ dataFicha.setorAtividade }}</span>\n        </p>\n        <p class=\"mt-2 mb-0\">\n          <strong class=\"mr-2\">Fecha de la última visita:</strong>\n          <span *ngIf=\"dataFicha.dataUltimaVisita == null\">Sin informacion</span>\n          <span *ngIf=\"dataFicha.dataUltimaVisita != null\">{{ dataFicha.dataUltimaVisita }}</span>\n        </p>\n        <p class=\"mt-2 mb-0\">\n          <strong class=\"mr-2\">Instalaciones:</strong>\n          <span *ngIf=\"dataFicha.instalacoes == null\">Sin informacion</span>\n          <span *ngIf=\"dataFicha.instalacoes != null\">{{ dataFicha.instalacoes }}</span>\n        </p>\n        <p class=\"mt-2 mb-0\">\n          <strong class=\"mr-2\">Número de funcionários:</strong>\n          <span *ngIf=\"dataFicha.numFuncionarios == null\">Sin informacion</span>\n          <span *ngIf=\"dataFicha.numFuncionarios == null\">{{ dataFicha.numFuncionarios }}</span>\n        </p>\n      </div>\n      <div class=\"jumbotron p-3 mb-3\">\n        <div class=\"mtc-title\">Propuestas</div>\n        <p class=\"mt-2 mb-0\">\n          <strong class=\"mr-2\">Limite de crédito solicitado:</strong>\n          <span *ngIf=\"dataFicha.limiteCreditoSolicitado == null\">Sin informacion</span>\n          <span *ngIf=\"dataFicha.limiteCreditoSolicitado != null\">{{ dataFicha.limiteCreditoSolicitado | currency:'BRL':'symbol':'1.2-2' }}</span>\n        </p>\n        <p class=\"mt-2 mb-0\">\n          <strong class=\"mr-2\">Condiciones de pago:</strong>\n          <span *ngIf=\"dataFicha.condicaoPagto == null\">Sin informacion</span>\n          <span *ngIf=\"dataFicha.condicaoPagto != null\">{{ dataFicha.condicaoPagto }}</span>\n        </p>\n      </div>\n      <div class=\"jumbotron p-3 mb-3\">\n        <div class=\"mtc-title\">Datos del solicitante</div>\n        <p class=\"mt-2 mb-0\">\n          <strong class=\"mr-2\">Vendedor(a):</strong>\n          <span *ngIf=\"dataFicha.condicaoPagto == null\">Sin informacion</span>\n          <span *ngIf=\"dataFicha.condicaoPagto != null\">{{ dataFicha.nomeVendedor }}</span>\n        </p>\n        <p class=\"mt-2 mb-0\">\n          <strong class=\"mr-2\">Gestor(a):</strong>\n          <span *ngIf=\"dataFicha.gestorVendas == null\">Sin informacion</span>\n          <span *ngIf=\"dataFicha.gestorVendas != null\">{{ dataFicha.gestorVendas | uppercase }}</span>\n        </p>\n        <p class=\"mt-2 mb-0\">\n          <strong class=\"mr-2\">Telefono:</strong>\n          <span *ngIf=\"dataFicha.gestorVendas == null\">Sin informacion</span>\n          <span *ngIf=\"dataFicha.gestorVendas != null\">{{ dataFicha.telefoneVendedor }}</span>\n        </p>\n        <p class=\"mt-2 mb-0\">\n          <strong class=\"mr-2\">Oficina de ventas:</strong>\n          <span *ngIf=\"dataFicha.nomeEscritorio == null\">Sin informacion</span>\n          <span *ngIf=\"dataFicha.nomeEscritorio != null\">{{ dataFicha.nomeEscritorio }}</span>\n        </p>\n      </div>\n      <div class=\"jumbotron p-3 mb-3\">\n        <div class=\"mtc-title\">Principales proveedores</div>\n        <div *ngIf=\"dataFicha.fornecedores.length == 0\">Sin informacion</div>\n        <div *ngIf=\"dataFicha.fornecedores.length > 0\">\n          <div class=\"row mt-2\" *ngFor=\"let item of dataFicha.fornecedores\">\n            <div class=\"col-6\">\n              <p class=\"mt-2 mb-0\">\n                <strong class=\"mr-2\">Nombre:</strong>\n                <span *ngIf=\"item.nome == null\">Sin informacion</span>\n                <span *ngIf=\"item.nome != null\">{{ item.nome | uppercase }}</span>\n              </p>\n            </div>\n            <div class=\"col-6\">\n              <p class=\"mt-2 mb-0\">\n                <strong class=\"mr-2\">Telefono:</strong>\n                <span *ngIf=\"item.telefone == null\">Sin informacion</span>\n                <span *ngIf=\"item.telefone != null\">{{ item.telefone }}</span>\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"jumbotron p-3 mb-3\">\n        <div class=\"mtc-title\">Principales clientes</div>\n        <div *ngIf=\"dataFicha.clientes.length == 0\">Sin informacion</div>\n        <div *ngIf=\"dataFicha.clientes.length > 0\">\n          <div *ngFor=\"let item of dataFicha.clientes\">\n            <p class=\"mt-2 mb-0\">\n              <strong class=\"mr-2\">Nome:</strong> {{ item.nome | uppercase }}\n            </p>\n          </div>\n        </div>\n      </div>\n      <div class=\"jumbotron p-3 mb-3\">\n        <div class=\"mtc-title\">Principaless bancos</div>\n        <div *ngIf=\"dataFicha.bancos.length == 0\">Sin informacion</div>\n        <div *ngIf=\"dataFicha.bancos.length > 0\">\n          <div class=\"row\" *ngFor=\"let item of dataFicha.bancos\">\n            <div class=\"col-3\">\n              <p class=\"mt-2 mb-0\">\n                <strong class=\"mr-2\">Banco:</strong>\n                <span *ngIf=\"item.nome == null\">Sin informacion</span>\n                <span *ngIf=\"item.nome != null\">{{ item.nome | uppercase }}</span>\n              </p>\n            </div>\n            <div class=\"col-3\">\n              <p class=\"mt-2 mb-0\">\n                <strong class=\"mr-2\">Agencia:</strong>\n                <span *ngIf=\"item.agencia == null\">Sin informacion</span>\n                <span *ngIf=\"item.agencia != null\">{{ item.agencia }}</span>\n              </p>\n            </div>\n            <div class=\"col-3\">\n              <p class=\"mt-2 mb-0\">\n                <strong class=\"mr-2\">Cuenta corrinte:</strong>\n                <span *ngIf=\"item.contaCorrente == null\">Sin informacion</span>\n                <span *ngIf=\"item.contaCorrente != null\">{{ item.contaCorrente }}</span>\n              </p>\n            </div>\n            <div class=\"col-3\">\n              <p class=\"mt-2 mb-0\">\n                <strong class=\"mr-2\">Telefono:</strong>\n                <span *ngIf=\"item.telefone == null\">Sin informacion</span>\n                <span *ngIf=\"item.telefone != null\">{{ item.telefone }}</span>\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"jumbotron p-3 mb-3\">\n        <div class=\"mtc-title\">Datos financieros</div>\n        <p class=\"mt-2 mb-0\">\n          <strong class=\"mr-2\">Vendas concretadas:</strong>\n          <span *ngIf=\"dataFicha.vendasConcentradas == null\">Sin informacion</span>\n          <span *ngIf=\"dataFicha.vendasConcentradas != null\">{{ dataFicha.vendasConcentradas }}</span>\n        </p>\n        <p class=\"mt-2 mb-0\">\n          <strong class=\"mr-2\">Previsión mensual de compras (Ton):</strong>\n          <span *ngIf=\"dataFicha.previsaoCompraTon == null\">Sin informacion</span>\n          <span *ngIf=\"dataFicha.previsaoCompraTon != null\">{{ dataFicha.previsaoCompraTon | number:'1.3-3' }}t</span>\n        </p>\n        <p class=\"mt-2 mb-0\">\n          <strong class=\"mr-2\">Previsión mensual de compras (R$):</strong>\n          <span *ngIf=\"dataFicha.previsaoCompraValor == null\">Sin informacion</span>\n          <span *ngIf=\"dataFicha.previsaoCompraValor != null\">{{ dataFicha.previsaoCompraValor | currency:'BRL':'symbol':'1.2-2' }}</span>\n        </p>\n        <p class=\"mt-2 mb-0\">\n          <strong class=\"mr-2\">Facturación media mensual (R$):</strong>\n          <span *ngIf=\"dataFicha.faturamentoMedio == null\">Sin informacion</span>\n          <span *ngIf=\"dataFicha.faturamentoMedio != null\">{{ dataFicha.faturamentoMedio | currency:'BRL':'symbol':'1.2-2' }}</span>\n        </p>\n      </div>\n      <div class=\"jumbotron p-3 mb-0\">\n        <div class=\"mtc-title\">Opinión del vendedor</div>\n        <p class=\"mt-2 mb-0\">\n          <span *ngIf=\"dataFicha.parecerVendedor == null\">Sin informacion</span>\n          <span *ngIf=\"dataFicha.parecerVendedor != null\">{{ dataFicha.parecerVendedor | uppercase }}</span>\n        </p>\n      </div>\n    </div>\n  </div>\n</app-body>\n";
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


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<app-header appTitle=\"Dias não úteis\">\n  <button\n    type=\"button\"\n    (click)=\"onFilter()\">\n    Filtrar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\n  <div class=\"row\" #scrollToFilter>\n    <div class=\"col\">\n      <advanced-filter>\n        <form [formGroup]=\"form\" autocomplete=\"off\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-lg-2\">\n              <label for=\"dataInicial\">Fecha inicial</label>\n              <input\n                class=\"form-control\"\n                id=\"dataInicial\"\n                type=\"text\"\n                bsDatepicker\n                [bsConfig]=\"bsConfig\"\n                formControlName=\"dataInicial\"\n                [ngClass]=\"onFieldError('dataInicial') + ' ' + onFieldRequired('dataInicial')\">\n                <invalid-form-control [show]=\"onFieldInvalid('dataInicial') == 'required'\" message=\"Data Inicial é obrigatório.\"></invalid-form-control>\n            </div>\n            <div class=\"form-group col-lg-2\">\n              <label for=\"dataFinal\">Fecha final</label>\n              <input\n                class=\"form-control\"\n                id=\"dataFinal\"\n                type=\"text\"\n                bsDatepicker\n                [bsConfig]=\"bsConfig\"\n                formControlName=\"dataFinal\"\n                [ngClass]=\"onFieldError('dataFinal') + ' ' + onFieldRequired('dataFinal')\">\n                <invalid-form-control [show]=\"onFieldInvalid('dataFinal') == 'required'\" message=\"Data Final é obrigatório.\"></invalid-form-control>\n            </div>\n          </div>\n        </form>\n      </advanced-filter>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <custom-table [config]=\"tableConfig\" *ngIf=\"dadosPagination.length > 0 && !dadosEmpty\">\n        <ng-template #thead let-thead>\n          <tr>\n            <th scope=\"col\">Cod. Material</th>\n            <th scope=\"col\">Material</th>\n            <th scope=\"col\">Línea / Clase</th>\n            <th scope=\"col\">Ton. Vendidas</th>\n            <th scope=\"col\">Nota Fiscal</th>\n            <th scope=\"col\">Dt. Ultima Compra</th>\n            <th scope=\"col\">Precio Unitário</th>\n            <th scope=\"col\">Precio Total</th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr *ngFor=\"let ultimoPreco of dadosPagination; let i = index\">\n            <td\n              class=\"hover\">\n              {{ ultimoPreco.codMaterial }}\n            </td>\n            <td class=\"hover\">\n              {{ ultimoPreco.nomeMaterial | uppercase }}\n            </td>\n            <td\n              class=\"hover\">\n              {{ ultimoPreco.linha }} / {{ ultimoPreco.classe }}\n            </td>\n            <td\n              class=\"hover\">\n              {{ ultimoPreco.qtdeToneladasVendidas | number:'1.3-3' }} ton \n            </td>\n            <td\n              class=\"hover\">\n              {{ ultimoPreco.nrNotaFiscal }}\n            </td>\n            <td\n              class=\"hover\">\n              {{ ultimoPreco.dataUltimaCompra | date: 'dd/MM/yyyy' }}\n            </td>\n            <td\n              class=\"hover\">\n              {{ ultimoPreco.precoUnitarioMaterial | currency:'BRL':'symbol':'1.2-2' }}\n            </td>\n            <td\n              class=\"hover\">\n              {{ ultimoPreco.precoTotalMaterial | currency:'BRL':'symbol':'1.2-2' }}\n            </td>\n          </tr>\n        </ng-template>\n      </custom-table>\n      <div class=\"d-flex justify-content-center mt-3\" *ngIf=\"totalItems > itemsPerPage && dadosLoaded\">\n        <pagination\n          [maxSize]=\"maxSize\"\n          [(totalItems)]=\"totalItems\"\n          (pageChanged)=\"onPageChanged($event)\"\n          [(itemsPerPage)]=\"itemsPerPage\"\n          [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPage\"\n          previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\"\n          lastText=\"&raquo;\">\n        </pagination>\n      </div>\n      <empty-result\n        message=\"Nenhuma informação encontrada\"\n        class=\"my-3\"\n        *ngIf=\"dadosEmpty\">\n      </empty-result>\n    </div>\n  </div>\n</app-body>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=clientes-clientes-module-es5.js.map