(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["conferencia-cte-conferencia-cte-module"],{

/***/ "/l1F":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/logistica/dashboards/conferencia-cte/conferencia-cte-routing.modulte.ts ***!
  \*************************************************************************************************/
/*! exports provided: LogisticaDashboadsConferenciaCteRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaDashboadsConferenciaCteRoutingModule", function() { return LogisticaDashboadsConferenciaCteRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _conferencia_cte_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./conferencia-cte.component */ "CJX+");




const routes = [
    {
        path: '',
        component: _conferencia_cte_component__WEBPACK_IMPORTED_MODULE_3__["LogisticaDashboardsConferenciaCteComponent"]
    }
];
let LogisticaDashboadsConferenciaCteRoutingModule = class LogisticaDashboadsConferenciaCteRoutingModule {
};
LogisticaDashboadsConferenciaCteRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], LogisticaDashboadsConferenciaCteRoutingModule);



/***/ }),

/***/ "5VVy":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/logistica/dashboards/conferencia-cte/conferencia-cte.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("li {\n  list-style: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvZGFzaGJvYXJkcy9jb25mZXJlbmNpYS1jdGUvY29uZmVyZW5jaWEtY3RlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2Rhc2hib2FyZHMvY29uZmVyZW5jaWEtY3RlL2NvbmZlcmVuY2lhLWN0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImxpe1xuICBsaXN0LXN0eWxlOiBub25lO1xufSJdfQ== */");

/***/ }),

