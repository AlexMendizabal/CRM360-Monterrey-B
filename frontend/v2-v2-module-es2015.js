(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["v2-v2-module"],{

/***/ "/7A+":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/dashboards/analise-frete/v2/v2.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"!dataLoaded\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar *ngIf=\"loading\"></loader-spinner-navbar>\r\n<app-header [appTitle]=\"appTitle\">\r\n  <button\r\n    (click)=\"onExport()\"\r\n    *ngIf=\"permission\"\r\n    [disabled]=\"form.status === 'INVALID' && !isFiltered\"\r\n  >\r\n    Exportar\r\n  </button>\r\n  <button\r\n    (click)=\"onFilter()\"\r\n    *ngIf=\"permission\"\r\n    [disabled]=\"form.status === 'INVALID' && !isFiltered\"\r\n  >\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <advanced-filter>\r\n    <form id=\"form-logistica-dashboard\" [formGroup]=\"form\" class=\"row\">\r\n      <div class=\"form-group col-3\">\r\n        <label for=\"empresa\">Empresa</label>\r\n        <ng-select\r\n          [searchable]=\"true\"\r\n          [clearable]=\"false\"\r\n          [items]=\"empresas\"\r\n          [virtualScroll]=\"true\"\r\n          [multiple]=\"true\"\r\n          [closeOnSelect]\t=\"false\"\r\n          labelForId=\"empresa\"\r\n          bindLabel=\"dsEmpresa\"\r\n          bindValue=\"dsEmpresa\"\r\n          id=\"empresa\"\r\n          formControlName=\"projeto\"\r\n        >\r\n        </ng-select>\r\n      </div>\r\n      <div class=\"form-group col-3\">\r\n        <label for=\"empresa\">Data Inicial</label>\r\n        <div class=\"input-group\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\r\n          </div>\r\n          <input\r\n            class=\"form-control\"\r\n            id=\"dataInicial\"\r\n            type=\"text\"\r\n            bsDatepicker\r\n            [bsConfig]=\"bsConfig\"\r\n            [ngClass]=\"onFieldRequired('dataInicial')\"\r\n            formControlName=\"dataInicial\">\r\n          <invalid-form-control [show]=\"onFieldInvalid('dataInicial')\" message=\"Data Inicial é obrigatório.\"></invalid-form-control>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group col-3\">\r\n        <label for=\"empresa\">Data Final</label>\r\n        <div class=\"input-group\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\r\n          </div>\r\n          <input\r\n          class=\"form-control\"\r\n          id=\"dataFinal\"\r\n          type=\"text\"\r\n          bsDatepicker\r\n          [bsConfig]=\"bsConfig\"\r\n          [ngClass]=\"onFieldRequired('dataFinal')\"\r\n          formControlName=\"dataFinal\">\r\n          <invalid-form-control [show]=\"onFieldInvalid('dataFinal')\" message=\"Data Final é obrigatório.\"></invalid-form-control>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group col-3\">\r\n        <label>UF</label>\r\n        <input\r\n          type=\"text\"\r\n          class=\"form-control\"\r\n          formControlName=\"uf\"\r\n          (keyup.enter)=\"onFilter()\"\r\n          >\r\n      </div>\r\n      <div class=\"form-group col-3\">\r\n        <label>Contrato de Frete</label>\r\n        <input\r\n          type=\"text\"\r\n          class=\"form-control\"\r\n          formControlName=\"contratoFrete\"\r\n          (keyup.enter)=\"onFilter()\"\r\n        >\r\n      </div>\r\n      <div class=\"form-group col-3\">\r\n        <label>Tipo de Veículo</label>\r\n        <input\r\n          type=\"text\"\r\n          class=\"form-control\"\r\n          formControlName=\"tipoVeiculo\"\r\n          (keyup.enter)=\"onFilter()\"  \r\n        >\r\n      </div>\r\n      <div class=\"form-group col-3\">\r\n        <label for=\"\">Segmentação</label>\r\n        <ng-select\r\n          [searchable]=\"true\"\r\n          [clearable]=\"false\"\r\n          [multiple]=\"true\"\r\n          [items]=\"segmentacao\"\r\n          placeholder=\"Selecione uma opção\"\r\n          bindLabel=\"nome\"\r\n          bindValue=\"nome\"\r\n          formControlName=\"parametrizacao\"\r\n          (change)=\"prepareData($event);\"\r\n          >\r\n        </ng-select>\r\n      </div>\r\n      <div class=\"form-group col-3\">\r\n        <label for=\"origem\">Origem</label>\r\n        <select\r\n          name=\"origem\"\r\n          id=\"origem\"\r\n          class=\"form-control\"\r\n          formControlName=\"origem\"\r\n          (change)=\"onFilter()\"  \r\n        >\r\n          <option value=\"TMS\">TMS</option>\r\n          <option value=\"Fusion\">Fusion</option>\r\n        </select>\r\n      </div>\r\n    </form>\r\n  </advanced-filter>\r\n  <div>\r\n    <div *ngIf=\"show\">\r\n      <div class=\"mb-4\">\r\n        <custom-table class=\"text-center\" >\r\n          <ng-template #thead let-thead>\r\n            <tr>\r\n              <th scope=\"col\" *ngIf=\"columns['Ano']\">\r\n                <thead-sorter\r\n                  value=\"Ano\"\r\n                  [active]=\"orderBy == 'Ano'\"\r\n                  [sort]=\"orderType\"\r\n                  (click)=\"setOrderBy('Ano')\">\r\n                </thead-sorter>\r\n              </th>\r\n              <th scope=\"col\" *ngIf=\"columns['Mês']\">\r\n                <thead-sorter\r\n                  value=\"Mês\"\r\n                  [active]=\"orderBy == 'Mês'\"\r\n                  [sort]=\"orderType\"\r\n                  (click)=\"setOrderBy('Mês')\">\r\n                </thead-sorter>\r\n              </th>\r\n              <th scope=\"col\" *ngIf=\"columns['UF']\">\r\n                <thead-sorter\r\n                  value=\"UF\"\r\n                  [active]=\"orderBy == 'UF'\"\r\n                  [sort]=\"orderType\"\r\n                  (click)=\"setOrderBy('UF')\">\r\n                </thead-sorter>\r\n              </th>\r\n              <th scope=\"col\" *ngIf=\"columns['Contrato de Frete']\">\r\n                <thead-sorter\r\n                  value=\"Contrato de Frete\"\r\n                  [active]=\"orderBy == 'Contrato de Frete'\"\r\n                  [sort]=\"orderType\"\r\n                  (click)=\"setOrderBy('Contrato de Frete')\">\r\n                </thead-sorter>\r\n              </th>\r\n              <th scope=\"col\" *ngIf=\"columns['Tipo de Veículo']\">\r\n                <thead-sorter\r\n                  value=\"Tipo de Veículo\"\r\n                  [active]=\"orderBy == 'Tipo de Veículo'\"\r\n                  [sort]=\"orderType\"\r\n                  (click)=\"setOrderBy('Tipo de Veículo')\">\r\n                </thead-sorter>\r\n              </th>\r\n              <th scope=\"col\" width=\"12%\">\r\n                <div class=\"d-flex\">\r\n                  <thead-sorter\r\n                    value=\"Custo de Frete\"\r\n                    [active]=\"orderBy == 'Custo de Frete'\"\r\n                    [sort]=\"orderType\"\r\n                    (click)=\"setOrderBy('Custo de Frete')\">\r\n                  </thead-sorter>\r\n                  <div>\r\n                    <i\r\n                    class=\"far fa-question-circle\"\r\n                    [tooltip]=\"rotulos['Custo de Frete']['descricao']\"\r\n                    placement=\"right\"\r\n                    container=\"body\"\r\n                    >\r\n                    </i>\r\n                  </div>\r\n                </div>\r\n              </th>\r\n              <th scope=\"col\" width=\"12%\">\r\n                <div class=\"d-flex\">\r\n                  <thead-sorter\r\n                    value=\"Peso Total Transportado\"\r\n                    [active]=\"orderBy == 'Peso Total Transportado'\"\r\n                    [sort]=\"orderType\"\r\n                    (click)=\"setOrderBy('Peso Total Transportado')\">\r\n                  </thead-sorter>\r\n                  <div>\r\n                    <i\r\n                    class=\"far fa-question-circle\"\r\n                    [tooltip]=\"rotulos['Peso Total Transportado']['descricao']\"\r\n                    placement=\"right\"\r\n                    container=\"body\"\r\n                    >\r\n                    </i>\r\n                  </div>\r\n                </div>\r\n              </th>\r\n              <th scope=\"col\" width=\"12%\">\r\n                <div class=\"d-flex\">\r\n                  <thead-sorter\r\n                    value=\"KM Total\"\r\n                    [active]=\"orderBy == 'KM Total'\"\r\n                    [sort]=\"orderType\"\r\n                    (click)=\"setOrderBy('KM Total')\">\r\n                  </thead-sorter>\r\n                  <div>\r\n                    <i\r\n                    class=\"far fa-question-circle\"\r\n                    [tooltip]=\"rotulos['KM Total']['descricao']\"\r\n                    placement=\"right\"\r\n                    container=\"body\"\r\n                    >\r\n                    </i>\r\n                  </div>\r\n                </div>\r\n              </th>\r\n              <th scope=\"col\" width=\"12%\">\r\n                <div class=\"d-flex\">\r\n                  <thead-sorter\r\n                    value=\"Valor Nota Fiscal\"\r\n                    [active]=\"orderBy == 'Valor Nota Fiscal'\"\r\n                    [sort]=\"orderType\"\r\n                    (click)=\"setOrderBy('Valor Nota Fiscal')\">\r\n                  </thead-sorter>\r\n                  <div>\r\n                    <i\r\n                    class=\"far fa-question-circle\"\r\n                    [tooltip]=\"rotulos['Valor Nota Fiscal']['descricao']\"\r\n                    placement=\"right\"\r\n                    container=\"body\"\r\n                    >\r\n                    </i>\r\n                  </div>\r\n                </div>\r\n              </th>\r\n              <th scope=\"col\" width=\"12%\">\r\n                <div class=\"d-flex\">\r\n                  <thead-sorter\r\n                    value=\"Capacidade de Transporte\"\r\n                    [active]=\"orderBy == 'Capacidade de Transporte'\"\r\n                    [sort]=\"orderType\"\r\n                    (click)=\"setOrderBy('Capacidade de Transporte')\">\r\n                  </thead-sorter>\r\n                  <div>\r\n                    <i\r\n                    class=\"far fa-question-circle\"\r\n                    [tooltip]=\"rotulos['Capacidade de Transporte']['descricao']\"\r\n                    placement=\"right\"\r\n                    container=\"body\"\r\n                    >\r\n                    </i>\r\n                  </div>\r\n                </div>\r\n              </th>\r\n            </tr>\r\n          </ng-template>\r\n          <ng-template #tbody let-tbody>\r\n            <tr *ngFor=\"let item of data\">\r\n              <td *ngIf=\"columns['Ano']\">{{item['Ano'] | hifen}}</td>\r\n              <td *ngIf=\"columns['Mês']\">{{item['Mês'] | hifen}}</td>\r\n              <td *ngIf=\"columns['UF']\">{{item['UF'] | hifen}}</td>\r\n              <td *ngIf=\"columns['Contrato de Frete']\">{{item['Contrato de Frete'] | hifen}}</td>\r\n              <td *ngIf=\"columns['Tipo de Veículo']\">{{item['Tipo de Veículo'] | hifen}}</td>\r\n              <td>{{item['Custo de Frete'] | currency: 'BRL'}}</td>\r\n              <td>{{item['Peso Total Transportado'] | number: '1.0-0'}}</td>\r\n              <td>{{item['KM Total'] | number: '1.0-0'}}</td>\r\n              <td>{{item['Valor Nota Fiscal'] | currency: 'BRL'}}</td>\r\n              <td>{{item['Capacidade de Transporte'] | number: '1.0-0'}}</td>\r\n            </tr>\r\n            <tr>\r\n              <td class=\"bg-dark text-white\" *ngIf=\"columns['Ano']\">-</td>\r\n              <td class=\"bg-dark text-white\" *ngIf=\"columns['Mês']\">-</td>\r\n              <td class=\"bg-dark text-white\" *ngIf=\"columns['UF']\">-</td>\r\n              <td class=\"bg-dark text-white\" *ngIf=\"columns['Contrato de Frete']\">-</td>\r\n              <td class=\"bg-dark text-white\" *ngIf=\"columns['Tipo de Veículo']\">-</td>\r\n              <td class=\"bg-dark text-white\"><strong>{{total['Custo de Frete'] | currency: 'BRL'}}</strong></td>\r\n              <td class=\"bg-dark text-white\"><strong>{{total['Peso Total Transportado'] | number: '1.0-0'}}</strong></td>\r\n              <td class=\"bg-dark text-white\"><strong>{{total['KM Total'] | number: '1.0-0'}}</strong></td>\r\n              <td class=\"bg-dark text-white\"><strong>{{total['Valor Nota Fiscal'] | currency: 'BRL'}}</strong></td>\r\n              <td class=\"bg-dark text-white\"><strong>{{total['Capacidade de Transporte'] | number: '1.0-0'}}</strong></td>\r\n            </tr>\r\n          </ng-template>\r\n        </custom-table>\r\n      </div>\r\n      <div class=\"mb-4\">\r\n        <custom-table class=\"text-center\">\r\n          <ng-template #thead let-thead>\r\n            <tr>\r\n              <th scope=\"col\" *ngIf=\"columns['Ano']\">\r\n                <thead-sorter\r\n                  value=\"Ano\"\r\n                  [active]=\"orderBy == 'Ano'\"\r\n                  [sort]=\"orderType\"\r\n                  (click)=\"setOrderBy('Ano')\">\r\n                </thead-sorter>\r\n              </th>\r\n              <th scope=\"col\" *ngIf=\"columns['Mês']\">\r\n                <thead-sorter\r\n                  value=\"Mês\"\r\n                  [active]=\"orderBy == 'Mês'\"\r\n                  [sort]=\"orderType\"\r\n                  (click)=\"setOrderBy('Mês')\">\r\n                </thead-sorter>\r\n              </th>\r\n              <th scope=\"col\" *ngIf=\"columns['UF']\">\r\n                <thead-sorter\r\n                  value=\"UF\"\r\n                  [active]=\"orderBy == 'UF'\"\r\n                  [sort]=\"orderType\"\r\n                  (click)=\"setOrderBy('UF')\">\r\n                </thead-sorter>\r\n              </th>\r\n              <th scope=\"col\" *ngIf=\"columns['Contrato de Frete']\">\r\n                <thead-sorter\r\n                  value=\"Contrato de Frete\"\r\n                  [active]=\"orderBy == 'Contrato de Frete'\"\r\n                  [sort]=\"orderType\"\r\n                  (click)=\"setOrderBy('Contrato de Frete')\">\r\n                </thead-sorter>\r\n              </th>\r\n              <th scope=\"col\" *ngIf=\"columns['Tipo de Veículo']\">\r\n                <thead-sorter\r\n                  value=\"Tipo de Veículo\"\r\n                  [active]=\"orderBy == 'Tipo de Veículo'\"\r\n                  [sort]=\"orderType\"\r\n                  (click)=\"setOrderBy('Tipo de Veículo')\">\r\n                </thead-sorter>\r\n              </th>\r\n              <th scope=\"col\" width=\"12%\">\r\n                <div class=\"d-flex\">\r\n                  <thead-sorter\r\n                    value=\"Reais x Ton\"\r\n                    [active]=\"orderBy == 'Boliviano x Ton'\"\r\n                    [sort]=\"orderType\"\r\n                    (click)=\"setOrderBy('Reais x Ton')\">\r\n                  </thead-sorter>\r\n                  <div>\r\n                    <i\r\n                    class=\"far fa-question-circle\"\r\n                    [tooltip]=\"rotulos['Boliviano x Ton']['descricao']\"\r\n                    placement=\"right\"\r\n                    container=\"body\"\r\n                    >\r\n                    </i>\r\n                  </div>\r\n                </div>\r\n              </th>\r\n              <th scope=\"col\" width=\"12%\">\r\n                <div class=\"d-flex\">\r\n                  <thead-sorter\r\n                    value=\"Reais x KM\"\r\n                    [active]=\"orderBy == 'Reais x KM'\"\r\n                    [sort]=\"orderType\"\r\n                    (click)=\"setOrderBy('Reais x KM')\">\r\n                  </thead-sorter>\r\n                  <div>\r\n                    <i\r\n                    class=\"far fa-question-circle\"\r\n                    [tooltip]=\"rotulos['Reais x KM']['descricao']\"\r\n                    placement=\"right\"\r\n                    container=\"body\"\r\n                    >\r\n                    </i>\r\n                  </div>\r\n                </div>\r\n              </th>\r\n              <th scope=\"col\" width=\"12%\">\r\n                <div class=\"d-flex\">\r\n                  <thead-sorter\r\n                    value=\"Frete x Receita\"\r\n                    [active]=\"orderBy == 'Frete x Receita'\"\r\n                    [sort]=\"orderType\"\r\n                    (click)=\"setOrderBy('Frete x Receita')\">\r\n                  </thead-sorter>\r\n                  <div>\r\n                    <i\r\n                    class=\"far fa-question-circle\"\r\n                    [tooltip]=\"rotulos['Frete x Receita']['descricao']\"\r\n                    placement=\"right\"\r\n                    container=\"body\"\r\n                    >\r\n                    </i>\r\n                  </div>\r\n                </div>\r\n              </th>\r\n              <th scope=\"col\" width=\"12%\">\r\n                <div class=\"d-flex\">\r\n                  <thead-sorter\r\n                    value=\"Taxa de Ocupação\"\r\n                    [active]=\"orderBy == 'Taxa de Ocupação'\"\r\n                    [sort]=\"orderType\"\r\n                    (click)=\"setOrderBy('Taxa de Ocupação')\">\r\n                  </thead-sorter>\r\n                  <div>\r\n                    <i\r\n                    class=\"far fa-question-circle\"\r\n                    [tooltip]=\"rotulos['Taxa de Ocupação']['descricao']\"\r\n                    placement=\"right\"\r\n                    container=\"body\"\r\n                    >\r\n                    </i>\r\n                  </div>\r\n                </div>\r\n              </th>\r\n              <th scope=\"col\" width=\"12%\">\r\n                <div class=\"d-flex\">\r\n                  <thead-sorter\r\n                    value=\"Ticket Médio Por Entrega\"\r\n                    [active]=\"orderBy == 'Ticket Médio Por Entrega'\"\r\n                    [sort]=\"orderType\"\r\n                    (click)=\"setOrderBy('Ticket Médio Por Entrega')\">\r\n                  </thead-sorter>\r\n                  <div>\r\n                    <i\r\n                    class=\"far fa-question-circle\"\r\n                    [tooltip]=\"rotulos['Ticket Médio Por Entrega']['descricao']\"\r\n                    placement=\"right\"\r\n                    container=\"body\"\r\n                    >\r\n                    </i>\r\n                  </div>\r\n                </div>\r\n              </th>\r\n            </tr>\r\n          </ng-template>\r\n          <ng-template #tbody let-tbody>\r\n            <tr *ngFor=\"let item of data\">\r\n              <td *ngIf=\"columns['Ano']\">{{item['Ano'] | hifen}}</td>\r\n              <td *ngIf=\"columns['Mês']\">{{item['Mês'] | hifen}}</td>\r\n              <td *ngIf=\"columns['UF']\">{{item['UF'] | hifen}}</td>\r\n              <td *ngIf=\"columns['Contrato de Frete']\">{{item['Contrato de Frete'] | hifen}}</td>\r\n              <td *ngIf=\"columns['Tipo de Veículo']\">{{item['Tipo de Veículo'] | hifen}}</td>\r\n              <td>{{item['Reais x Ton'] | currency: 'BRL'}}</td>\r\n              <td>{{item['Reais x KM'] | currency: 'BRL'}}</td>\r\n              <td>{{item['Frete x Receita']| number: '1.2-2': 'pt-BR'}}%</td>\r\n              <td>{{item['Taxa de Ocupação'] | number: '1.2-2': 'pt-BR'}}%</td>\r\n              <td>{{item['Ticket Médio Por Entrega']  | number: '1.3-3': 'pt-BR'}}</td>\r\n            </tr>\r\n            <tr>\r\n              <td class=\"bg-dark text-white\" *ngIf=\"columns['Ano']\"><strong>-</strong></td>\r\n              <td class=\"bg-dark text-white\" *ngIf=\"columns['Mês']\"><strong>-</strong></td>\r\n              <td class=\"bg-dark text-white\" *ngIf=\"columns['UF']\"><strong>-</strong></td>\r\n              <td class=\"bg-dark text-white\" *ngIf=\"columns['Contrato de Frete']\"><strong>-</strong></td>\r\n              <td class=\"bg-dark text-white\" *ngIf=\"columns['Tipo de Veículo']\"><strong>-</strong></td>\r\n              <td class=\"bg-dark text-white\"><strong>{{total['Reais x Ton'] | currency: 'BRL'}}</strong></td>\r\n              <td class=\"bg-dark text-white\"><strong>{{total['Reais x KM'] | currency: 'BRL'}}</strong></td>\r\n              <td class=\"bg-dark text-white\"><strong>{{total['Frete x Receita']  | number: '1.2-2'}}%</strong></td>\r\n              <td class=\"bg-dark text-white\"><strong>{{total['Taxa de Ocupação']  | number: '1.2-2'}}%</strong></td>\r\n              <td class=\"bg-dark text-white\"><strong>{{total['Ticket Médio Por Entrega'] | number: '1.3-3'}}</strong></td>\r\n            </tr>\r\n          </ng-template>\r\n        </custom-table>\r\n      </div>\r\n      <div class=\"mb-4\"> \r\n        <custom-table class=\"text-center\">\r\n          <ng-template #thead let-thead>\r\n            <tr>\r\n              <th scope=\"col\" *ngIf=\"columns['Ano']\">\r\n                <thead-sorter\r\n                  value=\"Ano\"\r\n                  [active]=\"orderBy == 'Ano'\"\r\n                  [sort]=\"orderType\"\r\n                  (click)=\"setOrderBy('Ano')\">\r\n                </thead-sorter>\r\n              </th>\r\n              <th scope=\"col\" *ngIf=\"columns['Mês']\">\r\n                <thead-sorter\r\n                  value=\"Mês\"\r\n                  [active]=\"orderBy == 'Mês'\"\r\n                  [sort]=\"orderType\"\r\n                  (click)=\"setOrderBy('Mês')\">\r\n                </thead-sorter>\r\n              </th>\r\n              <th scope=\"col\" *ngIf=\"columns['UF']\">\r\n                <thead-sorter\r\n                  value=\"UF\"\r\n                  [active]=\"orderBy == 'UF'\"\r\n                  [sort]=\"orderType\"\r\n                  (click)=\"setOrderBy('UF')\">\r\n                </thead-sorter>\r\n              </th>\r\n              <th scope=\"col\" *ngIf=\"columns['Contrato de Frete']\">\r\n                <thead-sorter\r\n                  value=\"Contrato de Frete\"\r\n                  [active]=\"orderBy == 'Contrato de Frete'\"\r\n                  [sort]=\"orderType\"\r\n                  (click)=\"setOrderBy('Contrato de Frete')\">\r\n                </thead-sorter>\r\n              </th>\r\n              <th scope=\"col\" *ngIf=\"columns['Tipo de Veículo']\">\r\n                <thead-sorter\r\n                  value=\"Tipo de Veículo\"\r\n                  [active]=\"orderBy == 'Tipo de Veículo'\"\r\n                  [sort]=\"orderType\"\r\n                  (click)=\"setOrderBy('Tipo de Veículo')\">\r\n                </thead-sorter>\r\n              </th>\r\n              <th scope=\"col\" width=\"12%\">\r\n                <div class=\"d-flex\">\r\n                  <thead-sorter\r\n                    value=\"Total de Clientes\"\r\n                    [active]=\"orderBy == 'Total de Clientes'\"\r\n                    [sort]=\"orderType\"\r\n                    (click)=\"setOrderBy('Total de Clientes')\">\r\n                  </thead-sorter>\r\n                  <div>\r\n                    <i\r\n                    class=\"far fa-question-circle\"\r\n                    [tooltip]=\"rotulos['Total de Clientes']['descricao']\"\r\n                    placement=\"right\"\r\n                    container=\"body\"\r\n                    >\r\n                    </i>\r\n                  </div>\r\n                </div>\r\n              </th>\r\n              <th scope=\"col\" width=\"12%\">\r\n                <div class=\"d-flex\">\r\n                  <thead-sorter\r\n                    value=\"Total de Viagens\"\r\n                    [active]=\"orderBy == 'Total de Viagens'\"\r\n                    [sort]=\"orderType\"\r\n                    (click)=\"setOrderBy('Total de Viagens')\">\r\n                  </thead-sorter>\r\n                  <div>\r\n                    <i\r\n                    class=\"far fa-question-circle\"\r\n                    [tooltip]=\"rotulos['Total de Viagens']['descricao']\"\r\n                    placement=\"right\"\r\n                    container=\"body\"\r\n                    >\r\n                    </i>\r\n                  </div>\r\n                </div>\r\n              </th>\r\n              <th scope=\"col\" width=\"12%\">\r\n                <div class=\"d-flex\"> \r\n                  <thead-sorter\r\n                    value=\"Total de Entregas\"\r\n                    [active]=\"orderBy == 'Total de Entregas'\"\r\n                    [sort]=\"orderType\"\r\n                    (click)=\"setOrderBy('Total de Entregas')\">\r\n                  </thead-sorter>\r\n                  <div>\r\n                    <i\r\n                      class=\"far fa-question-circle\"\r\n                      [tooltip]=\"rotulos['Total de Entregas']['descricao']\"\r\n                      placement=\"right\"\r\n                      container=\"body\"\r\n                    >\r\n                    </i>\r\n                  </div>\r\n                </div>\r\n              </th>\r\n              <th scope=\"col\" width=\"12%\">\r\n                <div class=\"d-flex\">\r\n                  <thead-sorter\r\n                    value=\"Entregas x Viagem\"\r\n                    [active]=\"orderBy == 'Entregas x Viagem'\"\r\n                    [sort]=\"orderType\"\r\n                    (click)=\"setOrderBy('Entregas x Viagem')\">\r\n                  </thead-sorter>\r\n                  <div>\r\n                    <i\r\n                    class=\"far fa-question-circle\"\r\n                    [tooltip]=\"rotulos['Entregas x Viagem']['descricao']\"\r\n                    placement=\"right\"\r\n                    container=\"body\"\r\n                    >\r\n                    </i>\r\n                  </div>\r\n                </div>\r\n              </th>\r\n              <th scope=\"col\" width=\"12%\">\r\n                <div class=\"d-flex\">\r\n                  <thead-sorter\r\n                    value=\"Peso Médio x Viagem\"\r\n                    [active]=\"orderBy == 'Peso Médio x Viagem'\"\r\n                    [sort]=\"orderType\"\r\n                    (click)=\"setOrderBy('Peso Médio x Viagem')\">\r\n                  </thead-sorter>\r\n                  <div>\r\n                    <i\r\n                    class=\"far fa-question-circle\"\r\n                    [tooltip]=\"rotulos['Peso Médio x Viagem']['descricao']\"\r\n                    placement=\"right\"\r\n                    container=\"body\"\r\n                    >\r\n                    </i>\r\n                  </div>\r\n                </div>\r\n              </th>\r\n            </tr>\r\n          </ng-template>\r\n          <ng-template #tbody let-tbody>\r\n            <tr *ngFor=\"let item of data\">\r\n              <td *ngIf=\"columns['Ano']\">{{item['Ano'] | hifen}}</td>\r\n              <td *ngIf=\"columns['Mês']\">{{item['Mês'] | hifen}}</td>\r\n              <td *ngIf=\"columns['UF']\">{{item['UF'] | hifen}}</td>\r\n              <td *ngIf=\"columns['Contrato de Frete']\">{{item['Contrato de Frete'] | hifen}}</td>\r\n              <td *ngIf=\"columns['Tipo de Veículo']\">{{item['Tipo de Veículo'] | hifen}}</td>\r\n              <td>{{item['Total de Clientes'] | number: '1.0-0'}}</td>\r\n              <td>{{item['Total de Viagens'] | number: '1.0-0'}}</td>\r\n              <td>{{item['Total de Entregas'] | number: '1.0-0'}}</td>\r\n              <td>{{item['Entregas x Viagem'] | number: '1.3-3': 'pt-BR'}}</td>\r\n              <td>{{item['Peso Médio x Viagem'] | number: '1.3-3': 'pt-BR'}}</td>\r\n            </tr>\r\n            <tr>\r\n              <td class=\"bg-dark text-white\" *ngIf=\"columns['Ano']\"><strong>-</strong></td>\r\n              <td class=\"bg-dark text-white\" *ngIf=\"columns['Mês']\"><strong>-</strong></td>\r\n              <td class=\"bg-dark text-white\" *ngIf=\"columns['UF']\"><strong>-</strong></td>\r\n              <td class=\"bg-dark text-white\" *ngIf=\"columns['Contrato de Frete']\"><strong>-</strong></td>\r\n              <td class=\"bg-dark text-white\" *ngIf=\"columns['Tipo de Veículo']\"><strong>-</strong></td>\r\n              <td class=\"bg-dark text-white\"><strong>{{total['Total de Clientes'] | number: '1.0-0': 'pt-BR'}}</strong></td>\r\n              <td class=\"bg-dark text-white\"><strong>{{total['Total de Viagens']  | number: '1.0-0'}}</strong></td>\r\n              <td class=\"bg-dark text-white\"><strong>{{total['Total de Entregas'] | number: '1.0-0': 'pt-BR'}}</strong></td>\r\n              <td class=\"bg-dark text-white\"><strong>{{total['Entregas x Viagem'] | number: '1.3-3': 'pt-BR'}}</strong></td>\r\n              <td class=\"bg-dark text-white\"><strong>{{total['Peso Médio x Viagem'] | number: '1.3-3': 'pt-BR'}}</strong></td>\r\n            </tr>\r\n          </ng-template>\r\n        </custom-table>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"empty\" class=\"text-center h-50 my-auto d-flex justify-content-center align-items-center\">\r\n      <empty-result message=\"No se encontró información \"></empty-result>\r\n    </div>\r\n  </div>\r\n</app-body>");

/***/ }),

