(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["v2-v2-module"], {
    /***/
    "/7A+":
    /*!***********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/dashboards/analise-frete/v2/v2.component.html ***!
      \***********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"!dataLoaded\"></loader-spinner-full-screen>\n<loader-spinner-navbar *ngIf=\"loading\"></loader-spinner-navbar>\n<app-header [appTitle]=\"appTitle\">\n  <button\n    (click)=\"onExport()\"\n    *ngIf=\"permission\"\n    [disabled]=\"form.status === 'INVALID' && !isFiltered\"\n  >\n    Exportar\n  </button>\n  <button\n    (click)=\"onFilter()\"\n    *ngIf=\"permission\"\n    [disabled]=\"form.status === 'INVALID' && !isFiltered\"\n  >\n    Filtrar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\n  <advanced-filter>\n    <form id=\"form-logistica-dashboard\" [formGroup]=\"form\" class=\"row\">\n      <div class=\"form-group col-3\">\n        <label for=\"empresa\">Empresa</label>\n        <ng-select\n          [searchable]=\"true\"\n          [clearable]=\"false\"\n          [items]=\"empresas\"\n          [virtualScroll]=\"true\"\n          [multiple]=\"true\"\n          [closeOnSelect]\t=\"false\"\n          labelForId=\"empresa\"\n          bindLabel=\"dsEmpresa\"\n          bindValue=\"dsEmpresa\"\n          id=\"empresa\"\n          formControlName=\"projeto\"\n        >\n        </ng-select>\n      </div>\n      <div class=\"form-group col-3\">\n        <label for=\"empresa\">Data Inicial</label>\n        <div class=\"input-group\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\n          </div>\n          <input\n            class=\"form-control\"\n            id=\"dataInicial\"\n            type=\"text\"\n            bsDatepicker\n            [bsConfig]=\"bsConfig\"\n            [ngClass]=\"onFieldRequired('dataInicial')\"\n            formControlName=\"dataInicial\">\n          <invalid-form-control [show]=\"onFieldInvalid('dataInicial')\" message=\"Data Inicial é obrigatório.\"></invalid-form-control>\n        </div>\n      </div>\n      <div class=\"form-group col-3\">\n        <label for=\"empresa\">Data Final</label>\n        <div class=\"input-group\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\n          </div>\n          <input\n          class=\"form-control\"\n          id=\"dataFinal\"\n          type=\"text\"\n          bsDatepicker\n          [bsConfig]=\"bsConfig\"\n          [ngClass]=\"onFieldRequired('dataFinal')\"\n          formControlName=\"dataFinal\">\n          <invalid-form-control [show]=\"onFieldInvalid('dataFinal')\" message=\"Data Final é obrigatório.\"></invalid-form-control>\n        </div>\n      </div>\n      <div class=\"form-group col-3\">\n        <label>UF</label>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          formControlName=\"uf\"\n          (keyup.enter)=\"onFilter()\"\n          >\n      </div>\n      <div class=\"form-group col-3\">\n        <label>Contrato de Frete</label>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          formControlName=\"contratoFrete\"\n          (keyup.enter)=\"onFilter()\"\n        >\n      </div>\n      <div class=\"form-group col-3\">\n        <label>Tipo de Veículo</label>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          formControlName=\"tipoVeiculo\"\n          (keyup.enter)=\"onFilter()\"  \n        >\n      </div>\n      <div class=\"form-group col-3\">\n        <label for=\"\">Segmentação</label>\n        <ng-select\n          [searchable]=\"true\"\n          [clearable]=\"false\"\n          [multiple]=\"true\"\n          [items]=\"segmentacao\"\n          placeholder=\"Selecione uma opção\"\n          bindLabel=\"nome\"\n          bindValue=\"nome\"\n          formControlName=\"parametrizacao\"\n          (change)=\"prepareData($event);\"\n          >\n        </ng-select>\n      </div>\n      <div class=\"form-group col-3\">\n        <label for=\"origem\">Origem</label>\n        <select\n          name=\"origem\"\n          id=\"origem\"\n          class=\"form-control\"\n          formControlName=\"origem\"\n          (change)=\"onFilter()\"  \n        >\n          <option value=\"TMS\">TMS</option>\n          <option value=\"Fusion\">Fusion</option>\n        </select>\n      </div>\n    </form>\n  </advanced-filter>\n  <div>\n    <div *ngIf=\"show\">\n      <div class=\"mb-4\">\n        <custom-table class=\"text-center\" >\n          <ng-template #thead let-thead>\n            <tr>\n              <th scope=\"col\" *ngIf=\"columns['Ano']\">\n                <thead-sorter\n                  value=\"Ano\"\n                  [active]=\"orderBy == 'Ano'\"\n                  [sort]=\"orderType\"\n                  (click)=\"setOrderBy('Ano')\">\n                </thead-sorter>\n              </th>\n              <th scope=\"col\" *ngIf=\"columns['Mês']\">\n                <thead-sorter\n                  value=\"Mês\"\n                  [active]=\"orderBy == 'Mês'\"\n                  [sort]=\"orderType\"\n                  (click)=\"setOrderBy('Mês')\">\n                </thead-sorter>\n              </th>\n              <th scope=\"col\" *ngIf=\"columns['UF']\">\n                <thead-sorter\n                  value=\"UF\"\n                  [active]=\"orderBy == 'UF'\"\n                  [sort]=\"orderType\"\n                  (click)=\"setOrderBy('UF')\">\n                </thead-sorter>\n              </th>\n              <th scope=\"col\" *ngIf=\"columns['Contrato de Frete']\">\n                <thead-sorter\n                  value=\"Contrato de Frete\"\n                  [active]=\"orderBy == 'Contrato de Frete'\"\n                  [sort]=\"orderType\"\n                  (click)=\"setOrderBy('Contrato de Frete')\">\n                </thead-sorter>\n              </th>\n              <th scope=\"col\" *ngIf=\"columns['Tipo de Veículo']\">\n                <thead-sorter\n                  value=\"Tipo de Veículo\"\n                  [active]=\"orderBy == 'Tipo de Veículo'\"\n                  [sort]=\"orderType\"\n                  (click)=\"setOrderBy('Tipo de Veículo')\">\n                </thead-sorter>\n              </th>\n              <th scope=\"col\" width=\"12%\">\n                <div class=\"d-flex\">\n                  <thead-sorter\n                    value=\"Custo de Frete\"\n                    [active]=\"orderBy == 'Custo de Frete'\"\n                    [sort]=\"orderType\"\n                    (click)=\"setOrderBy('Custo de Frete')\">\n                  </thead-sorter>\n                  <div>\n                    <i\n                    class=\"far fa-question-circle\"\n                    [tooltip]=\"rotulos['Custo de Frete']['descricao']\"\n                    placement=\"right\"\n                    container=\"body\"\n                    >\n                    </i>\n                  </div>\n                </div>\n              </th>\n              <th scope=\"col\" width=\"12%\">\n                <div class=\"d-flex\">\n                  <thead-sorter\n                    value=\"Peso Total Transportado\"\n                    [active]=\"orderBy == 'Peso Total Transportado'\"\n                    [sort]=\"orderType\"\n                    (click)=\"setOrderBy('Peso Total Transportado')\">\n                  </thead-sorter>\n                  <div>\n                    <i\n                    class=\"far fa-question-circle\"\n                    [tooltip]=\"rotulos['Peso Total Transportado']['descricao']\"\n                    placement=\"right\"\n                    container=\"body\"\n                    >\n                    </i>\n                  </div>\n                </div>\n              </th>\n              <th scope=\"col\" width=\"12%\">\n                <div class=\"d-flex\">\n                  <thead-sorter\n                    value=\"KM Total\"\n                    [active]=\"orderBy == 'KM Total'\"\n                    [sort]=\"orderType\"\n                    (click)=\"setOrderBy('KM Total')\">\n                  </thead-sorter>\n                  <div>\n                    <i\n                    class=\"far fa-question-circle\"\n                    [tooltip]=\"rotulos['KM Total']['descricao']\"\n                    placement=\"right\"\n                    container=\"body\"\n                    >\n                    </i>\n                  </div>\n                </div>\n              </th>\n              <th scope=\"col\" width=\"12%\">\n                <div class=\"d-flex\">\n                  <thead-sorter\n                    value=\"Valor Nota Fiscal\"\n                    [active]=\"orderBy == 'Valor Nota Fiscal'\"\n                    [sort]=\"orderType\"\n                    (click)=\"setOrderBy('Valor Nota Fiscal')\">\n                  </thead-sorter>\n                  <div>\n                    <i\n                    class=\"far fa-question-circle\"\n                    [tooltip]=\"rotulos['Valor Nota Fiscal']['descricao']\"\n                    placement=\"right\"\n                    container=\"body\"\n                    >\n                    </i>\n                  </div>\n                </div>\n              </th>\n              <th scope=\"col\" width=\"12%\">\n                <div class=\"d-flex\">\n                  <thead-sorter\n                    value=\"Capacidade de Transporte\"\n                    [active]=\"orderBy == 'Capacidade de Transporte'\"\n                    [sort]=\"orderType\"\n                    (click)=\"setOrderBy('Capacidade de Transporte')\">\n                  </thead-sorter>\n                  <div>\n                    <i\n                    class=\"far fa-question-circle\"\n                    [tooltip]=\"rotulos['Capacidade de Transporte']['descricao']\"\n                    placement=\"right\"\n                    container=\"body\"\n                    >\n                    </i>\n                  </div>\n                </div>\n              </th>\n            </tr>\n          </ng-template>\n          <ng-template #tbody let-tbody>\n            <tr *ngFor=\"let item of data\">\n              <td *ngIf=\"columns['Ano']\">{{item['Ano'] | hifen}}</td>\n              <td *ngIf=\"columns['Mês']\">{{item['Mês'] | hifen}}</td>\n              <td *ngIf=\"columns['UF']\">{{item['UF'] | hifen}}</td>\n              <td *ngIf=\"columns['Contrato de Frete']\">{{item['Contrato de Frete'] | hifen}}</td>\n              <td *ngIf=\"columns['Tipo de Veículo']\">{{item['Tipo de Veículo'] | hifen}}</td>\n              <td>{{item['Custo de Frete'] | currency: 'BRL'}}</td>\n              <td>{{item['Peso Total Transportado'] | number: '1.0-0'}}</td>\n              <td>{{item['KM Total'] | number: '1.0-0'}}</td>\n              <td>{{item['Valor Nota Fiscal'] | currency: 'BRL'}}</td>\n              <td>{{item['Capacidade de Transporte'] | number: '1.0-0'}}</td>\n            </tr>\n            <tr>\n              <td class=\"bg-dark text-white\" *ngIf=\"columns['Ano']\">-</td>\n              <td class=\"bg-dark text-white\" *ngIf=\"columns['Mês']\">-</td>\n              <td class=\"bg-dark text-white\" *ngIf=\"columns['UF']\">-</td>\n              <td class=\"bg-dark text-white\" *ngIf=\"columns['Contrato de Frete']\">-</td>\n              <td class=\"bg-dark text-white\" *ngIf=\"columns['Tipo de Veículo']\">-</td>\n              <td class=\"bg-dark text-white\"><strong>{{total['Custo de Frete'] | currency: 'BRL'}}</strong></td>\n              <td class=\"bg-dark text-white\"><strong>{{total['Peso Total Transportado'] | number: '1.0-0'}}</strong></td>\n              <td class=\"bg-dark text-white\"><strong>{{total['KM Total'] | number: '1.0-0'}}</strong></td>\n              <td class=\"bg-dark text-white\"><strong>{{total['Valor Nota Fiscal'] | currency: 'BRL'}}</strong></td>\n              <td class=\"bg-dark text-white\"><strong>{{total['Capacidade de Transporte'] | number: '1.0-0'}}</strong></td>\n            </tr>\n          </ng-template>\n        </custom-table>\n      </div>\n      <div class=\"mb-4\">\n        <custom-table class=\"text-center\">\n          <ng-template #thead let-thead>\n            <tr>\n              <th scope=\"col\" *ngIf=\"columns['Ano']\">\n                <thead-sorter\n                  value=\"Ano\"\n                  [active]=\"orderBy == 'Ano'\"\n                  [sort]=\"orderType\"\n                  (click)=\"setOrderBy('Ano')\">\n                </thead-sorter>\n              </th>\n              <th scope=\"col\" *ngIf=\"columns['Mês']\">\n                <thead-sorter\n                  value=\"Mês\"\n                  [active]=\"orderBy == 'Mês'\"\n                  [sort]=\"orderType\"\n                  (click)=\"setOrderBy('Mês')\">\n                </thead-sorter>\n              </th>\n              <th scope=\"col\" *ngIf=\"columns['UF']\">\n                <thead-sorter\n                  value=\"UF\"\n                  [active]=\"orderBy == 'UF'\"\n                  [sort]=\"orderType\"\n                  (click)=\"setOrderBy('UF')\">\n                </thead-sorter>\n              </th>\n              <th scope=\"col\" *ngIf=\"columns['Contrato de Frete']\">\n                <thead-sorter\n                  value=\"Contrato de Frete\"\n                  [active]=\"orderBy == 'Contrato de Frete'\"\n                  [sort]=\"orderType\"\n                  (click)=\"setOrderBy('Contrato de Frete')\">\n                </thead-sorter>\n              </th>\n              <th scope=\"col\" *ngIf=\"columns['Tipo de Veículo']\">\n                <thead-sorter\n                  value=\"Tipo de Veículo\"\n                  [active]=\"orderBy == 'Tipo de Veículo'\"\n                  [sort]=\"orderType\"\n                  (click)=\"setOrderBy('Tipo de Veículo')\">\n                </thead-sorter>\n              </th>\n              <th scope=\"col\" width=\"12%\">\n                <div class=\"d-flex\">\n                  <thead-sorter\n                    value=\"Reais x Ton\"\n                    [active]=\"orderBy == 'Boliviano x Ton'\"\n                    [sort]=\"orderType\"\n                    (click)=\"setOrderBy('Reais x Ton')\">\n                  </thead-sorter>\n                  <div>\n                    <i\n                    class=\"far fa-question-circle\"\n                    [tooltip]=\"rotulos['Boliviano x Ton']['descricao']\"\n                    placement=\"right\"\n                    container=\"body\"\n                    >\n                    </i>\n                  </div>\n                </div>\n              </th>\n              <th scope=\"col\" width=\"12%\">\n                <div class=\"d-flex\">\n                  <thead-sorter\n                    value=\"Reais x KM\"\n                    [active]=\"orderBy == 'Reais x KM'\"\n                    [sort]=\"orderType\"\n                    (click)=\"setOrderBy('Reais x KM')\">\n                  </thead-sorter>\n                  <div>\n                    <i\n                    class=\"far fa-question-circle\"\n                    [tooltip]=\"rotulos['Reais x KM']['descricao']\"\n                    placement=\"right\"\n                    container=\"body\"\n                    >\n                    </i>\n                  </div>\n                </div>\n              </th>\n              <th scope=\"col\" width=\"12%\">\n                <div class=\"d-flex\">\n                  <thead-sorter\n                    value=\"Frete x Receita\"\n                    [active]=\"orderBy == 'Frete x Receita'\"\n                    [sort]=\"orderType\"\n                    (click)=\"setOrderBy('Frete x Receita')\">\n                  </thead-sorter>\n                  <div>\n                    <i\n                    class=\"far fa-question-circle\"\n                    [tooltip]=\"rotulos['Frete x Receita']['descricao']\"\n                    placement=\"right\"\n                    container=\"body\"\n                    >\n                    </i>\n                  </div>\n                </div>\n              </th>\n              <th scope=\"col\" width=\"12%\">\n                <div class=\"d-flex\">\n                  <thead-sorter\n                    value=\"Taxa de Ocupação\"\n                    [active]=\"orderBy == 'Taxa de Ocupação'\"\n                    [sort]=\"orderType\"\n                    (click)=\"setOrderBy('Taxa de Ocupação')\">\n                  </thead-sorter>\n                  <div>\n                    <i\n                    class=\"far fa-question-circle\"\n                    [tooltip]=\"rotulos['Taxa de Ocupação']['descricao']\"\n                    placement=\"right\"\n                    container=\"body\"\n                    >\n                    </i>\n                  </div>\n                </div>\n              </th>\n              <th scope=\"col\" width=\"12%\">\n                <div class=\"d-flex\">\n                  <thead-sorter\n                    value=\"Ticket Médio Por Entrega\"\n                    [active]=\"orderBy == 'Ticket Médio Por Entrega'\"\n                    [sort]=\"orderType\"\n                    (click)=\"setOrderBy('Ticket Médio Por Entrega')\">\n                  </thead-sorter>\n                  <div>\n                    <i\n                    class=\"far fa-question-circle\"\n                    [tooltip]=\"rotulos['Ticket Médio Por Entrega']['descricao']\"\n                    placement=\"right\"\n                    container=\"body\"\n                    >\n                    </i>\n                  </div>\n                </div>\n              </th>\n            </tr>\n          </ng-template>\n          <ng-template #tbody let-tbody>\n            <tr *ngFor=\"let item of data\">\n              <td *ngIf=\"columns['Ano']\">{{item['Ano'] | hifen}}</td>\n              <td *ngIf=\"columns['Mês']\">{{item['Mês'] | hifen}}</td>\n              <td *ngIf=\"columns['UF']\">{{item['UF'] | hifen}}</td>\n              <td *ngIf=\"columns['Contrato de Frete']\">{{item['Contrato de Frete'] | hifen}}</td>\n              <td *ngIf=\"columns['Tipo de Veículo']\">{{item['Tipo de Veículo'] | hifen}}</td>\n              <td>{{item['Reais x Ton'] | currency: 'BRL'}}</td>\n              <td>{{item['Reais x KM'] | currency: 'BRL'}}</td>\n              <td>{{item['Frete x Receita']| number: '1.2-2': 'pt-BR'}}%</td>\n              <td>{{item['Taxa de Ocupação'] | number: '1.2-2': 'pt-BR'}}%</td>\n              <td>{{item['Ticket Médio Por Entrega']  | number: '1.3-3': 'pt-BR'}}</td>\n            </tr>\n            <tr>\n              <td class=\"bg-dark text-white\" *ngIf=\"columns['Ano']\"><strong>-</strong></td>\n              <td class=\"bg-dark text-white\" *ngIf=\"columns['Mês']\"><strong>-</strong></td>\n              <td class=\"bg-dark text-white\" *ngIf=\"columns['UF']\"><strong>-</strong></td>\n              <td class=\"bg-dark text-white\" *ngIf=\"columns['Contrato de Frete']\"><strong>-</strong></td>\n              <td class=\"bg-dark text-white\" *ngIf=\"columns['Tipo de Veículo']\"><strong>-</strong></td>\n              <td class=\"bg-dark text-white\"><strong>{{total['Reais x Ton'] | currency: 'BRL'}}</strong></td>\n              <td class=\"bg-dark text-white\"><strong>{{total['Reais x KM'] | currency: 'BRL'}}</strong></td>\n              <td class=\"bg-dark text-white\"><strong>{{total['Frete x Receita']  | number: '1.2-2'}}%</strong></td>\n              <td class=\"bg-dark text-white\"><strong>{{total['Taxa de Ocupação']  | number: '1.2-2'}}%</strong></td>\n              <td class=\"bg-dark text-white\"><strong>{{total['Ticket Médio Por Entrega'] | number: '1.3-3'}}</strong></td>\n            </tr>\n          </ng-template>\n        </custom-table>\n      </div>\n      <div class=\"mb-4\"> \n        <custom-table class=\"text-center\">\n          <ng-template #thead let-thead>\n            <tr>\n              <th scope=\"col\" *ngIf=\"columns['Ano']\">\n                <thead-sorter\n                  value=\"Ano\"\n                  [active]=\"orderBy == 'Ano'\"\n                  [sort]=\"orderType\"\n                  (click)=\"setOrderBy('Ano')\">\n                </thead-sorter>\n              </th>\n              <th scope=\"col\" *ngIf=\"columns['Mês']\">\n                <thead-sorter\n                  value=\"Mês\"\n                  [active]=\"orderBy == 'Mês'\"\n                  [sort]=\"orderType\"\n                  (click)=\"setOrderBy('Mês')\">\n                </thead-sorter>\n              </th>\n              <th scope=\"col\" *ngIf=\"columns['UF']\">\n                <thead-sorter\n                  value=\"UF\"\n                  [active]=\"orderBy == 'UF'\"\n                  [sort]=\"orderType\"\n                  (click)=\"setOrderBy('UF')\">\n                </thead-sorter>\n              </th>\n              <th scope=\"col\" *ngIf=\"columns['Contrato de Frete']\">\n                <thead-sorter\n                  value=\"Contrato de Frete\"\n                  [active]=\"orderBy == 'Contrato de Frete'\"\n                  [sort]=\"orderType\"\n                  (click)=\"setOrderBy('Contrato de Frete')\">\n                </thead-sorter>\n              </th>\n              <th scope=\"col\" *ngIf=\"columns['Tipo de Veículo']\">\n                <thead-sorter\n                  value=\"Tipo de Veículo\"\n                  [active]=\"orderBy == 'Tipo de Veículo'\"\n                  [sort]=\"orderType\"\n                  (click)=\"setOrderBy('Tipo de Veículo')\">\n                </thead-sorter>\n              </th>\n              <th scope=\"col\" width=\"12%\">\n                <div class=\"d-flex\">\n                  <thead-sorter\n                    value=\"Total de Clientes\"\n                    [active]=\"orderBy == 'Total de Clientes'\"\n                    [sort]=\"orderType\"\n                    (click)=\"setOrderBy('Total de Clientes')\">\n                  </thead-sorter>\n                  <div>\n                    <i\n                    class=\"far fa-question-circle\"\n                    [tooltip]=\"rotulos['Total de Clientes']['descricao']\"\n                    placement=\"right\"\n                    container=\"body\"\n                    >\n                    </i>\n                  </div>\n                </div>\n              </th>\n              <th scope=\"col\" width=\"12%\">\n                <div class=\"d-flex\">\n                  <thead-sorter\n                    value=\"Total de Viagens\"\n                    [active]=\"orderBy == 'Total de Viagens'\"\n                    [sort]=\"orderType\"\n                    (click)=\"setOrderBy('Total de Viagens')\">\n                  </thead-sorter>\n                  <div>\n                    <i\n                    class=\"far fa-question-circle\"\n                    [tooltip]=\"rotulos['Total de Viagens']['descricao']\"\n                    placement=\"right\"\n                    container=\"body\"\n                    >\n                    </i>\n                  </div>\n                </div>\n              </th>\n              <th scope=\"col\" width=\"12%\">\n                <div class=\"d-flex\"> \n                  <thead-sorter\n                    value=\"Total de Entregas\"\n                    [active]=\"orderBy == 'Total de Entregas'\"\n                    [sort]=\"orderType\"\n                    (click)=\"setOrderBy('Total de Entregas')\">\n                  </thead-sorter>\n                  <div>\n                    <i\n                      class=\"far fa-question-circle\"\n                      [tooltip]=\"rotulos['Total de Entregas']['descricao']\"\n                      placement=\"right\"\n                      container=\"body\"\n                    >\n                    </i>\n                  </div>\n                </div>\n              </th>\n              <th scope=\"col\" width=\"12%\">\n                <div class=\"d-flex\">\n                  <thead-sorter\n                    value=\"Entregas x Viagem\"\n                    [active]=\"orderBy == 'Entregas x Viagem'\"\n                    [sort]=\"orderType\"\n                    (click)=\"setOrderBy('Entregas x Viagem')\">\n                  </thead-sorter>\n                  <div>\n                    <i\n                    class=\"far fa-question-circle\"\n                    [tooltip]=\"rotulos['Entregas x Viagem']['descricao']\"\n                    placement=\"right\"\n                    container=\"body\"\n                    >\n                    </i>\n                  </div>\n                </div>\n              </th>\n              <th scope=\"col\" width=\"12%\">\n                <div class=\"d-flex\">\n                  <thead-sorter\n                    value=\"Peso Médio x Viagem\"\n                    [active]=\"orderBy == 'Peso Médio x Viagem'\"\n                    [sort]=\"orderType\"\n                    (click)=\"setOrderBy('Peso Médio x Viagem')\">\n                  </thead-sorter>\n                  <div>\n                    <i\n                    class=\"far fa-question-circle\"\n                    [tooltip]=\"rotulos['Peso Médio x Viagem']['descricao']\"\n                    placement=\"right\"\n                    container=\"body\"\n                    >\n                    </i>\n                  </div>\n                </div>\n              </th>\n            </tr>\n          </ng-template>\n          <ng-template #tbody let-tbody>\n            <tr *ngFor=\"let item of data\">\n              <td *ngIf=\"columns['Ano']\">{{item['Ano'] | hifen}}</td>\n              <td *ngIf=\"columns['Mês']\">{{item['Mês'] | hifen}}</td>\n              <td *ngIf=\"columns['UF']\">{{item['UF'] | hifen}}</td>\n              <td *ngIf=\"columns['Contrato de Frete']\">{{item['Contrato de Frete'] | hifen}}</td>\n              <td *ngIf=\"columns['Tipo de Veículo']\">{{item['Tipo de Veículo'] | hifen}}</td>\n              <td>{{item['Total de Clientes'] | number: '1.0-0'}}</td>\n              <td>{{item['Total de Viagens'] | number: '1.0-0'}}</td>\n              <td>{{item['Total de Entregas'] | number: '1.0-0'}}</td>\n              <td>{{item['Entregas x Viagem'] | number: '1.3-3': 'pt-BR'}}</td>\n              <td>{{item['Peso Médio x Viagem'] | number: '1.3-3': 'pt-BR'}}</td>\n            </tr>\n            <tr>\n              <td class=\"bg-dark text-white\" *ngIf=\"columns['Ano']\"><strong>-</strong></td>\n              <td class=\"bg-dark text-white\" *ngIf=\"columns['Mês']\"><strong>-</strong></td>\n              <td class=\"bg-dark text-white\" *ngIf=\"columns['UF']\"><strong>-</strong></td>\n              <td class=\"bg-dark text-white\" *ngIf=\"columns['Contrato de Frete']\"><strong>-</strong></td>\n              <td class=\"bg-dark text-white\" *ngIf=\"columns['Tipo de Veículo']\"><strong>-</strong></td>\n              <td class=\"bg-dark text-white\"><strong>{{total['Total de Clientes'] | number: '1.0-0': 'pt-BR'}}</strong></td>\n              <td class=\"bg-dark text-white\"><strong>{{total['Total de Viagens']  | number: '1.0-0'}}</strong></td>\n              <td class=\"bg-dark text-white\"><strong>{{total['Total de Entregas'] | number: '1.0-0': 'pt-BR'}}</strong></td>\n              <td class=\"bg-dark text-white\"><strong>{{total['Entregas x Viagem'] | number: '1.3-3': 'pt-BR'}}</strong></td>\n              <td class=\"bg-dark text-white\"><strong>{{total['Peso Médio x Viagem'] | number: '1.3-3': 'pt-BR'}}</strong></td>\n            </tr>\n          </ng-template>\n        </custom-table>\n      </div>\n    </div>\n    <div *ngIf=\"empty\" class=\"text-center h-50 my-auto d-flex justify-content-center align-items-center\">\n      <empty-result message=\"No se encontró información \"></empty-result>\n    </div>\n  </div>\n</app-body>";
      /***/
    },

    /***/
    "H/iZ":
    /*!*******************************************************************************!*\
      !*** ./src/app/modules/logistica/dashboards/analise-frete/v2/v2.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: LogisticaDashboardsAnaliseFreteV2Component */

    /***/
    function HIZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaDashboardsAnaliseFreteV2Component", function () {
        return LogisticaDashboardsAnaliseFreteV2Component;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_v2_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./v2.component.html */
      "/7A+");
      /* harmony import */


      var _v2_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./v2.component.scss */
      "mWEZ");
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");
      /* harmony import */


      var _services_analise_frete_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../services/analise-frete.service */
      "jhlZ");
      /* harmony import */


      var src_app_shared_services_core_xlsx_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/shared/services/core/xlsx.service */
      "8WR6");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+"); // angular
      // ngx
      // rxjs
      // services


      var LogisticaDashboardsAnaliseFreteV2Component = /*#__PURE__*/function () {
        function LogisticaDashboardsAnaliseFreteV2Component(activatedRoute, atividadesService, formBuilder, localeService, router, http, pnotify, dateService, service, routeService, xlsxService) {
          _classCallCheck(this, LogisticaDashboardsAnaliseFreteV2Component);

          this.activatedRoute = activatedRoute;
          this.atividadesService = atividadesService;
          this.formBuilder = formBuilder;
          this.localeService = localeService;
          this.router = router;
          this.http = http;
          this.pnotify = pnotify;
          this.dateService = dateService;
          this.service = service;
          this.routeService = routeService;
          this.xlsxService = xlsxService;
          this.breadCrumbTree = [];
          this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].API;
          this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
          this.matricula = this.currentUser["info"]["matricula"];
          this.dataLoaded = false;
          this.permission = false;
          this.empresas = [];
          this.data = [];
          this.total = {};
          this.show = false;
          this.loading = false;
          this.empty = false;
          this.columns = {
            'Ano': false,
            'Mes': false,
            'UF': false,
            'Tipo de Veículo': false,
            'Contrato de Frete': false
          };
          this.segmentacao = [{
            'nome': 'Ano',
            'v2': {
              'select': ' ,[Ano] ',
              'where': ' S1.[Ano] = T1.[Ano] ',
              'groupBy': ' [Ano] ',
              'orderBy': ' [Ano] '
            }
          }, {
            'nome': 'Mês',
            'v2': {
              'select': ' ,[Mês] ',
              'where': ' S1.[Mês] = T1.[Mês] ',
              'groupBy': ' [Mês] ',
              'orderBy': ' [Mês] '
            }
          }, {
            'nome': 'UF',
            'v2': {
              'select': ' ,[UF] ',
              'where': ' S1.[UF] = T1.[UF] ',
              'groupBy': ' [UF] ',
              'orderBy': ' [UF] '
            }
          }, {
            'nome': 'Tipo de Veículo',
            'v2': {
              'select': ' ,[Tipo de Veículo] ',
              'where': ' S1.[Tipo de Veículo] = T1.[Tipo de Veículo] ',
              'groupBy': ' [Tipo de Veículo] ',
              'orderBy': ' [Tipo de Veículo] '
            }
          }, {
            'nome': 'Contrato de Frete',
            'v2': {
              'select': ' ,[Contrato de Frete] ',
              'where': ' S1.[Contrato de Frete] = T1.[Contrato de Frete] ',
              'groupBy': ' [Contrato de Frete] ',
              'orderBy': ' [Contrato de Frete] '
            }
          }];
          this.rotulos = {};
          this.appTitle = 'Análise de Frete II';
          this.tableConfig = {
            subtitleBorder: false,
            isFixed: true,
            border: false,
            small: false,
            hover: false,
            theme: {
              color: 'white'
            }
          };
          this.orderBy = 'Frete';
          this.orderType = 'DESC';
          this.localeService.use('pt-br');
          this.bsConfig = Object.assign({}, {
            containerClass: 'theme-dark-blue'
          }, {
            adaptivePosition: true
          }, {
            showWeekNumbers: false
          });
          this.form = this.formBuilder.group({
            projeto: [null],
            dataInicial: [dateService.getFirstDayMonth(), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            dataFinal: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            parametrizacao: [[]],
            tipoVeiculo: [null],
            uf: [null],
            contratoFrete: [null],
            select: [null],
            where: [null],
            groupBy: [null],
            orderBy: [null],
            origem: ['TMS'],
            timestamp: [new Date().getTime()]
          });
        }

        _createClass(LogisticaDashboardsAnaliseFreteV2Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.atividadesService.registrarAcesso().subscribe();
            this.getEmpresas();
            this.onActiveRoute();
            this.getRotulos();
            this.setBreadCrumb();
          }
        }, {
          key: "onActiveRoute",
          value: function onActiveRoute() {
            var _this = this;

            this.activatedRoute.queryParams.subscribe(function (response) {
              var _a;

              var _params = JSON.parse(JSON.stringify(_this.routeService.getBase64UrlParams(response)));

              if (_params == undefined) {
                return;
              }

              if (Object.keys(_params).length == 0) {
                return;
              }

              _params.projeto = (_a = _params === null || _params === void 0 ? void 0 : _params.projeto) === null || _a === void 0 ? void 0 : _a.split(',');
              _params.parametrizacao = (_params === null || _params === void 0 ? void 0 : _params.parametrizacao) ? JSON.parse(_params === null || _params === void 0 ? void 0 : _params.parametrizacao) : [];

              _params.parametrizacao.forEach(function (element) {
                _this.columns[element] = true;
              });

              _this.form.patchValue(_params);

              _this.getIndicadores(_this.getParams());
            });
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            var params = this.activatedRoute.snapshot.params;
            var submoduloId = params === null || params === void 0 ? void 0 : params.idSubModulo;
            this.breadCrumbTree = [{
              descricao: 'Logistica'
            }, {
              descricao: 'Dashboards',
              routerLink: "/logistica/dashboards/".concat(submoduloId)
            }, {
              descricao: this.appTitle
            }];
          }
        }, {
          key: "getEmpresas",
          value: function getEmpresas() {
            var _this2 = this;

            this.http.get("".concat(this.API, "/logistica/associacao-usuario-empresa/").concat(this.matricula), {
              params: {
                "parametro": "4"
              },
              observe: "response"
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(function () {
              _this2.permission = _this2.empresas.length == 0 ? false : true;
              _this2.dataLoaded = true;
            })).subscribe(function (data) {
              _this2.empresas = [];

              if (data["status"] == 200) {
                _this2.empresas = data["body"];
              }
            }, function (error) {
              _this2.permission = _this2.empresas.length == 0 ? false : true;
              _this2.dataLoaded = true;
            });
          }
        }, {
          key: "getParams",
          value: function getParams() {
            var _params = {};
            var _obj = this.form.value;

            for (var prop in _obj) {
              if (!_obj[prop]) continue;else if (_obj[prop] instanceof Date) _params[prop] = this.dateService.convertToUrlDate(_obj[prop]);else if (prop == 'parametrizacao') _params[prop] = JSON.stringify(_obj[prop]);else if (Array.isArray(_obj[prop])) _params[prop] = _obj[prop].toString();else _params[prop] = _obj[prop];
            }

            return _params;
          }
        }, {
          key: "onFilter",
          value: function onFilter() {
            this.form.get('timestamp').setValue(new Date().getTime());
            this.router.navigate([], {
              relativeTo: this.activatedRoute,
              queryParams: this.routeService.setBase64UrlParams(this.getParams())
            });
          }
          /* CSS - Campos requeridos */

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
          key: "onFieldInvalid",
          value: function onFieldInvalid(field) {
            field = this.form.get(field);
            return field.status == 'INVALID' && field.touched;
          }
        }, {
          key: "getIndicadores",
          value: function getIndicadores(params) {
            var _this3 = this;

            if (this.$indicadoresSubscription) {
              this.$indicadoresSubscription.unsubscribe();
            }

            this.loading = true;
            this.empty = false;
            this.show = false;
            var parametro = this.form.get("origem").value == "TMS" ? 1 : 2;
            var requests = [];
            requests.push(this.service.getIndicadores(Object.assign(Object.assign({}, params), {
              parametro: parametro
            })));
            delete params['select'];
            delete params['where'];
            delete params['orderBy'];
            delete params['groupBy'];
            requests.push(this.service.getIndicadores(Object.assign(Object.assign({}, params), {
              parametro: parametro
            })));
            this.$indicadoresSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["forkJoin"])(requests).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(function () {
              _this3.loading = false;
            })).subscribe(function (response) {
              if (response[0]['status'] != 200) {
                _this3.empty = true;
                return;
              }

              _this3.data = response[0]['body']["data"];
              _this3.show = true;

              if (response[1]['status'] == 200) {
                _this3.total = response[1]['body']["data"][0];
              }
            }, function (error) {
              _this3.pnotify.error();
            });
          }
        }, {
          key: "getRotulos",
          value: function getRotulos() {
            var _this4 = this;

            this.service.getRotulos().subscribe(function (response) {
              if (response.status != 200) {
                return;
              }

              _this4.rotulos = response.body['data'];
            });
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

            this.orderData(this.orderBy, this.orderType);
          }
        }, {
          key: "orderData",
          value: function orderData(key, type) {
            this.data.sort(function (a, b) {
              if (a[key] === b[key]) {
                return 0;
              }

              if (type == 'ASC') {
                return a[key] > b[key] ? -1 : 1;
              }

              return a[key] > b[key] ? 1 : -1;
            });
          }
        }, {
          key: "prepareData",
          value: function prepareData(e) {
            var _this5 = this;

            var select = '';
            var where = '';
            var groupBy = '';
            var orderBy = '';
            Object.keys(this.columns).map(function (key) {
              return _this5.columns[key] = false;
            });
            e.forEach(function (value, index) {
              var _a, _b, _c, _d;

              if (where) {
                where += ' AND ';
              }

              select += (_a = value === null || value === void 0 ? void 0 : value.v2) === null || _a === void 0 ? void 0 : _a.select;
              where += (_b = value === null || value === void 0 ? void 0 : value.v2) === null || _b === void 0 ? void 0 : _b.where;
              groupBy += (_c = value === null || value === void 0 ? void 0 : value.v2) === null || _c === void 0 ? void 0 : _c.groupBy;
              orderBy += (_d = value === null || value === void 0 ? void 0 : value.v2) === null || _d === void 0 ? void 0 : _d.orderBy;

              if (index != e.length - 1) {
                select += '\n';
                where += '\n';
                groupBy += ',\n';
                orderBy += ',\n';
              }

              _this5.columns[value.nome] = true;
            });
            where = ' WHERE ' + where;
            groupBy = ' GROUP BY ' + groupBy;
            orderBy = ' ORDER BY ' + orderBy;
            this.form.get('select').setValue(select);
            this.form.get('where').setValue(where);
            this.form.get('groupBy').setValue(groupBy);
            this.form.get('orderBy').setValue(orderBy);
            this.getIndicadores(this.getParams());
          }
        }, {
          key: "onExport",
          value: function onExport() {
            this.xlsxService["export"]({
              data: this.data
            });
          }
        }]);

        return LogisticaDashboardsAnaliseFreteV2Component;
      }();

      LogisticaDashboardsAnaliseFreteV2Component.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__["AtividadesService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["BsLocaleService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_16__["PNotifyService"]
        }, {
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__["DateService"]
        }, {
          type: _services_analise_frete_service__WEBPACK_IMPORTED_MODULE_14__["LogisticaDashboardsAnaliseFreteService"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_13__["RouterService"]
        }, {
          type: src_app_shared_services_core_xlsx_service__WEBPACK_IMPORTED_MODULE_15__["XlsxService"]
        }];
      };

      LogisticaDashboardsAnaliseFreteV2Component.propDecorators = {
        scroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['scroll', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }]
        }]
      };
      LogisticaDashboardsAnaliseFreteV2Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'logistica-dashboards-frete-analitico',
        template: _raw_loader_v2_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_v2_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__["AtividadesService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["BsLocaleService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_16__["PNotifyService"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__["DateService"], _services_analise_frete_service__WEBPACK_IMPORTED_MODULE_14__["LogisticaDashboardsAnaliseFreteService"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_13__["RouterService"], src_app_shared_services_core_xlsx_service__WEBPACK_IMPORTED_MODULE_15__["XlsxService"]])], LogisticaDashboardsAnaliseFreteV2Component);
      /***/
    },

    /***/
    "i/to":
    /*!****************************************************************************!*\
      !*** ./src/app/modules/logistica/dashboards/analise-frete/v2/v2.module.ts ***!
      \****************************************************************************/

    /*! exports provided: V2Module */

    /***/
    function iTo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "V2Module", function () {
        return V2Module;
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


      var _v2_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./v2-routing.module */
      "tVO4");
      /* harmony import */


      var _v2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./v2.component */
      "H/iZ");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var angular2_counto__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! angular2-counto */
      "RNH4");
      /* harmony import */


      var angular2_counto__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angular2_counto__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/core/not-found/not-found.module */
      "sCnT");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/pipes/pipes.module */
      "9Xeq");

      var V2Module = function V2Module() {
        _classCallCheck(this, V2Module);
      };

      V2Module = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_v2_component__WEBPACK_IMPORTED_MODULE_4__["LogisticaDashboardsAnaliseFreteV2Component"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _v2_routing_module__WEBPACK_IMPORTED_MODULE_3__["V2RoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["PaginationModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsDatepickerModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ModalModule"].forRoot(), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"], angular2_counto__WEBPACK_IMPORTED_MODULE_8__["CountoModule"], src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_9__["NotFoundModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_11__["TemplatesModule"], src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_12__["PipesModule"]]
      })], V2Module);
      /***/
    },

    /***/
    "mWEZ":
    /*!*********************************************************************************!*\
      !*** ./src/app/modules/logistica/dashboards/analise-frete/v2/v2.component.scss ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function mWEZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2Rhc2hib2FyZHMvYW5hbGlzZS1mcmV0ZS92Mi92Mi5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "tVO4":
    /*!************************************************************************************!*\
      !*** ./src/app/modules/logistica/dashboards/analise-frete/v2/v2-routing.module.ts ***!
      \************************************************************************************/

    /*! exports provided: V2RoutingModule */

    /***/
    function tVO4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "V2RoutingModule", function () {
        return V2RoutingModule;
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


      var _v2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./v2.component */
      "H/iZ");

      var routes = [{
        path: '',
        component: _v2_component__WEBPACK_IMPORTED_MODULE_3__["LogisticaDashboardsAnaliseFreteV2Component"]
      }];

      var V2RoutingModule = function V2RoutingModule() {
        _classCallCheck(this, V2RoutingModule);
      };

      V2RoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], V2RoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=v2-v2-module-es5.js.map