/***/ "B5+i":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/dashboards/conferencia-cte/conferencia-cte.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-navbar *ngIf=\"loadingNavBar\"></loader-spinner-navbar>\n<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\n<app-header appTitle=\"Conferência de CTEs\">\n  <!-- <button\n    type=\"button\"\n    (click)=\"getExport()\">\n    Exportar\n  </button> -->\n  <button\n    type=\"button\"\n    (click)=\"onReset()\">\n    Limpar\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"onFilter()\">\n    Filtrar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loading\">\n  <div class=\"row\" #scrollToFilter>\n    <div class=\"col\">\n      <advanced-filter>\n        <form [formGroup]=\"form\" autocomplete=\"off\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-3\">\n              <label for=\"empresa\">Data Inicial</label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\n                </div>\n                <input\n                  class=\"form-control\"\n                  id=\"dataInicial\"\n                  type=\"text\"\n                  bsDatepicker\n                  [bsConfig]=\"bsConfig\"\n                  formControlName=\"DT_INIC\">\n              </div>\n            </div>\n            <div class=\"form-group col-3\">\n              <label for=\"empresa\">Data Final</label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\n                </div>\n                <input\n                class=\"form-control\"\n                id=\"dataFinal\"\n                type=\"text\"\n                bsDatepicker\n                [bsConfig]=\"bsConfig\"\n                formControlName=\"DT_FINA\">\n              </div>\n            </div>\n            <div class=\"form-group col\">\n              <label for=\"usuario\">Usuário de emissão do cte</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"DS_USUA\"\n                placeholder=\"Nome ou matrícula\"\n                (keyup.enter)=\"onFilter()\"\n              >\n            </div>\n          </div>\n          <!-- <div class=\"form-row\">\n            <div class=\"form-group col\">\n              <label for=\"cnpj\">CNPJ's não considerados</label>\n              <input type=\"text\" formControlName=\"DS_REMV_CNPJ\" class=\"form-control\" (keyup.enter)=\"onFilter()\">\n            </div>\n          </div> -->\n        </form>\n      </advanced-filter>\n    </div>\n  </div>\n  <div class=\"row justify-content-between\">\n    <div class=\"col-lg-7\">\n      <div [ngClass]=\"modoViewIncorretas != 1 ? 'card border-primary w-100 mb-5' : 'card border-danger w-100 mb-5' \">\n        <div class=\"card-body\" >\n          <div class=\"row\">\n            <h5 [ngClass]=\"modoViewIncorretas != 1 ? 'card-title text-primary col' : 'card-title text-danger col' \">EMISSÕES INCORRETAS</h5>\n            <div class=\"col\">\n              <div class=\"d-flex justify-content-end\">\n                <button\n                  type=\"button\"\n                  class=\"btn btn-sm btn-outline-primary mr-3\"\n                  (click)=\"getRelatorio(relatorioModal, 'EMISSOES_INCORRETAS')\"\n                  >\n                  <i class=\"fas fa-file-alt\"></i>\n                  <span>Relatório</span>\n                </button>\n              </div>\n            </div>\n          </div>\n          <div [hidden]=\"loading || !hasData('emissoesIncorretas')\">\n            <custom-table\n              [config]=\"tableConfig\"\n            >\n              <ng-template #thead let-thead>\n                <tr>\n                  <th width=\"20%\">Tipo</th>\n                  <th class=\"text-center\">Emitente</th>\n                  <th class=\"text-center\">Destinatário</th>\n                  <th class=\"text-center\">Tomador</th>\n                  <th class=\"text-center\">Valor</th>\n                </tr>\n              </ng-template>\n              <ng-template #tbody let-tbody>\n                <tr>\n                <tr *ngFor=\"let item of dados?.emissoesIncorretas?.dados\">\n                  <td class=\"border-right\" width=\"20%\"><strong>{{ item?.descricao }}</strong></td>\n                  <td class=\"text-center\">{{item?.emitente || 0}}</td>\n                  <td class=\"text-center\">{{item?.destinatario || 0}}</td>\n                  <td class=\"text-center\">{{item?.pagador || 0}}</td>\n                  <td class=\"text-center\">{{item?.valor || 0}}</td>\n                </tr>\n                <tr >\n                  <td class=\"bg-dark text-white text-center\"><strong>TOTAL:</strong></td>\n                  <td class=\"bg-dark text-white text-center\"><strong>{{dados?.emissoesIncorretas?.total?.emitente || 0}}</strong></td>\n                  <td class=\"bg-dark text-white text-center\"><strong>{{dados?.emissoesIncorretas?.total?.destinatario || 0}}</strong></td>\n                  <td class=\"bg-dark text-white text-center\"><strong>{{dados?.emissoesIncorretas?.total?.pagador || 0}}</strong></td>\n                  <td class=\"bg-dark text-white text-center\"><strong>{{dados?.emissoesIncorretas?.total?.valor || 0}}</strong></td>\n                </tr>\n              </ng-template>\n            </custom-table>\n          </div>\n          <div *ngIf=\"loading || !hasData('emissoesIncorretas')\" class=\"text-center d-flex justify-content-center align-items-center\">\n            <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n          </div>\n        </div>\n      </div>\n      <div class=\"card border-primary w-100 mb-5\">\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <h5 class=\"card-title text-primary col\">NÃO EMITIDOS</h5>\n            <div class=\"col\">\n              <div class=\"d-flex justify-content-end\">\n                <button\n                  type=\"button\"\n                  class=\"btn btn-sm btn-outline-primary mr-3\"\n                  (click)=\"getRelatorio(relatorioModal, 'NAO_EMITIDO')\"\n                  >\n                  <i class=\"fas fa-file-alt\"></i>\n                  <span>Relatório</span>\n                </button>\n              </div>\n            </div>\n          </div>\n          <div [hidden]=\"loading || !hasData('naoEmitidos')\">\n            <custom-table [config]=\"tableConfig\">\n              <ng-template #thead let-thead>\n                <tr>\n                  <th width=\"25%\">Tipo</th>\n                  <th class=\"text-center\">Quantidade</th>\n                  <th class=\"text-center\">Valor</th>\n                </tr>\n              </ng-template>\n              <ng-template #tbody let-tbody>\n                <tr *ngFor=\"let item of dados?.naoEmitidos?.dados\">\n                  <td class=\"border-right\"><strong>{{ item?.descricao }}</strong></td>\n                  <td class=\"text-center\">{{item?.quantidade}}</td>\n                  <td class=\"text-center\">{{item?.valor || 0 | currency: 'BRL'}}</td>\n                </tr>\n                <tr>\n                  <td class=\"bg-dark text-white\" style=\"width:160px;\"><strong>TOTAL:</strong></td>\n                  <td class=\"bg-dark text-white text-center\"><strong>{{dados?.naoEmitidos?.total?.quantidade}}</strong></td>\n                  <td class=\"bg-dark text-white text-center\"><strong>{{dados?.naoEmitidos?.total?.valor | currency : 'BRL'}}</strong></td>\n                </tr>\n              </ng-template>\n            </custom-table>\n          </div>\n          <div *ngIf=\"loading || !hasData('naoEmitidos')\" class=\"text-center d-flex justify-content-center align-items-center\">\n            <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-5 border-left\">\n      <div class=\"card w-100 mb-5\">\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <h5 class=\"card-title col\">DEMAIS EMISSÕES</h5>\n            <div class=\"col\">\n              <div class=\"d-flex justify-content-end\">\n                <button\n                  type=\"button\"\n                  class=\"btn btn-sm btn-outline-primary mr-3\"\n                  (click)=\"getRelatorio(relatorioModal, 'DEMAIS_EMISSOES')\"\n                  >\n                  <i class=\"fas fa-file-alt\"></i>\n                  <span>Relatório</span>\n                </button>\n              </div>\n            </div>\n          </div>\n          <div [hidden]=\"loading || !hasData('demaisEmissoes')\">\n            <custom-table [config]=\"tableConfig\" >\n              <ng-template #thead let-thead>\n                <tr>\n                  <th>Filial</th>\n                  <th>Quantidade</th>\n                </tr>\n              </ng-template>\n              <ng-template #tbody let-tbody>  \n                <tr *ngFor=\"let item of dados?.demaisEmissoes?.dados\">\n                  <td\n                    style=\"width:160px\"\n                    class=\"border-right\"\n                  >\n                    {{item?.descricao}}\n                  </td>\n                  <td>{{item?.quantidade}}</td>\n                </tr>\n                <tr >\n                  <td  class=\"bg-dark text-white\" style=\"width:160px;\"><strong>TOTAL:</strong></td>\n                  <td class=\"bg-dark text-white\"><strong>{{dados?.demaisEmissoes?.total?.quantidade}}</strong></td>\n                </tr>\n              </ng-template>\n            </custom-table>\n          </div>\n          <div *ngIf=\"loading || !hasData('demaisEmissoes')\" class=\"text-center d-flex justify-content-center align-items-center\">\n            <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</app-body>\n\n\n<ng-template #relatorioModal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Relatorio</h4>\n    <div>\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n  </div>\n  <div class=\"modal-body\">\n    <div>\n      <div class=\"mb-2 d-flex justify-content-between\">\n        <div>\n          <span>Colunas</span>\n          <button\n            class=\"btn-icon-sm ml-2\"\n            (click)=\"hideListColumns()\"\n            >\n            <i class=\"fas\" [ngClass]=\"{'fa-sort-up': !inColunas, 'fa-sort-down': inColunas}\"></i>\n          </button>\n        </div>\n        <button\n          class=\"btn btn-outline-primary\"\n          (click)=\"export()\"\n          >\n          Exportar\n        </button>\n      </div>\n      <ul *ngIf=\"inColunas\">\n        <li *ngFor=\"let item of colunas | keyvalue : keepOriginalOrder\">\n          <div class=\"custom-control custom-checkbox\">\n            <input\n              type=\"checkbox\"\n              class=\"custom-control-input\"\n              [checked]=\"item.value\"\n              (change)=\"setColumnState(item)\"\n              [id]=\"item.key\">\n            <label class=\"custom-control-label\" [for]=\"item.key\">{{item.key}}</label>\n          </div>\n        </li>\n      </ul>\n    </div>\n    <div style=\"display: block; overflow-x: auto;\">\n      <custom-table [config]=\"tableConfig\">\n        <ng-template #thead let-thead>\n          <tr>\n            <th class=\"text-truncate\" *ngIf=\"colunas['TIPO']\">TIPO</th>\n            <th class=\"text-truncate\" *ngIf=\"colunas['CNPJ_EMITENTE']\">CNPJ_EMITENTE</th>\n            <th class=\"text-truncate\" *ngIf=\"colunas['CNPJ_EMITENTE_CTRC']\">CNPJ_EMITENTE_CTRC</th>\n            <th class=\"text-truncate\" *ngIf=\"colunas['CNPJ_DESTINATARIO']\">CNPJ_DESTINATARIO</th>\n            <th class=\"text-truncate\" *ngIf=\"colunas['CNPJ_DESTINATARIO_CTRC']\">CNPJ_DESTINATARIO_CTRC</th>\n            <th class=\"text-truncate\" *ngIf=\"colunas['CNPJ_PAGADOR']\">CNPJ_PAGADOR</th>\n            <th class=\"text-truncate\" *ngIf=\"colunas['CNPJ_PAGADOR_CTRC']\">CNPJ_PAGADOR_CTRC</th>\n            <th class=\"text-truncate\" *ngIf=\"colunas['FRETE_PESO']\">FRETE_PESO</th>\n            <th class=\"text-truncate\" *ngIf=\"colunas['FRETE_PESO_ARCELOR']\">FRETE_PESO_ARCELOR</th>\n            <th class=\"text-truncate\" *ngIf=\"colunas['DATA_EMISSAO']\">DATA_EMISSAO</th>\n            <th class=\"text-truncate\" *ngIf=\"colunas['NOTA_FISCAL']\">NOTA_FISCAL</th>\n            <th class=\"text-truncate\" *ngIf=\"colunas['PESO_NF']\">PESO_NF</th>\n            <th class=\"text-truncate\" *ngIf=\"colunas['VALOR_NF']\">VALOR_NF</th>\n            <th class=\"text-truncate\" *ngIf=\"colunas['CHAVE_ACESSO_NF']\">CHAVE_ACESSO_NF</th>\n            <th class=\"text-truncate\" *ngIf=\"colunas['CUSTO_FRETE_NF']\">CUSTO_FRETE_NF</th>\n            <th class=\"text-truncate\" *ngIf=\"colunas['HORA_IMPORTACAO']\">HORA_IMPORTACAO</th>\n            <th class=\"text-truncate\" *ngIf=\"colunas['CODIGO_CTRC']\">CODIGO_CTRC</th>\n            <th class=\"text-truncate\" *ngIf=\"colunas['FILIAL_CTRC']\">FILIAL_CTRC</th>\n            <th class=\"text-truncate\" *ngIf=\"colunas['SERIE_CTRC']\">SERIE_CTRC</th>\n            <th class=\"text-truncate\" *ngIf=\"colunas['TIPOCTE']\">TIPOCTE</th>\n            <th class=\"text-truncate\" *ngIf=\"colunas['ALIQ_ICMS']\">ALIQ_ICMS</th>\n            <th class=\"text-truncate\" *ngIf=\"colunas['OBS_CTE']\">OBS_CTE</th>\n            <th class=\"text-truncate\" *ngIf=\"colunas['CIDADE_EMITENTE_CTRC']\">CIDADE_EMITENTE_CTRC</th>\n            <th class=\"text-truncate\" *ngIf=\"colunas['CIDADE_DESTINATARIO_CTRC']\">CIDADE_DESTINATARIO_CTRC</th>\n            <th class=\"text-truncate\" *ngIf=\"colunas['NOTA_FISCAL_CTRC']\">NOTA_FISCAL_CTRC</th>\n            <th class=\"text-truncate\" *ngIf=\"colunas['SERIE_NOTA_FISCAL_CTRC']\">SERIE_NOTA_FISCAL_CTRC</th>\n            <th class=\"text-truncate\" *ngIf=\"colunas['PESO_NOTA_FISCAL_CTRC']\">PESO_NOTA_FISCAL_CTRC</th>\n            <th class=\"text-truncate\" *ngIf=\"colunas['VALOR_NOTA_CTRC']\">VALOR_NOTA_CTRC</th>\n            <th class=\"text-truncate\" *ngIf=\"colunas['TRASNPORTE_CTRC']\">TRASNPORTE_CTRC</th>\n            <th class=\"text-truncate\" *ngIf=\"colunas['CNPJ_TRANSPORTADORA']\">CNPJ_TRANSPORTADORA</th>\n            <th class=\"text-truncate\" *ngIf=\"colunas['PESO_DESCARREGADO']\">PESO_DESCARREGADO</th>\n            <th class=\"text-truncate\" *ngIf=\"colunas['BRM']\">BRM</th>\n            <th class=\"text-truncate\" *ngIf=\"colunas['DATA_BRM']\">DATA_BRM</th>\n            <th class=\"text-truncate\" *ngIf=\"colunas['PAGADOR_FRETE']\">PAGADOR_FRETE</th>\n            <th class=\"text-truncate\" *ngIf=\"colunas['INCLUSAO_CTRC']\">INCLUSAO_CTRC</th>\n            <th class=\"text-truncate\" *ngIf=\"colunas['ENVIO_CTRC_ARCELOR']\">ENVIO_CTRC_ARCELOR</th>\n            <th class=\"text-truncate\" *ngIf=\"colunas['XML_CTRC']\">XML_CTRC</th>\n            <th class=\"text-truncate\" *ngIf=\"colunas['SITUACAO_CTRC']\">SITUACAO_CTRC</th>\n            <th class=\"text-truncate\" *ngIf=\"colunas['STATUS_ARCELOR']\">STATUS_ARCELOR</th>\n            <th class=\"text-truncate\" *ngIf=\"colunas['MENSAGEM']\">MENSAGEM</th>\n            <th class=\"text-truncate\" *ngIf=\"colunas['DATA_PAGAMENTO']\">DATA_PAGAMENTO</th>\n            <th class=\"text-truncate\" *ngIf=\"colunas['VALOR_FATURA']\">VALOR_FATURA</th>\n            <th class=\"text-truncate\" *ngIf=\"colunas['LOCAL_TRANSPORTE']\">LOCAL_TRANSPORTE</th>\n            <th class=\"text-truncate\" *ngIf=\"colunas['NOME_USUARIO_EMISSAO_CTRC']\">NOME_USUARIO_EMISSAO_CTRC</th>\n            <th class=\"text-truncate\" *ngIf=\"colunas['MATRICULA_USUARIO_EMISSAO_CTRC']\">MATRICULA_USUARIO_EMISSAO_CTRC</th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>  \n          <tr *ngFor=\"let item of relatorio | slice : begin : end;\">\n            <td class=\"text-truncate\" *ngIf=\"colunas['TIPO']\">{{item?.TIPO}}</td>\n            <td class=\"text-truncate\" *ngIf=\"colunas['CNPJ_EMITENTE']\">{{item?.CNPJ_EMITENTE}}</td>\n            <td class=\"text-truncate\" *ngIf=\"colunas['CNPJ_EMITENTE_CTRC']\">{{item?.CNPJ_EMITENTE_CTRC}}</td>\n            <td class=\"text-truncate\" *ngIf=\"colunas['CNPJ_DESTINATARIO']\">{{item?.CNPJ_DESTINATARIO}}</td>\n            <td class=\"text-truncate\" *ngIf=\"colunas['CNPJ_DESTINATARIO_CTRC']\">{{item?.CNPJ_DESTINATARIO_CTRC}}</td>\n            <td class=\"text-truncate\" *ngIf=\"colunas['CNPJ_PAGADOR']\">{{item?.CNPJ_PAGADOR}}</td>\n            <td class=\"text-truncate\" *ngIf=\"colunas['CNPJ_PAGADOR_CTRC']\">{{item?.CNPJ_PAGADOR_CTRC}}</td>\n            <td class=\"text-truncate\" *ngIf=\"colunas['FRETE_PESO']\">{{item?.FRETE_PESO | currency:'BRL'}}</td>\n            <td class=\"text-truncate\" *ngIf=\"colunas['FRETE_PESO_ARCELOR']\">{{item?.FRETE_PESO_ARCELOR | currency:'BRL'}}</td>\n            <td class=\"text-truncate\" *ngIf=\"colunas['DATA_EMISSAO']\">{{item?.DATA_EMISSAO | date : 'dd/MM/yyyy HH:mm'}}</td>\n            <td class=\"text-truncate\" *ngIf=\"colunas['NOTA_FISCAL']\">{{item?.NOTA_FISCAL}}</td>\n            <td class=\"text-truncate\" *ngIf=\"colunas['PESO_NF']\">{{item?.PESO_NF | number:'0.3-3'}}</td>\n            <td class=\"text-truncate\" *ngIf=\"colunas['VALOR_NF']\">{{item?.VALOR_NF | currency:'BRL'}}</td>\n            <td class=\"text-truncate\" *ngIf=\"colunas['CHAVE_ACESSO_NF']\">{{item?.CHAVE_ACESSO_NF}}</td>\n            <td class=\"text-truncate\" *ngIf=\"colunas['CUSTO_FRETE_NF']\">{{item?.CUSTO_FRETE_NF | currency:'BRL'}}</td>\n            <td class=\"text-truncate\" *ngIf=\"colunas['HORA_IMPORTACAO']\">{{item?.HORA_IMPORTACAO}}</td>\n            <td class=\"text-truncate\" *ngIf=\"colunas['CODIGO_CTRC']\">{{item?.CODIGO_CTRC}}</td>\n            <td class=\"text-truncate\" *ngIf=\"colunas['FILIAL_CTRC']\">{{item?.FILIAL_CTRC}}</td>\n            <td class=\"text-truncate\" *ngIf=\"colunas['SERIE_CTRC']\">{{item?.SERIE_CTRC}}</td>\n            <td class=\"text-truncate\" *ngIf=\"colunas['TIPOCTE']\">{{item?.TIPOCTE}}</td>\n            <td class=\"text-truncate\" *ngIf=\"colunas['ALIQ_ICMS']\">{{item?.ALIQ_ICMS}}</td>\n            <td class=\"text-truncate\" *ngIf=\"colunas['OBS_CTE']\">{{item?.OBS_CTE}}</td>\n            <td class=\"text-truncate\" *ngIf=\"colunas['CIDADE_EMITENTE_CTRC']\">{{item?.CIDADE_EMITENTE_CTRC}}</td>\n            <td class=\"text-truncate\" *ngIf=\"colunas['CIDADE_DESTINATARIO_CTRC']\">{{item?.CIDADE_DESTINATARIO_CTRC}}</td>\n            <td class=\"text-truncate\" *ngIf=\"colunas['NOTA_FISCAL_CTRC']\">{{item?.NOTA_FISCAL_CTRC}}</td>\n            <td class=\"text-truncate\" *ngIf=\"colunas['SERIE_NOTA_FISCAL_CTRC']\">{{item?.SERIE_NOTA_FISCAL_CTRC}}</td>\n            <td class=\"text-truncate\" *ngIf=\"colunas['PESO_NOTA_FISCAL_CTRC']\">{{item?.PESO_NOTA_FISCAL_CTRC}}</td>\n            <td class=\"text-truncate\" *ngIf=\"colunas['VALOR_NOTA_CTRC']\">{{item?.VALOR_NOTA_CTRC | currency:'BRL'}}</td>\n            <td class=\"text-truncate\" *ngIf=\"colunas['TRASNPORTE_CTRC']\">{{item?.TRASNPORTE_CTRC}}</td>\n            <td class=\"text-truncate\" *ngIf=\"colunas['CNPJ_TRANSPORTADORA']\">{{item?.CNPJ_TRANSPORTADORA}}</td>\n            <td class=\"text-truncate\" *ngIf=\"colunas['PESO_DESCARREGADO']\">{{item?.PESO_DESCARREGADO}}</td>\n            <td class=\"text-truncate\" *ngIf=\"colunas['BRM']\">{{item?.BRM}}</td>\n            <td class=\"text-truncate\" *ngIf=\"colunas['DATA_BRM']\">{{item?.DATA_BRM}}</td>\n            <td class=\"text-truncate\" *ngIf=\"colunas['PAGADOR_FRETE']\">{{item?.PAGADOR_FRETE}}</td>\n            <td class=\"text-truncate\" *ngIf=\"colunas['INCLUSAO_CTRC']\">{{item?.INCLUSAO_CTRC}}</td>\n            <td class=\"text-truncate\" *ngIf=\"colunas['ENVIO_CTRC_ARCELOR']\">{{item?.ENVIO_CTRC_ARCELOR}}</td>\n            <td class=\"text-truncate\" *ngIf=\"colunas['XML_CTRC']\">{{item?.XML_CTRC}}</td>\n            <td class=\"text-truncate\" *ngIf=\"colunas['SITUACAO_CTRC']\">{{item?.SITUACAO_CTRC}}</td>\n            <td class=\"text-truncate\" *ngIf=\"colunas['STATUS_ARCELOR']\">{{item?.STATUS_ARCELOR}}</td>\n            <td class=\"text-truncate\" *ngIf=\"colunas['MENSAGEM']\">{{item?.MENSAGEM}}</td>\n            <td class=\"text-truncate\" *ngIf=\"colunas['DATA_PAGAMENTO']\">{{item?.DATA_PAGAMENTO}}</td>\n            <td class=\"text-truncate\" *ngIf=\"colunas['VALOR_FATURA']\">{{item?.VALOR_FATURA | currency:'BRL'}}</td>\n            <td class=\"text-truncate\" *ngIf=\"colunas['LOCAL_TRANSPORTE']\">{{item?.LOCAL_TRANSPORTE}}</td>\n            <td class=\"text-truncate\" *ngIf=\"colunas['NOME_USUARIO_EMISSAO_CTRC']\">{{item?.NOME_USUARIO_EMISSAO_CTRC}}</td>\n            <td class=\"text-truncate\" *ngIf=\"colunas['MATRICULA_USUARIO_EMISSAO_CTRC']\">{{item?.MATRICULA_USUARIO_EMISSAO_CTRC}}</td>\n          </tr>\n        </ng-template>\n      </custom-table>\n      <div class=\"mt-3 col p-0\" [hidden]=\"noResult\">\n        Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\n        <pagination\n          [maxSize]=\"5\"\n          [totalItems]=\"totalItems\"\n          [(itemsPerPage)]=\"itemsPerPage\"\n          (pageChanged)=\"onPageChanged($event)\"\n          [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPage\"\n          previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\"\n          lastText=\"&raquo;\">\n        </pagination>\n      </div>\n    </div>\n  </div>\n</ng-template>");