/***/ "H/iZ":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/logistica/dashboards/analise-frete/v2/v2.component.ts ***!
  \*******************************************************************************/
/*! exports provided: LogisticaDashboardsAnaliseFreteV2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaDashboardsAnaliseFreteV2Component", function() { return LogisticaDashboardsAnaliseFreteV2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_v2_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./v2.component.html */ "/7A+");
/* harmony import */ var _v2_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./v2.component.scss */ "mWEZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var _services_analise_frete_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/analise-frete.service */ "jhlZ");
/* harmony import */ var src_app_shared_services_core_xlsx_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/services/core/xlsx.service */ "8WR6");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");



// angular




// ngx

// rxjs


// services







let LogisticaDashboardsAnaliseFreteV2Component = class LogisticaDashboardsAnaliseFreteV2Component {
    constructor(activatedRoute, atividadesService, formBuilder, localeService, router, http, pnotify, dateService, service, routeService, xlsxService) {
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
        this.segmentacao = [
            {
                'nome': 'Ano',
                'v2': {
                    'select': ' ,[Ano] ',
                    'where': ' S1.[Ano] = T1.[Ano] ',
                    'groupBy': ' [Ano] ',
                    'orderBy': ' [Ano] '
                }
            },
            {
                'nome': 'Mês',
                'v2': {
                    'select': ' ,[Mês] ',
                    'where': ' S1.[Mês] = T1.[Mês] ',
                    'groupBy': ' [Mês] ',
                    'orderBy': ' [Mês] '
                }
            },
            {
                'nome': 'UF',
                'v2': {
                    'select': ' ,[UF] ',
                    'where': ' S1.[UF] = T1.[UF] ',
                    'groupBy': ' [UF] ',
                    'orderBy': ' [UF] '
                }
            },
            {
                'nome': 'Tipo de Veículo',
                'v2': {
                    'select': ' ,[Tipo de Veículo] ',
                    'where': ' S1.[Tipo de Veículo] = T1.[Tipo de Veículo] ',
                    'groupBy': ' [Tipo de Veículo] ',
                    'orderBy': ' [Tipo de Veículo] '
                }
            },
            {
                'nome': 'Contrato de Frete',
                'v2': {
                    'select': ' ,[Contrato de Frete] ',
                    'where': ' S1.[Contrato de Frete] = T1.[Contrato de Frete] ',
                    'groupBy': ' [Contrato de Frete] ',
                    'orderBy': ' [Contrato de Frete] '
                }
            }
        ];
        this.rotulos = {};
        this.appTitle = 'Análise de Frete II';
        this.tableConfig = {
            subtitleBorder: false,
            isFixed: true,
            border: false,
            small: false,
            hover: false,
            theme: {
                color: 'white',
            },
        };
        this.orderBy = 'Frete';
        this.orderType = 'DESC';
        this.localeService.use('pt-br');
        this.bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' }, { adaptivePosition: true }, { showWeekNumbers: false });
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
            timestamp: [(new Date()).getTime()]
        });
    }
    ngOnInit() {
        this.atividadesService.registrarAcesso().subscribe();
        this.getEmpresas();
        this.onActiveRoute();
        this.getRotulos();
        this.setBreadCrumb();
    }
    onActiveRoute() {
        this.activatedRoute.queryParams
            .subscribe(response => {
            var _a;
            let _params = JSON.parse(JSON.stringify(this.routeService.getBase64UrlParams(response)));
            if (_params == undefined) {
                return;
            }
            if (Object.keys(_params).length == 0) {
                return;
            }
            _params.projeto = (_a = _params === null || _params === void 0 ? void 0 : _params.projeto) === null || _a === void 0 ? void 0 : _a.split(',');
            _params.parametrizacao = (_params === null || _params === void 0 ? void 0 : _params.parametrizacao) ? JSON.parse(_params === null || _params === void 0 ? void 0 : _params.parametrizacao) : [];
            _params.parametrizacao.forEach(element => {
                this.columns[element] = true;
            });
            this.form.patchValue(_params);
            this.getIndicadores(this.getParams());
        });
    }
    setBreadCrumb() {
        const params = this.activatedRoute.snapshot.params;
        const submoduloId = params === null || params === void 0 ? void 0 : params.idSubModulo;
        this.breadCrumbTree = [
            {
                descricao: 'Logistica'
            },
            {
                descricao: 'Dashboards',
                routerLink: `/logistica/dashboards/${submoduloId}`
            },
            {
                descricao: this.appTitle
            }
        ];
    }
    getEmpresas() {
        this.http.get(`${this.API}/logistica/associacao-usuario-empresa/${this.matricula}`, { params: { "parametro": "4" }, observe: "response" })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(() => {
            this.permission = this.empresas.length == 0 ? false : true;
            this.dataLoaded = true;
        }))
            .subscribe(data => {
            this.empresas = [];
            if (data["status"] == 200) {
                this.empresas = data["body"];
            }
        }, error => {
            this.permission = this.empresas.length == 0 ? false : true;
            this.dataLoaded = true;
        });
    }
    getParams() {
        let _params = {};
        let _obj = this.form.value;
        for (let prop in _obj) {
            if (!_obj[prop])
                continue;
            else if (_obj[prop] instanceof Date)
                _params[prop] = this.dateService.convertToUrlDate(_obj[prop]);
            else if (prop == 'parametrizacao')
                _params[prop] = JSON.stringify(_obj[prop]);
            else if (Array.isArray(_obj[prop]))
                _params[prop] = _obj[prop].toString();
            else
                _params[prop] = _obj[prop];
        }
        return _params;
    }
    onFilter() {
        this.form.get('timestamp').setValue((new Date()).getTime());
        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: this.routeService.setBase64UrlParams(this.getParams()),
        });
    }
    /* CSS - Campos requeridos */
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
    onFieldInvalid(field) {
        field = this.form.get(field);
        return field.status == 'INVALID' && field.touched;
    }
    getIndicadores(params) {
        if (this.$indicadoresSubscription) {
            this.$indicadoresSubscription.unsubscribe();
        }
        this.loading = true;
        this.empty = false;
        this.show = false;
        let parametro = this.form.get("origem").value == "TMS" ? 1 : 2;
        const requests = [];
        requests.push(this.service.getIndicadores(Object.assign(Object.assign({}, params), { parametro: parametro })));
        delete params['select'];
        delete params['where'];
        delete params['orderBy'];
        delete params['groupBy'];
        requests.push(this.service.getIndicadores(Object.assign(Object.assign({}, params), { parametro: parametro })));
        this.$indicadoresSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["forkJoin"])(requests)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(() => {
            this.loading = false;
        }))
            .subscribe(response => {
            if (response[0]['status'] != 200) {
                this.empty = true;
                return;
            }
            this.data = response[0]['body']["data"];
            this.show = true;
            if (response[1]['status'] == 200) {
                this.total = response[1]['body']["data"][0];
            }
        }, error => {
            this.pnotify.error();
        });
    }
    getRotulos() {
        this.service
            .getRotulos()
            .subscribe(response => {
            if (response.status != 200) {
                return;
            }
            this.rotulos = response.body['data'];
        });
    }
    setOrderBy(column) {
        if (this.orderBy === column) {
            if (this.orderType == 'DESC') {
                this.orderType = 'ASC';
            }
            else if (this.orderType == 'ASC') {
                this.orderType = 'DESC';
            }
        }
        else {
            this.orderBy = column;
            this.orderType = 'ASC';
        }
        this.orderData(this.orderBy, this.orderType);
    }
    orderData(key, type) {
        this.data.sort((a, b) => {
            if (a[key] === b[key]) {
                return 0;
            }
            if (type == 'ASC') {
                return a[key] > b[key] ? -1 : 1;
            }
            return a[key] > b[key] ? 1 : -1;
        });
    }
    prepareData(e) {
        let select = '';
        let where = '';
        let groupBy = '';
        let orderBy = '';
        Object.keys(this.columns).map(key => this.columns[key] = false);
        e.forEach((value, index) => {
            var _a, _b, _c, _d;
            if (where) {
                where += ' AND ';
            }
            select += (_a = value === null || value === void 0 ? void 0 : value.v2) === null || _a === void 0 ? void 0 : _a.select;
            where += (_b = value === null || value === void 0 ? void 0 : value.v2) === null || _b === void 0 ? void 0 : _b.where;
            groupBy += (_c = value === null || value === void 0 ? void 0 : value.v2) === null || _c === void 0 ? void 0 : _c.groupBy;
            orderBy += (_d = value === null || value === void 0 ? void 0 : value.v2) === null || _d === void 0 ? void 0 : _d.orderBy;
            if (index != (e.length - 1)) {
                select += '\n';
                where += '\n';
                groupBy += ',\n';
                orderBy += ',\n';
            }
            this.columns[value.nome] = true;
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
    onExport() {
        this.xlsxService.export({ data: this.data });
    }
};
LogisticaDashboardsAnaliseFreteV2Component.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__["AtividadesService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["BsLocaleService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_16__["PNotifyService"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__["DateService"] },
    { type: _services_analise_frete_service__WEBPACK_IMPORTED_MODULE_14__["LogisticaDashboardsAnaliseFreteService"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_13__["RouterService"] },
    { type: src_app_shared_services_core_xlsx_service__WEBPACK_IMPORTED_MODULE_15__["XlsxService"] }
];
LogisticaDashboardsAnaliseFreteV2Component.propDecorators = {
    scroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['scroll', { read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },] }]
};
LogisticaDashboardsAnaliseFreteV2Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'logistica-dashboards-frete-analitico',
        template: _raw_loader_v2_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_v2_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__["AtividadesService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["BsLocaleService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_16__["PNotifyService"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__["DateService"],
        _services_analise_frete_service__WEBPACK_IMPORTED_MODULE_14__["LogisticaDashboardsAnaliseFreteService"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_13__["RouterService"],
        src_app_shared_services_core_xlsx_service__WEBPACK_IMPORTED_MODULE_15__["XlsxService"]])
], LogisticaDashboardsAnaliseFreteV2Component);