/***/ }),

/***/ "CJX+":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/logistica/dashboards/conferencia-cte/conferencia-cte.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: LogisticaDashboardsConferenciaCteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaDashboardsConferenciaCteComponent", function() { return LogisticaDashboardsConferenciaCteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_conferencia_cte_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./conferencia-cte.component.html */ "B5+i");
/* harmony import */ var _conferencia_cte_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./conferencia-cte.component.scss */ "5VVy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var _conferencia_cte_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./conferencia-cte.service */ "hjNq");
/* harmony import */ var _shared_services_core_xlsx_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../../../shared/services/core/xlsx.service */ "8WR6");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");
/* harmony import */ var ng_brazil__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-brazil */ "hTrW");



//angular



//servicos





// rxjs


//masks

let LogisticaDashboardsConferenciaCteComponent = class LogisticaDashboardsConferenciaCteComponent {
    constructor(route, pnotify, localeService, activatedRoute, conferenciaCteService, formBuilder, routerService, dateService, modalService, xlsxService) {
        this.route = route;
        this.pnotify = pnotify;
        this.localeService = localeService;
        this.activatedRoute = activatedRoute;
        this.conferenciaCteService = conferenciaCteService;
        this.formBuilder = formBuilder;
        this.routerService = routerService;
        this.dateService = dateService;
        this.modalService = modalService;
        this.xlsxService = xlsxService;
        this.MASKS = ng_brazil__WEBPACK_IMPORTED_MODULE_13__["MASKS"];
        this.dados = {};
        this.total = {};
        this.loading = true; //Loading FullPage
        this.loadingNavBar = false; //Loading do NAVBAR
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
        this.modoViewIncorretas = 0;
        this.modoViewNaoEmitidas = 0;
        this.relatorio = [];
        this.relatorioCache = {};
        this.colunas = {};
        this.inColunas = false;
        // Tipos de Operações (Ativo/Inativo)
        this.tipos = [
            {
                cod: '1',
                nome: 'Abastecimento',
            },
            {
                cod: '2',
                nome: 'Escoamento',
            },
        ];
        /* Paginação */
        this.itemsPerPage = 100;
        this.currentPage = 1;
        this.begin = 0;
        this.end = this.itemsPerPage;
        this.totalItems = 0;
        this.keepOriginalOrder = (a, b) => a.key;
        this.localeService.use('pt-br');
        this.bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' }, { adaptivePosition: true }, { showWeekNumbers: false });
    }
    ngOnInit() {
        this.buildForm();
        this.setBreadCrumb();
        this.onActivatedRoute();
    }
    ngOnDestroy() {
        this.$activatedRouteSubscription.unsubscribe();
        if (this.modalService) {
            this.modalService.hide(1);
        }
    }
    onActivatedRoute() {
        this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe((response) => {
            const _response = this.routerService.getBase64UrlParams(response);
            this.form.patchValue(_response);
            this.getConferencia(this.getParams());
        });
    }
    buildForm() {
        const cnpjs = "1170112600290,30456615000198,30456615000279,479795800001298,49795800001530,49795800001883";
        this.form = this.formBuilder.group({
            DS_STAT: [null],
            DS_USUA: [null],
            DT_INIC: [this.dateService.getFirstDayMonth(), [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            DT_FINA: [new Date(), [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            PAGI: [1],
            TT_REGI_PAGI: [this.itemsPerPage],
            TIME: [new Date().getTime()],
        });
    }
    setPageRegistros(itemsPerPage) {
        this.itemsPerPage = itemsPerPage;
        this.onFilter();
    }
    setBreadCrumb() {
        const id = this.activatedRoute.snapshot.params.idSubModulo;
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: `/logistica/home`,
            },
            {
                descricao: 'Dashboard',
                routerLink: `/logistica/dashboards/${id}`,
            },
            {
                descricao: 'Conferência de CTEs',
            },
        ];
    }
    /* changeViewIncorretas(event?){
      if(this.modoViewIncorretas == 1){
        this.modoViewIncorretas = 0
      }else{
        this.modoViewIncorretas = 1
      }
    } */
    openModal(template) {
        this.modalRef = this.modalService.show(template, { class: 'modal-xxl', animated: false, ignoreBackdropClick: true });
    }
    /* changeViewNaoEmitidas(event?){
      if(this.modoViewNaoEmitidas == 1){
        this.modoViewNaoEmitidas = 0
      }else{
        this.modoViewNaoEmitidas = 1
      }
    } */
    onFilter() {
        this.form.get('TIME').setValue(new Date().getTime());
        this.route.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams(this.getParams()),
        });
    }
    getConferencia(params) {
        if (!this.loading)
            this.loadingNavBar = true;
        this.conferenciaCteService
            .getConferencia(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(() => {
            this.loading = false;
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.dados = response.body['data'];
                this.noResult = false;
                for (const key in this.dados) {
                    this.total[key] = { 'valor': 0, 'quantidade': 0 };
                    if (!this.dados[key]) {
                        continue;
                    }
                    this.dados[key].foreach(el => {
                        this.total[key].valor += el === null || el === void 0 ? void 0 : el.valor;
                        this.total[key].quantidade += el === null || el === void 0 ? void 0 : el.quantidade;
                    });
                }
            }
            else {
                this.noResult = true;
                this.pnotify.notice("Nenhuma informação encontrada.");
            }
        }, (error) => {
            this.conferencia = undefined;
            this.noResult = true;
            try {
                this.pnotify.error(error.error.message);
            }
            catch (error) {
                this.pnotify.error();
            }
        });
    }
    onReset() {
        this.form.reset();
        this.form.patchValue({
            PAGI: 1,
            TT_REGI_PAGI: 100,
            TIME: [new Date().getTime()],
        });
    }
    /* onPageChanged(event) {
      this.form.get('PAGI').setValue(event.page);
      this.onFilter();
    } */
    getParams() {
        let _params = {};
        let _obj = this.form.value;
        for (let prop in _obj) {
            if (_obj[prop]) {
                if (_obj[prop] instanceof Date)
                    _params[prop] = this.dateService.convertToUrlDate(_obj[prop]);
                else
                    _params[prop] = _obj[prop];
            }
        }
        return _params;
    }
    hasData(key) {
        if (!this.dados)
            return false;
        if (!this.dados.hasOwnProperty(key))
            return false;
        if (this.dados[key].length == 0)
            return false;
        return true;
    }
    getRelatorio(template, status) {
        this.inColunas = false;
        this.form.get('DS_STAT').setValue(status);
        const params = Object.assign(Object.assign({}, this.getParams()), { 'DS_STAT': status });
        const cache = this.getRelatorioCache(status, params);
        if (cache) {
            this.relatorio = cache.values;
            this.colunas = cache.columns;
            this.openModal(template);
            return;
        }
        if (!this.loading)
            this.loadingNavBar = true;
        this.conferenciaCteService
            .getRelatorio(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(() => {
            this.loading = false;
            this.loadingNavBar = false;
        }))
            .subscribe((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (response.status === 200) {
                this.relatorio = response.body['data'];
                this.totalItems = this.relatorio.length;
                const config = this.getColumnsConfig(status);
                const keys = Object.keys(this.relatorio[0]);
                const promise = () => keys.forEach(key => this.colunas[key] = (config === null || config === void 0 ? void 0 : config.hasOwnProperty(key)) ? config[key] : false);
                yield Promise.resolve(promise());
                this.setRelatorioCache(status, params, this.relatorio, this.colunas);
                this.noResult = false;
                this.openModal(template);
            }
            else {
                this.noResult = true;
                this.relatorio = [];
                this.pnotify.notice("Nenhuma informação encontrada.");
            }
        }), (error) => {
            this.relatorio = [];
            this.noResult = true;
            try {
                this.pnotify.error(error.error.message);
            }
            catch (error) {
                this.pnotify.error();
            }
        });
    }
    setRelatorioCache(status, params, values, colunms) {
        this.relatorioCache[status] = {
            'params': params,
            'values': values,
            'columns': colunms
        };
    }
    getRelatorioCache(status, params) {
        try {
            const _params = this.relatorioCache[status]['params'];
            if ((params === null || params === void 0 ? void 0 : params.DT_INIC) == (_params === null || _params === void 0 ? void 0 : _params.DT_INIC) && (params === null || params === void 0 ? void 0 : params.DT_FINA) == (_params === null || _params === void 0 ? void 0 : _params.DT_FINA) && (params === null || params === void 0 ? void 0 : params.DS_USUA) == (_params === null || _params === void 0 ? void 0 : _params.DS_USUA))
                return this.relatorioCache[status];
        }
        catch (error) {
            return false;
        }
        return false;
    }
    hideListColumns() {
        this.inColunas = !this.inColunas;
        return this.inColunas;
    }
    setColumnState(column) {
        this.colunas[column.key] = column.value ? false : true;
        const status = this.form.get('DS_STAT').value;
        const key = `${this.getLocalStorageKey()}.${status}`;
        localStorage.setItem(key, JSON.stringify(this.colunas));
    }
    export() {
        this.xlsxService.export({ data: this.relatorio });
    }
    /* Paginação */
    onPageChanged(event) {
        this.begin = (event.page - 1) * event.itemsPerPage;
        this.end = event.page * event.itemsPerPage;
    }
    /* Paginação */
    getColumnsConfig(status) {
        const config = {
            "EMISSOES_INCORRETAS": {
                "TIPO": true,
                "CNPJ_EMITENTE": true,
                "CNPJ_EMITENTE_CTRC": true,
                "FRETE_PESO_ARCELOR": true,
                "FRETE_PESO": true,
                "CNPJ_PAGADOR": true,
                "CNPJ_PAGADOR_CTRC": true
            },
            "NAO_EMITIDO": {
                "TIPO": true,
                "CNPJ_EMITENTE": true,
                "CNPJ_PAGADOR": true,
                "CUSTO_FRETE_NF": true,
                "TRANSPORTE": true,
                "NOTA_FISCAL": true
            },
            "DEMAIS_EMISSOES": {
                "TIPO": true,
                "CNPJ_EMITENTE_CTRC": true,
                "CNPJ_PAGADOR_CTRC": true,
                "FRETE_PESO": true,
                "TRANSPORTE": true,
                "NOTA_FISCAL": true
            }
        };
        const key = `${this.getLocalStorageKey()}.${status}`;
        const storage = localStorage.getItem(key);
        if (storage)
            return JSON.parse(storage);
        if (status)
            return config[status];
        return config;
    }
    getLocalStorageKey() {
        const key = `logistica.dashboards.conferenciaCte.colunas`;
        return key;
    }
};
LogisticaDashboardsConferenciaCteComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"] },
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__["BsLocaleService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _conferencia_cte_service__WEBPACK_IMPORTED_MODULE_8__["LogisticaDashboardConferenciaCteService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_7__["RouterService"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__["DateService"] },
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__["BsModalService"] },
    { type: _shared_services_core_xlsx_service__WEBPACK_IMPORTED_MODULE_9__["XlsxService"] }
];
LogisticaDashboardsConferenciaCteComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'logistica-dashboard-conferencia-cte',
        template: _raw_loader_conferencia_cte_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_conferencia_cte_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"],
        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__["BsLocaleService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _conferencia_cte_service__WEBPACK_IMPORTED_MODULE_8__["LogisticaDashboardConferenciaCteService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_7__["RouterService"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__["DateService"],
        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__["BsModalService"],
        _shared_services_core_xlsx_service__WEBPACK_IMPORTED_MODULE_9__["XlsxService"]])
], LogisticaDashboardsConferenciaCteComponent);