/***/ }),

/***/ "i/to":
/*!****************************************************************************!*\
  !*** ./src/app/modules/logistica/dashboards/analise-frete/v2/v2.module.ts ***!
  \****************************************************************************/
/*! exports provided: V2Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V2Module", function() { return V2Module; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _v2_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./v2-routing.module */ "tVO4");
/* harmony import */ var _v2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./v2.component */ "H/iZ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var angular2_counto__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular2-counto */ "RNH4");
/* harmony import */ var angular2_counto__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angular2_counto__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/not-found/not-found.module */ "sCnT");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/pipes/pipes.module */ "9Xeq");













let V2Module = class V2Module {
};
V2Module = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _v2_component__WEBPACK_IMPORTED_MODULE_4__["LogisticaDashboardsAnaliseFreteV2Component"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _v2_routing_module__WEBPACK_IMPORTED_MODULE_3__["V2RoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["PaginationModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ModalModule"].forRoot(),
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
            angular2_counto__WEBPACK_IMPORTED_MODULE_8__["CountoModule"],
            src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_9__["NotFoundModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_11__["TemplatesModule"],
            src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_12__["PipesModule"],
        ]
    })
], V2Module);



/***/ }),

/***/ "mWEZ":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/logistica/dashboards/analise-frete/v2/v2.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2Rhc2hib2FyZHMvYW5hbGlzZS1mcmV0ZS92Mi92Mi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "tVO4":
/*!************************************************************************************!*\
  !*** ./src/app/modules/logistica/dashboards/analise-frete/v2/v2-routing.module.ts ***!
  \************************************************************************************/
/*! exports provided: V2RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V2RoutingModule", function() { return V2RoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _v2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./v2.component */ "H/iZ");




const routes = [
    {
        path: '',
        component: _v2_component__WEBPACK_IMPORTED_MODULE_3__["LogisticaDashboardsAnaliseFreteV2Component"]
    }
];
let V2RoutingModule = class V2RoutingModule {
};
V2RoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], V2RoutingModule);



/***/ })

}]);
//# sourceMappingURL=v2-v2-module-es2015.js.map