/***/ }),

/***/ "osSO":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/logistica/dashboards/conferencia-cte/conferencia-cte.module.ts ***!
  \****************************************************************************************/
/*! exports provided: LogisticaDashboardsConferenciaCteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaDashboardsConferenciaCteModule", function() { return LogisticaDashboardsConferenciaCteModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _conferencia_cte_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./conferencia-cte.component */ "CJX+");
/* harmony import */ var _conferencia_cte_routing_modulte__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./conferencia-cte-routing.modulte */ "/l1F");
/* harmony import */ var _core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../core/not-found/not-found.module */ "sCnT");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var angular2_counto__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular2-counto */ "RNH4");
/* harmony import */ var angular2_counto__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(angular2_counto__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");












let LogisticaDashboardsConferenciaCteModule = class LogisticaDashboardsConferenciaCteModule {
};
LogisticaDashboardsConferenciaCteModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _conferencia_cte_component__WEBPACK_IMPORTED_MODULE_4__["LogisticaDashboardsConferenciaCteComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _conferencia_cte_routing_modulte__WEBPACK_IMPORTED_MODULE_5__["LogisticaDashboadsConferenciaCteRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["PaginationModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"].forRoot(),
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"],
            angular2_counto__WEBPACK_IMPORTED_MODULE_9__["CountoModule"],
            _core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_6__["NotFoundModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_11__["TemplatesModule"]
        ]
    })
], LogisticaDashboardsConferenciaCteModule);



/***/ })

}]);
//# sourceMappingURL=conferencia-cte-conferencia-cte-module-es2015.js.map